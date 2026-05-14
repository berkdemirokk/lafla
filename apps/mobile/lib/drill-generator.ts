// Lafla — Auto-drill generator.
//
// Given the tracker's top active mistakes, synthesise targeted micro-exercises
// the user can run as a 60-90 second "correction session". Each drill is
// scoped to ONE mistake pattern — so the user sees the rule, an example, and
// has to actively produce the corrected form.
//
// We mirror the BundledLesson exercise type shapes (spot_mistake / translate /
// fill_blank) so the same renderer-aware logic could later be reused; for now
// the /drill screen renders these via its own minimal UI to keep coupling low.
//
// No LLM. All drills are derived from the pattern record's example_wrong,
// example_right, and description_tr fields. That keeps the experience instant
// and offline-capable.

import { getPattern, type MistakeCategory } from "./mistake-patterns";
import { getTopMistakes, type TrackedMistake } from "./mistake-tracker";

export interface GeneratedDrill {
  id: string;
  patternId: string;
  type: "translate" | "fill_blank" | "spot_mistake";
  /** Prompt shown in Turkish above the exercise body. */
  prompt_tr: string;
  /**
   * Shape mirrors the corresponding BundledLesson exercise field set.
   * The drill renderer in /drill picks the keys it needs based on `type`.
   *
   * - spot_mistake: { incorrect_sentence, correct_sentence, tr_explanation }
   * - translate:    { source_tr, target_en, accepted_variants, tr_hint }
   * - fill_blank:   { sentence_template, answer, distractors, tr_hint }
   */
  data: Record<string, unknown>;
  /** Rough seconds budget for the UI's progress estimate. */
  estimatedSec: number;
  /** Category surfaced for the drill card header chip. */
  category: MistakeCategory;
  /** Severity 1-5, copied from the pattern for sort hints. */
  weight: number;
}

const DEFAULT_MAX = 5;

// ---------------------------------------------------------------------------
// Drill builders — one per output type. Each takes a TrackedMistake and the
// resolved pattern, returns a GeneratedDrill or null if the pattern lacks
// the fields we'd need for that drill shape.
// ---------------------------------------------------------------------------

function buildSpotMistakeDrill(
  m: TrackedMistake,
  index: number,
): GeneratedDrill | null {
  const p = getPattern(m.patternId);
  if (!p || !p.example_wrong || !p.example_right) return null;

  return {
    id: `drill.spot.${m.patternId}.${index}`,
    patternId: m.patternId,
    type: "spot_mistake",
    prompt_tr: `Hatayı bul ve düzelt — ${p.description_tr}`,
    data: {
      incorrect_sentence: p.example_wrong,
      correct_sentence: p.example_right,
      tr_explanation: p.reason_tr,
      // Surface user's own past slip-up as additional context if we have it.
      user_example: m.examples[0] ?? null,
    },
    estimatedSec: 25,
    category: p.category,
    weight: p.weight,
  };
}

function buildTranslateDrill(
  m: TrackedMistake,
  index: number,
): GeneratedDrill | null {
  const p = getPattern(m.patternId);
  if (!p) return null;

  // We use the correct version as the target. For the source we lean on the
  // pattern's Turkish reason/description — not a perfect TR sentence, but it
  // pushes the user to produce the right English form.
  const sourceTr =
    p.example_right.length < 60
      ? trBackcueFor(p)
      : `Doğru kalıbı kur: "${p.description_tr}"`;

  return {
    id: `drill.translate.${m.patternId}.${index}`,
    patternId: m.patternId,
    type: "translate",
    prompt_tr: `Doğru İngilizce kalıbı yaz — ${p.description_tr}`,
    data: {
      source_tr: sourceTr,
      target_en: p.example_right,
      accepted_variants: [] as string[],
      tr_hint: p.reason_tr,
    },
    estimatedSec: 30,
    category: p.category,
    weight: p.weight,
  };
}

function buildFillBlankDrill(
  m: TrackedMistake,
  index: number,
): GeneratedDrill | null {
  const p = getPattern(m.patternId);
  if (!p || !p.example_right) return null;

  // Cheap fill-blank synthesis: split example_right on the first token that
  // differs from example_wrong (the "fix"). Falls back to first word if we
  // can't compute a meaningful diff.
  const blanked = chooseBlankToken(p.example_wrong, p.example_right);
  if (!blanked) return null;

  return {
    id: `drill.fill.${m.patternId}.${index}`,
    patternId: m.patternId,
    type: "fill_blank",
    prompt_tr: `Boşluğu doldur — ${p.description_tr}`,
    data: {
      sentence_template: blanked.template,
      answer: blanked.answer,
      distractors: blanked.distractors,
      tr_hint: p.reason_tr,
    },
    estimatedSec: 20,
    category: p.category,
    weight: p.weight,
  };
}

/**
 * Pick a single token in `right` to convert into a blank — preferring a token
 * that DIFFERS from the wrong version (i.e. the actual fix). Returns the
 * template with `___`, the correct answer, and 1-3 distractors taken from the
 * wrong sentence or pattern category.
 */
function chooseBlankToken(
  wrong: string,
  right: string,
): { template: string; answer: string; distractors: string[] } | null {
  const wrongTokens = wrong.replace(/[.,!?;:]/g, "").split(/\s+/);
  const rightTokens = right.replace(/[.,!?;:]/g, "").split(/\s+/);
  if (rightTokens.length === 0) return null;

  // First index where the two sentences diverge.
  let diffIdx = -1;
  for (let i = 0; i < rightTokens.length; i++) {
    const w = (wrongTokens[i] ?? "").toLowerCase();
    const r = (rightTokens[i] ?? "").toLowerCase();
    if (w !== r) {
      diffIdx = i;
      break;
    }
  }
  // If sentences are length-mismatched and identical so far, use the last
  // distinct word in right.
  if (diffIdx === -1) {
    if (rightTokens.length === wrongTokens.length) return null;
    diffIdx = Math.min(rightTokens.length - 1, wrongTokens.length);
  }

  const answer = rightTokens[diffIdx]!;
  if (!answer || answer.length < 2) return null;

  const template = right.replace(
    new RegExp(`\\b${escapeRegex(answer)}\\b`),
    "___",
  );
  if (!template.includes("___")) return null;

  // Build distractors: the wrong-equivalent token if present, plus generic
  // alternatives based on the answer's part-of-speech-ish surface.
  const distractors: string[] = [];
  if (wrongTokens[diffIdx] && wrongTokens[diffIdx]!.toLowerCase() !== answer.toLowerCase()) {
    distractors.push(wrongTokens[diffIdx]!);
  }
  for (const guess of pickGenericDistractors(answer)) {
    if (
      distractors.length < 3 &&
      !distractors.some((d) => d.toLowerCase() === guess.toLowerCase()) &&
      guess.toLowerCase() !== answer.toLowerCase()
    ) {
      distractors.push(guess);
    }
  }

  return { template, answer, distractors };
}

function pickGenericDistractors(answer: string): string[] {
  const a = answer.toLowerCase();
  // Lightweight bank of common confusables. Not exhaustive — just enough that
  // a generated fill-blank has 2-3 plausible options.
  if (["a", "an", "the"].includes(a)) return ["a", "an", "the"].filter((x) => x !== a);
  if (["in", "on", "at", "to", "from", "by", "for", "with"].includes(a))
    return ["in", "on", "at", "to"].filter((x) => x !== a);
  if (["have", "has", "had"].includes(a))
    return ["have", "has", "had"].filter((x) => x !== a);
  if (["is", "am", "are", "was", "were"].includes(a))
    return ["is", "are", "was", "were"].filter((x) => x !== a);
  if (["do", "does", "did"].includes(a))
    return ["do", "does", "did"].filter((x) => x !== a);
  if (["much", "many", "few", "little", "some", "any"].includes(a))
    return ["much", "many", "few", "some"].filter((x) => x !== a);
  if (a.endsWith("ed")) return [a.replace(/ed$/, "ing"), a.replace(/ed$/, "")];
  if (a.endsWith("ing")) return [a.replace(/ing$/, "ed"), a.replace(/ing$/, "")];
  return [];
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Build a rough Turkish cue from the pattern reason. We deliberately keep
 * this dumb — better to be a little robotic than to hide the rule we're
 * drilling.
 */
function trBackcueFor(p: ReturnType<typeof getPattern>): string {
  if (!p) return "";
  return `Doğru kullanım: ${p.description_tr}`;
}

// ---------------------------------------------------------------------------
// Drill type rotation
// We don't want all drills to be spot_mistake — variety reinforces. We rotate
// shape per drill index but fall back to whatever shape successfully builds.
// ---------------------------------------------------------------------------

function shapeForIndex(
  i: number,
  m: TrackedMistake,
): GeneratedDrill | null {
  const order = [
    buildSpotMistakeDrill,
    buildTranslateDrill,
    buildFillBlankDrill,
  ];
  // Rotate the starting shape so each pattern doesn't always lead with the
  // same exercise across sessions.
  const offset = i % order.length;
  for (let k = 0; k < order.length; k++) {
    const builder = order[(offset + k) % order.length]!;
    const drill = builder(m, i);
    if (drill) return drill;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function generateDailyDrills(
  maxCount: number = DEFAULT_MAX,
): Promise<GeneratedDrill[]> {
  const cap = Math.max(1, Math.min(maxCount, 10));
  const top = await getTopMistakes(cap);
  if (top.length === 0) return [];

  const drills: GeneratedDrill[] = [];
  top.forEach((mistake, i) => {
    const drill = shapeForIndex(i, mistake);
    if (drill) drills.push(drill);
  });
  return drills;
}

/**
 * Synchronous variant — used in tests / preview views where the caller
 * already holds a TrackedMistake list.
 */
export function generateDrillsFromMistakes(
  mistakes: TrackedMistake[],
  maxCount: number = DEFAULT_MAX,
): GeneratedDrill[] {
  const cap = Math.max(1, Math.min(maxCount, 10));
  const list = mistakes.slice(0, cap);
  const drills: GeneratedDrill[] = [];
  list.forEach((mistake, i) => {
    const drill = shapeForIndex(i, mistake);
    if (drill) drills.push(drill);
  });
  return drills;
}
