// Lafla — Mobile Design Tokens
// Mirrors mockups/styles.css so design stays consistent.

import { Platform } from "react-native";

export const tokens = {
  bg: {
    app: "#0a0a0a",
    surface: "#141414",
    card: "#1f1f1f",
    elevated: "#2a2a2a",
    input: "#2a2a2a",
  },
  border: {
    default: "#2a2a2a",
    strong: "#3a3a3a",
  },
  text: {
    primary: "#ffffff",
    secondary: "#a0a0a0",
    tertiary: "#666666",
  },
  brand: {
    accent: "#FF6B35",          // Sipariş mode + default CTA
    accentSoft: "rgba(255, 107, 53, 0.15)",
  },
  semantic: {
    success: "#4ADE80",
    successSoft: "rgba(74, 222, 128, 0.15)",
    error: "#EF4444",
    warning: "#FBBF24",
  },
  radius: {
    card: 16,
    button: 16,
    input: 14,
    phone: 48,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  font: {
    sans: Platform.select({
      ios: "System",
      android: "Roboto",
      default: "System",
    }),
  },
  weight: {
    regular: "400" as const,
    medium: "500" as const,
    semibold: "600" as const,
    bold: "700" as const,
    extrabold: "800" as const,
    black: "900" as const,
  },
} as const;

export type Tokens = typeof tokens;
