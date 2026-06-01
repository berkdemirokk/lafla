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

// ---------------------------------------------------------------------------
// Cinematic / Dramatic-lit / Bokeh / Neon Unsplash images — premium 3D feel.
// w=900&q=85 Retina-grade. 10 imgs per theme, 17 themes, 170 total.
// ---------------------------------------------------------------------------
const THEME_IMAGES: Record<string, string[]> = {
  taxi: [
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1476262322942-fce831d2b09a?auto=format&fit=crop&w=900&q=85",
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
    "https://images.unsplash.com/photo-1447933601403-56dc2df6e296?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?auto=format&fit=crop&w=900&q=85",
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
    "https://images.unsplash.com/photo-1542296332-2b4473fac5a3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1473872170063-eb91518455ce?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1490430657723-4d607c1503fc?auto=format&fit=crop&w=900&q=85"
  ],
  salon: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1562322140-8baeececf3d1?auto=format&fit=crop&w=900&q=85",
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
    "https://images.unsplash.com/photo-1519494026894-2b28dcc15c77?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1583912267550-d6c2f89d1999?auto=format&fit=crop&w=900&q=85",
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
    "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=85"
  ],
  ielts: [
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1523050854058-8df90110c476?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=900&q=85"
  ],
  flirt: [
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1490750967868-88aa4f44baee?auto=format&fit=crop&w=900&q=85",
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
    "https://images.unsplash.com/photo-1531535934027-667f6787da4a?auto=format&fit=crop&w=900&q=85",
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
    "https://images.unsplash.com/photo-1526256262111-361788c1c38e?auto=format&fit=crop&w=900&q=85"
  ],
  // --- NEW THEMES for uncovered skillIds ---
  emergency: [
    "https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551190822-a9ce113d0d15?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1612531822021-bab64e14fd49?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=85"
  ],
  phone: [
    "https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1556741533-f6acd647d9ae?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1596558450268-9c27524ba856?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=900&q=85"
  ],
  directions: [
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?auto=format&fit=crop&w=900&q=85"
  ]
};

// ---------------------------------------------------------------------------
// Skill → Visual theme mapping. Most-specific first, mode fallback last.
// ---------------------------------------------------------------------------
function getVisualTheme(skillId: string | undefined, mode: SceneMode): string {
  const s = (skillId || "").toLowerCase();

  // Exact sub-skill matches (most specific first)
  if (s.includes("emergency")) return "emergency";
  if (s.includes("taxi")) return "taxi";
  if (s.includes("transport") || s.includes("logistics")) return "taxi";
  if (s.includes("directions")) return "directions";
  if (s.includes("gym") || s.includes("workout")) return "gym";
  if (s.includes("cafe") || s.includes("coffee")) return "cafe";
  if (s.includes("fastfood") || s.includes("restaurant") || s.includes("bill") || s.includes("tipping") || s.includes("complaint") || s.includes("custom")) return "restaurant";
  if (s.includes("delivery") || s.includes("grocery")) return "shopping";
  if (s.includes("bar") || s.includes("pub") || s.includes("approach")) return "bar";
  if (s.includes("airport") || s.includes("flight") || s.includes("travel")) return "airport";
  if (s.includes("salon") || s.includes("barber") || s.includes("hair")) return "salon";
  if (s.includes("hotel") || s.includes("housing") || s.includes("hostel")) return "hotel";
  if (s.includes("pharmacy") || s.includes("health") || s.includes("medicine")) return "pharmacy";
  if (s.includes("shopping") || s.includes("store")) return "shopping";
  if (s.includes("phone") || s.includes("tech_support") || s.includes("service")) return "phone";
  if (s.includes("ielts")) return "ielts";
  if (s.includes("flirt") || s.includes("date") || s.includes("banter") || s.includes("intimacy") || s.includes("rejection") || s.includes("recovery")) return "flirt";
  if (s.includes("work") || s.includes("meeting") || s.includes("career") || s.includes("professional") || s.includes("slack") || s.includes("email") || s.includes("interview") || s.includes("standup") || s.includes("disagree") || s.includes("feedback") || s.includes("promotion") || s.includes("networking") || s.includes("codereview") || s.includes("1on1") || s.includes("remote") || s.includes("hire")) return "work";
  if (s.includes("bank")) return "daily";
  if (s.includes("smalltalk") || s.includes("social")) return "daily";
  if (s.includes("story")) return "daily";

  // Fallback: mode → theme
  if (mode === "flirt") return "flirt";
  if (mode === "work") return "work";
  if (mode === "bar") return "bar";
  if (mode === "airport") return "airport";
  if (mode === "order") return "restaurant";
  if (mode === "ielts") return "ielts";
  if (mode === "daily") return "daily";

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
        {!imgFailed ? (
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
            onError={() => setImgFailed(true)}
          />
        ) : (
          /* BUG-7 FIX: gradient fallback when image fails to load (offline) */
          <View style={[StyleSheet.absoluteFillObject, { backgroundColor: accent.fill, opacity: 0.8 }]} />
        )}
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
