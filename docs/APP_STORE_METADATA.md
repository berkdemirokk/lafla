# App Store Connect Metadata — Lafla v0.9.0 → v1.0

> Ready-to-paste package for the App Store Connect submission. All fields are within Apple's character limits. Primary locale: **tr-TR**. Secondary locale: **en-US**.
>
> **2026-11-16 — v1.0.6 update:** Name, subtitle, descriptions, keywords, promotional text and What's New now mirror `apps/mobile/scripts/asc-sync.ts` (new "Bugünün 10 Kelimesi / Today's 10 Words" feature). Name/subtitle push is available behind `--app-info` (§11). Historical notes below are kept for context.
>
> **2026-05-23 — v0.9.0 update (Faz 1-3 sonrası):**
> - Mod sayısı 6 → 7 (IELTS Speaking Part 1/2/3 simülatörü geri eklendi)
> - Sahne sayısı **971**; içerik A1–C2 aralığında denetlendi.
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

> **Source of truth:** `apps/mobile/scripts/asc-sync.ts` → `METADATA`. The blocks in this document mirror the strings that script pushes (v1.0.6, "Bugünün 10 Kelimesi" release). If they drift, the script wins; update this file in the same PR.

### App Name (max 30 characters)

| Locale | Value | Chars |
|---|---|---|
| **tr** (primary) | `Lafla: İngilizce Konuşma Öğren` | 30 / 30 |
| **en-US** | `Lafla: Learn English Speaking` | 29 / 30 |

### Subtitle (max 30 characters)

| Locale | Value | Chars |
|---|---|---|
| **tr** (primary) | `Günlük 10 Kelime, Sesli Pratik` | 30 / 30 |
| **en-US** | `Daily 10 Words, Voice Practice` | 30 / 30 |

> **Rationale:** Name keeps brand + the highest-volume TR intent ("İngilizce konuşma") and adds the verb "Öğren". Subtitle leads with the new daily-words feature (habit hook) and keeps "Sesli Pratik" as the speaking differentiator. Both TR strings sit exactly at the 30-char limit, so any edit must stay within it — the script's pre-flight check aborts otherwise.
>
> **How it is pushed:** name/subtitle live on `appInfoLocalizations`, not on the version localization. `asc-sync.ts` only touches them with the opt-in `--app-info` flag (see §11). Without that flag a normal sync never renames the app.

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

> **Char limit:** 4000. Apple truncates after ~170 chars in the preview; the opening paragraph carries the pain hook + daily-words promise. Emojis are stripped by the API push, so the canonical text uses none.

```
İngilizceyi okuyorsun ama konuşma anı gelince donuyor musun? Lafla, Türkçe düşünen biri için tasarlanmış İngilizce konuşma pratiği ve günlük kelime uygulaması. Her gün 10 yeni kelime öğren, gerçek sahnelerde sesli pratik yap, hatalarını Türkçe açıklamalarla düzelt.

YENİ: BUGÜNÜN 10 KELİMESİ

• Her gün seviyene uygun 10 yeni İngilizce kelime
• Her kelime için örnek cümle, Türkçe anlam ve sesli okunuş
• 2 dakikalık hızlı testle pekiştir; kelimeler otomatik olarak tekrar listene eklenir
• Unutmaya başladığın kelimeleri aralıklı tekrarla yeniden sorar
• Günlük kelimeleri bitirmek serini korur; istersen akşam hatırlatması alırsın

İNGİLİZCE KONUŞMA PRATİĞİ

• 7 mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS Speaking
• 971 gerçek sahne, A1 başlangıçtan C2 ileri seviyeye CEFR haritası
• Her sahne 60 saniyenin altında; 3 saniyenin altında geri bildirim
• Telaffuz pratiği: Türk kulağının zorlandığı sesler (th, æ, v/w) için hedefli alıştırmalar
• Dinleme pratiği: cümleyi dinle, duyduğunu yaz; sessiz ortamda da çalışır
• Sesli günlük: kendi sesini kaydet, gelişimini zamanla dinle (kayıtlar cihazında kalır)
• Doğal diyaloglar: karakterler gerçek bir sohbetteki gibi cevap verir
• Açık ve koyu tema

TÜRKLERE ÖZEL HATA YAKALAMA

Çoğu uygulama İngilizceyi çeviri olarak öğretir. Lafla, Türkçe düşünce yapısının nerede tıkandığını bilir:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Her düzeltme Türkçe açıklamalı: ezberleme, nedenini anla.

IELTS VE SINAVLARA HAZIRLIK

IELTS Speaking modu Part 1, 2 ve 3 yapısını çalıştırır. Günlük kelime setleri; IELTS, TOEFL ve YDS gibi sınavlara hazırlanırken kelime dağarcığını düzenli büyütmene yardımcı olur.

GÜVENİLİR VE ÖZEL

971 senaryonun tamamı önceden yazılmıştır; uydurma cevap yok, pratik tamamen algoritmiktir, üretken yapay zekâ kullanılmaz. Cevapların Lafla sunucularına gönderilmez; sesli giriş iOS konuşma tanıma sistemi tarafından işlenebilir.

LAFLA PRO ÜYELİK

Tüm 971 sahneye erişim, sınırsız tekrar, yönlendirmeli telaffuz pratiği, IELTS Band tahmini, kişisel zayıflık raporu ve gelişmiş ilerleme paneli.

• Aylık ve yıllık planlar mevcut. App Store satın alma ekranı onaydan önce kesin yerel fiyatı ve faturalama dönemini gösterir.
• Abonelik, iptal etmediğin sürece dönem sonunda otomatik yenilenir.
• İstediğin zaman iPhone Ayarlar → Apple Kimliği → Abonelikler menüsünden iptal edebilirsin.
• Şartlar: https://berkdemirokk.github.io/lafla/terms.html
• Gizlilik: https://berkdemirokk.github.io/lafla/privacy.html

Destek: berkkdemirok@gmail.com
```

*(2,639 / 4,000 characters)*

---

## 3. Description — English (secondary)

> **Audience:** Turkish learners who understand some written English but freeze when speaking. Not yet optimized for non-Turkish learners.

```
Can you read English but freeze the moment you have to speak? Lafla is an English speaking practice and daily vocabulary app built for Turkish speakers. Learn 10 new words every day, practice out loud in real scenes, and get every mistake explained in Turkish.

NEW: TODAY'S 10 WORDS

• Ten new English words a day, matched to your level
• Example sentence, Turkish meaning and audio for every word
• A quick 2-minute check, then every word joins your review list automatically
• Spaced review brings words back right when you start to forget them
• Finishing your daily words keeps your streak alive; optional evening reminder

ENGLISH SPEAKING PRACTICE

• 7 modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS Speaking
• 971 real scenarios, CEFR-mapped from A1 to C2
• Every scene runs under 60 seconds, with sub-3-second feedback
• Pronunciation practice for sounds Turkish ears confuse (th, æ, v/w)
• Listen & Transcribe: hear a sentence, type what you heard; works in silent places
• Voice Journal: record yourself and hear your progress over time (recordings stay on your device)
• Natural dialogues: characters reply the way a real conversation partner would
• Light and dark themes

BUILT FOR TURKISH SPEAKERS

Most apps teach English as translation. Lafla knows where Turkish thinking gets stuck:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Every correction is explained in Turkish: understand the why, don't just memorize.

IELTS AND EXAM PREP

IELTS Speaking mode drills the structure of Parts 1, 2 and 3. Daily word sets help you grow your vocabulary steadily while preparing for IELTS, TOEFL or YDS.

PRIVATE AND PREDICTABLE

All 971 scenarios are pre-authored and practice is fully algorithmic; no generative AI, no made-up answers. Answers are not sent to Lafla servers; voice input may be processed by iOS Speech Recognition.

LAFLA PRO MEMBERSHIP

All 971 scenes unlocked, unlimited replays, guided pronunciation practice, IELTS Band estimate, personal weakness report, advanced progress dashboard.

• Monthly and yearly plans are available. The App Store purchase sheet shows the exact localized price and billing period before confirmation.
• Subscriptions auto-renew at the end of each period unless cancelled.
• Cancel anytime in iPhone Settings → Apple ID → Subscriptions.
• Terms: https://berkdemirokk.github.io/lafla/terms.html
• Privacy: https://berkdemirokk.github.io/lafla/privacy.html

Support: berkkdemirok@gmail.com
```

*(2,571 / 4,000 characters)*

---

## 4. Keywords — Türkçe (max 100 chars, comma-separated, no spaces)

```
ielts,yds,yökdil,toefl,speaking,english,telaffuz,ezber,sohbet,dil,yabancı,akıcı,mülakat,dinleme
```

*(95 / 100 characters)*

**Rationale:**

- Exam cohort: `ielts`, `yds`, `yökdil`, `toefl` — high-intent, high-ARPU; IELTS Speaking mode + daily word sets serve them honestly.
- English-script terms Turkish users type: `speaking`, `english`.
- Feature/outcome anchors: `telaffuz`, `ezber` (daily words), `sohbet`, `dinleme`, `akıcı`, `mülakat`.
- Broad-tail: `dil`, `yabancı` (combine with name words "İngilizce", "Konuşma", "Öğren").

**Excluded:**
- ❌ `lafla`, `ingilizce`, `konuşma`, `öğren`, `kelime`, `pratik` — already in App Name / Subtitle (Apple auto-indexes, duplicate spend)
- ❌ Competitor brand names (`duolingo`, `babbel`, `cambly` …) — Apple rejects them

---

## 5. Keywords — English (max 100 chars)

```
ielts,toefl,turkish,esl,vocabulary,vocab,pronunciation,fluency,conversation,interview,accent,cefr
```

*(97 / 100 characters)*

**Rationale:**

- Exam + level: `ielts`, `toefl`, `cefr`.
- Audience niche: `turkish`, `esl`.
- Daily-words feature: `vocabulary`, `vocab`.
- Speaking outcomes: `pronunciation`, `fluency`, `conversation`, `interview`, `accent`.
- Not repeated: `learn`, `english`, `speaking`, `daily`, `words`, `voice`, `practice` (already in Name / Subtitle).

---

## 6. What's New (release notes) — v1.0.6

> **TR (primary):**

```
Yeni: Bugünün 10 Kelimesi

• Her gün seviyene göre 10 yeni kelime, örnek cümle ve sesli okunuş
• 2 dakikalık hızlı testle pekiştir, kelimeler tekrar listene eklensin
• Günlük kelimeleri bitirmek serini korur
• Akşam hatırlatması: kelimeler bitmediyse haber veririz
• Genel performans ve kararlılık iyileştirmeleri
```

*(313 / 4,000 characters)*

> **EN (secondary):**

```
New: Today's 10 Words

• Ten new words a day at your level, with example sentences and audio
• A 2-minute quick check, then every word joins your review list
• Finishing your daily words keeps your streak alive
• Evening reminder if today's words are still waiting
• General performance and stability improvements
```

*(313 / 4,000 characters)*

---

## 7. Screenshot Brief — 6.7" iPhone (required) + 6.1" iPhone (optional)

> **Specs:** 6.7" iPhone (iPhone 14/15/16 Pro Max) → 1290 × 2796 px. 6.1" iPhone derivative → 1179 × 2556 px. Apple can auto-derive 6.1" from 6.7" but uploading both gets you the iPhone-15-class auto-preview slot. Caption typography: Inter Bold 64pt headline, Inter Regular 32pt sub. Background: dark gradient `#0B0413 → #1A0928` with neon pink (`#FF067A`) + cyan (`#00FFFF`) accent shapes — the Neon Noir palette.

### Screenshot 1 — Hero (Brand Statement)

- **Show:** Lafla wordmark + app icon centered on the dark gradient. Subtle neon-pink underline glow under the wordmark. Small caption strip beneath: 7 mode chips (Flört / İş / Bar / Havaalanı / Günlük / Sipariş / IELTS) wrapping on two rows.
- **Headline overlay (TR):** `Donmadan İngilizce.`
- **Sub:** `7 mod · 971 sahne · CEFR A1–C2`
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

- **Show:** Lafla Pro paywall surface. Hero: `Lafla Pro — Tüm sahneler` with a glowing border. Segmented toggle (Aylık / Yıllık) at the top with **Yıllık** preselected. Price row uses the live localized App Store price, with a savings pill only when the live annual price is cheaper than 12 monthly periods. Below: four feature rows with checkmark icons:
  - `✓ 971 sahnenin tamamı`
  - `✓ Sınırsız tekrar ve telaffuz analizi`
  - `✓ IELTS Band tahmini + kişisel zayıflık raporu`
  - `✓ Erken erişim — yeni modlar`
  - Restore Purchases link visible at the bottom (compliance signal to Apple).
- **Headline overlay (TR):** `Bir kahvenin yarısı.`
- **Sub:** `Aylık veya yıllık seç. Fiyatı App Store onay ekranında gör. İstediğin an iptal.`
- **Why:** Closes the funnel with the value proposition. Restore link visible = clean signal for Apple's reviewer. Annual-default segmented toggle reflects the live paywall behavior (yearly is the recommended tier in v0.9.0).

> **Localization note:** Upload TR captions on the TR locale and EN captions on the EN locale. Images are identical — only the overlay text swaps. EN overlay equivalents: `Stop freezing.` / `Open, swipe, speak.` / `A real scene, a real mistake.` / `We explain mistakes in Turkish.` / `Real progress, mapped to CEFR.` / `Half a coffee.`

---

## 8. Promotional Text — 170-char (updatable without re-review)

### Türkçe

```
Yeni: Bugünün 10 Kelimesi! Her gün seviyene uygun 10 kelime, sesli okunuş ve 2 dakikalık test. Gerçek sahnelerle konuşma pratiği; tamamen algoritmik.
```

*(149 / 170 characters)*

### English

```
New: Today's 10 Words! Ten fresh words a day at your level, with audio and a quick 2-minute check. Real-scene speaking practice, fully algorithmic.
```

*(147 / 170 characters)*

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

Two In-App Purchases ship: `lafla.premium.monthly` and `lafla.premium.yearly` — both via RevenueCat. The App Store purchase sheet shows the exact localized price and billing period before confirmation. Restore Purchases is reachable from both the paywall and Settings.

App Tracking Transparency (ATT) prompt is requested from the root app shell before AdMob initialization. PostHog analytics are gated by ATT — denied users get zero tracking.

Two side-rail practice modes exist for silent environments:
- Phoneme Drill (/phoneme-drill): targeted pronunciation alıştırması for hard sounds
- Listen & Transcribe (/listen-mode): hear a sentence, type what you heard

Voice Journal (/voice-journal): users can record up to 2-minute audio entries; stored locally only (no cloud sync), auto-deleted on account deletion.

Account deletion: Settings → Hesabımı Sil → confirm by typing "SİL" → immediate deletion via Supabase edge function. No 30-day grace.

The 971 guided scenarios are pre-authored and scored on-device. Free Chat and Real Life tools (Emergency English and custom-scenario generation) also run on-device using bundled deterministic rules; text entered in those tools is not transmitted to an AI provider or Lafla server. Voice Journal audio remains local.

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

- **"Guided scenarios are pre-authored and locally scored."** — Reliable, fast feedback without presenting generated dialogue as authored lesson content.
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

## 11. Pushing this metadata — `asc-sync.ts`

All text fields above are pushed by `apps/mobile/scripts/asc-sync.ts` via the App Store Connect API. Run from `apps/mobile`:

| Command | Effect |
|---|---|
| `pnpm asc:sync` | Dry-run. Pre-flight limit check, then prints what would be PATCHed (version localizations, review detail, build attach). No writes. |
| `pnpm asc:sync -- --app-info` | Dry-run + prints the current-vs-target name/subtitle diff per locale. No writes. |
| `pnpm asc:sync:apply` | Pushes description, keywords, promotional text, what's new, support/marketing URLs (`appStoreVersionLocalizations`), review detail, build attach. **Does not touch name/subtitle.** |
| `pnpm asc:sync:apply -- --app-info` | Same as above **plus** PATCHes name/subtitle on `appInfoLocalizations` (only fields that differ). |

- `--app-info` is opt-in so a routine sync never renames the live listing. It requires an editable appInfo (a version in Prepare for Submission / rejected state); if only the live `READY_FOR_DISTRIBUTION` appInfo exists the script warns and skips. The new name/subtitle ship with that version's release.
- **Pre-flight validation** runs before any network call: name ≤30, subtitle ≤30, keywords ≤100, promotional text ≤170, description and what's new ≤4000 (counted as Unicode characters after emoji stripping). Any violation aborts the run with the offending field and length.
- **Credentials (env):** `ASC_KEY_ID` (alias `APP_STORE_CONNECT_KEY_ID`), `ASC_ISSUER_ID` (alias `APP_STORE_CONNECT_ISSUER_ID`), and either `ASC_PRIVATE_KEY_PATH` (path to the `.p8`) or `ASC_PRIVATE_KEY` (PEM contents); `APP_STORE_CONNECT_PRIVATE_KEY[_PATH]` aliases also work. Review-detail extras: `DEMO_ACCOUNT_EMAIL`, `DEMO_ACCOUNT_PASSWORD`, `CONTACT_*`.
- **GitHub Actions:** `.github/workflows/asc-sync.yml` exposes only the `apply` input today; adding `--app-info` there needs a new workflow input. Until then run the name/subtitle push locally.

---

**Owner:** App Store Optimizer
**Document version:** v1.3 (v1.0.6 "Bugünün 10 Kelimesi" metadata, synced with asc-sync.ts)
**Last updated:** 2026-11-16
**Status:** Mirrors `apps/mobile/scripts/asc-sync.ts` METADATA
