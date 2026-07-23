import AsyncStorage from "@react-native-async-storage/async-storage";
import { isObject, parseSafe } from "./json-safe";

const K_COMPARISONS = "lafla.progressComparisons.v1";
const MAX_ENTRIES = 40;

export interface ComparisonAttempt {
  text: string;
  at: string;
}

export interface ProgressComparison {
  scenarioId: string;
  scenarioTitle: string;
  first: ComparisonAttempt;
  coachedText: string;
  repeats: ComparisonAttempt[];
}

function isComparison(value: unknown): value is ProgressComparison {
  if (!isObject(value)) return false;
  return (
    typeof value.scenarioId === "string" &&
    typeof value.scenarioTitle === "string" &&
    typeof value.coachedText === "string" &&
    isObject(value.first) &&
    typeof value.first.text === "string" &&
    typeof value.first.at === "string" &&
    Array.isArray(value.repeats)
  );
}

async function readAll(): Promise<ProgressComparison[]> {
  const raw = await AsyncStorage.getItem(K_COMPARISONS).catch(() => null);
  return parseSafe<ProgressComparison[]>(raw, [], Array.isArray, {
    source: "progress-comparison.readAll",
  }).filter(isComparison);
}

let writeChain: Promise<unknown> = Promise.resolve();

export function recordProgressComparison(args: {
  scenarioId: string;
  scenarioTitle: string;
  userText: string;
  coachedText: string;
}): Promise<void> {
  const job = writeChain.then(async () => {
    const userText = args.userText.trim().slice(0, 320);
    const coachedText = args.coachedText.trim().slice(0, 320);
    if (!userText || !coachedText) return;
    const all = await readAll();
    const now = new Date().toISOString();
    const index = all.findIndex((item) => item.scenarioId === args.scenarioId);
    if (index < 0) {
      all.unshift({
        scenarioId: args.scenarioId,
        scenarioTitle: args.scenarioTitle,
        first: { text: userText, at: now },
        coachedText,
        repeats: [],
      });
    } else {
      const existing = all[index]!;
      all[index] = {
        ...existing,
        scenarioTitle: args.scenarioTitle,
        coachedText,
        repeats: [{ text: userText, at: now }, ...existing.repeats].slice(0, 5),
      };
      const [updated] = all.splice(index, 1);
      all.unshift(updated!);
    }
    await AsyncStorage.setItem(
      K_COMPARISONS,
      JSON.stringify(all.slice(0, MAX_ENTRIES)),
    ).catch(() => {});
  });
  writeChain = job.catch(() => undefined);
  return job;
}

export async function getProgressComparisons(): Promise<ProgressComparison[]> {
  await writeChain.catch(() => undefined);
  return readAll();
}

export function comparisonDaysApart(comparison: ProgressComparison): number | null {
  const repeat = comparison.repeats[0];
  if (!repeat) return null;
  return Math.max(
    0,
    Math.floor(
      (new Date(repeat.at).getTime() - new Date(comparison.first.at).getTime()) /
        86_400_000,
    ),
  );
}
