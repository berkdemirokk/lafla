// Lafla — AI moderation guardrails for the persistent coach ("Maya").
//
// Apple App Store Guideline 4.7 requires that LLM-driven conversational
// surfaces moderate harmful content. This module is the on-device
// gate-keeper that runs BEFORE the LLM call (user input) and AFTER it
// (Maya's draft reply) so:
//
//   - Crisis signals (suicide ideation, self-harm, abuse) bypass the LLM
//     entirely and trigger an empathetic Turkish crisis resource flow.
//   - NSFW / violence / drugs / illegal asks get a safe Turkish redirect
//     back into the English-coaching frame.
//   - Maya's outputs are post-checked so even if a provider misbehaves,
//     unsafe text doesn't reach the user.
//
// Design notes:
//   - This file is intentionally synchronous (no network) so it can run in
//     the hot path on every keystroke / STT chunk without latency.
//   - Keyword lists are conservative. We accept false positives in BOTH
//     directions: a tiny over-block in exchange for a clean App Store
//     review beats a single missed reject. The lists live in the codebase
//     (not server-side) so we never need a network round-trip for safety
//     decisions, and they can be reviewed by Apple alongside the binary.
//   - All blocked-response text is in Turkish because Lafla is Turkish-first
//     and the user-facing UI is Turkish. Maya replies stay in English-with-
//     occasional-Turkish elsewhere; safety responses break that convention
//     deliberately so the user gets the message in their native language.
//   - Crisis detection logs a Sentry breadcrumb (no PII — only the category)
//     so we can monitor frequency in the field without retaining content.

import { addBreadcrumb } from "./sentry";

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

export type SafetyReason =
  | "crisis"
  | "nsfw"
  | "violence"
  | "drugs"
  | "legal"
  | "medical"
  | "financial"
  | "blocked";

export interface SafetyCheck {
  ok: boolean;
  reason?: SafetyReason;
  /** Pre-built Turkish reply Maya should send instead of calling the LLM. */
  suggestedResponse_tr?: string;
  /**
   * If true, the UI must surface the crisis modal with emergency lines —
   * a redirect string is not sufficient.
   */
  shouldEscalate?: boolean;
}

// ---------------------------------------------------------------------------
// Keyword tables
//
// We deliberately keep these as small as possible — overly long blocklists
// generate false positives and miss obfuscated variants anyway. Apple's
// reviewer needs evidence of *some* moderation; defence-in-depth (pre-check
// + post-check + system prompt) covers the rest.
//
// Each entry is matched as a substring against a NORMALISED (lower-case,
// punctuation-stripped, Turkish-diacritic-folded) input. Phrase matches use
// the array form below so "kill myself" matches even though "kill" alone
// wouldn't (we don't want to block lessons about killing time).
// ---------------------------------------------------------------------------

const CRISIS_PATTERNS_TR: readonly string[] = [
  "intihar",
  "kendimi oldurmek",
  "kendimi öldürmek",
  "kendime zarar",
  "yasamak istemiyorum",
  "yaşamak istemiyorum",
  "olmek istiyorum",
  "ölmek istiyorum",
  "hayatima son",
  "hayatıma son",
  "bilegimi kesmek",
  "bileğimi kesmek",
  "fiziksel siddet",
  "fiziksel şiddet",
  "dovuyor",
  "dövüyor",
  "tecavuz",
  "tecavüz",
  "istismar",
];

const CRISIS_PATTERNS_EN: readonly string[] = [
  "kill myself",
  "killing myself",
  "end my life",
  "want to die",
  "wanna die",
  "suicide",
  "suicidal",
  "self harm",
  "self-harm",
  "cut myself",
  "cutting myself",
  "hurt myself",
  "no reason to live",
  "i was raped",
  "i am being abused",
  "i'm being abused",
];

const NSFW_PATTERNS_TR: readonly string[] = [
  "porno",
  "seks",
  "cinsel",
  "mastürbasyon",
  "masturbasyon",
  "fuhus",
  "fuhuş",
  "soyun",
  "ciplak",
  "çıplak",
];

const NSFW_PATTERNS_EN: readonly string[] = [
  "porn",
  "pornography",
  "nude",
  "naked",
  "sex with",
  "have sex",
  "blowjob",
  "masturbat",
  "erotic",
  "horny",
  "nsfw",
  "sexual fantasy",
];

const VIOLENCE_PATTERNS_TR: readonly string[] = [
  "bomba yapmak",
  "silah yapmak",
  "nasil oldururum",
  "nasıl öldürürüm",
  "birini oldurmek",
  "birini öldürmek",
];

const VIOLENCE_PATTERNS_EN: readonly string[] = [
  "how to make a bomb",
  "how to build a weapon",
  "how to kill someone",
  "how do i hurt",
  "how to attack",
  "school shooting",
];

const DRUGS_PATTERNS_TR: readonly string[] = [
  "esrar nasil",
  "esrar nasıl",
  "kokain nasil",
  "kokain nasıl",
  "uyusturucu nasil",
  "uyuşturucu nasıl",
  "metamfetamin nasil",
  "metamfetamin nasıl",
];

const DRUGS_PATTERNS_EN: readonly string[] = [
  "how to make meth",
  "how to make cocaine",
  "drugs how to",
  "how to cook drugs",
  "buy drugs online",
];

const LEGAL_PATTERNS_TR: readonly string[] = [
  "dava acmak",
  "dava açmak",
  "bosanma davasi",
  "boşanma davası",
  "hukuki tavsiye",
  "avukat tutmali",
  "avukat tutmalı",
];

const LEGAL_PATTERNS_EN: readonly string[] = [
  "legal advice",
  "should i sue",
  "what's the law",
  "is it illegal to",
];

const MEDICAL_PATTERNS_TR: readonly string[] = [
  "hangi ilaci",
  "hangi ilacı",
  "doz nedir",
  "kanser tedavi",
  "tani koy",
  "tanı koy",
  "hastaligim ne",
  "hastalığım ne",
];

const MEDICAL_PATTERNS_EN: readonly string[] = [
  "diagnose me",
  "what disease do i have",
  "what medication should i take",
  "is this cancer",
  "what's wrong with me medically",
];

const FINANCIAL_PATTERNS_TR: readonly string[] = [
  "hangi hisseyi al",
  "yatirim tavsiye",
  "yatırım tavsiye",
  "kripto al sat",
];

const FINANCIAL_PATTERNS_EN: readonly string[] = [
  "what stock should i buy",
  "investment advice",
  "should i buy bitcoin",
];

// Public for tests + the docs page — counts each category so it can be
// audited on demand without exporting the raw lists themselves.
export const BLOCKED_KEYWORD_COUNT = {
  crisis: CRISIS_PATTERNS_TR.length + CRISIS_PATTERNS_EN.length,
  nsfw: NSFW_PATTERNS_TR.length + NSFW_PATTERNS_EN.length,
  violence: VIOLENCE_PATTERNS_TR.length + VIOLENCE_PATTERNS_EN.length,
  drugs: DRUGS_PATTERNS_TR.length + DRUGS_PATTERNS_EN.length,
  legal: LEGAL_PATTERNS_TR.length + LEGAL_PATTERNS_EN.length,
  medical: MEDICAL_PATTERNS_TR.length + MEDICAL_PATTERNS_EN.length,
  financial: FINANCIAL_PATTERNS_TR.length + FINANCIAL_PATTERNS_EN.length,
  total:
    CRISIS_PATTERNS_TR.length +
    CRISIS_PATTERNS_EN.length +
    NSFW_PATTERNS_TR.length +
    NSFW_PATTERNS_EN.length +
    VIOLENCE_PATTERNS_TR.length +
    VIOLENCE_PATTERNS_EN.length +
    DRUGS_PATTERNS_TR.length +
    DRUGS_PATTERNS_EN.length +
    LEGAL_PATTERNS_TR.length +
    LEGAL_PATTERNS_EN.length +
    MEDICAL_PATTERNS_TR.length +
    MEDICAL_PATTERNS_EN.length +
    FINANCIAL_PATTERNS_TR.length +
    FINANCIAL_PATTERNS_EN.length,
} as const;

// ---------------------------------------------------------------------------
// Normalisation
// ---------------------------------------------------------------------------

// Map Turkish-specific letters to their ASCII fold so users can't bypass the
// filter by typing "intihar" vs "İntihar" or "İNTİHAR".
const DIACRITIC_FOLD: Record<string, string> = {
  ç: "c",
  Ç: "c",
  ğ: "g",
  Ğ: "g",
  ı: "i",
  I: "i",
  İ: "i",
  ö: "o",
  Ö: "o",
  ş: "s",
  Ş: "s",
  ü: "u",
  Ü: "u",
};

function normalise(text: string): string {
  let out = "";
  for (const ch of text) {
    out += DIACRITIC_FOLD[ch] ?? ch;
  }
  // Collapse whitespace, lower-case, strip a small set of obfuscation
  // characters (zero-width joiners, common decorative punctuation). We do
  // NOT strip apostrophes — "i'm" and "won't" need to remain matchable.
  // ​..‍ = zero-width space/non-joiner/joiner, ﻿ = BOM.
  return out
    .toLowerCase()
    .replace(/[​-‍﻿]/g, "")
    .replace(/[*_~`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesAny(haystack: string, needles: readonly string[]): boolean {
  for (const n of needles) {
    if (haystack.includes(n)) return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// Crisis-resource catalogue (Turkey-focused)
//
// These numbers are the ones officially published by Turkish public-health
// channels at the time of writing. They are *not* fetched from the network so
// they remain available even when the device is offline. If a number changes
// (rare for emergency lines), update this file and ship a build.
// ---------------------------------------------------------------------------

export function getCrisisResources(): {
  title_tr: string;
  message_tr: string;
  lines: { name: string; number: string; note_tr?: string }[];
} {
  return {
    title_tr: "Yanındayım",
    message_tr:
      "Söylediğin şeyi duyuyorum. Yalnız değilsin — şu an seninle konuşacak biri var. Aşağıdaki destek hatlarından birini ara, lütfen.",
    lines: [
      {
        name: "112 Acil",
        number: "112",
        note_tr: "Tıbbi acil durum. Hayati tehlike varsa hemen ara.",
      },
      {
        name: "AMATEM Psikolojik Destek",
        number: "444 0 776",
        note_tr: "Bağımlılık ve psikolojik krizler için 7/24 hat.",
      },
      {
        name: "Mor Çatı — Kadın Dayanışma",
        number: "0212 292 52 31",
        note_tr: "Şiddete uğrayan kadınlar için danışma hattı.",
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// Crisis signal helper — exported separately so callers can branch into the
// dedicated modal flow without re-running checkUserInput.
// ---------------------------------------------------------------------------

export function isCrisisSignal(text: string): boolean {
  if (!text) return false;
  const t = normalise(text);
  return (
    matchesAny(t, CRISIS_PATTERNS_TR) || matchesAny(t, CRISIS_PATTERNS_EN)
  );
}

// ---------------------------------------------------------------------------
// Pre-built safe redirect responses (Turkish)
//
// These bypass the LLM completely. The phrasing is intentionally warm and
// keeps Maya's persona — she's a friend, not a content moderator — while
// still drawing the line.
// ---------------------------------------------------------------------------

function redirectFor(reason: SafetyReason): string {
  switch (reason) {
    case "nsfw":
      return "Bunu konuşamayız — burası İngilizce çalışma alanı. Ama istersen 'flört etmenin İngilizcesi' gibi günlük diyalogları çalışabiliriz. Hangisini denemek istersin?";
    case "violence":
      return "Bu konuda yardımcı olamam, lütfen bunu başka bir kaynağa götür. İstersen güncel olaylar ya da haberler hakkında İngilizce konuşma pratiği yapabiliriz — hangisi ilgini çeker?";
    case "drugs":
      return "Bu konuda bilgi veremem. Ama 'sağlık alışkanlıkları' veya 'kötü alışkanlıklardan kurtulma' gibi konularda İngilizce konuşma pratiği yapabiliriz. Denemek ister misin?";
    case "legal":
      return "Hukuki tavsiye veremem — bunun için bir avukata danışman lazım. Ama 'iş sözleşmesi okumak' gibi günlük İngilizce iş yazışmalarını birlikte çalışabiliriz. Olur mu?";
    case "medical":
      return "Tıbbi tavsiye veremem — lütfen doktoruna danış. Ama doktorla İngilizce konuşma pratiği yapmak istersen, 'doktor randevusu' senaryosunu birlikte çalışabiliriz.";
    case "financial":
      return "Yatırım tavsiyesi veremem — bunun için bir uzmana git. Ama 'bütçe yapmak' veya 'banka müşteri hizmetleriyle konuşmak' gibi senaryolarda İngilizce pratik yapabiliriz.";
    case "blocked":
    default:
      return "Bunu konuşamayız ama bunun yerine günlük bir diyalog pratiği yapabiliriz. Bugün İngilizce hangi konuyu denemek istersin?";
  }
}

// ---------------------------------------------------------------------------
// Public checks
// ---------------------------------------------------------------------------

/**
 * Run the safety check on a USER INPUT before sending it to the LLM.
 *
 * Locale is a hint, not a hard switch — we run both TR and EN keyword sets
 * regardless because the user may code-switch mid-sentence (and many of
 * Maya's users intentionally type in English).
 */
export function checkUserInput(
  text: string,
  _locale: "tr" | "en" = "tr",
): SafetyCheck {
  if (!text || typeof text !== "string") {
    return { ok: true };
  }

  const t = normalise(text);
  if (!t) return { ok: true };

  // Crisis first — must outrank everything else because a crisis input may
  // *also* contain NSFW or violence keywords.
  if (matchesAny(t, CRISIS_PATTERNS_TR) || matchesAny(t, CRISIS_PATTERNS_EN)) {
    addBreadcrumb({
      category: "safety",
      message: "crisis_signal_detected",
      data: { source: "user_input" },
    });
    return {
      ok: false,
      reason: "crisis",
      shouldEscalate: true,
      suggestedResponse_tr: getCrisisResources().message_tr,
    };
  }

  if (matchesAny(t, NSFW_PATTERNS_TR) || matchesAny(t, NSFW_PATTERNS_EN)) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_user_input",
      data: { reason: "nsfw" },
    });
    return {
      ok: false,
      reason: "nsfw",
      suggestedResponse_tr: redirectFor("nsfw"),
    };
  }

  if (
    matchesAny(t, VIOLENCE_PATTERNS_TR) ||
    matchesAny(t, VIOLENCE_PATTERNS_EN)
  ) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_user_input",
      data: { reason: "violence" },
    });
    return {
      ok: false,
      reason: "violence",
      suggestedResponse_tr: redirectFor("violence"),
    };
  }

  if (matchesAny(t, DRUGS_PATTERNS_TR) || matchesAny(t, DRUGS_PATTERNS_EN)) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_user_input",
      data: { reason: "drugs" },
    });
    return {
      ok: false,
      reason: "drugs",
      suggestedResponse_tr: redirectFor("drugs"),
    };
  }

  if (matchesAny(t, LEGAL_PATTERNS_TR) || matchesAny(t, LEGAL_PATTERNS_EN)) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_user_input",
      data: { reason: "legal" },
    });
    return {
      ok: false,
      reason: "legal",
      suggestedResponse_tr: redirectFor("legal"),
    };
  }

  if (
    matchesAny(t, MEDICAL_PATTERNS_TR) ||
    matchesAny(t, MEDICAL_PATTERNS_EN)
  ) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_user_input",
      data: { reason: "medical" },
    });
    return {
      ok: false,
      reason: "medical",
      suggestedResponse_tr: redirectFor("medical"),
    };
  }

  if (
    matchesAny(t, FINANCIAL_PATTERNS_TR) ||
    matchesAny(t, FINANCIAL_PATTERNS_EN)
  ) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_user_input",
      data: { reason: "financial" },
    });
    return {
      ok: false,
      reason: "financial",
      suggestedResponse_tr: redirectFor("financial"),
    };
  }

  return { ok: true };
}

/**
 * Run the safety check on MAYA'S OUTPUT after the LLM call but before we
 * render it. This is the defence-of-last-resort: if a provider misbehaves or
 * the prompt is jailbroken we still don't surface unsafe text to the user.
 *
 * Locale-agnostic — Maya may switch to Turkish mid-reply, so we match both
 * dictionaries.
 */
export function checkMayaOutput(text: string): SafetyCheck {
  if (!text || typeof text !== "string") {
    return { ok: true };
  }

  const t = normalise(text);
  if (!t) return { ok: true };

  // Maya should never describe self-harm methods even hypothetically.
  if (matchesAny(t, CRISIS_PATTERNS_EN) || matchesAny(t, CRISIS_PATTERNS_TR)) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_maya_output",
      data: { reason: "crisis" },
    });
    return {
      ok: false,
      reason: "crisis",
      suggestedResponse_tr:
        "Bunu konuşamayız. Başka bir konuda nasıl yardım edebilirim?",
    };
  }

  if (matchesAny(t, NSFW_PATTERNS_EN) || matchesAny(t, NSFW_PATTERNS_TR)) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_maya_output",
      data: { reason: "nsfw" },
    });
    return {
      ok: false,
      reason: "nsfw",
      suggestedResponse_tr:
        "Bunu konuşamayız, başka bir konuda nasıl yardım edebilirim?",
    };
  }

  if (
    matchesAny(t, VIOLENCE_PATTERNS_EN) ||
    matchesAny(t, VIOLENCE_PATTERNS_TR)
  ) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_maya_output",
      data: { reason: "violence" },
    });
    return {
      ok: false,
      reason: "violence",
      suggestedResponse_tr:
        "Bunu konuşamayız, başka bir konuda nasıl yardım edebilirim?",
    };
  }

  if (matchesAny(t, DRUGS_PATTERNS_EN) || matchesAny(t, DRUGS_PATTERNS_TR)) {
    addBreadcrumb({
      category: "safety",
      message: "blocked_maya_output",
      data: { reason: "drugs" },
    });
    return {
      ok: false,
      reason: "drugs",
      suggestedResponse_tr:
        "Bunu konuşamayız, başka bir konuda nasıl yardım edebilirim?",
    };
  }

  return { ok: true };
}

/**
 * Standard safe-fallback string Maya falls back to when post-check flags
 * her draft reply. Kept as a function (not a const) so callers can localise
 * it later if we ever ship in another locale.
 */
export function getMayaSafeFallback(): string {
  return "Bunu konuşamayız, başka bir konuda nasıl yardım edebilirim?";
}
