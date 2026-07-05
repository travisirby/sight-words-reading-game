// All DOM overlay screens. Every button speaks its label, then acts.
// The level map itself is 3D (overworld.js) — here we only manage the
// transparent map screen chrome + the slide-up level banner.

import { speak } from './audio.js';
import * as store from './store.js';

const $ = (id) => document.getElementById(id);

const SCREENS = ['title', 'map', 'pause', 'complete', 'bonus'];

export function init(h) {
  bindSpeak($('btn-play'), 'Play!', () => h.onPlay());
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
  const mic = $('btn-mic');
  const down = (e) => { e.preventDefault(); h.onMicDown(); };
  const up = (e) => { e.preventDefault(); h.onMicUp(); };
  mic.addEventListener('touchstart', down, { passive: false });
  mic.addEventListener('touchend', up, { passive: false });
  mic.addEventListener('touchcancel', up, { passive: false });
  mic.addEventListener('mousedown', down);
  mic.addEventListener('mouseup', up);
  mic.addEventListener('mouseleave', up);

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

// ---------- HUD ----------

export function setCoins(n) {
  $('coin-count').textContent = n;
}

export function setKeyFound(on) {
  $('hud-key').classList.toggle('hidden', !on);
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
