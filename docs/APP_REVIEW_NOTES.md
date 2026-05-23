# App Review Notes — Lafla

> Internal notes for Apple's App Reviewer ("App Review Information" field in App Store Connect). **Not shown to end users.** Concise to save review ping-pong.

---

## Demo Account

Lafla gates content behind authentication. Demo credentials are provided through **App Store Connect → App Review Information → Demo Account fields** (rotated each submission). They are NOT committed to this repository.

If credentials in App Store Connect are stale or missing, contact `berkkdemirok@gmail.com` and we will issue a fresh tester within one business day.

The demo account is pre-seeded with:
- Onboarding completed (Turkish UI, 4-step flow: welcome → interests → name → cefr)
- Sample completed scenarios across the **7 modes**: Flört (dating), İş (work), Bar, Havaalanı (airport), Günlük (daily), Sipariş (ordering), IELTS Speaking
- A small streak history so the home feed looks lived-in
- Two sample Voice Journal entries (so the reviewer can verify the mic + local storage flow without leaving the app)
- Lafla Pro entitlement granted on the review-only TestFlight build (production builds: use Sandbox Tester for IAP)

---

## Test Sequence (5-minute path)

1. **Launch** → Splash (animated 3D wordmark) → Auth screen
2. **Sign in** with the demo credentials from App Store Connect (Apple Sign-In is also supported)
3. **Land on home** — **TikTok-style vertical swipe feed**, one full-screen scene card per page. Top: time-aware greeting ("Günaydın, [name]") + streak chip. Bottom: 2-tab nav (Anasayfa / Profil). Swipe up/down to move between scene cards.
4. **Tap "Konuş ▶" on a card** — opens the scenario flow (4 phases: SETUP → DRILL → SCENE → VERDICT). Exercise types in mix: vocab_tile, translate, fill_blank, word_order, spot_mistake, pronounce_phrase, speech_shadowing, roleplay_chat, recap_quiz, listen_and_transcribe. v0.9.0: NPC turns occasionally start with natural openers ("Right,", "Hmm,", "Hi there,") — this is a deterministic mini-Markov, not an LLM.
5. **After verdict** — return to home; the completed scene drifts to the back of the feed.
6. **Profile** tab → **7 mode progress rails** (Flört / İş / Bar / Havaalanı / Günlük / Sipariş / IELTS) + XP / streak / settings entry. Also link out to side-rail practice modes: Phoneme Drill (`/phoneme-drill`) and Listen & Transcribe (`/listen-mode`).
7. **Voice Journal** (`/voice-journal`) — optional 30-second reflective recording. Audio stored locally in `documentDirectory/voice-journal/`, never transmitted off-device. Reviewer can verify by recording → save → see entry in timeline.
8. **Settings** → notification toggle, language preference, account deletion entry, Restore Purchases.
9. **Paywall** — accessible from upgrade CTAs; verify segmented toggle (Aylık / Yıllık), default Yıllık preselected, Restore Purchases button works.

---

## In-App Purchase

Two subscription products in the same Subscription Group:

- **`lafla.premium.monthly`** — Lafla Pro monthly subscription (₺99 base; displayed local price overrides marketing copy via RevenueCat `getOffering`).
- **`lafla.premium.yearly`** — Lafla Pro yearly subscription (₺999 base; ~16% saving vs. 12× monthly).

The paywall presents both via a segmented toggle (default: Yıllık / Yearly preselected — this is the recommended tier; the user can switch to Aylık / Monthly with a tap).

The "Exam Pass" one-time tier referenced in earlier internal docs is **NOT shipping in this build** — that was a deliberate pull during the 2026-05-20 product cut. Only the two subscription products above are configured.

**Restore Purchases** button is present on the paywall and in Settings.

**Sandbox testing:** Apple reviewer should use their own Sandbox Tester account. Both monthly and yearly tiers can be tested end-to-end.

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

- **Tracking (ATT):** The app integrates PostHog for usage analytics AND AdMob for free-tier ads. The ATT permission prompt is presented at the end of onboarding, BEFORE AdMob initialization. PostHog is **not initialized** until ATT is resolved AND granted. AdMob initializes after ATT resolves and applies `requestNonPersonalizedAdsOnly: true` if ATT was denied. If the user declines ATT, no tracking activates.
- **Sentry crash reporting** is on (DSN may be empty in the submission build — to be filled post-submission). It receives anonymous device/build metadata and crash stacks. No user email or profile fields are attached to events. Sentry breadcrumbs cover onboarding finalize, IAP purchase, voice journal recording, JSON parsing failures, scene-runtime crashes.
- **No runtime LLM.** All NPC dialogue, scene content, and feedback strings are pre-authored TypeScript in `apps/mobile/data/*.ts`. The "smart conversation" feel in v0.9.0 uses a deterministic mini-Markov for NPC bridge phrases (`lib/npc-bridge.ts`) seeded by `hash(scenarioId + turnIdx)` — no network call. Pattern matching and scoring (`lib/engine.ts`) is on-device. The user's text or voice never leaves the device for scoring.
- **Voice Journal** audio is stored in `documentDirectory/voice-journal/` only. Never transmitted. Deleted on account deletion.
- **Data collected:** Email + password (Supabase auth), purchase status (RevenueCat), anonymized usage events (PostHog, post-ATT consent only), ad serving data (AdMob, conditional on ATT). Full disclosure in `APP_STORE_PRIVACY_NUTRITION.md`.

---

## Submission Build Metadata

| Field | Value |
|---|---|
| Bundle ID | `com.lafla.app` |
| Min iOS | `15.1` |
| Encryption Compliance | `ITSAppUsesNonExemptEncryption = false` |
| Localizations | Turkish (primary), English (secondary) |
| In-App Purchases | `lafla.premium.monthly`, `lafla.premium.yearly` |
| Restore Purchases | Yes, via RevenueCat (paywall + Settings) |
| Account Deletion | Yes, in-app, immediate (Supabase edge function) |
| Devices | iPhone (iPad layout work-in-progress; `supportsTablet: false` in app.json) |
| Ad SDK | AdMob (react-native-google-mobile-ads) — banner + interstitial, free tier only |
| Privacy Manifest | Yes — `NSPrivacyAccessedAPITypes` declared for UserDefaults / FileTimestamp / SystemBootTime / DiskSpace; `NSPrivacyTrackingDomains` includes `eu.i.posthog.com` |
| Content Modes | 7 — Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS Speaking |
| Scene Count | 935 (CEFR-mapped A1–C1) |
| Side-rail Modes | Phoneme Drill, Listen & Transcribe, Voice Journal |

Version + build number are set by EAS Build at submission time; check the binary attached to this submission for the canonical values. Current shipping version: **v0.9.0**.

---

## Anticipated Concerns

| Likely concern | Our position |
|---|---|
| 1.3 / 2.3.7 — Age rating vs. content | Flört + Bar + IELTS modes justify 12+/17+ rating; AdMob configured with `maxAdContentRating: T` and `tagForChildDirectedTreatment: false` to align ad content with the app's age rating |
| 2.1 — App incomplete (auth wall) | Demo account provided via App Store Connect; Apple Sign-In is also supported as a non-credential path |
| 3.1.1 — IAP not via Apple | All paid features gated through Apple IAP / RevenueCat; no alt payment links; subscription terms + Restore Purchases visible on the paywall |
| 4.2 — Minimum functionality | 935 structured scenarios across 7 modes + 10 exercise types + on-device pattern matching + dedicated side-rail modes (Phoneme Drill, Listen & Transcribe, Voice Journal) = a structured language-learning product |
| 4.5.4 — Push spam | Push scaffold in `lib/notifications.ts`; daily reminder is opt-in via Settings; no push without explicit user toggle |
| 5.1.1(v) — Account deletion | In-app deletion via Settings → Hesabımı Sil → typed confirmation → immediate Supabase user delete (no soft-delete grace) |
| 5.1.1 — Privacy | Privacy Nutrition Label declares AdMob, PostHog, Sentry honestly; matches actual data flows |
| 5.1.2 — Data sharing | PostHog gated behind ATT grant; Sentry receives no PII; AdMob non-personalized when ATT denied |
| 5.6 — Developer code of conduct | All NPC dialogue is pre-authored; no runtime LLM; "Maya" AI coach was removed in the 2026-05-20 product cut and is not referenced anywhere in the shipping build |

---

## Contact

For questions during review: **`berkkdemirok@gmail.com`** (US business-hours response, <4h).
