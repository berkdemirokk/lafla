// Exam sample scenario — Exam Prep track (TOEFL iBT Speaking).
// Pedagogical intent: TOEFL Task 2 Integrated — read a campus notice about a
// class policy change, listen to two students react, then summarize the
// speaker's opinion + reasons in 60s. Trains paraphrase + integration, not
// personal opinion. The hardest TOEFL speaking task for most learners.

import type { Scene } from "../scenes";

export const toeflTask2ClassScene: Scene = {
  id: "sample-exam-toefl-task2-class",
  emoji: "📚",
  title: "TOEFL Task 2:\nCampus\npolicy",
  description:
    "TOEFL Integrated Task 2: read a class policy notice, hear two students react, summarize the speaker's opinion and reasons in 60s. Paraphrase, don't opine.",
  durationMin: 5,
  mode: "testprep",
  cefrLevel: "B2",
  skillId: "exam.toefl.task2",
  lessonId: "sample-exam-toefl-task2-class-lesson",
  isNew: true,
  progressLabel: "1 answer · 60s",
};
