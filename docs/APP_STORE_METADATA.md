# App Store Connect Metadata — Lafla v0.9.0 → v1.0

> Ready-to-paste package for the App Store Connect submission. All fields are within Apple's character limits. Primary locale: **tr-TR**. Secondary locale: **en-US**.
>
> **2026-05-23 — v0.9.0 update (Faz 1-3 sonrası):**
> - Mod sayısı 6 → 7 (IELTS Speaking Part 1/2/3 simülatörü geri eklendi)
> - Sahne sayısı ~480 → **935** (daily 268, work 259, flirt 141, order 93, airport 89, ielts 44, bar 41)
> - 2 yeni mod eklendi: **Phoneme Drill** (fonem-bazlı telaffuz) + **Listen & Transcribe** (dinleme + yazım)
> - Yıllık plan **₺999/yıl** geri eklendi (Trend Researcher audit'i sonrası — Duolingo Super eşdeğeri annual tier)
> - v0.9.0: **LLM-siz smart conversation** — NPC bridge phrases (mini-Markov), adaptif force-show hint, 5sn idle glow
> - v0.8.0: Filler tolerance ("uh, well, yani" affedilir), Voice Journal data-loss race fix
> - v0.7.0: Premium UI polish (emoji → Icon library migration, 3D wordmark splash, Reanimated entrance animations)
>
> **2026-05-20 — Original radical cut karara çerçevesi:** "8 modes" / "982 sahne" / "TOEFL" framing'i geri alındı. Bu doküman v0.9.0 shipping ürününü yansıtıyor: **Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS** + Phoneme Drill + Listen Mode side-rails.
>
> Cross-references:
> - Reviewer notes → [`APP_REVIEW_NOTES.md`](./APP_REVIEW_NOTES.md)
> - Screenshot storyboard → [`APP_STORE_SCREENSHOTS.md`](./APP_STORE_SCREENSHOTS.md)
> - Privacy nutrition label → [`APP_STORE_PRIVACY_NUTRITION.md`](./APP_STORE_PRIVACY_NUTRITION.md)
> - v0.9.0 TestFlight checklist → [`TESTFLIGHT_v0.9.md`](./TESTFLIGHT_v0.9.md)

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
| **A (recommended)** | `Donma. Konuş. Türkçe ipuçlu.` | 28 | Anti-pain hook + Türk-first differentiator. Emotional anchor — the cold-discovery user with zero brand context understands "ben de donuyorum" in 0.4 saniye. |
| B | `Flört · İş · IELTS · Bar` | 24 | Pure mode-list (4 prominent + iceberg). Solid search index for "ielts" + "flört" exact-match, but emotional hook is stronger. Use as A/B variant after launch. |
| C | `7 mod · 935 sahne · A1–C1` | 26 | Proof-of-scope. Use after we hit ranking traction; weak as a cold-discovery subtitle but high credibility with returning visitors. |

> **Decision:** Ship Option A — anti-pain emotional hook beats keyword stuffing when the moat is regional-language correction. 2026-05-23 v0.9.0 update: IELTS modu kodda geri olduğu için Option B artık dürüst, ama A hala converts better in cold discovery (anchor on regret, not feature list).

### Identifiers

| Field | Value |
|---|---|
| **Bundle ID** | `com.lafla.app` (already provisioned) |
| **SKU** | `LAFLA-IOS-001` (internal — never visible to users) |
| **App Store ID** | Apple-assigned on creation |

### Categories

- **Primary:** Education
- **Secondary:** Lifestyle

> **Rationale on secondary:** With Flört + Bar + Havaalanı user-facing modes, Lifestyle pulls in browse traffic from the dating/travel cohort that Education's exam-focused indexing misses. Re-evaluate after 60 days.
>
> **v0.9.0 note:** IELTS modu geri eklenince Productivity'ye geçme cazibesi var (mülakat/sınav prep cohort'unu yakalar). Ama Lifestyle 7 modun 4'üne (flört + bar + havaalanı + günlük) hizmet ediyor — secondary kalsın. Productivity v1.1 A/B'de denenir.

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
| Alcohol / Tobacco / Drug References | **Infrequent / Mild** (Bar + Sipariş modes reference bar / drink ordering) |
| Simulated Gambling | None |
| Gambling | None |
| Unrestricted Web Access | None |
| User-Generated Content | None |

**Why not 4+:** Flört mode includes adult dating scenarios (Tinder openers, coffee invites). Apple has rejected 4+ apps for dating contexts even when sanitized — 12+ removes that risk for zero downside.

**Why not 17+:** No explicit content, no profanity, no graphic references. 17+ would compress the addressable audience by ~30% without justification.

---

## 2. Description — Türkçe (primary)

> **Char limit:** 4000. **Target:** 1500–1800 chars (Apple truncates after ~170 in the preview; the rest is the "Daha Fazla" tap).

```
Yabancıyla İngilizce konuşurken donmak yok. Lafla, Türkçe düşünen birine göre tasarlanmış konuşma pratiği uygulaması.

Her sahne 60 saniyenin altında. Telefonun kasarsa kasasın — Lafla beklemiyor, anında geri bildirim veriyor.

✨ NE BULURSUN

🎯 7 mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS Speaking
🎬 935 gerçek sahne — A1 başlangıçtan C1 ileri seviyeye CEFR haritası
🎙️ Phoneme Drill — Türk kulağı için zor sesleri (th, æ, v/w) targetli alıştırmalar
🎧 Dinleme + yazım modu — sessiz ortamda da pratik yap
🇹🇷 Türkçeye özel hata yakalama — article eksik, "I am go" hatası, "make picture" tuzakları
⚡ 3 saniyenin altında geri bildirim — donduğunda Lafla zaten yanıt vermiş
🧠 Akıllı konuşma — NPC karakterler doğal "Hmm, evet,..." başlangıçlarla cevap veriyor, scripted hissi azalıyor
💭 Voice Journal — kendi sesini kaydet, 1 hafta sonraki sesinle karşılaştır
🎨 Karanlık, premium tasarım — gözünüzü yormaz, gece de çalışır

🤔 BU UYGULAMA NEDİR?

Lafla, "İngilizceyi bilmek" ile "İngilizce konuşmak" arasındaki uçurumu kapatır. Sınav notun yüksek ama kafedeki Amerikalıyla 30 saniye sonra terliyorsun. Match'te mesaj geldi, 5 dakika düşünüyorsun. Lafla bu boşluğu kapatmak için var — 935 gerçek senaryo, hepsi ön-üretilmiş, hiçbiri AI hallüsinasyonu değil. Hiçbir cevabın internete gönderilmiyor.

🚀 NEDEN LAFLA?

Çoğu uygulama İngilizceyi çeviri olarak öğretir. Lafla, Türk düşünce yapısının nerede tıkandığını bilir:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Her sahnede bu spesifik tuzaklar hedef alınmış. Her düzeltme Türkçe açıklamalı — "neden hata olduğunu" anla, ezberleme.

🎓 IELTS Speaking moduyla Part 1, 2, 3 simulasyonu — band 7+ için gerekli yapıyı kazan.

💎 LAFLA PRO ÜYELİK

Tüm 935 sahneye erişim, sınırsız tekrar, derin telaffuz analizi, IELTS Band tahmini, kişisel zayıflık raporu ve gelişmiş ilerleme paneli.

📋 Fiyat: ₺99/ay veya ₺999/yıl (yıllık planda %16 tasarruf)
🔄 Otomatik yenilenir; iPhone Ayarlar → Apple Kimliği → Abonelikler menüsünden istediğin zaman iptal edebilirsin
⏰ İptal etmediğin sürece dönem sonunda otomatik yenilenir
📜 Şartlar: https://berkdemirokk.github.io/lafla/terms.html · Gizlilik: https://berkdemirokk.github.io/lafla/privacy.html

Destek: berkkdemirok@gmail.com
```

*(approx. 1,800 / 4,000 characters)*

---

## 3. Description — English (secondary)

> **Audience:** Turkish learners who understand some written English but freeze when speaking. Not yet optimized for non-Turkish learners.

```
Stop freezing when you have to speak English. Lafla is built for Turkish speakers who can read English but lock up the moment a conversation starts.

Every scene runs under 60 seconds. Real moments, real corrections, sub-3-second feedback.

✨ WHAT YOU GET

🎯 7 modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS Speaking
🎬 935 real scenarios — CEFR-mapped from A1 to C1
🎙️ Phoneme Drill — targeted practice for sounds Turkish ears confuse (th, æ, v/w)
🎧 Listen & Transcribe — practice in silent environments too
🇹🇷 Turkish-tailored error feedback — dropped articles, "I am go" mistakes, "make picture" traps
⚡ Sub-3-second feedback loop — corrections land before the freeze sets in
🧠 Smart conversation — NPCs reply with natural "Hmm, yes,..." openers; less scripted feel
💭 Voice Journal — record yourself, compare your voice from a week ago
🎨 Dark, premium design — readable at night, no eye fatigue

🤔 WHAT IS THIS?

Lafla closes the gap between "knowing English" and "speaking English." You scored high on a translation test but you sweat 30 seconds into a conversation with an American. A Match wrote, you spent five minutes drafting one reply. Lafla is built for that gap — 935 real scenarios, all pre-authored, zero runtime AI hallucination. Nothing you type or say leaves your device.

🚀 WHY LAFLA?

Most apps teach English as translation. Lafla knows where Turkish thinking gets stuck:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Every scene targets these specific traps. Every correction is explained in Turkish — understand the "why," don't just memorize.

🎓 IELTS Speaking mode covers Parts 1, 2, and 3 — the structure you need for band 7+.

💎 LAFLA PRO MEMBERSHIP

All 935 scenes unlocked, unlimited replays, deep pronunciation analysis, IELTS Band estimate, personal weakness report, advanced progress dashboard.

📋 Pricing: ₺99/month or ₺999/year (16% savings on annual)
🔄 Auto-renews; cancel anytime in iPhone Settings → Apple ID → Subscriptions
⏰ Renewal continues at the end of each period unless cancelled
📜 Terms: https://berkdemirokk.github.io/lafla/terms.html · Privacy: https://berkdemirokk.github.io/lafla/privacy.html

Support: berkkdemirok@gmail.com
```

*(approx. 1,750 / 4,000 characters)*

---

## 4. Keywords — Türkçe (max 100 chars, comma-separated, no spaces)

```
ingilizce konuşma,ielts speaking,flört ingilizcesi,yds,toefl,mülakat,telaffuz,akıcı,fonem
```

*(95 / 100 characters)*

> **2026-05-23 update:** IELTS modu kodda olduğu için "ielts speaking" anahtarı artık dürüst dual-purpose: hem ASO trafiği hem in-product feature match. "fonem" eklendi çünkü v0.8.0'da gerçek Phoneme Drill modu shipte — niş ama yüksek-niyet ("fonem" + "telaffuz" tekrar değil, "fonem" Türk dilbilim cohort'unu çekiyor; "telaffuz" genel audience).
>
> **2026-05-20 note (history):** IELTS / TOEFL / YDS *keywords* were initially kept after the testprep mode cut. Faz 2'de IELTS modu geri eklenince dürüstlük katsayısı geri geldi.

**Rationale:**

| Keyword | Volume | Intent |
|---|---|---|
| `ingilizce konuşma` | Very high | Primary category intent — TR App Store top-volume English-learning term |
| `ielts speaking` | High | Exam-prep audience, high ARPU. We catch the speaking-fluency intent without promising IELTS-specific content |
| `flört ingilizcesi` | Medium | Owns this niche entirely; competitors do not index this term |
| `yds` | High | Cold post-exam audience — they passed YDS but can't speak |
| `toefl` | Medium | Complements IELTS audience, premium-spend segment |
| `mülakat` | Medium | Spans job + academic + visa intents under one anchor |
| `telaffuz` | Medium | Direct match to Lafla Pro pronunciation feature |
| `akıcı` | Medium | Outcome-anchor — "akıcı İngilizce" is the audience aspiration |
| `konuşma pratiği` | Medium | "Speaking practice" Turkish equivalent — broad-tail catcher |

**Excluded:**
- ❌ `lafla`, `ingilizce` — already in App Name (Apple auto-indexes, duplicate spend)
- ❌ `duolingo`, `babbel`, `talkpal`, `cambly`, `lerna` — Apple rejects competitor brand names since 2025
- ❌ `learn english` — brutal competition, English keyword cannibalizes TR slot

---

## 5. Keywords — English (max 100 chars)

```
speak english,esl turkish,fluency,pronunciation,phoneme,ielts,toefl,conversation,interview
```

*(91 / 100 characters)*

**Rationale:**

| Keyword | Intent |
|---|---|
| `speak english` | Primary intent for English-language App Store browsers |
| `english practice` | Captures "practice English" search variant |
| `esl turkish` | Hyper-niche, low competition, exact-match for our audience |
| `fluency` | Outcome anchor |
| `pronunciation` | Lafla Pro feature match |
| `ielts` | Same exam-prep segment as TR list |
| `toefl` | Same |
| `conversation` | Generic but high-tail |
| `interview` | Cross-mode anchor (job, academic, visa) |

---

## 6. What's New (release notes) — v1.0.0 (built on v0.9.0)

> **TR (primary):**

```
Lafla — ilk sürüm. Konuş, çalış.

🎯 7 mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS
🎬 935 oynanabilir sahne — A1'den C1'e CEFR ile haritalı
🎙️ Phoneme Drill — Türk kulağı için zor sesleri targetli alıştır
🎧 Dinle + yaz modu — sessiz ortamda da pratik
🇹🇷 Türkçeye özel hata geri bildirimi (article, doğrudan çeviri tuzakları)
⚡ Sub-3-saniye geri bildirim — donduğunda Lafla zaten cevap vermiş
🧠 Akıllı konuşma — NPC karakterler doğal başlangıçlarla konuşuyor
💭 Voice Journal — kendi sesini kaydet, ilerlemeyi duy
🌙 Neon Noir tema — premium, gece dostu

Geri bildirim: berkkdemirok@gmail.com
```

*(approx. 530 chars)*

> **EN (secondary):**

```
Lafla — first launch. Speak. Work.

🎯 7 modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS
🎬 935 scenarios playable at launch — CEFR-mapped A1 to C1
🎙️ Phoneme Drill — targeted practice for sounds Turkish ears confuse
🎧 Listen & Transcribe — practice in silent environments
🇹🇷 Turkish-tailored error feedback (articles, direct-translation traps)
⚡ Sub-3-second feedback loop
🧠 Smart conversation — NPCs reply with natural openers
💭 Voice Journal — record yourself, hear your progress
🌙 Neon Noir theme — premium, night-friendly

Feedback: berkkdemirok@gmail.com
```

*(approx. 530 chars)*

---

## 7. Screenshot Brief — 6.7" iPhone (required) + 6.1" iPhone (optional)

> **Specs:** 6.7" iPhone (iPhone 14/15/16 Pro Max) → 1290 × 2796 px. 6.1" iPhone derivative → 1179 × 2556 px. Apple can auto-derive 6.1" from 6.7" but uploading both gets you the iPhone-15-class auto-preview slot. Caption typography: Inter Bold 64pt headline, Inter Regular 32pt sub. Background: dark gradient `#0B0413 → #1A0928` with neon pink (`#FF067A`) + cyan (`#00FFFF`) accent shapes — the Neon Noir palette.

### Screenshot 1 — Hero (Brand Statement)

- **Show:** Lafla wordmark + app icon centered on the dark gradient. Subtle neon-pink underline glow under the wordmark. Small caption strip beneath: 7 mode chips (Flört / İş / Bar / Havaalanı / Günlük / Sipariş / IELTS) wrapping on two rows.
- **Headline overlay (TR):** `Donmadan İngilizce.`
- **Sub:** `7 mod · 935 sahne · CEFR A1–C1`
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

- **Show:** Profile / fluency dashboard. Big circular ring at the top showing `B1+` CEFR level with a glowing cyan progress arc. Below: 7-day bar chart with the current day highlighted hot-pink. Streak counter card: `🔥 12 gün` with a flame icon. Three small mode-progress bars below (Flört 78%, İş 52%, Bar 21%).
- **Headline overlay (TR):** `CEFR seviyenle gerçek ilerleme.`
- **Sub:** `XP grindi değil. Akıcılık.`
- **Why:** Anti-Duolingo positioning. CEFR is a credential Turks already trust (YDS / IELTS world). Connects familiar measurement to a new product.

### Screenshot 6 — Pricing / Value

- **Show:** Lafla Pro paywall surface. Hero: `Lafla Pro — Tüm sahneler` with a glowing border. Segmented toggle (Aylık / Yıllık) at the top with **Yıllık** preselected. Price row: `₺999 / yıl` (with `%16 indirim` pill). Below: four feature rows with checkmark icons:
  - `✓ 935 sahnenin tamamı`
  - `✓ Sınırsız tekrar ve telaffuz analizi`
  - `✓ IELTS Band tahmini + kişisel zayıflık raporu`
  - `✓ Erken erişim — yeni modlar`
  - Restore Purchases link visible at the bottom (compliance signal to Apple).
- **Headline overlay (TR):** `Bir kahvenin yarısı.`
- **Sub:** `Yıllık ₺999 veya aylık ₺99. İstediğin an iptal.`
- **Why:** Closes the funnel with the value proposition. Restore link visible = clean signal for Apple's reviewer. Annual-default segmented toggle reflects the live paywall behavior (yearly is the recommended tier in v0.9.0).

> **Localization note:** Upload TR captions on the TR locale and EN captions on the EN locale. Images are identical — only the overlay text swaps. EN overlay equivalents: `Stop freezing.` / `Open, swipe, speak.` / `A real scene, a real mistake.` / `We explain mistakes in Turkish.` / `Real progress, mapped to CEFR.` / `Half a coffee.`

---

## 8. Promotional Text — 170-char (updatable without re-review)

### Türkçe (recommended for launch)

```
Lafla geldi. 7 mod, 935 sahne, IELTS Speaking, fonem drill, akıllı NPC konuşmaları. Türkçe ipuçlu hata feedback. Flörtten mülakata, donma. Konuş.
```

*(160 / 170 characters)*

### English

```
Lafla just launched. 7 modes, 935 scenarios, IELTS Speaking, phoneme drills, smart NPC conversations. Turkish-language error feedback. Stop freezing.
```

*(152 / 170 characters)*

> **Why promo text:** This field updates without re-review. Use it for content drops (new modes, exam-season pushes, Black Friday) and for narrative hooks the reviewer doesn't need to approve.

---

## 9. App Review Information

> See [`APP_REVIEW_NOTES.md`](./APP_REVIEW_NOTES.md) for the full reviewer-facing brief. This section captures only what is pasted directly into App Store Connect's "App Review Information" panel.

### Sign-in Required

**Yes — demo credentials provided.**

### Demo Account

Demo username + password are entered into App Store Connect's dedicated **Demo Account** fields (not committed to this repo, rotated each submission). The seeded account has:

- Turkish UI onboarding completed (4 steps post-2026-05-20)
- Sample completed scenes across the 7 modes (Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS)
- A small streak history (3 days)
- Voice Journal: 2 sample audio entries (so the reviewer can verify mic permission flow without leaving the app)
- Lafla Pro entitlement granted (review-side TestFlight unlock; on production builds reviewers should use a Sandbox Tester for the IAP path)

If credentials are stale, contact **berkkdemirok@gmail.com** — fresh tester provisioned within one business day.

### Contact Information

| Field | Value |
|---|---|
| First name | (App Store Connect account holder) |
| Last name | (App Store Connect account holder) |
| Phone | (App Store Connect account holder) |
| Email | `berkkdemirok@gmail.com` |

### Notes (paste into the "Notes" box)

```
Lafla is a Turkish-first English speaking-practice app. The home feed is gated behind auth — please use the demo credentials in the Demo Account fields. Once signed in, you land on a TikTok-style vertical swipe feed; swipe up/down to move between scene cards. Each card belongs to one of seven modes: Flört (dating), İş (work), Bar, Havaalanı (airport), Günlük (daily), Sipariş (ordering), IELTS Speaking.

Two iOS permissions (Microphone, Speech Recognition) are requested lazily — only when the user first taps a voice exercise, not on first launch. Denying either still leaves the rest of the app usable; we present a graceful "go to Settings" prompt.

Two In-App Purchases ship: `lafla.premium.monthly` (₺99/mo) and `lafla.premium.yearly` (₺999/yr) — both via RevenueCat. Restore Purchases is reachable from both the paywall and Settings.

App Tracking Transparency (ATT) prompt is shown after onboarding completes (Apple HIG: prompt at first meaningful value moment, not on launch). AdMob initialization is sequenced after ATT response. PostHog analytics are gated by ATT — denied users get zero tracking.

Two side-rail practice modes exist for silent environments:
- Phoneme Drill (/phoneme-drill): targeted pronunciation alıştırması for hard sounds
- Listen & Transcribe (/listen-mode): hear a sentence, type what you heard

Voice Journal (/voice-journal): users can record up to 2-minute audio entries; stored locally only (no cloud sync), auto-deleted on account deletion.

Account deletion: Settings → Hesabımı Sil → confirm by typing "SİL" → immediate deletion via Supabase edge function. No 30-day grace.

No runtime LLM. All NPC dialogue and feedback is pre-authored TypeScript; runtime "smart conversation" uses a deterministic mini-Markov model for bridge phrases (lib/npc-bridge.ts), not an external API. Voice Journal audio never leaves the device.

Full reviewer brief in the included APP_REVIEW_NOTES.md attached to this submission. Questions: berkkdemirok@gmail.com (Istanbul business hours, <4h response).
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

- **TR users prepping IELTS / TOEFL speaking** — high ARPU, low CAC, high WOM in study communities (Ekşi, Reddit r/Turkey, university Discords). Note: we no longer ship dedicated exam-format content, but the keyword cohort still converts on general speaking fluency.
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
- **"6 modes including Flört and Bar"** — Mood-driven category framing the Apple editors will not have seen elsewhere.
- **"Sub-3-second feedback loop"** — Speed as a feature, defensible because we pre-generate everything.

### Metrics to Watch (first 90 days)

| Metric | Target | Trigger to act |
|---|---|---|
| Search Impression → Tap CTR | 3.5%+ | <2.5% → re-test Subtitle |
| Tap → Install conversion | 32%+ | <25% → re-test Screenshots 1–3 |
| Keyword ranking (top 50) | 7 of 9 keywords | <5 → revisit keyword list |
| Search vs Browse install ratio | 70/30 | Below 60% search → ASO under-pulling |
| Trial → Paid (Lafla Pro) | 15%+ | <10% → paywall surface needs rework |

### Review Management

- **Trigger first 100 review prompts at:** scene completion #5, after a 3-day streak hits, after a Lafla Pro trial day-1 success moment. **Never** on app launch.
- **Goal:** 100 reviews in week 1, 4.5+ average. Below 4.2 average is a panic threshold.
- **Reply policy:** Founder replies personally in TR for the first 90 days. Direct reply to every <4-star review with a real solution + invitation to `berkkdemirok@gmail.com`.

---

**Owner:** App Store Optimizer
**Document version:** v1.2 (post-2026-05-23 Faz 1-3 + 7-mode + yearly tier)
**Last updated:** 2026-05-23
**Status:** Ready to paste into App Store Connect (v0.9.0 → v1.0)
