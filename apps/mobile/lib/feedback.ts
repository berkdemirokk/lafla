// Lafla — Haptic + sound feedback wrapper.
// Uses expo-haptics (already a dep).

import * as Haptics from "expo-haptics";

export function hapticSuccess() {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(
    () => {},
  );
}

export function hapticWarning() {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(
    () => {},
  );
}

export function hapticError() {
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error).catch(
    () => {},
  );
}

export function hapticImpact(
  style: "light" | "medium" | "heavy" = "medium",
) {
  const map = {
    light: Haptics.ImpactFeedbackStyle.Light,
    medium: Haptics.ImpactFeedbackStyle.Medium,
    heavy: Haptics.ImpactFeedbackStyle.Heavy,
  };
  Haptics.impactAsync(map[style]).catch(() => {});
}

export function hapticSelection() {
  Haptics.selectionAsync().catch(() => {});
}

// Convenience: trigger based on exercise result
export function hapticForScore(score: number) {
  if (score >= 85) hapticSuccess();
  else if (score >= 50) hapticWarning();
  else hapticError();
}
