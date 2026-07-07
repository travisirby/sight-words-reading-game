import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// The unit voxel for per-object meshes (characters, props, furniture). A
// slight chamfer lets edges catch the directional light so blocks read as
// crafted toys instead of default cubes. It extends BoxGeometry, so the 6
// per-face material groups and ~0-1 per-face UVs that the character heads
// rely on still hold. RoundedBoxGeometry is non-indexed and heavy (324
// vertices) — fine for a handful of hero meshes, ruinous for instancing;
// high-count InstancedMeshes use chamferVoxelGeo below instead.
export const VOXEL_BEVEL = 0.07;
export const voxelGeo = new RoundedBoxGeometry(1, 1, 1, 1, VOXEL_BEVEL);

// Beveled box at explicit dimensions for low-count per-object shapes.
// Radius is clamped by RoundedBoxGeometry to the shortest side.
export const roundedBox = (w, h, d, r = VOXEL_BEVEL) =>
  new RoundedBoxGeometry(w, h, d, 1, r);

// Cheap chamfered box for InstancedMesh use: 24 indexed vertices / 44 tris
// (vs RoundedBoxGeometry's 324 unshared vertices — at thousands of terrain
// instances that difference is millions of vertex transforms per frame on
// the iPad target). Each cube corner carries three vertices, one per
// adjacent face, with that face's normal: faces shade flat, bevel quads and
// corner tris interpolate between face normals and catch the light just
// like the rounded box. No material groups and no UVs — instanced meshes
// here are untextured single-material; per-face tinting can key off the
// axis-aligned vertex normals (see overworld.js groundGeo).
export function chamferBox(w = 1, h = 1, d = 1, bevel = VOXEL_BEVEL) {
  const half = [w / 2, h / 2, d / 2];
  const b = Math.min(bevel, half[0], half[1], half[2]);
  const pos = [];
  const nrm = [];
  const key2i = new Map();
  // Vertex at cube corner (cx,cy,cz in ±1), belonging to the face whose
  // normal axis is `axis`: on the face plane along `axis`, inset by the
  // bevel along the other two.
  const vid = (cx, cy, cz, axis) => {
    const k = `${cx},${cy},${cz},${axis}`;
    let i = key2i.get(k);
    if (i === undefined) {
      i = pos.length / 3;
      const c = [cx, cy, cz];
      for (let a = 0; a < 3; a++) pos.push(c[a] * (a === axis ? half[a] : half[a] - b));
      const n = [0, 0, 0];
      n[axis] = c[axis];
      nrm.push(...n);
      key2i.set(k, i);
    }
    return i;
  };
  const idx = [];
  const quad = (a, bb, c, dd) => idx.push(a, bb, c, a, c, dd);
  // 6 inset face quads.
  for (let axis = 0; axis < 3; axis++) {
    const u = (axis + 1) % 3;
    const v = (axis + 2) % 3;
    for (const s of [1, -1]) {
      const corner = (su, sv) => {
        const c = [0, 0, 0];
        c[axis] = s;
        c[u] = su;
        c[v] = sv;
        return vid(c[0], c[1], c[2], axis);
      };
      quad(corner(-1, -1), corner(1, -1), corner(1, 1), corner(-1, 1));
    }
  }
  // 12 edge bevel quads (one per pair of adjacent faces).
  for (let a1 = 0; a1 < 3; a1++) {
    for (let a2 = a1 + 1; a2 < 3; a2++) {
      const a3 = 3 - a1 - a2;
      for (const s1 of [1, -1]) {
        for (const s2 of [1, -1]) {
          const corner = (s3) => {
            const c = [0, 0, 0];
            c[a1] = s1;
            c[a2] = s2;
            c[a3] = s3;
            return c;
          };
          const lo = corner(-1);
          const hi = corner(1);
          quad(vid(...lo, a1), vid(...hi, a1), vid(...hi, a2), vid(...lo, a2));
        }
      }
    }
  }
  // 8 corner triangles.
  for (const sx of [1, -1]) {
    for (const sy of [1, -1]) {
      for (const sz of [1, -1]) {
        idx.push(vid(sx, sy, sz, 0), vid(sx, sy, sz, 1), vid(sx, sy, sz, 2));
      }
    }
  }
  // Outward winding, settled empirically: flip any triangle whose geometric
  // normal opposes the summed vertex normals. Cheaper to prove here once
  // than to hand-derive 44 winding orders.
  const A = new THREE.Vector3();
  const B = new THREE.Vector3();
  const C = new THREE.Vector3();
  for (let t = 0; t < idx.length; t += 3) {
    const [i0, i1, i2] = [idx[t], idx[t + 1], idx[t + 2]];
    A.fromArray(pos, i0 * 3);
    B.fromArray(pos, i1 * 3).sub(A);
    C.fromArray(pos, i2 * 3).sub(A);
    B.cross(C);
    A.set(
      nrm[i0 * 3] + nrm[i1 * 3] + nrm[i2 * 3],
      nrm[i0 * 3 + 1] + nrm[i1 * 3 + 1] + nrm[i2 * 3 + 1],
      nrm[i0 * 3 + 2] + nrm[i1 * 3 + 2] + nrm[i2 * 3 + 2]
    );
    if (B.dot(A) < 0) {
      idx[t + 1] = i2;
      idx[t + 2] = i1;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nrm), 3));
  geo.setIndex(idx);
  return geo;
}

// The shared unit voxel for high-count InstancedMeshes (terrain, hills,
// overworld ground/decor/tiles).
export const chamferVoxelGeo = chamferBox();

// Fresh copy for callers that mutate attributes (e.g. baked vertex colors).
export const makeVoxelGeo = () => chamferBox();
