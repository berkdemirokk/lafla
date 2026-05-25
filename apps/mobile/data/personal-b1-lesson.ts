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
  id: "ex.personal_b1_dating_app_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_dating_app_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_dating_app_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_dating_app_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_dating_app_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_dating_app_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_dating_app_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_dating_app_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_dating_app_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_dating_app_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_dating_app_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_dating_app_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_dating_app_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.1.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "What got you into that",
      tr_translation: "O alana nasıl yöneldin / nasıl başladın",
      example: "Saw you teach yoga — what got you into that?",
      example_tr: "Yoga eğittiğini gördüm — bu alana nasıl yöneldin?",
    },
    {
      id: "ex.pb1.1.2",
      type: "vocab_tile",
      cefr_band: "A2",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Saw you ___ in your bio — what ___ you ___?",
      slots: [
        { accepted: ["mentioned hiking", "love yoga", "teach piano", "travel a lot"], distractors: ["are good", "look nice", "wrote stuff"] },
        { accepted: ["got", "drew", "led"], distractors: ["made", "took", "was"] },
        { accepted: ["into that", "to it", "started"], distractors: ["doing it", "to that thing", "go there"] },
      ],
      tr_hint:
        "Bio referans + soru — modern dating app açılışı. 'What got you into X?' = ortak alana giriş. Türk öğrenci 'You are nice' der — boş + kaba.",
      example_filled: "Saw you mentioned hiking in your bio — what got you into that?",
    },
    {
      id: "ex.pb1.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Haha that's so random — I started during the pandemic actually. You?" },
        { speaker: "user" },
        { speaker: "npc", text: "Same here! Have you tried the bigger ones up north?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(same here|me too|honestly same)",
        "(i (started|got into it)) (last year|during|after)",
        "(we (actually )?have that in common)",
        "(funny enough|coincidentally)",
      ],
      tr_hint:
        "Eşleşme paylaştı — ortak noktayı vurgula. 'Same here — I started last year' veya 'We have that in common.' Türk öğrenci 'OK' der — momentum öldü.",
      ideal_answer: "Same here — I got into it last year. We actually have that in common!",
    },
    {
      id: "ex.pb1.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I usually keep things light early on — what are you looking for on here?",
      accepted_patterns: [
        "(honestly|to be honest)(,)? (something (real|genuine|serious))",
        "(open to (seeing where things go|something serious))",
        "(i'?m (looking|here) for (a connection|something genuine))",
        "(how about you|what about you)",
      ],
      think_seconds: 3,
      tr_hint:
        "Eşleşme niyet sordu — net + samimi. 'Honestly, something genuine' veya 'Open to seeing where it goes. You?' Türk öğrenci sıkışır — açık ol.",
      ideal_response: "Honestly, something real — open to seeing where it goes. How about you?",
    },
    {
      id: "ex.pb1.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Çok güzelsin, numaranı verir misin?",
      wrong_en: "You are very beautiful, give me your number.",
      right_en: "I've enjoyed chatting — would you be up for grabbing a coffee sometime?",
      why_tr:
        "Türk öğrenci ilk mesajda 'beautiful' + number direkt ister — yoğun + creepy. Modern yaklaşım: sohbete değer ver + ortak adım öner. 'Grabbing a coffee' = hafif, baskısız.",
    },
    {
      id: "ex.pb1.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Dating app'ta ilk mesaj — en güçlü açılış?",
          options: [
            "Hi beautiful.",
            "Saw you mentioned hiking — what got you into that?",
            "Send me number.",
            "You like me?",
          ],
          correct: 1,
          tr_explanation: "Bio referans + soru = ilgi gösterir, momentum başlatır.",
        },
        {
          q: "'We have that in common' ne demek?",
          options: [
            "Ortaklığımız var.",
            "Bu konuda ortak noktamız var.",
            "Genel olarak iyiyiz.",
            "Benziyoruz.",
          ],
          correct: 1,
          tr_explanation: "'Have X in common' = ortak nokta. Bağ kurma kalıbı.",
        },
        {
          q: "'What got you into X?' nasıl çevirilir?",
          options: [
            "X'in nesi var?",
            "X'e nasıl başladın / yöneldin?",
            "X içeriden mi?",
            "X şart mı?",
          ],
          correct: 1,
          tr_explanation: "'Got into' = (alana, hobby) yöneldim. 'What got you into yoga?' = nasıl başladın?",
        },
        {
          q: "Numara isteme — en doğal modern?",
          options: [
            "Give me your number.",
            "Would you be up for moving this off the app?",
            "Phone please.",
            "Where you live?",
          ],
          correct: 1,
          tr_explanation: "'Moving this off the app' = app'ten çıkıp WhatsApp/telefona geçmek. Modern + kibar.",
        },
        {
          q: "'I keep things light early on' ne demek?",
          options: [
            "Hafif şeyler yaparım.",
            "Başlangıçta her şeyi rahat/derinleştirmeden tutarım.",
            "Karanlıkta otururum.",
            "Az konuşurum.",
          ],
          correct: 1,
          tr_explanation: "'Keep things light' = derinleştirmeden, rahat sohbet. Dating tek tonun değil = sağlıklı.",
        },
      ],
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
  id: "ex.personal_b1_first_date_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_first_date_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_first_date_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_first_date_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_first_date_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_first_date_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_first_date_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_first_date_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_first_date_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_first_date_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_first_date_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_first_date_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_first_date_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.2.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "What does a normal week look like for you",
      tr_translation: "Senin normal bir haftan nasıl geçer",
      example: "So what does a normal week look like for you?",
      example_tr: "Peki senin normal bir haftan nasıl geçer?",
    },
    {
      id: "ex.pb1.2.2",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I'd rather ___ for ___.",
      slots: [
        { accepted: ["save that", "wait", "talk about that", "leave that"], distractors: ["tell", "say"] },
        { accepted: ["when we know each other better", "another time", "later", "the next date"], distractors: ["when know", "for know"] },
      ],
      tr_hint:
        "Sınır koyma kalıbı: 'I'd rather save that for when we know each other better.' Türk öğrenci 'I don't want to say' der — abrupt. 'I'd rather' = nazik sınır.",
      example_filled: "I'd rather save that for when we know each other better.",
    },
    {
      id: "ex.pb1.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "So what's your story? Why are you in this city?" },
        { speaker: "user" },
        { speaker: "npc", text: "I love that — what made you take the leap?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i moved here )(for|because of) (work|a job|family|love|study)",
        "(i ('ve| have)) been here for [a-z0-9]+ (year|month)",
        "(originally from )(turkey|istanbul)(,)? (and i)",
        "(long story (short)?)(,)? (i)",
      ],
      tr_hint:
        "Hikaye paylaşma: 'I moved here for work two years ago.' Türk öğrenci özet verir — bağlam ekle.",
      ideal_answer: "I moved here for work two years ago — originally from Istanbul.",
    },
    {
      id: "ex.pb1.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What about exes — anything serious recently?",
      accepted_patterns: [
        "(i('d| would) rather (save|leave|wait)) (that|it)",
        "(yeah(,)? )?(there was )?(something serious)(,)? (but )",
        "(nothing (recent|too recent))",
        "(maybe for (the next|another) (date|conversation))",
      ],
      think_seconds: 3,
      tr_hint:
        "Hassas soru: 'I'd rather save that for later in the conversation.' Türk öğrenci ya tüm acıyı döker ya sus kalır. Olgun: sınır + olumlu ton.",
      ideal_response: "I'd rather save that for when we know each other a bit better.",
    },
    {
      id: "ex.pb1.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Eski sevgilim deliydi.",
      wrong_en: "My ex was crazy.",
      right_en: "I came out of a difficult relationship — I'd rather save the details.",
      why_tr:
        "İlk randevuda eski partneri 'crazy' demek = klasik kırmızı bayrak. Olgun: ilişkiyi tanımla ('difficult'), kendinden konuş, detay erteleme.",
    },
    {
      id: "ex.pb1.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "İlk randevuda eski partner anlatımı?",
          options: [
            "My ex was crazy.",
            "I came out of a difficult relationship — I'd rather save the details.",
            "Don't ask about that.",
            "I hate them.",
          ],
          correct: 1,
          tr_explanation: "'Difficult' = etiketsiz tanım. 'I'd rather save' = nazik sınır. 'Crazy' = kırmızı bayrak.",
        },
        {
          q: "'I'd rather + base verb' = ?",
          options: [
            "Tercih ederim ki yap.",
            "Tercih ederim (yapmam yerine).",
            "Yapmalıyım.",
            "Bilmiyorum.",
          ],
          correct: 1,
          tr_explanation: "'I'd rather + base' = tercih ederim. 'I'd rather not' = tercih etmem. Kibar sınır.",
        },
        {
          q: "'What's your story?' = ?",
          options: [
            "Hikayen ne (genel sor).",
            "Hangi kitap?",
            "Hangi şarkı?",
            "Yalan söyleme.",
          ],
          correct: 0,
          tr_explanation: "'What's your story?' = idiom: kendinden bahset. İlk randevu klasik sorusu.",
        },
        {
          q: "'Oversharing' = ?",
          options: [
            "Çok az paylaşmak.",
            "Çok hızlı/derin paylaşım (rahatsızlık verici).",
            "Paylaşmamak.",
            "Yalan paylaşmak.",
          ],
          correct: 1,
          tr_explanation: "'Oversharing' = idiom: ilk randevuda terapi seansı seviyesi paylaşım. Kaçınılmalı.",
        },
        {
          q: "'Take the leap' = ?",
          options: [
            "Adım atma cesareti.",
            "Atla.",
            "Yüksek atla.",
            "Atla geç.",
          ],
          correct: 0,
          tr_explanation: "'Take the leap' = idiom: büyük adım atma cesareti. Taşınma, iş değiştirme vb.",
        },
      ],
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
  id: "ex.personal_b1_culture_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_culture_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_culture_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_culture_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_culture_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_culture_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_culture_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_culture_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_culture_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_culture_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_culture_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_culture_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_culture_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.3.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "It's more nuanced than that",
      tr_translation: "Aslında bundan daha karmaşık / nüanslı",
      example: "Turkey isn't one thing — it's more nuanced than that.",
      example_tr: "Türkiye tek bir şey değil — aslında bundan daha karmaşık.",
    },
    {
      id: "ex.pb1.3.2",
      type: "vocab_tile",
      cefr_band: "A2",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "In Turkey, we ___ — but ___.",
      slots: [
        { accepted: ["live close to family", "visit a lot", "share meals daily", "stay connected"], distractors: ["love more", "are better"] },
        { accepted: ["that doesn't mean better or worse", "I know every culture is different", "I'd love to hear yours too", "we frame closeness differently"], distractors: ["yours is wrong", "you're cold"] },
      ],
      tr_hint:
        "Kültür anlatımı: 'In Turkey, we live close to family — but I know every culture is different.' Türk öğrenci 'biz daha çok seviyoruz' der — yargılı. Eşitlikçi ol.",
      example_filled: "In Turkey, we live close to family — but I know every culture is different.",
    },
    {
      id: "ex.pb1.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "So why do you call your mom every day? Isn't that a bit much?" },
        { speaker: "user" },
        { speaker: "npc", text: "Oh, that's actually really sweet. I see it differently now." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(in turkey|in (turkish|my) culture)(,)? (we|family)",
        "(it ('s| is) just) (how (we|i) (grew up|do family))",
        "(that ('s| is) (just )?(close family)|how (we|families) (stay )?connected)",
      ],
      tr_hint:
        "Kültür açıklama: 'In Turkey, daily calls are how we stay close — it's not control, it's warmth.' Türk öğrenci 'because we love' der — yetersiz. Bağlam ver.",
      ideal_answer: "In Turkey, daily calls are how families stay close — it's warmth, not control.",
    },
    {
      id: "ex.pb1.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's the biggest culture shock for you here?",
      accepted_patterns: [
        "(probably|honestly|i think) the (way|how) (people|families)",
        "(how (independent|distant|self-reliant)) (everyone|people)",
        "(small talk|the food|the silence)",
        "(it ('s| is)) different at first(,)? (but )?(i ('ve| have))",
      ],
      think_seconds: 3,
      tr_hint:
        "Kültür şoku: 'How independent everyone is, honestly. It was different at first, but I've come to appreciate it.' Türk öğrenci yargılı söyler — denge tut.",
      ideal_response: "Honestly, how independent everyone is — but I've come to appreciate it.",
    },
    {
      id: "ex.pb1.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sizin kültürünüz soğuk.",
      wrong_en: "Your culture is so cold.",
      right_en: "Our cultures just frame family closeness differently.",
      why_tr:
        "Türk öğrenci 'sizin/bizim' karşıtlığı kurar — yargılı. Olgun çapraz kültür: 'frame differently' = eşit, hiyerarşi yok. Korumak ilişkiyi korur.",
    },
    {
      id: "ex.pb1.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Kültür anlatımı?",
          options: [
            "We love more than westerners.",
            "Our cultures just frame closeness differently.",
            "Your culture is cold.",
            "We're better.",
          ],
          correct: 1,
          tr_explanation: "'Frame differently' = eşit çerçeve. 'Better/worse' = hiyerarşi (riskli).",
        },
        {
          q: "'Culture shock' = ?",
          options: [
            "Kültür şoku (yeni kültüre uyum güçlüğü).",
            "Kültür elektriği.",
            "Kültür sürprizi.",
            "Kültür kaybı.",
          ],
          correct: 0,
          tr_explanation: "'Culture shock' = yeni kültüre uyum sürecinde yaşanan zorluk. Yaygın terim.",
        },
        {
          q: "'Come to appreciate' = ?",
          options: [
            "Takdir etmeye geldim.",
            "Zamanla değer vermeyi öğrendim.",
            "Takdir et şimdi.",
            "Asla takdir etmem.",
          ],
          correct: 1,
          tr_explanation: "'Come to + verb' = idiom: zamanla bir hisse/anlayışa varmak. Olgun ifade.",
        },
        {
          q: "Karşılıklı saygı kalıbı?",
          options: [
            "We love more.",
            "Neither one cares less.",
            "You are wrong.",
            "I'm right.",
          ],
          correct: 1,
          tr_explanation: "'Neither X nor Y cares less' = hiyerarşiyi reddetme. Eşitlikçi.",
        },
        {
          q: "Kültür açıklamasında neyden kaçınmalı?",
          options: [
            "Yargılayıcı dil ('cold', 'bad').",
            "Spesifik örnek.",
            "Mizah.",
            "Kişisel deneyim.",
          ],
          correct: 0,
          tr_explanation: "Yargı/etiket sağlıklı diyaloğu öldürür. Spesifik örnek, mizah, kişisel deneyim faydalı.",
        },
      ],
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
  id: "ex.personal_b1_we_need_to_talk_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_we_need_to_talk_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.4.1",
      type: "vocab_tile",
      cefr_band: "A1",
      difficulty: 2,
      word_or_phrase: "There's something on my mind",
      tr_translation: "Aklımda bir şey var (sakin giriş)",
      example: "Hey — there's something on my mind, do you have a minute?",
      example_tr: "Bak — aklımda bir şey var, bir dakikan var mı?",
    },
    {
      id: "ex.pb1.4.2",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B2",
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
    {
      id: "ex.pb1.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "When ___ , I felt ___.",
      slots: [
        { accepted: ["dinner ran long", "you didn't text back", "the call cut off", "I didn't hear from you"], distractors: ["you always", "you never"] },
        { accepted: ["unheard", "a bit alone", "overlooked", "shut out"], distractors: ["bad", "mad"] },
      ],
      tr_hint:
        "I-statement zor konuşma: 'When dinner ran long, I felt unheard.' Türk öğrenci 'You always...' der — saldırı. Spesifik durum + duygu.",
      example_filled: "When dinner ran long last night, I felt unheard.",
    },
    {
      id: "ex.pb1.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "What's going on? You've been quiet all day." },
        { speaker: "user" },
        { speaker: "npc", text: "Thanks for telling me. Can we sit and talk?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can we (talk|sit down))(,)? (i('ve| have) been)",
        "(there('s| is) something) (i want to|on my mind)",
        "(i('ve| have) been (sitting with)) something",
      ],
      tr_hint:
        "Zor konuşma açılışı: 'Can we sit down? There's something I want to talk through.' Türk öğrenci patlar — yumuşat.",
      ideal_answer: "Can we sit down? There's something I want to talk through.",
    },
    {
      id: "ex.pb1.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I didn't mean to hurt you.",
      accepted_patterns: [
        "(i (hear|know|believe) that)",
        "(i don'?t think you (did|meant) (it )?on purpose)",
        "(it (still |just )?hurt)",
        "(i (need|wanted) (you )?to know)",
      ],
      think_seconds: 3,
      tr_hint:
        "Niyetsizlik kabul + duygu paylaşma: 'I hear you didn't mean to — and it still hurt.' Türk öğrenci 'okay' der — duyguyu bastır. Olgun: duygu kalır.",
      ideal_response: "I hear that — and it still hurt.",
    },
    {
      id: "ex.pb1.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen hep beni umursamıyorsun.",
      wrong_en: "You never care about me.",
      right_en: "When dinner ran long last night, I felt unheard.",
      why_tr:
        "Türk öğrenci 'always/never' + karakterleme yapar — Gottman'ın 'Four Horsemen'i. Doğru: spesifik olay + I-statement. Saldırı yerine paylaşım.",
    },
    {
      id: "ex.pb1.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Four Horsemen' (Gottman)?",
          options: [
            "İlişkide yıkıcı 4 örüntü: eleştiri, küçümseme, savunma, duvar örme.",
            "Bir film.",
            "Atlar.",
            "Dövüş tekniği.",
          ],
          correct: 0,
          tr_explanation: "Gottman çift terapisi: Criticism, Contempt, Defensiveness, Stonewalling. Ayrılığı yüksek olasılıkla öngörür.",
        },
        {
          q: "I-statement vs You-statement?",
          options: [
            "I felt X (sahiplen) vs You did X (saldırı).",
            "I vs You — fark yok.",
            "I konuşma, You yazı.",
            "İkisi de eşit.",
          ],
          correct: 0,
          tr_explanation: "'I felt' = duyguyu sahiplenir. 'You always' = karakter saldırısı.",
        },
        {
          q: "'Always/never' tehlikesi?",
          options: [
            "Yok, doğru kullanım.",
            "Genelleme/abartı → savunma tetikler.",
            "Yalnız resmi.",
            "Konuşmada yaygın.",
          ],
          correct: 1,
          tr_explanation: "'Always/never' abartı — karşı taraf 'son sefer X yaptım' der, konu bozulur.",
        },
        {
          q: "'Sit with it' = ?",
          options: [
            "Onunla otur.",
            "Duyguyu hisset, acele etme.",
            "Yanına otur.",
            "Bekle git.",
          ],
          correct: 1,
          tr_explanation: "'Sit with X' = idiom: duyguyu/konuyu acele etmeden işle. Olgun ifade.",
        },
        {
          q: "Onarım girişimi (repair attempt)?",
          options: [
            "Şaka, dokunma, kısa özür — bağı yenileme.",
            "Sadece sözel.",
            "Sessizlik.",
            "Tartışmaya devam.",
          ],
          correct: 0,
          tr_explanation: "Gottman: 'repair attempt' = bağlantı kurma denemesi. Birçok form alır.",
        },
      ],
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
  id: "ex.personal_b1_in_laws_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_in_laws_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_in_laws_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_in_laws_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_in_laws_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_in_laws_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_in_laws_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_in_laws_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_in_laws_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_in_laws_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_in_laws_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_in_laws_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_in_laws_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.5.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "Thank you for having me",
      tr_translation: "Beni misafir ettiğiniz için teşekkürler",
      example: "Thank you for having me — Maria's told me so much about you.",
      example_tr: "Beni misafir ettiğiniz için teşekkürler — Maria sizden çok bahsetti.",
    },
    {
      id: "ex.pb1.5.2",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "It means a lot to ___ ___.",
      slots: [
        { accepted: ["meet you", "be here", "be invited", "be part of this"], distractors: ["see", "knowing"] },
        { accepted: ["finally", "tonight", "in person", "after hearing so much"], distractors: ["very", "much"] },
      ],
      tr_hint:
        "Kayınvalide selam: 'It means a lot to finally meet you.' Türk öğrenci 'Nice to meet you' der — yetersiz. 'Means a lot' = duygusal ağırlık.",
      example_filled: "It means a lot to finally meet you.",
    },
    {
      id: "ex.pb1.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Welcome! Maria has told us so much about you." },
        { speaker: "user" },
        { speaker: "npc", text: "Please, come in. Make yourself at home." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thank you)(,)? (it ('s| means a lot)) (to (finally )?(meet|be here))",
        "(i('ve| have) been (looking forward|excited)) to (meeting|this)",
        "(maria ('s| has) (told|spoken)) (a lot )?about you",
      ],
      tr_hint:
        "İlk tanışma: 'Thank you — it means a lot to finally meet you. Maria has told me so much about you too.' Türk öğrenci 'Hello' der — yetersiz.",
      ideal_answer: "Thank you — it means a lot to finally meet you. Maria has told me so much about you too.",
    },
    {
      id: "ex.pb1.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "So, tell us about your family.",
      accepted_patterns: [
        "(my family) (is from|lives in)",
        "(i('m| am)) (from|the (eldest|youngest))",
        "(we are (a |very )?(close|small|big) family)",
        "(my (parents|mom|dad)) (still )?(live in|work as)",
      ],
      think_seconds: 3,
      tr_hint:
        "Aile anlatma: ölçülü, sıcak, kibirsiz. 'My family is from Istanbul — we're a close family.' Türk öğrenci ya çok az anlatır ya övünür.",
      ideal_response: "My family is from Istanbul — we're a close family.",
    },
    {
      id: "ex.pb1.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Oğlunuz benimle çok şanslı (iyi aileden geliyorum).",
      wrong_en: "Your son is lucky to have me — good family.",
      right_en: "Maria's family means a lot to her, and meeting you means a lot to me.",
      why_tr:
        "Türk kültüründe 'iyi aileden' övünmek yaygın. Yabancı kayınvalide bağlamında: alçakgönüllülük + saygı. Kendini sıralama; karşı tarafa değer ver.",
    },
    {
      id: "ex.pb1.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Kayınvalide ile ilk söz?",
          options: [
            "Hello.",
            "It means a lot to finally meet you.",
            "Lucky to meet me.",
            "Hi there.",
          ],
          correct: 1,
          tr_explanation: "'It means a lot to + base verb' = duygusal ağırlık. Karşı tarafa değer ver.",
        },
        {
          q: "'I've heard so much about you' = ?",
          options: [
            "Senin hakkında çok şey duydum.",
            "Sen çok şey duydun.",
            "Kim duydu.",
            "Çok dedim.",
          ],
          correct: 0,
          tr_explanation: "Present perfect: 'I've heard' = duydum (etki süre devam ediyor). Sıcak/karşılıklı.",
        },
        {
          q: "'Make yourself at home' = ?",
          options: [
            "Evindeymişsin gibi rahat ol.",
            "Ev yap.",
            "Kendi evine git.",
            "Eve var.",
          ],
          correct: 0,
          tr_explanation: "'Make yourself at home' = idiom: rahat ol, ev sahibi gibi. Klasik ev sahibi kalıbı.",
        },
        {
          q: "Övünmemek için ne yapmalı?",
          options: [
            "Aile tanıtırken ölçülü ol, karşı tarafı sor.",
            "Hiç söyleme.",
            "İçten konuş.",
            "A ve C.",
          ],
          correct: 3,
          tr_explanation: "Olgun tanışma: aile için kısa + ölçülü, karşı tarafı sor. Karşılıklılık önemli.",
        },
        {
          q: "'A close family' = ?",
          options: [
            "Yakın aile (duygusal).",
            "Aileden yakın.",
            "Kapalı aile.",
            "Bitişik aile.",
          ],
          correct: 0,
          tr_explanation: "'Close family' = duygusal yakınlık. Coğrafi 'nearby' değil.",
        },
      ],
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
  id: "ex.personal_b1_long_distance_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_long_distance_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_long_distance_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_long_distance_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_long_distance_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_long_distance_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_long_distance_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_long_distance_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_long_distance_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_long_distance_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_long_distance_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_long_distance_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_long_distance_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.6.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "Walk me through your day",
      tr_translation: "Gününü baştan anlat / detaylı paylaş",
      example: "Walk me through your day — even the boring bits.",
      example_tr: "Gününü baştan anlat — sıkıcı kısımları bile.",
    },
    {
      id: "ex.pb1.6.2",
      type: "vocab_tile",
      cefr_band: "A2",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "When I didn't ___ yesterday, I ___.",
      slots: [
        { accepted: ["hear from you", "get a message", "see you online", "get your call"], distractors: ["see", "talk"] },
        { accepted: ["felt a bit lonely", "got a little worried", "missed you more", "wondered how you were"], distractors: ["was angry", "got mad"] },
      ],
      tr_hint:
        "I-statement: 'When I didn't hear from you yesterday, I felt a bit lonely.' Türk öğrenci 'Why you didn't call?' der — saldırı. Doğru: spesifik + duygu.",
      example_filled: "When I didn't hear from you yesterday, I felt a bit lonely.",
    },
    {
      id: "ex.pb1.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How are you really doing? It's been a tough week." },
        { speaker: "user" },
        { speaker: "npc", text: "Thank you for being honest. I'm here." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(honestly|to be honest)(,)? (i('ve| have)) been (struggling|missing you|feeling)",
        "(it('s| has) been) (hard|tough|lonely)( without you)?",
        "(i (miss|need) you)",
      ],
      tr_hint:
        "Duygu paylaşma: 'Honestly, I've been missing you more this week.' Türk öğrenci 'I'm fine' der — kapanma. Açıl.",
      ideal_answer: "Honestly, I've been missing you more this week.",
    },
    {
      id: "ex.pb1.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I miss you so much.",
      accepted_patterns: [
        "(i miss you (more|too)( much)?)",
        "(it ('s| has) been (hard|tough)) (without you)?",
        "(can'?t wait)(,)? (for (your visit|next month))",
        "(i('m| am) (counting (down|the days)))",
      ],
      think_seconds: 3,
      tr_hint:
        "Özlem cevabı: 'I miss you too — I'm counting down the days.' Türk öğrenci 'me too' der — yetersiz. Açılla cevap.",
      ideal_response: "I miss you too — I'm counting down the days.",
    },
    {
      id: "ex.pb1.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Niye aramadın?",
      wrong_en: "Why you didn't call me?",
      right_en: "When I didn't hear from you yesterday, I felt a bit lonely.",
      why_tr:
        "Türk öğrenci hem soru yapısını ('Why didn't you call') hem duygu çerçevesini (saldırı yerine I-statement) bozar. Doğru: spesifik gözlem + 'I felt'. Saldırı değil paylaşım.",
    },
    {
      id: "ex.pb1.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Uzun mesafe yetişkin sorusu?",
          options: [
            "Why you didn't call?",
            "Why didn't you call me?",
            "When I didn't hear from you, I felt...",
            "B ve C ikisi de doğru.",
          ],
          correct: 3,
          tr_explanation: "'Why didn't you' grammatik doğru ama 'When I didn't hear... I felt' daha yetişkin ve bağlantı kurucu.",
        },
        {
          q: "'I-statement' = ?",
          options: [
            "Kendi duygunu söyle (saldırma).",
            "Kendinden bahset (egoist).",
            "Sadece 'I' kullan.",
            "Etkin cümle.",
          ],
          correct: 0,
          tr_explanation: "'I felt...' = duyguyu sahiplenir. 'You did...' = saldırı/suçlama.",
        },
        {
          q: "'Counting down the days' = ?",
          options: [
            "Gün sayıyorum (sabırsızlıkla).",
            "Geri sayım.",
            "Günleri sayıyorum.",
            "Hepsi doğru.",
          ],
          correct: 3,
          tr_explanation: "'Counting down' = idiom: heyecanla bekle, geri say. Uzun mesafede klasik.",
        },
        {
          q: "'How was your day?' yerine?",
          options: [
            "What did your day look like?",
            "Tell me one good thing from today.",
            "Was there anything tough today?",
            "Hepsi (deeper soru).",
          ],
          correct: 3,
          tr_explanation: "Yetişkin uzun mesafe: jenerik 'how' yerine spesifik soru. Bağlantı arttırır.",
        },
        {
          q: "'Voice note' = ?",
          options: [
            "Sesli mesaj (whatsapp).",
            "Yazılı not.",
            "Şarkı.",
            "Telefon araması.",
          ],
          correct: 0,
          tr_explanation: "'Voice note' = sesli mesaj. Uzun mesafede yazıya kıyasla daha sıcak (ton duyulur).",
        },
      ],
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
  id: "ex.personal_b1_repair_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_repair_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_repair_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_repair_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_repair_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_repair_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_repair_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_repair_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_repair_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_repair_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_repair_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_repair_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_repair_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.7.1",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "I've been sitting with what you said",
      tr_translation: "Söylediğini düşünüyorum / üzerinde duruyorum",
      example: "I've been sitting with what you said — and you're right about most of it.",
      example_tr: "Söylediğini düşünüyorum — büyük kısmında haklıydın.",
    },
    {
      id: "ex.pb1.7.2",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B2",
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
    {
      id: "ex.pb1.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I want to own my part — ___ ___.",
      slots: [
        { accepted: ["I raised my voice", "I shut down", "I got defensive", "I checked out"], distractors: ["I'm wrong", "you started"] },
        { accepted: ["and that wasn't fair", "and I'm sorry for that", "and I want to do better", "and I see that"], distractors: ["because", "but"] },
      ],
      tr_hint:
        "Sahiplenme: 'I want to own my part — I raised my voice and that wasn't fair.' Türk öğrenci 'I'm sorry but...' der — yarım özür. Önce kendi payını söyle.",
      example_filled: "I want to own my part — I raised my voice and that wasn't fair.",
    },
    {
      id: "ex.pb1.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Can we talk about last night?" },
        { speaker: "user" },
        { speaker: "npc", text: "I appreciate that. Let me tell you how it landed for me." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes(,)? )?i('ve| have) been (thinking|sitting with)",
        "(i want to (own|start with|begin with)) (my part)",
        "(i (raised|shut down|got defensive))(,)? and (that|i)",
      ],
      tr_hint:
        "Onarım açılışı: 'I've been thinking about it. I want to own my part — I shut down too quickly.' Türk öğrenci ya savunur ya bastırır.",
      ideal_answer: "I've been thinking about it — I want to own my part. I shut down too quickly.",
    },
    {
      id: "ex.pb1.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I felt really hurt yesterday.",
      accepted_patterns: [
        "(i ((can|do) )?(hear|understand) (that|you))",
        "(that makes sense)(,)? (given how)",
        "(i('m| am)) sorry (you )?(felt|got|were)",
        "(thank you for telling me)",
      ],
      think_seconds: 3,
      tr_hint:
        "Acı duyma: validate önce, savun sonra. 'I hear you — that makes sense given how I came across.' Türk öğrenci 'no, but...' der — savunma.",
      ideal_response: "I hear you — that makes sense given how I came across.",
    },
    {
      id: "ex.pb1.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Üzgünüm ama sen de yanlış yaptın.",
      wrong_en: "I'm sorry but you also did wrong.",
      right_en: "I want to own my part first, and I'd love to hear your side too.",
      why_tr:
        "Türk (ve insan) refleksi suçluluk dağıtma. Olgun onarım: önce kendi kısmını sahiplen, sonra karşı tarafı dinle. Sıralama önemli.",
    },
    {
      id: "ex.pb1.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Own my part' = ?",
          options: [
            "Payımı satın al.",
            "Sorumluluğumu üstlen.",
            "Payımı isterim.",
            "Pay verme.",
          ],
          correct: 1,
          tr_explanation: "'Own + sorumluluk' = idiom: sahiplen. Onarım klasik kelimesi.",
        },
        {
          q: "'How it landed for me' = ?",
          options: [
            "Nasıl indi (bana hisettiği).",
            "Nereye düştü.",
            "Geç kaldı.",
            "Bana iniş.",
          ],
          correct: 0,
          tr_explanation: "'Landed for me' = idiom: bende nasıl bir etki bıraktı. Duygu paylaşma.",
        },
        {
          q: "Validate (geçerlilik tanımak)?",
          options: [
            "I hear you / That makes sense.",
            "No, you're wrong.",
            "Forget it.",
            "Don't worry.",
          ],
          correct: 0,
          tr_explanation: "'I hear you' = duygunu duyuyorum/anlıyorum. Onaylamak değil, tanımak.",
        },
        {
          q: "'Came across' = ?",
          options: [
            "Karşılaştım.",
            "Görünüyorum (etkim).",
            "Geçtim.",
            "Buldum.",
          ],
          correct: 1,
          tr_explanation: "'How I came across' = nasıl göründüm/etki bıraktım. Kendi etkimi sorgulama.",
        },
        {
          q: "Onarım girişimi (repair attempt)?",
          options: [
            "Sadece özür.",
            "Sözel + sözsüz: özür, mizah, kahve, dokunma.",
            "Sadece zaman.",
            "Sadece sessizlik.",
          ],
          correct: 1,
          tr_explanation: "Gottman: repair attempts = bağı yenileme girişimleri. Birçok form alır.",
        },
      ],
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
  id: "ex.personal_b1_love_boundaries_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_love_boundaries_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.8.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "I'm not just saying it",
      tr_translation: "Sadece laf olsun diye söylemiyorum",
      example: "I love you — and I'm not just saying it because you said it first.",
      example_tr: "Seni seviyorum — ve sen önce söyledin diye demiyorum.",
    },
    {
      id: "ex.pb1.8.2",
      type: "vocab_tile",
      cefr_band: "A2",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I love you, and I also need ___ ___.",
      slots: [
        { accepted: ["some space", "time with my friends", "a quiet evening", "to recharge"], distractors: ["space the", "time"] },
        { accepted: ["tonight", "this weekend", "sometimes", "now and then"], distractors: ["the tonight", "in tonight"] },
      ],
      tr_hint:
        "Sevgi + sınır birleştirme: 'I love you, and I also need some space tonight.' Türk öğrenci 'I love you but...' der — yanlış. 'And' birleştirir; 'but' siler.",
      example_filled: "I love you, and I also need some space tonight.",
    },
    {
      id: "ex.pb1.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I love you so much." },
        { speaker: "user" },
        { speaker: "npc", text: "That means everything to hear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i love you too)(,)? (so much|truly|deeply)",
        "(i love you)(,)? (and )?(i('m| am) so )?(glad|grateful|happy)",
        "(saying that back)(,)? (i love you|me too)",
      ],
      tr_hint:
        "'I love you' duyma + olgun yanıt: 'I love you too — and I'm so grateful for you.' Türk öğrenci sadece 'me too' der — duygusal eksik.",
      ideal_answer: "I love you too — and I'm so grateful for you.",
    },
    {
      id: "ex.pb1.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Can we spend the whole weekend together?",
      accepted_patterns: [
        "(i('d| would) love (most|some) of it)(,)? (and )?(i also need)",
        "(i love (time|us) together)(,)? (and )?(i also need)",
        "(let'?s plan (saturday|the day))(,)? (and )?(i need)",
        "(part of it (yes|sounds nice))(,)? (but )?(i ('d| would) like)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sınır + sevgi: 'I'd love most of it — and I also need some alone time on Sunday morning.' Türk öğrenci ya 'yes!' (sınır yok) ya 'no' (sınır ham) der.",
      ideal_response: "I'd love most of it — and I also need some alone time on Sunday.",
    },
    {
      id: "ex.pb1.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Beni seviyorsan arkadaşlarınla gitme.",
      wrong_en: "If you love me, don't go with your friends.",
      right_en: "I'll miss you — and I'm glad you've got plans.",
      why_tr:
        "Türkçede sevgiyi 'shart koşma' aracı yapma yaygın — sağlıksız. Olgun ifade: kendi duyguyu söyle + partnerinin ayrı hayatını destekle.",
    },
    {
      id: "ex.pb1.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Sevgi + sınır birleştirme?",
          options: [
            "I love you but I need space.",
            "I love you, and I also need some space tonight.",
            "If you love me, give me space.",
            "Don't bother me.",
          ],
          correct: 1,
          tr_explanation: "'And' iki gerçeği bağlar (sevgi + ihtiyaç). 'But' birini siler.",
        },
        {
          q: "'Healthy boundaries' = ?",
          options: [
            "Sağlıklı sınırlar.",
            "Sağlıklı duvarlar.",
            "Sağlıklı kurallar.",
            "Sağlıklı seçimler.",
          ],
          correct: 0,
          tr_explanation: "'Boundary' = sınır (psikolojik). Duvar değil, ne kabul edip etmediğini gösterir.",
        },
        {
          q: "Sevgi nasıl ifade edilir?",
          options: [
            "I love you (yeterli).",
            "I love you + spesifik (örn. 'I love how you care').",
            "Sadece eylem.",
            "Hiç söyleme.",
          ],
          correct: 1,
          tr_explanation: "Spesifik sevgi: 'I love how you...' güçlüdür. Genel 'I love you' düzenli + samimi.",
        },
        {
          q: "'I'll miss you' demek?",
          options: [
            "Seni özleyeceğim.",
            "Seni kaçıracağım.",
            "Sensiz olacak.",
            "Sen yoksun.",
          ],
          correct: 0,
          tr_explanation: "'Miss + kişi' = idiom: ... özlemek. Sevgi ifadesinin ham hali.",
        },
        {
          q: "'I need to recharge' = ?",
          options: [
            "Şarj olmam gerek (enerji topla).",
            "Para gerek.",
            "Yemek gerek.",
            "Tekrar et.",
          ],
          correct: 0,
          tr_explanation: "'Recharge' = idiom: enerji topla (insan için). Yalnız vakit veya uyku için.",
        },
      ],
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
  id: "ex.personal_b1_breakup_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_breakup_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_breakup_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_breakup_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_breakup_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_breakup_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_breakup_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_breakup_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_breakup_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_breakup_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_breakup_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_breakup_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_breakup_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.9.1",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "I've thought about this a lot",
      tr_translation: "Bu konuyu çok düşündüm",
      example: "I've thought about this a lot — and I think we should end things.",
      example_tr: "Bu konuyu çok düşündüm — ve bence ilişkiyi bitirmeliyiz.",
    },
    {
      id: "ex.pb1.9.2",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B2",
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
    {
      id: "ex.pb1.9.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I don't think we ___ — and ___.",
      slots: [
        { accepted: ["work together", "want the same things", "are right for each other", "can keep doing this"], distractors: ["loved", "are good"] },
        { accepted: ["I think we should end this", "this isn't fair to either of us", "I need to be honest with you", "I'm not blaming you"], distractors: ["I hate you", "you're bad"] },
      ],
      tr_hint:
        "Olgun ayrılık: 'I don't think we work together — and this isn't fair to either of us.' Türk öğrenci 'You ruined' der — suçlama. Eşit, etiketsiz.",
      example_filled: "I don't think we work together — and this isn't fair to either of us.",
    },
    {
      id: "ex.pb1.9.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "We need to talk — where is this going?" },
        { speaker: "user" },
        { speaker: "npc", text: "I appreciate the honesty, even though it hurts." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i('ve| have) been (thinking|sitting with))(,)? and (i )?(don'?t think|think)",
        "(i (need|want) to be honest)(,)? (i )?(don'?t think|can'?t (keep|do))",
        "(this isn'?t (working|fair))",
      ],
      tr_hint:
        "Ayrılık açılış: 'I've been sitting with this, and I don't think we work together.' Türk öğrenci agresif başlar — soğukkanlı + dürüst.",
      ideal_answer: "I've been sitting with this, and I don't think we work together anymore.",
    },
    {
      id: "ex.pb1.9.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Is there anything I can do to change your mind?",
      accepted_patterns: [
        "(i ('ve| have)) (thought about this) (a lot)",
        "(it('s| is) not about (something to fix|something you did))",
        "(i (don'?t think|can'?t see)) (this changing|us continuing)",
        "(this isn'?t (impulsive|sudden))",
      ],
      think_seconds: 3,
      tr_hint:
        "Geri dönme yok — net ve nazik: 'It's not about something to fix. I've thought about this a lot.' Türk öğrenci kararsız olur — net dur.",
      ideal_response: "It's not about something to fix — I've thought about this a lot.",
    },
    {
      id: "ex.pb1.9.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen toksiksin, ayrılıyorum.",
      wrong_en: "You're toxic, we're done.",
      right_en: "I don't think we work together anymore. I'm not blaming you.",
      why_tr:
        "Türk öğrenci etiket kullanır: 'toxic', 'bad'. Olgun ayrılık: 'we' (denklik), 'don't work' (durum), 'not blaming' (suçsuzluk). Etiket ilişkiyi tek taraflı yapar.",
    },
    {
      id: "ex.pb1.9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Olgun ayrılık açılışı?",
          options: [
            "You ruined everything.",
            "I don't think we work together anymore.",
            "We're done.",
            "I hate you.",
          ],
          correct: 1,
          tr_explanation: "'We don't work' = etiketsiz durum tespiti. 'You ruined' = suçlama (kapanış).",
        },
        {
          q: "'Sitting with this' = ?",
          options: [
            "Bunu düşünüyor/içselleştiriyorum.",
            "Bununla oturuyorum.",
            "Önemsiz.",
            "Hızlıca.",
          ],
          correct: 0,
          tr_explanation: "'Sitting with X' = idiom: bir konuyu/duyguyu acele etmeden düşünmek. Olgun ifade.",
        },
        {
          q: "'Not fair to either of us' = ?",
          options: [
            "İkimize de adil değil.",
            "Birimize adil değil.",
            "Adil değil bana.",
            "Adil değil sana.",
          ],
          correct: 0,
          tr_explanation: "'Either of us' = ikimizden hiçbiri. Ortak iyilik ifadesi.",
        },
        {
          q: "'It's not about something to fix' = ?",
          options: [
            "Düzeltilecek bir şey değil.",
            "Düzeltebiliriz.",
            "Tamir gerek.",
            "Bozuk değil.",
          ],
          correct: 0,
          tr_explanation: "Ayrılık olgunluğu: konu davranış değişimi değil, fundamental uyumsuzluk.",
        },
        {
          q: "'I appreciate the honesty' = ?",
          options: [
            "Dürüstlüğü takdir ediyorum.",
            "Dürüst değilsin.",
            "Söz veriyorum.",
            "Söz verdi.",
          ],
          correct: 0,
          tr_explanation: "'Appreciate + isim' = takdir et. Acı veren ama dürüst habere olgun cevap.",
        },
      ],
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
  id: "ex.personal_b1_apology_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_apology_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_apology_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_apology_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_apology_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_apology_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_apology_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_apology_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_apology_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_apology_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_apology_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_apology_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_apology_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.10.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "A1",
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
      cefr_band: "B2",
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
    {
      id: "ex.pb1.10.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I'm sorry — I ___, and that ___.",
      slots: [
        { accepted: ["raised my voice", "shut down", "got defensive", "interrupted you", "lost my temper"], distractors: ["did wrong", "yelled"] },
        { accepted: ["wasn't fair", "wasn't okay", "must have hurt", "shouldn't happen"], distractors: ["was bad", "is wrong"] },
      ],
      tr_hint:
        "Olgun özür: 'I'm sorry — I raised my voice, and that wasn't fair.' Türk öğrenci 'I'm sorry if you...' der — koşullu, kaçınma. Sahiplen.",
      example_filled: "I'm sorry — I raised my voice, and that wasn't fair.",
    },
    {
      id: "ex.pb1.10.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm still upset about last night." },
        { speaker: "user" },
        { speaker: "npc", text: "Thank you for saying that. It means a lot." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i('m| am) (really |truly )?sorry)(,? )?(i )?(should(n'?t)? have|raised|shut)",
        "(you (deserve|deserved) )?(better)(,)? i (was|got)",
        "(i (own (that|it)|take responsibility))",
      ],
      tr_hint:
        "Gerçek özür: 'I'm really sorry — I shouldn't have raised my voice. That wasn't fair to you.' Türk öğrenci 'sorry but...' der — özür değil.",
      ideal_answer: "I'm really sorry — I shouldn't have raised my voice. That wasn't fair to you.",
    },
    {
      id: "ex.pb1.10.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Will you actually change, or are we just going to repeat this?",
      accepted_patterns: [
        "(i (hear|understand) (you|the doubt))",
        "(i can('t| not) promise)(,)? (but )?(i (will|'m going to))",
        "(i('m| am)) (going to|trying to) (work on|do better)",
        "(i('d| would) like to (start (small|by)))",
      ],
      think_seconds: 3,
      tr_hint:
        "Şüpheye karşı olgun cevap: 'I hear the doubt — I can't promise overnight, but I'm going to work on this.' Türk öğrenci 'I promise!' der — boş söz. Dürüst ol.",
      ideal_response: "I hear the doubt — I'm going to work on this, starting now.",
    },
    {
      id: "ex.pb1.10.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Üzgünüm, ama sen başlattın.",
      wrong_en: "I'm sorry, but you started it.",
      right_en: "I'm sorry — I raised my voice. That wasn't okay.",
      why_tr:
        "Türk (ve genelde insan) refleksi 'sorry but...' — 'but'tan sonra suç paslama. Gerçek özür koşulsuz. 'But' sözcüğü özrü siler.",
    },
    {
      id: "ex.pb1.10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Gerçek özür?",
          options: [
            "I'm sorry if you felt bad.",
            "I'm sorry — I raised my voice and that wasn't fair.",
            "I'm sorry but you started it.",
            "Sorry, whatever.",
          ],
          correct: 1,
          tr_explanation: "Gerçek özür: koşulsuz, davranışı adla, sahiplen. 'But/if' ile koşul yoktur.",
        },
        {
          q: "'Own that' = ?",
          options: [
            "Onu satın al.",
            "Sorumluluğu üstlen.",
            "Reddet.",
            "İnkar et.",
          ],
          correct: 1,
          tr_explanation: "'Own + sorumluluk/davranış' = idiom: sahiplen. Olgun ilişki kelimesi.",
        },
        {
          q: "'I shouldn't have + past participle' = ?",
          options: [
            "Yapmamalıydım (pişmanlık).",
            "Yapmam.",
            "Yapacağım.",
            "Yapamadım.",
          ],
          correct: 0,
          tr_explanation: "'Shouldn't have + V3' = geçmiş pişmanlığı. Özür kalıbı.",
        },
        {
          q: "'Repair attempt' = ?",
          options: [
            "Onarım girişimi.",
            "Tamirat.",
            "Saldırı.",
            "Geri çekilme.",
          ],
          correct: 0,
          tr_explanation: "Gottman çift terapisi terimi. Çatışma sonrası bağ kurma girişimi. 'A coffee, a joke, an apology' — hepsi repair attempt.",
        },
        {
          q: "Boş söz vs gerçek niyet?",
          options: [
            "I promise! (boş).",
            "I can't promise overnight, but I'm going to work on this. (gerçek).",
            "İkisi de boş.",
            "İkisi de gerçek.",
          ],
          correct: 1,
          tr_explanation: "Olgun olan: söz vermek yerine gerçekçi taahhüt. 'Promise' sık tutulamaz.",
        },
      ],
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
  id: "ex.personal_b1_resolutions_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_resolutions_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_resolutions_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_resolutions_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_resolutions_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_resolutions_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_resolutions_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_resolutions_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_resolutions_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_resolutions_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_resolutions_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_resolutions_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_resolutions_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.11.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
    {
      id: "ex.pb1.11.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "My goal this year is to ___ ___.",
      slots: [
        { accepted: ["read", "exercise", "save", "travel", "learn"], distractors: ["reading", "exercising"] },
        { accepted: ["more books", "three times a week", "more money", "to a new country", "a new language"], distractors: ["book", "money"] },
      ],
      tr_hint:
        "Hedef anlatımı: 'My goal this year is to read more books.' Türk öğrenci 'My goal reading' der — yanlış. 'Goal is to + base verb'.",
      example_filled: "My goal this year is to read more books.",
    },
    {
      id: "ex.pb1.11.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Any resolutions for the new year?" },
        { speaker: "user" },
        { speaker: "npc", text: "Love that — what made you pick that one?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(my (goal|resolution)) (is|this year is) to",
        "(this year(,)? )?i('m| am) going to (focus on|work on|try to)",
        "(i('m| am)) (trying|hoping) to (be|become|get)",
      ],
      tr_hint:
        "Yeni yıl kararı: 'My goal this year is to be kinder to myself.' Türk öğrenci 'I want to' der — kabul ama abartısız 'goal' daha olgun.",
      ideal_answer: "My goal this year is to be kinder to myself.",
    },
    {
      id: "ex.pb1.11.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you planning to actually do that?",
      accepted_patterns: [
        "(i ('m| am)) (going to|trying to) (start (small|by))",
        "(maybe (twice|three times) a week)",
        "(small steps)(,)? (then)",
        "(i ('m| am)) (going to|gonna) (track|keep track)",
      ],
      think_seconds: 3,
      tr_hint:
        "Plan: 'I'm going to start small — twice a week.' Türk öğrenci 'every day!' der — gerçekçi değil. Küçük adım + sürdürülebilir.",
      ideal_response: "I'm going to start small — maybe twice a week.",
    },
    {
      id: "ex.pb1.11.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu yıl daha çok okumalıyım.",
      wrong_en: "I must read more this year.",
      right_en: "My goal this year is to read more.",
      why_tr:
        "Türk öğrenci 'should/must' kullanır — suçlulukla yüklü. İngilizcede 'goal/plan/want' daha olgun: 'My goal is to + base verb.' Pozitif çerçeve.",
    },
    {
      id: "ex.pb1.11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Yeni yıl kararı paylaşımı?",
          options: [
            "I must read more.",
            "My goal this year is to read more.",
            "I should read.",
            "Read more I.",
          ],
          correct: 1,
          tr_explanation: "'My goal + is to + base' = pozitif çerçeve. 'Must/should' suçlu bağlam.",
        },
        {
          q: "'Be going to + base' = ?",
          options: [
            "Önceden kararlı plan.",
            "Şu an olan eylem.",
            "Tamamlanmış eylem.",
            "Sürekli alışkanlık.",
          ],
          correct: 0,
          tr_explanation: "'Be going to + base' = niyet/karar. 'Will' kararsız, anlık.",
        },
        {
          q: "'Start small' = ?",
          options: [
            "Küçük başla (kademeli).",
            "Az başla.",
            "Geç başla.",
            "Yavaş başla.",
          ],
          correct: 0,
          tr_explanation: "'Start small' = idiom: küçük adımlarla başla. Sürdürülebilir hedef için klasik.",
        },
        {
          q: "'What made you pick that one?' = ?",
          options: [
            "Bunu neden seçtin?",
            "Onu nasıl yaptın?",
            "Hangisini aldın?",
            "Ne yaptın?",
          ],
          correct: 0,
          tr_explanation: "'What made you + verb' = idiom: neden bunu yaptın/seçtin? Empatik soru.",
        },
        {
          q: "'Be kinder to myself' = ?",
          options: [
            "Kendime daha iyi davranmak.",
            "Daha iyi olmak.",
            "Daha çok arkadaş yapmak.",
            "Kendi başına.",
          ],
          correct: 0,
          tr_explanation: "'Kind to + kişi' = nazik/iyi davranmak. 'Kinder to myself' = öz-şefkat ifadesi.",
        },
      ],
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
  id: "ex.personal_b1_self_care_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_self_care_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_self_care_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_self_care_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_self_care_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_self_care_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_self_care_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_self_care_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_self_care_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_self_care_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_self_care_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_self_care_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_self_care_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.12.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.12.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I'm taking ___ from ___.",
      slots: [
        { accepted: ["a break", "some time off", "a step back"], distractors: ["break", "time"] },
        { accepted: ["social media", "work", "everything", "the news"], distractors: ["social media all", "the workings"] },
      ],
      tr_hint:
        "Mola alma kalıbı: 'I'm taking a break from social media.' Türk öğrenci 'I stop social media' der — yanlış. 'Take a break from + isim' = idiom.",
      example_filled: "I'm taking a break from social media this week.",
    },
    {
      id: "ex.pb1.12.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "You seem really busy lately — everything okay?" },
        { speaker: "user" },
        { speaker: "npc", text: "Good for you. Take care of yourself." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|honestly)(,)? (i('m| am)) (taking|trying to take) (a break|time)",
        "(i('ve| have)) been (running on fumes|burned out)",
        "(i need to (set|put) some (limits|boundaries))",
      ],
      tr_hint:
        "Tükenmişlik kabul: 'Honestly, I've been running on fumes — I'm taking some time off this weekend.' Türk öğrenci 'I'm fine' der — açıl.",
      ideal_answer: "Honestly, I've been burned out — I'm taking some time off.",
    },
    {
      id: "ex.pb1.12.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Can you cover for me this weekend?",
      accepted_patterns: [
        "(i('d| would) love to)(,)? (but |unfortunately )",
        "(this weekend (i('m| am)) (busy|out of town))",
        "(i('m| am) already (committed|booked|stretched))",
        "(no(,)? i can'?t this time)",
      ],
      think_seconds: 3,
      tr_hint:
        "Nazik ret: 'I'd love to, but I'm already stretched thin this weekend.' Türk öğrenci direkt 'no' der — agresif. Yumuşat + açıkla.",
      ideal_response: "I'd love to, but I'm already stretched thin this weekend.",
    },
    {
      id: "ex.pb1.12.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hayır diyemem (suçluluk duyarım).",
      wrong_en: "Okay, I will do it (resentful).",
      right_en: "I'd love to help, but I can't this time.",
      why_tr:
        "Türk öğrenci suçluluk hisseder, 'evet' der ama içten içe öfkelidir — sağlıksız. Doğru sınır: nazik + net 'no'. Açıklama gerekmiyor.",
    },
    {
      id: "ex.pb1.12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Burnout' = ?",
          options: [
            "Yorgunluk (fiziksel).",
            "Tükenmişlik (zihinsel + duygusal).",
            "Hayal kırıklığı.",
            "Sıkılma.",
          ],
          correct: 1,
          tr_explanation: "'Burnout' = derin yıpranma. 'Tired' fiziksel; 'burnout' klinik/uzun süreli.",
        },
        {
          q: "'Running on fumes' = ?",
          options: [
            "Dumanla koşmak.",
            "Son enerjiyle gitmek (tükenmiş).",
            "Hızlı koşmak.",
            "Sigara içmek.",
          ],
          correct: 1,
          tr_explanation: "'Running on fumes' = idiom: deponun son damlasıyla koşmak. Tamamen tükenmiş.",
        },
        {
          q: "Nazik 'hayır' demek?",
          options: [
            "Never!",
            "I'd love to, but I can't this time.",
            "Don't ask me!",
            "No way.",
          ],
          correct: 1,
          tr_explanation: "'I'd love to, but...' = nazik ret. Olumlu açılış + sınır.",
        },
        {
          q: "'Stretched thin' = ?",
          options: [
            "Çok ince.",
            "Çok meşgul/üzerine fazla yük.",
            "Çok geniş.",
            "Çok hafif.",
          ],
          correct: 1,
          tr_explanation: "'Stretched thin' = idiom: gergin/aşırı yüklü. Çok şey istenmiş.",
        },
        {
          q: "'Take care of yourself' = ?",
          options: [
            "Kendine iyi bak.",
            "Kendini al.",
            "Kendini koru.",
            "Kendine git.",
          ],
          correct: 0,
          tr_explanation: "'Take care of yourself' = idiom: kendine iyi bak. Empatik kapanış.",
        },
      ],
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
  id: "ex.personal_b1_new_hobby_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_new_hobby_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.13.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.13.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I've recently gotten into ___ — it's been ___.",
      slots: [
        { accepted: ["pottery", "rock climbing", "running", "photography", "cooking classes"], distractors: ["pot", "running marathon"] },
        { accepted: ["really fun", "a great outlet", "surprisingly relaxing", "challenging but rewarding"], distractors: ["fun", "ok"] },
      ],
      tr_hint:
        "Yeni hobi anlatma: 'I've recently gotten into pottery — it's been really fun.' Türk öğrenci 'I started pottery' der — kabul ama 'gotten into' daha doğal/heyecanlı.",
      example_filled: "I've recently gotten into pottery — it's been really fun.",
    },
    {
      id: "ex.pb1.13.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "What have you been up to lately?" },
        { speaker: "user" },
        { speaker: "npc", text: "Oh nice! How did you get into that?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i('ve| have)) (recently )?(gotten into|started|picked up)",
        "(i('m| am)) (really )?into [a-z]+ (lately|these days)",
        "(my new (thing|hobby) is)",
      ],
      tr_hint:
        "Yeni hobi paylaşma: 'I've recently gotten into pottery!' Türk öğrenci 'My new hobby pottery' der — kırık. 'Gotten into' = doğal.",
      ideal_answer: "I've recently gotten into pottery — it's surprisingly addictive.",
    },
    {
      id: "ex.pb1.13.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How did you get started?",
      accepted_patterns: [
        "(a (friend|colleague)) (got me into|told me about) it",
        "(i (saw|read) (something)) (on (instagram|youtube|tiktok))",
        "(i('ve| have) always wanted to)",
        "(it was )?(a class|workshop) (i took|signed up for)",
      ],
      think_seconds: 3,
      tr_hint:
        "Nasıl başladın: 'A friend got me into it.' veya 'I saw something on Instagram and thought I'd try.' Türk öğrenci 'I want try' der — eksik.",
      ideal_response: "A friend got me into it last spring.",
    },
    {
      id: "ex.pb1.13.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yeni hobimi sevdim.",
      wrong_en: "I love my new hobby.",
      right_en: "I'm really into my new hobby.",
      why_tr:
        "Türk öğrenci 'love' kullanır — abartılı. 'I'm into + isim' = idiom: ilgileniyorum, hoşlanıyorum. Konuşma dilinde çok daha doğal.",
    },
    {
      id: "ex.pb1.13.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I've gotten into X' = ?",
          options: [
            "X'e başladım/ilgilendim.",
            "X'in içine girdim.",
            "X'ten çıktım.",
            "X'i aldım.",
          ],
          correct: 0,
          tr_explanation: "'Get into X' = idiom: ile ilgilenmeye başla. Yeni hobi/aktivite klasiği.",
        },
        {
          q: "'A friend got me into it' = ?",
          options: [
            "Bir arkadaş benimle ilgilendi.",
            "Bir arkadaş beni bu işe soktu (tanıştırdı).",
            "Bir arkadaş içeri girdi.",
            "Bir arkadaş istedi.",
          ],
          correct: 1,
          tr_explanation: "'Get me into X' = beni X'e dahil et/tanıştır. Causative kullanımı.",
        },
        {
          q: "'Creative outlet' = ?",
          options: [
            "Yaratıcı çıkış (kanal).",
            "Yaratıcı çıkış kapısı.",
            "Yaratıcı çözüm.",
            "Yaratıcı sınav.",
          ],
          correct: 0,
          tr_explanation: "'Outlet' = idiom: duygu/enerji çıkışı. 'Creative outlet' = sanat/hobi kanalı (terapötik).",
        },
        {
          q: "'Challenging but rewarding' = ?",
          options: [
            "Zorlu ama tatmin edici.",
            "Zor değil tatmin edici.",
            "Tatmin etmez ama zor.",
            "İkisi de zor.",
          ],
          correct: 0,
          tr_explanation: "Yeni hobi klasik tanımı: zor + ödüllendirici. 'Reward' = ödül/tatmin.",
        },
        {
          q: "'Surprisingly addictive' = ?",
          options: [
            "Şaşırtıcı biçimde bağımlılık yapıyor.",
            "Asla bırakamam.",
            "Beklenmedik.",
            "Hızlı oluyor.",
          ],
          correct: 0,
          tr_explanation: "'Surprisingly + sıfat' = idiom: beklemediğim kadar... Yeni hobi tanımlamada yaygın.",
        },
      ],
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
  id: "ex.personal_b1_therapy_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "family",
  tr_translation: "Aile",
  example: "My family is in Istanbul.",
  example_tr: "Ailem İstanbul'da.",
},
{
  id: "ex.personal_b1_therapy_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "friend",
  tr_translation: "Arkadaş",
  example: "He's my best friend.",
  example_tr: "O benim en iyi arkadaşım.",
},
{
  id: "ex.personal_b1_therapy_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I love",
  tr_translation: "Seviyorum",
  example: "I love this city.",
  example_tr: "Bu şehri seviyorum.",
},
{
  id: "ex.personal_b1_therapy_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "I'd rather",
  tr_translation: "Tercih ederim",
  example: "I'd rather stay in.",
  example_tr: "Evde kalmayı tercih ederim.",
},
{
  id: "ex.personal_b1_therapy_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "what do you do",
  tr_translation: "Ne iş yapıyorsun",
  example: "So, what do you do?",
  example_tr: "Peki, ne iş yapıyorsun?",
},
{
  id: "ex.personal_b1_therapy_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I was wondering",
  tr_translation: "Merak ediyordum",
  example: "I was wondering how you ended up here.",
  example_tr: "Buraya nasıl geldiğini merak ediyordum.",
},
{
  id: "ex.personal_b1_therapy_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Are you single, by any chance?",
  example_tr: "Acaba bekar mısın?",
},
{
  id: "ex.personal_b1_therapy_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "to be honest",
  tr_translation: "Açıkçası",
  example: "To be honest, I miss home.",
  example_tr: "Açıkçası, evi özlüyorum.",
},
{
  id: "ex.personal_b1_therapy_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyen var mı",
  example: "Any recommendations for a weekend trip?",
  example_tr: "Hafta sonu gezisi için tavsiyen var mı?",
},
{
  id: "ex.personal_b1_therapy_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind if I",
  tr_translation: "Sakıncası olur mu",
  example: "Would you mind if I tagged along?",
  example_tr: "Aranıza katılsam sakıncası olur mu?",
},
{
  id: "ex.personal_b1_therapy_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "now that I think about it",
  tr_translation: "Şimdi düşününce",
  example: "Now that I think about it, we met last summer.",
  example_tr: "Şimdi düşününce, geçen yaz tanışmıştık.",
},
{
  id: "ex.personal_b1_therapy_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Sanmıyorum ama",
  example: "I don't suppose you remember the cafe owner?",
  example_tr: "Acaba kafe sahibini hatırlıyor musun?",
},
{
  id: "ex.personal_b1_therapy_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, you'd love the new neighborhood.",
  example_tr: "Belki işine yarar, yeni mahalleyi çok seveceksin.",
},
    {
      id: "ex.pb1.14.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
      cefr_band: "B1",
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
    {
      id: "ex.pb1.14.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I've been ___ ___ for a while now.",
      slots: [
        { accepted: ["seeing", "working with", "going to", "talking to"], distractors: ["saw", "see"] },
        { accepted: ["a therapist", "someone for help", "a counselor", "a coach"], distractors: ["therapist", "help"] },
      ],
      tr_hint:
        "Terapi açıklama: 'I've been seeing a therapist for a while now.' Türk öğrenci 'I go therapy' der — yanlış. Present perfect continuous + doğal.",
      example_filled: "I've been seeing a therapist for a while now.",
    },
    {
      id: "ex.pb1.14.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Are you doing okay lately? You seem a bit distant." },
        { speaker: "user" },
        { speaker: "npc", text: "Thanks for opening up — that takes courage." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i('ve| have) been (going through|dealing with))",
        "(i started (seeing|going to)) (a )?(therapist|counselor)",
        "(it'?s been )?(a hard|a rough|a tough) (few weeks|year|time)",
      ],
      tr_hint:
        "Duygusal açılma: 'Honestly, I've been dealing with a lot — I started seeing a therapist.' Türk öğrenci 'I'm fine' der — savun. Açılmak güç ister.",
      ideal_answer: "Honestly, I've been dealing with a lot — I started seeing a therapist.",
    },
    {
      id: "ex.pb1.14.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Is therapy actually helping?",
      accepted_patterns: [
        "(yeah|yes|it (really )?has)(,)? (it('s| has) been)? helpful",
        "(it('s| has)) given me (tools|perspective|space)",
        "(it'?s not a quick fix)(,)? but",
        "(i('m| am)) more (aware|grounded|honest)",
      ],
      think_seconds: 3,
      tr_hint:
        "Terapi soru: dürüst + olgun. 'It's been really helpful — I'm more aware of my patterns.' Türk öğrenci 'yes' der — açıkla.",
      ideal_response: "It really has — I'm more aware of my patterns now.",
    },
    {
      id: "ex.pb1.14.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Terapiye gidiyorum.",
      wrong_en: "I go therapy.",
      right_en: "I'm seeing a therapist.",
      why_tr:
        "Türkçede 'terapiye gitmek'i 'go therapy' yapar — kırık. Doğru: 'I'm seeing a therapist' (idiomatic) veya 'I'm going to therapy' (more literal). Native 'seeing' tercih eder.",
    },
    {
      id: "ex.pb1.14.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Terapiye gitmek?",
          options: [
            "I go therapy.",
            "I'm seeing a therapist.",
            "Therapy go me.",
            "Have therapy.",
          ],
          correct: 1,
          tr_explanation: "'I'm seeing a therapist' = doğal kalıp. 'Seeing' = düzenli ziyaret etmek (idiom).",
        },
        {
          q: "'I'd rather not talk about it' = ?",
          options: [
            "Bu konuda konuşmak istemem.",
            "Bu konuda konuşmamam gerek.",
            "Bu konuda konuşurum.",
            "Bu konuda konuşmak.",
          ],
          correct: 0,
          tr_explanation: "'I'd rather not + base' = nazik sınır. Konuşmak istemediğini belirtmek.",
        },
        {
          q: "'It's not a quick fix' = ?",
          options: [
            "Hızlı çözüm değil.",
            "Hemen yapılır.",
            "Çabuk hallet.",
            "Çözüm yok.",
          ],
          correct: 0,
          tr_explanation: "'Quick fix' = idiom: anında çözüm. 'Not a quick fix' = yavaş süreç.",
        },
        {
          q: "'I'm more aware of my patterns' = ?",
          options: [
            "Kalıplarımın farkındayım daha çok.",
            "Daha çok kalıp gördüm.",
            "Yeni kalıplarım var.",
            "Kalıplarım değişti.",
          ],
          correct: 0,
          tr_explanation: "'Aware of + isim' = farkında. 'Pattern' = davranış kalıbı.",
        },
        {
          q: "'Thanks for opening up' = ?",
          options: [
            "Açıldığın için teşekkürler.",
            "Açtığın için teşekkürler.",
            "Konuşma için teşekkür.",
            "Hep konuşurum.",
          ],
          correct: 0,
          tr_explanation: "'Open up' = idiom: duygusal açılmak. 'Thanks for opening up' = duygusal güveni takdir.",
        },
      ],
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