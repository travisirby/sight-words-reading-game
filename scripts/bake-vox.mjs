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
import { meshPart, voxToCells } from './vox/mesher.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'assets-src');
const outDir = join(root, 'public', 'models');

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
    return { ...p, cells: voxToCells(voxels, palette) };
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

main();
