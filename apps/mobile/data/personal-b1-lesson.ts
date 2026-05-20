// Personal B1 — Adult relationship & dating contexts for Turkish young
// professionals (22-35) in international relationships, dating apps, or with
// foreign partners. Mature, emotionally aware, self-respecting tone — not
// the cartoony "flirt-opener" register.
//
// 10 lessons, CEFR B1. Every lesson has: 1-2 vocab_tile, 1-2 translate,
// 1 fill_blank, 1 spot_mistake, 1 roleplay_chat (8-12 turns), optional
// pronounce_phrase.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 1 — First Conversation on a Dating App
// ============================================================
export const personalB1Lesson_1: BundledLesson = {
  id: "personal.b1.dating-app.1",
  skill_id: "personal.b1.dating-app",
  index: 1,
  title: "Tanışma Mesajları — Ortak Nokta Bulma",
  description:
    "Kuru 'hey'i geç. Bio'ya referans ver, gerçek bir soru sor, ortak ilgi alanı bul. İlk üç mesaj her şeyi belirler.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What got you into that",
      tr_translation: "O alana nasıl yöneldin / nasıl başladın",
      example: "Saw you teach yoga — what got you into that?",
      example_tr: "Yoga eğittiğini gördüm — bu alana nasıl yöneldin?",
    },
    {
      id: "ex.pb1.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "We actually have that in common",
      tr_translation: "Aslında bu konuda ortak noktamız var",
      example: "We actually have that in common — I lived in Lisbon for a year.",
      example_tr: "Aslında bu konuda ortak noktamız var — bir yıl Lizbon'da yaşadım.",
    },
    {
      id: "ex.pb1.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Profilinde gitar fotoğrafı gördüm — uzun zamandır mı çalıyorsun?",
      target: "Noticed the guitar in your photos — have you been playing long?",
      accepted_variants: [
        "Saw the guitar in your pics — have you been playing for a while?",
        "I noticed the guitar in your profile. Have you played long?",
        "Your guitar caught my eye — how long have you been playing?",
        "Guitar in the photos — been at it long?",
        "Spotted the guitar — have you been playing for a while?",
      ],
      tr_hint:
        "Referans + soru. 'Noticed / Saw' + spesifik detay + present perfect (have you been -ing).",
    },
    {
      id: "ex.pb1.1.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Beni yargılamadan söyle, taze patatesli pasta sevmeyenlerle aramız iyi değil.",
      target: "Honest answer — how do you feel about fresh pasta?",
      accepted_variants: [
        "No judgment — what's your honest take on fresh pasta?",
        "Genuinely curious — how do you feel about fresh pasta?",
        "Be honest — fresh pasta, yes or no?",
        "Real talk: are you a fresh pasta person?",
      ],
      tr_hint:
        "Hafif espri + samimi soru. 'Honest answer / No judgment' = oyuncu ama saygılı.",
    },
    {
      id: "ex.pb1.1.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "What's been ___ your mind lately — anything good?",
      answer: "on",
      distractors: ["in", "at", "by"],
      tr_hint:
        "'On your mind' = aklında. 'In your mind' yanlış edat — sabit kalıp.",
    },
    {
      id: "ex.pb1.1.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hello. You are very beautiful. Tell me about you.",
      correct_sentence:
        "Hey — your bio about Lisbon caught my eye. Have you been back recently?",
      tr_explanation:
        "Direkt 'beautiful' + komut ('tell me about you') = düz hat, kuru. Yetişkin tanışma: spesifik referans + açık uçlu soru. Görünüşten önce ilgi alanı.",
    },
    {
      id: "ex.pb1.1.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match'tin biriyle. Bio'sunda 'film fotoğrafçılığı + uzun yürüyüş + İtalyan kahvesi' yazıyor. Açılış mesajı atıyorsun.",
      npc_role: "Match",
      setting: "Dating app — first exchange",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(noticed|saw|spotted).{0,30}(photo|pic|bio|profile)",
            "(your|the).{0,30}(film|photography|hike|hiking|coffee)",
            "(what got you into|how did you start|how long have you been)",
            "(have you been|how long).{0,20}(shooting|photographing|hiking)",
          ],
          hint_tr:
            "Spesifik referans + açık soru. Örn: 'Noticed your film shots — what got you into that?'",
        },
        {
          speaker: "npc",
          message:
            "Ha, thanks for actually reading the bio. Got into film maybe four years ago — needed something slower than my day job. You shoot anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been|i started|i picked it up)",
            "(no but|not really but|i don'?t but)",
            "(yeah|yes).{0,15}(i shoot|i do|sometimes)",
            "(makes sense|i get that|i needed)",
            "(slower than)",
          ],
          hint_tr:
            "Onun cevabına gerçek bir karşılık. Kendi durumunu söyle — kısa, dürüst.",
        },
        {
          speaker: "npc",
          message:
            "Nice. Okay, harder question — best coffee in your city, go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s a place|i swear by|i keep going back to)",
            "(honestly|genuinely|real talk)",
            "(you'?d hate me|don'?t judge me|controversial answer)",
            "(little spot|tiny place|hole in the wall)",
            "(near|around|in) (kadikoy|cihangir|moda|karakoy|bebek)",
          ],
          hint_tr:
            "Spesifik bir yer + bir cümle gerekçe. 'There's a place in X — they roast their own.'",
        },
        {
          speaker: "npc",
          message:
            "Bookmarking that. We actually have that in common — I'm picky about roasters. So what's the day job that needed slowing down?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i work in|i'?m in|i do)",
            "(software|product|design|finance|marketing|consulting|law|medicine)",
            "(it'?s a lot of|too many|always on)",
            "(makes sense why|why i need|why i picked up)",
          ],
          hint_tr:
            "Mesleğini kısa söyle + niye yavaşlamak gerektiğini bağla. 'I work in X — it's nonstop, so I needed something slow.'",
        },
        {
          speaker: "npc",
          message:
            "Okay this is going somewhere. Coffee this week if you're around?",
        },
      ],
    },
    {
      id: "ex.pb1.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd love to hear more about that.",
      ipa: "aɪd lʌv tə hɪər mɔːr əˈbaʊt ðæt",
      tr_hint:
        "Yetişkin ilgi gösterme. 'I'd love' = 'ayd-lov' bağlı. 'Hear more about that' akıcı. İçten, baskısız.",
    },
    {
      id: "ex.pb1.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Honestly, I'd rather skip the small talk and ask what actually got you on this app.",
      voice_hint: "female_us",
      tr_hint:
        "Dating uygulamasında dürüst tonu. 'Skip the small talk' = küçük sohbeti atla. Direkt ama nazik.",
    },
    {
      id: "ex.pb1.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "I'm not really into long message threads — would you want to grab a coffee this week?",
      transcription_target:
        "I'm not really into long message threads — would you want to grab a coffee this week?",
      tr_hint:
        "Tanışma sınır kalıbı. 'Not really into' = pek hoşlanmıyorum. 'Grab a coffee' = bir kahve içelim.",
    },
    {
      id: "ex.pb1.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "boundaries",
      tr_translation: "Sınırlar (kişisel)",
      example:
        "I have some boundaries around how I share personal stuff early on — hope that's okay.",
      example_tr:
        "Kişisel şeyleri erken paylaşma konusunda bazı sınırlarım var — umarım sorun değildir.",
    },
    {
      id: "ex.pb1.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "You are very beautiful, send me your number please, we can speak phone.",
      correct_sentence:
        "I've enjoyed talking — would you be up for moving this off the app and meeting for a coffee?",
      tr_explanation:
        "'Send me your number' baskı; 'we can speak phone' Türkçe çeviri (doğru: 'talk on the phone'). 'Beautiful' fiziksel iltifat çok erken. Yetişkin yaklaşım: sohbete değer ver + ortak adım öner ('moving this off the app').",
    },
  ],
};

// ============================================================
// Lesson 2 — First Date: Getting to Know Without Oversharing
// ============================================================
export const personalB1Lesson_2: BundledLesson = {
  id: "personal.b1.first-date.1",
  skill_id: "personal.b1.first-date",
  index: 2,
  title: "İlk Randevu — Tanışma, Sınır",
  description:
    "Karşıdakini gerçekten tanı. Hayatını sor, kendinden paylaş — ama her şeyi değil. Open question + boundary balance.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What does a normal week look like for you",
      tr_translation: "Senin normal bir haftan nasıl geçer",
      example: "So what does a normal week look like for you?",
      example_tr: "Peki senin normal bir haftan nasıl geçer?",
    },
    {
      id: "ex.pb1.2.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd rather save that for another time",
      tr_translation: "Onu başka bir zamana saklamayı tercih ederim",
      example: "Family stuff — I'd rather save that for another time, if that's okay.",
      example_tr: "Aile meselesi — uygunsa onu başka bir zamana saklamayı tercih ederim.",
    },
    {
      id: "ex.pb1.2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kendini en mutlu nerede hissediyorsun — gerçekten?",
      target: "Where do you feel most like yourself — honestly?",
      accepted_variants: [
        "Where are you happiest, honestly?",
        "Where do you feel most at home — honestly?",
        "What place makes you feel most yourself?",
        "Where do you feel most you?",
      ],
      tr_hint:
        "Yüzeyel değil — 'feel most like yourself' = 'kendini en kendin gibi hissetmek'. Yetişkin random soru.",
    },
    {
      id: "ex.pb1.2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "That's a bit much for a ___ date — happy to come back to it later.",
      answer: "first",
      distractors: ["short", "quick", "early"],
      tr_hint:
        "İlk randevuda fazla derinleşmeyi reddetmek için kibar geri çekilme.",
    },
    {
      id: "ex.pb1.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "My ex was crazy and my mother is depressed and my job is killing me.",
      correct_sentence:
        "Work's been a lot lately — but tell me about you, what's been good in your life?",
      tr_explanation:
        "İlk randevuda 'ex / aile sorunu / iş yakıyor' = trauma dump. Yetişkin pivot: kısa otantik kabul + topu karşıya at + olumlu çerçeve.",
    },
    {
      id: "ex.pb1.2.6",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunu ilk randevuda paylaşacak kadar rahat hissetmiyorum henüz.",
      target: "I don't feel ready to get into that on a first date.",
      accepted_variants: [
        "That's not something I want to dive into on a first date.",
        "I'd rather not unpack that tonight.",
        "Maybe save that one for date two?",
        "Not quite first-date territory for me.",
      ],
      tr_hint:
        "Saygılı sınır — agresif değil, açık. 'Get into / dive into / unpack' = derinleşmek.",
    },
    {
      id: "ex.pb1.2.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İlk randevudasınız, bir şarap barında. Karşıdaki kişi seni tanımaya çalışıyor, sen de onu.",
      npc_role: "Date",
      setting: "First date, wine bar",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay so — fair question to open with: what does a normal week look like for you these days?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(weekdays are|during the week|monday to friday)",
            "(weekends i|on weekends|saturdays)",
            "(pretty much|honestly|mostly)",
            "(work|run|hit the gym|see friends|cook|read)",
            "(what about you|how about you|you\\?)",
          ],
          hint_tr:
            "Hafta içi / hafta sonu özet ver, sonunda topu karşıya at. 'What about you?'",
        },
        {
          speaker: "npc",
          message:
            "Mine's similar — too much work, not enough cooking. What's something you're actually into right now, not just the polite-version answer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|genuinely|real answer)",
            "(i'?ve been getting into|i picked up|lately i'?ve been)",
            "(reading|running|learning|writing|cooking|making)",
            "(it'?s the kind of thing|something about it|the reason)",
          ],
          hint_tr:
            "Yüzeyel cevaptan kaç. Spesifik bir şey + niye seviyorsun.",
        },
        {
          speaker: "npc",
          message:
            "I love that. Okay slightly heavier — what's something hard you've worked through in the last year or two?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a bit much for|that'?s a lot to unpack|happy to come back to)",
            "(i'?d rather save that|not quite first-date|maybe second date)",
            "(i don'?t feel ready|let'?s come back to)",
            "(short version is|the simple version)",
            "(what about you|how about you)",
          ],
          hint_tr:
            "Ya kibarca ertele ('save that for next time') ya da çok kısa light versiyon ver + topu çevir.",
        },
        {
          speaker: "npc",
          message:
            "Totally fair, I respect that. Okay easier — where do you feel most like yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|probably|i'?d say)",
            "(at home|in the kitchen|on a long walk|by the water|on a run)",
            "(when i'?m|when i)",
            "(something about|there'?s something)",
          ],
          hint_tr:
            "Bir yer / bir an + kısa neden. 'Probably on a long walk — no phone, no plan.'",
        },
        {
          speaker: "npc",
          message:
            "Okay that's a great answer. This is going well — should we order another?",
        },
      ],
    },
    {
      id: "ex.pb1.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I don't really want to get into that on a first date.",
      ipa: "aɪ doʊnt ˈrɪli wɒnt tə gɛt ˈɪntə ðæt ɒn ə fɜːrst deɪt",
      tr_hint:
        "Sınır koyma kalıbı — kibar ama net. 'Get into' = girmek (konu olarak). 'On a first date' net.",
    },
    {
      id: "ex.pb1.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "I'd rather hear about you for a bit before I go deep on my ex stuff.",
      voice_hint: "male_us",
      tr_hint:
        "İlk randevu yumuşatma. 'I'd rather' = tercih ederim. 'Go deep on' = derinine inmek. Rahat, sınırlı paylaşım.",
    },
    {
      id: "ex.pb1.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Honestly, I came out of a long relationship last year and I'm still figuring out what I want.",
      transcription_target:
        "Honestly, I came out of a long relationship last year and I'm still figuring out what I want.",
      tr_hint:
        "İlk randevuda dürüst paylaşım. 'Came out of' = (ilişki) bitirdim. 'Figuring out' = anlamaya çalışıyorum.",
    },
    {
      id: "ex.pb1.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "boundaries",
      tr_translation: "Sınırlar",
      example:
        "I have some boundaries around how fast things move — I hope that's okay to say up front.",
      example_tr:
        "Şeylerin ne kadar hızlı ilerlediği konusunda bazı sınırlarım var — baştan söylemekte sakınca yoktur umarım.",
    },
    {
      id: "ex.pb1.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "My last girlfriend was crazy and she made my life very bad, but you look more normal.",
      correct_sentence:
        "I came out of a difficult relationship last year, but I'd rather save that for when we know each other better.",
      tr_explanation:
        "İlk randevuda eski partnere 'crazy' demek = kırmızı bayrak. 'You look more normal' karşılaştırma rahatsız. Sağlıklı yaklaşım: sorumluluk al ('difficult relationship'), sınır koy ('save that for when we know each other better').",
    },
  ],
};

// ============================================================
// Lesson 3 — Cultural Sensitivity (Explaining Turkey, Asking About Theirs)
// ============================================================
export const personalB1Lesson_3: BundledLesson = {
  id: "personal.b1.culture.1",
  skill_id: "personal.b1.culture",
  index: 3,
  title: "Kültürel Konuşma — Stereotipsiz",
  description:
    "Türkiye'yi tek bir klişeye indirgemeden anlat. Onun kültürünü gerçekten merak et — turist sorusu değil.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "It's more nuanced than that",
      tr_translation: "Aslında bundan daha karmaşık / nüanslı",
      example: "Turkey isn't one thing — it's more nuanced than that.",
      example_tr: "Türkiye tek bir şey değil — aslında bundan daha karmaşık.",
    },
    {
      id: "ex.pb1.3.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How does that work where you're from",
      tr_translation: "Senin ülkende bu nasıl yürüyor",
      example: "Family lunches are a big deal for us — how does that work where you're from?",
      example_tr: "Aile yemekleri bizim için önemli — peki senin ülkende bu nasıl yürüyor?",
    },
    {
      id: "ex.pb1.3.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Türkler hakkındaki o klişe doğru değil, en azından benim çevremde değil.",
      target: "That stereotype isn't really accurate — not in my circle, at least.",
      accepted_variants: [
        "That cliché doesn't really hold — at least not where I grew up.",
        "That's a stereotype, honestly — it's not how people I know actually live.",
        "Not really true, at least not for the people around me.",
        "That's not the Turkey I know, to be honest.",
      ],
      tr_hint:
        "Reddet ama agresif değil. 'Not really accurate / not in my circle' = ölçülü düzeltme.",
    },
    {
      id: "ex.pb1.3.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Senin kültüründe insanlar zor bir konuyu nasıl açar genelde?",
      target: "How do people in your culture usually bring up something difficult?",
      accepted_variants: [
        "How do people where you're from usually raise difficult topics?",
        "When something's hard to talk about, how does that usually go in your culture?",
        "How does your culture handle hard conversations, generally?",
        "What's the norm where you're from for bringing up tough stuff?",
      ],
      tr_hint:
        "'Bring up / raise' = bir konuyu açmak. Saygılı + spesifik soru.",
    },
    {
      id: "ex.pb1.3.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I don't want to ___ in generalisations, but tea is genuinely a big part of how we hang out.",
      answer: "deal",
      distractors: ["go", "make", "fall"],
      tr_hint:
        "'Deal in generalisations' = genellemeler yapmak. Sabit kalıp.",
    },
    {
      id: "ex.pb1.3.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "All Turkish people love to drink tea and have big family.",
      correct_sentence:
        "Tea's a big part of daily life for a lot of us, though it really depends on the household.",
      tr_explanation:
        "'All Turkish people' = stereotipi pekiştirir. Yetişkin alternatif: 'A lot of us / many of us' + 'depends on' = nüanslı.",
    },
    {
      id: "ex.pb1.3.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Karşıdaki kişi Türkiye hakkında stereotipli sorular soruyor. Saygıyla düzelt + onun kültürünü merak et.",
      npc_role: "Partner / Date",
      setting: "Conversation about culture",
      turns: [
        {
          speaker: "npc",
          message:
            "So is it really true that everyone in Turkey drinks tea all day and lives with their parents until they're thirty?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s more nuanced|it'?s a bit more complicated|that'?s a stereotype)",
            "(tea is|tea'?s).{0,20}(big part|important|common)",
            "(but it really depends|though it depends|but that varies)",
            "(in big cities|in istanbul|in my generation|in my circle)",
            "(a lot of us|many of us|most people i know)",
          ],
          hint_tr:
            "Bir kısmını kabul et, ama nüansla. 'Tea — yes, that's real. Living with parents — depends a lot on the city.'",
        },
        {
          speaker: "npc",
          message:
            "Got it — sorry, didn't mean to lump everyone together. What's actually changed for your generation?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no need to apologise|all good|honest question)",
            "(my generation|people my age|in my twenties)",
            "(moved out|live alone|share a flat|share with friends)",
            "(work differently|career first|delay marriage)",
            "(very different from|nothing like|much more)",
          ],
          hint_tr:
            "Kuşağının nasıl değiştiğini somut anlat. 'Most of my friends moved out at 22, live with flatmates...'",
        },
        {
          speaker: "npc",
          message:
            "Makes sense. What's something about my country you've genuinely wondered about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been curious about|i'?ve wondered|i'?ve always wanted to know)",
            "(how do people|how does it work|what'?s the norm)",
            "(family|holidays|christmas|relationships|work-life|small talk)",
            "(how does that work where you'?re from|in your culture)",
          ],
          hint_tr:
            "Spesifik bir konu sor — turist klişesi değil. 'I've wondered how X works where you're from.'",
        },
        {
          speaker: "npc",
          message:
            "Honestly? It varies a lot region to region. The Christmas thing for example — totally different in the north vs the south. We should compare notes sometime.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d love that|sounds good|i'?m in)",
            "(let'?s do that|over dinner|next time)",
            "(i'?ll bring|teach me|show me)",
            "(makes sense|i didn'?t know|wasn'?t expecting)",
          ],
          hint_tr:
            "Karşılık ver — somut bir plan veya küçük bir teklif.",
        },
      ],
    },
    {
      id: "ex.pb1.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Help me understand what that looks like in your family.",
      ipa: "hɛlp mi ˌʌndərˈstænd wʌt ðæt lʊks laɪk ɪn jʊər ˈfæmɪli",
      tr_hint:
        "Kültürel merak kalıbı. 'Help me understand' = nazikçe açıklama isteme. Yargısız, açık ton.",
    },
    {
      id: "ex.pb1.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "In Turkey, families stay close into adulthood — I see my parents every week and it doesn't feel like a burden.",
      voice_hint: "female_uk",
      tr_hint:
        "Türkiye'yi anlatma. 'Stay close into adulthood' = yetişkinlikte yakın kal. 'Doesn't feel like a burden' = yük gibi gelmiyor.",
    },
    {
      id: "ex.pb1.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "I think we just grew up with different ideas about what closeness with family means.",
      transcription_target:
        "I think we just grew up with different ideas about what closeness with family means.",
      tr_hint:
        "Kültürel fark cümlesi. 'Grew up with different ideas' = farklı fikirlerle büyüdük. 'Closeness' = yakınlık.",
    },
    {
      id: "ex.pb1.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "conflict pattern",
      tr_translation: "Tartışma örüntüsü",
      example:
        "I think we have a conflict pattern around holidays — same fight, different year.",
      example_tr:
        "Bence tatiller etrafında bir tartışma örüntümüz var — aynı kavga, farklı yıl.",
    },
    {
      id: "ex.pb1.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Your culture is so cold, in Turkey we love our family more than westerners.",
      correct_sentence:
        "I think our cultures just frame family closeness differently — neither one cares less, we just show it in different ways.",
      tr_explanation:
        "'Your culture is cold' + 'we love more than westerners' = yargılayıcı, üstünlük kurma. Sağlıklı kültürel diyalog: 'frame X differently' (eşit), 'neither cares less' (hiyerarşi reddi). Karşı tarafı korumak ilişkiyi korur.",
    },
  ],
};

// ============================================================
// Lesson 4 — Difficult Conversation: "We Need to Talk"
// ============================================================
export const personalB1Lesson_4: BundledLesson = {
  id: "personal.b1.we-need-to-talk.1",
  skill_id: "personal.b1.we-need-to-talk",
  index: 4,
  title: "Zor Konuşma — Bir Endişeyi Açmak",
  description:
    "'We need to talk' demeden bir endişeyi gündeme getir. I-statement, somut örnek, ne istediğini söyle.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "There's something on my mind",
      tr_translation: "Aklımda bir şey var (sakin giriş)",
      example: "Hey — there's something on my mind, do you have a minute?",
      example_tr: "Bak — aklımda bir şey var, bir dakikan var mı?",
    },
    {
      id: "ex.pb1.4.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I feel X when Y happens",
      tr_translation: "Y olduğunda kendimi X hissediyorum (I-statement)",
      example:
        "I feel disconnected when you're on your phone the whole dinner.",
      example_tr:
        "Yemek boyunca telefondaysan kendimi kopuk hissediyorum.",
    },
    {
      id: "ex.pb1.4.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Seni suçlamıyorum, sadece nasıl hissettiğimi anlatmak istiyorum.",
      target: "I'm not blaming you — I just want to tell you how I've been feeling.",
      accepted_variants: [
        "This isn't an accusation — I just want to share how I feel.",
        "I'm not trying to attack you, I just want you to know what I'm feeling.",
        "I don't want this to feel like blame — I just need to be honest with you.",
        "Not blaming, just being honest about where I'm at.",
      ],
      tr_hint:
        "Yetişkin giriş: suçlama değil + niyet açıklama. 'Not blaming, just sharing.'",
    },
    {
      id: "ex.pb1.4.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Benim için önemli olan şey, beni dinlediğini hissetmek.",
      target: "What matters to me is feeling like you actually hear me.",
      accepted_variants: [
        "What I need is to feel heard.",
        "The thing that matters to me is feeling listened to.",
        "What's important to me is feeling like you're really with me.",
        "I just need to feel heard, honestly.",
      ],
      tr_hint:
        "İhtiyacını net söyle. 'What matters / what I need is...' = yetişkin talep.",
    },
    {
      id: "ex.pb1.4.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can we ___ a moment to talk — nothing urgent, just something I want to share?",
      answer: "find",
      distractors: ["make", "have", "take"],
      tr_hint:
        "'Find a moment' = uygun bir an bulalım. Düşük baskı giriş.",
    },
    {
      id: "ex.pb1.4.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You always ignore me. You never listen.",
      correct_sentence:
        "Last night when you stayed on your phone through dinner, I felt invisible — that's been weighing on me.",
      tr_explanation:
        "'Always / never' = savunmaya iter. Yetişkin formül: spesifik an + 'I felt X' + niye konuşuyorsun. Saldırı değil, paylaşım.",
    },
    {
      id: "ex.pb1.4.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "There's something on my mind I want to share with you.",
      tr_hint:
        "Sakin, yavaş giriş. Vurgu: 'mind' ve 'share'. Suçlama değil — davet.",
    },
    {
      id: "ex.pb1.4.8",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Partner'inle son haftalarda yakınlık azaldı — telefon, iş stresi. Sakin bir akşam, konuyu açıyorsun.",
      npc_role: "Partner",
      setting: "Difficult conversation — evening at home",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s something on my mind|something i'?ve been thinking about)",
            "(can we|could we) (find|take|have) a (moment|minute)",
            "(do you have a minute|got a sec)",
            "(nothing urgent|nothing bad|just want to share)",
          ],
          hint_tr:
            "Düşük baskı giriş. 'There's something on my mind — got a minute?'",
        },
        {
          speaker: "npc",
          message: "Yeah, of course. Everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s nothing big|nothing huge|small thing)",
            "(i'?ve been feeling|lately i'?ve felt)",
            "(a bit|kind of|sort of) (distant|disconnected|far apart)",
            "(i'?m not blaming|not your fault|just want to share)",
          ],
          hint_tr:
            "İlk cümlede ne hissettiğini söyle + suçlama olmadığını netle.",
        },
        {
          speaker: "npc",
          message:
            "Hmm. Tell me more — when have you felt that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last night|the other day|this week|on tuesday)",
            "(when (you|we))",
            "(through dinner|over coffee|after work)",
            "(i felt|i was feeling) (invisible|alone|unheard|far from you)",
          ],
          hint_tr:
            "Spesifik bir an + 'I felt X' kalıbı. 'Always/never' yok.",
        },
        {
          speaker: "npc",
          message:
            "Okay. I didn't realise. Work's been brutal but that's not an excuse — what do you need from me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what matters to me|what i need|what would help)",
            "(feel(ing)? heard|feel(ing)? present|put the phone)",
            "(twenty minutes|even ten minutes|just dinner)",
            "(no screens|phone away|undivided)",
          ],
          hint_tr:
            "Net + somut talep. 'What matters to me is dinner without phones.' Mubitemli ama spesifik.",
        },
        {
          speaker: "npc",
          message:
            "That's fair, and honestly easy. Phone in the drawer during dinner — I can do that. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a good start|that'?s a lot|thank you for hearing)",
            "(maybe (one|once) a week|even a walk|something just us)",
            "(i appreciate|means a lot|that helps)",
            "(let'?s try that|sounds good)",
          ],
          hint_tr:
            "Teşekkür et + belki bir ek küçük şey öner. Aşırı yükleme.",
        },
      ],
    },
    {
      id: "ex.pb1.4.9",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I want to make a repair attempt before this gets bigger.",
      ipa: "aɪ wɒnt tə meɪk ə rɪˈpɛər əˈtɛmpt bɪˈfɔːr ðɪs gɛts ˈbɪgər",
      tr_hint:
        "Çift terapisi dili. 'Repair attempt' = onarım girişimi (Gottman). 'Before this gets bigger' = büyümeden.",
    },
    {
      id: "ex.pb1.4.10",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I'm not asking you to fix anything — I just need you to hear me right now.",
      voice_hint: "female_us",
      tr_hint:
        "Yetişkin ihtiyaç ifadesi. 'I'm not asking you to fix' = düzeltmeni istemiyorum. 'Hear me' = duy beni. Yumuşak.",
    },
    {
      id: "ex.pb1.4.11",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I notice we keep falling into the same conflict pattern — can we slow down and look at it together?",
      transcription_target:
        "I notice we keep falling into the same conflict pattern — can we slow down and look at it together?",
      tr_hint:
        "Örüntüyü adlandırma cümlesi. 'Conflict pattern' = tartışma örüntüsü. 'Slow down' = yavaşla.",
    },
    {
      id: "ex.pb1.4.12",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "repair attempt",
      tr_translation: "Onarım girişimi (Gottman terimi)",
      example:
        "When you reached for my hand mid-argument, that was a repair attempt and it landed.",
      example_tr:
        "Tartışmanın ortasında elimi tuttuğunda, bu bir onarım girişimiydi ve işe yaradı.",
    },
    {
      id: "ex.pb1.4.13",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "You always make me feel bad and you never listen to me, you are selfish.",
      correct_sentence:
        "When dinner ran long last night, I felt unheard — I'd like us to find a way to check in earlier next time.",
      tr_explanation:
        "'Always/never' + 'you are selfish' = klasik 'Four Horsemen' (Gottman) — savunma tetikler. Sağlıklı: spesifik an ('last night'), I-statement ('I felt unheard'), ileriye dönük rica ('check in earlier next time'). Karakterleme değil, örüntü.",
    },
  ],
};

// ============================================================
// Lesson 5 — Meeting the Foreign In-Laws
// ============================================================
export const personalB1Lesson_5: BundledLesson = {
  id: "personal.b1.in-laws.1",
  skill_id: "personal.b1.in-laws",
  index: 5,
  title: "Yabancı Aileyle İlk Tanışma",
  description:
    "Partner'inin ailesine ilk tanışma — saygılı, samimi, kültür farkını naif değil meraklı yaklaşımla aşarken.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Thank you for having me",
      tr_translation: "Beni misafir ettiğiniz için teşekkürler",
      example: "Thank you for having me — Maria's told me so much about you.",
      example_tr: "Beni misafir ettiğiniz için teşekkürler — Maria sizden çok bahsetti.",
    },
    {
      id: "ex.pb1.5.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Help me out — am I doing this right",
      tr_translation: "Bana yardım et — doğru mu yapıyorum (kültür kuralı sorma)",
      example: "Help me out — am I doing this right with the shoes off at the door?",
      example_tr: "Bana yardım et — kapıda ayakkabıyı çıkarmak doğru mu?",
    },
    {
      id: "ex.pb1.5.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Eve hediye getirdim, umarım sevmişsinizdir.",
      target: "I brought you a small something — I hope you like it.",
      accepted_variants: [
        "I brought a little something — hope it's okay.",
        "Just a small gift, hope you enjoy it.",
        "Brought you something small from home — hope it lands well.",
        "Something small from Istanbul — hope you like it.",
      ],
      tr_hint:
        "Hediyeyi alçakgönüllü ver. 'Small something / little something' = İngilizce yumuşatma.",
    },
    {
      id: "ex.pb1.5.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I don't want to ___ assumptions about how things work here, so please tell me if I'm doing anything off.",
      answer: "make",
      distractors: ["take", "do", "put"],
      tr_hint:
        "'Make assumptions' = varsayımda bulunmak. Sabit kalıp.",
    },
    {
      id: "ex.pb1.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "In Turkey we do it different. Your way is strange to me.",
      correct_sentence:
        "It's a little different from how we do it back home — I love how relaxed dinners are here.",
      tr_explanation:
        "'Strange' = yargı. Yetişkin yaklaşım: farkı tarafsız tanı + olumlu bir gözlem ekle. Karşılaştırma değil, gözlem.",
    },
    {
      id: "ex.pb1.5.6",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Annenizin yemeği çok güzel — tarifini öğrenebilir miyim?",
      target: "Your cooking is incredible — would you mind sharing the recipe?",
      accepted_variants: [
        "This is delicious — I'd love to learn how you made it.",
        "Honestly the best meal I've had in months — could I get the recipe?",
        "The food is amazing — any chance you'd teach me?",
        "This is so good — would you share the recipe?",
      ],
      tr_hint:
        "İltifat + öğrenmeye istek. 'Would you mind sharing / could I get the recipe' kibar.",
    },
    {
      id: "ex.pb1.5.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Partner'inin ebeveynleriyle ilk akşam yemeği. Kapıda hediyeyle karşılıyorlar.",
      npc_role: "Partner's parent",
      setting: "Family home, first introduction dinner",
      turns: [
        {
          speaker: "npc",
          message:
            "You must be the one Maria won't stop talking about. Please, come in — was the trip okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for having me|thanks for having me)",
            "(maria'?s told me so much|i'?ve heard so much)",
            "(the trip was|it was) (fine|good|easy|smooth)",
            "(brought you|i brought) (a small|a little|something)",
          ],
          hint_tr:
            "Selam + teşekkür + Maria referansı + hediye. Üç cümle yeterli.",
        },
        {
          speaker: "npc",
          message:
            "Oh you didn't have to. That's lovely, thank you. Make yourself at home — shoes off here, by the way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|got it)",
            "(thanks for the heads up|good to know)",
            "(same back home|we do that too|i'?m used to that)",
            "(help me out|please tell me) (if|when) (i'?m doing|i do)",
          ],
          hint_tr:
            "Kural küçük bir konfor noktası. Onayla, küçük bir bağ kur, yardım iste.",
        },
        {
          speaker: "npc",
          message:
            "We'll go easy on you. Dinner's almost ready — wine?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please|i'?d love some|that would be great)",
            "(just a little|small glass)",
            "(thank you|cheers)",
            "(can i help|anything i can do|need a hand)",
          ],
          hint_tr:
            "Kabul et + yardım teklif et. 'Yes please — anything I can help with?'",
        },
        {
          speaker: "npc",
          message:
            "You're sweet but no — sit, relax. So Maria says you grew up in Istanbul. What was that like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(grew up in|i'?m from|spent most of my life in)",
            "(it'?s a city that|kind of a city|two continents)",
            "(noisy|crowded|chaotic|alive|busy)",
            "(but i love|but it'?s home|i wouldn'?t change it)",
          ],
          hint_tr:
            "Bir cümlede İstanbul'u canlandır. Klişe değil — kendi sözcüklerin.",
        },
        {
          speaker: "npc",
          message:
            "Sounds amazing. We have to come visit. Please, sit — let's eat.",
        },
      ],
    },
    {
      id: "ex.pb1.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "It's really good to finally meet you in person.",
      ipa: "ɪts ˈrɪli gʊd tə ˈfaɪnəli miːt juː ɪn ˈpɜːrsən",
      tr_hint:
        "Tanışma açılışı. 'Really' = 'RIL-li' kısa. 'In person' = 'in-PÖR-sın'. Sıcak, içten.",
    },
    {
      id: "ex.pb1.5.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Maria has told me so much about your trip to Cappadocia — I'd love to hear your side of it.",
      voice_hint: "female_uk",
      tr_hint:
        "Kayınvalide ile sohbet. 'Told me so much about' = bana çok şey anlattı. 'I'd love to hear' = duymak isterim.",
    },
    {
      id: "ex.pb1.5.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "We brought you a small something from Istanbul — nothing fancy, just some Turkish coffee and lokum.",
      transcription_target:
        "We brought you a small something from Istanbul — nothing fancy, just some Turkish coffee and lokum.",
      tr_hint:
        "Hediye verme kalıbı. 'Small something' = küçük bir şey. 'Nothing fancy' = abartılı değil.",
    },
    {
      id: "ex.pb1.5.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "boundaries",
      tr_translation: "Sınırlar",
      example:
        "We've talked about boundaries around holiday visits, and we're trying to work out what's fair for both families.",
      example_tr:
        "Tatil ziyaretleri konusunda sınırları konuştuk ve iki aile için adil olanı bulmaya çalışıyoruz.",
    },
    {
      id: "ex.pb1.5.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Your son is very lucky to have me, I am from a good family in Istanbul.",
      correct_sentence:
        "Maria's family means a lot to her, and meeting you means a lot to me too.",
      tr_explanation:
        "'He's lucky to have me' + 'good family' = övünme. Yabancı kayınvalide bağlamında alçakgönüllülük + saygı esastır. Sağlıklı dil: karşı tarafa değer ver, kendini sıralama.",
    },
  ],
};

// ============================================================
// Lesson 6 — Long-Distance Call: Daily Life, Real Connection
// ============================================================
export const personalB1Lesson_6: BundledLesson = {
  id: "personal.b1.long-distance.1",
  skill_id: "personal.b1.long-distance",
  index: 6,
  title: "Uzak Mesafe — Günlük Bağ",
  description:
    "Sevgilinle haftalık görüntülü konuşma. Yüzeyel 'nasılsın iyiyim'i geç — günün dokusunu paylaş, gerçekten dinle.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Walk me through your day",
      tr_translation: "Gününü baştan anlat / detaylı paylaş",
      example: "Walk me through your day — even the boring bits.",
      example_tr: "Gününü baştan anlat — sıkıcı kısımları bile.",
    },
    {
      id: "ex.pb1.6.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I miss being around you",
      tr_translation: "Yanında olmayı özlüyorum",
      example: "I miss being around you — not just texting, the actual being there.",
      example_tr: "Yanında olmayı özlüyorum — yazışmak değil, gerçekten orada olmak.",
    },
    {
      id: "ex.pb1.6.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bugün küçük ama güzel bir şey oldu, sana anlatmak istiyorum.",
      target: "Something small but nice happened today and I wanted to tell you about it.",
      accepted_variants: [
        "Tiny thing happened today, but I had to share it with you.",
        "There's a small good thing from today I want to tell you.",
        "I want to tell you about something small that made my day.",
        "Little moment today — I thought of you, had to share.",
      ],
      tr_hint:
        "Küçük an paylaşma = yakınlık. 'Something small but nice / a little moment.'",
    },
    {
      id: "ex.pb1.6.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I keep ___ moments where I want to turn to you, and you're not there.",
      answer: "having",
      distractors: ["taking", "making", "doing"],
      tr_hint:
        "'Keep having moments' = sürekli o anlar oluyor. Present continuous.",
    },
    {
      id: "ex.pb1.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How are you. I am fine. What did you do.",
      correct_sentence:
        "Walk me through your day. Mine was weird — I'll tell you in a sec.",
      tr_explanation:
        "Düz, kuru, soru-soru-soru = uzak mesafe ölür. Davet et + kendi gününü canlandır. Diyalog kur.",
    },
    {
      id: "ex.pb1.6.6",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir sonraki gelişin için sayım yapıyorum — kaç gün kaldı?",
      target: "I'm counting down to your next visit — how many days left?",
      accepted_variants: [
        "How many days till you're here again? I'm counting.",
        "Counting the days till your next trip — when is it?",
        "How long till I see you? I keep counting.",
      ],
      tr_hint:
        "'Counting down' = geri sayım. Hafif kavuşma özlemi.",
    },
    {
      id: "ex.pb1.6.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Haftalık akşam görüntülü konuşma. İkiniz de yorgunsunuz ama bağ kurmak istiyorsunuz.",
      npc_role: "Long-distance partner",
      setting: "Evening video call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey you. You look tired — long one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|kind of|honestly yes)",
            "(it was|today was) (a lot|brutal|all over the place|long)",
            "(but i'?m glad|but seeing you|good to see you)",
            "(walk me through|tell me about) your day",
          ],
          hint_tr:
            "Otantik cevap + topu çevir. Maske takma.",
        },
        {
          speaker: "npc",
          message:
            "Mine was actually decent. Had that meeting I was dreading, and it went totally fine. What was hard about yours?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s great|happy for you|glad it went well)",
            "(mine was|today i was)",
            "(running between|back to back|nonstop)",
            "(missed lunch|forgot to eat|barely sat down)",
          ],
          hint_tr:
            "Onun haberini selamla + senin günün spesifik bir detayını paylaş.",
        },
        {
          speaker: "npc",
          message:
            "You need to eat lunch. We've talked about this. What's the rest of the week look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|i know|you'?re right)",
            "(rest of the week|the next few days)",
            "(thursday|friday|saturday)",
            "(weekend i'?m|saturday i'?m|sunday i'?m)",
          ],
          hint_tr:
            "Eleştiriyi kabul et (hafif) + haftanın geri kalanını anlat.",
        },
        {
          speaker: "npc",
          message:
            "Okay. I keep having moments where I want to turn to you and you're not there. Like the meeting today — I would've told you in person.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i miss|i miss being around you)",
            "(same here|me too|i feel that)",
            "(it'?s the small things|the little things|not the texting)",
            "(counting down|how many days|when'?s the next visit)",
          ],
          hint_tr:
            "Aynı duyguyu doğrula + somut özlem + gelecek odaklı.",
        },
        {
          speaker: "npc",
          message:
            "Twenty-three. I counted this morning. Okay tell me one small good thing from today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(small good thing|one nice thing|tiny moment)",
            "(on the way|at lunch|in the morning|during)",
            "(thought of you|made me smile|reminded me of you)",
            "(coffee|stranger|song|book|sky)",
          ],
          hint_tr:
            "Küçük spesifik bir an + onunla bağlantı. Yapay değil — gerçek bir detay.",
        },
      ],
    },
    {
      id: "ex.pb1.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Walk me through your day — even the boring bits.",
      ipa: "wɔːk mi θruː jʊər deɪ ˈiːvən ðə ˈbɔːrɪŋ bɪts",
      tr_hint:
        "Long-distance kalbi. 'Walk me through' birleşik, akıcı. 'Boring bits' = sıkıcı kısımlar, sevecen.",
    },
    {
      id: "ex.pb1.6.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "I noticed we've fallen into the same conflict pattern over weekend plans — can we slow down on that?",
      voice_hint: "male_us",
      tr_hint:
        "Uzaktan örüntü adlandırma. 'Fallen into' = düşmüşüz. 'Conflict pattern' = tartışma örüntüsü.",
    },
    {
      id: "ex.pb1.6.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "I just wanted to hear your voice for a few minutes — no big agenda, just you.",
      transcription_target:
        "I just wanted to hear your voice for a few minutes — no big agenda, just you.",
      tr_hint:
        "Long-distance dürüst dokunma. 'No big agenda' = büyük bir gündem yok. 'Just you' = sadece sen.",
    },
    {
      id: "ex.pb1.6.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "repair attempt",
      tr_translation: "Onarım girişimi",
      example:
        "When you sent that voice note after our argument, that was a repair attempt and it really helped.",
      example_tr:
        "Tartışmamızdan sonra o sesli mesajı gönderdiğinde, bu bir onarım girişimiydi ve gerçekten yardımcı oldu.",
    },
    {
      id: "ex.pb1.6.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Why you didn't call me yesterday? I am very angry, you don't love me anymore.",
      correct_sentence:
        "When I didn't hear from you yesterday, I felt a bit lonely — I'd love to know what your day looked like.",
      tr_explanation:
        "'Why you didn't' yanlış soru yapısı + 'you don't love me anymore' yıkıcı genelleme. Yetişkin uzun mesafe: spesifik gözlem ('didn't hear from you yesterday'), I-statement ('I felt lonely'), açılım talebi ('I'd love to know'). Sevgiyi sorgulama, bağlantı iste.",
    },
  ],
};

// ============================================================
// Lesson 7 — Conflict & Repair: Owning Your Part
// ============================================================
export const personalB1Lesson_7: BundledLesson = {
  id: "personal.b1.repair.1",
  skill_id: "personal.b1.repair",
  index: 7,
  title: "Çatışma Sonrası — Kendi Payını Kabul",
  description:
    "Tartıştınız, ortam gergin. Geri dön, dinle, kendi payını al — savunmadan, gerçekten.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I've been sitting with what you said",
      tr_translation: "Söylediğini düşünüyorum / üzerinde duruyorum",
      example: "I've been sitting with what you said — and you're right about most of it.",
      example_tr: "Söylediğini düşünüyorum — büyük kısmında haklıydın.",
    },
    {
      id: "ex.pb1.7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "That's on me",
      tr_translation: "Bu benim hatam / sorumluluğu alıyorum",
      example: "Cutting you off mid-sentence — that's on me. I'll do better.",
      example_tr: "Sözünü ortasında kesmem — bu bende. Daha iyisini yapacağım.",
    },
    {
      id: "ex.pb1.7.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sana hak veriyorum — bunu defansiv almamalıydım.",
      target: "You're right — I shouldn't have gotten defensive about that.",
      accepted_variants: [
        "Fair point — I went straight to defensive mode, that wasn't useful.",
        "You're right and I owe you an honest response, not a defensive one.",
        "I hear you — I got defensive instead of listening.",
        "Yeah — I should've listened instead of pushing back.",
      ],
      tr_hint:
        "Defensive = savunmaya geçmek. Yetişkin: 'I shouldn't have gotten defensive' = kendi tepkini sahiplen.",
    },
    {
      id: "ex.pb1.7.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Tepkimi mazur göstermek istemiyorum, sadece açıklamak istiyorum nereden geldiğini.",
      target: "I'm not trying to excuse my reaction — just explain where it came from.",
      accepted_variants: [
        "Not making excuses — just want you to know where my head was.",
        "This isn't a justification, just context for why I reacted that way.",
        "Not excusing it — just want to be honest about what was going on for me.",
      ],
      tr_hint:
        "'Excuse vs explain' = mazur göstermek vs açıklamak. Sınırı net çiz.",
    },
    {
      id: "ex.pb1.7.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can we ___ back to last night? I want to do that conversation properly.",
      answer: "circle",
      distractors: ["go", "come", "look"],
      tr_hint:
        "'Circle back' = geri dönmek (bir konuya). Yetişkin profesyonel-flörtöz kalıp.",
    },
    {
      id: "ex.pb1.7.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I'm sorry but you also did wrong things.",
      correct_sentence:
        "I want to start by saying the part I got wrong — we can come back to the rest after.",
      tr_explanation:
        "'Sorry but X' = özür değil, mazeret. Yetişkin: kendi payınla başla, geri kalanı sonra. Sahiplenme sırası önemli.",
    },
    {
      id: "ex.pb1.7.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Dün gece tartıştınız. Sabah, sen kahve uzatıyorsun. Onarım girişimi başlıyor.",
      npc_role: "Partner",
      setting: "Morning after a fight",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can we|could we) (circle back|talk about|come back to)",
            "(last night|yesterday|our fight)",
            "(i'?ve been sitting with|i'?ve been thinking about)",
            "(no rush|whenever you'?re ready|when you'?re up for it)",
          ],
          hint_tr:
            "Düşük baskı davet + kendi düşündüğünü göster.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, we should. I didn't sleep great either. Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the thing i got wrong|where i was off|my part)",
            "(i shouldn'?t have|i was wrong to)",
            "(raised my voice|interrupted|got defensive|brought up)",
            "(that'?s on me|that one'?s on me)",
          ],
          hint_tr:
            "Kendi payınla başla. Spesifik bir davranış. Sahiplen.",
        },
        {
          speaker: "npc",
          message:
            "Thank you for saying that. The interrupting thing hurt the most, honestly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you|i get that|that makes sense)",
            "(i'?m not trying to excuse|not making excuses)",
            "(where it came from|what was going on for me)",
            "(stressed about|on edge from|caught off guard)",
          ],
          hint_tr:
            "Duyduğunu göster + (kısa) bağlam ver — mazeret olmadan.",
        },
        {
          speaker: "npc",
          message:
            "I get that. I also said some things I shouldn't have. The 'you always' bit — that wasn't fair.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for saying that|i appreciate that)",
            "(both of us|we both)",
            "(can we (try|agree)|let'?s (try|agree))",
            "(when (i|we) start feeling)",
            "(take a break|pause|come back when)",
          ],
          hint_tr:
            "Onun sahiplenmesini al + ileri dönük bir küçük anlaşma öner.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, the 'twenty minutes apart then come back' thing. Let's actually do that next time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|sounds good|let'?s do that)",
            "(i love you|i'?m glad we|i needed this)",
            "(thank you for|appreciate you)",
            "(coffee|breakfast|morning)",
          ],
          hint_tr:
            "Anlaşmayı kapat + duygusal kapanış + günlük hayata dön.",
        },
      ],
    },
    {
      id: "ex.pb1.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I want to own my part in this — I shouldn't have raised my voice.",
      ipa: "aɪ wɒnt tu oʊn maɪ pɑːrt ɪn ðɪs aɪ ˈʃʊdənt həv reɪzd maɪ vɔɪs",
      tr_hint:
        "Onarım dili. 'Own my part' = payımı kabul et. 'Shouldn't have raised my voice' = ses yükseltmemeliydim.",
    },
    {
      id: "ex.pb1.7.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I'm sorry — that wasn't fair, and I want to make a repair attempt instead of doubling down.",
      voice_hint: "female_us",
      tr_hint:
        "Olgun onarım. 'Wasn't fair' = adil değildi. 'Doubling down' = inatlaşmak. 'Repair attempt' anahtar terim.",
    },
    {
      id: "ex.pb1.7.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I noticed we keep getting stuck in the same conflict pattern around money — can we talk about it when we're both calm?",
      transcription_target:
        "I noticed we keep getting stuck in the same conflict pattern around money — can we talk about it when we're both calm?",
      tr_hint:
        "Örüntü adlandırma. 'Conflict pattern around money' = para etrafında tartışma örüntüsü.",
    },
    {
      id: "ex.pb1.7.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "repair attempt",
      tr_translation: "Onarım girişimi",
      example:
        "I should have made a repair attempt sooner instead of letting it sit overnight.",
      example_tr:
        "Bütün gece bekletmek yerine daha erken bir onarım girişimi yapmalıydım.",
    },
    {
      id: "ex.pb1.7.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I'm sorry but you also did wrong, so let's forget about it and don't speak this again.",
      correct_sentence:
        "I'm sorry — I want to own my part first, and then I'd love to hear what felt off for you too.",
      tr_explanation:
        "'I'm sorry but you also' = yarı özür, sorumluluğu paylaştırma. 'Let's forget about it' = bastır, gerilimi çözmez. Sağlıklı onarım: kendi payını önce kabul et ('own my part first'), karşı tarafı dinlemeye davet et ('hear what felt off for you'). 'Don't speak this again' = 'don't talk about it again' olmalı.",
    },
  ],
};

// ============================================================
// Lesson 8 — "I Love You" + Healthy Boundaries
// ============================================================
export const personalB1Lesson_8: BundledLesson = {
  id: "personal.b1.love-boundaries.1",
  skill_id: "personal.b1.love-boundaries",
  index: 8,
  title: "Aşk + Sağlıklı Sınırlar",
  description:
    "Duyguyu samimi söyle, ama kendine de bağlı kal. Aşk = sınırsız değil — sağlıklı sınır da aşkın bir parçası.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pb1.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm not just saying it",
      tr_translation: "Sadece laf olsun diye söylemiyorum",
      example: "I love you — and I'm not just saying it because you said it first.",
      example_tr: "Seni seviyorum — ve sen önce söyledin diye demiyorum.",
    },
    {
      id: "ex.pb1.8.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I need some space tonight, it's not about you",
      tr_translation: "Bu akşam alana ihtiyacım var, seninle ilgisi yok",
      example:
        "I need some space tonight — it's not about you, I just need to recharge.",
      example_tr:
        "Bu akşam alana ihtiyacım var — seninle ilgisi yok, sadece kendime gelmem lazım.",
    },
    {
      id: "ex.pb1.8.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Seni seviyorum — uzun zamandır bunu hissediyorum.",
      target: "I love you — I've been feeling that for a while.",
      accepted_variants: [
        "I love you. I have for a while, actually.",
        "I'm in love with you — it's been there for some time.",
        "I love you, and I've known for a while.",
        "I love you — that's been true for me for a while now.",
      ],
      tr_hint:
        "Net + sahiplenilmiş. Şu an söylüyorum ama yeni değil.",
    },
    {
      id: "ex.pb1.8.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sana çok bağlıyım ama her gece görüşmek bana iyi gelmiyor.",
      target: "I'm really into us, but seeing each other every night isn't great for me.",
      accepted_variants: [
        "I love what we have — every single night just isn't sustainable for me.",
        "I'm really committed to this, but I need some nights to myself.",
        "We're solid — and I still need a couple of evenings for myself each week.",
      ],
      tr_hint:
        "Bağlılık + sınır = çelişki değil, dürüstlük. Sevgi azalmadan ihtiyaç söyle.",
    },
    {
      id: "ex.pb1.8.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Loving you doesn't mean I ___ myself in the process.",
      answer: "lose",
      distractors: ["miss", "leave", "forget"],
      tr_hint:
        "'Lose yourself in someone' = kendini kaybetmek. Sağlıklı sınır cümlesi.",
    },
    {
      id: "ex.pb1.8.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "If you love me you will always say yes to me.",
      correct_sentence:
        "Loving each other means we can both say no without it being a big deal.",
      tr_explanation:
        "Aşk = otomatik 'evet' değildir. Sağlıklı yetişkin: hayır deme hakkı = ilişkinin sağlamlığının göstergesi.",
    },
    {
      id: "ex.pb1.8.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç aydır birliktesiniz. Sen 'seviyorum' demeye hazırsın. Aynı akşam, hafta planını ayarlıyorsunuz.",
      npc_role: "Partner",
      setting: "Evening at your place",
      turns: [
        {
          speaker: "npc",
          message:
            "I was thinking we could do every weeknight at mine this week — fewer trains for you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s sweet|that'?s a kind thought|i love that)",
            "(but honestly|i think|to be real)",
            "(every night is|i need|i'?d like)",
            "(a couple of|two|some) (nights|evenings) (to myself|alone|on my own)",
          ],
          hint_tr:
            "Onu görmek istediğini söyle + sınırı net çiz. 'That's sweet but every night is too much for me.'",
        },
        {
          speaker: "npc",
          message:
            "Oh — okay. I didn't realise. Is something off?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s not about you|this isn'?t about us|nothing'?s wrong)",
            "(i recharge|i reset|i think better) alone",
            "(it'?s how i|that'?s just how)",
            "(loving you doesn'?t mean|being with you doesn'?t mean)",
            "(losing myself|disappearing|merging)",
          ],
          hint_tr:
            "İlişkiyle ilgili olmadığını netle + ihtiyacının ne olduğunu açıkla.",
        },
        {
          speaker: "npc",
          message:
            "No, I get it. I just panic a little when someone says they need space — old stuff. So Monday Wednesday Friday at yours, Tuesday Thursday solo?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|that sounds good|i like that)",
            "(thank you for hearing|i appreciate you|means a lot)",
            "(and honestly|while we'?re here|since we'?re talking)",
            "(i love you|i'?m in love with you|i wanted to say)",
          ],
          hint_tr:
            "Plan onayı + duygusal kapanış. Bu an iyi bir moment 'seviyorum' için.",
        },
        {
          speaker: "npc",
          message:
            "Wait — say that again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i love you|i'?m in love with you)",
            "(been feeling|known) (it )?for a while",
            "(i'?m not just saying|not just because)",
            "(needed to say|wanted to tell you)",
          ],
          hint_tr:
            "Tekrarla, sahiplenilmiş. 'I'm not just saying it' kalıbı = otantiklik mührü.",
        },
        {
          speaker: "npc",
          message:
            "I love you too. Okay this is a good night.",
        },
      ],
    },
    {
      id: "ex.pb1.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I love you, and I still need my own time.",
      ipa: "aɪ lʌv juː ænd aɪ stɪl niːd maɪ oʊn taɪm",
      tr_hint:
        "Sevgi + sınır. 'And' yumuşak bağlaç ('but' yerine). 'My own time' = kendi zamanım. Sıcak, kararlı.",
    },
    {
      id: "ex.pb1.8.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Saying 'I love you' for me means I want to keep choosing this, not that I'm losing myself in it.",
      voice_hint: "female_uk",
      tr_hint:
        "Aşk tanımı. 'Keep choosing this' = bunu seçmeye devam etmek. 'Losing myself' = kendimi kaybetmek. Olgun.",
    },
    {
      id: "ex.pb1.8.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "I have boundaries around how often we text during the workday, and I hope that's okay with you.",
      transcription_target:
        "I have boundaries around how often we text during the workday, and I hope that's okay with you.",
      tr_hint:
        "Sınır iletişim cümlesi. 'Boundaries around X' = X etrafında sınırlar. 'Hope that's okay' yumuşak.",
    },
    {
      id: "ex.pb1.8.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "boundaries",
      tr_translation: "Sınırlar (sağlıklı)",
      example:
        "Healthy boundaries aren't a wall — they're how I show up better when we're together.",
      example_tr:
        "Sağlıklı sınırlar bir duvar değildir — birlikteyken daha iyi var olmamın yoludur.",
    },
    {
      id: "ex.pb1.8.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "If you really love me you will not go this weekend trip with your friends.",
      correct_sentence:
        "I'll miss you this weekend, but I'm glad you've got plans with your friends — those matter too.",
      tr_explanation:
        "'If you really love me you will not' = sevgiyi sınırlama aracı yapma. Sağlıklı: kendi duyguyu söyle ('I'll miss you'), partnerin başka ilişkilerini destekle ('I'm glad'). Sevgi sahip olmak değil, alan vermek.",
    },
  ],
};

// ============================================================
// Lesson 9 — Breakup Conversation: Clear, Kind, Final
// ============================================================
export const personalB1Lesson_9: BundledLesson = {
  id: "personal.b1.breakup.1",
  skill_id: "personal.b1.breakup",
  index: 9,
  title: "Ayrılık Konuşması — Net, Saygılı, Kesin",
  description:
    "Ayrılma kararı almışsın. Belirsizlik bırakma, suçlamaya kaçma — net, saygılı, kapalı.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.9.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I've thought about this a lot",
      tr_translation: "Bu konuyu çok düşündüm",
      example: "I've thought about this a lot — and I think we should end things.",
      example_tr: "Bu konuyu çok düşündüm — ve bence ilişkiyi bitirmeliyiz.",
    },
    {
      id: "ex.pb1.9.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "This isn't a conversation about getting back",
      tr_translation: "Bu, geri dönmekle ilgili bir konuşma değil",
      example:
        "I want to be clear — this isn't a conversation about getting back together later.",
      example_tr:
        "Şunu netleştireyim — bu, ileride yeniden bir araya gelmekle ilgili bir konuşma değil.",
    },
    {
      id: "ex.pb1.9.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Seni önemsiyorum, bu yüzden bunu telefonda söylemek istemedim.",
      target: "I care about you — that's why I didn't want to do this over text.",
      accepted_variants: [
        "Because I respect you, I wanted to say this in person.",
        "I care too much to do this on the phone — that's why we're here.",
        "You deserve to hear this face to face, that's why I came.",
        "I wouldn't have done this over text — it had to be in person.",
      ],
      tr_hint:
        "Saygı + neden yüz yüze. Yetişkin ayrılığın temel taşı.",
    },
    {
      id: "ex.pb1.9.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sen kötü insan değilsin — biz uyumlu değiliz, bu da yeterli sebep.",
      target: "You're not the problem — we're not a good fit, and that's enough of a reason.",
      accepted_variants: [
        "This isn't about you being bad. We're just not right for each other, and that's reason enough.",
        "You haven't done anything wrong — we're not aligned, and I have to honour that.",
        "It's not that something's wrong with you — we just don't match, and that matters.",
      ],
      tr_hint:
        "Kişiyi değil ilişkiyi sonlandır. 'Not a good fit / not aligned' = yargısız sebep.",
    },
    {
      id: "ex.pb1.9.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd rather we both walk away with our ___ intact.",
      answer: "dignity",
      distractors: ["pride", "friendship", "honesty"],
      tr_hint:
        "'Walk away with dignity intact' = onurla ayrılmak. Saygılı ayrılığın simgesi.",
    },
    {
      id: "ex.pb1.9.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Maybe we can be friends and see each other sometimes and try again later.",
      correct_sentence:
        "I'm not in a place to be friends right now — I think we both need real distance.",
      tr_explanation:
        "Belirsizlik = en zararlı ayrılık türü. 'Maybe friends, maybe try again' = ikinizi de kapana sıkıştırır. Yetişkin: net mesafe.",
    },
    {
      id: "ex.pb1.9.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Ayrılma kararı almışsın. Onu evine davet ettin, sakin bir akşam, konuyu açıyorsun.",
      npc_role: "Partner",
      setting: "Breakup conversation, at home",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been thinking|i'?ve thought about this) (a lot|for a while)",
            "(i want to talk|we need to talk)",
            "(this isn'?t easy|hard to say|hard conversation)",
            "(i care about you|i respect you)",
          ],
          hint_tr:
            "Giriş: ne kadar düşündüğün + yumuşatma ama net. Belirsizlik bırakma.",
        },
        {
          speaker: "npc",
          message:
            "Okay. You're scaring me a little — just say it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think we should|i need to) (end (things|this)|break up)",
            "(i don'?t see (us|this) working|it'?s not (a fit|right))",
            "(we'?re not (a good fit|aligned|right for each other))",
            "(this isn'?t (working|right))",
          ],
          hint_tr:
            "Çekirdek cümle. Tek tek kelimelerle, sapma yok. 'I think we should end things.'",
        },
        {
          speaker: "npc",
          message:
            "Why now? Is it something I did? What if we try couples therapy or — ",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you didn'?t do|it'?s not about something you did|you'?re not the problem)",
            "(we'?re not a good fit|we'?re not aligned)",
            "(that'?s enough of a reason|reason enough)",
            "(i'?ve thought about all the options|i'?ve considered it)",
            "(this is the right call|i'?m sure)",
          ],
          hint_tr:
            "Suçlama yok + kapı açık değil. Düşündüğünü göster ama kararın net.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Can we at least stay friends? Or take a few weeks and see?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this isn'?t a conversation about|i don'?t want to leave the door)",
            "(i'?m not in a place|i can'?t do)",
            "(real distance|real space|some real time apart)",
            "(maybe one day|down the road|in the future)",
            "(not right now|not yet)",
          ],
          hint_tr:
            "Net 'hayır'. 'Maybe friends' kapanı kur ma — açık tut ama bugün yok.",
        },
        {
          speaker: "npc",
          message:
            "This is awful. But I'd rather hear it like this than be lied to. Thank you for coming over.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for hearing|i'?m sorry|i wish)",
            "(both walk away|both of us|dignity intact)",
            "(i meant what i said|i did care|i do care)",
            "(take care of yourself|i hope you'?re okay|be well)",
          ],
          hint_tr:
            "Duygusal kapanış + saygılı veda. Sahteci umut verme.",
        },
      ],
    },
    {
      id: "ex.pb1.9.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I've thought about this a lot, and I want to be honest with you.",
      ipa: "aɪv θɔːt əˈbaʊt ðɪs ə lɒt ænd aɪ wɒnt tə bi ˈɒnɪst wɪð juː",
      tr_hint:
        "Ayrılık girişi. 'Thought about this a lot' = bunu çok düşündüm. Sakin, ölçülü, içten.",
    },
    {
      id: "ex.pb1.9.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Our conflict pattern around the future has shown me that we want different things, and I think we need to end this.",
      voice_hint: "male_us",
      tr_hint:
        "Ayrılık dili. 'Conflict pattern around the future' = gelecek etrafında tartışma örüntüsü. 'Want different things' = farklı şeyler istemek.",
    },
    {
      id: "ex.pb1.9.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I care about you, and I'm not making this decision lightly — but it's the right one for both of us.",
      transcription_target:
        "I care about you, and I'm not making this decision lightly — but it's the right one for both of us.",
      tr_hint:
        "Olgun ayrılık cümlesi. 'Care about you' = sana değer veriyorum. 'Not lightly' = hafife almıyorum.",
    },
    {
      id: "ex.pb1.9.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "conflict pattern",
      tr_translation: "Tartışma örüntüsü",
      example:
        "We have a conflict pattern around commitment that I don't think we can repair, and that's not on either of us.",
      example_tr:
        "Bağlanma etrafında bir tartışma örüntümüz var ve bunu onaramayız bence — bu ikimizin de suçu değil.",
    },
    {
      id: "ex.pb1.9.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "You ruined everything and I cannot stay with you anymore, you are toxic.",
      correct_sentence:
        "I don't think we work together, and staying isn't fair to either of us — I'm not blaming you, I just need to be honest.",
      tr_explanation:
        "'You ruined everything' + 'you are toxic' = etiketleme, suçlama. Olgun ayrılık: 'we don't work together' (denklik), 'not fair to either of us' (ortak iyilik), 'not blaming you' (sorumluluk paylaşımı reddi değil, suçlama reddi).",
    },
  ],
};

// ============================================================
// Lesson 10 — Apology & Reconciliation After a Fight
// ============================================================
export const personalB1Lesson_10: BundledLesson = {
  id: "personal.b1.apology.1",
  skill_id: "personal.b1.apology",
  index: 10,
  title: "Gerçek Özür ve Onarım",
  description:
    "'Sorry' yetmez. Spesifik et, sahiplen, değişiklik öner. Yetişkin özürün dört parçası.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.10.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I see now how that landed",
      tr_translation: "Şimdi nasıl etkilediğini görüyorum",
      example: "I see now how that landed — I wasn't thinking about your day at all.",
      example_tr:
        "Şimdi nasıl etkilediğini görüyorum — senin günün hakkında hiç düşünmemişim.",
    },
    {
      id: "ex.pb1.10.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Here's what I'll do differently",
      tr_translation: "İşte farklı yapacağım şey",
      example: "Here's what I'll do differently — text you before deciding, not after.",
      example_tr:
        "İşte farklı yapacağım şey — karar vermeden önce yazacağım, sonra değil.",
    },
    {
      id: "ex.pb1.10.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Üzgünüm sadece bir kelime — sana borçlu olduğum bu değildi.",
      target: "'Sorry' on its own is a small word — that's not what I owed you.",
      accepted_variants: [
        "I don't think 'sorry' alone covers it — you deserved more than that.",
        "Just saying sorry was the easy part — and you deserved more.",
        "Sorry isn't enough on its own — let me actually explain.",
        "You deserved more than a one-word sorry.",
      ],
      tr_hint:
        "Tek kelimelik özürün yetmediğini kabul. 'Owe' = borçlu olmak (manen).",
    },
    {
      id: "ex.pb1.10.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Tamamen sahipleniyorum — bahane uydurmaya çalışmıyorum.",
      target: "I'm taking full responsibility — I'm not trying to make excuses.",
      accepted_variants: [
        "I own this one — no excuses.",
        "This one's on me, fully — no buts.",
        "I'm not looking for an out — I want to actually own this.",
        "Full ownership here — I won't dress it up.",
      ],
      tr_hint:
        "'Take ownership / own this' = sahiplenmek. Bahane reddi netliği = yetişkin.",
    },
    {
      id: "ex.pb1.10.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I want to ___ this right, not just smooth it over.",
      answer: "make",
      distractors: ["put", "do", "set"],
      tr_hint:
        "'Make it right' = telafi etmek. Sabit kalıp. 'Smooth over' = göstermelik kapatmak.",
    },
    {
      id: "ex.pb1.10.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I'm sorry if you felt that way, that wasn't my intention.",
      correct_sentence:
        "I'm sorry I cancelled at the last minute without giving you a real reason — I see how that hurt.",
      tr_explanation:
        "'Sorry IF you felt' = pasif özür, suçu mağdura yıkar. Yetişkin: 'Sorry I [spesifik eylem] — I see how that hurt' = sahiplen + duygunun gerçekliğini kabul.",
    },
    {
      id: "ex.pb1.10.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I see now how that landed — and I'm sorry.",
      tr_hint:
        "Yavaş, gerçekten. 'Landed' = etki etmek (bir sözün/eylemin). Vurgu: 'see' ve 'landed'.",
    },
    {
      id: "ex.pb1.10.8",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İki gün önce planı son dakikada iptal ettin — kötü bir gerekçeyle. Bu akşam, onun evindesin, telafi etmeye geldin.",
      npc_role: "Partner",
      setting: "Reconciliation after a small but real hurt",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey. Come in. I wasn't sure you'd come.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for letting me|i'?m glad you|i wanted to come)",
            "(i'?ve been thinking about|i'?ve been sitting with)",
            "(thursday|the cancellation|the other night)",
            "(i owe you|i wanted to do this properly)",
          ],
          hint_tr:
            "Saygılı giriş + niye geldiğini söyle.",
        },
        {
          speaker: "npc",
          message:
            "Okay. I'm listening.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m sorry i|sorry for) (cancelled|cancelling|bailed)",
            "(at the last minute|so late|without a real reason)",
            "(i'?m not trying to|i don'?t want to) (make excuses|dress it up)",
            "(taking full|i own|this one'?s on me)",
          ],
          hint_tr:
            "Spesifik eylem + sahiplenme. 'If you felt...' tuzağına düşme.",
        },
        {
          speaker: "npc",
          message:
            "I'd dressed up. I was actually looking forward to it. And the text was so cold — 'something came up'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i see now|i see) how that landed",
            "(you deserved|you should have got)",
            "(i wasn'?t thinking about|i didn'?t stop to think)",
            "(your day|your evening|how excited you were)",
          ],
          hint_tr:
            "Onun gerçekliğini doğrula. 'Landed' kalıbı. Senin niyetin değil — onun deneyimi.",
        },
        {
          speaker: "npc",
          message:
            "Yeah. Why did you really cancel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer|truth is|real reason)",
            "(work spiraled|got overwhelmed|panicked)",
            "(should have told you|wish i'?d said)",
            "(instead of (hiding|disappearing|going cold))",
          ],
          hint_tr:
            "Gerçek sebep + ne yapman gerektiğini bil. Mazeret değil — bağlam + sorumluluk.",
        },
        {
          speaker: "npc",
          message:
            "Okay. That's at least real. So what now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s what i'?ll do differently|what i'?ll change)",
            "(text you before|tell you when|let you know if)",
            "(not (hide|disappear|go cold))",
            "(i want to make this right|not smooth it over)",
            "(redo (the night|thursday)|take you out)",
          ],
          hint_tr:
            "Gelecek davranış + somut telafi. Sözle değil planla.",
        },
        {
          speaker: "npc",
          message:
            "Okay. I'm not magically over it, but this is a start. Friday — and you're picking the place.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|done|i'?ll plan)",
            "(thank you for hearing|i appreciate|means a lot)",
            "(no rush|take your time|whenever you'?re ready)",
            "(i love you|i'?m glad i came)",
          ],
          hint_tr:
            "Anlaşma + sabır + duygusal kapanış. Onun hızını saygıla.",
        },
      ],
    },
    {
      id: "ex.pb1.10.9",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm sorry — I want to own my part before anything else.",
      ipa: "aɪm ˈsɒri aɪ wɒnt tu oʊn maɪ pɑːrt bɪˈfɔːr ˈɛniˌθɪŋ ɛls",
      tr_hint:
        "Onarım açılışı. 'Own my part' = payımı kabul et. 'Before anything else' = her şeyden önce. Olgun, savunmasız.",
    },
    {
      id: "ex.pb1.10.10",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I want to make a real repair attempt — not just say sorry and move on.",
      voice_hint: "female_us",
      tr_hint:
        "Onarım niyeti. 'Real repair attempt' = gerçek onarım girişimi. 'Just say sorry and move on' = sadece özür dileyip geçmek. Niyet farkı.",
    },
    {
      id: "ex.pb1.10.11",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I know we keep coming back to the same conflict pattern — I want to do my work on it, not just promise.",
      transcription_target:
        "I know we keep coming back to the same conflict pattern — I want to do my work on it, not just promise.",
      tr_hint:
        "Olgun değişim sözü. 'Do my work on it' = üzerinde gerçek emek vermek. 'Not just promise' = sadece söz değil.",
    },
    {
      id: "ex.pb1.10.12",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "repair attempt",
      tr_translation: "Onarım girişimi",
      example:
        "Bringing you coffee in bed wasn't to skip the conversation — it was a repair attempt while I figured out what to say.",
      example_tr:
        "Yatakta kahve getirmem konuşmayı atlamak için değildi — ne diyeceğimi düşünürken bir onarım girişimiydi.",
    },
    {
      id: "ex.pb1.10.13",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I'm sorry if you felt bad, but you started this fight first.",
      correct_sentence:
        "I'm sorry — I raised my voice and that wasn't fair. I want to own that before we talk about anything else.",
      tr_explanation:
        "'Sorry IF you felt' = koşullu özür (gerçek özür değil). 'You started it first' = sorumluluk pas verme. Sağlıklı: koşulsuz özür ('I raised my voice'), kendi davranışını adlandır ('wasn't fair'), sahiplen ('own that').",
    },
  ],
};

// ============================================================
// Lesson 11 — New Year's Resolutions: Sharing Goals Like an Adult
// ============================================================
export const personalB1Lesson_11: BundledLesson = {
  id: "personal.b1.resolutions.1",
  skill_id: "personal.b1.resolutions",
  index: 11,
  title: "Yeni Yıl Kararları — Goals",
  description:
    "'I will...' boş söz değil. 'This year I want to / My goal is to' + somut plan + niye. Yetişkin, gerçekçi, yargısız.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.11.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "My goal is to",
      tr_translation: "Hedefim ... yapmak",
      example: "My goal is to read one book a month — nothing crazy, just steady.",
      example_tr: "Hedefim ayda bir kitap okumak — abartısız, sadece istikrarlı.",
    },
    {
      id: "ex.pb1.11.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu yıl daha çok kendime vakit ayırmak istiyorum.",
      target: "This year I want to make more time for myself.",
      accepted_variants: [
        "This year I'm going to make more time for myself.",
        "I want to carve out more time for myself this year.",
        "My goal this year is to make more time for me.",
        "I'd like to make more time for myself this year.",
        "I want to prioritise myself a bit more this year.",
      ],
      tr_hint:
        "'This year I want to + base' = klasik kalıp. 'Make time for' = vakit ayırmak. Self-care imalı.",
    },
    {
      id: "ex.pb1.11.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Spora başlayacağım — bu sefer gerçekten, ufak adımlarla.",
      target: "I'm going to start working out — for real this time, in small steps.",
      accepted_variants: [
        "I'm going to start exercising — actually this time, small steps.",
        "I'm going to get into working out — for real, slowly.",
        "I'll start working out — properly this time, one step at a time.",
        "I'm planning to start exercising — for real, baby steps.",
      ],
      tr_hint:
        "'Going to + base' = niyet planı. 'I make sport' YANLIŞ — 'work out / exercise / start working out' doğru.",
    },
    {
      id: "ex.pb1.11.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I've ___ smoking for three weeks now — slow but real.",
      answer: "quit",
      distractors: ["left", "stopped to", "finished"],
      tr_hint:
        "Present perfect + 'quit smoking' = sigarayı bıraktım. 'Stopped to smoke' = sigara içmek için durdum (yanlış anlam). 'Left smoking' = anlamsız.",
    },
    {
      id: "ex.pb1.11.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "this",
        "year",
        "I'm",
        "going",
        "to",
        "be",
        "kinder",
        "to",
        "myself",
      ],
      correct_sentence: "this year I'm going to be kinder to myself",
      tr_translation: "Bu yıl kendime daha nazik olacağım.",
    },
    {
      id: "ex.pb1.11.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I will lose 10 kilos and read 50 books and learn guitar this year.",
      correct_sentence:
        "This year I want to focus on one thing — moving my body three times a week. The rest can wait.",
      tr_explanation:
        "Üç hedefi aynı anda 'I will' ile söz vermek = gerçekçi değil, klişe. Yetişkin yaklaşım: 'I want to focus on one thing' = tek hedef, somut sıklık ('three times a week'). 'I will + kocaman söz' yerine 'I want to / going to + ufak adım'.",
    },
    {
      id: "ex.pb1.11.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yılbaşı sonrası kahve. Yabancı arkadaşın 'Yeni yıl kararın var mı?' diye soruyor. Klişeye düşmeden, yetişkin paylaş.",
      npc_role: "Friend",
      setting: "Coffee in early January",
      turns: [
        {
          speaker: "npc",
          message:
            "So — any new year's resolutions, or are you anti-that whole thing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve got one|i have one|just one)",
            "(this year i (want to|am going to|'?m going to))",
            "(nothing huge|nothing crazy|small one)",
            "(i'?m trying to|i'?d like to)",
          ],
          hint_tr:
            "Klişeye girme — tek somut hedef. 'This year I want to + base'.",
        },
        {
          speaker: "npc",
          message:
            "Tell me. What's the one thing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my goal is to|i want to|i'?m going to)",
            "(work out|exercise|move my body|read|sleep|cook|see (my )?friends)",
            "(three times|twice|once) a week",
            "(in small steps|slowly|nothing crazy|baby steps)",
          ],
          hint_tr:
            "Somut hedef + somut sıklık. 'My goal is to X — Y times a week.'",
        },
        {
          speaker: "npc",
          message:
            "Honestly? That sounds doable. Most people tell me they'll change their whole life by February.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|exactly|right)",
            "(that'?s why|that'?s the thing|i'?ve learned)",
            "(small (steps|wins|things)|sustainable|stick with)",
            "(rather|i'?d rather) (do one thing|build slowly)",
          ],
          hint_tr:
            "Felsefeni özetle. 'Small steps' / 'I'd rather do one thing well'.",
        },
        {
          speaker: "npc",
          message:
            "Wise. Okay, what's the why behind it — why this one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truth is|the why is)",
            "(i'?ve been (feeling|noticing|running)|i'?ve felt)",
            "(burnout|low energy|out of shape|disconnected)",
            "(i want to feel|i want to be) (more|better|like myself)",
          ],
          hint_tr:
            "Niyetinin 'why'ı = duygusal bağ. 'I've been feeling X — I want to feel Y.'",
        },
        {
          speaker: "npc",
          message:
            "That actually lands. Okay — I'm stealing your approach.",
        },
      ],
    },
    {
      id: "ex.pb1.11.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Hangi yapı yetişkin bir hedef açıklamasıdır?",
          options: [
            "I will change everything this year",
            "My goal is to read one book a month",
            "I make sport now",
            "I'm going to be perfect",
          ],
          correct_index: 1,
          tr_explanation:
            "'My goal is to + base + somut sıklık' = gerçekçi. 'I will change everything' klişe; 'I make sport' Türkçeden direkt çeviri (yanlış); 'be perfect' boş söz.",
        },
        {
          question: "'Spor yapmaya başladım' İngilizce nasıl doğru?",
          options: [
            "I started to make sport.",
            "I'm starting sport.",
            "I've started working out.",
            "I do sport beginning.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Work out / exercise' doğru fiil. Present perfect ('I've started') = yakın geçmiş, devam ediyor. 'Make sport' Türkçeden direkt çeviri.",
        },
        {
          question: "'Going to + base' ne için kullanılır?",
          options: [
            "Geçmişte yapılan iş",
            "Önceden düşünülmüş plan / niyet",
            "Genel doğru bilgi",
            "Şu an olan eylem",
          ],
          correct_index: 1,
          tr_explanation:
            "'Be going to + base' = önceden karar verilmiş plan / niyet. 'This year I'm going to work out.'",
        },
      ],
    },
    {
      id: "ex.pb1.11.9",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My goal is to be kinder to myself this year.",
      ipa: "maɪ ɡoʊl ɪz tə bi ˈkaɪndər tə maɪˈsɛlf ðɪs jɪər",
      tr_hint:
        "Sakin, kararlı. 'Kinder to myself' bağlanır. Cümle baskısız — bir söz verir gibi değil, tanıtır gibi.",
    },
  ],
};

// ============================================================
// Lesson 12 — Self-Care & Setting Limits
// ============================================================
export const personalB1Lesson_12: BundledLesson = {
  id: "personal.b1.self-care.1",
  skill_id: "personal.b1.self-care",
  index: 12,
  title: "Self-Care — Sınır Koyma",
  description:
    "'I need some me-time'. Suçluluksuz sınır. Sosyal medya molası, telefondan uzak akşam. Yetişkin self-care dili.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.12.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "me-time",
      tr_translation: "Kendine ayırılan vakit",
      example: "I need some me-time this weekend — nothing personal, just running low.",
      example_tr:
        "Bu hafta sonu biraz kendime vakte ihtiyacım var — kişisel değil, sadece tankım boşaldı.",
    },
    {
      id: "ex.pb1.12.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "burnout",
      tr_translation: "Tükenmişlik",
      example: "I've been close to burnout — I need to actually rest this time.",
      example_tr:
        "Tükenmişliğe yaklaşmıştım — bu sefer gerçekten dinlenmem gerek.",
    },
    {
      id: "ex.pb1.12.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu hafta sosyal medyadan ara veriyorum.",
      target: "I'm taking a break from social media this week.",
      accepted_variants: [
        "I'm off social media this week.",
        "I'm taking a week off social media.",
        "I'm staying off social this week.",
        "I'm having a social media break this week.",
        "Taking a break from social media for the week.",
      ],
      tr_hint:
        "'Take a break from + noun' = -den mola almak. Present continuous = bu hafta süren plan.",
    },
    {
      id: "ex.pb1.12.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu akşam gelemem — bencillikten değil, kendime nefes vermem lazım.",
      target: "I can't make it tonight — not being selfish, I just need to breathe.",
      accepted_variants: [
        "I can't make it tonight — it's not personal, I just need some space.",
        "Can't come tonight — not being rude, I just need a quiet evening.",
        "I won't make it tonight — I need an evening to myself, that's all.",
        "Can't tonight — I need to recharge, nothing personal.",
      ],
      tr_hint:
        "Sınır + güvence. 'Make it' = gelmek (informel). 'Need some space / need to breathe' = nefes alanı.",
    },
    {
      id: "ex.pb1.12.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm trying to set better ___ around work hours after seven.",
      answer: "boundaries",
      distractors: ["limits to", "borders", "frontiers"],
      tr_hint:
        "İlişkisel/iş sınırları için 'boundaries' standart. 'Limits' fiziksel sınır; 'borders/frontiers' ülke sınırı.",
    },
    {
      id: "ex.pb1.12.6",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "logging",
        "off",
        "early",
        "tonight",
        "to",
        "actually",
        "rest",
      ],
      correct_sentence: "I'm logging off early tonight to actually rest",
      tr_translation: "Bu gece gerçekten dinlenmek için erken bağlantıyı kesiyorum.",
    },
    {
      id: "ex.pb1.12.7",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Sorry I cannot come, I am very busy, maybe next time, I am tired also.",
      correct_sentence:
        "I can't make it tonight — I'm running on empty and need a quiet evening. Let's do it next week?",
      tr_explanation:
        "Yığın özür ('sorry...busy...tired') = suçluluk + belirsiz. Yetişkin sınır: net 'I can't', kısa gerçek sebep ('running on empty'), somut alternatif ('next week?'). 'Maybe' boş — somut gün öner.",
    },
    {
      id: "ex.pb1.12.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşın bu Cumartesi büyük doğum günü partisi yapıyor. Sen tükenmişsin — gelmeyeceksin. Mesajlaşıyorsunuz, sınır koyman lazım — sevgiyle.",
      npc_role: "Friend",
      setting: "Text exchange a day before her birthday party",
      turns: [
        {
          speaker: "npc",
          message:
            "You're still coming Saturday right? I'm so excited, everyone's confirmed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi).{0,20}(can we talk|i wanted to|i need to)",
            "(i can'?t make it|i won'?t make it|i'?m going to have to miss)",
            "(saturday|the party|your birthday)",
            "(i feel awful|i'?m sorry|i hate doing this)",
          ],
          hint_tr:
            "Yumuşak giriş + net mesaj. 'I can't make it' direkt ama nazik.",
        },
        {
          speaker: "npc",
          message:
            "Oh. Really? Is everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truth is|nothing dramatic)",
            "(i'?ve been close to burnout|i'?m running on empty|completely fried)",
            "(this week|lately|the last few weeks)",
            "(i need (a quiet|me-time|to actually rest))",
          ],
          hint_tr:
            "Gerçek sebep — tükenmişlik. Drama değil, dürüst durum.",
        },
        {
          speaker: "npc",
          message:
            "I get it, I do. I just — I really wanted you there. It feels like you've been pulling back from everyone.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s fair|i hear that|you'?re not wrong)",
            "(it'?s not about you|nothing personal|it'?s not personal)",
            "(i'?m trying to set|setting (better )?boundaries)",
            "(protect (my energy|my peace|my time))",
          ],
          hint_tr:
            "Duygusunu doğrula + kişiselleştirmemesini söyle. 'It's not about you' kalıbı.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Are you okay though? Like, really?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i will be|i'?m getting there|i'?m working on it)",
            "(taking (a break|some time|a step back))",
            "(from (social|work|everything))",
            "(thank you for asking|means a lot)",
          ],
          hint_tr:
            "Dürüst durumunu söyle + ona teşekkür et. Açık kalp + sınır.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Coffee next week, just us — and no excuses then.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|done|i'?d love that)",
            "(thank you for (getting it|understanding|being kind))",
            "(have the best night|enjoy saturday|celebrate enough for me)",
            "(i love you|love you)",
          ],
          hint_tr:
            "Anlaşma + sıcak kapanış. Suçluluk değil — sevgi.",
        },
      ],
    },
    {
      id: "ex.pb1.12.9",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Me-time' ne demek?",
          options: [
            "Benim zamanım = saatim",
            "Kendime ayırdığım vakit",
            "Toplantı saati",
            "Yalnız olduğum anlar (üzgün)",
          ],
          correct_index: 1,
          tr_explanation:
            "'Me-time' = bilinçli kendine ayrılmış vakit (self-care). Pozitif. 'Lonely' değil 'alone-by-choice'.",
        },
        {
          question: "Sağlıklı sınır cümlesi hangisi?",
          options: [
            "Sorry I cannot, I am busy",
            "Maybe next time",
            "I can't make it tonight — let's do next week?",
            "I will try to come",
          ],
          correct_index: 2,
          tr_explanation:
            "Net 'can't' + somut alternatif ('next week?') = yetişkin sınır. 'Maybe / I will try' = belirsiz, güven vermez.",
        },
        {
          question: "'Burnout' Türkçesi?",
          options: ["Sıkılma", "Tükenmişlik", "Yorgunluk (fiziksel)", "Hayal kırıklığı"],
          correct_index: 1,
          tr_explanation:
            "'Burnout' = tükenmişlik (zihinsel + duygusal). 'Tired' = yorgun (fiziksel). 'Burnout' daha derin, klinik.",
        },
      ],
    },
    {
      id: "ex.pb1.12.10",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm taking a break from social media this week.",
      ipa: "aɪm ˈteɪkɪŋ ə breɪk frəm ˈsoʊʃəl ˈmiːdiə ðɪs wiːk",
      tr_hint:
        "'Taking a break' bağlı — 'tey-kın-ı-breyk'. 'Social media' = 'soʊ-şıl-miː-di-ə'. Sakin, savunmasız.",
    },
  ],
};

// ============================================================
// Lesson 13 — Picking Up a New Hobby
// ============================================================
export const personalB1Lesson_13: BundledLesson = {
  id: "personal.b1.new-hobby.1",
  skill_id: "personal.b1.new-hobby",
  index: 13,
  title: "Yeni Hobi Başlama — Paylaşım",
  description:
    "'I've gotten into pottery.' Yeni başladığın şeyi heyecanla ama abartmadan paylaş. Türkçe 'I started to do X' yerine yetişkin yapı.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.13.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I've gotten into",
      tr_translation: "... ile ilgilenmeye başladım / merak sardım",
      example: "I've gotten into pottery — total beginner, but I'm loving it.",
      example_tr:
        "Çömlekçilikle ilgilenmeye başladım — tamamen acemiyim ama bayılıyorum.",
    },
    {
      id: "ex.pb1.13.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "creative outlet",
      tr_translation: "Yaratıcı çıkış / yaratıcılığı boşaltma alanı",
      example: "It's been a creative outlet — I needed something not on a screen.",
      example_tr:
        "Yaratıcı bir çıkış oldu — ekran dışı bir şeye ihtiyacım vardı.",
    },
    {
      id: "ex.pb1.13.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Birkaç aydır çömlekçilik yapıyorum — beklediğimden çok daha rahatlatıcı.",
      target: "I've been doing pottery for a few months — way more calming than I expected.",
      accepted_variants: [
        "I've been into pottery for a couple of months — more relaxing than I thought.",
        "I started pottery a few months ago — surprisingly calming.",
        "I've been doing pottery for a few months — really therapeutic, actually.",
        "I picked up pottery a few months back — it's been so calming.",
      ],
      tr_hint:
        "Present perfect continuous ('I've been doing') = devam eden hobi. 'Way more X than expected' = beklediğimden çok daha X.",
    },
    {
      id: "ex.pb1.13.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İyi olmak için değil — sadece elimle bir şey yapmak için yapıyorum.",
      target: "I'm not doing it to be good at it — just to make something with my hands.",
      accepted_variants: [
        "I'm not in it to be good — I just like making something with my hands.",
        "It's not about being good — it's about using my hands.",
        "I don't care about being good — I just want to make stuff with my hands.",
        "Not trying to master it — just enjoying using my hands.",
      ],
      tr_hint:
        "Yetişkin hobi felsefesi — başarı baskısı yok. 'To be good at + noun' kalıbı.",
    },
    {
      id: "ex.pb1.13.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I picked ___ guitar again after maybe ten years off.",
      answer: "up",
      distractors: ["on", "out", "in"],
      tr_hint:
        "'Pick up + noun' = bir hobiye/aktiviteye (yeniden) başlamak. 'Pick on' = sataşmak (farklı anlam).",
    },
    {
      id: "ex.pb1.13.6",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "it's",
        "been",
        "a",
        "really",
        "good",
        "creative",
        "outlet",
        "for",
        "me",
      ],
      correct_sentence: "it's been a really good creative outlet for me",
      tr_translation: "Benim için gerçekten iyi bir yaratıcı çıkış oldu.",
    },
    {
      id: "ex.pb1.13.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I started to make new hobby. I do pottery class one time every week.",
      correct_sentence:
        "I've gotten into pottery — I've been going to a class once a week, and it's been a great creative outlet.",
      tr_explanation:
        "'Make new hobby' Türkçeden direkt çeviri (yanlış). 'Hobi yapmak' İngilizcede yok — 'pick up / get into + spesifik hobi'. 'One time every week' yerine 'once a week' (standart). Present perfect ('I've been going') = devam eden alışkanlık.",
    },
    {
      id: "ex.pb1.13.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yıl sonu buluşmasında eski iş arkadaşınla. 'Boş zamanlarında ne yapıyorsun?' diye soruyor. Yeni hobinden bahset — natürel, abartısız.",
      npc_role: "Friend",
      setting: "End-of-year catch-up coffee",
      turns: [
        {
          speaker: "npc",
          message:
            "Outside work — what's been keeping you busy lately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve actually|honestly|funnily enough)",
            "(gotten into|picked up|started)",
            "(pottery|painting|climbing|cooking|guitar|knitting|running)",
            "(a few months ago|recently|this year)",
          ],
          hint_tr:
            "'I've gotten into / I've picked up + hobi'. Ne zaman başladığını ekle.",
        },
        {
          speaker: "npc",
          message:
            "Oh wow, where did that come from? I don't remember you being into that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truth is|yeah it'?s new)",
            "(i needed|i was looking for|i wanted)",
            "(something (off|not on) (a )?screen|something with my hands)",
            "(creative outlet|to switch off|away from work)",
          ],
          hint_tr:
            "Niye başladığını söyle. 'Needed something with my hands / off-screen' kalıpları.",
        },
        {
          speaker: "npc",
          message:
            "Are you any good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truly|terrible|awful|not really)",
            "(i'?m (not |)trying to be good|not in it to be good)",
            "(it'?s not about|that'?s not the point)",
            "(just (enjoying|loving|doing) (it|the process))",
          ],
          hint_tr:
            "Mütevazı ama net. 'I'm not in it to be good' = başarı için yapmıyorum.",
        },
        {
          speaker: "npc",
          message:
            "I love that. I keep thinking I should pick something up too. What made you actually start instead of just talking about it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (just )?signed up|i booked|i paid for)",
            "(a (taster|first|trial) class|a beginner course)",
            "(before i (could )?talk myself out|before overthinking)",
            "(low stakes|nothing fancy|small commitment)",
          ],
          hint_tr:
            "Somut ilk adımını paylaş. 'Sign up for a class' / 'before I could talk myself out of it'.",
        },
        {
          speaker: "npc",
          message:
            "Okay, I needed to hear that. Send me where you go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|of course|will do)",
            "(i'?ll text|i'?ll send|i'?ll drop the link)",
            "(small studio|nothing fancy|down in)",
            "(come along|come with me|join one)",
          ],
          hint_tr:
            "Olumlu paylaşım + onu davet et. 'Come along to a class' kalıbı.",
        },
      ],
    },
    {
      id: "ex.pb1.13.9",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'I've gotten into pottery' ne demek?",
          options: [
            "Çömlekçilik içine düştüm (kaza)",
            "Çömlekçilikle ilgilenmeye başladım",
            "Çömlekçilik bitti",
            "Çömlekçiliği iyi biliyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Get into + hobi/konu' = -ye merak sarmak, ilgilenmeye başlamak. Yeni başlangıçlar için doğal kalıp.",
        },
        {
          question: "'Yeni bir hobi yapıyorum' İngilizce doğru hangisi?",
          options: [
            "I make a new hobby.",
            "I do new hobby.",
            "I've picked up a new hobby.",
            "I am hobby new.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Pick up a hobby' = bir hobiye başlamak (doğal kalıp). 'Make/do a hobby' Türkçeden direkt çeviri — yanlış.",
        },
        {
          question: "'Creative outlet' Türkçesi?",
          options: [
            "Yaratıcı mağaza",
            "Yaratıcı çıkış / boşaltma alanı",
            "Yaratıcı kişi",
            "Yaratıcı eksiklik",
          ],
          correct_index: 1,
          tr_explanation:
            "'Outlet' burada 'çıkış kanalı' anlamında. Stres + duygu için yaratıcı bir kanal. Wellness vocab.",
        },
      ],
    },
    {
      id: "ex.pb1.13.10",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I've gotten into pottery — it's been a real creative outlet.",
      ipa: "aɪv ˈɡɒtən ˈɪntə ˈpɒtəri ɪts bɪn ə riːl kriˈeɪtɪv ˈaʊtlɛt",
      tr_hint:
        "'I've gotten into' bağlanır — 'ayv-gat-nin-tu'. 'Creative outlet' = 'kri-ey-tiv-aut-let'. Heyecanlı ama abartısız.",
    },
  ],
};

// ============================================================
// Lesson 14 — Therapy & Well-being: Talking Openly
// ============================================================
export const personalB1Lesson_14: BundledLesson = {
  id: "personal.b1.therapy.1",
  skill_id: "personal.b1.therapy",
  index: 14,
  title: "Therapy / Well-being — Açık Konuşma",
  description:
    "'I started seeing a therapist' — utanmadan, drama yapmadan. Türk için yeni alan: terapi ABD/UK'da standart, stigma az. Açık + sınırlı paylaşım.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pb1.14.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I started seeing a therapist",
      tr_translation: "Bir terapiste görünmeye / gitmeye başladım",
      example: "I started seeing a therapist a few months ago — it's been really helpful.",
      example_tr:
        "Birkaç ay önce bir terapiste gitmeye başladım — gerçekten faydalı oldu.",
    },
    {
      id: "ex.pb1.14.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It's been really helpful",
      tr_translation: "Gerçekten faydalı oldu / iyi geliyor",
      example: "It's been really helpful — small shifts, but real ones.",
      example_tr:
        "Gerçekten faydalı oldu — küçük değişimler ama gerçek olanlar.",
    },
    {
      id: "ex.pb1.14.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Birkaç aydır terapiye gidiyorum — kendi kendime fark edemediğim şeyleri çözmeme yardım ediyor.",
      target:
        "I've been in therapy for a few months — it's helping me work through things I couldn't see on my own.",
      accepted_variants: [
        "I've been seeing a therapist for a few months — it's helping me with stuff I couldn't see by myself.",
        "I've been doing therapy for a few months — it's helping me unpack things.",
        "I've been in therapy a few months now — it's been good for working through things.",
        "I've been seeing someone for a few months — it's been helpful in ways I didn't expect.",
      ],
      tr_hint:
        "'I've been in therapy / seeing a therapist / doing therapy' — üçü de doğal. 'Work through' = (duygu/sorunu) çalışıp çözmek.",
    },
    {
      id: "ex.pb1.14.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Detaya girmek istemiyorum ama iyi bir yerdeyim ve sormana sevindim.",
      target: "I'd rather not get into the details, but I'm in a good place — and thanks for asking.",
      accepted_variants: [
        "I won't go into details, but I'm doing okay — and I appreciate you asking.",
        "I'll keep the details to myself, but I'm in a good place — thanks for checking in.",
        "I'd rather not unpack the whole thing, but I'm okay — really, thanks for asking.",
        "Not getting into the specifics, but I'm in a better place — and means a lot you asked.",
      ],
      tr_hint:
        "Sınır + sıcaklık. 'I'd rather not + base' = -mek istemem. 'In a good place' = duygusal olarak iyi.",
    },
    {
      id: "ex.pb1.14.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "It's just nice to have someone outside my life who I can ___ openly with.",
      answer: "talk",
      distractors: ["speak to", "tell", "say"],
      tr_hint:
        "'Talk openly with someone' = biriyle açık konuşmak. 'Speak to' edat farkı; 'tell/say' yanlış kalıp (nesne ister).",
    },
    {
      id: "ex.pb1.14.6",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I've",
        "been",
        "seeing",
        "a",
        "therapist",
        "and",
        "it's",
        "been",
        "really",
        "helpful",
      ],
      correct_sentence: "I've been seeing a therapist and it's been really helpful",
      tr_translation: "Bir terapiste gidiyorum ve gerçekten faydalı oldu.",
    },
    {
      id: "ex.pb1.14.7",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I go to psychologist because I am crazy, please don't tell anyone, it's secret.",
      correct_sentence:
        "I've been seeing a therapist — it's been really helpful, actually. Nothing dramatic, just working through some stuff.",
      tr_explanation:
        "ABD/UK kültüründe terapi normal — 'crazy / secret' damgalama Türkçe refleksi. Yetişkin: utanma yok, sadece açık + sınırlı paylaşım. 'Working through some stuff' = belirsiz ama dürüst (detaya girmeden kabul). 'Psychologist' yerine 'therapist' günlük dilde daha yaygın.",
    },
    {
      id: "ex.pb1.14.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yakın arkadaşın 'son zamanlarda nasılsın?' diye soruyor — gerçekten merak ediyor. Terapiye gittiğini bu sefer paylaşmaya karar verdin.",
      npc_role: "Close friend",
      setting: "Quiet dinner, just the two of you",
      turns: [
        {
          speaker: "npc",
          message:
            "How are you actually doing these days? Not the surface answer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truth is|good question)",
            "(better|getting there|in a better place)",
            "(than (i was|six months ago|last year))",
            "(there'?s actually|i'?ve actually got)",
          ],
          hint_tr:
            "Yüzeyel cevap verme — dürüst başla. 'Honestly, I'm in a better place than I was'.",
        },
        {
          speaker: "npc",
          message:
            "Yeah? Tell me. What's changed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i started|i'?ve been) (seeing a therapist|in therapy|doing therapy)",
            "(a few months ago|back in|since)",
            "(it'?s been (really |)helpful|it'?s helping)",
            "(working through|figuring out|making sense of)",
          ],
          hint_tr:
            "Net açıkla. 'I started seeing a therapist + ne zaman + nasıl gidiyor'.",
        },
        {
          speaker: "npc",
          message:
            "Oh — that's a big step. I'm really glad. Was it hard to start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|honestly|harder than i thought)",
            "(the (first|hardest) part was)",
            "(admitting (i needed|to myself)|booking the (first|actual) session)",
            "(once i did|after that|once i started)",
          ],
          hint_tr:
            "Başlamanın zorluğunu paylaş. 'Admitting I needed it' / 'Booking the first session'.",
        },
        {
          speaker: "npc",
          message:
            "Can I ask what you're working on, or is that too much?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d rather not|i'?ll keep the details|not getting into specifics)",
            "(but (i appreciate|thanks for|it means))",
            "(big stuff|some old patterns|things i couldn'?t see)",
            "(i'?m in a good place|i'?m okay)",
          ],
          hint_tr:
            "Sınır + sıcaklık. 'I'd rather not get into the details, but thanks for asking'.",
        },
        {
          speaker: "npc",
          message:
            "Totally fair. I just — I'm proud of you. That takes guts.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|means a lot|that means a lot)",
            "(genuinely|honestly|really)",
            "(coming from you|hearing that)",
            "(i'?m glad i (told|said|shared))",
          ],
          hint_tr:
            "Sıcaklığı kabul et — geri çevirme. 'That means a lot, genuinely'.",
        },
      ],
    },
    {
      id: "ex.pb1.14.9",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Terapiye gittiğini paylaşırken yetişkin tonu hangisi?",
          options: [
            "I go to psychologist because I am crazy",
            "It is my secret, please don't tell",
            "I've been seeing a therapist — it's been really helpful",
            "I have psychological problem",
          ],
          correct_index: 2,
          tr_explanation:
            "Present perfect ('I've been seeing') + sakin değer yargısı ('really helpful') = utanmasız + yetişkin. ABD/UK'da terapi normal — 'crazy/secret/problem' damgalama dili.",
        },
        {
          question: "'Work through' fiili ne anlama gelir?",
          options: [
            "İş üzerinde çalışmak",
            "(Duygu/sorun) çalışıp anlamak, çözmeye çalışmak",
            "Saatleri uzatmak",
            "İşten kaçmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Work through' = (zor bir şeyi) zamanla işleyip anlamak. Terapi/duygusal süreçler için temel fiil.",
        },
        {
          question: "Detay vermek istemediğinde en doğal sınır cümlesi hangisi?",
          options: [
            "Don't ask me, it's private!",
            "I cannot say, sorry sorry.",
            "I'd rather not get into the details, but thanks for asking.",
            "It's none of your business.",
          ],
          correct_index: 2,
          tr_explanation:
            "'I'd rather not + base' = nazik sınır. 'Thanks for asking' = duygusal sıcaklık. Diğerleri ya agresif ya da utanç dolu.",
        },
      ],
    },
    {
      id: "ex.pb1.14.10",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I started seeing a therapist — it's been really helpful.",
      ipa: "aɪ ˈstɑːrtɪd ˈsiːɪŋ ə ˈθɛrəpɪst ɪts bɪn ˈriːli ˈhɛlpfəl",
      tr_hint:
        "Sakin, savunmasız. 'Therapist' = 'θɛr-ə-pɪst' (th sesi — dil dişlerin arasında). 'Really helpful' bağlı. Utançsız, doğal.",
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const personalB1Lessons: BundledLesson[] = [
  personalB1Lesson_1,
  personalB1Lesson_2,
  personalB1Lesson_3,
  personalB1Lesson_4,
  personalB1Lesson_5,
  personalB1Lesson_6,
  personalB1Lesson_7,
  personalB1Lesson_8,
  personalB1Lesson_9,
  personalB1Lesson_10,
  personalB1Lesson_11,
  personalB1Lesson_12,
  personalB1Lesson_13,
  personalB1Lesson_14,
];