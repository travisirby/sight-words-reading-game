// Beetle critter variant. Same contract as critter.mjs: bottom-center
// anchor, ~0.95 x 0.8 footprint, face toward +x, tintable part named
// "body" (the carapace) for the per-world tint; "trim" is fixed colors
// (head, legs, horn, eyes).

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'critter-beetle', voxelSize: 0.05 });

  // ---- carapace (tintable, authored near-white) ----
  const body = s.part('body', { tintable: true });
  const B = s.color('#ffffff');
  const SEAM = s.color('#cfcfcf'); // wing-case split line down the back

  // Shell over the back 2/3, domed: wide base row, narrower top.
  body.box(-9, 3, -7, 4, 10, 6, B);
  body.box(-8, 11, -6, 3, 13, 5, B);
  body.box(-7, 14, -4, 1, 15, 3, B);
  // Chamfer vertical edges of each tier.
  for (const [x0, x1, z0, z1, y0, y1] of [
    [-9, 4, -7, 6, 3, 10], [-8, 3, -6, 5, 11, 13], [-7, 1, -4, 3, 14, 15],
  ]) {
    for (let y = y0; y <= y1; y++) {
      for (const [x, z] of [[x0, z0], [x0, z1], [x1, z0], [x1, z1]]) body.clear(x, y, z);
    }
  }
  // Wing-case seam along the spine (top surface only).
  body.box(-7, 15, -1, 1, 15, 0, SEAM);
  body.box(-8, 14, -1, -8, 14, 0, SEAM);
  body.box(2, 14, -1, 3, 14, 0, SEAM);

  // ---- head, horn, legs, eyes (fixed colors) ----
  const trim = s.part('trim');
  const DARK = s.color('#2b2b2b');
  const EYE = s.color('#ffffff');
  const PUP = s.color('#111111');

  // Head block at the front, tucked under the shell lip.
  trim.box(5, 3, -4, 9, 9, 3, DARK);
  // Rhino horn: rises from the nose, curling forward/up.
  trim.box(8, 10, -1, 9, 12, 0, DARK);
  trim.box(9, 13, -1, 10, 14, 0, DARK);
  // Eyes on the head's front face, pupils one voxel proud.
  trim.box(10, 6, -3, 10, 8, -2, EYE);
  trim.box(10, 6, 1, 10, 8, 2, EYE);
  trim.set(11, 6, -2, PUP); trim.set(11, 7, -2, PUP);
  trim.set(11, 6, 1, PUP); trim.set(11, 7, 1, PUP);
  // Three stubby legs per side.
  for (const x of [-7, -2, 3]) {
    trim.box(x, 0, 5, x + 1, 2, 6, DARK);
    trim.box(x, 0, -7, x + 1, 2, -6, DARK);
  }

  return s;
}
