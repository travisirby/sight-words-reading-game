// The narrator fairy — a tiny voxel sprite (built like the kid in
// player.js: unit boxes + Lambert materials + a canvas face texture)
// rendered into her own small transparent WebGL canvas that floats above
// all the UI chrome. She flies to a perch on every screen and flutters,
// chatters and sparkles while the narrator voice (audio.js speak) talks.
// Purely cosmetic: she listens for 'wr-speech' events and never blocks taps.

import * as THREE from 'three';

// Perch per screen, in % of the viewport. 'game' is the during-run perch
// (under the 🔊 repeat button, since she's the one saying the words).
const PERCHES = {
  title: { x: 82, y: 16 },
  map: { x: 88, y: 18 },
  char: { x: 24, y: 22 },
  house: { x: 14, y: 34 },
  pause: { x: 66, y: 28 },
  complete: { x: 69, y: 20 },
  bonus: { x: 15, y: 36 },
  game: { x: 90, y: 30 },
};

const SKIN = 0xffe0bd;
const HAIR = 0xffd93d;
const DRESS = 0xff9ff3;
const OUTLINE = 0x2c3e75;
const GOLD = 0xffd93d;
const WING = 0xe8f7ff;

const css = (hex) => `#${hex.toString(16).padStart(6, '0')}`;

// Same recipe as the kid's face (player.js), open=true swaps the smile
// for a little "o" so she visibly talks.
function makeFaceTexture(open) {
  const c = document.createElement('canvas');
  c.width = 64;
  c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = css(SKIN);
  g.fillRect(0, 0, 64, 64);
  g.fillStyle = css(HAIR); // fringe
  g.fillRect(0, 0, 64, 14);
  g.fillStyle = '#222'; // eyes
  g.fillRect(16, 26, 8, 8);
  g.fillRect(40, 26, 8, 8);
  if (open) {
    g.fillStyle = '#7a3b3b';
    g.beginPath();
    g.ellipse(32, 45, 6, 8, 0, 0, Math.PI * 2);
    g.fill();
  } else {
    g.strokeStyle = '#a34d2a';
    g.lineWidth = 4;
    g.beginPath();
    g.arc(32, 42, 10, 0.2 * Math.PI, 0.8 * Math.PI);
    g.stroke();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// Voxel fairy, built facing +z (the camera). Returns the group plus the
// parts the animation loop wiggles.
function buildFairy() {
  const group = new THREE.Group();
  const box = new THREE.BoxGeometry(1, 1, 1);
  const skin = new THREE.MeshLambertMaterial({ color: SKIN });
  const hair = new THREE.MeshLambertMaterial({ color: HAIR });
  const dress = new THREE.MeshLambertMaterial({ color: DRESS });
  const dark = new THREE.MeshLambertMaterial({ color: OUTLINE });
  const gold = new THREE.MeshLambertMaterial({ color: GOLD, emissive: 0x665200 });
  const wing = new THREE.MeshLambertMaterial({
    color: WING,
    transparent: true,
    opacity: 0.8,
    depthWrite: false,
    side: THREE.DoubleSide,
  });

  const faceClosed = makeFaceTexture(false);
  const faceOpen = makeFaceTexture(true);
  const face = new THREE.MeshLambertMaterial({ map: faceClosed });

  // Head: face on +z, hair on top, skin elsewhere.
  const head = new THREE.Mesh(box, [skin, skin, hair, skin, face, skin]);
  head.scale.set(0.5, 0.5, 0.5);
  head.position.y = 1.35;

  // Hair cap + a little bun on the back.
  const cap = new THREE.Mesh(box, hair);
  cap.scale.set(0.56, 0.3, 0.53);
  cap.position.set(0, 1.46, -0.025);
  const bun = new THREE.Mesh(box, hair);
  bun.scale.set(0.22, 0.22, 0.22);
  bun.position.set(0, 1.52, -0.28);

  // Dress: torso + flared skirt (like the kid's dress outfit).
  const body = new THREE.Mesh(box, dress);
  body.scale.set(0.42, 0.5, 0.28);
  body.position.y = 0.85;
  const skirt = new THREE.Mesh(box, dress);
  skirt.scale.set(0.58, 0.3, 0.4);
  skirt.position.y = 0.52;

  const mkLimb = (mat, sx, sy) => {
    const pivot = new THREE.Group(); // pivot at shoulder/hip
    const m = new THREE.Mesh(box, mat);
    m.scale.set(sx, sy, sx);
    m.position.y = -sy / 2;
    pivot.add(m);
    return pivot;
  };

  // Bare legs + tiny shoes.
  const legL = mkLimb(skin, 0.14, 0.36);
  legL.position.set(-0.12, 0.4, 0);
  const legR = mkLimb(skin, 0.14, 0.36);
  legR.position.set(0.12, 0.4, 0);
  for (const leg of [legL, legR]) {
    const shoe = new THREE.Mesh(box, dark);
    shoe.scale.set(0.16, 0.1, 0.2);
    shoe.position.set(0, -0.38, 0.03);
    leg.add(shoe);
  }

  // Left arm rests down; right arm holds the wand up and out.
  // (mkLimb hangs the mesh below the pivot, so rotation.z swings the
  // tip: negative x for the left arm, positive x for the right.)
  const armL = mkLimb(skin, 0.13, 0.42);
  armL.position.set(-0.28, 1.05, 0);
  armL.rotation.z = -0.25;
  const armR = mkLimb(skin, 0.13, 0.42);
  armR.position.set(0.28, 1.05, 0);
  armR.rotation.z = 2.4; // raised up and out

  // Wand in the right hand: stick + a voxel star (two crossed boxes).
  const wand = new THREE.Group();
  const stick = new THREE.Mesh(box, dark);
  stick.scale.set(0.05, 0.4, 0.05);
  stick.position.y = 0.12;
  const star = new THREE.Group();
  for (const rot of [0, Math.PI / 4]) {
    const s = new THREE.Mesh(box, gold);
    s.scale.set(0.2, 0.2, 0.07);
    s.rotation.z = rot;
    star.add(s);
  }
  star.position.y = 0.36;
  wand.add(stick, star);
  wand.position.y = -0.42; // at the hand
  wand.rotation.z = Math.PI; // pointing away from the body
  armR.add(wand);

  // Two pairs of thin translucent wings, pivoting at the back. Big and
  // spread wide so both tips peek past the body from the camera's angle.
  const mkWing = (side) => {
    const pivot = new THREE.Group();
    pivot.position.set(side * 0.06, 1.15, -0.18);
    const big = new THREE.Mesh(box, wing);
    big.scale.set(0.7, 0.42, 0.04);
    big.position.set(side * 0.48, 0.26, 0);
    big.rotation.z = side * 0.5;
    const small = new THREE.Mesh(box, wing);
    small.scale.set(0.46, 0.26, 0.04);
    small.position.set(side * 0.36, -0.12, 0);
    small.rotation.z = side * -0.2;
    pivot.add(big, small);
    return pivot;
  };
  const wingL = mkWing(-1);
  const wingR = mkWing(1);

  group.add(head, cap, bun, body, skirt, legL, legR, armL, armR, wingL, wingR);
  // Center her (feet ~0, head ~1.6) and give a touch of 3/4 view.
  group.position.y = -0.85;
  group.rotation.y = -0.3;

  return { group, head, wingL, wingR, star, face, faceClosed, faceOpen, legL, legR };
}

let el = null;
let lastX = 50;
let speaking = false;

export function mount() {
  if (el) return;
  el = document.createElement('div');
  el.id = 'fairy';
  el.innerHTML = `
    <div class="fairy-bob">
      <span class="fairy-spark s1" style="--dx: -34px; --dy: -30px;">✨</span>
      <span class="fairy-spark s2" style="--dx: 30px; --dy: -38px;">✨</span>
      <span class="fairy-spark s3" style="--dx: -6px; --dy: 34px;">⭐</span>
    </div>`;
  document.body.appendChild(el);

  // Her own tiny transparent renderer, so she floats over DOM screens
  // and 3D scenes alike.
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(96, 96);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  // Match the main renderer's tone mapping (main.js) so she isn't off-color.
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  el.querySelector('.fairy-bob').prepend(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 20);
  camera.position.set(0, 0.15, 3.4);
  camera.lookAt(0, 0, 0);
  scene.add(new THREE.AmbientLight(0xffffff, 0.85));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(2, 4, 5);
  scene.add(sun);

  const fairy = buildFairy();
  scene.add(fairy.group);

  let t = 0;
  let mouthOpen = false;
  renderer.setAnimationLoop(() => {
    const dt = 1 / 60;
    t += dt;
    // Wings: gentle flutter, frantic while talking. Small sweep around a
    // spread-open base so they never fold edge-on behind her.
    const flap = Math.sin(t * (speaking ? 38 : 11)) * 0.3 + 0.25;
    fairy.wingL.rotation.y = -flap;
    fairy.wingR.rotation.y = flap;
    // Slow sway so the voxels read as 3D.
    fairy.group.rotation.y = -0.3 + Math.sin(t * 0.7) * 0.18;
    // Wand star twinkles while talking, lazy spin otherwise.
    fairy.star.rotation.z += dt * (speaking ? 9 : 1.2);
    // Mouth chatter.
    const open = speaking && Math.sin(t * 16) > 0;
    if (open !== mouthOpen) {
      mouthOpen = open;
      fairy.face.map = open ? fairy.faceOpen : fairy.faceClosed;
      fairy.face.needsUpdate = true;
    }
    // Legs dangle.
    fairy.legL.rotation.x = Math.sin(t * 2.1) * 0.18;
    fairy.legR.rotation.x = Math.sin(t * 2.1 + 1.4) * 0.18;
    renderer.render(scene, camera);
  });

  window.addEventListener('wr-speech', (ev) => {
    speaking = !!ev.detail.speaking;
    el.classList.toggle('speaking', speaking);
  });
}

export function flyTo(screen) {
  if (!el) return;
  const p = PERCHES[screen];
  // Screens with no perch (e.g. the self-contained cutscene) hide her —
  // otherwise she'd be stranded at her last perch, over the scene.
  el.classList.toggle('hidden', !p);
  if (!p) return;
  // Face the direction she's flying (art faces slightly right).
  if (p.x !== lastX) el.classList.toggle('face-left', p.x < lastX);
  lastX = p.x;
  el.style.left = `${p.x}%`;
  el.style.top = `${p.y}%`;
}
