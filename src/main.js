// Boot + screen state machine. Owns the shared renderer and the render
// loop, dispatching to the platformer (game) or the 3D overworld (map).

import * as THREE from 'three';
import { Game } from './game.js';
import { Overworld } from './overworld.js';
import { CharScene } from './charscene.js';
import { applyLook, currentLook } from './player.js';
import { House } from './house.js';
import { CutsceneScene } from './cutscene.js';
import { CUTSCENES } from './cutscenes.js';
import * as ui from './ui.js';
import * as store from './store.js';
import * as speech from './speech.js';
import {
  unlockAudio, setMuted, speak, speakLine, sfxCorrect, sfxCoin, sfxGem,
  sfxLevelStart, sfxPause, sfxResume, audioGraph,
} from './audio.js';
import * as music from './music.js';
import { WORLDS, shuffle } from './words.js';
import { HOUSE_ITEMS, decorForWorld } from './housedata.js';

// Testing cheats via URL: ?unlock opens every level/castle/secret,
// ?reset wipes the save first (combine as ?reset&unlock).
const cheats = new URLSearchParams(location.search);
if (cheats.has('reset')) store.reset();
store.load();
if (cheats.has('unlock')) store.devUnlockAll(WORLDS.length);
setMuted(!store.get().sound);
music.setMusicEnabled(store.get().music);

const LEVEL_COUNTS = WORLDS.map((w) => w.levels.length);

let current = { world: 0, level: 0, secret: false };
let selected = null; // node info from the map banner
let lastRun = null; // { results, coins, gems, stars, keyFound }
const BONUS_ROUND_ENABLED = false; // read-aloud bonus disabled pending rework
let bonus = null; // active bonus round state
let mode = 'map'; // which scene renders: 'map' | 'game' | 'char' | 'house' | 'cutscene'
// ('char' also backs the title + player-select screens: the spinning kid)
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
// Filmic tone mapping: soft highlight rolloff instead of clipping. Exposure
// lifted past 1 because ACES darkens mids; fairy.js/thumbs.js mirror these
// settings so their renderers match the main scene's color response.
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
container.appendChild(renderer.domElement);

const game = new Game(renderer, {
  onCoins: (n) => ui.setCoins(n),
  onDotsInit: (n) => ui.initDots(n),
  onDot: (i, cls) => ui.setDot(i, cls),
  onKey: (found) => ui.setKeyFound(found),
  onControls: (mode) => ui.showMoveControls(mode),
  onAutoRepeat: () => ui.pulseRepeatButton(),
  onRepeatTip: () => {
    ui.showRepeatTip(true);
    speak('If you forget your word, tap the blue speaker button to hear it again!', { rate: 0.95 });
  },
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
    showHouse('map'); // showHouse speaks the welcome-home line
  },
  onEditTapped: () => {
    speak('Make your character!', { rate: 1.0 });
    showCharacter('map');
  },
});

const charScene = new CharScene();
const house = new House(renderer);
const cutscene = new CutsceneScene();

// Debug handle for automated testing (headless tabs freeze rAF, so tests
// step the sim manually via game.updateRun(dt) and game.debugResolve()).
window.__wr = { game, store, map, charScene, house, cutscene, music, audio: { audioGraph, unlockAudio } };

// Lifetime play-time: count only live run time (not menus/map), flushed to
// the store in coarse chunks so we're not writing localStorage every frame.
let playTimeAcc = 0;
function flushPlayTime() {
  if (playTimeAcc < 1) return;
  store.addPlaySeconds(Math.round(playTimeAcc));
  playTimeAcc = 0;
}

const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  if (mode === 'game') {
    if (game.running && !game.paused) {
      playTimeAcc += dt;
      if (playTimeAcc >= 15) flushPlayTime();
    }
    game.tick(dt);
    renderer.render(game.scene, game.camera);
  } else if (mode === 'char') {
    charScene.tick(dt);
    renderer.render(charScene.scene, charScene.camera);
  } else if (mode === 'house') {
    house.tick(dt);
    renderer.render(house.scene, house.camera);
  } else if (mode === 'cutscene') {
    cutscene.tick(dt);
    renderer.render(cutscene.scene, cutscene.camera);
  } else {
    map.tick(dt);
    renderer.render(map.scene, map.camera);
  }
});

function onResize() {
  for (const cam of [game.camera, map.camera, charScene.camera, house.camera, cutscene.camera]) {
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
  music.play('map');
  music.setDimmed(false);
  map.enter();
  ui.showHUD(false);
  ui.showScreen('map');
}

// ---------- cutscenes ----------

// Play a script (see cutscenes.js), then hand control back via onDone.
// Callers decide where to land afterwards (map, level start, title...).
function playCutscene(script, onDone) {
  if (mode === 'map') map.exit();
  mode = 'cutscene';
  music.play(null); // cutscenes carry their own speech + sfx
  ui.showHUD(false);
  ui.showScreen('cutscene');
  cutscene.play(script, onDone);
}

// ---------- player profiles ----------

// The title shows the active player's spinning kid (CharScene) behind the
// buttons, with their nameplate — so switching players is instantly visible.
function showTitle() {
  if (mode === 'map') map.exit();
  mode = 'char';
  music.play('title');
  charScene.setLook(currentLook());
  ui.setPlayerName(store.activeProfileName());
  ui.showScreen('title');
}

// Everything downstream that caches per-save state, refreshed after the
// active profile changes (switch, create, delete-active).
function onProfileSwitched() {
  const s = store.get();
  setMuted(!s.sound);
  music.setMusicEnabled(s.music);
  const look = currentLook();
  applyLook(game.player.group, look);
  applyLook(map.token, look);
  charScene.setLook(look);
  map.refresh();
  map.setTokenTo(s.unlocked.world, s.unlocked.level); // new save's frontier
  house.refresh();
  ui.setCoins(s.coins);
  ui.updateSettingsLabels();
  ui.setPlayerName(store.activeProfileName());
  current = { world: 0, level: 0, secret: false };
  selected = null;
  lastRun = null;
}

function showPlayers() {
  if (mode === 'map') map.exit();
  mode = 'char'; // keep the spinning kid warm behind the cards
  speak("Who's playing?", { rate: 1.0 });
  ui.showPlayers({
    onSelect: (id) => {
      if (id !== store.activeProfileId()) {
        store.selectProfile(id);
        onProfileSwitched();
      }
      showTitle();
    },
    onCreate: (name) => {
      if (!store.createProfile(name)) return; // at the cap (card is hidden, but be safe)
      onProfileSwitched();
      showCharacter('title'); // new kid builds their look first
    },
    onDelete: (id) => {
      const wasActive = id === store.activeProfileId();
      store.deleteProfile(id);
      // Deleting the active profile loads another save (or a fresh one,
      // when it was the last profile) — refresh everything downstream.
      if (wasActive) onProfileSwitched();
    },
  });
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
  showTitle(); // the freshly-dressed kid keeps spinning behind the title
}

// ---------- my house ----------

function showHouse(from) {
  houseReturn = from;
  if (mode === 'map') map.exit();
  mode = 'house';
  music.play('house');
  house.enter();
  store.clearHouseNews(); // he's here — retire the ❗ on the map house
  spokeHouseNudge = false; // ...and re-arm the voice nudge for future news
  ui.showHUD(false);
  ui.showHouse();
  speakLine('home');
}

// Post-boss payoff: land in the house for a short trophy ceremony (cup drops
// onto the shelf, then the boss's decoration appears), with a MAP button as
// the only — always available — way out, so it's skippable mid-fanfare.
function showTrophyCeremony(world) {
  houseReturn = 'complete'; // leaving lands on the map at the castle
  mode = 'house';
  music.play('victory');
  const decor = decorForWorld(world);
  if (decor) store.grantHouseItem(decor.id);
  house.beginCeremony(world, decor && decor.id);
  ui.showHUD(false);
  ui.showCeremony();
}

function leaveHouse() {
  house.exit();
  if (houseReturn === 'complete') {
    backToMap(); // summary is stale by now — land on the map at that level
  } else if (houseReturn === 'map') {
    showMap(); // token stays wherever it was
  } else {
    showTitle();
  }
}

function buyItem(item) {
  if (item.earned !== undefined && !store.ownsHouseItem(item.id)) {
    ui.houseToast('🏰 Castle prize!');
    speak('Beat the castle boss to win that prize!', { rate: 1.0 });
    return;
  }
  if (store.ownsHouseItem(item.id)) {
    speak(`You already have the ${item.name}!`, { rate: 1.0 });
    return;
  }
  if (!store.buyHouseItem(item.id, item.cost, item.currency)) {
    ui.houseToast('🪙 Keep playing!');
    speakLine(item.currency === 'gems' ? 'needGems' : 'needCoins');
    return;
  }
  house.refresh();
  house.celebrate(item.id);
  sfxCorrect();
  ui.refreshShop();
  ui.houseToast(`${item.emoji} ${item.name}!`);
  speak(`You got the ${item.name}!`, { rate: 1.0, onend: () => speakLine('purchase') });
}

function startLevel(worldIdx, levelIdx, secret = false) {
  const boss = !secret && levelIdx === LEVEL_COUNTS[worldIdx]; // castle slot
  current = { world: worldIdx, level: levelIdx, secret, boss };
  map.exit();
  mode = 'game';
  music.play(boss ? 'boss' : 'level');
  music.setDimmed(false);
  sfxLevelStart();
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
  flushPlayTime();

  const stars = computeStars(res.results);
  lastRun.stars = stars;

  let firstBossWin = false;
  if (current.secret) {
    store.setSecretStars(current.world, stars);
  } else {
    const firstTime = store.getStars(current.world, current.level) === 0;
    store.setStars(current.world, current.level, stars);
    store.completeLevel(current.world, current.level, LEVEL_COUNTS);
    if (current.boss) {
      firstBossWin = !store.isBossBeaten(current.world);
      store.beatBoss(current.world);
    }

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

  // The last world's castle falling is the game-complete finale, not a
  // normal summary or trophy ceremony: cutscene home, then the big stats
  // screen. Its boss decoration is still granted quietly — it's waiting in
  // the yard next to the hero trophy.
  if (current.boss && current.world === WORLDS.length - 1) {
    if (firstBossWin) {
      const decor = decorForWorld(current.world);
      if (decor) store.grantHouseItem(decor.id);
    }
    startFinale();
    return;
  }

  if (firstBossWin) {
    // First win over this castle: trophy ceremony at the house instead of
    // the summary card (the run's coins are already banked by game.js).
    showTrophyCeremony(current.world);
  } else if (BONUS_ROUND_ENABLED && speech.isAvailable() && store.get().mic && res.results.length) {
    startBonusRound(res);
  } else {
    showSummary();
  }
}

// ---------- game-complete finale ----------

// Replay-safe: the cutscene + stats screen play every time the final boss
// falls, but the exclusive reward is granted (and announced) only once.
function startFinale() {
  const firstTime = !store.isGameCompleted();
  if (firstTime) {
    store.markGameCompleted();
    store.grantHouseItem('herotrophy');
    house.refresh(); // the trophy is standing there when he visits
  }
  playCutscene(CUTSCENES.finale, () => {
    ui.showGameComplete(store.totals(), { firstTime });
    speak("You're a sight word hero!", { rate: 1.0 });
  });
}

function showSummary() {
  music.play('victory');
  const next = current.secret ? null : nextLevelOf(current.world, current.level);
  ui.showComplete({
    stars: lastRun.stars,
    coins: lastRun.coins,
    gems: lastRun.gems,
    hasNext: !!next && store.isLevelUnlocked(next.world, next.level),
  });
  // Delayed milestone line over the summary for a perfect 3-star run. The
  // delay lets the in-game flag line finish (speak() cuts earlier speech);
  // the token check skips it if another run started meanwhile. First castle
  // wins never land here (trophy ceremony instead) — the 'worldUnlock' line
  // plays when the new world's node reveals on the map (overworld.js).
  if (lastRun.stars === 3) {
    const token = lastRun;
    setTimeout(() => {
      if (lastRun === token && mode === 'game') speakLine('threeStars');
    }, 2600);
  }
}

let spokeHouseNudge = false; // one voice nudge per batch of house news

function backToMap() {
  showMap(); // enter() refreshes navList first...
  map.setTokenTo(current.world, current.level, current.secret); // ...then snap
  // Fresh loot he could spend (or a prize he skipped past)? Say so once —
  // the ❗ over the house building carries it from there.
  if (!spokeHouseNudge && store.hasHouseNews(HOUSE_ITEMS)) {
    spokeHouseNudge = true;
    speak('Something new at your house!', { rate: 1.0 });
  }
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
    music.play(null); // quiet for the mic round
    ui.showScreen('bonus');
    speakLine('bonus');
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
        sfxGem();
        ui.setBonusFeedback('⭐ +5 💎');
        speakLine('correct');
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
  onSwitchPlayer: () => showPlayers(),
  onPlayersBack: () => showTitle(),
  onToggleSound: () => {
    const on = !store.get().sound;
    store.setSound(on);
    setMuted(!on);
    ui.updateSettingsLabels();
    if (on) sfxCoin();
  },
  onToggleMusic: () => {
    const on = !store.get().music;
    store.setMusic(on);
    music.setMusicEnabled(on);
    ui.updateSettingsLabels();
  },
  onToggleMic: () => {
    store.setMic(!store.get().mic);
    ui.updateSettingsLabels();
  },
  onMapBack: () => showTitle(),
  onBannerPlay: () => playSelected(),
  onPause: () => {
    game.pause();
    sfxPause();
    music.setDimmed(true);
    ui.showScreen('pause');
  },
  onResume: () => {
    ui.showScreen(null);
    sfxResume();
    music.setDimmed(false);
    game.resume();
  },
  onPauseMap: () => {
    flushPlayTime(); // abandoning the run still banks the time played
    game.stopRun();
    showMap();
  },
  onRepeatWord: () => game.repeatWord(),
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
  onCeremonyDone: () => leaveHouse(), // house.exit() finalizes the ceremony
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
map.enter(); // warm up the map scene (build paths/locks) for the first PLAY
map.exit(); // ...but ignore input until then
showTitle();

// Dev harness: ?cutscene=<name> boots straight into a script (loops back to
// the title when it ends). Lets a scene be iterated on without playing to it.
if (cheats.has('cutscene')) {
  const script = CUTSCENES[cheats.get('cutscene')] || CUTSCENES.demo;
  playCutscene(script, () => showTitle());
}

// Dev harness: ?goto=<world>,<level> boots straight into a level (0-based;
// a level index past the last is the castle, 's' is the secret level).
if (cheats.has('goto')) {
  const [w, l] = (cheats.get('goto') || '0,0').split(',');
  const wi = Math.max(0, Math.min(WORLDS.length - 1, parseInt(w, 10) || 0));
  startLevel(wi, l === 's' ? 0 : Math.max(0, parseInt(l, 10) || 0), l === 's');
}

// Auto-pause when the tab is hidden.
document.addEventListener('visibilitychange', () => {
  if (document.hidden && game.running && !game.paused) {
    game.pause();
    music.setDimmed(true);
    ui.showScreen('pause');
  }
});
