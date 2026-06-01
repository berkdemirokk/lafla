# App Store Submission — Final Checklist

> **Last updated:** 2026-05-26 (v1.0.0 submission audit sonrası)
> **Status:** Kod tarafı production-ready. v1.0.0 build 19 EAS'a yüklenmek üzere. Aşağıdaki manuel adımlar tamamlanınca "Submit for Review" basabilirsin.
>
> **2026-05-26 audit sonrası değişen kritik alanlar:**
> - Privacy policy (`docs/privacy.html`) AdMob disclosure ile güncellendi — eski "no third-party ad SDKs" iddiası kaldırıldı. ATT bölümü gerçek SDK davranışına hizalandı.
> - ATT prompt metni (`app.json` NSUserTrackingUsageDescription + expo-tracking-transparency.userTrackingPermission) sadece reklam framing'ine indirgendi; "pratik önerileri" PostHog ima'sı çıkarıldı.
> - Version 0.9.15 → **1.0.0**, buildNumber 18 → **19**.
> - Home empty state "Daha çok sahne yakında" → "Bu filtrede sahne yok" (2.1 "coming soon" tetiği kaldırıldı).
> - Auth signup ekranına ToS + Privacy ack satırı eklendi (Welcome ekranındakine paralel).
> - Paywall anonymous user uyarısı eklendi (hesapsız satın almada cross-device restore çalışmaz).
> - Hesap silme modali artık silinecek email adresini açıkça gösteriyor.
> - `apps/web/privacy.html` stale Maya/Groq/Cerebras/Gemini referansları temizlendi, AdMob eklendi.
>
> **v0.9.0 sonrası değişen alanlar (öncelikle güncelle):**
> - Mod sayısı 6 → **7** (IELTS Speaking geri eklendi)
> - Sahne sayısı ~480 → **935** (daily 268, work 259, flirt 141, order 93, airport 89, ielts 44, bar 41)
> - 2 yeni side-rail mod: Phoneme Drill + Listen Mode
> - Yıllık IAP **₺999/yıl** geri eklendi — Submission'a alın (eskiden cancelled deniyordu, artık prod paywall'da live)
> - Smart conversation, NPC bridge phrases, Voice Journal — description body'de bahset

Bu doküman 6-mod radical cut sonrası (commit `81423f8`) başlatıldı, v0.9.0 (commit `4edb017`) ile güncellendi. Kod-tarafı blocker'lar hepsi commitlendi; aşağıdakiler senin tarayıcı + cihaz ile yapacağın işler.

---

## A. App Store Connect (ASC) — Web UI

ASC'de https://appstoreconnect.apple.com → My Apps → Lafla.

### A.1 App Information

- [ ] **Primary Language:** Turkish (Turkey)
- [ ] **Bundle ID:** `com.lafla.app` (zaten provisioned)
- [ ] **SKU:** `LAFLA-IOS-001`
- [ ] **Primary Category:** Education
- [ ] **Secondary Category:** Lifestyle
- [ ] **Content Rights:** "Does Lafla contain, show, or access third-party content?" → **No** (tüm içerik original)
- [ ] **Age Rating:** Edit → answers from `docs/APP_STORE_METADATA.md` Section 1.4 → Result should be **12+**

### A.2 Pricing and Availability

- [ ] **Price:** Free (paywall içeride, IAP üzerinden)
- [ ] **Availability:** All countries, **Türkiye primary**
- [ ] **App Store Distribution:** Available

### A.3 Subscription (In-App Purchase)

- [ ] `lafla.premium.monthly` ürünü konfigüre — Lafla Pro aylık abonelik
  - Localized name (TR): "Lafla Pro Aylık"
  - Localized name (EN): "Lafla Pro Monthly"
  - Price tier: TR Tier 30 (₺99/ay) veya doğrudan custom
  - Auto-renewal: Yes
- [ ] `lafla.premium.yearly` ürünü konfigüre — Lafla Pro yıllık abonelik **(2026-05-23: geri eklendi)**
  - Localized name (TR): "Lafla Pro Yıllık"
  - Localized name (EN): "Lafla Pro Yearly"
  - Price tier: TR Tier 200 (₺999/yıl) veya doğrudan custom
  - Auto-renewal: Yes
  - Subscription Group: Aynı grupta monthly ile (Apple upgrade/downgrade için zorunlu)
- [ ] **Optional but recommended:** Intro offer (7-day free trial) konfigüre et — paywall'da `trialAvailable` flag'i için RevenueCat getOffering()'in intro period'u görmesi gerek
- [ ] **RevenueCat:** Offering "default" altında iki package: `$rc_monthly` ve `$rc_annual`. Hem monthly hem yearly Apple ürünleri attached.

### A.4 App Privacy

- [ ] Privacy Nutrition Label doldur — `docs/APP_STORE_PRIVACY_NUTRITION.md` rehber.
  - Contact Info: Email (Account holder), required for support
  - Audio Data: Microphone, recorded → "Not linked to user", purpose: App Functionality (pronunciation evaluation)
  - Usage Data: Product Interaction → "Not linked to user" (post-ATT), purpose: Analytics
  - Diagnostics: Crash Data → "Not linked to user", purpose: App Functionality
- [ ] **Tracking question:** "Does Lafla use data for tracking?" → **YES** ⚠️ AdMob personalized ads + PostHog'un ATT-conditional tracking capability'si "Yes" gerektirir. (NSPrivacyTracking: true app.json'da, tracking domains da declared.) "No" cevabı 5.1.2 mismatch reject sebebi.

### A.5 Version Information (1.0)

- [ ] **What's New:** `docs/APP_STORE_METADATA.md` Section 6'dan TR + EN kopyala
- [ ] **Description (TR):** Section 2'den kopyala (1,400 char)
- [ ] **Description (EN):** Section 3'ten kopyala
- [ ] **Keywords (TR):** Section 4'ten kopyala (`ingilizce konuşma,ielts speaking,...`)
- [ ] **Keywords (EN):** Section 5'ten kopyala
- [ ] **Promotional Text (TR):** Section 8'den
- [ ] **Promotional Text (EN):** Section 8'den
- [ ] **Subtitle (TR):** `Donma. Konuş. Türkçe ipuçlu.`
- [ ] **Subtitle (EN):** `Stop freezing. Speak. Turkish hints.` (placeholder — Section 1.2 kararına göre)
- [ ] **App Name:** `Lafla: İngilizce Konuşma`
- [ ] **Support URL:** `https://berkdemirokk.github.io/` (root; app-ads.txt lives here)
- [ ] **Marketing URL:** (boş bırak veya aynı)
- [ ] **Privacy Policy URL:** `https://berkdemirokk.github.io/lafla/privacy.html`

### A.6 Screenshots (6.7" iPhone — zorunlu)

- [ ] **6 screenshot** — `docs/APP_STORE_METADATA.md` Section 7 detaylı brief verir:
  1. Hero (brand statement)
  2. Modes feed (TikTok mockup)
  3. Scenario in-progress
  4. Contrastive feedback (TR correction card — money shot)
  5. Progress / streaks
  6. Pricing / Lafla Pro paywall

- [ ] **Ölçüler:** 1290 × 2796 px (6.7" iPhone)
- [ ] **Üretim seçenekleri:**
  - Figma + manual design (ideal, ~4 saat)
  - AppMockUp / Screely / Hotpot template (~1 saat)
  - Gerçek iPhone'da app'i aç, screenshot al, üstüne caption ekle (~30 dk ama estetik düşük)
- [ ] Her screenshot için **caption overlay** (Section 7'de yazıldı)
- [ ] **TR locale:** 6 screenshot Türkçe caption
- [ ] **EN locale (US):** 6 screenshot İngilizce caption (sözlü ifadeler Section 7 sonunda)

### A.7 App Review Information

- [ ] **Sign-in required:** Yes
- [ ] **Demo Account:**
  - Username: `apple_reviewer_2026@lafla.app` (bir test hesabı oluştur, premium grant et)
  - Password: (rotated each submission, random güçlü şifre)
  - Notes: `docs/APP_REVIEW_NOTES.md` Section 1
- [ ] **Contact info:** `berkkdemirok@gmail.com`
- [ ] **Notes paste:** `docs/APP_STORE_METADATA.md` Section 9 → "Notes (paste into the 'Notes' box)" copy/paste

### A.8 Build Selection

- [ ] TestFlight build geldi mi kontrol et: ASC → TestFlight → Builds
- [ ] **Build numarası:** EAS server'da auto-increment; 2026-05-20 build'i `81423f8` veya sonrası commit'ten gelecek
- [ ] Build'i Version 1.0 altında **Submit for Review**'a hazır olarak seç

---

## B. Pre-Submission Smoke Test (FİZİKSEL CİHAZ)

> macOS olmadığı için Windows'tan yapılamaz. **Bir Apple Beta tester (sen + 1 arkadaş yeter)** TestFlight üzerinden cihaza yükleyip:

- [ ] **Fresh install:** Daha önce hiç Lafla açmamış cihazda
- [ ] **Splash 300ms** — donmaz, geçişler smooth
- [ ] **Auth ekranı** — Apple Sign-In butonu görünür
- [ ] **Onboarding 4 adım** — welcome → interests (6 chip, en az 2 zorla) → name → cefr → bitince ATT prompt
- [ ] **Home feed** — TikTok-style swipe, sahneler 7 mod arasından geliyor (Flört · İş · Bar · Havaalanı · Günlük · Sipariş · IELTS)
- [ ] **Bir sahne aç** — SETUP → DRILL → SCENE → VERDICT akar
- [ ] **Mikrofon izni** — voice exercise'da prompt çıkıyor mu
- [ ] **STT** — "I'd like a coffee, please" söyle, transcript geliyor mu
- [ ] **Smart hint** — 5sn idle sonrası hintBox glow başlıyor mu (Faz 3)
- [ ] **NPC bridge phrase** — bazı NPC turn'lerinde "Right, ...", "Hmm, ..." gibi natural openers görünüyor mu (Faz 3, ~30% turn)
- [ ] **Phoneme Drill** — /phoneme-drill route 5-drill session akıyor mu (Faz 2)
- [ ] **Listen Mode** — /listen-mode route TTS clip + typing input akıyor mu (Faz 2)
- [ ] **Voice Journal** — /voice-journal kayıt + timeline, sweep race fix doğrula (Faz 2)
- [ ] **Profile** — 7 mod rail görünüyor, streak ve XP doğru
- [ ] **Lafla Pro row** — Profile'dan tıklanınca paywall açılıyor
- [ ] **Paywall yearly default** — segmented toggle Yıllık preselected, ₺999/yıl + %X indirim pill
- [ ] **Paywall monthly toggle** — tap ederse ₺99/ay fiyat değişiyor
- [ ] **Restore Purchases** — Settings → "Satın alımları geri yükle" → "Aktif abonelik bulunamadı" Alert
- [ ] **Account deletion** — Settings → "Hesabımı sil" → "SİL" yaz → Supabase user gerçekten silindi mi (Supabase dashboard kontrol)
- [ ] **Privacy URL** — Settings → "Gizlilik politikası" → tarayıcıda 200 dönüyor mu

> **Faz 1-3 spesifik test detayları:** `docs/TESTFLIGHT_v0.9.md` — P0/P1/P2 split + 35-45dk full pass plan.

### Eğer Pages live değilse (404)

- [ ] GitHub repo Settings → Pages → manual rebuild
- [ ] Veya: `gh api -X POST repos/berkdemirokk/lafla/pages/builds`
- [ ] Beklenti: 1-3 dakika içinde `https://berkdemirokk.github.io/lafla/privacy.html` 200 döner

---

## C. Submission

- [ ] ASC'de "Submit for Review" → Apple kuyruğa alır
- [ ] Beklenen review süresi: **24-48 saat** (2026'da ortalama)
- [ ] Eğer reject gelirse: APP_REVIEW_NOTES.md'deki "Anticipated Concerns" tablosuna bak
- [ ] Eğer approve: app live, **gerçek kullanıcı feedback'i için 100 review hedefi 7 gün** (Section 10 ASO notes)

---

## D. Submission Sonrası — İlk 48 saat

> ⚠️ **`EXPO_PUBLIC_SENTRY_DSN` Submission ÖNCESİ EAS Secret olarak set edilmiş olmalı** — Privacy Nutrition Label "Crash Data" deklare ediyor, DSN olmadan Sentry no-op olur ve Apple'a yalan söylemiş olursun. Setup için: `.github/SECRETS.md` → EAS Secrets bölümü.

- [ ] **Sentry crash event'i doğrula** — TestFlight'ta intentionally throw çıkar, Sentry dashboard'da event geldi mi kontrol et.
- [ ] **PostHog key doldur** (opsiyonel — ATT promptu artık analytics referansı içermiyor, Apple Review için zorunlu değil; ürün analitiği istiyorsan EAS Secret'a ekle.)
- [ ] **TestFlight beta tester davet et** (50+ kişi hedef)
- [ ] **App Store rank'i izle** (Sensor Tower / AppFollow trial)
- [ ] **Crash dashboard kur** (Sentry alert kuralı: 5+ crash/hour → Slack/email)
- [ ] **Sandbox IAP doğrula** — hem aylık hem yıllık tier ile satın alma testi (iki ayrı sandbox tester)

---

## E. v1.1 Sonraki Yol Haritası

> Hızlı follow-up'lar — submission'ı bloke etmedi ama launch sonrası 1-2 hafta içinde:

- Free tier hard gate (örn. 3 sahne/mod ücretsiz, sonrası Lafla Pro)
- Push notifications metin döngüsü (`lib/notifications.ts` scaffold dolu değil)
- `lib/engine.ts` için Jest testleri
- Bundle splitting — `lessons.ts` lazy require
- Türk error patterns DB → 200+ kalıp (şu an `lib/mistake-patterns.ts` 30KB, hedef 60KB+)
- Continuous STT (`expo-speech-recognition` continuous: true)

---

## Quick Reference

| Soru | Cevap |
|---|---|
| Bundle ID | `com.lafla.app` |
| Lafla Pro IAP IDs | `lafla.premium.monthly` (₺99/ay), `lafla.premium.yearly` (₺999/yıl) |
| RevenueCat Offering | `default` (packages: `$rc_monthly`, `$rc_annual`) |
| Master commit (submit hazır) | `4edb017` (v0.9.0) veya sonrası |
| Latest tag | `lafla-v0.9.0` |
| TestFlight pipeline | Auto on `lafla-v*` tag push; manual: `gh workflow run expo-testflight.yml` |
| Privacy URL | `https://berkdemirokk.github.io/lafla/privacy.html` |
| Terms URL | `https://berkdemirokk.github.io/lafla/terms.html` |
| Support URL | `https://berkdemirokk.github.io/` |
| Support email | `berkkdemirok@gmail.com` |
| Demo account location | ASC → App Review Information → Demo Account |
| Apple Team ID | `44B88YK392` |
| EAS Project ID | `a7b18723-d431-481b-92cd-18a4c1104171` |
| Mod count | **7** (Flört · İş · Bar · Havaalanı · Günlük · Sipariş · IELTS) |
| Scene count | **935** |
| Side-rail modes | Phoneme Drill, Listen & Transcribe, Voice Journal |
| Faz 1-3 test plan | `docs/TESTFLIGHT_v0.9.md` |
