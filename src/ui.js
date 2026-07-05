// All DOM overlay screens. Every button speaks its label, then acts.
// The level map itself is 3D (overworld.js) — here we only manage the
// transparent map screen chrome + the slide-up level banner.

import { speak } from './audio.js';
import * as store from './store.js';
import { PALETTES, STYLES } from './character.js';

const $ = (id) => document.getElementById(id);

const SCREENS = ['title', 'map', 'pause', 'complete', 'bonus', 'char'];

export function init(h) {
  bindSpeak($('btn-play'), 'Play!', () => h.onPlay());
  bindSpeak($('btn-character'), 'Make your character!', () => h.onCharacter());
  bindSpeak($('btn-char-back'), 'Back', () => h.onCharacterDone());
  bindSpeak($('btn-char-done'), 'Looking good!', () => h.onCharacterDone());
  bindSpeak($('btn-settings'), 'Settings', () => $('settings-panel').classList.toggle('hidden'));
  bindSpeak($('btn-settings-close'), 'Close', () => $('settings-panel').classList.add('hidden'));
  bindSpeak($('btn-toggle-sound'), 'Sound', () => h.onToggleSound());
  bindSpeak($('btn-toggle-mic'), 'Mic round', () => h.onToggleMic());

  bindSpeak($('btn-map-back'), 'Back', () => h.onMapBack());
  bindSpeak($('btn-banner-play'), 'Here we go!', () => h.onBannerPlay());

  bindSpeak($('btn-pause'), 'Pause', () => h.onPause());
  bindSpeak($('btn-resume'), 'Resume', () => h.onResume());
  bindSpeak($('btn-pause-map'), 'Map', () => h.onPauseMap());

  // Repeat button re-speaks the target word itself — no label speech first.
  $('btn-repeat-word').addEventListener('click', () => h.onRepeatWord());

  bindSpeak($('btn-play-again'), 'Play again!', () => h.onPlayAgain());
  bindSpeak($('btn-next-level'), 'Next level!', () => h.onNextLevel());
  bindSpeak($('btn-complete-map'), 'Map', () => h.onCompleteMap());

  bindSpeak($('btn-bonus-skip'), 'Skip', () => h.onBonusSkip());

  // Mic: press-and-hold.
  bindHold($('btn-mic'), h.onMicDown, h.onMicUp);

  // Choice-mode steering: press-and-hold arrows + jump.
  bindHold($('btn-move-left'), () => h.onMoveDown(-1), () => h.onMoveUp(-1));
  bindHold($('btn-move-right'), () => h.onMoveDown(1), () => h.onMoveUp(1));
  bindHold($('btn-move-jump'), h.onJumpDown, h.onJumpUp);

  // Hidden dev unlock: tap the version number 5 times.
  let taps = 0;
  $('version-tag').addEventListener('click', () => {
    taps++;
    if (taps >= 5) {
      taps = 0;
      h.onDevUnlock();
    }
  });
}

// Speak the label, then run the action.
function bindSpeak(el, label, fn) {
  el.addEventListener('click', () => {
    speak(label, { rate: 1.0 });
    fn();
  });
}

// Press-and-hold button (mic, steering arrows, jump).
function bindHold(el, onDown, onUp) {
  const down = (e) => { e.preventDefault(); onDown(); };
  const up = (e) => { e.preventDefault(); onUp(); };
  el.addEventListener('touchstart', down, { passive: false });
  el.addEventListener('touchend', up, { passive: false });
  el.addEventListener('touchcancel', up, { passive: false });
  el.addEventListener('mousedown', down);
  el.addEventListener('mouseup', up);
  el.addEventListener('mouseleave', up);
}

export function showScreen(name) {
  for (const s of SCREENS) {
    $(`screen-${s}`).classList.toggle('hidden', s !== name);
  }
  if (name !== 'map') hideLevelBanner();
}

export function showHUD(on) {
  $('hud').classList.toggle('hidden', !on);
}

export function updateSettingsLabels() {
  const s = store.get();
  $('btn-toggle-sound').textContent = s.sound ? '🔊 Sound: ON' : '🔇 Sound: OFF';
  $('btn-toggle-mic').textContent = s.mic ? '🎤 Mic Round: ON' : '🎤 Mic Round: OFF';
}

// ---------- level banner (overworld node tapped) ----------

export function showLevelBanner({ name, stars, completed, secret, boss }) {
  $('banner-name').textContent = secret ? `✨ ${name} ✨` : boss ? `👑 ${name} 👑` : name;
  $('banner-stars').textContent = stars > 0 ? '⭐'.repeat(stars) : '· · ·';
  $('btn-banner-play').textContent = completed ? '🔁 PLAY' : '▶️ PLAY';
  $('level-banner').classList.remove('hidden');
}

export function hideLevelBanner() {
  $('level-banner').classList.add('hidden');
}

export function isLevelBannerVisible() {
  return !$('level-banner').classList.contains('hidden');
}

// ---------- character creator ----------

// Rebuilt on every open/pick — cheap, and keeps selection rings in sync.
// onPick(part, idx) updates the store + live preview, then we re-render.
export function buildCharacterUI(onPick) {
  const wrap = $('char-rows');
  wrap.innerHTML = '';
  const char = store.get().character;

  const addRow = (label, buttons) => {
    const row = document.createElement('div');
    row.className = 'char-row';
    const lab = document.createElement('div');
    lab.className = 'char-label';
    lab.textContent = label;
    row.appendChild(lab);
    const opts = document.createElement('div');
    opts.className = 'char-options';
    for (const b of buttons) opts.appendChild(b);
    row.appendChild(opts);
    wrap.appendChild(row);
  };

  const pick = (part, idx, name) => {
    speak(name, { rate: 1.0 });
    onPick(part, idx);
    buildCharacterUI(onPick);
  };

  for (const [part, def] of Object.entries(PALETTES)) {
    addRow(def.label, def.colors.map((color, i) => {
      const b = document.createElement('button');
      b.className = 'swatch' + (i === char[part] ? ' selected' : '');
      b.style.background = `#${color.toString(16).padStart(6, '0')}`;
      b.addEventListener('click', () => pick(part, i, def.names[i]));
      return b;
    }));
  }

  addRow(STYLES.label, STYLES.names.map((name, i) => {
    const b = document.createElement('button');
    b.className = 'swatch style-swatch' + (i === char.style ? ' selected' : '');
    b.textContent = STYLES.icons[i];
    b.title = name;
    b.addEventListener('click', () => pick('style', i, name));
    return b;
  }));
}

// ---------- HUD ----------

export function setCoins(n) {
  $('coin-count').textContent = n;
}

export function setKeyFound(on) {
  $('hud-key').classList.toggle('hidden', !on);
}

// Steering controls appear only while time is frozen at a word choice.
export function showMoveControls(on) {
  $('move-controls').classList.toggle('hidden', !on);
}

export function initDots(count) {
  const el = $('progress-dots');
  el.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    el.appendChild(d);
  }
}

export function setDot(i, cls) {
  const d = $('progress-dots').children[i];
  if (d) d.className = `dot ${cls}`;
}

// ---------- level complete ----------

export function showComplete({ stars, coins, gems, hasNext }) {
  showScreen('complete');
  $('complete-coins').textContent = coins;
  $('complete-gems').textContent = gems;
  $('btn-next-level').classList.toggle('hidden', !hasNext);
  const starEls = $('star-row').querySelectorAll('.star');
  starEls.forEach((s) => s.classList.remove('earned'));
  for (let i = 0; i < stars; i++) {
    setTimeout(() => starEls[i].classList.add('earned'), 500 + i * 450);
  }
}

// ---------- bonus round ----------

export function showBonusWord(word) {
  $('bonus-word').textContent = word;
  $('bonus-feedback').textContent = '';
}

export function setBonusFeedback(text) {
  $('bonus-feedback').textContent = text;
}

export function setMicListening(on) {
  $('btn-mic').classList.toggle('listening', on);
}
