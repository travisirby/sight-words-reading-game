// Level generation + rendering for the 2.5D side-scroller.
// generateLevel() is pure data (node-testable); LevelScene renders it as a
// single InstancedMesh of voxels (ground, platforms, scenery, hills, decor)
// plus instanced coins, a flagpole, drifting clouds, stepped parallax hill
// layers and a gradient skydome with voxel sun/moon. Forward is +x.

import * as THREE from 'three';
import { voxelGeo, chamferVoxelGeo, chamferBox } from './voxelgeo.js';
import { loadVoxModel, buildVoxMesh } from './voxmodel.js';

// skyTop/skyBot drive the gradient skydome; fog doubles as the dome's
// horizon band so distance melts into the sky. The light rig is a
// warm-key/cool-fill split: sunTint colors the DirectionalLight (warm by
// day, moonlight-blue at night), hemiSky is the hemisphere light's warm
// sky half and hemiGround its cooler bounce, so tops read sunlit and
// undersides read sky-shadowed. sun/cloud tint the celestial voxels;
// night themes swap the sun for a moon plus stars and dim the lights.
export const PALETTES = [
  { // Pasta Plains — sunny noodle country, cheese-slab platforms
    top: [0x8fd35f, 0x83c854], dirt: [0x9c7748, 0x8f6b3f],
    plat: [0xf7c948, 0xeab52e], hill: 0x6fbf62, hill2: 0x8fd48a,
    sky: 0x87ceeb, fog: 0xa9ddf3,
    skyTop: 0x4aa3e6, skyBot: 0xaee4f8,
    hemiSky: 0xffeecf, hemiGround: 0x62949c, sunTint: 0xffdca6,
    sun: 0xffec9e, cloud: 0xffffff,
  },
  { // Waffle Desert — toasty waffle-grid dunes, butter-pat sun
    top: [0xe9b463, 0xd89c48], dirt: [0xb5772f, 0xa66a29],
    plat: [0x8a5a2e, 0x7c4f27], hill: 0xd9a45c, hill2: 0xeecb8c,
    sky: 0x8fd4e8, fog: 0xf2debe,
    skyTop: 0x6fb9df, skyBot: 0xffdba0,
    hemiSky: 0xffe8c0, hemiGround: 0x9a86a0, sunTint: 0xffd494,
    sun: 0xffd27a, cloud: 0xfff3dd,
  },
  { // Snowy Peaks — crisp ice tones
    top: [0xf4f8fc, 0xe6eef7], dirt: [0xb8cee0, 0xaac2d6],
    plat: [0x9fc4e8, 0x92b8dd], hill: 0xcfe0f0, hill2: 0xe8f2fa,
    sky: 0xa8c8e8, fog: 0xdbe9f7,
    skyTop: 0x7fb2e2, skyBot: 0xe6f2fc,
    hemiSky: 0xfef0dc, hemiGround: 0x8fabd6, sunTint: 0xffeccc,
    sun: 0xfff6d8, cloud: 0xffffff,
  },
  { // Purple Cabbage Swamp — glowing magenta bog, warm rust rock
    top: [0x6e4059, 0x62384f], dirt: [0xa85332, 0x7e3d26],
    plat: [0xd9b36a, 0xc9a054], hill: 0x7e3d26, hill2: 0xa85332,
    sky: 0xb04a9e, fog: 0xc77bb4,
    skyTop: 0x4a2145, skyBot: 0xb04a9e,
    hemiSky: 0xffe8c8, hemiGround: 0x62384f, sunTint: 0xffc7a5,
    sun: 0xffd6a3, cloud: 0xf1c8e9,
  },
  { // Crystal Caves — cool blue dusk, moon + stars
    top: [0x8578a8, 0x7a6b96], dirt: [0x5e5e6c, 0x54545f],
    plat: [0x9f6fd4, 0x9263c7], hill: 0x453a5e, hill2: 0x584a75,
    sky: 0x241d33, fog: 0x33294a,
    skyTop: 0x0d0a1a, skyBot: 0x453563,
    hemiSky: 0x8c86c8, hemiGround: 0x2e3a66, sunTint: 0xb9c4ff,
    sun: 0xe8ecff, cloud: 0x6a6088, night: true,
  },
  { // Pepper Volcano — ember dusk over basalt, glowing-rock platforms
    top: [0x6b5a5e, 0x605054], dirt: [0x453a40, 0x3c3238],
    plat: [0xff8c3e, 0xf07c30], hill: 0x7a3a2e, hill2: 0x9c5a3a,
    sky: 0xe8874a, fog: 0xf2a868,
    skyTop: 0xb84a32, skyBot: 0xffc06a,
    hemiSky: 0xffd9a8, hemiGround: 0x7a4a3c, sunTint: 0xffb070,
    sun: 0xffcf7a, cloud: 0x9a8078,
  },
];

// ACES tone mapping (rendercfg.js) mutes saturation, hitting the pale
// sky/fog tones hardest. Pre-boost every palette color once at load — zero
// runtime cost — so the voxel world keeps its candy punch through the
// filmic curve. Light-rig colors (hemiSky/hemiGround/sunTint) were authored
// post-ACES and stay as written. The helpers are exported: any scene that
// authors raw hex colors outside PALETTES (cutscene backdrops etc.) must
// run them through the same compensation, or its "same" sky renders greyer
// than the level's.
const toneColor = new THREE.Color();
const toneHSL = {};
const toneShift = (hex, sMul, sAdd, lMul) => {
  toneColor.setHex(hex).getHSL(toneHSL);
  toneColor.setHSL(toneHSL.h, Math.min(1, toneHSL.s * sMul + sAdd), toneHSL.l * lMul);
  return toneColor.getHex();
};
// Terrain/props: modest saturation lift.
export const toneBoost = (hex) => toneShift(hex, 1.3, 0.04, 0.96);
// Sky band + fog sit near white where ACES bleaches hardest: push chroma
// harder and pull lightness down so the sky stays blue, not grey.
export const toneBoostSky = (hex) => toneShift(hex, 1.45, 0.05, 0.88);
for (const p of PALETTES) {
  for (const k of ['top', 'dirt', 'plat']) p[k] = p[k].map(toneBoost);
  for (const k of ['hill', 'hill2', 'sun', 'cloud']) p[k] = toneBoost(p[k]);
  for (const k of ['sky', 'fog', 'skyTop', 'skyBot']) p[k] = toneBoostSky(p[k]);
}

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
    // Golden key: high off-path platform, max-jump reach. It sits at the
    // top of the section, right after the previous word event, where the
    // runway to the next event's intro line is longest — speech cuts off
    // whatever is playing, so the key jingle needs clear air before
    // "Bonk the block..." fires at the next event.
    if (i === keyAt) {
      const kx = x() + 3;
      flat(8);
      platforms.push({ x0: kx, x1: kx + 1, y: g + 3 });
      key = { x: kx + 0.5, y: g + 4.2 };
    }

    // ---- platforming filler ----
    // Min length 16: the praise line spoken at a correct answer (longest
    // ~3.3s) must finish before the next event's intro fires at ev.x - 2,
    // even at full forward boost (~8.55 u/s).
    const fillerLen = 16 + ((rand() * 5) | 0) + (secret ? 4 : 0);
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
    // Only spots whose ground is flat under the span (and one column to
    // each side) qualify: anchoring to a stepped column can leave the
    // platform +5 above the ground on its low side, out of single-jump
    // reach from that approach.
    if (rand() < (secret ? 0.95 : 0.75) && fillerLen > 11) {
      const w = 3 + ((rand() * 2) | 0);
      const spots = [];
      for (let px = fillerStart + 3; px <= fillerStart + fillerLen - w - 3; px++) {
        let flat = true;
        for (let c = px - 1; c <= px + w; c++) {
          if (groundY[c] !== groundY[px]) { flat = false; break; }
        }
        if (flat) spots.push(px);
      }
      if (spots.length) {
        const px = spots[(rand() * spots.length) | 0];
        const py = groundY[px] + (rand() < 0.35 ? 2 : 3);
        platforms.push({ x0: px, x1: px + w - 1, y: py });
        coinArc(px - 0.5, w, py + 1.1);
      }
    }

    // Critter on the last flat stretch (never inside event zones).
    if (critters.length < 6 && rand() < 0.55 && fillerLen > 10) {
      const cx = x() - 7;
      critters.push({ x0: cx, x1: cx + 4 });
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
      // Doors resolve at the wall (s + 12), much closer to the zone's end
      // than blocks do, so the tail is longer: praise spoken at the wall
      // must outrun the next intro trigger even at full boost.
      flat(26);
    }
  }

  // ---- flag star review zone + flagpole ----
  // starX sits well past the last event zone: "Star time!" fires at
  // starX - 10 and cuts off whatever is playing, so a praise line spoken
  // at a doors wall (~3.3s) needs this much runway at full boost.
  const starX = x() + 24;
  flat(47);
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
const SWAMP_BUBBLE_COUNT = 9;

const boxGeo = voxelGeo;

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
  (put, x, y, rand) => { // Pasta Plains: meatball trees, rigatoni, tomato bushes
    const r = rand || Math.random;
    const j = (r() - 0.5) * 0.1; // per-prop shade
    const kind = r();
    if (kind < 0.45) { // spaghetti tree: wiggly noodle trunk, meatball canopy
      put(x, y + 0.5, -3.5, 0.3, 1.0, 0.3, 0xf5d778);
      put(x + 0.18, y + 1.3, -3.5, 0.3, 0.8, 0.3, 0xefcf6a);
      put(x - 0.1, y + 2.0, -3.5, 0.3, 0.7, 0.3, 0xf5d778);
      put(x, y + 2.8, -3.5, 1.9, 1.0, 1.9, 0x8a4b2d, 0, j); // meatball pile
      put(x + 0.6, y + 3.4, -3.2, 1.0, 0.8, 1.0, 0x93532f, 0, j + 0.03);
      put(x - 0.55, y + 3.5, -3.7, 1.1, 0.9, 1.1, 0x7f4327, 0, j);
      put(x, y + 4.0, -3.5, 0.9, 0.5, 0.9, 0xd2422a, 0, j, 0, false); // marinara splat — floating decor, keep out of the AO grid
      put(x + 0.2, y + 4.3, -3.4, 0.3, 0.15, 0.3, 0xfff2cc); // parmesan fleck
    } else if (kind < 0.75) { // giant rigatoni standing on end
      put(x, y + 1.1, -3.5, 1.2, 2.2, 1.2, 0xf0c060, 0, j);
      put(x + 0.62, y + 1.1, -3.5, 0.08, 2.2, 0.9, 0xe2ad4d);
      put(x - 0.62, y + 1.1, -3.5, 0.08, 2.2, 0.9, 0xe2ad4d);
      put(x, y + 2.22, -3.5, 0.7, 0.14, 0.7, 0x9c6a2e); // dark tube hole
    } else { // tomato bush
      put(x, y + 0.5, -3.3, 1.3, 1.0, 1.3, 0x3f9e3a, 0, j);
      put(x + 0.4, y + 0.95, -3.2, 0.5, 0.5, 0.5, 0xe23b2e);
      put(x - 0.45, y + 0.7, -3.1, 0.45, 0.45, 0.45, 0xef5343);
    }
    if (r() < 0.6) { // parmesan sprinkles at the base
      put(x + 0.9 + r() * 0.6, y + 0.06, -3 - r(), 0.2, 0.1, 0.2, 0xfff2cc);
      put(x - 1 - r() * 0.5, y + 0.06, -3.4, 0.2, 0.1, 0.2, 0xf7e8b8);
    }
  },
  (put, x, y, rand) => { // Waffle Desert: waffle stacks, butter, berries, syrup
    const stack = 2 + ((rand() * 2) | 0);
    for (let i = 0; i < stack; i++) {
      put(x + (i & 1 ? 0.12 : -0.08), y + 0.3 + i * 0.55, -3.5, 2.0, 0.5, 2.0,
        i & 1 ? 0xdd9c4a : 0xcf8c3c);
    }
    const top = y + 0.3 + (stack - 1) * 0.55;
    put(x, top + 0.45, -3.5, 0.7, 0.35, 0.7, 0xffe36a); // butter pat
    put(x + 1.0, top - 0.2, -3.45, 0.16, 0.8, 0.16, 0x8a4a1a); // syrup drip
    if (rand() < 0.6) { // strawberry pal
      put(x + 2, y + 0.45, -4, 0.8, 0.9, 0.8, 0xe23b2e);
      put(x + 2, y + 1.0, -4, 0.5, 0.25, 0.5, 0x3f9e3a);
    }
    if (rand() < 0.5) put(x - 1.6, y + 0.12, -3.2, 1.2, 0.18, 0.9, 0x8a4a1a); // syrup pool
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
  (put, x, y, rand) => { // Purple Cabbage Swamp: cabbage patches, droopy palms, glowing pools
    const j = (rand() - 0.5) * 0.08;
    const kind = rand();
    if (kind < 0.38) { // mini cabbage patch
      const nC = 2 + ((rand() * 3) | 0);
      const cols = [0x7d3f8f, 0x9c5bb0, 0x80509a];
      for (let i = 0; i < nC; i++) {
        const px = x + (i - (nC - 1) / 2) * 0.8 + (rand() - 0.5) * 0.25;
        const pz = -3.3 - rand() * 0.7;
        const s = 0.65 + rand() * 0.25;
        const c = cols[(rand() * cols.length) | 0];
        put(px, y + 0.23 * s, pz, s, 0.46 * s, s * 0.92, c, 0, j);
        put(px - 0.08, y + 0.48 * s, pz, s * 0.78, 0.22 * s, s * 0.72, 0x9c5bb0, 0, j + 0.03);
        put(px + 0.02, y + 0.62 * s, pz + 0.02, 0.14 * s, 0.08 * s, s * 0.72, 0xd9c2e8, 0, 0.02);
      }
    } else if (kind < 0.7) { // droopy swamp palm, box-built for the synchronous prop path
      for (let i = 0; i < 4; i++) {
        put(x + i * 0.12, y + 0.35 + i * 0.52, -3.7, 0.34, 0.7, 0.34,
          i & 1 ? 0xd96a54 : 0xc75d4d, 0, j);
      }
      const tx = x + 0.52;
      const ty = y + 2.55;
      put(tx, ty, -3.7, 0.72, 0.28, 1.55, 0x3f9e8a, 0, j + 0.02);
      put(tx - 0.55, ty - 0.1, -3.7, 1.25, 0.25, 0.46, 0x3a8f80, 0, j);
      put(tx + 0.58, ty - 0.28, -3.45, 1.28, 0.24, 0.42, 0x3f9e8a, 0, j + 0.01);
      put(tx + 0.15, ty - 0.35, -4.22, 0.44, 0.22, 1.22, 0x4aa894, 0, j);
      put(tx + 0.08, ty + 0.12, -3.7, 0.32, 0.24, 0.32, 0xd96a54, 0, j);
    } else { // glowing swamp pool: magenta slab, hot-pink highlight, rust rocks
      put(x, y + 0.1, -3.4, 1.95, 0.16, 1.45, 0xc516a8, 1, 0, 0, false, { swampPool: true });
      put(x + 0.22, y + 0.19, -3.42, 0.58, 0.11, 0.38, 0xe93fc8, 1);
      put(x - 1.12, y + 0.2, -3.24, 0.38, 0.34, 0.38, 0x7e3d26, 0, j);
      put(x + 1.18, y + 0.18, -3.58, 0.34, 0.3, 0.34, 0xa85332, 0, j - 0.02);
    }
  },
  (put, x, y, rand) => { // crystals
    const cols = [0x7ef0ff, 0xd07eff, 0xff8ad8];
    for (let i = 0; i < 3; i++) {
      const c = cols[(rand() * cols.length) | 0];
      put(x + (i - 1) * 0.7, y + 0.8 + rand() * 0.6, -3.5, 0.4, 1.4 + rand() * 1.2, 0.4, c, c);
    }
    put(x, y + 0.15, -3.5, 1.6, 0.5, 1.6, 0x54545f);
  },
  (put, x, y, rand) => { // Pepper Volcano: mini cones, chili plants, lava pools
    const j = (rand() - 0.5) * 0.08;
    const kind = rand();
    if (kind < 0.4) { // mini volcano: basalt tiers, chili-red rim, glowing cap
      put(x, y + 0.5, -3.5, 2.0, 1.0, 2.0, 0x4a3a3e, 0, j);
      put(x, y + 1.35, -3.5, 1.4, 0.75, 1.4, 0x5a4044, 0, j + 0.03);
      put(x, y + 2.0, -3.5, 0.9, 0.6, 0.9, 0xc0392b, 0, j);
      put(x, y + 2.42, -3.5, 0.55, 0.3, 0.55, 0xff8c3e, 1); // lava cap
      put(x, y + 2.6, -3.5, 0.26, 0.18, 0.26, 0xffd23e, 1); // molten core
      put(x + 0.55, y + 1.7, -3.28, 0.2, 0.5, 0.2, 0xff7a2e, 1); // dribble
      if (rand() < 0.6) put(x - 0.62, y + 1.0, -3.35, 0.18, 0.6, 0.18, 0xff8c3e, 1);
    } else if (kind < 0.75) { // chili plant: green bush, 2-3 bright peppers
      put(x, y + 0.5, -3.3, 1.3, 1.0, 1.3, 0x3f9e3a, 0, j);
      const cols = [0xe23b2e, 0xff7a2e, 0xffc23e];
      const nP = 2 + ((rand() * 2) | 0);
      for (let i = 0; i < nP; i++) {
        const px = x + (i - (nP - 1) / 2) * 0.55;
        const py = y + 0.85 + rand() * 0.35;
        put(px, py, -3.15, 0.35, 0.5, 0.35, cols[(rand() * 3) | 0]);
        put(px, py + 0.34, -3.15, 0.12, 0.16, 0.12, 0x2e7d32); // stem nub
      }
    } else { // lava pool: glowing slab, yellow core, dark ember rocks
      put(x, y + 0.1, -3.4, 1.8, 0.16, 1.4, 0xff7a2e, 1);
      put(x + 0.2, y + 0.19, -3.4, 0.5, 0.12, 0.4, 0xffd23e, 1);
      put(x - 1.1, y + 0.2, -3.3, 0.4, 0.35, 0.4, 0x3c3238, 0, j);
      put(x + 1.15, y + 0.18, -3.55, 0.35, 0.3, 0.35, 0x453a40, 0, j);
    }
  },
];

export class LevelScene {
  constructor(scene) {
    this.scene = scene;
    this.data = null;

    this.blocks = new THREE.InstancedMesh(chamferVoxelGeo, new THREE.MeshLambertMaterial(), MAX_BLOCKS);
    this.blocks.frustumCulled = false;
    this.blocks.count = 0;
    scene.add(this.blocks);

    this.coinMesh = new THREE.InstancedMesh(
      chamferBox(0.55, 0.55, 0.12, 0.04),
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
    // Canvas pixels are sRGB; without this the gradient is read as linear
    // and the whole sky renders washed-out and pale.
    this.skyTex.colorSpace = THREE.SRGBColorSpace;
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
      chamferVoxelGeo, new THREE.MeshBasicMaterial({ color: 0xdfe8ff, fog: false }), 48
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
      const mesh = new THREE.InstancedMesh(chamferVoxelGeo, mat, 120);
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

    // Shared emissive scenery: theme 3 uses magenta swamp pools/caterpillars;
    // theme 5 uses big pepper-volcano cones behind the track.
    // Group + shared materials exist synchronously; meshes attach when the
    // cached fetch resolves (same pattern as makeCritter in game.js). One
    // material per glow color keeps the per-frame pulse to uniform writes.
    this.voxScenery = new THREE.Group();
    scene.add(this.voxScenery);
    this.voxBuildId = 0; // bumps per build; stale fetches see a mismatch and bail
    this.lavaMat = new THREE.MeshLambertMaterial({
      vertexColors: true, emissive: 0xff6a1a, emissiveIntensity: 0.5,
    });
    this.swampMat = new THREE.MeshLambertMaterial({
      color: 0xc516a8, vertexColors: true, emissive: 0xc516a8, emissiveIntensity: 0.5,
    });
    this.cabbageLeafMats = [0x9c5bb0, 0x7d3f8f, 0x8b49b0, 0x6f6f8c].map((color) =>
      new THREE.MeshLambertMaterial({ color, vertexColors: true })
    );
    this.lavaPulse = 0;
    // Monolith tints: one shared material per chili color — the model's
    // near-white tintable body multiplies with these, AO intact.
    this.monolithMats = [0xe23b2e, 0xff7a2e, 0xffc23e].map(
      (c) => new THREE.MeshLambertMaterial({ vertexColors: true, color: c })
    );
    // Crater smoke pool: single-box puffs, one material each so opacity
    // can fade per puff (the clouds use the same emissive≈color trick so
    // lighting can't flatten them). Anchored per build; hidden off-theme.
    this.smokePuffs = [];
    for (let i = 0; i < 8; i++) {
      const puff = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({
        color: 0x8a7a76, emissive: 0x7a6a64, transparent: true, opacity: 0,
        depthWrite: false,
      }));
      puff.visible = false;
      scene.add(puff);
      this.smokePuffs.push(puff);
    }

    this.swampPoolGeo = chamferBox(1, 1, 1, 0.04);
    this.swampPoolGeo.setAttribute(
      'color',
      new THREE.BufferAttribute(new Float32Array(this.swampPoolGeo.attributes.position.count * 3).fill(1), 3)
    );
    this.swampPoolGroup = new THREE.Group();
    scene.add(this.swampPoolGroup);
    this.swampPoolAnchors = [];

    this.swampBubbleGroup = new THREE.Group();
    scene.add(this.swampBubbleGroup);
    this.swampBubbles = [];
    const bubbleGeo = new THREE.SphereGeometry(0.5, 8, 6);
    for (let i = 0; i < SWAMP_BUBBLE_COUNT; i++) {
      const mat = new THREE.MeshLambertMaterial({
        color: 0xe93fc8, emissive: 0xc516a8, emissiveIntensity: 0.35,
        transparent: true, opacity: 0, depthWrite: false,
      });
      const mesh = new THREE.Mesh(bubbleGeo, mat);
      mesh.visible = false;
      this.swampBubbleGroup.add(mesh);
      this.swampBubbles.push({
        mesh, mat, anchor: null, phase: i / SWAMP_BUBBLE_COUNT,
        rise: 2.2, wobble: 0, ox: 0, oz: 0,
      });
    }
  }

  addSwampPool(x, y, z, sx, sy, sz) {
    const mesh = new THREE.Mesh(this.swampPoolGeo, this.swampMat);
    mesh.position.set(x, y, z);
    mesh.scale.set(sx, sy, sz);
    this.swampPoolGroup.add(mesh);
    this.swampPoolAnchors.push({ x, y: y + sy * 0.5, z, sx, sz });
  }

  placeSwampBubbles(seed) {
    const anchors = this.swampPoolAnchors;
    const rand = mulberry32(seed);
    for (let i = 0; i < this.swampBubbles.length; i++) {
      const b = this.swampBubbles[i];
      if (!anchors.length) {
        b.anchor = null;
        b.mesh.visible = false;
        b.mat.opacity = 0;
        continue;
      }
      const a = anchors[i % anchors.length];
      b.anchor = a;
      b.phase = (i / this.swampBubbles.length + rand() * 0.2) % 1;
      b.rise = 2.1 + rand() * 0.9;
      b.wobble = rand() * Math.PI * 2;
      b.ox = (rand() - 0.5) * a.sx * 0.45;
      b.oz = (rand() - 0.5) * a.sz * 0.35;
      b.mesh.visible = true;
      b.mat.opacity = 0;
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

    // Warm-key/cool-fill rig follows the palette (set up in game.js;
    // boss/house scenes may not expose it): warm hemisphere sky over a
    // cooler ground bounce, and a warm (moonlit-blue at night) sun.
    const hemi = this.scene.userData.hemiLight;
    if (hemi) {
      hemi.color.setHex(p.hemiSky);
      hemi.groundColor.setHex(p.hemiGround);
      hemi.intensity = p.night ? 0.85 : 1.05;
    }
    const sun = this.scene.userData.sunLight;
    if (sun) {
      sun.color.setHex(p.sunTint);
      sun.intensity = p.night ? 1.2 : 1.55;
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
    this.swampPoolGroup.clear();
    this.swampPoolAnchors.length = 0;

    const rand = mulberry32((data.theme + 1) * 7919);
    let n = 0;
    // Baked fake ambient occlusion: near-unit voxels on the track/apron
    // register their grid cell as they're placed; one pass after all put()
    // calls darkens hemmed-in blocks and lightens open tops. Build-time
    // only — nothing here runs per frame.
    const occ = new Set();
    const okey = (x, y, z) => x + ',' + y + ',' + z;
    const aoBlocks = [];
    const put = (x, y, z, sx, sy, sz, color, emissive = 0, jitter = 0, hue = 0, ao, meta) => {
      if (meta?.swampPool) {
        this.addSwampPool(x, y, z, sx, sy, sz);
        return;
      }
      if (n >= MAX_BLOCKS) return;
      this.dummy.position.set(x, y, z);
      this.dummy.scale.set(sx, sy, sz);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.updateMatrix();
      this.blocks.setMatrixAt(n, this.dummy.matrix);
      this.color.setHex(color);
      if (emissive) this.color.offsetHSL(0, 0.1, 0.08);
      if (jitter || hue) this.color.offsetHSL(hue, 0, jitter);
      this.blocks.setColorAt(n, this.color);
      // Only grid-aligned, roughly 1x1 footprint voxels participate in AO;
      // hills (huge slabs) and small decor sprinkles are excluded by size,
      // parallax-depth scenery by z. The trailing `ao` arg overrides the
      // heuristic either way, for props it misjudges (floating decor that
      // happens to be near-unit-sized must not shade the terrain grid).
      if (ao === undefined
        ? (sx >= 0.9 && sx <= 1.1 && sz >= 0.9 && sz <= 1.1 && sy >= 0.4 &&
           z > -6 && z < 2)
        : ao) {
        const cx = Math.round(x);
        const cy = Math.floor(y);
        const cz = Math.round(z);
        occ.add(okey(cx, cy, cz));
        aoBlocks.push({ n, cx, cy, cz });
      }
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
        const j = (h01(col * 7 + zi * 13) - 0.5) * 0.1;
        const hu = (h01(col * 13 + zi * 29 + 3) - 0.5) * 0.024;
        const capJ = j + (patch < 0.05 ? 0.06 : patch > 0.96 ? -0.05 : 0);
        put(col, g - 0.225, zi, 1, 0.45, 1, p.top[(col + zi) & 1], 0, capJ, hu);
        put(col, g - 0.725, zi, 1, 0.55, 1, p.dirt[(col + zi + 1) & 1], 0, j - 0.05, hu * 0.6);
        for (let d = 1; d < 4; d++) {
          const j2 = (h01(col * 7 + zi * 13 + d * 101) - 0.5) * 0.1;
          put(col, g - 0.5 - d, zi, 1, 1, 1, p.dirt[(col + zi + d) & 1], 0, j2, hu * 0.6);
        }
      }
      // Darker grass lip along the front edge, slightly proud of the face.
      put(col, g - 0.55, 1.03, 1, 0.16, 1.02, p.top[1], 0, -0.1);
      for (let zi = -5; zi <= -2; zi++) {
        const j = (h01(col * 11 + zi * 17) - 0.5) * 0.09;
        const hu = (h01(col * 19 + zi * 23 + 7) - 0.5) * 0.024;
        put(col, g - 0.5, zi, 1, 1.001, 1, p.top[(col + zi) & 1], 0, j + zi * 0.012, hu);
      }
    }

    // Floating platforms (2 deep in z). Thin ones keep the same walking
    // surface (top at plat.y) with a shallower slab.
    for (const plat of data.platforms) {
      const th = plat.thin ? 0.35 : 1;
      for (let cx = plat.x0; cx <= plat.x1; cx++) {
        for (let zi = 0; zi <= 1; zi++) {
          const j = (h01(cx * 5 + zi * 3 + plat.y * 41) - 0.5) * 0.06;
          put(cx, plat.y - th / 2, zi - 0.5, 1, th, 1, p.plat[(cx + zi) & 1], 0, j);
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
    this.placeSwampBubbles(len * 197 + data.theme * 53 + 3001);

    // Decoration scatter along the track's back row: tufts, pebbles, sprouts
    // and glowing nubs, themed per world. Deterministic (same rand stream),
    // sparse, and merged into the one instanced mesh.
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
      if (t === 0) { // pasta: spaghetti sprigs, cherry tomatoes, meatballs, cheese
        if (k < 0.35) tuft(dx, dy, dz, 0xf5d778);
        else if (k < 0.6) pebble(dx, dy, dz, 0xe23b2e);
        else if (k < 0.85) pebble(dx, dy, dz, 0x8a4b2d);
        else put(dx, dy + 0.14, dz, 0.26, 0.26, 0.26, 0xffd54a, 0, (rand() - 0.5) * 0.1);
      } else if (t === 1) { // waffle: choc chips, butter pats, berries, sugar cubes
        if (k < 0.35) pebble(dx, dy, dz, 0x4a2c1a);
        else if (k < 0.6) put(dx, dy + 0.12, dz, 0.3, 0.22, 0.3, 0xffe36a, 0, (rand() - 0.5) * 0.08);
        else if (k < 0.85) {
          put(dx, dy + 0.16, dz, 0.24, 0.3, 0.24, 0xe23b2e);
          put(dx, dy + 0.36, dz, 0.14, 0.1, 0.14, 0x3f9e3a);
        } else put(dx, dy + 0.13, dz, 0.22, 0.24, 0.22, 0xffffff, 1);
      } else if (t === 2) { // snow: ice nubs + frosted rocks
        if (k < 0.4) put(dx, dy + 0.22, dz, 0.18, 0.44, 0.18, 0xbfe6ff, 1);
        else if (k < 0.7) pebble(dx, dy, dz, 0x9fb8cc);
        else tuft(dx, dy, dz, 0xdfeefc);
      } else if (t === 3) { // swamp: cabbage sprouts, glow pebbles, mushrooms, reeds
        if (k < 0.28) {
          put(dx - 0.08, dy + 0.16, dz, 0.18, 0.32, 0.18, 0x7d3f8f, 0, (rand() - 0.5) * 0.08);
          put(dx + 0.08, dy + 0.22, dz, 0.16, 0.28, 0.16, 0x9c5bb0, 0, (rand() - 0.5) * 0.08);
          put(dx, dy + 0.42, dz, 0.08, 0.08, 0.32, 0xd9c2e8);
        } else if (k < 0.52) {
          put(dx, dy + 0.11, dz, 0.22 + rand() * 0.12, 0.18, 0.22, 0xe93fc8, 1);
        } else if (k < 0.76) {
          put(dx, dy + 0.16, dz, 0.12, 0.32, 0.12, 0xd9c2e8);
          put(dx, dy + 0.38, dz, 0.36, 0.16, 0.36, 0xd96a54, 0, (rand() - 0.5) * 0.08);
        } else {
          tuft(dx, dy, dz, 0x3f9e8a);
        }
      } else if (t === 4) { // caves: glow mushrooms + dark pebbles
        if (k < 0.55) {
          put(dx, dy + 0.15, dz, 0.14, 0.3, 0.14, 0xcfc4e8);
          put(dx, dy + 0.38, dz, 0.42, 0.18, 0.42, k < 0.3 ? 0x7ef0ff : 0xd07eff, 1);
        } else pebble(dx, dy, dz, 0x6a6a78);
      } else if (t === 5) { // pepper volcano: ember pebbles, chili sprouts, flame nubs
        if (k < 0.3) {
          put(dx, dy + 0.11, dz, 0.26 + rand() * 0.1, 0.2, 0.26, 0xff8c3e, 1);
        } else if (k < 0.6) {
          pebble(dx, dy, dz, 0x4a4044);
        } else if (k < 0.85) {
          put(dx, dy + 0.16, dz, 0.1, 0.32, 0.1, 0x3f9e3a);
          put(dx, dy + 0.44, dz, 0.2, 0.26, 0.2, 0xe23b2e);
        } else {
          put(dx, dy + 0.14, dz, 0.22, 0.28, 0.22, 0xff7a2e, 1);
          put(dx, dy + 0.42, dz, 0.13, 0.26, 0.13, 0xffd23e, 1);
        }
      }
    };
    for (let cx = 3; cx < len - 3; cx += 3 + ((rand() * 5) | 0)) {
      decor(cx + rand() - 0.5, data.groundY[cx]);
    }

    // AO pass: buried blocks (occupied cell above) darken hard; blocks
    // shadowed by taller neighbor columns darken per side; fully open tops
    // pick up a touch of extra light.
    for (const b of aoBlocks) {
      let f;
      if (occ.has(okey(b.cx, b.cy + 1, b.cz))) {
        f = 0.8;
      } else {
        let s = 0;
        if (occ.has(okey(b.cx + 1, b.cy + 1, b.cz))) s++;
        if (occ.has(okey(b.cx - 1, b.cy + 1, b.cz))) s++;
        if (occ.has(okey(b.cx, b.cy + 1, b.cz + 1))) s++;
        if (occ.has(okey(b.cx, b.cy + 1, b.cz - 1))) s++;
        f = s ? 1 - s * 0.06 : 1.05;
      }
      this.blocks.getColorAt(b.n, this.color);
      this.blocks.setColorAt(b.n, this.color.multiplyScalar(f));
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

    // Vox scenery. Children are removed, never disposed: the geometries are
    // cached per-model in voxmodel.js and shared across builds/instances.
    this.voxBuildId++;
    this.voxScenery.clear();
    for (const puff of this.smokePuffs) puff.visible = false;
    if (data.theme === 3) {
      const id = this.voxBuildId;
      // Dedicated stream: consuming `rand` here would reshuffle every other
      // theme decor placement above.
      const vr = mulberry32(len * 173 + 9337);
      const groundAt = (x) => data.groundY[Math.max(0, Math.min(len - 1, Math.round(x)))] ?? 0;
      const leafMats = this.cabbageLeafMats;
      const cabbageCount = 3 + ((vr() * 3) | 0);
      const cabbages = [];
      for (let i = 0; i < cabbageCount; i++) {
        const t = (i + 1) / (cabbageCount + 1);
        const x = Math.max(8, Math.min(len - 10, len * t + (vr() - 0.5) * 14));
        const z = -4 - vr() * 7;
        cabbages.push({
          x, y: groundAt(x) - 0.1, z,
          s: 1.05 + vr() * 0.45 + (z < -8 ? 0.18 : 0),
          rot: (vr() - 0.5) * 0.5,
          mat: leafMats[(vr() * leafMats.length) | 0],
        });
      }
      loadVoxModel(`${import.meta.env.BASE_URL}models/giant-cabbage.json`)
        .then((model) => {
          if (id !== this.voxBuildId) return; // rebuilt while loading
          for (const pl of cabbages) {
            const { group } = buildVoxMesh(model, { materials: { leaf: pl.mat } });
            group.position.set(pl.x, pl.y, pl.z);
            group.rotation.y = pl.rot;
            group.scale.setScalar(pl.s);
            this.voxScenery.add(group);
          }
        })
        .catch((err) => console.error('giant-cabbage scenery failed to load:', err));

      const caterpillarCount = vr() < 0.55 ? 2 : 1;
      const caterpillars = [];
      for (let i = 0; i < caterpillarCount; i++) {
        const x = len * (0.3 + i * 0.34) + (vr() - 0.5) * 10;
        caterpillars.push({
          x, y: groundAt(x) + 0.06, z: -2.8 - vr() * 0.6,
          s: 0.72 + vr() * 0.18,
          rot: vr() < 0.5 ? 0 : Math.PI,
        });
      }
      loadVoxModel(`${import.meta.env.BASE_URL}models/critter-caterpillar.json`)
        .then((model) => {
          if (id !== this.voxBuildId) return; // rebuilt while loading
          for (const pl of caterpillars) {
            const { group } = buildVoxMesh(model, { materials: { glow: this.swampMat } });
            group.position.set(pl.x, pl.y, pl.z);
            group.rotation.y = pl.rot;
            group.scale.setScalar(pl.s);
            this.voxScenery.add(group);
          }
        })
        .catch((err) => console.error('critter-caterpillar scenery failed to load:', err));
    } else if (data.theme === 5) {
      const id = this.voxBuildId;
      // Dedicated stream: consuming `rand` here would reshuffle every other
      // theme decor placement above.
      const vr = mulberry32(len * 131 + 4177);
      // One towering mega-cone mid-level whose smoking crater clears the
      // ridgelines, flanked by 2-3 mid cones. The mid slots sit between the
      // prop apron (z ~ -3.5) and the near hill band (z = -12, 5-8 units
      // tall): anything shorter than the hills is swallowed whole behind
      // them at this low camera angle.
      const cones = [{ x: len * (0.35 + vr() * 0.3), z: -15, s: 1.9 + vr() * 0.4 }];
      const spots = vr() < 0.5 ? [0.15, 0.8] : [0.1, 0.55, 0.9];
      spots.forEach((t, i) => cones.push({
        x: len * t + (vr() - 0.5) * 10,
        z: i & 1 ? -10.5 : -8,
        s: (i & 1 ? 1.15 : 0.9) + vr() * 0.25,
      }));
      // Crater smoke starts now: the anchors are known before the meshes
      // arrive (bottom-center anchor, rim at ~5.8 units before scaling).
      let np = 0;
      for (const c of cones) {
        for (let k = 0; k < 2 && np < this.smokePuffs.length; k++, np++) {
          const puff = this.smokePuffs[np];
          puff.visible = true;
          puff.userData = {
            anchor: { x: c.x + (vr() - 0.5), y: 5.8 * c.s, z: c.z },
            phase: vr(), speed: 0.1 + vr() * 0.06, size: 0.7 + c.s * 0.4,
          };
        }
      }
      // Giant chilis planted tip-up between the cones and the track, and
      // charred ember-trees on the nearest band — the monoliths cycle the
      // shared tint materials, the tree tips share the pulsing lava glow.
      const poles = [];
      const nPoles = 3 + (vr() < 0.5 ? 0 : 1);
      for (let i = 0; i < nPoles; i++) {
        poles.push({
          x: len * ((i + 0.3 + vr() * 0.5) / nPoles), z: -5.5 - vr() * 2,
          s: 0.6 + vr() * 0.3, mat: this.monolithMats[i % this.monolithMats.length],
          flip: vr() < 0.5,
        });
      }
      const trees = [];
      const nTrees = 2 + (vr() < 0.6 ? 0 : 1);
      for (let i = 0; i < nTrees; i++) {
        trees.push({
          x: len * ((i + 0.6 + vr() * 0.35) / nTrees), z: -4.6 - vr() * 1.2,
          s: 0.9 + vr() * 0.35, flip: vr() < 0.5,
        });
      }
      const place = (name, list, materialsFor) => {
        loadVoxModel(`${import.meta.env.BASE_URL}models/${name}.json`)
          .then((model) => {
            if (id !== this.voxBuildId) return; // rebuilt while loading
            for (const pl of list) {
              const { group } = buildVoxMesh(model, { materials: materialsFor(pl) });
              // Bottom-center anchors; sink slightly so bases never float
              // over a dip in the stepped ground/ridgelines.
              group.position.set(pl.x, name === 'pepper-volcano' ? -0.6 : -0.25, pl.z);
              group.scale.setScalar(pl.s);
              if (pl.flip) group.rotation.y = Math.PI;
              this.voxScenery.add(group);
            }
          })
          .catch((err) => console.error(`${name} scenery failed to load:`, err));
      };
      place('pepper-volcano', cones, () => ({ lava: this.lavaMat }));
      place('pepper-monolith', poles, (pl) => ({ body: pl.mat }));
      place('ember-tree', trees, () => ({ ember: this.lavaMat }));
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
    // Crater and swamp glows breathe through shared materials.
    this.lavaPulse += dt;
    const glow = 0.45 + Math.sin(this.lavaPulse * 2.4) * 0.15;
    this.lavaMat.emissiveIntensity = glow;
    this.swampMat.emissiveIntensity = glow;
    // Smoke: each puff loops a rise-drift-swell-fade cycle over its crater.
    if (this.data && this.data.theme === 5) {
      for (const puff of this.smokePuffs) {
        if (!puff.visible) continue;
        const u = puff.userData;
        const f = (this.lavaPulse * u.speed + u.phase) % 1;
        puff.position.set(u.anchor.x + f * 1.6, u.anchor.y + f * 3.4, u.anchor.z);
        puff.scale.setScalar(u.size * (0.55 + f * 0.9));
        puff.material.opacity = Math.sin(Math.PI * f) * 0.45;
      }
    }

    const bubbleT = this.lavaPulse * 0.34;
    for (const b of this.swampBubbles) {
      if (!b.anchor) continue;
      const u = (bubbleT + b.phase) % 1;
      const popping = u > 0.9;
      const popU = popping ? (u - 0.9) * 10 : 0;
      const fade = Math.min(1, u * 4, (1 - u) * 5);
      let sc = 0.16 + u * 0.2;
      let opacity = 0.5 * fade;
      if (popping) {
        sc = 0.44 * (1 - popU * 0.65);
        opacity = 0.32 * (1 - popU);
      }
      b.mesh.position.set(
        b.anchor.x + b.ox + Math.sin(u * 6.3 + b.wobble) * 0.16,
        b.anchor.y + 0.08 + u * b.rise,
        b.anchor.z + b.oz + Math.sin(u * 5.1 + b.wobble * 0.7) * 0.08
      );
      b.mesh.scale.setScalar(Math.max(0.001, sc));
      b.mat.opacity = Math.max(0, opacity);
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
