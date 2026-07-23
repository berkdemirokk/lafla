export type SafetyReason =
  | "crisis"
  | "nsfw"
  | "violence"
  | "drugs"
  | "legal"
  | "medical"
  | "financial";

export interface SafetyResult {
  ok: boolean;
  reason?: SafetyReason;
  suggestedResponse_tr?: string;
  shouldEscalate?: boolean;
}

const CRISIS_PATTERNS = [
  /\bintihar\b/i,
  /\bolmek\s+istiyorum\b/i,
  /\bkendimi\s+oldurecegim\b/i,
  /\bkendime\s+zarar\b/i,
  /\bcanima\s+kiy/i,
  /\bkill\s+myself\b/i,
  /\bsuicide\b/i,
  /\bend\s+my\s+life\b/i,
  /\bself\s+harm\b/i,
  /\bwant\s+to\s+die\b/i,
];

const NSFW_PATTERNS = [
  /\bsex\b/i,
  /\bseks\b/i,
  /\bporno\b/i,
  /\bporn\b/i,
  /\bciplak\b/i,
  /\bnaked\b/i,
  /\bmasturbasyon\b/i,
  /\bmasturbation\b/i,
  /\borgazm\b/i,
  /\borgasm\b/i,
  /\bsikis\b/i,
  /\bgotten\b/i,
  /\bamcik\b/i,
];

const VIOLENCE_PATTERNS = [
  /\bbomba\b/i,
  /\bsilah\b/i,
  /\boldurecegim\b/i,
  /\bkill\s+(?:him|her)\b/i,
  /\bweapon\b/i,
  /\bbomb\b/i,
  /\bsaldiri\b/i,
  /\battack(?:s|ed|ing)?\b/i,
  /\bassassin\b/i,
  /\bvurasim\b/i,
];

const DRUG_PATTERNS = [
  /\bkokain\b/i,
  /\besrar\b/i,
  /\buyusturucu\b/i,
  /\bcocaine\b/i,
  /\bheroin\b/i,
  /\bmarijuana\b/i,
  /\bweed(?:s|ing|ed)?\b/i,
  /\bextasy\b/i,
  /\bextazi\b/i,
];

const LEGAL_PATTERNS = [
  /\bbosanma\s+davasi\b/i,
  /\bavukat\b/i,
  /\blawyer\b/i,
  /\bsue\s+(?:him|her)\b/i,
  /\bdivorce\b/i,
  /\bmahkeme\b/i,
  /\bhukuk\b/i,
  /\byasal\b/i,
];

const MEDICAL_PATTERNS = [
  /\bhangi\s+ilaci\b/i,
  /\bbasim\s+agriyor\b/i,
  /\brecete\b/i,
  /\bprescription\b/i,
  /\bdoctor\b/i,
  /\bdoktor\b/i,
  /\bmedicine\b/i,
  /\bhastalik\b/i,
  /\btedavi\b/i,
  /\bdiagnosis\b/i,
];

const FINANCIAL_PATTERNS = [
  /\bhisse\s+senedi\b/i,
  /\bkripto\b/i,
  /\bborsa\b/i,
  /\binvest(?:ment|ing)?\b/i,
  /\bstocks?\b/i,
  /\bcrypto\b/i,
  /\bbitcoin\b/i,
  /\byatirim\s+tavsiyesi\b/i,
  /\bnereye\s+yatirayim\b/i,
];

const CRISIS_OBFUSCATED_TERMS = [
  "intihar",
  "olmekistiyorum",
  "kendimioldurecegim",
  "kendimezarar",
  "canimakiy",
  "killmyself",
  "suicide",
  "endmylife",
  "selfharm",
  "wanttodie",
];

const NSFW_OBFUSCATED_TERMS = [
  "sex",
  "seks",
  "porno",
  "porn",
  "ciplak",
  "naked",
  "masturbasyon",
  "masturbation",
  "orgazm",
  "orgasm",
  "sikis",
  "gotten",
  "amcik",
];

const ROLEPLAY_CONTEXT =
  /\b(roleplay|scenario|practice|interview|is\s+gorusmesi|rol\s+yap)\b/i;
const LEGAL_ADVICE_CONTEXT =
  /\b(bosanma\s+davasi|sue\s+(?:him|her)|divorce|mahkeme|hukuk|yasal)\b/i;
const MEDICAL_ADVICE_CONTEXT =
  /\b(hangi\s+ilaci|basim\s+agriyor|recete|prescription|medicine|hastalik|tedavi|diagnosis)\b/i;

const WEED_TERM = /\bweed(?:s|ing|ed)?\b/i;
const ATTACK_TERM = /\battack(?:s|ed|ing)?\b/i;
const SAFE_WEED_PATTERNS = [
  /\bweeding\b/gi,
  /\bweed(?:s|ed)?\s+out\b/gi,
  /\bweed(?:s|ing|ed)?\s+(?:killer|control)\b/gi,
  /\b(?:pull(?:ing|ed)?|control(?:ling|led)?)\s+(?:the\s+)?weed(?:s)?\b/gi,
  /\bweed(?:s|ing|ed)?\s+(?:(?:in|from|around|near|between)\s+)?(?:the\s+)?(?:garden|yard|lawn|flower(?:s|\s+bed)?|soil|plant(?:s|ing|ed)?)\b/gi,
  /\b(?:garden|yard|lawn|flower(?:s|\s+bed)?|soil|plant(?:s|ing|ed)?)\s+weed(?:s|ing|ed)?\b/gi,
];
const SAFE_ATTACK_PATTERNS = [
  /\b(?:panic|anxiety|heart|asthma|cyber)[\s-]+attacks?\b/gi,
  /\battacks?\s+of\s+(?:panic|anxiety)\b/gi,
];
const OTHER_VIOLENCE_CONTEXT =
  /\b(bomba|silah|oldurecegim|kill\s+(?:him|her)|weapon|bomb|saldiri|assassin|vurasim)\b/i;
const OTHER_DRUG_CONTEXT =
  /\b(kokain|esrar|uyusturucu|cocaine|heroin|marijuana|extasy|extazi)\b/i;
const WEED_DRUG_INTENT =
  /\b(?:buy|purchase|score)\s+(?:some\s+)?weed\b(?!\s+(?:killer|control))|\b(?:smoke|smoking|dealer|joint|dispensary|edible|cannabis)\b/i;

export const BLOCKED_KEYWORD_COUNT = {
  crisis: CRISIS_PATTERNS.length,
  nsfw: NSFW_PATTERNS.length,
  violence: VIOLENCE_PATTERNS.length,
  drugs: DRUG_PATTERNS.length,
  legal: LEGAL_PATTERNS.length,
  medical: MEDICAL_PATTERNS.length,
  financial: FINANCIAL_PATTERNS.length,
  total:
    CRISIS_PATTERNS.length +
    NSFW_PATTERNS.length +
    VIOLENCE_PATTERNS.length +
    DRUG_PATTERNS.length +
    LEGAL_PATTERNS.length +
    MEDICAL_PATTERNS.length +
    FINANCIAL_PATTERNS.length,
};

function normalizeText(text: string): string {
  return text
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
    .replace(/ü/g, "u")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesAny(text: string, patterns: RegExp[]): boolean {
  return patterns.some((pattern) => pattern.test(text));
}

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesObfuscatedTerm(text: string, term: string): boolean {
  const compact = normalizeText(term).replace(/[^a-z0-9]/g, "");
  const separated = compact
    .split("")
    .map(escapeRegex)
    .join("[^a-z0-9]*");
  return new RegExp(`(?:^|[^a-z0-9])${separated}(?:$|[^a-z0-9])`, "i").test(
    text,
  );
}

function matchesObfuscated(text: string, terms: string[]): boolean {
  return terms.some((term) => matchesObfuscatedTerm(text, term));
}

function stripSafePatterns(text: string, patterns: RegExp[]): string {
  return patterns.reduce(
    (remaining, pattern) => remaining.replace(pattern, " "),
    text,
  );
}

function blocked(
  reason: SafetyReason,
  suggestedResponse_tr: string,
  shouldEscalate = false,
): SafetyResult {
  return { ok: false, reason, suggestedResponse_tr, shouldEscalate };
}

export function checkUserInput(
  text: string,
  _locale?: string,
): SafetyResult {
  const clean = normalizeText(text);

  if (
    matchesAny(clean, CRISIS_PATTERNS) ||
    matchesObfuscated(clean, CRISIS_OBFUSCATED_TERMS)
  ) {
    return blocked(
      "crisis",
      "Yanındayım. Lütfen yalnız olmadığını unutma. Yardım almak için 112 Acil Çağrı Merkezi'ni veya AMATEM (444 0 776) danışma hattını arayabilirsin.",
      true,
    );
  }

  if (
    matchesAny(clean, NSFW_PATTERNS) ||
    matchesObfuscated(clean, NSFW_OBFUSCATED_TERMS)
  ) {
    return blocked(
      "nsfw",
      "Lafla, İngilizce öğrenme ve pratik yapma amacıyla tasarlanmıştır. Lütfen sohbetimizi bu çerçevede tutalım.",
    );
  }

  if (matchesAny(clean, VIOLENCE_PATTERNS)) {
    const remaining = stripSafePatterns(clean, SAFE_ATTACK_PATTERNS);
    if (
      ATTACK_TERM.test(remaining) ||
      OTHER_VIOLENCE_CONTEXT.test(remaining)
    ) {
      return blocked(
        "violence",
        "Güvenli bir ortam sağlamak amacıyla şiddet veya silah içeren konuları konuşmuyoruz. İngilizce pratiğimize başka bir konuyla devam edelim.",
      );
    }
  }

  if (matchesAny(clean, DRUG_PATTERNS)) {
    const remaining = stripSafePatterns(clean, SAFE_WEED_PATTERNS);
    if (
      WEED_TERM.test(remaining) ||
      OTHER_DRUG_CONTEXT.test(remaining) ||
      WEED_DRUG_INTENT.test(clean)
    ) {
      return blocked(
        "drugs",
        "Sağlık ve güvenlik nedeniyle yasa dışı maddelerle ilgili konuşmuyoruz. Başka bir pratik konusu seçmek ister misin?",
      );
    }
  }

  if (matchesAny(clean, LEGAL_PATTERNS)) {
    const onlyRoleplayTarget =
      ROLEPLAY_CONTEXT.test(clean) && !LEGAL_ADVICE_CONTEXT.test(clean);
    if (!onlyRoleplayTarget) {
      return blocked(
        "legal",
        "Hukuki konularda profesyonel bir avukata danışmanı öneririm. İngilizce pratiği için istersen bir iş yazışması senaryosu çalışabiliriz.",
      );
    }
  }

  if (matchesAny(clean, MEDICAL_PATTERNS)) {
    const onlyRoleplayTarget =
      ROLEPLAY_CONTEXT.test(clean) && !MEDICAL_ADVICE_CONTEXT.test(clean);
    if (!onlyRoleplayTarget) {
      return blocked(
        "medical",
        "Sağlık durumunla ilgili bir hekime danışmanı öneririm. İngilizce konuşma pratiği yapmak istersen bir doktor randevusu senaryosu canlandırabiliriz.",
      );
    }
  }

  if (matchesAny(clean, FINANCIAL_PATTERNS)) {
    return blocked(
      "financial",
      "Yatırım ve finansal konularda bir uzmandan tavsiye almalısın. İngilizce pratik yapmak için istersen iş görüşmesi senaryosu çalışabiliriz.",
    );
  }

  return { ok: true };
}

export function checkMayaOutput(text: string): SafetyResult {
  return checkUserInput(text);
}

export function isCrisisSignal(text: string): boolean {
  const clean = normalizeText(text);
  return (
    matchesAny(clean, CRISIS_PATTERNS) ||
    matchesObfuscated(clean, CRISIS_OBFUSCATED_TERMS)
  );
}

export function getCrisisResources() {
  return {
    title: "Yanındayım",
    message:
      "Kendine zarar verme düşünceleri yaşıyorsan veya zor bir durumdaysan, lütfen yalnız olmadığını bil. Aşağıdaki ücretsiz hatlardan destek alabilirsin:",
    lines: [
      { name: "Acil Çağrı Merkezi", number: "112" },
      { name: "AMATEM", number: "4440776" },
      { name: "Mor Çatı", number: "02122925231" },
    ],
  };
}
