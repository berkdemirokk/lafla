// Lafla — Speech metrics engine (per-utterance).
//
// Computes adult-friendly speaking metrics from a transcript + duration:
//   • WPM (words per minute)
//   • Filler-word counts (English + Turkish carry-over)
//   • Pause patterns
//   • A 0-100 fluency composite + low/mid/high band
//   • 1-3 Turkish coaching hints
//
// Pure, deterministic, no I/O. This file is intentionally framework-free
// so the same engine can run inside lessons, voice sessions, drills and
// freechat. Persistence + aggregation live in `speech-metrics-storage.ts`.
//
// Tone reference: Lucida AI's analytic depth, but anchored to a Turkish
// speaker who carries over "şey/yani/eee" into English.

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export interface SpeechSampleInput {
  transcript: string;
  durationMs: number; // how long the user spoke
  pauseRangesMs?: number[]; // optional pause durations between words/phrases
  language?: "en" | "tr";
}

export interface SpeechMetrics {
  wpm: number;
  totalWords: number;
  durationSec: number;
  fillerWords: { word: string; count: number }[]; // sorted desc
  fillerRate: number; // fillers per minute
  pauseCount: number;
  avgPauseMs: number;
  longestPauseMs: number;
  fluencyScore: number; // 0-100 composite
  band: "low" | "mid" | "high"; // mapped from fluencyScore
  hintsTr: string[]; // 1-3 actionable Turkish coaching tips
}

// ---------------------------------------------------------------------------
// Filler dictionaries
//
// Detection rule: case-insensitive whole-word match. We keep multi-token
// fillers ("you know", "i mean") as space-separated phrases and scan them
// before stripping word boundaries. Turkish list also matches when a TR
// speaker carries them into English ("şey", "yani", "eee").
// ---------------------------------------------------------------------------

export const FILLERS_EN: readonly string[] = [
  "uh",
  "uhh",
  "uhm",
  "um",
  "umm",
  "ah",
  "ahh",
  "er",
  "err",
  "erm",
  "hmm",
  "mhm",
  "like",
  "basically",
  "literally",
  "actually",
  "honestly",
  "obviously",
  "right",
  "okay",
  "ok",
  "so",
  "well",
  "anyway",
  "anyways",
  "you know",
  "i mean",
  "kind of",
  "kinda",
  "sort of",
  "sorta",
] as const;

export const FILLERS_TR: readonly string[] = [
  "şey",
  "sey",
  "şeyy",
  "eee",
  "ee",
  "eeee",
  "ııı",
  "iii",
  "ıı",
  "yani",
  "hani",
  "işte",
  "iste",
  "falan",
  "filan",
  "böyle",
  "boyle",
  "şöyle",
  "soyle",
  "tamam",
  "neyse",
  "valla",
  "vallahi",
  "aslında",
  "aslinda",
] as const;

// ---------------------------------------------------------------------------
// Tokenisation + filler extraction
// ---------------------------------------------------------------------------

// Strips punctuation but keeps Turkish diacritics intact.
function normalize(transcript: string): string {
  return transcript
    .toLowerCase()
    .replace(/[‘’“”]/g, "'")
    .replace(/[.,!?;:()"\[\]{}<>\/\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(transcript: string): string[] {
  const norm = normalize(transcript);
  if (!norm) return [];
  return norm.split(" ").filter((t) => t.length > 0);
}

interface FillerCount {
  word: string;
  count: number;
}

function countFillers(
  transcript: string,
  language: "en" | "tr",
): FillerCount[] {
  const norm = normalize(transcript);
  if (!norm) return [];

  // Always scan both lists — Turkish learners often mix in TR fillers
  // even during English practice. We tag by hit, not by language.
  const primary = language === "tr" ? FILLERS_TR : FILLERS_EN;
  const secondary = language === "tr" ? FILLERS_EN : FILLERS_TR;
  const allFillers = [...primary, ...secondary];

  const tally = new Map<string, number>();
  // Pad with spaces so whole-word matches at start/end work uniformly.
  const padded = ` ${norm} `;

  for (const filler of allFillers) {
    if (!filler) continue;
    const needle = ` ${filler} `;
    let from = 0;
    let hits = 0;
    while (true) {
      const idx = padded.indexOf(needle, from);
      if (idx === -1) break;
      hits++;
      // Move past start of match, but allow overlapping matches
      // (rare for fillers, but cheap to support).
      from = idx + 1;
    }
    if (hits > 0) {
      tally.set(filler, (tally.get(filler) ?? 0) + hits);
    }
  }

  return Array.from(tally.entries())
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word));
}

// ---------------------------------------------------------------------------
// Pause stats
// ---------------------------------------------------------------------------

interface PauseStats {
  pauseCount: number;
  avgPauseMs: number;
  longestPauseMs: number;
}

function pauseStats(pauseRangesMs: number[] | undefined): PauseStats {
  if (!pauseRangesMs || pauseRangesMs.length === 0) {
    return { pauseCount: 0, avgPauseMs: 0, longestPauseMs: 0 };
  }
  // Only count meaningful pauses (>= 250ms). Anything below is just the
  // natural gap between words.
  const meaningful = pauseRangesMs.filter((p) => p >= 250);
  if (meaningful.length === 0) {
    return { pauseCount: 0, avgPauseMs: 0, longestPauseMs: 0 };
  }
  const sum = meaningful.reduce((a, b) => a + b, 0);
  const longest = meaningful.reduce((a, b) => (b > a ? b : a), 0);
  return {
    pauseCount: meaningful.length,
    avgPauseMs: Math.round(sum / meaningful.length),
    longestPauseMs: longest,
  };
}

// ---------------------------------------------------------------------------
// Fluency scoring
//
// The composite (0-100) combines four signals:
//
//   1. WPM proximity to a "native English conversation" band (140-160).
//      A2 learners cruise around 90-110 WPM; we don't penalise that, but
//      we reward getting closer to 140-160. Below 60 or above 220 = too
//      far from natural speech, so we cap the contribution.
//
//   2. Filler rate (fillers / minute). 0-3/min is normal speech; >6/min
//      reads as nervous. Each excess filler beyond 3/min costs points.
//
//   3. Average pause length. >1500ms suggests struggling to find words.
//      Below 800ms reads as smooth.
//
//   4. Range guardrail — extreme WPM (very slow OR very fast) gets an
//      additional small penalty even before the proximity score.
//
// Weights are tuned to feel honest, not generous. A confident B1 should
// land in the 55-75 range; a stumbling A2 in 25-45; near-native in 80+.
// ---------------------------------------------------------------------------

const NATIVE_WPM_LOW = 140;
const NATIVE_WPM_HIGH = 160;
const A2_WPM_LOW = 90;
const A2_WPM_HIGH = 110;

function wpmScoreComponent(wpm: number): number {
  // Returns 0..50. Peak at the native band, gradual fall-off both sides.
  if (wpm <= 0) return 0;
  if (wpm >= NATIVE_WPM_LOW && wpm <= NATIVE_WPM_HIGH) return 50;
  if (wpm >= A2_WPM_LOW && wpm < NATIVE_WPM_LOW) {
    // Linear ramp from 30 at A2_WPM_LOW to 50 at NATIVE_WPM_LOW.
    const t = (wpm - A2_WPM_LOW) / (NATIVE_WPM_LOW - A2_WPM_LOW);
    return Math.round(30 + t * 20);
  }
  if (wpm > NATIVE_WPM_HIGH && wpm <= 200) {
    // Slight drop above native: 50 → 40 as we go 160 → 200.
    const t = (wpm - NATIVE_WPM_HIGH) / (200 - NATIVE_WPM_HIGH);
    return Math.round(50 - t * 10);
  }
  if (wpm < A2_WPM_LOW && wpm >= 60) {
    // 60 wpm = 15 pts; up to A2_WPM_LOW = 30.
    const t = (wpm - 60) / (A2_WPM_LOW - 60);
    return Math.round(15 + t * 15);
  }
  if (wpm < 60) {
    // Below 60 wpm — choppy. Capped at 12.
    return Math.max(0, Math.round((wpm / 60) * 12));
  }
  // wpm > 200 — too fast, hard to follow.
  return Math.max(20, Math.round(40 - (wpm - 200) / 5));
}

function fillerPenalty(fillerRate: number): number {
  // Returns 0..25 of penalty (subtracted later).
  if (fillerRate <= 3) return 0;
  // 5 pts per excess filler/min, capped at 25.
  const excess = fillerRate - 3;
  return Math.min(25, Math.round(excess * 5));
}

function pausePenalty(avgPauseMs: number): number {
  // 0..15 of penalty.
  if (avgPauseMs <= 800) return 0;
  if (avgPauseMs >= 2500) return 15;
  const t = (avgPauseMs - 800) / (2500 - 800);
  return Math.round(t * 15);
}

function rangePenalty(wpm: number): number {
  // 0..10 penalty for extremes outside any reasonable adult range.
  if (wpm < 40) return 10;
  if (wpm > 230) return 8;
  return 0;
}

function bandFromScore(score: number): "low" | "mid" | "high" {
  if (score >= 70) return "high";
  if (score >= 45) return "mid";
  return "low";
}

function computeFluencyScore(args: {
  wpm: number;
  fillerRate: number;
  avgPauseMs: number;
}): number {
  // Base 50 anchor + WPM contribution (0..50), then penalties.
  // Note: wpmScoreComponent already returns 0..50, so we use it directly
  // as the "achieved" pool, then subtract penalties.
  const positive = wpmScoreComponent(args.wpm); // 0..50
  // Smoothness baseline: assume 30 pts for "starting smooth" then deduct.
  let smoothness = 30;
  smoothness -= fillerPenalty(args.fillerRate);
  smoothness -= pausePenalty(args.avgPauseMs);
  smoothness = Math.max(0, smoothness);

  let score = positive + smoothness; // 0..80 typical, can reach 80
  score -= rangePenalty(args.wpm);

  // Floor/ceiling + give a small ambient lift so a respectable run that
  // hits no penalties lands in the high band rather than feeling capped.
  score = Math.max(0, Math.min(100, Math.round(score)));
  return score;
}

// ---------------------------------------------------------------------------
// Turkish coaching hints
//
// Selected by the engine using simple priority rules. Each rule maps to
// 1+ candidate hints; we pick by a deterministic hash of the transcript
// so the same input yields the same hint (no random churn in the UI).
// ---------------------------------------------------------------------------

interface HintRule {
  match: (m: {
    metrics: SpeechMetrics;
    topFiller: string | null;
  }) => boolean;
  hints: string[];
}

const HINT_RULES: HintRule[] = [
  // Specific filler hits — highest priority because they're actionable.
  {
    match: ({ topFiller }) => topFiller === "şey" || topFiller === "sey",
    hints: [
      "İngilizce konuşurken Türkçe 'şey' duygusu 'uhh' olarak geliyor. 1 sn dur, sonra 'I think...' ile başla.",
      "'Şey' yerine sessiz bir nefes al. Sessizlik 'uhm'dan daha profesyonel duruyor.",
    ],
  },
  {
    match: ({ topFiller }) => topFiller === "yani",
    hints: [
      "'Yani' yerine 'in other words' ya da 'so basically' dene — aynı bağı kuruyor, akıcı duruyor.",
      "Cümle bağlarken 'yani'yi at, yerine kısa bir es koy. Etki daha güçlü oluyor.",
    ],
  },
  {
    match: ({ topFiller }) => topFiller === "eee" || topFiller === "ee",
    hints: [
      "'Eee' sesi düşünme süresini gösteriyor. Onun yerine 'let me think for a second' köprüsünü ezberle.",
      "Düşünürken susmaktan korkma — 1-2 sn sessizlik 'eee'den daha doğal geliyor.",
    ],
  },
  {
    match: ({ topFiller }) =>
      topFiller === "like" || topFiller === "i mean" || topFiller === "you know",
    hints: [
      "İngilizce 'like' bir dolgu sözcüğü, anlamı yok. Cümleyi 'like'sız söyle, daha net dur.",
      "'You know' ya da 'I mean' ile başlamak yerine doğrudan ana fikrini söyle — etki daha temiz.",
    ],
  },
  // High filler rate (general)
  {
    match: ({ metrics }) => metrics.fillerRate > 8,
    hints: [
      "Dakikada 8+ dolgu sözcüğü çok yüksek. Cümleyi söylemeden önce zihninde tamamla, sonra başla.",
      "Doluluk sesi yerine sessiz kal. Sessizlik akıcılığı bozmaz — aksine yetkinlik gösterir.",
    ],
  },
  {
    match: ({ metrics }) => metrics.fillerRate > 4,
    hints: [
      "Dolgu sözcüklerini azaltmak için bir nefes egzersizi: cümle başlarken burnundan 1 sn nefes al.",
      "Dolgular azaldıkça cümlelerin daha sağlam duracak. Bir sonraki kayıtta 'uhm' sayısını yarıya indirmeyi hedefle.",
    ],
  },
  // Slow WPM
  {
    match: ({ metrics }) => metrics.wpm > 0 && metrics.wpm < 70,
    hints: [
      "Daha akıcı için cümleyi parça parça ezberle, sonra tek nefeste söyle.",
      "Çok yavaş konuşmak güveni düşürüyor. Aynı cümleyi 3 kez tekrar et, her tekrarda hızlan.",
      "Yavaş hız genelde kelime aramaktan oluyor. Önce Türkçe düşünmeden, doğrudan İngilizce şablonla başla.",
    ],
  },
  {
    match: ({ metrics }) => metrics.wpm > 0 && metrics.wpm < 100,
    hints: [
      "Hız biraz düşük — günlük İngilizce konuşması 120-150 WPM arası. Cümlenin ritmini tut, kelime tek tek söyleme.",
      "Daha doğal bir ritim için cümleyi nefesle parçala, kelimelerle değil.",
    ],
  },
  // Very fast — pronunciation usually suffers
  {
    match: ({ metrics }) => metrics.wpm > 200,
    hints: [
      "Çok hızlı konuşuyorsun — kelimeler birbirine yapışıyor. Vurgulu hecelere odaklan, hızı 10 birim yavaşlat.",
      "Hızlı konuşmak akıcılık değil, panik gösterebilir. Soluğu kontrol et, cümle sonlarında kısa duraklat.",
    ],
  },
  // High avg pause
  {
    match: ({ metrics }) => metrics.avgPauseMs > 2000,
    hints: [
      "Cümleyi bitirmeden duraksıyorsun. 'Let me think' gibi köprü ifadeleriyle akışı koru.",
      "Uzun sessizlik düşünme zamanı değil, kayıp zaman. Önce ana fikri tek cümleyle söyle, detayı sonra ekle.",
    ],
  },
  {
    match: ({ metrics }) => metrics.avgPauseMs > 1200,
    hints: [
      "Duraklamaların biraz uzun. Cümleyi parça parça kurma, blok şeklinde düşün.",
      "Sessizliği doldurmak için 'Well,' veya 'So,' ile başlamak akıcılık katar — ama abartma.",
    ],
  },
  {
    match: ({ metrics }) => metrics.pauseCount >= 6 && metrics.durationSec < 30,
    hints: [
      "Kısa sürede çok duraklama var. Önce bir nefes al, cümleyi tek seferde bitir.",
      "Sık duraklamak konuyu kaybettiğini düşündürüyor. Cümle taslağını zihninde ezberle, sonra konuş.",
    ],
  },
  // Very short utterance
  {
    match: ({ metrics }) =>
      metrics.totalWords > 0 && metrics.totalWords < 8,
    hints: [
      "Çok kısa konuştun. Aynı fikri 2-3 cümleyle açıkla — detay akıcılığı geliştirir.",
      "Tek cümlelik cevaplar pratiği sınırlı tutuyor. Bir sonraki turda en az 15 saniye konuş.",
    ],
  },
  // High band celebration / refinement
  {
    match: ({ metrics }) => metrics.fluencyScore >= 80,
    hints: [
      "Akıcılık skoru yüksek — şimdi telaffuza odaklan. Vurgulu heceleri daha net çıkar.",
      "Bu seviyede asıl fark deyim ve doğal kalıplar — bir sonraki turda yeni bir phrasal verb kullanmayı dene.",
    ],
  },
  // Mid band — encourage
  {
    match: ({ metrics }) =>
      metrics.fluencyScore >= 50 && metrics.fluencyScore < 70,
    hints: [
      "Sağlam bir orta seviye. Tek hedef: dolgu sözcüklerini 3/dk altına çek.",
      "İyi gidiyorsun. Bir sonraki kayıtta 5 saniye daha uzun konuşmayı dene — kapasite artar.",
    ],
  },
  // Default low-band fallback
  {
    match: ({ metrics }) => metrics.fluencyScore < 45,
    hints: [
      "Önce kısa cümlelerle başla, sonra bağlayıcılarla uzat. 'Because, however, also' — bu üçü akıcılığı katlar.",
      "Cümleden önce iki saniye düşün, sonra tek nefeste söyle. Cümle başında durmak akıcı görünür.",
    ],
  },
  // Universal closer (always matches; selected last only when nothing else hits)
  {
    match: () => true,
    hints: [
      "Düzenli kayıt önemli — günde 3 dk konuşma bile haftada belirgin fark yaratır.",
      "Akıcılık tek seferde gelmez. Aynı sahneyi yarın tekrar dene, farkı kendin duyacaksın.",
    ],
  },
];

function pickHints(metrics: SpeechMetrics, transcript: string): string[] {
  const topFiller = metrics.fillerWords[0]?.word ?? null;

  // Collect up to 3 distinct hints by walking the rules in order.
  // Deterministic per-transcript: we cycle through each rule's hints
  // using a stable hash so the same input yields the same hint without
  // always showing hint[0].
  const seed = stableHash(transcript);
  const picked: string[] = [];
  const seen = new Set<string>();

  for (const rule of HINT_RULES) {
    if (!rule.match({ metrics, topFiller })) continue;
    const idx = seed % rule.hints.length;
    const hint = rule.hints[idx];
    if (!seen.has(hint)) {
      picked.push(hint);
      seen.add(hint);
    }
    if (picked.length >= 3) break;
  }

  // Always at least 1 hint due to the universal closer.
  return picked.slice(0, 3);
}

function stableHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// ---------------------------------------------------------------------------
// Public — computeMetrics
// ---------------------------------------------------------------------------

export function computeMetrics(sample: SpeechSampleInput): SpeechMetrics {
  const language = sample.language ?? "en";
  const tokens = tokenize(sample.transcript);
  const totalWords = tokens.length;
  const durationSec = Math.max(0, Math.round(sample.durationMs / 100) / 10);
  const minutes = sample.durationMs > 0 ? sample.durationMs / 60000 : 0;
  const wpm = minutes > 0 ? Math.round(totalWords / minutes) : 0;

  const fillerWords = countFillers(sample.transcript, language);
  const totalFillers = fillerWords.reduce((a, f) => a + f.count, 0);
  const fillerRate = minutes > 0 ? +(totalFillers / minutes).toFixed(2) : 0;

  const pauses = pauseStats(sample.pauseRangesMs);

  const fluencyScore = computeFluencyScore({
    wpm,
    fillerRate,
    avgPauseMs: pauses.avgPauseMs,
  });
  const band = bandFromScore(fluencyScore);

  const partial: SpeechMetrics = {
    wpm,
    totalWords,
    durationSec,
    fillerWords,
    fillerRate,
    pauseCount: pauses.pauseCount,
    avgPauseMs: pauses.avgPauseMs,
    longestPauseMs: pauses.longestPauseMs,
    fluencyScore,
    band,
    hintsTr: [],
  };

  partial.hintsTr = pickHints(partial, sample.transcript);
  return partial;
}
