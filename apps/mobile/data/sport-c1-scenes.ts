// Sport C1 scenes — pundit-level tactical analysis, coaching philosophy,
// athlete management, sports journalism, cross-sport literacy.
// Completes the sport curve at expert register (60 A1-B2 scenes preceded).

import type { Scene } from "./scenes";

export const sportC1Scenes: ReadonlyArray<Scene> = [
  // Tactical breakdown (3) — football, basketball, tennis
  {
    id: "scene-sport-c1-tactics-1",
    emoji: "⚽",
    title: "Maç sonrası\ntaktik —\nxG ve gegenpressing",
    description:
      "Arkadaşlarla maç sonrası tartışma. 'They racked up 2.8 xG but the press got bypassed in midfield.' Şutta üstünlük, yapıda kırılma.",
    durationMin: 12,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.tactics",
    lessonId: "sport.c1.tactics.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-tactics-2",
    emoji: "🏀",
    title: "NBA pick-and-roll —\ndrop vs switch\ntartışması",
    description:
      "Basketbol pundit modu. 'They're hedging hard on the ball-screen, leaving the weak-side corner open.' Spacing ve rotasyon dili.",
    durationMin: 11,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.tactics",
    lessonId: "sport.c1.tactics.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-tactics-3",
    emoji: "🎾",
    title: "Tenis maç analizi —\nfirst-serve %\nve return depth",
    description:
      "Slam maç sonrası okuma. 'He's living off his second serve and the return is sitting too short.' İstatistikle hikâye anlat.",
    durationMin: 10,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.tactics",
    lessonId: "sport.c1.tactics.3",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // Coaching philosophy (3)
  {
    id: "scene-sport-c1-coach-1",
    emoji: "🧠",
    title: "Pep vs Klopp —\nfelsefe ve\nin-possession yapı",
    description:
      "Manager karşılaştırması. 'Pep wants positional purity; Klopp will eat chaos for breakfast.' İdeoloji ve uygulama dili.",
    durationMin: 13,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.coach",
    lessonId: "sport.c1.coach.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-coach-2",
    emoji: "📈",
    title: "Periodization —\nyük yönetimi\nve maç ritmi",
    description:
      "Antrenman metodolojisi. 'They're tapering loads pre-international break — classic micro-cycle planning.' Bilim ve sezgi.",
    durationMin: 12,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.coach",
    lessonId: "sport.c1.coach.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-coach-3",
    emoji: "🛡️",
    title: "Defansif koordinatör —\nzone vs man,\nNFL sahnesi",
    description:
      "Amerikan futbolu derinliği. 'Their Cover-3 shell folds under play-action — coordinator's losing the room.' Şemalar ve adam.",
    durationMin: 11,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.coach",
    lessonId: "sport.c1.coach.3",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // Athlete management (2)
  {
    id: "scene-sport-c1-contract-1",
    emoji: "📝",
    title: "Bosman sonrası —\nrelease clause\nve serbest transfer",
    description:
      "Sözleşme dili. 'His clause is north of 80 mil, but the agent is angling for a swap deal with add-ons.' Pazarlık registeri.",
    durationMin: 12,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.contract",
    lessonId: "sport.c1.contract.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-contract-2",
    emoji: "💰",
    title: "FFP ve salary cap —\nkulüp finansal\ndisiplini",
    description:
      "Financial Fair Play ve NBA luxury tax. 'They're hard-capped after the sign-and-trade — no MLE flexibility left.' Tavan altında manevra.",
    durationMin: 13,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.contract",
    lessonId: "sport.c1.contract.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // Sports journalism (2)
  {
    id: "scene-sport-c1-journalism-1",
    emoji: "✍️",
    title: "Maç raporu yazımı —\nopening lede\nve narrative arc",
    description:
      "Gazete sütunu kurgusu. 'Bury the score in paragraph three; lead with the moment that turned the tie.' The Athletic registeri.",
    durationMin: 14,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.journalism",
    lessonId: "sport.c1.journalism.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-journalism-2",
    emoji: "🎙️",
    title: "Canlı yorum —\ncolour commentary\nve play-by-play",
    description:
      "Yayın diline geçiş. 'And he's bending it round the wall — oh, what a finish from the edge of the box!' Ritim ve tonlama.",
    durationMin: 11,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.journalism",
    lessonId: "sport.c1.journalism.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // Cross-sport literacy (2)
  {
    id: "scene-sport-c1-cross-1",
    emoji: "🏎️",
    title: "F1'den NBA'e —\nstratejiyi\ndiller arası taşımak",
    description:
      "Bir konuşma, üç sahne. 'Verstappen's undercut was Spoelstra-level chess — pit window like a timeout.' Spor-arası analoji.",
    durationMin: 12,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.cross",
    lessonId: "sport.c1.cross.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-cross-2",
    emoji: "🌍",
    title: "Champions League,\nMLB, MotoGP —\ntek sohbet akışı",
    description:
      "Pivot ustası ol. 'Real's away leg, the Dodgers' bullpen, and Marquez's late braking — pattern recognition across codes.' Akışkan geçiş.",
    durationMin: 13,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.cross",
    lessonId: "sport.c1.cross.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // Athlete biography (2)
  {
    id: "scene-sport-c1-bio-1",
    emoji: "🎾",
    title: "Federer'in geç dönemi —\nbacking down\nand still winning",
    description:
      "Kariyer yayı anlatımı. 'He shortened the points, took time away from the baseliner — old-master economy.' Düşüş, adaptasyon, miras.",
    durationMin: 12,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.bio",
    lessonId: "sport.c1.bio.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
  {
    id: "scene-sport-c1-bio-2",
    emoji: "👑",
    title: "LeBron'un dayanıklılığı —\nlongevity ve\nathletic capital",
    description:
      "Comeback ve süreklilik. 'Twenty-plus seasons, mileage hidden by load management — a body curated, not just trained.' Biyografi derinliği.",
    durationMin: 12,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.bio",
    lessonId: "sport.c1.bio.2",
    isNew: true,
    progressLabel: "10 tur · C1",
  },

  // Officiating debate (1)
  {
    id: "scene-sport-c1-officiate-1",
    emoji: "📺",
    title: "VAR tartışması —\n'soft penalty'\nteknik analizi",
    description:
      "Hakem kararı dissect. 'It's a clear and obvious threshold — minimal contact, but the boot does catch him.' Replay register ve protokol.",
    durationMin: 11,
    mode: "sport",
    cefrLevel: "C1",
    skillId: "sport.c1.officiate",
    lessonId: "sport.c1.officiate.1",
    isNew: true,
    progressLabel: "10 tur · C1",
  },
];
