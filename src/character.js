// Character look data: palettes the kid can pick from, plus the mapping
// from stored indices to concrete colors. Names are spoken on tap.

export const PALETTES = {
  skin: {
    label: 'Skin',
    colors: [0xffcf9e, 0xf1b989, 0xc68642, 0x8d5524, 0x5a3825],
    names: ['Peach', 'Tan', 'Golden', 'Brown', 'Deep brown'],
  },
  hair: {
    label: 'Hair',
    colors: [0x5a3d1e, 0x1b1b1b, 0xeec95c, 0xc94f2e, 0x3a6fd8, 0xd85ab0],
    names: ['Brown', 'Black', 'Blonde', 'Red', 'Blue', 'Pink'],
  },
  shirt: {
    label: 'Shirt',
    colors: [0x2979ff, 0xe53935, 0x43a047, 0xfbc02d, 0x8e24aa, 0xff7043],
    names: ['Blue', 'Red', 'Green', 'Yellow', 'Purple', 'Orange'],
  },
  pants: {
    label: 'Pants',
    colors: [0x37474f, 0x1e56b0, 0x6d4c41, 0x2e7d32, 0xc2185b],
    names: ['Gray', 'Blue', 'Brown', 'Green', 'Pink'],
  },
};

export const STYLES = {
  label: 'Hair style',
  names: ['Short', 'Spiky', 'Long', 'Buzz', 'Bald'],
  icons: ['🙂', '🦔', '👧', '🧢', '🥚'],
};

export const OUTFITS = {
  label: 'Outfit',
  names: ['Shirt and pants', 'Dress', 'Overalls'],
  icons: ['👕', '👗', '👖'],
};

// store character indices -> concrete look
// { skin, hair, shirt, pants, style, outfit }
export function lookFrom(char) {
  const pick = (part) => {
    const p = PALETTES[part];
    return p.colors[char[part]] ?? p.colors[0];
  };
  return {
    skin: pick('skin'),
    hair: pick('hair'),
    shirt: pick('shirt'),
    pants: pick('pants'),
    style: STYLES.names[char.style] ? char.style : 0,
    outfit: OUTFITS.names[char.outfit] ? char.outfit : 0,
  };
}
