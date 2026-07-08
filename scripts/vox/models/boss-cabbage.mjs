// Cabbage King boss for Purple Cabbage Swamp. Matches the simple boss rig:
// bottom-center anchor, face on +z, top near y = 5.1 world units, and the
// animated arm/pupil/brow part names consumed by src/boss.js.

import { VoxScene } from '../voxwriter.mjs';

const ARM_L_PIVOT = [-18, 34, 0];
const ARM_R_PIVOT = [18, 34, 0];
const PUPIL_L_PIVOT = [-4.5, 38.5, 10.5];
const PUPIL_R_PIVOT = [4.5, 38.5, 10.5];

export default function build() {
  const s = new VoxScene({ name: 'boss-cabbage', voxelSize: 0.1 });

  const OUTER = s.color('#7d3f8f');
  const INNER = s.color('#9c5bb0');
  const VEIN = s.color('#d9c2e8');
  const DARK_LEAF = s.color('#62384f');
  const GOLD = s.color('#ffd54a');
  const WHITE = s.color('#ffffff');
  const DARK = s.color('#222222');

  // ---- body: leafy pads, cabbage bulb, face, crown, cape ----
  const body = s.part('body');
  // Wide leafy feet keep the shared boss anchor on the ground.
  body.box(-11, 0, -5, -3, 7, 4, DARK_LEAF);
  body.box(3, 0, -5, 11, 7, 4, DARK_LEAF);

  // A round cabbage body with surface leaf bands instead of noisy protrusions.
  body.box(-13, 8, -9, 13, 34, 8, OUTER);
  body.box(-10, 8, -7, 10, 15, 8, DARK_LEAF);
  body.box(-9, 35, -7, 9, 45, 8, INNER);

  // Chamfer the visible tiers so the silhouette reads round.
  for (const [x0, x1, z0, z1, y0, y1] of [
    [-11, 11, -5, 4, 0, 7],
    [-13, 13, -9, 8, 8, 34],
    [-9, 9, -7, 8, 35, 45],
  ]) {
    for (let y = y0; y <= y1; y++) {
      for (const [x, z] of [[x0, z0], [x0, z1], [x1, z0], [x1, z1]]) body.clear(x, y, z);
    }
  }

  // Front pale veins; keep them chunky so the bake can merge most faces.
  body.box(-1, 17, 8, 1, 34, 8, VEIN);
  body.box(-7, 28, 8, -2, 28, 8, VEIN);
  body.box(2, 28, 8, 7, 28, 8, VEIN);
  body.box(-5, 22, 8, -2, 22, 8, VEIN);
  body.box(2, 22, 8, 5, 22, 8, VEIN);

  // Friendly face: eye whites are one voxel proud of the cabbage surface.
  body.box(-6, 37, 9, -3, 40, 9, WHITE);
  body.box(3, 37, 9, 6, 40, 9, WHITE);
  body.box(-3, 33, 9, 3, 34, 9, DARK);

  // Small chunky gold crown.
  body.box(-5, 46, -3, 5, 47, 3, GOLD);
  body.box(-4, 48, -2, -3, 50, 2, GOLD);
  body.box(0, 48, -3, 1, 51, 3, GOLD);
  body.box(3, 48, -2, 4, 50, 2, GOLD);
  body.set(-5, 48, 0, GOLD);
  body.set(5, 48, 0, GOLD);

  // ---- arms: shoulder-pivoted leaf arms ----
  const armL = s.part('armL', { pivot: ARM_L_PIVOT });
  armL.box(-22, 12, -4, -14, 33, 4, OUTER);

  const armR = s.part('armR', { pivot: ARM_R_PIVOT });
  armR.box(14, 12, -4, 22, 33, 4, OUTER);

  // ---- pupils: one voxel proud of the eye whites, center-pivoted ----
  const pupilL = s.part('pupilL', { pivot: PUPIL_L_PIVOT });
  pupilL.box(-5, 37, 10, -4, 39, 10, DARK);
  const pupilR = s.part('pupilR', { pivot: PUPIL_R_PIVOT });
  pupilR.box(4, 37, 10, 5, 39, 10, DARK);

  // ---- angry brows: hidden until hurt, stepped diagonals like boss-yeti ----
  const browL = s.part('browL');
  browL.box(-7, 43, 9, -6, 43, 9, DARK);
  browL.box(-6, 42, 9, -5, 42, 9, DARK);
  browL.box(-5, 41, 9, -3, 41, 9, DARK);
  const browR = s.part('browR');
  browR.box(6, 43, 9, 7, 43, 9, DARK);
  browR.box(5, 42, 9, 6, 42, 9, DARK);
  browR.box(3, 41, 9, 5, 41, 9, DARK);

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
