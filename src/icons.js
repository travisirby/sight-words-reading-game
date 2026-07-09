// Chunky voxel-style SVG icons for DOM chrome. Same visual language as
// style.css buttons: hard #2c3e75 outlines, flat fills, optional top bevel.
// No system emoji — identical on every platform.

export const C = {
  ink: '#2c3e75',
  gold: '#f7c948',
  goldMid: '#e0a82e',
  goldDark: '#c9971e',
  cream: '#fdf4d7',
  white: '#ffffff',
  sky: '#74b9ff',
  skyDark: '#3f7fc4',
  green: '#8fd35f',
  greenDark: '#569e36',
  red: '#ff6b6b',
  redDark: '#c44545',
  purple: '#c77df0',
  purpleDark: '#8e4ec6',
  gem: '#5ec8ff',
  gemLite: '#b8ecff',
  gemDark: '#2a7fbf',
  brown: '#8d6b45',
  brownDark: '#5a3d1e',
  wood: '#c68642',
  pink: '#ff8fab',
  orange: '#ff8c3e',
  snow: '#e8f4ff',
  leaf: '#6cc24a',
  cabbage: '#7d4aa8',
};

function svg(parts, size = 32) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="${size}" height="${size}" class="icon-svg" aria-hidden="true" focusable="false">${parts}</svg>`;
}

// Filled rounded-ish rect with ink stroke (voxel block face).
function block(x, y, w, h, fill, r = 2) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" ry="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
}

function circle(cx, cy, r, fill) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
}

function poly(points, fill) {
  return `<polygon points="${points}" fill="${fill}" stroke="${C.ink}" stroke-width="2" stroke-linejoin="round"/>`;
}

function path(d, fill, stroke = C.ink) {
  return `<path d="${d}" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
}

// Stroke-drawn glyph with an ink outline: fat ink stroke underneath, the
// colored stroke on top. Reads chunky at any size.
function inkStroke(d, width = 5, color = C.white) {
  const cap = 'stroke-linecap="round" stroke-linejoin="round" fill="none"';
  return `<path d="${d}" stroke="${C.ink}" stroke-width="${width + 4}" ${cap}/>` +
    `<path d="${d}" stroke="${color}" stroke-width="${width}" ${cap}/>`;
}

// ---------- chrome / currency ----------

const ICONS = {
  coin: (s) => svg(
    circle(16, 16, 11, C.gold) +
    circle(16, 16, 6.5, C.goldMid) +
    `<circle cx="16" cy="16" r="6.5" fill="none" stroke="${C.ink}" stroke-width="1.5"/>` +
    block(14, 10, 4, 12, C.gold, 1),
    s
  ),

  gem: (s) => svg(
    poly('16,4 26,12 22,26 10,26 6,12', C.gem) +
    poly('16,4 22,12 16,14 10,12', C.gemLite) +
    `<line x1="16" y1="14" x2="16" y2="26" stroke="${C.ink}" stroke-width="1.5"/>` +
    `<line x1="6" y1="12" x2="26" y2="12" stroke="${C.ink}" stroke-width="1.5"/>`,
    s
  ),

  key: (s) => svg(
    circle(11, 12, 7, C.gold) +
    circle(11, 12, 3.2, C.cream) +
    block(16, 10, 12, 4, C.gold, 1) +
    block(24, 14, 4, 5, C.gold, 1) +
    block(20, 14, 3, 4, C.gold, 1),
    s
  ),

  star: (s) => svg(
    poly('16,3 19.5,12 29,12.5 21.5,18.5 24.5,28 16,22.5 7.5,28 10.5,18.5 3,12.5 12.5,12', C.gold),
    s
  ),

  starEmpty: (s) => svg(
    poly('16,3 19.5,12 29,12.5 21.5,18.5 24.5,28 16,22.5 7.5,28 10.5,18.5 3,12.5 12.5,12', C.cream),
    s
  ),

  // Glyph icons (play/pause/arrows/close/check/skip…) fill the whole
  // viewBox with no background plate: they always sit inside a chunky
  // .btn box, so drawing a second box made the glyph itself tiny.

  play: (s) => svg(poly('9,4 28,16 9,28', C.white), s),

  pause: (s) => svg(
    block(7, 5, 7, 22, C.white, 2) +
    block(18, 5, 7, 22, C.white, 2),
    s
  ),

  resume: (s) => svg(poly('9,4 28,16 9,28', C.white), s),

  replay: (s) => svg(
    inkStroke('M24.5 11.5A9.5 9.5 0 1 0 26 19', 4) +
    poly('23.5,3 29.5,11 19.5,12.5', C.white),
    s
  ),

  settings: (s) => svg(
    // teeth first, then the body circle over their inner ends so the
    // strokes merge into one solid cog silhouette
    block(13, 2, 6, 8, C.gold, 1) +
    block(13, 22, 6, 8, C.gold, 1) +
    block(2, 13, 8, 6, C.gold, 1) +
    block(22, 13, 8, 6, C.gold, 1) +
    block(4.5, 4.5, 7, 7, C.gold, 1) +
    block(20.5, 4.5, 7, 7, C.gold, 1) +
    block(4.5, 20.5, 7, 7, C.gold, 1) +
    block(20.5, 20.5, 7, 7, C.gold, 1) +
    `<circle cx="16" cy="16" r="9.5" fill="${C.gold}"/>` +
    circle(16, 16, 4.5, C.cream),
    s
  ),

  close: (s) => svg(
    inkStroke('M8 8L24 24M24 8L8 24', 5),
    s
  ),

  back: (s) => svg(
    poly('28,11.5 16,11.5 16,5 4,16 16,27 16,20.5 28,20.5', C.white),
    s
  ),

  forward: (s) => svg(
    poly('4,11.5 16,11.5 16,5 28,16 16,27 16,20.5 4,20.5', C.white),
    s
  ),

  up: (s) => svg(
    poly('11.5,28 11.5,16 5,16 16,4 27,16 20.5,16 20.5,28', C.white),
    s
  ),

  down: (s) => svg(
    poly('11.5,4 11.5,16 5,16 16,28 27,16 20.5,16 20.5,4', C.white),
    s
  ),

  sound: (s) => svg(
    block(5, 11, 7, 10, C.sky, 2) +
    poly('12,11 20,6 20,26 12,21', C.sky) +
    `<path d="M23 11c2 2 2 8 0 10" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<path d="M26 8c3.5 3 3.5 13 0 16" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>`,
    s
  ),

  soundOff: (s) => svg(
    block(5, 11, 7, 10, C.red, 2) +
    poly('12,11 20,6 20,26 12,21', C.red) +
    `<line x1="24" y1="10" x2="28" y2="22" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<line x1="28" y1="10" x2="24" y2="22" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>`,
    s
  ),

  music: (s) => svg(
    block(18, 6, 5, 14, C.purple, 1) +
    circle(12, 22, 5, C.purple) +
    circle(23, 18, 4, C.purple) +
    block(12, 8, 11, 3, C.purple, 1),
    s
  ),

  mic: (s) => svg(
    block(12, 4, 8, 14, C.red, 4) +
    path('M8 14v2a8 8 0 0 0 16 0v-2', 'none') +
    `<path d="M8 14v2a8 8 0 0 0 16 0v-2" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>` +
    block(14, 24, 4, 5, C.ink, 1) +
    block(10, 27, 12, 3, C.ink, 1),
    s
  ),

  lock: (s) => svg(
    block(8, 14, 16, 14, C.gold, 3) +
    path('M11 14V10a5 5 0 0 1 10 0v4', 'none') +
    `<path d="M11 14V10a5 5 0 0 1 10 0v4" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>` +
    circle(16, 20, 2.5, C.ink),
    s
  ),

  unlock: (s) => svg(
    block(8, 14, 16, 14, C.green, 3) +
    path('M11 14V10a5 5 0 0 1 9-2', 'none') +
    `<path d="M11 14V10a5 5 0 0 1 9-2" fill="none" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>` +
    circle(16, 20, 2.5, C.ink),
    s
  ),

  map: (s) => svg(
    block(4, 6, 10, 20, C.cream, 2) +
    block(12, 4, 10, 20, '#e8c96a', 2) +
    block(20, 7, 8, 18, C.cream, 2) +
    circle(10, 14, 2.5, C.red) +
    circle(17, 18, 2, C.greenDark) +
    circle(24, 12, 2, C.skyDark),
    s
  ),

  house: (s) => svg(
    block(6, 14, 20, 14, C.cream, 2) +
    poly('4,16 16,5 28,16', C.red) +
    block(13, 20, 6, 8, C.brown, 1) +
    block(9, 17, 5, 4, C.sky, 1),
    s
  ),

  shop: (s) => svg(
    block(5, 12, 22, 14, C.sky, 2) +
    poly('5,12 10,6 22,6 27,12', C.red) +
    block(13, 18, 6, 8, C.cream, 1) +
    circle(11, 16, 1.5, C.gold) +
    circle(21, 16, 1.5, C.gold),
    s
  ),

  progress: (s) => svg(
    block(5, 18, 5, 8, C.sky, 1) +
    block(13, 12, 5, 14, C.green, 1) +
    block(21, 7, 5, 19, C.gold, 1),
    s
  ),

  players: (s) => svg(
    // two simple kid heads
    circle(11, 11, 5, '#ffcf9e') +
    block(7, 17, 8, 8, C.sky, 2) +
    circle(22, 12, 5, '#c68642') +
    block(18, 18, 8, 7, C.pink, 2),
    s
  ),

  check: (s) => svg(
    inkStroke('M5 17L13 25L27 8', 5.5),
    s
  ),

  skip: (s) => svg(
    poly('4,6 16,16 4,26', C.white) +
    poly('16,6 28,16 16,26', C.white),
    s
  ),

  // Used bare on the cream new-player card, so it keeps a green fill.
  plus: (s) => svg(
    path('M12.5 4h7v8.5H28v7h-8.5V28h-7v-8.5H4v-7h8.5z', C.green),
    s
  ),

  // White body so it reads on the red "Yes, delete" button and cream panels.
  trash: (s) => svg(
    block(9, 10, 14, 16, C.white, 2) +
    block(7, 8, 18, 4, C.ink, 1) +
    block(12, 5, 8, 4, C.ink, 1) +
    `<line x1="13" y1="14" x2="13" y2="22" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>` +
    `<line x1="19" y1="14" x2="19" y2="22" stroke="${C.ink}" stroke-width="2" stroke-linecap="round"/>`,
    s
  ),

  no: (s) => svg(
    circle(16, 16, 12, C.red) +
    `<line x1="9" y1="9" x2="23" y2="23" stroke="${C.white}" stroke-width="3.5" stroke-linecap="round"/>`,
    s
  ),

  trophy: (s) => svg(
    path('M8 8h16v4a8 8 0 0 1-16 0V8z', C.gold) +
    block(6, 6, 4, 8, C.gold, 1) +
    block(22, 6, 4, 8, C.gold, 1) +
    block(13, 20, 6, 4, C.gold, 1) +
    block(10, 24, 12, 4, C.goldDark, 1),
    s
  ),

  party: (s) => svg(
    poly('8,26 14,8 20,26', C.gold) +
    circle(10, 6, 2, C.red) +
    circle(18, 5, 2, C.sky) +
    circle(24, 10, 2, C.green) +
    circle(22, 18, 2, C.purple) +
    circle(7, 14, 2, C.orange),
    s
  ),

  crown: (s) => svg(
    poly('5,22 5,12 11,18 16,8 21,18 27,12 27,22', C.gold) +
    circle(16, 7, 2, C.red) +
    circle(6, 11, 1.8, C.sky) +
    circle(26, 11, 1.8, C.green),
    s
  ),

  sparkle: (s) => svg(
    poly('16,3 18,13 28,16 18,19 16,29 14,19 4,16 14,13', C.gold) +
    poly('24,5 25,9 29,10 25,11 24,15 23,11 19,10 23,9', C.cream),
    s
  ),

  book: (s) => svg(
    block(6, 5, 10, 22, C.red, 2) +
    block(16, 5, 10, 22, C.sky, 2) +
    block(14, 5, 4, 22, C.cream, 1) +
    block(8, 10, 6, 2, C.cream, 1) +
    block(18, 10, 6, 2, C.cream, 1),
    s
  ),

  target: (s) => svg(
    circle(16, 16, 12, C.red) +
    circle(16, 16, 8, C.cream) +
    circle(16, 16, 4, C.red),
    s
  ),

  clock: (s) => svg(
    circle(16, 16, 12, C.cream) +
    `<line x1="16" y1="16" x2="16" y2="9" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>` +
    `<line x1="16" y1="16" x2="22" y2="18" stroke="${C.ink}" stroke-width="2.5" stroke-linecap="round"/>` +
    circle(16, 16, 2, C.ink),
    s
  ),

  strength: (s) => svg(
    // simple arm flex / weight
    block(4, 13, 6, 6, C.ink, 2) +
    block(22, 13, 6, 6, C.ink, 2) +
    block(9, 14, 14, 4, C.gold, 1) +
    block(13, 10, 6, 12, '#ffcf9e', 2),
    s
  ),

  secret: (s) => svg(
    poly('16,4 24,14 16,28 8,14', C.purple) +
    poly('16,4 20,14 16,18 12,14', '#e0b0ff'),
    s
  ),

  castle: (s) => svg(
    block(6, 12, 20, 16, C.cream, 1) +
    block(5, 8, 5, 8, C.cream, 1) +
    block(22, 8, 5, 8, C.cream, 1) +
    block(13, 6, 6, 10, C.cream, 1) +
    block(14, 20, 4, 8, C.brown, 1) +
    poly('13,6 16,2 19,6', C.red),
    s
  ),

  // ---------- character style / outfit ----------

  hairShort: (s) => svg(
    circle(16, 18, 9, '#ffcf9e') +
    path('M7 16c0-8 4-12 9-12s9 4 9 12', C.brownDark) +
    block(10, 8, 12, 5, C.brownDark, 2),
    s
  ),

  hairSpiky: (s) => svg(
    circle(16, 18, 9, '#ffcf9e') +
    poly('8,16 10,6 13,14 16,4 19,14 22,6 24,16', C.brownDark),
    s
  ),

  hairLong: (s) => svg(
    block(7, 16, 5, 12, C.brownDark, 2) +
    block(20, 16, 5, 12, C.brownDark, 2) +
    circle(16, 16, 9, '#ffcf9e') +
    path('M7 14c0-8 4-11 9-11s9 3 9 11', C.brownDark),
    s
  ),

  hairBuzz: (s) => svg(
    circle(16, 18, 9, '#ffcf9e') +
    path('M8 15c1-6 4-9 8-9s7 3 8 9', C.brownDark),
    s
  ),

  hairBald: (s) => svg(
    circle(16, 17, 10, '#ffcf9e') +
    circle(12, 16, 1.5, C.ink) +
    circle(20, 16, 1.5, C.ink) +
    path('M13 21c1.5 1.5 4.5 1.5 6 0', 'none') +
    `<path d="M13 21c1.5 1.5 4.5 1.5 6 0" fill="none" stroke="${C.ink}" stroke-width="1.5" stroke-linecap="round"/>`,
    s
  ),

  outfitShirt: (s) => svg(
    path('M8 10 L16 6 L24 10 L22 14 L20 12 L20 26 L12 26 L12 12 L10 14 Z', C.sky) +
    block(12, 14, 8, 10, C.brown, 1),
    s
  ),

  outfitDress: (s) => svg(
    path('M11 8 L21 8 L24 26 L8 26 Z', C.pink) +
    block(13, 6, 6, 5, '#ffcf9e', 2) +
    block(12, 11, 8, 3, C.purple, 1),
    s
  ),

  outfitOveralls: (s) => svg(
    block(10, 8, 12, 8, C.sky, 2) +
    path('M8 14 L24 14 L22 26 L10 26 Z', C.skyDark) +
    block(14, 14, 4, 4, C.gold, 1) +
    block(10, 6, 3, 6, C.skyDark, 1) +
    block(19, 6, 3, 6, C.skyDark, 1),
    s
  ),

  // ---------- worlds ----------

  worldPasta: (s) => svg(
    circle(16, 18, 11, C.cream) +
    path('M8 16c2 4 6 6 8 2 2 4 6 2 8-2', 'none') +
    `<path d="M8 16c2 4 6 6 8 2 2 4 6 2 8-2" fill="none" stroke="${C.goldDark}" stroke-width="2.5" stroke-linecap="round"/>` +
    circle(12, 14, 2, C.red) +
    circle(20, 15, 2, C.red) +
    circle(16, 20, 2, C.leaf),
    s
  ),

  worldWaffle: (s) => svg(
    block(6, 6, 20, 20, C.gold, 3) +
    `<line x1="12" y1="8" x2="12" y2="24" stroke="${C.goldDark}" stroke-width="2"/>` +
    `<line x1="20" y1="8" x2="20" y2="24" stroke="${C.goldDark}" stroke-width="2"/>` +
    `<line x1="8" y1="12" x2="24" y2="12" stroke="${C.goldDark}" stroke-width="2"/>` +
    `<line x1="8" y1="20" x2="24" y2="20" stroke="${C.goldDark}" stroke-width="2"/>` +
    block(13, 4, 6, 4, '#c94f2e', 1),
    s
  ),

  worldSnow: (s) => svg(
    poly('6,24 16,6 26,24', C.snow) +
    poly('16,6 20,14 16,14 12,14', C.white) +
    circle(10, 10, 2, C.sky) +
    circle(24, 12, 1.5, C.sky) +
    circle(18, 8, 1.5, C.sky),
    s
  ),

  worldCabbage: (s) => svg(
    circle(16, 16, 11, C.cabbage) +
    circle(16, 16, 7, '#9b6bc4') +
    circle(16, 16, 3.5, '#c9a0e8') +
    poly('16,5 18,10 14,10', C.leaf),
    s
  ),

  worldCrystal: (s) => svg(
    poly('16,3 24,14 20,28 12,28 8,14', C.gem) +
    poly('16,3 20,14 16,16 12,14', C.gemLite) +
    `<line x1="12" y1="14" x2="20" y2="14" stroke="${C.ink}" stroke-width="1.5"/>`,
    s
  ),

  worldPepper: (s) => svg(
    path('M16 6c-6 2-9 10-7 16 1 4 4 6 7 6s6-2 7-6c2-6-1-14-7-16z', C.red) +
    block(14, 3, 4, 5, C.leaf, 1) +
    poly('14,5 10,2 14,4', C.leaf),
    s
  ),

  // ---------- house shop items ----------

  itemRug: (s) => svg(
    block(4, 10, 24, 14, C.red, 2) +
    block(7, 13, 18, 8, '#ffd0d0', 1) +
    block(10, 15, 12, 4, C.gold, 1),
    s
  ),

  itemChair: (s) => svg(
    block(8, 8, 16, 6, C.wood, 2) +
    block(8, 14, 16, 4, C.wood, 1) +
    block(8, 18, 3, 8, C.brownDark, 1) +
    block(21, 18, 3, 8, C.brownDark, 1) +
    block(8, 4, 4, 6, C.wood, 1),
    s
  ),

  itemTable: (s) => svg(
    block(5, 12, 22, 5, C.wood, 2) +
    block(8, 17, 3, 9, C.brownDark, 1) +
    block(21, 17, 3, 9, C.brownDark, 1) +
    circle(16, 10, 3, C.cream) +
    block(12, 8, 8, 2, C.red, 1),
    s
  ),

  itemBed: (s) => svg(
    block(4, 14, 24, 8, C.sky, 2) +
    block(4, 10, 8, 6, C.cream, 2) +
    block(14, 12, 12, 4, C.pink, 1) +
    block(4, 22, 3, 5, C.brownDark, 1) +
    block(25, 22, 3, 5, C.brownDark, 1),
    s
  ),

  itemLamp: (s) => svg(
    block(14, 18, 4, 8, C.ink, 1) +
    block(10, 26, 12, 3, C.ink, 1) +
    poly('10,18 16,6 22,18', C.gold) +
    circle(16, 12, 2, C.cream),
    s
  ),

  itemBookshelf: (s) => svg(
    block(7, 4, 18, 24, C.wood, 2) +
    block(9, 7, 5, 7, C.red, 1) +
    block(15, 7, 4, 7, C.sky, 1) +
    block(20, 7, 3, 7, C.green, 1) +
    block(9, 16, 6, 7, C.purple, 1) +
    block(16, 16, 7, 7, C.gold, 1),
    s
  ),

  itemToybox: (s) => svg(
    block(5, 12, 22, 14, C.sky, 2) +
    block(5, 8, 22, 6, C.red, 2) +
    circle(16, 11, 2, C.gold) +
    block(10, 16, 5, 5, C.gold, 1) +
    circle(22, 18, 3, C.pink),
    s
  ),

  itemFlowers: (s) => svg(
    block(8, 20, 16, 6, C.leaf, 2) +
    circle(11, 12, 4, C.pink) +
    circle(16, 8, 4, C.gold) +
    circle(22, 13, 4, C.purple) +
    block(15, 12, 2, 10, C.leaf, 1) +
    block(10, 14, 2, 8, C.leaf, 1) +
    block(21, 15, 2, 7, C.leaf, 1),
    s
  ),

  itemMailbox: (s) => svg(
    block(8, 10, 16, 10, C.sky, 3) +
    block(14, 20, 4, 8, C.brownDark, 1) +
    block(20, 12, 6, 3, C.red, 1) +
    block(10, 13, 8, 2, C.cream, 1),
    s
  ),

  itemTree: (s) => svg(
    block(13, 18, 6, 10, C.brown, 1) +
    circle(16, 12, 9, C.leaf) +
    circle(11, 14, 5, C.greenDark) +
    circle(22, 13, 5, C.green),
    s
  ),

  itemSwing: (s) => svg(
    block(6, 4, 3, 24, C.brownDark, 1) +
    block(23, 4, 3, 24, C.brownDark, 1) +
    block(6, 4, 20, 3, C.brownDark, 1) +
    `<line x1="12" y1="7" x2="12" y2="18" stroke="${C.ink}" stroke-width="2"/>` +
    `<line x1="20" y1="7" x2="20" y2="18" stroke="${C.ink}" stroke-width="2"/>` +
    block(10, 18, 12, 3, C.gold, 1),
    s
  ),

  itemTrampoline: (s) => svg(
    block(4, 18, 24, 6, C.sky, 3) +
    block(7, 16, 18, 4, C.purple, 2) +
    block(6, 24, 3, 4, C.ink, 1) +
    block(23, 24, 3, 4, C.ink, 1) +
    poly('14,8 18,14 10,14', C.gold),
    s
  ),

  itemCat: (s) => svg(
    circle(16, 18, 8, C.gold) +
    poly('9,12 11,4 14,12', C.gold) +
    poly('18,12 21,4 23,12', C.gold) +
    circle(13, 17, 1.5, C.ink) +
    circle(19, 17, 1.5, C.ink) +
    path('M14 21c1 1 3 1 4 0', 'none') +
    `<path d="M14 21c1 1 3 1 4 0" fill="none" stroke="${C.ink}" stroke-width="1.5" stroke-linecap="round"/>`,
    s
  ),

  itemDog: (s) => svg(
    circle(16, 17, 8, C.wood) +
    block(6, 12, 5, 8, C.wood, 2) +
    block(21, 12, 5, 8, C.wood, 2) +
    circle(13, 16, 1.5, C.ink) +
    circle(19, 16, 1.5, C.ink) +
    circle(16, 20, 2, C.pink),
    s
  ),

  itemAquarium: (s) => svg(
    block(5, 8, 22, 18, C.gemLite, 2) +
    block(5, 24, 22, 4, C.brown, 1) +
    circle(12, 16, 3, C.orange) +
    poly('15,16 20,13 20,19', C.orange) +
    block(20, 18, 4, 5, C.leaf, 1),
    s
  ),

  itemTelescope: (s) => svg(
    block(6, 18, 8, 4, C.ink, 1) +
    block(12, 14, 14, 5, C.purple, 2) +
    block(24, 12, 5, 8, C.gold, 1) +
    block(8, 22, 4, 6, C.ink, 1),
    s
  ),

  itemRobot: (s) => svg(
    block(9, 10, 14, 14, C.sky, 2) +
    block(11, 4, 10, 6, C.skyDark, 2) +
    circle(13, 15, 2, C.red) +
    circle(19, 15, 2, C.green) +
    block(5, 12, 4, 8, C.skyDark, 1) +
    block(23, 12, 4, 8, C.skyDark, 1),
    s
  ),

  itemRocket: (s) => svg(
    path('M16 3c4 6 5 14 5 20h-10c0-6 1-14 5-20z', C.red) +
    circle(16, 14, 3, C.sky) +
    poly('11,23 8,29 14,25', C.gold) +
    poly('21,23 24,29 18,25', C.gold) +
    poly('16,23 13,29 19,29', C.orange),
    s
  ),

  itemGolem: (s) => svg(
    circle(16, 14, 10, C.wood) +
    circle(12, 12, 2, C.ink) +
    circle(20, 12, 2, C.ink) +
    block(11, 18, 10, 3, C.red, 1) +
    block(6, 8, 4, 8, C.wood, 2) +
    block(22, 8, 4, 8, C.wood, 2),
    s
  ),

  itemSerpent: (s) => svg(
    path('M6 20c4-10 8-4 12-10 3 6 4 2 8 8', 'none') +
    `<path d="M6 20c4-10 8-4 12-10 3 6 4 2 8 8" fill="none" stroke="${C.goldDark}" stroke-width="4" stroke-linecap="round"/>` +
    circle(24, 16, 4, C.gold) +
    circle(25, 15, 1.2, C.ink),
    s
  ),

  itemYeti: (s) => svg(
    circle(16, 18, 9, C.snow) +
    circle(16, 10, 6, C.snow) +
    circle(13, 9, 1.5, C.ink) +
    circle(19, 9, 1.5, C.ink) +
    circle(16, 12, 1.5, C.orange) +
    block(8, 6, 4, 4, C.snow, 1) +
    block(20, 6, 4, 4, C.snow, 1),
    s
  ),

  itemCabbageCrown: (s) => svg(
    poly('5,20 5,12 11,16 16,8 21,16 27,12 27,20', C.cabbage) +
    circle(16, 8, 2, C.gold) +
    block(10, 20, 12, 4, C.gold, 1),
    s
  ),

  itemCrystalLamp: (s) => svg(
    block(13, 22, 6, 6, C.ink, 1) +
    poly('16,4 24,14 20,22 12,22 8,14', C.gem) +
    poly('16,4 20,14 16,16 12,14', C.gemLite),
    s
  ),

  itemDragonKite: (s) => svg(
    poly('8,8 24,16 8,24 12,16', C.red) +
    `<line x1="12" y1="16" x2="28" y2="28" stroke="${C.ink}" stroke-width="2"/>` +
    block(26, 26, 4, 4, C.gold, 1) +
    poly('8,8 4,4 10,10', C.leaf),
    s
  ),
};

// Map house item ids → icon names
export const ITEM_ICONS = {
  rug: 'itemRug',
  chair: 'itemChair',
  table: 'itemTable',
  bed: 'itemBed',
  lamp: 'itemLamp',
  bookshelf: 'itemBookshelf',
  toybox: 'itemToybox',
  flowers: 'itemFlowers',
  mailbox: 'itemMailbox',
  tree: 'itemTree',
  swing: 'itemSwing',
  trampoline: 'itemTrampoline',
  cat: 'itemCat',
  dog: 'itemDog',
  aquarium: 'itemAquarium',
  telescope: 'itemTelescope',
  robot: 'itemRobot',
  rocket: 'itemRocket',
  golemstatue: 'itemGolem',
  serpentstatue: 'itemSerpent',
  yetisnowman: 'itemYeti',
  cabbagecrown: 'itemCabbageCrown',
  crystallamp: 'itemCrystalLamp',
  dragonkite: 'itemDragonKite',
};

// World index → icon name (matches WORLDS order in words.js)
export const WORLD_ICONS = [
  'worldPasta',
  'worldWaffle',
  'worldSnow',
  'worldCabbage',
  'worldCrystal',
  'worldPepper',
];

export const STYLE_ICONS = [
  'hairShort', 'hairSpiky', 'hairLong', 'hairBuzz', 'hairBald',
];

export const OUTFIT_ICONS = [
  'outfitShirt', 'outfitDress', 'outfitOveralls',
];

export function iconHTML(name, size = 32) {
  const fn = ICONS[name];
  if (!fn) {
    console.warn(`[icons] unknown icon: ${name}`);
    return svg(block(8, 8, 16, 16, C.cream, 2), size);
  }
  return fn(size);
}

export function iconEl(name, size = 32) {
  const span = document.createElement('span');
  span.className = 'icon';
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = iconHTML(name, size);
  return span;
}

export function itemIconName(itemId) {
  return ITEM_ICONS[itemId] || 'shop';
}

export function worldIconName(worldIdx) {
  return WORLD_ICONS[worldIdx] || 'map';
}

// Fill every [data-icon] under root with its SVG.
export function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.getAttribute('data-icon');
    const size = Number(el.getAttribute('data-icon-size') || 32);
    el.classList.add('icon');
    el.setAttribute('aria-hidden', 'true');
    el.innerHTML = iconHTML(name, size);
  });
}

// Replace a button's leading icon (must already have [data-icon] child).
export function setIcon(el, name, size) {
  const slot = el.matches?.('[data-icon]') ? el : el.querySelector?.('[data-icon]');
  if (!slot) return;
  slot.setAttribute('data-icon', name);
  const s = size || Number(slot.getAttribute('data-icon-size') || 32);
  slot.setAttribute('data-icon-size', String(s));
  slot.innerHTML = iconHTML(name, s);
}

// Build a row of star icons (filled / empty).
export function starRow(count, max = 3, size = 28) {
  const wrap = document.createElement('span');
  wrap.className = 'icon-star-row';
  for (let i = 0; i < max; i++) {
    wrap.appendChild(iconEl(i < count ? 'star' : 'starEmpty', size));
  }
  return wrap;
}
