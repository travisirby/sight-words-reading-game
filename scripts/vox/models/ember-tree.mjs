// Ember tree — a charred, bare tree with glowing ember tips and a few
// chili pods still hanging on. Background scenery for the Pepper Volcano
// world; reads as scorched forest against the ember sky.
//
// Contract: bottom-center anchor, ground contact at y = 0, voxelSize 0.2
// → ~5.2 world units tall. Parts:
//   trunk — charcoal wood, fixed color.
//   ember — glowing tips at the branch ends; its own part so level.js can
//           give it the shared emissive lava material (pulses with the
//           volcano craters).
//   trim  — hanging chili pods (fixed colors).

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'ember-tree', voxelSize: 0.2 });

  const trunk = s.part('trunk');
  const CHAR = s.color('#2e2826');
  const CHAR2 = s.color('#3c3431'); // barky highlight band

  // Trunk: 2x2 column with a kink, widening to a 4x4 root flare.
  trunk.box(-2, 0, -2, 1, 1, 1, CHAR);
  trunk.box(-1, 2, -1, 0, 12, 0, CHAR);
  trunk.box(-1, 8, -1, 0, 9, 0, CHAR2);
  trunk.box(0, 13, -1, 1, 17, 0, CHAR); // kink toward +x

  // Three stepped branches: each a run of 2-cell segments stepping out
  // and up, ending one voxel short of where the ember tip sits.
  const branch = (x0, y0, dirX, dirZ, len) => {
    let x = x0, y = y0, z = 0;
    for (let i = 0; i < len; i++) {
      trunk.box(x, y, z, x + (dirX > 0 ? 1 : 0) - (dirX < 0 ? 1 : 0), y, z + dirZ, CHAR);
      x += dirX; z += dirZ; y += 1;
    }
    return [x, y, z];
  };
  const tips = [];
  tips.push(branch(1, 15, 2, 0, 4)); // long +x branch off the kink
  tips.push(branch(-1, 12, -2, 0, 3)); // -x branch
  tips.push(branch(0, 16, 1, -1, 3)); // short back branch
  trunk.box(0, 18, -1, 1, 19, 0, CHAR); // crown nub
  tips.push([1, 20, 0]);

  // ---- ember: glowing tips capping every branch end ----
  const ember = s.part('ember');
  const EMB = s.color('#ff9a3c');
  const EMB2 = s.color('#ffd54a');
  for (const [x, y, z] of tips) {
    ember.set(x, y, z, EMB);
    ember.set(x, y + 1, z, EMB2);
  }

  // ---- trim: two chili pods hanging from the branches ----
  const trim = s.part('trim');
  const POD = s.color('#e23b2e');
  const POD2 = s.color('#ff7a2e');
  const GRN = s.color('#2f7d2e');
  const pod = (x, y, z, C) => {
    trim.set(x, y, z, GRN); // tiny stem link
    trim.box(x, y - 3, z, x, y - 1, z, C);
    trim.set(x, y - 4, z + (z >= 0 ? 0 : 0), C);
  };
  pod(4, 18, 0, POD);
  pod(-3, 14, 0, POD2);

  return s;
}
