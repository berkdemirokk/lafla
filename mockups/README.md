# Lafla Mockups

Statik HTML mockup'lar — Lafla'nın ana ekranlarının görsel önizlemesi. Tarayıcıda aç, gör.

## Nasıl açılır

`index.html` dosyasına çift tıkla — varsayılan tarayıcı açar. Ya da:

```
file:///C:/Users/berk/eng/lafla/mockups/index.html
```

## 5 Ekran (Design Tour)

| # | Ekran | Ne gösteriyor |
|---|---|---|
| 1 | **Onboarding** | Interest multi-select. "Mod" seçtirmiyor — ilgilerini soruyor. |
| 2 | **Ana Akış** | TikTok-style tam ekran kart. Swipe up → sıradaki sahne. |
| 3 | **Alıştırma** | Boşluk doldurma örneği. Progress dots, minimalist UI. |
| 4 | **Roleplay Chat** | iMessage tarzı bot ile sohbet. Cevap altında naturalness skoru. |
| 5 | **Ders Bitti** | Skor, XP, streak özeti. Sıradaki sahneye geçiş. |

## Tasarım Sistemi (`styles.css`)

| Token | Değer | Kullanım |
|---|---|---|
| `--bg-app` | `#0a0a0a` | Ana arkaplan (siyah) |
| `--bg-card` | `#1f1f1f` | Kart, buton arkaplan |
| `--accent` | `#FF6B35` | Sipariş modu rengi, CTA |
| `--text-primary` | `#ffffff` | Ana metin |
| `--text-secondary` | `#a0a0a0` | Alt metin |
| `--success` | `#4ADE80` | Doğru cevap |
| `--error` | `#EF4444` | Yanlış cevap |
| Font | System sans-serif | Inter, SF Pro, Segoe UI |

## Bu Mockup'lar Ne Değil

- **Çalışmıyor.** Sadece görsel.
- **Mobile RN ile birebir değil** — Expo'da hayata geçirilirken bazı detay farklar olabilir.
- **Etkileşim yok.** Buton tıklanmıyor, swipe çalışmıyor.

## Mobile RN'ye Geçiş

`styles.css` tokenları → React Native `StyleSheet`'e direkt çevrilebilir. Bileşenler:

- `.phone` → `SafeAreaView`
- `.interest-card` → `Pressable` + custom view
- `.feed-card` → `Pressable` + LinearGradient
- `.bubble` → custom `MessageBubble` bileşeni
- vs.

Sonraki faz: `apps/mobile/` içinde Expo + RN ile bu ekranların gerçek implementasyonu.
