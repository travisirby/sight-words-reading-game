// All DOM overlay screens. Every button speaks its label, then acts.
// The level map itself is 3D (overworld.js) — here we only manage the
// transparent map screen chrome + the slide-up level banner.

import { speak, speakLine, sfxClick, sfxStar } from './audio.js';
import * as fairy from './fairy.js';
import * as store from './store.js';
import { PALETTES, STYLES, OUTFITS, lookFrom } from './character.js';
import { HOUSE_ITEMS } from './housedata.js';
import { renderLookThumbnails } from './thumbs.js';

const $ = (id) => document.getElementById(id);

const SCREENS = ['title', 'players', 'map', 'pause', 'complete', 'gamecomplete', 'bonus', 'char', 'house', 'cutscene'];

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
  $('btn-repeat-word').addEventListener('click', () => {
    showRepeatTip(false); // he found it — tutorial done
    h.onRepeatWord();
  });

  bindSpeak($('btn-next-level'), 'Next level!', () => h.onNextLevel());
  bindSpeak($('btn-complete-map'), 'Map', () => h.onCompleteMap());

  bindSpeak($('btn-final-map'), 'Map', () => h.onCompleteMap());
  bindSpeak($('btn-final-house'), null, () => h.onHouse('complete'));

  bindSpeak($('btn-bonus-skip'), 'Skip', () => h.onBonusSkip());

  // On the map the house is a real building in the world (overworld.js
  // raycasts it) — only title/complete need chrome buttons.
  // House buttons stay silent — showHouse speaks a "welcome home" line.
  bindSpeak($('btn-title-house'), null, () => h.onHouse('title'));
  bindSpeak($('btn-complete-house'), null, () => h.onHouse('complete'));
  bindSpeak($('btn-house-back'), 'Back', () => h.onHouseBack());
  bindSpeak($('btn-house-shop'), 'Shop!', () => toggleShop(true));
  bindSpeak($('btn-shop-close'), 'Close', () => toggleShop(false));
  bindSpeak($('btn-ceremony-map'), 'Map', () => h.onCeremonyDone());
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

// Tap sound + speak the label (null = silent tap), then run the action.
function bindSpeak(el, label, fn) {
  el.addEventListener('click', () => {
    sfxClick();
    if (label) speak(label, { rate: 1.0 });
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

// In-run controls: full left/right/jump steering while time is frozen at a
// word choice ('choice'), or just the forward-boost + jump pair whenever
// boosting is available during auto-run ('boost'). null hides them.
export function showMoveControls(mode) {
  const el = $('move-controls');
  el.classList.toggle('hidden', !mode);
  el.classList.toggle('boost-only', mode === 'boost');
}

// Flash the 🔊 button whenever the word auto-repeats, so the kid learns
// which button makes the word speak.
let repeatPulseTimer = null;
export function pulseRepeatButton() {
  const b = $('btn-repeat-word');
  b.classList.remove('flash');
  void b.offsetWidth; // restart the animation
  b.classList.add('flash');
  clearTimeout(repeatPulseTimer);
  repeatPulseTimer = setTimeout(() => b.classList.remove('flash'), 1700);
}

// One-time callout pointing at the 🔊 button (first word event ever).
let repeatTipTimer = null;
export function showRepeatTip(on) {
  $('repeat-tip').classList.toggle('hidden', !on);
  clearTimeout(repeatTipTimer);
  if (on) repeatTipTimer = setTimeout(() => showRepeatTip(false), 8000);
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

// ---------- game complete (finale stats) ----------

function formatPlayTime(seconds) {
  const m = Math.round(seconds / 60);
  if (m < 1) return 'Just started!';
  if (m < 60) return `${m}m`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

// Fill and show the finale stats screen; rows cascade in one by one.
export function showGameComplete(t, { firstTime = true } = {}) {
  showScreen('gamecomplete');
  $('gc-levels').textContent = t.levelsCompleted;
  $('gc-stars').textContent = t.totalStars;
  $('gc-words').textContent = t.wordsRead;
  $('gc-accuracy').textContent = `${t.accuracy}%`;
  $('gc-secrets').textContent = t.secretsFound;
  $('gc-coins').textContent = t.coinsEarned;
  $('gc-time').textContent = formatPlayTime(t.playSeconds);
  // On replays the trophy is old news — skip the "new reward" banner.
  $('gc-reward').classList.toggle('hidden', !firstTime);
  const rows = $('gc-stats').querySelectorAll('.gc-row');
  rows.forEach((r, i) => {
    r.classList.remove('gc-in');
    setTimeout(() => r.classList.add('gc-in'), 400 + i * 350);
  });
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
let pendingItem = null; // item awaiting the yes/no read in the confirm bar

function toggleShop(open) {
  $('shop-panel').classList.toggle('hidden', !open);
  closeShopConfirm();
  if (open) refreshShop();
}

function closeShopConfirm() {
  pendingItem = null;
  $('shop-confirm').classList.add('hidden');
}

// Tapping an item speaks its name, then asks to buy — the kid answers by
// reading "yes" or "no" (early Dolch words, spoken back on tap). Sides are
// shuffled each time so he reads the words instead of memorizing positions.
function openShopConfirm(item) {
  pendingItem = item;
  $('shop-confirm-emoji').textContent = item.emoji;
  $('shop-confirm-name').textContent = item.name;
  const wordsEl = $('shop-confirm-words');
  wordsEl.innerHTML = '';
  const pair = Math.random() < 0.5 ? ['yes', 'no'] : ['no', 'yes'];
  for (const w of pair) {
    const b = document.createElement('button');
    b.className = 'shop-word-btn';
    b.textContent = w;
    b.addEventListener('click', () => {
      if (!pendingItem) return;
      const it = pendingItem;
      closeShopConfirm();
      sfxClick();
      if (w === 'yes') {
        // The word clip first, then the purchase (which speaks the payoff).
        speak('yes', { onend: () => onBuyItem && onBuyItem(it) });
      } else {
        speak('no', { onend: () => speakLine('shopNo') });
      }
    });
    wordsEl.appendChild(b);
  }
  $('shop-confirm').classList.remove('hidden');
  speak(`${item.name}!`, { rate: 1.0, onend: () => {
    if (pendingItem === item) speakLine('shopConfirm');
  } });
}

export function showHouse() {
  showScreen('house');
  toggleShop(false);
  refreshWallet();
  $('btn-house-back').classList.remove('hidden');
  $('btn-house-shop').classList.remove('hidden');
  $('ceremony-panel').classList.add('hidden');
}

// Trophy-ceremony chrome: same house scene, but the only way out is the
// big MAP button — no shop or back to wander off through mid-fanfare.
export function showCeremony() {
  showScreen('house');
  toggleShop(false);
  refreshWallet();
  $('btn-house-back').classList.add('hidden');
  $('btn-house-shop').classList.add('hidden');
  $('ceremony-panel').classList.remove('hidden');
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
    const earned = item.earned !== undefined; // boss prize, never for sale
    const wallet = item.currency === 'gems' ? s.gems : s.coins;
    const btn = document.createElement('button');
    btn.className = 'shop-item' +
      (owned ? ' owned' : earned || wallet < item.cost ? ' cant-afford' : '');
    const coin = item.currency === 'gems' ? '💎' : '🪙';
    const cost = owned ? '✅ Got it!' : earned ? '🏰 Castle prize!' : `${coin} ${item.cost}`;
    btn.innerHTML = `<span class="shop-emoji">${item.emoji}</span>
      <span class="shop-info"><span>${item.name}</span>
      <span class="shop-cost">${cost}</span></span>`;
    btn.addEventListener('click', () => {
      sfxClick();
      if (owned) {
        // Still speaks so tapping owned stuff is a mini reading moment.
        closeShopConfirm();
        speak(`You already have the ${item.name}!`, { rate: 1.0 });
      } else if (earned) {
        // Boss prize, never for sale: buyItem speaks the castle nudge.
        closeShopConfirm();
        onBuyItem && onBuyItem(item);
      } else {
        openShopConfirm(item);
      }
    });
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
