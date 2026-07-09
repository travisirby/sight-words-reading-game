// The three word-event types: ? BLOCKS (bonk from below), WORD DOORS
// (tiered wall) and FLAG STARS (end-of-level review). Visuals are built on
// activation and disposed when passed, so at most one event's canvas
// textures are alive at a time. All signs face +z (the camera).

import * as THREE from 'three';
import { voxelGeo } from './voxelgeo.js';
import { KID_H } from './player.js';
import { shuffle } from './words.js';
import {
  sfxCorrect, sfxWrong, sfxBonk, sfxDoorOpen, sfxStarGrab, sfxPop, speak,
} from './audio.js';

const boxGeo = voxelGeo;

// Per-style palette: frame wood, text ink, face gradient (top → bottom).
// 'reveal' shows the missed answer (the word itself, in green); 'check' is
// the big ✓ on a correct bonk; 'gray' marks eliminated/dead options.
const SIGN_STYLES = {
  normal: { frame: '#7a4a22', ink: '#2b211a', face: ['#fffdf4', '#f0e5cd'] },
  gray: { frame: '#8f8f8f', ink: '#7c7c7c', face: ['#e3e3e3', '#c8c8c8'] },
  check: { frame: '#2f9e42', ink: '#2f9e42', face: ['#f5fdf2', '#ddf0d6'] },
  reveal: { frame: '#2f9e42', ink: '#2f9e42', face: ['#f5fdf2', '#ddf0d6'] },
};

function roundedRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

function drawSign(canvas, word, style = 'normal') {
  const g = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const s = SIGN_STYLES[style] || SIGN_STYLES.normal;
  g.clearRect(0, 0, W, H);

  // Rounded plaque; canvas stays transparent outside it so the sign has a
  // real silhouette in the world instead of a hard white rectangle.
  const bw = 16; // frame stroke width
  const x = 14, y = 8, w = W - 28, h = H - 30, r = 36;

  // Soft drop shadow under the plaque so it reads as an object in the scene.
  g.save();
  g.shadowColor = 'rgba(38, 24, 8, 0.3)';
  g.shadowBlur = 14;
  g.shadowOffsetY = 11;
  roundedRect(g, x, y, w, h, r);
  const grad = g.createLinearGradient(0, y, 0, y + h);
  grad.addColorStop(0, s.face[0]);
  grad.addColorStop(1, s.face[1]);
  g.fillStyle = grad;
  g.fill();
  g.restore();

  // Chunky wooden frame with an inner bevel highlight.
  roundedRect(g, x + bw / 2, y + bw / 2, w - bw, h - bw, r - bw / 2);
  g.lineWidth = bw;
  g.strokeStyle = s.frame;
  g.stroke();
  roundedRect(g, x + bw + 2, y + bw + 2, w - 2 * (bw + 2), h - 2 * (bw + 2), r - bw);
  g.lineWidth = 5;
  g.strokeStyle = 'rgba(255, 255, 255, 0.55)';
  g.stroke();

  // Corner rivets, tucked into the frame corners away from the letters.
  const rv = 7;
  const inset = bw + 15;
  g.fillStyle = s.frame;
  for (const [cx, cy] of [
    [x + inset, y + inset], [x + w - inset, y + inset],
    [x + inset, y + h - inset], [x + w - inset, y + h - inset],
  ]) {
    g.beginPath();
    g.arc(cx, cy, rv, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = 'rgba(255, 255, 255, 0.45)';
    g.beginPath();
    g.arc(cx - 2, cy - 2, rv * 0.35, 0, Math.PI * 2);
    g.fill();
    g.fillStyle = s.frame;
  }

  // The word: big, dark, dead-center — legibility beats decoration.
  g.fillStyle = s.ink;
  const text = style === 'check' ? '✓' : word;
  let size = style === 'check' ? H * 0.72 : H * 0.56;
  const font = (sz) => `bold ${sz}px 'Arial Rounded MT Bold', 'Comic Sans MS', Arial, sans-serif`;
  g.font = font(size);
  while (g.measureText(text).width > w - 2 * (bw + 26) && size > 24) {
    size -= 6;
    g.font = font(size);
  }
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.save();
  g.shadowColor = 'rgba(38, 24, 8, 0.18)';
  g.shadowOffsetY = 4;
  g.fillText(text, W / 2, y + h / 2 + 4);
  g.restore();
}

function makeSign(w, h) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({
      map: tex,
      side: THREE.DoubleSide,
      transparent: true,
      alphaTest: 0.02,
    })
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

// Listen beat after a miss: drives the no-no wobble while the narrator
// re-says the word. Blocks stay bonkable throughout (a wrong bonk bounces
// the kid back to before the first block, so he has to walk the row again).
const MISS_LOCK = 1.5;
const SPIN_DUR = 0.7; // full-turn shuffle spin; words swap while facing away
const MAX_TRIES = 3; // wrong bonks before the event fails and the run moves on

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
    this.lockT = 0; // listen-beat countdown; drives the wobble animation
    this.swapPending = false; // reshuffle words at the spin's halfway point

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
      this.blocks.push({ g: bg, cube, sign, word: '', dead: false, bounceT: 0, shakeT: 0, spinT: 0, baseY: 0 });
    }
    // One dynamic solid per block so the kid can stand on them and their
    // sides stop him, instead of clipping through. Synced every frame.
    this.solids = this.blocks.map(() => ({ x0: 0, x1: 0, y0: Infinity, y: -Infinity }));
    level.dynamicSolids.push(...this.solids);
    this.pool = [word, ...distractors];
    this.place(x + 6);
  }

  // Cube is 1.4 wide/tall centered on the group origin: physical extents
  // ±0.7; y is the landable top, y0 the bonkable bottom.
  syncSolids() {
    for (let i = 0; i < this.blocks.length; i++) {
      const b = this.blocks[i];
      const s = this.solids[i];
      if (!b.g.visible) {
        s.y = -Infinity;
        s.y0 = Infinity;
        continue;
      }
      s.x0 = b.g.position.x - 0.7;
      s.x1 = b.g.position.x + 0.7;
      s.y = b.g.position.y + 0.7;
      s.y0 = b.g.position.y - 0.7;
    }
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
      b.spinT = 0;
      b.g.rotation.set(0, 0, 0);
      b.cube.material.color.setHex(0xffb300);
      setSign(b.sign, b.word, 'normal');
    }
    this.firstX = bx;
    this.lastX = bx + 10;
    this.lockT = 0;
    this.swapPending = false;
    this.syncSolids();
  }

  // Move the words to new blocks (called mid-spin, while the signs face
  // away). Always lands on a different arrangement, so bonking blocks in
  // sequence without reading never converges on the target.
  reshuffleWords() {
    const current = this.blocks.map((b) => b.word);
    let words = shuffle(this.pool);
    for (let t = 0; t < 8 && words.every((w, i) => w === current[i]); t++) {
      words = shuffle(this.pool);
    }
    for (let i = 0; i < 3; i++) {
      const b = this.blocks[i];
      b.word = words[i];
      setSign(b.sign, b.word, 'normal');
    }
  }

  update(dt, player, api) {
    const t = performance.now() / 1000;
    if (this.lockT > 0) this.lockT -= dt;
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
      if (b.spinT > 0) {
        // Shuffle spin: one full turn; words move at the halfway point
        // (signs face away from the camera right then).
        b.spinT -= dt;
        const p = 1 - Math.max(0, b.spinT) / SPIN_DUR;
        b.g.rotation.y = (1 - Math.pow(1 - p, 2)) * Math.PI * 2;
        if (this.swapPending && p >= 0.5) {
          this.swapPending = false;
          this.reshuffleWords();
        }
        if (b.spinT <= 0) b.g.rotation.y = 0;
      } else if (this.lockT > 0) {
        // Listen-beat wobble: a gentle no-no waggle while inert.
        b.g.rotation.z = Math.sin(this.lockT * 14) * 0.09 * Math.min(1, this.lockT);
      } else if (b.g.rotation.z !== 0) {
        b.g.rotation.z = 0;
      }
      b.g.position.y = y;
    }
    if (this.explodeT > 0) {
      this.explodeT -= dt;
      if (this.explodeT <= 0) this.explode(api);
    }
    this.syncSolids();
    if (this.done) return;

    // Bonk from below — active even during the post-miss spin/listen beat.
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
    this.lockT = 0;
    this.swapPending = false; // never overwrite the ✓ with a late reshuffle
    b.bounceT = 0.3;
    setSign(b.sign, '', 'check');
    sfxCorrect();
    const pos = b.g.position.clone();
    api.effects.confetti(pos);
    for (let i = 0; i < 3; i++) {
      api.effects.sparkle(new THREE.Vector3(pos.x + (i - 1) * 0.5, pos.y + 1, 0));
    }
    // First-try carrot: a bonus coin and an extra-special praise line.
    const firstTry = this.attempts === 0;
    api.effects.floatText(new THREE.Vector3(pos.x, pos.y + 1.6, 0), firstTry ? '+4' : '+3');
    api.addCoins(firstTry ? 4 : 3);
    if (firstTry && api.praiseFirstTry) api.praiseFirstTry();
    else api.praise();
    api.onCorrect(firstTry, this.attempts);
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

  // A miss never eliminates a block (that would let a kid brute-force by
  // bonking all three): instead the kid takes a stumble, the words visibly
  // shuffle to new blocks, and a short listen beat replays the target word.
  // The third miss fails the event: the answer is revealed and the run
  // moves on with a red dot.
  resolveWrong(b, api) {
    this.attempts++;
    b.shakeT = 0.4;
    sfxBonk();
    api.stumble(); // hurt: ouch animation + a coin drops
    if (api.onWrong) api.onWrong(); // boss taunt + fresh auto-repeat window
    if (this.attempts >= MAX_TRIES) {
      this.resolveFail(api);
      return;
    }
    speak(`Almost! The word is: ${this.word}. Try again!`, { rate: 0.9 });
    // Push back to before the first block: the kid has to walk the row
    // again and pick a block on purpose, not just re-jump in place.
    api.bounceBack(this.firstX - 4);
    this.lockT = MISS_LOCK;
    this.swapPending = true;
    for (const k of this.blocks) k.spinT = SPIN_DUR;
  }

  // Out of tries: reveal the answer (target word in green, the rest gray),
  // report the miss, and let the run continue. No voiceover — the word was
  // already said on each miss; after the third the reveal stays visual.
  resolveFail(api) {
    this.done = true;
    this.lockT = 0;
    this.swapPending = false;
    for (const k of this.blocks) {
      if (k.word === this.word) {
        k.bounceT = 0.3;
        setSign(k.sign, k.word, 'reveal');
      } else {
        k.cube.material.color.setHex(0x8a8a8a);
        setSign(k.sign, k.word, 'gray');
      }
    }
    if (api.onFail) api.onFail();
    this.explodeT = 2.6; // let the reveal sit a moment, then burst all boxes
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
    const ds = this.level.dynamicSolids;
    for (const s of this.solids) {
      const i = ds.indexOf(s);
      if (i >= 0) ds.splice(i, 1);
    }
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
  }

  resolveTier(i, api) {
    const d = this.doors[i];
    if (d.word === this.word) {
      // Done right away (not once the kid walks past) so the auto-repeat
      // voice can't re-announce a word that's already been answered.
      this.done = true;
      this.opened = i;
      d.openT = 0;
      sfxDoorOpen();
      api.effects.confetti(new THREE.Vector3(this.wallX, this.groundY + d.tier + 1.5, 0.5));
      api.effects.floatText(new THREE.Vector3(this.wallX, this.groundY + d.tier + 2.6, 0), '+3');
      api.addCoins(3);
      const firstTry = this.attempts === 0;
      if (firstTry && api.praiseFirstTry) api.praiseFirstTry();
      else api.praise();
      api.onCorrect(firstTry, this.attempts);
    } else {
      this.attempts++;
      d.dead = true;
      d.shakeT = 0.4;
      setSign(d.sign, d.word, 'gray');
      sfxWrong();
      if (api.onWrong) api.onWrong();
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
    // Both stars float at the same height, well above head reach: walking
    // (or falling) past one can never touch it, so reaching the far star
    // never means threading past the near one — the old mixed heights put
    // the low star's hitbox a hair above a grounded head and squarely
    // inside every jump arc.
    for (let i = 0; i < 2; i++) {
      const s = this.stars[i];
      const px = sx + i * 6;
      s.baseY = this.level.groundTopAt(px) + 3.1;
      s.holder.position.set(px, s.baseY, 0);
      s.holder.visible = true;
      s.word = words[i];
      s.taken = false;
      setSign(s.sign, s.word, 'normal');
    }
    this.lastX = sx + 6;
    this.warned = false;
  }

  update(dt, player, api) {
    const t = performance.now() / 1000;
    for (const s of this.stars) {
      s.star.rotation.y += dt * 2;
      if (s.baseY !== undefined) {
        s.holder.position.y = s.baseY + Math.sin(t * 3 + s.holder.position.x) * 0.12;
      }
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

    // Grab by jumping UP into a star — the same verb as bonking a ? block.
    // Only a rising player right under it selects; walking or falling past
    // never does, so choosing is always a deliberate jump.
    for (const s of this.stars) {
      if (s.taken || !s.holder.visible) continue;
      const dx = Math.abs(player.x - s.holder.position.x);
      const sy = s.holder.position.y;
      if (dx < 0.8 && player.vy > 0.5 &&
          player.y + KID_H > sy - 0.7 && player.y < sy + 0.5) {
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
    // warned means a wrong grab since this word was presented; a clean
    // grab earns first-try praise, not the recovery line.
    if (!this.warned && api.praiseFirstTry) api.praiseFirstTry();
    else api.praise();
    for (const k of this.stars) k.holder.visible = false;
    this.advance(api, true);
  }

  grabWrong(s, api) {
    s.holder.visible = false;
    sfxWrong();
    if (api.onWrong) api.onWrong();
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
