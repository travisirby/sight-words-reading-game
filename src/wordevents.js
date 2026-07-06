// The three word-event types: ? BLOCKS (bonk from below), WORD DOORS
// (tiered wall) and FLAG STARS (end-of-level review). Visuals are built on
// activation and disposed when passed, so at most one event's canvas
// textures are alive at a time. All signs face +z (the camera).

import * as THREE from 'three';
import { KID_H } from './player.js';
import { shuffle } from './words.js';
import {
  sfxCorrect, sfxWrong, sfxBonk, sfxDoorOpen, sfxStarGrab, sfxPop, speak,
} from './audio.js';

const boxGeo = new THREE.BoxGeometry(1, 1, 1);

function drawSign(canvas, word, style = 'normal') {
  const g = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  g.fillStyle = style === 'gray' ? '#b9b9b9' : '#ffffff';
  g.fillRect(0, 0, W, H);
  g.lineWidth = 10;
  g.strokeStyle = style === 'check' ? '#2f9e42' : '#000000';
  g.strokeRect(6, 6, W - 12, H - 12);
  g.fillStyle = style === 'check' ? '#2f9e42' : style === 'gray' ? '#7c7c7c' : '#000000';
  const text = style === 'check' ? '✓' : word;
  let size = style === 'check' ? H * 0.8 : H * 0.62;
  const font = (s) => `bold ${s}px 'Arial Rounded MT Bold', 'Comic Sans MS', Arial, sans-serif`;
  g.font = font(size);
  while (g.measureText(text).width > W - 44 && size > 24) {
    size -= 6;
    g.font = font(size);
  }
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, W / 2, H / 2 + 4);
}

function makeSign(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = 288;
  canvas.height = 144;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })
  );
  mesh.userData.canvas = canvas;
  mesh.userData.tex = tex;
  return mesh;
}

function setSign(mesh, word, style) {
  drawSign(mesh.userData.canvas, word, style);
  mesh.userData.tex.needsUpdate = true;
}

export function disposeGroup(group) {
  group.traverse((o) => {
    if (o.geometry && o.geometry !== boxGeo) o.geometry.dispose();
    if (o.material && !Array.isArray(o.material)) {
      if (o.material.map) o.material.map.dispose();
      o.material.dispose();
    }
  });
  if (group.parent) group.parent.remove(group);
}

// api passed to update()/resolvers:
// { effects, praise(), addCoins(n), bounceBack(toX), speakWord(),
//   onCorrect(firstTry), level }

// ---------- ? BLOCKS ----------

export class BlocksEvent {
  constructor(scene, level, { x, word, distractors }) {
    this.type = 'blocks';
    this.word = word;
    this.x = x;
    this.done = false;
    this.attempts = 0;
    this.respawns = 0;
    this.level = level;
    this.explodeT = -1; // countdown from correct answer to the box burst

    this.group = new THREE.Group();
    scene.add(this.group);
    this.blocks = [];
    const mat = new THREE.MeshLambertMaterial({ color: 0xffb300, emissive: 0x3d2c00 });
    for (let i = 0; i < 3; i++) {
      const bg = new THREE.Group();
      const cube = new THREE.Mesh(boxGeo, mat.clone());
      cube.scale.setScalar(1.4);
      const sign = makeSign(2.1, 1.05);
      sign.position.z = 0.78;
      bg.add(cube, sign);
      this.group.add(bg);
      this.blocks.push({ g: bg, cube, sign, word: '', dead: false, bounceT: 0, shakeT: 0, baseY: 0 });
    }
    this.pool = [word, ...distractors];
    this.place(x + 6);
  }

  place(bx) {
    const words = shuffle(this.pool);
    for (let i = 0; i < 3; i++) {
      const b = this.blocks[i];
      const px = bx + i * 5;
      b.baseY = this.level.groundTopAt(px) + 3.1; // block bottom ~2.4 up
      b.g.position.set(px, b.baseY, 0);
      b.word = words[i];
      b.dead = false;
      b.bounceT = 0;
      b.shakeT = 0;
      b.cube.material.color.setHex(0xffb300);
      setSign(b.sign, b.word, 'normal');
    }
    this.firstX = bx;
    this.lastX = bx + 10;
  }

  update(dt, player, api) {
    const t = performance.now() / 1000;
    for (const b of this.blocks) {
      let y = b.baseY + Math.sin(t * 2 + b.g.position.x) * 0.08;
      if (b.bounceT > 0) {
        b.bounceT -= dt;
        y += Math.sin((1 - b.bounceT / 0.3) * Math.PI) * 0.55;
      }
      if (b.shakeT > 0) {
        b.shakeT -= dt;
        b.g.position.x += Math.sin(b.shakeT * 50) * 0.05;
      }
      b.g.position.y = y;
    }
    if (this.explodeT > 0) {
      this.explodeT -= dt;
      if (this.explodeT <= 0) this.explode(api);
    }
    if (this.done) return;

    // Bonk from below.
    if (player.vy > 0) {
      const head = player.y + KID_H;
      const prevHead = head - player.vy * dt;
      for (const b of this.blocks) {
        if (b.dead) continue;
        const bottom = b.baseY - 0.7;
        if (prevHead <= bottom + 0.1 && head >= bottom - 0.1 &&
            Math.abs(player.x - b.g.position.x) < 1.05) {
          player.vy = -1.5;
          if (b.word === this.word) this.resolveCorrect(b, api);
          else this.resolveWrong(b, api);
          return;
        }
      }
    }

    // Walked past every block without a correct hit.
    if (player.x > this.lastX + 2.2) {
      if (this.respawns < 1) {
        this.respawns++;
        this.place(this.lastX + 7); // ≈15 ahead of the first block
      } else {
        this.place(this.firstX); // reshuffle in place...
        api.bounceBack(this.firstX - 4); // ...and float him back to retry
      }
      api.speakWord();
    }
  }

  resolveCorrect(b, api) {
    this.done = true;
    b.bounceT = 0.3;
    setSign(b.sign, '', 'check');
    sfxCorrect();
    const pos = b.g.position.clone();
    api.effects.confetti(pos);
    for (let i = 0; i < 3; i++) {
      api.effects.sparkle(new THREE.Vector3(pos.x + (i - 1) * 0.5, pos.y + 1, 0));
    }
    api.effects.floatText(new THREE.Vector3(pos.x, pos.y + 1.6, 0), '+3');
    api.addCoins(3);
    api.praise();
    api.onCorrect(this.attempts === 0);
    this.explodeT = 2.2; // let the ✓ sit a moment, then burst all boxes
  }

  explode(api) {
    sfxPop();
    for (const b of this.blocks) {
      if (!b.g.visible) continue;
      api.effects.confetti(b.g.position.clone());
      b.g.visible = false;
    }
  }

  resolveWrong(b, api) {
    this.attempts++;
    b.dead = true;
    b.shakeT = 0.4;
    b.cube.material.color.setHex(0x8a8a8a);
    setSign(b.sign, b.word, 'gray');
    sfxBonk();
    if (api.onWrong) api.onWrong(); // boss levels: silly taunt
    speak(`Almost! The word is: ${this.word}. Try again!`, { rate: 0.9 });
  }

  clampX() {
    return Infinity;
  }

  debugResolve(correct, api) {
    const b = this.blocks.find((k) => !k.dead && (correct ? k.word === this.word : k.word !== this.word));
    if (!b) return;
    if (correct) this.resolveCorrect(b, api);
    else this.resolveWrong(b, api);
  }

  passedX() {
    // Keep the event alive until the pending box burst has fired.
    if (this.explodeT > 0) return Infinity;
    return this.lastX + 4;
  }

  dispose() {
    disposeGroup(this.group);
  }
}

// ---------- WORD DOORS ----------

const TIERS = [0, 2, 4];

export class DoorsEvent {
  constructor(scene, level, { x, wallX, groundY, word, distractors }) {
    this.type = 'doors';
    this.word = word;
    this.x = x;
    this.wallX = wallX;
    this.groundY = groundY;
    this.done = false;
    this.opened = -1; // tier index once the right door opens
    this.attempts = 0;
    this.cooldown = 0;

    this.group = new THREE.Group();
    this.group.position.set(wallX, groundY, 0);
    scene.add(this.group);

    const frameMat = new THREE.MeshLambertMaterial({ color: 0x8d5a2b });
    const frameMat2 = new THREE.MeshLambertMaterial({ color: 0xa96f3b });
    // Two frame columns (z = ±1) + roof: doors fill the z=0 gap.
    for (const zi of [-1, 1]) {
      for (let h = 0; h < 7; h++) {
        const m = new THREE.Mesh(boxGeo, (h + zi) & 1 ? frameMat : frameMat2);
        m.position.set(0, h + 0.5, zi);
        this.group.add(m);
      }
    }
    for (let zi = -1; zi <= 1; zi++) {
      const m = new THREE.Mesh(boxGeo, frameMat2);
      m.position.set(0, 6.75, zi);
      m.scale.set(1.3, 0.5, 1);
      this.group.add(m);
    }

    const words = shuffle([word, ...distractors]);
    this.doors = TIERS.map((tier, i) => {
      const hinge = new THREE.Group(); // hinge on the back edge
      hinge.position.set(0, tier, -0.7);
      const panel = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xb5793c }));
      panel.scale.set(0.7, 1.9, 1.4);
      panel.position.set(0, 0.95, 0.7);
      const knob = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xffd54a }));
      knob.scale.setScalar(0.2);
      knob.position.set(-0.44, 0.95, 1.1);
      hinge.add(panel, knob);
      this.group.add(hinge);
      // Sign sits left of the player's stand spot (wall −0.85) so it never
      // covers the face of a kid waiting at a door.
      const sign = makeSign(1.9, 0.95);
      sign.position.set(-2.3, tier + 1.15, 1.3);
      setSign(sign, words[i], 'normal');
      this.group.add(sign);
      return { hinge, sign, word: words[i], tier, dead: false, shakeT: 0, openT: -1 };
    });
  }

  update(dt, player, api) {
    this.cooldown -= dt;
    for (const d of this.doors) {
      if (d.shakeT > 0) {
        d.shakeT -= dt;
        d.hinge.rotation.y = Math.sin(d.shakeT * 40) * 0.08;
        if (d.shakeT <= 0) d.hinge.rotation.y = 0;
      }
      if (d.openT >= 0 && d.openT < 1) {
        d.openT = Math.min(1, d.openT + dt * 2.2);
        d.hinge.rotation.y = -(1 - Math.pow(1 - d.openT, 3)) * 1.9;
      }
    }
    if (this.done) return;

    if (this.opened === -1 && this.cooldown <= 0 && player.grounded &&
        player.x > this.wallX - 1.35) {
      const rel = player.y - this.groundY;
      const i = TIERS.findIndex((t) => Math.abs(rel - t) < 0.7);
      if (i >= 0) this.resolveTier(i, api);
    }
    if (this.opened !== -1 && player.x > this.wallX + 2) this.done = true;
  }

  resolveTier(i, api) {
    const d = this.doors[i];
    if (d.word === this.word) {
      this.opened = i;
      d.openT = 0;
      sfxDoorOpen();
      api.effects.confetti(new THREE.Vector3(this.wallX, this.groundY + d.tier + 1.5, 0.5));
      api.effects.floatText(new THREE.Vector3(this.wallX, this.groundY + d.tier + 2.6, 0), '+3');
      api.addCoins(3);
      api.praise();
      api.onCorrect(this.attempts === 0);
    } else {
      this.attempts++;
      d.dead = true;
      d.shakeT = 0.4;
      setSign(d.sign, d.word, 'gray');
      sfxWrong();
      this.cooldown = 1.4;
      api.bounceBack(this.wallX - 8);
      speak(`Almost! The word is: ${this.word}. Try again!`, { rate: 0.9 });
    }
  }

  clampX() {
    if (this.opened === -1) return this.wallX - 0.85;
    return Infinity;
  }

  debugResolve(correct, api) {
    if (this.opened !== -1) return;
    const i = this.doors.findIndex((d) =>
      !d.dead && (correct ? d.word === this.word : d.word !== this.word));
    if (i >= 0) this.resolveTier(i, api);
  }

  passedX() {
    return this.wallX + 4;
  }

  dispose() {
    disposeGroup(this.group);
  }
}

// ---------- FLAG STARS (review) ----------

function makeStar() {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x775500 });
  const core = new THREE.Mesh(boxGeo, mat);
  core.scale.setScalar(0.7);
  const cross = new THREE.Mesh(boxGeo, mat);
  cross.scale.setScalar(0.7);
  cross.rotation.z = Math.PI / 4;
  g.add(core, cross);
  return g;
}

export class StarsEvent {
  // reviews: [{ word, distractor }], up to 2 — grabbing the right star = +1 gem
  constructor(scene, level, { x, reviews, onGem, onDone }) {
    this.type = 'stars';
    this.level = level;
    this.x = x;
    this.reviews = reviews;
    this.onGem = onGem;
    this.onDone = onDone;
    this.idx = 0;
    this.done = false;
    this.warned = false;
    this.pending = 0; // delay before presenting the next review word

    this.group = new THREE.Group();
    scene.add(this.group);
    this.stars = [0, 1].map(() => {
      const holder = new THREE.Group();
      const star = makeStar();
      const sign = makeSign(1.8, 0.9);
      sign.position.y = -1.15;
      holder.add(star, sign);
      this.group.add(holder);
      return { holder, star, sign, word: '', taken: false };
    });
    if (reviews.length) this.present(x + 5);
    else this.finish();
  }

  get word() {
    const r = this.reviews[this.idx];
    return r ? r.word : '';
  }

  present(sx) {
    const r = this.reviews[this.idx];
    const words = shuffle([r.word, r.distractor]);
    const heights = shuffle([2.3, 3.5]);
    for (let i = 0; i < 2; i++) {
      const s = this.stars[i];
      const px = sx + i * 5;
      s.holder.position.set(px, this.level.groundTopAt(px) + heights[i], 0);
      s.holder.visible = true;
      s.word = words[i];
      s.taken = false;
      setSign(s.sign, s.word, 'normal');
    }
    this.lastX = sx + 5;
    this.warned = false;
  }

  update(dt, player, api) {
    const t = performance.now() / 1000;
    for (const s of this.stars) {
      s.star.rotation.y += dt * 2;
      s.holder.position.y += Math.sin(t * 3 + s.holder.position.x) * 0.003;
    }
    if (this.done) return;

    if (this.pending > 0) {
      this.pending -= dt;
      if (this.pending <= 0) {
        this.present(player.x + 5);
        api.speakWord();
      }
      return;
    }

    // Grab by touching (needs a jump — stars float above head height).
    for (const s of this.stars) {
      if (s.taken || !s.holder.visible) continue;
      const dx = Math.abs(player.x - s.holder.position.x);
      const sy = s.holder.position.y;
      if (dx < 0.85 && player.y + KID_H > sy - 0.5 && player.y < sy + 0.6) {
        s.taken = true;
        if (s.word === this.word) this.grabCorrect(s, api);
        else this.grabWrong(s, api);
        return;
      }
    }

    // Walked past both stars.
    if (player.x > this.lastX + 2.2) {
      if (!this.warned) {
        this.warned = true;
        this.present(player.x + 5);
        api.speakWord();
      } else {
        this.advance(api);
      }
    }
  }

  grabCorrect(s, api) {
    sfxStarGrab();
    api.effects.confetti(s.holder.position.clone());
    api.effects.floatText(
      new THREE.Vector3(s.holder.position.x, s.holder.position.y + 1.2, 0), '+1'
    );
    this.onGem();
    api.praise();
    for (const k of this.stars) k.holder.visible = false;
    this.advance(api, true);
  }

  grabWrong(s, api) {
    s.holder.visible = false;
    sfxWrong();
    if (!this.warned) {
      this.warned = true;
      speak(`Almost! The word is: ${this.word}.`, { rate: 0.9 });
    } else {
      this.advance(api);
    }
  }

  advance(api, correct = false) {
    this.idx++;
    for (const s of this.stars) s.holder.visible = false;
    if (this.idx >= this.reviews.length) {
      this.finish();
    } else {
      this.pending = correct ? 0.7 : 0.25; // next word presented in update()
    }
  }

  finish() {
    this.done = true;
    for (const s of this.stars) s.holder.visible = false;
    if (this.onDone) this.onDone();
  }

  clampX() {
    return Infinity;
  }

  debugResolve(correct, api) {
    const s = this.stars.find((k) => !k.taken && (correct ? k.word === this.word : k.word !== this.word));
    if (!s) return;
    s.taken = true;
    if (correct) this.grabCorrect(s, api);
    else this.grabWrong(s, api);
  }

  dispose() {
    disposeGroup(this.group);
  }
}
