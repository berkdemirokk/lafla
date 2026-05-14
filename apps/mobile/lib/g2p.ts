// Lafla — Grapheme-to-Phoneme (G2P) with CMUDict-mini lookup and fallback.
//
// Strategy:
//   1. Look up the lowercased, apostrophe-trimmed word in CMUDICT_MINI.
//   2. If missing, fall back to a simple rule-based converter that walks
//      the letters left-to-right and emits ARPAbet phonemes using a small
//      digraph/trigraph table.
//
// The fallback is intentionally conservative: it favors the most common
// spelling-to-sound mapping in General American. It does not handle
// silent letters cleverly (e.g. "knight" -> N AY T relies on a "kn-"
// special case) and it doesn't know stress. We aim for ~85% phoneme
// accuracy on the long tail of common English words; the high-frequency
// items are already covered by CMUDICT_MINI so they bypass this path.
//
// Documented rules (in order of priority):
//   - Strip leading/trailing apostrophes; lowercase.
//   - Multi-letter onsets at the START of a word: "kn-" -> N, "wr-" -> R,
//     "gn-" -> N, "ps-" -> S, "wh-" -> W.
//   - Trigraphs anywhere: "tch" -> CH, "dge" -> JH, "igh" -> AY,
//     "ough" -> AO (rough exception not handled), "ing" -> IH NG.
//   - Digraphs anywhere: "ch" -> CH, "sh" -> SH, "th" -> TH (voiceless
//     default; CMUDict has the voiced cases), "ph" -> F, "gh" -> "" (silent),
//     "ck" -> K, "ng" -> NG, "qu" -> K W, "ee" -> IY, "ea" -> IY, "oo" -> UW,
//     "ai" -> EY, "ay" -> EY, "ow" -> OW, "ou" -> AW, "oa" -> OW, "oi" -> OY,
//     "oy" -> OY, "ie" -> IY, "ei" -> EY, "ar" -> AA R, "or" -> AO R,
//     "er" -> ER, "ir" -> ER, "ur" -> ER.
//   - Single letters: standard consonant mapping; vowels default to their
//     short form (a -> AE, e -> EH, i -> IH, o -> AA, u -> AH).
//   - Final silent "e" (cake -> K EY K): if word ends in CVCe, drop the e
//     and lengthen the prior vowel (a -> EY, i -> AY, o -> OW, u -> UW).
//   - Plural/past suffixes (s, ed) are not specially handled — they fall
//     through to single-letter rules, which is good enough for grading.

import { ARPABET_SYMBOLS, ARPABET_TO_IPA, CMUDICT_MINI } from "./cmudict-mini";

// ============================================================
// Public types
// ============================================================

export interface SentencePhonemes {
  flat: string[];
  perWord: { word: string; phonemes: readonly string[] }[];
}

// ============================================================
// Helpers
// ============================================================

function cleanWord(raw: string): string {
  return raw.toLowerCase().replace(/^[^a-z']+|[^a-z']+$/g, "");
}

function tokenizeSentence(text: string): string[] {
  // Keep apostrophes inside words ("he's", "won't"). Split on whitespace
  // and on any non-letter/non-apostrophe.
  if (!text) return [];
  const matches = text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g);
  return matches ?? [];
}

// ============================================================
// Fallback G2P
// ============================================================

// Ordered longest-first so multi-char patterns win over their prefixes.
const TRIGRAPHS: ReadonlyArray<readonly [string, readonly string[]]> = [
  ["tch", ["CH"]],
  ["dge", ["JH"]],
  ["igh", ["AY"]],
  ["ough", ["AO"]], // not great for "rough/cough" but covers "though/thought"
  ["augh", ["AO"]],
  ["eigh", ["EY"]],
];

const DIGRAPHS: ReadonlyArray<readonly [string, readonly string[]]> = [
  ["ch", ["CH"]],
  ["sh", ["SH"]],
  ["th", ["TH"]],
  ["ph", ["F"]],
  ["gh", []], // silent in most positions
  ["ck", ["K"]],
  ["ng", ["NG"]],
  ["qu", ["K", "W"]],
  ["ee", ["IY"]],
  ["ea", ["IY"]],
  ["oo", ["UW"]],
  ["ai", ["EY"]],
  ["ay", ["EY"]],
  ["ow", ["OW"]],
  ["ou", ["AW"]],
  ["oa", ["OW"]],
  ["oi", ["OY"]],
  ["oy", ["OY"]],
  ["ie", ["IY"]],
  ["ei", ["EY"]],
  ["ar", ["AA", "R"]],
  ["or", ["AO", "R"]],
  ["er", ["ER"]],
  ["ir", ["ER"]],
  ["ur", ["ER"]],
];

const CONSONANTS: Readonly<Record<string, string>> = {
  b: "B",
  c: "K", // soft c handled below
  d: "D",
  f: "F",
  g: "G", // soft g handled below
  h: "HH",
  j: "JH",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  p: "P",
  q: "K",
  r: "R",
  s: "S",
  t: "T",
  v: "V",
  w: "W",
  x: "K", // emit K then S separately below
  y: "Y",
  z: "Z",
};

const VOWELS_SHORT: Readonly<Record<string, string>> = {
  a: "AE",
  e: "EH",
  i: "IH",
  o: "AA",
  u: "AH",
};

const VOWELS_LONG: Readonly<Record<string, string>> = {
  a: "EY",
  e: "IY",
  i: "AY",
  o: "OW",
  u: "UW",
};

function isVowel(ch: string): boolean {
  return ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u";
}

function ruleBasedG2P(wordIn: string): string[] {
  let word = wordIn;
  if (!word) return [];

  const phones: string[] = [];

  // Onset specials
  if (word.startsWith("kn")) {
    phones.push("N");
    word = word.slice(2);
  } else if (word.startsWith("wr")) {
    phones.push("R");
    word = word.slice(2);
  } else if (word.startsWith("gn")) {
    phones.push("N");
    word = word.slice(2);
  } else if (word.startsWith("ps")) {
    phones.push("S");
    word = word.slice(2);
  } else if (word.startsWith("wh")) {
    phones.push("W");
    word = word.slice(2);
  }

  // Silent final "e" with magic-e rule: CVCe (or VCe).
  // We rewrite the word so the main loop emits the long vowel.
  let magicE = false;
  if (
    word.length >= 3 &&
    word.endsWith("e") &&
    !isVowel(word[word.length - 2]!) &&
    isVowel(word[word.length - 3]!)
  ) {
    magicE = true;
    word = word.slice(0, -1);
  }

  let i = 0;
  while (i < word.length) {
    const rest = word.slice(i);

    // Trigraphs first
    let matched = false;
    for (const [graph, phs] of TRIGRAPHS) {
      if (rest.startsWith(graph)) {
        for (const p of phs) phones.push(p);
        i += graph.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // Digraphs
    for (const [graph, phs] of DIGRAPHS) {
      if (rest.startsWith(graph)) {
        for (const p of phs) phones.push(p);
        i += graph.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // Single letter
    const ch = word[i]!;
    const next = word[i + 1] ?? "";

    if (isVowel(ch)) {
      // Magic-e: stretch the LAST vowel cluster encountered. We detect
      // "this is the final stressed vowel" by checking if we're at the
      // last vowel position before a trailing consonant.
      const isLastVowel =
        magicE && i + 2 === word.length && !isVowel(next) && next !== "";
      if (isLastVowel) {
        phones.push(VOWELS_LONG[ch]!);
      } else {
        phones.push(VOWELS_SHORT[ch]!);
      }
    } else if (ch === "c") {
      // Soft c before e, i, y
      if (next === "e" || next === "i" || next === "y") {
        phones.push("S");
      } else {
        phones.push("K");
      }
    } else if (ch === "g") {
      // Soft g before e, i, y (best-effort)
      if (next === "e" || next === "i" || next === "y") {
        phones.push("JH");
      } else {
        phones.push("G");
      }
    } else if (ch === "x") {
      phones.push("K");
      phones.push("S");
    } else {
      const cons = CONSONANTS[ch];
      if (cons) phones.push(cons);
      // unknown char: skip
    }

    i += 1;
  }

  // Safety: filter to known ARPAbet symbols only.
  return phones.filter((p) => ARPABET_SYMBOLS.has(p));
}

// ============================================================
// Public API
// ============================================================

/**
 * Convert a single word to ARPAbet phonemes. Uses CMUDICT_MINI first,
 * falls back to the rule-based converter.
 *
 * Returns an empty array if the input has no letters.
 */
export function wordToPhonemes(word: string): readonly string[] {
  const cleaned = cleanWord(word);
  if (!cleaned) return [];
  const hit = CMUDICT_MINI[cleaned];
  if (hit) return hit;
  // Try without apostrophes (e.g. "they're" -> "theyre" not in dict; we
  // strip and re-lookup before falling back to rules).
  const stripped = cleaned.replace(/'/g, "");
  const hit2 = stripped && CMUDICT_MINI[stripped];
  if (hit2) return hit2;
  return ruleBasedG2P(stripped || cleaned);
}

/**
 * Convert a sentence into a flat phoneme list and a per-word breakdown.
 * Punctuation is dropped.
 */
export function sentenceToPhonemes(text: string): SentencePhonemes {
  const words = tokenizeSentence(text);
  const flat: string[] = [];
  const perWord: { word: string; phonemes: readonly string[] }[] = [];
  for (const w of words) {
    const phs = wordToPhonemes(w);
    perWord.push({ word: w, phonemes: phs });
    for (const p of phs) flat.push(p);
  }
  return { flat, perWord };
}

/**
 * Render an ARPAbet phoneme list as a contiguous IPA string. Unknown
 * symbols are silently dropped (defensive — should not happen if input
 * comes from this module).
 */
export function phonemesToIpa(phonemes: readonly string[]): string {
  let out = "";
  for (const p of phonemes) {
    const ipa = ARPABET_TO_IPA[p];
    if (ipa) out += ipa;
  }
  return out;
}
