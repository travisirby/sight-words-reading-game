// Frost Yeti boss — the first boss ported from hand-coded boxes in
// src/boss.js (wi === 2 branch). Matches the original's layout: ~2.7 wide
// torso, head at y ≈ 4, top at ~5.1, face on +z, feet at y = 0.
//
// The animated pieces are separate parts with authored pivots, honoring the
// BossFight animation contract:
//   armL/armR  — rotation.z swings about the shoulder (throw telegraph, sway)
//   pupilL/R   — scale.y squashes about the pupil center (blinking)
//   browL/R    — visibility toggled (angry look while hurt)
// Everything else lives in "body". Pivots are in authoring voxel coords
// (floats fine); the baker turns them into per-part origins + offsets.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'boss-yeti', voxelSize: 0.1 });

  const FUR = s.color('#ffffff');
  const FEET = s.color('#eef6ff');
  const BELLY = s.color('#dbe9f7');
  const FACE = s.color('#aac2d6');
  const EAR = s.color('#9fc4e8');
  const DARK = s.color('#222222');

  // ---- body: feet, torso, belly, head, face patch, ears, eyes, mouth ----
  const body = s.part('body');
  // Feet: two 1.0 x 0.9 x 1.0 pads.
  body.box(-12, 0, -5, -3, 8, 4, FEET);
  body.box(3, 0, -5, 12, 8, 4, FEET);
  // Torso: 2.7 x 2.4 x 1.8 centered at y 2.1.
  body.box(-13, 9, -9, 13, 32, 8, FUR);
  // Belly patch: one layer proud of the torso front.
  body.box(-8, 12, 9, 8, 25, 9, BELLY);
  // Head: 1.7 x 1.3 x 1.5 sitting on the torso.
  body.box(-8, 33, -8, 8, 45, 7, FUR);
  // Face patch: recolored front surface of the head.
  body.box(-6, 36, 7, 6, 44, 7, FACE);
  // Ears.
  body.box(-7, 46, -1, -5, 50, 1, EAR);
  body.box(5, 46, -1, 7, 50, 1, EAR);
  // Chamfer torso + head vertical edges for a soft shaggy silhouette.
  for (const [x, z] of [[-13, -9], [-13, 8], [13, -9], [13, 8]]) {
    for (let y = 9; y <= 32; y++) body.clear(x, y, z);
  }
  for (const [x, z] of [[-8, -8], [-8, 7], [8, -8], [8, 7]]) {
    for (let y = 33; y <= 45; y++) body.clear(x, y, z);
  }
  // Eye whites: proud of the face patch, matching face() in boss.js.
  body.box(-5, 40, 8, -3, 43, 8, FUR);
  body.box(3, 40, 8, 5, 43, 8, FUR);
  // Mouth: a friendly dark bar.
  body.box(-2, 37, 8, 2, 38, 8, DARK);

  // ---- arms: shoulder-pivoted, hanging 2.3 below (∓1.8, 3.4) ----
  const armL = s.part('armL', { pivot: [-18, 34, 0] });
  armL.box(-22, 11, -4, -14, 33, 4, FUR);
  const armR = s.part('armR', { pivot: [18, 34, 0] });
  armR.box(14, 11, -4, 22, 33, 4, FUR);

  // ---- pupils: center-pivoted so blink squash stays centered ----
  const pupilL = s.part('pupilL', { pivot: [-3, 42, 9.5] });
  pupilL.box(-4, 41, 9, -3, 42, 9, DARK);
  const pupilR = s.part('pupilR', { pivot: [4, 42, 9.5] });
  pupilR.box(3, 41, 9, 4, 42, 9, DARK);

  // ---- angry brows: stepped slants, hidden until the boss is hurt ----
  // Inner (nose-side) end sits low, outer end high, like the rotated bars.
  const browL = s.part('browL');
  browL.box(-7, 46, 8, -6, 46, 8, DARK);
  browL.box(-6, 45, 8, -5, 45, 8, DARK);
  browL.box(-5, 44, 8, -3, 44, 8, DARK);
  const browR = s.part('browR');
  browR.box(6, 46, 8, 7, 46, 8, DARK);
  browR.box(5, 45, 8, 6, 45, 8, DARK);
  browR.box(3, 44, 8, 5, 44, 8, DARK);

  return s;
}
