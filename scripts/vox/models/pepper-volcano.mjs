// Pepper volcano — large background scenery for the Pepper Volcano world.
// A terraced volcanic cone shaped and colored like a giant red chili: green
// calyx leaves drape over the crater rim, a curly pepper stem sticks up
// beside it, and the crater holds a glowing lava pool with tongues of lava
// running down the slopes. Two pepper "lava bombs" are lodged in the sides.
//
// Contract: bottom-center anchor, ground contact at y = 0, voxelSize 0.2
// (chunky on purpose — this reads from 15+ units away behind the track, and
// a fine grid quadruples the surface cells for no visual gain) → roughly
// 5.8 world units tall, 5.2 wide. Parts:
//   body  — red cone (fixed color)
//   leaf  — green calyx + stem (fixed color)
//   trim  — pepper lava bombs (fixed color)
//   lava  — crater pool + dribbles, pivot at the pool center so the game
//           can pulse mesh.scale for a molten glow throb.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'pepper-volcano', voxelSize: 0.2 });

  const body = s.part('body');
  const RED = s.color('#d63a2a');

  const H = 29;            // cone height in voxels
  const BASE = 13;         // half-width at ground
  const TOP = 4;           // half-width at rim
  // Terraced cone: radius steps every 3 rows so walls are tall flat slabs
  // the baker can greedy-merge (per-row stepping bakes ~10x the triangles).
  const TIERS = Math.ceil(H / 3);
  const half = (y) =>
    Math.round(BASE - (Math.floor(y / 3) * (BASE - TOP)) / (TIERS - 1));
  // Chamfered-square footprint: long flat walls merge into big quads; a
  // proportional octagon would turn the corners into 1-wide stair facets.
  const inside = (x, z, r) => {
    const cut = Math.min(3, Math.max(0, r - 2));
    return Math.max(Math.abs(x), Math.abs(z)) <= r
      && Math.abs(x) + Math.abs(z) <= 2 * r - cut;
  };

  // Crater bowl: hollow from craterY up, lava pool sits just below the rim.
  const craterY = H - 4;
  const craterR = 3;

  for (let y = 0; y < H; y++) {
    const r = half(y);
    for (let x = -r; x <= r; x++) {
      for (let z = -r; z <= r; z++) {
        if (!inside(x, z, r)) continue;
        if (y > craterY && inside(x, z, craterR)) continue; // hollow crater
        body.set(x, y, z, RED);
      }
    }
  }

  // ---- lava: crater pool + three dribbles down the outer slope ----
  const lava = s.part('lava', { pivot: [0, craterY + 1, 0] });
  const LAVA = s.color('#ff9a3c');
  const CORE = s.color('#ffd54a');

  for (let x = -craterR; x <= craterR; x++) {
    for (let z = -craterR; z <= craterR; z++) {
      if (!inside(x, z, craterR)) continue;
      lava.set(x, craterY + 1, z, Math.abs(x) + Math.abs(z) <= 1 ? CORE : LAVA);
    }
  }
  // Dribbles: follow the slope one voxel proud of the cone surface.
  const dribble = (dirX, dirZ, len, width) => {
    for (let i = 0; i < len; i++) {
      const y = H - 2 - i;
      const r = half(y) + 1;
      for (let w = 0; w < width; w++) {
        const off = w - (width >> 1);
        const x = dirX !== 0 ? dirX * r : off;
        const z = dirZ !== 0 ? dirZ * r : off;
        lava.set(x, y, z, i < 2 ? CORE : LAVA);
      }
    }
  };
  dribble(1, 0, 10, 2);
  dribble(0, -1, 7, 2);
  dribble(-1, 0, 5, 1);

  // ---- leaf: calyx leaves over the rim + curly stem (the "pepper" tell) ----
  const leaf = s.part('leaf');
  const GRN = s.color('#3f9e3a');
  const GRN2 = s.color('#2f7d2e');

  // Four leaves draped over the rim, one per side: a 3-wide tongue that
  // starts on the rim top and steps down/outward to a 1-wide tip.
  for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    for (let j = 0; j < 6; j++) {
      const y = H - Math.floor(j * 0.9);
      const r = Math.min(half(Math.max(0, Math.min(y, H - 1))) + 1, craterR + 1 + j);
      const t = j < 4 ? 1 : 0; // narrows to the tip
      for (let w = -t; w <= t; w++) {
        const x = dx !== 0 ? dx * r : w;
        const z = dz !== 0 ? dz * r : w;
        leaf.set(x, y, z, GRN);
      }
    }
  }
  // Curly stem: rises beside the crater then hooks over.
  for (let y = H + 1; y <= H + 4; y++) leaf.box(-4, y, -2, -3, y, -1, GRN2);
  leaf.box(-2, H + 4, -2, -1, H + 4, -1, GRN2);
  leaf.set(0, H + 3, -2, GRN2);
  leaf.set(0, H + 3, -1, GRN2);

  // ---- trim: pepper lava bombs lodged in the slopes ----
  const trim = s.part('trim');
  const YEL = s.color('#ffc23e');
  const ORG = s.color('#ff7a2e');

  // Horizontal chili: rounded 2-high body tapering to a bent tip, green nub.
  const bomb = (bx, by, bz, dir, C) => {
    trim.box(bx, by, bz - 1, bx + dir * 3, by + 1, bz + 1, C);
    trim.box(bx + dir * 4, by, bz, bx + dir * 4, by, bz, C); // curled tip
    leaf.set(bx - dir, by + 1, bz, GRN2); // stem nub
  };
  bomb(6, 11, 6, 1, YEL);
  bomb(-7, 16, 3, -1, ORG);

  // Each part bakes to its own mesh, so a cell claimed by two parts z-fights.
  // Decorations win over the cone: the leaves drape over everything, the lava
  // bombs and stem nubs are lodged *into* the slope (the cone yields pockets
  // so the bombs stay visible), and the dribbles run under the draped leaves
  // (guard pattern from giant-cabbage.mjs).
  yieldClaimedCells(trim, [leaf]);
  yieldClaimedCells(lava, [leaf, trim]);
  yieldClaimedCells(body, [leaf, trim, lava]);
  assertNoPartOverlap(s);

  return s;
}

function yieldClaimedCells(part, winners) {
  for (const k of [...part.voxels.keys()]) {
    if (winners.some((w) => w.voxels.has(k))) part.voxels.delete(k);
  }
}

function assertNoPartOverlap(scene) {
  const seen = new Map();
  for (const part of scene.parts) {
    for (const key of part.voxels.keys()) {
      const prev = seen.get(key);
      if (prev) throw new Error(`${scene.name}: ${part.name} overlaps ${prev} at ${key}`);
      seen.set(key, part.name);
    }
  }
}
