// Work - Coffee Chat / Networking lessons
// Skill: work.coffeechat (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 13.1 — Setting Up the Chat (Cografta Ayarlama)
// ============================================================
export const workCoffeechatLesson_13_1: BundledLesson = {
  id: "work.coffeechat.13.1",
  skill_id: "work.coffeechat",
  index: 1,
  title: "Coffee Chat Ayarlama",
  description:
    "LinkedIn / Slack uzerinden 'coffee chat' ayarlamak. 'Quick 15' yontemi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcc13.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Pick your brain",
      tr_translation: "Beyninden faydalanmak / fikrini almak",
      example: "Would love to pick your brain on your career path.",
      example_tr: "Kariyer yolun hakkında beyninden faydalanmak isterim.",
    },
    {
      id: "ex.wcc13.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Hayli ilgilendigim bir konuda 15 dakika konusabilir miyiz?",
      target: "Would you have 15 minutes to chat about something I'm curious about?",
      accepted_variants: [
        "Could I grab 15 min on your calendar for a quick chat?",
        "Open to a quick 15-min coffee chat sometime?",
        "Would love 15 min if your schedule allows.",
        "Quick 15 — would that be possible?",
      ],
      tr_hint:
        "'Quick 15' = 15 dakika. Sure belirtmek = zamanına saygi. Networking standardı.",
    },
    {
      id: "ex.wcc13.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Grab 15 ___ your calendar.",
      answer: "on",
      distractors: ["in", "at", "from"],
      tr_hint:
        "'Grab time on your calendar' = takvimde slot ayirma. Profesyonel networking kalibi.",
    },
    {
      id: "ex.wcc13.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Happy",
        "to",
        "work",
        "around",
        "your",
        "schedule",
      ],
      correct_sentence: "Happy to work around your schedule",
      tr_translation: "Senin programına uyum sağlarım.",
    },
    {
      id: "ex.wcc13.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I need help. Call me now.",
      correct_sentence:
        "Would love to grab 15 min on your calendar — happy to work around you.",
      tr_explanation:
        "'Call me now' = baskici + saygisiz. Doğru: zaman belirt + esnek ol + saygili.",
    },
    {
      id: "ex.wcc13.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "LinkedIn'de senior engineer'a coffee chat ayarlamak istiyorsun.",
      npc_role: "Senior Engineer",
      setting: "LinkedIn DM",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi) (name|sarah)",
            "(saw|read|followed|enjoyed) (your (post|article|profile|recent (talk|piece)))",
            "(would (love|appreciate) to|wondering if) (pick your brain|chat|grab 15)",
            "(15 (min|minutes)|quick|short)",
            "(career path|how you (got|navigated)|the (transition|switch))",
            "(happy to|will) (work around|fit your schedule|find a time)",
          ],
          hint_tr:
            "Net acilis: 'Hi Sarah — saw your post on X. Would love to grab 15 min to pick your brain.'",
        },
        {
          speaker: "npc",
          message:
            "Sure! What did you want to chat about specifically?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(specifically|in particular|main thing)",
            "(transitioning|moving) (from \\w+ to \\w+|into management|to staff)",
            "(curious about|interested in) (how (you|the team))",
            "(growth (decisions|moves)|career levers)",
            "(prep|prepare) (some questions|specific things) (ahead)",
            "(open to|happy to) (any structure|whatever works)",
          ],
          hint_tr:
            "Spesifik konu: 'Curious about how you moved from IC to manager — will prep questions.'",
        },
        {
          speaker: "npc",
          message:
            "Cool, send me a few times next week!",
        },
      ],
    },
    {
      id: "ex.wcc13.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Coffee chat istegi yaparken EN onemli sey?",
          options: [
            "Sure belirt (15 min) + zamana saygi",
            "Belirsiz brak",
            "Saatlik iste",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "'15 min' = 'sure az' sinyali = kabul orani yuksek. Belirsiz = red.",
        },
        {
          question: "'Pick your brain' tabiri kullanmaz misin?",
          options: [
            "Tehlikeli ifade",
            "Casual + saygili + standart networking kalibi",
            "Yanlis ingilizce",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Fikrini almak' = saygili + cana yakin. ABD ve UK iste norm.",
        },
        {
          question: "Coffee chat istemenin RISKI?",
          options: [
            "Risk yok",
            "Belirsiz / cok baskici acilis = red. Saygili + net = kabul.",
            "Asla yapma",
            "Onemli degil",
          ],
          correct_index: 1,
          tr_explanation:
            "Buyuklenmis tonu = saygisizlik hissi. Saygi + spesifik = pro.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 13.2 — Smart Questions to Ask (Akilli Sorular)
// ============================================================
export const workCoffeechatLesson_13_2: BundledLesson = {
  id: "work.coffeechat.13.2",
  skill_id: "work.coffeechat",
  index: 2,
  title: "Akilli Sorular Sormak",
  description:
    "Coffee chat'te 'tell me about yourself' degil, derin sorular sor — karsi tarafa deger ver.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcc13.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What's a non-obvious lesson",
      tr_translation: "Aşikar olmayan bir ders ne?",
      example: "What's a non-obvious lesson from your last promo?",
      example_tr: "Son terfinden aşikar olmayan bir ders ne?",
    },
    {
      id: "ex.wcc13.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu yola baslamadan once bilmeyi isterdigin sey ne?",
      target: "What do you wish you'd known before starting?",
      accepted_variants: [
        "What would you tell yourself at the start?",
        "What's something past-you got wrong?",
        "If you could go back, what would you do differently?",
        "What surprised you most along the way?",
      ],
      tr_hint:
        "'What do you wish you'd known' = retrospektif soru. Hicbir CV'de yok = degerli.",
    },
    {
      id: "ex.wcc13.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's something you'd ___ differently?",
      answer: "do",
      distractors: ["go", "make", "be"],
      tr_hint:
        "'Do differently' = farkli yapardim. Retrospektif soru standart.",
    },
    {
      id: "ex.wcc13.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "skill",
        "underrated",
        "the",
        "most",
        "is",
      ],
      correct_sentence: "What skill is the most underrated",
      tr_translation: "En çok küçümsenen yetenek hangisi?",
    },
    {
      id: "ex.wcc13.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Tell me about yourself.",
      correct_sentence:
        "What's a non-obvious lesson you learned in your last role?",
      tr_explanation:
        "'Tell me about yourself' = LinkedIn'de var = enerji israfi. Doğru: spesifik + derin = degerli sohbet.",
    },
    {
      id: "ex.wcc13.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Coffee chat baslama bolumune geldin. Senior engineer karsi tarafta. Derin sorular sor.",
      npc_role: "Senior Engineer",
      setting: "Coffee chat opening",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate) (you (making|taking) the time)",
            "(read your post on|saw your work on|been following)",
            "(specifically curious|wanted to ask) (about)",
            "(what'?s (a|the) non-?obvious (lesson|takeaway|learning))",
            "(what do you wish|if you could go back)",
            "(skill (you think is|that'?s) underrated)",
          ],
          hint_tr:
            "Acilis + derin soru: 'Thanks for the time — what's a non-obvious lesson from your IC-to-manager move?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, that I needed to stop coding to listen more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that resonates|makes sense|hadn'?t thought)",
            "(can you (say more|walk me through|elaborate))",
            "(what (signal|sign|moment))",
            "(how do you (balance|practice|stay))",
            "(any (book|resource|framework))",
          ],
          hint_tr:
            "Derinlestir: 'That resonates — what signal told you it was time to stop coding?'",
        },
        {
          speaker: "npc",
          message:
            "Great question. It was when no one was asking me for help anymore.",
        },
      ],
    },
    {
      id: "ex.wcc13.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Coffee chat'te EN kotu soru?",
          options: [
            "'Tell me about yourself' — LinkedIn'de bulunan + bos sohbet",
            "Spesifik teknik soru",
            "Retrospektif soru",
            "Career path",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsi tarafa onceden bilgi sun, sonra spesifik sor = saygili + degerli.",
        },
        {
          question: "Niye 'non-obvious lesson' iyi bir soru?",
          options: [
            "Klise cevap aci",
            "Karsi taraf gercekten dusunmek zorunda = degerli icgoru cikar",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Yuzey cevaplar herkes verebilir. Derin soru = derin cevap = hatirlanan sohbet.",
        },
        {
          question: "Coffee chat'te 'follow-up question' niye onemli?",
          options: [
            "Onemli degil",
            "Dinledigini gosterir + sohbet derinlestirir + iliski kurar",
            "Zaman israfi",
            "Saygisizlik",
          ],
          correct_index: 1,
          tr_explanation:
            "Bir sorudan sonraki cevabi 'noted' = pasif. Follow-up = aktif dinleyici.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 13.3 — Closing + Asking for Intro (Kapanis + Tavsiye Isteme)
// ============================================================
export const workCoffeechatLesson_13_3: BundledLesson = {
  id: "work.coffeechat.13.3",
  skill_id: "work.coffeechat",
  index: 3,
  title: "Kapanis + Intro Talebi",
  description:
    "Coffee chat bitiyor — tesekkur + ileride iletisim + 'kimi tanimaliyim?' sorusu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcc13.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Anyone I should reach out to",
      tr_translation: "Ulaşmam gereken biri var mı?",
      example: "Anyone you'd recommend I reach out to next?",
      example_tr: "Sırada ulaşmamı tavsiye ettiğin biri var mı?",
    },
    {
      id: "ex.wcc13.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Vakit ayirdigin icin tesekkurler — geri donmem gerekirse kapı acık mı?",
      target: "Thanks for the time — would you be open to a follow-up if more questions come up?",
      accepted_variants: [
        "Really appreciate this — door open for a follow-up if more questions emerge?",
        "Thanks so much — could I circle back if I have follow-ups?",
        "Grateful for this — open to future questions?",
        "This was helpful — mind if I reach out again with follow-ups?",
      ],
      tr_hint:
        "'Door open' / 'Circle back' = kapi acik. Iliski sosyal sermaye olarak korumak.",
    },
    {
      id: "ex.wcc13.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "How can I be ___ to you?",
      answer: "helpful",
      distractors: ["good", "useful", "right"],
      tr_hint:
        "'Be helpful to you' = sana yardimci olmak. Iliski two-way yapma kalibi.",
    },
    {
      id: "ex.wcc13.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Let",
        "me",
        "know",
        "if",
        "I",
        "can",
        "return",
        "the",
        "favor",
      ],
      correct_sentence: "Let me know if I can return the favor",
      tr_translation: "İyiliği geri ödeyebilirsem haber ver.",
    },
    {
      id: "ex.wcc13.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Ok bye thanks bye.",
      correct_sentence:
        "Thanks so much — door open for a follow-up? And anyone you'd suggest I talk to next?",
      tr_explanation:
        "'Ok bye thanks bye' = iliskiyi kapatir. Doğru: kapi acik + intro istegi = sosyal sermaye buyutur.",
    },
    {
      id: "ex.wcc13.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Coffee chat sonu yakla. Saglikli kapanis: tesekkur + kapi acik + intro istegi.",
      npc_role: "Senior Engineer",
      setting: "End of coffee chat",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this was|honestly was|so) (helpful|valuable|great)",
            "(thanks|thank you|appreciate) (so much|the time|the candor)",
            "(door open|would you (be )?open|mind if i) (to a follow-up|reach out)",
            "(more questions come up|future questions)",
            "(how can i (be helpful|return the favor))",
            "(anyone (i should|you'?d (suggest|recommend)))",
          ],
          hint_tr:
            "Saglikli kapat: 'This was so helpful — door open for follow-ups? Anyone you'd suggest next?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, door's open. And you should talk to David on the platform team.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate)",
            "(could you|would you mind|happy to take it cold)",
            "(intro me to|connect us|put us in touch)",
            "(or i can|i can also) (reach out cold|reach out myself)",
            "(let me know|whichever is easier)",
            "(grateful|really helpful)",
          ],
          hint_tr:
            "Intro talep et: 'Would you mind doing an intro? Or happy to reach out cold.'",
        },
        {
          speaker: "npc",
          message:
            "Will email you both this afternoon. Take care!",
        },
      ],
    },
    {
      id: "ex.wcc13.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Coffee chat kapanisinda EN guclu adim?",
          options: [
            "Hemen ayrilmak",
            "Tesekkur + kapi acik + intro istegi = sosyal sermaye buyutme",
            "Sadece tesekkur",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Cofee chat 30 dakika. Intro 1 dakikalik mesaj = ag buyumesi. Atlamak = enerji israf.",
        },
        {
          question: "'How can I be helpful to you?' niye guclu?",
          options: [
            "Cok agir",
            "Iliskiyi two-way yapar + sadece almak yerine verme niyeti gosterir",
            "Yanlis ingilizce",
            "Cok zayif",
          ],
          correct_index: 1,
          tr_explanation:
            "Sadece alici degil 'reciprocal' sinyal verir. Iliski uzun donem ihtiyacin var.",
        },
        {
          question: "'Or I can reach out cold' optionsi niye eklemeli?",
          options: [
            "Esik dusurur — karsi tarafa intro yapma zorlugu olmaz",
            "Gereksiz",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 0,
          tr_explanation:
            "Iyilik = enerji. Esnek olmak = karsi tarafa zaman kazandirir = saygi sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Coffee Chat lessons registry
// ============================================================
export const workCoffeechatLessons: ReadonlyArray<BundledLesson> = [
  workCoffeechatLesson_13_1,
  workCoffeechatLesson_13_2,
  workCoffeechatLesson_13_3,
];
