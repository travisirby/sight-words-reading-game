// All DOM overlay screens. Every button speaks its label, then acts.

import { speak } from './audio.js';
import { WORLDS } from './words.js';
import * as store from './store.js';

const $ = (id) => document.getElementById(id);

const SCREENS = ['title', 'map', 'pause', 'complete', 'bonus'];

let handlers = {};

// Speak the label, then run the action.
function bindSpeak(el, label, fn) {
  el.addEventListener('click', () => {
    speak(label, { rate: 1.0 });
    fn();
  });
}

export function init(h) {
  handlers = h;

  bindSpeak($('btn-play'), 'Play!', () => h.onPlay());
  bindSpeak($('btn-settings'), 'Settings', () => $('settings-panel').classList.toggle('hidden'));
  bindSpeak($('btn-settings-close'), 'Close', () => $('settings-panel').classList.add('hidden'));
  bindSpeak($('btn-toggle-sound'), 'Sound', () => h.onToggleSound());
  bindSpeak($('btn-toggle-mic'), 'Mic round', () => h.onToggleMic());

  bindSpeak($('btn-map-back'), 'Back', () => h.onMapBack());

  bindSpeak($('btn-pause'), 'Pause', () => h.onPause());
  bindSpeak($('btn-resume'), 'Resume', () => h.onResume());
  bindSpeak($('btn-pause-map'), 'Map', () => h.onPauseMap());

  // Repeat button re-speaks the target word itself — don't speak a label first.
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

export function showScreen(name) {
  for (const s of SCREENS) {
    $(`screen-${s}`).classList.toggle('hidden', s !== name);
  }
}

export function showHUD(on) {
  $('hud').classList.toggle('hidden', !on);
}

export function updateSettingsLabels() {
  const s = store.get();
  $('btn-toggle-sound').textContent = s.sound ? '🔊 Sound: ON' : '🔇 Sound: OFF';
  $('btn-toggle-mic').textContent = s.mic ? '🎤 Mic Round: ON' : '🎤 Mic Round: OFF';
}

// ---------- map ----------

export function buildMap() {
  const scroll = $('world-scroll');
  scroll.innerHTML = '';
  WORLDS.forEach((world, wi) => {
    const card = document.createElement('div');
    card.className = 'world-card';
    const worldOpen = store.isWorldUnlocked(wi);
    if (!worldOpen) card.classList.add('locked');

    const emoji = document.createElement('div');
    emoji.className = 'world-emoji';
    emoji.textContent = world.emoji;
    const name = document.createElement('div');
    name.className = 'world-name';
    name.textContent = `${wi + 1}. ${world.name}`;
    const grid = document.createElement('div');
    grid.className = 'level-grid';

    world.levels.forEach((words, li) => {
      const btn = document.createElement('button');
      btn.className = 'btn btn-level';
      const open = store.isLevelUnlocked(wi, li);
      if (open) {
        const stars = store.getStars(wi, li);
        btn.innerHTML = `<span>${li + 1}</span><span class="lvl-stars">${
          '⭐'.repeat(stars) || '· · ·'
        }</span>`;
        btn.addEventListener('click', () => {
          speak(`Level ${li + 1}. Here we go!`, { rate: 1.0 });
          handlers.onSelectLevel(wi, li);
        });
      } else {
        btn.classList.add('locked');
        btn.textContent = '🔒';
        btn.addEventListener('click', () => speak('Locked! Finish more levels first.', { rate: 1.0 }));
      }
      grid.appendChild(btn);
    });

    card.append(emoji, name, grid);
    scroll.appendChild(card);
  });
}

// ---------- HUD ----------

export function setCoins(n) {
  $('coin-count').textContent = n;
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
