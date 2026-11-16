# ASC Paste Sheet — Lafla v0.9.x

> **Amaç:** App Store Connect web UI'sında 18 form alanına copy-paste etmek için tek dosya. APP_STORE_METADATA.md zaten kanonik kaynak ama orada açıklamalar var, paste için friction. Bu dosya sadece **boş kopya-yapıştır blokları**.
>
> **Hangi alanlar otomasyondan geçer?** `scripts/asc-sync.ts` (workflow_dispatch: `gh workflow run asc-sync.yml`) **descriptions + keywords + promotional text + what's new + URL'ler** alanlarını ASC API üzerinden push eder; **app name + subtitle** sadece opt-in `--app-info` flag'i ile push edilir (bkz. F). Aşağıda kalan alanlar **manuel** (Apple API'den settable değil VEYA financial/irreversible).

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

## F. Version Information + App Name/Subtitle — ✅ Otomasyondan geçer (asc-sync.ts)

Aşağıdakileri elinle yazmana gerek yok. Kaynak: `apps/mobile/scripts/asc-sync.ts` → `METADATA` (bu bloklar onunla birebir aynı, v1.0.6).

- **Description / keywords / promo / what's new / URL'ler** → her `asc-sync` çalıştırmasında (`--apply` ile) push edilir.
- **App Name / Subtitle** → sadece `--app-info` flag'i verilirse push edilir (opt-in; normal run canlı app adını değiştirmez). Bkz. "asc-sync flag'leri" aşağıda.
- Emoji'ler API push'unda otomatik silinir; buradaki metinler zaten emojisiz.

### App Name (TR) — 30/30
```
Lafla: İngilizce Konuşma Öğren
```

### App Name (EN) — 29/30
```
Lafla: Learn English Speaking
```

### Subtitle (TR) — 30/30
```
Günlük 10 Kelime, Sesli Pratik
```

### Subtitle (EN) — 30/30
```
Daily 10 Words, Voice Practice
```

### Promotional Text (TR) — 149/170
```
Yeni: Bugünün 10 Kelimesi! Her gün seviyene uygun 10 kelime, sesli okunuş ve 2 dakikalık test. Gerçek sahnelerle konuşma pratiği; tamamen algoritmik.
```

### Promotional Text (EN) — 147/170
```
New: Today's 10 Words! Ten fresh words a day at your level, with audio and a quick 2-minute check. Real-scene speaking practice, fully algorithmic.
```

### Keywords (TR) — 95/100
```
ielts,yds,yökdil,toefl,speaking,english,telaffuz,ezber,sohbet,dil,yabancı,akıcı,mülakat,dinleme
```

### Keywords (EN) — 97/100
```
ielts,toefl,turkish,esl,vocabulary,vocab,pronunciation,fluency,conversation,interview,accent,cefr
```

### Description (TR) — 2,639/4000
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

### Description (EN) — 2,571/4000
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

### What's New (TR)
```
Yeni: Bugünün 10 Kelimesi

• Her gün seviyene göre 10 yeni kelime, örnek cümle ve sesli okunuş
• 2 dakikalık hızlı testle pekiştir, kelimeler tekrar listene eklensin
• Günlük kelimeleri bitirmek serini korur
• Akşam hatırlatması: kelimeler bitmediyse haber veririz
• Genel performans ve kararlılık iyileştirmeleri
```

### What's New (EN)
```
New: Today's 10 Words

• Ten new words a day at your level, with example sentences and audio
• A 2-minute quick check, then every word joins your review list
• Finishing your daily words keeps your streak alive
• Evening reminder if today's words are still waiting
• General performance and stability improvements
```

### URLs

| Field | Value |
|---|---|
| Support URL | `https://berkdemirokk.github.io/lafla/` |
| Marketing URL | `https://berkdemirokk.github.io/lafla/` |
| Privacy Policy URL | `https://berkdemirokk.github.io/lafla/privacy.html` |

### asc-sync flag'leri

| Komut (apps/mobile içinden) | Ne yapar |
|---|---|
| `pnpm asc:sync` | Dry-run: pre-flight limit kontrolü + version localization / review detail / build attach için ne PATCH'leneceğini yazar. Yazma yok. |
| `pnpm asc:sync -- --app-info` | Yukarıdaki + ASC'deki mevcut name/subtitle ile `METADATA` farkını yazar (`name: "eski" → "yeni"`). Yazma yok. |
| `pnpm asc:sync:apply` | Gerçek push (name/subtitle HARİÇ). |
| `pnpm asc:sync:apply -- --app-info` | Gerçek push + name/subtitle PATCH (`appInfoLocalizations`). Sadece değişen alanlar gönderilir. |

- **Pre-flight:** ağ çağrısından önce name/subtitle ≤30, keywords ≤100, promo ≤170, description/whatsNew ≤4000 kontrol edilir; aşan alan varsa script hiçbir şey push etmeden abort eder.
- **Editable appInfo şartı:** name/subtitle sadece düzenlenebilir bir appInfo varken (yeni version "Prepare for Submission" durumundayken) değiştirilebilir; yeni isim o version yayınlanınca canlıya çıkar. Sadece canlı (READY_FOR_DISTRIBUTION) appInfo varsa script uyarıp atlar.
- **Credential env'leri:** `ASC_KEY_ID` (veya `APP_STORE_CONNECT_KEY_ID`), `ASC_ISSUER_ID` (veya `APP_STORE_CONNECT_ISSUER_ID`), ve `ASC_PRIVATE_KEY_PATH` (.p8 dosya yolu) **veya** `ASC_PRIVATE_KEY` (.p8 PEM içeriği; `APP_STORE_CONNECT_PRIVATE_KEY[_PATH]` alias'ları da okunur).
- **GitHub Actions:** `asc-sync.yml` workflow'u şu an sadece `apply` input'unu destekliyor; `--app-info` için workflow'a ayrı bir input eklenmeli (henüz yok) — o zamana kadar name/subtitle push'u lokal çalıştırılır.

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
8. asc-sync.ts (F) — pnpm asc:sync:apply [-- --app-info] VEYA gh workflow run  AUTO ~30 sn
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
**Last updated:** 2026-11-16 (F bölümü asc-sync.ts METADATA ile senkron)
