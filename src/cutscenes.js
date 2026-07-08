// Cutscene scripts as plain data. Each script is an array of steps played
// in order by CutsceneScene (cutscene.js). Step types:
//
//   { setting: { sky, ground } }                     scene colors (instant)
//   { spawn: { id, kind: 'kid'|'boss', world, at: [x,z], face, scale } }
//   { walk: { id, to: [x,z], speed } }               actor walks over
//   { cam: { to: [x,y,z], lookAt: [x,y,z], dur } }   camera glide
//   { say: { who, text, highlight: ['word'] } }      TTS + caption, words lit up
//   { showWord: { word, say } }                      big word, letters pop in
//   { emote: { id, kind: 'jump'|'wave'|'shake' } }
//   { sfx: 'sfxBoing' }                              any audio.js export name
//   { fx: { kind: 'confetti'|'sparkle'|'fireworks', at: [x,y,z] } }
//   { wait: seconds }
//
// Add `async: true` to any step to start it without waiting (walk while the
// camera moves). Keep whole scenes to ~15-25 seconds — attention is the budget.

// Dev/demo scene: the kid meets the Syrup Serpent, who runs off with a word.
// Play it with ?cutscene=demo
const demo = [
  { setting: { sky: 0xffd9a0, ground: 0xdfb45e } },
  { spawn: { id: 'kid', kind: 'kid', at: [-6, 0], face: 0 } },
  { spawn: { id: 'serpent', kind: 'boss', world: 1, at: [5, -1], scale: 0.9 } },
  { cam: { to: [-6, 3, 10], lookAt: [-5, 1.5, 0], dur: 0.01 } },
  { walk: { id: 'kid', to: [-2, 0] }, async: true },
  { cam: { to: [0, 3.5, 11], lookAt: [0, 1.5, 0], dur: 2.2 } },
  { sfx: 'sfxRoar' },
  { emote: { id: 'serpent', kind: 'shake' } },
  { say: { who: 'serpent', text: 'This word is mine! I will hide it away!', highlight: ['away'] } },
  { cam: { to: [2, 2.5, 7], lookAt: [3, 2.5, 0], dur: 1.0 } },
  { showWord: { word: 'away' } },
  { sfx: 'sfxGiggle' },
  { walk: { id: 'serpent', to: [14, -1], speed: 5 }, async: true },
  { say: { who: 'kid', text: 'Hey! Come back! I can read that word!', highlight: ['come', 'back'] } },
  { cam: { to: [-1, 3, 8], lookAt: [-2, 1.5, 0], dur: 1.0 } },
  { emote: { id: 'kid', kind: 'jump' } },
  { fx: { kind: 'sparkle', at: [-2, 2, 0] } },
  { say: { who: 'kid', text: "Let's go get it!" } },
];

// Game-complete finale: the kid walks home at sunset, six boss trophies
// line the yard, fireworks + confetti, narrator celebrates. Played after
// the final (world 5) castle falls; preview with ?cutscene=finale.
const finale = [
  { setting: { sky: 0xffc98a, ground: 0x7ec850 } },
  { spawn: { id: 'house', kind: 'house', at: [7, -3] } },
  // One trophy per world, lined up in the front yard.
  ...[0, 1, 2, 3, 4, 5].map((w) => (
    { spawn: { id: `trophy${w}`, kind: 'trophy', world: w, at: [2.9 + w * 1.4, -0.2] } }
  )),
  { spawn: { id: 'kid', kind: 'kid', at: [-11, 1] } },
  { cam: { to: [-11, 3, 9], lookAt: [-10, 1.5, 1], dur: 0.01 } },
  { say: { who: 'kid', text: 'You did it! You beat every single world!', highlight: ['you', 'did', 'every'] }, async: true },
  { walk: { id: 'kid', to: [0.5, 1], speed: 2.6 }, async: true },
  { cam: { to: [1, 4.5, 12], lookAt: [3, 2, -1], dur: 3.2 } },
  { sfx: 'sfxFireworks' },
  { fx: { kind: 'fireworks', at: [7, 6, -3] } },
  { fx: { kind: 'fireworks', at: [1, 7, -2] } },
  { cam: { to: [6, 2.8, 6.5], lookAt: [6.5, 1, 0], dur: 1.6 }, async: true },
  { say: { text: 'Look! Six shiny trophies for six worlds!', highlight: ['look', 'six'] } },
  { sfx: 'sfxKeyJingle' },
  { fx: { kind: 'sparkle', at: [6.5, 1.5, 0] } },
  { wait: 0.5 },
  { cam: { to: [0, 3, 9], lookAt: [0.5, 1.8, 1], dur: 1.2 } },
  { emote: { id: 'kid', kind: 'jump' } },
  { fx: { kind: 'confetti', at: [0.5, 2.5, 1] } },
  { showWord: { word: 'hero', say: 'Hero!' } },
  { say: { who: 'kid', text: "You're a sight word hero!", highlight: ['you'] } },
  { emote: { id: 'kid', kind: 'wave' }, async: true },
  { sfx: 'sfxFireworks' },
  { fx: { kind: 'fireworks', at: [4, 7, -2] } },
  { fx: { kind: 'confetti', at: [7, 5, -1] } },
  { wait: 1.6 },
];

export const CUTSCENES = { demo, finale };
