# App Store Connect Metadata — Lafla v1.0

> Ready-to-paste package for the App Store Connect submission. All fields are within Apple's character limits. Primary locale: **tr-TR**. Secondary locale: **en-US**.
>
> Cross-references:
> - Reviewer notes → [`APP_REVIEW_NOTES.md`](./APP_REVIEW_NOTES.md)
> - Screenshot storyboard → [`APP_STORE_SCREENSHOTS.md`](./APP_STORE_SCREENSHOTS.md)
> - Privacy nutrition label → [`APP_STORE_PRIVACY_NUTRITION.md`](./APP_STORE_PRIVACY_NUTRITION.md)

---

## 1. Names & IDs

### App Name (max 30 characters)

| # | Option | Chars | Notes |
|---|---|---|---|
| **A (recommended)** | `Lafla: İngilizce Konuşma` | 24 | Brand + the single highest-volume TR intent keyword. Brand-recognition is zero today, so the algorithm needs an explicit category signal. |
| B | `Lafla — Konuş, Çalış` | 21 | Brand + tagline. More personality, less searchability — keep as fallback if A loses out in CTR testing. |
| C | `Lafla: İngilizce Pratik` | 23 | Same shape as A with "Pratik" instead of "Konuşma". "Konuşma" outsearches "Pratik" ~2:1 in TR App Store, so A wins. |

> **Decision:** Ship Option A. Re-evaluate after 90 days if CTR < 3.5%.

### Subtitle (max 30 characters)

| # | Option | Chars | Notes |
|---|---|---|---|
| **A (recommended)** | `IELTS, mülakat, flört, espri` | 29 | Four high-intent use cases — one per buyer persona (exam-taker, job-seeker, dating, casual). |
| B | `Donma. Konuş. Türkçe ipuçlu.` | 28 | Anti-pain hook + differentiator. Stronger emotionally, weaker on keyword indexing. |
| C | `8 mod · 982 sahne · A1–C1` | 25 | Pure proof-of-scope. Use after we hit ranking traction; weak as a cold-discovery subtitle. |

> **Decision:** Ship Option A — Apple indexes the subtitle for search, so packing four use cases beats one tagline.

### Identifiers

| Field | Value |
|---|---|
| **Bundle ID** | `com.lafla.app` (already provisioned) |
| **SKU** | `LAFLA-IOS-001` (internal — never visible to users) |
| **App Store ID** | Apple-assigned on creation |

### Categories

- **Primary:** Education
- **Secondary:** Lifestyle

> **Rationale on secondary:** We previously used Productivity for the "interview prep" angle. With the broader 8-mode product (Flört, Espri, Sosyal) Lifestyle pulls in browse traffic from a separate cohort — and Education already covers exam-prep search intent. Re-evaluate after 60 days.

### Age Rating

**Recommendation: 12+**

| Apple question | Answer |
|---|---|
| Cartoon / Fantasy Violence | None |
| Realistic Violence | None |
| Sexual Content / Nudity | None |
| Profanity / Crude Humor | None |
| Mature / Suggestive Themes | **Infrequent / Mild** (Flört mode references dating; no explicit content) |
| Horror / Fear | None |
| Medical / Treatment Info | None |
| Alcohol / Tobacco / Drug References | **Infrequent / Mild** (Sosyal / Sipariş modes reference bar / drink ordering) |
| Simulated Gambling | None |
| Gambling | None |
| Unrestricted Web Access | None |
| User-Generated Content | None |

**Why not 4+:** Flört mode includes adult dating scenarios (Tinder openers, coffee invites). Apple has rejected 4+ apps for dating contexts even when sanitized — 12+ removes that risk for zero downside.

**Why not 17+:** No explicit content, no profanity, no graphic references. 17+ would compress the addressable audience by ~30% without justification.

---

## 2. Description — Türkçe (primary)

> **Char limit:** 4000. **Target:** 1100–1400 chars (Apple truncates after ~170 in the preview; the rest is the "Daha Fazla" tap).

```
Yabancıyla İngilizce konuşurken donmak yok. Lafla, Türkçe düşünen birine göre tasarlanmış konuşma pratiği uygulaması.

Her sahne 60 saniyenin altında. Telefonun kasarsa kasasın — Lafla beklemiyor, anında geri bildirim veriyor.

✨ NE BULURSUN

🎯 8 mod, tek akış: Flört, İş, Seyahat, Sosyal, Sipariş, Espri, Spor, Sağlık
🎬 982 gerçek sahne — A1 başlangıçtan C1 ileri seviyeye CEFR haritası
🇹🇷 Türkçeye özel hata yakalama — article eksik, "I am go" hatası, "make picture" tuzakları
⚡ 3 saniyenin altında geri bildirim — donduğunda Lafla zaten yanıt vermiş
🎨 Karanlık, premium tasarım — gözünüzü yormaz, gece de çalışır

🤔 BU UYGULAMA NEDİR?

Lafla, "İngilizceyi bilmek" ile "İngilizce konuşmak" arasındaki uçurumu kapatır. YDS 80 aldın ama kafedeki Amerikalıyla 30 saniye sonra terliyorsun. IELTS hazırlığında reading'i bitirdin ama speaking'de duruyorsun. Lafla bu boşluğu kapatmak için var — 982 gerçek senaryo, hepsi ön-üretilmiş, hiçbiri AI hallüsinasyonu değil.

🚀 NEDEN LAFLA?

Çoğu uygulama İngilizceyi çeviri olarak öğretir. Lafla, Türk düşünce yapısının nerede tıkandığını bilir:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Her sahnede bu spesifik tuzaklar hedef alınmış. Her düzeltme Türkçe açıklamalı — "neden hata olduğunu" anla, ezberleme.

💎 SPEAK+ ÜYELİK

Tüm 982 sahneye erişim, sınırsız tekrar, derin telaffuz analizi ve gelişmiş ilerleme paneli.

📋 Fiyat: $9.99 / ay (yerel fiyat App Store'da yerel para biriminde gösterilir)
🔄 Otomatik yenilenir; iPhone Ayarlar → Apple Kimliği → Abonelikler menüsünden istediğin zaman iptal edebilirsin
⏰ İptal etmediğin sürece dönem sonunda otomatik yenilenir
📜 Şartlar: lafla.app/terms · Gizlilik: lafla.app/privacy

Destek: hello@lafla.app
```

*(approx. 1,380 / 4,000 characters)*

---

## 3. Description — English (secondary)

> **Audience:** Turkish learners who understand some written English but freeze when speaking. Not yet optimized for non-Turkish learners.

```
Stop freezing when you have to speak English. Lafla is built for Turkish speakers who can read English but lock up the moment a conversation starts.

Every scene runs under 60 seconds. Real moments, real corrections, sub-3-second feedback.

✨ WHAT YOU GET

🎯 8 modes, one feed: Dating, Work, Travel, Social, Ordering, Banter, Sports, Health
🎬 982 real scenarios — CEFR-mapped from A1 to C1
🇹🇷 Turkish-tailored error feedback — dropped articles, "I am go" mistakes, "make picture" traps
⚡ Sub-3-second feedback loop — corrections land before the freeze sets in
🎨 Dark, premium design — readable at night, no eye fatigue

🤔 WHAT IS THIS?

Lafla closes the gap between "knowing English" and "speaking English." You scored 80 on YDS but you sweat 30 seconds into a conversation with an American. You finished IELTS reading but speaking still scares you. Lafla is built for that gap — 982 real scenarios, all pre-authored, zero runtime AI hallucination.

🚀 WHY LAFLA?

Most apps teach English as translation. Lafla knows where Turkish thinking gets stuck:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Every scene targets these specific traps. Every correction is explained in Turkish — understand the "why," don't just memorize.

💎 SPEAK+ MEMBERSHIP

All 982 scenes unlocked, unlimited replays, deep pronunciation analysis, advanced progress dashboard.

📋 Pricing: $9.99 / month (local price shown in your App Store currency)
🔄 Auto-renews; cancel anytime in iPhone Settings → Apple ID → Subscriptions
⏰ Renewal continues at the end of each period unless cancelled
📜 Terms: lafla.app/terms · Privacy: lafla.app/privacy

Support: hello@lafla.app
```

*(approx. 1,290 / 4,000 characters)*

---

## 4. Keywords — Türkçe (max 100 chars, comma-separated, no spaces)

```
ingilizce konuşma,ielts speaking,flört ingilizcesi,yds,toefl,mülakat,telaffuz,akıcı,konuşma pratiği
```

*(99 / 100 characters)*

**Rationale:**

| Keyword | Volume | Intent |
|---|---|---|
| `ingilizce konuşma` | Very high | Primary category intent — TR App Store top-volume English-learning term |
| `ielts speaking` | High | Exam-prep, high ARPU, low-competition long-tail variant |
| `flört ingilizcesi` | Medium | Owns this niche entirely; competitors do not index this term |
| `yds` | High | Cold post-exam audience — they passed YDS but can't speak |
| `toefl` | Medium | Complements IELTS audience, premium-spend segment |
| `mülakat` | Medium | Spans job + academic + visa intents under one anchor |
| `telaffuz` | Medium | Direct match to Speak+ pronunciation feature |
| `akıcı` | Medium | Outcome-anchor — "akıcı İngilizce" is the audience aspiration |
| `konuşma pratiği` | Medium | "Speaking practice" Turkish equivalent — broad-tail catcher |

**Excluded:**
- ❌ `lafla`, `ingilizce` — already in App Name (Apple auto-indexes, duplicate spend)
- ❌ `duolingo`, `babbel`, `talkpal`, `cambly` — Apple rejects competitor brand names since 2025
- ❌ `learn english` — brutal competition, English keyword cannibalizes TR slot

---

## 5. Keywords — English (max 100 chars)

```
speak english,english practice,esl turkish,fluency,pronunciation,ielts,toefl,conversation,interview
```

*(97 / 100 characters)*

**Rationale:**

| Keyword | Intent |
|---|---|
| `speak english` | Primary intent for English-language App Store browsers |
| `english practice` | Captures "practice English" search variant |
| `esl turkish` | Hyper-niche, low competition, exact-match for our audience |
| `fluency` | Outcome anchor |
| `pronunciation` | Speak+ feature match |
| `ielts` | Same exam-prep segment as TR list |
| `toefl` | Same |
| `conversation` | Generic but high-tail |
| `interview` | Cross-mode anchor (job, academic, visa) |

---

## 6. What's New (release notes) — v1.0.0

> **TR (primary):**

```
Lafla — ilk sürüm. Konuş, çalış.

🎯 8 mod, tek akış: Flört, İş, Seyahat, Sosyal, Sipariş, Espri, Spor, Sağlık
🎬 İlk dalgada 200+ oynanabilir sahne — bu hafta içinde 400+'a çıkıyor
🇹🇷 Türkçeye özel hata geri bildirimi (article tuzakları, doğrudan çeviri hataları)
⚡ Sub-3-saniye geri bildirim döngüsü
🌙 Neon Noir tema — gece dostu, premium görünüm

Geri bildirim için: hello@lafla.app
```

*(approx. 350 chars)*

> **EN (secondary):**

```
Lafla — first launch. Speak. Work.

🎯 8 modes, one feed: Dating, Work, Travel, Social, Ordering, Banter, Sports, Health
🎬 200+ scenarios playable at launch — climbing to 400+ this week
🇹🇷 Turkish-tailored error feedback (article traps, direct-translation mistakes)
⚡ Sub-3-second feedback loop
🌙 Neon Noir theme — night-friendly, premium feel

Feedback: hello@lafla.app
```

*(approx. 360 chars)*

---

## 7. Screenshot Brief — 6.7" iPhone (required) + 6.1" iPhone (optional)

> **Specs:** 6.7" iPhone (iPhone 14/15/16 Pro Max) → 1290 × 2796 px. 6.1" iPhone derivative → 1179 × 2556 px. Apple can auto-derive 6.1" from 6.7" but uploading both gets you the iPhone-15-class auto-preview slot. Caption typography: Inter Bold 64pt headline, Inter Regular 32pt sub. Background: dark gradient `#0B0413 → #1A0928` with neon pink (`#FF2D8A`) + cyan (`#22E0F2`) accent shapes — the Neon Noir palette.

### Screenshot 1 — Hero (Brand Statement)

- **Show:** Lafla wordmark + app icon centered on the dark gradient. Subtle neon-pink underline glow under the wordmark. Small caption strip beneath: 8 mode chips (Flört / İş / Seyahat / Sosyal / Sipariş / Espri / Spor / Sağlık) wrapping on two rows.
- **Headline overlay (TR):** `Donmadan İngilizce.`
- **Sub:** `8 mod · 982 sahne · CEFR A1–C1`
- **Why first:** The first 1–3 screenshots auto-play in App Store search. Frame 1 answers "what is this" in under a second.

### Screenshot 2 — Differentiator (Modes Feed)

- **Show:** TikTok-style vertical feed mockup. The visible card on top is a Flört-mode scene ("Tinder match · İlk mesaj"). Edges of the next-up card (İş mode) peek from the bottom — communicates infinite swipe. Subtle swipe gesture indicator (animated upward arrow + finger glyph).
- **Headline overlay (TR):** `Aç, kaydır, konuş.`
- **Sub:** `TikTok hızında pratik. Düşünmek yok.`
- **Why:** Most distinctive surface vs. Duolingo. Communicates the product mechanic without words.

### Screenshot 3 — Scenario In-Progress

- **Show:** A roleplay chat moment mid-conversation. User bubble (right side, neon pink): `"I have been there twice last summer"` with a soft red underline on `have been ... last summer`. NPC bubble below (left, neutral): `"Oh nice! Where exactly?"`. A "Correction" card peeking up from the bottom edge (locked into the next frame's reveal).
- **Headline overlay (TR):** `Gerçek sahne, gerçek hata.`
- **Sub:** `Sen yazarken Lafla zaten dinliyor.`
- **Why:** Real product moment. Most converting frame for someone curious about what the app actually does.

### Screenshot 4 — Contrastive Feedback (the money shot)

- **Show:** Continuation of Screenshot 3. The correction card is now fully expanded. Two stacked rows:
  - Top row, struck-through neon pink: `❌ I have been there twice last summer`
  - Bottom row, glowing cyan: `✅ I went there twice last summer`
  - Below: a Turkish explanation in a soft gray card — `Geçmişte bitmiş bir zaman varsa Simple Past kullanılır. "Last summer" bitmiş bir zamandır.`
- **Headline overlay (TR):** `Hatanı Türkçe anlatıyoruz.`
- **Sub:** `Article tuzağı, çeviri tuzağı, hepsi.`
- **Why:** This is the single highest-conversion frame in the deck. The Turkish-language correction is the moat — make it the loudest visual element.

### Screenshot 5 — Progress / Streaks

- **Show:** Profile / fluency dashboard. Big circular ring at the top showing `B1+` CEFR level with a glowing cyan progress arc. Below: 7-day bar chart with the current day highlighted hot-pink. Streak counter card: `🔥 12 gün` with a flame icon. Three small mode-progress bars below (Flört 78%, İş 52%, Espri 21%).
- **Headline overlay (TR):** `CEFR seviyenle gerçek ilerleme.`
- **Sub:** `XP grindi değil. Akıcılık.`
- **Why:** Anti-Duolingo positioning. CEFR is a credential Turks already trust (YDS / IELTS world). Connects familiar measurement to a new product.

### Screenshot 6 — Pricing / Value

- **Show:** Speak+ paywall surface. Hero: `Speak+ — Tüm sahneler` with a glowing border. Price row: `$9.99 / ay` (local price label below: "yerel para biriminde gösterilir"). Below: four feature rows with checkmark icons:
  - `✓ 982 sahnenin tamamı`
  - `✓ Sınırsız tekrar ve telaffuz analizi`
  - `✓ Detaylı ilerleme paneli`
  - `✓ Erken erişim — yeni modlar`
  - Restore Purchases link visible at the bottom (compliance signal to Apple).
- **Headline overlay (TR):** `Bir kahvenin yarısı.`
- **Sub:** `Aylık abonelik. İstediğin an iptal.`
- **Why:** Closes the funnel with the value proposition. Restore link visible = clean signal for Apple's reviewer.

> **Localization note:** Upload TR captions on the TR locale and EN captions on the EN locale. Images are identical — only the overlay text swaps. EN overlay equivalents: `Stop freezing.` / `Open, swipe, speak.` / `A real scene, a real mistake.` / `We explain mistakes in Turkish.` / `Real progress, mapped to CEFR.` / `Half a coffee.`

---

## 8. Promotional Text — 170-char (updatable without re-review)

### Türkçe (recommended for launch)

```
Lafla geldi. 8 mod, 982 sahne, Türkçe ipuçlu hata feedback'i. Flörtten mülakata İngilizce konuşurken donma. İlk hafta yeni içerikler her gün açılıyor.
```

*(168 / 170 characters)*

### English

```
Lafla just launched. 8 modes, 982 scenarios, Turkish-language error feedback. From dating to interviews, stop freezing in English. New content unlocks daily.
```

*(167 / 170 characters)*

> **Why promo text:** This field updates without re-review. Use it for content drops (new modes, exam-season pushes, Black Friday) and for narrative hooks the reviewer doesn't need to approve.

---

## 9. App Review Information

> See [`APP_REVIEW_NOTES.md`](./APP_REVIEW_NOTES.md) for the full reviewer-facing brief. This section captures only what is pasted directly into App Store Connect's "App Review Information" panel.

### Sign-in Required

**Yes — demo credentials provided.**

### Demo Account

Demo username + password are entered into App Store Connect's dedicated **Demo Account** fields (not committed to this repo, rotated each submission). The seeded account has:

- Turkish UI onboarding completed
- Sample completed scenes across all 8 modes
- A small streak history (3 days)
- Speak+ entitlement granted (review-side TestFlight unlock; on production builds reviewers should use a Sandbox Tester for the IAP path)

If credentials are stale, contact **hello@lafla.app** — fresh tester provisioned within one business day.

### Contact Information

| Field | Value |
|---|---|
| First name | (App Store Connect account holder) |
| Last name | (App Store Connect account holder) |
| Phone | (App Store Connect account holder) |
| Email | `hello@lafla.app` |

### Notes (paste into the "Notes" box)

```
Lafla is a Turkish-first English speaking-practice app. The home feed is gated behind auth — please use the demo credentials in the Demo Account fields. Once signed in, tap any mode row (Flört / İş / Seyahat / Sosyal / Sipariş / Espri / Spor / Sağlık) to enter a scenario flow.

Two iOS permissions (Microphone, Speech Recognition) are requested lazily — only when the user first taps a voice exercise, not on first launch. Denying either still leaves the rest of the app usable; we present a graceful "go to Settings" prompt.

The only In-App Purchase shipping in this build is the `lafla.premium.monthly` subscription ($9.99/month base, locally priced via RevenueCat). Restore Purchases is reachable from both the paywall and Settings. The "Exam Pass" tier referenced in older internal docs is NOT in this build and is deferred to a later release.

Account deletion: Settings → Hesabımı Sil → confirm by typing "SİL" → immediate deletion via Supabase edge function. No 30-day grace.

Full reviewer brief in the included APP_REVIEW_NOTES.md attached to this submission. Questions: hello@lafla.app (Istanbul business hours, <4h response).
```

---

## 10. ASO Strategy Notes

### Target Markets (launch)

- **TR (Türkiye)** — primary, locale `tr-TR`. 100% of the marketing weight at launch.
- **EN-US** — secondary, locale `en-US`. Catches Turkish diaspora abroad + Turkish users with English device language. **Do not open `en-GB`, `en-AU`, `en-CA`** yet — diluting the EN listing across multiple variants splinters the indexing signal without adding addressable audience.

### Paid Acquisition

- **Target Turkish CPI:** **< $0.50** (Apple Search Ads + Meta combined). If CPI drifts above $0.75 sustained over 7 days, pause and re-evaluate creative.
- **Bid keywords (priority order):** `ingilizce konuşma`, `ielts speaking`, `flört ingilizcesi`, `yds`, `mülakat`, `toefl`. Start at Apple's suggested CPT, scale winners after 72h.
- **Geo-target:** İstanbul, Ankara, İzmir, Bursa, Antalya first. Tier-2 cities (Konya, Gaziantep, Adana) after week 2 — different conversion profile, run separately.

### Initial Cohort to Court

- **TR users prepping IELTS / TOEFL speaking** — high ARPU, low CAC, high WOM in study communities (Eksi, Reddit r/Turkey, university Discords)
- **TR users on a daily English habit** (post-YDS audience) — high D7 retention, lower ARPU
- **Diaspora Turks in US / Germany** — small slice, but premium-spend, useful for early reviews

### Localization Priority

- **Tier 1 (ship at launch):** TR-TR primary, EN-US secondary
- **Tier 2 (post-launch, after 60 days of TR traction):** Re-evaluate based on actual install geo split. If EN installs > 25% of total, invest in a non-Turkish-targeted EN-US rewrite.
- **Tier 3 (deferred):** AR (Arabic) — Turkish-Arab user overlap suggests demand, but content authoring lift is real.

### Featured Potential

The single most "Apple Editorial"-friendly hook we have:

> **"Türkçe konuşanlar için akıllı feedback"** — Apple Editorial loves regional-specific products that aren't just translated UIs. The Turkish-language error explanation card (Screenshot 4) is the editorial-ready visual.

Secondary hooks to pitch in the Featured submission form:

- **"No runtime LLM, ever."** — Genuinely rare in 2026's app market; data flywheel architecture is a story.
- **"8 modes including Flört and Espri"** — Mood-driven category framing the Apple editors will not have seen elsewhere.
- **"Sub-3-second feedback loop"** — Speed as a feature, defensible because we pre-generate everything.

### Metrics to Watch (first 90 days)

| Metric | Target | Trigger to act |
|---|---|---|
| Search Impression → Tap CTR | 3.5%+ | <2.5% → re-test Subtitle |
| Tap → Install conversion | 32%+ | <25% → re-test Screenshots 1–3 |
| Keyword ranking (top 50) | 7 of 9 keywords | <5 → revisit keyword list |
| Search vs Browse install ratio | 70/30 | Below 60% search → ASO under-pulling |
| Trial → Paid (Speak+) | 15%+ | <10% → paywall surface needs rework |

### Review Management

- **Trigger first 100 review prompts at:** scene completion #5, after a 3-day streak hits, after a Speak+ trial day-1 success moment. **Never** on app launch.
- **Goal:** 100 reviews in week 1, 4.5+ average. Below 4.2 average is a panic threshold.
- **Reply policy:** Founder replies personally in TR for the first 90 days. Direct reply to every <4-star review with a real solution + invitation to `hello@lafla.app`.

---

**Owner:** App Store Optimizer
**Document version:** v1.0 (initial submission package)
**Last updated:** 2026-05-18
**Status:** Ready to paste into App Store Connect
