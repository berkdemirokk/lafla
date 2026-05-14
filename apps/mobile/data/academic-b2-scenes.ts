// Academic B2 scenes — feed entries for higher-education English content.
// 10 scenes paired with academic-b2-lesson.ts lessons.

import type { Scene } from "./scenes";

export const academicB2Scenes: ReadonlyArray<Scene> = [
  {
    id: "scene-academic-b2-1",
    emoji: "🎓",
    title:
      "PhD mülakatı —\n'What are your\nresearch interests?'",
    description:
      "Admissions paneliyle online mülakat. İlgi alanı, motivasyon, programa uyum — üç soruyu akademik dürüstlükle yanıtla.",
    durationMin: 9,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.admissions-interview.1",
    isNew: true,
    progressLabel: "1/10 ders",
  },
  {
    id: "scene-academic-b2-2",
    emoji: "🗒️",
    title:
      "İlk supervisor\ngörüşmesi —\nbeklentileri çerçevele",
    description:
      "Tezini denetleyecek hocanla ilk birebir. Görüşme sıklığı, deliverable, geri bildirim tarzı — pasif değil, profesyonel ol.",
    durationMin: 9,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.first-supervisor-meeting.1",
    isNew: true,
    progressLabel: "2/10 ders",
  },
  {
    id: "scene-academic-b2-3",
    emoji: "🎤",
    title:
      "Konferans Q&A —\nzorlu soruyu\nkibarca savun",
    description:
      "Sunumdan sonra üç farklı eleştiri: yöntemsel itiraz, kapsam dışı soru, ego savaşı. Hepsini farklı taktikle karşıla.",
    durationMin: 9,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.conference-qa.1",
    isNew: true,
    progressLabel: "3/10 ders",
  },
  {
    id: "scene-academic-b2-4",
    emoji: "📄",
    title:
      "Paper discussion —\nmethodology'ni\nanlat ve karşılaştır",
    description:
      "Reading group'ta paper'ını sunuyorsun. Tek cümlelik katkı, ilgili literatürle ilişki, sınırlılık — akademik diyalog kasları.",
    durationMin: 9,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.paper-discussion.1",
    isNew: true,
    progressLabel: "4/10 ders",
  },
  {
    id: "scene-academic-b2-5",
    emoji: "💷",
    title:
      "Burs mülakatı —\nliyakat + maddi ihtiyaç\ndengeli anlat",
    description:
      "Burs paneline akademik başarı + finansal hikayeni dilencilik yapmadan, onurlu ve somut anlat. Geri ödeme niyetini çerçevele.",
    durationMin: 9,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.scholarship-interview.1",
    isNew: true,
    progressLabel: "5/10 ders",
  },
  {
    id: "scene-academic-b2-6",
    emoji: "📊",
    title:
      "5 dk araştırma\nproposal pitch'i —\nproblem, yaklaşım, katkı",
    description:
      "5 dakikada araştırma önerisini sat: tek cümlelik problem, iki aşamalı yöntem, somut katkı, üç fizibilite delili.",
    durationMin: 9,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.proposal-pitch.1",
    isNew: true,
    progressLabel: "6/10 ders",
  },
  {
    id: "scene-academic-b2-7",
    emoji: "🛂",
    title:
      "Akademik vize\nmülakatı —\ngeri dönüş niyeti",
    description:
      "Konsolosluk mülakatı (MSc / PhD). Finansman kaynağı + 'clear intent to return' = vize altın formülü.",
    durationMin: 9,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.student-visa.1",
    isNew: true,
    progressLabel: "7/10 ders",
  },
  {
    id: "scene-academic-b2-8",
    emoji: "🆘",
    title:
      "Süpervizörden\nuzatma + yardım\niste — profesyonelce",
    description:
      "Tezde takıldın, deadline kaçacak. Erken haber + somut sebep + net yeni tarih + telafi planı — pasif kalma.",
    durationMin: 8,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.asking-for-extension.1",
    isNew: true,
    progressLabel: "8/10 ders",
  },
  {
    id: "scene-academic-b2-9",
    emoji: "🍷",
    title:
      "Konferans yemeği —\nsmall talk +\nresearch dengesi",
    description:
      "Senior bir akademisyenle akşam yemeği. İltifat + kendini tanıt + araştırma sohbeti + takip ricası — soğuk email değil.",
    durationMin: 8,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.networking-dinner.1",
    isNew: true,
    progressLabel: "9/10 ders",
  },
  {
    id: "scene-academic-b2-10",
    emoji: "⚖️",
    title:
      "Tez bölümünü\nkomite önünde\nsavun",
    description:
      "Doktora komitesi: yöntem, yorum, katkı — üç eleştiri. Akademik dürüstlük + ölçülü savunma. Defansif değil olgun ol.",
    durationMin: 10,
    mode: "academic",
    cefrLevel: "B2",
    skillId: "academic.b2",
    lessonId: "academic.b2.dissertation-defense.1",
    isNew: true,
    progressLabel: "10/10 ders ✓",
  },
];
