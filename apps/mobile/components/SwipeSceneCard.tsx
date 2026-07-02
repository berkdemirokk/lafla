// SwipeSceneCard — TikTok/Bumble hybrid full-screen scene card for Home.
//
// One scene per screen:
//   - Vertical paging (parent FlatList) carries you between scenes.
//   - Horizontal pan on the card means: swipe-right → enter scenario,
//     swipe-left → skip to next.
//   - Bumble-style floating CTAs at the bottom (skip ✕  /  Konuş ▶).
//
// We deliberately use the built-in PanResponder (not react-native-gesture-
// handler) because the app's root layout does NOT mount GestureHandlerRootView
// — touching _layout.tsx is explicitly out of scope. PanResponder works
// without any provider and is sufficient for swipe-to-act + glow feedback.
//
// Reanimated is used for the entrance fade-in and CTA press-scale because
// it's already installed and gives us 60fps without crossing the JS bridge.
//
// The card is intentionally a pure presentational component: parent owns
// scene-list state, completion data, and navigation.
//
// Theme: Neon Noir.
//   bg.app (#000), surfaceContainer for the inner card surface, pink-cyan
//   border glow for delight, brand.primary CTA.

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
  type GestureResponderEvent,
  type PanResponderGestureState,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";

const AnimatedExpoImage = Animated.createAnimatedComponent(ExpoImage);

import type { Scene, SceneMode } from "../data/scenes";
import { hasNativeAudio } from "../data/native-audio-manifest";
import { getSceneCoverSpec } from "../lib/scene-cover-source";
import { getSceneDisplayMinutes } from "../lib/scene-duration";
import { tokens } from "../theme";
import AnimatedGradientOverlay from "./AnimatedGradientOverlay";
import FloatingParticles from "./FloatingParticles";

// ---------------------------------------------------------------------------
// Layout constants
// ---------------------------------------------------------------------------

const SCREEN = Dimensions.get("window");
type CoverStage = "primary" | "fallback" | "gradient";

// Horizontal swipe thresholds. We require either a fairly long drag OR
// a high-velocity flick so accidental thumb shifts don't trigger nav.
const SWIPE_DISTANCE_THRESHOLD = 110;
const SWIPE_VELOCITY_THRESHOLD = 0.55;
// 2026-05-25 — Vertical paging korunması için threshold'lar sıkılaştırıldı.
// Eski: HORIZONTAL_ACTIVATION=12 + VERTICAL_REJECT_RATIO=1.4 → kullanıcı yukarı
// kaydırırken hafif diagonal hareket (dx=15px, dy=20px gibi) horizontal
// sayılıyordu → yanlışlıkla scenario açıyordu veya skip ediyordu.
// Yeni: HORIZONTAL_ACTIVATION=30 + VERTICAL_REJECT_RATIO=0.7 → sadece net
// horizontal hareketlerde PanResponder devralır. Vertical paging öncelikli.
const HORIZONTAL_ACTIVATION = 30;
const VERTICAL_REJECT_RATIO = 0.7; // |dy|/|dx| above this → vertical gesture

// ---------------------------------------------------------------------------
// Per-mode accent colors (used for the floating mode chip).
// Keeping these light — main brand is pink, secondary is cyan — and routing
// each mode to one of the two so we don't drift the theme.
// ---------------------------------------------------------------------------

// 6 mod (2026-05-20 cut). Pink (primary) = sıcak/sosyal; cyan (tertiary) = işlevsel.
const MODE_ACCENT: Record<SceneMode, { fill: string; text: string }> = {
  flirt:   { fill: tokens.brand.primarySoft,  text: tokens.brand.primary  },
  work:    { fill: tokens.brand.tertiarySoft, text: tokens.brand.tertiary },
  bar:     { fill: tokens.brand.primarySoft,  text: tokens.brand.primary  },
  airport: { fill: tokens.brand.tertiarySoft, text: tokens.brand.tertiary },
  daily:   { fill: tokens.brand.tertiarySoft, text: tokens.brand.tertiary },
  order:   { fill: tokens.brand.primarySoft,  text: tokens.brand.primary  },
  ielts:   { fill: tokens.brand.tertiarySoft, text: tokens.brand.tertiary },
};

const MODE_LABEL: Record<SceneMode, string> = {
  flirt:   "Flört",
  work:    "İş",
  bar:     "Bar",
  airport: "Havaalanı",
  daily:   "Günlük",
  order:   "Sipariş",
  ielts:   "IELTS",
};

function getCardPromise(scene: Scene, completed: boolean): string {
  if (completed) {
    return "Tekrar turu: önce dinle, sonra daha doğal tek cevap kur.";
  }

  switch (scene.cefrLevel) {
    case "A1":
    case "A2":
      return "İlk turlar seçenekli; takılırsan ipucu otomatik açılır.";
    case "B1":
      return "Kısa cevapla başla; koç sadece en kritik hatayı seçer.";
    case "B2":
    case "C1":
    case "C2":
      return "Serbest konuş; düzeltmeler konuşma sonunda gelir.";
    default:
      return "Seviyene göre başlar; hata baskısı konuşma sonunda gelir.";
  }
}

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

export interface SwipeSceneCardProps {
  scene: Scene;
  completed: boolean;
  /** Pixel height of the card (the parent FlatList's item height). */
  cardHeight: number;
  /** Called when the user wants to enter the scenario (CTA, swipe-right, or
   *  press anywhere on the body). */
  onEnter: (lessonId: string) => void;
  /** Called when the user skips this scene (✕ button or swipe-left). */
  onSkip: (lessonId: string) => void;
  /** Whether this card is currently visible / active in the viewport */
  isActive?: boolean;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function SwipeSceneCardImpl({
  scene,
  completed,
  cardHeight,
  onEnter,
  onSkip,
  isActive = true,
}: SwipeSceneCardProps) {
  const coverSpec = useMemo(() => getSceneCoverSpec(scene), [scene]);
  const cardPromise = useMemo(
    () => getCardPromise(scene, completed),
    [scene, completed],
  );
  // Remote theme image → local fallback → branded gradient. Recycled cards
  // must retry from the primary image when the scene changes.
  const [coverStage, setCoverStage] = useState<CoverStage>("primary");
  useEffect(() => { setCoverStage("primary"); }, [scene.id]);
  // Horizontal pan offset — drives card translate, opacity, and edge glow.
  const translateX = useRef(new Animated.Value(0)).current;
  // Entrance animation (fade + slight upward translate). Replays whenever
  // the rendered scene id changes, which happens as the FlatList recycles.
  const enterOpacity = useRef(new Animated.Value(0)).current;
  const enterTranslateY = useRef(new Animated.Value(16)).current;
  // CTA press scale. Two refs because skip + Konuş can press independently.
  const enterCtaScale = useRef(new Animated.Value(1)).current;
  const skipCtaScale = useRef(new Animated.Value(1)).current;

  // Ken Burns ambient animation value (0 to 1 loop)
  const kenBurnsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!isActive) {
      // Reset to start and stop
      kenBurnsAnim.setValue(0);
      return;
    }

    // 14-second timing loop for smooth linear cinematic breathing
    const loop = Animated.loop(
      Animated.timing(kenBurnsAnim, {
        toValue: 1,
        duration: 14000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );
    loop.start();

    return () => {
      loop.stop();
    };
  }, [isActive, scene.id, kenBurnsAnim]);

  useEffect(() => {
    // Reset & replay the entrance animation for this scene.
    enterOpacity.setValue(0);
    enterTranslateY.setValue(16);
    translateX.setValue(0);
    Animated.parallel([
      Animated.timing(enterOpacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(enterTranslateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [scene.id, enterOpacity, enterTranslateY, translateX]);

  // -------------------------------------------------------------------------
  // PanResponder — horizontal swipe to commit / skip.
  // -------------------------------------------------------------------------

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        // Don't claim the touch on tap — let CTAs and the body Pressable
        // receive their own onPress events.
        onStartShouldSetPanResponder: () => false,
        // Claim only once the user has clearly moved horizontally. This
        // keeps the parent FlatList in charge of vertical scrolling.
        onMoveShouldSetPanResponder: (
          _evt: GestureResponderEvent,
          gesture: PanResponderGestureState,
        ) => {
          const { dx, dy } = gesture;
          if (Math.abs(dx) < HORIZONTAL_ACTIVATION) return false;
          if (Math.abs(dy) > Math.abs(dx) * VERTICAL_REJECT_RATIO) return false;
          return true;
        },
        onPanResponderMove: (_evt, gesture) => {
          translateX.setValue(gesture.dx);
        },
        onPanResponderRelease: (_evt, gesture) => {
          const { dx, vx } = gesture;
          const passedDistance = Math.abs(dx) > SWIPE_DISTANCE_THRESHOLD;
          const passedVelocity = Math.abs(vx) > SWIPE_VELOCITY_THRESHOLD;
          if (passedDistance || passedVelocity) {
            const direction = dx > 0 ? 1 : -1;
            // Fling the card off-screen then fire the action so the user
            // sees a clear visual response before the route swap.
            Animated.timing(translateX, {
              toValue: direction * SCREEN.width * 1.2,
              duration: 180,
              useNativeDriver: true,
            }).start(() => {
              // Reset position so the FlatList recycler can reuse the slot.
              translateX.setValue(0);
              if (direction > 0) {
                // Swipe right → enter scenario
                try {
                  void Haptics.impactAsync(
                    Haptics.ImpactFeedbackStyle.Medium,
                  );
                } catch {}
                onEnter(scene.lessonId);
              } else {
                try {
                  void Haptics.selectionAsync();
                } catch {}
                onSkip(scene.lessonId);
              }
            });
          } else {
            // Snap back to center — spring physics for a tactile feel.
            Animated.spring(translateX, {
              toValue: 0,
              useNativeDriver: true,
              friction: 6,
              tension: 80,
            }).start();
          }
        },
        onPanResponderTerminate: () => {
          Animated.spring(translateX, {
            toValue: 0,
            useNativeDriver: true,
            friction: 6,
            tension: 80,
          }).start();
        },
      }),
    [onEnter, onSkip, scene.lessonId, translateX],
  );

  // -------------------------------------------------------------------------
  // Derived animations — rotation + edge glow opacity follow translateX.
  // -------------------------------------------------------------------------

  const rotate = translateX.interpolate({
    inputRange: [-SCREEN.width, 0, SCREEN.width],
    outputRange: ["-6deg", "0deg", "6deg"],
    extrapolate: "clamp",
  });
  const rotateY = translateX.interpolate({
    inputRange: [-SCREEN.width, 0, SCREEN.width],
    outputRange: ["15deg", "0deg", "-15deg"],
    extrapolate: "clamp",
  });
  const imageScale = translateX.interpolate({
    inputRange: [-SCREEN.width, 0, SCREEN.width],
    outputRange: [1.35, 1.25, 1.35],
    extrapolate: "clamp",
  });
  const imageTranslateX = translateX.interpolate({
    inputRange: [-SCREEN.width, 0, SCREEN.width],
    outputRange: [SCREEN.width * 0.12, 0, -SCREEN.width * 0.12],
    extrapolate: "clamp",
  });

  // Ken Burns interpolations - zoom, pan and tilt made clearly visible
  const kbScale = kenBurnsAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.15, 1],
  });
  const kbTranslateX = kenBurnsAnim.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, -35, 35, -35, 0],
  });
  const kbTranslateY = kenBurnsAnim.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [0, -25, 25, 0],
  });

  // Combine swipe and ambient transforms
  const combinedScale = Animated.multiply(imageScale, kbScale);
  const combinedTranslateX = Animated.add(imageTranslateX, kbTranslateX);
  const rightGlowOpacity = translateX.interpolate({
    inputRange: [0, SCREEN.width * 0.4],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const leftGlowOpacity = translateX.interpolate({
    inputRange: [-SCREEN.width * 0.4, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  // -------------------------------------------------------------------------
  // CTA handlers
  // -------------------------------------------------------------------------

  const handleEnterPress = useCallback(async () => {
    Animated.sequence([
      Animated.timing(enterCtaScale, {
        toValue: 0.95,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(enterCtaScale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
        tension: 120,
      }),
    ]).start();
    try {
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    } catch {}
    onEnter(scene.lessonId);
  }, [enterCtaScale, onEnter, scene.lessonId]);

  const handleSkipPress = useCallback(async () => {
    Animated.sequence([
      Animated.timing(skipCtaScale, {
        toValue: 0.92,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(skipCtaScale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
        tension: 120,
      }),
    ]).start();
    try {
      await Haptics.selectionAsync();
    } catch {}
    onSkip(scene.lessonId);
  }, [skipCtaScale, onSkip, scene.lessonId]);

  const handleCoverError = useCallback(() => {
    setCoverStage((stage) => {
      if (stage === "primary" && coverSpec.fallbackSource) {
        return "fallback";
      }
      return "gradient";
    });
  }, [coverSpec.fallbackSource]);

  // -------------------------------------------------------------------------
  // Derived display strings
  // -------------------------------------------------------------------------

  // Scene titles are authored with embedded line breaks for the old card
  // style. The big TikTok-style title looks cleaner without forced breaks,
  // so we flatten newlines but preserve the source string elsewhere.
  const displayTitle = scene.title.replace(/\n/g, " ");
  const accent = MODE_ACCENT[scene.mode];
  const modeLabel = MODE_LABEL[scene.mode];
  const displayMinutes = getSceneDisplayMinutes(scene);
  const activeCoverSource =
    coverStage === "primary"
      ? coverSpec.source
      : coverStage === "fallback"
        ? coverSpec.fallbackSource
        : undefined;

  return (
    <View style={[styles.outer, { height: cardHeight }]}>
      {/* Edge glow hints — fade in while dragging. Right side = enter (pink),
          left side = skip (neutral white). Pure visual feedback, no touch. */}
      <Animated.View
        pointerEvents="none"
        style={[styles.edgeGlow, styles.edgeGlowRight, { opacity: rightGlowOpacity }]}
      />
      <Animated.View
        pointerEvents="none"
        style={[styles.edgeGlow, styles.edgeGlowLeft, { opacity: leftGlowOpacity }]}
      />

      <Animated.View
        style={[
          styles.card,
          {
            opacity: enterOpacity,
            transform: [
              { perspective: 1000 },
              { translateY: enterTranslateY },
              { translateX: translateX },
              { rotate },
              { rotateY },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        {/* Full background live image with overlay & top inner glow highlight */}
        {activeCoverSource ? (
          <AnimatedExpoImage
            source={activeCoverSource}
            cachePolicy="disk"
            style={[
              StyleSheet.absoluteFillObject,
              {
                transform: [
                  { scale: combinedScale },
                  { translateX: combinedTranslateX },
                  { translateY: kbTranslateY },
                ],
              },
            ]}
            contentFit="cover"
            onError={handleCoverError}
          />
        ) : (
          /* Gradient fallback when both remote and local covers fail/offline. */
          <LinearGradient
            colors={[tokens.bg.surfaceContainer, accent.fill, tokens.bg.app]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={StyleSheet.absoluteFillObject}
          />
        )}

        {/* Animated Gradient Overlay replacing the static black overlay */}
        <AnimatedGradientOverlay
          mode={scene.mode}
          accentColor={accent.text}
          isActive={isActive}
        />

        {/* Floating particles/bokeh behind the text */}
        <FloatingParticles
          accentColor={accent.text}
          isActive={isActive}
        />

        <View style={styles.cardInnerHighlight} pointerEvents="none" />
        {/* 2026-05-25 — Body Pressable'ın onPress'i kaldırıldı. Eski versiyon
            tap-to-enter idi (3. yol, swipe + CTA yanında) ama kullanıcı sahne
            içeriğini incelemek için dokununca yanlışlıkla scenario açıyordu.
            Şimdi sadece "Konuş ▶" CTA veya swipe-right scenario'ya götürür.
            Body içinde scroll/tap olmayan inert View. */}
        <View
          style={styles.body}
          accessibilityRole="text"
          accessibilityLabel={`Sahne: ${displayTitle}. Konuş butonuna basarak başla, sağa kaydırarak da girilebilir.`}
        >
          {/* Floating overlays — mode + CEFR + completion */}
          <View style={styles.overlayTop}>
            <View style={[styles.modeChip, { backgroundColor: accent.fill }]}>
              <Text style={[styles.modeChipText, { color: accent.text }]}>
                {modeLabel}
              </Text>
            </View>
            <View style={styles.overlayTopRight}>
              {scene.cefrLevel ? (
                <View style={styles.cefrBadge}>
                  <Text style={styles.cefrBadgeText}>{scene.cefrLevel}</Text>
                </View>
              ) : null}
              {scene.isNew && !completed ? (
                <View style={styles.newBadge}>
                  <Text style={styles.newBadgeText}>YENİ</Text>
                </View>
              ) : null}
              {/* Native audio rozeti — Adım 9 (2026-05-20).
                  Manifest'te entry'si olan sahneler "🎙️ Native ses" rozeti
                  alır. Şu an manifest boş; voice actor kontratı sonrası
                  rozet otomatik gözükmeye başlar. */}
              {hasNativeAudio(scene.lessonId) ? (
                <View style={styles.nativeBadge}>
                  <Text style={styles.nativeBadgeText}>🎙️ NATIVE</Text>
                </View>
              ) : null}
              {completed ? (
                <View style={styles.doneBadge}>
                  <Text style={styles.doneBadgeText}>✓</Text>
                </View>
              ) : null}
            </View>
          </View>

          {/* Upper third spacer */}
          <View style={styles.focalArea} />

          {/* Middle — big title */}
          <View style={styles.titleArea}>
            <Text style={styles.title} numberOfLines={3}>
              {displayTitle}
            </Text>
            <Text style={styles.description} numberOfLines={3}>
              {scene.description}
            </Text>
            <View style={styles.promiseBox}>
              <Text style={styles.promiseKicker}>
                {completed ? "TEKRAR AKIŞI" : "BASKISIZ AKIŞ"}
              </Text>
              <Text style={styles.promiseText} numberOfLines={2}>
                {cardPromise}
              </Text>
            </View>
          </View>

          {/* Lower — meta line (duration / progress) */}
          <View style={styles.metaArea}>
            <Text style={styles.metaText} numberOfLines={1}>
              {displayMinutes} dk · {coverSpec.label}
              {scene.progressLabel ? ` · ${scene.progressLabel}` : ""}
            </Text>
            <Text style={styles.hintText}>
              ⇡ Sonraki  ·  → Konuş  ·  ← Atla
            </Text>
          </View>
        </View>
      </Animated.View>

      {/* Bumble-style floating action buttons — pinned above the bottom nav. */}
      <View style={styles.ctaRow} pointerEvents="box-none">
        <Animated.View style={{ transform: [{ scale: skipCtaScale }] }}>
          <Pressable
            onPress={handleSkipPress}
            style={styles.skipBtn}
            accessibilityRole="button"
            accessibilityLabel="Bu sahneyi atla"
            hitSlop={12}
          >
            <Text style={styles.skipBtnText}>✕</Text>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[styles.enterBtnWrap, { transform: [{ scale: enterCtaScale }] }]}
        >
          <Pressable
            onPress={handleEnterPress}
            style={styles.enterBtn}
            accessibilityRole="button"
            accessibilityLabel="Konuşmaya başla"
          >
            <Text style={styles.enterBtnText}>Konuş ▶</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
}

export const SwipeSceneCard = memo(SwipeSceneCardImpl);

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  outer: {
    width: SCREEN.width,
    backgroundColor: tokens.bg.app,
    overflow: "hidden",
  },
  // Edge glow strips — sit beneath the card, fade in during drag.
  edgeGlow: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 96,
  },
  edgeGlowRight: {
    right: 0,
    backgroundColor: tokens.brand.primaryGlow,
  },
  edgeGlowLeft: {
    left: 0,
    backgroundColor: tokens.brand.tertiaryGlow,
  },

  // The card itself fills the row except for a small gutter and the CTA
  // strip at the bottom (which lives outside the card so its hit targets
  // stay reliable even while the card is mid-fling).
  card: {
    position: "absolute",
    top: 16,
    left: 16,
    right: 16,
    // Bottom leaves room for the CTA row (72) + breathing space (20).
    bottom: 100,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.bg.surfaceContainer,
    borderWidth: 1,
    borderColor: tokens.brand.primary,
    // Pink-cyan dual glow — pink shadow native, cyan implied by border accent
    // (we can't stack two shadowColors on RN, so the cyan lives in the inset
    // pseudo-borders below).
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.45,
    shadowRadius: 28,
    elevation: 14,
    overflow: "hidden",
  },
  cardInnerHighlight: {
    position: "absolute",
    top: 0,
    left: 1,
    right: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.18)",
    borderTopLeftRadius: tokens.radius.lg,
    borderTopRightRadius: tokens.radius.lg,
  },
  body: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: "space-between",
  },

  // ---- overlays ----
  overlayTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overlayTopRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  modeChip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: tokens.radius.full,
  },
  modeChipText: {
    fontSize: 12,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 0.6,
  },
  cefrBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiaryContainer,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  cefrBadgeText: {
    fontSize: 11,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 0.6,
  },
  newBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
  },
  newBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.onPrimary,
    letterSpacing: 0.8,
  },
  // Native ses rozeti — Adım 9 (cyan), rakipte yok.
  nativeBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiary,
  },
  nativeBadgeText: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onTertiary,
    letterSpacing: 0.8,
  },
  doneBadge: {
    width: 28,
    height: 28,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.tertiarySoft,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
    alignItems: "center",
    justifyContent: "center",
  },
  doneBadgeText: {
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
  },

  // ---- focal area (spacer) ----
  focalArea: {
    height: 112,
    marginTop: 12,
  },

  // ---- title block ----
  titleArea: {
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 30,
    lineHeight: 34,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.9,
    textAlign: "center",
  },
  description: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: tokens.weight.medium,
    color: tokens.text.secondary,
    textAlign: "center",
  },
  promiseBox: {
    marginTop: 14,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: "rgba(0, 0, 0, 0.36)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.14)",
    gap: 4,
  },
  promiseKicker: {
    fontSize: 10,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
    letterSpacing: 1.2,
    textAlign: "center",
  },
  promiseText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textAlign: "center",
  },

  // ---- meta line ----
  metaArea: {
    alignItems: "center",
    gap: 8,
  },
  metaText: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 0.4,
  },
  hintText: {
    fontSize: 11,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.tertiary,
    letterSpacing: 0.6,
    opacity: 0.7,
  },

  // ---- floating CTA strip (Bumble row) ----
  ctaRow: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    paddingHorizontal: 28,
  },
  skipBtn: {
    width: 56,
    height: 56,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    alignItems: "center",
    justifyContent: "center",
  },
  skipBtnText: {
    fontSize: 22,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.secondary,
  },
  enterBtnWrap: {
    flex: 1,
    maxWidth: 280,
  },
  enterBtn: {
    height: 56,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    shadowColor: tokens.brand.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 18,
    elevation: 12,
  },
  enterBtnText: {
    fontSize: 17,
    fontWeight: tokens.weight.black,
    color: tokens.text.onPrimary,
    letterSpacing: 0.4,
  },
});
