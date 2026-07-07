// Cloud Dragon boss — ported from hand-coded boxes in src/boss.js (the
// final `else` branch of buildBoss). Matches the original's layout: a 2.8
// wide cloud puff at the feet, sky-blue body/neck/head stack, snout on +z,
// yellow horns topping out at ~5.2, ground at y = 0.
//
// The animated pieces are separate parts with authored pivots, honoring the
// BossFight animation contract:
//   wingL/wingR — rotation.z flaps about the wing-root pivot (the original
//                 wing() sub-Groups at (±1.05, 2.6, 0); both live in arms[])
//   pupilL/R    — scale.y squashes about the pupil center (blinking)
//   browL/R     — visibility toggled (angry look while hurt)
// Everything else lives in "body". Pivots are in authoring voxel coords
// (floats fine); the baker turns them into per-part origins + offsets.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'boss-dragon', voxelSize: 0.1 });

  const CLOUD = s.color('#ffffff');
  const PUFF = s.color('#f2f8ff');
  const SKY = s.color('#bfe4ff');
  const BLUE = s.color('#9fd2ff');
  const HORN = s.color('#ffd54a');
  const DARK = s.color('#222222');

  // ---- body: cloud base, puffs, torso, neck, head, snout, horns, face ----
  const body = s.part('body');
  // Cloud base: 2.8 x 0.7 x 1.9, dropped to sit on the ground at y = 0
  // (the original floated its bottom at y 0.15).
  body.box(-14, 0, -9, 13, 8, 8, CLOUD);
  // Side puffs riding the base.
  body.box(-17, 5, -3, -6, 10, 8, PUFF);
  body.box(7, 4, -7, 16, 9, 2, PUFF);
  // Torso: 1.9 x 1.7 x 1.4 centered at y 2.0.
  body.box(-9, 12, -7, 9, 28, 6, SKY);
  // Neck: 0.8 x 1.0 x 0.8, leaning slightly forward.
  body.box(-4, 28, -3, 3, 37, 4, BLUE);
  // Head: 1.3 x 1.0 x 1.2 centered at (0, 4.2, 0.2).
  body.box(-6, 37, -4, 6, 46, 7, SKY);
  // Snout: 0.7 x 0.5 x 0.7 poking out the front.
  body.box(-3, 38, 6, 3, 42, 12, BLUE);
  // Horns: two 0.2 x 0.5 yellow stubs, topping out at y 5.2.
  body.box(-4, 47, -1, -3, 51, 0, HORN);
  body.box(2, 47, -1, 3, 51, 0, HORN);
  // Tail puff trailing behind the left hip.
  body.box(-17, 14, -7, -9, 18, 1, SKY);
  // Chamfer torso + head vertical edges for a soft rounded silhouette
  // (the clouds stay chunky).
  for (const [x, z] of [[-9, -7], [-9, 6], [9, -7], [9, 6]]) {
    for (let y = 12; y <= 28; y++) body.clear(x, y, z);
  }
  for (const [x, z] of [[-6, -4], [-6, 7], [6, -4], [6, 7]]) {
    for (let y = 37; y <= 46; y++) body.clear(x, y, z);
  }
  // Eye whites: proud of the head front, matching face(g, 4.4, 0.82, 0.9).
  body.box(-4, 44, 8, -2, 46, 8, CLOUD);
  body.box(1, 44, 8, 3, 46, 8, CLOUD);
  // Mouth: a friendly dark bar recolored into the snout front.
  body.box(-2, 40, 12, 1, 41, 12, DARK);

  // ---- wings: root-pivoted cloud slabs, flapped via rotation.z ----
  // The original wing() parks a pivot Group at (side * 1.05, 2.6, 0) with a
  // 1.9 x 0.18 x 1.0 box offset (side * 1.0, 0, 0) inside it.
  const wingL = s.part('wingL', { pivot: [-10.5, 26, 0] });
  wingL.box(-30, 25, -5, -12, 26, 4, CLOUD);
  const wingR = s.part('wingR', { pivot: [10.5, 26, 0] });
  wingR.box(11, 25, -5, 29, 26, 4, CLOUD);

  // ---- pupils: center-pivoted so blink squash stays centered ----
  const pupilL = s.part('pupilL', { pivot: [-3, 45, 9.5] });
  pupilL.box(-4, 44, 9, -3, 45, 9, DARK);
  const pupilR = s.part('pupilR', { pivot: [3, 45, 9.5] });
  pupilR.box(2, 44, 9, 3, 45, 9, DARK);

  // ---- angry brows: stepped slants, hidden until the boss is hurt ----
  // Inner (nose-side) end sits low, outer end high, like the rotated bars.
  const browL = s.part('browL');
  browL.box(-5, 48, 8, -4, 48, 8, DARK);
  browL.box(-3, 47, 8, -2, 47, 8, DARK);
  const browR = s.part('browR');
  browR.box(3, 48, 8, 4, 48, 8, DARK);
  browR.box(1, 47, 8, 2, 47, 8, DARK);

  return s;
}
