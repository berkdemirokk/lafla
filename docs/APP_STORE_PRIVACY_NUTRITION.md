# App Store Privacy Nutrition Label — Lafla v1.0.0

> **Last updated:** 2026-05-26 (v1.0.0 submission). Critical change vs. prior versions: **AdMob is shipping** (free-tier banner + interstitial + rewarded). "Advertising Data" section MUST be declared. ATT prompt gates personalized ads + PostHog tracking — without consent, both fall to non-personalized / non-tracked paths.
>
> Voice Journal (local audio recordings), Daily Diary (local text), NPC Relationships (local tracker), Pronunciation history (local FIFO buffer): all **local-only** (AsyncStorage + documentDirectory). These never leave the device — no nutrition label disclosure required for those flows.

> Apple's App Store privacy questionnaire ("Data Type" matrix). Filled out exactly as Lafla will submit. Source of truth — App Store Connect form must match this doc; if anything drifts, **update this file first**, then mirror to App Store Connect.

> Apple's questionnaire has three axes for each data type:
> 1. **Collected** — does the app collect it at all?
> 2. **Linked to identity** — is the data tied to the user's identity (account, device ID that persists)?
> 3. **Used for tracking** — is the data used for tracking across apps/websites owned by other companies (ATT trigger)?
>
> For Lafla: **tracking is conditional on ATT.** If the user grants ATT, PostHog tracks usage events AND AdMob may serve personalized ads (potentially across apps via IDFA). If the user denies ATT, PostHog is never initialized and AdMob falls to `requestNonPersonalizedAdsOnly`. Because the app *can* track under user consent, the App Store "Does this app use data for tracking?" question must be answered **Yes**.

---

## Section 1: Contact Info

### Email Address

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (sign-in, password reset, account recovery, responding to `berkkdemirok@gmail.com` support requests)

> Required for Sign in with Apple / email auth via Supabase. Stored in `auth.users` table. NOTE: 2026 itibarıyla Apple App Privacy formunda "Customer Support" ayrı bir Purpose seçeneği değil — App Functionality içinde sayılıyor.

### Name

- **Collected:** Yes — **optional** (user can leave blank during onboarding)
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (display name in profile screen, scenario NPC greetings, daily plan greeting line)

> Optional field — submission must reflect this. Stored in `profiles.display_name`.

### Phone Number

- **Collected:** No

### Physical Address

- **Collected:** No

### Other User Contact Info

- **Collected:** No

---

## Section 2: Health & Fitness

- **Collected:** No (none of: health data, fitness data)

---

## Section 3: Financial Info

- **Collected:** No (payment processing handled entirely by Apple's IAP — Apple, not Lafla, sees the card data)
- **Note for reviewer:** All IAP via Apple. We never see CC numbers, bank info, salaries, or credit info.

---

## Section 4: Location

- **Collected:** No (none of: precise location, coarse location)
- **Note:** We do NOT request `NSLocationWhenInUseUsageDescription`. App is location-blind.

---

## Section 5: Sensitive Info

- **Collected:** No

---

## Section 6: Contacts

- **Collected:** No

---

## Section 7: User Content

### Audio Data

- **Collected:** Yes
- **Linked to user:** Yes (only the pronunciation-eval audio flows; Voice Journal audio is local-only and uncollected)
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (pronunciation analysis via on-device + system STT)
- **Note for reviewer:** There are TWO audio paths:
  1. **Pronunciation evaluation** (PronouncePhrase + Roleplay STT): uses Apple's on-device Speech Recognition framework (`expo-speech-recognition`). Audio buffers are processed locally by iOS and either consumed in-process or routed through Apple's STT. Lafla does NOT operate its own STT server — we never store or transmit pronunciation audio off-device.
  2. **Voice Journal** (`/voice-journal` route): user-recorded reflective audio, saved to `FileSystem.documentDirectory/voice-journal/`. **Never leaves the device.** Deleted when the user deletes the entry or the account.

### Customer Support

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:** App Functionality (Apple'ın 2026 form'unda "Customer Support" data type'ı için tek geçerli purpose App Functionality; "Customer Support" ayrı bir Purpose seçeneği olarak listede yok.)

> Email tickets sent to `berkkdemirok@gmail.com`. Stored on email server with standard retention.

### Photos or Videos

- **Collected:** No

### Gameplay Content

- **Collected:** No

### Other User Content

- **Collected:** Yes (text answers in scenarios — translate / fill-blank / roleplay turns / IELTS responses)
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:** App Functionality. Guided-scenario scoring is fully on-device (`lib/engine.ts` + `lib/mistake-patterns.ts`); aggregated mastery state syncs to Supabase. Free Chat, Emergency English, and custom-scenario generation are also processed entirely on-device. Text entered in those three tools is not transmitted to Lafla servers or an AI provider.

---

## Section 8: Browsing History

- **Collected:** No (we do not collect browsing history outside the app)

---

## Section 9: Search History

- **Collected:** No (search within the app is local-only; not transmitted)

---

## Section 10: Identifiers

### User ID

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (Supabase `user_id` UUID — primary key on every authenticated request)
  - Analytics (PostHog `distinct_id` for product analytics)

### Device ID

- **Collected:** Yes
- **Linked to user:** **No** (anonymous install ID, rotates on reinstall)
- **Used for tracking:** No
- **Purposes:**
  - Analytics (PostHog anonymous device ID for sessions before sign-in)
  - App Functionality (Sentry install ID for crash correlation)

> The anonymous install ID is generated client-side (`lib/app-meta.ts` → `getInstallId()`), 32 hex chars, stored in AsyncStorage under `lafla.installId`. It is NOT IDFA, NOT IDFV, NOT linked to Apple ID. Rotates on reinstall.

---

## Section 11: Purchases

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (RevenueCat entitlement check — "is this user Pro?")
  - Analytics (paid conversion funnels in PostHog)

> Apple receipt data is sent to RevenueCat for entitlement validation. No card data, no billing address — just the receipt token.

---

## Section 12: Usage Data

### Product Interaction

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (SRS scheduling needs to know which exercises you've done; streak counter needs to know which days you opened the app)
  - Analytics (PostHog funnels: onboarding completion, scenario completion, paywall conversion)
  - Product Personalization (mastery model — what scenarios to surface next)

> Events: `lesson_started`, `lesson_completed`, `pronunciation_recorded`, `paywall_viewed`, `purchase_initiated`, `purchase_success`, etc.

### Advertising Data

- **Collected:** Yes (AdMob — free-tier monetization)
- **Linked to user:** No (we never link AdMob's device-side ad ID to our `users.id`)
- **Used for tracking:** **Conditional — Yes if ATT granted, No if denied**
- **Purposes:**
  - Third-Party Advertising (AdMob serves the ad)
  - App Functionality (free-tier scaffold; Lafla Pro users see zero ads — `isPremium()` short-circuits the ad load)
- **Note for reviewer:**
  - AdMob is initialized AFTER the ATT prompt resolves (`lib/ads.ts` → `initAds()` is sequenced after `requestAttOnce()`).
  - When ATT is denied, the SDK is started with `requestNonPersonalizedAdsOnly: true` (no IDFA-based personalization, no cross-app tracking).
  - When ATT is granted, AdMob may use IDFA for personalized ads — this is the only path through which Lafla "tracks" by Apple's definition. Hence the App Store question "Does this app use data for tracking?" is answered **Yes**.
  - `maxAdContentRating: T` (Teen) — content rating clamp.
  - `tagForChildDirectedTreatment: false` and `tagForUnderAgeOfConsent: false` — app age rating is 12+/17+ with Flört + Bar modes; children-directed treatment would be a 1.3 / 2.3.7 metadata contradiction.
  - SKAdNetwork: 10 identifier whitelist in app.json `react-native-google-mobile-ads.skAdNetworkItems`.

### Other Usage Data

- **Collected:** No

---

## Section 13: Diagnostics

### Crash Data

- **Collected:** Yes
- **Linked to user:** Yes (via Sentry user.id = anonymous install ID — see Identifiers section)
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (debugging, crash triage)

> Sentry. Stack traces only; no personal data in error payloads (we scrub `email`, `phone`, `name` fields from breadcrumbs and tag values).

### Performance Data

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (performance regression detection)
  - Analytics (e.g. p95 pattern-matcher / TTS latency in PostHog)

### Other Diagnostic Data

- **Collected:** No

---

## Section 14: Surveys

- **Collected:** No (no in-app surveys in v0.1.0; future feedback prompts will be filed under "Other User Content" if reintroduced)

---

## Section 15: Environmental Scanning

- **Collected:** No (no ARKit, no camera depth, no LiDAR)

---

## Section 16: Body / Hands

- **Collected:** No

---

## Section 17: Other Data

- **Collected:** No

---

## Apple's Final Summary (preview of what shows on the App Store product page)

**Data Linked to You:**
- Contact Info (email, name)
- User Content (audio for pronunciation eval, customer support, text answers in scenarios)
- Identifiers (user ID)
- Purchases
- Usage Data (product interaction)
- Diagnostics (crash data, performance data)

**Data Not Linked to You:**
- Identifiers (device ID — anonymous install ID)
- Advertising Data (AdMob device-side ad ID, never joined to our `users.id`)

**Data Used to Track You (only when ATT is granted):**
- Identifiers (IDFA via AdMob personalized ads)
- Usage Data (PostHog product interaction)
- Advertising Data (AdMob)

> If a user denies ATT, none of the above tracking categories activate. PostHog never initializes, AdMob runs as non-personalized, and the tracking-domains list in app.json (`eu.i.posthog.com`) becomes a no-op.

---

## Update Cadence

> Apple requires the privacy nutrition label to match actual app behavior. If we add new data collection (e.g., adding location for travel scenarios, or third-party ad networks for a free tier), **this file must be updated before the feature ships**, then mirrored to App Store Connect. Stale labels can trigger rejection on subsequent submissions.

| Trigger | Action |
|---|---|
| New SDK that collects data (ads, attribution, etc.) | Re-evaluate every section; update before release |
| Removing a data collection | Lower priority but still update on next release |
| Apple adds new data type categories | Re-read Apple's docs, re-classify Lafla data |
| Annual review | Walk through every section every 12 months |

Last reviewed: 2026-07-11 (Lafla v1.0.4 — guided scenarios, Free Chat, and Real Life generation verified as on-device; live privacy policy update required before submission if its wording differs).
