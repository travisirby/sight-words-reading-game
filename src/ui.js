// All DOM overlay screens. Every button speaks its label, then acts.
// The level map itself is 3D (overworld.js) — here we only manage the
// transparent map screen chrome + the slide-up level banner.

import { speak, sfxClick, sfxStar } from './audio.js';
import * as fairy from './fairy.js';
import * as store from './store.js';
import { PALETTES, STYLES, OUTFITS, lookFrom } from './character.js';
import { HOUSE_ITEMS } from './housedata.js';
import { renderLookThumbnails } from './thumbs.js';

const $ = (id) => document.getElementById(id);

const SCREENS = ['title', 'players', 'map', 'pause', 'complete', 'bonus', 'char', 'house', 'cutscene'];

export function init(h) {
  fairy.mount();
  bindSpeak($('btn-play'), 'Play!', () => h.onPlay());
  bindSpeak($('btn-character'), 'Make your character!', () => h.onCharacter());
  bindSpeak($('btn-char-back'), 'Back', () => h.onCharacterDone());
  bindSpeak($('btn-char-done'), 'Looking good!', () => h.onCharacterDone());
  bindSpeak($('btn-settings'), 'Settings', () => $('settings-panel').classList.toggle('hidden'));
  bindSpeak($('btn-settings-close'), 'Close', () => $('settings-panel').classList.add('hidden'));
  bindSpeak($('btn-toggle-sound'), 'Sound', () => h.onToggleSound());
  bindSpeak($('btn-toggle-music'), 'Music', () => h.onToggleMusic());
  bindSpeak($('btn-toggle-mic'), 'Mic round', () => h.onToggleMic());

  bindSpeak($('btn-switch-player'), 'Switch player!', () => h.onSwitchPlayer());
  bindSpeak($('btn-players-back'), 'Back', () => h.onPlayersBack());
  // New-player prompt: OK keeps the typed name, Skip means "no name yet".
  bindSpeak($('btn-new-player-ok'), "Let's go!", () => submitNewPlayer(true));
  bindSpeak($('btn-new-player-skip'), "Let's go!", () => submitNewPlayer(false));
  bindSpeak($('btn-delete-no'), 'No', () => closeDeleteConfirm());
  bindSpeak($('btn-delete-yes'), 'Goodbye!', () => confirmDelete());

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

  // On the map the house is a real building in the world (overworld.js
  // raycasts it) — only title/complete need chrome buttons.
  bindSpeak($('btn-title-house'), 'My house!', () => h.onHouse('title'));
  bindSpeak($('btn-complete-house'), 'My house!', () => h.onHouse('complete'));
  bindSpeak($('btn-house-back'), 'Back', () => h.onHouseBack());
  bindSpeak($('btn-house-shop'), 'Shop!', () => toggleShop(true));
  bindSpeak($('btn-shop-close'), 'Close', () => toggleShop(false));
  onBuyItem = h.onBuyItem;

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

// Tap sound + speak the label, then run the action.
function bindSpeak(el, label, fn) {
  el.addEventListener('click', () => {
    sfxClick();
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
  // No screen means we're in a run — the fairy perches by the 🔊 button.
  fairy.flyTo(name || 'game');
}

export function showHUD(on) {
  $('hud').classList.toggle('hidden', !on);
}

export function updateSettingsLabels() {
  const s = store.get();
  $('btn-toggle-sound').textContent = s.sound ? '🔊 Sound: ON' : '🔇 Sound: OFF';
  $('btn-toggle-music').textContent = s.music ? '🎵 Music: ON' : '🎵 Music: OFF';
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

// ---------- title nameplate ----------

// Shown only when the active player actually has a name — no placeholder.
export function setPlayerName(name) {
  const el = $('player-nameplate');
  el.textContent = name;
  el.classList.toggle('hidden', !name);
}

// ---------- player select ----------

let playersH = null; // { onSelect(id), onCreate(name), onDelete(id) }
let pendingDelete = null;

// Open the screen and (re)build one card per profile. Rebuilt wholesale on
// every change — the list is tiny (≤6) and this keeps states trivially
// in sync, same trick as the shop.
export function showPlayers(h) {
  playersH = h;
  buildPlayersList();
  showScreen('players');
}

function buildPlayersList() {
  $('new-player-panel').classList.add('hidden');
  closeDeleteConfirm();
  const list = $('players-list');
  list.innerHTML = '';
  const profiles = store.listProfiles();
  const blobs = profiles.map((p) => store.peekProfile(p.id));
  // One offscreen renderer paints the whole batch, then disposes itself.
  const thumbs = renderLookThumbnails(blobs.map((b) => lookFrom(b.character)));

  profiles.forEach((p, i) => {
    const label = p.name || `Player ${i + 1}`;
    const card = document.createElement('div');
    card.className = 'player-card' + (p.id === store.activeProfileId() ? ' active' : '');
    const img = document.createElement('img');
    img.className = 'player-thumb';
    img.src = thumbs[i];
    img.alt = '';
    const name = document.createElement('span');
    name.className = 'player-name';
    name.textContent = label; // textContent: names are typed by users
    const prog = document.createElement('span');
    prog.className = 'player-progress';
    prog.textContent = `🗺️ World ${blobs[i].unlocked.world + 1}`;
    card.append(img, name, prog);
    card.addEventListener('click', () => {
      speak(label, { rate: 1.0 });
      playersH.onSelect(p.id);
    });
    // Delete ✕ — hidden when this is the only profile left.
    if (profiles.length > 1) {
      const del = document.createElement('button');
      del.className = 'player-delete';
      del.textContent = '✕';
      del.addEventListener('click', (e) => {
        e.stopPropagation(); // don't also select the card
        speak('Delete this player? All their progress will be lost.', { rate: 1.0 });
        pendingDelete = p.id;
        $('confirm-delete-panel').classList.remove('hidden');
      });
      card.appendChild(del);
    }
    list.appendChild(card);
  });

  if (profiles.length < store.MAX_PROFILES) {
    const add = document.createElement('div');
    add.className = 'player-card new-player';
    add.innerHTML = `<span class="player-plus">➕</span>
      <span class="player-name">New Player</span>
      <span class="player-progress">&nbsp;</span>`;
    add.addEventListener('click', () => {
      speak('New player! What is your name?', { rate: 1.0 });
      $('new-player-name').value = '';
      $('new-player-panel').classList.remove('hidden');
      $('new-player-name').focus();
    });
    list.appendChild(add);
  }
}

function submitNewPlayer(withName) {
  if ($('new-player-panel').classList.contains('hidden')) return;
  $('new-player-panel').classList.add('hidden');
  const name = withName ? $('new-player-name').value.trim() : '';
  playersH.onCreate(name);
}

function closeDeleteConfirm() {
  pendingDelete = null;
  $('confirm-delete-panel').classList.add('hidden');
}

function confirmDelete() {
  if (!pendingDelete) return;
  const id = pendingDelete;
  closeDeleteConfirm();
  playersH.onDelete(id);
  buildPlayersList(); // reflect the removal (and re-hide ✕ at one profile)
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

  const addIconRow = (part, def, selectedIdx) =>
    addRow(def.label, def.names.map((name, i) => {
      const b = document.createElement('button');
      b.className = 'swatch style-swatch' + (i === selectedIdx ? ' selected' : '');
      b.textContent = def.icons[i];
      b.title = name;
      b.addEventListener('click', () => pick(part, i, name));
      return b;
    }));

  addIconRow('style', STYLES, char.style);
  addIconRow('outfit', OUTFITS, char.outfit);
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
    setTimeout(() => {
      starEls[i].classList.add('earned');
      sfxStar(i);
    }, 500 + i * 450);
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

// ---------- my house / shop ----------

let onBuyItem = null;
let toastTimer = null;

function toggleShop(open) {
  $('shop-panel').classList.toggle('hidden', !open);
  if (open) refreshShop();
}

export function showHouse() {
  showScreen('house');
  toggleShop(false);
  refreshWallet();
}

export function refreshWallet() {
  const s = store.get();
  $('house-coins').textContent = s.coins;
  $('house-gems').textContent = s.gems;
}

// Rebuild the whole list — it's small and this keeps owned/afford states
// trivially in sync after every purchase.
export function refreshShop() {
  refreshWallet();
  const s = store.get();
  const list = $('shop-list');
  list.innerHTML = '';
  for (const item of HOUSE_ITEMS) {
    const owned = store.ownsHouseItem(item.id);
    const wallet = item.currency === 'gems' ? s.gems : s.coins;
    const btn = document.createElement('button');
    btn.className = 'shop-item' + (owned ? ' owned' : wallet < item.cost ? ' cant-afford' : '');
    const coin = item.currency === 'gems' ? '💎' : '🪙';
    btn.innerHTML = `<span class="shop-emoji">${item.emoji}</span>
      <span class="shop-info"><span>${item.name}</span>
      <span class="shop-cost">${owned ? '✅ Got it!' : `${coin} ${item.cost}`}</span></span>`;
    btn.addEventListener('click', () => onBuyItem && onBuyItem(item));
    list.appendChild(btn);
  }
}

export function houseToast(text) {
  const el = $('house-toast');
  el.textContent = text;
  el.classList.remove('hidden');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), 1800);
}
