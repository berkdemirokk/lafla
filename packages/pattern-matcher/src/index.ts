// Lafla — Pattern Matcher
//
// Accepts a user-typed answer and tries to match it against a set of accepted
// variants (canonical + acceptable alternatives). Returns a similarity score
// and a confidence band so the lesson runner can decide:
//
//   - high   (>= 0.95): exact or near-exact match, accept silently
//   - medium (>= 0.85): minor typos/punctuation, accept + show canonical
//   - low    (>= 0.75): close but rough, accept with hint
//   - none   (< 0.75):  not a match, suggest closest variant
//
// Runs in any JS runtime (Node, Cloudflare Workers, browser, RN). No deps.

export interface MatchInput {
  user_text: string;
  accepted_variants: string[];
  canonical?: string;
}

export type Confidence = "high" | "medium" | "low" | "none";

export interface MatchResult {
  matched: boolean;
  best_variant: string;
  similarity: number;
  confidence: Confidence;
  normalized_input: string;
}

// ------------------------------------------------------------
// Levenshtein edit distance (two-row DP, O(n) memory)
// ------------------------------------------------------------
export function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;

  let prevRow: number[] = new Array(n + 1);
  let currRow: number[] = new Array(n + 1);

  for (let j = 0; j <= n; j++) prevRow[j] = j;

  for (let i = 1; i <= m; i++) {
    currRow[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      currRow[j] = Math.min(
        prevRow[j] + 1,        // deletion
        currRow[j - 1] + 1,    // insertion
        prevRow[j - 1] + cost, // substitution
      );
    }
    [prevRow, currRow] = [currRow, prevRow];
  }

  return prevRow[n];
}

// Levenshtein → 0..1 similarity (1 = identical)
export function similarity(a: string, b: string): number {
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - dist / maxLen;
}

// ------------------------------------------------------------
// Normalize text for matching
// Lowercase, strip punctuation, collapse whitespace.
// Keeps base letters intact — does NOT strip Turkish diacritics
// (user might write English in mixed cases; we keep that data).
// ------------------------------------------------------------
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[.,!?;:'"()—–\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ------------------------------------------------------------
// Token Jaccard overlap — second signal, less sensitive to
// word reordering than Levenshtein
// ------------------------------------------------------------
export function tokenOverlap(a: string, b: string): number {
  const tokensA = new Set(
    normalize(a).split(" ").filter((t) => t.length > 0),
  );
  const tokensB = new Set(
    normalize(b).split(" ").filter((t) => t.length > 0),
  );
  if (tokensA.size === 0 && tokensB.size === 0) return 1;

  let intersection = 0;
  for (const t of tokensA) {
    if (tokensB.has(t)) intersection++;
  }
  const union = tokensA.size + tokensB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

// ------------------------------------------------------------
// Combined score
// Levenshtein dominates for short phrases (precise).
// Add token overlap weight for long phrases (resilient to reorder).
// ------------------------------------------------------------
function combinedScore(a: string, b: string): number {
  const lev = similarity(a, b);
  const maxLen = Math.max(a.length, b.length);
  if (maxLen < 30) return lev;
  const tok = tokenOverlap(a, b);
  return 0.65 * lev + 0.35 * tok;
}

// ------------------------------------------------------------
// Confidence band mapping
// ------------------------------------------------------------
function bandFromSimilarity(sim: number): Confidence {
  if (sim >= 0.95) return "high";
  if (sim >= 0.85) return "medium";
  if (sim >= 0.75) return "low";
  return "none";
}

// ------------------------------------------------------------
// Main public API: match user input against accepted variants
// ------------------------------------------------------------
export function matchPhrase(input: MatchInput): MatchResult {
  const candidates = input.canonical
    ? [input.canonical, ...input.accepted_variants]
    : input.accepted_variants;

  const normalizedInput = normalize(input.user_text);

  if (candidates.length === 0) {
    return {
      matched: false,
      best_variant: "",
      similarity: 0,
      confidence: "none",
      normalized_input: normalizedInput,
    };
  }

  let bestSim = 0;
  let bestVar = candidates[0]!;

  for (const variant of candidates) {
    const sim = combinedScore(normalizedInput, normalize(variant));
    if (sim > bestSim) {
      bestSim = sim;
      bestVar = variant;
    }
  }

  return {
    matched: bestSim >= 0.75,
    best_variant: bestVar,
    similarity: bestSim,
    confidence: bandFromSimilarity(bestSim),
    normalized_input: normalizedInput,
  };
}
