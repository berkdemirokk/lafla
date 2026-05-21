// Work - Coffee Chat / Networking lessons
// Skill: work.coffeechat (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
            "Got it. Are you currently in an IC role yourself, or thinking about the path?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(currently|right now|at the moment) (an? )?(ic|engineer|developer|designer)",
            "(i'?m|i am) (still |currently )?(an? )?ic",
            "(been an ic|been engineering) for (\\d+|two|three|four|five) years",
            "(thinking about|exploring|considering) the (path|transition|move)",
            "(not yet|not officially|kind of)",
            "(in (a )?senior (engineer|ic)|staff level)",
          ],
          hint_tr:
            "Mevcut rol: 'Currently an IC, been engineering for 4 years' veya 'Still exploring the path'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect, very relatable starting point. Any specific company you'd want me to draw examples from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(whatever you'?re|whichever you'?re) (comfortable (with|sharing)|happy to share)",
            "(your current|current company|where you are now)",
            "(no preference|open to (any|whatever))",
            "(would love to hear about|curious about) (.+)",
            "(could you talk about|happy to focus on) (.+)",
            "(any |all )?(your experience|examples) (helpful|valuable)",
          ],
          hint_tr:
            "Esnek ol: 'Whatever you're comfortable sharing' veya 'Your current company would be great'.",
        },
        {
          speaker: "npc",
          message:
            "Cool, send me a few times next week!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|sending now|coming right up)",
            "(thanks|thank you|appreciate (it|that)) so much",
            "(i'?ll )?(send|share) (a few|some) (times|slots) (today|by eod)",
            "(perfect|great|sounds good)(,)? (thanks|thank you)",
            "(really )?(appreciate|grateful for) (this|your time)",
          ],
          hint_tr:
            "Teşekkür + onay: 'Will do — sending a few slots by EOD. Really appreciate this!'",
        },
        {
          speaker: "npc",
          message:
            "Looking forward to it — see you next week.",
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
    {
      id: "ex.wcc13.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Would love to pick your brain over a quick 15.",
      tr_translation: "Hızlı bir 15 dakikada beyninden faydalanmak isterim.",
      ipa: "/wʊd lʌv tə pɪk jɔː breɪn ˈəʊvə ə kwɪk fɪfˈtiːn/",
    },
    {
      id: "ex.wcc13.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Happy to work around your schedule — even a quick 15 would be huge.",
      voice_hint: "male_us",
    },
    {
      id: "ex.wcc13.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Could I grab 15 min on your calendar for a quick chat?",
      target: "Could I grab 15 min on your calendar for a quick chat?",
    },
    {
      id: "ex.wcc13.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sync",
      tr_translation: "Senkron / kısa görüşme (iş kalıbı)",
      example: "Could we do a quick sync next week to align on goals?",
      example_tr: "Hedefleri hizalamak için önümüzdeki hafta hızlı bir sync yapabilir miyiz?",
    },
    {
      id: "ex.wcc13.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want to make a coffee chat with you since long time.",
      correct_sentence: "I've been wanting to have a coffee chat with you for a long time.",
      tr_explanation:
        "'Make a coffee chat' Türkçe kalıbı; doğrusu 'have a coffee chat'. 'Since long time' yanlış — süre için 'for a long time'. İstek süregelen ise present perfect continuous ('I've been wanting').",
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
    {
      id: "ex.wcc13.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What's a non-obvious lesson from your last role?",
      tr_translation: "Son görevinden aşikar olmayan bir ders ne?",
      ipa: "/wɒts ə nɒn ˈɒbvɪəs ˈlɛsn frəm jɔː lɑːst rəʊl/",
    },
    {
      id: "ex.wcc13.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "What do you wish you'd known before starting this chapter of your career?",
      voice_hint: "female_us",
    },
    {
      id: "ex.wcc13.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What skill do you think is the most underrated in your role?",
      target: "What skill do you think is the most underrated in your role?",
    },
    {
      id: "ex.wcc13.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "circle back",
      tr_translation: "Daha sonra geri dönmek / yeniden konuşmak",
      example: "Can I circle back on that question once I've thought it through?",
      example_tr: "Bu soruyu düşündükten sonra ona geri dönebilir miyim?",
    },
    {
      id: "ex.wcc13.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working in tech since 5 years and I do mistakes sometimes.",
      correct_sentence: "I've been working in tech for 5 years, and I make mistakes sometimes.",
      tr_explanation:
        "'Since 5 years' yanlış — süre için 'for 5 years'. 'I do mistakes' Türkçe kalıbı; doğrusu 'I make mistakes'. Süregelen aksiyon için 'I've been working'.",
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
    {
      id: "ex.wcc13.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Anyone you'd recommend I reach out to next?",
      tr_translation: "Sırada ulaşmamı önerdiğin biri var mı?",
      ipa: "/ˈɛnɪwʌn jud ˌrɛkəˈmɛnd aɪ riːtʃ aʊt tu nɛkst/",
    },
    {
      id: "ex.wcc13.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Thanks so much — door open for a follow-up if more questions come up?",
      voice_hint: "male_uk",
    },
    {
      id: "ex.wcc13.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "How can I be helpful to you in return?",
      target: "How can I be helpful to you in return?",
    },
    {
      id: "ex.wcc13.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "raise a flag",
      tr_translation: "Bayrak kaldırmak / dikkat çekmek",
      example: "I'll raise a flag if anything comes up that needs your input.",
      example_tr: "Senin girdine ihtiyaç duyacak bir şey olursa bayrak kaldırırım.",
    },
    {
      id: "ex.wcc13.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am very thankful since this morning when we made the chat.",
      correct_sentence: "I've been really grateful since this morning when we had the chat.",
      tr_explanation:
        "'Since this morning' = tarih, doğru ama o zaman 'I am' yerine 'I've been' lazım (süregelen his). 'Made the chat' Türkçe; doğrusu 'had the chat'. 'Very thankful' yerine 'really grateful' daha doğal.",
    },
  ],
};

// ============================================================
// Lesson 13.5 — LinkedIn Cold Message (Soguk Mesaj)
// ============================================================
export const workCoffeechatLesson_13_5: BundledLesson = {
  id: "work.coffeechat.13.5",
  skill_id: "work.coffeechat",
  index: 5,
  title: "LinkedIn Cold Message",
  description:
    "Tanimadigin senior'a LinkedIn'de coffee chat ricasi. Kisa + spesifik + opt-out yolu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcc13.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Would love to pick your brain",
      tr_translation: "Fikrini almak isterim (saygili networking kalibi)",
      example: "Would love to pick your brain about your switch from Google to a startup.",
      example_tr: "Google'dan startup'a gecisin hakkinda fikrini almak isterim.",
    },
    {
      id: "ex.wcc13.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yaziniza hayran kaldim — 20 dakika Zoom'da musait olur musunuz? Olmazsa hicbir sorun yok.",
      target: "Loved your post — would you be open to 20 min over Zoom? Totally fine if not.",
      accepted_variants: [
        "Really enjoyed your post — open to a quick 20-min Zoom? No worries if not.",
        "Your piece resonated — would 20 min on Zoom work? Happy to skip if you're slammed.",
        "Great post — could I grab 20 min over Zoom? Zero pressure either way.",
        "Loved your write-up — any chance of 20 min on Zoom? No stress if not a fit.",
      ],
      tr_hint:
        "'Totally fine if not' = 'opt-out yolu'. Turk gozune fazla soguk gelir ama ABD/UK'da SAYGI sinyali.",
    },
    {
      id: "ex.wcc13.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Would you be ___ to a 20-min Zoom?",
      answer: "open",
      distractors: ["ready", "willing", "available"],
      tr_hint:
        "'Be open to' = '...e acik misin'. 'Willing' fazla resmi, 'open' standart networking.",
    },
    {
      id: "ex.wcc13.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "No",
        "pressure",
        "if",
        "the",
        "timing",
        "isn't",
        "right",
      ],
      correct_sentence: "No pressure if the timing isn't right",
      tr_translation: "Zamanlama uygun degilse hicbir baski yok.",
    },
    {
      id: "ex.wcc13.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hi sir, can you help me? I need job urgently. Please respond.",
      correct_sentence:
        "Hi Sarah — loved your post on staff promo. Would you be open to 20 min over Zoom? No pressure if not.",
      tr_explanation:
        "'Can you help me' = transactional + acil = soguk + kacis sinyali. Dogru: spesifik referans + kisa sure + opt-out. Turk profesyoneller 'help me' kalibini cok kullaniyor — bu iste agir kalir.",
    },
    {
      id: "ex.wcc13.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "LinkedIn'de hic tanismadigin senior PM'e cold message yaziyorsun. Hedef: kisa + spesifik + opt-out.",
      npc_role: "Senior PM (cold contact)",
      setting: "LinkedIn DM (first message)",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey) (sarah|name)",
            "(loved|enjoyed|read|saw) (your (post|article|talk|piece) on)",
            "(would (love|be )?(open )?to|wondering if you'?d be open)",
            "(20 min|20 minutes|quick (zoom|call|chat))",
            "(no (pressure|worries|stress)|totally fine|happy to skip) (if (not|timing))",
            "(pick your brain|learn from)",
          ],
          hint_tr:
            "Sablon: 'Hi Sarah — loved your post on X. Would you be open to 20 min over Zoom? No pressure if not.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for reaching out — what specifically did you want to chat about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate)",
            "(specifically|in particular|main thing)",
            "(curious about|wanted to ask about|interested in)",
            "(your (path|journey|transition|switch) (to|from|into))",
            "(prep|prepare|send) (specific questions|a few questions) (ahead|in advance|beforehand)",
            "(open to|happy with) (any (format|structure)|whatever works)",
          ],
          hint_tr:
            "Spesifik konu + 'sorulari onceden gondereyim': 'Curious about your move from IC to PM. Can prep questions ahead.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good — send me some times next week.",
        },
      ],
    },
    {
      id: "ex.wcc13.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "LinkedIn cold message'da EN onemli yapi?",
          options: [
            "Uzun ve detayli",
            "Spesifik referans + sure + opt-out yolu",
            "Sadece 'help me'",
            "CV ekle",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik = karsi tarafa zaman ayirdigini gosterir. Sure = enerji esigi. Opt-out = saygi.",
        },
        {
          question: "'No pressure if not' niye Turk profesyonele tuhaf gelir?",
          options: [
            "Yanlis ingilizce",
            "Turk kulturunde 'opt-out' soguk gelir; ama ABD/UK'de SAYGI sinyali — kabul oranini artirir",
            "Cok agir",
            "Onemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Turkce: 'lutfen kabul edin'. Ingilizcede: 'baski yapmiyorum'. Ikincisi profesyonel norm.",
        },
        {
          question: "'Pick your brain' tehlikeli bir ifade mi?",
          options: [
            "Evet, kullanma",
            "HAYIR — networking jargonu, standart + saygili",
            "Cok agir",
            "Yanlis ingilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Direkt cevirisi tuhaf ama ABD/UK iste cok yaygin. 'Fikrini almak' = saygili.",
        },
      ],
    },
    {
      id: "ex.wcc13.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Would you be open to 20 min over Zoom? No pressure if not.",
      tr_translation: "20 dakika Zoom'da musait olur musun? Olmazsa baski yok.",
      ipa: "/wʊd ju biː ˈəʊpən tə ˈtwɛnti mɪn ˈəʊvə zuːm | nəʊ ˈprɛʃə ɪf nɒt/",
    },
  ],
};

// ============================================================
// Lesson 13.6 — Quick About Me (Coffee Chat'te Kendini Tanitma)
// ============================================================
export const workCoffeechatLesson_13_6: BundledLesson = {
  id: "work.coffeechat.13.6",
  skill_id: "work.coffeechat",
  index: 6,
  title: "Coffee Chat'te Kendini Tanitma",
  description:
    "Coffee chat acilisinda 30 saniyelik 'quick about me'. CV degil — relatable + spesifik + 'why this chat'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcc13.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Quick about me",
      tr_translation: "Kisaca kendimden (30 saniyelik tanitim kalibi)",
      example: "Quick about me: I'm a backend engineer working on payments infra at a fintech.",
      example_tr: "Kisaca: bir fintech'te odeme altyapisi uzerinde calisan backend muhendisiyim.",
    },
    {
      id: "ex.wcc13.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Kisaca kendimden: 5 yillik backend muhendisiyim, suanda odeme sistemleri uzerinde calisiyorum ve developer experience'a kaymak istiyorum.",
      target: "Quick about me: I'm a backend engineer with 5 years' experience, currently working on payments, and looking to move into developer experience.",
      accepted_variants: [
        "Background-wise: 5 years backend, now on payments, exploring a move to DX.",
        "Short version: backend engineer, 5 years in, mostly payments, hoping to shift toward DX.",
        "About me: 5-year backend eng working on payments — curious about transitioning to DX.",
        "Quickly — I'm 5 years into backend, on payments now, eyeing developer experience next.",
      ],
      tr_hint:
        "Sablon: 'rol + kac yil + simdiki konu + nereye gitmek istiyorum'. Son parca = 'why this chat'.",
    },
    {
      id: "ex.wcc13.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm a software engineer ___ on payments infra.",
      answer: "working",
      distractors: ["work", "worked", "to work"],
      tr_hint:
        "'A [role] working on [thing]' = sabit kalip. 'Working' = simdiki zaman + sade.",
    },
    {
      id: "ex.wcc13.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "looking",
        "to",
        "move",
        "into",
        "developer",
        "experience",
      ],
      correct_sentence: "I'm looking to move into developer experience",
      tr_translation: "Developer experience'a gecmek istiyorum.",
    },
    {
      id: "ex.wcc13.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am graduated from Bogazici University in 2019 and I am working as a software developer since then in a big company.",
      correct_sentence:
        "Quick about me: I graduated from Bogazici in 2019, and I've been a software engineer at a large fintech since then — currently on payments.",
      tr_explanation:
        "Turk hata 1: 'I am graduated' yanlis, dogrusu 'I graduated' (past). Hata 2: 'I am working since' yanlis, dogrusu 'I've been working/I've been a [role] since' (present perfect). Hata 3: CV gibi degil — 'Quick about me' kalibiyla acmali. 'Big company' = soguk, 'large fintech' = spesifik.",
    },
    {
      id: "ex.wcc13.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Coffee chat acildi. Karsi taraf 'tell me a bit about yourself' dedi. 30 saniyede toparla.",
      npc_role: "Senior Engineer at a US company",
      setting: "Coffee chat opening — Zoom",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, great to meet you! Tell me a bit about yourself.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|great|appreciate) (for the time|to be here|to meet you)",
            "(quick about me|short version|in a nutshell|background-wise)",
            "(i'?m a|i work as a) (\\w+ engineer|backend|frontend|software|product)",
            "(working on|focused on|currently on)",
            "(payments|infra|api|platform|web|growth)",
            "(looking to|hoping to|curious about) (move|shift|transition) (into|to|toward)",
          ],
          hint_tr:
            "Sablon: 'Quick about me — I'm a [rol] working on [konu], looking to move into [hedef].'",
        },
        {
          speaker: "npc",
          message:
            "Nice — and what made you want to chat with me specifically?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(your (background|path|journey|work on)|saw your (post|talk))",
            "(specifically|exactly) (the (kind of move|type of transition))",
            "(curious about|wanted to ask about|hoped to learn) (how you|what helped)",
            "(prep|prepared) (a few questions|some specific things)",
            "(open to|happy with) (any (direction|structure))",
          ],
          hint_tr:
            "'Why this chat': 'Your path from backend to DX is exactly the move I'm considering — prepped a few questions.'",
        },
      ],
    },
    {
      id: "ex.wcc13.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Quick about me' yapisinda 3 zorunlu parca?",
          options: [
            "Mezuniyet yili + sirket adi + maas",
            "Rol/uzmanlik + simdiki konu + nereye gitmek istiyorum",
            "CV tarihce + sertifikalar + okul",
            "Hobiler + yas + sehir",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi taraf 'why this chat' anlamali. Hedef = sohbet pusulasi. CV listesi = enerji israfi.",
        },
        {
          question: "Niye 'I'm working as a' yerine 'I'm a [role] working on'?",
          options: [
            "Anlamsiz fark",
            "'A [role]' kimlik verir, 'working on' sucu spesifiklestirir — daha sade + relatable",
            "Yanlis ingilizce",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm a backend engineer working on payments' = 4 kelimede kimlik+rol+spesifik konu. Profesyonel norm.",
        },
        {
          question: "Coffee chat acilisinda CV ozeti vermek niye kotu?",
          options: [
            "Karsi taraf zaten LinkedIn'i okudu — tekrar = enerji israfi + sohbet baslamiyor",
            "Sorun yok",
            "Daha iyi",
            "Cok kibar",
          ],
          correct_index: 0,
          tr_explanation:
            "30 saniye 'why this chat' a yatirim = sohbet derinlesir. CV = 'tell me about yourself' tuzagi.",
        },
      ],
    },
    {
      id: "ex.wcc13.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Quick about me: I'm a backend engineer working on payments.",
      tr_translation: "Kisaca: odeme sistemleri uzerinde calisan bir backend muhendisiyim.",
      ipa: "/kwɪk əˈbaʊt miː | aɪm ə ˈbæk.ɛnd ˌɛn.dʒɪˈnɪə ˈwɜː.kɪŋ ɒn ˈpeɪ.mənts/",
    },
  ],
};

// ============================================================
// Lesson 13.7 — Mentor Question (Kariyer Rehberligi)
// ============================================================
export const workCoffeechatLesson_13_7: BundledLesson = {
  id: "work.coffeechat.13.7",
  skill_id: "work.coffeechat",
  index: 7,
  title: "Mentor Sorusu: Kariyer Rehberligi",
  description:
    "Coffee chat'te kariyer tavsiyesi isteme. 'In my shoes' + 'How did you transition' kaliplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcc13.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "In my shoes",
      tr_translation: "Benim yerimde (empatik tavsiye sorma kalibi)",
      example: "What would you do in my shoes — stay at the startup or take the FAANG offer?",
      example_tr: "Benim yerimde olsan ne yapardin — startup'ta mi kalirdin yoksa FAANG teklifini mi alirdin?",
    },
    {
      id: "ex.wcc13.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Backend'den DX'e nasil gectin? Bu yola baslarken en zor karar neydi?",
      target: "How did you transition from backend to DX? What was the hardest call when you started down that path?",
      accepted_variants: [
        "Walk me through your backend-to-DX move — what was the toughest decision early on?",
        "How did you make the jump from backend into developer experience? Hardest call at the start?",
        "Curious about your switch from backend to DX — what was the biggest trade-off?",
        "How did you pivot from backend to DX, and what was the hardest part of that move?",
      ],
      tr_hint:
        "'How did you transition' = ABD/UK'de en standart kariyer sorusu. Spesifik + retrospektif = saygili.",
    },
    {
      id: "ex.wcc13.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What would you do ___ my shoes?",
      answer: "in",
      distractors: ["on", "at", "with"],
      tr_hint:
        "'In my shoes' = sabit kalip. 'On my shoes' yanlis. Empatik tavsiye istegi.",
    },
    {
      id: "ex.wcc13.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "How",
        "did",
        "you",
        "navigate",
        "that",
        "decision",
      ],
      correct_sentence: "How did you navigate that decision",
      tr_translation: "O karari nasil yonettin?",
    },
    {
      id: "ex.wcc13.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Can you help me to find a job? What should I do? Please give advice.",
      correct_sentence:
        "How did you make the jump from backend to DX — and what would you do in my shoes?",
      tr_explanation:
        "Hata 1: 'Help me find a job' = mentor degil, recruiter rolu yukleyen transaksiyonel istek = Turk profesyonellerin tipik tuzagi. Hata 2: 'What should I do' = direkt direktif istegi = karsi tarafa yuk. Dogru: SPESIFIK retrospektif soru ('how did you...') + empatik tavsiye ('in my shoes') = iliski temelli, mentor seven kalip.",
    },
    {
      id: "ex.wcc13.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mentor adayina kariyer sorusu soruyorsun. Hedef: spesifik retrospektif + empatik tavsiye istegi.",
      npc_role: "Mentor — Staff Engineer",
      setting: "Coffee chat mid-conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(curious about|wanted to ask|hoped to learn) (how you|about your)",
            "(transition|switch|jump|pivot|move) (from \\w+ to \\w+|into|toward)",
            "(what was|what were) (the (hardest|toughest|biggest)) (call|decision|trade-?off|part)",
            "(how did you (navigate|approach|handle|make)) (that|the call|the decision)",
            "(early on|at the (start|beginning)|in the (first|early) days)",
          ],
          hint_tr:
            "Spesifik soru: 'How did you make the jump from backend to DX — what was the hardest call early on?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly the hardest part was leaving a team that was performing really well.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that resonates|makes sense|hits close|hadn'?t thought)",
            "(actually|right now|currently) (in a similar|facing something|in that exact)",
            "(what would you do|how would you (think|approach)) (in my shoes|if you were me)",
            "(stay (at|on)|take the|move to)",
            "(any (signal|sign|framework|lens))",
            "(how did you (decide|weigh) (when|that it was time))",
          ],
          hint_tr:
            "Konuyu kendine bag: 'That resonates — I'm facing a similar call. What would you do in my shoes?'",
        },
        {
          speaker: "npc",
          message:
            "Hmm — I'd ask: which option teaches you the thing you can't learn from a book?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) (a great|such a good|helpful) (lens|frame|question|filter)",
            "(hadn'?t thought of it that way|never framed it like that)",
            "(let me sit with that|gonna chew on that|will think on that)",
            "(thanks for|appreciate) (the lens|the frame|that perspective)",
          ],
          hint_tr:
            "Cevabi sahiplen: 'That's such a helpful lens — gonna chew on that.'",
        },
      ],
    },
    {
      id: "ex.wcc13.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Can you help me find a job?' niye kotu bir mentor sorusu?",
          options: [
            "Sorun yok",
            "Mentor'a recruiter rolu yukler = transaksiyonel = iliski olmuyor. Doğru: 'how did you transition' + 'in my shoes' = iliski temelli",
            "Yanlis ingilizce",
            "Cok kibar",
          ],
          correct_index: 1,
          tr_explanation:
            "Turk profesyoneller cogunlukla bu hataya dusuyor. Mentor = tecrubeli refakatci. Recruiter = transaksiyon.",
        },
        {
          question: "'In my shoes' niye 'what should I do' dan iyi?",
          options: [
            "Anlamsiz fark",
            "'In my shoes' = mentor'un kendi tecrubesini paylasmasini ister; 'what should I do' = direktif yuku — ikincisi rahatsiz eder",
            "Cok agir",
            "Yanlis ingilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Mentor 'sen yerime gec' istemiyor. Kendi cercevesini paylasmak istiyor. 'In my shoes' bu kapiyi acar.",
        },
        {
          question: "Mentor cevabi alinca yapilacak EN GUCLU adim?",
          options: [
            "'Noted' demek + gecmek",
            "Cevabi sahiplen — 'that's a helpful lens', 'gonna chew on that' = mentor'a dinlendigini gosterir",
            "Cabuk konu degistir",
            "Tartis",
          ],
          correct_index: 1,
          tr_explanation:
            "Mentor'lar 'yatirimin sonucunu' gormek ister. Cevabi sahiplenmek = ileride tekrar sorabilme hakki kazanir.",
        },
      ],
    },
    {
      id: "ex.wcc13.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What would you do in my shoes?",
      tr_translation: "Benim yerimde olsan ne yapardin?",
      ipa: "/wɒt wʊd ju duː ɪn maɪ ʃuːz/",
    },
  ],
};

// ============================================================
// Lesson 13.8 — Follow-up + Thanks (Kapanis + Tesekkur)
// ============================================================
export const workCoffeechatLesson_13_8: BundledLesson = {
  id: "work.coffeechat.13.8",
  skill_id: "work.coffeechat",
  index: 8,
  title: "Coffee Chat Sonu: Follow-up + Tesekkur",
  description:
    "Coffee chat son 2 dakikasi: samimi tesekkur + tekrar iletisim kapisi + spesifik takdir. Ezbere degil — relatable.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcc13.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Genuinely helpful",
      tr_translation: "Gercekten faydali (samimi takdir kalibi)",
      example: "This was genuinely helpful — especially the part about saying no to scope creep.",
      example_tr: "Bu gercekten faydaliydi — ozellikle 'scope creep'e hayir deme kismi.",
    },
    {
      id: "ex.wcc13.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ileride sorularim olursa tekrar yazmamda sakinca var mi? 'In my shoes' kismi cok faydaliydi.",
      target: "Mind if I follow up if I have more questions? The 'in my shoes' part was really helpful.",
      accepted_variants: [
        "Would you mind if I circled back with more questions later? That 'in my shoes' framing stuck with me.",
        "Okay if I reach out again down the line? The part about 'in my shoes' was super useful.",
        "Door open for follow-ups? The 'in my shoes' question really landed.",
        "Cool if I follow up if more comes up? Your 'in my shoes' point was the takeaway.",
      ],
      tr_hint:
        "Spesifik takdir = 'ezbere tesekkur degilim, dinledim' sinyali. 'Mind if' = nazik izin.",
    },
    {
      id: "ex.wcc13.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Mind if I ___ up if more questions come up?",
      answer: "follow",
      distractors: ["call", "write", "reach"],
      tr_hint:
        "'Follow up' = takip et / tekrar dön. Kapanis kalibinin standart parcasi.",
    },
    {
      id: "ex.wcc13.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "really",
        "appreciate",
        "you",
        "making",
        "the",
        "time",
      ],
      correct_sentence: "I really appreciate you making the time",
      tr_translation: "Vakit ayirdigin icin gercekten minnettarim.",
    },
    {
      id: "ex.wcc13.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Thank you very much sir. I am very much grateful for this conversation. May god bless you.",
      correct_sentence:
        "This was genuinely helpful — especially the 'in my shoes' framing. Mind if I follow up if more questions come up?",
      tr_explanation:
        "Hata 1: 'Sir' + 'may god bless you' = asiri resmi + Turk/Hint Ingilizcesi kokenli = ABD/UK'de tuhaf kalir. Hata 2: 'Very much grateful' = abartili + sicaktan uzak. Dogru: SPESIFIK takdir ('the in my shoes part') + kapi acik kalibi. Spesifiklik = dinledigini kanitlar.",
    },
    {
      id: "ex.wcc13.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Coffee chat son 2 dakikasi. Spesifik tesekkur + kapi acik + ileride tekrar iletisim izni iste.",
      npc_role: "Senior Engineer",
      setting: "End of coffee chat — final 2 minutes",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this was|honestly was|really was) (genuinely|super|really) (helpful|useful|valuable)",
            "(especially|particularly) (the (part|bit|framing|question|point) (about|on|where))",
            "(in my shoes|the lens|the framing|saying no|scope creep|that signal)",
            "(stuck with me|landed|will sit with that|chew on that|gonna think on)",
          ],
          hint_tr:
            "Spesifik takdir: 'Genuinely helpful — especially the in-my-shoes framing. That'll stick with me.'",
        },
        {
          speaker: "npc",
          message:
            "Glad it landed — happy to help anytime.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mind if|would you mind if|cool if|okay if)",
            "(i (follow up|circle back|reach out|ping you|loop back))",
            "(more questions come up|something comes up|i hit a wall|i'm at a fork)",
            "(also|and) (how can i|happy to|let me know if i can) (be helpful|return the favor)",
          ],
          hint_tr:
            "Kapi + reciprocity: 'Mind if I follow up if more comes up? And let me know if I can return the favor.'",
        },
        {
          speaker: "npc",
          message:
            "Of course — door's open. Send me a Slack message any time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|sounds good|appreciate it)",
            "(thanks again|once more|really)",
            "(have a (good|great)|take care|talk soon|catch you later)",
          ],
          hint_tr:
            "Cikis: 'Will do — thanks again. Take care.'",
        },
      ],
    },
    {
      id: "ex.wcc13.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Coffee chat sonunda 'thank you very much sir' niye kotu?",
          options: [
            "Sorun yok",
            "Asiri resmi + ezbere = ABD/UK'de 'sir' samimi sohbette tuhaf kalir. Doğru: spesifik takdir + relatable kapanis",
            "Cok kisa",
            "Yanlis ingilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Turk/Hint English'de 'sir' yaygin. ABD/UK iste 'thanks so much' yeterli, daha samimi.",
        },
        {
          question: "'This was genuinely helpful — especially X' yapisi niye guclu?",
          options: [
            "Anlamsiz",
            "SPESIFIK = dinledigini kanitlar; karsi taraf hatirlanir hisseder = iliski derinlesir",
            "Cok agir",
            "Onemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Thanks, very helpful' = kibar ama gecici. 'Especially the X part' = ezbere degil, dinleyici hatirlanir.",
        },
        {
          question: "Niye 'mind if I follow up' + 'how can I return the favor' birlikte?",
          options: [
            "Gereksiz tekrar",
            "Bir taraf: kapi acik (alma yetkisi). Diger taraf: verme niyeti — iki tarafli iliski sinyali",
            "Cok uzun",
            "Yanlis ingilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Sadece almak isteyen = enerji emici. 'Return the favor' eklemek = uzun donem iliski sermaye.",
        },
      ],
    },
    {
      id: "ex.wcc13.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind if I follow up if more questions come up?",
      tr_translation: "Daha fazla sorum olursa tekrar yazmamda sakinca var mi?",
      ipa: "/maɪnd ɪf aɪ ˈfɒləʊ ʌp ɪf mɔː ˈkwɛstʃənz kʌm ʌp/",
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
  workCoffeechatLesson_13_5,
  workCoffeechatLesson_13_6,
  workCoffeechatLesson_13_7,
  workCoffeechatLesson_13_8,
];
