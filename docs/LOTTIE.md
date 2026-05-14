# Lottie animations in Lafla

Lafla uses [Lottie](https://airbnb.io/lottie/) animations for high-value
micro-interactions — celebrating lesson completion, confirming correct
answers, indicating streak status, and so on. This document covers:

1. The defensive wrapper component and why it exists
2. How to add a new animation
3. The five planned integration points

---

## 1. The wrapper: `components/LottieView.tsx`

All Lottie usage in the app goes through
`apps/mobile/components/LottieView.tsx`. This is a thin wrapper around
`lottie-react-native` that resolves the module inside a `try/catch`:

- If the SDK loads → it renders the real animation.
- If the SDK is missing or fails to link → it renders `null` (or a small
  dev-only placeholder if you pass `fallbackText`).

The wrapper exists because:

- **Optional native dependency.** `lottie-react-native` is not yet in
  `package.json` (see "Installing the SDK" below). The wrapper lets us
  ship the call sites first and the SDK later without breaking the build.
- **Graceful degradation in Expo Go.** Even after install, Expo Go does
  not always have the native module linked. The wrapper hides this.
- **Single point of policy.** Default `resizeMode`, default `autoPlay`,
  default `loop`, and the Cyber-Electric fallback styling all live here.

### Public API

```ts
type LottieViewProps = {
  source: unknown;              // require('@/assets/lottie/foo.json')
  size: number;                 // square px
  autoPlay?: boolean;           // default true
  loop?: boolean;               // default true
  onAnimationFinish?: () => void;
  fallbackText?: string;        // dev-only placeholder label
};

// Also exported for callers that want to gate UI on availability:
export const isLottieAvailable: boolean;
export const lottieResolutionError: unknown;
```

### Usage example

```tsx
import LottieView from '@/components/LottieView';
import lessonCompleteAnim from '@/assets/lottie/lesson_complete.json';

<LottieView
  source={lessonCompleteAnim}
  size={240}
  autoPlay
  loop={false}
  onAnimationFinish={() => navigation.goBack()}
  fallbackText="lesson_complete"
/>
```

---

## 2. Installing the SDK (when ready)

We have **not** installed `lottie-react-native` yet. When the team is ready:

```bash
pnpm --filter mobile add lottie-react-native
```

Then for Expo:

```bash
npx expo prebuild
```

…or run on a development build. No code changes are required after
install — the wrapper auto-detects the module.

> **Note:** Do not import `lottie-react-native` directly in app code.
> Always go through `components/LottieView.tsx` so the defensive
> fallback works.

---

## 3. Adding a new animation

1. Pick a source on [lottiefiles.com](https://lottiefiles.com). Filter by
   **Free license** and double-check the licence text on the asset page.
2. (Optional) Use the LottieFiles editor to recolour to the
   Cyber-Electric palette — see `apps/mobile/assets/lottie/README.md` for
   the colour table.
3. Export the JSON and save it to `apps/mobile/assets/lottie/<name>.json`
   using `snake_case` and an event-based name
   (`lesson_complete.json`, not `confetti.json`).
4. Add the new entry to `apps/mobile/assets/lottie/README.md` so the next
   contributor knows what each file is for.
5. Import in the calling component via `require('@/assets/lottie/<name>.json')`
   and pass it to `<LottieView source={...} size={...} />`.
6. If the animation is non-looping, set `loop={false}` and wire
   `onAnimationFinish` to whatever should happen next.

### Performance budget

- Keep each JSON under **80 KB**.
- Total Lottie payload across the app should stay under **500 KB**.
- Avoid animations with embedded raster images — they balloon bundle size
  and break the theme recolouring step.

---

## 4. The five planned integration points

| # | Animation                  | Lives in                                                     | Trigger                                  | Loop? |
|---|----------------------------|--------------------------------------------------------------|------------------------------------------|-------|
| 1 | `lesson_complete.json`     | `components/LessonComplete.tsx`                              | Final exercise of a lesson resolves      | No    |
| 2 | `streak_save.json`         | `components/DailyQuestsBar.tsx` + Streak Save modal          | Mounted whenever the streak chip is shown | Yes   |
| 3 | `achievement_unlock.json`  | `components/AchievementToast.tsx`                            | New achievement awarded                  | No    |
| 4 | `correct_check.json`       | `components/exercises/*` correctness overlay                 | User submits a correct answer            | No    |
| 5 | `wrong_x.json`             | `components/exercises/*` correctness overlay                 | User submits an incorrect answer         | No    |

### 4.1 Lesson complete

- **File:** `components/LessonComplete.tsx`
- **Where:** Top of the celebration card, above the headline and XP delta.
- **Size:** `240` (large hero moment).
- **Behaviour:** `autoPlay`, `loop={false}`. Hook `onAnimationFinish` to
  enable the "Continue" CTA so users don't tap through before the moment
  lands. Falls back to the existing static UI silently if Lottie is
  unavailable.

### 4.2 Streak save / streak indicator

- **Files:** `components/DailyQuestsBar.tsx` (inline chip) and the Streak
  Save modal.
- **Where:** Replaces the static flame emoji/icon when the user has an
  active streak. In the modal, it sits above the "Save your streak" CTA.
- **Size:** `28` inline, `120` in the modal.
- **Behaviour:** `autoPlay`, `loop={true}`. No finish handler. When the
  SDK is missing, the existing static icon stays in place because the
  wrapper returns `null` and the surrounding layout already accounts for
  the static fallback.

### 4.3 Achievement unlock

- **File:** `components/AchievementToast.tsx`
- **Where:** Leading edge of the toast, replacing the static medal icon.
- **Size:** `64`–`80`.
- **Behaviour:** `autoPlay`, `loop={false}`. Use `onAnimationFinish` to
  start the toast's auto-dismiss timer so the celebration always
  completes before the toast disappears.

### 4.4 Correct answer feedback

- **Files:** all components under `components/exercises/`.
- **Where:** Centred overlay on the exercise card when the user answers
  correctly, on top of the existing green flash.
- **Size:** `64`.
- **Behaviour:** `autoPlay`, `loop={false}`. Fires once per submission.
  Keep duration tight (400–700ms in the JSON) so it doesn't slow the
  cadence of rapid-fire exercises.

### 4.5 Wrong answer feedback

- **Files:** all components under `components/exercises/`.
- **Where:** Same overlay slot as the correct animation, swapped based on
  `isCorrect`.
- **Size:** `64`.
- **Behaviour:** `autoPlay`, `loop={false}`. Pair with haptic feedback if
  enabled. The shake amplitude in the JSON should be subtle — error
  feedback in a learning app should *inform*, not punish.

---

## 5. Testing checklist

When wiring a new animation:

- [ ] App still builds and renders the calling screen **with**
      `lottie-react-native` removed (`isLottieAvailable === false`).
- [ ] Animation centred and crisp at its intended size on a 1x device.
- [ ] Non-looping animations call `onAnimationFinish` exactly once.
- [ ] Colours match the Cyber-Electric palette under both dark and
      (future) light backgrounds.
- [ ] JSON file < 80 KB and contains no embedded raster images.
