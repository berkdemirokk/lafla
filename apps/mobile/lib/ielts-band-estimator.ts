// Lafla — IELTS Band Estimator (Premium killer feature).
//
// 2026-05-21 — Türk audience'ın #1 ödeme sebebi. Mock test merkezleri
// ₺500 alıyor, biz ₺99/ay Lafla Pro'ta sunuyoruz. Pattern matching +
// phoneme grader + scene history ensemble.
//
// Formula:
//   Speaking Band = f(avg IELTS scene score, completion count, error patterns)
//   Range: 4.0 — 9.0 (yarım puanlı, gerçek IELTS gibi)
//
// IELTS scoring rubric (gerçek sınavda):
//   - Fluency & Coherence
//   - Lexical Resource
//   - Grammatical Range & Accuracy
//   - Pronunciation
//
// Bizim approximation:
//   - Fluency = ortalama sahne skoru (75+ → 7.0)
//   - Lexical = vocab variety (C1 phrase'leri yakaladı mı)
//   - Grammar = mistake pattern miktarı (az hata → +0.5)
//   - Pronunciation = phoneme grader skoru (varsa)
//
// Minimum 4 IELTS sahnesi tamamlanmış olmalı, yoksa "yeterli veri yok".

import {
  readHistoryByMode,
  type SceneHistoryEntry,
} from "./scene-history";
import { getActiveMistakes } from "./mistake-tracker";
import { getPronAvg, getPronCount } from "./pronunciation-history";

const MIN_SCENES_FOR_BAND = 4;

export interface BandEstimate {
  /** Ana speaking band tahmini, 4.0 — 9.0 arası yarım puanlı. */
  speakingBand: number;
  /** Tahmin için yeterli veri var mı? */
  hasEnoughData: boolean;
  /** Şu ana kadar tamamlanan IELTS sahne sayısı. */
  scenesCompleted: number;
  /** Yeterli olması için kaç sahne daha gerek. */
  scenesNeeded: number;
  /** Component skorları (gerçek rubric'e paralel). */
  components: {
    fluency: number;       // 4.0-9.0
    lexical: number;       // 4.0-9.0
    grammar: number;       // 4.0-9.0
    pronunciation: number; // 4.0-9.0
  };
  /** En zayıf alan — UI'da "Bu alanda çalış" CTA. */
  weakest: "fluency" | "lexical" | "grammar" | "pronunciation";
  /** Sonraki band'a ulaşmak için Türkçe öneri. */
  nextStepAdvice: string;
}

/**
 * Speaking band hesapla. Kullanıcının IELTS sahne geçmişine bakar.
 */
export async function estimateSpeakingBand(): Promise<BandEstimate> {
  // IELTS sahnelerini topla (mode === "ielts")
  const ieltsScenes = await readHistoryByMode("ielts").catch(
    () => [] as SceneHistoryEntry[],
  );

  const scenesCompleted = ieltsScenes.length;
  const hasEnoughData = scenesCompleted >= MIN_SCENES_FOR_BAND;

  if (!hasEnoughData) {
    return {
      speakingBand: 0,
      hasEnoughData: false,
      scenesCompleted,
      scenesNeeded: MIN_SCENES_FOR_BAND - scenesCompleted,
      components: { fluency: 0, lexical: 0, grammar: 0, pronunciation: 0 },
      weakest: "fluency",
      nextStepAdvice: `Tahmin için ${MIN_SCENES_FOR_BAND - scenesCompleted} IELTS sahnesi daha tamamla. Part 1 ile başla.`,
    };
  }

  // 1. FLUENCY — ortalama skor → band
  // 0-100 score → 4.0-9.0 band linear-ish mapping
  // 50 = 5.5, 65 = 6.5, 75 = 7.0, 85 = 7.5, 95 = 8.5
  const avgScore =
    ieltsScenes.reduce((sum, s) => sum + s.score, 0) / scenesCompleted;
  const fluency = scoreToBand(avgScore);

  // 2. LEXICAL — variety check. Daha fazla sahne = daha çok C1 phrase
  // exposure. Şu an proxy: avgScore + scenesCompleted bonus.
  const lexicalBonus = Math.min(0.5, (scenesCompleted - MIN_SCENES_FOR_BAND) * 0.05);
  const lexical = clampBand(fluency + lexicalBonus * (avgScore >= 70 ? 1 : 0));

  // 3. GRAMMAR — active mistake count. Az aktif hata → yüksek band.
  // getActiveMistakes() halen "düzeltilmemiş" pattern'leri döner.
  const activeMistakes = await getActiveMistakes().catch(
    () => [] as Array<{ count?: number }>,
  );
  // Toplam mistake count (hepsi son 30 gün civarı). Sahne başına oran.
  const totalActiveCount = activeMistakes.reduce(
    (sum, m) => sum + (m.count ?? 1),
    0,
  );
  const mistakeRate =
    scenesCompleted > 0 ? totalActiveCount / scenesCompleted : 0;
  const grammarAdjust =
    mistakeRate > 3 ? -0.5 : mistakeRate > 1.5 ? -0.25 : 0.25;
  const grammar = clampBand(fluency + grammarAdjust);

  // 4. PRONUNCIATION — gerçek phoneme grader history'sinden.
  //
  // 2026-05-23 — Eski versiyon `fluency - 0.25` placeholder kullanıyordu.
  // CEFR audit bunu Band Estimator'ın #1 zayıflığı olarak işaretledi: Türk
  // IELTS adayı pronunciation kolonunun KENDİ telaffuzunu yansıtmasını
  // bekler, flat bir çıkarma değil. PronouncePhrase + SpeechShadowing
  // egzersizleri artık `pushPronScore` ile her skoru yazıyor; biz burada
  // son 30'un ortalamasını alıp band'e çeviriyoruz.
  //
  // Yeterli örnek yoksa (3 altı) eski fluency-derived approximation'a
  // düşeriz — gürültülü ortalama göstermek tahminin güvenilirliğine zarar
  // verir. 3 değeri pragmatik: bir sahnede ~3-5 telaffuz var, ilk
  // IELTS sahnesinden sonra zaten doluyor.
  const pronCount = await getPronCount().catch(() => 0);
  const pronAvg = pronCount >= 3 ? await getPronAvg().catch(() => null) : null;
  const pronunciation =
    pronAvg !== null
      ? clampBand(scoreToBand(pronAvg))
      : clampBand(fluency - 0.25);

  // Genel band — komponentlerin ortalaması (gerçek IELTS rubric'e paralel)
  const speakingBand = roundToHalf(
    (fluency + lexical + grammar + pronunciation) / 4,
  );

  // En zayıf alan
  const components = { fluency, lexical, grammar, pronunciation };
  const weakest = (Object.keys(components) as Array<keyof typeof components>)
    .reduce((min, k) => (components[k] < components[min] ? k : min), "fluency");

  // Sonraki band hedefi
  const nextStepAdvice = adviceForWeakest(weakest, speakingBand);

  return {
    speakingBand,
    hasEnoughData: true,
    scenesCompleted,
    scenesNeeded: 0,
    components,
    weakest,
    nextStepAdvice,
  };
}

function scoreToBand(score: number): number {
  // 0-100 → 4.0-9.0 piecewise
  // <40 = 4.0, 40-50 = 4.5, 50-60 = 5.0, 60-70 = 6.0, 70-80 = 7.0, 80-90 = 7.5, 90+ = 8.5
  if (score < 40) return 4.0;
  if (score < 50) return 4.5;
  if (score < 60) return 5.0;
  if (score < 65) return 5.5;
  if (score < 70) return 6.0;
  if (score < 75) return 6.5;
  if (score < 80) return 7.0;
  if (score < 85) return 7.5;
  if (score < 90) return 8.0;
  return 8.5;
}

function clampBand(b: number): number {
  return Math.max(4.0, Math.min(9.0, roundToHalf(b)));
}

function roundToHalf(n: number): number {
  return Math.round(n * 2) / 2;
}

function adviceForWeakest(
  weakest: "fluency" | "lexical" | "grammar" | "pronunciation",
  currentBand: number,
): string {
  const target = Math.min(9.0, currentBand + 0.5);
  switch (weakest) {
    case "fluency":
      return `Akıcılık ${currentBand} → ${target}: Part 2 cue card'ları 1-2 dakika kesintisiz konuşmaya odaklan. Her gün 1 mock part 2.`;
    case "lexical":
      return `Kelime ${currentBand} → ${target}: C1 phrase'leri (in hindsight, from my perspective, it largely depends on) Part 3 sahnelerinde kullan.`;
    case "grammar":
      return `Gramer ${currentBand} → ${target}: Aynı hatayı sahnelerde tekrarlıyorsun. Verdict'teki "Bu cümlede X yerine Y" notlarına dikkat.`;
    case "pronunciation":
      return `Telaffuz ${currentBand} → ${target}: Phoneme grader'ın gösterdiği Türk hatası seslerine (th, w, v) çalış. Pronunciation tab'ı.`;
  }
}
