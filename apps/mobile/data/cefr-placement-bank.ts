// CEFR Placement question bank (Adım: 2026-05-21).
//
// Adaptive test havuzu — her CEFR seviyesi için 4 multiple-choice soru.
// Sorular Türk öğrencisinin sıklıkla yanılgıya düştüğü noktalardan
// seçildi (mistake-patterns.ts ile aynı pedagojik yatak).
//
// Adaptive algoritma:
//   - B1 ile başla (median)
//   - Doğru → bir üst seviyeye geç (B1 → B2 → C1)
//   - Yanlış → bir alt seviyeye in (B1 → A2 → A1)
//   - 6 soru sonra final = en yüksek "correct" seviye (veya A1 fallback)
//
// 24 soru total — 5 soru görür kullanıcı, sıkça oynanan placement test
// olarak hızlı + bilgi sızdırmaz.

import type { CefrLevel } from "../lib/cefr-level";

export interface PlacementQuestion {
  id: string;
  level: CefrLevel;
  /** Soru cümlesi (Türkçe veya İngilizce — type'a göre değişir). */
  prompt: string;
  /** Türkçe ipucu — opsiyonel, kafa karışıklığını azaltır. */
  prompt_tr?: string;
  /** 4 seçenek. */
  options: string[];
  /** options[] içindeki doğru index. */
  correct_index: number;
  /** Sonradan kullanıcıya "neden yanlış" gösterilir. */
  explanation_tr: string;
}

// ============================================================
// A1 — başlangıç
// ============================================================
const A1: PlacementQuestion[] = [
  {
    id: "a1.1",
    level: "A1",
    prompt: "She ___ a teacher.",
    options: ["is", "are", "am", "be"],
    correct_index: 0,
    explanation_tr: "Tekil 3. şahıs (she/he/it) → 'is'. 'Are' çoğul için.",
  },
  {
    id: "a1.2",
    level: "A1",
    prompt: "Türkçe 'Adım Berk' karşılığı?",
    options: [
      "I am Berk.",
      "My is Berk.",
      "Me Berk.",
      "I have Berk.",
    ],
    correct_index: 0,
    explanation_tr: "'My name is Berk' veya kısaca 'I am Berk'. 'Me' özne değil.",
  },
  {
    id: "a1.3",
    level: "A1",
    prompt: "___ you from Istanbul?",
    options: ["Are", "Is", "Do", "Have"],
    correct_index: 0,
    explanation_tr: "'You' için her zaman 'Are'. 'Is' tekil 3. şahıs.",
  },
  {
    id: "a1.4",
    level: "A1",
    prompt: "Türkçe 'iki kedim var' karşılığı?",
    options: [
      "I have two cats.",
      "I have two cat.",
      "I am two cats.",
      "Two cats my.",
    ],
    correct_index: 0,
    explanation_tr: "Çoğul → 'cats' (-s). 'I have' sahiplik için.",
  },
];

// ============================================================
// A2 — temel
// ============================================================
const A2: PlacementQuestion[] = [
  {
    id: "a2.1",
    level: "A2",
    prompt: "I ___ a movie last night.",
    options: ["watched", "watch", "am watching", "will watch"],
    correct_index: 0,
    explanation_tr:
      "'Last night' geçmiş zaman ifadesi → past simple → 'watched'.",
  },
  {
    id: "a2.2",
    level: "A2",
    prompt: "There ___ many people at the party.",
    options: ["were", "was", "is", "are"],
    correct_index: 0,
    explanation_tr:
      "'Many people' çoğul + 'at the party' geçmiş (was/were) — 'were'.",
  },
  {
    id: "a2.3",
    level: "A2",
    prompt: "Türkçe 'her sabah koşarım' karşılığı?",
    options: [
      "I run every morning.",
      "I am running every morning.",
      "I will run every morning.",
      "I ran every morning.",
    ],
    correct_index: 0,
    explanation_tr:
      "Sürekli alışkanlık → present simple. 'I am running' şu an oluyor.",
  },
  {
    id: "a2.4",
    level: "A2",
    prompt: "She doesn't ___ coffee.",
    options: ["drink", "drinks", "drinking", "drank"],
    correct_index: 0,
    explanation_tr:
      "'Doesn't' var → fiil sade (drink). 'Doesn't drinks' yanlış.",
  },
];

// ============================================================
// B1 — orta
// ============================================================
const B1: PlacementQuestion[] = [
  {
    id: "b1.1",
    level: "B1",
    prompt: "I ___ here for 3 years.",
    options: [
      "have lived",
      "live",
      "am living",
      "lived",
    ],
    correct_index: 0,
    explanation_tr:
      "'For 3 years' süresince devam ediyor → present perfect. 'I live' sadece şimdiyi söyler.",
  },
  {
    id: "b1.2",
    level: "B1",
    prompt: "If I ___ rich, I would travel.",
    options: ["were", "was", "am", "will be"],
    correct_index: 0,
    explanation_tr:
      "Hayal/şart cümlesi (2nd conditional) → if + were/was + would. Formal İngilizcede 'were'.",
  },
  {
    id: "b1.3",
    level: "B1",
    prompt: "Türkçe 'sıkıldım senden' karşılığı?",
    options: [
      "I'm bored of you.",
      "I'm bored from you.",
      "I bored you.",
      "I'm boring of you.",
    ],
    correct_index: 0,
    explanation_tr:
      "'Bored OF' veya 'bored WITH'. 'From' Türkçe etkisi. 'I'm boring' = 'sen sıkıcısın'.",
  },
  {
    id: "b1.4",
    level: "B1",
    prompt: "She told me ___ wait.",
    options: ["to", "for", "that", "—"],
    correct_index: 0,
    explanation_tr:
      "'Tell someone TO do' kalıbı. 'For' yanlış prep.",
  },
];

// ============================================================
// B2 — orta-üstü
// ============================================================
const B2: PlacementQuestion[] = [
  {
    id: "b2.1",
    level: "B2",
    prompt: "By the time we arrived, the movie ___.",
    options: [
      "had started",
      "started",
      "has started",
      "was starting",
    ],
    correct_index: 0,
    explanation_tr:
      "Geçmişte bir olaydan önce olan başka bir olay → past perfect (had + V3).",
  },
  {
    id: "b2.2",
    level: "B2",
    prompt: "He suggested ___ a break.",
    options: ["taking", "to take", "take", "we take"],
    correct_index: 0,
    explanation_tr:
      "'Suggest' + V-ing (gerund). 'To take' yanlış. ('We take' da olur ama subordinate clause olur.)",
  },
  {
    id: "b2.3",
    level: "B2",
    prompt: "I'd rather you ___ that.",
    options: ["didn't do", "don't do", "won't do", "not do"],
    correct_index: 0,
    explanation_tr:
      "'I'd rather (someone)' + past subjunctive (geçmiş gibi görünen ama gelecek anlamlı kalıp).",
  },
  {
    id: "b2.4",
    level: "B2",
    prompt: "Türkçe 'bunu yaparsam, daha iyi olur' karşılığı?",
    options: [
      "If I do this, it'll be better.",
      "If I would do this, it would be better.",
      "I do this, it better.",
      "When I will do this, it better.",
    ],
    correct_index: 0,
    explanation_tr:
      "1st conditional: if + present simple, will + base. 'Would' her iki yerde fazla.",
  },
];

// ============================================================
// C1 — ileri
// ============================================================
const C1: PlacementQuestion[] = [
  {
    id: "c1.1",
    level: "C1",
    prompt: "Hardly ___ down when the phone rang.",
    options: [
      "had I sat",
      "I had sat",
      "I sat",
      "did I sit",
    ],
    correct_index: 0,
    explanation_tr:
      "Cümlenin başında negative/limiting adverb (hardly, scarcely, no sooner) → inversion: aux + subject + V.",
  },
  {
    id: "c1.2",
    level: "C1",
    prompt: "He insisted that she ___ present.",
    options: ["be", "is", "was", "would be"],
    correct_index: 0,
    explanation_tr:
      "'Insist that' + subjunctive (base form, that-clause'un fiili çekimsiz). Formal C1 kullanım.",
  },
  {
    id: "c1.3",
    level: "C1",
    prompt: "The proposal, ___ was unexpected, was approved.",
    options: ["which", "that", "what", "who"],
    correct_index: 0,
    explanation_tr:
      "Non-defining relative clause (virgüllerle) → sadece 'which' kullanılır. 'That' restrictive için.",
  },
  {
    id: "c1.4",
    level: "C1",
    prompt: "Had I known, I ___ differently.",
    options: [
      "would have acted",
      "had acted",
      "would act",
      "will act",
    ],
    correct_index: 0,
    explanation_tr:
      "3rd conditional inversion: 'Had I known' = 'If I had known' → would have V3.",
  },
];

export const PLACEMENT_BANK: Record<CefrLevel, PlacementQuestion[]> = {
  A1,
  A2,
  B1,
  B2,
  C1,
  C2: C1, // C2 sorularımız yok henüz; C1'i tekrar kullan
};

// ============================================================
// Adaptive helpers
// ============================================================

export const CEFR_ORDER: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

export function nextLevelUp(l: CefrLevel): CefrLevel {
  const idx = CEFR_ORDER.indexOf(l);
  return CEFR_ORDER[Math.min(CEFR_ORDER.length - 1, idx + 1)]!;
}

export function nextLevelDown(l: CefrLevel): CefrLevel {
  const idx = CEFR_ORDER.indexOf(l);
  return CEFR_ORDER[Math.max(0, idx - 1)]!;
}

export function pickQuestionFromLevel(
  level: CefrLevel,
  usedIds: Set<string>,
): PlacementQuestion | null {
  const pool = PLACEMENT_BANK[level] ?? [];
  const candidates = pool.filter((q) => !usedIds.has(q.id));
  if (candidates.length === 0) return pool[0] ?? null;
  return candidates[Math.floor(Math.random() * candidates.length)]!;
}

/**
 * Adaptive flow:
 *   1. Start at B1.
 *   2. Each correct answer → up one level; each wrong → down one.
 *   3. After N=6 questions, final = highest level where user got it
 *      correct (highest "competence proven"). Fallback: A1.
 */
export function computeFinalLevel(
  history: { level: CefrLevel; correct: boolean }[],
): CefrLevel {
  // En yüksek doğru cevaplanan seviye
  let highest: CefrLevel = "A1";
  for (const h of history) {
    if (h.correct && CEFR_ORDER.indexOf(h.level) > CEFR_ORDER.indexOf(highest)) {
      highest = h.level;
    }
  }
  return highest;
}

export const PLACEMENT_QUESTION_COUNT = 6;
