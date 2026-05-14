// Lafla — Mistake patterns for Turkish-speaker English learners.
//
// Rule-based detector. NO LLM. Runs locally on every user utterance
// (free-chat, scenario, lesson translate inputs). Output feeds the
// mistake-tracker, which persists weaknesses and seeds auto-drills.
//
// Why rule-based:
// - Latency: detector must run on every keystroke-batch / message-send
//   without blocking. Regex over a string is ~microseconds.
// - Offline: works without network.
// - Determinism: the same input always flags the same patterns, so we
//   can teach the user "this is the rule you keep breaking" rather than
//   handwaving an LLM probability.
//
// Pattern coverage focuses on errors Turkish natives make at A2-B2:
// - Tense/aspect collisions (Turkish present continuous ≈ English present)
// - Article omission (Turkish has no a/an/the system)
// - Preposition drift (Turkish uses postpositional cases instead)
// - Word-order leaks from Turkish SOV
// - Calques ("make a photo" from "fotoğraf çekmek/yapmak")
// - False cognates / "informations" countability errors

export type MistakeCategory =
  | "tense"
  | "article"
  | "preposition"
  | "word-order"
  | "phrasal-verb"
  | "pronunciation"
  | "register"
  | "false-friend"
  | "subject-verb"
  | "missing-aux"
  | "false-cognate";

export interface MistakePattern {
  id: string;
  category: MistakeCategory;
  /** Regex (case-insensitive) or a custom predicate against the lowercased text. */
  detector: RegExp | ((text: string) => boolean);
  /** Short Turkish description shown in the drill / weakness list. */
  description_tr: string;
  example_wrong: string;
  example_right: string;
  /** Why this trips Turkish natives, in Turkish. */
  reason_tr: string;
  /** Severity 1 (cosmetic) to 5 (comprehension-breaking). Drives drill priority. */
  weight: number;
}

// ---------------------------------------------------------------------------
// Pattern bank.
// Ordered loosely by frequency we observe in user traffic. Detector regexes
// use word boundaries to avoid catching substrings inside unrelated words.
// All regexes are intentionally case-insensitive (`i` flag).
// ---------------------------------------------------------------------------

export const MISTAKE_PATTERNS: readonly MistakePattern[] = [
  // ----- TENSE -----
  {
    id: "since-years-without-perfect",
    category: "tense",
    detector: /\bsince\s+\d+\s+(year|month|week|day)s?\b/i,
    description_tr: "'since' + süre (yanlış)",
    example_wrong: "I live here since 5 years.",
    example_right: "I have lived here for 5 years.",
    reason_tr:
      "Türkçede 'beş yıldır' tek kalıp; İngilizce'de süre için 'for', başlangıç noktası için 'since' + present perfect.",
    weight: 4,
  },
  {
    id: "am-doing-since",
    category: "tense",
    detector: /\b(i\s*am|i'?m)\s+\w+ing\s+(since|for)\b/i,
    description_tr: "'I am working since/for' — present perfect continuous gerek",
    example_wrong: "I am working since morning.",
    example_right: "I have been working since morning.",
    reason_tr:
      "Süregelen + hâlâ devam eden eylem için 'have been + -ing'. 'I am -ing' sadece şu an.",
    weight: 4,
  },
  {
    id: "i-am-born",
    category: "tense",
    detector: /\bi\s*('?m|am)\s+born\b/i,
    description_tr: "'I am born' (yanlış)",
    example_wrong: "I am born in Istanbul.",
    example_right: "I was born in Istanbul.",
    reason_tr:
      "Doğmak bir kerelik geçmiş olay → 'was born'. Türkçe 'doğdum' geniş zamanı çağrıştırır ama İngilizce'de past simple.",
    weight: 5,
  },
  {
    id: "yesterday-present",
    category: "tense",
    detector: /\b(yesterday|last\s+(week|month|year|night))\s+i\s+(go|come|see|do|eat|have|make|take)\b/i,
    description_tr: "Geçmiş zaman göstergesi + present (yanlış)",
    example_wrong: "Yesterday I go to the cinema.",
    example_right: "Yesterday I went to the cinema.",
    reason_tr:
      "'Yesterday', 'last week' gibi zaman zarfları past simple gerektirir.",
    weight: 5,
  },
  {
    id: "did-plus-past",
    category: "tense",
    detector: /\bdid\s+(?:you|he|she|they|we|i)?\s*\w+ed\b/i,
    description_tr: "'did' + past tense (çift geçmiş)",
    example_wrong: "Did you went there?",
    example_right: "Did you go there?",
    reason_tr:
      "'did' soruda zaten geçmiş bilgisini taşır → fiil bare/V1 kalır.",
    weight: 4,
  },
  {
    id: "will-going-to",
    category: "tense",
    detector: /\bwill\s+going\s+to\b/i,
    description_tr: "'will going to' (çakışma)",
    example_wrong: "I will going to call you.",
    example_right: "I am going to call you. / I will call you.",
    reason_tr:
      "'will' ile 'going to' aynı cümlede olmaz — iki ayrı gelecek kalıbıdır.",
    weight: 3,
  },

  // ----- ARTICLE -----
  {
    id: "the-everything",
    category: "article",
    detector: /\bthe\s+(everything|everyone|everybody|something|nothing|nobody|anyone|anybody)\b/i,
    description_tr: "'the everything' (yanlış)",
    example_wrong: "The everything is fine.",
    example_right: "Everything is fine.",
    reason_tr:
      "Belirsiz zamirler (everything, someone…) artikel almaz.",
    weight: 3,
  },
  {
    id: "the-people-generic",
    category: "article",
    detector: /\bthe\s+(people|turks|americans|english|society|life|love|music|food)\s+(is|are|like|love|hate|prefer|enjoy)\b/i,
    description_tr: "Genel ifadede gereksiz 'the'",
    example_wrong: "The people are friendly.",
    example_right: "People are friendly.",
    reason_tr:
      "Genel/sınıfsal anlamda (insanlar genel olarak) 'the' kullanılmaz. Türkçedeki belirtili nesne mantığı buraya transfer olmaz.",
    weight: 3,
  },
  {
    id: "missing-article-singular",
    category: "article",
    detector: /\bi\s+(have|got|need|want|saw|bought)\s+(car|book|cat|dog|house|phone|computer|coffee|tea|cup|table|problem|question|idea|friend|sister|brother)\b/i,
    description_tr: "Tekil sayılabilir isim, 'a/an' eksik",
    example_wrong: "I have car.",
    example_right: "I have a car.",
    reason_tr:
      "Tekil sayılabilir isim çıplak gelmez — 'a' veya 'an'. Türkçede bu işaret yok.",
    weight: 4,
  },
  {
    id: "a-information",
    category: "article",
    detector: /\b(a|an|one|two|three|four|five|six|seven|eight|nine|ten|many|few|several)\s+(information|advice|news|furniture|equipment|luggage|baggage|homework|software|hardware|music|traffic|weather|knowledge)s?\b/i,
    description_tr: "Sayılamayanı sayma (information, advice…)",
    example_wrong: "I need an information.",
    example_right: "I need some information. / a piece of information.",
    reason_tr:
      "Bu kelimeler İngilizce'de sayılamaz (uncountable). 'an information' yok; 'some' veya 'a piece of'.",
    weight: 4,
  },
  {
    id: "uncountable-plural",
    category: "article",
    detector: /\b(informations|advices|researches|equipments|furnitures|luggages|baggages|homeworks|softwares|musics|knowledges|news\s+are)\b/i,
    description_tr: "Çoğul olamayan kelimeyi çoğullama",
    example_wrong: "I read many informations.",
    example_right: "I read a lot of information.",
    reason_tr:
      "Uncountable nounlar -s almaz. 'information', 'advice', 'research' her zaman tekil görünür.",
    weight: 4,
  },

  // ----- PREPOSITION -----
  {
    id: "in-monday-morning",
    category: "preposition",
    detector: /\bin\s+the\s+(morning|afternoon|evening|night)\s+of\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
    description_tr: "'in the morning of Monday' (yanlış)",
    example_wrong: "In the morning of Monday I went out.",
    example_right: "On Monday morning I went out.",
    reason_tr:
      "Gün + günün bölümü = 'on [day] morning/afternoon/evening'.",
    weight: 3,
  },
  {
    id: "in-weekday",
    category: "preposition",
    detector: /\bin\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i,
    description_tr: "'in Monday' yerine 'on Monday'",
    example_wrong: "I'll see you in Monday.",
    example_right: "I'll see you on Monday.",
    reason_tr:
      "Belirli günler 'on' alır. 'in' aylar/yıllar/uzun dönemler için.",
    weight: 3,
  },
  {
    id: "on-month-year",
    category: "preposition",
    detector: /\bon\s+(january|february|march|april|may|june|july|august|september|october|november|december|\d{4})\b/i,
    description_tr: "'on January / on 2024' yerine 'in'",
    example_wrong: "I was born on January.",
    example_right: "I was born in January.",
    reason_tr: "Aylar ve yıllar 'in' alır.",
    weight: 3,
  },
  {
    id: "listen-music",
    category: "preposition",
    detector: /\blisten\s+(?!to\b)(music|the\s+radio|podcast|song)/i,
    description_tr: "'listen music' (yanlış)",
    example_wrong: "I listen music every day.",
    example_right: "I listen to music every day.",
    reason_tr: "'listen' her zaman 'to' ister.",
    weight: 4,
  },
  {
    id: "depend-of",
    category: "preposition",
    detector: /\bdepend(s|ed|ing)?\s+(of|from)\b/i,
    description_tr: "'depend of/from' (yanlış)",
    example_wrong: "It depends of the weather.",
    example_right: "It depends on the weather.",
    reason_tr: "'depend' İngilizce'de 'on' ister, başka dilden 'de/of' transfer olur.",
    weight: 3,
  },
  {
    id: "married-with",
    category: "preposition",
    detector: /\b(married|marry|engaged)\s+with\s+(?:her|him|me|us|them|a\s+|the\s+|\w+)/i,
    description_tr: "'married with' (yanlış)",
    example_wrong: "She is married with a doctor.",
    example_right: "She is married to a doctor.",
    reason_tr: "İngilizce'de 'married TO' kullanılır.",
    weight: 3,
  },
  {
    id: "interested-of",
    category: "preposition",
    detector: /\binterested\s+(of|to|about|for|on)\b/i,
    description_tr: "'interested of/to/about' yerine 'interested IN'",
    example_wrong: "I'm interested of history.",
    example_right: "I'm interested in history.",
    reason_tr: "'interested IN' sabit kalıp.",
    weight: 3,
  },
  {
    id: "afraid-from",
    category: "preposition",
    detector: /\bafraid\s+(from|about|to)\s+(?:the|a|my)?\s*\w+/i,
    description_tr: "'afraid from/about' yerine 'afraid OF'",
    example_wrong: "I'm afraid from spiders.",
    example_right: "I'm afraid of spiders.",
    reason_tr: "'afraid OF' sabit kalıp.",
    weight: 3,
  },
  {
    id: "good-in",
    category: "preposition",
    detector: /\b(good|bad|terrible|great|amazing|excellent|awful)\s+in\s+(math|english|cooking|drawing|sports|chess|music|writing|speaking|listening)\b/i,
    description_tr: "'good in X' yerine 'good AT X'",
    example_wrong: "She is good in math.",
    example_right: "She is good at math.",
    reason_tr: "Bir konuda yetenekli/yetersiz olmak: 'AT'. Türkçe 'matematikte iyi' → 'in' yanılsaması.",
    weight: 3,
  },

  // ----- WORD ORDER -----
  {
    id: "always-after-verb",
    category: "word-order",
    detector: /\b(go|come|eat|drink|sleep|wake|work|study|watch|read|play|run|walk|drive|cook|listen|talk|speak|write|think)\s+(always|usually|often|sometimes|never|rarely|seldom)\b/i,
    description_tr: "Frequency zarfı fiilden SONRA (yanlış)",
    example_wrong: "I go always to the gym.",
    example_right: "I always go to the gym.",
    reason_tr:
      "Sıklık zarfları (always/never/often) ana fiilden ÖNCE, 'be' fiilinden SONRA gelir.",
    weight: 3,
  },
  {
    id: "very-much-too-much",
    category: "word-order",
    detector: /\bi\s+(like|love|enjoy|hate|prefer|miss|need|want)\s+(very\s+much|so\s+much)\s+\w+/i,
    description_tr: "'I like very much X' (yanlış sıralama)",
    example_wrong: "I like very much pizza.",
    example_right: "I like pizza very much. / I really like pizza.",
    reason_tr: "'very much' nesneden SONRA. Cümle başında 'really' daha doğal.",
    weight: 2,
  },
  {
    id: "question-word-order",
    category: "word-order",
    detector: /\b(why|where|when|how|what)\s+you\s+(are|is|do|did|have|will|can|could|would|should)\b/i,
    description_tr: "Soruda 'subject + aux' tersliği eksik",
    example_wrong: "Why you are sad?",
    example_right: "Why are you sad?",
    reason_tr: "Soru kelimesinden sonra yardımcı fiil özneden ÖNCE gelir.",
    weight: 4,
  },

  // ----- PHRASAL VERB / CALQUE -----
  {
    id: "make-photo",
    category: "phrasal-verb",
    detector: /\b(make|making|made)\s+(a\s+)?(photo|picture|selfie)\b/i,
    description_tr: "'make a photo' yerine 'take'",
    example_wrong: "Let's make a photo.",
    example_right: "Let's take a photo.",
    reason_tr:
      "Türkçe 'fotoğraf çekmek' → İngilizce 'take a photo'. 'make' yanlış kalque.",
    weight: 4,
  },
  {
    id: "open-light",
    category: "phrasal-verb",
    detector: /\b(open|close)\s+(the\s+)?(light|lights|tv|television|radio|computer|fan|ac|air\s+conditioner|music)\b/i,
    description_tr: "'open the light' yerine 'turn on'",
    example_wrong: "Can you open the light?",
    example_right: "Can you turn on the light?",
    reason_tr:
      "Türkçe 'açmak' → İngilizce 'turn on/off' for electronics. 'open' sadece fiziksel kapı/kutu için.",
    weight: 4,
  },
  {
    id: "say-the-truth",
    category: "phrasal-verb",
    detector: /\bsay\s+(the\s+)?(truth|lie|prayer|joke)\b/i,
    description_tr: "'say the truth' yerine 'tell'",
    example_wrong: "Just say the truth.",
    example_right: "Just tell the truth.",
    reason_tr: "'tell + the truth/lie/joke/story'. 'say' bunlarla gitmez.",
    weight: 3,
  },
  {
    id: "do-photo-mistake",
    category: "phrasal-verb",
    detector: /\bdo\s+(a\s+)?(photo|picture|selfie|breakfast|lunch|dinner|coffee|sport|sports|exercise)\b/i,
    description_tr: "'do' yerine doğru fiil (have/take/play)",
    example_wrong: "I do breakfast at 8.",
    example_right: "I have breakfast at 8.",
    reason_tr:
      "Türkçe 'yapmak' her şeyle gider; İngilizce'de 'have breakfast', 'take a photo', 'play a sport'.",
    weight: 3,
  },
  {
    id: "make-a-decision-verb-confusion",
    category: "phrasal-verb",
    detector: /\b(do|take)\s+a\s+(decision|mistake|choice)\b/i,
    description_tr: "'do/take a decision' yerine 'make'",
    example_wrong: "I have to take a decision.",
    example_right: "I have to make a decision.",
    reason_tr: "'make a decision/mistake/choice/plan'. 'take' decision için yanlış.",
    weight: 3,
  },

  // ----- REGISTER / COMMON ADJECTIVE ERRORS -----
  {
    id: "i-am-interesting",
    category: "register",
    detector: /\bi\s*('?m|am)\s+(interesting|boring|exciting|tiring|confusing|amazing|surprising|disappointing|terrifying|annoying|relaxing|exhausting)\b/i,
    description_tr: "-ing / -ed karışıklığı (interesting vs interested)",
    example_wrong: "I am interesting in art.",
    example_right: "I am interested in art.",
    reason_tr:
      "-ing özelliği anlatır ('film ilginç'); -ed hissi anlatır ('ben ilgileniyorum'). Türk öğrenciler hep -ing der.",
    weight: 4,
  },
  {
    id: "fastly",
    category: "register",
    detector: /\bfastly\b/i,
    description_tr: "'fastly' diye kelime yok",
    example_wrong: "He runs fastly.",
    example_right: "He runs fast.",
    reason_tr:
      "'fast' hem sıfat hem zarf — sonuna -ly eklenmez. 'hard' da öyle.",
    weight: 3,
  },
  {
    id: "hardly-vs-hard",
    category: "register",
    detector: /\b(work|study|train|push|try)s?\s+hardly\b/i,
    description_tr: "'work hardly' yerine 'work hard'",
    example_wrong: "I work hardly every day.",
    example_right: "I work hard every day.",
    reason_tr:
      "'hardly' = neredeyse hiç. 'çok çalışmak' = 'work hard' (zarf olarak da 'hard').",
    weight: 4,
  },
  {
    id: "have-age",
    category: "false-friend",
    detector: /\bi\s+(have|got)\s+\d{1,2}\s+(years|year\s+old|years?\s*$)/i,
    description_tr: "'I have 20 years' yerine 'I am 20'",
    example_wrong: "I have 20 years.",
    example_right: "I am 20 (years old).",
    reason_tr:
      "Türkçe 'yaşım var' değil; ama Romance dillerde 'avoir' kullanılır. İngilizce'de yaş için 'be': 'I am 20'.",
    weight: 4,
  },
  {
    id: "make-me-to",
    category: "missing-aux",
    detector: /\b(make|makes|made|let|lets|help|helps|helped)\s+(me|him|her|us|them|you)\s+to\s+\w+/i,
    description_tr: "'make me TO think' (yanlış 'to')",
    example_wrong: "This makes me to think.",
    example_right: "This makes me think.",
    reason_tr:
      "'make/let' + nesne + bare infinitive (to YOK). 'help' her iki şekilde de olur.",
    weight: 4,
  },
  {
    id: "recommend-you-to",
    category: "missing-aux",
    detector: /\b(recommend|recommends|recommended|suggest|suggests|suggested)\s+(me|you|him|her|us|them)\s+to\s+\w+/i,
    description_tr: "'recommend you TO visit' (yanlış kalıp)",
    example_wrong: "I recommend you to visit Cappadocia.",
    example_right: "I recommend visiting Cappadocia. / I recommend that you visit Cappadocia.",
    reason_tr:
      "'recommend/suggest' nesneye + to almaz. '-ing' veya 'that' clause.",
    weight: 3,
  },
  {
    id: "explain-me",
    category: "missing-aux",
    detector: /\b(explain|explains|explained|describe|describes|described|suggest|suggests|suggested|recommend|recommends|recommended)\s+(me|him|her|us|them)\s+\w+/i,
    description_tr: "'explain me' yerine 'explain to me'",
    example_wrong: "Can you explain me this?",
    example_right: "Can you explain this to me?",
    reason_tr:
      "Bu fiiller indirekt nesneyi 'to' ile alır: 'explain TO me', 'describe TO me'.",
    weight: 3,
  },

  // ----- SUBJECT-VERB / MISSING AUX -----
  {
    id: "he-have",
    category: "subject-verb",
    detector: /\b(he|she|it)\s+(have|do|go|come|say|like|love|hate|want|need|make|take)\b(?!\s+(been|done|gone|come|seen|made|taken))/i,
    description_tr: "3. tekil şahısta -s eksik",
    example_wrong: "She have a car.",
    example_right: "She has a car.",
    reason_tr:
      "He/she/it + V → fiile -s. Türkçede çekim öznede; İngilizce'de fiilde.",
    weight: 4,
  },
  {
    id: "people-is",
    category: "subject-verb",
    detector: /\b(people|police|children|men|women|men|cattle)\s+(is|was|has\s+(been|got))\b/i,
    description_tr: "'people IS' (çoğul → are)",
    example_wrong: "People is friendly here.",
    example_right: "People are friendly here.",
    reason_tr:
      "'people', 'police', 'children' her zaman çoğul → 'are/were'.",
    weight: 4,
  },
  {
    id: "missing-be-adjective",
    category: "missing-aux",
    detector: /\b(i|you|he|she|it|we|they)\s+(very\s+)?(happy|sad|tired|busy|hungry|thirsty|angry|cold|hot|ready|late|early|nervous|scared)\b\s+(now|today|right\s+now)?/i,
    description_tr: "'be' fiili atlanmış (I happy / She tired)",
    example_wrong: "I very tired today.",
    example_right: "I am very tired today.",
    reason_tr:
      "Türkçede 'yorgunum' tek kelime; İngilizce'de 'be' fiili zorunlu: 'I am tired'.",
    weight: 4,
  },
  {
    id: "no-do-question",
    category: "missing-aux",
    detector: /^\s*(you|he|she|they|we)\s+(like|love|hate|want|need|have|live|work|study|speak|know|think|eat|drink|play)s?\s+[^?]*\?/i,
    description_tr: "Soruda 'do/does' eksik",
    example_wrong: "You like coffee?",
    example_right: "Do you like coffee?",
    reason_tr:
      "İngilizce sorularda 'do/does/did' yardımcı fiili zorunlu (intonation soru sayılmaz formal İng'de).",
    weight: 3,
  },

  // ----- FALSE-COGNATE / FALSE-FRIEND -----
  {
    id: "actually-vs-currently",
    category: "false-cognate",
    detector: /\bactually\s+i\s+(am|live|work|study)\b/i,
    description_tr: "'actually' ≠ 'şu anda'",
    example_wrong: "Actually I live in Istanbul.",
    example_right: "Currently I live in Istanbul. / Right now I live in Istanbul.",
    reason_tr:
      "'actually' = aslında. 'şu an' için 'currently / right now / at the moment'.",
    weight: 3,
  },
  {
    id: "sympathic",
    category: "false-cognate",
    detector: /\bsympathic\b/i,
    description_tr: "'sympathic' diye kelime yok",
    example_wrong: "He is very sympathic.",
    example_right: "He is very nice / friendly / likeable.",
    reason_tr:
      "Türkçe 'sempatik' → İngilizce 'sympathetic' (acıma) farklı anlam. 'Nice/likeable' kullan.",
    weight: 3,
  },
  {
    id: "library-bookstore",
    category: "false-cognate",
    detector: /\b(buy|bought|buying|sell|sold|selling)\s+\w+\s+(at|in|from)\s+(the\s+)?library\b/i,
    description_tr: "'library' ≠ kitabevi",
    example_wrong: "I bought it at the library.",
    example_right: "I bought it at the bookstore.",
    reason_tr:
      "'library' = kütüphane (ödünç alırsın). 'bookstore/bookshop' = kitabevi (satın alırsın).",
    weight: 3,
  },
  {
    id: "chef-cook",
    category: "false-cognate",
    detector: /\bmy\s+chef\b/i,
    description_tr: "'chef' = aşçı, patron değil",
    example_wrong: "My chef is angry.",
    example_right: "My boss is angry. / My manager is angry.",
    reason_tr:
      "Türkçe 'şef' patron olabilir; İngilizce'de 'chef' sadece aşçıbaşı. Patron = 'boss/manager'.",
    weight: 4,
  },
  {
    id: "normal-okay",
    category: "false-cognate",
    detector: /\b(it'?s|that'?s|i'?m|i\s+am)\s+normal\b/i,
    description_tr: "'normal' yerine 'fine/okay'",
    example_wrong: "I'm normal, thanks.",
    example_right: "I'm fine, thanks.",
    reason_tr:
      "Hâl-hatır sorusunda 'normal' İngilizce'de garip durur. 'Fine/okay/good' kullan.",
    weight: 2,
  },
  {
    id: "actual-current",
    category: "false-cognate",
    detector: /\bmy\s+actual\s+(job|address|girlfriend|boyfriend|company|salary)\b/i,
    description_tr: "'actual' ≠ 'şimdiki'",
    example_wrong: "My actual job is boring.",
    example_right: "My current job is boring.",
    reason_tr:
      "'actual' = gerçek. 'Şu anki' için 'current'.",
    weight: 3,
  },

  // ----- MORE COVERAGE -----
  {
    id: "until-by",
    category: "preposition",
    detector: /\b(submit|finish|send|complete|deliver|return)\s+(it|that|this|the\s+\w+)?\s+until\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|tonight|noon|midnight|\d)/i,
    description_tr: "'until X'e kadar bitir' yerine 'by X'",
    example_wrong: "Submit it until Friday.",
    example_right: "Submit it by Friday.",
    reason_tr:
      "Bitiş tarihi için 'by'. 'until' sürekli devam eden eylemler için ('wait until').",
    weight: 4,
  },
  {
    id: "since-for",
    category: "preposition",
    detector: /\b(have|has|had)\s+\w+(ed|en)?\s+since\s+\d+\s+(year|month|week|day|hour|minute)s?\b/i,
    description_tr: "'since 5 years' yerine 'for 5 years'",
    example_wrong: "I have known her since 5 years.",
    example_right: "I have known her for 5 years.",
    reason_tr:
      "Süre → 'for'. Başlangıç noktası → 'since' (since 2019, since Monday).",
    weight: 4,
  },
  {
    id: "no-double-negative",
    category: "word-order",
    detector: /\bi\s+(don'?t|do\s+not|can'?t|cannot|won'?t|will\s+not|didn'?t|did\s+not|haven'?t)\s+(\w+\s+)?(nothing|nobody|no\s+one|nowhere|never)\b/i,
    description_tr: "Çift olumsuzluk (don't know nothing)",
    example_wrong: "I don't know nothing.",
    example_right: "I don't know anything. / I know nothing.",
    reason_tr:
      "İngilizce standardında bir olumsuzluk yeter. 'nothing' yerine 'anything'.",
    weight: 3,
  },
  {
    id: "much-with-countable",
    category: "register",
    detector: /\bmuch\s+(people|friends|cars|books|days|years|times|things|cities|countries|languages|words|questions|problems)\b/i,
    description_tr: "Sayılabilirle 'much' (yanlış)",
    example_wrong: "Much people came.",
    example_right: "Many people came.",
    reason_tr:
      "Sayılabilir çoğul → 'many'. Sayılamayan → 'much'.",
    weight: 3,
  },
  {
    id: "few-with-uncountable",
    category: "register",
    detector: /\b(few|a\s+few)\s+(water|coffee|sugar|salt|money|time|advice|information|news|music|traffic|rain|snow)\b/i,
    description_tr: "Sayılamayanla 'few' (yanlış)",
    example_wrong: "I have few money.",
    example_right: "I have little money. / not much money.",
    reason_tr:
      "Sayılabilir → '(a) few'. Sayılamayan → '(a) little'.",
    weight: 3,
  },
  {
    id: "how-it-looks",
    category: "word-order",
    detector: /\bhow\s+(it|he|she|that|this)\s+(looks|seems|sounds|tastes|feels)\b/i,
    description_tr: "'How it looks' yerine 'How does it look'",
    example_wrong: "Tell me how it looks.",
    example_right: "Tell me how it looks. / What does it look like?",
    reason_tr:
      "Embedded soru: 'how does it look' → 'how it looks' (kompleks, ama yaygın hata 'How it looks?').",
    weight: 2,
  },
  {
    id: "no-some-question",
    category: "register",
    detector: /\bdo\s+you\s+(want|have|need)\s+some\s+(cup|piece|bottle|glass|coffee|tea|water|help|advice)\b/i,
    description_tr: "(stil notu) Soruda 'some' OK ama 'any' daha standart",
    example_wrong: "Do you want some help?",
    example_right: "Do you want any help? (or 'some' for offers)",
    reason_tr:
      "Sorularda genelde 'any'. Ancak teklif/öneri için 'some' doğru — bağlam önemli.",
    weight: 1,
  },
  {
    id: "very-+-strong-adj",
    category: "register",
    detector: /\bvery\s+(huge|tiny|enormous|gigantic|tiny|delicious|terrible|awful|amazing|fantastic|gorgeous|brilliant|exhausted|freezing|boiling|starving|furious|hilarious|terrified)\b/i,
    description_tr: "'very' + güçlü sıfat (yanlış)",
    example_wrong: "It was very delicious.",
    example_right: "It was absolutely delicious. / really delicious.",
    reason_tr:
      "'delicious/huge/freezing' zaten güçlü. 'very' yerine 'absolutely/really'.",
    weight: 2,
  },
  {
    id: "th-pronunciation",
    category: "pronunciation",
    detector: /\b(tirty|tree(\s+(years|times|things|days|hours))|fink(s|ing|er)?|fanks|fanx|tanks(\s+a\s+lot)|toughth|trough|trew)\b/i,
    description_tr: "'th' yerine 't/f' (telaffuz/yazım izleri)",
    example_wrong: "Tirty years / I fink so.",
    example_right: "Thirty years / I think so.",
    reason_tr:
      "Türkçe'de /θ/ yok → 't' veya 'f' yazılır. Konuşma pratiği gerekiyor.",
    weight: 2,
  },
  {
    id: "rather-than-different",
    category: "preposition",
    detector: /\bdifferent\s+(than|to|with)\b/i,
    description_tr: "'different than/to/with' yerine 'different FROM'",
    example_wrong: "This is different than that.",
    example_right: "This is different from that.",
    reason_tr:
      "Standart İngilizce: 'different FROM'. ('different than' US konuşma diline kayar.)",
    weight: 2,
  },
  {
    id: "say-someone",
    category: "phrasal-verb",
    detector: /\b(say|said|saying|says)\s+(me|him|her|us|them|you)\b(?!\s+(no|yes|good|bye|hi|hello))/i,
    description_tr: "'say me' yerine 'tell me'",
    example_wrong: "He said me to wait.",
    example_right: "He told me to wait.",
    reason_tr:
      "'tell' + birine. 'say' + sözlü içerik (he said hello).",
    weight: 4,
  },
  {
    id: "go-to-home",
    category: "preposition",
    detector: /\bgo(?:es|ing|ne)?\s+to\s+home\b/i,
    description_tr: "'go TO home' (yanlış 'to')",
    example_wrong: "I want to go to home.",
    example_right: "I want to go home.",
    reason_tr:
      "'home' özel kelime: önüne 'to' almaz. 'go home', 'come home'.",
    weight: 3,
  },
  {
    id: "look-vs-see",
    category: "phrasal-verb",
    detector: /\blook\s+(a\s+)?(movie|film|tv|show|series|game)\b/i,
    description_tr: "'look a movie' yerine 'watch'",
    example_wrong: "Let's look a movie.",
    example_right: "Let's watch a movie.",
    reason_tr:
      "'watch' film/dizi için; 'look at' bir şeye bakmak; 'see' görmek.",
    weight: 3,
  },
  {
    id: "how-look-like",
    category: "word-order",
    detector: /\bhow\s+(does|do)\s+\w+\s+look\b(?!\s+like)/i,
    description_tr: "'How does she look?' (anlam belirsiz) → 'What does she look like?'",
    example_wrong: "How does she look?",
    example_right: "What does she look like?",
    reason_tr:
      "Görünüm sorusu için 'look LIKE' kalıbı. 'How does she look?' = 'Sağlığı/hâli nasıl?' anlamına gider.",
    weight: 2,
  },
];

// ---------------------------------------------------------------------------
// detectMistakes
// Runs every pattern over the input text once. Returns ALL matches (a single
// utterance can carry multiple mistakes). The matchedSubstring is the
// concrete fragment that triggered the rule — useful for the tracker's
// example list and for highlighting the mistake in UI.
// ---------------------------------------------------------------------------

export function detectMistakes(
  userText: string,
): { patternId: string; matchedSubstring: string }[] {
  if (!userText || typeof userText !== "string") return [];
  const text = userText.trim();
  if (!text) return [];

  const hits: { patternId: string; matchedSubstring: string }[] = [];

  for (const pattern of MISTAKE_PATTERNS) {
    try {
      if (pattern.detector instanceof RegExp) {
        const m = text.match(pattern.detector);
        if (m && m[0]) {
          hits.push({ patternId: pattern.id, matchedSubstring: m[0] });
        }
      } else {
        // Functional detector — receives the raw text, returns boolean.
        if (pattern.detector(text)) {
          hits.push({ patternId: pattern.id, matchedSubstring: text.slice(0, 80) });
        }
      }
    } catch {
      // Defensive — a malformed regex must never break the user's chat send.
      continue;
    }
  }

  return hits;
}

/**
 * Lookup helper — UI components use this to print description / example
 * pairs once they have a patternId from the tracker.
 */
export function getPattern(patternId: string): MistakePattern | undefined {
  return MISTAKE_PATTERNS.find((p) => p.id === patternId);
}
