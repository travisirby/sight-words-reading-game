// Bakes authored .vox sources (assets-src/<model>/) into compact render-ready
// JSON (public/models/<model>.json) — one BufferGeometry-worth of data per
// part: hidden faces culled, coplanar same-color faces greedily merged into
// quads, and classic Minecraft-style corner ambient occlusion baked into
// linear-space vertex colors. No textures; src/voxmodel.js loads the result.
//
// Baked JSON:
// {
//   name, voxelSize,
//   origin: [x,y,z],           // float, voxel units; anchors bottom-center
//   parts: [{
//     name, tintable,
//     positions: [...],        // int voxel coords, 3 per vertex (y-up)
//     normals:   [...],        // 1 axis code per vertex: 0 +x, 1 -x, 2 +y...
//     colors:    [...],        // 0-255 bytes, 3 per vertex, LINEAR space,
//                              //   AO pre-multiplied
//     indices:   [...]
//   }]
// }

import { readdirSync, readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseVox } from './vox/voxparse.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'assets-src');
const outDir = join(root, 'public', 'models');

const AO_BRIGHTNESS = [0.55, 0.72, 0.86, 1.0]; // ao level 0 (darkest) .. 3
const AXES = [
  [1, 0, 0], [0, 1, 0], [0, 0, 1],
];

function main() {
  if (!existsSync(srcDir)) {
    console.error('no assets-src/ directory — run `node scripts/vox/build-models.mjs` first');
    process.exit(1);
  }
  mkdirSync(outDir, { recursive: true });
  const models = readdirSync(srcDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && existsSync(join(srcDir, d.name, 'model.json')));
  if (!models.length) {
    console.error('no models found in assets-src/');
    process.exit(1);
  }
  for (const d of models) bakeModel(join(srcDir, d.name));
}

function bakeModel(dir) {
  const meta = JSON.parse(readFileSync(join(dir, 'model.json'), 'utf8'));

  // Load every part into game coords (y-up): game = (vox.x, vox.z, -vox.y).
  // All parts of a model share one frame (the writer guarantees it).
  const parts = meta.parts.map((p) => {
    const { voxels, palette } = parseVox(readFileSync(join(dir, p.file)));
    const cells = new Map(); // "x,y,z" -> [r,g,b] linear floats
    for (const [vx, vy, vz, ci] of voxels) {
      const [r, g, b] = palette[ci - 1];
      cells.set(`${vx},${vz},${-vy}`, [srgbToLinear(r), srgbToLinear(g), srgbToLinear(b)]);
    }
    return { ...p, cells };
  });

  // Anchor from the union bounding box: x/z centered, feet at y = 0.
  let bb = null;
  for (const { cells } of parts) {
    for (const k of cells.keys()) {
      const [x, y, z] = k.split(',').map(Number);
      if (!bb) bb = [x, x, y, y, z, z];
      bb[0] = Math.min(bb[0], x); bb[1] = Math.max(bb[1], x);
      bb[2] = Math.min(bb[2], y); bb[3] = Math.max(bb[3], y);
      bb[4] = Math.min(bb[4], z); bb[5] = Math.max(bb[5], z);
    }
  }
  const origin = meta.anchor === 'center'
    ? [-(bb[0] + bb[1] + 1) / 2, -(bb[2] + bb[3] + 1) / 2, -(bb[4] + bb[5] + 1) / 2]
    : [-(bb[0] + bb[1] + 1) / 2, -bb[2], -(bb[4] + bb[5] + 1) / 2]; // bottom-center

  const baked = {
    name: meta.name,
    voxelSize: meta.voxelSize,
    origin,
    parts: parts.map((p) => {
      const geo = meshPart(p.cells);
      const { cells, file, ...rest } = p;
      return { ...rest, ...geo };
    }),
  };

  const out = join(outDir, `${meta.name}.json`);
  writeFileSync(out, JSON.stringify(baked));
  const tris = baked.parts.reduce((n, p) => n + p.indices.length / 3, 0);
  console.log(`baked ${meta.name}: ${baked.parts.length} parts, ${tris} tris -> ${out}`);
}

// Greedy meshing with per-vertex corner AO. Faces merge only when both the
// voxel color and all four corner AO values match, so merged quads shade
// exactly like unmerged ones.
function meshPart(cells) {
  const solid = (x, y, z) => cells.has(`${x},${y},${z}`);
  let bb = null;
  for (const k of cells.keys()) {
    const p = k.split(',').map(Number);
    if (!bb) bb = [[...p], [...p]];
    for (let i = 0; i < 3; i++) {
      bb[0][i] = Math.min(bb[0][i], p[i]);
      bb[1][i] = Math.max(bb[1][i], p[i]);
    }
  }

  const positions = [], normals = [], colors = [], indices = [];

  for (let d = 0; d < 3; d++) {
    const u = (d + 1) % 3, v = (d + 2) % 3; // cyclic: u_dir x v_dir = d_dir
    const D = AXES[d], U = AXES[u], V = AXES[v];
    for (const s of [1, -1]) {
      const normalCode = d * 2 + (s < 0 ? 1 : 0);
      for (let a = bb[0][d]; a <= bb[1][d]; a++) {
        // Mask of visible faces in this slice, keyed for greedy merging.
        const w = bb[1][u] - bb[0][u] + 1;
        const h = bb[1][v] - bb[0][v] + 1;
        const mask = new Array(w * h).fill(null);
        for (let c = 0; c < h; c++) {
          for (let b = 0; b < w; b++) {
            const pos = [0, 0, 0];
            pos[d] = a; pos[u] = bb[0][u] + b; pos[v] = bb[0][v] + c;
            const key = `${pos[0]},${pos[1]},${pos[2]}`;
            if (!cells.has(key)) continue;
            if (solid(pos[0] + s * D[0], pos[1] + s * D[1], pos[2] + s * D[2])) continue;
            // Corner AO, order: (u-,v-), (u+,v-), (u+,v+), (u-,v+).
            const ao = [
              cornerAO(solid, pos, s, D, U, V, -1, -1),
              cornerAO(solid, pos, s, D, U, V, 1, -1),
              cornerAO(solid, pos, s, D, U, V, 1, 1),
              cornerAO(solid, pos, s, D, U, V, -1, 1),
            ];
            mask[c * w + b] = { rgb: cells.get(key), ao, key: cells.get(key).join(',') + '|' + ao.join('') };
          }
        }
        // Greedy rectangle expansion over the mask.
        for (let c = 0; c < h; c++) {
          for (let b = 0; b < w;) {
            const cell = mask[c * w + b];
            if (!cell) { b++; continue; }
            let quadW = 1;
            while (b + quadW < w && mask[c * w + b + quadW]?.key === cell.key) quadW++;
            let quadH = 1;
            expand: while (c + quadH < h) {
              for (let i = 0; i < quadW; i++) {
                if (mask[(c + quadH) * w + b + i]?.key !== cell.key) break expand;
              }
              quadH++;
            }
            emitQuad(positions, normals, colors, indices, {
              d, u, v, s, a,
              b0: bb[0][u] + b, c0: bb[0][v] + c, quadW, quadH,
              rgb: cell.rgb, ao: cell.ao, normalCode,
            });
            for (let j = 0; j < quadH; j++) {
              for (let i = 0; i < quadW; i++) mask[(c + j) * w + b + i] = null;
            }
            b += quadW;
          }
        }
      }
    }
  }
  return { positions, normals, colors, indices };
}

function cornerAO(solid, pos, s, D, U, V, uo, vo) {
  const bx = pos[0] + s * D[0], by = pos[1] + s * D[1], bz = pos[2] + s * D[2];
  const s1 = solid(bx + uo * U[0], by + uo * U[1], bz + uo * U[2]) ? 1 : 0;
  const s2 = solid(bx + vo * V[0], by + vo * V[1], bz + vo * V[2]) ? 1 : 0;
  const cn = solid(bx + uo * U[0] + vo * V[0], by + uo * U[1] + vo * V[1], bz + uo * U[2] + vo * V[2]) ? 1 : 0;
  return s1 && s2 ? 0 : 3 - (s1 + s2 + cn);
}

function emitQuad(positions, normals, colors, indices, q) {
  const { d, u, v, s, a, b0, c0, quadW, quadH, rgb, ao, normalCode } = q;
  const plane = s > 0 ? a + 1 : a;
  // Corner order matches the AO order: (u-,v-), (u+,v-), (u+,v+), (u-,v+),
  // which is CCW seen from +d; reversed below for the -d face.
  const uvCorners = [
    [b0, c0], [b0 + quadW, c0], [b0 + quadW, c0 + quadH], [b0, c0 + quadH],
  ];
  const base = positions.length / 3;
  for (const [bu, cv] of uvCorners) {
    const p = [0, 0, 0];
    p[d] = plane; p[u] = bu; p[v] = cv;
    positions.push(p[0], p[1], p[2]);
    normals.push(normalCode);
  }
  for (let i = 0; i < 4; i++) {
    const k = AO_BRIGHTNESS[ao[i]];
    colors.push(
      Math.round(rgb[0] * k * 255),
      Math.round(rgb[1] * k * 255),
      Math.round(rgb[2] * k * 255),
    );
  }
  if (s > 0) indices.push(base, base + 1, base + 2, base, base + 2, base + 3);
  else indices.push(base, base + 2, base + 1, base, base + 3, base + 2);
}

function srgbToLinear(byte) {
  const c = byte / 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

main();
