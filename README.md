# Lafla

> **Söyle gitsin.** Türk-first İngilizce konuşma simülatörü.

Türk 18-35 yaş için: gerçek hayatta donduğun anlarda İngilizce hazırlığı. Tinder'da bir mesaja cevap, Slack'te bir feedback, havaalanında check-in, bardaki bir tanışma — sahne sahne pratik, hata desenleri Türkçe.

---

## Hedef Kullanıcı

Türkçe konuşan 18-35 yaş, İngilizce **okuyabilen ama gerçek anda donan** genç. Yurtdışı flört, remote iş, sosyal medya, seyahat — international yaşam için İngilizce isteyen.

## 6 Mod

| Mod | Ne öğretir |
|---|---|
| 💕 **Flört** | Tinder/Bumble açılış, voice note, ikinci randevu, iptal, ret, recovery |
| 💼 **İş** | Slack, meeting, email, standup, code review, interview, networking, promotion ask |
| 🍻 **Bar** | İçecek siparişi + bar sohbet açılışı / pickup |
| ✈️ **Havaalanı** | Check-in, security, customs, baggage, flight changes |
| ☕ **Günlük** | Yön sorma, ulaşım, otel, banka, kuaför, eczane, gym, tech support, smalltalk |
| 🍽️ **Sipariş** | Kafe, restoran, fastfood, grocery, delivery, hesap, bahşiş, şikayet |

Onboarding'de 6 chip'ten en az 2 seçersin; feed CEFR seviyene + ilgi alanlarına göre kişiselleşir. **480+ sahne, ~50 lesson set.**

---

## Stack

| Layer | Tech |
|---|---|
| Mobile | Expo SDK 53 + React Native + TypeScript (iOS-only) |
| Backend / DB / Auth | Supabase (Postgres) |
| Build | EAS Build (`appVersionSource: "remote"`) |
| CI/CD | GitHub Actions → TestFlight |
| Local state | AsyncStorage + SecureStore (session) |
| TTS | expo-speech (system) + bundled MP3'ler (Chatterbox-generated) |
| STT | expo-speech-recognition |
| Analytics / Errors | PostHog, Sentry (ATT-gated) |
| Payments | RevenueCat (Speak+ ₺99/ay) |

## Getting Started

**Prereqs:** Windows PC (geliştirici) + macOS runner (EAS Build), Node ≥ 20, pnpm ≥ 9, Xcode (CI), Expo account, GitHub CLI authed.

```bash
git clone git@github.com:berkdemirokk/lafla.git
cd lafla
pnpm install

cp apps/mobile/.env.local.example apps/mobile/.env.local
# Doldur:
#   EXPO_PUBLIC_SUPABASE_URL=
#   EXPO_PUBLIC_SUPABASE_ANON_KEY=
#   (gerekirse PostHog / Sentry / RevenueCat anahtarları — opsiyonel)

pnpm --filter mobile start
# Expo CLI'da "i" → iOS simulator
```

Root scriptleri:

```bash
pnpm typecheck       # workspace typecheck
pnpm dev:mobile      # Expo dev server
```

## Project Structure

```
lafla/
├── apps/
│   └── mobile/              # Expo iOS uygulaması — tek aktif workspace
│       ├── app/             # expo-router (index, auth, onboarding, home, scenario/[id], paywall, profile, settings)
│       ├── components/      # Paylaşılan UI bileşenleri (SwipeSceneCard, exercises/, ...)
│       ├── data/            # Bundled lesson + scene paketleri (~50 lesson set, 480+ scene)
│       ├── lib/             # engine, srs, supabase, iap, speech, analytics, theme tüketicileri
│       ├── locales/         # tr.json + en.json (UI tek tük, kullanıcının Türkçe görür — EN şu an Sparse)
│       ├── theme/index.ts   # Neon Noir tokens (#FF067A pink + #00FFFF cyan + black)
│       └── assets/          # icon, splash, audio (vc_*/ MP3'ler — ~32MB)
├── docs/                    # ADR'lar, App Store metadata, integration guides
├── supabase/migrations/     # initial schema (profiles, lesson_state, skill_mastery, attempts)
├── .github/workflows/       # expo-testflight.yml
├── eas.json                 # build profilleri
└── pnpm-workspace.yaml      # mobile-only
```

> **Not:** `packages/pattern-matcher`, `packages/lesson-runner`, `packages/content-types` — mobile import etmedi, **2026-05-20 pivot-3'te silindi**. Pattern matching ve lesson runner logic'i `apps/mobile/lib/engine.ts`'de inline.

## Architecture Decisions

Tam liste: [`docs/ADR-001-data-flywheel.md`](docs/ADR-001-data-flywheel.md), [`docs/ADR-002-hybrid-swipe-ui.md`](docs/ADR-002-hybrid-swipe-ui.md), [`docs/ADR-003-turkish-first.md`](docs/ADR-003-turkish-first.md).

**Local-first state.** AsyncStorage on-device source of truth: progress, streaks, attempts, settings. Supabase syncs in background; UI never blocks on network.

**No runtime LLM.** Content is pre-generated (Claude in-session yazımı + Chatterbox TTS, both on PC), curated, shipped as static `.ts` bundles. Runtime scoring = Levenshtein + token overlap (`lib/engine.ts`) + accepted_variants library. Every user attempt enriches the variant library (long-term flywheel — needs backend).

**Türk-first content.** UI, error explanations, hints, cultural notes Türkçe. English target dil. TR→EN doğrudan çeviri tuzakları (`be` fiili eksik, `bored from` vs `bored of`, article eksikliği) pattern matcher'a gömülü.

## Content Authoring

Bir lesson `apps/mobile/data/`'da `.ts` dosyası. **[`apps/mobile/data/cafe-lesson.ts`](apps/mobile/data/cafe-lesson.ts)** kanonik şablon.

Her lesson `BundledLesson` (`lib/engine.ts`) export eder:

- `id` — örn. `order.cafe.1.1`
- `skill_id` — örn. `order.cafe`
- `index`, `title`, `description`, `estimated_minutes`
- `exercises[]` — `vocab_tile`, `translate`, `fill_blank`, `word_order`, `spot_mistake`, `pronounce_phrase`, `speech_shadowing`, `roleplay_chat`, `recap_quiz`

Yeni lesson eklerken:

1. Bir benzer lesson'ı kopyala, `id`/`skill_id` benzersiz yap.
2. 6 modun birine ait olduğundan emin ol (flirt | work | bar | airport | daily | order). Yeni mode = `SceneMode` tipini değiştirmek + onboarding chip eklemek demek; **bu basit bir lesson ekleme değil**.
3. `accepted_variants` cömertçe doldur — pattern matcher'a yardım.
4. `apps/mobile/data/lessons.ts` dispatcher'a import et.
5. `apps/mobile/data/scenes.ts`'e karşılık gelen Scene ekle (mode + lessonId).
6. `pnpm --filter mobile typecheck`.

Türkçe kalite notları: doğrudan çeviri yapma, gündelik tonu koru, `tr_translation`/`tr_hint`/`tr_explanation` alanlarını gerçek Türk-İngilizce hata desenine yedir.

## Theming

Design system: **Neon Noir**. Tüm token'lar [`apps/mobile/theme/index.ts`](apps/mobile/theme/index.ts).

- **Mode:** dark only (`userInterfaceStyle: "dark"`)
- **Primary:** `#FF067A` (hot pink) — CTA, brand identity, streak
- **Tertiary:** `#00FFFF` (electric cyan) — accent, success
- **Surface:** near-black `#000`/`#0a0a0a` ile elevation tints

Bileşenler token tüketir; **hardcoded hex yasak**. Token yoksa önce `theme/index.ts`'e ekle.

> **Not:** Şu an Space Grotesk + Inter font'ları kodda yazıyor ama yüklü değil — system fallback. `expo-font` ile yüklemek follow-up.

## Testing

> **No automated tests yet.** Bu açık bir teknik borç ve `engine.ts` için Jest'i ayrı bir PR'da ekleyeceğiz. Şu an her release manuel iPhone smoke ile gidiyor.

Planlanan kapsama:
- **Unit** — `lib/engine.ts` (Levenshtein, normalize, evaluateTranslate, evaluateRoleplayTurn).
- **Content lint** — her `*-lesson.ts` schema validation (id uniqueness, accepted_variants non-empty, regex compiles).
- **Component** — RN Testing Library: scenario, paywall, onboarding.
- **E2E** — Maestro: onboarding → first lesson → verdict → streak.

## Deployment

GitHub Actions → EAS Build → TestFlight → App Store Connect.

- Workflow: [`.github/workflows/expo-testflight.yml`](.github/workflows/expo-testflight.yml)
- Trigger: `lafla-v*` tag push veya `workflow_dispatch`.
- Required secrets: `EXPO_TOKEN`, `APP_STORE_CONNECT_KEY_ID`, `APP_STORE_CONNECT_ISSUER_ID`, `APP_STORE_CONNECT_PRIVATE_KEY`, `APPLE_TEAM_ID`.
- Build profilleri: [`eas.json`](eas.json). `ascAppId` hâlâ `FILL_AFTER_APP_CREATED` — App Store Connect'te ürün oluşturulduktan sonra güncellenecek.
- Bundle ID: `com.lafla.app`.

Release tag flow:

```bash
git tag lafla-v0.2.0
git push origin lafla-v0.2.0
# Workflow EAS ile build, TestFlight'a submit.
```

App Store / Play Store metadata: [`docs/APP_STORE_EN.md`](docs/APP_STORE_EN.md), [`docs/APP_STORE_TR.md`](docs/APP_STORE_TR.md), [`docs/APP_STORE_SCREENSHOTS.md`](docs/APP_STORE_SCREENSHOTS.md).

## Türk-Özel Özellikler

- **TR→EN doğrudan çeviri hata veritabanı** (engine.ts + lesson `tr_hint`'leri)
- **Türkçe UI default**, App Store Connect'te dil `tr` + `en`
- **Düzeltme açıklamaları Türkçe** — "be fiilini unuttun çünkü..."
- **Kültürel notlar** — Batı dating, work culture, social codes

## Fiyatlandırma

| Plan | Fiyat |
|---|---|
| Free | Sınırlı içerik (terms TBD) |
| **Speak+** | ₺99/ay (App Store local price `lafla.premium.monthly`) |

> **Exam Pass kaldırıldı** (2026-05-20). IELTS/TOEFL "outcome-guaranteed" satışı reddedildi — iki haftalık global pivot iptal, geri Türk-first.

## License

**Proprietary. All rights reserved © Berk Demirok.**

Bu kaynak kod açık değildir, redistribute / fork / commercial use yasaktır. Hiçbir parçası başka bir modeli eğitmek için kullanılamaz.
