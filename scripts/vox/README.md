# Code-driven .vox asset pipeline

All voxel models are authored in code, serialized to real MagicaVoxel `.vox`
files, then baked into compact render-ready JSON. No image textures, one draw
call per part.

## Workflow

```
scripts/vox/models/*.mjs        you write these (voxel-placement scripts)
        │  node scripts/vox/build-models.mjs
        ▼
assets-src/<model>/*.vox        real .vox files (open them in MagicaVoxel)
assets-src/<model>/model.json   meta: voxelSize, anchor, part flags
        │  node scripts/bake-vox.mjs
        ▼
public/models/<model>.json      culled + greedy-merged mesh, baked corner AO
        │  loadVoxModel()/buildVoxMesh()  (src/voxmodel.js)
        ▼
THREE.Mesh per part, MeshLambertMaterial({ vertexColors: true })
```

Run both steps with:

```
npm run gen:vox
```

## Authoring a model

Create `scripts/vox/models/<name>.mjs` that default-exports a function
returning a `VoxScene`:

```js
import { VoxScene } from '../voxwriter.mjs';

export default function build() {
  const s = new VoxScene({ name: 'snail', voxelSize: 0.05 });
  const shell = s.part('shell', { tintable: true }); // named part = own Mesh
  const C = s.color('#ffffff');                      // palette is auto-managed
  shell.box(-5, 0, -4, 5, 8, 4, C);                  // inclusive corners
  shell.set(0, 9, 0, C);                             // single voxel
  shell.clear(5, 8, 4);                              // carve
  shell.mirrorX();                                   // mirror across x = 0
  return s;
}
```

Conventions:

- **Coordinates are game-space**: y-up, integer voxel cells, negatives fine.
  The writer converts to MagicaVoxel's z-up grid on save and the baker
  converts back — you never think about it.
- **All parts share one coordinate frame**, so multi-part models stay
  aligned.
- **Animated parts get a `pivot`** (authoring voxel coords, floats fine):
  `s.part('armL', { pivot: [-18, 34, 0] })`. The baker bakes the part's
  vertices relative to the pivot and gives the mesh a compensating
  `position`, so the assembled model is unchanged but `mesh.rotation` /
  `mesh.scale` move the part about its pivot — limb swings, pupil blinks.
  See `boss-yeti.mjs` + the `wi === 2` branch of `src/boss.js` for the
  reference: shoulder-pivoted arms, center-pivoted pupils, hidden brows.
- **Anchor**: default `bottom-center` — x/z centered on the model's bounding
  box, y = 0 at the lowest voxel. Pass `anchor: 'center'` to center fully.
- **Tinting**: mark a part `{ tintable: true }` and author it white/near-white;
  at runtime, pass a shared material and drive `material.color` (this is how
  the critter takes `CRITTER_COLORS` per world). Baked AO still shows through
  because it lives in the vertex colors, which multiply with the tint.
- `box(..., colorIndex)` also accepts a function `(x, y, z) => colorIndex`
  for patterns — but note every color change is a merge seam for the baker,
  so heavy per-voxel noise costs triangles.

## Baking

`scripts/bake-vox.mjs` reads every `assets-src/*/model.json`, and per part:

1. drops faces between two solid voxels (hidden-face culling),
2. computes classic Minecraft-style corner AO per face vertex from the
   voxel grid (side1/side2/corner neighbors),
3. greedy-merges coplanar faces whose color **and** four corner-AO values
   match, so merged quads shade identically to unmerged ones,
4. writes integer voxel-grid positions, axis-code normals, and 8-bit
   **linear-space** vertex colors with AO premultiplied.

## Loading at runtime

```js
import { loadVoxModel, buildVoxMesh } from './voxmodel.js';

const model = await loadVoxModel(`${import.meta.env.BASE_URL}models/critter.json`);
const { group, parts } = buildVoxMesh(model, {
  materials: { body: myTintableMaterial }, // optional per-part overrides
});
scene.add(group);            // parts.body / parts.trim are the Meshes
```

`loadVoxModel` caches per URL and shares geometries across every instance;
`buildVoxMesh` is cheap to call per spawn. See `makeCritter` in `src/game.js`
for the reference integration (synchronous group + material, mesh attaches
when the fetch resolves).
