// Pipeline round-trip tests: VoxScene writer -> .vox binary -> parser ->
// mesher. Guards the axis swap, palette mapping, hidden-face culling,
// greedy merging, and corner AO against silent regressions.

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { VoxScene } from '../scripts/vox/voxwriter.mjs';
import { parseVox } from '../scripts/vox/voxparse.mjs';
import { meshPart, voxToCells, srgbToLinear } from '../scripts/vox/mesher.mjs';
import { bakeModel } from '../scripts/bake-vox.mjs';

let dir;
beforeAll(() => { dir = mkdtempSync(join(tmpdir(), 'vox-test-')); });
afterAll(() => { rmSync(dir, { recursive: true, force: true }); });

// Round-trips a scene through save + parse and returns game-space cells
// per part (the exact transform bake-vox.mjs applies).
function roundTrip(scene) {
  const out = scene.save(dir);
  const meta = JSON.parse(readFileSync(join(out, 'model.json'), 'utf8'));
  return Object.fromEntries(meta.parts.map((p) => {
    const { voxels, palette } = parseVox(readFileSync(join(out, p.file)));
    return [p.name, voxToCells(voxels, palette)];
  }));
}

function keys(cells) { return [...cells.keys()].sort(); }

// Relative offsets survive even though the writer shifts everything into a
// non-negative grid: normalize both sets to their own minimum corner.
function normalized(cells) {
  const pts = [...cells.keys()].map((k) => k.split(',').map(Number));
  const min = [0, 1, 2].map((a) => Math.min(...pts.map((p) => p[a])));
  return pts.map((p) => p.map((v, a) => v - min[a]).join(',')).sort();
}

describe('writer -> parser round trip', () => {
  it('preserves voxel layout across the y-up/z-up swap', () => {
    const s = new VoxScene({ name: 'rt-shape', voxelSize: 0.1 });
    const p = s.part('main');
    const C = s.color('#ff8040');
    // An asymmetric L so any axis flip or swap changes the normalized set.
    p.set(0, 0, 0, C); p.set(1, 0, 0, C); p.set(2, 0, 0, C);
    p.set(0, 1, 0, C); p.set(0, 0, 1, C); p.set(0, 2, 0, C);
    const { main } = roundTrip(s);
    expect(normalized(main)).toEqual(
      ['0,0,0', '1,0,0', '2,0,0', '0,1,0', '0,0,1', '0,2,0'].map((k) => k).sort()
    );
  });

  it('keeps multi-part models in one shared frame', () => {
    const s = new VoxScene({ name: 'rt-parts', voxelSize: 0.1 });
    const C = s.color('#ffffff');
    s.part('a').set(0, 0, 0, C);
    s.part('b').set(3, 2, 1, C);
    const { a, b } = roundTrip(s);
    // Parts are written on the union grid, so the relative offset holds.
    const pa = keys(a)[0].split(',').map(Number);
    const pb = keys(b)[0].split(',').map(Number);
    expect(pb.map((v, i) => v - pa[i])).toEqual([3, 2, 1]);
  });

  it('round-trips palette colors exactly (as linear floats)', () => {
    const s = new VoxScene({ name: 'rt-color', voxelSize: 0.1 });
    const p = s.part('main');
    p.set(0, 0, 0, s.color('#12ab7f'));
    const { main } = roundTrip(s);
    const [r, g, b] = [...main.values()][0];
    expect(r).toBeCloseTo(srgbToLinear(0x12), 10);
    expect(g).toBeCloseTo(srgbToLinear(0xab), 10);
    expect(b).toBeCloseTo(srgbToLinear(0x7f), 10);
  });
});

describe('mesher', () => {
  const white = [1, 1, 1];

  it('meshes a lone voxel as 6 unshaded quads', () => {
    const cells = new Map([['0,0,0', white]]);
    const m = meshPart(cells);
    expect(m.indices.length / 3).toBe(12); // 6 faces x 2 tris
    expect(m.positions.length / 3).toBe(24);
    // Nothing occludes anything: every vertex at full brightness.
    expect(new Set(m.colors)).toEqual(new Set([255]));
  });

  it('greedy-merges a flat slab into one quad per face', () => {
    const cells = new Map();
    for (let x = 0; x < 4; x++) for (let z = 0; z < 4; z++) cells.set(`${x},0,${z}`, white);
    const m = meshPart(cells);
    // 6 merged quads (top, bottom, 4 sides) = 12 tris, not 4x4x12.
    expect(m.indices.length / 3).toBe(12);
  });

  it('culls faces between touching voxels', () => {
    const cells = new Map([['0,0,0', white], ['1,0,0', white]]);
    const m = meshPart(cells);
    // 2 voxels = 12 faces, minus the 2 shared hidden ones; the 4 coplanar
    // side pairs merge, so: 1x2 top/bottom/front/back merged (4 quads) +
    // 2 end caps = 6 quads.
    expect(m.indices.length / 3).toBe(12);
  });

  it('darkens corners occluded by a neighbor (baked AO)', () => {
    // A step: the top face of the base voxel has corners against the riser.
    const cells = new Map([['0,0,0', white], ['1,1,0', white]]);
    const m = meshPart(cells);
    const shaded = m.colors.filter((c) => c < 255);
    expect(shaded.length).toBeGreaterThan(0);
    // Occlusion always uses the AO brightness ramp, never arbitrary values.
    for (const c of shaded) expect([Math.round(0.55 * 255), Math.round(0.72 * 255), Math.round(0.86 * 255)]).toContain(c);
  });

  it('pivoted parts reassemble to exactly the unpivoted world positions', () => {
    // Same two-part model twice; one gives the "limb" part a pivot. After
    // baking, (position + origin) * voxelSize + offset must agree vertex
    // for vertex — the pivot may only move the part's local origin.
    const author = (name, pivot) => {
      const s = new VoxScene({ name, voxelSize: 0.1 });
      const C = s.color('#88aaff');
      s.part('torso').box(-2, 0, -1, 2, 4, 1, C);
      const limb = s.part('limb', pivot ? { pivot } : {});
      limb.box(3, 1, -1, 4, 4, 1, C);
      return bakeModel(s.save(dir), dir);
    };
    const plain = author('pv-plain', null);
    const pivoted = author('pv-pivot', [3.5, 4, 0]); // "shoulder" atop the limb
    for (let pi = 0; pi < 2; pi++) {
      const a = plain.parts[pi], b = pivoted.parts[pi];
      expect(b.positions.length).toBe(a.positions.length);
      for (let i = 0; i < a.positions.length; i++) {
        const axis = i % 3;
        const wa = (a.positions[i] + a.origin[axis]) * 0.1 + a.offset[axis];
        const wb = (b.positions[i] + b.origin[axis]) * 0.1 + b.offset[axis];
        expect(wb).toBeCloseTo(wa, 10);
      }
    }
    // And the pivoted limb's local origin really sits at the shoulder:
    // its offset is the shoulder's world position, not zero.
    expect(pivoted.parts[1].offset).not.toEqual([0, 0, 0]);
    expect(plain.parts[1].offset).toEqual([0, 0, 0]);
  });

  it('never merges across differing AO', () => {
    // Slab with a bump: top faces near the bump carry different corner AO,
    // so the top face cannot be a single quad anymore.
    const cells = new Map();
    for (let x = 0; x < 4; x++) for (let z = 0; z < 4; z++) cells.set(`${x},0,${z}`, white);
    cells.set('1,1,1', white);
    const m = meshPart(cells);
    expect(m.indices.length / 3).toBeGreaterThan(12 + 10); // strictly more than slab+bump alone
  });
});
