// Swamp caterpillar decor: a small segmented caterpillar chewing a cabbage,
// with a tiny magenta glow part for the shared pulsing swamp material.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'critter-caterpillar', voxelSize: 0.05 });

  const TEAL = s.color('#3f9e8a');
  const TEAL_DARK = s.color('#2f746b');
  const SALMON = s.color('#d96a54');
  const PURPLE = s.color('#7d3f8f');
  const PURPLE_LIGHT = s.color('#9c5bb0');
  const INTERIOR = s.color('#d9c2e8');
  const WHITE = s.color('#ffffff');
  const DARK = s.color('#222222');
  const GLOW = s.color('#e93fc8');

  const body = s.part('body');

  // A joined chubby body with dark segment bands, facing +x.
  body.box(-9, 2, -3, 4, 9, 3, TEAL);
  for (const x of [-6, -3, 0]) body.box(x, 3, -3, x, 8, 3, TEAL_DARK);

  // Goofy head face, eyes proud on the +x side.
  body.box(3, 3, -4, 6, 9, 4, TEAL);
  body.box(4, 10, -3, 5, 11, 3, TEAL);
  body.box(7, 6, -3, 7, 8, -2, WHITE);
  body.box(7, 6, 2, 7, 8, 3, WHITE);
  body.box(8, 6, -2, 8, 7, -2, DARK);
  body.box(8, 6, 2, 8, 7, 2, DARK);
  body.set(7, 4, 0, DARK);

  // Feet and antennae.
  body.box(-8, 0, -4, 5, 1, -3, SALMON);
  body.box(-8, 0, 3, 5, 1, 4, SALMON);
  body.box(5, 12, -2, 6, 13, -2, SALMON);
  body.box(5, 12, 2, 6, 13, 2, SALMON);

  // Half-eaten cabbage on the ground in front of the mouth.
  body.box(8, 0, -4, 10, 5, 4, PURPLE);
  body.box(9, 6, -3, 10, 7, 3, PURPLE_LIGHT);
  body.box(8, 3, -2, 8, 5, 2, INTERIOR);
  body.set(8, 6, 0, INTERIOR);

  const glow = s.part('glow');
  glow.set(-7, 9, 4, GLOW);
  glow.set(-4, 10, 3, GLOW);

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
