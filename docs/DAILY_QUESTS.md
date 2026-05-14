# Daily Quests (v2)

Lafla's daily quest system. Local-only (AsyncStorage), resets at midnight,
deterministic by date — every user sees the same 3 quests on a given day.

Source: `apps/mobile/lib/daily-quests-v2.ts`
v1 (kept for back-compat): `apps/mobile/lib/daily-quests.ts`

## Pool: 15 quests

3 of these 15 are picked each day via a weighted, deterministic LCG seeded
on the YYYY-MM-DD date. Higher `weight` = appears more often. Rare quests
(low weight) only surface occasionally so the daily set stays achievable.

| # | ID | Emoji | Title (TR) | Target | Unit | XP | Weight | Integration point |
|---|----|-------|------------|--------|------|----|--------|--------------------|
| 1  | `complete_lesson`      | 📚 | 1 ders tamamla                       | 1   | ders       | 20  | 10 | `recordLessonCompletionV2` — every lesson |
| 2  | `earn_xp_50`           | ⚡ | 50 XP kazan                          | 50  | XP         | 25  | 10 | `recordLessonCompletionV2({ xpEarned })` |
| 3  | `complete_roleplay`    | 💬 | 1 roleplay tamamla                   | 1   | roleplay   | 30  | 7  | `recordLessonCompletionV2({ isRoleplay: true })` from `scenario/[id].tsx` |
| 4  | `complete_3_lessons`   | 🏃 | 3 ders tamamla                       | 3   | ders       | 50  | 6  | Every lesson |
| 5  | `earn_xp_100`          | 🔥 | 100 XP kazan                         | 100 | XP         | 40  | 6  | Every lesson via `xpEarned` |
| 6  | `complete_5_exercises` | ✏️ | 5 alıştırma yap                      | 5   | alıştırma  | 30  | 8  | `recordLessonCompletionV2({ exercisesCount })` — caller passes # of exercises in the lesson |
| 7  | `speak_3_phrases`      | 🗣️ | 3 cümleyi sesli oku                  | 3   | cümle      | 25  | 7  | `recordLessonCompletionV2({ phrasesSpoken })` — caller tallies pronunciation/STT events |
| 8  | `finish_a_skill`       | 🌳 | Bir skill'in tüm derslerini bitir    | 1   | skill      | 100 | 1  | `recordLessonCompletionV2({ skillCompleted: true })` when last lesson of a skill closes |
| 9  | `try_new_mode`         | 🆕 | Denemediğin bir modda 1 ders yap     | 1   | ders       | 40  | 3  | `recordLessonCompletionV2({ modeId })` — module tracks seen modes in `lafla.dailyquests.v2.seenModes` and counts unseen ones |
| 10 | `daily_streak`         | 🔥 | Bugün de pratik et — yarın olur      | 1   | gün        | 15  | 9  | Auto-progressed on first `recordLessonCompletionV2` call of the day |
| 11 | `perfect_score`        | 🎯 | 1 dersi %100 ile tamamla             | 1   | ders       | 60  | 4  | `recordLessonCompletionV2({ isPerfect: true })` |
| 12 | `hint_free`            | 💪 | 1 dersi hiç ipucu görmeden bitir     | 1   | ders       | 50  | 4  | `recordLessonCompletionV2({ hintFree: true })` — caller tracks hint usage |
| 13 | `listen_5_audio`       | 🎧 | 5 İngilizce ifadeyi dinle            | 5   | ifade      | 20  | 8  | `recordLessonCompletionV2({ audioListens })` — caller passes # of TTS plays |
| 14 | `flirt_mode`           | 💕 | Flört modunda 1 ders yap             | 1   | ders       | 30  | 5  | `recordLessonCompletionV2({ modeId: "flirt" })` |
| 15 | `work_mode`            | 💼 | İş modunda 1 ders yap                | 1   | ders       | 30  | 5  | `recordLessonCompletionV2({ modeId: "work" })` |

Total weight: 99. Sanity check: with a 3-pick walk, `finish_a_skill`
(weight 1) appears roughly once every ~30 days; `complete_lesson` /
`earn_xp_50` (weight 10) appear ~30% of days.

## API

```ts
import {
  QUEST_POOL_V2,
  getDailyQuestsV2,
  recordLessonCompletionV2,
  claimQuestV2,
  type QuestIdV2,
  type QuestDefV2,
  type DailyQuestStateV2,
} from "../lib/daily-quests-v2";
```

### `recordLessonCompletionV2(args)`

```ts
{
  xpEarned: number;
  isRoleplay?: boolean;
  isPerfect?: boolean;
  hintFree?: boolean;
  skillCompleted?: boolean;
  modeId?: string;          // "flirt" | "work" | other; used by try_new_mode + flirt_mode/work_mode
  exercisesCount?: number;
  audioListens?: number;    // optional — TTS play count during the lesson
  phrasesSpoken?: number;   // optional — # of phrases the user spoke aloud
}
```

All new fields are optional; v1 callers that only pass `{ xpEarned, isRoleplay }`
continue to make sense, they just won't progress the new quest types.

### `claimQuestV2(id) -> Promise<number | null>`

Returns the XP reward when the quest is complete and not yet claimed,
otherwise `null`. UI hands the returned XP to the user's XP store.

## Storage keys

| Key | Shape | Lifetime |
|-----|-------|----------|
| `lafla.dailyquests.v2`           | `DailyQuestStateV2`     | Replaced daily |
| `lafla.dailyquests.v2.seenModes` | `string[]` (mode ids)   | Permanent (for `try_new_mode`) |
| `lafla.dailyquests.v2.lastDay`   | `string` (YYYY-MM-DD)   | Updated on each completion |

v1's key (`lafla.dailyquests`) is untouched, so the two versions coexist
during rollout.

## Migration

1. Update `components/DailyQuestsBar.tsx` to import from `daily-quests-v2`
   (swap `QUEST_POOL` -> `QUEST_POOL_V2`, `getDailyQuests` -> `getDailyQuestsV2`,
   `claimQuest` -> `claimQuestV2`).
2. Update `app/lesson/[id].tsx` and `app/scenario/[id].tsx` to call
   `recordLessonCompletionV2` and pass the additional flags they already
   know (`isPerfect`, `hintFree`, `modeId`, `exercisesCount`).
3. Leave `lib/daily-quests.ts` in place until v2 has been in production a
   few weeks — then delete it and the `lafla.dailyquests` key.
