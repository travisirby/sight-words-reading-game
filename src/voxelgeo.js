import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// The one unit voxel every builder shares. A slight chamfer (segments=1 keeps
// it to ~108 tris vs 12 for a sharp box) lets edges catch the directional
// light so blocks read as crafted toys instead of default cubes. It extends
// BoxGeometry, so the 6 per-face material groups and ~0-1 per-face UVs that
// the character heads rely on still hold.
export const VOXEL_BEVEL = 0.07;
export const voxelGeo = new RoundedBoxGeometry(1, 1, 1, 1, VOXEL_BEVEL);

// Fresh copy for callers that mutate attributes (e.g. baked vertex colors).
export const makeVoxelGeo = () => new RoundedBoxGeometry(1, 1, 1, 1, VOXEL_BEVEL);

// Beveled box at explicit dimensions, for the few non-unit shared geometries
// (coins etc.). Radius is clamped by RoundedBoxGeometry to the shortest side.
export const roundedBox = (w, h, d, r = VOXEL_BEVEL) =>
  new RoundedBoxGeometry(w, h, d, 1, r);
