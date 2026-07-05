// Character creator preview: the kid on a little green pedestal, slowly
// spinning so every hairstyle/color choice is visible from all sides.
// DOM chrome (swatches) overlays this via screen-char.

import * as THREE from 'three';
import { makeKidMesh, applyLook } from './player.js';

export class CharScene {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x8fd3f7);
    this.scene.fog = new THREE.Fog(0x8fd3f7, 12, 30);

    this.camera = new THREE.PerspectiveCamera(
      38, window.innerWidth / window.innerHeight, 0.1, 60
    );
    // View center sits to the kid's right so he appears on the left half of
    // the screen, clear of the swatch panel docked on the right.
    this.camera.position.set(1.1, 1.9, 6.4);
    this.camera.lookAt(1.1, 0.55, 0);

    this.scene.add(new THREE.AmbientLight(0xffffff, 0.75));
    const sun = new THREE.DirectionalLight(0xffffff, 0.9);
    sun.position.set(3, 5, 4);
    this.scene.add(sun);

    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.0, 1.15, 0.22, 32),
      new THREE.MeshLambertMaterial({ color: 0x6ddf6d })
    );
    pedestal.position.y = -0.11;
    this.scene.add(pedestal);

    this.kid = makeKidMesh(1);
    this.scene.add(this.kid);
    this.t = 0;
  }

  setLook(look) {
    applyLook(this.kid, look);
  }

  tick(dt) {
    this.t += dt;
    this.kid.rotation.y = this.t * 0.9;
    // Gentle idle bob + arm sway so he feels alive while being dressed.
    this.kid.position.y = Math.sin(this.t * 2.2) * 0.03;
    const p = this.kid.userData.parts;
    const sway = Math.sin(this.t * 2.2) * 0.15;
    p.armL.rotation.z = sway;
    p.armR.rotation.z = -sway;
  }
}
