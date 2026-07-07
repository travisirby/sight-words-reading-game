// Snail critter variant. Same contract as critter.mjs: bottom-center
// anchor, ~0.95 x 1.0 footprint, eyes toward +x (walk direction), tintable
// part named "body" (here the shell) so game.js's per-world tint material
// drops in unchanged; "trim" carries the fixed-color flesh/eyes.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'critter-snail', voxelSize: 0.05 });

  // ---- shell (tintable, authored near-white) ----
  const body = s.part('body', { tintable: true });
  const B = s.color('#ffffff');
  const G = s.color('#d2d2d2'); // spiral groove, shows through the tint

  // Dome sitting back of center: rows shrink as they rise, top at y = 1.0.
  body.box(-9, 4, -6, 4, 15, 5, B);
  body.box(-8, 16, -5, 3, 17, 4, B);
  body.box(-6, 18, -4, 1, 19, 3, B);
  // Chamfer the dome's vertical edges.
  for (const [x0, x1, z0, z1, y0, y1] of [
    [-9, 4, -6, 5, 4, 15], [-8, 3, -5, 4, 16, 17], [-6, 1, -4, 3, 18, 19],
  ]) {
    for (let y = y0; y <= y1; y++) {
      for (const [x, z] of [[x0, z0], [x0, z1], [x1, z0], [x1, z1]]) body.clear(x, y, z);
    }
  }
  // Spiral groove hint: a ring stripe around the dome's midline.
  for (let x = -9; x <= 4; x++) { body.set(x, 10, -6, G); body.set(x, 10, 5, G); }
  for (let z = -6; z <= 5; z++) { body.set(-9, 10, z, G); body.set(4, 10, z, G); }

  // ---- flesh + eyes (fixed colors) ----
  const trim = s.part('trim');
  const FLESH = s.color('#e8c9a0');
  const DARK = s.color('#222222');
  const EYE = s.color('#ffffff');

  // Foot/belly slab under the shell, nosing out front toward +x.
  trim.box(-9, 0, -4, 9, 3, 3, FLESH);
  // Head rising at the front of the foot.
  trim.box(5, 4, -3, 9, 8, 2, FLESH);
  // Eye stalks with white eyes and forward pupils.
  for (const [z0, z1] of [[-3, -2], [1, 2]]) {
    trim.box(7, 9, z0, 7, 11, z1, FLESH);
    trim.box(6, 12, z0, 8, 14, z1, EYE);
    trim.box(8, 12, z0, 8, 13, z1, DARK);
  }

  return s;
}
