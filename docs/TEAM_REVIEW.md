# Lafla product and engineering review

Review branch: `codex/lafla-company-review`  
Repository: `berkdemirokk/lafla`

## Team and work stages

| Role | Responsibility | Approval boundary |
|---|---|---|
| Product and architecture lead | Scope, user journey, data flows, API and release architecture | Checks product behavior and migration safety |
| UI/UX lead | Onboarding, practice, paywall, navigation, accessibility and copy | Approves tested UI behavior and truthful plan copy |
| QA/content lead | Regression coverage, scenario and lesson integrity, release checks | Independently verifies changes against acceptance criteria |
| Implementer | Owns an explicitly assigned set of files | Reports changes and command output; cannot self-approve |

For every change, the implementer reports the concrete behavior and validation. A second role reviews the diff and evidence. A change advances only after both roles approve its owned scope. A rejection must cite a reproducible defect or unmet criterion; the implementer revises and requests review again. Approval never covers untested device, backend, or content scope.

## Review stages

1. **Baseline and product map:** document routes, onboarding, practice, results, payment, local state, sync, and release flow. Record current tests and typecheck results.
2. **Risk fixes:** close data exposure, account-boundary, purchase-copy, and crash risks. Require an owner plus an independent reviewer for each patch.
3. **Coverage:** add behavior tests for scoring, scenario progression, content registry integrity, and SQL permissions. Keep CI from shipping when mobile typecheck or regression tests fail.
4. **UI validation:** inspect key routes at device sizes and accessibility settings. Do not approve visual quality from static source alone; capture simulator evidence and complete the primary user flow.
5. **Release gate:** rerun all checks, review the final diff, record unresolved issues, then get owner approval before publishing or merging.

## Work completed in this pass

- Corrected the repository TypeScript entry point to check the mobile Expo project rather than Deno and Cloudflare worker files using Node's TypeScript environment.
- Added mobile typecheck and Jest steps before the TestFlight build.
- Fixed strict typing failures in the three animated transform styles, rewarded-ad result narrowing, and IELTS mistake count reducer.
- Added a forward Supabase migration that removes the broad `profiles` read policy, revokes direct access to the owner-backed leaderboard view, and limits RPC execution to authenticated users with a 1–100 row bound.
- Added a SQL regression script for profile row isolation, leaderboard view grants, anonymous RPC denial, and the RPC row bound.
- Restricted client profile updates to onboarding fields at both the TypeScript API and Postgres column-grant/trigger layers.
- Snapshotted Lafla AsyncStorage keys by account at auth transitions, gated session exposure until the local switch completes, and separated voice-journal directories by account. Anonymous progress is adopted on a first sign-in; account data is restored on a later sign-in.
- Added Jest coverage for cross-account local-data isolation and restoration.
- Preserved authored lesson order when building the scenario setup phase, and added checks for unique lesson/scenario IDs and valid registered exercise types.
- Corrected paywall renewal language to match the selected monthly/yearly plan, made trial claims depend only on the selected package, and use the App Store currency when formatting the annual monthly equivalent.
- Removed the purchase timeout that could report failure while the store transaction was still pending. A second reviewer approved this limited code change; sandbox verification remains open.
- Routed native Apple sign-in through the account switch and avoided switching local data when email signup has no session.

## Validation and open gates

- `pnpm typecheck`: passed with no TypeScript errors.
- `pnpm --filter @lafla/mobile exec jest --runInBand`: passed, 6 suites and 27 tests.
- `git diff --check`: passed.
- The SQL regression script has not been run against a disposable Supabase database; the migration remains unapplied.
- No iOS simulator or physical-device visual walkthrough was completed. The UI scope therefore has no visual approval.
- Independent second-agent approval is still pending: the review agents exhausted their usage limits before completing their assigned cross-review. No PR, merge, or release was performed.

## Findings to carry forward

- Account scoping is implemented at authentication transitions. Verify the flow with Apple sign-in and account switching on a device, including upgrades where an existing signed-in installation has no local-owner marker.
- Account switching now uses a recoverable journal, but concurrent writes outside the switch mutex can still cross account boundaries; failed sign-out and interrupted switches to a different target need coverage and repair.
- Referral operations now use validated RPCs; run both migrations and SQL regression scripts on disposable Supabase before deployment. Android referral entry needs a supported input UI.
- Skill mastery sync sends the accumulated local value and reports response errors, but stale devices and out-of-order writes can overwrite newer cloud progress. Implement idempotent, atomic server synchronization and retry.
- Verify Today error states and rewarded ads on a device. Apple purchase sandbox and pending transaction recovery remain open.
- Expand tests beyond SRS and CEFR level behavior to cover scoring and scenario transitions.
- Verify the migration and paywall changes with local Supabase and iOS simulator runs before release.
