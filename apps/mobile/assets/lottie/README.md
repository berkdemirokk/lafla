# Lottie Animation Assets

This folder will hold the JSON files for all Lottie animations used in Lafla.
The animations are loaded by `apps/mobile/components/LottieView.tsx`, which
degrades gracefully when `lottie-react-native` is not installed — so it is
safe to ship the app before any of these files land.

## Brand context

Lafla uses the **Cyber-Electric** theme:

| Token             | Hex       | Use                                                    |
| ----------------- | --------- | ------------------------------------------------------ |
| Primary / accent  | `#f6ff00` | The signature electric yellow. Use for hero strokes.   |
| Surface dark      | `#0a0a0a` | Page background — animations should pop against this.  |
| Success           | `#7CFF6B` | Correct answers, completion.                           |
| Danger            | `#FF4D6D` | Wrong answers, streak loss.                            |
| Info / cool       | `#4DD0FF` | Neutral pings, info badges.                            |

All animations below should be colour-edited (in After Effects or directly in
the JSON via [LottieFiles editor](https://lottiefiles.com/editor)) to match
these tones before shipping. A safe default: replace any "primary" stroke
colour with `#f6ff00` and keep secondary strokes white at 80% opacity.

## File naming

Use `snake_case.json` and keep names verb/event-based, not visual-shape-based,
so the asset can be swapped without renaming references.

## Sourcing

All five files below should be downloaded from
[lottiefiles.com](https://lottiefiles.com) using the suggested search terms.
Prefer the **Free license** filter and check the licence on the asset page
before committing. Re-export at 60fps if the source is 30fps to match the
rest of the app's micro-interactions.

---

## Needed animations (5)

### 1. `lesson_complete.json`

- **Search keywords:** `confetti celebration`, `confetti burst`, `success party`
- **When it plays:** Lesson Complete screen (`components/LessonComplete.tsx`)
  after the final exercise of a lesson.
- **Duration target:** 1.5–2.5s, **non-looping** (autoPlay once).
- **Recommended size:** 220–280px square, centred above the streak counter.
- **Colour edit:** Recolour the confetti palette to
  `#f6ff00` (60% of pieces), `#4DD0FF` (25%), white (15%).
- **Notes:** Pick a version with the burst originating from the *bottom-centre*
  so it frames the headline rather than covering it.

### 2. `streak_save.json`

- **Search keywords:** `fire flame loop`, `flame torch loop`, `burning flame`
- **When it plays:** Streak indicator in the top-right of the home screen and
  on the Streak Save modal. **Loops continuously.**
- **Duration target:** seamless 1–2s loop.
- **Recommended size:** 28–32px inline (header chip), 120px in the modal.
- **Colour edit:** Outer flame `#f6ff00`, inner flame white, base shadow
  `#FF4D6D` at 40%. Avoid orange tones — they clash with the theme.
- **Notes:** Test that it stays legible at 28px; some flame loops only read at
  120px+.

### 3. `achievement_unlock.json`

- **Search keywords:** `trophy reveal`, `badge unlock`, `medal shine`
- **When it plays:** `components/AchievementToast.tsx` when a new achievement
  is awarded. **Plays once** then settles on the final frame.
- **Duration target:** 1.2–1.8s.
- **Recommended size:** 64–80px square, leading edge of the toast.
- **Colour edit:** Trophy body `#f6ff00`, sparkle/ray colour white,
  background "shine" radial gradient from `#f6ff00` to transparent.
- **Notes:** Choose a version where the trophy *enters from below and scales
  up*, not one that drops from above — feels more rewarding.

### 4. `correct_check.json`

- **Search keywords:** `green checkmark`, `success check`, `check tick`
- **When it plays:** Exercise feedback overlay when the user answers
  correctly (`components/exercises/*`). **Plays once.**
- **Duration target:** 400–700ms — must feel snappy, not celebratory.
- **Recommended size:** 56–72px, centred over the answer area.
- **Colour edit:** Stroke `#7CFF6B` (success green), with a subtle
  `#f6ff00` flash at the peak frame for brand consistency.
- **Notes:** Prefer a *single-stroke draw-on* animation over a "pop" — the
  draw-on reads as confirmation, the pop reads as a notification.

### 5. `wrong_x.json`

- **Search keywords:** `red x shake`, `wrong cross`, `error x mark`
- **When it plays:** Exercise feedback overlay when the user answers
  incorrectly. **Plays once.**
- **Duration target:** 500–800ms. The shake should be subtle (≤4px amplitude)
  to avoid feeling punitive.
- **Recommended size:** 56–72px, centred over the answer area.
- **Colour edit:** Stroke `#FF4D6D` (danger), no yellow — we do not want
  the brand colour associated with failure.
- **Notes:** Avoid versions with a "scribble out" effect; we want the X to
  read as a definitive mark, not a doodle.

---

## Integration

See `docs/LOTTIE.md` for the full integration plan, including which file
loads which animation and how to wire `onAnimationFinish`.
