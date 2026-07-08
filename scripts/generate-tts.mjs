// Pre-generate all game speech as mp3 clips using the ElevenLabs TTS API
// (voice "Matilda" — upbeat teacher). Clips land in public/tts/ and a
// lookup manifest is written to src/tts-manifest.js; audio.js plays clips
// through WebAudio and falls back to speechSynthesis for any unknown text.
//
// Usage: ELEVENLABS_API_KEY=... node scripts/generate-tts.mjs [--force]
//   --force  regenerate clips that already exist (except HAND_PICKED ones)
//
// Dynamic sentences are assembled at runtime from segments:
//   "Find the word: cat" -> [prefix clip "find the word:"] + [word clip "cat"]
// so only ~310 small clips cover every line the game can speak.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DOLCH, WORLDS } from '../src/words.js';
import { LINES, BOSS_WIN_LINES } from '../src/lines.js';
import { HOUSE_ITEMS } from '../src/housedata.js';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = path.join(root, 'public', 'tts');
const MANIFEST = path.join(root, 'src', 'tts-manifest.js');
const FORCE = process.argv.includes('--force');

const VOICE_ID = 'XrExE9yKIg1WjnnlVkGX'; // ElevenLabs "Matilda"
const MODEL = 'eleven_multilingual_v2';
const PHRASE_RATE = 0.95; // sentences: a touch slower than default
const WORD_RATE = 0.8; // isolated sight words: slow and clear
const CONCURRENCY = 3; // ElevenLabs caps concurrent requests per plan
const API_KEY = process.env.ELEVENLABS_API_KEY;
if (!API_KEY) {
  console.error('set ELEVENLABS_API_KEY');
  process.exit(1);
}

// Clips replaced by hand-picked renders chosen by ear (PR #66: default takes
// mispronounced or mumbled these function words). Never regenerated — not
// even under --force — since a fresh render may regress. To redo one, delete
// its mp3 (or remove it from this list) and rerun. The picked takes came from
// variants of previous_text "Now say the word:" / quoted emphatic text with
// seeds 101/202/303/404 ('been': text '"Been!"', previous_text 'Read this
// word out loud, clearly:', seed 808) — approximate reproducibility only,
// ElevenLabs seeds aren't guaranteed stable.
const HAND_PICKED = new Set([
  'w-a.mp3', 'w-been.mp3', 'w-for.mp3', 'w-from.mp3', 'w-has.mp3',
  'w-he.mp3', 'w-into.mp3', 'w-like.mp3', 'w-of.mp3', 'w-sing.mp3',
  'w-the.mp3', 'w-think.mp3', 'w-under.mp3', 'w-with.mp3',
]);

// Boss names live in src/boss.js, which pulls in three.js/DOM modules, so
// scrape them from the source instead of importing it.
function bossNames() {
  const src = fs.readFileSync(path.join(root, 'src', 'boss.js'), 'utf8');
  const names = [...src.matchAll(/name: '([^']+)'/g)].map((m) => m[1]);
  if (!names.length) throw new Error('no boss names found in src/boss.js');
  return names;
}

// Keep in sync with the bindSpeak() labels in src/ui.js.
const UI_LABELS = [
  'Play!', 'Settings', 'Close', 'Sound', 'Music', 'Mic round', 'Back',
  'Here we go!', 'Pause', 'Resume', 'Map', 'Play again!', 'Next level!',
  'Skip', 'Shop!', 'Make your character!', 'Looking good!',
  // (no 'No' label: the delete-confirm button resolves to the w-no word
  // clip, and a 'No' phrase would shadow it in clipsFor's phrase-first lookup)
  "Let's go!", 'Goodbye!', 'Switch player!', "Who's playing?",
  'New player! What is your name?',
  'Delete this player? All their progress will be lost.',
  ...Array.from({ length: 6 }, (_, i) => `Player ${i + 1}`),
];

// Sentence prefixes spoken before a word clip (must end with ':' — the
// runtime splitter in audio.js keys on it), plus optional suffixes after it.
const SEGMENTS = [
  'Find the word:',
  'Bonk the block with the word:',
  'Jump through the door with the word:',
  'Star time! Jump under the star with the word:',
  'Almost! The word is:',
  'Nice try! The word is:',
  'Try again!',
];

const FIXED = [
  // every narrator variety bank (src/lines.js) — praise, streaks, shop, etc.
  ...Object.values(LINES).flat(),
  'If you forget your word, tap the blue speaker button to hear it again!',
  'All levels unlocked!',
  // house / trophy ceremony (main.js + house.js)
  'You beat the castle! Time for your trophy!',
  'A new trophy for your shelf!',
  'Beat the castle boss to win that prize!',
  'Something new at your house!',
  // game-complete finale (cutscenes.js finale script + stats screen)
  'You did it! You beat every single world!',
  'Look! Six shiny trophies for six worlds!',
  "You're a sight word hero!",
  'Hero!',
];

// Boss-prize reveal lines, one per earned decoration (house.js ceremony).
function decorLines() {
  return HOUSE_ITEMS.filter((it) => it.earned !== undefined).map(
    (it) => `You won the ${it.name}! What a prize!`
  );
}

function bossLines() {
  return bossNames().flatMap((name) => [
    `The ${name} wants to hear you read!`,
    ...BOSS_WIN_LINES(name),
  ]);
}

// Shop reading: item names spoken on tap, plus the purchase / already-owned
// sentences built around each name (full clips — names aren't sight words).
function shopLines() {
  return HOUSE_ITEMS.flatMap(({ name }) => [
    `${name}!`,
    `You got the ${name}!`,
    `You already have the ${name}!`,
  ]);
}

// Overworld node names, mirroring nodeName() in src/overworld.js.
function nodeNames() {
  return WORLDS.flatMap((w) => [
    ...w.levels.map((_, i) => `${w.name} ${i + 1}`),
    `${w.name} Secret`,
    `${w.name} Castle`,
  ]);
}

const norm = (t) => t.trim().toLowerCase().replace(/\s+/g, ' ');
const slug = (t) =>
  norm(t).replace(/'/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function buildClips() {
  const clips = new Map(); // file -> { text, rate, kind, key }
  const add = (text, kind, rate) => {
    const file = `${kind === 'word' ? 'w' : 'p'}-${slug(text)}.mp3`;
    if (clips.has(file) && clips.get(file).key !== norm(text)) {
      throw new Error(`slug collision: ${file}`);
    }
    clips.set(file, { text, rate, kind, key: norm(text) });
  };
  for (const list of Object.values(DOLCH)) {
    for (const w of list) add(w, 'word', WORD_RATE);
  }
  for (const t of [...SEGMENTS, ...FIXED, ...bossLines(), ...decorLines(), ...shopLines(), ...nodeNames(), ...UI_LABELS]) {
    add(t, 'phrase', PHRASE_RATE);
  }
  return clips;
}

async function synth(file, { text, rate, kind }) {
  const out = path.join(OUT_DIR, file);
  if (HAND_PICKED.has(file) && fs.existsSync(out) && fs.statSync(out).size > 0) {
    console.log(`  kept hand-picked ${file}`);
    return 'kept';
  }
  if (!FORCE && fs.existsSync(out) && fs.statSync(out).size > 0) return 'kept';
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
      {
        method: 'POST',
        headers: { 'xi-api-key': API_KEY, 'content-type': 'application/json' },
        body: JSON.stringify({
          text,
          model_id: MODEL,
          voice_settings: { stability: 0.5, similarity_boost: 0.75, speed: rate },
          // Isolated function words get read in reduced form without context
          // ("a" -> "uh", "am" -> "umm"). previous_text conditions the model
          // to use the citation pronunciation but is not spoken.
          ...(kind === 'word' && { previous_text: 'Say the word:' }),
        }),
      }
    );
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      if (!buf.length) throw new Error(`empty output for "${text}"`);
      fs.writeFileSync(out, buf);
      return 'made';
    }
    const body = await res.text();
    // 429 = concurrency/rate limit; 5xx = transient — back off and retry.
    if ((res.status === 429 || res.status >= 500) && attempt < 5) {
      await new Promise((r) => setTimeout(r, 2000 * attempt));
      continue;
    }
    throw new Error(`HTTP ${res.status} for "${text}": ${body.slice(0, 160)}`);
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const clips = buildClips();
  const entries = [...clips.entries()];
  console.log(`${entries.length} clips, ElevenLabs voice ${VOICE_ID} (Matilda)`);

  let made = 0, kept = 0, failed = 0;
  const queue = [...entries];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let e = queue.shift(); e; e = queue.shift()) {
        const [file, clip] = e;
        try {
          (await synth(file, clip)) === 'made' ? made++ : kept++;
        } catch (err) {
          failed++;
          console.error(`FAIL ${file}: ${String(err).slice(0, 200)}`);
        }
        const done = made + kept + failed;
        if (done % 25 === 0) console.log(`  ${done}/${entries.length}`);
      }
    })
  );

  const words = {};
  const phrases = {};
  for (const [file, { kind, key }] of clips) {
    (kind === 'word' ? words : phrases)[key] = file;
  }
  fs.writeFileSync(
    MANIFEST,
    '// AUTO-GENERATED by scripts/generate-tts.mjs — do not edit by hand.\n' +
      '// Maps normalized spoken text to clip files in public/tts/.\n' +
      `export default ${JSON.stringify({ words, phrases }, null, 2)};\n`
  );
  console.log(`done: ${made} generated, ${kept} kept, ${failed} failed`);
  console.log(`manifest: ${path.relative(root, MANIFEST)}`);
  if (failed) process.exit(1);
}

main();
