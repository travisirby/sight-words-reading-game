// End-of-world boss battles. Each castle hides a big, cute voxel boss with
// 5 gold armor blocks: one pops off per word read correctly. The boss
// retreats ahead of the auto-walking player and, between words, lobs slow
// loudly-telegraphed blocks to hop over. Wrong answers only earn a silly
// giggle-taunt — losing is impossible.

import * as THREE from 'three';
import { voxelGeo } from './voxelgeo.js';
import { KID_H } from './player.js';
import { disposeGroup } from './wordevents.js';
import { loadVoxModel, buildVoxMesh } from './voxmodel.js';
import {
  sfxStomp, sfxRoar, sfxGiggle, sfxArmorPop, sfxCoin, sfxFireworks,
} from './audio.js';

const boxGeo = voxelGeo;
const LEAD = 10.5; // how far ahead of the player the boss keeps itself

export const BOSSES = [
  { name: 'Meatball Monster', color: 0x8a4b2d },
  { name: 'Syrup Serpent', color: 0x8a4a1a },
  { name: 'Frost Yeti', color: 0xeef6ff },
  { name: 'Crystal Golem', color: 0x9f6fd4 },
  { name: 'Pepper Dragon', color: 0xff7a2e },
];

export function buildBoss(wi) {
  const g = new THREE.Group();
  const arms = []; // pivots; arms[0] doubles as the throw telegraph
  let armor = []; // [x, y, z] anchors for the 5 armor blocks
  let top = 5;
  let faceRefs = null; // { pupils, brows } for blinks and angry looks
  let ready = null; // resolves once async (baked voxel) geometry is attached

  // Every boss is a baked voxel model (scripts/vox/models/boss-*.mjs). The
  // mesh arrives async; the contract arrays/refs are filled in place, and
  // every animation path iterates them, so pre-load frames are safe.
  // armParts names the pivoted meshes that drive the throw telegraph/sway
  // (arms, a flicking head, wings); onParts allows per-boss extras.
  const voxBoss = (name, armParts, onParts = null) => {
    faceRefs = { pupils: [], brows: [] };
    return loadVoxModel(`${import.meta.env.BASE_URL}models/${name}.json`)
      .then((model) => {
        const { group, parts } = buildVoxMesh(model);
        g.add(group);
        arms.push(...armParts.map((p) => parts[p]));
        parts.browL.visible = parts.browR.visible = false;
        faceRefs.pupils.push(parts.pupilL, parts.pupilR);
        faceRefs.brows.push(parts.browL, parts.browR);
        if (onParts) onParts(parts);
      })
      .catch((err) => console.error('boss model failed to load:', err));
  };

  if (wi === 0) { // Meatball Monster: saucy meatball giant with spaghetti hair
    ready = voxBoss('boss-meatball', ['armL', 'armR']);
    armor = [[-1.04, 1.55, 0.85], [-0.52, 1.55, 0.88], [0, 1.55, 0.9],
      [0.52, 1.55, 0.88], [1.04, 1.55, 0.85]];
    top = 5.0;
  } else if (wi === 1) { // Syrup Serpent: drizzly syrup tower with a waffle hood
    // The neck-pivoted head is the single "arm" (throws with a head flick),
    // so the face must ride along: re-parent the face meshes under the head,
    // converting their assembly offsets into head-local ones.
    ready = voxBoss('boss-serpent', ['head'], (parts) => {
      for (const p of [parts.pupilL, parts.pupilR, parts.browL, parts.browR]) {
        parts.head.add(p);
        p.position.sub(parts.head.position);
      }
    });
    armor = [[0, 0.7, 1.05], [0.25, 1.55, 0.85], [-0.2, 2.55, 0.75],
      [0.15, 3.55, 0.68], [0, 4.6, 0.85]];
    top = 5.2;
  } else if (wi === 2) { // Frost Yeti: shaggy snowball with huge arms
    ready = voxBoss('boss-yeti', ['armL', 'armR']);
    armor = [[-1.0, 1.5, 1.0], [-0.5, 1.5, 1.02], [0, 1.5, 1.05],
      [0.5, 1.5, 1.02], [1.0, 1.5, 1.0]];
    top = 5.1;
  } else if (wi === 3) { // Crystal Golem: slate body, glowing shards
    ready = voxBoss('boss-golem', ['armL', 'armR'], (parts) => {
      // One shared glow for all shards (average of the three per-shard
      // emissives the hand-built version used; diffuse colors still differ).
      parts.shards.material.emissive.setHex(0x4b3268);
    });
    armor = [[-0.96, 1.45, 0.8], [-0.48, 1.45, 0.83], [0, 1.45, 0.86],
      [0.48, 1.45, 0.83], [0.96, 1.45, 0.8]];
    top = 5.2;
  } else { // Pepper Dragon: chili-red dragon riding a smoke puff
    ready = voxBoss('boss-dragon', ['wingL', 'wingR']);
    armor = [[-0.76, 2.0, 0.75], [-0.38, 2.0, 0.78], [0, 2.0, 0.8],
      [0.38, 2.0, 0.78], [0.76, 2.0, 0.75]];
    top = 5.2;
  }

  g.rotation.y = -0.42; // slight turn toward the incoming player
  return { group: g, arms, armor, top, face: faceRefs, ready };
}

function makeCrown() {
  const g = new THREE.Group();
  const gold = new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x775500 });
  const base = new THREE.Mesh(boxGeo, gold);
  base.scale.set(0.85, 0.3, 0.85);
  g.add(base);
  for (const sx of [-0.3, 0, 0.3]) {
    const spike = new THREE.Mesh(boxGeo, gold);
    spike.scale.set(0.18, 0.32, 0.18);
    spike.position.set(sx, 0.3, 0);
    g.add(spike);
  }
  const gem = new THREE.Mesh(boxGeo, new THREE.MeshLambertMaterial({ color: 0xef5350, emissive: 0x551111 }));
  gem.scale.setScalar(0.2);
  gem.position.set(0, 0, 0.44);
  g.add(gem);
  return g;
}

// States: enter → roar → idle ⇄ (windup / hurt / taunt / dizzy)
//         → defeat → crownDrop → gone. game.js drives the phases around it.
export class BossFight {
  constructor(scene, worldIdx, effects, level) {
    this.scene = scene;
    this.effects = effects;
    this.level = level;
    this.def = BOSSES[worldIdx];
    this.hp = 5;
    this.state = 'enter';
    this.t = 0;
    this.throwCool = 2.5;
    this.stepPhase = 0;

    const built = buildBoss(worldIdx);
    this.group = built.group;
    this.arms = built.arms;
    this.top = built.top;
    this.face = built.face;
    this.blinkT = 1.5 + Math.random() * 2.5;
    this.blinkHold = 0;
    this.flashT = 0;
    scene.add(this.group);

    // The 5 armor blocks (the boss's visible "hearts").
    this.armor = built.armor.map(([x, y, z]) => {
      const m = new THREE.Mesh(
        boxGeo,
        new THREE.MeshLambertMaterial({ color: 0xffd54a, emissive: 0x664d00 })
      );
      m.scale.setScalar(0.5);
      m.position.set(x, y, z);
      this.group.add(m);
      return { m, popT: -1, vx: 0, vy: 0 };
    });

    // Every unique material on the boss (armor included), with its resting
    // emissive, so a hit can flash the whole body white and restore it.
    // Re-collected once async voxel geometry attaches, so those meshes
    // flash too (a hit can't land before the intro finishes anyway).
    const collectFlashMats = () => {
      this.flashMats = [];
      const seen = new Set();
      this.group.traverse((o) => {
        if (o.isMesh && !seen.has(o.material)) {
          seen.add(o.material);
          this.flashMats.push({ mat: o.material, base: o.material.emissive.getHex() });
        }
      });
    };
    collectFlashMats();
    built.ready?.then(collectFlashMats);

    this.projectiles = [0, 1].map(() => {
      const m = new THREE.Mesh(
        boxGeo,
        new THREE.MeshLambertMaterial({ color: this.def.color, emissive: 0x332200 })
      );
      m.scale.setScalar(0.8);
      m.visible = false;
      scene.add(m);
      return { m, on: false, mode: 'held', t: 0, x: 0, y: 0, x0: 0, y0: 0, x1: 0, dur: 1.35 };
    });

    this.crown = makeCrown();
    this.crown.visible = false;
    scene.add(this.crown);
    this.coinTimer = 0;
  }

  enterAt(x) {
    this.holdX = x;
    this.x = x + 8; // stomps in from off-screen right
  }

  // Skip the intro (tap or debugResolve during the cutscene).
  settle() {
    if (this.state === 'enter' || this.state === 'roar') {
      this.x = this.holdX;
      this.state = 'idle';
      this.t = 0;
    }
  }

  clearHeld() {
    for (const pr of this.projectiles) {
      if (pr.on && pr.mode === 'held') {
        pr.on = false;
        pr.m.visible = false;
      }
    }
  }

  hit() {
    this.hp--;
    const a = this.armor[this.hp];
    if (a) {
      a.popT = 0;
      a.vx = -3 - Math.random() * 2;
      a.vy = 7;
      a.m.scale.setScalar(0.7); // pops bigger for a beat as it flies off
      const wp = new THREE.Vector3();
      a.m.getWorldPosition(wp);
      this.effects.confetti(wp);
      this.effects.sparkle(wp);
    }
    sfxArmorPop();
    this.clearHeld();
    this.flashT = 0.15; // whole-body white flash
    for (const b of this.face.brows) b.visible = true; // angry face
    this.state = 'hurt';
    this.t = 0;
  }

  taunt() {
    if (this.state !== 'idle' && this.state !== 'dizzy') return;
    this.clearHeld();
    sfxGiggle();
    this.state = 'taunt';
    this.t = 0;
  }

  startDefeat(api, player) {
    this.clearHeld();
    for (const pr of this.projectiles) {
      pr.on = false;
      pr.m.visible = false;
    }
    this.state = 'defeat';
    this.t = 0;
    this.coinTimer = 0;
    sfxFireworks();
    this.effects.fireworks(new THREE.Vector3(this.x, 3, 0));
    api.addCoins(10);
    this.effects.floatText(new THREE.Vector3(this.x, this.top + 1, 0), '+10');
  }

  updateProjectiles(dt, p, api) {
    for (const pr of this.projectiles) {
      if (!pr.on) continue;
      if (pr.mode === 'held') {
        // Flashing above the boss during the wind-up telegraph.
        pr.x = this.x;
        pr.y = this.group.position.y + this.top + 0.9;
        pr.m.scale.setScalar(0.6 + Math.abs(Math.sin(pr.t * 14)) * 0.35);
        pr.t += dt;
      } else if (pr.mode === 'fly') {
        pr.t += dt;
        const u = Math.min(1, pr.t / pr.dur);
        pr.x = pr.x0 + (pr.x1 - pr.x0) * u;
        const gy = this.level.groundTopAt(pr.x1) + 0.4;
        pr.y = pr.y0 + (gy - pr.y0) * u + Math.sin(u * Math.PI) * 3.4;
        pr.m.rotation.z -= dt * 7;
        if (u >= 1) {
          pr.mode = 'roll';
          pr.t = 0;
          sfxStomp();
          this.effects.sparkle(new THREE.Vector3(pr.x, pr.y, 0));
        }
      } else { // roll toward the player, then fizzle out
        pr.t += dt;
        pr.x -= dt * 2.4;
        pr.y = this.level.groundTopAt(pr.x) + 0.4;
        pr.m.rotation.z += dt * 6;
        if (pr.t > 2.4 || pr.x < p.x - 2.5) {
          pr.on = false;
          pr.m.visible = false;
          this.effects.sparkle(new THREE.Vector3(pr.x, pr.y, 0));
          continue;
        }
      }
      // Touching a flying/rolling block = the usual gentle stumble.
      if (pr.mode !== 'held' && Math.abs(pr.x - p.x) < 0.75 &&
          p.y < pr.y + 0.6 && p.y + KID_H > pr.y - 0.6) {
        pr.on = false;
        pr.m.visible = false;
        this.effects.sparkle(new THREE.Vector3(pr.x, pr.y, 0));
        api.stumble();
      }
      pr.m.position.set(pr.x, pr.y, 0);
    }
  }

  // opts: { battle (word rounds active), challengeActive (blocks up now),
  //         minX (keep past the active blocks) }
  update(dt, p, api, { battle = false, challengeActive = false, minX = 0 } = {}) {
    this.t += dt;
    const g = this.group;

    // Popped armor blocks tumble away, shrinking out at the end.
    for (const a of this.armor) {
      if (a.popT < 0) continue;
      a.popT += dt;
      a.vy -= 20 * dt;
      a.m.position.x += a.vx * dt;
      a.m.position.y += a.vy * dt;
      a.m.rotation.z += dt * 9;
      a.m.scale.setScalar(a.popT < 0.55 ? 0.7 : Math.max(0.01, 0.7 * (1 - (a.popT - 0.55) / 0.35)));
      if (a.popT > 0.9) {
        a.m.visible = false;
        a.popT = -1;
      }
    }

    // Remaining armor shimmers so it reads as the thing to knock off.
    for (let i = 0; i < this.hp; i++) {
      const a = this.armor[i];
      if (a && a.popT < 0) {
        a.m.material.emissiveIntensity = 0.85 + Math.sin(this.t * 3.2 + i * 1.3) * 0.35;
      }
    }

    // Blink: pupils flatten for a beat every few seconds.
    if (this.blinkHold > 0) {
      this.blinkHold -= dt;
      if (this.blinkHold <= 0) {
        for (const e of this.face.pupils) e.scale.y = e.scale.x;
        this.blinkT = 1.5 + Math.random() * 2.5;
      }
    } else {
      this.blinkT -= dt;
      if (this.blinkT <= 0) {
        this.blinkHold = 0.12;
        for (const e of this.face.pupils) e.scale.y = e.scale.x * 0.15;
      }
    }

    // Hit flash: whole body glows white, then eases back to normal.
    if (this.flashT > 0) {
      this.flashT -= dt;
      if (this.flashT > 0) {
        for (const f of this.flashMats) f.mat.emissive.setHex(0x999999);
      } else {
        for (const f of this.flashMats) f.mat.emissive.setHex(f.base);
      }
    }

    this.updateProjectiles(dt, p, api);

    let bob = 0;
    let tilt = 0;
    let scale = 1;
    let squash = 1; // extra y-squash (width compensates) for bonk wobble
    const armBase = [0, 0];

    if (this.state === 'enter') {
      this.x = Math.max(this.holdX, this.x - dt * 5);
      bob = Math.abs(Math.sin(this.t * 9)) * 0.35;
      const step = Math.floor(this.t * 9 / Math.PI);
      if (step !== this.stepPhase) {
        this.stepPhase = step;
        sfxStomp();
      }
      if (this.x <= this.holdX) {
        this.state = 'roar';
        this.t = 0;
        sfxRoar();
      }
    } else if (this.state === 'roar') {
      const u = Math.min(1, this.t / 1.0);
      scale = 1 + Math.sin(u * Math.PI) * 0.16;
      armBase[0] = Math.sin(u * Math.PI) * 2.2;
      armBase[1] = -Math.sin(u * Math.PI) * 2.2;
      tilt = Math.sin(this.t * 24) * 0.04 * (1 - u);
      if (u >= 1) {
        this.state = 'idle';
        this.t = 0;
      }
    } else if (this.state === 'idle' || this.state === 'dizzy') {
      // Retreat: always keep LEAD ahead of the player (and past the blocks).
      const target = Math.max(this.x, p.x + LEAD, minX);
      const move = Math.min(dt * 6, target - this.x);
      this.x += move;
      // Hover-bob while standing so the boss never feels like a statue,
      // plus a slow breathing squash.
      bob = move > 0.01
        ? Math.abs(Math.sin(this.t * 8)) * 0.25
        : 0.12 + Math.sin(this.t * 2.2) * 0.12;
      squash = 1 + Math.sin(this.t * 2.2) * 0.012;
      tilt = Math.sin(this.t * (this.state === 'dizzy' ? 3 : 1.7)) *
        (this.state === 'dizzy' ? 0.14 : 0.05);
      armBase[0] = Math.sin(this.t * 2) * 0.18;
      armBase[1] = -Math.sin(this.t * 2) * 0.18;
      this.throwCool -= dt;
      if (battle && !challengeActive && this.state === 'idle' && this.throwCool <= 0) {
        const pr = this.projectiles.find((k) => !k.on);
        if (pr) {
          pr.on = true;
          pr.mode = 'held';
          pr.t = 0;
          pr.m.visible = true;
          pr.m.rotation.z = 0;
          this.state = 'windup';
          this.t = 0;
        }
      }
    } else if (this.state === 'windup') {
      const u = Math.min(1, this.t / 0.8);
      armBase[0] = u * 2.4;
      bob = Math.sin(this.t * 2.2) * 0.1;
      if (u >= 1) {
        const pr = this.projectiles.find((k) => k.on && k.mode === 'held');
        if (pr) {
          pr.mode = 'fly';
          pr.t = 0;
          pr.x0 = this.x;
          pr.y0 = this.group.position.y + this.top + 0.9;
          pr.x1 = Math.min(p.x + 4.5, this.x - 3);
          pr.m.scale.setScalar(0.8);
        }
        this.throwCool = 3.4;
        this.state = 'idle';
        this.t = 0;
      }
    } else if (this.state === 'hurt') {
      const u = Math.min(1, this.t / 1.0);
      tilt = -Math.sin(u * Math.PI) * 0.4;
      bob = -Math.sin(u * Math.PI) * 0.25;
      // Bonk squash with a wobble as it springs back up.
      squash = 1 - Math.sin(Math.min(1, u * 2) * Math.PI) * 0.16
        + Math.sin(this.t * 18) * 0.03 * (1 - u);
      armBase[0] = Math.sin(u * Math.PI) * 1.4;
      armBase[1] = -Math.sin(u * Math.PI) * 1.4;
      if (u >= 1) {
        for (const b of this.face.brows) b.visible = false; // anger over
        this.state = this.hp > 0 ? 'idle' : 'dizzy';
        this.t = 0;
      }
    } else if (this.state === 'taunt') {
      const u = Math.min(1, this.t / 0.9);
      g.rotation.y = -0.42 + Math.sin(this.t * 14) * 0.3 * (1 - u);
      scale = 1 - Math.sin(u * Math.PI) * 0.12;
      if (u >= 1) {
        g.rotation.y = -0.42;
        this.state = this.hp > 0 ? 'idle' : 'dizzy';
        this.t = 0;
      }
    } else if (this.state === 'defeat') {
      const u = Math.min(1, this.t / 2.4);
      tilt = Math.sin(this.t * 8) * 0.2 * u;
      bob = -u * u * 2.4; // sinks into the ground
      scale = 1 - u * 0.4;
      this.coinTimer -= dt;
      if (this.coinTimer <= 0) {
        this.coinTimer = 0.18;
        this.effects.confetti(new THREE.Vector3(
          this.x + (Math.random() - 0.5) * 2, this.top * (1 - u) + 1, 0
        ));
        sfxCoin();
      }
      if (u >= 1) {
        g.visible = false;
        this.state = 'crownDrop';
        this.t = 0;
        this.crown.visible = true;
        this.crown.position.set(this.x, this.top + 1, 0);
      }
    } else if (this.state === 'crownDrop') {
      // The crown floats over to the kid's head.
      const u = Math.min(1, this.t / 0.9);
      const e = 1 - Math.pow(1 - u, 3);
      const tx = p.x;
      const ty = p.y + KID_H + 0.25;
      this.crown.position.x += (tx - this.crown.position.x) * e;
      this.crown.position.y = this.crown.position.y + (ty - this.crown.position.y) * e
        + Math.sin(u * Math.PI) * 0.6 * dt;
      this.crown.rotation.y += dt * 4;
      if (u >= 1) {
        this.state = 'gone';
        this.effects.sparkle(this.crown.position.clone());
        sfxCoin();
      }
    } else { // gone: crown rides on the kid's head to the flag
      this.crown.position.set(p.x, p.y + KID_H + 0.25, 0);
      this.crown.rotation.y += dt * 1.5;
    }

    if (g.visible) {
      const gy = this.level.groundTopAt(this.x);
      g.position.set(this.x, gy + bob, 0);
      g.rotation.z = tilt;
      const sw = scale * (1 + (1 - squash) * 0.6); // widen as it squashes
      g.scale.set(sw, scale * squash, sw);
      this.arms.forEach((a, i) => {
        a.rotation.z = (i === 0 ? 1 : -1) * armBase[i];
      });
    }
  }

  dispose() {
    disposeGroup(this.group);
    disposeGroup(this.crown);
    for (const pr of this.projectiles) {
      pr.m.material.dispose();
      this.scene.remove(pr.m);
    }
  }
}
