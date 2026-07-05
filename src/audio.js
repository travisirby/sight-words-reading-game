// WebAudio sfx (all synthesized) + speechSynthesis wrapper.

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

// Must be called from a user gesture (iOS): resumes the AudioContext and
// primes speechSynthesis with a blank utterance.
export function unlockAudio() {
  if (unlocked) return;
  unlocked = true;
  const c = ensureCtx();
  if (c && c.state === 'suspended') c.resume();
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
  if (m && 'speechSynthesis' in window) speechSynthesis.cancel();
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

// ---- sfx ----

export function sfxCoin() {
  tone({ type: 'square', from: 988, dur: 0.07, vol: 0.25 });
  tone({ type: 'square', from: 1319, dur: 0.18, at: 0.07, vol: 0.25 });
}

export function sfxCorrect() {
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
  notes.forEach((f, i) => {
    tone({ type: 'triangle', from: f, dur: 0.22, at: i * 0.09, vol: 0.4 });
    tone({ type: 'sine', from: f * 2, dur: 0.18, at: i * 0.09, vol: 0.12 });
  });
}

export function sfxWrong() {
  tone({ type: 'sine', from: 220, to: 110, dur: 0.3, vol: 0.4 });
}

export function sfxJump() {
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
  tone({ type: 'square', from: 200 + Math.random() * 500, to: 60, dur: 0.12, vol: 0.3 });
}

export function sfxFireworks() {
  for (let i = 0; i < 6; i++) {
    setTimeout(sfxPop, i * 180 + Math.random() * 100);
  }
}

// Rising plink for the map path reveal: pass the tile index for pitch.
export function sfxPlink(i = 0) {
  const f = 587 * Math.pow(2, (i % 16) / 12);
  tone({ type: 'triangle', from: f, dur: 0.12, vol: 0.25 });
  tone({ type: 'sine', from: f * 2, dur: 0.09, vol: 0.08 });
}

export function sfxBonk() {
  tone({ type: 'square', from: 150, to: 70, dur: 0.14, vol: 0.35 });
}

export function sfxStomp() {
  tone({ type: 'square', from: 320, to: 60, dur: 0.16, vol: 0.35 });
  tone({ type: 'sine', from: 90, dur: 0.1, at: 0.02, vol: 0.3 });
}

export function sfxBoing() {
  tone({ type: 'sine', from: 180, to: 720, dur: 0.28, vol: 0.35 });
  tone({ type: 'sine', from: 195, to: 750, dur: 0.28, at: 0.03, vol: 0.18 });
}

export function sfxDoorOpen() {
  tone({ type: 'sawtooth', from: 110, to: 330, dur: 0.35, vol: 0.16 });
  tone({ type: 'triangle', from: 523, dur: 0.18, at: 0.28, vol: 0.3 });
  tone({ type: 'triangle', from: 784, dur: 0.24, at: 0.38, vol: 0.3 });
}

export function sfxKeyJingle() {
  const notes = [1047, 1319, 1568, 2093, 1568, 2093];
  notes.forEach((f, i) => {
    tone({ type: 'triangle', from: f, dur: 0.14, at: i * 0.08, vol: 0.3 });
  });
}

export function sfxStarGrab() {
  tone({ type: 'sine', from: 600, to: 1800, dur: 0.3, vol: 0.35 });
  tone({ type: 'triangle', from: 1200, dur: 0.2, at: 0.14, vol: 0.25 });
}

// ---- TTS ----

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

if ('speechSynthesis' in window) {
  pickVoice();
  speechSynthesis.addEventListener('voiceschanged', pickVoice); // iOS loads late
}

export function speak(text, { rate = 1.0, onend = null } = {}) {
  if (muted || !('speechSynthesis' in window)) {
    if (onend) setTimeout(onend, 100);
    return;
  }
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) u.voice = voice;
    u.lang = 'en-US';
    u.rate = rate;
    u.pitch = 1.05;
    if (onend) {
      let done = false;
      const fin = () => { if (!done) { done = true; onend(); } };
      u.onend = fin;
      u.onerror = fin;
      // Safety net: iOS occasionally drops onend.
      setTimeout(fin, 1000 + text.length * 130);
    }
    speechSynthesis.speak(u);
  } catch (e) {
    if (onend) onend();
  }
}
