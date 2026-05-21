// Airport — Expanded scenes (12 yeni sahne, 2026-05-21)
//
// Mevcut airport.44.1–8 (check-in, security, gate change temelleri) Türk
// öğrenciler tarafından 1 günde bitiriliyordu. Bu dosya tam havalimanı
// deneyimini kapsayacak şekilde 12 yeni roleplay sahnesi ekler:
//   - immigration interview (turist/iş)
//   - lost luggage, missed connection
//   - upgrade, dietary, special assistance
//   - customs, navigating the airport, layover
//   - phone/wifi at airport, power bank carry-on
//
// Yapı: HER sahne 1-2 vocab_tile + 1 roleplay_chat (10-12 turn).
// Mevcut airport-lesson.ts'deki "tam" 12-exercise yapısının yalın versiyonu —
// kullanıcı asıl learning'i roleplay'de yapsın.
//
// CEFR dağılımı (12):
//   A2  → 5  (44.9, 44.10, 44.11, 44.12, 44.13)
//   B1  → 5  (44.14, 44.15, 44.16, 44.17, 44.18)
//   B2  → 2  (44.19, 44.20)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 44.9 — Immigration: "Tatil mi İş mi" (A2)
// ============================================================
// Türk öğrenciler JFK/Heathrow immigration'dan korkar; soru-cevap
// kalıbı çok formülaik, ezber + güven yeterli.
export const airportLesson_44_9: BundledLesson = {
  id: "airport.44.9",
  skill_id: "airport",
  index: 9,
  title: "Immigration — \"Tatil mi İş mi\"",
  description:
    "Pasaport kontrolü. Memur soruyor: amaç, süre, nerede kalıyorsun. Korkma — sakin + net + kısa cevap.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.9.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "purpose of visit",
      tr_translation: "Geliş amacı (immigration klasik sorusu)",
      example: "The purpose of my visit is tourism.",
      example_tr: "Geliş amacım turizm.",
    },
    {
      id: "ex.44.9.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm staying with",
      tr_translation: "...da/...nın yanında kalıyorum",
      example: "I'm staying with a friend in Manhattan.",
      example_tr: "Manhattan'da bir arkadaşımda kalıyorum.",
    },
    {
      id: "ex.44.9.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "JFK havalimanı immigration. Memur sertçe ama nötr soruyor. Sakin + kısa cevap = hızlı geçiş.",
      npc_role: "Immigration Officer",
      setting: "JFK Airport immigration booth, formal",
      turns: [
        {
          speaker: "npc",
          message: "Passport, please. What's the purpose of your visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is|here('s| is) (my )?passport)",
            "(tourism|holiday|vacation|sightseeing)",
            "(i('m| am) here (for|on)) (tourism|holiday|vacation|business)",
            "(just (visiting|traveling|here for fun))",
            "(visiting (family|friends|new york))",
            "(it('s| is) (a |my )?(holiday|vacation|trip))",
          ],
          hint_tr:
            "Net + kısa: 'Here you go. I'm here for tourism.' Uzun açıklama YAPMA — memur sıkıcı bulur.",
        },
        {
          speaker: "npc",
          message: "How long are you staying in the country?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?(one|two|three|four|five|six|seven|ten|fourteen|\\d+) (days?|weeks?)",
            "(i('m| am) staying (for )?\\d+)",
            "(about|around|approximately) \\d+ (days?|weeks?)",
            "(two weeks|one week|ten days|a month)",
            "(just )?(a (week|few days))",
          ],
          hint_tr:
            "'I'm staying for ten days.' veya kısaca 'Ten days.' Sayı + days/weeks YETERLİ. 'I will stay during ten days' YANLIŞ — 'for' kullan.",
        },
        {
          speaker: "npc",
          message: "Where will you be staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at (a |the )?(hotel|hostel|airbnb))",
            "(in (manhattan|brooklyn|new york|midtown))",
            "(i('m| am) staying (at|with|in)) (a |an |the )?\\w+",
            "(with (a )?(friend|cousin|relative|family))",
            "(at the (marriott|hilton|hyatt|sheraton))",
            "(an airbnb in \\w+)",
          ],
          hint_tr:
            "Otel veya kişi: 'At a hotel in Manhattan.' / 'With a friend in Brooklyn.' Adresi tam ezberleme — şehir + tip yeter.",
        },
        {
          speaker: "npc",
          message: "Have you been to the United States before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|never|not (yet|before))",
            "(this is my first time)",
            "(yes|yeah)",
            "(i('ve| have) been (here )?(once|twice|before))",
            "(last (year|summer|month))",
            "(in (2023|2024|2025))",
          ],
          hint_tr:
            "İlk kez: 'No, this is my first time.' Daha önce: 'Yes, I came once in 2024.' 'I came to here' YANLIŞ → 'I came here'.",
        },
        {
          speaker: "npc",
          message: "Do you have a return ticket?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|of course)",
            "(i (have|('ve| have) got)) (a |my )?return (ticket|flight)",
            "(it('s| is) (on |in )?(my phone|the app))",
            "(i fly (back|home) on)",
            "(my return is (on )?(june|july|august|next))",
            "(do you (want|need) to (see|check) it)",
          ],
          hint_tr:
            "Net: 'Yes, I fly back on June 5th.' Telefonu çıkar göster — visa-free ziyaretçi için return ticket şart.",
        },
        {
          speaker: "npc",
          message: "Okay. Welcome to the United States. Next!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.10 — Kayıp Bagaj Şikayeti (A2)
// ============================================================
// Bagaj bandı boşaldı, valiz yok. Lost & Found gişesinde temel diyalog.
export const airportLesson_44_10: BundledLesson = {
  id: "airport.44.10",
  skill_id: "airport",
  index: 10,
  title: "Kayıp Bagaj — Lost & Found",
  description:
    "Bagajın gelmedi. Lost & Found gişesinde sakin şekilde rapor doldur, otele teslim iste.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.10.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "my bag didn't arrive",
      tr_translation: "Valizim gelmedi (basit hal)",
      example: "Excuse me — my bag didn't arrive on the belt.",
      example_tr: "Pardon, valizim banda gelmedi.",
    },
    {
      id: "ex.44.10.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "baggage claim tag",
      tr_translation: "Bagaj etiketi (biniş kartında ufak sticker)",
      example: "My baggage claim tag is on the boarding pass.",
      example_tr: "Bagaj etiketim biniş kartında.",
    },
    {
      id: "ex.44.10.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Bagaj bandı boşaldı, valizin yok. Lost & Found gişesindesin — sakin, bilgi ver, rapor doldur.",
      npc_role: "Baggage Service Agent",
      setting: "Lost & Found desk in baggage claim area",
      turns: [
        {
          speaker: "npc",
          message: "Hello, how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(my (bag|suitcase|luggage)) (didn't arrive|is missing|didn't come)",
            "(my bag didn't come out)",
            "(i can't find my (bag|suitcase|luggage))",
            "(the belt (stopped|is empty|finished))",
            "(i think (my bag|it) is lost)",
          ],
          hint_tr:
            "Net aç: 'Hi, my bag didn't arrive on the belt.' 'My bag lost!' YANLIŞ — 'didn't arrive' veya 'is missing'.",
        },
        {
          speaker: "npc",
          message: "I'm sorry to hear that. What flight were you on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "((flight |i was on )?(tk|ba|aa|dl|ua|lh|af)?\\s?\\d+)",
            "(from (istanbul|london|paris|frankfurt))",
            "(turkish airlines|lufthansa|british airways)",
            "(i flew from \\w+)",
            "(it was flight \\w+)",
          ],
          hint_tr:
            "Uçuş numarası + nereden: 'Flight TK1, from Istanbul.' Uçuş numarasını biniş kartından oku.",
        },
        {
          speaker: "npc",
          message: "Do you have your baggage claim tag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|here you go|here it is)",
            "(it('s| is) on my boarding pass)",
            "(let me (find|grab|check) it)",
            "(it should be on my (ticket|pass))",
            "(stapled to|stuck to) (my )?(ticket|boarding pass)",
            "(here)",
          ],
          hint_tr:
            "Genelde biniş kartına yapışıktır: 'Yes, it's on my boarding pass.' Telefonda da olabilir.",
        },
        {
          speaker: "npc",
          message: "What does your bag look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| is) (a )?(black|blue|red|grey|gray|silver))",
            "(medium|large|small|big) (size )?(suitcase|bag)",
            "(it has (wheels|a name tag|stickers))",
            "(it('s| is) hard[- ]?shell)",
            "(samsonite|american tourister|polo)",
            "(my name is on it)",
          ],
          hint_tr:
            "Renk + boyut + marka: 'It's a black, medium Samsonite. It has a red tag on it.'",
        },
        {
          speaker: "npc",
          message: "Where are you staying? We'll deliver it when it arrives.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at (the |a )?(hilton|marriott|hyatt))",
            "(my hotel is \\w+)",
            "(i('m| am) staying at \\w+)",
            "(here('s| is) the address)",
            "(it('s| is) (called|named) \\w+)",
            "(can i give you the address)",
          ],
          hint_tr:
            "Otel adı + isteğe bağlı adres: 'I'm staying at the Hilton Midtown — here's the address.'",
        },
        {
          speaker: "npc",
          message: "Okay, here's your reference number. We'll text you with updates.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.11 — Kapıyı Bulamadım (A2)
// ============================================================
// Aktarmada veya büyük havalimanında kaybolduğunda görevliye sormak.
export const airportLesson_44_11: BundledLesson = {
  id: "airport.44.11",
  skill_id: "airport",
  index: 11,
  title: "Kapıyı Bulamadım — Bilgi Bankosu",
  description:
    "Büyük havalimanı, kaybolduğun. Bilgi bankosuna gidip kapına nasıl gideceğini öğreniyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.11.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "how do I get to",
      tr_translation: "...e nasıl giderim",
      example: "How do I get to Gate B42?",
      example_tr: "B42 kapısına nasıl giderim?",
    },
    {
      id: "ex.44.11.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "terminal shuttle",
      tr_translation: "Terminaller arası servis aracı (büyük havalimanlarında)",
      example: "Take the terminal shuttle to Terminal 2.",
      example_tr: "Terminal 2'ye terminal servisini al.",
    },
    {
      id: "ex.44.11.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Heathrow gibi büyük bir havalimanı. Kapın başka terminalde, kayboldun, bilgi bankosuna gidiyorsun.",
      npc_role: "Information Desk Staff",
      setting: "Airport information desk, friendly helpful tone",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(i('m| am) (a bit )?lost)",
            "(i can't find (my )?gate)",
            "(how do i get to (gate |terminal )?\\w*\\d+)",
            "(where is (gate |terminal )?\\w+)",
            "(can you (help|tell me))",
          ],
          hint_tr:
            "Net aç: 'Hi, I'm lost. How do I get to Gate B42?' 'I lost' YANLIŞ → 'I'm lost' (passive yok, sıfat).",
        },
        {
          speaker: "npc",
          message: "Sure. What's your flight number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "((tk|ba|aa|dl|ua|lh|af)?\\s?\\d+)",
            "(my flight (is |number is )?\\w+)",
            "(it('s| is) flight \\w+)",
            "(here('s| is) my (ticket|boarding pass))",
            "(let me check)",
          ],
          hint_tr:
            "Sadece uçuş numarası: 'BA245.' veya biniş kartını uzat: 'Here's my boarding pass.'",
        },
        {
          speaker: "npc",
          message: "That's in Terminal 5. You're in Terminal 3 right now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how do i get (there|to terminal 5))",
            "(is it (far|close))",
            "(how long does it take)",
            "(can i walk)",
            "(do i need to take (the shuttle|a bus|a train))",
            "(oh no|seriously|that('s| is) far)",
          ],
          hint_tr:
            "Detay iste: 'How do I get to Terminal 5? Is it far?' Yürür mü, servis mi — sor.",
        },
        {
          speaker: "npc",
          message: "Take the free terminal shuttle. It takes about 15 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(where (do i|can i) (catch|find|get) (the |it))",
            "(where('s| is) the shuttle)",
            "(how often (does it|do they) (come|run))",
            "(is there a (sign|signs))",
            "(do i go (this|that|which) way)",
            "(can you (point|show))",
          ],
          hint_tr:
            "Konum sor: 'Where can I catch the shuttle?' İşaret sor: 'Can you point me in the right direction?'",
        },
        {
          speaker: "npc",
          message:
            "Down the escalator, turn right, follow the orange signs. Shuttle runs every 10 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|great|got it|perfect)",
            "(thanks (so much|a lot|very much))",
            "(appreciate it)",
            "(i'll go now)",
            "(have a (good|nice) day)",
            "(you('re| are) a (lifesaver|star))",
          ],
          hint_tr:
            "Teşekkür kısa: 'Thanks so much!' veya 'You're a lifesaver.' Native gibi samimi.",
        },
        {
          speaker: "npc",
          message: "You're welcome. Hurry up — boarding starts in 30 minutes!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.12 — Telefon/Wifi Sorunu (A2)
// ============================================================
// İniş sonrası SIM yok, wifi şifreli. Bilgi bankosu / mağazada yardım.
export const airportLesson_44_12: BundledLesson = {
  id: "airport.44.12",
  skill_id: "airport",
  index: 12,
  title: "Wifi/SIM — Aileme Haber Vermem Lazım",
  description:
    "Uçaktan indin, telefonun çalışmıyor, ailen merak ediyor. Havalimanı wifi'sini veya geçici SIM nasıl alacağını öğren.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.12.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "wifi password",
      tr_translation: "Wifi şifresi",
      example: "What's the wifi password here?",
      example_tr: "Buranın wifi şifresi nedir?",
    },
    {
      id: "ex.44.12.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "data plan / SIM card",
      tr_translation: "Veri paketi / SIM kartı",
      example: "Where can I buy a SIM card for a few days?",
      example_tr: "Birkaç günlük SIM nereden alabilirim?",
    },
    {
      id: "ex.44.12.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Havalimanı arrival hall'undasın. Telefonun çekmiyor, ailen kaygılı. Bilgi bankosuna gidiyorsun.",
      npc_role: "Information Desk Staff",
      setting: "Airport arrivals, helpful tone",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what can I do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(my phone (isn't|doesn't|won't) (work|connect|have service))",
            "(i can't (use|connect to) (my )?phone)",
            "(no (signal|service|data))",
            "(i need to (call|text) (my )?(family|home))",
            "(is there (free )?wifi)",
          ],
          hint_tr:
            "Net açıkla: 'Hi, my phone doesn't have service. I need to call my family.' 'My phone is no' YANLIŞ → 'doesn't work'.",
        },
        {
          speaker: "npc",
          message: "There's free wifi here. The network is called 'AirportFree'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is there a (password|code))",
            "(what('s| is) the (wifi )?password)",
            "(do i need (to |a )?(login|sign up))",
            "(is it really free)",
            "(how (do i|can i) connect)",
            "(any time limit)",
          ],
          hint_tr:
            "Şifre / nasıl bağlanılır sor: 'What's the password?' veya 'Do I need to log in?'",
        },
        {
          speaker: "npc",
          message: "No password. You just sign in with your email. It's free for 60 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it|great|okay)",
            "(only 60 minutes|just an hour)",
            "(what if i need more time)",
            "(can i (buy|get) (a )?sim (card)?)",
            "(where can i (get|buy) a sim)",
            "(is there a (phone|sim) shop)",
          ],
          hint_tr:
            "Bir saat yeter mi sor veya SIM iste: 'Can I buy a SIM card somewhere here?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, there's a Vodafone shop near Gate B. They sell tourist SIMs from 15 pounds.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|perfect|great|sounds good)",
            "(how do i (get|find) it)",
            "(where is gate b)",
            "(do they (have|sell) (data|internet))",
            "(15 pounds (for what|how much data))",
            "(i('ll| will) go (now|there) (now|right now)?)",
          ],
          hint_tr:
            "Yol sor veya detay al: 'How do I get to Gate B?' / 'Does the SIM include data?'",
        },
        {
          speaker: "npc",
          message: "Just down the hall on your right. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|that('s| is) all|that('s| is) it)",
            "(thanks (so much|a lot|very much))",
            "(you('ve| have) been (very |really )?helpful)",
            "(actually,? one more (thing|question))",
            "(where('s| is) the (bathroom|atm|exit))",
            "(have a (good|nice|great) day)",
          ],
          hint_tr:
            "Kapatma: 'No, that's all — thanks so much!' Veya ek soru: 'Actually, where's the ATM?'",
        },
        {
          speaker: "npc",
          message: "Have a great trip. You can't miss the shop — good luck!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.13 — Gümrük: Hediye Getirdim (A2)
// ============================================================
// Customs declaration form sorusu — hediye, baharat, lokum.
export const airportLesson_44_13: BundledLesson = {
  id: "airport.44.13",
  skill_id: "airport",
  index: 13,
  title: "Gümrük — Lokum Getirdim",
  description:
    "Customs (gümrük) hattı. Annenden lokum / baharat hediye var. Beyan etmen gerek mi? Sakin + dürüst yaklaşım.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.13.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "anything to declare",
      tr_translation: "Beyan edecek bir şey (klasik gümrük sorusu)",
      example: "Do you have anything to declare?",
      example_tr: "Beyan edecek bir şeyiniz var mı?",
    },
    {
      id: "ex.44.13.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "a gift for my friend",
      tr_translation: "Arkadaşıma hediye",
      example: "It's just a small gift for my friend.",
      example_tr: "Sadece arkadaşıma küçük bir hediye.",
    },
    {
      id: "ex.44.13.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Gümrük kontrolü. Lokum, çay, baharat var. Dürüst olmak en hızlı yol — yalan yakalanırsa para cezası.",
      npc_role: "Customs Officer",
      setting: "Customs hall, neutral but watchful",
      turns: [
        {
          speaker: "npc",
          message: "Do you have anything to declare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just|only) (some |a few )?(sweets|candy|chocolate|gifts)",
            "(i (have|brought) (some )?(turkish delight|lokum|tea|spices))",
            "(only (some )?food)",
            "(some gifts for (my )?(friend|family))",
            "(nothing (much|special))",
            "(maybe — i('m| am) not sure)",
          ],
          hint_tr:
            "Dürüst ol — kısa: 'Just some Turkish delight and tea — gifts for my friend.' Yalan söyleme.",
        },
        {
          speaker: "npc",
          message: "How much sweets are we talking about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just (one|two|a) box(es)?)",
            "(maybe (one|two) kilos?)",
            "(\\d+ (boxes|packets|kilos))",
            "(not (a lot|much))",
            "(a (small|little) amount)",
            "(about (\\d+ )?(grams|pounds|kilos))",
          ],
          hint_tr:
            "Miktar net + küçük göster: 'Just two boxes — maybe one kilo total.'",
        },
        {
          speaker: "npc",
          message: "Any meat, dairy, or fresh fruit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|none|nothing like that)",
            "(no meat|no fruit|no dairy)",
            "(just (sweets|sugar|dry)) (stuff|food)?",
            "(it('s| is) all (dry|sealed|packaged))",
            "(everything is (in )?(sealed )?packages)",
            "(no fresh (anything|food))",
          ],
          hint_tr:
            "ABD/UK'da et+meyve+süt sıkı yasak. 'No meat, no fruit — just dry sweets in sealed packs.'",
        },
        {
          speaker: "npc",
          message: "Can you open this bag, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|okay|no problem)",
            "(here|let me)",
            "(opening it now)",
            "(should i (take it out|show you))",
            "(do you (want|need) (to|me to) (take|open))",
            "(it('s| is) just (lokum|sweets|tea))",
          ],
          hint_tr:
            "Açmak normal — itiraz etme: 'Sure, no problem. Let me open it for you.'",
        },
        {
          speaker: "npc",
          message: "Okay, this is fine. Are these for personal use or for sale?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(personal|just personal|for me)",
            "(gifts (for my )?(friend|family|girlfriend|boyfriend))",
            "(it('s| is) not for sale)",
            "(i('m| am) (not |never )?selling)",
            "(only for (us|me|my family))",
            "(definitely personal)",
          ],
          hint_tr:
            "'Personal' veya 'gift' — net söyle: 'Just gifts for my friend, not for sale.'",
        },
        {
          speaker: "npc",
          message: "Okay, you're good to go. Enjoy your stay.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.14 — Aktarmayı Kaçırdım (B1)
// ============================================================
// Connecting flight'i kaçırdın — rebook iste, gece otelini sor.
export const airportLesson_44_14: BundledLesson = {
  id: "airport.44.14",
  skill_id: "airport",
  index: 14,
  title: "Aktarmayı Kaçırdım — Rebook İste",
  description:
    "İlk uçuş geç indi, aktarmayı kaçırdın. Havayolu kontuarında sakin + net rebook talep et.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.44.14.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I missed my connection",
      tr_translation: "Aktarma uçuşumu kaçırdım",
      example: "Hi, I missed my connection to Istanbul.",
      example_tr: "Merhaba, İstanbul aktarmamı kaçırdım.",
    },
    {
      id: "ex.44.14.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "rebook me on",
      tr_translation: "Beni ...a aktarın (yeni uçuşa yaz)",
      example: "Could you rebook me on the next flight?",
      example_tr: "Beni bir sonraki uçuşa aktarır mısınız?",
    },
    {
      id: "ex.44.14.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Frankfurt'ta aktarma uçağını kaçırdın çünkü Türkiye uçağı geç indi. Lufthansa kontuarındasın.",
      npc_role: "Airline Service Agent",
      setting: "Lufthansa transfer desk, late evening, busy",
      turns: [
        {
          speaker: "npc",
          message: "Next, please. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good evening)",
            "(i (just )?missed my (connection|connecting flight))",
            "(my first flight was (late|delayed))",
            "(i couldn't make my next flight)",
            "(could you (rebook|help) me)",
            "(what are my options)",
          ],
          hint_tr:
            "Sakin aç: 'Hi, I missed my connection to Istanbul because the first flight was delayed.' Suçlama yok, bilgi ver.",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. What was your original flight number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "((lh|tk|ba|aa)\\s?\\d+)",
            "(my flight (was |is )?\\w+)",
            "(here('s| is) my boarding pass)",
            "(i was on \\w+ from \\w+)",
            "(it was \\w+ to istanbul)",
          ],
          hint_tr:
            "Uçuş numarası ver: 'LH9, from Istanbul to Frankfurt, then LH600 to Boston.'",
        },
        {
          speaker: "npc",
          message: "I see. The next flight is tomorrow morning at 8am. Does that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|that works|sure|okay)",
            "(anything (sooner|earlier|tonight))",
            "(is there nothing tonight)",
            "(what about (another airline|partners))",
            "(i('ll| will) take (the |it|that))",
            "(can i (be on (a )?standby|standby))",
          ],
          hint_tr:
            "Daha erken sor: 'Anything earlier tonight, or do I have to wait until morning?'",
        },
        {
          speaker: "npc",
          message: "Nothing earlier, I'm afraid. Since this is our delay, you get a hotel voucher.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|great|appreciate it|okay)",
            "(where do i (get|pick up) the (voucher|hotel))",
            "(which hotel is it)",
            "(do i (also )?get (a )?meal (voucher|coupon))",
            "(what about my (bags|luggage))",
            "(do i need to (get|claim) my bags)",
          ],
          hint_tr:
            "Detay iste: 'Where do I get the voucher? And do you also cover meals?'",
        },
        {
          speaker: "npc",
          message:
            "Meal voucher too — print at the end. Bags will be tagged through to Boston, don't worry.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|thanks|got it)",
            "(what time should i be (here|back))",
            "(when does check[- ]?in (open|start))",
            "(should i come (back )?early)",
            "(anything else (i should know|to do))",
            "(thanks so much for your help)",
          ],
          hint_tr:
            "Sabah saatini sor: 'What time should I be back here tomorrow?' Veda samimi: 'Thanks for your help.'",
        },
        {
          speaker: "npc",
          message:
            "Be at Gate B7 by 7am. Shuttle to the hotel is right outside Door 3. Sleep well.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.15 — Uçakta Yemek Tercihi (B1)
// ============================================================
// Vegetarian / gluten-free / halal isteme, kalkıştan sonra.
export const airportLesson_44_15: BundledLesson = {
  id: "airport.44.15",
  skill_id: "airport",
  index: 15,
  title: "Uçakta Yemek — \"Vejetaryen Var mı?\"",
  description:
    "Uçaktasın, yemek servisi geliyor. Sen vejetaryen/glutensiz/helal istiyorsun. Hosteste sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.15.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "vegetarian option",
      tr_translation: "Vejetaryen seçenek",
      example: "Is there a vegetarian option today?",
      example_tr: "Bugün vejetaryen seçeneği var mı?",
    },
    {
      id: "ex.44.15.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "special meal",
      tr_translation: "Özel yemek (önceden istenmiş diyet)",
      example: "I requested a special meal when I booked.",
      example_tr: "Rezervasyonda özel yemek istemiştim.",
    },
    {
      id: "ex.44.15.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Uzun uçuş, yemek arabası senin sıraya geldi. Vejetaryensin ama özel yemek talep etmemişsin. Hostes ne yapabilir?",
      npc_role: "Flight Attendant",
      setting: "Mid-flight meal service, friendly tone",
      turns: [
        {
          speaker: "npc",
          message:
            "Chicken or pasta tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is the pasta vegetarian)",
            "(do you have (a )?vegetarian (option|meal))",
            "(i('m| am) vegetarian)",
            "(i don't eat (meat|chicken))",
            "(any (meat[- ]?free|veggie) options)",
            "(what('s| is) in the pasta)",
          ],
          hint_tr:
            "Doğrudan sor: 'I'm vegetarian — is the pasta meat-free?' 'I am not eat meat' YANLIŞ → 'I don't eat meat'.",
        },
        {
          speaker: "npc",
          message: "The pasta has a meat sauce. Did you request a special meal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i didn't|i forgot)",
            "(i (didn't|forgot to) request)",
            "(actually i (did|requested))",
            "(no — i forgot to (book|order) (one|it))",
            "(is there anything else)",
            "(is it (too )?late (now|to ask))",
          ],
          hint_tr:
            "Dürüst ol: 'No, I forgot to request one when I booked. Is there anything else?'",
        },
        {
          speaker: "npc",
          message: "Let me check if we have any spare vegetarian meals.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|that would be great|appreciate it|amazing)",
            "(thanks so much)",
            "(i('d| would) really appreciate (it|that))",
            "(no rush)",
            "(take your time)",
            "(if not (i can )?(just )?have (the )?bread)",
          ],
          hint_tr:
            "Minnet göster: 'That would be amazing, thank you.' Eğer yoksa: 'If not, just bread is fine.'",
        },
        {
          speaker: "npc",
          message:
            "Good news — we have one extra vegetarian pasta. Here you go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you so much|amazing|life[- ]?saver|thanks a lot)",
            "(you('re| are) (a )?(star|lifesaver))",
            "(could i (also )?have (some )?water)",
            "(could i get (some )?(bread|salad|water))",
            "(this looks (great|delicious))",
            "(perfect — thanks (again|so much))",
          ],
          hint_tr:
            "Çok teşekkür + ek istek: 'Thank you so much! Could I also have some water?'",
        },
        {
          speaker: "npc",
          message: "Of course. Water, juice, or coffee with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(water (please|would be (great|fine)))",
            "(just water)",
            "(coffee please|tea please)",
            "(actually (a )?juice (sounds (good|nice)))",
            "(could i have (both|all))",
            "(water (and|with) (a )?coffee)",
          ],
          hint_tr:
            "Net seç: 'Water, please.' Veya 'A water and a coffee, thanks.'",
        },
        {
          speaker: "npc",
          message: "Coming up. Enjoy your meal.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.16 — Hostese Yardım Sor (B1)
// ============================================================
// Uçakta entry form, hapın ne zaman alacağı, blanket isteme.
export const airportLesson_44_16: BundledLesson = {
  id: "airport.44.16",
  skill_id: "airport",
  index: 16,
  title: "Hostes Yardımı — Form ve Battaniye",
  description:
    "Uçakta entry form anlamadın, üşüdün, hap içeceksin. Hostese aynı anda 3 şey sorma sanatı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.16.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "could you help me with",
      tr_translation: "...la bana yardım eder misin",
      example: "Could you help me with this form?",
      example_tr: "Bu formla bana yardım eder misin?",
    },
    {
      id: "ex.44.16.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "an extra blanket",
      tr_translation: "Bir ekstra battaniye",
      example: "Could I get an extra blanket, please?",
      example_tr: "Bir ekstra battaniye alabilir miyim?",
    },
    {
      id: "ex.44.16.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Uçak inişe 3 saat var. Üşüdün, immigration formu anlamadın, hap içmek için su istiyorsun. Hostesi durdur.",
      npc_role: "Flight Attendant",
      setting: "Mid-flight, dim cabin, attendant walking past",
      turns: [
        {
          speaker: "npc",
          message: "Excuse me, is there something I can help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|hi|sorry to bother you)",
            "(could you help me (with )?(this|the)? form)",
            "(i don't understand (this|the) form)",
            "(can you (explain|help me with) (the )?form)",
            "(it('s| is) the (immigration|customs|entry) form)",
            "(i('m| am) (a bit )?(confused|lost) (about|on) (this|it))",
          ],
          hint_tr:
            "Net + kibar: 'Yes, sorry — could you help me with this form? I don't understand part of it.'",
        },
        {
          speaker: "npc",
          message: "Of course. Which part is confusing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this (one|part|section|line))",
            "(this question (about|on))",
            "(it asks (about|for))",
            "(i don't know (what|how) to (write|answer))",
            "(what does \\w+ mean)",
            "(should i (write|put))",
          ],
          hint_tr:
            "Parmağınla göster + sor: 'This part — what does \"port of entry\" mean?'",
        },
        {
          speaker: "npc",
          message: "Port of entry is the airport where you'll first land — write 'JFK'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|ah|okay|got it|i see|that makes sense)",
            "(thank you|thanks)",
            "(that('s| is) (so |much )?(simpler|easier|clearer))",
            "(perfect|great)",
            "(actually,? (could|can) i (ask|also))",
            "(one more thing)",
          ],
          hint_tr:
            "Onayla + ikinci istek için köprü: 'Got it, thanks. Actually, could I ask one more thing?'",
        },
        {
          speaker: "npc",
          message: "Sure, what else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i (have|get)) (an )?extra blanket",
            "(it('s| is) (a bit |kind of |really )?(cold|chilly))",
            "(i('m| am) (a bit |kind of |really )?(cold|freezing))",
            "(and (some |a glass of )?water)",
            "(also (some )?water for my (pill|medicine))",
            "(i need (to take|some water for)) (a )?(pill|medicine|tablet)",
          ],
          hint_tr:
            "İki istek birleştir: 'Could I get an extra blanket? And some water — I need to take a pill.'",
        },
        {
          speaker: "npc",
          message: "Sure, I'll bring you a blanket and a bottle of water in a moment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|very much))",
            "(thanks|appreciate it|amazing)",
            "(you('re| are) (so )?kind|that('s| is) so kind)",
            "(no rush)",
            "(thanks a lot for your help)",
            "(i really appreciate (it|your help))",
          ],
          hint_tr:
            "Samimi teşekkür: 'Thank you so much — I really appreciate it.'",
        },
        {
          speaker: "npc",
          message: "No problem at all. Try to get some rest.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.17 — Power Bank Sorusu (B1)
// ============================================================
// Güvenlikte: power bank kabin/bagaj sorusu, lityum-iyon yasak.
export const airportLesson_44_17: BundledLesson = {
  id: "airport.44.17",
  skill_id: "airport",
  index: 17,
  title: "Power Bank — Kabine mi Bagaja mı?",
  description:
    "Check-in / güvenlikte power bank var. Lityum-iyon kuralı, mAh / Wh sınırı. Görevliye doğru cümle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.17.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "is this allowed",
      tr_translation: "Bu serbest mi / izinli mi",
      example: "Is this power bank allowed in carry-on?",
      example_tr: "Bu power bank kabin çantasında izinli mi?",
    },
    {
      id: "ex.44.17.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "lithium-ion battery",
      tr_translation: "Lityum-iyon pil (uçakta sıkı kural)",
      example: "It has a lithium-ion battery — 20,000 mAh.",
      example_tr: "İçinde lityum-iyon pil var — 20.000 mAh.",
    },
    {
      id: "ex.44.17.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Check-in görevlisi büyük valizini açtı, içinde power bank gördü. Lityum-iyon kabinde, kargo bölümünde yasak.",
      npc_role: "Check-in Agent",
      setting: "Check-in counter, polite but firm",
      turns: [
        {
          speaker: "npc",
          message: "Is this a power bank in your suitcase?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that('s| is) right)",
            "(it('s| is) (my )?power bank)",
            "(for my phone)",
            "(is (it|that) (a )?problem)",
            "(should i (take it out|move it))",
            "(is it not (allowed|okay))",
          ],
          hint_tr:
            "Onayla + sor: 'Yes, that's my power bank. Is that a problem?'",
        },
        {
          speaker: "npc",
          message:
            "Power banks aren't allowed in checked baggage. They have to go in your carry-on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|okay|i didn't know|sorry)",
            "(i didn't (know|realize))",
            "(should i (move|put|take)) it (to|in|out)",
            "(can i (move|put) it (in my carry[- ]?on|in the cabin bag))",
            "(let me (take it out|get it))",
            "(no problem (— i('ll| will) (move|fix) it))",
          ],
          hint_tr:
            "Sakin + işbirlikçi: 'Oh, I didn't know. I'll move it to my carry-on now.'",
        },
        {
          speaker: "npc",
          message: "Yes, please. Also, what's the capacity? Is it under 20,000 mAh?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i think so)",
            "(it('s| is) (10|10,?000|twenty thousand|20,?000)( mah)?)",
            "(let me check)",
            "(it should be (under|less than) (20,?000|20k))",
            "(it says \\w+ on the back)",
            "(i('m| am) not sure (— )?(can|let me) (check|look))",
          ],
          hint_tr:
            "Kontrol et + cevap: 'Let me check — it says 10,000 mAh on the back, so yes.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, that's allowed. Anything above 27,000 mAh needs special approval.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good|got it|understood|okay)",
            "(thanks for letting me know)",
            "(i didn't know (that|about) (the |this )?rule)",
            "(is the rule the same (for|on) (the way back|the return))",
            "(should i (always|usually) put (it|power banks) in (carry[- ]?on|my hand bag))",
            "(any other (rules|things) i should know)",
          ],
          hint_tr:
            "Sor + öğren: 'Got it — thanks. Is the rule the same on the return flight?'",
        },
        {
          speaker: "npc",
          message:
            "Same rule on most airlines. Always carry-on, never checked. Have a good flight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|good to know)",
            "(thanks so much|appreciate it)",
            "(have a good (one|day) too)",
            "(you too)",
            "(i('ll| will) remember (that|next time))",
            "(thanks for your patience)",
          ],
          hint_tr:
            "Hızlı veda: 'Thanks so much — good to know! Have a good one.'",
        },
        {
          speaker: "npc",
          message: "You too. Gate 22, boarding at 1pm.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.18 — Tekerlekli Sandalye / Yardım Talebi (B1)
// ============================================================
// Annen / büyükbaban için wheelchair / mobility assistance iste.
export const airportLesson_44_18: BundledLesson = {
  id: "airport.44.18",
  skill_id: "airport",
  index: 18,
  title: "Tekerlekli Sandalye — Annem İçin Yardım",
  description:
    "Annenle/büyükbabanla uçuyorsun, ayakta uzun yürüyemez. Check-in'de wheelchair / mobility assistance iste.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.18.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "wheelchair assistance",
      tr_translation: "Tekerlekli sandalye yardımı",
      example: "Could we have wheelchair assistance to the gate?",
      example_tr: "Kapıya kadar tekerlekli sandalye yardımı alabilir miyiz?",
    },
    {
      id: "ex.44.18.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "she has trouble walking",
      tr_translation: "Yürümede zorluk çekiyor",
      example: "My mother has trouble walking long distances.",
      example_tr: "Annem uzun mesafe yürümede zorluk çekiyor.",
    },
    {
      id: "ex.44.18.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Check-in bankosundasın. Annen yanında, dizinden ameliyatlı. Tekerlekli sandalye yardımı talep ediyorsun.",
      npc_role: "Check-in Agent",
      setting: "Check-in counter, mother seated nearby",
      turns: [
        {
          speaker: "npc",
          message: "Good morning! Checking in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|hi|good morning)",
            "(checking in for (flight |the )?\\w+)",
            "(two people|two of us|me and my (mom|mother|father|grandmother))",
            "(also,? (could|can) we (have|get|request)) (some )?wheelchair (assistance|help)",
            "(my (mom|mother) (has|needs) (some )?help (walking|getting around))",
            "(she can't walk (long distances|far))",
          ],
          hint_tr:
            "Check-in + istek aynı anda: 'Yes, checking in for two — and could we have wheelchair assistance for my mom?'",
        },
        {
          speaker: "npc",
          message: "Of course. Did you request it when booking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i didn't|i forgot)",
            "(i didn't (know|realize) we needed to)",
            "(no — is it (too )?late)",
            "(can we (still |request it )?(now|here))",
            "(i thought we could (ask|do it) here)",
            "(her knee (just |has just )?started (hurting|bothering her))",
          ],
          hint_tr:
            "Dürüst + esnek: 'No, I didn't — can we still request it now?'",
        },
        {
          speaker: "npc",
          message: "Yes, no problem. I'll arrange it. Where should they meet you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here|right here|at the counter)",
            "(after check[- ]?in)",
            "(once we('re| are) done here)",
            "(can they come (to|here) (now|soon))",
            "(when (does|will) (someone|they) come)",
            "(where should we wait)",
          ],
          hint_tr:
            "Net: 'Right here would be perfect. How soon can they come?'",
        },
        {
          speaker: "npc",
          message: "Someone will be here in about 5 minutes. They'll take her through security and to the gate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|thank you so much|amazing)",
            "(can i go (with|along) (her|my mom))",
            "(do i (also )?go (through|with her))",
            "(will they (stay|wait) at the gate)",
            "(will they help her (board|get on))",
            "(thank you for arranging (it|this))",
          ],
          hint_tr:
            "Detay sor: 'Thank you — can I go with her, or do I go separately?'",
        },
        {
          speaker: "npc",
          message:
            "You can go together. They'll take both of you through priority lanes and stay until boarding.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|very much))",
            "(this means a lot)",
            "(you('re| are) (so )?kind|that('s| is) so kind)",
            "(thanks for making this (easy|smooth))",
            "(we really appreciate it)",
            "(have a (good|great) day)",
          ],
          hint_tr:
            "Samimi minnet: 'Thank you so much, this means a lot.' Native + sıcak ton.",
        },
        {
          speaker: "npc",
          message: "My pleasure. Have a great flight, and take care of mom.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.19 — Upgrade İste (B2)
// ============================================================
// Premium / business upgrade — sebebi sun, ücret sor, esnek ol.
export const airportLesson_44_19: BundledLesson = {
  id: "airport.44.19",
  skill_id: "airport",
  index: 19,
  title: "Upgrade İste — Long-haul Rahatlığı",
  description:
    "Uzun uçuş, premium economy / business class upgrade iste. Mileage + boş koltuk + kibar dil.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.44.19.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "any upgrade availability",
      tr_translation: "Upgrade müsaitliği (uygun yer var mı)",
      example: "Is there any upgrade availability on today's flight?",
      example_tr: "Bugünkü uçuşta upgrade müsaitliği var mı?",
    },
    {
      id: "ex.44.19.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "use my miles / pay the difference",
      tr_translation: "Mil kullan veya farkı öde",
      example: "Could I use my miles or pay the difference?",
      example_tr: "Millerimi kullanabilir miyim ya da farkı ödeyebilir miyim?",
    },
    {
      id: "ex.44.19.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "12 saatlik New York uçuşu. Check-in bankosunda, kibar ama net upgrade pazarlığı.",
      npc_role: "Check-in Agent",
      setting: "Premium check-in counter, calm afternoon",
      turns: [
        {
          speaker: "npc",
          message: "Good afternoon. Checking in for New York?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|good afternoon)",
            "(checking in for (flight )?\\w+ to (new york|jfk))",
            "(here('s| is) my passport)",
            "(also,? (i was wondering|by any chance))",
            "(quick question)",
            "(before we (start|finish))",
          ],
          hint_tr:
            "Check-in + soru için köprü: 'Yes, checking in for TK1 to JFK. By any chance, is there any upgrade availability today?'",
        },
        {
          speaker: "npc",
          message: "We do have a couple of seats open in business. Were you looking to upgrade?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i was hoping (so|to)|that would be (great|amazing))",
            "(if (it('s| is) )?possible)",
            "(could i (upgrade|move up))",
            "(what (are )?(my )?options)",
            "(how (does|would) it work)",
            "(what would it (cost|run))",
          ],
          hint_tr:
            "Kibar + meraklı: 'Yes, if possible — what are my options to upgrade?' 'I want upgrade' kaba.",
        },
        {
          speaker: "npc",
          message: "Cash upgrade is 1,200 dollars. Or 60,000 miles if you're with our program.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me think)",
            "(could i use my miles)",
            "(i('m| am) a (silver|gold|elite|frequent flyer))",
            "(any chance (of |for )?a discount)",
            "(is there premium economy as a middle option)",
            "(what about (just )?premium economy)",
          ],
          hint_tr:
            "Pazarlık: 'Hmm — what about premium economy as a middle option?' Mil sor: 'Could I use my miles instead?'",
        },
        {
          speaker: "npc",
          message:
            "Premium economy is 350 dollars. Includes lounge access, priority boarding, and a better meal.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sold|let('s| us) do it)",
            "(that sounds (better|good|reasonable))",
            "(i('ll| will) take (the |that)? premium economy)",
            "(go ahead and (charge|book) (it|me))",
            "(can i pay with (my )?card)",
            "(here('s| is) my (card|credit card))",
            "(sounds (good|like a deal))",
          ],
          hint_tr:
            "Net karar: 'Perfect — let's do it. Here's my card.'",
        },
        {
          speaker: "npc",
          message:
            "Excellent choice. I'll process the upgrade — boarding pass with lounge access coming right up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|very much))",
            "(appreciate it)",
            "(you('re| are) (a )?(star|lifesaver))",
            "(thanks for making my day)",
            "(this is going to (be a |make this) great flight)",
            "(have a (good|great) one)",
          ],
          hint_tr:
            "Sıcak veda: 'Thank you so much — you just made this flight a lot better!'",
        },
        {
          speaker: "npc",
          message: "Enjoy your flight to New York.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.20 — Transit Vize Yok, Ne Yapayım (B2)
// ============================================================
// Layover dilemma — visasız yolcu havalimanından çıkamaz, otel iste,
// mağaza nerede vs.
export const airportLesson_44_20: BundledLesson = {
  id: "airport.44.20",
  skill_id: "airport",
  index: 20,
  title: "Layover Dilemma — 14 Saat, Vize Yok",
  description:
    "14 saatlik layover, transit vizen yok = havalimanından çıkamazsın. Lounge / nap room / mağaza dolaşma stratejisi.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.44.20.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "transit visa / land-side vs air-side",
      tr_translation:
        "Transit vize / havalimanı içi vs dışı (kontrolden geçtiysen 'air-side')",
      example: "I don't have a transit visa, so I'll stay air-side.",
      example_tr: "Transit vizem yok, havalimanı içinde kalacağım.",
    },
    {
      id: "ex.44.20.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "killing time during a layover",
      tr_translation: "Aktarma sırasında vakit öldürmek",
      example: "How do you usually kill time during a long layover?",
      example_tr: "Uzun aktarmalarda nasıl vakit öldürürsün?",
    },
    {
      id: "ex.44.20.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Doha havalimanında 14 saatin var, Türk pasaportlu, transit vizen yok. Bilgi bankosunda strateji çıkarıyorsun.",
      npc_role: "Information Desk Staff",
      setting: "Doha Airport information desk, calm and helpful",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning|good evening)",
            "(i('ve| have) got|i have) (a )?(long )?layover",
            "(\\d+ hours? (until|before) (my next|the next) flight)",
            "(i don't have (a )?transit visa)",
            "(can('t| not) leave the airport)",
            "(what (can i|should i) do (for|during) (the layover|\\d+ hours?))",
          ],
          hint_tr:
            "Tam açıkla: 'Hi, I've got a 14-hour layover and no transit visa. What can I do air-side?'",
        },
        {
          speaker: "npc",
          message:
            "No problem — plenty of things air-side. Have you eaten? Shopped? Rested?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('ve| have) eaten|i ate)",
            "(i (haven't|have not) (eaten|rested|slept))",
            "(i('m| am) (mostly )?(tired|exhausted))",
            "(honestly,? i need (some )?(sleep|rest))",
            "(what i really need is (a )?(shower|nap|bed))",
            "(is there (anywhere|somewhere) (to )?(sleep|rest|nap))",
          ],
          hint_tr:
            "Öncelik söyle: 'Honestly, I'm exhausted — is there anywhere to sleep?'",
        },
        {
          speaker: "npc",
          message:
            "You can book a sleep pod or a day room at the transit hotel — both are inside the airport.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how much (does it |do they )?cost)",
            "(what('s| is) the difference)",
            "(which would you (recommend|suggest))",
            "(can i pay by (the )?hour)",
            "(do i need to (book|reserve) (in advance|now))",
            "(what about (a )?shower)",
          ],
          hint_tr:
            "Fiyat + tercih: 'How much do they cost, and which would you recommend for 14 hours?'",
        },
        {
          speaker: "npc",
          message:
            "Sleep pod is 30 dollars for 4 hours. Day room is 90 for 12 hours, with shower and bed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the day room sounds (better|right))",
            "(i('ll| will) (go with|take) the day room)",
            "(makes (more )?sense for (14|fourteen) hours)",
            "(where (do i |can i )?book (it|that))",
            "(could you (book|reserve) it for me)",
            "(any (cheaper|other) options)",
          ],
          hint_tr:
            "Karar + nereden: 'The day room makes more sense — where do I book it?'",
        },
        {
          speaker: "npc",
          message:
            "Two minutes past duty-free. Prayer room is on level 2, free wifi everywhere — passport and boarding pass for sign-in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you so much|amazing|perfect|got it)",
            "(you('ve| have) been (so |really )?helpful)",
            "(appreciate it)",
            "(thanks for (the )?(tips|info))",
            "(you('re| are) (a )?(star|lifesaver))",
            "(have a (good|great) day)",
          ],
          hint_tr:
            "Sıcak veda: 'Thanks so much, you've been really helpful!' Native ritmi.",
        },
        {
          speaker: "npc",
          message: "Happy to help. Enjoy your rest, and have a safe flight onwards.",
        },
      ],
    },
  ],
};

// ============================================================
// Topluca dışa aktarma — lessons.ts buradan tek seferde import eder.
// ============================================================
export const airportExpandedLessons: BundledLesson[] = [
  airportLesson_44_9,
  airportLesson_44_10,
  airportLesson_44_11,
  airportLesson_44_12,
  airportLesson_44_13,
  airportLesson_44_14,
  airportLesson_44_15,
  airportLesson_44_16,
  airportLesson_44_17,
  airportLesson_44_18,
  airportLesson_44_19,
  airportLesson_44_20,
];
