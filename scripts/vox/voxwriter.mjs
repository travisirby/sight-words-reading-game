// Programmatic MagicaVoxel .vox authoring.
//
// Authoring space is GAME space: y-up, integer voxel coords, negatives fine.
// One VoxScene = one model made of named parts; all parts share a single
// coordinate frame so the baker can reassemble them in alignment. save()
// converts to MagicaVoxel's z-up grid (vox.x = x, vox.y = -z, vox.z = y,
// offset to non-negative using the UNION bounds of all parts) and writes
// one .vox per part plus a model.json meta describing the set.
//
// Format per the spec (MAIN / SIZE / XYZI / RGBA chunks):
// https://github.com/ephtracy/voxel-model/blob/master/MagicaVoxel-file-format-vox.txt

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const VOX_VERSION = 150;

export class VoxScene {
  constructor({ name, voxelSize = 0.1, anchor = 'bottom-center' }) {
    if (!name) throw new Error('VoxScene needs a name');
    this.name = name;
    this.voxelSize = voxelSize;
    this.anchor = anchor;
    this.parts = [];
    // Palette slot 0 is reserved by the format; usable indices are 1..255.
    this.palette = []; // array of [r,g,b,a], palette[i] = color index i+1
    this.paletteLookup = new Map();
  }

  // Register a color, deduped; returns the .vox color index (1..255).
  color(hex) {
    const key = hex.toLowerCase();
    if (this.paletteLookup.has(key)) return this.paletteLookup.get(key);
    const n = parseInt(key.replace('#', ''), 16);
    if (this.palette.length >= 255) throw new Error('palette full (255 colors max)');
    this.palette.push([(n >> 16) & 255, (n >> 8) & 255, n & 255, 255]);
    const idx = this.palette.length; // index 1 = palette[0]
    this.paletteLookup.set(key, idx);
    return idx;
  }

  part(name, opts = {}) {
    const p = new VoxPart(name, opts);
    this.parts.push(p);
    return p;
  }

  // Union bounds over every part, in game coords. Cells, inclusive.
  bounds() {
    let b = null;
    for (const part of this.parts) {
      for (const k of part.voxels.keys()) {
        const [x, y, z] = k.split(',').map(Number);
        if (!b) b = { x0: x, x1: x, y0: y, y1: y, z0: z, z1: z };
        b.x0 = Math.min(b.x0, x); b.x1 = Math.max(b.x1, x);
        b.y0 = Math.min(b.y0, y); b.y1 = Math.max(b.y1, y);
        b.z0 = Math.min(b.z0, z); b.z1 = Math.max(b.z1, z);
      }
    }
    if (!b) throw new Error(`model "${this.name}" has no voxels`);
    return b;
  }

  // Writes <dir>/<name>/<part>.vox for each part + <dir>/<name>/model.json.
  save(dir) {
    const b = this.bounds();
    const size = {
      x: b.x1 - b.x0 + 1,
      y: b.z1 - b.z0 + 1, // vox y axis carries game -z
      z: b.y1 - b.y0 + 1, // vox z axis carries game y (both up)
    };
    if (size.x > 256 || size.y > 256 || size.z > 256) {
      throw new Error(`model "${this.name}" exceeds 256^3 voxels`);
    }
    const outDir = join(dir, this.name);
    mkdirSync(outDir, { recursive: true });
    const meta = {
      name: this.name,
      voxelSize: this.voxelSize,
      anchor: this.anchor,
      parts: [],
    };
    for (const part of this.parts) {
      const voxels = [];
      for (const [k, ci] of part.voxels) {
        const [x, y, z] = k.split(',').map(Number);
        // game (x, y-up, z) -> vox (x, -z, y), shifted into the union box.
        voxels.push([x - b.x0, b.z1 - z, y - b.y0, ci]);
      }
      const file = `${part.name}.vox`;
      writeFileSync(join(outDir, file), serializeVox(size, voxels, this.palette));
      const entry = { name: part.name, file, ...part.opts };
      if (part.opts.pivot) {
        // A pivot (authoring coords, floats fine) makes the baked part's
        // local origin sit there, so the runtime can rotate/scale the part
        // about it (limb swings, pupil blinks). Stored in the same shifted
        // frame the baker reconstructs from the .vox grid.
        const [px, py, pz] = part.opts.pivot;
        entry.pivot = [px - b.x0, py - b.y0, pz - b.z1];
      }
      meta.parts.push(entry);
    }
    writeFileSync(join(outDir, 'model.json'), JSON.stringify(meta, null, 2) + '\n');
    return outDir;
  }
}

class VoxPart {
  constructor(name, opts) {
    this.name = name;
    this.opts = opts; // e.g. { tintable: true } — passed through to the baker
    this.voxels = new Map(); // "x,y,z" -> colorIndex
  }

  set(x, y, z, colorIndex) {
    this.voxels.set(`${x},${y},${z}`, colorIndex);
    return this;
  }

  clear(x, y, z) {
    this.voxels.delete(`${x},${y},${z}`);
    return this;
  }

  // Filled box, inclusive corners. colorIndex may be a function (x,y,z)=>index
  // for per-voxel patterns, or a plain index.
  box(x0, y0, z0, x1, y1, z1, colorIndex) {
    const ci = typeof colorIndex === 'function' ? colorIndex : () => colorIndex;
    for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++)
      for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++)
        for (let z = Math.min(z0, z1); z <= Math.max(z0, z1); z++)
          this.set(x, y, z, ci(x, y, z));
    return this;
  }

  // Mirror every voxel across the plane x = axisX (use the default 0 when the
  // model is centered on cell column 0, or -0.5 for an even-width model
  // spanning e.g. -4..3).
  mirrorX(axisX = 0) {
    for (const [k, ci] of [...this.voxels]) {
      const [x, y, z] = k.split(',').map(Number);
      this.set(Math.round(2 * axisX - x), y, z, ci);
    }
    return this;
  }
}

function serializeVox(size, voxels, palette) {
  const sizeChunk = chunk('SIZE', intBytes([size.x, size.y, size.z]));
  const xyzi = Buffer.alloc(4 + voxels.length * 4);
  xyzi.writeInt32LE(voxels.length, 0);
  voxels.forEach(([x, y, z, ci], i) => {
    xyzi[4 + i * 4] = x; xyzi[5 + i * 4] = y; xyzi[6 + i * 4] = z; xyzi[7 + i * 4] = ci;
  });
  const xyziChunk = chunk('XYZI', xyzi);
  // RGBA: 256 entries; XYZI color index i reads palette entry i-1.
  const rgba = Buffer.alloc(256 * 4);
  for (let i = 0; i < 256; i++) {
    const c = palette[i] || [128, 128, 128, 255];
    rgba.set(c, i * 4);
  }
  const rgbaChunk = chunk('RGBA', rgba);
  const children = Buffer.concat([sizeChunk, xyziChunk, rgbaChunk]);
  const main = Buffer.alloc(12);
  main.write('MAIN', 0, 'ascii');
  main.writeInt32LE(0, 4); // MAIN has no content of its own
  main.writeInt32LE(children.length, 8);
  const header = Buffer.alloc(8);
  header.write('VOX ', 0, 'ascii');
  header.writeInt32LE(VOX_VERSION, 4);
  return Buffer.concat([header, main, children]);
}

function chunk(id, content) {
  const head = Buffer.alloc(12);
  head.write(id, 0, 'ascii');
  head.writeInt32LE(content.length, 4);
  head.writeInt32LE(0, 8); // no child chunks
  return Buffer.concat([head, content]);
}

function intBytes(ints) {
  const b = Buffer.alloc(ints.length * 4);
  ints.forEach((v, i) => b.writeInt32LE(v, i * 4));
  return b;
}
