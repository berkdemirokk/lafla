// Lafla — Daily quest system. Local-only, resets every midnight.

import AsyncStorage from "@react-native-async-storage/async-storage";

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

function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
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

export async function getDailyQuests(): Promise<DailyQuestState> {
  const today = todayStr();
  try {
    const raw = await AsyncStorage.getItem(K_QUESTS);
    if (raw) {
      const parsed = JSON.parse(raw) as DailyQuestState;
      if (parsed.date === today) return parsed;
    }
  } catch {
    // fall through
  }

  // Generate today's quests
  const ids = pickDailyQuests(today);
  const fresh: DailyQuestState = {
    date: today,
    quests: ids.map((id) => ({ id, progress: 0, claimed: false })),
  };
  await AsyncStorage.setItem(K_QUESTS, JSON.stringify(fresh)).catch(() => {});
  return fresh;
}

export async function progressQuest(
  matcher: (id: QuestId) => number,
): Promise<DailyQuestState> {
  const state = await getDailyQuests();
  let changed = false;
  for (const q of state.quests) {
    // QUEST_POOL'da olmayan quest id'leri (eski versiyondan stored state)
    // sessizce atla — `find()!` non-null assert'i crash bombasıydı.
    const def = QUEST_POOL.find((p) => p.id === q.id);
    if (!def) continue;
    const delta = matcher(q.id);
    if (delta > 0 && q.progress < def.target) {
      q.progress = Math.min(q.progress + delta, def.target);
      changed = true;
    }
  }
  if (changed) {
    await AsyncStorage.setItem(K_QUESTS, JSON.stringify(state)).catch(() => {});
  }
  return state;
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
  const state = await getDailyQuests();
  const q = state.quests.find((q) => q.id === id);
  const def = QUEST_POOL.find((p) => p.id === id);
  if (!q || !def) return null;
  if (q.claimed) return null;
  if (q.progress < def.target) return null;
  q.claimed = true;
  await AsyncStorage.setItem(K_QUESTS, JSON.stringify(state)).catch(() => {});
  return def.xpReward;
}
