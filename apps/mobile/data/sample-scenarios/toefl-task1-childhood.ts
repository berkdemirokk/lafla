// Exam sample scenario — Exam Prep track (TOEFL iBT Speaking).
// Pedagogical intent: TOEFL Task 1 Independent — "Talk about a childhood memory".
// 15s prep, 45s response. Trains compact narrative: setup -> event -> why it
// mattered. Tight time pressure is the whole point of this drill.

import type { Scene } from "../scenes";

export const toeflTask1ChildhoodScene: Scene = {
  id: "sample-exam-toefl-task1-childhood",
  emoji: "🧸",
  title: "TOEFL Task 1:\nChildhood\nmemory",
  description:
    "TOEFL Independent Task 1: talk about a childhood memory. 15s prep, 45s response. Compact narrative: setup, event, why it mattered.",
  durationMin: 3,
  mode: "testprep",
  cefrLevel: "B2",
  skillId: "exam.toefl.task1",
  lessonId: "sample-exam-toefl-task1-childhood-lesson",
  isNew: true,
  progressLabel: "1 answer · 45s",
};
