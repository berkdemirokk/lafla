// Sample feed scenes. Production data comes from content/scenarios/ via the backend.
// Cyber-Electric Modern: single brand accent across all scenes.

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
    id: "scene-order-cafe-1-2",
    emoji: "🥛",
    title: "Latte mi,\ncappuccino mu?\nFarkı söyle",
    description:
      "Spesifik kahve çeşitleri, boyutlar — barista'ya net sipariş ver.",
    durationMin: 6,
    mode: "order",
    skillId: "order.cafe",
    lessonId: "order.cafe.1.2",
    isNew: true,
    progressLabel: "2/4 ders",
  },
  {
    id: "scene-order-cafe-1-3",
    emoji: "🌾",
    title: "Yulaf sütlü,\nkafeinsiz,\ndouble shot",
    description:
      "Siparişini özelleştir: süt türü, şeker, ekstra shot — alerji ve tercih kalıpları.",
    durationMin: 6,
    mode: "order",
    skillId: "order.cafe",
    lessonId: "order.cafe.1.3",
    isNew: true,
    progressLabel: "3/4 ders",
  },
  {
    id: "scene-order-cafe-1-4",
    emoji: "🥡",
    title: "Paket / İçeride\n+ ismi hecele",
    description:
      "Sipariş bitirme: 'for here', 'to go', ödeme, isim yazdırma — Berk'i nasıl hecelersin?",
    durationMin: 5,
    mode: "order",
    skillId: "order.cafe",
    lessonId: "order.cafe.1.4",
    isNew: true,
    progressLabel: "4/4 ders ✓",
  },
  {
    id: "scene-order-restaurant-2-1",
    emoji: "🍽️",
    title: "Restoranda\ngarson çağırma\n+ menü",
    description:
      "'Excuse me' ile başla, masa seç, menü iste — restoranın ilk dakikası.",
    durationMin: 5,
    mode: "order",
    skillId: "order.restaurant",
    lessonId: "order.restaurant.2.1",
    isNew: true,
    progressLabel: "1/4 ders",
  },
  {
    id: "scene-order-restaurant-2-2",
    emoji: "🥩",
    title: "Bifteği sipariş et,\nmedium rare\nsöyle",
    description:
      "Öneri sor, ana yemek söyle, içecek seç — restoran siparişinin kalbi.",
    durationMin: 6,
    mode: "order",
    skillId: "order.restaurant",
    lessonId: "order.restaurant.2.2",
    isNew: true,
    progressLabel: "2/4 ders",
  },
  {
    id: "scene-order-restaurant-2-3",
    emoji: "🍞",
    title: "Yemek sırasında\nsu tazele,\nekstra iste",
    description:
      "Garson 'Nasıl?' diye sorduğunda donmadan cevap ver, biraz daha bir şey iste.",
    durationMin: 5,
    mode: "order",
    skillId: "order.restaurant",
    lessonId: "order.restaurant.2.3",
    isNew: true,
    progressLabel: "3/4 ders",
  },
  {
    id: "scene-order-restaurant-2-4",
    emoji: "💳",
    title: "Hesabı iste,\nbölüş,\nödeme yap",
    description:
      "Check/bill farkı, hesabı bölme, kart/nakit, bahşiş kültürü — yemeği bitirme.",
    durationMin: 6,
    mode: "order",
    skillId: "order.restaurant",
    lessonId: "order.restaurant.2.4",
    isNew: true,
    progressLabel: "4/4 ders ✓",
  },
  {
    id: "scene-order-custom-3-1",
    emoji: "⚠️",
    title: "Alerjim var,\nbu glütensiz mi,\nfıstık içeriyor mu?",
    description:
      "Alerji + diyet İngilizcesi. Gıda güvenliği için kritik kalıplar.",
    durationMin: 5,
    mode: "order",
    skillId: "order.custom",
    lessonId: "order.custom.3.1",
    isNew: true,
    progressLabel: "1/3 ders",
  },
  {
    id: "scene-order-custom-3-2",
    emoji: "🧅",
    title: "Soğansız,\nekstra peynir,\nsosu ayrı",
    description:
      "Siparişi tam istediğin gibi: hold, swap, easy on, on the side kalıpları.",
    durationMin: 5,
    mode: "order",
    skillId: "order.custom",
    lessonId: "order.custom.3.2",
    isNew: true,
    progressLabel: "2/3 ders",
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
    progressLabel: "Yakında",
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
    progressLabel: "Yakında",
  },
];
