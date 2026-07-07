// Side-view voxel kid. Walks +x, jump physics with coyote time and jump
// buffering. Every jump launches at full power — no hold-to-boost, so one
// press always clears the same height (kid-friendly). A single mid-air
// double jump is allowed, refilled on each landing.
// Boxes only, canvas face texture, walk/jump/stomp/stumble animations.

import * as THREE from 'three';
import { voxelGeo } from './voxelgeo.js';
import { sfxJump } from './audio.js';
import * as store from './store.js';
import { lookFrom } from './character.js';

export const KID_H = 1.7; // collision height
export const KID_W = 0.7; // collision width

const GRAVITY = -24; // falling
const GRAVITY_RISE = -15; // lighter on the way up (floatier, more forgiving)
const JUMP_V = 10.2; // fixed apex ~3.5 blocks: +3 platforms with margin
const AIR_JUMPS = 1; // extra mid-air jumps allowed before landing
const AIR_JUMP_V = 9.4; // second jump, a touch softer than the first
const COYOTE = 0.12;
const BUFFER = 0.15;

const css = (hex) => `#${hex.toString(16).padStart(6, '0')}`;

function makeFaceTexture(skinHex, hairHex, fringe, blink = false) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = css(skinHex);
  g.fillRect(0, 0, 64, 64);
  if (fringe) {
    g.fillStyle = css(hairHex);
    g.fillRect(0, 0, 64, 14);
  }
  g.fillStyle = '#222'; // eyes (happy closed lines mid-blink)
  if (blink) {
    g.fillRect(15, 30, 10, 3);
    g.fillRect(39, 30, 10, 3);
  } else {
    g.fillRect(16, 26, 8, 8);
    g.fillRect(40, 26, 8, 8);
  }
  g.fillStyle = 'rgba(255, 110, 110, 0.4)'; // rosy cheeks
  g.fillRect(9, 38, 10, 5);
  g.fillRect(45, 38, 10, 5);
  g.strokeStyle = '#a34d2a'; // smile
  g.lineWidth = 4;
  g.beginPath();
  g.arc(32, 42, 10, 0.2 * Math.PI, 0.8 * Math.PI);
  g.stroke();
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Hair style indices (see character.js STYLES):
// 0 short, 1 spiky, 2 long, 3 buzz, 4 bald.
// The head sides are always skin; hair is a slightly-oversized cap box that
// covers the top 2/3 of the head, so it reads as hair from every angle while
// the character rotates. Buzz gets no cap — just the painted head top — and
// bald gets nothing at all.
const hasFringe = (style) => style <= 2;

function buildHairExtras(style, hairMat) {
  const g = new THREE.Group();
  if (style >= 3) return g;
  const box = voxelGeo;
  // Cap: head is 0.5 wide with its top at y=1.6; hair reaches down to ~1.27.
  // The kid faces +x, so its front stops just behind the face (+x) so the
  // eyes stay visible and the texture's fringe reads as the hair's front.
  const cap = new THREE.Mesh(box, hairMat);
  cap.scale.set(0.53, 0.34, 0.56);
  cap.position.set(-0.025, 1.44, 0);
  g.add(cap);
  if (style === 1) {
    // Spiky: three little tufts standing on the cap.
    for (let i = -1; i <= 1; i++) {
      const s = new THREE.Mesh(box, hairMat);
      s.scale.set(0.12, 0.16, 0.12);
      s.position.set(i * 0.05, 1.68, i * 0.14);
      g.add(s);
    }
  } else if (style === 2) {
    // Long: a panel down the back (-x), tucked up under the cap so no skin
    // shows along its top edge.
    const m = new THREE.Mesh(box, hairMat);
    m.scale.set(0.14, 0.6, 0.48);
    m.position.set(-0.26, 1.3, 0);
    g.add(m);
  }
  return g;
}

// Outfit indices (see character.js OUTFITS): 0 shirt+pants, 1 dress, 2 overalls.
// Dress: a flared skirt box over the hips, bare (skin) legs, shirt color as
// the dress. Overalls: a pants-colored bib over the lower torso with two
// straps up the chest.
function buildOutfitExtras(outfit, shirtMat, pantsMat) {
  const g = new THREE.Group();
  const box = voxelGeo;
  if (outfit === 1) {
    const skirt = new THREE.Mesh(box, shirtMat);
    skirt.scale.set(0.56, 0.32, 0.44);
    skirt.position.y = 0.42;
    g.add(skirt);
  } else if (outfit === 2) {
    const bib = new THREE.Mesh(box, pantsMat);
    bib.scale.set(0.54, 0.36, 0.34);
    bib.position.y = 0.66;
    g.add(bib);
    for (const zx of [-0.26, 0.26]) {
      for (const z of [-0.1, 0.1]) {
        const strap = new THREE.Mesh(box, pantsMat);
        strap.scale.set(0.05, 0.3, 0.08);
        strap.position.set(zx, 0.97, z);
        g.add(strap);
      }
    }
  }
  return g;
}

// The current saved look (store must be loaded before meshes are built).
export function currentLook() {
  return lookFrom(store.get().character);
}

// Recolor/restyle an existing kid mesh in place. Works on any group built
// by makeKidMesh (in-level player, overworld token, character preview).
export function applyLook(group, look) {
  const p = group.userData.parts;
  const [skin, hair, shirt, pants] = p.mats;
  skin.color.setHex(look.skin);
  hair.color.setHex(look.hair);
  shirt.color.setHex(look.shirt);
  pants.color.setHex(look.pants);
  if (p.faceTexOpen) p.faceTexOpen.dispose();
  if (p.faceTexBlink) p.faceTexBlink.dispose();
  p.faceTexOpen = makeFaceTexture(look.skin, look.hair, hasFringe(look.style));
  p.faceTexBlink = makeFaceTexture(look.skin, look.hair, hasFringe(look.style), true);
  p.face.map = p.faceTexOpen;
  p.face.needsUpdate = true;
  // Bald: skin instead of hair on top of the head.
  p.head.material = [skin, skin, look.style === 4 ? skin : hair, skin, p.face, skin];
  group.remove(p.hairExtra);
  p.hairExtra = buildHairExtras(look.style, hair);
  group.add(p.hairExtra);
  // Dress means bare legs; the limb meshes sit one level under their pivots.
  const legMat = look.outfit === 1 ? skin : pants;
  p.legL.children[0].material = legMat;
  p.legR.children[0].material = legMat;
  group.remove(p.outfitExtra);
  p.outfitExtra = buildOutfitExtras(look.outfit, shirt, pants);
  group.add(p.outfitExtra);
}

// Shared kid builder — the overworld token reuses it at a smaller scale.
export function makeKidMesh(scale = 1, look = null) {
  look = look || currentLook();
  const group = new THREE.Group();
  const box = voxelGeo;
  const skin = new THREE.MeshLambertMaterial({ color: look.skin });
  const hair = new THREE.MeshLambertMaterial({ color: look.hair });
  const shirt = new THREE.MeshLambertMaterial({ color: look.shirt });
  const pants = new THREE.MeshLambertMaterial({ color: look.pants });
  const faceTexOpen = makeFaceTexture(look.skin, look.hair, hasFringe(look.style));
  const faceTexBlink = makeFaceTexture(look.skin, look.hair, hasFringe(look.style), true);
  const face = new THREE.MeshLambertMaterial({ map: faceTexOpen });

  // The body is built facing +x (arms at the z-sides, legs swinging in the
  // x-y plane), so the face goes on +x too — head and chest always agree.
  // Whoever owns the group yaws it to show the face to the camera.
  // Sides are skin; the hair cap in buildHairExtras carries the hair color.
  const head = new THREE.Mesh(box, [skin, skin, look.style === 4 ? skin : hair, skin, face, skin]);
  head.rotation.y = Math.PI / 2; // move the +z face texture onto +x
  head.scale.set(0.5, 0.5, 0.5);
  head.position.y = 1.35;

  const body = new THREE.Mesh(box, shirt);
  body.scale.set(0.5, 0.6, 0.3);
  body.position.y = 0.8;

  const mkLimb = (mat, sx, sy) => {
    const pivot = new THREE.Group(); // pivot at shoulder/hip
    const m = new THREE.Mesh(box, mat);
    m.scale.set(sx, sy, sx);
    m.position.y = -sy / 2;
    pivot.add(m);
    return pivot;
  };

  const armL = mkLimb(shirt, 0.16, 0.5);
  armL.position.set(0, 1.08, -0.34);
  const armR = mkLimb(shirt, 0.16, 0.5);
  armR.position.set(0, 1.08, 0.34);
  const legMat = look.outfit === 1 ? skin : pants; // dress = bare legs
  const legL = mkLimb(legMat, 0.18, 0.5);
  legL.position.set(0, 0.5, -0.14);
  const legR = mkLimb(legMat, 0.18, 0.5);
  legR.position.set(0, 0.5, 0.14);

  const hairExtra = buildHairExtras(look.style, hair);
  const outfitExtra = buildOutfitExtras(look.outfit, shirt, pants);

  group.add(head, body, armL, armR, legL, legR, hairExtra, outfitExtra);
  group.scale.setScalar(scale);
  group.userData.parts = {
    head, body, armL, armR, legL, legR, face, faceTexOpen, faceTexBlink,
    hairExtra, outfitExtra,
    mats: [skin, hair, shirt, pants],
  };
  return group;
}

// Tiny pooled dust puffs at the feet (landing thumps, run scuffs).
// Self-contained so the player never needs a handle on the Effects system.
const dustGeo = new THREE.BoxGeometry(1, 1, 1);

class DustPool {
  constructor(scene, n = 12) {
    this.puffs = [];
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(
        dustGeo,
        new THREE.MeshBasicMaterial({ color: 0xd8d2c4, transparent: true, opacity: 0, depthWrite: false })
      );
      m.visible = false;
      scene.add(m);
      this.puffs.push({ m, life: 0, maxLife: 1, vx: 0, vy: 0, grow: 1 });
    }
    this.idx = 0;
  }

  spawn(x, y, { vx = 0, vy = 1.2, size = 0.14, life = 0.35 } = {}) {
    const p = this.puffs[this.idx];
    this.idx = (this.idx + 1) % this.puffs.length;
    p.m.visible = true;
    p.m.position.set(x, y + 0.06, 0.15);
    p.m.scale.setScalar(size);
    p.m.rotation.z = Math.random() * Math.PI;
    p.vx = vx;
    p.vy = vy;
    p.grow = 1.6 + Math.random();
    p.life = p.maxLife = life;
  }

  // A landing kicks a few puffs out to both sides; harder falls kick more.
  burst(x, y, fall) {
    const n = fall > 2.5 ? 5 : 3;
    for (let i = 0; i < n; i++) {
      this.spawn(x + (Math.random() - 0.5) * 0.5, y, {
        vx: (i % 2 ? 1 : -1) * (0.8 + Math.random() * 1.2),
        vy: 0.8 + Math.random() * 1.2,
        size: 0.12 + Math.random() * 0.1,
        life: 0.3 + Math.random() * 0.15,
      });
    }
  }

  update(dt) {
    for (const p of this.puffs) {
      if (!p.m.visible) continue;
      p.life -= dt;
      if (p.life <= 0) {
        p.m.visible = false;
        continue;
      }
      p.m.position.x += p.vx * dt;
      p.m.position.y += p.vy * dt;
      p.vy = Math.max(0, p.vy - 4 * dt);
      p.m.scale.multiplyScalar(1 + p.grow * dt);
      p.m.material.opacity = 0.5 * (p.life / p.maxLife);
    }
  }
}

export class Player {
  constructor(scene) {
    this.group = makeKidMesh(1);
    scene.add(this.group);
    this.parts = this.group.userData.parts;

    // Fake blob shadow (no shadow maps).
    const shadowGeo = new THREE.CircleGeometry(0.5, 16);
    shadowGeo.rotateX(-Math.PI / 2);
    this.shadow = new THREE.Mesh(
      shadowGeo,
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.3, depthWrite: false })
    );
    scene.add(this.shadow);

    this.dust = new DustPool(scene);
    this.reset(0, 0);
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 0;
    this.grounded = true;
    this.buffer = 0;
    this.coyote = 0;
    this.airJumps = AIR_JUMPS;
    this.fallPeak = y;
    this.stumbleT = 0;
    this.squashT = 0;
    this.walkPhase = 0;
    this.idleT = Math.random() * 5;
    this.lean = 0;
    this.blinkT = 2 + Math.random() * 3;
    this.blinkHold = 0;
    this.runDustT = 0;
    this.parts.face.map = this.parts.faceTexOpen;
    this.parts.face.needsUpdate = true;
    this.faceYaw = -Math.PI / 2; // forward (+x local) turned to the camera
    this.group.position.set(x, y, 0);
    this.group.rotation.set(0, this.faceYaw, 0);
    this.group.scale.setScalar(1);
    for (const m of this.parts.mats) m.emissive.setHex(0x000000);
  }

  jump() {
    this.buffer = BUFFER;
  }

  // External bounce (critter stomp, bonk pushdown, ...).
  bounce(v) {
    this.vy = v;
    this.grounded = false;
    this.fallPeak = this.y;
  }

  stumble() {
    this.stumbleT = 0.6;
    for (const m of this.parts.mats) m.emissive.setHex(0xaa2222);
  }

  get isAirborne() {
    return !this.grounded;
  }

  // level: { groundTopAt(x), floorAt(x, feetY) }
  // cb: { onLand(fallDist) } — fired on every landing with fall height.
  update(dt, speed, level, cb) {
    // ---- horizontal walk (either direction during choice mode); walls
    // (ground rises) block until jumped ----
    if (speed !== 0) {
      const dir = speed > 0 ? 1 : -1;
      const nx = this.x + speed * dt;
      const wallTop = level.groundTopAt(nx + dir * (KID_W / 2));
      if (wallTop <= this.y + 0.25) this.x = nx;
      // else: blocked — run in place until a jump clears it
    }

    // ---- vertical ----
    this.buffer -= dt;
    this.coyote -= dt;
    if (this.grounded) this.coyote = COYOTE;

    if (this.buffer > 0 && (this.grounded || this.coyote > 0)) {
      this.vy = JUMP_V;
      this.grounded = false;
      this.buffer = 0;
      this.coyote = 0;
      this.airJumps = AIR_JUMPS; // refill on every ground (or coyote) launch
      this.fallPeak = this.y;
      sfxJump();
    } else if (this.buffer > 0 && this.airJumps > 0) {
      // Mid-air double jump: a fresh upward burst + a little puff of dust.
      this.vy = AIR_JUMP_V;
      this.buffer = 0;
      this.airJumps -= 1;
      this.fallPeak = this.y;
      this.dust.burst(this.x, this.y, 1.5);
      sfxJump();
    }

    if (!this.grounded) {
      const g = this.vy > 0 ? GRAVITY_RISE : GRAVITY;
      const prevY = this.y;
      this.vy += g * dt;
      this.y += this.vy * dt;
      this.fallPeak = Math.max(this.fallPeak, this.y);
      if (this.vy <= 0) {
        const floor = level.floorAt(this.x, prevY + 0.05);
        if (floor !== null && this.y <= floor) {
          this.y = floor;
          this.vy = 0;
          this.grounded = true;
          this.squashT = 0.16;
          this.dust.burst(this.x, this.y, this.fallPeak - floor);
          if (cb && cb.onLand) cb.onLand(this.fallPeak - floor);
        }
      }
    } else {
      // Follow floor; walked off an edge -> start falling (coyote grace).
      const floor = level.floorAt(this.x, this.y + 0.05);
      if (floor < this.y - 0.02) {
        this.grounded = false;
        this.vy = 0;
        this.fallPeak = this.y;
      } else {
        this.y = floor;
      }
    }

    // ---- animation ----
    const p = this.parts;
    const running = this.grounded && Math.abs(speed) > 0.2;

    // Eye blink: swap the face texture closed for a beat every few seconds.
    if (this.blinkHold > 0) {
      this.blinkHold -= dt;
      if (this.blinkHold <= 0) {
        p.face.map = p.faceTexOpen;
        p.face.needsUpdate = true;
        this.blinkT = 2 + Math.random() * 3;
      }
    } else {
      this.blinkT -= dt;
      if (this.blinkT <= 0) {
        this.blinkHold = 0.13;
        p.face.map = p.faceTexBlink;
        p.face.needsUpdate = true;
      }
    }

    if (!this.grounded) {
      // Arms thrown up, one leg tucked — plus a tiny flail with vy so the
      // pose isn't frozen through the whole arc.
      const flail = Math.max(-0.25, Math.min(0.25, this.vy * 0.02));
      p.armL.rotation.z = 2.4 + flail;
      p.armR.rotation.z = 2.4 - flail;
      p.armL.rotation.x = 0.25;
      p.armR.rotation.x = -0.25;
      p.legL.rotation.z = -0.5 - flail * 0.5;
      p.legR.rotation.z = 0.3 + flail * 0.5;
      p.legL.position.y = 0.5;
      p.legR.position.y = 0.5;
    } else {
      // Stride rate compensates for the ~35° yaw foreshortening: feet must
      // sweep backward as fast as the ground scrolls or the gait reads as a
      // moonwalk (feet sliding forward). abs(): choice mode walks left too.
      this.walkPhase += dt * Math.max(Math.abs(speed), 0.001) * 2.7;
      const swing = running ? Math.sin(this.walkPhase) : 0;
      const stride = running ? Math.cos(this.walkPhase) : 0;
      if (running) {
        // Livelier run: bigger swing, arms flare out a touch and bend more
        // on the back-swing so they read as pumping, not pendulums.
        p.armL.rotation.z = swing * 1.15;
        p.armR.rotation.z = -swing * 1.15;
        p.armL.rotation.x = 0.14 + Math.max(0, swing) * 0.12;
        p.armR.rotation.x = -0.14 - Math.max(0, -swing) * 0.12;
        p.legL.rotation.z = -swing * 1.0;
        p.legR.rotation.z = swing * 1.0;
        // Occasional little scuff of dust off the trailing foot.
        this.runDustT -= dt;
        if (this.runDustT <= 0) {
          this.runDustT = 0.28 + Math.random() * 0.2;
          this.dust.spawn(this.x - Math.sign(speed) * 0.3, this.y, {
            vx: -Math.sign(speed) * (0.6 + Math.random() * 0.6),
            vy: 0.5 + Math.random() * 0.5,
            size: 0.09 + Math.random() * 0.05,
            life: 0.3,
          });
        }
      } else {
        // Idle: soft breathing bob, arms resting with a gentle sway.
        this.idleT += dt;
        const breathe = Math.sin(this.idleT * 2.3);
        p.armL.rotation.z = breathe * 0.06;
        p.armR.rotation.z = -breathe * 0.06;
        p.armL.rotation.x = 0.05;
        p.armR.rotation.x = -0.05;
        p.legL.rotation.z = 0;
        p.legR.rotation.z = 0;
        p.body.scale.y = 0.6 + breathe * 0.012;
        p.head.position.y = 1.35 + breathe * 0.012;
      }
      // Lift whichever leg is swinging forward so the planted leg carries
      // the motion — the other foot never scuffs forward along the ground.
      p.legL.position.y = 0.5 + Math.max(0, -stride) * 0.12;
      p.legR.position.y = 0.5 + Math.max(0, stride) * 0.12;
    }
    if (running || !this.grounded) {
      p.body.scale.y = 0.6;
      p.head.position.y = 1.35;
    }
    const bob = running
      ? Math.abs(Math.cos(this.walkPhase)) * 0.06
      : this.grounded ? Math.max(0, Math.sin(this.idleT * 2.3)) * 0.015 : 0;

    // Three-quarter view while moving: chest and face point ~35° off the
    // direction of travel (±x, mirrored when steering left in choice mode)
    // toward the camera, so the run reads forward and the face stays
    // visible; ease back to camera-facing when idle.
    const targetYaw = Math.abs(speed) > 0.2
      ? -Math.PI / 2 + Math.sign(speed) * (Math.PI / 2 - 0.61)
      : -Math.PI / 2;
    this.faceYaw += (targetYaw - this.faceYaw) * Math.min(1, dt * 5);
    this.group.rotation.y = this.faceYaw;

    // Lean into the run (and ease back upright when idle or airborne).
    const leanTarget = running ? -Math.sign(speed) * 0.09 : 0;
    this.lean += (leanTarget - this.lean) * Math.min(1, dt * 8);

    // Squash and stretch: stretch tall with vertical speed in the air,
    // squash wide on landing — width compensates so volume reads constant.
    let sy = 1;
    if (!this.grounded) {
      sy = 1 + Math.min(0.14, Math.abs(this.vy) * 0.011);
    } else if (this.squashT > 0) {
      this.squashT -= dt;
      sy = 0.82 + 0.18 * (1 - Math.max(0, this.squashT) / 0.16);
    }
    const sx = 1 + (1 - sy) * 0.7;
    this.group.scale.set(sx, sy, sx);
    this.group.position.set(this.x, this.y + bob, 0);
    this.group.rotation.z = this.lean;

    // Stumble: brief wobble + red flash (wobble layers over the run lean).
    if (this.stumbleT > 0) {
      this.stumbleT -= dt;
      this.group.rotation.z = this.lean +
        Math.sin(this.stumbleT * 10) * 0.25 * (Math.max(0, this.stumbleT) / 0.6);
      if (this.stumbleT <= 0) {
        for (const m of this.parts.mats) m.emissive.setHex(0x000000);
      }
    }

    this.dust.update(dt);

    // Blob shadow on whatever floor is below, shrinks with height.
    const under = level.floorAt(this.x, this.y + 0.05);
    this.shadow.position.set(this.x, under + 0.02, 0);
    const h = this.y - under;
    const sc = Math.max(0.4, 1 - h * 0.12);
    this.shadow.scale.set(sc, 1, sc);
    this.shadow.material.opacity = 0.3 * Math.max(0.3, 1 - h * 0.1);
  }
}
