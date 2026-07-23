import AsyncStorage from "@react-native-async-storage/async-storage";

import { captureException } from "./sentry";
import { isSupabaseConfigured, supabase } from "./supabase";

const K_OUTBOX = "lafla.cloud-progress.outbox.v1";

export interface CloudProgressEntry {
  id: string;
  userId: string;
  lessonState: Record<string, unknown>;
  skillMastery: Record<string, unknown>;
  queuedAt: string;
  attempts: number;
}

type ProgressWriter = (entry: CloudProgressEntry) => Promise<void>;

let queueLock: Promise<unknown> = Promise.resolve();

function serialized<T>(work: () => Promise<T>): Promise<T> {
  const next = queueLock.then(work, work);
  queueLock = next.catch(() => undefined);
  return next;
}

async function readOutbox(): Promise<CloudProgressEntry[]> {
  const raw = await AsyncStorage.getItem(K_OUTBOX);
  if (!raw) return [];
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as CloudProgressEntry[]) : [];
  } catch {
    return [];
  }
}

async function writeOutbox(entries: CloudProgressEntry[]): Promise<void> {
  if (entries.length === 0) {
    await AsyncStorage.removeItem(K_OUTBOX);
    return;
  }
  await AsyncStorage.setItem(K_OUTBOX, JSON.stringify(entries));
}

export async function enqueueCloudProgress(
  input: Omit<CloudProgressEntry, "id" | "queuedAt" | "attempts">,
): Promise<void> {
  return serialized(async () => {
    const entries = await readOutbox();
    const id = `${input.userId}:${String(input.lessonState.lesson_id ?? "unknown")}`;
    const next: CloudProgressEntry = {
      ...input,
      id,
      queuedAt: new Date().toISOString(),
      attempts: 0,
    };
    const existingIndex = entries.findIndex((entry) => entry.id === id);
    if (existingIndex >= 0) entries[existingIndex] = next;
    else entries.push(next);
    await writeOutbox(entries);
  });
}

async function supabaseWriter(entry: CloudProgressEntry): Promise<void> {
  const lessonResult = await supabase.from("lesson_state").upsert(entry.lessonState);
  if (lessonResult.error) throw lessonResult.error;
  const skillResult = await supabase.from("skill_mastery").upsert(entry.skillMastery);
  if (skillResult.error) throw skillResult.error;
}

export async function flushCloudProgressOutbox(
  writer: ProgressWriter = supabaseWriter,
): Promise<{ sent: number; pending: number }> {
  if (!isSupabaseConfigured && writer === supabaseWriter) {
    return { sent: 0, pending: (await readOutbox()).length };
  }
  return serialized(async () => {
    const entries = await readOutbox();
    if (entries.length === 0) return { sent: 0, pending: 0 };

    let activeUserId: string | null = null;
    if (writer === supabaseWriter) {
      const { data } = await supabase.auth.getUser();
      activeUserId = data.user?.id ?? null;
      if (!activeUserId) return { sent: 0, pending: entries.length };
    }

    const pending: CloudProgressEntry[] = [];
    let sent = 0;
    for (const entry of entries) {
      if (activeUserId && entry.userId !== activeUserId) {
        pending.push(entry);
        continue;
      }
      try {
        await writer(entry);
        sent += 1;
      } catch (error) {
        pending.push({ ...entry, attempts: entry.attempts + 1 });
        captureException(error, {
          source: "cloud-progress-outbox.flush",
          entry_id: entry.id,
        });
      }
    }
    await writeOutbox(pending);
    return { sent, pending: pending.length };
  });
}

export async function getCloudProgressOutboxSize(): Promise<number> {
  return (await readOutbox()).length;
}
