# Lafla Analytics Event Catalog

Status: scaffold only — `posthog-react-native` is **not** installed yet. Calls to `track / identify / screen` from `apps/mobile/lib/analytics.ts` are no-ops outside of `__DEV__`, where they emit `console.debug` lines so flow can be inspected without a backend.

## Conventions

- **Event names**: `snake_case`, verb in past tense when something completed (`lesson_completed`), present/imperative when an action starts (`purchase_initiated`).
- **Property names**: `snake_case`, primitive values only. Timestamps as ISO 8601 strings.
- **User ID**: Supabase `auth.user.id` (UUID). Call `identify` immediately after sign-in / sign-up and on app open if a session already exists.
- **PII**: never send raw email, password, or free-form chat text. Hash or omit.
- **Locale**: include `locale: "tr" | "en"` on events tied to content language whenever relevant.

## Lifecycle

| Hook | Call |
| --- | --- |
| App cold start | `track("app_opened", { ... })` then `identify(userId)` if session exists |
| Sign-up success | `identify(userId, traits)` then `track("signup", { method })` |
| Sign-in success | `identify(userId, traits)` then `track("signin", { method })` |
| Sign-out | `track("signout")` then reset client (call `posthog.reset()` once SDK wired) |
| Route change | `screen("LessonScreen", { lesson_id })` from a navigation listener |

## Events

### Roleplay learning loop

| Event | Properties | Purpose |
|---|---|---|
| `roleplay_turn_retry_prompted` | `scenario_id`, `turn_index`, `assessment`, `input_mode` | Finds turns where learners need repair support. |
| `roleplay_turn_completed` | `scenario_id`, `turn_index`, `assessment`, `retried`, `input_mode` | Measures supported completion and retry recovery. |
| `roleplay_guidance_bypassed` | `scenario_id`, `turn_index` | Measures learners voluntarily choosing free production. |
| `roleplay_voice_failed` | `scenario_id`, `turn_index`, `reason` | Tracks microphone/STT reliability without recording user text. |

No roleplay event may include transcript, free-form answer text, or audio.

### `app_opened`

Fired once per cold start, after navigation is ready.

```json
{
  "platform": "ios",
  "app_version": "1.0.0",
  "is_premium": false,
  "current_streak": 3,
  "locale": "tr"
}
```

### `signup`

```json
{
  "method": "email",
  "has_referrer": false
}
```

### `signin`

```json
{
  "method": "email"
}
```

### `signout`

```json
{
  "reason": "user_initiated"
}
```

### `lesson_started`

```json
{
  "lesson_id": "lesson_042",
  "skill": "ordering_coffee",
  "level": "A2",
  "source": "feed"
}
```

### `lesson_completed`

```json
{
  "lesson_id": "lesson_042",
  "skill": "ordering_coffee",
  "level": "A2",
  "duration_ms": 184320,
  "score": 0.91,
  "items_correct": 9,
  "items_total": 10,
  "xp_awarded": 25
}
```

### `scenario_completed`

```json
{
  "scenario_id": "airport.checkin.1.1",
  "skill_id": "airport.checkin.1",
  "mode": "airport",
  "score": 90,
  "mastery_score": 67,
  "assisted_turns": 1
}
```

`score` is the post-correction task result shown to the learner;
`mastery_score` is first-attempt performance used by SRS/CEFR progression.

### `quest_claimed`

```json
{
  "quest_id": "daily_three_lessons",
  "quest_type": "daily",
  "reward_xp": 50,
  "reward_gem": 0
}
```

### `achievement_unlocked`

```json
{
  "achievement_id": "seven_day_streak",
  "tier": "silver",
  "total_unlocked": 12
}
```

### `streak_extended`

```json
{
  "new_streak": 8,
  "previous_streak": 7,
  "longest_streak": 14
}
```

### `streak_broken`

```json
{
  "previous_streak": 8,
  "days_since_last_lesson": 2,
  "longest_streak": 14
}
```

### `paywall_viewed`

```json
{
  "source": "lesson_gate",
  "variant": "annual_default",
  "is_premium": false
}
```

### `purchase_initiated`

```json
{
  "product_id": "lafla_premium_annual",
  "price_local": "₺499.99",
  "currency": "TRY",
  "source": "paywall"
}
```

Pair with a follow-up `track("purchase_completed", ...)` once the store callback resolves (not yet in scope for this scaffold, but recommended).

### `freechat_message_sent`

Never include raw text. Send shape only.

```json
{
  "conversation_id": "conv_8f2a",
  "message_length": 42,
  "language": "en",
  "turn_index": 5
}
```

### `pronunciation_attempted`

```json
{
  "phrase_id": "phrase_hello_world",
  "attempt_number": 2,
  "score": 0.83,
  "duration_ms": 1840
}
```

### `voice_played`

```json
{
  "asset_id": "tts_lesson_042_line_3",
  "kind": "lesson_line",
  "playback_rate": 1.0,
  "from_cache": true
}
```

### `settings_changed`

```json
{
  "setting": "notifications_enabled",
  "old_value": false,
  "new_value": true
}
```

### `share_invite_sent`

```json
{
  "channel": "whatsapp",
  "source": "profile_share_sheet"
}
```

### `error_occurred`

For caught, recoverable errors only. Never include stack traces with PII.

```json
{
  "area": "lesson_engine",
  "code": "tts_fetch_failed",
  "fatal": false,
  "message": "Network request timed out"
}
```

## Recommended integration points

Wire calls from these files once the SDK is installed. None of these touch the route files yet (scaffold is no-op-safe).

| Event | Likely call site |
| --- | --- |
| `app_opened` | `apps/mobile/app/_layout.tsx` root effect, after fonts/session bootstrap |
| `signup` / `signin` / `signout` | `apps/mobile/lib/auth.ts` (`signUpWithEmail`, `signInWithEmail`, sign-out helper) |
| `lesson_started` / `lesson_completed` | `apps/mobile/app/lesson/[id].tsx`, around `engine.completeLesson(...)` |
| `scenario_completed` | `apps/mobile/app/scenario/[id].tsx` finish handler |
| `quest_claimed` | `apps/mobile/lib/daily-quests.ts` claim path |
| `achievement_unlocked` | `apps/mobile/lib/achievements.ts` unlock path |
| `streak_extended` / `streak_broken` | `apps/mobile/lib/engine.ts` (post-lesson streak update) |
| `paywall_viewed` / `purchase_initiated` | `apps/mobile/app/paywall.tsx` mount + CTA |
| `freechat_message_sent` | Free-chat send handler (length only, never text) |
| `pronunciation_attempted` | Pronunciation evaluator return path |
| `voice_played` | `apps/mobile/lib/tts.ts` playback start |
| `settings_changed` | `apps/mobile/app/settings.tsx` toggle handlers |
| `share_invite_sent` | Share-sheet success callback (profile/achievements) |
| `error_occurred` | Catch blocks around network / engine boundaries |

## Wiring the SDK later

1. `pnpm --filter @lafla/mobile add posthog-react-native`
2. Wrap the app root in `<PostHogProvider apiKey={...} options={{ host: "..." }}>`.
3. Update `apps/mobile/lib/analytics.ts` `getClient()` to return the PostHog instance from `usePostHog()` context — easiest path is to expose a setter (`setAnalyticsClient`) called from a top-level component that reads `usePostHog()` once.
4. Call `posthog.reset()` inside the `signout` flow.

The current `lib/analytics.ts` is intentionally side-effect-free at import time so adding the dep later does not require any call-site changes.
