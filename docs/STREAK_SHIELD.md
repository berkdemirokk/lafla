# Streak Shield — Premium Streak Protection

A premium feature that auto-saves the user's streak if they miss a single
day. Premium subscribers get **2 shields per month**; free users get **0**.
Shields refresh on the first day of each calendar month (local time).

> Implementation: `apps/mobile/lib/streak-shield.ts`
> Component: `apps/mobile/components/StreakShieldCard.tsx`

---

## 1. Why this exists (pedagogy)

Streaks are Lafla's strongest retention lever, but they're also the most
common reason a learner *quits*: one missed day → streak goes to 0 → "I
already broke the chain, why bother." That cliff drops 30-day retention
in every habit-tracking product we've audited.

The shield converts a hard cliff into a soft one. Concretely:

| Without shield                                        | With shield                                                |
| ----------------------------------------------------- | ---------------------------------------------------------- |
| Miss 1 day → streak resets to 0 → user feels punished | Miss 1 day → quiet save → user opens app, sees "still 12" |
| User churns at the cliff edge                         | User keeps coming back; the cliff is invisible             |
| All days carry identical anxiety                      | Two days/month are "free" — anxiety lifts                  |

The anxiety reduction is the actual product. Users do not need to
*consciously* know shields exist for the behavior to change — the streak
just feels more forgiving, and the per-session dread of "what if I'm too
tired tonight" drops. Empirically this is worth more than any new lesson
content for free-to-paid conversion among habit-driven learners.

We do not extend the shield to cover multi-day absences. A 2-day gap is
typically a structural break (vacation, sickness, life event) and a
protective shield would feel cheap — the learner knows they didn't earn
it. One-day shield is the sweet spot.

---

## 2. Pricing positioning (premium-only)

Shields are gated behind the existing `premium` entitlement
(`lib/iap.ts`, `lib/premium-gate.ts`). This is intentional:

1. **Free users get the streak**, just without protection. The core loop
   isn't paywalled — only the safety net is.
2. **It's a "loss aversion" upsell, not a feature upsell.** "Don't lose
   what you built" converts better than "unlock more stuff" for users who
   already have a 14+ day streak. The longer the streak the higher the
   willingness to pay.
3. **Two/month, not unlimited.** Scarcity keeps the perceived value high
   and prevents shields from becoming a way to game the system. Two
   covers ~80% of legitimate one-day misses for a daily learner.

The card on the profile and streak calendar surfaces does double duty:
for premium users it's a status display; for free users it's a soft
upsell with a tappable "Premium ile aç" pill that opens the paywall.

---

## 3. Data model

Single AsyncStorage key:

```
lafla.streakShield → {
  month: "YYYY-MM",  // local-time calendar month
  used:  number,     // 0..2 typically
  lastUsedAt?: ISO   // for UI: "X kullanıldı" line
}
```

- `month` is the **rotation key**. On read, if `month` doesn't match the
  current local month, we treat `used` as 0. This avoids a daily cron and
  is robust to the device clock drifting *forward* (the user can never
  retroactively un-spend a shield by changing their clock).
- `lastUsedAt` persists across month rollovers so the "kullanıldı" line
  still has the most recent date even after the counter resets.

The streak counter itself (`current_streak`, `last_lesson_at`) lives in
`lib/local-progress.ts` and is **not modified by this module's data
structure**. The shield module reads `last_lesson_at` and, when it
restores a streak, writes back via the public `setLocalProfile({...})`
mutator — patching `last_lesson_at` to yesterday so that the next
`bumpStreak()` call sees a 1-day gap and increments the streak normally.

This separation is deliberate: the streak logic in `local-progress.ts`
stays canonical and untouched; shields are a thin layer on top that only
changes *which date* `last_lesson_at` points to.

---

## 4. Public API

```ts
import {
  getShieldState,   // read wallet + tier
  consumeShield,    // mutate: deduct one (low-level)
  restoreStreak,    // high-level: deduct if yesterday was missed
} from "../lib/streak-shield";

const state = await getShieldState();
// { available, usedThisMonth, nextResetAt, lastUsedAt?, isPremium, monthlyCap }

const consumed = await restoreStreak();
// true if a shield was spent and last_lesson_at was patched to yesterday
```

`consumeShield(reason)` is exposed for unusual flows (future "spend a
shield manually" gesture, debug menu). `restoreStreak()` is the verb
98% of callers want.

`restoreStreak()` returns `false` (no-op) when:

- the user has no streak (`current_streak === 0` or no `last_lesson_at`)
- the last lesson was today or yesterday already — nothing to save
- the gap is 2+ full days — outside the shield's coverage
- the user is free / has spent both shields this month

---

## 5. Integration plan

### 5a. Call `restoreStreak()` on app open

Place in **`app/_layout.tsx`** root effect, OR in **`app/index.tsx`**
splash effect — both will execute before any lesson screen mounts.

Recommendation: `app/index.tsx` is the cleaner home, because the splash
already inspects local progress / auth state and shows a brief delay
window in which we can run side effects without flicker. Snippet:

```ts
// app/index.tsx — inside the existing splash useEffect, before routing.
import { restoreStreak } from "../lib/streak-shield";
import { Toast } from "...";  // existing toast util

useEffect(() => {
  (async () => {
    try {
      const saved = await restoreStreak();
      if (saved) {
        // 1-shot toast (idempotent — restoreStreak only fires once per gap)
        Toast.show("🛡️ Kalkanın seni kurtardı!");
      }
    } catch {
      // never block app boot on shield logic
    }
  })();
}, []);
```

If `_layout.tsx` is preferred (e.g. to run before any other screen,
including deep-link entries), wrap the call in a `useEffect` at the
top-level RootLayout function, but be careful: `_layout.tsx` re-mounts
when the route stack resets, so guard with a module-level "have run
this session" flag to avoid double toasts.

The toast copy "Kalkanın seni kurtardı!" matches the Cyber-Electric
tone of voice — short, second person, slightly playful. Toast should
use `tokens.brand.tertiary` (electric blue) as the accent.

### 5b. Show the card

`<StreakShieldCard />` is dependency-light (reads its own state) and can
be dropped anywhere. Two intended placements:

1. **`app/profile.tsx`** — alongside the existing streak / XP cards.
   Premium users see their wallet; free users see the upsell pill.
2. **`app/streakcalendar.tsx`** — above or below the calendar grid.
   Highest-intent surface: the user is literally looking at their
   streak when they see "you have a shield available."

Both placements are zero-prop unless you want to share a cached state:

```tsx
import { StreakShieldCard } from "../components/StreakShieldCard";

// Bare:
<StreakShieldCard />

// With external state (e.g. to refetch when a lesson completes):
<StreakShieldCard refreshKey={lessonCount} />
```

---

## 6. Edge cases

- **Clock manipulation.** A user setting their clock forward can spend
  shields earlier than intended (month rolls over → fresh 2). They
  cannot retroactively un-spend by going backward (we only honor a
  match between the stored `month` and the current month; older months
  are not re-credited). This is the right asymmetry — punishing clock
  cheats isn't worth the dev complexity.
- **Free → premium upgrade mid-month.** Cap immediately becomes 2;
  `used` carries over (probably 0). No special handling required.
- **Premium → free downgrade mid-month.** Cap drops to 0; `available`
  goes to 0 even if `used < 2`. The user keeps the protection they've
  already received (we never un-restore a streak), they just can't
  spend more.
- **Two missed days.** Outside coverage. The streak resets normally on
  the next lesson. We could consider a "buy one extra shield" IAP for
  this case but it's not in scope.
- **First lesson ever.** `current_streak === 0` → `restoreStreak()`
  bails before touching the wallet. No accidental "shield used on day 1."

---

## 7. Definition of Done (this PR)

- [x] `lib/streak-shield.ts` exports `getShieldState`, `consumeShield`,
      `restoreStreak`
- [x] `components/StreakShieldCard.tsx` renders premium + free variants
- [x] This doc
- [ ] *(follow-up)* hook `restoreStreak()` into `app/index.tsx` splash
- [ ] *(follow-up)* mount `<StreakShieldCard />` on `profile.tsx`
      and `streakcalendar.tsx`
- [ ] *(follow-up)* add the 1-time success toast UI

Follow-up items are intentionally out of scope per the no-modify
constraints on `_layout.tsx` and existing screens for this change.
