// 2.5D side-scrolling platformer engine: run state machine, word events,
// coins, critters, golden keys, flagpole finish. The renderer is shared
// with the overworld and owned by main.js; main calls tick(dt) + renders.

import * as THREE from 'three';
import { voxelGeo } from './voxelgeo.js';
import { LevelScene, generateLevel, generateBossArena } from './level.js';
import { Player, KID_H } from './player.js';
import { BlocksEvent, DoorsEvent, StarsEvent } from './wordevents.js';
import { BossFight, BOSSES } from './boss.js';
import { Effects } from './effects.js';
import { createInput } from './input.js';
import {
  sfxCoin, sfxWrong, sfxStomp, sfxBoing, sfxKeyJingle, sfxFireworks, sfxPlink,
  sfxLand, speak, speakLine, speakVariant,
} from './audio.js';
import { BOSS_WIN_LINES } from './lines.js';
import {
  WORLDS, DOLCH, getLevelWords, getSecretWords,
  getBossWords, buildRunQueue, pickDistractors, shuffle,
  getNextTierWords, getRunTierList, buildDistractorPool,
} from './words.js';
import * as store from './store.js';

const WALK_SPEED = 4.5;
const STARS_SPEED = 2.5;
const CHOICE_SPEED = 3.4; // manual left/right steering while time is frozen
const FORWARD_BOOST = 1.9; // holding forward during auto-run speeds him up
const REPEAT_AFTER = 6; // seconds of no answer before the word auto-repeats
const CRITTER_COLORS = [0xff7f50, 0xba68c8, 0x4dd0e1, 0x9fa8da, 0xffb74d];

const boxGeo = voxelGeo;

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
  //              onKey(found), onRunComplete(res),
  //              onControls(mode: 'choice'|'boost'|null),
  //              onAutoRepeat(), onRepeatTip() }
  constructor(renderer, cb) {
    this.cb = cb;
    this.renderer = renderer;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      50, window.innerWidth / window.innerHeight, 0.1, 120
    );
    this.camera.position.set(3, 4.2, 14);
    this.lookTarget = new THREE.Vector3(4, 3, 0);

    const hemi = new THREE.HemisphereLight(0xffeecf, 0x62949c, 1.05);
    const sun = new THREE.DirectionalLight(0xffdca6, 1.55);
    sun.position.set(4, 10, 6);
    this.scene.add(hemi, sun);
    // LevelScene retints the whole rig per world palette in build().
    this.scene.userData.hemiLight = hemi;
    this.scene.userData.sunLight = sun;

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
      onJump: () => {
        if (!this.running || this.paused) return;
        if (this.phase === 'bossIntro') this.endIntro(); // tap skips the intro
        else this.player.jump();
      },
      onMove: (dir, held) => this.setMove('key', dir, held),
    });

    this.bossFight = null;

    this.running = false;
    this.paused = false;
    this.speed = 0;
    this.elapsed = 0;
    this.events = [];
    this.activeEv = null;
    this.stars = null;
    this.choice = false; // time-freeze steering mode at a word choice
    this.moveHeld = {}; // { Lkey, Rkey, Lbtn, Rbtn } held flags
    this.shownControls = null; // last controls mode sent to the HUD

    // Shared context handed to word events.
    this.api = {
      effects: this.effects,
      level: this.level,
      // Correct after at least one miss on this word: recovery praise, and
      // the first-try streak restarts.
      praise: () => {
        this.firstTryStreak = 0;
        speakLine('recover');
      },
      praiseFirstTry: () => {
        this.firstTryStreak++;
        speakLine(this.firstTryStreak >= 3 ? 'streak' : 'firstTry');
      },
      addCoins: (n) => this.addCoins(n),
      bounceBack: (toX) => this.bounceBack(toX),
      speakWord: () => this.repeatWord(),
      onCorrect: (firstTry) => this.onEventCorrect(firstTry),
      onFail: () => this.onEventFail(),
      onWrong: () => {
        // A miss re-teaches the word (listen beat + reshuffle), so restart
        // the auto-repeat clock with a fresh budget.
        this.repeatTimer = REPEAT_AFTER;
        this.autoRepeats = 0;
        if (this.bossFight) this.bossFight.taunt();
      },
      stumble: () => { // boss projectile brush: same gentle cost as a critter
        sfxWrong();
        this.player.stumble();
        this.stumbleMul = 0.4;
        this.addCoins(-1);
      },
    };
  }

  // ---------- run lifecycle ----------

  startRun(worldIdx, levelIdx, { secret = false, boss = false } = {}) {
    this.worldIdx = worldIdx;
    this.levelIdx = levelIdx;
    this.secret = secret;
    this.isBoss = boss;
    this.levelWords = boss
      ? getBossWords(worldIdx, store.wordStats)
      : secret
        ? getSecretWords(worldIdx, store.wordStats)
        : getLevelWords(worldIdx, levelIdx);

    // Regular levels promote mastered words' slots to next-tier material;
    // boss/secret runs are already curated review, so no promotion there.
    this.queue = buildRunQueue(this.levelWords, store.wordStats, {
      promotionPool: boss || secret ? null : getNextTierWords(worldIdx),
    });
    this.tierList = getRunTierList(worldIdx, this.queue);
    this.distractorPool = buildDistractorPool(this.levelWords, this.queue);
    this.results = []; // { word, firstTry }
    this.firstTryStreak = 0;
    this.runCoins = 0;
    this.runGems = 0;
    this.keyFound = false;

    // Deterministic layout per level (stable across replays).
    const seed = worldIdx * 97 + levelIdx * 13 + (secret ? 7 : 1);
    const hasKey = !secret && !boss && (worldIdx + levelIdx) % 2 === 0;
    this.data = boss
      ? generateBossArena({ seed, wordCount: this.queue.length, theme: worldIdx })
      : generateLevel({
        seed, wordCount: this.queue.length, theme: worldIdx, secret, hasKey,
      });
    this.level.build(this.data);

    this.clearEvents();
    this.events = this.data.events; // defs; instances built on approach
    this.eventIdx = 0;
    this.activeEv = null;
    this.spoken = false;
    this.stars = null;
    // run | stars | flagrun | flag | done (+ bossIntro | bossDefeat)
    this.phase = boss ? 'bossIntro' : 'run';
    this.introT = 0;
    this.introSpoke = false;
    this.repeatTimer = 0;
    this.autoRepeats = 0;
    this.repeatTipT = 0; // countdown to the one-time 🔊-button tutorial tip
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
    this.setChoice(false);
    this.moveHeld = {};
    this.camera.position.set(this.player.x + 3, 4.2, 14);

    if (boss) {
      this.bossFight = new BossFight(this.scene, worldIdx, this.effects, this.level);
      this.bossFight.enterAt(this.player.x + 12);
    }

    this.cb.onDotsInit(this.queue.length);
    this.cb.onCoins(0);
    this.cb.onKey(false);

    this.running = true;
    this.paused = false;
    this.syncControls();
  }

  stopRun() {
    this.running = false;
    this.clearEvents();
    this.setChoice(false);
    this.syncControls();
  }

  // ---------- choice mode (time freeze at the decision spot) ----------

  setMove(src, dir, held) {
    this.moveHeld[(dir < 0 ? 'L' : 'R') + src] = held;
  }

  get moveDir() {
    const m = this.moveHeld;
    return ((m.Rkey || m.Rbtn) ? 1 : 0) - ((m.Lkey || m.Lbtn) ? 1 : 0);
  }

  setChoice(on) {
    if (this.choice === on) return;
    this.choice = on;
    this.syncControls();
  }

  // Forward boost is disabled while a boss is up: boosted speed (~8.6/s)
  // beats the boss's retreat cap (6/s), so holding forward would overrun
  // the boss and break the chase staging (and the intro).
  get boostAllowed() {
    if (!this.bossFight) return true;
    return this.bossFight.state === 'defeat' ||
      this.bossFight.state === 'crownDrop' || this.bossFight.state === 'gone';
  }

  // What the HUD should show right now: steering arrows at a frozen word
  // choice, the forward-boost affordance while auto-running, or nothing.
  get controlsMode() {
    if (!this.running) return null;
    if (this.choice) return 'choice';
    const auto = this.phase === 'run' || this.phase === 'stars' || this.phase === 'flagrun';
    return auto && this.boostAllowed ? 'boost' : null;
  }

  syncControls() {
    const mode = this.controlsMode;
    if (mode === this.shownControls) return;
    this.shownControls = mode;
    if (this.cb.onControls) this.cb.onControls(mode);
  }

  // The zone the player may roam while frozen: null when no choice is
  // pending, else { engage, min, max } in world x.
  choiceZone() {
    const ev = this.activeEv;
    if (ev && !ev.done) {
      if (ev.type === 'blocks') {
        return { engage: ev.firstX - 4.5, min: ev.firstX - 6, max: ev.lastX + 1.5 };
      }
      // Doors: freeze before the step ledges; clampX() already walls off max.
      return { engage: ev.wallX - 8, min: ev.wallX - 10, max: Infinity };
    }
    if (this.stars && !this.stars.done && this.stars.reviews.length && this.stars.pending <= 0) {
      const vis = this.stars.stars.filter((s) => s.holder.visible && !s.taken);
      if (vis.length) {
        const xs = vis.map((s) => s.holder.position.x);
        return {
          engage: Math.min(...xs) - 4,
          min: Math.min(...xs) - 5.5,
          max: Math.max(...xs) + 1.5,
        };
      }
    }
    return null;
  }

  clearEvents() {
    if (this.activeEv) this.activeEv.dispose();
    this.activeEv = null;
    if (this.stars) this.stars.dispose();
    this.stars = null;
    if (this.bossFight) {
      this.bossFight.dispose();
      this.bossFight = null;
    }
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

  // Boss battle state for tests / debugging: { hp, phase } or null.
  get boss() {
    return this.bossFight
      ? { hp: this.bossFight.hp, phase: this.bossFight.state }
      : null;
  }

  // Programmatically resolve the current word event (for automated tests).
  debugResolve(correct = true) {
    if (!this.running) return;
    if (this.phase === 'bossIntro') this.endIntro();
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
    const distractors = pickDistractors(word, this.distractorPool, this.tierList);
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
    this.repeatTimer = REPEAT_AFTER;
    this.autoRepeats = 0;
    // First word event ever: point out the 🔊 repeat button, once the
    // intro line has had time to finish (speak() cuts off earlier speech).
    if (!store.get().seenRepeatTip) {
      store.markRepeatTipSeen();
      this.repeatTipT = 3.2;
    }
  }

  onEventCorrect(firstTry) {
    const word = this.activeEv ? this.activeEv.word : this.stars && this.stars.word;
    this.results.push({ word, firstTry });
    store.recordWordResult(word, firstTry);
    this.cb.onDot(this.results.length - 1, firstTry ? 'green' : 'yellow');
    if (this.bossFight) this.bossFight.hit(); // armor block pops off
  }

  // Out of tries on a word event: red dot, the miss counts against the
  // word's lifetime stats, and the run moves on.
  onEventFail() {
    this.firstTryStreak = 0;
    const word = this.activeEv ? this.activeEv.word : this.stars && this.stars.word;
    this.results.push({ word, firstTry: false, failed: true });
    store.recordWordMiss(word);
    this.cb.onDot(this.results.length - 1, 'red');
    if (this.bossFight) this.bossFight.hit(); // the fight still progresses
  }

  endIntro() {
    if (this.phase !== 'bossIntro') return;
    this.phase = 'run';
    this.bossFight.settle();
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
      distractor: pickDistractors(w, this.distractorPool, this.tierList)[0] || '...',
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
      speak(`Star time! Jump under the star with the word: ${reviews[0].word}!`, { rate: 0.9 });
      this.repeatTimer = REPEAT_AFTER;
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
        const gy0 = Math.max(this.level.groundTopAt(c.x - 0.45),
                             this.level.groundTopAt(c.x + 0.45));
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
      // Stand on the higher of the two body-edge columns so a critter
      // near a ground step rides over the raised blocks instead of
      // clipping through them.
      const gy = Math.max(this.level.groundTopAt(c.x - 0.45),
                          this.level.groundTopAt(c.x + 0.45));
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
      speakLine('secretKey');
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

    // Choice mode: reaching the decision spot freezes the auto-run and
    // hands the kid left/right steering (jump still works) until answered.
    const zone = this.choiceZone();
    if (this.choice && !zone) {
      this.setChoice(false);
    } else if (!this.choice && zone && p.x >= zone.engage) {
      this.speed = 0;
      sfxPlink(2);
      this.setChoice(true);
    }

    // Target speed: stops for flag & bounces.
    let target = WALK_SPEED;
    if (this.phase === 'stars') target = STARS_SPEED;
    if (this.phase === 'flag' || this.phase === 'done' || this.choice) target = 0;
    if (this.phase === 'bossIntro' || this.phase === 'bossDefeat') target = 0;
    // Pressing forward (right) while auto-running gives an extra speed burst.
    if (!this.choice && target > 0 && this.moveDir > 0 && this.boostAllowed) {
      target *= FORWARD_BOOST;
    }
    this.stumbleMul = Math.min(1, this.stumbleMul + dt * 1.2);
    target *= this.stumbleMul;
    this.speed += (target - this.speed) * Math.min(1, dt * 4);

    if (this.bounce) {
      this.updateBounce(dt);
    } else if (this.phase !== 'flag' && this.phase !== 'done') {
      const moveSpeed = this.choice ? this.moveDir * CHOICE_SPEED : this.speed;
      p.update(dt, moveSpeed, this.level, {
        onLand: (fall) => {
          if (fall > 6) { // soft landing sparkle + thud, never a penalty
            this.effects.sparkle(new THREE.Vector3(p.x, p.y + 0.2, 0));
            sfxLand();
          }
        },
      });
      // Keep him inside the frozen zone so he can't wander past the choice.
      if (this.choice && zone) {
        p.x = Math.min(Math.max(p.x, zone.min), zone.max);
      }
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

    if (!this.choice) this.updateCritters(dt); // critters freeze with time
    this.updateKey();
    this.level.update(dt, p.x);
    this.effects.update(dt);

    if (this.bossFight) {
      const ev = this.activeEv && !this.activeEv.done ? this.activeEv : null;
      this.bossFight.update(dt, p, this.api, {
        battle: this.phase === 'run',
        challengeActive: !!ev,
        minX: ev && ev.lastX ? ev.lastX + 5 : 0, // stay clear of the ? blocks
      });
    }

    // ---- event sequencing ----
    if (this.phase === 'bossIntro') {
      this.introT += dt;
      if (!this.introSpoke && this.introT > 1.4) {
        this.introSpoke = true;
        speak(`The ${BOSSES[this.worldIdx].name} wants to hear you read!`, { rate: 1.0 });
      }
      if (this.introT > 5.5) this.endIntro();
    } else if (this.phase === 'run') {
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
      } else if (this.isBoss) {
        // Every armor block gone: the boss falls, no star review needed.
        this.phase = 'bossDefeat';
        this.bossFight.startDefeat(this.api, p);
        speakVariant('bossWin', BOSS_WIN_LINES(BOSSES[this.worldIdx].name));
      } else if (p.x > this.data.starX - 10) {
        this.startStars();
      }
    } else if (this.phase === 'stars') {
      this.stars.update(dt, p, this.api);
    } else if (this.phase === 'bossDefeat') {
      if (this.bossFight.state === 'gone') this.phase = 'flagrun';
    } else if (this.phase === 'flagrun') {
      if (p.x >= this.data.flagX - 0.4) {
        this.phase = 'flag';
        this.flagT = 0;
        p.x = this.data.flagX - 0.45;
        sfxFireworks();
        speakLine('levelComplete');
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

    // Auto re-speak the target if unanswered (max 2 times per quiet spell;
    // wrong attempts reset the spell via api.onWrong).
    const ev = (this.stars && !this.stars.done && this.stars.reviews.length && this.stars)
      || (this.activeEv && !this.activeEv.done && this.spoken && this.activeEv);
    if (ev) {
      this.repeatTimer -= dt;
      if (this.repeatTimer <= 0 && this.autoRepeats < 2) {
        this.autoRepeats++;
        this.repeatTimer = REPEAT_AFTER;
        this.repeatWord();
        if (this.cb.onAutoRepeat) this.cb.onAutoRepeat(); // HUD flashes 🔊
      }
    }

    // One-time 🔊-button tutorial, delayed so the intro line finishes first.
    if (this.repeatTipT > 0) {
      this.repeatTipT -= dt;
      if (this.repeatTipT <= 0 && this.cb.onRepeatTip) this.cb.onRepeatTip();
    }

    this.syncControls();
  }

  finishRun() {
    this.running = false;
    this.syncControls();
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
