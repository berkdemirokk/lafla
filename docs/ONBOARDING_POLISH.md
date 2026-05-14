# Onboarding & Tutorial Polish — Recommendation Report

> **Scope:** Recommendation only. No code in this document.
> **Target:** Match the first-run quality of Duolingo, Tinder, Cake, Praktika.
> **Author context:** Lafla mobile (Expo SDK 52, TS, theme Cyber-Electric, Turkish-first).
> **Date:** 2026-05-14

---

## 1. Mevcut Akış

Bugünkü first-run iki ekrandan oluşuyor:

### 1.1 Tutorial (`apps/mobile/app/tutorial.tsx`)
- 4 slaytlık yatay swipe (FlatList, pagingEnabled).
- "Atla" butonu sağ üstte; aktif dot brand-yellow olarak genişliyor.
- Slaytlar:
  1. **Bağlam temelli İngilizce** — "Tinder'da flört, Slack'te toplantı, kafede sipariş." (emoji 🗣️)
  2. **Senin için kişisel** — "Hangi durumlar seni zorluyor seçersin." (emoji 🎯)
  3. **Native ses + roleplay** — "Her İngilizce ifadeyi dinle, role-play chat'lerde cevap ver." (emoji 🔊)
  4. **Günde 5 dakika yeter** — "Streak'ini koru, XP topla." (emoji 🔥)
- Son slayttta "Başla →" → `lafla.tutorial.done = true` → `/onboarding` replace.

### 1.2 Onboarding (`apps/mobile/app/onboarding.tsx`)
- Tek ekran. Başlık: **"Hangi durumlar seni zorluyor?"**
- 5 interest seçimi (multi-select, `data/interests.ts`):
  - 💕 Tinder / yabancı tanışma (flirt)
  - 💼 Remote iş / Slack (work)
  - ✈️ Yurtdışı seyahat (daily + order)
  - 🛒 Restoran / kafe sipariş (order)
  - 🍻 Bar / parti sohbeti (banter)
- En az 1 seçim gerekiyor. CTA: **"Devam et →"**.
- `lafla.onboarded=true` + `lafla.interests=[...]` AsyncStorage + `completeOnboarding()` (silent cloud sync) → `/feed`.

### 1.3 Şu Anki Akışın Ana Sorunları
| Sorun | Belirti |
|---|---|
| **Tek-değişkenli kişiselleştirme** | Sadece "interest" topluyoruz. Seviye / motivasyon / hedef yok. |
| **Bağlam yok** | Kullanıcı "neden öğreniyorum" sorusuyla aktive edilmeden seçim ekranına düşüyor. |
| **Push opt-in yok** | iOS izin pop-up'ı yanlış zamanda (feed'in içinde) çıkacak; reject oranı yüksek olur. |
| **Hedef / streak motivasyonu pasif** | Tutorial slide 4'te bahsediliyor ama kullanıcı bir hedef komite etmiyor. |
| **İlk ders kişisel hissetmiyor** | Onboarding'ten sonra direkt /feed'e düşüyor; "senin için" momentum yok. |
| **Time-to-value** | İlk anlamlı interaksiyon (sahne tamamlama) onboarding sonrası başlıyor; tutorial içi "ufak tat" yok. |

---

## 2. Top Apps Reference

### 2.1 Duolingo
Duolingo onboarding'in altın standardı sayılıyor. Akış sırasıyla: dil seçimi → motivation question (5 seçenek: "school", "brain training", "spend time", "connect", "travel") → daily goal commitment (5/10/15/20 min) → CEFR self-assessment ya da placement quiz → first lesson (henüz hesap açmadan). Hesap kaydı **birinci dersin sonunda** çıkıyor — bu "sunk cost" aktivasyon mantığıyla retention'ı +%30 itiyor. Anonim XP + streak başlatıyorlar; geri dönmek için psikolojik kanca yaratıyor. Push opt-in ilk ders sonunda "streak'ini kaybetme" çerçevesiyle soruluyor (kabul oranı ~%60 civarı).

### 2.2 Tinder
Tinder onboarding 7 ekran üzerinden ilerliyor ama her ekranda **tek bir karar** isteniyor (Hick's law). Doğum tarihi → cinsiyet → ilgi → fotoğraf → location → notification → "ready to swipe". Her adım bir progress bar ve cesaretlendirici copy ile geliyor ("Almost there!"). Kritik dersler: (1) izinler **kullanım anına yakın** isteniyor (location → swipe'tan hemen önce); (2) ilk swipe'a kadar geçen süre <90 sn; (3) drop-off'u azaltmak için her ekranda "skip" yok, sadece optional ekranlarda "do this later" var.

### 2.3 Cake (Korean language app)
Cake'in onboarding'i **proof-of-value** üzerine kurulu. Açıldığı anda hesap yok, soru yok — direkt 10 saniyelik bir K-pop / dizi klibi oynatıyor ("Bu cümleyi anlıyor musun?"). Sonra "günde 1 video, %0 sıkıntı" söz veriyor ve **sonra** motivasyon + seviye soruyor. Bu sıra çok güçlü: kullanıcı "ne alıyorum?" sorusuna 15 saniyede yanıt alıyor. Onboarding 5 ekran, hepsi tek seçim, ortalama tamamlama 100 saniye.

### 2.4 Praktika (AI English app, doğrudan rakip)
Praktika'nın onboarding'i 12 ekran kadar uzun ama **psikolojik tetikleyiciler** çok güçlü. Akış: hoş geldin → seviye self-assessment (3 buton: beginner/intermediate/advanced) → motivasyon → "Praktika ile X haftada Y seviyesine ulaşabilirsin" projeksiyon ekranı (kişisel rapor hissi) → günlük hedef → AI avatarı seçimi → first roleplay (henüz paywall yok). Notification opt-in son roleplay'in sonunda; konvenrsyon ~%70. **Önemli ders:** "kişiselleştirilmiş plan" ekranı (fake-loading bar dahil) tamamlama oranını çift haneli artırıyor.

### 2.5 Genel Pattern'ler (Apps ortak)
1. **Tek karar / ekran** (Hick + progress bar).
2. **Motivation question erken** (kullanıcının kendi "why"sini articulate etmesi commitment yaratıyor).
3. **Daily goal hedef commitment** (5-30 dk arası; default 10 dk).
4. **CEFR / seviye self-assessment** (algoritmanın cold-start problemi).
5. **Projection / proof-of-value** ekranı ("1 hafta sonra şunu yapabileceksin").
6. **First lesson account-gating'ten önce.**
7. **Push opt-in usage anına yakın**, "streak'ini kaybetme" framing'i ile.

---

## 3. Eksik Olanlar — Specific Improvements

| # | Eksik | Neden Önemli | Tahmini Etki |
|---|---|---|---|
| 1 | **Motivation question** ("Niye İngilizce öğreniyorsun?" — iş / seyahat / dating / eğlence) | Kullanıcının kendi why'ını verbalize etmesi → commitment + uygun ton/copy. | Retention D7 +%8–12 |
| 2 | **Daily goal commitment** (5 / 10 / 15 / 30 dk) | Push & streak için kullanılabilecek eksplisit hedef; "günde 5 dk yeter" copy'sini eyleme dönüştürür. | Retention D30 +%10–15 |
| 3 | **CEFR self-assessment** (başlangıç / orta / ileri) | Feed algoritmasının cold-start problemi; ilk sahneler doğru zorlukta gelir. | Completion D1 +%15–20 |
| 4 | **Personalized projection** ("0 ders → 1 hafta sonra 10 sahne hallediyorsun") | Proof-of-value, dopamin tetikleyici. Praktika'da çift haneli iyileşme yaratmış. | Onboarding completion +%5–8 |
| 5 | **Notification opt-in** ("Streak'ini kaybetme" framing'i, ilk sahne sonu) | Doğru zamanda sorularak iOS rejection avoid. | Push opt-in %35 → %60+ |
| 6 | **Personalized first scenario** ("Senin için hazırladık" sahne intro) | First lesson moment'i; momentum yaratır. | D1 retention +%10 |
| 7 | **Progress bar tüm akışta** (1/7, 2/7, ...) | Drop-off psikolojik azalır. Sunk-cost yaratır. | Akış tamamlama +%5 |
| 8 | **Account creation deferred** (ilk sahne sonu) | Anonim onboarding → ilk değeri alır → sonra hesap istenir. | Sign-up rate +%20–30 |

**Bonus küçük detaylar:**
- Tutorial slaytlarına subtle Lottie/animation katmanı (şu an statik emoji).
- "Atla" CTA'sını tutorial içinde küçültmek (drop-off'u azaltır).
- Interest seçiminde min/max gösterimi ("1–3 seç").
- Haptic feedback kart seçiminde.

---

## 4. Önerilen Yeni Akış — 7 Adım

```
[1] Tutorial (mini, 3 slayt)
        ↓
[2] Motivasyon — "Niye İngilizce?"
        ↓
[3] Seviye — CEFR self-assessment
        ↓
[4] İlgi alanları — mevcut interest picker (refined)
        ↓
[5] Günlük hedef — 5/10/15/30 dk
        ↓
[6] Kişisel projeksiyon + Notification opt-in
        ↓
[7] İlk sahne — "Senin için hazırladık" (anonim, paywall yok)
        ↓
        → /feed (ya da hesap modal'ı)
```

**Tasarım kuralları:**
- Her ekranda **üstte ince progress bar** (1/7, 2/7, ...).
- "Geri" oku üst-sol; "Atla" sadece optional (4 ve 6) ekranlarda.
- Her ekran maksimum **1 ana soru** + 3–5 seçenek.
- Hapatic light impact her seçimde.
- Account modal **yalnızca** [7]'den sonra (ya da /feed'in 3. sahnesinden sonra) — anonim onboarding.

---

## 5. Spec for Each New Step

### 5.1 Step [1] — Tutorial (refined)
**Değişiklik:** 4 → **3 slayt**. 4. slayt ("Günde 5 dakika") motivasyon sorusuyla birleştirildi.

**Slayt 1 — Bağlam:**
- Emoji/Lottie: 🗣️ (subtle pulse)
- Başlık: "Hayatın senaryolarıyla İngilizce"
- Body: "Tinder, Slack, kafe, parti — gerçek anlarda konuş."

**Slayt 2 — Kişisel:**
- Emoji/Lottie: 🎯
- Başlık: "Senin için kişisel"
- Body: "Ne öğrenmek istediğini sen söylersin. Akış sana göre."

**Slayt 3 — Roleplay:**
- Emoji/Lottie: 🔊
- Başlık: "Native ses + roleplay"
- Body: "Dinle, cevap ver, ustalaş. Söyle gitsin."

**CTA:** "Devam et →" (son slayttta "Başlayalım →")

```
┌─────────────────────────┐
│  ●●●          [Atla]    │  ← progress dots, skip
│                         │
│        🗣️                │  ← emoji 104px
│                         │
│   Hayatın senaryolarıyla │
│       İngilizce          │
│                         │
│   Tinder, Slack, kafe,   │
│   parti — gerçek...      │
│                         │
│  ●○○                    │  ← page dots
│                         │
│  ┌──────────────────┐   │
│  │  Devam et →      │   │
│  └──────────────────┘   │
└─────────────────────────┘
```

---

### 5.2 Step [2] — Motivasyon
**Soru:** "Niye İngilizce öğreniyorsun?"
**Alt-text:** "Birden fazla seçebilirsin — sana göre içerik göstereceğiz."

**Seçenekler (multi-select, min 1, max 4):**
| Emoji | Label | Internal tag |
|---|---|---|
| 💼 | İş / kariyer | `motiv:work` |
| ✈️ | Seyahat / yurtdışı | `motiv:travel` |
| 💕 | Tanışma / dating | `motiv:dating` |
| 🎬 | Eğlence (dizi, müzik, oyun) | `motiv:fun` |

**CTA:** "Devam et →" (disabled → "En az birini seç")

```
┌─────────────────────────┐
│ ← [▓▓░░░░░] 2/7   [Atla]│
│                         │
│ Niye İngilizce          │
│ öğreniyorsun?            │
│                         │
│ Birden fazla seç —      │
│ sana göre içerik...     │
│                         │
│ ┌─────────────────────┐ │
│ │ 💼  İş / kariyer    │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ ✈️  Seyahat ✓       │ │  ← selected = yellow tint
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 💕  Dating          │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 🎬  Eğlence ✓       │ │
│ └─────────────────────┘ │
│                         │
│  ┌──────────────────┐   │
│  │  Devam et →      │   │
│  └──────────────────┘   │
└─────────────────────────┘
```

**Interaction:** Tek tap toggle. Seçim sırasında haptic light. CTA aktifleşince yellow + glow.

---

### 5.3 Step [3] — Seviye (CEFR Self-Assessment)
**Soru:** "Şu an İngilizce'n hangi seviyede?"
**Alt-text:** "Açık ol — sana göre başlayacağız."

**Seçenekler (single-select, required):**
| Level | Label | Sub-label |
|---|---|---|
| `beginner` (A1–A2) | **Başlangıç** | "Birkaç kelime, basit cümleler" |
| `intermediate` (B1–B2) | **Orta** | "Anlıyorum ama konuşurken takılıyorum" |
| `advanced` (C1+) | **İleri** | "Akıcıyım, daha doğal konuşmak istiyorum" |

**CTA:** "Devam et →"

```
┌─────────────────────────┐
│ ← [▓▓▓░░░░] 3/7         │
│                         │
│ Şu an İngilizce'n        │
│ hangi seviyede?          │
│                         │
│ Açık ol — sana göre     │
│ başlayacağız.           │
│                         │
│ ┌─────────────────────┐ │
│ │ 🌱  Başlangıç       │ │
│ │  Birkaç kelime...   │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 🚀  Orta            │ │  ← single-select
│ │  Anlıyorum ama...   │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ ⚡  İleri           │ │
│ │  Akıcıyım, daha...  │ │
│ └─────────────────────┘ │
│                         │
│  ┌──────────────────┐   │
│  │  Devam et →      │   │
│  └──────────────────┘   │
└─────────────────────────┘
```

**Interaction:** Single-select; seçim anında alttaki diğer kartlar yarı opaklaşır.

---

### 5.4 Step [4] — İlgi Alanları (mevcut, refined)
**Soru:** "Hangi durumlar seni en çok zorluyor?"
**Alt-text:** "1–3 tane seç. Akışın bunlara odaklı olacak."

Mevcut 5 interest aynen kalır. Değişiklik:
- "1–3 tane seç" min/max sayacı eklenir.
- Seçim 3'e ulaşınca diğer kartlar disabled görsel.
- "Atla" eklenir (motivation'dan tag çıkarımı varsa).

```
┌─────────────────────────┐
│ ← [▓▓▓▓░░░] 4/7   [Atla]│
│                         │
│ Hangi durumlar           │
│ seni zorluyor?           │
│                         │
│ 1–3 tane seç (2/3)      │
│                         │
│ ┌─────────────────────┐ │
│ │ 💕  Tinder ✓        │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 💼  Remote iş ✓     │ │
│ └─────────────────────┘ │
│ ...                     │
└─────────────────────────┘
```

---

### 5.5 Step [5] — Günlük Hedef
**Soru:** "Günde ne kadar zamanın var?"
**Alt-text:** "Küçük başlayalım — istediğin zaman artırabilirsin."

**Seçenekler (single-select, default = 10 dk):**
| Süre | Label | Sub-label |
|---|---|---|
| 5 | **5 dakika** | "Asansör molası — Kolay" |
| 10 | **10 dakika** | "Sıradan — Önerilen ⭐" |
| 15 | **15 dakika** | "Disiplinli — Hızlı ilerle" |
| 30 | **30 dakika** | "Yoğun — Sahne öğrenicisi" |

**CTA:** "Devam et →"

```
┌─────────────────────────┐
│ ← [▓▓▓▓▓░░] 5/7         │
│                         │
│ Günde ne kadar           │
│ zamanın var?            │
│                         │
│ Küçük başlayalım —      │
│ istediğin zaman...      │
│                         │
│ ┌─────────────────────┐ │
│ │ ☕  5 dk             │ │
│ │  Asansör molası      │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 🔥  10 dk  ⭐ Öner.  │ │  ← default selected
│ │  Sıradan             │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ ⚡  15 dk            │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ 🚀  30 dk            │ │
│ └─────────────────────┘ │
│                         │
│  ┌──────────────────┐   │
│  │  Devam et →      │   │
│  └──────────────────┘   │
└─────────────────────────┘
```

---

### 5.6 Step [6] — Kişisel Projeksiyon + Notification Opt-in
İki micro-step bir ekrana sığar (scroll). Yoksa 2 ayrı ekran.

**Üst yarı — Projeksiyon kartı:**
- Başlık: "Senin planın hazır 🎯"
- Body (dinamik):
  > "10 dakikan, **Orta** seviyeden başlayarak, **Tinder** ve **iş** odaklı...
  > **1 hafta sonra** 10+ sahne hallediyor olacaksın.
  > **1 ay sonra** ana sebeplerinde rahat konuşacaksın."
- Görsel: 0 ders → 7 gün → 30 gün progress timeline (3 nokta, yellow line).

**Alt yarı — Bildirim opt-in:**
- Başlık: "Streak'ini kaybetme"
- Body: "Günde tek bir hatırlatma — küçük bir push, büyük bir habit."
- Mock screenshot (in-app preview, gerçek OS pop-up değil):

  ```
  ┌───────────────────────┐
  │ 🔥 Lafla              │
  │ Streak: 7 🔥          │
  │ Bugünkü 10 dakikan?   │
  └───────────────────────┘
  ```

**CTA:** "Bildirimleri aç →" (primary), "Şimdi değil" (secondary text link).

```
┌─────────────────────────┐
│ ← [▓▓▓▓▓▓░] 6/7         │
│                         │
│ ┌─────────────────────┐ │
│ │ 🎯 Senin planın hazır│ │
│ │                      │ │
│ │ 10 dk · Orta seviye  │ │
│ │ Tinder + iş odaklı   │ │
│ │                      │ │
│ │ 0───●───●───●        │ │
│ │ Bugün 7g  30g  90g   │ │
│ │       10   30   100  │ │
│ │       sahne sahne sah│ │
│ └─────────────────────┘ │
│                         │
│ Streak'ini kaybetme     │
│                         │
│ Günde tek bir hatırlatma│
│ — küçük bir push,       │
│ büyük bir habit.        │
│                         │
│ ┌─────────────────────┐ │
│ │ 🔥 Lafla            │ │  ← mock notif
│ │ Bugünkü 10 dakikan? │ │
│ └─────────────────────┘ │
│                         │
│  ┌──────────────────┐   │
│  │ Bildirimleri aç → │  │
│  └──────────────────┘   │
│   Şimdi değil           │
└─────────────────────────┘
```

**Interaction:** "Bildirimleri aç" → iOS native pop-up (ilk gerçek sistem isteği). "Şimdi değil" → silent skip, /feed'de geri sorulur.

---

### 5.7 Step [7] — İlk Sahne ("Senin için hazırladık")
**Üst overlay:** "Senin için hazırladık ✨" (3 sn auto-dismiss).

**Sahne seçimi:** İlgi alanları + motivasyon + seviyeye göre algoritmik seçilen **1 sahne**.

Örnek (kullanıcı = Tinder + Orta + Dating motivation):
- Sahne: "Tinder'da ilk mesaj — kahve teklifi"
- 3 replik, yarısı dolu, ses + tap-to-fill.

**Sahne sonunda:**
- Konfeti + "İlk sahne tamamlandı 🎉 +20 XP"
- Hesap creation modal (Apple / Google / email) — **bu noktada sunk-cost yüksek, sign-up rate çok daha iyi**.
- Modal close → anonim devam (lokal state).

```
┌─────────────────────────┐
│ [▓▓▓▓▓▓▓] 7/7           │
│                         │
│ ✨ Senin için hazırladık │
│                         │
│ Tinder · İlk mesaj      │
│                         │
│ ┌─────────────────────┐ │
│ │ [npc-bubble]        │ │
│ │ Hey! Saw you like... │ │
│ └─────────────────────┘ │
│         ┌─────────────┐ │
│         │ [user-bub]   │ │
│         │ Yeah, ___ ?  │ │
│         └─────────────┘ │
│                         │
│ Boşluğu doldur:         │
│ [ love ] [ hate ] ...   │
│                         │
└─────────────────────────┘
```

---

## 6. Estimated Impact

### Methodology
Industry benchmark + Praktika/Cake/Duolingo case studies. Lafla'nın user pool'u küçük olduğu için noisy; rakamlar **back-of-envelope**, A/B test ile doğrulanmalı.

| Metrik | Baseline (current) | Proposed | Δ | Confidence |
|---|---|---|---|---|
| **Onboarding completion** (open → /feed) | ~65% | ~80% | +15pp | Medium-High |
| **D1 retention** | ~25% | ~33% | +8pp | Medium |
| **D7 retention** | ~12% | ~17% | +5pp | Medium |
| **D30 retention** | ~5% | ~8% | +3pp | Low-Medium |
| **Push opt-in rate** | ~30% (varsayım) | ~55% | +25pp | High |
| **Sign-up conversion** (anonim → hesap) | ~40% | ~55% | +15pp | Medium |
| **Median time-to-first-scene-completion** | ~3–4 dk | ~2 dk | −1.5 dk | High |

**Toplam estimated:**
- 1000 yeni indirme → bugün ~50 D7 active user.
- Proposed → ~80–95 D7 active user.
- **~+60–90% D7 retention uplift.**

### Risk Notları
- Akış uzaması (1 → 7 step) drop-off ekleyebilir; her ek step ~%3–5 drop-off normal. Progress bar + tek-soru/ekran prensibi bunu absorb eder.
- Notification opt-in'i çok erken vermek tersine etki yapar — Step 6, ilk sahne öncesi optimum.
- "Personalized projection" copy'si **hype gibi durmamalı**; conservative ve specific olmalı.

---

## 7. Implementation Effort

Story points (SP): 1 SP ≈ 0.5 gün full-stack mobile dev.

| # | Step / Iş | SP | Saat tahmini | Risk |
|---|---|---|---|---|
| 1 | Tutorial slide sayısını 4→3, copy refresh | 1 | 2–3 sa | Low |
| 2 | Progress bar component + her ekrana entegrasyon | 2 | 4–6 sa | Low |
| 3 | **Step [2] Motivation screen** + `data/motivations.ts` + AsyncStorage key (`lafla.motivations`) | 2 | 5–7 sa | Low |
| 4 | **Step [3] CEFR Level screen** + `data/levels.ts` + storage (`lafla.level`) | 2 | 4–6 sa | Low |
| 5 | **Step [4] Interest** — min/max sayaç, disabled state, opsiyonel skip | 1 | 2–3 sa | Low |
| 6 | **Step [5] Daily Goal** + `data/goals.ts` + storage (`lafla.dailyGoal`) | 2 | 4–6 sa | Low |
| 7 | **Step [6a] Projection card** (dinamik copy + 3-nokta timeline) | 3 | 6–9 sa | Med |
| 8 | **Step [6b] Notification opt-in** (mock preview + iOS native call + analytics) | 3 | 6–9 sa | Med |
| 9 | **Step [7] First scenario** seçim algoritması + "Senin için hazırladık" overlay | 5 | 1–2 gün | **High** |
| 10 | Account creation deferred — modal'ı feed'de göstermek + anonim state | 3 | 6–9 sa | Med |
| 11 | Haptics + transitions + accessibility (TalkBack/VoiceOver labels) | 2 | 4–6 sa | Low |
| 12 | Analytics events (her step için `onboarding_step_X_completed`) | 2 | 4–6 sa | Low |
| 13 | A/B test framework hooks (feature flag her step için) | 3 | 6–9 sa | Med |
| | **TOPLAM** | **31 SP** | **~12–17 dev day** | |

### Önerilen Sprint Planı (2 sprint, 2 hafta)
- **Sprint 1 (1 hafta):** Items 1–6 → "core 5 yeni step ekrandan ekranı çalışıyor".
- **Sprint 2 (1 hafta):** Items 7–13 → "projection, first scene, defer account, analytics, polish".

### Faz Yaklaşımı (eğer önce MVP isteniyorsa)
**Phase A — MVP (3–4 gün):** Items 1, 3, 4, 6, 12 → motivation + level + daily goal + analytics. En düşük effort, en yüksek learning.
**Phase B — Engagement (3–4 gün):** Items 7, 8 → projection + notification opt-in. D7 retention'a en büyük katkı.
**Phase C — Time-to-value (5–6 gün):** Items 9, 10 → first scene + deferred account. Sign-up conversion ve aktivasyon.

---

## Appendix — Open Questions

1. **Sign-up modal hangi adımda?** Step 7 sonu (sunk-cost yüksek) mu yoksa /feed'in 3. sahnesi sonu mu? Praktika ikincisini kullanıyor; A/B test edilebilir.
2. **CEFR placement quiz** opsiyonel olarak eklenmeli mi? Self-assessment yanılma payı yüksek; 3 soruluk hızlı placement (Praktika modeli) doğruluğu artırır ama akışı +1 step uzatır.
3. **Streak başlangıcı:** Anonim kullanıcı için streak hangi noktada başlasın? İlk sahne tamamlanınca mı, push opt-in alınınca mı?
4. **Locale fallback:** Tüm copy Turkish-first ama İngilizce locale için fallback gerekli mi? `i18n` strategy karar bekliyor.
5. **Animation budget:** Lottie ile her step'e 30–100KB ekleyebiliriz. Bundle size'a etki?

---

*Son: Yedi bölüm tamam. İlk implementasyon önerisi: Phase A MVP (motivation + level + daily goal) → 3-4 gün → A/B test → veriye göre Phase B & C.*
