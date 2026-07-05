// Voxel kid: boxes only, canvas face texture, run/jump/stumble animation.
// Forward is -z. Lane index 0..2 -> x = -2.5, 0, +2.5.

import * as THREE from 'three';
import { sfxJump } from './audio.js';

export const LANE_X = [-2.5, 0, 2.5];
const LANE_TWEEN = 0.15; // seconds
const JUMP_TIME = 0.55;
const JUMP_HEIGHT = 1.35;

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

export class Player {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);

    const box = new THREE.BoxGeometry(1, 1, 1);
    const skin = new THREE.MeshLambertMaterial({ color: 0xffcf9e });
    const hair = new THREE.MeshLambertMaterial({ color: 0x5a3d1e });
    const shirt = new THREE.MeshLambertMaterial({ color: 0x2979ff });
    const pants = new THREE.MeshLambertMaterial({ color: 0x37474f });
    const face = new THREE.MeshLambertMaterial({ map: makeFaceTexture() });
    this.flashMats = [skin, hair, shirt, pants];

    // Head: face on -z (forward), hair on top and on +z (camera side).
    const head = new THREE.Mesh(box, [skin, skin, hair, skin, hair, face]);
    head.scale.set(0.5, 0.5, 0.5);
    head.position.y = 1.35;

    const body = new THREE.Mesh(box, shirt);
    body.scale.set(0.5, 0.6, 0.3);
    body.position.y = 0.8;

    const mkLimb = (mat, sx, sy) => {
      // Pivot at the top so it swings from shoulder/hip.
      const pivot = new THREE.Group();
      const m = new THREE.Mesh(box, mat);
      m.scale.set(sx, sy, sx);
      m.position.y = -sy / 2;
      pivot.add(m);
      return pivot;
    };

    this.armL = mkLimb(shirt, 0.16, 0.5);
    this.armL.position.set(-0.34, 1.08, 0);
    this.armR = mkLimb(shirt, 0.16, 0.5);
    this.armR.position.set(0.34, 1.08, 0);
    this.legL = mkLimb(pants, 0.18, 0.5);
    this.legL.position.set(-0.14, 0.5, 0);
    this.legR = mkLimb(pants, 0.18, 0.5);
    this.legR.position.set(0.14, 0.5, 0);

    this.body = body;
    this.head = head;
    this.group.add(head, body, this.armL, this.armR, this.legL, this.legR);

    // Fake blob shadow (no shadow maps).
    const shadowGeo = new THREE.CircleGeometry(0.5, 16);
    shadowGeo.rotateX(-Math.PI / 2);
    this.shadow = new THREE.Mesh(
      shadowGeo,
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
    );
    this.shadow.position.y = 0.02;
    scene.add(this.shadow);

    this.lane = 1;
    this.laneFrom = LANE_X[1];
    this.laneTo = LANE_X[1];
    this.laneT = 1;
    this.jumpT = -1; // -1 = grounded
    this.stumbleT = 0;
    this.runPhase = 0;
    this.z = 0;
  }

  reset() {
    this.lane = 1;
    this.laneFrom = this.laneTo = LANE_X[1];
    this.laneT = 1;
    this.jumpT = -1;
    this.stumbleT = 0;
    this.z = 0;
    this.group.position.set(0, 0, 0);
  }

  moveLane(dir) {
    const next = this.lane + dir;
    if (next < 0 || next > 2) return;
    this.lane = next;
    this.laneFrom = this.group.position.x;
    this.laneTo = LANE_X[next];
    this.laneT = 0;
  }

  jump() {
    if (this.jumpT >= 0) return; // no double jump
    this.jumpT = 0;
    sfxJump();
  }

  get isAirborne() {
    return this.jumpT >= 0;
  }

  stumble() {
    this.stumbleT = 0.6;
    for (const m of this.flashMats) m.emissive.setHex(0xaa2222);
  }

  update(dt, speed) {
    this.z -= speed * dt;
    this.group.position.z = this.z;

    // Lane tween (ease-out cubic).
    if (this.laneT < 1) {
      this.laneT = Math.min(1, this.laneT + dt / LANE_TWEEN);
      const e = 1 - Math.pow(1 - this.laneT, 3);
      this.group.position.x = this.laneFrom + (this.laneTo - this.laneFrom) * e;
    }

    // Jump parabola.
    let y = 0;
    if (this.jumpT >= 0) {
      this.jumpT += dt;
      const t = this.jumpT / JUMP_TIME;
      if (t >= 1) {
        this.jumpT = -1;
      } else {
        y = JUMP_HEIGHT * 4 * t * (1 - t);
      }
    }

    // Run cycle.
    this.runPhase += dt * speed * 1.4;
    const swing = Math.sin(this.runPhase);
    if (this.jumpT >= 0) {
      // Arms up in the air.
      this.armL.rotation.x = -2.4;
      this.armR.rotation.x = -2.4;
      this.legL.rotation.x = 0.5;
      this.legR.rotation.x = -0.3;
    } else {
      this.armL.rotation.x = swing * 0.9;
      this.armR.rotation.x = -swing * 0.9;
      this.legL.rotation.x = -swing * 0.9;
      this.legR.rotation.x = swing * 0.9;
    }
    const bob = this.jumpT >= 0 ? 0 : Math.abs(Math.cos(this.runPhase)) * 0.06;
    this.group.position.y = y + bob;

    // Stumble: brief backward tilt + red flash.
    if (this.stumbleT > 0) {
      this.stumbleT -= dt;
      this.group.rotation.x = Math.sin(this.stumbleT * 10) * 0.25 * (this.stumbleT / 0.6);
      if (this.stumbleT <= 0) {
        this.group.rotation.x = 0;
        for (const m of this.flashMats) m.emissive.setHex(0x000000);
      }
    }

    // Blob shadow follows on the ground, shrinks while airborne.
    this.shadow.position.x = this.group.position.x;
    this.shadow.position.z = this.z;
    const sc = 1 - Math.min(0.5, y * 0.35);
    this.shadow.scale.set(sc, 1, sc);
  }
}
