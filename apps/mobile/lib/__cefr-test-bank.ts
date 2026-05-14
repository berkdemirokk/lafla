// Lafla — Placement test question bank.
// 12 hand-tuned items across A1–C1, four sub-skills.
// The adaptive engine in app/placement-test.tsx picks a question from this
// bank by targeting both `skillTested` and `targetLevel`.

import type { CefrLevel } from "./cefr-level";

export type PlacementSkill = "vocab" | "reading" | "listening" | "self_rate";

export interface PlacementQuestion {
  id: string;
  /** Difficulty of THIS question (not the user's level). */
  targetLevel: CefrLevel;
  skillTested: PlacementSkill;
  /** Turkish-facing prompt shown to the user. */
  prompt_tr: string;
  /** Optional English text — the actual word/sentence under test. */
  prompt_en?: string;
  /** Multiple-choice options (vocab / reading / listening). */
  options?: string[];
  /** Index into `options` for the correct answer. */
  correctIndex?: number;
  /** Self-rating scale (only for skillTested === "self_rate"). */
  selfRateScale?: {
    min: number;
    max: number;
    minLabel_tr: string;
    maxLabel_tr: string;
  };
}

export const placementQuestions: PlacementQuestion[] = [
  // ----------------------------------------------------------------
  // VOCAB — 4 questions, A1 → C1
  // ----------------------------------------------------------------
  {
    id: "v-a1-1",
    targetLevel: "A1",
    skillTested: "vocab",
    prompt_tr: "'Apple' ne demek?",
    prompt_en: "apple",
    options: ["Elma", "Armut", "Portakal", "Şeftali"],
    correctIndex: 0,
  },
  {
    id: "v-a2-1",
    targetLevel: "A2",
    skillTested: "vocab",
    prompt_tr: "'Tired' kelimesinin Türkçe karşılığı?",
    prompt_en: "tired",
    options: ["Mutlu", "Yorgun", "Aç", "Üzgün"],
    correctIndex: 1,
  },
  {
    id: "v-b1-1",
    targetLevel: "B1",
    skillTested: "vocab",
    prompt_tr: "Cümleyi tamamla: 'I'll meet you ___ the corner.'",
    prompt_en: "I'll meet you ___ the corner.",
    options: ["in", "on", "at", "by"],
    correctIndex: 2,
  },
  {
    id: "v-b2-1",
    targetLevel: "B2",
    skillTested: "vocab",
    prompt_tr: "'To procrastinate' ne anlama gelir?",
    prompt_en: "procrastinate",
    options: [
      "Erteleme alışkanlığı",
      "Acele etmek",
      "Zaman ayırmak",
      "Karar vermek",
    ],
    correctIndex: 0,
  },

  // ----------------------------------------------------------------
  // READING — 4 questions, A2 → C1
  // ----------------------------------------------------------------
  {
    id: "r-a2-1",
    targetLevel: "A2",
    skillTested: "reading",
    prompt_tr:
      "Cümle: 'Sarah works at a hospital. She is a nurse.' Sarah ne iş yapıyor?",
    prompt_en: "Sarah works at a hospital. She is a nurse.",
    options: ["Doktor", "Hemşire", "Öğretmen", "Garson"],
    correctIndex: 1,
  },
  {
    id: "r-b1-1",
    targetLevel: "B1",
    skillTested: "reading",
    prompt_tr:
      "'The meeting was postponed until next Monday because the manager was sick.' Toplantı neden ertelendi?",
    prompt_en:
      "The meeting was postponed until next Monday because the manager was sick.",
    options: [
      "Tatil olduğu için",
      "Müdür hasta olduğu için",
      "Hava kötü olduğu için",
      "Salon dolu olduğu için",
    ],
    correctIndex: 1,
  },
  {
    id: "r-b2-1",
    targetLevel: "B2",
    skillTested: "reading",
    prompt_tr:
      "'Although she had reservations, she eventually agreed to the terms.' Cümleye göre kişi:",
    prompt_en:
      "Although she had reservations, she eventually agreed to the terms.",
    options: [
      "Hiç tereddüt etmeden kabul etti",
      "Önce tereddüt etti, sonunda kabul etti",
      "Reddetti",
      "Karar veremedi",
    ],
    correctIndex: 1,
  },
  {
    id: "r-c1-1",
    targetLevel: "C1",
    skillTested: "reading",
    prompt_tr:
      "'The proposal was met with lukewarm enthusiasm from the board.' Yönetim kurulu teklife nasıl tepki verdi?",
    prompt_en:
      "The proposal was met with lukewarm enthusiasm from the board.",
    options: [
      "Çok hevesli karşıladı",
      "Reddetti",
      "İlgisiz, yarı gönüllü karşıladı",
      "Tartışmaya açtı",
    ],
    correctIndex: 2,
  },

  // ----------------------------------------------------------------
  // LISTENING (TTS) — 2 questions
  // The screen plays prompt_en via expo-speech, then hides it.
  // ----------------------------------------------------------------
  {
    id: "l-a2-1",
    targetLevel: "A2",
    skillTested: "listening",
    prompt_tr: "Dinle ve anlamı seç.",
    prompt_en: "Could you pass me the salt, please?",
    options: [
      "Tuzu uzatır mısın, lütfen?",
      "Suyu açar mısın, lütfen?",
      "Pencereyi kapatır mısın, lütfen?",
      "Bana telefonu verir misin?",
    ],
    correctIndex: 0,
  },
  {
    id: "l-b1-1",
    targetLevel: "B1",
    skillTested: "listening",
    prompt_tr: "Dinle ve konuşmacının ne demek istediğini seç.",
    prompt_en: "I'd rather grab a coffee than sit through another meeting.",
    options: [
      "Toplantıya bayılırım",
      "Bir toplantı daha yerine kahve içmeyi tercih ederim",
      "Kahve içmeyi sevmem",
      "Toplantı çok kısa",
    ],
    correctIndex: 1,
  },

  // ----------------------------------------------------------------
  // SELF-RATE — 2 questions
  // ----------------------------------------------------------------
  {
    id: "s-b1-1",
    targetLevel: "B1",
    skillTested: "self_rate",
    prompt_tr:
      "Bu cümleyi kursuz, doğal söyleyebilir misin?\n'I usually have coffee before my morning meeting.'",
    prompt_en: "I usually have coffee before my morning meeting.",
    selfRateScale: {
      min: 1,
      max: 5,
      minLabel_tr: "Hiç söyleyemem",
      maxLabel_tr: "Akıcı söylerim",
    },
  },
  {
    id: "s-b2-1",
    targetLevel: "B2",
    skillTested: "self_rate",
    prompt_tr:
      "Bu cümleyi kursuz, doğal söyleyebilir misin?\n'I'd like to clarify a couple of points before we move forward.'",
    prompt_en: "I'd like to clarify a couple of points before we move forward.",
    selfRateScale: {
      min: 1,
      max: 5,
      minLabel_tr: "Hiç söyleyemem",
      maxLabel_tr: "Akıcı söylerim",
    },
  },
];
