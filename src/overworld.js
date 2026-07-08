// Super Mario World-style 3D overworld: voxel diorama with node path,
// walking kid token, drag-to-pan camera and block-by-block path reveals.
// Terrain is one instanced mesh of checker-topped, terraced region cells
// joined by little bridges over a checkered sea; locked regions render in a
// dark desaturated tint and colorize when their first node unlocks.

import * as THREE from 'three';
import { voxelGeo, makeVoxelGeo, chamferVoxelGeo } from './voxelgeo.js';
import { buildMapData, secretSegment } from './mapdata.js';
import { PALETTES, mulberry32 } from './level.js';
import { makeKidMesh } from './player.js';
import { loadVoxModel, buildVoxMesh } from './voxmodel.js';
import { makeKeyMesh } from './game.js';
import { BOSSES } from './boss.js';
import { Effects } from './effects.js';
import { sfxPlink, sfxBoing, speakLine } from './audio.js';
import { WORLDS } from './words.js';
import { HOUSE_ITEMS } from './housedata.js';
import * as store from './store.js';

const boxGeo = voxelGeo;
const bubbleGeo = new THREE.SphereGeometry(0.5, 8, 6);

// Deterministic 0..1 hash from a 2D cell + salt: per-tile jitter that stays
// stable frame to frame without burning RNG state.
function hash2(x, z, s = 0) {
  const n = Math.sin(x * 127.1 + z * 311.7 + s * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

// Ground boxes tint their side faces toward earth tones via vertex colors
// (multiplied with each instance's top color) so islands read as chunky
// voxel terrain instead of flat-sided extrusions.
const groundGeo = makeVoxelGeo();
{
  // Fill per vertex by its axis-aligned normal (chamferBox gives every
  // vertex exactly one face's normal, so faces tint flat and the bevels
  // blend between neighboring tints).
  const nrm = groundGeo.attributes.normal;
  const cols = new Float32Array(nrm.count * 3);
  const tint = (x, y) => {
    if (y > 0.5) return [1, 1, 1];                    // top: the instance color
    if (y < -0.5) return [0.4, 0.34, 0.3];            // bottom: deep soil shadow
    if (Math.abs(x) > 0.5) return [0.72, 0.58, 0.46]; // ±x sides: dry earth
    return [0.8, 0.65, 0.51];                         // ±z sides: lit earth
  };
  for (let v = 0; v < nrm.count; v++) {
    cols.set(tint(nrm.getX(v), nrm.getY(v)), v * 3);
  }
  groundGeo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
}

// Water, foam and glints render as flat slabs or sub-pixel sparks — a bevel
// could never be seen there, so they use plain 24-vert boxes.
const flatBoxGeo = new THREE.BoxGeometry(1, 1, 1);

const CAM_OFFSET = new THREE.Vector3(0, 18, 21); // ~41° down — wide diorama view
const MAX_TILES = 700;
const MAX_SECRET_TILES = 320;
const MAX_GROUND = 3000;
const MAX_DECOR = 900;
const MAX_GLOW = 80;
const MAX_POOL_GLOW = 80;
const LOCK_TINT = 0.45; // color multiplier on locked regions
const ROW_Z = 9;
const FLOWER_COLORS = [0xff6b81, 0xffd93d, 0xff9ff3, 0x74b9ff];
const TOKEN_Y = 0.56; // token feet on top of a node pad
// The player's house lives on the map: back-left corner of the starting row,
// just past world 0's first node so it's on-screen from the first visit.
const HOUSE_POS = { x: -17.5, z: -2.5 };

function nodeName(world, level, secret, boss) {
  if (secret) return `${WORLDS[world].name} Secret`;
  if (boss) return `${WORLDS[world].name} Castle`;
  return `${WORLDS[world].name} ${level + 1}`;
}

export class Overworld {
  // cb: { onNodeSelected(info), onDismiss(), onEnterKey() }
  constructor(renderer, cb) {
    this.cb = cb;
    this.renderer = renderer;
    this.active = false;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x84c9f0);
    // Fog matches the sky exactly so the far sea melts into it, not banded.
    this.scene.fog = new THREE.Fog(0x84c9f0, 34, 72);
    this.camera = new THREE.PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 0.1, 200
    );

    // Warm key / cool fill: sun-tinted directional, warm hemisphere sky
    // over a cool sea-blue ground bounce.
    const hemi = new THREE.HemisphereLight(0xffeed8, 0x6d9cba, 1.1);
    const sun = new THREE.DirectionalLight(0xffe3b0, 1.45);
    sun.position.set(6, 14, 8);
    this.scene.add(hemi, sun);

    this.effects = new Effects(this.scene);
    this.data = buildMapData();

    this.buildCorridors();
    this.buildTerrain();
    this.buildWater(); // after terrain: shore tints/foam read this.groundH
    this.buildProps();
    this.buildCritters();
    this.buildSigns();
    this.buildSkyClouds();
    this.buildTiles();
    this.buildNodes();
    this.buildHouse();

    // Locked-region tint state (t = colorize progress, 1 = fully lit).
    this.lockState = WORLDS.map((w, wi) => ({
      unlocked: store.isWorldUnlocked(wi), t: 1,
    }));
    this.applyLockTints();

    this.token = makeKidMesh(1.125); // 50% bigger than the old 0.75 token
    this.token.rotation.y = -Math.PI / 2; // camera-facing when idle
    const tokenBox = new THREE.BoxGeometry(1, 1, 1);
    // Fat invisible touch target: tapping the kid acts like pressing Enter
    // (select the node under him; play if the banner is already up).
    this.tokenHit = new THREE.Mesh(
      tokenBox,
      new THREE.MeshBasicMaterial({ visible: false })
    );
    this.tokenHit.scale.set(2, 2.6, 2);
    this.tokenHit.position.y = 1;
    this.token.add(this.tokenHit);
    // Floating gold mini-kid above the token (bobs and spins in tick(), like
    // the house marker): tapping IT opens the character editor.
    const gold = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 });
    this.editIcon = new THREE.Group();
    const iHead = new THREE.Mesh(tokenBox, gold);
    iHead.scale.setScalar(0.34);
    iHead.position.y = 0.4;
    const iBody = new THREE.Mesh(tokenBox, gold);
    iBody.scale.set(0.42, 0.44, 0.24);
    const iArmL = new THREE.Mesh(tokenBox, gold);
    iArmL.scale.set(0.13, 0.36, 0.13);
    iArmL.position.set(-0.31, 0.02, 0);
    const iArmR = iArmL.clone();
    iArmR.position.x = 0.31;
    this.editIcon.add(iHead, iBody, iArmL, iArmR);
    this.editIcon.position.y = 2.7;
    this.token.add(this.editIcon);
    this.editHit = new THREE.Mesh(
      tokenBox,
      new THREE.MeshBasicMaterial({ visible: false })
    );
    this.editHit.scale.setScalar(1.7);
    this.editHit.position.y = 2.7;
    this.token.add(this.editHit);
    this.scene.add(this.token);
    this.tokenNav = 0; // index into navList
    this.walk = null; // { points, t, dur, target }

    this.focus = new THREE.Vector3();
    this.panIdle = 99;
    this.revealQueue = [];
    this.reveal = null;

    this.navList = [];
    this.attachInput();
  }

  // ---------- static scenery ----------

  // Marks cells around the walkable trail: keepCells force terrain under the
  // main journey (incl. row-to-row crossings), flatCells additionally keep
  // every possible walk/tile line (incl. secret branches) terrace-free.
  buildCorridors() {
    const { nodes, secretNodes, segments } = this.data;
    this.keepCells = new Set();
    this.flatCells = new Set();
    const mark = (set, x, z, r) => {
      for (let cx = Math.round(x - r); cx <= Math.round(x + r); cx++) {
        for (let cz = Math.round(z - r); cz <= Math.round(z + r); cz++) {
          if ((cx - x) ** 2 + (cz - z) ** 2 <= r * r) set.add(cx + ',' + cz);
        }
      }
    };
    const markLine = (set, a, b, r) => {
      const steps = Math.max(1, Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) * 2));
      for (let k = 0; k <= steps; k++) {
        const t = k / steps;
        mark(set, a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t, r);
      }
    };
    // Main journey: straight token lines between consecutive nodes (narrower
    // across the water so the isthmuses stay small), plus every path tile.
    for (let i = 1; i < nodes.length; i++) {
      const cross = nodes[i - 1].world !== nodes[i].world;
      markLine(this.keepCells, nodes[i - 1], nodes[i], cross ? 1.3 : 2.0);
    }
    for (let i = 1; i < segments.length; i++) {
      for (const pt of segments[i]) mark(this.keepCells, pt.x, pt.z, 1.7);
    }
    // Guaranteed flat yard under the player's house (plus a lane back to the
    // first node so the ground between them never terraces).
    mark(this.keepCells, HOUSE_POS.x, HOUSE_POS.z, 2.6);
    markLine(this.keepCells, HOUSE_POS, nodes[0], 2.6);
    // Camera looks from +z, so tall props on the near side of the road would
    // occlude it — keep the foreground strip clear as well.
    mark(this.keepCells, HOUSE_POS.x + 2.3, HOUSE_POS.z + 3.7, 2.2);
    for (const key of this.keepCells) this.flatCells.add(key);
    // Secret branches: flatten (but don't land-fill) every line the token or
    // the purple tiles can take — anchors are levels that can hold a key.
    secretNodes.forEach((sn, wi) => {
      const wNodes = nodes.filter((nd) => nd.world === wi);
      markLine(this.flatCells, wNodes[wNodes.length - 1], sn, 1.6);
      const nxt = nodes.find((nd) => nd.world === wi + 1);
      if (nxt) markLine(this.flatCells, sn, nxt, 1.3);
      for (const nd of wNodes) {
        if (nd.level === 1 || (wi + nd.level) % 2 === 0) {
          const mid = { x: nd.x, z: sn.z + 0.5 };
          markLine(this.flatCells, nd, mid, 1.6);
          markLine(this.flatCells, mid, sn, 1.6);
        }
      }
      mark(this.flatCells, sn.x, sn.z, 2.2); // the ledge pad itself
    });
  }

  buildWater() {
    const b = this.data.bounds;
    const cx = (b.minX + b.maxX) / 2;
    const cz = (b.minZ + b.maxZ) / 2;
    const base = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0x4384cc }));
    base.scale.set(b.maxX - b.minX + 60, 1, b.maxZ - b.minZ + 44);
    base.position.set(cx, -1.35, cz);
    this.scene.add(base);

    // Living sea: one 2x2 tile per open-water patch, turquoise shallows
    // hugging every coast and fading to deep blue offshore. Each tile keeps
    // a base color + phase so tick() can shimmer them cheaply.
    const deep = new THREE.Color(0x4384cc);
    const shallow = new THREE.Color(0x5fd6d2);
    const shoreDist = (tx, tz) => {
      for (let r = 1; r <= 5; r++) {
        for (let dx = -r; dx <= r; dx++) {
          for (let dz = -r; dz <= r; dz++) {
            if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
            if (this.groundH.has((tx + dx) + ',' + (tz + dz))) return r;
          }
        }
      }
      return 6;
    };
    this.waterTiles = []; // { x, z, color, phase, amp }
    for (let tx = Math.floor(b.minX) - 30; tx <= Math.ceil(b.maxX) + 30; tx += 2) {
      for (let tz = Math.floor(b.minZ) - 22; tz <= Math.ceil(b.maxZ) + 22; tz += 2) {
        if (this.groundH.has(tx + ',' + tz) && this.groundH.has((tx + 1) + ',' + tz) &&
            this.groundH.has(tx + ',' + (tz + 1)) && this.groundH.has((tx + 1) + ',' + (tz + 1))) {
          continue; // fully under land
        }
        const d = shoreDist(tx, tz);
        const color = shallow.clone().lerp(deep, Math.min(1, (d - 1) / 4.5));
        color.offsetHSL(0, 0, (hash2(tx, tz, 5) - 0.5) * 0.05);
        this.waterTiles.push({
          x: tx + 0.5, z: tz + 0.5, color,
          phase: hash2(tx, tz, 6) * Math.PI * 2,
          amp: d < 3 ? 0.09 : 0.05, // shallows shimmer a touch more
        });
      }
    }
    // The shimmer runs in the vertex shader (time uniform + per-instance
    // phase/amp attribute) so no instance buffer re-uploads per frame.
    const waterGeo = flatBoxGeo.clone();
    const phaseAmp = new Float32Array(this.waterTiles.length * 2);
    this.waterTiles.forEach((w, i) => {
      phaseAmp[i * 2] = w.phase;
      phaseAmp[i * 2 + 1] = w.amp;
    });
    waterGeo.setAttribute('waterPhaseAmp', new THREE.InstancedBufferAttribute(phaseAmp, 2));
    const waterMat = new THREE.MeshLambertMaterial();
    waterMat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = this.waterTime = { value: 0 };
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>',
          '#include <common>\nattribute vec2 waterPhaseAmp;\nuniform float uTime;')
        .replace('#include <color_vertex>', `#include <color_vertex>
          float waterK = 1.0 + sin(uTime * 1.3 + waterPhaseAmp.x
            + instanceMatrix[3][0] * 0.35 + instanceMatrix[3][2] * 0.21) * waterPhaseAmp.y;
          vColor.rgb *= waterK;`);
    };
    this.waterMesh = new THREE.InstancedMesh(waterGeo, waterMat, this.waterTiles.length);
    this.waterMesh.frustumCulled = false;
    this.waterDummy = new THREE.Object3D();
    this.waterTiles.forEach((w, i) => {
      this.waterDummy.position.set(w.x, -0.8, w.z);
      this.waterDummy.scale.set(2, 0.1, 2);
      this.waterDummy.updateMatrix();
      this.waterMesh.setMatrixAt(i, this.waterDummy.matrix);
      this.waterMesh.setColorAt(i, w.color);
    });
    this.waterMesh.instanceMatrix.needsUpdate = true;
    this.scene.add(this.waterMesh);

    // Foam: little white edge voxels in the water alongside every coast,
    // bobbing and breathing in tick().
    this.foam = [];
    const seen = new Set();
    for (const key of this.groundH.keys()) {
      const [gx, gz] = key.split(',').map(Number);
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const fx = gx + dx;
        const fz = gz + dz;
        const fkey = fx + ',' + fz;
        if (this.groundH.has(fkey) || seen.has(fkey)) continue;
        seen.add(fkey);
        if (this.foam.length >= 640) continue;
        this.foam.push({
          x: fx + (hash2(fx, fz, 7) - 0.5) * 0.5,
          z: fz + (hash2(fx, fz, 8) - 0.5) * 0.5,
          phase: hash2(fx, fz, 9) * Math.PI * 2,
          s: 0.12 + hash2(fx, fz, 10) * 0.16,
        });
      }
    }
    this.foamMesh = new THREE.InstancedMesh(
      flatBoxGeo, new THREE.MeshLambertMaterial({
        color: 0xf4fbff, transparent: true, opacity: 0.85,
      }), this.foam.length
    );
    this.foamMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.foamMesh.frustumCulled = false;
    this.lastFoamT = -1;
    this.scene.add(this.foamMesh);

    // Occasional sun-glints out on the open sea: bright pinpricks that
    // swell and vanish (unlit material so they read as sparkle).
    this.glints = [];
    const grand = mulberry32(6161);
    let guard = 0;
    while (this.glints.length < 36 && guard++ < 300) {
      const x = b.minX - 10 + grand() * (b.maxX - b.minX + 20);
      const z = b.minZ - 6 + grand() * (b.maxZ - b.minZ + 12);
      if (this.groundH.has(Math.round(x) + ',' + Math.round(z))) continue;
      this.glints.push({ x, z, phase: grand() * Math.PI * 2, speed: 0.5 + grand() * 0.8 });
    }
    this.glintMesh = new THREE.InstancedMesh(
      flatBoxGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }), this.glints.length
    );
    this.glintMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.glintMesh.frustumCulled = false;
    this.scene.add(this.glintMesh);
  }

  // Animated water: tile shimmer, coast foam bob, open-sea glints.
  // Tile shimmer runs on the GPU (see the water material's onBeforeCompile);
  // here we only tick its time uniform. Foam and glint matrices still upload,
  // so they refresh at ~20Hz — plenty for a slow bob.
  updateWater(t) {
    if (this.waterTime) this.waterTime.value = t;

    if (t - this.lastFoamT < 0.05) return;
    this.lastFoamT = t;

    const dummy = this.waterDummy;
    for (let i = 0; i < this.foam.length; i++) {
      const f = this.foam[i];
      const p = Math.sin(t * 1.6 + f.phase);
      dummy.position.set(f.x, -0.62 + p * 0.05, f.z);
      const s = f.s * (1 + p * 0.18);
      dummy.scale.set(s, 0.08, s);
      dummy.rotation.set(0, f.phase, 0);
      dummy.updateMatrix();
      this.foamMesh.setMatrixAt(i, dummy.matrix);
    }
    this.foamMesh.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < this.glints.length; i++) {
      const g = this.glints[i];
      const w = Math.max(0, Math.sin(t * g.speed + g.phase));
      const s = 0.0001 + w * w * w * 0.3;
      dummy.position.set(g.x, -0.58, g.z);
      dummy.scale.set(s, 0.06, s);
      dummy.rotation.set(0, t * 0.5 + g.phase, 0);
      dummy.updateMatrix();
      this.glintMesh.setMatrixAt(i, dummy.matrix);
    }
    this.glintMesh.instanceMatrix.needsUpdate = true;
  }

  buildTerrain() {
    this.groundMesh = new THREE.InstancedMesh(
      groundGeo, new THREE.MeshLambertMaterial({ vertexColors: true }), MAX_GROUND
    );
    this.groundMesh.frustumCulled = false;
    this.scene.add(this.groundMesh);
    this.groundMeta = []; // { region, color } per instance
    this.groundH = new Map(); // 'x,z' -> walk-surface height
    this.swampPools = []; // carved magenta-pool cells (region 3); buildProps fills them
    this.lavaPools = []; // carved lava-pool cells (region 5); buildProps fills them

    const dummy = new THREE.Object3D();
    const added = new Set();
    const cell = (cx, cz, tier, hex, region) => {
      const key = cx + ',' + cz;
      if (added.has(key) || this.groundMeta.length >= MAX_GROUND) return;
      added.add(key);
      this.groundH.set(key, tier);
      const h = 1.3 + tier;
      dummy.position.set(cx, tier - h / 2, cz);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      this.groundMesh.setMatrixAt(this.groundMeta.length, dummy.matrix);
      const color = new THREE.Color(hex);
      if (tier > 0) color.offsetHSL(0, 0, tier * 0.035); // terraces a touch lighter
      // Per-tile jitter breaks up the flat checker without losing the palette.
      color.offsetHSL(
        (hash2(cx, cz, 1) - 0.5) * 0.024,
        (hash2(cx, cz, 2) - 0.5) * 0.1,
        (hash2(cx, cz, 3) - 0.5) * 0.09
      );
      this.groundMeta.push({ region, color, cx, cz, tier });
    };

    WORLDS.forEach((w, wi) => {
      const p = PALETTES[wi];
      const top = wi === 3 ? [0x6e4059, 0x62384f] : p.top;
      const rz = wi * ROW_Z;
      const rand = mulberry32(wi * 53 + 11);

      for (let cx = -21; cx <= 21; cx++) {
        for (let dz = -5; dz <= 5; dz++) {
          const cz = rz + dz;
          const key = cx + ',' + cz;
          const onPath = this.flatCells.has(key);
          const ax = Math.abs(cx);
          const az = Math.abs(dz);
          // Soft irregular edges: solid core, then rings of maybe-cells.
          // Kept sparse in z so a real water channel stays between rows.
          let keep = ax <= 19 && az <= 3;
          if (!keep) {
            const roll = rand();
            if (ax <= 20 && az <= 3) keep = roll < 0.55;
            else if (ax === 21 && az <= 3) keep = roll < 0.15;
            else if (ax <= 19 && az === 4) keep = roll < 0.22;
          }
          if (this.keepCells.has(key)) keep = true;
          if (!keep) continue;
          // Purple Cabbage Swamp: pock the landmass with glowing magenta
          // pools, separate from the trail so route readability stays intact.
          if (wi === 3 && !onPath &&
              Math.sin(cx * 0.72 + 1.4) * Math.sin(cz * 0.94 - 0.6) < -0.64 &&
              hash2(cx, cz, 23) < 0.68) {
            this.swampPools.push({ x: cx, z: cz });
            continue;
          }
          // Pepper Volcano: pock the landmass with little lava pools — the
          // old floating-island carve throttled way down, plus a hash
          // knockout so the sine pattern doesn't visibly tile. buildProps()
          // drops a glowing slab into each hole.
          if (wi === 5 && !onPath &&
              Math.sin(cx * 0.9 + 2) * Math.sin(cz * 0.8) < -0.8 &&
              hash2(cx, cz, 7) < 0.6) {
            this.lavaPools.push({ x: cx, z: cz });
            continue;
          }
          // Gentle terraces away from the trail.
          let tier = 0;
          if (!onPath) {
            const n = Math.sin(cx * 0.55 + wi * 2) + Math.sin(cz * 0.75 + cx * 0.21);
            tier = n > 1.1 ? 1 : n > 0.35 ? 0.5 : 0;
          }
          cell(cx, cz, tier, top[(cx + cz) & 1], wi);
        }
      }

      // Secret ledge off the back edge.
      const sn = this.data.secretNodes[wi];
      const sx = Math.round(sn.x);
      const sz = Math.round(sn.z);
      for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
          if (Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
          cell(sx + dx, sz + dz, 0, top[(dx + dz) & 1], wi);
        }
      }

      // Sandy bridge to the next region (the walk path crosses it). Tinted
      // with the next region so it stays mysterious until that unlocks.
      if (wi < WORLDS.length - 1) {
        const side = wi % 2 === 0 ? 1 : -1;
        for (let bx = 12; bx <= 16; bx++) {
          for (let bz = 4; bz <= 5; bz++) {
            if ((bx === 12 || bx === 16) && rand() < 0.4) continue;
            cell(side * bx, rz + bz, 0, (bx + bz) & 1 ? 0xe8d69c : 0xdcc98e, wi + 1);
          }
        }
      }
    });

    // Tiny islands out in the water so the void feels alive.
    this.islands = [
      { x: -27, z: 4, palm: true }, { x: 27, z: 13, palm: false },
      { x: -26, z: 22, palm: false }, { x: 26, z: 31, palm: true },
    ];
    const irand = mulberry32(4242);
    for (const isl of this.islands) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          if (Math.abs(dx) + Math.abs(dz) === 2 && irand() < 0.5) continue;
          cell(isl.x + dx, isl.z + dz, 0, (dx + dz) & 1 ? 0xeed48e : 0xe5c97e, -1);
        }
      }
    }

    // The secret ledge / bridge cells above may have refilled a carved pool;
    // keep only the pools that stayed holes so no glow slab hides in ground.
    this.swampPools = this.swampPools.filter(
      (sp) => !this.groundH.has(sp.x + ',' + sp.z)
    );
    this.lavaPools = this.lavaPools.filter(
      (lp) => !this.groundH.has(lp.x + ',' + lp.z)
    );

    // Sand ring: shoreline cells blend toward beach sand so coasts read as
    // beaches instead of abrupt grass cliffs dropping into the sea. Pepper
    // Volcano coasts char toward dark basalt instead — black-sand shores
    // that also rim the carved lava pools. Swamp coasts use dark rust mud.
    const sand = new THREE.Color(0xecd79f);
    const charcoal = new THREE.Color(0x453530);
    const swampMud = new THREE.Color(0x7e3d26);
    for (const m of this.groundMeta) {
      if (m.tier > 0) continue;
      const coast =
        !this.groundH.has((m.cx + 1) + ',' + m.cz) ||
        !this.groundH.has((m.cx - 1) + ',' + m.cz) ||
        !this.groundH.has(m.cx + ',' + (m.cz + 1)) ||
        !this.groundH.has(m.cx + ',' + (m.cz - 1));
      if (coast) {
        m.color.lerp(m.region === 5 ? charcoal : m.region === 3 ? swampMud : sand,
          0.5 + hash2(m.cx, m.cz, 4) * 0.25);
      }
    }

    // Baked AO from terrace heights: cells hemmed in by taller neighbors
    // darken at the base of each step, open cells lighten a touch. Runs once
    // here; applyLockTints() just multiplies the stored colors.
    for (const m of this.groundMeta) {
      let higher = 0;
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const t = this.groundH.get((m.cx + dx) + ',' + (m.cz + dz));
        if (t !== undefined && t > m.tier) higher++;
      }
      m.color.multiplyScalar(higher ? Math.max(0.76, 1 - higher * 0.08) : 1.03);
    }

    this.groundMesh.count = this.groundMeta.length;
    this.groundMesh.instanceMatrix.needsUpdate = true;
  }

  buildProps() {
    this.decorMesh = new THREE.InstancedMesh(
      chamferVoxelGeo, new THREE.MeshLambertMaterial(), MAX_DECOR
    );
    this.decorMesh.frustumCulled = false;
    this.scene.add(this.decorMesh);
    this.decorMeta = [];
    this.glowMesh = new THREE.InstancedMesh(
      chamferVoxelGeo, new THREE.MeshLambertMaterial({ emissive: 0x2a2a55 }), MAX_GLOW
    );
    this.glowMesh.frustumCulled = false;
    this.scene.add(this.glowMesh);
    this.glowMeta = [];
    this.swampPoolMat = new THREE.MeshLambertMaterial({
      color: 0xffffff, emissive: 0xc516a8, emissiveIntensity: 0.5,
    });
    this.swampPoolMesh = new THREE.InstancedMesh(
      flatBoxGeo, this.swampPoolMat, MAX_POOL_GLOW
    );
    this.swampPoolMesh.frustumCulled = false;
    this.scene.add(this.swampPoolMesh);
    this.swampPoolMeta = [];
    this.pulseMats = [{ mat: this.swampPoolMat, region: 3 }];
    this.glowPulse = 0;
    this.voxDecor = [];
    this.voxBuildId = (this.voxBuildId || 0) + 1;
    const voxBuildId = this.voxBuildId;

    const dummy = new THREE.Object3D();
    const mkPut = (mesh, meta, cap) => (region) =>
      (x, y, z, sx, sy, sz, hex, ry = 0, rz = 0) => {
        if (meta.length >= cap) return;
        dummy.position.set(x, y, z);
        dummy.scale.set(sx, sy, sz);
        dummy.rotation.set(0, ry, rz);
        dummy.updateMatrix();
        mesh.setMatrixAt(meta.length, dummy.matrix);
        meta.push({ region, color: new THREE.Color(hex) });
      };
    const decorPut = mkPut(this.decorMesh, this.decorMeta, MAX_DECOR);
    const glowPut = mkPut(this.glowMesh, this.glowMeta, MAX_GLOW);
    const poolPut = mkPut(this.swampPoolMesh, this.swampPoolMeta, MAX_POOL_GLOW);

    // Small voxel prop builders (map coordinates, y = terrace top).
    const tree = (put, x, y, z, leaf1, leaf2) => {
      put(x, y + 0.6, z, 0.35, 1.2, 0.35, 0x7a4f2a);
      put(x, y + 1.65, z, 1.5, 1.1, 1.5, leaf1);
      put(x, y + 2.45, z, 0.9, 0.7, 0.9, leaf2);
    };
    const flower = (put, x, y, z, i) => {
      put(x, y + 0.22, z, 0.08, 0.45, 0.08, 0x3f9e3a);
      put(x, y + 0.5, z, 0.22, 0.22, 0.22, FLOWER_COLORS[i & 3]);
    };
    const palm = (put, x, y, z) => {
      put(x, y + 0.9, z, 0.28, 1.8, 0.28, 0x8d5a2b);
      put(x, y + 1.85, z, 1.9, 0.22, 0.5, 0x3f9e3a, 0, 0.5);
      put(x, y + 1.85, z, 1.9, 0.22, 0.5, 0x4cb545, 0, -0.6);
      put(x, y + 2.0, z, 0.5, 0.22, 1.9, 0x3f9e3a);
    };
    const rock = (put, x, y, z, hex) => {
      put(x, y + 0.3, z, 1.1, 0.7, 0.9, hex, 0.4);
      put(x + 0.4, y + 0.55, z + 0.2, 0.6, 0.5, 0.55, hex, 0.9);
    };
    const cabbage = (put, x, y, z, rand, i) => {
      const a = rand() * Math.PI * 2;
      const outer = i & 1 ? 0x7d3f8f : 0x9c5bb0;
      const inner = i & 1 ? 0x9c5bb0 : 0x7d3f8f;
      put(x, y + 0.18, z, 0.95, 0.28, 0.55, outer, a, 0.12);
      put(x, y + 0.2, z, 0.55, 0.3, 0.95, outer, a + Math.PI / 2, -0.12);
      put(x, y + 0.44, z, 0.62, 0.45, 0.62, inner, a);
      put(x, y + 0.68, z, 0.18, 0.09, 0.76, 0xd9c2e8, a + 0.2);
      put(x, y + 0.68, z, 0.76, 0.09, 0.18, 0xd9c2e8, a - 0.15);
    };
    const reeds = (put, x, y, z, rand) => {
      for (let k = 0; k < 4; k++) {
        const a = rand() * Math.PI * 2;
        const r = 0.12 + rand() * 0.35;
        put(x + Math.cos(a) * r, y + 0.38 + rand() * 0.16, z + Math.sin(a) * r,
          0.07, 0.74 + rand() * 0.32, 0.07, k & 1 ? 0x3f9e8a : 0x5cae7d, a, (rand() - 0.5) * 0.28);
      }
      put(x, y + 0.12, z, 0.7, 0.16, 0.5, 0x7e3d26, rand() * Math.PI);
    };
    const swampPalm = (put, x, y, z, rand) => {
      const lean = (rand() - 0.5) * 0.34;
      put(x, y + 0.72, z, 0.24, 1.45, 0.24, 0xd96a54, rand() * 0.2, lean);
      put(x + Math.sin(lean) * 0.22, y + 1.55, z, 0.2, 0.9, 0.2, 0xa85332, 0, lean * 0.6);
      const cx = x + Math.sin(lean) * 0.36;
      const cy = y + 2.1;
      for (let k = 0; k < 4; k++) {
        const a = k * Math.PI / 2 + rand() * 0.28;
        put(cx + Math.cos(a) * 0.55, cy - 0.08, z + Math.sin(a) * 0.55,
          1.35, 0.18, 0.34, k & 1 ? 0x3f9e8a : 0x55b39d, a, -0.24 - rand() * 0.18);
      }
    };

    // Picks prop spots on existing ground, off the trail, min 2 apart.
    const spots = (wi, count, rand) => {
      const out = [];
      let guard = 0;
      while (out.length < count && guard++ < 250) {
        const x = Math.round(-19 + rand() * 38);
        const z = Math.round(wi * ROW_Z - 3 + rand() * 6);
        const key = x + ',' + z;
        if (!this.groundH.has(key) || this.flatCells.has(key)) continue;
        if (out.some((s) => Math.abs(s.x - x) < 2 && Math.abs(s.z - z) < 2)) continue;
        out.push({ x, z, y: this.groundH.get(key) });
      }
      return out;
    };

    const emitters = [
      (put, s, rand, i) => { // Pasta Plains: meatball trees, marinara pond, tomatoes
        if (i < 5) { // spaghetti tree: noodle trunk, meatball top, marinara splat
          put(s.x, s.y + 0.6, s.z, 0.3, 1.2, 0.3, 0xf5d778);
          put(s.x, s.y + 1.6, s.z, 1.4, 1.0, 1.4, 0x8a4b2d);
          put(s.x, s.y + 2.3, s.z, 0.8, 0.4, 0.8, 0xd2422a);
        } else if (i === 5) { // marinara pond with a parmesan boulder
          put(s.x, s.y + 0.04, s.z, 2.6, 0.1, 1.9, 0xd2422a);
          put(s.x + 1.5, s.y + 0.15, s.z + 0.8, 0.5, 0.3, 0.5, 0xfff2cc);
        } else if (i & 1) { // cherry tomato on a stem
          put(s.x, s.y + 0.22, s.z, 0.08, 0.45, 0.08, 0x3f9e3a);
          put(s.x, s.y + 0.52, s.z, 0.26, 0.26, 0.26, 0xe23b2e);
        } else { // farfalle bow-tie
          put(s.x - 0.16, s.y + 0.16, s.z, 0.26, 0.3, 0.2, 0xf0c060, 0, 0.5);
          put(s.x + 0.16, s.y + 0.16, s.z, 0.26, 0.3, 0.2, 0xf0c060, 0, -0.5);
          put(s.x, s.y + 0.16, s.z, 0.12, 0.2, 0.22, 0xe2ad4d);
        }
      },
      (put, s, rand, i) => { // Waffle Desert: waffle stacks, syrup dunes, a strawberry
        if (i < 5) { // waffle stack with a butter pat
          put(s.x, s.y + 0.25, s.z, 1.5, 0.45, 1.5, 0xcf8c3c, rand() * 0.4);
          put(s.x + 0.1, s.y + 0.65, s.z, 1.4, 0.4, 1.4, 0xdd9c4a);
          put(s.x, s.y + 1.0, s.z, 0.5, 0.28, 0.5, 0xffe36a);
        } else if (i < 10) { // syrup-drizzled dune
          put(s.x, s.y + 0.25, s.z, 2.6, 0.6, 1.8, 0xe0a850, rand() * 0.6);
          put(s.x + 0.5, s.y + 0.55, s.z + 0.2, 1.2, 0.25, 0.9, 0x8a4a1a);
        } else if (i === 10) { // one giant strawberry landmark
          put(s.x, s.y + 0.55, s.z, 1.1, 1.1, 1.1, 0xe23b2e);
          put(s.x, s.y + 1.2, s.z, 0.7, 0.3, 0.7, 0x3f9e3a);
          put(s.x + 0.2, s.y + 1.45, s.z, 0.14, 0.3, 0.14, 0x3f9e3a);
        } else rock(put, s.x, s.y, s.z, 0x5a3520); // chocolate chunk
      },
      (put, s, rand, i) => { // Snowy Peaks: snowy trees, snowman, ice
        if (i < 5) {
          put(s.x, s.y + 0.55, s.z, 0.32, 1.1, 0.32, 0x6b4a2a);
          put(s.x, s.y + 1.55, s.z, 1.4, 1.0, 1.4, 0x2e7d4f);
          put(s.x, s.y + 2.25, s.z, 1.5, 0.4, 1.5, 0xf4f8fc);
        } else if (i === 5) {
          put(s.x, s.y + 0.45, s.z, 0.9, 0.9, 0.9, 0xffffff);
          put(s.x, s.y + 1.2, s.z, 0.65, 0.65, 0.65, 0xf4f8fc);
          put(s.x, s.y + 1.75, s.z, 0.45, 0.45, 0.45, 0xffffff);
          put(s.x, s.y + 1.75, s.z + 0.3, 0.1, 0.1, 0.25, 0xff8c42);
        } else if (i < 10) {
          put(s.x, s.y + 0.03, s.z, 1.9, 0.08, 1.5, 0xcfe8ff, rand());
        } else rock(put, s.x, s.y, s.z, 0xaac2d6);
      },
      (put, s, rand, i, glow) => { // Purple Cabbage Swamp: cabbages, reeds, palms
        if (i < 5) {
          cabbage(put, s.x, s.y, s.z, rand, i);
          if (i < 2) {
            glow(s.x + 0.28, s.y + 0.34, s.z - 0.18,
              0.18, 0.08, 0.18, 0xe93fc8, rand() * Math.PI);
          }
        } else if (i < 9) {
          reeds(put, s.x, s.y, s.z, rand);
        } else if (i < 12) {
          swampPalm(put, s.x, s.y, s.z, rand);
        } else {
          rock(put, s.x, s.y, s.z, i & 1 ? 0xa85332 : 0x7e3d26);
        }
      },
      (put, s, rand, i, glow) => { // Crystal Caves: arches, crystals, mushrooms
        if (i < 3) {
          put(s.x - 0.9, s.y + 0.8, s.z, 0.6, 1.6, 0.6, 0x54545f);
          put(s.x + 0.9, s.y + 0.8, s.z, 0.6, 1.6, 0.6, 0x5e5e6c);
          put(s.x, s.y + 1.75, s.z, 2.6, 0.55, 0.7, 0x54545f);
        } else if (i < 9) {
          const cols = [0x7ef0ff, 0xd07eff, 0xff8ad8];
          for (let k = 0; k < 3; k++) {
            glow(s.x + (k - 1) * 0.5, s.y + 0.7 + rand() * 0.4, s.z,
              0.32, 1.2 + rand() * 0.9, 0.32, cols[(i + k) % 3], 0, (k - 1) * 0.28);
          }
          put(s.x, s.y + 0.12, s.z, 1.5, 0.35, 1.5, 0x4a4a58);
        } else {
          put(s.x, s.y + 0.25, s.z, 0.18, 0.5, 0.18, 0xd8d0c0);
          put(s.x, s.y + 0.58, s.z, 0.6, 0.28, 0.6, 0xef5350);
        }
      },
      (put, s, rand, i, glow) => { // Pepper Volcano: cones, chili plants, embers
        if (i < 3) { // mini stepped cinder cone with a molten glow on top
          put(s.x, s.y + 0.35, s.z, 1.9, 0.7, 1.9, 0x4a3a34, rand() * 0.5);
          put(s.x, s.y + 0.95, s.z, 1.3, 0.55, 1.3, 0x5c4438);
          put(s.x, s.y + 1.42, s.z, 0.8, 0.45, 0.8, 0x3a2d28);
          glow(s.x, s.y + 1.7, s.z, 0.5, 0.16, 0.5, 0xff9a3c);
        } else if (i < 9) { // chili plant: leafy bush hung with bright peppers
          put(s.x, s.y + 0.32, s.z, 0.95, 0.6, 0.95, 0x3f9e3a, rand() * 0.6);
          put(s.x, s.y + 0.72, s.z, 0.6, 0.4, 0.6, 0x4cb545);
          const pep = [0xe23b2e, 0xff8c42, 0xffd93d];
          for (let k = 0; k < 3; k++) {
            const a = (i + k) * 2.1;
            put(s.x + Math.cos(a) * 0.42, s.y + 0.38 + (k & 1) * 0.28,
              s.z + Math.sin(a) * 0.42, 0.18, 0.3, 0.18, pep[(i + k) % 3], a);
          }
        } else { // ember rock: dark basalt boulder with a glowing crack
          rock(put, s.x, s.y, s.z, 0x3c332e);
          glow(s.x + 0.15, s.y + 0.52, s.z + 0.1, 0.16, 0.12, 0.34, 0xff7031, 0.7);
        }
      },
    ];
    const counts = [14, 14, 13, 13, 13, 12];
    WORLDS.forEach((w, wi) => {
      const rand = mulberry32(wi * 131 + 17);
      const put = decorPut(wi);
      const glow = glowPut(wi);
      spots(wi, counts[wi], rand).forEach((s, i) => emitters[wi](put, s, rand, i, glow));
    });

    { // Purple Cabbage Swamp extras: magenta pools, giant cabbages, bubbles.
      const poolGlow = poolPut(3);
      const rz = 3 * ROW_Z;

      // Glowing slabs sit in the carved swamp-pool holes, matching the
      // volcano lava slab treatment but with the swamp's magenta material.
      for (const sp of this.swampPools) {
        poolGlow(sp.x, -0.45, sp.z, 1.08, 0.12, 1.08,
          hash2(sp.x, sp.z, 31) < 0.5 ? 0xc516a8 : 0xe93fc8,
          hash2(sp.x, sp.z, 32) * 0.35);
      }

      // 1-2 bubble streams rise from the largest-looking carved pools.
      this.swampBubbles = [];
      const poolKeys = new Set(this.swampPools.map((sp) => sp.x + ',' + sp.z));
      const bubbleSources = this.swampPools.map((sp) => {
        let score = hash2(sp.x, sp.z, 33);
        for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          if (poolKeys.has((sp.x + dx) + ',' + (sp.z + dz))) score += 1;
        }
        return { x: sp.x, z: sp.z, score };
      }).sort((a, b) => b.score - a.score).slice(0, Math.min(2, this.swampPools.length));
      const brand = mulberry32(33303);
      bubbleSources.forEach((src, si) => {
        for (let k = 0; k < 5; k++) {
          const mat = new THREE.MeshLambertMaterial({
            color: 0xf1b7ea, emissive: 0xc516a8, emissiveIntensity: 0.35,
            transparent: true, opacity: 0, depthWrite: false,
          });
          const m = new THREE.Mesh(bubbleGeo, mat);
          this.scene.add(m);
          this.swampBubbles.push({
            mesh: m,
            x: src.x + (brand() - 0.5) * 0.35,
            z: src.z + (brand() - 0.5) * 0.35,
            base: -0.38,
            height: 1.55 + brand() * 0.5,
            size: 0.13 + brand() * 0.08,
            phase: (si * 0.43 + k / 5 + brand() * 0.08) % 1,
          });
        }
      });

      // Giant cabbage landmarks (public/models/giant-cabbage.json) anchor the
      // row. Leaf materials are tinted synchronously; meshes attach later.
      const crand = mulberry32(36303);
      const cabbageSpots = spots(3, 2, crand);
      for (const [x, z] of [[-12, rz - 2], [11, rz + 2]]) {
        const y = this.groundH.get(x + ',' + z);
        if (cabbageSpots.length >= 2 || y === undefined || this.flatCells.has(x + ',' + z)) {
          continue;
        }
        if (!cabbageSpots.some((s) => Math.abs(s.x - x) < 2 && Math.abs(s.z - z) < 2)) {
          cabbageSpots.push({ x, z, y });
        }
      }
      const cabbageTints = [0x7d3f8f, 0x9c5bb0];
      const giantCabbage = (s, i) => {
        const g = new THREE.Group();
        g.position.set(s.x, s.y, s.z);
        g.rotation.y = crand() * Math.PI * 2;
        g.scale.setScalar(0.74 + crand() * 0.18);
        this.scene.add(g);
        const leafMat = new THREE.MeshLambertMaterial({
          color: cabbageTints[i % cabbageTints.length], vertexColors: true,
        });
        leafMat.userData.lockBaseColor = leafMat.color.clone();
        const entry = { region: 3, mats: [] };
        this.voxDecor.push(entry);
        loadVoxModel(`${import.meta.env.BASE_URL}models/giant-cabbage.json`)
          .then((model) => {
            if (voxBuildId !== this.voxBuildId) return;
            const { group, parts } = buildVoxMesh(model, { materials: { leaf: leafMat } });
            g.add(group);
            for (const name in parts) entry.mats.push(parts[name].material);
            this.applyLockTints(); // re-tint now that the materials exist
          })
          .catch((err) => console.error('giant-cabbage model failed to load:', err));
      };
      cabbageSpots.forEach((s, i) => giantCabbage(s, i));
    }

    { // Pepper Volcano extras: baked volcano landmarks, crater smoke, embers.
      const glow = glowPut(5);
      const rz = 5 * ROW_Z;

      // Glowing slabs float in the lava-pool holes buildTerrain() carved,
      // just above the sea line so the melt reads as pooled lava, not water.
      for (const lp of this.lavaPools) {
        glow(lp.x, -0.45, lp.z, 1.06, 0.12, 1.06,
          hash2(lp.x, lp.z, 9) < 0.5 ? 0xff8c2e : 0xffa63d,
          hash2(lp.x, lp.z, 10) * 0.3);
      }

      // Two baked pepper-volcano models (public/models/pepper-volcano.json,
      // bottom-center anchor, ~5.8 units tall at scale 1) anchor the region.
      // Groups position synchronously and the meshes attach when the fetch
      // lands (same pattern as makeCritter in game.js); the molten `lava`
      // part gets its own emissive material so the crater glows. Lock tints
      // reach these through this.voxDecor (see applyLockTints).
      const pepperLavaMat = new THREE.MeshLambertMaterial({
        vertexColors: true, emissive: 0xff7a1e, emissiveIntensity: 0.5,
      });
      this.pulseMats.push({ mat: pepperLavaMat, region: 5 });
      const volcano = (x, z, scale) => {
        const g = new THREE.Group();
        g.position.set(x, this.groundH.get(x + ',' + z) ?? 0, z);
        g.scale.setScalar(scale);
        this.scene.add(g);
        const entry = { region: 5, mats: [] };
        this.voxDecor.push(entry);
        loadVoxModel(`${import.meta.env.BASE_URL}models/pepper-volcano.json`)
          .then((model) => {
            if (voxBuildId !== this.voxBuildId) return;
            const { group, parts } = buildVoxMesh(model, { materials: { lava: pepperLavaMat } });
            g.add(group);
            for (const name in parts) entry.mats.push(parts[name].material);
            this.applyLockTints(); // re-tint now that the materials exist
          })
          .catch((err) => console.error('pepper-volcano model failed to load:', err));
        return g;
      };
      const big = volcano(-9, rz - 3, 0.62); // landmark where the rainbow stood
      volcano(12, rz - 2, 0.4); // little sibling down the row

      // 4 smoke puffs cycle up out of the big crater — same drift idea as
      // the sky clouds, but rising and thinning instead of scrolling.
      // tick() advances them via this.volcanoSmoke.
      this.volcanoSmoke = [];
      for (let k = 0; k < 4; k++) {
        const m = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({
          color: 0x9a938e, emissive: 0x6e6862, emissiveIntensity: 0.3,
          transparent: true, opacity: 0,
        }));
        m.rotation.y = k * 0.7;
        this.scene.add(m);
        this.volcanoSmoke.push({
          mesh: m, phase: k / 4,
          x: big.position.x, z: big.position.z,
          lip: big.position.y + 5.8 * 0.62 - 0.4, // just inside the crater rim
        });
      }

      // A few ember motes glowing among the basalt around the big volcano.
      const erand = mulberry32(4747);
      for (let k = 0; k < 4; k++) {
        const a = erand() * Math.PI * 2;
        const ex = Math.round(big.position.x + Math.cos(a) * (2.5 + erand() * 2));
        const ez = Math.round(big.position.z + Math.sin(a) * (1.5 + erand() * 2));
        const ey = this.groundH.get(ex + ',' + ez);
        if (ey === undefined) continue; // fell in the sea or a lava pool
        glow(ex, ey + 0.1, ez, 0.16, 0.12, 0.16,
          k & 1 ? 0xffb347 : 0xff7031, a);
      }
    }

    // Island props + white wave dashes on the open water.
    const iput = decorPut(-1);
    for (const isl of this.islands) {
      if (isl.palm) palm(iput, isl.x, 0, isl.z);
      else rock(iput, isl.x, 0, isl.z, 0x9c9c8a);
      // Seashells + a pink starfish dotted around each island beach.
      for (let k = 0; k < 3; k++) {
        const a = hash2(isl.x, isl.z, 20 + k) * Math.PI * 2;
        const sx = isl.x + Math.cos(a) * 1.1;
        const sz = isl.z + Math.sin(a) * 1.1;
        if (k === 2) iput(sx, 0.07, sz, 0.32, 0.1, 0.32, 0xff9ff3, a);
        else iput(sx, 0.08, sz, 0.22, 0.12, 0.3, 0xfdf5e6, a);
      }
    }
    const wrand = mulberry32(31337);
    for (let k = 0; k < 42; k++) {
      const x = -34 + wrand() * 68;
      const z = -8 + wrand() * 56;
      const len = 0.9 + wrand() * 0.6;
      const ry = wrand() * 0.4 - 0.2;
      if (this.groundH.has(Math.round(x) + ',' + Math.round(z))) continue;
      iput(x, -0.72, z, len, 0.06, 0.16, 0xeaf6ff, ry);
    }

    this.decorMesh.count = this.decorMeta.length;
    this.glowMesh.count = this.glowMeta.length;
    this.swampPoolMesh.count = this.swampPoolMeta.length;
    this.decorMesh.instanceMatrix.needsUpdate = true;
    this.glowMesh.instanceMatrix.needsUpdate = true;
    this.swampPoolMesh.instanceMatrix.needsUpdate = true;
  }

  // Ambient sea life: ducks paddling little laps off the coasts, plus a
  // fish that hops out of the water now and then. Animated in tick().
  buildCritters() {
    const mkDuck = () => {
      const g = new THREE.Group();
      const body = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xfff3b0 }));
      body.scale.set(0.62, 0.34, 0.4);
      body.position.y = 0.05;
      const head = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xffe066 }));
      head.scale.setScalar(0.26);
      head.position.set(0.3, 0.33, 0);
      const beak = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xff8c42 }));
      beak.scale.set(0.16, 0.08, 0.12);
      beak.position.set(0.47, 0.3, 0);
      g.add(body, head, beak);
      return g;
    };
    // Open sea is guaranteed past |x| = 22 (away from the little islands).
    this.ducks = [];
    for (const d of [{ x: -24.5, z: 2.5, r: 1.4 }, { x: 24, z: 21, r: 1.1 }]) {
      if (this.groundH.has(Math.round(d.x) + ',' + Math.round(d.z))) continue;
      const mesh = mkDuck();
      this.scene.add(mesh);
      this.ducks.push({ mesh, ...d, phase: d.x * 0.7 });
    }
    this.fish = new THREE.Group();
    const fb = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xff8c42 }));
    fb.scale.set(0.5, 0.26, 0.16);
    const ft = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xffd54a }));
    ft.scale.set(0.16, 0.22, 0.1);
    ft.position.x = -0.32;
    this.fish.add(fb, ft);
    this.fish.visible = false;
    this.fishHome = { x: -24, z: 30 };
    this.scene.add(this.fish);
  }

  updateCritters(t) {
    for (const d of this.ducks) {
      const a = t * 0.35 + d.phase;
      d.mesh.position.set(
        d.x + Math.cos(a) * d.r,
        -0.52 + Math.sin(t * 1.7 + d.phase) * 0.05,
        d.z + Math.sin(a) * d.r
      );
      d.mesh.rotation.y = -a; // face along the paddle circle
      d.mesh.rotation.z = Math.sin(t * 2.2 + d.phase) * 0.06;
    }
    const cyc = (t * 0.22 + 0.3) % 1; // a hop roughly every 4.5s
    if (cyc < 0.28) {
      const u = cyc / 0.28;
      this.fish.visible = true;
      this.fish.position.set(
        this.fishHome.x + u * 2.4 - 1.2,
        -0.7 + Math.sin(u * Math.PI) * 1.3,
        this.fishHome.z
      );
      this.fish.rotation.z = (0.5 - u) * 1.8;
    } else {
      this.fish.visible = false;
    }
  }

  // Big voxel "?" floating over each still-locked region.
  buildSigns() {
    const rows = ['01110', '10001', '00001', '00110', '00100', '00000', '00100'];
    this.signMesh = new THREE.InstancedMesh(
      chamferVoxelGeo,
      new THREE.MeshLambertMaterial({ color: 0xffe066, emissive: 0x5a4200 }),
      100
    );
    this.signMesh.frustumCulled = false;
    this.scene.add(this.signMesh);
    this.signMeta = []; // { region, matrix }
    const dummy = new THREE.Object3D();
    WORLDS.forEach((w, wi) => {
      if (wi === 0) return; // first region starts unlocked
      const s = 0.5;
      rows.forEach((row, r) => {
        for (let c = 0; c < 5; c++) {
          if (row[c] !== '1') continue;
          dummy.position.set(
            (c - 2) * s, 2.6 + (rows.length - 1 - r) * s, wi * ROW_Z - 2.2
          );
          dummy.scale.setScalar(s * 0.92);
          dummy.rotation.set(0, 0, 0);
          dummy.updateMatrix();
          this.signMeta.push({ region: wi, matrix: dummy.matrix.clone() });
        }
      });
    });
    this.signMesh.count = this.signMeta.length;
  }

  buildSkyClouds() {
    // Puffy layered voxel clouds drifting high above the diorama: solid
    // white tops over a slightly shaded flat underside (no shadow maps, so
    // they cast nothing).
    this.mapClouds = [];
    const topMat = new THREE.MeshLambertMaterial({
      color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5,
      transparent: true, opacity: 0.92,
    });
    const underMat = new THREE.MeshLambertMaterial({
      color: 0xd9e6f4, emissive: 0xd9e6f4, emissiveIntensity: 0.35,
      transparent: true, opacity: 0.92,
    });
    const rand = mulberry32(909);
    for (let i = 0; i < 5; i++) {
      const gp = new THREE.Group();
      const puffs = 4 + Math.floor(rand() * 3);
      for (let j = 0; j < puffs; j++) {
        const m = new THREE.Mesh(boxGeo, topMat);
        const mid = 1 - Math.abs(j - (puffs - 1) / 2) / puffs; // taller center
        m.scale.set(1.3 + rand() * 1.6, 0.7 + mid * 1.1 + rand() * 0.4, 1.2 + rand() * 1.1);
        m.position.set(
          (j - (puffs - 1) / 2) * 1.2 + (rand() - 0.5) * 0.5,
          m.scale.y * 0.35 + rand() * 0.2,
          (rand() - 0.5) * 1.6
        );
        gp.add(m);
      }
      const under = new THREE.Mesh(boxGeo, underMat);
      under.scale.set(puffs * 1.2 + 0.8, 0.45, 2.4);
      under.position.y = -0.15;
      gp.add(under);
      gp.scale.setScalar(0.6 + rand() * 0.2);
      gp.position.set(-30 + rand() * 60, 12 + rand() * 3, rand() * 38);
      gp.userData.drift = 0.4 + rand() * 0.5;
      this.scene.add(gp);
      this.mapClouds.push(gp);
    }
  }

  buildTiles() {
    this.tileMesh = new THREE.InstancedMesh(
      chamferVoxelGeo, new THREE.MeshLambertMaterial({ color: 0xf3d894 }), MAX_TILES
    );
    this.tileMesh.frustumCulled = false;
    this.scene.add(this.tileMesh);
    this.tiles = []; // { x, z, shown }  index-aligned with instances
    this.segTiles = [null]; // per segment: { start, count }
    for (let i = 1; i < this.data.segments.length; i++) {
      const pts = this.data.segments[i];
      this.segTiles.push({ start: this.tiles.length, count: pts.length });
      for (const pt of pts) this.tiles.push({ x: pt.x, z: pt.z, shown: false, pop: 0 });
    }

    this.secretTileMesh = new THREE.InstancedMesh(
      chamferVoxelGeo,
      new THREE.MeshLambertMaterial({ color: 0xc77df0, emissive: 0x2c0f45 }),
      MAX_SECRET_TILES
    );
    this.secretTileMesh.frustumCulled = false;
    this.scene.add(this.secretTileMesh);
    this.secretTiles = [];
    this.secretSegs = {}; // world -> { start, count }
  }

  ensureSecretTiles(world) {
    if (this.secretSegs[world]) return this.secretSegs[world];
    const anchor = store.keyAnchorLevel(world);
    const from = this.data.nodes.find(
      (nd) => nd.world === world && nd.level === (anchor === null ? 1 : anchor)
    ) || this.data.nodes.find((nd) => nd.world === world);
    const pts = secretSegment(from, this.data.secretNodes[world]);
    const seg = { start: this.secretTiles.length, count: pts.length };
    for (const pt of pts) this.secretTiles.push({ x: pt.x, z: pt.z, shown: false, pop: 0 });
    this.secretSegs[world] = seg;
    return seg;
  }

  buildNodes() {
    // Max 3 small gold stars in a flat arc BEHIND the node (-z), bobbing
    // and spinning individually in tick().
    const mkStars = () => {
      const g = new THREE.Group();
      const mat = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 });
      for (let i = 0; i < 3; i++) {
        const s = new THREE.Mesh(boxGeo, mat);
        s.scale.setScalar(0.26);
        const a = (i - 1) * 0.6;
        s.position.set(Math.sin(a) * 1.15, 0.62, -Math.cos(a) * 1.15);
        s.rotation.z = Math.PI / 4;
        g.add(s);
      }
      return g;
    };
    const mkNode = (nd, secret) => {
      const g = new THREE.Group();
      g.position.set(nd.x, 0, nd.z);
      const plate = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xfff3cf }));
      plate.scale.set(1.7, 0.25, 1.7);
      plate.position.y = 0.13;
      // Flat pad (the token stands on it) rather than a cube.
      const dotMat = new THREE.MeshLambertMaterial({ color: 0xe53935 });
      const dot = new THREE.Mesh(boxGeo, dotMat);
      dot.scale.set(1.15, 0.3, 1.15);
      dot.position.y = 0.4;
      const ring = new THREE.Mesh(
        boxGeo, new THREE.MeshLambertMaterial({ color: 0xfff176, emissive: 0x554400 })
      );
      ring.scale.set(2.2, 0.12, 2.2);
      ring.position.y = 0.05;
      ring.visible = false;
      // Always-on warm rim under the plate so every node pops off the grass.
      const rim = new THREE.Mesh(
        boxGeo,
        new THREE.MeshLambertMaterial({ color: 0xffe9a8, emissive: 0x2a2010 })
      );
      rim.scale.set(2.02, 0.1, 2.02);
      rim.position.y = 0.03;
      const stars = mkStars();
      g.add(plate, dot, ring, rim, stars);

      let crystals = null;
      if (secret) { // purple crystal cluster
        crystals = new THREE.Group();
        const cmat = new THREE.MeshLambertMaterial({ color: 0xc77df0, emissive: 0x4a1a70 });
        const cmat2 = new THREE.MeshLambertMaterial({ color: 0xe3b3ff, emissive: 0x37135c });
        const defs = [
          [0, 0.9, 0, 0.34, 1.5, 0],
          [-0.42, 0.7, 0.18, 0.26, 1.0, -0.3],
          [0.44, 0.65, -0.12, 0.24, 0.9, 0.34],
          [0.1, 0.5, 0.4, 0.18, 0.6, 0.12],
        ];
        defs.forEach(([x, y, z, sxz, sy, rz], k) => {
          const m = new THREE.Mesh(boxGeo, k % 2 ? cmat2 : cmat);
          m.scale.set(sxz, sy, sxz);
          m.position.set(x, y, z);
          m.rotation.set(0, k * 0.7, rz);
          crystals.add(m);
        });
        g.add(crystals);
      }

      let castleFlag = null;
      let crown = null;
      let bossHead = null;
      if (!secret && nd.isWorldFinal) { // castle = the world's boss gate
        const c = new THREE.Group();
        const wallMat = new THREE.MeshLambertMaterial({ color: 0xc9b8a2 });
        const roofMat = new THREE.MeshLambertMaterial({ color: 0xd45757 });
        const base = new THREE.Mesh(boxGeo, wallMat);
        base.scale.set(1.7, 1.2, 1.5);
        base.position.y = 0.6;
        const keep = new THREE.Mesh(boxGeo, wallMat);
        keep.scale.set(1.0, 0.8, 0.9);
        keep.position.y = 1.5;
        c.add(base, keep);
        for (const [sx, sz] of [[-0.8, -0.7], [0.8, -0.7], [-0.8, 0.7], [0.8, 0.7]]) {
          const tower = new THREE.Mesh(boxGeo, wallMat);
          tower.scale.set(0.45, 1.9, 0.45);
          tower.position.set(sx, 0.95, sz);
          const roof = new THREE.Mesh(boxGeo, roofMat);
          roof.scale.set(0.6, 0.4, 0.6);
          roof.position.set(sx, 2.05, sz);
          c.add(tower, roof);
        }
        // Flag + crown appear once the boss is beaten...
        const pole = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xe0e0e0 }));
        pole.scale.set(0.06, 0.9, 0.06);
        pole.position.set(0, 2.3, 0);
        castleFlag = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xffd54a }));
        castleFlag.scale.set(0.5, 0.3, 0.05);
        castleFlag.position.set(0.28, 2.55, 0);
        const gold = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 });
        crown = new THREE.Group();
        const cb = new THREE.Mesh(boxGeo, gold);
        cb.scale.set(0.6, 0.22, 0.6);
        crown.add(cb);
        for (const sx of [-0.2, 0, 0.2]) {
          const spike = new THREE.Mesh(boxGeo, gold);
          spike.scale.set(0.13, 0.24, 0.13);
          spike.position.set(sx, 0.22, 0);
          crown.add(spike);
        }
        crown.position.set(0, 2.0, 0);
        // ...while the boss's face floats over the keep until then.
        bossHead = new THREE.Group();
        const bm = new THREE.MeshLambertMaterial({ color: BOSSES[nd.world].color });
        const head = new THREE.Mesh(boxGeo, bm);
        head.scale.set(0.95, 0.8, 0.85);
        bossHead.add(head);
        const white = new THREE.MeshLambertMaterial({ color: 0xffffff });
        const dark = new THREE.MeshLambertMaterial({ color: 0x222222 });
        for (const sx of [-0.22, 0.22]) {
          const eye = new THREE.Mesh(boxGeo, white);
          eye.scale.setScalar(0.22);
          eye.position.set(sx, 0.08, 0.44);
          const pupil = new THREE.Mesh(boxGeo, dark);
          pupil.scale.setScalar(0.1);
          pupil.position.set(sx, 0.06, 0.55);
          bossHead.add(eye, pupil);
        }
        const smile = new THREE.Mesh(boxGeo, dark);
        smile.scale.set(0.32, 0.08, 0.06);
        smile.position.set(0, -0.22, 0.44);
        bossHead.add(smile);
        bossHead.position.set(0, 3.3, 0);
        c.add(pole, castleFlag, crown, bossHead);
        c.position.set(0, 0, -1.7);
        g.add(c);
      }

      // Fat invisible touch target for raycasting.
      const hit = new THREE.Mesh(boxGeo, new THREE.MeshBasicMaterial({ visible: false }));
      hit.scale.set(3, 3, 3);
      hit.position.y = 1;
      g.add(hit);

      this.scene.add(g);
      return {
        group: g, dot, dotMat, ring, stars, crystals, hit,
        castleFlag, crown, bossHead, baseY: 0,
      };
    };

    this.nodeViews = this.data.nodes.map((nd) => mkNode(nd, false));
    this.secretViews = this.data.secretNodes.map((nd) => mkNode(nd, true));
  }

  // The player's house: a mini version of the house-scene building standing
  // in its own yard on the starting row. Tapping it opens the house screen.
  buildHouse() {
    const g = new THREE.Group();
    g.position.set(HOUSE_POS.x, 0, HOUSE_POS.z);

    const wallMat = new THREE.MeshLambertMaterial({ color: 0xf3e2c0 });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0xd45757 });
    const base = new THREE.Mesh(boxGeo, wallMat);
    base.scale.set(2.6, 1.5, 2.2);
    base.position.y = 0.75;
    // Gable roof from two leaning slabs + ridge cap.
    const slabL = new THREE.Mesh(boxGeo, roofMat);
    slabL.scale.set(1.7, 0.18, 2.6);
    slabL.rotation.z = 0.62;
    slabL.position.set(-0.68, 1.95, 0);
    const slabR = slabL.clone();
    slabR.rotation.z = -0.62;
    slabR.position.x = 0.68;
    const cap = new THREE.Mesh(boxGeo, roofMat);
    cap.scale.set(0.35, 0.3, 2.65);
    cap.position.y = 2.42;
    const chimney = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0x9c6b4f }));
    chimney.scale.set(0.4, 0.9, 0.4);
    chimney.position.set(0.8, 2.35, -0.55);
    // Door + window on the camera-facing (+z) side.
    const door = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0x8a5a3b }));
    door.scale.set(0.6, 0.95, 0.1);
    door.position.set(-0.55, 0.48, 1.11);
    const knob = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xffd54a }));
    knob.scale.setScalar(0.1);
    knob.position.set(-0.35, 0.5, 1.18);
    const win = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xaee3ff, emissive: 0x1a3a4a }));
    win.scale.set(0.7, 0.6, 0.1);
    win.position.set(0.65, 1.0, 1.11);
    g.add(base, slabL, slabR, cap, chimney, door, knob, win);

    // Road from world 0's first node, same look as the journey tiles
    // (always shown — the house is never locked). World coords, not group.
    const n0 = this.data.nodes[0];
    const tileMat = new THREE.MeshLambertMaterial({ color: 0xf3d894 });
    const dx = HOUSE_POS.x - n0.x;
    const dz = HOUSE_POS.z - n0.z;
    const len = Math.hypot(dx, dz);
    const steps = Math.round(len);
    for (let k = 1; k < steps; k++) {
      const t = k / steps;
      const wob = Math.sin(t * Math.PI * 2) * 0.35; // gentle S like the trail
      const tile = new THREE.Mesh(boxGeo, tileMat);
      const w = 0.64 + hash2(k, 3, 11) * 0.16; // stepping-stone variety
      tile.scale.set(w, 0.18, w);
      tile.rotation.y = (hash2(k, 5, 12) - 0.5) * 0.5;
      tile.position.set(
        n0.x + dx * t - (dz / len) * wob,
        0.09,
        n0.z + dz * t + (dx / len) * wob
      );
      this.scene.add(tile);
    }

    // Floating gold house marker so the building reads as a place to visit
    // (bobs and spins in tick(), like the key icons over levels).
    const gold = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 });
    this.houseIcon = new THREE.Group();
    const ibase = new THREE.Mesh(boxGeo, gold);
    ibase.scale.set(0.62, 0.42, 0.62);
    const iroofL = new THREE.Mesh(boxGeo, gold);
    iroofL.scale.set(0.52, 0.12, 0.7);
    iroofL.rotation.z = 0.78;
    iroofL.position.set(-0.18, 0.36, 0);
    const iroofR = iroofL.clone();
    iroofR.rotation.z = -0.78;
    iroofR.position.x = 0.18;
    const idoor = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0x8a5a3b }));
    idoor.scale.set(0.2, 0.26, 0.08);
    idoor.position.set(0, -0.08, 0.3);
    this.houseIcon.add(ibase, iroofL, iroofR, idoor);
    this.houseIcon.scale.setScalar(1.35);
    this.houseIcon.position.set(0, 4.3, 0);
    g.add(this.houseIcon);

    // ❗ badge beside the gold marker: something new is waiting inside
    // (fresh trophy/decoration, or a newly affordable shop item). refresh()
    // shows/hides it from store.hasHouseNews(); pulses in tick().
    const bangMat = new THREE.MeshLambertMaterial({ color: 0xe53935, emissive: 0x661111 });
    this.houseBadge = new THREE.Group();
    const bangBar = new THREE.Mesh(boxGeo, bangMat);
    bangBar.scale.set(0.4, 0.95, 0.4);
    bangBar.position.y = 0.85;
    const bangDot = new THREE.Mesh(boxGeo, bangMat);
    bangDot.scale.set(0.42, 0.34, 0.42);
    this.houseBadge.add(bangBar, bangDot);
    this.houseBadge.position.set(1.7, 4.6, 0.4);
    this.houseBadge.visible = false;
    g.add(this.houseBadge);

    // Fat invisible touch target, same trick as the level nodes.
    this.houseHit = new THREE.Mesh(boxGeo, new THREE.MeshBasicMaterial({ visible: false }));
    this.houseHit.scale.set(4, 4, 4);
    this.houseHit.position.y = 1.5;
    g.add(this.houseHit);

    this.houseSmokeT = 0; // chimney puff timer (tick)
    this.houseChimney = chimney;
    this.houseGroup = g;
    this.scene.add(g);
  }

  // ---------- locked-region tint ----------

  refreshLocks() {
    WORLDS.forEach((w, wi) => {
      const st = this.lockState[wi];
      const un = store.isWorldUnlocked(wi);
      if (un && !st.unlocked) {
        st.unlocked = true;
        st.t = 0; // colorize over ~1s (advanced in tick)
        const c = new THREE.Vector3(0, 1.5, wi * ROW_Z);
        this.effects.confetti(c);
        this.effects.sparkle(c);
      } else if (!un && st.unlocked) {
        st.unlocked = false;
        st.t = 1;
      }
    });
    this.applyLockTints();
  }

  lockFactor(region) {
    if (region < 0) return 1;
    const st = this.lockState[region];
    if (!st.unlocked) return LOCK_TINT;
    return LOCK_TINT + (1 - LOCK_TINT) * Math.min(1, st.t);
  }

  applyLockTints() {
    const col = new THREE.Color();
    const apply = (mesh, meta) => {
      for (let i = 0; i < meta.length; i++) {
        col.copy(meta[i].color).multiplyScalar(this.lockFactor(meta[i].region));
        mesh.setColorAt(i, col);
      }
      if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    };
    apply(this.groundMesh, this.groundMeta);
    apply(this.decorMesh, this.decorMeta);
    apply(this.glowMesh, this.glowMeta);
    apply(this.swampPoolMesh, this.swampPoolMeta);
    // Vox-model decor: baked colors live in vertex attributes, so the lock
    // tint is one multiplier per material. Tintable materials keep a base
    // color in userData so locks preserve authored hue variants.
    for (const d of this.voxDecor) {
      const f = this.lockFactor(d.region);
      for (const m of d.mats) {
        if (m.userData.lockBaseColor) {
          m.color.copy(m.userData.lockBaseColor).multiplyScalar(f);
        } else {
          m.color.setScalar(f);
        }
      }
    }
    // "?" signs show only over locked regions.
    const zero = new THREE.Matrix4().makeScale(0.0001, 0.0001, 0.0001);
    this.signMeta.forEach((s, i) => {
      this.signMesh.setMatrixAt(i, this.lockState[s.region].unlocked ? zero : s.matrix);
    });
    this.signMesh.instanceMatrix.needsUpdate = true;
  }

  // Walk-surface height under a map position (terraces/bridges; water = 0).
  heightAt(x, z) {
    return this.groundH.get(Math.round(x) + ',' + Math.round(z)) || 0;
  }

  // ---------- state refresh ----------

  refresh() {
    const frontier = store.get().unlocked;
    this.navList = [];
    this.data.nodes.forEach((nd, i) => {
      const v = this.nodeViews[i];
      const unlocked = store.isLevelUnlocked(nd.world, nd.level);
      v.group.visible = unlocked;
      const stars = store.getStars(nd.world, nd.level);
      const isCurrent = nd.world === frontier.world && nd.level === frontier.level;
      v.dotMat.color.setHex(stars > 0 ? 0x43a047 : 0xe53935);
      v.dotMat.emissive.setHex(isCurrent ? 0x662222 : 0x000000);
      v.ring.visible = isCurrent;
      v.isCurrent = isCurrent;
      v.stars.children.forEach((s, si) => { s.visible = si < stars; });
      // Castle: boss face until beaten, then flag + crown.
      if (nd.boss && v.bossHead) {
        const beaten = store.isBossBeaten(nd.world);
        v.bossHead.visible = !beaten;
        v.castleFlag.visible = beaten;
        v.crown.visible = beaten;
      }
      // Tiny golden key beside nodes where the key was found.
      if (store.hasKey(nd.world, nd.level) && !v.keyIcon) {
        v.keyIcon = makeKeyMesh();
        v.keyIcon.scale.setScalar(0.36);
        v.keyIcon.position.set(1.25, 1.0, 0.35);
        v.group.add(v.keyIcon);
      }
      // Path tiles visible when the destination node is unlocked.
      if (i > 0) {
        const show = unlocked;
        const seg = this.segTiles[i];
        for (let k = 0; k < seg.count; k++) this.tiles[seg.start + k].shown = show;
      }
      if (unlocked) {
        this.navList.push({
          world: nd.world, level: nd.level, secret: false, boss: !!nd.boss,
          x: nd.x, z: nd.z, i,
        });
      }
      // Insert the secret node after its world's last unlocked regular node.
      if (unlocked && nd.isWorldFinal && store.isSecretUnlocked(nd.world)) {
        const sn = this.data.secretNodes[nd.world];
        this.navList.push({ world: nd.world, level: -1, secret: true, x: sn.x, z: sn.z, i: -1 });
      }
    });
    // Worlds where the final level isn't reached yet but a key was found.
    this.data.secretNodes.forEach((sn, wi) => {
      const v = this.secretViews[wi];
      const open = store.isSecretUnlocked(wi);
      v.group.visible = open;
      v.dotMat.color.setHex(0xab47bc);
      v.dotMat.emissive.setHex(0x2c0f45);
      const stars = store.getSecretStars(wi);
      v.stars.children.forEach((s, si) => { s.visible = si < stars; });
      if (open) {
        const seg = this.ensureSecretTiles(wi);
        for (let k = 0; k < seg.count; k++) this.secretTiles[seg.start + k].shown = true;
        if (!this.navList.some((e) => e.secret && e.world === wi)) {
          // final level locked but secret open — append at end of that world's entries
          const idx = this.navList.map((e) => e.world).lastIndexOf(wi);
          this.navList.splice(idx + 1, 0, { world: wi, level: -1, secret: true, x: sn.x, z: sn.z, i: -1 });
        }
      }
    });
    this.tokenNav = Math.min(this.tokenNav, this.navList.length - 1);
    this.houseBadge.visible = store.hasHouseNews(HOUSE_ITEMS);
    this.refreshLocks();
    this.updateTiles();
  }

  updateTiles() {
    const dummy = new THREE.Object3D();
    const place = (mesh, list) => {
      list.forEach((t, i) => {
        const s = t.shown ? (t.pop > 0 ? 1 + Math.sin(t.pop * Math.PI) * 0.4 : 1) : 0.0001;
        // Stepping-stone look: each tile keeps a stable size/twist of its own.
        const w = 0.64 + hash2(t.x, t.z, 11) * 0.16;
        dummy.position.set(t.x, t.shown && t.pop > 0 ? 0.1 + t.pop * 0.3 : 0.09, t.z);
        dummy.rotation.y = (hash2(t.x, t.z, 12) - 0.5) * 0.5;
        dummy.scale.set(w * s, 0.18, w * s);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
      });
      mesh.count = list.length;
      mesh.instanceMatrix.needsUpdate = true;
    };
    place(this.tileMesh, this.tiles);
    place(this.secretTileMesh, this.secretTiles);
  }

  navInfo(e) {
    return {
      world: e.world,
      level: e.level,
      secret: e.secret,
      boss: !!e.boss,
      name: nodeName(e.world, e.level, e.secret, e.boss),
      stars: e.secret ? store.getSecretStars(e.world) : store.getStars(e.world, e.level),
      completed: (e.secret ? store.getSecretStars(e.world) : store.getStars(e.world, e.level)) > 0,
    };
  }

  currentNav() {
    return this.navList[this.tokenNav];
  }

  // Snap the token onto a node (e.g. after finishing that level).
  setTokenTo(world, level, secret = false) {
    const idx = this.navList.findIndex((e) =>
      e.world === world && (secret ? e.secret : e.level === level && !e.secret));
    if (idx >= 0) this.tokenNav = idx;
    const e = this.navList[this.tokenNav];
    if (e) this.token.position.set(e.x, TOKEN_Y, e.z);
    this.token.rotation.y = -Math.PI / 2; // camera-facing when idle
  }

  // ---------- input ----------

  attachInput() {
    const el = this.renderer.domElement;
    this.raycaster = new THREE.Raycaster();
    let downPos = null;
    let dragging = false;

    const onDown = (e) => {
      if (!this.active) return;
      if (e.target && e.target.closest && e.target.closest('button')) return;
      downPos = { x: e.clientX, y: e.clientY };
      dragging = false;
    };
    const onMove = (e) => {
      if (!this.active || !downPos) return;
      const dx = e.clientX - downPos.x;
      const dy = e.clientY - downPos.y;
      if (!dragging && Math.hypot(dx, dy) > 10) dragging = true;
      if (dragging) {
        const k = 0.028;
        const b = this.data.bounds;
        this.focus.x = Math.max(b.minX, Math.min(b.maxX, this.focus.x - dx * k));
        this.focus.z = Math.max(b.minZ, Math.min(b.maxZ, this.focus.z - dy * k));
        downPos = { x: e.clientX, y: e.clientY };
        this.panIdle = 0;
      }
    };
    const onUp = (e) => {
      if (!this.active || !downPos) return;
      const wasDrag = dragging;
      downPos = null;
      dragging = false;
      if (wasDrag) return;
      this.tap(e.clientX, e.clientY);
    };
    const onKey = (e) => {
      if (!this.active) return;
      if (e.code === 'ArrowLeft' || e.code === 'ArrowRight') {
        e.preventDefault();
        const d = e.code === 'ArrowLeft' ? -1 : 1;
        const next = this.tokenNav + d;
        if (next >= 0 && next < this.navList.length && !this.walk && !this.reveal) {
          this.walkTo(next);
        }
      } else if (e.code === 'Enter') {
        e.preventDefault();
        this.cb.onEnterKey();
      }
    };

    if (window.PointerEvent) {
      el.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
    } else {
      el.addEventListener('mousedown', onDown);
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      el.addEventListener('touchstart', (e) => onDown(e.changedTouches[0]), { passive: true });
      window.addEventListener('touchmove', (e) => onMove(e.changedTouches[0]), { passive: true });
      window.addEventListener('touchend', (e) => onUp(e.changedTouches[0]));
    }
    window.addEventListener('keydown', onKey);
  }

  tap(cx, cy) {
    if (this.reveal) return;
    const ndc = new THREE.Vector2(
      (cx / window.innerWidth) * 2 - 1,
      -(cy / window.innerHeight) * 2 + 1
    );
    this.raycaster.setFromCamera(ndc, this.camera);
    if (this.raycaster.intersectObject(this.editHit, false).length) {
      this.cb.onEditTapped();
      return;
    }
    if (this.raycaster.intersectObject(this.tokenHit, false).length) {
      this.cb.onEnterKey();
      return;
    }
    if (this.raycaster.intersectObject(this.houseHit, false).length) {
      this.cb.onHouseTapped();
      return;
    }
    const hits = [];
    this.navList.forEach((e, idx) => {
      const view = e.secret ? this.secretViews[e.world] : this.nodeViews[e.i];
      const hit = this.raycaster.intersectObject(view.hit, false);
      if (hit.length) hits.push({ idx, dist: hit[0].distance });
    });
    if (hits.length) {
      hits.sort((a, b) => a.dist - b.dist);
      this.walkTo(hits[0].idx);
    }
    // Tapping empty ground keeps the current banner — it's never dismissed,
    // only replaced when the token reaches a different node.
  }

  walkTo(navIdx) {
    if (navIdx === this.tokenNav) {
      this.cb.onNodeSelected(this.navInfo(this.navList[navIdx]));
      return;
    }
    this.cb.onDismiss();
    const dir = navIdx > this.tokenNav ? 1 : -1;
    const points = [];
    for (let i = this.tokenNav; ; i += dir) {
      const a = this.navList[i];
      points.push({ x: a.x, z: a.z });
      if (i === navIdx) break;
    }
    // Cumulative arc length so the token glides at constant speed.
    const cum = [0];
    for (let i = 1; i < points.length; i++) {
      cum.push(cum[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].z - points[i - 1].z));
    }
    const dist = cum[cum.length - 1];
    this.walk = {
      points,
      cum,
      dist,
      seg: 0,
      h: this.heightAt(points[0].x, points[0].z),
      t: 0,
      dur: Math.min(2, 0.3 + dist * 0.09),
      target: navIdx,
    };
    this.panIdle = 99; // camera follows the token
  }

  // ---------- reveal animations (THE payoff moment) ----------

  queueReveal(r) {
    this.revealQueue.push(r);
  }

  startReveal(r) {
    let seg;
    let view;
    let tiles;
    if (r.kind === 'secret') {
      seg = this.ensureSecretTiles(r.world);
      tiles = this.secretTiles;
      view = this.secretViews[r.world];
    } else {
      const i = this.data.nodes.findIndex((nd) => nd.world === r.world && nd.level === r.level);
      if (i <= 0) return;
      seg = this.segTiles[i];
      tiles = this.tiles;
      view = this.nodeViews[i];
    }
    // Hide the segment + node, then pop them back one by one.
    for (let k = 0; k < seg.count; k++) {
      tiles[seg.start + k].shown = false;
      tiles[seg.start + k].pop = 0;
    }
    view.group.visible = false;
    this.reveal = {
      seg, tiles, view,
      k: 0,
      timer: 0.35,
      tileDelay: Math.min(0.11, 1.5 / Math.max(1, seg.count)),
      nodeT: -1,
      secret: r.kind === 'secret',
      // A level-0 node only reveals when a castle fell: a new world opened.
      newWorld: r.kind === 'node' && r.level === 0,
    };
  }

  updateReveal(dt) {
    const r = this.reveal;
    // Tile pops decay.
    for (let k = 0; k < r.seg.count; k++) {
      const t = r.tiles[r.seg.start + k];
      if (t.pop > 0) t.pop = Math.max(0, t.pop - dt * 3);
    }
    if (r.nodeT >= 0) {
      // Node drop: fall + bounce.
      r.nodeT += dt;
      const t = Math.min(1, r.nodeT / 0.55);
      const y = 6 * (1 - t) * (1 - t) - Math.sin(t * Math.PI) * 0.0;
      r.view.group.position.y = y;
      if (t >= 1 && !r.landed) {
        r.landed = true;
        r.view.group.position.y = 0;
        sfxBoing();
        this.effects.confetti(new THREE.Vector3(
          r.view.group.position.x, 1.5, r.view.group.position.z
        ));
        if (r.secret) {
          this.effects.sparkle(new THREE.Vector3(
            r.view.group.position.x, 1.5, r.view.group.position.z
          ));
          speakLine('secretPath');
        } else if (r.newWorld) {
          speakLine('worldUnlock');
        }
      }
      if (r.nodeT > 1.3) {
        this.reveal = null;
        this.refresh();
      }
      this.updateTiles();
      return;
    }
    r.timer -= dt;
    if (r.timer <= 0) {
      if (r.k < r.seg.count) {
        const t = r.tiles[r.seg.start + r.k];
        t.shown = true;
        t.pop = 1;
        sfxPlink(r.k);
        // Pan the camera along the appearing path.
        this.focus.x += (t.x - this.focus.x) * 0.35;
        this.focus.z += (t.z - this.focus.z) * 0.35;
        this.panIdle = 0;
        r.k++;
        r.timer = r.tileDelay;
      } else {
        r.nodeT = 0;
        r.view.group.visible = true;
        r.view.group.position.y = 6;
      }
    }
    this.updateTiles();
  }

  // ---------- per-frame ----------

  enter() {
    this.active = true;
    this.refresh(); // also runs refreshLocks()
    // Start any queued reveal now so the new path/node doesn't flash in
    // for a frame before the animation hides it.
    if (this.revealQueue.length && !this.reveal) {
      this.startReveal(this.revealQueue.shift());
      this.updateTiles();
    }
    const e = this.currentNav();
    if (e) this.token.position.set(e.x, TOKEN_Y, e.z);
    this.focus.set(this.token.position.x, 0, this.token.position.z);
    this.camera.position.copy(this.focus).add(CAM_OFFSET);
    this.camera.lookAt(this.focus);
    this.panIdle = 99;
  }

  exit() {
    this.active = false;
  }

  // Per-star bob/spin, hidden while the token stands on that node.
  animateStars(v, t) {
    const dx = this.token.position.x - v.group.position.x;
    const dz = this.token.position.z - v.group.position.z;
    v.stars.visible = dx * dx + dz * dz > 1.2;
    v.stars.children.forEach((star, i) => {
      star.rotation.y = t * 1.6 + i * 2.1;
      star.position.y = 0.62 + Math.sin(t * 2.4 + i * 2.1) * 0.07;
    });
  }

  tick(dt) {
    const t = performance.now() / 1000;

    // Locked-region colorize animation (~1s lerp + sparkle bursts).
    let lockAnim = false;
    this.lockState.forEach((st, wi) => {
      if (st.unlocked && st.t < 1) {
        st.t = Math.min(1, st.t + dt);
        lockAnim = true;
        if (Math.random() < dt * 8) {
          this.effects.sparkle(new THREE.Vector3(
            -16 + Math.random() * 32, 1.6, wi * ROW_Z - 3 + Math.random() * 6
          ));
        }
      }
    });
    if (lockAnim) this.applyLockTints();

    // Floating house marker: slow spin + bob, like the key icons.
    this.houseIcon.rotation.y = t * 1.2;
    this.houseIcon.position.y = 4.3 + Math.sin(t * 2) * 0.15;

    // ❗ house badge: eager bounce + pulse so it outshines the gold marker.
    if (this.houseBadge.visible) {
      this.houseBadge.position.y = 4.6 + Math.abs(Math.sin(t * 3)) * 0.5;
      this.houseBadge.scale.setScalar(1 + Math.sin(t * 6) * 0.1);
    }

    // Dress-up marker over the token: counter-rotate so it spins in world
    // space no matter which way the kid is facing.
    this.editIcon.rotation.y = t * 1.2 - this.token.rotation.y;
    this.editIcon.position.y = 2.7 + Math.sin(t * 2 + 1) * 0.12;

    // Lazy chimney smoke: a soft puff every couple of seconds.
    this.houseSmokeT -= dt;
    if (this.houseSmokeT <= 0) {
      this.houseSmokeT = 2.2 + Math.random();
      const p = this.houseGroup.position;
      this.effects.sparkle(new THREE.Vector3(p.x + 0.8, 3.1, p.z - 0.55));
    }

    // Drifting clouds above the map.
    const b = this.data.bounds;
    for (const c of this.mapClouds) {
      c.position.x += c.userData.drift * dt;
      if (c.position.x > b.maxX + 26) c.position.x = b.minX - 26;
    }

    // Shared glow materials breathe with one intensity write each.
    this.glowPulse += dt;
    const glowI = 0.45 + Math.sin(this.glowPulse * 2.4) * 0.15;
    for (const p of this.pulseMats) {
      p.mat.emissiveIntensity = glowI * this.lockFactor(p.region);
    }

    // Pepper Volcano smoke: each puff climbs out of the crater, swells,
    // drifts a touch downwind and thins to nothing, then respawns at the
    // lip — staggered phases keep the column from ever emptying.
    for (const p of this.volcanoSmoke) {
      const u = (t * 0.16 + p.phase) % 1;
      p.mesh.position.set(
        p.x + Math.sin(u * 4 + p.phase * 9) * 0.3 + u * 0.9,
        p.lip + u * 3.4,
        p.z + Math.sin(u * 3 + p.phase * 5) * 0.25
      );
      p.mesh.scale.setScalar(0.5 + u * 1.1);
      // sin ramp: fade in off the lip, fade out before the wrap.
      p.mesh.material.opacity = 0.8 * Math.sin(Math.min(1, u * 1.15) * Math.PI);
      p.mesh.rotation.y += dt * 0.5;
    }

    // Swamp bubbles: small round puffs wobble upward and snap larger before
    // vanishing at the top of the stream.
    for (const p of this.swampBubbles) {
      const u = (t * 0.22 + p.phase) % 1;
      const pop = Math.max(0, (u - 0.82) / 0.18);
      const snap = pop ? 1 + Math.sin(pop * Math.PI) * 0.95 : 1;
      p.mesh.position.set(
        p.x + Math.sin(u * 8 + p.phase * 17) * 0.16,
        p.base + u * p.height,
        p.z + Math.sin(u * 6 + p.phase * 11) * 0.14
      );
      p.mesh.scale.setScalar(
        p.size * (0.8 + u * 1.25) * snap * Math.max(0.12, 1 - pop * 0.88)
      );
      p.mesh.material.opacity = 0.58 * Math.min(1, u / 0.16) * Math.min(1, (1 - u) / 0.2);
      p.mesh.rotation.y += dt * (0.4 + p.phase);
    }

    // Living sea: shimmer, foam, glints, ducks and the hopping fish.
    this.updateWater(t);
    this.updateCritters(t);

    // Node idle animations.
    this.nodeViews.forEach((v, i) => {
      if (!v.group.visible) return;
      const pulse = 1.15 + Math.sin(t * 3 + v.group.position.x) * 0.09;
      const s = v.isCurrent ? 1.15 + Math.sin(t * 5) * 0.14 : pulse;
      v.dot.scale.set(s, 0.3, s);
      if (v.isCurrent) { // next-playable: gentle bounce + glow-ring pulse
        const rs = 2.2 + Math.sin(t * 3) * 0.3;
        v.ring.scale.set(rs, 0.12, rs);
        v.dot.position.y = 0.4 + Math.max(0, Math.sin(t * 3)) * 0.16;
      } else {
        v.dot.position.y = 0.4;
      }
      this.animateStars(v, t);
      if (v.keyIcon) {
        v.keyIcon.rotation.y = t * 1.4;
        v.keyIcon.position.y = 1.0 + Math.sin(t * 2 + i) * 0.08;
      }
      if (v.bossHead && v.bossHead.visible) {
        v.bossHead.rotation.y = Math.sin(t * 1.3 + i) * 0.5;
        v.bossHead.position.y = 3.3 + Math.sin(t * 2.1 + i) * 0.12;
      }
    });
    this.secretViews.forEach((v, wi) => {
      if (!v.group.visible) return;
      const s = 1.15 + Math.sin(t * 4 + wi) * 0.12;
      v.dot.scale.set(s, 0.3, s);
      if (v.crystals) v.crystals.rotation.y = t * 0.4;
      this.animateStars(v, t);
      if (Math.random() < dt * 0.8) { // slow sparkle
        this.effects.sparkle(new THREE.Vector3(
          v.group.position.x + (Math.random() - 0.5), 1.2, v.group.position.z
        ));
      }
    });

    // Reveal animation.
    if (!this.reveal && this.revealQueue.length && !this.walk) {
      this.startReveal(this.revealQueue.shift());
    }
    if (this.reveal) this.updateReveal(dt);

    // Token walking.
    if (this.walk) {
      const w = this.walk;
      w.t += dt / w.dur;
      // Constant-speed glide along the path (interpolated, not waypoint-snapped).
      const s = Math.min(1, w.t) * w.dist;
      while (w.seg < w.points.length - 2 && w.cum[w.seg + 1] < s) w.seg++;
      const a = w.points[w.seg];
      const b2 = w.points[w.seg + 1];
      const segLen = w.cum[w.seg + 1] - w.cum[w.seg];
      const f = segLen > 0 ? (s - w.cum[w.seg]) / segLen : 1;
      const px = a.x + (b2.x - a.x) * f;
      const pz = a.z + (b2.z - a.z) * f;
      // Point the kid's forward axis (+x local) along the walk direction,
      // easing turns instead of snapping.
      const want = Math.atan2(a.z - b2.z, b2.x - a.x);
      let dr = want - this.token.rotation.y;
      dr = Math.atan2(Math.sin(dr), Math.cos(dr));
      this.token.rotation.y += dr * (1 - Math.exp(-dt * 12));
      // Ease onto terraces/bridges rather than popping a full step at once.
      w.h += (this.heightAt(px, pz) - w.h) * (1 - Math.exp(-dt * 10));
      this.token.position.set(px, TOKEN_Y + w.h + Math.abs(Math.sin(w.t * 22)) * 0.18, pz);
      const parts = this.token.userData.parts;
      const swing = Math.sin(w.t * 30);
      parts.legL.rotation.z = -swing * 0.8;
      parts.legR.rotation.z = swing * 0.8;
      parts.armL.rotation.z = swing * 0.8;
      parts.armR.rotation.z = -swing * 0.8;
      if (w.t >= 1) {
        this.tokenNav = w.target;
        const e = this.navList[w.target];
        this.token.position.set(e.x, TOKEN_Y, e.z);
        parts.legL.rotation.z = parts.legR.rotation.z = 0;
        parts.armL.rotation.z = parts.armR.rotation.z = 0;
        this.walk = null;
        this.cb.onNodeSelected(this.navInfo(e));
      }
    } else if (!this.reveal) {
      this.token.position.y = TOKEN_Y + Math.abs(Math.sin(t * 2)) * 0.05;
      // Ease back to camera-facing after a walk instead of snapping.
      let dr = -Math.PI / 2 - this.token.rotation.y;
      dr = Math.atan2(Math.sin(dr), Math.cos(dr));
      this.token.rotation.y += dr * (1 - Math.exp(-dt * 8));
    }

    // Camera: follow token, or user pan with snap-back after 4s idle.
    this.panIdle += dt;
    if (this.panIdle > 4 || this.walk) {
      const k = 1 - Math.exp(-dt * 3);
      this.focus.x += (this.token.position.x - this.focus.x) * k;
      this.focus.z += (this.token.position.z - this.focus.z) * k;
    }
    this.camera.position.set(
      this.focus.x + CAM_OFFSET.x,
      CAM_OFFSET.y,
      this.focus.z + CAM_OFFSET.z
    );
    this.camera.lookAt(this.focus.x, 0, this.focus.z);

    this.effects.update(dt);
  }
}
