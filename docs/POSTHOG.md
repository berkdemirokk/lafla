# Lafla — PostHog Analytics Setup

PostHog is the production analytics backend for Lafla. We use the **EU instance** (`eu.i.posthog.com`) so user data stays inside the EU GDPR perimeter.

This doc replaces / supplements `docs/ANALYTICS.md` — the event catalog there still applies, this doc explains the wiring.

## 1. One-time setup

1. Create a free PostHog account at <https://eu.posthog.com>.
2. Create a new project ("Lafla Production").
3. Region: **EU Cloud** (mandatory — do not pick US Cloud).
4. Copy the **Project API Key** (starts with `phc_...`).
5. Open `apps/mobile/app.json` and replace `YOUR_POSTHOG_KEY` under `expo.extra.posthogKey` with the real key.
6. Leave `posthogHost` as `https://eu.i.posthog.com`.

### CI / local override

For local dev or CI you can also set the `posthogKey` via an EAS Build secret and inject it through `app.config.ts`. Today the key is read from `Constants.expoConfig?.extra?.posthogKey`, so any mechanism that populates that path works.

## 2. How the wiring works

`apps/mobile/lib/analytics.ts` exposes a small, stable surface:

| Function | When to call |
| --- | --- |
| `initAnalytics()` | once at app start (already wired in `app/_layout.tsx`) |
| `trackEvent(name, props?)` | every event in the table below |
| `setUserId(id \| null)` | on sign-in (id), on sign-out (null) — already wired via `useSession` |
| `trackScreen(name)` | optional, on route changes |
| `getDistinctId()` | for cross-system correlation (e.g. Sentry user id) |
| `setAnalyticsEnabled(bool)` | opt-out toggle in settings |
| `isAnalyticsEnabled()` | read current opt-out state |

All calls are defensive: if PostHog isn't installed, the key is missing, or the user has opted out, every call is a silent no-op. The `try/catch` is inside the wrapper — call-sites don't need their own.

## 3. Current event catalog

| Event | Where it fires | Properties |
| --- | --- | --- |
| `app_opened` | `app/_layout.tsx` root effect | – |
| `onboarding_step_completed` | `app/onboarding.tsx` (each `goNext`) | `step` (string) |
| `scenario_started` | `app/scenario/[id].tsx` mount | `scenario_id`, `skill_id`, `mode` |
| `scenario_completed` | `app/scenario/[id].tsx` verdict | `scenario_id`, `skill_id`, `mode`, `score` |
| `paywall_viewed` | `app/paywall.tsx` mount | – |
| `purchase_initiated` | `app/paywall.tsx` CTA | `plan` (`monthly`\|`yearly`) |
| `purchase_success` | `app/paywall.tsx` success | `plan` |
| `purchase_failed` | `app/paywall.tsx` failure | `plan`, `reason` |
| `voice_session_started` | `app/freechat-voice.tsx` start | `auto_mode`, `premium` |
| `voice_session_ended` | `app/freechat-voice.tsx` finalise | `durationMin`, `turns` |
| `level_set` | `lib/cefr-level.ts` `setCefrLevel` | `level` (`A1`..`C2`) |
| `program_started` | `lib/programs.ts` `startProgram` | `programId`, `durationWeeks`, `hasGoalDate` |
| `mistake_detected` | `lib/mistake-tracker.ts` (first time per pattern) | `patternId`, `firstTime` |

Append-only — once an event ships, don't rename it. Add a new event instead.

## 4. PII / privacy rules

- **Never** send raw chat / TTS text, email, password, or free-form user input.
- All call-sites in the table above pass primitive shape only (IDs, scores, counts).
- The user is identified by their Supabase `auth.user.id` (a UUID). Anonymous users get a PostHog-generated `distinct_id` until they sign in.
- The "Analytics olmadan kullan" toggle in Settings flips `optOut` — once on, the SDK stops sending any data (even `app_opened`).

## 5. Verifying the wiring

In dev:

```
cd apps/mobile
pnpm start
# Open the app on the simulator
# Watch Metro logs: every track/identify/screen prints `[analytics:track]` / etc.
```

If the SDK is installed and the key is real, events should also show up in the PostHog dashboard within ~30 seconds.

## 6. Future work

- Add a navigation listener that fires `trackScreen` on every route change so the funnel UI works out of the box.
- Wire `signin` / `signup` / `signout` events from `lib/auth.ts`.
- Consider a session-replay opt-in for premium users (requires extra disclosure copy under KVKK).
