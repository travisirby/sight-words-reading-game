// Syrup Serpent boss — ported from hand-coded boxes in src/boss.js
// (wi === 1 branch). Matches the original's layout: four stacked syrup
// slabs snaking up to y ≈ 4.1, a waffle-hooded head on top, face on +z,
// base at y = 0, butter pat topping out at ~5.4.
//
// This boss has no arm limbs: the whole head is the animated piece. In
// boss.js a sub-Group `headP` at (0, 4.1, 0) holds the hood, face block,
// butter, tongue and face(), and is pushed into arms[] — rotation.z flicks
// the head as the throw telegraph. So here:
//   head       — pivot at the neck joint (0, 41, 0); rotation.z = flick
//   pupilL/R   — scale.y squashes about the pupil center (blinking)
//   browL/R    — visibility toggled (angry look while hurt)
// Pupils and brows are authored at their absolute resting positions and
// re-parented under the head mesh at runtime so they ride the flick.
// Everything else lives in "body". Pivots are in authoring voxel coords
// (floats fine); the baker turns them into per-part origins + offsets.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'boss-serpent', voxelSize: 0.1 });

  const SYRUP = s.color('#8a4a1a');
  const SYRUP2 = s.color('#7a3f14');
  const WAFFLE = s.color('#c98a3b');
  const GROOVE = s.color('#b87a2e');
  const FACE = s.color('#f0c96b');
  const BUTTER = s.color('#ffe082');
  const TONGUE = s.color('#ef5350');
  const WHITE = s.color('#ffffff');
  const DARK = s.color('#222222');

  // ---- body: four stacked syrup slabs, alternating colors, offset x ----
  const body = s.part('body');
  // 2.5 x 1.1 x 1.9 base, then 2.0 / 1.7 / 1.4 wide slabs wobbling ±0.2.
  body.box(-12, 0, -9, 12, 10, 9, SYRUP2);
  body.box(-7, 11, -7, 12, 20, 7, SYRUP);
  body.box(-10, 21, -6, 6, 30, 6, SYRUP2);
  body.box(-5, 31, -5, 8, 40, 5, SYRUP);
  // Chamfer each slab's vertical edges for a soft drizzled silhouette.
  const chamfer = (p, x0, x1, y0, y1, z0, z1) => {
    for (const [x, z] of [[x0, z0], [x0, z1], [x1, z0], [x1, z1]]) {
      for (let y = y0; y <= y1; y++) p.clear(x, y, z);
    }
  };
  chamfer(body, -12, 12, 0, 10, -9, 9);
  chamfer(body, -7, 12, 11, 20, -7, 7);
  chamfer(body, -10, 6, 21, 30, -6, 6);
  chamfer(body, -5, 8, 31, 40, -5, 5);

  // ---- head: pivoted at the neck (headP sat at (0, 4.1, 0)) ----
  // Authored at absolute resting positions; the pivot makes rotation.z
  // flick the head about the neck joint for the throw telegraph.
  const head = s.part('head', { pivot: [0, 41, 0] });
  // Waffle hood: 2.1 x 1.3 x 0.6 behind the face, poking above it.
  head.box(-10, 41, -6, 10, 52, -1, WAFFLE);
  // Waffle grooves: darker vertical strips through the hood.
  head.box(-7, 41, -6, -5, 52, -1, GROOVE);
  head.box(5, 41, -6, 7, 52, -1, GROOVE);
  // Face block: 1.3 x 1.05 x 1.1 golden waffle head.
  head.box(-6, 41, -4, 6, 51, 6, FACE);
  // Chamfer the face block and hood vertical edges.
  chamfer(head, -6, 6, 41, 51, -4, 6);
  chamfer(head, -10, 10, 41, 52, -6, -1);
  // Butter pat on top.
  head.box(-2, 52, -1, 2, 53, 3, BUTTER);
  // Tongue: a little red flick under the mouth, sticking out front.
  head.box(0, 42, 6, 0, 42, 10, TONGUE);
  // Eye whites: proud of the face block, matching face(headP, 0.6, 0.74, 0.9).
  head.box(-4, 46, 7, -2, 49, 7, WHITE);
  head.box(2, 46, 7, 4, 49, 7, WHITE);
  // Mouth: a friendly dark bar.
  head.box(-2, 43, 7, 2, 44, 7, DARK);

  // ---- pupils: center-pivoted so blink squash stays centered ----
  const pupilL = s.part('pupilL', { pivot: [-3, 48, 8.5] });
  pupilL.box(-4, 47, 8, -3, 48, 8, DARK);
  const pupilR = s.part('pupilR', { pivot: [4, 48, 8.5] });
  pupilR.box(3, 47, 8, 4, 48, 8, DARK);

  // ---- angry brows: stepped slants, hidden until the boss is hurt ----
  // Inner (nose-side) end sits low, outer end high, like the rotated bars.
  const browL = s.part('browL');
  browL.box(-5, 52, 8, -4, 52, 8, DARK);
  browL.box(-4, 51, 8, -3, 51, 8, DARK);
  browL.box(-3, 50, 8, -1, 50, 8, DARK);
  const browR = s.part('browR');
  browR.box(4, 52, 8, 5, 52, 8, DARK);
  browR.box(3, 51, 8, 4, 51, 8, DARK);
  browR.box(1, 50, 8, 3, 50, 8, DARK);

  return s;
}
