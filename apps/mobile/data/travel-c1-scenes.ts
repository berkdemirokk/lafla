// Travel C1 scenes — sophisticated traveler register for Turkish learners.
// Fills the C1 gap above existing A1-B2 travel content (78 scenes).
// Focus: diplomatic recovery, lobbying without entitlement, regional accents,
// deep cultural engagement, refined complaints that actually move staff.

import type { Scene } from "./scenes";

export const travelC1Scenes: ReadonlyArray<Scene> = [
  // -------- Hotel upgrade negotiation — concierge-level English (3) --------
  {
    id: "scene-travel-c1-upgrade-1",
    emoji: "🛎️",
    title: "Concierge'e\nyumuşak yaklaş —\nsuite upgrade iste",
    description:
      "Asla 'I deserve' deme. 'I was wondering if there might be any flexibility...' diliyle suite'e geç. Loyalty, anniversary, quiet floor — leverage'ını nazikçe ört.",
    durationMin: 11,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.upgrade",
    lessonId: "travel.c1.upgrade.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-upgrade-2",
    emoji: "🥂",
    title: "Check-in'de\n'any chance of\na better room?'",
    description:
      "Resepsiyon görevlisi ile göz teması, gülümseme, low-stakes soru. 'If it's not too much trouble' — entitled görünmeden club lounge erişimi koparmak.",
    durationMin: 10,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.upgrade",
    lessonId: "travel.c1.upgrade.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-upgrade-3",
    emoji: "🗝️",
    title: "Corporate rate'i\nuzatma için\nlobiledirme",
    description:
      "Üç gece extend etmek istiyorsun, corporate rate normalde geçmiyor. GM'e gitmeden duty manager'ı ikna et — 'I'd be enormously grateful if you could honour...'",
    durationMin: 12,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.upgrade",
    lessonId: "travel.c1.upgrade.3",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // -------- Sophisticated complaint — flight cancellation, lost luxury bag (3) --------
  {
    id: "scene-travel-c1-complaint-1",
    emoji: "✈️",
    title: "Uçuş iptal —\nhesap soran ama\nkibar tonla",
    description:
      "Gate agent'a bağırma. 'I appreciate this isn't your fault, but I'd like to understand what options I have under EU261...' — hak talep et, ses yükseltme.",
    durationMin: 12,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.complaint",
    lessonId: "travel.c1.complaint.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-complaint-2",
    emoji: "🧳",
    title: "Kayıp lüks bagaj —\nbaggage office'te\nikna konuşması",
    description:
      "Rimowa içinde takım elbise, ilaçlar, anahtarlar. 'I'd like to escalate this to a supervisor, if I may' — empati uyandır, formal kompansasyon iste.",
    durationMin: 13,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.complaint",
    lessonId: "travel.c1.complaint.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-complaint-3",
    emoji: "📝",
    title: "Otel'de uyku\nbozucu gürültü —\nyazılı şikayet",
    description:
      "Gece 3'te konstrüksiyon. Sabah duty manager'a 'I'd like to register a formal complaint' — partial refund veya gece bedelsiz almak için ölçülü, kayıt-altı dil.",
    durationMin: 11,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.complaint",
    lessonId: "travel.c1.complaint.3",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // -------- Engaging local guide / historian — deep cultural conversations (2) --------
  {
    id: "scene-travel-c1-local-1",
    emoji: "🏛️",
    title: "Roma'da tarihçi\nrehberle —\nempire decline sohbeti",
    description:
      "Yüzeyden çık. 'How do contemporary Romans relate to that imperial legacy?' — tarihçi-tonu sorular, allusion, hedge'li politika dokunuşu.",
    durationMin: 14,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.local",
    lessonId: "travel.c1.local.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-local-2",
    emoji: "🍷",
    title: "Bordeaux'da\nşarap üreticisi —\nterroir tartışması",
    description:
      "Tasting'de küçük üreticiye 'How has climate change reshaped your assemblage decisions?' — uzman vokabülerle uzman muamelesi, küçümseme yok.",
    durationMin: 13,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.local",
    lessonId: "travel.c1.local.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // -------- Reading regional accents in service contexts (2) --------
  {
    id: "scene-travel-c1-accent-1",
    emoji: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
    title: "Glasgow taksisinde —\nİskoç şoförün\nhızlı aksanı",
    description:
      "'Aye, ye'll be wantin' the West End, eh?' — 'wee', 'ken', 'pure dead brilliant'. Anlamadığında 'Sorry, could you say that again?' demeden tahmin, tekrar.",
    durationMin: 10,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.accent",
    lessonId: "travel.c1.accent.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-accent-2",
    emoji: "🛺",
    title: "Mumbai'de Indian\nEnglish — head-bobble\n+ hızlı konuşma",
    description:
      "'Do the needful', 'kindly revert', 'prepone the meeting' — Hindistan İngilizcesi kalıpları. Otel concierge, taksici, dükkan sahibi. Kibar netleştirme.",
    durationMin: 11,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.accent",
    lessonId: "travel.c1.accent.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // -------- Diplomatic conflict — overbooking, refund disputes, polite escalation (3) --------
  {
    id: "scene-travel-c1-diplomacy-1",
    emoji: "🛏️",
    title: "Overbooking —\n'walked' edildin,\nama nazik kal",
    description:
      "Otel seni başka mülke gönderiyor. 'I understand it's a stressful situation for you too, but the rate I paid was for this property...' — kompansasyon, transport, future stay credit.",
    durationMin: 12,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.diplomacy",
    lessonId: "travel.c1.diplomacy.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-diplomacy-2",
    emoji: "💳",
    title: "Çifte tahsilat —\nfront desk reddediyor,\nGM'e ölçülü escalation",
    description:
      "Resepsiyon 'sistem hatası değil' diyor. 'I'd like to speak with the duty manager, please — I'm sure we can sort this out civilly.' Sesin sakin, talebin net.",
    durationMin: 11,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.diplomacy",
    lessonId: "travel.c1.diplomacy.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-diplomacy-3",
    emoji: "🚫",
    title: "Tour iptal +\nrefund reddi —\noperator ile soğuk savaş",
    description:
      "Provider 'non-refundable' diyor, sigortayı tetikleyecek delili topla. 'I'd appreciate written confirmation of that policy, citing the clause...' — tehdit yok, paper trail var.",
    durationMin: 12,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.diplomacy",
    lessonId: "travel.c1.diplomacy.3",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // -------- Networking abroad — bumping into someone interesting (2) --------
  {
    id: "scene-travel-c1-network-1",
    emoji: "🛫",
    title: "Business class'ta\nyan koltukta\nVC partneri",
    description:
      "Laptop'taki deck'i fark ettin. 'I couldn't help noticing — are you in venture?' Doğal merak, pushy değil. 14 saatte LinkedIn-worthy konuşma çıkar.",
    durationMin: 11,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.network",
    lessonId: "travel.c1.network.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-travel-c1-network-2",
    emoji: "🥃",
    title: "Heathrow lounge —\nsenior diplomat\nile sohbet",
    description:
      "Bar'da konuşma açıldı. Brexit, Türk-Avrupa ilişkileri, Ukrayna. 'I'd be curious to hear your read on...' — fikir sorar gibi sorgu, kanaat dayatmadan.",
    durationMin: 12,
    mode: "travel",
    cefrLevel: "C1",
    skillId: "travel.c1.network",
    lessonId: "travel.c1.network.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
];
