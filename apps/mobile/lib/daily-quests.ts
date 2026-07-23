// Lafla — Daily quest system. Local-only, resets every midnight.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { parseSafe, isObject } from "./json-safe";

const K_QUESTS = "lafla.dailyquests";

export type QuestId =
  | "complete_lesson"
  | "earn_xp_50"
  | "complete_roleplay"
  | "earn_xp_100"
  | "complete_3_lessons";

export interface QuestDef {
  id: QuestId;
  emoji: string;
  title: string;
  target: number;
  unit: string;
  xpReward: number;
}

export const QUEST_POOL: QuestDef[] = [
  {
    id: "complete_lesson",
    emoji: "📚",
    title: "1 ders tamamla",
    target: 1,
    unit: "ders",
    xpReward: 20,
  },
  {
    id: "earn_xp_50",
    emoji: "⚡",
    title: "50 XP kazan",
    target: 50,
    unit: "XP",
    xpReward: 25,
  },
  {
    id: "complete_roleplay",
    emoji: "💬",
    title: "1 roleplay tamamla",
    target: 1,
    unit: "roleplay",
    xpReward: 30,
  },
  {
    id: "complete_3_lessons",
    emoji: "🏃",
    title: "3 ders tamamla",
    target: 3,
    unit: "ders",
    xpReward: 50,
  },
  {
    id: "earn_xp_100",
    emoji: "🔥",
    title: "100 XP kazan",
    target: 100,
    unit: "XP",
    xpReward: 40,
  },
];

export interface DailyQuestState {
  date: string; // YYYY-MM-DD
  quests: Array<{
    id: QuestId;
    progress: number;
    claimed: boolean;
  }>;
}

// BUG-4 FIX: Use UTC date (aligned with free-tier.ts + local-progress.ts)
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function pickDailyQuests(seed: string): QuestId[] {
  // Deterministic-ish pick — 3 quests per day, varies by date
  const hash = [...seed].reduce((s, c) => s + c.charCodeAt(0), 0);
  const ids = QUEST_POOL.map((q) => q.id);
  const picked: QuestId[] = [];
  for (let i = 0; i < 3; i++) {
    picked.push(ids[(hash + i * 7) % ids.length]!);
  }
  return [...new Set(picked)].slice(0, 3);
}

function isDailyQuestState(value: unknown): value is DailyQuestState {
  if (!isObject(value) || typeof value.date !== "string") return false;
  if (!Array.isArray(value.quests) || value.quests.length === 0) return false;
  const seen = new Set<string>();
  return value.quests.every((quest) => {
    if (!isObject(quest)) return false;
    const validId = QUEST_POOL.some((definition) => definition.id === quest.id);
    if (!validId || seen.has(String(quest.id))) return false;
    seen.add(String(quest.id));
    return (
      typeof quest.progress === "number" &&
      Number.isFinite(quest.progress) &&
      quest.progress >= 0 &&
      typeof quest.claimed === "boolean"
    );
  });
}

let questMutationChain: Promise<unknown> = Promise.resolve();

function serializeQuestMutation<T>(work: () => Promise<T>): Promise<T> {
  const job = questMutationChain.then(work, work);
  questMutationChain = job.catch(() => undefined);
  return job;
}

async function getDailyQuestsInner(): Promise<DailyQuestState> {
  const today = todayStr();
  // 2026-05-25 (B-EDGE-5) — parseSafe ile defensive JSON; corrupte storage
  // crash etmesin (try/catch yuttuğunda yine fresh üretir ama parseSafe
  // ile Sentry breadcrumb da bırakırız).
  const raw = await AsyncStorage.getItem(K_QUESTS);
  const parsed = parseSafe<DailyQuestState | null>(
    raw,
    null,
    (value) => value === null || isDailyQuestState(value),
    { source: "daily-quests.getDailyQuests" },
  );
  if (parsed && parsed.date === today) {
    return parsed;
  }

  // Generate today's quests
  const ids = pickDailyQuests(today);
  const fresh: DailyQuestState = {
    date: today,
    quests: ids.map((id) => ({ id, progress: 0, claimed: false })),
  };
  await AsyncStorage.setItem(K_QUESTS, JSON.stringify(fresh));
  return fresh;
}

export function getDailyQuests(): Promise<DailyQuestState> {
  return serializeQuestMutation(getDailyQuestsInner);
}

export async function progressQuest(
  matcher: (id: QuestId) => number,
): Promise<DailyQuestState> {
  return serializeQuestMutation(async () => {
    const state = await getDailyQuestsInner();
    let changed = false;
    for (const q of state.quests) {
      const def = QUEST_POOL.find((p) => p.id === q.id);
      if (!def) continue;
      const delta = matcher(q.id);
      if (Number.isFinite(delta) && delta > 0 && q.progress < def.target) {
        q.progress = Math.min(q.progress + delta, def.target);
        changed = true;
      }
    }
    if (changed) {
      await AsyncStorage.setItem(K_QUESTS, JSON.stringify(state));
    }
    return state;
  });
}

export async function recordLessonCompletion(args: {
  xpEarned: number;
  isRoleplay?: boolean;
}) {
  return progressQuest((id) => {
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
      default:
        return 0;
    }
  });
}

export async function claimQuest(id: QuestId): Promise<number | null> {
  return serializeQuestMutation(async () => {
    const state = await getDailyQuestsInner();
    const q = state.quests.find((quest) => quest.id === id);
    const def = QUEST_POOL.find((definition) => definition.id === id);
    if (!q || !def || q.claimed || q.progress < def.target) return null;
    q.claimed = true;
    // Reward is returned only after the claim is durably persisted. This
    // prevents retries or double taps from minting the same XP repeatedly.
    await AsyncStorage.setItem(K_QUESTS, JSON.stringify(state));
    return def.xpReward;
  });
}
