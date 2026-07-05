// Overworld layout: serpentine journey across 5 themed regions.
// Node/path positions are derived from WORLDS level counts so the map
// always matches the word data. Pure data — no three.js, node-testable.

import { WORLDS } from './words.js';
import { mulberry32 } from './level.js';

const ROW_Z = 9; // distance between region rows
const ROW_W = 26; // row width in x

// Returns { nodes, secretNodes, segments, bounds }.
//  nodes: [{ world, level, isWorldFinal, x, z }] in journey order
//  secretNodes: [{ world, x, z }]
//  segments: segments[i] = points [{x,z}, ...] from node i-1 to node i
export function buildMapData() {
  const rand = mulberry32(1234);
  const nodes = [];
  const secretNodes = [];

  WORLDS.forEach((w, wi) => {
    const n = w.levels.length;
    const leftToRight = wi % 2 === 0;
    for (let li = 0; li < n; li++) {
      const t = n === 1 ? 0.5 : li / (n - 1);
      const tx = leftToRight ? t : 1 - t;
      nodes.push({
        world: wi,
        level: li,
        isWorldFinal: li === n - 1,
        x: -ROW_W / 2 + tx * ROW_W,
        z: wi * ROW_Z + Math.sin(t * Math.PI * 2 + wi) * 1.4,
      });
    }
    // Behind the row (the transition corridors run on the +z side), so the
    // secret branch visibly loops toward the map edge, clear of the trail.
    secretNodes.push({
      world: wi,
      x: leftToRight ? ROW_W / 2 + 6 : -ROW_W / 2 - 6,
      z: wi * ROW_Z - 4.5,
    });
  });

  // Path polylines between consecutive nodes (with a corner waypoint on
  // row changes), sampled roughly every unit for the voxel path tiles.
  const segments = [null];
  for (let i = 1; i < nodes.length; i++) {
    const a = nodes[i - 1];
    const b = nodes[i];
    const way = [{ x: a.x, z: a.z }];
    if (a.world !== b.world) {
      const cornerX = a.x + (a.x > 0 ? 3.5 : -3.5);
      way.push({ x: cornerX, z: a.z + ROW_Z * 0.5 });
    }
    way.push({ x: b.x, z: b.z });
    segments.push(samplePolyline(way, rand, a.world === b.world));
  }

  const bounds = {
    minX: -ROW_W / 2 - 8, maxX: ROW_W / 2 + 8,
    minZ: -5, maxZ: (WORLDS.length - 1) * ROW_Z + 7,
  };

  return { nodes, secretNodes, segments, bounds };
}

// Secret branch: drops off the back of the row, then hugs the back edge out
// to the ledge. Stays ~2+ units behind the main trail (nodes wiggle to
// z=row-1.4, main tiles to z=row-1.9) so it never crosses pads or path tiles
// except right where it departs its anchor node.
export function secretSegment(fromNode, secretNode) {
  const dir = secretNode.x >= fromNode.x ? 1 : -1;
  const backZ = secretNode.z + 0.5;
  const way = [
    { x: fromNode.x, z: fromNode.z },
    { x: fromNode.x + dir * 0.6, z: backZ + 0.7 },
    { x: secretNode.x - dir * 3.2, z: backZ },
    { x: secretNode.x, z: secretNode.z },
  ];
  return samplePolyline(way, mulberry32(99), false);
}

function samplePolyline(way, rand, wiggle) {
  const pts = [];
  for (let s = 0; s < way.length - 1; s++) {
    const a = way[s];
    const b = way[s + 1];
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    const steps = Math.max(2, Math.round(len));
    // Perpendicular unit for the wiggle.
    const px = -(b.z - a.z) / (len || 1);
    const pz = (b.x - a.x) / (len || 1);
    for (let k = s === 0 ? 0 : 1; k <= steps; k++) {
      const t = k / steps;
      const wob = wiggle ? Math.sin(t * Math.PI * 2 + rand() * 6) * 0.5 : 0;
      pts.push({ x: a.x + (b.x - a.x) * t + px * wob, z: a.z + (b.z - a.z) * t + pz * wob });
    }
  }
  // Trim the ends so tiles don't sit under the nodes themselves.
  return pts.slice(1, -1);
}
