// Daily - Bank lessons
// Skill: daily.bank (4 lessons)

import type { BundledLesson } from "../lib/engine";

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
  id: "ex.daily_bank_30_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.1.1",
      type: "vocab_tile",
      cefr_band: "A2",
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
            "Sure. How would you like the bills — twenties, fifties, or a mix?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(twenties|fifties|a mix|mixed)( please)?",
            "(could|can) i (have|get) (it )?in (twenties|fifties|small bills)",
            "(mostly |a mix of )?(twenties|fifties)",
            "(whatever (works|you have))",
            "(small bills|smaller bills|big bills)( please)?",
            "(no preference|either is fine)",
          ],
          hint_tr:
            "Banknot: 'A mix, please' veya 'Mostly twenties, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Anything else while you're here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually )?(yes|yeah)(,)? (what'?s|whats) (the |your )?(exchange rate|conversion rate) for (try|turkish lira)",
            "(could|can) (you|i) (check|see) (the )?(exchange rate|conversion) (from|for) (try|usd)",
            "(do you|can you) (exchange|convert) (try|lira) to (usd|dollars)",
            "(how much is|what'?s) (.+) (try|lira) in (usd|dollars)",
            "(no|nope)(,)? (that'?s|thats) (it|all)",
            "(i'?m|i am) (also )?wondering about (the )?(exchange rate|conversion)",
          ],
          hint_tr:
            "Türk öğrenci klasik sorusu: 'Actually, what's the exchange rate for TRY to USD today?' ABD bankalarında TRY → USD nadiren tutulur ama dene.",
        },
        {
          speaker: "npc",
          message:
            "Sure, let me check — today's rate is around 32 lira to the dollar. We don't usually hold TRY, but I can point you to a currency exchange.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|that'?d be great)",
            "(yes|yeah)(,)? (that would help|that'?d help|please)",
            "(could|can) you (write down|share) (the address|where)",
            "(perfect|sounds good)(,)? thank you",
            "(no worries|got it)(,)? thanks",
          ],
          hint_tr:
            "Teşekkür + devam: 'Thanks, that'd help a lot' veya 'Could you write down the address?'",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Two hundred dollars and your new card will arrive in five to seven business days.",
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
      cefr_band: "B1",
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
    {
      id: "ex.db30.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ ___ from my account, please.",
      slots: [
        { accepted: ["withdraw", "take out", "transfer"], distractors: ["take", "get", "pull"] },
        { accepted: ["two hundred dollars", "some cash", "$200"], distractors: ["money", "cash money", "bill"] },
      ],
      tr_hint:
        "'I'd like to ___ ___' = bankacılıkta standart kibar kalıp. Slot 1 fiil ('withdraw'), slot 2 tutar/nesne. Türk öğrenci 'I want take money' yapıyor — yanlış.",
      example_filled: "I'd like to withdraw two hundred dollars from my account, please.",
    },
    {
      id: "ex.db30.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Good morning! How can I help you today?" },
        { speaker: "user" },
        { speaker: "npc", text: "I'm sorry to hear that. Can I see your ID?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello|good morning)(,)? (the )?atm (ate|swallowed|kept) my card",
        "my card (got )?stuck in the atm",
        "(could you|can you) help (me )?(get|retrieve) (it|my card)",
        "(i'd like|i'?m here) to (report|withdraw)",
      ],
      tr_hint:
        "Memur 'How can I help?' demis — net problem söyle. Selamlama + spesifik problem. 'Hi, the ATM ate my card' tipi direkt giriş.",
      ideal_answer: "Hi, the ATM ate my card — could you help me get it back?",
    },
    {
      id: "ex.db30.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How would you like the bills — twenties, fifties, or a mix?",
      accepted_patterns: [
        "(twenties|fifties|a mix|mixed)( please)?",
        "(could|can) i (have|get) (it )?in (twenties|fifties|small bills)",
        "(mostly |a mix of )?(twenties|fifties)",
        "(small bills|smaller bills)( please)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Banka memuru banknot seçimi soruyor — kısa pratik cevap. 'A mix, please' veya 'Mostly twenties, thanks'. Türk öğrenci uzun açıklar — gerek yok.",
      ideal_response: "A mix, please — mostly twenties.",
    },
    {
      id: "ex.db30.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Param yok, biraz çekmek istiyorum.",
      wrong_en: "I have no money, I want to take some.",
      right_en: "I'd like to withdraw some cash, please.",
      why_tr:
        "Türk öğrenci 'param yok' kalıbını direkt çevirir — 'I have no money' rica eden değil acındıran ton. Bankacılıkta sebep söylemezsin, 'I'd like to withdraw' standart formal kalıp. 'Take money' yerine 'withdraw'.",
    },
    {
      id: "ex.db30.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Withdraw' ne demek bankacılıkta?",
          options: [
            "Para yatırmak",
            "Para çekmek (hesaptan)",
            "Hesap kapatmak",
            "Kart bloke etmek",
          ],
          correct: 1,
          tr_explanation: "'Withdraw' = hesaptan para çek (ATM veya gişeden). 'Deposit' = para yatır.",
        },
        {
          q: "ATM kart yuttu — kibar ilk cümle?",
          options: [
            "Machine eat my card!",
            "Hi, the ATM ate my card — could you help?",
            "Give me my card back.",
            "Card stuck!",
          ],
          correct: 1,
          tr_explanation: "'Ate / swallowed' = yuttu (pasif). 'Could you help' = yardım rica. Kibar + net.",
        },
        {
          q: "'Could I have it in twenties?' ne demek?",
          options: [
            "Yirmi tane verir misin?",
            "20 dolarlık banknotlar halinde verir misin?",
            "Yirmi yaş için verir misin?",
            "Yirmi dakika sonra?",
          ],
          correct: 1,
          tr_explanation: "'In twenties' = 20'lik banknotlar halinde. ATM/gişe için pratik kalıp.",
        },
        {
          q: "PIN tam olarak ne kısaltması?",
          options: [
            "Personal Identification Number",
            "Public Internet Number",
            "Private Item Number",
            "Personal Info Note",
          ],
          correct: 0,
          tr_explanation: "PIN = Personal Identification Number. Şifre olarak kullanılır.",
        },
        {
          q: "'Account balance' ne demek?",
          options: [
            "Hesap dengesi (psikolojik)",
            "Hesap bakiyesi — paranın güncel tutarı",
            "Hesap özeti",
            "Hesap numarası",
          ],
          correct: 1,
          tr_explanation: "'Balance' = hesaptaki para miktarı. 'Could you check my balance?' yaygın kalıp.",
        },
      ],
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
  id: "ex.daily_bank_30_2.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_2.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_2.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_2.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_2.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_2.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_2.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_2.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_2.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_2.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_2.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_2.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_2.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.2.1",
      type: "vocab_tile",
      cefr_band: "A2",
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
      cefr_band: "B1",
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
    {
      id: "ex.db30.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I'd like to open ___ ___ ___, please.",
      slots: [
        { accepted: ["a", "an"], distractors: ["the", "this", "one"] },
        { accepted: ["savings", "checking", "joint", "student"], distractors: ["savee", "check", "share"] },
        { accepted: ["account", "account with you"], distractors: ["bank", "money place", "card"] },
      ],
      tr_hint:
        "Hesap açma kibar standart kalıbı. Slot 2: hesap tipi (savings = birikim, checking = vadesiz). Türk öğrenci 'I want one savings' diyor — yanlış kalıp.",
      example_filled: "I'd like to open a savings account, please.",
    },
    {
      id: "ex.db30.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Welcome! How may I help you today?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure. May I see your ID and proof of address?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)(,)? (i'?d like|i want) to open (a |an )?(savings|checking|joint)? account",
        "(i'?m here|i came in) to open an account",
        "(i need|i'?d like) to (set up|start) (a )?new account",
        "(could you|can you) help me open (a |an )?account",
      ],
      tr_hint:
        "Müşteri temsilcisine resmî giriş: 'I'd like to open a savings account'. Türk öğrenci 'I want bank account' diyor — eksik kibarlık + tip belirtmeli.",
      ideal_answer: "Hi, I'd like to open a savings account with your bank.",
    },
    {
      id: "ex.db30.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Would you like a debit card with that account?",
      accepted_patterns: [
        "(yes|yeah|sure)(,)? (please|i would)",
        "(yes|yeah)(,)? (with )?(contactless|tap-to-pay)?",
        "(no|nope)(,)? (thanks|i'?ll pass)",
        "(do |what )?(does )?it (cost|have a fee)\\??",
      ],
      think_seconds: 3,
      tr_hint:
        "Memur ek hizmet teklif ediyor — kısa cevap. 'Yes, please' veya 'No, thanks'. Türk öğrenci uzun açıklama yapar — gereksiz. Sade evet/hayır + kibar.",
      ideal_response: "Yes, please — with contactless if possible.",
    },
    {
      id: "ex.db30.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Bana hesap açmak istiyorum.",
      wrong_en: "I want to make me account.",
      right_en: "I'd like to open an account, please.",
      why_tr:
        "'Make me account' Türkçe gramer — 'me' yanlış. 'Make account' = yap; doğru fiil 'open'. Resmî kurumda 'I'd like' > 'I want'. Türk öğrenci direkt çeviriyor — duyulduğunda göç hissi verir.",
    },
    {
      id: "ex.db30.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Savings account' ne demek?",
          options: [
            "Vadesiz hesap (günlük kullanım).",
            "Birikim/tasarruf hesabı.",
            "Kredi hesabı.",
            "Yatırım hesabı.",
          ],
          correct: 1,
          tr_explanation: "'Savings' = tasarruf. Faiz işler, sık para çekmen ayrı.",
        },
        {
          q: "'Checking account' farkı?",
          options: [
            "Tasarruf hesabı.",
            "Günlük işlem hesabı (debit card, ödemeler).",
            "Sadece kontrol için.",
            "Çek hesabı.",
          ],
          correct: 1,
          tr_explanation: "'Checking' = vadesiz, günlük kullanım. Türkiye'de 'vadesiz mevduat' karşılığı.",
        },
        {
          q: "'Proof of address' ne demek?",
          options: [
            "Adres kanıtı (fatura, kira sözleşmesi).",
            "Adres ezbere.",
            "Eski adres.",
            "Adres formu.",
          ],
          correct: 0,
          tr_explanation: "Hesap açmak için: kimlik + adres kanıtı. Genelde elektrik/internet faturası.",
        },
        {
          q: "'Open an account' yapısı?",
          options: [
            "Make an account — Türkçe'den.",
            "Open an account — İngilizce standart.",
            "Do an account.",
            "Create the account.",
          ],
          correct: 1,
          tr_explanation: "Bankacılıkta sabit kalıp: 'open' (aç). 'Make/do' yanlış. 'Create' digital servislerde kullanılır.",
        },
        {
          q: "'Debit card' kredi kartından farkı?",
          options: [
            "Aynı şey.",
            "Doğrudan hesaptan para çeker; kredi yok.",
            "Sadece online.",
            "Sadece nakit.",
          ],
          correct: 1,
          tr_explanation: "'Debit' = hesabından düş. 'Credit' = bankadan borçlan. Türkçe karşılık: bankamatik kartı vs kredi kartı.",
        },
      ],
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
  id: "ex.daily_bank_30_3.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_3.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_3.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_3.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_3.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_3.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_3.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_3.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_3.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_3.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_3.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_3.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_3.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.3.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B1",
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
    {
      id: "ex.db30.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I'd like to ___ ___ to ___ in ___.",
      slots: [
        { accepted: ["wire", "transfer", "send"], distractors: ["give", "make", "do"] },
        { accepted: ["$500", "five hundred dollars", "some money"], distractors: ["money money", "the money", "amount"] },
        { accepted: ["my brother", "an account", "a beneficiary"], distractors: ["my brother's", "brother of mine", "him"] },
        { accepted: ["Turkey", "Istanbul", "London", "Berlin"], distractors: ["the Turkey", "Turkey country", "Türkiye"] },
      ],
      tr_hint:
        "Havale standart kalıp. 'Wire/transfer' = fiil olarak kullan. Türk öğrenci 'I send money for' diyor — yanlış edat ('to' lazım). Ülke adı önünde 'the' yok.",
      example_filled: "I'd like to wire $500 to my brother in Turkey.",
    },
    {
      id: "ex.db30.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Wire transfer desk. How can I help you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Do you have the recipient's IBAN and SWIFT code?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)?(,)? (i'?d like|i want) to (wire|send|transfer) (some )?money",
        "(i need|i'?d like) to (make|do) (a |an )?(wire|international) transfer",
        "(could you|can you) help me (wire|send) (money|funds)? (abroad|overseas|to turkey)",
        "(i'?d like to|i need to) (transfer|send) (\\$)?\\d+ to",
      ],
      tr_hint:
        "Havale memurunan net giriş: 'I'd like to wire money to Turkey'. Türk öğrenci uzun açıklama yapar — gereksiz. Önce ne yapacağını söyle (wire), sonra detay (kim, ne kadar).",
      ideal_answer: "Hi, I'd like to wire $500 to my brother in Turkey.",
    },
    {
      id: "ex.db30.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "There's a 25-dollar fee for this transfer. Is that okay?",
      accepted_patterns: [
        "(yes|yeah|sure)(,)? (that'?s )?fine",
        "(yes|okay)(,)? (let'?s )?(go ahead|proceed)",
        "(is there )?(any )?(cheaper|lower fee|alternative)\\??",
        "(could you|can you) (waive|reduce|lower) (the |that )?fee\\??",
      ],
      think_seconds: 3,
      tr_hint:
        "Ücret onayı — kısa cevap. 'Yes, that's fine' veya 'Is there a cheaper option?'. Türk öğrenci uzun pazarlık yapar — bankada kabul edilmez. Net + kibar.",
      ideal_response: "Yes, that's fine — let's go ahead.",
    },
    {
      id: "ex.db30.3.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Kardeşime para yollamam lazım.",
      wrong_en: "I need send money for my brother.",
      right_en: "I need to wire some money to my brother.",
      why_tr:
        "'Need send' eksik infinitive — 'need to send'. 'For my brother' Türkçe ('için' = onun yararına). Doğru: 'to my brother' (alıcı). Bankacılıkta 'wire' fiili 'send' kadar yaygın.",
    },
    {
      id: "ex.db30.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wire money' ne demek?",
          options: [
            "Telle bağlamak.",
            "Banka havalesi yap (elektronik).",
            "Para sayma.",
            "Kablo çekme.",
          ],
          correct: 1,
          tr_explanation: "'Wire' burada fiil = havale/transfer. 'Wire money to Turkey' = Türkiye'ye havale yap.",
        },
        {
          q: "'IBAN' nedir?",
          options: [
            "Banka adresi.",
            "International Bank Account Number — hesap kodu.",
            "Banka şifresi.",
            "Müşteri numarası.",
          ],
          correct: 1,
          tr_explanation: "IBAN = uluslararası hesap numarası standardı. Havale için zorunlu.",
        },
        {
          q: "'Transfer fee' anlamı?",
          options: [
            "Havale ücreti (bankanın aldığı komisyon).",
            "Para transferi miktarı.",
            "Hesap ücreti.",
            "Kart yıllık ücreti.",
          ],
          correct: 0,
          tr_explanation: "'Fee' = ücret/komisyon. Bankalar havale için fee alır.",
        },
        {
          q: "'Waive the fee' ne demek?",
          options: [
            "Ücreti ödemek.",
            "Ücretten vazgeçmek (almamak).",
            "Ücreti azaltmak.",
            "Ücreti artırmak.",
          ],
          correct: 1,
          tr_explanation: "'Waive' = vazgeçmek (haktan). 'Could you waive the fee?' = ücretten vazgeçer misiniz?",
        },
        {
          q: "'SWIFT code' niye gerekir?",
          options: [
            "Hızlı internet kodu.",
            "Bankanın uluslararası kimliği (havale için).",
            "PIN.",
            "Hesap özeti.",
          ],
          correct: 1,
          tr_explanation: "SWIFT = bankanın global kimlik kodu. Uluslararası havalede zorunlu.",
        },
      ],
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
  id: "ex.daily_bank_30_4.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_4.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_4.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_4.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_4.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_4.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_4.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_4.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_4.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_4.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_4.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_4.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_4.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.4.1",
      type: "vocab_tile",
      cefr_band: "A2",
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
      cefr_band: "B2",
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
    {
      id: "ex.db30.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "My card ___ ___ — could you ___?",
      slots: [
        { accepted: ["isn't", "is not", "stopped"], distractors: ["don't", "not", "doesn't"] },
        { accepted: ["working", "going through", "being accepted"], distractors: ["work", "go", "use"] },
        { accepted: ["help me", "look into it", "check it"], distractors: ["fix", "do", "make"] },
      ],
      tr_hint:
        "Kart problemi standart cümle. 'Isn't working' = çalışmıyor. Türk öğrenci 'My card don't work' diyor — yanlış subject-verb. 'Could you help me' = kibar yardım rica.",
      example_filled: "My card isn't working — could you help me?",
    },
    {
      id: "ex.db30.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Customer service — how can I help?" },
        { speaker: "user" },
        { speaker: "npc", text: "I'm sorry. Let me check your account. Can I have your card number?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)?(,)? (my )?card (isn'?t|is not|stopped) working",
        "(my )?card (was )?(declined|blocked|rejected)",
        "(there'?s|i see) (an )?(unauthorized|suspicious) charge (on my card)?",
        "(i'?d like to|i need to) (report|dispute) (a |an )?(charge|transaction)",
      ],
      tr_hint:
        "Kart problemi raporu — net + kısa. 'My card isn't working' veya 'There's an unauthorized charge'. Türk öğrenci panikler ve uzun anlatır — gereksiz.",
      ideal_answer: "Hi, my card isn't working — it keeps getting declined.",
    },
    {
      id: "ex.db30.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "I can cancel your card and send a new one. Is that okay?",
      accepted_patterns: [
        "(yes|yeah|sure)(,)? (please|that'?d be great)",
        "(how long )?(does )?it (take|takes)\\??",
        "(could you|can you) (expedite|rush|speed up) (the |a )?(new card|delivery)\\??",
        "(yes|okay)(,)? (let'?s )?(do that|proceed|go ahead)",
      ],
      think_seconds: 3,
      tr_hint:
        "Memur kart iptali öneriyor — kabul + ek soru. Türk öğrenci 'yes' der ama soru sormaz. 'How long does it take?' veya 'Could you expedite it?' iyi sorular.",
      ideal_response: "Yes, please — how long does it take to arrive?",
    },
    {
      id: "ex.db30.4.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Kartım çalışmıyor, beni yardım edin.",
      wrong_en: "My card don't work, help me!",
      right_en: "My card isn't working — could you help me with it?",
      why_tr:
        "'Don't' yanlış (3. tekil 'doesn't' veya 'isn't'). 'Help me!' emir kipi — kabaca. Doğru kibar: 'Could you help me with it?' Subject-verb agreement çok önemli (card = it).",
    },
    {
      id: "ex.db30.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'My card was declined' ne demek?",
          options: [
            "Kartım reddedildi (işlem geçmedi).",
            "Kartım kabul edildi.",
            "Kartım eskidi.",
            "Kartım yandı.",
          ],
          correct: 0,
          tr_explanation: "'Decline' = reddetmek (banka kartı reddediyor). Limit, blok, network problemi olabilir.",
        },
        {
          q: "'Unauthorized charge' tam anlamı?",
          options: [
            "İzinli ödeme.",
            "İzinsiz / yetkisiz işlem (dolandırıcılık).",
            "Yüksek tutar.",
            "Yabancı para.",
          ],
          correct: 1,
          tr_explanation: "'Unauthorized' = yetkisiz. Banka için kritik sinyal — fraud şüphesi.",
        },
        {
          q: "'Dispute a charge' nasıl çevirilir?",
          options: [
            "İşleme onay ver.",
            "İşleme itiraz et (yanlış/dolandırıcılık).",
            "İşlem yap.",
            "İşlem iptal et.",
          ],
          correct: 1,
          tr_explanation: "'Dispute' = itiraz et. 'I'd like to dispute this charge' = banka size para iade etmeli.",
        },
        {
          q: "'Card isn't working' niye 'isn't' kullanılır?",
          options: [
            "Çünkü 'my card' = it (3. tekil).",
            "Çünkü past tense.",
            "Çünkü plural.",
            "Çünkü soru.",
          ],
          correct: 0,
          tr_explanation: "'Card' = it. Doğru: 'isn't working'. 'Don't work' yanlış (he/she/it için 'doesn't').",
        },
        {
          q: "'Expedite the new card' anlamı?",
          options: [
            "Yeni kartı iptal et.",
            "Yeni kartın gönderimini hızlandır.",
            "Yeni kart aktive et.",
            "Yeni kart için ödeme.",
          ],
          correct: 1,
          tr_explanation: "'Expedite' = hızlandırmak. Standart kargo yerine 'rush delivery' isteyebilirsin.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 30.5 — Hesap Açma (Öğrenci)
// ============================================================
export const dailyBankLesson_30_5: BundledLesson = {
  id: "daily.bank.30.5",
  skill_id: "daily.bank",
  index: 5,
  title: "Hesap Açma — Öğrenci",
  description:
    "ABD'de öğrenci olarak vadesiz hesap aç: SSN/ITIN, I-20, kampüs adresi — bürokrasiyi sakin yönet.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_bank_30_5.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_5.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_5.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_5.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_5.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_5.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_5.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_5.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_5.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_5.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_5.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_5.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_5.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.5.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "checking account",
      tr_translation: "Vadesiz hesap (günlük harcama hesabı)",
      example: "I'd like to open a checking account as an international student.",
      example_tr: "Yabancı öğrenci olarak vadesiz hesap açmak istiyorum.",
    },
    {
      id: "ex.db30.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Öğrenciyim, vadesiz hesap açmak istiyorum — hangi belgeler lazım?",
      target: "I'm a student — I'd like to open a checking account. What documents do I need?",
      accepted_variants: [
        "I'm an international student looking to open a checking account — what do I need to bring?",
        "Could I open a student checking account? What documents are required?",
        "I'd like to set up a checking account as a student — which documents?",
        "Opening a checking account, please — I'm a student. What docs do I need?",
      ],
      tr_hint:
        "'Documents' veya 'docs' kısaltma — ikisi de doğal. 'What do I need?' standart.",
    },
    {
      id: "ex.db30.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you have any monthly ___ for student accounts?",
      answer: "fees",
      distractors: ["prices", "costs", "taxes"],
      tr_hint:
        "'Monthly fees' = aylık ücretler / aidatlar. Öğrenci hesapları genelde ücretsizdir.",
    },
    {
      id: "ex.db30.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "don't",
        "have",
        "an",
        "SSN",
        "yet",
      ],
      correct_sentence: "I don't have an SSN yet",
      tr_translation: "Henüz SSN'im (sosyal güvenlik numaram) yok.",
    },
    {
      id: "ex.db30.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am student and want make bank account here.",
      correct_sentence:
        "I'm a student and I'd like to open an account here, please.",
      tr_explanation:
        "'I am student' eksik 'a' artikeli — 'I'm a student'. 'Make bank account' yanlış kalıp — 'open an account' doğru. 'I want' yerine 'I'd like' kibar standart.",
    },
    {
      id: "ex.db30.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD'de yeni öğrencisin, ilk kez banka hesabı açıyorsun. SSN henüz yok, I-20 ve pasaport var.",
      npc_role: "Bank associate",
      setting: "Account opening desk",
      turns: [
        {
          speaker: "npc",
          message: "Welcome in! What can I do for you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning|good afternoon)",
            "(i'd like|i would like|i want) to open (a|an) checking account",
            "(i'?m (an?) (international )?student)",
            "(could i|can i) (open|set up) (a|an) (student )?account",
            "(new (account|customer))",
          ],
          hint_tr:
            "Net giriş: 'Hi, I'd like to open a checking account — I'm an international student.'",
        },
        {
          speaker: "npc",
          message:
            "Great. I'll need a photo ID, your Social Security number, and proof of address.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (have|brought|got)) my passport",
            "(here'?s my (passport|i-?20|visa))",
            "(i don'?t have (an )?ssn (yet|right now))",
            "(can i use (my )?(itin|i-?20|passport) instead)",
            "(what (do i do|happens) (without|if i don'?t have) (an )?ssn)",
            "(proof of address|my dorm address|on-campus address)",
          ],
          hint_tr:
            "Belge bilgisi + SSN sorusu: 'I have my passport and I-20. I don't have an SSN yet — can I still open one?'",
        },
        {
          speaker: "npc",
          message:
            "No problem — we accept passport plus I-20 for students. We can apply for an ITIN later. Your address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my address is|i live at|i'?m staying at)",
            "(it'?s (an )?on-campus|dorm|residence hall) address",
            "(can i use|is (a )?(po box|university address) okay)",
            "(just to confirm|let me confirm)",
            "(would (you|that) (mind|need)) (the )?(zip|postal) code",
          ],
          hint_tr:
            "Adres ver + onay: 'My address is on-campus — 100 University Drive. Just to confirm, is that okay?'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Last question — would you like a debit card mailed, or pick it up at the branch?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mail it|by mail|send it (to my address|home))",
            "(pick (it )?up|i'?ll (come|stop) (in|by))",
            "(how long (will|does) (it|that) take)",
            "(any (fees|charges) for (mailing|delivery))",
            "(could you walk me through) (the )?(activation|next steps)",
            "(thank you|thanks)",
          ],
          hint_tr:
            "Tercih + soru: 'Could you mail it? And could you walk me through how to activate it?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — we'll mail it in five to seven business days. Activation instructions are inside. Welcome aboard!",
        },
      ],
    },
    {
      id: "ex.db30.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de öğrenci, SSN yok — ne yapar?",
          options: [
            "Hesap açamaz.",
            "Pasaport + I-20 + bazen ITIN ile hesap açabilir.",
            "Sadece nakit kullanır.",
            "Aile üyesiyle hesap açar.",
          ],
          correct_index: 1,
          tr_explanation:
            "Çoğu büyük banka uluslararası öğrenciye pasaport + I-20 (öğrenci vizesi belgesi) kabul eder. ITIN sonra alınabilir.",
        },
        {
          question: "'I'd like to open a checking account' — neden 'checking'?",
          options: [
            "Çek yazmak için zorunlu.",
            "Günlük harcama / kart kullanımı için standart hesap tipi.",
            "Faiz daha yüksek.",
            "Sadece öğrenciye verilir.",
          ],
          correct_index: 1,
          tr_explanation:
            "Checking = vadesiz, günlük kullanım. Debit card, fatura ödeme, ATM çekimleri buradan yapılır.",
        },
        {
          question: "'Just to confirm' kalıbı ne işe yarar?",
          options: [
            "Kibarca yanlış olduğunu söylemek.",
            "Bilgiyi netleştirmek / tekrar onaylamak — bürokrasi dilinde altın kalıp.",
            "Sohbeti bitirmek.",
            "Şikâyet etmek.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Just to confirm...' = 'Bir teyit edeyim...'. Memurla yanlış anlaşılma önler, formaliteyi yumuşatır.",
        },
      ],
    },
    {
      id: "ex.db30.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to open a checking account, please.",
      ipa: "/aɪd laɪk tu ˈəʊpən ə ˈtʃɛkɪŋ əˈkaʊnt pliːz/",
      tr_hint:
        "'I'd' = 'ayd' tek hece. 'Open a' bağlanır = 'oupı-nı'. 'Checking' = 'çe-king'. 'Please' sonda nazikçe.",
    },
    {
      id: "ex.db30.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I'm ___ ___ ___ — could I open a student account?",
      slots: [
        { accepted: ["a", "currently a"], distractors: ["the", "one", "any"] },
        { accepted: ["student", "graduate student", "undergraduate"], distractors: ["studying", "studentish", "study"] },
        { accepted: ["at NYU", "at this university", "here in town"], distractors: ["in NYU", "from NYU", "on NYU"] },
      ],
      tr_hint:
        "Öğrenci hesabı talep kalıbı. 'I'm a student at [university]' = öğrenciyim, [okul]da. Türk öğrenci 'I am study' diyor — yanlış. 'Studying' = present continuous; 'I'm a student' = isim cümlesi.",
      example_filled: "I'm a student at NYU — could I open a student account?",
    },
    {
      id: "ex.db30.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Welcome! How can I help you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure. Do you have a student ID with you?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)?(,)? (i'?m|i am) (a |an )?(undergraduate|graduate )?student",
        "(i'?d like|i want) to open (a |an )?student account",
        "(could you|can you) help me set up (a |an )?student account",
        "(do you|i heard you) (have|offer) student (accounts|banking)",
      ],
      tr_hint:
        "Öğrenci hesabı için: kim olduğunu (student) söyle + ne istediğini (open account). Türk öğrenci 'Give me account' diyor — kabaca. 'I'd like to open' kibar.",
      ideal_answer: "Hi, I'm a student at NYU — I'd like to open a student account.",
    },
    {
      id: "ex.db30.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Our student account has no monthly fee. Would you like to apply?",
      accepted_patterns: [
        "(yes|yeah|sure)(,)? (i'?d love to|please|let'?s do it)",
        "(yes|yeah)(,)? (what )?(do )?i need\\??",
        "(absolutely|definitely|of course)",
        "(could you|can you) tell me (more about (it|the benefits)|what'?s included)\\??",
      ],
      think_seconds: 3,
      tr_hint:
        "Hoş teklif — kabul + soru. 'Yes please, what do I need?' Türk öğrenci sadece 'yes' der — eksik. Süreç sor: 'what's the process / what do I need'.",
      ideal_response: "Yes, definitely — what do I need to apply?",
    },
    {
      id: "ex.db30.5.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Üniversitede öğrenciyim, indirimli hesap var mı?",
      wrong_en: "I am student in university, is there discount account?",
      right_en: "I'm a university student — do you offer student accounts with lower fees?",
      why_tr:
        "'I am student' eksik artikel — 'a student' lazım. 'In university' Türkçe; doğru: 'at + university name' veya 'at university'. 'Discount account' direkt çeviri; bankacılıkta 'student account' (= zaten indirimli) veya 'with lower fees'.",
    },
    {
      id: "ex.db30.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Monthly fee' nedir?",
          options: [
            "Aylık ücret (hesap için banka komisyonu).",
            "Aylık maaş.",
            "Bir aylık para.",
            "Aylık ödeme planı.",
          ],
          correct: 0,
          tr_explanation: "'Monthly fee' = aylık hesap ücreti. Öğrenci hesaplarında genelde 0$.",
        },
        {
          q: "'I'm a student at NYU' niye 'at'?",
          options: [
            "'In' lazım.",
            "Üniversite/okul önünde 'at' kullanılır.",
            "Yanlış edat.",
            "Mecaz.",
          ],
          correct: 1,
          tr_explanation: "Okul/üniversite öncesi: 'at' (at Harvard, at NYU). 'In Harvard' yanlış.",
        },
        {
          q: "'Student ID' ne demek?",
          options: [
            "Öğrenci kimlik kartı.",
            "Öğrenci ID numarası.",
            "Öğrenci sicil.",
            "Hepsi doğru.",
          ],
          correct: 3,
          tr_explanation: "'Student ID' hem kart hem numara için kullanılır. Banka kanıt olarak ister.",
        },
        {
          q: "'Would you like to apply?' uygun cevap?",
          options: [
            "Maybe.",
            "Yes, definitely — what do I need?",
            "Nope.",
            "Apply for what?",
          ],
          correct: 1,
          tr_explanation: "Hoş kabul + ek soru. Süreç netleşir.",
        },
        {
          q: "'Set up an account' = ?",
          options: [
            "Hesap kapat.",
            "Hesap aç / kur (open ile aynı).",
            "Hesap blokla.",
            "Hesap incele.",
          ],
          correct: 1,
          tr_explanation: "'Set up' = kurmak (genel). Hesap için 'open' kadar yaygın. 'Set up an account' = aç.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 30.6 — Kart Reddedildi
// ============================================================
export const dailyBankLesson_30_6: BundledLesson = {
  id: "daily.bank.30.6",
  skill_id: "daily.bank",
  index: 6,
  title: "Kartım Çalıştırılmıyor",
  description:
    "Restoranda/markette kart reddedildi — bankayı arayıp neden olduğunu (hold, fraud flag, limit) sor ve çöz.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_bank_30_6.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_6.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_6.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_6.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_6.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_6.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_6.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_6.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_6.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_6.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_6.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_6.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_6.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.6.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "got declined",
      tr_translation: "(Kart) reddedildi",
      example: "My card got declined at the restaurant — could you check why?",
      example_tr: "Kartım restoranda reddedildi — nedenini kontrol eder misiniz?",
    },
    {
      id: "ex.db30.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kartım kasada reddedildi — bir bloke mi var, kontrol eder misiniz?",
      target: "My card got declined at checkout — could you check if there's a hold on it?",
      accepted_variants: [
        "Card got declined at the register — is there a hold?",
        "My card was declined — could you see if there's a hold or freeze?",
        "Got a decline at checkout — any hold on my card?",
        "My debit card just got declined — is there a hold I should know about?",
      ],
      tr_hint:
        "'Hold' = banka tarafından geçici blokaj. 'Decline' = reddedildi. 'Check if' = ... olup olmadığını kontrol et.",
    },
    {
      id: "ex.db30.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you check if there's a ___ on my account?",
      answer: "hold",
      distractors: ["stop", "lock", "freeze", "block"],
      tr_hint:
        "'Hold' bankacılıkta = geçici para blokajı (otel, gas station yaygın sebepler). Tam kalıp 'a hold on'.",
    },
    {
      id: "ex.db30.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "walk",
        "me",
        "through",
        "why",
        "it",
        "was",
        "declined",
      ],
      correct_sentence: "Could you walk me through why it was declined",
      tr_translation: "Neden reddedildiğini bana açıklayabilir misiniz?",
    },
    {
      id: "ex.db30.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My card is broken — it doesn't work in the shop!",
      correct_sentence:
        "My card was declined at the store — could you check if there's a hold?",
      tr_explanation:
        "'Broken' = fiziksel kırık; kart düzgünken yanlış kullanım. Doğru bankacılık dili: 'declined' (reddedildi) + 'hold' (geçici blokaj). 'Shop' yerine 'store' ABD'de standart.",
    },
    {
      id: "ex.db30.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Marketteydin, kart reddedildi. Hemen bankayı arıyorsun — sebep, hold, fraud flag soruşturma.",
      npc_role: "Customer service rep",
      setting: "Bank customer service hotline",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for calling. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning|good afternoon)",
            "(my card (just )?(got |was )?declined)",
            "(my (debit|credit) card (isn'?t|is not) working)",
            "(could you|can you) (check|see|look) why (my )?card (got|was) declined",
            "(i'?m at (a |the )?(store|register|checkout) and my card)",
          ],
          hint_tr:
            "Net problem: 'Hi, my card just got declined at the grocery store — could you check why?'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. Can I verify your identity? Full name and last four of your card?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|absolutely)",
            "(my name is|i'?m|full name is) [a-z]+ [a-z]+",
            "(last four (of my card )?(is|are)) ?\\d{4}",
            "(the (last four|card ending in)) ?\\d{4}",
            "(date of birth|dob) (is )?",
          ],
          hint_tr:
            "Kibar onay + bilgi: 'Of course. My name is Berk Yilmaz, last four are 4521.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks. I see a fraud flag on a recent online charge. Could you confirm — did you make a 90-dollar purchase from an electronics site this morning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yes that was me|that was mine)",
            "(no|no that wasn'?t me|i didn'?t make that)",
            "(i don'?t recognize (that|it))",
            "(could you (walk me through|tell me) (the details|more))",
            "(just to confirm)",
            "(that'?s (fraud|fraudulent|unauthorized))",
          ],
          hint_tr:
            "Onayla veya reddet: 'No, that wasn't me — I'd like to dispute it.' veya 'Yes, that was mine — sorry!'",
        },
        {
          speaker: "npc",
          message:
            "Understood. I'll clear the flag now, and your card should work in a few minutes. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|that works|okay|alright|great)",
            "(could i get|can i have) (a )?(reference|confirmation) (number)?",
            "(how long (will|does) it take to)",
            "(any way to (test|verify) (it|the card))",
            "(thank you|thanks|appreciate (the help|it))",
            "(no that'?s (all|it))",
          ],
          hint_tr:
            "Onay + makbuz: 'Sounds good. Could I get a reference number? Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "Of course — reference number 4-7-2-A. Have a great day!",
        },
      ],
    },
    {
      id: "ex.db30.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Hold on my card' ne demek?",
          options: [
            "Kartım sağlam.",
            "Hesabımda geçici blokaj — para kullanılamıyor (otel, gas station yaygın).",
            "Kartım kayıp.",
            "Kartım iptal.",
          ],
          correct_index: 1,
          tr_explanation:
            "Hold = banka veya satıcının paranı geçici 'tuttuğu' durum. Genelde 1-3 gün sonra kalkar.",
        },
        {
          question: "Kart reddedildiğinde en doğru ilk cümle?",
          options: [
            "My card is broken.",
            "Hi, my card got declined — could you check why?",
            "I have no money!",
            "Card no work.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Got declined' = reddedildi (pasif, sakin). 'Could you check' = yardım rica. Hızla nedeni öğrenmek için en hızlı yol.",
        },
        {
          question: "'Fraud flag' nedir?",
          options: [
            "Bayrak gönderiyorlar.",
            "Bankanın şüpheli işlemi işaretlemesi — kartı geçici durdurur.",
            "Yeni kart promosyonu.",
            "Hesap kapatma.",
          ],
          correct_index: 1,
          tr_explanation:
            "Fraud flag = sahtekarlık uyarısı. Banka olağandışı işlem görür, koruma için kartı bloke eder; sen onaylayınca kalkar.",
        },
      ],
    },
    {
      id: "ex.db30.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you check if there's a hold on my card?",
      ipa: "/kʊd ju tʃɛk ɪf ðɛərz ə həʊld ɒn maɪ kɑːrd/",
      tr_hint:
        "'Could you' = 'kud-yu' bağlanır. 'There's a' = 'derz-ı'. 'Hold' uzun o: 'hould'. Kibar tonla.",
    },
    {
      id: "ex.db30.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "My card ___ ___ at ___ — could you ___?",
      slots: [
        { accepted: ["was", "got"], distractors: ["is", "did", "had"] },
        { accepted: ["declined", "rejected", "blocked"], distractors: ["denying", "decline", "rejection"] },
        { accepted: ["the store", "checkout", "a restaurant", "the gas station"], distractors: ["store", "this place", "now"] },
        { accepted: ["look into it", "check my account", "see what happened"], distractors: ["fix it", "do it", "see"] },
      ],
      tr_hint:
        "Kart reddedildi yapısı. Passive 'was declined' + nerede + kibar rica. Türk öğrenci 'card did not work' diyor — 'didn't' lazım veya 'was declined'.",
      example_filled: "My card was declined at the store — could you look into it?",
    },
    {
      id: "ex.db30.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Customer service — how can I help you?" },
        { speaker: "user" },
        { speaker: "npc", text: "I see a fraud flag on your account. Did you make a purchase abroad?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)?(,)? (my )?card (was|got) (declined|rejected|blocked)",
        "(my )?card (isn'?t|is not) (working|going through)",
        "(could you|can you) check (why )?(my card was|the card)",
        "(i tried to|i was trying to) (pay|use my card) (but )?(it|it was) (declined|rejected)",
      ],
      tr_hint:
        "Müşteri hizmetlerine net giriş: 'My card was declined'. + Nereye/ne zaman bilgi. Türk öğrenci 'panic mode' uzun anlatır — banka kısa rapor bekler.",
      ideal_answer: "Hi, my card was declined at the grocery store — could you check why?",
    },
    {
      id: "ex.db30.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "I'll lift the hold. Can you try again in a few minutes?",
      accepted_patterns: [
        "(sure|yes|okay)(,)? (i'?ll )?(try again|give it another try)",
        "(thank you|thanks)(,)? (much appreciated|i appreciate it)",
        "(how long )?(should i )?(wait|give it)\\??",
        "(will it )?(work )?(right away|now)\\??",
      ],
      think_seconds: 3,
      tr_hint:
        "Memur hold kaldırdı — teşekkür + tekrar dene. 'Thanks, I'll try again' net. Türk öğrenci 'OK' der — yetersiz. Teşekkür + niyet (try again).",
      ideal_response: "Thanks — I'll give it another try in a few minutes.",
    },
    {
      id: "ex.db30.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Kartım kabul edilmedi, niye?",
      wrong_en: "My card not accepted, why?",
      right_en: "My card was declined — could you tell me why?",
      why_tr:
        "'Card not accepted' eksik yardımcı fiil (was lazım). 'Why?' tek başına direkt ve kabaca. Doğru: 'could you tell me why?' = kibar açıklama rica. Bankacılıkta 'declined' standart.",
    },
    {
      id: "ex.db30.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Fraud flag' ne demek?",
          options: [
            "Sahtekarlık uyarısı (sistem kartı korumak için bloklar).",
            "Bayrak indir.",
            "Hesap kapatma.",
            "Yıllık ücret.",
          ],
          correct: 0,
          tr_explanation: "Olağandışı işlem (yurtdışı, büyük tutar) görünce banka koruma için 'flag' atar.",
        },
        {
          q: "'Hold on my card' anlamı?",
          options: [
            "Kartı tut (fiziksel).",
            "Karta bloke (geçici).",
            "Kart kaybı.",
            "Kart yenileme.",
          ],
          correct: 1,
          tr_explanation: "'Hold' burada = geçici blok. Banka 'lift the hold' (kaldır) yapınca kart çalışır.",
        },
        {
          q: "'Lift the hold' ne demek?",
          options: [
            "Bloku kaldır.",
            "Bloku artır.",
            "Bloku yenile.",
            "Bloku raporla.",
          ],
          correct: 0,
          tr_explanation: "'Lift' = kaldır. 'Lift the hold' = bloku kaldır, kart yine çalışır.",
        },
        {
          q: "'Did you make a purchase abroad?' ne demek?",
          options: [
            "Yurtdışından bir şey aldın mı?",
            "Yurtdışına gittin mi?",
            "Yurtdışına havale yaptın mı?",
            "Yurtdışında kaldın mı?",
          ],
          correct: 0,
          tr_explanation: "'Make a purchase abroad' = yurtdışında ödeme yap. Banka konum farkını fraud şüphesi olarak görür.",
        },
        {
          q: "Kart reddedildi durumda EN iyi cevap kalıbı?",
          options: [
            "Why? Why? Help me!",
            "My card was declined — could you tell me why?",
            "Card no work fix it.",
            "Bad bank!",
          ],
          correct: 1,
          tr_explanation: "Net rapor + kibar açıklama rica. Müşteri hizmetleri profesyonel ton bekler.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 30.7 — ATM Kartı Yuttu
// ============================================================
export const dailyBankLesson_30_7: BundledLesson = {
  id: "daily.bank.30.7",
  skill_id: "daily.bank",
  index: 7,
  title: "ATM Yuttu — Kartı Geri Al",
  description:
    "ATM kartı yuttu, makine ekranı donuk. Banka şubesine git veya hattı ara — kartı geri almak için adımlar.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_bank_30_7.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_7.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_7.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_7.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_7.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_7.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_7.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_7.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_7.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_7.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_7.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_7.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_7.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.7.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "it's stuck",
      tr_translation: "Sıkıştı / takıldı",
      example: "My card is stuck in the ATM — can you help?",
      example_tr: "Kartım ATM'de sıkıştı — yardım eder misiniz?",
    },
    {
      id: "ex.db30.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "ATM kartımı yuttu — sıkıştı. Geri alabilir miyim?",
      target: "The ATM ate my card — it's stuck. Can I get it back?",
      accepted_variants: [
        "ATM swallowed my card and it's stuck — can I retrieve it?",
        "My card got stuck in the ATM — is there any way to get it back?",
        "The ATM kept my card — it's jammed. Can you help me get it out?",
        "Card stuck in the ATM — can someone get it back for me?",
      ],
      tr_hint:
        "'Ate / swallowed / kept' = yuttu. 'Stuck' = sıkıştı. 'Get it back' = geri al.",
    },
    {
      id: "ex.db30.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is there any ___ to retrieve my card today?",
      answer: "way",
      distractors: ["chance", "method", "option", "form"],
      tr_hint:
        "'Is there any way to...?' = '... yapmanın bir yolu var mı?' — kibar talep kalıbı.",
    },
    {
      id: "ex.db30.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "The",
        "ATM",
        "froze",
        "and",
        "kept",
        "my",
        "card",
      ],
      correct_sentence: "The ATM froze and kept my card",
      tr_translation: "ATM dondu ve kartımı tuttu.",
    },
    {
      id: "ex.db30.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Machine eated my card — give back please!",
      correct_sentence:
        "The ATM ate my card and it's stuck — could you help me retrieve it?",
      tr_explanation:
        "'Eated' yanlış past tense — düzgün 'ate'. 'Give back' kaba; 'help me retrieve / get it back' kibar. 'Machine' yerine 'ATM' standart.",
    },
    {
      id: "ex.db30.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ATM kartını yuttu, hemen yan şubeye girdin. Memurla durumu paylaş, kartı geri istemek için adımları öğren.",
      npc_role: "Bank teller",
      setting: "Bank branch — by the door",
      turns: [
        {
          speaker: "npc",
          message: "Hi there! You look a bit stressed — everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning|good afternoon)",
            "(the |an? )?atm (just )?(ate|swallowed|kept|took|jammed) my card",
            "(my card (is |got )?stuck (in (the )?atm)?)",
            "(could you|can you) help (me )?(get|retrieve) (it|my card) back",
            "(the atm (froze|broke|stopped))",
          ],
          hint_tr:
            "Açıkça anlat: 'Hi — the ATM outside just ate my card. It's stuck. Could you help?'",
        },
        {
          speaker: "npc",
          message:
            "Oh no — sorry to hear that. Which ATM was it, the one right outside?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that'?s right|exactly)",
            "(the one (right )?(outside|by the door|next to))",
            "(it'?s (the |an? )?(atm|machine) (out front|outside))",
            "(just (now|a (few )?(minutes|seconds) ago))",
            "(the screen (froze|went blank|stopped working))",
            "(just to confirm)",
          ],
          hint_tr:
            "Lokasyon + detay: 'Yes, the one right outside. The screen froze just a few minutes ago.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Unfortunately, we can't open the ATM until our service technician comes — usually next business day. Is there any way to identify your card?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|absolutely)",
            "(my (account|customer) number is)",
            "(the last four (digits )?(of my card)?) ?(are|is) ?\\d{4}",
            "(it'?s (under|in) (my )?name)",
            "(my (id|passport|driver'?s license))",
            "(is there any way) (to )?(cancel|block|freeze) (it|the card) (right )?now",
          ],
          hint_tr:
            "Kimlik + acil eylem: 'Of course, last four are 4521. Is there any way to block it right now just in case?'",
        },
        {
          speaker: "npc",
          message:
            "Smart thinking. I'll block the card immediately and order a replacement. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please|that works|sounds good|absolutely)",
            "(how long (will|does) (the )?replacement take)",
            "(any (way|chance) to (rush|expedite) it)",
            "(could you (mail|send) (it|the card) to|deliver)",
            "(any fees for (expediting|rushing))",
            "(thank you|thanks|appreciate (it|the help))",
          ],
          hint_tr:
            "Onay + ek soru: 'Yes please. Any way to expedite the new card?'",
        },
        {
          speaker: "npc",
          message:
            "We can rush it for ten dollars — arrives in two business days. I'll text you a reference number.",
        },
      ],
    },
    {
      id: "ex.db30.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ATM kartı yuttuğunda en doğru ilk hareket?",
          options: [
            "ATM'i tekmele.",
            "Önce kartı bloke ettir (hattı ara veya şubeye git).",
            "Bekle, belki çıkarır.",
            "Başka ATM'ye git.",
          ],
          correct_index: 1,
          tr_explanation:
            "Güvenlik öncelik — kart içeride başka birinin eline geçebilir. 'Block the card immediately' her zaman ilk adım.",
        },
        {
          question: "'Is there any way to...?' nasıl kullanılır?",
          options: [
            "Sadece emir vermek için.",
            "Kibar talep kalıbı — 'bir yolu var mı?' İmkânsız görüneni sormak için altın kalıp.",
            "Sadece şikâyet için.",
            "Sadece selamlama.",
          ],
          correct_index: 1,
          tr_explanation:
            "Banka, otel, havalimanı — bürokraside taleplerini yumuşatan en kullanışlı kalıplardan biri.",
        },
        {
          question: "Şubedeki memur 'next business day' dediğinde anlamı?",
          options: [
            "Bugün öğleden sonra.",
            "Bir sonraki iş günü — hafta sonu hariç.",
            "Bir hafta.",
            "Asla.",
          ],
          correct_index: 1,
          tr_explanation:
            "Business day = iş günü (Pzt-Cuma). Cuma akşamı = Pazartesi geliyor; ATM teknisyenleri için tipik.",
        },
      ],
    },
    {
      id: "ex.db30.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My card is stuck — can you help me retrieve it?",
      ipa: "/maɪ kɑːrd ɪz stʌk kæn ju hɛlp mi rɪˈtriːv ɪt/",
      tr_hint:
        "'Stuck' kısa u: 'stak'. 'Retrieve' vurgu son hecede: 'ri-TRIV'. 'Help me' bağlanır = 'help-mi'.",
    },
    {
      id: "ex.db30.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "The ATM ___ my card — could you ___ ___ ___?",
      slots: [
        { accepted: ["ate", "swallowed", "kept"], distractors: ["eat", "eated", "is eating"] },
        { accepted: ["help", "assist"], distractors: ["do", "make", "give"] },
        { accepted: ["me retrieve", "me get", "me recover"], distractors: ["myself", "with", "me back"] },
        { accepted: ["it", "my card", "the card"], distractors: ["mine", "them", "card"] },
      ],
      tr_hint:
        "ATM yuttu kalıbı. 'Ate/swallowed' = düzensiz past. Türk öğrenci 'eated' diyor — yanlış. 'Help me retrieve' = kibar yardım rica.",
      example_filled: "The ATM ate my card — could you help me retrieve it?",
    },
    {
      id: "ex.db30.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Welcome! Is everything okay?" },
        { speaker: "user" },
        { speaker: "npc", text: "Oh no, I'll get someone to open the ATM. Do you have your ID?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)?(,)? (the )?atm (just )?(ate|swallowed|kept) my card",
        "(my )?card (is|got) stuck in the atm",
        "(the )?machine (took|kept) my card",
        "(could you|can you) help me (get|retrieve) (it|my card)",
      ],
      tr_hint:
        "Şube memurana net + kibar. ATM 'ate' veya 'kept'. Türk öğrenci uzun anlatım yapar — gereksiz. ATM + ate + yardım rica.",
      ideal_answer: "Hi, the ATM just ate my card — could you help me get it back?",
    },
    {
      id: "ex.db30.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "It usually takes one or two business days. Is that okay?",
      accepted_patterns: [
        "(yes|sure|okay)(,)? (that'?s )?fine",
        "(could you|can you) (expedite|speed it up|rush it)\\??",
        "(in the meantime|while i wait)(,)? (could i|can i) get a temporary card\\??",
        "(actually|hmm) — (is there)? (any way|something faster)\\??",
      ],
      think_seconds: 3,
      tr_hint:
        "1-2 iş günü duydun — kabul + ek soru. 'Temporary card' (geçici kart) iste. Türk öğrenci 'OK' der — yetersiz. 'Could I get a temporary card meanwhile?' iyi soru.",
      ideal_response: "Sure — could I get a temporary card in the meantime?",
    },
    {
      id: "ex.db30.7.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "ATM kartımı yedi, hemen verin geri!",
      wrong_en: "ATM ate my card, give back now!",
      right_en: "The ATM swallowed my card — could you help me retrieve it?",
      why_tr:
        "'Give back now!' emir + kabaca. Banka memuruna saygısız. Doğru: 'could you help me retrieve' (kibar + resmî). 'Swallowed' tıbbi/teknik ton — 'ate' kadar kabul; 'retrieve' = profesyonel.",
    },
    {
      id: "ex.db30.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Retrieve' ne demek?",
          options: [
            "Geri al / kurtar.",
            "Vermek.",
            "Saklamak.",
            "Kaybetmek.",
          ],
          correct: 0,
          tr_explanation: "'Retrieve' = geri almak. 'Help me retrieve it' = kibar + profesyonel.",
        },
        {
          q: "'Business days' tam anlamı?",
          options: [
            "İş günleri (Pzt-Cuma).",
            "Tüm günler.",
            "Hafta sonları.",
            "Tatil günleri.",
          ],
          correct: 0,
          tr_explanation: "'Business days' = iş günü. Bankada işlem süresi standart bu birim.",
        },
        {
          q: "'Temporary card' nedir?",
          options: [
            "Yeni daimi kart.",
            "Geçici (asıl kart gelene kadar) kart.",
            "İptal edilmiş kart.",
            "Sanal kart.",
          ],
          correct: 1,
          tr_explanation: "'Temporary' = geçici. Yeni kart gelene kadar günlük kullanım.",
        },
        {
          q: "'Could you expedite it?' anlamı?",
          options: [
            "İptal et.",
            "Hızlandır / önceliklendir.",
            "Sil.",
            "Daha sonra yap.",
          ],
          correct: 1,
          tr_explanation: "'Expedite' = hızlandır. Standart süreyi kısaltma talebi.",
        },
        {
          q: "'In the meantime' nasıl çevirilir?",
          options: [
            "Bu arada / o sırada.",
            "Sonra.",
            "Önce.",
            "Hemen.",
          ],
          correct: 0,
          tr_explanation: "'In the meantime' = bu arada. 'Yeni kart gelene kadar geçici çözüm' isterken.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 30.8 — Uluslararası Havale
// ============================================================
export const dailyBankLesson_30_8: BundledLesson = {
  id: "daily.bank.30.8",
  skill_id: "daily.bank",
  index: 8,
  title: "Uluslararası Havale — Ücret Sor",
  description:
    "Yurtdışına büyük havale: ücretler, kur, exchange rate, ACH vs wire seçimi — bilinçli karar ver.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_bank_30_8.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "money",
  tr_translation: "Para",
  example: "I need some money.",
  example_tr: "Biraz paraya ihtiyacım var.",
},
{
  id: "ex.daily_bank_30_8.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "card",
  tr_translation: "Kart",
  example: "Where is my card?",
  example_tr: "Kartım nerede?",
},
{
  id: "ex.daily_bank_30_8.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how much",
  tr_translation: "Ne kadar",
  example: "How much is the fee?",
  example_tr: "Ücret ne kadar?",
},
{
  id: "ex.daily_bank_30_8.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I need",
  tr_translation: "İhtiyacım var",
  example: "I need to withdraw cash.",
  example_tr: "Nakit çekmem lazım.",
},
{
  id: "ex.daily_bank_30_8.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it open",
  tr_translation: "Açık mı",
  example: "Is the branch open on Saturdays?",
  example_tr: "Şube cumartesi açık mı?",
},
{
  id: "ex.daily_bank_30_8.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering if I could open a savings account.",
  example_tr: "Bir tasarruf hesabı açabilir miyim diye merak ediyordum.",
},
{
  id: "ex.daily_bank_30_8.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Olur da",
  example: "Do you offer student accounts, by any chance?",
  example_tr: "Olur da öğrenci hesabınız var mı?",
},
{
  id: "ex.daily_bank_30_8.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you help me",
  tr_translation: "Yardım eder misiniz",
  example: "Could you help me with a wire transfer?",
  example_tr: "Bir havale konusunda yardım eder misiniz?",
},
{
  id: "ex.daily_bank_30_8.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find the IBAN on my statement.",
  example_tr: "Ekstremde IBAN'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_bank_30_8.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I paid in cash instead?",
  example_tr: "Yerine nakit ödesem sakıncası olur mu?",
},
{
  id: "ex.daily_bank_30_8.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "I'd appreciate if you could",
  tr_translation: "Yapabilirseniz minnettar olurum",
  example: "I'd appreciate if you could waive the late fee.",
  example_tr: "Geç ödeme ücretini affederseniz minnettar olurum.",
},
{
  id: "ex.daily_bank_30_8.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ki",
  example: "I don't suppose you could expedite the new card?",
  example_tr: "Yeni kartı hızlandırabilir misiniz acaba?",
},
{
  id: "ex.daily_bank_30_8.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "give or take",
  tr_translation: "Aşağı yukarı",
  example: "It'll arrive in five business days, give or take.",
  example_tr: "Aşağı yukarı beş iş gününde gelir.",
},
    {
      id: "ex.db30.8.1",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "send money abroad",
      tr_translation: "Yurtdışına para göndermek",
      example: "I need to send money abroad — what are the fees?",
      example_tr: "Yurtdışına para göndermem lazım — ücretler ne kadar?",
    },
    {
      id: "ex.db30.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yurtdışına para göndermem lazım — ücretler ne kadar ve kur nedir?",
      target: "I need to send money abroad — what are the fees and what's the exchange rate?",
      accepted_variants: [
        "Sending money overseas — what fees and exchange rate apply?",
        "I'd like to wire money abroad — could you break down the fees and rate?",
        "International transfer, please — how much in fees and what rate do you offer?",
        "Need to send funds overseas — what are the charges and the FX rate today?",
      ],
      tr_hint:
        "'Abroad / overseas' = yurtdışı. 'Exchange rate' veya 'FX rate' = döviz kuru. 'Fees' = ücretler.",
    },
    {
      id: "ex.db30.8.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Could you give me a breakdown of all the ___, please?",
      answer: "fees",
      distractors: ["costs", "prices", "taxes", "charges"],
      tr_hint:
        "'Breakdown of fees' = ücretlerin ayrıntılı dökümü. Bankacılıkta hidden fee için sorulacak kritik kalıp.",
    },
    {
      id: "ex.db30.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "exchange",
        "rate",
        "are",
        "you",
        "offering",
        "today",
      ],
      correct_sentence: "What exchange rate are you offering today",
      tr_translation: "Bugün hangi döviz kurunu sunuyorsunuz?",
    },
    {
      id: "ex.db30.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want send big money to Turkey — how much fee?",
      correct_sentence:
        "I'd like to send a wire transfer to Turkey — could you walk me through the fees?",
      tr_explanation:
        "'Send big money' Türkçe direkt çeviri — kaba ve belirsiz. Doğru: 'send a wire transfer' (somut işlem) + miktar ayrı söylenir. 'How much fee' yerine 'walk me through the fees' kibar.",
    },
    {
      id: "ex.db30.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aileye Türkiye'ye 2000 USD havale göndereceksin. Memurla wire vs ACH, ücretler, kuru tartış.",
      npc_role: "Bank teller",
      setting: "International transfers desk",
      turns: [
        {
          speaker: "npc",
          message: "Good afternoon. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good afternoon|good morning)",
            "(i need|i'd like|i would like) to send money abroad",
            "(international (transfer|wire))",
            "(sending|wiring) (money|funds) (to|abroad|overseas|to turkey)",
            "(could i|can i) (send|wire) (money|funds) (abroad|internationally)",
          ],
          hint_tr:
            "Net giriş: 'Hi, I need to send money abroad — to Turkey, around 2000 dollars.'",
        },
        {
          speaker: "npc",
          message:
            "Sure. Two options — international wire (faster, higher fee) or international ACH (slower, cheaper). Any preference?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could you|can you) (walk me through|explain) (the )?(differences?|options)",
            "(what'?s|what is) the (difference|fee difference) (between)",
            "(how (long|fast) (does|will)) (each|the wire|the ach) take",
            "(how much (is the|are the) fees? for each)",
            "(i'?d like|i prefer) (wire|ach|the (faster|cheaper) (one|option))",
            "(just to confirm)",
          ],
          hint_tr:
            "Soru sor: 'Could you walk me through the difference? How long does each take and what are the fees?'",
        },
        {
          speaker: "npc",
          message:
            "Wire is 40 dollars, arrives same day. ACH is 5 dollars, three to five business days. Plus a 1% FX margin either way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s go with|i'?ll (take|choose|go with)) (the )?(wire|ach)",
            "(wire (please|sounds good))",
            "(ach (please|works for me))",
            "(what'?s the (exchange |fx )?rate (today)?)",
            "(just to confirm|let me confirm) (the )?(total|all-in (cost|fee))",
            "(any (hidden|other|extra) fees)",
          ],
          hint_tr:
            "Karar + onay: 'Let's go with the wire. Just to confirm — total all-in cost, including FX?'",
        },
        {
          speaker: "npc",
          message:
            "Total today: 2000 USD becomes roughly 75,000 Turkish lira after fees and FX. Recipient details?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the recipient'?s (name |full name )?is|recipient is)",
            "(it'?s (going )?to (my )?(family|mother|father|brother|sister))",
            "(here'?s (the |her |his )?iban)",
            "(spelled exactly as on (the )?passport)",
            "(could you (read|repeat) (it|that) back)",
            "(let me (spell|give) (you|it to you))",
          ],
          hint_tr:
            "Alıcı bilgisi: 'Recipient is my mother — Ayse Yilmaz, spelled exactly as on her passport. Here's the IBAN.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Sending now. You'll get a confirmation by email within an hour.",
        },
      ],
    },
    {
      id: "ex.db30.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Wire transfer' ve 'ACH' farkı?",
          options: [
            "Aynı şey, sadece adı farklı.",
            "Wire = hızlı + pahalı; ACH = yavaş + ucuz (ABD'de aile gönderileri için yaygın).",
            "Wire sadece ABD içi.",
            "ACH sadece nakit.",
          ],
          correct_index: 1,
          tr_explanation:
            "Wire: anında/aynı gün, $25-50 ücret. ACH: 1-5 iş günü, $0-5 ücret. Acele yoksa ACH çok daha ucuz.",
        },
        {
          question: "'FX margin' ne anlama gelir?",
          options: [
            "Yabancı para birimi bilet ücreti.",
            "Bankanın resmi kura ek olarak eklediği gizli kâr marjı (%0.5–%3 arası).",
            "Sadece dolar için geçerli.",
            "Ücretsizdir.",
          ],
          correct_index: 1,
          tr_explanation:
            "FX margin = döviz kâr marjı. Banka 'no fee!' der ama kuru kötü verir. Her zaman 'all-in cost' iste.",
        },
        {
          question: "'Just to confirm — total all-in cost?' niye önemli?",
          options: [
            "Sohbeti uzatır.",
            "Tüm gizli ücretleri (fee + FX margin + intermediary fees) ortaya çıkarır.",
            "Sadece nezaket.",
            "Standart selamlama.",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD bankaları parça parça ücret söyler. 'All-in cost' = toplam, gerçek tutar. Sormadan asla onaylama.",
        },
      ],
    },
    {
      id: "ex.db30.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you walk me through the fees, please?",
      ipa: "/kʊd ju wɔːk mi θruː ðə fiːz pliːz/",
      tr_hint:
        "'Walk me through' = 'wokmı-tru' bağlanır. 'Fees' = 'fiiz' uzun i. Kibar ton + soru tonlaması.",
    },
    {
      id: "ex.db30.8.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Could you walk me through ___ ___ for ___ ___?",
      slots: [
        { accepted: ["the fees", "all the costs", "the total charges"], distractors: ["fee", "money", "expensive"] },
        { accepted: ["and exchange rates", "and FX rates", "and the spread"], distractors: ["with rate", "for rate", "of rate"] },
        { accepted: ["a wire transfer", "an international transfer", "a $5,000 transfer"], distractors: ["transfer", "money sending", "wire"] },
        { accepted: ["to Turkey", "to Istanbul", "abroad"], distractors: ["for Turkey", "in Turkey", "of Turkey"] },
      ],
      tr_hint:
        "Uluslararası havale aydınlatma talebi. 'Walk me through' = adım adım anlat. Türk öğrenci 'tell me' diyor — 'walk me through' bankacılıkta daha profesyonel.",
      example_filled: "Could you walk me through the fees and exchange rates for a wire transfer to Turkey?",
    },
    {
      id: "ex.db30.8.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "International transfers desk — how can I help?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course. For a wire to Turkey, we charge $40 plus a 1% FX margin." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)?(,)? (i'?d like|i want) to (wire|transfer|send) (some )?money (to|abroad)",
        "(could you|can you) (walk me through|explain) (the )?(fees|costs|charges)",
        "(what'?s the )?(total cost|all-in cost|exchange rate) for",
        "(i'?m comparing|i'?d like to compare) (wire vs ach|options)",
      ],
      tr_hint:
        "International transfer için ücret + kur sor. 'Walk me through' = adım adım. Türk öğrenci 'how much?' der — yetersiz. 'Total cost' detay ister.",
      ideal_answer: "Hi, I'd like to wire money to Turkey — could you walk me through the fees and exchange rate?",
    },
    {
      id: "ex.db30.8.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "The exchange rate today is 32.5 TRY per dollar. Would you like to proceed?",
      accepted_patterns: [
        "(could you|can you) (lock in|guarantee) (the )?(rate|exchange rate)\\??",
        "(what'?s|is that) (the mid-market|the best) rate\\??",
        "(let me )?(think about it|compare with) (another option|wise|remitly)",
        "(yes|sure)(,)? (let'?s )?(go ahead|proceed)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kur teklif edildi — onaylama veya daha iyi sor. 'Mid-market rate' (gerçek piyasa kuru) sor. Türk öğrenci hemen 'yes' der — kayıp. Alternatif/locking düşün.",
      ideal_response: "Could you lock in that rate? I want to compare with mid-market first.",
    },
    {
      id: "ex.db30.8.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Ne kadar ücret alıyorsunuz havale için?",
      wrong_en: "How much fee you take for transfer?",
      right_en: "What's the total cost — including FX margin — for this transfer?",
      why_tr:
        "'How much fee you take' Türkçe gramer + eksik 'do'. Doğru: 'how much do you charge'. Daha akıllı: 'total cost including FX margin' (kur farkı dahil = bankaların gizlediği ek ücret). Profesyonel müşteri sorusu.",
    },
    {
      id: "ex.db30.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'FX margin' nedir?",
          options: [
            "Kurdaki bankaya gizli kâr (mid-market'ten farkı).",
            "Faiz oranı.",
            "Hesap ücreti.",
            "Kart limitleri.",
          ],
          correct: 0,
          tr_explanation: "Bankalar 'free transfer' der ama kurdaki margin'den kazanır. Genelde %1-3 gizli.",
        },
        {
          q: "'Mid-market rate' anlamı?",
          options: [
            "Gerçek piyasa ortalaması (Google'da görünen).",
            "Banka iç kuru.",
            "Tatil kuru.",
            "Tarihi kur.",
          ],
          correct: 0,
          tr_explanation: "'Mid-market' = piyasa ortalaması. Wise/Revolut buradan yakın çalışır.",
        },
        {
          q: "'Walk me through' anlamı?",
          options: [
            "Hızlı söyle.",
            "Adım adım anlat / yürüyerek geç.",
            "Listele.",
            "Bağırarak söyle.",
          ],
          correct: 1,
          tr_explanation: "'Walk me through' = adım adım rehber et. Profesyonel müşteri kalıbı.",
        },
        {
          q: "'Lock in the rate' nasıl çevirilir?",
          options: [
            "Kuru kilitle (şu anki kuru sabitle).",
            "Kuru aç.",
            "Kuru sil.",
            "Kuru ödeme.",
          ],
          correct: 0,
          tr_explanation: "'Lock in' = kilitle/sabitle. Kur dalgalanmasından koru.",
        },
        {
          q: "'ACH vs Wire' farkı nedir?",
          options: [
            "Aynı şey.",
            "ACH = ucuz/yavaş, Wire = pahalı/hızlı.",
            "ACH yurtdışı, Wire içeri.",
            "Wire ücretsiz.",
          ],
          correct: 1,
          tr_explanation: "ACH iç transfer (1-3 gün, $0-5); Wire uluslararası (saatler, $25-50).",
        },
      ],
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
  dailyBankLesson_30_5,
  dailyBankLesson_30_6,
  dailyBankLesson_30_7,
  dailyBankLesson_30_8,
];
