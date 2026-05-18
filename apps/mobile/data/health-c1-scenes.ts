// Health C1 scenes — sophisticated medical communication for educated adults.
// Informed-patient register, peer-to-peer feel with providers, analytical
// treatment trade-off conversations. The user is an adult navigating health
// systems in English-speaking countries with full agency, not deference.

import type { Scene } from "./scenes";

export const healthC1Scenes: ReadonlyArray<Scene> = [
  // Informed second opinion with neurologist (3 scenes)
  {
    id: "scene-health-c1-secondop-1",
    emoji: "🧠",
    title: "Nörolog'la ikinci\ngörüş — research-backed\nsorular",
    description:
      "MS şüphesi. İlk nöroloğun teşhisini sorgulamak için literatür okudun. 'McDonald criteria'ya göre lezyonlar gerçekten dissemination in time'ı karşılıyor mu?'",
    durationMin: 14,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.secondop",
    lessonId: "health.c1.secondop.1",
    isNew: true,
    progressLabel: "14 tur · C1",
  },
  {
    id: "scene-health-c1-secondop-2",
    emoji: "📑",
    title: "MR görüntülerini\nbirlikte gözden\ngeçirmek",
    description:
      "Kendi MR'ını getirdin. Radyolog raporundaki 'nonspecific white matter hyperintensities' ifadesini sorguluyorsun. Migraine mı, demyelination mı?",
    durationMin: 13,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.secondop",
    lessonId: "health.c1.secondop.2",
    isNew: true,
    progressLabel: "13 tur · C1",
  },
  {
    id: "scene-health-c1-secondop-3",
    emoji: "💊",
    title: "Tedavi planını\nçatıştırmak — DMT\nseçimi",
    description:
      "İlk nörolog ocrelizumab önerdi, sen daha düşük riskli bir başlangıç tercih ediyorsun. Efficacy vs. safety trade-off'unu analitik tartış.",
    durationMin: 15,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.secondop",
    lessonId: "health.c1.secondop.3",
    isNew: true,
    progressLabel: "15 tur · C1",
  },

  // Insurance appeal — denial reversal (2 scenes)
  {
    id: "scene-health-c1-appeal-1",
    emoji: "📨",
    title: "Sigorta reddine\nitiraz — poliçe\ndili alıntılayarak",
    description:
      "MRI 'medically necessary değil' diye reddedildi. Poliçenin Section 4.2'sini, ACR appropriateness criteria'yı ve nöroloğun letter of medical necessity'sini birleştir.",
    durationMin: 14,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.appeal",
    lessonId: "health.c1.appeal.1",
    isNew: true,
    progressLabel: "14 tur · C1",
  },
  {
    id: "scene-health-c1-appeal-2",
    emoji: "⚖️",
    title: "External review\ntalebi — peer-to-peer\nsonrasında",
    description:
      "İç itiraz reddedildi. State insurance commissioner'a IRO talebi yazıyorsun. Klinik kanıt, emsal vakalar, network adequacy argümanı.",
    durationMin: 13,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.appeal",
    lessonId: "health.c1.appeal.2",
    isNew: true,
    progressLabel: "13 tur · C1",
  },

  // Mental health depth — therapist intake (3 scenes)
  {
    id: "scene-health-c1-mental-1",
    emoji: "🪞",
    title: "Terapist intake —\nanhedonia ve\nego-dystonic düşünceler",
    description:
      "'Üzgünüm' demenin ötesinde. 'Six months of pervasive anhedonia, ego-dystonic intrusive thoughts about my worth — not ideation, but corrosive.' Sofistike öz-rapor.",
    durationMin: 16,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.mental",
    lessonId: "health.c1.mental.1",
    isNew: true,
    progressLabel: "16 tur · C1",
  },
  {
    id: "scene-health-c1-mental-2",
    emoji: "🧩",
    title: "Modalite tartışması\n— CBT mi, IFS mi,\npsikodinamik mi?",
    description:
      "Terapist CBT öneriyor, sen 'I've done two rounds of CBT — symptom-level relief, but root affect regulation hasn't shifted. I'm curious about IFS.' Modalite müzakeresi.",
    durationMin: 14,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.mental",
    lessonId: "health.c1.mental.2",
    isNew: true,
    progressLabel: "14 tur · C1",
  },
  {
    id: "scene-health-c1-mental-3",
    emoji: "💭",
    title: "Psikiyatristle\nilaç müzakeresi —\nSSRI vs. SNRI",
    description:
      "Sertraline'da sexual side effects ve emotional blunting. Bupropion augmentation mı, switch mi? Half-life, withdrawal protokolü, off-label kullanımları tartış.",
    durationMin: 15,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.mental",
    lessonId: "health.c1.mental.3",
    isNew: true,
    progressLabel: "15 tur · C1",
  },

  // Chronic condition self-management (2 scenes)
  {
    id: "scene-health-c1-chronic-1",
    emoji: "🩸",
    title: "Endokrinolog'la\nCGM verisi okuma —\nTime-in-Range",
    description:
      "Tip 1 diyabet. 'My TIR is 72%, but I'm getting nocturnal hypos twice a week. Basal tapering or dual-wave bolus for that 9 PM rise?' Veri-temelli müzakere.",
    durationMin: 15,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.chronic",
    lessonId: "health.c1.chronic.1",
    isNew: true,
    progressLabel: "15 tur · C1",
  },
  {
    id: "scene-health-c1-chronic-2",
    emoji: "📊",
    title: "A1C platosu —\nteknolojiye geçiş\nargümanı",
    description:
      "İki yıldır 7.4'te takılı. Closed-loop sisteme geçmek istiyorsun, sigorta engeli var. Endokrinoloğa rationale ver, prior auth letter'ı koordine et.",
    durationMin: 13,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.chronic",
    lessonId: "health.c1.chronic.2",
    isNew: true,
    progressLabel: "13 tur · C1",
  },

  // Pre-surgical decision (2 scenes)
  {
    id: "scene-health-c1-surgery-1",
    emoji: "🔪",
    title: "Cerrah'la risk-fayda\nanalizi — elektif\nameliyat",
    description:
      "Discectomy önerildi. 'What's the absolute risk reduction vs. continued PT? NNT? Long-term outcome data at 5 years?' Konservatif yol açık mı, hâlâ?",
    durationMin: 14,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.surgery",
    lessonId: "health.c1.surgery.1",
    isNew: true,
    progressLabel: "14 tur · C1",
  },
  {
    id: "scene-health-c1-surgery-2",
    emoji: "🩻",
    title: "Anestezist konsültü\n— komorbidite ve\nteknik seçimi",
    description:
      "Sleep apnea + anksiyete + statin kullanımı. Genel vs. spinal anestezi trade-off'u. Premedication, intraop awareness riski, postop pain protocol planla.",
    durationMin: 13,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.surgery",
    lessonId: "health.c1.surgery.2",
    isNew: true,
    progressLabel: "13 tur · C1",
  },

  // End-of-life / palliative (2 scenes)
  {
    id: "scene-health-c1-eol-1",
    emoji: "🕊️",
    title: "Palyatif ekip\ntoplantısı —\ngoals of care",
    description:
      "Ailesinin yerine konuşuyorsun. 'Mom's been clear: quality over quantity. Let's transition from aggressive treatment to comfort-focused care.' POLST formu, hospice eligibility.",
    durationMin: 16,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.eol",
    lessonId: "health.c1.eol.1",
    isNew: true,
    progressLabel: "16 tur · C1",
  },
  {
    id: "scene-health-c1-eol-2",
    emoji: "📜",
    title: "Advance directive\ngörüşmesi — DNR\nve vekil tayini",
    description:
      "Kendi advance directive'ini düzenliyorsun. PCP ile: intubation, artificial nutrition, CPR limitleri. Health care proxy'ye verdiğin authority'nin sınırları.",
    durationMin: 14,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.eol",
    lessonId: "health.c1.eol.2",
    isNew: true,
    progressLabel: "14 tur · C1",
  },

  // Pharmacist consultation (1 scene)
  {
    id: "scene-health-c1-pharmacy-1",
    emoji: "💊",
    title: "Eczacıyla polifarmasi\nincelemesi — etkileşim\nve sadeleştirme",
    description:
      "Yedi ilaç kullanıyorsun. 'I'd like a brown bag review. I'm concerned about the warfarin–amiodarone interaction and whether the PPI is still indicated.' Deprescribing tartışması.",
    durationMin: 12,
    mode: "health",
    cefrLevel: "C1",
    skillId: "health.c1.pharmacy",
    lessonId: "health.c1.pharmacy.1",
    isNew: true,
    progressLabel: "12 tur · C1",
  },
];
