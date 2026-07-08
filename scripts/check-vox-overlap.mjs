// Reports any voxel cell claimed by more than one .vox part file for a model.
// Usage: node scripts/check-vox-overlap.mjs [model-name ...]

import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const models = process.argv.slice(2);
if (!models.length) {
  models.push(
    ...readdirSync('assets-src').filter((d) => existsSync(join('assets-src', d, 'model.json')))
  );
}

function readXyziCells(file) {
  const buf = readFileSync(file);
  if (buf.toString('ascii', 0, 4) !== 'VOX ') throw new Error(`${file}: not a .vox file`);
  const cells = [];

  const walk = (start, end) => {
    let offset = start;
    while (offset + 12 <= end) {
      const id = buf.toString('ascii', offset, offset + 4);
      const contentSize = buf.readInt32LE(offset + 4);
      const childrenSize = buf.readInt32LE(offset + 8);
      const contentStart = offset + 12;
      const contentEnd = contentStart + contentSize;
      const childrenEnd = contentEnd + childrenSize;
      if (childrenEnd > buf.length) throw new Error(`${file}: malformed ${id} chunk`);

      if (id === 'XYZI') {
        const n = buf.readInt32LE(contentStart);
        for (let i = 0; i < n; i++) {
          const p = contentStart + 4 + i * 4;
          cells.push(`${buf[p]},${buf[p + 1]},${buf[p + 2]}`);
        }
      }
      if (childrenSize) walk(contentEnd, childrenEnd);
      offset = childrenEnd;
    }
  };

  walk(8, buf.length);
  return cells;
}

let totalOverlaps = 0;

for (const model of models) {
  const dir = join('assets-src', model);
  if (!existsSync(dir)) {
    console.error(`${model}: missing ${dir}`);
    totalOverlaps++;
    continue;
  }

  const files = readdirSync(dir).filter((f) => f.endsWith('.vox')).sort();
  const seen = new Map();
  const overlaps = [];

  for (const file of files) {
    for (const cell of readXyziCells(join(dir, file))) {
      const previous = seen.get(cell);
      if (previous && previous !== file) overlaps.push({ cell, a: previous, b: file });
      else seen.set(cell, file);
    }
  }

  if (overlaps.length) {
    totalOverlaps += overlaps.length;
    console.error(`${model}: ${overlaps.length} overlap(s)`);
    for (const o of overlaps.slice(0, 20)) {
      console.error(`  ${o.cell}: ${o.a} and ${o.b}`);
    }
    if (overlaps.length > 20) console.error(`  ... ${overlaps.length - 20} more`);
  } else {
    console.log(`${model}: 0 overlaps across ${files.length} part files`);
  }
}

if (totalOverlaps) process.exit(1);
