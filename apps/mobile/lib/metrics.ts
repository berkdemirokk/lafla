// Lafla — Adult metrics dashboard layer.
//
// Pivots the surface area from cartoony XP/streak gamification to
// Strava/Whoop-style "real metrics": hours of practice, vocabulary
// size, conversation practice time, CEFR sub-skill bars.
//
// Pure local read layer: no network, no LLM. Everything is derived
// from AsyncStorage state that the lessons + chat surfaces already
// write. Heuristics are kept conservative so numbers feel honest.

import AsyncStorage from "@react-native-async-storage/async-storage";
import type { CefrLevel } from "./cefr-level";
import { getCefrLevel } from "./cefr-level";
import { isArray, isObject, parseSafe } from "./json-safe";
import {
  getAllLessonState,
  getAllModeFluency,
  getAllSkillMastery,
  getLocalProfile,
  type LessonStateLocal,
} from "./local-progress";
import { SAMPLE_SCENES, type Scene } from "../data/scenes";
import { getPronHistory } from "./pronunciation-history";
import { getVocabBook } from "./vocab-book";
import { readHistory } from "./scene-history";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface UserMetrics {
  totalPracticeMinutes: number;
  activeVocabSize: number;
  coachChatMinutes: number;
  coachMessagesTotal: number;
  scenesCompleted: number;
  scenesTotal: number;
  pronunciationAvg: number; // 0-100
  consistencyDays7: number;
  consistencyDays30: number;
  skillBreakdown: {
    listening: CefrLevel;
    speaking: CefrLevel;
    pronunciation: CefrLevel;
    vocabulary: CefrLevel;
  };
}

export interface WeeklyReport {
  weekOf: string; // ISO date of Monday
  daysActive: number;
  totalMinutes: number;
  newVocabAdded: number;
  coachSessions: number;
  lessonsCompleted: number;
  pronunciationDelta: number; // vs previous week (-100..+100)
  highlight_tr: string;
}

// ---------------------------------------------------------------------------
// Storage keys (we read what other modules write, no new persistence here
// except a small derived cache).
// ---------------------------------------------------------------------------

const K_DAILY = "lafla.daily";
const K_FREECHAT_SESSION = "lafla.freechat.session";
const K_FREECHAT_DAILY_PREFIX = "lafla.freechat.dailyCount.";

// Heuristic averages — kept conservative.
const AVG_SECONDS_PER_COACH_MESSAGE = 30;
const FALLBACK_LESSON_MINUTES = 3;

// CEFR ordering / mapping helpers
const CEFR_ORDER: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

function cefrFromScore01(score: number): CefrLevel {
  // 0.00 - 0.15 → A1, then ~0.15 wide bands up to C2.
  if (score >= 0.85) return "C2";
  if (score >= 0.7) return "C1";
  if (score >= 0.55) return "B2";
  if (score >= 0.4) return "B1";
  if (score >= 0.25) return "A2";
  return "A1";
}

function clampLevel(level: CefrLevel): CefrLevel {
  return CEFR_ORDER.includes(level) ? level : "A1";
}

function bumpLevel(level: CefrLevel, delta: number): CefrLevel {
  const idx = CEFR_ORDER.indexOf(level);
  const next = Math.max(0, Math.min(CEFR_ORDER.length - 1, idx + delta));
  return CEFR_ORDER[next];
}

// ---------------------------------------------------------------------------
// Daily activity helpers
// ---------------------------------------------------------------------------

interface DailyEntry {
  xp: number;
  lessons: number;
}

async function readDaily(): Promise<Record<string, DailyEntry>> {
  try {
    const raw = await AsyncStorage.getItem(K_DAILY);
    // Validator: outer object. Per-entry types are tolerated by the
    // downstream `sumDaily` / `countActiveDaysWithin` which guard with
    // `entry?.xp > 0` style checks.
    return parseSafe<Record<string, DailyEntry>>(raw, {}, isObject, {
      source: "metrics.readDaily",
    });
  } catch {
    return {};
  }
}

function localDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function countActiveDaysWithin(
  daily: Record<string, DailyEntry>,
  windowDays: number,
): number {
  const now = new Date();
  let active = 0;
  for (let i = 0; i < windowDays; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    const key = localDateStr(d);
    const entry = daily[key];
    if (entry && (entry.xp > 0 || entry.lessons > 0)) active++;
  }
  return active;
}

// ---------------------------------------------------------------------------
// Coach / freechat helpers
// ---------------------------------------------------------------------------

async function readCoachMessages(): Promise<{ total: number; sessions: number }> {
  try {
    const raw = await AsyncStorage.getItem(K_FREECHAT_SESSION);
    const arr = parseSafe<unknown[]>(raw, [], isArray, {
      source: "metrics.readCoachMessages",
    });
    const total = arr.length;
    // One persisted session at a time, but if total > 0 we count it as ≥1.
    const sessions = total > 0 ? 1 : 0;
    return { total, sessions };
  } catch {
    return { total: 0, sessions: 0 };
  }
}

async function countFreechatSessions7d(): Promise<number> {
  // Each day with a non-zero freechat.dailyCount counts as one session.
  try {
    const now = new Date();
    let sessions = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const key = K_FREECHAT_DAILY_PREFIX + localDateStr(d);
      const raw = await AsyncStorage.getItem(key);
      if (raw && Number(raw) > 0) sessions++;
    }
    return sessions;
  } catch {
    return 0;
  }
}

// ---------------------------------------------------------------------------
// Evidence-backed pronunciation, activity, and vocabulary metrics
// ---------------------------------------------------------------------------

async function estimatePronunciationAvg(): Promise<number> {
  const scores = await getPronHistory();
  if (scores.length === 0) return 0;
  return Math.round(
    scores.reduce((sum, entry) => sum + entry.score, 0) / scores.length,
  );
}

export async function getActiveDaysLast7(): Promise<number> {
  return countActiveDaysWithin(await readDaily(), 7);
}

async function getActualVocabCount(): Promise<number> {
  const entries = await getVocabBook();
  return new Set(
    entries.map((entry) => entry.en.trim().toLocaleLowerCase("en")),
  ).size;
}

// ---------------------------------------------------------------------------
// Skill breakdown
// ---------------------------------------------------------------------------

async function computeSkillBreakdown(
  lessonStates: Record<string, LessonStateLocal>,
  pronAvg: number,
  fallbackLevel: CefrLevel,
): Promise<UserMetrics["skillBreakdown"]> {
  // Pull mastery and mode fluency to anchor each axis.
  const mastery = await getAllSkillMastery();
  const modes = await getAllModeFluency();

  // Average mastery score (overall talent baseline).
  const masteryScores = Object.values(mastery).map((m) => m.score);
  const avgMastery =
    masteryScores.length > 0
      ? masteryScores.reduce((a, b) => a + b, 0) / masteryScores.length
      : 0;

  // Mode-derived (post-2026-05-20 6-mode cut):
  //   speaking ≈ flirt, bar, daily, airport (conversational pressure modes)
  //   listening ≈ work, order (more receptive — meeting notes, menu callouts)
  const speakingModes = ["flirt", "bar", "daily", "airport"];
  const listeningModes = ["work", "order"];

  function modeScore(modeIds: string[]): number {
    const scores = modeIds
      .map((m) => modes[m]?.score ?? null)
      .filter((s): s is number => s !== null);
    if (scores.length === 0) return avgMastery;
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  }

  const speakingScore = modeScore(speakingModes);
  const listeningScore = modeScore(listeningModes);

  // Vocabulary breadth: completed lessons normalize against 30 lessons ≈ B1.
  const completedCount = Object.values(lessonStates).filter(
    (s) => s.completed_at,
  ).length;
  const vocabularyScore = Math.min(1, completedCount / 60);

  // Anchor everything around the user's self-reported / placement level so
  // a brand-new user doesn't read as A1 across the board.
  const anchor = clampLevel(fallbackLevel);

  const listening = bumpLevel(
    cefrFromScore01(listeningScore || avgMastery),
    listeningScore > avgMastery + 0.1 ? 1 : 0,
  );
  const speaking = cefrFromScore01(speakingScore || avgMastery);
  const pronunciation = cefrFromScore01(pronAvg / 100);
  const vocabulary = cefrFromScore01(vocabularyScore);

  // Soft-blend with anchor: never let a heuristic place the user > 2 bands
  // below their chosen level (avoids demoralising new sign-ups).
  function blend(estimated: CefrLevel): CefrLevel {
    const a = CEFR_ORDER.indexOf(anchor);
    const e = CEFR_ORDER.indexOf(estimated);
    const floor = Math.max(0, a - 2);
    return CEFR_ORDER[Math.max(e, floor)];
  }

  return {
    listening: blend(listening),
    speaking: blend(speaking),
    pronunciation: blend(pronunciation),
    vocabulary: blend(vocabulary),
  };
}

// ---------------------------------------------------------------------------
// Public — computeMetrics
// ---------------------------------------------------------------------------

function totalScenesForLevel(level: CefrLevel | null): number {
  // SAMPLE_SCENES is the shipped feed. If a scene has no cefrLevel it
  // counts as available at every level (which matches feed behaviour).
  if (!level) return SAMPLE_SCENES.length;
  return SAMPLE_SCENES.filter(
    (s: Scene) => !s.cefrLevel || s.cefrLevel === level,
  ).length;
}

export async function computeMetrics(): Promise<UserMetrics> {
  const [lessonStates, _profile, level, coach] = await Promise.all([
    getAllLessonState(),
    getLocalProfile(),
    getCefrLevel(),
    readCoachMessages(),
  ]);

  // Practice minutes — sum of completed-lesson scenes' durationMin when we
  // can match by lesson_id, else fall back to a flat per-lesson average.
  const sceneByLesson = new Map<string, Scene>();
  for (const scene of SAMPLE_SCENES) {
    sceneByLesson.set(scene.lessonId, scene);
  }

  const sceneHistory = await readHistory();
  let totalPracticeMinutes = 0;
  let scenesCompleted = 0;
  if (sceneHistory.length > 0) {
    for (const entry of sceneHistory) {
      totalPracticeMinutes +=
        sceneByLesson.get(entry.lessonId)?.durationMin ??
        FALLBACK_LESSON_MINUTES;
      scenesCompleted += 1;
    }
  } else {
    for (const state of Object.values(lessonStates)) {
      if (!state.completed_at) continue;
      const scene = sceneByLesson.get(state.lesson_id);
      totalPracticeMinutes += scene?.durationMin ?? FALLBACK_LESSON_MINUTES;
      if (scene) scenesCompleted++;
    }
  }

  // Coach chat minutes from message count × avg seconds.
  const coachChatMinutes = Math.round(
    (coach.total * AVG_SECONDS_PER_COACH_MESSAGE) / 60,
  );

  const activeVocabSize = await getActualVocabCount();
  const pronunciationAvg = await estimatePronunciationAvg();

  const daily = await readDaily();
  const consistencyDays7 = countActiveDaysWithin(daily, 7);
  const consistencyDays30 = countActiveDaysWithin(daily, 30);

  const anchor = clampLevel(level ?? "A2");
  const skillBreakdown = await computeSkillBreakdown(
    lessonStates,
    pronunciationAvg,
    anchor,
  );

  return {
    totalPracticeMinutes,
    activeVocabSize,
    coachChatMinutes,
    coachMessagesTotal: coach.total,
    scenesCompleted,
    scenesTotal: totalScenesForLevel(level),
    pronunciationAvg,
    consistencyDays7,
    consistencyDays30,
    skillBreakdown,
  };
}

// ---------------------------------------------------------------------------
// Public — getWeeklyReport
// ---------------------------------------------------------------------------

function startOfIsoWeek(d: Date): Date {
  const copy = new Date(d);
  const day = copy.getDay(); // Sun = 0
  const diff = day === 0 ? -6 : 1 - day; // back to Monday
  copy.setDate(copy.getDate() + diff);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function isoDate(d: Date): string {
  return localDateStr(d);
}

function sumDaily(
  daily: Record<string, DailyEntry>,
  start: Date,
  days: number,
): { minutes: number; lessons: number; activeDays: number } {
  let minutes = 0;
  let lessons = 0;
  let active = 0;
  for (let i = 0; i < days; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    if (d > new Date()) break;
    const entry = daily[isoDate(d)];
    if (entry) {
      // Approximate minutes from lessons (we don't store minutes/day directly).
      minutes += entry.lessons * FALLBACK_LESSON_MINUTES;
      lessons += entry.lessons;
      if (entry.lessons > 0 || entry.xp > 0) active++;
    }
  }
  return { minutes, lessons, activeDays: active };
}

export async function getWeeklyReport(): Promise<WeeklyReport> {
  const daily = await readDaily();
  const now = new Date();
  const thisMon = startOfIsoWeek(now);
  const lastMon = new Date(thisMon);
  lastMon.setDate(thisMon.getDate() - 7);

  const thisWeek = sumDaily(daily, thisMon, 7);
  const lastWeek = sumDaily(daily, lastMon, 7);

  const coachSessions = await countFreechatSessions7d();

  // New vocab: rough estimate — each lesson surfaces ~8 unique words.
  const nextMon = new Date(thisMon);
  nextMon.setDate(thisMon.getDate() + 7);
  const vocab = await getVocabBook();
  const newVocabAdded = vocab.filter((entry) => {
    const addedAt = new Date(entry.addedAt).getTime();
    return addedAt >= thisMon.getTime() && addedAt < nextMon.getTime();
  }).length;

  const pronunciation = await getPronHistory();
  const averageWithin = (start: Date, end: Date): number | null => {
    const scores = pronunciation.filter((entry) => {
      const at = new Date(entry.at).getTime();
      return at >= start.getTime() && at < end.getTime();
    });
    return scores.length
      ? scores.reduce((sum, entry) => sum + entry.score, 0) / scores.length
      : null;
  };
  const thisPronunciation = averageWithin(thisMon, nextMon);
  const lastPronunciation = averageWithin(lastMon, thisMon);
  const pronunciationDelta =
    thisPronunciation !== null && lastPronunciation !== null
      ? Math.round(thisPronunciation - lastPronunciation)
      : 0;

  const highlight_tr = buildWeeklyHighlight({
    daysActive: thisWeek.activeDays,
    totalMinutes: thisWeek.minutes,
    newVocabAdded,
    coachSessions,
    pronunciationDelta,
  });

  return {
    weekOf: isoDate(thisMon),
    daysActive: thisWeek.activeDays,
    totalMinutes: thisWeek.minutes,
    newVocabAdded,
    coachSessions,
    lessonsCompleted: thisWeek.lessons,
    pronunciationDelta,
    highlight_tr,
  };
}

function buildWeeklyHighlight(args: {
  daysActive: number;
  totalMinutes: number;
  newVocabAdded: number;
  coachSessions: number;
  pronunciationDelta: number;
}): string {
  if (args.daysActive === 0) {
    return "Bu hafta henüz pratik yok — bir sahneye başla, ısın.";
  }
  if (args.pronunciationDelta >= 5) {
    return `Telaffuz skoru ${args.pronunciationDelta} puan yükseldi.`;
  }
  if (args.coachSessions >= 3) {
    return `Konuşma koçuyla ${args.coachSessions} oturum — sohbet ritmi güçlü.`;
  }
  if (args.newVocabAdded >= 40) {
    return `${args.newVocabAdded} yeni kelime ile aktif kelime hazinen büyüdü.`;
  }
  if (args.daysActive >= 5) {
    return `${args.daysActive} gün aktif — tutarlılık üst sıralarda.`;
  }
  return `${args.totalMinutes} dk pratik, ${args.daysActive} aktif gün.`;
}

// ---------------------------------------------------------------------------
// CEFR helpers (also used by MetricBar)
// ---------------------------------------------------------------------------

export function cefrFillPercent(level: CefrLevel): number {
  switch (level) {
    case "A1":
      return 17;
    case "A2":
      return 33;
    case "B1":
      return 50;
    case "B2":
      return 67;
    case "C1":
      return 83;
    case "C2":
      return 100;
    default:
      return 0;
  }
}

export function formatPracticeMinutes(total: number): string {
  if (total <= 0) return "0 dakika";
  const hours = Math.floor(total / 60);
  const minutes = total % 60;
  if (hours === 0) return `${minutes} dakika`;
  if (minutes === 0) return `${hours} saat`;
  return `${hours} saat ${minutes} dakika`;
}

export function formatVocabCount(n: number): string {
  // Turkish thousand separator: 1.247
  return n.toLocaleString("tr-TR");
}
