# Word Runner 🏃🪙

A Three.js sight-words game for early readers. Mario-style auto-runner through a
Minecraft-look voxel world. The game **speaks** a Dolch sight word and the player
steers through the gate showing that word — reading by ear-to-eye recognition.
No failure states, no timers, just coins, confetti, and encouragement.

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
  ~10 words per level: Grass Plains 🌿, Sandy Desert 🏜️, Snowy Peaks ❄️,
  Crystal Caves 💎, Sky Islands ☁️.
- **Hear it, find it** — the word is spoken, never shown in the HUD; the 🔊 button
  repeats it anytime, and it auto-repeats if he hesitates.
- **Gentle retry** — a wrong gate re-asks the same word seconds later, and missed
  words come back for extra practice at the end of the run and in future runs.
- **Read it aloud** — after each level, he reads 3 words into the mic for bonus gems.
- **Progress** — stars per level, per-word mastery stats, coins/gems, all saved
  on-device (localStorage). Finishing a level unlocks the next.

Tip for grown-ups: tap the `v1.0` label on the title screen 5 times to unlock all
levels.

## Tech

Vite + vanilla JS + three.js. Everything is procedural — voxel geometry, canvas
word signs, WebAudio sound effects, Web Speech API for voice — zero external
assets. `npm run build` outputs a static site (`dist/`) that can be hosted
anywhere, e.g. GitHub Pages (HTTPS included, so the mic works there too).
