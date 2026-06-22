export type RoleplayMode = "multi-choice" | "hinted" | "free";

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
