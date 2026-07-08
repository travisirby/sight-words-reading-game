---
name: level-placement
description: >
  Place, scatter, or animate objects in this game's levels and overworld —
  props, decorations, background scenery, vox models, pools, particles,
  bubbles, smoke, or region landmarks. Use this skill whenever a task adds
  or moves anything visible in a level (level.js) or on the map
  (overworld.js), mentions props/decor/scenery/backdrops/landmarks, asks to
  "put X in world N", or when a placed object renders wrong (floating,
  swallowed by hills, z-fighting, popping in late, reshuffling other decor).
  Authoring the 3D model itself is the vox-model skill; wiring it INTO a
  level or region is this one.
---

# Placing objects in levels and the overworld

Levels are a 2.5D side-scroller viewed from a low camera angle: the player
runs along z = 0 and everything decorative lives at z < 0, layered in
depth bands. The overworld is a top-down voxel map of world rows. Both
scenes rebuild often (every level start, every map entry), so every
placement system here is deterministic, pooled, and rebuild-safe. Breaking
those three properties is how placements go wrong — an object that
consumes the shared RNG reshuffles every other decoration in the level,
and an async load that ignores the build counter attaches meshes to a
scene that no longer exists.

## The depth map (in-level, z axis)

Memorize this before choosing a z. The camera angle is low, so anything
behind a taller band is swallowed whole:

| z            | band                                              |
|--------------|---------------------------------------------------|
| 0            | track: ground, platforms, player, word blocks     |
| −0.9..−1.4   | decor scatter row (tufts, pebbles, sprouts)       |
| −2..−5       | prop apron (theme props stand at z ≈ −3.5)        |
| −4..−11      | vox scenery band (big models live here)           |
| −12 and −19  | stepped hills, 5–8 units tall — they hide everything behind them |

One ~2×-scale "mega" landmark can sit at ~−15 **only if it is tall enough
to clear the ridgelines** — verify in the browser, don't assume. When a
placed object "disappears", the first suspect is always a z behind −12.

The apron band is for *static* voxels written through `put()`. Anything
that moves per frame (floats, bobs, drifts) is its own mesh and belongs
in the −4..−11 band with the vox scenery, where motion reads clearly and
nothing occludes it.

## The four in-level systems (src/level.js)

Pick the system by object size, count, and whether it moves — they are
not interchangeable:

1. **Prop emitters** — static, medium, repeated (trees, rocks, plants)
2. **Decor scatter** — static, tiny, dense (tufts, pebbles)
3. **Vox scenery** — static, large, few (baked model landmarks)
4. **Animated fixtures & particle pools** — anything that moves

### 1. Theme prop emitters — `PROPS` array

Static medium objects repeated along the level (trees, rocks, pools,
plants). `PROPS[data.theme]` is called every ~10–19 units along the
apron. Static only — these voxels bake into one instanced mesh and can
never move again (use system 4 for anything that should):

```js
(put, x, y, rand) => { /* emit voxels for ONE prop at (x, y) */ }
```

- `put(x, y, z, sx, sy, sz, color, ao?, lightnessJitter?)` writes one box
  into the level's single instanced mesh — thousands of calls, one draw
  call. There is no per-prop mesh to manage or dispose.
- Build props at z ≈ −3.5, ground them on the passed-in `y` (the terrain
  height at that x), and use the passed `rand` for variation — it's the
  level's seeded stream, which keeps layouts identical per level.
- Use `kind = r()` branching for 2–4 variants per theme (read a couple of
  existing emitters first; match their scale and voxel chunkiness).
- The array is indexed by world/theme number — when adding a world,
  **insert** at its index, never append.

### 2. Decor scatter — the theme branches inside `decor()`

Tiny ground clutter (tufts, pebbles, sprouts, mushrooms) on the back row
of the track itself, z ≈ −0.9..−1.4. Same `put` instancing, same shared
`rand`. Add a `t === <theme>` branch styled after its neighbors; keep it
sparse — this row sits right behind the player and dense clutter reads
as noise at speed.

### 3. Vox scenery — the `data.theme === N` blocks in the vox section

Large baked models (`public/models/*.json`) as backdrop landmarks, 2–5
per level, in the −4..−11 band. This is the only async system, so it has
extra rules; copy an existing theme block (pepper volcano or the swamp
giant-cabbage block) rather than writing from scratch:

```js
const id = this.voxBuildId;                    // capture BEFORE the load
const vr = mulberry32(len * 131 + 4177);       // dedicated stream (see why below)
const placements = [...];                      // compute positions SYNCHRONOUSLY
loadVoxModel(`${import.meta.env.BASE_URL}models/<name>.json`).then((model) => {
  if (id !== this.voxBuildId) return;          // level rebuilt while loading — bail
  for (const pl of placements) {
    const { group } = buildVoxMesh(model, { materials: { <part>: sharedMat } });
    group.position.set(pl.x, -0.6, pl.z);      // sink slightly: never float over a dip
    group.scale.setScalar(pl.s);
    this.voxScenery.add(group);
  }
});
```

- **Dedicated `mulberry32` stream, never the shared `rand`**: the load
  callback runs later; if placement math consumed `rand`, every other
  decoration in the level would reshuffle depending on network timing —
  and even synchronous use inserts draws that shift everything after it.
- **Shared materials, created synchronously** in the constructor (like
  `this.lavaMat` / `this.swampMat`): one material per tint/glow variant
  across all instances, pulsed once per frame in `update()`. Never a
  material per instance.
- Alternate near/far within the band (−8 vs −10.5) with the far copy
  slightly larger — fakes depth without leaving the safe band.

### 4. Animated fixtures and particle pools

Anything that moves per frame — floating lights, drifting leaves, rising
bubbles, smoke. The static systems can't do this (`put()` voxels are
baked into one immutable instanced mesh), so animated placements are real
meshes managed as a **fixed-size pool, allocated once in the constructor
and recycled forever** — never spawned/destroyed per build or per
particle. Two flavors:

**Fixtures** (lanterns, fireflies — persistent objects that bob/pulse):
build N groups from shared geometry + 1–2 shared emissive materials in
the constructor; `build()` shows/repositions them only for the matching
theme (dedicated `mulberry32` stream) and hides them otherwise;
`update()` advances phase-offset bob/sway and breathes the shared
materials' `emissiveIntensity` — a couple of uniform writes per frame,
no allocations. Hover them in the −4..−11 band.

**Particle pools** (bubbles, smoke, drips — items with a lifecycle; see
`placeSwampBubbles` + `updateSwampBubbles`, or the overworld's
`volcanoSmoke`):

- Allocate N small meshes up front, each with **its own material** so
  per-item `opacity` works (this is the one sanctioned per-item-material
  case; N is single digits).
- Collect anchor positions **synchronously during build** (e.g.
  `this.swampPoolAnchors`), then advance each item in `update()` by a
  phase-offset cycle `u = (t * speed + phase) % 1`: rise/drift on u,
  fade with `sin(min(1, u * 1.15) * PI)`-style envelopes, snap scale for
  pops. No allocations per frame.

## The overworld (src/overworld.js)

World rows sit at `wi * ROW_Z` (ROW_Z = 9). Per-world look comes from
four hooks, all indexed by world number (insert, never append):

1. **`emitters` array** — one function per region, called `counts[wi]`
   times at random spots on that row; builds small decor from boxes via
   the same put-style helpers. Reuses `PROPS` emitters where the level
   prop translates directly.
2. **Region extras blocks** — bespoke landmarks anchored at
   `const rz = wi * ROW_Z` (glow slabs in carved pool holes, vox
   landmark loads). Follow the pepper/swamp blocks as templates.
3. **`this.voxDecor` registration** — every vox landmark pushes
   `{ region: wi, mats: [...] }` so `applyLockTints` can dim it while
   the region is locked. Skipping this leaves your landmark glowing
   full-bright in a locked region.
4. **Puff/bubble pools advanced in `tick()`** — same fixed-pool pattern
   as in-level (`volcanoSmoke`, `swampBubbles`).

Emissive pool/glow materials must respect `lockFactor(region)` — copy how
existing pulse code multiplies it in.

## Verifying placements

Always look at the result; placement bugs are visual. Use the preview
server (`super-kids-sight-words-adventure` config):

- `?goto=<world>,<level>` boots straight into a level (0-based; the
  castle is level index == levels.length). `?unlock` unlocks everything.
- `window.__wr` exposes `{ game, store, map }`. Advance deterministically
  with `game.tick(1/60)` in a loop; find your objects via
  `game.level.voxScenery.children` positions.
- Framed screenshots: `game.renderer.setAnimationLoop(null)` first, then
  position `game.camera` + `renderer.render(scene, camera)` **in a
  separate eval from the loop-stop**, then screenshot — stop-and-render
  in one eval captures a blank canvas.
- For the overworld: click `#btn-play` via `el.click()` in eval (synthetic
  clicks don't work), then the same freeze-frame technique on `__wr.map`.
- Check the console for errors and the network panel for failed model
  fetches on a fresh load.

Checklist before calling a placement done: correct z band (not swallowed
by hills), grounded (not floating — sink big models ~0.6), deterministic
(reload twice, identical layout), rebuild-safe (enter/exit the level
twice, no orphan meshes or errors), locked-region tint works (overworld),
and `npm test` + `npx vite build` still pass.
