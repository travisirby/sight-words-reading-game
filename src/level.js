// Level generation + rendering for the 2.5D side-scroller.
// generateLevel() is pure data (node-testable); LevelScene renders it as a
// single InstancedMesh of voxels (ground, platforms, scenery, hills, decor)
// plus instanced coins, a flagpole, drifting clouds, stepped parallax hill
// layers and a gradient skydome with voxel sun/moon. Forward is +x.

import * as THREE from 'three';

// skyTop/skyBot drive the gradient skydome; hemiGround tints the hemisphere
// light's ground bounce; sun/cloud tint the celestial voxels; night themes
// swap the sun for a moon plus stars and dim the lights.
export const PALETTES = [
  { // Grass Plains — bright noon blue
    top: [0x8fd35f, 0x83c854], dirt: [0x9c7748, 0x8f6b3f],
    plat: [0xd8a15a, 0xcc9550], hill: 0x6fbf62, hill2: 0x8fd48a,
    sky: 0x87ceeb, fog: 0xa9ddf3,
    skyTop: 0x4aa3e6, skyBot: 0xaee4f8, hemiGround: 0x6da851,
    sun: 0xffec9e, cloud: 0xffffff,
  },
  { // Sandy Desert — golden-hour warmth
    top: [0xeed48e, 0xe5c97e], dirt: [0xd2ad57, 0xc7a04c],
    plat: [0xe0925a, 0xd48750], hill: 0xdcb964, hill2: 0xead394,
    sky: 0x8fd4e8, fog: 0xf2debe,
    skyTop: 0x6fb9df, skyBot: 0xffdba0, hemiGround: 0xc9a35e,
    sun: 0xffd27a, cloud: 0xfff3dd,
  },
  { // Snowy Peaks — crisp ice tones
    top: [0xf4f8fc, 0xe6eef7], dirt: [0xb8cee0, 0xaac2d6],
    plat: [0x9fc4e8, 0x92b8dd], hill: 0xcfe0f0, hill2: 0xe8f2fa,
    sky: 0xa8c8e8, fog: 0xdbe9f7,
    skyTop: 0x7fb2e2, skyBot: 0xe6f2fc, hemiGround: 0xa9c3da,
    sun: 0xfff6d8, cloud: 0xffffff,
  },
  { // Crystal Caves — cool blue dusk, moon + stars
    top: [0x8578a8, 0x7a6b96], dirt: [0x5e5e6c, 0x54545f],
    plat: [0x9f6fd4, 0x9263c7], hill: 0x453a5e, hill2: 0x584a75,
    sky: 0x241d33, fog: 0x33294a,
    skyTop: 0x0d0a1a, skyBot: 0x453563, hemiGround: 0x3a3050,
    sun: 0xe8ecff, cloud: 0x6a6088, night: true,
  },
  { // Sky Islands — high clear air
    top: [0x9be07a, 0x8ed86e], dirt: [0x9c7748, 0x8f6b3f],
    plat: [0xffd54a, 0xf5c93e], hill: 0x84cd65, hill2: 0xbde8ff,
    sky: 0x6fc3ff, fog: 0xb9e2ff,
    skyTop: 0x2f8fe6, skyBot: 0xbfe6ff, hemiGround: 0x84cd65,
    sun: 0xfff0a8, cloud: 0xffffff,
  },
];

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------- pure generation ----------

// Returns { groundY, platforms, coins, critters, events, key, starX, flagX,
//           length, theme, secret }. Heights are the y of the walk surface.
export function generateLevel({ seed, wordCount, theme, secret = false, hasKey = false }) {
  const rand = mulberry32(seed);
  const groundY = [];
  const platforms = []; // { x0, x1, y } one-way, land-from-above only
  const coins = []; // { x, y }
  const critters = []; // { x0, x1 }
  const events = []; // { type: 'blocks'|'doors', x, wallX?, groundY }
  let g = 0;
  let key = null;

  const x = () => groundY.length;
  const flat = (n) => { for (let i = 0; i < n; i++) groundY.push(g); };

  const coinRun = (cx, cy, n, step = 1.4) => {
    for (let i = 0; i < n; i++) coins.push({ x: cx + i * step, y: cy });
  };
  const coinArc = (cx, w, baseY) => {
    const n = 5;
    for (let i = 0; i < n; i++) {
      const t = i / (n - 1);
      coins.push({ x: cx + t * w, y: baseY + Math.sin(t * Math.PI) * 1.2 });
    }
  };

  flat(8);
  coinRun(4, g + 0.8, 3);

  const keyAt = hasKey ? wordCount >> 1 : -1;
  const caveAt = secret ? wordCount >> 1 : -1;
  const typeOffset = seed % 2;

  for (let i = 0; i < wordCount; i++) {
    // ---- platforming filler ----
    const fillerLen = 14 + ((rand() * 5) | 0) + (secret ? 4 : 0);
    const fillerStart = x();
    let done = 0;
    while (done < fillerLen) {
      const stretch = Math.min(fillerLen - done, 5 + ((rand() * 6) | 0));
      flat(stretch);
      done += stretch;
      if (done < fillerLen) {
        const step = [1, 1, 2, -1, -2, 0][(rand() * 6) | 0];
        g = Math.max(0, Math.min(4, g + step));
      }
      if (rand() < (secret ? 0.6 : 0.35)) coinRun(x() - stretch + 1, g + 0.8, Math.min(4, stretch - 1));
    }

    // Floating platform with a coin arc. Every jump reaches a fixed ~3.5
    // apex, so platforms sit at +2 or +3 — always one full jump away.
    if (rand() < (secret ? 0.95 : 0.75) && fillerLen > 11) {
      const w = 3 + ((rand() * 2) | 0);
      const px = fillerStart + 3 + ((rand() * (fillerLen - w - 6)) | 0);
      const py = groundY[Math.min(px, x() - 1)] + (rand() < 0.35 ? 2 : 3);
      platforms.push({ x0: px, x1: px + w - 1, y: py });
      coinArc(px - 0.5, w, py + 1.1);
    }

    // Critter on the last flat stretch (never inside event zones).
    if (critters.length < 6 && rand() < 0.55 && fillerLen > 10) {
      const cx = x() - 7;
      critters.push({ x0: cx, x1: cx + 4 });
    }

    // Golden key: high off-path platform mid-level, max-jump reach.
    if (i === keyAt) {
      const kx = x() + 3;
      flat(8);
      platforms.push({ x0: kx, x1: kx + 1, y: g + 3 });
      key = { x: kx + 0.5, y: g + 4.2 };
    }

    // Coin cave: dense coin grid between stacked platforms (secret levels).
    if (i === caveAt) {
      const s = x();
      flat(16);
      platforms.push({ x0: s + 3, x1: s + 6, y: g + 3 });
      platforms.push({ x0: s + 9, x1: s + 12, y: g + 3 });
      for (let cx = s + 2; cx <= s + 13; cx += 1.5) {
        coins.push({ x: cx, y: g + 1 });
        coins.push({ x: cx, y: g + 2 });
        coins.push({ x: cx, y: g + 4.2 });
      }
    }

    // ---- word event zone (flat ground) ----
    const type = (i + typeOffset) % 2 === 0 ? 'blocks' : 'doors';
    if (type === 'blocks') {
      events.push({ type, x: x(), groundY: g });
      flat(36);
    } else {
      const s = x();
      events.push({ type, x: s, wallX: s + 12, groundY: g });
      // Door step ledges are thin so they don't hang down over the face of
      // a player standing at the tier below (head tops out +1.6 above feet).
      platforms.push({ x0: s + 6, x1: s + 11, y: g + 2, thin: true }); // tier +2 ledge
      platforms.push({ x0: s + 9, x1: s + 11, y: g + 4, thin: true }); // tier +4 ledge
      flat(19);
    }
  }

  // ---- flag star review zone + flagpole ----
  const starX = x() + 5;
  flat(28);
  const flagX = x() + 5;
  flat(12);

  // Critters must never pace within 6 units of a doors-event wall or its
  // step ledges (they'd ambush the climb). Shift offenders back toward the
  // preceding filler, or drop them if there's no clear room.
  const doorSpans = events
    .filter((e) => e.type === 'doors')
    .map((e) => ({ a: e.x - 6, b: e.wallX + 6 }));
  const clearOf = (c) => doorSpans.every((s) => c.x1 < s.a || c.x0 > s.b);
  const placedCritters = [];
  for (const c of critters) {
    let cc = c;
    for (const s of doorSpans) {
      if (!(cc.x1 < s.a || cc.x0 > s.b)) {
        const w = cc.x1 - cc.x0;
        cc = { x0: s.a - 1 - w, x1: s.a - 1 };
      }
    }
    // Trim the pace range to the flat run of ground around its midpoint —
    // filler stretches step up/down, and a range straddling a step makes
    // the critter clip into the raised blocks.
    const mid = Math.max(0, Math.min(x() - 1, Math.round((cc.x0 + cc.x1) / 2)));
    const y = groundY[mid];
    let a = mid, b = mid;
    while (a > cc.x0 && groundY[a - 1] === y) a--;
    while (b < cc.x1 && groundY[b + 1] === y) b++;
    cc = { x0: a, x1: b };
    if (cc.x1 - cc.x0 >= 2 && cc.x0 > 12 && clearOf(cc) &&
        placedCritters.every((o) => cc.x1 < o.x0 - 2 || cc.x0 > o.x1 + 2)) {
      placedCritters.push(cc);
    }
  }

  return {
    groundY, platforms, coins, critters: placedCritters, events, key,
    starX, flagX, length: x(), theme, secret,
  };
}

// Boss arena: a short, flat-ish themed runway. All word events are ? blocks
// (the boss retreats ahead of the player between rounds); no critters, keys
// or floating platforms — the boss IS the spectacle.
export function generateBossArena({ seed, wordCount, theme }) {
  const rand = mulberry32(seed);
  const groundY = [];
  const coins = [];
  const events = [];
  let g = 0;
  const x = () => groundY.length;
  const flat = (n) => { for (let i = 0; i < n; i++) groundY.push(g); };

  flat(14); // entrance stage: the boss stomps in here
  for (let i = 0; i < wordCount; i++) {
    if (i > 0) g = Math.max(0, Math.min(2, g + [0, 1, -1][(rand() * 3) | 0]));
    const gap = 5 + ((rand() * 3) | 0);
    flat(gap);
    if (rand() < 0.7) {
      for (let k = 0; k < 4; k++) coins.push({ x: x() - gap + 1 + k * 1.3, y: g + 0.8 });
    }
    events.push({ type: 'blocks', x: x(), groundY: g });
    flat(36);
  }
  const starX = x() + 4; // no star review in boss runs; kept for data shape
  flat(8);
  const flagX = x() + 5;
  flat(12);

  return {
    groundY, platforms: [], coins, critters: [], events, key: null,
    starX, flagX, length: x(), theme, secret: false, boss: true,
  };
}

// ---------- rendering ----------

const MAX_BLOCKS = 24000;
const MAX_COINS = 260;
const CLOUD_COUNT = 6;

const boxGeo = new THREE.BoxGeometry(1, 1, 1);

// Cheap deterministic per-block hash -> [0,1). Used for the subtle HSL
// jitter that makes ground voxels read handcrafted instead of tiled.
function h01(i) {
  let t = (i | 0) * 374761393 + 668265263;
  t = Math.imul(t ^ (t >>> 13), 1274126177);
  return ((t ^ (t >>> 16)) >>> 0) / 4294967296;
}

// Theme prop emitters: (put, x, y, rand) -> voxels behind the track (z<0).
// Also reused by the overworld for region decoration. put()'s trailing arg
// is a lightness jitter, used here for per-tree canopy hue variation.
export const PROPS = [
  (put, x, y, rand) => { // tree: oak / spruce / bush archetypes
    const r = rand || Math.random;
    const j = (r() - 0.5) * 0.1; // per-tree leaf shade
    const kind = r();
    if (kind < 0.45) { // round oak: trunk + layered lumpy canopy
      put(x, y + 0.8, -3.5, 0.42, 1.6, 0.42, 0x7a4f2a);
      put(x, y + 2.0, -3.5, 2.0, 0.9, 2.0, 0x3f9e3a, 0, j);
      put(x + 0.55, y + 2.55, -3.2, 1.1, 0.7, 1.1, 0x4cb545, 0, j + 0.03);
      put(x - 0.5, y + 2.75, -3.7, 1.2, 0.8, 1.2, 0x46ab40, 0, j);
      put(x + 0.05, y + 3.3, -3.5, 0.8, 0.55, 0.8, 0x55c04e, 0, j + 0.05);
    } else if (kind < 0.78) { // tall spruce: stacked shrinking tiers
      put(x, y + 0.9, -3.5, 0.34, 1.8, 0.34, 0x6b4423);
      put(x, y + 1.7, -3.5, 1.9, 0.7, 1.9, 0x2f8a3c, 0, j);
      put(x, y + 2.4, -3.5, 1.4, 0.7, 1.4, 0x379645, 0, j);
      put(x, y + 3.1, -3.5, 0.95, 0.7, 0.95, 0x40a34e, 0, j);
      put(x, y + 3.7, -3.5, 0.5, 0.6, 0.5, 0x4ab357, 0, j);
    } else { // low bush
      put(x, y + 0.5, -3.3, 1.3, 1.0, 1.3, 0x3f9e3a, 0, j);
      put(x + 0.55, y + 0.85, -3.5, 0.8, 0.6, 0.8, 0x4cb545, 0, j + 0.03);
    }
    if (r() < 0.6) { // fallen-leaf voxels at the base
      put(x + 0.9 + r() * 0.6, y + 0.06, -3 - r(), 0.22, 0.1, 0.22, 0x4cb545, 0, j + 0.06);
      put(x - 1 - r() * 0.5, y + 0.06, -3.4, 0.22, 0.1, 0.22, 0x3f9e3a, 0, j);
    }
  },
  (put, x, y, rand) => { // cactus
    put(x, y + 1, -3.5, 0.5, 2, 0.5, 0x4da34c);
    put(x + 0.55, y + 1.3, -3.5, 0.9, 0.35, 0.35, 0x4da34c);
    put(x + 0.85, y + 1.7, -3.5, 0.35, 0.7, 0.35, 0x4da34c);
    if (rand() < 0.5) put(x + 2, y + 0.25, -4, 0.9, 0.5, 0.9, 0xe0925a);
  },
  (put, x, y) => { // snowman + snow-capped spruce
    put(x, y + 0.5, -3.5, 1, 1, 1, 0xffffff);
    put(x, y + 1.35, -3.5, 0.75, 0.75, 0.75, 0xf4f8fc);
    put(x, y + 1.98, -3.5, 0.55, 0.55, 0.55, 0xffffff);
    put(x + 1.8, y + 0.6, -4.2, 0.3, 1.2, 0.3, 0x7a4f2a);
    put(x + 1.8, y + 1.5, -4.2, 1.5, 0.7, 1.5, 0x3a7d55);
    put(x + 1.8, y + 2.15, -4.2, 1.0, 0.6, 1.0, 0x447f5c);
    put(x + 1.8, y + 2.7, -4.2, 0.6, 0.5, 0.6, 0xdfeefc);
  },
  (put, x, y, rand) => { // crystals
    const cols = [0x7ef0ff, 0xd07eff, 0xff8ad8];
    for (let i = 0; i < 3; i++) {
      const c = cols[(rand() * cols.length) | 0];
      put(x + (i - 1) * 0.7, y + 0.8 + rand() * 0.6, -3.5, 0.4, 1.4 + rand() * 1.2, 0.4, c, c);
    }
    put(x, y + 0.15, -3.5, 1.6, 0.5, 1.6, 0x54545f);
  },
  (put, x, y, rand) => { // floating island bush
    const fy = y + 2.2 + rand() * 1.5;
    const j = (rand() - 0.5) * 0.08;
    put(x, fy, -4, 1.4, 0.5, 1.4, 0x8ed86e, 0, j);
    put(x, fy - 0.5, -4, 1, 0.6, 1, 0x9c7748);
    put(x, fy + 0.55, -4, 0.7, 0.6, 0.7, 0x3f9e3a, 0, j);
    put(x + 0.45, fy + 0.45, -3.7, 0.45, 0.4, 0.45, 0x4cb545, 0, j + 0.04);
  },
];

export class LevelScene {
  constructor(scene) {
    this.scene = scene;
    this.data = null;

    this.blocks = new THREE.InstancedMesh(boxGeo, new THREE.MeshLambertMaterial(), MAX_BLOCKS);
    this.blocks.frustumCulled = false;
    this.blocks.count = 0;
    scene.add(this.blocks);

    this.coinMesh = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.55, 0.55, 0.12),
      new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 }),
      MAX_COINS
    );
    this.coinMesh.frustumCulled = false;
    this.coinMesh.count = 0;
    scene.add(this.coinMesh);
    this.coinStates = [];
    this.coinSpin = 0;

    this.dummy = new THREE.Object3D();
    this.color = new THREE.Color();

    // Flagpole (rebuilt cheaply per level: few meshes, kept and moved).
    this.flagGroup = new THREE.Group();
    const pole = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xd9d9d9 }));
    pole.scale.set(0.18, 8, 0.18);
    pole.position.y = 4;
    const ball = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 }));
    ball.scale.setScalar(0.5);
    ball.position.y = 8.2;
    const base = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0x8d5a2b }));
    base.scale.set(1.4, 0.6, 1.4);
    base.position.y = 0.3;
    this.flag = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0x4cd964 }));
    this.flag.scale.set(1.4, 0.9, 0.1);
    this.flag.position.set(-0.85, 7.4, 0);
    this.flagGroup.add(pole, ball, base, this.flag);
    scene.add(this.flagGroup);

    // Sky: gradient skydome (canvas texture, redrawn per theme in build())
    // plus a voxel sun — swapped for a moon and star voxels on night themes.
    // The whole group tracks the player in update() so it never runs out.
    this.sky = new THREE.Group();
    const skyCanvas = document.createElement('canvas');
    skyCanvas.width = 2;
    skyCanvas.height = 128;
    this.skyCtx = skyCanvas.getContext('2d');
    this.skyTex = new THREE.CanvasTexture(skyCanvas);
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(85, 20, 14),
      new THREE.MeshBasicMaterial({
        map: this.skyTex, side: THREE.BackSide, fog: false, depthWrite: false,
      })
    );
    dome.renderOrder = -1; // paint first; everything overdraws it
    this.sky.add(dome);

    this.sunMat = new THREE.MeshBasicMaterial({ color: 0xffec9e, fog: false });
    this.sunGroup = new THREE.Group();
    {
      const core = new THREE.Mesh(boxGeo, this.sunMat);
      core.scale.set(3.4, 3.4, 0.6);
      this.sunGroup.add(core);
      for (const [sx, sy] of [[2.1, 0], [-2.1, 0], [0, 2.1], [0, -2.1]]) {
        const tip = new THREE.Mesh(boxGeo, this.sunMat);
        tip.scale.set(sx ? 0.9 : 2.2, sx ? 2.2 : 0.9, 0.55);
        tip.position.set(sx, sy, 0);
        this.sunGroup.add(tip);
      }
    }
    this.sunGroup.position.set(20, 18, -60);
    this.sky.add(this.sunGroup);

    const moonMat = new THREE.MeshBasicMaterial({ color: 0xe8ecff, fog: false });
    this.moonGroup = new THREE.Group();
    {
      const disc = new THREE.Mesh(boxGeo, moonMat);
      disc.scale.set(2.8, 2.8, 0.6);
      const brow = new THREE.Mesh(boxGeo, moonMat);
      brow.scale.set(1.2, 1.2, 0.65);
      brow.position.set(-1.6, 1.4, 0);
      this.moonGroup.add(disc, brow);
    }
    this.moonGroup.position.set(-16, 19, -58);
    this.sky.add(this.moonGroup);

    this.starField = new THREE.InstancedMesh(
      boxGeo, new THREE.MeshBasicMaterial({ color: 0xdfe8ff, fog: false }), 48
    );
    this.starField.frustumCulled = false;
    {
      const sr = mulberry32(9001);
      const dummy = new THREE.Object3D();
      for (let i = 0; i < 48; i++) {
        dummy.position.set(sr() * 150 - 75, 8 + sr() * 36, -52 - sr() * 16);
        dummy.scale.setScalar(0.16 + sr() * 0.22);
        dummy.updateMatrix();
        this.starField.setMatrixAt(i, dummy.matrix);
      }
      this.starField.instanceMatrix.needsUpdate = true;
    }
    this.sky.add(this.starField);
    scene.add(this.sky);

    // Parallax skyline: three instanced layers of stepped voxel hills with
    // little block trees on the nearer ridgelines, re-tinted per theme in
    // build(). Each layer is a 90-unit pattern laid out twice, repositioned
    // in update() so it always covers the viewport. Instance colors carry
    // per-slab shading; the material color carries the theme tint.
    this.parallax = [];
    const mkLayer = (z, factor, seed, baseH, ridgeTrees) => {
      const mat = new THREE.MeshLambertMaterial();
      const mesh = new THREE.InstancedMesh(boxGeo, mat, 120);
      mesh.frustumCulled = false;
      const rand = mulberry32(seed);
      const dummy = new THREE.Object3D();
      const col = new THREE.Color();
      let n = 0;
      const slab = (x, y, sx, sy, sz, shade) => {
        dummy.position.set(x, y, 0);
        dummy.scale.set(sx, sy, sz);
        dummy.updateMatrix();
        mesh.setMatrixAt(n, dummy.matrix);
        mesh.setColorAt(n, col.setScalar(shade));
        n++;
      };
      const defs = [];
      for (let i = 0; i < 4; i++) {
        defs.push({ x: i * 22 + rand() * 8, w: 8 + rand() * 6, h: baseH + rand() * 1.8 });
      }
      for (let tile = 0; tile < 2; tile++) {
        for (const d of defs) {
          const bx = tile * 90 + d.x;
          // Rolling hill as 4 shrinking stepped slabs, banded light/dark.
          let top = -2;
          const steps = 4;
          for (let s = 0; s < steps; s++) {
            const hh = (d.h + 2.5) / steps;
            slab(bx + (rand() - 0.5) * 1.5, top + hh / 2, d.w * (1 - s * 0.22),
              hh + 0.02, 2.5 - s * 0.1, 0.9 + (s & 1) * 0.1);
            top += hh;
          }
          slab(bx, top + 0.5, d.w * 0.28, 1, 2.1, 1); // summit knob
          if (ridgeTrees) {
            const tc = 1 + ((rand() * 3) | 0);
            for (let t = 0; t < tc; t++) {
              const tx = bx + (rand() - 0.5) * d.w * 0.5;
              slab(tx, top + 0.35, 0.25, 0.7, 0.5, 0.55);
              slab(tx, top + 1.05, 0.9, 0.9, 0.9, 0.7);
            }
          }
        }
      }
      mesh.count = n;
      mesh.instanceMatrix.needsUpdate = true;
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      mesh.position.z = z;
      scene.add(mesh);
      this.parallax.push({ mesh, mat, factor });
    };
    mkLayer(-13, 0.32, 51, 1.2, true);
    mkLayer(-19, 0.16, 87, 2.6, true);
    mkLayer(-25, 0.07, 133, 4, false);

    // Drifting clouds: varied puff counts and sizes, a flat base slab for a
    // bottom-heavy voxel look, per-cloud opacity; retinted per theme.
    this.clouds = [];
    this.cloudMats = [];
    for (let i = 0; i < CLOUD_COUNT; i++) {
      const gp = new THREE.Group();
      const mat = new THREE.MeshLambertMaterial({
        color: 0xffffff, transparent: true, opacity: 1,
        emissive: 0xffffff, emissiveIntensity: 0.55,
      });
      mat.userData.o = 0.75 + Math.random() * 0.25;
      this.cloudMats.push(mat);
      const big = Math.random() < 0.4;
      const puffs = big ? 4 : 2 + ((Math.random() * 2) | 0);
      const spread = big ? 1.7 : 1.3;
      for (let j = 0; j < puffs; j++) {
        const m = new THREE.Mesh(boxGeo, mat);
        const s = (big ? 2 : 1.4) + Math.random() * 1.5;
        m.scale.set(s, 0.7 + Math.random() * 0.6, 1.2 + Math.random());
        m.position.set((j - (puffs - 1) / 2) * spread, Math.random() * 0.6,
          (Math.random() - 0.5) * 1.5);
        gp.add(m);
      }
      const base = new THREE.Mesh(boxGeo, mat);
      base.scale.set(puffs * spread + 0.8, 0.5, 1.9);
      base.position.y = -0.35;
      gp.add(base);
      gp.scale.setScalar(0.8 + Math.random() * 0.5);
      gp.userData.drift = 0.25 + Math.random() * 0.55;
      scene.add(gp);
      this.clouds.push(gp);
    }
  }

  build(data) {
    this.data = data;
    const p = PALETTES[data.theme];
    this.scene.background = new THREE.Color(p.skyTop);
    this.scene.fog = new THREE.Fog(p.fog, 30, 80);

    // Sky gradient (top -> horizon glow -> fog haze) + celestial toggles.
    const css = (hex) => '#' + hex.toString(16).padStart(6, '0');
    const grd = this.skyCtx.createLinearGradient(0, 0, 0, 128);
    grd.addColorStop(0, css(p.skyTop));
    grd.addColorStop(0.52, css(p.skyBot));
    grd.addColorStop(0.72, css(p.fog));
    grd.addColorStop(1, css(p.fog));
    this.skyCtx.fillStyle = grd;
    this.skyCtx.fillRect(0, 0, 2, 128);
    this.skyTex.needsUpdate = true;
    this.sunGroup.visible = !p.night;
    this.moonGroup.visible = !!p.night;
    this.starField.visible = !!p.night;
    this.sunMat.color.setHex(p.sun);

    // Hemisphere ground bounce follows the terrain palette (set up in
    // game.js; boss/house scenes may not expose it).
    const hemi = this.scene.userData.hemiLight;
    if (hemi) {
      hemi.groundColor.setHex(p.hemiGround);
      hemi.intensity = p.night ? 0.85 : 1.05;
    }

    // Parallax silhouette tints: nearer layer darker, farther layers lighter
    // and hazier toward the sky, all from the theme palette.
    this.parallax[0].mat.color.setHex(p.hill).multiplyScalar(0.78);
    this.parallax[1].mat.color.setHex(p.hill2).lerp(new THREE.Color(p.sky), 0.3);
    this.parallax[2].mat.color.setHex(p.hill2).lerp(new THREE.Color(p.sky), 0.6);

    // Cloud tint/opacity per theme (dim wisps at night).
    for (const m of this.cloudMats) {
      m.color.setHex(p.cloud);
      m.emissive.setHex(p.cloud);
      m.emissiveIntensity = p.night ? 0.2 : 0.55;
      m.opacity = m.userData.o * (p.night ? 0.55 : 1);
    }

    const rand = mulberry32((data.theme + 1) * 7919);
    let n = 0;
    const put = (x, y, z, sx, sy, sz, color, emissive = 0, jitter = 0) => {
      if (n >= MAX_BLOCKS) return;
      this.dummy.position.set(x, y, z);
      this.dummy.scale.set(sx, sy, sz);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.updateMatrix();
      this.blocks.setMatrixAt(n, this.dummy.matrix);
      this.color.setHex(color);
      if (emissive) this.color.offsetHSL(0, 0.1, 0.08);
      if (jitter) this.color.offsetHSL(0, 0, jitter);
      this.blocks.setColorAt(n, this.color);
      n++;
    };

    // Ground: 3-deep track (z -1..1) with 4 blocks of vertical thickness,
    // plus a back apron (z -2..-5) so background props stand on land. The
    // top block splits into a grass cap over a shadowed dirt lip, every
    // block gets a hashed +-4% lightness jitter, and occasional columns get
    // a lighter/darker cap patch so the ground reads handcrafted.
    const len = data.length;
    for (let col = 0; col < len; col++) {
      const g = data.groundY[col];
      const patch = h01(col * 31 + 5);
      for (let zi = -1; zi <= 1; zi++) {
        const j = (h01(col * 7 + zi * 13) - 0.5) * 0.08;
        const capJ = j + (patch < 0.05 ? 0.06 : patch > 0.96 ? -0.05 : 0);
        put(col, g - 0.225, zi, 1, 0.45, 1, p.top[(col + zi) & 1], 0, capJ);
        put(col, g - 0.725, zi, 1, 0.55, 1, p.dirt[(col + zi + 1) & 1], 0, j - 0.05);
        for (let d = 1; d < 4; d++) {
          const j2 = (h01(col * 7 + zi * 13 + d * 101) - 0.5) * 0.08;
          put(col, g - 0.5 - d, zi, 1, 1, 1, p.dirt[(col + zi + d) & 1], 0, j2);
        }
      }
      // Darker grass lip along the front edge, slightly proud of the face.
      put(col, g - 0.55, 1.03, 1, 0.16, 1.02, p.top[1], 0, -0.1);
      for (let zi = -5; zi <= -2; zi++) {
        const j = (h01(col * 11 + zi * 17) - 0.5) * 0.07;
        put(col, g - 0.5, zi, 1, 1.001, 1, p.top[(col + zi) & 1], 0, j + zi * 0.012);
      }
    }

    // Floating platforms (2 deep in z). Thin ones keep the same walking
    // surface (top at plat.y) with a shallower slab.
    for (const plat of data.platforms) {
      const th = plat.thin ? 0.35 : 1;
      for (let cx = plat.x0; cx <= plat.x1; cx++) {
        for (let zi = 0; zi <= 1; zi++) {
          put(cx, plat.y - th / 2, zi - 0.5, 1, th, 1, p.plat[(cx + zi) & 1]);
        }
      }
    }

    // Background hills, two depth layers, built as stepped voxel stacks so
    // they read as rolling landscape instead of walls.
    const hill = (cx, w, h, z, color) => {
      let top = -1.5;
      for (let s = 0; s < 3; s++) {
        const hh = (h + 3) / 3;
        put(cx + (rand() - 0.5) * 1.2, top + hh / 2, z, w * (1 - s * 0.24),
          hh + 0.02, 4 - s * 0.3, color, 0, (s & 1) ? 0.04 : -0.02);
        top += hh;
      }
      put(cx, top + 0.5, z, w * 0.3, 1, 3.2, color, 0, 0.06);
    };
    for (let cx = -10; cx < len + 20; cx += 24 + ((rand() * 14) | 0)) {
      const w = 9 + rand() * 7;
      hill(cx, w * 0.8, 1 + rand() * 1.5, -12, p.hill);
      hill(cx + 10 + rand() * 8, w, 2 + rand() * 2, -19, p.hill2);
    }

    // Theme props on the apron.
    const prop = PROPS[data.theme];
    for (let cx = 4; cx < len - 4; cx += 10 + ((rand() * 9) | 0)) {
      const g = data.groundY[Math.min(cx, len - 1)];
      prop(put, cx + rand() * 3, g, rand);
    }

    // Decoration scatter along the track's back row: grass tufts, flowers,
    // pebbles and the odd mushroom, themed per world. Deterministic (same
    // rand stream), sparse, and merged into the one instanced mesh.
    const FLOWER = [0xff6b6b, 0xffd54a, 0xff8ad8, 0x7ec8ff, 0xfff6f0];
    const tuft = (dx, dy, dz, c) => {
      for (let i = 0; i < 3; i++) {
        put(dx + (i - 1) * 0.14, dy + 0.14 + rand() * 0.1, dz, 0.09,
          0.3 + rand() * 0.22, 0.09, c, 0, (rand() - 0.5) * 0.12);
      }
    };
    const pebble = (dx, dy, dz, c) => {
      put(dx, dy + 0.11, dz, 0.28 + rand() * 0.12, 0.22, 0.28, c, 0, (rand() - 0.5) * 0.1);
    };
    const decor = (dx, dy) => {
      const dz = -0.9 - rand() * 0.5;
      const k = rand();
      const t = data.theme;
      if (t === 1) { // desert: dry tufts + sandstone pebbles
        if (k < 0.5) tuft(dx, dy, dz, 0xc9b060);
        else pebble(dx, dy, dz, 0xd8a15a);
      } else if (t === 2) { // snow: ice nubs + frosted rocks
        if (k < 0.4) put(dx, dy + 0.22, dz, 0.18, 0.44, 0.18, 0xbfe6ff, 1);
        else if (k < 0.7) pebble(dx, dy, dz, 0x9fb8cc);
        else tuft(dx, dy, dz, 0xdfeefc);
      } else if (t === 3) { // caves: glow mushrooms + dark pebbles
        if (k < 0.55) {
          put(dx, dy + 0.15, dz, 0.14, 0.3, 0.14, 0xcfc4e8);
          put(dx, dy + 0.38, dz, 0.42, 0.18, 0.42, k < 0.3 ? 0x7ef0ff : 0xd07eff, 1);
        } else pebble(dx, dy, dz, 0x6a6a78);
      } else if (k < 0.42) { // grass/sky worlds
        tuft(dx, dy, dz, 0x5cbf4e);
      } else if (k < 0.72) { // flower
        put(dx, dy + 0.18, dz, 0.08, 0.36, 0.08, 0x3f9e3a);
        put(dx, dy + 0.42, dz, 0.24, 0.22, 0.24, FLOWER[(rand() * FLOWER.length) | 0]);
      } else if (k < 0.9) {
        pebble(dx, dy, dz, 0x9aa0a6);
      } else { // mushroom
        put(dx, dy + 0.15, dz, 0.16, 0.3, 0.16, 0xf2e8d8);
        put(dx, dy + 0.38, dz, 0.44, 0.2, 0.44, 0xe05a4a);
      }
    };
    for (let cx = 3; cx < len - 3; cx += 3 + ((rand() * 5) | 0)) {
      decor(cx + rand() - 0.5, data.groundY[cx]);
    }

    this.blocks.count = n;
    this.blocks.instanceMatrix.needsUpdate = true;
    if (this.blocks.instanceColor) this.blocks.instanceColor.needsUpdate = true;

    // Coins.
    this.coinStates = data.coins.slice(0, MAX_COINS).map((c) => ({ x: c.x, y: c.y, taken: false }));
    this.coinMesh.count = this.coinStates.length;
    this.updateCoinMatrices();

    // Flagpole.
    const fg = data.groundY[Math.min(data.flagX | 0, len - 1)];
    this.flagGroup.position.set(data.flagX, fg, 0);
    this.flag.position.y = 7.4;

    // Clouds spread near the start; they wrap as the player advances.
    for (const c of this.clouds) {
      c.position.set(Math.random() * 60 - 10, 8 + Math.random() * 4, -7 - Math.random() * 5);
    }
  }

  updateCoinMatrices() {
    for (let i = 0; i < this.coinStates.length; i++) {
      const c = this.coinStates[i];
      this.dummy.position.set(c.x, c.taken ? -50 : c.y + Math.sin(this.coinSpin * 2 + c.x) * 0.1, 0);
      this.dummy.rotation.set(0, this.coinSpin + c.x * 0.5, 0);
      this.dummy.scale.setScalar(c.taken ? 0.001 : 1);
      this.dummy.updateMatrix();
      this.coinMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.coinMesh.instanceMatrix.needsUpdate = true;
  }

  // Returns positions collected this frame.
  collectCoins(px, py) {
    const got = [];
    for (const c of this.coinStates) {
      if (c.taken || Math.abs(c.x - px) > 0.9) continue;
      if (c.y > py - 0.4 && c.y < py + 2.1) {
        c.taken = true;
        got.push(new THREE.Vector3(c.x, c.y, 0));
      }
    }
    return got;
  }

  update(dt, playerX) {
    this.coinSpin += dt * 3;
    this.updateCoinMatrices();
    // Skydome + sun/moon/stars ride along with the player (factor 1: they
    // are "at infinity" and should never appear to approach).
    this.sky.position.x = playerX;
    // Parallax: each layer tracks a fraction of the camera x; the 90-unit
    // pattern is shifted in whole periods so coverage never runs out.
    for (const L of this.parallax) {
      const drift = playerX * (1 - L.factor);
      L.mesh.position.x = playerX * L.factor + Math.floor((drift - 45) / 90) * 90;
    }
    for (const c of this.clouds) {
      c.position.x += c.userData.drift * dt;
      if (c.position.x < playerX - 45) c.position.x += 90;
      if (c.position.x > playerX + 45) c.position.x -= 90;
    }
  }

  groundTopAt(x) {
    if (!this.data) return 0;
    const col = Math.max(0, Math.min(this.data.length - 1, Math.round(x)));
    return this.data.groundY[col];
  }

  // Highest surface at or below feetY(+tolerance): ground or platforms.
  floorAt(x, feetY) {
    let best = -Infinity;
    for (const dx of [-0.25, 0.25]) {
      const g = this.groundTopAt(x + dx);
      if (g <= feetY + 0.3 && g > best) best = g;
    }
    if (this.data) {
      for (const p of this.data.platforms) {
        if (x >= p.x0 - 0.8 && x <= p.x1 + 0.8 && p.y <= feetY + 0.3 && p.y > best) {
          best = p.y;
        }
      }
    }
    if (best === -Infinity) best = this.groundTopAt(x);
    return best;
  }
}
