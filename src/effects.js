// Pooled particle bursts (voxel confetti / sparkles / fireworks), ring
// pulses, star pops and floating "+N" text sprites. No per-frame
// allocations: everything preallocated and recycled.

import * as THREE from 'three';

const MAX_CUBES = 36; // per burst system
const NUM_SYSTEMS = 8;
const NUM_SPRITES = 8;
const NUM_RINGS = 5;
const NUM_STARS = 4;

const PALETTE = [0xff5252, 0xffd740, 0x69f0ae, 0x40c4ff, 0xe040fb, 0xffab40];
const GOLD_PALETTE = [0xffd740, 0xffe57f, 0xfff3b0, 0xffffff, 0xffab40];

const cubeGeo = new THREE.BoxGeometry(1, 1, 1);
const dummy = new THREE.Object3D();

// One burst = an InstancedMesh of little spinning voxel cubes with varied
// sizes, so confetti reads chunky and blocky instead of round points.
class Burst {
  constructor(scene) {
    this.material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 1, depthWrite: false });
    this.mesh = new THREE.InstancedMesh(cubeGeo, this.material, MAX_CUBES);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.visible = false;
    this.mesh.frustumCulled = false;
    // pos(3) + vel(3) + rot(2: angle,z-angle) + spin(2) + size(1) = 11
    this.data = new Float32Array(MAX_CUBES * 11);
    this.count = 0;
    this.life = 0;
    this.maxLife = 1;
    this.gravity = -9;
    scene.add(this.mesh);
  }

  fire(pos, {
    speed = 6, up = 5, life = 1.1, gravity = -9, count = MAX_CUBES,
    size = 0.2, palette = PALETTE,
  } = {}) {
    this.count = Math.min(count, MAX_CUBES);
    const col = new THREE.Color();
    for (let i = 0; i < this.count; i++) {
      const d = i * 11;
      this.data[d] = pos.x;
      this.data[d + 1] = pos.y;
      this.data[d + 2] = pos.z;
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * speed;
      this.data[d + 3] = Math.cos(a) * r;
      this.data[d + 4] = Math.random() * up + 1;
      this.data[d + 5] = Math.sin(a) * r;
      this.data[d + 6] = Math.random() * Math.PI; // rotation angles
      this.data[d + 7] = Math.random() * Math.PI;
      this.data[d + 8] = (Math.random() - 0.5) * 16; // spin rates
      this.data[d + 9] = (Math.random() - 0.5) * 16;
      this.data[d + 10] = size * (0.5 + Math.random()); // varied chunk sizes
      col.setHex(palette[(Math.random() * palette.length) | 0]);
      this.mesh.setColorAt(i, col);
    }
    this.mesh.count = this.count;
    this.mesh.instanceColor.needsUpdate = true;
    this.life = life;
    this.maxLife = life;
    this.gravity = gravity;
    this.material.opacity = 1;
    this.mesh.visible = true;
    this.write(); // place matrices before first render
  }

  write() {
    // Shrink the cubes away over the last third of their life.
    const u = this.life / this.maxLife;
    const shrink = Math.min(1, u * 3);
    for (let i = 0; i < this.count; i++) {
      const d = i * 11;
      dummy.position.set(this.data[d], this.data[d + 1], this.data[d + 2]);
      dummy.rotation.set(this.data[d + 6], 0, this.data[d + 7]);
      dummy.scale.setScalar(this.data[d + 10] * shrink);
      dummy.updateMatrix();
      this.mesh.setMatrixAt(i, dummy.matrix);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
  }

  update(dt) {
    if (!this.mesh.visible) return;
    this.life -= dt;
    if (this.life <= 0) {
      this.mesh.visible = false;
      return;
    }
    for (let i = 0; i < this.count; i++) {
      const d = i * 11;
      this.data[d + 4] += this.gravity * dt;
      this.data[d] += this.data[d + 3] * dt;
      this.data[d + 1] += this.data[d + 4] * dt;
      this.data[d + 2] += this.data[d + 5] * dt;
      this.data[d + 6] += this.data[d + 8] * dt;
      this.data[d + 7] += this.data[d + 9] * dt;
    }
    this.write();
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

function makeStarTexture() {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d');
  g.translate(32, 32);
  g.fillStyle = '#fff6c8';
  g.strokeStyle = '#ffd93d';
  g.lineWidth = 3;
  g.beginPath();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 11 : 28;
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    g[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r);
  }
  g.closePath();
  g.fill();
  g.stroke();
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

    // Soft expanding ring pulses (face the camera on the xy plane).
    const ringGeo = new THREE.RingGeometry(0.42, 0.55, 24);
    this.rings = [];
    for (let i = 0; i < NUM_RINGS; i++) {
      const m = new THREE.Mesh(
        ringGeo,
        new THREE.MeshBasicMaterial({
          color: 0xffffff, transparent: true, opacity: 0,
          depthWrite: false, side: THREE.DoubleSide,
        })
      );
      m.visible = false;
      scene.add(m);
      this.rings.push({ m, life: 0, maxLife: 1, grow: 4 });
    }
    this.ringIdx = 0;

    // Star pops for correct answers.
    this.starTex = makeStarTexture();
    this.stars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      const spr = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: this.starTex, transparent: true, depthWrite: false })
      );
      spr.visible = false;
      scene.add(spr);
      this.stars.push({ spr, life: 0, maxLife: 1 });
    }
    this.starIdx = 0;

    this.pendingFireworks = [];
  }

  nextBurst() {
    const b = this.bursts[this.burstIdx];
    this.burstIdx = (this.burstIdx + 1) % this.bursts.length;
    return b;
  }

  ringPulse(pos, color = 0xffffff, scale = 1) {
    const r = this.rings[this.ringIdx];
    this.ringIdx = (this.ringIdx + 1) % this.rings.length;
    r.m.material.color.setHex(color);
    r.m.position.copy(pos);
    r.m.position.z += 0.3; // in front of blocks so the pulse always shows
    r.m.scale.setScalar(0.5 * scale);
    r.grow = 4.5 * scale;
    r.life = r.maxLife = 0.45;
    r.m.visible = true;
  }

  starPop(pos, scale = 1) {
    const s = this.stars[this.starIdx];
    this.starIdx = (this.starIdx + 1) % this.stars.length;
    s.spr.position.copy(pos);
    s.spr.position.z += 0.35;
    s.spr.material.rotation = Math.random() * Math.PI;
    s.spr.scale.setScalar(0.3 * scale);
    s.spr.userData.grow = 3.6 * scale;
    s.life = s.maxLife = 0.4;
    s.spr.visible = true;
  }

  // Big celebration: chunky voxel confetti + star pop + soft ring.
  confetti(pos) {
    this.nextBurst().fire(pos, { speed: 5, up: 7, life: 1.4, gravity: -10 });
    this.starPop(pos, 1.2);
    this.ringPulse(pos, 0xfff3b0, 1.2);
  }

  // Sonic-style: getting hurt sprays your coins out in a golden burst that
  // arcs up and rains back down. n scales the spray to how much was lost.
  coinScatter(pos, n = 6) {
    this.nextBurst().fire(pos, {
      speed: 4.5, up: 6, life: 1.1, gravity: -13,
      count: Math.min(28, 8 + n * 3), size: 0.18, palette: GOLD_PALETTE,
    });
    this.ringPulse(pos, 0xffd93d, 0.9);
  }

  // Small satisfying pickup: golden glints + a tight ring pulse.
  sparkle(pos) {
    this.nextBurst().fire(pos, {
      speed: 2.5, up: 3.5, life: 0.6, gravity: -4, count: 16,
      size: 0.13, palette: GOLD_PALETTE,
    });
    this.ringPulse(pos, 0xffe57f, 0.7);
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
    spr.scale.set(0.3, 0.15, 1); // pops up to full size in update
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
      // Scale-pop in with a little overshoot, then drift up and fade.
      const age = 0.9 - s.userData.life;
      const k = Math.min(1, age / 0.16);
      const pop = k + Math.sin(k * Math.PI) * 0.22;
      s.scale.set(1.4 * pop, 0.7 * pop, 1);
      s.position.y += 1.6 * dt;
      s.material.opacity = Math.min(1, s.userData.life * 2);
    }

    for (const r of this.rings) {
      if (!r.m.visible) continue;
      r.life -= dt;
      if (r.life <= 0) {
        r.m.visible = false;
        continue;
      }
      const s = r.m.scale.x + r.grow * dt;
      r.m.scale.setScalar(s);
      r.m.material.opacity = 0.65 * (r.life / r.maxLife);
    }

    for (const s of this.stars) {
      if (!s.spr.visible) continue;
      s.life -= dt;
      if (s.life <= 0) {
        s.spr.visible = false;
        continue;
      }
      const sc = s.spr.scale.x + s.spr.userData.grow * dt;
      s.spr.scale.setScalar(sc);
      s.spr.material.rotation += dt * 2.5;
      s.spr.material.opacity = Math.min(1, (s.life / s.maxLife) * 1.6);
    }

    if (this.pendingFireworks.length) {
      for (const f of this.pendingFireworks) f.t -= dt;
      const ready = this.pendingFireworks.filter((f) => f.t <= 0);
      if (ready.length) {
        this.pendingFireworks = this.pendingFireworks.filter((f) => f.t > 0);
        for (const f of ready) {
          this.nextBurst().fire(f.pos, { speed: 6, up: 3, life: 1.6, gravity: -5, size: 0.26 });
        }
      }
    }
  }
}
