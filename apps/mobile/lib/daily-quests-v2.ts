// Lafla — Daily quest system v2. Expanded pool of 15 quests, weighted pick.
// Local-only, resets every midnight. Drop-in compatible with v1 storage shape;
// callers should switch imports from "./daily-quests" to "./daily-quests-v2"
// once ready. v2 uses its own storage key so the two versions coexist
// without trampling each other during rollout.

import AsyncStorage from "@react-native-async-storage/async-storage";

import type { QuestDef } from "./daily-quests";

const K_QUESTS_V2 = "lafla.dailyquests.v2";

export type QuestIdV2 =
  // Existing 5 (from v1)
  | "complete_lesson"
  | "earn_xp_50"
  | "complete_roleplay"
  | "complete_3_lessons"
  | "earn_xp_100"
  // New 10
  | "complete_5_exercises"
  | "speak_3_phrases"
  | "finish_a_skill"
  | "try_new_mode"
  | "daily_streak"
  | "perfect_score"
  | "hint_free"
  | "listen_5_audio"
  | "flirt_mode"
  | "work_mode";

// Weight controls selection frequency in pickDailyQuestsV2. Higher = more
// common. Rare/aspirational quests like finish_a_skill or perfect_score get
// low weights so they don't dominate the daily 3 and frustrate users.
export interface QuestDefV2 extends Omit<QuestDef, "id"> {
  id: QuestIdV2;
  weight: number;
}

export const QUEST_POOL_V2: QuestDefV2[] = [
  // --- Existing 5 (kept verbatim from v1, with weights added) ---
  {
    id: "complete_lesson",
    emoji: "📚",
    title: "1 ders tamamla",
    target: 1,
    unit: "ders",
    xpReward: 20,
    weight: 10, // very common — easy starter quest
  },
  {
    id: "earn_xp_50",
    emoji: "⚡",
    title: "50 XP kazan",
    target: 50,
    unit: "XP",
    xpReward: 25,
    weight: 10,
  },
  {
    id: "complete_roleplay",
    emoji: "💬",
    title: "1 roleplay tamamla",
    target: 1,
    unit: "roleplay",
    xpReward: 30,
    weight: 7,
  },
  {
    id: "complete_3_lessons",
    emoji: "🏃",
    title: "3 ders tamamla",
    target: 3,
    unit: "ders",
    xpReward: 50,
    weight: 6,
  },
  {
    id: "earn_xp_100",
    emoji: "🔥",
    title: "100 XP kazan",
    target: 100,
    unit: "XP",
    xpReward: 40,
    weight: 6,
  },
  // --- New 10 ---
  {
    id: "complete_5_exercises",
    emoji: "✏️",
    title: "5 alıştırma yap",
    target: 5,
    unit: "alıştırma",
    xpReward: 30,
    weight: 8,
  },
  {
    id: "speak_3_phrases",
    emoji: "🗣️",
    title: "3 cümleyi sesli oku",
    target: 3,
    unit: "cümle",
    xpReward: 25,
    weight: 7,
  },
  {
    id: "finish_a_skill",
    emoji: "🌳",
    title: "Bir skill'in tüm derslerini bitir",
    target: 1,
    unit: "skill",
    xpReward: 100,
    weight: 1, // rare — multi-day goal
  },
  {
    id: "try_new_mode",
    emoji: "🆕",
    title: "Denemediğin bir modda 1 ders yap",
    target: 1,
    unit: "ders",
    xpReward: 40,
    weight: 3,
  },
  {
    id: "daily_streak",
    emoji: "🔥",
    title: "Bugün de pratik et — yarın olur",
    target: 1,
    unit: "gün",
    xpReward: 15,
    weight: 9, // common — streak nudge
  },
  {
    id: "perfect_score",
    emoji: "🎯",
    title: "1 dersi %100 ile tamamla",
    target: 1,
    unit: "ders",
    xpReward: 60,
    weight: 4,
  },
  {
    id: "hint_free",
    emoji: "💪",
    title: "1 dersi hiç ipucu görmeden bitir",
    target: 1,
    unit: "ders",
    xpReward: 50,
    weight: 4,
  },
  {
    id: "listen_5_audio",
    emoji: "🎧",
    title: "5 İngilizce ifadeyi dinle",
    target: 5,
    unit: "ifade",
    xpReward: 20,
    weight: 8,
  },
  {
    id: "flirt_mode",
    emoji: "💕",
    title: "Flört modunda 1 ders yap",
    target: 1,
    unit: "ders",
    xpReward: 30,
    weight: 5,
  },
  {
    id: "work_mode",
    emoji: "💼",
    title: "İş modunda 1 ders yap",
    target: 1,
    unit: "ders",
    xpReward: 30,
    weight: 5,
  },
];

export interface DailyQuestStateV2 {
  date: string; // YYYY-MM-DD
  quests: Array<{
    id: QuestIdV2;
    progress: number;
    claimed: boolean;
  }>;
}

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// Deterministic hash from a seed string. Stable across runs so the same date
// always picks the same quests.
function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Weighted, deterministic pick of 3 distinct quests per day.
// Walks the cumulative-weight table 3 times with offset seeds, skipping
// duplicates. Falls back to filling from QUEST_POOL_V2 in order if the
// weighted walk somehow yields fewer than 3 unique ids (defensive).
export function pickDailyQuestsV2(seed: string): QuestIdV2[] {
  const totalWeight = QUEST_POOL_V2.reduce((s, q) => s + q.weight, 0);
  const picked: QuestIdV2[] = [];
  let h = hashSeed(seed);
  let safety = 0;
  while (picked.length < 3 && safety++ < 50) {
    h = (Math.imul(h, 1664525) + 1013904223) >>> 0; // LCG step
    let target = h % totalWeight;
    for (const q of QUEST_POOL_V2) {
      target -= q.weight;
      if (target < 0) {
        if (!picked.includes(q.id)) picked.push(q.id);
        break;
      }
    }
  }
  if (picked.length < 3) {
    for (const q of QUEST_POOL_V2) {
      if (picked.length >= 3) break;
      if (!picked.includes(q.id)) picked.push(q.id);
    }
  }
  return picked.slice(0, 3);
}

export async function getDailyQuestsV2(): Promise<DailyQuestStateV2> {
  const today = todayStr();
  try {
    const raw = await AsyncStorage.getItem(K_QUESTS_V2);
    if (raw) {
      const parsed = JSON.parse(raw) as DailyQuestStateV2;
      if (parsed.date === today) return parsed;
    }
  } catch {
    // fall through to fresh generation
  }

  const ids = pickDailyQuestsV2(today);
  const fresh: DailyQuestStateV2 = {
    date: today,
    quests: ids.map((id) => ({ id, progress: 0, claimed: false })),
  };
  await AsyncStorage.setItem(K_QUESTS_V2, JSON.stringify(fresh)).catch(
    () => {},
  );
  return fresh;
}

export async function progressQuestV2(
  matcher: (id: QuestIdV2) => number,
): Promise<DailyQuestStateV2> {
  const state = await getDailyQuestsV2();
  let changed = false;
  for (const q of state.quests) {
    const def = QUEST_POOL_V2.find((p) => p.id === q.id);
    if (!def) continue;
    const delta = matcher(q.id);
    if (delta > 0 && q.progress < def.target) {
      q.progress = Math.min(q.progress + delta, def.target);
      changed = true;
    }
  }
  if (changed) {
    await AsyncStorage.setItem(K_QUESTS_V2, JSON.stringify(state)).catch(
      () => {},
    );
  }
  return state;
}

// Per-user "seen modes" tracker for `try_new_mode`. Stored locally and
// updated lazily on lesson completion. The set lives outside the daily
// state so it persists across days.
const K_SEEN_MODES = "lafla.dailyquests.v2.seenModes";

async function loadSeenModes(): Promise<Set<string>> {
  try {
    const raw = await AsyncStorage.getItem(K_SEEN_MODES);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch {
    // ignore
  }
  return new Set();
}

async function saveSeenModes(set: Set<string>) {
  await AsyncStorage.setItem(K_SEEN_MODES, JSON.stringify([...set])).catch(
    () => {},
  );
}

// Track last-completion date for `daily_streak` (auto-progressed on first
// completion of the day).
const K_LAST_DAY = "lafla.dailyquests.v2.lastDay";

export interface RecordLessonArgsV2 {
  xpEarned: number;
  isRoleplay?: boolean;
  isPerfect?: boolean;
  hintFree?: boolean;
  skillCompleted?: boolean;
  modeId?: string;
  exercisesCount?: number;
  // Optional: count of audio plays during the lesson. Callers that don't
  // track this can omit it — listen_5_audio just won't progress.
  audioListens?: number;
  // Optional: count of phrases the user spoke aloud during the lesson.
  phrasesSpoken?: number;
}

export async function recordLessonCompletionV2(args: RecordLessonArgsV2) {
  // Side effects before progressing quests:
  //  - mark today as a completion day (satisfies daily_streak)
  //  - if modeId is provided, decide whether it counts as "new" before we
  //    update the seen set, then persist it
  const today = todayStr();
  await AsyncStorage.setItem(K_LAST_DAY, today).catch(() => {});

  let isNewMode = false;
  if (args.modeId) {
    const seen = await loadSeenModes();
    if (!seen.has(args.modeId)) {
      isNewMode = true;
      seen.add(args.modeId);
      await saveSeenModes(seen);
    }
  }

  return progressQuestV2((id) => {
    switch (id) {
      case "complete_lesson":
        return 1;
      case "earn_xp_50":
      case "earn_xp_100":
        return args.xpEarned;
      case "complete_roleplay":
        return args.isRoleplay ? 1 : 0;
      case "complete_3_lessons":
        return 1;
      case "complete_5_exercises":
        return args.exercisesCount ?? 0;
      case "speak_3_phrases":
        return args.phrasesSpoken ?? 0;
      case "finish_a_skill":
        return args.skillCompleted ? 1 : 0;
      case "try_new_mode":
        return isNewMode ? 1 : 0;
      case "daily_streak":
        return 1; // any completion today fulfills it
      case "perfect_score":
        return args.isPerfect ? 1 : 0;
      case "hint_free":
        return args.hintFree ? 1 : 0;
      case "listen_5_audio":
        return args.audioListens ?? 0;
      case "flirt_mode":
        return args.modeId === "flirt" ? 1 : 0;
      case "work_mode":
        return args.modeId === "work" ? 1 : 0;
      default:
        return 0;
    }
  });
}

export async function claimQuestV2(id: QuestIdV2): Promise<number | null> {
  const state = await getDailyQuestsV2();
  const q = state.quests.find((x) => x.id === id);
  const def = QUEST_POOL_V2.find((p) => p.id === id);
  if (!q || !def) return null;
  if (q.claimed) return null;
  if (q.progress < def.target) return null;
  q.claimed = true;
  await AsyncStorage.setItem(K_QUESTS_V2, JSON.stringify(state)).catch(
    () => {},
  );
  return def.xpReward;
}
