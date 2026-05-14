# Changelog

All notable changes to Lafla are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- _Yeni özellikler buraya._

### Changed
- _Davranış değişiklikleri buraya._

### Fixed
- _Hata düzeltmeleri buraya._

### Infrastructure
- _CI, build, tooling değişiklikleri buraya._

---

## [0.1.0] - 2026-05-14

İlk public scaffold. Çekirdek deneyim ayakta, içerik kütüphanesi 122 senaryoya ulaştı, TestFlight pipeline'ı kuruldu.

### Added

- **Project scaffold** — pnpm workspace monorepo: `apps/mobile` (Expo SDK 52 + React Native + TypeScript), `apps/api` (Cloudflare Workers iskeleti), `apps/web` (statik landing).
- **Internal packages** — `content-types`, `pattern-matcher`, `grammar-engine`, `lesson-runner`, `mastery`, `srs`.
- **122 lesson scenarios** — 5 mode kapsayan komple bundled content:
  - **Flirt** — opener, banter, define, date, voice, cancel, recovery, rejection.
  - **Work** — slack, email, standup, meeting, coffeechat, interview, codereview, disagree, review.
  - **Banter** — bar, compliment, roast, opinions, whatdoyoudo, exit.
  - **Daily** — smalltalk, taxi, transport, shopping, hotel, salon, phone, bank, pharmacy, emergency, directions.
  - **Order** — cafe, bar, restaurant, delivery, bill, tipping, complaint.
- **Tutorial / Onboarding / Auth flow** — guided first-run, interest selection, e-mail + magic link auth via Supabase.
- **Skill tree** — `skills.tsx` ile mode/topic bazlı progress map'i.
- **Achievements & Daily quests** — engagement loop scaffolding, streak takibi, streak calendar görünümü.
- **Screens** — `profile`, `settings`, `paywall`, `freechat`, `pronunciation`, `feed`, `journal`, `scoreboard`, `help`, `about`, `referral`, `achievements`.
- **Lesson engine** — exercise dispatcher, vocab tile / translate / multiple choice / roleplay support, progress reducer, AsyncStorage'a yerel kalıcılık.
- **TTS audio** — `expo-speech` ile telaffuz örnekleri.
- **Theme system** — Cyber-Electric Modern token paleti (`apps/mobile/theme/index.ts`).
- **Docs** — ADR-001 (data flywheel), ADR-002 (hybrid swipe UI), ADR-003 (Turkish-first), App Store TR/EN metadata, Privacy TR/EN, Terms TR/EN, integration guides (Sentry, PostHog, RevenueCat, ElevenLabs, Lottie, SDK upgrade audit, Speech, Sound).

### Changed

- **Pivoted from Duolingo-style lessons to scenario engine.** İlk prototip kart-tabanlı SRS lesson'lardı; gerçek konuşma anlarını simüle etmediği için tüm content modeli bağlam-bazlı scenario yapısına geçirildi (bkz. ADR-002).
- **Turkish-first hardened.** UI varsayılan dili EN'den TR'ye çekildi; tüm correction copy'leri Türkçeleştirildi (bkz. ADR-003).

### Infrastructure

- **Sentry** — error reporting scaffold + DSN env wiring.
- **PostHog** — product analytics scaffold + event taxonomy.
- **RevenueCat** — in-app purchase / subscription scaffold (Pro aylık, yıllık, lifetime).
- **Lottie** — animation hook + asset pipeline.
- **LLM router** — offline content generation router scaffold (`scripts/`, Ollama-based) — runtime'da kullanılmaz, sadece PC üretimi için.
- **GitHub Actions** — `.github/workflows/expo-testflight.yml`: `lafla-v*` tag push'unda macOS runner üzerinde EAS Build → TestFlight submit.
- **EAS Build** — `eas.json` development / preview / production profilleri.
- **Supabase** — Postgres schema, auth policies, migration scaffolding.

[Unreleased]: https://github.com/berkdemirok/lafla/compare/lafla-v0.1.0...HEAD
[0.1.0]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.1.0
