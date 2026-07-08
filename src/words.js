// Dolch sight word lists + world/level structure.
// Pure data + logic: no three.js, no DOM, so it can be sanity-checked in node.

export const DOLCH = {
  prePrimer: [
    'a', 'and', 'away', 'big', 'blue', 'can', 'come', 'down', 'find', 'for',
    'funny', 'go', 'help', 'here', 'I', 'in', 'is', 'it', 'jump', 'little',
    'look', 'make', 'me', 'my', 'not', 'one', 'play', 'red', 'run', 'said',
    'see', 'the', 'three', 'to', 'two', 'up', 'we', 'where', 'yellow', 'you',
  ],
  primer: [
    'all', 'am', 'are', 'at', 'ate', 'be', 'black', 'brown', 'but', 'came',
    'did', 'do', 'eat', 'four', 'get', 'good', 'have', 'he', 'into', 'like',
    'must', 'new', 'no', 'now', 'on', 'our', 'out', 'please', 'pretty', 'ran',
    'ride', 'saw', 'say', 'she', 'so', 'soon', 'that', 'there', 'they', 'this',
    'too', 'under', 'want', 'was', 'well', 'went', 'what', 'white', 'who',
    'will', 'with', 'yes',
  ],
  first: [
    'after', 'again', 'an', 'any', 'as', 'ask', 'by', 'could', 'every', 'fly',
    'from', 'give', 'going', 'had', 'has', 'her', 'him', 'his', 'how', 'just',
    'know', 'let', 'live', 'may', 'of', 'old', 'once', 'open', 'over', 'put',
    'round', 'some', 'stop', 'take', 'thank', 'them', 'then', 'think', 'walk',
    'were', 'when',
  ],
  second: [
    'always', 'around', 'because', 'been', 'before', 'best', 'both', 'buy',
    'call', 'cold', 'does', "don't", 'fast', 'first', 'five', 'found', 'gave',
    'goes', 'green', 'its', 'made', 'many', 'off', 'or', 'pull', 'read',
    'right', 'sing', 'sit', 'sleep', 'tell', 'their', 'these', 'those', 'upon',
    'us', 'use', 'very', 'wash', 'which', 'why', 'wish', 'work', 'would',
    'write', 'your',
  ],
  third: [
    'about', 'better', 'bring', 'carry', 'clean', 'cut', 'done', 'draw',
    'drink', 'eight', 'fall', 'far', 'full', 'got', 'grow', 'hold', 'hot',
    'hurt', 'if', 'keep', 'kind', 'laugh', 'light', 'long', 'much', 'myself',
    'never', 'only', 'own', 'pick', 'seven', 'shall', 'show', 'six', 'small',
    'start', 'ten', 'today', 'together', 'try', 'warm',
  ],
};

// Split a list into levels of ~5 words, as evenly as possible.
// Short levels (~60-90s) fit a young kid's attention span and make
// map-progress payoffs come faster.
export function chunkIntoLevels(list, target = 5) {
  const n = Math.max(1, Math.round(list.length / target));
  const levels = [];
  let start = 0;
  for (let i = 0; i < n; i++) {
    const size = Math.ceil((list.length - start) / (n - i));
    levels.push(list.slice(start, start + size));
    start += size;
  }
  return levels;
}

export const WORLDS = [
  { name: 'Pasta Plains', emoji: '🍝', tier: 'prePrimer' },
  { name: 'Waffle Desert', emoji: '🧇', tier: 'primer' },
  { name: 'Snowy Peaks', emoji: '❄️', tier: 'first' },
  { name: 'Crystal Caves', emoji: '💎', tier: 'second' },
  { name: 'Pepper Volcano', emoji: '🌶️', tier: 'third' },
].map((w) => ({ ...w, levels: chunkIntoLevels(DOLCH[w.tier]) }));

export function getLevelWords(worldIdx, levelIdx) {
  return WORLDS[worldIdx].levels[levelIdx];
}

// A word is mastered after 3 lifetime first-try correct answers.
// stats: {seen, correct, firstTryCorrect, missed} or null.
export function isMasteredStats(stats) {
  return !!stats && stats.firstTryCorrect >= 3;
}

const TIER_ORDER = Object.keys(DOLCH);

// The Dolch tier after a world's tier (null past the last tier). Used to
// promote strong readers to new material before the next world unlocks.
export function getNextTierWords(worldIdx) {
  const next = TIER_ORDER[TIER_ORDER.indexOf(WORLDS[worldIdx].tier) + 1];
  return next ? DOLCH[next] : null;
}

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// How often a mastered word still shows up for spaced-repetition review
// (~1 run in 4) instead of ceding its slot to new material.
export const MASTERED_REVIEW_CHANCE = 0.25;

// Build the run queue: level words shuffled, but words with lifetime misses
// (per stored stats) move to the front so they get practiced first.
// Mastered words mostly sit runs out; each skipped one is replaced by an
// unmastered word from opts.promotionPool (the next Dolch tier) so strong
// readers keep seeing new material. Without a pool the mastered word stays
// in — the run never shrinks. Kept mastered words go to the back as review.
// statsFor(word) -> {seen, correct, firstTryCorrect, missed} or null.
export function buildRunQueue(levelWords, statsFor, opts = {}) {
  const { promotionPool = null, rng = Math.random } = opts;
  const shuffled = shuffle(levelWords);
  const missed = [];
  const rest = [];
  const mastered = [];
  for (const w of shuffled) {
    const s = statsFor ? statsFor(w) : null;
    if (isMasteredStats(s)) mastered.push(w);
    else if (s && s.missed > 0) missed.push(w);
    else rest.push(w);
  }
  // Promotion candidates keep tier order (earliest words first), so the
  // same few new words recur run after run until they're learned.
  const pool = (promotionPool || []).filter(
    (w) => !levelWords.includes(w) && !isMasteredStats(statsFor ? statsFor(w) : null)
  );
  const review = [];
  const promoted = [];
  for (const w of mastered) {
    if (pool.length && rng() >= MASTERED_REVIEW_CHANCE) promoted.push(pool.shift());
    else review.push(w);
  }
  return missed.concat(shuffle(rest.concat(promoted)), review);
}

// Distractor pool for a run: the level's own words plus any promoted
// cross-tier words in the queue, so mixed-in words stay coherent — they
// can appear as distractors for each other, not just as targets.
export function buildDistractorPool(levelWords, queue) {
  const seen = new Set(levelWords);
  const pool = levelWords.slice();
  for (const w of queue) {
    if (!seen.has(w)) {
      seen.add(w);
      pool.push(w);
    }
  }
  return pool;
}

// Tier list for the distractor fallback: the world's own tier, extended
// with the next tier when the queue actually contains promoted words.
export function getRunTierList(worldIdx, queue) {
  const tier = DOLCH[WORLDS[worldIdx].tier];
  const next = getNextTierWords(worldIdx);
  if (next && queue.some((w) => !tier.includes(w) && next.includes(w))) {
    return tier.concat(next);
  }
  return tier;
}

// Pick 2 distractors for the target, preferring similar-length words from the
// level pool; fall back to the whole tier list if the pool is too small.
export function pickDistractors(target, pool, tierList) {
  const seen = new Set([target.toLowerCase()]);
  let candidates = pool.filter((w) => !seen.has(w.toLowerCase()));
  if (candidates.length < 2 && tierList) {
    for (const w of tierList) {
      if (!seen.has(w.toLowerCase()) && !candidates.includes(w)) candidates.push(w);
    }
  }
  candidates = shuffle(candidates);
  candidates.sort(
    (a, b) => Math.abs(a.length - target.length) - Math.abs(b.length - target.length)
  );
  // Take from the closest-length half, then shuffle so it's not deterministic.
  const nearest = candidates.slice(0, Math.max(4, 2));
  return shuffle(nearest).slice(0, 2);
}

// The 10 hardest words in a world's tier by lifetime first-try ratio.
// Words never seen rank last; gaps fill with random picks from the tier.
// statsFor(word) -> {seen, correct, firstTryCorrect, missed} or null.
export function getSecretWords(worldIdx, statsFor) {
  const tier = DOLCH[WORLDS[worldIdx].tier];
  const scored = tier.map((w) => {
    const s = statsFor ? statsFor(w) : null;
    const ratio = s && s.seen > 0 ? s.firstTryCorrect / s.seen : 2; // 2 = unseen
    return { w, ratio, r: Math.random() };
  });
  scored.sort((a, b) => a.ratio - b.ratio || a.r - b.r);
  const hard = scored.filter((s) => s.ratio <= 1).slice(0, 10).map((s) => s.w);
  const rest = shuffle(tier.filter((w) => !hard.includes(w)));
  while (hard.length < 10 && rest.length) hard.push(rest.pop());
  return hard;
}

// ~5 review words for a world's boss battle: the tier's hardest by lifetime
// first-try ratio (unseen words fill in at random).
export function getBossWords(worldIdx, statsFor) {
  return getSecretWords(worldIdx, statsFor).slice(0, 5);
}

export const PRAISE = ['Great job!', 'You got it!', 'Awesome!', 'Super reading!'];

// Extra celebration when a word challenge is nailed on the first try.
export const PRAISE_FIRST_TRY = 'Wow! First try! Super reading!';
