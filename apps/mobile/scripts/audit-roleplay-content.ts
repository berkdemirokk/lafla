import { allLessons } from "../data/lessons";

interface RoleplayTurn {
  speaker?: string;
  model_answers?: unknown;
  acceptable_patterns?: unknown;
}

interface RoleplayExercise {
  type?: string;
  turns?: RoleplayTurn[];
}

const audit = {
  authoredUserTurns: 0,
  missingModels: 0,
  invalidModelCardinality: 0,
  missingPatterns: 0,
  invalidPatterns: 0,
};

for (const lesson of allLessons) {
  const roleplay = (lesson.exercises as RoleplayExercise[]).find(
    (exercise) => exercise.type === "roleplay_chat",
  );
  if (!roleplay) continue;

  for (const turn of roleplay.turns ?? []) {
    if (turn.speaker !== "user") continue;
    audit.authoredUserTurns += 1;

    const models = Array.isArray(turn.model_answers)
      ? turn.model_answers
      : [];
    const patterns = Array.isArray(turn.acceptable_patterns)
      ? turn.acceptable_patterns
      : [];

    if (models.length === 0) audit.missingModels += 1;
    if (
      models.length !== 1 ||
      models.some(
        (answer) => typeof answer !== "string" || answer.trim().length === 0,
      )
    ) {
      audit.invalidModelCardinality += 1;
    }
    if (patterns.length === 0) audit.missingPatterns += 1;

    for (const pattern of patterns) {
      if (typeof pattern !== "string") {
        audit.invalidPatterns += 1;
        continue;
      }
      try {
        new RegExp(pattern, "i");
      } catch {
        audit.invalidPatterns += 1;
      }
    }
  }
}

console.log(JSON.stringify(audit, null, 2));

const errorCount =
  audit.missingModels +
  audit.invalidModelCardinality +
  audit.missingPatterns +
  audit.invalidPatterns;

if (audit.authoredUserTurns === 0 || errorCount > 0) {
  process.exitCode = 1;
}
