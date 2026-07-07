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
