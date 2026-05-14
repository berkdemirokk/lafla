# Lafla — Sound assets

This directory holds the six short SFX clips used by
`apps/mobile/lib/sound.ts`. Drop the files in here with the **exact**
filenames listed below. The sound manager will NO-OP gracefully for any
file that is missing, so it is safe to ship clips incrementally.

## Format guidelines

- **Container:** `.m4a` (AAC) preferred — smallest size on iOS/Android with
  hardware decode. `.mp3` is acceptable as a fallback; if you switch the
  extension, also update the `require()` lines in `lib/sound.ts`.
- **Length:** keep each clip ≤ the duration noted below. Long SFX feel
  laggy and overlap subsequent UI interactions.
- **Loudness:** normalize to ~ -14 LUFS integrated (or peak ~ -3 dBFS) so
  the mix sits below the OS notification volume.
- **Channels:** mono is fine for everything except `levelup` (stereo ok).
- **Sample rate:** 44.1 kHz / 48 kHz.
- **Licensing:** CC0 / public-domain only. `freesound.org` filter
  `License: Creative Commons 0` is the easiest source. Always keep a
  `CREDITS.txt` next to this README if a file requires attribution.

## Required files

### 1. `correct.m4a` — short pixel chime, 80-120 ms
- **Purpose:** plays when the learner answers an exercise correctly,
  paired with `hapticSuccess()`.
- **Style notes:** bright, plucky, "ding!" — think Duolingo-style positive
  reinforcement. Major third or perfect fifth interval reads as cheerful.
  Avoid long reverb tails (it should feel snappy).
- **freesound.org search:** `correct chime pixel`, `success ding short`,
  `ui positive bell`.

### 2. `wrong.m4a` — soft buzz / error, 100-150 ms
- **Purpose:** plays on an incorrect answer, paired with `hapticError()`.
- **Style notes:** *not* harsh — we don't want to punish learners. A
  muted "uh" / soft buzzer / minor second works. No long sting.
- **freesound.org search:** `soft buzz error`, `wrong answer mild`,
  `ui negative subtle`.

### 3. `levelup.m4a` — celebratory, 300-500 ms
- **Purpose:** plays when the learner completes a level / milestone /
  daily quest, paired with `hapticSuccess()` and confetti.
- **Style notes:** ascending arpeggio, sparkles, fanfare-lite. This is the
  only clip allowed to be "rich" — stereo, slight tail OK. Should still
  feel mobile-game-y, not cinematic.
- **freesound.org search:** `level up game`, `achievement unlock`,
  `success fanfare short`.

### 4. `click.m4a` — UI tap, 30-50 ms
- **Purpose:** plays on any primary tap (card flip, answer select),
  paired with `hapticSelection()` or `hapticImpact('light')`.
- **Style notes:** dry, no pitch — closer to a switch click or soft
  "tick" than a musical note. This is the highest-frequency SFX; if it
  has any character it will fatigue fast.
- **freesound.org search:** `ui click soft`, `button tap subtle`,
  `mechanical tick short`.

### 5. `streak_save.m4a` — relief whoosh, 200-300 ms
- **Purpose:** plays when a streak freeze / streak-save triggers,
  paired with `hapticImpact('medium')`.
- **Style notes:** "phew" — sigh of relief crossed with a warm shimmer.
  Slight rising pitch reads as recovery. Avoid celebration territory —
  that's `levelup`'s job.
- **freesound.org search:** `relief whoosh`, `save sound warm`,
  `recovery shimmer short`.

### 6. `whoosh.m4a` — page transition, 150-200 ms
- **Purpose:** plays during navigation transitions (lesson advance, scene
  swipe), paired with `hapticImpact('light')`.
- **Style notes:** airy, directional, low-mid frequency. Think Material
  Design page transition. Mono, no melodic content.
- **freesound.org search:** `whoosh transition short`, `swipe ui`,
  `page swipe soft`.

## After you add the files

1. Drop the six files into this directory using the exact filenames above.
2. No changes required to `lib/sound.ts` — the `require()` calls already
   reference these paths.
3. Verify on a device: call `playSound('correct')` from any screen and
   confirm audio plays once with no lag.
