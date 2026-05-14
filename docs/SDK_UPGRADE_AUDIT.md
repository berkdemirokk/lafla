# SDK Upgrade Audit — Expo SDK 52 → 53 + iOS 26 SDK

> Tarih: 2026-05-14
> Durum: ACİL (Apple iOS 26 SDK zorunluluğu 28 Nisan 2026'da yürürlüğe girdi)
> Kapsam: `C:\Users\berk\eng\lafla\apps\mobile\`
> Bu rapor sadece audit'tir — hiçbir kod / config değiştirilmemiştir.

---

## 1. Mevcut Sürümler

`apps/mobile/package.json` ve `app.json` dosyalarına göre:

| Bileşen | Mevcut Sürüm | Not |
|---|---|---|
| Expo SDK | `~52.0.0` | SDK 52 (Kasım 2024 release line) |
| React Native | `0.76.0` | SDK 52'nin baseline'ı (New Architecture default-on) |
| React | `18.3.1` | SDK 52 ile uyumlu |
| iOS Target SDK | iOS 18 (Xcode 16) | SDK 52'nin build chain'i ile üretilen IPA — Apple yeni submission'larda artık kabul **etmiyor** |
| `newArchEnabled` | `true` | SDK 52'de zaten New Architecture aktif — SDK 53'e geçişte avantaj |
| Platform listesi | `["ios"]` | Sadece iOS; Android/web build chain'i devre dışı |
| EAS Project | `a7b18723-d431-481b-92cd-18a4c1104171` | EAS build ile teslim |

---

## 2. Hedef

| Bileşen | Hedef Sürüm |
|---|---|
| Expo SDK | **53.x** (en son patch) |
| React Native | **0.79.x** (SDK 53 baseline) |
| React | **19.0.x** |
| iOS SDK | **iOS 26** (Xcode 26 — Apple App Store submission zorunluluğu 28 Nisan 2026 itibarıyla aktif) |
| Min iOS deployment target | iOS 15.1 (RN 0.79 default) — Lafla için iOS 16+ önerilir |
| New Architecture | Aktif kalmaya devam edecek (`newArchEnabled: true`) |

---

## 3. Breaking Changes — SDK 52 → 53

> Not: Aşağıdaki maddeler Expo SDK 53 changelog'ları ve React Native 0.79 release notlarına dayanır. Tam doğrulama için upgrade öncesi `expo-cli` çıktısı kontrol edilmelidir.

### React 19 geçişi
- `react@19` zorunlu (SDK 52'de 18.3.1 idi). Yeni JSX transform davranışı, `useRef` tipi sıkılaştırma, deprecate edilen `propTypes`. Lafla küçük bir kod tabanı olduğundan etki sınırlı olmalı.
- `useEffect` çift-fire davranışı dev modda farklılaşabilir.

### React Native 0.79 geçişi
- New Architecture artık varsayılan (Lafla'da zaten aktif — düşük risk).
- Bridgeless mode default. Eski native modüller geçiş gerektirebilir.
- `Linking` API'sinin bazı methodları değişti.
- iOS minimum deployment target yükseltildi (iOS 15.1+).

### expo-router 5
- SDK 53 ile birlikte `expo-router@5.x` gelir. `expo-router@4` → `@5` arasında:
  - Layout API stabilize edildi.
  - `typedRoutes` davranışı değişti (Lafla'da `experiments.typedRoutes: true` aktif — yeniden generate gerekecek).
  - `Stack.Screen` options yapısı bazı durumlarda farklı.
- Linking config dosya yapısı `app/_layout.tsx` ile birlikte güncellenmeli.

### Expo modüllerindeki major bump'lar
- `expo-constants@18`: `Constants.manifest` (deprecated since SDK 49) artık kaldırıldı. `Constants.expoConfig` kullanılmalı. Lafla `extra.supabaseUrl` okuyorsa kontrol edilmeli.
- `expo-secure-store@15`: API stabil ama Privacy Manifest reason string'leri zorunlu.
- `expo-haptics@15`: Minor API değişiklikleri yok beklenir.
- `expo-speech@14`: iOS Speech framework için Privacy Manifest girdisi gerekir.
- `expo-status-bar@3`: Minor değişiklikler.
- `expo-linking@8`: API stabil.

### iOS 26 SDK özel notlar
- **Privacy Manifest** (`PrivacyInfo.xcprivacy`) iOS 17+ zorunlu — eksikse submission **reddedilir**.
- Yeni "Required Reason API" listesi güncellendi; AsyncStorage, expo-constants, expo-file-system için reason string'ler gerekli.
- Xcode 26 zorunlu — EAS image: `latest` veya `macos-sonoma-xcode-26` selektörü.

---

## 4. Bağımlılık Uyumluluğu Matrisi

| Paket | Mevcut | SDK 53 Hedef | Uyumlu mu? | Risk / Not |
|---|---|---|---|---|
| `expo` | `~52.0.0` | `~53.0.0` | Evet | Ana bump |
| `expo-status-bar` | `~2.0.0` | `~3.0.0` | Evet | API stabil |
| `expo-router` | `~4.0.0` | `~5.0.0` | Evet — orta risk | Routing dosyalarının test edilmesi gerekir; `typedRoutes` yeniden generate |
| `expo-linking` | `~7.0.0` | `~8.0.0` | Evet | API stabil |
| `expo-constants` | `~17.0.0` | `~18.0.0` | Evet — orta risk | `Constants.manifest` kaldırıldı; `Constants.expoConfig.extra` kullanımı kontrol edilmeli (Supabase URL/anon key okunuyor) |
| `expo-haptics` | `~14.0.0` | `~15.0.0` | Evet | Düşük risk |
| `expo-secure-store` | `~14.0.0` | `~15.0.0` | Evet | Privacy Manifest entry'si zorunlu |
| `expo-speech` | `~13.0.0` | `~14.0.0` | Evet | Privacy Manifest entry'si zorunlu (NSSpeechRecognitionUsageDescription / TTS reason) |
| `react` | `18.3.1` | `19.0.0` | Evet — orta risk | Major version, breaking type değişiklikleri |
| `react-native` | `0.76.0` | `0.79.x` | Evet | Major; New Arch zaten aktif → düşük risk |
| `react-native-safe-area-context` | `4.12.0` | `5.x` | Evet | Stabil |
| `react-native-screens` | `~4.1.0` | `~4.10+` veya `~5.x` | Evet | expo-router 5 ile uyumlu sürüm gerekli |
| `react-native-gesture-handler` | `~2.20.0` | `~2.24+` | Evet | Reanimated 4 ile uyumlu sürüm |
| `react-native-reanimated` | `~3.16.0` | `~4.0.x` veya `3.17+` | Evet — yüksek dikkat | Reanimated 4 New Arch için yeniden yazıldı; SDK 53 önerisi 3.17 olabilir — `npx expo install --check` ile doğrulanmalı |
| `@supabase/supabase-js` | `^2.45.0` | `^2.45+` | Evet | Expo-bağımsız; bump şart değil |
| `@react-native-async-storage/async-storage` | `1.23.1` | `2.x` | Evet | RN 0.79 + New Arch için 2.x önerilir; **User Defaults** privacy reason zorunlu |
| `react-native-url-polyfill` | `^2.0.0` | `^2.0.0` | Evet | Stabil |
| `@babel/runtime` | `^7.25.0` | `^7.26+` | Evet | Otomatik bump |
| `@babel/core` (dev) | `^7.25.0` | `^7.26+` | Evet | Otomatik |
| `@types/react` (dev) | `~18.3.12` | `~19.0.x` | Evet | React 19 ile zorunlu |
| `typescript` (dev) | `^5.4.0` | `^5.6+` | Evet | Tavsiye edilen |

**Risk seviyeleri özet**:
- Yüksek dikkat: `react-native-reanimated`, `expo-router`, `react` (19)
- Orta: `expo-constants` (extra config okuma), `react-native`, `async-storage`
- Düşük: diğer expo-* paketleri, supabase-js, polyfill

---

## 5. Upgrade Adımları

> Bu adımları **ayrı bir branch'te** çalıştırın (örn. `chore/sdk-53-upgrade`).

### Önkoşullar
1. macOS + Xcode 26 yüklü (lokal smoke test için). Cloud build için EAS Xcode 26 image yeterli.
2. EAS CLI güncel: `npm i -g eas-cli@latest`.
3. Git temiz; bütün değişiklikler commit'lenmiş.

### Adım adım

```bash
# 1) Branch aç
git checkout -b chore/sdk-53-upgrade

# 2) Expo'yu hedef SDK'ya bump et
cd apps/mobile
npx expo install expo@^53.0.0

# 3) Tüm bağımlı paketleri otomatik hizala
npx expo install --check
# çıktıyı dikkatle okuyup önerilen sürümleri uygula:
npx expo install --fix

# 4) React 19 ve type paketlerini manuel kontrol et
npm i react@^19.0.0 react-dom@^19.0.0
npm i -D @types/react@^19.0.0

# 5) expo-doctor ile sağlık kontrolü
npx expo-doctor

# 6) Typecheck
npm run typecheck

# 7) Prebuild (yeni iOS klasörü gerekiyorsa)
# Lafla'da şu an ios/ committed olmadığı için yeni oluşacak
npx expo prebuild --platform ios --clean

# 8) Privacy Manifest dosyasını oluştur (aşağıdaki bölüm 6'ya göre)
# apps/mobile/ios/Lafla/PrivacyInfo.xcprivacy

# 9) EAS build (development client)
eas build --profile development --platform ios

# 10) TestFlight build
eas build --profile production --platform ios

# 11) Cihazda smoke test
#    - Onboarding akışı
#    - Supabase auth + RPC
#    - SecureStore okuma/yazma
#    - Haptics, Speech (TTS)
#    - expo-router deep link (lafla://)

# 12) Submit
eas submit --platform ios
```

### Smoke test checklist
- [ ] Soğuk başlatma < 3sn
- [ ] AsyncStorage okuma/yazma
- [ ] SecureStore token persist
- [ ] Supabase auth flow
- [ ] expo-router stack/tab navigasyonu
- [ ] Deep link (`lafla://` scheme)
- [ ] Haptics tetikleniyor
- [ ] TTS (expo-speech) Türkçe ses üretiyor
- [ ] Sentry crash report (varsa) bağlı
- [ ] iOS 16, 17, 18, 26 cihazlarda test (TestFlight)

---

## 6. Privacy Manifest

iOS 17'den itibaren `PrivacyInfo.xcprivacy` zorunlu. Lafla'nın kullandığı modüller esas alındığında aşağıdaki entry'ler gerekli:

### Gerekli "Required Reason API" girdileri

| API Kategorisi | Sebep (Apple kodu) | Hangi paket için |
|---|---|---|
| `NSPrivacyAccessedAPICategoryUserDefaults` | `CA92.1` (kendi app'inizin verileri için) | `@react-native-async-storage/async-storage` |
| `NSPrivacyAccessedAPICategoryFileTimestamp` | `C617.1` (kendi app dosyaları için) | `expo-file-system` (transitive — varsa) |
| `NSPrivacyAccessedAPICategorySystemBootTime` | `35F9.1` (sistem zamanı hesaplama) | `expo-constants`, `react-native` core |
| `NSPrivacyAccessedAPICategoryDiskSpace` | `E174.1` (kullanılabilir alan kontrolü) | `react-native` core (varsa) |

### Toplanan veri (NSPrivacyCollectedDataTypes)

Lafla'nın mevcut akışı (Supabase + AsyncStorage + SecureStore):
- **User ID** (Supabase auth) — `NSPrivacyCollectedDataTypeUserID`
  - Linked to identity: YES
  - Used for tracking: NO
  - Purpose: `App Functionality`
- **Email Address** (Supabase auth — varsa) — `NSPrivacyCollectedDataTypeEmailAddress`
  - Linked to identity: YES
  - Purpose: `App Functionality`
- **Product Interaction** (analitik event'ler — `ANALYTICS.md`'ye göre kullanılıyorsa)
  - Linked to identity: opsiyonel (Supabase user_id ile bağlanıyorsa YES)
  - Purpose: `Analytics`, `App Functionality`
- **Crash Data** (Sentry kullanılıyorsa — `SENTRY.md` mevcut)
  - Linked: NO
  - Purpose: `App Functionality`

### Tracking
- `NSPrivacyTracking` = **false** (Lafla 3rd-party ad/tracking SDK kullanmıyor)
- `NSPrivacyTrackingDomains` = boş array

### Önerilen `apps/mobile/ios/Lafla/PrivacyInfo.xcprivacy` yapısı

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>NSPrivacyTracking</key>
    <false/>
    <key>NSPrivacyTrackingDomains</key>
    <array/>
    <key>NSPrivacyCollectedDataTypes</key>
    <array>
        <dict>
            <key>NSPrivacyCollectedDataType</key>
            <string>NSPrivacyCollectedDataTypeUserID</string>
            <key>NSPrivacyCollectedDataTypeLinked</key>
            <true/>
            <key>NSPrivacyCollectedDataTypeTracking</key>
            <false/>
            <key>NSPrivacyCollectedDataTypePurposes</key>
            <array>
                <string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
            </array>
        </dict>
        <dict>
            <key>NSPrivacyCollectedDataType</key>
            <string>NSPrivacyCollectedDataTypeEmailAddress</string>
            <key>NSPrivacyCollectedDataTypeLinked</key>
            <true/>
            <key>NSPrivacyCollectedDataTypeTracking</key>
            <false/>
            <key>NSPrivacyCollectedDataTypePurposes</key>
            <array>
                <string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
            </array>
        </dict>
        <dict>
            <key>NSPrivacyCollectedDataType</key>
            <string>NSPrivacyCollectedDataTypeProductInteraction</string>
            <key>NSPrivacyCollectedDataTypeLinked</key>
            <true/>
            <key>NSPrivacyCollectedDataTypeTracking</key>
            <false/>
            <key>NSPrivacyCollectedDataTypePurposes</key>
            <array>
                <string>NSPrivacyCollectedDataTypePurposeAnalytics</string>
                <string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
            </array>
        </dict>
        <dict>
            <key>NSPrivacyCollectedDataType</key>
            <string>NSPrivacyCollectedDataTypeCrashData</string>
            <key>NSPrivacyCollectedDataTypeLinked</key>
            <false/>
            <key>NSPrivacyCollectedDataTypeTracking</key>
            <false/>
            <key>NSPrivacyCollectedDataTypePurposes</key>
            <array>
                <string>NSPrivacyCollectedDataTypePurposeAppFunctionality</string>
            </array>
        </dict>
    </array>
    <key>NSPrivacyAccessedAPITypes</key>
    <array>
        <dict>
            <key>NSPrivacyAccessedAPIType</key>
            <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
            <key>NSPrivacyAccessedAPITypeReasons</key>
            <array>
                <string>CA92.1</string>
            </array>
        </dict>
        <dict>
            <key>NSPrivacyAccessedAPIType</key>
            <string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
            <key>NSPrivacyAccessedAPITypeReasons</key>
            <array>
                <string>C617.1</string>
            </array>
        </dict>
        <dict>
            <key>NSPrivacyAccessedAPIType</key>
            <string>NSPrivacyAccessedAPICategorySystemBootTime</string>
            <key>NSPrivacyAccessedAPITypeReasons</key>
            <array>
                <string>35F9.1</string>
            </array>
        </dict>
        <dict>
            <key>NSPrivacyAccessedAPIType</key>
            <string>NSPrivacyAccessedAPICategoryDiskSpace</string>
            <key>NSPrivacyAccessedAPITypeReasons</key>
            <array>
                <string>E174.1</string>
            </array>
        </dict>
    </array>
</dict>
</plist>
```

> Not: `expo prebuild` ile native klasör oluştuktan sonra dosyayı `apps/mobile/ios/Lafla/` altına yerleştirin ve Xcode'da target → "Copy Bundle Resources" listesine ekleyin (EAS prebuild config plugin'i yoksa manuel). Alternatif: bir config plugin yazıp `app.json` `plugins` listesine ekleyin.

---

## 7. Önerilen Zaman Çizelgesi

**Bugün: 14 Mayıs 2026. Apple deadline: 28 Nisan 2026 (16 gün geçti).**

> Pratik anlamı: Şu anda **yeni bir submission yapılamıyor**. Var olan TestFlight build'lar 90 günlük süreçleri içinde çalışmaya devam eder; ancak yeni "App Store submission" veya "App Review" gönderimi reddedilir.

| Faz | Süre | Tarih aralığı |
|---|---|---|
| Branch açma + `expo install` + bağımlılık hizalama | 0.5 gün | 14 May |
| Typecheck + lokal smoke test (simulator) | 1 gün | 15 May |
| Privacy Manifest dosyası ekle + prebuild | 0.5 gün | 16 May |
| EAS development build + cihaz testi | 1 gün | 17 May |
| Production build + TestFlight + iç ekip QA | 2–3 gün | 18–20 May |
| App Store submission + review | 1–3 gün | 21–24 May |

**Hedef App Store gönderim tarihi: en geç 20 Mayıs 2026.**

Önceliklendirme: Diğer feature işleri durdurulmalı, bu upgrade P0 olmalı.

---

## 8. Risk Değerlendirmesi (Top 3)

### Risk 1 — Reanimated 3.16 → 4 / 3.17 geçişi
- **Olasılık:** Orta–Yüksek
- **Etki:** Yüksek (animasyonlar kırılırsa onboarding ve swipe UI bozulur — `ADR-002-hybrid-swipe-ui.md` swipe etkileşimini ana akış yapıyor)
- **Azaltma:** Upgrade'i ayrı branch'te yap, swipe ve onboarding ekranlarını cihazda test et. Reanimated 4'e direkt geçmek yerine SDK 53'ün önerdiği `3.17.x`'te kal (eğer öyle ise).

### Risk 2 — Privacy Manifest eksikliği veya hatalı reason string → App Review red
- **Olasılık:** Yüksek (ilk denemede sık görülür)
- **Etki:** Yüksek (submission gecikmesi, deadline zaten geçmiş)
- **Azaltma:** `PrivacyInfo.xcprivacy` dosyasını prebuild öncesi hazırla, Apple'ın güncel `Required Reason API` listesini çapraz kontrol et, ilk submission'da `App Privacy` formunu Privacy Manifest ile eşleştir.

### Risk 3 — expo-router 4 → 5 routing breaking change
- **Olasılık:** Orta
- **Etki:** Orta (routing kırılırsa app açılışta crash veya boş ekran)
- **Azaltma:** `typedRoutes` regenerate et, `app/_layout.tsx` ve tüm `Stack.Screen` options'larını review et, deep link senaryolarını manuel test et.

### Ek riskler (yüksek olmayan ama not düşülmesi gereken)
- React 19 type sıkılaştırması → typecheck hataları (kolay düzeltilir).
- `Constants.manifest` deprecated path kaldırıldı → `extra.supabaseUrl` okuma yolu doğrulanmalı.
- AsyncStorage 1.x → 2.x veri migration sorunu beklenmez ama prod kullanıcılarının verisi için ilk test cihazında olası "silinme" senaryosu yoklanmalı.

---

## Ek: Karar Noktası — Şimdi mi, Beklemek mi?

**Beklemenin maliyeti:** Yeni feature/bugfix release'leri Store'a çıkamaz; sadece TestFlight üzerinden iç dağıtım yapılabilir.

**Şimdi yapmanın maliyeti:** ~5–7 mühendis günü + 1–3 gün App Review.

**Tavsiye:** Bu hafta P0 — geciktirilebilir bir şey değil. Submission deadline zaten geçti.
