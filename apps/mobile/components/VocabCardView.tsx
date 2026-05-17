// VocabCardView — Anki-style flipping flashcard.
// Front: English word (large, bold). Back: Turkish translation + example sentence.
// Tap the card to flip. Uses RN Animated for a Y-axis rotation.

import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
  type StyleProp,
} from "react-native";
import { SpeakerButton } from "./SpeakerButton";
import { tokens } from "../theme";

interface Props {
  english: string;
  turkish: string;
  exampleEn?: string | null;
  exampleTr?: string | null;
  /** External flip control (optional). If omitted, the card manages its own state. */
  flipped?: boolean;
  onFlipChange?: (flipped: boolean) => void;
  /** Hide the speaker button (useful in quiz mode). */
  hideSpeaker?: boolean;
  /** Show "Learned" indicator badge. */
  learned?: boolean;
  style?: StyleProp<ViewStyle>;
}

export function VocabCardView({
  english,
  turkish,
  exampleEn,
  exampleTr,
  flipped: flippedProp,
  onFlipChange,
  hideSpeaker,
  learned,
  style,
}: Props) {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const isControlled = flippedProp !== undefined;
  const flipped = flippedProp ?? internalFlipped;

  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: flipped ? 1 : 0,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, [flipped, anim]);

  // Reset flip when card content changes (e.g. carousel paging)
  useEffect(() => {
    if (!isControlled) setInternalFlipped(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [english]);

  const frontInterpolate = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const backInterpolate = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ["180deg", "360deg"],
  });

  const onTap = () => {
    const next = !flipped;
    if (!isControlled) setInternalFlipped(next);
    onFlipChange?.(next);
  };

  return (
    <Pressable onPress={onTap} style={[styles.wrap, style]}>
      <View style={styles.cardContainer}>
        {/* FRONT — English */}
        <Animated.View
          style={[
            styles.face,
            styles.faceFront,
            { transform: [{ perspective: 1200 }, { rotateY: frontInterpolate }] },
          ]}
        >
          {learned && (
            <View style={styles.learnedBadge}>
              <Text style={styles.learnedBadgeText}>✓ Öğrenildi</Text>
            </View>
          )}
          <Text style={styles.langTag}>EN</Text>
          <Text style={styles.english} numberOfLines={3} adjustsFontSizeToFit>
            {english}
          </Text>
          {!hideSpeaker && (
            <View style={styles.speakerRow} pointerEvents="box-none">
              <SpeakerButton text={english} size="md" />
            </View>
          )}
          <Text style={styles.hint}>Çevirisi için dokun</Text>
        </Animated.View>

        {/* BACK — Turkish + example */}
        <Animated.View
          style={[
            styles.face,
            styles.faceBack,
            { transform: [{ perspective: 1200 }, { rotateY: backInterpolate }] },
          ]}
        >
          <Text style={styles.langTagBack}>TR</Text>
          <Text style={styles.turkish} numberOfLines={3} adjustsFontSizeToFit>
            {turkish}
          </Text>
          {(exampleEn || exampleTr) && (
            <View style={styles.exampleBox}>
              {exampleEn && <Text style={styles.exampleEn}>“{exampleEn}”</Text>}
              {exampleTr && <Text style={styles.exampleTr}>{exampleTr}</Text>}
            </View>
          )}
          <Text style={styles.hintBack}>Geri çevirmek için dokun</Text>
        </Animated.View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
  },
  cardContainer: {
    width: "100%",
    minHeight: 340,
    position: "relative",
  },
  face: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 340,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.md,
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 6,
  },
  faceFront: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  faceBack: {
    backgroundColor: tokens.brand.secondary, // black back face
    borderWidth: 1,
    borderColor: tokens.brand.secondary,
  },
  langTag: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.text.tertiary,
    letterSpacing: 1.5,
  },
  langTagBack: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 11,
    fontWeight: tokens.weight.black,
    color: tokens.brand.primary,
    letterSpacing: 1.5,
  },
  english: {
    fontSize: 40,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -0.8,
    paddingHorizontal: 8,
    marginBottom: tokens.spacing.md,
  },
  turkish: {
    fontSize: 34,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
    textAlign: "center",
    letterSpacing: -0.6,
    paddingHorizontal: 8,
    marginBottom: tokens.spacing.md,
  },
  speakerRow: {
    marginBottom: tokens.spacing.md,
  },
  exampleBox: {
    width: "100%",
    paddingHorizontal: 8,
    marginTop: tokens.spacing.base,
  },
  exampleEn: {
    fontSize: 15,
    color: tokens.text.secondaryFixedDim,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 6,
    lineHeight: 22,
  },
  exampleTr: {
    fontSize: 14,
    color: tokens.brand.primary,
    fontWeight: tokens.weight.semibold,
    textAlign: "center",
    lineHeight: 20,
  },
  hint: {
    position: "absolute",
    bottom: 16,
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.medium,
  },
  hintBack: {
    position: "absolute",
    bottom: 16,
    fontSize: 12,
    color: tokens.text.secondaryFixedDim,
    fontWeight: tokens.weight.medium,
  },
  learnedBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiary,
  },
  learnedBadgeText: {
    color: tokens.text.onTertiary,
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.3,
  },
});
