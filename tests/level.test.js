import { describe, it, expect } from 'vitest';
import { generateLevel, PALETTES, PROPS, SECRET_THEME } from '../src/level.js';

describe('generateLevel', () => {
  it('places a golden key only when asked', () => {
    const withKey = generateLevel({ seed: 42, wordCount: 5, theme: 0, hasKey: true });
    expect(withKey.key).not.toBeNull();
    const without = generateLevel({ seed: 42, wordCount: 5, theme: 0, hasKey: false });
    expect(without.key).toBeNull();
  });

  it('secret levels are hazard-free bonus runs: no critters, no key', () => {
    for (const seed of [7, 104, 493]) {
      const lvl = generateLevel({ seed, wordCount: 6, theme: SECRET_THEME, secret: true });
      expect(lvl.critters).toHaveLength(0);
      expect(lvl.key).toBeNull();
      expect(lvl.secret).toBe(true);
    }
  });

  it('secret levels pack noticeably more coins than regular ones', () => {
    const secret = generateLevel({ seed: 7, wordCount: 6, theme: SECRET_THEME, secret: true });
    const regular = generateLevel({ seed: 1, wordCount: 6, theme: 0 });
    expect(secret.coins.length).toBeGreaterThan(regular.coins.length);
  });

  it('has a dedicated secret-theme palette and prop set', () => {
    expect(PALETTES[SECRET_THEME]).toBeDefined();
    expect(PALETTES[SECRET_THEME].night).toBe(true);
    expect(typeof PROPS[SECRET_THEME]).toBe('function');
  });

  it('rotates bridge events into regular levels', () => {
    const lvl = generateLevel({ seed: 1, wordCount: 6, theme: 0 });
    const types = lvl.events.map((e) => e.type);
    expect(types).toContain('blocks');
    expect(types).toContain('doors');
    expect(types).toContain('bridge');
  });

  it('places a nine-column ravine beneath each word bridge', () => {
    const lvl = generateLevel({ seed: 1, wordCount: 6, theme: 0 });
    const bridge = lvl.events.find((e) => e.type === 'bridge');
    expect(bridge).toBeDefined();
    expect(bridge.bridgeEndX - bridge.bridgeX + 1).toBe(9);
    for (let x = bridge.bridgeX; x <= bridge.bridgeEndX; x++) {
      expect(lvl.groundY[x]).toBe(bridge.groundY - 4);
    }
    expect(lvl.groundY[bridge.bridgeX - 1]).toBe(bridge.groundY);
    expect(lvl.groundY[bridge.bridgeEndX + 1]).toBe(bridge.groundY);
  });

  it('keeps secret levels on their original hazard-free event cadence', () => {
    const lvl = generateLevel({
      seed: 7, wordCount: 6, theme: SECRET_THEME, secret: true,
    });
    expect(lvl.events.every((e) => e.type === 'blocks' || e.type === 'doors')).toBe(true);
  });
});
