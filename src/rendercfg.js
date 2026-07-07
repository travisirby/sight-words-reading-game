// The one color pipeline every renderer shares (main game, fairy overlay,
// portrait thumbnails). Filmic tone mapping: soft highlight rolloff instead
// of clipping. Exposure lifted past 1 because ACES darkens mids. Level
// palettes (level.js) are saturation-boosted against exactly these settings,
// so retune them together — and only here, never per renderer.
import * as THREE from 'three';

export const TONE_EXPOSURE = 1.15;

export function configureRenderer(renderer) {
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = TONE_EXPOSURE;
}
