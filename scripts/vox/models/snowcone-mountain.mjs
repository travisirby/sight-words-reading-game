// Snowcone mountain — large background scenery for the Snowcones Islands
// world. A chunky peak of shaved ice (cool blue-white, darker at the base
// where the ice packs denser) with bright syrup drizzling down four sides
// and a cherry perched on the rounded top. Reads as a giant snowcone from
// 15+ units behind the track, so it stays deliberately coarse.
//
// Contract: bottom-center anchor, ground contact at y = 0, voxelSize 0.2
// → roughly 6 world units tall, 5.2 wide. Parts (all fixed color):
//   body   — shaved-ice cone/dome
//   syrup  — four colorful drizzles down the slopes (own mesh so the bright
//            stripes don't merge-seam the white body)
//   cherry — red ball + green stem on the peak
//
// Parts share one voxel grid but bake to separate meshes, so any cell two
// parts both claim z-fights. Placements after `body` are guarded with
// taken(); a final assertNoPartOverlap() fails the build on any collision.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'snowcone-mountain', voxelSize: 0.2 });

  const body = s.part('body');
  const ICE = s.color('#eaf3ff');   // shaved-ice white, cool tint
  const ICE2 = s.color('#d3e6fb');  // packed ice near the base

  const H = 30;          // height in voxels
  const BASE = 13;       // half-width at ground
  const TIERS = Math.ceil(H / 3);
  // Terraced cone for the lower body (tall flat slabs the baker merges),
  // rounding into a dome over the top 6 rows so the peak reads as a soft
  // scoop of ice rather than a sharp point.
  const half = (y) => {
    if (y >= H - 6) {
      const t = (y - (H - 6)) / 6;
      return Math.max(1, Math.round(6 * Math.sqrt(Math.max(0, 1 - t * t))));
    }
    return Math.round(BASE - (Math.floor(y / 3) * (BASE - 6)) / (TIERS - 1));
  };
  // Chamfered-square footprint: long flat walls merge into big quads.
  const inside = (x, z, r) => {
    const cut = Math.min(3, Math.max(0, r - 2));
    return Math.max(Math.abs(x), Math.abs(z)) <= r
      && Math.abs(x) + Math.abs(z) <= 2 * r - cut;
  };

  for (let y = 0; y < H; y++) {
    const r = half(y);
    for (let x = -r; x <= r; x++) {
      for (let z = -r; z <= r; z++) {
        if (inside(x, z, r)) body.set(x, y, z, y < 6 ? ICE2 : ICE);
      }
    }
  }

  const parts = [body];
  const taken = (x, y, z) => parts.some((p) => p.voxels.has(`${x},${y},${z}`));

  // ---- syrup: bright drizzles running down from just below the peak, one
  // voxel proud of the ice surface (r + 1), with the odd 2-wide blob. ----
  const syrup = s.part('syrup');
  const RASP = s.color('#ff2e63');  // raspberry
  const BLUE = s.color('#2ea6ff');  // blue raspberry
  const GRAPE = s.color('#a34bff'); // grape
  const drizzle = (dirX, dirZ, len, C) => {
    for (let i = 0; i < len; i++) {
      const y = H - 4 - i;
      if (y < 2) break;
      const r = half(Math.max(0, Math.min(y, H - 1))) + 1;
      const x = dirX !== 0 ? dirX * r : 0;
      const z = dirZ !== 0 ? dirZ * r : 0;
      if (!taken(x, y, z)) syrup.set(x, y, z, C);
      if (i % 3 === 1) { // a fatter run every few cells
        const x2 = dirX !== 0 ? dirX * r : 1;
        const z2 = dirZ !== 0 ? dirZ * r : 1;
        if (!taken(x2, y, z2)) syrup.set(x2, y, z2, C);
      }
    }
  };
  drizzle(1, 0, 16, RASP);
  drizzle(-1, 0, 13, BLUE);
  drizzle(0, 1, 15, GRAPE);
  drizzle(0, -1, 12, RASP);
  parts.push(syrup);

  // ---- cherry on the peak ----
  const cherry = s.part('cherry');
  const CHERRY = s.color('#e01e37');
  const STEM = s.color('#5a7d3a');
  cherry.box(-1, H, -1, 1, H + 1, 1, CHERRY); // rounded berry
  cherry.set(0, H + 2, 0, CHERRY);
  cherry.set(0, H + 3, 0, STEM);              // stem hooks up and over
  cherry.set(1, H + 4, 0, STEM);
  parts.push(cherry);

  assertNoPartOverlap(s);
  return s;
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
