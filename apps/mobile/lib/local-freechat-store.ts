import AsyncStorage from "@react-native-async-storage/async-storage";
import { localDayKey } from "./day-key";

const DAILY_KEY_PREFIX = "lafla.freechat.dailyCount.";
const SESSION_KEY = "lafla.freechat.session";
const MAX_SESSION_RECORDS = 500;
const DAILY_COUNT_RETENTION_DAYS = 14;

interface StoredTurnRecord {
  at: number;
  promptId: string;
}

export interface LocalFreeChatReservation {
  allowed: boolean;
  count: number;
}

export interface ReserveLocalFreeChatTurnOptions {
  /** null means unlimited, while still recording local practice metrics. */
  limit: number | null;
  promptId: string;
  now?: Date;
}

const memoryCounts = new Map<string, number>();
let operationQueue: Promise<void> = Promise.resolve();

function dailyStorageKey(date: Date): string {
  return `${DAILY_KEY_PREFIX}${localDayKey(date)}`;
}

function oldestRetainedDayKey(now: Date): string {
  const cutoff = new Date(now);
  cutoff.setHours(12, 0, 0, 0);
  cutoff.setDate(cutoff.getDate() - DAILY_COUNT_RETENTION_DAYS);
  return localDayKey(cutoff);
}

async function pruneExpiredDailyCounts(now: Date): Promise<void> {
  const cutoff = oldestRetainedDayKey(now);
  const keys = await AsyncStorage.getAllKeys();
  const expired = keys.filter((key) => {
    if (!key.startsWith(DAILY_KEY_PREFIX)) return false;
    const day = key.slice(DAILY_KEY_PREFIX.length);
    return /^\d{4}-\d{2}-\d{2}$/.test(day) && day < cutoff;
  });
  if (expired.length === 0) return;
  await AsyncStorage.multiRemove(expired);
  for (const key of expired) memoryCounts.delete(key);
}

function safeCount(raw: string | null): number {
  if (!raw) return 0;
  const value = Number(raw);
  return Number.isSafeInteger(value) && value >= 0 ? value : 0;
}

function safeSession(raw: string | null): StoredTurnRecord[] {
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.flatMap<StoredTurnRecord>((item) => {
      if (
        !item ||
        typeof item !== "object" ||
        typeof (item as StoredTurnRecord).at !== "number" ||
        typeof (item as StoredTurnRecord).promptId !== "string"
      ) {
        return [];
      }
      return [item as StoredTurnRecord];
    });
  } catch {
    return [];
  }
}

async function readCountForKey(key: string): Promise<number> {
  let stored = 0;
  try {
    stored = safeCount(await AsyncStorage.getItem(key));
  } catch {
    // The in-memory mirror still keeps the current app session consistent.
  }
  return Math.max(stored, memoryCounts.get(key) ?? 0);
}

/** Reads today's device-local usage without contacting a server. */
export async function getLocalFreeChatUsage(now = new Date()): Promise<number> {
  return readCountForKey(dailyStorageKey(now));
}

function serialize<T>(operation: () => Promise<T>): Promise<T> {
  const result = operationQueue.then(operation, operation);
  operationQueue = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}

/**
 * Atomically reserves one local turn within this JavaScript runtime.
 * AsyncStorage itself has no compare-and-swap primitive, so the module queue
 * prevents rapid double taps from stepping on the same persisted count.
 */
export function reserveLocalFreeChatTurn(
  options: ReserveLocalFreeChatTurnOptions,
): Promise<LocalFreeChatReservation> {
  return serialize(async () => {
    const now = options.now ?? new Date();
    const key = dailyStorageKey(now);
    const current = await readCountForKey(key);
    const limit =
      options.limit == null
        ? null
        : Math.max(0, Math.floor(options.limit));

    if (limit != null && current >= limit) {
      return { allowed: false, count: current };
    }

    const count = current + 1;
    memoryCounts.set(key, count);

    try {
      await pruneExpiredDailyCounts(now);
      const records = safeSession(await AsyncStorage.getItem(SESSION_KEY));
      const nextRecords = [
        ...records,
        { at: now.getTime(), promptId: options.promptId.slice(0, 80) },
      ].slice(-MAX_SESSION_RECORDS);
      await AsyncStorage.multiSet([
        [key, String(count)],
        [SESSION_KEY, JSON.stringify(nextRecords)],
      ]);
    } catch {
      // Best effort persistence. memoryCounts still enforces this app session.
    }

    return { allowed: true, count };
  });
}

/** Test-only state reset; production callers should let local midnight roll over. */
export async function resetLocalFreeChatStoreForTests(): Promise<void> {
  await operationQueue;
  memoryCounts.clear();
  operationQueue = Promise.resolve();
}
