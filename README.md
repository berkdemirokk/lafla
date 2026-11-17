# Lafla

> **Söyle gitsin.** Türk-first İngilizce konuşma simülatörü.

Türk 18-35 yaş için: gerçek hayatta donduğun anlarda İngilizce hazırlığı. Match'te bir mesaja cevap, Slack'te bir feedback, havaalanında check-in, bardaki bir tanışma, IELTS Speaking Part 2 — sahne sahne pratik, hata desenleri Türkçe.

**Uygulama sürümü:** `1.0.5` (`apps/mobile/app.json`). Tarihçe: [`CHANGELOG.md`](CHANGELOG.md) (v0.9.x'e kadar) + `docs/RELEASE_NOTES.md`.

---

## Hedef Kullanıcı

Türkçe konuşan 18-35 yaş, İngilizce **okuyabilen ama gerçek anda donan** genç. Yurtdışı flört, remote iş, sosyal medya, seyahat, IELTS Speaking — international yaşam için İngilizce isteyen.

## 7 Mod + 3 Side-rail

| Mod | Ne öğretir |
|---|---|
| 💕 **Flört** | Dating app açılış, voice note, ikinci randevu, iptal, ret, recovery |
| 💼 **İş** | Slack, meeting, email, standup, code review, interview, networking, promotion ask |
| 🍻 **Bar** | İçecek siparişi + bar sohbet açılışı / pickup |
| ✈️ **Havaalanı** | Check-in, security, customs, baggage, flight changes |
| ☕ **Günlük** | Yön sorma, ulaşım, otel, banka, kuaför, eczane, gym, tech support, smalltalk |
| 🍽️ **Sipariş** | Kafe, restoran, fastfood, grocery, delivery, hesap, bahşiş, şikayet |
| 🎓 **IELTS Speaking** | Part 1 / 2 / 3 simülasyonu — band 7+ için yapı |

| Side-rail | Ne yapar |
|---|---|
| 🎙️ **Phoneme Drill** | Türk kulağının zorlandığı sesleri (th, æ, v/w) targetli pratik |
| 🎧 **Listen & Transcribe** | TTS clip dinle + Türkçe ipucu ile yaz, sessiz ortamda da pratik |
| 💭 **Voice Journal** | Kendi sesini kaydet (local-only, 2dk cap), 1 hafta sonraki sesinle karşılaştır |

Onboarding'de 6 chip'ten en az 2 seçersin; feed CEFR seviyene + ilgi alanlarına göre kişiselleşir. **971 sahne/lesson** (`qa:content` denetimine göre), `apps/mobile/data/` altında ~90 içerik dosyası.

### Faz 1-3 Özellikleri (v0.7 → v0.9)

- **Faz 1 (v0.7) — UI Premium Polish:** 3D wordmark splash, emoji → @expo/vector-icons semantic library migration, Reanimated entrance animations, shadow tokens (`tokens.shadow.card` + `shadow.hero`).
- **Faz 2 (v0.8) — İçerik Multiplier + 2 yeni mod:** Phoneme Drill (50 Türk-confused phoneme), Listen & Transcribe (30 audio clips), filler tolerance ("uh, well, yani" affedilir), Voice Journal data-loss race fix.
- **Faz 3 (v0.9) — LLM-siz Smart Conversation:** NPC bridge phrases (mini-Markov, deterministic seed), 5sn idle hint glow, adaptive force-show hint (son 2 düşük skor sonrası), score-aware bridge buckets.

---

## Stack

| Layer | Tech |
|---|---|
| Mobile | Expo SDK 53 + React Native 0.79 + TypeScript (iOS-only MVP) |
| Animation | Reanimated 3.17 (3D wordmark, hint glow, entrance staggers) |
| Backend / DB / Auth | Supabase (Postgres, Apple Sign-In + email) |
| Build | EAS Build (`appVersionSource: "remote"`) — local IPA mode |
| CI/CD | GitHub Actions → TestFlight (tag-trigger `lafla-v*`) |
| Local state | AsyncStorage + SecureStore (session) + documentDirectory (Voice Journal) |
| TTS | expo-speech (system) + bundled MP3'ler (Chatterbox-generated) |
| STT | expo-speech-recognition (Apple on-device) |
| Analytics / Errors | PostHog, Sentry (ATT-gated; Sentry breadcrumbs on critical flows) |
| Ads | AdMob (free-tier banner + interstitial; Lafla Pro = zero ads) |
| Payments | RevenueCat (Lafla Pro ₺99/ay veya ₺999/yıl) |
| ASO | App Store Connect (TR primary, EN-US secondary) |

## Getting Started

**Prereqs:** Windows PC (geliştirici) + macOS runner (EAS Build), Node ≥ 20, pnpm ≥ 9, Xcode (CI), Expo account, GitHub CLI authed.

```bash
git clone git@github.com:berkdemirokk/lafla.git
cd lafla
corepack pnpm install   # repo pnpm@9 sabitler (packageManager)

cp apps/mobile/.env.local.example apps/mobile/.env.local
# Doldur:
#   EXPO_PUBLIC_SUPABASE_URL=
#   EXPO_PUBLIC_SUPABASE_ANON_KEY=
#   (gerekirse PostHog / Sentry / RevenueCat anahtarları — opsiyonel)

corepack pnpm dev:mobile
# Expo CLI'da "i" → iOS simulator (macOS) veya Expo Go / dev build ile iPhone'da tara
# Not: react-native-web kurulu değil — `w` (web) çalışmaz; uygulama iOS-only.
```

Root scriptleri:

```bash
corepack pnpm typecheck        # tsc --noEmit (apps/mobile)
corepack pnpm test             # Jest — apps/mobile
corepack pnpm test:functions   # Deno — supabase/functions handler testleri
corepack pnpm dev:mobile       # Expo dev server

# apps/mobile içinde içerik/kalite denetimleri:
corepack pnpm --dir apps/mobile run qa:content   # roleplay + kalite kapısı + CEFR tag
corepack pnpm --dir apps/mobile run qa:visual    # sahne görselleri
corepack pnpm --dir apps/mobile run qa:perf      # performans bütçesi
corepack pnpm --dir apps/mobile run qa:smoke     # TestFlight smoke ön-kontrolü
corepack pnpm --dir apps/mobile run expo:check   # Expo SDK bağımlılık uyumu
```

## Project Structure

```
lafla/
├── apps/
│   └── mobile/              # Expo iOS uygulaması — tek aktif workspace
│       ├── app/             # expo-router — ~30 route (auth, onboarding, today, home, scenario/[id], placement, paywall, profile, settings, review, vocab-book, mistake-coach, weakness-report, ielts-band, accent-lab, voice-journal, ...)
│       ├── components/      # Paylaşılan UI bileşenleri (SwipeSceneCard, Icon, exercises/, ...)
│       ├── data/            # Bundled lesson + scene paketleri (92 lesson dosyası, 935 scene)
│       ├── lib/             # engine, srs, supabase, iap, speech, analytics, sentry, npc-bridge, npc-names, ads, theme tüketicileri
│       ├── locales/         # tr.json + en.json (UI Türkçe default — EN sparse)
│       ├── theme/index.ts   # Neon Noir tokens (#FF067A pink + #00FFFF cyan + black) + shadow.card + shadow.hero
│       ├── scripts/         # generate-arc-scenes.ts (Scene[] auto-gen), audit-cefr-tags.ts (CEFR difficulty audit)
│       └── assets/          # icon, splash, audio (vc_*/ MP3'ler — ~32MB)
├── docs/                    # ADR'lar, App Store metadata, integration guides, TESTFLIGHT_v0.9.md
├── supabase/migrations/     # şema + RLS migration'ları
├── supabase/functions/      # Edge Functions (Deno) + handler_test.ts testleri
├── .github/workflows/       # expo-testflight, pages, supabase-test, supabase-deploy, asc-*
├── eas.json                 # build profilleri
└── pnpm-workspace.yaml      # mobile-only
```

> **Not:** `packages/pattern-matcher`, `packages/lesson-runner`, `packages/content-types` — mobile import etmedi, **2026-05-20 pivot-3'te silindi**. Pattern matching ve lesson runner logic'i `apps/mobile/lib/engine.ts`'de inline.

## Architecture Decisions

Tam liste: [`docs/ADR-001-data-flywheel.md`](docs/ADR-001-data-flywheel.md), [`docs/ADR-002-hybrid-swipe-ui.md`](docs/ADR-002-hybrid-swipe-ui.md), [`docs/ADR-003-turkish-first.md`](docs/ADR-003-turkish-first.md).

**Local-first state.** AsyncStorage on-device source of truth: progress, streaks, attempts, settings. Supabase syncs in background; UI never blocks on network.

**No runtime LLM.** Content is pre-generated (Claude in-session yazımı + Chatterbox TTS, both on PC), curated, shipped as static `.ts` bundles. Runtime scoring = Levenshtein + token overlap (`lib/engine.ts`) + accepted_variants library + filler tolerance (Faz 2). NPC "smart conversation" feel (Faz 3) uses a deterministic mini-Markov model (`lib/npc-bridge.ts`) seeded by `hash(scenarioId + turnIdx)` — same scenario always gets the same bridge phrases, fully replayable, zero API cost. Every user attempt enriches the variant library (long-term flywheel — needs backend).

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
2. 7 modun birine ait olduğundan emin ol (flirt | work | bar | airport | daily | order | ielts). Yeni mode = `SceneMode` tipini değiştirmek + onboarding chip eklemek demek; **bu basit bir lesson ekleme değil**.
3. `accepted_variants` cömertçe doldur — pattern matcher'a yardım.
4. `apps/mobile/data/lessons.ts` dispatcher'a import et.
5. `apps/mobile/data/scenes.ts`'e karşılık gelen Scene ekle (mode + lessonId) — VEYA Story Arc V2 ise `scripts/generate-arc-scenes.ts` çalıştır.
6. İçerik + CEFR tag denetimi: `corepack pnpm --dir apps/mobile run qa:content` — yeni lesson'daki dil seviyesi tag'le tutuyor mu.
7. `corepack pnpm typecheck` ve `corepack pnpm test`.

Türkçe kalite notları: doğrudan çeviri yapma, gündelik tonu koru, `tr_translation`/`tr_hint`/`tr_explanation` alanlarını gerçek Türk-İngilizce hata desenine yedir.

## Theming

Design system: **Neon Noir**. Tüm token'lar [`apps/mobile/theme/index.ts`](apps/mobile/theme/index.ts).

- **Mode:** light + dark (`userInterfaceStyle: "automatic"`, uygulama içi tercih de var; `lib/__tests__/theme-config.test.ts`)
- **Primary:** `#FF067A` (hot pink) — CTA, brand identity, streak
- **Tertiary:** `#00FFFF` (electric cyan) — accent, success
- **Surface:** near-black `#000`/`#0a0a0a` ile elevation tints

Bileşenler token tüketir; **hardcoded hex yasak**. Token yoksa önce `theme/index.ts`'e ekle.

Font'lar: Space Grotesk + Inter, `app/_layout.tsx` içinde `expo-font` `useFonts` ile yüklenir.

## Testing

Otomatik testler mevcut ve yerelde geçiyor:

- **Unit / contract (Jest)** — `apps/mobile/lib/__tests__/` (engine, SRS, placement, roleplay, auth recovery, tema, içerik sayıları vb.). `corepack pnpm test`.
- **Edge Functions (Deno)** — `supabase/functions/*/handler_test.ts`. `corepack pnpm test:functions`.
- **Veritabanı** — `.github/workflows/supabase-test.yml` (CI'da Supabase CLI ile).
- **İçerik kapıları** — `qa:content`, `qa:visual`, `qa:perf`, `qa:smoke`, `qa:linguist:check` (bkz. Getting Started).
- **E2E** — Maestro akışları CI'da iOS simülatörde (`expo-testflight.yml`).

Gerçek cihaz smoke'u hâlâ manuel: [`docs/TESTFLIGHT_ACCEPTANCE_v1.0.4.md`](docs/TESTFLIGHT_ACCEPTANCE_v1.0.4.md).

## Deployment

GitHub Actions → EAS Build → TestFlight → App Store Connect.

- Workflow: [`.github/workflows/expo-testflight.yml`](.github/workflows/expo-testflight.yml)
- Trigger: `lafla-v*` tag push veya `workflow_dispatch`.
- Required secrets: `EXPO_TOKEN`, `APP_STORE_CONNECT_KEY_ID`, `APP_STORE_CONNECT_ISSUER_ID`, `APP_STORE_CONNECT_PRIVATE_KEY`, `APPLE_TEAM_ID`.
- Build profilleri: [`eas.json`](eas.json) (`ascAppId` dolu).
- Bundle ID: `com.lafla.app`.

Release tag flow:

```bash
git tag lafla-v0.2.0
git push origin lafla-v0.2.0
# Workflow EAS ile build, TestFlight'a submit.
```

App Store / Play Store metadata: [`docs/APP_STORE_METADATA.md`](docs/APP_STORE_METADATA.md) (tek kaynak — TR + EN birleşik, screenshot brief + reviewer notes), [`docs/SUBMISSION_CHECKLIST.md`](docs/SUBMISSION_CHECKLIST.md), [`docs/TESTFLIGHT_v0.9.md`](docs/TESTFLIGHT_v0.9.md) (v0.9.0 manuel test plan).

## Türk-Özel Özellikler

- **TR→EN doğrudan çeviri hata veritabanı** (engine.ts + lesson `tr_hint`'leri)
- **Türkçe UI default**, App Store Connect'te dil `tr` + `en`
- **Düzeltme açıklamaları Türkçe** — "be fiilini unuttun çünkü..."
- **Kültürel notlar** — Batı dating, work culture, social codes

## Fiyatlandırma

| Plan | Fiyat | IAP ID |
|---|---|---|
| Free | 3 sahne/mod ücretsiz, AdMob banner + interstitial | — |
| **Lafla Pro Aylık** | ₺99/ay (App Store local price) | `lafla.premium.monthly` |
| **Lafla Pro Yıllık** | ₺999/yıl (~%16 indirim vs 12× aylık) | `lafla.premium.yearly` |

> Paywall'da segmented toggle ile yıllık default preselected. RevenueCat offering `default` altında iki package: `$rc_monthly` + `$rc_annual`.
>
> **Exam Pass kaldırıldı** (2026-05-20). One-time non-consumable IAP placeholder iptal; iki haftalık global pivot geri alındı. IELTS *modu* kodda live (Speaking Part 1/2/3), ama "outcome-guaranteed" satış yok.

## License

**Proprietary. All rights reserved © Berk Demirok.**

Bu kaynak kod açık değildir, redistribute / fork / commercial use yasaktır. Hiçbir parçası başka bir modeli eğitmek için kullanılamaz.
