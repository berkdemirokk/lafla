# Lafla

> **Söyle gitsin.** *Just say it.*

Bağlam temelli İngilizce hayatta kalma simülatörü. Tinder'dan Slack'e, akşam barından konferans Zoom'una — donduğun her İngilizce anına hazır pratik.

## Hedef Kullanıcı

Türkçe konuşan 18-35 yaş, İngilizce **okuyabilen ama gerçek anda donan** genç. Yurtdışı flört, remote iş, sosyal medya — international yaşam için İngilizce isteyen.

## 3 Mod, Sıfır Tabu

- **Flört Modu** — Tinder, Bumble, gerçek tanışmalar
- **İş Modu** — Slack, Zoom, e-mail, kahve sohbetleri
- **Banter Modu** — Bar, parti, takılma, jokes

## Core Architecture

**Data flywheel, not LLM wrapper.** Detay: [docs/ADR-001-data-flywheel.md](docs/ADR-001-data-flywheel.md)

- Content PC'de offline üretilir (Ollama + Llama 3.1 8B)
- Runtime'da LLM çağrısı YOK — pattern matching + grammar rules
- Her kullanıcı attempt'i variant library'i zenginleştirir
- $0/ay forever (LLM provider bağımlılığı yok)

## Stack

| Layer | Tech |
|---|---|
| Mobile | Expo + React Native |
| Backend | Cloudflare Workers (TypeScript) |
| DB + Auth | Supabase (Postgres) |
| Cache | Upstash Redis |
| Content factory | Ollama (lokal PC) |
| Embeddings | sentence-transformers (lokal) |

## Türk-Özel Özellikler

- **Türk-İngilizce hata veritabanı** — doğrudan çeviri tuzakları, article eksikliği, TH sesi
- **Türkçe UI** default, EN seçenek
- **Düzeltme açıklamaları Türkçe** — "be fiilini unuttun çünkü..."
- **Kültürel notlar** — Batı dating, work culture, social codes

## Repo Yapısı

```
lafla/
├── apps/
│   ├── mobile/              Expo React Native uygulaması
│   └── api/                 Cloudflare Workers backend
├── packages/
│   ├── pattern-matcher/     Levenshtein + embedding similarity
│   ├── grammar-engine/      a/an, plurals, tenses, be-fiil
│   ├── mastery/             HLR (half-life regression) skoru
│   ├── srs/                 Spaced repetition zamanlayıcı
│   └── content-types/       Paylaşılan TypeScript tipleri
├── content/
│   └── scenarios/           İçerik paketleri (PC'de üretilir)
├── scripts/                 Ollama-based üretim scriptleri
└── docs/                    ADR'lar, mimari
```

## 10 Haftalık Sprint Planı

| Hafta | Hedef |
|---|---|
| 1-2 | Content factory — Flört modu (500 phrase + 5K varyant) |
| 3 | Backend — pattern matcher + grammar engine + API |
| 4-5 | Mobile — hibrit swipe UI + chat + review |
| 6 | Entegrasyon + offline mode |
| 7-8 | 5-10 kişi beta |
| 9-10 | App Store + Play Store gönderim |

## Bundle ID

- iOS: `com.lafla.app`
- Android: `com.lafla.app`

## Fiyatlandırma

| Plan | Fiyat |
|---|---|
| Free | 1 mod tam, 30 dk/gün |
| Pro | 49 TL/ay veya 399 TL/yıl |
| Lifetime | 999 TL (tek seferlik) |

## Lisans

Özel. Tüm haklar saklıdır.
