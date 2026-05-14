# App Metadata Helpers — Lafla Mobile

Small set of runtime helpers for reading the app's version, build number,
bundle id, anonymous install id, and basic device info. Ships at
`apps/mobile/lib/app-meta.ts`.

The single source of truth for version / build numbers is `app.json`.
These helpers read it through `expo-constants` so you never hard-code
strings at call sites.

## API at a glance

```ts
import {
  getAppVersion,        // () => "0.1.0"
  getBuildNumber,       // () => "1"
  getBundleId,          // () => "com.lafla.app"
  getInstallId,         // () => Promise<string>   stable, anonymous, persisted
  getDeviceInfo,        // () => { os, osVersion?, locale }
  getReportableContext, // () => Promise<{ everything above + currentDate }>
} from "@/lib/app-meta";
```

All synchronous helpers are safe to call from render code. `getInstallId`
performs one AsyncStorage read on first call and caches the result in
memory for the rest of the session, so subsequent calls are effectively
free.

## Where to use each helper

### About screen footer

Show the version + build number at the bottom of the About / Settings
screen so testers can report which build they hit a bug on.

```tsx
import { Text } from "react-native";
import { getAppVersion, getBuildNumber } from "@/lib/app-meta";

export function AboutFooter() {
  return (
    <Text style={{ opacity: 0.6 }}>
      Lafla {getAppVersion()} ({getBuildNumber()})
    </Text>
  );
}
```

Both calls are synchronous and pure — fine to render directly without
state.

### Sentry context

Tag every event with the install id and bundled version. Do this once,
right after `initSentry()` in `app/_layout.tsx`:

```ts
import * as Sentry from "@sentry/react-native";
import { initSentry } from "@/lib/sentry";
import { getReportableContext } from "@/lib/app-meta";

initSentry();
getReportableContext().then((ctx) => {
  Sentry.setContext("app", ctx);
  Sentry.setUser({ id: ctx.installId });
  Sentry.setTag("bundleId", ctx.bundleId);
  Sentry.setTag("locale", ctx.deviceInfo.locale);
});
```

The install id is anonymous — it is not the Supabase user id and rotates
on reinstall. It exists purely to correlate multiple crash reports from
the same device.

### Support email body template

When the user taps "Email support" from Settings, prefill the message
with metadata so they don't have to figure out their build number:

```ts
import * as Linking from "expo-linking";
import { getReportableContext } from "@/lib/app-meta";

async function openSupportEmail() {
  const ctx = await getReportableContext();
  const body = [
    "",
    "",
    "---",
    `Lafla ${ctx.version} (build ${ctx.buildNumber})`,
    `Bundle: ${ctx.bundleId}`,
    `${ctx.deviceInfo.os} ${ctx.deviceInfo.osVersion ?? ""} · ${ctx.deviceInfo.locale}`,
    `Install: ${ctx.installId}`,
    `Time: ${ctx.currentDate}`,
  ].join("\n");
  const url =
    "mailto:support@lafla.app?subject=" +
    encodeURIComponent("Lafla feedback") +
    "&body=" +
    encodeURIComponent(body);
  await Linking.openURL(url);
}
```

### Feedback submission

`lib/feedback.ts` (or whichever module posts user reports to Supabase)
should attach the same snapshot so the team can triage without round
trips:

```ts
import { getReportableContext } from "@/lib/app-meta";

export async function submitFeedback(message: string, rating: number) {
  const ctx = await getReportableContext();
  await supabase.from("feedback").insert({
    message,
    rating,
    app_version: ctx.version,
    build_number: ctx.buildNumber,
    install_id: ctx.installId,
    os: ctx.deviceInfo.os,
    os_version: ctx.deviceInfo.osVersion,
    locale: ctx.deviceInfo.locale,
    submitted_at: ctx.currentDate,
  });
}
```

## Implementation notes

- **No new dependencies.** Uses only `expo-constants`,
  `@react-native-async-storage/async-storage`, and `react-native`, all
  already in `apps/mobile/package.json`.
- **`expo-localization` is optional.** If it ever gets installed, the
  module picks it up via dynamic `require`. Otherwise the locale comes
  from `Intl.DateTimeFormat().resolvedOptions().locale`, with a final
  fallback to `"tr-TR"` (Lafla's primary market).
- **Install id is not a UUID v4.** It's 32 hex chars from
  `crypto.getRandomValues` (Hermes built-in) with `Math.random` as a
  last-resort fallback. Adequate for anonymous correlation; do not
  treat it as a security token.
- **AsyncStorage key:** `lafla.installId`. Follows the existing
  `lafla.<feature>` namespace used by `lib/local-progress.ts`.
- **Android support is wired up.** Even though the current
  `app.json` only lists `"ios"` under `platforms`, the helpers already
  read `android.package` and `android.versionCode` correctly so no
  changes are needed when the Android build is enabled later.

## Testing checklist

Manual smoke test once integrated:

- [ ] `getAppVersion()` returns the string from `app.json` (currently
      `0.1.0`).
- [ ] `getBuildNumber()` returns `"1"` on iOS.
- [ ] `getBundleId()` returns `com.lafla.app`.
- [ ] First call to `getInstallId()` writes a value to AsyncStorage
      under `lafla.installId`; the second call returns the same string.
- [ ] Uninstall + reinstall produces a different install id (expected).
- [ ] `getDeviceInfo().locale` returns a BCP-47 tag (e.g. `tr-TR` or
      `en-US`) on a real device.
- [ ] `getReportableContext()` resolves to an object with all six fields
      populated.
