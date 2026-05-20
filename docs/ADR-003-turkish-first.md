# ADR-003: Türk-First Pazar Konumlandırması

**Status:** Accepted
**Date:** 2026-05-13
**Last reviewed:** 2026-05-20

> **2026-05-20 update — global pivot reddedildi.**
> 2026-05-18'de "Speak English. For real life. For real exams." global iki-track
> (Daily Life + Exam Prep) pivot'u denendi; onboarding 5 adıma çıktı, paywall
> Exam Pass ($99 one-time) ile genişletildi, content olarak academic/testprep/
> sport/health/travel modları eklendi. **2026-05-20'de iptal edildi**: 5 günde
> üç kimlik (Türk-first → global → Türk-first) karar yorgunluğu yarattı, content
> bundle 8MB'a şişti, Exam Pass IAP product hiç konfigüre edilmedi. ADR-003
> "Accepted" pozisyonu doğru karardı.
>
> **Aşağıdaki "3 mod fokuslu" bölümü güncel değildir** — 2026-05-20 itibarıyla
> 6 user-facing mod uygulanıyor: Flört · İş · Bar · Havaalanı · Günlük · Sipariş.
> Karar genel mantığı (Türk-first, TR-pattern hardcoded, Türkçe correction copy)
> aynı; mod taksonomisi sadece genişledi.

## Bağlam

İngilizce öğrenme uygulama pazarı çok kalabalık: Talkpal, Praktika, Loora, Speak, ELSA, AI LingoPlay, Gliglish, ChatGPT Voice Mode. Hepsi İngilizce-default UI ile uluslararası kitleye hitap ediyor.

## Karar

Lafla **Türkiye-first** olarak konumlanır. Hedef kullanıcı: 18-35 yaş Türk.

**6 mod (2026-05-20 itibarıyla — yukarıdaki update notuna bak):**
- 💕 **Flört** — Tinder/Bumble opener, date, voice notes, recovery
- 💼 **İş** — Slack/Zoom/email/standup/code review/interview
- 🍻 **Bar** — drink ordering + bar small talk / pickup
- ✈️ **Havaalanı** — check-in, security, customs, baggage, flight changes
- ☕ **Günlük** — directions, transport, shopping, hotel, phone, bank, salon, taxi, gym, pharmacy, emergency, tech support
- 🍽️ **Sipariş** — kafe, restoran, delivery, grocery, fastfood, bill, tipping, complaint

> Orijinal karar 3 mod'du (Flört/İş/Banter). MVP'de Sipariş + Günlük rakiplerin
> dolu pazarı diye "dahil değil" denmişti — pratikte Türk kullanıcının "İngilizce
> dondum" anlarının yarısı kafede/havaalanında/günlük durumlarda geçtiği için 2.
> dalgada eklendi. Bar ayrı mod, Banter modu kaldırıldı (Bar'a yedirildi).

## Niye

| Faktör | Detay |
|---|---|
| **Differentiation** | Talkpal/Praktika için Türkiye <%1 önemli, biz %100 odak |
| **Pricing leverage** | 49 TL/ay = Talkpal'in 1/6'sı (~300 TL) |
| **Türk hata desenleri** | Pattern matcher'a TR→EN doğrudan çeviri tuzakları gömülü |
| **Türkçe UI** | Düzeltme açıklamaları Türkçe ("be fiili eksik") |
| **Viral potential** | TikTok'ta Türk yaratıcılar — "yabancıyla konuşurken donan" memeler |
| **Test edilebilir TAM** | ~200K ödemeye razı kullanıcı = ~100M TL pazar |

## Türk-Özel Teknik Özellikler

1. **TR→EN doğrudan çeviri tuzakları** (pattern matcher hardcoded):
   - "Sıkıldım senden" → "I'm bored from you" ❌ → "I'm bored of you" ✅
   - "Bence" → bağlama göre "I think / I'd say / honestly"
2. **Article eksiklikleri** otomatik flag
3. **TH sesi** confusion uyarısı (telaffuz, gelecek)
4. **"ı/i" karışıklığı** yazımda
5. **Kültürel notlar:** Batı dating tempo, work culture codes

## Trade-off'lar

- TAM küçülüyor (global 1B+ → Türkiye ~5M)
- Genişleme için her ülkeye özel pattern bankası gerekir
- Pazarlama Türkçe content gerektirir

Kabul edilebilir çünkü:
- Niche dominance > generic mediocrity
- Türkiye'de tutarsa "Lafla for [country]" şablonu var
- Tutmazsa ucuz öğrenme

## Genişleme

Türkiye MVP başarılı olursa:
1. **Lafla Brasil** (Portekizce pattern'lar)
2. **Lafla Mexico** (İspanyolca pattern'lar)
3. **Lafla India** (Hindi pattern'lar)

Her pazar **lokal pattern bankası** + **lokal UI** + **lokal fiyat**.

## Ne Zaman Yeniden Değerlendiririz

Türk pazarında 6 ayda **<5K aktif kullanıcı** veya **<1K ödeyen kullanıcı**:
- Pivot to international generic
- Veya tek niche'e daha da daral (Tinder English only)
