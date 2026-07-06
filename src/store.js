// localStorage persistence. One JSON blob per player profile under
// wordRunner.v3:<id>, plus a tiny profiles index under wordRunner.profiles.v1
// so several kids can share a device. Migrates from the pre-profile
// wordRunner.v3 (and v2/v1: same shapes; v3 adds bossBeaten). The unlock
// frontier gains a virtual boss slot: u.level === levelCount means
// "castle playable".

const KEY_BASE = 'wordRunner.v3';
const OLD_KEYS = ['wordRunner.v2', 'wordRunner.v1'];
const PROFILES_KEY = 'wordRunner.profiles.v1';
export const MAX_PROFILES = 6;

const MINUTE_MS = 60 * 1000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

export const WORD_REVIEW_INTERVALS_MS = [
  5 * MINUTE_MS,
  30 * MINUTE_MS,
  4 * HOUR_MS,
  DAY_MS,
  3 * DAY_MS,
  7 * DAY_MS,
  14 * DAY_MS,
];

const MAX_REVIEW_STAGE = WORD_REVIEW_INTERVALS_MS.length - 1;

const defaults = () => ({
  coins: 0,
  gems: 0,
  sound: true,
  mic: true,
  devUnlocked: false,
  // words[word] = {
  //   seen, correct, firstTryCorrect, missed,
  //   lastSeenAt, lastCorrectAt, reviewStage, dueAt
  // }
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
  // house.owned[itemId] = true for every furniture/pet purchase
  house: { owned: {} },
});

let state = defaults();

const clampReviewStage = (stage) => {
  const n = Number(stage);
  if (!Number.isFinite(n)) return null;
  return Math.max(0, Math.min(MAX_REVIEW_STAGE, Math.floor(n)));
};

const count = (value) => {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0;
};

const timestamp = (value) => {
  const n = Number(value);
  return Number.isFinite(n) && n >= 0 ? n : null;
};

export function reviewDelayForStage(stage) {
  const s = clampReviewStage(stage);
  return WORD_REVIEW_INTERVALS_MS[s === null ? 0 : s];
}

export function nextReviewDueAt(stage, now = Date.now()) {
  const t = timestamp(now) ?? Date.now();
  return t + reviewDelayForStage(stage);
}

function inferReviewStage(firstTryCorrect, missed) {
  if (missed > 0 && firstTryCorrect < 3) return 0;
  return Math.min(MAX_REVIEW_STAGE, firstTryCorrect);
}

export function normalizeWordStat(raw = null) {
  const base = raw && typeof raw === 'object' ? raw : {};
  const seen = count(base.seen);
  const firstTryCorrect = Math.min(count(base.firstTryCorrect), seen);
  const missed = Math.min(count(base.missed), seen);
  const correct = Math.min(Math.max(count(base.correct), firstTryCorrect), seen);
  const existingStage = clampReviewStage(base.reviewStage);
  const reviewStage = existingStage ?? inferReviewStage(firstTryCorrect, missed);
  const storedDueAt = timestamp(base.dueAt);

  return {
    seen,
    correct,
    firstTryCorrect,
    missed,
    lastSeenAt: timestamp(base.lastSeenAt),
    lastCorrectAt: timestamp(base.lastCorrectAt),
    reviewStage,
    // Old saves had no dueAt. Grandfather weak missed words into the review
    // pool without forcing already-mastered words to flood the next level.
    dueAt: storedDueAt ?? (seen > 0 && missed > 0 && firstTryCorrect < 3 ? 0 : null),
  };
}

export function normalizeWordStats(words = {}) {
  const normalized = {};
  if (!words || typeof words !== 'object') return normalized;
  for (const [word, stat] of Object.entries(words)) {
    if (!word) continue;
    normalized[word.toLowerCase()] = normalizeWordStat(stat);
  }
  return normalized;
}

function normalizeSave(raw) {
  const s = { ...defaults(), ...(raw && typeof raw === 'object' ? raw : {}) };
  s.words = normalizeWordStats(s.words);
  return s;
}

// ---------- profiles ----------

let profiles = null; // { active: id, list: [{ id, name }] } — name may be ''

const blobKey = (id) => `${KEY_BASE}:${id}`;
const newId = () => Math.random().toString(36).slice(2, 8);

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
        return;
      }
    }
  } catch (e) { /* corrupt index — rebuild below */ }

  const id = newId();
  profiles = { active: id, list: [{ id, name: '' }] };
  try {
    let blob = localStorage.getItem(KEY_BASE);
    if (!blob) {
      const old = OLD_KEYS.map((k) => localStorage.getItem(k)).find(Boolean);
      if (old) {
        const s = normalizeSave(JSON.parse(old));
        // Grandfather old saves: a world you already passed means its boss
        // (which didn't exist yet) counts as beaten.
        for (let w = 0; w < s.unlocked.world; w++) s.bossBeaten[w] = true;
        blob = JSON.stringify(s);
      }
    }
    if (blob) localStorage.setItem(blobKey(id), blob);
    for (const k of [KEY_BASE, ...OLD_KEYS]) localStorage.removeItem(k);
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
    if (raw) return normalizeSave(JSON.parse(raw));
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
  state = defaults();
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
  try { localStorage.removeItem(blobKey(id)); } catch (e) { /* ignore */ }
  if (profiles.list.length <= 1) {
    state = defaults();
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
    state = raw ? normalizeSave(JSON.parse(raw)) : defaults();
  } catch (e) {
    state = defaults();
  }
  return state;
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
  const k = word.toLowerCase();
  if (!state.words[k]) return null;
  state.words[k] = normalizeWordStat(state.words[k]);
  return state.words[k];
}

function ensureWord(word) {
  const k = word.toLowerCase();
  if (!state.words[k]) {
    state.words[k] = normalizeWordStat();
  } else {
    state.words[k] = normalizeWordStat(state.words[k]);
  }
  return state.words[k];
}

// Called once per challenge resolution (when the word is finally passed).
export function recordWordResult(word, firstTry, now = Date.now()) {
  const t = timestamp(now) ?? Date.now();
  const s = ensureWord(word);
  s.seen++;
  s.correct++;
  s.lastSeenAt = t;
  s.lastCorrectAt = t;
  if (firstTry) {
    s.firstTryCorrect++;
    s.reviewStage = Math.min(MAX_REVIEW_STAGE, s.reviewStage + 1);
  } else {
    s.missed++;
    s.reviewStage = 0;
  }
  s.dueAt = nextReviewDueAt(s.reviewStage, t);
  save();
}

export function isMastered(word) {
  const s = wordStats(word);
  return !!s && s.firstTryCorrect >= 3;
}

export function addCoins(n) {
  state.coins = Math.max(0, state.coins + n);
  save();
  return state.coins;
}

export function addGems(n) {
  state.gems = Math.max(0, state.gems + n);
  save();
  return state.gems;
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

export function houseItemCount() {
  return state.house ? Object.keys(state.house.owned || {}).length : 0;
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
    for (const k of [blobKey(profiles.active), KEY_BASE, ...OLD_KEYS]) {
      localStorage.removeItem(k);
    }
  } catch (e) { /* ignore */ }
  state = defaults();
}

export function devUnlockAll(worldCount = 5) {
  state.devUnlocked = true; // also unlocks secrets via isSecretUnlocked
  for (let w = 0; w < worldCount; w++) state.bossBeaten[w] = true;
  save();
}

export function setCharacterPart(part, idx) {
  // Merge over defaults so blobs saved before this field existed still work.
  state.character = { ...defaults().character, ...state.character, [part]: idx };
  save();
}

export function setSound(on) {
  state.sound = on;
  save();
}

export function setMic(on) {
  state.mic = on;
  save();
}
