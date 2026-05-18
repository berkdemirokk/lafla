// Lifestyle sample scenario — Daily Life track.
// Pedagogical intent: describe symptoms to a GP using B1-level health vocabulary
// ("a sharp pain", "for about three days", "it gets worse when..."). Trains the
// learner to narrate timeline + severity + triggers — a high-stakes real-world need.

import type { Scene } from "../scenes";

export const doctorAppointmentScene: Scene = {
  id: "sample-lifestyle-doctor-appointment",
  emoji: "🩺",
  title: "Tell the doctor\nyour symptoms",
  description:
    "Describe symptoms to a GP: timeline, severity, what makes it better or worse. Practice precise health vocabulary under mild pressure.",
  durationMin: 10,
  mode: "daily",
  cefrLevel: "B1",
  skillId: "lifestyle.health",
  lessonId: "sample-lifestyle-doctor-appointment-lesson",
  isNew: true,
  progressLabel: "8 turns · B1",
};
