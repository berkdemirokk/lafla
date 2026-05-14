// Lafla — BookmarkButton.
// Small tap target that toggles the "saved scene" state with optimistic UI
// and haptic feedback. Uses Unicode bookmark glyphs so we don't pull a new
// icon dependency.
//
// Outline: 🔖  Filled: 📑  (filled = saved)

import { useCallback, useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { hapticImpact, hapticSelection } from "../lib/feedback";
import {
  isBookmarked as readIsBookmarked,
  toggleBookmark,
} from "../lib/bookmarks";
import { tokens } from "../theme";

export interface BookmarkButtonProps {
  sceneId: string;
  lessonId: string;
  size?: "small" | "medium";
  variant?: "outline" | "filled";
  onChange?: (bookmarked: boolean) => void;
}

export function BookmarkButton({
  sceneId,
  lessonId,
  size = "medium",
  variant = "outline",
  onChange,
}: BookmarkButtonProps) {
  const [saved, setSaved] = useState<boolean>(false);
  const [busy, setBusy] = useState<boolean>(false);

  // Hydrate from storage on mount + whenever the scene id changes
  useEffect(() => {
    let alive = true;
    readIsBookmarked(sceneId)
      .then((b) => {
        if (alive) setSaved(b);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [sceneId]);

  const onPress = useCallback(async () => {
    if (busy) return;
    // Optimistic flip
    const optimistic = !saved;
    setSaved(optimistic);
    setBusy(true);
    if (optimistic) hapticImpact("light");
    else hapticSelection();
    try {
      const actual = await toggleBookmark(sceneId, lessonId);
      if (actual !== optimistic) {
        // Storage disagreed — reconcile
        setSaved(actual);
      }
      onChange?.(actual);
    } catch {
      // revert on failure
      setSaved(!optimistic);
    } finally {
      setBusy(false);
    }
  }, [busy, saved, sceneId, lessonId, onChange]);

  const dims = size === "small" ? STYLE_SMALL : STYLE_MEDIUM;
  const containerStyles = [
    styles.base,
    dims.base,
    variant === "filled" ? styles.containerFilled : styles.containerOutline,
  ];

  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel={saved ? "Kayıttan kaldır" : "Kaydet"}
      accessibilityState={{ selected: saved }}
      style={({ pressed }) => [
        ...containerStyles,
        pressed && styles.pressed,
      ]}
    >
      <Text style={[styles.glyph, dims.glyph, saved && styles.glyphSaved]}>
        {saved ? "📑" : "🔖"}
      </Text>
    </Pressable>
  );
}

const STYLE_SMALL = StyleSheet.create({
  base: { width: 32, height: 32, borderRadius: 16 },
  glyph: { fontSize: 16, lineHeight: 18 },
});

const STYLE_MEDIUM = StyleSheet.create({
  base: { width: 44, height: 44, borderRadius: 22 },
  glyph: { fontSize: 22, lineHeight: 24 },
});

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  containerOutline: {
    backgroundColor: "rgba(26, 28, 28, 0.55)",
    borderColor: "rgba(255, 255, 255, 0.18)",
  },
  containerFilled: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.94 }],
  },
  glyph: {
    color: tokens.text.inverseOnSurface,
    textAlign: "center",
  },
  glyphSaved: {
    color: tokens.text.onPrimary,
  },
});
