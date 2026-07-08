// Swamp palm - droopy palm scenery for the Purple Cabbage Swamp.
// A curved rust trunk with dark bands, topped by melted-looking salmon and
// teal fronds that arch out and hang down.
//
// Contract: bottom-center anchor, ground contact at y = 0, voxelSize 0.2
// -> roughly 4.8 world units tall. Parts:
//   trunk  - rust trunk with darker bands
//   fronds - fixed salmon-red and teal-green hanging leaves

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'swamp-palm', voxelSize: 0.2 });

  const trunk = s.part('trunk');
  const fronds = s.part('fronds');

  const RUST = s.color('#a85332');
  const RUST_DARK = s.color('#7e3d26');
  const SALMON = s.color('#d96a54');
  const TEAL = s.color('#3f9e8a');

  const occupied = new Map();
  const key = (x, y, z) => `${x},${y},${z}`;
  const claim = (partName, part, x, y, z, colorIndex) => {
    const k = key(x, y, z);
    const owner = occupied.get(k);
    if (owner && owner !== partName) return false;
    occupied.set(k, partName);
    part.set(x, y, z, colorIndex);
    return true;
  };

  const trunkOffset = (y) => [
    y < 5 ? 0 : y < 10 ? 1 : y < 15 ? 2 : 3,
    y < 8 ? 0 : y < 16 ? -1 : -2,
  ];

  // ---- trunk: stepped curve with chunky horizontal bands ----
  for (let y = 0; y <= 21; y++) {
    const [cx, cz] = trunkOffset(y);
    const band = y % 7 === 0;
    const color = band ? RUST_DARK : RUST;
    for (let dx = 0; dx <= 1; dx++) {
      for (let dz = 0; dz <= 1; dz++) {
        claim('trunk', trunk, cx + dx, y, cz + dz, color);
      }
    }
  }

  const [crownX, crownZ] = trunkOffset(21);
  const crownY = 22;

  // Crown knot above the trunk.
  for (let dx = -1; dx <= 1; dx++) {
    for (let dz = -1; dz <= 1; dz++) {
      if (Math.abs(dx) + Math.abs(dz) > 2) continue;
      claim('fronds', fronds, crownX + dx, crownY, crownZ + dz, dx < 0 ? SALMON : TEAL);
    }
  }

  const addFrond = (dirX, dirZ, crossX, crossZ, len, color) => {
    for (let i = 0; i < len; i++) {
      const x = crownX + dirX * i;
      const z = crownZ + dirZ * i;
      const y = crownY + (i < 3 ? 2 - Math.floor(i / 2) : 1 - Math.floor((i - 2) * 0.65));
      const half = i < 3 ? 2 : i < len - 3 ? 1 : 0;
      for (let w = -half; w <= half; w++) {
        claim('fronds', fronds, x + crossX * w, y, z + crossZ * w, color);
      }
    }
  };

  addFrond(1, 0, 0, 1, 10, TEAL);
  addFrond(-1, 0, 0, 1, 9, SALMON);
  addFrond(0, 1, 1, 0, 9, TEAL);
  addFrond(0, -1, 1, 0, 8, SALMON);
  addFrond(1, 1, 0, 1, 8, SALMON);

  return s;
}
