// Lafla — Pattern Matcher manual test
//
// Loads the first translate exercise from cafe lesson 1.1 and runs sample
// user inputs through the matcher to verify behavior.
//
// Run with: npx tsx scripts/test-pattern-matcher.ts
//
// Expected output: A table showing each input, its similarity score,
// match decision (✓/✗), and the best-matching canonical variant.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { matchPhrase } from "../packages/pattern-matcher/src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const lessonsPath = join(
  __dirname,
  "..",
  "content",
  "scenarios",
  "order",
  "cafe.lessons.json",
);

interface RawLessonFile {
  lessons: Array<{
    title: string;
    exercises: Array<Record<string, unknown>>;
  }>;
}

interface TranslateExercise {
  type: "translate";
  source: string;
  target: string;
  accepted_variants?: string[];
}

const lessons = JSON.parse(readFileSync(lessonsPath, "utf-8")) as RawLessonFile;
const lesson = lessons.lessons[0]!;
const translateExercise = lesson.exercises.find(
  (e) => e.type === "translate",
) as TranslateExercise | undefined;

if (!translateExercise) {
  console.error("Translate exercise not found in lesson");
  process.exit(1);
}

console.log("\n╔══════════════════════════════════════════════════════════════╗");
console.log("║         Lafla — Pattern Matcher Test                         ║");
console.log("╚══════════════════════════════════════════════════════════════╝\n");
console.log(`Lesson:    ${lesson.title}`);
console.log(`Exercise:  TR → EN translate`);
console.log(`Source:    "${translateExercise.source}"`);
console.log(`Canonical: "${translateExercise.target}"`);
console.log(
  `Accepted:  ${translateExercise.accepted_variants?.length ?? 0} variants\n`,
);
console.log("─".repeat(80));

const testInputs: Array<{ input: string; expected: string }> = [
  { input: "Could I have a coffee, please?", expected: "high match" },
  { input: "Could I have a coffee please", expected: "missing punctuation, still high" },
  { input: "could i have a coffee please", expected: "lowercase, still high" },
  { input: "Can I get a coffee, please?", expected: "alt variant, high" },
  { input: "I'd like a coffee, please.", expected: "alt variant, high" },
  { input: "Could I have a coffee plz", expected: "slang typo, medium" },
  { input: "Couldd I have a coffee, please?", expected: "doubled letter, medium" },
  { input: "Coffee please", expected: "shortened, low/medium" },
  { input: "I want a coffee", expected: "wrong tone, low/none" },
  { input: "Give me coffee", expected: "rude, none" },
  { input: "Bana bir kahve verir misin", expected: "Turkish, none" },
];

for (const { input, expected } of testInputs) {
  const result = matchPhrase({
    user_text: input,
    canonical: translateExercise.target,
    accepted_variants: translateExercise.accepted_variants ?? [],
  });

  const icon = result.matched ? "✓" : "✗";
  const conf = result.confidence.padEnd(6);
  const sim = (result.similarity * 100).toFixed(1).padStart(5);

  console.log(
    `  ${icon}  [${conf}]  ${sim}%   "${input}"`,
  );
  console.log(
    `           expected: ${expected}`,
  );
  if (result.matched && result.similarity < 0.95) {
    console.log(`           → suggests: "${result.best_variant}"`);
  }
  console.log("");
}

console.log("─".repeat(80));
console.log("Legend: ✓ matched (sim ≥ 0.75)  ✗ not matched");
console.log("        Confidence bands: high ≥ 0.95, medium ≥ 0.85, low ≥ 0.75\n");
