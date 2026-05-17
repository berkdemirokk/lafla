// TOEFL Speaking — feed scenes for the 10 test-prep lessons.
// Mode: "testprep". Target audience: Turkish students applying to US grad
// programs / scholarships who need to clear TOEFL iBT Speaking with band 3-4.
//
// Scene IDs: scene-toefl-1 ... scene-toefl-10
// Lesson IDs map to apps/mobile/data/test-toefl-speaking-lesson.ts

import type { Scene } from "./scenes";

export const testToeflSpeakingScenes: Scene[] = [
  // Task 1 — Independent (45 sec, personal opinion)
  {
    id: "scene-toefl-1",
    emoji: "🎯",
    title: "TOEFL Task 1 —\nYalnız mı, takım mı?\n(45 sn)",
    description:
      "Independent task: kişisel tercih + 2 sebep + örnek. Band 4 yapısı: net görüş → 'two reasons' → spesifik örnek.",
    durationMin: 7,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task1",
    lessonId: "testprep.toefl.task1.preference.1",
    isNew: true,
    progressLabel: "1/10 ders",
  },
  {
    id: "scene-toefl-2",
    emoji: "💻",
    title: "TOEFL Task 1 —\nOnline ders\nkatılıyor musun?",
    description:
      "Agree/disagree: net pozisyon, hedge dilinden kaçın ('maybe' yasak), 2 spesifik sebep + örnek.",
    durationMin: 7,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task1",
    lessonId: "testprep.toefl.task1.agreedisagree.1",
    isNew: true,
    progressLabel: "2/10 ders",
  },
  {
    id: "scene-toefl-3",
    emoji: "⚖️",
    title: "TOEFL Task 1 —\nMaaş mı, tatmin mi?\nSeçim soruları",
    description:
      "Choice question: counterpoint stratejisi ('While X, in my opinion Y') band 4'ün anahtarı.",
    durationMin: 7,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task1",
    lessonId: "testprep.toefl.task1.choice.1",
    isNew: true,
    progressLabel: "3/10 ders",
  },

  // Task 2 — Campus situation (60 sec, read + listen + report)
  {
    id: "scene-toefl-4",
    emoji: "📚",
    title: "TOEFL Task 2 —\nKütüphane saati\nazaltıldı",
    description:
      "Campus announcement + öğrenci itirazı. Reporting dili: 'According to the announcement... the man disagrees because...'. Kendi görüşün yok.",
    durationMin: 8,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task2",
    lessonId: "testprep.toefl.task2.library.1",
    isNew: true,
    progressLabel: "4/10 ders",
  },
  {
    id: "scene-toefl-5",
    emoji: "🅿️",
    title: "TOEFL Task 2 —\nPark yeri kuralı\n+ öğrenci",
    description:
      "Yeni park politikası + Linda'nın iki argümanı. Reporting verb çeşitliliği ('argues', 'points out', 'adds') Language Use puanını yükseltir.",
    durationMin: 8,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task2",
    lessonId: "testprep.toefl.task2.parking.1",
    isNew: true,
    progressLabel: "5/10 ders",
  },
  {
    id: "scene-toefl-6",
    emoji: "🥗",
    title: "TOEFL Task 2 —\nYemekhane\nbitki bazlı menü",
    description:
      "Menü değişikliği + Tom'un desteği (kişisel + çevresel sebep). Reading'le bağ kurarak Topic Development band 4.",
    durationMin: 8,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task2",
    lessonId: "testprep.toefl.task2.cafeteria.1",
    isNew: true,
    progressLabel: "6/10 ders",
  },

  // Task 3 — Academic integration (60 sec, passage + lecture)
  {
    id: "scene-toefl-7",
    emoji: "🧠",
    title: "TOEFL Task 3 —\nAnchoring bias\n+ deney örneği",
    description:
      "Akademik integration: psikoloji kavramı (anchoring bias) + profesörün UN çark deneyi. Reading + listening tek paragrafta bağlanır.",
    durationMin: 9,
    mode: "testprep",
    cefrLevel: "C1",
    skillId: "testprep.toefl.task3",
    lessonId: "testprep.toefl.task3.concept.1",
    isNew: true,
    progressLabel: "7/10 ders",
  },
  {
    id: "scene-toefl-8",
    emoji: "🐀",
    title: "TOEFL Task 3 —\nSkinner deneyi\n+ teori",
    description:
      "Operant conditioning teorisi + Skinner kafesi. Deneyin teoriyi NASIL doğruladığını açık cümlede söyle ('This validates the theory because...').",
    durationMin: 9,
    mode: "testprep",
    cefrLevel: "C1",
    skillId: "testprep.toefl.task3",
    lessonId: "testprep.toefl.task3.theory.1",
    isNew: true,
    progressLabel: "8/10 ders",
  },

  // Task 4 — Lecture summary (60 sec, listening only)
  {
    id: "scene-toefl-9",
    emoji: "🐝",
    title: "TOEFL Task 4 —\nMutualism vs\ncommensalism",
    description:
      "Biyoloji lecture (reading YOK). İki kavram + birer örnek (arı/çiçek + remora/köpek balığı). 'Unlike mutualism' contrast'ı band 4.",
    durationMin: 9,
    mode: "testprep",
    cefrLevel: "C1",
    skillId: "testprep.toefl.task4",
    lessonId: "testprep.toefl.task4.biology.1",
    isNew: true,
    progressLabel: "9/10 ders",
  },
  {
    id: "scene-toefl-10",
    emoji: "🚲",
    title: "TOEFL Task 4 —\nExplicit vs\nimplicit bellek",
    description:
      "Bilişsel psikoloji: iki bellek türü + birer örnek (Paris + bisiklet). 'In contrast' signpost'u Topic Development açar.",
    durationMin: 9,
    mode: "testprep",
    cefrLevel: "C1",
    skillId: "testprep.toefl.task4",
    lessonId: "testprep.toefl.task4.psychology.1",
    isNew: true,
    progressLabel: "10/10 ders ✓",
  },
  {
    id: "scene-toefl-11",
    emoji: "🎓",
    title: "TOEFL Task 1 —\n45 sn formülü\n+ hız drili",
    description:
      "Independent: pozisyon → 2 sebep → örnek → kapanış. 15 sn'lik girizgahı sil, 45 sn'yi tam doldur. 'Well, in my opinion' = zaman hırsızı.",
    durationMin: 8,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task1",
    lessonId: "testprep.toefl.task1.formula.1",
    isNew: true,
    progressLabel: "11/14 ders",
  },
  {
    id: "scene-toefl-12",
    emoji: "🏋️",
    title: "TOEFL Task 2 —\nGym ücreti\n+ Sarah'ın itirazı",
    description:
      "Campus integrated: zorunlu spor salonu ücreti + öğrenci tepkisi. Reading argümanlarını öğrencinin sebepleriyle KARŞILAŞTIRMALI bağla.",
    durationMin: 9,
    mode: "testprep",
    cefrLevel: "B2",
    skillId: "testprep.toefl.task2",
    lessonId: "testprep.toefl.task2.gymfee.1",
    isNew: true,
    progressLabel: "12/14 ders",
  },
  {
    id: "scene-toefl-13",
    emoji: "📚",
    title: "TOEFL Task 3 —\nNetwork effects\n+ telefon örneği",
    description:
      "Akademik integration: ekonomi kavramı (ağ etkileri) + telefon / sosyal medya örnekleri. 'The professor uses X to illustrate Y' köprü cümlesi.",
    durationMin: 9,
    mode: "testprep",
    cefrLevel: "C1",
    skillId: "testprep.toefl.task3",
    lessonId: "testprep.toefl.task3.network.1",
    isNew: true,
    progressLabel: "13/14 ders",
  },
  {
    id: "scene-toefl-14",
    emoji: "🧩",
    title: "TOEFL Task 4 —\nCognitive\ndissonance",
    description:
      "Lecture-only (reading YOK): sosyal psikoloji kavramı + iki örnek (sigara içen + kopya çeken öğrenci). Sadece 'the professor / the lecture' referansı.",
    durationMin: 9,
    mode: "testprep",
    cefrLevel: "C1",
    skillId: "testprep.toefl.task4",
    lessonId: "testprep.toefl.task4.dissonance.1",
    isNew: true,
    progressLabel: "14/14 ders ✓",
  },
];
