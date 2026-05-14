# Sentry Setup — Lafla Mobile

Crash reporting and error monitoring for the Expo / React Native app. The
codebase already ships a defensive scaffold at `apps/mobile/lib/sentry.ts`
that is a no-op until the SDK is installed — follow this guide to turn it on.

## 1. Get a DSN

1. Sign in to <https://sentry.io> (create a free org if needed).
2. Create a new **React Native** project named `lafla-mobile`.
3. Copy the DSN — it looks like `https://<key>@o<org>.ingest.sentry.io/<id>`.

## 2. Add the DSN to your environment

Add to `apps/mobile/.env` (and the corresponding EAS secret for production):

```
EXPO_PUBLIC_SENTRY_DSN=https://<key>@o<org>.ingest.sentry.io/<id>
```

The `EXPO_PUBLIC_` prefix is required so Expo inlines the value into the
client bundle at build time. Do **not** commit `.env`.

For EAS builds:

```
eas secret:create --scope project --name EXPO_PUBLIC_SENTRY_DSN --value "<dsn>"
```

## 3. Install the SDK and run the wizard

From the repo root:

```
pnpm --filter mobile add @sentry/react-native
npx @sentry/wizard@latest -i reactNative
```

The wizard will:

- Patch `app.json` with the `@sentry/react-native/expo` config plugin.
- Add the Sentry Metro serializer to `metro.config.js`.
- Upload source maps on EAS builds (asks for an auth token).

Accept the defaults unless you have a reason to deviate.

## 4. Initialize Sentry at app boot

Edit `apps/mobile/app/_layout.tsx`:

```ts
import { initSentry, wrapRoot } from "../lib/sentry";

initSentry();

function RootLayout() {
  // ...existing code
}

export default wrapRoot(RootLayout);
```

That single `initSentry()` call uses `EXPO_PUBLIC_SENTRY_DSN` from the env.
You can override per-environment by passing options:

```ts
initSentry({
  dsn: process.env.EXPO_PUBLIC_SENTRY_DSN,
  environment: __DEV__ ? "development" : "production",
  tracesSampleRate: 0.1,
});
```

## 5. Reporting errors and breadcrumbs

Anywhere in the app:

```ts
import { captureException, addBreadcrumb } from "../lib/sentry";

addBreadcrumb({
  category: "scenario",
  message: "user opened scenario",
  data: { scenarioId },
});

try {
  await loadScenario(scenarioId);
} catch (err) {
  captureException(err, { scenarioId });
}
```

Both functions stay safe to call before `initSentry()` runs and remain
no-ops if the SDK is ever uninstalled.

## 6. Verify

1. Run the app: `pnpm --filter mobile exec expo start`.
2. Trigger a test exception:

   ```ts
   captureException(new Error("Sentry smoke test"));
   ```

3. Confirm the event appears in your Sentry project dashboard within ~30s.

## 7. Source maps (release builds)

The wizard configures EAS to upload source maps automatically. If you build
locally, run:

```
npx sentry-expo-upload-sourcemaps dist
```

after `expo export`.

## Troubleshooting

- **No events in Sentry**: confirm `EXPO_PUBLIC_SENTRY_DSN` is set (check
  `process.env.EXPO_PUBLIC_SENTRY_DSN` in a dev console). Without a DSN
  the scaffold logs `[sentry] no DSN configured — skipping init`.
- **`@sentry/react-native not installed`**: the scaffold is still in
  no-op mode. Re-run step 3.
- **Stack traces look minified**: source maps did not upload. Re-run the
  wizard or check the Sentry release artifacts page.
