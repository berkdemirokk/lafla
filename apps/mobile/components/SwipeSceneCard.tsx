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

import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
  type GestureResponderEvent,
  type PanResponderGestureState,
} from "react-native";
import * as Haptics from "expo-haptics";

import type { Scene, SceneMode } from "../data/scenes";
import { hasNativeAudio } from "../data/native-audio-manifest";
import { tokens } from "../theme";

// ---------------------------------------------------------------------------
// Layout constants
// ---------------------------------------------------------------------------

const SCREEN = Dimensions.get("window");

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

const THEME_IMAGES: Record<string, string[]> = {
  taxi: [
    "https://images.unsplash.com/photo-1511527844068-006b95d162c2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1492664738948-2ec93a5c0942?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
  ],
  gym: [
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=600&q=80"
  ],
  cafe: [
    "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80"
  ],
  restaurant: [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
  ],
  bar: [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80"
  ],
  airport: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542296332-2b4473fac5a3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=600&q=80"
  ],
  salon: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1562322140-8baeececf3d1?auto=format&fit=crop&w=600&q=80"
  ],
  hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80"
  ],
  pharmacy: [
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1631541976229-21072a14671a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1607613009820-a29f7bb81dd0?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80"
  ],
  shopping: [
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1573855563977-37d48875c409?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80"
  ],
  ielts: [
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1448932252197-d39721b1a996?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80"
  ],
  flirt: [
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=600&q=80"
  ],
  work: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1531535934027-667f6787da4a?auto=format&fit=crop&w=600&q=80"
  ],
  daily: [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1526256262111-361788c1c38e?auto=format&fit=crop&w=600&q=80"
  ]
};

function getVisualTheme(skillId: string | undefined, mode: SceneMode): string {
  const s = (skillId || "").toLowerCase();
  
  if (s.includes("taxi") || s.includes("transport")) return "taxi";
  if (s.includes("gym") || s.includes("workout")) return "gym";
  if (s.includes("cafe")) return "cafe";
  if (s.includes("restaurant") || s.includes("fastfood")) return "restaurant";
  if (s.includes("bar") || s.includes("pub") || s.includes("drink")) return "bar";
  if (s.includes("airport") || s.includes("flight") || s.includes("travel")) return "airport";
  if (s.includes("salon") || s.includes("barber") || s.includes("hair")) return "salon";
  if (s.includes("hotel") || s.includes("housing") || s.includes("hostel")) return "hotel";
  if (s.includes("pharmacy") || s.includes("health") || s.includes("medicine")) return "pharmacy";
  if (s.includes("shopping") || s.includes("grocery") || s.includes("delivery") || s.includes("store")) return "shopping";
  if (s.includes("ielts")) return "ielts";
  if (s.includes("flirt") || s.includes("date") || s.includes("banter")) return "flirt";
  if (s.includes("work") || s.includes("meeting") || s.includes("career") || s.includes("professional") || s.includes("slack") || s.includes("email") || s.includes("interview") || s.includes("coder")) return "work";
  if (s.includes("daily") || s.includes("social") || s.includes("story") || s.includes("directions") || s.includes("phone") || s.includes("bank")) return "daily";

  // Fallback to mode
  if (mode === "flirt") return "flirt";
  if (mode === "work") return "work";
  if (mode === "bar") return "bar";
  if (mode === "airport") return "airport";
  if (mode === "daily") return "daily";
  if (mode === "order") return "restaurant";
  if (mode === "ielts") return "ielts";

  return "daily";
}

function getDeterministicImage(sceneId: string, skillId: string | undefined, mode: SceneMode): string {
  const theme = getVisualTheme(skillId, mode);
  const list = THEME_IMAGES[theme] || THEME_IMAGES.daily;
  let hash = 0;
  for (let i = 0; i < sceneId.length; i++) {
    hash = (hash << 5) - hash + sceneId.charCodeAt(i);
    hash |= 0;
  }
  const idx = Math.abs(hash) % list.length;
  return list[idx];
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
}: SwipeSceneCardProps) {
  // Horizontal pan offset — drives card translate, opacity, and edge glow.
  const translateX = useRef(new Animated.Value(0)).current;
  // Entrance animation (fade + slight upward translate). Replays whenever
  // the rendered scene id changes, which happens as the FlatList recycles.
  const enterOpacity = useRef(new Animated.Value(0)).current;
  const enterTranslateY = useRef(new Animated.Value(16)).current;
  // CTA press scale. Two refs because skip + Konuş can press independently.
  const enterCtaScale = useRef(new Animated.Value(1)).current;
  const skipCtaScale = useRef(new Animated.Value(1)).current;

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
    outputRange: [1.25, 1.15, 1.25],
    extrapolate: "clamp",
  });
  const imageTranslateX = translateX.interpolate({
    inputRange: [-SCREEN.width, 0, SCREEN.width],
    outputRange: [SCREEN.width * 0.12, 0, -SCREEN.width * 0.12],
    extrapolate: "clamp",
  });
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

  // -------------------------------------------------------------------------
  // Derived display strings
  // -------------------------------------------------------------------------

  // Scene titles are authored with embedded line breaks for the old card
  // style. The big TikTok-style title looks cleaner without forced breaks,
  // so we flatten newlines but preserve the source string elsewhere.
  const displayTitle = scene.title.replace(/\n/g, " ");
  const accent = MODE_ACCENT[scene.mode];
  const modeLabel = MODE_LABEL[scene.mode];

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
        <Animated.Image
          source={{ uri: getDeterministicImage(scene.id, scene.skillId, scene.mode) }}
          style={[
            StyleSheet.absoluteFillObject,
            {
              transform: [
                { scale: imageScale },
                { translateX: imageTranslateX },
              ],
            },
          ]}
          resizeMode="cover"
        />
        <View
          style={[StyleSheet.absoluteFillObject, { backgroundColor: "rgba(0, 0, 0, 0.55)" }]}
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
          </View>

          {/* Lower — meta line (duration / progress) */}
          <View style={styles.metaArea}>
            <Text style={styles.metaText}>
              {scene.durationMin} dk
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
