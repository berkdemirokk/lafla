import type { Scene } from "../data/scenes";
import { getScenario } from "./scenario";

type SceneDurationInput = Pick<Scene, "lessonId" | "durationMin">;

function clampDisplayMinutes(minutes: number): number {
  if (!Number.isFinite(minutes)) return 3;
  return Math.min(4, Math.max(2, Math.round(minutes)));
}

/**
 * User-facing duration must come from the calibrated scenario contract, not
 * legacy scene metadata. Many bundled Scene.durationMin values still say 5–10
 * minutes while the runtime scenario loop is capped to a short session.
 */
export function getSceneDisplayMinutes(
  scene: SceneDurationInput | null | undefined,
): number {
  if (!scene) return 3;
  return (
    getScenario(scene.lessonId)?.estimated_minutes ??
    clampDisplayMinutes(scene.durationMin)
  );
}
