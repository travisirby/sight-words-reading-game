# Super Kids Sight Words Adventure 🏃🪙

**Play it now: https://travisirby.github.io/sight-words-reading-game/**
(On the iPad: open that link in Safari → Share → **Add to Home Screen** for
fullscreen. HTTPS is built in, so the read-aloud mic round works too.)

Deploys are automatic: merging to `main` redeploys the production URL above,
and every other pushed branch gets its own preview at
`https://travisirby.github.io/sight-words-reading-game/previews/<branch>/`
(slashes in branch names become dashes). Previews are removed when the branch
is deleted. See `.github/workflows/`.

A Three.js sight-words game for early readers. A Mario-style 2.5D platformer
through a Minecraft-look voxel world, with a Super Mario World-style overworld
map that opens up as you beat levels. The game **speaks** a Dolch sight word and
the player answers by playing — reading by ear-to-eye recognition. No failure
states, no timers, just coins, confetti, and encouragement.

## How it plays

- **Auto-walk platformer**: the character walks right on his own; tap anywhere
  to jump — every jump is full height, no holding needed. Coyote time and jump
  buffering keep it forgiving for small hands.
- **Word events** inside each level:
  - **? Blocks** — bonk the spoken word from below, Mario-style
  - **Word doors** — jump to the tier with the right word to open the way
  - **Flag stars** — review words at the finish flagpole for bonus gems
- **Critters** can be stomped for coins; touching one just costs a coin.
- **Overworld map**: a voxel diorama journey across 5 regions. Beating a level
  reveals the path to the next node block-by-block. Locked regions loom ahead,
  darkened, until you reach them.
- **Golden keys & secret levels**: some levels hide a key on a hard-to-reach
  platform. Find it to reveal a purple secret path to that world's secret
  level — loaded with the 10 words he personally finds hardest, and extra coins.

## Play on this Mac

```bash
npm install
npm run dev
```

Open http://localhost:5173. Arrow keys / WASD steer, Space/Up jumps.

## Play on the iPad (recommended)

iOS Safari only allows the microphone (read-aloud bonus round) on HTTPS, so use:

```bash
npm run dev:ipad
```

Then on the iPad, open the `https://192.168.x.x:5173` "Network" address the
command prints (same wifi). Safari will warn about the self-signed certificate —
tap **Show Details → visit this website**. For fullscreen play, use
Share → **Add to Home Screen** and launch from the icon.

The first mic use will ask for permission; if Speech Recognition is unavailable
(needs *Settings → Siri & Dictation* enabled), the bonus round hides itself and
everything else still works.

## How it teaches

- **Dolch progression** — 5 worlds map to the Dolch tiers (pre-primer → 3rd grade),
  ~10 words per level: Pasta Plains 🍝, Waffle Desert 🧇, Snowy Peaks ❄️,
  Crystal Caves 💎, Sky Islands ☁️.
- **Hear it, find it** — the word is spoken, never shown in the HUD; the 🔊 button
  repeats it anytime, and it auto-repeats if he hesitates.
- **Gentle retry** — a wrong block/door re-asks the same word on the spot, and
  missed words come back for extra practice in future runs (and fill the secret
  levels).
- **Read it aloud** — after each level, he reads 3 words into the mic for bonus gems.
- **Progress** — stars per level, per-word mastery stats, coins/gems, keys and
  secret paths, all saved on-device (localStorage). Finishing a level unlocks
  the next.

Tip for grown-ups: tap the `v1.0` label on the title screen 5 times to unlock all
levels.

## Tech

Vite + vanilla JS + three.js. Everything is procedural — voxel geometry, canvas
word signs, WebAudio sound effects, Web Speech API for voice — zero external
assets. `npm run build` outputs a static site (`dist/`) that can be hosted
anywhere, e.g. GitHub Pages (HTTPS included, so the mic works there too).

## Cutscenes

Story beats between levels are data-driven: scripts live in
`src/cutscenes.js` (plain arrays of steps — camera moves, actors, spoken
captions with highlighted sight words, big word reveals) and are played by the
director in `src/cutscene.js`. To iterate on a scene without playing to it,
boot straight into it with `?cutscene=<name>`, e.g.
`http://localhost:5173/?cutscene=demo`. Tap anywhere to fast-forward a step;
SKIP ends the scene.
