# ASC Paste Sheet — Lafla v0.9.x

> **Amaç:** App Store Connect web UI'sında 18 form alanına copy-paste etmek için tek dosya. APP_STORE_METADATA.md zaten kanonik kaynak ama orada açıklamalar var, paste için friction. Bu dosya sadece **boş kopya-yapıştır blokları**.
>
> **Hangi alanlar otomasyondan geçer?** `scripts/asc-sync.ts` (workflow_dispatch: `gh workflow run asc-sync.yml`) **descriptions + keywords + promotional text + what's new** alanlarını ASC API üzerinden push eder. Aşağıda kalan alanlar **manuel** (Apple API'den settable değil VEYA financial/irreversible).

---

## A. App Information

### Primary Language
```
Turkish (Turkey)
```

### Bundle ID
```
com.lafla.app
```

### SKU
```
LAFLA-IOS-001
```

### Primary Category
```
Education
```

### Secondary Category
```
Lifestyle
```

### Content Rights Question
```
Does Lafla contain, show, or access third-party content?
→ No (tüm içerik original)
```

---

## B. Pricing and Availability

### Price
```
Free
```

### Availability
```
All countries with Turkey as primary
```

---

## C. Subscription IAP — ⚠️ Manuel (financial)

### Product 1: lafla.premium.monthly

| Field | Value |
|---|---|
| Reference Name | `Lafla Pro Monthly` |
| Product ID | `lafla.premium.monthly` |
| Subscription Group | `Lafla Premium` (create if missing) |
| Subscription Duration | `1 Month` |
| Auto-Renewal | Yes |
| Cleared for Sale | Yes |

**Localized Display Name TR:** `Lafla Pro Aylık`
**Localized Display Name EN:** `Lafla Pro Monthly`

**Localized Description TR:**
```
Tüm 971 sahneye erişim, sınırsız tekrar, yönlendirmeli telaffuz pratiği, IELTS Band tahmini ve kişisel zayıflık raporu.
```

**Localized Description EN:**
```
All 971 scenes unlocked, unlimited replays, guided pronunciation practice, IELTS Band estimate, personal weakness report.
```

**Price:** TR Tier 30 — `₺99/ay` (Apple auto-localizes other countries)

---

### Product 2: lafla.premium.yearly

| Field | Value |
|---|---|
| Reference Name | `Lafla Pro Yearly` |
| Product ID | `lafla.premium.yearly` |
| Subscription Group | `Lafla Premium` (aynı grup) |
| Subscription Duration | `1 Year` |
| Auto-Renewal | Yes |
| Cleared for Sale | Yes |

**Localized Display Name TR:** `Lafla Pro Yıllık`
**Localized Display Name EN:** `Lafla Pro Yearly`

**Localized Description TR:**
```
Yıllık plan — aylığa göre %16 tasarruf. Tüm 971 sahneye erişim, sınırsız tekrar, IELTS Band tahmini ve kişisel zayıflık raporu.
```

**Localized Description EN:**
```
Yearly plan — 16% savings vs monthly. All 971 scenes unlocked, unlimited replays, IELTS Band estimate, personal weakness report.
```

**Price:** TR Tier 200 — `₺999/yıl` (Apple auto-localizes other countries)

> **RevenueCat dashboard adımı (ASC tarafı bittikten sonra):**
> - Offering: `default`
> - Packages: `$rc_monthly` ↔ `lafla.premium.monthly`, `$rc_annual` ↔ `lafla.premium.yearly`
> - Entitlement: `Lafla Pro` (matches `PREMIUM_ENTITLEMENT` in `lib/iap.ts`)

---

## D. App Privacy — ⚠️ Manuel (Apple API settable değil)

> Source of truth: `docs/APP_STORE_PRIVACY_NUTRITION.md`. ASC web UI'sında soru-soru ilerle. Kritik cevaplar:

### Tracking question
```
Does this app use data for tracking?
→ YES (ATT-conditional: AdMob personalized + PostHog only when ATT granted)
```

### Data Types collected (özet)
| Section | Collected? | Linked? | Tracking? |
|---|---|---|---|
| Contact Info (email, name) | ✅ Yes | ✅ Yes | No |
| Audio Data (STT eval) | ✅ Yes | ✅ Yes | No |
| Customer Support | ✅ Yes | ✅ Yes | No |
| Other User Content (text answers) | ✅ Yes | ✅ Yes | No |
| User ID | ✅ Yes | ✅ Yes | No |
| Device ID (anon install) | ✅ Yes | ❌ No | No |
| Purchases | ✅ Yes | ✅ Yes | No |
| Product Interaction (PostHog) | ✅ Yes | ✅ Yes | **✅ if ATT granted** |
| Advertising Data (AdMob) | ✅ Yes | ❌ No | **✅ if ATT granted** |
| Crash Data (Sentry) | ✅ Yes | ✅ Yes | No |
| Performance Data | ✅ Yes | ✅ Yes | No |

**Voice Journal:** ❌ Not collected (local-only documentDirectory)
**Diary, Relationships, Pronunciation history:** ❌ Not collected (local-only)

---

## E. Age Rating — ⚠️ Manuel (Apple API settable değil)

### Questionnaire answers

| Apple question | Cevap |
|---|---|
| Cartoon / Fantasy Violence | None |
| Realistic Violence | None |
| Sexual Content / Nudity | None |
| Profanity / Crude Humor | None |
| Mature / Suggestive Themes | **Infrequent / Mild** (Flört mode references dating) |
| Horror / Fear | None |
| Medical / Treatment Info | None |
| Alcohol / Tobacco / Drug References | **Infrequent / Mild** (Bar + Sipariş bar/içecek) |
| Simulated Gambling | None |
| Gambling | None |
| Unrestricted Web Access | None |
| User-Generated Content | None |

**Beklenen Result:** `12+`

---

## F. Version Information — ✅ Otomasyondan geçer (asc-sync.ts)

Aşağıdakileri elinle yazmana gerek yok — `gh workflow run asc-sync.yml` tıklayınca **TR + EN locales** otomatik dolar. Ama eğer hızlı manuel paste istiyorsan:

### App Name (TR)
```
Lafla: İngilizce Konuşma
```

### App Name (EN)
```
Lafla: English Speaking
```

### Subtitle (TR)
```
Donma. Konuş. Türkçe ipuçlu.
```

### Subtitle (EN)
```
Stop freezing. Speak. Turkish hints.
```

### Promotional Text (TR)
```
Lafla geldi. 7 mod, 971 sahne, IELTS Speaking, fonem drill, akıllı NPC konuşmaları. Türkçe ipuçlu hata feedback. Flörtten mülakata, donma. Konuş.
```

### Promotional Text (EN)
```
Lafla just launched. 7 modes, 971 scenarios, IELTS Speaking, phoneme drills, smart NPC conversations. Turkish-language error feedback. Stop freezing.
```

### Keywords (TR)
```
ingilizce konuşma,ielts speaking,flört ingilizcesi,yds,toefl,mülakat,telaffuz,akıcı,fonem
```

### Keywords (EN)
```
speak english,esl turkish,fluency,pronunciation,phoneme,ielts,toefl,conversation,interview
```

### Description (TR)
> Bkz. `apps/mobile/scripts/asc-sync.ts` METADATA.tr.description — 1800 char. Hot-copy:

```
Yabancıyla İngilizce konuşurken donmak yok. Lafla, Türkçe düşünen birine göre tasarlanmış konuşma pratiği uygulaması.

Her sahne 60 saniyenin altında. Telefonun kasarsa kasasın — Lafla beklemiyor, anında geri bildirim veriyor.

✨ NE BULURSUN

🎯 7 mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS Speaking
🎬 971 gerçek sahne — A1 başlangıçtan C2 ileri seviyeye CEFR haritası
🎙️ Phoneme Drill — Türk kulağı için zor sesleri (th, æ, v/w) targetli alıştırmalar
🎧 Dinleme + yazım modu — sessiz ortamda da pratik yap
🇹🇷 Türkçeye özel hata yakalama — article eksik, "I am go" hatası, "make picture" tuzakları
⚡ 3 saniyenin altında geri bildirim — donduğunda Lafla zaten yanıt vermiş
🧠 Akıllı konuşma — NPC karakterler doğal "Hmm, evet,..." başlangıçlarla cevap veriyor
💭 Voice Journal — kendi sesini kaydet, 1 hafta sonraki sesinle karşılaştır
🎨 Karanlık, premium tasarım — gözünüzü yormaz, gece de çalışır

🤔 BU UYGULAMA NEDİR?

Lafla, "İngilizceyi bilmek" ile "İngilizce konuşmak" arasındaki uçurumu kapatır. Sınav notun yüksek ama kafedeki Amerikalıyla 30 saniye sonra terliyorsun. Match'te mesaj geldi, 5 dakika düşünüyorsun. Lafla bu boşluğu kapatmak için var — 971 gerçek senaryo, hepsi ön-üretilmiş, hiçbiri AI hallüsinasyonu değil. Cevapların Lafla sunucularına gönderilmez; sesli giriş iOS konuşma tanıma sistemi tarafından işlenebilir.

🚀 NEDEN LAFLA?

Çoğu uygulama İngilizceyi çeviri olarak öğretir. Lafla, Türk düşünce yapısının nerede tıkandığını bilir:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Her sahnede bu spesifik tuzaklar hedef alınmış. Her düzeltme Türkçe açıklamalı — "neden hata olduğunu" anla, ezberleme.

🎓 IELTS Speaking moduyla Part 1, 2, 3 simulasyonu — band 7+ için gerekli yapıyı kazan.

💎 LAFLA PRO ÜYELİK

Tüm 971 sahneye erişim, sınırsız tekrar, yönlendirmeli telaffuz pratiği, IELTS Band tahmini, kişisel zayıflık raporu ve gelişmiş ilerleme paneli.

📋 Aylık ve yıllık planlar mevcut. App Store satın alma ekranı onaydan önce kesin yerel fiyatı ve faturalama dönemini gösterir.
🔄 Otomatik yenilenir; iPhone Ayarlar → Apple Kimliği → Abonelikler menüsünden istediğin zaman iptal edebilirsin
⏰ İptal etmediğin sürece dönem sonunda otomatik yenilenir
📜 Şartlar: https://berkdemirokk.github.io/lafla/terms.html · Gizlilik: https://berkdemirokk.github.io/lafla/privacy.html

Destek: berkkdemirok@gmail.com
```

### Description (EN)
```
Stop freezing when you have to speak English. Lafla is built for Turkish speakers who can read English but lock up the moment a conversation starts.

Every scene runs under 60 seconds. Real moments, real corrections, sub-3-second feedback.

✨ WHAT YOU GET

🎯 7 modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS Speaking
🎬 971 real scenarios — CEFR-mapped from A1 to C2
🎙️ Phoneme Drill — targeted practice for sounds Turkish ears confuse (th, æ, v/w)
🎧 Listen & Transcribe — practice in silent environments too
🇹🇷 Turkish-tailored error feedback — dropped articles, "I am go" mistakes, "make picture" traps
⚡ Sub-3-second feedback loop — corrections land before the freeze sets in
🧠 Smart conversation — NPCs reply with natural "Hmm, yes,..." openers; less scripted feel
💭 Voice Journal — record yourself, compare your voice from a week ago
🎨 Dark, premium design — readable at night, no eye fatigue

🤔 WHAT IS THIS?

Lafla closes the gap between "knowing English" and "speaking English." You scored high on a translation test but you sweat 30 seconds into a conversation with an American. A Match wrote, you spent five minutes drafting one reply. Lafla is built for that gap — 971 real scenarios, all pre-authored, zero runtime AI hallucination. Answers are not sent to Lafla servers; voice input may be processed by iOS Speech Recognition.

🚀 WHY LAFLA?

Most apps teach English as translation. Lafla knows where Turkish thinking gets stuck:

• "Want make appointment" → "I'd like to make an appointment"
• "I have problem" → "I'm having an issue with..."
• "I am go to home" → "I'm going home"

Every scene targets these specific traps. Every correction is explained in Turkish — understand the "why," don't just memorize.

🎓 IELTS Speaking mode covers Parts 1, 2, and 3 — the structure you need for band 7+.

💎 LAFLA PRO MEMBERSHIP

All 971 scenes unlocked, unlimited replays, guided pronunciation practice, IELTS Band estimate, personal weakness report, advanced progress dashboard.

📋 Monthly and yearly plans are available. The App Store purchase sheet shows the exact localized price and billing period before confirmation.
🔄 Auto-renews; cancel anytime in iPhone Settings → Apple ID → Subscriptions
⏰ Renewal continues at the end of each period unless cancelled
📜 Terms: https://berkdemirokk.github.io/lafla/terms.html · Privacy: https://berkdemirokk.github.io/lafla/privacy.html

Support: berkkdemirok@gmail.com
```

### What's New (TR)
```
Lafla — ilk sürüm. Konuş, çalış.

🎯 7 mod, tek akış: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS
🎬 971 oynanabilir sahne — A1'den C2'ye CEFR ile haritalı
🎙️ Phoneme Drill — Türk kulağı için zor sesleri targetli alıştır
🎧 Dinle + yaz modu — sessiz ortamda da pratik
🇹🇷 Türkçeye özel hata geri bildirimi (article, doğrudan çeviri tuzakları)
⚡ Sub-3-saniye geri bildirim — donduğunda Lafla zaten cevap vermiş
🧠 Akıllı konuşma — NPC karakterler doğal başlangıçlarla konuşuyor
💭 Voice Journal — kendi sesini kaydet, ilerlemeyi duy
🌙 Neon Noir tema — premium, gece dostu

Geri bildirim: berkkdemirok@gmail.com
```

### What's New (EN)
```
Lafla — first launch. Speak. Work.

🎯 7 modes, one feed: Dating, Work, Bar, Airport, Daily, Ordering, IELTS
🎬 971 scenarios playable at launch — CEFR-mapped A1 to C2
🎙️ Phoneme Drill — targeted practice for sounds Turkish ears confuse
🎧 Listen & Transcribe — practice in silent environments
🇹🇷 Turkish-tailored error feedback (articles, direct-translation traps)
⚡ Sub-3-second feedback loop
🧠 Smart conversation — NPCs reply with natural openers
💭 Voice Journal — record yourself, hear your progress
🌙 Neon Noir theme — premium, night-friendly

Feedback: berkkdemirok@gmail.com
```

### URLs

| Field | Value |
|---|---|
| Support URL | `https://berkdemirokk.github.io/lafla/` |
| Marketing URL | `https://berkdemirokk.github.io/lafla/` |
| Privacy Policy URL | `https://berkdemirokk.github.io/lafla/privacy.html` |

---

## G. Screenshots — ⚠️ Manuel (henüz tasarlanmadı)

6.7" iPhone (zorunlu) → `1290 × 2796 px`, 6 frame:

1. **Hero** — Lafla wordmark + 7 mode chips
2. **Modes Feed** — TikTok swipe mockup
3. **Scenario in-progress** — chat moment with red underline error
4. **Contrastive Feedback** — money shot, TR correction card
5. **Progress / CEFR** — fluency dashboard
6. **Paywall** — yearly default + restore link

> **Detaylı brief** `docs/APP_STORE_METADATA.md` Section 7.
>
> **Tool:** Figma + manual design (~4h) VEYA AppMockUp template (~1h).

---

## H. App Review Information

### Sign-in required
```
Yes — demo credentials provided
```

### Demo Account — ⚠️ Manuel (account creation prohibited for Claude)

> Bu hesabı Supabase Auth → Users → "Add user" ile **sen** oluşturursun.
>
> **Reasoning:** Claude bu hesabı oluşturmak için Supabase admin işlem gerek; "creating accounts" safety rules altında **prohibited**. Submit'ten önce sen tek seferlik yaparsın, sonra ASC'de rotate edersin.

Template (ASC web UI'sına gir):

| Field | Value |
|---|---|
| Username | `apple_reviewer_<date>@lafla.app` |
| Password | <strong, rotate per submission> |

Sonra Supabase'de RevenueCat entitlement'ı manuel grant et (kullanıcı id ile).

### Notes (paste'le ASC "Notes" box'a)

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

The 971 guided scenarios are pre-authored and scored on-device. Free Chat, Emergency English, and custom-scenario generation also run on-device with deterministic intent, entity, and conversation-state rules. Text entered in those tools is not sent to an AI provider or Lafla server. Input/output safety filters are applied locally. Voice Journal audio remains local.

Full reviewer brief in the included APP_REVIEW_NOTES.md attached to this submission. Questions: berkkdemirok@gmail.com (Istanbul business hours, <4h response).
```

### Contact Info
```
Email: berkkdemirok@gmail.com
```

---

## I. Build Selection

```
TestFlight → Builds → 0.9.1 (15) → Add to "1.0 — Prepare for Submission"
```

---

## J. Submit for Review — ⚠️ Manuel (irreversible)

> **Claude bunu yapmaz.** Apple'a gönderim geri-dönüşsüz aksiyon, sen tıklarsın.
>
> Önkoşul: D + E + F + G + H + I tamam.
> ASC web UI'sında sağ üstte **"Add for Review"** → review uyarılarını gözden geçir → **"Submit to App Review"**.

---

## Process Summary

```
1. ASC web UI → app yarat (bundleId, SKU, primary lang)              MANUAL ~3 dk
2. App Information (A) — category, content rights                    MANUAL ~2 dk
3. Pricing (B) — Free                                                MANUAL ~1 dk
4. IAP Products (C) — 2 product create                               MANUAL ~10 dk
5. App Privacy (D) — Privacy Nutrition questionnaire                 MANUAL ~5 dk
6. Age Rating (E) — questionnaire                                    MANUAL ~3 dk
7. v0.9.1 build TestFlight'a düşünce: "1.0 — Prepare for Submission" version yarat
8. asc-sync.ts (F) — pnpm run asc:sync:apply VEYA gh workflow run    AUTO ~30 sn
9. Screenshots (G) — tasarla + upload                                MANUAL ~4 sa
10. Demo Account (H) — Supabase'de yarat + ASC'ye paste              MANUAL ~5 dk
11. Notes (H) — bu dosyadan paste                                    MANUAL ~1 dk
12. Build Selection (I) — 0.9.1 (15)'ı attach                        MANUAL ~1 dk
13. Submit for Review (J)                                            MANUAL ~1 dk

Toplam manuel: ~5 saat (büyük kısım screenshots)
Toplam otomatik: ~30 saniye (text metadata sync)
```

---

**Doc owner:** ASC submission lead
**Version:** 1.0 (paste-ready)
**Last updated:** 2026-05-23
