import type { ImageSourcePropType } from "react-native";

import type { Scene, SceneMode } from "../data/scenes";
import { getVisualThemeForScene, type VisualTheme } from "./scene-visual-theme";

const COVER_BY_MODE: Record<SceneMode, ImageSourcePropType> = {
  flirt: require("../assets/scene-covers/cover-social.jpg"),
  work: require("../assets/scene-covers/cover-work.jpg"),
  bar: require("../assets/scene-covers/cover-bar.jpg"),
  airport: require("../assets/scene-covers/cover-travel.jpg"),
  daily: require("../assets/scene-covers/cover-daily.jpg"),
  order: require("../assets/scene-covers/cover-order.jpg"),
  ielts: require("../assets/scene-covers/cover-work.jpg"),
};

const COVER_BY_THEME: Partial<Record<VisualTheme, ImageSourcePropType>> = {
  airport: COVER_BY_MODE.airport,
  immigration: COVER_BY_MODE.airport,
  hotel: COVER_BY_MODE.airport,
  directions: COVER_BY_MODE.daily,
  transit: COVER_BY_MODE.daily,
  taxi: COVER_BY_MODE.daily,

  bar: COVER_BY_MODE.bar,
  party: COVER_BY_MODE.bar,

  cafe: COVER_BY_MODE.flirt,
  date_cafe: COVER_BY_MODE.flirt,
  dating_app: COVER_BY_MODE.flirt,
  relationship: COVER_BY_MODE.flirt,
  daily_conversation: COVER_BY_MODE.daily,
  family: COVER_BY_MODE.daily,
  hobbies: COVER_BY_MODE.daily,
  weather: COVER_BY_MODE.daily,
  self_care: COVER_BY_MODE.daily,

  restaurant: COVER_BY_MODE.order,
  fastfood: COVER_BY_MODE.order,
  bill: COVER_BY_MODE.order,
  delivery: COVER_BY_MODE.order,
  grocery: COVER_BY_MODE.order,

  work_meeting: COVER_BY_MODE.work,
  work_interview: COVER_BY_MODE.work,
  work_code: COVER_BY_MODE.work,
  work_email: COVER_BY_MODE.work,
  work_networking: COVER_BY_MODE.work,
  work_remote: COVER_BY_MODE.work,
  work_presentation: COVER_BY_MODE.work,

  ielts: COVER_BY_MODE.ielts,
  university: COVER_BY_MODE.ielts,
  writing: COVER_BY_MODE.ielts,
};

export function getSceneCoverSource(scene: Scene): ImageSourcePropType {
  return (
    COVER_BY_THEME[getVisualThemeForScene(scene)] ??
    COVER_BY_MODE[scene.mode] ??
    COVER_BY_MODE.daily
  );
}
