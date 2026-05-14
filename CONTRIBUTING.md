# Contributing to Lafla

## 1. Who can contribute

Lafla is currently a **solo project** maintained by Berk Demirok. External contributions, pull requests, and forks are **not accepted** at this time. The source is published for transparency only — see [`README.md`](README.md) for licensing.

This document exists as an internal working agreement so future-me (and any future collaborator who is explicitly onboarded) can move quickly and consistently.

## 2. Code style

### TypeScript

- `strict: true` everywhere. No `any` unless commented with a justification.
- Prefer `type` over `interface` for unions and primitives, `interface` for object shapes that may extend.
- No implicit returns of `undefined`. Functions either return a value on every path or are typed `void`.
- Imports: external first, then `@lafla/*` packages, then relative. No deep relative chains (`../../../`) — promote to a package if it reaches three levels.

### Naming

- Files: `kebab-case.ts` for modules, `PascalCase.tsx` for React components.
- React components: `PascalCase`. Hooks: `useCamelCase`.
- Constants: `SCREAMING_SNAKE_CASE` only for true module-level constants (e.g. enum-like values). Otherwise `camelCase`.
- Lesson IDs are dotted, lowercase, dotted segments: `<mode>.<topic>.<lesson>.<exercise>`, e.g. `order.cafe.1.1`.
- Skill IDs: `<mode>.<topic>`, e.g. `work.standup`.

### File structure

- One default export per file when it represents a screen or top-level component.
- Co-locate styles with the component file (no separate `styles/` folder).
- Pure logic belongs in `packages/*`, not `apps/mobile/lib/` — if more than one app needs it, lift it.
- Lesson data lives in `apps/mobile/data/<mode>-<topic>-lesson.ts`. Always register in `apps/mobile/data/lessons.ts`.

### Theming

- **No hardcoded colors, spacing, radii, or font sizes** in components. Everything goes through `apps/mobile/theme/index.ts`. If a token doesn't exist, add it before the component lands.

## 3. Commit message format

Conventional Commits. Required.

```
<type>(<area>): <imperative, lowercase, no trailing period>
```

Types: `feat`, `fix`, `refactor`, `perf`, `style`, `docs`, `chore`, `content`, `infra`, `test`.

Areas (examples): `mobile`, `web`, `api`, `engine`, `lessons`, `theme`, `auth`, `paywall`, `onboarding`, `ci`.

Examples:

```
feat(lessons): add flirt-recovery scenario
fix(engine): handle empty accepted_variants array
refactor(theme): unify spacing tokens
content(work): expand work-standup variants
infra(ci): bump eas cli to latest in testflight workflow
docs(readme): document tag-based release flow
```

Body (optional): wrap at 72 chars, explain the *why*, not the *what*.

## 4. PR checklist

Before merging:

- [ ] `pnpm typecheck` passes with zero errors.
- [ ] `pnpm lint` passes (or every warning is justified).
- [ ] No unused imports, no unused variables.
- [ ] No `console.log`, `console.warn`, or `console.error` in production code. Use the logger or remove.
- [ ] No commented-out code blocks. If you might need it later, that's what git is for.
- [ ] No hardcoded theme values (colors, spacing, fonts).
- [ ] No new `any` types without a comment explaining why.
- [ ] New lessons: registered in `data/lessons.ts`, every `translate` has `accepted_variants`, IDs are unique.
- [ ] App still launches on iOS Simulator (smoke test).
- [ ] If user-visible: tested on a physical iPhone before TestFlight.
- [ ] CHANGELOG.md updated under `[Unreleased]` for user-visible changes.

## 5. Content guidelines

Lafla's edge is content quality. Mediocre content sinks the app faster than any bug.

### Turkish quality

- Yazım Dili Kurumu standartlarına uy. "&" yerine "ve" kullan.
- Doğal Türkçe — Google Translate'lik cümle YAZMA.
- Argo/günlük dil senaryoya uygunsa serbest, ama tutarlı olsun.
- Düzeltme açıklamaları **Türkçe**, açıklayıcı: "be fiilini unuttun çünkü 'I tired' değil 'I am tired' deriz."

### English quality

- Native-sounding, modern. Bar konuşması bar gibi, Slack mesajı Slack gibi.
- Bölgesel: hedef US English (default); UK varyasyonu varsa accepted_variants içine ekle.
- Argo OK ama scenario-appropriate (work modunda küfür yok).

### Regex / variant patterns

- Her `translate` exercise için en az 3 `accepted_variants`. Cömert ol; takıntılı düzeltici olmaktansa esnek ol.
- Article varyasyonları (`a/an/the`) ve casual contractions (`I'd`, `I'm`, `you're`) her zaman accepted.
- Final noktalama opsiyonel — `?` ve `.` farkı kabul, eksikliği kabul.
- Boşluk normalizasyonu engine'de yapılır; `accepted_variants` içinde tek boşluk yeter.

### Scenario structure

Bir scenario senaryosu **gerçek bir an** olmalı:

- **Setup** — Kullanıcı nerede, kim konuşuyor, neyi hedefliyor (1-2 cümle Türkçe).
- **Stakes** — Yanlış konuşursa ne olur? (Sosyal awkwardness, kaçırılan fırsat, hatalı anlaşılma.)
- **Branches** — En az 2 farklı user response yolu, her biri farklı doğal sonuç.
- **Cultural note** — Eğer Türk kullanıcının kaçırması muhtemel bir kültürel kod varsa, açıkla.

## 6. Branch naming

- `feature/<short-name>` — yeni özellik, örn. `feature/streak-share-card`.
- `fix/<short-name>` — bug fix, örn. `fix/onboarding-back-button`.
- `content/<short-name>` — yeni senaryo / lesson, örn. `content/flirt-voicenote-pack`.
- `refactor/<short-name>` — davranış değişmeyen düzeltme.
- `infra/<short-name>` — CI, build, tooling.

`main` her zaman deploy edilebilir olmalı. Doğrudan `main`'e push yok — her şey PR üzerinden.

## 7. Release process

1. **Hazırlık.** Yeni özellikler ve düzeltmeler `main`'de toplanır; CHANGELOG.md `[Unreleased]` altında biriktirilir.
2. **Versiyon bump.** `apps/mobile/app.json` içindeki `version` ve gerekiyorsa `ios.buildNumber` / `android.versionCode` artırılır.
3. **Changelog kapatma.** `[Unreleased]` başlığı altındaki maddeler yeni `[x.y.z] - YYYY-MM-DD` başlığına taşınır. `[Unreleased]` başlığı boş bırakılır.
4. **Commit.**
   ```
   chore(release): v0.x.y
   ```
5. **Tag + push.**
   ```bash
   git tag lafla-v0.x.y
   git push origin main --tags
   ```
6. **CI.** `.github/workflows/expo-testflight.yml` otomatik tetiklenir → EAS Build → TestFlight.
7. **TestFlight QA.** En az 24 saat kendi cihazda. Smoke + her mode'dan bir lesson + paywall + offline mode.
8. **App Store submit.** App Store Connect üzerinden manuel "Submit for Review". Metadata: [`docs/APP_STORE_TR.md`](docs/APP_STORE_TR.md) + [`docs/APP_STORE_EN.md`](docs/APP_STORE_EN.md).
9. **Rollout.** Phased release (7 gün) default.
10. **Post-release.** Sentry + PostHog ilk 48 saat yakın takip. Critical regression → hotfix branch'i `fix/v0.x.y-hotfix`.
