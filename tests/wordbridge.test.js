import { beforeEach, describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';

vi.mock('../src/audio.js', () => ({
  sfxCorrect: vi.fn(),
  sfxWrong: vi.fn(),
  sfxBonk: vi.fn(),
  sfxDoorOpen: vi.fn(),
  sfxStarGrab: vi.fn(),
  sfxPop: vi.fn(),
  speak: vi.fn(),
}));

import { BridgeEvent } from '../src/wordevents.js';

function fakeCanvas() {
  const ctx = {
    fillRect: vi.fn(),
    strokeRect: vi.fn(),
    fillText: vi.fn(),
    measureText: (text) => ({ width: String(text).length * 32 }),
  };
  return { width: 0, height: 0, getContext: () => ctx };
}

function setup() {
  const scene = new THREE.Scene();
  const level = { data: { platforms: [] } };
  const event = new BridgeEvent(scene, level, {
    x: 10,
    bridgeX: 26,
    bridgeEndX: 34,
    groundY: 2,
    word: 'find',
    distractors: ['for', 'funny'],
  });
  const api = {
    effects: {
      confetti: vi.fn(),
      sparkle: vi.fn(),
      floatText: vi.fn(),
    },
    addCoins: vi.fn(),
    bounceBack: vi.fn(),
    praise: vi.fn(),
    praiseFirstTry: vi.fn(),
    onCorrect: vi.fn(),
    onWrong: vi.fn(),
    onFail: vi.fn(),
  };
  return { event, level, api };
}

describe('BridgeEvent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    globalThis.document = { createElement: () => fakeCanvas() };
  });

  it('resolves when the kid lands on the target switch and adds a walkable bridge', () => {
    const { event, level, api } = setup();
    const target = event.switches.find((s) => s.word === event.word);
    const player = { x: target.baseX, grounded: false };

    event.update(0.1, player, api);
    player.grounded = true;
    event.update(0.1, player, api);

    expect(event.done).toBe(true);
    expect(level.data.platforms).toContainEqual(expect.objectContaining({
      x0: 26, x1: 34, y: 2, wordBridge: true,
    }));
    expect(api.onCorrect).toHaveBeenCalledWith(true);
    expect(api.addCoins).toHaveBeenCalledWith(4);

    event.update(2, player, api);
    expect(event.bridgePieces.every((p) => Math.abs(p.mesh.position.y - 1.7) < 0.001)).toBe(true);

    event.dispose();
    expect(level.data.platforms).toHaveLength(0);
  });

  it('reveals the answer and builds the bridge after three misses', () => {
    const { event, level, api } = setup();

    event.debugResolve(false, api);
    event.debugResolve(false, api);
    event.debugResolve(false, api);

    expect(event.done).toBe(true);
    expect(event.attempts).toBe(3);
    expect(api.onWrong).toHaveBeenCalledTimes(3);
    expect(api.onFail).toHaveBeenCalledTimes(1);
    expect(api.onCorrect).not.toHaveBeenCalled();
    expect(level.data.platforms).toHaveLength(1);

    event.dispose();
  });
});
