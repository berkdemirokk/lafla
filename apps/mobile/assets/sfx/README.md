# Lafla — SFX assets

This directory holds the eight short sound-effect clips consumed by
`apps/mobile/lib/sfx.ts`. Drop the files in here with the **exact**
filenames listed below. The sfx manager will NO-OP gracefully for any
file that is missing, so the app boots safely with zero assets in place.

> This is a separate library from `assets/sounds/` (which is for
> exercise feedback chimes — `correct`, `wrong`, `levelup`, etc.). SFX
> is for premium-feel UI polish: swipes, scores, achievements, taps.

## Format

| Property         | Value                                |
| ---------------- | ------------------------------------ |
| Container        | `.mp3`                               |
| Channels         | mono                                 |
| Sample rate      | 44.1 kHz                             |
| Bitrate          | 128 kbps                             |
| Loudness target  | **-16 LUFS** integrated              |
| True-peak ceiling| -1 dBTP                              |

Keep clips short and dry. UI sfx fatigue fast — every millisecond of
reverb tail you can shave makes the app feel snappier.

## Sourcing

- **freesound.org** filtered by `License: Creative Commons 0` is the
  fastest path. If a clip requires attribution under CC-BY, write it
  into a `CREDITS.txt` next to this README.
- **Pixabay** audio is fine — their license permits royalty-free
  commercial use without attribution.
- **Commissioned** original SFX (a session musician + a DAW for a few
  hours) is the cleanest long-term option.

Once a file is picked, normalize to -16 LUFS in any DAW (Audacity:
`Effect → Loudness Normalization`, ffmpeg: `loudnorm=I=-16:TP=-1:LRA=11`).

## Files

### 1. `swipe_skip.mp3` — soft falling whoosh, 100–150 ms
Played when a card / scene is dismissed without engaging. Feeling:
"passing by", not failure. Mid frequency, a hair of downward pitch
movement. Mono, no melodic content.

freesound search: `whoosh short soft`, `swipe ui dismiss`,
`pass by light`.

### 2. `swipe_enter.mp3` — upward chirp + tactile pop, 150–200 ms
Played when the learner commits to a card / scene. Feeling: "engaging",
forward momentum. Subtle musical resolution (perfect fourth or fifth
works). Slightly brighter than `swipe_skip`.

freesound search: `swipe enter ui`, `select rise short`, `tap pop bright`.

### 3. `score_low.mp3` — gentle descending two-note, ~280 ms
Played on a low pronunciation / exercise score. **Must not feel
negative** — we don't punish learners. Warm timbre, descending minor
third is the safe bet. No buzz, no sting.

freesound search: `gentle descend two note`, `soft try again`,
`warm minor short`.

### 4. `score_mid.mp3` — neutral single tone, ~200 ms
Played on a middle-band score. Feeling: "noted". Should be the most
forgettable sfx — a soft "blip", flat in character. Single short tone,
no envelope drama.

freesound search: `ui neutral tone`, `acknowledge short`,
`mid feedback bell`.

### 5. `score_high.mp3` — rising 3-note arpeggio, ~400 ms
Played on a high score. Feeling: "yes!", small win. Major-key
arpeggio, 1-3-5 or similar. Plucky, ideally a single instrument
(marimba / glock / soft synth). Quick decay.

freesound search: `success arpeggio short`, `positive rise three note`,
`win bright pluck`.

### 6. `achievement.mp3` — shimmer + sparkle, ~600 ms
Played when the learner unlocks a badge / completes a quest. Feeling:
"earned" — rewarding but not loud. A breath of shimmer (bell + a tail
of sparkle) reads correctly. Should NOT scream "level up" — that's
the next clip's job.

freesound search: `achievement unlock soft`, `sparkle reward short`,
`badge bell shimmer`.

### 7. `level_up.mp3` — richer version of achievement, ~800 ms
Played on a level / streak milestone. The only sfx allowed to feel
"rich" — stereo OK, slight reverb tail OK, a sustained final note OK.
Still mobile-game-y, not cinematic. Ascending motif into a held last
note.

freesound search: `level up game`, `milestone fanfare short`,
`unlock celebration soft`.

### 8. `tap_soft.mp3` — imperceptibly short pop, 60–80 ms
Played on button taps during onboarding. **Zero personality** — if
this sfx has any character it will fatigue within a session. Closer
to a switch click than a musical note. Dry, no pitch.

freesound search: `ui tap soft`, `button click subtle`, `mechanical
tick short`.

## After dropping files in

1. Place the eight `.mp3` files in this directory with the exact names
   above.
2. No code change is required — `lib/sfx.ts` already `require()`s
   these paths.
3. Verify on a device: call `playSfx("tap_soft")` from any screen and
   confirm audio plays once with no lag. Call `preloadSfx()` from your
   app root for sub-10ms first-play latency.
