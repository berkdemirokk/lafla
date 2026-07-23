export type RoleplayAssessment = "goal_met" | "close" | "unassessed";

export function averageRoleplayScores(scores: readonly number[]): number {
  if (scores.length === 0) return 0;
  return Math.round(
    scores.reduce((sum, score) => sum + score, 0) / scores.length,
  );
}

export function assessRoleplayScore(score: number): RoleplayAssessment {
  if (score >= 80) return "goal_met";
  if (score >= 40) return "close";
  return "unassessed";
}

export function roleplayAssessmentLabel(
  assessment: RoleplayAssessment,
): string {
  switch (assessment) {
    case "goal_met":
      return "Hedef tamamlandı";
    case "close":
      return "Yaklaştın";
    case "unassessed":
      return "Tekrar gerekli";
  }
}
