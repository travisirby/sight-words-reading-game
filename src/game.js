// 2.5D side-scrolling platformer engine: run state machine, word events,
// coins, critters, golden keys, flagpole finish. The renderer is shared
// with the overworld and owned by main.js; main calls tick(dt) + renders.

import * as THREE from 'three';
import { LevelScene, generateLevel } from './level.js';
import { Player, KID_H } from './player.js';
import { BlocksEvent, DoorsEvent, StarsEvent } from './wordevents.js';
import { Effects } from './effects.js';
import { createInput } from './input.js';
import {
  sfxCoin, sfxWrong, sfxStomp, sfxBoing, sfxKeyJingle, sfxFireworks, speak,
} from './audio.js';
import {
  WORLDS, DOLCH, PRAISE, getLevelWords, getSecretWords, buildRunQueue,
  pickDistractors, shuffle,
} from './words.js';
import * as store from './store.js';

const WALK_SPEED = 4.5;
const EVENT_SPEED = 2.7; // eased to inside word-event zones
const STARS_SPEED = 2.5;
const CRITTER_COLORS = [0xff7f50, 0xba68c8, 0x4dd0e1, 0x9fa8da, 0xffb74d];

const boxGeo = new THREE.BoxGeometry(1, 1, 1);

function makeCritter() {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0xff7f50 });
  const body = new THREE.Mesh(boxGeo, mat);
  body.scale.set(0.95, 0.6, 0.7);
  body.position.y = 0.45;
  const top = new THREE.Mesh(boxGeo, mat);
  top.scale.set(0.65, 0.3, 0.55);
  top.position.y = 0.85;
  const white = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const dark = new THREE.MeshLambertMaterial({ color: 0x222222 });
  for (const s of [-0.18, 0.18]) {
    const eye = new THREE.Mesh(boxGeo, white);
    eye.scale.setScalar(0.18);
    eye.position.set(s + 0.25, 0.62, 0.36);
    const pupil = new THREE.Mesh(boxGeo, dark);
    pupil.scale.setScalar(0.09);
    pupil.position.set(s + 0.28, 0.62, 0.46);
    g.add(eye, pupil);
  }
  for (const s of [-0.25, 0.25]) {
    const foot = new THREE.Mesh(boxGeo, dark);
    foot.scale.set(0.22, 0.18, 0.3);
    foot.position.set(s, 0.09, 0);
    g.add(foot);
  }
  g.add(body, top);
  g.userData.mat = mat;
  return g;
}

// Shared with the overworld (miniature key markers on nodes).
export function makeKeyMesh() {
  const g = new THREE.Group();
  const mat = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x775500 });
  const ring = [
    [0, 0.35, 0.5, 0.12], [0, -0.35, 0.5, 0.12],
    [-0.25, 0, 0.12, 0.6], [0.25, 0, 0.12, 0.6],
  ];
  for (const [x, y, sx, sy] of ring) {
    const m = new THREE.Mesh(boxGeo, mat);
    m.scale.set(sx, sy, 0.12);
    m.position.set(x, y + 0.5, 0);
    g.add(m);
  }
  const shaft = new THREE.Mesh(boxGeo, mat);
  shaft.scale.set(0.12, 0.7, 0.12);
  shaft.position.y = -0.3;
  const tooth = new THREE.Mesh(boxGeo, mat);
  tooth.scale.set(0.3, 0.12, 0.12);
  tooth.position.set(0.15, -0.55, 0);
  g.add(shaft, tooth);
  return g;
}

export class Game {
  // callbacks: { onCoins(n), onDotsInit(count), onDot(index, cls),
  //              onKey(found), onRunComplete(res) }
  constructor(renderer, cb) {
    this.cb = cb;
    this.renderer = renderer;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50, window.innerWidth / window.innerHeight, 0.1, 120
    );
    this.camera.position.set(3, 4.2, 14);
    this.lookTarget = new THREE.Vector3(4, 3, 0);

    const hemi = new THREE.HemisphereLight(0xffffff, 0x88aa66, 1.1);
    const sun = new THREE.DirectionalLight(0xfff2d9, 1.4);
    sun.position.set(4, 10, 6);
    this.scene.add(hemi, sun);

    this.level = new LevelScene(this.scene);
    this.player = new Player(this.scene);
    this.effects = new Effects(this.scene);

    this.critters = [];
    for (let i = 0; i < 6; i++) {
      const g = makeCritter();
      g.visible = false;
      this.scene.add(g);
      this.critters.push({ g, x: 0, dir: 1, x0: 0, x1: 0, state: 'off', squashT: 0 });
    }

    this.keyMesh = makeKeyMesh();
    this.keyMesh.visible = false;
    this.scene.add(this.keyMesh);

    this.input = createInput(renderer.domElement, {
      onJump: () => this.running && !this.paused && this.player.jump(),
    });

    this.running = false;
    this.paused = false;
    this.speed = 0;
    this.elapsed = 0;
    this.events = [];
    this.activeEv = null;
    this.stars = null;

    // Shared context handed to word events.
    this.api = {
      effects: this.effects,
      level: this.level,
      praise: () => {
        speak(PRAISE[this.praiseIdx++ % PRAISE.length], { rate: 1.0 });
      },
      addCoins: (n) => this.addCoins(n),
      bounceBack: (toX) => this.bounceBack(toX),
      speakWord: () => this.repeatWord(),
      onCorrect: (firstTry) => this.onEventCorrect(firstTry),
    };
  }

  // ---------- run lifecycle ----------

  startRun(worldIdx, levelIdx, { secret = false } = {}) {
    this.worldIdx = worldIdx;
    this.levelIdx = levelIdx;
    this.secret = secret;
    this.tierList = DOLCH[WORLDS[worldIdx].tier];
    this.levelWords = secret
      ? getSecretWords(worldIdx, store.wordStats)
      : getLevelWords(worldIdx, levelIdx);

    this.queue = buildRunQueue(this.levelWords, store.wordStats);
    this.results = []; // { word, firstTry }
    this.praiseIdx = 0;
    this.runCoins = 0;
    this.runGems = 0;
    this.keyFound = false;

    // Deterministic layout per level (stable across replays).
    const seed = worldIdx * 97 + levelIdx * 13 + (secret ? 7 : 1);
    const hasKey = !secret && (worldIdx + levelIdx) % 2 === 0;
    this.data = generateLevel({
      seed, wordCount: this.queue.length, theme: worldIdx, secret, hasKey,
    });
    this.level.build(this.data);

    this.clearEvents();
    this.events = this.data.events; // defs; instances built on approach
    this.eventIdx = 0;
    this.activeEv = null;
    this.spoken = false;
    this.stars = null;
    this.phase = 'run'; // run | stars | flag | done
    this.repeatTimer = 0;
    this.autoRepeats = 0;
    this.bounce = null;
    this.stumbleMul = 1;
    this.flagT = 0;
    this.doneTimer = 0;

    // Critters.
    for (let i = 0; i < this.critters.length; i++) {
      const c = this.critters[i];
      const def = this.data.critters[i];
      if (def) {
        c.state = 'pace';
        c.x0 = def.x0;
        c.x1 = def.x1;
        c.x = (def.x0 + def.x1) / 2;
        c.dir = 1;
        c.squashT = 0;
        c.g.visible = true;
        c.g.scale.setScalar(1);
        c.g.userData.mat.color.setHex(CRITTER_COLORS[worldIdx]);
      } else {
        c.state = 'off';
        c.g.visible = false;
      }
    }

    // Golden key.
    if (this.data.key) {
      this.keyMesh.visible = true;
      this.keyMesh.position.set(this.data.key.x, this.data.key.y, 0);
    } else {
      this.keyMesh.visible = false;
    }

    this.player.reset(2, this.data.groundY[2]);
    this.speed = 0;
    this.camera.position.set(this.player.x + 3, 4.2, 14);

    this.cb.onDotsInit(this.queue.length);
    this.cb.onCoins(0);
    this.cb.onKey(false);

    this.running = true;
    this.paused = false;
  }

  stopRun() {
    this.running = false;
    this.clearEvents();
  }

  clearEvents() {
    if (this.activeEv) this.activeEv.dispose();
    this.activeEv = null;
    if (this.stars) this.stars.dispose();
    this.stars = null;
  }

  pause() { this.paused = true; }
  resume() { this.paused = false; }

  // ---------- word helpers ----------

  currentWord() {
    if (this.stars && !this.stars.done) return this.stars.word;
    if (this.activeEv && !this.activeEv.done) return this.activeEv.word;
    return this.queue ? this.queue[this.eventIdx] : null;
  }

  // Inspectable challenge state for tests / debugging.
  get currentEvent() {
    if (this.stars && !this.stars.done) return { type: 'stars', word: this.stars.word };
    if (this.activeEv && !this.activeEv.done) {
      return { type: this.activeEv.type, word: this.activeEv.word };
    }
    return null;
  }

  repeatWord() {
    const w = this.currentWord();
    if (this.running && w) speak(`Find the word: ${w}`, { rate: 0.85 });
  }

  // Programmatically resolve the current word event (for automated tests).
  debugResolve(correct = true) {
    if (!this.running) return;
    if (this.stars && !this.stars.done) {
      this.stars.debugResolve(correct, this.api);
      return;
    }
    if (!this.activeEv && this.eventIdx < this.events.length) this.spawnEvent();
    if (this.activeEv && !this.activeEv.done) this.activeEv.debugResolve(correct, this.api);
  }

  // ---------- events ----------

  spawnEvent() {
    const def = this.events[this.eventIdx];
    const word = this.queue[this.eventIdx];
    const distractors = pickDistractors(word, this.levelWords, this.tierList);
    const opts = { ...def, word, distractors };
    this.activeEv = def.type === 'blocks'
      ? new BlocksEvent(this.scene, this.level, opts)
      : new DoorsEvent(this.scene, this.level, opts);
    this.spoken = false;
  }

  speakIntro() {
    const w = this.activeEv.word;
    const line = this.activeEv.type === 'blocks'
      ? `Bonk the block with the word: ${w}!`
      : `Jump through the door with the word: ${w}!`;
    speak(line, { rate: 0.9 });
    this.repeatTimer = 8;
    this.autoRepeats = 0;
  }

  onEventCorrect(firstTry) {
    const word = this.activeEv ? this.activeEv.word : this.stars && this.stars.word;
    this.results.push({ word, firstTry });
    store.recordWordResult(word, firstTry);
    this.cb.onDot(this.results.length - 1, firstTry ? 'green' : 'yellow');
  }

  startStars() {
    const missed = this.results.filter((r) => !r.firstTry).map((r) => r.word);
    const pool = shuffle(this.results.map((r) => r.word));
    const words = missed.slice(0, 2);
    for (const w of pool) {
      if (words.length >= 2) break;
      if (!words.includes(w)) words.push(w);
    }
    const reviews = words.map((w) => ({
      word: w,
      distractor: pickDistractors(w, this.levelWords, this.tierList)[0] || '...',
    }));
    this.phase = 'stars';
    this.stars = new StarsEvent(this.scene, this.level, {
      x: this.data.starX,
      reviews,
      onGem: () => {
        this.runGems += 1;
        store.addGems(1);
      },
      onDone: () => { this.phase = 'flagrun'; },
    });
    if (reviews.length) {
      speak(`Star time! Grab the star with the word: ${reviews[0].word}!`, { rate: 0.9 });
      this.repeatTimer = 8;
      this.autoRepeats = 0;
    }
  }

  // ---------- misc mechanics ----------

  addCoins(n) {
    this.runCoins = Math.max(0, this.runCoins + n);
    store.addCoins(n);
    this.cb.onCoins(this.runCoins);
  }

  bounceBack(toX) {
    sfxBoing();
    this.bounce = { from: this.player.x, to: Math.max(2, toX), t: 0 };
  }

  updateBounce(dt) {
    const b = this.bounce;
    b.t += dt / 0.45;
    const t = Math.min(1, b.t);
    const e = 1 - Math.pow(1 - t, 3);
    this.player.x = b.from + (b.to - b.from) * e;
    const floor = this.level.floorAt(this.player.x, this.player.y + 1.5);
    this.player.y = floor + Math.sin(t * Math.PI) * 0.9;
    this.player.group.position.set(this.player.x, this.player.y, 0);
    if (t >= 1) {
      this.player.y = floor;
      this.player.vy = 0;
      this.player.grounded = true;
      this.bounce = null;
    }
  }

  updateCritters(dt) {
    const p = this.player;
    for (const c of this.critters) {
      if (c.state === 'off') continue;
      if (c.state === 'squash') {
        c.squashT -= dt;
        c.g.scale.set(1.3, Math.max(0.1, c.squashT / 0.4), 1.3);
        if (c.squashT <= 0) {
          c.state = 'off';
          c.g.visible = false;
        }
        continue;
      }
      if (c.state === 'bonked') {
        // Knocked aside: tumble away from the player, shrink, and vanish.
        c.squashT -= dt;
        c.x += c.dir * 6 * dt;
        const t = Math.max(0, c.squashT / 0.5);
        const gy0 = this.level.groundTopAt(c.x);
        c.g.position.set(c.x, gy0 + (1 - t) * 1.2 * Math.sin(t * Math.PI), 0);
        c.g.rotation.z += c.dir * -10 * dt;
        c.g.scale.setScalar(Math.max(0.05, t));
        if (c.squashT <= 0) {
          c.state = 'off';
          c.g.visible = false;
        }
        continue;
      }
      c.x += c.dir * 1.1 * dt;
      if (c.x < c.x0) { c.x = c.x0; c.dir = 1; }
      if (c.x > c.x1) { c.x = c.x1; c.dir = -1; }
      const gy = this.level.groundTopAt(c.x);
      c.g.position.set(c.x, gy + Math.abs(Math.sin(this.elapsed * 8 + c.x)) * 0.08, 0);
      c.g.rotation.y = c.dir > 0 ? 0.25 : -0.25;
      c.g.rotation.z = Math.sin(this.elapsed * 8 + c.x) * 0.08;

      // Player interaction.
      if (c.state !== 'pace') continue;
      const dx = Math.abs(p.x - c.x);
      if (dx > 0.8) continue;
      const cy = c.g.position.y;
      if (p.vy < -1 && p.y > cy + 0.3 && p.y < cy + 1.1) {
        // Stomp!
        c.state = 'squash';
        c.squashT = 0.4;
        sfxStomp();
        this.effects.sparkle(c.g.position.clone());
        this.effects.floatText(new THREE.Vector3(c.x, cy + 1.4, 0), '+2');
        this.addCoins(2);
        p.bounce(7.5);
      } else if (p.y < cy + 0.8 && p.grounded) {
        // Walked into it: stumble, critter is knocked aside and despawns.
        sfxWrong();
        p.stumble();
        this.stumbleMul = 0.4;
        this.addCoins(-1);
        c.state = 'bonked';
        c.squashT = 0.5;
        c.dir = p.x < c.x ? 1 : -1;
        this.effects.sparkle(c.g.position.clone());
      }
    }
  }

  updateKey() {
    if (!this.keyMesh.visible || this.keyFound) return;
    this.keyMesh.rotation.y += 0.03;
    this.keyMesh.position.y = this.data.key.y + Math.sin(this.elapsed * 2.5) * 0.15;
    const p = this.player;
    if (Math.abs(p.x - this.data.key.x) < 0.9 &&
        p.y + KID_H > this.data.key.y - 0.6 && p.y < this.data.key.y + 0.8) {
      this.keyFound = true;
      this.keyMesh.visible = false;
      sfxKeyJingle();
      this.effects.confetti(this.keyMesh.position.clone());
      this.effects.sparkle(this.keyMesh.position.clone());
      speak('You found a secret key!', { rate: 1.0 });
      this.cb.onKey(true);
    }
  }

  // ---------- main loop ----------

  tick(dt) {
    this.elapsed += dt;
    if (this.running && !this.paused) this.updateRun(dt);
    this.updateCamera(dt);
  }

  updateRun(dt) {
    const p = this.player;

    // Target speed: slows near/inside word events, stops for flag & bounces.
    let target = WALK_SPEED;
    if (this.activeEv && !this.activeEv.done && p.x > this.activeEv.x - 10) {
      target = EVENT_SPEED;
    }
    if (this.phase === 'stars') target = STARS_SPEED;
    if (this.phase === 'flag' || this.phase === 'done') target = 0;
    this.stumbleMul = Math.min(1, this.stumbleMul + dt * 1.2);
    target *= this.stumbleMul;
    this.speed += (target - this.speed) * Math.min(1, dt * 4);

    if (this.bounce) {
      this.updateBounce(dt);
    } else if (this.phase !== 'flag' && this.phase !== 'done') {
      p.update(dt, this.speed, this.level, {
        onLand: (fall) => {
          if (fall > 6) { // soft landing sparkle, never a penalty
            this.effects.sparkle(new THREE.Vector3(p.x, p.y + 0.2, 0));
          }
        },
      });
      // Word-event walls (doors) clamp forward progress.
      if (this.activeEv && !this.activeEv.done) {
        const cx = this.activeEv.clampX();
        if (p.x > cx) p.x = cx;
      }
    }

    // Coins.
    for (const pos of this.level.collectCoins(p.x, p.y)) {
      sfxCoin();
      this.addCoins(1);
      this.effects.sparkle(pos);
      this.effects.floatText(pos, '+1');
    }

    this.updateCritters(dt);
    this.updateKey();
    this.level.update(dt, p.x);
    this.effects.update(dt);

    // ---- event sequencing ----
    if (this.phase === 'run') {
      if (this.activeEv) {
        if (!this.spoken && p.x > this.activeEv.x - 2) {
          this.spoken = true;
          this.speakIntro();
        }
        this.activeEv.update(dt, p, this.api);
        if (this.activeEv.done && p.x > this.activeEv.passedX()) {
          this.activeEv.dispose();
          this.activeEv = null;
          this.eventIdx++;
        }
      } else if (this.eventIdx < this.events.length) {
        if (p.x > this.events[this.eventIdx].x - 14) this.spawnEvent();
      } else if (p.x > this.data.starX - 10) {
        this.startStars();
      }
    } else if (this.phase === 'stars') {
      this.stars.update(dt, p, this.api);
    } else if (this.phase === 'flagrun') {
      if (p.x >= this.data.flagX - 0.4) {
        this.phase = 'flag';
        this.flagT = 0;
        p.x = this.data.flagX - 0.45;
        sfxFireworks();
        speak('Level complete! Amazing!', { rate: 1.0 });
        this.effects.fireworks(new THREE.Vector3(p.x, 3, 0));
      }
    } else if (this.phase === 'flag') {
      // Slide down the pole.
      this.flagT += dt;
      const gy = this.level.groundTopAt(this.data.flagX);
      const t = Math.min(1, this.flagT / 1.1);
      p.y = Math.max(gy, p.y - dt * 6);
      p.group.position.set(p.x, p.y, 0);
      this.level.flag.position.y = 7.4 - t * 6.2;
      if (t >= 1) {
        this.phase = 'done';
        this.doneTimer = 2.4;
      }
    } else if (this.phase === 'done') {
      this.doneTimer -= dt;
      if (this.doneTimer <= 0) this.finishRun();
    }

    // Auto re-speak the target if unanswered (max 2 times per event).
    const ev = (this.stars && !this.stars.done && this.stars.reviews.length && this.stars)
      || (this.activeEv && !this.activeEv.done && this.spoken && this.activeEv);
    if (ev) {
      this.repeatTimer -= dt;
      if (this.repeatTimer <= 0 && this.autoRepeats < 2) {
        this.autoRepeats++;
        this.repeatTimer = 8;
        this.repeatWord();
      }
    }
  }

  finishRun() {
    this.running = false;
    this.clearEvents();
    this.cb.onRunComplete({
      results: this.results,
      coins: this.runCoins,
      gems: this.runGems,
      keyFound: this.keyFound,
    });
  }

  updateCamera(dt) {
    const p = this.player;
    const kx = 1 - Math.exp(-dt * 4);
    const ky = 1 - Math.exp(-dt * 3);
    const tx = p.x + 3.2; // look-ahead
    const ty = Math.max(4.2, p.y * 0.6 + 3.4);
    this.camera.position.x += (tx - this.camera.position.x) * kx;
    this.camera.position.y += (ty - this.camera.position.y) * ky;
    this.camera.position.z = 14;
    this.lookTarget.set(this.camera.position.x + 0.8, this.camera.position.y - 1.6, 0);
    this.camera.lookAt(this.lookTarget);
  }
}
