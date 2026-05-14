// Lafla — Goal-based program system (curriculum engine).
//
// Picks a real-world goal at onboarding (job interview, travel, IELTS, etc.)
// and produces a personalized 3–12 week daily plan ("Bugünün Planı").
//
// All data is local: state lives in AsyncStorage under `lafla.program.state`.
// Curriculum is generated deterministically from the lesson catalog — no LLM
// at runtime. The same `currentDay` always yields the same plan, which keeps
// the experience stable and offline-friendly.
//
// Lessons are drawn from data/lessons.ts. We bias selection toward the
// program's `targetModes` so the user always sees content aligned to their goal.

import AsyncStorage from "@react-native-async-storage/async-storage";
import { allLessons, type BundledLesson } from "../data/lessons";
import type { CefrLevel } from "../data/scenes";
import { trackEvent } from "./analytics";
import { parseSafe } from "./json-safe";

const K_PROGRAM_STATE = "lafla.program.state";

// ============================================================
// PROGRAM DEFINITIONS
// ============================================================

export type ProgramId =
  | "job-interview"
  | "travel-usuk"
  | "ielts-speaking"
  | "toefl-speaking"
  | "yds-yokdil"
  | "remote-work"
  | "academic-abroad"
  | "general-fluency";

export interface ProgramDef {
  id: ProgramId;
  title: string;        // Turkish: "İş Mülakatı Hazırlık"
  description: string;  // Turkish
  emoji: string;
  durationWeeks: number;     // 3, 4, 6, 8, 12
  recommendedLevel: CefrLevel;
  targetModes: string[];     // which Scene.mode values to draw content from
  weekly_targets: {
    lessons: number;
    listeningMinutes: number;
    coachSessions: number;
  };
}

export const PROGRAMS: ProgramDef[] = [
  {
    id: "job-interview",
    title: "İş Mülakatı Hazırlık",
    description:
      "İngilizce mülakata hazırlan. Behavioral, technical, salary negotiation — 4 haftada tam paket.",
    emoji: "🎯",
    durationWeeks: 4,
    recommendedLevel: "B1",
    targetModes: ["career", "work"],
    weekly_targets: { lessons: 8, listeningMinutes: 30, coachSessions: 3 },
  },
  {
    id: "travel-usuk",
    title: "ABD / UK Seyahat",
    description:
      "Havaalanından otele, restorandan acil duruma — 3 haftada tatilde donmamak için tam kapsama.",
    emoji: "✈️",
    durationWeeks: 3,
    recommendedLevel: "A2",
    targetModes: ["travel", "daily", "order"],
    weekly_targets: { lessons: 10, listeningMinutes: 20, coachSessions: 2 },
  },
  {
    id: "ielts-speaking",
    title: "IELTS Speaking",
    description:
      "IELTS Speaking 7.0+ hedefi. Part 1-2-3, fluency, lexical resource — 6 haftalık disiplinli plan.",
    emoji: "📘",
    durationWeeks: 6,
    recommendedLevel: "B2",
    targetModes: ["testprep", "academic"],
    weekly_targets: { lessons: 7, listeningMinutes: 45, coachSessions: 4 },
  },
  {
    id: "toefl-speaking",
    title: "TOEFL Speaking",
    description:
      "TOEFL iBT Speaking 24+ hedefi. Independent + Integrated taskları — 6 haftada ölçülü ilerleme.",
    emoji: "🎓",
    durationWeeks: 6,
    recommendedLevel: "B2",
    targetModes: ["testprep", "academic"],
    weekly_targets: { lessons: 7, listeningMinutes: 45, coachSessions: 4 },
  },
  {
    id: "yds-yokdil",
    title: "YDS / YÖKDİL",
    description:
      "Akademisyenler için. Reading-heavy, vocab + grammar yoğun — 8 haftalık sistematik hazırlık.",
    emoji: "📚",
    durationWeeks: 8,
    recommendedLevel: "B2",
    targetModes: ["testprep", "academic"],
    weekly_targets: { lessons: 8, listeningMinutes: 20, coachSessions: 2 },
  },
  {
    id: "remote-work",
    title: "Uzaktan Çalışma İngilizcesi",
    description:
      "Slack, email, sync-async toplantı, code review. 6 haftada uluslararası takıma uyumlu hale gel.",
    emoji: "💼",
    durationWeeks: 6,
    recommendedLevel: "B1",
    targetModes: ["work", "career"],
    weekly_targets: { lessons: 8, listeningMinutes: 25, coachSessions: 3 },
  },
  {
    id: "academic-abroad",
    title: "Yurt Dışı Akademik",
    description:
      "Yüksek lisans / doktora için. Sınıf tartışması, sunum, danışman görüşmesi — 8 haftada hazır.",
    emoji: "🌍",
    durationWeeks: 8,
    recommendedLevel: "B2",
    targetModes: ["academic", "testprep"],
    weekly_targets: { lessons: 7, listeningMinutes: 40, coachSessions: 4 },
  },
  {
    id: "general-fluency",
    title: "Genel Akıcılık",
    description:
      "Belirli bir hedefim yok ama akıcı konuşmak istiyorum. 12 haftalık dengeli, kapsamlı yol.",
    emoji: "🌱",
    durationWeeks: 12,
    recommendedLevel: "B1",
    targetModes: ["daily", "work", "order", "banter"],
    weekly_targets: { lessons: 6, listeningMinutes: 20, coachSessions: 2 },
  },
];

export function getProgramDef(id: ProgramId): ProgramDef | undefined {
  return PROGRAMS.find((p) => p.id === id);
}

// ============================================================
// PROGRAM STATE (AsyncStorage)
// ============================================================

export interface ProgramState {
  id: ProgramId;
  startedAt: string;       // ISO
  goalDate?: string;       // ISO — user's target date (optional)
  currentDay: number;      // 1..durationWeeks*7
  completedLessons: string[];
  pausedAt?: string;       // ISO if paused
}

export async function getActiveProgram(): Promise<ProgramState | null> {
  try {
    const raw = await AsyncStorage.getItem(K_PROGRAM_STATE);
    // Validator enforces the load-bearing fields (id + currentDay) so a
    // corrupt blob doesn't silently return an unusable ProgramState that
    // would crash downstream curriculum generators when they hit
    // `state.currentDay` undefined.
    const parsed = parseSafe<ProgramState | null>(
      raw,
      null,
      (x): x is ProgramState =>
        x !== null &&
        typeof x === "object" &&
        !Array.isArray(x) &&
        typeof (x as { id?: unknown }).id === "string" &&
        typeof (x as { currentDay?: unknown }).currentDay === "number",
      { source: "programs.getActiveProgram" },
    );
    return parsed && parsed.id ? parsed : null;
  } catch {
    return null;
  }
}

async function writeProgramState(state: ProgramState | null) {
  try {
    if (state === null) {
      await AsyncStorage.removeItem(K_PROGRAM_STATE);
    } else {
      await AsyncStorage.setItem(K_PROGRAM_STATE, JSON.stringify(state));
    }
  } catch {
    // ignore
  }
}

export async function startProgram(
  id: ProgramId,
  goalDate?: string,
): Promise<void> {
  const def = getProgramDef(id);
  if (!def) return;
  const state: ProgramState = {
    id,
    startedAt: new Date().toISOString(),
    goalDate,
    currentDay: 1,
    completedLessons: [],
  };
  await writeProgramState(state);
  void trackEvent("program_started", {
    programId: id,
    durationWeeks: def.durationWeeks,
    hasGoalDate: !!goalDate,
  }).catch(() => {});
}

export async function recordLessonComplete(lessonId: string): Promise<void> {
  const state = await getActiveProgram();
  if (!state) return;
  if (state.completedLessons.includes(lessonId)) return;
  state.completedLessons.push(lessonId);

  // Advance the day if today's plan is fully satisfied. We compute a fresh
  // plan and check whether every required lesson item has been done. Coach /
  // listening / review items are advisory — we don't block on them.
  const def = getProgramDef(state.id);
  if (def) {
    const plan = buildDailyPlan(def, state.currentDay, state.completedLessons);
    const lessonItems = plan.items.filter((it) => it.type === "lesson");
    const allLessonsDone =
      lessonItems.length > 0 && lessonItems.every((it) => it.completed);
    const totalDays = def.durationWeeks * 7;
    if (allLessonsDone && state.currentDay < totalDays) {
      state.currentDay = state.currentDay + 1;
    }
  }

  await writeProgramState(state);
}

export async function pauseProgram(): Promise<void> {
  const state = await getActiveProgram();
  if (!state) return;
  state.pausedAt = new Date().toISOString();
  await writeProgramState(state);
}

export async function resumeProgram(): Promise<void> {
  const state = await getActiveProgram();
  if (!state) return;
  delete state.pausedAt;
  await writeProgramState(state);
}

export async function endProgram(): Promise<void> {
  await writeProgramState(null);
}

// ============================================================
// CURRICULUM GENERATION
// ============================================================

export interface DailyPlan {
  dayNumber: number;
  totalDays: number;
  focus_tr: string;
  items: DailyPlanItem[];
  estimatedMinutes: number;
}

export interface DailyPlanItem {
  type: "lesson" | "listening" | "coach" | "review" | "reading";
  id: string;
  title_tr: string;
  estimatedMinutes: number;
  completed: boolean;
}

// Map mode → matching skill_id prefixes. Some programs target modes that
// don't directly exist as Scene.mode values yet (career / academic / travel /
// testprep). We expand those into the closest existing skill clusters so the
// curriculum draws from real content.
const MODE_TO_SKILL_PREFIXES: Record<string, string[]> = {
  order: ["order."],
  work: ["work."],
  daily: ["daily."],
  flirt: ["flirt."],
  banter: ["banter."],
  // Synthetic groupings — map onto existing skills.
  career: ["work.interview", "work.review", "work.coffeechat", "work.networking", "work.promotionask"],
  travel: ["daily.airport", "daily.hotel", "daily.directions", "daily.transport", "daily.taxi", "order."],
  academic: ["work.meeting", "work.email", "work.codereview", "banter.opinions"],
  professional: ["work."],
  personal: ["daily.", "banter."],
  testprep: ["work.interview", "work.meeting", "banter.opinions", "work.email"],
};

function lessonsForProgram(def: ProgramDef): BundledLesson[] {
  const prefixes = new Set<string>();
  for (const mode of def.targetModes) {
    const ps = MODE_TO_SKILL_PREFIXES[mode] ?? [];
    for (const p of ps) prefixes.add(p);
  }
  if (prefixes.size === 0) return [...allLessons];
  return allLessons.filter((l) =>
    [...prefixes].some((p) => l.skill_id === p.replace(/\.$/, "") || l.skill_id.startsWith(p)),
  );
}

// Daily focus copy — short, adult, Turkish-first. Keyed by program + cycle.
const FOCUS_THEMES: Record<ProgramId, string[]> = {
  "job-interview": [
    "Mülakatın açılışı — 'Tell me about yourself'",
    "Davranışsal soru: STAR yöntemi",
    "Güçlü ve zayıf yön — savunmasız olmadan",
    "Maaş pazarlığı diline geçiş",
    "Technical / case soru cevaplama",
    "Soru sorma sanatı — sen de mülakat yaparsın",
    "Mock interview gün — coach ile simülasyon",
  ],
  "travel-usuk": [
    "Havaalanı: check-in, boarding, transit",
    "Otel: check-in, problem bildirme",
    "Restoran ve kafe siparişi",
    "Yön tarifi alma ve verme",
    "Toplu ulaşım — tren, metro, otobüs",
    "Acil durum İngilizcesi",
    "Small talk: yerel ile tanışma",
  ],
  "ielts-speaking": [
    "Part 1: kişisel sorular",
    "Part 2: 2 dakikalık monolog (cue card)",
    "Part 3: soyut tartışma",
    "Lexical resource — eşanlamlı zenginleştirme",
    "Bağlaç ve discourse markers",
    "Telaffuz ve tonlama netliği",
    "Mock test — full Speaking simülasyonu",
  ],
  "toefl-speaking": [
    "Task 1: bağımsız konuşma",
    "Task 2: oku-dinle-konuş (kampüs)",
    "Task 3: oku-dinle-konuş (akademik)",
    "Task 4: dinle-konuş (ders)",
    "Note-taking pratiği",
    "Zaman yönetimi: 15s + 45s yapı",
    "Mock test günü",
  ],
  "yds-yokdil": [
    "Reading comprehension — ana fikir",
    "Vocab in context — kelime hazinesi",
    "Cloze test — bağlaç ve preposition",
    "Cümle tamamlama",
    "Paragraph completion",
    "Çeviri: TR↔EN",
    "Practice test — zamanlı çözüm",
  ],
  "remote-work": [
    "Slack mesajlaşma adabı",
    "Async standup yazma",
    "Toplantıda söz alma ve interrupt",
    "Code review İngilizcesi",
    "Email tonu: kibar ama net",
    "Disagreement: kibarca itiraz",
    "1:1 ve performans görüşmesi",
  ],
  "academic-abroad": [
    "Sınıf tartışmasına katılım",
    "Office hours / danışman görüşmesi",
    "Sunum / presentation dili",
    "Email: profesör, advisor",
    "Akademik writing → speaking köprüsü",
    "Networking conference ortamı",
    "IELTS / TOEFL hazırlık — başvuru için",
  ],
  "general-fluency": [
    "Daily small talk",
    "Restoran ve kafe pratiği",
    "Yön tarifi ve ulaşım",
    "Banter — espri ve atışma",
    "İş ortamı temel diyalog",
    "Telefon ve customer service",
    "Karma roleplay günü",
  ],
};

// Deterministic plan builder. Same (program, day, completed-set) → same plan.
// We use simple modular arithmetic over the candidate lesson pool so the user
// progresses through content without large gaps.
function buildDailyPlan(
  def: ProgramDef,
  day: number,
  completed: string[],
): DailyPlan {
  const totalDays = def.durationWeeks * 7;
  const pool = lessonsForProgram(def);
  const completedSet = new Set(completed);

  // Pick today's focus from the weekly theme cycle.
  const themes = FOCUS_THEMES[def.id];
  const focus = themes[(day - 1) % themes.length] ?? "Bugünün odağı";

  // Daily lesson count derived from weekly target.
  const lessonsPerDay = Math.max(
    1,
    Math.round(def.weekly_targets.lessons / 7),
  );

  // Pick lessons by stride — keeps the sequence ordered yet varied.
  const items: DailyPlanItem[] = [];
  const dayIndex = day - 1;
  for (let i = 0; i < lessonsPerDay && pool.length > 0; i++) {
    const offset = (dayIndex * lessonsPerDay + i) % pool.length;
    const lesson = pool[offset]!;
    items.push({
      type: "lesson",
      id: lesson.id,
      title_tr: lesson.title,
      estimatedMinutes: lesson.estimated_minutes ?? 5,
      completed: completedSet.has(lesson.id),
    });
  }

  // Listening item every other day (alternates with reading where relevant).
  const wantsListening = def.weekly_targets.listeningMinutes > 0;
  if (wantsListening && day % 2 === 1) {
    items.push({
      type: "listening",
      id: `listening.${def.id}.${day}`,
      title_tr: "Dinleme pratiği (5 dk)",
      estimatedMinutes: Math.min(
        10,
        Math.max(5, Math.round(def.weekly_targets.listeningMinutes / 7)),
      ),
      completed: false,
    });
  }

  // Coach session — paced to weekly target. e.g. 3 sessions/week → days 2, 4, 6.
  const coachPerWeek = def.weekly_targets.coachSessions;
  if (coachPerWeek > 0) {
    const stride = Math.max(1, Math.round(7 / coachPerWeek));
    if (day % stride === 0) {
      items.push({
        type: "coach",
        id: `coach.${def.id}.${day}`,
        title_tr: "Coach ile pratik (10 dk)",
        estimatedMinutes: 10,
        completed: false,
      });
    }
  }

  // Review every 7th day in the program — consolidate recent work.
  if (day > 6 && day % 7 === 0) {
    items.push({
      type: "review",
      id: `review.${def.id}.${day}`,
      title_tr: "Haftalık tekrar",
      estimatedMinutes: 8,
      completed: false,
    });
  }

  // Reading for exam-heavy programs (yds/ielts/toefl).
  if (
    (def.id === "yds-yokdil" ||
      def.id === "ielts-speaking" ||
      def.id === "toefl-speaking") &&
    day % 3 === 0
  ) {
    items.push({
      type: "reading",
      id: `reading.${def.id}.${day}`,
      title_tr: "Akademik okuma parçası",
      estimatedMinutes: 7,
      completed: false,
    });
  }

  const estimatedMinutes = items.reduce(
    (sum, it) => sum + it.estimatedMinutes,
    0,
  );

  return {
    dayNumber: day,
    totalDays,
    focus_tr: focus,
    items,
    estimatedMinutes,
  };
}

export async function getTodaysPlan(): Promise<DailyPlan | null> {
  const state = await getActiveProgram();
  if (!state) return null;
  const def = getProgramDef(state.id);
  if (!def) return null;
  return buildDailyPlan(def, state.currentDay, state.completedLessons);
}
