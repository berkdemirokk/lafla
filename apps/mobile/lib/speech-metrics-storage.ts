// Lafla — Speech metrics persistence + trend aggregation.
//
// Stores per-utterance samples in AsyncStorage under a single rolling
// log (capped at 200 items, FIFO). Read paths expose recent samples and
// a 7/30-day trend used by MetricsTrendCard.
//
// Schema mirrors `speech-metrics.ts` so writers anywhere in the app can
// drop a SpeechMetrics object in without re-shaping it.

import AsyncStorage from "@react-native-async-storage/async-storage";
import type { SpeechMetrics } from "./speech-metrics";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface MetricSample {
  id: string;
  recordedAt: string; // ISO timestamp
  context: "lesson" | "voice-session" | "drill" | "freechat";
  contextId?: string;
  metrics: SpeechMetrics;
}

export interface MetricsTrend {
  avgWpm: number;
  avgFluency: number;
  trend: "improving" | "stable" | "declining";
  weeklyChange: number; // signed delta in fluency points vs prior window
}

// ---------------------------------------------------------------------------
// Storage
// ---------------------------------------------------------------------------

const K_SAMPLES = "lafla.metrics.samples";
const MAX_SAMPLES = 200;

async function readAll(): Promise<MetricSample[]> {
  try {
    const raw = await AsyncStorage.getItem(K_SAMPLES);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as MetricSample[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeAll(samples: MetricSample[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_SAMPLES, JSON.stringify(samples));
  } catch {
    // ignore
  }
}

function genId(): string {
  // Cheap, collision-resistant-enough for client-side log entries.
  const rand = Math.random().toString(36).slice(2, 10);
  return `sm_${Date.now().toString(36)}_${rand}`;
}

// ---------------------------------------------------------------------------
// Public — saveSample
// ---------------------------------------------------------------------------

export async function saveSample(
  sample: Omit<MetricSample, "id">,
): Promise<void> {
  const all = await readAll();
  const next: MetricSample = { id: genId(), ...sample };
  // Newest first — keeps reads cheap.
  const updated = [next, ...all].slice(0, MAX_SAMPLES);
  await writeAll(updated);
}

// ---------------------------------------------------------------------------
// Public — getRecentSamples
// ---------------------------------------------------------------------------

export async function getRecentSamples(limit = 20): Promise<MetricSample[]> {
  const all = await readAll();
  const safeLimit = Math.max(1, Math.min(MAX_SAMPLES, Math.floor(limit)));
  return all.slice(0, safeLimit);
}

// ---------------------------------------------------------------------------
// Public — getMetricsTrend
// ---------------------------------------------------------------------------

function withinDays(iso: string, days: number, now: Date): boolean {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return false;
  const diffMs = now.getTime() - t;
  if (diffMs < 0) return false; // future-dated, ignore
  return diffMs <= days * 24 * 60 * 60 * 1000;
}

function withinWindow(
  iso: string,
  startDaysAgo: number,
  endDaysAgo: number,
  now: Date,
): boolean {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return false;
  const diffMs = now.getTime() - t;
  const minMs = endDaysAgo * 24 * 60 * 60 * 1000;
  const maxMs = startDaysAgo * 24 * 60 * 60 * 1000;
  return diffMs >= minMs && diffMs < maxMs;
}

function average(nums: number[]): number {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b, 0);
  return Math.round(sum / nums.length);
}

export async function getMetricsTrend(days: number): Promise<MetricsTrend> {
  const all = await readAll();
  const now = new Date();
  const window = Math.max(1, Math.floor(days));

  const current = all.filter((s) => withinDays(s.recordedAt, window, now));
  // Compare-against window is the same length, immediately preceding.
  const prior = all.filter((s) =>
    withinWindow(s.recordedAt, window * 2, window, now),
  );

  const avgWpm = average(current.map((s) => s.metrics.wpm));
  const avgFluency = average(current.map((s) => s.metrics.fluencyScore));
  const avgFluencyPrior = average(prior.map((s) => s.metrics.fluencyScore));

  let weeklyChange = 0;
  if (current.length > 0 && prior.length > 0) {
    weeklyChange = avgFluency - avgFluencyPrior;
  } else if (current.length > 0 && prior.length === 0) {
    // No baseline yet — flag as stable so UI doesn't claim improvement
    // we can't justify.
    weeklyChange = 0;
  }

  let trend: MetricsTrend["trend"] = "stable";
  if (weeklyChange >= 4) trend = "improving";
  else if (weeklyChange <= -4) trend = "declining";

  return { avgWpm, avgFluency, trend, weeklyChange };
}
