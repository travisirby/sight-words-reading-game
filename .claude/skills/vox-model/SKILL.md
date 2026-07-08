---
name: vox-model
description: >
  Author, bake, wire, and verify voxel game objects for this game's .vox
  asset pipeline. Use this skill whenever the task involves creating or
  modifying any 3D game object — a critter, boss, prop, decoration,
  collectible, character, or scenery piece — or mentions models, meshes,
  voxels, .vox files, MagicaVoxel, or "how X looks" in the game world.
  Also use it when porting an existing hand-coded box mesh (THREE.Mesh +
  BoxGeometry) to the pipeline, or when a baked model renders wrong
  (misplaced, mis-scaled, wrong colors, broken animation pivots). Do NOT
  hand-code new box meshes in JS; new game objects go through this
  pipeline.
---

# Voxel model pipeline

Every 3D object in this game is authored as a small JS script that emits
real MagicaVoxel `.vox` files, baked to compact mesh JSON, and loaded as
one draw call per part. Never hand-place `THREE.Mesh(boxGeo, ...)` boxes
for new objects — that is the legacy style this pipeline replaced.

```
scripts/vox/models/<name>.mjs     authoring script (you write this)
   │  npm run gen:vox
   ▼
assets-src/<name>/*.vox + model.json     (committed, open in MagicaVoxel)
public/models/<name>.json                (committed, culled+merged+AO baked)
   │  loadVoxModel() / buildVoxMesh()    (src/voxmodel.js)
   ▼
THREE.Mesh per part, MeshLambertMaterial({ vertexColors: true })
```

`scripts/vox/README.md` documents the authoring API (`set`, `box`,
`clear`, `mirrorX`, palette, pivots) — read it before writing a script.

## Workflow

### 1. Start from the closest existing model

Pick the reference whose *role* matches, and keep its conventions:

| You are making…             | Copy the approach of                  |
|-----------------------------|---------------------------------------|
| a small level creature      | `scripts/vox/models/critter*.mjs`     |
| a large animated character  | `scripts/vox/models/boss-yeti.mjs` (simplest boss) |
| a boss with an odd rig      | `boss-serpent.mjs` (pivoted head), `boss-dragon.mjs` (wings) |
| a static prop / scenery     | any critter, minus the tint part      |

Before porting a hand-coded object, read its builder function and note:
overall dimensions, anchor point, facing direction, which meshes the
game code animates or re-colors afterward — that is the contract the
model must honor.

### 2. Author the script

Conventions that keep models drop-in compatible:

- **Scale**: `voxelSize: 0.05` for small objects (critters, props),
  `0.1` for bosses/large scenery. One voxel cell = that many world units;
  a 0.95-wide critter body is 19 cells.
- **Frame**: y-up, ground contact at y = 0 (`bottom-center` anchor is the
  default), face toward the camera (+z) for characters the player meets
  head-on, or toward +x for things that walk along the level.
- **World numbering**: players and prompts say "world 3" meaning the
  third world — that is `worldIdx 2` in code (`WORLDS` is 0-indexed).
  Confirm which one a request means before wiring per-world content.
- **Tintable parts**: if game code re-colors the object at runtime
  (`userData.mat.color.setHex(...)`), author that part near-white, name
  it `body`, and mark it `{ tintable: true }`. The tint multiplies with
  the baked AO in the vertex colors.
- **Animated parts**: anything the game rotates or scales independently
  (limbs, wings, pupils) is its own part with `{ pivot: [x, y, z] }` in
  authoring voxel coords (floats fine). The baked mesh's local origin
  sits at the pivot, so `mesh.rotation.z` swings a limb from its
  shoulder and `mesh.scale.y` squashes a pupil about its center.
- **Face details**: eyes/pupils/mouth sit one voxel *proud* of the
  surface they're on (pupils one more). Coplanar opposite-facing quads
  don't z-fight (backface culling).
- **No cell may be claimed by two parts.** Each part is its own mesh, so
  a shared cell renders coplanar same-facing quads that z-fight (flicker)
  at runtime. Overlap creeps in wherever parts butt together — an arm
  column buried in the torso, shard/decoration bases embedded in the body
  (this shipped in boss-golem and boss-meatball before the bake warned).
  Author shapes naturally, then end the script with a yield guard (see
  `boss-golem.mjs`, `boss-meatball.mjs`, `pepper-volcano.mjs`):

  ```js
  const yieldTo = (part, ...owners) => {
    for (const k of part.voxels.keys())
      if (owners.some((o) => o.voxels.has(k))) part.voxels.delete(k);
  };
  yieldTo(armL, body);                // animated part yields to the body
  yieldTo(shards, body, armL, armR);  // decoration yields to everything
  ```

  Yield direction matters: the part that *stays put* keeps the cell.
  Animated parts yield to the body — their carved notch is hidden at rest
  and travels with them when they swing, whereas a hole carved in the
  body would be exposed the moment the limb moves away. Pure decoration
  yields to both. Every yielded cell stays filled by the part that keeps
  it, so the assembled silhouette (and every visible face) is unchanged.
- **Rotated boxes can't be voxels**: approximate slanted originals
  (brows, shards) as stepped diagonals; chamfer long vertical edges for
  a softer silhouette.
- **Every color change is a merge seam.** The baker greedy-merges faces
  with identical color+AO, so per-voxel noise patterns multiply the
  triangle count for little visual gain at gameplay distance. A solid
  color plus baked AO usually reads better and bakes ~10x smaller.

### 3. Bake

```
npm run gen:vox
```

Runs every model script and bakes all models. Commit both `assets-src/`
and `public/models/` — CI re-runs the bake and fails on drift, and the
bake is deterministic, so a clean `git status` after rebaking is the
sync check. Sanity-check the log line: a small critter is a few hundred
tris; thousands means merge seams (see above).

The baker also checks every part pair for shared cells and prints
`WARNING <model>: parts "a" and "b" overlap on N voxel cell(s)`. Treat
any such warning as a bug — fix the authoring script with the yield
guard above before committing; never ship a bake that warns.

### 4. Wire it in

```js
import { loadVoxModel, buildVoxMesh } from './voxmodel.js';
const model = loadVoxModel(`${import.meta.env.BASE_URL}models/<name>.json`);
// later / per spawn:
model.then((m) => {
  const { group, parts } = buildVoxMesh(m, { materials: { body: tintMat } });
  parent.add(group); // parts.<name> are the per-part Meshes
});
```

- `loadVoxModel` caches per URL and shares geometries; `buildVoxMesh`
  is cheap per instance.
- **The load is async but game constructors are not.** Create tint
  materials and contract containers (arrays, `{ pupils: [], brows: [] }`)
  synchronously, then *fill them in place* inside the `.then` — code that
  iterates the arrays every frame is safe before the mesh arrives.
  See `makeCritter` in `src/game.js` and `voxBoss` in `src/boss.js`.
- Nested animation (a face that must ride a flicking head): re-parent
  the child mesh under the parent part and convert its offset —
  `parent.add(child); child.position.sub(parent.position);` (see the
  serpent branch in `src/boss.js`).
- If materials are collected by traversal (e.g. hit-flash), re-collect
  after the model attaches (`built.ready?.then(...)` pattern).

### 5. Verify in the browser

Use the preview server (`preview_start` with the
`super-kids-sight-words-adventure` config from `.claude/launch.json`)
and the dev harness: `?goto=<world>,<level>` boots straight into a
level; the castle/boss slot is `level == WORLDS[w].levels.length`.
`window.__wr` exposes `{ game, store, ... }` for inspection.

Check, in order:
1. No console errors and no failed requests on a **fresh** load — the
   dev server caches baked JSON, so after a rebake mid-session, reload
   with a cache-busting query param before trusting errors.
2. The object renders at the right scale/anchor next to the player
   (teleport: `__wr.game.player.x = <x>`), correct palette, AO visible.
3. Animation pivots numerically: rotate/scale the part via eval and
   confirm its bounding box moves about the pivot, not the model origin.
4. A screenshot for the PR.

### 6. Test expectations

`tests/vox.test.js` covers the pipeline itself (round-trip, merging, AO,
pivot invariance) — model scripts don't need their own unit tests, but
`npm test` and a drift-free `npm run gen:vox` must both pass before
committing.
