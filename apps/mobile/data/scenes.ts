// Sample feed scenes. In production these will come from the
// content packs in content/scenarios/ via the backend API.

export interface Scene {
  id: string;
  emoji: string;
  title: string;
  description: string;
  durationMin: number;
  mode: "flirt" | "work" | "banter" | "order" | "daily";
  skillId: string;
  lessonId: string;
  isNew?: boolean;
  progressLabel?: string;
  accentColor?: string;
}

// Mode → accent color
export const MODE_COLORS: Record<Scene["mode"], string> = {
  order: "#FF6B35",   // warm orange — appetite
  flirt: "#EC4899",   // pink — romance
  work: "#3B82F6",    // blue — professional
  banter: "#A855F7",  // purple — playful
  daily: "#10B981",   // green — practical
};

export const SAMPLE_SCENES: ReadonlyArray<Scene> = [
  {
    id: "scene-order-cafe-1-1",
    emoji: "☕",
    title: "Kafe'de\n'Flat White'\nsöylemek",
    description:
      "Starbucks dışında karışan terimleri öğren. Barista'ya sıkılmadan sipariş ver.",
    durationMin: 5,
    mode: "order",
    skillId: "order.cafe",
    lessonId: "order.cafe.1.1",
    isNew: true,
    progressLabel: "1/4 ders",
    accentColor: MODE_COLORS.order,
  },
  {
    id: "scene-flirt-opener",
    emoji: "💕",
    title: "Tinder\nopener\natmak",
    description:
      "Sıkıcı 'hey'i bırak. 5 farklı tonla açılış mesajı atmayı öğren.",
    durationMin: 6,
    mode: "flirt",
    skillId: "flirt.opener",
    lessonId: "flirt.opener.1.1",
    progressLabel: "Yeni skill",
    accentColor: MODE_COLORS.flirt,
  },
  {
    id: "scene-daily-airport",
    emoji: "✈️",
    title: "Havaalanında\nkayıp valiz",
    description:
      "Valizin gelmediğinde donmadan, kibarca sorununu anlatmayı öğren.",
    durationMin: 4,
    mode: "daily",
    skillId: "daily.airport",
    lessonId: "daily.airport.1.1",
    accentColor: MODE_COLORS.daily,
  },
];
