// Lafla — Achievement system. Local state only (badges are universal).

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocalProfile, getAllLessonState } from "./local-progress";

export type AchievementId =
  | "first_lesson"
  | "streak_3"
  | "streak_7"
  | "streak_30"
  | "xp_100"
  | "xp_500"
  | "xp_1000"
  | "lessons_5"
  | "lessons_25"
  | "lessons_50"
  | "first_signin";

export interface AchievementDef {
  id: AchievementId;
  emoji: string;
  title: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: "first_lesson",
    emoji: "🎓",
    title: "İlk Adım",
    description: "İlk dersini tamamladın.",
  },
  {
    id: "lessons_5",
    emoji: "📚",
    title: "Beşinci Çay",
    description: "5 ders bitirdin.",
  },
  {
    id: "lessons_25",
    emoji: "📘",
    title: "Çeyrek Yüz",
    description: "25 ders bitirdin.",
  },
  {
    id: "lessons_50",
    emoji: "🏆",
    title: "Yarıyı Geçtin",
    description: "50 ders bitirdin.",
  },
  {
    id: "streak_3",
    emoji: "🔥",
    title: "Sıcak Başlangıç",
    description: "3 gün üst üste pratik.",
  },
  {
    id: "streak_7",
    emoji: "⚡",
    title: "Bir Hafta",
    description: "7 gün üst üste pratik.",
  },
  {
    id: "streak_30",
    emoji: "💎",
    title: "Bir Ay Aralıksız",
    description: "30 gün üst üste pratik.",
  },
  {
    id: "xp_100",
    emoji: "💯",
    title: "İlk Yüz",
    description: "100 XP kazandın.",
  },
  {
    id: "xp_500",
    emoji: "🌟",
    title: "Beş Yüz Yıldız",
    description: "500 XP kazandın.",
  },
  {
    id: "xp_1000",
    emoji: "🚀",
    title: "Roket Hızı",
    description: "1000 XP kazandın.",
  },
  {
    id: "first_signin",
    emoji: "☁️",
    title: "Bulutta Yaşa",
    description: "İlk kez hesap açtın, ilerlemen güvende.",
  },
];

const K_EARNED = "lafla.achievements";

async function getEarnedSet(): Promise<Set<AchievementId>> {
  try {
    const raw = await AsyncStorage.getItem(K_EARNED);
    return raw ? new Set(JSON.parse(raw) as AchievementId[]) : new Set();
  } catch {
    return new Set();
  }
}

async function setEarnedSet(set: Set<AchievementId>) {
  await AsyncStorage.setItem(K_EARNED, JSON.stringify([...set])).catch(() => {});
}

export async function getEarnedAchievements(): Promise<AchievementId[]> {
  return [...(await getEarnedSet())];
}

// Returns NEW achievements unlocked by this evaluation.
export async function evaluateAchievements(): Promise<AchievementDef[]> {
  const earned = await getEarnedSet();
  const profile = await getLocalProfile();
  const lessons = await getAllLessonState();
  const completedCount = Object.values(lessons).filter(
    (l) => l.completed_at !== null,
  ).length;

  const checks: Array<[AchievementId, boolean]> = [
    ["first_lesson", completedCount >= 1],
    ["lessons_5", completedCount >= 5],
    ["lessons_25", completedCount >= 25],
    ["lessons_50", completedCount >= 50],
    ["streak_3", profile.current_streak >= 3],
    ["streak_7", profile.current_streak >= 7],
    ["streak_30", profile.current_streak >= 30],
    ["xp_100", profile.total_xp >= 100],
    ["xp_500", profile.total_xp >= 500],
    ["xp_1000", profile.total_xp >= 1000],
  ];

  const newlyEarned: AchievementDef[] = [];
  for (const [id, condition] of checks) {
    if (condition && !earned.has(id)) {
      earned.add(id);
      const def = ACHIEVEMENTS.find((a) => a.id === id);
      if (def) newlyEarned.push(def);
    }
  }

  if (newlyEarned.length > 0) {
    await setEarnedSet(earned);
  }
  return newlyEarned;
}

export async function awardSigninAchievement() {
  const earned = await getEarnedSet();
  if (earned.has("first_signin")) return null;
  earned.add("first_signin");
  await setEarnedSet(earned);
  return ACHIEVEMENTS.find((a) => a.id === "first_signin") ?? null;
}
