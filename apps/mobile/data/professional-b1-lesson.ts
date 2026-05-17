// Professional B1 — Formal/Semi-Formal Encounters (10 lessons).
// Skill: professional.b1 — Turkish working professionals navigating formal
// bureaucratic encounters: banks, insurance, lawyers, government offices,
// landlords, customer service escalations, police statements, municipalities.
// Tone: formal-but-not-stiff. Heavy on "I would like to" / "Could you please".

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Banka Hesap Açtırma (Foreign Bank)
// ============================================================
export const professionalB1Lesson_1: BundledLesson = {
  id: "professional.b1.bank.1",
  skill_id: "professional.b1",
  index: 1,
  title: "Opening a Bank Account",
  description:
    "Yabancı bir bankada hesap açtırma: hesap türleri, ilk depozit, ATM kartı. 'I'd like to open' kalıbı.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to inquire about",
      tr_translation: "... hakkında bilgi almak istiyorum",
      example: "I'd like to inquire about opening a current account.",
      example_tr: "Vadesiz hesap açmak hakkında bilgi almak istiyorum.",
    },
    {
      id: "ex.pb1.1.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "proof of address",
      tr_translation: "ikametgah belgesi",
      example: "I have my passport and a utility bill as proof of address.",
      example_tr:
        "Pasaportum ve ikametgah belgesi olarak bir fatura yanımda.",
    },
    {
      id: "ex.pb1.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Yeni bir vadesiz hesap açtırmak istiyorum. Aylık ücretler ve minimum bakiye konusunda bilgi alabilir miyim?",
      target:
        "I'd like to open a new current account. Could you tell me about the monthly fees and the minimum balance?",
      accepted_variants: [
        "I would like to open a current account. Could you give me some information about the monthly fees and minimum balance?",
        "I'm interested in opening a current account. Could you explain the monthly fees and the minimum balance requirements?",
        "I'd like to open a current account. Could you please clarify the monthly fees and minimum balance?",
        "I would like to open a new current account and ask about your monthly fees and minimum balance.",
        "I'd like to open a current account, please. Could you walk me through the monthly fees and any minimum balance?",
      ],
      tr_hint:
        "'I'd like to open' = açtırmak istiyorum. 'Could you tell me about' = ... hakkında bilgi verebilir misiniz.",
    },
    {
      id: "ex.pb1.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you please ___ how the overdraft works?",
      answer: "clarify",
      distractors: ["clear", "explain to", "tell about", "say"],
      tr_hint:
        "'Could you clarify' = açıklayabilir misiniz. Resmi ortamda 'explain' yerine 'clarify' daha kibar.",
    },
    {
      id: "ex.pb1.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want make new bank account and get card today.",
      correct_sentence:
        "I'd like to open a new bank account and request a debit card today, please.",
      tr_explanation:
        "'I want' bankada kaba; 'I'd like to' kibar resmi kalıp. 'Make' yerine 'open'. 'Get card' yerine 'request a debit card'. 'A' artikel zorunlu.",
    },
    {
      id: "ex.pb1.1.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to open a current account, please",
      tr_translation: "Vadesiz hesap açtırmak istiyorum, lütfen",
      ipa: "/aɪd laɪk tə ˈəʊpən ə ˈkʌrənt əˈkaʊnt pliːz/",
    },
    {
      id: "ex.pb1.1.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yurt dışındaki bir bankaya gittin — hesap açtırmak istiyorsun. Müşteri temsilcisiyle konuşuyorsun.",
      npc_role: "Bank Representative",
      setting: "Bank branch — customer service desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. Welcome to Westbridge Bank. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good morning|hello|hi)",
            "i('d| would) like to (open|set up)",
            "(current|checking|savings) account",
            "(inquire|ask) about (opening|an account)",
          ],
          hint_tr:
            "Selamla + niyet belirt: 'Good morning. I'd like to open a current account, please.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Are you looking for a current account or a savings account?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |just a )?current account",
            "(a |just a )?savings account",
            "(both|maybe both)",
            "what('s| is) the difference",
            "could you (explain|clarify) the difference",
          ],
          hint_tr:
            "Seç ya da fark sor: 'A current account, please.' veya 'Could you clarify the difference?'",
        },
        {
          speaker: "npc",
          message:
            "Understood. May I see a form of photo ID and proof of address, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here|here you are|of course|sure)",
            "(my )?passport",
            "(utility bill|rental agreement|tenancy)",
            "(proof of address)",
            "i('ve| have) brought",
          ],
          hint_tr:
            "Belgeleri uzat: 'Here you are — my passport and a utility bill as proof of address.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. There's a small monthly fee of three pounds and a minimum opening deposit of fifty pounds. Is that alright?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) (fine|alright|okay|fair))",
            "(no problem|sounds good|understood)",
            "could you (clarify|explain) (the|that) fee",
            "is there a (way|account) (to|that) (avoid|waive)",
          ],
          hint_tr:
            "Kabul et ya da koşulları sor: 'That's fine, thank you.' veya 'Is there a way to waive the monthly fee?'",
        },
        {
          speaker: "npc",
          message:
            "Excellent. And would you like a debit card issued today, or shall we post it to your address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('d| would) (prefer|like)|could i (have|get))",
            "(today|now|issued today|on the spot)",
            "(by post|posted|sent to my address)",
            "(whichever|whatever) is (faster|quicker|easier)",
          ],
          hint_tr:
            "Tercih belirt: 'I'd prefer it issued today, please.' veya 'Could you post it to my address?'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. I'll get the paperwork started — it should take about fifteen minutes.",
        },
      ],
    },
    {
      id: "ex.pb1.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to inquire about opening a checking account.",
      ipa: "aɪd laɪk tu ɪnˈkwaɪər əˈbaʊt ˈoʊpənɪŋ ə ˈtʃɛkɪŋ əˈkaʊnt",
      tr_hint:
        "Resmî açılış. 'Inquire about' = 'in-KWAYR ı-BAUT'. 'Checking account' birleşik. Düz ve net.",
    },
    {
      id: "ex.pb1.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Could you clarify which documents I need to bring for non-resident registration, please?",
      voice_hint: "female_uk",
      tr_hint:
        "Resmî bilgi isteme. 'Could you clarify' = açıklayabilir misiniz. 'Non-resident' = mukim olmayan.",
    },
    {
      id: "ex.pb1.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "You'll need a valid passport, proof of address, and your initial deposit in either cash or transfer.",
      transcription_target:
        "You'll need a valid passport, proof of address, and your initial deposit in either cash or transfer.",
      tr_hint:
        "Banka müşterisinin duyduğu talimatlar. 'Proof of address' = ikametgah belgesi. 'Initial deposit' = ilk yatırım.",
    },
    {
      id: "ex.pb1.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to inquire",
      tr_translation: "Sormak isterim (resmî)",
      example:
        "I'd like to inquire whether you offer accounts for non-resident customers.",
      example_tr:
        "Mukim olmayan müşteriler için hesap sunup sunmadığınızı sormak isterim.",
    },
    {
      id: "ex.pb1.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Hello, I want make a bank account, please give me information.",
      correct_sentence:
        "Hello, I'd like to inquire about opening a bank account — could you walk me through the options, please?",
      tr_explanation:
        "'I want make' = 'I want to open / I'd like to open'. 'Give me information' kaba — 'walk me through the options' kibar ve net. Bankada B1+ kayıt: 'I'd like to inquire' formal açılış.",
    },
  ],
};

// ============================================================
// Lesson 2 — Sigorta Acentasiyla Konuşma (Auto/Health)
// ============================================================
export const professionalB1Lesson_2: BundledLesson = {
  id: "professional.b1.insurance.1",
  skill_id: "professional.b1",
  index: 2,
  title: "Speaking with an Insurance Agent",
  description:
    "Sigorta acentasiyla konuşma: kapsam, prim, hasar akışı. 'Coverage', 'premium', 'claim' kalıpları.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could you walk me through",
      tr_translation: "... beni adım adım götürebilir misiniz",
      example: "Could you walk me through how the claims process works?",
      example_tr:
        "Hasar talebi sürecinin nasıl işlediğini adım adım anlatır mısınız?",
    },
    {
      id: "ex.pb1.2.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "what's covered",
      tr_translation: "neler kapsanıyor",
      example: "I'd like to understand what's covered under this policy.",
      example_tr: "Bu poliçe altında nelerin kapsandığını anlamak istiyorum.",
    },
    {
      id: "ex.pb1.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Sağlık sigortası poliçeniz hakkında bilgi almak istiyorum. Aylık primi ve poliçe kapsamını açıklayabilir misiniz?",
      target:
        "I'd like to inquire about your health insurance policy. Could you explain the monthly premium and what the policy covers?",
      accepted_variants: [
        "I would like some information about your health insurance policy. Could you walk me through the monthly premium and the coverage?",
        "I'm interested in your health insurance policy. Could you clarify the monthly premium and what's covered?",
        "I'd like to learn more about your health insurance. Could you explain the premium and the coverage?",
        "I'd like to ask about your health insurance policy — could you tell me about the monthly premium and what it covers?",
        "I would like to inquire about a health insurance policy. Could you explain the premium and what's included in the coverage?",
      ],
      tr_hint:
        "'Premium' = aylık ödeme. 'Coverage' = kapsam. 'Could you explain' resmi açıklama isteme kalıbı.",
    },
    {
      id: "ex.pb1.2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "How do I ___ a claim if I have an accident?",
      answer: "file",
      distractors: ["make", "give", "send", "open"],
      tr_hint:
        "'File a claim' = hasar talebinde bulunmak. Sigortacılıkta sabit kalıp.",
    },
    {
      id: "ex.pb1.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "How much I pay each month and what things insurance pays?",
      correct_sentence:
        "Could you tell me what the monthly premium is and what the policy covers?",
      tr_explanation:
        "Soru sıralaması yanlış: 'How much do I pay' olmalı. 'What things insurance pays' yerine resmi 'what the policy covers'. 'Could you tell me' kibar başlangıç.",
    },
    {
      id: "ex.pb1.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sigorta acentasında oturuyorsun — araç sigortası alacaksın. Kapsam ve hasar süreci hakkında soru soruyorsun.",
      npc_role: "Insurance Agent",
      setting: "Insurance agency — meeting room",
      turns: [
        {
          speaker: "npc",
          message:
            "Hello, please have a seat. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hello|good morning|good afternoon|hi)",
            "i('d| would) like to (inquire|ask) about",
            "(car|auto|vehicle|motor) insurance",
            "(a quote|some information|policy)",
          ],
          hint_tr:
            "Niyet belirt: 'Good afternoon. I'd like to inquire about auto insurance for my car.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. We offer three levels — third-party, third-party plus theft, and comprehensive. Which one interests you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(comprehensive|third-?party( plus| with)? theft|third-?party)",
            "could you (clarify|explain|walk me through) the difference",
            "what('s| is) (covered|included) in",
            "i('m not| am not) sure",
          ],
          hint_tr:
            "Seç ya da fark sor: 'Could you walk me through the difference between them?'",
        },
        {
          speaker: "npc",
          message:
            "Comprehensive covers your own car as well — damage, theft, and third-party liability. The premium is about eight hundred euros a year.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that sounds|that('s| is)) (reasonable|fair|alright)",
            "could you tell me (about|how) the (deductible|excess)",
            "is there a (deductible|excess|monthly option)",
            "(can|could) i pay (it )?(monthly|in installments)",
          ],
          hint_tr:
            "Detay sor: 'Could you tell me about the deductible?' veya 'Can I pay monthly?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, you can pay monthly with a small surcharge, and the standard excess is three hundred euros.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|would) you (walk me through|explain) the (claim|claims) (process|flow)",
            "how (do|would) i file a claim",
            "what happens if (i have|there is) an accident",
            "what('s| is) the procedure",
          ],
          hint_tr:
            "Hasar süreci: 'Could you walk me through the claims process if I have an accident?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. You call our hotline within twenty-four hours, send photos, and we send an assessor. Most claims are settled within two weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that sounds|that('s| is)) (clear|helpful|good)",
            "thank you (for|so much) (the explanation|explaining)",
            "i('d| would) like to (proceed|go ahead|sign up)",
            "could i (take|have) (a copy|the documents|some time)",
          ],
          hint_tr:
            "Karar ver: 'That's clear, thank you. I'd like to proceed.' veya 'Could I take the documents home to review?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. I'll prepare the paperwork — it'll take a few minutes.",
        },
      ],
    },
    {
      id: "ex.pb1.2.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you clarify what the deductible covers?",
      ipa: "kʊd juː ˈklærɪfaɪ wɒt ðə dɪˈdʌktəbəl ˈkʌvərz",
      tr_hint:
        "Sigorta terimi. 'Deductible' = 'di-DAK-tıbıl', muafiyet bedeli. 'Clarify' = açıkla.",
    },
    {
      id: "ex.pb1.2.8",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "On behalf of my family, I'd like to inquire about coverage options for dental and vision.",
      voice_hint: "male_us",
      tr_hint:
        "Aile adına başvuru kalıbı. 'On behalf of' = adına. 'Coverage options' = teminat seçenekleri.",
    },
    {
      id: "ex.pb1.2.9",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Your premium will be billed monthly, and the policy renews automatically unless you give written notice.",
      transcription_target:
        "Your premium will be billed monthly, and the policy renews automatically unless you give written notice.",
      tr_hint:
        "Sigorta detayları. 'Premium' = prim. 'Renews automatically' = otomatik yenilenir. 'Written notice' = yazılı bildirim.",
    },
    {
      id: "ex.pb1.2.10",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "on behalf of",
      tr_translation: "Adına / namına",
      example:
        "I'm calling on behalf of my mother — could you walk me through her policy options?",
      example_tr:
        "Annem adına arıyorum — poliçe seçeneklerini anlatabilir misiniz?",
    },
    {
      id: "ex.pb1.2.11",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I want know which insurance is most cheap and most good for me.",
      correct_sentence:
        "Could you clarify which plan offers the best balance of coverage and cost for my situation?",
      tr_explanation:
        "'I want know' = 'I'd like to know / Could you clarify'. 'Most cheap', 'most good' yanlış üstünlük; 'best balance of X and Y' = profesyonel kalıp. Sigortada B1+ kayıt: 'clarify' + somut kriter.",
    },
  ],
};

// ============================================================
// Lesson 3 — Avukatla İlk Görüşme
// ============================================================
export const professionalB1Lesson_3: BundledLesson = {
  id: "professional.b1.lawyer.1",
  skill_id: "professional.b1",
  index: 3,
  title: "First Meeting with a Lawyer",
  description:
    "Bir hukuki sorunu açıklamak, ücretleri sormak, sonraki adımlar. Resmi ama anlaşılır kalıplar.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to seek your advice on",
      tr_translation: "... hakkında tavsiyenizi almak istiyorum",
      example:
        "I'd like to seek your advice on a tenancy dispute with my landlord.",
      example_tr:
        "Ev sahibimle bir kira anlaşmazlığı hakkında tavsiyenizi almak istiyorum.",
    },
    {
      id: "ex.pb1.3.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "your hourly rate",
      tr_translation: "saatlik ücretiniz",
      example: "May I ask what your hourly rate is?",
      example_tr: "Saatlik ücretiniz nedir, sorabilir miyim?",
    },
    {
      id: "ex.pb1.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "İşverenimle ilgili bir hukuki sorunum var. Sizinle nasıl çalıştığınızı ve ücretlerinizi konuşabilir miyiz?",
      target:
        "I have a legal concern regarding my employer. Could we discuss how you work and what your fees are?",
      accepted_variants: [
        "I have a legal issue involving my employer. Could we go over how you work and your fees?",
        "There's a legal matter with my employer I'd like to discuss. Could we talk about your process and your fees?",
        "I have a legal concern about my employer. Could you walk me through how you work and explain your fees?",
        "I'd like to discuss a legal issue concerning my employer — could we go through your process and your fees?",
        "I have a legal matter regarding my employer. Could we discuss your approach and your fee structure?",
      ],
      tr_hint:
        "'Legal concern' = hukuki kaygı. 'Regarding' = ... ile ilgili (resmi). 'Fees' = ücretler.",
    },
    {
      id: "ex.pb1.3.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you give me a rough ___ of the total cost?",
      answer: "estimate",
      distractors: ["price", "guess", "money", "value"],
      tr_hint:
        "'A rough estimate' = yaklaşık bir tahmin. Hukuk ofislerinde sık kullanılan kalıp.",
    },
    {
      id: "ex.pb1.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I have problem with my work and I need lawyer help, how much you take?",
      correct_sentence:
        "I have a legal concern about my work, and I'd like to ask about your fees.",
      tr_explanation:
        "'How much you take' kaba ve dilbilgisi hatalı. 'I'd like to ask about your fees' kibar. 'A' artikel zorunlu ('a problem', 'a lawyer').",
    },
    {
      id: "ex.pb1.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir avukatın ofisinde ilk görüşmedesin. İşverenle ilgili bir sorunu kısaca açıklayıp ücret ve sonraki adımları soruyorsun.",
      npc_role: "Lawyer",
      setting: "Law office — consultation room",
      turns: [
        {
          speaker: "npc",
          message:
            "Good afternoon. Please come in and have a seat. What brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) for (seeing me|the appointment|your time)",
            "i('d| would) like to (seek|get) your advice",
            "i have a (legal|small) (concern|matter|issue|question)",
            "(regarding|about|involving|concerning)",
          ],
          hint_tr:
            "Aç: 'Thank you for seeing me. I'd like to seek your advice on a legal matter involving my employer.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Could you briefly tell me what's happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my employer|my company|the company|my manager)",
            "(has not|hasn't|did not|didn't) (paid|honored|fulfilled)",
            "(my contract|my notice|overtime|severance)",
            "(i was|i have been) (dismissed|let go|terminated|asked to leave)",
            "(there is|there's) a (disagreement|dispute)",
          ],
          hint_tr:
            "Kısa açıkla: 'My employer hasn't paid the overtime in my contract, and there's a dispute about my notice period.'",
        },
        {
          speaker: "npc",
          message:
            "I see. Do you have your employment contract and any written correspondence with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i have brought|i('ve| have) got) (the|a copy of)",
            "(my contract|the contract|the emails|correspondence)",
            "(here you are|here they are)",
            "i can (send|forward|email) (them|you) (later|after)",
          ],
          hint_tr:
            "Belgeleri belirt: 'Yes, I've brought a copy of my contract and the emails. Here you are.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. I'll need to review them carefully. Do you have any questions before we proceed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(may i ask|could you tell me|i('d| would) like to ask)",
            "(your )?(hourly )?(rate|fees|fee structure)",
            "how do you (charge|bill)",
            "(rough )?(estimate|idea) of (the )?(cost|total)",
          ],
          hint_tr:
            "Ücret sor: 'May I ask what your hourly rate is, and could you give me a rough estimate of the total cost?'",
        },
        {
          speaker: "npc",
          message:
            "My rate is two hundred euros per hour, and a case like this usually takes between five and ten hours. I can send you a written quote.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is)) (helpful|clear|reasonable|understood)",
            "(could|would) you (also|please) (send|share) (a written|the) quote",
            "what (are |would be )?the next steps",
            "(when|how soon) (can|would) we (start|proceed|move forward)",
          ],
          hint_tr:
            "Sonraki adım: 'That's clear, thank you. Could you send a written quote, and what are the next steps?'",
        },
        {
          speaker: "npc",
          message:
            "I'll email the quote by tomorrow. If you'd like to proceed, we can schedule a follow-up next week.",
        },
      ],
    },
    {
      id: "ex.pb1.3.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "On behalf of my employer, I'd like to inquire about visa sponsorship.",
      ipa: "ɒn bɪˈhɑːf əv maɪ ɪmˈplɔɪər aɪd laɪk tu ɪnˈkwaɪər",
      tr_hint:
        "Hukuk ofisi açılışı. 'On behalf of' birleşik. 'Sponsorship' = 'SPON-sır-şip'. Formal, net.",
    },
    {
      id: "ex.pb1.3.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Could you clarify what the retainer covers, and whether additional fees apply for court appearances?",
      voice_hint: "female_uk",
      tr_hint:
        "Avukat sorgulaması. 'Retainer' = avans/sürekli ücret. 'Court appearances' = mahkeme duruşmaları.",
    },
    {
      id: "ex.pb1.3.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Our standard retainer is two thousand pounds, and we bill at an hourly rate of one-eighty thereafter.",
      transcription_target:
        "Our standard retainer is two thousand pounds, and we bill at an hourly rate of one-eighty thereafter.",
      tr_hint:
        "Avukat ücret bilgisi. 'Standard retainer' = standart avans. 'Thereafter' = sonrasında.",
    },
    {
      id: "ex.pb1.3.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "could you clarify",
      tr_translation: "Açıklayabilir misiniz?",
      example:
        "Could you clarify what 'reasonable use' means in section four of the contract?",
      example_tr:
        "Sözleşmenin dördüncü bölümündeki 'makul kullanım' ifadesini açıklayabilir misiniz?",
    },
    {
      id: "ex.pb1.3.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I need lawyer help, this contract is bad and my boss made me sign it.",
      correct_sentence:
        "I'd like to inquire about reviewing a contract — I have concerns about a few clauses and wanted a second opinion.",
      tr_explanation:
        "'My boss made me sign it' = duygusal, hukuk bağlamında işsiz. Avukatla görüşmede: spesifik amaç ('reviewing a contract'), ölçülü endişe ('concerns about a few clauses'), profesyonel talep ('second opinion'). Hukuki dil duyguyu değil, soruyu taşır.",
    },
  ],
};

// ============================================================
// Lesson 4 — Hukuki İfade Alma (Witness Statement)
// ============================================================
export const professionalB1Lesson_4: BundledLesson = {
  id: "professional.b1.witness.1",
  skill_id: "professional.b1",
  index: 4,
  title: "Giving a Witness Statement",
  description:
    "Tanık olarak kısa, net bir olay anlatımı. Past tense disiplin, fact + observation kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.pb1.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "To the best of my recollection",
      tr_translation: "Hatırladığım kadarıyla",
      example:
        "To the best of my recollection, the incident occurred at around half past four.",
      example_tr:
        "Hatırladığım kadarıyla, olay saat dört buçuk civarında oldu.",
    },
    {
      id: "ex.pb1.4.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I witnessed",
      tr_translation: "tanık oldum / gördüm",
      example: "I witnessed two cars colliding at the junction.",
      example_tr: "Kavşakta iki arabanın çarpıştığına tanık oldum.",
    },
    {
      id: "ex.pb1.4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Hatırladığım kadarıyla, dün öğleden sonra saat beş civarında kafenin önünde duruyordum ve iki kişinin tartıştığını gördüm.",
      target:
        "To the best of my recollection, I was standing outside the café yesterday at around five in the afternoon, and I saw two people arguing.",
      accepted_variants: [
        "As far as I can remember, I was standing in front of the café yesterday at about 5 p.m. when I witnessed two people arguing.",
        "From what I recall, I was outside the café yesterday around 5 in the afternoon and I saw two people having an argument.",
        "To the best of my memory, I was standing outside the café at around 5 p.m. yesterday and observed two people arguing.",
        "Yesterday at around 5 p.m., I was standing outside the café when I saw two individuals arguing — to the best of my recollection.",
        "If I remember correctly, I was outside the café around 5 p.m. yesterday and I witnessed two people arguing.",
      ],
      tr_hint:
        "İfade kalıbı: 'To the best of my recollection' + past continuous ('I was standing') + past simple ('I saw').",
    },
    {
      id: "ex.pb1.4.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I ___ outside the shop when the incident occurred.",
      answer: "was standing",
      distractors: ["am standing", "stood", "have stood", "standing"],
      tr_hint:
        "Olay anında devam eden eylem → past continuous: 'I was standing'.",
    },
    {
      id: "ex.pb1.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I see two mans fighting yesterday at 5 o'clock in front the shop.",
      correct_sentence:
        "Yesterday at around five, I saw two men fighting in front of the shop.",
      tr_explanation:
        "'See' yerine past tense 'saw'. 'Mans' yanlış çoğul — 'men' düzensiz. 'In front the' yerine 'in front of'. 'Around' belirsizlik kibar.",
    },
    {
      id: "ex.pb1.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Memur tanık ifadeni alıyor. Soracaklarına kısa, net, past tense cevap ver.",
      npc_role: "Officer Taking Statement",
      setting: "Police station — interview room",
      turns: [
        {
          speaker: "npc",
          message:
            "Thank you for coming in. Please state your full name and what you witnessed yesterday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my name is|i('m| am)) [a-z]+",
            "i (witnessed|saw|observed)",
            "yesterday (at|around|about)",
            "(two people|two men|two women|an argument|an incident)",
          ],
          hint_tr:
            "İsim + olay özeti: 'My name is Berk Aksoy. Yesterday at around five, I witnessed an argument outside a café.'",
        },
        {
          speaker: "npc",
          message:
            "Could you describe exactly what you saw, in your own words?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was|i had been) (standing|walking|sitting)",
            "(when|then) (i saw|i heard|i noticed)",
            "(two people|the man|the woman|they)",
            "(started|began) (arguing|shouting|pushing)",
            "(to the best of my recollection|as far as i remember)",
          ],
          hint_tr:
            "Past continuous + past simple: 'I was walking past the café when I saw two people start shouting.'",
        },
        {
          speaker: "npc",
          message:
            "Did you see anything physical — pushing, hitting, anything like that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|no) (i saw|i did not|i didn't|i did)",
            "(one of them|the taller one|the man)",
            "(pushed|grabbed|hit|shoved)",
            "(to my recollection|as far as i could tell)",
            "i did not (see|witness) (anything|any) (physical|violence)",
          ],
          hint_tr:
            "Net cevap: 'Yes, one of them pushed the other.' veya 'No, I didn't see anything physical.'",
        },
        {
          speaker: "npc",
          message:
            "Were you the only witness, or were there others nearby?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there were|i think there were) (a few|several|two|three) (other )?people",
            "(a waiter|a passer-?by|another customer)",
            "(i was|i think i was) the only",
            "(i can't|cannot) (be certain|say for sure)",
          ],
          hint_tr:
            "Diğer tanıklar: 'There were a few other people nearby, including a waiter from the café.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. Is there anything else you'd like to add before we sign the statement?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|that('s| is)) (everything|all i remember|all)",
            "(could|may) i (have|receive) a copy",
            "(i('d| would) like) a copy of the statement",
            "(when|how) will (this be|it be) (processed|filed)",
          ],
          hint_tr:
            "Kapat ve nüsha iste: 'That's everything I remember. Could I have a copy of the statement, please?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. I'll print a copy and have you sign both. Thank you for your time.",
        },
      ],
    },
    {
      id: "ex.pb1.4.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd like to give my statement on behalf of myself only.",
      ipa: "aɪd laɪk tə gɪv maɪ ˈsteɪtmənt ɒn bɪˈhɑːf əv maɪˈsɛlf ˈoʊnli",
      tr_hint:
        "İfade verme net. 'On behalf of myself only' = sadece kendi adıma. Yavaş, anlaşılır.",
    },
    {
      id: "ex.pb1.4.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Could you clarify what I'm being asked? I want to make sure my answer is accurate.",
      voice_hint: "male_uk",
      tr_hint:
        "Hukuki ifadede dikkat. 'Make sure my answer is accurate' = cevabımın doğru olduğundan emin olmak. Yavaş, sakin.",
    },
    {
      id: "ex.pb1.4.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Please state in your own words what you observed at approximately ten thirty that evening.",
      transcription_target:
        "Please state in your own words what you observed at approximately ten thirty that evening.",
      tr_hint:
        "İfade alma talimatı. 'State in your own words' = kendi sözlerinizle anlatın. 'Approximately' = yaklaşık.",
    },
    {
      id: "ex.pb1.4.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "could you clarify",
      tr_translation: "Açıklayabilir misiniz?",
      example:
        "Could you clarify whether 'recently' means within the past week or the past month?",
      example_tr:
        "'Yakın zamanda' geçen haftayı mı yoksa geçen ayı mı kastediyor, açıklayabilir misiniz?",
    },
    {
      id: "ex.pb1.4.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I don't remember exactly, maybe yes maybe no, I want to go home now please.",
      correct_sentence:
        "I'm not certain about the exact time, but I'd estimate around ten thirty. Could you clarify what level of precision you need?",
      tr_explanation:
        "İfadede 'maybe yes maybe no' belirsizlik = sorunlu. 'I want to go home' panik sinyali. Profesyonel ifade: belirsizliği adlandır ('not certain'), tahminini ver ('I'd estimate'), netlik iste ('clarify what level of precision'). Hukuki bağlamda kesinlik sınırını söyle.",
    },
  ],
};

// ============================================================
// Lesson 5 — Resmi Formaliteler (Government Office)
// ============================================================
export const professionalB1Lesson_5: BundledLesson = {
  id: "professional.b1.govoffice.1",
  skill_id: "professional.b1",
  index: 5,
  title: "Requesting a Document at a Government Office",
  description:
    "Bir resmi belge talep etme: hangi belge, hangi pencere, ne kadar süre. Sıra ve kibar ısrar kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.pb1.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm here to request",
      tr_translation: "... talep etmek için geldim",
      example: "I'm here to request a certified copy of my residence permit.",
      example_tr:
        "Oturma iznimin onaylı bir nüshasını talep etmek için geldim.",
    },
    {
      id: "ex.pb1.5.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "the relevant department",
      tr_translation: "ilgili birim",
      example: "Could you direct me to the relevant department?",
      example_tr: "Beni ilgili birime yönlendirebilir misiniz?",
    },
    {
      id: "ex.pb1.5.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "İkametgah belgemin onaylı bir kopyasını talep etmek için geldim. Bunun için hangi formu doldurmam gerekiyor?",
      target:
        "I'm here to request a certified copy of my proof of residence. Which form do I need to fill in?",
      accepted_variants: [
        "I would like to request a certified copy of my proof of residence. Which form should I fill out?",
        "I've come to request a certified copy of my residence document. Could you tell me which form I need to complete?",
        "I'm here to request an official copy of my residence proof. Which form do I need to fill out?",
        "I'd like to obtain a certified copy of my residence document — which form should I fill in?",
        "I'm here to request a certified copy of my proof of residence. Could you let me know which form is required?",
      ],
      tr_hint:
        "'I'm here to request' = talep etmek için geldim. 'Which form do I need to fill in' = hangi formu doldurmalıyım.",
    },
    {
      id: "ex.pb1.5.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "How long does the ___ usually take?",
      answer: "processing",
      distractors: ["process to", "make", "to process", "doing"],
      tr_hint:
        "'Processing' = işlem (isim). 'The processing usually takes' resmi kalıp.",
    },
    {
      id: "ex.pb1.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Where I take paper for residence and how long take?",
      correct_sentence:
        "Could you tell me where I can request the residence document, and how long it usually takes?",
      tr_explanation:
        "Soru sıralaması yanlış: 'Where can I' olmalı. 'Take paper' günlük; resmi 'request the document'. 'How long take' yerine 'how long it usually takes'.",
    },
    {
      id: "ex.pb1.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Resmi bir devlet dairesinde gişe memuruyla konuşuyorsun. Hangi pencereye gitmen gerektiğini ve süreyi öğrenmek istiyorsun.",
      npc_role: "Information Desk Officer",
      setting: "Government office — main reception",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. How may I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good morning|hello|hi)",
            "i('m| am) here to (request|apply|obtain)",
            "(a certified copy|an official copy|a document|a certificate)",
            "(residence|tax|civil status|birth)",
          ],
          hint_tr:
            "Niyet belirt: 'Good morning. I'm here to request a certified copy of my proof of residence.'",
        },
        {
          speaker: "npc",
          message:
            "Alright. Do you have your ID and any previous documents with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i have brought|i('ve| have))",
            "(my passport|my id|my residence permit)",
            "(my previous|the old) (document|certificate)",
            "(here you are|here it is)",
          ],
          hint_tr:
            "Belge sun: 'Yes, here you are — my passport and my previous residence permit.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. You'll need to go to window seven and fill in Form A-12.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(could|would) you (clarify|tell me|let me know)",
            "(where|which way) (is|to) window seven",
            "(how long|how much time) (does it|will it) (take|usually take)",
          ],
          hint_tr:
            "Yön + süre sor: 'Thank you. Could you tell me where window seven is, and how long the processing usually takes?'",
        },
        {
          speaker: "npc",
          message:
            "Window seven is down the corridor on the left. Processing usually takes around ten working days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ten working days|two weeks)",
            "is there (a way|an option) to (speed|fast-track)",
            "(could i|can i) (collect|pick (it )?up) (in person|here)",
            "is there a (fee|charge|cost)",
          ],
          hint_tr:
            "Detay sor: 'Is there a way to fast-track it, or a fee for collection in person?'",
        },
        {
          speaker: "npc",
          message:
            "There's an express option for an additional twenty euros — it shortens the processing to three working days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is)|that would be) (helpful|great|fine|reasonable)",
            "(i('d| would) like|i'll go) (to (take|use)|with) the express",
            "(could|may) i pay (here|at the counter|by card)",
            "thank you (for|so much) (your help|the information)",
          ],
          hint_tr:
            "Karar ver: 'That's helpful — I'd like the express option, please. May I pay by card?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Window seven will take your payment after the form is completed. Have a good day.",
        },
      ],
    },
    {
      id: "ex.pb1.5.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to inquire about renewing my residence permit.",
      ipa: "aɪd laɪk tu ɪnˈkwaɪər əˈbaʊt rɪˈnjuːɪŋ maɪ ˈrɛzɪdəns ˈpɜːrmɪt",
      tr_hint:
        "Resmî daire sorgusu. 'Residence permit' = ikamet izni. 'Renewing' = 'ri-NYU-ing'.",
    },
    {
      id: "ex.pb1.5.8",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Could you clarify whether I should submit the form online or in person at this office?",
      voice_hint: "female_us",
      tr_hint:
        "Memurla netleştirme. 'Submit online or in person' = çevrimiçi mi şahsen mi.",
    },
    {
      id: "ex.pb1.5.9",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Please complete sections one through four, then proceed to window five for verification.",
      transcription_target:
        "Please complete sections one through four, then proceed to window five for verification.",
      tr_hint:
        "Memur talimatı. 'Sections one through four' = bölüm 1'den 4'e. 'Window' = gişe.",
    },
    {
      id: "ex.pb1.5.10",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "on behalf of",
      tr_translation: "Adına",
      example:
        "I'm submitting this application on behalf of my elderly father, with his written authorisation.",
      example_tr:
        "Bu başvuruyu yaşlı babam adına, onun yazılı izniyle teslim ediyorum.",
    },
    {
      id: "ex.pb1.5.11",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Excuse me sir, give me the form for residence please, quickly.",
      correct_sentence:
        "Excuse me, could you tell me which form I need for a residence permit renewal, please?",
      tr_explanation:
        "'Give me' + 'quickly' = kaba ve acele. Memurla işlerde: 'could you tell me which form' (netleştirme), 'please' (kibarlık). Acele etme — bürokrasi sabırla yürür.",
    },
  ],
};

// ============================================================
// Lesson 6 — İş Yeri Devamsızlık Bildirimi (Calling in Sick)
// ============================================================
export const professionalB1Lesson_6: BundledLesson = {
  id: "professional.b1.sickleave.1",
  skill_id: "professional.b1",
  index: 6,
  title: "Calling in Sick / Sick Leave Email",
  description:
    "Yöneticiye hasta olduğunu bildirme: sebep + süre + devir teslim. Telefon ve e-posta kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.pb1.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm afraid I won't be able to",
      tr_translation: "Maalesef ... yapamayacağım",
      example: "I'm afraid I won't be able to come in today.",
      example_tr: "Maalesef bugün gelemeyeceğim.",
    },
    {
      id: "ex.pb1.6.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "to call in sick",
      tr_translation: "hastalık iznine ayrılmak",
      example: "I need to call in sick — I've come down with the flu.",
      example_tr: "Hastalık iznine ayrılmam gerek — gribe yakalandım.",
    },
    {
      id: "ex.pb1.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "İyi sabahlar, maalesef bugün ofise gelemeyeceğim. Yüksek ateşim var. Yarın da gelemeyebilirim, doktor raporu alacağım.",
      target:
        "Good morning. I'm afraid I won't be able to come in today — I have a high fever. I may not be able to come in tomorrow either; I'll get a doctor's note.",
      accepted_variants: [
        "Good morning. Unfortunately, I won't be able to make it to the office today as I have a high fever. I may also be out tomorrow — I'll get a doctor's note.",
        "Good morning. I'm afraid I can't come in today because I have a high fever. I might not be in tomorrow either; I'll obtain a medical certificate.",
        "Hi, I'm afraid I'll have to call in sick today — I have a high fever. I may not be in tomorrow either, and I'll provide a doctor's note.",
        "Good morning. I'm afraid I won't be able to come to the office today because I'm running a high fever. I may need tomorrow as well, and I'll bring a doctor's note.",
        "Good morning. I'm sorry, but I can't come in today due to a high fever. I might be out tomorrow too — I'll bring a sick note.",
      ],
      tr_hint:
        "'I'm afraid' = maalesef (resmi). 'Won't be able to' = yapamayacağım. 'Doctor's note' = doktor raporu.",
    },
    {
      id: "ex.pb1.6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "I'll catch up on emails as soon as I'm back ___ my feet.",
      answer: "on",
      distractors: ["in", "at", "to", "with"],
      tr_hint:
        "'Back on my feet' = ayağa kalkmak / iyileşmek. Sabit deyim.",
    },
    {
      id: "ex.pb1.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Hello boss I am sick today I don't come work, see you when better.",
      correct_sentence:
        "Good morning. I'm afraid I won't be able to come in today as I'm unwell. I'll keep you updated and see a doctor.",
      tr_explanation:
        "'Hello boss' kaba — 'Good morning' veya isimle. 'I don't come work' yanlış — 'won't be able to come in'. 'See you when better' yerine 'I'll keep you updated'.",
    },
    {
      id: "ex.pb1.6.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm afraid I won't be able to come in today",
      tr_translation: "Maalesef bugün gelemeyeceğim",
      ipa: "/aɪm əˈfreɪd aɪ wəʊnt bi ˈeɪbl tə kʌm ɪn təˈdeɪ/",
    },
    {
      id: "ex.pb1.6.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yöneticini hasta olduğunu söylemek için arıyorsun. Slack/telefon karışık ton — yarı resmi ama saygılı.",
      npc_role: "Line Manager",
      setting: "Phone call — early morning",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, good morning. Everything alright?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good morning|hi|hello)",
            "i('m| am) (so |really )?sorry (to|for) (the early call|calling early|bothering)",
            "i('m| am) afraid (i('m| am)|i can'?t)",
            "i (need to|have to) call in sick",
          ],
          hint_tr:
            "Aç: 'Good morning, sorry for the early call. I'm afraid I have to call in sick today.'",
        },
        {
          speaker: "npc",
          message:
            "Oh no, sorry to hear that. What's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('ve| have) (come down with|caught|got)",
            "(the flu|a fever|food poisoning|a bad cold|a stomach bug)",
            "(running|i have) a (high )?fever",
            "(i('m| am)) (not feeling well|feeling quite ill)",
          ],
          hint_tr:
            "Kısa belirti: 'I've come down with the flu and I'm running a high fever.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Take the time you need. Do you think it's just today, or longer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am)) (not sure|hoping it('s| is) just|likely)",
            "(today|just today|tomorrow as well|a couple of days)",
            "i('ll| will) (see|visit) (the |a )?doctor",
            "(get|bring|provide) a (doctor('s)?|medical|sick) (note|certificate)",
          ],
          hint_tr:
            "Süreyi belirt: 'I'm hoping just today, but I may need tomorrow too. I'll see a doctor and bring a note.'",
        },
        {
          speaker: "npc",
          message:
            "That's fine. Is there anything urgent on your plate today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|there is|just the)",
            "(the |my )?(meeting|call|review|deadline)",
            "i('ve| have) (asked|messaged|already pinged) (a|my) (colleague|teammate|coworker)",
            "(could you|would you mind) (covering|covering the|asking)",
            "(nothing |i don't think there's anything) urgent",
          ],
          hint_tr:
            "Devir teslim: 'There's the 10 a.m. call — I've asked Aylin to cover, but could you confirm?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, I'll make sure it's covered. Focus on getting better.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you (so much|very much)",
            "i('ll| will) (keep|let) you (updated|posted|know)",
            "i('ll| will) (be back|return) as soon as",
            "really appreciate",
          ],
          hint_tr:
            "Kapanış: 'Thank you so much. I'll keep you updated and be back as soon as I can.'",
        },
        {
          speaker: "npc",
          message:
            "Take care. Talk soon.",
        },
      ],
    },
    {
      id: "ex.pb1.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I won't be able to come in today — I'm calling in sick.",
      ipa: "aɪ woʊnt bi ˈeɪbəl tu kʌm ɪn təˈdeɪ aɪm ˈkɔːlɪŋ ɪn sɪk",
      tr_hint:
        "Standart hastalık bildirimi. 'Won't be able to' = yapamayacağım. 'Calling in sick' birleşik.",
    },
    {
      id: "ex.pb1.6.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Could you clarify whether I need a doctor's note for a one-day absence?",
      voice_hint: "female_uk",
      tr_hint:
        "HR sorgu. 'Doctor's note' = doktor raporu. 'One-day absence' = bir günlük devamsızlık.",
    },
    {
      id: "ex.pb1.6.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Please email your manager and copy HR — and rest up, we'll cover your meetings.",
      transcription_target:
        "Please email your manager and copy HR — and rest up, we'll cover your meetings.",
      tr_hint:
        "Yöneticiden iyileşme dileği. 'Copy HR' = İK'yı CC'le. 'Rest up' = iyi dinlen.",
    },
    {
      id: "ex.pb1.6.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to inquire",
      tr_translation: "Sormak isterim",
      example:
        "I'd like to inquire about the company's policy on remote work during recovery from illness.",
      example_tr:
        "Hastalıktan iyileşme sürecinde uzaktan çalışma şirket politikasını sormak isterim.",
    },
    {
      id: "ex.pb1.6.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Hello boss, I am very sick today, I cannot come, please don't be angry to me.",
      correct_sentence:
        "Hi, I'm calling in sick today — I've come down with a stomach bug and won't be able to come in. I'll keep you updated.",
      tr_explanation:
        "'Please don't be angry to me' = endişe sinyali, gereksiz. Profesyonel hastalık bildirimi: spesifik sebep ('stomach bug'), durum ('won't be able to come in'), sorumluluk ('keep you updated'). 'Be angry to me' = 'be angry with me' doğru.",
    },
  ],
};

// ============================================================
// Lesson 7 — Kira / Lease Görüşmesi (Landlord)
// ============================================================
export const professionalB1Lesson_7: BundledLesson = {
  id: "professional.b1.lease.1",
  skill_id: "professional.b1",
  index: 7,
  title: "Lease Negotiation with a Landlord",
  description:
    "Ev sahibiyle kira görüşmesi: aylık ücret, depozito, masraflar, sözleşme süresi. Kibarca pazarlık.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "the security deposit",
      tr_translation: "güvence depozitosu",
      example: "Could you confirm how much the security deposit is?",
      example_tr: "Güvence depozitosunun ne kadar olduğunu doğrular mısınız?",
    },
    {
      id: "ex.pb1.7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Would you be open to",
      tr_translation: "... konusunda esnek olur musunuz",
      example: "Would you be open to a twelve-month lease instead of six?",
      example_tr: "Altı ay yerine on iki aylık kiraya esnek olur musunuz?",
    },
    {
      id: "ex.pb1.7.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Daireyi çok beğendim. Aylık kiranın faturalar dahil mi olduğunu ve depozitoyu doğrular mısınız?",
      target:
        "I really like the flat. Could you confirm whether the monthly rent includes the bills, and what the deposit is?",
      accepted_variants: [
        "I really like the apartment. Could you let me know if the monthly rent covers the utilities, and how much the deposit is?",
        "I'm very interested in the flat. Could you clarify whether the rent includes bills and confirm the deposit amount?",
        "I really like the place. Could you confirm if the rent covers utilities and let me know the deposit?",
        "I like the flat very much. Could you tell me whether the rent includes the bills, and what the deposit amount is?",
        "I'm keen on the flat — could you confirm if the rent includes utilities and clarify the security deposit?",
      ],
      tr_hint:
        "'Could you confirm whether' = ... olup olmadığını doğrular mısınız (resmi).",
    },
    {
      id: "ex.pb1.7.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Is the deposit refundable at the end of the ___?",
      answer: "tenancy",
      distractors: ["paying", "rent", "deposit", "lease holder"],
      tr_hint:
        "'End of the tenancy' = kiracılık sonu. Resmi kira terimi.",
    },
    {
      id: "ex.pb1.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "How much money I pay first time and is it back when I go?",
      correct_sentence:
        "Could you tell me what the upfront cost is, and whether the deposit is refundable at the end of the tenancy?",
      tr_explanation:
        "'How much money I pay first time' günlük ve dilbilgisi hatalı. Resmi: 'upfront cost'. 'Is it back when I go' yerine 'refundable at the end of the tenancy'.",
    },
    {
      id: "ex.pb1.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir daireyi gezdin, ev sahibiyle görüşüyorsun. Kira koşullarını netleştirip kibarca biraz pazarlık yapacaksın.",
      npc_role: "Landlord",
      setting: "Flat viewing — living room",
      turns: [
        {
          speaker: "npc",
          message:
            "So, what do you think of the flat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i really like|i('m| am)) (the flat|the apartment|it|interested)",
            "(it('s| is)) (lovely|great|very nice|in good condition)",
            "thank you for showing me",
            "i('d| would) like to ask a few questions",
          ],
          hint_tr:
            "Pozitif aç: 'I really like the flat, thank you for showing me. I'd like to ask a few questions.'",
        },
        {
          speaker: "npc",
          message:
            "Of course, please go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could you|would you) (confirm|clarify|tell me)",
            "(the monthly rent|the rent) (includes|covers) (the )?(bills|utilities)",
            "(how much|what) (the |is the )?(security |the )?deposit",
            "what (the |is the )?(upfront cost|upfront payment)",
          ],
          hint_tr:
            "Maliyet sor: 'Could you confirm whether the rent includes the bills, and what the security deposit is?'",
        },
        {
          speaker: "npc",
          message:
            "The rent is twelve hundred a month, bills not included. The deposit is two months' rent, refundable.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) (for|that('s)) (clarifying|the information|clear)",
            "(could|would) you (also|please) (tell me|share|let me know)",
            "(the |what the )?(minimum |length of |duration of the )?(lease|tenancy|contract)",
            "(how long|what term)",
          ],
          hint_tr:
            "Süre sor: 'Thank you for clarifying. Could you also tell me the minimum length of the lease?'",
        },
        {
          speaker: "npc",
          message:
            "I prefer a six-month minimum, but I'm open to discussion.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "would you be open to",
            "(a |a longer |an? )?(twelve|12)-month",
            "(would you consider|any chance|any flexibility)",
            "(reducing|lowering|adjusting) (the |a bit on the )?(rent|deposit|price)",
            "in exchange for",
          ],
          hint_tr:
            "Pazarlık: 'Would you be open to a twelve-month lease in exchange for slightly lower rent?'",
        },
        {
          speaker: "npc",
          message:
            "Hmm, for a twelve-month contract, I could consider eleven-fifty.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that sounds|that('s| is)) (reasonable|fair|good|workable)",
            "(could|would) we (put|have) (that|this) in writing",
            "i('d| would) like to (proceed|go ahead|sign)",
            "(could i|may i) (have|take) a (copy of the contract|written offer)",
          ],
          hint_tr:
            "Sonuca bağla: 'That sounds fair. Could we put that in writing, and may I have a copy of the contract?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. I'll send the draft contract over by tomorrow.",
        },
      ],
    },
    {
      id: "ex.pb1.7.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you clarify whether utilities are included in the rent?",
      ipa: "kʊd juː ˈklærɪfaɪ ˈwɛðər juːˈtɪlɪtiz ɑːr ɪnˈkluːdɪd ɪn ðə rɛnt",
      tr_hint:
        "Kiracı sorgusu. 'Utilities' = faturalar (su, elektrik). 'Included in the rent' = kiraya dahil.",
    },
    {
      id: "ex.pb1.7.8",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "I'd like to inquire about the deposit terms — specifically what conditions trigger deductions.",
      voice_hint: "male_us",
      tr_hint:
        "Kira sözleşmesi sorgu. 'Deposit terms' = depozito şartları. 'Trigger deductions' = kesintiye yol açar.",
    },
    {
      id: "ex.pb1.7.9",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "The deposit is one month's rent, refundable within thirty days of the inspection.",
      transcription_target:
        "The deposit is one month's rent, refundable within thirty days of the inspection.",
      tr_hint:
        "Ev sahibi koşulları. 'One month's rent' = bir ay kira. 'Refundable' = iade edilebilir. 'Inspection' = kontrol.",
    },
    {
      id: "ex.pb1.7.10",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "on behalf of",
      tr_translation: "Adına",
      example:
        "I'm signing the lease on behalf of myself and my partner — both names should appear on the contract.",
      example_tr:
        "Kira sözleşmesini kendim ve partnerim adına imzalıyorum — iki ad da sözleşmede olmalı.",
    },
    {
      id: "ex.pb1.7.11",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I want this flat, when I can move? Give me discount please because I am student.",
      correct_sentence:
        "I'm interested in the flat. Could you clarify the earliest move-in date, and is there any flexibility on the rent for a longer lease?",
      tr_explanation:
        "'Give me discount because I am student' Türkçe dilekçe stili — İngiliz/Amerikan ev sahibinde işsiz. Profesyonel pazarlık: ilgi belirt ('I'm interested'), netleştir ('earliest move-in'), karşılıklı fayda sun ('flexibility for a longer lease'). 'When I can move' yanlış soru yapısı — 'when I can move in' veya 'the move-in date'.",
    },
  ],
};

// ============================================================
// Lesson 8 — Müşteri Hizmetleriyle Ciddi Şikayet (Escalation)
// ============================================================
export const professionalB1Lesson_8: BundledLesson = {
  id: "professional.b1.escalation.1",
  skill_id: "professional.b1",
  index: 8,
  title: "Escalating a Serious Customer Service Complaint",
  description:
    "Çözülmeyen bir sorunu yöneticiye yükseltme. Soğukkanlı ama kararlı kalıplar.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to escalate this",
      tr_translation: "Bunu üst makama iletmek istiyorum",
      example:
        "I'd like to escalate this — could I speak with a supervisor, please?",
      example_tr:
        "Bunu üst makama iletmek istiyorum — bir yöneticiyle konuşabilir miyim, lütfen?",
    },
    {
      id: "ex.pb1.8.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "this is unacceptable",
      tr_translation: "bu kabul edilemez",
      example:
        "With respect, this is unacceptable and I'd like a clear resolution.",
      example_tr:
        "Saygıyla söylüyorum, bu kabul edilemez ve net bir çözüm istiyorum.",
    },
    {
      id: "ex.pb1.8.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Sorunum üç haftadır çözülmedi. Daha fazla beklemek istemiyorum — bunu bir yöneticiye iletmek istiyorum, lütfen.",
      target:
        "My issue has not been resolved for three weeks. I'm not willing to wait any longer — I'd like to escalate this to a supervisor, please.",
      accepted_variants: [
        "My problem has been unresolved for three weeks. I don't want to wait any longer — I'd like to speak with a supervisor.",
        "It's been three weeks and my issue still isn't fixed. I'm not prepared to wait any longer — could I escalate this to a manager, please?",
        "My case has been outstanding for three weeks. I'd rather not wait any longer — please escalate this to your supervisor.",
        "The matter hasn't been resolved in three weeks. I'm not willing to wait further — I'd like to escalate this to a manager.",
        "My problem has gone unresolved for three weeks. I'd like to escalate this to your supervisor, please.",
      ],
      tr_hint:
        "'Has not been resolved' = present perfect passive. 'Escalate this to' = üst makama iletmek.",
    },
    {
      id: "ex.pb1.8.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Could I have a written ___ of this conversation, please?",
      answer: "record",
      distractors: ["paper", "report on", "talk", "memo"],
      tr_hint:
        "'A written record' = yazılı kayıt. Resmi şikayette önemli.",
    },
    {
      id: "ex.pb1.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "This is enough! Give me your boss now, I don't talk to you anymore!",
      correct_sentence:
        "With respect, I'd like to escalate this. Could you please connect me with your supervisor?",
      tr_explanation:
        "Bağırma kontrolü kaybettirir. 'With respect' diplomatik. 'Connect me with your supervisor' resmi yükseltme kalıbı. Ciddi olabilirsin, kibar kalman daha güçlü.",
    },
    {
      id: "ex.pb1.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üç haftadır çözülmeyen bir fatura sorunu için müşteri hizmetlerini aradın. Bu sefer kibar ama kararlı şekilde üst makama yükselteceksin.",
      npc_role: "Customer Service Agent",
      setting: "Phone call — billing dispute",
      turns: [
        {
          speaker: "npc",
          message:
            "Hello, thank you for calling. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hello|good morning|good afternoon)",
            "i('m| am) calling (about|regarding|to follow up on)",
            "(an unresolved|an ongoing|a long-standing) (issue|problem|case|matter)",
            "(reference|case) (number|id)",
          ],
          hint_tr:
            "Net aç: 'Good afternoon. I'm calling to follow up on an unresolved issue — case number 47823.'",
        },
        {
          speaker: "npc",
          message:
            "Let me check that for you. I can see notes here, but it looks like it's still being reviewed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(with respect|i understand|i appreciate)",
            "(this has been|it has been|it's been) (going on|outstanding|unresolved) for",
            "(three weeks|over a month|more than a month)",
            "i('m| am) (not willing|not prepared|unable) to wait",
            "this is (no longer|simply not) acceptable",
          ],
          hint_tr:
            "Kararlı ol: 'With respect, this has been unresolved for three weeks. I'm not willing to wait any longer.'",
        },
        {
          speaker: "npc",
          message:
            "I understand your frustration. I'll add a note and we'll get back to you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am) afraid|unfortunately) that('s| is) not (good enough|sufficient|acceptable)",
            "i('d| would) like to (escalate|speak with a supervisor|escalate this)",
            "(could|may|would) (you|i) (connect|put me through to|speak with) (your supervisor|a manager)",
          ],
          hint_tr:
            "Yükselt: 'I'm afraid that's not sufficient. I'd like to escalate this — could you connect me with your supervisor?'",
        },
        {
          speaker: "npc",
          message:
            "One moment, I'll see if a supervisor is available. May I ask what outcome you're looking for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am)) (looking for|expecting|requesting)",
            "(a full refund|a clear resolution|a written confirmation)",
            "(within |by |before )?(\\d+|seven|five|three) (business days|working days|days)",
            "(could|may) i (have|receive) (a written record|written confirmation)",
          ],
          hint_tr:
            "Beklentini net söyle: 'A full refund within seven business days, and a written confirmation by email.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. I'm transferring you to my supervisor now. Please hold the line.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "(could|may) i also (have|note) (a reference|the reference number|a case number)",
            "i('ll| will) (hold|wait)",
            "(i('ll| will) be|i('m| am)) recording this call",
          ],
          hint_tr:
            "Kayıt iste: 'Thank you. Could I also have a reference number for this escalation?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Reference is ESC-9087. Connecting you now.",
        },
      ],
    },
    {
      id: "ex.pb1.8.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Could you clarify why my refund request was declined?",
      ipa: "kʊd juː ˈklærɪfaɪ waɪ maɪ ˈriːfʌnd rɪˈkwɛst wəz dɪˈklaɪnd",
      tr_hint:
        "Müşteri hizmet eskalasyonu. 'Refund request' = iade talebi. 'Declined' = reddedildi.",
    },
    {
      id: "ex.pb1.8.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "On behalf of my account, I'd like to inquire about escalating this complaint to a supervisor.",
      voice_hint: "female_uk",
      tr_hint:
        "Eskalasyon kalıbı. 'Escalating this complaint' = bu şikayeti üst makama taşımak. Sakin, formal.",
    },
    {
      id: "ex.pb1.8.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I understand your frustration — let me transfer you to a senior agent who can authorise a resolution.",
      transcription_target:
        "I understand your frustration — let me transfer you to a senior agent who can authorise a resolution.",
      tr_hint:
        "Müşteri hizmetleri eskalasyon cevabı. 'Senior agent' = kıdemli temsilci. 'Authorise a resolution' = çözüm yetkisi.",
    },
    {
      id: "ex.pb1.8.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "could you clarify",
      tr_translation: "Açıklayabilir misiniz?",
      example:
        "Could you clarify under which clause my warranty claim was denied? I'd like to see it in writing.",
      example_tr:
        "Garanti talebim hangi maddeye göre reddedildi, açıklayabilir misiniz? Yazılı olarak görmek isterim.",
    },
    {
      id: "ex.pb1.8.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "This is ridiculous, you are the worst company, give me my money or I will sue you.",
      correct_sentence:
        "I'm not satisfied with the response so far. Could you clarify the next step in your complaints procedure? I'd like to escalate this formally.",
      tr_explanation:
        "'You are the worst' + 'I will sue you' = duygusal tehdit, eskalasyonu zorlaştırır. Profesyonel: memnuniyetsizliği adlandır ('not satisfied'), prosedür sor ('complaints procedure'), formal eskalasyon iste ('escalate this formally'). Tehdit değil, sistem.",
    },
  ],
};

// ============================================================
// Lesson 9 — Polise İfade Verme (Minor Incident)
// ============================================================
export const professionalB1Lesson_9: BundledLesson = {
  id: "professional.b1.policestatement.1",
  skill_id: "professional.b1",
  index: 9,
  title: "Giving a Statement to the Police",
  description:
    "Küçük bir olay (hırsızlık/kayıp eşya) için polise net ifade. Olay + delil + nüsha isteme.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.9.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to report",
      tr_translation: "... bildirmek istiyorum",
      example: "I'd like to report a stolen wallet.",
      example_tr: "Çalınan bir cüzdan bildirmek istiyorum.",
    },
    {
      id: "ex.pb1.9.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "for insurance purposes",
      tr_translation: "sigorta amacıyla",
      example:
        "Could I have a copy of the report for insurance purposes, please?",
      example_tr:
        "Sigorta amacıyla raporun bir kopyasını alabilir miyim, lütfen?",
    },
    {
      id: "ex.pb1.9.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Bir hırsızlık bildirmek istiyorum. Yaklaşık saat üçte, metro istasyonunda çantamı çaldılar. Sigorta için raporun bir kopyası lazım.",
      target:
        "I'd like to report a theft. My bag was stolen at the metro station at around three o'clock. I'll need a copy of the report for insurance purposes.",
      accepted_variants: [
        "I'd like to file a theft report. My bag was stolen at the metro station around 3 p.m. I'll need a copy of the report for my insurance.",
        "I want to report a theft. Someone took my bag at the metro station at about three o'clock. I'll need a copy of the report for insurance reasons.",
        "I would like to report a stolen bag. It happened at the metro station at around 3 p.m. Could I have a copy of the report for insurance purposes?",
        "I'd like to report a theft — my bag was stolen at the metro station around three. I'll need a copy of the report for insurance.",
        "I'm here to report a theft. My bag was taken at the metro station at around 3 o'clock. May I have a copy of the report for insurance purposes?",
      ],
      tr_hint:
        "'Was stolen' = pasif (önemli — kim çaldığını bilmiyorsun). 'For insurance purposes' = sigorta amacıyla.",
    },
    {
      id: "ex.pb1.9.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "The incident ___ at around three in the afternoon.",
      answer: "occurred",
      distractors: ["happen", "occur", "is happening", "occurring"],
      tr_hint:
        "'Occurred' = past tense 'oluştu'. İfadede 'happened' yerine resmi 'occurred'.",
    },
    {
      id: "ex.pb1.9.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Somebody steal my bag at metro yesterday afternoon, I want paper.",
      correct_sentence:
        "My bag was stolen at the metro station yesterday afternoon. I'd like to file a report and get a copy.",
      tr_explanation:
        "'Somebody steal' yerine pasif 'was stolen' (fail bilinmiyor). 'I want paper' kaba — 'I'd like to file a report and get a copy'.",
    },
    {
      id: "ex.pb1.9.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to report a theft, please",
      tr_translation: "Bir hırsızlık bildirmek istiyorum, lütfen",
      ipa: "/aɪd laɪk tə rɪˈpɔːt ə θeft pliːz/",
    },
    {
      id: "ex.pb1.9.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Çantan metro istasyonunda çalındı. Polis karakoluna gittin, görevliyle ifade veriyorsun. Net, past tense disiplinli.",
      npc_role: "Police Officer",
      setting: "Police station — front desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Good afternoon. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good afternoon|hello|good morning)",
            "i('d| would) like to (report|file)",
            "(a theft|a stolen bag|a stolen wallet|a stolen phone)",
          ],
          hint_tr:
            "Net aç: 'Good afternoon. I'd like to report a theft.'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. Could you tell me when and where it happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it occurred|it happened|the incident occurred)",
            "(today|yesterday|this morning|this afternoon)",
            "(at|around|about) (\\d+|two|three|four|five|six)",
            "(at|in|inside|on) the (metro|underground|bus|train) (station|stop)",
          ],
          hint_tr:
            "Zaman + yer: 'It occurred this afternoon at around three, at the metro station near Central Square.'",
        },
        {
          speaker: "npc",
          message:
            "What was taken, exactly?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my bag|my wallet|my phone|my passport)",
            "(was stolen|was taken|went missing)",
            "(inside|it contained|with) (it|my)",
            "(my id|my cards|my keys|cash|euros|pounds|dollars)",
          ],
          hint_tr:
            "İçerik: 'My bag was stolen — it contained my passport, my bank cards, and around fifty euros.'",
        },
        {
          speaker: "npc",
          message:
            "Did you see anyone suspicious, or do you have any description?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to the best of my recollection|as far as i remember|i('m| am) afraid)",
            "(i did not|i didn't|i didn('t| not)) (see|notice|get a clear look)",
            "(there was|i noticed) (a man|a person|someone)",
            "(tall|short|wearing|in a)",
            "i can('t| not) (be certain|describe in detail)",
          ],
          hint_tr:
            "Tarif: 'To the best of my recollection, I noticed a man in a dark jacket, but I can't be certain.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. I'll take down your full statement now. Is there anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|may) i (have|request)",
            "a copy of (the |this )?(report|statement)",
            "for (insurance|insurance purposes|my insurance)",
            "(a reference|the reference|a case) (number|id)",
          ],
          hint_tr:
            "Nüsha + numara: 'Could I have a copy of the report for insurance purposes, and a reference number?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. I'll print a copy and give you the reference. Please review the statement before signing.",
        },
      ],
    },
    {
      id: "ex.pb1.9.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd like to report a minor traffic incident on behalf of the driver.",
      ipa: "aɪd laɪk tu rɪˈpɔːrt ə ˈmaɪnər ˈtræfɪk ˈɪnsɪdənt ɒn bɪˈhɑːf əv ðə ˈdraɪvər",
      tr_hint:
        "Polis ifadesi açılışı. 'Minor traffic incident' = küçük trafik olayı. Net, sakin.",
    },
    {
      id: "ex.pb1.9.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Could you clarify whether this report goes to my insurance automatically, or do I need to submit a separate claim?",
      voice_hint: "male_uk",
      tr_hint:
        "Polis ifadesi sonrası soru. 'Goes to my insurance' = sigortama gider mi. 'Separate claim' = ayrı talep.",
    },
    {
      id: "ex.pb1.9.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Please describe the events leading up to the collision in your own words, including the time of day.",
      transcription_target:
        "Please describe the events leading up to the collision in your own words, including the time of day.",
      tr_hint:
        "Polis talimatı. 'Events leading up to' = öncesindeki olaylar. 'Collision' = çarpışma.",
    },
    {
      id: "ex.pb1.9.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "could you clarify",
      tr_translation: "Açıklayabilir misiniz?",
      example:
        "Could you clarify whether I'm being treated as a witness or as a party to the incident?",
      example_tr:
        "Olayda tanık olarak mı yoksa taraf olarak mı muamele görüyorum, açıklayabilir misiniz?",
    },
    {
      id: "ex.pb1.9.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The other driver was crazy and 100% guilty, write that please in the report.",
      correct_sentence:
        "From what I observed, the other vehicle changed lanes without signalling. I'd prefer the report reflect what I saw rather than my interpretation.",
      tr_explanation:
        "'Crazy and 100% guilty' = subjektif değerlendirme; polis raporunda zarar verir. Profesyonel ifade: 'from what I observed' (sınır), 'changed lanes without signalling' (somut gözlem), 'reflect what I saw rather than my interpretation' (epistemik alçakgönüllülük). Yargı polise, gözlem sana.",
    },
  ],
};

// ============================================================
// Lesson 10 — Yerel Belediye / Bürokrasi (Permit / ID Renewal)
// ============================================================
export const professionalB1Lesson_10: BundledLesson = {
  id: "professional.b1.municipality.1",
  skill_id: "professional.b1",
  index: 10,
  title: "Permit and ID Renewal at the Municipality",
  description:
    "Yurt dışı belediyesinde bir izin veya kimlik yenileme: belgeler, ücret, randevu, sonraki adım.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.10.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm here to renew",
      tr_translation: "... yenilemek için geldim",
      example: "I'm here to renew my residence permit.",
      example_tr: "Oturma iznimi yenilemek için geldim.",
    },
    {
      id: "ex.pb1.10.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "the required documents",
      tr_translation: "gerekli belgeler",
      example:
        "Could you confirm the required documents and the processing fee?",
      example_tr:
        "Gerekli belgeleri ve işlem ücretini teyit eder misiniz?",
    },
    {
      id: "ex.pb1.10.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Oturma iznimi yenilemek için geldim. Gerekli belgeleri, ücreti ve randevu gerekip gerekmediğini öğrenebilir miyim?",
      target:
        "I'm here to renew my residence permit. Could you tell me what documents are required, what the fee is, and whether I need an appointment?",
      accepted_variants: [
        "I'd like to renew my residence permit. Could you let me know which documents I need, the fee, and whether an appointment is required?",
        "I've come to renew my residence permit. Could you walk me through the documents, the fee, and whether I need to book an appointment?",
        "I'm here to renew my residence permit. Could you clarify the required documents, the fee, and whether I need an appointment?",
        "I would like to renew my residence permit — could you tell me which documents are needed, the cost, and if I need to make an appointment?",
        "I'm here for a residence permit renewal. Could you confirm the required documents, the fee, and whether an appointment is necessary?",
      ],
      tr_hint:
        "'I'm here to renew' resmi açılış. 'Whether I need an appointment' = randevu gerekip gerekmediği.",
    },
    {
      id: "ex.pb1.10.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Could I ___ an appointment for next week, please?",
      answer: "book",
      distractors: ["do", "take", "give", "ask"],
      tr_hint:
        "'Book an appointment' = randevu almak. Resmi sabit kalıp.",
    },
    {
      id: "ex.pb1.10.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I need new my ID, what papers I bring and how much pay?",
      correct_sentence:
        "I'd like to renew my ID. Could you tell me what documents I need to bring and what the fee is?",
      tr_explanation:
        "'I need new my ID' yanlış dizilim. 'I'd like to renew my ID' resmi. 'What papers I bring' yerine 'What documents I need to bring'. 'How much pay' yerine 'what the fee is'.",
    },
    {
      id: "ex.pb1.10.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Belediyenin yabancılar bürosundasın. Oturma iznin bu ay doluyor — yenilemek için bilgi alıyorsun.",
      npc_role: "Municipal Clerk",
      setting: "Municipality — foreigners' office desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. How can I assist you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good morning|hello)",
            "i('m| am) here to (renew|extend|apply for)",
            "(my )?(residence permit|id|identification card|stay permit)",
            "i('d| would) like to (renew|extend)",
          ],
          hint_tr:
            "Niyet: 'Good morning. I'm here to renew my residence permit.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Has your current permit expired, or is it still valid?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "it('s| is) (still |currently )?(valid|active)",
            "it (expires|is due to expire|will expire)",
            "(this month|next month|on \\d|in \\d+ weeks)",
            "it expired (last week|recently)",
          ],
          hint_tr:
            "Geçerlilik: 'It's still valid — it expires at the end of this month.'",
        },
        {
          speaker: "npc",
          message:
            "Good. Do you have your passport, current permit, and a recent photo with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i('ve| have) brought|i have)",
            "(my passport|my current permit|a recent photo|all of those)",
            "(here you are|here they are)",
            "(i('m| am) afraid|unfortunately) i don't have",
          ],
          hint_tr:
            "Belgeleri sun: 'Yes, here you are — my passport, current permit, and a recent photo.'",
        },
        {
          speaker: "npc",
          message:
            "Excellent. The renewal fee is sixty euros and processing takes four to six weeks. Would you like to proceed today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i('d| would) like to)",
            "(proceed|go ahead|move forward) (today|now)",
            "(could|may) i (pay|settle the fee) (by card|in cash)",
            "is (there a |the )?(express|fast-track) option",
          ],
          hint_tr:
            "Devam et: 'Yes, I'd like to proceed today. May I pay by card?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, card is fine. Would you like to book a collection appointment now, or wait for a letter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|may) i (book|schedule) (an appointment|a collection appointment)",
            "(now|today|for next month|when it('s| is) ready)",
            "i('ll| will) wait (for the letter|until i hear)",
            "(whichever|whatever) is (easier|standard|more reliable)",
          ],
          hint_tr:
            "Tercih: 'Could I book a collection appointment now, please?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. I'll set one up for six weeks from today and send a confirmation by email.",
        },
      ],
    },
    {
      id: "ex.pb1.10.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to inquire about renewing my parking permit.",
      ipa: "aɪd laɪk tu ɪnˈkwaɪər əˈbaʊt rɪˈnjuːɪŋ maɪ ˈpɑːrkɪŋ ˈpɜːrmɪt",
      tr_hint:
        "Belediye sorgusu. 'Parking permit' = otopark izni. 'Renewing' = yenileme. Sakin, formal.",
    },
    {
      id: "ex.pb1.10.8",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Could you clarify which documents I need to bring on behalf of my elderly mother?",
      voice_hint: "female_us",
      tr_hint:
        "Vekaleten başvuru. 'On behalf of my elderly mother' = yaşlı annem adına. Saygılı, net.",
    },
    {
      id: "ex.pb1.10.9",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Please take a ticket from the machine and have a seat — your number will be called when an agent is free.",
      transcription_target:
        "Please take a ticket from the machine and have a seat — your number will be called when an agent is free.",
      tr_hint:
        "Belediye sırası. 'Take a ticket' = sıra al. 'Have a seat' = oturun. 'Agent is free' = memur boşalır.",
    },
    {
      id: "ex.pb1.10.10",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "on behalf of",
      tr_translation: "Adına",
      example:
        "I'm submitting this form on behalf of my employer, with their authorisation letter attached.",
      example_tr:
        "Bu formu işverenim adına, ekli yetki mektuplarıyla teslim ediyorum.",
    },
    {
      id: "ex.pb1.10.11",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Hello, this office is too slow, I waited two hours, give me my permit now.",
      correct_sentence:
        "Excuse me — I'd like to inquire whether there's a way to expedite my application. I've been waiting for some time.",
      tr_explanation:
        "'This office is too slow' + 'give me now' = saldırgan, hiç işe yaramaz. Belediyede iş bitirme dili: 'I'd like to inquire' (kibar açılış), 'expedite' (hızlandırma için resmî terim), 'waiting for some time' (sınırlandırılmış şikayet). Memuru kazanmaya çalış, savaşma.",
    },
  ],
};

// ============================================================
// Lesson 11 — Müşteri ile Telefon (Sales Call)
// ============================================================
export const professionalB1Lesson_11: BundledLesson = {
  id: "professional.b1.salescall.1",
  skill_id: "professional.b1",
  index: 11,
  title: "Handling an Inbound Sales Call",
  description:
    "Müşteri ürün ya da hizmet hakkında telefon ediyor — uygunluk kontrol, fiyat, sonraki adım. 'Thank you for your interest', 'Let me check on availability' kalıpları.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.11.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Thank you for your interest",
      tr_translation: "İlginiz için teşekkür ederiz",
      example:
        "Thank you for your interest in our service — how can I help you today?",
      example_tr:
        "Hizmetimize gösterdiğiniz ilgi için teşekkür ederiz — bugün nasıl yardımcı olabilirim?",
    },
    {
      id: "ex.pb1.11.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "İlginiz için teşekkür ederiz. Müsaitliği bir kontrol edeyim ve birazdan size geri döneyim.",
      target:
        "Thank you for your interest. Let me check on availability and I'll get back to you in a moment.",
      accepted_variants: [
        "Thanks for your interest. Let me check availability and I'll come back to you shortly.",
        "Thank you for your interest. I'll just check on availability and get back to you in a moment.",
        "Thank you for getting in touch. Let me check on availability and I'll get back to you shortly.",
        "Thanks for reaching out — let me check on availability and I'll get back to you in a moment.",
        "Thank you for your interest. Allow me to check our availability and I'll be right back with you.",
      ],
      tr_hint:
        "'Thank you for your interest' resmi açılış. 'Let me check' = bir kontrol edeyim. 'Get back to you' = size geri dönmek.",
    },
    {
      id: "ex.pb1.11.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Could I take your name and contact details so I can ___ up with you tomorrow?",
      answer: "follow",
      distractors: ["call", "ring", "phone", "send"],
      tr_hint:
        "'Follow up with you' = sizi takip etmek / geri dönmek. Sales call sabit kalıbı.",
    },
    {
      id: "ex.pb1.11.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let",
        "me",
        "check",
        "on",
        "availability",
        "and",
        "I'll",
        "get",
        "back",
        "to",
        "you",
      ],
      correct_sentence:
        "Let me check on availability and I'll get back to you",
      tr_translation:
        "Müsaitliği bir kontrol edeyim ve size geri döneceğim.",
    },
    {
      id: "ex.pb1.11.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am very sorry sir, I don't know price, you must wait, I will call boss.",
      correct_sentence:
        "Apologies for the delay — let me check on the pricing and I'll come back to you shortly.",
      tr_explanation:
        "'I am very sorry sir' aşırı formal ve özür dolu — müşteri güveni sarsar. 'I don't know' yerine yetkin dil: 'Let me check'. 'You must wait' emir kipinde kaba; doğrusu 'I'll come back to you shortly'. Profesyonel ton: özürü minimize et, çözüm odaklı konuş.",
    },
    {
      id: "ex.pb1.11.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Şirketinin ürünü hakkında bilgi almak için arayan bir müşteriyle konuşuyorsun. Profesyonel, sıcak ama net olmalısın.",
      npc_role: "Prospective Customer",
      setting: "Inbound sales call — software demo enquiry",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, I saw your website and I'm interested in your team plan — could you tell me more?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) for (your interest|getting in touch|reaching out)",
            "(of course|absolutely|certainly)",
            "(could|may) i (ask|take) (your name|a few details)",
            "(how many|what size) (team|users)",
          ],
          hint_tr:
            "Sıcak aç + kalifiye et: 'Thank you for your interest! Could I ask how many users you're looking for?'",
        },
        {
          speaker: "npc",
          message:
            "We're a team of about twelve. What does the plan include, and how much is it per month?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the team plan|our team plan) (includes|covers)",
            "(it('s| is)|the price is) (\\$|£|€)?\\d+",
            "per (user|month|seat)",
            "let me (walk you through|talk you through|explain)",
          ],
          hint_tr:
            "Net içerik + fiyat: 'The team plan includes unlimited projects, priority support, and is twelve pounds per user per month.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds reasonable. Do you offer a free trial or a discount for annual billing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|we do)",
            "(a |our )?(14-day|30-day|two-week|free) trial",
            "(annual billing|paying annually) (gives|saves) you",
            "let me check on (availability|the current offer|that)",
          ],
          hint_tr:
            "Olumlu cevap + değer: 'Yes, we offer a 14-day free trial, and annual billing saves you about 15 percent.'",
        },
        {
          speaker: "npc",
          message:
            "Great. Could you set me up with the trial today and send the pricing in writing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|certainly|happy to)",
            "(could|may) i (take|have) (your email|your work email)",
            "i('ll| will) (send|email|share) (a summary|the pricing|the details)",
            "(by end of day|within the hour|shortly|right after this call)",
          ],
          hint_tr:
            "Sonraki adımı kilitle: 'Absolutely. Could I take your work email? I'll send the pricing and trial link within the hour.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect — it's anna.kaya@example.com. Speak soon, and thanks for your help.",
        },
      ],
    },
    {
      id: "ex.pb1.11.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "Sales call'da müşteri ürün hakkında bilgi istediğinde profesyonel açılış?",
          options: [
            "Wait a moment, I check.",
            "Thank you for your interest — how can I help?",
            "Why are you calling so late?",
            "I am very sorry sir, I don't know.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Thank you for your interest' sıcak ve resmi açılış. Aşırı özür ya da bilgi eksikliği itiraf etmek güveni sarsar.",
        },
        {
          question:
            "Müsaitliği hemen söyleyemiyorsun — en doğal cümle?",
          options: [
            "I don't know now, ask later.",
            "Maybe yes, maybe no, we will see.",
            "Let me check on availability and I'll get back to you.",
            "It is impossible to say.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Let me check on availability' yetkin ve kontrol dilidir. 'I don't know' güveni düşürür.",
        },
        {
          question:
            "Aramayı bağlamak için sonraki adım söylenmesi gereken şey?",
          options: [
            "Goodbye, call again tomorrow.",
            "Could I take your email so I can follow up?",
            "Please don't forget us.",
            "Thank you, bye.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Follow up' = takip. İletişim bilgisini almak satışı kapatma şansını korur. Vedalaşıp kapatmak değer kaybıdır.",
        },
      ],
    },
    {
      id: "ex.pb1.11.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Thank you for your interest — let me check on availability and I'll get back to you.",
      ipa:
        "/θæŋk juː fər jɔːr ˈɪntrəst lɛt miː tʃɛk ɒn əˌveɪləˈbɪlɪti ənd aɪl ɡɛt bæk tə juː/",
      tr_hint:
        "Sales call ana kalıbı. 'Availability' uzun: a-vey-lı-Bİ-lı-ti. 'Get back to you' bağlanır: 'get-back-tu-ya'.",
    },
  ],
};

// ============================================================
// Lesson 12 — Toplantı Ajandası (Chairing a Meeting)
// ============================================================
export const professionalB1Lesson_12: BundledLesson = {
  id: "professional.b1.chairing.1",
  skill_id: "professional.b1",
  index: 12,
  title: "Chairing a Meeting",
  description:
    "Bir toplantıyı yönetmek: açılış, ajanda, söz dağıtımı, kapanış. 'Let's get started', 'First item on the agenda' kalıpları.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.12.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "First item on the agenda",
      tr_translation: "Ajandadaki ilk madde",
      example:
        "First item on the agenda — Q2 deliverables. Can someone walk us through the status?",
      example_tr:
        "Ajandadaki ilk madde — 2. çeyrek teslimatları. Birisi durumu adım adım anlatabilir mi?",
    },
    {
      id: "ex.pb1.12.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Hadi başlayalım. Bugün üç maddeyi gözden geçireceğiz; herkesin stakeholder güncellemelerini paylaşmak için süresi olacak.",
      target:
        "Let's get started. We'll be going through three items today, and everyone will have time to share their stakeholder updates.",
      accepted_variants: [
        "Let's get started. We're going through three items today, and everyone will have time to share their stakeholder updates.",
        "Right, let's get started. We have three items on the agenda today, and there'll be time for everyone to share stakeholder updates.",
        "Let's get going. We'll cover three items today, and everyone will get time to share their stakeholder updates.",
        "Let's kick off. We have three items today and everyone will have time to share their stakeholder updates.",
        "Let's start. Today we're covering three agenda items, and everyone will have time to share their stakeholder updates.",
      ],
      tr_hint:
        "'Let's get started' standart toplantı açılışı. 'Will be going through' = future continuous. 'Stakeholder updates' = paydaş güncellemeleri.",
    },
    {
      id: "ex.pb1.12.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Let's ___ that point for now and come back to it at the end if there's time.",
      answer: "park",
      distractors: ["stop", "drop", "skip on", "close"],
      tr_hint:
        "'Park that point' = o konuyu bir kenara ayır (toplantı jargonu). 'Skip' kaba; 'park' nazikçe erteler.",
    },
    {
      id: "ex.pb1.12.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "First",
        "item",
        "on",
        "the",
        "agenda",
        "is",
        "the",
        "Q2",
        "deliverables",
      ],
      correct_sentence:
        "First item on the agenda is the Q2 deliverables",
      tr_translation: "Ajandadaki ilk madde 2. çeyrek teslimatları.",
    },
    {
      id: "ex.pb1.12.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Okay friends, today we will talk about some things, please everyone speak now.",
      correct_sentence:
        "Right, let's get started. We have three items on the agenda — I'll go through each in turn and open the floor for discussion.",
      tr_explanation:
        "'Friends' iş toplantısında garip — 'team' ya da kimseye hitap etmemek doğal. 'Some things' belirsiz; chair olarak ajandayı sayman gerekir. 'Please everyone speak now' yönetimsiz — 'open the floor' kontrolü chair'de tutar. Profesyonel: net ajanda + söz dağıtımı.",
    },
    {
      id: "ex.pb1.12.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Haftalık ekip toplantısını sen yönetiyorsun. Üç ajanda maddesi var ve süre dar. Kontrolü kibarca elde tutmalısın.",
      npc_role: "Team Member",
      setting: "Weekly team meeting — video call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, are we ready? My calendar says we're starting now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|right|okay)",
            "let('s| us) get (started|going)",
            "(thanks for|thanks everyone for) joining",
            "(we have|there are) three (items|things) on the agenda",
          ],
          hint_tr:
            "Resmi aç: 'Right, let's get started. Thanks for joining — we have three items on the agenda today.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Where do you want to start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first item|the first item|to kick off|to begin)",
            "(on the agenda|is|will be)",
            "(Q2 deliverables|the deliverables|project status|the launch)",
            "(can|could) (you|someone) (walk us through|give us a quick update)",
          ],
          hint_tr:
            "İlk madde: 'First item on the agenda is the Q2 deliverables. Could you walk us through the status?'",
        },
        {
          speaker: "npc",
          message:
            "Sure. We've completed the API work, but the design review is still pending — and I want to raise a separate concern about budget.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you) for (the update|the summary)",
            "let('s| us) park (the budget|that point|that)",
            "(we'll come back to|i'll add that to)",
            "(any other items|under any other business)",
          ],
          hint_tr:
            "Konuyu yönet: 'Thanks for the update. Let's park the budget point — I'll add it to AOB and we'll come back to it.'",
        },
        {
          speaker: "npc",
          message:
            "Fine by me. What's the next item?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(moving on|next up|second item|item two)",
            "(on the agenda|we have|is)",
            "(stakeholder alignment|the stakeholder update|next week('s| is) priorities)",
            "(we'll be|we are going to) (looking at|discussing)",
          ],
          hint_tr:
            "İkinci madde: 'Moving on — second item is stakeholder alignment. We'll be discussing next week's priorities.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. We're at fifty minutes — should we wrap?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let('s| us) wrap up|let me summarise|to wrap up)",
            "(action items|next steps|key takeaways)",
            "(i('ll| will) send|i('ll| will) follow up with) (the minutes|a recap)",
            "(thanks everyone|thanks all|thank you for your time)",
          ],
          hint_tr:
            "Kapanış: 'Let me summarise the action items — I'll send the minutes by end of day. Thanks everyone.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks — that was a tight meeting. See you next week.",
        },
      ],
    },
    {
      id: "ex.pb1.12.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Toplantıyı açmak için en profesyonel kalıp?",
          options: [
            "Okay friends, let's talk.",
            "Hello everyone, what should we do?",
            "Right, let's get started — three items on the agenda today.",
            "Please speak now, somebody.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Let's get started' + ajanda sayımı chair otoritesini kurar. 'Friends' iş toplantısında garip.",
        },
        {
          question: "'Park that point' ne anlama gelir?",
          options: [
            "Konuyu tamamen iptal et",
            "Konuyu bir kenara ayır, sonra dön",
            "Konuyu kayda al",
            "Konuyu reddet",
          ],
          correct_index: 1,
          tr_explanation:
            "'Park' bir konuyu geçici olarak ertelemek. AOB veya toplantı sonuna ertelenir, iptal değil.",
        },
        {
          question:
            "Toplantıyı kapatırken chair'in mutlaka yapması gereken?",
          options: [
            "Sadece 'thanks' deyip kapatmak",
            "Action item'ları özetleyip kim ne yapacağını netleştirmek",
            "Herkese tek tek veda etmek",
            "Açtığı her konuyu tekrar etmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Action item özeti olmadan toplantı yarıda kalmış sayılır. 'Let me summarise the action items' chair sorumluluğu.",
        },
      ],
    },
    {
      id: "ex.pb1.12.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Let's get started — first item on the agenda is the Q2 deliverables.",
      ipa:
        "/lɛts ɡɛt ˈstɑːtɪd fɜːst ˈaɪtəm ɒn ði əˈdʒɛndə ɪz ðə kjuː tuː dɪˈlɪvərəbəlz/",
      tr_hint:
        "Toplantı açılışı. 'Agenda' = ı-CEN-dı. 'Deliverables' = dı-LİV-rı-bılz. 'Let's get' bağlanır: 'lets-get'.",
    },
  ],
};

// ============================================================
// Lesson 13 — Haftalık Status Raporu Yazma
// ============================================================
export const professionalB1Lesson_13: BundledLesson = {
  id: "professional.b1.statusupdate.1",
  skill_id: "professional.b1",
  index: 13,
  title: "Writing a Weekly Status Update",
  description:
    "Yöneticiye ya da paydaşa haftalık ilerleme raporu yazma. 'This week: completed', 'Next week: focus on' yapısı, present perfect.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.13.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "This week we've completed",
      tr_translation: "Bu hafta tamamladık",
      example:
        "This week we've completed the user research and the first round of design reviews.",
      example_tr:
        "Bu hafta kullanıcı araştırmasını ve ilk tur tasarım incelemelerini tamamladık.",
    },
    {
      id: "ex.pb1.13.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Bu hafta API entegrasyonunu ve ilk QA turunu tamamladık. Önümüzdeki hafta paydaş onayına ve canlıya alma hazırlığına odaklanacağız.",
      target:
        "This week we've completed the API integration and the first round of QA. Next week we'll be focusing on stakeholder sign-off and launch preparation.",
      accepted_variants: [
        "This week we completed the API integration and the first QA round. Next week we'll focus on stakeholder sign-off and launch prep.",
        "We've finished the API integration and the first QA round this week. Next week we're focusing on stakeholder sign-off and launch preparation.",
        "This week's deliverables: API integration and first QA round complete. Next week we'll be focusing on stakeholder sign-off and launch prep.",
        "This week we've wrapped up the API integration and first QA pass. Next week the focus is stakeholder sign-off and launch readiness.",
        "We have completed the API integration and the first round of QA this week. The focus for next week will be stakeholder sign-off and launch preparation.",
      ],
      tr_hint:
        "'We've completed' = present perfect (bitmiş sonuç). 'We'll be focusing on' = future continuous (devam edecek odak). 'Sign-off' = onay.",
    },
    {
      id: "ex.pb1.13.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "One blocker to ___ : we're waiting on legal approval before we can ship the new terms.",
      answer: "flag",
      distractors: ["say", "alert on", "warning", "note about"],
      tr_hint:
        "'Flag a blocker' = bir engeli işaretlemek. Status raporunda sabit kalıp.",
    },
    {
      id: "ex.pb1.13.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Next",
        "week",
        "we'll",
        "be",
        "focusing",
        "on",
        "stakeholder",
        "alignment",
      ],
      correct_sentence:
        "Next week we'll be focusing on stakeholder alignment",
      tr_translation:
        "Önümüzdeki hafta paydaş hizalanmasına odaklanacağız.",
    },
    {
      id: "ex.pb1.13.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am sorry sir, this week I did some things, next week I will try do more, please don't be angry.",
      correct_sentence:
        "Quick update — this week I've completed the onboarding flow and started on analytics. Next week I'll be focusing on the dashboard polish. One blocker to flag: I'm waiting on the analytics API key.",
      tr_explanation:
        "'I am sorry sir' + 'please don't be angry' aşırı özür kültürü — Türk profesyonelin sık tuzağı. Status update'te savunmacı olma; yapılanı net listele, sonraki adımı söyle, blocker'ı işaretle. 'Some things' belirsiz — somut deliverable yaz.",
    },
    {
      id: "ex.pb1.13.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yöneticin Slack'ten 'Haftalık update gönderir misin?' diye yazdı. Önce structured bir update gönderiyorsun, sonra sorularını cevaplıyorsun.",
      npc_role: "Manager",
      setting: "Slack DM — weekly update request",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — can you send your weekly update when you have a moment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|absolutely|happy to)",
            "(here you go|here it is|sending now|here's a quick recap)",
            "(this week|so far this week)",
            "(i('ve| have) completed|we('ve| have) (completed|shipped|wrapped up))",
          ],
          hint_tr:
            "Hazır cevap: 'Of course — here's a quick recap. This week I've completed the onboarding flow.'",
        },
        {
          speaker: "npc",
          message:
            "Great. What's the plan for next week?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(next week|going forward|in the coming week)",
            "(i('ll| will) be|we('ll| will) be) (focusing|working) on",
            "(the dashboard|analytics|stakeholder alignment|launch preparation)",
            "(my main focus|the priority) (will be|is)",
          ],
          hint_tr:
            "Future continuous: 'Next week I'll be focusing on the dashboard polish and stakeholder alignment.'",
        },
        {
          speaker: "npc",
          message:
            "Anything I should be aware of? Any blockers?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one|a) blocker (to flag|i should mention|on my side)",
            "i('m| am) waiting on (legal|the api|design|approval)",
            "(it would help|it would be useful) if (you could|we could)",
            "(could you|would you mind) (chasing|pinging|nudging)",
          ],
          hint_tr:
            "Net blocker + spesifik istek: 'One blocker to flag — I'm waiting on the analytics API key. Could you nudge the data team?'",
        },
        {
          speaker: "npc",
          message:
            "Sure, I'll ping them today. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) (everything|all|it for now))",
            "(thanks for the support|thanks for nudging them|thanks)",
            "(i('ll| will) send|i('ll| will) share) (the full update|the written version) (in email|by email|in the channel)",
            "(let me know|happy to walk through) (if you need more detail|if anything is unclear)",
          ],
          hint_tr:
            "Profesyonel kapanış: 'That's everything for now — I'll send the full written update in email. Thanks for the support!'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, looking forward to it.",
        },
      ],
    },
    {
      id: "ex.pb1.13.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "Status update'in en doğru yapı sırası nedir?",
          options: [
            "Özür — vaatler — şikayet",
            "This week: tamamlananlar — Next week: odak — Blockers",
            "Selam — havadan sudan — bitti",
            "Sadece blocker listesi",
          ],
          correct_index: 1,
          tr_explanation:
            "Standart status update üç parçalıdır: bu hafta yapılanlar, gelecek hafta odak, ve flag edilen engeller. Özürlü açılış güveni düşürür.",
        },
        {
          question:
            "'I've completed the API integration' — niye present perfect?",
          options: [
            "Geçmişte oldu, şimdi sonucu önemli",
            "Şu anda yapıyorum demek",
            "Gelecekte yapacağım demek",
            "Yanlış kullanım",
          ],
          correct_index: 0,
          tr_explanation:
            "Present perfect: geçmişte tamamlanan ama şimdiyi etkileyen aksiyon. Status raporda haftanın sonucu = present perfect.",
        },
        {
          question: "'Flag a blocker' ne demek?",
          options: [
            "Engeli görmezden gel",
            "Engeli bayrakla işaretle, dikkat çek",
            "Engeli kapat",
            "Engeli yeniden tanımla",
          ],
          correct_index: 1,
          tr_explanation:
            "'Flag' bir konuyu görünür hale getirmek. Status raporunda 'One blocker to flag' sabit kalıp.",
        },
      ],
    },
    {
      id: "ex.pb1.13.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "This week I've completed the onboarding flow; next week I'll be focusing on analytics.",
      ipa:
        "/ðɪs wiːk aɪv kəmˈpliːtɪd ði ˈɒnbɔːdɪŋ fləʊ nɛkst wiːk aɪl biː ˈfəʊkəsɪŋ ɒn əˈnælɪtɪks/",
      tr_hint:
        "Status update kalıbı. 'I've completed' bağlanır: 'ayv-kımp-Lİ-tıd'. 'Focusing' = FOH-kı-sing. Net, kendinden emin.",
    },
  ],
};

// ============================================================
// Lesson 14 — Müşteri Şikayetiyle Başa Çıkma
// ============================================================
export const professionalB1Lesson_14: BundledLesson = {
  id: "professional.b1.complainthandling.1",
  skill_id: "professional.b1",
  index: 14,
  title: "Handling a Customer Complaint",
  description:
    "Sinirli bir müşteriye profesyonel cevap verme: empati, sorumluluk, çözüm. 'I understand your frustration', 'Let me make this right' kalıpları.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.14.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I understand your frustration",
      tr_translation: "Sıkıntınızı anlıyorum",
      example:
        "I understand your frustration — let me take a look at your account right now.",
      example_tr:
        "Sıkıntınızı anlıyorum — hesabınıza şimdi bir bakayım.",
    },
    {
      id: "ex.pb1.14.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Sıkıntınızı anlıyorum ve bunun için gerçekten üzgünüm. Bunu telafi etmeme izin verin — bugün içinde tam iade ve takip e-postası göndereceğim.",
      target:
        "I understand your frustration and I'm genuinely sorry about that. Let me make this right — I'll process a full refund today and send you a follow-up email.",
      accepted_variants: [
        "I understand your frustration and I'm really sorry about this. Let me make it right — I'll issue a full refund today and follow up by email.",
        "I can see why you're frustrated, and I'm sorry. Let me make this right — I'll process a full refund and send you a follow-up email today.",
        "I understand how frustrating this is and I'm sorry. Let me make this right — I'll arrange a full refund today and email you a confirmation.",
        "I hear you, and I'm sorry this has happened. Let me make this right — I'll process a refund today and send you a follow-up by email.",
        "I understand your frustration, and I apologise. Let me make this right — I'll issue a full refund today and follow up with you by email.",
      ],
      tr_hint:
        "'Make this right' = telafi etmek. 'I'm genuinely sorry' = gerçekten üzgünüm (samimi, abartısız). 'Follow-up email' = takip e-postası.",
    },
    {
      id: "ex.pb1.14.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Let me take ___ for this — it shouldn't have happened, and I'll personally make sure it's resolved.",
      answer: "ownership",
      distractors: ["responsible", "the blame on", "guilt", "fault for"],
      tr_hint:
        "'Take ownership' = sorumluluğu üstlenmek. Şikayet yönetiminde güçlü kalıp; 'take the blame' ise pasif/savunmacı.",
    },
    {
      id: "ex.pb1.14.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let",
        "me",
        "make",
        "this",
        "right",
        "for",
        "you",
        "today",
      ],
      correct_sentence: "Let me make this right for you today",
      tr_translation: "Bunu bugün sizin için telafi edeyim.",
    },
    {
      id: "ex.pb1.14.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am sorry sir, but it is not my fault, you must speak with other department, I cannot do anything.",
      correct_sentence:
        "I'm sorry you've had this experience — let me take ownership and see what I can do right now. I won't pass you around.",
      tr_explanation:
        "'I am sorry sir' aşırı formal + 'it is not my fault' sorumluluk yıkma — müşteri için en kötü kombinasyon. 'You must speak with other department' = 'pass the buck' = profesyonelce sıyrılma; Batı kültüründe güven kaybettirir. Doğru tepki: empati + sorumluluk + somut aksiyon.",
    },
    {
      id: "ex.pb1.14.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hizmetinizden memnun olmayan kızgın bir müşteri telefon etti. Sakin kal, empati kur, çöz.",
      npc_role: "Frustrated Customer",
      setting: "Inbound complaint call — late delivery + damaged product",
      turns: [
        {
          speaker: "npc",
          message:
            "I've been waiting two weeks for this order, and when it finally arrived, the box was crushed and the product is broken!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am) (so |really |truly )?sorry|i apologise|my sincere apologies)",
            "(i understand|i can understand|i hear) (your frustration|how frustrating)",
            "(that('s| is)) (not (good enough|acceptable)|absolutely not what we want)",
            "(let me|allow me to) (take ownership|look into this|put this right)",
          ],
          hint_tr:
            "Empati + sahiplenme: 'I'm really sorry — I understand your frustration. Let me take ownership and put this right.'",
        },
        {
          speaker: "npc",
          message:
            "I want a full refund. I'm not interested in another replacement that takes another two weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|of course|completely understandable)",
            "(let me|i('ll| will)) process (a full refund|the refund) (today|right away|straight away)",
            "(you should see|the funds will be back) (in your account|within \\d+ (business )?days)",
            "(no need to|you don't have to) (return|send back|wait for) (a replacement|another product)",
          ],
          hint_tr:
            "Talebi kabul + spesifik aksiyon: 'Absolutely — let me process a full refund right away. You should see the funds in three to five business days.'",
        },
        {
          speaker: "npc",
          message:
            "Fine. And what are you going to do about the damaged item? Should I send it back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please don't worry|no need to) (return|send) (it|the item) (back)?",
            "(we'll|i'll) (cover|sort) (the disposal|recycling)",
            "(i('ll| will)) (email|send) (you|over) (a prepaid label|disposal instructions) if needed",
            "(consider that|keep it|please dispose of it) (on us|safely)",
          ],
          hint_tr:
            "Müşteri yükünü azalt: 'Please don't worry about sending it back — consider it on us. I'll email you disposal instructions.'",
        },
        {
          speaker: "npc",
          message:
            "Alright. Honestly, this whole thing has been a nightmare. I'm not sure I'll order from you again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i completely understand|that('s| is)) (fair|completely fair|understandable)",
            "(if you('d| would)|should you) give us another (chance|opportunity)",
            "(i('d| would) like to|let me) (add a credit|offer a discount|apply a) (to your account|on your next order)",
            "(let me|i('ll| will)) follow up (personally )?(by email|with confirmation) (today|right after this call)",
          ],
          hint_tr:
            "Müşteriyi geri kazan: 'That's completely fair. Let me add a credit to your account and follow up by email today with confirmation.'",
        },
        {
          speaker: "npc",
          message:
            "Okay — I appreciate you sorting this quickly. Thank you.",
        },
      ],
    },
    {
      id: "ex.pb1.14.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "Sinirli müşteriye en doğru ilk cevap nedir?",
          options: [
            "It is not my fault.",
            "Please calm down, sir.",
            "I understand your frustration — let me take a look right now.",
            "You should have read the terms.",
          ],
          correct_index: 2,
          tr_explanation:
            "Empati + aksiyon en güçlüdür. 'Calm down' patronizing. Suç yıkmak ('not my fault') güveni bitirir.",
        },
        {
          question: "'Take ownership' Türkçesi ve etkisi?",
          options: [
            "Sahiplik almak — mülk satın almak",
            "Sorumluluğu üstlenmek — müşteri güveni inşa eder",
            "Müşteriye haksızlık yapmak",
            "Konuyu başka departmana iletmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Take ownership' bir sorunun sahiplenilmesi. 'Pass the buck' (sorunu başkasına yıkmak) tersi.",
        },
        {
          question:
            "Müşteri 'I'll never order again' dediğinde profesyonel cevap?",
          options: [
            "Okay, goodbye then.",
            "That's completely fair — let me add a credit to your account.",
            "Please don't say that, sir.",
            "You are being unfair.",
          ],
          correct_index: 1,
          tr_explanation:
            "Duyguyu valide et ('completely fair') + somut bir geri kazanma teklifi sun. Yalvarmak veya saldırmak ilişkiyi bitirir.",
        },
      ],
    },
    {
      id: "ex.pb1.14.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "I understand your frustration — let me make this right for you today.",
      ipa:
        "/aɪ ˌʌndəˈstænd jɔː frʌˈstreɪʃən lɛt miː meɪk ðɪs raɪt fə juː təˈdeɪ/",
      tr_hint:
        "Şikayet yönetimi ana kalıbı. 'Frustration' = frıs-TREY-şın. 'Make this right' bağlanır: 'meyk-ðıs-rayt'. Yavaş, sakin, kendinden emin.",
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const professionalB1Lessons: BundledLesson[] = [
  professionalB1Lesson_1,
  professionalB1Lesson_2,
  professionalB1Lesson_3,
  professionalB1Lesson_4,
  professionalB1Lesson_5,
  professionalB1Lesson_6,
  professionalB1Lesson_7,
  professionalB1Lesson_8,
  professionalB1Lesson_9,
  professionalB1Lesson_10,
  professionalB1Lesson_11,
  professionalB1Lesson_12,
  professionalB1Lesson_13,
  professionalB1Lesson_14,
];
