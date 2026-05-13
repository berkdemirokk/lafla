# ADR-001: Data Flywheel Mimarisi (Runtime'da LLM Yok)

**Status:** Accepted
**Date:** 2026-05-13

## Bağlam

Lafla'nın gerçek zamanlı İngilizce düzeltme, naturalness skoru ve alternatif ifade önerisi sunması gerekiyor. Naif yaklaşım: her kullanıcı mesajında LLM (Claude/GPT/Llama) çağrısı.

## Karar

**Runtime'da hiçbir LLM çağrısı yapmıyoruz.**

Bunun yerine:
1. LLM **sadece offline** içerik üretimi için kullanılır (PC + Ollama)
2. Runtime: **pattern matching + embedding similarity + grammar rules**
3. Tanınmayan girdiler loglanır ve batch'te variant library'e eklenir

## Niye

| Faktör | Detay |
|---|---|
| **Sıfır ongoing maliyet** | API faturası yok, ebediyen |
| **<100ms response** | Pattern lookup vs 2sn LLM çağrısı |
| **Privacy** | Kullanıcı metni infra'mızdan çıkmaz |
| **Offline çalışır** | Content pack app ile beraber gelir |
| **Vendor lock-in yok** | OpenAI/Anthropic/Google bağımlılığı sıfır |
| **Güvenilirlik** | Rate limit yok, API down yok |

## Trade-off'lar

Kabul ettiğimiz:
- Free-form sohbet esnekliği daha düşük
- NPC diyalogları scripted (karar ağacı, generative değil)
- %5-10 novel input'a "tanımadım, şunu mu demek istedin?" UX

Kabul edilebilir çünkü:
- Kapalı domain (3 mod × ~1500 phrase = 5K phrase trafiğin %95'ini kapsar)
- ESL hataları öngörülebilir
- Kullanıcı varyantları zamanla coverage'ı artırır

## Ne Zaman Yeniden Değerlendiririz

Beta verisinde >%20 novel input oranı görürsek:
- Opsiyonel "AI tutor" tier (kullanıcı kendi API key'ini getirir VEYA lokal Ollama'ya bağlanır)
- Per-request embedding fallback (yüksek kaliteli modele)

Ama default: **runtime'da LLM çağrısı yok**.
