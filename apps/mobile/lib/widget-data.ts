// Lafla — Home Screen Widget data layer.
//
// Builds a small JSON snapshot of "what to show on the widget" and persists it
// where both the JS app and the native iOS widget extension can read it.
//
//   JS side  : AsyncStorage (key: `lafla.widget.snapshot`)
//   iOS side : UserDefaults of App Group `group.com.lafla.app` (via native bridge)
//
// The bridge module (`LaflaWidgetBridge`) is provided by the iOS widget target.
// Until the native target is wired up via `expo prebuild` + Xcode, the bridge
// stays null and we fall back to AsyncStorage only — the app still functions,
// the home-screen widget just doesn't update.
//
// The widget timeline on iOS refreshes ~every 30 min, so we don't need to write
// on every state change. Recommended call sites:
//   1. App open / focus
//   2. After lesson complete
//   3. After program/level change
//
// All copy in the snapshot is Turkish (the widget is rendered in Turkish, with
// any extracted English term staying inline as a quoted token).

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getCefrLevel } from "./cefr-level";
import { getCoachState } from "./coach";
import {
  getActiveProgram,
  getProgramDef,
  getTodaysPlan,
  type DailyPlan,
  type DailyPlanItem,
} from "./programs";
import { getLocalProfile } from "./local-progress";
import { writeToWidgetStorage } from "./widget-bridge";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface WidgetSnapshot {
  /** Turkish greeting line — "Merhaba Berk" / "Merhaba" / "Tekrar hoş geldin". */
  greeting_tr: string;
  /** Turkish one-liner describing today's plan focus — "Bugün: ABD vize mock". */
  todayFocus_tr: string;
  /** Current daily streak count (whole days). */
  streakDays: number;
  /** User's CEFR level label, or "—" if not yet set. */
  cefrLevel: string;
  /** Up to 3 plan items shown on the large widget. */
  planPreview: WidgetPlanItem[];
  /** Deep link the widget should open when tapped. */
  nextActionDeeplink: string;
  /** ISO-8601 timestamp of when this snapshot was built. */
  updatedAt: string;
}

export interface WidgetPlanItem {
  /** Short Turkish label for the item ("Mülakat açılışı"). */
  title_tr: string;
  /** "lesson" | "listening" | "coach" | "review" | "reading" */
  type: string;
  completed: boolean;
}

// ---------------------------------------------------------------------------
// Storage keys + tunables
// ---------------------------------------------------------------------------

const K_SNAPSHOT = "lafla.widget.snapshot";
const PLAN_PREVIEW_LIMIT = 3;

// ---------------------------------------------------------------------------
// Snapshot builder
// ---------------------------------------------------------------------------

/**
 * Build a {@link WidgetSnapshot} from current local state. Pure — does not
 * write anywhere. Useful for previews/tests; the public `writeWidgetSnapshot`
 * wraps this with persistence.
 */
export async function buildWidgetSnapshot(): Promise<WidgetSnapshot> {
  const [profile, level, coach, plan, program] = await Promise.all([
    getLocalProfile(),
    getCefrLevel(),
    getCoachState(),
    getTodaysPlan(),
    getActiveProgram(),
  ]);

  const greeting_tr = buildGreeting(coach.userDisplayName);
  const todayFocus_tr = buildFocusLine(plan, program?.id);
  const planPreview = buildPlanPreview(plan);
  const nextActionDeeplink = buildNextActionDeeplink(plan);

  return {
    greeting_tr,
    todayFocus_tr,
    streakDays: profile.current_streak,
    cefrLevel: level ?? "—",
    planPreview,
    nextActionDeeplink,
    updatedAt: new Date().toISOString(),
  };
}

function buildGreeting(name: string | null): string {
  const trimmed = name?.trim();
  if (trimmed && trimmed.length > 0) {
    return `Merhaba ${trimmed}`;
  }
  return "Tekrar hoş geldin";
}

function buildFocusLine(
  plan: DailyPlan | null,
  programId: string | undefined,
): string {
  if (!plan) {
    return "Bugün başlamaya hazır mısın?";
  }
  // Plan focus is already Turkish-first (see programs.ts FOCUS_THEMES).
  // We prefix with a short context label depending on program type so it
  // reads naturally on the widget: "Bugün: ..." or "Mülakat: ...".
  const prefix = programId
    ? programLabel(programId)
    : "Bugün";
  return `${prefix}: ${plan.focus_tr}`;
}

function programLabel(id: string): string {
  switch (id) {
    case "job-interview":
      return "Mülakat";
    case "travel-usuk":
      return "Seyahat";
    case "ielts-speaking":
      return "IELTS";
    case "toefl-speaking":
      return "TOEFL";
    case "yds-yokdil":
      return "YDS";
    case "remote-work":
      return "Uzaktan iş";
    case "academic-abroad":
      return "Akademik";
    case "general-fluency":
    default:
      return "Bugün";
  }
}

function buildPlanPreview(plan: DailyPlan | null): WidgetPlanItem[] {
  if (!plan) return [];
  return plan.items.slice(0, PLAN_PREVIEW_LIMIT).map((it: DailyPlanItem) => ({
    title_tr: it.title_tr,
    type: it.type,
    completed: it.completed,
  }));
}

/**
 * Decide what the widget tap should open.
 *
 * Priority:
 *   1. If the user has unfinished review items today, open `/review`.
 *   2. Otherwise open the feed (`/feed`) — the daily plan home.
 *
 * We use the `lafla://` custom scheme so the URL works whether the app is
 * cold or warm. The app's existing deep-link router already handles it.
 */
function buildNextActionDeeplink(plan: DailyPlan | null): string {
  if (plan) {
    const hasReview = plan.items.some(
      (it) => it.type === "review" && !it.completed,
    );
    if (hasReview) return "lafla://review";
  }
  return "lafla://feed";
}

// ---------------------------------------------------------------------------
// Persistence
// ---------------------------------------------------------------------------

/**
 * Build the snapshot and write it everywhere the widget can read it.
 *
 * Best-effort: never throws. Failures (AsyncStorage full, native bridge
 * missing, JSON serialisation) are swallowed silently — the worst case is a
 * stale widget, which is better than crashing the app.
 */
export async function writeWidgetSnapshot(): Promise<void> {
  try {
    const snapshot = await buildWidgetSnapshot();
    const json = JSON.stringify(snapshot);

    // Always persist to AsyncStorage so JS-side reads stay cheap.
    try {
      await AsyncStorage.setItem(K_SNAPSHOT, json);
    } catch {
      // ignore
    }

    // Forward to the native bridge for App Group write. The bridge is a
    // no-op when the iOS module isn't registered (e.g. dev client without
    // widget target, Android, simulator before prebuild).
    await writeToWidgetStorage(json);
  } catch {
    // ignore — widget snapshot is best-effort
  }
}

/**
 * Read the last-written snapshot from AsyncStorage. Returns null on first run
 * or after `clearWidgetSnapshot`.
 */
export async function getWidgetSnapshot(): Promise<WidgetSnapshot | null> {
  try {
    const raw = await AsyncStorage.getItem(K_SNAPSHOT);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<WidgetSnapshot>;
    if (!parsed || typeof parsed !== "object") return null;
    return normaliseSnapshot(parsed);
  } catch {
    return null;
  }
}

export async function clearWidgetSnapshot(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_SNAPSHOT);
  } catch {
    // ignore
  }
}

function normaliseSnapshot(p: Partial<WidgetSnapshot>): WidgetSnapshot {
  return {
    greeting_tr: typeof p.greeting_tr === "string" ? p.greeting_tr : "",
    todayFocus_tr: typeof p.todayFocus_tr === "string" ? p.todayFocus_tr : "",
    streakDays: typeof p.streakDays === "number" ? p.streakDays : 0,
    cefrLevel: typeof p.cefrLevel === "string" ? p.cefrLevel : "—",
    planPreview: Array.isArray(p.planPreview)
      ? p.planPreview.filter(
          (it): it is WidgetPlanItem =>
            !!it && typeof it === "object" && typeof it.title_tr === "string",
        )
      : [],
    nextActionDeeplink:
      typeof p.nextActionDeeplink === "string"
        ? p.nextActionDeeplink
        : "lafla://feed",
    updatedAt:
      typeof p.updatedAt === "string" ? p.updatedAt : new Date().toISOString(),
  };
}

// ---------------------------------------------------------------------------
// Scheduling
// ---------------------------------------------------------------------------

/**
 * Throttle handle — we don't rewrite the snapshot more than once per
 * `MIN_INTERVAL_MS`. iOS itself only refreshes the widget every ~15–30 min,
 * so faster writes would be wasted work.
 */
let lastWriteAt = 0;
const MIN_INTERVAL_MS = 60_000; // 1 minute

/**
 * Public entrypoint for "make sure the widget has fresh data".
 *
 * Call this on:
 *   - App focus (RootLayout `AppState` listener)
 *   - Lesson complete
 *   - Program start / level change
 *   - Onboarding finish
 *
 * The function is throttled — calling it on every navigation is safe.
 */
export async function scheduleWidgetUpdate(): Promise<void> {
  const now = Date.now();
  if (now - lastWriteAt < MIN_INTERVAL_MS) return;
  lastWriteAt = now;
  await writeWidgetSnapshot();
}

/** Force an immediate update, bypassing the throttle. Use for tests / debug. */
export async function flushWidgetUpdate(): Promise<void> {
  lastWriteAt = Date.now();
  await writeWidgetSnapshot();
}
