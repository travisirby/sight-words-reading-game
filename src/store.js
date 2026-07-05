// localStorage persistence. Single JSON blob under wordRunner.v1.

const KEY = 'wordRunner.v1';

const defaults = () => ({
  coins: 0,
  gems: 0,
  sound: true,
  mic: true,
  devUnlocked: false,
  // words[word] = { seen, correct, firstTryCorrect, missed }
  words: {},
  // stars['w-l'] = 0..3
  stars: {},
  // frontier of progression
  unlocked: { world: 0, level: 0 },
});

let state = defaults();

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) state = { ...defaults(), ...JSON.parse(raw) };
  } catch (e) {
    state = defaults();
  }
  return state;
}

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
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

// Advance the unlock frontier after finishing a level.
export function completeLevel(worldIdx, levelIdx, worldLevelCounts) {
  const u = state.unlocked;
  if (worldIdx === u.world && levelIdx === u.level) {
    if (levelIdx + 1 < worldLevelCounts[worldIdx]) {
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

export function devUnlockAll() {
  state.devUnlocked = true;
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
