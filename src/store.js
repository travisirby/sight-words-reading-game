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

const defaults = () => ({
  coins: 0,
  gems: 0,
  sound: true,
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
  // house.owned[itemId] = true for every furniture/pet purchase
  house: { owned: {} },
});

let state = defaults();

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
        const s = { ...defaults(), ...JSON.parse(old) };
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
    state = raw ? { ...defaults(), ...JSON.parse(raw) } : defaults();
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
