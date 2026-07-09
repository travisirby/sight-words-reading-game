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

describe('save migration', () => {
  it('moves old v1 world-indexed progress past the inserted swamp exactly once', async () => {
    globalThis.localStorage = makeLocalStorage();
    const id = 'kid1';
    const v1Key = `superKidsSightWords.v1:${id}`;
    const v2Key = `superKidsSightWords.v2:${id}`;
    const alwaysStats = { seen: 2, correct: 2, firstTryCorrect: 1, missed: 1 };

    localStorage.setItem('superKidsSightWords.profiles.v1', JSON.stringify({
      active: id,
      list: [{ id, name: 'Reader' }],
    }));
    localStorage.setItem(v1Key, JSON.stringify({
      coins: 42,
      words: { always: alwaysStats },
      stars: { '2-1': 2, '3-2': 3, '4-0': 1 },
      keys: { '3-2': true, '4-0': true },
      secretUnlocked: { 3: true, 4: true },
      secretStars: [0, 0, 0, 2, 3],
      bossBeaten: { 2: true, 3: true, 4: true },
      unlocked: { world: 4, level: 1 },
      house: { owned: { rug: true }, unseen: { rug: true }, seenCoins: 5, seenGems: 0 },
    }));

    vi.resetModules();
    const migrated = await import('../src/store.js');
    migrated.load();

    expect(localStorage.getItem(v1Key)).toBeNull();
    expect(localStorage.getItem(v2Key)).not.toBeNull();
    expect(migrated.get().unlocked).toEqual({ world: 5, level: 1 });
    expect(migrated.isWorldUnlocked(3)).toBe(true);

    expect(migrated.getStars(2, 1)).toBe(2);
    expect(migrated.getStars(3, 2)).toBe(0);
    expect(migrated.getStars(4, 2)).toBe(3);
    expect(migrated.getStars(5, 0)).toBe(1);
    expect(migrated.hasKey(4, 2)).toBe(true);
    expect(migrated.hasKey(5, 0)).toBe(true);
    expect(migrated.isSecretUnlocked(3)).toBe(false);
    expect(migrated.isSecretUnlocked(4)).toBe(true);
    expect(migrated.isSecretUnlocked(5)).toBe(true);
    expect(migrated.getSecretStars(3)).toBe(0);
    expect(migrated.getSecretStars(4)).toBe(2);
    expect(migrated.getSecretStars(5)).toBe(3);
    expect(migrated.isBossBeaten(3)).toBe(false);
    expect(migrated.isBossBeaten(4)).toBe(true);
    expect(migrated.isBossBeaten(5)).toBe(true);
    expect(migrated.wordStats('always')).toEqual(alwaysStats);
    expect(migrated.ownsHouseItem('rug')).toBe(true);

    const firstBlob = JSON.parse(localStorage.getItem(v2Key));
    vi.resetModules();
    const reloaded = await import('../src/store.js');
    reloaded.load();
    const secondBlob = JSON.parse(localStorage.getItem(v2Key));

    expect(secondBlob.stars).toEqual(firstBlob.stars);
    expect(secondBlob.keys).toEqual(firstBlob.keys);
    expect(secondBlob.secretUnlocked).toEqual(firstBlob.secretUnlocked);
    expect(secondBlob.secretStars).toEqual(firstBlob.secretStars);
    expect(secondBlob.bossBeaten).toEqual(firstBlob.bossBeaten);
    expect(secondBlob.unlocked).toEqual(firstBlob.unlocked);
    expect(Object.keys(secondBlob.stars).sort()).toEqual(['2-1', '4-2', '5-0']);
    expect(reloaded.getStars(4, 2)).toBe(3);
    expect(reloaded.getStars(5, 0)).toBe(1);
  });
});

describe('house music', () => {
  it('defaults to the cozy house track', () => {
    expect(store.get().houseMusic).toBe('house');
  });

  it('persists the picked track across a reload', async () => {
    store.setHouseMusic('waffle');
    vi.resetModules();
    const reloaded = await import('../src/store.js');
    reloaded.load();
    expect(reloaded.get().houseMusic).toBe('waffle');
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
    const key = `superKidsSightWords.v2:${store.activeProfileId()}`;
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
