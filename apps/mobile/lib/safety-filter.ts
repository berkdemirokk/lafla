export interface SafetyResult {
  ok: boolean;
  reason?: "crisis" | "nsfw" | "violence" | "drugs" | "legal" | "medical" | "financial";
  suggestedResponse_tr?: string;
  shouldEscalate?: boolean;
}

const CRISIS_KEYWORDS = [
  "intihar", "olmek istiyorum", "kendimi öldüreceğim", "kendime zarar", "canima kiy",
  "kill myself", "suicide", "end my life", "self harm", "want to die"
];

const NSFW_KEYWORDS = [
  "porno", "sex", "seks", "ciplak", "naked", "porn", "amcik", "gotten", "sikis",
  "masturbasyon", "masturbation", "orgazm", "orgasm"
];

const VIOLENCE_KEYWORDS = [
  "bomba", "silah", "oldurecegim", "kill him", "kill her", "weapon", "bomb",
  "saldiri", "attack", "assassin", "vurasim"
];

const DRUGS_KEYWORDS = [
  "kokain", "esrar", "uyusturucu", "cocaine", "heroin", "marijuana", "weed",
  "extasy", "extazi", "holloway"
];

const LEGAL_KEYWORDS = [
  "bosanma davasi", "avukat", "lawyer", "sue him", "sue her", "divorce",
  "mahkeme", "hukuk", "yasal"
];

const MEDICAL_KEYWORDS = [
  "hangi ilaci", "basim agriyor", "recete", "prescription", "doctor", "doktor",
  "medicine", "hastalik", "tedavi", "diagnosis"
];

const FINANCIAL_KEYWORDS = [
  "hisse senedi", "kripto", "borsa", "invest", "stocks", "crypto", "bitcoin",
  "yatirim tavsiyesi", "nereye yatirayim"
];

export const BLOCKED_KEYWORD_COUNT = {
  crisis: CRISIS_KEYWORDS.length,
  nsfw: NSFW_KEYWORDS.length,
  violence: VIOLENCE_KEYWORDS.length,
  drugs: DRUGS_KEYWORDS.length,
  legal: LEGAL_KEYWORDS.length,
  medical: MEDICAL_KEYWORDS.length,
  financial: FINANCIAL_KEYWORDS.length,
  total:
    CRISIS_KEYWORDS.length +
    NSFW_KEYWORDS.length +
    VIOLENCE_KEYWORDS.length +
    DRUGS_KEYWORDS.length +
    LEGAL_KEYWORDS.length +
    MEDICAL_KEYWORDS.length +
    FINANCIAL_KEYWORDS.length,
};

function normalizeText(text: string): string {
  if (!text) return "";
  
  // Pre-fold capital Turkish diacritics to ASCII/lowercase directly to prevent combining char issues
  let normalized = text
    .replace(/İ/g, "i")
    .replace(/ı/g, "i")
    .replace(/Ş/g, "s")
    .replace(/ş/g, "s")
    .replace(/Ç/g, "c")
    .replace(/ç/g, "c")
    .replace(/Ğ/g, "g")
    .replace(/ğ/g, "g")
    .replace(/Ö/g, "o")
    .replace(/ö/g, "o")
    .replace(/Ü/g, "u")
    .replace(/ü/g, "u");

  normalized = normalized.toLowerCase();

  // Normalize Unicode to strip combining marks
  normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Remove zero-width characters and common decorative punctuation used to bypass filters
  normalized = normalized.replace(/[\u200B-\u200D\uFEFF]/g, "");
  normalized = normalized.replace(/[*_~`#|]/g, "");

  // Collapse whitespace
  normalized = normalized.replace(/\s+/g, " ").trim();

  return normalized;
}

export function checkUserInput(text: string, locale?: string): SafetyResult {
  const clean = normalizeText(text);

  if (CRISIS_KEYWORDS.some((kw) => clean.includes(kw))) {
    return {
      ok: false,
      reason: "crisis",
      suggestedResponse_tr:
        "Yanındayım. Lütfen yalnız olmadığını unutma. Yardım almak için 112 Acil Çağrı Merkezi'ni veya AMATEM (444 0 776) danışma hattını arayabilirsin.",
      shouldEscalate: true,
    };
  }

  if (NSFW_KEYWORDS.some((kw) => clean.includes(kw))) {
    return {
      ok: false,
      reason: "nsfw",
      suggestedResponse_tr:
        "Lafla, İngilizce öğrenme ve pratik yapma amacıyla tasarlanmıştır. Lütfen sohbetimizi bu çerçevede tutalım.",
    };
  }

  if (VIOLENCE_KEYWORDS.some((kw) => clean.includes(kw))) {
    return {
      ok: false,
      reason: "violence",
      suggestedResponse_tr:
        "Güvenli bir ortam sağlamak amacıyla şiddet veya silah içeren konuları konuşmuyoruz. İngilizce pratiğimize başka bir konuyla devam edelim.",
    };
  }

  if (DRUGS_KEYWORDS.some((kw) => clean.includes(kw))) {
    return {
      ok: false,
      reason: "drugs",
      suggestedResponse_tr:
        "Sağlık ve güvenlik nedeniyle yasa dışı maddelerle ilgili konuşmuyoruz. Başka bir pratik konusu seçmek ister misin?",
    };
  }

  if (LEGAL_KEYWORDS.some((kw) => clean.includes(kw))) {
    return {
      ok: false,
      reason: "legal",
      suggestedResponse_tr:
        "Hukuki konularda profesyonel bir avukata danışmanı öneririm. İngilizce pratiği için istersen bir iş yazışması senaryosu çalışabiliriz.",
    };
  }

  if (MEDICAL_KEYWORDS.some((kw) => clean.includes(kw))) {
    return {
      ok: false,
      reason: "medical",
      suggestedResponse_tr:
        "Sağlık durumunla ilgili bir hekime danışmanı öneririm. İngilizce konuşma pratiği yapmak istersen bir doktor randevusu senaryosu canlandırabiliriz.",
    };
  }

  if (FINANCIAL_KEYWORDS.some((kw) => clean.includes(kw))) {
    return {
      ok: false,
      reason: "financial",
      suggestedResponse_tr:
        "Yatırım ve finansal konularda bir uzmandan tavsiye almalısın. İngilizce pratik yapmak için istersen iş görüşmesi senaryosu çalışabiliriz.",
    };
  }

  return { ok: true };
}

export function checkMayaOutput(text: string): SafetyResult {
  // Post-check is the same logic as pre-check but run on LLM output
  return checkUserInput(text);
}

export function isCrisisSignal(text: string): boolean {
  const clean = normalizeText(text);
  return CRISIS_KEYWORDS.some((kw) => clean.includes(kw));
}

export function getCrisisResources() {
  return {
    title: "Yanındayım",
    message:
      "Kendine zarar verme düşünceleri yaşıyorsan veya zor bir durumdaysan, lütfen yalnız olmadığını bil. Aşağıdaki ücretsiz hatlardan destek alabilirsin:",
    lines: [
      { name: "Acil Çağrı Merkezi", number: "112" },
      { name: "AMATEM (Alkol ve Madde Tedavi)", number: "4440776" },
      { name: "Mor Çatı Kadın Sığınağı", number: "02122925231" },
    ],
  };
}
