# Network status & offline-first — Lafla Mobile

Lafla is offline-first. Lessons, scenarios, SRS scheduling, streaks, and
achievements all run against local state (AsyncStorage via
`lib/local-progress.ts`); a working network connection is a nice-to-have,
not a hard requirement.

This doc covers:

- The `useNetworkStatus` hook and the defensive NetInfo wrapper
- The `<OfflineBanner />` component and where to mount it
- Which features degrade or fail offline, and which keep working

Sources:

- `apps/mobile/lib/network.ts` — hook + defensive require
- `apps/mobile/components/OfflineBanner.tsx` — fixed-top banner

## Why defensive?

`@react-native-community/netinfo` is **not** currently a declared dependency.
We use a dynamic `require` (same pattern as `lib/sentry.ts`) so Metro and
TypeScript do not hard-fail when the package is missing. When absent, the
hook returns a stable optimistic value:

```ts
{ isOnline: true, type: "unknown" }
```

That default is safe because the app's network code already handles
failures gracefully — Supabase is optional, Eleven Labs / pronunciation
APIs already have try/catch + fallbacks, and the SRS engine never blocks on
a network round-trip.

To enable real connectivity detection later:

```sh
pnpm --filter mobile add @react-native-community/netinfo
```

No other code change is required — `useNetworkStatus` will pick the
package up via dynamic require on the next reload, and the banner will
start reacting to real connectivity transitions.

## `useNetworkStatus()`

```ts
import { useNetworkStatus } from "../lib/network";

const { isOnline, type } = useNetworkStatus();
//      ^ boolean       ^ "wifi" | "cellular" | "none" | "unknown"
```

Behavior:

- Calls `NetInfo.fetch()` once on mount to seed the initial value so the
  first render reflects reality (instead of the optimistic default).
- Subscribes to `NetInfo.addEventListener` and unsubscribes on unmount.
- `isOnline` is `false` only when `isConnected === false` **or**
  `isInternetReachable === false`. Null fields (briefly returned during
  boot on some platforms) are treated as online to avoid a false flash.
- `type` is normalized to one of four values; anything outside the known
  set becomes `"unknown"`.

The hook keeps a module-level cache of the `require()` result so repeated
mounts do not re-throw the same `MODULE_NOT_FOUND` error.

## `<OfflineBanner />`

A small fixed-top banner that:

- Shows a yellow primary-color bar with **"Çevrimdışısın — ilerlemen
  güvende, internet gelince senkron olur."** whenever `isOnline === false`.
- Shows a brief tertiary-blue **"Tekrar çevrimiçi ✓"** confirmation when
  the connection returns, fading out after 2 seconds.
- Does **nothing** on first render when the app starts online — no fake
  "back online" flash.
- Is `pointerEvents="none"`, so it never blocks taps underneath.

It is purely visual and reads from `useNetworkStatus` directly — drop it
anywhere in the tree, no props required.

### Where to mount it

Wrap the root `<Stack>` in `app/_layout.tsx` so the banner is visible on
every screen, including modals and the lesson player. Place it **inside**
`SafeAreaProvider` (so it can be positioned absolutely against the safe
area) but **above** the Stack so it paints on top:

```tsx
// apps/mobile/app/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { OfflineBanner } from "../components/OfflineBanner";
import { tokens } from "../theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <OfflineBanner />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: tokens.bg.app },
          animation: "fade",
        }}
      >
        {/* …screens… */}
      </Stack>
    </SafeAreaProvider>
  );
}
```

If you have multiple boundary wrappers (e.g. `<ErrorBoundary>`), keep the
banner outside them — the banner should still appear when a screen
crashes, because losing connectivity may be *why* the screen crashed.

## What works offline

These features run entirely against local state and do not need a network:

- **Scenarios** — all scenario data is bundled (`apps/mobile/data/`),
  audio is either bundled or cached (`lib/audio-cache.ts`).
- **Lessons** — bundled content + local exercise grading. Lesson
  completion writes to AsyncStorage via `lib/local-progress.ts`.
- **SRS / review queue** — schedule is computed locally from the same
  AsyncStorage state (`lib/srs.ts`).
- **Streaks, daily quests, achievements** — fully local
  (`lib/streak-shield.ts`, `lib/daily-quests-v2.ts`, `lib/achievements.ts`).
- **Settings, profile, journal, scoreboard** — read-only against local
  state.
- **Pronunciation grading** — on-device when ASR is available
  (`lib/speech-recognition.ts`); falls back to a deterministic local
  scorer (`lib/pronunciation-grader.ts`) when ASR is unavailable.

## What degrades or fails offline

These features call out to the network and will return errors or stale
state until connectivity returns:

- **FreeChat** (`app/freechat.tsx`) — requires a network round-trip to the
  LLM router (`lib/llm-router.ts`). Surface the offline state to the user
  before they hit "send"; do not silently swallow.
- **Cloud sync** — Supabase auth + progress sync (`lib/supabase.ts`,
  `lib/auth.ts`). Local progress keeps accumulating and will be flushed
  on the next online run; the banner copy ("ilerlemen güvende, internet
  gelince senkron olur") reflects this contract.
- **TTS (Eleven Labs)** — `lib/elevenlabs.ts` will fail; the audio cache
  (`lib/audio-cache.ts`) serves previously-fetched clips when present.
- **Deep links / referrals** — `lib/deep-links.ts`, `lib/iap.ts` and
  `app/referral.tsx` may not be able to validate / claim on the server.
- **Analytics** — `lib/analytics.ts` events are queued or dropped
  depending on the transport; not user-visible.

## Testing the banner without NetInfo

Until `@react-native-community/netinfo` is installed, the banner will
never appear (the hook always returns `isOnline: true`). To smoke-test the
component itself, temporarily flip the default in `lib/network.ts`:

```ts
const [status, setStatus] = useState<NetworkStatus>({
  isOnline: false, // <-- flip for testing only
  type: "unknown",
});
```

Or, once the package is installed, toggle airplane mode on a device /
simulator. iOS Simulator does not simulate the cellular radio, so prefer
a physical device for full coverage.

## Future work

- **Queue-and-replay** — surface a count of unsynced events in the
  banner ("3 ders bekliyor"). Today the contract is silent: writes
  happen locally, sync happens opportunistically.
- **Connectivity-aware retries** — wire `useNetworkStatus` into the
  Supabase sync loop so we attempt a flush the moment connectivity
  returns, rather than on the next user action.
- **Slow-network mode** — `NetInfo` exposes `details.cellularGeneration`
  on Android; we could degrade audio quality / pre-fetches on `2g`.
