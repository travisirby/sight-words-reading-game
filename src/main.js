// Boot + screen state machine. Wires ui / game / audio / speech / store.

import { Game } from './game.js';
import * as ui from './ui.js';
import * as store from './store.js';
import * as speech from './speech.js';
import { unlockAudio, setMuted, speak, sfxCorrect, sfxCoin } from './audio.js';
import { WORLDS, shuffle, PRAISE } from './words.js';

store.load();
setMuted(!store.get().sound);

let game = null;
let current = { world: 0, level: 0 };
let lastRun = null; // { results, coins }
let bonus = null; // active bonus round state

const LEVEL_COUNTS = WORLDS.map((w) => w.levels.length);

// ---------- iOS audio unlock on first gesture ----------
const unlock = () => unlockAudio();
window.addEventListener('pointerdown', unlock, { once: true });
window.addEventListener('touchstart', unlock, { once: true });

// ---------- game ----------

function ensureGame() {
  if (game) return game;
  game = new Game(document.getElementById('game-container'), {
    onCoins: (n) => ui.setCoins(n),
    onDotsInit: (n) => ui.initDots(n),
    onDot: (i, cls) => ui.setDot(i, cls),
    onRunComplete: (res) => onRunComplete(res),
  });
  // Debug handle for automated testing (headless tabs freeze rAF,
  // so tests step the sim manually via game.updateRun / renderer).
  window.__wr = { game, store };
  return game;
}

function startLevel(worldIdx, levelIdx) {
  current = { world: worldIdx, level: levelIdx };
  ensureGame().startRun(worldIdx, levelIdx);
  ui.showScreen(null);
  ui.showHUD(true);
}

function nextLevelOf(w, l) {
  if (l + 1 < LEVEL_COUNTS[w]) return { world: w, level: l + 1 };
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
  store.setStars(current.world, current.level, stars);
  store.completeLevel(current.world, current.level, LEVEL_COUNTS);
  lastRun.stars = stars;
  lastRun.gems = 0;

  if (speech.isAvailable() && store.get().mic && res.results.length) {
    startBonusRound(res);
  } else {
    showSummary();
  }
}

function showSummary() {
  const next = nextLevelOf(current.world, current.level);
  ui.showComplete({
    stars: lastRun.stars,
    coins: lastRun.coins,
    gems: lastRun.gems,
    hasNext: !!next && store.isLevelUnlocked(next.world, next.level),
  });
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
    ui.buildMap();
    ui.showScreen('map');
  },
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
  onMapBack: () => ui.showScreen('title'),
  onSelectLevel: (w, l) => startLevel(w, l),
  onPause: () => {
    if (game) game.pause();
    ui.showScreen('pause');
  },
  onResume: () => {
    ui.showScreen(null);
    if (game) game.resume();
  },
  onPauseMap: () => {
    if (game) game.stopRun();
    ui.showHUD(false);
    ui.buildMap();
    ui.showScreen('map');
  },
  onRepeatWord: () => game && game.repeatWord(),
  onPlayAgain: () => startLevel(current.world, current.level),
  onNextLevel: () => {
    const next = nextLevelOf(current.world, current.level);
    if (next) startLevel(next.world, next.level);
  },
  onCompleteMap: () => {
    ui.buildMap();
    ui.showScreen('map');
  },
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
  onDevUnlock: () => {
    store.devUnlockAll();
    speak('All levels unlocked!', { rate: 1.0 });
    ui.buildMap();
  },
});

ui.updateSettingsLabels();
ui.showScreen('title');

// Create the 3D world right away so it warms up behind the title screen.
ensureGame();

// Auto-pause when the tab is hidden.
document.addEventListener('visibilitychange', () => {
  if (document.hidden && game && game.running && !game.paused) {
    game.pause();
    ui.showScreen('pause');
  }
});
