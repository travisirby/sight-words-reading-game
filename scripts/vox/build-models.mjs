// Runs every model script in scripts/vox/models/ and writes its .vox
// sources (plus model.json meta) into assets-src/. Each model script
// default-exports a function returning a VoxScene.

import { readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const modelsDir = join(here, 'models');
const outDir = join(here, '..', '..', 'assets-src');

for (const f of readdirSync(modelsDir).filter((f) => f.endsWith('.mjs')).sort()) {
  const { default: build } = await import(pathToFileURL(join(modelsDir, f)).href);
  const scene = build();
  const dir = scene.save(outDir);
  console.log(`authored ${scene.name} (${scene.parts.length} part${scene.parts.length > 1 ? 's' : ''}) -> ${dir}`);
}
