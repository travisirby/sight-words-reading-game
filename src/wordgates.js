// Three voxel arches (one per lane), each with a big white word sign drawn
// on a reused canvas texture. Spawn/despawn by toggling visibility.

import * as THREE from 'three';
import { LANE_X } from './player.js';

const SIGN_W = 2.3;
const SIGN_H = 1.15;

function drawWord(canvas, word) {
  const g = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  g.fillStyle = '#ffffff';
  g.fillRect(0, 0, W, H);
  g.lineWidth = 16;
  g.strokeStyle = '#000000';
  g.strokeRect(8, 8, W - 16, H - 16);
  g.fillStyle = '#000000';
  let size = 140;
  g.font = `bold ${size}px 'Arial Rounded MT Bold', 'Comic Sans MS', Arial, sans-serif`;
  // Shrink to fit long words.
  while (g.measureText(word).width > W - 70 && size > 40) {
    size -= 10;
    g.font = `bold ${size}px 'Arial Rounded MT Bold', 'Comic Sans MS', Arial, sans-serif`;
  }
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(word, W / 2, H / 2 + 6);
}

export class WordGates {
  constructor(scene) {
    this.scene = scene;
    this.active = false;
    this.z = 0;
    this.words = ['', '', ''];
    this.targetLane = 0;
    this.gates = [];

    const box = new THREE.BoxGeometry(1, 1, 1);
    const pillarMat = new THREE.MeshLambertMaterial({ color: 0x8d5a2b });
    const topMat = new THREE.MeshLambertMaterial({ color: 0xa96f3b });

    for (let lane = 0; lane < 3; lane++) {
      const group = new THREE.Group();
      // Two voxel pillars.
      for (const px of [-1.15, 1.15]) {
        for (let h = 0; h < 3; h++) {
          const b = new THREE.Mesh(box, pillarMat);
          b.scale.set(0.35, 1, 0.35);
          b.position.set(px, h + 0.5, 0);
          group.add(b);
        }
      }
      // Cross beam.
      const beam = new THREE.Mesh(box, topMat);
      beam.scale.set(2.7, 0.35, 0.4);
      beam.position.set(0, 3.15, 0);
      group.add(beam);

      // Sign (canvas texture, reused per spawn).
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(SIGN_W, SIGN_H),
        new THREE.MeshBasicMaterial({ map: tex, side: THREE.DoubleSide })
      );
      sign.position.set(0, 2.35, 0.01);
      group.add(sign);

      group.position.x = LANE_X[lane];
      group.visible = false;
      this.scene.add(group);
      this.gates.push({ group, canvas, tex });
    }
  }

  // words: array of 3 (one per lane), targetLane: 0..2
  spawn(z, words, targetLane) {
    this.z = z;
    this.words = words;
    this.targetLane = targetLane;
    this.active = true;
    for (let lane = 0; lane < 3; lane++) {
      const g = this.gates[lane];
      drawWord(g.canvas, words[lane]);
      g.tex.needsUpdate = true;
      g.group.position.z = z;
      g.group.visible = true;
    }
  }

  clear() {
    this.active = false;
    for (const g of this.gates) g.group.visible = false;
  }

  // Returns true once when the player crosses the gate plane.
  crossed(playerZ) {
    return this.active && playerZ <= this.z;
  }
}
