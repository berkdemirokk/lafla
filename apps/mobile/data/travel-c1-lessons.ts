// Travel C1 lessons — sophisticated traveler register.
// 15 lessons paired with travel-c1-scenes.ts.
// Focus: diplomatic recovery, EU261, paper-trail escalation, regional accents,
// deep cultural engagement, refined complaints that actually move staff.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Concierge'e yumuşak yaklaş, suite upgrade iste
// ============================================================
export const travelC1Lesson_1: BundledLesson = {
  id: "travel.c1.upgrade.1",
  skill_id: "travel.c1.upgrade",
  index: 1,
  title: "Suite Upgrade Lobiledirme",
  description:
    "Concierge'e 'I deserve' demeden suite koparma. Hedge'li dilekler, loyalty ve anniversary leverage'ını nazikçe örtmek.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.tc1.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I was wondering if there might be any flexibility",
      tr_translation: "Acaba biraz esneklik olabilir mi diye merak ediyordum",
      example:
        "I was wondering if there might be any flexibility on room category tonight.",
      example_tr:
        "Acaba bu gece oda kategorisinde biraz esneklik olabilir mi diye merak ediyordum.",
    },
    {
      id: "ex.tc1.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Acaba bu gece bir suite'e yükseltme şansı olur mu?",
      target:
        "I was wondering if there might be any chance of an upgrade to a suite tonight.",
      accepted_variants: [
        "I don't suppose there's any chance of a suite upgrade tonight?",
        "Would there be any possibility of an upgrade to a suite this evening?",
        "If it's at all possible, could I be considered for a suite upgrade tonight?",
        "I was hoping there might be a chance of a suite tonight.",
      ],
      tr_hint:
        "C1'de upgrade isteği: 'I was wondering if...' veya 'I don't suppose...' — entitled görünmeden zemin yokla.",
    },
    {
      id: "ex.tc1.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I don't ___ there's any chance of a quieter floor tonight?",
      answer: "suppose",
      distractors: ["think", "want", "know"],
      tr_hint:
        "'I don't suppose...' = en hedge'li dilek kalıbı. Reddi kolaylaştırır, kabul olasılığını artırır.",
    },
    {
      id: "ex.tc1.1.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am loyal member, you should give me suite for free tonight.",
      correct_sentence:
        "I've been a loyalist for years — if there's any flexibility on category tonight, I'd be most grateful.",
      tr_explanation:
        "'You should give me' entitled. C1'de leverage'ı sezdir, dayatma. 'If there's any flexibility' + 'most grateful' — kapıyı açar, reddi sertleştirmez.",
    },
    {
      id: "ex.tc1.1.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Lüks otelde, yıldönümün için suite upgrade arıyorsun. Concierge senior, diplomatik konuş.",
      npc_role: "Hotel manager",
      setting: "Five-star hotel lobby, evening check-in",
      turns: [
        {
          speaker: "npc",
          message:
            "Good evening, sir. I see we have you booked in a deluxe king for two nights. Anything I can help with before I hand you the keys?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was wondering|i don'?t suppose|would there be).{0,80}(upgrade|suite|category|flexibility)",
            "(if it'?s|if there'?s).{0,40}(any (flexibility|chance|possibility)).{0,40}(upgrade|suite|category)",
            "(could|might).{0,40}(consider|look at).{0,40}(upgrade|suite)",
            "(it'?s|its) (our|my).{0,20}(anniversary|honeymoon).{0,80}(suite|upgrade|wondering)",
            "(i was hoping|i'?d hoped).{0,40}(possible|chance|might be).{0,40}(suite|upgrade|category)",
            "(any chance|is there a chance).{0,40}(upgrade|suite|better room|something nicer)",
            "(would it be possible|could it be possible).{0,40}(upgrade|suite|consider)",
          ],
          hint_tr:
            "Hedge'li başla: 'I was wondering if there might be any flexibility on category...' veya leverage'ı yumuşak ekle ('it's our anniversary').",
        },
        {
          speaker: "npc",
          message:
            "Let me have a look at what we have available tonight, sir. May I ask — is this a special occasion?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|actually|in fact).{0,80}(anniversary|honeymoon|birthday|special)",
            "(it'?s|its) (our|my).{0,30}(anniversary|honeymoon|birthday)",
            "we'?re celebrating.{0,40}(anniversary|honeymoon|birthday)",
            "(my|our).{0,20}(wife|husband|partner).{0,40}(anniversary|birthday)",
            "(as a matter of fact|since you ask).{0,40}(anniversary|honeymoon|birthday|special)",
            "(this trip|the stay) is.{0,40}(our|my).{0,30}(anniversary|honeymoon|birthday)",
            "(we'?re here for|here to mark).{0,40}(anniversary|honeymoon|milestone)",
          ],
          hint_tr:
            "Vesileni nazikçe söyle: 'Actually, it's our tenth anniversary' — pazarlık yapmıyorsun, paylaşıyorsun.",
        },
        {
          speaker: "npc",
          message:
            "Wonderful, congratulations. I have an executive suite on the eighteenth floor — quieter side. Would that suit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that would be|that'?d be|that sounds).{0,30}(wonderful|perfect|lovely|marvellous|ideal)",
            "(thank you|i really appreciate|i'?m most grateful|much appreciated)",
            "(that'?s|that is) (so |very |incredibly )?(kind|generous|thoughtful)",
            "i can'?t thank you enough",
            "(that'?s|that is) (more than|exactly) (i could have|what i).{0,40}(hoped|asked)",
            "(suits us|works|would be lovely).{0,30}(perfectly|beautifully|wonderfully)",
            "(very kind of you|how very kind|how thoughtful).{0,30}(thank you|appreciate)",
          ],
          hint_tr:
            "Aşırı sevinme — sakin ve takdirkar: 'That would be wonderful, thank you — I'm most grateful.'",
        },
        {
          speaker: "npc",
          message:
            "My pleasure, sir. I'll have the keys ready in just a moment. Enjoy your stay.",
        },
      ],
    },
    {
      id: "ex.tc1.1.6",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "C1 upgrade dilekçesinde EN doğru tonu seç:",
          options: [
            "I deserve a suite because I'm loyal.",
            "I was wondering if there might be any flexibility on category tonight.",
            "Give me a better room, I paid a lot.",
            "Why can't I have a suite?",
          ],
          correct_index: 1,
          tr_explanation:
            "'I was wondering if there might be any flexibility' — entitled değil, kapı açar.",
        },
        {
          question: "'I don't suppose...' kalıbı niye güçlü?",
          options: [
            "Aslında zayıf, hiç kullanılmaz",
            "Reddi kolaylaştırır, bu yüzden kabul olasılığını artırır",
            "Resmi olmayan dil, kibar değil",
            "Sadece olumsuz cevap için",
          ],
          correct_index: 1,
          tr_explanation:
            "Karşı tarafa 'hayır' demesi için zemin sunduğunda, paradoksal olarak daha sık 'evet' alırsın.",
        },
        {
          question: "Suite teklif edildi — en doğal C1 cevabı?",
          options: [
            "Yes, finally!",
            "That would be wonderful, thank you — I'm most grateful.",
            "Of course, that's what I wanted.",
            "OK, fine.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sakin takdir + 'most grateful' — sınıf işareti. Aşırı sevinmek leverage'ını gösterir.",
        },
      ],
    },
    {
      id: "ex.tc1.1.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I was wondering if there might be any flexibility on category.",
      ipa:
        "aɪ wəz ˈwʌndərɪŋ ɪf ðɛər maɪt biː ˈɛni flɛksəˈbɪləti ɒn ˈkætəɡəri",
      tr_hint:
        "'I was' = 'aɪ-wəz' (zayıf). 'Wondering' yumuşak — 'WAN-dring'. 'Flexibility' beş hece, vurgu 'BIL'de. Cümle sonu düşer, soru tonu değil.",
    },
    {
      id: "ex.tc1.1.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I don't suppose there's any chance of a quieter room — perhaps on a higher floor?",
      voice_hint: "male_uk",
      tr_hint:
        "İngiliz aksanı — 'I don't suppose' yumuşak, neredeyse mırıltı. 'Perhaps' = 'pə-HÆPS'. Cümle inişli, soru değil sezdirme.",
    },
    {
      id: "ex.tc1.1.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Let me see what I can do for you, sir — give me just a moment.",
      transcription_target:
        "Let me see what I can do for you, sir — give me just a moment.",
      tr_hint:
        "Concierge'in 'kapıyı açıyorum' sinyali. 'What I can do' birleşik. 'Just a moment' yumuşak — gerçekte bakıyor.",
    },
    {
      id: "ex.tc1.1.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd be most grateful",
      tr_translation: "Çok minnettar olurum",
      example: "I'd be most grateful if you could see what's available.",
      example_tr: "Müsait olanlara bakabilirseniz çok minnettar olurum.",
    },
  ],
};

// ============================================================
// Lesson 2 — Check-in'de 'any chance of a better room?'
// ============================================================
export const travelC1Lesson_2: BundledLesson = {
  id: "travel.c1.upgrade.2",
  skill_id: "travel.c1.upgrade",
  index: 2,
  title: "Low-Stakes Better Room Ricası",
  description:
    "Gülümseme + low-stakes soru: 'If it's not too much trouble...' Entitled görünmeden club lounge erişimi koparmak.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.tc1.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "if it's not too much trouble",
      tr_translation: "Eğer çok zahmet olmazsa",
      example:
        "If it's not too much trouble, could you see if anything's available on a higher floor?",
      example_tr:
        "Eğer çok zahmet olmazsa, üst katlarda bir şey var mı bakabilir misiniz?",
    },
    {
      id: "ex.tc1.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Eğer çok zahmet olmazsa, daha iyi bir oda şansı var mı?",
      target:
        "If it's not too much trouble, is there any chance of a better room?",
      accepted_variants: [
        "If it wouldn't be too much trouble, any chance of a better room?",
        "Not to be a bother, but is there any chance of a slightly better room?",
        "If it's not too much trouble, could I be looking at any better availability?",
        "Sorry to ask — any chance of a better room tonight?",
      ],
      tr_hint:
        "'If it's not too much trouble' + 'any chance of' — düşük baskılı, kibar zemin yoklama.",
    },
    {
      id: "ex.tc1.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Not to be a ___, but any chance of a quieter room?",
      answer: "bother",
      distractors: ["nuisance", "trouble", "pain"],
      tr_hint:
        "'Not to be a bother' = rahatsızlık olmasın diye. C1'de standart yumuşatma.",
    },
    {
      id: "ex.tc1.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "any",
        "chance",
        "of",
        "club",
        "lounge",
        "access",
        "this",
        "stay",
      ],
      correct_sentence: "any chance of club lounge access this stay",
      tr_translation: "Bu konaklamada club lounge erişimi şansı var mı?",
    },
    {
      id: "ex.tc1.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I want club lounge for free, I am important customer.",
      correct_sentence:
        "If it's not too much trouble, any chance of club lounge access this stay?",
      tr_explanation:
        "'I want' + 'important customer' — entitled, defensive tepki tetikler. Low-stakes soru ('any chance of...') zemin yoklar; reddedilirse kayıp yok.",
    },
    {
      id: "ex.tc1.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Check-in'de görevliyle göz teması, gülümseme. Düşük baskılı soruyla club lounge erişimi yokla.",
      npc_role: "Hotel manager",
      setting: "Front desk, midday check-in",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome, you're all set. Room 1208, two queens, breakfast included. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if it'?s not too much trouble|not to be a bother|sorry to ask).{0,60}(any chance|might there be|would there be).{0,40}(better|higher|lounge|upgrade)",
            "(any chance of|is there any chance).{0,40}(club lounge|lounge access|upgrade|better room)",
            "(while we'?re|while you'?re) (there|at it).{0,60}(lounge|upgrade|better)",
            "(i was wondering|i don'?t suppose).{0,40}(lounge|upgrade|better room|higher floor)",
            "(if it isn'?t|if it'?s not) (a hassle|too much).{0,40}(lounge|upgrade|better)",
            "(would|could) (you|it be possible to) (look at|see about).{0,40}(lounge|upgrade|category)",
          ],
          hint_tr:
            "Düşük baskı: 'If it's not too much trouble, any chance of club lounge access?' — gülümseme.",
        },
        {
          speaker: "npc",
          message:
            "Let me take another look. The lounge is typically club-tier only, but I'll see what I can do.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|i appreciate|that'?s|much appreciated)(.{0,40})(kind|generous|so much)",
            "(no rush|no pressure|whenever you can)",
            "i (really )?appreciate (it|you|that)",
            "(that'?s|that is) (very |so )?kind of you",
            "(take your time|in your own time).{0,30}(thank you|appreciate)",
            "(whatever you can|whatever works) (manage|do).{0,30}(thank you|appreciate)",
            "(i'?m grateful|i'?m most grateful) for (your|the).{0,30}(time|effort|trouble)",
          ],
          hint_tr:
            "Baskı yapma: 'No rush — really appreciate it.' Cömertliğin ödülü, baskı değil sabır.",
        },
        {
          speaker: "npc",
          message:
            "Alright — I've added complimentary lounge access for the duration of your stay. Enjoy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) (so |very |incredibly )?(kind|generous|thoughtful)",
            "i can'?t thank you enough",
            "(thank you|much appreciated|i'?m most grateful).{0,30}(so much|very much|sincerely)",
            "(absolute legend|you'?re a star|wonderful)",
            "(that has|that'?s) made (my|our) (day|stay|trip|evening)",
            "(genuinely|truly) (appreciate|grateful for) (it|that|your kindness)",
            "(what a|that'?s a) (lovely|generous) (gesture|surprise|touch)",
          ],
          hint_tr:
            "Şükranı içtenleştir: 'That's incredibly kind — thank you so much.'",
        },
        {
          speaker: "npc",
          message: "My pleasure. Enjoy your stay with us.",
        },
      ],
    },
    {
      id: "ex.tc1.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Check-in upgrade ricasının altın kuralı?",
          options: [
            "Yüksek sesle hak talep et",
            "Düşük baskı: 'If it's not too much trouble, any chance of...'",
            "Manager'ı çağırt",
            "Loyalty kart göster, beklemeden iste",
          ],
          correct_index: 1,
          tr_explanation:
            "Düşük baskı + low-stakes + gülümseme. Reddedilirse kayıp yok.",
        },
        {
          question: "'Not to be a bother, but...' = ?",
          options: [
            "Rahatsız olmadığım belli",
            "Rahatsızlık olmasın diye, ama...",
            "Bana sorma",
            "Rahatsızsam söyle",
          ],
          correct_index: 1,
          tr_explanation:
            "Kendi ricanı küçültür, karşı tarafın kabulünü kolaylaştırır.",
        },
        {
          question: "Manager 'sees what I can do' dediğinde ne yaparsın?",
          options: [
            "Israrla bekle, üstüne git",
            "No rush — appreciate it.' diyerek sabırla bekle",
            "Manager'ın üstünü çağır",
            "Telefonunu çıkar, başka otel ara",
          ],
          correct_index: 1,
          tr_explanation:
            "Sabır + minnet manageri sana çalıştırır. Baskı ters teper.",
        },
      ],
    },
    {
      id: "ex.tc1.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "If it's not too much trouble, any chance of a better room?",
      ipa:
        "ɪf ɪts nɒt tuː mʌtʃ ˈtrʌbəl ˈɛni tʃæns ɒv ə ˈbɛtər ruːm",
      tr_hint:
        "'If it's' = 'ifits' bağlanır. 'Trouble' = 'TRA-bəl', vurgu ilk. 'Any chance of' = 'eni-CHANS-əv'. Cümle inişli, ricacı ton.",
    },
    {
      id: "ex.tc1.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Sorry to ask, but is there any chance of lounge access this stay?",
      voice_hint: "female_uk",
      tr_hint:
        "Native gibi söyle. 'Sorry to ask' bir nefes, sonra ana ricaya geç. Ses inişli — emir değil, dilek.",
    },
    {
      id: "ex.tc1.2.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "club lounge access",
      tr_translation: "Otelin VIP lounge'una giriş hakkı",
      example:
        "I'd love it if club lounge access were on the table — if you've got the room.",
      example_tr:
        "Müsaitse, club lounge erişimi de gündemde olabilir mi acaba.",
    },
  ],
};

// ============================================================
// Lesson 3 — Corporate rate'i uzatma için lobiledirme
// ============================================================
export const travelC1Lesson_3: BundledLesson = {
  id: "travel.c1.upgrade.3",
  skill_id: "travel.c1.upgrade",
  index: 3,
  title: "Corporate Rate Uzatma",
  description:
    "Üç gece extend, corporate rate normalde geçmiyor. GM'e gitmeden duty manager'ı 'I'd be enormously grateful if you could honour...' ile ikna et.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.tc1.3.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "honour the corporate rate",
      tr_translation: "Kurumsal tarifeyi geçerli sayma",
      example:
        "I'd be enormously grateful if you could honour the corporate rate for the extension.",
      example_tr:
        "Uzatma için kurumsal tarifeyi geçerli sayabilirseniz çok minnettar olurum.",
    },
    {
      id: "ex.tc1.3.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Üç gece daha uzatmak istiyorum, kurumsal tarifeyi geçerli sayabilir misiniz?",
      target:
        "I'd like to extend by three nights — would you be able to honour the corporate rate?",
      accepted_variants: [
        "I'd like to extend three more nights — could you honour the corporate rate for the additional nights?",
        "I'm hoping to extend by three nights. Any chance of honouring the corporate rate on the extension?",
        "I'd be enormously grateful if you could carry the corporate rate over the extension.",
        "Could the corporate rate be honoured on the additional three nights, please?",
      ],
      tr_hint:
        "Önce niyeti söyle ('I'd like to extend'), sonra ricayı hedge'le ('would you be able to honour...').",
    },
    {
      id: "ex.tc1.3.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "I'd be enormously ___ if you could honour the rate.",
      answer: "grateful",
      distractors: ["happy", "appreciative", "obliged"],
      tr_hint:
        "'Enormously grateful' = çok minnettar. C1'de premium otel/iş bağlamında standart.",
    },
    {
      id: "ex.tc1.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "any",
        "flexibility",
        "on",
        "the",
        "rate",
        "for",
        "the",
        "additional",
        "nights",
      ],
      correct_sentence: "any flexibility on the rate for the additional nights",
      tr_translation: "Ek geceler için tarifede biraz esneklik var mı?",
    },
    {
      id: "ex.tc1.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I want same price for three more nights, my company pays.",
      correct_sentence:
        "I'd be enormously grateful if you could honour the corporate rate on the additional three nights.",
      tr_explanation:
        "'I want same price' transactional ve direkt. C1'de duty manager'a 'I'd be enormously grateful' + 'honour the rate' kullanılır — moral hak talebi değil, profesyonel istisna ricası.",
    },
    {
      id: "ex.tc1.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Duty manager'ı (yüksek seviye otel görevlisi) corporate rate'i uzatma için ikna ediyorsun. GM'e eskalasyon yok.",
      npc_role: "Hotel manager",
      setting: "Front office, polite request meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. I hear you'd like to discuss extending your stay — how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like to|i'?m hoping to|i was hoping to).{0,40}extend.{0,40}(three|3) (more )?nights",
            "(could|might) i extend.{0,40}(three|3) (more )?nights",
            "i need to extend.{0,30}(three|3) (more |additional )?nights",
            "(would it be|is it) possible.{0,40}(extend|stay on|add).{0,30}(three|3|few more) nights",
            "(any chance|wondering) (i could|of).{0,30}(extend|adding).{0,30}(three|3|more) nights",
            "(my plans have|circumstances have).{0,30}(changed|shifted).{0,40}(extend|stay|three|3) more",
          ],
          hint_tr:
            "Niyeti net söyle: 'I'd like to extend by three nights' — sonra rate ricasına geç.",
        },
        {
          speaker: "npc",
          message:
            "Three more nights — let me look. The corporate rate technically only applies to the original booking dates. Standard rate would be applied to the extension.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i understand|i appreciate).{0,40}(but|however).{0,80}(corporate|rate|honour|consider)",
            "(i'?d be|i would be) (enormously|incredibly|most|terribly) grateful.{0,80}(honour|consider|extend)",
            "any (flexibility|chance|possibility).{0,60}(rate|corporate|honour)",
            "(would|could) (you|it) be (possible|feasible).{0,80}(honour|extend|carry)",
            "(if it'?s at all possible|if there'?s any way).{0,40}(honour|carry|extend).{0,40}(corporate|rate)",
            "(i know that|i realise).{0,30}(technically|normally).{0,60}(grateful|consider|exception)",
            "(would you mind|would you consider).{0,40}(applying|extending|honouring).{0,40}(rate|same rate)",
          ],
          hint_tr:
            "Önce anladığını göster, sonra ricayı hedge'le: 'I appreciate that, but I'd be enormously grateful if you could honour the corporate rate on the extension.'",
        },
        {
          speaker: "npc",
          message:
            "I see. May I ask — is your company a regular partner with us?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|indeed|in fact).{0,80}(book|stay|use|regularly|consistently)",
            "we book.{0,40}(regularly|often|consistently|frequently).{0,30}(with you|here)",
            "(my company|we).{0,40}(been|using|partnered).{0,40}(for|over) (years|months)",
            "(this is|that'?s) (my|our) (third|fourth|fifth|nth) (stay|booking|visit).{0,30}(this year|with you)",
            "(we have|we'?ve been) (a |an )?(account|preferred|corporate).{0,40}(client|partner).{0,40}(years|long time)",
            "(yes|certainly) — (we|the firm).{0,40}(regular|frequent|repeat).{0,30}(guest|client|visitor)",
          ],
          hint_tr:
            "Leverage'ı evidence ile sun: 'Yes, we book here consistently — this is my fourth stay this year.'",
        },
        {
          speaker: "npc",
          message:
            "In that case, I'll honour the corporate rate on the extension. Just this once — but happy to make it work.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|i'?m|i am).{0,30}(so |incredibly |truly |enormously )?(grateful|thankful|appreciative)",
            "(that'?s|that is).{0,30}(incredibly|extraordinarily|very) (kind|generous|thoughtful)",
            "i (really |truly |genuinely )?appreciate (it|that|you).{0,40}(very much|so much|enormously)",
            "(much obliged|enormously grateful).{0,30}(thank you|to you)",
            "(that means|that'?s) (a lot|a great deal|enormously helpful).{0,30}(thank you|appreciate)",
            "(very kind|how kind) of you to (do|make).{0,30}(that|the exception)",
            "(i won'?t forget|we won'?t forget) (this|the gesture|your kindness)",
          ],
          hint_tr:
            "İçten teşekkür + cömertliği takdir: 'Thank you, I'm enormously grateful — that's incredibly kind of you.'",
        },
        {
          speaker: "npc",
          message:
            "My pleasure. I'll update the reservation now. Enjoy the rest of your stay.",
        },
      ],
    },
    {
      id: "ex.tc1.3.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Corporate rate uzatma için en güçlü C1 kalıbı?",
          options: [
            "My company demands the same rate",
            "I'd be enormously grateful if you could honour the corporate rate on the extension",
            "Why is the rate different now?",
            "Same price or I leave",
          ],
          correct_index: 1,
          tr_explanation:
            "'Enormously grateful' + 'honour' = profesyonel istisna ricası. Hak talebi değil, ricacı.",
        },
        {
          question: "Duty manager 'corporate rate teknik olarak geçmez' dediğinde?",
          options: [
            "GM'i çağır, üstüne git",
            "Önce 'I appreciate that' ile anla, sonra hedge'li ricaya geç",
            "Otelden çık",
            "Şikayet et",
          ],
          correct_index: 1,
          tr_explanation:
            "Empati + leverage'ı evidence ile sun. Tek seferlik istisna kapısını açar.",
        },
        {
          question: "Otel 'just this once' dediğinde ne yaparsın?",
          options: [
            "Israrla 'her zaman olsun' iste",
            "İçten teşekkür et ve takdir göster — ilişkiyi bozmadan",
            "Sözleşmeye yazdır",
            "Aynısını başka otelde de iste",
          ],
          correct_index: 1,
          tr_explanation:
            "Cömertliği işaretle. Sonraki konaklamada hatırlanan müşteri olursun.",
        },
      ],
    },
    {
      id: "ex.tc1.3.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'd be enormously grateful if you could honour the corporate rate.",
      ipa:
        "aɪd biː ɪˈnɔːrməsli ˈɡreɪtfəl ɪf juː kʊd ˈɒnər ðə ˈkɔːrpərət reɪt",
      tr_hint:
        "'Enormously' = 'ı-NOR-məs-li' (vurgu NOR). 'Honour' = 'ON-ər' (h sessiz, UK). 'Corporate' = 'KOR-prət' (üç hece, hızlı).",
    },
    {
      id: "ex.tc1.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd be most grateful if you could carry the corporate rate over the extension.",
      voice_hint: "male_uk",
      tr_hint:
        "'Carry... over' = devretmek. 'Most grateful' UK formal. Cümle akıcı, vurgu 'carry' ve 'corporate'.",
    },
    {
      id: "ex.tc1.3.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "carry the rate over",
      tr_translation: "Tarifeyi (ek geceye/yeni rezervasyona) devretmek",
      example:
        "Could you carry the rate over the extension nights, if possible?",
      example_tr:
        "Mümkünse tarifeyi uzatma gecelerine de devredebilir misiniz?",
    },
  ],
};

// ============================================================
// Lesson 4 — Uçuş iptal, EU261 hak talebi
// ============================================================
export const travelC1Lesson_4: BundledLesson = {
  id: "travel.c1.complaint.1",
  skill_id: "travel.c1.complaint",
  index: 4,
  title: "Uçuş İptal + EU261 Talebi",
  description:
    "Gate agent'a bağırma. 'I appreciate this isn't your fault, but I'd like to understand my options under EU261...' — hak talebi, ses yükseltme yok.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.tc1.4.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "EU261",
      tr_translation:
        "AB yönetmeliği — uçuş gecikme/iptal/binişten engelleme tazminat hakları",
      example: "I'd like to understand what I'm entitled to under EU261.",
      example_tr: "EU261 kapsamında hakkımın ne olduğunu anlamak istiyorum.",
    },
    {
      id: "ex.tc1.4.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bunun sizin hatanız olmadığını anlıyorum, ama EU261 kapsamındaki seçeneklerimi öğrenmek istiyorum.",
      target:
        "I appreciate this isn't your fault, but I'd like to understand what options I have under EU261.",
      accepted_variants: [
        "I understand this isn't your doing, but could you walk me through my EU261 entitlements?",
        "I know this isn't on you, but I'd like to know my rights under EU261.",
        "I appreciate it's not your fault, but what am I entitled to under EU261?",
        "I do appreciate this is out of your hands — could you tell me what EU261 covers here?",
      ],
      tr_hint:
        "C1 kompozisyonu: empati ('I appreciate this isn't your fault') + hak talebi ('what options I have under EU261').",
    },
    {
      id: "ex.tc1.4.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "What is the airline's duty of ___ in a situation like this?",
      answer: "care",
      distractors: ["service", "help", "assistance"],
      tr_hint:
        "'Duty of care' = bakım/koruma yükümlülüğü (yemek, otel, transfer). Havayolu jargonu.",
    },
    {
      id: "ex.tc1.4.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'd",
        "like",
        "this",
        "in",
        "writing",
        "for",
        "my",
        "records",
        "please",
      ],
      correct_sentence: "I'd like this in writing for my records please",
      tr_translation:
        "Kayıtlarım için bunu yazılı olarak alabilir miyim, lütfen?",
    },
    {
      id: "ex.tc1.4.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Your airline cancelled my flight! Give me money now!",
      correct_sentence:
        "I appreciate this isn't your fault, but I'd like to understand what I'm entitled to under EU261 — and could I get that confirmation in writing?",
      tr_explanation:
        "Bağırmak agent'ı defansa iter, sana zarar verir. Empati + EU261 referans + 'in writing' kombinasyonu seni şikayetçi değil, bilgili müşteri yapar — agent'lar bu kişilere daha hızlı çözüm getirir.",
    },
    {
      id: "ex.tc1.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Uçuşun iptal edildi. Gate agent yorgun, defansif. Sen sakin, hak bilgili. EU261, duty of care, kompansasyon hakkını araştır.",
      npc_role: "Premium customer service",
      setting: "Gate counter after flight cancellation announcement",
      turns: [
        {
          speaker: "npc",
          message:
            "Folks, I know this is frustrating. We're rebooking everyone on tomorrow morning's flight. Please form a line.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i appreciate|i understand).{0,50}(not your fault|isn'?t your fault|out of your hands).{0,80}(eu.?261|entitled|options|rights)",
            "(could|can) you walk me through.{0,40}(eu.?261|my rights|my options)",
            "(under eu.?261|what.{0,20}entitled to).{0,60}(cancellation|delay|disruption)",
            "(i'?d like to|i would like to) understand.{0,60}(eu.?261|options|entitlements|rights)",
            "(i know this is|i realise this isn'?t).{0,40}(on you|your doing).{0,60}(rights|entitled|261)",
            "(could you help me|could you clarify).{0,40}(what (i'?m|i am) entitled|my eu.?261)",
            "(may i ask|just to clarify).{0,40}(compensation|duty of care|eu.?261).{0,30}(applies|covers)",
          ],
          hint_tr:
            "Empati önce: 'I appreciate this isn't your fault, but I'd like to understand my options under EU261.'",
        },
        {
          speaker: "npc",
          message:
            "Sure. The cancellation was due to technical issues, so EU261 compensation does apply — typically 600 euros for a long-haul. Plus duty of care: meals, hotel if needed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) (that|this) in writing.{0,40}(records|claim|reference)",
            "(would you|could you).{0,40}(confirm|put).{0,30}(in writing|on paper|via email)",
            "(i'?d like|i would like).{0,30}(written|in writing).{0,30}(confirmation|record)",
            "(for my|for the) (records|claim|file)",
            "(would it be possible to|may i ask for).{0,40}(written|email).{0,30}(confirmation|reference)",
            "(send me|email me).{0,30}(a |the )?(reference|cancellation code|written).{0,30}(please|for my records)",
            "(i'?ll need|we'?ll need).{0,30}(in writing|written|on paper).{0,30}(for the claim|for insurance)",
          ],
          hint_tr:
            "Paper trail başlat: 'Could I get that in writing for my records?' — EU261 talebi için zorunlu.",
        },
        {
          speaker: "npc",
          message:
            "I can send you a confirmation email with the cancellation code and EU261 reference. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what about|what'?s the situation with).{0,40}(duty of care|hotel|meal|accommodation)",
            "(can|could) you arrange.{0,40}(hotel|meal|transport|accommodation)",
            "(under duty of care|for tonight).{0,60}(hotel|meal|stay|accommodation)",
            "(re|about).{0,30}duty of care.{0,40}(hotel|meal|tonight)",
            "(and|also).{0,30}(what (about|happens)|how does that work) (with|for).{0,30}(hotel|meal|accommodation)",
            "(will the airline|are you|are we) (covering|providing|arranging).{0,40}(hotel|meals|tonight)",
            "(may i ask|just to confirm).{0,40}(duty of care|hotel|vouchers|tonight)",
          ],
          hint_tr:
            "Duty of care'i sor: 'What about duty of care — hotel and meals tonight?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, we'll cover a hotel near the airport plus meal vouchers. Vouchers will be issued in just a moment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|much appreciated|i appreciate it)",
            "(thank you|thanks).{0,30}(for|the).{0,20}(clarity|information|help|patience)",
            "(that'?s|that is) (very|really|much) helpful.{0,30}(thank you|appreciated)",
            "i really appreciate (your|the).{0,30}(help|time|patience|effort)",
            "(thank you|thanks) for (sorting|handling|managing).{0,30}(this|everything)",
            "(you'?ve been|that'?s been) (very|extraordinarily|incredibly) helpful",
            "(genuinely|truly) grateful for (your|the) (assistance|help|guidance)",
          ],
          hint_tr:
            "Takdir et: 'Thank you — that's really helpful.' Defansiften iş ortağına döndürdün.",
        },
        {
          speaker: "npc",
          message:
            "You're welcome — sorry for the disruption. I'll have everything sorted for you in a few minutes.",
        },
      ],
    },
    {
      id: "ex.tc1.4.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "EU261 nedir?",
          options: [
            "Vize başvuru formu",
            "AB uçuş gecikme/iptal tazminat yönetmeliği",
            "Bagaj yönetmeliği",
            "Pasaport süresi kuralı",
          ],
          correct_index: 1,
          tr_explanation:
            "EU261: AB'den kalkan veya AB taşıyıcı uçuşlarda iptal/gecikme/binişten engelleme için tazminat ve duty of care.",
        },
        {
          question: "'Duty of care' = ?",
          options: [
            "Sorumluluk reddi",
            "Havayolunun yemek/otel/transfer sağlama yükümlülüğü",
            "Sigorta poliçesi",
            "Uçuş güvenliği",
          ],
          correct_index: 1,
          tr_explanation:
            "Uçuş iptalinde yolcuya yemek, gerekirse konaklama, transfer sağlama yükümlülüğü.",
        },
        {
          question: "Gate agent'a en güçlü açılış cümlesi?",
          options: [
            "This is unacceptable!",
            "I appreciate this isn't your fault, but I'd like to understand my options under EU261.",
            "Where's your manager?",
            "I want a refund right now.",
          ],
          correct_index: 1,
          tr_explanation:
            "Empati + bilgi gösterimi (EU261). Agent'ı müttefik yapar.",
        },
      ],
    },
    {
      id: "ex.tc1.4.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I appreciate this isn't your fault, but I'd like to understand my options under EU261.",
      ipa:
        "aɪ əˈpriːʃieɪt ðɪs ˈɪzənt jɔːr fɔːlt bʌt aɪd laɪk tuː ˌʌndərˈstænd maɪ ˈɒpʃənz ˈʌndər iː juː tuː sɪks wʌn",
      tr_hint:
        "'EU261' = 'ee-yoo-two-six-one' tek tek. 'Appreciate' = 'ə-PREE-shi-eyt'. Cümle inişli, sakin — saldırgan değil.",
    },
    {
      id: "ex.tc1.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Could I get that in writing for my records — and what's the situation with duty of care?",
      voice_hint: "female_uk",
      tr_hint:
        "İki rica bir cümlede. 'In writing' birleşik, 'duty of care' net. Ton sakin profesyonel.",
    },
    {
      id: "ex.tc1.4.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "irregular operations",
      tr_translation:
        "Havayolu jargonu — iptal/gecikme/rota değişimi yaşanan operasyonel kriz",
      example:
        "During irregular operations like this, duty of care still applies.",
      example_tr:
        "Bu tür düzensiz operasyonlarda da duty of care yükümlülüğü devam eder.",
    },
  ],
};

// ============================================================
// Lesson 5 — Kayıp lüks bagaj, baggage office'te ikna
// ============================================================
export const travelC1Lesson_5: BundledLesson = {
  id: "travel.c1.complaint.2",
  skill_id: "travel.c1.complaint",
  index: 5,
  title: "Kayıp Lüks Bagaj Eskalasyonu",
  description:
    "Rimowa içinde takım elbise, ilaçlar, anahtarlar. 'I'd like to escalate this to a supervisor, if I may' — empati uyandır, formal kompansasyon iste.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.tc1.5.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "escalate this to a supervisor, if I may",
      tr_translation: "Müsadenizle, bunu bir amire iletmek istiyorum",
      example:
        "Given the contents of the bag, I'd like to escalate this to a supervisor, if I may.",
      example_tr:
        "Çantanın içindekiler düşünüldüğünde, müsadenizle bunu bir amire iletmek istiyorum.",
    },
    {
      id: "ex.tc1.5.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Çantanın içinde ilaçlarım, takım elbisem ve ev anahtarlarım var. Müsadenizle bir amire iletmek istiyorum.",
      target:
        "There's prescription medication, a suit, and my house keys in that bag. I'd like to escalate this to a supervisor, if I may.",
      accepted_variants: [
        "The bag contains prescription medication, a suit, and house keys — I'd like to escalate to a supervisor, please.",
        "Given the contents — prescription meds, a suit, house keys — could I speak with a supervisor, if possible?",
        "I have medication, a suit, and my house keys in that bag — could we get a supervisor involved?",
      ],
      tr_hint:
        "İçeriği listele (delil), sonra eskale et. 'If I may' = nezaket ekleyici.",
    },
    {
      id: "ex.tc1.5.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I'd like to file a Property Irregularity ___ for my records.",
      answer: "Report",
      distractors: ["Form", "Document", "Note"],
      tr_hint:
        "'Property Irregularity Report' (PIR) = havayolu bagaj kayıp standart formu. Talep et, referans numarasını al.",
    },
    {
      id: "ex.tc1.5.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "could",
        "you",
        "advance",
        "an",
        "interim",
        "expense",
        "allowance",
        "tonight",
      ],
      correct_sentence: "could you advance an interim expense allowance tonight",
      tr_translation: "Bu gece bir geçici masraf avansı verebilir misiniz?",
    },
    {
      id: "ex.tc1.5.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You lose my expensive luggage! I want money for everything, right now!",
      correct_sentence:
        "I understand bags occasionally go missing — but given the contents, I'd like to escalate to a supervisor and file a PIR.",
      tr_explanation:
        "'You lose' suçlayıcı. 'I want money now' panic mode. C1: empati ('bags occasionally go missing') + içerik önemi + PIR/eskalasyon. Bu kombinasyon sana 'interim expense allowance' aldırır.",
    },
    {
      id: "ex.tc1.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Rimowa bagajın gelmedi. İçinde ilaç, takım, anahtar. Baggage office'te empati uyandır, eskale et, PIR aç, geçici avans al.",
      npc_role: "Premium customer service",
      setting: "Airport baggage services counter, late evening",
      turns: [
        {
          speaker: "npc",
          message:
            "Sorry to hear about the missing bag. Let me take your details. Tag number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tag number|tag)( is)?.{0,20}[a-z]{2,3}[0-9]{6}",
            "(the tag|baggage tag).{0,20}(reads|is|says).{0,20}[a-z0-9]",
            "(i have it here|here you go|it'?s right here)",
            "(yes|certainly|of course).{0,40}(tag|number|here)",
            "(here'?s|here is) (the|my) (tag|baggage receipt|stub)",
            "(let me|one moment).{0,30}(give|read|find) (you|the).{0,20}(tag|number|receipt)",
            "(absolutely|sure).{0,30}(it'?s|the number is).{0,30}[a-z0-9]",
          ],
          hint_tr:
            "Tag numarasını ver. 'Yes, the tag is BA876543' veya 'Here you go.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. I see your bag missed the connection in Frankfurt. We'll send it on the next flight, arriving tomorrow morning.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i understand|i appreciate).{0,40}(but|however|given).{0,80}(contents|medication|suit|keys|inside)",
            "the (bag|contents|inside).{0,40}(includes|contains).{0,60}(medication|prescription|suit|keys)",
            "(there'?s|theres).{0,30}(prescription|medication|suit|keys).{0,40}(in|inside) (the |that )?bag",
            "(unfortunately|the issue is).{0,40}(medication|prescription|suit|keys)",
            "(the problem is|the thing is).{0,40}(medication|prescription|essentials|keys).{0,30}(inside|in the bag)",
            "(i'?d normally|i would normally).{0,40}(wait|be fine).{0,60}(medication|prescription|critical)",
            "(unfortunately|sadly).{0,30}(i have|there are).{0,40}(prescription|medication|valuables|essentials) (inside|in there)",
          ],
          hint_tr:
            "Empati önce: 'I understand — but given the contents (medication, suit, keys)...' Eskalasyon zemini.",
        },
        {
          speaker: "npc",
          message:
            "Oh — I'm so sorry. That's quite serious. Let me see what I can do.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|may|might) i.{0,40}(speak|escalate).{0,40}(supervisor|manager)",
            "(i'?d like to|i would like to) escalate.{0,40}(supervisor|manager).{0,30}(if i may|please)",
            "(could|can) we (get|involve) a supervisor.{0,30}(please)?",
            "(escalate|raise).{0,30}(to a |with a )?supervisor",
            "(would it be possible|may i ask) to (speak with|have a word with).{0,30}(supervisor|manager)",
            "(given (the|that)).{0,30}(circumstances|contents|situation).{0,40}(supervisor|escalate|manager)",
            "(could you|would you) (bring in|call over).{0,30}(a |the )?(supervisor|duty manager)",
          ],
          hint_tr:
            "Eskale et: 'I'd like to escalate this to a supervisor, if I may.' Süpervizör daha geniş yetkiye sahiptir.",
        },
        {
          speaker: "npc",
          message:
            "Of course. While I get one over, can I help with anything in the meantime?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|we) (file|open|raise).{0,40}(pir|property irregularity|report)",
            "(could|can) (you|i) get.{0,40}(interim|expense|advance|allowance).{0,40}(tonight|essentials)",
            "(would|could) you.{0,40}(arrange|cover).{0,40}(essentials|toiletries|clothing)",
            "(could|can) we open a pir",
            "(while we wait|in the meantime).{0,40}(pir|report|expense|essentials)",
            "(i'?d like to|i would like to) (file|raise|open) (a |the )?(pir|report).{0,30}(get|along with).{0,30}(reference|number)",
            "(may i ask|could you also).{0,30}(advance|cover|provide).{0,40}(essentials|tonight|necessities)",
          ],
          hint_tr:
            "İki rica: 'Could we open a PIR? And could you arrange an interim expense allowance for essentials tonight?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. Supervisor's on the way, and I'll prep the PIR plus a 200-euro essentials advance. Sit tight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks|much appreciated).{0,30}(so much|very much|truly)?",
            "(thank you|thanks).{0,30}(for|your).{0,30}(help|patience|understanding)",
            "i (truly |really )?appreciate (it|you|that).{0,30}(very much|so much|sincerely)?",
            "you'?ve been (very |so |incredibly )?(helpful|kind|understanding)",
            "(that'?s|that is).{0,30}(very|incredibly|extraordinarily) (kind|generous|thoughtful) of you",
            "(genuinely|truly) grateful for (your|the).{0,30}(help|kindness|effort|patience)",
            "(can'?t thank you enough|i won'?t forget this).{0,30}(thank you|appreciate)?",
          ],
          hint_tr:
            "Empati ödülü ver: 'Thank you — you've been incredibly helpful.' Sonraki etkileşim daha kolay.",
        },
        {
          speaker: "npc",
          message:
            "It's the least we can do. I'll be back with the paperwork shortly.",
        },
      ],
    },
    {
      id: "ex.tc1.5.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Escalate to a supervisor' niye etkilidir?",
          options: [
            "Süpervizör havayolu sahibi",
            "Süpervizör daha geniş yetki ve özel kompansasyon araçlarına sahip",
            "Süpervizör isterse seni uçağa biner",
            "Standart agent zaten her şeyi yapabilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Süpervizör interim expense allowance, kompansasyon, yedek yer açma gibi konularda esnektir.",
        },
        {
          question: "PIR (Property Irregularity Report) = ?",
          options: [
            "Sigorta poliçesi",
            "Havayolu bagaj kayıp standart kayıt formu",
            "Şikayet dilekçesi",
            "Tazminat çeki",
          ],
          correct_index: 1,
          tr_explanation:
            "PIR + referans numarası = paper trail. Sigorta talebinde de gerekli.",
        },
        {
          question: "Kayıp bagajda en güçlü açılış?",
          options: [
            "You lose my bag, give me money!",
            "I understand bags occasionally go missing — but given the contents (medication, suit, keys)...",
            "Where is my bag, where?",
            "I will sue you!",
          ],
          correct_index: 1,
          tr_explanation:
            "Empati + içerik önemi = agent'ın yetkisini sana yönlendirir.",
        },
      ],
    },
    {
      id: "ex.tc1.5.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd like to escalate this to a supervisor, if I may.",
      ipa:
        "aɪd laɪk tuː ˈɛskəleɪt ðɪs tuː ə ˌsuːpərˈvaɪzər ɪf aɪ meɪ",
      tr_hint:
        "'Escalate' = 'ES-kə-leyt' (vurgu ilk). 'If I may' yumuşak — neredeyse mırıltı. Soru tonu değil, dilek.",
    },
    {
      id: "ex.tc1.5.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Given the contents, could you arrange an interim expense allowance for essentials tonight?",
      voice_hint: "female_uk",
      tr_hint:
        "İki taraflı rica. 'Given the contents' bağlam veriyor. 'Interim expense allowance' = jargon, sakin söyle.",
    },
    {
      id: "ex.tc1.5.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "interim expense allowance",
      tr_translation: "Geçici masraf avansı (kayıp bagaj için)",
      example:
        "Could you arrange an interim expense allowance for tonight's essentials?",
      example_tr:
        "Bu geceki temel ihtiyaçlar için geçici masraf avansı ayarlayabilir misiniz?",
    },
  ],
};

// ============================================================
// Lesson 6 — Otelde gece gürültüsü, yazılı şikayet
// ============================================================
export const travelC1Lesson_6: BundledLesson = {
  id: "travel.c1.complaint.3",
  skill_id: "travel.c1.complaint",
  index: 6,
  title: "Otel Gürültü Şikayeti — Yazılı",
  description:
    "Gece 3'te konstrüksiyon. Sabah duty manager'a 'I'd like to register a formal complaint' — partial refund, kayıt-altı dil.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.tc1.6.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "register a formal complaint",
      tr_translation: "Resmi şikayet kaydı oluşturmak",
      example:
        "I'd like to register a formal complaint regarding last night's disturbance.",
      example_tr:
        "Dün geceki rahatsızlıkla ilgili resmi bir şikayet kaydı oluşturmak istiyorum.",
    },
    {
      id: "ex.tc1.6.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Dün geceki gürültüyle ilgili resmi bir şikayet kaydı oluşturmak istiyorum.",
      target:
        "I'd like to register a formal complaint regarding the noise last night.",
      accepted_variants: [
        "I'd like to make a formal complaint about the noise last night.",
        "I'd like to lodge a formal complaint about last night's disturbance.",
        "Could I file a formal complaint regarding the construction noise overnight?",
        "I want to put a formal complaint on record about the noise last night.",
      ],
      tr_hint:
        "'Register / make / lodge / file a formal complaint' = resmi şikayet kaydı. C1'de paper trail için zorunlu.",
    },
    {
      id: "ex.tc1.6.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I'd like a partial ___ for the night in question, please.",
      answer: "refund",
      distractors: ["voucher", "credit", "discount"],
      tr_hint:
        "'Partial refund' = kısmi iade. 'For the night in question' = sorunlu gece için, formal şikayet dili.",
    },
    {
      id: "ex.tc1.6.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "this",
        "fell",
        "short",
        "of",
        "what",
        "we",
        "expected",
        "for",
        "this",
        "category",
      ],
      correct_sentence:
        "this fell short of what we expected for this category",
      tr_translation:
        "Bu, bu kategori için beklediğimizin altında kaldı.",
    },
    {
      id: "ex.tc1.6.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Last night was terrible! Construction noise! I want full refund and free upgrade!",
      correct_sentence:
        "Frankly, last night fell well short of what one expects for a property of this calibre — I'd like to register a formal complaint and request a partial refund for the night in question.",
      tr_explanation:
        "Çok talep edersen hiçbirini almazsın. 'Fell short' + 'one expects' + 'calibre' = kalibrasyonu yüksek bir konukla konuşulduğu izlenimi verir. Manager defansif olmaz, çözmek ister.",
    },
    {
      id: "ex.tc1.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sabah duty manager'a. Gece 3'te konstrüksiyon. Sakin, ölçülü, kayıt-altı şikayet + partial refund.",
      npc_role: "Hotel manager",
      setting: "Hotel reception, post-breakfast meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. The receptionist said you wanted to speak with me — how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like to|i would like to).{0,30}(register|make|lodge|file).{0,30}(formal|official) complaint",
            "(could|may) i (register|make|lodge).{0,30}(formal|official) complaint",
            "i'?m here to (raise|put on record|register).{0,40}(concern|complaint|issue)",
            "(i need to|i want to).{0,30}(put|place) (a |an )?(complaint|issue).{0,30}(on record|formally)",
            "(could we|may we) (have|take) (a moment|some time).{0,30}(formal complaint|registering|grievance)",
            "(there'?s a matter|i have a concern).{0,40}(formally|register|on record|formal complaint)",
          ],
          hint_tr:
            "Kayıt-altı dilekçeyle başla: 'I'd like to register a formal complaint about last night.'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. What happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(construction|building|drilling|hammering|jackhammer).{0,40}(noise|disturbance).{0,40}(throughout|all night|until|from)",
            "(there was|we had).{0,30}(construction|noise|drilling).{0,30}(from|until|throughout) (around )?(3|three|2|two)",
            "(noise|disturbance).{0,40}(woke us|kept us awake|couldn'?t sleep)",
            "(serious|significant) (noise|disturbance|construction).{0,40}(overnight|all night|early hours)",
            "(we were kept|i was kept) (up|awake).{0,40}(construction|drilling|hammering).{0,30}(hours|overnight)",
            "(no one|we weren'?t) (warned|notified|told).{0,40}(construction|works|noise) (overnight|in the early hours)",
            "(the room|our floor) was (subject to|affected by).{0,40}(construction|drilling|noise).{0,30}(through the night|until)",
          ],
          hint_tr:
            "Olguyu zaman damgalı sun: 'There was construction noise from around 3am until 6am — we couldn't sleep at all.'",
        },
        {
          speaker: "npc",
          message:
            "I do apologise. We had emergency plumbing work overnight — we should have notified guests in advance.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i appreciate|i understand).{0,40}(but|however).{0,80}(notification|warning|advance|fell short)",
            "(frankly|to be honest|i must say).{0,60}(fell short|below|expected|standard|calibre)",
            "(this|that) fell.{0,30}(short of|below).{0,30}(expected|expectations|standard|calibre)",
            "(for a (property|hotel) of this (calibre|standard))",
            "(that said|even so).{0,40}(some warning|advance notice|forewarning).{0,40}(would have|reasonable|fair)",
            "(the issue is|the trouble is).{0,40}(no notice|without warning|fell short).{0,40}(category|calibre|standard)",
            "(one expects|guests expect).{0,40}(notification|forewarning).{0,30}(property|hotel) (like this|of this standard)",
          ],
          hint_tr:
            "Ölçülü değerlendirme: 'I appreciate that — but the lack of notification fell short of what one expects for a property of this calibre.'",
        },
        {
          speaker: "npc",
          message:
            "You're right. What can I do to make this right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like|i would like).{0,30}(partial|full) (refund|credit).{0,40}(night in question|that night|last night)",
            "(a |some |around |roughly )?(partial|partial) refund.{0,40}(seems|would be).{0,30}(fair|appropriate|reasonable)",
            "(could|would) you (consider|offer).{0,40}(partial refund|night'?s rate|credit)",
            "(50%|half|partial) (refund|credit) (for|of) (the |that )?night",
            "(a refund|some compensation) on (last night|the night in question).{0,30}(would (be|seem) fair|appropriate)",
            "(would (it be|you) possible).{0,40}(refund|credit|compensation).{0,40}(night|disturbance)",
            "(perhaps|maybe).{0,30}(a refund|some credit).{0,40}(reasonable|fair|appropriate).{0,30}(night|disturbance)",
          ],
          hint_tr:
            "Spesifik ve makul: 'A partial refund for the night in question — fifty percent would seem fair.'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely fair. I'll process a full refund for that night, plus a complimentary breakfast tomorrow. Apologies again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|much appreciated|i appreciate).{0,30}(your|the).{0,30}(quick|prompt|fair|generous)",
            "(that'?s|that is) (very|extraordinarily|really) (fair|generous|reasonable)",
            "thank you (very much|so much).{0,30}(handling|resolving|sorting)",
            "i'?m (most|very|truly) (grateful|appreciative)",
            "(that'?s|that is) (more than|exactly what).{0,30}(fair|hoped|expected)",
            "(very kind|how kind) of you.{0,30}(handle|resolve|sort) (it|this) so (quickly|graciously)",
            "(genuinely|truly) appreciate the (way|speed|grace).{0,30}(handled|resolved|sorted)",
          ],
          hint_tr:
            "Cömertliği işaretle: 'That's very fair — thank you for handling this so quickly.' Tekrar konaklamaya kapı açar.",
        },
        {
          speaker: "npc",
          message:
            "It's the least we can do. Thank you for raising it the way you did.",
        },
      ],
    },
    {
      id: "ex.tc1.6.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Register a formal complaint' niye gerekli?",
          options: [
            "Hiçbir işe yaramaz",
            "Paper trail yaratır — refund/kompansasyon için kanıt",
            "Sadece otel zincirini değiştirmek için",
            "Sosyal medya için",
          ],
          correct_index: 1,
          tr_explanation:
            "Kayıtaltı şikayet refund ve kompansasyon için zemindir; gelecek konaklamalarda da geçerli.",
        },
        {
          question: "'Fell short of what one expects' tonunun gücü?",
          options: [
            "Saldırgan, ters teper",
            "Empatik ama kalibrasyon yüksek — manager defans değil, çözüm üretir",
            "Çok yumuşak, etkisiz",
            "Tehdit içerir",
          ],
          correct_index: 1,
          tr_explanation:
            "'One expects' formel; manageri sınıf eşiği koruma görevine sokar.",
        },
        {
          question: "Şikayette en doğru talep ölçeği?",
          options: [
            "Tam refund + ücretsiz tatil + manager'ın işi",
            "Spesifik ve makul: 'partial refund for the night in question'",
            "Hiçbir şey, sadece dinlensin",
            "Sosyal medyada paylaşmakla tehdit et",
          ],
          correct_index: 1,
          tr_explanation:
            "Aşırı talep reddi sertleştirir. Makul talep onaylanır, üstüne ekstra çıkar.",
        },
      ],
    },
    {
      id: "ex.tc1.6.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'd like to register a formal complaint regarding last night's disturbance.",
      ipa:
        "aɪd laɪk tuː ˈrɛdʒɪstər ə ˈfɔːrməl kəmˈpleɪnt rɪˈɡɑːrdɪŋ lɑːst naɪts dɪˈstɜːrbəns",
      tr_hint:
        "'Register' = 'RE-jis-tər'. 'Disturbance' = 'dis-TƏR-bəns', vurgu ikinci. Cümle sakin, kayıt için söyleniyor.",
    },
    {
      id: "ex.tc1.6.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Frankly, this fell well short of what one expects for a property of this calibre.",
      voice_hint: "male_uk",
      tr_hint:
        "'Frankly' başta — direkt ama nazik. 'Calibre' = 'KAL-i-bər' (UK), tarz işareti. Cümle yavaş ve ağırlıklı.",
    },
    {
      id: "ex.tc1.6.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "for the night in question",
      tr_translation: "Söz konusu/sorunlu gece için",
      example: "A partial refund for the night in question would seem fair.",
      example_tr:
        "Söz konusu gece için kısmi bir iade adil görünür.",
    },
  ],
};

// ============================================================
// Lesson 7 — Roma'da tarihçi rehberle empire decline
// ============================================================
export const travelC1Lesson_7: BundledLesson = {
  id: "travel.c1.local.1",
  skill_id: "travel.c1.local",
  index: 7,
  title: "Roma'da Tarihçi Rehberle Sohbet",
  description:
    "'How do contemporary Romans relate to that imperial legacy?' — tarihçi tonu, hedge'li politika dokunuşu.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.tc1.7.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "imperial legacy",
      tr_translation: "İmparatorluk mirası",
      example:
        "How do contemporary Romans relate to that imperial legacy in everyday life?",
      example_tr:
        "Günümüz Romalıları gündelik hayatta o imparatorluk mirasıyla nasıl bir ilişki kuruyor?",
    },
    {
      id: "ex.tc1.7.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Günümüz Romalıları o imparatorluk mirasıyla nasıl bir ilişki kuruyor?",
      target:
        "How do contemporary Romans relate to that imperial legacy?",
      accepted_variants: [
        "How do Romans today engage with that imperial heritage?",
        "What's the relationship between modern Romans and that imperial past?",
        "How does contemporary Roman identity sit with the imperial legacy?",
        "Where does the imperial legacy fit into contemporary Roman self-understanding?",
      ],
      tr_hint:
        "'Relate to' = ilişki kurmak. 'Contemporary' = günümüz. C1 tarihçi-tonu için 'imperial legacy/heritage'.",
    },
    {
      id: "ex.tc1.7.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "There's an interesting ___ between Augustus's reforms and what later emperors tried to walk back.",
      answer: "parallel",
      distractors: ["difference", "history", "connection"],
      tr_hint:
        "'Parallel' = paralel/koşutluk. Tarihçi konuşmasında 'interesting parallel between X and Y' standart kalıp.",
    },
    {
      id: "ex.tc1.7.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'd",
        "be",
        "curious",
        "to",
        "hear",
        "your",
        "take",
        "on",
        "that",
      ],
      correct_sentence: "I'd be curious to hear your take on that",
      tr_translation:
        "Bu konuda görüşünüzü duymak isterim.",
    },
    {
      id: "ex.tc1.7.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Rome was big empire. Now Italy is weak. Why?",
      correct_sentence:
        "I'd be curious to hear how you'd frame Rome's transition from imperial centre to modern republic — there's a lot of layered identity there.",
      tr_explanation:
        "İlk versiyon yüzeysel, hatta kaba. C1'de 'frame' (çerçevele) + 'layered identity' (katmanlı kimlik) — uzman tonuyla uzmana yaklaşırsın. Karşılığında derin sohbet alırsın.",
    },
    {
      id: "ex.tc1.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Roma'da özel tarihçi rehberle Forum turunda. Yüzeyden çık, allusion ve hedge ile derin sohbet aç.",
      npc_role: "Local fixer",
      setting: "Roman Forum, private historical tour",
      turns: [
        {
          speaker: "npc",
          message:
            "So here we are — the political heart of the empire. Any questions before I start the talk?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d be|i would be) curious.{0,40}(how|what|why).{0,60}(contemporary|modern|today'?s) (romans|italians)",
            "(how do|how would).{0,40}(contemporary|modern|today'?s).{0,40}(relate|engage|reconcile).{0,40}(imperial|legacy|heritage)",
            "(what'?s|what is) (the) (relationship|tension|legacy).{0,60}(modern|contemporary).{0,30}(rome|italy|romans)",
            "(i'?ve always wondered|i'?ve been curious).{0,40}(how|whether).{0,40}(romans|italians).{0,40}(imperial|legacy|past)",
            "(if i may|may i ask).{0,40}(how).{0,40}(modern|contemporary) (rome|italians).{0,40}(legacy|imperial|history)",
            "(could you|might you) (frame|describe).{0,40}(transition|relationship).{0,40}(imperial|legacy|modern)",
          ],
          hint_tr:
            "Tarihçi-soru aç: 'I'd be curious — how do contemporary Romans relate to the imperial legacy?'",
        },
        {
          speaker: "npc",
          message:
            "Excellent question. There's deep ambivalence — pride in the grandeur, but discomfort with how Mussolini weaponised it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) fascinating.{0,40}(interesting|striking|relevant).{0,80}(parallel|connection|resonance)",
            "(there'?s|theres) an interesting (parallel|connection|resonance).{0,40}(between|with)",
            "(i'?d be|i would be) curious.{0,40}(how|whether).{0,60}(survives|persists|echoes|features)",
            "(does that|how does).{0,40}(filter|surface|show up).{0,40}(today|now|contemporary|public)",
            "(one might draw|i can'?t help drawing).{0,40}(parallel|comparison|line).{0,40}(germans|austrians|elsewhere)",
            "(how does that|in what way does that).{0,40}(play out|manifest).{0,40}(politics|public discourse|today)",
            "(strikingly similar|that echoes).{0,40}(other|elsewhere|post-imperial).{0,30}(societies|contexts)",
          ],
          hint_tr:
            "Allusion yap: 'There's an interesting parallel with how Germans handled their imperial past.' Veya 'How does that ambivalence surface today?'",
        },
        {
          speaker: "npc",
          message:
            "Right. Politicians who invoke Roman imagery now are usually right-wing — it's a charged register.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i can|one can) see.{0,40}(parallels|echoes|resonance).{0,60}(elsewhere|other|countries|turkey)",
            "(it'?s|its) interesting.{0,40}(similar|comparable|analogous).{0,40}(turkey|germany|france|elsewhere)",
            "(i'?d hesitate|one hesitates|hard to|tricky to).{0,40}(generalise|generalize|draw|conclude)",
            "(though|that said|to be fair).{0,80}(complex|nuanced|context|different)",
            "(one sees|we see) (something similar|comparable dynamics).{0,40}(turkey|elsewhere|other contexts)",
            "(i wouldn'?t want to|i'?m wary of).{0,30}(overstate|oversimplify).{0,40}(parallel|comparison|similarity)",
            "(in turkey at least|from the turkish side).{0,40}(comparable|similar|parallel).{0,30}(tension|dynamic|debate)",
          ],
          hint_tr:
            "Hedge'li politik dokunuş: 'It's interesting — one sees comparable dynamics in Turkey, though the context is quite different.'",
        },
        {
          speaker: "npc",
          message:
            "Yes — every post-imperial society negotiates this differently. What's your sense from Turkey?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in turkey|from turkey).{0,80}(ottoman|imperial|legacy).{0,80}(contested|debated|charged|nuanced)",
            "(one might say|i'?d say|i would say).{0,80}(ambivalence|tension|nuance)",
            "(there'?s|theres) (a) (similar|comparable|parallel).{0,60}(ambivalence|tension|debate)",
            "(very much|certainly|absolutely).{0,40}(contested|debated|live debate)",
            "(in recent years|of late).{0,40}(ottoman|imperial).{0,40}(charged|politicised|reframed)",
            "(my own sense is|the way i read it).{0,40}(ottoman|imperial|legacy).{0,40}(complicated|contested|fraught)",
            "(historians|scholars) in turkey.{0,40}(debate|argue|read).{0,40}(ottoman|imperial|legacy)",
          ],
          hint_tr:
            "Hedge'le ve kişiselleştir: 'In Turkey, the Ottoman legacy is similarly contested — though more politically charged in recent years.'",
        },
        {
          speaker: "npc",
          message:
            "Fascinating — let's pick that up later over a coffee. For now, let's walk to the Curia.",
        },
      ],
    },
    {
      id: "ex.tc1.7.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Tarihçi rehberle açılış sorusu için en C1 kalıp?",
          options: [
            "Rome was big, yes?",
            "I'd be curious — how do contemporary Romans relate to that imperial legacy?",
            "Why is Italy weak now?",
            "Were all emperors evil?",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd be curious' + 'contemporary Romans' + 'imperial legacy' = uzman tonuyla uzmana yaklaşır.",
        },
        {
          question: "Hassas politik dokunuş için ne işe yarar?",
          options: [
            "Sert görüş söyle, kanaat dayat",
            "Hedge'le: 'It's interesting — one sees comparable dynamics in Turkey, though the context differs'",
            "Hiç konuşma",
            "Konuyu değiştir",
          ],
          correct_index: 1,
          tr_explanation:
            "Hedge ('one sees', 'though') + paralel = tartışma yaratmadan derinleşir.",
        },
        {
          question: "'I'd be curious to hear your take' kullanımı?",
          options: [
            "Bilgiyi sorgulama",
            "Görüş soran nazik kalıp — sertlik yok",
            "Saldırı işareti",
            "Resmi olmayan, kullanılmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 sosyal kalıbı: fikir sorar, kanaat dayatmaz. Karşı tarafı açar.",
        },
      ],
    },
    {
      id: "ex.tc1.7.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "How do contemporary Romans relate to that imperial legacy?",
      ipa:
        "haʊ duː kənˈtɛmpəreri ˈroʊmənz rɪˈleɪt tuː ðæt ɪmˈpɪəriəl ˈlɛɡəsi",
      tr_hint:
        "'Contemporary' = 'kən-TEM-pə-rə-ri' (beş hece, vurgu 'TEM'). 'Imperial' = 'im-PIR-i-əl'. Cümle akıcı, akademik ton.",
    },
    {
      id: "ex.tc1.7.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd hesitate to generalise, but there's an interesting parallel between Rome's and Istanbul's imperial legacies.",
      voice_hint: "female_uk",
      tr_hint:
        "'I'd hesitate to generalise' = hedge kapısı. 'Parallel' = 'PA-rə-ləl'. Cümle özenli, akademik ritim.",
    },
    {
      id: "ex.tc1.7.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd hesitate to generalise",
      tr_translation: "Genelleme yapmak konusunda tereddüt ederim",
      example:
        "I'd hesitate to generalise, but post-imperial identity tends to be contested everywhere.",
      example_tr:
        "Genelleme yapmaktan çekinirim, ama post-imparatorluk kimliği her yerde çekişmeli olma eğiliminde.",
    },
  ],
};

// ============================================================
// Lesson 8 — Bordeaux'da şarap üreticisi, terroir
// ============================================================
export const travelC1Lesson_8: BundledLesson = {
  id: "travel.c1.local.2",
  skill_id: "travel.c1.local",
  index: 8,
  title: "Bordeaux Şarap Üreticisiyle",
  description:
    "Tasting'de küçük üreticiye 'How has climate change reshaped your assemblage decisions?' — uzman vokabüler, uzman muamelesi.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.tc1.8.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "assemblage",
      tr_translation:
        "Bordeaux'da farklı parsel/üzüm türlerinin nihai harman oranları",
      example:
        "How has climate change reshaped your assemblage decisions over the last decade?",
      example_tr:
        "İklim değişikliği son on yılda assemblage kararlarınızı nasıl değiştirdi?",
    },
    {
      id: "ex.tc1.8.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İklim değişikliği assemblage kararlarınızı nasıl yeniden şekillendirdi?",
      target:
        "How has climate change reshaped your assemblage decisions?",
      accepted_variants: [
        "How has climate change influenced your blending choices?",
        "How is climate change affecting how you assemble each vintage?",
        "What impact has climate change had on your assemblage philosophy?",
        "How has the warmer climate altered the way you blend each year?",
      ],
      tr_hint:
        "'Reshape' = yeniden şekillendir. 'Assemblage' kelimesini bilmek = uzman tonu sinyali.",
    },
    {
      id: "ex.tc1.8.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "What does ___ mean for your estate in practical terms?",
      answer: "terroir",
      distractors: ["weather", "vineyard", "harvest"],
      tr_hint:
        "'Terroir' = toprak/iklim/insan üçlüsü, şarap kimliği. C1 şarap sohbetinin merkez kelimesi.",
    },
    {
      id: "ex.tc1.8.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'd",
        "be",
        "interested",
        "in",
        "your",
        "thinking",
        "on",
        "biodynamics",
      ],
      correct_sentence: "I'd be interested in your thinking on biodynamics",
      tr_translation:
        "Biyodinamik tarım konusundaki düşüncelerinizi merak ediyorum.",
    },
    {
      id: "ex.tc1.8.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Your wine is good. Why so expensive?",
      correct_sentence:
        "There's wonderful structure here — I'd be curious how you'd describe what the terroir is bringing to the assemblage this vintage.",
      tr_explanation:
        "İlk versiyon turist tonu. C1'de 'structure', 'terroir', 'assemblage', 'vintage' kullanımı — üreticiye sen yarış pilotu/saatçi/şef gibi yaklaşırsın. Uzmanlığı tanıma, derin sohbetin anahtarı.",
    },
    {
      id: "ex.tc1.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bordeaux'da küçük chateau'da tasting. Üretici 30 yıllık tecrübeli. Uzman muamelesi yap, yüzeyselden uzak dur.",
      npc_role: "Local fixer",
      setting: "Boutique winery cellar, private tasting",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome — this is our 2019, our flagship. Merlot-dominant, Cabernet for backbone. What do you make of it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s|theres) (wonderful|lovely|striking|elegant).{0,40}(structure|tension|complexity|texture)",
            "(i'?m|i am) (struck by|taken with|drawn to).{0,40}(structure|texture|tension|aromatics)",
            "(beautiful|elegant).{0,40}(integration|balance|tension).{0,40}(tannin|acid|fruit)",
            "(what'?s|whats) striking.{0,40}(here|in this) is the",
            "(the|that) (nose|palate|finish) is (beautifully|wonderfully).{0,30}(layered|integrated|composed)",
            "(very|remarkably) (well-?integrated|composed|knit).{0,40}(tannin|acid|fruit)",
            "(love|admire) how.{0,30}(merlot|cabernet|fruit) (carries|sits with|balances).{0,40}(tannin|structure|acidity)",
          ],
          hint_tr:
            "Spesifik gözlem: 'There's wonderful tension between the fruit and the tannin structure here.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you — that tension is exactly what we chase. 2019 was warm but with cool nights, which preserved acidity.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how has|how is).{0,30}(climate change|warming|climate).{0,60}(reshap|influenc|affect|chang).{0,40}(assemblage|blending|harvest|decisions)",
            "(what'?s|whats) your thinking on.{0,40}(assemblage|biodynamics|harvest timing|climate)",
            "(i'?d be|i would be) (curious|interested).{0,40}(how|what).{0,40}(climate|warming).{0,40}(decisions|approach|philosophy)",
            "(has climate change|does climate change).{0,40}(forced|pushed|changed).{0,40}(reconsider|rethink|adjust)",
            "(may i ask|i'?d love to know).{0,40}(climate|warming).{0,40}(blend|decisions|harvest)",
            "(over the last|in recent) (decade|years).{0,40}(climate|warming).{0,40}(blend|approach|farming)",
            "(curious|wondering).{0,30}(picking|harvest|blend).{0,40}(shifted|changed|evolved).{0,30}(climate|warming)",
          ],
          hint_tr:
            "Derin tetikleyici soru: 'How has climate change reshaped your assemblage decisions?'",
        },
        {
          speaker: "npc",
          message:
            "Profoundly. We pick two weeks earlier than my father did. Cabernet's role has grown — Merlot ripens too quickly now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) fascinating.{0,40}(parallel|echo|happen|see).{0,80}(elsewhere|other|burgundy|napa)",
            "(one|i) hear.{0,40}(similar|comparable|same).{0,40}(burgundy|napa|tuscany|elsewhere)",
            "(i'?d be|i would be).{0,30}(interested|curious).{0,40}(whether|how|biodynamic|organic|carbon)",
            "(does that|how does).{0,40}(affect|influence|drive).{0,40}(vineyard|farming|practices)",
            "(strikingly similar|that resonates with).{0,40}(what i'?ve heard|things i'?ve read).{0,40}(burgundy|elsewhere)",
            "(may i ask|i'?d love to know).{0,40}(impact|driving|influence).{0,40}(farming|canopy|practice)",
            "(how does that|in what way does that).{0,40}(translate|filter|carry).{0,40}(viticulture|vineyard|farming)",
          ],
          hint_tr:
            "Allusion + bir sonraki katman: 'One hears similar things from Burgundy — does that influence your farming practices too?'",
        },
        {
          speaker: "npc",
          message:
            "Yes — we've gone biodynamic-certified. Demeter standard. It changes everything, from canopy to harvest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(remarkable|impressive|admirable).{0,30}(commitment|decision|investment)",
            "(that'?s|that is) (a |an )?(significant|considerable|profound).{0,40}(commitment|undertaking|investment)",
            "(may i|might i|could i) (ask|enquire).{0,40}(how it|whether it|the cost|market)",
            "(it'?s|its) (interesting|striking) how.{0,40}(small estates|small producers).{0,40}(leading|ahead)",
            "(quite the|that'?s quite a) (leap|step|undertaking).{0,30}(estate|operation) of (your|this) size",
            "(does the|has the) (market|trade|customer base).{0,40}(reward|recognise|respond to).{0,30}(commitment|certification)",
            "(impressive|admirable) (commitment|leap) — (any|much) (cost|sacrifice|impact) (on yield|on quality)",
          ],
          hint_tr:
            "Takdir + soru: 'That's a remarkable commitment — has the market rewarded that decision?'",
        },
        {
          speaker: "npc",
          message:
            "Slowly. But the wines are better, and that's the only metric that matters. Try this — same vineyard, ten years apart.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|extraordinary|wonderful|generous).{0,40}(privilege|treat|fascinating)",
            "(what a|that'?s a) (rare|generous|wonderful) (treat|comparison|privilege)",
            "(i'?m most|i'?m incredibly) (grateful|honoured).{0,30}(taste|share|experience)",
            "thank you (so |very )?much for sharing",
            "(this is|that'?s) (a real|quite a) (privilege|treat|opportunity).{0,30}(grateful|honoured)?",
            "(genuinely|truly) honoured to (taste|share|experience) (this|the comparison|the vertical)",
            "(rare opportunity|extraordinary chance) (to taste|to compare).{0,30}(thank you|grateful)",
          ],
          hint_tr:
            "Hediye ricasını kabul et: 'What a generous comparison — thank you for sharing that.'",
        },
        {
          speaker: "npc",
          message:
            "My pleasure — it's rare to find someone who asks the right questions. Salut.",
        },
      ],
    },
    {
      id: "ex.tc1.8.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Assemblage' Bordeaux'da ne anlama gelir?",
          options: [
            "Şişeleme makinesi",
            "Farklı parsel/üzüm türlerinin nihai harman oranları",
            "Yıllık üretim toplamı",
            "Şarap mahzeni",
          ],
          correct_index: 1,
          tr_explanation:
            "Assemblage = blend kararı. Bordeaux'da yıldan yıla değişir — uzmanlık kelimesi.",
        },
        {
          question: "Üretici uzmana en güçlü açılış?",
          options: [
            "Your wine is nice. How much?",
            "There's wonderful tension between the fruit and the tannin structure here.",
            "Is this organic or what?",
            "Tell me everything about wine.",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik gözlem + jargon = uzman muamelesi. Kapı açar.",
        },
        {
          question: "'Terroir' uzaklığı nasıl köprüleriz?",
          options: [
            "Hiç sorma, anlamış gibi yap",
            "'I'd be curious — what does the terroir bring to this vintage?' diye sor",
            "Wikipedia'dan oku, susup dinle",
            "'Soil good?' diye sor",
          ],
          correct_index: 1,
          tr_explanation:
            "Tetikleyici soru + uzman vokabüler = derin sohbet.",
        },
      ],
    },
    {
      id: "ex.tc1.8.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "How has climate change reshaped your assemblage decisions?",
      ipa:
        "haʊ hæz ˈklaɪmət tʃeɪndʒ riːˈʃeɪpt jɔːr ˌæsɒmˈblɑːʒ dɪˈsɪʒənz",
      tr_hint:
        "'Assemblage' = Fransızca asıllı, 'a-som-BLAJ' — son hece nazal 'j' sesi (Türkçe 'j' gibi ama daha yumuşak). Üreticiye sinyal kelime.",
    },
    {
      id: "ex.tc1.8.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "There's wonderful tension between the fruit and the tannin structure here — beautifully integrated.",
      voice_hint: "male_uk",
      tr_hint:
        "Sommelier ritmi. 'Tension', 'tannin structure', 'integrated' — vurgu kelime kelime. Yavaş, takdirkar.",
    },
    {
      id: "ex.tc1.8.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "biodynamics",
      tr_translation:
        "Biyodinamik tarım (Demeter sertifikalı, organic'in üst kademesi)",
      example: "I'd be interested in your thinking on biodynamics.",
      example_tr:
        "Biyodinamik konusundaki yaklaşımınızı merak ediyorum.",
    },
  ],
};

// ============================================================
// Lesson 9 — Glasgow taksisinde İskoç aksanı
// ============================================================
export const travelC1Lesson_9: BundledLesson = {
  id: "travel.c1.accent.1",
  skill_id: "travel.c1.accent",
  index: 9,
  title: "Glasgow Taksisinde İskoç Aksanı",
  description:
    "'Aye, ye'll be wantin' the West End?' — 'wee', 'ken', 'pure dead brilliant'. Anlamadığında 'Could you say that again?' demeden tahmin.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.tc1.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "wee",
      tr_translation: "Küçük (Scots English)",
      example: "Just a wee bit further down the road, eh?",
      example_tr: "Yolun biraz daha aşağısında, tamam mı?",
    },
    {
      id: "ex.tc1.9.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Pardon, son söylediğinizi tam yakalayamadım — yavaşça tekrar eder misiniz?",
      target:
        "Sorry, I didn't quite catch that last bit — could you say it again, a touch slower?",
      accepted_variants: [
        "Sorry, I didn't quite catch the last part — could you repeat that, slower if you don't mind?",
        "Apologies, I missed that — would you mind saying it again?",
        "Sorry, the last bit went past me — could you run that by me again?",
        "I'm so sorry — could you say that one more time, slowly?",
      ],
      tr_hint:
        "'Didn't quite catch' = tam yakalayamadım. 'A touch slower' = birazcık daha yavaş. Karşı tarafı utandırmaz, kendi tarafını alır.",
    },
    {
      id: "ex.tc1.9.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm with you, that makes ___ — sorry, go on.",
      answer: "sense",
      distractors: ["good", "meaning", "fine"],
      tr_hint:
        "'Makes sense' = anlam ifade ediyor. 'I'm with you' = takip ediyorum. Anlamadığını bile gizleyebilen idare cümlesi.",
    },
    {
      id: "ex.tc1.9.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "would",
        "you",
        "mind",
        "saying",
        "that",
        "a",
        "touch",
        "slower",
      ],
      correct_sentence: "would you mind saying that a touch slower",
      tr_translation: "Birazcık daha yavaş söyler misiniz acaba?",
    },
    {
      id: "ex.tc1.9.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "What?! Speak normal English, please!",
      correct_sentence:
        "Sorry, I didn't quite catch that — could you say it again, a touch slower if you don't mind?",
      tr_explanation:
        "İskoç aksanı normal İngilizcedir. 'Speak normal' aşağılayıcı, kavgaya açar. 'Didn't quite catch' kendini öne koyar — kibar, otantik. Şoför sana yer/yol gösterir, üstüne çıkmaz.",
    },
    {
      id: "ex.tc1.9.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Glasgow taksisinde. Şoför hızlı, İskoç aksanı yoğun. Anladığını göster, gerektiğinde nazikçe yavaşlat.",
      npc_role: "Local fixer",
      setting: "Glasgow black cab",
      turns: [
        {
          speaker: "npc",
          message:
            "Aye, hop in pal — where ye headin' the night? West End or city centre, eh?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?west end(,)? please",
            "(could|can) you (take|drop) me.{0,30}(west end|city centre|byres road)",
            "(west end|city centre)(,)? (please|thanks|cheers)",
            "(heading|going) to.{0,30}(west end|city centre|byres)",
            "(west end|byres road).{0,20}(if you|when you can|cheers)",
            "(taking me to|drop me at).{0,30}(west end|byres|city centre)",
            "(west end|byres road) please — (do you know|if you know).{0,30}(it|the area|the road)",
          ],
          hint_tr:
            "Net hedef + nezaket: 'The West End, please — Byres Road if you know it.'",
        },
        {
          speaker: "npc",
          message:
            "Aye, ah ken Byres Road like the back o' ma haun. Ye visitin' or workin' doon here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|apologies).{0,30}(didn'?t quite|missed|catch).{0,40}(last bit|second part|that)",
            "(could|would) you (say|repeat) (that|the last bit).{0,30}(again|slower|once more)",
            "(visiting|just visiting|on holiday|for work).{0,40}(few days|week|conference)",
            "(visiting|here).{0,40}(few days|week|holiday)",
            "(would you mind|do you mind) (saying|repeating).{0,30}(that|the last).{0,30}(slower|again)",
            "(i'?m sorry|forgive me).{0,30}(missed|lost).{0,30}(that|the last bit|what you said)",
            "(yes|aye) — (visiting|over|here) for (a few days|the weekend|work)",
          ],
          hint_tr:
            "İki seçenek: yakalarsan cevapla (visiting/working), yakalayamadıysan 'Sorry, didn't quite catch that — could you say it again?'",
        },
        {
          speaker: "npc",
          message:
            "Ach, sorry — askin' if ye were here on holiday or for work. Pure dead brilliant city, mind.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just visiting|on holiday|for a (few|couple)).{0,40}(days|week)",
            "(here|in town) (for|on).{0,30}(holiday|work|a few days|conference)",
            "(pure dead brilliant|love it|brilliant).{0,40}(so far|already|hearing)",
            "(visiting|just here).{0,40}(few days|week|holiday)",
            "(sounds (like|like a)|reckon it'?s).{0,40}(brilliant|cracker|class|grand) (city|town|place)",
            "(everyone'?s|folks have been) (telling me|saying).{0,40}(love|brilliant|pure dead)",
            "(yeah|aye) — (holiday|short trip|a quick visit).{0,30}(so far|loving|excited)",
          ],
          hint_tr:
            "Anladığını göster + jargonu iade et: 'Just visiting for a few days — sounds like a pure dead brilliant city already.'",
        },
        {
          speaker: "npc",
          message:
            "Ha! Catchin' on quick, eh? Ye'll need a wee dram before ye leave. There's a cracker o' a pub on Ashton Lane — Brel, ken it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t|i'?ll have to|haven'?t).{0,30}(but|though).{0,40}(sounds|will check|note)",
            "(sounds|that sounds).{0,30}(great|brilliant|wonderful).{0,30}(will|i'?ll) check",
            "(noted|i'?ll note|adding).{0,30}(to|on) the list",
            "(brel|ashton lane).{0,30}(noted|will check|sounds great)",
            "(cheers for|thanks for) (the tip|the recommendation).{0,30}(i'?ll|will) (check|try)",
            "(it'?s|that'?s) on the list — (cheers|thanks) (for|mate)",
            "(haven'?t been|don'?t know it).{0,30}(but|sounds).{0,30}(brilliant|great|class).{0,30}(cheers|thanks)",
          ],
          hint_tr:
            "Yerel öneriye kapı aç: 'Don't know it, but it's on the list now — cheers for the tip!'",
        },
        {
          speaker: "npc",
          message:
            "Aye, ye'll no regret it. Right, Byres Road — that'll be 12 quid even.",
        },
      ],
    },
    {
      id: "ex.tc1.9.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Glasgow'da 'wee dram' = ?",
          options: [
            "Küçük tatil",
            "Küçük yudum (genelde viski)",
            "Hafif yağmur",
            "Sokak ismi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Wee' = küçük, 'dram' = bir yudum içki (özellikle viski). İskoç klasik kalıbı.",
        },
        {
          question: "Aksanı yakalayamadığında EN doğru tepki?",
          options: [
            "'Speak normal English!' diye azarla",
            "'Sorry, I didn't quite catch that — could you say it again, a touch slower?'",
            "Anladım gibi yap, riske gir",
            "Tek başına git",
          ],
          correct_index: 1,
          tr_explanation:
            "'Didn't quite catch' — kendini öne koyar, karşı tarafı utandırmaz. Aksanı küçümsemez.",
        },
        {
          question: "Yerel jargonu iade etmek niye faydalı?",
          options: [
            "Yapmak iyi değil, taklittir",
            "Şoför seni 'taking the piss' sanır",
            "Sıcaklık yaratır, sohbete kapı açar, daha iyi öneriler getirir",
            "Resmi olmayan kabul edilir",
          ],
          correct_index: 2,
          tr_explanation:
            "Yerel kelime kullanmak (ölçülü, doğal) lokal bağı kuvvetlendirir. Aşırıya kaçma, doğal tut.",
        },
      ],
    },
    {
      id: "ex.tc1.9.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Sorry, I didn't quite catch that — could you say it again, a touch slower?",
      ipa:
        "ˈsɒri aɪ ˈdɪdənt kwaɪt kætʃ ðæt kʊd juː seɪ ɪt əˈɡeɪn ə tʌtʃ ˈsloʊər",
      tr_hint:
        "'Didn't quite catch' — 'kwaɪt' net, 'catch' kısa. 'A touch slower' yumuşak; 'touch' = 'taʃ', 'slower' = 'SLOH-ər'.",
    },
    {
      id: "ex.tc1.9.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Aye, just a wee bit further down the road — ye'll see it on yer left.",
      voice_hint: "male_scottish",
      tr_hint:
        "Scots ritmi. 'Aye' = 'AY' (uzun). 'Wee' = 'wii'. 'Yer' = 'your' kısalmış. Sonda 'left' net.",
    },
    {
      id: "ex.tc1.9.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "ken",
      tr_translation: "Bilmek (Scots English)",
      example: "Ah ken Byres Road like the back o' ma haun.",
      example_tr:
        "Byres Road'u avcumun içi gibi bilirim.",
    },
  ],
};

// ============================================================
// Lesson 10 — Mumbai'de Indian English
// ============================================================
export const travelC1Lesson_10: BundledLesson = {
  id: "travel.c1.accent.2",
  skill_id: "travel.c1.accent",
  index: 10,
  title: "Mumbai'de Indian English",
  description:
    "'Do the needful', 'kindly revert', 'prepone the meeting' — Hindistan İngilizce kalıpları. Otel concierge, taksici, dükkan sahibi.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.tc1.10.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "do the needful",
      tr_translation:
        "Gereğini yap (Indian English) — gerekeni yapmanı rica ediyorum",
      example:
        "Please do the needful and I'll have everything ready by morning.",
      example_tr:
        "Lütfen gereğini yap, sabah her şey hazır olur.",
    },
    {
      id: "ex.tc1.10.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Pardon, 'prepone' kelimesini ilk kez duyuyorum — ne demek?",
      target:
        "Sorry, I'm not familiar with 'prepone' — what does it mean?",
      accepted_variants: [
        "Apologies, I haven't come across 'prepone' before — could you explain?",
        "Excuse me, 'prepone' is new to me — what's it mean here?",
        "Sorry, I'm not sure I follow — what does 'prepone' mean?",
        "Could you help — I'm not familiar with the term 'prepone'.",
      ],
      tr_hint:
        "'Not familiar with' = aşina değilim. C1'de bilmediğin yerel terimi sormak normal — utanma vesilesi değil.",
    },
    {
      id: "ex.tc1.10.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Could you kindly ___ me by email once it's done?",
      answer: "revert",
      distractors: ["return", "reply", "tell"],
      tr_hint:
        "'Kindly revert' = lütfen geri dönüş yap (Indian English). 'Reply' British/American — 'revert' Hindistan iş dilinde standart.",
    },
    {
      id: "ex.tc1.10.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "could",
        "we",
        "prepone",
        "the",
        "meeting",
        "to",
        "tomorrow",
        "morning",
      ],
      correct_sentence: "could we prepone the meeting to tomorrow morning",
      tr_translation: "Toplantıyı yarın sabaha çekebilir miyiz?",
    },
    {
      id: "ex.tc1.10.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Your English is so different! What is this 'prepone' nonsense?",
      correct_sentence:
        "Sorry, 'prepone' is new to me — does it mean to bring forward?",
      tr_explanation:
        "Indian English meşru dil ailesidir, 'nonsense' aşağılayıcı. 'New to me' + 'does it mean...?' = kibar netleştirme. Aynı zamanda anladığını doğrular.",
    },
    {
      id: "ex.tc1.10.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mumbai'de otel concierge ile. Indian English kalıpları yoğun. Anladığını göster, gerektiğinde netleştir.",
      npc_role: "Hotel manager",
      setting: "Mumbai five-star hotel concierge desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning, sir! I trust you are doing well. Kindly let me know if there is anything I can do the needful for today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|actually|in fact).{0,30}(thank you|thanks).{0,40}(could you|i was hoping|i need)",
            "(good morning|morning).{0,40}(could you|wondering).{0,40}(arrange|help|book)",
            "(thank you|yes).{0,30}(i'?d like to|i need to|i was wondering)",
            "(good morning|morning) — (there|yes), (actually|in fact).{0,30}(could|would|might) you",
            "(thank you|much appreciated).{0,30}(could you|might you).{0,40}(arrange|book|help with)",
            "(if you don'?t mind|if it'?s no trouble).{0,40}(arrange|book|help).{0,30}(car|transport|dinner)",
          ],
          hint_tr:
            "Doğal yanıt + niyet: 'Good morning — yes, actually, I was hoping you could help with...'",
        },
        {
          speaker: "npc",
          message:
            "Of course, sir. We have a driver available from 9. Should I prepone him to 8:30, as you are wanting to start early?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|apologies).{0,30}(prepone|that term|not familiar).{0,40}(mean|bring forward|earlier)",
            "(does that mean|do you mean).{0,30}(bring forward|earlier|move earlier)",
            "(prepone|that means).{0,30}(earlier|sooner|bring forward)",
            "(yes|that would be).{0,30}(perfect|great|ideal).{0,30}(8:?30|earlier)",
            "(forgive me|excuse me) — (i'?m not|i haven'?t).{0,30}(familiar|come across) (with )?(prepone|that word)",
            "(could you clarify|might i ask).{0,30}(what|whether).{0,30}(prepone|that term) means",
            "(if (that|prepone) means|so prepone is).{0,30}(earlier|bring forward).{0,30}(yes|then yes)",
          ],
          hint_tr:
            "Bilmediğin terim — kibar netleştirme: 'Sorry, 'prepone' is new to me — does it mean to bring forward?' Veya doğrudan onayla.",
        },
        {
          speaker: "npc",
          message:
            "Yes sir, prepone is to bring forward — antonym of postpone. Very useful word, no?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ah|right|got it|i see).{0,40}(makes sense|brilliant|helpful|i'?ll borrow)",
            "(makes sense|that'?s helpful|brilliant|i may borrow that)",
            "(yes|absolutely)(.{0,30})(8:?30|prepone|earlier).{0,30}(perfect|works|great)",
            "(8:?30|earlier) (would|will) (be|work) (perfect|great|fine)",
            "(i love that word|i'?ll use that) — (yes|absolutely).{0,30}(8:?30|earlier|prepone)",
            "(thank you|noted) — (8:?30|the earlier slot) (works|suits) (perfectly|us)",
            "(please|kindly) (do the needful|prepone it) — (8:?30|earlier) (would be|suits) (perfect|ideal)",
          ],
          hint_tr:
            "Öğrendiğini takdir et + asıl onayı ver: 'Ah, makes sense — I'll borrow that. Yes, 8:30 would be perfect.'",
        },
        {
          speaker: "npc",
          message:
            "Excellent. I will be coordinating with the driver and kindly revert by SMS within the hour. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could you|would you).{0,40}(book|arrange|reserve).{0,30}(restaurant|lunch|dinner|table)",
            "(also|one more thing|and).{0,40}(recommend|suggest).{0,30}(restaurant|dinner|tonight)",
            "(no|that'?s|that is|thank you).{0,30}(all|it|everything|for now)",
            "(thank you|thanks).{0,30}(do the needful|that'?s great|perfect)",
            "(if you don'?t mind|while we'?re at it).{0,40}(recommend|suggest|book).{0,30}(dinner|restaurant|table)",
            "(any chance|may i ask) you (could|might).{0,30}(book|recommend).{0,30}(somewhere|a table) (for|tonight)",
            "(actually|one more|now that you mention).{0,40}(dinner|restaurant|booking).{0,30}(local|recommendation|tonight)",
          ],
          hint_tr:
            "Bitir veya ek rica: 'Could you also recommend somewhere for dinner tonight — somewhere local, not touristy?'",
        },
        {
          speaker: "npc",
          message:
            "Most certainly, sir. I am suggesting Bombay Canteen — modern Indian, very popular with locals. I will be reserving for 8pm. Suitable?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|excellent|wonderful).{0,30}(thank you|appreciated)",
            "(that sounds|sounds).{0,30}(perfect|wonderful|great).{0,30}(thank you|cheers)",
            "(8|eight) (works|is fine|sounds good)",
            "(please|kindly).{0,30}(book|reserve|do the needful)",
            "(bombay canteen|that one) sounds (ideal|perfect|just right).{0,30}(please|thank you)",
            "(8 ?pm|eight) (suits|works for|is fine for) (us|me).{0,30}(thank you|appreciate)",
            "(thank you|much appreciated) — (please proceed|kindly book|go ahead with) (it|the reservation)",
          ],
          hint_tr:
            "Onayla: 'Perfect — please do the needful, thank you.' Yerel kalıbı iade ederek bağ kurarsın.",
        },
        {
          speaker: "npc",
          message:
            "Most welcome, sir. I shall revert with confirmation within fifteen minutes.",
        },
      ],
    },
    {
      id: "ex.tc1.10.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Indian English'te 'prepone' = ?",
          options: [
            "Erteleme",
            "Önceye al, öne çek (postpone'un karşıtı)",
            "Önemli kişiyi davet et",
            "Geri çevir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Prepone' postpone'un karşıtı — Hindistan İngilizcesinde 1900'lerden beri var, sözlüklere de girdi.",
        },
        {
          question: "'Kindly revert' = ?",
          options: [
            "Tekrar gel",
            "Lütfen geri dönüş yap (cevapla)",
            "Geri çevir",
            "Eski haline döndür",
          ],
          correct_index: 1,
          tr_explanation:
            "Hindistan iş dilinde 'reply' yerine 'revert' yaygın. 'Kindly' = lütfen — formal.",
        },
        {
          question: "Bilmediğin Indian English kelimesini duyduğunda?",
          options: [
            "'Speak proper English!' diye azarla",
            "'Sorry, 'X' is new to me — does it mean...?' diye sor",
            "Anladım gibi yap, riske gir",
            "Konuşmayı bırak",
          ],
          correct_index: 1,
          tr_explanation:
            "Indian English meşru. Kibar netleştirme + anladığını doğrula = profesyonel C1 yaklaşımı.",
        },
      ],
    },
    {
      id: "ex.tc1.10.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Sorry, 'prepone' is new to me — does it mean to bring forward?",
      ipa:
        "ˈsɒri priːˈpoʊn ɪz njuː tuː miː dʌz ɪt miːn tuː brɪŋ ˈfɔːrwərd",
      tr_hint:
        "'Prepone' = 'pree-POHN', vurgu sonda. 'Does it mean' yumuşak akış. Cümle inişli, soru tonu sonda hafif yükselir.",
    },
    {
      id: "ex.tc1.10.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I will be coordinating with the driver and kindly revert by SMS within the hour.",
      voice_hint: "male_indian",
      tr_hint:
        "Indian English ritmi — şimdiki zaman ('will be coordinating'), 'kindly revert' formal. Konuşmayı taklit etmeye çalışma; duy ve anla.",
    },
    {
      id: "ex.tc1.10.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "prepone",
      tr_translation: "Önceye almak (Indian English, postpone'un karşıtı)",
      example: "Could we prepone the meeting to tomorrow morning?",
      example_tr: "Toplantıyı yarın sabaha çekebilir miyiz?",
    },
  ],
};

// ============================================================
// Lesson 11 — Overbooking, 'walked' edildin, diplomatik
// ============================================================
export const travelC1Lesson_11: BundledLesson = {
  id: "travel.c1.diplomacy.1",
  skill_id: "travel.c1.diplomacy",
  index: 11,
  title: "Overbooking — 'Walked' Edildin",
  description:
    "Otel başka mülke gönderiyor. 'I understand it's stressful for you too, but the rate I paid was for this property...' — kompansasyon, transport, future stay credit.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.tc1.11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "walked",
      tr_translation:
        "Otel jargonu — overbooking nedeniyle başka mülke gönderilmek",
      example: "We've been walked to a property across town tonight.",
      example_tr:
        "Bu gece şehrin diğer ucundaki başka bir mülke yönlendirildik.",
    },
    {
      id: "ex.tc1.11.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bunun sizin için de stresli olduğunu anlıyorum, ama ödediğim ücret bu mülk için — kompansasyonu nasıl yapacağız?",
      target:
        "I understand this is stressful for you too, but the rate I paid was for this property — what does compensation look like?",
      accepted_variants: [
        "I appreciate this isn't easy for you either, but I booked this property at this rate — how will compensation be handled?",
        "I understand the situation, but I paid for this property — could we discuss the compensation package?",
        "I do realise this is stressful for you, but the rate was for this property — what are you able to offer?",
      ],
      tr_hint:
        "Empati ('stressful for you too') + tutum ('rate I paid was for this property') + spesifik talep ('compensation look like').",
    },
    {
      id: "ex.tc1.11.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "Would you cover ___ to and from the other property?",
      answer: "transport",
      distractors: ["taxi only", "buses", "drive"],
      tr_hint:
        "'Transport to and from' = gidiş-dönüş ulaşım. Walked edilirken otel hesabına yazılır — talep et.",
    },
    {
      id: "ex.tc1.11.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "could",
        "you",
        "issue",
        "a",
        "future",
        "stay",
        "credit",
        "for",
        "the",
        "inconvenience",
      ],
      correct_sentence:
        "could you issue a future stay credit for the inconvenience",
      tr_translation:
        "Yaşanan rahatsızlık için gelecekteki konaklamaya kredi açabilir misiniz?",
    },
    {
      id: "ex.tc1.11.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You walked me?! I paid full price! Give me free room now!",
      correct_sentence:
        "I understand it's stressful for you too — but the rate I paid was for this property. What does compensation look like — transport, room category, and a future stay credit?",
      tr_explanation:
        "Bağırmak walked-müşterinin klasik hatası. Empati + tutum + üç-kalemli talep ('transport, category, credit') = manageri çözüm üretmeye iter, defansa değil.",
    },
    {
      id: "ex.tc1.11.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Otel'e geldin, 'sold out — we're walking you to a sister property'. Diplomatik, ama tutumlu konuş. Üç kalem talep et.",
      npc_role: "Hotel manager",
      setting: "Hotel front desk, evening arrival after long flight",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm terribly sorry, sir — we're overbooked tonight. We've arranged a room at our sister property, two miles away. Free of charge for tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i understand|i appreciate).{0,40}(stressful|not easy|tough|difficult).{0,40}(for you|too|either)",
            "(i do|i can).{0,30}(see|appreciate|understand).{0,30}(this is|isn'?t easy)",
            "(thank you|i appreciate).{0,40}(but|however).{0,80}(rate|booking|property|paid)",
            "(i understand).{0,30}(but|however).{0,80}(rate|property|paid for)",
            "(i realise|i know).{0,40}(it'?s tricky|this isn'?t).{0,30}(your fault|on you).{0,40}(but|however).{0,40}(rate|booking|property)",
            "(genuinely|really) (sympathise|appreciate).{0,40}(situation|position).{0,40}(rate i paid|booking)",
            "(i can see|i imagine) this is (tough|stressful).{0,30}(for you|on you).{0,40}(but|however)",
          ],
          hint_tr:
            "Empati önce: 'I understand it's not easy for you either.' Defansif tonu kırar.",
        },
        {
          speaker: "npc",
          message:
            "Thank you for understanding. The property is comparable — four-star, same chain.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(but|however|that said).{0,40}(rate i paid|booking|booked).{0,40}(property|here|this hotel)",
            "(the issue is|the difficulty is).{0,40}(rate|paid|booked).{0,40}(property|here)",
            "(what does|how does).{0,30}(compensation|the package).{0,30}(look like|work|handle)",
            "(what|how) are you (able|going) to (offer|do|cover)",
            "(my reservation was for|i booked this specific) (property|location|hotel).{0,40}(rate|paid|expected)",
            "(could we|may we) (talk through|discuss).{0,40}(compensation|package|making this right)",
            "(what'?s the|what is the) (compensation|arrangement|offer) (looking like|going to be)",
          ],
          hint_tr:
            "Tutumu söyle, çözümü çek: 'But the rate I paid was for this property — what does compensation look like?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. We'll cover tonight in full, plus a 100-euro voucher. Transport included.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) (a|fair) (start|beginning).{0,40}(could|would|may i).{0,30}(future stay|credit|inconvenience)",
            "(could|would) you (issue|consider).{0,40}(future stay credit|credit|inconvenience)",
            "(would|could) you (also|additionally).{0,40}(future stay|credit|loyalty points|category upgrade)",
            "(i'?d|i would) (also be|appreciate).{0,40}(future stay credit|inconvenience credit)",
            "(thank you|appreciate that) — (would|might) you (add|include).{0,40}(future stay|credit|loyalty)",
            "(could we round that out|to make this fully right).{0,40}(future stay|loyalty|credit)",
            "(perhaps|might).{0,30}(a future stay credit|loyalty points|category upgrade) (could be added|on top)",
          ],
          hint_tr:
            "Üçüncü kalem talep: 'That's a fair start — could you also issue a future stay credit for the inconvenience?'",
        },
        {
          speaker: "npc",
          message:
            "Let me check what I can do. Yes — I'll add a complimentary night at this property for your next stay. Suitable?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) (very|extraordinarily|incredibly).{0,30}(fair|generous|reasonable)",
            "(thank you|much appreciated|i'?m grateful).{0,40}(handling|working|prompt)",
            "(could|may) i (also|have).{0,40}(written confirmation|email|in writing)",
            "(perfect|wonderful).{0,30}(thank you|i'?m most grateful)",
            "(thank you|appreciate that) — (could you also|may i ask).{0,30}(email|written|in writing)",
            "(very kind|how kind) of you.{0,40}(may i have|could i get) (it|that) in writing",
            "(that resolves it|that works) — (just|may i get).{0,30}(written|email|confirmation)",
          ],
          hint_tr:
            "Onayla + paper trail: 'That's very fair — thank you. Could I get that in writing?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely — I'll email the confirmation within the next ten minutes. Apologies once again.",
        },
      ],
    },
    {
      id: "ex.tc1.11.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Otel jargonunda 'walked' = ?",
          options: [
            "Yürüme mesafesinde",
            "Overbooking nedeniyle başka mülke gönderilmek",
            "Otelden kovuldun",
            "Yürüyüş turu rezervasyonu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Walked' = otel doluyken konuğu başka (genelde kardeş) mülke yönlendirme.",
        },
        {
          question: "Walked edilirken kaç kalem kompansasyon talep edersin?",
          options: [
            "Sadece para",
            "Üç kalem: room/category, transport, future stay credit",
            "Hiçbir şey, otelin suçu değil",
            "Sadece üst kademeye şikayet",
          ],
          correct_index: 1,
          tr_explanation:
            "Üç kalem standart pakettir; manager bunu zaten biliyor, talep etmen yeter.",
        },
        {
          question: "Empati + tutum kombinasyonu niye güçlü?",
          options: [
            "İkisi de gerekmez",
            "Empati ('stressful for you too') defansı kırar, tutum ('rate for this property') hakkını korur",
            "Empati zayıflık işareti",
            "Tutum kaba kalır",
          ],
          correct_index: 1,
          tr_explanation:
            "Empati manageri ortağa çevirir, tutum ödün vermediğini gösterir. C1 diplomasisi.",
        },
      ],
    },
    {
      id: "ex.tc1.11.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I understand it's stressful for you too, but the rate I paid was for this property.",
      ipa:
        "aɪ ˌʌndərˈstænd ɪts ˈstrɛsfəl fɔːr juː tuː bʌt ðə reɪt aɪ peɪd wɒz fɔːr ðɪs ˈprɒpərti",
      tr_hint:
        "'Stressful for you too' inişli, empatik. 'But the rate' — burada ton hafifçe sertleşir, tutum işareti. 'Property' = 'PRO-pər-ti'.",
    },
    {
      id: "ex.tc1.11.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Could you issue a future stay credit for the inconvenience, plus get that in writing?",
      voice_hint: "female_uk",
      tr_hint:
        "İki rica bir cümlede. 'Future stay credit' = 'FYU-chər stey KRED-it'. 'In writing' net — paper trail.",
    },
    {
      id: "ex.tc1.11.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "future stay credit",
      tr_translation:
        "Gelecek konaklama kredisi (overbooking/şikayet kompansasyonu)",
      example: "A future stay credit for the inconvenience would be fair.",
      example_tr: "Yaşanan rahatsızlık için bir konaklama kredisi adil olur.",
    },
  ],
};

// ============================================================
// Lesson 12 — Çifte tahsilat, GM'e ölçülü escalation
// ============================================================
export const travelC1Lesson_12: BundledLesson = {
  id: "travel.c1.diplomacy.2",
  skill_id: "travel.c1.diplomacy",
  index: 12,
  title: "Çifte Tahsilat — Ölçülü Eskalasyon",
  description:
    "Resepsiyon 'sistem hatası değil' diyor. 'I'd like to speak with the duty manager — I'm sure we can sort this out civilly.'",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.tc1.12.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "sort this out civilly",
      tr_translation: "Bu meseleyi medenice çözmek",
      example: "I'm sure we can sort this out civilly with the duty manager.",
      example_tr:
        "Eminim duty manager ile bunu medeni şekilde çözebiliriz.",
    },
    {
      id: "ex.tc1.12.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Duty manager ile konuşmak istiyorum — eminim bunu medenice çözebiliriz.",
      target:
        "I'd like to speak with the duty manager, please — I'm sure we can sort this out civilly.",
      accepted_variants: [
        "Could I speak with the duty manager, please — I'm confident we can resolve this amicably.",
        "I'd appreciate a word with the duty manager — this should be straightforward to resolve.",
        "Could you call the duty manager — I'm sure this is something we can sort out quickly.",
      ],
      tr_hint:
        "'I'm sure we can sort this out civilly' = medenice çözeriz — agresif değil, tutumlu.",
    },
    {
      id: "ex.tc1.12.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I have the original charge here on my statement — would you ___ that against your system?",
      answer: "reconcile",
      distractors: ["compare", "match", "check"],
      tr_hint:
        "'Reconcile' = mutabakat yapmak (muhasebe). C1 finansal jargon — profesyonel ton.",
    },
    {
      id: "ex.tc1.12.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "could",
        "we",
        "go",
        "through",
        "the",
        "transactions",
        "line",
        "by",
        "line",
      ],
      correct_sentence: "could we go through the transactions line by line",
      tr_translation:
        "İşlemleri satır satır birlikte gözden geçirebilir miyiz?",
    },
    {
      id: "ex.tc1.12.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You stole money from my card! Refund immediately or police!",
      correct_sentence:
        "There's been a double charge on my card — I have the bank statement here. Could we reconcile this with your system together?",
      tr_explanation:
        "'Stole' suçlayıcı, 'police' tehdit. Olguyu sun ('there's been a double charge') + delil göster ('statement here') + işbirliğine davet ('reconcile together'). Resepsiyon defansif olmaz, sorunu çözer.",
    },
    {
      id: "ex.tc1.12.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Çıkış sonrası iki tahsilat yapıldı, banka uygulamasında ekran görüntüsü var. Resepsiyon 'sistemde tek görünüyor' diyor. Ölçülü eskale et.",
      npc_role: "Hotel manager",
      setting: "Hotel front desk, post-checkout dispute",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me|hi).{0,30}(noticed|spotted).{0,40}(double charge|two charges|charged twice)",
            "(there'?s|theres) (been |a )?(double charge|duplicate charge|two charges)",
            "(i'?ve been|i was) charged twice.{0,40}(card|account)",
            "(my statement|the bill).{0,40}(shows|has).{0,30}(two|double|duplicate)",
            "(sorry to bother you|i hope you can help).{0,40}(double|two|duplicate) (charges|payments)",
            "(it looks like|appears that) (i'?ve|i was) (charged twice|billed twice).{0,30}(card|account)",
            "(could we look into|may we sort) (something|an issue) — (double|duplicate|two) (charges|transactions)",
          ],
          hint_tr:
            "Olguyu sakin sun: 'Sorry to bother — I've noticed a double charge on my card from your hotel.'",
        },
        {
          speaker: "npc",
          message:
            "Let me look. I see only one charge in our system — for 480 euros. That matches your stay.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|here is|here'?s).{0,40}(statement|screenshot|bank).{0,40}(showing|two|double)",
            "(could|would) you (look at|reconcile|compare).{0,40}(this|statement|screenshot)",
            "(i can show you|let me show you).{0,30}(statement|screenshot|app)",
            "(could|may) we (go through|reconcile|compare).{0,40}(transactions|line by line)",
            "(if i may|may i) (show|share) (you )?(my|the).{0,30}(bank|statement|screenshot)",
            "(my (banking )?app|the app) (shows|has|is showing) (two|double|duplicate).{0,40}(charges|transactions)",
            "(would you mind|could you).{0,40}(checking against|comparing with).{0,30}(my statement|this)",
          ],
          hint_tr:
            "Delil sun + işbirliği davet et: 'I have my bank statement here showing two — could we reconcile this together?'",
        },
        {
          speaker: "npc",
          message:
            "Ah — I see. Yes, there are two charges from us, ten minutes apart. I apologise. It must have been a processing glitch.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciated).{0,30}(confirming|acknowledging|spotting)",
            "(no worries|these things happen|understood).{0,30}(could you|how do we|what'?s next)",
            "(could you|would you).{0,30}(process|issue|arrange).{0,30}(refund|reversal)",
            "(could|may) i.{0,30}(get|have).{0,30}(written confirmation|in writing|email)",
            "(thank you for|appreciate you) (catching|confirming|seeing) (that|the duplicate)",
            "(in that case|with that confirmed).{0,30}(could you|would you).{0,30}(reverse|refund)",
            "(perfect|right|good) — (could you|would you) (process the refund|email confirmation)",
          ],
          hint_tr:
            "Hatayı kabul ettir + çözüm iste: 'These things happen — could you process the reversal and confirm in writing?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely — I'll process the refund now and email you the confirmation within the hour.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(would|could) you.{0,30}(escalate|involve|loop in).{0,30}(duty manager|gm|finance)",
            "(could|may) i.{0,30}(speak with|word with).{0,30}(duty manager|manager)",
            "(thank you|much appreciated).{0,40}(handling|sorting|prompt)",
            "(i appreciate|thank you for).{0,30}(quick|prompt|civil)",
            "(that'?s|that is) (exactly|just) (what i hoped for|the response i needed)",
            "(if it'?s no trouble|while we'?re sorting it).{0,40}(duty manager|word with|a moment)",
            "(very kind|very civil) of you — (thank you|appreciate it) (for sorting|for resolving) (this|it) so",
          ],
          hint_tr:
            "Eskalasyona gerek yoksa takdir et: 'Much appreciated — that's the response I was hoping for.' Yoksa: 'Could I have a quick word with the duty manager too?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — and apologies once more for the inconvenience. Have a safe onward journey.",
        },
      ],
    },
    {
      id: "ex.tc1.12.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Çifte tahsilatta EN doğru ilk hamle?",
          options: [
            "Polis çağırırım diye tehdit et",
            "'There's been a double charge — could we reconcile this with your system?'",
            "Banka kartını kapat",
            "Sosyal medyada paylaş",
          ],
          correct_index: 1,
          tr_explanation:
            "Olgu + delil + işbirliği daveti. Resepsiyon savunmacı olmaz, sorun çözücü olur.",
        },
        {
          question: "'Reconcile' niye doğru kelime?",
          options: [
            "Saldırgan",
            "Muhasebe jargonu — profesyonel ton, işbirliği daveti",
            "Resepsiyon anlamaz",
            "Sadece bankalar kullanır",
          ],
          correct_index: 1,
          tr_explanation:
            "Finansal jargon resepsiyonu profesyonel bir mutabakat sürecine sokar.",
        },
        {
          question: "'Sort this out civilly' kullanım anı?",
          options: [
            "Saldırgan başlangıç",
            "Eskalasyon eşiğinde — ben uygar kalacağım, sen de kal sinyali",
            "Asla kullanma",
            "Sadece İskoç İngilizcesinde",
          ],
          correct_index: 1,
          tr_explanation:
            "Eskalasyona giderken altın cümle: tehdit yok, ama tutum belli.",
        },
      ],
    },
    {
      id: "ex.tc1.12.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'm sure we can sort this out civilly with the duty manager.",
      ipa:
        "aɪm ʃʊər wiː kæn sɔːrt ðɪs aʊt ˈsɪvəli wɪð ðə ˈdjuːti ˈmænɪdʒər",
      tr_hint:
        "'Sort this out' = 'sort-this-AUT'. 'Civilly' = 'SIV-il-li' (üç hece). Sondaki 'duty manager' net, profesyonel.",
    },
    {
      id: "ex.tc1.12.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Could we go through the transactions line by line — I have my statement right here.",
      voice_hint: "male_uk",
      tr_hint:
        "İşbirliği daveti + delil sunumu. 'Line by line' özenli; 'right here' delili işaret eder.",
    },
    {
      id: "ex.tc1.12.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "duty manager",
      tr_translation:
        "O an vardiya yöneten orta-üst kademe yönetici (GM değil ama yetkili)",
      example: "Could I have a word with the duty manager, please?",
      example_tr:
        "Vardiya yöneticisiyle konuşabilir miyim, lütfen?",
    },
  ],
};

// ============================================================
// Lesson 13 — Tour iptal + refund reddi, paper trail
// ============================================================
export const travelC1Lesson_13: BundledLesson = {
  id: "travel.c1.diplomacy.3",
  skill_id: "travel.c1.diplomacy",
  index: 13,
  title: "Tour Refund Reddi — Paper Trail",
  description:
    "Provider 'non-refundable' diyor. 'I'd appreciate written confirmation of that policy, citing the clause...' Tehdit yok, paper trail var.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.tc1.13.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "citing the clause",
      tr_translation: "İlgili maddeye atıfta bulunarak",
      example:
        "I'd appreciate written confirmation of that policy, citing the specific clause.",
      example_tr:
        "Bu politikayı, ilgili maddeye atıfta bulunarak yazılı olarak almak isterim.",
    },
    {
      id: "ex.tc1.13.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu politikayı, ilgili maddeye atıfta bulunarak yazılı olarak almak isterim.",
      target:
        "I'd appreciate written confirmation of that policy, citing the specific clause.",
      accepted_variants: [
        "Could you put that policy in writing, with a reference to the specific clause?",
        "I'd like that policy confirmed in writing, including the relevant clause number.",
        "Could you email me the policy in writing, citing the clause it falls under?",
        "I'd be grateful for written confirmation of the policy, with the clause cited.",
      ],
      tr_hint:
        "Paper trail için ana kalıp. 'In writing' + 'citing the clause' = sigortaya/kredi kartı disputuna ön hazırlık.",
    },
    {
      id: "ex.tc1.13.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Could you point me to where that's stipulated in the terms and ___?",
      answer: "conditions",
      distractors: ["agreements", "policies", "clauses"],
      tr_hint:
        "'Terms and conditions' (T&Cs) = sözleşmenin hukuki gövdesi. 'Stipulated' = belirtilmiş, formal.",
    },
    {
      id: "ex.tc1.13.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'll",
        "be",
        "raising",
        "this",
        "with",
        "my",
        "card",
        "issuer",
      ],
      correct_sentence: "I'll be raising this with my card issuer",
      tr_translation:
        "Bu konuyu kart sağlayıcımla ele alacağım (chargeback ima).",
    },
    {
      id: "ex.tc1.13.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You scam me! I will sue you and tell everyone on TripAdvisor!",
      correct_sentence:
        "I appreciate your position — but I'd like written confirmation of that policy, citing the specific clause, so I can raise it appropriately.",
      tr_explanation:
        "Tehdit ve hakaret operator'ı kapatır, hak kaybı yaratır. 'Appreciate position' + 'written confirmation' + 'raise it appropriately' = sigortaya, kart issuer'a, tüketici örgütüne yazılı delille gideceğin sinyali. Operator bu noktada hesap yapar — refund verir.",
    },
    {
      id: "ex.tc1.13.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Tour operator iptali kabul etmiyor, 'non-refundable' diyor. Sigorta ve kart issuer chargeback için paper trail topluyorsun.",
      npc_role: "Premium customer service",
      setting: "Phone call with tour operator's customer service",
      turns: [
        {
          speaker: "npc",
          message:
            "Hello, this is customer service. I understand you're enquiring about a refund — unfortunately, this booking is non-refundable.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i appreciate|i understand).{0,40}(your position|that|the policy)",
            "(thank you|appreciate).{0,30}(clarifying|explaining|the call)",
            "(could you|would you).{0,40}(point me to|cite|reference).{0,40}(clause|terms|conditions)",
            "(i understand|appreciate).{0,30}(but|however).{0,80}(written|citing|clause)",
            "(thank you for taking|appreciate you taking) the (call|time).{0,40}(clause|terms|policy)",
            "(may i ask|might you).{0,30}(direct me to|point me to) (the specific|the relevant) (clause|section)",
            "(i hear you|i take your point).{0,40}(but|however).{0,40}(reference|specific clause|terms and conditions)",
          ],
          hint_tr:
            "Pozisyonunu kabul et, sonra belge iste: 'I appreciate your position — could you point me to the specific clause that covers this?'",
        },
        {
          speaker: "npc",
          message:
            "It's in our standard terms — section 4.2, no refunds within 14 days of departure.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|would) you.{0,40}(email|send|put).{0,30}(in writing|by email).{0,40}(citing|with reference|including).{0,30}(clause|section)",
            "(i'?d|i would).{0,30}(appreciate|like|prefer).{0,40}(written confirmation|in writing).{0,40}(citing|clause|section)",
            "(could you|would you) (confirm|share).{0,40}(by email|in writing).{0,40}(section 4|the clause|policy)",
            "(may i have|could i have) (that|this) (in writing|by email)",
            "(would it be possible|might it be possible) to (email|send) (me|that) (in writing|with the clause)",
            "(for my records|for the file).{0,40}(in writing|by email).{0,40}(section 4|clause)",
            "(i'?d be grateful|i'?d appreciate it).{0,40}(written|in writing|emailed).{0,30}(reference|citing|clause)",
          ],
          hint_tr:
            "Paper trail talep et: 'Could you put that in writing, citing section 4.2 specifically?'",
        },
        {
          speaker: "npc",
          message:
            "I can do that. I'll email it within the hour. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|also|one more thing).{0,40}(circumstances|grounds|exception|consideration)",
            "(given|in light of).{0,40}(circumstances|illness|cancellation|reason).{0,40}(consider|exception|review)",
            "(would|could) (you|the manager).{0,40}(consider|review|escalate).{0,40}(case|circumstances|exception)",
            "(any|is there) (room|chance|possibility).{0,40}(exception|discretion|goodwill)",
            "(if i may ask|may i ask).{0,40}(escalate|consider).{0,30}(circumstances|case|exception)",
            "(would there be|is there) any (scope|room) for (discretion|a goodwill gesture)",
            "(could (you|the team)|might (you|the manager)).{0,40}(make an exception|escalate|review).{0,30}(circumstances|grounds)",
          ],
          hint_tr:
            "Goodwill kapısını aç: 'Given my circumstances [reason], would the manager consider a discretionary exception?'",
        },
        {
          speaker: "npc",
          message:
            "I can flag it for review. No guarantees, but I'll forward the case.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|much appreciated|i appreciate).{0,30}(that|the consideration|review)",
            "(also|additionally).{0,40}(reference number|case number|incident)",
            "(could you|may i have) (a |the )?(reference|case|incident).{0,30}(number)",
            "(for my records|i'?ll be|keeping).{0,40}(card issuer|insurance)",
            "(thank you|i appreciate) — (could you|may i have).{0,30}(case|reference|incident) number",
            "(for the file|for the record).{0,30}(could you give|would you provide).{0,30}(case|reference) number",
            "(grateful|thanks) — (just to close the loop|to keep on file).{0,40}(reference|case number)",
          ],
          hint_tr:
            "Takdir + iz numarası: 'Thank you — could you give me a case reference number for my records?'",
        },
        {
          speaker: "npc",
          message:
            "Case reference: TKR-2024-08812. You should hear back within five business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|much appreciated|noted).{0,30}(record|got it|i'?ve got)",
            "(brilliant|wonderful).{0,30}(thank you|appreciate).{0,30}(time|your help)",
            "(i'?ll be|i will) (in touch|following up|expecting).{0,40}(days|written|email)",
            "(thank you|appreciate it) — (i'?ll follow up|i'?ll be in touch) (if|should).{0,30}(haven'?t heard|nothing comes)",
            "(noted|got it) — (thank you|cheers) for (your time|your patience|sorting this)",
            "(perfect|brilliant), (thank you|much appreciated) — (await|expecting) (the email|the follow-up)",
          ],
          hint_tr:
            "Profesyonel kapat: 'Thank you — I'll be in touch if I haven't heard back by then.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you for your patience — we'll be in touch.",
        },
      ],
    },
    {
      id: "ex.tc1.13.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Citing the clause' niye kritik?",
          options: [
            "Operator'ı korkutmak için",
            "Sigorta/chargeback başvurusunda belge gerekir — yazılı + clause referansı",
            "Hiçbir işe yaramaz",
            "Sadece avukatlar kullanır",
          ],
          correct_index: 1,
          tr_explanation:
            "Sigortaya/kart issuer'a gittiğinde 'X tour operator, terms section 4.2'yi yazılı olarak teyit etti, fakat...' diyebilirsin.",
        },
        {
          question: "Refund reddi karşısında EN güçlü hamle?",
          options: [
            "Sosyal medya tehdidi",
            "Kibarca: 'I appreciate your position — could you put that in writing, citing the specific clause?'",
            "Avukatla konuş tehdidi",
            "Operator'ın sahibini ara",
          ],
          correct_index: 1,
          tr_explanation:
            "Yazılı delil = chargeback ve sigorta için zemin. Operator'ı sıkıştıran tek profesyonel araç.",
        },
        {
          question: "Goodwill exception kapısını nasıl açarsın?",
          options: [
            "'Sen yaparsın yoksa...' diye tehdit et",
            "'Given my circumstances, would the manager consider a discretionary exception?'",
            "Sustu, gönder",
            "Yöneticinin telefonunu iste",
          ],
          correct_index: 1,
          tr_explanation:
            "'Discretionary exception' formal ricacı kapısı. Operator manager'a soracak ve %30 ihtimal çözüm gelir.",
        },
      ],
    },
    {
      id: "ex.tc1.13.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'd appreciate written confirmation of that policy, citing the specific clause.",
      ipa:
        "aɪd əˈpriːʃieɪt ˈrɪtən ˌkɒnfərˈmeɪʃən ɒv ðæt ˈpɒləsi ˈsaɪtɪŋ ðə spəˈsɪfɪk klɔːz",
      tr_hint:
        "'Citing' = 'SAY-ting'. 'Clause' = 'klɔːz' (uzun 'aw'). Cümle ölçülü, soğuk profesyonel ton.",
    },
    {
      id: "ex.tc1.13.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'll be raising this with my card issuer if it isn't resolved — just so we're clear.",
      voice_hint: "female_uk",
      tr_hint:
        "Tehdit değil, niyet beyanı. 'Just so we're clear' inişli, ama net. Profesyonel uyarı dili.",
    },
    {
      id: "ex.tc1.13.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "raise it with my card issuer",
      tr_translation:
        "Konuyu kart sağlayıcımla ele almak (chargeback ima)",
      example: "I'll be raising this with my card issuer if needed.",
      example_tr:
        "Gerekirse bu konuyu kart sağlayıcımla ele alacağım.",
    },
  ],
};

// ============================================================
// Lesson 14 — Business class'ta VC partneri ile networking
// ============================================================
export const travelC1Lesson_14: BundledLesson = {
  id: "travel.c1.network.1",
  skill_id: "travel.c1.network",
  index: 14,
  title: "Business Class'ta VC Networking",
  description:
    "Yan koltukta VC partneri, laptop'ta deck. 'I couldn't help noticing — are you in venture?' Doğal merak, pushy değil.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.tc1.14.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I couldn't help noticing",
      tr_translation:
        "Fark etmeden duramadım (kibarca konuşma başlatma kalıbı)",
      example: "I couldn't help noticing — are you in venture?",
      example_tr:
        "Fark etmeden duramadım — venture sektöründe misiniz?",
    },
    {
      id: "ex.tc1.14.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Fark etmeden duramadım — venture sektöründe misiniz?",
      target: "I couldn't help noticing — are you in venture?",
      accepted_variants: [
        "Sorry to be nosy — but are you in VC?",
        "I hope you don't mind me asking, but are you in venture?",
        "Forgive the intrusion — are you in the venture space?",
        "I noticed the slide just now — are you working in VC?",
      ],
      tr_hint:
        "'I couldn't help noticing' = uçakta/restoranda konuşma açmanın altın kalıbı. Pushy değil, doğal merak.",
    },
    {
      id: "ex.tc1.14.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I won't keep you — but I'd love to ___ in touch if you're open to it.",
      answer: "stay",
      distractors: ["get", "keep", "remain"],
      tr_hint:
        "'Stay in touch' = irtibatta kalmak. 'I won't keep you' = vakit almıyorum, kibarca çıkış.",
    },
    {
      id: "ex.tc1.14.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "do",
        "you",
        "mind",
        "if",
        "I",
        "send",
        "you",
        "a",
        "LinkedIn",
        "request",
      ],
      correct_sentence: "do you mind if I send you a LinkedIn request",
      tr_translation:
        "LinkedIn'den bağlantı isteği göndersem rahatsız olur musunuz?",
    },
    {
      id: "ex.tc1.14.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Hi! I saw your laptop, you are VC, give me your card, I have idea for app!",
      correct_sentence:
        "Sorry to interrupt — I couldn't help noticing the deck. Are you in venture? I won't keep you, just curious.",
      tr_explanation:
        "Pushy + transactional sıfır puan. C1 networking'i: kibar açılış, paylaşılan ilgiyi sezdir, baskı yok, exit kolay. VC sana zaten ilgilenirse sorar; ilgilenmezse seni rahatsız etmemişsindir.",
    },
    {
      id: "ex.tc1.14.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "14 saatlik uçuş. Yan koltukta laptop açık, VC pitch deck'i. Doğal sohbet aç, LinkedIn-worthy bağlantı kur.",
      npc_role: "Long-haul flight purser",
      setting: "Business class cabin, two hours into a long-haul flight",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to|forgive me for|hope you don'?t mind).{0,40}(interrupt|intrude|disturb)",
            "(i couldn'?t help|i couldn'?t help but) (notic|see).{0,40}(deck|slide|laptop)",
            "(hope it'?s|i hope you don'?t mind|sorry).{0,40}(asking|but).{0,30}(venture|vc|investing)",
            "(are you|do you work) in (venture|vc|investing)",
            "(forgive the intrusion|sorry to be nosy).{0,40}(deck|venture|vc)",
            "(this might be|tell me to mind my own).{0,30}(deck|slides|venture)",
            "(may i ask|just curious) — (are you|do you happen to be).{0,30}(in venture|in vc|investing)",
          ],
          hint_tr:
            "Yumuşak açılış: 'Sorry to interrupt — I couldn't help noticing the deck. Are you in venture?'",
        },
        {
          speaker: "npc",
          message:
            "Ha! Yes — I'm a partner at a fund based in London. You in the space?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(adjacent|tangentially|not exactly).{0,40}(operator|founder|consultant|product)",
            "(i'?m on the|my background).{0,30}(operator|product|founder|building) side",
            "(yes|i work|i'?m involved).{0,40}(early-stage|fintech|saas|consumer|deep tech)",
            "(i run|i lead|i'?m building).{0,40}(company|startup|product)",
            "(adjacent to it|tangential to vc).{0,40}(building|operator|founder)",
            "(different angle|same world).{0,40}(operator|founder|building)",
            "(my background|day job) is (in|on the).{0,30}(operator|product|founder|company) (side)?",
          ],
          hint_tr:
            "Doğal pozisyon: 'I'm on the operator side — building a B2B SaaS in fintech. Different angle, same world.'",
        },
        {
          speaker: "npc",
          message:
            "Nice. We do a fair bit in fintech. What's the pain point you're solving?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in a sentence|short version|the bull case|simply put).{0,80}(solving|helping|enabling)",
            "(we|i).{0,30}(help|enable|allow).{0,80}(without|instead of|by)",
            "(the core insight|the wedge|our take).{0,40}(is|was).{0,60}(market|customer|workflow)",
            "(short version|to be brief|in one line).{0,40}(help|enable|solving)",
            "(in one line|to keep it short).{0,40}(we (help|enable|allow|let)).{0,40}(without|instead)",
            "(the problem|pain point) we (solve|address) is.{0,40}(workflow|cost|process|legacy)",
            "(picture this|imagine).{0,40}(we (help|let|allow)).{0,60}(without|by)",
          ],
          hint_tr:
            "Elevator pitch, pushy değil: 'Short version — we help SMB treasurers automate FX hedging without enterprise software costs.'",
        },
        {
          speaker: "npc",
          message:
            "Interesting wedge. Who's your typical buyer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(typically|usually|in most cases).{0,40}(cfo|finance|treasurer|head of)",
            "(our|the) (icp|target|sweet spot).{0,40}(mid.?market|smb|series b|companies)",
            "(it'?s|its) typically.{0,40}(cfo|finance|treasurer|founder|cto)",
            "(the buyer|the decision maker) is (usually|typically).{0,40}(cfo|treasurer|head of finance)",
            "(we tend to|we mostly) (sell into|land at).{0,40}(mid.?market|smb|enterprise)",
            "(our sweet spot|our ideal customer) (is|sits at).{0,40}(mid.?market|companies|smb)",
            "(we work with|we close).{0,40}(cfo|treasurer|finance team).{0,30}(mid.?market|smb)",
          ],
          hint_tr:
            "Net ICP: 'Typically mid-market CFOs or treasurers — companies doing 50-500m in cross-border revenue.'",
        },
        {
          speaker: "npc",
          message:
            "Clean profile. Look, I won't pretend to commit, but I'd love to see the deck when you're raising.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|with pleasure).{0,40}(linkedin|connect|share)",
            "(do you mind|would you mind|happy to).{0,40}(send|share).{0,30}(deck|materials|memo)",
            "(can i|may i).{0,30}(send|share).{0,30}(linkedin|connection|request)",
            "(i'?ll|i will).{0,30}(send|ping|drop).{0,30}(linkedin|deck|email)",
            "(more than happy|delighted) to (share|send|forward) (the deck|materials)",
            "(would it be alright|might it be ok) to (drop you|send you) (a linkedin|a note|the deck)",
            "(let me|i'?d love to) (connect on linkedin|drop you a line).{0,30}(when we|once we) (raise|are ready)",
          ],
          hint_tr:
            "Soft pull, exit hazır: 'Of course — happy to share. Do you mind if I send a LinkedIn request?'",
        },
        {
          speaker: "npc",
          message:
            "Please do. My handle's on the back of this card. Enjoy the rest of the flight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|much appreciated|cheers).{0,40}(time|the chat|conversation)",
            "(thanks|appreciate it).{0,30}(won'?t keep you|enjoy|rest of)",
            "(brilliant|wonderful|pleasure).{0,40}(meeting|chatting|talking)",
            "(i'?ll be|i won'?t) (in touch|keep you|disturb)",
            "(really good|really nice) (chat|conversation) — (won'?t keep you|enjoy the rest)",
            "(thanks again|cheers for) (the chat|the time) — (have a|enjoy the) (good flight|rest)",
            "(pleasure meeting you|good to meet you) — (i'?ll let you|i won'?t keep you) (get back|to it)",
          ],
          hint_tr:
            "Kibar exit: 'Thank you for the chat — won't keep you any longer. Enjoy the rest of the flight.'",
        },
      ],
    },
    {
      id: "ex.tc1.14.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Uçakta yabancıyla konuşma açmanın altın kalıbı?",
          options: [
            "Hi! What's your job?",
            "I couldn't help noticing — are you in venture?",
            "Tell me about your work right now.",
            "Are you a VC or what?",
          ],
          correct_index: 1,
          tr_explanation:
            "'I couldn't help noticing' = pushy değil, doğal merak. Karşı taraf reddederse 'sorry to disturb' ile çek.",
        },
        {
          question: "Networking pitch'inde EN doğru ton?",
          options: [
            "Tüm slide'larımı göstereyim",
            "Short version + spesifik ICP + soft exit. 'Won't keep you'",
            "Yatırım iste, kart bırak",
            "Hiç konuşma, dinle sadece",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygı + ilgi + soft exit. VC merak ederse sorar, etmezse rahatsız edilmemişsindir.",
        },
        {
          question: "Bağlantı iste için nazik kalıp?",
          options: [
            "Give me your number",
            "Do you mind if I send you a LinkedIn request?",
            "I add you on WhatsApp",
            "Connect me everywhere",
          ],
          correct_index: 1,
          tr_explanation:
            "'Do you mind if I send a LinkedIn request?' = profesyonel, takip edilebilir, baskısız.",
        },
      ],
    },
    {
      id: "ex.tc1.14.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I couldn't help noticing — are you in venture?",
      ipa:
        "aɪ ˈkʊdənt hɛlp ˈnoʊtɪsɪŋ ɑːr juː ɪn ˈvɛntʃər",
      tr_hint:
        "'Couldn't help' = 'kʊd-ənt-hɛlp', neredeyse tek kelime. 'Noticing' = 'NOH-tis-ing'. Sondaki 'venture' soru tonu.",
    },
    {
      id: "ex.tc1.14.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Short version — we help SMB treasurers automate FX hedging without enterprise software costs.",
      voice_hint: "male_us",
      tr_hint:
        "Elevator pitch ritmi. 'Short version' giriş, dash, ana paragraf. Hızlı ama net.",
    },
    {
      id: "ex.tc1.14.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I won't keep you",
      tr_translation:
        "Vakit almıyorum / sizi tutmayayım (kibarca exit)",
      example: "I won't keep you — just wanted to say it was great chatting.",
      example_tr:
        "Vaktinizi almayayım — konuşmak güzeldi, demek istedim.",
    },
  ],
};

// ============================================================
// Lesson 15 — Heathrow lounge, senior diplomat sohbeti
// ============================================================
export const travelC1Lesson_15: BundledLesson = {
  id: "travel.c1.network.2",
  skill_id: "travel.c1.network",
  index: 15,
  title: "Heathrow Lounge — Diplomat Sohbeti",
  description:
    "Bar'da Brexit, Türk-AB ilişkileri, Ukrayna. 'I'd be curious to hear your read on...' Fikir sorar gibi sorgu, kanaat dayatmadan.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.tc1.15.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd be curious to hear your read on",
      tr_translation: "Bu konudaki okumanızı/değerlendirmenizi merak ederim",
      example:
        "I'd be curious to hear your read on where the talks go from here.",
      example_tr:
        "Müzakerelerin buradan nereye gideceği konusundaki okumanızı merak ediyorum.",
    },
    {
      id: "ex.tc1.15.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu konudaki okumanızı merak ederim — kişisel olarak değil, alandaki biri olarak.",
      target:
        "I'd be curious to hear your read on this — not personally, but as someone in the field.",
      accepted_variants: [
        "I'd love your take on this — not personally, but professionally.",
        "What's your read on this, if I may ask — speaking as someone in the field?",
        "I'd be interested in your professional read on this, if you're at liberty to share.",
        "Speaking professionally, what's your sense of how this plays out?",
      ],
      tr_hint:
        "'Read on' = okuma, değerlendirme. 'Not personally, but as someone in the field' = diplomata profesyonel zırh sunan kibarlık.",
    },
    {
      id: "ex.tc1.15.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "If you're at ___ to share, of course.",
      answer: "liberty",
      distractors: ["leisure", "freedom", "ease"],
      tr_hint:
        "'At liberty to share' = paylaşmakta serbest. Diplomat veya hassas pozisyondaki kişiye 'mecbur değilsin' demenin formel yolu.",
    },
    {
      id: "ex.tc1.15.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I",
        "appreciate",
        "the",
        "candour",
        "of",
        "your",
        "answer",
      ],
      correct_sentence: "I appreciate the candour of your answer",
      tr_translation:
        "Cevabınızdaki samimiyeti takdir ediyorum.",
    },
    {
      id: "ex.tc1.15.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "So is Putin good or bad? What about Erdogan? Tell me!",
      correct_sentence:
        "I'd be curious to hear your read on how Turkey-EU relations are likely to develop over the next few years — if you're at liberty to share.",
      tr_explanation:
        "Diplomata isim+değer yargısı ('good or bad?') çıkar bilet. C1: süreç + zaman çerçevesi + 'if you're at liberty' = uzmana profesyonel zırh sunar, açılır. Karşılığında sen LinkedIn-worthy bir konuşma alırsın.",
    },
    {
      id: "ex.tc1.15.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Heathrow business lounge bar. Yan tarafta senior diplomat (passive sinyaller — pin, çanta, gazete). Doğal sohbet aç, hassas konularda hedge'li sorgu yap.",
      npc_role: "Embassy/consulate clerk",
      setting: "Heathrow Terminal 5 business lounge bar, evening",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quite the|busy|long) (day|evening|trip|flight)",
            "(heading|off to|on the way to).{0,40}(brussels|new york|ankara|paris)",
            "(forgive me|i hope you don'?t mind).{0,40}(noticed|asking).{0,30}(pin|paper|book)",
            "(quite|how).{0,30}(quiet|busy) tonight",
            "(busy|quiet) (in here|tonight) — (are you|heading) (off|anywhere) (somewhere|interesting)",
            "(any plans|going somewhere) (interesting|exciting) (tonight|this evening)",
            "(long day ahead|that kind of evening)",
          ],
          hint_tr:
            "Yumuşak ortam açılışı: 'Quite the evening — heading anywhere interesting?'",
        },
        {
          speaker: "npc",
          message:
            "Brussels, actually. EU meetings tomorrow morning. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(istanbul|ankara|home to istanbul|back to turkey)",
            "(ah|interesting|brussels).{0,40}(quite the week|busy period|interesting time)",
            "(i'?m heading|i'?m off to|home).{0,40}(istanbul|turkey|ankara)",
            "(i couldn'?t|i couldn'?t help).{0,30}(notice|see).{0,30}(diplomatic|foreign|service)",
            "(brussels|that) (sounds|must be) (full-on|interesting|quite the trip)",
            "(i imagine|i can imagine) the (agenda|schedule|week) is (heavy|charged|packed)",
            "(home (to|for) (istanbul|ankara|turkey)) — (you sound|brussels sounds) (interesting|like a busy time)",
          ],
          hint_tr:
            "Karşılıklı paylaş + ilgi: 'Istanbul, actually. Brussels sounds like quite the week — I imagine the agenda's heavy.'",
        },
        {
          speaker: "npc",
          message:
            "It always is. We're in the foreign service — twenty-two years now. Where are you in Istanbul?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i live in|i'?m based in|i'?m from).{0,40}(beyoğlu|kadıköy|nişantaşı|istanbul)",
            "(i work in|i run|i lead).{0,40}(consulting|tech|finance|policy|research)",
            "(i'?d be curious|i'?d love|i'?m interested).{0,40}(your read|your take|your sense).{0,40}(turkey|eu|brussels)",
            "(i (work|live) in|over in).{0,40}(beyoğlu|kadıköy|nişantaşı|istanbul).{0,40}(consulting|research|policy)",
            "(small world|interesting) — (i'?m in|i work in).{0,40}(policy|research|consulting|tech)",
            "(would you|might you) (mind if|share if) i (asked|brought up).{0,40}(turkey-eu|brussels|policy)",
          ],
          hint_tr:
            "Konum + ilgi alanı + soft hedge'li soru: 'Based in Beyoğlu — I work in policy research. I'd be curious to hear your read on where Turkey-EU relations are heading, if you're at liberty.'",
        },
        {
          speaker: "npc",
          message:
            "Ah, a fellow traveller in policy. It's complicated — but there's more pragmatic momentum than the headlines suggest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) (encouraging|interesting|striking|reassuring)",
            "(i'?d be|i would be).{0,40}(curious|interested).{0,40}(which areas|examples|where|specifically)",
            "(would|could) you share.{0,40}(which|where|any examples).{0,30}(pragmatic|momentum)",
            "(if you'?re|if it'?s).{0,30}(at liberty|appropriate).{0,30}(share|elaborate)",
            "(may i ask|might you say).{0,40}(where|which areas).{0,40}(progress|momentum|pragmatic)",
            "(reassuring to hear|interesting to hear) — (any examples|which dossiers) (you could|come to mind)",
            "(i imagine|i'?d guess).{0,30}(customs|energy|migration) — (would (that|those)|are those) (the areas|fair)",
          ],
          hint_tr:
            "Takdir + spesifik açılım: 'That's encouraging — would you share which areas, if you're at liberty? I imagine customs and energy?'",
        },
        {
          speaker: "npc",
          message:
            "Customs union modernisation, yes. Plus green energy cooperation. The migration file's the harder one — politically charged on both sides.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i appreciate|i find|that'?s).{0,40}(candour|frank|honest|insight)",
            "(i can|one can) (see|imagine).{0,40}(both sides|each|delicate|sensitive)",
            "(i'?d be|i would be).{0,40}(curious|interested).{0,40}(long view|five year|where you see)",
            "(off the record|if i may|reading you)",
            "(thank you for|appreciate) (the candour|the frankness).{0,40}(long view|five-?year|where you see)",
            "(may i press a little|may i push a little).{0,40}(where you see|long view|five years)",
            "(taking the long view|stepping back).{0,40}(five years|a decade|where things)",
          ],
          hint_tr:
            "Hedge'li bir adım daha: 'I appreciate the candour — and where do you see the long view, in five years?'",
        },
        {
          speaker: "npc",
          message:
            "Slow normalisation. Not flashy, but durable. The next generation of diplomats on both sides is less ideological.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|i appreciate|much appreciated).{0,40}(perspective|view|insight|sharing)",
            "(that'?s|that is).{0,30}(refreshing|reassuring|illuminating)",
            "(i'?ll let you|i won'?t keep|enjoy).{0,40}(get back|prepare|enjoy)",
            "(may i|might i) ask.{0,40}(linkedin|connect)",
            "(refreshing to hear|illuminating to hear) — (thank you|appreciate) (for sharing|your time)",
            "(i'?ll let you|i'?ll leave you to) (prepare|your reading|your evening)",
            "(thank you|grateful) for (the time|the perspective) — (a real|a rare) (treat|privilege)",
          ],
          hint_tr:
            "Kibar kapat: 'Thank you for the perspective — really refreshing. I won't keep you from preparing.'",
        },
        {
          speaker: "npc",
          message:
            "Pleasure was mine. Here's my card — feel free to write if you're ever in Brussels.",
        },
      ],
    },
    {
      id: "ex.tc1.15.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Diplomat ile hassas konuyu açmanın altın kalıbı?",
          options: [
            "Sert görüşünü söyle ve karşılığını al",
            "I'd be curious to hear your read on... if you're at liberty to share.",
            "Yargılayıcı isim+değer sorusu sor (Putin good?)",
            "Hiç sorma",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd be curious to hear your read' + 'if you're at liberty' = profesyonel zırh sunar. Karşı tarafı açar.",
        },
        {
          question: "'At liberty to share' = ?",
          options: [
            "Özgür olmak istemek",
            "Paylaşmakta serbest, mecbur değil (formel)",
            "Açıkça konuşmak",
            "İzinli olmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Diplomat veya hassas pozisyondaki kişiye 'reddetmen normal' demenin formel yolu.",
        },
        {
          question: "Lounge networking'inde EN doğru exit?",
          options: [
            "Telefonunu iste",
            "'Thank you for the perspective — I won't keep you from preparing.'",
            "Ne istediğini söyle",
            "Konuşmaya devam et",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygı + profesyonel exit. Karşı taraf isterse kart verir; vermezse rahatsız edilmemişsindir.",
        },
      ],
    },
    {
      id: "ex.tc1.15.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'd be curious to hear your read on this — if you're at liberty to share.",
      ipa:
        "aɪd biː ˈkjʊəriəs tuː hɪər jɔːr riːd ɒn ðɪs ɪf jɔːr æt ˈlɪbərti tuː ʃɛər",
      tr_hint:
        "'Curious' = 'KYUR-i-əs'. 'At liberty' = 'æt-LIB-ər-ti'. Cümle akıcı, hedge'li — soru gibi başlar, dilek gibi biter.",
    },
    {
      id: "ex.tc1.15.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I appreciate the candour — and where do you see the long view, say five years out?",
      voice_hint: "female_uk",
      tr_hint:
        "'Candour' = 'KÆN-dər' (UK), samimiyet. 'Long view' = uzun vade. 'Say five years out' yumuşak özelleştirme. Akademik-diplomatik ritim.",
    },
    {
      id: "ex.tc1.15.10",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "appreciate the candour",
      tr_translation: "Samimiyet/açıksözlülük takdiri",
      example: "I appreciate the candour — it's not the standard line.",
      example_tr:
        "Açıksözlülüğünüzü takdir ediyorum — bu standart açıklama değil.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const travelC1Lessons: ReadonlyArray<BundledLesson> = [
  travelC1Lesson_1,
  travelC1Lesson_2,
  travelC1Lesson_3,
  travelC1Lesson_4,
  travelC1Lesson_5,
  travelC1Lesson_6,
  travelC1Lesson_7,
  travelC1Lesson_8,
  travelC1Lesson_9,
  travelC1Lesson_10,
  travelC1Lesson_11,
  travelC1Lesson_12,
  travelC1Lesson_13,
  travelC1Lesson_14,
  travelC1Lesson_15,
];

export function getTravelC1Lesson(id: string): BundledLesson | undefined {
  return travelC1Lessons.find((l) => l.id === id);
}
