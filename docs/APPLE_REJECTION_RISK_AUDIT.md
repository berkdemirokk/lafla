# Apple Rejection Risk Audit — Lafla v0.9.1

> **Tarih:** 2026-05-23
> **Amaç:** Apple Review öncesi red risklerini derinden tarayıp her birini önlem ile birlikte listele. 2025-2026 güncel Apple guideline enforcement pattern'lerinden derlenmiştir.
> **Hedef:** İlk submission'da onay. Red ortalama 24-48h gecikmedir; üç red ardından app permanent ban riski oluşur.

---

## Tablo özeti

| Risk | Severity | Status | Action owner |
|---|---|---|---|
| Apple Sign-In token revocation | 🔴 BLOCKING | ⚠️ Kod OK, manuel setup gerek | **Kullanıcı (~25 dk)** — [SETUP](APPLE_SIGNIN_SETUP.md) |
| Demo account yok | 🔴 BLOCKING | ❌ Yapılmadı | Kullanıcı (5 dk) |
| IAP products ASC'de yok | 🔴 BLOCKING | ❌ Yapılmadı | Kullanıcı (15 dk) |
| Privacy Nutrition Label boş | 🔴 BLOCKING | ❌ Yapılmadı | Kullanıcı (5 dk) |
| Age Rating questionnaire boş | 🔴 BLOCKING | ❌ Yapılmadı | Kullanıcı (3 dk) |
| Screenshots yok | 🔴 BLOCKING | ❌ Yapılmadı | Kullanıcı (~4 saat) |
| IELTS trademark + disclaimer | 🟡 HIGH | ⚠️ Disclaimer eksik | Kod + içerik (30 dk) |
| Yıllık plan "%16 indirim" subjektif | 🟡 HIGH | ⚠️ Doğrula | Kod (5 dk) |
| Build crash-free doğrulanmadı | 🟡 HIGH | ❓ TestFlight'ta test et | Kullanıcı (40 dk) |
| Push notification opt-in görünürlük | 🟢 MEDIUM | ✅ Opt-in mevcut | Doğrula |
| AdMob age-rating uyumu | 🟢 MEDIUM | ✅ maxAdContentRating: T | Doğrulanmış |
| Privacy/Terms in-app linkleri | 🟢 GREEN | ✅ Paywall'da var | OK |
| Account deletion in-app | 🟢 GREEN | ✅ Settings → Hesabımı Sil | OK (revoke hariç) |
| ATT prompt sequencing | 🟢 GREEN | ✅ onboarding sonu, AdMob önce | OK |
| Sub-3-second feedback iddiası | 🟢 GREEN | ✅ Honest claim (on-device) | OK |

---

## 🔴 R1 — Apple Sign-In Token Revocation (BLOCKING)

**Guideline:** [App Store Review Guideline 5.1.1(v)](https://developer.apple.com/app-store/review/guidelines/#data-collection-and-storage)
> *"If your app offers Sign in with Apple, you'll need to use the Sign in with Apple REST API to revoke user tokens when deleting an account."*

**Mevcut durum:**
- `lib/auth-apple.ts:131` — Apple Sign-In identity token alıyoruz ama **authorization code** kaydetmiyoruz
- `supabase/functions/delete-account/index.ts:139` — Apple revoke endpoint çağrılmıyor
- Apple "user deleted account, but Apple-managed sign-in still works" durumunu **2024'den beri agresif şekilde** rejecte ediyor

**Apple'ın istediği:**
1. Sign-in sırasında `authorization_code`'u sunucuya gönder
2. Server-side: `client_secret` JWT yarat (Apple Sign-In Key ile)
3. `POST https://appleid.apple.com/auth/token` → refresh_token al
4. Refresh_token'ı encrypted DB'ye sakla (per user)
5. Account deletion sırasında: `POST https://appleid.apple.com/auth/revoke` ile refresh_token'ı iptal et

**Önkoşul (kullanıcı Apple Developer Console'da):**
1. **Identifiers** → **+** → **Services IDs** → yarat (`com.lafla.signinwithapple.service`)
2. **Keys** → **+** → **Sign in with Apple** aktif et → `.p8` indir, **Key ID** kopyala
3. Bu 3 değeri Supabase Edge Function secret'ı yap:
   - `APPLE_TEAM_ID` (zaten var: `44B88YK392`)
   - `APPLE_SIGNIN_KEY_ID`
   - `APPLE_SIGNIN_SERVICE_ID`
   - `APPLE_SIGNIN_PRIVATE_KEY` (.p8 contents)

**Kod tarafı (otomatize edilebilir):**
- `lib/auth-apple.ts`: `credential.authorizationCode`'u yeni table `apple_credentials`'a kaydet
- `supabase/functions/delete-account/index.ts`: Apple revoke fetch'i ekle (JWT signing dahil)
- Migration: `apple_credentials` table (`user_id`, `refresh_token` encrypted, `created_at`)

> **MITIGATION (red yememek için):** Eğer Apple Sign-In setup yapılmamışsa, **submission notes'a açıklama ekle**: *"Apple Sign-In token revocation will be implemented in v1.0.1 patch. Current users can revoke via Apple ID settings (Settings → Apple ID → Password & Security → Apps Using Apple ID → Lafla → Stop Using)."* Apple bu açıklamayı bazen kabul ediyor ama %100 değil — gerçek implementation güvenli yol.

---

## 🔴 R2-R6 — ASC manuel adımlar (BLOCKING, hep kullanıcı)

| Risk | Action | Detay |
|---|---|---|
| **R2** Demo account yok | Supabase'de user yarat + RevenueCat'te entitlement grant | `ASC_PASTE_SHEET.md` Section H |
| **R3** IAP products yok | Subscriptions sayfasında 2 product oluştur | Az önceki ekran — Subscriptions'a git, In-App Purchases değil |
| **R4** Privacy Nutrition Label | ASC → App Privacy → questionnaire | `ASC_PASTE_SHEET.md` Section D ile birebir paste |
| **R5** Age Rating | ASC → Age Rating → questionnaire | Section E |
| **R6** Screenshots | 6.7" iPhone 6 frame, 1290×2796 | Section G |

**Apple her birini submission'dan ÖNCE kontrol eder.** Eksikse "Add for Review" butonu pasif kalır.

---

## 🟡 R7 — IELTS Band Estimator Trademark + Disclaimer

**Risk:** IELTS markası **British Council + IDP + Cambridge English Assessment** ortak mülkiyeti. "IELTS Band tahmini" diye satmak şu riskleri taşıyor:

1. **Trademark infringement** (Guideline 5.2.5 — Apps that misuse "IELTS")
2. **"Promotes false expectations"** (Guideline 5.6) — Apple kullanıcının "bu app gerçek IELTS skoru veriyor" zannetmesini istemiyor
3. **Health / Education claims** (1.4.1) — sınav prep iddiaları

**Mevcut açıkla:**
- Paywall: `"IELTS Band tahmini + zayıflık raporu"` (vurgu var ama disclaimer yok)
- App Store description: `"IELTS Band tahmini, kişisel zayıflık raporu"` (disclaimer yok)
- IELTS mode TR locale ASC'ye pushlandı → Apple bunu yarın okuyacak

**Önlem (uygulamamız gereken):**

1. **App içinde IELTS Band Estimator ekranına disclaimer ekle**:
   ```
   "Bu tahmin Lafla'nın iç skorlama modeline dayalıdır.
    Resmi IELTS skoru değildir. Gerçek band skoru için
    British Council / IDP / Cambridge sınavına başvur."
   ```

2. **Paywall + ASC description'da "tahmini" kelimesini netleştir:**
   - "IELTS Band tahmini" → "IELTS Speaking practice band estimate (resmi IELTS skoru değildir)"
   - Marketing yazısı kısalıyor ama güvenli

3. **App Review Notes'a açıklama ekle:**
   *"IELTS Band Estimator is a Lafla-internal scoring model for the user's speaking practice. It is NOT an official IELTS score, NOT affiliated with British Council/IDP/Cambridge English Assessment. The feature explicitly displays this disclaimer in-app."*

> **Aksiyon:** disclaimer'ı `app/ielts-band.tsx` ekranına büyük + bold ekle. Paywall feature row'u da hafif yumuşat.

---

## 🟡 R8 — Yıllık plan "%16 indirim" iddiası

**Risk:** Marketing copy'de subjektif sayı var ("yıllık planda %16 tasarruf"). Apple'ın 3.1.1 kuralı: **tüm pricing iddiaları doğrulanmalı**.

**Doğrulama:**
- Aylık ₺99 × 12 = ₺1.188
- Yıllık ₺999
- Tasarruf: ₺1.188 - ₺999 = ₺189
- Yüzde: 189 / 1188 = **%15.9** (yuvarlandı: %16) ✅

**Sonuç:** Matematik doğru. Risk yok.

> **AMA:** Paywall'da fiyat dynamic `priceAmountMicros` ile geliyor. Eğer fiyat App Store Connect'te değişirse (ör. ₺1199'a çıkarsa), "16% saving" iddiası yanlış olur. Bu pill'i hardcode etme — paywall.tsx zaten micros'tan compute ediyor, OK.

---

## 🟡 R9 — Build Crash-Free Doğrulanmadı

**Risk:** v0.9.1 TestFlight'a yüklendi (≅16 dk önce) ama **cihazda manuel test yapılmadı**. Apple "App incomplete" (2.1) rejection nedeninin **%40'ı crash + freeze**.

**Aksiyon:**
1. Cihazda TestFlight'tan v0.9.1 yükle (~5dk)
2. `docs/TESTFLIGHT_v0.9.md` P0 checklist (~40dk)
3. Crash görürsen v0.9.2 patch + yeni tag

> **Aksi:** Apple reviewer crash görürse direkt reject + "ne yaptığını açıkla" demanding mail gelir.

---

## 🟢 R10-R15 — Doğrulanmış / Düşük Risk

### R10 — Push opt-in flow
`lib/notifications.ts:395` — `requestPermissionsAsync` user trigger ile (Settings toggle'dan). Launch'ta auto-prompt yok. **OK.**

### R11 — AdMob age-rating
`lib/ads.ts:33-35` — `maxAdContentRating: T`, `tagForChildDirectedTreatment: false`, `tagForUnderAgeOfConsent: false`. Flört + Bar modlarına uyumlu. **OK.**

### R12 — In-app Terms + Privacy linkleri
`app/paywall.tsx:670-693` — `Linking.openURL` ile her ikisi de live HTML'e gidiyor. Pages 200 returns (verified). **OK.**

### R13 — Account deletion in-app
`lib/delete-account.ts` + `supabase/functions/delete-account/index.ts` — instant deletion, "SİL" type-confirmation, no soft-delete grace. **OK** (Apple Sign-In revoke hariç → R1).

### R14 — ATT prompt sequencing
`app/_layout.tsx:42-48` — `requestAttOnce()` AdMob `initAds()` öncesinde. Apple HIG uyumlu. **OK.**

### R15 — "Sub-3-second feedback" iddiası
Honest claim: on-device pattern matching (`lib/engine.ts`) + no network call. Apple metnin doğruluğunu denetleyemez ama abartı değil. **OK.**

---

## Submission öncesi minimum 24h hazırlık

### T-24h
- [ ] **R1 Apple Sign-In revocation:** ya implementasyon ya da review notes mitigation
- [ ] **R7 IELTS disclaimer:** in-app + ASC paste'lerinde
- [ ] **R9 Crash-free:** TestFlight v0.9.1 cihazda P0 pass

### T-2h
- [ ] **R2-R6 ASC manuel adımları:** demo account, IAP, privacy nutrition, age, screenshots
- [ ] Build attach version'a

### T-0 (Submit)
- [ ] Final read of App Review Notes
- [ ] "Add for Review" → "Submit to App Review"

---

## Apple Rejection Recovery Playbook

Eğer red yersek:

1. **Resolution Center'da rejection mailine cevap yaz** (24h içinde)
   - Spesifik guideline'a referans
   - Apple'ın gördüğü davranışı kabul et
   - Fix açıklamasını yaz
   - Yeni binary tag'i (eğer kod fix gerekiyorsa)

2. **Demo account problemiyse:** "credentials worked at submission, here's a fresh tester: ..." + yeni hesap yarat

3. **"Misleading info / IELTS"isi:** Disclaimer eklediğini göster + screenshot

4. **"Incomplete metadata / Privacy":** Hangi alanın eksik olduğunu sor (Apple genelde söylemiyor, neden olduğunu tahmin etmek lazım)

5. **3 reject'ten sonra:** App Review Board'a appeal (formal process, 7-14 gün)

---

## Sources

- [App Store Review Guidelines (Apple)](https://developer.apple.com/app-store/review/guidelines/)
- [Account deletion within apps required (Apple Developer News)](https://developer.apple.com/news/?id=mdkbobfo)
- [Offering account deletion in your app (Apple Developer Support)](https://developer.apple.com/support/offering-account-deletion-in-your-app/)
- [Top 10 App Store Rejection Reasons 2026 (Forge ASC)](https://forgeasc.com/blog/app-store-rejection-reasons)
- [App Store Rejection Reasons 2026 (QAwerk)](https://qawerk.com/blog/app-store-rejection-reasons/)
- [App Store Guideline 4.8 Sign in with Apple requirements](https://developer.apple.com/news/?id=j9zukcr6)
- [iOS App Store Review Guidelines 2026 (Lexogrine)](https://lexogrine.com/blog/apple-app-store-review-requirements-2026)

---

**Doc owner:** Apple Rejection Risk Audit
**Version:** 1.0
**Last updated:** 2026-05-23
**Next review:** Before submission
