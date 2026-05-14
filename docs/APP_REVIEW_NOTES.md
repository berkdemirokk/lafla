# App Review Notes — Lafla v0.1.0

> Internal notes for the Apple App Reviewer ("App Review Information" field in App Store Connect). **Not shown to end users.** Keep this concise: reviewers spend ~5 minutes per app, and a clear test path can save weeks of review ping-pong.

---

## Demo Account

> Required because Lafla gates content behind authentication. Without a demo account, Apple's reviewer cannot test core flows and the app gets rejected under Guideline 2.1 (App Completeness).

```
Email:    hello+review@lafla.app
Password: Lafla2026!
```

The demo account is **pre-seeded** with:
- Onboarding completed (Turkish UI selected)
- Pro entitlement granted via Apple sandbox (NOT a real subscription — see "Premium Test" below)
- 14-day streak history populated (so review flow looks lived-in)
- Sample completed lessons across all 5 modes

**Account does not auto-rotate.** Password changes after each review cycle ship in the build's `What to Test` field.

---

## Test Sequence (5-minute path through the app)

A reviewer can verify the core experience in 5 minutes via this script:

1. **Launch** → Splash screen → Auth screen
2. **Sign in** with the demo credentials above
3. **Skip onboarding** (already completed) → Lands on home feed
4. **Tap any lesson tile** → 7-exercise lesson runs (vocab tile → translate → fill blank → word order → spot mistake → roleplay chat → recap quiz)
5. **Maya conversation** — tap the Maya bubble in the home tab → text + voice chat with the AI coach (try voice mode by tapping the mic icon)
6. **Settings** → Verify "Pro Member" badge → Subscription management → Account deletion flow
7. **Sign out** → Verify clean state

---

## Premium / IAP Test

Apple Sandbox is required to test IAP without real charges.

1. **Apple ID:** Apple's reviewer should use their own sandbox tester (not ours)
2. **Trigger paywall:** Settings → "Lafla Pro" tile, OR after the 3rd lesson on a free account
3. **Products to verify:**
   - `lafla_pro_monthly` — ₺149/month, 7-day free trial
   - `lafla_pro_yearly` — ₺999/year, 7-day free trial
4. **Post-purchase:** App immediately unlocks all features; restore-purchases works via Settings → "Restore Purchases"

**Restore Purchases:** Settings → "Satın Alımı Yükle" (TR) / "Restore Purchases" (EN). RevenueCat-backed; runs on app launch as well.

---

## AI Safety — Maya Conversations

Maya is an AI conversation coach. We anticipate this is the highest-risk surface from Apple's perspective (Guideline 1.1 "Safety / Objectionable Content", Guideline 5.1.1 "Data Collection").

**Safety layers:**

1. **System prompt** — Maya is instructed to refuse NSFW, illegal advice, medical advice, financial advice, and self-harm topics. She redirects to the topic of English practice.
2. **Post-filter** — Every Maya response is screened by a content classifier before display. Flagged responses get replaced with a safe fallback message: "Bunu konuşamam, başka bir konuya geçelim mi?" ("I can't discuss that, shall we change the topic?")
3. **Crisis modal** — If the user's message contains crisis indicators (self-harm, suicide ideation, abuse), Maya's response is suppressed and a full-screen modal appears directing the user to Turkish crisis hotlines:
   - **112** (Turkey emergency)
   - **AMATEM** (Turkish Ministry of Health addiction + mental health line, 444 0 632)
   - The modal is dismissible only via explicit "Bu uyarıyı okudum" ("I have read this warning") button.
4. **No user-to-user communication.** Maya is the only conversation partner. There are no chat rooms, no DMs, no comments. User-generated content stays on the user's device + our backend; it is not surfaced to other users.

We can show the system prompt, post-filter rules, and crisis-modal triggers to the reviewer on request — email `hello@lafla.app`.

---

## Microphone & Speech Recognition Permissions

Two iOS permissions are requested:

1. **NSMicrophoneUsageDescription** — `"Telaffuzunu değerlendirmek için mikrofona erişim gerekli."` (Microphone access is needed to evaluate your pronunciation.)
2. **NSSpeechRecognitionUsageDescription** — `"Söylediğin İngilizce cümleleri anlamak için konuşma tanıma kullanılır."` (Speech recognition is used to understand the English sentences you say.)

**Both are requested only when the user first taps a voice-input feature** — not on first launch. The app degrades gracefully if either is denied: voice features show "Mikrofonu açmak için Ayarlar'a git" CTA; text-only mode continues to work.

---

## Account Deletion (Guideline 5.1.1(v) compliance)

Users must be able to delete their account in-app. The flow:

1. **Settings → "Hesabımı Sil"** ("Delete My Account")
2. Confirmation screen explains: "All your data will be deleted permanently."
3. User must **type "SİL"** ("DELETE") to confirm.
4. On confirmation, the app calls a Supabase edge function (`delete-user-account`) that:
   - Deletes the row from `auth.users` (cascades to all `profiles`, `lessons`, `sessions`, `feedback`)
   - Revokes any active RevenueCat entitlement
   - Returns 200 OK; app signs out and returns to auth screen
5. **Deletion is immediate**, not "within 30 days" — no soft delete, no grace period for v0.1.0.

The flow is testable on the demo account; recreating the demo account after deletion is the responsibility of our review-cycle script.

---

## Subscription Management

Per Apple's guidelines:

- **Cancellation:** Users can cancel via iOS Settings → Apple ID → Subscriptions (Apple-native flow). The app surfaces this with a "Subscription'ı yönet" link.
- **Auto-renewal disclosure:** Shown on the paywall screen above the buy buttons; sample text: `"Aboneliğin otomatik olarak yenilenir. İstediğin zaman iCloud ayarlarından iptal edebilirsin."`
- **Free trial disclosure:** "7 gün ücretsiz, sonra ₺149/ay" displayed on the paywall before the user taps the buy button.
- **Restore Purchases:** Available in Settings (see Premium Test above).

---

## Content Sourcing

The 500+ scenarios were authored by Lafla's content team (a mix of native English speakers + Turkish ESL teachers). They are NOT scraped from the web, NOT user-generated, and NOT machine-generated at runtime. Each scenario lives in a versioned content file in our repo (`apps/mobile/data/<mode>-<skill>-lesson.ts`).

Maya's runtime responses are generated by an LLM provider (OpenAI / Anthropic, routed through our backend). System prompts are documented and version-controlled.

---

## Submission Build Metadata

| Field | Value |
|---|---|
| Bundle ID | `com.lafla.app` |
| Version | `0.1.0` |
| Build Number | `1` |
| Min iOS | `15.1` |
| Encryption Compliance | `ITSAppUsesNonExemptEncryption = false` |
| Tracking | We do NOT use IDFA. ATT prompt is **not shown.** |
| Localizations | Turkish (primary), English (secondary) |
| In-App Purchases | `lafla_pro_monthly`, `lafla_pro_yearly` |
| Restore Purchases | Yes, via RevenueCat |
| Account Deletion | Yes, in-app, immediate |
| Universal | iPhone + iPad |

---

## Common Rejection Reasons & Our Defenses

| Likely Apple Concern | Lafla's Defense |
|---|---|
| 2.1 — App incomplete (auth wall) | Demo account provided above |
| 4.0 — Design (unclear UX) | Onboarding pre-completed in demo to skip to core flows |
| 5.1.1 — Privacy (data collection) | Privacy nutrition label matches actual behavior; deletion flow live |
| 5.1.1(v) — Account deletion | In-app, immediate, no email tickets required |
| 1.1 — Objectionable AI output | System prompts + post-filter + crisis modal (see AI Safety above) |
| 3.1.1 — IAP not via Apple | All paid features gated through Apple IAP; no alt payment links |
| 4.2 — Minimum functionality (just an LLM wrapper) | 500+ structured scenarios + SRS + 7 exercise types + pronunciation analysis = a structured language-learning product, not a chat wrapper |

---

## Contact

For real-time questions during review: **`hello@lafla.app`**. We have an alerting channel that pings within 1 hour for any incoming review-related emails during US business hours.
