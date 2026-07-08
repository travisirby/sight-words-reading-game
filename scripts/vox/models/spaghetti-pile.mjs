// Spaghetti pile - signature prop for Pasta Plains. A heaping mound of
// noodles on a wide plate, ladled with marinara and topped with meatballs,
// as if a giant's dinner landed in the grass. Chunky wavy noodle bands keep
// the strand look friendly to greedy merge at gameplay distance.
//
// Contract: bottom-center anchor, ground contact at y = 0, voxelSize 0.2
// -> roughly 3.4 world units tall and 5.8 wide. Parts (all static, no
// pivots, no tint):
//   plate    - cream plate with a raised rim under everything
//   noodles  - golden mound in two wavy strand tones + surface loops
//   sauce    - marinara pooled on the crown with drips down the flanks
//   meatball - three brown meatballs resting in the sauce

import { VoxScene } from '../voxwriter.mjs';

// Deterministic integer hash -> [0, 1). Pure integer ops so the bake is
// identical on every platform (no trig/RNG in model scripts).
function hash(x, z, salt = 0) {
  let h = (x * 374761393 + z * 668265263 + salt * 1274126177) | 0;
  h = Math.imul(h ^ (h >>> 13), 1103515245);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

export default function build() {
  const s = new VoxScene({ name: 'spaghetti-pile', voxelSize: 0.2 });

  const plate = s.part('plate');
  const noodles = s.part('noodles');
  const sauce = s.part('sauce');
  const meatball = s.part('meatball');

  const PLATE = s.color('#f6ead2');
  const PLATE_RIM = s.color('#fff8e6');
  const NOODLE = s.color('#f5d778');
  const NOODLE_DK = s.color('#e8c25f');
  const NOODLE_LOOP = s.color('#ffe79a');
  const SAUCE = s.color('#d2422a');
  const SAUCE_LIT = s.color('#e05535');
  const MEAT = s.color('#7a4326');
  const MEAT_LIT = s.color('#8a4b2d');

  // Ellipse test in integers: x^2/rx^2 + z^2/rz^2 <= 1.
  const inEllipse = (x, z, rx, rz) => x * x * rz * rz + z * z * rx * rx <= rx * rx * rz * rz;

  // ---- plate: wide oval dish, 2 cells thick, rim one cell proud ----
  const PRX = 14;
  const PRZ = 11;
  for (let x = -PRX; x <= PRX; x++) {
    for (let z = -PRZ; z <= PRZ; z++) {
      if (!inEllipse(x, z, PRX, PRZ)) continue;
      plate.set(x, 0, z, PLATE);
      plate.set(x, 1, z, inEllipse(x, z, PRX - 2, PRZ - 2) ? PLATE : PLATE_RIM);
      // Raised rim ring on the outer edge.
      if (!inEllipse(x, z, PRX - 2, PRZ - 2)) plate.set(x, 2, z, PLATE_RIM);
    }
  }

  // ---- noodle mound: dome height field with a hashed wobble ----
  const RX = 12;
  const RZ = 10;
  const H = 12; // crown cells above the plate top
  const TOP = 2; // first mound row (plate surface is y = 1, rim y = 2)
  const heightAt = (x, z) => {
    if (!inEllipse(x, z, RX, RZ)) return -1;
    // Dome: H * sqrt(1 - r^2), plus a lumpy wobble so it reads as a heap
    // of strands, not a smooth hill.
    const r2 = (x * x) / (RX * RX) + (z * z) / (RZ * RZ);
    const dome = H * Math.sqrt(Math.max(0, 1 - r2));
    // Chunky 4x4 lumps, then terraced into 2-cell steps: per-cell height
    // would give every crown cell its own top-face quad and triple the
    // bake size (wide treads merge into long quads, like pepper-volcano).
    const wobble = (hash(x >> 2, z >> 2, 7) - 0.5) * 2.4;
    return Math.max(1, Math.round((dome + wobble) / 2) * 2);
  };

  // Two-tone strand bands, purely horizontal and aligned to the 2-cell
  // terraces: any drift with x/z (or a band edge inside a terrace cliff)
  // would split every dome ring into short quads and triple the bake.
  // The stepped silhouette + loops supply the "coiled" read.
  const strandColor = (x, y, z) => (y >> 1) & 1 ? NOODLE : NOODLE_DK;

  // Sauce blob footprint on the crown, off-center toward the camera.
  const sauceAt = (x, z) => inEllipse(x - 1, z - 2, 7, 6);

  for (let x = -RX; x <= RX; x++) {
    for (let z = -RZ; z <= RZ; z++) {
      const h = heightAt(x, z);
      if (h < 0) continue;
      const top = TOP + h - 1;
      for (let y = TOP; y <= top; y++) {
        // The crown of the central blob belongs to the sauce part: marinara
        // ladled over the top, two cells deep so drips read from the side.
        if (sauceAt(x, z) && y >= top - 1) {
          sauce.set(x, y, z, y === top ? SAUCE_LIT : SAUCE);
        } else {
          noodles.set(x, y, z, strandColor(x, y, z));
        }
      }
    }
  }

  // Sauce drips: short runs down the mound flank from the blob edge.
  for (const [dx, dz, len] of [[-6, 4, 4], [6, 6, 3], [2, 8, 4], [-3, -4, 3], [7, -1, 4]]) {
    // Walk outward from the blob edge cell, following the surface down.
    let x = dx;
    let z = dz;
    const sx = dx === 0 ? 0 : Math.sign(dx);
    const sz = dz === 0 ? 0 : Math.sign(dz);
    for (let i = 0; i < len; i++) {
      const h = heightAt(x, z);
      if (h < 0) break;
      const y = TOP + h; // one cell proud of the noodle surface
      sauce.set(x, y, z, i === 0 ? SAUCE_LIT : SAUCE);
      if (hash(x, z, 11) < 0.5) x += sx;
      else z += sz;
    }
  }

  // Noodle loops: single bright voxels scattered proud of the surface so
  // the silhouette is bumpy like coiled strands (skip the sauce blob).
  for (let i = 0; i < 16; i++) {
    const x = Math.round((hash(i, 3, 21) - 0.5) * 2 * (RX - 1));
    const z = Math.round((hash(i, 5, 22) - 0.5) * 2 * (RZ - 1));
    const h = heightAt(x, z);
    if (h < 0 || sauceAt(x, z)) continue;
    noodles.set(x, TOP + h, z, hash(x, z, 23) < 0.4 ? NOODLE_LOOP : NOODLE);
  }

  // A few strands slumped over the plate rim onto the ground.
  for (const [px, pz, ax] of [[-10, 5, -1], [11, 3, 1], [3, 9, 0]]) {
    let y = TOP + Math.max(1, heightAt(px, pz));
    let x = px;
    let z = pz;
    while (y > 0) {
      noodles.set(x, y, z, NOODLE);
      y--;
      if (y === 2 || y === 1) {
        // Kick outward as the strand crosses the rim.
        x += ax;
        z += ax === 0 ? 1 : 0;
      }
    }
  }

  // ---- meatballs: three spheres nested in the sauce crown ----
  // Chamfered box balls, not true spheres: sphere staircasing is all tiny
  // AO-distinct quads and doubles the part's bake.
  const ball = (cx, cy, cz, r) => {
    for (let y = -r; y <= r; y++) {
      const half = Math.abs(y) === r ? r - 1 : r;
      for (let x = -half; x <= half; x++) {
        for (let z = -half; z <= half; z++) {
          if (Math.abs(x) === half && Math.abs(z) === half && Math.abs(y) >= r - 1) continue;
          const c = y === r && x <= 0 ? MEAT_LIT : MEAT;
          meatball.set(cx + x, cy + y, cz + z, c);
        }
      }
    }
  };
  const crown = TOP + H;
  ball(-4, crown - 1, 1, 3);
  ball(4, crown - 2, 4, 2);
  ball(1, crown - 3, -4, 2);

  // No cell may belong to two parts: the meatballs sink into the sauce and
  // noodle crown, the sauce crown/drips brush the noodle surface. Static
  // prop, so decoration yields to the mound it rests on.
  const yieldTo = (part, ...owners) => {
    for (const k of part.voxels.keys()) {
      if (owners.some((o) => o.voxels.has(k))) part.voxels.delete(k);
    }
  };
  yieldTo(sauce, noodles, plate);
  yieldTo(meatball, sauce, noodles, plate);
  yieldTo(noodles, plate);

  return s;
}
