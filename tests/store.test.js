// store.js persistence + word-stat recording. The module keeps state at
// module scope and talks to localStorage, so each test gets a fresh
// in-memory localStorage and a fresh module instance.
import { describe, it, expect, beforeEach, vi } from 'vitest';

function makeLocalStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k),
    clear: () => m.clear(),
  };
}

let store;

beforeEach(async () => {
  globalThis.localStorage = makeLocalStorage();
  vi.resetModules();
  store = await import('../src/store.js');
  store.load();
});

describe('recordWordResult', () => {
  it('records a first-try correct', () => {
    store.recordWordResult('jump', true);
    expect(store.wordStats('jump')).toEqual(
      { seen: 1, correct: 1, firstTryCorrect: 1, missed: 0 }
    );
  });

  it('records a non-first-try as seen + correct + missed', () => {
    store.recordWordResult('jump', false);
    expect(store.wordStats('jump')).toEqual(
      { seen: 1, correct: 1, firstTryCorrect: 0, missed: 1 }
    );
  });

  it('accumulates across resolutions', () => {
    store.recordWordResult('jump', true);
    store.recordWordResult('jump', false);
    store.recordWordResult('jump', true);
    expect(store.wordStats('jump')).toEqual(
      { seen: 3, correct: 3, firstTryCorrect: 2, missed: 1 }
    );
  });

  it('is case-insensitive', () => {
    store.recordWordResult('The', true);
    expect(store.wordStats('the')).toEqual(
      { seen: 1, correct: 1, firstTryCorrect: 1, missed: 0 }
    );
  });

  it('recordWordMiss counts seen + missed but never correct', () => {
    store.recordWordMiss('jump');
    expect(store.wordStats('jump')).toEqual(
      { seen: 1, correct: 0, firstTryCorrect: 0, missed: 1 }
    );
    store.recordWordResult('jump', true);
    expect(store.wordStats('jump')).toEqual(
      { seen: 2, correct: 1, firstTryCorrect: 1, missed: 1 }
    );
  });

  it('persists to localStorage across a module reload', async () => {
    store.recordWordResult('blue', false);
    vi.resetModules();
    const fresh = await import('../src/store.js');
    fresh.load();
    expect(fresh.wordStats('blue')).toEqual(
      { seen: 1, correct: 1, firstTryCorrect: 0, missed: 1 }
    );
  });
});

describe('wordStats / isMastered', () => {
  it('returns null for a never-seen word', () => {
    expect(store.wordStats('zebra')).toBeNull();
  });

  it('masters a word after 3 first-try corrects', () => {
    store.recordWordResult('red', true);
    store.recordWordResult('red', true);
    expect(store.isMastered('red')).toBe(false);
    store.recordWordResult('red', true);
    expect(store.isMastered('red')).toBe(true);
  });

  it('misses do not count toward mastery', () => {
    for (let i = 0; i < 5; i++) store.recordWordResult('go', false);
    expect(store.isMastered('go')).toBe(false);
  });
});

describe('currencies', () => {
  it('addCoins accumulates and never goes below zero', () => {
    expect(store.addCoins(5)).toBe(5);
    expect(store.addCoins(-3)).toBe(2);
    expect(store.addCoins(-10)).toBe(0);
  });

  it('addGems accumulates', () => {
    expect(store.addGems(1)).toBe(1);
    expect(store.addGems(2)).toBe(3);
  });
});

describe('lifetime stats / totals', () => {
  it('starts empty', () => {
    expect(store.totals()).toEqual({
      levelsCompleted: 0,
      totalStars: 0,
      secretsFound: 0,
      wordsRead: 0,
      accuracy: 100,
      coinsEarned: 0,
      playSeconds: 0,
    });
  });

  it('counts words read and first-try accuracy', () => {
    store.recordWordResult('red', true);
    store.recordWordResult('blue', true);
    store.recordWordResult('go', false);
    store.recordWordMiss('up'); // failed outright: seen but not read
    const t = store.totals();
    expect(t.wordsRead).toBe(3);
    expect(t.accuracy).toBe(50); // 2 first-try of 4 seen
  });

  it('sums stars and levels across regular + secret levels', () => {
    store.setStars(0, 0, 3);
    store.setStars(0, 1, 2);
    store.setSecretStars(0, 1);
    const t = store.totals();
    expect(t.levelsCompleted).toBe(2);
    expect(t.secretsFound).toBe(1);
    expect(t.totalStars).toBe(6);
  });

  it('coinsEarned survives spending', () => {
    store.addCoins(100);
    store.grantHouseItem('rug'); // ownership without payment
    expect(store.buyHouseItem('chair', 60, 'coins')).toBe(true);
    const t = store.totals();
    expect(store.get().coins).toBe(40);
    expect(t.coinsEarned).toBe(100);
  });

  it('accumulates play seconds', () => {
    store.addPlaySeconds(30);
    store.addPlaySeconds(45);
    expect(store.totals().playSeconds).toBe(75);
  });

  it('falls back to derived values for saves that predate the counters', async () => {
    store.recordWordResult('red', true);
    store.addCoins(50);
    // Simulate an old blob: strip the stats field and reload.
    const key = `wordRunner.v3:${store.activeProfileId()}`;
    const blob = JSON.parse(localStorage.getItem(key));
    delete blob.stats;
    localStorage.setItem(key, JSON.stringify(blob));
    vi.resetModules();
    const fresh = await import('../src/store.js');
    fresh.load();
    const t = fresh.totals();
    expect(t.wordsRead).toBe(1); // derived from per-word stats
    expect(t.coinsEarned).toBe(50); // falls back to the balance
  });
});

describe('game completion', () => {
  it('marks completion once and persists it', async () => {
    expect(store.isGameCompleted()).toBe(false);
    store.markGameCompleted();
    expect(store.isGameCompleted()).toBe(true);
    vi.resetModules();
    const fresh = await import('../src/store.js');
    fresh.load();
    expect(fresh.isGameCompleted()).toBe(true);
  });

  it('grantHouseItem owns without paying and is idempotent', () => {
    store.grantHouseItem('herotrophy');
    store.grantHouseItem('herotrophy');
    expect(store.ownsHouseItem('herotrophy')).toBe(true);
    expect(store.get().coins).toBe(0);
    expect(store.houseItemCount()).toBe(1);
  });
});
