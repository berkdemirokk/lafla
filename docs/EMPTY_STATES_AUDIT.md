# Empty States Audit — Lafla Mobile

Audit of empty-state quality across the main screens of `apps/mobile/app/`. The
goal is to identify cases where a brand-new user — zero lessons done, no
interests selected, no AI keys, etc. — lands on a screen that looks broken,
blank, or simply unhelpful, and to specify exact Turkish-first copy + CTA that
should replace it.

Scope: 8 screens, 10 specific empty-state scenarios. **Report only — no code
changes.**

---

## Summary table

| # | Screen | Scenario | Severity | Has handling? |
|---|---|---|---|---|
| 1 | `feed.tsx` | No interests selected | High | Partial (no banner) |
| 2 | `profile.tsx` | 0 lessons done | Medium | Partial (streak shows "—" only) |
| 3 | `achievements.tsx` | 0 earned | **Critical** | None |
| 4 | `skills.tsx` | All locked (new user) | Medium | Implicit (lesson 1 always unlocked) |
| 5 | `scoreboard.tsx` | 0 scenes done in any mode | Low | Yes (callout + CTA) |
| 6 | `journal.tsx` | 0 lessons today | Low | Yes (`EmptyTodayCard`) |
| 7 | `journal.tsx` | 0 this week | Medium | Partial (text-only card) |
| 8 | `streakcalendar.tsx` | 0 days of activity | Medium | Partial (hint at bottom) |
| 9 | `freechat.tsx` | No AI provider configured | **Critical** | None (looks like AI outage) |
| 10 | `freechat.tsx` | Daily limit hit | Low | Yes (`paywallBar`) |

---

## 1. Feed — no interests selected

**File:** `apps/mobile/app/feed.tsx`

**Scenario.** A user gets to `/feed` without having picked interests during
onboarding, or after taping "İlgi alanlarımı değiştir" in profile and bailing
out. `getInterests()` returns `[]`.

**Current behavior.** Lines 56–67. When `interests` is an empty array,
`interestModes.size === 0` so `isMatch` returns `true` for every scene —
effectively "all interests" mode. The user sees the full default ordering with
no visual signal that they haven't told the app what they want. The stats strip
shows `0 / 0 / 0` (line 91–106) with no explanation. Not broken, just bland and
indistinguishable from a fully-onboarded user with no progress.

**Recommended fix.** Show a soft banner above the FlatList when
`interests !== null && interests.length === 0`:

> **Henüz ilgi alanı seçmedin.**
> Sana göre dersler getirelim — ne için pratik yapmak istersin?
> **[İlgi alanlarımı seç →]**  *(→ `/onboarding`)*

Place between `DailyQuestsBar` and the `FlatList` (around line 119). Use blue
`tertiarySoft` background to match the Cyber-Electric theme; banner can be
dismissable but should keep reappearing until interests are saved.

---

## 2. Profile — 0 lessons done (no streak, no XP)

**File:** `apps/mobile/app/profile.tsx`

**Scenario.** First-run guest user opens profile. `lessonsCompleted === 0`,
`xp === 0`, `streakNum === 0`.

**Current behavior.** Lines 116–171.
- Streak shows `"—"` (line 118) — good, intentional.
- XP shows `0` Turkish raw — reads as a fail state for some users.
- "Ders bitirdi" stat shows `0` — reads similarly.
- "Plan" shows "Free" with no upsell context.
- Avatar fallback letter is `"L"` if no `display_name` (line 137). Acceptable.
- No CTA pointing user back to `/feed`. The 14 settings rows do not help an
  empty user — they're for someone with progress to manage.

**Recommended fix.** Above the stats grid (before line 158), insert a
"first lesson" prompt card when `lessonsCompleted === 0`:

> **Henüz ders yapmadın.**
> Burası ilerlemeni gösterir. İlk dersini bitir, sayılar canlanır.
> **[İlk dersine başla →]**  *(→ `/feed`)*

Also tweak the XP stat: when `xp === 0 && lessonsCompleted === 0`, show
`"—"` instead of `0` to match the streak treatment. Same for "Ders bitirdi".
Plan stat is fine as-is.

---

## 3. Achievements — 0 earned

**File:** `apps/mobile/app/achievements.tsx`

**Scenario.** New user opens achievements gallery. `earned.size === 0`.

**Current behavior.** Lines 44–82.
- Progress bar shows `0/N kazanıldı` with a zero-width fill — **the
  `barFill` width is `0%` which renders as nothing** (line 50–54).
- The grid below shows N locked (🔒) cards greyed at `opacity: 0.65`
  (`cardLocked` style, line 140–143).
- No headline, no encouragement, no CTA. A new user sees only locked padlocks
  and a flat progress bar — feels punishing.

This is the worst empty state in the app for a new user: it implies "you have
nothing" without telling them what to do about it.

**Recommended fix.** When `earnedCount === 0`, prepend a hero card above the
progress bar:

> **Henüz başarım kazanmadın 🔓**
> İlk dersini bitirdiğinde rozetler buradan açılacak. Her başarım yeni bir
> seviyeyi temsil eder.
> **[İlk dersine başla →]**  *(→ `/feed`)*

Also: when `earnedCount === 0` the locked-card preview is fine *educationally*
(user sees what's coming) but the description copy on each card should make
clear "what unlocks this" — otherwise it's just decoration.

---

## 4. Skills tree — all locked (new user)

**File:** `apps/mobile/app/skills.tsx`

**Scenario.** Brand-new user opens beceri ağacı. `completed` is empty.

**Current behavior.** Lines 111–116. `isLessonLocked` returns `false` only for
`idx === 0` — meaning **lesson 1 of every skill is always unlocked**, lessons
2–N show 🔒. So technically "not all locked" — the user has many lesson-1
nodes to tap. Good.

The actual weakness: there is **no onboarding prompt** explaining the lock
system. A user sees rows of 🔒 next to a single 1 node and may not realize the
🔒 unlocks progressively. Lines 130–202 also do not show an "empty progress"
message — the progress bar for each skill is a flat 0% sliver
(`width: 0%` on line 158).

Also: when `completed.size === 0`, every group's `doneCount === 0` and
`pct === 0`, which means every skill card shows `0/N` and a flat bar — exactly
the same pattern as achievements but with more visual noise.

**Recommended fix.** When `completed.size === 0`, prepend a hint card above the
`Object.entries(MODE_INFO).map(...)`:

> **Beceri ağacına hoş geldin 🌳**
> Her becerinin ilk seviyesi açık. Bitirdikçe yenileri otomatik açılır.
> Senin için en kolayı: **Sipariş > Kafe Siparişi**.
> **[İlk dersi aç →]**  *(→ `/scenario/{firstLessonId}` of order.cafe)*

The recommendation of "Sipariş > Kafe Siparişi" should be hardcoded to the
canonical starter skill (or derive from interests if set).

---

## 5. Scoreboard — 0 scenes done in any mode

**File:** `apps/mobile/app/scoreboard.tsx`

**Scenario.** No mode has any scenes completed. `weakest === null` on line 116.

**Current behavior.** Lines 176–183. Already handles this case explicitly:

```tsx
{loaded && !weakest && (
  <View style={styles.calloutCard}>
    <Text style={styles.calloutLabel}>Henüz başlamadın</Text>
    <Text style={styles.calloutHint}>
      İlk sahneni bitir, burası akıcılığını gösterir.
    </Text>
  </View>
)}
```

Plus a "Şuradan başla →" CTA below (line 186–192). The hero card still shows
`0 / {total}` which is fine — it gives the user a sense of the catalogue's
size.

**Strength:** This screen is the model for how other screens should handle
empty. Copy is empathetic, CTA is explicit, the layout is preserved so the
empty user understands what the populated screen will look like.

**Minor improvement.** The callout reads "Henüz başlamadın" — slightly more
direct in Turkish would be "Henüz hiç sahne bitirmedin." But this is polish,
not a fix.

---

## 6. Journal — today section has 0 lessons today

**File:** `apps/mobile/app/journal.tsx`

**Scenario.** User opens journal but hasn't done a lesson today.

**Current behavior.** Lines 300–301 + 452–461. Already handled by
`EmptyTodayCard`:

> **Bugün henüz ders yapmadın.**
> **[Şimdi başla →]**  *(→ `/feed`)*

CTA is yellow (`brand.primary`), text in surface container with light border —
visually appropriate.

**Strength:** Good empty state. Tonally correct, action-oriented.

**Minor improvement.** Add a one-line hint about the daily streak risk:
"Bugün ders yaparsan **{currentStreak + 1}** günlük seri olur." — but only if
`currentStreak > 0`. Boosts motivation. Not strictly necessary.

---

## 7. Journal — this week has 0 entries

**File:** `apps/mobile/app/journal.tsx`

**Scenario.** No lessons in the past 7 days (or none outside of today/yesterday).

**Current behavior.** Lines 344–346:

```tsx
{loaded && weekGroups.length === 0 ? (
  <EmptyStateCard text="Bu haftanın geri kalanında henüz başka ders yok." />
) : ...
```

`EmptyStateCard` is text-only italic gray inside a low-contrast card
(`surfaceContainerLow`) — see lines 463–469 + 688–698. No CTA. This is the
*"section is just text"* style, used for low-priority states.

Also: when **every** section is empty (today + yesterday + week), lines
368–375 add a single line:

> **Bir sahne bitirdikçe burada birikecek. Söyle gitsin.**

This is shown *below* the three section accordions — which by then are all
visually empty. The user lands on a screen full of empty cards with one
italic line at the bottom. Confusing hierarchy.

**Recommended fix.**
1. Improve the per-section empty for "Bu hafta" — when this is the only
   non-empty signal a user has, the italic-grey card is too whisper-y.
   Suggested copy:
   > **Bu hafta henüz başka gün yok.**
   > Yarın bir sahneyle haftaya devam et.

2. For the "totally empty journal" case (line 368–375), promote the message
   to a hero card at the **top** of the ScrollView (right after the pill row),
   and add a CTA:
   > **Günlüğün boş 📓**
   > İlk sahneni bitir, bitiren ders + öğrendiğin cümleler burada birikir.
   > **[Şimdi başla →]**  *(→ `/feed`)*

   Then collapse the three accordions (today/yesterday/week) by default so the
   user isn't staring at three "no lesson" cards stacked.

---

## 8. Streak calendar — 0 days of activity

**File:** `apps/mobile/app/streakcalendar.tsx`

**Scenario.** New user, never done a lesson. `currentStreak === 0`,
`longestStreak === 0`, `daily` map empty so all 30 cells render as `cellEmpty`.

**Current behavior.** Lines 122–248.
- Hero shows `0 🔥` and "gün üst üste" — **a giant zero with a flame**. Reads
  as failure.
- "En uzun: 0 gün" pill below (line 128–131). Reinforces emptiness.
- Calendar grid renders 30 gray cells, all empty (last cell has today border).
  Visually accurate but heavy.
- Stats row: `0 / 30 gün pratik`, `0 Son 30 gün XP`. More zeros.
- 4 achievement cards all locked (🔒) at 60% opacity.
- CTA "Bugünkü pratiği yap →" (line 236–241) — good, present.
- Lines 243–247: italic hint *"İlk dersini bitir, seri burada görünür."* —
  only shown when `unlockedAchievements.length === 0 && currentStreak === 0`.

The CTA + hint at the *bottom* of the screen is good, but the giant `0` at the
top is the first thing a new user sees. Five layers of emptiness above the
encouragement.

**Recommended fix.** When `currentStreak === 0` AND `activeDays === 0`,
replace the giant hero number with a friendlier first-time hero. Suggested:

> *(no big 0)*
> **🔥 Seri henüz başlamadı**
> Bugün bir ders bitir, sayaç çalışmaya başlar.
> **[Bugünkü pratik →]**  *(→ `/feed`)*

The calendar grid and locked badges are fine to keep below — they're aspirational
and show the user what's coming. Just don't lead with `0`.

---

## 9. FreeChat — no AI provider configured (all keys missing)

**File:** `apps/mobile/app/freechat.tsx` + `apps/mobile/lib/llm-router.ts`

**Scenario.** None of `EXPO_PUBLIC_GROQ_KEY`, `EXPO_PUBLIC_CEREBRAS_KEY`,
`EXPO_PUBLIC_GEMINI_KEY`, `EXPO_PUBLIC_OPENROUTER_KEY`,
`EXPO_PUBLIC_CLOUDFLARE_KEY` is set at build time. Open-source contributor,
self-hosted build, or misconfigured CI build.

**Current behavior.** Critical gap:

1. Screen mounts, shows the persona card, opener bubble, "Bugünkü mesaj 0/10"
   counter, full input bar. Looks completely functional.
2. User sends a message. `sendMessage` (line 274–314) calls `chatComplete`.
3. `llm-router.ts` line 327–346 iterates all providers, every one is skipped
   because `cfg.apiKey` is falsy (line 328 `continue`), no errors are thrown
   per-provider. Final line 348 throws
   `"All LLM providers failed or unavailable. Tried: none (no keys configured)"`.
4. `freechat.tsx` line 305–310 catches the throw, appends a message bubble
   reading **"Şu an AI hizmeti kullanılamıyor, biraz sonra dene."** with
   `error: true`. The user's optimistic message stays in the chat.
5. `dailyCount` was already incremented in line 286–292 — **so the user burned
   one of their 10 daily messages for a system the dev forgot to configure**.
6. Same failure mode whether keys are missing OR all providers are down. User
   cannot distinguish "I should try later" from "this build is misconfigured".

This is the second-worst empty state in the app. For a Turkish learner who
shows up expecting practice, the only feedback is a generic "try later" — and
the daily quota is silently consumed.

**Recommended fix.** Detect "no keys configured" up-front and gate the screen.

1. On mount (line 164–202), call a lightweight `hasAnyProviderConfigured()`
   helper that checks `process.env.EXPO_PUBLIC_*` keys. If all are falsy, set
   `noProvider = true`.
2. When `noProvider === true`, hide the input bar and show a config-required
   card in its place. Suggested copy:

   > **AI sohbet şu an kullanılamıyor 🤖💤**
   > Geliştirici ayarları eksik. Lafla ekibi yakında bağlayacak.
   > Bu arada yapılandırılmış sahne dersleriyle pratik yapabilirsin.
   > **[Sahne derslerine dön →]**  *(→ `/feed`)*

3. **Critical:** Do NOT increment `dailyCount` when the chat is gated. Move the
   line 286–292 increment so it runs *after* a successful `chatComplete` reply
   (or at minimum, refund it inside the catch block when the failure looks like
   "no providers configured" by parsing the error message — but the up-front
   check is cleaner).

4. Separately, for the transient outage case (all keys present, all providers
   429-ing), keep the current ERROR_FALLBACK bubble — that's the right UI for
   "service is down, try later". Just don't conflate it with "service does not
   exist in this build".

---

## 10. FreeChat — daily limit hit

**File:** `apps/mobile/app/freechat.tsx`

**Scenario.** User sent 10 messages today. `dailyCount >= DAILY_LIMIT` →
`atLimit === true`.

**Current behavior.** Lines 408–419 + 718–743. The input bar is replaced by
`paywallBar`:

> **Sınırsız sohbet için Premium'a geç.**
> **[Premium'a geç →]**

Also the counter chip on line 362–374 switches to error-red and reads
"Bugün için sınıra ulaştın (10/10)".

**Strength:** Already handled well — clear, action-oriented, and the counter
gives precise feedback. Existing scrollback stays visible so the user can
review what they wrote.

**Minor improvement.** Add a fallback for non-premium users who don't want
to upsell: a secondary "Yarın görüşürüz" pill that explains the reset:

> Sınırsız sohbet için Premium'a geç.
> *Veya yarın sıfırlanır — sahne derslerine gidebilirsin.*
> **[Premium'a geç →]**     **[Sahne derslerine →]**

This gives the user an "out" instead of a hard upsell. Tonally consistent with
the "Söyle gitsin" brand voice — practical, not pushy.

---

## Cross-cutting observations

1. **Inconsistent "zero is the worst" treatment.** `profile.tsx` shows `"—"`
   for streak but `0` for everything else. `streakcalendar.tsx` shows a giant
   `0`. `scoreboard.tsx` shows a giant `0`. Pick one convention (recommend
   `"—"` for the "this user has never done anything" case) and apply across
   stats hero cards.

2. **CTA destinations should be smarter when user has never started.** Most
   empty-state CTAs route to `/feed`. That's correct, but if the user has *no
   interests selected*, dropping them on `/feed` lands them on the same
   unselected experience. Route `→ /onboarding` first when
   `interests.length === 0`.

3. **The `EmptyStateCard` component in journal.tsx (lines 463–469) is the only
   shared "soft empty" primitive in the codebase.** Consider extracting an
   `EmptyHero` component that takes `{ emoji, title, body, ctaLabel, ctaHref }`
   and use it across all 8 screens. The copy patterns are extremely repetitive.

4. **No reverse-locale fallback.** Every empty-state copy in this audit
   assumes Turkish. That's correct for v1 (Lafla is Turkish-first) — but if an
   English UI lands later, the existing Turkish placeholder copy will need a
   matching `en` translation key. Today, copy is hardcoded inline.

---

## Top 3 worst empty-state offenders (most likely to confuse new users)

1. **FreeChat with no AI provider configured.** Silent failure that consumes
   the user's daily quota and shows an outage-style error. The user has no way
   to know this is a misconfiguration, not a flaky service.

2. **Achievements when 0 earned.** Punishing grid of locked padlocks with a
   flat zero-width progress bar and zero motivation copy. New user opens, sees
   only 🔒🔒🔒, closes.

3. **Streak calendar with 0 days of activity.** Giant `0 🔥` as the first
   thing on the screen. The hint at the bottom is good but the user already
   bounced.

## Blockers

None. All findings are observational; report is purely analytical and contains
no code changes. Empty-state primitive extraction (see cross-cutting #3) would
be a sensible follow-up but is not a blocker.
