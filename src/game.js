// Core runner: scene/camera/loop, run state machine (word challenges),
// coins & obstacles, collisions, speed control.

import * as THREE from 'three';
import { Track } from './track.js';
import { Player } from './player.js';
import { WordGates } from './wordgates.js';
import { Effects } from './effects.js';
import { createInput } from './input.js';
import {
  sfxCoin, sfxCorrect, sfxWrong, sfxFireworks, speak,
} from './audio.js';
import {
  WORLDS, DOLCH, PRAISE, getLevelWords, buildRunQueue, pickDistractors, shuffle,
} from './words.js';
import * as store from './store.js';

const COIN_POOL = 36;
const OBSTACLE_POOL = 10;
const GATE_DISTANCE = 40;
const BASE_SPEED = 10;
const SPEED_PER_WORD = 0.3;
const MAX_SPEED = 16;
const MAX_EXTRA_REPEATS = 2; // missed words re-asked at end of run

export class Game {
  // callbacks: { onCoins(n), onDotsInit(count), onDot(index, cls), onRunComplete(results) }
  constructor(container, callbacks) {
    this.cb = callbacks;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      60, window.innerWidth / window.innerHeight, 0.1, 160
    );
    this.camera.position.set(0, 3.6, 7.5);
    this.lookTarget = new THREE.Vector3();

    const hemi = new THREE.HemisphereLight(0xffffff, 0x88aa66, 1.1);
    const sun = new THREE.DirectionalLight(0xfff2d9, 1.4);
    sun.position.set(4, 10, 3);
    this.scene.add(hemi, sun);
    this.sun = sun;

    this.track = new Track(this.scene);
    this.player = new Player(this.scene);
    this.gates = new WordGates(this.scene);
    this.effects = new Effects(this.scene);
    this.track.setWorld(0);

    // ---- coin pool ----
    const coinGeo = new THREE.BoxGeometry(0.55, 0.55, 0.12);
    const coinMat = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 });
    this.coins = [];
    for (let i = 0; i < COIN_POOL; i++) {
      const m = new THREE.Mesh(coinGeo, coinMat);
      m.visible = false;
      this.scene.add(m);
      this.coins.push(m);
    }

    // ---- obstacle pool (voxel bushes) ----
    const box = new THREE.BoxGeometry(1, 1, 1);
    const bushMat = new THREE.MeshLambertMaterial({ color: 0x2e7d32 });
    const bushMat2 = new THREE.MeshLambertMaterial({ color: 0x43a047 });
    this.obstacles = [];
    for (let i = 0; i < OBSTACLE_POOL; i++) {
      const g = new THREE.Group();
      const a = new THREE.Mesh(box, bushMat);
      a.scale.set(1.1, 0.7, 0.7);
      a.position.y = 0.35;
      const b = new THREE.Mesh(box, bushMat2);
      b.scale.set(0.6, 0.5, 0.5);
      b.position.set(0.2, 0.8, 0);
      g.add(a, b);
      g.visible = false;
      this.scene.add(g);
      this.obstacles.push(g);
    }

    this.input = createInput(container, {
      left: () => this.running && !this.paused && this.player.moveLane(-1),
      right: () => this.running && !this.paused && this.player.moveLane(1),
      jump: () => this.running && !this.paused && this.player.jump(),
    });

    this.running = false;
    this.paused = false;
    this.speed = 0;
    this.stumbleMul = 1;
    this.clock = new THREE.Clock();
    this.elapsed = 0;

    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('orientationchange', () => this.onResize());

    this.renderer.setAnimationLoop(() => this.tick());
  }

  onResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // ---------- run lifecycle ----------

  startRun(worldIdx, levelIdx) {
    this.worldIdx = worldIdx;
    this.levelIdx = levelIdx;
    this.levelWords = getLevelWords(worldIdx, levelIdx);
    this.tierList = DOLCH[WORLDS[worldIdx].tier];

    this.queue = buildRunQueue(this.levelWords, store.wordStats);
    this.idx = 0;
    this.results = []; // { word, firstTry } for the primary words
    this.extraQueue = []; // missed words re-asked once at the end
    this.inExtras = false;
    this.attempts = 0;
    this.praiseIdx = 0;
    this.completedWords = 0;
    this.runCoins = 0;
    this.doneTimer = -1;

    this.track.setWorld(worldIdx);
    this.player.reset();
    this.gates.clear();
    for (const c of this.coins) c.visible = false;
    for (const o of this.obstacles) o.visible = false;

    this.phase = 'cruise';
    this.cruiseTimer = 3;
    this.repeatTimer = 0;
    this.autoRepeats = 0;
    this.nextSpawnZ = -18;
    this.speed = BASE_SPEED;
    this.stumbleMul = 1;

    this.cb.onDotsInit(this.queue.length);
    this.cb.onCoins(this.runCoins);

    this.running = true;
    this.paused = false;
  }

  stopRun() {
    this.running = false;
    this.gates.clear();
  }

  pause() { this.paused = true; }
  resume() {
    this.paused = false;
    this.clock.getDelta(); // swallow the long pause delta
  }

  currentWord() {
    return this.inExtras ? this.extraQueue[this.idx] : this.queue[this.idx];
  }

  repeatWord() {
    const w = this.currentWord();
    if (this.running && w) speak(`Find the word: ${w}`, { rate: 0.85 });
  }

  // ---------- challenge machinery ----------

  spawnChallenge() {
    const target = this.currentWord();
    const distractors = pickDistractors(target, this.levelWords, this.tierList);
    const lanes = shuffle([0, 1, 2]);
    const words = ['', '', ''];
    const targetLane = lanes[0];
    words[targetLane] = target;
    words[lanes[1]] = distractors[0] || '...';
    words[lanes[2]] = distractors[1] || '...';

    const gateZ = this.player.z - GATE_DISTANCE;
    this.gates.spawn(gateZ, words, targetLane);
    // Clear the approach so nothing distracts (coins) or trips him
    // (obstacles) while he's reading the signs.
    for (const o of this.obstacles) {
      if (o.visible && o.position.z - gateZ < 18 && o.position.z - gateZ > -6) o.visible = false;
    }
    for (const c of this.coins) {
      if (c.visible && c.position.z - gateZ < 18 && c.position.z - gateZ > -6) c.visible = false;
    }
    this.phase = 'gates';
    this.repeatTimer = 8;
    this.autoRepeats = 0;
    speak(`Find the word: ${target}`, { rate: 0.85 });
  }

  resolveGate() {
    const target = this.currentWord();
    const lane = this.player.lane;
    const gatePos = this.gates.gates[lane].group.position;
    const correct = lane === this.gates.targetLane;
    this.gates.clear();

    if (correct) {
      sfxCorrect();
      this.effects.confetti(new THREE.Vector3(gatePos.x, 2, gatePos.z));
      this.runCoins += 3;
      store.addCoins(3);
      this.cb.onCoins(this.runCoins);
      this.effects.floatText(new THREE.Vector3(gatePos.x, 3, gatePos.z), '+3');
      speak(PRAISE[this.praiseIdx % PRAISE.length], { rate: 1.0 });
      this.praiseIdx++;

      const firstTry = this.attempts === 0;
      if (!this.inExtras) {
        this.results.push({ word: target, firstTry });
        store.recordWordResult(target, firstTry);
        this.cb.onDot(this.idx, firstTry ? 'green' : 'yellow');
        if (!firstTry && this.extraQueue.length < MAX_EXTRA_REPEATS) {
          this.extraQueue.push(target); // one more practice at the end
        }
      }
      this.completedWords++;
      this.attempts = 0;
      this.idx++;

      const listDone = this.inExtras
        ? this.idx >= this.extraQueue.length
        : this.idx >= this.queue.length;
      if (listDone) {
        if (!this.inExtras && this.extraQueue.length > 0) {
          this.inExtras = true;
          this.idx = 0;
          this.phase = 'cruise';
          this.cruiseTimer = 3 + Math.random() * 2;
        } else {
          this.finishRun();
        }
      } else {
        this.phase = 'cruise';
        this.cruiseTimer = 3 + Math.random() * 2;
      }
    } else {
      sfxWrong();
      this.player.stumble();
      this.stumbleMul = 0.4;
      this.attempts++;
      speak(`Almost! The word is: ${target}. Try again!`, { rate: 0.9 });
      // Same target re-spawns ~5s later with reshuffled lanes.
      this.phase = 'cruise';
      this.cruiseTimer = 5;
    }
  }

  finishRun() {
    this.phase = 'done';
    this.doneTimer = 2.6;
    sfxFireworks();
    speak('Level complete! Amazing!', { rate: 1.0 });
    this.effects.fireworks(new THREE.Vector3(
      this.player.group.position.x, 2, this.player.z
    ));
  }

  // ---------- coins & obstacles ----------

  trySpawn(z) {
    // Keep the corridor near gates clear.
    if (this.gates.active && z - this.gates.z < 18 && z - this.gates.z > -6) return;
    if (Math.random() < 0.22) {
      const o = this.obstacles.find((m) => !m.visible);
      if (o) {
        o.position.set([-2.5, 0, 2.5][(Math.random() * 3) | 0], 0, z);
        o.visible = true;
        o.userData.hit = false;
      }
    } else {
      const lane = (Math.random() * 3) | 0;
      for (let i = 0; i < 3; i++) {
        const c = this.coins.find((m) => !m.visible);
        if (!c) break;
        c.position.set([-2.5, 0, 2.5][lane], 1, z - i * 1.3);
        c.visible = true;
      }
    }
  }

  updatePickups(dt) {
    const px = this.player.group.position.x;
    const pz = this.player.z;
    for (const c of this.coins) {
      if (!c.visible) continue;
      c.rotation.y += dt * 4;
      c.position.y = 1 + Math.sin(this.elapsed * 3 + c.position.z) * 0.12;
      if (c.position.z > pz + 6) { c.visible = false; continue; }
      if (Math.abs(c.position.x - px) < 1 && Math.abs(c.position.z - pz) < 0.9) {
        c.visible = false;
        sfxCoin();
        this.runCoins += 1;
        store.addCoins(1);
        this.cb.onCoins(this.runCoins);
        this.effects.sparkle(c.position);
        this.effects.floatText(c.position, '+1');
      }
    }
    for (const o of this.obstacles) {
      if (!o.visible) continue;
      if (o.position.z > pz + 6) { o.visible = false; continue; }
      if (
        !o.userData.hit &&
        Math.abs(o.position.x - px) < 1 &&
        Math.abs(o.position.z - pz) < 0.6 &&
        !this.player.isAirborne
      ) {
        o.userData.hit = true;
        sfxWrong();
        this.player.stumble();
        this.stumbleMul = 0.4;
        if (this.runCoins > 0) {
          this.runCoins -= 1;
          store.addCoins(-1);
          this.cb.onCoins(this.runCoins);
        }
      }
    }
  }

  // ---------- main loop ----------

  tick() {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.elapsed += dt;

    if (this.running && !this.paused) {
      this.updateRun(dt);
    }
    this.updateCamera(dt);
    this.renderer.render(this.scene, this.camera);
  }

  updateRun(dt) {
    // Speed: ramps with words completed; eases down near gates; stumble dips.
    let target = Math.min(BASE_SPEED + SPEED_PER_WORD * this.completedWords, MAX_SPEED);
    if (this.gates.active && this.player.z - this.gates.z < 25) target *= 0.7;
    this.stumbleMul = Math.min(1, this.stumbleMul + dt * 1.2);
    target *= this.stumbleMul;
    this.speed += (target - this.speed) * Math.min(1, dt * 3);

    this.player.update(dt, this.speed);
    this.track.update(dt, this.player.z);
    this.effects.update(dt);

    // March the spawner ahead of the player.
    while (this.nextSpawnZ > this.player.z - 70) {
      this.trySpawn(this.nextSpawnZ);
      this.nextSpawnZ -= 6 + Math.random() * 5;
    }
    this.updatePickups(dt);

    // Challenge state machine.
    if (this.phase === 'cruise') {
      this.cruiseTimer -= dt;
      if (this.cruiseTimer <= 0) this.spawnChallenge();
    } else if (this.phase === 'gates') {
      if (this.gates.crossed(this.player.z)) {
        this.resolveGate();
      } else {
        // Auto re-speak the word if he hasn't answered yet (max 2).
        this.repeatTimer -= dt;
        if (this.repeatTimer <= 0 && this.autoRepeats < 2) {
          this.autoRepeats++;
          this.repeatTimer = 8;
          this.repeatWord();
        }
      }
    } else if (this.phase === 'done') {
      this.doneTimer -= dt;
      if (this.doneTimer <= 0) {
        this.running = false;
        this.cb.onRunComplete({ results: this.results, coins: this.runCoins });
      }
    }
  }

  updateCamera(dt) {
    const p = this.player.group.position;
    const k = 1 - Math.exp(-dt * 5); // camera lag on lane change
    this.camera.position.x += (p.x * 0.7 - this.camera.position.x) * k;
    this.camera.position.z = this.player.z + 7.5;
    this.camera.position.y = 3.6 + Math.sin(this.elapsed * 2) * 0.05;
    this.lookTarget.set(p.x * 0.5, 1.4, this.player.z - 8);
    this.camera.lookAt(this.lookTarget);
  }
}
