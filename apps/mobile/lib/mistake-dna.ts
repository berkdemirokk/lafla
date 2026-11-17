import { getActiveMistakes, type TrackedMistake } from "./mistake-tracker";
import {
  getPattern,
  type MistakeCategory,
  type MistakePattern,
} from "./mistake-patterns";

const CATEGORY_LABELS: Record<MistakeCategory, string> = {
  tense: "zaman yapısı",
  article: "article kullanımı",
  preposition: "edat seçimi",
  "word-order": "cümle sırası",
  "phrasal-verb": "phrasal verb",
  pronunciation: "telaffuz",
  register: "doğal ton",
  "false-friend": "yanıltıcı kelime",
  "subject-verb": "özne-fiil uyumu",
  "missing-aux": "yardımcı fiil",
  "false-cognate": "yanlış benzer kelime",
};

export interface MistakeDNAItem {
  tracked: TrackedMistake;
  pattern: MistakePattern;
  recentCount: number;
}

export interface MistakeDNA {
  windowDays: number;
  totalRecent: number;
  dominantCategory: MistakeCategory;
  dominantLabelTr: string;
  items: MistakeDNAItem[];
}

export function countRecentOccurrences(
  mistake: TrackedMistake,
  cutoffMs: number,
): number {
  const recorded = (mistake.recentOccurrences ?? []).filter(
    (value) => new Date(value).getTime() >= cutoffMs,
  ).length;
  if (recorded > 0) return recorded;

  // Legacy records predate occurrence history. Count them conservatively if
  // their last observed error is still inside the requested window.
  return new Date(mistake.lastSeenAt).getTime() >= cutoffMs
    ? Math.min(Math.max(1, mistake.count), 3)
    : 0;
}

export async function getMistakeDNA(
  windowDays = 21,
  now = new Date(),
): Promise<MistakeDNA | null> {
  const safeWindow = Math.max(1, Math.round(windowDays));
  const cutoffMs = now.getTime() - safeWindow * 86_400_000;
  const active = await getActiveMistakes();
  const recent = active.flatMap<MistakeDNAItem>((tracked) => {
    const pattern = getPattern(tracked.patternId);
    const recentCount = countRecentOccurrences(tracked, cutoffMs);
    return pattern && recentCount > 0 ? [{ tracked, pattern, recentCount }] : [];
  });
  if (recent.length === 0) return null;

  const categoryScores = new Map<MistakeCategory, number>();
  for (const item of recent) {
    categoryScores.set(
      item.pattern.category,
      (categoryScores.get(item.pattern.category) ?? 0) +
        item.recentCount * item.pattern.weight,
    );
  }
  const dominantCategory = [...categoryScores.entries()].sort(
    (a, b) => b[1] - a[1],
  )[0]![0];
  const items = recent
    .filter((item) => item.pattern.category === dominantCategory)
    .sort(
      (a, b) =>
        b.recentCount * b.pattern.weight -
        a.recentCount * a.pattern.weight,
    )
    .slice(0, 3);

  return {
    windowDays: safeWindow,
    totalRecent: recent.reduce((sum, item) => sum + item.recentCount, 0),
    dominantCategory,
    dominantLabelTr: CATEGORY_LABELS[dominantCategory],
    items,
  };
}
