// Pepper monolith — a giant chili rammed tip-first into the volcanic
// ground, leaning like a thrown dart. Background scenery for the Pepper
// Volcano world.
//
// Contract: bottom-center anchor, ground contact at y = 0, voxelSize 0.2
// (chunky background grid, same rationale as pepper-volcano) → ~8.4 world
// units tall. Parts:
//   body — the chili, tintable: authored near-white so level.js can drive
//          one shared material per color variant (red/orange/yellow).
//   leaf — green calyx draped over the fat top end + curly stem, fixed.
//
// The buried tip is slim at the ground and the body fattens toward the
// calyx shoulder at the top — that top-heavy silhouette is what makes it
// read "pepper" and not "rock spire". Radius steps every 3 rows and the
// footprint is a chamfered square, keeping the greedy merge effective.

import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'pepper-monolith', voxelSize: 0.2 });

  const body = s.part('body', { tintable: true });
  const B = s.color('#f4f4f4');
  const B2 = s.color('#dedede'); // sheen band, shows through the tint

  const H = 36;
  // Half-width per 3-row tier, buried tip -> fat shoulder.
  const prof = [3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6];
  const half = (y) => prof[Math.min(prof.length - 1, Math.floor(y / 3))];
  const inside = (x, z, r) => {
    const cut = Math.min(3, Math.max(0, r - 2));
    return Math.max(Math.abs(x), Math.abs(z)) <= r
      && Math.abs(x) + Math.abs(z) <= 2 * r - cut;
  };
  // Whole rows shift with height: the pepper leans toward +x.
  const lean = (y) => Math.floor(y / 7);

  for (let y = 0; y < H; y++) {
    const r = half(y);
    const dx = lean(y);
    for (let x = -r; x <= r; x++) {
      for (let z = -r; z <= r; z++) {
        if (!inside(x, z, r)) continue;
        // One pale sheen stripe up the +x flank sells the waxy skin
        // without fragmenting merges (whole-column color band).
        body.set(x + dx, y, z, x === r - 1 && z <= 0 ? B2 : B);
      }
    }
  }
  // Rounded shoulder dome on top.
  const capDx = lean(H);
  for (let x = -4; x <= 4; x++) {
    for (let z = -4; z <= 4; z++) {
      if (inside(x, z, 4)) body.set(x + capDx, H, z, B);
    }
  }
  body.box(-2 + capDx, H + 1, -2, 2 + capDx, H + 1, 2, B);

  // ---- leaf: calyx sepals draped over the shoulder + curly stem ----
  const leaf = s.part('leaf');
  const GRN = s.color('#3f9e3a');
  const GRN2 = s.color('#2f7d2e');

  // Five sepals over the rim, stepping down/outward like the volcano's
  // crater leaves; the fifth rides the lean-side diagonal.
  for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    for (let j = 0; j < 5; j++) {
      const y = H + 1 - j;
      const r = (j === 0 ? 3 : half(Math.min(y, H - 1)) + 1) - (j === 4 ? -1 : 0);
      const t = j < 3 ? 1 : 0; // narrows to the tip
      for (let w = -t; w <= t; w++) {
        const x = (dx !== 0 ? dx * r : w) + capDx;
        const z = dz !== 0 ? dz * r : w;
        leaf.set(x, y, z, j < 2 ? GRN : GRN2);
      }
    }
  }
  // Curly stem: rises off-center, hooks against the lean for balance.
  for (let y = H + 2; y <= H + 5; y++) leaf.box(capDx - 1, y, -1, capDx, y, 0, GRN2);
  leaf.box(capDx - 3, H + 5, -1, capDx - 2, H + 5, 0, GRN2);
  leaf.set(capDx - 3, H + 4, -1, GRN2);
  leaf.set(capDx - 3, H + 4, 0, GRN2);

  return s;
}
