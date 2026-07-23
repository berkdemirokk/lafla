# Sentry Setup — Lafla Mobile

Crash reporting and error monitoring for the Expo / React Native app. The
SDK (`@sentry/react-native`) is already installed and wired up — this guide
shows how to flip it on by adding your DSN.

## 1. Create a Sentry project

1. Sign in to <https://sentry.io> (create a free org if needed).
2. Create a new **React Native** project named `lafla-mobile`.
3. Copy the DSN — it looks like `https://<key>@o<org>.ingest.sentry.io/<id>`.

## 2. Add the DSN to `app.json`

Open `apps/mobile/app.json` and replace the placeholder:

```json
"extra": {
  ...
  "sentryDsn": "https://<key>@o<org>.ingest.sentry.io/<id>"
}
```

The DSN is a public identifier — it's safe to commit. (If you'd rather keep
it out of git, use an EAS secret and read it via `process.env` instead — see
section 5.)

Until the placeholder `YOUR_SENTRY_DSN` is replaced, `initSentry()` is a
no-op and your dev console will print `[sentry] DSN not configured`.

## 3. Build and verify

Build via EAS:

```
eas build --profile production --platform ios
```

To confirm it works, drop a one-line smoke test somewhere user-reachable:

```ts
import { captureException } from "../lib/sentry";
captureException(new Error("Sentry smoke test"));
```

The event should land in your Sentry dashboard within ~30s. Remove the test
line before shipping.

## 4. What's already wired up

- **Boot**: `initSentry()` runs at the top of `app/_layout.tsx`, so the SDK
  is live before the first render.
- **User context**: `lib/useSession.ts` calls `setUser()` on sign-in /
  sign-out — every event carries the Supabase user id (and email, if set).
- **React crashes**: `components/ErrorBoundary.tsx` reports caught render
  errors with a component stack.
- **Local conversation tools**: unexpected screen/runtime exceptions are
  captured by the normal React error boundary. User-entered conversation text
  is not attached to events.
- **IAP**: RevenueCat configure() failures in `lib/iap.ts` are reported so
  silent demotion to the mock plan doesn't go unnoticed in production.

## 5. EAS secrets (optional)

If you'd prefer to keep the DSN out of `app.json`:

```
eas secret:create --scope project --name EXPO_PUBLIC_SENTRY_DSN --value "<dsn>"
```

Then change `lib/sentry.ts` to read `process.env.EXPO_PUBLIC_SENTRY_DSN`
instead of `Constants.expoConfig?.extra?.sentryDsn`.

## 6. Source maps

For readable stack traces in production, add the Sentry Metro plugin and
EAS post-build hook. The fastest path is the wizard:

```
npx @sentry/wizard@latest -i reactNative
```

Accept defaults. It will patch `metro.config.js` and configure EAS to upload
source maps on each build. You'll need a Sentry auth token (the wizard
prompts for it).

## Troubleshooting

- **No events in Sentry**: confirm `extra.sentryDsn` in `app.json` is not
  the placeholder `YOUR_SENTRY_DSN`. Rebuild after changing.
- **Stack traces look minified**: source maps did not upload. Re-run the
  wizard (section 6) or check the Sentry release artifacts page.
- **Dev events flooding the project**: `enableInExpoDevelopment` is `false`
  and `__DEV__` events also skip the SDK by design. If you still see noise,
  filter by `environment:production` in Sentry's issue stream.

## API reference

All helpers live in `apps/mobile/lib/sentry.ts`:

| Function | Purpose |
| --- | --- |
| `initSentry()` | One-time SDK init. Called at app boot. |
| `captureException(err, context?)` | Report a caught error. |
| `captureMessage(msg, level?)` | Log a message without an exception. |
| `setUser(user \| null)` | Attach signed-in user to events. |
| `addBreadcrumb({ category, message, data? })` | Trace breadcrumbs. |

All are safe to call before `initSentry()` — they drop to console.
