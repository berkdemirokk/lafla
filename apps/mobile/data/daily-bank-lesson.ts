// Daily - Bank lessons
// Skill: daily.bank (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 30.1 — ATM'de Para Çekme
// ============================================================
export const dailyBankLesson_30_1: BundledLesson = {
  id: "daily.bank.30.1",
  skill_id: "daily.bank",
  index: 1,
  title: "ATM'de Para Çekme",
  description:
    "ATM önünde kart sıkıştı, PIN reddedildi, bakiye yetersiz — şubedeki gişe memuruyla hızlıca çöz.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.db30.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "withdraw",
      tr_translation: "Para çekmek",
      example: "I'd like to withdraw two hundred dollars, please.",
      example_tr: "İki yüz dolar çekmek istiyorum, lütfen.",
    },
    {
      id: "ex.db30.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "ATM kartımı yuttu — şifreyi üç kere yanlış girdim.",
      target: "The ATM ate my card — I entered the wrong PIN three times.",
      accepted_variants: [
        "The machine swallowed my card after three wrong PINs.",
        "ATM kept my card — three failed PIN attempts.",
        "Card got stuck in the ATM after I mistyped the PIN.",
        "My card was retained by the ATM — wrong PIN three times.",
      ],
      tr_hint:
        "'Ate / swallowed / retained' = ATM kartı tuttu. 'PIN' = şifre. 'Three times' = üç kez.",
    },
    {
      id: "ex.db30.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you check my account ___, please?",
      answer: "balance",
      distractors: ["money", "amount", "total", "number"],
      tr_hint:
        "'Account balance' = hesap bakiyesi. Sabit kalıp — başka kelime gelmiyor.",
    },
    {
      id: "ex.db30.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "My",
        "card",
        "was",
        "declined",
        "at",
        "the",
        "ATM",
      ],
      correct_sentence: "My card was declined at the ATM",
      tr_translation: "Kartım ATM'de reddedildi.",
    },
    {
      id: "ex.db30.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want take money from machine.",
      correct_sentence:
        "I'd like to withdraw some cash from the ATM, please.",
      tr_explanation:
        "'I want' kaba; 'I'd like' kibar. 'Take money' yerine 'withdraw cash' bankacılık terimi. 'Machine' yerine 'ATM' standart.",
    },
    {
      id: "ex.db30.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ATM kartını yuttu, şubeye girdin. Gişe memuruna durumu anlat.",
      npc_role: "Bank teller",
      setting: "Bank branch counter",
      turns: [
        {
          speaker: "npc",
          message: "Good morning! How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(the )?atm (ate|swallowed|kept|took|retained) my card",
            "my card (got )?(stuck|jammed) in the atm",
            "(i )?(entered|put in) (the )?wrong pin",
            "(could|can) (you|i) (help|get my card back)",
          ],
          hint_tr:
            "Durumu açıkla: 'Hi, the ATM ate my card — wrong PIN three times.'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. Can I see your ID? I'll need to verify your account.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|here you go|here it is)",
            "(here'?s my (id|passport|driver'?s license))",
            "(my account number is|account is under)",
            "(how long (will|does) (it|this) take)",
            "(can i (still )?(withdraw|get) (some )?cash)",
          ],
          hint_tr:
            "Kibar onay + ek soru: 'Here's my ID. Can I still withdraw cash today?'",
        },
        {
          speaker: "npc",
          message:
            "Thanks. Your card will be cancelled — we'll order a new one. Meanwhile, I can do a cash withdrawal here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i withdraw (two hundred|300|500|some cash)",
            "(i'd like|i would like) to (withdraw|take out)",
            "(can i get) \\$?(\\d+) (in cash|please)",
            "(two hundred|three hundred|five hundred) (dollars|please)",
            "(when (will|does)) (the )?(new card|replacement) (arrive|come)",
          ],
          hint_tr:
            "Para çekme miktarı söyle: 'Could I withdraw two hundred dollars, please?'",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Two hundred coming right up — and your new card will arrive in five to seven business days.",
        },
      ],
    },
    {
      id: "ex.db30.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ATM kartın yuttu, en doğru söyleyiş?",
          options: [
            "The ATM took my card forever.",
            "Machine eat card.",
            "The ATM swallowed my card.",
            "ATM is hungry now.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Swallowed' veya 'ate' = ATM kartı içeride tuttu. 'Retained' de resmi.",
        },
        {
          question: "'PIN' İngilizce'de tam olarak ne demek?",
          options: [
            "Personal Information Number",
            "Personal Identification Number",
            "Private Identity Number",
            "Public ID Number",
          ],
          correct_index: 1,
          tr_explanation:
            "PIN = Personal Identification Number. Şifre olarak kullanılır.",
        },
        {
          question: "Kart reddedildi — en kibar şikâyet?",
          options: [
            "My card not working!",
            "Card is broken.",
            "My card was declined — could you check why?",
            "I have no money.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Was declined' = pasif, kibar. 'Could you check' = yardım rica.",
        },
      ],
    },
    {
      id: "ex.db30.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "The ATM swallowed my card.",
      ipa: "/ði ˌeɪ tiː ˈɛm ˈswɒləʊd maɪ kɑːrd/",
      tr_hint:
        "'ATM' harf harf: 'ey-ti-em'. 'Swallowed' = 'sva-loud'. 'My card' bağlanır.",
    },
    {
      id: "ex.db30.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Hi, the ATM ate my card — I entered the wrong PIN three times.",
      voice_hint: "female_us",
      tr_hint:
        "Banka şubesinde tipik açılış. 'Ate my card' bağlanır = 'eyt-may-kard'. PIN = 'pin' kısa.",
    },
    {
      id: "ex.db30.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Your card will be cancelled — we'll order a new one. Five to seven business days.",
      transcription_target:
        "Your card will be cancelled — we'll order a new one. Five to seven business days.",
      tr_hint:
        "Banka memuru standart cevap. 'Will be cancelled' = pasif. 'Business days' = iş günü.",
    },
    {
      id: "ex.db30.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "is there any way",
      tr_translation: "Bir yolu var mı?",
      example: "Is there any way to get my card back today?",
      example_tr: "Bugün kartımı geri almanın bir yolu var mı?",
    },
    {
      id: "ex.db30.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I need to get money from my account in cash.",
      correct_sentence: "I'd like to withdraw some cash, please.",
      tr_explanation:
        "'Get money from my account in cash' direkt çeviri ve uzun. Bankacılıkta sabit kalıp: 'withdraw cash' (= nakit çek). 'I'd like' kibar.",
    },
  ],
};

// ============================================================
// Lesson 30.2 — Hesap Açma
// ============================================================
export const dailyBankLesson_30_2: BundledLesson = {
  id: "daily.bank.30.2",
  skill_id: "daily.bank",
  index: 2,
  title: "Hesap Açma",
  description:
    "Yeni bankada hesap aç: gerekli belgeler, hesap tipi, döviz, ekstre — şube memuruyla işlem.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.db30.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "open an account",
      tr_translation: "Hesap açmak",
      example: "I'd like to open a checking account, please.",
      example_tr: "Bir vadesiz hesap açmak istiyorum, lütfen.",
    },
    {
      id: "ex.db30.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir tasarruf hesabı açmak istiyorum — hangi belgeler lazım?",
      target: "I'd like to open a savings account — what documents do I need?",
      accepted_variants: [
        "Looking to open a savings account — what's required?",
        "Could I open a savings account? What do I bring?",
        "I want to set up a savings account — what documents are needed?",
        "Open a savings account, please — which documents?",
      ],
      tr_hint:
        "'Savings account' = tasarruf / birikim hesabı. 'Checking account' = vadesiz, günlük.",
    },
    {
      id: "ex.db30.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get monthly ___ by email, please?",
      answer: "statements",
      distractors: ["balances", "reports", "letters", "papers"],
      tr_hint:
        "'Bank statement' = aylık hesap özeti / ekstre. 'Statements' çoğul.",
    },
    {
      id: "ex.db30.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Does",
        "the",
        "account",
        "come",
        "with",
        "a",
        "debit",
        "card",
      ],
      correct_sentence: "Does the account come with a debit card",
      tr_translation: "Hesap banka kartı ile birlikte mi geliyor?",
    },
    {
      id: "ex.db30.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want make new account in your bank.",
      correct_sentence:
        "I'd like to open an account with your bank, please.",
      tr_explanation:
        "'Make account' yanlış — 'open an account' standart. 'In your bank' yerine 'with your bank' doğal. 'I want' kaba; 'I'd like' kibar.",
    },
    {
      id: "ex.db30.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şubeye geldin, ilk kez bu bankada hesap açacaksın. Memurla görüş.",
      npc_role: "Bank associate",
      setting: "Account opening desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi there! What brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(i'd like|i would like|i want) to open (a|an) (checking|savings) account",
            "(looking to|interested in) (open|opening) (a|an) account",
            "(could i|can i) (open|set up) (a|an) account",
            "(new (customer|account))",
          ],
          hint_tr:
            "Net giriş: 'Hi, I'd like to open a checking account.'",
        },
        {
          speaker: "npc",
          message:
            "Great — checking or savings? Or both? And what documents have you brought?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(checking|savings|both)",
            "(just (a )?(checking|savings))",
            "(i have|i brought|here'?s) my (passport|id|driver'?s license)",
            "(proof of address|utility bill|lease)",
            "(social security|ssn|tax id)",
            "(what (else )?(do (i|you) need|is required))",
          ],
          hint_tr:
            "Hesap tipi + belgeler: 'Checking, please. I have my passport and proof of address.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Any preference on currency — dollars only, or multi-currency?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dollars (only|please)|usd only)",
            "(multi[- ]currency|multiple currencies)",
            "(do you offer|is there) (a )?(euro|gbp|tl|turkish lira) account",
            "(could i (also )?have) (a|an) (euro|usd|gbp) account",
            "(just dollars (is fine|for now))",
          ],
          hint_tr:
            "Para birimi: 'Dollars only, please' veya 'Multi-currency, if possible'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Last thing — would you like paper statements mailed, or email statements only?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(email (statements )?(only|please))",
            "(paper (statements )?(please|by mail))",
            "(could i get|i'd like) (monthly )?statements? (by|via) email",
            "(no paper|skip the paper)",
            "(digital only|paperless)",
          ],
          hint_tr:
            "Ekstre tercih: 'Email statements only, please' veya 'Paperless, please.'",
        },
        {
          speaker: "npc",
          message:
            "All set. Your debit card will arrive in seven to ten business days. Welcome aboard!",
        },
      ],
    },
    {
      id: "ex.db30.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Checking account' ile 'savings account' farkı?",
          options: [
            "Aynı şey, sadece banka değişir.",
            "Checking = günlük harcama, savings = birikim + faiz.",
            "Checking = nakit, savings = kart.",
            "Savings'in adı checking'in çoğul hali.",
          ],
          correct_index: 1,
          tr_explanation:
            "Checking = vadesiz, sık çekim. Savings = vadeli benzeri, faiz var, çekim sınırlı.",
        },
        {
          question: "Hesap açarken EN gerekli belge?",
          options: [
            "Sadece para",
            "Photo ID (passport/license) + proof of address",
            "Sadece SSN",
            "Hiçbir şey",
          ],
          correct_index: 1,
          tr_explanation:
            "ID + adres kanıtı (utility bill / lease) zorunlu. SSN/TIN ABD'de ek olarak istenir.",
        },
        {
          question: "'Statement' bankacılıkta ne anlama gelir?",
          options: [
            "Resmi açıklama",
            "Hesap ekstresi — işlemlerin aylık özeti",
            "Hesap numarası",
            "Şifre talebi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bank statement' = aylık ekstre, gelir-gider hareketleri.",
        },
      ],
    },
    {
      id: "ex.db30.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to open a checking account.",
      ipa: "/aɪd laɪk tu ˈəʊpən ə ˈtʃɛkɪŋ əˈkaʊnt/",
      tr_hint:
        "'I'd' = 'ayd' kısa. 'Open a' bağlanır = 'oupı-nı'. 'Account' = 'ı-kaunt'.",
    },
    {
      id: "ex.db30.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "I'd like to open a savings account — what documents do I need?",
      voice_hint: "female_us",
      tr_hint:
        "Şube önünde sakin ton. 'Savings' = 'sey-vingz'. 'Documents' = 'do-kyu-mıntz'.",
    },
    {
      id: "ex.db30.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "You'll need a photo ID, proof of address, and a minimum deposit of 25 dollars.",
      transcription_target:
        "You'll need a photo ID, proof of address, and a minimum deposit of 25 dollars.",
      tr_hint:
        "Banka memuru gereklilik listesi. 'You'll need' = 'yul-nid'. 'Photo ID' = 'fou-tov-ay-di'.",
    },
    {
      id: "ex.db30.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "have you got",
      tr_translation: "(Sende) var mı?",
      example: "Have you got online banking with this account?",
      example_tr: "Bu hesapla birlikte internet bankacılığı var mı?",
    },
    {
      id: "ex.db30.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to do an account in your bank.",
      correct_sentence: "I'd like to open an account with your bank.",
      tr_explanation:
        "'Do an account' yanlış — Türkçe 'hesap yapmak' kalıbından. Doğru: 'open an account'. 'In your bank' yerine 'with your bank' doğal. 'I want' yerine 'I'd like'.",
    },
  ],
};

// ============================================================
// Lesson 30.3 — Para Gönderme / Havale
// ============================================================
export const dailyBankLesson_30_3: BundledLesson = {
  id: "daily.bank.30.3",
  skill_id: "daily.bank",
  index: 3,
  title: "Para Gönderme / Havale",
  description:
    "Yurtdışına para gönder: wire transfer, IBAN, transfer ücreti, alıcı bilgisi — gişede işlem.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.db30.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "wire transfer",
      tr_translation: "Banka havalesi (özellikle uluslararası)",
      example: "I'd like to send a wire transfer to Turkey.",
      example_tr: "Türkiye'ye havale göndermek istiyorum.",
    },
    {
      id: "ex.db30.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Türkiye'deki kardeşime havale göndermem lazım — IBAN'ı var.",
      target: "I need to send a wire to my brother in Turkey — I have his IBAN.",
      accepted_variants: [
        "Sending money to my brother in Turkey — got the IBAN.",
        "Wire transfer to Turkey, please — recipient is my brother. I have his IBAN.",
        "Need a wire to Turkey — to my brother, IBAN ready.",
        "I'd like to wire money to my brother in Turkey. Here's his IBAN.",
      ],
      tr_hint:
        "'Wire' kısaltma 'wire transfer'. 'Recipient' = alıcı. 'IBAN' İngilizce'de de aynı.",
    },
    {
      id: "ex.db30.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's the transfer ___ for international wires?",
      answer: "fee",
      distractors: ["cost", "price", "money", "tax"],
      tr_hint:
        "'Transfer fee' = havale ücreti. Bankacılıkta sabit kalıp.",
    },
    {
      id: "ex.db30.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "The",
        "recipient's",
        "name",
        "is",
        "spelled",
        "exactly",
        "as",
        "on",
        "the",
        "passport",
      ],
      correct_sentence:
        "The recipient's name is spelled exactly as on the passport",
      tr_translation: "Alıcının adı pasaporttaki gibi tam olarak yazıldı.",
    },
    {
      id: "ex.db30.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want send money my friend Turkey.",
      correct_sentence:
        "I'd like to send a wire transfer to my friend in Turkey.",
      tr_explanation:
        "'Send money my friend Turkey' eksik edatlı — 'to my friend in Turkey' doğru. 'Wire transfer' bankacılık terimi. 'I'd like' kibar.",
    },
    {
      id: "ex.db30.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şubedesin, ailene Türkiye'ye havale göndereceksin. Memur işlemi başlatıyor.",
      npc_role: "Bank teller",
      setting: "Wire transfer desk",
      turns: [
        {
          speaker: "npc",
          message: "Hello! How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(i'd like|i would like|i want|i need) to (send|do|make) (a )?(wire|wire transfer|international transfer)",
            "(sending money|transfer money) (abroad|to turkey|overseas)",
            "(could i|can i) (send|wire) (money|funds)",
            "(international transfer)",
          ],
          hint_tr:
            "Net: 'Hi, I'd like to send a wire transfer to Turkey.'",
        },
        {
          speaker: "npc",
          message:
            "Sure. I'll need the recipient's full name, bank, and IBAN.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|here you go)",
            "(the recipient'?s name is|recipient is)",
            "(his|her) (name is|full name)",
            "(the iban is|iban:?)",
            "(it'?s spelled|spelled like (on|in) the passport)",
            "(let me (spell|read) it (out|for you))",
          ],
          hint_tr:
            "Detayları ver: 'Recipient's name is Ali Yilmaz, exactly as on his passport. IBAN is TR...'",
        },
        {
          speaker: "npc",
          message:
            "Got it. The amount and currency? And purpose of the transfer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\$?\\d+|five hundred|one thousand|two thousand) (dollars|usd|euros|eur)",
            "(in (usd|dollars|euros|eur|try|turkish lira))",
            "(family support|gift|tuition|rent|personal expenses)",
            "(it'?s for|the purpose is)",
            "(send|make it) (in|as) (dollars|euros)",
          ],
          hint_tr:
            "Miktar + para birimi + amaç: 'Five hundred USD — family support.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. The transfer fee is forty dollars. Funds will arrive in two to three business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|okay|that works|alright)",
            "(any (other )?fees|hidden charges)",
            "(could i get|can i have) (a )?(receipt|confirmation)",
            "(could you|can you) (email|text) (me )?(the )?(receipt|confirmation)",
            "(is there a (cheaper|faster) option)",
            "(thank you|thanks|appreciate it)",
          ],
          hint_tr:
            "Onay + makbuz: 'Sounds good. Could I get a receipt by email?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — I'll email the confirmation. Have a great day!",
        },
      ],
    },
    {
      id: "ex.db30.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'IBAN' kısaltması ne demek?",
          options: [
            "International Bank Account Number",
            "Internal Bank Address Number",
            "Inter-Bank Authorization Number",
            "Identified Bank Access Number",
          ],
          correct_index: 0,
          tr_explanation:
            "IBAN = International Bank Account Number, uluslararası standart hesap numarası.",
        },
        {
          question: "Wire transfer için bankacının soracağı EN kritik bilgi?",
          options: [
            "Sadece IBAN",
            "Alıcının tam adı (pasaportta nasıl yazıldığı) + IBAN + miktar + amaç",
            "Sadece miktar",
            "Sadece banka adı",
          ],
          correct_index: 1,
          tr_explanation:
            "Eksik bilgi = transfer döner. Tam isim pasaport ile birebir aynı olmalı.",
        },
        {
          question: "'Transfer fee' ne demek?",
          options: [
            "Havale tutarı",
            "Havale ücreti — bankanın aldığı komisyon",
            "Alıcının bankası",
            "Para birimi",
          ],
          correct_index: 1,
          tr_explanation:
            "Fee = ücret. Uluslararası wire transfer'da $20–$50 arası komisyon olağan.",
        },
      ],
    },
    {
      id: "ex.db30.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to send a wire transfer to Turkey.",
      ipa: "/aɪd laɪk tu sɛnd ə ˈwaɪər ˈtrænsfɜːr tu ˈtɜːki/",
      tr_hint:
        "'Wire' = 'vayr', tek hece. 'Transfer' vurgu ilk hecede: 'TRANS-fır'. 'To Turkey' = 'tı-tör-ki'.",
    },
    {
      id: "ex.db30.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "The recipient's name is spelled exactly as on the passport, and here's the IBAN.",
      voice_hint: "male_us",
      tr_hint:
        "'Recipient's' = 'ri-si-pıntz'. 'Exactly as on the' bağlanır. IBAN = harf harf 'ay-bi-ey-en'.",
    },
    {
      id: "ex.db30.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "The transfer fee is forty dollars and funds will arrive in two to three business days.",
      transcription_target:
        "The transfer fee is forty dollars and funds will arrive in two to three business days.",
      tr_hint:
        "Banka memuru standart havale bilgisi. 'Funds will arrive' = 'fındz-vil-ı-rayv'. 'Business days' = iş günü.",
    },
    {
      id: "ex.db30.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "by any chance",
      tr_translation: "Bir ihtimal / acaba",
      example: "By any chance, could you waive the transfer fee?",
      example_tr: "Bir ihtimal, havale ücretinden vazgeçebilir misiniz?",
    },
    {
      id: "ex.db30.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want to send money to my friend who lives in Turkey by wire.",
      correct_sentence:
        "I'd like to wire money to my friend in Turkey.",
      tr_explanation:
        "Uzun + 'by wire' yanlış edat — 'wire' fiil olarak kullanılır: 'to wire money'. 'Who lives in' fazla; 'in Turkey' yeterli. 'I'd like' kibar standart.",
    },
  ],
};

// ============================================================
// Lesson 30.4 — Kart Sorunları
// ============================================================
export const dailyBankLesson_30_4: BundledLesson = {
  id: "daily.bank.30.4",
  skill_id: "daily.bank",
  index: 4,
  title: "Kart Sorunları",
  description:
    "Kart kayboldu, bloke edildi, dolandırıcılık şüphesi — banka müşteri hizmetlerini arayıp çöz.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.db30.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "lost my card",
      tr_translation: "Kartımı kaybettim",
      example: "Hi, I've lost my debit card — I need to report it.",
      example_tr: "Merhaba, banka kartımı kaybettim — bildirmem lazım.",
    },
    {
      id: "ex.db30.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kartım bloke edildi — bilmediğim bir işlem görmüşler.",
      target: "My card has been blocked — they flagged a transaction I don't recognize.",
      accepted_variants: [
        "Card got blocked over a transaction I didn't make.",
        "My debit card is frozen — there's a charge I don't recognize.",
        "Bank blocked my card after a suspicious transaction.",
        "Got a freeze on my card — unfamiliar charge flagged.",
      ],
      tr_hint:
        "'Blocked / frozen' = bloke. 'Flagged' = işaretledi. 'Don't recognize' = bilmiyorum.",
    },
    {
      id: "ex.db30.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like to ___ a replacement card, please.",
      answer: "order",
      distractors: ["buy", "make", "send", "request"],
      tr_hint:
        "'Order a replacement card' = yeni kart sipariş et. Bankacılıkta standart kalıp.",
    },
    {
      id: "ex.db30.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "There's",
        "a",
        "charge",
        "I",
        "don't",
        "recognize",
      ],
      correct_sentence: "There's a charge I don't recognize",
      tr_translation: "Tanımadığım bir işlem var.",
    },
    {
      id: "ex.db30.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Someone stoled money from my card!",
      correct_sentence:
        "There's a fraudulent charge on my card — I'd like to dispute it.",
      tr_explanation:
        "'Stoled' yanlış — 'stole' düzgün; ama bankacılıkta 'fraudulent charge' + 'dispute it' standart. 'Money from card' belirsiz.",
    },
    {
      id: "ex.db30.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Banka kartını kaybettin, müşteri hizmetlerini aradın. Acil olarak iptal + yeni kart iste.",
      npc_role: "Customer service rep",
      setting: "Bank customer service hotline",
      turns: [
        {
          speaker: "npc",
          message:
            "Thank you for calling. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning|good afternoon)",
            "(i've |i have )?lost my (debit|credit|bank) card",
            "(my card (is )?(missing|gone|stolen))",
            "(i need to (report|cancel|block)) (my card|a lost card)",
            "(could you|can you) (block|cancel|freeze) my card",
          ],
          hint_tr:
            "Net giriş: 'Hi, I've lost my debit card — I need to block it.'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. For security, can I get your full name and date of birth?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|absolutely)",
            "(my name is|full name is|i'?m) [a-z]+ [a-z]+",
            "(date of birth is|dob is|born on)",
            "(my (account|customer) number is)",
            "(would you like) (the last (four|4) digits|account number)",
          ],
          hint_tr:
            "Kimlik onayı: 'Of course. My name is Berk Yilmaz, date of birth July third, 1990.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks. I see two recent charges — one for forty dollars at a gas station, one for two hundred online. Do you recognize either?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t recognize)( either| (any of )?them| that charge)?",
            "(those (aren'?t|are not) mine)",
            "(the (gas|online) one (isn'?t|is not) mine)",
            "(i didn'?t make (that|those) (purchase|charges?))",
            "(that'?s (fraud|fraudulent|unauthorized))",
            "(i'd like to dispute (both|those|that charge))",
          ],
          hint_tr:
            "İtiraz: 'I don't recognize either — I'd like to dispute both as fraud.'",
        },
        {
          speaker: "npc",
          message:
            "Got it — I'll block the card and open a fraud dispute. Would you like a replacement card mailed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yes please|absolutely|that would be great)",
            "(could i get|can i have) (a )?(replacement|new card)",
            "(how (long|many days) (will|does) (it|that) take)",
            "(any (way|chance) to (rush|expedite) it)",
            "(could you (overnight|expedite|rush) it)",
            "(send it to (my )?(home|address on file))",
          ],
          hint_tr:
            "Onay + hız: 'Yes please — any way to expedite the replacement?'",
        },
        {
          speaker: "npc",
          message:
            "We can expedite for ten dollars — arrives in two business days. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|that works|okay|alright)",
            "(yes (please|expedite))",
            "(no thanks|standard is fine)",
            "(could you (email|text) me )?(the confirmation|a reference number)",
            "(thank you|thanks|appreciate (it|the help))",
          ],
          hint_tr:
            "Onay + referans: 'Sounds good. Could you text me a reference number? Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "Of course — reference number coming by text. Stay safe!",
        },
      ],
    },
    {
      id: "ex.db30.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kart kaybedildi — ilk söylenmesi gereken?",
          options: [
            "I want a new card.",
            "Hi, I've lost my card — please block it.",
            "My card disappeared.",
            "Card no good.",
          ],
          correct_index: 1,
          tr_explanation:
            "Önce 'lost my card' + 'block it' — güvenlik için kartı dondurmak öncelik.",
        },
        {
          question: "'Dispute a charge' ne anlama gelir?",
          options: [
            "Borcu öde",
            "İşleme itiraz et — yapılmadığını veya hatalı olduğunu söyle",
            "Kartı kapat",
            "Yeni kart iste",
          ],
          correct_index: 1,
          tr_explanation:
            "Dispute = işleme itiraz. Bankalar dispute'ı araştırır, hak veriyorsa parayı iade eder.",
        },
        {
          question: "'Replacement card' ne demek?",
          options: [
            "İkinci el kart",
            "Yeni / yedek kart — eski kart kaybolduğunda veya iptal olduğunda gelen",
            "Tatil kartı",
            "Sahte kart",
          ],
          correct_index: 1,
          tr_explanation:
            "Replacement = yenisi. Kart kaybolur/iptal olur — banka yeni kart yollar (5–10 iş günü).",
        },
      ],
    },
    {
      id: "ex.db30.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "There's a charge I don't recognize.",
      ipa: "/ðɛərz ə tʃɑːrdʒ aɪ dəʊnt ˈrɛkəɡnaɪz/",
      tr_hint:
        "'There's a' = 'derz-ı' bağlanır. 'Charge' = 'çardz'. 'Recognize' vurgu ilk hecede: 'REK-ığ-nayz'.",
    },
    {
      id: "ex.db30.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Hi, I've lost my debit card — could you block it and order a replacement?",
      voice_hint: "female_us",
      tr_hint:
        "Acil duruma uygun ton, hızlı ama net. 'I've lost' = 'ayv-lost'. 'Order a' bağlanır.",
    },
    {
      id: "ex.db30.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I'll block the card and open a fraud dispute. Your replacement arrives in two business days.",
      transcription_target:
        "I'll block the card and open a fraud dispute. Your replacement arrives in two business days.",
      tr_hint:
        "Banka müşteri hizmetleri standart cevap. 'Fraud dispute' = sahtekarlık itirazı. 'Replacement' = 'ri-pleys-mınt'.",
    },
    {
      id: "ex.db30.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "would you mind",
      tr_translation: "... yapmanın bir sakıncası olur mu?",
      example: "Would you mind expediting the replacement card?",
      example_tr: "Yeni kartı hızlandırmanızın bir sakıncası olur mu?",
    },
    {
      id: "ex.db30.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Someone make payment with my card without me!",
      correct_sentence:
        "There's an unauthorized charge on my card — I'd like to dispute it.",
      tr_explanation:
        "'Make payment without me' direkt Türkçe çeviri + 'make' yanlış fiil. Doğru bankacılık dili: 'unauthorized charge' (= izinsiz işlem) + 'dispute it' (= itiraz et). Sakin ton banka için kritik.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const dailyBankLessons: ReadonlyArray<BundledLesson> = [
  dailyBankLesson_30_1,
  dailyBankLesson_30_2,
  dailyBankLesson_30_3,
  dailyBankLesson_30_4,
];
