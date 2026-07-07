// Voxel critter — replaces the hand-coded box critter in src/game.js.
//
// Matches the original's footprint and anchor: ~0.95 wide, 1.0 tall,
// ground at y=0, eyes looking toward +x (the walk direction; game.js yaws
// the group per direction). Two parts:
//   body — near-white voxels, tintable: game.js drives the per-world color
//          through the part material (userData.mat.color.setHex).
//   trim — fixed colors (eye whites, pupils, dark feet), never tinted.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'critter', voxelSize: 0.05 });

  // ---- body (tintable) ----
  const body = s.part('body', { tintable: true });
  // Solid white: the per-world tint multiplies in, and the baked corner AO
  // supplies all the shading. Solid color also lets the baker's greedy
  // merge collapse each flat side into a handful of quads.
  const B0 = s.color('#ffffff');

  // Main slab: 19 x 12 x 14 voxels = 0.95 x 0.6 x 0.7, floating at y 0.15
  // like the original (feet fill the gap).
  body.box(-9, 3, -7, 9, 14, 6, B0);
  // Head hump on top: 13 x 5 x 11 = 0.65 x 0.25 x 0.55, up to y = 1.0.
  body.box(-6, 15, -5, 6, 19, 5, B0);

  // Chamfer the vertical edges + top rim so it reads as a rounded bug.
  for (const [x, z] of [[-9, -7], [-9, 6], [9, -7], [9, 6]]) {
    for (let y = 3; y <= 14; y++) body.clear(x, y, z);
  }
  for (const [x, z] of [[-6, -5], [-6, 5], [6, -5], [6, 5]]) {
    for (let y = 15; y <= 19; y++) body.clear(x, y, z);
  }
  for (let x = -6; x <= 6; x++) for (const z of [-5, 5]) body.clear(x, 19, z);
  for (let z = -5; z <= 5; z++) for (const x of [-6, 6]) body.clear(x, 19, z);

  // ---- trim (fixed colors) ----
  const trim = s.part('trim');
  const DARK = s.color('#222222');
  const EYE = s.color('#ffffff');

  // One foot under the body (x 3..7 = original ±0.25 center), then mirror.
  trim.box(3, 0, -3, 7, 2, 2, DARK);
  trim.mirrorX();

  // Eyes on the front face (z = 7, one voxel proud of the body), shifted
  // toward +x like the original so the critter looks where it walks.
  trim.box(0, 11, 7, 2, 13, 7, EYE);
  trim.box(7, 11, 7, 9, 13, 7, EYE);
  // Pupils another voxel forward, low-and-forward inside each eye.
  trim.box(1, 11, 8, 2, 12, 8, DARK);
  trim.box(8, 11, 8, 9, 12, 8, DARK);

  return s;
}
