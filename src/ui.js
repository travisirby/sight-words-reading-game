// All DOM overlay screens. Every button speaks its label, then acts.
// The level map itself is 3D (overworld.js) — here we only manage the
// transparent map screen chrome + the slide-up level banner.

import { speak, speakLine, sfxClick, sfxStar } from './audio.js';
import * as fairy from './fairy.js';
import * as store from './store.js';
import { PALETTES, STYLES, OUTFITS, lookFrom } from './character.js';
import { HOUSE_ITEMS } from './housedata.js';
import { renderLookThumbnails } from './thumbs.js';
import {
  buildProgressReport, buildExportPayload, formatPlayTime,
} from './progress.js';

const $ = (id) => document.getElementById(id);

const SCREENS = [
  'title', 'players', 'progress', 'map', 'pause', 'complete', 'gamecomplete',
  'bonus', 'char', 'house', 'cutscene',
];

export function init(h) {
  fairy.mount();
  bindSpeak($('btn-play'), 'Play!', () => h.onPlay());
  bindSpeak($('btn-char-back'), 'Back', () => h.onCharacterDone());
  bindSpeak($('btn-char-done'), 'Looking good!', () => h.onCharacterDone());
  bindSpeak($('btn-settings'), 'Settings', () => $('settings-panel').classList.toggle('hidden'));
  bindSpeak($('btn-settings-close'), 'Close', () => $('settings-panel').classList.add('hidden'));
  bindSpeak($('btn-toggle-sound'), 'Sound', () => h.onToggleSound());
  bindSpeak($('btn-toggle-music'), 'Music', () => h.onToggleMusic());
  bindSpeak($('btn-toggle-mic'), 'Mic round', () => h.onToggleMic());
  bindSpeak($('btn-toggle-unlock'), 'All levels', () => h.onToggleUnlock());

  // Lives inside the settings panel — close it so the title is clean on return.
  bindSpeak($('btn-switch-player'), 'Switch player!', () => {
    $('settings-panel').classList.add('hidden');
    h.onSwitchPlayer();
  });
  // Parent report: quiet open (no kid fanfare) so grown-ups can check stats.
  bindSpeak($('btn-progress'), null, () => {
    $('settings-panel').classList.add('hidden');
    h.onProgress();
  });
  bindSpeak($('btn-progress-close'), 'Close', () => h.onProgressClose());
  // Export is silent so a parent can save a backup without TTS chatter.
  $('btn-progress-export').addEventListener('click', () => {
    sfxClick();
    exportProgressFile();
  });
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
  // raycasts it) — only the complete screens need chrome buttons.
  // House buttons stay silent — showHouse speaks a "welcome home" line.
  bindSpeak($('btn-complete-house'), null, () => h.onHouse('complete'));
  bindSpeak($('btn-house-back'), 'Back', () => h.onHouseBack());
  bindSpeak($('btn-house-shop'), 'Shop!', () => toggleShop(true));
  bindSpeak($('btn-shop-close'), 'Close', () => toggleShop(false));
  bindSpeak($('btn-house-music'), 'Music!', () => toggleMusicPanel(true));
  bindSpeak($('btn-music-close'), 'Close', () => toggleMusicPanel(false));
  bindSpeak($('btn-ceremony-map'), 'Map', () => h.onCeremonyDone());
  onBuyItem = h.onBuyItem;
  onPickMusic = h.onPickMusic;

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
  $('btn-toggle-unlock').textContent = s.devUnlocked ? '🔓 All Levels: ON' : '🔒 All Levels: OFF';
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

// ---------- parent progress report ----------

// Build + show the grown-up reading report for the active profile.
export function showProgress() {
  const s = store.get();
  const report = buildProgressReport({
    words: s.words,
    totals: store.totals(),
    playerName: store.activeProfileName(),
    unlocked: s.unlocked,
  });
  fillProgress(report);
  showScreen('progress');
  $('progress-export-toast').classList.add('hidden');
}

function fillProgress(report) {
  const name = report.playerName || 'Player';
  const world = report.unlocked ? report.unlocked.world + 1 : 1;
  $('progress-player').textContent = `${name} · World ${world}`;

  const t = report.totals;
  const stats = [
    ['⏱️ Time', formatPlayTime(t.playSeconds)],
    ['🗺️ Levels', String(t.levelsCompleted)],
    ['⭐ Stars', String(t.totalStars)],
    ['🎯 First-try', `${t.accuracy}%`],
    ['📖 Words read', String(t.wordsRead)],
    ['⭐ Mastered', `${report.masteredCount} / ${report.seenCount || 0}`],
  ];
  const sum = $('progress-summary');
  sum.innerHTML = '';
  for (const [label, value] of stats) {
    const el = document.createElement('div');
    el.className = 'progress-stat';
    el.innerHTML = `<span class="ps-label"></span><span class="ps-value"></span>`;
    el.querySelector('.ps-label').textContent = label;
    el.querySelector('.ps-value').textContent = value;
    sum.appendChild(el);
  }

  const worlds = $('progress-worlds');
  worlds.innerHTML = '';
  for (const w of report.byWorld) {
    const chip = document.createElement('span');
    chip.className = 'progress-world-chip' + (w.seen === 0 ? ' empty' : '');
    chip.textContent = `${w.emoji} ${w.mastered}/${w.total}`;
    chip.title = `${w.name}: ${w.mastered} mastered, ${w.seen} practiced of ${w.total}`;
    worlds.appendChild(chip);
  }

  fillWordList($('progress-practice'), report.practice, {
    empty: 'No hard words yet — play a few levels!',
    overflow: report.practiceOverflow,
    showMisses: true,
  });
  fillWordList($('progress-mastered'), report.mastered, {
    empty: 'Mastered words show up here after 3 first-try wins.',
    showMisses: false,
  });
}

function fillWordList(el, rows, { empty, overflow = 0, showMisses }) {
  el.innerHTML = '';
  if (!rows.length) {
    const p = document.createElement('div');
    p.className = 'progress-empty';
    p.textContent = empty;
    el.appendChild(p);
    return;
  }
  for (const r of rows) {
    const row = document.createElement('div');
    const band = r.accuracy >= 80 ? 'good' : r.accuracy >= 50 ? 'ok' : 'hard';
    row.className = `progress-word-row ${band}`;
    const word = document.createElement('span');
    word.className = 'pw-word';
    word.textContent = r.word;
    const meta = document.createElement('span');
    meta.className = 'pw-meta';
    meta.textContent = showMisses
      ? `${r.firstTryCorrect}/${r.seen} first-try · ${r.missed} miss`
      : `${r.firstTryCorrect} first-try`;
    const acc = document.createElement('span');
    acc.className = 'pw-acc';
    acc.textContent = `${r.accuracy}%`;
    row.append(word, meta, acc);
    el.appendChild(row);
  }
  if (overflow > 0) {
    const more = document.createElement('div');
    more.className = 'progress-empty';
    more.textContent = `…and ${overflow} more. Keep practicing!`;
    el.appendChild(more);
  }
}

function exportProgressFile() {
  const s = store.get();
  const report = buildProgressReport({
    words: s.words,
    totals: store.totals(),
    playerName: store.activeProfileName(),
    unlocked: s.unlocked,
  });
  const payload = buildExportPayload({
    playerName: store.activeProfileName(),
    profileId: store.activeProfileId(),
    state: s,
    report,
  });
  const json = JSON.stringify(payload, null, 2);
  const stamp = new Date().toISOString().slice(0, 10);
  const safeName = (payload.playerName || 'player')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'player';
  const filename = `sight-words-progress-${safeName}-${stamp}.json`;

  let saved = false;
  try {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    saved = true;
  } catch (e) { /* fall through to clipboard */ }

  if (!saved && navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(json).then(() => showExportToast('Copied!')).catch(() => {
      showExportToast('Could not export');
    });
    return;
  }
  showExportToast(saved ? 'Saved!' : 'Could not export');
}

function showExportToast(text) {
  const el = $('progress-export-toast');
  el.textContent = text;
  el.classList.remove('hidden');
  setTimeout(() => el.classList.add('hidden'), 2200);
}

// ---------- game complete (finale stats) ----------

// Fill and show the finale stats screen; rows cascade in one by one.
export function showGameComplete(t, { firstTime = true } = {}) {
  showScreen('gamecomplete');
  $('gc-levels').textContent = t.levelsCompleted;
  $('gc-stars').textContent = t.totalStars;
  $('gc-words').textContent = t.wordsRead;
  $('gc-accuracy').textContent = `${t.accuracy}%`;
  $('gc-secrets').textContent = t.secretsFound;
  $('gc-coins').textContent = t.coinsEarned;
  // Finale keeps the punchier kid-facing labels ("Just started!", "12m").
  const m = Math.round(t.playSeconds / 60);
  $('gc-time').textContent = m < 1 ? 'Just started!' : m < 60 ? `${m}m` : `${Math.floor(m / 60)}h ${m % 60}m`;
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
let onPickMusic = null;
let toastTimer = null;
let pendingItem = null; // item awaiting the yes/no read in the confirm bar
let musicOpts = { choices: [], current: 'house' }; // set on each showHouse

function toggleShop(open) {
  $('shop-panel').classList.toggle('hidden', !open);
  closeShopConfirm();
  if (open) {
    $('music-panel').classList.add('hidden'); // one bottom sheet at a time
    refreshShop();
  }
}

// ---------- house jukebox ----------

function toggleMusicPanel(open) {
  $('music-panel').classList.toggle('hidden', !open);
  if (open) {
    $('shop-panel').classList.add('hidden');
    refreshMusicList();
  }
}

// Rebuilt on every open/pick — the list is tiny and this keeps the 🎵
// marker on the playing track without bookkeeping.
function refreshMusicList() {
  const list = $('music-list');
  list.innerHTML = '';
  for (const c of musicOpts.choices) {
    const playing = c.track === musicOpts.current;
    const btn = document.createElement('button');
    btn.className = 'music-item' + (playing ? ' playing' : '');
    btn.innerHTML = `<span class="shop-emoji">${c.emoji}</span>
      <span class="music-name">${c.name}</span>
      <span class="music-note">${playing ? '🎵' : ''}</span>`;
    btn.addEventListener('click', () => {
      sfxClick();
      musicOpts.current = c.track;
      speak(c.name, { rate: 1.0 }); // tapping is a mini reading moment too
      onPickMusic && onPickMusic(c.track);
      refreshMusicList();
    });
    list.appendChild(btn);
  }
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

export function showHouse(music = null) {
  showScreen('house');
  toggleShop(false);
  toggleMusicPanel(false);
  if (music) musicOpts = music; // { choices, current } from main.js
  refreshWallet();
  $('btn-house-back').classList.remove('hidden');
  $('btn-house-shop').classList.remove('hidden');
  $('btn-house-music').classList.remove('hidden');
  $('ceremony-panel').classList.add('hidden');
}

// Trophy-ceremony chrome: same house scene, but the only way out is the
// big MAP button — no shop or back to wander off through mid-fanfare.
export function showCeremony() {
  showScreen('house');
  toggleShop(false);
  toggleMusicPanel(false);
  refreshWallet();
  $('btn-house-back').classList.add('hidden');
  $('btn-house-shop').classList.add('hidden');
  $('btn-house-music').classList.add('hidden');
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
