// Endless voxel ground (single InstancedMesh, recycled rows) + pooled
// per-world scenery (blocky trees / cacti / snowmen / crystals / islands)
// + drifting clouds. Forward is -z.

import * as THREE from 'three';

const ROW_W = 13; // blocks per row, x = -6..6
const ROWS = 110; // track depth in rows
const BEHIND = 12; // rows kept behind the player
const SCENERY_COUNT = 22;
const CLOUD_COUNT = 8;

const PALETTES = [
  { // Grass Plains
    track: [0x8fd35f, 0x83c854], side: [0x62b04a, 0x58a441],
    sky: 0x87ceeb, fog: 0xa9ddf3,
  },
  { // Sandy Desert
    track: [0xeed48e, 0xe5c97e], side: [0xdcb964, 0xd2ad57],
    sky: 0x8fd4e8, fog: 0xf2debe,
  },
  { // Snowy Peaks
    track: [0xcfe9f5, 0xc0ddef], side: [0xf4f8fc, 0xe6eef7],
    sky: 0xa8c8e8, fog: 0xdbe9f7,
  },
  { // Crystal Caves
    track: [0x8578a8, 0x7a6b96], side: [0x5e5e6c, 0x54545f],
    sky: 0x241d33, fog: 0x33294a,
  },
  { // Sky Islands
    track: [0x9be07a, 0x8ed86e], side: [0x84cd65, 0x79c15b],
    sky: 0x6fc3ff, fog: 0xb9e2ff,
  },
];

const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const matCache = new Map();
function mat(color, emissive = 0) {
  const k = color + '/' + emissive;
  if (!matCache.has(k)) {
    matCache.set(k, new THREE.MeshLambertMaterial({ color, emissive }));
  }
  return matCache.get(k);
}

function addBox(parent, color, sx, sy, sz, x, y, z, emissive = 0) {
  const m = new THREE.Mesh(boxGeo, mat(color, emissive));
  m.scale.set(sx, sy, sz);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}

// ---- scenery builders per world (box compositions only) ----

const BUILDERS = [
  (g) => { // tree
    addBox(g, 0x7a4f2a, 0.4, 1.4, 0.4, 0, 0.7, 0);
    addBox(g, 0x3f9e3a, 1.7, 1.4, 1.7, 0, 1.9, 0);
    addBox(g, 0x4cb545, 1.1, 0.8, 1.1, 0, 2.8, 0);
  },
  (g) => { // cactus
    addBox(g, 0x4da34c, 0.5, 2, 0.5, 0, 1, 0);
    addBox(g, 0x4da34c, 0.9, 0.35, 0.35, 0.55, 1.3, 0);
    addBox(g, 0x4da34c, 0.35, 0.7, 0.35, 0.85, 1.7, 0);
    if (Math.random() < 0.5) addBox(g, 0xe0925a, 0.9, 0.5, 0.9, 2.2, 0.25, 1.5);
  },
  (g) => { // snowman-ish stack + snowy tree
    addBox(g, 0xffffff, 1, 1, 1, 0, 0.5, 0);
    addBox(g, 0xf4f8fc, 0.75, 0.75, 0.75, 0, 1.35, 0);
    addBox(g, 0xffffff, 0.55, 0.55, 0.55, 0, 1.98, 0);
    addBox(g, 0xe8863c, 0.12, 0.12, 0.4, 0, 1.98, -0.4);
    addBox(g, 0x7a4f2a, 0.3, 1, 0.3, 1.8, 0.5, 0.8);
    addBox(g, 0xdfeefc, 1.2, 1.1, 1.2, 1.8, 1.5, 0.8);
  },
  (g) => { // crystals
    const cols = [0x7ef0ff, 0xd07eff, 0xff8ad8];
    for (let i = 0; i < 3; i++) {
      const c = cols[(Math.random() * cols.length) | 0];
      const b = addBox(g, c, 0.4, 1.4 + Math.random() * 1.4, 0.4,
        (i - 1) * 0.7, 0.8, (Math.random() - 0.5), c);
      b.rotation.z = (Math.random() - 0.5) * 0.5;
    }
    addBox(g, 0x54545f, 1.6, 0.5, 1.6, 0, 0.15, 0);
  },
  (g) => { // little floating island bush
    addBox(g, 0x8ed86e, 1.4, 0.5, 1.4, 0, 1.6 + Math.random() * 1.5, 0);
    addBox(g, 0x9c7748, 1, 0.6, 1, 0, 1.1 + Math.random() * 1.5, 0);
    addBox(g, 0x3f9e3a, 0.7, 0.6, 0.7, 0, 2.15 + Math.random() * 1.5, 0);
  },
];

export class Track {
  constructor(scene) {
    this.scene = scene;
    this.worldIdx = 0;

    this.ground = new THREE.InstancedMesh(
      boxGeo,
      new THREE.MeshLambertMaterial(),
      ROW_W * ROWS
    );
    this.ground.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.ground.frustumCulled = false;
    scene.add(this.ground);

    this.rowZ = new Float32Array(ROWS);
    this.hidden = new Uint8Array(ROW_W * ROWS); // sky-world gaps
    this.dummy = new THREE.Object3D();
    this.color = new THREE.Color();

    this.scenery = [];
    for (let i = 0; i < SCENERY_COUNT; i++) {
      const g = new THREE.Group();
      scene.add(g);
      this.scenery.push(g);
    }

    this.clouds = [];
    const cloudMat = mat(0xffffff);
    for (let i = 0; i < CLOUD_COUNT; i++) {
      const g = new THREE.Group();
      for (let j = 0; j < 3; j++) {
        const m = new THREE.Mesh(boxGeo, cloudMat);
        m.scale.set(1.6 + Math.random() * 2, 0.8, 1.4 + Math.random());
        m.position.set(j * 1.4 - 1.4, Math.random() * 0.4, (Math.random() - 0.5) * 1.5);
        g.add(m);
      }
      g.userData.drift = 0.3 + Math.random() * 0.5;
      scene.add(g);
      this.clouds.push(g);
    }
  }

  setWorld(worldIdx) {
    this.worldIdx = worldIdx;
    const p = PALETTES[worldIdx];
    this.scene.background = new THREE.Color(p.sky);
    this.scene.fog = new THREE.Fog(p.fog, 40, 95);

    // Regenerate gap pattern (Sky Islands only, off-track blocks).
    for (let i = 0; i < ROW_W * ROWS; i++) {
      const x = (i % ROW_W) - 6;
      this.hidden[i] = worldIdx === 4 && Math.abs(x) > 4 && Math.random() < 0.35 ? 1 : 0;
    }

    // Recolor all instances.
    for (let r = 0; r < ROWS; r++) this.paintRow(r);
    this.ground.instanceColor.needsUpdate = true;

    // Rebuild scenery contents.
    const builder = BUILDERS[worldIdx];
    for (const g of this.scenery) {
      g.clear();
      builder(g);
      g.rotation.y = Math.random() * Math.PI * 2;
    }

    this.reset(0);
  }

  paintRow(r) {
    const p = PALETTES[this.worldIdx];
    for (let j = 0; j < ROW_W; j++) {
      const x = j - 6;
      const onTrack = Math.abs(x) <= 3.5;
      const shades = onTrack ? p.track : p.side;
      this.color.setHex(shades[(r + j) % 2]);
      // subtle per-block variation
      const v = ((r * 31 + j * 17) % 7) * 0.008 - 0.024;
      this.color.offsetHSL(0, 0, v);
      this.ground.setColorAt(r * ROW_W + j, this.color);
    }
  }

  placeRow(r) {
    for (let j = 0; j < ROW_W; j++) {
      const idx = r * ROW_W + j;
      this.dummy.position.set(j - 6, -0.5, this.rowZ[r]);
      const s = this.hidden[idx] ? 0.0001 : 1;
      this.dummy.scale.set(s, s, s);
      this.dummy.updateMatrix();
      this.ground.setMatrixAt(idx, this.dummy.matrix);
    }
  }

  placeSceneryItem(g, z) {
    const side = Math.random() < 0.5 ? -1 : 1;
    g.position.set(side * (6.5 + Math.random() * 6), 0, z);
    g.rotation.y = Math.random() * Math.PI * 2;
  }

  reset(playerZ) {
    for (let r = 0; r < ROWS; r++) {
      this.rowZ[r] = playerZ + BEHIND - r;
      this.placeRow(r);
    }
    this.ground.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < this.scenery.length; i++) {
      this.placeSceneryItem(this.scenery[i], playerZ + BEHIND - (i / this.scenery.length) * ROWS);
    }
    const cloudY = this.worldIdx === 4 ? -4 : 9;
    for (let i = 0; i < this.clouds.length; i++) {
      const c = this.clouds[i];
      c.position.set(
        (Math.random() - 0.5) * 44,
        cloudY + Math.random() * 5,
        playerZ + BEHIND - Math.random() * ROWS
      );
    }
  }

  update(dt, playerZ) {
    let dirty = false;
    for (let r = 0; r < ROWS; r++) {
      if (this.rowZ[r] > playerZ + BEHIND) {
        this.rowZ[r] -= ROWS;
        this.placeRow(r);
        dirty = true;
      }
    }
    if (dirty) this.ground.instanceMatrix.needsUpdate = true;

    for (const g of this.scenery) {
      if (g.position.z > playerZ + BEHIND) {
        this.placeSceneryItem(g, g.position.z - ROWS);
      }
    }

    for (const c of this.clouds) {
      c.position.x += c.userData.drift * dt;
      if (c.position.x > 26) c.position.x = -26;
      if (c.position.z > playerZ + BEHIND) c.position.z -= ROWS;
    }
  }
}
