import AsyncStorage from "@react-native-async-storage/async-storage";

import { isObject, parseSafe } from "./json-safe";

const K_EVIDENCE = "lafla.learningEvidence.v1";
const MAX_EVENTS = 240;
const DAY_MS = 86_400_000;

export type LearningEvidenceKind = "scene" | "pronunciation";

export interface LearningEvidenceEvent {
  id: string;
  kind: LearningEvidenceKind;
  at: string;
  spokenSeconds: number;
  score: number;
  unsupported: boolean;
  mistakeCount: number;
}

export interface LearningEvidenceWindow {
  spokenMinutes: number;
  completedScenes: number;
  unsupportedScenes: number;
  pronunciationAttempts: number;
  averageScore: number | null;
  mistakeCount: number;
}

export interface WeeklyLearningEvidence extends LearningEvidenceWindow {
  previous: LearningEvidenceWindow;
  scoreChange: number | null;
  mistakeChange: number | null;
}

function isEvidenceEvent(value: unknown): value is LearningEvidenceEvent {
  return (
    isObject(value) &&
    typeof value.id === "string" &&
    (value.kind === "scene" || value.kind === "pronunciation") &&
    typeof value.at === "string" &&
    typeof value.spokenSeconds === "number" &&
    typeof value.score === "number" &&
    typeof value.unsupported === "boolean" &&
    typeof value.mistakeCount === "number"
  );
}

async function readAll(): Promise<LearningEvidenceEvent[]> {
  const raw = await AsyncStorage.getItem(K_EVIDENCE).catch(() => null);
  return parseSafe<LearningEvidenceEvent[]>(raw, [], Array.isArray, {
    source: "learning-evidence.readAll",
  }).filter(isEvidenceEvent);
}

let writeChain: Promise<unknown> = Promise.resolve();

function append(event: LearningEvidenceEvent): Promise<void> {
  const job = writeChain.then(async () => {
    const all = await readAll();
    if (all.some((item) => item.id === event.id)) return;
    all.unshift(event);
    await AsyncStorage.setItem(
      K_EVIDENCE,
      JSON.stringify(all.slice(0, MAX_EVENTS)),
    );
  });
  writeChain = job.catch(() => undefined);
  return job;
}

function safeScore(score: number): number {
  return Math.max(0, Math.min(100, Math.round(score)));
}

export function estimateSpokenSeconds(responses: readonly string[]): number {
  const words = responses.reduce(
    (sum, response) => sum + response.trim().split(/\s+/).filter(Boolean).length,
    0,
  );
  return words === 0 ? 0 : Math.max(2, Math.round((words / 105) * 60));
}

export function recordSceneEvidence(args: {
  sceneId: string;
  score: number;
  userResponses?: readonly string[];
  assistedTurns?: number;
  mistakeCount?: number;
  at?: Date;
}): Promise<void> {
  const at = args.at ?? new Date();
  return append({
    // React effects and native completion callbacks can occasionally fire
    // twice. Keep intentional replays while collapsing a five-second burst.
    id: `scene:${args.sceneId}:${Math.floor(at.getTime() / 5_000)}`,
    kind: "scene",
    at: at.toISOString(),
    spokenSeconds: estimateSpokenSeconds(args.userResponses ?? []),
    score: safeScore(args.score),
    unsupported: (args.assistedTurns ?? 0) === 0,
    mistakeCount: Math.max(0, Math.round(args.mistakeCount ?? 0)),
  });
}

export function recordPronunciationEvidence(args: {
  score: number;
  durationSeconds: number;
  at?: Date;
}): Promise<void> {
  const at = args.at ?? new Date();
  return append({
    id: `pronunciation:${at.toISOString()}`,
    kind: "pronunciation",
    at: at.toISOString(),
    spokenSeconds: Math.max(0, Math.round(args.durationSeconds)),
    score: safeScore(args.score),
    unsupported: true,
    mistakeCount: 0,
  });
}

function summarize(
  events: readonly LearningEvidenceEvent[],
  startMs: number,
  endMs: number,
): LearningEvidenceWindow {
  const selected = events.filter((event) => {
    const time = new Date(event.at).getTime();
    return Number.isFinite(time) && time >= startMs && time < endMs;
  });
  const scenes = selected.filter((event) => event.kind === "scene");
  const scoreEvents = selected.filter((event) => event.score >= 0);
  return {
    spokenMinutes: Math.round(
      (selected.reduce((sum, event) => sum + event.spokenSeconds, 0) / 60) * 10,
    ) / 10,
    completedScenes: scenes.length,
    unsupportedScenes: scenes.filter((event) => event.unsupported).length,
    pronunciationAttempts: selected.filter(
      (event) => event.kind === "pronunciation",
    ).length,
    averageScore: scoreEvents.length
      ? Math.round(
          scoreEvents.reduce((sum, event) => sum + event.score, 0) /
            scoreEvents.length,
        )
      : null,
    mistakeCount: scenes.reduce((sum, event) => sum + event.mistakeCount, 0),
  };
}

export async function getWeeklyLearningEvidence(
  now = new Date(),
): Promise<WeeklyLearningEvidence> {
  await writeChain.catch(() => undefined);
  const all = await readAll();
  const endMs = now.getTime();
  const startMs = endMs - 7 * DAY_MS;
  const previousStartMs = startMs - 7 * DAY_MS;
  const current = summarize(all, startMs, endMs);
  const previous = summarize(all, previousStartMs, startMs);
  return {
    ...current,
    previous,
    scoreChange:
      current.averageScore !== null && previous.averageScore !== null
        ? current.averageScore - previous.averageScore
        : null,
    mistakeChange:
      current.completedScenes > 0 && previous.completedScenes > 0
        ? current.mistakeCount - previous.mistakeCount
        : null,
  };
}
