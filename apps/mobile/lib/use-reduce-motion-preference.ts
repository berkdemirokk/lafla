import { useEffect, useState } from "react";
import { AccessibilityInfo } from "react-native";

/** Mirrors the operating-system Reduce Motion preference. */
export function useReduceMotionPreference(): boolean {
  // Static by default prevents a motion flash while native state loads.
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    let active = true;
    void AccessibilityInfo.isReduceMotionEnabled()
      .then((enabled) => {
        if (active) setReduceMotion(enabled);
      })
      .catch(() => {
        // Keep the conservative static presentation if the query is absent.
      });

    const subscription = AccessibilityInfo.addEventListener(
      "reduceMotionChanged",
      setReduceMotion,
    );
    return () => {
      active = false;
      subscription.remove();
    };
  }, []);

  return reduceMotion;
}
