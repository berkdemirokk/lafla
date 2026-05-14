# Lafla — iOS 18 App Icon Variants

Bu klasör, iOS 18+ üç-mod (light / dark / tinted) icon sistemi için tasarım spec'ini ve üretilen PNG dosyalarını barındırır.

> **Durum:** SPEC ONLY — bu dökümandaki PNG'ler henüz üretilmedi. Aşağıdaki spec'e göre Figma/Sketch'te üretilip bu klasöre konulmalı, ardından `app.json` güncellenmeli.

---

## 1. iOS 18 Icon System

iOS 18 ile birlikte Apple, ana ekran (Home Screen) ikonları için **üç ayrı modu** resmi olarak destekliyor. Kullanıcı bu modlar arasında **Settings → Home Screen → App Icons (Customize)** üzerinden geçiş yapar:

| Mod | Ne zaman görünür | Apple davranışı |
|---|---|---|
| **Light (any)** | Varsayılan, açık tema veya kullanıcı "Light" seçtiyse | Icon olduğu gibi render edilir |
| **Dark** | Kullanıcı "Dark" appearance seçtiyse, gece moduyla beraber | Dark variant render edilir; yoksa system `any` ikonu siyah arka plana kompozite eder (genelde çirkin sonuç) |
| **Tinted** | Kullanıcı "Tinted" seçtiyse, sistem accent rengi uygulanır | Apple grayscale variant'ı alır, sonra kullanıcının seçtiği tint rengini multiply/luminosity blend ile uygular |

**Önemli kısıtlar (Apple HIG, iOS 18):**
- Üç variant da **1024×1024 px, sRGB, PNG-24**.
- **Köşe yuvarlama YOK** — iOS otomatik olarak superellipse mask uygular.
- **Transparency yok** (light, dark için). Tinted için **alpha kanalı opsiyonel** ama Apple "grayscale, no alpha" öneriyor.
- Içerik **safe area = merkez 824×824 px** (her kenardan 100 px boşluk önerilir; özellikle Dynamic Island ve widget render durumları için).
- Tinted variant: **Tek kanal grayscale gibi davranır.** Beyaz = tint rengi, siyah = arka plan. Rengin doğrudan kullanılmaması beklenir.

---

## 2. Mevcut Icon (`apps/mobile/assets/icon.png`)

**Analiz:**
- Boyut: 1024×1024 px
- Arka plan: koyu siyah → antrasit gradient (`#1a1c1c` ailesi)
- Ana motif: **stilize konuşma balonu / chat bubble**, neon sarı (`#f6ff00`) ve siyah üçgen kesitlerle parçalanmış, aperture / shutter benzeri geometrik desen
- İç merkez: **beyaz ses dalgası (waveform)** — Lafla'nın "konuşma + dinleme" kimliğini temsil ediyor
- Toplam kompozisyon: sarı + siyah dominant, beyaz aksent, asimetrik chat-bubble silüeti

Bu icon **light mode'a uygun olarak okunabiliyor**, fakat:
- Dark mode için arka plan yeterince koyu olsa da sistem dark wallpaper'ında **kenar kontrastı kayboluyor** → ayrı dark variant gerekli.
- Tinted mode için sistem otomatik desature ettiğinde sarı + beyaz birbirine yakın gri tonlara düşüyor → ayrı tinted variant şart.

---

## 3. Variant Specs

Üç dosya da `apps/mobile/assets/icon-variants/` altında, tam olarak şu isimlerle:

### 3.1 `light.png` — Light Mode
- **Boyut:** 1024×1024 px
- **Format:** PNG-24, sRGB, alpha YOK
- **Arka plan:** Solid pure black (`#000000`) — light mode wallpaper'ın çoğu açık olduğu için maksimum kontrast
- **Ana motif:** Mevcut chat-bubble + waveform kompozisyonu, **neon sarı (`#f6ff00`)** dominant
- **Aksent:** İçerideki waveform pure white (`#ffffff`)
- **Köşe radius:** YOK (iOS mask uygular)
- **Padding:** Her kenardan minimum 100 px iç boşluk
- **Hedef his:** "Elektrikli, dikkat çeken, neon" — Cyber-Electric tema

### 3.2 `dark.png` — Dark Mode
- **Boyut:** 1024×1024 px
- **Format:** PNG-24, sRGB, alpha YOK
- **Arka plan:** Solid pure black (`#000000`)
- **Ana motif:** Aynı chat-bubble silüeti, fakat:
  - Sarı dolgular → **ince sarı kontur** (stroke 8–12 px), iç dolgu siyah veya çok koyu antrasit (`#0a0a0a`)
  - Sarı saturation `%70`'e düşürülmüş (`#c8d100` civarı) → dark home screen'de göz yormaması için
  - Waveform: yumuşak beyaz (`#e6e6e6`), %80 opaklıkta sarı glow halesi
- **Köşe radius:** YOK
- **Hedef his:** Light variant'ın "dimmed neon" versiyonu — gece okunur ama parlamaz

### 3.3 `tinted.png` — Tinted Mode
- **Boyut:** 1024×1024 px
- **Format:** PNG-24, sRGB. Tek-kanal grayscale gibi davransa da PNG-24 olarak export; **alpha YOK** (Apple bunu tercih ediyor — flat composite üzerine tint uygular)
- **Renk paleti:** Sadece grayscale, `#000000` ↔ `#ffffff` aralığı
- **Arka plan:** Pure black (`#000000`) — sistem tint rengini "luminance" üzerinden uygular, siyah alanlar etkilenmez
- **Ana motif:** Chat-bubble silüeti **pure white (`#ffffff`) flat fill**, iç detay yok
- **Waveform:** Aynı silüet içinde, **`#bfbfbf` orta-gri**, sadece okunabilirlik için ton farkı
- **Köşe radius:** YOK
- **Geometrik karmaşıklık:** Mümkün olduğunca azalt — tint mode'da ince detaylar boğulur. Aperture / shutter çizgileri light variant'a kıyasla `%40 daha kalın` olmalı.
- **Hedef his:** "Solid logomark" — kullanıcı hangi tint'i seçerse seçsin (mavi, mor, kırmızı) tanınabilir kalsın

---

## 4. Design Guidance — Variant Bazında Özet

| Variant | Background | Wordmark/Motif | Aksent | Saturation Note |
|---|---|---|---|---|
| `light.png` | Solid `#000000` | Neon yellow `#f6ff00` fill | Pure white waveform | `%100` — agresif neon |
| `dark.png` | Solid `#000000` | Thin yellow stroke + black fill | Off-white `#e6e6e6` waveform | `%70` — gözü yormayan |
| `tinted.png` | Solid `#000000` | Pure white `#ffffff` silüet | Mid-gray `#bfbfbf` iç detay | Yok (grayscale) |

**Ortak kurallar:**
- Hiçbir variant **brand mavi (`#1978e5`)** içermez — sadece sarı/siyah/beyaz palet. Mavi UI'da kalır, icon'da kullanılmaz (tek bir renkte konsolide kimlik).
- Konuşma balonu silüetinin **outline'ı üç variant'ta da pixel-perfect aynı** olmalı — sadece dolgu/stroke değişir. Bu, mod geçişlerinde "aynı app" hissini korur.
- Waveform pozisyonu ve sayısı (önerilen 5 bar) üç variant'ta sabit.

---

## 5. Production Checklist

- [ ] Figma dosyası: `TODO_FIGMA_URL` (master file — üç variant aynı artboard'da, kontrol için yan yana)
- [ ] Master vector layer'lar (chat-bubble silüeti, waveform) **shared component** olarak — variant'lar override ile türetilsin
- [ ] Export ayarları:
  - PNG-24
  - sRGB color profile
  - 1024×1024 px
  - **Light & Dark:** alpha kanalı kapalı (flatten)
  - **Tinted:** alpha kanalı kapalı (Apple "no alpha" tavsiyesi)
- [ ] Dosya boyutu bütçesi: **her variant < 500 KB** (tipik beklenti 150–300 KB)
- [ ] Kalite kontrol: 3 variant'ı yan yana 60×60 thumbnail'da gör — tanınabilirlik testi
- [ ] Cihaz testi: iPhone (iOS 18+) Light / Dark / Tinted (mavi tint) / Tinted (kırmızı tint) için 4 ekran görüntüsü
- [ ] Marketing icon ayrı tutulacak (Bölüm 8) — App Store Connect için 1024×1024 ayrı upload

---

## 6. `app.json` Integration

PNG'ler hazır olduğunda `apps/mobile/app.json` içindeki `ios.icon` alanı object form'a geçirilir:

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
  "infoPlist": { ... }
}
```

**Notlar:**
- `any` mevcut `./assets/icon.png` ile geriye uyumlu kalır — eski iOS sürümleri (< 18) bu icon'u kullanır.
- Şu anki üst seviye `"icon": "./assets/icon.png"` alanı kaldırılır; `ios.icon` object formu onu override eder.
- Light variant'ı ayrı dosyaya çıkarmak istersek (`icon-variants/light.png`), `any` onu işaret edebilir; aksi halde root `icon.png` aynı görevi görür.
- Expo SDK 50+ ve EAS Build, object form'u destekler. **Bare workflow** kullanılsaydı `Assets.xcassets/AppIcon.appiconset/Contents.json` direkt elden düzenlenirdi — burada gerek yok.

> **Bu PR'da `app.json` DEĞİŞTİRİLMEDİ.** PNG üretimi sonrası ayrı bir commit'te güncellenecek.

---

## 7. Cihazda Test

PNG'ler entegre edilip yeni build yüklendikten sonra:

1. **Light mode test**
   - iPhone: Settings → Display & Brightness → **Light**
   - Home Screen'de Lafla iconu kontrol edilir.

2. **Dark mode test**
   - Settings → Display & Brightness → **Dark**
   - Aynı icon, dark variant'a otomatik geçmeli.

3. **Tinted mode test**
   - Home Screen → boş alana **long-press** → **Edit** (sol üst) → **Customize**
   - Alt panelden **Tinted** seçilir → renk slider'ından farklı tint'ler denenir (mavi, kırmızı, mor)
   - Lafla iconu seçilen tint'le boyanmalı, silüet okunabilir kalmalı

4. **Otomatik geçiş (Auto)**
   - Customize panelinde **Auto** seçilirse sistem `Light` mode'da light, `Dark` mode'da dark variant kullanır.

5. **Settings shortcut test**
   - Settings → Home Screen & App Library — burada da preview gösterilir.

---

## 8. Marketing Icon (App Store)

Launcher icon'undan **ayrı** bir 1024×1024 dosya gerekir, App Store Connect submission için:

- **Dosya yolu önerisi:** `apps/mobile/assets/icon-variants/marketing.png` veya kök `apps/mobile/assets/marketing-icon.png`
- **Boyut:** 1024×1024 px, PNG-24, sRGB
- **Alpha:** kesinlikle YOK (App Store Connect reddi)
- **Köşe yuvarlama:** YOK (Apple preview'da kendi mask'ı uygular)
- **Tasarım:** **Light variant'a yakın** olabilir, ama daha "presentational" — gradient/glow eklenebilir, çünkü launcher gibi sıkı safe-area kuralları yok.
- **Transparency rules:** Launcher icon'undan daha gevşek — yine de full opaque öneriliyor.
- **Yükleme:** App Store Connect → App Information → App Icon alanına manuel upload (build'le birlikte gelmez).
- **Lokalizasyon:** Tek varyant TR/EN için ortak — wordmark zaten "Lafla" (lokalizasyona ihtiyaç yok).

---

## TODO (bu dokümanın kapsamı dışında)

- [ ] Figma master file oluştur, URL'i Bölüm 5'e yapıştır
- [ ] `light.png`, `dark.png`, `tinted.png` PNG export et — bu klasöre koy
- [ ] `marketing.png` ayrı export
- [ ] `app.json` `ios.icon` object form'a geçir (Bölüm 6)
- [ ] EAS preview build → 3 mode'da cihaz testi
- [ ] App Store Connect marketing icon upload
