// Daily - Transport lessons
// Skill: daily.transport (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 17.1 — Uber / Lyft Ride
// ============================================================
export const dailyTransportLesson_17_1: BundledLesson = {
  id: "daily.transport.17.1",
  skill_id: "daily.transport",
  index: 1,
  title: "Uber / Lyft Yolculugu",
  description:
    "Uber'a binerken / sirasinda / inerken: 'Wrong address', 'pull over', '5-star kalibi'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dt17.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Pull over here",
      tr_translation: "Buraya yanaş (Uber'a)",
      example: "Could you pull over here? Thanks!",
      example_tr: "Buraya yanaşır mısın? Teşekkürler!",
    },
    {
      id: "ex.dt17.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Adres yanlis gosterdi galiba — bu nokta'da indireceksiniz dimi?",
      target: "I think the address pulled up wrong — you're dropping me here, right?",
      accepted_variants: [
        "Quick check — the app sent us to the wrong spot?",
        "Sorry, looks like the GPS is off — we're going to X, right?",
        "Address seems wrong on the app — confirming X is the drop?",
        "Heads up — destination might be a block off.",
      ],
      tr_hint:
        "Uber app adres yanlis verebilir. 'Pulled up wrong' = uygulamada yanlis cikmis. Erken duzelt.",
    },
    {
      id: "ex.dt17.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Mind ___ window down a bit?",
      answer: "rolling",
      distractors: ["putting", "opening", "lowering"],
      tr_hint:
        "'Mind rolling the window down' = camı acar misin. Uber'da hava kalibi.",
    },
    {
      id: "ex.dt17.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Anywhere",
        "around",
        "the",
        "corner",
        "is",
        "fine",
      ],
      correct_sentence: "Anywhere around the corner is fine",
      tr_translation: "Köşede herhangi bir yere bırakman yeterli.",
    },
    {
      id: "ex.dt17.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Stop. Now. Here.",
      correct_sentence:
        "Could you pull over up ahead? Anywhere on the right is fine — thanks!",
      tr_explanation:
        "'Stop. Now. Here.' = panik / emir = kotu deneyim. Doğru: 'Could you pull over' + spesifik nokta.",
    },
    {
      id: "ex.dt17.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber'a bindin, kisa konusma + indigin yer konusu.",
      npc_role: "Uber Driver",
      setting: "Uber ride",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello)",
            "(headed (to|toward)|going to)",
            "(\\d+ (\\w+ street|broadway|times square))",
            "(thanks|appreciate it)",
            "(quick stop|short ride)",
          ],
          hint_tr:
            "Sicak ac: 'Hey — headed to Times Square. Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "No problem. Should be about 15 minutes with this traffic.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|works for me)",
            "(any (preference|particular) (route|way))",
            "(mind (rolling|cracking) the window)",
            "(temperature okay|cool with the ac)",
            "(little chilly|bit warm)",
            "(playlist sounds great|love this music)",
          ],
          hint_tr:
            "Casual: 'Works for me. Mind cracking the window?'",
        },
        {
          speaker: "npc",
          message:
            "Sure thing — let me know when we're close to your stop.",
        },
      ],
    },
    {
      id: "ex.dt17.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uber app adres yanlis verdi — ILK adim?",
          options: [
            "Surucuye kizmak",
            "Sakince soyle + kendi adresi tekrar et",
            "Sus",
            "Indir",
          ],
          correct_index: 1,
          tr_explanation:
            "Surucu app'in dedigine gider. Erken duzeltme = vakit kayip yok.",
        },
        {
          question: "Inecek yer geldi NE soylenir?",
          options: [
            "Stop now",
            "Could you pull over up ahead? + spesifik nokta",
            "Hicbir sey",
            "Atla aniden",
          ],
          correct_index: 1,
          tr_explanation:
            "Surucu trafik halinde. 'Up ahead' = guvenli ininme yeri secebilir.",
        },
        {
          question: "Kucuk sohbete acik olmamak istersen?",
          options: [
            "Bagir",
            "Cep telefonu ile mesgul ol + nazikce cevap ver",
            "Kotu davran",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Surucu de sohbet zorunda degil. Telefonla mesgul = kibarca isaret.",
        },
      ],
    },
    {
      id: "ex.dt17.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you pull over right here?",
      ipa: "kʊd jə pʊl ˈoʊvər raɪt hɪər",
      tr_hint:
        "Iniş kalibi. 'Pull over' = yanaş. 'Right here' = tam buraya. Saygili emir.",
    },
    {
      id: "ex.dt17.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Anywhere on the right is fine, thanks.",
      voice_hint: "male_us",
      tr_hint:
        "Esnek iniş noktasi. 'Anywhere on the right' bağlanır → 'eni-wer-on-ðə-rayt'. 'Is fine' net.",
    },
    {
      id: "ex.dt17.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "The app sent me to the wrong pickup location.",
      transcription_target: "The app sent me to the wrong pickup location.",
      tr_hint:
        "Uber soför yorumu. 'Sent me to' = beni gönderdi. 'Wrong pickup location' = yanlis alis noktasi.",
    },
    {
      id: "ex.dt17.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "pull over",
      tr_translation: "Yanaş, kenara çek",
      example: "Could you pull over up ahead by the corner?",
      example_tr: "Önümüzdeki köşeye yanaşır mısın?",
    },
    {
      id: "ex.dt17.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Door open here fast!",
      correct_sentence:
        "Could you pull over up ahead — anywhere on the right is fine, thanks!",
      tr_explanation:
        "Panik + emir. Doğru: 'Could you pull over' + esnek lokasyon (anywhere on the right) + sicak tesekkur.",
    },
  ],
};

// ============================================================
// Lesson 17.2 — Subway / Metro (Metro Kullanimi)
// ============================================================
export const dailyTransportLesson_17_2: BundledLesson = {
  id: "daily.transport.17.2",
  skill_id: "daily.transport",
  index: 2,
  title: "Metro / Subway Kullanimi",
  description:
    "Metro istasyonunda: hat bulma, kart calmiyor, donus, biniyor musun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dt17.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Which line goes to",
      tr_translation: "Hangi hat ... gidiyor?",
      example: "Which line goes to Brooklyn?",
      example_tr: "Hangi hat Brooklyn'e gidiyor?",
    },
    {
      id: "ex.dt17.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu hat Times Square'a gidiyor mu? Yoksa aktarma mi yapmaliyim?",
      target: "Does this line go to Times Square, or do I need to transfer?",
      accepted_variants: [
        "Is this train heading to Times Square or should I switch?",
        "Will this take me to Times Square directly?",
        "Times Square — direct from this line?",
        "Do I stay on this train for Times Square?",
      ],
      tr_hint:
        "'Direct' = aktarmasiz. 'Transfer' = aktarma yapmak. NYC metro klasik soru.",
    },
    {
      id: "ex.dt17.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Card isn't ___ — any help?",
      answer: "scanning",
      distractors: ["working", "reading", "going"],
      tr_hint:
        "'Card isn't scanning' = kart okumuyor. Metro turnike sorunu klasigi.",
    },
    {
      id: "ex.dt17.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "How",
        "many",
        "stops",
        "to",
        "Union",
        "Square",
      ],
      correct_sentence: "How many stops to Union Square",
      tr_translation: "Union Square'a kaç durak var?",
    },
    {
      id: "ex.dt17.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Train Brooklyn?",
      correct_sentence:
        "Excuse me — does this train go to Brooklyn directly?",
      tr_explanation:
        "'Train Brooklyn?' = grammatik degil + kaba. Doğru: tam soru + 'directly' aktarma kontrolu.",
    },
    {
      id: "ex.dt17.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "NYC metro platforunda baska bir yolcuya hat sorma.",
      npc_role: "Fellow Subway Rider",
      setting: "Subway platform",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry to bother)",
            "(quick question|wondering)",
            "(does this (line|train|track))",
            "(go (to|toward)|head (to|toward)|stop at)",
            "(brooklyn|queens|union square|grand central|times square)",
            "(transfer|switch|direct)",
          ],
          hint_tr:
            "Saygili: 'Excuse me — does this train go to Brooklyn directly?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, this one's direct. Five stops.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|amazing)",
            "(thank you|thanks (so much|a lot))",
            "(any stop|specific stop) (i should (look out for|watch for|get off at))",
            "(life saver|so helpful)",
            "(have a (good|great) (day|one))",
          ],
          hint_tr:
            "Onayla: 'Perfect — thank you so much!'",
        },
        {
          speaker: "npc",
          message:
            "No problem! Just listen for the announcement.",
        },
      ],
    },
    {
      id: "ex.dt17.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Metro hat sorarken EN onemli sey?",
          options: [
            "Sadece sehri soyle",
            "Direct / Transfer netligi sor",
            "Kart kontrol et",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "NYC, Londra metroda aktarma kompleks. Erken netleştir = yanlis trene binme",
        },
        {
          question: "Kart turnikede calismadi NE yap?",
          options: [
            "Atla",
            "Sakince personele veya yolcuya 'card isn't scanning' soyle",
            "Bagir",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Atlamak = ceza. Personele sor = bos kartı dolduran metoda baglanma.",
        },
        {
          question: "Listen for the announcement ne demek?",
          options: [
            "Anonsu dinle — sonraki duragi kacirma",
            "Ses kontrol et",
            "Konus",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Anonslar duragi soyler. Sessizce dinleyerek inecegin yeri kontrol et.",
        },
      ],
    },
    {
      id: "ex.dt17.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Does this train go to Brooklyn?",
      ipa: "dʌz ðɪs treɪn ɡoʊ tə ˈbrʊklɪn",
      tr_hint:
        "Metro klasigi. 'Does this' bağlanır → 'dʌs-ðis'. 'Brooklyn' iki hece: 'BRUK-lin'.",
    },
    {
      id: "ex.dt17.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Do I need to transfer or is this direct?",
      voice_hint: "female_us",
      tr_hint:
        "Aktarma kontrolu. 'Transfer' = aktarma. 'Direct' = aktarmasiz. NYC subway klasik soru.",
    },
    {
      id: "ex.dt17.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Stand clear of the closing doors please.",
      transcription_target: "Stand clear of the closing doors please.",
      tr_hint:
        "NYC subway klasik anonsu. 'Stand clear' = uzak dur. 'Closing doors' = kapanan kapilar.",
    },
    {
      id: "ex.dt17.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "transfer",
      tr_translation: "Aktarma yap",
      example: "You'll need to transfer at Times Square.",
      example_tr: "Times Square'da aktarma yapman lazim.",
    },
    {
      id: "ex.dt17.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Train Brooklyn yes no?",
      correct_sentence:
        "Excuse me — does this train go to Brooklyn, or do I need to transfer?",
      tr_explanation:
        "Belirsiz + grammatik degil. Doğru: 'Excuse me' + tam soru + alternatif (transfer kontrolu).",
    },
  ],
};

// ============================================================
// Lesson 17.3 — Airport Transfer (Havalimani Transferi)
// ============================================================
export const dailyTransportLesson_17_3: BundledLesson = {
  id: "daily.transport.17.3",
  skill_id: "daily.transport",
  index: 3,
  title: "Havalimani Transferi",
  description:
    "Havalimanindan otele / sehre: shuttle, taxi, train secimi + odeme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dt17.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What's the best way to get to",
      tr_translation: "... gitmenin en iyi yolu ne?",
      example: "What's the best way to get to downtown from here?",
      example_tr: "Buradan şehir merkezine gitmenin en iyi yolu ne?",
    },
    {
      id: "ex.dt17.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Tek bilet mi yoksa dönüş bileti ile birlikte mi daha ucuz?",
      target: "Is one-way cheaper, or round-trip with a return?",
      accepted_variants: [
        "Should I buy one-way or round-trip?",
        "Is there a discount on a return ticket?",
        "One ticket or round-trip — which is better value?",
        "What's cheaper: single or return?",
      ],
      tr_hint:
        "'One-way' = tek yon. 'Round-trip' = donus dahil. 'Return' = donus bileti (UK).",
    },
    {
      id: "ex.dt17.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where's the ___ stand?",
      answer: "taxi",
      distractors: ["car", "cab", "ride"],
      tr_hint:
        "'Taxi stand' = taksi durmaktaki bekleme yeri. ABD'de yaygin kullanim.",
    },
    {
      id: "ex.dt17.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Is",
        "there",
        "a",
        "shuttle",
        "to",
        "the",
        "city",
      ],
      correct_sentence: "Is there a shuttle to the city",
      tr_translation: "Şehir merkezine giden bir servis var mı?",
    },
    {
      id: "ex.dt17.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Taxi where?",
      correct_sentence:
        "Excuse me — where's the taxi stand for downtown?",
      tr_explanation:
        "'Taxi where?' = grammatik degil + kaba. Doğru: tam soru + amac + saygi.",
    },
    {
      id: "ex.dt17.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "JFK'ye indin. Otele en iyi yolu kesfetmek istiyorsun.",
      npc_role: "Airport Info Desk",
      setting: "Airport arrivals",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(just (landed|arrived)|first time here)",
            "(best way|easiest|cheapest|fastest) (to get to|to reach)",
            "(downtown|midtown|times square|manhattan|the city)",
            "(options|alternatives|recommendations)",
          ],
          hint_tr:
            "Net acilis: 'Hi, just landed — what's the best way to downtown?'",
        },
        {
          speaker: "npc",
          message:
            "Three options: taxi ($70), Uber ($60), or AirTrain + subway ($11). All take 45-60 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|that'?s helpful)",
            "(airtrain|train) (sounds (good|right)|works)",
            "(public transit|cheaper option|saving money)",
            "(where (do i|do we) (catch|board|get on))",
            "(how often (does it run|do they come))",
            "(any (luggage|bag) restrictions)",
          ],
          hint_tr:
            "Sec: 'Thanks — AirTrain sounds right. Where do I catch it?'",
        },
        {
          speaker: "npc",
          message:
            "Follow the signs for AirTrain. Runs every 10 minutes.",
        },
      ],
    },
    {
      id: "ex.dt17.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Havalimani transfer'i icin EN onemli soru?",
          options: [
            "Sadece taksi",
            "'Best way' diye sor = options al + sece bil",
            "Hicbir sey",
            "Run yap",
          ],
          correct_index: 1,
          tr_explanation:
            "Havalimanlari = 3-4 secenek. Hepsini bilmen = tasarruf + zaman.",
        },
        {
          question: "Otel servisi 'shuttle' niye onemli soru?",
          options: [
            "Cogu otel ucretsiz shuttle sunar = $$$ kazanir",
            "Yararsiz",
            "Hicbir sey",
            "Ozel sirket",
          ],
          correct_index: 0,
          tr_explanation:
            "Onceden rezerve edilir. Otel rezervasyon sirasinda sormak en iyi.",
        },
        {
          question: "Yabanci ulkede taksiye SADECE binme RISKI?",
          options: [
            "Yok",
            "Resmi tarife disinda fazla ucret risk + sahte taksi var",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Resmi 'taxi stand' kullan. Random insanlardan teklif = scam riski.",
        },
      ],
    },
    {
      id: "ex.dt17.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "What's the best way to get downtown?",
      ipa: "wʌts ðə bɛst weɪ tə ɡɛt ˈdaʊntaʊn",
      tr_hint:
        "Havalimani info klasigi. 'Best way to get' bağlanır akış. 'Downtown' iki vurgu: DAWN-tawn.",
    },
    {
      id: "ex.dt17.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Is there a shuttle that goes to the city center?",
      voice_hint: "female_us",
      tr_hint:
        "Shuttle sorma kalibi. 'Is there a shuttle' net soru. 'Goes to the city center' birleşik ritim.",
    },
    {
      id: "ex.dt17.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "The AirTrain runs every ten minutes from terminal four.",
      transcription_target: "The AirTrain runs every ten minutes from terminal four.",
      tr_hint:
        "JFK AirTrain klasik bilgisi. 'Runs every ten minutes' = on dakikada bir. 'From terminal four' = 4. terminalden.",
    },
    {
      id: "ex.dt17.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "taxi stand",
      tr_translation: "Taksi durağı (havalimani / otel)",
      example: "The official taxi stand is just outside arrivals.",
      example_tr: "Resmi taksi duragi aris kapisinin hemen disinda.",
    },
    {
      id: "ex.dt17.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Taxi cheap how?",
      correct_sentence:
        "Excuse me — what's the cheapest way to get to downtown Manhattan from here?",
      tr_explanation:
        "Belirsiz + grammatik degil. Doğru: 'Excuse me' + spesifik soru (cheapest way) + hedef (downtown Manhattan).",
    },
  ],
};

// ============================================================
// Lesson 17.4 — Lost Luggage / Travel Problem
// ============================================================
export const dailyTransportLesson_17_4: BundledLesson = {
  id: "daily.transport.17.4",
  skill_id: "daily.transport",
  index: 4,
  title: "Kayip Bagaj / Seyahat Sorunu",
  description:
    "Valizin gelmedi, ucagin gecikti — saygili + acil yardim isteme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dt17.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "My luggage didn't come out",
      tr_translation: "Valizim çıkmadı (bagaj bandında)",
      example: "Sorry — my luggage didn't come out. Could you help?",
      example_tr: "Pardon — valizim çıkmadı. Yardım edebilir misin?",
    },
    {
      id: "ex.dt17.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Iki saat bekledim, valizim hala gelmedi. Nerede kaybolmus olabilir?",
      target: "Waited two hours and my bag still hasn't shown up. Where could it be?",
      accepted_variants: [
        "Two hours waiting, no bag — where might it be?",
        "My luggage is a no-show after two hours.",
        "Still no bag on the carousel — what now?",
        "Two hours later, bag never appeared. Help?",
      ],
      tr_hint:
        "'Shown up' = ortaya cikmak. 'No-show' = gelmedi. Bagaj problemi kalipi.",
    },
    {
      id: "ex.dt17.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I file a ___ claim?",
      answer: "lost",
      distractors: ["damage", "missing", "delay"],
      tr_hint:
        "'File a lost claim' = kayip bagaj bildirimi yapmak. Resmi prosedur.",
    },
    {
      id: "ex.dt17.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "When",
        "should",
        "I",
        "expect",
        "an",
        "update",
      ],
      correct_sentence: "When should I expect an update",
      tr_translation: "Ne zaman bir güncelleme beklemeliyim?",
    },
    {
      id: "ex.dt17.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My bag where!",
      correct_sentence:
        "My checked bag didn't come out — could I file a claim?",
      tr_explanation:
        "'My bag where!' = panik + grammatik degil. Doğru: spesifik problemi acikla + prosedur sor.",
    },
    {
      id: "ex.dt17.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "JFK'de bagajin gelmedi. Lost luggage desk'e gidiyorsun.",
      npc_role: "Lost Luggage Agent",
      setting: "Lost luggage desk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(my (luggage|checked bag|suitcase)) (didn'?t (come|show up|arrive))",
            "(waited (an hour|two hours|a while))",
            "(file (a claim|a report))",
            "(\\w+ airline|flight from \\w+)",
            "(missing|lost|delayed)",
          ],
          hint_tr:
            "Net: 'Hi, my checked bag didn't come out. Could I file a claim?'",
        },
        {
          speaker: "npc",
          message:
            "Sorry to hear. Can I see your baggage claim ticket and ID?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is|absolutely)",
            "(passport|id|ticket)",
            "(any (estimate|idea|sense)) (when|how long)",
            "(will (be|get) (delivered|sent) to (the hotel|my address))",
            "(travel essentials|toiletries|change of clothes) (allowance|reimbursement)",
            "(claim number|reference number) (i can (use|track))",
          ],
          hint_tr:
            "Cozum + sor: 'Here you go. Any idea when? Will it ship to my hotel?'",
        },
        {
          speaker: "npc",
          message:
            "We'll deliver to your hotel within 24 hours. Here's your reference number.",
        },
      ],
    },
    {
      id: "ex.dt17.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bagaj gelmedi — ILK adim?",
          options: [
            "Sus",
            "Lost luggage desk'e git + baggage claim ticket gerek",
            "Cik git otele",
            "Sosyal medyada paylas",
          ],
          correct_index: 1,
          tr_explanation:
            "30 dakika bekle, gelmediyse hemen kayit. Gecik = takip zor.",
        },
        {
          question: "'Travel essentials reimbursement' niye sorulmali?",
          options: [
            "Yararsiz",
            "Cogu havayolu temel ihtiyac icin ($50-100) verir",
            "Hicbir sey",
            "Sosyal medya",
          ],
          correct_index: 1,
          tr_explanation:
            "Dis ulkede bagajsiz = zorluk. Havayolu yardim eder. Sormak = bilmek.",
        },
        {
          question: "'Reference / Claim number' niye onemli?",
          options: [
            "Onemsiz",
            "Takip + iletisim icin tek kimlik = saklamak sart",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Aralarda 24 saat = bilgi degisir. Claim number = referans noktasi.",
        },
      ],
    },
    {
      id: "ex.dt17.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "My checked bag didn't come out.",
      ipa: "maɪ tʃɛkt bæɡ ˈdɪdənt kʌm aʊt",
      tr_hint:
        "Lost luggage acilis. 'Checked bag' = bagaj olarak yollanan. 'Didn't come out' birleşik akış.",
    },
    {
      id: "ex.dt17.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Could I file a missing luggage claim?",
      voice_hint: "male_us",
      tr_hint:
        "Resmi prosedur. 'File a claim' = bildirim yapmak. 'Missing luggage' = kayip bagaj. Net + saygili.",
    },
    {
      id: "ex.dt17.4.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "We'll deliver it to your hotel within twenty four hours.",
      transcription_target: "We'll deliver it to your hotel within twenty four hours.",
      tr_hint:
        "Havayolu standart vaadi. 'Deliver to your hotel' = otele teslim. 'Within twenty four hours' = 24 saat içinde.",
    },
    {
      id: "ex.dt17.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "claim number",
      tr_translation: "Talep takip numarası",
      example: "Keep your claim number — you'll need it for any follow-up.",
      example_tr: "Talep numaranı sakla — takip için lazım olacak.",
    },
    {
      id: "ex.dt17.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Bag lost! Help me now!",
      correct_sentence:
        "My checked bag didn't come out — could I file a missing luggage claim, please?",
      tr_explanation:
        "Panik + emir. Doğru: spesifik (checked bag didn't come out) + saygili prosedur sorma.",
    },
  ],
};

// ============================================================
// Daily Transport lessons registry
// ============================================================
export const dailyTransportLessons: ReadonlyArray<BundledLesson> = [
  dailyTransportLesson_17_1,
  dailyTransportLesson_17_2,
  dailyTransportLesson_17_3,
  dailyTransportLesson_17_4,
];
