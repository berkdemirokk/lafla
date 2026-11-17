# Incident Runbook — Lafla

Use this as the first-response checklist for the highest-probability release
incidents. Prefer a small verified mitigation over several speculative changes.

## 1. Supabase outage

Signals: clustered auth failures, PostgREST network errors, or users unable to
sign in, restore cross-device state, or delete an account.

1. Check the Supabase status page and the Lafla project health.
2. Confirm bundled scenarios, Free Chat, Emergency English, custom scenarios,
   SRS, and local progress still work in airplane mode.
3. Show a dismissible status message: practice remains available and local
   progress stays on the device.
4. Do not claim that account deletion completed if its edge function failed.
5. After recovery, verify auth refresh, subscription sync, and progress upsert.

Free Chat and Real Life tools do not depend on Supabase or an AI provider.

## 2. Local conversation/content regression

Signals: repetitive replies, an empty scenario, unsafe local output, invalid
patterns, a content QA failure, or a crash after an app update.

1. Reproduce with the prompt ID, input category, locale, and app version. Never
   copy raw private chat text into analytics or an incident channel.
2. Run:
   - `pnpm --filter @lafla/mobile run qa:content`
   - `pnpm --filter @lafla/mobile run qa:linguist:check`
   - `pnpm --filter @lafla/mobile run typecheck`
   - `pnpm --filter @lafla/mobile run test -- --runInBand`
3. Add the smallest deterministic regression case to the local-engine, safety,
   or roleplay test bank.
4. Ship a binary update when runtime code changed. Content and rule banks are
   bundled; there is no server-side model/router switch.
5. If an older build calls the retired `llm-chat` function, the compatibility
   tombstone returns HTTP 410 and the old build uses its static fallback.

## 3. App Store rejection

Read the exact guideline and reproduce the reviewer's path before editing.

| Guideline | First check |
|---|---|
| 2.1 App Completeness | Demo account, sign-in, and every review-note route |
| 5.1.1(v) Account Deletion | Server deletion plus AsyncStorage, SecureStore, voice-file, and RevenueCat teardown |
| 1.1 Objectionable Content | Local input/output safety filters and crisis modal |
| 4.2 Minimum Functionality | 971 authored scenarios, local conversation engine, exercise variety |
| 3.1.1 Payments | RevenueCat offering, restore, localized price copy, and no external payment language |

Keep the response factual. If code changed, upload a new build with a short
"What to Test" path. If only reviewer instructions were unclear, update the
review notes and reply without broad product changes.

## Communication discipline

- State impact, affected surface, mitigation, and next update time.
- Never expose user text, email, tokens, referral codes, or recordings.
- Record a postmortem within 48 hours: trigger, detection gap, fix, regression
  test, and owner.
