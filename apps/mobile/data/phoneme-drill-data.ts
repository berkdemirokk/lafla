// Lafla — Phoneme Drill data (Türk-confused phonemes).
//
// 2026-05-23 — Faz 2 yeni mod. Sessiz ortam (metro, iş, gece) için.
// Roleplay mikrofon gerektiriyor → kullanıcı sessiz alanda kullanamıyor.
// Phoneme Drill: kısa kelime/cümle, mic-only repetition, 30 saniye seans.
//
// Niye Türk öğrenci için kritik:
//   - /θ/ vs /t,s/ — "think" vs "sink" / "tink"
//   - /ð/ vs /d,z/ — "the" vs "de" / "ze"
//   - /v/ vs /w/ — "very" vs "wery" (vice versa)
//   - /æ/ vs /e,a/ — "cat" vs "kat" / "ket"
//   - /ɪ/ vs /iː/ — "ship" vs "sheep"
//   - /ŋ/ vs /n,ng/ — "sing" vs "sin" / "sing-g"
//   - Final devoicing: /b,d,g/ → /p,t,k/ — Türk "kelime sonunda yumuşak ünsüz"
//
// Her drill 1 hedef fonem + 5-10 minimal pair / canonical pratik. Süre
// 30 sn. CEFR-aware: A1 = single word, B1+ = phrase, C1 = sentence.

import type { CefrLevel } from "../lib/cefr-level";

export type ConfusionTarget =
  | "th_voiceless" // /θ/
  | "th_voiced" // /ð/
  | "v_vs_w"
  | "ae_vowel"
  | "ih_vs_iy"
  | "ng_consonant"
  | "final_voicing";

export interface DrillItem {
  id: string;
  target: ConfusionTarget;
  /** English phrase to pronounce. */
  phrase: string;
  /** Turkish hint — explains the target sound. */
  tr_hint: string;
  /** Difficulty band. Drives ordering + adaptive. */
  level: CefrLevel;
  /** Short IPA hint shown next to phrase (UI display). */
  ipa_hint?: string;
}

// 50 drill — Türk öğrencisinin en sık yanlış yaptığı fonem listesi.
// Pedagoji: minimal pair (think/sink) önce gelir, sonra collocation
// (I think so) sonra sentence (I think I'll go).
export const DRILL_BANK: ReadonlyArray<DrillItem> = [
  // ─── /θ/ "th" voiceless — Türk "t/s" ile karıştırır
  {
    id: "th-1",
    target: "th_voiceless",
    phrase: "think",
    tr_hint: "Dilini üst dişlerine değdir, hafifçe üfle. 'Tink' veya 'sink' DEĞİL.",
    level: "A1",
    ipa_hint: "/θɪŋk/",
  },
  {
    id: "th-2",
    target: "th_voiceless",
    phrase: "thank you",
    tr_hint: "İlk ses 'th' — dil dişe değer. 'Tenk you' DEĞİL.",
    level: "A1",
    ipa_hint: "/θæŋk juː/",
  },
  {
    id: "th-3",
    target: "th_voiceless",
    phrase: "three things",
    tr_hint: "İki 'th' arka arkaya. Dilin pozisyonu sabit kalsın.",
    level: "A2",
    ipa_hint: "/θriː θɪŋz/",
  },
  {
    id: "th-4",
    target: "th_voiceless",
    phrase: "I think so",
    tr_hint: "Sık kullanılan kalıp. 'Ay sink so' DEĞİL.",
    level: "A2",
    ipa_hint: "/aɪ θɪŋk soʊ/",
  },
  {
    id: "th-5",
    target: "th_voiceless",
    phrase: "Thursday morning",
    tr_hint: "Hafta günü + 'th' birleşimi. Türk öğrenci 'tursday' der.",
    level: "B1",
  },
  {
    id: "th-6",
    target: "th_voiceless",
    phrase: "I'm thirty-three",
    tr_hint: "Sayı + 'th' kombosu. 'Otuz üç' demek için 'tirty tree' DEĞİL.",
    level: "B1",
  },

  // ─── /ð/ "th" voiced — Türk "d/z" ile karıştırır
  {
    id: "dh-1",
    target: "th_voiced",
    phrase: "the",
    tr_hint: "Yumuşak th — dil dişlere değer ama hafif titreşim var. 'De' DEĞİL.",
    level: "A1",
    ipa_hint: "/ðə/",
  },
  {
    id: "dh-2",
    target: "th_voiced",
    phrase: "this is",
    tr_hint: "İlk ses titreşimli 'th'. 'Dis is' kelimeyi cinsiyetlendirir.",
    level: "A1",
    ipa_hint: "/ðɪs ɪz/",
  },
  {
    id: "dh-3",
    target: "th_voiced",
    phrase: "they were there",
    tr_hint: "Üç 'th' aynı cümlede — pratik klasiği.",
    level: "B1",
  },
  {
    id: "dh-4",
    target: "th_voiced",
    phrase: "another one",
    tr_hint: "Orta hece 'th' — 'anozer' veya 'anader' DEĞİL.",
    level: "A2",
  },
  {
    id: "dh-5",
    target: "th_voiced",
    phrase: "without",
    tr_hint: "Orta th — 'witout' veya 'wizout' DEĞİL.",
    level: "A2",
  },

  // ─── /v/ vs /w/ — Türk en sık karıştırdığı çift
  {
    id: "vw-1",
    target: "v_vs_w",
    phrase: "very",
    tr_hint: "V sesi — üst dişler alt dudağa değer. 'Wery' DEĞİL.",
    level: "A1",
    ipa_hint: "/ˈvɛri/",
  },
  {
    id: "vw-2",
    target: "v_vs_w",
    phrase: "we have",
    tr_hint: "W + V aynı cümlede. W = dudak yuvarla, V = diş + dudak.",
    level: "A2",
  },
  {
    id: "vw-3",
    target: "v_vs_w",
    phrase: "vase or wave",
    tr_hint: "Minimal pair — V başlangıç vs W başlangıç.",
    level: "B1",
  },
  {
    id: "vw-4",
    target: "v_vs_w",
    phrase: "I work every weekend",
    tr_hint: "W, V, W sırası — Türk öğrenci için yorucu cümle.",
    level: "B1",
  },
  {
    id: "vw-5",
    target: "v_vs_w",
    phrase: "Vienna is lovely",
    tr_hint: "Şehir adı + V + V — pratik için elit cümle.",
    level: "B2",
  },

  // ─── /æ/ vowel — Türk "e/a" ile karıştırır
  {
    id: "ae-1",
    target: "ae_vowel",
    phrase: "cat",
    tr_hint: "Ağız geniş açık 'æ' sesi. 'Ket' veya 'kat' DEĞİL.",
    level: "A1",
    ipa_hint: "/kæt/",
  },
  {
    id: "ae-2",
    target: "ae_vowel",
    phrase: "happy family",
    tr_hint: "İki kelime de 'æ' içerir. Ağız geniş.",
    level: "A2",
  },
  {
    id: "ae-3",
    target: "ae_vowel",
    phrase: "I can't catch that",
    tr_hint: "Üç 'æ' tek cümlede — ağız jimnastiği.",
    level: "B1",
  },
  {
    id: "ae-4",
    target: "ae_vowel",
    phrase: "fantastic apple",
    tr_hint: "Sıfat + isim — 'æ' iki yerde.",
    level: "A2",
  },

  // ─── /ɪ/ vs /iː/ — kısa 'i' vs uzun 'ee'
  {
    id: "i-1",
    target: "ih_vs_iy",
    phrase: "ship or sheep",
    tr_hint: "Kısa 'ı' vs uzun 'i'. Türk öğrenci ikisini de uzun söyler.",
    level: "A2",
    ipa_hint: "/ʃɪp/ vs /ʃiːp/",
  },
  {
    id: "i-2",
    target: "ih_vs_iy",
    phrase: "it is easy",
    tr_hint: "Kısa 'ı' (it) + uzun 'i' (easy). Ayrımı koru.",
    level: "A1",
  },
  {
    id: "i-3",
    target: "ih_vs_iy",
    phrase: "fifteen meetings",
    tr_hint: "İki 'iː' arka arkaya. Türk 'fıftin mıtings' diyebilir.",
    level: "B1",
  },
  {
    id: "i-4",
    target: "ih_vs_iy",
    phrase: "this is interesting",
    tr_hint: "Üç ayrı 'ı/i' sesi. Pratik klasiği.",
    level: "B1",
  },

  // ─── /ŋ/ — "ing" sonu
  {
    id: "ng-1",
    target: "ng_consonant",
    phrase: "singing",
    tr_hint: "İki 'ng' arka arkaya. 'Singing-g' demek yok — n+g birleşik.",
    level: "A2",
    ipa_hint: "/ˈsɪŋɪŋ/",
  },
  {
    id: "ng-2",
    target: "ng_consonant",
    phrase: "I'm working",
    tr_hint: "Türk öğrenci 'workin' veya 'working-g' der. Doğru: 'ŋ' tek ses.",
    level: "A2",
  },
  {
    id: "ng-3",
    target: "ng_consonant",
    phrase: "running and jumping",
    tr_hint: "İki 'ng' + 'and' — koşma jimnastiği.",
    level: "B1",
  },

  // ─── Final devoicing — kelime sonu yumuşatma
  {
    id: "fd-1",
    target: "final_voicing",
    phrase: "big",
    tr_hint: "Sonu /g/ — Türk 'bik' der. Sonu sertleştirme.",
    level: "A1",
  },
  {
    id: "fd-2",
    target: "final_voicing",
    phrase: "good bye",
    tr_hint: "İki kelime de yumuşak ünsüzle biter. 'gut bay' DEĞİL.",
    level: "A1",
  },
  {
    id: "fd-3",
    target: "final_voicing",
    phrase: "bag of cabbage",
    tr_hint: "/g/, /v/, /dʒ/ — üç yumuşak ses sona — Türk hep sertleştirir.",
    level: "B1",
  },
  {
    id: "fd-4",
    target: "final_voicing",
    phrase: "I need a job",
    tr_hint: "'Need' ve 'job' — son ünsüzler titreşimli kalmalı.",
    level: "A2",
  },

  // ─── Combined challenges (advanced)
  {
    id: "combo-1",
    target: "th_voiceless",
    phrase: "throughout the month",
    tr_hint: "İki 'th' (biri sessiz biri sesli) + final /θ/. C1 düzey.",
    level: "C1",
  },
  {
    id: "combo-2",
    target: "v_vs_w",
    phrase: "we have several invitations",
    tr_hint: "W, V, V — uzun cümlede tutarlılık.",
    level: "B2",
  },
  {
    id: "combo-3",
    target: "ae_vowel",
    phrase: "I had a fantastic vacation",
    tr_hint: "Dört 'æ' tek cümlede. Ağız sabit kalsın.",
    level: "B2",
  },
];

/**
 * Bir CEFR seviyesine uygun random drill seç. Adaptive — kullanıcı
 * seviyesine ±1 band içinde seçim yapar.
 */
export function pickDrillsForLevel(
  userLevel: CefrLevel,
  count: number = 5,
): DrillItem[] {
  const order: CefrLevel[] = ["A1", "A2", "B1", "B2", "C1", "C2"];
  const userIdx = order.indexOf(userLevel);
  const minIdx = Math.max(0, userIdx - 1);
  const maxIdx = Math.min(order.length - 1, userIdx + 1);
  const targetLevels = new Set(order.slice(minIdx, maxIdx + 1));
  const eligible = DRILL_BANK.filter((d) => targetLevels.has(d.level));
  // Deterministic shuffle by day-of-year — herkes aynı gün aynı sırada
  // görür, day-1 vs day-2 farklı set (variety).
  const seed = Math.floor(Date.now() / (24 * 3600 * 1000));
  return [...eligible]
    .sort((a, b) => {
      const ha = (a.id.charCodeAt(0) * 31 + seed) % 1000;
      const hb = (b.id.charCodeAt(0) * 31 + seed) % 1000;
      return ha - hb;
    })
    .slice(0, count);
}
