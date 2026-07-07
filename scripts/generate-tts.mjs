// Pre-generate all game speech as mp3 clips using Microsoft Edge neural TTS
// (via `uvx edge-tts`, no install needed). Clips land in public/tts/ and a
// lookup manifest is written to src/tts-manifest.js; audio.js plays clips
// through WebAudio and falls back to speechSynthesis for any unknown text.
//
// Usage: node scripts/generate-tts.mjs [--force]
//   --force  regenerate clips that already exist
//
// Dynamic sentences are assembled at runtime from segments:
//   "Find the word: cat" -> [prefix clip "find the word:"] + [word clip "cat"]
// so only ~310 small clips cover every line the game can speak.

import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DOLCH, WORLDS, PRAISE } from '../src/words.js';

const run = promisify(execFile);
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = path.join(root, 'public', 'tts');
const MANIFEST = path.join(root, 'src', 'tts-manifest.js');
const FORCE = process.argv.includes('--force');

const VOICE = 'en-US-JennyNeural';
const PHRASE_RATE = '-8%'; // sentences: a touch slower than default
const WORD_RATE = '-20%'; // isolated sight words: slow and clear
const CONCURRENCY = 8;

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
  'Play!', 'Settings', 'Close', 'Sound', 'Mic round', 'Back', 'Here we go!',
  'Pause', 'Resume', 'Map', 'Play again!', 'Next level!', 'Skip',
];

// Sentence prefixes spoken before a word clip (must end with ':' — the
// runtime splitter in audio.js keys on it), plus optional suffixes after it.
const SEGMENTS = [
  'Find the word:',
  'Bonk the block with the word:',
  'Jump through the door with the word:',
  'Star time! Grab the star with the word:',
  'Almost! The word is:',
  'Nice try! The word is:',
  'Try again!',
];

const FIXED = [
  ...PRAISE,
  'You found a secret key!',
  'Level complete! Amazing!',
  'Bonus round! Read the word out loud. Hold the microphone and say it!',
  'If you forget your word, tap the blue speaker button to hear it again!',
  'All levels unlocked!',
  'A secret path appeared!',
];

function bossLines() {
  return bossNames().flatMap((name) => [
    `The ${name} wants to hear you read!`,
    `You did it! The ${name} is amazed by your reading! Here comes your crown!`,
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
  for (const t of [...SEGMENTS, ...FIXED, ...bossLines(), ...nodeNames(), ...UI_LABELS]) {
    add(t, 'phrase', PHRASE_RATE);
  }
  return clips;
}

async function synth(file, { text, rate }) {
  const out = path.join(OUT_DIR, file);
  if (!FORCE && fs.existsSync(out) && fs.statSync(out).size > 0) return 'kept';
  await run('uvx', [
    'edge-tts', '--voice', VOICE, `--rate=${rate}`,
    '--text', text, '--write-media', out,
  ]);
  if (!fs.existsSync(out) || fs.statSync(out).size === 0) {
    throw new Error(`empty output for "${text}"`);
  }
  return 'made';
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const clips = buildClips();
  const entries = [...clips.entries()];
  console.log(`${entries.length} clips, voice ${VOICE}`);

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
