// Pure word-selection logic: no DOM, no three.js.
import { describe, it, expect } from 'vitest';
import {
  DOLCH, WORLDS, chunkIntoLevels, shuffle, buildRunQueue, pickDistractors,
  getSecretWords, getBossWords,
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
        expect(lvl.length).toBeLessThanOrEqual(6);
      }
    }
  });

  it('handles a list smaller than the target', () => {
    expect(chunkIntoLevels(['a', 'b'], 5)).toEqual([['a', 'b']]);
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
    const tier = DOLCH[WORLDS[0].tier];
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
});
