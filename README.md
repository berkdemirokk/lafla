# Lafla

> **Söyle gitsin.** *Just say it.*

Bağlam temelli İngilizce hayatta kalma simülatörü. Tinder'dan Slack'e, akşam barından konferans Zoom'una — donduğun her İngilizce anına hazır pratik.

Turkish-first English speaking app. Built for Turkish-speaking users 18-35 who can read English but freeze in real moments.

---

## Hedef Kullanıcı

Türkçe konuşan 18-35 yaş, İngilizce **okuyabilen ama gerçek anda donan** genç. Yurtdışı flört, remote iş, sosyal medya — international yaşam için İngilizce isteyen.

## 5 Mod, Sıfır Tabu

- **Flört Modu** — Tinder, Bumble, gerçek tanışmalar
- **İş Modu** — Slack, Zoom, e-mail, kahve sohbetleri
- **Banter Modu** — Bar, parti, takılma, jokes
- **Daily Modu** — Sipariş, taxi, alışveriş, otel
- **Order Modu** — Kafe, restoran, bar, delivery

---

## 1. Stack

| Layer | Tech |
|---|---|
| Mobile | Expo SDK 52 + React Native + TypeScript |
| Web (landing) | Static HTML at `apps/web/` |
| Backend / DB / Auth | Supabase (Postgres) |
| Build | EAS Build |
| CI/CD | GitHub Actions → TestFlight |
| Local state | AsyncStorage |
| TTS | expo-speech |
| Analytics / Errors | PostHog, Sentry (scaffolded) |
| Payments | RevenueCat (scaffolded) |

## 2. Getting Started

**Prereqs:** Node ≥ 20, pnpm ≥ 9, Xcode (for iOS), Android Studio (for Android), Expo account.

```bash
# 1. Clone
git clone <repo-url> lafla
cd lafla

# 2. Install
pnpm install

# 3. Environment
cp apps/mobile/.env.example apps/mobile/.env.local
# Fill in:
#   EXPO_PUBLIC_SUPABASE_URL=
#   EXPO_PUBLIC_SUPABASE_ANON_KEY=
#   EXPO_PUBLIC_POSTHOG_KEY=        (optional)
#   EXPO_PUBLIC_SENTRY_DSN=         (optional)
#   EXPO_PUBLIC_REVENUECAT_KEY=     (optional)

# 4. Run
pnpm --filter mobile start
# Then press i (iOS) or a (Android) in Expo CLI
```

Useful root scripts:

```bash
pnpm typecheck          # Run TypeScript across the workspace
pnpm lint               # Run linting across the workspace
pnpm build              # Build all packages
pnpm dev:mobile         # Start the Expo dev server
pnpm dev:api            # Start the Cloudflare Workers API (when present)
pnpm generate:content   # Ollama-based scenario generation (PC-only)
```

## 3. Project Structure

```
lafla/
├── apps/
│   ├── mobile/              Expo SDK 52 + RN + TS uygulaması
│   │   ├── app/             expo-router screens (auth, onboarding, tutorial, feed, lesson/, scenario/, ...)
│   │   ├── components/      Paylaşılan UI bileşenleri
│   │   ├── data/            Bundled lesson scenarios (cafe-lesson.ts vb.)
│   │   ├── lib/             Engine, storage, hooks, services
│   │   ├── theme/           Cyber-Electric Modern design tokens
│   │   └── assets/          Fontlar, sesler, görseller
│   ├── api/                 Cloudflare Workers backend (scaffold)
│   └── web/                 Statik landing sayfası
├── packages/
│   ├── content-types/       Paylaşılan TypeScript tipleri
│   ├── pattern-matcher/     Levenshtein + embedding similarity
│   ├── grammar-engine/      a/an, plurals, tenses, be-fiil
│   ├── lesson-runner/       Lesson exercise dispatcher
│   ├── mastery/             HLR (half-life regression) skoru
│   └── srs/                 Spaced repetition zamanlayıcı
├── content/                 Üretilen senaryo paketleri (PC offline)
├── docs/                    ADR'lar, analytics, store metadata, integration guides
├── scripts/                 Ollama-based content generation
├── supabase/                Database migrations & policies
├── mockups/                 Tasarım mockup'ları
├── eas.json                 EAS Build profilleri
└── pnpm-workspace.yaml      Monorepo workspace tanımı
```

## 4. Architecture Decisions

Tam liste: [`docs/ADR-001-data-flywheel.md`](docs/ADR-001-data-flywheel.md), [`docs/ADR-002-hybrid-swipe-ui.md`](docs/ADR-002-hybrid-swipe-ui.md), [`docs/ADR-003-turkish-first.md`](docs/ADR-003-turkish-first.md).

**Local-first state.** AsyncStorage is the source of truth on-device for progress, streaks, attempts, settings. Supabase syncs in the background; the app must remain fully usable offline. UI never blocks on a network call.

**No runtime LLM (data flywheel).** Content is generated *offline* on PC (Ollama + Llama 3.1 8B), curated, and shipped as static scenario bundles. Runtime evaluation uses pattern matching + grammar rules + a regex/variant library — no model calls per attempt. Every user attempt enriches the variant library. Costs $0/month forever; latency stays under 100 ms; no provider lock-in.

**Turkish-first content.** UI, error explanations, hints, and cultural notes are Turkish by default. English is the *target*, not the language of instruction. Common Türk-İngilizce hata patterns (article eksikliği, doğrudan çeviri tuzakları, TH sesi, be-fiil unutma) are explicit first-class corrections.

## 5. Content Authoring

A skill is a bundled `.ts` file under `apps/mobile/data/`. Use **`apps/mobile/data/cafe-lesson.ts`** as the canonical template.

Each lesson exports a `BundledLesson` with:

- `id` — e.g. `order.cafe.1.1`
- `skill_id` — e.g. `order.cafe`
- `index` — order within the skill
- `title` — Turkish, short
- `description` — Turkish, 1-2 cümle, hangi kalıbı öğrettiğini söyler
- `estimated_minutes`
- `exercises[]` — `vocab_tile`, `translate`, `multiple_choice`, `roleplay`, etc.

Steps to add a new skill:

1. Copy `cafe-lesson.ts` → `<mode>-<topic>-lesson.ts`.
2. Update `id`/`skill_id` to be unique and dotted (`work.standup.1.1`).
3. Author 4-8 exercises, every `translate` exercise must include `accepted_variants` covering plausible correct phrasings.
4. Register the lesson in `apps/mobile/data/lessons.ts` (dispatcher).
5. Add the skill node to the skill tree if it's new.
6. `pnpm typecheck` to verify types.

Türkçe kalite notları: doğrudan çeviri yapma, gündelik tonu koru, `accepted_variants` cömertçe doldur, Türk-İngilizce tuzaklarını açıkça yakala.

## 6. Theming

Design system is **Cyber-Electric Modern**. All tokens live in [`apps/mobile/theme/index.ts`](apps/mobile/theme/index.ts) — colors, spacing, radii, typography, shadows. Components must consume tokens; **no hardcoded hex values, no magic numbers**. If a token doesn't exist for what you need, add it to `theme/index.ts` first.

## 7. Testing

> **TODO — no automated tests yet.** Tracking item before scale.

Planned coverage:

- **Unit** — `packages/pattern-matcher`, `packages/grammar-engine`, `packages/mastery`, `packages/srs` (pure logic, easy wins first).
- **Engine** — `apps/mobile/lib/engine` exercise dispatch and progress reducers.
- **Content lint** — schema validation for every `*-lesson.ts` (id uniqueness, accepted_variants non-empty for translate, regex compiles).
- **Component** — React Native Testing Library on key screens (lesson, scenario, feed, paywall).
- **E2E** — Detox or Maestro for happy paths: onboarding → first lesson → streak → achievement.
- **Manual QA** — physical iPhone + Android device smoke before each TestFlight build.

## 8. Deployment

GitHub Actions → EAS Build → TestFlight → App Store Connect.

- Workflow: [`.github/workflows/expo-testflight.yml`](.github/workflows/expo-testflight.yml)
- Trigger: push a tag `lafla-v*` (or run manually via `workflow_dispatch`).
- Required secret: `EXPO_TOKEN`.
- Build profiles: see [`eas.json`](eas.json).
- Bundle IDs: `com.lafla.app` (iOS + Android).

Release tag flow:

```bash
git tag lafla-v0.1.0
git push origin lafla-v0.1.0
# Workflow builds with EAS and submits to TestFlight automatically.
```

App Store / Play Store metadata: [`docs/APP_STORE_EN.md`](docs/APP_STORE_EN.md), [`docs/APP_STORE_TR.md`](docs/APP_STORE_TR.md), [`docs/APP_STORE_SCREENSHOTS.md`](docs/APP_STORE_SCREENSHOTS.md).

## 9. Türk-Özel Özellikler

- **Türk-İngilizce hata veritabanı** — doğrudan çeviri tuzakları, article eksikliği, TH sesi
- **Türkçe UI** default, EN seçenek
- **Düzeltme açıklamaları Türkçe** — "be fiilini unuttun çünkü..."
- **Kültürel notlar** — Batı dating, work culture, social codes

## 10. Fiyatlandırma

| Plan | Fiyat |
|---|---|
| Free | 1 mod tam, 30 dk/gün |
| Pro | 49 TL/ay veya 399 TL/yıl |
| Lifetime | 999 TL (tek seferlik) |

## 11. License

**Proprietary. All rights reserved © Berk Demirok.**

This source code is not licensed for redistribution, modification, or commercial use without explicit written permission. No part of this repository may be copied, reproduced, or used to train any model.
