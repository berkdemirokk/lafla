# Windows PC → App Store / Play Store

Windows'ta iOS app build edip App Store'a göndermek için **Mac GEREKMİYOR**. Cloud build kullanıyoruz: Expo EAS Build.

## Akış Diyagramı

```
Windows PC                GitHub               EAS Cloud             Apple
   |                        |                    |                       |
   |--- git push ------->  |                    |                       |
   |                        |--- trigger ---->  |                       |
   |                        |                    |--- iOS .ipa build -> |
   |                                             |                       |
   |--- eas submit (from Windows) -----------------------------------> App Store Connect
```

Tüm bu adımlar Windows'tan yapılır. EAS Cloud'da Mac VM'ler bizim için derler.

## Gerekli Hesaplar / Maliyetler

| Servis | Maliyet | Ne için |
|---|---|---|
| **Apple Developer Program** | $99/yıl (~3.500 TL) | App Store yayın için ŞART |
| **Google Play Console** | $25 tek seferlik (~900 TL) | Play Store için ŞART |
| **Expo Account** | Ücretsiz | EAS Build için |
| **EAS Build Free Tier** | 30 build/ay ücretsiz | Başlangıçta yeter |
| **EAS Production Plan** | $19/ay (opsiyonel) | Ölçek geldiğinde |

**Toplam ilk yıl maliyeti:** ~4.400 TL (Apple + Google + opsiyonel EAS).

## Adım Adım Yayın (Lansman Anı)

### 1. Apple Developer Hesabı Aç (~30 dakika + bekleme)
- https://developer.apple.com → "Enroll"
- Kişisel hesap mı, şirket hesabı mı? Solo founder için **kişisel**
- $99 öde (TR kredi kartı kabul)
- Verify süreci 1-3 gün (kimlik doğrulama)

### 2. App Store Connect'te Uygulama Oluştur
- https://appstoreconnect.apple.com
- "My Apps" → "+" → "New App"
- Bundle ID: `com.lafla.app` (önceden register et)
- Name: Lafla
- SKU: lafla-mvp-001

### 3. Google Play Console Hesabı (paralel)
- https://play.google.com/console
- $25 öde, $25'lik internal track açılır

### 4. Expo / EAS Kurulum (Windows'ta)
```powershell
# Expo CLI yükle
npm install -g expo-cli eas-cli

# Login
eas login

# Lafla repo'sunda projeyi EAS'e bağla
cd C:\Users\berk\eng\lafla\apps\mobile
eas init
```

### 5. İlk Build (EAS Cloud)
```powershell
# Preview build (TestFlight için, internal)
eas build --platform ios --profile preview

# Production build (App Store gönderim için)
eas build --platform ios --profile production

# Android da paralel
eas build --platform android --profile production
```

Build EAS Cloud'da çalışır (10-20 dakika). Tamamlanınca link verir.

### 6. App Store'a Gönder
```powershell
eas submit --platform ios --profile production
```

Bu komut .ipa'yı App Store Connect'e yükler.

### 7. App Store Connect'te Review Submit
- App Store Connect'e gir
- Uploaded build'i seç
- Metadata doldur (screenshots, description, keywords, age rating)
- "Submit for Review"
- 1-3 gün review süresi
- Onaylanırsa yayında

## Lokal Geliştirme (Mac Gerekmeden)

### Android Test (Tamamen Windows'ta)
- **Expo Go uygulaması** indir (telefonda)
- `npm start` çalıştır
- QR kodu okut → app telefonda açılır
- Hot reload, debug — hepsi çalışır

### iOS Test (Windows'ta Sınırlı)
- **iOS simülatör Windows'ta YOK** (Apple tools sadece Mac'te)
- Alternatif 1: EAS development build → fiziksel iPhone'a yükle (TestFlight üzerinden)
- Alternatif 2: Web build ile yaklaşık önizleme (`npm run web`)
- Alternatif 3: macOS olan arkadaşa Expo Go ile QR gönder

## Lansman Öncesi Checklist

- [ ] Apple Developer hesap aktif
- [ ] Google Play Console aktif
- [ ] Bundle ID register: com.lafla.app (Apple + Google)
- [ ] Expo account aktif
- [ ] App Store Connect'te app metadata hazır
- [ ] 5+ screenshot (iPhone 6.7" + 5.5" gerekli)
- [ ] App icon (1024x1024) hazır
- [ ] Privacy policy URL hazır
- [ ] App description (TR + EN)
- [ ] Keywords (App Store SEO)
- [ ] Age rating (4+ veya 12+)
- [ ] Categories: Education, Lifestyle (secondary)

## Tahmini Lansman Süresi

| Aşama | Süre |
|---|---|
| Hesap açma + doğrulama | 3-7 gün |
| İlk EAS build | 30 dakika |
| Metadata + screenshots | 1 gün |
| App Store review | 1-3 gün |
| Play Store review | 1-2 gün |
| **Toplam** | **5-15 gün** lansmandan önce |

## Şu An Hazır Olan

- ✅ `apps/mobile/` iskelet — Expo + RN + TypeScript
- ✅ `apps/mobile/app.json` — bundle ID locked: `com.lafla.app`
- ✅ `eas.json` — build + submit profilleri
- ✅ Dark mode default
- ✅ TR + EN localization placeholder
- ⏳ Apple Developer hesabı (kullanıcı açacak, lansman öncesi)
- ⏳ Expo account (kullanıcı açacak, ilk build öncesi)
- ⏳ Screenshot + metadata (lansman öncesi)
