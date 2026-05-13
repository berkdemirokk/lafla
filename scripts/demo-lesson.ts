// Lafla — Lesson Demo
//
// Loads cafe lesson 1.1 and runs it end-to-end with sample answers.
// Shows what one user's session through a Lafla lesson looks like.
//
// Run: npx tsx scripts/demo-lesson.ts

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import {
  startLesson,
  getCurrentExercise,
  evaluateExercise,
  applyResult,
  type UserInput,
} from "../packages/lesson-runner/src/index.js";

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
const data = JSON.parse(readFileSync(lessonsPath, "utf-8"));
const lesson = data.lessons[0];

// Sample answers — one per exercise, in order
const sampleAnswers: UserInput[] = [
  "next",                            // vocab_tile (passive)
  "Can I get a coffee, please?",     // translate
  "have",                            // fill_blank
  "I'd like a latte, please.",       // word_order
  "I'd like a coffee, please.",      // spot_mistake
  [                                  // roleplay_chat (user turns only)
    "Could I have a flat white, please?",
    "For here, please",
  ],
  [2, 1, 1, 1, 3],                   // recap_quiz (correct answers)
];

console.log("\n╔════════════════════════════════════════════════════════════════╗");
console.log("║              Lafla — Lesson 1.1 Runner Demo                    ║");
console.log(`║              ${lesson.title.padEnd(50)} ║`);
console.log("╚════════════════════════════════════════════════════════════════╝\n");

let progress = startLesson(lesson);

while (!progress.completed) {
  const ex = getCurrentExercise(lesson, progress);
  if (!ex) break;

  const i = progress.current_index;
  const input = sampleAnswers[i] ?? "";

  console.log(`\n┌── Alıştırma ${i + 1}/${lesson.exercises.length}: ${ex.type} ─────────`);

  printExercise(ex);

  const inputDisplay =
    Array.isArray(input) ? JSON.stringify(input) : `"${input}"`;
  console.log(`│  👤 Cevap: ${inputDisplay}`);

  const result = evaluateExercise(ex, input);
  const icon = result.correct ? "✓" : "✗";
  console.log(`│  ${icon} Skor: ${result.score}/100`);
  if (result.feedback) {
    console.log(`│  💬 ${result.feedback}`);
  }
  console.log("└─────────────────────────────────────────────────────────────");

  progress = applyResult(lesson, progress, result);
}

console.log("\n╔════════════════════════════════════════════════════════════════╗");
console.log("║                      DERS TAMAMLANDI                            ║");
console.log("╚════════════════════════════════════════════════════════════════╝");
console.log(`\n  Toplam Skor:  ${progress.total_score}/100`);
console.log(`  Doğru:        ${progress.results.filter((r) => r.correct).length}/${progress.results.length}`);
console.log(`  XP Kazandın:  +${progress.xp_earned}`);
console.log(`  🔥 Streak:    +1`);
console.log(`  ⏰ Sıradaki:   yarın 19:00\n`);

// ------------------------------------------------------------
function printExercise(ex: Record<string, unknown>): void {
  const t = ex.type as string;
  switch (t) {
    case "vocab_tile":
      console.log(`│  📇 ${ex.word_or_phrase} = ${ex.tr_translation}`);
      console.log(`│     Örnek: "${ex.example}"`);
      break;
    case "translate":
      console.log(`│  🔄 Çevir: "${ex.source}"`);
      break;
    case "fill_blank": {
      const distractors = ex.distractors as string[];
      const answer = ex.answer as string;
      const options = [answer, ...distractors].sort(() => 0.5 - Math.random());
      console.log(`│  ✏️ ${ex.sentence_template}`);
      console.log(`│     Seçenekler: [${options.join(" | ")}]`);
      break;
    }
    case "word_order":
      console.log(`│  🧩 Sırala: [${(ex.scrambled_tokens as string[]).join(" | ")}]`);
      console.log(`│     ("${ex.tr_translation}")`);
      break;
    case "spot_mistake":
      console.log(`│  🔍 Hatalı: "${ex.incorrect_sentence}"`);
      console.log(`│     Düzelt.`);
      break;
    case "roleplay_chat": {
      const turns = ex.turns as Array<{ speaker: string; message?: string }>;
      console.log(`│  💬 Senaryo: ${ex.scenario_description}`);
      for (const turn of turns) {
        if (turn.speaker === "npc") {
          console.log(`│     [${ex.npc_role}]: "${turn.message}"`);
        }
      }
      break;
    }
    case "recap_quiz": {
      const questions = ex.questions as Array<{ question: string }>;
      console.log(`│  📝 Quiz: ${questions.length} soru`);
      questions.forEach((q, idx) => {
        console.log(`│     ${idx + 1}. ${q.question}`);
      });
      break;
    }
  }
}
