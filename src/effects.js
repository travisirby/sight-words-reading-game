// Pooled particle bursts (confetti / sparkles / fireworks) and floating
// "+N" text sprites. No per-frame allocations: everything preallocated.

import * as THREE from 'three';

const MAX_POINTS = 90;
const NUM_SYSTEMS = 8;
const NUM_SPRITES = 8;

const PALETTE = [0xff5252, 0xffd740, 0x69f0ae, 0x40c4ff, 0xe040fb, 0xffab40];

class Burst {
  constructor(scene) {
    this.positions = new Float32Array(MAX_POINTS * 3);
    this.velocities = new Float32Array(MAX_POINTS * 3);
    this.colors = new Float32Array(MAX_POINTS * 3);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.material = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      depthWrite: false,
    });
    this.points = new THREE.Points(geo, this.material);
    this.points.visible = false;
    this.points.frustumCulled = false;
    this.life = 0;
    this.maxLife = 1;
    this.gravity = -9;
    scene.add(this.points);
  }

  fire(pos, { speed = 6, up = 5, life = 1.1, gravity = -9, count = MAX_POINTS } = {}) {
    this.count = Math.min(count, MAX_POINTS);
    const col = new THREE.Color();
    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      this.positions[i3] = pos.x;
      this.positions[i3 + 1] = pos.y;
      this.positions[i3 + 2] = pos.z;
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * speed;
      this.velocities[i3] = Math.cos(a) * r;
      this.velocities[i3 + 1] = Math.random() * up + 1;
      this.velocities[i3 + 2] = Math.sin(a) * r;
      col.setHex(PALETTE[(Math.random() * PALETTE.length) | 0]);
      this.colors[i3] = col.r;
      this.colors[i3 + 1] = col.g;
      this.colors[i3 + 2] = col.b;
    }
    this.points.geometry.setDrawRange(0, this.count);
    this.points.geometry.attributes.position.needsUpdate = true;
    this.points.geometry.attributes.color.needsUpdate = true;
    this.life = life;
    this.maxLife = life;
    this.gravity = gravity;
    this.points.visible = true;
  }

  update(dt) {
    if (!this.points.visible) return;
    this.life -= dt;
    if (this.life <= 0) {
      this.points.visible = false;
      return;
    }
    for (let i = 0; i < this.count; i++) {
      const i3 = i * 3;
      this.velocities[i3 + 1] += this.gravity * dt;
      this.positions[i3] += this.velocities[i3] * dt;
      this.positions[i3 + 1] += this.velocities[i3 + 1] * dt;
      this.positions[i3 + 2] += this.velocities[i3 + 2] * dt;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
    this.material.opacity = Math.min(1, (this.life / this.maxLife) * 2);
  }
}

function makeTextTexture(text) {
  const c = document.createElement('canvas');
  c.width = 128;
  c.height = 64;
  const g = c.getContext('2d');
  g.font = 'bold 44px Arial Rounded MT Bold, Arial, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineWidth = 8;
  g.strokeStyle = '#2c3e75';
  g.strokeText(text, 64, 32);
  g.fillStyle = '#ffd93d';
  g.fillText(text, 64, 32);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.bursts = [];
    for (let i = 0; i < NUM_SYSTEMS; i++) this.bursts.push(new Burst(scene));
    this.burstIdx = 0;

    this.textures = new Map(); // text -> texture, reused
    this.sprites = [];
    for (let i = 0; i < NUM_SPRITES; i++) {
      const mat = new THREE.SpriteMaterial({ transparent: true, depthWrite: false });
      const spr = new THREE.Sprite(mat);
      spr.scale.set(1.4, 0.7, 1);
      spr.visible = false;
      spr.userData.life = 0;
      scene.add(spr);
      this.sprites.push(spr);
    }
    this.pendingFireworks = [];
  }

  nextBurst() {
    const b = this.bursts[this.burstIdx];
    this.burstIdx = (this.burstIdx + 1) % this.bursts.length;
    return b;
  }

  confetti(pos) {
    this.nextBurst().fire(pos, { speed: 5, up: 7, life: 1.4, gravity: -10 });
  }

  sparkle(pos) {
    this.nextBurst().fire(pos, { speed: 2.5, up: 3, life: 0.6, gravity: -4, count: 30 });
  }

  // Schedules several bursts above a center point over ~2s.
  fireworks(center) {
    for (let i = 0; i < 6; i++) {
      this.pendingFireworks.push({
        t: i * 0.35,
        pos: new THREE.Vector3(
          center.x + (Math.random() - 0.5) * 10,
          center.y + 4 + Math.random() * 4,
          center.z - 6 - Math.random() * 8
        ),
      });
    }
  }

  floatText(pos, text) {
    if (!this.textures.has(text)) this.textures.set(text, makeTextTexture(text));
    const spr = this.sprites.find((s) => !s.visible) || this.sprites[0];
    spr.material.map = this.textures.get(text);
    spr.material.opacity = 1;
    spr.position.copy(pos);
    spr.userData.life = 0.9;
    spr.visible = true;
  }

  update(dt) {
    for (const b of this.bursts) b.update(dt);
    for (const s of this.sprites) {
      if (!s.visible) continue;
      s.userData.life -= dt;
      if (s.userData.life <= 0) {
        s.visible = false;
        continue;
      }
      s.position.y += 1.6 * dt;
      s.material.opacity = Math.min(1, s.userData.life * 2);
    }
    if (this.pendingFireworks.length) {
      for (const f of this.pendingFireworks) f.t -= dt;
      const ready = this.pendingFireworks.filter((f) => f.t <= 0);
      if (ready.length) {
        this.pendingFireworks = this.pendingFireworks.filter((f) => f.t > 0);
        for (const f of ready) {
          this.nextBurst().fire(f.pos, { speed: 6, up: 3, life: 1.6, gravity: -5 });
        }
      }
    }
  }
}
