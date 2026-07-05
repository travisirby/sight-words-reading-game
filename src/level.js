// Level generation + rendering for the 2.5D side-scroller.
// generateLevel() is pure data (node-testable); LevelScene renders it as a
// single InstancedMesh of voxels (ground, platforms, scenery, hills) plus
// instanced coins, a flagpole and drifting clouds. Forward is +x.

import * as THREE from 'three';

export const PALETTES = [
  { // Grass Plains
    top: [0x8fd35f, 0x83c854], dirt: [0x9c7748, 0x8f6b3f],
    plat: [0xd8a15a, 0xcc9550], hill: 0x6fbf62, hill2: 0x8fd48a,
    sky: 0x87ceeb, fog: 0xa9ddf3,
  },
  { // Sandy Desert
    top: [0xeed48e, 0xe5c97e], dirt: [0xd2ad57, 0xc7a04c],
    plat: [0xe0925a, 0xd48750], hill: 0xdcb964, hill2: 0xead394,
    sky: 0x8fd4e8, fog: 0xf2debe,
  },
  { // Snowy Peaks
    top: [0xf4f8fc, 0xe6eef7], dirt: [0xb8cee0, 0xaac2d6],
    plat: [0x9fc4e8, 0x92b8dd], hill: 0xcfe0f0, hill2: 0xe8f2fa,
    sky: 0xa8c8e8, fog: 0xdbe9f7,
  },
  { // Crystal Caves
    top: [0x8578a8, 0x7a6b96], dirt: [0x5e5e6c, 0x54545f],
    plat: [0x9f6fd4, 0x9263c7], hill: 0x453a5e, hill2: 0x584a75,
    sky: 0x241d33, fog: 0x33294a,
  },
  { // Sky Islands
    top: [0x9be07a, 0x8ed86e], dirt: [0x9c7748, 0x8f6b3f],
    plat: [0xffd54a, 0xf5c93e], hill: 0x84cd65, hill2: 0xbde8ff,
    sky: 0x6fc3ff, fog: 0xb9e2ff,
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

    // Floating platform with a coin arc.
    if (rand() < (secret ? 0.95 : 0.75) && fillerLen > 11) {
      const w = 3 + ((rand() * 2) | 0);
      const px = fillerStart + 3 + ((rand() * (fillerLen - w - 6)) | 0);
      const py = groundY[Math.min(px, x() - 1)] + (secret && rand() < 0.4 ? 4 : 3);
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
      platforms.push({ x0: s + 6, x1: s + 11, y: g + 2 }); // tier +2 ledge
      platforms.push({ x0: s + 9, x1: s + 11, y: g + 4 }); // tier +4 ledge
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
    if (cc.x0 > 12 && clearOf(cc) &&
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

const MAX_BLOCKS = 20000;
const MAX_COINS = 260;
const CLOUD_COUNT = 6;

const boxGeo = new THREE.BoxGeometry(1, 1, 1);

// Theme prop emitters: (put, x, y, rand) -> voxels behind the track (z<0).
// Also reused by the overworld for region decoration.
export const PROPS = [
  (put, x, y) => { // tree
    put(x, y + 0.7, -3.5, 0.4, 1.4, 0.4, 0x7a4f2a);
    put(x, y + 1.9, -3.5, 1.7, 1.4, 1.7, 0x3f9e3a);
    put(x, y + 2.8, -3.5, 1.1, 0.8, 1.1, 0x4cb545);
  },
  (put, x, y, rand) => { // cactus
    put(x, y + 1, -3.5, 0.5, 2, 0.5, 0x4da34c);
    put(x + 0.55, y + 1.3, -3.5, 0.9, 0.35, 0.35, 0x4da34c);
    put(x + 0.85, y + 1.7, -3.5, 0.35, 0.7, 0.35, 0x4da34c);
    if (rand() < 0.5) put(x + 2, y + 0.25, -4, 0.9, 0.5, 0.9, 0xe0925a);
  },
  (put, x, y) => { // snowman + snowy tree
    put(x, y + 0.5, -3.5, 1, 1, 1, 0xffffff);
    put(x, y + 1.35, -3.5, 0.75, 0.75, 0.75, 0xf4f8fc);
    put(x, y + 1.98, -3.5, 0.55, 0.55, 0.55, 0xffffff);
    put(x + 1.8, y + 0.5, -4.2, 0.3, 1, 0.3, 0x7a4f2a);
    put(x + 1.8, y + 1.5, -4.2, 1.2, 1.1, 1.2, 0xdfeefc);
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
    put(x, fy, -4, 1.4, 0.5, 1.4, 0x8ed86e);
    put(x, fy - 0.5, -4, 1, 0.6, 1, 0x9c7748);
    put(x, fy + 0.55, -4, 0.7, 0.6, 0.7, 0x3f9e3a);
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

    // Parallax skyline: two instanced layers of distant hill silhouettes,
    // re-tinted per theme in build(). Each layer is a 90-unit pattern laid
    // out twice, repositioned in update() so it always covers the viewport.
    this.parallax = [];
    const mkLayer = (z, factor, seed, baseH) => {
      const mat = new THREE.MeshLambertMaterial();
      const mesh = new THREE.InstancedMesh(boxGeo, mat, 16);
      mesh.frustumCulled = false;
      const rand = mulberry32(seed);
      const dummy = new THREE.Object3D();
      const defs = [];
      for (let i = 0; i < 4; i++) {
        defs.push({ x: i * 22 + rand() * 8, w: 9 + rand() * 8, h: baseH + rand() * 3 });
      }
      let n = 0;
      for (let tile = 0; tile < 2; tile++) {
        for (const d of defs) {
          dummy.position.set(tile * 90 + d.x, d.h / 2 - 2, 0);
          dummy.scale.set(d.w, d.h + 4, 2.5);
          dummy.updateMatrix();
          mesh.setMatrixAt(n++, dummy.matrix);
          dummy.position.set(tile * 90 + d.x, d.h + 0.8, 0);
          dummy.scale.set(d.w * 0.55, 1.6, 2.2);
          dummy.updateMatrix();
          mesh.setMatrixAt(n++, dummy.matrix);
        }
      }
      mesh.count = n;
      mesh.instanceMatrix.needsUpdate = true;
      mesh.position.z = z;
      scene.add(mesh);
      this.parallax.push({ mesh, mat, factor });
    };
    mkLayer(-14, 0.3, 51, 2);
    mkLayer(-20, 0.15, 87, 4.5);

    // Drifting clouds.
    this.clouds = [];
    const cloudMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    for (let i = 0; i < CLOUD_COUNT; i++) {
      const gp = new THREE.Group();
      for (let j = 0; j < 3; j++) {
        const m = new THREE.Mesh(boxGeo, cloudMat);
        m.scale.set(1.6 + Math.random() * 2, 0.8, 1.4 + Math.random());
        m.position.set(j * 1.4 - 1.4, Math.random() * 0.4, (Math.random() - 0.5) * 1.5);
        gp.add(m);
      }
      gp.userData.drift = 0.3 + Math.random() * 0.5;
      scene.add(gp);
      this.clouds.push(gp);
    }
  }

  build(data) {
    this.data = data;
    const p = PALETTES[data.theme];
    this.scene.background = new THREE.Color(p.sky);
    this.scene.fog = new THREE.Fog(p.fog, 30, 80);

    // Parallax silhouette tints: nearer layer darker, farther layer lighter
    // (hazier), both from the theme palette.
    this.parallax[0].mat.color.setHex(p.hill).multiplyScalar(0.72);
    this.parallax[1].mat.color.setHex(p.hill2).lerp(new THREE.Color(p.sky), 0.35);

    const rand = mulberry32((data.theme + 1) * 7919);
    let n = 0;
    const put = (x, y, z, sx, sy, sz, color, emissive = 0) => {
      if (n >= MAX_BLOCKS) return;
      this.dummy.position.set(x, y, z);
      this.dummy.scale.set(sx, sy, sz);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.updateMatrix();
      this.blocks.setMatrixAt(n, this.dummy.matrix);
      this.color.setHex(color);
      if (emissive) this.color.offsetHSL(0, 0.1, 0.08);
      this.blocks.setColorAt(n, this.color);
      n++;
    };

    // Ground: 3-deep track (z -1..1) with 4 blocks of vertical thickness,
    // plus a back apron (z -2..-5) so background props stand on land.
    const len = data.length;
    for (let col = 0; col < len; col++) {
      const g = data.groundY[col];
      for (let zi = -1; zi <= 1; zi++) {
        for (let d = 0; d < 4; d++) {
          const shades = d === 0 ? p.top : p.dirt;
          const c = shades[(col + zi + d) & 1];
          put(col, g - 0.5 - d, zi, 1, 1, 1, c);
        }
      }
      for (let zi = -5; zi <= -2; zi++) {
        put(col, g - 0.5, zi, 1, 1.001, 1, p.dirt[(col + zi) & 1]);
      }
    }

    // Floating platforms (2 deep in z).
    for (const plat of data.platforms) {
      for (let cx = plat.x0; cx <= plat.x1; cx++) {
        for (let zi = 0; zi <= 1; zi++) {
          put(cx, plat.y - 0.5, zi - 0.5, 1, 1, 1, p.plat[(cx + zi) & 1]);
        }
      }
    }

    // Background hills, two depth layers (rounded: stacked shrinking slabs).
    for (let cx = -10; cx < len + 20; cx += 24 + ((rand() * 14) | 0)) {
      const h = 1.5 + rand() * 2;
      const w = 9 + rand() * 7;
      put(cx, h / 2 - 1.5, -12, w, h + 3, 4, p.hill);
      put(cx, h + 1.5 + rand(), -12, w * 0.55, 2, 3.4, p.hill);
      const h2 = 3 + rand() * 3;
      const x2 = cx + 10 + rand() * 8;
      put(x2, h2 / 2 - 1.5, -19, w * 1.5, h2 + 3, 4, p.hill2);
      put(x2, h2 + 1.5 + rand(), -19, w * 0.8, 2.4, 3.4, p.hill2);
    }

    // Theme props on the apron.
    const prop = PROPS[data.theme];
    for (let cx = 4; cx < len - 4; cx += 10 + ((rand() * 9) | 0)) {
      const g = data.groundY[Math.min(cx, len - 1)];
      prop(put, cx + rand() * 3, g, rand);
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
