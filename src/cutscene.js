// Script-driven cutscene player. Owns its own scene + camera and takes over
// the render loop as mode 'cutscene' (see main.js). Cutscenes are plain data
// arrays (see cutscenes.js) — each entry is one step: camera moves, actors
// walking, spoken captions, big sight-word reveals, sfx, waits.
//
// Steps run one at a time. A step with `async: true` starts and the runner
// immediately moves on (walk while the camera dollies). Tap anywhere =
// fast-forward the current step; SKIP ends the whole scene.

import * as THREE from 'three';
import { makeKidMesh, currentLook } from './player.js';
import { buildBoss, BOSSES } from './boss.js';
import * as audio from './audio.js';
import { speak } from './audio.js';
import { Effects } from './effects.js';

const $ = (id) => document.getElementById(id);

const WORD_LETTER_DELAY = 0.28; // seconds between letters popping in
const WORD_HOLD = 1.6; // seconds the full word lingers before advancing
const CAPTION_MIN = 1.2; // captions never flash away faster than this

export class CutsceneScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87ceeb);
    this.scene.fog = new THREE.Fog(0x87ceeb, 30, 80);

    this.camera = new THREE.PerspectiveCamera(
      50, window.innerWidth / window.innerHeight, 0.1, 200
    );
    this.camera.position.set(0, 4, 12);
    this.camera.lookAt(0, 1.5, 0);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const sun = new THREE.DirectionalLight(0xffffff, 1.6);
    sun.position.set(6, 12, 8);
    this.scene.add(sun);

    this.ground = new THREE.Mesh(
      new THREE.CircleGeometry(50, 40),
      new THREE.MeshLambertMaterial({ color: 0x7ec850 })
    );
    this.ground.rotation.x = -Math.PI / 2;
    this.scene.add(this.ground);

    this.effects = new Effects(this.scene);

    this.stage = new THREE.Group(); // actors live here; cleared per scene
    this.scene.add(this.stage);

    this.actors = new Map();
    this.playing = false;
    this.script = [];
    this.idx = -1;
    this.blocking = null; // the action the runner is waiting on
    this.background = []; // async actions still updating
    this.onDone = null;
    this.t = 0;

    // ----- DOM chrome (letterbox, caption, big word, skip) -----
    const screen = $('screen-cutscene');
    screen.addEventListener('pointerdown', () => this.tapAdvance());
    const skipBtn = $('btn-cutscene-skip');
    skipBtn.addEventListener('pointerdown', (e) => e.stopPropagation());
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speak('Skip!', { rate: 1.0 });
      this.finish();
    });
  }

  // ---------- lifecycle ----------

  play(script, onDone) {
    this.stopAll();
    this.script = script;
    this.onDone = onDone;
    this.idx = -1;
    this.playing = true;
    this.t = 0;
    setCaption(null);
    setWord(null);
    this.advance();
  }

  finish() {
    if (!this.playing) return;
    this.playing = false;
    this.stopAll();
    const done = this.onDone;
    this.onDone = null;
    if (done) done();
  }

  stopAll() {
    if ('speechSynthesis' in window) speechSynthesis.cancel();
    this.blocking = null;
    this.background = [];
    setCaption(null);
    setWord(null);
    for (const a of this.actors.values()) this.stage.remove(a.group);
    this.actors.clear();
  }

  // ---------- step runner ----------

  advance() {
    while (this.playing) {
      this.idx++;
      if (this.idx >= this.script.length) {
        this.finish();
        return;
      }
      const action = this.startStep(this.script[this.idx]);
      if (!action) continue; // instant step — keep going
      if (this.script[this.idx].async) {
        this.background.push(action);
        continue;
      }
      this.blocking = action;
      return;
    }
  }

  tapAdvance() {
    if (!this.playing || !this.blocking) return;
    const a = this.blocking;
    this.blocking = null;
    if (a.fastForward) a.fastForward();
    this.advance();
  }

  tick(dt) {
    if (!this.playing) return;
    this.t += dt;
    this.effects.update(dt);

    // Idle life on every actor: gentle bob + breath.
    for (const a of this.actors.values()) {
      if (!a.walking) {
        a.group.position.y = a.baseY + Math.sin(this.t * 2.2 + a.bobSeed) * 0.04;
      }
      this.updateWalk(a, dt);
    }

    this.background = this.background.filter((a) => !a.update(dt));
    if (this.blocking && this.blocking.update(dt)) {
      this.blocking = null;
      this.advance();
    }
  }

  // ---------- step factories (each returns an action or null) ----------
  // action = { update(dt) -> done?, fastForward?() }

  startStep(step) {
    if (step.setting) return this.doSetting(step.setting);
    if (step.spawn) return this.doSpawn(step.spawn);
    if (step.walk) return this.doWalk(step.walk);
    if (step.cam) return this.doCam(step.cam);
    if (step.say) return this.doSay(step.say);
    if (step.showWord) return this.doShowWord(step.showWord);
    if (step.emote) return this.doEmote(step.emote);
    if (step.sfx) return this.doSfx(step.sfx);
    if (step.fx) return this.doFx(step.fx);
    if (step.wait != null) return this.doWait(step.wait);
    console.warn('cutscene: unknown step', step);
    return null;
  }

  doSetting({ sky = 0x87ceeb, ground = 0x7ec850 }) {
    this.scene.background.setHex(sky);
    this.scene.fog.color.setHex(sky);
    this.ground.material.color.setHex(ground);
    return null;
  }

  doSpawn({ id, kind = 'kid', at = [0, 0], face = 0, scale = 1, world = 0 }) {
    let group;
    if (kind === 'kid') {
      group = makeKidMesh(scale, currentLook());
    } else if (kind === 'boss') {
      group = buildBoss(world).group;
      group.scale.setScalar(scale);
    } else {
      console.warn('cutscene: unknown actor kind', kind);
      return null;
    }
    group.position.set(at[0], 0, at[1]);
    group.rotation.y = face;
    this.stage.add(group);
    this.actors.set(id, {
      group,
      kind,
      baseY: 0,
      bobSeed: Math.random() * 6,
      walking: null,
      walkPhase: 0,
    });
    return null;
  }

  doWalk({ id, to, speed = 2.2 }) {
    const a = this.actors.get(id);
    if (!a) return null;
    const target = new THREE.Vector3(to[0], 0, to[1]);
    const dir = target.clone().sub(a.group.position).setY(0);
    if (dir.lengthSq() > 0.001) {
      // Kid mesh is built facing +x; bosses face +z.
      const yaw = a.kind === 'kid'
        ? Math.atan2(-dir.z, dir.x)
        : Math.atan2(dir.x, dir.z);
      a.group.rotation.y = yaw;
    }
    a.walking = { target, speed };
    return {
      update: () => !a.walking,
      fastForward: () => {
        a.group.position.copy(target);
        a.group.position.y = a.baseY;
        this.settleLimbs(a);
        a.walking = null;
      },
    };
  }

  updateWalk(a, dt) {
    if (!a.walking) return;
    const { target, speed } = a.walking;
    const pos = a.group.position;
    const dir = target.clone().sub(pos).setY(0);
    const dist = dir.length();
    const stepLen = speed * dt;
    if (dist <= stepLen) {
      pos.set(target.x, a.baseY, target.z);
      this.settleLimbs(a);
      a.walking = null;
      return;
    }
    dir.normalize().multiplyScalar(stepLen);
    pos.add(dir);
    a.walkPhase += dt * speed * 3.4;
    pos.y = a.baseY + Math.abs(Math.sin(a.walkPhase)) * 0.06;
    if (a.kind === 'kid') {
      const p = a.group.userData.parts;
      const s = Math.sin(a.walkPhase);
      p.legL.rotation.z = s * 0.55;
      p.legR.rotation.z = -s * 0.55;
      p.armL.rotation.z = -s * 0.4;
      p.armR.rotation.z = s * 0.4;
    }
  }

  settleLimbs(a) {
    if (a.kind !== 'kid') return;
    const p = a.group.userData.parts;
    for (const limb of [p.legL, p.legR, p.armL, p.armR]) limb.rotation.z = 0;
  }

  doCam({ to, lookAt = [0, 1.5, 0], dur = 1.5 }) {
    const from = this.camera.position.clone();
    const target = new THREE.Vector3(...to);
    const look = new THREE.Vector3(...lookAt);
    // Ease the look target too, so cuts between subjects glide.
    const lookFrom = this.camLook ? this.camLook.clone() : look.clone();
    let t = 0;
    const apply = (k) => {
      const e = k * k * (3 - 2 * k); // smoothstep
      this.camera.position.lerpVectors(from, target, e);
      this.camLook = lookFrom.clone().lerp(look, e);
      this.camera.lookAt(this.camLook);
    };
    return {
      update: (dt) => {
        t += dt;
        const k = Math.min(t / dur, 1);
        apply(k);
        return k >= 1;
      },
      fastForward: () => apply(1),
    };
  }

  doSay({ who = null, text, highlight = [] }) {
    setCaption(text, highlight);
    const a = who ? this.actors.get(who) : null;
    let spoken = false;
    let t = 0;
    speak(text, { rate: 0.95, onend: () => { spoken = true; } });
    return {
      update: (dt) => {
        t += dt;
        // Talking bounce on the speaker.
        if (a && !a.walking) {
          a.group.position.y = a.baseY + Math.abs(Math.sin(t * 9)) * (spoken ? 0 : 0.05);
        }
        const done = spoken && t >= CAPTION_MIN;
        if (done) setCaption(null);
        return done;
      },
      fastForward: () => {
        if ('speechSynthesis' in window) speechSynthesis.cancel();
        setCaption(null);
      },
    };
  }

  doShowWord({ word, say = null }) {
    const letters = setWord(word); // returns letter <span>s, all hidden
    let t = 0;
    let shown = 0;
    let spokeAt = null;
    const revealDur = word.length * WORD_LETTER_DELAY;
    return {
      update: (dt) => {
        t += dt;
        while (shown < letters.length && t >= (shown + 1) * WORD_LETTER_DELAY) {
          letters[shown].classList.add('cs-in');
          audio.sfxPlink(shown);
          shown++;
        }
        if (shown === letters.length && spokeAt === null) {
          spokeAt = t;
          speak(say || word, { rate: 0.9 });
        }
        const done = t >= revealDur + WORD_HOLD;
        if (done) setWord(null);
        return done;
      },
      fastForward: () => {
        for (const l of letters) l.classList.add('cs-in');
        speak(say || word, { rate: 0.9 });
        setTimeout(() => setWord(null), 900);
      },
    };
  }

  doEmote({ id, kind = 'jump' }) {
    const a = this.actors.get(id);
    if (!a) return null;
    let t = 0;
    const dur = kind === 'shake' ? 0.6 : 0.7;
    if (kind === 'jump') audio.sfxJump();
    return {
      update: (dt) => {
        t += dt;
        const k = Math.min(t / dur, 1);
        if (kind === 'jump') {
          a.group.position.y = a.baseY + Math.sin(k * Math.PI) * 1.1;
          if (a.kind === 'kid') {
            const p = a.group.userData.parts;
            p.armL.rotation.z = p.armR.rotation.z = Math.sin(k * Math.PI) * 2.6;
          }
        } else if (kind === 'shake') {
          a.group.rotation.z = Math.sin(k * Math.PI * 6) * 0.09 * (1 - k);
        } else if (kind === 'wave' && a.kind === 'kid') {
          a.group.userData.parts.armR.rotation.z =
            Math.PI * 0.9 + Math.sin(t * 10) * 0.35 * (1 - k);
        }
        if (k >= 1) {
          a.group.position.y = a.baseY;
          a.group.rotation.z = 0;
          this.settleLimbs(a);
          return true;
        }
        return false;
      },
      fastForward: () => {
        a.group.position.y = a.baseY;
        a.group.rotation.z = 0;
        this.settleLimbs(a);
      },
    };
  }

  doSfx(name) {
    const fn = audio[name];
    if (typeof fn === 'function') fn();
    else console.warn('cutscene: unknown sfx', name);
    return null;
  }

  doFx({ kind = 'confetti', at = [0, 2, 0] }) {
    const pos = new THREE.Vector3(...at);
    if (kind === 'confetti') this.effects.confetti(pos);
    else if (kind === 'sparkle') this.effects.sparkle(pos);
    else if (kind === 'fireworks') this.effects.fireworks(pos);
    return null;
  }

  doWait(seconds) {
    let t = 0;
    return {
      update: (dt) => (t += dt) >= seconds,
      fastForward: () => {},
    };
  }
}

// ---------- DOM helpers ----------

function setCaption(text, highlight = []) {
  const el = $('cs-caption');
  if (!text) {
    el.classList.add('hidden');
    el.innerHTML = '';
    return;
  }
  const hl = new Set(highlight.map((w) => w.toLowerCase()));
  el.innerHTML = text
    .split(/(\s+)/)
    .map((tok) => {
      const bare = tok.toLowerCase().replace(/[^a-z']/g, '');
      return hl.has(bare) ? `<span class="cs-hl">${tok}</span>` : tok;
    })
    .join('');
  el.classList.remove('hidden');
}

function setWord(word) {
  const el = $('cs-word');
  if (!word) {
    el.classList.add('hidden');
    el.innerHTML = '';
    return [];
  }
  el.innerHTML = '';
  const letters = [];
  for (const ch of word) {
    const span = document.createElement('span');
    span.className = 'cs-letter';
    span.textContent = ch;
    el.appendChild(span);
    letters.push(span);
  }
  el.classList.remove('hidden');
  return letters;
}

export { BOSSES };
