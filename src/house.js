// The player's house: a cutaway diorama (front wall open toward the camera)
// on a grass island. Purchased catalog items from housedata.js pop into fixed
// spots inside or in the yard; boss trophies line a shelf on the back wall.
// The kid stands in the yard and walks wherever you tap (lawn or floor),
// routing through the front doorway; buttons/shop stay on the DOM overlay.
// The camera opens on a 3/4 view but the player can drag to orbit and
// pinch/wheel to zoom; it idles with a very slow drift for life.

import * as THREE from 'three';
import { voxelGeo } from './voxelgeo.js';
import { Effects } from './effects.js';
import { makeKidMesh, applyLook, currentLook } from './player.js';
import * as store from './store.js';
import { getItem } from './housedata.js';
import { speak, sfxFireworks, sfxCorrect } from './audio.js';

const boxGeo = voxelGeo;
const cylGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 10);
const coneGeo = new THREE.ConeGeometry(0.5, 1, 10);
const sphereGeo = new THREE.SphereGeometry(0.5, 10, 8);

const FLOOR_Y = 0.3; // top of the house floor slab (interior items stand here)
const GRASS_Y = 0.0; // top of the lawn (yard items stand here)

// Walkable geometry for the tap-to-walk kid. FOOT is the house footprint
// (walls included, small margin) that outdoor walks must route around;
// INSIDE is the reachable interior; LAWN is the island edge minus a margin.
const FOOT = { minX: -5.75, maxX: 5.75, minZ: -6.35, maxZ: 1.35 };
const INSIDE = { minX: -4.9, maxX: 4.9, minZ: -5.4, maxZ: 0.6 };
const LAWN = { minX: -12.4, maxX: 12.4, minZ: -8.4, maxZ: 12.4 };
const DOOR_HALF = 2.6;   // doorway waypoints clamp to |x| <= this
const WALK_SPEED = 3.6;  // units/s

const inRect = (r, x, z) => x > r.minX && x < r.maxX && z > r.minZ && z < r.maxZ;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// Orbit-camera limits: how far the player can swing/tilt/zoom the diorama view.
const CAM_YAW_RANGE = 1.15; // ± radians of swing from the default 3/4 angle
const CAM_PITCH_MIN = 0.18; // low, near-ground angle
const CAM_PITCH_MAX = 1.15; // high, near top-down
const CAM_DIST_MIN = 12;    // zoomed in close
const CAM_DIST_MAX = 30;    // pulled back wide

const WORLD_TROPHY_COUNT = 6;
const TROPHY_SHELF_SPACING = 0.78;
const TROPHY_TINTS = [0xffd54a, 0xffc233, 0xffe082, 0xe07ac2, 0xf5b942, 0xff8c3e];

function trophyShelfX(worldIdx) {
  return (worldIdx - (WORLD_TROPHY_COUNT - 1) / 2) * TROPHY_SHELF_SPACING;
}

function lambert(hex, emissive = 0x000000) {
  return new THREE.MeshLambertMaterial({ color: hex, emissive });
}

// mesh helper: box with position/scale/rotY in one call
function box(mat, x, y, z, sx, sy, sz, ry = 0) {
  const m = new THREE.Mesh(boxGeo, mat);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.rotation.y = ry;
  return m;
}

export class House {
  constructor(renderer) {
    this.renderer = renderer;
    this.active = false;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x79c4f0);
    this.camera = new THREE.PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 0.1, 200
    );

    // Warm key / cool fill: warm sky half, cool blue-grey floor bounce —
    // the hearth glow below supplies the warmth indoors.
    const hemi = new THREE.HemisphereLight(0xfff3dd, 0x7e93b0, 1.05);
    const sun = new THREE.DirectionalLight(0xffdfae, 1.45);
    sun.position.set(8, 14, 10);
    // Warm hearth glow inside the cutaway so the rooms feel cozy
    // (a plain point light — still no shadow maps).
    const glow = new THREE.PointLight(0xffcf8a, 0.85, 16, 1.6);
    glow.position.set(0, 3.4, -2.5);
    this.scene.add(hemi, sun, glow);

    this.effects = new Effects(this.scene);

    this.built = {};    // itemId -> THREE.Group (idempotent refresh)
    this.trophies = {}; // worldIdx -> trophy mesh
    this.anims = [];    // fn(t, dt) per-frame closures for owned items

    // Fixed home for every catalog item. Interior z < 1, yard z > 1.
    this.itemPos = {
      rug: [1.8, FLOOR_Y, -2.2],
      chair: [4.0, FLOOR_Y, -3.2],
      table: [2.6, FLOOR_Y, -3.4],
      bed: [-3.4, FLOOR_Y, -4.6],
      lamp: [-1.5, FLOOR_Y, -5.2],
      bookshelf: [3.9, FLOOR_Y, -5.3],
      toybox: [-4.0, FLOOR_Y, -1.6],
      aquarium: [4.2, FLOOR_Y, -0.8],
      telescope: [-4.2, FLOOR_Y, 0.2],
      robot: [0.6, FLOOR_Y, -0.8],
      flowers: [-3.0, GRASS_Y, 3.2],
      mailbox: [2.4, GRASS_Y, 7.2],
      tree: [7.2, GRASS_Y, 4.0],
      swing: [-7.2, GRASS_Y, 3.4],
      trampoline: [6.4, GRASS_Y, 8.0],
      cat: [1.6, GRASS_Y, 2.2],
      dog: [-1.6, GRASS_Y, 4.4],
      rocket: [-7.8, GRASS_Y, 8.2],
      // boss prizes
      golemstatue: [5.4, GRASS_Y, 5.2],
      serpentstatue: [-4.8, GRASS_Y, 6.6],
      yetisnowman: [9.2, GRASS_Y, 6.0],
      cabbagecrown: [-0.4, FLOOR_Y, -5.0],
      crystallamp: [1.4, FLOOR_Y, -5.0],
      dragonkite: [10.2, GRASS_Y, 10.4],
      // game-complete reward (granted, never sold) — front yard, can't-miss
      herotrophy: [3.6, GRASS_Y, 3.0],
    };

    this.buildSky();
    this.buildDistantLand();
    this.buildIsland();
    this.buildHouse();
    this.buildTrophyShelf();
    this.buildClouds();

    // The kid: stands on the stone path, walks to wherever you tap.
    this.kid = makeKidMesh(0.85);
    this.kidHome = new THREE.Vector3(0.6, GRASS_Y, 3.4);
    this.kid.position.copy(this.kidHome);
    this.kid.rotation.y = -Math.PI / 4; // face the 3/4 camera when idle
    this.scene.add(this.kid);
    this.walkPath = null; // { pts, cum, dist, s, seg }
    this.kidY = GRASS_Y;  // eased ground height (floor <-> lawn step)
    this.attachInput();

    // 3/4 view: house interior on the left, yard front-right.
    this.camBase = new THREE.Vector3(10.5, 10.5, 16.5);
    this.camLook = new THREE.Vector3(-0.5, 1.2, 0.5);

    // Orbit camera: a spherical offset (yaw/pitch/distance) from a focus point,
    // seeded so the default view exactly reproduces camBase/camLook. Drag orbits,
    // pinch/wheel zooms — see attachInput() and tick().
    this.camFocus = this.camLook.clone();
    const off = this.camBase.clone().sub(this.camLook);
    this.camDist0 = off.length();
    this.camYaw0 = Math.atan2(off.x, off.z);
    this.camPitch0 = Math.asin(off.y / this.camDist0);
    this.camYaw = this.camYaw0;
    this.camPitch = this.camPitch0;
    this.camDist = this.camDist0;

    this.camera.position.copy(this.camBase);
    this.camera.lookAt(this.camLook);
  }

  // ---------- orbit camera helpers ----------

  orbitBy(dYaw, dPitch) {
    this.camYaw = clamp(this.camYaw + dYaw, this.camYaw0 - CAM_YAW_RANGE, this.camYaw0 + CAM_YAW_RANGE);
    this.camPitch = clamp(this.camPitch - dPitch, CAM_PITCH_MIN, CAM_PITCH_MAX);
  }

  zoomBy(d) {
    this.camDist = clamp(this.camDist + d, CAM_DIST_MIN, CAM_DIST_MAX);
  }

  resetCam() {
    this.camYaw = this.camYaw0;
    this.camPitch = this.camPitch0;
    this.camDist = this.camDist0;
    this.camFocus.copy(this.camLook);
  }

  // ---------- static scenery ----------

  buildIsland() {
    // Lawn slab with dirt sides floating in the sky, plus a sea ring below
    // so the horizon isn't empty.
    const grass = box(lambert(0x6cc24a), 0, -0.4, 2, 26, 0.8, 22);
    const dirt = box(lambert(0x8d6b45), 0, -1.55, 2, 25, 1.5, 21);
    const dirt2 = box(lambert(0x77552f), 0, -2.7, 2, 22, 0.9, 18);
    this.scene.add(grass, dirt, dirt2);
    this.grassMesh = grass; // tap-to-walk raycast target

    // Checker mow-lines: lighter strips across the lawn.
    const light = lambert(0x7bd158);
    for (let i = -2; i <= 2; i++) {
      this.scene.add(box(light, i * 5.2, 0.01, 2, 2.6, 0.02, 22));
    }

    // Soft tone patches so the lawn isn't one flat green.
    const patchA = lambert(0x63b843);
    const patchB = lambert(0x79cd57);
    const patches = [
      [-8.2, -1.5, 2.6, 2.0, 0], [4.5, 6.5, 3.0, 2.2, 1], [-3.5, 8.8, 2.2, 1.8, 0],
      [9.0, 4.0, 2.4, 2.0, 1], [-10.5, 0.5, 2.0, 1.6, 1], [1.5, 10.6, 2.8, 1.8, 0],
    ];
    for (const [x, z, w, d, which] of patches) {
      this.scene.add(box(which ? patchB : patchA, x, 0.018, z, w, 0.02, d, x * 0.1));
    }

    // Stone path from the open house front out to the lawn edge.
    const stone = lambert(0xd9cfb8);
    for (let i = 0; i < 7; i++) {
      this.scene.add(box(stone, 0.5 + Math.sin(i * 1.7) * 0.35, 0.02, 1.6 + i * 1.55,
        1.2, 0.06, 1.0, Math.sin(i) * 0.2));
    }

    // A few fixed decorations so the yard isn't bare before purchases.
    const bush = lambert(0x4ea644);
    this.scene.add(
      box(bush, -6.5, 0.35, -3.5, 1.4, 0.9, 1.2),
      box(bush, 7.5, 0.35, -2.5, 1.2, 0.8, 1.3),
      box(bush, -9.5, 0.3, 5.5, 1.1, 0.7, 1.1),
    );
    const rock = lambert(0x9c9c8a);
    this.scene.add(box(rock, 9.8, 0.22, 1.5, 0.9, 0.55, 0.7, 0.5));
  }

  buildHouse() {
    // Footprint: x -5.4..5.4, z -6..1. Front (z = 1) stays open so the
    // camera sees the rooms. FLOOR_Y is the walkable slab top.
    const wall = lambert(0xf6e2b8);
    const wallDark = lambert(0xecd4a4);
    const g = new THREE.Group();

    const floor = box(lambert(0xdba15f), 0, 0.15, -2.5, 11.2, 0.3, 7.4); // wood floor
    g.add(floor);
    this.floorMesh = floor; // tap-to-walk raycast target
    // Alternating plank strips so the floor reads as wood, not one slab.
    const plankA = lambert(0xd2984f);
    const plankB = lambert(0xc78e47);
    for (let i = 0; i < 8; i++) {
      g.add(box(i % 2 ? plankA : plankB, -4.9 + i * 1.4, 0.305, -2.5, 1.32, 0.014, 7.3));
    }
    // Sunlight patch spilling from the back window across the planks.
    g.add(box(lambert(0xffedb8, 0x332a10), -2.6, 0.318, -4.3, 1.7, 0.012, 2.0, 0.15));
    // Woven doormat just inside the front opening.
    g.add(box(lambert(0x69b0e0), 0, 0.322, 0.2, 1.6, 0.02, 0.9));
    g.add(box(wall, 0, 1.8, -5.9, 11.2, 3.0, 0.35));              // back wall
    g.add(box(wallDark, -5.4, 1.8, -2.5, 0.35, 3.0, 7.2));        // left wall
    g.add(box(wallDark, 5.4, 1.8, -2.5, 0.35, 3.0, 7.2));         // right wall
    // Faint plaster tone patches + a baseboard so the walls aren't flat.
    g.add(box(lambert(0xf0dcae), 1.8, 2.3, -5.71, 2.2, 1.3, 0.06));
    g.add(box(lambert(0xfae8c2), -4.3, 1.3, -5.71, 1.5, 1.1, 0.06));
    const skirt = lambert(0xcfa36b);
    g.add(box(skirt, 0, 0.48, -5.7, 11.0, 0.36, 0.08));
    g.add(box(skirt, -5.2, 0.48, -2.5, 0.08, 0.36, 6.9));
    g.add(box(skirt, 5.2, 0.48, -2.5, 0.08, 0.36, 6.9));

    // Stubby front wall returns so the opening reads as a doorway-sized cut.
    g.add(box(wall, -4.4, 1.8, 0.9, 2.3, 3.0, 0.3));
    g.add(box(wall, 4.4, 1.8, 0.9, 2.3, 3.0, 0.3));
    g.add(box(wall, 0, 3.0, 0.9, 11.2, 0.6, 0.3)); // lintel over the opening

    // Window in the back wall (sky-blue pane + white frame).
    g.add(box(lambert(0xffffff), -2.6, 2.0, -5.72, 1.5, 1.3, 0.1));
    g.add(box(lambert(0xa8dcf5, 0x1a2a3a), -2.6, 2.0, -5.66, 1.2, 1.0, 0.1));

    // Pitched roof: two slanted slabs + ridge, overhanging the walls.
    const roofMat = lambert(0xe25b4a);
    const roofL = box(roofMat, -3.1, 4.35, -2.5, 6.9, 0.35, 8.4);
    roofL.rotation.z = 0.42;
    const roofR = box(roofMat, 3.1, 4.35, -2.5, 6.9, 0.35, 8.4);
    roofR.rotation.z = -0.42;
    g.add(roofL, roofR);
    g.add(box(lambert(0xc94a3b), 0, 5.72, -2.5, 0.8, 0.42, 8.5)); // ridge cap

    // Chimney with a white cap, poking through the right roof slope.
    g.add(box(lambert(0xb0614a), 3.4, 5.4, -4.2, 0.85, 1.7, 0.85));
    g.add(box(lambert(0xe8e0d2), 3.4, 6.3, -4.2, 1.05, 0.25, 1.05));

    // Implied room split: a low divider wall between bedroom (left) and
    // play/living side (right), with a rug-width gap as the "door".
    g.add(box(wallDark, -0.6, 1.0, -4.6, 0.25, 1.4, 2.4));

    this.scene.add(g);
  }

  buildTrophyShelf() {
    // Wall shelf high on the back wall; refresh() drops a gold cup per
    // beaten boss, left to right in world order.
    const g = new THREE.Group();
    g.position.set(0.8, 2.55, -5.55);
    g.add(box(lambert(0x9a6b3f), 0, 0, 0, 4.6, 0.16, 0.7));
    g.add(box(lambert(0x855a33), -2.0, -0.35, 0.15, 0.14, 0.55, 0.35));
    g.add(box(lambert(0x855a33), 2.0, -0.35, 0.15, 0.14, 0.55, 0.35));
    this.scene.add(g);
    this.shelf = g;
  }

  buildClouds() {
    // Same blocky drifting clouds as the overworld, ringed around the island.
    this.clouds = [];
    const mat = lambert(0xffffff);
    const defs = [
      [-18, 8, -8, 0.5], [14, 10, -12, 0.4], [-12, 12, 14, 0.6],
      [18, 9, 8, 0.35], [0, 13, -16, 0.45],
    ];
    const underMat = lambert(0xd9e6f4);
    for (const [x, y, z, drift] of defs) {
      const gp = new THREE.Group();
      for (let j = 0; j < 3; j++) {
        const m = new THREE.Mesh(boxGeo, mat);
        m.scale.set(2.2 + j * 0.8, 0.9, 1.6 + (j % 2));
        m.position.set(j * 1.6 - 1.6, (j % 2) * 0.4, (j - 1) * 0.7);
        gp.add(m);
      }
      // Slightly shaded flat underside so the puffs read as one cloud.
      const under = new THREE.Mesh(boxGeo, underMat);
      under.scale.set(5.4, 0.4, 2.6);
      under.position.y = -0.5;
      gp.add(under);
      gp.position.set(x, y, z);
      gp.userData.drift = drift;
      this.scene.add(gp);
      this.clouds.push(gp);
    }
  }

  buildSky() {
    // Gradient skydome + matched fog so the floating island sits inside a real
    // sky instead of a flat blue void — the same trick level.js / overworld.js
    // use to feel "set in the world."
    const topCol = 0x5aa8e8;      // deep blue overhead
    const horizonCol = 0xdcecfa;  // pale haze at the horizon
    this.scene.background = new THREE.Color(topCol);
    this.scene.fog = new THREE.Fog(horizonCol, 55, 150);

    const cvs = document.createElement('canvas');
    cvs.width = 2;
    cvs.height = 256;
    const ctx = cvs.getContext('2d');
    const grad = ctx.createLinearGradient(0, 0, 0, 256);
    grad.addColorStop(0.0, '#5aa8e8');
    grad.addColorStop(0.55, '#9fd4f4');
    grad.addColorStop(1.0, '#e7f3fc');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2, 256);
    const tex = new THREE.CanvasTexture(cvs);
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(140, 24, 16),
      new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, fog: false, depthWrite: false })
    );
    dome.renderOrder = -2;
    this.scene.add(dome);

    // A soft sun with a halo, sitting in the visible back-left sky. Basic
    // material + fog:false so it stays bright no matter how far it is.
    const sun = new THREE.Group();
    const halo = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({
      color: 0xffe8a6, transparent: true, opacity: 0.35, fog: false, depthWrite: false,
    }));
    halo.scale.setScalar(26);
    const core = new THREE.Mesh(sphereGeo, new THREE.MeshBasicMaterial({ color: 0xfff4cf, fog: false }));
    core.scale.setScalar(13);
    sun.add(halo, core);
    sun.position.set(-58, 44, -78);
    this.scene.add(sun);
  }

  buildDistantLand() {
    // Hazy stepped hills and a sea plane far below the floating island, so
    // wherever the player swings the camera there's a world down there rather
    // than empty sky. The fog set in buildSky() melts the far edges into the
    // horizon, giving cheap depth (like level.js's parallax skyline).
    const layers = [
      { r: 64, y: -15, n: 24, h: 6, w: 8, col: 0x9cc0dd }, // far ring, blue-hazed
      { r: 46, y: -11, n: 18, h: 5, w: 7, col: 0x74ac6c }, // near ring, greener
    ];
    for (const L of layers) {
      const mat = lambert(L.col);
      for (let i = 0; i < L.n; i++) {
        const a = (i / L.n) * Math.PI * 2;
        const rr = L.r + Math.sin(i * 2.3) * 6;
        const hh = L.h + (Math.sin(i * 1.7) * 0.5 + 0.5) * L.h;
        this.scene.add(box(
          mat, Math.sin(a) * rr, L.y + hh / 2, Math.cos(a) * rr,
          L.w + Math.abs(Math.sin(i * 1.3)) * 3, hh, L.w + Math.abs(Math.cos(i)) * 3, a
        ));
      }
    }
    // Big flat sea/haze floor beneath it all so the horizon has a bottom.
    this.scene.add(box(lambert(0x9ccbe8), 0, -18, 0, 300, 0.5, 300));
  }

  // ---------- item builders ----------
  // Each returns a Group centered at origin, feet at y=0; refresh() places it
  // at itemPos and may register a tick closure via this.anims.

  makeRug() {
    const g = new THREE.Group();
    g.add(box(lambert(0xe25b5b), 0, 0.03, 0, 3.2, 0.06, 2.2));
    g.add(box(lambert(0xf2d0a0), 0, 0.065, 0, 2.4, 0.02, 1.5));
    return g;
  }

  makeChair() {
    const g = new THREE.Group();
    const wood = lambert(0x8d5a2b);
    g.add(box(lambert(0x5b8dd9), 0, 0.5, 0, 0.75, 0.14, 0.75)); // seat
    g.add(box(lambert(0x5b8dd9), 0, 0.95, -0.32, 0.75, 0.85, 0.12)); // back
    for (const [x, z] of [[-0.28, -0.28], [0.28, -0.28], [-0.28, 0.28], [0.28, 0.28]]) {
      g.add(box(wood, x, 0.22, z, 0.1, 0.45, 0.1));
    }
    g.rotation.y = -0.7; // faces the table
    return g;
  }

  makeTable() {
    const g = new THREE.Group();
    const wood = lambert(0xa9713a);
    g.add(box(wood, 0, 0.78, 0, 1.6, 0.12, 1.1));
    for (const [x, z] of [[-0.65, -0.4], [0.65, -0.4], [-0.65, 0.4], [0.65, 0.4]]) {
      g.add(box(lambert(0x8d5a2b), x, 0.36, z, 0.12, 0.72, 0.12));
    }
    // a little plate + cup so it feels lived-in
    g.add(box(lambert(0xffffff), -0.3, 0.87, 0, 0.45, 0.05, 0.45));
    g.add(box(lambert(0xff8c42), 0.4, 0.94, 0.15, 0.2, 0.24, 0.2));
    return g;
  }

  makeBed() {
    const g = new THREE.Group();
    g.add(box(lambert(0x8d5a2b), 0, 0.3, 0, 2.5, 0.5, 1.4)); // frame
    g.add(box(lambert(0x8d5a2b), -1.2, 0.75, 0, 0.14, 1.1, 1.4)); // headboard
    g.add(box(lambert(0x7ec8e3), 0.25, 0.66, 0, 1.9, 0.24, 1.3)); // blanket
    g.add(box(lambert(0xffffff), -0.85, 0.68, 0, 0.6, 0.22, 0.9)); // pillow
    g.add(box(lambert(0xffd54a), 0.5, 0.82, 0.25, 0.4, 0.1, 0.4)); // star patch
    return g;
  }

  makeLamp() {
    const g = new THREE.Group();
    g.add(box(lambert(0x555566), 0, 0.06, 0, 0.5, 0.12, 0.5));
    const pole = new THREE.Mesh(cylGeo, lambert(0x555566));
    pole.scale.set(0.12, 1.5, 0.12);
    pole.position.y = 0.85;
    const shade = new THREE.Mesh(coneGeo, lambert(0xffe082, 0x554400));
    shade.scale.set(0.85, 0.6, 0.85);
    shade.position.y = 1.8;
    g.add(pole, shade);
    return g;
  }

  makeBookshelf() {
    const g = new THREE.Group();
    g.add(box(lambert(0x9a6b3f), 0, 1.0, 0, 1.6, 2.0, 0.5));
    const bookCols = [0xe25b5b, 0x5b8dd9, 0x69d06a, 0xffd54a, 0xb877d9];
    for (let row = 0; row < 3; row++) {
      g.add(box(lambert(0x7a4f2a), 0, 0.45 + row * 0.6, 0.05, 1.44, 0.06, 0.44));
      for (let k = 0; k < 4; k++) {
        g.add(box(lambert(bookCols[(row * 2 + k) % 5]),
          -0.5 + k * 0.34, 0.72 + row * 0.6, 0.1, 0.22, 0.42, 0.3));
      }
    }
    return g;
  }

  makeToybox() {
    const g = new THREE.Group();
    g.add(box(lambert(0x69b0e0), 0, 0.4, 0, 1.4, 0.8, 0.9));
    g.add(box(lambert(0x4a90c4), 0, 0.86, 0, 1.5, 0.16, 1.0)); // lid, ajar
    g.children[1].rotation.x = -0.25;
    // toys spilling out
    const ball = new THREE.Mesh(sphereGeo, lambert(0xe25b5b));
    ball.scale.setScalar(0.35);
    ball.position.set(0.9, 0.18, 0.5);
    g.add(ball, box(lambert(0xffd54a), -0.15, 0.99, 0, 0.3, 0.3, 0.3, 0.6));
    return g;
  }

  makeFlowers() {
    const g = new THREE.Group();
    g.add(box(lambert(0x7a5230), 0, 0.09, 0, 2.4, 0.18, 1.3)); // dirt bed
    const cols = [0xff6b81, 0xffd93d, 0xff9ff3, 0x74b9ff, 0xff8c42];
    for (let k = 0; k < 5; k++) {
      const x = -0.9 + k * 0.45;
      g.add(box(lambert(0x3f9e3a), x, 0.4, 0, 0.07, 0.5, 0.07));
      const bloom = new THREE.Mesh(sphereGeo, lambert(cols[k]));
      bloom.scale.setScalar(0.3);
      bloom.position.set(x, 0.7, 0);
      g.add(bloom);
    }
    return g;
  }

  makeMailbox() {
    const g = new THREE.Group();
    g.add(box(lambert(0x8d5a2b), 0, 0.55, 0, 0.12, 1.1, 0.12));
    const bodyMat = lambert(0x5b8dd9);
    g.add(box(bodyMat, 0, 1.2, 0, 0.55, 0.4, 0.85));
    const top = new THREE.Mesh(cylGeo, bodyMat);
    top.scale.set(0.55, 0.85, 0.4);
    top.rotation.x = Math.PI / 2;
    top.position.y = 1.4;
    g.add(top);
    g.add(box(lambert(0xe25b5b), 0.32, 1.5, 0.25, 0.06, 0.34, 0.1)); // flag up
    g.rotation.y = 0.5;
    return g;
  }

  makeTree() {
    const g = new THREE.Group();
    const trunk = new THREE.Mesh(cylGeo, lambert(0x7a4f2a));
    trunk.scale.set(0.55, 1.8, 0.55);
    trunk.position.y = 0.9;
    g.add(trunk);
    g.add(box(lambert(0x3f9e3a), 0, 2.4, 0, 2.6, 1.6, 2.6));
    g.add(box(lambert(0x4cb545), 0, 3.4, 0, 1.7, 1.0, 1.7));
    const apple = new THREE.Mesh(sphereGeo, lambert(0xe25b5b));
    apple.scale.setScalar(0.24);
    apple.position.set(0.9, 1.9, 0.9);
    g.add(apple);
    return g;
  }

  makeSwing(anims) {
    const g = new THREE.Group();
    const wood = lambert(0xc98a4b);
    const legL1 = box(wood, -1.3, 1.1, -0.5, 0.15, 2.3, 0.15);
    legL1.rotation.x = 0.28;
    const legL2 = box(wood, -1.3, 1.1, 0.5, 0.15, 2.3, 0.15);
    legL2.rotation.x = -0.28;
    const legR1 = box(wood, 1.3, 1.1, -0.5, 0.15, 2.3, 0.15);
    legR1.rotation.x = 0.28;
    const legR2 = box(wood, 1.3, 1.1, 0.5, 0.15, 2.3, 0.15);
    legR2.rotation.x = -0.28;
    g.add(legL1, legL2, legR1, legR2);
    g.add(box(wood, 0, 2.2, 0, 3.0, 0.16, 0.16)); // top bar
    // swing seat hangs from a pivot group so it can sway in tick
    const pivot = new THREE.Group();
    pivot.position.set(0, 2.2, 0);
    pivot.add(box(lambert(0xbababa), -0.35, -0.65, 0, 0.05, 1.3, 0.05));
    pivot.add(box(lambert(0xbababa), 0.35, -0.65, 0, 0.05, 1.3, 0.05));
    pivot.add(box(lambert(0xe25b5b), 0, -1.3, 0, 0.9, 0.1, 0.45));
    g.add(pivot);
    anims.push((t) => { pivot.rotation.x = Math.sin(t * 1.4) * 0.28; });
    g.rotation.y = 0.9;
    return g;
  }

  makeTrampoline() {
    const g = new THREE.Group();
    const mat = new THREE.Mesh(cylGeo, lambert(0x2d3a55));
    mat.scale.set(2.4, 0.18, 2.4);
    mat.position.y = 0.66;
    g.add(mat);
    const rim = new THREE.Mesh(cylGeo, lambert(0x69d06a));
    rim.scale.set(2.7, 0.12, 2.7);
    rim.position.y = 0.78;
    g.add(rim);
    for (let k = 0; k < 4; k++) {
      const a = k * Math.PI / 2 + Math.PI / 4;
      g.add(box(lambert(0x888899), Math.cos(a) * 1.1, 0.33, Math.sin(a) * 1.1,
        0.1, 0.66, 0.1));
    }
    return g;
  }

  makeCat(anims) {
    const g = new THREE.Group();
    const fur = lambert(0xf0a04b);
    g.add(box(fur, 0, 0.32, 0, 0.85, 0.42, 0.45)); // body
    const head = box(fur, 0.45, 0.62, 0, 0.42, 0.4, 0.4);
    g.add(head);
    g.add(box(fur, 0.32, 0.9, -0.12, 0.12, 0.18, 0.08)); // ears
    g.add(box(fur, 0.32, 0.9, 0.12, 0.12, 0.18, 0.08));
    const dark = lambert(0x222222);
    g.add(box(dark, 0.66, 0.66, -0.1, 0.05, 0.07, 0.07)); // eyes
    g.add(box(dark, 0.66, 0.66, 0.1, 0.05, 0.07, 0.07));
    const tail = box(fur, -0.48, 0.55, 0, 0.1, 0.55, 0.1);
    tail.rotation.z = 0.4;
    g.add(tail);
    anims.push((t) => {
      tail.rotation.z = 0.4 + Math.sin(t * 3) * 0.25;      // tail swish
      head.position.y = 0.62 + Math.sin(t * 1.8) * 0.02;   // idle breathing
    });
    g.rotation.y = 2.2; // faces the camera-ish
    return g;
  }

  makeDog(anims) {
    const g = new THREE.Group();
    const fur = lambert(0xa9713a);
    const body = box(fur, 0, 0.4, 0, 1.05, 0.5, 0.55);
    g.add(body);
    const head = box(fur, 0.6, 0.78, 0, 0.5, 0.45, 0.45);
    g.add(head);
    g.add(box(lambert(0x7a4f2a), 0.5, 1.05, -0.2, 0.12, 0.28, 0.1)); // floppy ears
    g.add(box(lambert(0x7a4f2a), 0.5, 1.05, 0.2, 0.12, 0.28, 0.1));
    g.add(box(lambert(0x222222), 0.87, 0.72, 0, 0.1, 0.1, 0.14)); // nose
    for (const [x, z] of [[-0.35, -0.18], [-0.35, 0.18], [0.35, -0.18], [0.35, 0.18]]) {
      g.add(box(fur, x, 0.12, z, 0.14, 0.25, 0.14));
    }
    const tail = box(fur, -0.6, 0.62, 0, 0.09, 0.45, 0.09);
    tail.rotation.z = -0.6;
    g.add(tail);
    anims.push((t) => {
      tail.rotation.x = Math.sin(t * 9) * 0.5;                    // happy wag
      g.position.y = GRASS_Y + Math.abs(Math.sin(t * 2.2)) * 0.06; // little bounce
    });
    g.rotation.y = -2.0;
    return g;
  }

  makeAquarium(anims) {
    const g = new THREE.Group();
    g.add(box(lambert(0x8d5a2b), 0, 0.35, 0, 1.3, 0.7, 0.7)); // stand
    g.add(box(lambert(0x7ec8e3, 0x0a2a3a), 0, 1.05, 0, 1.2, 0.7, 0.6)); // water
    g.add(box(lambert(0x2d3a55), 0, 1.44, 0, 1.3, 0.08, 0.7)); // lid
    g.add(box(lambert(0xeed48e), 0, 0.74, 0, 1.1, 0.08, 0.5)); // sand
    const fish = box(lambert(0xff8c42), 0, 1.05, 0, 0.22, 0.14, 0.08);
    const tailFin = box(lambert(0xffd54a), -0.15, 1.05, 0, 0.1, 0.12, 0.04);
    g.add(fish, tailFin);
    anims.push((t) => { // fish circles the tank
      const a = t * 1.2;
      fish.position.set(Math.cos(a) * 0.35, 1.05 + Math.sin(t * 2.6) * 0.08, Math.sin(a) * 0.14);
      fish.rotation.y = -a + Math.PI / 2;
      tailFin.position.copy(fish.position);
      tailFin.rotation.y = fish.rotation.y;
      tailFin.translateX(-0.16);
    });
    return g;
  }

  makeTelescope() {
    const g = new THREE.Group();
    const legMat = lambert(0x555566);
    for (let k = 0; k < 3; k++) {
      const leg = box(legMat, 0, 0.55, 0, 0.08, 1.1, 0.08);
      leg.rotation.z = 0.35;
      leg.rotation.y = k * (Math.PI * 2 / 3);
      leg.rotateOnAxis(new THREE.Vector3(0, 0, 1), 0); // keep simple tripod lean
      leg.position.set(Math.sin(k * 2.1) * 0.3, 0.55, Math.cos(k * 2.1) * 0.3);
      g.add(leg);
    }
    const tube = new THREE.Mesh(cylGeo, lambert(0x5b8dd9));
    tube.scale.set(0.3, 1.2, 0.3);
    tube.position.y = 1.25;
    tube.rotation.z = 0.9; // aimed up at the sky through the open front
    tube.rotation.y = -0.5;
    g.add(tube);
    const lens = new THREE.Mesh(cylGeo, lambert(0xffd54a, 0x554400));
    lens.scale.set(0.34, 0.1, 0.34);
    lens.position.set(0.48, 1.62, -0.25);
    lens.rotation.copy(tube.rotation);
    g.add(lens);
    return g;
  }

  makeRobot(anims) {
    const g = new THREE.Group();
    const metal = lambert(0x9fb4c8);
    g.add(box(metal, 0, 0.5, 0, 0.6, 0.7, 0.45)); // torso
    g.add(box(lambert(0xe25b5b), 0, 0.55, 0.24, 0.2, 0.2, 0.05)); // chest button
    const head = new THREE.Group();
    head.position.y = 1.05;
    head.add(box(metal, 0, 0, 0, 0.45, 0.4, 0.4));
    head.add(box(lambert(0x69f0ae, 0x1a4a2a), -0.1, 0.02, 0.21, 0.1, 0.1, 0.04));
    head.add(box(lambert(0x69f0ae, 0x1a4a2a), 0.1, 0.02, 0.21, 0.1, 0.1, 0.04));
    head.add(box(lambert(0xffd54a), 0, 0.32, 0, 0.05, 0.24, 0.05)); // antenna
    g.add(head);
    g.add(box(metal, -0.42, 0.55, 0, 0.14, 0.5, 0.14)); // arms
    g.add(box(metal, 0.42, 0.55, 0, 0.14, 0.5, 0.14));
    g.add(box(lambert(0x6b7a8a), -0.16, 0.08, 0, 0.2, 0.16, 0.3)); // tread feet
    g.add(box(lambert(0x6b7a8a), 0.16, 0.08, 0, 0.2, 0.16, 0.3));
    anims.push((t) => { head.rotation.y = t * 0.6; }); // slow head spin
    g.rotation.y = 0.8;
    return g;
  }

  makeRocket(anims) {
    const g = new THREE.Group();
    const bodyMat = lambert(0xe8e0d2);
    const body = new THREE.Mesh(cylGeo, bodyMat);
    body.scale.set(1.0, 2.2, 1.0);
    body.position.y = 1.6;
    const nose = new THREE.Mesh(coneGeo, lambert(0xe25b5b));
    nose.scale.set(1.0, 0.9, 1.0);
    nose.position.y = 3.15;
    g.add(body, nose);
    g.add(box(lambert(0x7ec8e3, 0x0a2a3a), 0, 2.1, 0.48, 0.4, 0.4, 0.12)); // porthole
    for (let k = 0; k < 3; k++) { // fins
      const fin = box(lambert(0xe25b5b), 0, 0.55, 0, 0.14, 1.0, 0.7);
      const a = k * (Math.PI * 2 / 3);
      fin.position.set(Math.sin(a) * 0.55, 0.55, Math.cos(a) * 0.55);
      fin.rotation.y = a;
      g.add(fin);
    }
    const pos = this.itemPos.rocket;
    anims.push((t, dt) => { // occasional engine sparkle puff
      if (Math.random() < dt * 0.7) {
        this.effects.sparkle(new THREE.Vector3(pos[0], 0.4, pos[2]));
      }
    });
    return g;
  }

  // ---------- boss-prize builders ----------

  makeGolemStatue() {
    // Mini Meatball Monster on a stone pedestal, extra saucy.
    const g = new THREE.Group();
    g.add(box(lambert(0x9c9c8a), 0, 0.15, 0, 1.1, 0.3, 1.1)); // pedestal
    const meat = lambert(0x8a4b2d);
    g.add(box(meat, 0, 0.75, 0, 0.7, 0.9, 0.5)); // body
    g.add(box(lambert(0xc0392b), 0, 1.16, 0, 0.76, 0.14, 0.56)); // sauce drizzle
    g.add(box(lambert(0x9c5a36), 0, 1.45, 0, 0.5, 0.45, 0.45)); // head
    const dark = lambert(0x222222);
    g.add(box(dark, -0.12, 1.5, 0.21, 0.09, 0.09, 0.06)); // eyes
    g.add(box(dark, 0.12, 1.5, 0.21, 0.09, 0.09, 0.06));
    g.add(box(meat, -0.5, 0.85, 0, 0.22, 0.6, 0.22)); // arms
    g.add(box(meat, 0.5, 0.85, 0, 0.22, 0.6, 0.22));
    g.add(box(lambert(0xf5deb3), 0.08, 1.76, 0, 0.18, 0.16, 0.18)); // spaghetti tuft
    g.add(box(lambert(0xf5deb3), -0.1, 1.82, 0.06, 0.24, 0.1, 0.14));
    g.add(box(lambert(0xe74c3c), 0.14, 1.88, 0.08, 0.1, 0.1, 0.1)); // cherry tomato
    g.rotation.y = 0.6; // faces the camera-ish
    return g;
  }

  makeSerpentStatue() {
    // Syrup serpent rearing out of a waffle mound in an S-curve.
    const g = new THREE.Group();
    const syrup = lambert(0x8a4a1a);
    g.add(box(lambert(0xc98a3b), 0, 0.12, 0, 1.6, 0.24, 1.3)); // waffle mound
    g.add(box(syrup, -0.35, 0.35, 0, 0.7, 0.35, 0.4)); // tail coil
    g.add(box(syrup, 0.15, 0.55, 0, 0.5, 0.4, 0.4));
    g.add(box(syrup, 0.35, 1.0, 0, 0.4, 0.7, 0.38)); // rising body
    const head = box(syrup, 0.35, 1.55, 0.05, 0.55, 0.4, 0.44);
    g.add(head);
    g.add(box(lambert(0xffe082), 0.35, 1.81, 0.05, 0.24, 0.12, 0.24)); // butter pat
    const dark = lambert(0x222222);
    g.add(box(dark, 0.22, 1.62, 0.28, 0.08, 0.08, 0.05)); // eyes
    g.add(box(dark, 0.48, 1.62, 0.28, 0.08, 0.08, 0.05));
    g.add(box(lambert(0xe25b5b), 0.35, 1.42, 0.3, 0.08, 0.14, 0.06)); // tongue
    g.rotation.y = 2.4;
    return g;
  }

  makeYetiSnowman(anims) {
    // Snowman version of the Frost Yeti, scarf and all.
    const g = new THREE.Group();
    const snow = lambert(0xeef6ff);
    const base = new THREE.Mesh(sphereGeo, snow);
    base.scale.set(1.3, 1.1, 1.3);
    base.position.y = 0.5;
    const belly = new THREE.Mesh(sphereGeo, snow);
    belly.scale.setScalar(0.95);
    belly.position.y = 1.35;
    const head = new THREE.Mesh(sphereGeo, snow);
    head.scale.setScalar(0.65);
    head.position.y = 2.05;
    g.add(base, belly, head);
    g.add(box(lambert(0x5b8dd9), 0, 1.68, 0, 0.75, 0.16, 0.7)); // scarf wrap
    g.add(box(lambert(0x5b8dd9), 0.25, 1.4, 0.3, 0.16, 0.45, 0.1)); // scarf tail
    const dark = lambert(0x222222);
    g.add(box(dark, -0.12, 2.12, 0.28, 0.08, 0.08, 0.05)); // coal eyes
    g.add(box(dark, 0.12, 2.12, 0.28, 0.08, 0.08, 0.05));
    const nose = new THREE.Mesh(coneGeo, lambert(0xff8c42)); // carrot
    nose.scale.set(0.14, 0.4, 0.14);
    nose.rotation.x = Math.PI / 2;
    nose.position.set(0, 2.0, 0.45);
    g.add(nose);
    const armL = box(lambert(0x7a4f2a), -0.75, 1.5, 0, 0.6, 0.08, 0.08, 0);
    armL.rotation.z = 0.5;
    const armR = box(lambert(0x7a4f2a), 0.75, 1.5, 0, 0.6, 0.08, 0.08, 0);
    armR.rotation.z = -0.5;
    g.add(armL, armR);
    anims.push((t) => { armR.rotation.z = -0.5 + Math.sin(t * 2.4) * 0.2; }); // waves hello
    return g;
  }

  makeCabbageCrown() {
    // A crisp little royal crown on a plum cushion for Purple Cabbage Swamp.
    const g = new THREE.Group();
    const gold = lambert(0xd9b36a, 0x5a4000);
    const leaf = lambert(0x9c5bb0, 0x2b0d35);
    const vein = lambert(0xd9c2e8);
    g.add(box(lambert(0x5a4632), 0, 0.12, 0, 0.9, 0.24, 0.9)); // display base
    g.add(box(lambert(0x6e4059), 0, 0.34, 0, 0.62, 0.2, 0.62)); // cushion

    const band = new THREE.Mesh(cylGeo, gold);
    band.scale.set(0.46, 0.16, 0.46);
    band.position.y = 0.62;
    const center = new THREE.Mesh(cylGeo, lambert(0x6e4059));
    center.scale.set(0.28, 0.18, 0.28);
    center.position.y = 0.66;
    g.add(band, center);

    for (let k = 0; k < 6; k++) {
      const a = k * (Math.PI * 2 / 6);
      const x = Math.sin(a) * 0.36;
      const z = Math.cos(a) * 0.36;
      const point = new THREE.Mesh(coneGeo, leaf);
      point.scale.set(0.16, 0.48, 0.16);
      point.position.set(x, 0.96, z);
      point.rotation.y = a;
      g.add(point);
      const rib = box(vein, x, 0.98, z, 0.04, 0.32, 0.04);
      rib.rotation.y = a;
      g.add(rib);
    }
    g.rotation.y = -0.35;
    return g;
  }

  makeCrystalLamp(anims) {
    // Glowing crystal cluster from the caves on a dark wood base.
    const g = new THREE.Group();
    g.add(box(lambert(0x5a4632), 0, 0.1, 0, 0.9, 0.2, 0.9));
    const shards = [];
    const defs = [
      [0, 1.0, 0, 0, 0.34, 0],           // tall center
      [-0.24, 0.6, 0.14, 0.35, 0.2, 0],  // leaners
      [0.26, 0.55, -0.1, -0.3, 0.18, 0.2],
      [0.1, 0.45, 0.24, 0.2, 0.14, -0.25],
    ];
    for (const [x, h, z, rz, s, rx] of defs) {
      const shard = new THREE.Mesh(coneGeo, lambert(0x9f6fd4, 0x3a2260));
      shard.scale.set(s, h, s);
      shard.position.set(x, h / 2 + 0.2, z);
      shard.rotation.set(rx, 0, rz);
      g.add(shard);
      shards.push(shard);
    }
    anims.push((t) => { // slow twinkle: shards breathe a touch
      const k = 1 + Math.sin(t * 2.2) * 0.06;
      shards.forEach((s, i) => { s.scale.x = s.scale.z = defs[i][4] * k; });
    });
    return g;
  }

  makeDragonKite(anims) {
    // Pepper-dragon kite tugging at a stake, always flying in the yard corner.
    const g = new THREE.Group();
    g.add(box(lambert(0x8d5a2b), 0, 0.25, 0, 0.14, 0.5, 0.14)); // stake
    const kite = new THREE.Group();
    const sail = box(lambert(0xd63a2a, 0x3a1008), 0, 0, 0, 1.1, 1.1, 0.08, 0);
    sail.rotation.z = Math.PI / 4; // diamond
    kite.add(sail);
    kite.add(box(lambert(0x3f9e3a), 0, 0.1, 0.06, 0.34, 0.3, 0.06)); // stem-nub crest
    kite.add(box(lambert(0x222222), -0.07, 0.14, 0.1, 0.06, 0.06, 0.04));
    kite.add(box(lambert(0x222222), 0.07, 0.14, 0.1, 0.06, 0.06, 0.04));
    const tails = [];
    for (let k = 0; k < 3; k++) { // ribbon tail
      const bow = box(lambert([0xff9a3c, 0xffb25a, 0xff7a2e][k]),
        0, -0.95 - k * 0.35, 0, 0.3, 0.12, 0.05);
      kite.add(bow);
      tails.push(bow);
    }
    kite.position.set(0.5, 3.2, 0.3);
    g.add(kite);
    // string: a thin stretched box from stake to kite (close enough at
    // this scale, re-aimed every frame as the kite bobs)
    const string = box(lambert(0xffffff), 0, 0, 0, 0.03, 1, 0.03);
    g.add(string);
    const stakeTop = new THREE.Vector3(0, 0.5, 0);
    anims.push((t) => {
      kite.position.x = 0.5 + Math.sin(t * 0.9) * 0.5;
      kite.position.y = 3.2 + Math.sin(t * 1.3) * 0.35;
      kite.rotation.z = Math.sin(t * 1.1) * 0.18;
      tails.forEach((b, i) => { b.position.x = Math.sin(t * 2.2 - i * 0.9) * 0.18; });
      // stretch the string between stake top and kite
      const mid = kite.position.clone().add(stakeTop).multiplyScalar(0.5);
      string.position.copy(mid);
      const d = kite.position.clone().sub(stakeTop);
      string.scale.y = d.length();
      string.rotation.z = Math.atan2(-d.x, d.y);
    });
    return g;
  }

  // Game-complete reward: a big golden hero cup with a star, on a stone
  // pedestal in the front yard. Granted by the finale, never in the shop.
  makeHeroTrophy(anims) {
    const g = new THREE.Group();
    const gold = lambert(0xffd54a, 0x6b5200);
    g.add(box(lambert(0xb7bec9), 0, 0.3, 0, 1.1, 0.6, 1.1)); // pedestal
    g.add(box(lambert(0x9aa2ad), 0, 0.66, 0, 0.85, 0.12, 0.85));
    g.add(box(gold, 0, 0.82, 0, 0.6, 0.2, 0.6)); // cup base
    const stem = new THREE.Mesh(cylGeo, gold);
    stem.scale.set(0.18, 0.35, 0.18);
    stem.position.y = 1.08;
    const cup = new THREE.Mesh(cylGeo, gold);
    cup.scale.set(0.62, 0.55, 0.62);
    cup.position.y = 1.5;
    g.add(stem, cup);
    g.add(box(gold, -0.42, 1.55, 0, 0.12, 0.36, 0.12)); // handles
    g.add(box(gold, 0.42, 1.55, 0, 0.12, 0.36, 0.12));
    // Chunky star on top (two crossed slabs read as a star from the 3/4 cam).
    const starA = box(gold, 0, 2.05, 0, 0.5, 0.5, 0.12);
    starA.rotation.z = Math.PI / 4;
    g.add(starA, box(gold, 0, 2.05, 0, 0.5, 0.5, 0.12));
    const pos = this.itemPos.herotrophy;
    anims.push((t, dt) => { // proud occasional sparkle
      if (Math.random() < dt * 0.5) {
        this.effects.sparkle(new THREE.Vector3(pos[0], 1.8, pos[2]));
      }
    });
    return g;
  }

  makeTrophy(worldIdx) {
    // Small gold cup, tinted per world, standing on the shelf.
    const g = new THREE.Group();
    const gold = lambert(TROPHY_TINTS[worldIdx % TROPHY_TINTS.length], 0x4a3800);
    g.add(box(gold, 0, 0.05, 0, 0.3, 0.1, 0.3)); // base
    const stem = new THREE.Mesh(cylGeo, gold);
    stem.scale.set(0.09, 0.16, 0.09);
    stem.position.y = 0.17;
    const cup = new THREE.Mesh(cylGeo, gold);
    cup.scale.set(0.3, 0.28, 0.3);
    cup.position.y = 0.4;
    g.add(stem, cup);
    g.add(box(gold, -0.2, 0.42, 0, 0.07, 0.18, 0.07)); // handles
    g.add(box(gold, 0.2, 0.42, 0, 0.07, 0.18, 0.07));
    return g;
  }

  // ---------- state sync ----------

  buildItem(id) {
    const builders = {
      rug: () => this.makeRug(),
      chair: () => this.makeChair(),
      table: () => this.makeTable(),
      bed: () => this.makeBed(),
      lamp: () => this.makeLamp(),
      bookshelf: () => this.makeBookshelf(),
      toybox: () => this.makeToybox(),
      flowers: () => this.makeFlowers(),
      mailbox: () => this.makeMailbox(),
      tree: () => this.makeTree(),
      swing: () => this.makeSwing(this.anims),
      trampoline: () => this.makeTrampoline(),
      cat: () => this.makeCat(this.anims),
      dog: () => this.makeDog(this.anims),
      aquarium: () => this.makeAquarium(this.anims),
      telescope: () => this.makeTelescope(),
      robot: () => this.makeRobot(this.anims),
      rocket: () => this.makeRocket(this.anims),
      golemstatue: () => this.makeGolemStatue(),
      serpentstatue: () => this.makeSerpentStatue(),
      yetisnowman: () => this.makeYetiSnowman(this.anims),
      cabbagecrown: () => this.makeCabbageCrown(),
      crystallamp: () => this.makeCrystalLamp(this.anims),
      dragonkite: () => this.makeDragonKite(this.anims),
      herotrophy: () => this.makeHeroTrophy(this.anims),
    };
    const make = builders[id];
    if (!make) return null;
    const g = make();
    const pos = this.itemPos[id];
    if (pos) {
      // group-level idle bounces (dog) offset from the item's ground y
      g.position.x += pos[0];
      g.position.y += pos[1];
      g.position.z += pos[2];
    }
    return g;
  }

  // Idempotent: adds newly-owned items and newly-beaten trophies exactly once.
  // A running ceremony owns the reveal of its cup + decoration, so those two
  // are skipped here and placed by the ceremony script instead.
  refresh() {
    const owned = (store.get().house || {}).owned || {};
    for (const id of Object.keys(owned)) {
      if (!owned[id] || this.built[id]) continue;
      if (this.ceremony && this.ceremony.decorId === id) continue;
      const g = this.buildItem(id);
      if (!g) continue;
      this.built[id] = g;
      this.scene.add(g);
    }
    for (let w = 0; w < WORLD_TROPHY_COUNT; w++) {
      if (this.ceremony && this.ceremony.world === w) continue;
      if (!store.isBossBeaten(w) || this.trophies[w]) continue;
      const t = this.makeTrophy(w);
      t.position.set(trophyShelfX(w), 0.08, 0); // left to right along the shelf
      this.shelf.add(t);
      this.trophies[w] = t;
    }
  }

  // Sparkle + confetti where the item just appeared (called post-refresh).
  celebrate(itemId) {
    const pos = this.itemPos[itemId];
    if (!pos) return;
    const p = new THREE.Vector3(pos[0], pos[1] + 1.2, pos[2]);
    this.effects.confetti(p);
    this.effects.sparkle(p);
  }

  // ---------- trophy ceremony (after a boss falls) ----------

  // Short scripted payoff on a first boss win: the camera pulls in on the
  // shelf, the new cup drops with fx, then the boss's decoration pops into
  // its spot. decorId must already be awarded in the store. Leaving early
  // (MAP button) is safe — exit() snaps everything to its final state.
  beginCeremony(worldIdx, decorId, onDone = null) {
    this.ceremony = { world: worldIdx, decorId, onDone, t: 0, stage: 'fall' };
    this.enter();
    // Spawn this world's cup above its slot; refresh() (via enter) skips it
    // because this.trophies[worldIdx] is set before the next refresh call.
    if (!this.trophies[worldIdx]) {
      const cup = this.makeTrophy(worldIdx);
      cup.position.set(trophyShelfX(worldIdx), 1.7, 0);
      this.shelf.add(cup);
      this.trophies[worldIdx] = cup;
    }
    this.ceremony.trophy = this.trophies[worldIdx];
    // Inside the room, looking slightly down so the cups sit proud of the
    // shelf plank instead of hiding behind its front edge.
    this.ceremonyCam = {
      pos: new THREE.Vector3(2.0, 3.4, 0.4),
      look: new THREE.Vector3(0.8, 2.45, -5.55),
    };
    speak('You beat the castle! Time for your trophy!', { rate: 1.0 });
  }

  updateCeremony(dt) {
    const c = this.ceremony;
    c.t += dt;
    if (c.stage === 'fall') {
      // Cup drops onto the shelf after a short beat for the intro line.
      const k = Math.max(0, Math.min(1, (c.t - 1.2) / 0.8));
      c.trophy.position.y = 1.7 - (1.7 - 0.08) * k * k;
      if (k >= 1) {
        c.stage = 'landed';
        c.t = 0;
        const p = new THREE.Vector3();
        c.trophy.getWorldPosition(p);
        this.effects.confetti(p);
        this.effects.sparkle(p);
        sfxFireworks();
        speak('A new trophy for your shelf!', { rate: 1.0 });
      }
    } else if (c.stage === 'landed') {
      c.trophy.rotation.y += dt * 3; // victory spin while the line plays
      if (c.t > 2.4) {
        c.trophy.rotation.y = 0;
        c.t = 0;
        const item = c.decorId && getItem(c.decorId);
        if (item) {
          c.stage = 'decor';
          if (!this.built[c.decorId]) {
            const g = this.buildItem(c.decorId);
            if (g) {
              this.built[c.decorId] = g;
              this.scene.add(g);
            }
          }
          this.celebrate(c.decorId);
          sfxCorrect();
          speak(`You won the ${item.name}! What a prize!`, { rate: 1.0 });
          // Close offset shot of the new prize; stays inside for interior
          // prizes and in open air for the yard.
          const pos = this.itemPos[c.decorId];
          this.ceremonyCam = {
            pos: new THREE.Vector3(pos[0] + 3.2, pos[1] + 3.4, pos[2] + 5.2),
            look: new THREE.Vector3(pos[0], pos[1] + 1.0, pos[2]),
          };
        } else {
          c.stage = 'end';
        }
      }
    } else if (c.stage === 'decor') {
      if (c.t > 3.2) c.stage = 'end';
    } else {
      this.endCeremony();
    }
  }

  // Idempotent wrap-up: snap the cup home, hand the camera back to the
  // normal drift, and fire onDone once.
  endCeremony() {
    const c = this.ceremony;
    if (!c) return;
    this.ceremony = null;
    this.ceremonyCam = null;
    c.trophy.position.y = 0.08;
    c.trophy.rotation.y = 0;
    if (c.onDone) c.onDone();
  }

  // ---------- tap-to-walk ----------

  attachInput() {
    const el = this.renderer.domElement;
    this.raycaster = new THREE.Raycaster();
    el.style.touchAction = 'none'; // let us own drag/pinch gestures

    // One-finger drag orbits the camera; two-finger pinch (or wheel) zooms;
    // a press that never turns into a drag falls through to tap-to-walk.
    const pointers = new Map(); // pointerId -> { x, y }
    let down = null;   // first-finger down position, for tap detection
    let dragging = false;
    let pinchDist = 0;

    const onDown = (e) => {
      if (!this.active) return;
      if (e.target && e.target.closest && e.target.closest('button')) return;
      pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pointers.size === 1) {
        down = { x: e.clientX, y: e.clientY };
        dragging = false;
      } else if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
        dragging = true; // two fingers is never a tap
      }
    };

    const onMove = (e) => {
      if (!this.active || !pointers.has(e.pointerId)) return;
      const prev = pointers.get(e.pointerId);
      const px = prev.x, py = prev.y;
      prev.x = e.clientX;
      prev.y = e.clientY;

      if (pointers.size >= 2) {
        // Pinch: fingers apart => zoom in (distance shrinks).
        const [a, b] = [...pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (pinchDist > 0) this.zoomBy((pinchDist - d) * 0.05);
        pinchDist = d;
        return;
      }
      // Single-finger drag orbits once it clears the tap threshold.
      if (!down) return;
      if (!dragging && Math.hypot(e.clientX - down.x, e.clientY - down.y) > 10) dragging = true;
      if (dragging) this.orbitBy((e.clientX - px) * 0.006, (e.clientY - py) * 0.006);
    };

    const onUp = (e) => {
      if (!this.active) return;
      const wasTap = pointers.size === 1 && !dragging && down &&
        Math.hypot(e.clientX - down.x, e.clientY - down.y) <= 10;
      pointers.delete(e.pointerId);
      if (pointers.size < 2) pinchDist = 0;
      if (pointers.size === 0) { down = null; dragging = false; }
      if (wasTap) this.tap(e.clientX, e.clientY);
    };

    const onWheel = (e) => {
      if (!this.active) return;
      e.preventDefault();
      this.zoomBy(e.deltaY * 0.01);
    };

    if (window.PointerEvent) {
      el.addEventListener('pointerdown', onDown);
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onUp);
      el.addEventListener('wheel', onWheel, { passive: false });
    } else {
      // Legacy fallback: mouse drag orbits, wheel zooms, click walks.
      let mdown = null, mdrag = false, mprev = null;
      el.addEventListener('mousedown', (e) => {
        if (!this.active) return;
        if (e.target && e.target.closest && e.target.closest('button')) return;
        mdown = { x: e.clientX, y: e.clientY };
        mprev = { x: e.clientX, y: e.clientY };
        mdrag = false;
      });
      window.addEventListener('mousemove', (e) => {
        if (!this.active || !mdown) return;
        if (!mdrag && Math.hypot(e.clientX - mdown.x, e.clientY - mdown.y) > 10) mdrag = true;
        if (mdrag) this.orbitBy((e.clientX - mprev.x) * 0.006, (e.clientY - mprev.y) * 0.006);
        mprev = { x: e.clientX, y: e.clientY };
      });
      window.addEventListener('mouseup', (e) => {
        if (!this.active || !mdown) return;
        const tap = !mdrag && Math.hypot(e.clientX - mdown.x, e.clientY - mdown.y) <= 10;
        mdown = null;
        if (tap) this.tap(e.clientX, e.clientY);
      });
      el.addEventListener('wheel', onWheel, { passive: false });
    }
  }

  tap(cx, cy) {
    const ndc = new THREE.Vector2(
      (cx / window.innerWidth) * 2 - 1,
      -(cy / window.innerHeight) * 2 + 1
    );
    this.raycaster.setFromCamera(ndc, this.camera);
    const hits = this.raycaster.intersectObjects(
      [this.floorMesh, this.grassMesh], false
    );
    if (!hits.length) return;
    const p = hits[0].point;
    const target = this.clampTarget({ x: p.x, z: p.z });
    const pts = this.routeTo(target);
    if (!pts) return;
    // Cumulative arc length so the kid walks at constant speed.
    const cum = [0];
    for (let i = 1; i < pts.length; i++) {
      cum.push(cum[i - 1] + Math.hypot(pts[i].x - pts[i - 1].x, pts[i].z - pts[i - 1].z));
    }
    const dist = cum[cum.length - 1];
    if (dist < 0.15) return; // tapped where the kid already stands
    this.walkPath = { pts, cum, dist, s: 0, seg: 0 };
    this.effects.sparkle(new THREE.Vector3(
      target.x, this.groundY(target) + 0.3, target.z
    ));
  }

  // Interior taps stay inside the walls; yard taps stay on the lawn.
  clampTarget(p) {
    const r = inRect(FOOT, p.x, p.z) ? INSIDE : LAWN;
    return {
      x: Math.max(r.minX, Math.min(r.maxX, p.x)),
      z: Math.max(r.minZ, Math.min(r.maxZ, p.z)),
    };
  }

  groundY(p) {
    return inRect(FOOT, p.x, p.z) ? FLOOR_Y : GRASS_Y;
  }

  // True if the straight a->b line clips the house footprint (sampled).
  crossesHouse(a, b) {
    const steps = Math.ceil(Math.hypot(b.x - a.x, b.z - a.z) / 0.4);
    for (let k = 1; k < steps; k++) {
      const t = k / steps;
      if (inRect(FOOT, a.x + (b.x - a.x) * t, a.z + (b.z - a.z) * t)) return true;
    }
    return false;
  }

  // Shortest outdoor path around the house via its yard corners (Dijkstra
  // over start + 4 corners + goal; edges are footprint-free straight lines).
  outdoorLeg(a, b) {
    if (!this.crossesHouse(a, b)) return [b];
    const nodes = [
      a,
      { x: FOOT.minX - 1.1, z: FOOT.maxZ + 1.0 }, { x: FOOT.maxX + 1.1, z: FOOT.maxZ + 1.0 },
      { x: FOOT.minX - 1.1, z: FOOT.minZ - 1.0 }, { x: FOOT.maxX + 1.1, z: FOOT.minZ - 1.0 },
      b,
    ];
    const n = nodes.length;
    const dist = Array(n).fill(Infinity);
    const prev = Array(n).fill(-1);
    const done = Array(n).fill(false);
    dist[0] = 0;
    for (;;) {
      let u = -1;
      for (let i = 0; i < n; i++) if (!done[i] && (u < 0 || dist[i] < dist[u])) u = i;
      if (u < 0 || dist[u] === Infinity || u === n - 1) break;
      done[u] = true;
      for (let v = 1; v < n; v++) {
        if (done[v] || this.crossesHouse(nodes[u], nodes[v])) continue;
        const d = dist[u] + Math.hypot(nodes[v].x - nodes[u].x, nodes[v].z - nodes[u].z);
        if (d < dist[v]) { dist[v] = d; prev[v] = u; }
      }
    }
    if (prev[n - 1] < 0) return [b]; // shouldn't happen; walk straight
    const out = [];
    for (let v = n - 1; v > 0; v = prev[v]) out.unshift(nodes[v]);
    return out;
  }

  // Waypoints from the kid to the target: through the front doorway when
  // crossing inside<->outside, around the yard corners when the straight
  // outdoor line would clip the house, and through the room-divider gap
  // when crossing between the two rooms at the back.
  routeTo(target) {
    const from = { x: this.kid.position.x, z: this.kid.position.z };
    const aIn = inRect(FOOT, from.x, from.z);
    const bIn = inRect(FOOT, target.x, target.z);
    const pts = [from];
    if (aIn !== bIn) {
      const doorX = Math.max(-DOOR_HALF, Math.min(DOOR_HALF, (aIn ? from : target).x));
      const inner = { x: doorX, z: 0.4 };
      const outer = { x: doorX, z: 2.0 };
      if (aIn) {
        pts.push(inner, outer, ...this.outdoorLeg(outer, target));
      } else {
        pts.push(...this.outdoorLeg(from, outer), inner, target);
      }
    } else if (!aIn) {
      pts.push(...this.outdoorLeg(from, target));
    } else {
      // Divider wall at x=-0.6 spans z -5.8..-3.4; detour via its gap when
      // the straight line would cross it.
      if ((from.x + 0.6) * (target.x + 0.6) < 0) {
        const t = (-0.6 - from.x) / (target.x - from.x);
        const zc = from.z + (target.z - from.z) * t;
        if (zc < -3.2) pts.push({ x: -0.6, z: -2.7 });
      }
      pts.push(target);
    }
    if (pts[pts.length - 1] !== target) pts.push(target);
    return pts;
  }

  updateWalk(dt) {
    const w = this.walkPath;
    const parts = this.kid.userData.parts;
    w.s = Math.min(w.dist, w.s + dt * WALK_SPEED);
    while (w.seg < w.pts.length - 2 && w.cum[w.seg + 1] < w.s) w.seg++;
    const a = w.pts[w.seg];
    const b = w.pts[w.seg + 1];
    const segLen = w.cum[w.seg + 1] - w.cum[w.seg];
    const f = segLen > 0 ? (w.s - w.cum[w.seg]) / segLen : 1;
    const px = a.x + (b.x - a.x) * f;
    const pz = a.z + (b.z - a.z) * f;
    // Face the walk direction (+x local forward), easing the turn.
    const want = Math.atan2(a.z - b.z, b.x - a.x);
    let dr = want - this.kid.rotation.y;
    dr = Math.atan2(Math.sin(dr), Math.cos(dr));
    this.kid.rotation.y += dr * (1 - Math.exp(-dt * 12));
    // Ease over the floor <-> lawn step instead of popping.
    this.kidY += (this.groundY({ x: px, z: pz }) - this.kidY) * (1 - Math.exp(-dt * 10));
    const phase = w.s * 6;
    this.kid.position.set(px, this.kidY + Math.abs(Math.sin(phase)) * 0.06, pz);
    const swing = Math.sin(phase);
    parts.legL.rotation.z = -swing * 0.7;
    parts.legR.rotation.z = swing * 0.7;
    parts.armL.rotation.z = swing * 0.7;
    parts.armR.rotation.z = -swing * 0.7;
    if (w.s >= w.dist) {
      const end = w.pts[w.pts.length - 1];
      this.kidY = this.groundY(end);
      this.kid.position.set(end.x, this.kidY, end.z);
      parts.legL.rotation.z = parts.legR.rotation.z = 0;
      parts.armL.rotation.z = parts.armR.rotation.z = 0;
      this.walkPath = null;
    }
  }

  // ---------- lifecycle ----------

  enter() {
    this.active = true;
    this.refresh();
    // Pick up any character edits made since the last visit, and start the
    // kid back on the stone path facing the camera.
    applyLook(this.kid, currentLook());
    this.walkPath = null;
    this.kidY = GRASS_Y;
    this.kid.position.copy(this.kidHome);
    this.kid.rotation.y = -Math.PI / 4;
    this.resetCam();
    this.camera.position.copy(this.camBase);
    this.camera.lookAt(this.camLook);
  }

  exit() {
    // Leaving mid-ceremony (MAP button) finalizes it: cup snapped to its
    // slot, and the skipped decoration appears on the next refresh().
    this.endCeremony();
    this.active = false;
  }

  tick(dt) {
    if (!this.active) return;
    const t = performance.now() / 1000;

    for (const c of this.clouds) {
      c.position.x += c.userData.drift * dt;
      if (c.position.x > 26) c.position.x = -26;
    }

    for (const fn of this.anims) fn(t, dt);

    if (this.walkPath) {
      this.updateWalk(dt);
    } else {
      // Idle: tiny bob, easing back to camera-facing after a walk.
      this.kid.position.y = this.kidY + Math.abs(Math.sin(t * 2)) * 0.04;
      let dr = -Math.PI / 4 - this.kid.rotation.y;
      dr = Math.atan2(Math.sin(dr), Math.cos(dr));
      this.kid.rotation.y += dr * (1 - Math.exp(-dt * 8));
    }

    if (this.ceremony) this.updateCeremony(dt);

    if (this.ceremonyCam) {
      // Ease toward the ceremony shot (shelf close-up, then the new prize).
      const k = 1 - Math.exp(-dt * 3);
      this.camera.position.lerp(this.ceremonyCam.pos, k);
      this.camLerpLook = (this.camLerpLook || this.camLook.clone()).lerp(this.ceremonyCam.look, k);
      this.camera.lookAt(this.camLerpLook);
    } else {
      // Orbit view from the player's yaw/pitch/distance, plus a very slow
      // idle wobble so the diorama still feels alive when left alone.
      this.camLerpLook = null;
      const cp = Math.cos(this.camPitch);
      const horiz = this.camDist * cp;
      this.camera.position.set(
        this.camFocus.x + horiz * Math.sin(this.camYaw) + Math.sin(t * 0.12) * 0.5,
        this.camFocus.y + this.camDist * Math.sin(this.camPitch) + Math.sin(t * 0.09) * 0.25,
        this.camFocus.z + horiz * Math.cos(this.camYaw) + Math.cos(t * 0.12) * 0.5
      );
      this.camera.lookAt(this.camFocus);
    }

    this.effects.update(dt);
  }
}
