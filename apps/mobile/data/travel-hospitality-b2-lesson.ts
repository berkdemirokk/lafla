// Travel + Hospitality — B2 lessons (10).
// Skill: travel.b2 — Turkish adults navigating complex cross-border travel,
// hospitality friction, consumer/passenger rights. Assertive-polite register.
// 2026 reality: EU261, US DOT rules, AirBnB host disputes, dietary complexity.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Flight Cancellation + Rebooking (EU261 / DOT rights)
// ============================================================
export const travelB2Lesson_1: BundledLesson = {
  id: "travel.b2.flightcancel.1",
  skill_id: "travel.b2",
  index: 1,
  title: "Flight Cancellation + Rebooking",
  description:
    "Uçuşun iptal oldu. Havayolu temsilcisiyle EU261 / US DOT haklarını kullanarak rebooking + tazminat talep et.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb2.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like to flag a concern",
      tr_translation: "Bir konuyu gündeme getirmek istiyorum",
      example:
        "I'd like to flag a concern — my flight was cancelled and I haven't been offered a rebooking yet.",
      example_tr:
        "Bir konuyu gündeme getirmek istiyorum — uçuşum iptal oldu ve henüz bana yeni bir rezervasyon teklif edilmedi.",
    },
    {
      id: "ex.tb2.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "according to your policy",
      tr_translation: "politikanıza göre",
      example:
        "According to your policy and EU261, I'm entitled to either a refund or rerouting.",
      example_tr:
        "Politikanıza ve EU261'e göre, ya iadeye ya da yeniden yönlendirmeye hakkım var.",
    },
    {
      id: "ex.tb2.1.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Uçuşum dört saat önce iptal edildi. EU261 kapsamında tazminat ve yeniden yönlendirme hakkım olduğunu anlıyorum. En erken sonraki uçuşa yerleştirilmek istiyorum.",
      target:
        "My flight was cancelled four hours ago. I understand that under EU261 I'm entitled to compensation and rerouting. I'd like to be put on the earliest available flight.",
      accepted_variants: [
        "My flight got cancelled four hours ago. As I understand it, under EU261 I'm entitled to both compensation and rerouting, and I'd like to be rebooked on the next available flight.",
        "My flight was cancelled four hours ago. Per EU261, I believe I'm entitled to compensation and rerouting — could you put me on the earliest flight out?",
        "My flight was cancelled four hours back. Under EU261 I should be entitled to compensation plus rerouting. I'd like to be placed on the next available flight, please.",
        "My flight was cancelled four hours ago. Under EU261 rules, I'm entitled to compensation and rerouting — please rebook me on the earliest available option.",
      ],
      tr_hint:
        "Formül: olgu (cancellation + time) + hak (under EU261 / your policy) + spesifik talep (rebook / rerouting). 'I understand' veya 'as I understand it' diplomatic.",
    },
    {
      id: "ex.tb2.1.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Under EU261, I'm ___ to compensation since the cancellation was within 14 days of departure.",
      answer: "entitled",
      distractors: ["allowed", "qualified", "permitted", "deserved"],
      tr_hint:
        "'entitled to X' = X'e hakkım var (legal/formal). Yolcu hakları dilinin çekirdek kelimesi.",
    },
    {
      id: "ex.tb2.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "You must give me money now because my flight is cancelled!",
      correct_sentence:
        "Could you walk me through the compensation process? I believe I'm entitled under EU261.",
      tr_explanation:
        "Agresif komut ('You must give me money!') hak iddiası olsa da kapı kapatır. 'Could you walk me through' + 'I believe I'm entitled' assertive-polite — firm ama diplomatic.",
    },
    {
      id: "ex.tb2.1.6",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm entitled to compensation under EU261",
      tr_translation: "EU261 kapsamında tazminat hakkım var",
      ipa: "/aɪm ɪnˈtaɪtəld tə ˌkɒmpənˈseɪʃən ˈʌndər iː juː tuː sɪks wʌn/",
    },
    {
      id: "ex.tb2.1.7",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Havalimanında müşteri hizmetleri masası. Uçuş iptal — temsilciden rebooking + tazminat al.",
      npc_role: "Airline Customer Service Agent",
      setting: "Airline service desk at international airport",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi there. I can see your flight was cancelled — really sorry about that. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you).{0,30}(cancelled|cancellation)",
            "i('?d| would) like to (be )?(rebook|reroute|put on)",
            "(could|can) you (rebook|reroute|put me on)",
            "(what are|tell me) my options",
            "i('?m| am) entitled to (a )?(rebooking|rerouting|refund)",
          ],
          hint_tr:
            "Kibar başla + spesifik talep. 'Thanks. I'd like to be rebooked on the earliest flight' veya 'Could you walk me through my options?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. The next available flight to Frankfurt is tomorrow morning at 7:40. Would that work for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|sounds good|fine by me|happy with that)",
            "(can|could) i get (an earlier|something sooner|a different)",
            "(is there|do you have) (anything|something) (sooner|earlier|today)",
            "what about (a partner|another) (airline|carrier)",
            "(rerouting|rebooking) on a (partner|different) (airline|carrier)",
          ],
          hint_tr:
            "Kabul et veya pazarlık: 'That works' / 'Is there anything sooner?' / 'What about rerouting on a partner airline?'",
        },
        {
          speaker: "npc",
          message:
            "Let me check partner availability... I can put you on a Lufthansa flight at 22:15 tonight. Same class. Want me to switch you over?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|please|that('?s| is) great|go ahead|switch me)",
            "(book|put|switch) me (on|over)",
            "(could|can) you also (arrange|cover|provide)",
            "what about (accommodation|hotel|meals|vouchers)",
          ],
          hint_tr:
            "Onayla + ek hak iste: 'Yes, please switch me over. And could you also arrange a meal voucher in the meantime?'",
        },
        {
          speaker: "npc",
          message:
            "Done — you're confirmed on LH1304 at 22:15. I'll print your new boarding pass in a moment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate).{0,40}",
            "(quick|one more|also).{0,20}(question|thing)",
            "(about|regarding) (compensation|eu ?261|the compensation)",
            "(could|can) you (walk me through|tell me about) (compensation|the compensation)",
            "i('?d| would) like to (file|claim|submit) (a|the) (compensation|eu ?261)",
          ],
          hint_tr:
            "Şimdi tazminat: 'Thanks. One more thing — could you walk me through the EU261 compensation process?'",
        },
        {
          speaker: "npc",
          message:
            "Sure. Since this is a covered cancellation within 14 days, you're eligible for 400 euros. You can submit the claim through our website or right here — your choice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s|i('?d| would) like to) (do it|submit|file) (here|now|in person)",
            "(could|can) (you|we) (do|file|submit) (it )?(here|now)",
            "(online|website|portal).{0,20}",
            "i('?ll| will) (do|file|submit) (it )?(online|via the website)",
            "what (documents|paperwork|do i need)",
          ],
          hint_tr:
            "Yöntem seç: 'Let's submit it here, please' veya 'I'll do it via the website — what documents do I need?'",
        },
        {
          speaker: "npc",
          message:
            "Great — I'll start the claim here. You should see the 400 euros refunded to your original payment method within 7 business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate)",
            "(could|can) (i|you) (get|have|provide) (a )?(receipt|confirmation|reference)",
            "(reference|confirmation|claim) number",
            "send.{0,15}(email|copy)",
          ],
          hint_tr:
            "Bitirirken: 'Thanks. Could I get a claim reference number and a copy emailed to me?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely — reference is EC-49281, and I've just emailed you the confirmation. Safe travels.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Hotel Double-Booking + Manager Escalation
// ============================================================
export const travelB2Lesson_2: BundledLesson = {
  id: "travel.b2.hoteldouble.1",
  skill_id: "travel.b2",
  index: 2,
  title: "Hotel Double-Booking + Manager",
  description:
    "Resepsiyonda 'oda yok' dediler. Manager'a escalate et — confirmation, walk policy, alternatif konaklama.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb2.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like to speak to the manager",
      tr_translation: "Müdürle konuşmak istiyorum",
      example:
        "I'd like to speak to the manager — this isn't something the front desk can resolve.",
      example_tr:
        "Müdürle konuşmak istiyorum — bu, resepsiyonun çözebileceği bir durum değil.",
    },
    {
      id: "ex.tb2.2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "walk the guest",
      tr_translation: "misafiri başka otele yönlendirmek (overbook durumu)",
      example:
        "If you have to walk me, I expect a comparable room and transportation covered.",
      example_tr:
        "Beni başka otele göndermek zorundaysanız, eşdeğer bir oda ve ulaşımı sizin karşılamanızı bekliyorum.",
    },
    {
      id: "ex.tb2.2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Rezervasyonumu üç ay önce yaptım ve onay e-postam burada. Otelinizin overbook ettiğini anlıyorum, ama bu benim sorunum değil. Karşılaştırılabilir bir oda ve oraya ulaşımı sizin halletmenizi bekliyorum.",
      target:
        "I booked three months ago and I have my confirmation email here. I understand the hotel is overbooked, but that's not my problem. I expect a comparable room and transportation arranged on your end.",
      accepted_variants: [
        "I made the booking three months ago and I've got the confirmation right here. I get that you're overbooked, but that's really not my issue. I'd expect you to arrange a comparable room and cover the transport.",
        "I booked three months out and I have my confirmation. I understand you're overbooked, but that's the hotel's issue, not mine. I'd expect a comparable property and a car arranged for me.",
        "I made this reservation three months ago — here's my confirmation. I appreciate that you're overbooked, but this isn't on me. I'd expect a comparable room and transport arranged by the hotel.",
        "My booking was made three months ago and I have the confirmation email. I understand it's an overbooking situation, but that's not my problem to solve. I expect you to arrange a comparable room and transport.",
      ],
      tr_hint:
        "Yapı: olgu (booking + confirmation) + acknowledge (their issue) + sınır ('not my problem') + spesifik talep (comparable + transport). 'I understand X, but' = empati + sınır.",
    },
    {
      id: "ex.tb2.2.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "If you have to ___ me, I expect a comparable room of equal or higher standard.",
      answer: "walk",
      distractors: ["move", "send", "transfer", "kick"],
      tr_hint:
        "'walk the guest' = otel terimi, overbook durumunda misafiri başka otele yönlendirmek. Industry vocab.",
    },
    {
      id: "ex.tb2.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "This is ridiculous, you people are scammers, I'll destroy you on TripAdvisor!",
      correct_sentence:
        "I'd like to escalate this. Could I speak to the duty manager about a walk arrangement that meets industry standards?",
      tr_explanation:
        "Tehdit + insult = manager defansa geçer, az şey alırsın. 'Escalate' + 'duty manager' + 'industry standards' = professional pressure, kapıyı açık tutar.",
    },
    {
      id: "ex.tb2.2.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Otel lobisinde gece 23:00. Resepsiyon 'oda yok' diyor. Önce kibarca durumu netleştir, sonra manager'a escalate et.",
      npc_role: "Hotel Front Desk → Duty Manager",
      setting: "4-star hotel lobby, late evening check-in",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm really sorry, sir — I can see your reservation, but we're fully booked tonight. Our system shouldn't have allowed this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|let'?s) (understand|clarify|make sure)",
            "(so|just to confirm).{0,30}(no room|nothing available|overbooked)",
            "(could|can) you (explain|tell me) (what happened|the situation)",
            "(i have|here'?s) (my|the) confirmation",
            "i booked.{0,20}(months|weeks) ago",
          ],
          hint_tr:
            "Önce durumu netleştir, ardından confirmation hatırlat: 'Let me make sure I understand — there's no room despite my confirmed reservation? I booked three months ago.'",
        },
        {
          speaker: "npc",
          message:
            "That's correct, unfortunately. I can offer to book you at a nearby property at no charge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|which) (property|hotel|place)",
            "(comparable|equivalent|same|equal) (room|standard|category|level)",
            "(transport|transportation|car|taxi).{0,15}(arranged|covered|provided)",
            "what about (transport|the difference|tonight'?s rate)",
            "(could|can) you (cover|arrange|comp)",
          ],
          hint_tr:
            "Detay iste: 'Which property? Is the room comparable? And will transportation be arranged?'",
        },
        {
          speaker: "npc",
          message:
            "It's a three-star property about 4km away. Standard double room. We can call you a taxi.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that doesn'?t|that isn'?t|that('?s| is) not) (comparable|equivalent|acceptable|going to work)",
            "i('?d| would) like to (escalate|speak to|talk to) (the|a) (manager|duty manager|supervisor)",
            "(could|can) (i|you) (get|put) (me through to|the) (manager|duty manager)",
            "(my|the) reservation (was|is) for (a four-star|this hotel|this property)",
            "(three star|3 star) is (a downgrade|not the same)",
          ],
          hint_tr:
            "Sınır çek + escalate: 'Three-star isn't comparable to a four-star booking. I'd like to speak to the duty manager, please.'",
        },
        {
          speaker: "npc",
          message:
            "Of course, let me get her. One moment... Hi, I'm Marta, duty manager. I understand we're walking you tonight — how can I make this right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate).{0,30}(coming|speaking|joining)",
            "(here'?s|the issue is|so the situation)",
            "i('?d| would) like (a|the following)",
            "(comparable|equivalent|same category) (room|property)",
            "(transport|transportation) (covered|arranged)",
            "(compensation|some compensation|a credit|loyalty points)",
          ],
          hint_tr:
            "Talep paketi: 'Thanks for coming over. I'd like three things — a comparable four-star property, transport arranged both ways, and a credit toward tonight's stay.'",
        },
        {
          speaker: "npc",
          message:
            "That's fair. I can move you to the Hilton across the road, suite upgrade, transport on us, and I'll waive tonight's rate entirely. Does that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|sounds (good|fair|reasonable)|happy with that|appreciate it)",
            "(yes|please|let'?s do that|let'?s go ahead)",
            "(could|can) i (get|have) (that|this) (in writing|by email|on paper)",
            "(written|email) confirmation",
          ],
          hint_tr:
            "Kabul + yazılı onay iste: 'That works — thank you. Could I get that in writing or by email before I leave?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — I'll email you the confirmation right now and the taxi will be at the front in five minutes.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Missed Connection (same vs different airline)
// ============================================================
export const travelB2Lesson_3: BundledLesson = {
  id: "travel.b2.missedconn.1",
  skill_id: "travel.b2",
  index: 3,
  title: "Missed Connection",
  description:
    "İlk uçuş geç kaldı, bağlantıyı kaçırdın. Aynı havayolu vs farklı havayolu — kim sorumlu, ne talep edilir?",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb2.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "single ticket / separate tickets",
      tr_translation: "tek bilet / ayrı biletler",
      example:
        "If they're on a single ticket, the airline has to rebook you. Separate tickets — you're on your own.",
      example_tr:
        "Eğer tek bilette ise, havayolu seni yeniden yerleştirmek zorunda. Ayrı biletler — kendi başınasın.",
    },
    {
      id: "ex.tb2.3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "protected on the next flight",
      tr_translation: "sonraki uçuşa korumalı (yer ayrılmış)",
      example:
        "Could you confirm I'm protected on the next available flight at no extra charge?",
      example_tr:
        "Ek ücret olmaksızın sonraki uçuşta korumalı olduğumu teyit edebilir misiniz?",
    },
    {
      id: "ex.tb2.3.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İki bilet aynı PNR'de olduğu için bağlantımı kaçırmam sizin sorumluluğunuz. Ekstra ücret olmadan bir sonraki uçuşa korumalı olarak yerleştirilmek istiyorum.",
      target:
        "Both flights are on the same PNR, so the missed connection is on you. I'd like to be protected on the next available flight at no extra cost.",
      accepted_variants: [
        "Since both legs are on a single PNR, the missed connection falls on the airline. I'd like to be protected on the next available flight, no extra charge.",
        "Both flights are under the same booking, so this is the airline's responsibility. Please put me on the next flight at no additional cost.",
        "Since they're on the same PNR, the missed connection is the airline's responsibility. I'd like to be rebooked on the next flight without any fees.",
        "Both legs are on one ticket, so this missed connection is on the carrier. I'd like to be protected on the next flight, no charge.",
      ],
      tr_hint:
        "Anahtar argüman: 'same PNR / single ticket' → 'responsibility falls on the airline' → 'protected at no extra cost'.",
    },
    {
      id: "ex.tb2.3.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Since both flights are on the same ___, you're obligated to rebook me at no charge.",
      answer: "PNR",
      distractors: ["airline", "schedule", "terminal", "route"],
      tr_hint:
        "'PNR' (Passenger Name Record) = aynı rezervasyon kodu. Endüstri terimi — kullanmak ciddiyet katar.",
    },
    {
      id: "ex.tb2.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Your plane is late so you must buy me new ticket!",
      correct_sentence:
        "Since the connection is on the same PNR, could you rebook me on the next available flight at no charge?",
      tr_explanation:
        "Komut + 'must buy me' = agresif ve isteğin yanlış (yeni bilet değil, rebook). 'Since X, could you Y' = sebep + kibar talep. 'No charge' (ek ücret yok) doğru terim.",
    },
    {
      id: "ex.tb2.3.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Bağlantı uçuşunu 20 dakikayla kaçırdın çünkü ilk uçuş geç kalktı. Transfer masasındasın.",
      npc_role: "Transfer Desk Agent",
      setting: "International transfer desk, large hub airport",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, what can I help you with today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (just )?missed (my|the) (connection|connecting flight)",
            "(my )?first flight (was|got|came in) (late|delayed)",
            "(could|can) you (help me|rebook|put me on)",
            "(both|the) flights are on (the same|one) (pnr|ticket|booking)",
          ],
          hint_tr:
            "Durumu özetle: 'I just missed my connection — the first leg was delayed. Both flights are on the same PNR.'",
        },
        {
          speaker: "npc",
          message:
            "Let me pull up your record... Yes, I see — single ticket, same PNR. Where are you trying to get to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(istanbul|paris|new york|london|home|tokyo|frankfurt|amsterdam|madrid)",
            "(final destination|i('?m| am) flying|trying to get) (to|home)",
            "(could|can) you (protect|rebook) me on (the next|tonight'?s|tomorrow'?s)",
          ],
          hint_tr:
            "Varış + talep: 'Istanbul. Could you protect me on the next available flight?'",
        },
        {
          speaker: "npc",
          message:
            "Next flight to Istanbul is tomorrow at 09:15. Want me to put you on that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (also|please) (arrange|provide) (a hotel|accommodation|overnight)",
            "what about (a hotel|overnight|meals|the night)",
            "(am i|i should be) (entitled|due) (to|a) (hotel|accommodation|meals)",
            "(meal voucher|food voucher|dinner)",
          ],
          hint_tr:
            "Kabul + ekstra hak: 'Yes, please. And could you arrange overnight accommodation and meal vouchers? I believe I'm entitled.'",
        },
        {
          speaker: "npc",
          message:
            "You are — since the delay was on our end. I'll issue a hotel voucher and two meal vouchers. Hotel shuttle picks up at door 4.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate)",
            "(quick|one more) (question|thing)",
            "(what about|do i get) (compensation|delay compensation|eu ?261)",
            "(could|can) you (walk me through|tell me about) compensation",
          ],
          hint_tr:
            "Tazminat sor: 'Thanks. One more thing — does this delay qualify for compensation under EU261?'",
        },
        {
          speaker: "npc",
          message:
            "It might — over four hours arrival delay qualifies. You can file the claim online once you arrive.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|you) (get|have) (everything|the details|a printout|in writing)",
            "(boarding pass|vouchers|details) (printed|in writing)",
            "(claim|reference) (number|code)",
          ],
          hint_tr:
            "Belge iste: 'Could I get everything printed — new boarding pass, vouchers, and a reference number for the claim?'",
        },
        {
          speaker: "npc",
          message:
            "Printing now. Everything's in this envelope. Have a good rest tonight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Lost Passport at Consulate
// ============================================================
export const travelB2Lesson_4: BundledLesson = {
  id: "travel.b2.lostpassport.1",
  skill_id: "travel.b2",
  index: 4,
  title: "Lost Passport at Consulate",
  description:
    "Pasaportunu kaybettin. Konsoloslukta emergency travel document için resmi başvuru.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb2.4.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "emergency travel document",
      tr_translation: "acil seyahat belgesi (tek kullanımlık)",
      example:
        "I'd like to apply for an emergency travel document — my flight home is in 36 hours.",
      example_tr:
        "Acil seyahat belgesi için başvurmak istiyorum — eve dönüş uçuşum 36 saat içinde.",
    },
    {
      id: "ex.tb2.4.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd like to file a report",
      tr_translation: "Tutanak / kayıt açtırmak istiyorum",
      example:
        "I'd like to file a report — my passport was lost or possibly stolen yesterday.",
      example_tr:
        "Bir kayıt açtırmak istiyorum — pasaportum dün kaybedildi veya muhtemelen çalındı.",
    },
    {
      id: "ex.tb2.4.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Pasaportumu dün kaybettim. Polis tutanağı yanımda. Eve dönüş uçuşum 36 saat içinde, bu yüzden acil seyahat belgesi için başvurmam gerek.",
      target:
        "I lost my passport yesterday. I have the police report with me. My flight home is in 36 hours, so I need to apply for an emergency travel document.",
      accepted_variants: [
        "I lost my passport yesterday and I've got the police report here. My return flight is in 36 hours, so I need to apply for emergency travel documentation.",
        "My passport was lost yesterday — I have the police report with me. With my flight home in 36 hours, I need to apply for an emergency travel document today.",
        "I lost my passport yesterday and brought the police report. My flight home leaves in 36 hours, so I'd like to apply for an emergency travel document.",
        "I lost my passport yesterday — police report is here. Flight home is in 36 hours, so I need to apply for an emergency travel document, please.",
      ],
      tr_hint:
        "Resmi format: olay (lost + date) + kanıt (police report) + aciliyet (time to flight) + talep (apply for ETD).",
    },
    {
      id: "ex.tb2.4.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I'd like to ___ for an emergency travel document, please.",
      answer: "apply",
      distractors: ["ask", "request", "get", "claim"],
      tr_hint:
        "'apply for' = (resmi belge için) başvurmak. Konsolosluk diliyle 'apply' standart.",
    },
    {
      id: "ex.tb2.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Please please help me, I am very stressed, I don't know what I do!",
      correct_sentence:
        "I'd like to apply for an emergency travel document. I have my police report, flight itinerary, and a passport photo with me.",
      tr_explanation:
        "Resmi ortamda panik dili işe yaramaz — memur bilgi ister, duygu değil. Net + organize + belgelerini sun. 'I'd like to apply' + spesifik belgeler.",
    },
    {
      id: "ex.tb2.4.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Türkiye konsolosluğu, başvuru görüşme penceresi. Memurla 10 turlu resmi diyalog.",
      npc_role: "Consular Officer",
      setting: "Turkish consulate, citizen services window",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "good (morning|afternoon)",
            "i('?d| would) like to (apply|file)",
            "i lost (my )?passport",
            "(emergency|temporary) (travel document|passport)",
          ],
          hint_tr:
            "Resmi giriş: 'Good morning. I'd like to apply for an emergency travel document — I lost my passport yesterday.'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. Have you reported the loss to the local police?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i have).{0,20}(report|filed|the report)",
            "(here'?s|i have) (the |my )?(police )?report",
            "(filed|reported) (it )?(yesterday|this morning)",
            "(report|police|reference) number is",
          ],
          hint_tr:
            "Belge sun: 'Yes, I filed it yesterday — here's the police report.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. Could you walk me through what happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|last night|around).{0,30}(taxi|hotel|restaurant|metro)",
            "(left|forgot|noticed it (was missing|gone))",
            "(when i|by the time i) (got back|checked|got home)",
            "(must have|might have) (fallen|been (taken|stolen))",
          ],
          hint_tr:
            "Olay özeti, sade: 'Yesterday afternoon I took a taxi to the hotel. By the time I got back to my room, my passport was missing.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. Do you have proof of citizenship — an ID card, old passport copy, or birth certificate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i have (my|a) (national id|id card|t\\.?c\\.? kimlik|kimlik)",
            "(here'?s|i have) a (digital |scanned )?copy of",
            "(yes|i have).{0,30}(id|kimlik|passport copy|driver'?s license)",
            "i can (pull up|show|access) (it on|on my phone)",
          ],
          hint_tr:
            "Kimlik kanıtı: 'I have my national ID card here, plus a digital copy of my old passport on my phone.'",
        },
        {
          speaker: "npc",
          message:
            "Good. And your flight itinerary — when do you need to travel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(return |home )?flight is (in|tomorrow|on)",
            "(36|24|48) hours",
            "(here'?s|i have) (a printout of|the) itinerary",
            "tomorrow (evening|morning|afternoon)",
          ],
          hint_tr:
            "Aciliyet: 'My return flight is in 36 hours — here's a printout of the itinerary.'",
        },
        {
          speaker: "npc",
          message:
            "Alright. I'll need two passport photos, this completed application form, and a fee of 80 dollars. Do you have all that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|here are) (the |two )?photos",
            "(yes|i('?m| am) ready)",
            "(could|can) you (walk me through|help me with) the form",
            "(i'?ll|will) (fill it out|complete it) (now|here)",
          ],
          hint_tr:
            "Hazır ol: 'I have the photos here. Could you walk me through the form?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Fill in sections one through three; I'll review it once you're done. Processing takes about three hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks|appreciate it)",
            "(could|can) i (wait here|come back|pick it up)",
            "(when|what time) can i (pick it up|collect it)",
            "(any other|anything else) (documents|i need)",
          ],
          hint_tr:
            "Bitir + plan: 'Thank you. Should I wait, or come back this afternoon to collect it?'",
        },
        {
          speaker: "npc",
          message:
            "Come back at 3 PM. The document will be ready then. Have a seat at window 4 once you've filled the form.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Disputing a Credit Card Charge from Abroad
// ============================================================
export const travelB2Lesson_5: BundledLesson = {
  id: "travel.b2.cardispute.1",
  skill_id: "travel.b2",
  index: 5,
  title: "Disputing a Card Charge Abroad",
  description:
    "Yurtdışından şüpheli/yanlış bir kart işlemi geldi. Bankayı ara, dispute aç, chargeback iste.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb2.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like to dispute a charge",
      tr_translation: "Bir işleme itiraz etmek istiyorum",
      example:
        "I'd like to dispute a charge — there's a 320-euro transaction from Lisbon that I didn't authorise.",
      example_tr:
        "Bir işleme itiraz etmek istiyorum — Lizbon'dan 320 Euro'luk, onaylamadığım bir işlem var.",
    },
    {
      id: "ex.tb2.5.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "request a chargeback",
      tr_translation: "Chargeback (ters ibraz) talep etmek",
      example:
        "Since the merchant won't refund, I'd like to request a chargeback under cardholder protection rules.",
      example_tr:
        "Satıcı iade etmediği için, kart hamili koruma kuralları kapsamında chargeback talep etmek istiyorum.",
    },
    {
      id: "ex.tb2.5.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İki tane onaylamadığım işlem var — toplam 480 Euro. Kartım hâlâ bende, fiziksel olarak hiç o şehirde bulunmadım. Resmi olarak dispute açmak ve chargeback talep etmek istiyorum.",
      target:
        "There are two charges I didn't authorise, totalling 480 euros. I still have my card, and I've never physically been in that city. I'd like to formally dispute the transactions and request a chargeback.",
      accepted_variants: [
        "I'm seeing two charges I didn't authorise — 480 euros total. My card is still in my possession and I've never set foot in that city. I'd like to file a formal dispute and request a chargeback.",
        "Two charges I never authorised, 480 euros in total. The card is with me and I've never been to that city. I'd like to open a dispute and request a chargeback.",
        "There are two unauthorised transactions totalling 480 euros. I have my card and I've never been to that location. Please open a formal dispute and process a chargeback.",
        "I have two charges totalling 480 euros that I didn't authorise. I still have the card and I've never travelled there. I'd like to formally dispute these and request a chargeback.",
      ],
      tr_hint:
        "Banka dilinde: 'authorise', 'dispute', 'chargeback' = teknik kelimeler. Olgu + delil (still have card) + talep.",
    },
    {
      id: "ex.tb2.5.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I didn't ___ this transaction — please open a dispute.",
      answer: "authorise",
      distractors: ["agree", "permit", "approve to", "accept"],
      tr_hint:
        "'authorise' (UK) / 'authorize' (US) = onaylamak (kart işlemleri için resmi terim).",
    },
    {
      id: "ex.tb2.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Someone is stealing my money! Block everything right now and give me back!",
      correct_sentence:
        "I'd like to report unauthorised transactions, freeze the card, and open a formal dispute.",
      tr_explanation:
        "'Stealing! Give me back!' = panik dili, müşteri temsilcisi defansa geçer. Üç ayrı resmi adım: 'report' + 'freeze' + 'open a dispute'.",
    },
    {
      id: "ex.tb2.5.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Bankanın yurtdışı müşteri hattını aradın. Temsilci kimlik soruyor, sonra disputeu işleme alıyor.",
      npc_role: "Bank Fraud Department Agent",
      setting: "International customer service phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, this is fraud services. May I have your full name and the last four digits of your card?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|of course|sure)",
            "(my name is|i('?m| am)|this is) [a-z]+",
            "the last four (digits )?(are|is) \\d{4}",
            "[a-z]+ [a-z]+.{0,20}\\d{4}",
          ],
          hint_tr:
            "Kimlik ver: 'Yes, my name is Berk Yilmaz, last four digits are 4827.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. I've verified your account. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('?d| would) like to (dispute|report)",
            "(there are|i see|i('?m| am) seeing) (some |two |a couple of )?(charges|transactions)",
            "(unauthorised|unauthorized|that i didn'?t authorise)",
            "(\\d+|two|three) (charges|transactions)",
          ],
          hint_tr:
            "Net konuya gir: 'I'd like to dispute two unauthorised transactions on the card.'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. Could you give me the dates, amounts, and merchant names?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|of course)",
            "(\\d{1,2}.{0,5}(may|march|april|june|july)|yesterday|last week)",
            "(\\d+|two hundred|three hundred|four hundred) (euros|dollars|pounds)",
            "(merchant|the name|it'?s) (is )?[a-z]+",
            "first one.{0,30}second one",
          ],
          hint_tr:
            "Yapılandır: 'First one, May 8th, 280 euros, merchant LISBON-CAFE-23. Second one, May 9th, 200 euros, same merchant.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Have you ever shopped with this merchant before, or been physically in that city?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(never|no, never|i('?ve| have) never)",
            "(no, i)? (haven'?t|never been)",
            "(never been|never travelled|never visited) (to|in) (lisbon|that city)",
            "card has been with me",
          ],
          hint_tr:
            "Net inkâr: 'No, never. I've never been to that city, and the card has been in my wallet the whole time.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. I'll freeze the card now and open a fraud case. A new card will be sent to your registered address.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks|appreciate)",
            "(how long|when|what'?s the timeline)",
            "(provisional|temporary) (credit|refund)",
            "(i('?m| am) abroad|i('?m| am) travelling).{0,30}(virtual|temporary|digital)",
            "(could|can) you (issue|send) a (virtual|digital) card",
          ],
          hint_tr:
            "İlerle: 'Thanks. I'm currently abroad — could you issue a virtual card in the app for now? And when can I expect provisional credit?'",
        },
        {
          speaker: "npc",
          message:
            "We can issue a virtual card immediately in the app. Provisional credit usually arrives within 5 business days while the investigation runs.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|you) (have|get|provide) (a )?(case|reference) number",
            "(written|email) confirmation",
            "send (me )?(an? )?(email|confirmation)",
          ],
          hint_tr:
            "Belge iste: 'Could you give me the case reference number and email me a confirmation?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Case reference is FR-220394. Confirmation email is on its way. Anything else?",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Restaurant Complex Dietary Requirements
// ============================================================
export const travelB2Lesson_6: BundledLesson = {
  id: "travel.b2.diet.1",
  skill_id: "travel.b2",
  index: 6,
  title: "Complex Dietary Requirements",
  description:
    "Alerji + dini kısıtlama + cross-contamination konuşması. Garsondan şefe escalate etmek.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb2.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "cross-contamination",
      tr_translation: "Çapraz bulaşma (alerjen)",
      example:
        "I have a severe nut allergy — could you check with the kitchen about cross-contamination?",
      example_tr:
        "Şiddetli bir fıstık alerjim var — mutfaktan çapraz bulaşma konusunu kontrol edebilir misiniz?",
    },
    {
      id: "ex.tb2.6.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "halal preparation",
      tr_translation: "helal usulde hazırlama",
      example:
        "I follow a halal diet — is the meat from a halal source, and is preparation kept separate?",
      example_tr:
        "Helal beslenmeyi takip ediyorum — et helal kaynaktan mı ve hazırlama ayrı mı tutuluyor?",
    },
    {
      id: "ex.tb2.6.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İki kısıtlamam var — ciddi bir fıstık alerjisi ve helal beslenme. Şefle direkt konuşmak istiyorum, çünkü çapraz bulaşma benim için tıbbi bir mesele.",
      target:
        "I have two restrictions — a severe nut allergy and a halal diet. I'd like to speak with the chef directly because cross-contamination is a medical issue for me.",
      accepted_variants: [
        "I have two restrictions: a severe nut allergy and a halal diet. Could I speak with the chef? Cross-contamination is medically serious for me.",
        "Two things — I have a severe nut allergy and I follow a halal diet. I'd like to talk to the chef, since cross-contamination is a medical concern.",
        "I've got a severe nut allergy and follow a halal diet. Could I have a quick word with the chef? Cross-contamination is a medical issue for me, not a preference.",
        "I have two dietary restrictions — severe nut allergy and halal-only. I'd like to speak with the chef directly; cross-contamination has serious medical consequences for me.",
      ],
      tr_hint:
        "Yapı: kısıtlama sayısı + tip + ciddiyet + chef ile direkt konuşma talebi. 'Medical issue, not a preference' = ciddiye alın sinyali.",
    },
    {
      id: "ex.tb2.6.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Could you check with the kitchen about ___-contamination, please?",
      answer: "cross",
      distractors: ["self", "co", "double", "non"],
      tr_hint:
        "'cross-contamination' = aynı yüzey/araç farklı malzemeyle temas. Alerji konuşmasının çekirdek terimi.",
    },
    {
      id: "ex.tb2.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I cannot eat any meat that not halal and also I am allergy from peanuts.",
      correct_sentence:
        "I follow a halal diet, and I'm severely allergic to peanuts. Could you check both with the chef?",
      tr_explanation:
        "'Allergy from' yanlış — 'allergic to'. 'Meat that not halal' eksik fiil → 'meat that isn't halal'. Daha doğal yapı: 'I follow a halal diet' + 'I'm allergic to'.",
    },
    {
      id: "ex.tb2.6.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Üst düzey restoran. İki kısıtlamayı açıkla, garson şefi çağırsın, menü uyarlasın.",
      npc_role: "Server → Head Chef",
      setting: "Mid-to-upscale European restaurant",
      turns: [
        {
          speaker: "npc",
          message:
            "Good evening, and welcome. Are you ready to order, or would you like a moment with the menu?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|good evening)",
            "(before (i|we) order|first|one thing)",
            "i (have|wanted to mention|need to mention) (some|two|a couple of) (restrictions|dietary)",
            "i (have a|follow a) (nut allergy|halal diet)",
          ],
          hint_tr:
            "Önce kısıtlamaları aç: 'Good evening, thank you. Before we order — I have a couple of dietary restrictions I should mention.'",
        },
        {
          speaker: "npc",
          message:
            "Of course — please go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(severe|serious) (nut|peanut) allergy",
            "(halal|halal diet)",
            "(cross[- ]?contamination).{0,30}(medical|serious|risk)",
            "(could|can) (i|we) (speak|chat|talk).{0,15}(chef|kitchen)",
          ],
          hint_tr:
            "İki kısıtlamayı net söyle: 'I have a severe nut allergy, and I follow a halal diet. Cross-contamination is a medical issue for me — could we speak with the chef?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely — let me get our head chef. One moment... Hello, I'm Marco. The server filled me in. Could you walk me through the allergy a bit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any|all) (tree )?nuts.{0,30}(peanuts)",
            "(could trigger|reaction|epi[- ]?pen|anaphyl)",
            "even (trace amounts|small amounts|residue)",
            "(shared|same) (oil|fryer|surface|board)",
          ],
          hint_tr:
            "Detaylı bilgi: 'All tree nuts and peanuts. Even trace amounts could trigger anaphylaxis — I carry an EpiPen. Shared fryers or boards are risky for me.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. I'll prep your dishes on a separate station with fresh utensils. For the halal side — our lamb and chicken are from halal suppliers; do you also need separate cookware?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(separate|fresh|clean) (pan|cookware|grill)",
            "(yes|please|i('?d| would) appreciate)",
            "no (alcohol|wine|pork) (in the|near the)",
            "(thanks|thank you).{0,20}(for asking|for checking)",
          ],
          hint_tr:
            "İhtiyaçlar: 'Yes, please — separate pan, no wine in the sauce, and prepared away from the pork station if possible. Thank you for asking.'",
        },
        {
          speaker: "npc",
          message:
            "Easy. Let me suggest the lamb tagine or the grilled sea bass — both can be done safely and won't touch any nut or pork. Any preference?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ll| will) (go with|take|have)|let'?s do) (the lamb|the sea bass|the tagine)",
            "(lamb|sea bass) sounds (great|good|perfect)",
            "what (does )?the (lamb|sea bass) come with",
          ],
          hint_tr:
            "Seç: 'I'll go with the lamb tagine, please. Does it come with anything I should know about?'",
        },
        {
          speaker: "npc",
          message:
            "Excellent choice — comes with couscous and a tomato-coriander sauce, no nuts, no alcohol. I'll personally plate it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks|appreciate)",
            "(for going|for taking|for the time)",
            "(one more|quick) (thing|question)",
            "(could|can) you (note|flag) (it|this) on the (ticket|order)",
          ],
          hint_tr:
            "Bitir: 'Thanks for taking the time, Marco. Could you flag it on the kitchen ticket as well? I really appreciate it.'",
        },
        {
          speaker: "npc",
          message:
            "Of course — flagged in red. Your meal will be ready in about 25 minutes.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Wedding / Event Abroad
// ============================================================
export const travelB2Lesson_7: BundledLesson = {
  id: "travel.b2.wedding.1",
  skill_id: "travel.b2",
  index: 7,
  title: "Wedding Abroad — Traditions + Etiquette",
  description:
    "Yurtdışında bir düğüne davetlisin. Hediye, gelenek, dress code, toast — kültürel köprü kur.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb2.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "RSVP",
      tr_translation: "Katılım onayı (Fr. Répondez s'il vous plaît)",
      example:
        "I sent my RSVP last week — looking forward to it.",
      example_tr:
        "Geçen hafta katılım onayımı gönderdim — sabırsızlanıyorum.",
    },
    {
      id: "ex.tb2.7.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I wanted to ask about the etiquette",
      tr_translation: "Görgü kurallarını sormak istiyordum",
      example:
        "I wanted to ask about the etiquette — what's appropriate for a gift?",
      example_tr:
        "Görgü kurallarını sormak istiyordum — hediye için neyin uygun olduğu?",
    },
    {
      id: "ex.tb2.7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Düğününüze davet ettiğiniz için çok teşekkür ederim. Türk geleneklerine aşinayım ama buradaki adetlere değilim. Hediye ve dress code konusunda görgü kurallarını sormak istiyordum.",
      target:
        "Thank you so much for inviting me to your wedding. I'm familiar with Turkish traditions but not with the local ones here. I wanted to ask about the etiquette around gifts and the dress code.",
      accepted_variants: [
        "Thanks so much for the invite to your wedding. I know Turkish customs well but not the local ones — I wanted to check in on the etiquette for gifts and dress code.",
        "Thank you for inviting me to the wedding. I'm familiar with Turkish traditions but new to yours, so I wanted to ask about the etiquette — particularly gifts and dress code.",
        "I really appreciate the wedding invite. I know Turkish customs but not yours, so I wanted to ask about etiquette around gift-giving and what to wear.",
        "Thanks for the wedding invitation. I know Turkish customs well but I'm not as familiar with the traditions here — could I ask about gift etiquette and the dress code?",
      ],
      tr_hint:
        "Kültürel köprü dili: 'familiar with X but not with Y'. 'I wanted to ask about the etiquette' = kibar, naif değil.",
    },
    {
      id: "ex.tb2.7.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I'm familiar with Turkish customs but ___ with the local ones, so I wanted to check.",
      answer: "not",
      distractors: ["no", "non", "without"],
      tr_hint:
        "'familiar with X but not with Y' = paralel yapı. 'not' = doğru zıt eşleştirme.",
    },
    {
      id: "ex.tb2.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "In Turkey we always give gold, what you guys give? It is normal here to give money?",
      correct_sentence:
        "In Turkey we typically give gold or cash — what's customary here? Is cash appropriate, or would a registry gift be better?",
      tr_explanation:
        "'You guys' + 'normal here' = informal/clumsy. 'Typically' + 'customary' + 'appropriate' = kültürel duyarlılık. Soruyu paralel yapıyla bitir.",
    },
    {
      id: "ex.tb2.7.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Düğüne 2 hafta kala, gelin/damatın bir arkadaşıyla kahve. Gelenekleri öğreniyorsun, kendininkini de paylaşıyorsun.",
      npc_role: "Friend of Bride / Groom",
      setting: "Casual coffee, two weeks before wedding",
      turns: [
        {
          speaker: "npc",
          message:
            "Glad you could make it to coffee! So, two weeks until the big day — excited?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|really|very) (excited|looking forward)",
            "(it'?s| it is) (my first|the first) (wedding|time)",
            "(actually|in fact|to be honest).{0,30}(ask|check|wondering)",
            "i (wanted|was hoping) to (ask|check)",
          ],
          hint_tr:
            "Konuya gir: 'Really excited — it's actually my first wedding in this country. I wanted to check on a few things.'",
        },
        {
          speaker: "npc",
          message:
            "Of course, ask away.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(gift|gifts|gift-giving|the gift)",
            "(in turkey|back home).{0,30}(gold|cash|jewellery)",
            "(what'?s|what is) (customary|appropriate|the norm) (here|in your country)",
            "(registry|cash|something else)",
          ],
          hint_tr:
            "Hediye sorusu paralel: 'In Turkey, we usually give gold or cash. What's customary here — registry, cash, or something else?'",
        },
        {
          speaker: "npc",
          message:
            "Most people here either use the wedding registry or give cash in a card. Cash is totally fine and very common.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good to know|got it|thanks)",
            "(any guideline|what about the amount|how much is typical)",
            "(too little|too much).{0,30}(awkward|appropriate)",
            "what'?s (the typical|a normal) (range|amount)",
          ],
          hint_tr:
            "Miktar incele: 'Good to know. Is there a typical range, or would you say it depends on the relationship?'",
        },
        {
          speaker: "npc",
          message:
            "Close friends usually do 150 to 250 — but honestly anything thoughtful is appreciated.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|noted|got it|that helps)",
            "(one more|another) (thing|question)",
            "(dress code|what to wear|the attire)",
            "(formal|cocktail|black tie|smart casual)",
          ],
          hint_tr:
            "Diğer konu: 'Perfect, noted. One more — what's the dress code? Invitation says cocktail, but I want to make sure I read it right.'",
        },
        {
          speaker: "npc",
          message:
            "Cocktail's right — suit and tie or a dressier outfit. No tuxedo needed. And don't worry about white — that's just a Western thing for the bride.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that helps|good to know|appreciate)",
            "(speeches|toasts|tradition).{0,30}(expected|common)",
            "(should i prepare|do guests usually|am i expected to)",
            "(any tradition|any custom|anything else)",
          ],
          hint_tr:
            "Konuşma/toast kontrol: 'That helps. Any tradition I should be aware of — are speeches or toasts expected from guests?'",
        },
        {
          speaker: "npc",
          message:
            "Speeches are usually just the best man, maid of honour, and family. Guests don't have to do anything — just enjoy yourself.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|really appreciate)",
            "(really helpful|that helped|so helpful)",
            "(if it'?s|if you don'?t mind).{0,30}(i'?d like|i would love).{0,30}(toast|bring|share)",
            "i('?d| would) love to (share|bring|do)",
          ],
          hint_tr:
            "Bitir + kültürünü öner: 'Thanks, that's really helpful. If it's appropriate, I'd love to share a short Turkish toast at the table — would that be welcome?'",
        },
        {
          speaker: "npc",
          message:
            "That would be lovely — the couple would absolutely love that. Just let the MC know in advance.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — AirBnB Host Dispute (Checkout + Refund)
// ============================================================
export const travelB2Lesson_8: BundledLesson = {
  id: "travel.b2.airbnb.1",
  skill_id: "travel.b2",
  index: 8,
  title: "AirBnB Host Dispute",
  description:
    "Çıkışta host 'temizlik ücreti' veya 'hasar' iddiası yaptı. Diplomatic ama firm — fotoğraflarla itiraz et, refund talep et.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb2.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I have time-stamped photos",
      tr_translation: "Zaman damgalı fotoğraflarım var",
      example:
        "I have time-stamped photos from check-in showing the stain was already there.",
      example_tr:
        "Lekenin daha önce de orada olduğunu gösteren, giriş anına ait zaman damgalı fotoğraflarım var.",
    },
    {
      id: "ex.tb2.8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'll escalate through the platform",
      tr_translation: "Konuyu platform üzerinden bir üst makama taşıyacağım",
      example:
        "If we can't resolve this directly, I'll escalate through the AirBnB resolution centre.",
      example_tr:
        "Bunu doğrudan çözemezsek, konuyu AirBnB çözüm merkezi üzerinden bir üst makama taşıyacağım.",
    },
    {
      id: "ex.tb2.8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Giriş yaparken çektiğim zaman damgalı fotoğraflarda lekenin halihazırda orada olduğu görülüyor. İddianızı kabul etmiyorum ve haksız hasar ücretine itiraz ediyorum. Lütfen 80 Euro'yu iade edin, aksi takdirde konuyu çözüm merkezi üzerinden bir üst makama taşıyacağım.",
      target:
        "My time-stamped check-in photos show the stain was already there. I don't accept your claim and I'm disputing the unfair damage charge. Please refund the 80 euros, or I'll escalate through the resolution centre.",
      accepted_variants: [
        "My check-in photos are time-stamped and show the stain was there when I arrived. I don't accept the claim and I'm disputing the damage charge. Please refund the 80 euros, otherwise I'll escalate through the resolution centre.",
        "I have time-stamped photos from check-in showing the stain was already there. I'm disputing this damage charge as unfounded. Please refund the 80 euros — otherwise I'll take it to the resolution centre.",
        "The time-stamped photos I took at check-in show that stain was pre-existing. I dispute the damage claim. Please refund 80 euros or I'll escalate via the platform.",
        "My check-in photos with timestamps show the stain was there before I arrived. I'm contesting the damage charge. Please refund 80 euros, or I'll escalate to the resolution centre.",
      ],
      tr_hint:
        "Üç hamle: kanıt sun (time-stamped) + reddet (don't accept / disputing) + sonuç belirt (refund veya escalate). Tehdit değil, sıralı seçenek.",
    },
    {
      id: "ex.tb2.8.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I'm ___ this charge — it's not consistent with the photos I took at check-in.",
      answer: "disputing",
      distractors: ["denying", "refusing to pay", "complaining", "rejecting on"],
      tr_hint:
        "'dispute (a charge)' = itiraz etmek (resmi). 'I'm disputing' = present continuous, süreç içinde.",
    },
    {
      id: "ex.tb2.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "You are liar, this stain was here before, I will give you bad review!",
      correct_sentence:
        "I respectfully disagree — my check-in photos show the stain was pre-existing. I'd like to resolve this through the platform.",
      tr_explanation:
        "'Liar! Bad review!' = duygusal saldırı, dispute'u zayıflatır. 'Respectfully disagree' + 'photos show' + 'resolve through the platform' = belge tabanlı, profesyonel.",
    },
    {
      id: "ex.tb2.8.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Çıkıştan 2 saat sonra host'tan WhatsApp: 'Yatak çarşafında leke, 80 Euro temizlik ücreti.' Sen biliyorsun ki leke önceden vardı.",
      npc_role: "AirBnB Host",
      setting: "WhatsApp / AirBnB messaging, post-checkout",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi — just inspected the apartment. There's a large stain on the bedsheet. I'll have to charge 80 euros for extra cleaning.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|thanks for letting me know)",
            "(i'?d like to|let me|i need to) (clarify|push back|disagree)",
            "(actually|in fact).{0,30}(stain|that mark) (was|is) (already|pre-existing)",
            "i (have|took) (photos|pictures) (at check-?in|when i arrived)",
          ],
          hint_tr:
            "Önce nezaket + kanıta dön: 'Hi — thanks for letting me know. Actually, that stain was already there at check-in. I took time-stamped photos when I arrived.'",
        },
        {
          speaker: "npc",
          message:
            "Are you sure? I clean between every guest. I don't think it was there before.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?m| am) sure|yes, i('?m| am) sure|positive)",
            "i (can|will) send (you )?(the )?(photos|pictures)",
            "(they'?re|the photos are) time[- ]?stamped",
            "(let me|i'?ll) share (the|those) (photos|images) (now|with you)",
          ],
          hint_tr:
            "Net kanıt: 'I'm sure — they're time-stamped from the moment I checked in. Let me send them now.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, send them over.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sent|here they are|just sent|on its way)",
            "(check-in|arrival).{0,20}(\\d{1,2}:\\d{2}|am|pm|three pm|2 pm)",
            "you can see (the|that) (stain|mark) (clearly|in the photo)",
            "(as you can see|note that)",
          ],
          hint_tr:
            "Fotoğrafları sun: 'Sent — taken at 15:04 on check-in day. You can clearly see the stain in the second photo.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm, I see something there but it's hard to tell if it's the same spot. I still think the stain got worse during your stay.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i understand|i hear you|i see your point)",
            "(but|however|that said).{0,30}(burden|prove|show|same)",
            "(the burden|standard|airbnb policy)",
            "(i'?d like to|i need to) (dispute|formally dispute) (the|this) (charge|fee)",
          ],
          hint_tr:
            "Empati + sınır: 'I hear you, but the burden's on the host to show the damage was caused during the stay. I'd like to formally dispute the charge.'",
        },
        {
          speaker: "npc",
          message:
            "I'd rather we sort this out between us. Maybe we can meet in the middle — 40 euros?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i appreciate|appreciate that|thanks for offering)",
            "(but|however).{0,30}(not (the )?(stain|damage)|fair|comfortable)",
            "(can'?t|won'?t) agree to (a|any) (split|partial) (charge|payment)",
            "(no charge|zero|nothing)",
            "i('?d| would) prefer to (open|file).{0,20}(resolution|case)",
          ],
          hint_tr:
            "Ortayolu reddet: 'I appreciate the offer, but since the photos show the stain was already there, I can't agree to a partial charge. I'd prefer to open a case in the resolution centre.'",
        },
        {
          speaker: "npc",
          message:
            "Look — let's not involve AirBnB. Send me the full photo set and I'll cancel the charge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks|appreciate that)",
            "(sending|sent|on its way)",
            "(could|can) you (confirm|let me know) (once|when) (the charge is|it'?s) (cancelled|reversed)",
            "(written|in writing) (confirmation|message)",
          ],
          hint_tr:
            "Sözünü tut + yazılı onay: 'Thanks. Sending the full set now. Could you confirm in writing once the charge is reversed?'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Charge is reversed — you'll see it on your card in a few days. Sorry for the trouble.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Conference Networking (Sustained 5-min Pro Conversation)
// ============================================================
export const travelB2Lesson_9: BundledLesson = {
  id: "travel.b2.networking.1",
  skill_id: "travel.b2",
  index: 9,
  title: "Conference Networking",
  description:
    "Uluslararası konferansta kahve molası. 5-dakikalık profesyonel konuşmayı sürdür, follow-up zemini at.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb2.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "What brings you to the conference?",
      tr_translation: "Konferansa nasıl katıldın / seni ne getirdi?",
      example:
        "Hi, mind if I join? What brings you to the conference?",
      example_tr:
        "Merhaba, katılmamın sakıncası var mı? Seni konferansa ne getirdi?",
    },
    {
      id: "ex.tb2.9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd love to keep in touch",
      tr_translation: "İletişimde kalmak isterim",
      example:
        "I'd love to keep in touch — could I add you on LinkedIn?",
      example_tr:
        "İletişimde kalmak isterim — LinkedIn'de eklesem olur mu?",
    },
    {
      id: "ex.tb2.9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İstanbul merkezli bir B2B SaaS şirketinde ürün yöneticisiyim. Şu anda Avrupa pazarına açılma stratejimiz üzerinde çalışıyoruz, bu yüzden konferanstaki Almanya pazarı panelini özellikle ilginç buldum.",
      target:
        "I'm a product manager at a B2B SaaS company based in Istanbul. We're currently working on our European expansion strategy, so I found the panel on the German market especially interesting.",
      accepted_variants: [
        "I'm a PM at a B2B SaaS based in Istanbul. We're working on European expansion right now, so the German market panel was particularly relevant for me.",
        "I work as a product manager at a B2B SaaS company out of Istanbul. We're currently focused on European expansion, which is why I really enjoyed the German market panel.",
        "I'm a product manager at an Istanbul-based B2B SaaS. We're scoping our European expansion, so the panel on the German market really resonated.",
        "I lead product at a B2B SaaS in Istanbul. We're working through our European expansion strategy, so I found the German market panel especially useful.",
      ],
      tr_hint:
        "Networking formülü: rol + firma türü + lokasyon + şu anki odak + neden bu konferans alakalı. Spesifik referans (panel/konuşmacı) bağ kurar.",
    },
    {
      id: "ex.tb2.9.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'd love to keep in ___ — could I add you on LinkedIn?",
      answer: "touch",
      distractors: ["contact", "reach", "connection", "ear"],
      tr_hint:
        "'keep in touch' = sabit kalıp. 'in contact' de var ama daha resmi/mesafeli.",
    },
    {
      id: "ex.tb2.9.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Hello sir, what is your job? Give me your card so I can call you.",
      correct_sentence:
        "Hi — mind if I join? What brings you to the conference? I'd love to swap notes if you're working on something similar.",
      tr_explanation:
        "'What is your job? Give me your card!' = transactional, awkward. 'Mind if I join?' + 'What brings you' + 'swap notes' = collaborative, professional. Soft entry, soft exit.",
    },
    {
      id: "ex.tb2.9.6",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What brings you to the conference?",
      tr_translation: "Konferansa seni ne getirdi?",
      ipa: "/wɒt brɪŋz juː tə ðə ˈkɒnfərəns/",
    },
    {
      id: "ex.tb2.9.7",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Konferansta kahve molası. Yanına biri geliyor, 5 dakikalık konuşma — açılış, ortak konu, takip planı.",
      npc_role: "Conference Attendee (Senior PM)",
      setting: "Coffee break between sessions at international SaaS conference",
      turns: [
        {
          speaker: "npc",
          message:
            "That last panel ran long, didn't it? Mind if I grab the seat next to you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not at all|please do|go ahead|of course)",
            "(yeah|it ran|it definitely)",
            "(i('?m| am) [a-z]+|nice to meet you)",
            "what brings you (here|to (the )?conference)",
          ],
          hint_tr:
            "Aç + kendini tanıt + soru sor: 'Not at all, please do. I'm Berk. What brings you to the conference?'",
        },
        {
          speaker: "npc",
          message:
            "Sara, nice to meet you. I'm head of product at a Berlin fintech — here mostly for the European expansion track. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nice to meet you|good to meet you)",
            "i('?m| am) a (product manager|pm) at",
            "(b2b|saas).{0,30}(istanbul|turkey)",
            "we'?re (working on|focused on|scoping) (european )?expansion",
          ],
          hint_tr:
            "Kendini sun, paralel olarak: 'Nice to meet you. I'm a PM at a B2B SaaS in Istanbul. We're working on our European expansion — so the German market panel was really useful for me.'",
        },
        {
          speaker: "npc",
          message:
            "Oh interesting — what segment are you in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we sell to|our customers are|we work with)",
            "(mid-market|enterprise|smb)",
            "(logistics|fintech|hr|marketing|sales)",
            "(could|can) i ask.{0,30}(your stack|your team)",
            "what about (you|your company)",
          ],
          hint_tr:
            "Detay + geri soru: 'We sell to mid-market logistics companies. What about you — what does Berlin fintech mean in your case?'",
        },
        {
          speaker: "npc",
          message:
            "We're a payment infrastructure company — APIs for cross-border B2B payments. Big focus on Turkey actually, lots of corridor volume.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|how) (interesting|relevant|fascinating)",
            "(we actually|funnily enough|we'?ve been)",
            "(could|would) (be|love).{0,30}(curious|interested) (to hear|to learn)",
            "how did you (approach|crack|enter) (the turkish|that)",
          ],
          hint_tr:
            "İlgi göster + soru: 'That's really relevant — we've been thinking about cross-border payments ourselves. How did you approach the Turkish market initially?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, partnerships first. We partnered with two local banks before we ever opened a Turkish entity. It saved us 18 months.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a great|smart|useful) (insight|approach|tip)",
            "(makes a lot of sense|takes notes|i'?ll be borrowing)",
            "(can|would|might) (i ask|i wonder).{0,30}(challenges|pitfalls|advice)",
            "what would you (do differently|change)",
          ],
          hint_tr:
            "Derinleştir: 'That's a great insight. If you were doing it again, what would you do differently?'",
        },
        {
          speaker: "npc",
          message:
            "I'd hire a local commercial lead from day one. The biggest mistake was running it remotely from Berlin for the first year.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s really|hugely) (helpful|useful)",
            "(thank you|appreciate you sharing)",
            "(time'?s up|next session|the next talk)",
            "(would love|i'?d love) to (keep in touch|stay in touch|continue)",
            "(could|can) i (add you|connect) on linkedin",
          ],
          hint_tr:
            "Sarmalama + follow-up: 'That's really helpful — thank you. Looks like the next session is starting. I'd love to keep in touch — could I add you on LinkedIn?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — find me, Sara Müller, Berlin. Let's also grab a proper coffee on day two if you have time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds great|love that|let'?s do it|i('?d| would) love that)",
            "(i'?ll dm you|i'?ll message you|i'?ll find a time)",
            "(enjoy|hope you enjoy|have a good)",
            "(see you|catch you) (later|in there)",
          ],
          hint_tr:
            "Plan onayla + kibarca ayrıl: 'Sounds great — I'll DM you on LinkedIn with a couple of slots tomorrow. Enjoy the next session.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect — talk soon.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Travel Agent Complex Multi-Leg Booking
// ============================================================
export const travelB2Lesson_10: BundledLesson = {
  id: "travel.b2.travelagent.1",
  skill_id: "travel.b2",
  index: 10,
  title: "Multi-Leg Trip + Special Requests",
  description:
    "Travel agent'la 4-şehirli, özel gereksinimli (alerji + mobility + visa) karmaşık bir seyahat planla.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb2.10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like to put together",
      tr_translation: "Bir araya getirmek / planlamak istiyorum",
      example:
        "I'd like to put together a four-city trip with a couple of special requirements.",
      example_tr:
        "Dört şehirli, birkaç özel gereksinimi olan bir seyahat planlamak istiyorum.",
    },
    {
      id: "ex.tb2.10.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I have a hard constraint on",
      tr_translation: "Şu konuda kesin bir kısıtlamam var",
      example:
        "I have a hard constraint on the total budget — 4,000 euros, including everything.",
      example_tr:
        "Toplam bütçe konusunda kesin bir kısıtlamam var — her şey dahil 4.000 Euro.",
    },
    {
      id: "ex.tb2.10.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Üç hafta içinde Lizbon, Madrid, Roma ve Atina'yı kapsayacak bir gezi planlamak istiyorum. Toplam bütçem 4.000 Euro. İki kesin kısıtlamam var: hiçbir uçuş gece 22:00'dan sonra varmasın ve eşim için tekerlekli sandalye erişimi gerekiyor.",
      target:
        "I'd like to put together a three-week trip covering Lisbon, Madrid, Rome, and Athens. My total budget is 4,000 euros. I have two hard constraints: no flights arriving after 22:00, and wheelchair access for my partner.",
      accepted_variants: [
        "I'm looking to plan a three-week trip covering Lisbon, Madrid, Rome, and Athens, with a total budget of 4,000 euros. Two hard constraints: no flight arrivals after 22:00, and wheelchair accessibility for my partner throughout.",
        "I want to put together a three-week multi-city trip — Lisbon, Madrid, Rome, Athens — within a 4,000-euro budget. Two non-negotiables: no late-night arrivals after 22:00, and wheelchair access for my partner.",
        "I'd like to plan a three-week trip with four cities: Lisbon, Madrid, Rome, and Athens. Budget is 4,000 euros total. Two hard requirements: nothing arriving after 22:00, and full wheelchair access for my partner.",
        "I'm hoping to organise a three-week itinerary across Lisbon, Madrid, Rome, and Athens with a 4,000-euro budget. Two hard constraints — no arrivals after 22:00 and wheelchair access for my partner.",
      ],
      tr_hint:
        "Yapı: süre + şehirler + bütçe + 'hard constraints' (kesin kısıtlamalar). Bu format travel agent'ı doğru yöne kanalize eder.",
    },
    {
      id: "ex.tb2.10.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I have two ___ constraints — late-night arrivals and accessibility.",
      answer: "hard",
      distractors: ["firm", "fixed", "rigid", "solid"],
      tr_hint:
        "'hard constraint' = anlaşılır, yaygın iş İngilizcesi terimi: müzakere edilmez gereksinim.",
    },
    {
      id: "ex.tb2.10.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Plan me a trip cheap to 4 cities, also my wife is on wheelchair so the hotels must accept this.",
      correct_sentence:
        "I'd like to put together a four-city trip within 4,000 euros. One key requirement — wheelchair-accessible hotels and transfers throughout for my partner.",
      tr_explanation:
        "'Plan me a trip cheap' = komut + adjective sırası yanlış. 'On wheelchair' yerine 'uses a wheelchair' veya 'wheelchair-accessible'. Yapı: 'I'd like to put together' + bütçe + 'key requirement'.",
    },
    {
      id: "ex.tb2.10.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Travel agent'ın ofisinde. Karmaşık seyahati planla, alternatifleri değerlendir, bütçe sınırını koru.",
      npc_role: "Travel Agent",
      setting: "Boutique travel agency, mid-morning consultation",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning, please have a seat. Tell me what you're hoping to plan.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good morning|thanks|thank you)",
            "i('?d| would) like to (put together|plan|organise|book)",
            "(multi[- ]?city|four[- ]?city|three[- ]?week)",
            "(lisbon|madrid|rome|athens|several cities)",
          ],
          hint_tr:
            "Aç + ana özetle: 'Good morning. I'd like to put together a three-week, four-city trip — Lisbon, Madrid, Rome, and Athens.'",
        },
        {
          speaker: "npc",
          message:
            "Lovely route. What dates are you thinking, and roughly what budget?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(june|july|september|october|late|mid|early)",
            "(\\d{1,2}.{0,5}(to|through|-)\\d{1,2})",
            "(budget|total) (is|of|around) (\\d|four thousand)",
            "(4,?000|4k) (euros|eur|euro)",
            "all in|including (everything|flights and hotels)",
          ],
          hint_tr:
            "Tarih + bütçe: 'Mid-September, three weeks. Total budget is 4,000 euros all in — flights, hotels, and transfers.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. And how many travellers — just yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|2|myself and|my (wife|husband|partner))",
            "(here'?s where|and this is where).{0,30}(important|key|specific)",
            "(two|2) hard constraints",
            "(wheelchair|accessibility|accessible)",
          ],
          hint_tr:
            "Şimdi kısıtlamalar: 'Two — myself and my partner. And here's where I have two hard constraints. First, my partner uses a wheelchair, so we need accessible hotels and transfers throughout.'",
        },
        {
          speaker: "npc",
          message:
            "Understood — that affects hotel selection and transfers. What's the second constraint?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no flights|nothing|no arrivals) (arriving|landing) (after|past) (2[123]:?\\d{2}|10 ?pm|11 ?pm|22:00)",
            "(late[- ]?night|after (10|11) ?pm)",
            "(also|and).{0,20}(severe|serious) (nut|peanut) allergy",
            "(dietary|allergy)",
          ],
          hint_tr:
            "İkinci kısıtlama: 'No flight arrivals after 22:00 — late-night arrivals are too tough for accessibility. Also, I have a severe nut allergy that flights and hotel restaurants should be aware of.'",
        },
        {
          speaker: "npc",
          message:
            "Noted. The 22:00 rule will likely add 200 to 300 euros — daytime flights are pricier. Are you flexible on the order of cities?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|flexible|happy to (be|stay) flexible)",
            "as long as (we|it) (stays|fits)",
            "(within|under|inside) (the )?budget",
            "what(do you|would you) recommend",
          ],
          hint_tr:
            "Esneklik aç: 'Yes, I'm flexible on the order — as long as everything fits within the 4,000-euro budget. What would you recommend?'",
        },
        {
          speaker: "npc",
          message:
            "Best route is Lisbon → Madrid → Rome → Athens, daytime flights only. Hotels all four-star with verified accessibility. Comes to 3,940 euros — under budget.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|sounds great|fits well|nicely under)",
            "(could|can) you (also|please) (confirm|verify|check)",
            "(accessibility (audit|confirmation))",
            "(allergy|nut allergy).{0,30}(noted|flagged|sent)",
            "(written|in writing|by email)",
          ],
          hint_tr:
            "Onayla + verify et: 'That works. Could you also verify accessibility with each hotel directly, and flag the nut allergy with the airlines? I'd like everything in writing before I commit.'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely — I always verify accessibility with the hotel directly, and I'll add a medical note to each PNR. I'll email you the full proposal by end of day.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|thanks|thank you|appreciate)",
            "(one more|last) (question|thing)",
            "(cancellation|refund) policy",
            "(travel insurance|insurance)",
          ],
          hint_tr:
            "Son sorular: 'Perfect, thank you. One last thing — what's the cancellation policy on the package, and do you recommend separate travel insurance?'",
        },
        {
          speaker: "npc",
          message:
            "Full refund up to 30 days out, 50 percent up to 7 days. And yes — I always recommend separate insurance for medical reasons. I'll include three quotes in the proposal.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const travelHospitalityB2Lessons: BundledLesson[] = [
  travelB2Lesson_1,
  travelB2Lesson_2,
  travelB2Lesson_3,
  travelB2Lesson_4,
  travelB2Lesson_5,
  travelB2Lesson_6,
  travelB2Lesson_7,
  travelB2Lesson_8,
  travelB2Lesson_9,
  travelB2Lesson_10,
];
