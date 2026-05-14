# Lafla iOS Home Screen Widget

This doc walks through wiring up the iOS home-screen widget after an EAS
build / Expo prebuild. The widget shows the user's CEFR level, daily streak
and today's plan focus in Turkish, and deep-links into the app on tap.

> **Why no Android?** iOS only for now. Android widgets need a separate
> Glance / RemoteViews implementation; tracked separately.

---

## Mimari özet (architecture summary)

```
   ┌──────────────────────────┐
   │  React Native (JS)       │
   │                          │
   │  lib/widget-data.ts ─────┼──► AsyncStorage  (key: lafla.widget.snapshot)
   │  lib/widget-bridge.ts ───┼──► NativeModules.LaflaWidgetBridge.writeSnapshot(json)
   └────────────┬─────────────┘
                │ JSON
                ▼
   ┌──────────────────────────┐
   │  iOS App (Swift)         │
   │  LaflaWidgetBridge       ├──► UserDefaults(suiteName: "group.com.lafla.app")
   │                          │      key: "lafla.widget.snapshot"
   │                          ├──► WidgetCenter.shared.reloadAllTimelines()
   └────────────┬─────────────┘
                │
                ▼
   ┌──────────────────────────┐
   │  Widget Extension        │
   │  LaflaWidget.swift       │
   │  LaflaProvider           │  reads UserDefaults every ~30 min
   │  LaflaWidgetEntryView    │  renders small/medium/large in Turkish
   └──────────────────────────┘
```

Veri akışı tek yönlü: JS yazar, widget okur. Hiçbir runtime LLM çağrısı yok,
hiçbir network yok. Widget cold-start'ta bile (uygulama hiç açılmadan)
placeholder gösterir.

---

## 1. EAS build (one-time)

```bash
cd apps/mobile
eas build --profile development --platform ios
```

This generates the native `ios/` directory if it doesn't exist, or rebuilds
the existing one. **The widget target is not part of the JS-described
config**, so it must be added by hand in Xcode (steps 3–7 below).

> Ön bilgi: `expo prebuild --platform ios` da iş görür ve build sırası
> beklemeden Xcode projesini diske yazar. EAS sadece imzalı .ipa için
> şart.

---

## 2. Open the workspace in Xcode

```bash
cd apps/mobile/ios
open Lafla.xcworkspace      # NOT Lafla.xcodeproj — workspace pulls in pods
```

---

## 3. Add the widget extension target

1. In Xcode: **File → New → Target…**
2. **iOS → Application Extension → Widget Extension**, click **Next**.
3. Form values:
   - **Product Name:** `LaflaWidget`
   - **Team:** your Apple Developer team (same as the main app)
   - **Bundle Identifier:** `com.lafla.app.widget`
   - **Language:** Swift
   - **Include Live Activity:** unchecked (we'll add later)
   - **Include Configuration App Intent:** unchecked
4. Click **Finish**. When prompted to **Activate "LaflaWidget" scheme**,
   click **Activate**.

Xcode will generate boilerplate files inside `ios/LaflaWidget/`:
`LaflaWidget.swift`, `LaflaWidgetBundle.swift`, `Assets.xcassets`,
`Info.plist`, and (on Xcode 15+) some intent stuff you can delete.

---

## 4. Replace generated files with the repo versions

Bizim hazırladığımız `apps/mobile/widget/` klasöründeki dosyaları
generated dosyaların yerine kopyala:

```bash
cd apps/mobile
cp widget/LaflaWidget.swift          ios/LaflaWidget/LaflaWidget.swift
cp widget/LaflaWidgetBundle.swift    ios/LaflaWidget/LaflaWidgetBundle.swift
cp widget/Info.plist                 ios/LaflaWidget/Info.plist
cp widget/LaflaWidget.entitlements   ios/LaflaWidget/LaflaWidget.entitlements
```

Yine Xcode'da:

- `LaflaWidget` target → **Build Settings** → ara: `Code Signing Entitlements`
  → değer: `LaflaWidget/LaflaWidget.entitlements`.
- Eğer Xcode generated file'ları `IntentHandler.swift` veya benzeri olarak
  bıraktıysa, target üyeliğinden çıkar veya sil.

---

## 5. Add the native bridge files to the MAIN app target

Bu iki dosya widget'a değil, **ana app** target'ına eklenir — JS'in
`NativeModules.LaflaWidgetBridge` üzerinden çağırdığı module:

```bash
cd apps/mobile
cp widget/LaflaWidgetBridge.swift  ios/Lafla/LaflaWidgetBridge.swift
cp widget/LaflaWidgetBridge.m      ios/Lafla/LaflaWidgetBridge.m
```

Xcode'da:

1. **File → Add Files to "Lafla"…** → seç iki dosyayı → **Target Membership**:
   yalnız `Lafla` (main app), `LaflaWidget` değil.
2. Eğer ilk kez Swift dosyası ekliyorsan Xcode bridging header oluştur diyecek
   — **Create Bridging Header** ile devam et. Header zaten varsa atla.

---

## 6. App Group capability (iki target'a da)

Hem ana app hem widget aynı `group.com.lafla.app` App Group'una üye
olmalı — UserDefaults paylaşımı bunun üzerinden işliyor.

### Main app target (`Lafla`)
1. Project navigator → **Lafla** → **Signing & Capabilities** sekmesi.
2. **+ Capability** → **App Groups**.
3. **+** ile yeni group ekle: `group.com.lafla.app`. Kutucuğu işaretli bırak.

### Widget target (`LaflaWidget`)
1. **LaflaWidget** target → **Signing & Capabilities**.
2. **+ Capability** → **App Groups**.
3. Aynı `group.com.lafla.app`'i seç. Kutucuğu işaretle.

> Apple Developer portal otomatik olarak App Group identifier'ını oluşturur.
> Bu adımda kısa süreli "fix issue" hataları görebilirsin — Xcode'un
> "Try Again" butonuna basıp 5–10 saniye bekle.

---

## 7. Build & test

```bash
# 1. Xcode'da scheme: Lafla (main app), device: iPhone 15 (or your test device)
# 2. Cmd+R — build & run main app
# 3. Onboarding'i tamamla, en az bir lesson bitir (snapshot yazılsın)
# 4. Cihazda uygulamayı arkaya at
# 5. Home screen'de basılı tut → + (sol üst) → "Lafla" ara → boyut seç → ekle
```

iki şeyi göreceksin:

- **Small** widget'ta seri sayısı + CEFR badge
- **Medium** widget'ta bunlara ek olarak "Bugün: …" tek satırlık odak
- **Large** widget'ta greeting + level + odak + 3 plan item checklist

Widget'a dokununca uygulama açılır ve `lafla://feed` (veya pending review
varsa `lafla://review`) deep-link'i tetiklenir. `lib/deep-links.ts` zaten
bu rotaları biliyor.

---

## 8. Data refresh cadence

iOS widget timeline policy:

- **Default:** `LaflaProvider.getTimeline` her 30 dakikada bir yeniden
  çağrılır. Provider o anki UserDefaults snapshot'ını okur ve döndürür.
- **Ad-hoc reload:** JS `writeWidgetSnapshot()` çağırınca native bridge
  `WidgetCenter.shared.reloadAllTimelines()` tetikler — widget anında
  güncellenir. Bu otomatik:
  - app focus (RootLayout `AppState` listener)
  - lesson complete (`recordLessonComplete` sonrası)
  - program seçimi, CEFR level değişikliği
- **iOS budget:** Apple günde sınırlı reload bütçesi veriyor (~40–60).
  `scheduleWidgetUpdate` throttle'ı (60 sn) bu yüzden var.

---

## 9. Troubleshooting

| Belirti | Sebep / çözüm |
|---|---|
| Widget galeri'de "Lafla" çıkmıyor | Hem ana app hem widget target'larında App Group capability ekli mi? Bundle ID'ler `com.lafla.app` ve `com.lafla.app.widget` mi? |
| Widget eklendi ama hep placeholder gösteriyor | Uygulamayı bir kere aç + bir lesson bitir → `writeWidgetSnapshot` çağrılsın. UserDefaults'ta veri var mı: `defaults read group.com.lafla.app lafla.widget.snapshot` (Mac terminalde — simulator için). |
| JS'te `NativeModules.LaflaWidgetBridge` null | Bridge dosyaları (`.swift` + `.m`) ana app target'ına eklendi mi? `RCT_EXTERN_MODULE` macro'su var mı? Tam reload (Metro restart + app yeniden açılış) gerekiyor. |
| Build hatası: "No such module 'WidgetKit'" | Widget target'ın Deployment Target en az iOS 14.0 olmalı. Project Settings → LaflaWidget → General → Minimum Deployments. |
| Widget güncellenmiyor | iOS reload bütçesi dolmuş olabilir — cihazı reboot. Veya `WidgetCenter.shared.reloadAllTimelines()` çağrılıyor mu (bridge yazıyor mu) kontrol et. |
| Dark mode'da yazı okunmuyor | Widget zaten dark-only — hem light hem dark görünümde aynı `#1A1C1C` zemin + sarı/beyaz yazı kullanır. |

---

## 10. Future work

- Lock Screen accessory widgets (iOS 16+) — `accessoryCircular` ile streak,
  `accessoryRectangular` ile bugünün odağı.
- Live Activity for "current lesson in progress".
- Configurable widget (App Intent) — user picks "streak only" vs "plan".
- Android Glance widget when we open Android.
