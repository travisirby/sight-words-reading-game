// End-of-world boss battles. Each castle hides a big, cute voxel boss with
// 5 gold armor blocks: one pops off per word read correctly. The boss
// retreats ahead of the auto-walking player and, between words, lobs slow
// loudly-telegraphed blocks to hop over. Wrong answers only earn a silly
// giggle-taunt — losing is impossible.

import * as THREE from 'three';
import { KID_H } from './player.js';
import { disposeGroup } from './wordevents.js';
import {
  sfxStomp, sfxRoar, sfxGiggle, sfxArmorPop, sfxCoin, sfxFireworks,
} from './audio.js';

const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const LEAD = 10.5; // how far ahead of the player the boss keeps itself

export const BOSSES = [
  { name: 'Grass Golem', color: 0x4cb545 },
  { name: 'Sand Serpent', color: 0xdfb45e },
  { name: 'Frost Yeti', color: 0xeef6ff },
  { name: 'Crystal Golem', color: 0x9f6fd4 },
  { name: 'Cloud Dragon', color: 0xbfe4ff },
];

export function buildBoss(wi) {
  const g = new THREE.Group();
  const M = (c, e = 0) => new THREE.MeshLambertMaterial({ color: c, emissive: e });
  const box = (parent, m, sx, sy, sz, x, y, z, rz = 0) => {
    const mesh = new THREE.Mesh(boxGeo, m);
    mesh.scale.set(sx, sy, sz);
    mesh.position.set(x, y, z);
    mesh.rotation.z = rz;
    parent.add(mesh);
    return mesh;
  };
  // Big friendly eyes + smile on the +z (camera) side.
  const face = (parent, y, z, s = 1) => {
    const white = M(0xffffff);
    const dark = M(0x222222);
    for (const sx of [-0.32, 0.32]) {
      box(parent, white, 0.34 * s, 0.34 * s, 0.1, sx * s, y + 0.1 * s, z);
      box(parent, dark, 0.16 * s, 0.16 * s, 0.1, sx * s, y + 0.08 * s, z + 0.07);
    }
    box(parent, dark, 0.5 * s, 0.12, 0.08, 0, y - 0.34 * s, z);
  };
  const limb = (x, y, m, sx, sy) => {
    const p = new THREE.Group();
    p.position.set(x, y, 0);
    box(p, m, sx, sy, sx, 0, -sy / 2, 0);
    g.add(p);
    return p;
  };

  const arms = []; // pivots; arms[0] doubles as the throw telegraph
  let armor = []; // [x, y, z] anchors for the 5 armor blocks
  let top = 5;

  if (wi === 0) { // Grass Golem: mossy block giant with a flower
    const green = M(0x4cb545);
    box(g, M(0x3f9e3a), 0.9, 1.0, 0.9, -0.65, 0.5, 0);
    box(g, M(0x3f9e3a), 0.9, 1.0, 0.9, 0.65, 0.5, 0);
    box(g, green, 2.6, 2.2, 1.6, 0, 2.1, 0);
    box(g, M(0x8fd35f), 2.9, 0.45, 1.8, 0, 3.25, 0);
    box(g, M(0x6fbf62), 1.6, 1.2, 1.4, 0, 4.15, 0);
    box(g, M(0x3f9e3a), 0.55, 0.4, 0.55, 0.45, 4.9, 0);
    box(g, M(0xff6b81), 0.28, 0.28, 0.28, -0.5, 4.9, 0.25);
    arms.push(limb(-1.65, 3.2, green, 0.7, 1.9), limb(1.65, 3.2, green, 0.7, 1.9));
    face(g, 4.25, 0.75, 1.1);
    armor = [[-1.04, 1.55, 0.85], [-0.52, 1.55, 0.88], [0, 1.55, 0.9],
      [0.52, 1.55, 0.88], [1.04, 1.55, 0.85]];
    top = 5.0;
  } else if (wi === 1) { // Sand Serpent: swaying segment tower with a hood
    const tan = M(0xdfb45e);
    const tan2 = M(0xd2ad57);
    box(g, tan2, 2.5, 1.1, 1.9, 0, 0.55, 0);
    box(g, tan, 2.0, 1.05, 1.5, 0.25, 1.55, 0);
    box(g, tan2, 1.7, 1.05, 1.3, -0.2, 2.55, 0);
    box(g, tan, 1.4, 1.05, 1.1, 0.15, 3.55, 0);
    const headP = new THREE.Group();
    headP.position.set(0, 4.1, 0);
    box(headP, M(0xc7a04c), 2.1, 1.3, 0.6, 0, 0.55, -0.35); // hood
    box(headP, M(0xeed48e), 1.3, 1.05, 1.1, 0, 0.5, 0.15);
    box(headP, M(0xef5350), 0.12, 0.08, 0.5, 0, 0.15, 0.82); // tongue
    face(headP, 0.6, 0.74, 0.9);
    g.add(headP);
    arms.push(headP); // "throws" with a head flick
    armor = [[0, 0.7, 1.05], [0.25, 1.55, 0.85], [-0.2, 2.55, 0.75],
      [0.15, 3.55, 0.68], [0, 4.6, 0.85]];
    top = 5.2;
  } else if (wi === 2) { // Frost Yeti: shaggy snowball with huge arms
    const white = M(0xffffff);
    box(g, M(0xeef6ff), 1.0, 0.9, 1.0, -0.7, 0.45, 0);
    box(g, M(0xeef6ff), 1.0, 0.9, 1.0, 0.7, 0.45, 0);
    box(g, white, 2.7, 2.4, 1.8, 0, 2.1, 0);
    box(g, M(0xdbe9f7), 1.7, 1.3, 0.2, 0, 1.9, 0.88); // belly patch
    box(g, white, 1.7, 1.3, 1.5, 0, 4.0, 0);
    box(g, M(0xaac2d6), 1.3, 0.85, 0.15, 0, 4.05, 0.74); // face patch
    box(g, M(0x9fc4e8), 0.3, 0.5, 0.3, -0.55, 4.85, 0);
    box(g, M(0x9fc4e8), 0.3, 0.5, 0.3, 0.55, 4.85, 0);
    arms.push(limb(-1.8, 3.4, white, 0.85, 2.3), limb(1.8, 3.4, white, 0.85, 2.3));
    face(g, 4.1, 0.84, 1.0);
    armor = [[-1.0, 1.5, 1.0], [-0.5, 1.5, 1.02], [0, 1.5, 1.05],
      [0.5, 1.5, 1.02], [1.0, 1.5, 1.0]];
    top = 5.1;
  } else if (wi === 3) { // Crystal Golem: slate body, glowing shards
    const slate = M(0x5e5e6c);
    box(g, M(0x54545f), 0.85, 1.0, 0.85, -0.6, 0.5, 0);
    box(g, M(0x54545f), 0.85, 1.0, 0.85, 0.6, 0.5, 0);
    box(g, slate, 2.4, 2.0, 1.5, 0, 2.0, 0);
    box(g, M(0x6e6e7c), 1.4, 1.1, 1.2, 0, 3.75, 0);
    box(g, M(0x7ef0ff, 0x1b5f73), 0.4, 1.4, 0.4, -1.25, 3.3, 0, 0.5);
    box(g, M(0xd07eff, 0x531b73), 0.4, 1.4, 0.4, 1.25, 3.3, 0, -0.5);
    box(g, M(0xff8ad8, 0x731b53), 0.32, 1.0, 0.32, 0, 4.75, 0);
    box(g, M(0x7ef0ff, 0x1b5f73), 0.28, 0.8, 0.28, -0.5, 4.6, 0, 0.3);
    box(g, M(0xd07eff, 0x531b73), 0.28, 0.8, 0.28, 0.5, 4.6, 0, -0.3);
    arms.push(limb(-1.5, 2.9, slate, 0.7, 1.8), limb(1.5, 2.9, slate, 0.7, 1.8));
    face(g, 3.85, 0.64, 1.0);
    armor = [[-0.96, 1.45, 0.8], [-0.48, 1.45, 0.83], [0, 1.45, 0.86],
      [0.48, 1.45, 0.83], [0.96, 1.45, 0.8]];
    top = 5.2;
  } else { // Cloud Dragon: sky-blue dragon riding a cloud puff
    const cloud = M(0xffffff);
    const sky = M(0xbfe4ff);
    box(g, cloud, 2.8, 0.7, 1.9, 0, 0.5, 0);
    box(g, M(0xf2f8ff), 1.2, 0.6, 1.2, -1.1, 0.75, 0.3);
    box(g, M(0xf2f8ff), 1.0, 0.55, 1.0, 1.15, 0.7, -0.2);
    box(g, sky, 1.9, 1.7, 1.4, 0, 2.0, 0);
    box(g, M(0x9fd2ff), 0.8, 1.0, 0.8, 0, 3.3, 0.1);
    box(g, sky, 1.35, 1.0, 1.2, 0, 4.2, 0.2);
    box(g, M(0x9fd2ff), 0.7, 0.5, 0.7, 0, 4.0, 0.9); // snout
    box(g, M(0xffd54a), 0.22, 0.5, 0.22, -0.35, 4.9, 0);
    box(g, M(0xffd54a), 0.22, 0.5, 0.22, 0.35, 4.9, 0);
    box(g, sky, 0.9, 0.5, 0.9, -1.25, 1.6, -0.3); // tail puff
    const wing = (side) => {
      const p = new THREE.Group();
      p.position.set(side * 1.05, 2.6, 0);
      box(p, cloud, 1.9, 0.18, 1.0, side * 1.0, 0, 0);
      g.add(p);
      return p;
    };
    arms.push(wing(-1), wing(1));
    face(g, 4.4, 0.82, 0.9);
    armor = [[-0.76, 2.0, 0.75], [-0.38, 2.0, 0.78], [0, 2.0, 0.8],
      [0.38, 2.0, 0.78], [0.76, 2.0, 0.75]];
    top = 5.2;
  }

  g.rotation.y = -0.42; // slight turn toward the incoming player
  return { group: g, arms, armor, top };
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
      const wp = new THREE.Vector3();
      a.m.getWorldPosition(wp);
      this.effects.confetti(wp);
      this.effects.sparkle(wp);
    }
    sfxArmorPop();
    this.clearHeld();
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

    // Popped armor blocks tumble away.
    for (const a of this.armor) {
      if (a.popT < 0) continue;
      a.popT += dt;
      a.vy -= 20 * dt;
      a.m.position.x += a.vx * dt;
      a.m.position.y += a.vy * dt;
      a.m.rotation.z += dt * 9;
      if (a.popT > 0.9) {
        a.m.visible = false;
        a.popT = -1;
      }
    }

    this.updateProjectiles(dt, p, api);

    let bob = 0;
    let tilt = 0;
    let scale = 1;
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
      bob = move > 0.01
        ? Math.abs(Math.sin(this.t * 8)) * 0.25
        : Math.sin(this.t * 2.2) * 0.1;
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
      armBase[0] = Math.sin(u * Math.PI) * 1.4;
      armBase[1] = -Math.sin(u * Math.PI) * 1.4;
      if (u >= 1) {
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
      g.scale.setScalar(scale);
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
