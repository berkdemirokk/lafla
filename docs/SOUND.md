# Sound integration plan

The sound system lives in `apps/mobile/lib/sound.ts` and is designed to
pair 1:1 with the existing haptics in `apps/mobile/lib/feedback.ts`.
Sound is **additive** — every call already has a haptic counterpart, so
sound failing / being disabled never silently drops user feedback.

## API surface

```ts
import { playSound, setSoundEnabled, isSoundEnabled } from "@/lib/sound";

await playSound("correct"); // fire-and-forget; never throws

await setSoundEnabled(false); // persists to AsyncStorage
const on = isSoundEnabled(); // sync read of the cached preference
```

- Storage key: `lafla.settings.sound` (`"true"` | `"false"`, default `true`).
- `expo-av` is loaded via `try/require` — if it's not installed or fails
  at runtime, every call NO-OPs gracefully.
- Sound instances are cached per-name on first play. Optional
  `unloadAllSounds()` is exported for low-memory cleanup if we ever need
  it (we likely won't — six short clips are < 200 KB total).

## Pairing matrix (sound + haptic + call site)

| Event                  | `playSound(...)`     | Haptic (existing)            | Suggested call site                       |
| ---------------------- | -------------------- | ---------------------------- | ----------------------------------------- |
| Exercise correct (≥85) | `"correct"`          | `hapticSuccess()`            | Exercise grading branch                   |
| Exercise partial (≥50) | `"correct"` (softer) | `hapticWarning()`            | Same — or skip sound, only haptic         |
| Exercise wrong (<50)   | `"wrong"`            | `hapticError()`              | Same                                      |
| Level / quest complete | `"levelup"`          | `hapticSuccess()`            | Quest-complete + level-up modal mount     |
| Streak freeze used     | `"streak_save"`      | `hapticImpact("medium")`     | Streak recovery toast                     |
| Primary tap / select   | `"click"`            | `hapticSelection()`          | Answer card press, choice button          |
| Page / scene advance   | `"whoosh"`           | `hapticImpact("light")`      | Pager `onPageSelected` / scene transition |

The cleanest way to wire this is to keep `lib/feedback.ts` untouched (it
stays the single source of haptic truth) and call `playSound` directly
alongside the haptic at the existing trigger sites — e.g.

```ts
import { hapticForScore } from "@/lib/feedback";
import { playSound } from "@/lib/sound";

function onGraded(score: number) {
  hapticForScore(score);
  void playSound(score >= 50 ? "correct" : "wrong");
}
```

If we later decide we *always* want sound + haptic paired, we can
introduce thin "combo" helpers in a follow-up (`feedbackForScore`,
`feedbackSelection`, etc.) that call both — but that's a deliberate
second step, not part of this change, to avoid touching `feedback.ts`.

## Settings UI (future)

Surface a single toggle: **Sound effects** (`isSoundEnabled` /
`setSoundEnabled`). Haptics are not currently behind a preference; if
that changes, mirror the same shape with a `lafla.settings.haptics` key.

Place the toggle in the existing settings screen near other A/V
preferences (TTS speed). Toggling off should be instant — `playSound`
reads the in-memory cache, no AsyncStorage round-trip per call.

## Dependencies

- **`expo-av`** is required at runtime for actual playback. It is
  optional from the manager's perspective (NO-OP if missing). It may
  already be transitively pulled in by Expo SDK 52; if not, add it via
  `npx expo install expo-av` when we're ready to ship sound. This change
  intentionally does **not** modify `package.json` / `app.json`.

## Assets

Six clips live in `apps/mobile/assets/sounds/`. See
[`assets/sounds/README.md`](../apps/mobile/assets/sounds/README.md) for
exact filenames, length budgets, style notes, and freesound.org search
queries.

## Rollout

1. Land `lib/sound.ts` + asset README + this doc (this change).
2. Source the six CC0 clips, drop them into `assets/sounds/`.
3. Run `npx expo install expo-av` if not already transitively present.
4. Wire `playSound(...)` calls at the six sites in the table above.
5. Add the settings toggle.
6. QA on iOS + Android device — verify silent-switch behavior is
   acceptable (default on iOS: SFX respects the ringer switch unless
   we call `Audio.setAudioModeAsync({ playsInSilentModeIOS: true })`,
   which we deliberately do not by default).
