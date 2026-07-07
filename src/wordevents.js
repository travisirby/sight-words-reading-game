// The word-event types: ? BLOCKS (bonk from below), WORD DOORS (tiered
// wall), SPIKE HOLES (drop down the right pit), LADDERS (climb the right
// one up a cliff) and FLAG STARS (end-of-level review). Visuals are built
// on activation and disposed when passed, so at most one event's canvas
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

// ---------- SPIKE HOLES ----------

// Three pits cut into a raised shelf; a floating sign hangs over each.
// Dropping into the right pit pays out and pops the kid back up onto the
// track; wrong pits spring hidden spikes and bounce him back to retry.
const PIT_DEPTH = 3;

export class HolesEvent {
  constructor(scene, level, { x, holeXs, groundY, word, distractors }) {
    this.type = 'holes';
    this.word = word;
    this.x = x;
    this.groundY = groundY;
    this.done = false;
    this.attempts = 0;
    this.cooldown = 0;
    this.boostT = -1; // countdown from a correct landing to the pop-out
    this.playerRef = null;

    this.group = new THREE.Group();
    scene.add(this.group);
    const spikeMat = new THREE.MeshLambertMaterial({ color: 0xaab7c4 });
    const words = shuffle([word, ...distractors]);
    this.holes = holeXs.map((hx, i) => {
      const sign = makeSign(1.9, 0.95);
      sign.position.set(hx, groundY + 2.6, 0.4);
      setSign(sign, words[i], 'normal');
      this.group.add(sign);
      // Spikes wait sunk below the pit floor; they pop on a wrong landing.
      const spikes = new THREE.Group();
      const floorY = groundY - PIT_DEPTH;
      spikes.position.set(hx, floorY - 0.7, 0);
      for (const dx of [-1.05, -0.35, 0.35, 1.05]) {
        const sp = new THREE.Mesh(boxGeo, spikeMat);
        sp.scale.setScalar(0.5);
        sp.rotation.z = Math.PI / 4;
        sp.position.set(dx, 0.3, 0);
        spikes.add(sp);
      }
      spikes.visible = false;
      this.group.add(spikes);
      return { sign, spikes, x: hx, floorY, word: words[i], dead: false, popT: -1 };
    });
    this.firstX = holeXs[0];
    this.lastX = holeXs[holeXs.length - 1];
  }

  update(dt, player, api) {
    this.playerRef = player;
    this.cooldown -= dt;
    const t = performance.now() / 1000;
    for (const h of this.holes) {
      h.sign.position.y = this.groundY + 2.6 + Math.sin(t * 2 + h.x) * 0.08;
      if (h.popT >= 0 && h.popT < 1) {
        h.popT = Math.min(1, h.popT + dt * 7);
        h.spikes.position.y = h.floorY - 0.7 + h.popT * 0.7;
      }
    }
    if (this.boostT > 0) {
      this.boostT -= dt;
      if (this.boostT <= 0) player.bounce(12.5); // pop out of the safe pit
    }
    if (this.done) return;

    // Landed on a pit floor?
    if (this.cooldown <= 0 && player.grounded &&
        player.y < this.groundY - PIT_DEPTH + 0.5) {
      const i = this.holes.findIndex((h) => Math.abs(player.x - h.x) < 1.6);
      if (i >= 0) this.resolveHole(i, api);
    }

    // Ran across every bridge without dropping in (shouldn't normally
    // happen — the choice zone clamps him — but never let him skip it).
    if (player.x > this.lastX + 2.2) {
      api.bounceBack(this.firstX - 6);
      api.speakWord();
    }
  }

  resolveHole(i, api) {
    const h = this.holes[i];
    const pos = new THREE.Vector3(h.x, h.floorY + 1, 0);
    if (h.word === this.word) {
      this.done = true;
      setSign(h.sign, '', 'check');
      sfxCorrect();
      api.effects.confetti(pos);
      api.effects.floatText(new THREE.Vector3(h.x, this.groundY + 1.2, 0), '+3');
      api.addCoins(3);
      api.praise();
      api.onCorrect(this.attempts === 0);
      this.boostT = 0.9; // let the confetti land, then launch him out
    } else {
      this.attempts++;
      h.dead = true;
      h.popT = 0;
      h.spikes.visible = true;
      setSign(h.sign, h.word, 'gray');
      sfxWrong();
      if (api.onWrong) api.onWrong();
      this.cooldown = 1.4;
      if (this.playerRef) this.playerRef.stumble();
      api.bounceBack(this.firstX - 6);
      speak(`Almost! The word is: ${this.word}. Try again!`, { rate: 0.9 });
    }
  }

  clampX() {
    return Infinity; // the choice zone's max already fences the far rim
  }

  debugResolve(correct, api) {
    const i = this.holes.findIndex((h) =>
      !h.dead && (correct ? h.word === this.word : h.word !== this.word));
    if (i >= 0) this.resolveHole(i, api);
  }

  passedX() {
    if (this.boostT > 0) return Infinity; // pop-out still pending
    return this.lastX + 4;
  }

  dispose() {
    disposeGroup(this.group);
  }
}

// ---------- LADDERS ----------

// Three ladders up to a scaffold walkway below a cliff. Jumping onto the
// right ladder auto-climbs the kid to the top; wrong ladders wobble and
// bounce him back. The cliff wall clamps progress until he climbs.
export const LADDER_H = 5;

export class LaddersEvent {
  constructor(scene, level, { x, wallX, ladderXs, groundY, word, distractors }) {
    this.type = 'ladders';
    this.word = word;
    this.x = x;
    this.wallX = wallX;
    this.groundY = groundY;
    this.done = false;
    this.opened = -1; // ladder index once the climb starts
    this.attempts = 0;
    this.cooldown = 0;
    this.climbY = -1; // player height above ground while auto-climbing
    this.playerRef = null;

    this.group = new THREE.Group();
    this.group.position.set(0, groundY, 0);
    scene.add(this.group);

    const railMat = new THREE.MeshLambertMaterial({ color: 0x8d5a2b });
    const rungMat = new THREE.MeshLambertMaterial({ color: 0xb5793c });
    const words = shuffle([word, ...distractors]);
    this.ladders = ladderXs.map((lx, i) => {
      const g = new THREE.Group();
      g.position.set(lx, 0, 0);
      for (const dx of [-0.38, 0.38]) {
        const rail = new THREE.Mesh(boxGeo, railMat);
        rail.scale.set(0.14, LADDER_H, 0.14);
        rail.position.set(dx, LADDER_H / 2, 0);
        g.add(rail);
      }
      for (let ry = 0.5; ry < LADDER_H; ry += 0.55) {
        const rung = new THREE.Mesh(boxGeo, rungMat);
        rung.scale.set(0.85, 0.13, 0.13);
        rung.position.set(0, ry, 0);
        g.add(rung);
      }
      this.group.add(g);
      const sign = makeSign(1.9, 0.95);
      sign.position.set(lx - 1.7, 1.6, 1.2);
      setSign(sign, words[i], 'normal');
      this.group.add(sign);
      return { g, sign, x: lx, word: words[i], dead: false, shakeT: 0 };
    });
  }

  update(dt, player, api) {
    this.playerRef = player;
    this.cooldown -= dt;
    for (const l of this.ladders) {
      if (l.shakeT > 0) {
        l.shakeT -= dt;
        l.g.rotation.z = Math.sin(l.shakeT * 40) * 0.07;
        if (l.shakeT <= 0) l.g.rotation.z = 0;
      }
    }
    if (this.done) return;

    // Auto-climb: carry the kid up the chosen ladder to the walkway.
    if (this.opened !== -1) {
      this.climbY = Math.min(LADDER_H, this.climbY + dt * 4.5);
      player.x = this.ladders[this.opened].x;
      player.y = this.groundY + this.climbY;
      player.vy = 0;
      player.grounded = false; // arms-up pose reads as climbing
      player.group.position.set(player.x, player.y, 0);
      if (this.climbY >= LADDER_H) {
        player.grounded = true;
        this.done = true;
      }
      return;
    }

    // Grab: jump at a ladder (airborne + overlapping it).
    if (this.cooldown <= 0 && !player.grounded &&
        player.y > this.groundY + 0.3) {
      const i = this.ladders.findIndex((l) => Math.abs(player.x - l.x) < 0.8);
      if (i >= 0) this.resolveLadder(i, api);
    }
  }

  resolveLadder(i, api) {
    const l = this.ladders[i];
    if (l.word === this.word) {
      this.opened = i;
      this.climbY = Math.max(0, (this.playerRef ? this.playerRef.y : this.groundY) - this.groundY);
      setSign(l.sign, '', 'check');
      sfxCorrect();
      api.effects.confetti(new THREE.Vector3(l.x, this.groundY + 2, 0.5));
      api.effects.floatText(new THREE.Vector3(l.x, this.groundY + 3, 0), '+3');
      api.addCoins(3);
      api.praise();
      api.onCorrect(this.attempts === 0);
      if (!this.playerRef) this.done = true; // headless (tests): skip the climb
    } else {
      this.attempts++;
      l.dead = true;
      l.shakeT = 0.5;
      setSign(l.sign, l.word, 'gray');
      sfxWrong();
      if (api.onWrong) api.onWrong();
      this.cooldown = 1.4;
      api.bounceBack(this.x + 1);
      speak(`Almost! The word is: ${this.word}. Try again!`, { rate: 0.9 });
    }
  }

  clampX() {
    if (this.opened === -1) return this.wallX - 0.85;
    return Infinity;
  }

  debugResolve(correct, api) {
    if (this.opened !== -1) return;
    const i = this.ladders.findIndex((l) =>
      !l.dead && (correct ? l.word === this.word : l.word !== this.word));
    if (i >= 0) this.resolveLadder(i, api);
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
