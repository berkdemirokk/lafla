export type RoleplaySubmissionSource = "voice" | "text" | "choice";

export const SUPPORTED_ROLEPLAY_MASTERY_CAP = 70;

export function roleplayTurnUsedSupport({
  submissionSource,
  hintVisible,
  retried = false,
}: {
  submissionSource: RoleplaySubmissionSource;
  hintVisible: boolean;
  retried?: boolean;
}): boolean {
  return retried || hintVisible || submissionSource === "choice";
}

export function roleplayMasteryContribution(
  score: number,
  supportUsed: boolean,
): number {
  if (!supportUsed) return score;
  return Math.min(score, SUPPORTED_ROLEPLAY_MASTERY_CAP);
}
