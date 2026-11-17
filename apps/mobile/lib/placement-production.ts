const CONNECTORS = new Set([
  "although",
  "because",
  "but",
  "despite",
  "however",
  "if",
  "nevertheless",
  "since",
  "therefore",
  "though",
  "unless",
  "whereas",
  "while",
]);

function wordsIn(text: string): string[] {
  return text.toLowerCase().match(/[a-z]+(?:'[a-z]+)?/g) ?? [];
}

/**
 * Estimates spontaneous production on a CEFR-like 0-100 continuum. It does
 * not compare against a model answer: placement needs original language, not
 * memorised phrase similarity.
 */
export function scorePlacementProduction(text: string): number {
  const words = wordsIn(text);
  const count = words.length;
  if (count === 0) return 0;

  let score =
    count <= 2 ? 12 :
    count <= 4 ? 25 :
    count <= 7 ? 38 :
    count <= 11 ? 50 :
    count <= 17 ? 63 :
    count <= 25 ? 74 : 82;

  const uniqueRatio = new Set(words).size / count;
  if (count >= 8 && uniqueRatio >= 0.75) score += 4;
  if (count >= 8 && uniqueRatio < 0.55) score -= 8;

  const connectorCount = new Set(words.filter((word) => CONNECTORS.has(word))).size;
  score += Math.min(9, connectorCount * 3);

  const sentenceCount = text.split(/[.!?]+/).filter((part) => part.trim()).length;
  if (sentenceCount >= 2 && count >= 8) score += 3;

  const advancedPhrases = [
    /\bon the other hand\b/i,
    /\bin contrast\b/i,
    /\bas a result\b/i,
    /\beven though\b/i,
    /\bnot only\b.+\bbut also\b/i,
  ];
  score += Math.min(6, advancedPhrases.filter((pattern) => pattern.test(text)).length * 3);

  return Math.max(0, Math.min(100, Math.round(score)));
}
