# APP_ICONS — Lafla iOS 18 App Icon Variant Design Doc

> **Kapsam:** Lafla mobil uygulamasının iOS 18+ üç-mod (light / dark / tinted) icon sistemi için tasarım referansı.
> **İlgili dosya:** [`apps/mobile/assets/icon-variants/README.md`](../apps/mobile/assets/icon-variants/README.md) — varlık klasöründeki çalışan spec.
> **Durum:** Spec onaylandı. PNG üretimi tasarım aracında (Figma/Sketch) yapılacak — kod tarafında entegrasyon Bölüm 6'da.

---

## 1. iOS 18 Icon System — Genel Bakış

iOS 18 ile Apple, üç farklı icon modunu birinci sınıf vatandaş yaptı. Kullanıcı **Home Screen → long-press → Edit → Customize** menüsünden seçiyor:

```
┌──────────┬─────────────────────────────────────────┐
│ Mod      │ Davranış                                │
├──────────┼─────────────────────────────────────────┤
│ Light    │ Default — açık tema, parlak wallpaper'lar │
│ Dark     │ Dark mode + uyumlu wallpaper'lar          │
│ Tinted   │ Kullanıcının seçtiği accent rengiyle       │
│          │ otomatik tonlama (grayscale baz alınır)   │
└──────────┴─────────────────────────────────────────┘
```

**Apple HIG kuralları (özet):**

| Kural | Değer |
|---|---|
| Boyut | 1024 × 1024 px, sRGB |
| Format | PNG-24 |
| Alpha | YOK (light, dark) / YOK önerilir (tinted) |
| Köşe radius | YOK — sistem superellipse mask uygular |
| Safe area | Merkez 824 × 824 px (her kenardan ~100 px) |
| Tinted mode kanalı | Grayscale luminance, beyaz = tint, siyah = arka plan |

---

## 2. Mevcut Icon Analizi

**Dosya:** `apps/mobile/assets/icon.png` (1024×1024, PNG-24)

**Kompozisyon:**
- Arka plan: koyu siyah → antrasit radial gradient (Cyber-Electric `#1a1c1c` ailesi)
- Ön plan: stilize **chat bubble + aperture (shutter)** hibrit silüet
  - Yarı eksenli üçgen kesitler, neon sarı (`#f6ff00`) ve siyah dolgular alternasyonu
  - Aşağı sol kuyruğu klasik chat bubble formu
- Merkez: beyaz **5-bar ses dalgası (waveform)**
- Toplam karakter: **"Konuşma + dinleme"** ikonografisi → app'in core loop'unu (Türkçe-İngilizce sesli pratik) yansıtıyor

**Mevcut durum değerlendirmesi:**
- Light mode: **OK** — parlak wallpaper'larda silüet okunuyor.
- Dark mode: **kısmi yetersiz** — koyu arka plana set edildiğinde icon'un kendi koyu kenarları kayboluyor.
- Tinted mode: **yetersiz** — sistem auto-desaturate yaptığında sarı + beyaz birbirine yaklaşıyor, waveform belirsizleşiyor.

**Sonuç:** Üç ayrı variant gerekli.

---

## 3. Variant Tasarım Spec'leri

### 3.1 `light.png`

| Özellik | Değer |
|---|---|
| Boyut | 1024 × 1024 px |
| Format | PNG-24, sRGB |
| Alpha | YOK |
| Arka plan | Solid `#000000` |
| Ana motif | Chat-bubble + waveform, neon sarı (`#f6ff00`) dominant |
| Aksent | Pure white (`#ffffff`) waveform |
| Saturation | %100 — agresif neon |
| Padding | ≥ 100 px her kenardan |

**Tasarım niyeti:** Mevcut icon'un "amped-up" versiyonu — gradient yerine düz siyah, neon daha keskin.

### 3.2 `dark.png`

| Özellik | Değer |
|---|---|
| Boyut | 1024 × 1024 px |
| Format | PNG-24, sRGB |
| Alpha | YOK |
| Arka plan | Solid `#000000` |
| Ana motif | İnce sarı stroke (8–12 px), iç dolgu `#0a0a0a` |
| Aksent | Off-white `#e6e6e6` waveform, %80 opaklıkta sarı glow |
| Saturation | %70 — sarı `#c8d100`'e düşürülmüş |
| Padding | ≥ 100 px her kenardan |

**Tasarım niyeti:** Aynı silüet, "dimmed neon" tonunda. Gece kullanımı için göz dostu.

### 3.3 `tinted.png`

| Özellik | Değer |
|---|---|
| Boyut | 1024 × 1024 px |
| Format | PNG-24, sRGB (tek-kanal grayscale gibi davranır) |
| Alpha | YOK |
| Arka plan | Solid `#000000` |
| Ana motif | Pure white (`#ffffff`) flat silüet — geometrik detaylar minimum |
| Aksent | Mid-gray `#bfbfbf` waveform |
| Stroke kalınlığı | Light variant'a göre **%40 daha kalın** (tinted mode'da incelir) |
| Saturation | N/A — sadece grayscale |

**Tasarım niyeti:** "Hangi tint olursa olsun tanınabilir solid logomark." Aperture detayları sadeleşir; konuşma balonu silüeti ve waveform okunaklı kalır.

---

## 4. Variant Tasarım Rehberi (At-a-Glance)

```
┌─────────┬──────────────┬──────────────────────┬──────────────────┐
│ Variant │ Background   │ Wordmark / Motif     │ Aksent           │
├─────────┼──────────────┼──────────────────────┼──────────────────┤
│ light   │ #000000      │ #f6ff00 fill (%100)  │ #ffffff waveform │
│ dark    │ #000000      │ yellow stroke (%70)  │ #e6e6e6 waveform │
│ tinted  │ #000000      │ #ffffff silüet flat  │ #bfbfbf waveform │
└─────────┴──────────────┴──────────────────────┴──────────────────┘
```

**Üç variant'a ortak prensipler:**
- **Mavi (#1978e5) kullanılmaz** — UI rengi olarak kalır, icon palettesinde değil. Tek-renk konsolide kimlik.
- **Silüet outline'ı pixel-perfect identical** olmalı — mod geçişlerinde "aynı app" hissi.
- **Waveform**: 5 bar, merkez hizalı, üç variant'ta da aynı pozisyon.
- **Padding eşit**: her variant'ta safe area aynı, sadece dolgu/stroke değişir.

---

## 5. Üretim Checklist

- [ ] **Figma master file** oluştur — URL placeholder: `TODO_FIGMA_URL`
  - Üç variant aynı page'de, yan yana artboard'lar
  - Shared components: chat-bubble outline, waveform → variant override ile türet
- [ ] **Export ayarları (her variant için):**
  - PNG-24, sRGB
  - 1024 × 1024 px
  - Alpha: kapalı (flatten)
- [ ] **Dosya boyut bütçesi:** her variant < 500 KB (tipik 150–300 KB)
- [ ] **QA — thumbnail test:** 60×60 px'de yan yana göster, her variant ayırt edilebilir mi?
- [ ] **QA — cihaz test:** iPhone iOS 18+, Light / Dark / Tinted (4 farklı tint) ekran görüntüleri
- [ ] **Marketing icon ayrı:** `marketing.png` 1024×1024 (Bölüm 8)

---

## 6. `app.json` Entegrasyonu

PNG'ler hazır olduğunda `apps/mobile/app.json` güncellenir:

```json
"ios": {
  "bundleIdentifier": "com.lafla.app",
  "supportsTablet": true,
  "buildNumber": "1",
  "icon": {
    "any": "./assets/icon.png",
    "dark": "./assets/icon-variants/dark.png",
    "tinted": "./assets/icon-variants/tinted.png"
  },
  "infoPlist": { /* mevcut alanlar */ }
}
```

**Notlar:**
- Mevcut üst seviye `"icon": "./assets/icon.png"` alanı **kaldırılır**, `ios.icon` object formu onun yerine geçer.
- `any` field'ı eski iOS sürümleri (< 18) için fallback — geri uyumlu kalır.
- Light variant'ı ayrı dosya yapmak istersek (`icon-variants/light.png`), `any`'yi ona yöneltebiliriz. Şimdilik root `icon.png` light olarak kullanılacak (içeriği light spec'e güncellendikten sonra).
- Expo SDK 50+ object form'u destekler. EAS Build otomatik olarak doğru asset catalog'u oluşturur — bare workflow'da `Assets.xcassets/AppIcon.appiconset/Contents.json` elle düzenlenirdi.

> **Bu doc kapsamında `app.json` DEĞİŞMEDİ.** Entegrasyon ayrı bir PR'da yapılacak.

---

## 7. Cihazda Test Akışı

```
1. Light mode
   Settings → Display & Brightness → Light
   → Home Screen'de Lafla icon = light.png

2. Dark mode
   Settings → Display & Brightness → Dark
   → Home Screen'de Lafla icon = dark.png otomatik

3. Tinted mode
   Home Screen long-press → Edit (sol üst) → Customize
   → Tinted seç → tint rengini değiştir (mavi, kırmızı, mor)
   → Lafla icon = tinted.png üzerine seçilen tint uygulanır

4. Auto mode
   Customize → Auto seçilirse:
   - Light system mode → light variant
   - Dark system mode → dark variant
```

**Doğrulama matrisi:**

| Sistem mode | Customize | Beklenen icon |
|---|---|---|
| Light | Auto | `icon.png` (light) |
| Dark | Auto | `dark.png` |
| Any | Tinted | `tinted.png` + accent |
| Any | Dark | `dark.png` (sistem mode'unu override) |
| Any | Light | `icon.png` (light) |

---

## 8. Marketing Icon (App Store Connect)

Launcher icon ≠ Marketing icon. App Store submission için ayrı dosya gerekli:

| Özellik | Değer |
|---|---|
| Dosya yolu (öneri) | `apps/mobile/assets/icon-variants/marketing.png` |
| Boyut | 1024 × 1024 px |
| Format | PNG-24, sRGB |
| Alpha | YOK (App Store reddi) |
| Köşe radius | YOK |
| Transparency | Yok (full opaque) |
| Lokalizasyon | Tek varyant (TR/EN ortak — "Lafla" wordmark zaten dil-bağımsız) |
| Tasarım esnekliği | Launcher'a göre **daha gevşek**: gradient, glow, presentational efektler eklenebilir |
| Upload | App Store Connect → App Information → App Icon (build'le gelmez, manuel) |

**Öneri:** Light variant'ı baz al, gradient + ince glow ekle. Cyber-Electric kimliğini daha "premium" gösterecek şekilde finalize et.

---

## TODO

- [ ] Figma dosyası oluştur, URL'i Bölüm 5'e yapıştır
- [ ] `light.png`, `dark.png`, `tinted.png` PNG export → `apps/mobile/assets/icon-variants/`
- [ ] `marketing.png` ayrı export
- [ ] `app.json` `ios.icon` object form'a geçir (Bölüm 6)
- [ ] EAS preview build → 4-mode cihaz testi (Light, Dark, Tinted×2)
- [ ] App Store Connect marketing icon upload

## Blocker'lar

- **Tasarımcı assignment yok.** PNG üretimi için Figma erişimi olan tasarımcı atanmalı.
- **Figma master file URL placeholder.** Dosya oluşturulup link doc'a yapıştırılana kadar üretim başlamaz.
- Code tarafında blocker yok — spec onaylandıktan sonra `app.json` patch'i 5 dakikalık iş.

---

## İlgili dökümanlar

- [`apps/mobile/assets/icon-variants/README.md`](../apps/mobile/assets/icon-variants/README.md) — varlık klasöründeki çalışan spec
- [`docs/APP_STORE_SCREENSHOTS.md`](APP_STORE_SCREENSHOTS.md) — Marketing icon ile beraber kullanılacak ekran görüntüleri
- [`docs/APP_STORE_EN.md`](APP_STORE_EN.md) / [`docs/APP_STORE_TR.md`](APP_STORE_TR.md) — App Store metin alanları
- [`docs/ADR-003-turkish-first.md`](ADR-003-turkish-first.md) — Türkçe-first kimlik, dil-bağımsız wordmark gerekçesi
