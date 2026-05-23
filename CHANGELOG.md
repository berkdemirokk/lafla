# Changelog

All notable changes to Lafla are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

> v1.0 öncesi son cila — kasıtlı olarak küçük tutulur. Şu an boş; yeni iş v1.x track'inde başlayacak.

---

## [0.9.0] - 2026-05-23 — Faz 3: LLM-siz Smart Conversation

### Added

- **NPC bridge phrases** (`lib/npc-bridge.ts`) — mini-Markov, deterministic seed `hash(scenarioId + turnIdx)`. ~30% NPC turn'üne natural opener ekler ("Right,", "Hmm, well,", "Hi there,", "Sorry, just to be clear,"). 4 bucket: opening / good (>=75) / partial (50-74) / low (<50). Score'a göre uygun bucket.
- **Smart hint timing** (RoleplayChat) — 5sn input idle / recording inactive sonrası `hintBox` shadow opacity 0.2 → 0.75 sin loop ile glow. `useAnimatedStyle` + `withRepeat` Reanimated 3.
- **Adaptive force-show hint** — son 2 turn skoru her ikisi de <50 ise hint hardMode'da bile zorla görünür. Label: "Sıkıştın mı? İpucu açıldı:".
- **Sentry breadcrumb critical-flow coverage** — onboarding-finalize (finalize_start + finalize_complete + captureException re-throw), voice-journal (start/stop record errors), paywall (purchase_initiated). 4 → 7 file Sentry-aware.

### Changed

- **App Store metadata sync** (`docs/APP_STORE_METADATA.md`) — 7 mod (IELTS dahil), 935 sahne, yıllık IAP, Phoneme Drill + Listen Mode + Voice Journal + smart conversation description body'de + What's New'da.
- **Privacy Nutrition Label** (`docs/APP_STORE_PRIVACY_NUTRITION.md`) — kritik: AdMob "Advertising Data" disclosure eklendi (eskiden "No" diyordu, yanlıştı; Apple reject riski). ATT-conditional tracking ifadesi düzeltildi. Voice Journal local-only confirmed, "Maya" referansları silindi.
- **App Review Notes** (`docs/APP_REVIEW_NOTES.md`) — 7 mod, 935 sahne, yearly IAP, side-rail modes (Phoneme Drill, Listen, Voice Journal), AdMob disclosure, no-runtime-LLM ifadesi.
- **README** — 7 mod tablosu + 3 side-rail tablosu, Faz 1-3 features summary, AdMob + yearly tier stack table, deprecated doc link'leri APP_STORE_METADATA.md'e yönlendirildi.

### Removed

- **Deprecated app store doc'ları silindi**: `docs/APP_STORE_TR.md`, `docs/APP_STORE_EN.md`, `docs/APP_STORE_META.md`. Bu üç dosya 6-mod cut sonrasında "⚠️ DEPRECATED" header'ı taşıyordu ama hala mevcuttu. Tek kaynak artık `docs/APP_STORE_METADATA.md`.

---

## [0.8.0] - 2026-05-23 — Faz 2: İçerik Multiplier + 2 yeni mod

### Added

- **Phoneme Drill mode** (`app/phoneme-drill.tsx` + `data/phoneme-drill-data.ts`) — 50 Türk-confused fonem alıştırması: /θ/ vs /t,s/, /ð/ vs /d,z/, /v/ vs /w/, /æ/ vs /e,a/, /ɪ/ vs /iː/, /ŋ/, final voicing. ±1 CEFR band'dan günlük deterministic shuffle. PronouncePhrase component reuse.
- **Listen & Transcribe mode** (`app/listen-mode.tsx` + `data/listen-bank.ts`) — 30 audio clip CEFR-balanced (A1×6, A2×8, B1×8, B2×5, C1×3). Her clip: sentence, tr_hint, acceptedVariants[], level, context. TTS runtime — bundled MP3 gerek yok.
- **Filler tolerance** (`lib/engine.ts`) — `stripFillers(input)` fonksiyonu + 2-pass evaluation. "Uh, well, yani, you know, I mean, şey, evet" gibi filler'lar match'i bozmuyor (stripped pass score 95).

### Fixed

- **Voice Journal sweep race** (`lib/voice-journal.ts`) — Aktif kayıt URI'si module-level `_activeRecordingUri` ile track ediliyor. `getEntries()` sweep'i aktif dosyayı siliyordu (DATA LOSS). `markRecordingActive(uri)` + `markRecordingInactive()` exports.
- **Placement state persistence race** (`app/placement.tsx`) — `restoredRef = useRef(false)` gate. Persist effect restore tamamlanana kadar yazmıyor.
- **Placement K_PLACEMENT_STATE timing** — Removal artık `finalizeOnboarding` sonrasında. finalize throw ederse broken state oluşmuyor.

### Infrastructure

- **CEFR tag audit script** (`scripts/audit-cefr-tags.ts`) — Lesson dosyalarındaki B2/C1/C2 markerlerini sayıp tag mismatch flag'ler. 3 mismatch düzeltildi: story.erasmus.10, daily.expand.17, story.ielts.7.
- **Story Arc V2 Scene[] generator** (`scripts/generate-arc-scenes.ts`) — BundledLesson[]'den otomatik Scene[] üretir. Mode diversity rebalanced: work×5, daily×4, flirt×2, airport×3, bar×1.
- **AdMob children=NO + maxAdContentRating=T** (`lib/ads.ts`) — Flört + Bar yetişkin içerik; "child-directed" flag çakışırdı.

---

## [0.7.0] - 2026-05-23 — Faz 1: UI Premium Upgrade

### Added

- **Premium icon library** (`components/Icon.tsx`) — @expo/vector-icons wrapper, 35+ semantic glyph (streak, vocab, history, certificate, premium, band, weakness, diary, voiceJournal, relationships, referral, share, explore, target, surprise, trophy, shield, lock, ...). Brand-aware color binding (default `tokens.text.primary`).
- **Shadow tokens** (`theme/index.ts`) — `tokens.shadow.card` + `tokens.shadow.hero` premium consistency için.
- **3D wordmark splash** (`app/index.tsx`) — perspektif transform scale 0.7→1, rotateY 8°→0°, halo glow opacity 0.22 (eskiden 0.7 game-y'di, daraltıldı).
- **Today hero tilt + scroll parallax** (`app/today.tsx`) — pseudo-3D hissiyat. Reanimated 3.
- **Streak chip spring scale** (`app/today.tsx`) — 360° flip → spring scale 0.85→1 + fade-in (game-y kıvrım kalktı).

### Changed

- **Emoji → Icon migration** — `app/today.tsx`, `app/paywall.tsx` FEATURES, `app/profile.tsx` AccountRow heuristic `/^[a-z][a-zA-Z]*$/` emoji-vs-IconName detection.
- **Story Arc V2 visibility** — 132 lesson scenes.ts'ye eklendi (script-gen).

### Fixed

- **CEFR double-count** — PronouncePhrase + SpeechShadowing `recordCefrProgress` çağırıyordu, scene verdict de çağırıyordu → 2-3x faster level-up. Component-level call kaldırıldı, sadece `pushPronScore` kaldı.
- **NPC name pool collision** — "Sam" hem romantic hem family bucket'ındaydı, aynı kişi sanılıyordu. Composite ID `${bucket}:${name}` → `nameAndBucketForNpc()` helper.

---

## [0.6.0] - 2026-05-22 — Premium icon library + adaptive roleplay hints

### Added

- Premium icon library scaffold (Faz 1'e öncül).
- Adaptive roleplay hint mode (free, hinted, multi-choice — `total_attempts`'a göre).

### Fixed (v0.6.1)

- **3 critical audit bug** — paywall icon migration, scenario verdict iconification, NPC banner placement.

---

## [0.5.0] - 2026-05-22 — Story arc visible + premium tutarlılık

### Added

- Story arc multi-scene narratives entegre.
- Premium UI tutarlılığı pass.

---

## [0.4.6 / 0.4.7] - 2026-05-21 — Audit fix bundle + CEFR script

### Fixed

- Voice Journal orphan files, placement persistence, NPC banner — audit fix bundle.
- Scene tag audit script + 3 CEFR mismatch düzeltildi.

---

## [0.2.0] - 2026-05-20 — 6-mod radical cut

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

[Unreleased]: https://github.com/berkdemirok/lafla/compare/lafla-v0.9.0...HEAD
[0.9.0]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.9.0
[0.8.0]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.8.0
[0.7.0]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.7.0
[0.6.0]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.6.0
[0.5.0]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.5.0
[0.4.7]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.4.7
[0.4.6]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.4.6
[0.2.0]: https://github.com/berkdemirok/lafla/compare/lafla-v0.1.0...lafla-v0.2.0
[0.1.0]: https://github.com/berkdemirok/lafla/releases/tag/lafla-v0.1.0
