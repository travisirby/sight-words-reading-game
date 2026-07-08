// Crystal Golem boss — ported from hand-coded boxes in src/boss.js
// (wi === 3 branch). Matches the original's layout: ~2.4 wide slate torso,
// head at y ≈ 3.75, glowing crystal shards up to y = 5.2, face on +z,
// feet at y = 0.
//
// The animated pieces are separate parts with authored pivots, honoring the
// BossFight animation contract:
//   armL/armR  — rotation.z swings about the shoulder (throw telegraph, sway)
//   pupilL/R   — scale.y squashes about the pupil center (blinking)
//   browL/R    — visibility toggled (angry look while hurt)
//   shards     — every emissive crystal; the runtime applies one shared
//                glowing material (the original used three emissive hexes,
//                see the port notes / model report for the values).
// Everything else lives in "body". Pivots are in authoring voxel coords
// (floats fine); the baker turns them into per-part origins + offsets.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'boss-golem', voxelSize: 0.1 });

  const FOOT = s.color('#54545f');
  const SLATE = s.color('#5e5e6c');
  const HEAD = s.color('#6e6e7c');
  const CYAN = s.color('#7ef0ff'); // original emissive 0x1b5f73
  const PURPLE = s.color('#d07eff'); // original emissive 0x531b73
  const PINK = s.color('#ff8ad8'); // original emissive 0x731b53
  const WHITE = s.color('#ffffff');
  const DARK = s.color('#222222');

  // ---- body: feet, torso, head, eyes, mouth (all non-glowing) ----
  const body = s.part('body');
  // Feet: two 0.85 x 1.0 x 0.85 pads.
  body.box(-10, 0, -4, -3, 9, 3, FOOT);
  body.box(3, 0, -4, 10, 9, 3, FOOT);
  // Torso: 2.4 x 2.0 x 1.5 centered at y 2.0.
  body.box(-12, 10, -7, 11, 29, 7, SLATE);
  // Head: 1.4 x 1.1 x 1.2 sitting on the torso.
  body.box(-7, 32, -6, 6, 42, 5, HEAD);
  // Chamfer torso + head vertical edges for a softer chiseled silhouette.
  for (const [x, z] of [[-12, -7], [-12, 7], [11, -7], [11, 7]]) {
    for (let y = 10; y <= 29; y++) body.clear(x, y, z);
  }
  for (const [x, z] of [[-7, -6], [-7, 5], [6, -6], [6, 5]]) {
    for (let y = 32; y <= 42; y++) body.clear(x, y, z);
  }
  // Eye whites: proud of the head front, matching face(g, 3.85, 0.64, 1.0).
  body.box(-5, 38, 6, -3, 41, 6, WHITE);
  body.box(3, 38, 6, 5, 41, 6, WHITE);
  // Mouth: a friendly dark bar.
  body.box(-2, 34, 6, 2, 35, 6, DARK);

  // ---- shards: every emissive crystal, one shared glow material ----
  // The originals were thin boxes rotated about z; voxels can't rotate, so
  // the big side shards (rz = ±0.5) step 1 cell every 2 rows and the small
  // top shards (rz = ±0.3) step 1 cell every 3 rows, leaning outward.
  const shards = s.part('shards');
  // Big side shards: 0.4 x 1.4 x 0.4 at (∓1.25, 3.3), tips leaning out.
  for (let y = 26; y <= 39; y++) {
    const step = 3 - Math.floor((y - 26) / 2); // +3 at base .. -3 at tip
    shards.box(-14 + step, y, -2, -11 + step, y, 1, CYAN);
    shards.box(11 - step, y, -2, 14 - step, y, 1, PURPLE);
  }
  // Crown shard: 0.32 x 1.0 x 0.32 at (0, 4.75), straight up to y = 5.2.
  shards.box(-1, 42, -1, 1, 51, 1, PINK);
  // Small crown shards: 0.28 x 0.8 x 0.28 at (∓0.5, 4.6), gentle lean.
  for (let y = 42; y <= 49; y++) {
    const step = 1 - Math.floor((y - 42) / 3); // +1 at base .. -1 at tip
    shards.box(-6 + step, y, -1, -4 + step, y, 1, CYAN);
    shards.box(4 - step, y, -1, 6 - step, y, 1, PURPLE);
  }

  // ---- arms: shoulder-pivoted, hanging 1.8 below (∓1.5, 2.9) ----
  const armL = s.part('armL', { pivot: [-15, 29, 0] });
  armL.box(-18, 11, -3, -12, 28, 3, SLATE);
  const armR = s.part('armR', { pivot: [15, 29, 0] });
  armR.box(12, 11, -3, 18, 28, 3, SLATE);

  // ---- pupils: center-pivoted so blink squash stays centered ----
  const pupilL = s.part('pupilL', { pivot: [-3, 40, 7.5] });
  pupilL.box(-4, 39, 7, -3, 40, 7, DARK);
  const pupilR = s.part('pupilR', { pivot: [4, 40, 7.5] });
  pupilR.box(3, 39, 7, 4, 40, 7, DARK);

  // ---- angry brows: stepped slants, hidden until the boss is hurt ----
  // Inner (nose-side) end sits low, outer end high, like the rotated bars.
  const browL = s.part('browL');
  browL.box(-7, 44, 6, -6, 44, 6, DARK);
  browL.box(-6, 43, 6, -5, 43, 6, DARK);
  browL.box(-5, 42, 6, -3, 42, 6, DARK);
  const browR = s.part('browR');
  browR.box(6, 44, 6, 7, 44, 6, DARK);
  browR.box(5, 43, 6, 6, 43, 6, DARK);
  browR.box(3, 42, 6, 5, 42, 6, DARK);

  // Same-cell overlap across parts z-fights at runtime (each part is its own
  // mesh), so later/decorative parts yield: the arms lose the column buried
  // in the torso, the shards lose the bases buried in the torso, head and
  // arms. Every yielded cell stays filled by the part that keeps it, so the
  // assembled silhouette is unchanged.
  const yieldTo = (part, ...owners) => {
    for (const k of part.voxels.keys()) {
      if (owners.some((o) => o.voxels.has(k))) part.voxels.delete(k);
    }
  };
  yieldTo(armL, body);
  yieldTo(armR, body);
  yieldTo(shards, body, armL, armR);
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
