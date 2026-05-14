# NAV_PROPOSAL — FreeChat'i Bottom Nav'e Entegrasyon

**Kapsam:** `apps/mobile/app/feed.tsx` içindeki bottom navigation'a `/freechat` ekranını entegre etme önerisi.
**Status:** Proposal — sadece rapor, kod değişikliği yok.
**Tarih:** 2026-05-14

---

## 1. Mevcut Nav

Şu an `feed.tsx:147-164` arasında bottom nav 4 sekme içeriyor:

| # | Icon | Label | Hedef route | Durum |
|---|------|-------|-------------|-------|
| 1 | 🎓 | Akış | `/feed` (kendisi) | `active` |
| 2 | 🌳 | Beceri | `/skills` | push |
| 3 | 🏆 | Başarım | `/achievements` | push |
| 4 | 👤 | Profil | `/profile` | push |

**Notlar:**
- `Sohbet` (FreeChat) ekranı `apps/mobile/app/freechat.tsx` olarak mevcut fakat bottom nav'dan **erişilemiyor**.
- `top bar` (avatar + ⚙ ikonu) yalnızca `/profile`'a yönlendiriyor — Sohbet için entry-point yok.

---

## 2. Önerilen Yeni Nav — 5 Tab

Sohbet, Akış'tan hemen sonra **ikinci sırada** (merkezi konum, başparmak erişimi):

| # | Icon | Label | Hedef route | Yeni? |
|---|------|-------|-------------|-------|
| 1 | 🎓 | Akış | `/feed` | — |
| 2 | 💬 | **Sohbet** | `/freechat` | **NEW** |
| 3 | 🌳 | Beceri | `/skills` | — |
| 4 | 🏆 | Başarım | `/achievements` | — |
| 5 | 👤 | Profil | `/profile` | — |

**Neden 2. sıra?**
- Akış (içerik tüketimi) → Sohbet (içerik üretimi) doğal flow.
- 5-tab nav'lerde merkez/2. tab en yüksek tıklama oranını alır (Fitts's Law + thumb-zone heuristics).
- Skill/Achievement/Profile sıralaması korunduğu için mevcut kullanıcı muscle-memory'si bozulmaz.

---

## 3. Alternatif: 4 Tab Kalsın

Sohbet'i bottom nav'a almayıp **Profil ekranından veya Akış üst barından** erişilebilir bir CTA olarak konumlandır.

**Olası giriş noktaları:**
- `feed.tsx` topBar'a yeni bir 💬 ikonu (sağda, ⚙'den önce).
- `profile.tsx` içinde "AI Sohbet" satırı (settings/help benzeri).
- Akış'ın FAB'ı (floating action button) — yeni komponent gerektirir.

**Pro:**
- Nav grid 4 tab'da stabil kalır; cognitive load artmaz.
- Tab başına genişlik daha rahat (5 yerine 4 → ~%25 daha geniş hit area).
- Mevcut kullanıcı için sıfır öğrenme eğrisi.

**Con:**
- AI Sohbet, ürünün **hero özelliği** olmasına rağmen gizli kalır → düşük keşif (low discovery).
- Yeni kullanıcı onboarding'te Sohbet'i bulamayabilir → activation metrikleri zayıflar.
- Top bar zaten dolu (avatar + brand + ⚙); 4. ikon görsel olarak sıkışır.

---

## 4. Karar Matrix — 5-tab vs 4-tab

| Kriter | 5-tab (Sohbet bottom) | 4-tab (Sohbet gizli) |
|---|---|---|
| **Discovery** | ✅ Yüksek — her ekranda görünür | ❌ Düşük — derinlikte gömülü |
| **Hero feature signaling** | ✅ "Bu özellik önemli" mesajı | ❌ İkincil özellik gibi durur |
| **Cognitive load** | ⚠️ +1 tab; hâlâ kabul edilebilir aralıkta (Miller's 7±2) | ✅ Minimal |
| **Thumb reachability** | ⚠️ Tab başına ~%20 daha dar; iPhone Mini'de hâlâ ≥44pt | ✅ Daha geniş hit area |
| **Muscle memory (mevcut kullanıcı)** | ⚠️ Beceri/Başarım/Profil sağa kayar | ✅ Sıfır değişiklik |
| **Activation funnel (yeni kullanıcı)** | ✅ Sohbet'i ilk gün dener | ❌ Bulamayabilir |
| **Retention (D7/D30)** | ✅ Konuşma pratiği = günlük dönüş tetikleyici | ⚠️ FreeChat kullanılmazsa retention düşer |
| **Visual balance** | ⚠️ 5 emoji aynı satırda; tasarımı sıkıştırır | ✅ Hava boşluğu daha fazla |
| **A/B test edilebilirlik** | ✅ Env flag ile kolay | ✅ Kolay |
| **Implementation cost** | ✅ ~10 satır (sadece NavTab array) | ✅ ~5 satır (topBar'a ikon) |

**Skor (subjektif):** 5-tab → 7 ✅ / 3 ⚠️ / 0 ❌, 4-tab → 4 ✅ / 2 ⚠️ / 3 ❌

---

## 5. Önerilen Yaklaşım

**5-tab.** Gerekçeler:

1. **Sohbet hero feature** — Lafla'nın diferansiyatörü "Turkish-first English app + AI conversation". FreeChat'i gizlemek, ürünün ana satış vaadini gömmek demek.
2. **Discovery ≫ visual breathing room** — Bottom nav'in işlevi keşfettirmek; estetik ikincil. 5 tab, Duolingo, Babbel, Cake gibi yarışmacıların standardı.
3. **Düşük geri dönülmez maliyet** — Karar yanlışsa, env flag ile ~5 dakikada 4-tab'a geri sarılabilir (bkz. §8 A/B plan).
4. **Activation telemetrisi gerekli** — Şu an FreeChat'in DAU/erişim oranı bilinmiyor; bottom nav'a koyup ölçmek, gerçek veriyi açar.

**Karşı oy:** Eğer FreeChat hâlâ alpha/buggy ise, geniş kitleye expose etmek yerine 4-tab + Profil'den erişim ile kapalı test yapılabilir. Bu durum bilinmediği için varsayım: FreeChat production-ready.

---

## 6. Implementation Diff

**Dosya:** `apps/mobile/app/feed.tsx`
**Satır:** 147–164 (bottom nav `View`'i içindeki `NavTab` array'i)

### Before (current — `feed.tsx:147-164`)

```tsx
{/* Bottom nav */}
<View style={styles.bottomNav}>
  <NavTab icon="🎓" label="Akış" active />
  <NavTab
    icon="🌳"
    label="Beceri"
    onPress={() => router.push("/skills" as never)}
  />
  <NavTab
    icon="🏆"
    label="Başarım"
    onPress={() => router.push("/achievements" as never)}
  />
  <NavTab
    icon="👤"
    label="Profil"
    onPress={() => router.push("/profile" as never)}
  />
</View>
```

### After (proposed — 5-tab)

```tsx
{/* Bottom nav */}
<View style={styles.bottomNav}>
  <NavTab icon="🎓" label="Akış" active />
  <NavTab
    icon="💬"
    label="Sohbet"
    onPress={() => router.push("/freechat" as never)}
  />
  <NavTab
    icon="🌳"
    label="Beceri"
    onPress={() => router.push("/skills" as never)}
  />
  <NavTab
    icon="🏆"
    label="Başarım"
    onPress={() => router.push("/achievements" as never)}
  />
  <NavTab
    icon="👤"
    label="Profil"
    onPress={() => router.push("/profile" as never)}
  />
</View>
```

### Stil notları (opsiyonel, ayrı PR olabilir)

- `feed.tsx:266` → `bottomNav.paddingHorizontal: 8` → `4`'e indir (5 tab sığması için).
- `feed.tsx:277` → `navStyles.tab.paddingHorizontal: 12` → `8`'e indir.
- `feed.tsx:283` → `navStyles.tabActive.paddingHorizontal: 16` → `12`'e indir (aktif pill daha kompakt).
- iPhone SE (375pt) test edilmeli; gerekirse label font-size 12 → 11.

**Diğer ekranlar:** `/skills`, `/achievements`, `/profile`, `/freechat` kendi bottom nav'larına sahipse (veya gelecekte olacaksa) **aynı 5-tab sırasını** kullanmalı. Bu PR'da feed.tsx tek dokunuş; diğerleri varsa takip PR.

---

## 7. Visual Mockup

### Şu anki (4-tab)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│              ( feed content )                   │
│                                                 │
├─────────────────────────────────────────────────┤
│  ╭───────╮                                      │
│  │  🎓   │    🌳        🏆        👤            │
│  │ Akış  │  Beceri   Başarım   Profil           │
│  ╰───────╯                                      │
└─────────────────────────────────────────────────┘
   ^^ active pill (BLUE soft bg)
```

### Önerilen (5-tab)

```
┌─────────────────────────────────────────────────┐
│                                                 │
│              ( feed content )                   │
│                                                 │
├─────────────────────────────────────────────────┤
│  ╭───────╮                                      │
│  │  🎓   │   💬       🌳       🏆       👤      │
│  │ Akış  │ Sohbet   Beceri  Başarım  Profil     │
│  ╰───────╯                                      │
└─────────────────────────────────────────────────┘
   ^^ Akış active                ^^ yeni: Sohbet
```

### Sohbet aktifken (preview — `/freechat` ekranı için)

```
┌─────────────────────────────────────────────────┐
│              ( freechat content )               │
├─────────────────────────────────────────────────┤
│           ╭─────────╮                           │
│   🎓      │   💬    │   🌳      🏆      👤      │
│  Akış     │ Sohbet  │ Beceri Başarım  Profil    │
│           ╰─────────╯                           │
└─────────────────────────────────────────────────┘
```

---

## 8. A/B Test Plan

Eğer karar belirsizse, 50/50 split yayınla. Mevcut env infra'sını kullan (Expo `process.env.EXPO_PUBLIC_*`).

### Setup

**Env flag:** `EXPO_PUBLIC_NAV_VARIANT` ∈ `{ "4tab", "5tab", "auto" }`
- `"auto"` (default in production) → kullanıcı `userId` hash'ine göre deterministic split (`hash(userId) % 2`).
- `"4tab"` / `"5tab"` → QA / dev override.

### Pseudocode (feed.tsx içinde, gerçek implementasyon ayrı PR)

```tsx
const navVariant = useNavVariant(); // reads env + userId hash
// ...
{navVariant === "5tab" && (
  <NavTab icon="💬" label="Sohbet" onPress={() => router.push("/freechat")} />
)}
```

`/freechat`'e alternatif giriş noktası (4tab cohort için): `feed.tsx:80-86` topBar'a 💬 ikonu eklenebilir (sadece 4tab cohort'unda render).

### Tracking

`lib/analytics.ts` (varsa — `docs/ANALYTICS.md` referans) ile şu event'leri logla:

| Event | Properties | Amaç |
|---|---|---|
| `nav_tab_clicked` | `tab`, `variant` | Tab başına tıklama dağılımı |
| `freechat_session_started` | `entry_point` (`bottom_nav` / `top_bar` / `profile`), `variant` | Entry point başına aktivasyon |
| `freechat_message_sent` | `session_id`, `variant` | Engagement |
| `feed_dau` / `freechat_dau` | `variant` | Cohort başına DAU |

### Hedef metrikler (success criteria)

| Metrik | Baseline (4tab) | 5-tab başarı eşiği |
|---|---|---|
| FreeChat D1 activation (yeni user) | beklenen <10% | ≥30% |
| FreeChat WAU / total WAU | bilinmiyor | ≥40% |
| Feed DAU (regression check) | mevcut | ≤5% düşüş kabul |
| D7 retention (yeni user) | mevcut | ≥5% artış (umut) |

### Süre + karar kuralı

- **Min süre:** 14 gün (ilk hafta novelty effect, ikinci hafta gerçek davranış).
- **Min sample:** Her cohort'ta ≥500 yeni user.
- **Karar:**
  - 5tab kazanırsa → flag'i `"5tab"` sabitle, 4tab kodunu temizle.
  - Tie veya 4tab kazanırsa → `"4tab"` sabitle, Sohbet için top bar entry-point + onboarding tutorial içine "Sohbet'i dene" adımı ekle.

### Risk

- Variant'ların farklı bottom nav layout'u olması, screenshot-based regression test'leri (varsa) bozar. Snapshot suite'lerini variant başına ayrı tut.
- Eğer crash analytics (Sentry — `docs/SENTRY.md`) variant ayrımı yapmıyorsa, ekle (`Sentry.setTag("nav_variant", variant)`).

---

## Definition of Done — Bu proposal

- [x] Section 1–8 dolduruldu.
- [x] Mevcut nav doğrulandı (`feed.tsx:147-164`).
- [x] `/freechat` route'unun varlığı doğrulandı (`apps/mobile/app/freechat.tsx`).
- [x] Kod değişikliği yapılmadı (sadece doc).
- [ ] Bir sonraki adım: ürün/tasarım sahibi onayı → implementation PR.
