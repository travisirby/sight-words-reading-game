// Character creator preview: the kid on a little green pedestal, slowly
// spinning so every hairstyle/color choice is visible from all sides.
// Doubles as the title-screen backdrop, so it's dressed like a Pasta Plains
// postcard built from the same visual vocabulary as level.js: gradient
// skydome + voxel sun, drifting bottom-heavy puff clouds, grass voxel
// meadow, stepped hills with ridge trees, spaghetti-tree props, floating
// coins, sight-word toy blocks around the pedestal, and the world-1 boss
// castle with the Grass Golem waiting off in the distance.
// DOM chrome (title stack / swatches) overlays this via screen-title/char.

import * as THREE from 'three';
import { makeKidMesh, applyLook } from './player.js';
import { PALETTES, mulberry32 } from './level.js';
import { buildBoss } from './boss.js';
import { DOLCH } from './words.js';

const P = PALETTES[0]; // Pasta Plains — the game's opening world
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const css = (hex) => '#' + hex.toString(16).padStart(6, '0');

// Classic toy block: colored cube with a pale inset panel on every face
// and a sight word in big navy letters on the front/back only — a word on
// all six faces reads as an accidental stutter ("and and") when two faces
// show at once.
function makeWordBlock(word, bgHex) {
  const paint = (c, text) => {
    const g = c.getContext('2d');
    // Painted darker than the target color: ambient + sun total ~1.4x on
    // camera-facing faces, which clips the true toy colors to pastel.
    const f = 0.72;
    g.fillStyle = `rgb(${(bgHex >> 16 & 255) * f | 0},${(bgHex >> 8 & 255) * f | 0},${(bgHex & 255) * f | 0})`;
    g.fillRect(0, 0, 128, 128);
    g.fillStyle = 'rgba(255,255,255,0.85)';
    g.fillRect(20, 20, 88, 88); // frame thick enough to read colored on screen
    if (text) {
      g.fillStyle = '#2c3e75';
      g.font = 'bold 64px sans-serif';
      const size = Math.min(52, Math.floor(64 * 94 / g.measureText(text).width));
      g.font = `bold ${size}px sans-serif`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(text, 64, 68);
    }
  };
  const panel = (text) => {
    const c = document.createElement('canvas');
    c.width = 128;
    c.height = 128;
    paint(c, text);
    return new THREE.MeshLambertMaterial({ map: new THREE.CanvasTexture(c) });
  };
  const wordMat = panel(word);
  const blank = panel('');
  // BoxGeometry face order: +x, -x, +y, -y, +z, -z.
  const mesh = new THREE.Mesh(boxGeo, [blank, blank, blank, blank, wordMat, wordMat]);
  // Repaintable so the title's ambient shuffle can land on a new word.
  mesh.userData.word = word;
  mesh.userData.setWord = (text) => {
    mesh.userData.word = text;
    paint(wordMat.map.image, text);
    wordMat.map.needsUpdate = true;
  };
  return mesh;
}

export class CharScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(P.skyTop);
    this.scene.fog = new THREE.Fog(P.fog, 18, 46);

    this.camera = new THREE.PerspectiveCamera(
      38, window.innerWidth / window.innerHeight, 0.1, 60
    );
    // View center sits to the kid's right so he appears on the left half of
    // the screen, clear of the swatch panel docked on the right. The aim
    // point is above his waist so the camera pitches down only gently,
    // keeping the horizon low and a wide band of sky in frame.
    this.camera.position.set(1.1, 2.0, 6.6);
    this.camera.lookAt(1.1, 1.05, 0);

    // Cool-tinted ambient fill under a warm sun key.
    this.scene.add(new THREE.AmbientLight(0xe4edf7, 0.8));
    const sun = new THREE.DirectionalLight(0xffeccc, 1.0);
    sun.position.set(3, 5, 4);
    this.scene.add(sun);

    // Sky: gradient dome (same top -> horizon -> haze ramp as level.js),
    // painted once since the theme never changes here.
    {
      const skyCanvas = document.createElement('canvas');
      skyCanvas.width = 2;
      skyCanvas.height = 128;
      const ctx = skyCanvas.getContext('2d');
      const grd = ctx.createLinearGradient(0, 0, 0, 128);
      grd.addColorStop(0, css(P.skyTop));
      grd.addColorStop(0.52, css(P.skyBot));
      grd.addColorStop(0.72, css(P.fog));
      grd.addColorStop(1, css(P.fog));
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 2, 128);
      const dome = new THREE.Mesh(
        new THREE.SphereGeometry(45, 20, 14),
        new THREE.MeshBasicMaterial({
          map: new THREE.CanvasTexture(skyCanvas),
          side: THREE.BackSide, fog: false, depthWrite: false,
        })
      );
      dome.renderOrder = -1;
      this.scene.add(dome);
    }

    // Voxel sun (core + four tips), upper-left so the title stack on the
    // right half of the screen stays clear.
    {
      const sunMat = new THREE.MeshBasicMaterial({ color: P.sun, fog: false });
      const sunGroup = new THREE.Group();
      const core = new THREE.Mesh(boxGeo, sunMat);
      core.scale.set(3.4, 3.4, 0.6);
      sunGroup.add(core);
      for (const [sx, sy] of [[2.1, 0], [-2.1, 0], [0, 2.1], [0, -2.1]]) {
        const tip = new THREE.Mesh(boxGeo, sunMat);
        tip.scale.set(sx ? 0.9 : 2.2, sx ? 2.2 : 0.9, 0.55);
        tip.position.set(sx, sy, 0);
        sunGroup.add(tip);
      }
      sunGroup.position.set(-3.2, 5.6, -26);
      this.scene.add(sunGroup);
    }

    // Drifting clouds: bottom-heavy voxel puffs, seeded so the postcard
    // composes the same way every boot.
    this.clouds = [];
    {
      const rand = mulberry32(4242);
      for (let i = 0; i < 6; i++) {
        const gp = new THREE.Group();
        const mat = new THREE.MeshLambertMaterial({
          color: P.cloud, transparent: true, opacity: 0.75 + rand() * 0.25,
          emissive: P.cloud, emissiveIntensity: 0.55,
        });
        const puffs = 2 + ((rand() * 3) | 0);
        for (let j = 0; j < puffs; j++) {
          const m = new THREE.Mesh(boxGeo, mat);
          const s = 1.4 + rand() * 1.5;
          m.scale.set(s, 0.7 + rand() * 0.6, 1.2 + rand());
          m.position.set((j - (puffs - 1) / 2) * 1.4, rand() * 0.6,
            (rand() - 0.5) * 1.5);
          gp.add(m);
        }
        const base = new THREE.Mesh(boxGeo, mat);
        base.scale.set(puffs * 1.4 + 0.8, 0.5, 1.9);
        base.position.y = -0.35;
        gp.add(base);
        gp.scale.setScalar(0.7 + rand() * 0.5);
        gp.position.set(-26 + i * 9 + rand() * 4, 3 + rand() * 2.5,
          -16 - rand() * 12);
        gp.userData.drift = 0.25 + rand() * 0.45;
        this.scene.add(gp);
        this.clouds.push(gp);
      }
    }

    // Static scenery in one instanced draw call: grass meadow, stepped
    // hills with ridge trees, and Pasta Plains props around the pedestal.
    {
      const blocks = new THREE.InstancedMesh(
        boxGeo, new THREE.MeshLambertMaterial(), 1400
      );
      blocks.frustumCulled = false;
      const dummy = new THREE.Object3D();
      const color = new THREE.Color();
      const rand = mulberry32(1337);
      let n = 0;
      const put = (x, y, z, sx, sy, sz, hex, jitter = 0) => {
        dummy.position.set(x, y, z);
        dummy.scale.set(sx, sy, sz);
        dummy.updateMatrix();
        blocks.setMatrixAt(n, dummy.matrix);
        color.setHex(hex);
        if (jitter) color.offsetHSL(0, 0, jitter);
        blocks.setColorAt(n, color);
        n++;
      };

      // Grass meadow: voxel cells whose top sits flush with the pedestal
      // bottom (y -0.22). One base green with gentle per-cell jitter and
      // rare lighter patches — softer than the in-level two-tone checker,
      // which reads harsh this close to the camera.
      for (let x = -20; x <= 20; x++) {
        for (let z = -18; z <= 4; z++) {
          const r = rand();
          const j = (r - 0.5) * 0.045 + (r > 0.97 ? 0.05 : 0)
            - (z + 18) * 0.003;
          put(x, -0.47, z, 1, 0.5, 1, P.top[0], j);
        }
      }

      // Rolling hills: stepped shrinking slabs (level.js style), a nearer
      // darker band and a farther hazier one, with block trees on ridges.
      // Kept far and low so they hug the horizon instead of walling it off.
      const hill = (cx, w, h, z, hex, trees) => {
        let top = -0.6;
        for (let s = 0; s < 3; s++) {
          const hh = (h + 2) / 3;
          put(cx + (rand() - 0.5) * 1.2, top + hh / 2, z, w * (1 - s * 0.24),
            hh + 0.02, 3.5 - s * 0.3, hex, (s & 1) ? 0.04 : -0.02);
          top += hh;
        }
        put(cx, top + 0.5, z, w * 0.3, 1, 2.8, hex, 0.06);
        if (trees) {
          const tc = 1 + ((rand() * 3) | 0);
          for (let t = 0; t < tc; t++) {
            const tx = cx + (rand() - 0.5) * w * 0.5;
            put(tx, top + 1.15, z, 0.25, 0.7, 0.4, 0x6d4a2a);
            put(tx, top + 1.9, z, 0.95, 0.95, 0.95, 0x3f9e3a, (rand() - 0.5) * 0.1);
          }
        }
      };
      // Far apron: one big slab bridging the meadow edge to the hills so no
      // sky peeks through under the horizon.
      put(1, -0.52, -28, 66, 0.5, 22, P.top[1], -0.02);
      for (let cx = -24; cx <= 28; cx += 12 + ((rand() * 6) | 0)) {
        hill(cx, 8 + rand() * 5, 0.8 + rand() * 1.2, -24, P.hill, true);
        hill(cx + 5 + rand() * 5, 10 + rand() * 6, 1.8 + rand() * 1.6, -32, P.hill2, false);
      }

      // Spaghetti trees flanking the kid: wiggly noodle trunk, meatball
      // canopy, marinara splat, parmesan fleck (PROPS[0] recipe).
      const spagTree = (x, z, j) => {
        const y = -0.22;
        put(x, y + 0.5, z, 0.3, 1.0, 0.3, 0xf5d778);
        put(x + 0.18, y + 1.3, z, 0.3, 0.8, 0.3, 0xefcf6a);
        put(x - 0.1, y + 2.0, z, 0.3, 0.7, 0.3, 0xf5d778);
        put(x, y + 2.8, z, 1.9, 1.0, 1.9, 0x8a4b2d, j);
        put(x + 0.6, y + 3.4, z + 0.3, 1.0, 0.8, 1.0, 0x93532f, j + 0.03);
        put(x - 0.55, y + 3.5, z - 0.2, 1.1, 0.9, 1.1, 0x7f4327, j);
        put(x, y + 4.0, z, 0.9, 0.5, 0.9, 0xd2422a, j);
        put(x + 0.2, y + 4.3, z + 0.1, 0.3, 0.15, 0.3, 0xfff2cc);
      };
      // Tall props stay on the left half — anything tall on the right
      // would collide with the title/button stack overlay.
      spagTree(-5.5, -11, 0.03);

      // A giant rigatoni and tomato bushes fill the mid-ground.
      put(-8, 0.88, -16, 1.2, 2.2, 1.2, 0xf0c060, 0.02);
      put(-8, 2.0, -16, 0.7, 0.14, 0.7, 0x9c6a2e);
      const bush = (x, z) => {
        put(x, 0.28, z, 1.3, 1.0, 1.3, 0x3f9e3a, (rand() - 0.5) * 0.08);
        put(x + 0.4, 0.73, z + 0.1, 0.5, 0.5, 0.5, 0xe23b2e);
        put(x - 0.45, 0.48, z + 0.2, 0.45, 0.45, 0.45, 0xef5343);
      };
      bush(-6.8, -7); // left half only — screen-right it poked up behind PLAY
      bush(-3.2, -10);
      bush(-7.5, -17);
      // Parmesan sprinkles scattered on the grass.
      for (let i = 0; i < 8; i++) {
        put(-5 + rand() * 12, -0.17, -12 + rand() * 10, 0.2, 0.1, 0.2,
          (i & 1) ? 0xfff2cc : 0xf7e8b8);
      }

      // The world-1 boss castle (the overworld's castle recipe, scaled up)
      // as a landmark on the far-left ridge — its towers rise above the
      // hill line while the base tucks behind it.
      {
        const s = 1.7;
        const cx = -5.5, cz = -23.5, gy = -0.52;
        const wall = 0xc9b8a2, roof = 0xd45757;
        put(cx, gy + 0.6 * s, cz, 1.7 * s, 1.2 * s, 1.5 * s, wall);
        put(cx, gy + 1.5 * s, cz, 1.0 * s, 0.8 * s, 0.9 * s, wall, 0.03);
        for (const [sx, sz] of [[-0.8, -0.7], [0.8, -0.7], [-0.8, 0.7], [0.8, 0.7]]) {
          put(cx + sx * s, gy + 0.95 * s, cz + sz * s, 0.45 * s, 1.9 * s, 0.45 * s, wall, -0.02);
          put(cx + sx * s, gy + 2.05 * s, cz + sz * s, 0.6 * s, 0.4 * s, 0.6 * s, roof);
        }
      }

      blocks.count = n;
      blocks.instanceMatrix.needsUpdate = true;
      if (blocks.instanceColor) blocks.instanceColor.needsUpdate = true;
      this.scene.add(blocks);
    }

    // Sight-word toy blocks (pre-primer Dolch words the kid meets first)
    // in the UI letter colors, scattered around the pedestal like toys.
    // Screen-left stays clear of the button stack on the right.
    // Every so often one does the in-level shuffle spin (wordevents.js) and
    // lands showing a different word — a sneaky extra flashcard per look.
    this.wordBlocks = [];
    {
      const defs = [
        ['the', 0xffd93d, -2.2, -3.0, 0.6, 0.35],
        ['and', 0xff6b6b, -3.5, -5.0, 0.55, -0.5],
        ['see', 0x6bffb8, 3.9, -1.4, 0.55, 0.25], // nearer/right: clear of PLAY overlay
        ['play', 0x74b9ff, -2.6, -8.0, 0.5, -0.3],
      ];
      for (const [word, hex, x, z, s, ry] of defs) {
        const block = makeWordBlock(word, hex);
        block.scale.setScalar(s);
        block.position.set(x, -0.22 + s / 2, z);
        block.rotation.y = ry;
        this.scene.add(block);
        this.wordBlocks.push({ mesh: block, baseRy: ry });
      }
    }
    this.blockSpin = null; // { block, t, swapped }
    this.nextBlockSpinIn = 4;

    // The Grass Golem waits outside his castle, full armor on — the same
    // buildBoss() mesh the boss fight uses, complete with his 5 gold armor
    // blocks, shrunk into the distance.
    {
      const { group, armor } = buildBoss(0);
      for (const [ax, ay, az] of armor) {
        const gold = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({
          color: 0xffd54a, emissive: 0x664d00,
        }));
        gold.scale.setScalar(0.5);
        gold.position.set(ax, ay, az);
        group.add(gold);
      }
      group.scale.setScalar(0.6);
      group.position.set(-0.2, -0.22, -22);
      this.scene.add(group);
    }

    // A few slowly spinning coins floating over the meadow, same gold as
    // the in-level pickups — a promise of what PLAY leads to.
    this.coins = [];
    {
      const coinGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.09, 12);
      const coinMat = new THREE.MeshLambertMaterial({
        color: 0xffd54a, emissive: 0x664d00,
      });
      for (const [x, y, z] of [[-4.0, 2.6, -5], [-2.0, 3.2, -7], [0.4, 2.9, -6]]) {
        const coin = new THREE.Mesh(coinGeo, coinMat);
        coin.rotation.x = Math.PI / 2;
        coin.position.set(x, y, z);
        coin.userData.baseY = y;
        this.scene.add(coin);
        this.coins.push(coin);
      }
    }

    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.0, 1.15, 0.22, 32),
      new THREE.MeshLambertMaterial({ color: 0x6ddf6d })
    );
    pedestal.position.y = -0.11;
    this.scene.add(pedestal);

    this.kid = makeKidMesh(1);
    this.scene.add(this.kid);
    this.t = 0;

    // Title-screen antics: between stretches of the normal slow spin the kid
    // turns to the camera and does a random trick (wave, dance, sit...).
    // Off in the character creator so the preview stays a steady turntable.
    this.antics = false;
    this.rotY = 0; // owned spin angle — tricks pause it, idle resumes it
    this.act = null; // { name, t, dur }
    this.lastAct = '';
    this.nextActIn = 2.5;
  }

  setLook(look) {
    applyLook(this.kid, look);
  }

  // Title screen turns these on; the creator/others turn them off.
  setAntics(on) {
    this.antics = on;
    if (!on) this.act = null;
  }

  startAct() {
    const names = ['wave', 'dance', 'sit', 'hop', 'twirl'].filter(
      (n) => n !== this.lastAct
    );
    const name = names[(Math.random() * names.length) | 0];
    const dur = { wave: 2.4, dance: 3.4, sit: 4.0, hop: 1.6, twirl: 1.4 }[name];
    this.act = { name, t: 0, dur };
    this.lastAct = name;
  }

  tick(dt) {
    this.t += dt;
    const p = this.kid.userData.parts;

    // Baseline idle: slow spin, gentle bob, arm sway. Tricks override on top.
    const sway = Math.sin(this.t * 2.2) * 0.15;
    let y = Math.sin(this.t * 2.2) * 0.03;
    let armLz = sway, armRz = -sway; // swing in the facing plane
    let armLx = 0, armRx = 0;        // lateral raise (out to the sides)
    let legLz = 0, legRz = 0;

    if (this.act) {
      const a = this.act;
      a.t += dt;
      if (a.t >= a.dur) {
        this.act = null;
        this.nextActIn = 2.5 + Math.random() * 3;
      } else {
        // Turn to the camera for the performance (kid faces +x at rotY 0).
        const FACE_CAM = Math.atan2(-6.6, 1.1);
        let diff = FACE_CAM - this.rotY;
        diff -= Math.round(diff / (Math.PI * 2)) * Math.PI * 2;
        this.rotY += diff * Math.min(1, dt * 6);

        // Ease in/out so every trick starts and ends from the idle pose.
        let e = Math.min(a.t / 0.35, (a.dur - a.t) / 0.35, 1);
        e = e * e * (3 - 2 * e);

        if (a.name === 'wave') {
          // Right arm high, hand wagging.
          armRx = -2.5 * e;
          armRz = Math.sin(a.t * 9) * 0.3 * e;
          armLz = sway * (1 - e);
        } else if (a.name === 'dance') {
          // Bouncy alternating arm pumps with a little hip twist.
          const beat = Math.sin(a.t * 7);
          armLx = (1.7 + beat * 0.9) * e;
          armRx = (-1.7 + beat * 0.9) * e;
          y += Math.abs(beat) * 0.1 * e;
          legLz = beat * 0.25 * e;
          legRz = -beat * 0.25 * e;
          this.rotY += Math.sin(a.t * 3.5) * 0.3 * e * dt * 6;
        } else if (a.name === 'sit') {
          // Plop down on the pedestal, legs out, hands resting on knees.
          y += -0.42 * e;
          legLz = 1.45 * e;
          legRz = 1.45 * e;
          armLz = 0.6 * e;
          armRz = 0.6 * e;
        } else if (a.name === 'hop') {
          // Two happy hops, both arms thrown up.
          y += Math.abs(Math.sin((a.t / a.dur) * Math.PI * 2)) * 0.32 * e;
          armLx = 2.4 * e;
          armRx = -2.4 * e;
        } else if (a.name === 'twirl') {
          // A quick full-speed twirl, arms out like a helicopter.
          this.rotY += dt * 9 * e;
          armLx = 1.5 * e;
          armRx = -1.5 * e;
        }
      }
    } else {
      this.rotY += dt * 0.9;
      if (this.antics) {
        this.nextActIn -= dt;
        if (this.nextActIn <= 0) this.startAct();
      }
    }

    this.kid.rotation.y = this.rotY;
    this.kid.position.y = y;
    p.armL.rotation.z = armLz;
    p.armR.rotation.z = armRz;
    p.armL.rotation.x = armLx;
    p.armR.rotation.x = armRx;
    p.legL.rotation.z = legLz;
    p.legR.rotation.z = legRz;

    // Toy blocks: every so often one does the level shuffle spin — one eased
    // full turn, swapping to a new sight word at the halfway point while the
    // word faces face away from the camera (same recipe as wordevents.js).
    const SPIN_DUR = 0.7;
    if (!this.blockSpin) {
      this.nextBlockSpinIn -= dt;
      if (this.nextBlockSpinIn <= 0) {
        const block = this.wordBlocks[(Math.random() * this.wordBlocks.length) | 0];
        this.blockSpin = { block, t: SPIN_DUR, swapped: false };
      }
    } else {
      const s = this.blockSpin;
      s.t -= dt;
      const prog = 1 - Math.max(0, s.t) / SPIN_DUR;
      s.block.mesh.rotation.y =
        s.block.baseRy + (1 - Math.pow(1 - prog, 2)) * Math.PI * 2;
      if (!s.swapped && prog >= 0.5) {
        s.swapped = true;
        const shown = new Set(this.wordBlocks.map((b) => b.mesh.userData.word));
        const pool = DOLCH.prePrimer.filter((w) => !shown.has(w));
        s.block.mesh.userData.setWord(pool[(Math.random() * pool.length) | 0]);
      }
      if (s.t <= 0) {
        s.block.mesh.rotation.y = s.block.baseRy;
        this.blockSpin = null;
        this.nextBlockSpinIn = 3.5 + Math.random() * 4.5;
      }
    }

    // Clouds drift right and wrap; coins twirl and bob.
    for (const c of this.clouds) {
      c.position.x += c.userData.drift * dt;
      if (c.position.x > 26) c.position.x = -26;
    }
    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i];
      coin.rotation.z = this.t * 1.6 + i * 2.1;
      coin.position.y = coin.userData.baseY + Math.sin(this.t * 1.4 + i * 2) * 0.12;
    }
  }
}
