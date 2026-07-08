// Giant cabbage - signature backdrop scenery for the Purple Cabbage Swamp.
// A huge layered cabbage with tintable near-white outer leaves wrapped around
// a fixed purple inner head. The broad terraced shells are chunky on purpose:
// they read from far behind the track while staying friendly to greedy merge.
//
// Contract: bottom-center anchor, ground contact at y = 0, voxelSize 0.2
// -> roughly 6.4 world units tall and 7.4 wide. Parts:
//   leaf  - tintable outer leaf shells, authored near-white with pale ribs
//   inner - fixed purple cabbage core with pale vein stripes

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'giant-cabbage', voxelSize: 0.2 });

  const leaf = s.part('leaf', { tintable: true });
  const inner = s.part('inner');

  const LEAF = s.color('#ffffff');
  const LEAF_VEIN = s.color('#ddd9e8');
  const CORE = s.color('#7d3f8f');
  const CORE_LIT = s.color('#9c5bb0');
  const CORE_VEIN = s.color('#d9c2e8');

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
  const has = (part, x, y, z) => part.voxels.has(key(x, y, z));
  const inside = (x, z, rx, rz, cut = 2) =>
    Math.abs(x) <= rx
    && Math.abs(z) <= rz
    && Math.abs(x) + Math.abs(z) <= rx + rz - cut;

  const profileAt = (rows, y) => {
    for (const row of rows) {
      if (y >= row.y0 && y <= row.y1) return row;
    }
    return null;
  };

  // ---- inner: round purple cabbage head ----
  const innerRows = [
    { y0: 0, y1: 2, rx: 5, rz: 4 },
    { y0: 3, y1: 5, rx: 8, rz: 5 },
    { y0: 6, y1: 8, rx: 11, rz: 7 },
    { y0: 9, y1: 16, rx: 12, rz: 8 },
    { y0: 17, y1: 19, rx: 11, rz: 7 },
    { y0: 20, y1: 22, rx: 8, rz: 5 },
    { y0: 23, y1: 25, rx: 5, rz: 4 },
  ];

  for (let y = 0; y <= 25; y++) {
    const row = profileAt(innerRows, y);
    for (let x = -row.rx; x <= row.rx; x++) {
      for (let z = -row.rz; z <= row.rz; z++) {
        if (!inside(x, z, row.rx, row.rz)) continue;
        const c = y >= 18 ? CORE_LIT : CORE;
        claim('inner', inner, x, y, z, c);
      }
    }
  }

  const frontSurfaceZ = (part, x, y, zMax) => {
    for (let z = zMax; z >= -zMax; z--) {
      if (has(part, x, y, z)) return z;
    }
    return null;
  };

  // Main vertical vein and a few broad branch veins on the visible front.
  for (let y = 5; y <= 24; y++) {
    const row = profileAt(innerRows, y);
    for (const x of [0]) {
      const z = frontSurfaceZ(inner, x, y, row.rz);
      if (z !== null) claim('inner', inner, x, y, z, CORE_VEIN);
    }
  }

  // ---- leaf: outer wrapped shells ----
  const shellRows = [
    { y0: 0, y1: 2, half: 7, depth: 4 },
    { y0: 3, y1: 5, half: 10, depth: 6 },
    { y0: 6, y1: 8, half: 13, depth: 8 },
    { y0: 9, y1: 20, half: 16, depth: 9 },
    { y0: 21, y1: 24, half: 12, depth: 7 },
    { y0: 25, y1: 29, half: 8, depth: 5 },
  ];

  // Back plate.
  for (let y = 0; y <= 29; y++) {
    const row = profileAt(shellRows, y);
    for (let x = -row.half; x <= row.half; x++) {
      if (Math.abs(x) + Math.max(0, y - 25) > row.half + 2) continue;
      const c = LEAF;
      claim('leaf', leaf, x, y, -11, c);
      if (Math.abs(x) < row.half - 1) claim('leaf', leaf, x, y, -10, c);
    }
  }

  // Left and right side plates.
  for (let y = 2; y <= 27; y++) {
    const row = profileAt(shellRows, y);
    for (let z = -row.depth; z <= row.depth; z++) {
      if (Math.abs(z) + Math.max(0, y - 23) > row.depth + 2) continue;
      for (const side of [-1, 1]) {
        const x = side * 16;
        const c = LEAF;
        claim('leaf', leaf, x, y, z, c);
        if (Math.abs(z) < row.depth - 1) claim('leaf', leaf, x - side, y, z, c);
      }
    }
  }

  // Front peeled leaf: a drooping sheet pulled toward +z, touching ground.
  for (let i = 0; i <= 16; i++) {
    const y = 16 - i;
    const z = 12 + Math.floor(i * 0.45);
    const half = Math.max(3, 8 - Math.floor(i / 4));
    for (let x = -half; x <= half; x++) {
      if (Math.abs(x) + Math.floor(i / 3) > half + 3) continue;
      const c = Math.abs(x) <= 1 ? LEAF_VEIN : LEAF;
      claim('leaf', leaf, x, y, z, c);
      if (i < 9 && Math.abs(x) <= half - 2) claim('leaf', leaf, x, y, z + 1, c);
    }
  }

  return s;
}
