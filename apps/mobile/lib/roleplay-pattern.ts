/**
 * Repairs the small, recurring regex authoring mistakes found in bundled
 * roleplay content. Runtime patterns must always compile: a malformed content
 * string must not turn a correct learner answer into a failed attempt.
 */
export function repairRoleplayPattern(pattern: string): string | null {
  const source = pattern.trim();
  if (!source) return null;

  if (isValidRegex(source)) return source;

  // Some authored patterns used an optional capturing group for a literal
  // question mark. `(?)?` is invalid regex; `\??` expresses the intent.
  const withLiteralQuestions = source.replaceAll("(?)?", "\\??");
  const repaired = balanceGroupsAndCharacterClasses(withLiteralQuestions);

  return isValidRegex(repaired) ? repaired : null;
}

export function normalizeRoleplayPatterns(patterns: readonly string[]): string[] {
  const normalized = patterns
    .map(repairRoleplayPattern)
    .filter((pattern): pattern is string => pattern !== null);

  return [...new Set(normalized)];
}

function isValidRegex(pattern: string): boolean {
  try {
    new RegExp(pattern, "i");
    return true;
  } catch {
    return false;
  }
}

function balanceGroupsAndCharacterClasses(pattern: string): string {
  let result = "";
  let groupDepth = 0;
  let inCharacterClass = false;

  for (let index = 0; index < pattern.length; index += 1) {
    const character = pattern[index]!;

    if (character === "\\") {
      result += character;
      if (index + 1 < pattern.length) {
        result += pattern[index + 1]!;
        index += 1;
      }
      continue;
    }

    if (character === "[") {
      inCharacterClass = true;
      result += character;
      continue;
    }

    if (character === "]" && inCharacterClass) {
      inCharacterClass = false;
      result += character;
      continue;
    }

    if (inCharacterClass && character === "-") {
      const previous = pattern[index - 1];
      const next = pattern[index + 1];
      const intentionalRange =
        previous !== undefined &&
        next !== undefined &&
        /[A-Za-z0-9]/.test(previous) &&
        /[A-Za-z0-9]/.test(next);
      result += intentionalRange ? character : "\\-";
      continue;
    }

    if (!inCharacterClass && character === "(") {
      groupDepth += 1;
      result += character;
      continue;
    }

    if (!inCharacterClass && character === ")") {
      if (groupDepth === 0) continue;
      groupDepth -= 1;
      result += character;
      continue;
    }

    result += character;
  }

  if (inCharacterClass) result += "]";
  return result + ")".repeat(groupDepth);
}
