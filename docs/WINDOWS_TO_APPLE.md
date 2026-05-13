# Windows PC → App Store (iOS Only)

Windows PC'den iOS app build edip App Store'a yüklüyoruz. **Mac gerekmiyor.**
GitHub Actions'ın `macos-latest` runner'ı bizim için cloud'da derliyor.

## Akış

```
Windows PC                GitHub Actions          Apple
   |                        (macos-latest)         |
   |--- git tag + push -> |                       |
   |                      |--- npm ci             |
   |                      |--- eas build --local  |
   |                      |--- IPA olusturulur    |
   |                      |--- upload to TF -----> App Store Connect
   |                                                |
   |                                                +--> TestFlight beta
   |                                                +--> App Store review
```

`.github/workflows/expo-testflight.yml` otomatize ediyor.

## Bir Defalik Kurulum

### 1. Apple Developer Program ($99/yıl)
- https://developer.apple.com/programs/enroll
- TR kredi kartı kabul
- Kimlik doğrulama: 1-3 gün

### 2. App Store Connect'te Lafla App Oluştur
- https://appstoreconnect.apple.com
- "My Apps" → "+" → "New App"
- Name: **Lafla**
- Primary Language: Turkish (Türkçe)
- Bundle ID: **com.lafla.app** (önce Apple Developer'da register et)
- SKU: lafla-mvp-001

### 3. App Store Connect API Key Oluştur
- App Store Connect → Users and Access → Integrations → **Keys** sekmesi
- "+" → Generate Key
- Name: `Lafla CI`
- Access: **Admin**
- Indir: `AuthKey_XXX.p8` (sadece BİR KEZ indirebilirsin, sakla)
- Not al:
  - Key ID (10 karakter)
  - Issuer ID (UUID)

### 4. Expo Account (Ücretsiz)
- https://expo.dev/signup
- Access token al: Settings → Access Tokens → Create

### 5. GitHub Secrets'a Ekle
`.github/SECRETS.md` dokümanı tüm detayları içeriyor. Özet:

| Secret | Değer |
|---|---|
| `EXPO_TOKEN` | Expo dashboard'tan |
| `APP_STORE_CONNECT_KEY_ID` | Step 3'ten |
| `APP_STORE_CONNECT_ISSUER_ID` | Step 3'ten |
| `APP_STORE_CONNECT_PRIVATE_KEY` | `.p8` dosyasının tam içeriği |
| `APPLE_TEAM_ID` | developer.apple.com/account |

## Her Build Sırasında

**Manuel:**
```
GitHub → Actions → "Lafla iOS TestFlight" → "Run workflow"
```

**Otomatik (tag push):**
```powershell
# apps/mobile/package.json'da version bump
git tag lafla-v0.1.0
git push origin lafla-v0.1.0
```

Workflow başlar → ~30 dakika sonra TestFlight'ta build görünür.

## Lokal Geliştirme (Windows'ta)

### Android Yok — iOS-only
Bu MVP iOS-only. Android Phase 2'de düşünülecek.

### iOS Test Telefonunda
Mac olmadan iOS test için 2 yol:

**Yol 1: TestFlight Beta**
- EAS preview build → TestFlight internal
- iPhone'da TestFlight app'i indir, oradan beta'ya katıl
- ~30 dakikalık döngü

**Yol 2: Expo Go (sınırlı)**
- Bazı native modüller çalışmaz ama UI test için yeter
- `npm start` → QR kod → iPhone'da Expo Go'da aç
- Hot reload var

## Maliyetler (iOS-only Versiyon)

| Servis | Maliyet |
|---|---|
| Apple Developer Program | $99/yıl (~3.500 TL) |
| Expo Account | Ücretsiz |
| EAS Build | --local kullandığımız için EAS Cloud minute harcamıyoruz |
| GitHub Actions macos-latest | Public repo ücretsiz, private 2000 dk/ay ücretsiz |

**Toplam ilk yıl: ~3.500 TL** (Android atlandığı için 900 TL tasarruf).

## Lansman Süreci

1. **Build hazır** (workflow tetikle)
2. **TestFlight Internal Testing** — sen ve 5-10 arkadaş test eder
3. **TestFlight External Testing** (opsiyonel) — 100+ beta tester
4. **App Store Connect** — Metadata + screenshots + description + keywords doldur
5. **Submit for Review** — 1-3 gün review
6. **Release** — Approved olduktan sonra yayına al

## Sorun Çıkarsa

| Sorun | Çözüm |
|---|---|
| "Bundle ID not registered" | Apple Developer → Identifiers → "+" → com.lafla.app ekle |
| "Build failed in Xcode" | Workflow log'larında Xcode hatası ara, genelde Swift sürümü |
| "Invalid signing" | Cert + Profile EAS tarafından otomatik yönetilir, ASC API Key doğru mu kontrol et |
| "Upload to TestFlight failed" | Key permission'ı Admin mi? Issuer ID doğru mu? |

## Şu An Hazır Olan

- ✅ `.github/workflows/expo-testflight.yml` (CI/CD pipeline)
- ✅ `.github/SECRETS.md` (secret rehberi)
- ✅ `apps/mobile/app.json` (iOS-only, bundle ID locked)
- ✅ `eas.json` (build profilleri)
- ⏳ Apple Developer hesabı + App Store Connect setup (sen yapacaksın)
- ⏳ Expo account + token (sen yapacaksın)
- ⏳ Secret'lar repo'ya eklenmiş (sen yapacaksın)
