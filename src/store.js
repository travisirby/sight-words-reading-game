// localStorage persistence. One JSON blob per player profile under
// superKidsSightWords.v2:<id>, plus a tiny profiles index under
// superKidsSightWords.profiles.v1 so several kids can share a device.
// Migrates from the pre-profile Word Runner-era blobs (same shape; the
// game was renamed). The unlock frontier gains a virtual boss slot:
// u.level === levelCount means "castle playable".

import { isMasteredStats } from './words.js';

const KEY_BASE = 'superKidsSightWords.v2';
const OLD_KEY_BASE = 'superKidsSightWords.v1';
const OLD_KEYS = ['wordRunner.v3', 'wordRunner.v2', 'wordRunner.v1'];
const PROFILES_KEY = 'superKidsSightWords.profiles.v1';
export const MAX_PROFILES = 6;

const defaults = () => ({
  coins: 0,
  gems: 0,
  sound: true,
  music: true,
  mic: true,
  devUnlocked: false,
  // words[word] = { seen, correct, firstTryCorrect, missed }
  words: {},
  // stars['w-l'] = 0..3 (the boss level uses l = levelCount)
  stars: {},
  // frontier of progression
  unlocked: { world: 0, level: 0 },
  // keys['w-l'] = true when the golden key in that level was collected
  keys: {},
  // secretUnlocked[world] = true once any key in that world is found
  secretUnlocked: {},
  // secretStars[world] = 0..3
  secretStars: {},
  // character look — indices into character.js palettes/styles
  character: { skin: 0, hair: 0, style: 0, shirt: 0, pants: 0, outfit: 0 },
  // bossBeaten[world] = true once that world's castle boss fell
  bossBeaten: {},
  // house.owned[itemId] = true for every furniture/pet purchase and every
  // boss-dropped decoration; unseen[id] = true for prizes not yet visited;
  // seenCoins/seenGems = wallet at the last house visit (for the ❗ nudge)
  house: { owned: {}, unseen: {}, seenCoins: 0, seenGems: 0 },
  // one-time 🔊 repeat-button tutorial shown at the first word event
  seenRepeatTip: false,
  // lifetime totals for the finale stats screen. playSeconds counts only
  // active in-run time (main.js flushes it); wordsRead / coinsEarned are
  // running counters (per-word stats track accuracy, not lifetime volume).
  stats: { playSeconds: 0, wordsRead: 0, coinsEarned: 0 },
  // true once the final boss fell and the finale played (reward granted)
  gameCompleted: false,
});

// Dev builds always start silent (regardless of what the save says) so
// reloads don't blare audio; the options toggles still work in-session.
function applyDevAudioDefaults(s) {
  if (import.meta.env.DEV) {
    s.sound = false;
    s.music = false;
  }
  return s;
}

let state = applyDevAudioDefaults(defaults());

// ---------- profiles ----------

let profiles = null; // { active: id, list: [{ id, name }] } — name may be ''

const blobKey = (id) => `${KEY_BASE}:${id}`;
const oldBlobKey = (id) => `${OLD_KEY_BASE}:${id}`;
const newId = () => Math.random().toString(36).slice(2, 8);

const insertedWorldIndex = (world) => (world >= 3 ? world + 1 : world);

function remapCompositeWorldKeys(value) {
  const out = {};
  if (!value || typeof value !== 'object') return out;
  for (const [key, val] of Object.entries(value)) {
    const parts = key.split('-');
    const world = Number(parts[0]);
    if (parts.length > 1 && Number.isInteger(world) && world >= 0) {
      out[[insertedWorldIndex(world), ...parts.slice(1)].join('-')] = val;
    } else {
      out[key] = val;
    }
  }
  return out;
}

function remapWorldIndexMap(value) {
  const out = Array.isArray(value) ? [] : {};
  if (!value || typeof value !== 'object') return out;
  for (const [key, val] of Object.entries(value)) {
    const world = Number(key);
    const outKey = Number.isInteger(world) && world >= 0 && String(world) === key
      ? insertedWorldIndex(world)
      : key;
    out[outKey] = val;
  }
  return out;
}

function migrateWorldInsertion(save) {
  const s = { ...defaults(), ...(save && typeof save === 'object' ? save : {}) };
  s.stars = remapCompositeWorldKeys(s.stars);
  s.keys = remapCompositeWorldKeys(s.keys);
  s.secretStars = remapWorldIndexMap(s.secretStars);
  s.secretUnlocked = remapWorldIndexMap(s.secretUnlocked);
  s.bossBeaten = remapWorldIndexMap(s.bossBeaten);

  const unlocked = { ...defaults().unlocked, ...(s.unlocked || {}) };
  const world = Number(unlocked.world);
  unlocked.world = Number.isFinite(world) ? insertedWorldIndex(world) : 0;
  s.unlocked = unlocked;
  return s;
}

function parseSave(raw) {
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : null;
  } catch (e) {
    return null;
  }
}

function migrateSaveBlob(raw, opts = {}) {
  const parsed = parseSave(raw);
  if (!parsed) return null;
  const s = { ...defaults(), ...parsed };
  if (opts.grandfatherBosses) {
    s.unlocked = { ...defaults().unlocked, ...(s.unlocked || {}) };
    if (!s.bossBeaten || typeof s.bossBeaten !== 'object') s.bossBeaten = {};
    const frontier = Number(s.unlocked.world) || 0;
    for (let w = 0; w < frontier; w++) s.bossBeaten[w] = true;
  }
  return migrateWorldInsertion(s);
}

function migrateProfileBlob(id) {
  const nextKey = blobKey(id);
  const prevKey = oldBlobKey(id);
  try {
    if (localStorage.getItem(nextKey)) {
      localStorage.removeItem(prevKey);
      return;
    }
    const old = localStorage.getItem(prevKey);
    if (old === null) return;
    const migrated = migrateSaveBlob(old);
    if (migrated) localStorage.setItem(nextKey, JSON.stringify(migrated));
    localStorage.removeItem(prevKey);
  } catch (e) { /* start fresh if storage is unavailable/corrupt */ }
}

function migrateProfileBlobs() {
  for (const p of profiles.list) migrateProfileBlob(p.id);
}

function saveProfiles() {
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  } catch (e) {
    /* private mode etc. — play on without persistence */
  }
}

// Load (or first-run create) the profiles index. On first run, any legacy
// single-save blob becomes profile #1 so existing progress is preserved;
// legacy keys are removed afterwards so they can't resurrect.
function ensureProfiles() {
  if (profiles) return;
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      if (p && Array.isArray(p.list) && p.list.length) {
        profiles = p;
        // Heal a dangling active pointer (e.g. interrupted delete).
        if (!profiles.list.some((e) => e.id === profiles.active)) {
          profiles.active = profiles.list[0].id;
          saveProfiles();
        }
        migrateProfileBlobs();
        return;
      }
    }
  } catch (e) { /* corrupt index — rebuild below */ }

  const id = newId();
  profiles = { active: id, list: [{ id, name: '' }] };
  try {
    let blob = localStorage.getItem(KEY_BASE);
    if (!blob) {
      const oldGame = localStorage.getItem(OLD_KEY_BASE);
      if (oldGame) {
        const migrated = migrateSaveBlob(oldGame);
        if (migrated) blob = JSON.stringify(migrated);
      }
    }
    if (!blob) {
      const old = OLD_KEYS.map((k) => localStorage.getItem(k)).find(Boolean);
      if (old) {
        const migrated = migrateSaveBlob(old, { grandfatherBosses: true });
        if (migrated) blob = JSON.stringify(migrated);
      }
    }
    if (blob) localStorage.setItem(blobKey(id), blob);
    for (const k of [KEY_BASE, OLD_KEY_BASE, ...OLD_KEYS]) localStorage.removeItem(k);
  } catch (e) { /* start fresh */ }
  saveProfiles();
}

export function listProfiles() {
  ensureProfiles();
  return profiles.list.map((p) => ({ ...p }));
}

export function activeProfileId() {
  ensureProfiles();
  return profiles.active;
}

export function activeProfileName() {
  ensureProfiles();
  const p = profiles.list.find((e) => e.id === profiles.active);
  return (p && p.name) || '';
}

// Read a profile's save for display (player-select cards) without loading
// it into the live state.
export function peekProfile(id) {
  try {
    const raw = localStorage.getItem(blobKey(id));
    if (raw) return { ...defaults(), ...JSON.parse(raw) };
  } catch (e) { /* fall through */ }
  return defaults();
}

// Create a blank save, make it active. Returns the id, or null at the cap.
export function createProfile(name = '') {
  ensureProfiles();
  if (profiles.list.length >= MAX_PROFILES) return null;
  const id = newId();
  profiles.list.push({ id, name: name || '' });
  profiles.active = id;
  state = applyDevAudioDefaults(defaults());
  save();
  saveProfiles();
  return id;
}

// Persist the new active profile and load its blob into the live state.
export function selectProfile(id) {
  ensureProfiles();
  if (!profiles.list.some((e) => e.id === id)) return state;
  profiles.active = id;
  saveProfiles();
  return load();
}

// Remove a profile's blob + index entry. Deleting the active profile
// activates another one; the last remaining profile is never deleted —
// it's reset to a fresh save instead.
export function deleteProfile(id) {
  ensureProfiles();
  if (!profiles.list.some((e) => e.id === id)) return;
  try {
    localStorage.removeItem(blobKey(id));
    localStorage.removeItem(oldBlobKey(id));
  } catch (e) { /* ignore */ }
  if (profiles.list.length <= 1) {
    state = applyDevAudioDefaults(defaults());
    save();
    return;
  }
  const wasActive = profiles.active === id;
  profiles.list = profiles.list.filter((e) => e.id !== id);
  if (wasActive) profiles.active = profiles.list[0].id;
  saveProfiles();
  if (wasActive) load();
}

export function renameProfile(id, name) {
  ensureProfiles();
  const p = profiles.list.find((e) => e.id === id);
  if (p) {
    p.name = name || '';
    saveProfiles();
  }
}

// ---------- active save ----------

export function load() {
  ensureProfiles();
  try {
    const raw = localStorage.getItem(blobKey(profiles.active));
    state = raw ? { ...defaults(), ...JSON.parse(raw) } : defaults();
  } catch (e) {
    state = defaults();
  }
  return applyDevAudioDefaults(state);
}

export function save() {
  ensureProfiles();
  try {
    localStorage.setItem(blobKey(profiles.active), JSON.stringify(state));
  } catch (e) {
    /* private mode etc. — play on without persistence */
  }
}

export function get() {
  return state;
}

export function wordStats(word) {
  return state.words[word.toLowerCase()] || null;
}

function ensureWord(word) {
  const k = word.toLowerCase();
  if (!state.words[k]) {
    state.words[k] = { seen: 0, correct: 0, firstTryCorrect: 0, missed: 0 };
  }
  return state.words[k];
}

// Called once per challenge resolution (when the word is finally passed).
export function recordWordResult(word, firstTry) {
  const s = ensureWord(word);
  s.seen++;
  s.correct++;
  if (firstTry) s.firstTryCorrect++;
  else s.missed++;
  ensureStats().wordsRead++;
  save();
}

// Called when a challenge is failed outright (out of tries): the word was
// seen and missed, but never answered correctly.
export function recordWordMiss(word) {
  const s = ensureWord(word);
  s.seen++;
  s.missed++;
  save();
}

export function isMastered(word) {
  return isMasteredStats(wordStats(word));
}

export function addCoins(n) {
  state.coins = Math.max(0, state.coins + n);
  if (n > 0) ensureStats().coinsEarned += n; // lifetime total survives spending
  save();
  return state.coins;
}

export function addGems(n) {
  state.gems = Math.max(0, state.gems + n);
  save();
  return state.gems;
}

// ---------- lifetime stats (finale screen) ----------

// Saves from before the stats field (or partial shapes) heal here.
function ensureStats() {
  state.stats = { ...defaults().stats, ...(state.stats || {}) };
  return state.stats;
}

// Accumulated by main.js while a run is live; flushed every few seconds.
export function addPlaySeconds(sec) {
  ensureStats().playSeconds += sec;
  save();
}

// Everything the completion stats screen shows, in one snapshot.
// wordsRead/coinsEarned fall back to derived/current values so saves that
// predate the counters still show their real progress.
export function totals() {
  const stats = ensureStats();
  let starSum = 0;
  let levelsCompleted = 0;
  for (const v of Object.values(state.stars)) {
    if (v > 0) levelsCompleted++;
    starSum += v;
  }
  let secretsFound = 0;
  for (const v of Object.values(state.secretStars)) {
    if (v > 0) {
      secretsFound++;
      starSum += v;
    }
  }
  let correct = 0;
  let firstTry = 0;
  let seen = 0;
  for (const w of Object.values(state.words)) {
    correct += w.correct;
    firstTry += w.firstTryCorrect;
    seen += w.seen;
  }
  return {
    levelsCompleted,
    totalStars: starSum,
    secretsFound,
    wordsRead: Math.max(stats.wordsRead, correct),
    accuracy: seen ? Math.round((firstTry / seen) * 100) : 100,
    coinsEarned: Math.max(stats.coinsEarned, state.coins),
    playSeconds: stats.playSeconds,
  };
}

// ---------- game completion ----------

export function isGameCompleted() {
  return !!state.gameCompleted;
}

export function markGameCompleted() {
  state.gameCompleted = true;
  save();
}

export function getStars(worldIdx, levelIdx) {
  return state.stars[`${worldIdx}-${levelIdx}`] || 0;
}

export function setStars(worldIdx, levelIdx, stars) {
  const k = `${worldIdx}-${levelIdx}`;
  state.stars[k] = Math.max(state.stars[k] || 0, stars);
  save();
}

export function getSecretStars(worldIdx) {
  return state.secretStars[worldIdx] || 0;
}

export function setSecretStars(worldIdx, stars) {
  state.secretStars[worldIdx] = Math.max(state.secretStars[worldIdx] || 0, stars);
  save();
}

// ---------- golden keys / secret levels ----------

export function hasKey(worldIdx, levelIdx) {
  return !!state.keys[`${worldIdx}-${levelIdx}`];
}

// Persists forever, even across replays of the level.
export function foundKey(worldIdx, levelIdx) {
  state.keys[`${worldIdx}-${levelIdx}`] = true;
  state.secretUnlocked[worldIdx] = true;
  save();
}

export function isSecretUnlocked(worldIdx) {
  return state.devUnlocked || !!state.secretUnlocked[worldIdx];
}

// The level whose key first opened this world's secret path (for the map).
export function keyAnchorLevel(worldIdx) {
  for (const k of Object.keys(state.keys)) {
    const [w, l] = k.split('-').map(Number);
    if (w === worldIdx) return l;
  }
  return null;
}

// ---------- house ----------

export function ownsHouseItem(id) {
  return !!(state.house && state.house.owned && state.house.owned[id]);
}

// Atomically pay for and own an item. Returns false (and changes nothing)
// if it's already owned or the balance can't cover it.
export function buyHouseItem(id, cost, currency) {
  if (ownsHouseItem(id)) return false;
  if (currency === 'gems') {
    if (state.gems < cost) return false;
    state.gems -= cost;
  } else {
    if (state.coins < cost) return false;
    state.coins -= cost;
  }
  if (!state.house) state.house = { owned: {} };
  state.house.owned[id] = true;
  save();
  return true;
}

// Own an item without paying — completion rewards (the hero trophy and the
// boss-dropped decorations). Idempotent.
export function grantHouseItem(id) {
  if (!state.house) state.house = { owned: {} };
  state.house.owned[id] = true;
  save();
}

export function houseItemCount() {
  return state.house ? Object.keys(state.house.owned || {}).length : 0;
}

// ---------- house ❗ nudge ----------
// "News" = a trophy/decoration earned since the last house visit, or a shop
// item that became affordable since then. Visiting the house clears both.

export function markHouseNews(id) {
  if (!state.house) state.house = { owned: {} };
  if (!state.house.unseen) state.house.unseen = {};
  state.house.unseen[id] = true;
  save();
}

export function clearHouseNews() {
  if (!state.house) state.house = { owned: {} };
  state.house.unseen = {};
  state.house.seenCoins = state.coins;
  state.house.seenGems = state.gems;
  save();
}

export function hasHouseNews(items = []) {
  const h = state.house || {};
  if (h.unseen && Object.keys(h.unseen).length) return true;
  // Saves from before this field existed treat everything affordable as new,
  // which doubles as the first-visit nudge.
  const seenCoins = h.seenCoins || 0;
  const seenGems = h.seenGems || 0;
  return items.some((it) => {
    if (it.earned !== undefined || ownsHouseItem(it.id)) return false;
    const wallet = it.currency === 'gems' ? state.gems : state.coins;
    const seen = it.currency === 'gems' ? seenGems : seenCoins;
    return wallet >= it.cost && seen < it.cost;
  });
}

// ---------- bosses ----------

export function isBossBeaten(worldIdx) {
  return !!state.bossBeaten[worldIdx];
}

export function beatBoss(worldIdx) {
  state.bossBeaten[worldIdx] = true;
  save();
}

// ---------- progression ----------

// Advance the unlock frontier after finishing a level. Finishing the last
// regular level opens the boss slot (u.level === count); beating the boss
// (levelIdx === count) opens the next world.
export function completeLevel(worldIdx, levelIdx, worldLevelCounts) {
  const u = state.unlocked;
  if (worldIdx === u.world && levelIdx === u.level) {
    if (levelIdx + 1 <= worldLevelCounts[worldIdx]) {
      u.level++;
    } else if (worldIdx + 1 < worldLevelCounts.length) {
      u.world++;
      u.level = 0;
    }
  }
  save();
}

export function isLevelUnlocked(worldIdx, levelIdx) {
  if (state.devUnlocked) return true;
  const u = state.unlocked;
  return worldIdx < u.world || (worldIdx === u.world && levelIdx <= u.level);
}

export function isWorldUnlocked(worldIdx) {
  return state.devUnlocked || worldIdx <= state.unlocked.world;
}

// Wipe the active profile's save (testing; legacy keys too, so the
// first-run migration doesn't resurrect them into a new index).
export function reset() {
  ensureProfiles();
  try {
    for (const k of [
      blobKey(profiles.active), oldBlobKey(profiles.active),
      KEY_BASE, OLD_KEY_BASE, ...OLD_KEYS,
    ]) {
      localStorage.removeItem(k);
    }
  } catch (e) { /* ignore */ }
  state = defaults();
}

// Settings toggle. Unlike devUnlockAll it leaves bossBeaten alone, so
// turning it back off restores the real progression frontier.
export function setDevUnlocked(on) {
  state.devUnlocked = !!on;
  save();
}

export function devUnlockAll(worldCount = 6) {
  state.devUnlocked = true; // also unlocks secrets via isSecretUnlocked
  for (let w = 0; w < worldCount; w++) state.bossBeaten[w] = true;
  save();
}

export function setCharacterPart(part, idx) {
  // Merge over defaults so blobs saved before this field existed still work.
  state.character = { ...defaults().character, ...state.character, [part]: idx };
  save();
}

export function markRepeatTipSeen() {
  state.seenRepeatTip = true;
  save();
}

export function setSound(on) {
  state.sound = on;
  save();
}

export function setMusic(on) {
  state.music = on;
  save();
}

export function setMic(on) {
  state.mic = on;
  save();
}
