// Professional B1 — Formal/Semi-Formal Encounters scenes (10).
// Pairs with professionalB1Lessons in professional-b1-lesson.ts.
// Audience: Turkish working professionals navigating formal bureaucratic
// encounters with foreign institutions (banks, government, lawyers, etc.).

import type { Scene } from "./scenes";

export const professionalB1Scenes: Scene[] = [
  {
    id: "scene-professional-b1-1",
    emoji: "🏦",
    title: "Yabancı bankada\nhesap aç —\nID, depozit, kart",
    description:
      "'I'd like to open a current account' — hesap türü, aylık ücret, debit kart. Bankacılık nezaketi.",
    durationMin: 7,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.bank.1",
    isNew: true,
    progressLabel: "1/10 ders",
  },
  {
    id: "scene-professional-b1-2",
    emoji: "🛡️",
    title: "Sigorta acentası —\nkapsam, prim,\nhasar süreci",
    description:
      "'Could you walk me through the coverage?' — auto/health sigortası alırken sorulacak şeyler.",
    durationMin: 7,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.insurance.1",
    isNew: true,
    progressLabel: "2/10 ders",
  },
  {
    id: "scene-professional-b1-3",
    emoji: "⚖️",
    title: "Avukatla\nilk görüşme —\nsorun, ücret, adım",
    description:
      "Hukuki bir kaygıyı kısaca anlat, saatlik ücreti sor, sonraki adımları öğren. Resmi ama net.",
    durationMin: 7,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.lawyer.1",
    isNew: true,
    progressLabel: "3/10 ders",
  },
  {
    id: "scene-professional-b1-4",
    emoji: "📝",
    title: "Tanık ifadesi —\nkısa, net,\npast tense",
    description:
      "'To the best of my recollection' — kavşakta, kafede ne gördün? Past continuous + past simple disiplin.",
    durationMin: 6,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.witness.1",
    isNew: true,
    progressLabel: "4/10 ders",
  },
  {
    id: "scene-professional-b1-5",
    emoji: "🏛️",
    title: "Resmi belge talebi —\nform, gişe,\nsüre",
    description:
      "Devlet dairesinde: hangi form, hangi pencere, ne kadar bekleyeceksin? Express seçenek var mı?",
    durationMin: 6,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.govoffice.1",
    isNew: true,
    progressLabel: "5/10 ders",
  },
  {
    id: "scene-professional-b1-6",
    emoji: "🤒",
    title: "Hastalık izni —\nyöneticini ara,\ne-posta yaz",
    description:
      "'I'm afraid I won't be able to come in today' — sebep + süre + devir teslim. Telefon ve e-posta tonu.",
    durationMin: 6,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.sickleave.1",
    isNew: true,
    progressLabel: "6/10 ders",
  },
  {
    id: "scene-professional-b1-7",
    emoji: "🔑",
    title: "Kira görüşmesi —\ndepozit, faturalar,\npazarlık",
    description:
      "Ev sahibiyle daireyi konuş: 'Would you be open to a twelve-month lease?' Kibarca pazarlık.",
    durationMin: 7,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.lease.1",
    isNew: true,
    progressLabel: "7/10 ders",
  },
  {
    id: "scene-professional-b1-8",
    emoji: "📞",
    title: "Şikayeti yükselt —\nsoğukkanlı,\nkararlı",
    description:
      "Üç haftadır çözülmeyen fatura sorunu. 'With respect, I'd like to escalate this to a supervisor.'",
    durationMin: 7,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.escalation.1",
    isNew: true,
    progressLabel: "8/10 ders",
  },
  {
    id: "scene-professional-b1-9",
    emoji: "🚓",
    title: "Polise ifade —\nhırsızlık,\nrapor kopyası",
    description:
      "Çantan çalındı. Past tense disiplin + 'Could I have a copy of the report for insurance purposes?'",
    durationMin: 7,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.policestatement.1",
    isNew: true,
    progressLabel: "9/10 ders",
  },
  {
    id: "scene-professional-b1-10",
    emoji: "🪪",
    title: "Belediye —\nID yenileme,\nrandevu",
    description:
      "Oturma izni yenileme: gerekli belgeler, ücret, randevu. 'I'm here to renew my residence permit.'",
    durationMin: 7,
    mode: "professional",
    cefrLevel: "B1",
    skillId: "professional.b1",
    lessonId: "professional.b1.municipality.1",
    isNew: true,
    progressLabel: "10/10 ders ✓",
  },
];
