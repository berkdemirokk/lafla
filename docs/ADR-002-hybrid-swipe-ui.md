# ADR-002: Hibrit Swipe UI

**Status:** Accepted
**Date:** 2026-05-13

## Bağlam

Mainstream İngilizce öğrenme uygulamaları (Duolingo, Babbel) tap-button paradigması kullanıyor. Farklılaşmamız lazım.

## Karar

Lafla **swipe gesture'larını stratejik** olarak kullanır, her yerde değil:

| Ekran | Etkileşim | Niye |
|---|---|---|
| Home / Discovery | Dikey swipe (TikTok-style) | Algoritmik mod feed'i |
| Sub-scene picker | Yatay swipe | Hızlı alt-sahne geçişi |
| Chat | Standart scroll | Sohbet akışı bozulmaz |
| Phrase Review | Tinder-style swipe | "Bildim" / "Tekrar" flashcard |
| Correction kartı | Pull-up gesture | Default kapalı, isteyen açar |
| Profil | Standart scroll | Bilgi yoğun |

## Niye

- **Farklılaşma:** Duolingo "okul defteri", Lafla TikTok generation'a native
- **Engagement:** Swipe → daha uzun oturum (TikTok benchmark)
- **Discovery:** Algoritmik feed mastery model'i ile içerik push'lar
- **Tanıdık mekanik:** Tinder/TikTok pattern'larını kullanıcı zaten biliyor

## Trade-off'lar

- Daha çok animasyon işi (Reanimated)
- Biraz daha yüksek başlangıç dev süresi
- Haptic feedback şart (iOS kolay, Android biraz iş)

Konumlandırmanın kalbinde olduğu için kabul.
