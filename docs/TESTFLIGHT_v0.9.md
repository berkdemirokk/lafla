# TestFlight v0.9.0 — Manual Verification Checklist

> **Build:** `lafla-v0.9.0` (commit `4edb017`)
> **Date:** 2026-05-23
> **Tester:** TestFlight beta tester (founder + 1-2 internal)
> **Time budget:** 35-45 minutes for full pass
> **Pass criteria:** All P0 items green. P1 items can ship with known bug if non-blocking.

3-haftalık plan kümülatif (v0.7 → v0.8 → v0.9). Bu checklist v0.7.0 ve v0.8.0 build'lerinin kapsamadığı YENİ surface'lere odaklanır. v0.7 build TestFlight'a düştü, v0.8 ve v0.9 in-flight.

---

## P0 — Launch Blocker (must pass)

### 0.1 Cold Start + Splash

- [ ] **Fresh install** (TestFlight → delete → reinstall): app açılıyor
- [ ] **Splash 3D wordmark**: "Lafla" perspektif animation, halo glow (opacity ~0.22)
- [ ] **Splash → auth/onboarding** geçiş smooth, fade-in
- [ ] **No crash** ilk 30 saniyede
- [ ] **Sentry breadcrumb** Crashlytics altyapısı sessiz çalışıyor (DSN boş ise console.warn'de "[sentry] DSN not configured" dev-only log)

### 0.2 Onboarding (4 adım)

- [ ] **Welcome** ekranı görünür, "Başla" CTA aktif
- [ ] **Interests** ekranı 6 chip görünür, min 2 seçim zorla, "Atla" da çalışır
- [ ] **Name** ekranı opsiyonel, "Atla" çalışır
- [ ] **Placement test başlat** → /placement route'a redirect
- [ ] **Placement 10-question adaptive** akıyor, mid-test çıkıp tekrar girince kaldığı yerden devam (persistence fix)
- [ ] **Placement → finalize** sonrası /home'a redirect, level set
- [ ] **ATT prompt** placement bittikten sonra çıkıyor (önce DEĞİL)
- [ ] **Sentry breadcrumb** "onboarding finalize_start" + "finalize_complete" (sadece DSN dolu ise prod'a düşer)

### 0.3 Home Feed (TikTok-style)

- [ ] **Vertical swipe** çalışıyor, smooth
- [ ] **7 mod arasından sahne geliyor**: Flört, İş, Bar, Havaalanı, Günlük, Sipariş, IELTS
- [ ] **Mod chip filter** çalışıyor
- [ ] **Daily exclusive banner** üstte
- [ ] **Streak chip** spring scale animation, 360° flip YOK (game-y görünmemesi için)

### 0.4 Scene Akışı (Roleplay)

- [ ] **Sahneye gir** → SETUP phase çalışıyor, TTS audio loop çalışıyor
- [ ] **SCENE phase** chat görünüyor, NPC avatar pembe gradient
- [ ] **Mikrofon izni** prompt çıkıyor (voice exercise'da, launch'ta DEĞİL)
- [ ] **STT** "I'd like a coffee, please" söyle, transcript geliyor
- [ ] **Hint default kapalı** (matched mode + hardMode değilse 5sn sonra glow)
- [ ] **(Faz 3) 5sn idle → glow** hintBox shadow opacity 0.2 → 0.75 sin loop başlıyor
- [ ] **(Faz 3) 2 düşük skor (her ikisi <50) → force-show hint** "Sıkıştın mı? İpucu açıldı:" label
- [ ] **(Faz 3) NPC bridge phrase** ~30% turn'de "Right, ...", "Hmm, well, ...", "Hi there, ..." gibi prefix görünüyor
- [ ] **VERDICT phase** skor + CEFR delta animation
- [ ] **Achievement toast** trigger oluyor (ilk sahnede certifikate)

### 0.5 Phoneme Drill (Faz 2 yeni)

- [ ] **Profile → Phoneme Drill** route /phoneme-drill açılıyor
- [ ] **5 drill seansı** akıyor
- [ ] **Hard sound (th, æ, v)** prompted, kayıt + score görünüyor
- [ ] **Progress dots** 5'ten 5'e ilerliyor
- [ ] **Session complete event** trackEvent("phoneme_drill_session_complete") tetikleniyor

### 0.6 Listen Mode (Faz 2 yeni)

- [ ] **Profile → Listen Mode** route /listen-mode açılıyor
- [ ] **5 clip seansı** akıyor (cyan accent, phoneme drill'den ayırt edilebilir)
- [ ] **TTS clip play** kullanıcı dinleyebiliyor (replay 2x'e kadar)
- [ ] **Text input** Türkçe ipucu altında, "Yazdığını kontrol et" CTA
- [ ] **acceptedVariants** match çalışıyor (case + punctuation tolerant)

### 0.7 Filler Tolerance (Faz 2)

- [ ] **Sahnede "Uh, well, yani, I'd like a coffee"** söyle
- [ ] **Hala match alıyor** (stripped pass score 95)
- [ ] **Eski "uh" diyince fail" davranışı GİTMİŞ**

### 0.8 Voice Journal (Faz 2 sweep race fix)

- [ ] **/voice-journal aç** → record button görünüyor
- [ ] **Mic permission** prompt, izin ver
- [ ] **30sn kayıt** → save → timeline'da görünüyor
- [ ] **Aynı anda timeline focus** → load() → sweep çalışıyor AMA active recording dosyası silinmiyor (markRecordingActive race fix)
- [ ] **Yeni kayıt 2sn altı** → "Çok kısa" alert
- [ ] **Hata durumu** → Sentry captureException tetikleniyor (DSN dolu ise)

### 0.9 Paywall (Yearly default + monthly toggle)

- [ ] **Paywall aç** (Profile → Speak+ veya quota exceeded)
- [ ] **Segmented toggle** üstte (Aylık / Yıllık)
- [ ] **Yıllık preselected** (default)
- [ ] **Yıllık fiyat** ₺999/yıl, %X indirim pill (live priceAmountMicros'tan)
- [ ] **Aylık tap** → fiyat ₺99/ay'a değişiyor
- [ ] **Live billing badge** SDK gerçekten yüklendiyse görünüyor
- [ ] **Restore Purchases** çalışıyor (active abonelik yoksa "Aktif abonelik bulunamadı")
- [ ] **(Sandbox tester ile)** Yıllık satın al → entitlement açılıyor → Alert + back
- [ ] **Purchase failed flow** (mock fail) → Alert "Satın alma başarısız"

### 0.10 IAP Sandbox Test

> **Önkoşul:** App Store Connect → Users and Access → Sandbox → Tester oluştur. iPhone → Settings → App Store → Sandbox Account → bu tester'la giriş yap.

- [ ] **Aylık satın al** → Apple sandbox prompt → onaylama → entitlement açılıyor
- [ ] **Yıllık satın al** (separate sandbox account ile) → entitlement
- [ ] **Manage Subscriptions** linki çalışıyor
- [ ] **Restore Purchases** → entitlement geri geliyor

### 0.11 Apple Sign In

- [ ] **Sign Out** state'ten Apple Sign In butonu çalışıyor
- [ ] **First-time** Apple prompt → email yetkisi ver → Supabase user oluşuyor
- [ ] **Returning user** state restore → onboarding'i atla, direkt /home
- [ ] **Account deletion** Settings → Hesabımı Sil → "SİL" yaz → Supabase'den siliniyor (Supabase dashboard'dan doğrula)

### 0.12 ATT + AdMob Sequencing

- [ ] **ATT prompt** placement sonrası çıkıyor
- [ ] **ATT granted** → analytics re-init çalışıyor (PostHog event'leri akıyor)
- [ ] **ATT denied** → AdMob non-personalized'a düşüyor (tagForChildDirected NO, maxAdContentRating T)
- [ ] **Free tier paywall trigger** → 3 sahne sonrası paywall'a yönlendiriliyor (eğer threshold öyleyse)

---

## P1 — Should pass, can investigate post-launch

### 1.1 Diary

- [ ] **/diary aç** → günün 1 İngilizce cümle input
- [ ] **Save** → timeline'da görünüyor
- [ ] **Day-streak counter** doğru

### 1.2 NPC Relationships

- [ ] **/relationships aç** → 6 NPC listesi (Match, work coworker, bar friend, etc.)
- [ ] **Relationship banner** sahne içinde uygun NPC'de görünüyor (audit fix #3)
- [ ] **History link** → o NPC ile geçmiş sahneler

### 1.3 Profile

- [ ] **/profile aç** → fluency dashboard, CEFR level ring, streak, mode bars
- [ ] **7 mod rail** görünüyor (IELTS dahil)
- [ ] **Settings link** çalışıyor

### 1.4 Settings

- [ ] **Settings → Restore Purchases** çalışıyor (Alert: "Aktif abonelik..." / "Geri yüklendi")
- [ ] **Notifications toggle** çalışıyor
- [ ] **Privacy URL** safari'de açılıyor, 200 dönüyor
- [ ] **Terms URL** 200 dönüyor

### 1.5 Tablet / iPad

- [ ] **app.json'da supportsTablet: false** → AppStore submission'da iPad badge yok
- [ ] (Skip — only if iPad submission planned)

---

## P2 — Nice to have (post-launch backlog)

### 2.1 Edge Cases

- [ ] **Airplane mode** → STT graceful fail mesajı, app crash etmiyor
- [ ] **Background → foreground** → state restore çalışıyor
- [ ] **Düşük disk** → kayıt graceful fail
- [ ] **Çok hızlı swipe** → home feed crash etmiyor

### 2.2 Accessibility

- [ ] **VoiceOver** ana ekranda label'lar okunuyor
- [ ] **Larger Text** (Settings → Display → Larger Text) layout bozulmuyor

### 2.3 Performance

- [ ] **First scene load** <2s
- [ ] **Memory** /scenario rotasyonu sonrası <300MB
- [ ] **Cold start** <1.5s splash → home

---

## Known issues / acceptable regressions

| Issue | Severity | Note |
|---|---|---|
| `sentryDsn` boş | P2 | Prod crash reporting yok. Submission sonrası 5dk'da düzelt. |
| `posthogKey` boş | P2 | Prod analytics yok. Submission sonrası düzelt. |
| `ttsEndpoint` boş | P3 | expo-speech fallback aktif, kasıtlı LLM-siz mimari için. |
| `admobBannerAndroid` boş | P3 | iOS-only build, Android port v1.x. |

---

## Submission gate

Bu checklist'in **P0 bölümünün tüm item'leri ✅** ise:
1. **Tag push** kullanıcı onayıyla (v0.9.0 zaten pushed → bu adım skip)
2. **Wait for TestFlight build** geldi → ASC TestFlight → Internal Testing → External Testing (varsa)
3. **External tester feedback** 24-48h bekle
4. **Submit for Review** → `docs/SUBMISSION_CHECKLIST.md` adımları

---

**Doc owner:** Tester (founder)
**Version:** 1.0 (v0.9.0 specific)
**Last updated:** 2026-05-23
