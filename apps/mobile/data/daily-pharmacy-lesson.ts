// Daily - Pharmacy lessons
// Skill: daily.pharmacy (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 19.1 — OTC Medicine (Resetsiz Ilac)
// ============================================================
export const dailyPharmacyLesson_19_1: BundledLesson = {
  id: "daily.pharmacy.19.1",
  skill_id: "daily.pharmacy",
  index: 1,
  title: "Resetsiz Ilac Almak",
  description:
    "CVS / Walgreens'te grip, bas agrisi, alerji icin OTC (over the counter) ilac sorma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dp19.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could you recommend something for",
      tr_translation: "... için bir şey önerebilir misin?",
      example: "Could you recommend something for a sore throat?",
      example_tr: "Boğaz ağrısı için bir şey önerebilir misin?",
    },
    {
      id: "ex.dp19.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bas agrim icin agir olmayan bir agri kesici onerebilir misiniz?",
      target: "Could you recommend a mild painkiller for a headache?",
      accepted_variants: [
        "Anything mild for headaches?",
        "Need something gentle for a headache.",
        "Mild headache reliever — what do you suggest?",
        "What's a low-dose painkiller for headache?",
      ],
      tr_hint:
        "'Mild / Gentle / Low-dose' = hafif. Spesifik semptom + tip sorma kalibi.",
    },
    {
      id: "ex.dp19.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Any ___ effects I should know about?",
      answer: "side",
      distractors: ["bad", "main", "extra"],
      tr_hint:
        "'Side effects' = yan etkiler. Ilac alirken kritik soru.",
    },
    {
      id: "ex.dp19.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "this",
        "safe",
        "to",
        "take",
        "daily",
      ],
      correct_sentence: "Is this safe to take daily",
      tr_translation: "Bu her gün almak güvenli mi?",
    },
    {
      id: "ex.dp19.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me cure for headache.",
      correct_sentence:
        "Could you suggest something OTC for headaches?",
      tr_explanation:
        "'Give me cure' = emir + grammatik degil. Doğru: 'Could you suggest' + 'OTC'.",
    },
    {
      id: "ex.dp19.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "CVS eczacisi karsindasin. Bas agrisi icin ilac sorma.",
      npc_role: "Pharmacist",
      setting: "Pharmacy aisle",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|hi|hello)",
            "(could you (recommend|suggest|help))",
            "(something for|otc for) (headache|sore throat|cold|allergy)",
            "(been (having|getting)) (headaches|congestion)",
            "(mild|gentle|low-dose)",
            "(don'?t (want|need) (strong|prescription))",
          ],
          hint_tr:
            "Saygili acilis: 'Hi, could you suggest something OTC for headaches?'",
        },
        {
          speaker: "npc",
          message:
            "Sure! Tylenol or Advil — both work. Any allergies or stomach issues?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no allergies|nothing serious|no known)",
            "(stomach (issues|problems|sensitivity))",
            "(any (side )?effects|interactions)",
            "(safe to (take|combine) (with|alongside))",
            "(dosage|how much|how often)",
            "(thanks|appreciate (the help|the time))",
          ],
          hint_tr:
            "Saglik + dozaj: 'No allergies. Any side effects to watch?'",
        },
        {
          speaker: "npc",
          message:
            "Advil can be hard on the stomach — take with food. Tylenol's gentler.",
        },
      ],
    },
    {
      id: "ex.dp19.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'OTC' kısaltmasi ne demek?",
          options: [
            "Over The Counter — resetsiz, raftan alinabilir ilac",
            "Other Test Conditions",
            "Old Travel Compass",
            "Order Total Cost",
          ],
          correct_index: 0,
          tr_explanation:
            "Eczacidan alabilirsin ama doktor reçetesi yok. Tylenol, Advil, Benadryl gibi.",
        },
        {
          question: "Ilac sorarken NE eklenmeli?",
          options: [
            "Sadece semptom",
            "Semptom + alerjiler + diger ilaclar = etkilesim riskini onler",
            "Sadece ad",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Eczaci icin tam bilgi = guvenli ilac. 'I'm on blood thinners' demeden Advil tehlikeli.",
        },
        {
          question: "'Side effects' niye sorulmali?",
          options: [
            "Yararsiz",
            "Bilgilenmek + ilaci alirken neye dikkat et",
            "Cok agir",
            "Onemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Mide bulantisi, uyku basmasi, vs onceden bilmek = uyumayasak yerlerde uyumak.",
        },
      ],
    },
    {
      id: "ex.dp19.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you recommend something for a headache?",
      ipa: "kʊd jə ˌrɛkəˈmɛnd ˈsʌmθɪŋ fər ə ˈhɛdeɪk",
      tr_hint:
        "'Could you' bağlanır → 'kud-ya'. 'Recommend' vurgu son hecede. 'Headache' = 'hed-eyk' (iki hece).",
    },
    {
      id: "ex.dp19.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Any side effects I should know about?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Side effects' birleşik ritim. 'Should know about' bağlanır → 'shud-no-ə-baut'.",
    },
    {
      id: "ex.dp19.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Take one tablet every six hours with food.",
      transcription_target: "Take one tablet every six hours with food.",
      tr_hint:
        "Dozaj talimati. 'Every six hours' = altı saatte bir. 'With food' = yemekle. Klasik eczaci kalibi.",
    },
    {
      id: "ex.dp19.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "painkiller",
      tr_translation: "Agri kesici",
      example: "I need a mild painkiller for my back.",
      example_tr: "Sirtim için hafif bir agri kesici lazim.",
    },
    {
      id: "ex.dp19.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have pain in my head, give pill.",
      correct_sentence:
        "I've had a headache since this morning — could you suggest something mild?",
      tr_explanation:
        "'Give pill' = emir + grammatik degil. Doğru: süre (since this morning) + tip (mild) + saygili soru.",
    },
  ],
};

// ============================================================
// Lesson 19.2 — Prescription / Refill (Resete + Yenileme)
// ============================================================
export const dailyPharmacyLesson_19_2: BundledLesson = {
  id: "daily.pharmacy.19.2",
  skill_id: "daily.pharmacy",
  index: 2,
  title: "Resete + Yenileme",
  description:
    "Doktor recetesi kestin / yeniden almak istiyorsun. Pharmacy counter'da islem.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dp19.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I need a refill",
      tr_translation: "Yenilemeye ihtiyacım var (reçete)",
      example: "Hi, I need a refill on my prescription.",
      example_tr: "Merhaba, reçetemi yenilemek istiyorum.",
    },
    {
      id: "ex.dp19.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Resetem var, doktor telefonla yolladi — ne zaman hazir olur?",
      target: "I have a prescription, my doctor called it in — when will it be ready?",
      accepted_variants: [
        "Doctor phoned in a prescription — pickup time?",
        "Prescription waiting under my name — when's it ready?",
        "Got a script called in — how long for pickup?",
        "Doc sent over a script — what's the ETA?",
      ],
      tr_hint:
        "'Called it in' / 'Phoned it in' = telefonla siparis etti. Doktor-eczane islemi.",
    },
    {
      id: "ex.dp19.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "It's under the name ___ Yilmaz.",
      answer: "Berk",
      distractors: ["mr", "for", "of"],
      tr_hint:
        "'Under the name X' = ... adi altinda. Pharmacy / restaurant'ta isim kontrol.",
    },
    {
      id: "ex.dp19.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Will",
        "my",
        "insurance",
        "cover",
        "this",
      ],
      correct_sentence: "Will my insurance cover this",
      tr_translation: "Sigortam bunu karşılar mı?",
    },
    {
      id: "ex.dp19.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Medicine for me.",
      correct_sentence:
        "Picking up a prescription — last name Yilmaz, doctor called it in this morning.",
      tr_explanation:
        "'Medicine for me' = belirsiz + kotu grammatik. Doğru: 'Picking up' + isim + onceki konum.",
    },
    {
      id: "ex.dp19.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "CVS pharmacy counter'da doktor reçeteni almaya geldin.",
      npc_role: "Pharmacist",
      setting: "Pharmacy pickup window",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(picking up|here to pick up)",
            "(a prescription|medication)",
            "(my (doctor|doc)) (called it in|phoned (it )?in|sent it over)",
            "(under the name|last name)",
            "(any (id|insurance card) need)",
          ],
          hint_tr:
            "Net acilis: 'Hi, picking up a prescription — doctor called it in. Name: Yilmaz.'",
        },
        {
          speaker: "npc",
          message:
            "Let me look. Need your insurance card and a photo ID.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure thing|here you go)",
            "(absolutely|happy to)",
            "(insurance|id|drivers license|passport)",
            "(any (copay|out of pocket|cost))",
            "(generic available|brand only)",
            "(how (long|often) (should i take|do i refill))",
          ],
          hint_tr:
            "Doc + sorma: 'Here's my ID and insurance. Any copay?'",
        },
        {
          speaker: "npc",
          message:
            "Copay is $10. Take one tablet daily with food. Refills every 30 days.",
        },
      ],
    },
    {
      id: "ex.dp19.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Eczanede reçete alirken EN onemli iki belge?",
          options: [
            "Photo ID + Insurance card",
            "Sadece para",
            "Hicbir sey",
            "Sadece adres",
          ],
          correct_index: 0,
          tr_explanation:
            "ID = sen oldugunu kanitlayan. Insurance = kim odeyecek. Ikisi yoksa ilac vermez.",
        },
        {
          question: "'Doctor called it in' ne demek?",
          options: [
            "Doktor ses verdi",
            "Doktor telefon ile eczaneye reçete bildirdi",
            "Doktor evden cikti",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Eski elden kagit recete yok. Doktor eczaneye electronically/telefonla yollar.",
        },
        {
          question: "Refill ne sik?",
          options: [
            "Onemsiz",
            "Cogu sureli ilac 30-90 gun + ozel doktor onayi gerek",
            "Sinirsiz",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Eczaci sayar. 'Last refill' uyarisinda yeni doktor randevusu zamani.",
        },
      ],
    },
    {
      id: "ex.dp19.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm here to pick up a prescription.",
      ipa: "aɪm hɪər tə pɪk ʌp ə prɪˈskrɪpʃən",
      tr_hint:
        "'Pick up' birleşik ritim → 'pi-kap'. 'Prescription' vurgu ikinci hecede: pre-SKRIP-shen.",
    },
    {
      id: "ex.dp19.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "My doctor called it in this morning.",
      voice_hint: "male_us",
      tr_hint:
        "'Called it in' = telefon ile yolladı. Üç kelime tek ritim → 'kold-i-tin'.",
    },
    {
      id: "ex.dp19.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Your copay today is fifteen dollars.",
      transcription_target: "Your copay today is fifteen dollars.",
      tr_hint:
        "'Copay' = sigortali hastanin cebinden katki payi. Kasada duyacagin standart cumle.",
    },
    {
      id: "ex.dp19.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "copay",
      tr_translation: "Sigorta katki payi (cep odeme)",
      example: "What's the copay on this medication?",
      example_tr: "Bu ilacin katki payi ne kadar?",
    },
    {
      id: "ex.dp19.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give my medicine fast.",
      correct_sentence:
        "Picking up a prescription under Yilmaz — any idea how long it'll take?",
      tr_explanation:
        "Emir + belirsiz kim. Doğru: isim + saygili süre sorusu.",
    },
  ],
};

// ============================================================
// Lesson 19.3 — Pain Location + Symptoms (Acim Nerede + Semptomlar)
// ============================================================
export const dailyPharmacyLesson_19_3: BundledLesson = {
  id: "daily.pharmacy.19.3",
  skill_id: "daily.pharmacy",
  index: 3,
  title: "Aci + Semptom Tanimlama",
  description:
    "Doktor / eczaci sordu — acin nerede, ne tip, ne zaman? Vocabulary lazim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dp19.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Sharp / dull / throbbing",
      tr_translation: "Keskin / künt / zonklayan",
      example: "It's a sharp pain when I move.",
      example_tr: "Hareket ettiğimde keskin bir ağrı oluyor.",
    },
    {
      id: "ex.dp19.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Iki gundur basim agriyor — zonkluyor ve isiga karsi hassasim.",
      target: "Headache for two days — throbbing, and I'm sensitive to light.",
      accepted_variants: [
        "Throbbing headache for 2 days, light makes it worse.",
        "Headache going on 2 days — throb-style, light sensitivity.",
        "Two-day headache, throbbing pain, light hurts.",
        "Head pounding for 48 hours, can't handle bright light.",
      ],
      tr_hint:
        "'Throbbing' = zonklayan. 'Sensitive to light' = isiga hassas. Klasik migrane sinyal.",
    },
    {
      id: "ex.dp19.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Pain ___ 1-10? Probably a 7.",
      answer: "on a scale of",
      distractors: ["from", "between", "at"],
      tr_hint:
        "'Pain on a scale of 1-10' = aci 1'den 10'a kadar nerede. Klasik klinik soru.",
    },
    {
      id: "ex.dp19.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Comes",
        "and",
        "goes",
        "every",
        "few",
        "hours",
      ],
      correct_sentence: "Comes and goes every few hours",
      tr_translation: "Birkaç saatte bir geliyor ve gidiyor.",
    },
    {
      id: "ex.dp19.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sick. Help.",
      correct_sentence:
        "Two-day headache — throbbing, gets worse with light. Around an 8/10.",
      tr_explanation:
        "'Sick. Help.' = belirsiz, doktor cozemez. Doğru: spesifik tip + sure + skala.",
    },
    {
      id: "ex.dp19.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Eczaci sana semptomlarini soruyor — net + spesifik anlat.",
      npc_role: "Pharmacist",
      setting: "Pharmacy consultation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(been having|for the past) (\\d+ (days?|hours?))",
            "(headache|stomach ache|back pain|sore throat)",
            "(throbbing|sharp|dull|achy)",
            "(worse when|gets bad if|triggered by)",
            "(scale|level|rating) (of )?(\\d+|seven|eight)",
            "(haven'?t (slept|eaten|tried (anything|much)))",
          ],
          hint_tr:
            "Spesifik: 'Headache for 2 days. Throbbing. Gets worse with light. About 7/10.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds like a possible migraine. Tried Excedrin or anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|just (tylenol|advil|water))",
            "(tried (\\w+) but)",
            "(didn'?t (help|work|do much))",
            "(would (caffeine|cold (compress|pack)|sleep) help)",
            "(when (do i|should i) (see a doctor|escalate))",
            "(thanks|appreciate the recommendation)",
          ],
          hint_tr:
            "Plan: 'Tried Advil — didn't help. When should I see a doctor?'",
        },
        {
          speaker: "npc",
          message:
            "If it lasts beyond 3 days or vision changes, see a doctor immediately.",
        },
      ],
    },
    {
      id: "ex.dp19.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Doktor / eczaciya semptom soylerken EN onemli detaylar?",
          options: [
            "Saciplastir + tip + sure + skala (1-10)",
            "Sadece ad",
            "Sadece tip",
            "Sadece sure",
          ],
          correct_index: 0,
          tr_explanation:
            "Acinin nerede + nasil + ne kadar + ne kadar yogun = tam tani icin kritik.",
        },
        {
          question: "'Pain on a scale of 1-10' niye standart?",
          options: [
            "Yararsiz",
            "Klinik standart — global olarak doktorlar boyle olcer",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Subjective aci olcusu. ICU'dan family doc'a kadar standart soru.",
        },
        {
          question: "'When should I see a doctor' niye iyi soru?",
          options: [
            "Eczaci OTC oneri verir + ciddi belirti varsa eskaler eder",
            "Yararsiz",
            "Sus",
            "Cok agir",
          ],
          correct_index: 0,
          tr_explanation:
            "Eczaci doktor degil ama uyari kriterleri bilir. Hayat kurtarıcı bilgi.",
        },
      ],
    },
    {
      id: "ex.dp19.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "On a scale of one to ten, it's about a seven.",
      ipa: "ɒn ə skeɪl əv wʌn tə tɛn ɪts əˈbaʊt ə ˈsɛvən",
      tr_hint:
        "Klinik standart kalip. 'On a scale of' bagli → 'on-ə-skeyl-əv'. 'About a' → 'ə-baw-də'.",
    },
    {
      id: "ex.dp19.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "It's a throbbing pain that comes and goes.",
      voice_hint: "female_us",
      tr_hint:
        "'Throbbing' = zonklayan. 'Comes and goes' = gel-git tarif. Üç parça, doğal tempo.",
    },
    {
      id: "ex.dp19.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "If symptoms persist for more than three days, see a doctor.",
      transcription_target: "If symptoms persist for more than three days, see a doctor.",
      tr_hint:
        "Eczaci uyarisi. 'Persist' = devam etmek. 'See a doctor' = doktora git. Standart eskalasyon kriterleri.",
    },
    {
      id: "ex.dp19.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "throbbing pain",
      tr_translation: "Zonklayan agri",
      example: "It's a throbbing pain behind my left eye.",
      example_tr: "Sol gozumun arkasinda zonklayan bir agri.",
    },
    {
      id: "ex.dp19.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Big pain. Many days.",
      correct_sentence:
        "Sharp pain in my lower back since Monday — about an 8 out of 10.",
      tr_explanation:
        "Belirsiz olcek + sure. Doğru: tip (sharp) + yer (lower back) + sure (since Monday) + skala (8/10).",
    },
  ],
};

// ============================================================
// Daily Pharmacy lessons registry
// ============================================================
export const dailyPharmacyLessons: ReadonlyArray<BundledLesson> = [
  dailyPharmacyLesson_19_1,
  dailyPharmacyLesson_19_2,
  dailyPharmacyLesson_19_3,
];
