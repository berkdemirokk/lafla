// Sample feed scenes. Production data comes from content/scenarios/ via the backend.
// Stark Modern theme: single accent color, no per-mode color variation.

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
}

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
  },
];
