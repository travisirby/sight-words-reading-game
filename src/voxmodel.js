// Runtime loader for baked voxel models (public/models/*.json, produced by
// scripts/bake-vox.mjs). Each part becomes one Mesh with one draw call:
// vertex colors carry the palette + baked AO, so a plain MeshLambertMaterial
// is all that's needed — no textures.
//
// Multi-part models: buildVoxMesh returns a Group plus a name->Mesh map, so
// characters can re-parent limb parts under pivot Groups and keep the
// existing pivot-rotation animation style (see makeKidMesh in player.js).

import * as THREE from 'three';

const NORMALS = [
  [1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1],
];

const cache = new Map(); // url -> Promise<model>

// Fetches + decodes a baked model. The result is cached and shared;
// geometries are built once per model and reused by every buildVoxMesh call.
export function loadVoxModel(url) {
  if (!cache.has(url)) {
    const p = fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`vox model ${url}: HTTP ${r.status}`);
        return r.json();
      })
      .then((data) => ({
        name: data.name,
        parts: data.parts.map((p) => ({
          name: p.name,
          tintable: !!p.tintable,
          geometry: buildGeometry(p, data.origin, data.voxelSize),
        })),
      }));
    p.catch(() => cache.delete(url)); // allow retry after a failed load
    cache.set(url, p);
  }
  return cache.get(url);
}

function buildGeometry(part, origin, voxelSize) {
  const n = part.positions.length / 3;
  const pos = new Float32Array(n * 3);
  const nrm = new Float32Array(n * 3);
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    for (let a = 0; a < 3; a++) {
      pos[i * 3 + a] = (part.positions[i * 3 + a] + origin[a]) * voxelSize;
      nrm[i * 3 + a] = NORMALS[part.normals[i]][a];
      col[i * 3 + a] = part.colors[i * 3 + a] / 255; // baked in linear space
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('normal', new THREE.BufferAttribute(nrm, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setIndex(part.indices);
  return geo;
}

// Builds a renderable Group from a loaded model. Pass materials to share or
// tint per-part materials, e.g. { body: myTintableMaterial }; parts without
// an override get a fresh white MeshLambertMaterial (vertex colors show
// through as authored). Returns { group, parts: { [name]: Mesh } }.
export function buildVoxMesh(model, { materials = {} } = {}) {
  const group = new THREE.Group();
  const parts = {};
  for (const p of model.parts) {
    const mat = materials[p.name] ||
      new THREE.MeshLambertMaterial({ vertexColors: true });
    mat.vertexColors = true;
    const mesh = new THREE.Mesh(p.geometry, mat);
    mesh.name = p.name;
    group.add(mesh);
    parts[p.name] = mesh;
  }
  return { group, parts };
}
