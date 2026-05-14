# App Store Privacy Nutrition Label — Lafla v0.1.0

> Apple's App Store privacy questionnaire ("Data Type" matrix). Filled out exactly as Lafla will submit. Source of truth — App Store Connect form must match this doc; if anything drifts, **update this file first**, then mirror to App Store Connect.

> Apple's questionnaire has three axes for each data type:
> 1. **Collected** — does the app collect it at all?
> 2. **Linked to identity** — is the data tied to the user's identity (account, device ID that persists)?
> 3. **Used for tracking** — is the data used for tracking across apps/websites owned by other companies (ATT trigger)?
>
> For Lafla: **we do not track across apps/websites owned by other companies.** Every "Used for Tracking" answer below is "No." We never share data with third-party ad networks; PostHog and Sentry are first-party analytics + crash tools.

---

## Section 1: Contact Info

### Email Address

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (sign-in, password reset, account recovery)
  - Customer Support (responding to `hello@lafla.app` requests)

> Required for Sign in with Apple / email auth via Supabase. Stored in `auth.users` table.

### Name

- **Collected:** Yes — **optional** (user can leave blank during onboarding)
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (display name in profile screen, "Hi, [name]" greetings in Maya conversations)

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
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:**
  - App Functionality (pronunciation analysis, Maya voice chat transcription)
- **Note for reviewer:** Voice recordings are sent to our speech-to-text provider for the duration of the request. Recordings are **not stored long-term** — they are auto-deleted within 30 days of session, and the user can request immediate deletion via Settings → Delete Account.

### Customer Support

- **Collected:** Yes
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:** Customer Support

> Email tickets sent to `hello@lafla.app`. Stored on email server with standard retention.

### Photos or Videos

- **Collected:** No

### Gameplay Content

- **Collected:** No

### Other User Content

- **Collected:** Yes (text messages within Maya conversations)
- **Linked to user:** Yes
- **Used for tracking:** No
- **Purposes:** App Functionality (Maya needs your text to respond; SRS needs your answers to schedule reviews)

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
  - Analytics (PostHog funnels: onboarding completion, scenario completion, Maya session length)
  - Product Personalization (mastery model — what scenarios to surface next)

> Events: `lesson_started`, `lesson_completed`, `maya_session_started`, `pronunciation_recorded`, `paywall_viewed`, `subscription_started`, etc.

### Advertising Data

- **Collected:** No (we do not run ads in v0.1.0 — Pro-only tier; ad-supported free tier is a future decision)

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
  - Analytics (e.g. p95 Maya response latency in PostHog)

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
- User Content (audio, customer support, text messages)
- Identifiers (user ID)
- Purchases
- Usage Data (product interaction)
- Diagnostics (crash data, performance data)

**Data Not Linked to You:**
- Identifiers (device ID — anonymous install ID)

**Data Used to Track You:**
- None

---

## Update Cadence

> Apple requires the privacy nutrition label to match actual app behavior. If we add new data collection (e.g., adding location for travel scenarios, or third-party ad networks for a free tier), **this file must be updated before the feature ships**, then mirrored to App Store Connect. Stale labels can trigger rejection on subsequent submissions.

| Trigger | Action |
|---|---|
| New SDK that collects data (ads, attribution, etc.) | Re-evaluate every section; update before release |
| Removing a data collection | Lower priority but still update on next release |
| Apple adds new data type categories | Re-read Apple's docs, re-classify Lafla data |
| Annual review | Walk through every section every 12 months |

Last reviewed: 2026-05-14 (Lafla v0.1.0 submission prep).
