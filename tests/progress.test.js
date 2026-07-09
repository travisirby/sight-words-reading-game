// Pure parent-progress helpers: no DOM, no localStorage.
import { describe, it, expect } from 'vitest';
import {
  wordRatio, wordAccuracyPct, scoreWordEntries, worldProgress,
  buildProgressReport, buildExportPayload, formatPlayTime,
} from '../src/progress.js';
import { isMasteredStats, WORLDS } from '../src/words.js';

describe('wordRatio / wordAccuracyPct', () => {
  it('returns null for unseen or missing stats', () => {
    expect(wordRatio(null)).toBeNull();
    expect(wordRatio({ seen: 0, firstTryCorrect: 0 })).toBeNull();
    expect(wordAccuracyPct(null)).toBeNull();
  });

  it('computes first-try rate', () => {
    expect(wordRatio({ seen: 4, firstTryCorrect: 3 })).toBeCloseTo(0.75);
    expect(wordAccuracyPct({ seen: 4, firstTryCorrect: 3 })).toBe(75);
  });
});

describe('scoreWordEntries', () => {
  it('skips unseen words and flags mastery', () => {
    const entries = scoreWordEntries({
      jump: { seen: 3, correct: 3, firstTryCorrect: 3, missed: 0 },
      the: { seen: 2, correct: 1, firstTryCorrect: 0, missed: 2 },
      blue: { seen: 0, correct: 0, firstTryCorrect: 0, missed: 0 },
    });
    expect(entries).toHaveLength(2);
    const jump = entries.find((e) => e.word === 'jump');
    const the = entries.find((e) => e.word === 'the');
    expect(jump.mastered).toBe(true);
    expect(isMasteredStats(jump)).toBe(true);
    expect(the.mastered).toBe(false);
    expect(the.accuracy).toBe(0);
  });
});

describe('buildProgressReport', () => {
  const words = {
    jump: { seen: 5, correct: 5, firstTryCorrect: 4, missed: 1 }, // mastered
    look: { seen: 4, correct: 4, firstTryCorrect: 3, missed: 1 }, // mastered
    where: { seen: 3, correct: 2, firstTryCorrect: 0, missed: 3 }, // hard
    yellow: { seen: 2, correct: 2, firstTryCorrect: 1, missed: 1 }, // mid
  };

  it('splits mastered vs needs-practice and sorts practice hardest-first', () => {
    const report = buildProgressReport({
      words,
      playerName: 'Sam',
      unlocked: { world: 0, level: 2 },
      totals: {
        levelsCompleted: 2,
        totalStars: 5,
        secretsFound: 0,
        wordsRead: 13,
        accuracy: 62,
        coinsEarned: 40,
        playSeconds: 600,
      },
    });
    expect(report.playerName).toBe('Sam');
    expect(report.masteredCount).toBe(2);
    expect(report.practiceCount).toBe(2);
    expect(report.seenCount).toBe(4);
    expect(report.mastered.map((e) => e.word)).toEqual(['jump', 'look']);
    // Hardest first: where (0%) then yellow (50%).
    expect(report.practice.map((e) => e.word)).toEqual(['where', 'yellow']);
  });

  it('caps the practice list and reports overflow', () => {
    const many = {};
    for (let i = 0; i < 25; i++) {
      many[`w${i}`] = { seen: 2, correct: 1, firstTryCorrect: 0, missed: 2 };
    }
    const report = buildProgressReport({ words: many, practiceLimit: 10 });
    expect(report.practice).toHaveLength(10);
    expect(report.practiceOverflow).toBe(15);
    expect(report.practiceCount).toBe(25);
  });

  it('handles an empty save', () => {
    const report = buildProgressReport({});
    expect(report.seenCount).toBe(0);
    expect(report.mastered).toEqual([]);
    expect(report.practice).toEqual([]);
    expect(report.byWorld).toHaveLength(WORLDS.length);
    expect(report.byWorld.every((w) => w.seen === 0 && w.mastered === 0)).toBe(true);
  });
});

describe('worldProgress', () => {
  it('counts practiced + mastered words per world', () => {
    // Pasta Plains (world 0) includes 'jump' and 'the' from pre-primer.
    const words = {
      jump: { seen: 3, correct: 3, firstTryCorrect: 3, missed: 0 },
      the: { seen: 1, correct: 1, firstTryCorrect: 0, missed: 1 },
    };
    const rows = worldProgress(words);
    expect(rows[0].seen).toBe(2);
    expect(rows[0].mastered).toBe(1);
    expect(rows[0].total).toBeGreaterThan(0);
    // Other worlds untouched.
    expect(rows.slice(1).every((w) => w.seen === 0)).toBe(true);
  });
});

describe('buildExportPayload', () => {
  it('wraps save + report with metadata', () => {
    const payload = buildExportPayload({
      playerName: 'Sam',
      profileId: 'abc',
      state: {
        coins: 10,
        gems: 2,
        words: { jump: { seen: 1, correct: 1, firstTryCorrect: 1, missed: 0 } },
        stars: { '0-0': 2 },
        unlocked: { world: 0, level: 1 },
        keys: {},
        secretUnlocked: {},
        secretStars: {},
        bossBeaten: {},
        stats: { playSeconds: 30, wordsRead: 1, coinsEarned: 10 },
        gameCompleted: false,
        character: { skin: 0 },
        house: { owned: {} },
      },
      report: { seenCount: 1 },
    });
    expect(payload.app).toBe('super-kids-sight-words');
    expect(payload.version).toBe(1);
    expect(payload.playerName).toBe('Sam');
    expect(payload.profileId).toBe('abc');
    expect(payload.exportedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    expect(payload.progress.seenCount).toBe(1);
    expect(payload.save.coins).toBe(10);
    expect(payload.save.words.jump.seen).toBe(1);
    // No live audio/settings noise in the export.
    expect(payload.save.sound).toBeUndefined();
  });
});

describe('formatPlayTime', () => {
  it('formats short and long sessions', () => {
    expect(formatPlayTime(10)).toBe('Just started');
    expect(formatPlayTime(90)).toBe('2 min');
    expect(formatPlayTime(3600)).toBe('1h');
    expect(formatPlayTime(3660)).toBe('1h 1m');
  });
});
