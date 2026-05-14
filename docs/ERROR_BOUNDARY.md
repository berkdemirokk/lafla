# ErrorBoundary — Lafla Mobile

Global React error boundary that catches render-phase crashes anywhere in
the component tree, ships them to Sentry, and shows a graceful recovery UI
in the Cyber-Electric theme instead of a white screen.

Source: `apps/mobile/components/ErrorBoundary.tsx`

## What it catches (and what it does not)

React error boundaries are scoped by design. They catch:

- Errors thrown during **render**
- Errors in **lifecycle methods** (componentDidMount, useEffect setup, etc.)
- Errors in **constructors** of child components

They do **not** catch:

- Errors inside **event handlers** (onPress, onChange, …) — wrap those in
  try/catch and call `captureException(err)` manually from `lib/sentry.ts`.
- **Async / Promise rejections** — handle at the call site, then report.
- **SSR** errors — not relevant for this app, but worth knowing.
- Errors thrown inside the boundary itself.

For the gaps above, use `captureException` directly. See `lib/sentry.ts`.

## How to wrap

Wrap the root `<Stack>` in `app/_layout.tsx`. The boundary lives inside
`SafeAreaProvider` so the recovery UI still respects insets:

```tsx
// apps/mobile/app/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { tokens } from "../theme";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: tokens.bg.app },
            animation: "fade",
          }}
        >
          {/* …screens… */}
        </Stack>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
```

A single root boundary is enough for crash reporting. If you want a single
*screen* to recover independently (without losing navigation state), you
can nest additional `<ErrorBoundary>` instances around that screen's body.

## The crash UI

When `hasError` flips true, the boundary renders a full-screen panel:

- Dark `tokens.bg.onBackground` background
- Big `💥` emoji
- Heading: **"Bir şey ters gitti"** + short Turkish subtitle
- Primary CTA **"Yeniden başlat"** — resets `state.hasError = false`, so the
  children re-mount. Good for transient errors; deterministic bugs will
  immediately re-trigger the boundary.
- Secondary CTA **"Hatayı bildir"** — opens the user's mail client to
  `mailto:hello@lafla.app` with subject `Lafla crash report` and the error
  message pre-filled in the body. The error has already been auto-sent to
  Sentry on `componentDidCatch`; this CTA is for user-supplied context.
- In `__DEV__` only, a scrollable debug box shows `error.message` and the
  first 10 lines of `errorInfo.componentStack`. Hidden in production
  builds.

## Sentry integration

`componentDidCatch` calls `captureException(error, { componentStack })`
from `apps/mobile/lib/sentry.ts`. That wrapper is a defensive no-op until
`@sentry/react-native` is installed and `EXPO_PUBLIC_SENTRY_DSN` is set
— see `docs/SENTRY.md`. Until then, errors are logged to the console with
the same shape Sentry will eventually receive.

When Sentry is live, the event will carry:

- `error.message`, `error.stack` — from the thrown `Error`
- `extra.componentStack` — React's component stack string, useful for
  pinpointing the offending element

## Testing

### Manual smoke test (throw-on-purpose)

Drop a temporary "crash button" inside any screen and tap it after the
boundary is wired up:

```tsx
import { Pressable, Text } from "react-native";

function CrashOnPurpose() {
  const [boom, setBoom] = React.useState(false);
  if (boom) throw new Error("Test crash from CrashOnPurpose");
  return (
    <Pressable onPress={() => setBoom(true)}>
      <Text>💣 Throw test error</Text>
    </Pressable>
  );
}
```

Tap → the screen should be replaced by the Lafla crash UI, the dev-only
debug box should show `Test crash from CrashOnPurpose`, and the console
should log `[sentry] captureException: …` (or a real Sentry event when the
SDK is installed).

### Verify recovery

Tap **"Yeniden başlat"**. Because the underlying state (`boom`) lived
inside the now-unmounted subtree, the children re-mount cleanly and the
app returns to the screen you were on. If the boundary catches again
immediately, you have a deterministic bug — not a transient one.

### Verify the mail intent

Tap **"Hatayı bildir"** on a device with a configured mail client. On the
iOS simulator / a stripped-down Android emulator this often fails with
"no handler" — that is expected. `Linking.openURL` rejects silently; the
app does not crash.

### Production check

Toggle `__DEV__` off (production build) and confirm:

- The debug box is hidden.
- The crash UI is otherwise identical.
- The Sentry event reaches the dashboard.

## Why a class component?

React still requires `componentDidCatch` / `getDerivedStateFromError` to
live on a class. There is no hook equivalent in React 18 / RN 0.76. If
React ships a hook-based API in the future, this is a single-file swap.

## Future work

- Per-route boundaries for non-critical screens (settings, profile) so a
  bad sub-tree does not show the global crash screen.
- Restart-attempt counter — after N consecutive catches on the same error,
  surface a "contact support" path instead of looping the user.
- Wire the **"Hatayı bildir"** flow to an in-app form once we have one,
  instead of `mailto:` (which depends on a client being installed).
