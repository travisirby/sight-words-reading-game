// Background music on the same AudioContext as audio.js sfx. Each scene
// names a looping track; the preferred source is a pre-generated
// ElevenLabs file (public/audio/, see scripts/generate-audio.mjs), and any
// track without a file falls back to the tiny chiptune step sequencer
// below (square-wave melody, triangle bass, noise hi-hat) so the game
// still has music offline / before generation.
// Music routes through the shared master gain, so the global sound
// toggle still silences everything; setMusicEnabled() is the separate
// "music only" toggle. While the TTS voice talks (wr-speech events from
// audio.js) the music ducks out of the way.

import { audioGraph, loadAudioBuffer } from './audio.js';
import AUDIO from './audio-manifest.js';

// ---- note helpers ----

const NOTE_IDX = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };

// 'C4' / 'F#3' / 'Bb2' -> Hz (A4 = 440)
function hz(name) {
  const m = /^([a-g])([#b]?)(\d)$/.exec(name.toLowerCase());
  if (!m) return 440;
  let semi = NOTE_IDX[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  const midi = 12 * (Number(m[3]) + 1) + semi;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// ---- tracks ----
// Each track: bpm + parallel bars of 16 sixteenth-note steps.
// mel/bass entries: note name, null (rest); hat: 1 = tick.
// A '-' entry extends the previous note one more step (legato-ish).

const HAT_OFF = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]; // downbeats
const HAT_SWING = [1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0];

const TRACKS = {
  // Title: warm and welcoming, mid-tempo C major.
  title: {
    bpm: 104,
    melVol: 0.10, bassVol: 0.14, hatVol: 0.02,
    mel: [
      ['C5', '-', 'E5', '-', 'G5', '-', 'E5', '-', 'A5', '-', 'G5', '-', 'E5', '-', 'D5', '-'],
      ['F5', '-', 'E5', '-', 'D5', '-', 'C5', '-', 'D5', '-', '-', '-', null, null, null, null],
      ['C5', '-', 'E5', '-', 'G5', '-', 'E5', '-', 'A5', '-', 'B5', '-', 'C6', '-', 'G5', '-'],
      ['F5', '-', 'E5', '-', 'D5', '-', 'E5', '-', 'C5', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['C3', null, null, null, 'G3', null, null, null, 'A3', null, null, null, 'E3', null, null, null],
      ['F3', null, null, null, 'C3', null, null, null, 'G3', null, null, null, 'G2', null, null, null],
      ['C3', null, null, null, 'G3', null, null, null, 'A3', null, null, null, 'E3', null, null, null],
      ['F3', null, null, null, 'G3', null, null, null, 'C3', null, null, null, 'C3', null, null, null],
    ],
    hat: [HAT_OFF, HAT_OFF, HAT_OFF, HAT_OFF],
  },

  // Overworld map: bouncy, adventurous, F major.
  map: {
    bpm: 116,
    melVol: 0.09, bassVol: 0.14, hatVol: 0.025,
    mel: [
      ['F4', null, 'A4', null, 'C5', '-', 'A4', null, 'D5', '-', 'C5', '-', 'A4', '-', 'F4', null],
      ['G4', null, 'Bb4', null, 'D5', '-', 'Bb4', null, 'C5', '-', '-', '-', null, null, null, null],
      ['F4', null, 'A4', null, 'C5', '-', 'A4', null, 'D5', '-', 'E5', '-', 'F5', '-', 'C5', null],
      ['Bb4', null, 'A4', null, 'G4', '-', 'A4', null, 'F4', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['F2', null, 'F3', null, 'F2', null, 'F3', null, 'Bb2', null, 'Bb3', null, 'Bb2', null, 'Bb3', null],
      ['C3', null, 'C4', null, 'C3', null, 'C4', null, 'F2', null, 'F3', null, 'F2', null, 'F3', null],
      ['F2', null, 'F3', null, 'F2', null, 'F3', null, 'Bb2', null, 'Bb3', null, 'Bb2', null, 'Bb3', null],
      ['C3', null, 'C4', null, 'C3', null, 'C4', null, 'F2', null, 'F3', null, 'F2', null, null, null],
    ],
    hat: [HAT_SWING, HAT_SWING, HAT_SWING, HAT_SWING],
  },

  // Level run: energetic pentatonic runner groove.
  level: {
    bpm: 126,
    melVol: 0.085, bassVol: 0.15, hatVol: 0.03,
    mel: [
      ['C5', null, 'D5', null, 'E5', '-', 'G5', null, 'E5', '-', 'D5', null, 'C5', '-', null, null],
      ['A4', null, 'C5', null, 'D5', '-', 'E5', null, 'D5', '-', 'C5', null, 'A4', '-', null, null],
      ['C5', null, 'D5', null, 'E5', '-', 'G5', null, 'A5', '-', 'G5', null, 'E5', '-', null, null],
      ['G5', '-', 'E5', '-', 'D5', '-', 'C5', '-', 'D5', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['C3', null, 'C3', null, 'G2', null, 'C3', null, 'A2', null, 'A2', null, 'E2', null, 'A2', null],
      ['F2', null, 'F2', null, 'C3', null, 'F2', null, 'G2', null, 'G2', null, 'G2', null, 'B2', null],
      ['C3', null, 'C3', null, 'G2', null, 'C3', null, 'A2', null, 'A2', null, 'E2', null, 'A2', null],
      ['F2', null, 'F2', null, 'G2', null, 'G2', null, 'C3', null, 'G2', null, 'C3', null, null, null],
    ],
    hat: [HAT_SWING, HAT_SWING, HAT_SWING, HAT_SWING],
  },

  // Secret bonus level: fast, sparkly star-party romp — high and twinkly.
  secret: {
    bpm: 144,
    melVol: 0.09, bassVol: 0.14, hatVol: 0.035,
    mel: [
      ['C5', null, 'E5', null, 'G5', null, 'C6', '-', 'B5', null, 'G5', null, 'A5', '-', null, null],
      ['F5', null, 'A5', null, 'C6', '-', 'A5', null, 'G5', '-', 'E5', null, 'D5', '-', null, null],
      ['C5', null, 'E5', null, 'G5', null, 'C6', '-', 'D6', null, 'C6', null, 'B5', '-', null, null],
      ['A5', '-', 'G5', '-', 'F5', '-', 'E5', '-', 'D5', '-', 'C5', '-', '-', '-', null, null],
    ],
    bass: [
      ['C3', null, 'G2', null, 'C3', null, 'G2', null, 'A2', null, 'E2', null, 'A2', null, 'E2', null],
      ['F2', null, 'C3', null, 'F2', null, 'C3', null, 'G2', null, 'D3', null, 'G2', null, 'B2', null],
      ['C3', null, 'G2', null, 'C3', null, 'G2', null, 'F2', null, 'C3', null, 'G2', null, 'G2', null],
      ['F2', null, 'F2', null, 'C3', null, 'C3', null, 'G2', null, 'G2', null, 'C3', null, null, null],
    ],
    hat: [HAT_SWING, HAT_SWING, HAT_SWING, HAT_SWING],
  },

  // Castle boss: minor-key and mischievous, but silly rather than scary.
  boss: {
    bpm: 138,
    melVol: 0.09, bassVol: 0.16, hatVol: 0.03,
    mel: [
      ['A4', null, 'A4', null, 'C5', '-', 'B4', null, 'A4', null, 'E5', '-', '-', '-', null, null],
      ['F5', null, 'E5', null, 'D5', '-', 'C5', null, 'B4', '-', '-', '-', null, null, null, null],
      ['A4', null, 'A4', null, 'C5', '-', 'B4', null, 'A4', null, 'A5', '-', '-', '-', null, null],
      ['G5', null, 'F5', null, 'E5', '-', 'D5', null, 'A4', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['A2', null, 'A2', 'A2', null, 'A2', null, null, 'A2', null, 'A2', 'A2', null, 'G2', null, null],
      ['F2', null, 'F2', 'F2', null, 'F2', null, null, 'E2', null, 'E2', 'E2', null, 'E2', null, null],
      ['A2', null, 'A2', 'A2', null, 'A2', null, null, 'A2', null, 'A2', 'A2', null, 'G2', null, null],
      ['D2', null, 'D2', 'D2', null, 'F2', null, null, 'E2', null, 'E2', null, 'A2', null, null, null],
    ],
    hat: [HAT_SWING, HAT_SWING, HAT_SWING, HAT_SWING],
  },

  // Final world: fast, driving and intense — the last stretch of the whole
  // adventure. A-minor, urgent pumping sixteenth-note bass under a
  // heroic-but-anxious melody. Faster and harder-charging than the boss tune.
  finale: {
    bpm: 154,
    melVol: 0.095, bassVol: 0.17, hatVol: 0.04,
    mel: [
      ['A4', '-', 'C5', '-', 'E5', '-', 'A5', '-', 'G5', '-', 'E5', '-', 'F5', '-', 'E5', '-'],
      ['D5', '-', 'F5', '-', 'A5', '-', 'G5', '-', 'F5', '-', 'E5', '-', 'D5', '-', 'C5', '-'],
      ['A4', '-', 'C5', '-', 'E5', '-', 'A5', '-', 'B5', '-', 'C6', '-', 'B5', '-', 'A5', '-'],
      ['G5', '-', 'F5', '-', 'E5', '-', 'D5', '-', 'E5', '-', '-', '-', 'A4', '-', '-', '-'],
    ],
    bass: [
      ['A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'F2', 'F2', 'F2', 'F2', 'F2', 'F2', 'F2', 'F2'],
      ['D2', 'D2', 'D2', 'D2', 'D2', 'D2', 'D2', 'D2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2', 'E2'],
      ['A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'F2', 'F2', 'F2', 'F2', 'C3', 'C3', 'C3', 'C3'],
      ['G2', 'G2', 'G2', 'G2', 'E2', 'E2', 'E2', 'E2', 'A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'A2', 'A2'],
    ],
    hat: [HAT_SWING, HAT_SWING, HAT_SWING, HAT_SWING],
  },

  // ---- per-world level themes (worlds 0-4; world 5 uses `finale`) ----

  // Pasta Plains: sunny, bouncy G-major stroll (the cheeriest world).
  pasta: {
    bpm: 120,
    melVol: 0.09, bassVol: 0.14, hatVol: 0.03,
    mel: [
      ['G4', null, 'B4', null, 'D5', '-', 'B4', null, 'G4', null, 'D5', '-', 'B4', '-', null, null],
      ['C5', null, 'E5', null, 'D5', '-', 'B4', null, 'A4', '-', 'G4', null, 'A4', '-', null, null],
      ['G4', null, 'B4', null, 'D5', '-', 'G5', null, 'F#5', '-', 'E5', null, 'D5', '-', null, null],
      ['C5', '-', 'B4', '-', 'A4', '-', 'D5', '-', 'G4', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['G2', null, 'D3', null, 'G2', null, 'D3', null, 'C3', null, 'G3', null, 'C3', null, 'G3', null],
      ['C3', null, 'G3', null, 'D3', null, 'A3', null, 'G2', null, 'D3', null, 'D3', null, null, null],
      ['G2', null, 'D3', null, 'G2', null, 'D3', null, 'C3', null, 'G3', null, 'C3', null, 'G3', null],
      ['A2', null, 'E3', null, 'D3', null, 'A3', null, 'G2', null, 'D3', null, 'G2', null, null, null],
    ],
    hat: [HAT_SWING, HAT_SWING, HAT_SWING, HAT_SWING],
  },

  // Waffle Desert: warm, syrupy, lazy F-major shuffle.
  waffle: {
    bpm: 108,
    melVol: 0.09, bassVol: 0.14, hatVol: 0.025,
    mel: [
      ['F4', '-', 'A4', null, 'C5', '-', 'A4', null, 'D5', '-', 'C5', '-', 'A4', '-', null, null],
      ['Bb4', '-', 'A4', null, 'G4', '-', 'F4', null, 'G4', '-', '-', '-', null, null, null, null],
      ['F4', '-', 'A4', null, 'C5', '-', 'F5', null, 'E5', '-', 'C5', '-', 'A4', '-', null, null],
      ['D5', '-', 'C5', '-', 'Bb4', '-', 'A4', '-', 'F4', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['F2', null, null, 'C3', null, null, 'F2', null, 'Bb2', null, null, 'F3', null, null, null, null],
      ['C3', null, null, 'G3', null, null, 'C3', null, 'F2', null, null, 'C3', null, null, null, null],
      ['F2', null, null, 'C3', null, null, 'F2', null, 'Bb2', null, null, 'F3', null, null, null, null],
      ['C3', null, null, 'G3', null, null, 'C3', null, 'F2', null, null, null, null, null, null, null],
    ],
    hat: [HAT_OFF, HAT_OFF, HAT_OFF, HAT_OFF],
  },

  // Snowcones Islands: light, twinkly, cool D-major (glockenspiel feel).
  snow: {
    bpm: 112,
    melVol: 0.085, bassVol: 0.12, hatVol: 0.025,
    mel: [
      ['D5', null, 'F#5', null, 'A5', '-', 'F#5', null, 'E5', '-', 'D5', null, 'E5', '-', null, null],
      ['B4', null, 'D5', null, 'F#5', '-', 'E5', null, 'D5', '-', '-', '-', null, null, null, null],
      ['D5', null, 'A5', null, 'F#5', '-', 'A5', null, 'B5', '-', 'A5', null, 'F#5', '-', null, null],
      ['G5', '-', 'F#5', '-', 'E5', '-', 'D5', '-', 'A4', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['D3', null, null, null, 'A2', null, null, null, 'B2', null, null, null, 'F#2', null, null, null],
      ['G2', null, null, null, 'D3', null, null, null, 'A2', null, null, null, 'A2', null, null, null],
      ['D3', null, null, null, 'A2', null, null, null, 'B2', null, null, null, 'F#2', null, null, null],
      ['G2', null, null, null, 'A2', null, null, null, 'D3', null, null, null, null, null, null, null],
    ],
    hat: [HAT_OFF, HAT_OFF, HAT_OFF, HAT_OFF],
  },

  // Purple Cabbage Swamp: squishy, funky A-Dorian groove.
  swamp: {
    bpm: 100,
    melVol: 0.085, bassVol: 0.16, hatVol: 0.03,
    mel: [
      ['A4', null, 'C5', null, 'D5', '-', 'C5', null, 'E5', '-', 'D5', null, 'C5', '-', null, null],
      ['A4', null, 'G4', null, 'A4', '-', null, null, 'D5', '-', 'C5', null, 'A4', '-', null, null],
      ['E5', null, 'D5', null, 'C5', '-', 'A4', null, 'B4', '-', 'C5', null, 'D5', '-', null, null],
      ['C5', '-', 'B4', '-', 'A4', '-', 'G4', '-', 'A4', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['A2', null, 'A2', 'E3', null, 'A2', null, null, 'D3', null, 'D3', 'A3', null, 'D3', null, null],
      ['A2', null, 'A2', 'E3', null, 'A2', null, null, 'G2', null, 'G2', 'D3', null, 'G2', null, null],
      ['A2', null, 'A2', 'E3', null, 'A2', null, null, 'D3', null, 'D3', 'A3', null, 'D3', null, null],
      ['E2', null, 'E2', 'B2', null, 'E2', null, null, 'A2', null, 'A2', null, null, null, null, null],
    ],
    hat: [HAT_SWING, HAT_SWING, HAT_SWING, HAT_SWING],
  },

  // Crystal Caves: mysterious, sparkling E-minor with room to echo.
  caves: {
    bpm: 96,
    melVol: 0.09, bassVol: 0.13, hatVol: 0.02,
    mel: [
      ['E5', '-', null, 'G5', '-', null, 'B5', '-', '-', '-', 'A5', '-', 'G5', '-', null, null],
      ['F#5', '-', null, 'A5', '-', null, 'E5', '-', '-', '-', null, null, null, null, null, null],
      ['E5', '-', null, 'B5', '-', null, 'C6', '-', '-', '-', 'B5', '-', 'A5', '-', null, null],
      ['G5', '-', 'F#5', '-', 'E5', '-', 'D5', '-', 'E5', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['E2', null, null, null, 'B2', null, null, null, 'C3', null, null, null, 'G2', null, null, null],
      ['A2', null, null, null, 'E3', null, null, null, 'B2', null, null, null, 'B2', null, null, null],
      ['E2', null, null, null, 'B2', null, null, null, 'C3', null, null, null, 'G2', null, null, null],
      ['A2', null, null, null, 'B2', null, null, null, 'E2', null, null, null, null, null, null, null],
    ],
    hat: [HAT_OFF, HAT_OFF, HAT_OFF, HAT_OFF],
  },

  // My house / shop: cozy and slow.
  house: {
    bpm: 88,
    melVol: 0.09, bassVol: 0.13, hatVol: 0,
    mel: [
      ['G4', '-', 'B4', '-', 'D5', '-', '-', '-', 'C5', '-', 'B4', '-', 'A4', '-', '-', '-'],
      ['B4', '-', 'A4', '-', 'G4', '-', '-', '-', 'A4', '-', '-', '-', null, null, null, null],
      ['G4', '-', 'B4', '-', 'D5', '-', '-', '-', 'E5', '-', 'D5', '-', 'B4', '-', '-', '-'],
      ['C5', '-', 'B4', '-', 'A4', '-', '-', '-', 'G4', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['G2', null, null, null, 'D3', null, null, null, 'E3', null, null, null, 'D3', null, null, null],
      ['C3', null, null, null, 'D3', null, null, null, 'G2', null, null, null, null, null, null, null],
      ['G2', null, null, null, 'D3', null, null, null, 'C3', null, null, null, 'D3', null, null, null],
      ['C3', null, null, null, 'D3', null, null, null, 'G2', null, null, null, null, null, null, null],
    ],
    hat: [HAT_OFF, HAT_OFF, HAT_OFF, HAT_OFF],
  },

  // Level-complete summary: an easy happy loop under the stars/fireworks.
  victory: {
    bpm: 112,
    melVol: 0.09, bassVol: 0.13, hatVol: 0.02,
    mel: [
      ['C5', '-', 'C5', null, 'G5', '-', '-', '-', 'E5', '-', 'F5', '-', 'G5', '-', '-', '-'],
      ['A5', '-', 'G5', '-', 'F5', '-', 'E5', '-', 'C5', '-', '-', '-', null, null, null, null],
    ],
    bass: [
      ['C3', null, null, null, 'C3', null, 'G2', null, 'A2', null, null, null, 'F2', null, 'G2', null],
      ['F2', null, null, null, 'G2', null, null, null, 'C3', null, null, null, 'C3', null, null, null],
    ],
    hat: [HAT_OFF, HAT_OFF],
  },
};

// ---- sequencer ----

const LOOKAHEAD = 0.18; // seconds scheduled in advance
const TICK_MS = 70;
const BASE_VOL = 0.6; // music bus level under the 0.5 master

let bus = null; // music gain node under audio.js's master
let enabled = true; // the settings "Music" toggle
let ducked = false; // TTS voice talking
let wordDucked = false; // TTS saying the answer word: music fully out
let dimmed = false; // pause screen
let trackName = null;
let track = null;
let step = 0;
let bar = 0;
let nextTime = 0;
let timer = null;
let noiseBuf = null;

function busGainTarget() {
  if (!enabled || wordDucked) return 0;
  return BASE_VOL * (ducked ? 0.22 : 1) * (dimmed ? 0.35 : 1);
}

function applyBusGain() {
  if (!bus) return;
  const g = audioGraph();
  if (!g) return;
  // Word ducking snaps fast so silence lands right on the word.
  bus.gain.setTargetAtTime(busGainTarget(), g.ctx.currentTime, wordDucked ? 0.04 : 0.15);
}

function ensureBus() {
  const g = audioGraph();
  if (!g) return null;
  if (!bus) {
    bus = g.ctx.createGain();
    bus.gain.value = busGainTarget();
    bus.connect(g.master);
  }
  return g.ctx;
}

function getNoise(c) {
  if (!noiseBuf) {
    noiseBuf = c.createBuffer(1, (c.sampleRate * 0.1) | 0, c.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  return noiseBuf;
}

function playNote(c, type, freq, t, dur, vol) {
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
  g.gain.setValueAtTime(vol, t + dur * 0.7);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(bus);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function playHat(c, t, vol) {
  const src = c.createBufferSource();
  src.buffer = getNoise(c);
  const hp = c.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 6000;
  const g = c.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.04);
  src.connect(hp).connect(g).connect(bus);
  src.start(t);
  src.stop(t + 0.06);
}

// How many steps a note at (row, i) sustains, following '-' extensions.
function noteLen(row, i) {
  let n = 1;
  while (i + n < row.length && row[i + n] === '-') n++;
  return n;
}

function scheduleStep(c, t, stepDur) {
  const mel = track.mel[bar % track.mel.length];
  const bass = track.bass[bar % track.bass.length];
  const hat = track.hat[bar % track.hat.length];

  const m = mel[step];
  if (m && m !== '-') {
    playNote(c, 'square', hz(m), t, stepDur * noteLen(mel, step) * 0.9, track.melVol);
  }
  const b = bass[step];
  if (b && b !== '-') {
    playNote(c, 'triangle', hz(b), t, stepDur * noteLen(bass, step) * 0.85, track.bassVol);
  }
  if (track.hatVol && hat[step]) playHat(c, t, track.hatVol);

  step++;
  if (step >= 16) {
    step = 0;
    bar = (bar + 1) % track.mel.length;
  }
}

function tick() {
  const c = ensureBus();
  // Before the iOS unlock gesture the context is suspended and currentTime
  // frozen — just idle until it runs.
  if (!c || c.state !== 'running' || !track) return;
  const stepDur = 60 / track.bpm / 4;
  if (nextTime < c.currentTime) nextTime = c.currentTime + 0.05;
  while (nextTime < c.currentTime + LOOKAHEAD) {
    scheduleStep(c, nextTime, stepDur);
    nextTime += stepDur;
  }
}

// ---- pre-generated sample tracks ----

let sampleSrc = null; // looping AudioBufferSourceNode for the current track
let sampleGain = null; // its fade in/out gain
let loadToken = 0; // invalidates in-flight loads when the track changes

function stopSample() {
  loadToken++;
  if (!sampleSrc) return;
  const src = sampleSrc;
  const g = sampleGain;
  sampleSrc = null;
  sampleGain = null;
  const graph = audioGraph();
  if (!graph) return;
  const t = graph.ctx.currentTime;
  g.gain.setTargetAtTime(0.0001, t, 0.1);
  try {
    src.stop(t + 0.5);
  } catch (e) { /* already stopped */ }
}

// Loop the silence-trimmed region of the file (loopStart/loopEnd) so the
// generated track's lead-in/tail padding doesn't gap the seam.
function startSampleLoop({ buf, offset, dur }) {
  const c = ensureBus();
  if (!c) return;
  const t = c.currentTime;
  sampleGain = c.createGain();
  sampleGain.gain.setValueAtTime(0.0001, t);
  sampleGain.gain.setTargetAtTime(1, t, 0.2); // gentle fade-in
  sampleSrc = c.createBufferSource();
  sampleSrc.buffer = buf;
  sampleSrc.loop = true;
  sampleSrc.loopStart = offset;
  sampleSrc.loopEnd = offset + dur;
  sampleSrc.connect(sampleGain).connect(bus);
  sampleSrc.start(t, offset);
}

function startSynth(name) {
  track = TRACKS[name];
  step = 0;
  bar = 0;
  nextTime = 0;
  if (track && !timer) timer = setInterval(tick, TICK_MS);
}

// ---- public api ----

// Switch the looping track: play('map'), play('boss')... play(null) stops.
// Re-requesting the current track is a no-op so scene re-entries don't
// restart the tune.
export function play(name) {
  if (name === trackName) return;
  trackName = name;
  stopSample();
  track = null;
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  if (!name) return;

  const file = AUDIO.music[name];
  if (file && ensureBus()) {
    const token = loadToken;
    loadAudioBuffer(`audio/${file}`).then(
      (trimmed) => {
        if (token !== loadToken || trackName !== name) return; // superseded
        startSampleLoop(trimmed);
      },
      () => {
        // Missing/offline: chiptune fallback (and stop retrying this file).
        delete AUDIO.music[name];
        if (token === loadToken && trackName === name) startSynth(name);
      }
    );
  } else {
    startSynth(name);
  }
}

// Warm the cache for a track the kid is about to hear (e.g. the world whose
// level card is open) so play() starts instantly instead of after a cold
// fetch — the fix for the per-world tracks feeling slow on poor connections.
// No-op when the track has no sample file (it'll use the synth fallback).
export function prefetch(name) {
  const file = AUDIO.music[name];
  if (file) loadAudioBuffer(`audio/${file}`).catch(() => {});
}

export function setMusicEnabled(on) {
  enabled = on;
  applyBusGain();
}

// Pause screen: keep the tune going but pull it way back.
export function setDimmed(on) {
  dimmed = on;
  applyBusGain();
}

// Duck under the TTS voice so words stay easy to hear.
if (typeof window !== 'undefined') {
  window.addEventListener('wr-speech', (e) => {
    ducked = !!(e.detail && e.detail.speaking);
    if (!ducked) wordDucked = false; // speech over: never stay stuck at zero
    applyBusGain();
  });
  // The answer word itself: music drops to silence for just that window.
  window.addEventListener('wr-word', (e) => {
    wordDucked = !!(e.detail && e.detail.active);
    applyBusGain();
  });
}
