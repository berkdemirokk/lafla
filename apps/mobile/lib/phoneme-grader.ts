// Lafla — Phoneme-level pronunciation grader for Turkish speakers.
//
// Why this exists: native iOS Speech recognition returns text, not
// phonemes. We can't directly score "did the user say /θ/ or /s/?". But
// the recognizer's word-level confusion is itself a signal — if the
// target is "think" and the user said "sink", the recognizer's choice
// reveals which phoneme slot went sideways.
//
// Pipeline:
//   1. Convert target sentence -> target ARPAbet (cmudict + g2p fallback).
//   2. Convert STT output  -> spoken ARPAbet (same path).
//   3. Word-by-word, run a Needleman-Wunsch-style alignment over the
//      phoneme sequences (cheap DP, O(m*n) per word, tiny).
//   4. For each aligned target phoneme: classify as correct / near (in
//      the Turkish-speaker confusion table) / wrong / dropped (gap).
//   5. Roll up to per-word score, then overall, then surface the top
//      "weak sounds" with Turkish coaching tips.
//
// The confusion table encodes the systematic mistakes Turkish learners
// make. It's keyed by ARPAbet but the IPA is included in the hint so
// users see familiar symbols.

import { sentenceToPhonemes, wordToPhonemes, phonemesToIpa } from "./g2p";
import { ARPABET_TO_IPA } from "./cmudict-mini";

// ============================================================
// Public types
// ============================================================

export type PhonemeBand = "correct" | "near" | "wrong" | "dropped";

export interface PhonemeScore {
  target: string; // ARPAbet
  targetIpa: string;
  spoken: string | null; // ARPAbet — null if dropped
  spokenIpa: string | null;
  band: PhonemeBand;
  hint_tr?: string;
}

export interface WordPhonemeAnalysis {
  word: string;
  targetIpa: string;
  spokenLikely: string; // the word the STT returned in this slot
  phonemes: PhonemeScore[];
  overallScore: number; // 0-100
}

export interface PhonemeAnalysisResult {
  overall: number;
  perWord: WordPhonemeAnalysis[];
  weakSounds: string[];
  tipsTr: string[];
}

// ============================================================
// Confusion table — Turkish learner errors.
// Each target maps to one or more acceptable "near miss" substitutes
// and a Turkish coaching hint keyed by (target, substitute).
// ============================================================

// Tip strings are pre-baked because they need to be ADULT-tone Turkish
// and theme-token-agnostic (UI handles styling).

interface ConfusionEntry {
  /** ARPAbet symbols Turkish speakers commonly substitute for `target`. */
  near: readonly string[];
  /** Default hint when we know `target` was missed but not the substitute. */
  defaultHint: string;
  /** Specific hints keyed by the substitute the user produced. */
  perSub?: Readonly<Record<string, string>>;
}

export const CONFUSIONS: Readonly<Record<string, ConfusionEntry>> = {
  // /θ/ — TH (think)
  TH: {
    near: ["S", "T", "F"],
    defaultHint:
      "Dilini ön dişlerinin arasına koy ve hafif üfle — 's' değil, 'th'.",
    perSub: {
      S: "'S' diyorsun; dilini dişlerinin arasından ÇIKAR, hafifçe üfle: 'th'.",
      T: "'T' diyorsun; dil damağa değmesin, dişlerin arasına UZANSIN ve üfle.",
      F: "'F' diyorsun; üst dudak değil, ÜST DİŞ + dil ucu kullan.",
    },
  },
  // /ð/ — DH (this)
  DH: {
    near: ["D", "Z", "V"],
    defaultHint:
      "Dilini ön dişlerinin arasına koy, ama bu sefer gırtlağın TİTRESİN — 'd' değil, 'th' titreşimli.",
    perSub: {
      D: "'D' diyorsun; dilini damaktan indir, ön dişlerinin arasına ittir.",
      Z: "'Z' diyorsun; dilin dişlerinin ARASINDA olmalı, ardında değil.",
      V: "Üst dudak/diş yerine dil ucunu ön dişlerin arasına koy.",
    },
  },
  // /v/ — V (van) — Turks often produce /w/
  V: {
    near: ["W"],
    defaultHint:
      "Alt dudağını ÜST DİŞLERİNE değdir ve hafifçe titret — 'w' değil 'v'.",
    perSub: {
      W: "Dudaklarını yuvarlama; alt dudağı üst dişe değdir — Türkçe 'v' gibi değil, daha gergin.",
    },
  },
  // /w/ — W (we) — Turks often substitute /v/
  W: {
    near: ["V"],
    defaultHint:
      "Dudaklarını öne uzat ve yuvarla, sonra aç — dişe değdirme. 'V' değil 'w'.",
    perSub: {
      V: "Alt dudağını dişe değdirmiyorsun, dudakları yumuşatıp yuvarla: 'w'.",
    },
  },
  // /æ/ — AE (cat) — Turks compress to /e/ or /a/
  AE: {
    near: ["EH", "AA", "AH"],
    defaultHint:
      "Ağzını geniş aç ve dilini ön-alt konuma indir — 'e' ile 'a' arasında bir ses.",
    perSub: {
      EH: "Daha geniş aç — 'cat' Türkçe 'ket' değil, çenen daha aşağıda olmalı.",
      AA: "Dilini biraz öne çek ve dudakları geriye aç — 'a' değil 'æ'.",
      AH: "Ağzını daha çok aç; 'cut' değil 'cat'.",
    },
  },
  // /ɪ/ — IH (ship) vs /iː/ IY (sheep)
  IH: {
    near: ["IY"],
    defaultHint:
      "Çeneni biraz indir ve sesi kısa tut — uzatma. 'ship', 'sheep' değil.",
    perSub: {
      IY: "Sesi uzatma. Kısa, gevşek 'i' — Türkçe 'i'ye yakın ama daha kısa.",
    },
  },
  // /iː/ — IY (sheep)
  IY: {
    near: ["IH"],
    defaultHint:
      "Dudaklarını yaylaya yaylaya GER ve sesi uzat — 'i:' uzun ve gergin olmalı.",
    perSub: {
      IH: "Sesi uzat ve dudaklarını ger — 'sit' değil 'seat'.",
    },
  },
  // /ŋ/ — NG (sing)
  NG: {
    near: ["N"],
    defaultHint:
      "Dilinin ARKASINI damağa kaldır, ucunu serbest bırak — 'n+g' değil tek bir burun sesi.",
    perSub: {
      N: "'N' diyorsun; dilini öne değil, ARKA damağa kaldır. 'g' eklemeden bırak.",
    },
  },
  // /ʌ/ — AH (cut) vs /æ/ AE (cat)
  AH: {
    near: ["AE", "AA"],
    defaultHint:
      "Ağzını yarı aç, dilini ortaya nötr konuma koy — Türkçe 'a' değil, daha kapalı.",
    perSub: {
      AE: "'Cat' değil 'cut' — ağzını daha az aç, dili geriye al.",
      AA: "'Father' değil 'cut' — daha kısa, daha kapalı bir ses.",
    },
  },
  // /ɛ/ — EH (bed)
  EH: {
    near: ["AE", "IH"],
    defaultHint: "Ağzını orta açıklıkta tut, 'e' net çıksın — 'a' ya yaklaşma.",
    perSub: {
      AE: "Çeneni biraz KAPAT — 'bad' değil 'bed'.",
      IH: "Ağzını biraz daha AÇ — 'bid' değil 'bed'.",
    },
  },
  // /ɔ/ — AO (caught)
  AO: {
    near: ["AA", "OW"],
    defaultHint:
      "Dudaklarını yuvarla ve dilini geriye çek — uzun, açık 'o' sesi.",
    perSub: {
      AA: "Dudaklarını yuvarla — 'cot' değil 'caught'.",
      OW: "Sonu kısa tut, ikinci 'u' sesi YOK — 'coat' değil 'caught'.",
    },
  },
  // /ɑ/ — AA (hot)
  AA: {
    near: ["AO", "AH"],
    defaultHint: "Ağzını AÇ ve dilini geriye düşür — uzun, açık 'a' sesi.",
    perSub: {
      AO: "Dudaklarını yuvarlama — 'caught' değil 'cot'.",
      AH: "Daha açık ve daha uzun — 'cut' değil 'cot'.",
    },
  },
  // /oʊ/ — OW (boat)
  OW: {
    near: ["AO", "AA"],
    defaultHint:
      "İki sesli kayma: 'o' ile başla, 'u'ya kay. Tek sesli Türkçe 'o' değil.",
    perSub: {
      AO: "Sonunda 'u' kayması ekle — 'caught' değil 'coat'.",
      AA: "Dudaklarını yuvarla ve sonunda 'u'ya kay — 'cot' değil 'coat'.",
    },
  },
  // /r/ — R (red)
  R: {
    near: ["L"],
    defaultHint:
      "Dilini damağa DEĞDİRME, yukarıda havada tut — Türkçe titreşimli 'r' değil.",
    perSub: {
      L: "Dilin damağa değiyor; uzaklaştır ve geriye kıvır.",
    },
  },
  // /l/ — L (light/full)
  L: {
    near: ["R"],
    defaultHint:
      "Dilinin UCUNU üst diş kökünün arkasına değdir — 'r' gibi havada bırakma.",
    perSub: {
      R: "Dilini damağa değdir — 'right' değil 'light'.",
    },
  },
  // /z/ — Z (final voicing) — Turks devoice to /s/
  Z: {
    near: ["S"],
    defaultHint: "Sonu titreşimli bırak — 's' değil 'z'. Boğazın titremeli.",
    perSub: {
      S: "Sonu sessiz değil, titreşimli yap — 'price' değil 'prize'.",
    },
  },
  // Final voiced stops (b/d/g) — Turkish often devoices in coda
  B: {
    near: ["P"],
    defaultHint: "Kelime sonundaki 'b'yi titreşimli bitir — 'p' değil 'b'.",
    perSub: { P: "'cap' değil 'cab' — boğazını titret." },
  },
  D: {
    near: ["T"],
    defaultHint: "Kelime sonundaki 'd'yi titreşimli bitir — 't' değil 'd'.",
    perSub: { T: "'bet' değil 'bed' — boğazını titret." },
  },
  G: {
    near: ["K"],
    defaultHint: "Kelime sonundaki 'g'yi titreşimli bitir — 'k' değil 'g'.",
    perSub: { K: "'back' değil 'bag' — boğazını titret." },
  },
  // /h/ — HH (Turks often drop or harden to /x/)
  HH: {
    near: ["K"],
    defaultHint: "Yumuşak nefes — boğazını kazıma, sadece üfle: 'h'.",
    perSub: {
      K: "Çok sert; boğazını kazıma, sadece nefes üfle.",
    },
  },
  // /ʃ/ — SH
  SH: {
    near: ["S", "CH"],
    defaultHint:
      "Dilini damağa yaklaştır ama değdirme; uzun, havalı 'ş' sesi.",
    perSub: {
      S: "Dilini damağa daha yakın tut — 'sip' değil 'ship'.",
      CH: "Patlayıcı değil, sürekli ses — 'chip' değil 'ship'.",
    },
  },
  // /tʃ/ — CH
  CH: {
    near: ["SH", "JH"],
    defaultHint: "Önce 't' sonra 'ş' kayması — sürekli değil, patlayıcı.",
    perSub: {
      SH: "Patlayıcı bir başlangıç ekle: 't+ş' — 'ship' değil 'chip'.",
      JH: "Sessiz tut — 'job' değil 'chop'.",
    },
  },
  // /dʒ/ — JH
  JH: {
    near: ["CH", "Y"],
    defaultHint: "Patlayıcı 'd+j' birleşimi, titreşimli.",
    perSub: {
      CH: "Titreşimli yap — 'chop' değil 'job'.",
      Y: "Patlayıcı bir 'd' ile başla — 'yes' değil 'jess'.",
    },
  },
  // /f/ vs /p/
  F: {
    near: ["P"],
    defaultHint: "Üst diş + alt dudak, hafif üfle — 'p' değil 'f'.",
    perSub: { P: "'pen' değil 'fen' — dudakları kapatma." },
  },
  // /p/, /t/, /k/ aspiration — Turks under-aspirate word-initially.
  P: {
    near: ["B"],
    defaultHint:
      "Kelime başında 'p'yi biraz aspire et — bir nefes patlaması ekle.",
    perSub: {
      B: "Sessiz tut — 'big' değil 'pig'.",
    },
  },
  T: {
    near: ["D"],
    defaultHint:
      "Kelime başında 't'yi biraz aspire et — Türkçe 't'den daha sert.",
    perSub: {
      D: "Sessiz tut — 'do' değil 'two'.",
    },
  },
  K: {
    near: ["G"],
    defaultHint:
      "Kelime başında 'k'yi biraz aspire et — Türkçe 'k'den daha sert.",
    perSub: {
      G: "Sessiz tut — 'goat' değil 'coat'.",
    },
  },
};

// ============================================================
// DP alignment
// ============================================================

type Op = "match" | "sub" | "ins" | "del";

interface AlignmentPair {
  t: string | null; // target phoneme (null = insertion in spoken)
  s: string | null; // spoken phoneme (null = deletion / dropped)
  op: Op;
}

/**
 * Needleman-Wunsch over phoneme sequences. Returns the optimal alignment
 * as a sequence of (target, spoken) pairs. Substitution cost is 1, gap
 * cost is 1, match cost is 0.
 */
function align(t: readonly string[], s: readonly string[]): AlignmentPair[] {
  const m = t.length;
  const n = s.length;
  // dp[i][j] = min edit distance between t[0..i] and s[0..j]
  const dp: number[][] = [];
  const bt: Op[][] = [];
  for (let i = 0; i <= m; i++) {
    dp.push(new Array(n + 1).fill(0));
    bt.push(new Array(n + 1).fill("match"));
  }
  for (let i = 0; i <= m; i++) {
    dp[i]![0] = i;
    bt[i]![0] = "del";
  }
  for (let j = 0; j <= n; j++) {
    dp[0]![j] = j;
    bt[0]![j] = "ins";
  }
  bt[0]![0] = "match";

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const matchCost = t[i - 1] === s[j - 1] ? 0 : 1;
      const diag = dp[i - 1]![j - 1]! + matchCost;
      const up = dp[i - 1]![j]! + 1;
      const left = dp[i]![j - 1]! + 1;
      let best = diag;
      let op: Op = matchCost === 0 ? "match" : "sub";
      if (up < best) {
        best = up;
        op = "del";
      }
      if (left < best) {
        best = left;
        op = "ins";
      }
      dp[i]![j] = best;
      bt[i]![j] = op;
    }
  }

  // Backtrack
  const pairs: AlignmentPair[] = [];
  let i = m;
  let j = n;
  while (i > 0 || j > 0) {
    const op = bt[i]![j]!;
    if (op === "match" || op === "sub") {
      pairs.push({ t: t[i - 1]!, s: s[j - 1]!, op });
      i--;
      j--;
    } else if (op === "del") {
      pairs.push({ t: t[i - 1]!, s: null, op: "del" });
      i--;
    } else {
      pairs.push({ t: null, s: s[j - 1]!, op: "ins" });
      j--;
    }
  }
  return pairs.reverse();
}

// ============================================================
// Band classification
// ============================================================

function classify(target: string, spoken: string | null): PhonemeBand {
  if (spoken === null) return "dropped";
  if (spoken === target) return "correct";
  const entry = CONFUSIONS[target];
  if (entry && entry.near.includes(spoken)) return "near";
  return "wrong";
}

function hintFor(target: string, spoken: string | null): string | undefined {
  const entry = CONFUSIONS[target];
  if (!entry) return undefined;
  if (spoken && entry.perSub && entry.perSub[spoken]) {
    return entry.perSub[spoken];
  }
  return entry.defaultHint;
}

function ipaOf(arpa: string): string {
  return ARPABET_TO_IPA[arpa] ?? arpa;
}

function bandWeight(b: PhonemeBand): number {
  if (b === "correct") return 1.0;
  if (b === "near") return 0.6;
  if (b === "wrong") return 0.0;
  return 0.0; // dropped
}

// ============================================================
// Word-level analysis
// ============================================================

function analyzeWord(
  targetWord: string,
  targetPhonemes: readonly string[],
  spokenWord: string,
  spokenPhonemes: readonly string[],
): WordPhonemeAnalysis {
  const aligned = align(targetPhonemes, spokenPhonemes);

  const phonemes: PhonemeScore[] = [];
  let scoreSum = 0;
  let scoreCount = 0;

  for (const pair of aligned) {
    if (pair.t === null) {
      // Insertion: spoken added an extra phoneme. We don't surface this
      // as a per-target chip but it does drag the score down slightly.
      scoreCount += 1;
      // counted as 0
      continue;
    }
    const band = classify(pair.t, pair.s);
    phonemes.push({
      target: pair.t,
      targetIpa: ipaOf(pair.t),
      spoken: pair.s,
      spokenIpa: pair.s ? ipaOf(pair.s) : null,
      band,
      hint_tr: band === "wrong" || band === "near" ? hintFor(pair.t, pair.s) : undefined,
    });
    scoreSum += bandWeight(band);
    scoreCount += 1;
  }

  const overallScore =
    scoreCount === 0 ? 100 : Math.round((scoreSum / scoreCount) * 100);

  return {
    word: targetWord,
    targetIpa: phonemesToIpa(targetPhonemes),
    spokenLikely: spokenWord,
    phonemes,
    overallScore,
  };
}

// ============================================================
// Main entry
// ============================================================

/**
 * Compare two strings (target phrase vs heard transcript) and produce a
 * phoneme-level breakdown plus Turkish coaching tips.
 *
 * Defensive: if either side has zero recognized words, returns a result
 * with overall=0 and an empty perWord list. The caller should fall back
 * to word-level grading in that case (see pronunciation-grader.ts).
 */
export function analyzePhonemes(
  target: string,
  spoken: string,
): PhonemeAnalysisResult {
  const tgt = sentenceToPhonemes(target);
  const spk = sentenceToPhonemes(spoken);

  if (tgt.perWord.length === 0) {
    return { overall: 0, perWord: [], weakSounds: [], tipsTr: [] };
  }

  const perWord: WordPhonemeAnalysis[] = [];

  for (let i = 0; i < tgt.perWord.length; i++) {
    const tw = tgt.perWord[i]!;
    const sw = spk.perWord[i];

    // No spoken slot at this position: every target phoneme is dropped.
    if (!sw) {
      const dropped: PhonemeScore[] = tw.phonemes.map((p) => ({
        target: p,
        targetIpa: ipaOf(p),
        spoken: null,
        spokenIpa: null,
        band: "dropped" as const,
        hint_tr: hintFor(p, null),
      }));
      perWord.push({
        word: tw.word,
        targetIpa: phonemesToIpa(tw.phonemes),
        spokenLikely: "",
        phonemes: dropped,
        overallScore: 0,
      });
      continue;
    }

    // Defensive: if g2p produced no phonemes for the target (rare —
    // empty/unparseable word), skip phoneme scoring and mark a single
    // "dropped" placeholder so the UI doesn't crash.
    if (tw.phonemes.length === 0) {
      perWord.push({
        word: tw.word,
        targetIpa: "",
        spokenLikely: sw.word,
        phonemes: [],
        overallScore: 100,
      });
      continue;
    }

    perWord.push(analyzeWord(tw.word, tw.phonemes, sw.word, sw.phonemes));
  }

  // Overall score = mean of per-word scores.
  const overallMean =
    perWord.reduce((acc, w) => acc + w.overallScore, 0) / perWord.length;
  const overall = Math.round(overallMean);

  // Roll up weak sounds: phonemes the user got wrong or near in IPA form,
  // ranked by frequency.
  const weakCounts = new Map<string, number>();
  for (const w of perWord) {
    for (const p of w.phonemes) {
      if (p.band === "wrong" || p.band === "near" || p.band === "dropped") {
        const key = p.targetIpa;
        weakCounts.set(key, (weakCounts.get(key) ?? 0) + 1);
      }
    }
  }
  const weakSounds = [...weakCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([s]) => s);

  // Top 3 tips: take the most-frequent weak sound's hint plus up to two
  // more from distinct ARPAbet targets.
  const seenTargets = new Set<string>();
  const tipsTr: string[] = [];
  for (const w of perWord) {
    for (const p of w.phonemes) {
      if ((p.band === "wrong" || p.band === "near") && p.hint_tr) {
        if (!seenTargets.has(p.target)) {
          seenTargets.add(p.target);
          tipsTr.push(p.hint_tr);
          if (tipsTr.length >= 3) break;
        }
      }
    }
    if (tipsTr.length >= 3) break;
  }

  return { overall, perWord, weakSounds, tipsTr };
}

// Re-export the helper so consumers can convert ARPAbet -> IPA without
// pulling cmudict-mini directly.
export { wordToPhonemes, sentenceToPhonemes, phonemesToIpa };
