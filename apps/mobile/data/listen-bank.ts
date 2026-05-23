// Lafla — Listen & Transcribe data bank.
//
// 2026-05-23 — Faz 2 yeni mod. Pasif öğrenme — kullanıcı kulaklık takar,
// audio çalar, duyduğunu yazar. Mic GEREKMİYOR — otobüs, iş ortamı, gece
// pratiği için ideal.
//
// 30 clip — CEFR-balanced (A1×6, A2×8, B1×8, B2×5, C1×3). Hepsi gerçek
// hayat senaryolarından (havaalanı duyuru, kafe sipariş, doctor visit,
// iş meeting). TTS ile runtime çalınır (tts.ts), bundled audio gerek yok.

import type { CefrLevel } from "../lib/cefr-level";

export interface ListenClip {
  id: string;
  /** English sentence to play via TTS. */
  sentence: string;
  /** Turkish hint shown if user replays 2+ times. */
  tr_hint: string;
  /** Variants accepted as correct transcription (typo tolerance). */
  acceptedVariants: string[];
  /** CEFR level — drives adaptive selection. */
  level: CefrLevel;
  /** Scene context — UI shows as eyebrow ("✈️ Havaalanı duyurusu"). */
  context: string;
}

export const LISTEN_BANK: ReadonlyArray<ListenClip> = [
  // ─── A1 (6) — basic survival
  {
    id: "l-a1-1",
    sentence: "Where is the bathroom?",
    tr_hint: "Tuvalet nerede?",
    acceptedVariants: ["where is the bathroom"],
    level: "A1",
    context: "Günlük",
  },
  {
    id: "l-a1-2",
    sentence: "How much is this?",
    tr_hint: "Bunun fiyatı ne kadar?",
    acceptedVariants: ["how much is this"],
    level: "A1",
    context: "Alışveriş",
  },
  {
    id: "l-a1-3",
    sentence: "Can I have a coffee, please?",
    tr_hint: "Bir kahve alabilir miyim?",
    acceptedVariants: ["can i have a coffee please", "can i have a coffee"],
    level: "A1",
    context: "Kafe",
  },
  {
    id: "l-a1-4",
    sentence: "I don't understand.",
    tr_hint: "Anlamıyorum.",
    acceptedVariants: ["i don't understand", "i do not understand"],
    level: "A1",
    context: "Genel",
  },
  {
    id: "l-a1-5",
    sentence: "What time is it?",
    tr_hint: "Saat kaç?",
    acceptedVariants: ["what time is it"],
    level: "A1",
    context: "Günlük",
  },
  {
    id: "l-a1-6",
    sentence: "My name is Alex.",
    tr_hint: "Adım Alex.",
    acceptedVariants: ["my name is alex"],
    level: "A1",
    context: "Tanışma",
  },

  // ─── A2 (8) — daily situations
  {
    id: "l-a2-1",
    sentence: "Could you say that again, please?",
    tr_hint: "Tekrar söyler misin lütfen?",
    acceptedVariants: ["could you say that again please", "could you say that again"],
    level: "A2",
    context: "Genel",
  },
  {
    id: "l-a2-2",
    sentence: "I usually go to work by bus.",
    tr_hint: "Genelde işe otobüsle giderim.",
    acceptedVariants: ["i usually go to work by bus"],
    level: "A2",
    context: "Günlük",
  },
  {
    id: "l-a2-3",
    sentence: "Your flight is now boarding at gate seven.",
    tr_hint: "Uçuşunuz 7 numaralı kapıdan biniş yapıyor.",
    acceptedVariants: [
      "your flight is now boarding at gate seven",
      "your flight is now boarding at gate 7",
    ],
    level: "A2",
    context: "Havaalanı",
  },
  {
    id: "l-a2-4",
    sentence: "I'd like to order a salad and water.",
    tr_hint: "Salata ve su sipariş etmek istiyorum.",
    acceptedVariants: ["i'd like to order a salad and water", "i would like to order a salad and water"],
    level: "A2",
    context: "Restoran",
  },
  {
    id: "l-a2-5",
    sentence: "Sorry, I'm running a bit late.",
    tr_hint: "Pardon, biraz geç kalıyorum.",
    acceptedVariants: ["sorry i'm running a bit late", "sorry i am running a bit late"],
    level: "A2",
    context: "İş",
  },
  {
    id: "l-a2-6",
    sentence: "Could I have the bill, please?",
    tr_hint: "Hesabı alabilir miyim lütfen?",
    acceptedVariants: ["could i have the bill please", "could i have the bill"],
    level: "A2",
    context: "Restoran",
  },
  {
    id: "l-a2-7",
    sentence: "What do you do for a living?",
    tr_hint: "Ne iş yapıyorsun?",
    acceptedVariants: ["what do you do for a living"],
    level: "A2",
    context: "Tanışma",
  },
  {
    id: "l-a2-8",
    sentence: "Is this seat taken?",
    tr_hint: "Bu koltuk dolu mu?",
    acceptedVariants: ["is this seat taken"],
    level: "A2",
    context: "Genel",
  },

  // ─── B1 (8) — moderate complexity
  {
    id: "l-b1-1",
    sentence: "Could you tell me where the nearest pharmacy is?",
    tr_hint: "Bana en yakın eczanenin nerede olduğunu söyler misin?",
    acceptedVariants: ["could you tell me where the nearest pharmacy is"],
    level: "B1",
    context: "Yol sorma",
  },
  {
    id: "l-b1-2",
    sentence: "I've been working here for about two years.",
    tr_hint: "Burada yaklaşık iki yıldır çalışıyorum.",
    acceptedVariants: [
      "i've been working here for about two years",
      "i have been working here for about two years",
    ],
    level: "B1",
    context: "İş",
  },
  {
    id: "l-b1-3",
    sentence: "Would you mind if I joined you?",
    tr_hint: "Size katılmamın sakıncası var mı?",
    acceptedVariants: ["would you mind if i joined you"],
    level: "B1",
    context: "Sosyal",
  },
  {
    id: "l-b1-4",
    sentence: "I'm not sure I follow what you mean.",
    tr_hint: "Ne demek istediğinizi tam anlayamadım.",
    acceptedVariants: ["i'm not sure i follow what you mean", "i am not sure i follow what you mean"],
    level: "B1",
    context: "Genel",
  },
  {
    id: "l-b1-5",
    sentence: "I'd recommend trying the seafood pasta.",
    tr_hint: "Deniz ürünlü makarnayı denemenizi tavsiye ederim.",
    acceptedVariants: ["i'd recommend trying the seafood pasta", "i would recommend trying the seafood pasta"],
    level: "B1",
    context: "Restoran",
  },
  {
    id: "l-b1-6",
    sentence: "The meeting has been moved to three o'clock.",
    tr_hint: "Toplantı saat üçe alındı.",
    acceptedVariants: [
      "the meeting has been moved to three o'clock",
      "the meeting has been moved to 3 o'clock",
    ],
    level: "B1",
    context: "İş",
  },
  {
    id: "l-b1-7",
    sentence: "Have you ever been to London before?",
    tr_hint: "Daha önce Londra'ya gittin mi?",
    acceptedVariants: ["have you ever been to london before"],
    level: "B1",
    context: "Tanışma",
  },
  {
    id: "l-b1-8",
    sentence: "I think we should meet again next week.",
    tr_hint: "Bence gelecek hafta tekrar buluşmalıyız.",
    acceptedVariants: ["i think we should meet again next week"],
    level: "B1",
    context: "İş",
  },

  // ─── B2 (5) — advanced
  {
    id: "l-b2-1",
    sentence: "If I had known earlier, I would have prepared something.",
    tr_hint: "Daha önce bilseydim bir şeyler hazırlardım.",
    acceptedVariants: ["if i had known earlier i would have prepared something"],
    level: "B2",
    context: "Genel",
  },
  {
    id: "l-b2-2",
    sentence: "I'm afraid the position has already been filled.",
    tr_hint: "Maalesef pozisyon doldurulmuş bulunuyor.",
    acceptedVariants: ["i'm afraid the position has already been filled", "i am afraid the position has already been filled"],
    level: "B2",
    context: "İş",
  },
  {
    id: "l-b2-3",
    sentence: "To be fair, I wasn't expecting that kind of feedback.",
    tr_hint: "Açıkçası, bu tür bir geri bildirim beklemiyordum.",
    acceptedVariants: ["to be fair i wasn't expecting that kind of feedback", "to be fair i was not expecting that kind of feedback"],
    level: "B2",
    context: "İş",
  },
  {
    id: "l-b2-4",
    sentence: "Let me give that some thought and get back to you.",
    tr_hint: "Bunu biraz düşüneyim ve sana döneyim.",
    acceptedVariants: ["let me give that some thought and get back to you"],
    level: "B2",
    context: "İş",
  },
  {
    id: "l-b2-5",
    sentence: "I'd rather not commit to anything just yet.",
    tr_hint: "Henüz hiçbir şeye söz vermek istemiyorum.",
    acceptedVariants: ["i'd rather not commit to anything just yet", "i would rather not commit to anything just yet"],
    level: "B2",
    context: "İş",
  },

  // ─── C1 (3) — sophisticated
  {
    id: "l-c1-1",
    sentence: "In hindsight, we should have allocated more resources to that project.",
    tr_hint: "Geriye dönüp baktığımızda o projeye daha çok kaynak ayırmalıydık.",
    acceptedVariants: ["in hindsight we should have allocated more resources to that project"],
    level: "C1",
    context: "İş",
  },
  {
    id: "l-c1-2",
    sentence: "On balance, the proposal warrants further consideration.",
    tr_hint: "Genel olarak, öneri daha fazla değerlendirilmeyi hak ediyor.",
    acceptedVariants: ["on balance the proposal warrants further consideration"],
    level: "C1",
    context: "İş",
  },
  {
    id: "l-c1-3",
    sentence: "With respect, I'd push back on that framing.",
    tr_hint: "Saygıyla, bu çerçeveye katılmıyorum.",
    acceptedVariants: ["with respect i'd push back on that framing", "with respect i would push back on that framing"],
    level: "C1",
    context: "İş",
  },
];

/**
 * Pick clips adapted to user level — ±1 band, deterministic daily shuffle.
 */
export function pickClipsForLevel(
  userLevel: CefrLevel,
  count: number = 5,
): ListenClip[] {
  const order: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const userIdx = order.indexOf(userLevel);
  const minIdx = Math.max(0, userIdx - 1);
  const maxIdx = Math.min(order.length - 1, userIdx + 1);
  const targetLevels = new Set(order.slice(minIdx, maxIdx + 1));
  const eligible = LISTEN_BANK.filter((c) => targetLevels.has(c.level));
  const seed = Math.floor(Date.now() / (24 * 3600 * 1000));
  return [...eligible]
    .sort((a, b) => {
      const ha = (a.id.charCodeAt(2) * 31 + seed) % 1000;
      const hb = (b.id.charCodeAt(2) * 31 + seed) % 1000;
      return ha - hb;
    })
    .slice(0, count);
}
