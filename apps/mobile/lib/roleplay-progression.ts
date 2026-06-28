export type RoleplayMode = "multi-choice" | "hinted" | "free";

interface TurnSupportInput {
  baseMode: RoleplayMode;
  /** Zero-based user turn index inside the current scene. */
  userTurnIndex: number;
  /** Positive when the learner is above the scene, negative when below it. */
  levelDelta: number;
  hardMode?: boolean;
}

interface RoleplayProgress {
  total_attempts?: number;
  consecutive_correct?: number;
}

/**
 * Roleplay desteğini deneme sayısına değil gösterilmiş başarıya göre azaltır.
 * İlk deneme her zaman yönlendirmeli, iki ardışık başarılı tamamlamadan sonra
 * serbest üretim açılır.
 */
export function resolveRoleplayMode(
  progress: RoleplayProgress | null | undefined,
): RoleplayMode {
  const attempts = progress?.total_attempts ?? 0;
  const consecutiveCorrect = progress?.consecutive_correct ?? 0;

  if (attempts === 0) return "multi-choice";
  if (attempts >= 2 && consecutiveCorrect >= 2) return "free";
  return "hinted";
}

/**
 * Reduce support inside a single short scene: recognition -> guided recall ->
 * independent production. A harder-than-user scene keeps one hint after the
 * opening choice; an easier review scene starts directly with production.
 */
export function resolveTurnSupport({
  baseMode,
  userTurnIndex,
  levelDelta,
  hardMode = false,
}: TurnSupportInput): RoleplayMode {
  if (hardMode || levelDelta > 0) return "free";

  const turn = Math.max(0, userTurnIndex);
  if (levelDelta < 0) return turn === 0 ? "multi-choice" : "hinted";

  if (baseMode === "free") return "free";
  if (baseMode === "hinted") return turn === 0 ? "hinted" : "free";
  if (turn === 0) return "multi-choice";
  if (turn === 1) return "hinted";
  return "free";
}
