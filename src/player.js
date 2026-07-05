// Side-view voxel kid. Walks +x, jump physics with coyote time and jump
// buffering. Every jump launches at full power — no hold-to-boost, so one
// press always clears the same height (kid-friendly).
// Boxes only, canvas face texture, walk/jump/stomp/stumble animations.

import * as THREE from 'three';
import { sfxJump } from './audio.js';
import * as store from './store.js';
import { lookFrom } from './character.js';

export const KID_H = 1.7; // collision height
export const KID_W = 0.7; // collision width

const GRAVITY = -24; // falling
const GRAVITY_RISE = -15; // lighter on the way up (floatier, more forgiving)
const JUMP_V = 10.2; // fixed apex ~3.5 blocks: +3 platforms with margin
const COYOTE = 0.12;
const BUFFER = 0.15;

const css = (hex) => `#${hex.toString(16).padStart(6, '0')}`;

function makeFaceTexture(skinHex, hairHex, fringe) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = css(skinHex);
  g.fillRect(0, 0, 64, 64);
  if (fringe) {
    g.fillStyle = css(hairHex);
    g.fillRect(0, 0, 64, 14);
  }
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

// Hair style indices (see character.js STYLES): 0 short, 1 spiky, 2 long, 3 buzz.
// The head sides are always skin; hair is a slightly-oversized cap box that
// covers the top 2/3 of the head, so it reads as hair from every angle while
// the character rotates. Buzz gets no cap — just the painted head top.
function buildHairExtras(style, hairMat) {
  const g = new THREE.Group();
  if (style === 3) return g;
  const box = new THREE.BoxGeometry(1, 1, 1);
  // Cap: head is 0.5 wide with its top at y=1.6; hair reaches down to ~1.27.
  // The kid faces +x, so its front stops just behind the face (+x) so the
  // eyes stay visible and the texture's fringe reads as the hair's front.
  const cap = new THREE.Mesh(box, hairMat);
  cap.scale.set(0.53, 0.34, 0.56);
  cap.position.set(-0.025, 1.44, 0);
  g.add(cap);
  if (style === 1) {
    // Spiky: three little tufts standing on the cap.
    for (let i = -1; i <= 1; i++) {
      const s = new THREE.Mesh(box, hairMat);
      s.scale.set(0.12, 0.16, 0.12);
      s.position.set(i * 0.05, 1.68, i * 0.14);
      g.add(s);
    }
  } else if (style === 2) {
    // Long: a panel down the back (-x), tucked up under the cap so no skin
    // shows along its top edge.
    const m = new THREE.Mesh(box, hairMat);
    m.scale.set(0.14, 0.6, 0.48);
    m.position.set(-0.26, 1.3, 0);
    g.add(m);
  }
  return g;
}

// The current saved look (store must be loaded before meshes are built).
export function currentLook() {
  return lookFrom(store.get().character);
}

// Recolor/restyle an existing kid mesh in place. Works on any group built
// by makeKidMesh (in-level player, overworld token, character preview).
export function applyLook(group, look) {
  const p = group.userData.parts;
  const [skin, hair, shirt, pants] = p.mats;
  skin.color.setHex(look.skin);
  hair.color.setHex(look.hair);
  shirt.color.setHex(look.shirt);
  pants.color.setHex(look.pants);
  if (p.face.map) p.face.map.dispose();
  p.face.map = makeFaceTexture(look.skin, look.hair, look.style !== 3);
  p.face.needsUpdate = true;
  group.remove(p.hairExtra);
  p.hairExtra = buildHairExtras(look.style, hair);
  group.add(p.hairExtra);
}

// Shared kid builder — the overworld token reuses it at a smaller scale.
export function makeKidMesh(scale = 1, look = null) {
  look = look || currentLook();
  const group = new THREE.Group();
  const box = new THREE.BoxGeometry(1, 1, 1);
  const skin = new THREE.MeshLambertMaterial({ color: look.skin });
  const hair = new THREE.MeshLambertMaterial({ color: look.hair });
  const shirt = new THREE.MeshLambertMaterial({ color: look.shirt });
  const pants = new THREE.MeshLambertMaterial({ color: look.pants });
  const face = new THREE.MeshLambertMaterial({
    map: makeFaceTexture(look.skin, look.hair, look.style !== 3),
  });

  // The body is built facing +x (arms at the z-sides, legs swinging in the
  // x-y plane), so the face goes on +x too — head and chest always agree.
  // Whoever owns the group yaws it to show the face to the camera.
  // Sides are skin; the hair cap in buildHairExtras carries the hair color.
  const head = new THREE.Mesh(box, [skin, skin, hair, skin, face, skin]);
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

  const hairExtra = buildHairExtras(look.style, hair);

  group.add(head, body, armL, armR, legL, legR, hairExtra);
  group.scale.setScalar(scale);
  group.userData.parts = {
    head, body, armL, armR, legL, legR, face, hairExtra,
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
