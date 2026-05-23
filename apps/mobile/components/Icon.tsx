// Lafla — Icon component (premium icon library wrapper).
//
// 2026-05-23 — Strategic UI upgrade: emoji'ler "Discord chat" hissi verip
// premium algıyı düşürüyordu (audit feedback). Bu component @expo/vector-icons
// kullanarak Ionicons + MaterialCommunityIcons + Feather'dan minimal,
// single-color, tactile icon'lar sağlar.
//
// Brand emoji'ler (🔥 streak = kült icon, 🇳🇱 country flag = cultural) bu
// component'ten BAĞIMSIZ kalır — sadece UI emoji'leri (🎯 📚 ✎ 🎙️ 👥 vs)
// değiştirilir.
//
// Kullanım:
//   <Icon name="target" size={20} color={tokens.brand.primary} />
//   <Icon name="streak" />        // brand alias — flame.fill
//   <Icon name="vocab" size={16} />
//
// API minimal — `name` semantic, render libi içeride seçilir. Bu sayede
// ileride başka icon set'lere geçmek tek yer değişikliği.

import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { tokens } from "../theme";

// ─── Semantic name registry ──────────────────────────────────────────
// Her semantic name → (library, glyph). Yeni icon eklerken buraya yaz.
//
// Apple SF Symbols benzeri isimlendirme — geliştiriciler kafadan tahmin
// eder. Brand-aliased name'ler (streak, vocab, premium) Lafla domain'ine
// özgü.

type IconLib = "ion" | "mc" | "feather";

interface GlyphDef {
  lib: IconLib;
  glyph: string;
}

const GLYPHS: Record<string, GlyphDef> = {
  // ─── Brand / app-domain
  streak: { lib: "mc", glyph: "fire" },
  vocab: { lib: "ion", glyph: "book-outline" },
  history: { lib: "ion", glyph: "time-outline" },
  certificate: { lib: "ion", glyph: "ribbon-outline" },
  premium: { lib: "ion", glyph: "diamond-outline" },
  band: { lib: "mc", glyph: "chart-line" },
  weakness: { lib: "ion", glyph: "analytics-outline" },
  diary: { lib: "feather", glyph: "edit-3" },
  voiceJournal: { lib: "ion", glyph: "mic-outline" },
  relationships: { lib: "ion", glyph: "people-outline" },
  referral: { lib: "ion", glyph: "gift-outline" },
  share: { lib: "feather", glyph: "share" },
  explore: { lib: "ion", glyph: "compass-outline" },

  // ─── Daily mode icons (interest chips)
  flirt: { lib: "ion", glyph: "heart-outline" },
  work: { lib: "ion", glyph: "briefcase-outline" },
  bar: { lib: "ion", glyph: "wine-outline" },
  airport: { lib: "ion", glyph: "airplane-outline" },
  daily: { lib: "ion", glyph: "cafe-outline" },
  order: { lib: "ion", glyph: "fast-food-outline" },
  ielts: { lib: "ion", glyph: "school-outline" },

  // ─── Actions
  play: { lib: "ion", glyph: "play" },
  pause: { lib: "ion", glyph: "pause" },
  stop: { lib: "ion", glyph: "stop" },
  mic: { lib: "ion", glyph: "mic" },
  micOff: { lib: "ion", glyph: "mic-off" },
  send: { lib: "ion", glyph: "send" },
  arrowRight: { lib: "ion", glyph: "arrow-forward" },
  arrowLeft: { lib: "ion", glyph: "arrow-back" },
  chevronRight: { lib: "ion", glyph: "chevron-forward" },
  close: { lib: "ion", glyph: "close" },
  checkmark: { lib: "ion", glyph: "checkmark" },
  checkmarkDone: { lib: "ion", glyph: "checkmark-done" },
  trash: { lib: "ion", glyph: "trash-outline" },

  // ─── State
  warning: { lib: "ion", glyph: "warning-outline" },
  info: { lib: "ion", glyph: "information-circle-outline" },
  star: { lib: "ion", glyph: "star" },
  starOutline: { lib: "ion", glyph: "star-outline" },

  // ─── Today / surprise
  surprise: { lib: "ion", glyph: "sparkles-outline" },
  target: { lib: "feather", glyph: "target" },
  trophy: { lib: "ion", glyph: "trophy-outline" },
  shield: { lib: "ion", glyph: "shield-checkmark-outline" },

  // ─── Navigation tabs
  today: { lib: "ion", glyph: "calendar-outline" },
  feed: { lib: "ion", glyph: "albums-outline" },
  profile: { lib: "ion", glyph: "person-outline" },
  settings: { lib: "ion", glyph: "settings-outline" },
};

export type IconName = keyof typeof GLYPHS;

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  /**
   * Accessibility label — varsa VoiceOver bunu okur. Yoksa decorative
   * sayılır (icon UI içinde label'ı var demektir).
   */
  accessibilityLabel?: string;
}

export function Icon({
  name,
  size = 20,
  color = tokens.text.primary,
  accessibilityLabel,
}: IconProps) {
  const def = GLYPHS[name];
  if (!def) {
    // Defensive: bilinmeyen icon ismi → boş render, console warn.
    if (__DEV__) {
      // eslint-disable-next-line no-console
      console.warn(`[Icon] Unknown icon name: ${name}`);
    }
    return null;
  }
  const accessibilityProps = accessibilityLabel
    ? { accessibilityLabel, accessibilityRole: "image" as const }
    : { accessibilityElementsHidden: true, importantForAccessibility: "no" as const };

  if (def.lib === "ion") {
    return (
      <Ionicons
        name={def.glyph as never}
        size={size}
        color={color}
        {...accessibilityProps}
      />
    );
  }
  if (def.lib === "mc") {
    return (
      <MaterialCommunityIcons
        name={def.glyph as never}
        size={size}
        color={color}
        {...accessibilityProps}
      />
    );
  }
  return (
    <Feather
      name={def.glyph as never}
      size={size}
      color={color}
      {...accessibilityProps}
    />
  );
}
