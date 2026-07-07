// Offscreen character portraits for the player-select cards. One tiny
// throwaway renderer draws every look in the batch, then gets torn down —
// iOS Safari caps live WebGL contexts, and the main game already holds one.

import * as THREE from 'three';
import { makeKidMesh, applyLook } from './player.js';
import { voxelGeo } from './voxelgeo.js';
import { configureRenderer } from './rendercfg.js';

const SIZE = 200; // square canvas; crisp enough at ~100px CSS on retina

// looks: array of look objects (see character.js lookFrom).
// Returns an array of PNG dataURLs, one per look, in order.
export function renderLookThumbnails(looks) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true, // transparent background — the card provides the color
    preserveDrawingBuffer: true, // needed for toDataURL
  });
  renderer.setSize(SIZE, SIZE);
  configureRenderer(renderer); // match the main scene's color response

  // Same warm-key/cool-fill rig as the character editor (charscene.js), so a
  // portrait shows the exact colors the kid just saw while customizing.
  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xe4edf7, 0.8));
  const sun = new THREE.DirectionalLight(0xffeccc, 1.0);
  sun.position.set(2, 4, 3);
  scene.add(sun);

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 20);
  camera.position.set(0, 1.35, 3.4);
  camera.lookAt(0, 0.8, 0);

  const kid = makeKidMesh(1);
  kid.rotation.y = -Math.PI / 2 + 0.45; // slight 3/4 turn, face to camera
  scene.add(kid);

  const urls = looks.map((look) => {
    applyLook(kid, look);
    renderer.render(scene, camera);
    return renderer.domElement.toDataURL('image/png');
  });

  // Tear everything down so the context is actually released.
  const p = kid.userData.parts;
  if (p.face.map) p.face.map.dispose();
  for (const m of [...p.mats, p.face]) m.dispose();
  // voxelGeo is the app-wide shared unit voxel — disposing it here would
  // evict the main renderer's GPU copy too (same guard as wordevents.js).
  kid.traverse((o) => o.geometry && o.geometry !== voxelGeo && o.geometry.dispose());
  renderer.dispose();
  renderer.forceContextLoss();
  return urls;
}
