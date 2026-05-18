// Social C1 scenes — sophisticated social register.
// Dinner parties, mentoring, hosting, graceful disagreement, de-escalation, exits.

import type { Scene } from "./scenes";

export const socialC1Scenes: ReadonlyArray<Scene> = [
  // Dinner party with academics / executives — debating ideas softly (3 scenes)
  {
    id: "scene-daily-c1-dinner-1",
    emoji: "🍷",
    title: "Akademisyenlerle\nyemekte fikir ayrı —\nsesini yükseltme",
    description:
      "12 kişilik masada bir profesör güçlü bir tez kuruyor — sen ikna olmadın. 'I'd gently push back on that...' ile alanı dağıtmadan itiraz et.",
    durationMin: 12,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.dinner",
    lessonId: "daily.c1.dinner.1",
    isNew: true,
    progressLabel: "12 tur · C1",
  },
  {
    id: "scene-daily-c1-dinner-2",
    emoji: "🥂",
    title: "Yönetici yemeği:\nfikir savun ama\nhavayı bozma",
    description:
      "CEO'lar arasında AI etiği masada. 'There's a counterintuitive case to be made here...' — pozisyonunu tut, dramatize etme.",
    durationMin: 13,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.dinner",
    lessonId: "daily.c1.dinner.2",
    isNew: true,
    progressLabel: "13 tur · C1",
  },
  {
    id: "scene-daily-c1-dinner-3",
    emoji: "📚",
    title: "Edebiyatçılarla\nyemek — okumadığın\nkitabı gez",
    description:
      "Masa bir romanı tartışıyor, sen okumadın. Bilmediğini sahteleme — 'I haven't read it — what made it stick for you?' ile merak göster, sahtekarlık etme.",
    durationMin: 11,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.dinner",
    lessonId: "daily.c1.dinner.3",
    isNew: true,
    progressLabel: "11 tur · C1",
  },

  // Mentoring a 22-year-old at a networking event (2 scenes)
  {
    id: "scene-daily-c1-mentor-1",
    emoji: "🌱",
    title: "Networking'de\n22 yaşındaki —\ntepeden bakma",
    description:
      "Genç biri kariyer tavsiyesi istiyor. 'When I was where you are, I wish someone had told me...' — küçümsemeden, eşit gözden.",
    durationMin: 12,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.mentor",
    lessonId: "daily.c1.mentor.1",
    isNew: true,
    progressLabel: "12 tur · C1",
  },
  {
    id: "scene-daily-c1-mentor-2",
    emoji: "🧭",
    title: "Yanlış yolu seçen\ngence — uyar ama\nkararı ona bırak",
    description:
      "22 yaşındaki sana zayıf bir teklifi anlatıyor. 'Have you thought about...?' — yargılamadan soru sorarak yönlendir.",
    durationMin: 11,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.mentor",
    lessonId: "daily.c1.mentor.2",
    isNew: true,
    progressLabel: "11 tur · C1",
  },

  // Disagreeing at a friend group about something they all assume (2 scenes)
  {
    id: "scene-daily-c1-disagree-1",
    emoji: "🪞",
    title: "Arkadaş grubu\nhepsi aynı fikirde —\nsen değilsin",
    description:
      "Beş arkadaş bir tanıdığı yargılıyor, sen katılmıyorsun. 'I might be the odd one out here, but...' — hiziplemeden farklılaş.",
    durationMin: 12,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.disagree",
    lessonId: "daily.c1.disagree.1",
    isNew: true,
    progressLabel: "12 tur · C1",
  },
  {
    id: "scene-daily-c1-disagree-2",
    emoji: "🌀",
    title: "Herkesin\nvarsaydığı şeyi\nnazikçe sorgula",
    description:
      "Grup 'X firması harika' diyor — sen aynı fikirde değilsin. 'I want to push on that a little, if I may...' — varsayımı aç.",
    durationMin: 11,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.disagree",
    lessonId: "daily.c1.disagree.2",
    isNew: true,
    progressLabel: "11 tur · C1",
  },

  // Hosting your own event — keeping conversation flowing (2 scenes)
  {
    id: "scene-daily-c1-host-1",
    emoji: "🕯️",
    title: "Kendi yemeğini\nverirken — sessiz\nmisafiri içeri çek",
    description:
      "Masada biri sustu, biri konuşmayı domine ediyor. 'Sarah, you mentioned something earlier I want to come back to...' — denge kur.",
    durationMin: 12,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.host",
    lessonId: "daily.c1.host.1",
    isNew: true,
    progressLabel: "12 tur · C1",
  },
  {
    id: "scene-daily-c1-host-2",
    emoji: "🪔",
    title: "Ev sahibiyim,\nkonu çıkmaza girdi —\nyumuşak çevir",
    description:
      "Tartışma germeye başladı. 'On a related but lighter note...' — yüz kaybettirmeden konuyu kaydır.",
    durationMin: 11,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.host",
    lessonId: "daily.c1.host.2",
    isNew: true,
    progressLabel: "11 tur · C1",
  },

  // Discussing politics/religion across views with grace (2 scenes)
  {
    id: "scene-daily-c1-politics-1",
    emoji: "🗳️",
    title: "Karşı görüşten\nbiriyle siyaset —\nzarafetle tartış",
    description:
      "Senden farklı oy veren biriyle yemekteyiz. 'I see why you'd land there — I land somewhere else, here's why...' — saygıyla.",
    durationMin: 13,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.politics",
    lessonId: "daily.c1.politics.1",
    isNew: true,
    progressLabel: "13 tur · C1",
  },
  {
    id: "scene-daily-c1-politics-2",
    emoji: "🕊️",
    title: "Din ve inanç:\nfarklı dünyada —\nköprü kur",
    description:
      "İnanç farkı masada açıldı. 'I come at this from a different tradition, but I think we're circling the same question...' — soyutla.",
    durationMin: 12,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.politics",
    lessonId: "daily.c1.politics.2",
    isNew: true,
    progressLabel: "12 tur · C1",
  },

  // De-escalating two friends fighting at a wedding (2 scenes)
  {
    id: "scene-daily-c1-deescalate-1",
    emoji: "💒",
    title: "Düğünde iki dost\nkavga ediyor —\naraya gir",
    description:
      "Resepsiyonda eski bir mesele patladı. 'Hey — not here, not tonight. Let's take a walk...' — yargı yok, mesafe ver.",
    durationMin: 12,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.deescalate",
    lessonId: "daily.c1.deescalate.1",
    isNew: true,
    progressLabel: "12 tur · C1",
  },
  {
    id: "scene-daily-c1-deescalate-2",
    emoji: "🤝",
    title: "Sarhoş kavga —\niki tarafı da\nkaybetme",
    description:
      "İki yakın arkadaş yüksek sesle. 'You're both right about something — let's table this until tomorrow...' — taraf tutmadan kapat.",
    durationMin: 11,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.deescalate",
    lessonId: "daily.c1.deescalate.2",
    isNew: true,
    progressLabel: "11 tur · C1",
  },

  // Leaving a party without making it weird (2 scenes)
  {
    id: "scene-daily-c1-exit-1",
    emoji: "🚪",
    title: "Partiden çıkış —\ngarip etmeden\nveda et",
    description:
      "Erken çıkman lazım, ev sahibini incitmek istemiyorsun. 'I've got an early one — but this was exactly what I needed tonight...' — kısa, sıcak.",
    durationMin: 10,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.exit",
    lessonId: "daily.c1.exit.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-daily-c1-exit-2",
    emoji: "🌙",
    title: "Konuşma uzadı —\nzarifçe kopar,\nkırma",
    description:
      "Biri seni bir köşede 20 dakikadır tutuyor. 'I want to grab one more word with the host before I sneak out — but let's continue this...' — onurlu çıkış.",
    durationMin: 10,
    mode: "daily",
    cefrLevel: "C1",
    skillId: "daily.c1.exit",
    lessonId: "daily.c1.exit.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
];
