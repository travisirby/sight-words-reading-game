// WebAudio sfx + speech playback.
// Sfx prefer pre-generated ElevenLabs samples (public/audio/, see
// scripts/generate-audio.mjs) and fall back to the synthesized versions
// below for any sound without a file. Speech prefers pre-generated neural
// TTS clips (public/tts/, see scripts/generate-tts.mjs) and falls back to
// speechSynthesis for any text without a clip.

import TTS from './tts-manifest.js';
import AUDIO from './audio-manifest.js';
import { LINES } from './lines.js';

let ctx = null;
let master = null;
let muted = false;
let unlocked = false;
let voice = null;

function ensureCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.5;
    master.connect(ctx.destination);
  }
  return ctx;
}

// Shared audio graph for music.js: the same context + master gain, so the
// global mute covers music too. Null until WebAudio is available.
export function audioGraph() {
  const c = ensureCtx();
  return c ? { ctx: c, master } : null;
}

// Must be called from a user gesture (iOS): resumes the AudioContext and
// primes speechSynthesis with a blank utterance.
export function unlockAudio() {
  if (unlocked) return;
  unlocked = true;
  const c = ensureCtx();
  if (c && c.state === 'suspended') c.resume();
  // Warm the sfx sample cache so the first coin/jump isn't late.
  if (c) {
    for (const file of Object.values(AUDIO.sfx)) {
      loadAudioBuffer(`audio/${file}`).catch(() => {});
    }
  }
  try {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0;
      speechSynthesis.speak(u);
    }
  } catch (e) { /* ignore */ }
}

export function setMuted(m) {
  muted = m;
  if (master) master.gain.value = m ? 0 : 0.5;
  if (m) stopSpeech();
}

export function isMuted() {
  return muted;
}

// ---- tone helpers ----

function tone({ type = 'sine', from = 440, to = null, dur = 0.15, at = 0, vol = 0.5 }) {
  const c = ensureCtx();
  if (!c || muted) return;
  const t0 = c.currentTime + at;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, t0);
  if (to !== null) osc.frequency.exponentialRampToValueAtTime(Math.max(1, to), t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
  osc.connect(g).connect(master);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

let noiseBuf = null;
function getNoise(c) {
  if (!noiseBuf) {
    noiseBuf = c.createBuffer(1, c.sampleRate * 0.5, c.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  return noiseBuf;
}

// ---- samples (pre-generated files, synth fallback) ----

const bufCache = new Map(); // url -> Promise<{buf, offset, dur}>

// Fetch + decode + silence-trim any audio file, cached. Shared with
// music.js (tracks loop the trimmed region for cleaner seams).
export function loadAudioBuffer(url) {
  if (!bufCache.has(url)) {
    const p = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`audio fetch ${r.status}`);
        return r.arrayBuffer();
      })
      .then((ab) => ctx.decodeAudioData(ab))
      .then(trimBounds);
    p.catch(() => bufCache.delete(url)); // allow retry after a failed load
    bufCache.set(url, p);
  }
  return bufCache.get(url);
}

// Play a pre-generated sfx sample by manifest name. Returns false when the
// manifest has no such file, so callers fall through to their synth
// version. rate pitch-shifts (1 = as recorded).
function sample(name, { rate = 1, vol = 1, at = 0 } = {}) {
  const file = AUDIO.sfx[name];
  if (!file) return false;
  const c = ensureCtx();
  if (!c) return false;
  if (muted) return true; // consumed: stay silent, no synth fallback
  loadAudioBuffer(`audio/${file}`).then(
    ({ buf, offset, dur }) => {
      const t0 = c.currentTime + at;
      const src = c.createBufferSource();
      src.buffer = buf;
      src.playbackRate.value = rate;
      const g = c.createGain();
      g.gain.value = vol;
      src.connect(g).connect(master);
      src.start(t0, offset, dur / rate + 0.05);
    },
    () => {
      delete AUDIO.sfx[name]; // dead file: use the synth from now on
    }
  );
  return true;
}

// ---- sfx ----

export function sfxCoin() {
  if (sample('coin')) return;
  tone({ type: 'square', from: 988, dur: 0.07, vol: 0.25 });
  tone({ type: 'square', from: 1319, dur: 0.18, at: 0.07, vol: 0.25 });
}

export function sfxCorrect() {
  if (sample('correct')) return;
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
  notes.forEach((f, i) => {
    tone({ type: 'triangle', from: f, dur: 0.22, at: i * 0.09, vol: 0.4 });
    tone({ type: 'sine', from: f * 2, dur: 0.18, at: i * 0.09, vol: 0.12 });
  });
}

export function sfxWrong() {
  if (sample('wrong')) return;
  tone({ type: 'sine', from: 220, to: 110, dur: 0.3, vol: 0.4 });
}

export function sfxJump() {
  if (sample('jump', { rate: 0.95 + Math.random() * 0.1 })) return;
  const c = ensureCtx();
  if (!c || muted) return;
  const t0 = c.currentTime;
  const src = c.createBufferSource();
  src.buffer = getNoise(c);
  const bp = c.createBiquadFilter();
  bp.type = 'bandpass';
  bp.Q.value = 4;
  bp.frequency.setValueAtTime(400, t0);
  bp.frequency.exponentialRampToValueAtTime(2400, t0 + 0.25);
  const g = c.createGain();
  g.gain.setValueAtTime(0.3, t0);
  g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.28);
  src.connect(bp).connect(g).connect(master);
  src.start(t0);
  src.stop(t0 + 0.3);
}

export function sfxPop() {
  if (sample('pop', { rate: 0.85 + Math.random() * 0.3 })) return;
  tone({ type: 'square', from: 200 + Math.random() * 500, to: 60, dur: 0.12, vol: 0.3 });
}

export function sfxFireworks() {
  for (let i = 0; i < 6; i++) {
    setTimeout(sfxPop, i * 180 + Math.random() * 100);
  }
}

// Rising plink for the map path reveal: pass the tile index for pitch.
export function sfxPlink(i = 0) {
  if (sample('plink', { rate: Math.pow(2, (i % 16) / 12) })) return;
  const f = 587 * Math.pow(2, (i % 16) / 12);
  tone({ type: 'triangle', from: f, dur: 0.12, vol: 0.25 });
  tone({ type: 'sine', from: f * 2, dur: 0.09, vol: 0.08 });
}

export function sfxBonk() {
  if (sample('bonk')) return;
  tone({ type: 'square', from: 150, to: 70, dur: 0.14, vol: 0.35 });
}

export function sfxStomp() {
  if (sample('stomp')) return;
  tone({ type: 'square', from: 320, to: 60, dur: 0.16, vol: 0.35 });
  tone({ type: 'sine', from: 90, dur: 0.1, at: 0.02, vol: 0.3 });
}

export function sfxBoing() {
  if (sample('boing')) return;
  tone({ type: 'sine', from: 180, to: 720, dur: 0.28, vol: 0.35 });
  tone({ type: 'sine', from: 195, to: 750, dur: 0.28, at: 0.03, vol: 0.18 });
}

export function sfxDoorOpen() {
  if (sample('dooropen')) return;
  tone({ type: 'sawtooth', from: 110, to: 330, dur: 0.35, vol: 0.16 });
  tone({ type: 'triangle', from: 523, dur: 0.18, at: 0.28, vol: 0.3 });
  tone({ type: 'triangle', from: 784, dur: 0.24, at: 0.38, vol: 0.3 });
}

export function sfxKeyJingle() {
  if (sample('keyjingle')) return;
  const notes = [1047, 1319, 1568, 2093, 1568, 2093];
  notes.forEach((f, i) => {
    tone({ type: 'triangle', from: f, dur: 0.14, at: i * 0.08, vol: 0.3 });
  });
}

// Silly cartoon roar: a descending sawtooth wobble, more raspberry than scary.
export function sfxRoar() {
  if (sample('roar')) return;
  tone({ type: 'sawtooth', from: 300, to: 90, dur: 0.7, vol: 0.3 });
  tone({ type: 'square', from: 150, to: 60, dur: 0.5, at: 0.15, vol: 0.18 });
  tone({ type: 'sawtooth', from: 500, to: 200, dur: 0.4, at: 0.05, vol: 0.12 });
}

// Boss giggle-taunt (used only in scripted cutscenes now).
export function sfxGiggle() {
  if (sample('giggle')) return;
  [880, 1100, 880, 1320].forEach((f, i) => {
    tone({ type: 'triangle', from: f, to: f * 1.2, dur: 0.09, at: i * 0.09, vol: 0.22 });
  });
}

// Boss reaction to a wrong answer in battle: a goofy "womp-womp" wobble.
// Deliberately NOT a laugh — the giggle sounded like the boss mocking the kid.
export function sfxTaunt() {
  tone({ type: 'triangle', from: 400, to: 300, dur: 0.16, vol: 0.22 });
  tone({ type: 'triangle', from: 300, to: 210, dur: 0.22, at: 0.15, vol: 0.2 });
  tone({ type: 'sine', from: 200, to: 140, dur: 0.2, at: 0.15, vol: 0.12 });
}

// Armor block pops off: crunch + rising chime.
export function sfxArmorPop() {
  if (sample('armorpop')) return;
  tone({ type: 'square', from: 180, to: 60, dur: 0.12, vol: 0.35 });
  tone({ type: 'triangle', from: 784, dur: 0.15, at: 0.08, vol: 0.3 });
  tone({ type: 'triangle', from: 1047, dur: 0.2, at: 0.16, vol: 0.3 });
}

// Soft UI tap for buttons, quiet enough to sit under the spoken label.
export function sfxClick() {
  if (sample('click', { vol: 0.5 })) return;
  tone({ type: 'triangle', from: 660, to: 880, dur: 0.06, vol: 0.12 });
}

// Landing thud after a real fall.
export function sfxLand() {
  if (sample('land')) return;
  tone({ type: 'sine', from: 140, to: 70, dur: 0.12, vol: 0.25 });
}

// Gem reward: brighter, glassier cousin of the coin.
export function sfxGem() {
  if (sample('gem')) return;
  tone({ type: 'sine', from: 1319, dur: 0.1, vol: 0.25 });
  tone({ type: 'sine', from: 1760, dur: 0.12, at: 0.08, vol: 0.25 });
  tone({ type: 'sine', from: 2637, dur: 0.22, at: 0.16, vol: 0.2 });
}

// "Ready... go!" rising whistle at the start of a run.
export function sfxLevelStart() {
  if (sample('levelstart')) return;
  tone({ type: 'square', from: 392, dur: 0.12, vol: 0.2 });
  tone({ type: 'square', from: 523, dur: 0.12, at: 0.16, vol: 0.2 });
  tone({ type: 'square', from: 659, to: 784, dur: 0.3, at: 0.32, vol: 0.25 });
}

export function sfxPause() {
  if (sample('pause')) return;
  tone({ type: 'triangle', from: 587, to: 392, dur: 0.16, vol: 0.25 });
}

export function sfxResume() {
  if (sample('resume')) return;
  tone({ type: 'triangle', from: 392, to: 587, dur: 0.16, vol: 0.25 });
}

// Star ding on the summary screen; i = 0..2 rises with each star.
export function sfxStar(i = 0) {
  if (sample('star', { rate: [1, 1.26, 1.68][i % 3] })) return;
  const f = [784, 988, 1319][i % 3];
  tone({ type: 'triangle', from: f, dur: 0.3, vol: 0.35 });
  tone({ type: 'sine', from: f * 2, dur: 0.24, at: 0.03, vol: 0.15 });
}

export function sfxStarGrab() {
  if (sample('stargrab')) return;
  tone({ type: 'sine', from: 600, to: 1800, dur: 0.3, vol: 0.35 });
  tone({ type: 'triangle', from: 1200, dur: 0.2, at: 0.14, vol: 0.25 });
}

// ---- speech (pre-generated clips, speechSynthesis fallback) ----

const CLIP_GAP = 0.12; // pause between concatenated clips, seconds

// The answer word inside a prompt gets star treatment: louder, with a
// breath around it, and the music fully ducked while it plays (wr-word
// events, see music.js). Kept at normal speed — playbackRate slowdown
// lowers the pitch and sounds unnatural.
const WORD_VOL = 1.6;
const WORD_GAP = 0.2; // extra pause before/after the word
const ECHO_GAP = 0.35; // pause before the word is repeated

const clipCache = new Map(); // file -> Promise<AudioBuffer>
let speakToken = 0; // invalidates in-flight speaks when a new one starts
let speakSources = []; // currently playing clip sources
let pendingFin = null; // onend of the speech being interrupted
let inInterrupt = false; // an interrupted speech's onend is running right now

const norm = (t) => t.trim().toLowerCase().replace(/\s+/g, ' ');

// Tells the narrator fairy (fairy.js) when the voice starts/stops talking.
function notifySpeaking(speaking, text = '') {
  try {
    window.dispatchEvent(new CustomEvent('wr-speech', { detail: { speaking, text } }));
  } catch (e) { /* ignore */ }
}

// Tells music.js when the answer word itself is playing, so the music can
// drop to silence for just that window.
let wordTimers = [];

function notifyWord(active) {
  try {
    window.dispatchEvent(new CustomEvent('wr-word', { detail: { active } }));
  } catch (e) { /* ignore */ }
}

function scheduleWordDuck(c, start, wallDur) {
  const now = c.currentTime;
  wordTimers.push(
    setTimeout(() => notifyWord(true), Math.max(0, (start - now - 0.08) * 1000)),
    setTimeout(() => notifyWord(false), (start - now + wallDur + 0.1) * 1000)
  );
}

function clearWordDuck() {
  for (const t of wordTimers) clearTimeout(t);
  wordTimers = [];
  notifyWord(false);
}

// Resolve text to a clip sequence: an exact phrase, or a known
// "prefix: word [suffix]" template assembled from segment clips.
// Each entry is { file, word } — word marks the answer-word clip, which
// gets the emphasis treatment in speak(). Returns null when the text has
// no clips (caller falls back to synthesis).
function clipsFor(text) {
  const n = norm(text);
  if (TTS.phrases[n]) return [{ file: TTS.phrases[n], word: false }];
  const ci = n.indexOf(': ');
  if (ci === -1) return TTS.words[n] ? [{ file: TTS.words[n], word: true }] : null;
  const prefix = TTS.phrases[n.slice(0, ci + 1)];
  if (!prefix) return null;
  let rest = n.slice(ci + 2);
  let suffix = null;
  if (rest.endsWith(' try again!')) {
    suffix = TTS.phrases['try again!'];
    rest = rest.slice(0, -' try again!'.length);
  }
  const word = TTS.words[rest.replace(/[.!?]+$/, '').trim()];
  if (!word) return null;
  const seq = [{ file: prefix, word: false }, { file: word, word: true }];
  if (suffix) seq.push({ file: suffix, word: false });
  return seq;
}

// TTS renders pad clips with silence on each end;
// find the actual speech bounds so concatenated sentences don't drag.
function trimBounds(buf) {
  const d = buf.getChannelData(0);
  const thresh = 0.004;
  let a = 0;
  let b = d.length - 1;
  while (a < b && Math.abs(d[a]) < thresh) a++;
  while (b > a && Math.abs(d[b]) < thresh) b--;
  const pad = Math.round(buf.sampleRate * 0.04); // keep a soft edge
  a = Math.max(0, a - pad);
  b = Math.min(d.length - 1, b + pad);
  return { buf, offset: a / buf.sampleRate, dur: (b - a) / buf.sampleRate };
}

function loadClip(file) {
  if (!clipCache.has(file)) {
    const p = fetch(`tts/${file}`)
      .then((r) => {
        if (!r.ok) throw new Error(`tts fetch ${r.status}`);
        return r.arrayBuffer();
      })
      .then((ab) => ctx.decodeAudioData(ab))
      .then(trimBounds);
    p.catch(() => clipCache.delete(file)); // allow retry after a failed load
    clipCache.set(file, p);
  }
  return clipCache.get(file);
}

function stopSpeech() {
  speakToken++;
  for (const s of speakSources) {
    try { s.onended = null; s.stop(); } catch (e) { /* already stopped */ }
  }
  speakSources = [];
  clearWordDuck();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (pendingFin) {
    // The interrupted speech still reports done — but any speak() its onend
    // chains must lose to the speech doing the interrupting, or both would
    // capture the same token and play on top of each other.
    inInterrupt = true;
    try { pendingFin(); } finally { inInterrupt = false; }
  }
}

function speakSynth(text, rate, fin) {
  if (!('speechSynthesis' in window)) {
    setTimeout(fin, 100);
    return;
  }
  try {
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = 'en-US';
    u.rate = rate;
    u.pitch = 1.05;
    u.onend = fin;
    u.onerror = fin;
    // Safety net: iOS occasionally drops onend.
    setTimeout(fin, 1000 + text.length * 130);
    speechSynthesis.speak(u);
  } catch (e) {
    fin();
  }
}

function pickVoice() {
  if (!('speechSynthesis' in window)) return;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return;
  voice =
    voices.find((v) => v.lang === 'en-US' && /samantha|alex|google us/i.test(v.name)) ||
    voices.find((v) => v.lang === 'en-US') ||
    voices.find((v) => v.lang && v.lang.startsWith('en')) ||
    null;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.addEventListener('voiceschanged', pickVoice); // iOS loads late
}

// ---- narrator variety ----

const lastLine = new Map(); // category -> line spoken last time

// Speak a random line from the given bank, never repeating the category's
// previous pick back to back. Returns the chosen line.
export function speakVariant(category, lines, opts = {}) {
  let pool = lines;
  if (pool.length > 1) {
    const last = lastLine.get(category);
    if (last) pool = pool.filter((l) => l !== last);
  }
  const line = pool[(Math.random() * pool.length) | 0];
  lastLine.set(category, line);
  speak(line, opts);
  return line;
}

// Same, for the named banks in lines.js.
export function speakLine(category, opts = {}) {
  return speakVariant(category, LINES[category], opts);
}

// rate only applies to the speechSynthesis fallback; clips are
// pre-rendered at a kid-friendly pace. echoWord repeats the answer-word
// clip once more after a beat ("Find the word: sun... sun") — clip
// playback only, the synth fallback ignores it.
export function speak(text, { rate = 1.0, onend = null, echoWord = false } = {}) {
  if (inInterrupt) return; // chained from an interrupted onend — superseded
  stopSpeech();
  if (muted) {
    if (onend) setTimeout(onend, 100);
    return;
  }
  let done = false;
  const fin = () => {
    if (done) return;
    done = true;
    if (pendingFin === fin) pendingFin = null;
    notifySpeaking(false);
    if (onend) onend();
  };
  pendingFin = fin;
  notifySpeaking(true, text);

  const clips = clipsFor(text);
  const c = clips && ensureCtx();
  if (!c) {
    speakSynth(text, rate, fin);
    return;
  }
  const token = speakToken;
  Promise.all(clips.map((cl) => loadClip(cl.file))).then(
    (bufs) => {
      if (token !== speakToken) return; // superseded by a newer speak
      let t = c.currentTime + 0.03;
      speakSources = [];
      bufs.forEach(({ buf, offset, dur }, i) => {
        const plays = clips[i].word && echoWord ? 2 : 1;
        for (let p = 0; p < plays; p++) {
          const src = c.createBufferSource();
          src.buffer = buf;
          if (clips[i].word) {
            // The answer word: louder, a breath around it, and a wr-word
            // window so the music drops out underneath it.
            const g = c.createGain();
            g.gain.value = WORD_VOL;
            src.connect(g).connect(master);
            t += p === 0 ? WORD_GAP : ECHO_GAP;
            scheduleWordDuck(c, t, dur);
            src.start(t, offset, dur);
            t += dur + WORD_GAP;
          } else {
            src.connect(master);
            src.start(t, offset, dur);
            t += dur;
          }
          t += CLIP_GAP;
          speakSources.push(src);
        }
      });
      speakSources[speakSources.length - 1].onended = fin;
      setTimeout(fin, (t - c.currentTime) * 1000 + 500); // safety net
    },
    () => {
      // Clip missing or offline: fall back to the system voice.
      if (token === speakToken) speakSynth(text, rate, fin);
    }
  );
}
