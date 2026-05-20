# App Review Notes — Lafla

> Internal notes for Apple's App Reviewer ("App Review Information" field in App Store Connect). **Not shown to end users.** Concise to save review ping-pong.

---

## Demo Account

Lafla gates content behind authentication. Demo credentials are provided through **App Store Connect → App Review Information → Demo Account fields** (rotated each submission). They are NOT committed to this repository.

If credentials in App Store Connect are stale or missing, contact `hello@lafla.app` and we will issue a fresh tester within one business day.

The demo account is pre-seeded with:
- Onboarding completed (Turkish UI, 4-step flow: welcome → interests → name → cefr)
- Sample completed scenarios across the 6 modes (Flört, İş, Bar, Havaalanı, Günlük, Sipariş)
- A small streak history so the home feed looks lived-in

---

## Test Sequence (5-minute path)

1. **Launch** → Splash → Auth screen
2. **Sign in** with the demo credentials from App Store Connect
3. **Land on home** — **TikTok-style vertical swipe feed**, one full-screen scene card per page. Top: time-aware greeting ("Günaydın, [name]") + streak chip. Bottom: 2-tab nav (Anasayfa / Profil). Swipe up/down to move between scene cards.
4. **Tap "Konuş ▶" on a card** — opens the scenario flow (4 phases: SETUP → DRILL → SCENE → VERDICT). Exercise types in mix: vocab_tile, translate, fill_blank, word_order, spot_mistake, pronounce_phrase, speech_shadowing, roleplay_chat, recap_quiz, listen_and_transcribe.
5. **After verdict** — return to home; the completed scene drifts to the back of the feed.
6. **Profile** tab → 6 mode progress rails (Flört / İş / Bar / Havaalanı / Günlük / Sipariş) + XP / streak / settings entry.
7. **Settings** → notification toggle, language preference, account deletion entry.
8. **Paywall** — accessible from upgrade CTAs; verify Restore Purchases button works.

---

## In-App Purchase

Subscription product:

- **`lafla.premium.monthly`** — Speak+ monthly subscription (priced per App Store Connect product configuration; displayed local price overrides the marketing copy via RevenueCat `getOffering`).

The "Exam Pass" one-time tier referenced in earlier internal docs is **NOT shipping in this build** and was **removed entirely 2026-05-20** with the 6-mode product cut — the paywall surface offers only the monthly subscription.

**Restore Purchases** button is present on the paywall and in Settings.

**Sandbox testing:** Apple reviewer should use their own Sandbox Tester account.

---

## Microphone & Speech Recognition Permissions

Two iOS permissions are requested **lazily** — only when the user first taps a voice exercise, not on first launch:

- `NSMicrophoneUsageDescription` — to evaluate pronunciation
- `NSSpeechRecognitionUsageDescription` — to recognize English phrases the user says

If either is denied, voice exercises offer a graceful "go to Settings" prompt. The rest of the app remains usable.

---

## Account Deletion (Guideline 5.1.1(v))

**Settings → Hesabımı Sil** → confirmation requires typing "SİL" → calls Supabase edge function to delete the user record (cascade-deletes related rows) → revokes RevenueCat entitlement → signs out.

Deletion is immediate (no soft-delete / 30-day grace).

---

## Privacy

- **Tracking (ATT):** The app integrates PostHog for usage analytics. The ATT permission prompt is presented at the end of onboarding. PostHog is **not initialized** until ATT is resolved AND granted. If the user declines, PostHog is never started — all analytics paths become no-ops.
- **Sentry crash reporting** is on. It receives anonymous device/build metadata and crash stacks. No user email or profile fields are attached to events.
- **Data collected:** Email + password (Supabase auth), purchase status (RevenueCat), anonymized usage events (PostHog, post-ATT consent only). Declared on the Privacy Nutrition Label.

---

## Submission Build Metadata

| Field | Value |
|---|---|
| Bundle ID | `com.lafla.app` |
| Min iOS | `15.1` |
| Encryption Compliance | `ITSAppUsesNonExemptEncryption = false` |
| Localizations | Turkish (primary), English (secondary) |
| In-App Purchases | `lafla.premium.monthly` |
| Restore Purchases | Yes, via RevenueCat |
| Account Deletion | Yes, in-app, immediate |
| Devices | iPhone (iPad layout work-in-progress) |

Version + build number are set by EAS Build at submission time; check the binary attached to this submission for the canonical values.

---

## Anticipated Concerns

| Likely concern | Our position |
|---|---|
| 2.1 — App incomplete (auth wall) | Demo account provided via App Store Connect |
| 3.1.1 — IAP not via Apple | All paid features gated through Apple IAP / RevenueCat; no alt payment links |
| 4.2 — Minimum functionality | 480+ structured scenarios + 9 exercise types + on-device speech evaluation = a structured language-learning product |
| 5.1.1 — Privacy | Privacy Nutrition Label matches actual data flows; account deletion is in-app and immediate |
| 5.1.2 — Data sharing | PostHog gated behind ATT grant; Sentry receives no PII |

---

## Contact

For questions during review: **`hello@lafla.app`** (US business-hours response, <4h).
