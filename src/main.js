// Boot + screen state machine. Owns the shared renderer and the render
// loop, dispatching to the platformer (game) or the 3D overworld (map).

import * as THREE from 'three';
import { Game } from './game.js';
import { Overworld } from './overworld.js';
import { CharScene } from './charscene.js';
import { applyLook, currentLook } from './player.js';
import { House } from './house.js';
import * as ui from './ui.js';
import * as store from './store.js';
import * as speech from './speech.js';
import { unlockAudio, setMuted, speak, sfxCorrect, sfxCoin } from './audio.js';
import { WORLDS, shuffle, PRAISE } from './words.js';

// Testing cheats via URL: ?unlock opens every level/castle/secret,
// ?reset wipes the save first (combine as ?reset&unlock).
const cheats = new URLSearchParams(location.search);
if (cheats.has('reset')) store.reset();
store.load();
if (cheats.has('unlock')) store.devUnlockAll(WORLDS.length);
setMuted(!store.get().sound);

const LEVEL_COUNTS = WORLDS.map((w) => w.levels.length);

let current = { world: 0, level: 0, secret: false };
let selected = null; // node info from the map banner
let lastRun = null; // { results, coins, gems, stars, keyFound }
let bonus = null; // active bonus round state
let mode = 'map'; // which scene renders: 'map' | 'game' | 'char' | 'house'
let houseReturn = 'title'; // screen to go back to when leaving the house

// ---------- iOS audio unlock on first gesture ----------
const unlock = () => unlockAudio();
window.addEventListener('pointerdown', unlock, { once: true });
window.addEventListener('touchstart', unlock, { once: true });

// ---------- shared renderer + loop ----------

const container = document.getElementById('game-container');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

const game = new Game(renderer, {
  onCoins: (n) => ui.setCoins(n),
  onDotsInit: (n) => ui.initDots(n),
  onDot: (i, cls) => ui.setDot(i, cls),
  onKey: (found) => ui.setKeyFound(found),
  onChoice: (on) => ui.showMoveControls(on),
  onRunComplete: (res) => onRunComplete(res),
});

const map = new Overworld(renderer, {
  onNodeSelected: (info) => {
    selected = info;
    speak(info.name, { rate: 1.0 });
    ui.showLevelBanner(info);
  },
  onDismiss: () => {
    selected = null;
    ui.hideLevelBanner();
  },
  onEnterKey: () => {
    if (selected && ui.isLevelBannerVisible()) playSelected();
    else map.walkTo(map.tokenNav); // select the node under the token
  },
  onHouseTapped: () => {
    speak('My house!', { rate: 1.0 });
    showHouse('map');
  },
  onEditTapped: () => {
    speak('Make your character!', { rate: 1.0 });
    showCharacter('map');
  },
});

const charScene = new CharScene();
const house = new House(renderer);

// Debug handle for automated testing (headless tabs freeze rAF, so tests
// step the sim manually via game.updateRun(dt) and game.debugResolve()).
window.__wr = { game, store, map, charScene, house };

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  if (mode === 'game') {
    game.tick(dt);
    renderer.render(game.scene, game.camera);
  } else if (mode === 'char') {
    charScene.tick(dt);
    renderer.render(charScene.scene, charScene.camera);
  } else if (mode === 'house') {
    house.tick(dt);
    renderer.render(house.scene, house.camera);
  } else {
    map.tick(dt);
    renderer.render(map.scene, map.camera);
  }
});

function onResize() {
  for (const cam of [game.camera, map.camera, charScene.camera, house.camera]) {
    cam.aspect = window.innerWidth / window.innerHeight;
    cam.updateProjectionMatrix();
  }
  renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);

// ---------- flow ----------

function showMap() {
  mode = 'map';
  map.enter();
  ui.showHUD(false);
  ui.showScreen('map');
}

// ---------- character creator ----------

let charReturn = 'title'; // screen to go back to when leaving the editor

function showCharacter(from = 'title') {
  charReturn = from;
  if (mode === 'map') map.exit();
  mode = 'char';
  charScene.setLook(currentLook());
  ui.buildCharacterUI((part, idx) => {
    store.setCharacterPart(part, idx);
    charScene.setLook(currentLook());
  });
  ui.showScreen('char');
}

function closeCharacter() {
  // Push the final look onto the persistent meshes (in-level kid + map token).
  const look = currentLook();
  applyLook(game.player.group, look);
  applyLook(map.token, look);
  if (charReturn === 'map') {
    showMap(); // token stays wherever it was
    return;
  }
  mode = 'map'; // map scene renders behind the title again
  ui.showScreen('title');
}

// ---------- my house ----------

function showHouse(from) {
  houseReturn = from;
  if (mode === 'map') map.exit();
  mode = 'house';
  house.enter();
  ui.showHUD(false);
  ui.showHouse();
}

function leaveHouse() {
  house.exit();
  if (houseReturn === 'complete') {
    backToMap(); // summary is stale by now — land on the map at that level
  } else if (houseReturn === 'map') {
    showMap(); // token stays wherever it was
  } else {
    mode = 'map'; // title screen shows over the idle map scene
    ui.showScreen('title');
  }
}

function buyItem(item) {
  if (store.ownsHouseItem(item.id)) {
    speak(`You already have the ${item.name}!`, { rate: 1.0 });
    return;
  }
  if (!store.buyHouseItem(item.id, item.cost, item.currency)) {
    const need = item.currency === 'gems' ? 'gems — try the bonus round' : 'coins';
    ui.houseToast('🪙 Keep playing!');
    speak(`You need more ${need}! Play levels to earn more.`, { rate: 1.0 });
    return;
  }
  house.refresh();
  house.celebrate(item.id);
  sfxCorrect();
  ui.refreshShop();
  ui.houseToast(`${item.emoji} ${item.name}!`);
  speak(`You got the ${item.name}! ${PRAISE[(Math.random() * PRAISE.length) | 0]}`, { rate: 1.0 });
}

function startLevel(worldIdx, levelIdx, secret = false) {
  const boss = !secret && levelIdx === LEVEL_COUNTS[worldIdx]; // castle slot
  current = { world: worldIdx, level: levelIdx, secret, boss };
  map.exit();
  mode = 'game';
  game.startRun(worldIdx, levelIdx, { secret, boss });
  ui.showScreen(null);
  ui.showHUD(true);
}

function playSelected() {
  if (!selected) return;
  const info = selected;
  selected = null;
  ui.hideLevelBanner();
  startLevel(info.world, info.secret ? 0 : info.level, info.secret);
}

function nextLevelOf(w, l) {
  // l === LEVEL_COUNTS[w] is the castle (boss) slot after the last level.
  if (l + 1 <= LEVEL_COUNTS[w]) return { world: w, level: l + 1 };
  if (w + 1 < WORLDS.length) return { world: w + 1, level: 0 };
  return null;
}

function computeStars(results) {
  const n = results.length || 1;
  const firstTry = results.filter((r) => r.firstTry).length;
  if (firstTry === n) return 3;
  if (firstTry / n >= 0.7) return 2;
  return 1;
}

function onRunComplete(res) {
  lastRun = res;
  ui.showHUD(false);

  const stars = computeStars(res.results);
  lastRun.stars = stars;

  if (current.secret) {
    store.setSecretStars(current.world, stars);
  } else {
    const firstTime = store.getStars(current.world, current.level) === 0;
    store.setStars(current.world, current.level, stars);
    store.completeLevel(current.world, current.level, LEVEL_COUNTS);
    if (current.boss) store.beatBoss(current.world);

    // Queue map payoff animations for when we return.
    if (firstTime) {
      const next = nextLevelOf(current.world, current.level);
      if (next && store.isLevelUnlocked(next.world, next.level)) {
        map.queueReveal({ kind: 'node', world: next.world, level: next.level });
      }
    }
    if (res.keyFound && !store.hasKey(current.world, current.level)) {
      store.foundKey(current.world, current.level);
      map.queueReveal({ kind: 'secret', world: current.world });
    }
  }

  if (speech.isAvailable() && store.get().mic && res.results.length) {
    startBonusRound(res);
  } else {
    showSummary();
  }
}

function showSummary() {
  const next = current.secret ? null : nextLevelOf(current.world, current.level);
  ui.showComplete({
    stars: lastRun.stars,
    coins: lastRun.coins,
    gems: lastRun.gems,
    hasNext: !!next && store.isLevelUnlocked(next.world, next.level),
  });
}

function backToMap() {
  showMap(); // enter() refreshes navList first...
  map.setTokenTo(current.world, current.level, current.secret); // ...then snap
}

// ---------- read-aloud bonus round ----------

function startBonusRound(res) {
  try {
    bonus = {
      words: shuffle(res.results.map((r) => r.word)).slice(0, 3),
      idx: 0,
      matched: false,
      heard: [],
      advancing: false,
    };
    ui.showScreen('bonus');
    speak('Bonus round! Read the word out loud. Hold the microphone and say it!', { rate: 1.0 });
    showBonusWord();
  } catch (e) {
    endBonusRound();
  }
}

function showBonusWord() {
  bonus.matched = false;
  bonus.heard = [];
  bonus.advancing = false;
  ui.showBonusWord(bonus.words[bonus.idx]);
}

function advanceBonus() {
  if (!bonus || bonus.advancing) return;
  bonus.advancing = true;
  speech.stop();
  ui.setMicListening(false);
  setTimeout(() => {
    if (!bonus) return;
    bonus.idx++;
    if (bonus.idx >= bonus.words.length) endBonusRound();
    else showBonusWord();
  }, 1400);
}

function endBonusRound() {
  bonus = null;
  speech.stop();
  ui.setMicListening(false);
  showSummary();
}

function normalize(w) {
  return (w || '').toLowerCase().replace(/[^a-z']/g, '');
}

function bonusMicDown() {
  if (!bonus || bonus.advancing) return;
  const target = normalize(bonus.words[bonus.idx]);
  const ok = speech.start(
    (words) => {
      if (!bonus || bonus.matched) return;
      bonus.heard.push(...words);
      if (words.some((w) => normalize(w) === target)) {
        bonus.matched = true;
        bonus.heard = [];
        lastRun.gems += 5;
        store.addGems(5);
        sfxCorrect();
        ui.setBonusFeedback('⭐ +5 💎');
        speak(PRAISE[(Math.random() * PRAISE.length) | 0], { rate: 1.0 });
        advanceBonus();
      }
    },
    () => {
      // Recognition ended (release / silence / error).
      ui.setMicListening(false);
      if (!bonus || bonus.matched || bonus.advancing) return;
      if (bonus.heard.length) {
        ui.setBonusFeedback('💛 Nice try!');
        speak(`Nice try! The word is: ${bonus.words[bonus.idx]}`, { rate: 0.9 });
        advanceBonus();
      }
      // Heard nothing: stay on this word so he can try again.
    }
  );
  if (ok) ui.setMicListening(true);
}

function bonusMicUp() {
  speech.stop();
  ui.setMicListening(false);
}

// ---------- wire up UI ----------

ui.init({
  onPlay: () => {
    showMap();
    map.walkTo(map.tokenNav); // pop the current level's banner right away
  },
  onCharacter: () => showCharacter(),
  onCharacterDone: () => closeCharacter(),
  onToggleSound: () => {
    const on = !store.get().sound;
    store.setSound(on);
    setMuted(!on);
    ui.updateSettingsLabels();
    if (on) sfxCoin();
  },
  onToggleMic: () => {
    store.setMic(!store.get().mic);
    ui.updateSettingsLabels();
  },
  onMapBack: () => {
    map.exit();
    ui.showScreen('title');
  },
  onBannerPlay: () => playSelected(),
  onPause: () => {
    game.pause();
    ui.showScreen('pause');
  },
  onResume: () => {
    ui.showScreen(null);
    game.resume();
  },
  onPauseMap: () => {
    game.stopRun();
    showMap();
  },
  onRepeatWord: () => game.repeatWord(),
  onPlayAgain: () => startLevel(current.world, current.level, current.secret),
  onNextLevel: () => {
    const next = nextLevelOf(current.world, current.level);
    if (next) startLevel(next.world, next.level);
  },
  onCompleteMap: () => backToMap(),
  onBonusSkip: () => {
    if (bonus) {
      bonus.advancing = true;
      speech.stop();
      bonus.idx = bonus.words.length;
      endBonusRound();
    }
  },
  onMicDown: bonusMicDown,
  onMicUp: bonusMicUp,
  onHouse: (from) => showHouse(from),
  onHouseBack: () => leaveHouse(),
  onBuyItem: (item) => buyItem(item),
  onMoveDown: (dir) => game.setMove('btn', dir, true),
  onMoveUp: (dir) => game.setMove('btn', dir, false),
  onJumpDown: () => game.running && !game.paused && game.player.jump(),
  onJumpUp: () => {}, // every jump is full power; release does nothing
  onDevUnlock: () => {
    store.devUnlockAll(WORLDS.length);
    speak('All levels unlocked!', { rate: 1.0 });
    map.refresh();
  },
});

ui.updateSettingsLabels();
ui.showScreen('title');
map.enter(); // warm up the map scene behind the title
map.exit(); // ...but ignore input until PLAY

// Auto-pause when the tab is hidden.
document.addEventListener('visibilitychange', () => {
  if (document.hidden && game.running && !game.paused) {
    game.pause();
    ui.showScreen('pause');
  }
});
