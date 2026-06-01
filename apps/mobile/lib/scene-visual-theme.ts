import type { Scene, SceneMode } from "../data/scenes";

export type VisualTheme =
  | "taxi"
  | "gym"
  | "cafe"
  | "restaurant"
  | "bar"
  | "airport"
  | "salon"
  | "hotel"
  | "pharmacy"
  | "shopping"
  | "ielts"
  | "flirt"
  | "work"
  | "daily"
  | "emergency"
  | "phone"
  | "directions";

type VisualScene = Pick<Scene, "mode" | "skillId"> &
  Partial<Pick<Scene, "title" | "description">>;

const FALLBACK_BY_MODE: Record<SceneMode, VisualTheme> = {
  flirt: "flirt",
  work: "work",
  bar: "bar",
  airport: "airport",
  daily: "daily",
  order: "restaurant",
  ielts: "ielts",
};

function hasAny(value: string, needles: readonly string[]): boolean {
  return needles.some((needle) => value.includes(needle));
}

function hasToken(value: string, token: string): boolean {
  return new RegExp(`(^|[._-])${token}($|[._-])`).test(value);
}

export function getVisualThemeForScene(scene: VisualScene): VisualTheme {
  const skill = (scene.skillId || "").toLowerCase();
  const text = [scene.skillId, scene.title, scene.description]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  // Most-specific rules first. These fix generated story arcs whose user mode
  // is broad, while the visual subject is narrower.
  if (hasAny(skill, ["emergency", "lostpassport"])) return "emergency";
  if (hasAny(skill, ["customer_support", "tech_support", "call_center", "callcenter", "support", "phone"])) return "phone";
  if (hasAny(skill, ["uni_admission", "ielts", "university", "campus", "exam", "study"])) return "ielts";
  if (hasAny(skill, ["freelance", "salary_neg", "junior_dev", "work_conflict", "ny_tech_conf"])) return "work";
  if (hasAny(skill, ["apartment_hunt", "hotel", "housing", "hostel", "landlord", "rent", "apartment"])) return "hotel";
  if (hasAny(skill, ["doctor_visit", "doctor", "dentist", "optician", "vet", "pharmacy", "health", "medicine"])) return "pharmacy";

  if (hasAny(skill, ["airport", "flight", "customs", "immigration"])) return "airport";
  if (hasAny(skill, ["taxi", "transit", "transport", "logistics"])) return "taxi";
  if (hasAny(skill, ["directions", "wayfinding"])) return "directions";
  if (hasAny(skill, ["gym", "workout", "yogaclass", "gymsub"])) return "gym";
  if (hasAny(skill, ["salon", "salondetailed", "barber", "hair"])) return "salon";
  if (hasAny(skill, ["cafe", "coffee"])) return "cafe";
  if (
    hasAny(skill, [
      "fastfood",
      "restaurant",
      "bill",
      "tipping",
      "complaint",
      "custom",
      "order.food",
      "order.restaurant",
    ])
  ) {
    return "restaurant";
  }
  if (hasAny(skill, ["delivery", "grocery", "shopping", "store", "supermarket", "drycleaner"])) return "shopping";
  if (hasAny(skill, ["bar", "pub", "approach"])) return "bar";
  if (
    hasAny(skill, [
      "flirt",
      "dating",
      "first-date",
      "second-date",
      "first_date",
      "second_date",
      "online_dating",
      "banter",
      "intimacy",
      "rejection",
      "recovery",
    ]) ||
    hasToken(skill, "date")
  ) {
    return "flirt";
  }
  if (
    hasAny(skill, [
      "work",
      "meeting",
      "career",
      "professional",
      "slack",
      "email",
      "interview",
      "standup",
      "disagree",
      "feedback",
      "promotion",
      "networking",
      "codereview",
      "1on1",
      "remote",
      "hire",
    ])
  ) {
    return "work";
  }
  if (hasAny(text, ["doctor", "hospital", "medicine", "pharmacy"])) return "pharmacy";
  if (hasAny(text, ["apartment", "landlord", "hotel", "rent"])) return "hotel";
  if (hasAny(text, ["support", "call", "phone"])) return "phone";
  if (hasAny(text, ["coffee", "kahve", "barista", "cafe", "kahveci"])) return "cafe";
  if (hasAny(text, ["restaurant", "restoran", "dinner", "tasting menu", "sipariş"])) return "restaurant";
  if (hasAny(text, ["pub", "cocktail", "wine", "şarap", "sarap", "whisky", "viski"])) return "bar";
  if (hasAny(text, ["airport", "havaalanı", "havaalani", "jfk", "flight", "passport"])) return "airport";
  if (hasAny(skill, ["bank", "smalltalk", "social"])) return "daily";

  return FALLBACK_BY_MODE[scene.mode] ?? "daily";
}
