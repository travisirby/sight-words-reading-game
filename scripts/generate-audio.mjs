// Pre-generate background music and sound effects with the ElevenLabs API.
// Music comes from the Music API (text prompt -> full track), sfx from the
// Sound Generation API. Files land in public/audio/ and a lookup manifest
// is written to src/audio-manifest.js; audio.js / music.js play these
// through WebAudio and fall back to the built-in synth for anything
// missing (so the game still works offline / before generation).
//
// Usage: ELEVENLABS_API_KEY=... node scripts/generate-audio.mjs [--force] [--only name,name]
//   --force        regenerate files that already exist
//   --only a,b     limit to specific music/sfx names (e.g. --only boss,coin)
//
// Regeneration is cheap and idempotent: existing files are kept unless
// --force, and the manifest only lists files that exist on disk.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = path.join(root, 'public', 'audio');
const MANIFEST = path.join(root, 'src', 'audio-manifest.js');
const FORCE = process.argv.includes('--force');
const onlyArg = process.argv[process.argv.indexOf('--only') + 1];
const ONLY = process.argv.includes('--only') ? onlyArg.split(',') : null;

const API = 'https://api.elevenlabs.io/v1';
const KEY = process.env.ELEVENLABS_API_KEY;

// ---- music tracks ----
// Every prompt asks for a seamless loop; the runtime also trims silence at
// the edges and loops the trimmed region, which hides most seam artifacts.

const STYLE =
  'Instrumental music for a cheerful children\'s reading game. ' +
  'No vocals, no singing. Composed as a seamless loop: the ending flows ' +
  'perfectly back into the beginning with no fade-out and no final cadence.';

const MUSIC = {
  title: {
    ms: 60000,
    prompt: `${STYLE} A warm, welcoming title-screen theme. Playful ukulele, glockenspiel and light hand percussion, gentle mid-tempo, major key, sunny and inviting.`,
  },
  map: {
    ms: 60000,
    prompt: `${STYLE} A bouncy overworld map theme full of adventure. Marimba, pizzicato strings, handclaps and a skipping beat, bright and curious, like exploring a toy island.`,
  },
  level: {
    ms: 60000,
    prompt: `${STYLE} An energetic running-level theme for a kids' platformer. Driving upbeat rhythm, catchy whistled melody over chiptune-flavoured synths and real drums, joyful momentum.`,
  },
  boss: {
    ms: 45000,
    prompt: `${STYLE} A mischievous, comedic castle-boss theme. Minor key but silly rather than scary: sneaky tuba, staccato strings, bouncy percussion, cartoon villain energy a 6 year old would giggle at.`,
  },
  finale: {
    ms: 60000,
    prompt: `${STYLE} An intense final-world running theme for the last stretch of the adventure. Fast and driving, minor key, urgent pumping bass, bold heroic brass and chiptune leads over pounding drums — epic and exciting like a lava-world showdown, but still fun and kid-friendly rather than frightening.`,
  },
  // ---- per-world level themes (worlds 0-4; world 5 uses `finale`) ----
  pasta: {
    ms: 60000,
    prompt: `${STYLE} A sunny, bouncy overworld running theme for a cheerful pasta-and-tomato world. Playful mandolin and accordion, skipping pizzicato strings and light hand percussion, warm major key — like a happy stroll through rolling spaghetti hills.`,
  },
  waffle: {
    ms: 60000,
    prompt: `${STYLE} A warm, golden, lazy desert running theme for a waffle-and-syrup world. Relaxed shuffle groove, twangy plucked guitar and gentle harmonica, honeyed and sunny, a cute kid-friendly nod to a spaghetti-western.`,
  },
  snow: {
    ms: 60000,
    prompt: `${STYLE} A light, twinkling, icy running theme for a snowcone island world. Sparkling glockenspiel and bells over a gentle bouncy beat, cool and refreshing and crystalline, wintry but bright and playful.`,
  },
  swamp: {
    ms: 60000,
    prompt: `${STYLE} A squishy, funky swamp running theme for a purple cabbage bog. Bubbly rubbery bass, muted quirky plucks and comedic bloops and pops, playful and a little mysterious — gooey and fun, never scary.`,
  },
  caves: {
    ms: 60000,
    prompt: `${STYLE} A mysterious, sparkling crystal-cave running theme. Echoing crystalline bells, soft chimes and glassy mallets over a gentle beat, spacious and glittery with a sense of wonder and discovery — minor-tinged but magical, not scary.`,
  },
  house: {
    ms: 45000,
    prompt: `${STYLE} A cozy home-sweet-home theme. Music box and soft felt piano, slow and warm with a lullaby feel, gentle and safe.`,
  },
  victory: {
    ms: 20000,
    prompt: `${STYLE} A celebratory level-complete theme. Bright brass fanfare settling into a happy glockenspiel groove, triumphant, confetti and stars.`,
  },
};

// ---- sound effects ----
// Names match the sample() lookups in src/audio.js. Keep everything
// kid-friendly: cartoon, soft, never harsh. Some are pitch-shifted at
// runtime via playbackRate (plink, star), so those are generated once.

const SFX = {
  coin: { s: 0.7, prompt: 'Bright cheerful arcade coin pickup chime, single short ding, video game collectible' },
  gem: { s: 0.9, prompt: 'Crystal gem pickup, glassy magical sparkle chime, ascending shimmer, video game treasure' },
  correct: { s: 1.3, prompt: 'Cheerful success jingle, quick ascending magical sparkle arpeggio, kids game correct answer, celebratory' },
  wrong: { s: 0.9, prompt: 'Gentle comedic descending wah-wah tone, soft muted trumpet, kid-friendly wrong answer, sympathetic not harsh' },
  jump: { s: 0.5, prompt: 'Cartoon character jump, short springy upward whoosh, playful video game hop' },
  land: { s: 0.5, prompt: 'Soft cartoon landing thump on grass, gentle body plop, video game platformer' },
  bonk: { s: 0.5, prompt: 'Cartoon head bonk on a wooden block from below, hollow comedic knock, video game' },
  stomp: { s: 0.6, prompt: 'Cartoon stomp squashing a critter, soft boingy squish, comedic video game enemy bounce' },
  boing: { s: 0.7, prompt: 'Springy cartoon trampoline boing, big bouncy spring launch, playful' },
  dooropen: { s: 1.3, prompt: 'Magical wooden door creaking open followed by a welcoming sparkle chime, fantasy kids game' },
  keyjingle: { s: 1.1, prompt: 'Magical golden key jingling with fairy dust sparkle, treasure found, kids fantasy game' },
  roar: { s: 1.3, prompt: 'Silly cartoon monster roar, goofy and comedic like a friendly goblin showing off, funny not scary, kids game' },
  giggle: { s: 1.0, prompt: 'Mischievous cartoon goblin giggle, impish teasing laugh, playful video game villain taunt' },
  armorpop: { s: 0.7, prompt: 'Cartoon armor plate popping off with a light metallic clank and a sparkle, comedic video game hit' },
  stargrab: { s: 0.9, prompt: 'Magical star pickup, ascending twinkling shimmer with a warm chime, kids game reward' },
  pop: { s: 0.5, prompt: 'Small distant firework pop with light crackle, single burst, celebration' },
  plink: { s: 0.5, prompt: 'Single bright xylophone plink note, clean short mallet hit, toy-like' },
  click: { s: 0.5, prompt: 'Soft friendly UI button tap, gentle rounded click, kids app interface' },
  pause: { s: 0.5, prompt: 'Soft UI pause swoosh, quick gentle downward sweep, kids game menu' },
  resume: { s: 0.5, prompt: 'Soft UI resume swoosh, quick gentle upward sweep, kids game menu' },
  levelstart: { s: 1.1, prompt: 'Playful ready-set-go starting whistle, two short toots then a rising slide whistle, kids race start' },
  star: { s: 0.8, prompt: 'Single triumphant star ding, warm bell chime with a short sparkling tail, kids game award' },
};

// ---- generation ----

async function post(url, body) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'xi-api-key': KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`${res.status} ${res.statusText}: ${detail.slice(0, 300)}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

function wants(name) {
  return !ONLY || ONLY.includes(name);
}

function fresh(file) {
  return !FORCE && fs.existsSync(file) && fs.statSync(file).size > 0;
}

async function genMusic(name, { ms, prompt }) {
  const out = path.join(OUT_DIR, `music-${name}.mp3`);
  if (fresh(out)) return 'kept';
  const buf = await post(`${API}/music?output_format=mp3_44100_128`, {
    prompt,
    music_length_ms: ms,
  });
  fs.writeFileSync(out, buf);
  return 'made';
}

async function genSfx(name, { s, prompt }) {
  const out = path.join(OUT_DIR, `sfx-${name}.mp3`);
  if (fresh(out)) return 'kept';
  const buf = await post(`${API}/sound-generation?output_format=mp3_44100_128`, {
    text: prompt,
    duration_seconds: s,
    prompt_influence: 0.6,
  });
  fs.writeFileSync(out, buf);
  return 'made';
}

// The manifest lists only files that actually exist, so a partial or failed
// run degrades gracefully to the synth fallback for the missing pieces.
function writeManifest() {
  const music = {};
  const sfx = {};
  for (const name of Object.keys(MUSIC)) {
    if (fs.existsSync(path.join(OUT_DIR, `music-${name}.mp3`))) music[name] = `music-${name}.mp3`;
  }
  for (const name of Object.keys(SFX)) {
    if (fs.existsSync(path.join(OUT_DIR, `sfx-${name}.mp3`))) sfx[name] = `sfx-${name}.mp3`;
  }
  fs.writeFileSync(
    MANIFEST,
    '// AUTO-GENERATED by scripts/generate-audio.mjs — do not edit by hand.\n' +
      '// Maps music/sfx names to files in public/audio/. Missing names fall\n' +
      '// back to the synthesized versions in audio.js / music.js.\n' +
      `export default ${JSON.stringify({ music, sfx }, null, 2)};\n`
  );
}

async function main() {
  if (!KEY) {
    console.error('Set ELEVENLABS_API_KEY (https://elevenlabs.io -> profile -> API keys)');
    process.exit(1);
  }
  fs.mkdirSync(OUT_DIR, { recursive: true });

  let made = 0, kept = 0, failed = 0;
  const jobs = [
    ...Object.entries(MUSIC).filter(([n]) => wants(n)).map(([n, d]) => ['music', n, d]),
    ...Object.entries(SFX).filter(([n]) => wants(n)).map(([n, d]) => ['sfx', n, d]),
  ];

  // Sequential on purpose: music generations are slow and the API rate-limits
  // aggressively; sfx are quick enough that this still finishes in minutes.
  for (const [kind, name, def] of jobs) {
    try {
      const r = kind === 'music' ? await genMusic(name, def) : await genSfx(name, def);
      r === 'made' ? made++ : kept++;
      console.log(`  ${r === 'made' ? 'MADE' : 'kept'} ${kind}-${name}`);
    } catch (err) {
      failed++;
      console.error(`  FAIL ${kind}-${name}: ${String(err.message || err)}`);
    }
  }

  writeManifest();
  console.log(`done: ${made} generated, ${kept} kept, ${failed} failed`);
  console.log(`manifest: ${path.relative(root, MANIFEST)}`);
  if (failed) process.exit(1);
}

main();
