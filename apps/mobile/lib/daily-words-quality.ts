// Lafla — quality rules for lesson-derived "Today's 10 Words" entries.
//
// Lesson vocab tiles were authored as chat-style phrases, not a word list, so
// the raw pool contains sentence fragments ("share of"), mixed casing and
// translations with notes in parentheses. These pure helpers normalise or
// drop such entries. data/daily-words-extra.ts is curated and bypasses them.

export const MAX_TRANSLATION_LENGTH = 40;

const PROPER_NOUNS = new Set(
  (
    "monday tuesday wednesday thursday friday saturday sunday " +
    "january february march april may june july august september october november december " +
    "turkish turkey english british american irish french german spanish italian greek " +
    "mediterranean uber venmo zelle facetime montreal erasmus instagram google " +
    "europe asia america london paris istanbul ankara"
  ).split(" "),
);

/** Lowercase the first letter unless the entry is a proper noun, acronym or "I". */
export function normalizeEnglishCase(word: string): string {
  const first = word.split(/\s+/)[0] ?? "";
  if (!/^[A-Z]/.test(first)) return word;
  if (first === "I" || first.startsWith("I'") || first.startsWith("I’")) return word;
  const letters = first.replace(/[^A-Za-z0-9]/g, "");
  if (letters.length >= 2 && letters === letters.toUpperCase()) return word; // ATM, Q3, TL;DR
  if (/[A-Z]/.test(first.slice(1))) return word; // FaceTime, Wi-Fi, DMs
  const bare = first.toLowerCase().replace(/['’]s$/, "").replace(/[^a-z]/g, "");
  if (PROPER_NOUNS.has(bare)) return word;
  return word.charAt(0).toLowerCase() + word.slice(1);
}

/** Clean a Turkish gloss for a word list; null when it is unusable. */
export function cleanTranslation(raw: string): string | null {
  let s = raw.replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
  s = s.replace(/\baciklama\b/g, "açıklama").replace(/\bAciklama\b/g, "Açıklama");
  if (s.includes("/")) {
    s = s
      .split("/")
      .map((p) => p.trim())
      .filter(Boolean)
      .slice(0, 2)
      .join(", ");
  }
  s = s.replace(/[\s.,;:!?…\-–—]+$/u, "").replace(/^[\s,;:\-–—]+/u, "").trim();
  if (s.length < 1 || s.length > MAX_TRANSLATION_LENGTH) return null;
  if (/[()]/.test(s)) return null;
  if (/_{2,}|\.{2,}|…/.test(s)) return null; // "___ ile", "..." placeholders
  return s;
}

const PREPOSITIONS = new Set(
  "of in for with to at on from about by into onto upon over under through toward towards".split(" "),
);
const PARTICLES = new Set("up out off down away back around along across ahead apart aside together".split(" "));
const DANGLING = new Set(
  "is are am was were the a an and or but if than as which your my our their his her its these those".split(" "),
);

// Verbs whose "verb + preposition/particle" form is a genuine phrasal /
// prepositional verb ("look into", "wait for", "give up"). Anything else ending
// in a bare preposition is treated as an incomplete noun phrase ("share of").
const VERBS = new Set(
  (
    "look wait ask think care talk speak listen belong depend rely agree apply " +
      "believe focus insist object reply respond refer relate result succeed suffer " +
      "specialize participate contribute consist deal cope comply account amount " +
      "give take get go come put set turn run bring carry keep hold hand pass pick " +
      "make break call check clear cut drop fill find figure follow hang hurry let " +
      "log move open pay point pull push reach sign show shut sort stand stay step " +
      "stick switch throw tidy try wake wash watch wear work wrap write back catch " +
      "cheer cool count end fall fit grow hear join knock lay lead leave line lock " +
      "mix mess miss opt pack phase pile plug print rule save see sell send settle " +
      "shake sit slow speed split stop sum tear tell tie top touch track trade wind " +
      "wipe zoom walk rush roll rip rest ramp drive jump hit dig dive " +
      "chip chime bounce blow bear bail add brush build burn buy chase " +
      "dress eat drag draw fight head lift pop pitch skip slip sleep stock " +
      "tune use wander warm weigh sweep sneak snap spell stir " +
      "stem tag reflect rope scale scroll shape sink sound start stumble swing tap " +
      "team tick trip type vote weed " +
      "act aim allow benefit bump celebrate commit concentrate consult convert " +
      "decide differ dream elaborate fail graduate hope invest laugh " +
      "long lose prepare protest provide qualify react recover resort retire " +
      "search stare subscribe thank vary worry apologize arrive complain escape " +
      "interfere lean live plan proceed profit steer tend vouch yearn"
  ).split(" "),
);

const TO_VERBS = new Set(
  "listen talk speak belong refer respond reply react apply agree object contribute lead stick turn point write relate get come go".split(" "),
);
const FIXED_PHRASES = new Set([
  "get rid of",
  "take care of",
  "fall in love with",
  "keep in touch with",
  "stay in touch with",
  "make sense of",
  "take advantage of",
  "be in charge of",
]);

const AUX_START = new Set(
  (
    "should would could can will might must shall may is are was were am " +
      "does did can't won't wouldn't couldn't shouldn't don't doesn't didn't " +
      "isn't aren't wasn't weren't hadn't haven't hasn't mustn't"
  ).split(" "),
);

const CLAUSE_START =
  /^(i['’](?:m|d|ll|ve)|we['’](?:re|ll|ve|d)|you['’](?:re|ll|ve|d)|they['’](?:re|ll|ve|d)|it['’]s|that['’]s|there['’]s|here['’]s|let['’]s|what['’]s|where['’]s|how['’]s|who['’]s|he['’]s|she['’]s)$/i;

function wordTokens(word: string): string[] {
  return word.trim().split(/\s+/).filter(Boolean);
}

export function wordCount(word: string): number {
  return wordTokens(word).length;
}

/** True when an English tile reads as an incomplete phrase or a whole chat sentence. */
export function isFragment(word: string): boolean {
  if (/[/()…]/.test(word)) return true;
  if (/[?!,:;]$/.test(word) || word.includes(",")) return true;
  const toks = wordTokens(word);
  if (toks.length === 0) return true;
  if (toks.length >= 2) {
    const first = toks[0]!.toLowerCase();
    const last = toks[toks.length - 1]!.toLowerCase().replace(/[^a-z']/g, "");
    if (AUX_START.has(first)) return true;
    if (CLAUSE_START.test(toks[0]!)) return true;
    if (DANGLING.has(last)) return true;
    if (toks[0] === "I" && toks.length >= 3) return true; // "I need to ..." is a sentence, not a word
    if (PREPOSITIONS.has(last)) {
      if (!VERBS.has(first)) return true;
      if (toks.length === 2 && last === "to" && !TO_VERBS.has(first)) return true;
      if (toks.length >= 3) {
        // keep only real multi-word verbs: "come up with", "run out of", "look forward to"
        const middleOk = toks.slice(1, -1).every((t) => PARTICLES.has(t.toLowerCase()) || t.toLowerCase() === "forward");
        if (!middleOk && !FIXED_PHRASES.has(word.toLowerCase())) return true;
      }
    }
    if (PARTICLES.has(last) && !VERBS.has(first) && toks.length >= 3) return true;
  }
  return false;
}

const LEADING_FUNCTION_WORDS = new Set(
  "the a an my your his her our their this that these those i you we they he she it any some".split(" "),
);

/** True when the tile starts with an article, pronoun or determiner ("the noise", "I remember"). A lone "I" is allowed. */
export function startsWithFunctionWord(word: string): boolean {
  const toks = wordTokens(word);
  const first = toks[0];
  if (!first) return false;
  if (first === "I") return toks.length >= 2;
  if (first.length >= 2 && first === first.toUpperCase()) return false; // acronym: "IT support"
  return LEADING_FUNCTION_WORDS.has(first.toLowerCase());
}

const COLLOQUIAL = new Set("gonna gotta wanna kinda sorta lemme gimme dunno ya y'all ain't".split(" "));

/** True when any token is a chat contraction ("gotta run", "gonna mingle"). */
export function hasColloquialToken(word: string): boolean {
  return wordTokens(word).some((t) =>
    COLLOQUIAL.has(t.toLowerCase().replace(/’/g, "'").replace(/^[^a-z]+|[^a-z]+$/g, "")),
  );
}

const TR_LETTERS = /[çğıöşüÇĞİÖŞÜ]/;
const TR_FOLD: Record<string, string> = { ç: "c", ğ: "g", ı: "i", ö: "o", ş: "s", ü: "u", İ: "i" };
const MIN_ASCII_TOKEN = 5;
const MIN_ASCII_PREFIX = 6;

function trTokens(text: string): string[] {
  return text.match(/\p{L}+/gu) ?? [];
}

function foldTurkish(token: string): string {
  return token.toLocaleLowerCase("tr").replace(/[çğıöşüİ]/g, (c) => TR_FOLD[c] ?? c);
}

/**
 * Folded forms (ç→c ...) of accented Turkish tokens seen in the corpus. A lesson
 * translation containing one of these without its accents is ASCII-ized Turkish.
 * Forms that also appear genuinely unaccented in the curated (trusted) list are removed.
 */
export function buildAsciiFoldIndex(
  corpusTranslations: Iterable<string>,
  trustedTranslations: Iterable<string>,
): Set<string> {
  const folded = new Set<string>();
  for (const tr of corpusTranslations) {
    for (const tok of trTokens(tr)) {
      if (tok.length >= MIN_ASCII_TOKEN && TR_LETTERS.test(tok)) folded.add(foldTurkish(tok));
    }
  }
  for (const tr of trustedTranslations) {
    for (const tok of trTokens(tr)) {
      if (tok.length >= MIN_ASCII_TOKEN && !TR_LETTERS.test(tok)) folded.delete(tok.toLowerCase());
    }
  }
  return folded;
}

/** True when a translation has an unaccented token whose accented form exists in the corpus (or starts with a long one). */
export function isAsciiTurkish(translation: string, foldIndex: ReadonlySet<string>): boolean {
  return trTokens(translation).some((raw) => {
    if (raw.length < MIN_ASCII_TOKEN || TR_LETTERS.test(raw)) return false;
    const tok = raw.toLowerCase();
    if (foldIndex.has(tok)) return true;
    for (let k = MIN_ASCII_PREFIX; k < tok.length; k += 1) {
      if (foldIndex.has(tok.slice(0, k))) return true;
    }
    return false;
  });
}

/**
 * A multi-word Turkish gloss of 12+ letters with none of ç ğ ı ö ş ü is far
 * more often an ASCII-typed gloss ("cift terapisi", "uzun donemli") than
 * genuinely accent-free Turkish. The fold index misses these when the correct
 * spelling never occurs in the corpus; dropping them costs a few legitimate
 * entries ("banka havalesi") from a large pool.
 */
export function looksAccentless(translation: string): boolean {
  if (TR_LETTERS.test(translation)) return false;
  const letters = translation.replace(/[^a-zA-Z]/g, "").length;
  return letters >= 12 && translation.trim().split(/\s+/).length >= 2;
}

/** Full filter + normaliser for one lesson tile; null when the entry should be dropped. */
export function cleanLessonEntry(
  word: string,
  translation: string,
  asciiFoldIndex?: ReadonlySet<string>,
): { word: string; translation: string } | null {
  if (isFragment(word)) return null;
  if (startsWithFunctionWord(word) || hasColloquialToken(word)) return null;
  const tr = cleanTranslation(translation);
  if (!tr) return null;
  if (asciiFoldIndex && isAsciiTurkish(tr, asciiFoldIndex)) return null;
  if (asciiFoldIndex && looksAccentless(tr)) return null;
  return { word: normalizeEnglishCase(word), translation: tr };
}
