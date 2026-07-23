const GOOD = ["Got it.", "Nice.", "Perfect."] as const;
const CLOSE = ["Hmm, okay.", "I think I follow."] as const;
const RETRY = [
  "Hmm, that's a bit off-topic — let me try anyway.",
  "Not sure I caught that. Moving on...",
  "Okay, not quite what I asked but —",
] as const;

function hash(value: string): number {
  let result = 0;
  for (let index = 0; index < value.length; index += 1) {
    result = (result * 31 + value.charCodeAt(index)) | 0;
  }
  return Math.abs(result);
}

/** Three bounded branches keep authored dialogue reactive and predictable. */
export function roleplayReaction(
  score: number,
  userInput: string,
): string | null {
  const trimmed = userInput.trim();
  if (score === 0 || !trimmed) return null;
  const bucket = score >= 80 ? GOOD : score >= 40 ? CLOSE : RETRY;
  return bucket[hash(trimmed) % bucket.length]!;
}
