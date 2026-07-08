// Meatball Monster boss — ported from hand-coded boxes in src/boss.js
// (wi === 0 branch). Matches the original's layout: ~2.6 wide torso, sauce
// drizzle at y ≈ 3.25, head at y ≈ 4.15, spaghetti hair topping out near
// 5.0, face on +z, feet at y = 0.
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
  const s = new VoxScene({ name: 'boss-meatball', voxelSize: 0.1 });

  const MEAT = s.color('#8a4b2d');
  const FEET = s.color('#6e3a20');
  const SAUCE = s.color('#c0392b');
  const HEAD = s.color('#9c5a36');
  const NOODLE = s.color('#f5deb3');
  const TOMATO = s.color('#e74c3c');
  const PARM = s.color('#fff8e1');
  const WHITE = s.color('#ffffff');
  const DARK = s.color('#222222');

  // ---- body: feet, torso, sauce, head, toppings, eyes, mouth ----
  const body = s.part('body');
  // Feet: two 0.9 x 1.0 x 0.9 pads at x = ∓0.65.
  body.box(-11, 0, -4, -2, 9, 4, FEET);
  body.box(2, 0, -4, 11, 9, 4, FEET);
  // Torso: the 2.6 x 2.2 x 1.6 meatball centered at y 2.1.
  body.box(-13, 10, -8, 12, 31, 7, MEAT);
  // Tomato sauce drizzle: 2.9 x 0.45 x 1.8 slab draped at y 3.25, one
  // voxel proud of the torso on every side.
  body.box(-14, 30, -9, 14, 34, 8, SAUCE);
  // Head: 1.6 x 1.2 x 1.4 sitting in the sauce.
  body.box(-8, 36, -7, 7, 47, 6, HEAD);
  // Spaghetti tuft + extra noodles on top (rotations flattened to steps).
  body.box(2, 47, -3, 7, 50, 2, NOODLE);
  body.box(-2, 48, -1, 1, 50, 2, NOODLE);
  // Cherry tomato nested in the noodles.
  body.box(-6, 47, 1, -4, 49, 3, TOMATO);
  // Parmesan sprinkles resting on the sauce shoulders.
  body.box(8, 35, 5, 9, 36, 6, PARM);
  body.box(-9, 35, 5, -8, 35, 6, PARM);
  // Chamfer torso + head vertical edges for a soft round silhouette.
  for (const [x, z] of [[-13, -8], [-13, 7], [12, -8], [12, 7]]) {
    for (let y = 10; y <= 31; y++) body.clear(x, y, z);
  }
  for (const [x, z] of [[-8, -7], [-8, 6], [7, -7], [7, 6]]) {
    for (let y = 36; y <= 47; y++) body.clear(x, y, z);
  }
  // Eye whites: proud of the head front, matching face(g, 4.25, 0.75, 1.1).
  body.box(-6, 42, 7, -3, 45, 7, WHITE);
  body.box(2, 42, 7, 5, 45, 7, WHITE);
  // Mouth: a friendly dark bar.
  body.box(-3, 38, 7, 2, 39, 7, DARK);

  // ---- arms: shoulder-pivoted, hanging 1.9 below (∓1.65, 3.2) ----
  const armL = s.part('armL', { pivot: [-16.5, 32, 0] });
  armL.box(-20, 13, -3, -14, 31, 3, MEAT);
  const armR = s.part('armR', { pivot: [16.5, 32, 0] });
  armR.box(14, 13, -3, 20, 31, 3, MEAT);

  // ---- pupils: center-pivoted so blink squash stays centered ----
  const pupilL = s.part('pupilL', { pivot: [-4, 44, 8.5] });
  pupilL.box(-5, 43, 8, -4, 44, 8, DARK);
  const pupilR = s.part('pupilR', { pivot: [4, 44, 8.5] });
  pupilR.box(3, 43, 8, 4, 44, 8, DARK);

  // ---- angry brows: stepped slants, hidden until the boss is hurt ----
  // Inner (nose-side) end sits low, outer end high, like the rotated bars.
  const browL = s.part('browL');
  browL.box(-7, 48, 7, -6, 48, 7, DARK);
  browL.box(-6, 47, 7, -5, 47, 7, DARK);
  browL.box(-5, 46, 7, -3, 46, 7, DARK);
  const browR = s.part('browR');
  browR.box(6, 48, 7, 7, 48, 7, DARK);
  browR.box(5, 47, 7, 6, 47, 7, DARK);
  browR.box(3, 46, 7, 5, 46, 7, DARK);

  // Same-cell overlap across parts z-fights at runtime (each part is its own
  // mesh), so the arms yield the top-inner corners buried in the sauce slab.
  // Every yielded cell stays filled by the body, so the assembled silhouette
  // is unchanged.
  const yieldTo = (part, ...owners) => {
    for (const k of part.voxels.keys()) {
      if (owners.some((o) => o.voxels.has(k))) part.voxels.delete(k);
    }
  };
  yieldTo(armL, body);
  yieldTo(armR, body);
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
