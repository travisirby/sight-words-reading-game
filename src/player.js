// Side-view voxel kid. Walks +x, jump physics with coyote time and jump
// buffering. Every jump launches at full power — no hold-to-boost, so one
// press always clears the same height (kid-friendly).
// Boxes only, canvas face texture, walk/jump/stomp/stumble animations.

import * as THREE from 'three';
import { sfxJump } from './audio.js';

export const KID_H = 1.7; // collision height
export const KID_W = 0.7; // collision width

const GRAVITY = -24; // falling
const GRAVITY_RISE = -15; // lighter on the way up (floatier, more forgiving)
const JUMP_V = 10.2; // fixed apex ~3.5 blocks: +3 platforms with margin
const COYOTE = 0.12;
const BUFFER = 0.15;

function makeFaceTexture() {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#ffcf9e'; // skin
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#5a3d1e'; // hair fringe
  g.fillRect(0, 0, 64, 14);
  g.fillStyle = '#222'; // eyes
  g.fillRect(16, 26, 8, 8);
  g.fillRect(40, 26, 8, 8);
  g.strokeStyle = '#a34d2a'; // smile
  g.lineWidth = 4;
  g.beginPath();
  g.arc(32, 42, 10, 0.2 * Math.PI, 0.8 * Math.PI);
  g.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Shared kid builder — the overworld token reuses it at a smaller scale.
export function makeKidMesh(scale = 1) {
  const group = new THREE.Group();
  const box = new THREE.BoxGeometry(1, 1, 1);
  const skin = new THREE.MeshLambertMaterial({ color: 0xffcf9e });
  const hair = new THREE.MeshLambertMaterial({ color: 0x5a3d1e });
  const shirt = new THREE.MeshLambertMaterial({ color: 0x2979ff });
  const pants = new THREE.MeshLambertMaterial({ color: 0x37474f });
  const face = new THREE.MeshLambertMaterial({ map: makeFaceTexture() });

  // The body is built facing +x (arms at the z-sides, legs swinging in the
  // x-y plane), so the face goes on +x too — head and chest always agree.
  // Whoever owns the group yaws it to show the face to the camera.
  const head = new THREE.Mesh(box, [skin, hair, hair, skin, face, hair]);
  head.rotation.y = Math.PI / 2; // move the +z face texture onto +x
  head.scale.set(0.5, 0.5, 0.5);
  head.position.y = 1.35;

  const body = new THREE.Mesh(box, shirt);
  body.scale.set(0.5, 0.6, 0.3);
  body.position.y = 0.8;

  const mkLimb = (mat, sx, sy) => {
    const pivot = new THREE.Group(); // pivot at shoulder/hip
    const m = new THREE.Mesh(box, mat);
    m.scale.set(sx, sy, sx);
    m.position.y = -sy / 2;
    pivot.add(m);
    return pivot;
  };

  const armL = mkLimb(shirt, 0.16, 0.5);
  armL.position.set(0, 1.08, -0.34);
  const armR = mkLimb(shirt, 0.16, 0.5);
  armR.position.set(0, 1.08, 0.34);
  const legL = mkLimb(pants, 0.18, 0.5);
  legL.position.set(0, 0.5, -0.14);
  const legR = mkLimb(pants, 0.18, 0.5);
  legR.position.set(0, 0.5, 0.14);

  group.add(head, body, armL, armR, legL, legR);
  group.scale.setScalar(scale);
  group.userData.parts = {
    head, body, armL, armR, legL, legR,
    mats: [skin, hair, shirt, pants],
  };
  return group;
}

export class Player {
  constructor(scene) {
    this.group = makeKidMesh(1);
    scene.add(this.group);
    this.parts = this.group.userData.parts;

    // Fake blob shadow (no shadow maps).
    const shadowGeo = new THREE.CircleGeometry(0.5, 16);
    shadowGeo.rotateX(-Math.PI / 2);
    this.shadow = new THREE.Mesh(
      shadowGeo,
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
    );
    scene.add(this.shadow);

    this.reset(0, 0);
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.grounded = true;
    this.buffer = 0;
    this.coyote = 0;
    this.fallPeak = y;
    this.stumbleT = 0;
    this.squashT = 0;
    this.walkPhase = 0;
    this.faceYaw = -Math.PI / 2; // forward (+x local) turned to the camera
    this.group.position.set(x, y, 0);
    this.group.rotation.set(0, this.faceYaw, 0);
    this.group.scale.setScalar(1);
    for (const m of this.parts.mats) m.emissive.setHex(0x000000);
  }

  jump() {
    this.buffer = BUFFER;
  }

  // External bounce (critter stomp, bonk pushdown, ...).
  bounce(v) {
    this.vy = v;
    this.grounded = false;
    this.fallPeak = this.y;
  }

  stumble() {
    this.stumbleT = 0.6;
    for (const m of this.parts.mats) m.emissive.setHex(0xaa2222);
  }

  get isAirborne() {
    return !this.grounded;
  }

  // level: { groundTopAt(x), floorAt(x, feetY) }
  // cb: { onLand(fallDist) } — fired on every landing with fall height.
  update(dt, speed, level, cb) {
    // ---- horizontal walk (either direction during choice mode); walls
    // (ground rises) block until jumped ----
    if (speed !== 0) {
      const dir = speed > 0 ? 1 : -1;
      const nx = this.x + speed * dt;
      const wallTop = level.groundTopAt(nx + dir * (KID_W / 2));
      if (wallTop <= this.y + 0.25) this.x = nx;
      // else: blocked — run in place until a jump clears it
    }

    // ---- vertical ----
    this.buffer -= dt;
    this.coyote -= dt;
    if (this.grounded) this.coyote = COYOTE;

    if (this.buffer > 0 && (this.grounded || this.coyote > 0)) {
      this.vy = JUMP_V;
      this.grounded = false;
      this.buffer = 0;
      this.coyote = 0;
      this.fallPeak = this.y;
      sfxJump();
    }

    if (!this.grounded) {
      const g = this.vy > 0 ? GRAVITY_RISE : GRAVITY;
      const prevY = this.y;
      this.vy += g * dt;
      this.y += this.vy * dt;
      this.fallPeak = Math.max(this.fallPeak, this.y);
      if (this.vy <= 0) {
        const floor = level.floorAt(this.x, prevY + 0.05);
        if (floor !== null && this.y <= floor) {
          this.y = floor;
          this.vy = 0;
          this.grounded = true;
          this.squashT = 0.12;
          if (cb && cb.onLand) cb.onLand(this.fallPeak - floor);
        }
      }
    } else {
      // Follow floor; walked off an edge -> start falling (coyote grace).
      const floor = level.floorAt(this.x, this.y + 0.05);
      if (floor < this.y - 0.02) {
        this.grounded = false;
        this.vy = 0;
        this.fallPeak = this.y;
      } else {
        this.y = floor;
      }
    }

    // ---- animation ----
    const p = this.parts;
    if (!this.grounded) {
      p.armL.rotation.z = 2.4;
      p.armR.rotation.z = 2.4;
      p.legL.rotation.z = -0.5;
      p.legR.rotation.z = 0.3;
      p.legL.position.y = 0.5;
      p.legR.position.y = 0.5;
    } else {
      // Stride rate compensates for the ~35° yaw foreshortening: feet must
      // sweep backward as fast as the ground scrolls or the gait reads as a
      // moonwalk (feet sliding forward). abs(): choice mode walks left too.
      this.walkPhase += dt * Math.max(Math.abs(speed), 0.001) * 2.7;
      const swing = Math.abs(speed) > 0.2 ? Math.sin(this.walkPhase) : 0;
      const stride = Math.abs(speed) > 0.2 ? Math.cos(this.walkPhase) : 0;
      p.armL.rotation.z = swing * 0.9;
      p.armR.rotation.z = -swing * 0.9;
      p.legL.rotation.z = -swing * 0.9;
      p.legR.rotation.z = swing * 0.9;
      // Lift whichever leg is swinging forward so the planted leg carries
      // the motion — the other foot never scuffs forward along the ground.
      p.legL.position.y = 0.5 + Math.max(0, -stride) * 0.12;
      p.legR.position.y = 0.5 + Math.max(0, stride) * 0.12;
    }
    const bob = this.grounded && Math.abs(speed) > 0.2 ? Math.abs(Math.cos(this.walkPhase)) * 0.06 : 0;

    // Three-quarter view while moving: chest and face point ~35° off the
    // direction of travel (±x, mirrored when steering left in choice mode)
    // toward the camera, so the run reads forward and the face stays
    // visible; ease back to camera-facing when idle.
    const targetYaw = Math.abs(speed) > 0.2
      ? -Math.PI / 2 + Math.sign(speed) * (Math.PI / 2 - 0.61)
      : -Math.PI / 2;
    this.faceYaw += (targetYaw - this.faceYaw) * Math.min(1, dt * 5);
    this.group.rotation.y = this.faceYaw;

    // Landing squash.
    let sy = 1;
    if (this.squashT > 0) {
      this.squashT -= dt;
      sy = 0.85 + 0.15 * (1 - this.squashT / 0.12);
    }
    this.group.scale.set(1, sy, 1);
    this.group.position.set(this.x, this.y + bob, 0);

    // Stumble: brief wobble + red flash.
    if (this.stumbleT > 0) {
      this.stumbleT -= dt;
      this.group.rotation.z = Math.sin(this.stumbleT * 10) * 0.25 * (this.stumbleT / 0.6);
      if (this.stumbleT <= 0) {
        this.group.rotation.z = 0;
        for (const m of this.parts.mats) m.emissive.setHex(0x000000);
      }
    }

    // Blob shadow on whatever floor is below, shrinks with height.
    const under = level.floorAt(this.x, this.y + 0.05);
    this.shadow.position.set(this.x, under + 0.02, 0);
    const h = this.y - under;
    const sc = Math.max(0.4, 1 - h * 0.12);
    this.shadow.scale.set(sc, 1, sc);
    this.shadow.material.opacity = 0.3 * Math.max(0.3, 1 - h * 0.1);
  }
}
