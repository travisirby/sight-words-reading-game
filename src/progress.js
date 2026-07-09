// Parent-facing reading progress: pure helpers over save word-stats.
// No DOM / three.js — unit-tested in tests/progress.test.js.

import { isMasteredStats, WORLDS, getWorldWords } from './words.js';

// First-try success rate in 0..1, or null when the word has never been seen.
export function wordRatio(stats) {
  if (!stats || !stats.seen) return null;
  return stats.firstTryCorrect / stats.seen;
}

// Percent for display (0–100). Unseen words return null.
export function wordAccuracyPct(stats) {
  const r = wordRatio(stats);
  return r === null ? null : Math.round(r * 100);
}

// One scored row per practiced word (seen > 0). Sorted hardest-first for
// the "needs practice" list: lower first-try ratio, then more misses.
export function scoreWordEntries(words) {
  const entries = [];
  if (!words || typeof words !== 'object') return entries;
  for (const [word, stats] of Object.entries(words)) {
    if (!stats || !stats.seen) continue;
    const ratio = wordRatio(stats);
    entries.push({
      word,
      seen: stats.seen | 0,
      correct: stats.correct | 0,
      firstTryCorrect: stats.firstTryCorrect | 0,
      missed: stats.missed | 0,
      ratio,
      accuracy: Math.round(ratio * 100),
      mastered: isMasteredStats(stats),
    });
  }
  return entries;
}

function byHardest(a, b) {
  return a.ratio - b.ratio
    || b.missed - a.missed
    || b.seen - a.seen
    || a.word.localeCompare(b.word);
}

function byName(a, b) {
  return a.word.localeCompare(b.word);
}

// Per-world rollup for the progress screen's world chips.
export function worldProgress(words, worlds = WORLDS) {
  return worlds.map((world, worldIdx) => {
    const list = getWorldWords(worldIdx);
    let seen = 0;
    let mastered = 0;
    for (const w of list) {
      const s = words && (words[w.toLowerCase()] || words[w]);
      if (s && s.seen > 0) {
        seen++;
        if (isMasteredStats(s)) mastered++;
      }
    }
    return {
      worldIdx,
      name: world.name,
      emoji: world.emoji,
      total: list.length,
      seen,
      mastered,
    };
  });
}

// Full snapshot the parent UI renders. totals is store.totals() shape.
export function buildProgressReport({
  words = {},
  totals = null,
  playerName = '',
  unlocked = null,
  worlds = WORLDS,
  practiceLimit = 20,
} = {}) {
  const entries = scoreWordEntries(words);
  const mastered = entries.filter((e) => e.mastered).sort(byName);
  const practice = entries.filter((e) => !e.mastered).sort(byHardest);
  const byWorld = worldProgress(words, worlds);

  return {
    playerName: playerName || '',
    unlocked: unlocked ? { ...unlocked } : null,
    totals: totals || {
      levelsCompleted: 0,
      totalStars: 0,
      secretsFound: 0,
      wordsRead: 0,
      accuracy: 100,
      coinsEarned: 0,
      playSeconds: 0,
    },
    seenCount: entries.length,
    masteredCount: mastered.length,
    practiceCount: practice.length,
    // Cap the hard list so the panel stays scannable on an iPad.
    practice: practice.slice(0, practiceLimit),
    practiceOverflow: Math.max(0, practice.length - practiceLimit),
    mastered,
    byWorld,
  };
}

// Portable backup of the active profile for "Export" (localStorage only
// otherwise). Caller supplies the live state fields.
export function buildExportPayload({
  playerName = '',
  profileId = '',
  state,
  report,
} = {}) {
  return {
    app: 'super-kids-sight-words',
    version: 1,
    exportedAt: new Date().toISOString(),
    playerName: playerName || '',
    profileId: profileId || '',
    progress: report || null,
    save: state
      ? {
          coins: state.coins,
          gems: state.gems,
          words: state.words,
          stars: state.stars,
          unlocked: state.unlocked,
          keys: state.keys,
          secretUnlocked: state.secretUnlocked,
          secretStars: state.secretStars,
          bossBeaten: state.bossBeaten,
          stats: state.stats,
          gameCompleted: state.gameCompleted,
          character: state.character,
          house: state.house,
        }
      : null,
  };
}

export function formatPlayTime(seconds) {
  const s = Math.max(0, Math.round(Number(seconds) || 0));
  if (s < 30) return 'Just started';
  const m = Math.round(s / 60);
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rem = m % 60;
  return rem ? `${h}h ${rem}m` : `${h}h`;
}
