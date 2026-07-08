// Pure word-selection logic: no DOM, no three.js.
import { describe, it, expect } from 'vitest';
import {
  DOLCH, WORLDS, chunkIntoLevels, shuffle, buildRunQueue, pickDistractors,
  getSecretWords, getBossWords, isMasteredStats, getNextTierWords,
  buildDistractorPool, getRunTierList, getWorldWords,
} from '../src/words.js';

const sorted = (a) => a.slice().sort();

describe('chunkIntoLevels', () => {
  it('preserves every word in order', () => {
    const list = DOLCH.prePrimer;
    const levels = chunkIntoLevels(list);
    expect(levels.flat()).toEqual(list);
  });

  it('makes levels of roughly the target size', () => {
    for (const list of Object.values(DOLCH)) {
      for (const lvl of chunkIntoLevels(list, 5)) {
        expect(lvl.length).toBeGreaterThanOrEqual(4);
        expect(lvl.length).toBeLessThanOrEqual(8);
      }
    }
  });

  it('caps the number of levels at 7 (8 map stops with the castle)', () => {
    for (const list of Object.values(DOLCH)) {
      expect(chunkIntoLevels(list, 5).length).toBeLessThanOrEqual(7);
    }
    expect(chunkIntoLevels(DOLCH.primer, 5)).toHaveLength(7);
  });

  it('handles a list smaller than the target', () => {
    expect(chunkIntoLevels(['a', 'b'], 5)).toEqual([['a', 'b']]);
  });
});

describe('WORLDS', () => {
  it('inserts Purple Cabbage Swamp as the 4th world', () => {
    expect(WORLDS).toHaveLength(6);
    expect(WORLDS.map((w) => w.name)).toEqual([
      'Pasta Plains',
      'Waffle Desert',
      'Snowcones Islands',
      'Purple Cabbage Swamp',
      'Crystal Caves',
      'Pepper Volcano',
    ]);
  });

  it('splits the second tier between swamp and caves without overlap', () => {
    const secondLevels = chunkIntoLevels(DOLCH.second);
    const swampLevels = WORLDS[3].levels;
    const caveLevels = WORLDS[4].levels;
    const swampWords = getWorldWords(3);
    const caveWords = getWorldWords(4);
    const combined = swampWords.concat(caveWords);

    expect(swampLevels).toEqual(secondLevels.slice(0, 4));
    expect(caveLevels).toEqual(secondLevels.slice(4));
    expect(combined).toEqual(DOLCH.second);
    expect(combined).toHaveLength(46);
    expect(new Set(combined).size).toBe(46);
    for (const w of swampWords) expect(caveWords).not.toContain(w);
  });

  it('keeps every world level chunk within the size bounds', () => {
    for (const world of WORLDS) {
      expect(world.levels.length).toBeLessThanOrEqual(7);
      for (const level of world.levels) {
        expect(level.length).toBeGreaterThanOrEqual(4);
        expect(level.length).toBeLessThanOrEqual(8);
      }
    }
  });
});

describe('shuffle', () => {
  it('returns the same multiset without mutating the input', () => {
    const input = ['a', 'b', 'c', 'd', 'e'];
    const copy = input.slice();
    const out = shuffle(input);
    expect(input).toEqual(copy);
    expect(sorted(out)).toEqual(sorted(input));
  });
});

describe('buildRunQueue', () => {
  const words = ['red', 'blue', 'jump', 'play', 'said'];

  it('contains exactly the level words', () => {
    expect(sorted(buildRunQueue(words, null))).toEqual(sorted(words));
  });

  it('puts words with lifetime misses before clean words', () => {
    const missed = new Set(['jump', 'said']);
    const statsFor = (w) => (missed.has(w)
      ? { seen: 3, correct: 3, firstTryCorrect: 1, missed: 2 }
      : { seen: 3, correct: 3, firstTryCorrect: 3, missed: 0 });
    for (let i = 0; i < 20; i++) {
      const q = buildRunQueue(words, statsFor);
      expect(sorted(q)).toEqual(sorted(words));
      expect(new Set(q.slice(0, 2))).toEqual(missed);
    }
  });

  it('works without stats (statsFor null or returning null)', () => {
    expect(sorted(buildRunQueue(words, () => null))).toEqual(sorted(words));
  });

  const masteredStats = { seen: 5, correct: 5, firstTryCorrect: 4, missed: 0 };
  const freshStats = { seen: 1, correct: 1, firstTryCorrect: 1, missed: 0 };
  // Level words mastered, everything else (the promotion pool) unseen.
  const levelMastered = (w) => (words.includes(w) ? masteredStats : null);

  it('keeps all mastered words when there is no promotion pool', () => {
    const q = buildRunQueue(words, levelMastered);
    expect(sorted(q)).toEqual(sorted(words));
  });

  it('replaces sat-out mastered words with next-tier words, same length', () => {
    const pool = ['all', 'am', 'are', 'at', 'ate', 'be'];
    // rng always above the review chance: every mastered word sits out
    const q = buildRunQueue(words, levelMastered, {
      promotionPool: pool,
      rng: () => 0.99,
    });
    expect(q).toHaveLength(words.length);
    expect(sorted(q)).toEqual(sorted(pool.slice(0, words.length)));
  });

  it('keeps mastered words for review when rng falls under the chance', () => {
    const q = buildRunQueue(words, levelMastered, {
      promotionPool: ['all', 'am', 'are', 'at', 'ate'],
      rng: () => 0, // always below MASTERED_REVIEW_CHANCE
    });
    expect(sorted(q)).toEqual(sorted(words));
  });

  it('mastered words appear roughly 1 run in 4 over many runs', () => {
    const statsFor = (w) => (w === 'red' ? masteredStats : null);
    let kept = 0;
    const runs = 2000;
    for (let i = 0; i < runs; i++) {
      const q = buildRunQueue(['red'], statsFor, { promotionPool: DOLCH.primer });
      if (q.includes('red')) kept++;
    }
    expect(kept / runs).toBeGreaterThan(0.18);
    expect(kept / runs).toBeLessThan(0.33);
  });

  it('never promotes duplicates of level words or already-mastered pool words', () => {
    const statsFor = (w) => (w === 'all' || words.includes(w) ? masteredStats : null);
    const q = buildRunQueue(words, statsFor, {
      promotionPool: ['red', 'all', 'am', 'are', 'at', 'ate', 'be'],
      rng: () => 0.99,
    });
    // 'red' is a level word, 'all' is mastered — neither may fill a slot
    expect(sorted(q)).toEqual(sorted(['am', 'are', 'at', 'ate', 'be']));
  });

  it('runs out of pool gracefully: leftover mastered words stay in', () => {
    const q = buildRunQueue(words, levelMastered, {
      promotionPool: ['am', 'at'],
      rng: () => 0.99,
    });
    expect(q).toHaveLength(words.length);
    expect(sorted(q.slice(0, 2))).toEqual(['am', 'at']);
    for (const w of q.slice(2)) expect(words).toContain(w);
  });

  it('still front-loads missed words when mastered words are mixed in', () => {
    const statsFor = (w) => {
      if (w === 'jump') return { seen: 3, correct: 3, firstTryCorrect: 1, missed: 2 };
      if (w === 'red') return masteredStats;
      return freshStats;
    };
    for (let i = 0; i < 20; i++) {
      const q = buildRunQueue(words, statsFor, {
        promotionPool: DOLCH.primer,
        rng: () => 0.99,
      });
      expect(q[0]).toBe('jump');
      expect(q).not.toContain('red');
    }
  });
});

describe('isMasteredStats', () => {
  it('needs 3 lifetime first-try corrects', () => {
    expect(isMasteredStats(null)).toBe(false);
    expect(isMasteredStats({ seen: 5, correct: 5, firstTryCorrect: 2, missed: 3 })).toBe(false);
    expect(isMasteredStats({ seen: 3, correct: 3, firstTryCorrect: 3, missed: 0 })).toBe(true);
  });
});

describe('getNextTierWords', () => {
  it('returns the words introduced by the following world', () => {
    const backHalfOfSecond = chunkIntoLevels(DOLCH.second).slice(4).flat();
    expect(getNextTierWords(0)).toEqual(DOLCH.primer);
    expect(getNextTierWords(3)).toEqual(getWorldWords(4));
    expect(getNextTierWords(3)).toEqual(backHalfOfSecond);
  });

  it('returns null past the last world', () => {
    expect(getNextTierWords(WORLDS.length - 1)).toBeNull();
  });
});

describe('buildDistractorPool / getRunTierList', () => {
  const level = ['red', 'blue', 'jump'];

  it('appends promoted queue words to the level pool without duplicates', () => {
    const pool = buildDistractorPool(level, ['jump', 'always', 'because']);
    expect(pool).toEqual(['red', 'blue', 'jump', 'always', 'because']);
  });

  it('extends the tier list only when the queue holds next-tier words', () => {
    expect(getRunTierList(0, ['red', 'blue'])).toEqual(DOLCH.prePrimer);
    const extended = getRunTierList(0, ['red', 'all']);
    expect(extended).toEqual(DOLCH.prePrimer.concat(DOLCH.primer));
  });

  it('promoted words can serve as distractors for each other', () => {
    const queue = ['red', 'all', 'am'];
    const pool = buildDistractorPool(level, queue);
    const tier = getRunTierList(0, queue);
    for (let i = 0; i < 50; i++) {
      const d = pickDistractors('all', pool, tier);
      expect(d).toHaveLength(2);
      expect(d).not.toContain('all');
      for (const w of d) expect(pool.concat(tier)).toContain(w);
    }
  });
});

describe('pickDistractors', () => {
  const pool = ['red', 'blue', 'jump', 'play', 'said', 'three'];
  const tier = DOLCH.prePrimer;

  it('returns 2 distinct words that are never the target', () => {
    for (let i = 0; i < 50; i++) {
      const d = pickDistractors('jump', pool, tier);
      expect(d).toHaveLength(2);
      expect(d[0]).not.toBe(d[1]);
      expect(d).not.toContain('jump');
    }
  });

  it('excludes the target case-insensitively', () => {
    for (let i = 0; i < 50; i++) {
      const d = pickDistractors('I', ['I', 'a', 'we', 'my'], tier);
      expect(d.map((w) => w.toLowerCase())).not.toContain('i');
    }
  });

  it('falls back to the tier list when the pool is too small', () => {
    for (let i = 0; i < 50; i++) {
      const d = pickDistractors('red', ['red'], tier);
      expect(d).toHaveLength(2);
      expect(d).not.toContain('red');
      for (const w of d) expect(tier).toContain(w);
    }
  });
});

describe('getSecretWords / getBossWords', () => {
  it('returns 10 (5 for boss) distinct words from the world tier', () => {
    const tier = getWorldWords(0);
    const secret = getSecretWords(0, () => null);
    expect(secret).toHaveLength(10);
    expect(new Set(secret).size).toBe(10);
    for (const w of secret) expect(tier).toContain(w);
    expect(getBossWords(0, () => null)).toHaveLength(5);
  });

  it('ranks low first-try-ratio words first', () => {
    const hard = new Set(['a', 'and', 'away']);
    const statsFor = (w) => (hard.has(w)
      ? { seen: 4, correct: 4, firstTryCorrect: 0, missed: 4 }
      : { seen: 4, correct: 4, firstTryCorrect: 4, missed: 0 });
    const secret = getSecretWords(0, statsFor);
    for (const w of hard) expect(secret.slice(0, 3)).toContain(w);
  });

  it('draws swamp secret and boss words only from the swamp half', () => {
    const swamp = getWorldWords(3);
    const caves = getWorldWords(4);
    const statsFor = (w) => (swamp.includes(w)
      ? { seen: 4, correct: 4, firstTryCorrect: 0, missed: 4 }
      : { seen: 4, correct: 4, firstTryCorrect: 4, missed: 0 });
    const secret = getSecretWords(3, statsFor);
    const boss = getBossWords(3, statsFor);

    for (const w of secret) expect(swamp).toContain(w);
    for (const w of boss) expect(swamp).toContain(w);
    for (const w of caves) {
      expect(secret).not.toContain(w);
      expect(boss).not.toContain(w);
    }
  });
});
