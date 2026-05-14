// Lafla — Mission Pack catalog.
//
// A Mission Pack is a short, themed bundle — 5-10 specific activities over 3-7
// days. Different concept from `lib/programs.ts` (multi-week curriculum); a
// mission pack is a sprint — "ABD Vize Haftası", "Mülakat Sprint'i", etc.
//
// Each item references existing content by `refId` (a lesson id, a scene id, a
// listening drama id, a freechat/coach session, or a synthetic drill id).
// No runtime LLM — the catalog is fully static and offline-resolvable.
//
// State (started, completed items, time remaining) lives in `lib/missions.ts`.
// Mission packs do NOT replace the active program; they run in parallel as an
// urgent sprint the user can pause anytime.
//
// To add a pack: append to MISSION_PACKS. To wire content: ensure each `refId`
// resolves in `data/lessons.ts` (for type=lesson), in `data/scenes.ts` (for
// type=voip / drill via scene), or in `data/listening-dramas.ts` (for listening).
// Cultural-tip / coach-chat / vocab-deck ids are namespaced — they're resolved
// by the mission detail screen.

export type MissionPackId = string;

export interface MissionItem {
  id: string;
  type:
    | "lesson"
    | "voip"
    | "listening"
    | "reading"
    | "coach-chat"
    | "drill"
    | "cultural-tip"
    | "vocab-deck";
  refId: string; // ID of the underlying content (lesson.id / scene.id / drama.id / synthetic)
  title_tr: string;
  estimatedMin: number;
  required: boolean; // some items are bonus / optional
}

export interface MissionPack {
  id: MissionPackId;
  title_tr: string;
  description_tr: string;
  emoji: string;
  durationDays: number; // typically 7
  cefrLevel: "A2" | "B1" | "B2" | "C1";
  category: "exam-prep" | "career" | "travel" | "social" | "academic" | "general";
  items: MissionItem[]; // 5-10 items
  rewardMessage_tr: string; // What user earns / unlocks
}

// ============================================================
// PACK CATALOG (15 packs)
// ============================================================

export const MISSION_PACKS: readonly MissionPack[] = [
  // ----------------------------------------------------------
  // 1) ABD Vize Haftası
  // ----------------------------------------------------------
  {
    id: "us-visa-week",
    title_tr: "ABD Vize Haftası",
    description_tr:
      "Konsolosluk camının arkasında 90 saniyen var. 7 günde mülakat, gümrük, evrak — hepsi cebinde.",
    emoji: "🇺🇸",
    durationDays: 7,
    cefrLevel: "B1",
    category: "travel",
    items: [
      {
        id: "us-visa-week.lesson.usvisa",
        type: "lesson",
        refId: "travel.b1.usvisa.1",
        title_tr: "B1/B2 vize mülakatı: 90 saniye",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "us-visa-week.voip.esta",
        type: "voip",
        refId: "scene-travel-b1-1",
        title_tr: "ESTA / DS-160 sözel hazırlık",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "us-visa-week.lesson.customs",
        type: "lesson",
        refId: "travel.b1.customs.1",
        title_tr: "JFK gümrük: 'Anything to declare?'",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "us-visa-week.voip.customs-roleplay",
        type: "voip",
        refId: "scene-travel-b1-3",
        title_tr: "Gümrük roleplay — beyan etmek",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "us-visa-week.cultural-tip.ties-to-turkey",
        type: "cultural-tip",
        refId: "tip.us-visa.ties",
        title_tr: "Kültürel ipucu: 'ties to home country' ne demek?",
        estimatedMin: 3,
        required: true,
      },
      {
        id: "us-visa-week.coach.mock-interview",
        type: "coach-chat",
        refId: "coach.mission.us-visa-mock",
        title_tr: "Coach ile mock mülakat",
        estimatedMin: 10,
        required: true,
      },
      {
        id: "us-visa-week.lesson.followup",
        type: "lesson",
        refId: "travel.b1.followup.1",
        title_tr: "Önceki red — 'What changed?' cevabı",
        estimatedMin: 7,
        required: false,
      },
    ],
    rewardMessage_tr:
      "Görev tamam: vize mülakatına hazırsın. Konsolosluk camının arkasında donmayacaksın.",
  },

  // ----------------------------------------------------------
  // 2) İş Mülakatı Sprint'i
  // ----------------------------------------------------------
  {
    id: "interview-sprint",
    title_tr: "İş Mülakatı Sprint'i",
    description_tr:
      "5 günde behavioral + STAR + neden bu şirket — yarın mülakatın varsa bu paketi aç.",
    emoji: "🎯",
    durationDays: 5,
    cefrLevel: "B1",
    category: "career",
    items: [
      {
        id: "interview-sprint.lesson.tellme",
        type: "lesson",
        refId: "career.b1.tellme.1",
        title_tr: "'Tell me about yourself' — 60 saniye",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "interview-sprint.lesson.whycompany",
        type: "lesson",
        refId: "career.b1.whycompany.1",
        title_tr: "'Why this company?' — somut cevap",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "interview-sprint.voip.star",
        type: "voip",
        refId: "scene-career-b1-star",
        title_tr: "STAR yöntemiyle davranışsal soru",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "interview-sprint.drill.grammar",
        type: "drill",
        refId: "grammar.present-perfect.1",
        title_tr: "Grammar capsule: present perfect (CV dili)",
        estimatedMin: 5,
        required: true,
      },
      {
        id: "interview-sprint.coach.mock",
        type: "coach-chat",
        refId: "coach.mission.interview-mock",
        title_tr: "Coach ile mock mülakat (10 dk)",
        estimatedMin: 10,
        required: true,
      },
      {
        id: "interview-sprint.lesson.salary",
        type: "lesson",
        refId: "career.b2.salary_negotiation.1",
        title_tr: "Maaş sorusu: 'What's your range?'",
        estimatedMin: 8,
        required: false,
      },
    ],
    rewardMessage_tr:
      "Sprint tamam. Behavioral sorular, STAR yapısı, neden-bu-şirket — üçü de gerçek bir mülakata hazır.",
  },

  // ----------------------------------------------------------
  // 3) IELTS Speaking 7-day
  // ----------------------------------------------------------
  {
    id: "ielts-speaking-7d",
    title_tr: "IELTS Speaking 7 Gün",
    description_tr:
      "Part 1 + 2 + 3, telaffuz drilli, dinleme draması — 7 günde Speaking 7.0+ rotasında.",
    emoji: "📘",
    durationDays: 7,
    cefrLevel: "B2",
    category: "exam-prep",
    items: [
      {
        id: "ielts-speaking-7d.lesson.part1",
        type: "lesson",
        refId: "testprep.ielts.part1.home.1",
        title_tr: "Part 1: ev, memleket — kişisel sorular",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "ielts-speaking-7d.lesson.part1-hobbies",
        type: "lesson",
        refId: "testprep.ielts.part1.hobbies.2",
        title_tr: "Part 1: hobiler — 30 saniyelik cevap",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "ielts-speaking-7d.lesson.part2",
        type: "lesson",
        refId: "testprep.ielts.part2.person.5",
        title_tr: "Part 2: 2-dakikalık monolog (cue card)",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "ielts-speaking-7d.drill.th-sound",
        type: "drill",
        refId: "drill.pronunciation.th",
        title_tr: "Telaffuz drilli: /θ/ ve /ð/ sesi",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "ielts-speaking-7d.listening.conference",
        type: "listening",
        refId: "listen.conference-qa.b2",
        title_tr: "Dinleme draması: akademik Q&A",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "ielts-speaking-7d.coach.mock-part3",
        type: "coach-chat",
        refId: "coach.mission.ielts-part3-mock",
        title_tr: "Coach ile Part 3 soyut tartışma",
        estimatedMin: 10,
        required: true,
      },
    ],
    rewardMessage_tr:
      "7 gün sonunda IELTS Speaking format'ı tanıdık. Sınav günü içeri sakin gir.",
  },

  // ----------------------------------------------------------
  // 4) Networking Burst
  // ----------------------------------------------------------
  {
    id: "networking-burst",
    title_tr: "Networking Burst",
    description_tr:
      "Konferans yemeği, coffee chat, small talk — 5 günde 'awkward Türk' damgasını sök.",
    emoji: "🤝",
    durationDays: 5,
    cefrLevel: "B1",
    category: "career",
    items: [
      {
        id: "networking-burst.lesson.coffeechat",
        type: "lesson",
        refId: "work.coffeechat.13.1",
        title_tr: "Coffee chat: 15 dakikada iş kontağı",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "networking-burst.lesson.networking",
        type: "lesson",
        refId: "work.networking.39.1",
        title_tr: "Konferans yemeği: masa açma",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "networking-burst.voip.smalltalk",
        type: "voip",
        refId: "scene-daily-smalltalk",
        title_tr: "Small talk roleplay — yabancıyla 90 sn",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "networking-burst.cultural-tip.silence",
        type: "cultural-tip",
        refId: "tip.networking.silence",
        title_tr: "Kültürel ipucu: sessizlik ABD'de neden tuhaf?",
        estimatedMin: 3,
        required: true,
      },
      {
        id: "networking-burst.lesson.exit",
        type: "lesson",
        refId: "banter.exit.28.1",
        title_tr: "Sohbeti kibarca kapatma",
        estimatedMin: 6,
        required: false,
      },
    ],
    rewardMessage_tr:
      "Konferans yemeklerinde köşede durmak yok. Açıyorsun, sürdürüyorsun, kapatıyorsun.",
  },

  // ----------------------------------------------------------
  // 5) ABD Seyahat Kit
  // ----------------------------------------------------------
  {
    id: "us-travel-kit",
    title_tr: "ABD Seyahat Kit",
    description_tr:
      "Gümrükten otele, restorandan taksiye — 7 günde tatilde donmamak için tam kapsama.",
    emoji: "✈️",
    durationDays: 7,
    cefrLevel: "A2",
    category: "travel",
    items: [
      {
        id: "us-travel-kit.lesson.customs",
        type: "lesson",
        refId: "travel.b1.customs.1",
        title_tr: "Gümrük: 'Nothing to declare'",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "us-travel-kit.lesson.hotel",
        type: "lesson",
        refId: "daily.hotel.20.1",
        title_tr: "Otel check-in + problem bildir",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "us-travel-kit.lesson.restaurant",
        type: "lesson",
        refId: "order.restaurant.2.1",
        title_tr: "Restoranda garson çağırma + menü",
        estimatedMin: 5,
        required: true,
      },
      {
        id: "us-travel-kit.lesson.taxi",
        type: "lesson",
        refId: "daily.taxi.32.1",
        title_tr: "Taksi / Uber: adres ver, ödeme yap",
        estimatedMin: 5,
        required: true,
      },
      {
        id: "us-travel-kit.lesson.smalltalk",
        type: "lesson",
        refId: "daily.smalltalk.23.1",
        title_tr: "Small talk: 'Where are you from?'",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "us-travel-kit.cultural-tip.tipping",
        type: "cultural-tip",
        refId: "tip.us-travel.tipping",
        title_tr: "Kültürel ipucu: bahşiş — kim, ne kadar?",
        estimatedMin: 3,
        required: true,
      },
      {
        id: "us-travel-kit.lesson.tipping",
        type: "lesson",
        refId: "order.tipping.6.1",
        title_tr: "Bahşiş diyaloğu pratiği",
        estimatedMin: 5,
        required: false,
      },
    ],
    rewardMessage_tr:
      "Pasaportu damgalatıp restorana oturana kadar — her temas noktası tanıdık. İyi yolculuklar.",
  },

  // ----------------------------------------------------------
  // 6) Remote Work Onboarding
  // ----------------------------------------------------------
  {
    id: "remote-work-onboard",
    title_tr: "Remote Work Onboarding",
    description_tr:
      "Slack + email + standup + meeting — 5 günde uluslararası takıma uyumlu hale gel.",
    emoji: "💻",
    durationDays: 5,
    cefrLevel: "B1",
    category: "career",
    items: [
      {
        id: "remote-work-onboard.lesson.slack",
        type: "lesson",
        refId: "work.slack.9.1",
        title_tr: "Slack mesajlaşma adabı",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "remote-work-onboard.lesson.email",
        type: "lesson",
        refId: "work.email.11.1",
        title_tr: "İş emaili: kibar ama net ton",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "remote-work-onboard.lesson.standup",
        type: "lesson",
        refId: "work.standup.33.1",
        title_tr: "Async standup yazımı",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "remote-work-onboard.lesson.meeting",
        type: "lesson",
        refId: "work.meeting.10.1",
        title_tr: "Toplantıda söz alma + interrupt etme",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "remote-work-onboard.cultural-tip.async",
        type: "cultural-tip",
        refId: "tip.remote.async-etiquette",
        title_tr: "Kültürel ipucu: async etiquette nedir?",
        estimatedMin: 3,
        required: true,
      },
    ],
    rewardMessage_tr:
      "İlk hafta bitti. Slack thread'ini, standup'ı, toplantı interrupt'ını biliyorsun.",
  },

  // ----------------------------------------------------------
  // 7) Maaş Pazarlığı 3 Gün
  // ----------------------------------------------------------
  {
    id: "salary-3day",
    title_tr: "Maaş Pazarlığı 3 Gün",
    description_tr:
      "Offer geldi, sayı uçuyor — 3 günde counter-offer + kültürel ipucu + drilli pratik.",
    emoji: "💰",
    durationDays: 3,
    cefrLevel: "B2",
    category: "career",
    items: [
      {
        id: "salary-3day.lesson.negotiation",
        type: "lesson",
        refId: "career.b2.salary_negotiation.1",
        title_tr: "Maaş pazarlığı: 'What's your range?'",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "salary-3day.drill.counteroffer",
        type: "drill",
        refId: "drill.counter-offer.phrases",
        title_tr: "Counter-offer kalıp drili",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "salary-3day.listening.negotiation",
        type: "listening",
        refId: "listen.salary-negotiation.b2",
        title_tr: "Dinleme: gerçek müzakere diyaloğu",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "salary-3day.cultural-tip.directness",
        type: "cultural-tip",
        refId: "tip.salary.directness",
        title_tr: "Kültürel ipucu: 'sayı söylemek' kabaca değil",
        estimatedMin: 3,
        required: true,
      },
      {
        id: "salary-3day.coach.mock",
        type: "coach-chat",
        refId: "coach.mission.salary-mock",
        title_tr: "Coach ile pazarlık simülasyonu",
        estimatedMin: 10,
        required: true,
      },
    ],
    rewardMessage_tr:
      "3 gün sonunda counter-offer cebinde. 'Let me think about it' artık erteleme değil, taktik.",
  },

  // ----------------------------------------------------------
  // 8) Akademik Mülakat Hazırlığı
  // ----------------------------------------------------------
  {
    id: "academic-interview",
    title_tr: "Akademik Mülakat Hazırlığı",
    description_tr:
      "Research interview, advisor görüşmesi, konferans Q&A — 7 günde akademik İngilizcen sınava hazır.",
    emoji: "🎓",
    durationDays: 7,
    cefrLevel: "B2",
    category: "academic",
    items: [
      {
        id: "academic-interview.lesson.admissions",
        type: "lesson",
        refId: "academic.b2.admissions-interview.1",
        title_tr: "Research interview: araştırma anlat",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "academic-interview.lesson.supervisor",
        type: "lesson",
        refId: "academic.b2.first-supervisor-meeting.1",
        title_tr: "Danışman ile ilk görüşme",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "academic-interview.listening.conference",
        type: "listening",
        refId: "listen.conference-qa.b2",
        title_tr: "Dinleme: konferans Q&A",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "academic-interview.drill.hedging",
        type: "drill",
        refId: "drill.academic.hedging",
        title_tr: "Akademik hedging dili drili",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "academic-interview.cultural-tip.criticism",
        type: "cultural-tip",
        refId: "tip.academic.criticism",
        title_tr: "Kültürel ipucu: 'I disagree' nasıl yumuşatılır?",
        estimatedMin: 3,
        required: true,
      },
      {
        id: "academic-interview.coach.mock",
        type: "coach-chat",
        refId: "coach.mission.academic-mock",
        title_tr: "Coach ile akademik mülakat simülasyonu",
        estimatedMin: 12,
        required: true,
      },
    ],
    rewardMessage_tr:
      "Komite önünde araştırmanı 90 saniyede anlat — bu yetkiyi kazandın.",
  },

  // ----------------------------------------------------------
  // 9) Acil Durum İngilizcesi
  // ----------------------------------------------------------
  {
    id: "emergency-en",
    title_tr: "Acil Durum İngilizcesi",
    description_tr:
      "Hastane, polis, kayıp pasaport, ambulans — 3 günde kriz anında donmayan İngilizce.",
    emoji: "🚨",
    durationDays: 3,
    cefrLevel: "A2",
    category: "travel",
    items: [
      {
        id: "emergency-en.lesson.emergency",
        type: "lesson",
        refId: "daily.emergency.22.1",
        title_tr: "911 araması: adres + sorun",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "emergency-en.lesson.hospital",
        type: "lesson",
        refId: "travel.b1.hospital.1",
        title_tr: "ER'de semptom anlatma",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "emergency-en.voip.lost-passport",
        type: "voip",
        refId: "scene-emergency-passport",
        title_tr: "Konsoloslukta kayıp pasaport bildirimi",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "emergency-en.lesson.pharmacy",
        type: "lesson",
        refId: "daily.pharmacy.19.1",
        title_tr: "Eczanede ilaç istemek",
        estimatedMin: 5,
        required: true,
      },
      {
        id: "emergency-en.cultural-tip.911",
        type: "cultural-tip",
        refId: "tip.emergency.911-vs-112",
        title_tr: "Kültürel ipucu: 911 hangi soruyu sorar?",
        estimatedMin: 3,
        required: true,
      },
    ],
    rewardMessage_tr:
      "Kriz anı geldiğinde panik değil, prosedür. Telefon elinde — biliyorsun.",
  },

  // ----------------------------------------------------------
  // 10) Pronunciation Master /θ/ + /ð/
  // ----------------------------------------------------------
  {
    id: "pron-th",
    title_tr: "Telaffuz: /θ/ + /ð/ Ustası",
    description_tr:
      "'Think', 'this', 'three' — Türk diline en yabancı iki ses. 5 günde drilli, kalıcı düzelt.",
    emoji: "👅",
    durationDays: 5,
    cefrLevel: "B1",
    category: "general",
    items: [
      {
        id: "pron-th.drill.day1",
        type: "drill",
        refId: "drill.th.minimal-pairs",
        title_tr: "1. gün: minimal pairs — think / sink",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "pron-th.drill.day2",
        type: "drill",
        refId: "drill.th.voiced",
        title_tr: "2. gün: /ð/ — this, that, the",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "pron-th.drill.day3",
        type: "drill",
        refId: "drill.th.voiceless",
        title_tr: "3. gün: /θ/ — three, thirty, thought",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "pron-th.drill.day4",
        type: "drill",
        refId: "drill.th.fast-sentences",
        title_tr: "4. gün: hızlı cümleler içinde",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "pron-th.drill.day5",
        type: "drill",
        refId: "drill.th.conversation",
        title_tr: "5. gün: serbest konuşma testi",
        estimatedMin: 8,
        required: true,
      },
    ],
    rewardMessage_tr:
      "'Three things' artık 'tree tings' değil. Sınav sınavı, mülakat mülakatı geçecek.",
  },

  // ----------------------------------------------------------
  // 11) Filler Word Detox
  // ----------------------------------------------------------
  {
    id: "filler-detox",
    title_tr: "Filler Word Detox",
    description_tr:
      "'Uhm', 'şey', 'like' — 7 günde bunlar kayboluyor. Sessiz duraklamayla değiştirme drili.",
    emoji: "🧹",
    durationDays: 7,
    cefrLevel: "B2",
    category: "general",
    items: [
      {
        id: "filler-detox.coach.day1",
        type: "coach-chat",
        refId: "coach.mission.filler-day1",
        title_tr: "1. gün: 5 dk konuş, sayım yap",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "filler-detox.coach.day2",
        type: "coach-chat",
        refId: "coach.mission.filler-day2",
        title_tr: "2. gün: sessiz pause drili",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "filler-detox.coach.day3",
        type: "coach-chat",
        refId: "coach.mission.filler-day3",
        title_tr: "3. gün: replacement kelimeler",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "filler-detox.coach.day4",
        type: "coach-chat",
        refId: "coach.mission.filler-day4",
        title_tr: "4. gün: zorlu konu — uzun cevap",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "filler-detox.coach.day5",
        type: "coach-chat",
        refId: "coach.mission.filler-day5",
        title_tr: "5. gün: hızlı atışma",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "filler-detox.coach.day6",
        type: "coach-chat",
        refId: "coach.mission.filler-day6",
        title_tr: "6. gün: monolog testi",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "filler-detox.coach.day7",
        type: "coach-chat",
        refId: "coach.mission.filler-day7",
        title_tr: "7. gün: önce/sonra karşılaştırma",
        estimatedMin: 10,
        required: true,
      },
    ],
    rewardMessage_tr:
      "1. günle 7. gün arasındaki fark — kayıt dinlemeden anlamayacaksın. Profesyonel ses, sessiz pause.",
  },

  // ----------------------------------------------------------
  // 12) YDS Final Sprint
  // ----------------------------------------------------------
  {
    id: "yds-final-sprint",
    title_tr: "YDS Final Sprint",
    description_tr:
      "7 günde cloze + reading + grammar — sınava az kala doğru sayıyı taşımak için yoğun program.",
    emoji: "📚",
    durationDays: 7,
    cefrLevel: "B2",
    category: "exam-prep",
    items: [
      {
        id: "yds-final-sprint.lesson.cloze-social",
        type: "lesson",
        refId: "testprep.yds.cloze-social.1",
        title_tr: "Cloze test: sosyal bilim parçası",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "yds-final-sprint.lesson.cloze-science",
        type: "lesson",
        refId: "testprep.yds.cloze-science.1",
        title_tr: "Cloze test: bilim parçası",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "yds-final-sprint.lesson.reading-history",
        type: "lesson",
        refId: "testprep.yds.reading-history.1",
        title_tr: "Reading: tarih — ana fikir",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "yds-final-sprint.lesson.reading-tech",
        type: "lesson",
        refId: "testprep.yds.reading-tech.1",
        title_tr: "Reading: teknoloji",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "yds-final-sprint.lesson.dialogue",
        type: "lesson",
        refId: "testprep.yds.dialogue.1",
        title_tr: "Diyalog tamamlama",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "yds-final-sprint.drill.grammar",
        type: "drill",
        refId: "grammar.present-perfect.1",
        title_tr: "Grammar capsule: present perfect",
        estimatedMin: 5,
        required: true,
      },
      {
        id: "yds-final-sprint.lesson.sentence",
        type: "lesson",
        refId: "testprep.yds.sentence.1",
        title_tr: "Cümle tamamlama drili",
        estimatedMin: 8,
        required: false,
      },
    ],
    rewardMessage_tr:
      "Sınav günü: 5 saniye düşünmeden çubuğu işaretliyorsun. Zaman senin lehine.",
  },

  // ----------------------------------------------------------
  // 13) TOEFL Speaking 7-day
  // ----------------------------------------------------------
  {
    id: "toefl-speaking-7d",
    title_tr: "TOEFL Speaking 7 Gün",
    description_tr:
      "Task 1-2-3-4 — 7 günde bağımsız + entegre tasklar. 24+ skor için zamanlı pratik.",
    emoji: "🎤",
    durationDays: 7,
    cefrLevel: "B2",
    category: "exam-prep",
    items: [
      {
        id: "toefl-speaking-7d.lesson.task1-pref",
        type: "lesson",
        refId: "testprep.toefl.task1.preference.1",
        title_tr: "Task 1: tercih bildirme (45 sn)",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "toefl-speaking-7d.lesson.task1-agreedisagree",
        type: "lesson",
        refId: "testprep.toefl.task1.agreedisagree.1",
        title_tr: "Task 1: agree / disagree",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "toefl-speaking-7d.lesson.task2-library",
        type: "lesson",
        refId: "testprep.toefl.task2.library.1",
        title_tr: "Task 2: kampüs — kütüphane duyurusu",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "toefl-speaking-7d.lesson.task2-parking",
        type: "lesson",
        refId: "testprep.toefl.task2.parking.1",
        title_tr: "Task 2: kampüs — park yeri",
        estimatedMin: 9,
        required: true,
      },
      {
        id: "toefl-speaking-7d.drill.notetaking",
        type: "drill",
        refId: "drill.toefl.notetaking",
        title_tr: "Note-taking drili (entegre tasklar için)",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "toefl-speaking-7d.coach.mock-task1",
        type: "coach-chat",
        refId: "coach.mission.toefl-task1-mock",
        title_tr: "Coach ile Task 1 mock",
        estimatedMin: 10,
        required: true,
      },
      {
        id: "toefl-speaking-7d.coach.mock-task4",
        type: "coach-chat",
        refId: "coach.mission.toefl-task4-mock",
        title_tr: "Coach ile Task 4 mock — ders özeti",
        estimatedMin: 10,
        required: true,
      },
    ],
    rewardMessage_tr:
      "15 saniye hazırlanma + 45 saniye konuşma — ritmin yerinde. TOEFL Speaking'e hazır.",
  },

  // ----------------------------------------------------------
  // 14) Date in English
  // ----------------------------------------------------------
  {
    id: "date-in-en",
    title_tr: "İngilizce Randevu",
    description_tr:
      "Dating app mesajı, ilk buluşma sohbeti, kompliman — 5 günde garip Türk aksanlı flört değil, akıcı.",
    emoji: "💬",
    durationDays: 5,
    cefrLevel: "B1",
    category: "social",
    items: [
      {
        id: "date-in-en.lesson.dating-app",
        type: "lesson",
        refId: "personal.b1.dating-app.1",
        title_tr: "Dating app: ilk mesaj + cevap",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "date-in-en.lesson.first-date",
        type: "lesson",
        refId: "personal.b1.first-date.1",
        title_tr: "İlk buluşma: konuşma açma",
        estimatedMin: 8,
        required: true,
      },
      {
        id: "date-in-en.lesson.compliment",
        type: "lesson",
        refId: "banter.compliment.27.1",
        title_tr: "Kompliman: net ama creepy olmadan",
        estimatedMin: 6,
        required: true,
      },
      {
        id: "date-in-en.cultural-tip.compliment",
        type: "cultural-tip",
        refId: "tip.dating.compliment-line",
        title_tr: "Kültürel ipucu: kompliman çizgisi nerede?",
        estimatedMin: 3,
        required: true,
      },
      {
        id: "date-in-en.voip.first-date",
        type: "voip",
        refId: "scene-flirt-first-date",
        title_tr: "Roleplay: ilk buluşma 5 dakika",
        estimatedMin: 7,
        required: true,
      },
    ],
    rewardMessage_tr:
      "Match'ten ilk buluşmaya köprü kuruldu. 'Where are you from?' artık bir başlangıç, son nokta değil.",
  },

  // ----------------------------------------------------------
  // 15) Customer Service Calls
  // ----------------------------------------------------------
  {
    id: "cust-service-calls",
    title_tr: "Müşteri Hizmetleri Çağrıları",
    description_tr:
      "Banka, internet, kargo, sigorta, hesap kapatma — 5 günde 5 senaryo, telefon İngilizcen profesyonel.",
    emoji: "📞",
    durationDays: 5,
    cefrLevel: "B1",
    category: "general",
    items: [
      {
        id: "cust-service-calls.voip.bank",
        type: "voip",
        refId: "scene-cs-bank",
        title_tr: "1. gün: Banka — itiraz açma",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "cust-service-calls.voip.internet",
        type: "voip",
        refId: "scene-cs-internet",
        title_tr: "2. gün: Internet — sorun bildirme",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "cust-service-calls.voip.cargo",
        type: "voip",
        refId: "scene-cs-cargo",
        title_tr: "3. gün: Kargo — kayıp paket",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "cust-service-calls.voip.insurance",
        type: "voip",
        refId: "scene-cs-insurance",
        title_tr: "4. gün: Sigorta — claim açma",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "cust-service-calls.voip.cancel",
        type: "voip",
        refId: "scene-cs-cancel",
        title_tr: "5. gün: Hesap kapatma müzakeresi",
        estimatedMin: 7,
        required: true,
      },
      {
        id: "cust-service-calls.cultural-tip.hold",
        type: "cultural-tip",
        refId: "tip.cs.hold-language",
        title_tr: "Kültürel ipucu: 'Can you hold?' nasıl yönetilir?",
        estimatedMin: 3,
        required: false,
      },
    ],
    rewardMessage_tr:
      "Telefonda 'sorry, my English' demek geçmişte kaldı. Müşteri temsilcisi seni ciddiye alıyor.",
  },
] as const;

// ============================================================
// LOOKUPS
// ============================================================

export function getMissionPack(id: MissionPackId): MissionPack | undefined {
  return MISSION_PACKS.find((p) => p.id === id);
}

/** Convenience: total minutes for the required items only. */
export function packRequiredMinutes(pack: MissionPack): number {
  return pack.items
    .filter((it) => it.required)
    .reduce((sum, it) => sum + it.estimatedMin, 0);
}
