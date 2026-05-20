# Changelog

All notable changes to Lafla are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed — 6-mod radical cut (2026-05-20)

- **Strategic positioning reset:** 2026-05-18 "Daily Life + Exam Prep two-track global" pivot **rolled back**. Geri Türk-first konumuna (ADR-003) dönüldü. Karar yorgunluğu ve yarım kalan i18n/exam-pass tartışmaları sonlandırıldı.
- **SceneMode 13 → 6** (`apps/mobile/data/scenes.ts`): `flört · iş · bar · havaalanı · günlük · sipariş`. Silinen modlar: `banter`, `travel`, `career`, `academic`, `professional`, `personal`, `testprep`, `sport`, `health` — `career` ve `professional` `work` altında birleşti; `personal` `daily` altında birleşti; `daily-airport` rename → `airport`; `banter-bar` rename → `bar-approach` (bar moduna katıldı).
- **Onboarding 5 → 4 adım** (`apps/mobile/app/onboarding.tsx`): `welcome → interests → name → cefr`. Track-seçim adımı (`daily/exam/both`) tamamen söküldü. `K_TRACK` AsyncStorage anahtarı orphan; sonraki açılışta ignored.
- **Interest chip 8 → 6** (`apps/mobile/lib/interest-mapping.ts`): `flirt · work · bar · airport · daily · order`. Her chip 1:1 SceneMode'a map'lenir (eski fan-out kaldırıldı).
- **Home feed filter cascade sadeleşti** (`apps/mobile/app/home.tsx`): track filtresi söküldü. Sadece `filterByCefr(filterByInterests(playable))` kalır.
- **Paywall feature row'ları güncellendi:** "IELTS / TOEFL sınav modu" silindi → "6 mod, gerçek hayat". Proof stats `8 mod, 980 sahne` → `6 mod, 480+ sahne`.
- **App Store metadata 6-modla sync:** `docs/APP_STORE_METADATA.md` v1.1 — subtitle, description, screenshots, reviewer notes hepsi 6 modu yansıtıyor. `APP_STORE_TR.md`, `APP_STORE_EN.md`, `APP_STORE_META.md` deprecation banner ile soldu (METADATA.md tek kaynak).
- **GitHub Pages content güncel:** `docs/index.html` ve OG meta `480+ sahne · 6 mod`.

### Removed

- **28 lesson dosyası silindi** (~5MB bundle azalması): academic, testprep (IELTS/TOEFL/YDS), sport, health, travel (non-airport), banter (non-bar), social-c1, specialized-c1, conversation-scripts, grammar-capsules, flirt-c1, flirt-advanced, banter-c1, order-c1.
- **Dead workspace packages** (`packages/pattern-matcher`, `packages/lesson-runner`, `packages/content-types`) — mobile import etmiyordu, logic `lib/engine.ts`'de inline. `pnpm-workspace.yaml` sadece `apps/*`.
- **`mockups/`, `content/`, `scripts/`** — pre-pivot artıklar.
- **Exam Pass tier** — IAP placeholder + paywall referansları; tamamen kaldırıldı.

### Added

- **`BundledLesson` tipi `lib/engine.ts`'e taşındı** — eski `cafe-lesson.ts` re-export'u tamamen kaldırıldı.
- **`airport-lesson.ts`** (was `daily-airport-lesson.ts`) ve **`bar-approach-lesson.ts`** (was `banter-bar-lesson.ts`) — rename + skill_id güncellemeleri.

### Infrastructure

- **GitHub Actions Node 24 hazırlığı:** `expo-testflight.yml`'a `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24=true` env eklendi. 2026-06-02 deprecation deadline'ından önce upstream action'ları Node 24'le doğrula.
- **`pnpm typecheck`** workspace genelinde 0 hata — 73 modified, 84 deleted, 2 yeni dosya.

### Fixed

- **`ADR-003-turkish-first.md`** "Accepted" status doğrulandı (2026-05-20 update notu eklendi). Global pivot'un "ADR-003'ü supersede ettiği" iddiası iptal.
- **Memory file** (`~/.claude/projects/.../memory/lafla_project.md`) — 6-modla sync, global pivot satırları silindi.

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
