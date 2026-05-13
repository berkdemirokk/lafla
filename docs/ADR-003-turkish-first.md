# ADR-003: Türk-First Pazar Konumlandırması

**Status:** Accepted
**Date:** 2026-05-13

## Bağlam

İngilizce öğrenme uygulama pazarı çok kalabalık: Talkpal, Praktika, Loora, Speak, ELSA, AI LingoPlay, Gliglish, ChatGPT Voice Mode. Hepsi İngilizce-default UI ile uluslararası kitleye hitap ediyor.

## Karar

Lafla **Türkiye-first** olarak konumlanır. Hedef kullanıcı: 18-35 yaş Türk.

**3 mod fokuslu:**
- **Flört Modu** — Tinder/Bumble
- **İş Modu** — Slack/Zoom/remote work
- **Banter Modu** — Bar/parti/casual

Generic sahneler (havalimanı, restoran, otel) MVP'ye **dahil değil**. Bunlar rakiplerin dolu pazarı.

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
