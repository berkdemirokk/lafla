// Bar deep lessons — siparis derinligi + sosyal derinlik.
// Skills: order.bar (15 new, IDs 7.14-7.28) + bar.approach (15 new, IDs 24.15-24.29)
// Türk audience: Erasmus contexts, Türk staff abroad, lokum gifts.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// SECTION A — order.bar 7.14 to 7.28 (drink ordering depth)
// ============================================================

// ============================================================
// Lesson 7.14 — Wine Pairing with Sommelier
// ============================================================
export const barLesson_7_14: BundledLesson = {
  id: "order.bar.7.14",
  skill_id: "order.bar",
  index: 14,
  title: "Wine Pairing with Sommelier",
  description:
    "Sommelier ile sarap eslestirmesi — yemekle uyumlu sarap secimi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.7.14.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "pair with",
      tr_translation: "ile eslestirmek (yemek-icecek)",
      example: "What wine pairs well with the steak?",
      example_tr: "Steak ile hangi sarap iyi gider?",
    },
    {
      id: "ex.7.14.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "full-bodied",
      tr_translation: "Gucu yuksek, agir govdeli (sarap icin)",
      example: "I prefer a full-bodied red.",
      example_tr: "Govdeli kirmizi tercih ederim.",
    },
    {
      id: "ex.7.14.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sik bir restoranda sommelier sana sarap onerisi yapacak.",
      npc_role: "Sommelier",
      setting: "Upscale restaurant, dinner",
      turns: [
        {
          speaker: "npc",
          message:
            "Good evening. I see you've ordered the lamb. Shall I suggest a wine?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|please|sure)(,)?( that would be (great|helpful))?",
            "(yes|yeah)(,)? (what )?(do you |would you )?(recommend|suggest)",
            "(i'?d|i would) (love|like) (a |your )?(recommendation|suggestion)",
            "(please|go ahead)(,)? (i'?m )?(not sure|new to wine)",
            "(yes|sure)(,)? (something|a wine) (that pairs|to go) with (the )?lamb",
          ],
          hint_tr:
            "Kabul et: 'Yes, please' veya 'I'd love a recommendation'. Türk: 'sommelier' (Fransizca) = sarap uzmani.",
        },
        {
          speaker: "npc",
          message:
            "Lamb pairs beautifully with a full-bodied red. Do you prefer something fruity or earthy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fruity|earthy)(,)?( please)?",
            "(i (prefer|like)|let'?s go with) (fruity|earthy|something fruity|something earthy)",
            "(maybe )?(more )?(fruity|earthy)",
            "(what'?s the difference|i'?m not sure)(,)?( what do you suggest)?",
            "(something )?(in between|balanced)",
          ],
          hint_tr:
            "Tercih: 'I prefer fruity' veya 'Earthy, please'. Bilmiyorsan: 'What's the difference?'",
        },
        {
          speaker: "npc",
          message:
            "I'd suggest our Malbec — it's bold, fruity, with hints of plum. Around forty a glass.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|great|perfect))",
            "(i'?ll )?(have|take|try|go with) (the |a |one )?(malbec|glass)",
            "(let'?s do it|perfect|that works)",
            "(is there|do you have) (anything|something) (cheaper|less expensive|more affordable)",
            "(any |a )?(cheaper|less expensive) option",
          ],
          hint_tr:
            "Kabul: 'I'll have the Malbec'. Daha ucuz iste: 'Anything more affordable?' Türk: kibarca, dogrudan 'cheap' deme.",
        },
        {
          speaker: "npc",
          message:
            "Of course — we have a lovely house red at twenty a glass, just as nice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll )?(have|take|go with) (the )?house (red|wine)",
            "(perfect|sounds great|let'?s do that)",
            "(the house red)(,)? (please|thanks)",
            "(yeah|yes)(,)? (that one|that works)",
            "(thank you|appreciate it)(,)?( that sounds better)?",
          ],
          hint_tr:
            "Karar: 'I'll go with the house red, please'. 'House wine' = restoranin secimli/uygun fiyatli sarabi.",
        },
        {
          speaker: "npc",
          message: "Excellent choice. I'll bring it right out.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.15 — Whiskey Neat vs Rocks
// ============================================================
export const barLesson_7_15: BundledLesson = {
  id: "order.bar.7.15",
  skill_id: "order.bar",
  index: 15,
  title: "Whiskey Neat vs Rocks",
  description:
    "Viski siparisinde sek/buzlu farki, single/double, brand secimi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.15.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "neat",
      tr_translation: "Sek, buzsuz, sade",
      example: "A whiskey, neat.",
      example_tr: "Bir viski, sek.",
    },
    {
      id: "ex.7.15.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Klasik bir bara viski icmek icin gittin. Bartender soruyor.",
      npc_role: "Bartender",
      setting: "Classic whiskey bar",
      turns: [
        {
          speaker: "npc",
          message: "Evening. What can I pour you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(whiskey|whisky|bourbon|scotch)( please)?",
            "(i'?ll have|i'?d like|could i get) (a |one )?(whiskey|bourbon|scotch)",
            "(what )?(scotch|bourbon|whiskey)s? (do you have|are on offer)",
            "(can i see|could i get) (the )?(whiskey )?menu",
            "(let me try|got any) (a )?(good )?(scotch|bourbon)",
          ],
          hint_tr:
            "Viski iste: 'I'll have a whiskey' veya menu sor: 'What scotches do you have?'",
        },
        {
          speaker: "npc",
          message:
            "Sure — neat, on the rocks, or with a splash of water?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(neat|on the rocks|with a splash)( please)?",
            "(i'?ll )?(have|take|do) (it )?(neat|on the rocks|with water)",
            "(neat|on the rocks)(,)? (please|thanks)",
            "(just )?(a splash|a little water)",
            "(what do you recommend|what'?s best)( for this)?",
          ],
          hint_tr:
            "Tercih: 'Neat, please' (sek) veya 'On the rocks' (buzlu). 'Splash' = az miktarda su.",
        },
        {
          speaker: "npc",
          message: "Got it. Single or double?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(single|double)( please)?",
            "(let'?s make it|make it) (a )?(double|single)",
            "(just )?(a single|the single)",
            "(a )?(double|single)(,)? (please|thanks)",
            "(i'?ll )?(go with|do|have) (a )?(double|single)",
          ],
          hint_tr:
            "Olcu: 'Single' (tek olcu ~25ml/30ml) veya 'Double' (cift). Turkiye'de 'tek/duble' diyoruz.",
        },
        {
          speaker: "npc",
          message: "Any preference on brand?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |any |dealer'?s) (choice|preference)",
            "(what do you|what would you) recommend",
            "(jameson|jack daniel'?s|johnnie walker|macallan|glenlivet|lagavulin)",
            "(surprise me|your call|whatever you (like|recommend))",
            "(something )?(smooth|smoky|peaty|mild)",
            "(house pour|cheapest|well whiskey)( is fine)?",
          ],
          hint_tr:
            "Marka: 'Surprise me' veya 'Something smoky'. Turkiye'den bildiklerin: Jameson, JD. 'House pour' = bar'in secimli markasi.",
        },
        {
          speaker: "npc",
          message: "Smoky scotch coming up. Coming right out.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.16 — Mocktails / Dry January
// ============================================================
export const barLesson_7_16: BundledLesson = {
  id: "order.bar.7.16",
  skill_id: "order.bar",
  index: 16,
  title: "Mocktails — Alkolsuz Sec",
  description:
    "Alkolsuz icecek/mocktail siparisi, dry January, sosyal baskidan kacinma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.16.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "mocktail",
      tr_translation: "Alkolsuz kokteyl",
      example: "Do you have any mocktails on the menu?",
      example_tr: "Menude mocktail var mi?",
    },
    {
      id: "ex.7.16.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "non-alcoholic",
      tr_translation: "Alkolsuz",
      example: "I'm looking for non-alcoholic options tonight.",
      example_tr: "Bu aksam alkolsuz secenek ariyorum.",
    },
    {
      id: "ex.7.16.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bu aksam icmiyorsun. Bartender'a alkolsuz secenek soruyorsun.",
      npc_role: "Bartender",
      setting: "Cocktail bar, evening",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what'll you have tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do you have|any|got any) (mocktails|non-alcoholic) (options|drinks)?",
            "(i'?m )?(not drinking|going alcohol-free|doing dry january) tonight",
            "(could i get|what'?s) (a |some |any )?(non-alcoholic|alcohol-free|mocktail)",
            "(something )?(without alcohol|alcohol free)( please)?",
            "(what )?(non-alcoholic|mocktail) (options|drinks) do you have",
          ],
          hint_tr:
            "Alkolsuz iste: 'Do you have mocktails?' veya 'I'm not drinking tonight'. Utanma — yaygin.",
        },
        {
          speaker: "npc",
          message:
            "Totally, no problem. We've got a few — virgin mojito, a non-alc gin and tonic, or a house spritzer. Which sounds good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(virgin mojito|non-alc g and t|gin and tonic|house spritzer)",
            "(i'?ll )?(have|take|try|go with) (the |a |one )?(virgin mojito|spritzer|gin and tonic)",
            "(what'?s|how is) (the |a )?(spritzer|virgin mojito|non-alc) like",
            "(what do you recommend|surprise me|your call)",
            "(let me try|sounds good) (the |a )?(mojito|spritzer)",
          ],
          hint_tr:
            "Secim: 'I'll try the virgin mojito'. 'Virgin' = alkolsuz versiyon. Burada utanc yok.",
        },
        {
          speaker: "npc",
          message:
            "Good call. Any flavor preference? We can do extra lime, mint, or a fruit syrup.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(extra |more )?(lime|mint|fruit syrup)( please)?",
            "(i'?d like|let'?s do) (extra |more )?(lime|mint)",
            "(can i get|with) (extra )?(lime|mint|both)",
            "(no preference|surprise me|your choice|either is fine)",
            "(whatever you )?(recommend|like)",
          ],
          hint_tr:
            "Tat: 'Extra mint, please' veya 'Surprise me'. Tat secimi mocktail icin onemli.",
        },
        {
          speaker: "npc",
          message:
            "Got it. By the way — same price as cocktails, just so you know.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (that'?s )?fine",
            "(no problem|that'?s okay|sounds good)",
            "(thanks for letting me know|good to know)",
            "(i figured|i expected as much)",
            "(no worries)(,)? (i'?m good|i'?ll take it)",
          ],
          hint_tr:
            "Fiyat hatirlatmasi: 'No problem, thanks for letting me know'. Mocktail genelde kokteyl fiyatinda.",
        },
        {
          speaker: "npc",
          message: "Coming right up. Garnish on the way.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.17 — Happy Hour Timing
// ============================================================
export const barLesson_7_17: BundledLesson = {
  id: "order.bar.7.17",
  skill_id: "order.bar",
  index: 17,
  title: "Happy Hour — Saatler",
  description:
    "Happy hour kac saate kadar surer? Indirim sorgulamasi.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.7.17.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "happy hour",
      tr_translation: "Indirimli saat (genelde 5-7pm)",
      example: "Is happy hour still going?",
      example_tr: "Happy hour hala devam ediyor mu?",
    },
    {
      id: "ex.7.17.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bara giriyorsun, happy hour saatleri soruyorsun.",
      npc_role: "Bartender",
      setting: "Bar, early evening",
      turns: [
        {
          speaker: "npc",
          message: "Hey, welcome in. What can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is |is the )?happy hour (still |on)( going| running)?",
            "(what )?(time|are the hours) (does|is) happy hour (end|over|until)",
            "(am i in time for|did i miss) happy hour",
            "(when does|until when is) happy hour (running|on)",
            "(any |is there a )?happy hour (deal|going on)( right now)?",
          ],
          hint_tr:
            "Happy hour sor: 'Is happy hour still on?' veya 'When does happy hour end?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, you're good — runs until seven. Beer and wine are half off.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|nice|amazing)",
            "(what )?(beers|wines) (do you have|are on)",
            "(i'?ll have|i'?d like|could i get) (a |one )?(beer|wine|draft)",
            "(any |what'?s) (on draft|on tap)",
            "(let me see|could i see) (the )?(menu|drinks menu)",
          ],
          hint_tr:
            "Devam: 'Perfect, what beers are on draft?'",
        },
        {
          speaker: "npc",
          message:
            "Six beers on tap. IPAs, lagers, a wheat. Anything sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll )?(have|take|try|go with) (a |one |the )?(ipa|lager|wheat)",
            "(let me try|let'?s do) (the |a )?(ipa|lager|wheat)",
            "(a |one )?(ipa|lager|wheat)( please)?",
            "(what'?s your )?(favorite|recommendation)",
            "(surprise me|your pick|dealer'?s choice)",
          ],
          hint_tr:
            "Bira sec: 'I'll go with the IPA' veya 'Surprise me'.",
        },
        {
          speaker: "npc",
          message: "Pint or half?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(pint|half-pint)( please)?",
            "(let'?s do|make it) (a |one )?(pint|half)",
            "(i'?ll )?(take|have|do) (a )?(pint|half)",
            "(a )?full pint( please)?",
            "(pint sounds (good|great))",
          ],
          hint_tr:
            "Boyut: 'Pint, please' (~500ml). Yarisi: 'Half'.",
        },
        {
          speaker: "npc",
          message:
            "Pint of the IPA, half-off — three fifty. Tab or pay now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(start a tab|open a tab)( please)?",
            "(pay now|pay as i go|cash)",
            "(tab )?(please|works for me|sounds good)",
            "(here'?s my card|here you go)",
            "(actually )?(just pay |i'?ll pay )?(now|this round)",
          ],
          hint_tr:
            "Hesap: 'Start a tab' veya 'Pay now'. Tek icki ise 'just pay now' iyi.",
        },
        {
          speaker: "npc",
          message: "Got it — coming right up.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.18 — What's Good Here?
// ============================================================
export const barLesson_7_18: BundledLesson = {
  id: "order.bar.7.18",
  skill_id: "order.bar",
  index: 18,
  title: "Bartender Onerisi Iste",
  description:
    "'What's good here?' — bartender'dan mekana ozgu oneri.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.18.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "what's good here",
      tr_translation: "Burda ne iyi/begenilen?",
      example: "First time here — what's good?",
      example_tr: "Ilk geldim — burda ne iyi?",
    },
    {
      id: "ex.7.18.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yeni mekana geldin. Bartender'a mekanin ozelligi soruyorsun.",
      npc_role: "Bartender",
      setting: "New bar, exploring",
      turns: [
        {
          speaker: "npc",
          message: "Welcome — what can I make for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first time here|i'?m new here)(,)?( what'?s good)?",
            "(what'?s )?(good|popular|the specialty)( here)?",
            "(what )?(do you )?(recommend|suggest)",
            "(any )?(house special|signature drink|specialty)",
            "(what'?s your )?(most popular|best seller|signature)",
          ],
          hint_tr:
            "Oneri iste: 'What's good here?' veya 'What's your signature?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, we're known for our negronis. We also do a great smoky old fashioned.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll |let me )?(have|try|go with) (the |a )?(negroni|old fashioned)",
            "(what'?s in|tell me about) (the )?(negroni|old fashioned)",
            "(negroni|old fashioned) (sounds great|please|works)",
            "(i'?ll do|let'?s do) (the |a )?(negroni|old fashioned)",
            "(which is more|what'?s more) (popular|bitter|strong)",
          ],
          hint_tr:
            "Sec: 'I'll try the negroni' veya 'What's in the old fashioned?'",
        },
        {
          speaker: "npc",
          message:
            "Negroni is gin, Campari, sweet vermouth. Pretty bitter, very classic. Want to give it a shot?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|absolutely)(,)? (let'?s|i'?ll) (try|do|have) (it|one)",
            "(sounds (great|perfect|good))",
            "(yeah|yes)(,)? (give it a (shot|try))",
            "(perfect|love it|let'?s go)",
            "(actually )?(can i (try|do) the old fashioned instead)",
          ],
          hint_tr:
            "Kabul: 'Yes, let's give it a shot'. Vazgec: 'Actually, the old fashioned instead'.",
        },
        {
          speaker: "npc",
          message:
            "Coming up. Any food? Our bartender is making fresh oysters tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |yeah )?(let'?s |i'?ll )?(have|get|try) (some )?oysters",
            "(no thanks|just the drink|i'?m good)",
            "(maybe later|i'?ll think about it|in a bit)",
            "(how much are )?(the oysters)",
            "(i'?ll )?(stick with )?(just the negroni|the drink)",
          ],
          hint_tr:
            "Yemek: 'Yes, let's try oysters' veya 'Just the drink, thanks'.",
        },
        {
          speaker: "npc",
          message: "Got it. Negroni coming right up.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.19 — Returning a Drink
// ============================================================
export const barLesson_7_19: BundledLesson = {
  id: "order.bar.7.19",
  skill_id: "order.bar",
  index: 19,
  title: "Iceceği Geri Gonder",
  description:
    "Cok tatli, yanlis siparis, beklenenden farkli — iceceği iade.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.19.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "send it back",
      tr_translation: "Geri gondermek (icecek/yemek)",
      example: "I'm going to send this back — it's too sweet.",
      example_tr: "Bunu geri gonderecegim — cok tatli.",
    },
    {
      id: "ex.7.19.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kokteyl cok tatli geldi. Kibarca geri vermeye calisiyorsun.",
      npc_role: "Bartender",
      setting: "Cocktail bar",
      turns: [
        {
          speaker: "npc",
          message: "How's everything? You enjoying that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|to be honest|sorry but)(,)? (it'?s|this is) (a (bit|little) |way )?(too sweet|too sour|too strong)",
            "(could i|can i) (get|have) (it )?(a bit |a little )?(less sweet|drier|stronger)",
            "(this isn'?t|that'?s not) (what i ordered|quite right)",
            "(i hate to ask|sorry to bother)(,)? but (it'?s|this is) (too )?(sweet|strong)",
            "(could you|would you mind) (remaking|fixing|adjusting) (it|this)",
          ],
          hint_tr:
            "Kibarca: 'Sorry, it's a bit too sweet'. 'Actually' + 'sorry but' yumusatir.",
        },
        {
          speaker: "npc",
          message:
            "Oh, no worries — what's off about it? Too sweet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (way |a bit |too )?(sweet|sugary)",
            "(it'?s|this is) (too sweet|way too sweet)",
            "(could you make it|can you do it) (drier|less sweet|stronger)",
            "(i was hoping for|i expected) (something )?(less sweet|drier)",
            "(less sugar|more bitter)( please)?",
          ],
          hint_tr:
            "Aciklik: 'Yes, too sweet — could you make it drier?'",
        },
        {
          speaker: "npc",
          message:
            "Totally my fault — let me remake it. Same drink, drier, on me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks|appreciate it)( so much)?",
            "(you don'?t have to|that'?s not necessary)(,)? (i can pay)",
            "(thanks|thank you)(,)? (that'?s )?(very )?(kind|generous)",
            "(no worries|no problem)(,)? (thanks for )?(remaking|fixing) it",
            "(perfect|great)(,)? (thank you)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, appreciate it'. 'On me' = 'benden' = bedava sundu.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Take a few minutes — I'll have it right out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no rush|take your time|whenever you can)",
            "(thanks|thank you)( again)?",
            "(no problem|all good)",
            "(i appreciate it|appreciate the patience)",
            "(sounds great|perfect)",
          ],
          hint_tr:
            "Sakin ol: 'No rush, take your time'.",
        },
        {
          speaker: "npc",
          message: "Coming up.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.20 — Tipping on a Tab
// ============================================================
export const barLesson_7_20: BundledLesson = {
  id: "order.bar.7.20",
  skill_id: "order.bar",
  index: 20,
  title: "Tab Kapatma + Bahsis",
  description:
    "Hesap kapatma, bahsis miktari, kart ile tab odeme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.20.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "close out my tab",
      tr_translation: "Hesabimi kapatmak",
      example: "Could I close out my tab?",
      example_tr: "Hesabimi kapatabilir miyim?",
    },
    {
      id: "ex.7.20.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "twenty percent tip",
      tr_translation: "Yuzde yirmi bahsis",
      example: "I usually leave a twenty percent tip.",
      example_tr: "Genelde yuzde yirmi bahsis birakirim.",
    },
    {
      id: "ex.7.20.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Aksamin sonu, tab kapatip bahsis ekliyorsun.",
      npc_role: "Bartender",
      setting: "End of the night at the bar",
      turns: [
        {
          speaker: "npc",
          message: "Hey, are you good for another, or wrapping up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m )?(wrapping up|done|finished|good)",
            "(could|can) i (close out|settle) (my )?(tab|bill)",
            "(let me|i'?ll) (close out|settle up|pay)( please)?",
            "(i'?m |we'?re )?(heading out|calling it)",
            "(actually )?(can i (get|see) the bill|let me settle up)",
          ],
          hint_tr:
            "Bitir: 'Could I close out my tab?' veya 'I'm wrapping up'.",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Be right back with the total.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(sounds good|perfect)",
            "(no rush|take your time)",
            "(appreciate it)",
            "(thanks )?(for tonight|for the great service)",
          ],
          hint_tr:
            "Bekle: 'Thanks, no rush'.",
        },
        {
          speaker: "npc",
          message:
            "Here you go — total's forty-two. Sign at the bottom, tip line in the middle.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(perfect|got it|all set)",
            "(what'?s )?(twenty|fifteen|eighteen) percent( on that)?",
            "(let me )?(figure out|do) the tip",
            "(i'?ll )?(round up|add ten|add (a )?(few|ten))",
          ],
          hint_tr:
            "Bahsis hesabi: 'What's twenty percent on that?' Standart: 18-22%.",
        },
        {
          speaker: "npc",
          message:
            "Twenty percent on forty-two is about eight bucks. Or whatever works for you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll )?(leave|do|add) (a |the )?(ten|eight|nine|fifteen)",
            "(let'?s )?(round up|do ten|make it ten)",
            "(eight|ten|fifteen|twenty)( percent)? (sounds (good|right))",
            "(twenty percent|service was great)(,)? (i'?ll do (more|fifteen))",
            "(here you go|done)(,)? (thanks)",
          ],
          hint_tr:
            "Bahsis ver: 'I'll leave ten, thanks'. Iyi servis icin 20-25% normal.",
        },
        {
          speaker: "npc",
          message: "Thanks a ton — have a good one!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.21 — Gluten-Free / Vegan Question
// ============================================================
export const barLesson_7_21: BundledLesson = {
  id: "order.bar.7.21",
  skill_id: "order.bar",
  index: 21,
  title: "Alerji + Vegan Soru",
  description:
    "Glutensiz, vegan, alerjenler — icecek + bar yemegi icin diyet sorular.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.21.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "gluten-free",
      tr_translation: "Glutensiz",
      example: "Is the beer menu gluten-free friendly?",
      example_tr: "Bira menusu glutensize uygun mu?",
    },
    {
      id: "ex.7.21.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Glutensiz icecek/yemek lazim. Bartender'a soruyorsun.",
      npc_role: "Bartender",
      setting: "Bar with food menu",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I get started for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do you have|got any) (gluten-free|vegan|dairy-free) (options|drinks|beers)",
            "(i'?m |i have a )(gluten[- ]free|celiac|vegan)(,)? (any options)?",
            "(is the |is your )?(cider|cocktail|beer) (gluten-free|vegan)",
            "(could i see|what'?s) (your |the )?(allergen|gluten-free) (menu|list)",
            "(any )?(gluten-free|vegan) (cocktails|drinks)",
          ],
          hint_tr:
            "Diyet sor: 'Do you have gluten-free options?' veya 'I'm vegan'. Utanma — yaygin.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, totally. Most cocktails are GF — beer's the tricky one. We do have a couple GF ciders, though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cider sounds (good|great|perfect))",
            "(i'?ll )?(have|try|go with) (a |the |one )?cider",
            "(what )?(ciders|brands) do you have",
            "(let me try|i'?ll do) (the |a )?cider",
            "(could i get|how about) (a )?cocktail (instead)?",
          ],
          hint_tr:
            "Sec: 'I'll try the cider' veya 'How about a cocktail?'",
        },
        {
          speaker: "npc",
          message:
            "Two ciders on tap — dry and semi-sweet. Which sounds better?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dry|semi-sweet)( please)?",
            "(i'?ll )?(have|take|do) (the |a )?(dry|semi-sweet)",
            "(let me try|let'?s do) (the |a )?(dry|semi-sweet)",
            "(what'?s the difference|i'?m not sure)(,)?( what do you suggest)?",
            "(dry sounds (better|good)|i prefer dry)",
          ],
          hint_tr:
            "Tat sec: 'Dry, please' (az tatli) veya 'Semi-sweet' (orta).",
        },
        {
          speaker: "npc",
          message:
            "Cool. By the way, our fries are fried in shared oil — so not GF. But our salads and chicken wings are.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for letting me know|good to know)",
            "(i'?ll )?(stick with|just have) (the )?cider",
            "(could i get|i'?ll have) (the |some |an order of )?(salad|wings)",
            "(no food|just the drink) (for now|thanks)",
            "(appreciate the heads up|thanks for the warning)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for letting me know'. Capraz kontaminasyon onemli.",
        },
        {
          speaker: "npc",
          message: "Of course. Cider coming up.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.22 — Pre-paying / Closing Tab Early
// ============================================================
export const barLesson_7_22: BundledLesson = {
  id: "order.bar.7.22",
  skill_id: "order.bar",
  index: 22,
  title: "Onceden Ode — Tab Yerine",
  description:
    "Tab acmak yerine her icki pesin odeme tercihi.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.7.22.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "pay as I go",
      tr_translation: "Her seferinde ayri odemek",
      example: "I'll just pay as I go.",
      example_tr: "Her seferinde ayri odeyecegim.",
    },
    {
      id: "ex.7.22.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Tek bir icki icmeyi planliyorsun. Tab acmak istemiyorsun.",
      npc_role: "Bartender",
      setting: "Bar, quick stop",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what'll you have?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(beer|gin and tonic|whiskey|cocktail)( please)?",
            "(i'?ll have|i'?d like|could i get) (a |one )?(beer|drink|cocktail)",
            "(could i get a quick )?(beer|drink)",
            "(just |only )?(a )?(quick )?(drink|beer)",
            "(i'?ll just have|let me get) (one )?(beer|drink)",
          ],
          hint_tr:
            "Tek icki: 'Just a quick beer, please'.",
        },
        {
          speaker: "npc",
          message: "Coming up. Tab or pay now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pay now|just pay now)( please)?",
            "(i'?ll )?(pay as i go|just pay this round)",
            "(no tab|skip the tab)(,)?( pay now|just one drink)",
            "(this is )?(probably just one)(,)? (pay now)",
            "(just one drink|only having one|won'?t need a tab)",
          ],
          hint_tr:
            "Onceden ode: 'Just pay now — only having one'.",
        },
        {
          speaker: "npc",
          message: "Cool — that'll be eight bucks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here'?s my card)",
            "(card or cash|do you take card)",
            "(can i pay with) (card|cash|venmo|tap)",
            "(thanks)(,)? (here you go)",
            "(tap to pay|contactless)",
          ],
          hint_tr:
            "Ode: 'Here's my card' veya 'Card or cash?'",
        },
        {
          speaker: "npc",
          message:
            "Card's fine. Want to add a tip on the receipt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|of course)(,)? (i'?ll add (a )?(tip|few))",
            "(twenty percent|fifteen percent|two bucks|three dollars)",
            "(i'?ll )?(leave|tip|do) (a |the )?(few|couple|two|three) dollars",
            "(yes|please)(,)? (add|put) (a )?(tip|few)",
            "(round it up to (ten|fifteen))",
          ],
          hint_tr:
            "Bahsis ekle: 'Yes, I'll add two dollars' veya 'Round up to ten'.",
        },
        {
          speaker: "npc",
          message: "Appreciate it — enjoy your drink.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.23 — Group Separate Checks
// ============================================================
export const barLesson_7_23: BundledLesson = {
  id: "order.bar.7.23",
  skill_id: "order.bar",
  index: 23,
  title: "Grupta Ayri Hesap",
  description:
    "Birlikte ic, ayri ode — separate checks talebi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.23.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "separate checks",
      tr_translation: "Ayri hesaplar",
      example: "Could we get separate checks?",
      example_tr: "Ayri hesap alabilir miyiz?",
    },
    {
      id: "ex.7.23.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dort kisi bardasiniz, herkes kendi hesabini odeyecek.",
      npc_role: "Bartender",
      setting: "Bar, group of four",
      turns: [
        {
          speaker: "npc",
          message: "How are we doing — same tab, or splitting it up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could we |can we )?(get )?(separate checks|split checks|individual tabs)( please)?",
            "(let'?s|we'?ll) (split|separate|do separate) (it|checks|tabs)",
            "(separate|individual)( checks)?( please)?",
            "(everyone'?s )?(paying their own|separate)",
            "(split it )?(four ways|by person)",
          ],
          hint_tr:
            "Ayri hesap: 'Separate checks, please'. ABD'de cok yaygin. Turkiye'de daha az.",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Just confirm — by person, or split evenly?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(by person|individual|what each (of us|person) ordered)",
            "(split evenly|even split|same amount)",
            "(by what we each ordered|individual orders)",
            "(let'?s do )?(by person|per person)",
            "(four equal|even four ways)",
          ],
          hint_tr:
            "Sec: 'By person' (her kisi kendi siparisini oder) veya 'Split evenly' (esit boluse).",
        },
        {
          speaker: "npc",
          message:
            "Got it — by person. Cards ready when I bring them out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (we'?ll have|cards ready)",
            "(no problem|sure)(,)? (we'?ll have them out)",
            "(give us a second|one moment)( to grab cards)?",
            "(yes|yeah)(,)? (sounds (good|perfect))",
            "(perfect|works for us|got it)",
          ],
          hint_tr:
            "Onayla: 'Yes, cards ready, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "Cool — back in a sec with four checks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it|sounds great)",
            "(no rush|take your time)",
            "(perfect)",
            "(thanks for being patient|thanks for splitting)",
          ],
          hint_tr:
            "Bekle: 'Thanks, appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "Here they are — top one's the IPA, then the wine, then the two cocktails.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.24 — Sports Celebration Order
// ============================================================
export const barLesson_7_24: BundledLesson = {
  id: "order.bar.7.24",
  skill_id: "order.bar",
  index: 24,
  title: "Spor Bari — Gurultude Siparis",
  description:
    "Mac kutlamasi, gurultu, bagiriyorsun — kisa cumlelerle siparis.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.24.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "shot of",
      tr_translation: "Bir kadeh, bir shot (likör)",
      example: "Four shots of tequila!",
      example_tr: "Dort shot tekila!",
    },
    {
      id: "ex.7.24.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Takiminiz mac kazandi. Kalabalik spor barinda kutlama icin siparis veriyorsun.",
      npc_role: "Bartender",
      setting: "Sports bar after a win, loud",
      turns: [
        {
          speaker: "npc",
          message: "Hey! Big win! What do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(four |three |a round of )?(shots|beers|drafts)( please)?",
            "(can|could) (i|we) get (four|three|a round)",
            "(a round of) (tequila|whiskey|beer|shots)( for us)?",
            "(four|five) (ipas|lagers|beers)( on tap)?",
            "(shots all around|round on me|drinks for the table)",
          ],
          hint_tr:
            "Kalabalik: kisa kal. 'Four shots, please' veya 'Round of beers'. Gurultude detay yok.",
        },
        {
          speaker: "npc",
          message:
            "What kind of shots? Tequila, whiskey, vodka?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tequila|whiskey|vodka|jagermeister|fireball)( shots)?",
            "(let'?s do|make it) (tequila|whiskey|vodka)",
            "(four )?(tequila|whiskey)( shots)?( please)?",
            "(your call|bartender'?s choice|whatever'?s fast)",
            "(whatever you have|whatever'?s good)",
          ],
          hint_tr:
            "Kisa: 'Four tequilas, please'. Hiz onemli.",
        },
        {
          speaker: "npc",
          message: "Salt and lime?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|please)(,)? (salt and lime)?",
            "(salt and lime|the works)( please)?",
            "(yeah|absolutely)(,)? (everything|the works)",
            "(no thanks|just the shots)",
            "(yes|sure)(,)? (all of it)",
          ],
          hint_tr:
            "Tekila ritueli: 'Yes, salt and lime'.",
        },
        {
          speaker: "npc",
          message: "Cash or card? Need to keep it moving!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash)( please|, here)?",
            "(here you go|here'?s my card)",
            "(tap to pay|contactless)",
            "(open a tab|start a tab)(,)? (we'?ll be here)",
            "(card)(,)? (keep it open)",
          ],
          hint_tr:
            "Hizli ode: 'Card, here you go'.",
        },
        {
          speaker: "npc",
          message: "Coming right up — congrats!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.25 — Bar Food + Drink Combo
// ============================================================
export const barLesson_7_25: BundledLesson = {
  id: "order.bar.7.25",
  skill_id: "order.bar",
  index: 25,
  title: "Bar Food + Bira Combosu",
  description:
    "Wings, fries, sliders — bar yemegi siparisi + icecek esleştirme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.25.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "bar food",
      tr_translation: "Bar yemegi (wings, fries, sliders)",
      example: "Could I see the bar food menu?",
      example_tr: "Bar yemek menusunu gorebilir miyim?",
    },
    {
      id: "ex.7.25.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Acsin, bira icin geldin ama yemek de almak istiyorsun.",
      npc_role: "Bartender",
      setting: "Bar with food menu",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I start you with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i see|can i get) (the )?(bar food|food|kitchen) menu",
            "(what'?s in the )?kitchen( open)?",
            "(what )?(food|small bites) (do you have|are on)",
            "(i'?m starving|i'?m hungry)(,)? (got any food)",
            "(any bar food|food options)( tonight)?",
          ],
          hint_tr:
            "Yemek sor: 'Could I see the food menu?' veya 'What food do you have?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, we've got wings, sliders, fries, and a really good nacho plate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll have|i'?d like|could i get) (some |an order of |a plate of )?(wings|sliders|fries|nachos)",
            "(let me try|let'?s do) (the |a |an order of )?(wings|nachos|sliders)",
            "(the )?(wings|nachos|sliders) (sound|sounds) (good|great)",
            "(an order of|some) (wings|nachos)( and a beer)?",
            "(what'?s your )?(most popular|best) (food|dish)",
          ],
          hint_tr:
            "Sec: 'I'll have the wings'. 'Order of' = porsiyon.",
        },
        {
          speaker: "npc",
          message:
            "Good call. Any spice level? Mild, medium, or hot?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mild|medium|hot)( please)?",
            "(let'?s do|i'?ll do) (mild|medium|hot)",
            "(medium|mild|hot)(,)? (please|thanks)",
            "(what'?s the )?hottest( option)?",
            "(can you do|got anything) (extra hot|spicier)",
          ],
          hint_tr:
            "Aciligi: 'Medium, please'. Hot = baya acili.",
        },
        {
          speaker: "npc",
          message: "Got it. Beer to go with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (a |one |an )?(ipa|lager|stout|pilsner)",
            "(what )?(do you recommend|pairs well)( with wings)?",
            "(i'?ll have|i'?d like) (a |one )?(beer|ipa|cider)",
            "(what'?s on draft|what'?s on tap)",
            "(surprise me|your call|whatever pairs)",
          ],
          hint_tr:
            "Bira esle: 'IPA, please' veya 'What pairs with wings?'",
        },
        {
          speaker: "npc",
          message: "IPA with hot wings — classic. Coming up.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.26 — Late-Night Kitchen
// ============================================================
export const barLesson_7_26: BundledLesson = {
  id: "order.bar.7.26",
  skill_id: "order.bar",
  index: 26,
  title: "Gec Saatte — Mutfak Hala Acik mi?",
  description:
    "Mutfak son siparisi yaklasiyor. Yemek alabilir miyim?",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.7.26.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "last call",
      tr_translation: "Son siparis (mutfak/bar)",
      example: "Is the kitchen still open or is it last call?",
      example_tr: "Mutfak hala acik mi yoksa son siparis mi?",
    },
    {
      id: "ex.7.26.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Saat 22:30. Mutfak son siparisi yaklasiyor.",
      npc_role: "Bartender",
      setting: "Bar, late night",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is the |is your )?kitchen (still |open)?( still open)?",
            "(am i in time for|can i still order) food",
            "(when'?s |what time'?s) (last call|kitchen close)",
            "(any food still|still serving food)",
            "(did i miss|is it too late for) (the )?kitchen",
          ],
          hint_tr:
            "Mutfak sor: 'Is the kitchen still open?'",
        },
        {
          speaker: "npc",
          message:
            "Just made last call about ten minutes ago — sorry. But we've got chips, nuts, and pretzels at the bar.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(no worries|that'?s fine|all good)",
            "(i'?ll )?(take|have) (some )?(chips|nuts|pretzels)",
            "(any |got any) (chips|nuts|snacks)( at the bar)?",
            "(no problem)(,)? (just a drink then)",
            "(let me )?(grab|have) (some )?(pretzels|chips|nuts)",
          ],
          hint_tr:
            "Kabul et: 'No worries, I'll take some chips'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Drink to go with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(beer|ipa|cocktail|whiskey)( please)?",
            "(what'?s on tap|what do you have on draft)",
            "(i'?ll have|i'?d like) (a |one )?(beer|gin and tonic|drink)",
            "(let me see|could i see) (the )?(drinks )?menu",
            "(surprise me|your call|something light)",
          ],
          hint_tr:
            "Icki sec: 'I'll have a beer'.",
        },
        {
          speaker: "npc",
          message: "Pint of the IPA?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure)(,)? (sounds (good|perfect|great))",
            "(perfect|works for me)",
            "(let'?s do that|let'?s go with that)",
            "(yes)(,)? (please)",
            "(actually )?(can i do|make it) (a |the )?(lager|stout) (instead)?",
          ],
          hint_tr:
            "Onayla: 'Yeah, sounds good'.",
        },
        {
          speaker: "npc",
          message: "Coming right up — pretzels are on me.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.27 — Birthday Bar (Free Drink Hint)
// ============================================================
export const barLesson_7_27: BundledLesson = {
  id: "order.bar.7.27",
  skill_id: "order.bar",
  index: 27,
  title: "Dogum Gunu — Bedava Icki Imasi",
  description:
    "Dogum gunu! Ima ile bedava icki cikabilir mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.27.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "on the house",
      tr_translation: "Mekan ikrami (bedava)",
      example: "This one's on the house — happy birthday!",
      example_tr: "Bu mekan ikrami — dogum gununuz kutlu olsun!",
    },
    {
      id: "ex.7.27.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bugun dogum gunun. Bartender ile sohbet sirasinda ima ediyorsun.",
      npc_role: "Bartender",
      setting: "Bar, birthday night",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I get you tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(beer|cocktail|gin and tonic|whiskey)( please)?",
            "(actually )?(it'?s my birthday)(,)? (what do you recommend)",
            "(it'?s my birthday|i'?m celebrating)(,)?( any specials)?",
            "(could i get|i'?ll have) (a |the )?(signature|fancy) (cocktail)",
            "(today'?s my birthday)(,)? (something special)",
          ],
          hint_tr:
            "Ima: 'It's my birthday' deyince genelde ikram cikar.",
        },
        {
          speaker: "npc",
          message:
            "Oh nice — happy birthday! Want a recommendation, or do you have something in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (recommendation|surprise me)",
            "(surprise me|your call|what'?s your favorite)",
            "(what'?s your )?(signature|specialty|best cocktail)",
            "(something )?(special|nice|fancy) for tonight",
            "(thanks)(,)? (what would you make)",
          ],
          hint_tr:
            "Yumusak ima: 'Surprise me' veya 'Something special for tonight'.",
        },
        {
          speaker: "npc",
          message:
            "Let me make you a smoky old fashioned — birthday on the house.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(wow|amazing|that'?s so kind)(,)? (thank you)",
            "(thank you|thanks)(,)? (you don'?t have to)",
            "(seriously|really)\\?\\s*(thank you)( so much)?",
            "(thanks)(,)? (i appreciate it|that'?s really nice)",
            "(you'?re )?(too kind|the best)(,)? (thanks)",
          ],
          hint_tr:
            "Sukran: 'Wow, thank you so much!'. 'On the house' = bedava.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Any plans for the rest of the night?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |gonna |going to )?(meet friends|meet up with friends)",
            "(few more places|maybe a couple more bars)",
            "(probably )?(staying here|chilling here)",
            "(some friends are coming|waiting on friends)",
            "(might do|gonna do) (karaoke|dinner|dancing)",
          ],
          hint_tr:
            "Sohbet: 'Meeting friends, then maybe more bars'.",
        },
        {
          speaker: "npc",
          message: "Sounds fun — enjoy. Cheers!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.28 — Local Craft Beer Scene
// ============================================================
export const barLesson_7_28: BundledLesson = {
  id: "order.bar.7.28",
  skill_id: "order.bar",
  index: 28,
  title: "Yerel Craft Beer Sahnesi",
  description:
    "Sehrin craft bira sahnesi — local breweries, IPA culture.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.28.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "craft beer",
      tr_translation: "Zanaat birasi, kucuk uretici birasi",
      example: "What's the craft beer scene like here?",
      example_tr: "Burda craft bira sahnesi nasil?",
    },
    {
      id: "ex.7.28.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "local brewery",
      tr_translation: "Yerel bira fabrikasi",
      example: "Any local breweries you recommend?",
      example_tr: "Onerebilecegin yerel bira fabrikasi var mi?",
    },
    {
      id: "ex.7.28.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sehre yeni geldin, yerel bira kulturune merak ediyorsun.",
      npc_role: "Bartender",
      setting: "Craft beer bar",
      turns: [
        {
          speaker: "npc",
          message: "Welcome! First time in the area?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (just visiting|in town for a few days|new here)",
            "(first time|just got in)( yesterday| today)?",
            "(yeah)(,)? (what'?s the (craft beer|beer) scene like)",
            "(visiting|on vacation)(,)? (any local breweries to try)",
            "(yes)(,)? (what do you recommend|what'?s good locally)",
          ],
          hint_tr:
            "Hikayeyi anlat: 'Yeah, first time — what's the craft beer scene like?'",
        },
        {
          speaker: "npc",
          message:
            "Oh, you're in for a treat. Three big local breweries — Hopworks, Riverbend, and a small one called Wild Yeast.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(which one'?s|what'?s) your favorite",
            "(any of those |which one) (on tap|do you have)( tonight)?",
            "(i'?ll try|let me try) (a |the )?(hopworks|riverbend|wild yeast)",
            "(what'?s the difference|what'?s each one like)",
            "(any )?(ipas|lagers|stouts) from (those|them)",
          ],
          hint_tr:
            "Sec: 'Which one's your favorite?' veya 'Any IPAs from them?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, Wild Yeast — they do a sour that's the best in town. Want to try one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|absolutely)(,)? (let'?s|i'?ll) (try|do)( it)?",
            "(sounds (great|amazing|perfect))",
            "(let me try|i'?ll have|i'?d like) (the |a )?sour",
            "(what'?s a sour|i'?m not sure what that is)",
            "(perfect|love sours|let'?s go)",
          ],
          hint_tr:
            "Kabul: 'Yes, I'll try the sour'. Bilmiyorsan: 'What's a sour?'",
        },
        {
          speaker: "npc",
          message:
            "It's tart, fruity, kind of unusual. Definitely not for everyone — but really good.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (interesting|cool))(,)? (let'?s try it)?",
            "(i'?ll )?(give it a (try|shot)|risk it)",
            "(yeah|sure)(,)? (let me try (it|one))",
            "(actually|maybe) (i'?ll do|let'?s do) (an ipa|the lager) (instead)?",
            "(i'?m up for it|let'?s do it)",
          ],
          hint_tr:
            "Risk al: 'I'll give it a try' veya degisitir: 'IPA instead'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Coming up — and ask me if you want recs for breweries to visit.",
        },
      ],
    },
  ],
};

// ============================================================
// SECTION B — bar.approach 24.15 to 24.29 (social depth)
// ============================================================

// ============================================================
// Lesson 24.15 — Sports Bar Game Conversation
// ============================================================
export const barLesson_24_15: BundledLesson = {
  id: "bar.approach.24.15",
  skill_id: "bar.approach",
  index: 15,
  title: "Spor Bari — Mac Sohbeti",
  description:
    "TV'de mac. Yanindaki masa ile mac uzerine kisa sohbet baslat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.15.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "you a fan",
      tr_translation: "Bir taraftari misin?",
      example: "You a fan of either team?",
      example_tr: "Iki takimdan birinin taraftari misin?",
    },
    {
      id: "ex.24.15.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Spor barinda yan masa mac izliyor. Sohbet aciyorsun.",
      npc_role: "Stranger at next table",
      setting: "Sports bar during a game",
      turns: [
        {
          speaker: "npc",
          message:
            "Did you see that play? Insane.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|i know|right)\\??\\s*(crazy|insane|amazing)",
            "(i can'?t believe|did you see) that",
            "(you a fan of|are you (rooting|cheering) for) (either team|the (red|blue) team)",
            "(yeah|absolutely)(,)? (best play (of the night|so far))",
            "(no way|unbelievable|that was wild)",
          ],
          hint_tr:
            "Tepki ver: 'Yeah, insane!' Sonra: 'You a fan of either team?'",
        },
        {
          speaker: "npc",
          message:
            "Big fan of the Lakers. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m a |big )?(lakers|warriors|celtics) fan",
            "(i'?m more of a |i actually like) (warriors|celtics|knicks) (fan|guy)",
            "(i don'?t really follow|i don'?t watch much) (basketball)",
            "(just )?(watching for fun|enjoying the game)",
            "(yeah|same)(,)? (love the lakers)",
          ],
          hint_tr:
            "Cevap: 'Lakers fan too' veya 'I don't really follow'.",
        },
        {
          speaker: "npc",
          message:
            "Cool — where you watching from usually?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(usually )?(at home|on my couch|on tv)",
            "(this )?bar( actually)?(,)? (first time)?",
            "(i'?m from|i live in) (turkey|istanbul|abroad|europe)",
            "(visiting|just visiting|on a trip)",
            "(my apartment|with friends)",
          ],
          hint_tr:
            "Sohbet kur: 'Usually at home, but visiting' veya 'I'm from Turkey'.",
        },
        {
          speaker: "npc",
          message:
            "Oh, from Turkey? You guys have big basketball there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (huge|big|popular)",
            "(soccer is bigger|football is bigger|we love (soccer|football))",
            "(basketball is )?(popular|big)(,)? (efes|fenerbahce|anadolu efes|galatasaray)",
            "(yes)(,)? (efes won |fenerbahce won) (euroleague)",
            "(turkey is )?(strong in basketball|known for basketball)",
          ],
          hint_tr:
            "Turkiye'yi anlat: 'Yeah, big — Fenerbahce, Anadolu Efes'.",
        },
        {
          speaker: "npc",
          message:
            "Nice — cool to meet you. Enjoy the game.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.16 — Dive Bar Older Regular
// ============================================================
export const barLesson_24_16: BundledLesson = {
  id: "bar.approach.24.16",
  skill_id: "bar.approach",
  index: 16,
  title: "Dive Bar — Yasli Mudavim",
  description:
    "Dive bar (eski/basit bar). Yasli bir mudavim hikaye anlatiyor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.16.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "regular",
      tr_translation: "Mudavim, surekli musteri",
      example: "He's a regular here.",
      example_tr: "O burda mudavim.",
    },
    {
      id: "ex.24.16.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Dive bar. Yaninda 60 yaslarinda bir adam oturuyor, sohbet aciyor.",
      npc_role: "Older regular (60s)",
      setting: "Dive bar, late afternoon",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey kid, you new here? Don't think I've seen you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (first time|just walked in|new here)",
            "(my first time|just stopped in)",
            "(yeah)(,)? (just visiting|in town for (a few days|a week))",
            "(i'?m new to the area|just moved here)",
            "(stopped by|wanted to check it out)",
          ],
          hint_tr:
            "Anlat: 'Yeah, first time'. Dive bar kulturunde sohbet sicaktir.",
        },
        {
          speaker: "npc",
          message:
            "Been coming here forty years. Same stool, same beer. You won'?t find a place like this anywhere.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow|forty years)(,)? (that'?s )?(amazing|incredible|impressive)",
            "(no way|that'?s a long time)",
            "(what )?(do you )?(like|love) (about it|so much)",
            "(you must have seen|i bet you'?ve seen) (a lot|some things)",
            "(it does have a )?(great vibe|nice feel)",
          ],
          hint_tr:
            "Saygi: 'Wow, forty years!' Sohbeti devam ettir.",
        },
        {
          speaker: "npc",
          message:
            "Used to come here with my dad. He's gone now, but I still take his seat sometimes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(that'?s )?(really nice|beautiful|sweet)",
            "(i'?m sorry|sorry about your dad|condolences)",
            "(that'?s a )?(great way to remember (him|them))",
            "(must be )?(meaningful|special)( for you)?",
            "(makes the place )?(extra special|meaningful)",
          ],
          hint_tr:
            "Empati: 'I'm sorry — that's a beautiful tradition'.",
        },
        {
          speaker: "npc",
          message:
            "Yeah. Anyway — what brings you to our little corner?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |kind of )?(wanted to (explore|try a new place))",
            "(visiting from|i'?m from) (turkey|istanbul|europe|out of town)",
            "(walking around|exploring the neighborhood)",
            "(my friend recommended|someone told me about) (it|this place)",
            "(just curious|just exploring)",
          ],
          hint_tr:
            "Anlat: 'Visiting from Turkey, exploring'.",
        },
        {
          speaker: "npc",
          message:
            "Well, welcome. Next round's on me — gotta show some hospitality.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.17 — Speakeasy Etiquette
// ============================================================
export const barLesson_24_17: BundledLesson = {
  id: "bar.approach.24.17",
  skill_id: "bar.approach",
  index: 17,
  title: "Speakeasy — Sifre + Etiquette",
  description:
    "Gizli bar, sifre, sessiz konusma — speakeasy kulturu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.17.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "speakeasy",
      tr_translation: "Gizli bar (yasak donemi mirasi)",
      example: "It's a speakeasy — you need a password.",
      example_tr: "Speakeasy — sifre lazim.",
    },
    {
      id: "ex.24.17.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sifreli bara giriyorsun. Kapida bekciye sifre soyluyorsun.",
      npc_role: "Doorman",
      setting: "Speakeasy entrance",
      turns: [
        {
          speaker: "npc",
          message:
            "Evening. Can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (i have a reservation|booking) (under|for)",
            "(the password is|i was told) (\\w+)",
            "(my friend|a friend) (sent me|told me about (this|here))",
            "(is this the )?(right place|speakeasy)",
            "(do i need a |do you need a )?(password|reservation)",
          ],
          hint_tr:
            "Sifre/rezervasyon: 'Yes, reservation under [name]' veya 'A friend sent me'.",
        },
        {
          speaker: "npc",
          message:
            "Got the password?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (it'?s|the password is) (\\w+)",
            "(i think it'?s|my friend said) (\\w+)",
            "(it'?s )?(midnight|bourbon|whisper|magnolia)",
            "(\\w+)(,)? (right)?",
            "(actually |i think )?(i forgot|can'?t remember)",
          ],
          hint_tr:
            "Sifre soyle: 'Yes, it's [word]'. Hatirlamiyorsan dur: 'I forgot'.",
        },
        {
          speaker: "npc",
          message:
            "You're in. Quick rules — no photos, keep your voice down, and the bartender'?s tip is in cash.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood|of course)",
            "(thanks|thank you)( for letting me know)?",
            "(no photos|cash tips|voices down)(,)? (got it)",
            "(perfect|all good|noted)",
            "(no problem|absolutely)",
          ],
          hint_tr:
            "Onayla: 'Got it, thanks'. Speakeasy = sessiz, telefonsuz, nakit bahsis.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Bartender'?s name is Sam — tell him I sent you for the special menu.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it|will do)",
            "(thanks)(,)? (i'?ll let him know)",
            "(perfect|got it)",
            "(thanks for the tip)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks, will do'.",
        },
        {
          speaker: "npc",
          message:
            "Enjoy the night. Curtain'?s straight ahead.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.18 — Bar Trivia Night
// ============================================================
export const barLesson_24_18: BundledLesson = {
  id: "bar.approach.24.18",
  skill_id: "bar.approach",
  index: 18,
  title: "Trivia Night — Takima Katil",
  description:
    "Bar trivia gecesi. Bir takimin yanina oturup katilmak istiyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.18.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "trivia night",
      tr_translation: "Bilgi yarismasi gecesi (barda)",
      example: "Is this trivia night?",
      example_tr: "Trivia gecesi mi?",
    },
    {
      id: "ex.24.18.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Trivia gecesinde bir takim eksik kisi. Yanlarina katilmak istiyorsun.",
      npc_role: "Trivia team member",
      setting: "Bar trivia night",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — you here for trivia? Need a team?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (looking for a team|need a team|by myself)",
            "(could i |can i )?(join|jump on your team)",
            "(actually |yeah)(,)? (i'?m new|never done this)",
            "(yes)(,)? (totally|absolutely)(,)? (need a team)",
            "(do you guys )?(have room|need a player)",
          ],
          hint_tr:
            "Katil: 'Yeah, looking for a team — could I join?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, we need one more. We're a bit rusty on history — you good at that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (decent|alright|pretty good) (at )?(history)",
            "(i'?m better at|i know) (geography|sports|movies|music)",
            "(turkish history|ancient history)(,)? (i know a lot)",
            "(i can try|i'?ll do my best)",
            "(not really)(,)? (but i'?ll help where i can)",
          ],
          hint_tr:
            "Kuvvet alani: 'Yeah, pretty good at history' veya 'Better at geography'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. I'm Mike, this is Sarah and Tom. What's your name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |my name is |call me )(\\w+)",
            "(hey|hi)(,)? (i'?m |i am )(\\w+)",
            "(\\w+)(,)? (nice to meet you)",
            "(nice to meet you all)(,)? (i'?m )(\\w+)",
            "(hi guys)(,)? (i'?m )(\\w+)",
          ],
          hint_tr:
            "Tanit: 'I'm [your name], nice to meet you'.",
        },
        {
          speaker: "npc",
          message:
            "Cool, welcome to Team Brain Cells. Drinks on the team — what're you having?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(thanks|thank you)(,)? (a |one )?(beer|cocktail) (please|sounds good)",
            "(let me get my own|i can buy my own)(,)? (thanks)",
            "(an |a )?(ipa|lager|gin and tonic|whiskey)( please)?",
            "(whatever you'?re having|i'?ll have what (you|they) have)",
            "(too kind)(,)? (i'?ll have a beer)",
          ],
          hint_tr:
            "Kabul: 'Thanks, I'll have a beer'.",
        },
        {
          speaker: "npc",
          message:
            "Coming up. Round one starts in five minutes.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.19 — Music Venue Bar
// ============================================================
export const barLesson_24_19: BundledLesson = {
  id: "bar.approach.24.19",
  skill_id: "bar.approach",
  index: 19,
  title: "Konser Bari — Grup Hakkinda Sohbet",
  description:
    "Canli muzik bari. Sahnedeki grup hakkinda sohbet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.19.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "opening act",
      tr_translation: "Acilis grubu (asil grup oncesi)",
      example: "Are they the opening act or headliner?",
      example_tr: "Acilis mi yoksa ana grup mu?",
    },
    {
      id: "ex.24.19.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Konser molasinda barda. Yanindaki grup hakkinda sohbet aciyor.",
      npc_role: "Concertgoer at bar",
      setting: "Music venue bar during set break",
      turns: [
        {
          speaker: "npc",
          message:
            "These guys are way better live than on Spotify, huh?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|i know|right)(,)? (so much better|way better)",
            "(definitely|absolutely)(,)? (their energy is wild|the energy is great)",
            "(actually |to be honest)(,)? (i'?ve never heard them)",
            "(yeah|yes)(,)? (first time seeing them|never been)",
            "(this is my first time|i'?m discovering them tonight)",
          ],
          hint_tr:
            "Tepki: 'Yeah, way better live!' veya 'First time hearing them'.",
        },
        {
          speaker: "npc",
          message:
            "Their second album is the best. You been to a lot of their shows?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this is my first|first time)( seeing them)?",
            "(yeah|i'?ve seen them)( twice| a few times)?",
            "(i'?m a casual fan|just discovered them)",
            "(no)(,)? (just discovering them tonight)",
            "(not yet)(,)? (but this is great)",
          ],
          hint_tr:
            "Anlat: 'First time, but this is amazing'.",
        },
        {
          speaker: "npc",
          message:
            "Where you from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m from|originally from) (turkey|istanbul|europe)",
            "(i live here|local|in (\\w+))",
            "(visiting from|i'?m visiting) (turkey|abroad)",
            "(i'?m a |on an )?erasmus( student)?",
            "(traveling through|just passing through)",
          ],
          hint_tr:
            "Nere'sin: 'I'm from Istanbul' veya 'I'm on Erasmus'. Erasmus = ogrenci degisim.",
        },
        {
          speaker: "npc",
          message:
            "Cool — first time at this venue?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (first time|just walked in)",
            "(amazing place|loving the venue|great vibe)",
            "(yeah)(,)? (a friend recommended it)",
            "(no)(,)? (i'?ve been a few times)",
            "(yes)(,)? (the sound is great)",
          ],
          hint_tr:
            "Sohbet: 'Yes, first time — love the vibe'.",
        },
        {
          speaker: "npc",
          message:
            "Enjoy the rest of the set — they encore with a banger.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.20 — Dating App First Meet
// ============================================================
export const barLesson_24_20: BundledLesson = {
  id: "bar.approach.24.20",
  skill_id: "bar.approach",
  index: 20,
  title: "Dating App Bulusmasi — Ilk Tanima",
  description:
    "dating app/dating app eslesmesi ile barda ilk kez gorusuyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.20.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "in person",
      tr_translation: "Yuzyuze (telefondan farkli)",
      example: "Nice to meet you in person.",
      example_tr: "Yuzyuze tanismak guzel.",
    },
    {
      id: "ex.24.20.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Dating app eslesmesi seni bara cagirdi. Ilk goruyorsunuz.",
      npc_role: "Date from app",
      setting: "Bar first date",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey! You're — wait, are you (your name)? Sorry, recognizing from photos.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (that'?s me|i'?m (\\w+))",
            "(hi|hey)(,)? (nice to meet you|good to finally meet)",
            "(yes|yeah)(,)? (in person at last)",
            "(hey)(,)? (you look just like your photos)",
            "(haha|yeah)(,)? (it'?s me)",
          ],
          hint_tr:
            "Onayla: 'Yes, that's me — nice to finally meet'.",
        },
        {
          speaker: "npc",
          message:
            "Sorry I'm a little late — parking was a nightmare.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|no problem|all good)",
            "(don'?t worry|it'?s fine|happens)",
            "(i just got here|i wasn'?t waiting long)",
            "(no rush|take a sec to settle in)",
            "(yeah|i know)(,)? (parking is brutal)",
          ],
          hint_tr:
            "Kabul: 'No worries, just got here too'.",
        },
        {
          speaker: "npc",
          message:
            "Want to grab a drink? What're you in the mood for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(maybe |let'?s do )?(a |one )?(beer|wine|cocktail)( please)?",
            "(i'?m thinking|i could go for) (a beer|wine|cocktail)",
            "(let'?s see the menu first|let me check the menu)",
            "(what (are you|you) having|going to get)",
            "(a glass of |some )?(red|white) wine( sounds good)?",
          ],
          hint_tr:
            "Sec: 'Maybe a glass of wine?' veya 'What are you getting?'",
        },
        {
          speaker: "npc",
          message:
            "Cool, let me grab them. Same order?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me get them|i can grab them)(,)? (you sit)",
            "(sure|thanks)(,)? (i'?ll grab the next round)",
            "(splitting it )?(works for me)",
            "(thank you|appreciate it)",
            "(sounds good|perfect)(,)? (i'?ll cover next)",
          ],
          hint_tr:
            "Ucret paylasimi: 'Sure, I'll grab the next round'.",
        },
        {
          speaker: "npc",
          message:
            "Deal — be right back. So glad we finally met.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.21 — Solo Travel Bar Friendship (Erasmus)
// ============================================================
export const barLesson_24_21: BundledLesson = {
  id: "bar.approach.24.21",
  skill_id: "bar.approach",
  index: 21,
  title: "Solo Seyahat — Erasmus Sohbeti",
  description:
    "Yalniz seyahat ediyorsun (Erasmus). Bardaki biriyle arkadaslik.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.24.21.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Erasmus year",
      tr_translation: "Erasmus yili (AB ogrenci degisimi)",
      example: "I'm doing my Erasmus year in Berlin.",
      example_tr: "Berlin'de Erasmus yilimi yapiyorum.",
    },
    {
      id: "ex.24.21.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "solo traveling",
      tr_translation: "Tek basina seyahat etmek",
      example: "I'm solo traveling for two weeks.",
      example_tr: "Iki haftadir tek basima seyahat ediyorum.",
    },
    {
      id: "ex.24.21.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yalniz bir bardasin. Yanindaki biri seninle sohbet baslatiyor.",
      npc_role: "Friendly traveler at bar",
      setting: "Bar in Berlin/Barcelona",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, you here by yourself? Mind if I join?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|not at all)(,)? (go ahead|have a seat|please do)",
            "(of course|absolutely)(,)? (i'?d love the company)",
            "(yes|yeah)(,)? (solo traveling|by myself)",
            "(please)(,)? (sit down|join me)",
            "(yeah)(,)? (i was hoping to meet people)",
          ],
          hint_tr:
            "Davet et: 'Sure, please join' veya 'Yes, I'd love the company'.",
        },
        {
          speaker: "npc",
          message:
            "Sweet. I'm Mark, from Canada. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |hi |hey )(\\w+)(,)? (from |i'?m from )?(turkey|istanbul)",
            "(i'?m from turkey|istanbul)(,)? (i'?m )(\\w+)",
            "(\\w+)(,)? (i'?m doing my erasmus|on erasmus)",
            "(turkey|istanbul)(,)? (i'?m here for erasmus)",
            "(\\w+) (from turkey)(,)? (on erasmus this year)",
          ],
          hint_tr:
            "Tanit: 'I'm [name] from Turkey, doing my Erasmus year here'. Erasmus = AB ogrenci programi.",
        },
        {
          speaker: "npc",
          message:
            "Erasmus, cool! How long are you here for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the whole|the entire) (year|semester|academic year)",
            "(\\d+) months",
            "(until|through) (june|may|next summer)",
            "(this whole semester|the full year)",
            "(i just arrived|i started last month)",
          ],
          hint_tr:
            "Sure: 'The whole year' veya 'Until June'.",
        },
        {
          speaker: "npc",
          message:
            "Awesome. You like it here so far?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|love it|amazing)(,)? (different from istanbul|different from home)",
            "(it'?s great|i love it)(,)? (but i miss (turkish food|home))",
            "(amazing|wonderful)(,)? (the people are nice)",
            "(still adjusting|getting used to it)",
            "(yes)(,)? (the culture is so different)",
          ],
          hint_tr:
            "Anlat: 'Love it — different from Istanbul, but I miss the food'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Want to grab another drink? My round.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.22 — Buying a Stranger a Drink
// ============================================================
export const barLesson_24_22: BundledLesson = {
  id: "bar.approach.24.22",
  skill_id: "bar.approach",
  index: 22,
  title: "Yabanciya Icki Ismarlama",
  description:
    "Bardaki birine icki ismarliyorsun — 'on me' kalibi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.22.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "on me",
      tr_translation: "Benden, ikram (ben oduyorum)",
      example: "Your drink's on me.",
      example_tr: "Icicegin benden.",
    },
    {
      id: "ex.24.22.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bardaki birine icki ismarliyorsun. Onlar kabul ediyor mu?",
      npc_role: "Stranger at the bar",
      setting: "Bar, casual flirt",
      turns: [
        {
          speaker: "npc",
          message:
            "Oh, did the bartender say this was for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (it'?s on me|i sent it over)",
            "(yes)(,)? (just wanted to say (hi|hello))",
            "(yeah)(,)? (saw you and thought i'?d say hi)",
            "(i did)(,)? (no pressure|just a small gesture)",
            "(yes)(,)? (figured why not)",
          ],
          hint_tr:
            "Onayla: 'Yeah, on me — just wanted to say hi'. Baski olmadan.",
        },
        {
          speaker: "npc",
          message:
            "That's really nice. Want to come sit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|yeah|i'?d love to)",
            "(if (that'?s|it'?s) okay|if you don'?t mind)",
            "(absolutely|of course)",
            "(only if you (want|don'?t mind))",
            "(yeah)(,)? (love to|let me come over)",
          ],
          hint_tr:
            "Kabul: 'Sure, I'd love to' — natural.",
        },
        {
          speaker: "npc",
          message:
            "Cool. I'm Alex. What's your name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |i am )(\\w+)",
            "(\\w+)(,)? (nice to meet you)",
            "(hey alex|hi alex)(,)? (i'?m )(\\w+)",
            "(\\w+)(,)? (nice)",
            "(call me )(\\w+)",
          ],
          hint_tr:
            "Tanit: 'I'm [name], nice to meet you'.",
        },
        {
          speaker: "npc",
          message:
            "So, you do this often?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha )?(no|nope)(,)? (first time|actually)",
            "(not usually|not really|i don'?t normally)",
            "(only when (i see someone|it feels right))",
            "(no)(,)? (just felt natural tonight)",
            "(first time honestly|never done this before)",
          ],
          hint_tr:
            "Cevap: 'No, first time actually'. Genelde 'no' demek dogal.",
        },
        {
          speaker: "npc",
          message:
            "Well, I appreciate it. Cheers.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.23 — Ex Sighting
// ============================================================
export const barLesson_24_23: BundledLesson = {
  id: "bar.approach.24.23",
  skill_id: "bar.approach",
  index: 23,
  title: "Eski Sevgili Karsisina Cikti",
  description:
    "Eski sevgilin barda. Kacis mi, selam mi, sohbet mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.23.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "fancy seeing you",
      tr_translation: "Seni gormek surpriz / seni gormek ilginc",
      example: "Fancy seeing you here.",
      example_tr: "Seni burda gormek surpriz.",
    },
    {
      id: "ex.24.23.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Eski sevgilini bardan goruyorsun. Garip an. Selam veriyorsun.",
      npc_role: "Ex",
      setting: "Bar, unexpected meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Oh — hey. Didn't expect to see you here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)(,)? (fancy seeing you here|small world)",
            "(yeah|haha)(,)? (just out with friends)",
            "(hi)(,)? (how (are you|have you been))",
            "(oh )?(hey)(,)? (didn'?t expect to see you either)",
            "(hi)(,)? (long time)",
          ],
          hint_tr:
            "Sicak ama mesafeli: 'Hey, fancy seeing you'. Garipligi kabul et.",
        },
        {
          speaker: "npc",
          message:
            "How have you been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good|great|pretty good)(,)? (you)\\??",
            "(doing well|not bad)(,)? (yourself)\\??",
            "(busy|working a lot)(,)? (but good)",
            "(can'?t complain|things are good)",
            "(better|getting there)",
          ],
          hint_tr:
            "Kisa: 'Good, you?' Detaya girme.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, same. Work's busy. Anyway — your friends look fun.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (we'?re just catching up|out for the night)",
            "(thanks|yeah)(,)? (your group too|you look like fun)",
            "(yeah)(,)? (well|anyway)(,)? (good seeing you)",
            "(thanks)(,)? (it was good to see you)",
            "(yeah)(,)? (catching up)",
          ],
          hint_tr:
            "Sonlandir: 'Yeah, good seeing you'.",
        },
        {
          speaker: "npc",
          message:
            "Take care.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|take care)",
            "(see you around|all the best)",
            "(yeah|same)(,)? (take care)",
            "(bye|take care)",
            "(all the best)",
          ],
          hint_tr:
            "Bitir: 'You too, take care'. Kibarca uzaklas.",
        },
        {
          speaker: "npc",
          message:
            "Bye.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.24 — Birthday Bar Crawl
// ============================================================
export const barLesson_24_24: BundledLesson = {
  id: "bar.approach.24.24",
  skill_id: "bar.approach",
  index: 24,
  title: "Dogum Gunu Bar Crawl",
  description:
    "Dogum gunu bar crawl. Grup dagilmis, telefondan toparlama.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.24.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "bar crawl",
      tr_translation: "Bar gezme turu (birden cok bar)",
      example: "We're on a bar crawl.",
      example_tr: "Bar crawl yapiyoruz.",
    },
    {
      id: "ex.24.24.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bar crawl'da grubu kaybettin. Bir arkadasini ariyorsun.",
      npc_role: "Friend on phone",
      setting: "Outside bar, phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — where are you? We lost you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |still |i'?m still )?(at the last bar|outside)",
            "(near|by|outside) (the )?(\\w+ bar|first place|second bar)",
            "(i don'?t know exactly)(,)? (some bar called (\\w+))",
            "(i'?m on (\\w+) street)",
            "(across from|next to) (the )?(big sign|park|venue)",
          ],
          hint_tr:
            "Yer soyle: 'Outside the second bar'.",
        },
        {
          speaker: "npc",
          message:
            "Cool — we're at the karaoke place down the street. Two blocks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it|on my way)",
            "(which direction|which way)\\??",
            "(two blocks|which side)\\??",
            "(coming|i'?ll head over|i'?ll be there)",
            "(give me a minute|be there in five)",
          ],
          hint_tr:
            "Hareket: 'Got it — on my way'.",
        },
        {
          speaker: "npc",
          message:
            "Just walk down Main, you'll see the neon sign.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|okay)",
            "(walking now|heading there)",
            "(see you in (a few|five))",
            "(thanks|got it)",
            "(be there soon)",
          ],
          hint_tr:
            "Hareket: 'Perfect, walking now'.",
        },
        {
          speaker: "npc",
          message:
            "Hurry up — we ordered shots and yours is melting.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(coming|on my way|almost there)",
            "(haha|lol)(,)? (running)",
            "(start without me|drink mine if it melts)",
            "(two minutes|i'?m close)",
            "(don'?t let it melt|i'?m sprinting)",
          ],
          hint_tr:
            "Eglence: 'Coming! Don't let it melt!'",
        },
        {
          speaker: "npc",
          message:
            "See you in a sec.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.25 — Karaoke Queue
// ============================================================
export const barLesson_24_25: BundledLesson = {
  id: "bar.approach.24.25",
  skill_id: "bar.approach",
  index: 25,
  title: "Karaoke — Siraya Gir",
  description:
    "Karaoke bari. Sira liderine sarki ekletme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.25.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "put my name down",
      tr_translation: "Adimi yazdir (sira icin)",
      example: "Can I put my name down for a song?",
      example_tr: "Bir sarki icin adimi yazdirabilir miyim?",
    },
    {
      id: "ex.24.25.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Karaoke gecesi. KJ'e (karaoke jockey) sarki ekletmek istiyorsun.",
      npc_role: "Karaoke jockey (KJ)",
      setting: "Karaoke bar",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, want to sign up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (can i|could i) (put my name down|sign up)",
            "(yes)(,)? (how does it work|what'?s the process)",
            "(yeah)(,)? (first time karaoking)",
            "(how long'?s the wait|when'?s my turn)",
            "(yes please|sign me up)",
          ],
          hint_tr:
            "Sira: 'Yeah, can I put my name down?'",
        },
        {
          speaker: "npc",
          message:
            "Sure. What's your name and what song?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |my name'?s )(\\w+)(,)? (and|i'?d like) (\\w+) (by|from) (\\w+)",
            "(\\w+)(,)? (i'?ll do|how about) (\\w+)",
            "(name'?s )(\\w+)(,)? (song'?s )(\\w+)",
            "(i'?m )(\\w+)(,)? (something by (\\w+))",
            "(do you have|got) (\\w+) by (\\w+)",
          ],
          hint_tr:
            "Tanit + sarki: 'I'm [name], song's [song] by [artist]'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Wait's about thirty minutes, okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|sounds good|that works)",
            "(thirty minutes|okay)(,)? (perfect)",
            "(any way to (move up|sing earlier))",
            "(thanks|that'?s fine)",
            "(yeah)(,)? (i'?ll grab a drink)",
          ],
          hint_tr:
            "Kabul: 'Sounds good, I'll grab a drink'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Pro tip — don't sing too fast at the start. Warm up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thanks for the tip|got it)",
            "(i'?ll keep that in mind|noted)",
            "(any other tips|advice)",
            "(haha|appreciate it)",
            "(thanks)(,)? (i'?ll warm up)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for the tip!'",
        },
        {
          speaker: "npc",
          message:
            "Good luck, see you on stage.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.26 — Industry Bar (Türk Staff Abroad)
// ============================================================
export const barLesson_24_26: BundledLesson = {
  id: "bar.approach.24.26",
  skill_id: "bar.approach",
  index: 26,
  title: "Industry Bar — Off-Duty Bartender (Türk)",
  description:
    "Industry bar (sektor calisanlarinin gectigi yer). Off-duty bartender ile sohbet — Turk olabilir!",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.24.26.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "industry bar",
      tr_translation: "Sektor bari (servis sektorunde calisanlarin gittigi)",
      example: "This place is an industry bar.",
      example_tr: "Burasi bir industry bar.",
    },
    {
      id: "ex.24.26.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "off-duty",
      tr_translation: "Mesai disi, izinli",
      example: "I'm off-duty tonight.",
      example_tr: "Bu aksam mesai disindayim.",
    },
    {
      id: "ex.24.26.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Industry bar'da yaninda oturan kisi off-duty bartender. Konusunca Turk oldugu cikiyor.",
      npc_role: "Off-duty Turkish bartender abroad",
      setting: "Industry bar after midnight",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, you new in the neighborhood?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (just visiting|new here|on erasmus)",
            "(first time|in town for a bit)",
            "(yes)(,)? (i'?m from turkey)",
            "(yeah)(,)? (i'?m from istanbul)",
            "(visiting|exploring the city)",
          ],
          hint_tr:
            "Tanit: 'Yeah, from Turkey'.",
        },
        {
          speaker: "npc",
          message:
            "Turkey? Sen Turk musun? I'm from Izmir!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no way|what a coincidence|cok kucuk dunya)",
            "(haha|wow)(,)? (small world)",
            "(yes|evet)(,)? (i'?m from istanbul)",
            "(omg|inanmiyorum)(,)? (you'?re kidding)",
            "(small world|how funny)",
          ],
          hint_tr:
            "Tepki: 'No way! Small world!' Turk olunca ingilizce devam et — pratik.",
        },
        {
          speaker: "npc",
          message:
            "What brings you here? Working, traveling?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m doing my )?erasmus( year| semester)?",
            "(i'?m on erasmus|studying here)",
            "(traveling|on vacation|backpacking)",
            "(visiting friends|on a trip)",
            "(just exploring|gap year)",
          ],
          hint_tr:
            "Sebep: 'I'm on Erasmus' veya 'Traveling'.",
        },
        {
          speaker: "npc",
          message:
            "Nice. I came here for work three years ago. Tough at first but you get used to it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how is it|what'?s it like)( here)?",
            "(do you miss home|miss turkey)\\??",
            "(yeah|i imagine)(,)? (must be (tough|hard) at first)",
            "(any advice for someone new|tips)",
            "(do you (go back|visit home) often)",
          ],
          hint_tr:
            "Tavsiye iste: 'Any advice for someone new?'",
        },
        {
          speaker: "npc",
          message:
            "Mesela — Turk meals are far, but I found a place. Want the address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|please)",
            "(would love that|that would be amazing)",
            "(thanks|that'?s so kind)",
            "(yes please)(,)? (send it)",
            "(yeah)(,)? (i'?m dying for some real turkish food)",
          ],
          hint_tr:
            "Kabul: 'Yes, please — would love that!'",
        },
        {
          speaker: "npc",
          message:
            "I'll text you. Next round's on me — welcome to the city.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.27 — Discreetly Asking About Someone
// ============================================================
export const barLesson_24_27: BundledLesson = {
  id: "bar.approach.24.27",
  skill_id: "bar.approach",
  index: 27,
  title: "Discreet — 'Who's That?'",
  description:
    "Bardaki birini biri ile gizlice sor. Bahane.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.24.27.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "any idea who",
      tr_translation: "Kim oldugu hakkinda fikrin var mi?",
      example: "Any idea who that is?",
      example_tr: "Kim oldugu hakkinda fikrin var mi?",
    },
    {
      id: "ex.24.27.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bardaki bir kisinin kim oldugunu yaninda oturan birine gizlice soruyorsun.",
      npc_role: "Friend or stranger at bar",
      setting: "Bar, discreet inquiry",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, what's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)(,)? (any idea who that is)\\??",
            "(do you know|recognize) (that person|the girl|the guy) over there",
            "(quick question)(,)? (who is that)",
            "(don'?t look right now|don'?t be obvious)(,)? (but who'?s )(that)",
            "(do you know|have you seen) (the one in the (red|blue|black))",
          ],
          hint_tr:
            "Gizli sor: 'Any idea who that is?'",
        },
        {
          speaker: "npc",
          message:
            "Which one? Red shirt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (the (red shirt|one in red))",
            "(no|other one|over by the (window|bar))",
            "(the (\\w+) one)(,)? (by the (window|wall))",
            "(yeah)(,)? (with the (curly hair|glasses))",
            "(actually )?(no)(,)? (the (\\w+))",
          ],
          hint_tr:
            "Belirt: 'Yeah, red shirt' veya 'No, the one by the window'.",
        },
        {
          speaker: "npc",
          message:
            "Oh, that's Sam — works at the venue. Pretty cool.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|good to know)",
            "(do they come here often)\\??",
            "(thanks)(,)? (just curious)",
            "(do you know them well)\\??",
            "(might say (hi|hello))",
          ],
          hint_tr:
            "Bilgi al: 'Thanks — do they come here often?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, every Friday. Want me to introduce you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |not (right now|yet))(,)? (just curious)",
            "(maybe|sure|that would be nice)",
            "(let me see|let me think)",
            "(actually|yeah)(,)? (that would be great)",
            "(no thanks|i'?ll say hi later)",
          ],
          hint_tr:
            "Sec: 'No, just curious' veya 'Sure, that would be nice'.",
        },
        {
          speaker: "npc",
          message:
            "Cool — whenever you're ready, just say.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.28 — Saving a Seat
// ============================================================
export const barLesson_24_28: BundledLesson = {
  id: "bar.approach.24.28",
  skill_id: "bar.approach",
  index: 28,
  title: "Arkadas Icin Yer Tut",
  description:
    "Bos koltugu arkadasin icin tutuyorsun. Birisi oturmak istiyor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.24.28.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "saving this seat",
      tr_translation: "Bu koltugu tutuyorum (arkadasim icin)",
      example: "Sorry, I'm saving this seat.",
      example_tr: "Ozur dilerim, bu koltugu tutuyorum.",
    },
    {
      id: "ex.24.28.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yanindaki koltuk bos. Arkadasin geliyor. Birisi oturmak istiyor.",
      npc_role: "Stranger looking for seat",
      setting: "Busy bar",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, is this seat taken?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sorry)(,)? (i'?m saving it|it'?s taken)",
            "(sorry)(,)? (i'?m saving it for a friend)",
            "(yes)(,)? (my friend'?s on their way)",
            "(actually )?(yeah)(,)? (saving it)",
            "(sorry)(,)? (it'?s for someone)",
          ],
          hint_tr:
            "Tut: 'Sorry, I'm saving it for a friend'.",
        },
        {
          speaker: "npc",
          message:
            "Oh, okay. Any idea when they're coming?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any minute|soon|in a few minutes)",
            "(should be here|on their way|five minutes)",
            "(i'?m not sure|i'?ll text and check)",
            "(any second now)",
            "(within ten|in like ten)",
          ],
          hint_tr:
            "Sure: 'Any minute' veya 'In five'.",
        },
        {
          speaker: "npc",
          message:
            "Cool — mind if I stand here in the meantime?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|of course)(,)? (no problem)",
            "(go ahead|all good)",
            "(absolutely)",
            "(yeah)(,)? (totally fine)",
            "(sure)(,)? (just till they show)",
          ],
          hint_tr:
            "Izin: 'Sure, go ahead'.",
        },
        {
          speaker: "npc",
          message:
            "Thanks. I'll grab a drink in the meantime.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|sounds good)",
            "(cool)",
            "(perfect)",
            "(have a good night|enjoy)",
            "(thanks for understanding)",
          ],
          hint_tr:
            "Sonlandir: 'No problem'.",
        },
        {
          speaker: "npc",
          message:
            "Cheers, friend.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.29 — Cab Share Home
// ============================================================
export const barLesson_24_29: BundledLesson = {
  id: "bar.approach.24.29",
  skill_id: "bar.approach",
  index: 29,
  title: "Eve Taksi Paylas",
  description:
    "Aksamin sonu — yeni tanidigin biri ile taksi/Uber paylasiyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.29.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "split a cab",
      tr_translation: "Taksi paylasmak (ucret de paylasilir)",
      example: "Want to split a cab?",
      example_tr: "Taksi paylasalim mi?",
    },
    {
      id: "ex.24.29.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni tanidigin biri ile cikis sirasinda taksi paylasmayi oneriyorsun.",
      npc_role: "Bar acquaintance",
      setting: "Outside bar, end of night",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, calling it. Need to find a cab.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(me too|same)(,)? (want to share a cab|split an uber)",
            "(want to |do you want to )?(split a cab|share an uber)",
            "(which direction|which way) (are you headed)\\??",
            "(where do you live|where you headed)\\??",
            "(if you'?re going (\\w+) way|same direction)",
          ],
          hint_tr:
            "Onerme: 'Want to split a cab?' veya 'Which direction?'",
        },
        {
          speaker: "npc",
          message:
            "I'm in Brooklyn — Williamsburg area. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m in|i'?m near|by) (\\w+|brooklyn|manhattan|queens)",
            "(perfect|same direction)(,)? (i'?m in (\\w+))",
            "(opposite way|other side)(,)? (probably easier to split)",
            "(yeah)(,)? (i'?m close to (\\w+))",
            "(not too far|same general direction)",
          ],
          hint_tr:
            "Yer soyle: 'I'm near Williamsburg too' veya 'Different direction'.",
        },
        {
          speaker: "npc",
          message:
            "Cool — I'll call the Uber. You okay paying Venmo after?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure)(,)? (venmo works)",
            "(actually )?(i don'?t have venmo)(,)? (paypal|cash|other app)\\?",
            "(can we do |is )?(cash|paypal|zelle) (instead|okay)",
            "(sounds good|that works)",
            "(in turkey we use|i'?ll send it via) (\\w+)",
          ],
          hint_tr:
            "Ode: 'Sure, Venmo works'. Turkiye'den ise: 'I don't have Venmo — cash?'",
        },
        {
          speaker: "npc",
          message:
            "Cash is fine. Uber's two minutes away.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it)",
            "(thanks for organizing|for splitting)",
            "(cool|sounds good)",
            "(thanks)(,)? (saved me the hassle)",
            "(see you in the car|let'?s go)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for organizing'.",
        },
        {
          speaker: "npc",
          message:
            "It was great hanging tonight. Glad we met.",
        },
      ],
    },
  ],
};

// ============================================================
// EXPORT ARRAY
// ============================================================
export const barDeepLessons: BundledLesson[] = [
  // order.bar drink depth
  barLesson_7_14,
  barLesson_7_15,
  barLesson_7_16,
  barLesson_7_17,
  barLesson_7_18,
  barLesson_7_19,
  barLesson_7_20,
  barLesson_7_21,
  barLesson_7_22,
  barLesson_7_23,
  barLesson_7_24,
  barLesson_7_25,
  barLesson_7_26,
  barLesson_7_27,
  barLesson_7_28,
  // bar.approach social depth
  barLesson_24_15,
  barLesson_24_16,
  barLesson_24_17,
  barLesson_24_18,
  barLesson_24_19,
  barLesson_24_20,
  barLesson_24_21,
  barLesson_24_22,
  barLesson_24_23,
  barLesson_24_24,
  barLesson_24_25,
  barLesson_24_26,
  barLesson_24_27,
  barLesson_24_28,
  barLesson_24_29,
];
