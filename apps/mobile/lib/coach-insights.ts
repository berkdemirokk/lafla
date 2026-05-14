// Lafla — Coach insights aggregator.
//
// Pure read layer that powers the "Maya'nın Notları" self-awareness dashboard.
// Reads from three independent local stores — coach state, mistake tracker,
// voice session log — and produces a single ranked list of "what Maya knows
// about you" for the transparent dashboard at /coach-notes.
//
// Why a separate aggregator (vs. inlining the joins in the screen):
// - The screen stays a thin presentation layer; this module owns the priority
//   heuristic and the formatting of meta strings ("X kez yaptın, 3 gün önce").
// - The same insight feed will later be reused by the home-screen "Maya's pick
//   for today" banner — keeping it composable from day one avoids a refactor.
// - All three source modules can fail/return empty independently; concentrating
//   the defensive try/catches here means the screen never has to think about
//   AsyncStorage failures.
//
// NO LLM, NO network. The "suggestion" engine is a tiny rule table over the
// top weakness — deterministic, fast, and offline-safe.
//
// Note on imports: every source module is wrapped in try/catch at the call
// site so that a single broken store (e.g. mistake-tracker mid-migration)
// degrades gracefully to "no data yet" instead of throwing the whole screen.

import { getCoachState, type CoachState } from "./coach";
import {
  getTopMistakes,
  type TrackedMistake,
} from "./mistake-tracker";
import { getPattern, type MistakePattern } from "./mistake-patterns";
import {
  getRecentVoiceSessions,
  type VoiceSessionLog,
} from "./voice-session-storage";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface CoachInsight {
  type: "weakness" | "topic" | "session" | "recommendation";
  title: string;
  body: string;
  meta?: string;
  /**
   * 0–10. Higher = more important to surface first. Weaknesses with a high
   * mistake count and recent occurrence outrank stale topics; sessions tail
   * the list because they're more "what we did" than "what to fix".
   */
  priority: number;
}

export interface CoachNextSuggestion {
  title: string;
  cta?: string;
  /** expo-router route to push, e.g. "/drill" or "/freechat". */
  route?: string;
}

// ---------------------------------------------------------------------------
// Aggregated dashboard payload
//
// We expose the raw shapes too (not just the InsightList) because the screen
// renders them in distinct sections with different layouts. The InsightList
// is the "what's important right now" flat ranking; the per-section arrays
// power the sectioned UI.
// ---------------------------------------------------------------------------

export interface CoachKnowledge {
  coach: CoachState;
  weaknesses: WeaknessInsight[];
  topics: string[];
  sessions: VoiceSessionLog[];
  insights: CoachInsight[];
  suggestion: CoachNextSuggestion | null;
}

export interface WeaknessInsight {
  patternId: string;
  description_tr: string;
  reason_tr: string;
  count: number;
  lastSeenAt: string;
  lastSeenLabel: string; // "3 gün önce"
}

// ---------------------------------------------------------------------------
// Defensive loaders. Every one returns the empty value on failure so the
// screen always renders something.
// ---------------------------------------------------------------------------

async function safeCoachState(): Promise<CoachState | null> {
  try {
    return await getCoachState();
  } catch {
    return null;
  }
}

async function safeTopMistakes(n: number): Promise<TrackedMistake[]> {
  try {
    return await getTopMistakes(n);
  } catch {
    return [];
  }
}

async function safeRecentSessions(n: number): Promise<VoiceSessionLog[]> {
  try {
    return await getRecentVoiceSessions(n);
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Formatting helpers — kept module-local so the screen stays clean.
// ---------------------------------------------------------------------------

/**
 * Turn an ISO timestamp into a short relative Turkish label.
 * Examples: "bugün", "dün", "3 gün önce", "2 hafta önce".
 */
export function formatRelativeTr(iso: string | null | undefined): string {
  if (!iso) return "";
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return "";
  const diffMs = Date.now() - t;
  if (diffMs < 0) return "az önce";
  const minutes = Math.floor(diffMs / 60_000);
  if (minutes < 1) return "az önce";
  if (minutes < 60) return `${minutes} dk önce`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} saat önce`;
  const days = Math.floor(hours / 24);
  if (days === 0) return "bugün";
  if (days === 1) return "dün";
  if (days < 7) return `${days} gün önce`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return `${weeks} hafta önce`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} ay önce`;
  const years = Math.floor(days / 365);
  return `${years} yıl önce`;
}

/** "12 dk" / "1 sa 5 dk" — used for voice session duration. */
export function formatDurationTr(seconds: number): string {
  const s = Math.max(0, Math.round(seconds || 0));
  if (s < 60) return `${s} sn`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} dk`;
  const h = Math.floor(m / 60);
  const rem = m % 60;
  return rem === 0 ? `${h} sa` : `${h} sa ${rem} dk`;
}

/** Short date label, e.g. "14 May" — used in session rows. */
export function formatShortDateTr(iso: string): string {
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return "";
  const months = [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara",
  ];
  const d = new Date(t);
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

// ---------------------------------------------------------------------------
// Weakness joining: mistake-tracker rows + coach.weaknesses[].
//
// The tracker is the source of truth for counts and dates. coach.weaknesses[]
// is a deduped MRU surface populated by autoRecordWeaknessesFromUser — useful
// for fallback when the tracker hasn't yet been populated (older builds), or
// when a weakness was recorded directly (e.g. from voice mode) without a
// regex hit. We merge both, with tracker rows winning on overlap.
// ---------------------------------------------------------------------------

function joinWeaknesses(
  mistakes: TrackedMistake[],
  coachWeaknesses: string[],
): WeaknessInsight[] {
  const out: WeaknessInsight[] = [];
  const seenDescriptions = new Set<string>();

  // Tracker-backed rows first — they carry real counts.
  for (const m of mistakes) {
    const pattern: MistakePattern | undefined = getPattern(m.patternId);
    if (!pattern) continue;
    const desc = pattern.description_tr;
    seenDescriptions.add(desc.toLowerCase());
    out.push({
      patternId: m.patternId,
      description_tr: desc,
      reason_tr: pattern.reason_tr,
      count: m.count,
      lastSeenAt: m.lastSeenAt,
      lastSeenLabel: formatRelativeTr(m.lastSeenAt),
    });
  }

  // Coach-only weaknesses (no tracker row). Likely a stale or hand-pushed
  // label; surface with a soft "Maya not aldı" hint and count 1.
  for (const w of coachWeaknesses) {
    if (!w) continue;
    if (seenDescriptions.has(w.toLowerCase())) continue;
    out.push({
      patternId: `coach:${w}`,
      description_tr: w,
      reason_tr: "",
      count: 1,
      lastSeenAt: "",
      lastSeenLabel: "",
    });
  }

  return out;
}

// ---------------------------------------------------------------------------
// Insight ranking.
//
// Priority bands:
//   - weakness: 6–10 (high count + recent = top)
//   - topic   : 4–6
//   - session : 2–4
//   - recommendation: always 8 (so it surfaces near the top of the flat feed)
//
// The screen uses the flat list mostly for the "top of dashboard" highlight
// strip; the sectioned UI uses the raw arrays.
// ---------------------------------------------------------------------------

function buildInsightList(
  weaknesses: WeaknessInsight[],
  topics: string[],
  sessions: VoiceSessionLog[],
  suggestion: CoachNextSuggestion | null,
): CoachInsight[] {
  const insights: CoachInsight[] = [];

  // Weaknesses — scale priority by count (cap to avoid drowning topics).
  for (const w of weaknesses.slice(0, 5)) {
    const countComponent = Math.min(4, Math.log2(1 + w.count) * 1.5);
    const priority = 6 + countComponent; // 6–10
    insights.push({
      type: "weakness",
      title: w.description_tr,
      body: w.reason_tr || "Maya bunu birkaç kez fark etti.",
      meta: w.count > 1 ? `${w.count} kez yaptın` : undefined,
      priority,
    });
  }

  // Topics — newest first; small linear decay.
  topics.slice(0, 5).forEach((t, i) => {
    insights.push({
      type: "topic",
      title: t,
      body: i === 0 ? "Geçen seferki konumuz" : "Önceki sohbetlerden",
      priority: 6 - i * 0.4,
    });
  });

  // Sessions — newest first; flat low priority.
  sessions.slice(0, 3).forEach((s, i) => {
    insights.push({
      type: "session",
      title: `${formatDurationTr(s.durationSec)} sesli pratik`,
      body:
        Array.isArray(s.topics) && s.topics.length > 0
          ? `Konu: ${s.topics.slice(0, 2).join(", ")}`
          : `${s.turnsCount} sıra`,
      meta: formatRelativeTr(s.startedAt),
      priority: 3 - i * 0.5,
    });
  });

  if (suggestion) {
    insights.unshift({
      type: "recommendation",
      title: suggestion.title,
      body: suggestion.cta ?? "",
      priority: 8,
    });
  }

  // Sort desc by priority; cap to 10.
  return insights.sort((a, b) => b.priority - a.priority).slice(0, 10);
}

// ---------------------------------------------------------------------------
// Public API — what the screen consumes.
// ---------------------------------------------------------------------------

export async function getCoachInsights(): Promise<CoachInsight[]> {
  const k = await getCoachKnowledge();
  return k.insights;
}

/**
 * Single-pass aggregator. Returns ALL data the dashboard needs so the screen
 * issues exactly one `useEffect` and one re-render.
 */
export async function getCoachKnowledge(): Promise<CoachKnowledge> {
  const [coach, topMistakes, sessions] = await Promise.all([
    safeCoachState(),
    safeTopMistakes(8),
    safeRecentSessions(5),
  ]);

  const resolvedCoach: CoachState =
    coach ?? {
      name: "Maya",
      userDisplayName: null,
      lastInteractionAt: null,
      topicMemory: [],
      weaknesses: [],
      totalSessions: 0,
      totalMessages: 0,
    };

  const weaknesses = joinWeaknesses(topMistakes, resolvedCoach.weaknesses);
  const topics = resolvedCoach.topicMemory.slice(0, 5);

  const suggestion = await buildSuggestion(weaknesses, topics);
  const insights = buildInsightList(weaknesses, topics, sessions, suggestion);

  return {
    coach: resolvedCoach,
    weaknesses,
    topics,
    sessions,
    insights,
    suggestion,
  };
}

/**
 * Next-step suggestion. Tiny rule table over the highest-priority weakness;
 * falls back to a generic "open a conversation" prompt if nothing's tracked.
 *
 * Rule:
 *   1. If we have a weakness with a real patternId → drill on that pattern.
 *   2. Else if we have topics → suggest a freechat continuation.
 *   3. Else → open onboarding-style freechat.
 */
export async function getNextSuggestion(): Promise<CoachNextSuggestion> {
  const weaknesses = await safeTopMistakes(1);
  const coach = await safeCoachState();
  const fallbackSuggestion: CoachNextSuggestion = {
    title: "Bugün 5 dakikalık bir sohbet aç",
    cta: "Maya ile konuş",
    route: "/freechat",
  };

  const synthetic = await buildSuggestion(
    weaknesses.length > 0
      ? weaknesses.map((m) => {
          const pattern = getPattern(m.patternId);
          return {
            patternId: m.patternId,
            description_tr: pattern?.description_tr ?? m.patternId,
            reason_tr: pattern?.reason_tr ?? "",
            count: m.count,
            lastSeenAt: m.lastSeenAt,
            lastSeenLabel: formatRelativeTr(m.lastSeenAt),
          };
        })
      : [],
    coach?.topicMemory ?? [],
  );

  return synthetic ?? fallbackSuggestion;
}

async function buildSuggestion(
  weaknesses: WeaknessInsight[],
  topics: string[],
): Promise<CoachNextSuggestion | null> {
  const top = weaknesses[0];
  // Only suggest a drill when the weakness is backed by a real pattern id
  // (the tracker rows). Coach-only labels lack a drill target.
  if (top && !top.patternId.startsWith("coach:")) {
    return {
      title: `Sıradaki: "${top.description_tr}" üzerinde 5 dakika`,
      cta: "Drill'i aç",
      route: "/drill",
    };
  }

  if (topics.length > 0) {
    return {
      title: `Devam edelim: "${topics[0]}"`,
      cta: "Sohbete dön",
      route: "/freechat",
    };
  }

  return null;
}
