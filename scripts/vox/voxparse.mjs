// Minimal MagicaVoxel .vox parser — just what the baker needs:
// the first SIZE/XYZI model and the RGBA palette. Ignores scene-graph,
// material, and animation chunks.

export function parseVox(buf) {
  if (buf.toString('ascii', 0, 4) !== 'VOX ') throw new Error('not a .vox file');
  let size = null;
  let voxels = null;
  let palette = defaultPalette();

  let off = 8; // skip magic + version
  const walk = (end) => {
    while (off < end) {
      const id = buf.toString('ascii', off, off + 4);
      const contentLen = buf.readInt32LE(off + 4);
      const childrenLen = buf.readInt32LE(off + 8);
      const content = off + 12;
      if (id === 'SIZE' && !size) {
        size = {
          x: buf.readInt32LE(content),
          y: buf.readInt32LE(content + 4),
          z: buf.readInt32LE(content + 8),
        };
      } else if (id === 'XYZI' && !voxels) {
        const n = buf.readInt32LE(content);
        voxels = new Array(n);
        for (let i = 0; i < n; i++) {
          const p = content + 4 + i * 4;
          voxels[i] = [buf[p], buf[p + 1], buf[p + 2], buf[p + 3]];
        }
      } else if (id === 'RGBA') {
        palette = new Array(256);
        for (let i = 0; i < 256; i++) {
          const p = content + i * 4;
          // XYZI color index i maps to RGBA array entry i-1; keep the raw
          // array here and let callers do palette[ci - 1].
          palette[i] = [buf[p], buf[p + 1], buf[p + 2], buf[p + 3]];
        }
      }
      off = content + contentLen; // past this chunk's content
      if (childrenLen > 0) walk(off + childrenLen); // consume child chunks
    }
  };
  // MAIN chunk header sits at offset 8; walk it like any chunk.
  walk(buf.length);

  if (!size || !voxels) throw new Error('missing SIZE/XYZI chunk');
  return { size, voxels, palette };
}

function defaultPalette() {
  const p = new Array(256);
  for (let i = 0; i < 256; i++) p[i] = [128, 128, 128, 255];
  return p;
}
