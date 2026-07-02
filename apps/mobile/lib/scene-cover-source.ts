import type { ImageSourcePropType } from "react-native";

import type { Scene, SceneMode } from "../data/scenes";
import {
  getSceneVisualImage,
  getVisualThemeForScene,
  type VisualTheme,
} from "./scene-visual-theme";

const COVER_BY_MODE: Record<SceneMode, ImageSourcePropType | null> = {
  flirt: require("../assets/scene-covers/cover-social.jpg"),
  work: require("../assets/scene-covers/cover-work.jpg"),
  bar: require("../assets/scene-covers/cover-bar.jpg"),
  airport: require("../assets/scene-covers/cover-travel.jpg"),
  daily: require("../assets/scene-covers/cover-daily.jpg"),
  order: require("../assets/scene-covers/cover-order.jpg"),
  // IELTS needs study/exam context. Using the generic work meeting image here
  // makes the product feel careless, so remote primary failure falls through to
  // the branded gradient instead of showing an unrelated office scene.
  ielts: null,
};

const modeCover = (mode: Exclude<SceneMode, "ielts">): ImageSourcePropType =>
  COVER_BY_MODE[mode] as ImageSourcePropType;

const LOCAL_FALLBACK_BY_THEME: Partial<Record<VisualTheme, ImageSourcePropType>> = {
  airport: modeCover("airport"),
  immigration: modeCover("airport"),
  hotel: modeCover("airport"),
  directions: modeCover("daily"),
  transit: modeCover("daily"),
  taxi: modeCover("daily"),

  bar: modeCover("bar"),
  party: modeCover("bar"),

  cafe: modeCover("order"),
  date_cafe: modeCover("flirt"),
  dating_app: modeCover("flirt"),
  relationship: modeCover("flirt"),
  daily_conversation: modeCover("daily"),
  family: modeCover("daily"),
  hobbies: modeCover("daily"),
  weather: modeCover("daily"),
  self_care: modeCover("daily"),

  restaurant: modeCover("order"),
  fastfood: modeCover("order"),
  bill: modeCover("order"),
  delivery: modeCover("order"),
  grocery: modeCover("order"),

  work_meeting: modeCover("work"),
  work_interview: modeCover("work"),
  work_code: modeCover("work"),
  work_email: modeCover("work"),
  work_networking: modeCover("work"),
  work_remote: modeCover("work"),
  work_presentation: modeCover("work"),
};

const VISUAL_THEME_LABEL_TR: Record<VisualTheme, string> = {
  airport: "Havaalanı",
  immigration: "Pasaport kontrolü",
  bar: "Bar",
  cafe: "Kafe",
  restaurant: "Restoran",
  fastfood: "Fast food",
  bill: "Hesap/ödeme",
  delivery: "Teslimat",
  grocery: "Market",
  taxi: "Taksi",
  transit: "Toplu taşıma",
  directions: "Yol tarifi",
  hotel: "Otel",
  housing: "Ev/kira",
  pharmacy: "Eczane",
  doctor: "Doktor",
  dentist: "Dişçi",
  optician: "Gözlükçü",
  vet: "Veteriner",
  emergency: "Acil durum",
  shopping: "Alışveriş",
  bank: "Banka",
  service_counter: "Resmî işlem",
  package: "Kargo",
  library: "Kütüphane",
  worship: "İbadet yeri",
  gym: "Spor salonu",
  salon: "Kuaför",
  phone: "Telefon",
  tech_support: "Teknik destek",
  ielts: "IELTS",
  university: "Üniversite",
  writing: "Writing",
  dating_app: "Dating app",
  date_cafe: "Buluşma",
  relationship: "İlişki",
  party: "Parti",
  work_meeting: "Toplantı",
  work_interview: "Mülakat",
  work_code: "Code review",
  work_email: "E-posta",
  work_networking: "Networking",
  work_remote: "Remote iş",
  work_presentation: "Sunum",
  daily_conversation: "Günlük sohbet",
  family: "Aile",
  hobbies: "Hobi",
  weather: "Hava durumu",
  self_care: "Kişisel bakım",
};

export interface SceneCoverSpec {
  /** Specific, deterministic image selected from the scene's semantic theme. */
  source: ImageSourcePropType;
  /** Local fallback shown only when the remote image cannot load. */
  fallbackSource?: ImageSourcePropType;
  /** Testable semantic bucket used by the visual QA contract. */
  theme: VisualTheme;
  /** Short Turkish context label shown in the card metadata. */
  label: string;
}

function getLocalFallbackCover(
  theme: VisualTheme,
  mode: SceneMode,
): ImageSourcePropType | undefined {
  return LOCAL_FALLBACK_BY_THEME[theme] ?? COVER_BY_MODE[mode] ?? undefined;
}

export function getSceneCoverSpec(scene: Scene): SceneCoverSpec {
  const theme = getVisualThemeForScene(scene);
  return {
    source: { uri: getSceneVisualImage(scene) },
    fallbackSource: getLocalFallbackCover(theme, scene.mode),
    theme,
    label: VISUAL_THEME_LABEL_TR[theme],
  };
}

export function getSceneCoverSource(scene: Scene): ImageSourcePropType {
  return getSceneCoverSpec(scene).source;
}
