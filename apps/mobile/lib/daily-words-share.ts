// Daily words share — pure content helpers for the "Paylaş" card.
//
// Kept free of React / native modules so the copy can be unit-tested and
// reused by both the captured image card and the plain-text fallback
// (RN Share) when view-shot or expo-sharing is unavailable.

/** App Store app id (eas.json → submit.production.ios.ascAppId). */
export const LAFLA_APP_STORE_ID = "6769138297";
export const LAFLA_APP_STORE_URL = `https://apps.apple.com/tr/app/id${LAFLA_APP_STORE_ID}`;

/** How many of today's words are shown on the card. */
export const SHARE_WORD_COUNT = 4;

export type Translate = (key: string, vars?: Record<string, string>) => string;

export interface ShareWord {
  word: string;
  translation: string;
}

export interface DailyWordsShareInput {
  correct: number;
  total: number;
  streak: number;
  words: ReadonlyArray<ShareWord>;
}

export interface DailyWordsShareModel {
  headline: string;
  score: string;
  /** null when there is no active streak — the card hides the row. */
  streak: string | null;
  words: ShareWord[];
  cta: string;
  url: string;
  accessibilityLabel: string;
}

function toCount(value: number): number {
  return Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
}

/** First N words with a non-empty English word and translation. */
export function pickShareWords(
  words: ReadonlyArray<ShareWord>,
  count = SHARE_WORD_COUNT,
): ShareWord[] {
  const out: ShareWord[] = [];
  for (const w of words) {
    if (out.length >= count) break;
    const word = w.word?.trim();
    const translation = w.translation?.trim();
    if (word && translation) out.push({ word, translation });
  }
  return out;
}

export function buildShareCardModel(
  input: DailyWordsShareInput,
  t: Translate,
): DailyWordsShareModel {
  const total = toCount(input.total);
  const correct = Math.min(toCount(input.correct), total);
  const streakDays = toCount(input.streak);
  const headline = t("shareCard.headline", { count: String(total) });
  const score = t("shareCard.score", { correct: String(correct), total: String(total) });
  const streak = streakDays > 0 ? t("shareCard.streak", { days: String(streakDays) }) : null;
  const words = pickShareWords(input.words);
  const cta = t("shareCard.cta");
  const accessibilityLabel = [headline, score, streak, ...words.map((w) => `${w.word}: ${w.translation}`)]
    .filter(Boolean)
    .join(". ");
  return { headline, score, streak, words, cta, url: LAFLA_APP_STORE_URL, accessibilityLabel };
}

/** Plain-text message: share sheet caption and the fallback when image capture fails. */
export function buildShareText(input: DailyWordsShareInput, t: Translate): string {
  const m = buildShareCardModel(input, t);
  const lines = [`${m.headline} (${m.score})`];
  if (m.streak) lines.push(m.streak);
  if (m.words.length > 0) {
    lines.push("");
    for (const w of m.words) lines.push(`• ${w.word} = ${w.translation}`);
  }
  lines.push("", `${m.cta} ${m.url}`);
  return lines.join("\n");
}
