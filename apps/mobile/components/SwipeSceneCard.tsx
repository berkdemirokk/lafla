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
import { getSceneVisualImage } from "../lib/scene-visual-theme";
import { tokens } from "../theme";
import AnimatedGradientOverlay from "./AnimatedGradientOverlay";
import FloatingParticles from "./FloatingParticles";

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

// ---------------------------------------------------------------------------
// Cinematic / Dramatic-lit / Bokeh / Neon Unsplash images — premium feel.
// w=1200&q=90 Retina+-grade. 8-12 imgs per theme, 45+ themes, ~450 total.
// 2026-06-02 — Massive expansion: 17 → 45+ sub-themes for scene-specific
// visuals. Each theme is curated for the Neon Noir aesthetic (moody lighting,
// bokeh, dramatic contrasts, cinematic framing).
// ---------------------------------------------------------------------------
const IMG = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=90`;

const THEME_IMAGES: Record<string, string[]> = {
  // ── TRANSPORT ──────────────────────────────────────────────────────────
  taxi: [
<<<<<<< HEAD
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=900&q=85"
  ],
  gym: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=85"
  ],
  cafe: [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=900&q=85"
  ],
  restaurant: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=85"
  ],
  bar: [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=85"
  ],
  airport: [
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&w=900&q=85"
  ],
  salon: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85"
  ],
  hotel: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=900&q=85"
  ],
  pharmacy: [
    "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=85"
  ],
  shopping: [
    "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=85"
  ],
  ielts: [
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=85"
  ],
  flirt: [
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1475688621402-4257c812d6db?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=85"
  ],
  work: [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85"
  ],
  daily: [
    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1515005318787-cc68052b38f3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1515005318787-cc68052b38f3?auto=format&fit=crop&w=900&q=85"
  ],
  // --- NEW THEMES for uncovered skillIds ---
  emergency: [
    "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=85"
  ],
  phone: [
    "https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596558450268-9c27524ba856?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=900&q=85"
=======
    IMG("1619767886558-efdc259cde1a"),
    IMG("1503376780353-7e6692767b70"),
    IMG("1552519507-da3b142c6e3d"),
    IMG("1549317661-bd32c8ce0afe"),
    IMG("1504215680853-026ed2a45def"),
    IMG("1558618666-fcd25c85f1aa"),
    IMG("1544620347-c4fd4a3d5957"),
    IMG("1517524008697-84bbe3c3fd98"),
>>>>>>> 98dd99d (feat(mobile): add animated cinematic background visual effects to SwipeSceneCard)
  ],
  directions: [
    IMG("1524661135-423995f22d0b"),
    IMG("1476900966873-ab290e38e3f7"),
    IMG("1519501025264-65ba15a82390"),
    IMG("1480714378408-67cf0d13bc1b"),
    IMG("1444723121867-7a241cacace9"),
    IMG("1451187580459-43490279c0fa"),
    IMG("1513635269975-59663e0ac1ad"),
    IMG("1506905925346-21bda4d32df4"),
  ],

  // ── GYM / FITNESS ─────────────────────────────────────────────────────
  gym: [
    IMG("1616279969096-54b228f5f103"),
    IMG("1549719386-74dfcbf7dbed"),
    IMG("1605296867304-46d5465a13f1"),
    IMG("1534438327276-14e5300c3a48"),
    IMG("1526506118085-60ce8714f8c5"),
    IMG("1583454110551-21f2fa2afe61"),
    IMG("1571902943202-507ec2618e8f"),
    IMG("1540497077202-7c8a3999166f"),
  ],

  // ── CAFE / COFFEE ─────────────────────────────────────────────────────
  cafe: [
    IMG("1618220179428-22790b461013"),
    IMG("1509042239860-f550ce710b93"),
    IMG("1559056199-641a0ac8b55e"),
    IMG("1541167760496-1628856ab772"),
    IMG("1495474472287-4d71bcdd2085"),
    IMG("1559925393-8be0ec4767c8"),
    IMG("1501339847302-ac426a4a7cbb"),
    IMG("1442512595331-e89e73853f31"),
    IMG("1514432324607-a09d9b4aefda"),
  ],

  // ── RESTAURANT / DINING ───────────────────────────────────────────────
  restaurant: [
    IMG("1615485290382-441e4d049cb5"),
    IMG("1606787366850-de6330128bfc"),
    IMG("1550966871-3ed3cdb5ed0c"),
    IMG("1517248135467-4c7edcad34c4"),
    IMG("1414235077428-338989a2e8c0"),
    IMG("1559339352-11d035aa65de"),
    IMG("1466978913421-dad2ebd01d17"),
    IMG("1424847651672-bf20a4b0982b"),
  ],
  // Fine dining — candlelit, close-up plated food, elegant ambience
  "fine-dining": [
    IMG("1559339352-11d035aa65de"),
    IMG("1414235077428-338989a2e8c0"),
    IMG("1550966871-3ed3cdb5ed0c"),
    IMG("1533777857889-4be7c70b33f7"),
    IMG("1544025162-d76694265947"),
    IMG("1551218808-94e220e084d2"),
    IMG("1560053608-13721e0d69da"),
    IMG("1470337458703-46ad1756a187"),
  ],
  // Fast food / Drive-thru — neon-lit fast food, burgers, fries
  "fast-food": [
    IMG("1561758033-d89a9ad46330"),
    IMG("1568901346-d500f8ea82a3"),
    IMG("1565299507177-b0ac66763828"),
    IMG("1571091718767-18b5b1457add"),
    IMG("1550547660-d9862179b72e"),
    IMG("1606755962773-d324e0a13086"),
    IMG("1513104890138-7c749659a591"),
    IMG("1594212699903-ec8a3eca50f5"),
  ],
  // Sushi / Asian cuisine
  sushi: [
    IMG("1579584425555-c3ce17fd4351"),
    IMG("1553621042-f6e147245754"),
    IMG("1580822184713-fc5400e7fe10"),
    IMG("1611143669185-af224c5e3252"),
    IMG("1617196034796-73dfa7b1fd56"),
    IMG("1540648639573-8c848de23f0a"),
    IMG("1559410545-0bdcd187e0a6"),
    IMG("1504674900247-0877df9cc836"),
  ],
  // Brunch / Breakfast
  brunch: [
    IMG("1504754524776-8f4f37790ca0"),
    IMG("1525351484163-7529414344d8"),
    IMG("1533089860892-a7c6f0a88666"),
    IMG("1495214783159-3503fd1b572d"),
    IMG("1484723091739-30a097e8f929"),
    IMG("1506084868230-bb9d95c24759"),
    IMG("1476718406336-bb5a9690ee2a"),
    IMG("1528207776546-365bb710ee93"),
  ],

  // ── BAR / PUB ─────────────────────────────────────────────────────────
  bar: [
    IMG("1574096079513-d8259312b785"),
    IMG("1514362545857-3bc16c4c7d1b"),
    IMG("1551024709-8f23befc6f87"),
    IMG("1572116469696-31de0f17cc34"),
    IMG("1536935338788-846bb9981813"),
    IMG("1551024601-bec78aea704b"),
    IMG("1470337458703-46ad1756a187"),
    IMG("1566417713940-fe7c737a9ef2"),
  ],
  // Cocktail close-ups — drinks, bartender action, ice, neon reflections
  cocktail: [
    IMG("1514362545857-3bc16c4c7d1b"),
    IMG("1551024709-8f23befc6f87"),
    IMG("1536935338788-846bb9981813"),
    IMG("1551024601-bec78aea704b"),
    IMG("1560512823-829485b8bf24"),
    IMG("1587223962217-f4c4c9603f26"),
    IMG("1609951651556-5334e2706168"),
    IMG("1582106245687-cbb466a9f07f"),
  ],
  // Nightclub — neon, crowd, dance floor, DJ, lasers
  nightclub: [
    IMG("1574391884720-bbc3740c59d1"),
    IMG("1566737236500-c8ac43014a67"),
    IMG("1571204829887-3b8d69e4094d"),
    IMG("1545128485-c400e7702712"),
    IMG("1504196606672-aef5c9cefc92"),
    IMG("1516450360452-9258136e97a1"),
    IMG("1598387993281-d5629af2a7c8"),
    IMG("1567942712661-82b9b407abbf"),
  ],
  // Rooftop bar — city skyline, sunset, lounge, panoramic
  "rooftop-bar": [
    IMG("1470337458703-46ad1756a187"),
    IMG("1517457373958-b7bdd4587205"),
    IMG("1514933651103-005eec06c04b"),
    IMG("1551882547-ff40c63fe5fa"),
    IMG("1507003211169-0a1dd7228f2d"),
    IMG("1566073771259-6a8506099945"),
    IMG("1519046904884-53103b34b206"),
    IMG("1444210971048-6130cf0c46cf"),
  ],

  // ── AIRPORT / TRAVEL ──────────────────────────────────────────────────
  airport: [
    IMG("1569154941061-e231b4725ef1"),
    IMG("1530521954074-e64f6810b32d"),
    IMG("1621451537084-482c73073a0f"),
    IMG("1526778548025-fa2f459cd5c1"),
    IMG("1542296332-2e4473faf563"),
    IMG("1530789253388-582c481c54b0"),
    IMG("1436491865332-7a61a109cc05"),
    IMG("1464037866556-6812c9d1c72e"),
  ],
  // Boarding gate — gate signs, runway views, waiting area
  "boarding-gate": [
    IMG("1436491865332-7a61a109cc05"),
    IMG("1569154941061-e231b4725ef1"),
    IMG("1542296332-2e4473faf563"),
    IMG("1556388158-158ea5ccacbd"),
    IMG("1530521954074-e64f6810b32d"),
    IMG("1488085061387-422e29b40080"),
    IMG("1517400508447-f8dd518b86db"),
    IMG("1540339832862-474599807836"),
  ],
  // Passport control / Customs — immigration, passport close-up
  "passport-control": [
    IMG("1452421822248-d4c2b47f0c81"),
    IMG("1469854523086-cc02fe5d8800"),
    IMG("1528164344705-47542687000d"),
    IMG("1501426026826-31c667bdf23d"),
    IMG("1526778548025-fa2f459cd5c1"),
    IMG("1540339832862-474599807836"),
    IMG("1500530855697-b586d89ba3ee"),
    IMG("1488646953014-85cb44e25828"),
  ],
  // Duty free / Airport shopping
  "duty-free": [
    IMG("1607082348824-0a96f2a4b9da"),
    IMG("1481437156560-3205f6a55735"),
    IMG("1556742049-0cfed4f6a45d"),
    IMG("1580915411954-282cb1b0d780"),
    IMG("1555529669-e69e7aa0ba9a"),
    IMG("1441986300917-64674bd600d8"),
    IMG("1557821552-17105176677c"),
    IMG("1567401893414-76b7b1e5a7a5"),
  ],

  // ── SALON / BARBER ────────────────────────────────────────────────────
  salon: [
    IMG("1600948836101-f9ffda59d250"),
    IMG("1582095133179-bfd08e2fc6b3"),
    IMG("1503951914875-452162b0f3f1"),
    IMG("1585747860715-2ba37e788b70"),
    IMG("1622288432450-277d0fef5ed6"),
    IMG("1521590832167-7228fcaaad8e"),
    IMG("1560066984-138dadb4c035"),
    IMG("1599351431613-18ef1fdd27e1"),
  ],

  // ── HOTEL / LODGING ───────────────────────────────────────────────────
  hotel: [
    IMG("1618773928121-c32242e63f39"),
    IMG("1590490360182-c33d57733427"),
    IMG("1566073771259-6a8506099945"),
    IMG("1542314831-068cd1dbfeeb"),
    IMG("1520250497591-112f2f40a3f4"),
    IMG("1551882547-ff40c63fe5fa"),
    IMG("1564501049412-61c2a3083791"),
    IMG("1582719508461-905c673771f1"),
  ],

  // ── PHARMACY / HEALTH ─────────────────────────────────────────────────
  pharmacy: [
    IMG("1584308666744-24d5c474f2ae"),
    IMG("1576091160550-2173dba999ef"),
    IMG("1585435557343-3b092031a831"),
    IMG("1532187863486-abf9dbad1b69"),
    IMG("1471864190281-a93a3070b6de"),
    IMG("1530026405186-ed1f139313f8"),
    IMG("1579684385127-1ef15d508118"),
    IMG("1559757148-5c350d0d3c56"),
  ],
  // Doctor / Hospital visit
  doctor: [
    IMG("1579684385127-1ef15d508118"),
    IMG("1504439468489-c8920d796a29"),
    IMG("1538108149393-fbbd81895907"),
    IMG("1551076805-e1869033e561"),
    IMG("1559757148-5c350d0d3c56"),
    IMG("1519494026892-80bbd2d6fd0d"),
    IMG("1584308666744-24d5c474f2ae"),
    IMG("1576091160550-2173dba999ef"),
  ],

  // ── SHOPPING ──────────────────────────────────────────────────────────
  shopping: [
    IMG("1607082348824-0a96f2a4b9da"),
    IMG("1481437156560-3205f6a55735"),
    IMG("1555529669-e69e7aa0ba9a"),
    IMG("1556742049-0cfed4f6a45d"),
    IMG("1441986300917-64674bd600d8"),
    IMG("1557821552-17105176677c"),
    IMG("1580915411954-282cb1b0d780"),
    IMG("1567401893414-76b7b1e5a7a5"),
  ],
  // Supermarket / Grocery
  supermarket: [
    IMG("1604719312566-8912e9227c6a"),
    IMG("1542838132-92c53300491e"),
    IMG("1578916171728-46686eac8d58"),
    IMG("1534723452862-4c874018d66d"),
    IMG("1543168256-418811576931"),
    IMG("1488459716781-31db52582fe9"),
    IMG("1579113800032-c38bd7635818"),
    IMG("1550989460-0adf9ea622e2"),
  ],
  // Food delivery / Food truck
  "food-delivery": [
    IMG("1526367790999-0150786686a2"),
    IMG("1565123409695-7b5ef63a2efb"),
    IMG("1567521464027-f127ff144326"),
    IMG("1504674900247-0877df9cc836"),
    IMG("1555939594-58d7cb561ad1"),
    IMG("1504754524776-8f4f37790ca0"),
    IMG("1561758033-d89a9ad46330"),
    IMG("1565299624946-b28f40a0ae38"),
  ],

  // ── IELTS / STUDY ─────────────────────────────────────────────────────
  ielts: [
    IMG("1544716278-ca5e3f4abd8c"),
    IMG("1512820790803-83ca734da794"),
    IMG("1495446815901-a7297e633e8d"),
    IMG("1456324504439-367cee3b3c32"),
    IMG("1434030216411-0b793f4b4173"),
    IMG("1501504905252-473c47e087f8"),
    IMG("1481627834876-b7833e8f5570"),
    IMG("1497633762265-9d179a990aa6"),
  ],
  // Study desk / Library
  "study-desk": [
    IMG("1481627834876-b7833e8f5570"),
    IMG("1497633762265-9d179a990aa6"),
    IMG("1507003211169-0a1dd7228f2d"),
    IMG("1456324504439-367cee3b3c32"),
    IMG("1434030216411-0b793f4b4173"),
    IMG("1512820790803-83ca734da794"),
    IMG("1544716278-ca5e3f4abd8c"),
    IMG("1501504905252-473c47e087f8"),
  ],
  // Exam hall — test, auditorium
  "exam-hall": [
    IMG("1434030216411-0b793f4b4173"),
    IMG("1497633762265-9d179a990aa6"),
    IMG("1523050854058-8df90110c8f1"),
    IMG("1524178232363-1fb2b075b655"),
    IMG("1509062522246-3755977927d7"),
    IMG("1580582932707-520aed937571"),
    IMG("1544716278-ca5e3f4abd8c"),
    IMG("1501504905252-473c47e087f8"),
  ],

  // ── FLIRT / DATING ────────────────────────────────────────────────────
  flirt: [
    IMG("1620641788421-7a1c342ea42e"),
    IMG("1518199266791-5375a83190b7"),
    IMG("1516589178581-6cd7833ae3b2"),
    IMG("1529626455594-4ff0802cfb7e"),
    IMG("1618005198919-d3d4b5a92ead"),
    IMG("1579546929662-711aa81148cf"),
    IMG("1557683316-973673baf926"),
    IMG("1523585255-36e5b2eb5987"),
  ],
  // Date night — candlelit dinner, romantic setting
  "date-night": [
    IMG("1529543544282-ea7407407c4c"),
    IMG("1470337458703-46ad1756a187"),
    IMG("1551882547-ff40c63fe5fa"),
    IMG("1517457373958-b7bdd4587205"),
    IMG("1507003211169-0a1dd7228f2d"),
    IMG("1559339352-11d035aa65de"),
    IMG("1533777857889-4be7c70b33f7"),
    IMG("1544025162-d76694265947"),
  ],
  // Texting / Digital flirting — phone, screen glow, night
  texting: [
    IMG("1512446816042-444d641267d4"),
    IMG("1523206489230-c012c64b2b48"),
    IMG("1511707171634-5f897ff02aa9"),
    IMG("1586953208448-b95a79798f07"),
    IMG("1534536281715-e28d76689b4d"),
    IMG("1556656793-08538906a9f8"),
    IMG("1558618666-fcd25c85f1aa"),
    IMG("1544620347-c4fd4a3d5957"),
  ],
  // Park / Outdoor date — sunset, greenery, bench
  park: [
    IMG("1506905925346-21bda4d32df4"),
    IMG("1519046904884-53103b34b206"),
    IMG("1441974231531-c6227db76b6e"),
    IMG("1518495973542-4542c06a5843"),
    IMG("1504198453319-5ce911bafcde"),
    IMG("1551279880-03041531e184"),
    IMG("1516589178581-6cd7833ae3b2"),
    IMG("1444723121867-7a241cacace9"),
  ],

  // ── WORK / PROFESSIONAL ───────────────────────────────────────────────
  work: [
    IMG("1618005182384-a83a8bd57fbe"),
    IMG("1634017839464-5c339ebe3cb4"),
    IMG("1497215842964-222b430dc094"),
    IMG("1504384308090-c894fdcc538d"),
    IMG("1633356122544-f134324a6cee"),
    IMG("1612287230202-1ff1d85d1bdf"),
    IMG("1521737711867-e3b97375f902"),
    IMG("1560179707-f14e90ef3623"),
  ],
  // Job interview — meeting room, professional setting
  interview: [
    IMG("1560179707-f14e90ef3623"),
    IMG("1521737711867-e3b97375f902"),
    IMG("1573497019418-b400bb3ab074"),
    IMG("1553877522-43269d4ea984"),
    IMG("1568992687947-868a62a9f521"),
    IMG("1504384308090-c894fdcc538d"),
    IMG("1573164713988-8665fc963095"),
    IMG("1497215842964-222b430dc094"),
  ],
  // Presentation / Stage — spotlight, audience, podium
  presentation: [
    IMG("1540575467063-178a50e2fd60"),
    IMG("1475721027785-f74eccf877e2"),
    IMG("1505373877841-8d25f7d46678"),
    IMG("1524178232363-1fb2b075b655"),
    IMG("1560439513-4e36d2b75967"),
    IMG("1523050854058-8df90110c8f1"),
    IMG("1558618666-fcd25c85f1aa"),
    IMG("1573497019418-b400bb3ab074"),
  ],
  // Networking / Conference — crowd, lanyard, handshake
  networking: [
    IMG("1540575467063-178a50e2fd60"),
    IMG("1475721027785-f74eccf877e2"),
    IMG("1505373877841-8d25f7d46678"),
    IMG("1560439513-4e36d2b75967"),
    IMG("1573164713988-8665fc963095"),
    IMG("1511578314322-379afb476865"),
    IMG("1528605248644-14dd04022da1"),
    IMG("1515187029135-18ee286d815b"),
  ],
  // Coworking / Startup office — open plan, laptops, whiteboard
  coworking: [
    IMG("1497366216548-37526070297c"),
    IMG("1497366811353-6870744d04b2"),
    IMG("1504384308090-c894fdcc538d"),
    IMG("1521737711867-e3b97375f902"),
    IMG("1553877522-43269d4ea984"),
    IMG("1568992687947-868a62a9f521"),
    IMG("1497215842964-222b430dc094"),
    IMG("1573164713988-8665fc963095"),
  ],
  // Meeting room — conference table, video call, whiteboard
  "meeting-room": [
    IMG("1573497019418-b400bb3ab074"),
    IMG("1553877522-43269d4ea984"),
    IMG("1560179707-f14e90ef3623"),
    IMG("1521737711867-e3b97375f902"),
    IMG("1568992687947-868a62a9f521"),
    IMG("1497215842964-222b430dc094"),
    IMG("1497366216548-37526070297c"),
    IMG("1504384308090-c894fdcc538d"),
  ],
  // Email / Slack / Digital comms — screen, keyboard, notifications
  "digital-comms": [
    IMG("1512446816042-444d641267d4"),
    IMG("1523206489230-c012c64b2b48"),
    IMG("1511707171634-5f897ff02aa9"),
    IMG("1534536281715-e28d76689b4d"),
    IMG("1556656793-08538906a9f8"),
    IMG("1558618666-fcd25c85f1aa"),
    IMG("1544620347-c4fd4a3d5957"),
    IMG("1586953208448-b95a79798f07"),
  ],

  // ── DAILY LIFE ────────────────────────────────────────────────────────
  daily: [
    IMG("1518780664697-55e3ad937233"),
    IMG("1512917774080-9991f1c4c750"),
    IMG("1477959858617-67f85cf4f1df"),
    IMG("1515005318787-cc68052b38f3"),
    IMG("1449824913935-59a10b8d2000"),
    IMG("1448375240586-882707db888b"),
    IMG("1614850523459-c2f4c699c52e"),
    IMG("1513635269975-59663e0ac1ad"),
  ],
  // Morning routine — sunrise, coffee, bathroom, alarm
  "morning-routine": [
    IMG("1504754524776-8f4f37790ca0"),
    IMG("1495214783159-3503fd1b572d"),
    IMG("1484723091739-30a097e8f929"),
    IMG("1506084868230-bb9d95c24759"),
    IMG("1533089860892-a7c6f0a88666"),
    IMG("1525351484163-7529414344d8"),
    IMG("1476718406336-bb5a9690ee2a"),
    IMG("1528207776546-365bb710ee93"),
  ],
  // Neighborhood / Walking — streets, storefronts, urban life
  neighborhood: [
    IMG("1449824913935-59a10b8d2000"),
    IMG("1477959858617-67f85cf4f1df"),
    IMG("1519501025264-65ba15a82390"),
    IMG("1480714378408-67cf0d13bc1b"),
    IMG("1513635269975-59663e0ac1ad"),
    IMG("1506905925346-21bda4d32df4"),
    IMG("1444723121867-7a241cacace9"),
    IMG("1515005318787-cc68052b38f3"),
  ],
  // Movie night / Entertainment — cinema, popcorn, screen
  "movie-night": [
    IMG("1489599849927-2ee91cede3ba"),
    IMG("1517604931442-7e0c8ed2963c"),
    IMG("1536440136628-849c177e76a1"),
    IMG("1478720568477-152d9b164e26"),
    IMG("1585647347483-22b66260dfff"),
    IMG("1513106580091-1d82408b8cd6"),
    IMG("1440404653325-ab127d49abc1"),
    IMG("1542204165-65bf26472b9b"),
  ],
  // Beach / Ocean — sunset, waves, palm trees
  beach: [
    IMG("1507525428034-b723cf961d3e"),
    IMG("1519046904884-53103b34b206"),
    IMG("1506929562872-bb421503ef21"),
    IMG("1520454974749-611b7248ffdb"),
    IMG("1473116763249-2faaef81ccda"),
    IMG("1500530855697-b586d89ba3ee"),
    IMG("1519999482648-25049ddd37b1"),
    IMG("1468413253725-0d5181091126"),
  ],
  // Concert / Music — stage, crowd, lights
  concert: [
    IMG("1574391884720-bbc3740c59d1"),
    IMG("1504196606672-aef5c9cefc92"),
    IMG("1516450360452-9258136e97a1"),
    IMG("1459749411175-04bf5292ceea"),
    IMG("1506157786151-b8491531f063"),
    IMG("1429962714451-bb934ecdc4ec"),
    IMG("1540039155733-5bb30b53aa14"),
    IMG("1598387993281-d5629af2a7c8"),
  ],
  // Road trip / Driving — open road, car interior, scenic drive
  "road-trip": [
    IMG("1469854523086-cc02fe5d8800"),
    IMG("1549317661-bd32c8ce0afe"),
    IMG("1504215680853-026ed2a45def"),
    IMG("1519046904884-53103b34b206"),
    IMG("1500530855697-b586d89ba3ee"),
    IMG("1544620347-c4fd4a3d5957"),
    IMG("1517524008697-84bbe3c3fd98"),
    IMG("1452421822248-d4c2b47f0c81"),
  ],
  // Library / Bookstore — bookshelves, reading nook, ambient lighting
  library: [
    IMG("1481627834876-b7833e8f5570"),
    IMG("1512820790803-83ca734da794"),
    IMG("1495446815901-a7297e633e8d"),
    IMG("1507003211169-0a1dd7228f2d"),
    IMG("1544716278-ca5e3f4abd8c"),
    IMG("1501504905252-473c47e087f8"),
    IMG("1456324504439-367cee3b3c32"),
    IMG("1497633762265-9d179a990aa6"),
  ],
  // Tech support / Computer — screen, keyboard, cables
  "tech-support": [
    IMG("1518770660439-4636190af475"),
    IMG("1512446816042-444d641267d4"),
    IMG("1523206489230-c012c64b2b48"),
    IMG("1511707171634-5f897ff02aa9"),
    IMG("1534536281715-e28d76689b4d"),
    IMG("1556656793-08538906a9f8"),
    IMG("1633356122544-f134324a6cee"),
    IMG("1612287230202-1ff1d85d1bdf"),
  ],

  // ── EMERGENCY ─────────────────────────────────────────────────────────
  emergency: [
    IMG("1587745416684-47953f16f02f"),
    IMG("1516826957135-700dedea698c"),
    IMG("1504439468489-c8920d796a29"),
    IMG("1582719471384-894fbb16e074"),
    IMG("1538108149393-fbbd81895907"),
    IMG("1551076805-e1869033e561"),
    IMG("1559757148-5c350d0d3c56"),
    IMG("1519494026892-80bbd2d6fd0d"),
  ],

  // ── PHONE / DIGITAL ───────────────────────────────────────────────────
  phone: [
    IMG("1512446816042-444d641267d4"),
    IMG("1523206489230-c012c64b2b48"),
    IMG("1511707171634-5f897ff02aa9"),
    IMG("1586953208448-b95a79798f07"),
    IMG("1534536281715-e28d76689b4d"),
    IMG("1556656793-08538906a9f8"),
    IMG("1558618666-fcd25c85f1aa"),
    IMG("1544620347-c4fd4a3d5957"),
  ],
};

// ---------------------------------------------------------------------------
// Deterministic visual asset selection. Theme matching lives in lib so it can
// be tested without importing React Native.
// ---------------------------------------------------------------------------
function getDeterministicImage(scene: Scene): string {
  return getSceneVisualImage(scene);
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
  // BUG-7 FIX: fallback when Unsplash images fail to load (offline/network)
  const [imgFailed, setImgFailed] = useState(false);
  // Reset on scene change so recycled cards retry
  useEffect(() => { setImgFailed(false); }, [scene.id]);
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

    // 12-second timing loop for slow cinematic breathing
    const loop = Animated.loop(
      Animated.timing(kenBurnsAnim, {
        toValue: 1,
        duration: 12000,
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
    outputRange: [1.25, 1.15, 1.25],
    extrapolate: "clamp",
  });
  const imageTranslateX = translateX.interpolate({
    inputRange: [-SCREEN.width, 0, SCREEN.width],
    outputRange: [SCREEN.width * 0.12, 0, -SCREEN.width * 0.12],
    extrapolate: "clamp",
  });

  // Ken Burns interpolations
  const kbScale = kenBurnsAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.08, 1],
  });
  const kbTranslateX = kenBurnsAnim.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, -8, 8, -8, 0],
  });
  const kbTranslateY = kenBurnsAnim.interpolate({
    inputRange: [0, 0.33, 0.66, 1],
    outputRange: [0, -6, 6, 0],
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
        {!imgFailed ? (
          <Animated.Image
            source={{ uri: getDeterministicImage(scene) }}
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
            resizeMode="cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          /* BUG-7 FIX: gradient fallback when image fails to load (offline) */
          <View style={[StyleSheet.absoluteFillObject, { backgroundColor: accent.fill, opacity: 0.8 }]} />
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
