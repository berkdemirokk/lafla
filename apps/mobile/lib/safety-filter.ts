export interface SafetyResult {
  ok: boolean;
  reason?: "crisis" | "nsfw" | "violence" | "drugs" | "legal" | "medical" | "financial";
  suggestedResponse_tr?: string;
  shouldEscalate?: boolean;
}

const CRISIS_REGEX = /\b(intihar|olmek\s+istiyorum|kendimi\s+oldurecegim|kendime\s+zarar|canima\s+kiy|kill\s+myself|suicide|end\s+my\s+life|self\s+harm|want\s+to\s+die)\b/i;
const NSFW_REGEX = /\b(sex|seks|porno|porn|ciplak|naked|masturbasyon|masturbation|orgazm|orgasm|sikis|gotten|amcik)\b/i;
const VIOLENCE_REGEX = /\b(bomba|silah|oldurecegim|kill\s+him|kill\s+her|weapon|bomb|saldiri|attack|assassin|vurasim)\b/i;
const DRUGS_REGEX = /\b(kokain|esrar|uyusturucu|cocaine|heroin|marijuana|weed|extasy|extazi|holloway)\b/i;
const MEDICAL_REGEX = /\b(hangi\s+ilaci|basim\s+agriyor|recete|prescription|doctor|doktor|medicine|hastalik|tedavi|diagnosis)\b/i;
const LEGAL_REGEX = /\b(bosanma\s+davasi|avukat|lawyer|sue\s+him|sue\s+her|divorce|mahkeme|hukuk|yasal)\b/i;
const FINANCIAL_REGEX = /\b(hisse\s+senedi|kripto|borsa|invest|stocks|crypto|bitcoin|yatirim\s+tavsiyesi|nereye\s+yatirayim)\b/i;

const CRISIS_BYPASSES = ["intihar", "olmekistiyorum", "kendimioldurecegim", "kendimezarar", "canimakiy", "killmyself", "suicide", "endmylife", "selfharm", "wanttodie"];
const NSFW_BYPASSES = ["sex", "seks", "porno", "porn", "ciplak", "naked", "masturbasyon", "masturbation", "orgazm", "orgasm", "sikis", "gotten", "amcik"];

export const BLOCKED_KEYWORD_COUNT = {
  crisis: 10,
  nsfw: 13,
  violence: 11,
  drugs: 10,
  legal: 9,
  medical: 10,
  financial: 9,
  total: 72,
};

function normalizeText(text: string): string {
  if (!text) return "";
  
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
  normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  normalized = normalized.replace(/[\u200B-\u200D\uFEFF]/g, "");
  normalized = normalized.replace(/[*_~`#|]/g, "");
  normalized = normalized.replace(/\s+/g, " ").trim();

  return normalized;
}

export function checkUserInput(text: string, locale?: string): SafetyResult {
  const clean = normalizeText(text);
  const stripped = clean.replace(/[^a-z0-9]/g, "");

  // Exclude roleplay contexts
  const isRoleplay = clean.includes("roleplay") || 
                     clean.includes("scenario") || 
                     clean.includes("practice") || 
                     clean.includes("interview") || 
                     clean.includes("is gorusmesi") || 
                     clean.includes("rol yap");

  // Exclude garden weeding / panic attack contexts
  const isGardenWeed = clean.includes("weed the garden") || 
                       clean.includes("weeding") || 
                       clean.includes("weed in the garden") || 
                       clean.includes("garden weed") ||
                       clean.includes("weed my garden");

  const isPanicAttack = clean.includes("panic attack") || 
                        clean.includes("heart attack") ||
                        clean.includes("asthma attack");

  // 1) Crisis Check
  const hasCrisisBypass = CRISIS_BYPASSES.some((cb) => stripped.includes(cb));
  if (CRISIS_REGEX.test(clean) || hasCrisisBypass) {
    return {
      ok: false,
      reason: "crisis",
      suggestedResponse_tr:
        "Yanındayım. Lütfen yalnız olmadığını unutma. Yardım almak için 112 Acil Çağrı Merkezi'ni veya AMATEM (444 0 776) danışma hattını arayabilirsin.",
      shouldEscalate: true,
    };
  }

  // 2) NSFW Check (strip safe words from stripped text before checks to avoid whitelist bypass vulnerability)
  const strippedForNsfw = stripped
    .replace(/sussex/g, "")
    .replace(/essex/g, "")
    .replace(/unisex/g, "");

  const hasNsfwBypass = NSFW_BYPASSES.some((nb) => strippedForNsfw.includes(nb));
  const isNsfwWholeWordMatch = NSFW_REGEX.test(clean) && !/\b(sussex|essex|unisex)\b/i.test(clean);

  if (isNsfwWholeWordMatch || hasNsfwBypass) {
    return {
      ok: false,
      reason: "nsfw",
      suggestedResponse_tr:
        "Lafla, İngilizce öğrenme ve pratik yapma amacıyla tasarlanmıştır. Lütfen sohbetimizi bu çerçevede tutalım.",
    };
  }

  // 3) Violence Check (allows panic/heart attacks if no other violence keywords exist)
  if (VIOLENCE_REGEX.test(clean)) {
    const isOnlyPanicAttack = clean.includes("attack") && isPanicAttack && !/\b(bomba|silah|oldurecegim|kill\s+him|kill\s+her|weapon|bomb|saldiri|assassin|vurasim)\b/i.test(clean);
    if (!isOnlyPanicAttack) {
      return {
        ok: false,
        reason: "violence",
        suggestedResponse_tr:
          "Güvenli bir ortam sağlamak amacıyla şiddet veya silah içeren konuları konuşmuyoruz. İngilizce pratiğimize başka bir konuyla devam edelim.",
      };
    }
  }

  // 4) Drugs Check (allows garden weeding if no other drug keywords exist)
  if (DRUGS_REGEX.test(clean)) {
    const isOnlyGardenWeed = clean.includes("weed") && isGardenWeed && !/\b(kokain|esrar|uyusturucu|cocaine|heroin|marijuana|extasy|extazi|holloway)\b/i.test(clean);
    if (!isOnlyGardenWeed) {
      return {
        ok: false,
        reason: "drugs",
        suggestedResponse_tr:
          "Sağlık ve güvenlik nedeniyle yasa dışı maddelerle ilgili konuşmuyoruz. Başka bir pratik konusu seçmek ister misin?",
      };
    }
  }

  // 5) Legal Check
  if (LEGAL_REGEX.test(clean)) {
    const isOnlyLawyerRoleplay = isRoleplay && !/\b(bosanma\s+davasi|sue\s+him|sue\s+her|divorce|mahkeme|hukuk|yasal)\b/i.test(clean);
    if (!isOnlyLawyerRoleplay) {
      return {
        ok: false,
        reason: "legal",
        suggestedResponse_tr:
          "Hukuki konularda profesyonel bir avukata danışmanı öneririm. İngilizce pratiği için istersen bir iş yazışması senaryosu çalışabiliriz.",
      };
    }
  }

  // 6) Medical Check
  if (MEDICAL_REGEX.test(clean)) {
    const isOnlyDoctorRoleplay = isRoleplay && !/\b(hangi\s+ilaci|basim\s+agriyor|recete|prescription|medicine|hastalik|tedavi|diagnosis)\b/i.test(clean);
    if (!isOnlyDoctorRoleplay) {
      return {
        ok: false,
        reason: "medical",
        suggestedResponse_tr:
          "Sağlık durumunla ilgili bir hekime danışmanı öneririm. İngilizce konuşma pratiği yapmak istersen bir doktor randevusu senaryosu canlandırabiliriz.",
      };
    }
  }

  // 7) Financial Check
  if (FINANCIAL_REGEX.test(clean)) {
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
  return checkUserInput(text);
}

export function isCrisisSignal(text: string): boolean {
  const clean = normalizeText(text);
  const stripped = clean.replace(/[^a-z0-9]/g, "");
  return CRISIS_REGEX.test(clean) || CRISIS_BYPASSES.some((cb) => stripped.includes(cb));
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
