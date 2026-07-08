// Narrator line banks, one array per event category. audio.js speakLine()
// rotates within a category (random pick, never the same line twice in a
// row) so the voice stays fresh across a session.
// Pure data — no three.js, no DOM — so scripts/generate-tts.mjs can import
// it to pre-render every line as a neural TTS clip.

import { PRAISE, PRAISE_FIRST_TRY } from './words.js';

export const LINES = {
  // Plain correct answer (bonus-round reads, generic praise).
  correct: [
    ...PRAISE,
    'Way to go!',
    'You did it!',
    'Fantastic!',
    'That was great reading!',
    'High five!',
    'Woohoo! You read it!',
  ],

  // Nailed a word on the first try.
  firstTry: [
    PRAISE_FIRST_TRY,
    'First try! You are amazing!',
    'Boom! First try!',
    'First try! Super star reader!',
    'You read it right away! Wow!',
  ],

  // Three or more first-try words in a row.
  streak: [
    'You are on fire! So many in a row!',
    'Wow! You keep getting them right!',
    'What a streak! Super reader!',
    'Amazing! You got them all right in a row!',
    'Unstoppable! What a reading streak!',
  ],

  // Got the word right after missing it first.
  recover: [
    'You got it! Great trying!',
    'Yes! You figured it out!',
    'You did it! Never give up!',
    'There it is! Way to stick with it!',
    'You got it this time! Way to keep trying!',
  ],

  // Entering the read-aloud bonus round (every line keeps the mic how-to).
  bonus: [
    'Bonus round! Read the word out loud. Hold the microphone and say it!',
    'Bonus time! Hold the microphone and say the word out loud!',
    'Wow, a bonus round! Hold the microphone and read the word!',
    'Special bonus! Read the word with your voice. Hold the microphone!',
  ],

  // Grabbed the hidden key in a level. Keep these short (~2s spoken): the
  // key sits ~18 units before the next word event's intro line, which cuts
  // off whatever is still playing when the player sprints (8.55 u/s).
  secretKey: [
    'You found a secret key!',
    'A secret key! Amazing!',
  ],

  // The secret path reveals on the map.
  secretPath: [
    'A secret path appeared!',
    'Look! A secret path!',
    'Wow! You opened a secret path!',
  ],

  // Reached the flag.
  levelComplete: [
    'Level complete! Amazing!',
    'You finished the level! Great reading!',
    'Level done! You are awesome!',
    'Hooray! Level complete!',
    'You did it! On to the next adventure!',
    'What a run! Level complete!',
  ],

  // Perfect three-star run (spoken on the summary screen).
  threeStars: [
    'Three stars! Perfect run!',
    'Wow! All three stars!',
    'Three shiny stars! Incredible reading!',
  ],

  // First castle win in a world: the next world just unlocked.
  worldUnlock: [
    'You unlocked a whole new world! Let us go explore!',
    'A brand new world is open! Amazing reading!',
    'New world unlocked! You are a super reader!',
  ],

  // Arriving at the player's house.
  home: [
    'Welcome home!',
    'Home sweet home!',
    'Here is your house! Looking good!',
    'Welcome back to your house!',
  ],

  // Just bought something (spoken after "You got the ...!").
  purchase: [
    'It looks great in your house!',
    'What a great pick!',
    'Your house is getting so cool!',
    'Enjoy it!',
    'Great choice!',
  ],

  // Shop confirm question — the kid answers by reading "yes" or "no".
  shopConfirm: [
    'Do you want it? Tap yes or no!',
    'Should we buy it? Tap yes or no!',
    'Want to take it home? Tap yes or no!',
  ],

  // Kid tapped "no" in the shop confirm.
  shopNo: [
    'Okay! Maybe next time!',
    'No problem! It will be here later!',
    'Okay! Keep saving your coins!',
  ],

  // Not enough coins / gems for a shop item.
  needCoins: [
    'You need more coins! Play levels to earn more.',
    'Not enough coins yet! Run some levels to earn more!',
  ],
  needGems: [
    'You need more gems! Try the microphone bonus round to earn gems!',
    'Not enough gems yet! Read out loud in the bonus round to earn gems!',
  ],
};

// Boss-defeat variants, templated on the boss's name. game.js renders these
// with the current boss and speakVariant() rotates among them; the TTS
// script pre-renders every boss-name combination.
export const BOSS_WIN_LINES = (name) => [
  `You did it! The ${name} is amazed by your reading! Here comes your crown!`,
  `Wow! You beat the ${name} with your super reading! Take your crown!`,
  `The ${name} gives up! You are the reading champion! Here comes your crown!`,
];
