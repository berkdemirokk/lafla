// Airport deep lessons — pre-flight, in-flight, post-flight derinligi.
// Skill: airport (30 new, IDs 44.21-44.50)
// Türk audience: lokum/Türk kahvesi gifts, Türk pasaport, Türk damak.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// SECTION A — PRE-FLIGHT (44.21 to 44.30)
// ============================================================

// ============================================================
// Lesson 44.21 — Self Check-in Kiosk Issues
// ============================================================
export const airportLesson_44_21: BundledLesson = {
  id: "airport.44.21",
  skill_id: "airport",
  index: 21,
  title: "Self Check-in Kiosk Sorunu",
  description:
    "Kiosk pasaport okumuyor. Personelden yardim iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.21.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "kiosk",
      tr_translation: "Self-servis check-in makinesi",
      example: "The kiosk isn't reading my passport.",
      example_tr: "Kiosk pasaportumu okumuyor.",
    },
    {
      id: "ex.44.21.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Self check-in kiosk Turk pasaportunu okumuyor. Personelden yardim isteyeceksin.",
      npc_role: "Airport staff",
      setting: "Check-in area, kiosk row",
      turns: [
        {
          speaker: "npc",
          message:
            "Need a hand?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (the kiosk|machine) (isn'?t|is not) (working|reading my passport)",
            "(it'?s not |won'?t |can'?t) (scan|read) my (passport|booking)",
            "(i'?m having trouble|having issues) (with the kiosk|checking in)",
            "(the kiosk|machine) (keeps )?(rejecting|saying error)",
            "(could you )?help me check in",
          ],
          hint_tr:
            "Sorun anlat: 'The kiosk isn't reading my passport'.",
        },
        {
          speaker: "npc",
          message:
            "Let me see — Turkish passport, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (turkish passport)",
            "(yes)(,)? (here it is|here you go)",
            "(yeah|that'?s right)(,)? (just (issued|renewed))",
            "(yes)(,)? (electronic|chip) passport",
            "(yes)(,)? (e-passport from turkey)",
          ],
          hint_tr:
            "Onayla: 'Yes, Turkish passport — e-passport'.",
        },
        {
          speaker: "npc",
          message:
            "Sometimes the chip needs to be flat. Try this counter instead — I'll check you in manually.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(perfect|sounds good)",
            "(thanks)(,)? (much easier)",
            "(thank you so much|life saver)",
            "(thanks)(,)? (i was getting (stressed|worried))",
          ],
          hint_tr:
            "Tesekkur: 'Thanks, much easier'.",
        },
        {
          speaker: "npc",
          message:
            "How many bags are you checking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+|one|two|three)( bag| suitcases?)?",
            "(just )?(one|two)( checked bag)?",
            "(\\d+) (large|carry-on|suitcase)",
            "(only )?one (suitcase|bag)",
            "(no checked bags|just a carry-on)",
          ],
          hint_tr:
            "Bagaj: 'One checked bag' veya 'Two suitcases'.",
        },
        {
          speaker: "npc",
          message:
            "Got it — bag tag coming up. Boarding pass on your phone or printed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(printed|on my phone)( please)?",
            "(i'?ll take|could i get) a printed one",
            "(phone is fine|on my phone)",
            "(both )?(if possible)",
            "(printed)(,)? (just in case)",
          ],
          hint_tr:
            "Boarding pass: 'Printed, please' (yedek icin guvenli).",
        },
        {
          speaker: "npc",
          message:
            "Coming right up — gate 23, boarding in fifty minutes.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.22 — Oversize Bag Fee
// ============================================================
export const airportLesson_44_22: BundledLesson = {
  id: "airport.44.22",
  skill_id: "airport",
  index: 22,
  title: "Bagaj Ucreti — Itiraz",
  description:
    "Bagaj asiri ucret istiyor. Kibarca itiraz et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.22.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "oversize charge",
      tr_translation: "Asiri boyut ucreti",
      example: "Is there really an oversize charge for this?",
      example_tr: "Bunun icin gercekten asiri ucret var mi?",
    },
    {
      id: "ex.44.22.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bagajin agir cikti, ek ucret istiyorlar. Itiraz et.",
      npc_role: "Check-in agent",
      setting: "Check-in counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Looks like your bag is two kilos over. That'll be eighty dollars extra.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eighty|that'?s a lot|that seems steep)",
            "(could i|can i) (re-?pack|take some things out)",
            "(is there )?(a way to (avoid|reduce)) (the fee|that)",
            "(i thought it was )?(twenty-three|23) kilos",
            "(only two kilos over)\\?\\s*(that'?s a lot)",
          ],
          hint_tr:
            "Itiraz: 'Could I repack to avoid the fee?'",
        },
        {
          speaker: "npc",
          message:
            "You can step aside and rearrange — move things to your carry-on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|thanks)(,)? (i'?ll do that)",
            "(can i (use|borrow) (a |the )?scale)",
            "(how much can my carry-on weigh|carry-on limit)",
            "(thanks)(,)? (let me try)",
            "(i'?ll be (quick|right back))",
          ],
          hint_tr:
            "Yeniden duzenle: 'Thanks, I'll do that'.",
        },
        {
          speaker: "npc",
          message:
            "Carry-on can be up to eight kilos. Scale's right there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(perfect|got it)",
            "(be right back|two minutes)",
            "(thanks)(,)? (i'?ll be quick)",
            "(thank you so much)",
          ],
          hint_tr:
            "Acele: 'Be right back, two minutes'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — now it's exactly twenty-three. Good to go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|finally|saved (me|that))",
            "(thanks|thank you)( so much)?",
            "(amazing|perfect)(,)? (eighty dollars saved)",
            "(thanks for the patience|life saver)",
            "(appreciate the help)",
          ],
          hint_tr:
            "Sevin: 'Thanks — eighty dollars saved!'",
        },
        {
          speaker: "npc",
          message:
            "Have a smooth flight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.23 — Frequent Flyer Status
// ============================================================
export const airportLesson_44_23: BundledLesson = {
  id: "airport.44.23",
  skill_id: "airport",
  index: 23,
  title: "Frequent Flyer — Statu",
  description:
    "Frequent flyer kart numarani belirt. Statu avantajlari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.23.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "frequent flyer",
      tr_translation: "Sik ucan musteri (loyalty programi)",
      example: "I have frequent flyer status.",
      example_tr: "Frequent flyer statum var.",
    },
    {
      id: "ex.44.23.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Check-in sirasinda frequent flyer numaranizi belirtmeyi unutmussunuz.",
      npc_role: "Check-in agent",
      setting: "Check-in counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, you're checked in. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|wait)(,)? (can i add my frequent flyer)",
            "(could you |can you )?(add my (\\w+) number)",
            "(i forgot to add|i didn'?t add) my frequent flyer",
            "(can my )?(miles|status) (be added|count)",
            "(my )?frequent flyer (number is|is) (\\w+)",
          ],
          hint_tr:
            "Ekle: 'Could you add my frequent flyer number?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — what's the number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |the number is )(\\w+)",
            "(\\w+)(,)? (here'?s the card)",
            "(let me check my phone|let me look it up)",
            "(starts with (\\w+))",
            "(it'?s )?(under my name|in the app)",
          ],
          hint_tr:
            "Numarayi soyle: 'It's [number]'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Looks like you're at gold status — want to use a lounge pass?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|please)",
            "(yeah)(,)? (sounds great)",
            "(do i have lounge access)\\??",
            "(perfect|yes please)",
            "(i didn'?t know that|that would be amazing)",
          ],
          hint_tr:
            "Avantaj: 'Yes, please!'. Gold = lounge erisimi.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Priority boarding too. Lounge is upstairs, terminal C.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(perfect|amazing|love this)",
            "(thanks for the upgrade|all the perks)",
            "(appreciate it)",
            "(thanks)(,)? (good to know)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much!'",
        },
        {
          speaker: "npc",
          message:
            "Enjoy the flight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.24 — Special Meal Request
// ============================================================
export const airportLesson_44_24: BundledLesson = {
  id: "airport.44.24",
  skill_id: "airport",
  index: 24,
  title: "Ozel Yemek — Vejetaryen/Helal",
  description:
    "Ucusta vejetaryen/helal yemek talep et — gun icinde son dakika.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.24.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "special meal",
      tr_translation: "Ozel yemek (diyet/dini)",
      example: "Can I request a special meal?",
      example_tr: "Ozel yemek talep edebilir miyim?",
    },
    {
      id: "ex.44.24.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Check-in sirasinda helal yemek istemeyi unutmussun. Son dakika talep.",
      npc_role: "Check-in agent",
      setting: "Check-in counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything else before I print your boarding pass?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i|can i) (request|add) (a |the )?special meal",
            "(is it too late to|can i still) (request|order) (a |the )?(halal|vegetarian|vegan) meal",
            "(i need a |i'?d like a )(halal|vegetarian|vegan|gluten-free) meal",
            "(do you (offer|have)) halal options",
            "(can i (switch|change)) my meal",
          ],
          hint_tr:
            "Ozel yemek: 'Can I request a halal meal?'. Turkler icin halal yaygin.",
        },
        {
          speaker: "npc",
          message:
            "We usually need 24 hours notice — let me check if it's possible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(i understand|i know)(,)? (thanks for checking)",
            "(any chance|i hope so)",
            "(thank you for trying)",
            "(i'?ll wait)",
          ],
          hint_tr:
            "Sakin: 'Thanks for checking'.",
        },
        {
          speaker: "npc",
          message:
            "Good news — there are still a few halal meals available. I'll add it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(amazing|perfect|life saver)",
            "(appreciate it)(,)? (really)",
            "(you'?re the best|thanks a million)",
            "(thank you for taking the time)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much, life saver!'",
        },
        {
          speaker: "npc",
          message:
            "No problem. It'll be on the flight attendant's list.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|thanks)",
            "(should i (mention|remind) them)\\??",
            "(thanks again)",
            "(appreciate it|all good)",
            "(thank you)",
          ],
          hint_tr:
            "Onayla: 'Perfect, thanks again'.",
        },
        {
          speaker: "npc",
          message:
            "Have a great flight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.25 — Pet Travel Paperwork
// ============================================================
export const airportLesson_44_25: BundledLesson = {
  id: "airport.44.25",
  skill_id: "airport",
  index: 25,
  title: "Evcil Hayvan Seyahati",
  description:
    "Kediyle/kopekle ucuyorsun. Evrak gostermek + checkin.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.25.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "pet carrier",
      tr_translation: "Evcil hayvan tasiyici (kafes)",
      example: "My cat is in the pet carrier.",
      example_tr: "Kedim tasiyicinin icinde.",
    },
    {
      id: "ex.44.25.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "health certificate",
      tr_translation: "Saglik raporu (veterinerden)",
      example: "Here's the health certificate.",
      example_tr: "Saglik raporu burada.",
    },
    {
      id: "ex.44.25.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kedinle uluslararasi ucuyorsun. Evrak kontrolu.",
      npc_role: "Check-in agent",
      setting: "Check-in counter, with pet carrier",
      turns: [
        {
          speaker: "npc",
          message:
            "Traveling with a pet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (this is my cat|my dog)",
            "(yes)(,)? (i have a cat|she'?s in the carrier)",
            "(this is )(\\w+)(,)? (my cat)",
            "(yes)(,)? (everything documented|all my paperwork)",
            "(yeah)(,)? (she'?s in cabin|under the seat)",
          ],
          hint_tr:
            "Onayla: 'Yes, this is my cat'.",
        },
        {
          speaker: "npc",
          message:
            "Cabin or cargo? And do you have the health certificate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cabin|in cabin|under the seat)(,)? (yes the certificate'?s here)",
            "(here'?s the health certificate|the paperwork)",
            "(in cabin|she'?ll be with me)",
            "(yes)(,)? (vaccinations and (rabies|microchip)) (documented|here)",
            "(i have everything|all the documents)",
          ],
          hint_tr:
            "Evrak: 'Cabin, here's the health certificate'.",
        },
        {
          speaker: "npc",
          message:
            "Let me check the rabies vaccine date. Looks good. Microchip?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (number'?s on the certificate|right here)",
            "(it'?s (on|in) the documentation|paperwork)",
            "(yes)(,)? (registered (in turkey|with the EU))",
            "(yeah)(,)? (microchipped (last year|when she was a kitten))",
            "(it'?s the (line|number) below)",
          ],
          hint_tr:
            "Onayla: 'Yes, number's on the certificate'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Pet fee is one hundred — card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|here'?s my card)",
            "(cash)(,)? (one hundred)",
            "(i'?ll pay (with )?card)",
            "(here you go)",
            "(tap to pay|contactless)",
          ],
          hint_tr:
            "Ode: 'Card, here you go'.",
        },
        {
          speaker: "npc",
          message:
            "All set. Make sure she stays in the carrier in the terminal.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.26 — Excess Baggage Türkiye-Almanya
// ============================================================
export const airportLesson_44_26: BundledLesson = {
  id: "airport.44.26",
  skill_id: "airport",
  index: 26,
  title: "Asiri Bagaj — Turkiye to Almanya",
  description:
    "Tipik Turk ogrenci: lokum + Turk kahvesi + ek esyalar. Bagaj agir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.26.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "excess baggage",
      tr_translation: "Asiri bagaj (limit ustu)",
      example: "I'm worried about excess baggage fees.",
      example_tr: "Asiri bagaj ucretinden endiseliyim.",
    },
    {
      id: "ex.44.26.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "host family",
      tr_translation: "Konak aile (Erasmus/exchange)",
      example: "I'm bringing gifts for my host family.",
      example_tr: "Konak ailem icin hediye getiriyorum.",
    },
    {
      id: "ex.44.26.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Erasmus icin Istanbul'dan Almanya'ya ucuyorsun. Lokum + Turk kahvesi yuzunden bagaj agir.",
      npc_role: "Check-in agent at Istanbul Airport",
      setting: "Istanbul Airport, flight to Germany",
      turns: [
        {
          speaker: "npc",
          message:
            "Your bag is six kilos over. That's a significant excess charge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|i was afraid of that)",
            "(it'?s mostly|most of it'?s) (gifts|lokum and turkish coffee)",
            "(i have to bring|i'?m bringing) (lokum|turkish coffee|sweets)( for my host family)?",
            "(i was traveling|i'?m going) (for erasmus|to study)",
            "(how much is the fee)\\??",
          ],
          hint_tr:
            "Aciklik: 'It's mostly gifts — lokum and Turkish coffee for my host family'.",
        },
        {
          speaker: "npc",
          message:
            "I see. Excess fee is fifteen euros per kilo. So ninety euros.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ninety euros|that'?s a lot)",
            "(any way to (reduce|avoid)) (the fee|that)",
            "(could i|can i) (move some things to (my )?carry-on)",
            "(could i (repack|rearrange))",
            "(what if i (take out|remove) some items)",
          ],
          hint_tr:
            "Itiraz: 'Could I move some items to my carry-on?'",
        },
        {
          speaker: "npc",
          message:
            "Carry-on limit is eight kilos. You can step aside and try.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|perfect)",
            "(great|i'?ll try)",
            "(could i (use|borrow) (a |the )?scale)",
            "(be right back|two minutes)",
            "(thanks for the option)",
          ],
          hint_tr:
            "Dene: 'Thanks, I'll try'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Just don't put the lokum in the carry-on — security may flag the metal box.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(good to know|thanks for the heads up)",
            "(i'?ll move the )?(clothes|books) instead",
            "(thanks for letting me know)",
            "(appreciate the tip)",
            "(noted|got it)",
          ],
          hint_tr:
            "Bilgi al: 'Thanks for the heads up — I'll move clothes instead'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Come back when you're ready.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.27 — Connecting Flight Terminal Change
// ============================================================
export const airportLesson_44_27: BundledLesson = {
  id: "airport.44.27",
  skill_id: "airport",
  index: 27,
  title: "Aktarma — Terminal Degisiyor",
  description:
    "Aktarma terminal degisikligi. Bilgi al.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.27.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "connecting flight",
      tr_translation: "Aktarma ucusu",
      example: "I have a connecting flight to Istanbul.",
      example_tr: "Istanbul'a aktarma ucusum var.",
    },
    {
      id: "ex.44.27.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Inisten sonra terminal degisikligi var. Yardim merkezine soruyorsun.",
      npc_role: "Information desk agent",
      setting: "Transit area, info desk",
      turns: [
        {
          speaker: "npc",
          message:
            "How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have a |my )?connecting flight to (\\w+)",
            "(which terminal|where do i go) (for|to)",
            "(how do i get to|where'?s) (terminal (\\w+)|the (\\w+) terminal)",
            "(i was told my )?terminal (changed|switched)",
            "(my flight is at|leaving from) (\\w+)(,)? (where'?s that)",
          ],
          hint_tr:
            "Bilgi sor: 'Which terminal for my connecting flight to [city]?'",
        },
        {
          speaker: "npc",
          message:
            "Your terminal moved from D to F. There's a shuttle. Take it from gate D32.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long does the shuttle take)",
            "(do i have enough time|will i make it)",
            "(how often does it run)",
            "(thanks)(,)? (which way to D32)",
            "(any other way|can i walk)",
          ],
          hint_tr:
            "Sure: 'How long does the shuttle take?'",
        },
        {
          speaker: "npc",
          message:
            "About twenty minutes total. Your flight boards in seventy minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|that'?s plenty)(,)? (thanks)",
            "(okay)(,)? (i should be fine)",
            "(thanks)(,)? (heading there now)",
            "(should i hurry|need to run)",
            "(thanks)(,)? (i'?ll go now)",
          ],
          hint_tr:
            "Hareket: 'Perfect, heading there now'.",
        },
        {
          speaker: "npc",
          message:
            "Just follow the signs to D32. Have a good flight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate the help)",
            "(thanks for the directions)",
            "(perfect)",
            "(thanks)(,)? (you'?ve been a big help)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you so much, appreciate the help'.",
        },
        {
          speaker: "npc",
          message:
            "Safe travels.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.28 — Lounge Access
// ============================================================
export const airportLesson_44_28: BundledLesson = {
  id: "airport.44.28",
  skill_id: "airport",
  index: 28,
  title: "Lounge Erisimi",
  description:
    "Lounge'a girmek istiyorsun. Kart, statu, ucret.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.28.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "lounge access",
      tr_translation: "Lounge erisimi (havalimani VIP)",
      example: "Do I have lounge access?",
      example_tr: "Lounge erisimi var mi?",
    },
    {
      id: "ex.44.28.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Lounge girisindesin. Kart ya da ucret kontrolu.",
      npc_role: "Lounge attendant",
      setting: "Airport lounge entrance",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome — can I see your card?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure)(,)? (here'?s my (\\w+) card)",
            "(do i have access|i'?m not sure if i)",
            "(my (boarding pass|ticket) is (\\w+))",
            "(i have priority pass|gold status)",
            "(can i (pay|enter) without a card)",
          ],
          hint_tr:
            "Kart goster: 'Here's my Priority Pass'.",
        },
        {
          speaker: "npc",
          message:
            "Looks like you're not on a partner list. Walk-in fee is forty.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|that works)(,)? (i'?ll pay)",
            "(how long can i (stay|use it))",
            "(does that include food and drinks)\\??",
            "(any cheaper |day pass) options",
            "(actually )?(forty is fine|i'?ll pay)",
          ],
          hint_tr:
            "Kabul: 'Okay, I'll pay'.",
        },
        {
          speaker: "npc",
          message:
            "Yes — food, drinks, wifi, shower if you need. Three-hour limit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|sounds good)",
            "(thanks|here'?s my card)",
            "(no shower|just food)",
            "(do you have (turkish |coffee))\\??",
            "(thanks for the info)",
          ],
          hint_tr:
            "Sor: 'Do you have coffee?'",
        },
        {
          speaker: "npc",
          message:
            "Espresso bar over there. Charging stations along the wall.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(perfect|amazing)",
            "(thanks)(,)? (i'?ll head over)",
            "(appreciate it)",
            "(grateful for the info)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, amazing'.",
        },
        {
          speaker: "npc",
          message:
            "Enjoy your stay.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.29 — TSA Pre-check Question
// ============================================================
export const airportLesson_44_29: BundledLesson = {
  id: "airport.44.29",
  skill_id: "airport",
  index: 29,
  title: "TSA Pre-Check Soru",
  description:
    "TSA pre-check var mi? Hizli giris ne?",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.29.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "TSA Pre-check",
      tr_translation: "ABD'de hizli guvenlik kontrolu",
      example: "Do I have TSA Pre-check?",
      example_tr: "TSA Pre-check'im var mi?",
    },
    {
      id: "ex.44.29.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "ABD'desin, hizli guvenlik kuyruguna gitmek istiyorsun.",
      npc_role: "TSA agent",
      setting: "US airport security line",
      turns: [
        {
          speaker: "npc",
          message:
            "Boarding pass please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here'?s mine)",
            "(do i have tsa pre-check)\\??",
            "(am i in the right line)\\??",
            "(can i use the fast lane)",
            "(here'?s my boarding pass)",
          ],
          hint_tr:
            "Goster: 'Here you go — do I have TSA Pre-check?'",
        },
        {
          speaker: "npc",
          message:
            "Doesn't look like you do — Pre-check requires US registration. You're in the standard line.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(got it|i see)",
            "(how do i (get|apply for) it)",
            "(thanks|appreciate it)",
            "(no problem)(,)? (where'?s the standard line)",
            "(does it work for international flights)",
          ],
          hint_tr:
            "Bilgi al: 'How do I get TSA Pre-check?'",
        },
        {
          speaker: "npc",
          message:
            "You apply online and have an interview. Eighty bucks for five years.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|good to know)",
            "(does it work for tourists|non-residents)\\??",
            "(i'?ll look into it)",
            "(thanks for the info)",
            "(might be worth it)",
          ],
          hint_tr:
            "Devam: 'Does it work for non-residents?'",
        },
        {
          speaker: "npc",
          message:
            "Only US citizens and permanent residents. Global Entry is the option for travelers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(global entry|got it|i'?ll check that out)",
            "(thanks for the info|appreciate the tip)",
            "(thanks)(,)? (i'?ll head to the standard line)",
            "(thank you so much)",
            "(makes sense|got it)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for the info'.",
        },
        {
          speaker: "npc",
          message:
            "Have a good flight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.30 — Group Travel Coordination
// ============================================================
export const airportLesson_44_30: BundledLesson = {
  id: "airport.44.30",
  skill_id: "airport",
  index: 30,
  title: "Grup Seyahati Koordinasyonu",
  description:
    "Grupla seyahat. Toplanma noktasi, koltuk yan yana mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.30.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "seated together",
      tr_translation: "Yan yana oturmak",
      example: "Can we be seated together?",
      example_tr: "Yan yana oturabilir miyiz?",
    },
    {
      id: "ex.44.30.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aile ile seyahat ediyorsun. Check-in'de koltuklar ayri cikti.",
      npc_role: "Check-in agent",
      setting: "Check-in counter, family travel",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, four passengers under your booking. Boarding passes coming up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could we |can we )?(be seated together|sit together)",
            "(are we (sitting|seated) together)\\??",
            "(can you (put|move) us next to each other)",
            "(my parents and i|our family) (need to sit together)",
            "(is there a way to seat us together)",
          ],
          hint_tr:
            "Iste: 'Could we be seated together?'",
        },
        {
          speaker: "npc",
          message:
            "Let me see — the flight's pretty full. I have a row of three and one seat in the next row.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any way to|could you|can you) (find four together)",
            "(could we ask the gate)\\??",
            "(my (mom|dad) doesn'?t speak english)(,)? (she needs to be with us)",
            "(any chance for an exit row|window row of four)",
            "(if not at check-in)(,)? (could we ask the gate)",
          ],
          hint_tr:
            "Israr: 'My mom doesn't speak English — could we ask the gate?'",
        },
        {
          speaker: "npc",
          message:
            "Try the gate — sometimes they can rearrange when more seats free up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(thanks for trying)",
            "(perfect|that works)",
            "(what'?s the gate number)\\??",
            "(thanks for the tip)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for trying — what's the gate number?'",
        },
        {
          speaker: "npc",
          message:
            "Gate 17. Boarding in about an hour.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(we'?ll head there now)",
            "(thank you so much)",
            "(appreciate the help)",
            "(thanks again)",
          ],
          hint_tr:
            "Bitir: 'Thanks, we'll head there now'.",
        },
        {
          speaker: "npc",
          message:
            "Safe travels.",
        },
      ],
    },
  ],
};

// ============================================================
// SECTION B — IN-FLIGHT (44.31 to 44.40)
// ============================================================

// ============================================================
// Lesson 44.31 — Seat Swap (Kayinvalide)
// ============================================================
export const airportLesson_44_31: BundledLesson = {
  id: "airport.44.31",
  skill_id: "airport",
  index: 31,
  title: "Koltuk Degisikligi — Kayinvalide Yanima",
  description:
    "Kayinvalidenle yan yana oturmak istiyorsun. Yabancidan rica.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.31.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "swap seats",
      tr_translation: "Koltuk degistirmek",
      example: "Would you mind swapping seats?",
      example_tr: "Koltuk degistirmek ister misin?",
    },
    {
      id: "ex.44.31.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kayinvaliden yandaki kisinin koltugunda. Koltuk degisimi rica.",
      npc_role: "Passenger",
      setting: "On plane, before takeoff",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|excuse me)(,)? (i was wondering)",
            "(would you mind|sorry to bother) (swapping seats|switching)",
            "(my (mother|mother-in-law) is in (\\w+))(,)? (we'?d love to sit together)",
            "(i'?d like to sit next to|sit with) my family",
            "(excuse me)(,)? (any chance we could swap)",
          ],
          hint_tr:
            "Yumusak: 'Would you mind swapping seats? My mother-in-law is over there'. Türk: 'kayinvalide' = mother-in-law.",
        },
        {
          speaker: "npc",
          message:
            "Sure — where's the other seat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |seat is )(\\w+\\d+)",
            "(over there|in the (front|back)|row \\d+)",
            "(it'?s an aisle|window) (seat)",
            "(let me show you|just behind you)",
            "(here'?s the boarding pass|same row over)",
          ],
          hint_tr:
            "Koltuk: 'It's row 14, aisle seat'.",
        },
        {
          speaker: "npc",
          message:
            "Is it the same kind of seat? Window or aisle?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s an |yes the |an )(aisle|window) seat",
            "(same kind|window for window|aisle for aisle)",
            "(actually |yes)(,)? (it'?s a (window|aisle))",
            "(it'?s a middle|honestly a middle)(,)? (sorry)",
            "(yes)(,)? (just two rows up)",
          ],
          hint_tr:
            "Acik ol: 'Yes, aisle seat — same as yours'. Aldatma.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Let me grab my bag.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(really appreciate it|life saver)",
            "(you'?re the best|so kind of you)",
            "(thanks)(,)? (means a lot)",
            "(thank you|appreciate it)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much, really appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "No problem at all. Enjoy the flight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.32 — Empty Row Claim
// ============================================================
export const airportLesson_44_32: BundledLesson = {
  id: "airport.44.32",
  skill_id: "airport",
  index: 32,
  title: "Bos Sira — Almak",
  description:
    "Yan yana bos sira gormussun. Kabin gorevlisinden izin iste.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.32.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "empty row",
      tr_translation: "Bos sira",
      example: "Could I move to that empty row?",
      example_tr: "Su bos siraya gecebilir miyim?",
    },
    {
      id: "ex.44.32.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kapilar kapandi, ucak hareket etmedi. Bos sira gormussun.",
      npc_role: "Flight attendant",
      setting: "Plane, just before takeoff",
      turns: [
        {
          speaker: "npc",
          message:
            "Yes, what do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i|can i) (move to|switch to) that empty row",
            "(would it be okay) (if i move|to switch)",
            "(once we'?re in the air|after takeoff)(,)? (could i move)",
            "(any chance) (i could move|to take that row)",
            "(if no one'?s sitting there)(,)? (could i move)",
          ],
          hint_tr:
            "Iste: 'Could I move to that empty row?'",
        },
        {
          speaker: "npc",
          message:
            "Once we're at cruising altitude — wait for the seatbelt sign.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|of course)",
            "(thanks|thank you)",
            "(no problem)(,)? (i'?ll wait)",
            "(sounds good)",
            "(thanks)(,)? (appreciate it)",
          ],
          hint_tr:
            "Anladim: 'Got it, I'll wait'.",
        },
        {
          speaker: "npc",
          message:
            "Need anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i'?m good|nothing else)( for now)?",
            "(maybe (water|coffee))( later)?",
            "(thanks)(,)? (all good)",
            "(no thanks)(,)? (just the seat)",
            "(maybe a (blanket|pillow))",
          ],
          hint_tr:
            "Hayir: 'I'm good, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "Alright — I'll let you know when you can move.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(appreciate it)",
            "(perfect)",
            "(thanks)(,)? (much appreciated)",
            "(thank you so much)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, much appreciated'.",
        },
        {
          speaker: "npc",
          message:
            "No problem. Enjoy the flight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.33 — Crying Baby Patience
// ============================================================
export const airportLesson_44_33: BundledLesson = {
  id: "airport.44.33",
  skill_id: "airport",
  index: 33,
  title: "Aglayan Bebek — Sabir",
  description:
    "Yanindaki bebek agliyor. Empatiyle anneye yaklas.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.33.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "no worries at all",
      tr_translation: "Hic dert etme",
      example: "No worries at all — babies cry.",
      example_tr: "Hic dert etme — bebekler aglar.",
    },
    {
      id: "ex.44.33.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yanindaki anne bebegi yatistirmaya calisiyor. Empati kuruyorsun.",
      npc_role: "Mother with baby",
      setting: "On plane, baby crying",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm so sorry — she just won't settle.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|don'?t worry|it'?s totally fine)",
            "(it'?s okay|no problem at all)",
            "(babies cry|it happens|i understand)",
            "(no apology needed|she'?s a baby)",
            "(it'?s okay)(,)? (i can'?t imagine flying with a baby)",
          ],
          hint_tr:
            "Empati: 'No worries — babies cry, it's fine'.",
        },
        {
          speaker: "npc",
          message:
            "It's her first flight. Her ears must hurt.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|poor thing|bless her)",
            "(have you tried (a pacifier|giving her water))\\??",
            "(it'?ll pass|she'?ll adjust)",
            "(do you need (anything|help))\\??",
            "(takeoff is the hardest part)",
          ],
          hint_tr:
            "Yardim: 'Have you tried a pacifier?'",
        },
        {
          speaker: "npc",
          message:
            "Trying the pacifier now. Thank you for being so understanding.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|happy to|no problem)",
            "(my pleasure|truly no worries)",
            "(don'?t mention it|all good)",
            "(let me know if you need anything)",
            "(traveling with a baby is hard)",
          ],
          hint_tr:
            "Kibar: 'Of course — let me know if you need anything'.",
        },
        {
          speaker: "npc",
          message:
            "I really appreciate that. You're so kind.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|happy to help)",
            "(it'?s the least i can do)",
            "(don'?t mention it)",
            "(hope she settles soon)",
            "(it'?s all good)",
          ],
          hint_tr:
            "Bitis: 'Hope she settles soon'.",
        },
        {
          speaker: "npc",
          message:
            "Thank you. She'?s starting to relax already.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.34 — Air Sickness
// ============================================================
export const airportLesson_44_34: BundledLesson = {
  id: "airport.44.34",
  skill_id: "airport",
  index: 34,
  title: "Ucak Tutmasi",
  description:
    "Midende sorun var, kabin gorevlisinden yardim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.34.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "air sick",
      tr_translation: "Ucakta midesi bulanmak",
      example: "I'm feeling a bit air sick.",
      example_tr: "Biraz ucak tutmasi yapiyor.",
    },
    {
      id: "ex.44.34.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sick bag",
      tr_translation: "Kustugum torba (ucak)",
      example: "Could I get a sick bag?",
      example_tr: "Bir kusma torbasi alabilir miyim?",
    },
    {
      id: "ex.44.34.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Midende kotu hissediyorsun. Kabin gorevlisinden yardim.",
      npc_role: "Flight attendant",
      setting: "On plane, mid-flight",
      turns: [
        {
          speaker: "npc",
          message:
            "Yes, what do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m feeling|i feel) (a bit )?(air sick|nauseous|dizzy)",
            "(could i get|do you have) (a |the )?sick bag",
            "(i don'?t feel (well|good))",
            "(some water|some ginger ale) (please)",
            "(i need a sick bag|i feel like (throwing up|vomiting))",
          ],
          hint_tr:
            "Soyle: 'I'm feeling air sick — could I get a sick bag?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — sick bag is in the seat pocket. Let me get you ginger ale and a cold towel.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate it)",
            "(life saver)",
            "(thank you|appreciate the help)",
            "(thanks)(,)? (much better than what i had)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "Here you go. Try to breathe slowly. Are you feeling worse or just queasy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just queasy|just a little)",
            "(getting worse|feeling worse)",
            "(maybe i need (medicine|something stronger))",
            "(thanks|breathing slowly)(,)? (better)",
            "(stable|just need to ride it out)",
          ],
          hint_tr:
            "Anlat: 'Just queasy — breathing slowly helps'.",
        },
        {
          speaker: "npc",
          message:
            "Let me know if you need any medicine. We have anti-nausea on board.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? (i'?ll see how it goes)",
            "(could i take the medicine|maybe the medicine)",
            "(i think i'?ll be okay|i'?ll see)",
            "(thanks)(,)? (i'?ll wait a bit)",
            "(yes please|maybe a small dose)",
          ],
          hint_tr:
            "Sec: 'I'll see how it goes' veya 'Maybe a small dose'.",
        },
        {
          speaker: "npc",
          message:
            "Just buzz me if you need anything else.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.35 — Sleep Mask + Blanket
// ============================================================
export const airportLesson_44_35: BundledLesson = {
  id: "airport.44.35",
  skill_id: "airport",
  index: 35,
  title: "Uyku Maskesi + Battaniye",
  description:
    "Uzun ucusta uyumak. Maske, battaniye, yastik iste.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.35.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "extra blanket",
      tr_translation: "Ek battaniye",
      example: "Could I have an extra blanket?",
      example_tr: "Ek bir battaniye alabilir miyim?",
    },
    {
      id: "ex.44.35.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Uzun ucusta uyumak istiyorsun. Konfor istek.",
      npc_role: "Flight attendant",
      setting: "Plane, long flight",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything I can get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i|can i) (have|get) (an )?(extra blanket|sleep mask|pillow)",
            "(do you have) (sleep masks|earplugs)",
            "(it'?s )?(a bit |getting )(cold)(,)? (could i have a blanket)",
            "(i'?m gonna try to sleep|trying to rest)",
            "(could i get some ear plugs and a sleep mask)",
          ],
          hint_tr:
            "Iste: 'Could I have an extra blanket and a sleep mask?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Anything else? Earplugs?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |yeah |earplugs )?(please|would be great)",
            "(no thanks|that'?s all)",
            "(maybe a |another )?(pillow)",
            "(actually yes|yes please)",
            "(perfect)(,)? (earplugs too)",
          ],
          hint_tr:
            "Devam: 'Yes, earplugs too please'.",
        },
        {
          speaker: "npc",
          message:
            "Be right back — anything to drink before you sleep?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(some water|a glass of water|water please)",
            "(no thanks|i'?m good)",
            "(maybe (tea|herbal tea))",
            "(some water and a juice)",
            "(no)(,)? (i'?m ready to sleep)",
          ],
          hint_tr:
            "Icecek: 'Just water, please'.",
        },
        {
          speaker: "npc",
          message:
            "Coming right up. Sweet dreams.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate it)",
            "(thanks)(,)? (you'?re the best)",
            "(thanks)(,)? (good night)",
            "(thanks for the help)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Just buzz if you need more.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.36 — Movie Audio Not Working
// ============================================================
export const airportLesson_44_36: BundledLesson = {
  id: "airport.44.36",
  skill_id: "airport",
  index: 36,
  title: "Film Sesi Calismiyor",
  description:
    "Sesli olarak film izleyemiyorsun, kabin gorevlisinden yardim.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.36.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "audio jack",
      tr_translation: "Kulaklik girisi",
      example: "The audio jack isn't working.",
      example_tr: "Kulaklik girisi calismiyor.",
    },
    {
      id: "ex.44.36.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kulaklik girisinden ses gelmiyor. Yardim iste.",
      npc_role: "Flight attendant",
      setting: "Plane, in-flight entertainment",
      turns: [
        {
          speaker: "npc",
          message:
            "Yes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the audio|sound) (isn'?t|is not) working",
            "(my )?(headphones|earphones) (aren'?t|are not) connecting",
            "(i can'?t (hear|get) (the (movie|audio)))",
            "(the entertainment screen)( isn'?t working)?",
            "(no sound|i don'?t get any audio)",
          ],
          hint_tr:
            "Sorun: 'The audio isn't working'.",
        },
        {
          speaker: "npc",
          message:
            "Have you tried unplugging and plugging the headphones back in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (a few times|several times)",
            "(no)(,)? (i'?ll try that)",
            "(yes)(,)? (still nothing)",
            "(maybe the jack is broken)",
            "(let me try (again|once more))",
          ],
          hint_tr:
            "Cevap: 'Yes, several times — nothing'.",
        },
        {
          speaker: "npc",
          message:
            "Let me try switching the headphones. Could be your jack.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|sure|of course)",
            "(yeah)(,)? (let'?s try)",
            "(perfect|appreciate it)",
            "(could you also reset the screen|the screen also froze)",
            "(thanks for trying)",
          ],
          hint_tr:
            "Kabul: 'Sure, thanks for trying'.",
        },
        {
          speaker: "npc",
          message:
            "Try these — should be better.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|works now|much better)",
            "(perfect|thank you)",
            "(still not working|nothing yet)",
            "(thanks|appreciate it)",
            "(yes)(,)? (sound is back)",
          ],
          hint_tr:
            "Sonuc: 'Works now, thank you!'",
        },
        {
          speaker: "npc",
          message:
            "Great. Enjoy the movie.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.37 — Tight Connection — Off Plane Early
// ============================================================
export const airportLesson_44_37: BundledLesson = {
  id: "airport.44.37",
  skill_id: "airport",
  index: 37,
  title: "Sikisik Aktarma — Erken Cikis",
  description:
    "Aktarman cok yakin. Erken cikmak icin yardim iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.37.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "tight connection",
      tr_translation: "Sikisik (kisa sureli) aktarma",
      example: "I have a tight connection.",
      example_tr: "Sikisik aktarmam var.",
    },
    {
      id: "ex.44.37.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aktarman cok yakin. Once cikmak icin uretilir kabin gorevlisinden rica et.",
      npc_role: "Flight attendant",
      setting: "Plane near landing",
      turns: [
        {
          speaker: "npc",
          message:
            "We'll be landing in about ten minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to (bother|ask))(,)? (i have a tight connection)",
            "(could i|can i) (deplane first|get off first)",
            "(my next flight is in (\\d+|fifty)) minutes",
            "(is there a way to (move forward|change seats))",
            "(i'?m worried about my connecting flight)",
          ],
          hint_tr:
            "Soyle: 'I have a tight connection — could I deplane first?'",
        },
        {
          speaker: "npc",
          message:
            "What time's your next flight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+:\\d+|in (\\d+) minutes)",
            "(less than an hour after landing)",
            "(at (\\w+))(,)? (i have (\\d+) minutes)",
            "(boarding has already started|boarding soon)",
            "(barely an hour|just fifty minutes)",
          ],
          hint_tr:
            "Sure: 'It's at 3:15, less than an hour'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — I'll make an announcement asking other passengers to let you off first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(life saver|amazing)",
            "(appreciate it|really appreciate it)",
            "(thanks for understanding)",
            "(you'?re the best|thanks a million)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much, life saver!'",
        },
        {
          speaker: "npc",
          message:
            "Also — your gate is C42. It's a fifteen-minute walk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |got it )?(c42|fifteen minutes)",
            "(thanks for letting me know|good to know)",
            "(should i run|do i have time)\\??",
            "(thanks again)",
            "(perfect)(,)? (i'?ll move fast)",
          ],
          hint_tr:
            "Hizla: 'Got it, I'll move fast'.",
        },
        {
          speaker: "npc",
          message:
            "Have your boarding pass ready and run if you need to.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.38 — Customs Form (Türk Passport)
// ============================================================
export const airportLesson_44_38: BundledLesson = {
  id: "airport.44.38",
  skill_id: "airport",
  index: 38,
  title: "Gumruk Formu — Turk Pasaport",
  description:
    "Ucakta gumruk formu doldur. Pasaport bilgileri.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.38.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "customs declaration",
      tr_translation: "Gumruk beyanname formu",
      example: "Here's the customs declaration form.",
      example_tr: "Gumruk beyanname formu burada.",
    },
    {
      id: "ex.44.38.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "country of citizenship",
      tr_translation: "Vatandaslik ulkesi",
      example: "Country of citizenship: Turkey.",
      example_tr: "Vatandaslik ulkesi: Turkiye.",
    },
    {
      id: "ex.44.38.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ucakta gumruk formu doldururken kabin gorevlisinden yardim.",
      npc_role: "Flight attendant",
      setting: "Plane, customs form distribution",
      turns: [
        {
          speaker: "npc",
          message:
            "Here are your customs and immigration forms.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(quick question)(,)? (what do i write for (\\w+))",
            "(could you help me|help me fill this out)",
            "(should i write turkey or republic of turkey)",
            "(thanks)(,)? (this is my first time)",
          ],
          hint_tr:
            "Yardim: 'Could you help me fill this out?'",
        },
        {
          speaker: "npc",
          message:
            "Sure — what's the question?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what do i write for|how do i fill in) (the (\\w+) field|country of citizenship)",
            "(i have a turkish passport|i'?m turkish)",
            "(do i write (turkey|republic of (\\w+)))",
            "(where do i list my flight number)\\??",
            "(my address|i don'?t have a us address)(,)? (what do i write)",
          ],
          hint_tr:
            "Sor: 'I have a Turkish passport — do I write Turkey?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, just write 'Turkey'. Your passport number goes in the next box.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(do i list everything i'?m bringing|what about gifts)",
            "(should i declare the (lokum|sweets))",
            "(any food i need to declare)",
            "(thanks)(,)? (this is helpful)",
          ],
          hint_tr:
            "Devam: 'Should I declare the lokum?'",
        },
        {
          speaker: "npc",
          message:
            "Sweets and packaged food usually fine — but check the 'food' box anyway to be safe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|good to know)",
            "(i'?ll check it|i'?ll declare it)",
            "(better to be safe)",
            "(thanks for the tip)",
            "(appreciate the advice)",
          ],
          hint_tr:
            "Kabul: 'Thanks, better to be safe'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Let me know if you have other questions.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.39 — Turbulence Assurance
// ============================================================
export const airportLesson_44_39: BundledLesson = {
  id: "airport.44.39",
  skill_id: "airport",
  index: 39,
  title: "Hafif Turbulans — Sakinlik",
  description:
    "Turbulansta korkanlardansin. Kabin gorevlisinden teselli.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.39.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "turbulence",
      tr_translation: "Turbulans (hava cep)",
      example: "Is the turbulence going to last?",
      example_tr: "Turbulans surecek mi?",
    },
    {
      id: "ex.44.39.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Turbulans var, korkuyorsun. Kabin gorevlisi yanindan geciyor.",
      npc_role: "Flight attendant",
      setting: "Plane during turbulence",
      turns: [
        {
          speaker: "npc",
          message:
            "How're you doing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a bit |very )?nervous about (the turbulence|this)",
            "(is this (normal|going to last))\\??",
            "(i'?m not (great|loving this))",
            "(how long until it'?s over)\\??",
            "(i don'?t love turbulence)",
          ],
          hint_tr:
            "Kabullen: 'A bit nervous — is this normal?'",
        },
        {
          speaker: "npc",
          message:
            "Totally normal — light turbulence over the mountains. Should clear in ten minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|thanks|that'?s reassuring)",
            "(ten minutes|good to know)",
            "(should i be (worried|scared))\\??",
            "(thank you)(,)? (helps to hear that)",
            "(okay)(,)? (i'?ll try to relax)",
          ],
          hint_tr:
            "Sakinlik: 'Okay, that's reassuring'.",
        },
        {
          speaker: "npc",
          message:
            "Not at all. Planes are designed for this. Anything I can get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(some water|water please)",
            "(no thanks|i'?m good)",
            "(maybe a hot tea|some tea)",
            "(could you check on me in a few minutes)",
            "(thanks)(,)? (just talking helps)",
          ],
          hint_tr:
            "Iste: 'Maybe some tea, please'.",
        },
        {
          speaker: "npc",
          message:
            "Coming right up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate it)",
            "(thanks for the kind words)",
            "(thanks)(,)? (much better now)",
            "(thank you for checking in)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "No problem. You'?re in good hands.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.40 — Last Call Drinks
// ============================================================
export const airportLesson_44_40: BundledLesson = {
  id: "airport.44.40",
  skill_id: "airport",
  index: 40,
  title: "Inmeden Once Son Icecek",
  description:
    "Son icecek servisi. Inmeden once kahve, su, atistirmalik.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.40.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "last call",
      tr_translation: "Son siparis (icecek/servis)",
      example: "Is this the last call for drinks?",
      example_tr: "Iceceklerde son siparis mi?",
    },
    {
      id: "ex.44.40.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Inisten 30dk once son servis. Icecek/snack siparisi.",
      npc_role: "Flight attendant",
      setting: "Plane, before descent",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything to drink before we start the descent?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |some )?(coffee|water|tea|juice|soda)( please)?",
            "(could i get|i'?ll have) (a |some )?(coffee|water|tea)",
            "(some water please)",
            "(coffee with milk and sugar please)",
            "(what'?s available|what do you have)",
          ],
          hint_tr:
            "Iste: 'Coffee please, with milk and sugar'.",
        },
        {
          speaker: "npc",
          message:
            "Sure — anything to snack on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any )?(pretzels|cookies|nuts|chips)\\??",
            "(no thanks|just the (coffee|drink))",
            "(i'?ll take some )?(pretzels|cookies)",
            "(what do you have|whatever you have)",
            "(yes|sure)(,)? (something light)",
          ],
          hint_tr:
            "Sec: 'I'll take some pretzels'.",
        },
        {
          speaker: "npc",
          message:
            "Pretzels coming right up. By the way — we land in about thirty minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thanks for the heads up)",
            "(on time)\\??",
            "(thanks)(,)? (good to know)",
            "(only thirty minutes|that flew by)",
            "(thanks)(,)? (i'?ll get my things ready)",
          ],
          hint_tr:
            "Sohbet: 'On time?' veya 'I'll get ready'.",
        },
        {
          speaker: "npc",
          message:
            "Yep, on time. Weather's clear at landing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great)",
            "(thanks)",
            "(amazing|good news)",
            "(thanks for the update)",
            "(thanks)(,)? (looking forward to landing)",
          ],
          hint_tr:
            "Bitir: 'Great, thanks for the update'.",
        },
        {
          speaker: "npc",
          message:
            "My pleasure. Enjoy the rest of the flight.",
        },
      ],
    },
  ],
};

// ============================================================
// SECTION C — POST-FLIGHT (44.41 to 44.50)
// ============================================================

// ============================================================
// Lesson 44.41 — Damaged Bag Report
// ============================================================
export const airportLesson_44_41: BundledLesson = {
  id: "airport.44.41",
  skill_id: "airport",
  index: 41,
  title: "Hasarli Bagaj — Rapor",
  description:
    "Bagajin hasarli gelmis. Bagaj sikayet ofisine git.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.41.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "damaged bag",
      tr_translation: "Hasarli bagaj",
      example: "My bag is damaged.",
      example_tr: "Bagajim hasarli.",
    },
    {
      id: "ex.44.41.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "file a claim",
      tr_translation: "Talep (sikayet) dosyalamak",
      example: "I need to file a claim.",
      example_tr: "Sikayet dosyalamam lazim.",
    },
    {
      id: "ex.44.41.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bagajin tekerlegi kirik gelmis. Bagaj sikayet kontuari.",
      npc_role: "Baggage claim agent",
      setting: "Baggage service office",
      turns: [
        {
          speaker: "npc",
          message:
            "How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (suitcase|bag) is damaged)",
            "(the (wheel|handle|zipper)) (is broken|came off)",
            "(i need to file a claim|report damage)",
            "(my luggage came (damaged|broken))",
            "(this side of the bag is (cracked|dented))",
          ],
          hint_tr:
            "Anlat: 'My bag is damaged — the wheel is broken'.",
        },
        {
          speaker: "npc",
          message:
            "Sorry to hear that. Let me see — yes, the wheel's gone. We can repair or compensate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s the (process|next step))",
            "(how long does (repair|compensation) take)",
            "(i need it for my next trip|i fly in a week)",
            "(could i get compensation|how much for compensation)",
            "(can i get a new bag)",
          ],
          hint_tr:
            "Bilgi al: 'What's the process?'",
        },
        {
          speaker: "npc",
          message:
            "Repair takes about a week. We'd send it back to your address.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|okay|sounds good)",
            "(i'?m only here for a few days|i'?m traveling)",
            "(what'?s the compensation option)\\??",
            "(could you send it (to my hotel|to istanbul))",
            "(actually )?(compensation might work better)",
          ],
          hint_tr:
            "Sec: 'Compensation might work better — I'm only here a few days'.",
        },
        {
          speaker: "npc",
          message:
            "Compensation is about a hundred dollars for that kind of bag. Take a few minutes to think about it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll take the compensation|let'?s do compensation)",
            "(i'?ll go with repair|repair please)",
            "(could i (think|decide) tomorrow)",
            "(thanks for the options)",
            "(let me check with my family|let me ask my husband)",
          ],
          hint_tr:
            "Karar: 'I'll take the compensation'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Let me get the paperwork started.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.42 — Customs Cigarette/Lokum Limit
// ============================================================
export const airportLesson_44_42: BundledLesson = {
  id: "airport.44.42",
  skill_id: "airport",
  index: 42,
  title: "Gumruk — Sigara/Lokum Limiti",
  description:
    "Gumruk memuru sigara/duty-free siniri soruyor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.42.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "duty-free limit",
      tr_translation: "Gumruksuz alisveris siniri",
      example: "What's the duty-free limit?",
      example_tr: "Gumruksuz alisveris siniri ne?",
    },
    {
      id: "ex.44.42.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Gumruk memuru aktarmasiz iceriyi sorguluyor.",
      npc_role: "Customs officer",
      setting: "Customs checkpoint",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything to declare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing to declare|just personal items)",
            "(some (sweets|lokum|cigarettes))",
            "(i have (\\d+) cartons of cigarettes)",
            "(only (lokum|gifts) for family)",
            "(some duty-free i bought)",
          ],
          hint_tr:
            "Sade: 'No, nothing to declare' veya dürüst: 'Just some lokum and gifts'.",
        },
        {
          speaker: "npc",
          message:
            "How many cigarettes? There's a two-hundred limit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(only (\\d+) cigarettes|one carton)",
            "(under the limit|less than 200)",
            "(no cigarettes|i don'?t smoke)",
            "(i have two cartons)(,)? (is that too many)\\??",
            "(just a few packs)",
          ],
          hint_tr:
            "Belirt: 'Just one carton — under the limit'.",
        },
        {
          speaker: "npc",
          message:
            "Good. Any food or sweets?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (some lokum|turkish delight)",
            "(only (sweets|cookies|nuts)) for gifts",
            "(some lokum for family|gifts for friends)",
            "(no food)",
            "(packaged sweets only)",
          ],
          hint_tr:
            "Anlat: 'Some lokum — gifts for family'.",
        },
        {
          speaker: "npc",
          message:
            "Packaged sweets are fine. Open the suitcase, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure)",
            "(here you go)",
            "(no problem)",
            "(let me open it)",
            "(here it is)",
          ],
          hint_tr:
            "Kabul: 'Of course, here you go'.",
        },
        {
          speaker: "npc",
          message:
            "All good. Welcome.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.43 — Currency Exchange (Poor Rate)
// ============================================================
export const airportLesson_44_43: BundledLesson = {
  id: "airport.44.43",
  skill_id: "airport",
  index: 43,
  title: "Doviz Bozdurma — Kotu Kur",
  description:
    "Havalimaninda doviz bozdurma. Kur kotu, daha iyi yer var mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.43.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "exchange rate",
      tr_translation: "Doviz kuru",
      example: "What's the exchange rate?",
      example_tr: "Doviz kuru ne?",
    },
    {
      id: "ex.44.43.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Havalimani doviz bozdurma kontuari. Kur kotu — pazarlik et.",
      npc_role: "Currency exchange agent",
      setting: "Airport exchange counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, what are you exchanging?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(euros to dollars|turkish lira to euros)",
            "(i need (some) (euros|dollars))",
            "(how much can i get for (\\d+|fifty))",
            "(what'?s the exchange rate today)",
            "(\\d+ dollars to euros please)",
          ],
          hint_tr:
            "Iste: 'I need some euros — what's the rate?'",
        },
        {
          speaker: "npc",
          message:
            "Today's rate is 1.05 dollars per euro. Any commission applies.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a bit )?(steep|high|expensive)",
            "(is there commission|what'?s the fee)",
            "(can i get a better rate)",
            "(what'?s the total i'?d get for (\\d+))",
            "(is there a better place nearby)",
          ],
          hint_tr:
            "Pazarlik: 'Is there a better place nearby?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, you might get a better rate at an ATM or in town.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate the honesty)",
            "(i'?ll wait for an ATM|use my card)",
            "(thanks for letting me know)",
            "(could you do just (\\d+))( for now)",
            "(i'?ll just take a small amount)",
          ],
          hint_tr:
            "Kabul: 'Thanks — I'll wait for an ATM'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Just keep your passport ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it)",
            "(thanks for the tip)",
            "(appreciate it)",
            "(thanks again)",
            "(thank you for the help)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for the tip!'",
        },
        {
          speaker: "npc",
          message:
            "Welcome to the city.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.44 — Hotel Shuttle Search
// ============================================================
export const airportLesson_44_44: BundledLesson = {
  id: "airport.44.44",
  skill_id: "airport",
  index: 44,
  title: "Otel Shuttle Bul",
  description:
    "Otel ucretsiz shuttle gondermisti. Nerden binilir?",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.44.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "hotel shuttle",
      tr_translation: "Otel servis araci (ucretsiz/transfer)",
      example: "Where do I catch the hotel shuttle?",
      example_tr: "Otel shuttle'i nerden binerim?",
    },
    {
      id: "ex.44.44.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Otel free shuttle gonderiyor. Nereden binilir?",
      npc_role: "Information desk attendant",
      setting: "Airport arrivals",
      turns: [
        {
          speaker: "npc",
          message:
            "How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(where do i (catch|find)) (the )?hotel shuttle",
            "(i need to find|where'?s) the shuttle (for|to) (\\w+) hotel",
            "(where do shuttles pick up)",
            "(which (door|stop)) is hotel shuttle pickup",
            "(how do i get to my hotel shuttle)",
          ],
          hint_tr:
            "Sor: 'Where do I find the hotel shuttle?'",
        },
        {
          speaker: "npc",
          message:
            "Which hotel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |the )?(marriott|hilton|holiday inn|sheraton|hyatt)",
            "(the (\\w+) hotel)",
            "(it'?s called (\\w+))",
            "(i'?m at the (\\w+))",
            "(an airport hotel|airport marriott)",
          ],
          hint_tr:
            "Soyle: 'The Marriott' veya 'I'm at the Hilton'.",
        },
        {
          speaker: "npc",
          message:
            "Shuttles pick up at Door 4, downstairs. They run every fifteen minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thanks|got it)",
            "(door 4|fifteen minutes)(,)? (thanks)",
            "(could you point me|which way is door 4)\\??",
            "(thanks for the directions)",
            "(thank you so much)",
          ],
          hint_tr:
            "Yon: 'Got it — which way is Door 4?'",
        },
        {
          speaker: "npc",
          message:
            "Down the escalator, then left. Signs all the way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it)",
            "(perfect)",
            "(thank you|appreciate it)",
            "(thanks for the help)",
            "(thanks)(,)? (heading there now)",
          ],
          hint_tr:
            "Tesekkur: 'Got it, heading there now'.",
        },
        {
          speaker: "npc",
          message:
            "Have a good stay.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.45 — Public Transport From Airport
// ============================================================
export const airportLesson_44_45: BundledLesson = {
  id: "airport.44.45",
  skill_id: "airport",
  index: 45,
  title: "Sehir Merkezi — Metro/Tren",
  description:
    "Havalimanindan metro/tren ile sehre git. Bilet/yon.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.45.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "city center",
      tr_translation: "Sehir merkezi",
      example: "How do I get to the city center?",
      example_tr: "Sehir merkezine nasil giderim?",
    },
    {
      id: "ex.44.45.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bilet makinesinde takildin. Bir personelden yardim iste.",
      npc_role: "Transit staff",
      setting: "Airport metro station",
      turns: [
        {
          speaker: "npc",
          message:
            "Need help with the machine?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i need a ticket to (\\w+|city center))",
            "(how much is the metro|train) to (the city|downtown)",
            "(which line goes to (\\w+))",
            "(do i need a (day pass|single ticket))",
            "(can i pay with (card|cash))",
          ],
          hint_tr:
            "Soyle: 'I need a ticket to the city center'.",
        },
        {
          speaker: "npc",
          message:
            "Single ticket is twelve. Day pass is twenty — better if you're moving around.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll do the day pass|day pass please)",
            "(just a single|single ticket please)",
            "(do you take card)",
            "(how do i pay)",
            "(i'?ll get the day pass)(,)? (i'?m exploring)",
          ],
          hint_tr:
            "Sec: 'Day pass please — I'm exploring'.",
        },
        {
          speaker: "npc",
          message:
            "Card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|here'?s my card)",
            "(cash|i have cash)",
            "(tap to pay|contactless)",
            "(do you take (mobile|apple pay))",
            "(card please)",
          ],
          hint_tr:
            "Ode: 'Card please' veya 'Cash'.",
        },
        {
          speaker: "npc",
          message:
            "Done. Platform 2 for the express. Train comes every ten minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|perfect|got it)",
            "(platform 2|ten minutes)(,)? (thanks)",
            "(which direction|which way is platform 2)\\??",
            "(thanks for the help)",
            "(thank you)",
          ],
          hint_tr:
            "Sonraki: 'Got it — which way is Platform 2?'",
        },
        {
          speaker: "npc",
          message:
            "Down the stairs, follow blue line. Welcome to the city.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.46 — "Lokum, Hediye" Gift Declaration
// ============================================================
export const airportLesson_44_46: BundledLesson = {
  id: "airport.44.46",
  skill_id: "airport",
  index: 46,
  title: "Lokum + Hediyeler — Aciklama",
  description:
    "Gumruk: 'this is just lokum, for friends' — hediye beyani.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.46.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "gift, not for sale",
      tr_translation: "Hediye, satilik degil",
      example: "These are gifts, not for sale.",
      example_tr: "Bunlar hediye, satilik degil.",
    },
    {
      id: "ex.44.46.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cantanda 4 kutu lokum, gumruk memuru soruyor.",
      npc_role: "Customs officer",
      setting: "Customs checkpoint",
      turns: [
        {
          speaker: "npc",
          message:
            "Open the suitcase, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure)",
            "(here you go)",
            "(no problem)(,)? (let me open it)",
            "(of course)(,)? (only personal items)",
            "(yes)",
          ],
          hint_tr:
            "Kabul: 'Of course, here you go'.",
        },
        {
          speaker: "npc",
          message:
            "What are these boxes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this is just |these are )?(lokum|turkish delight)",
            "(it'?s |they'?re )?(lokum|turkish sweets) (for friends|gifts)",
            "(i brought (them|it)) (for friends|as gifts|for my host family)",
            "(those are |these are )?(turkish desserts|traditional sweets)",
            "(gifts|presents)(,)? (not for sale)",
          ],
          hint_tr:
            "Aciklik: 'This is just lokum — gifts for friends'.",
        },
        {
          speaker: "npc",
          message:
            "How many boxes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(four|five|three|six) boxes",
            "(just |only )?(\\d+|four)",
            "(\\d+) (in total|total)",
            "(small (gift|portion) boxes)",
            "(\\d+)(,)? (each (250g|under a pound))",
          ],
          hint_tr:
            "Sayi: 'Four boxes — gifts for friends'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — packaged sweets are fine. Anything else to declare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing else)",
            "(just |only )?(personal items)",
            "(some (turkish coffee|sweets) too)",
            "(no other food)",
            "(also some (turkish coffee|tea))(,)? (for the same friends)",
          ],
          hint_tr:
            "Ekle: 'Some Turkish coffee too — for the same friends'.",
        },
        {
          speaker: "npc",
          message:
            "Fine. Welcome.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.47 — Pickup Person No-Show
// ============================================================
export const airportLesson_44_47: BundledLesson = {
  id: "airport.44.47",
  skill_id: "airport",
  index: 47,
  title: "Karsilayici Gelmedi — Eve Telefon",
  description:
    "Seni alamasi gereken kisi gelmedi. Aileni ariyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.47.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "running late",
      tr_translation: "Gec kaldi (yola cikti ama)",
      example: "He's running late.",
      example_tr: "Gec kaldi.",
    },
    {
      id: "ex.44.47.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Geldigin sehirde seni almak isteyen amcani ariyorsun, gelmedi.",
      npc_role: "Family member on phone (uncle)",
      setting: "Airport arrivals, phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hello, you've landed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (i'?m at arrivals)",
            "(i landed (\\d+) minutes ago|long time)",
            "(where are you|are you here)",
            "(i'?m waiting (at|by) (\\w+))",
            "(amca|uncle)(,)? (i'?ve been waiting)",
          ],
          hint_tr:
            "Anlat: 'I'm at arrivals, waiting'.",
        },
        {
          speaker: "npc",
          message:
            "I'm so sorry — stuck in traffic. Forty minutes more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(forty minutes|okay)",
            "(no worries|don'?t worry|all good)",
            "(should i take a (taxi|uber|train))",
            "(i'?ll grab (something to eat|a coffee))",
            "(i'?ll wait|i'?m fine waiting)",
          ],
          hint_tr:
            "Cevap: 'No worries — should I take a taxi?'",
        },
        {
          speaker: "npc",
          message:
            "Don't take a taxi — I'll come. Just go to Coffee Bean and I'll find you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it|sounds good)",
            "(coffee bean)(,)? (i'?ll wait there)",
            "(perfect|i'?ll head there)",
            "(thanks)(,)? (i'?ll be there)",
            "(no rush|take your time)",
          ],
          hint_tr:
            "Kabul: 'Got it — I'll wait at Coffee Bean'.",
        },
        {
          speaker: "npc",
          message:
            "Drive safe, hosgeldin sweetheart.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|see you soon)",
            "(yes|no rush)(,)? (drive safe)",
            "(thanks)(,)? (see you in a bit)",
            "(love you|amca)(,)? (drive safe)",
            "(thanks)(,)? (i'?ll be at coffee bean)",
          ],
          hint_tr:
            "Bitir: 'Drive safe, amca!' Türk: 'amca' = uncle, sicak hitap.",
        },
        {
          speaker: "npc",
          message:
            "On my way. Bye.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.48 — Rental Car at Airport
// ============================================================
export const airportLesson_44_48: BundledLesson = {
  id: "airport.44.48",
  skill_id: "airport",
  index: 48,
  title: "Havalimaninda Arac Kiralama",
  description:
    "Rezervasyonun var. Arabani teslim al — sigorta soruyorlar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.48.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "rental reservation",
      tr_translation: "Arac kiralama rezervasyonu",
      example: "I have a rental reservation.",
      example_tr: "Bir arac kiralama rezervasyonum var.",
    },
    {
      id: "ex.44.48.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Rent-a-car kontuari. Sigorta hakkinda soruyorlar.",
      npc_role: "Rental agent",
      setting: "Airport rental car desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Last name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yilmaz|demir|kaya|ozturk|ozkan|\\w+)",
            "(it'?s (\\w+))",
            "(my reservation is under (\\w+))",
            "(\\w+)(,)? (turkish passport)",
            "(reservation under (\\w+))",
          ],
          hint_tr:
            "Soyad soyle: 'It's Yilmaz' (Türk soyadi).",
        },
        {
          speaker: "npc",
          message:
            "Found it. Mid-size sedan, three days. Need full insurance?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s the (cost|price)) (for full)",
            "(does my (credit card|insurance) cover this)",
            "(let me think|what'?s included)",
            "(i'?ll take it|full insurance please)",
            "(any (basic|cheaper) option)",
          ],
          hint_tr:
            "Sigorta: 'What does my credit card cover?'",
        },
        {
          speaker: "npc",
          message:
            "Basic is included. Full coverage adds twenty a day, covers everything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll take full|let'?s do full)",
            "(i'?ll stick with basic|basic is fine)",
            "(my (credit card|home insurance) covers it)",
            "(let me check my phone|let me check)",
            "(yes|sure)(,)? (full coverage)",
          ],
          hint_tr:
            "Sec: 'I'll take full' veya 'Basic is fine'.",
        },
        {
          speaker: "npc",
          message:
            "Need a GPS or just use your phone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(phone is fine|i'?ll use my phone)",
            "(gps please|yes a gps)",
            "(actually )?(i'?ll take one)(,)? (no roaming)",
            "(google maps will work)",
            "(no thanks|phone'?s enough)",
          ],
          hint_tr:
            "Sec: 'Phone is fine' veya 'GPS please — no roaming'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Sign here. Car is at parking spot 23.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.49 — Airport Food (Türk Damak)
// ============================================================
export const airportLesson_44_49: BundledLesson = {
  id: "airport.44.49",
  skill_id: "airport",
  index: 49,
  title: "Havalimani Yemegi — Turk Damaga Uygun",
  description:
    "Aktarma uzun. Turk damagina uygun yemek bul.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.49.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "something familiar",
      tr_translation: "Bildigim/tanidigim bir sey",
      example: "Anywhere serving something familiar?",
      example_tr: "Bildigim bir sey servis eden yer var mi?",
    },
    {
      id: "ex.44.49.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yabanci havalimaninda 4 saat aktarma. Turk yemegi/familiar yemek soruyorsun.",
      npc_role: "Airport info desk attendant",
      setting: "Foreign airport, layover",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything I can help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any |is there a )(turkish|mediterranean|middle eastern) (restaurant|food)",
            "(any place with|where can i find) (kebab|hummus|familiar food)",
            "(i'?m looking for something familiar)",
            "(anywhere with |is there a) halal option",
            "(any (lighter|simple) food|not fast food)",
          ],
          hint_tr:
            "Sor: 'Any Turkish or Mediterranean food?'",
        },
        {
          speaker: "npc",
          message:
            "There's a Mediterranean place in Terminal C — has hummus, kebabs, salads.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|amazing|sounds great)",
            "(how do i get there|directions)",
            "(thanks|thank you so much)",
            "(any (turkish coffee|tea) places)",
            "(thanks for the recommendation)",
          ],
          hint_tr:
            "Tepki: 'Amazing — how do I get there?'",
        },
        {
          speaker: "npc",
          message:
            "Take the shuttle to Terminal C. It's open till 11pm.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(do they serve (turkish coffee|tea))\\??",
            "(thanks for the heads up|good timing)",
            "(perfect|will head there now)",
            "(thanks)(,)? (much appreciated)",
          ],
          hint_tr:
            "Detay: 'Do they serve Turkish coffee?'",
        },
        {
          speaker: "npc",
          message:
            "I think they do — and baklava, too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|amazing|i'?m in)",
            "(perfect|baklava is my favorite)",
            "(thank you so much)",
            "(can'?t wait)",
            "(thanks)(,)? (this saved my layover)",
          ],
          hint_tr:
            "Sevin: 'Amazing — baklava is my favorite!'",
        },
        {
          speaker: "npc",
          message:
            "Enjoy. Have a smooth onward flight.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.50 — Lost in Massive Airport
// ============================================================
export const airportLesson_44_50: BundledLesson = {
  id: "airport.44.50",
  skill_id: "airport",
  index: 50,
  title: "Devasa Havalimaninda Kaybolma",
  description:
    "Atlanta/Dubai gibi devasa havalimaninda kayboldun. Yardim iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.50.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "totally lost",
      tr_translation: "Tamamen kayboldum",
      example: "I'm totally lost.",
      example_tr: "Tamamen kayboldum.",
    },
    {
      id: "ex.44.50.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "people mover",
      tr_translation: "Otomatik tasima sistemi (havalimani ici)",
      example: "Take the people mover to Terminal F.",
      example_tr: "Terminal F'ye people mover ile git.",
    },
    {
      id: "ex.44.50.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dunyanin en buyuk havalimanlarindan birinde kayboldun. Yardim et.",
      npc_role: "Airport staff",
      setting: "Massive airport, lost passenger",
      turns: [
        {
          speaker: "npc",
          message:
            "Need help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i'?m totally lost)",
            "(i can'?t find|where is) (terminal (\\w+)|gate (\\w+))",
            "(my flight is at (\\w+)) (and i don'?t know how to get there)",
            "(this airport is huge|i'?m overwhelmed)",
            "(could you point me to (gate (\\w+)|the train))",
          ],
          hint_tr:
            "Yardim iste: 'I'm totally lost — where's Gate B22?'",
        },
        {
          speaker: "npc",
          message:
            "Where are you trying to get to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(terminal (\\w+)|gate (\\w+))",
            "(gate (\\w+\\d+))",
            "(i need to get to|my flight is at) (\\w+)",
            "(my boarding pass says|here'?s my boarding pass)",
            "(\\w+) (gate (\\w+))",
          ],
          hint_tr:
            "Belirt: 'Terminal F, Gate 22'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — take the people mover from this gate. Three stops to Terminal F.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(how long will it take|will i make it)",
            "(where do i catch the people mover)",
            "(thanks)(,)? (heading there now)",
            "(any signs|easy to find)",
          ],
          hint_tr:
            "Sure: 'How long will it take?'",
        },
        {
          speaker: "npc",
          message:
            "About fifteen minutes total. Follow the signs to the train.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you so much|life saver)",
            "(amazing|thanks for the help)",
            "(thanks)(,)? (heading there now)",
            "(thanks)(,)? (really appreciate it)",
            "(perfect|got it)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you so much, life saver!'",
        },
        {
          speaker: "npc",
          message:
            "Safe travels — and walk fast.",
        },
      ],
    },
  ],
};

// ============================================================
// EXPORT ARRAY
// ============================================================
export const airportDeepLessons: BundledLesson[] = [
  // Pre-flight
  airportLesson_44_21,
  airportLesson_44_22,
  airportLesson_44_23,
  airportLesson_44_24,
  airportLesson_44_25,
  airportLesson_44_26,
  airportLesson_44_27,
  airportLesson_44_28,
  airportLesson_44_29,
  airportLesson_44_30,
  // In-flight
  airportLesson_44_31,
  airportLesson_44_32,
  airportLesson_44_33,
  airportLesson_44_34,
  airportLesson_44_35,
  airportLesson_44_36,
  airportLesson_44_37,
  airportLesson_44_38,
  airportLesson_44_39,
  airportLesson_44_40,
  // Post-flight
  airportLesson_44_41,
  airportLesson_44_42,
  airportLesson_44_43,
  airportLesson_44_44,
  airportLesson_44_45,
  airportLesson_44_46,
  airportLesson_44_47,
  airportLesson_44_48,
  airportLesson_44_49,
  airportLesson_44_50,
];
