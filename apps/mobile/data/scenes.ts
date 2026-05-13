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
    id: "scene-order-custom-3-3",
    emoji: "🌱",
    title: "Vejetaryenim,\nveganım,\nglütensiz var mı?",
    description:
      "Diyet tercihini söyle, menüde uygun seçenek var mı sor — kafe/restoranda donmama.",
    durationMin: 5,
    mode: "order",
    skillId: "order.custom",
    lessonId: "order.custom.3.3",
    isNew: true,
    progressLabel: "3/3 ders ✓",
  },
  {
    id: "scene-order-bill-4-1",
    emoji: "🧾",
    title: "Hesapta\nhata var,\nsorgula",
    description:
      "Tanımadığın bir kalem mi gördün? Service charge nedir? Kibarca sorgulamayı öğren.",
    durationMin: 5,
    mode: "order",
    skillId: "order.bill",
    lessonId: "order.bill.4.1",
    isNew: true,
    progressLabel: "1/3 ders",
  },
  {
    id: "scene-order-bill-4-2",
    emoji: "✂️",
    title: "Hesabı böl,\n50/50,\nayrı çekler",
    description:
      "Hesabı eşit bölme, kişiye göre, ayrı çek isteme — Batı kültürünün standart hesap pratiği.",
    durationMin: 5,
    mode: "order",
    skillId: "order.bill",
    lessonId: "order.bill.4.2",
    isNew: true,
    progressLabel: "2/3 ders",
  },
  {
    id: "scene-order-bill-4-3",
    emoji: "💳",
    title: "Apple Pay,\ntap to pay,\nfiş",
    description:
      "Modern ödeme: card/cash, swipe vs insert vs tap, receipt vs recipe — fark net.",
    durationMin: 5,
    mode: "order",
    skillId: "order.bill",
    lessonId: "order.bill.4.3",
    isNew: true,
    progressLabel: "3/3 ders ✓",
  },
  {
    id: "scene-order-complaint-5-1",
    emoji: "🥶",
    title: "Yemeğim soğuk,\naz pişmiş —\nkibarca söyle",
    description:
      "Şikayet İngilizcesi: yumuşatıcı + somut sorun + çözüm önerisi.",
    durationMin: 5,
    mode: "order",
    skillId: "order.complaint",
    lessonId: "order.complaint.5.1",
    isNew: true,
    progressLabel: "1/3 ders",
  },
  {
    id: "scene-order-complaint-5-2",
    emoji: "❌",
    title: "Yanlış sipariş\ngeldi —\nmix-up bildir",
    description:
      "Garson tavuk değil somon getirdi mi? Kimseyi suçlamadan karışıklığı düzelt.",
    durationMin: 5,
    mode: "order",
    skillId: "order.complaint",
    lessonId: "order.complaint.5.2",
    isNew: true,
    progressLabel: "2/3 ders",
  },
  {
    id: "scene-order-complaint-5-3",
    emoji: "👔",
    title: "Müdür çağır,\nhesaptan düş,\non the house",
    description:
      "Sorun çözülmedi mi? Manager iste, escalation kibar olsun — sonuç al.",
    durationMin: 5,
    mode: "order",
    skillId: "order.complaint",
    lessonId: "order.complaint.5.3",
    isNew: true,
    progressLabel: "3/3 ders ✓",
  },
  {
    id: "scene-order-tipping-6-1",
    emoji: "💵",
    title: "ABD'de bahşiş\n%18-20,\nKeep the change",
    description:
      "ABD bahşiş kültürü — garsonun maaşı bahşişe bağlı, oranlar yüksek.",
    durationMin: 5,
    mode: "order",
    skillId: "order.tipping",
    lessonId: "order.tipping.6.1",
    isNew: true,
    progressLabel: "1/2 ders",
  },
  {
    id: "scene-order-tipping-6-2",
    emoji: "🇬🇧",
    title: "UK/EU bahşiş —\nservis dahil mi,\nyuvarla",
    description:
      "UK %10-12, EU yuvarlama veya 'service included' — ABD'den farklı kodlar.",
    durationMin: 5,
    mode: "order",
    skillId: "order.tipping",
    lessonId: "order.tipping.6.2",
    isNew: true,
    progressLabel: "2/2 ders ✓",
  },
  {
    id: "scene-order-bar-7-1",
    emoji: "🍺",
    title: "Bar'da bira,\nşarap, soft drink\nsipariş",
    description:
      "Barda kalabalık, bartender'ın dikkatini çek — 'On tap', 'glass of', 'a sec' kalıpları.",
    durationMin: 5,
    mode: "order",
    skillId: "order.bar",
    lessonId: "order.bar.7.1",
    isNew: true,
    progressLabel: "1/3 ders",
  },
  {
    id: "scene-order-bar-7-2",
    emoji: "🍸",
    title: "Cocktail dili —\nneat, on the rocks,\nwith a twist",
    description:
      "Viski + cocktail terminolojisi: sek/buzlu/twist — premium bar dili.",
    durationMin: 5,
    mode: "order",
    skillId: "order.bar",
    lessonId: "order.bar.7.2",
    isNew: true,
    progressLabel: "2/3 ders",
  },
  {
    id: "scene-order-bar-7-3",
    emoji: "🌙",
    title: "Tab aç, last call,\nclose me out",
    description:
      "Bar gece kapamak: hesap açma + son sipariş + 'close out' idiom'ları.",
    durationMin: 5,
    mode: "order",
    skillId: "order.bar",
    lessonId: "order.bar.7.3",
    isNew: true,
    progressLabel: "3/3 ders ✓",
  },
  {
    id: "scene-order-delivery-8-1",
    emoji: "🛵",
    title: "Uber Eats notu —\nsos ayrı,\nalerjiyi söyle",
    description:
      "Delivery uygulamasında özel istek: 'on the side', 'make it hot', alerji bildirimi.",
    durationMin: 5,
    mode: "order",
    skillId: "order.delivery",
    lessonId: "order.delivery.8.1",
    isNew: true,
    progressLabel: "1/2 ders",
  },
  {
    id: "scene-order-delivery-8-2",
    emoji: "🚪",
    title: "Kuryeye not —\n'leave at door',\n'buzz apt 4B'",
    description:
      "Adres detayı, apartman zili, contactless delivery — kurye iletişimi kalıpları.",
    durationMin: 5,
    mode: "order",
    skillId: "order.delivery",
    lessonId: "order.delivery.8.2",
    isNew: true,
    progressLabel: "2/2 ders ✓",
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
