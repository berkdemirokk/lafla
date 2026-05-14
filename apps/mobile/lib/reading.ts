// Lafla — Reading mode storage.
// Local-first: completed article IDs, last score, and per-article vocab
// pulled into the user's SRS-adjacent vocab list.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_COMPLETED = "lafla.reading.completed";
const K_VOCAB = "lafla.reading.vocab";

type CompletedEntry = {
  id: string;
  score: number;
  completed_at: string;
};

type VocabEntry = {
  article_id: string;
  word: string;
  translation: string;
  added_at: string;
};

async function readJson<T>(key: string, fallback: T): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson<T>(key: string, value: T): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch {
    // best-effort; storage failures shouldn't crash the reader
  }
}

export async function getCompletedReadings(): Promise<string[]> {
  const entries = await readJson<CompletedEntry[]>(K_COMPLETED, []);
  // De-dupe — most recent wins
  const seen = new Set<string>();
  const ids: string[] = [];
  for (let i = entries.length - 1; i >= 0; i--) {
    const e = entries[i]!;
    if (seen.has(e.id)) continue;
    seen.add(e.id);
    ids.unshift(e.id);
  }
  return ids;
}

export async function markReadingComplete(
  id: string,
  score: number,
): Promise<void> {
  const entries = await readJson<CompletedEntry[]>(K_COMPLETED, []);
  entries.push({
    id,
    score: Math.max(0, Math.min(100, Math.round(score))),
    completed_at: new Date().toISOString(),
  });
  await writeJson(K_COMPLETED, entries);
}

export async function getReadingProgress(): Promise<{
  completed: number;
  total: number;
  avgScore: number;
}> {
  const entries = await readJson<CompletedEntry[]>(K_COMPLETED, []);
  // De-dupe by id, keep last score
  const lastById = new Map<string, CompletedEntry>();
  for (const e of entries) lastById.set(e.id, e);
  const unique = Array.from(lastById.values());

  const completed = unique.length;
  const avgScore =
    completed === 0
      ? 0
      : Math.round(
          unique.reduce((sum, e) => sum + e.score, 0) / completed,
        );

  // `total` is unknown without the article catalog; callers that have the
  // catalog can recompute. We return the number of completed items for
  // callers that just want a simple stat.
  return { completed, total: completed, avgScore };
}

export async function addVocabToSrs(
  articleId: string,
  word: string,
  translation: string,
): Promise<void> {
  const list = await readJson<VocabEntry[]>(K_VOCAB, []);
  // Avoid duplicates of the same word from the same article
  const key = `${articleId}::${word.toLowerCase()}`;
  const exists = list.some(
    (v) => `${v.article_id}::${v.word.toLowerCase()}` === key,
  );
  if (exists) return;
  list.push({
    article_id: articleId,
    word,
    translation,
    added_at: new Date().toISOString(),
  });
  await writeJson(K_VOCAB, list);
}

export async function getReadingVocab(): Promise<
  { article_id: string; word: string; translation: string; added_at: string }[]
> {
  return readJson<VocabEntry[]>(K_VOCAB, []);
}
