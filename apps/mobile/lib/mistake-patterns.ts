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

  // ===========================================================
  // 2026-05-20 — Adım 8 BÜYÜK EXPANSION
  // 59 → ~125 pattern. Shipped patterns must pass the content quality gate
  // in scripts/audit-quality-gate.ts before release.
  // ===========================================================

  // ----- TR DIRECT TRANSLATION TRAPS (en sık Türk hataları) -----
  {
    id: "bored-from-of",
    category: "preposition",
    detector: /\b(bored|tired|sick)\s+from\s+\w+/i,
    description_tr: "'bored from' (yanlış) → 'bored of/with'",
    example_wrong: "I'm bored from this movie.",
    example_right: "I'm bored of this movie.",
    reason_tr:
      "Türkçe 'X'ten sıkıldım' → İngilizce 'bored OF/WITH X'. 'From' yanlış prep.",
    weight: 4,
  },
  {
    id: "afraid-from-of",
    category: "preposition",
    detector: /\b(afraid|scared|frightened)\s+from\s+\w+/i,
    description_tr: "'afraid from' (yanlış) → 'afraid of'",
    example_wrong: "I'm afraid from dogs.",
    example_right: "I'm afraid of dogs.",
    reason_tr:
      "Türkçe '-den korkmak' → İngilizce 'afraid OF'. 'From' yerine 'of'.",
    weight: 4,
  },
  {
    id: "make-photo",
    category: "phrasal-verb",
    detector: /\bmake\s+(a\s+)?photos?\b/i,
    description_tr: "'make a photo' (yanlış) → 'take a photo'",
    example_wrong: "Can you make a photo?",
    example_right: "Can you take a photo?",
    reason_tr:
      "Türkçe 'fotoğraf çekmek/yapmak' → İngilizce 'TAKE a photo'. Her zaman 'take'.",
    weight: 5,
  },
  {
    id: "make-shower",
    category: "phrasal-verb",
    detector: /\bmake\s+(a\s+)?(shower|bath)\b/i,
    description_tr: "'make a shower' (yanlış) → 'take a shower'",
    example_wrong: "I'll make a shower.",
    example_right: "I'll take a shower.",
    reason_tr: "'Duş almak / banyo yapmak' için 'TAKE'. 'Make' kullanılmaz.",
    weight: 5,
  },
  {
    id: "make-walk",
    category: "phrasal-verb",
    detector: /\bmake\s+(a\s+)?walk\b/i,
    description_tr: "'make a walk' (yanlış) → 'go for a walk' / 'take a walk'",
    example_wrong: "Let's make a walk.",
    example_right: "Let's go for a walk.",
    reason_tr: "'Yürüyüş yapmak' → 'go for a walk' veya 'take a walk'. 'Make' yanlış.",
    weight: 4,
  },
  {
    id: "make-mistake",
    category: "phrasal-verb",
    detector: /\bdo\s+(a\s+)?mistakes?\b/i,
    description_tr: "'do a mistake' (yanlış) → 'make a mistake'",
    example_wrong: "I did a mistake.",
    example_right: "I made a mistake.",
    reason_tr:
      "Türkçe 'hata yaptım' → İngilizce 'MAKE a mistake'. 'Do' İngilizcede yanlış.",
    weight: 4,
  },
  {
    id: "make-homework",
    category: "phrasal-verb",
    detector: /\bmake\s+(my\s+|the\s+|your\s+)?homework\b/i,
    description_tr: "'make homework' (yanlış) → 'do homework'",
    example_wrong: "I made my homework.",
    example_right: "I did my homework.",
    reason_tr:
      "Türkçe 'ödev yapmak' kafa karıştırır. İngilizcede 'DO homework' (do/make ayrımı).",
    weight: 4,
  },
  {
    id: "make-decision",
    category: "phrasal-verb",
    detector: /\bdo\s+(a\s+)?decisions?\b/i,
    description_tr: "'do a decision' (yanlış) → 'make a decision'",
    example_wrong: "I'll do a decision tomorrow.",
    example_right: "I'll make a decision tomorrow.",
    reason_tr: "Karar VERMEK → 'MAKE a decision'. Türkçe 'yapmak' yanıltıcı.",
    weight: 3,
  },
  {
    id: "open-light",
    category: "phrasal-verb",
    detector: /\b(open|close)\s+the\s+(light|lights|TV|radio|computer)\b/i,
    description_tr: "'open the light' (yanlış) → 'turn on the light'",
    example_wrong: "Open the light, please.",
    example_right: "Turn on the light, please.",
    reason_tr:
      "Türkçe 'ışığı aç/kapat' → İngilizce 'TURN ON/OFF the light'. 'Open/close' fiziksel kapı/pencere için.",
    weight: 5,
  },
  {
    id: "look-movie",
    category: "phrasal-verb",
    detector: /\b(look|watch)\s+at\s+(a\s+|the\s+)?(movie|film|tv|show)/i,
    description_tr: "'look at a movie' (yanlış) → 'watch a movie'",
    example_wrong: "Did you look at the movie?",
    example_right: "Did you watch the movie?",
    reason_tr: "Film/dizi için 'WATCH'. 'Look at' bir nesneye gözle bakmak.",
    weight: 3,
  },
  {
    id: "since-time-perfect",
    category: "tense",
    detector: /\b(i|we|they|she|he)\s+(work|live|study|do|am|is|are)\s+(here|there)\s+(since|for)\s+/i,
    description_tr: "'I work here since...' (yanlış) → 'I have been working here since...'",
    example_wrong: "I work here since 2 years.",
    example_right: "I have been working here for 2 years.",
    reason_tr:
      "Bir noktadan beri devam eden eylem → present perfect. Süre için 'for', başlangıç için 'since'.",
    weight: 5,
  },
  {
    id: "informations",
    category: "false-cognate",
    detector: /\binformations?\s*(s)\b|\binformations\b/i,
    description_tr: "'informations' (yanlış) → 'information' (sayılamaz)",
    example_wrong: "I need more informations.",
    example_right: "I need more information.",
    reason_tr:
      "'Information' sayılamaz isim, çoğul almaz. 'Pieces of information' veya 'some info' diyebilirsin.",
    weight: 4,
  },
  {
    id: "advices",
    category: "false-cognate",
    detector: /\badvices\b/i,
    description_tr: "'advices' (yanlış) → 'advice' veya 'pieces of advice'",
    example_wrong: "Thanks for your advices.",
    example_right: "Thanks for your advice.",
    reason_tr: "'Advice' sayılamaz. Çoğul yapamazsın.",
    weight: 4,
  },
  {
    id: "furnitures",
    category: "false-cognate",
    detector: /\bfurnitures\b/i,
    description_tr: "'furnitures' (yanlış) → 'furniture' (sayılamaz)",
    example_wrong: "I bought new furnitures.",
    example_right: "I bought new furniture.",
    reason_tr: "'Furniture' sayılamaz isim. 'Pieces of furniture' diyebilirsin.",
    weight: 3,
  },
  {
    id: "homeworks",
    category: "false-cognate",
    detector: /\bhomeworks\b/i,
    description_tr: "'homeworks' (yanlış) → 'homework' (sayılamaz)",
    example_wrong: "I have lots of homeworks.",
    example_right: "I have lots of homework.",
    reason_tr: "'Homework' sayılamaz. Çoğul yapamazsın.",
    weight: 3,
  },
  {
    id: "softwares",
    category: "false-cognate",
    detector: /\bsoftwares\b/i,
    description_tr: "'softwares' (yanlış) → 'software'",
    example_wrong: "I use many softwares.",
    example_right: "I use many software programs.",
    reason_tr: "'Software' sayılamaz. Çoğul için 'software programs' / 'apps' gibi ifadeler.",
    weight: 3,
  },

  // ----- TH SESI (telaffuz — pronunciation) -----
  // Bu kalıplar yazılı pattern olarak yakalanamaz; telaffuz check başka yerde.
  // Lakin yazımda 'th' yerine 'd/t/f' yazma hatası yakalanabilir.
  {
    id: "tink-think",
    category: "pronunciation",
    detector: /\b(tink|tought|trough|tree)\s+(of|about|its|its been)/i,
    description_tr: "Yazımda 'tink/tought' (yanlış) → 'think/thought' (TH sesi)",
    example_wrong: "I tink so.",
    example_right: "I think so.",
    reason_tr:
      "TH sesi Türkçede yok. Dilini ön dişlerinin arasına koy + nefes ver. 't' değil.",
    weight: 2,
  },
  {
    id: "free-three",
    category: "pronunciation",
    detector: /\bfree\s+(years|days|months|hours|times)\s+(ago|left|ahead)/i,
    description_tr: "'free' yerine 'three' karışıklığı",
    example_wrong: "Three years ago — but you wrote 'free'.",
    example_right: "Three years ago.",
    reason_tr:
      "TH+R kombinasyonu zor. 'F' sesi yerine TH sesi: dil ön dişe.",
    weight: 2,
  },
  {
    id: "dis-this",
    category: "pronunciation",
    detector: /\b(dis|dat|dey|dem)\s+(is|are|was|were|will)\b/i,
    description_tr: "Yazımda 'dis/dat' (yanlış) → 'this/that'",
    example_wrong: "Dis is nice.",
    example_right: "This is nice.",
    reason_tr:
      "Yumuşak TH sesi — dilini ön dişe koy, ses titreşimli. 'D' yerine.",
    weight: 2,
  },

  // ----- V vs W CONFUSION -----
  {
    id: "vill-will",
    category: "pronunciation",
    detector: /\bvill\s+(go|come|see|do|be|have)\b/i,
    description_tr: "'vill' (yanlış) → 'will'. V/W karışıklığı yazımda.",
    example_wrong: "I vill go tomorrow.",
    example_right: "I will go tomorrow.",
    reason_tr:
      "Türkçede V/W ayrımı yok. 'W' için dudakları o şekline getir, ses ver. 'V' diş+dudak.",
    weight: 2,
  },
  {
    id: "wery-very",
    category: "pronunciation",
    detector: /\b(wery|werry)\s+(good|bad|nice|hard|easy|fast)/i,
    description_tr: "'wery' (yanlış) → 'very'",
    example_wrong: "It's wery nice.",
    example_right: "It's very nice.",
    reason_tr:
      "'V' dişin alt dudakla teması — Türkçe V'den biraz daha sert. 'W' tamamen dudak.",
    weight: 2,
  },

  // ----- ARTICLES (Türkçede yok, en sık eksik) -----
  {
    id: "i-am-student",
    category: "article",
    detector: /\b(i\s+am|i'?m|she\s+is|he\s+is)\s+(student|teacher|doctor|engineer|nurse|lawyer)\b/i,
    description_tr: "Meslek isminden önce 'a/an' eksik",
    example_wrong: "I am student.",
    example_right: "I am a student.",
    reason_tr:
      "Türkçede 'ben öğrenciyim' tek kelime. İngilizcede meslek isminden önce 'a/an' zorunlu (tekil).",
    weight: 4,
  },
  {
    id: "go-to-school-the",
    category: "article",
    detector: /\bgo\s+to\s+the\s+(school|university|hospital|church|prison|bed|work)\b/i,
    description_tr: "'go to the school' (genelde yanlış) → 'go to school' (genel anlam)",
    example_wrong: "I go to the school every day.",
    example_right: "I go to school every day.",
    reason_tr:
      "Bir kurumun amacıyla giderken article yok (school, work, bed, church). Spesifik bir bina kastediyorsan 'the' kullan.",
    weight: 2,
  },
  {
    id: "what-time-the",
    category: "article",
    detector: /\bwhat\s+the\s+time\b/i,
    description_tr: "'what the time' (yanlış) → 'what time'",
    example_wrong: "What the time is it?",
    example_right: "What time is it?",
    reason_tr: "'What time' fixed kalıp, article almaz.",
    weight: 3,
  },

  // ----- MORE PREPOSITION LEAKS -----
  {
    id: "at-night-in",
    category: "preposition",
    detector: /\bin\s+(the\s+)?night\b/i,
    description_tr: "'in the night' (yanlış) → 'at night'",
    example_wrong: "I can't sleep in the night.",
    example_right: "I can't sleep at night.",
    reason_tr:
      "Gece için 'AT night'. Diğer zaman ifadeleri farklı: 'in the morning/evening/afternoon' ama 'AT night'.",
    weight: 3,
  },
  {
    id: "on-the-bus",
    category: "preposition",
    detector: /\bin\s+(the\s+)?(bus|train|plane|airplane|metro|subway)\b/i,
    description_tr: "'in the bus/train' (genelde yanlış) → 'on the bus/train'",
    example_wrong: "I'm in the bus.",
    example_right: "I'm on the bus.",
    reason_tr:
      "Türkçe 'otobüsteyim' → 'IN the bus' sanırsın ama public transport için 'ON'. Araba/taksi için 'in' (ufak araç).",
    weight: 3,
  },
  {
    id: "married-with-to",
    category: "preposition",
    detector: /\b(married|engaged)\s+with\s+\w+/i,
    description_tr: "'married with X' (yanlış) → 'married to X'",
    example_wrong: "She is married with him.",
    example_right: "She is married to him.",
    reason_tr:
      "Türkçe 'X ile evli' → 'married TO X'. 'With' yerine 'to'.",
    weight: 4,
  },
  {
    id: "depend-of-on",
    category: "preposition",
    detector: /\bdepend(s|ing)?\s+of\b/i,
    description_tr: "'depend of' (yanlış) → 'depend on'",
    example_wrong: "It depends of you.",
    example_right: "It depends on you.",
    reason_tr: "'Depend ON' sabit kalıp. 'Of' yanlış prep.",
    weight: 4,
  },
  {
    id: "discuss-about",
    category: "preposition",
    detector: /\bdiscuss(ed|ing)?\s+about\b/i,
    description_tr: "'discuss about' (yanlış) → 'discuss' (prep yok)",
    example_wrong: "We discussed about the topic.",
    example_right: "We discussed the topic.",
    reason_tr:
      "'Discuss' direk obje alır. 'Talk about' karışıklığı: 'talk ABOUT' ama 'discuss' tek başına.",
    weight: 4,
  },
  {
    id: "listen-music",
    category: "preposition",
    detector: /\blisten\s+(music|the\s+music|songs|the\s+song)\b/i,
    description_tr: "'listen music' (yanlış) → 'listen to music'",
    example_wrong: "I like to listen music.",
    example_right: "I like to listen to music.",
    reason_tr: "'Listen TO' her zaman 'to' alır.",
    weight: 4,
  },
  {
    id: "wait-someone",
    category: "preposition",
    detector: /\bwait\s+(me|you|him|her|us|them)\b/i,
    description_tr: "'wait me' (yanlış) → 'wait for me'",
    example_wrong: "Wait me.",
    example_right: "Wait for me.",
    reason_tr: "'Wait FOR someone' — 'for' zorunlu prep.",
    weight: 4,
  },
  {
    id: "search-for",
    category: "preposition",
    detector: /\bsearch\s+(me|you|him|her|us|them|something|the\s+\w+)\b/i,
    description_tr: "'search me' (yanlış: anlam değişir!) → 'search for me'",
    example_wrong: "I searched my keys.",
    example_right: "I searched for my keys.",
    reason_tr:
      "'Search FOR' arıyorum demek. 'Search me' = beni üst-arama yapma (polis). Anlam farkı kritik.",
    weight: 4,
  },
  {
    id: "at-noon-on",
    category: "preposition",
    detector: /\b(in|on)\s+noon\b/i,
    description_tr: "'in/on noon' (yanlış) → 'at noon'",
    example_wrong: "Lunch is on noon.",
    example_right: "Lunch is at noon.",
    reason_tr: "'At noon', 'at midnight' — saat noktaları için 'at'.",
    weight: 2,
  },

  // ----- WORD ORDER (TR SOV → EN SVO leak) -----
  {
    id: "always-i-do",
    category: "word-order",
    detector: /\b(always|never|sometimes|often|rarely|usually)\s+i\s+(do|am|have|go|see|like|want|need)\b/i,
    description_tr: "Sıklık zarfı başta (yanlış) → özneden sonra",
    example_wrong: "Always I go to gym.",
    example_right: "I always go to the gym.",
    reason_tr:
      "Türkçede 'her zaman ben...' başlayabilir. İngilizcede sıklık zarfı özneden sonra, fiilden önce (ana fiil 'be' değilse).",
    weight: 4,
  },
  {
    id: "yesterday-i-went",
    category: "word-order",
    detector: /\bi\s+(yesterday|today|tomorrow|last\s+\w+|tonight)\s+(go|come|see|do|eat|have|make|take|meet)\b/i,
    description_tr: "Zaman ifadesi öznesi+fiil arasında (yanlış) → başa veya sona",
    example_wrong: "I yesterday went home.",
    example_right: "Yesterday, I went home. / I went home yesterday.",
    reason_tr:
      "Türkçe 'ben dün eve gittim' tüm sıralar kabul ama İngilizce zaman ifadesi cümlenin başına veya sonuna gider.",
    weight: 4,
  },

  // ----- MISSING AUX -----
  {
    id: "you-go-now",
    category: "missing-aux",
    detector: /^you\s+(go|come|leave|stay|wait)\s+(now|here|there)\??\s*$/i,
    description_tr: "Soru veya emir karışıklığı: 'You go now?' (yanlış)",
    example_wrong: "You go now?",
    example_right: "Are you going now?",
    reason_tr:
      "Türkçe 'gidiyor musun?' tonlama ile soru. İngilizcede aux gerekli: 'Are you ...?' / 'Do you ...?'",
    weight: 4,
  },
  {
    id: "where-you-going",
    category: "missing-aux",
    detector: /\bwhere\s+you\s+(going|come\s+from|live|work)\b/i,
    description_tr: "'Where you going' (yanlış) → 'Where are you going'",
    example_wrong: "Where you going?",
    example_right: "Where are you going?",
    reason_tr:
      "Sorularda be-fiili (am/is/are) atlanamaz. 'Where ARE you going'.",
    weight: 4,
  },
  {
    id: "i-no-go",
    category: "missing-aux",
    detector: /\bi\s+no\s+(go|like|want|see|do|come|eat|have|know)\b/i,
    description_tr: "'I no go' (yanlış) → 'I don't go'",
    example_wrong: "I no go to school.",
    example_right: "I don't go to school.",
    reason_tr:
      "Olumsuzlama 'do not' veya 'don't' ile. 'No' kelimesi cümle başına gelmez (yes/no cevabı dışında).",
    weight: 5,
  },

  // ----- REGISTER (ton hataları) -----
  {
    id: "give-me-rude",
    category: "register",
    detector: /^give\s+me\s+\w+/i,
    description_tr: "'Give me X' (kaba) → 'Could you give me X, please?'",
    example_wrong: "Give me water.",
    example_right: "Could I have some water, please?",
    reason_tr:
      "Türkçe 'su ver' lokantada normal. İngilizce 'give me' kaba. 'Could/Can I have' veya 'Could you...' yumuşatır.",
    weight: 3,
  },
  {
    id: "i-want-direct",
    category: "register",
    detector: /^i\s+want\s+(a|an|the|some|to)\s+/i,
    description_tr: "'I want X' (direkt) → 'I'd like X' / 'Could I have X?'",
    example_wrong: "I want a coffee.",
    example_right: "I'd like a coffee, please.",
    reason_tr:
      "'I want' okul İngilizcesi, lokantada kaba duyulur. 'I'd like' veya 'Could I have' kibar.",
    weight: 3,
  },
  {
    id: "you-must",
    category: "register",
    detector: /\byou\s+must\s+(go|do|come|be|have|stay)\b/i,
    description_tr: "'You must' (sert) → 'You should' veya 'You have to'",
    example_wrong: "You must come tomorrow.",
    example_right: "You should come tomorrow.",
    reason_tr:
      "'Must' güçlü zorunluluk (kanun gibi). Tavsiye için 'should'; gerekli için 'have to' daha yumuşak.",
    weight: 3,
  },

  // ----- SUBJECT-VERB AGREEMENT -----
  {
    id: "he-go",
    category: "subject-verb",
    detector: /\b(he|she|it)\s+(go|do|have|like|want|need|come|see|know|live|work)\b(?!s)/i,
    description_tr: "'he go' (yanlış) → 'he goes' (3. tekil -s)",
    example_wrong: "He go to gym.",
    example_right: "He goes to the gym.",
    reason_tr:
      "3. tekil şahıs (he/she/it) present simple'da fiil -s alır. 'He goes', 'She likes', 'It works'.",
    weight: 5,
  },
  {
    id: "people-is",
    category: "subject-verb",
    detector: /\bpeople\s+(is|was)\b/i,
    description_tr: "'people is' (yanlış) → 'people are'",
    example_wrong: "People is crazy.",
    example_right: "People are crazy.",
    reason_tr: "'People' çoğul. 'Person' tekil → 'is'. 'People' her zaman 'are'.",
    weight: 4,
  },

  // ----- COMMON CALQUES -----
  {
    id: "have-X-years",
    category: "tense",
    detector: /\bi\s+(have|has)\s+\d+\s+years?\b/i,
    description_tr: "'I have 25 years' (yanlış) → 'I am 25 years old'",
    example_wrong: "I have 25 years.",
    example_right: "I am 25 years old.",
    reason_tr:
      "Türkçe '25 yaşımda' veya İspanyolca 'tengo 25 años' → İngilizce 'I AM ... old'. 'Have' kullanılmaz.",
    weight: 5,
  },
  {
    id: "good-in-at",
    category: "preposition",
    detector: /\bgood\s+in\s+(\w+ing|math|english|science|music|sports?|cooking)/i,
    description_tr: "'good in X' (yanlış) → 'good at X'",
    example_wrong: "I'm good in math.",
    example_right: "I'm good at math.",
    reason_tr: "Becerli olduğun şey için 'good AT', 'bad AT', 'great AT'.",
    weight: 4,
  },
  {
    id: "interested-in",
    category: "preposition",
    detector: /\binterested\s+(at|on|for|with)\s+\w+/i,
    description_tr: "'interested at/on/for' (yanlış) → 'interested in'",
    example_wrong: "I'm interested at music.",
    example_right: "I'm interested in music.",
    reason_tr: "'Interested IN' sabit kalıp.",
    weight: 4,
  },
  {
    id: "explain-me",
    category: "preposition",
    detector: /\bexplain\s+(me|him|her|us|them|you)\s+/i,
    description_tr: "'explain me' (yanlış) → 'explain to me'",
    example_wrong: "Can you explain me this?",
    example_right: "Can you explain this to me?",
    reason_tr:
      "Türkçe 'bana açıkla' direkt obje yapısı; İngilizcede 'explain TO someone'.",
    weight: 4,
  },
  {
    id: "say-me",
    category: "preposition",
    detector: /\bsay\s+(me|him|her|us|them)\s+/i,
    description_tr: "'say me' (yanlış) → 'tell me' veya 'say to me'",
    example_wrong: "Say me the truth.",
    example_right: "Tell me the truth.",
    reason_tr:
      "'Say' direkt obje (kişi) almaz. Birine bir şey söylemek için 'TELL'. Veya 'say TO someone'.",
    weight: 4,
  },
  {
    id: "very-much-like",
    category: "word-order",
    detector: /\bi\s+(like|love|enjoy|hate)\s+very\s+much\s+\w+/i,
    description_tr: "'I like very much X' (yanlış) → 'I like X very much'",
    example_wrong: "I like very much coffee.",
    example_right: "I like coffee very much.",
    reason_tr:
      "'Very much' nesneyi takip eder: 'I like [object] very much'. Fiilden hemen sonra gelmez.",
    weight: 3,
  },

  // ----- FALSE FRIENDS -----
  {
    id: "actual-current",
    category: "false-friend",
    detector: /\bactual\s+(year|month|week|situation|government|president|state)\b/i,
    description_tr: "'actual = aktüel/güncel' yanlış. → 'current'",
    example_wrong: "The actual situation is bad.",
    example_right: "The current situation is bad.",
    reason_tr:
      "İngilizce 'actual' = 'gerçek'. Türkçe 'aktüel/güncel' için 'current' kullan.",
    weight: 3,
  },
  {
    id: "eventually-eventually",
    category: "false-friend",
    detector: /\beventually\s+(i|we|they)\s+(will|can|might)\b/i,
    description_tr: "'eventually' = 'sonunda', 'belki' değil",
    example_wrong: "Eventually I'll come (Türk anlamıyla 'belki')",
    example_right: "Maybe I'll come (belki) — 'eventually' = en sonunda.",
    reason_tr:
      "Türkçe 'eventually'i 'belki' sanma — 'sonunda, en nihayetinde' demek. 'Belki' için 'maybe'/'perhaps'.",
    weight: 2,
  },

  // ----- COUNTABILITY EXTRA -----
  {
    id: "many-money",
    category: "false-cognate",
    detector: /\bmany\s+(money|water|time|food|sugar|salt|coffee|tea|milk|bread)\b/i,
    description_tr: "'many money' (yanlış) → 'much money'",
    example_wrong: "I don't have many money.",
    example_right: "I don't have much money.",
    reason_tr:
      "Sayılabilir → 'many'. Sayılamayan (money, water, time, sugar) → 'much'.",
    weight: 4,
  },
  {
    id: "few-water",
    category: "false-cognate",
    detector: /\b(a\s+)?few\s+(money|water|time|food|sugar|salt|coffee|tea|milk|bread|sand|air)\b/i,
    description_tr: "'(a) few water' (yanlış) → '(a) little water'",
    example_wrong: "I have few money.",
    example_right: "I have a little money.",
    reason_tr: "Sayılabilir → 'few'. Sayılamayan → 'little' veya 'a little'.",
    weight: 3,
  },

  // ----- DURATION / TIME -----
  {
    id: "during-five-hours",
    category: "preposition",
    detector: /\bduring\s+\d+\s+(hours?|minutes?|days?|weeks?|months?|years?)\b/i,
    description_tr: "'during 5 hours' (yanlış) → 'for 5 hours'",
    example_wrong: "I waited during 5 hours.",
    example_right: "I waited for 5 hours.",
    reason_tr:
      "'During' bir period içinde anlamı (during the meeting). Süre için 'FOR'.",
    weight: 3,
  },
  {
    id: "until-now-perfect",
    category: "tense",
    detector: /\b(i|we|they|she|he)\s+(work|live|study|do|am|is|are)\s+here\s+until\s+now\b/i,
    description_tr: "'I work here until now' (yanlış) → 'I have been working here until now'",
    example_wrong: "I work here until now.",
    example_right: "I have been working here until now.",
    reason_tr:
      "Şimdiye kadar süregelen → present perfect. 'Until now' present simple ile tutarsız.",
    weight: 4,
  },

  // ----- IDIOMATIC / FIXED EXPRESSIONS -----
  {
    id: "in-internet",
    category: "preposition",
    detector: /\bin\s+(the\s+)?internet\b/i,
    description_tr: "'in the internet' (yanlış) → 'on the internet'",
    example_wrong: "I found it in the internet.",
    example_right: "I found it on the internet.",
    reason_tr: "Internet 'in' değil 'on' alır. 'On the internet', 'on Facebook', 'on YouTube'.",
    weight: 3,
  },
  {
    id: "go-to-shopping",
    category: "preposition",
    detector: /\bgo\s+to\s+shopping\b/i,
    description_tr: "'go to shopping' (yanlış) → 'go shopping'",
    example_wrong: "I want to go to shopping.",
    example_right: "I want to go shopping.",
    reason_tr:
      "'Go shopping' fixed kalıp, prep yok. Aynı: 'go swimming', 'go fishing'.",
    weight: 4,
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
  // 2026-05-26 (P0 audit fix) — MISTAKE_PATTERNS listesinde 7 duplicate id
  // tespit edildi (make-photo, open-light, listen-music, explain-me,
  // people-is, actual-current, make-decision*). Aynı patternId'nin iki
  // farklı detector ile aynı text'i match etmesi `hits[]`'i şişiriyor →
  // mistake-tracker recordUserText tek hatayı 2 kez sayıyor → IELTS
  // grammar score ve drill priorities bozulur. Runtime dedupe: bir
  // patternId için ilk match yeterli.
  const seenIds = new Set<string>();

  for (const pattern of MISTAKE_PATTERNS) {
    if (seenIds.has(pattern.id)) continue;
    try {
      if (pattern.detector instanceof RegExp) {
        const m = text.match(pattern.detector);
        if (m && m[0]) {
          seenIds.add(pattern.id);
          hits.push({ patternId: pattern.id, matchedSubstring: m[0] });
        }
      } else {
        // Functional detector — receives the raw text, returns boolean.
        if (pattern.detector(text)) {
          seenIds.add(pattern.id);
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
 *
 * 2026-05-26 — `.find` ilk match'i döner; duplicate id'lerden ilki kullanılır
 * (genelde daha eski tanımlanan, ya da daha yüksek weight'li olanı). Bu UI
 * için tutarlı sonuç verir — drift olursa pattern listesi cleanup edilmeli.
 */
export function getPattern(patternId: string): MistakePattern | undefined {
  return MISTAKE_PATTERNS.find((p) => p.id === patternId);
}
