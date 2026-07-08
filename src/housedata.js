// Catalog for the player's house. Buying an item adds it to the 3D house
// scene (house.js decides where each id sits). Order here is shop order —
// cheap starter items first so the first purchase is only a run or two away.
//
// currency: 'coins' come from running levels, 'gems' from the read-aloud
// bonus round — so gem items quietly reward reading out loud.

export const HOUSE_ITEMS = [
  // ---- starter furniture (a run or two each) ----
  { id: 'rug', name: 'Cozy Rug', emoji: '🟥', cost: 25, currency: 'coins' },
  { id: 'chair', name: 'Comfy Chair', emoji: '🪑', cost: 35, currency: 'coins' },
  { id: 'table', name: 'Table', emoji: '🍽️', cost: 45, currency: 'coins' },
  { id: 'bed', name: 'Big Kid Bed', emoji: '🛏️', cost: 60, currency: 'coins' },
  { id: 'lamp', name: 'Lamp', emoji: '💡', cost: 50, currency: 'coins' },
  { id: 'bookshelf', name: 'Bookshelf', emoji: '📚', cost: 80, currency: 'coins' },
  { id: 'toybox', name: 'Toy Box', emoji: '🧸', cost: 90, currency: 'coins' },

  // ---- yard (bigger saves) ----
  { id: 'flowers', name: 'Flower Bed', emoji: '🌷', cost: 40, currency: 'coins' },
  { id: 'mailbox', name: 'Mailbox', emoji: '📬', cost: 55, currency: 'coins' },
  { id: 'tree', name: 'Shady Tree', emoji: '🌳', cost: 75, currency: 'coins' },
  { id: 'swing', name: 'Swing Set', emoji: '🛝', cost: 120, currency: 'coins' },
  { id: 'trampoline', name: 'Trampoline', emoji: '🤸', cost: 150, currency: 'coins' },

  // ---- pets & specials (gems = mic-round money) ----
  { id: 'cat', name: 'Pet Cat', emoji: '🐱', cost: 20, currency: 'gems' },
  { id: 'dog', name: 'Pet Dog', emoji: '🐶', cost: 30, currency: 'gems' },
  { id: 'aquarium', name: 'Fish Tank', emoji: '🐠', cost: 40, currency: 'gems' },
  { id: 'telescope', name: 'Telescope', emoji: '🔭', cost: 55, currency: 'gems' },
  { id: 'robot', name: 'Robot Buddy', emoji: '🤖', cost: 70, currency: 'gems' },
  { id: 'rocket', name: 'Rocket Ship', emoji: '🚀', cost: 100, currency: 'gems' },

  // ---- boss prizes (never purchasable) ----
  // earned: worldIdx — dropped by that world's castle boss during the trophy
  // ceremony (main.js awards it via store.grantHouseItem). No cost/currency.
  { id: 'golemstatue', name: 'Meatball Monster Statue', emoji: '🍝', earned: 0 },
  { id: 'serpentstatue', name: 'Syrup Serpent Statue', emoji: '🧇', earned: 1 },
  { id: 'yetisnowman', name: 'Yeti Snowman', emoji: '⛄', earned: 2 },
  { id: 'crystallamp', name: 'Crystal Lamp', emoji: '💎', earned: 3 },
  { id: 'dragonkite', name: 'Pepper Kite', emoji: '🪁', earned: 4 },
];

export function getItem(id) {
  return HOUSE_ITEMS.find((it) => it.id === id) || null;
}

// The decoration a world's boss drops (null past the last world).
export function decorForWorld(worldIdx) {
  return HOUSE_ITEMS.find((it) => it.earned === worldIdx) || null;
}

// Boss trophies aren't bought — one appears on the trophy shelf per castle
// beaten. house.js renders these from store.isBossBeaten(w). Likewise the
// 'herotrophy' yard trophy is granted by the game-complete finale (main.js
// startFinale), never sold, so it lives outside HOUSE_ITEMS.
export const TROPHY_NAMES = [
  'Pasta Plains Trophy',
  'Waffle Desert Trophy',
  'Snowy Peaks Trophy',
  'Crystal Caves Trophy',
  'Pepper Volcano Trophy',
];
