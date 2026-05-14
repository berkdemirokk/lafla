// Lafla — Smart notification picker.
//
// Reads the user's current local state (coach memory, CEFR level, streak,
// last-activity timestamps, SRS due count, mistake patterns) and decides
// which notification template best fits the moment. Returns the rendered
// template + filled variables, OR null if every candidate is on cooldown
// or the user state doesn't justify a nudge.
//
// Design:
//   - The picker is a flat priority list, not a state machine. Each
//     template has an eligibility predicate; we walk the list in priority
//     order and return the first eligible template that is also off
//     cooldown.
//   - Cooldowns are persisted per-template id in `lafla.notif.lastFired`,
//     a single JSON blob (id -> ISO timestamp). Tiny and atomic.
//   - All reads are best-effort; any storage error falls through to null.
//     Notifications are a "nice to have", never block another code path.
//
// Public surface:
//   pickBestNotification() -> { template, vars } | null
//   markFired(id)          -> record a fired timestamp (call after dispatch)
//   resetCooldowns()       -> dev/test helper

import AsyncStorage from "@react-native-async-storage/async-storage";

import { getCoachState, type CoachState } from "./coach";
import { getCefrLevel, type CefrLevel } from "./cefr-level";
import { getLocalProfile } from "./local-progress";
import { getDueCount } from "./srs";
import { getTopMistakes } from "./mistake-tracker";
import { getPattern } from "./mistake-patterns";
import {
  NOTIFICATION_TEMPLATES,
  type NotificationTemplate,
  type NotificationTemplateId,
} from "../data/notification-templates";

// ---------------------------------------------------------------------------
// Cooldown persistence
// ---------------------------------------------------------------------------

const K_LAST_FIRED = "lafla.notif.lastFired";

type LastFiredMap = Partial<Record<NotificationTemplateId, string>>;

async function readLastFired(): Promise<LastFiredMap> {
  try {
    const raw = await AsyncStorage.getItem(K_LAST_FIRED);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed && typeof parsed === "object") return parsed as LastFiredMap;
    return {};
  } catch {
    return {};
  }
}

async function writeLastFired(map: LastFiredMap): Promise<void> {
  try {
    await AsyncStorage.setItem(K_LAST_FIRED, JSON.stringify(map));
  } catch {
    // ignore — cooldown tracking is best-effort
  }
}

export async function markFired(id: NotificationTemplateId): Promise<void> {
  const map = await readLastFired();
  map[id] = new Date().toISOString();
  await writeLastFired(map);
}

export async function resetCooldowns(): Promise<void> {
  await AsyncStorage.removeItem(K_LAST_FIRED).catch(() => {});
}

function hoursSinceIso(iso: string | undefined | null): number {
  if (!iso) return Number.POSITIVE_INFINITY;
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return Number.POSITIVE_INFINITY;
  return (Date.now() - t) / 36e5;
}

function isOffCooldown(
  template: NotificationTemplate,
  lastFired: LastFiredMap,
): boolean {
  if (template.cooldownHours <= 0) return true;
  return hoursSinceIso(lastFired[template.id]) >= template.cooldownHours;
}

// ---------------------------------------------------------------------------
// Internal state snapshot — one read per picker invocation.
// ---------------------------------------------------------------------------

interface UserSnapshot {
  coach: CoachState;
  level: CefrLevel | null;
  streak: number;
  lastLessonAt: string | null;
  hoursSinceLastLesson: number;
  hoursSinceLastInteraction: number;
  hourOfDay: number;
  reviewDueCount: number;
  topWeakness: string | null;
}

async function snapshot(): Promise<UserSnapshot> {
  const [coach, level, profile, reviewDueCount, weaknesses] = await Promise.all([
    getCoachState(),
    getCefrLevel(),
    getLocalProfile(),
    getDueCount().catch(() => 0),
    getTopMistakes(1).catch(() => []),
  ]);

  // TrackedMistake stores a patternId; the human-readable Turkish description
  // lives on the pattern catalog. Resolve here so callers don't repeat the
  // lookup. Fall back to coach.weaknesses[0] if the mistake tracker is empty
  // but the coach memory has something.
  let topWeakness: string | null = null;
  const top = weaknesses[0];
  if (top) {
    const pattern = getPattern(top.patternId);
    if (pattern) topWeakness = pattern.description_tr;
  }
  if (!topWeakness && coach.weaknesses[0]) {
    topWeakness = coach.weaknesses[0];
  }

  return {
    coach,
    level,
    streak: profile.current_streak,
    lastLessonAt: profile.last_lesson_at,
    hoursSinceLastLesson: hoursSinceIso(profile.last_lesson_at),
    hoursSinceLastInteraction: hoursSinceIso(coach.lastInteractionAt),
    hourOfDay: new Date().getHours(),
    reviewDueCount,
    topWeakness,
  };
}

// ---------------------------------------------------------------------------
// Candidate selection.
//
// Priority order (high → low):
//   1. Long absence (>30d) — comeback message takes precedence over all.
//   2. Lifecycle 7-day absence
//   3. Streak risk (active streak, last lesson 18–26h ago)
//   4. Review queue is hot (>= 8 due)
//   5. Drill due on a known weakness
//   6. Lifecycle 3-day absence
//   7. Weekly summary (Mondays, anchored to streak count)
//   8. Daily reminder (morning/evening window)
//
// Each predicate returns either { id, vars } or null. The first hit wins.
// ---------------------------------------------------------------------------

type Candidate = {
  id: NotificationTemplateId;
  vars: Record<string, string>;
};

function nameOrCoach(s: UserSnapshot): string {
  return s.coach.userDisplayName ?? "arkadaşım";
}

function topicForLevel(level: CefrLevel | null): string {
  switch (level) {
    case "A1":
    case "A2":
      return "günlük konuşma";
    case "B1":
      return "günlük diyalog";
    case "B2":
      return "iş İngilizcesi";
    case "C1":
    case "C2":
      return "ileri sohbet";
    default:
      return "kısa pratik";
  }
}

function pickComeback(s: UserSnapshot): Candidate | null {
  if (s.hoursSinceLastLesson < 24 * 30) return null;
  return {
    id: "comeback-after-30-days",
    vars: { name: nameOrCoach(s) },
  };
}

function pickAbsence7d(s: UserSnapshot): Candidate | null {
  if (s.hoursSinceLastInteraction < 24 * 7) return null;
  if (s.hoursSinceLastInteraction >= 24 * 30) return null;
  return {
    id: "coach-checkin-7-day-absence",
    vars: { name: nameOrCoach(s) },
  };
}

function pickStreakRisk(s: UserSnapshot): Candidate | null {
  // Only nudge if the user actually has a streak to lose and they're in the
  // 18–26h window since last lesson — outside that, the streak is already
  // safe (just practised) or already broken (the daily reset will have
  // zeroed it via lib/local-progress).
  if (s.streak < 2) return null;
  if (s.hoursSinceLastLesson < 18 || s.hoursSinceLastLesson > 26) return null;
  return {
    id: "streak-risk",
    vars: { name: nameOrCoach(s), streak: String(s.streak) },
  };
}

function pickReviewDue(s: UserSnapshot): Candidate | null {
  if (s.reviewDueCount < 8) return null;
  return {
    id: "review-due",
    vars: { count: String(s.reviewDueCount) },
  };
}

function pickDrillDue(s: UserSnapshot): Candidate | null {
  if (!s.topWeakness) return null;
  // Don't fire a drill nudge if the user just practised recently.
  if (s.hoursSinceLastLesson < 12) return null;
  return {
    id: "drill-due",
    vars: { name: nameOrCoach(s), weakness: s.topWeakness },
  };
}

function pickAbsence3d(s: UserSnapshot): Candidate | null {
  if (s.hoursSinceLastInteraction < 24 * 3) return null;
  if (s.hoursSinceLastInteraction >= 24 * 7) return null;
  return {
    id: "coach-checkin-3-day-absence",
    vars: { name: nameOrCoach(s), coach: s.coach.name },
  };
}

function pickWeeklySummary(s: UserSnapshot): Candidate | null {
  // Mondays only, and only if there was activity in the last 7 days so we
  // don't ship an empty "0 minutes this week" rapport.
  const isMonday = new Date().getDay() === 1;
  if (!isMonday) return null;
  if (s.hoursSinceLastLesson > 24 * 9) return null;
  return {
    id: "weekly-summary",
    vars: {
      name: nameOrCoach(s),
      // The picker doesn't have full metrics in scope (cheap & sync); the
      // dispatcher (Supabase Edge Function) can override these. We provide
      // sane placeholders so a dev-mode render is non-empty.
      minutes: "—",
      sessions: "—",
      newWords: "—",
    },
  };
}

function pickDailyReminder(s: UserSnapshot): Candidate | null {
  // Morning window: 7–10am local time. Evening window: 18–21pm local.
  const h = s.hourOfDay;
  const inMorning = h >= 7 && h < 10;
  const inEvening = h >= 18 && h < 21;
  if (!inMorning && !inEvening) return null;
  // Don't ship a reminder if the user already practised today (<10h ago).
  if (s.hoursSinceLastLesson < 10) return null;

  if (inMorning) {
    return {
      id: "daily-reminder-morning",
      vars: { name: nameOrCoach(s) },
    };
  }
  // Evening — reference last topic if we have one, else fall back to level.
  const topic = s.coach.topicMemory[0] ?? topicForLevel(s.level);
  return {
    id: "daily-reminder-evening",
    vars: { name: nameOrCoach(s), topic },
  };
}

const PICKERS: Array<(s: UserSnapshot) => Candidate | null> = [
  pickComeback,
  pickAbsence7d,
  pickStreakRisk,
  pickReviewDue,
  pickDrillDue,
  pickAbsence3d,
  pickWeeklySummary,
  pickDailyReminder,
];

// ---------------------------------------------------------------------------
// Public entrypoint.
// ---------------------------------------------------------------------------

export interface PickedNotification {
  template: NotificationTemplate;
  vars: Record<string, string>;
}

export async function pickBestNotification(): Promise<PickedNotification | null> {
  let snap: UserSnapshot;
  try {
    snap = await snapshot();
  } catch {
    return null;
  }

  const lastFired = await readLastFired();

  for (const pick of PICKERS) {
    const candidate = pick(snap);
    if (!candidate) continue;
    const template = NOTIFICATION_TEMPLATES[candidate.id];
    if (!template) continue;
    if (!isOffCooldown(template, lastFired)) continue;
    return { template, vars: candidate.vars };
  }
  return null;
}
