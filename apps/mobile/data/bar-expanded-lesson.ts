// Bar expanded lessons — depth pack to extend bar mode beyond 1-day playthrough.
// 6 new drink-ordering variants (skill: order.bar, IDs 7.8 -> 7.13)
// 6 new bar approach / social variants (skill: bar.approach, IDs 24.9 -> 24.14)
//
// NOTE on ID schema: existing bar-lesson.ts already uses 7.1-7.7, so this pack
// continues from 7.8. The task brief mentioned 7.4-7.9 but those collide, so
// we bumped up to keep registry clean. Same for 24.x (existing uses 24.1-24.8).
//
// CEFR distribution: 4x A2, 5x B1, 3x B2. Voice-first design — every user turn
// has 5-8 acceptable_patterns covering contractions, modal variants, and
// informal slang typical of Turkish learners abroad.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 7.8 — Sports Bar (Maç Izlerken Sipariş) — A2
// ============================================================
export const barLesson_7_8: BundledLesson = {
  id: "order.bar.7.8",
  skill_id: "order.bar",
  index: 8,
  title: "Sports Bar — Maç Izlerken Sipariş",
  description:
    "Gürültülü sports bar, maç ikinci yarıda. Bartender'a sipariş ver, skoru da konuş.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.7.8.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "what's the score",
      tr_translation: "Skor ne / Maç kaç kaç",
      example: "Hey, what's the score? Who's winning?",
      example_tr: "Selam, skor ne? Kim önde?",
    },
    {
      id: "ex.7.8.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "another round",
      tr_translation: "Aynısından bir tur daha (grup için)",
      example: "Another round for the table when you get a chance.",
      example_tr: "Vaktiniz olunca masaya aynısından bir tur.",
    },
    {
      id: "ex.7.8.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sports bar, maç ikinci yarıda. Bartender meşgul ama dikkat çekmen lazım. Skor + sipariş.",
      npc_role: "Bartender",
      setting: "Loud sports bar, evening, game on TV",
      turns: [
        {
          speaker: "npc",
          message: "Hey buddy, what'll it be?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) i (get|have) (a|one) (beer|lager|ipa|pint)",
            "(i'?ll have|i'?d like) (a|one) (beer|lager|pint|pale ale)",
            "(a|one) (beer|pint|lager)( please)?",
            "(whatever'?s|what'?s) on (tap|draft)",
            "(give me|hit me with) (a|one) (beer|pint)",
            "(could i get|i'?ll take) a pint of (lager|ipa|something light)",
          ],
          hint_tr:
            "Bira siparişi: 'Could I get a pint?' veya 'Whatever's on tap, please'.",
        },
        {
          speaker: "npc",
          message: "You got it. Watching the game?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure)[,. ]+ (what'?s|hey what'?s) the score",
            "(who'?s |whos )(winning|up|ahead|leading)",
            "(yeah|yes)[,. ]+ (any idea|do you know) (the score|who'?s winning)",
            "(i just got here|just walked in)[,. ]+ (what'?s the score|whats happening)",
            "(yeah|yes|definitely)[,. ]+ (is it close|how'?s the game going)",
            "(catching up|trying to catch up)[,. ]+ (whats|whats the) score",
          ],
          hint_tr:
            "'What's the score?' = skor sor. 'Who's winning?' = kim önde sor.",
        },
        {
          speaker: "npc",
          message: "Two-one, away team. Real close one tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nice|wow|cool|sweet|oh nice|awesome)",
            "(damn|that'?s) (close|tight|intense)",
            "(should be|gonna be) (a good|an exciting) (game|match|second half)",
            "(uhh|i mean|kind of) (i was hoping|wanted) the (home team|other side)",
            "(any idea|do you know) (how much|how long) (is|'?s) (left|to go)",
            "(perfect|right on time|good timing)",
          ],
          hint_tr:
            "Tepki ver: 'Oh nice, close game!' veya 'Damn, that's intense'.",
        },
        {
          speaker: "npc",
          message: "Yeah, like ten minutes left. You want a tab?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure)[,. ]+ (start|open) a tab( please)?",
            "(yeah|yes|please)[,. ]+ (here'?s|here is) my card",
            "(sure|yeah)[,. ]+ tab (works|sounds good|please)",
            "(no thanks|just this one|pay as i go)",
            "(let'?s|i'?ll) (do|open) a tab",
            "(uhh|i mean|sure) tab please",
          ],
          hint_tr:
            "Tab aç: 'Yeah, start a tab' veya tek içkilik: 'No thanks, just this one'.",
        },
        {
          speaker: "npc",
          message: "Cool. Enjoy the game.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.9 — Special Cocktail Menu (Imza Içeceği Denemek) — B1
// ============================================================
export const barLesson_7_9: BundledLesson = {
  id: "order.bar.7.9",
  skill_id: "order.bar",
  index: 9,
  title: "Special Cocktail Menu — Imza Içeceği",
  description:
    "Cocktail menü gösterilmiş, sen bartender'ın imza içeceğini sor + iyi bir öneri al.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.7.9.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "bartender's special",
      tr_translation: "Bartender'ın özel önerisi / imzası",
      example: "What's the bartender's special tonight?",
      example_tr: "Bu gece bartender'ın özel önerisi ne?",
    },
    {
      id: "ex.7.9.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "off the menu",
      tr_translation: "Menüde olmayan (gizli/özel)",
      example: "Got anything good off the menu?",
      example_tr: "Menüde olmayan güzel bir şey var mı?",
    },
    {
      id: "ex.7.9.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Iyi bir cocktail bar'dasin. Menüye baktın ama bartender'ın önerisi sana daha güvenli.",
      npc_role: "Bartender",
      setting: "Upscale cocktail bar, weekend",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, picked something out yet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not yet|still looking|kind of stuck)",
            "(uhh|i mean)[,. ]+ what (would|do) you recommend",
            "(what'?s|hows) the (bartender'?s special|signature|house special)",
            "(any|got any) (recommendations|good ones|hidden gems)",
            "(could you|can you) (suggest|recommend) something",
            "(i'?m new here|first time)[,. ]+ (any recs|what should i try)",
          ],
          hint_tr:
            "Öneri iste: 'What would you recommend?' veya 'What's your signature?'",
        },
        {
          speaker: "npc",
          message:
            "Sure. Are you into something boozy and bitter, or sweet and fruity?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(boozy|bitter|strong|not too sweet)( please)?",
            "(more|kind of|kinda) (boozy|bitter|strong)",
            "(definitely|probably) (not too sweet|on the bitter side)",
            "(something|anything) (refreshing|crisp|light)",
            "(uhh|i mean) (sweet but not too|fruity but balanced)",
            "(i love|i'?m into) (bitter|smoky|whiskey-based) (drinks|cocktails)",
            "(surprise me|your call|dealer'?s choice)",
          ],
          hint_tr:
            "Tercih söyle: 'Not too sweet, please' veya 'I love bitter drinks'.",
        },
        {
          speaker: "npc",
          message:
            "Then you'll love our smoked negroni. Got mezcal and orange bitters. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds|that sounds) (great|amazing|perfect|good)",
            "(yeah|yes|sure)[,. ]+ (let'?s do it|let'?s try it|i'?ll have one)",
            "(perfect|amazing|love it|sold)",
            "(uhh|i mean) i'?ll (go with that|take one|try it)",
            "(i'?ll have|let me try) (the smoked negroni|that one|one of those)",
            "(could i|can i) (get|try|have) (one|that|it)",
          ],
          hint_tr:
            "Kabul: 'Sounds amazing, I'll try one' veya 'Let's do it'.",
        },
        {
          speaker: "npc",
          message: "Coming right up. Want to start a tab?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure)[,. ]+ (please|that works|sounds good)",
            "(yes|sure)[,. ]+ (start|open) a tab",
            "(here'?s|here is) my card",
            "(tab works|tab please|tab sounds good)",
            "(no thanks|just this one|pay as i go)",
            "(uhh|sure) (tab please|please)",
          ],
          hint_tr:
            "Onay + kart: 'Yeah, here's my card' veya 'Tab works, thanks'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.10 — Buying a Round for Friends (Tur Ismarlamak) — A2
// ============================================================
export const barLesson_7_10: BundledLesson = {
  id: "order.bar.7.10",
  skill_id: "order.bar",
  index: 10,
  title: "Buying a Round — Arkadaşlara Tur",
  description:
    "Arkadaşlar bardasin, sen bir tur ısmarlıyorsun. Bartender'a grup siparişi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.10.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "a round for the table",
      tr_translation: "Masaya bir tur (herkes için)",
      example: "Can I get a round for the table?",
      example_tr: "Masaya bir tur alabilir miyim?",
    },
    {
      id: "ex.7.10.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "put it on my tab",
      tr_translation: "Hesabıma ekle / Hesabıma yaz",
      example: "Put it on my tab, please.",
      example_tr: "Hesabıma yaz, lütfen.",
    },
    {
      id: "ex.7.10.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Arkadaş grubu masada, sen bara gidip herkese bir tur ısmarlıyorsun.",
      npc_role: "Bartender",
      setting: "Pub, group of 4 friends at table behind you",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) i (get|order) a round for (the table|my friends|us)",
            "(i'?d like|i want) (to get|to buy) a round for (the table|my group)",
            "(four|five|three) (beers|drinks|ipas)( please)?",
            "(could i|can i) (get|order) (four|five|three) (drinks|beers)",
            "(a round|drinks) for (the|that) table( please)?",
            "(uhh|i mean) (a round|some drinks) for (us|the group)",
          ],
          hint_tr:
            "Grup sipariş: 'A round for the table' veya 'Four beers, please'.",
        },
        {
          speaker: "npc",
          message: "Sure thing. What's everyone drinking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|three|four) (beers|ipas|lagers) and (a|one|two) (wine|gin and tonic|cocktail)",
            "(three|two) (lagers|ipas) and (a|some) (wine|gin tonics)",
            "(uhh|let me think|hold on)[,. ]+ (two|three) (beers|ipas)",
            "(mostly|just) (beers|lagers|ipas)( for everyone)?",
            "(can you|could you) (do|make) (two beers|three ipas|a mix)",
            "(i'?ll have|i'?d like) (two|three) (of these|of those|beers)",
          ],
          hint_tr:
            "Sayı + içki: 'Three lagers and a wine' veya 'Two beers and a gin tonic'.",
        },
        {
          speaker: "npc",
          message: "Got it. You paying now or want me to start a tab?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could you|can you) (start|open) a tab",
            "(start|open) a tab( please)?",
            "(put it|just put it) on (a |my )?tab",
            "(here'?s|here is) my card[,. ]+ (start|open) a tab",
            "(i'?ll|let'?s) (start|open) a tab",
            "(i'?ll pay|let me pay) now",
            "(card please|i'?ll pay with card)",
          ],
          hint_tr:
            "Tab aç: 'Start a tab, here's my card' veya direkt öde: 'Card, please'.",
        },
        {
          speaker: "npc",
          message: "Cool. I'll bring those over in a sec.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|cheers|perfect)",
            "(no rush|whenever|take your time)",
            "(sounds|that sounds) (good|great|perfect)",
            "(thanks|cheers)[,. ]+ (we'?ll be|i'?ll be) (at|over at) (that|the) table",
            "(you'?re a|you'?re the) (legend|hero|best)",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks, no rush' veya 'Cheers, we'll be at that table'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.11 — Late Night / Last Call (Final Sipariş) — A2
// ============================================================
export const barLesson_7_11: BundledLesson = {
  id: "order.bar.7.11",
  skill_id: "order.bar",
  index: 11,
  title: "Last Call — Son Sipariş",
  description:
    "Bar kapanıyor, bartender 'last call' dedi. Sen son siparişini ver veya çık.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.11.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "what time do you close",
      tr_translation: "Saat kaçta kapanıyorsunuz?",
      example: "Hey, what time do you close?",
      example_tr: "Selam, saat kaçta kapatıyorsunuz?",
    },
    {
      id: "ex.7.11.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "one for the road",
      tr_translation: "Yola çıkmadan son bir tane",
      example: "One for the road, please.",
      example_tr: "Yola çıkmadan son bir tane, lütfen.",
    },
    {
      id: "ex.7.11.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bar yarıdan az kalabalık, geç saat. Bartender last call anonsu yaptı.",
      npc_role: "Bartender",
      setting: "Late-night bar, 1 AM, closing soon",
      turns: [
        {
          speaker: "npc",
          message: "Last call, folks! Anyone want one more?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure)[,. ]+ (one more|another one|same again)",
            "(could|can) i (get|have) (one more|another)( beer| ipa| whiskey)?",
            "(one for the road|nightcap)( please)?",
            "(uhh|i mean) (yeah|sure)[,. ]+ (one more|same again)",
            "(i'?ll|let me) (have|grab) (one more|a final one)",
            "(no thanks|i'?m good|i'?ll pass)",
            "(actually|nope)[,. ]+ (i'?m good|i'?m done)",
          ],
          hint_tr:
            "Son içki: 'Yeah, one more' veya 'One for the road, please'. Bitir: 'I'm good, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "You got it. Same as before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|same|same again|same please)",
            "(actually|hold on) (let me|i'?ll) (switch|try) (something|a different)",
            "(could i|can i) (switch|change) to (a|an) (ipa|whiskey|gin tonic)",
            "(maybe|how about) (a|an) (ipa|whiskey|gin tonic) this time",
            "(uhh|i mean) (same is good|same works)",
            "(yeah|yes)[,. ]+ (same|same one)( please)?",
          ],
          hint_tr:
            "Aynı: 'Same, please' veya değişiklik: 'Switch to a whiskey this time'.",
        },
        {
          speaker: "npc",
          message: "Cool. What time do you need to be out by?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what time|when) do you close",
            "(uhh|i mean) (when|what time) (are you|do you) (closing|close)",
            "(no rush|i'?m flexible|whenever)",
            "(i can|i'?ll) (leave|head out) (whenever|in a bit|when you close)",
            "(i'?ll|i should) (head out|be out) (in|around) (ten|fifteen|twenty) (minutes|min)",
            "(when'?s|when is) (last call|closing)",
          ],
          hint_tr:
            "Saat sor: 'What time do you close?' veya 'I'll head out in fifteen'.",
        },
        {
          speaker: "npc",
          message: "We close at two. So you've got like twenty minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sounds good|works for me|got it)",
            "(thanks|appreciate it|cool)",
            "(uhh|i mean) (i'?ll just|let me) (close out|settle up) (now|after this)",
            "(can|could) you (close me out|just close it out)",
            "(i'?ll|let me) (finish this|finish my drink) and (head out|take off|leave)",
            "(thanks|cool)[,. ]+ (i'?ll|i should) (be out|head out|leave) (soon|by then)",
          ],
          hint_tr:
            "Onay + plan: 'Perfect, I'll finish and head out' veya 'Close me out, please'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.12 — Designated Driver (Alkolsüz Sipariş) — B1
// ============================================================
export const barLesson_7_12: BundledLesson = {
  id: "order.bar.7.12",
  skill_id: "order.bar",
  index: 12,
  title: "Designated Driver — Alkolsüz Sipariş",
  description:
    "Bu gece sen araba kullanıyorsun. Bartender'a alkolsüz sipariş ver, awkward olmadan.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.7.12.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "designated driver",
      tr_translation: "Grubun ayık sürücüsü (alkol içmeyen)",
      example: "I'm the designated driver tonight.",
      example_tr: "Bu gece grubun ayık sürücüsü benim.",
    },
    {
      id: "ex.7.12.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "mocktail",
      tr_translation: "Alkolsüz kokteyl",
      example: "Got any mocktails on the menu?",
      example_tr: "Menüde alkolsüz kokteyl var mı?",
    },
    {
      id: "ex.7.12.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşlar içiyor, sen araba kullanıyorsun. Bartender'a alkolsüz iste, judgment'sız.",
      npc_role: "Bartender",
      setting: "Bar, group of friends drinking around you",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what'll you have?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(uhh|actually|i mean)[,. ]+ (something|anything) (non-?alcoholic|without alcohol|no alcohol)",
            "(i'?m the|i am the) designated driver (tonight|today)",
            "(no alcohol|nothing alcoholic) (for me|tonight|please)",
            "(got any|do you have any) (mocktails|non-?alcoholic options|good sodas)",
            "(i'?m driving|driving tonight)[,. ]+ (so |)(something non-?alcoholic|just water|just a soda)",
            "(could i get|can i have) (a|an) (alcohol-free|non-?alcoholic) (beer|cocktail|drink)",
          ],
          hint_tr:
            "Direkt söyle: 'Something non-alcoholic — I'm the designated driver'.",
        },
        {
          speaker: "npc",
          message:
            "No problem at all. We've got mocktails, sodas, NA beer, or just water. What sounds good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a|the) (mocktail|na beer|soda|sparkling water)( please)?",
            "(what'?s|how is) (your|the) (mocktail|na beer|special mocktail)",
            "(uhh|i mean)[,. ]+ (mocktail|na beer)( sounds good)?",
            "(let me try|i'?ll try|i'?ll have) (a|the) (mocktail|na beer|virgin mojito)",
            "(do you|got any) (virgin|alcohol-free) (mojito|margarita|cocktails)",
            "(surprise me|your call|whatever you recommend) (non-?alcoholic)?",
            "(could you|can you) (make|recommend) (a good|something) (mocktail|non-?alcoholic)",
          ],
          hint_tr:
            "Seç: 'I'll try a mocktail' veya 'What's your virgin mojito like?'",
        },
        {
          speaker: "npc",
          message:
            "Cool, our virgin mojito is great. You want lime and mint, or strawberry?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(lime and mint|strawberry|classic|the original)",
            "(let'?s go with|i'?ll go with|i'?ll do) (lime and mint|strawberry|the classic)",
            "(uhh|i mean) (lime|mint|strawberry) (please|sounds good)",
            "(could i|can i) (get|have) (lime and mint|strawberry)",
            "(the classic|original|traditional one)( please)?",
            "(whichever|whatever) (is better|you recommend|is more popular)",
          ],
          hint_tr:
            "Tercih: 'Lime and mint, please' veya 'Whatever you recommend'.",
        },
        {
          speaker: "npc",
          message: "Lime and mint, classic choice. Here you go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|cheers)",
            "(looks|that looks) (amazing|great|delicious|fancy)",
            "(perfect|exactly what i needed)",
            "(thanks)[,. ]+ (no judgment on the no-alcohol|appreciate the options)",
            "(thanks)[,. ]+ (someone has to drive|gotta drive tonight)",
          ],
          hint_tr:
            "Teşekkür: 'Thanks, looks great' veya 'Perfect, gotta drive tonight'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7.13 — Switching Tab (Cash mi Card mı?) — B1
// ============================================================
export const barLesson_7_13: BundledLesson = {
  id: "order.bar.7.13",
  skill_id: "order.bar",
  index: 13,
  title: "Cash vs Card — Ödeme Seçeneği",
  description:
    "Bartender ödeme şeklini soruyor — cash, card, tab. Türk öğrenci olarak doğru terimleri seç.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.13.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "split the bill",
      tr_translation: "Hesabı bölüşmek",
      example: "Can we split the bill three ways?",
      example_tr: "Hesabı üçe bölebilir miyiz?",
    },
    {
      id: "ex.7.13.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "settle up",
      tr_translation: "Hesabı kapatmak / Halletmek",
      example: "Let me settle up before we go.",
      example_tr: "Gitmeden hesabı kapatayım.",
    },
    {
      id: "ex.7.13.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Gece bitiyor, 4 kişilik grubun hesabını kapatıyorsun. Bartender ödeme şeklini soruyor.",
      npc_role: "Bartender",
      setting: "Bar, end of night, settling up",
      turns: [
        {
          speaker: "npc",
          message: "Hey, ready to settle up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|please)[,. ]+ (could|can) (i|we) (close out|see the tab|get the check)",
            "(yes|yeah)[,. ]+ (close us out|close me out|just close the tab)",
            "(could you|can you) (close|run) (out the tab|the check|us out)",
            "(uhh|sure)[,. ]+ (settle up|close out)( please)?",
            "(yeah|yes)[,. ]+ (how much|whats the total|what do we owe)",
            "(can we|could we) (see|get) the tab",
          ],
          hint_tr:
            "Kapatma iste: 'Close us out, please' veya 'Can we see the tab?'",
        },
        {
          speaker: "npc",
          message: "Total is eighty-five. Cash, card, or splitting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we split (it|this|the bill) (three|four|two) ways",
            "(we'?ll|let'?s) (split it|split the bill) (three|four|two) ways",
            "(uhh|i mean) (could|can) (we|you) (split|divide) (it|the bill) (in|by) (three|four)",
            "(i'?ll|let me) (pay|cover) (it all|the whole thing|with card)",
            "(card|cash)( please)?",
            "(split four ways|four cards|each pay separately)",
            "(can|could) (each of us|we each) (pay|tap) separately",
          ],
          hint_tr:
            "Böl: 'Split four ways, please' veya tek öde: 'I'll cover it with card'.",
        },
        {
          speaker: "npc",
          message: "Sure, four cards. Want me to add a tip or you'll handle it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could you|can you) (add|put) (twenty|fifteen|eighteen) percent",
            "(add|do) (twenty|fifteen|eighteen) percent( please)?",
            "(yeah|yes)[,. ]+ (add|do) (twenty|fifteen) (percent|%)",
            "(i'?ll|we'?ll) (handle|do) (the tip|it ourselves)",
            "(uhh|i mean) (twenty|fifteen) (percent|%) (sounds good|works)",
            "(add|just add) (a |the )?(standard|usual) tip",
          ],
          hint_tr:
            "Bahşiş: 'Add twenty percent, please' veya 'We'll handle the tip'.",
        },
        {
          speaker: "npc",
          message: "Cool. I'll run the cards now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|cheers)",
            "(perfect|sounds good|great)",
            "(thanks)[,. ]+ (great night|good service|good vibes)",
            "(uhh|cool) (thanks|cheers)[,. ]+ (have a good (one|night))",
            "(you'?re|you'?re a) (the best|a legend|awesome)",
          ],
          hint_tr:
            "Teşekkür: 'Thanks, great night' veya 'Cheers, you're awesome'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.9 — Finding a Friend (Crowded Bar) — A2
// ============================================================
export const barApproachLesson_24_9: BundledLesson = {
  id: "bar.approach.24.9",
  skill_id: "bar.approach",
  index: 9,
  title: "Crowded Bar'da Arkadaş Bulmak",
  description:
    "Kalabalık bar, arkadaşını bulamıyorsun. Bartender'a veya bir yabancıya sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.9.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "have you seen",
      tr_translation: "Gördün mü?",
      example: "Have you seen a guy in a red shirt?",
      example_tr: "Kırmızı tişörtlü bir adam gördün mü?",
    },
    {
      id: "ex.24.9.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "wandering around",
      tr_translation: "Etrafta dolanmak / Aramak",
      example: "I've been wandering around looking for him.",
      example_tr: "Onu arayarak etrafta dolanıyorum.",
    },
    {
      id: "ex.24.9.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bar tıkış tıkış. Arkadaşını kaybettin, telefonu kapalı. Bir bartender'a sor.",
      npc_role: "Bartender",
      setting: "Packed bar, loud music, Friday night",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to bother you|excuse me|sorry)[,. ]+ (quick question|have you seen)",
            "(hey|hi)[,. ]+ (have you seen|did you see) (a guy|my friend)",
            "(sorry)[,. ]+ (have you seen|seen) a (guy|girl) in a (red shirt|blue jacket)",
            "(uhh|hey)[,. ]+ (i'?m looking for|trying to find) my friend",
            "(quick q|excuse me)[,. ]+ have you seen (a tall guy|someone) (with|in)",
            "(hey)[,. ]+ (sorry to interrupt|just real quick)[,. ]+ have you (seen|spotted)",
          ],
          hint_tr:
            "Aç: 'Sorry to bother you, have you seen a guy in a red shirt?'",
        },
        {
          speaker: "npc",
          message: "Um, what does he look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tall|short|medium height)[,. ]+ (red shirt|blue jacket|dark hair|beard)",
            "(he'?s|he is) (tall|about my height)[,. ]+ (wearing|in) a (red|blue|black) (shirt|hoodie)",
            "(uhh|i mean)[,. ]+ (tall|tallish|kind of tall)[,. ]+ (with|in) a (red shirt|beard|cap)",
            "(about|like) (six feet|my height)[,. ]+ (red|blue|black) (shirt|jacket)",
            "(curly hair|short hair|with a beard|with glasses)[,. ]+ (red|blue|black) (shirt|tee)",
            "(he'?s wearing|he has on) (a red shirt|a black hoodie|a backpack)",
          ],
          hint_tr:
            "Tarif: 'Tall, in a red shirt' veya 'Curly hair, blue jacket'.",
        },
        {
          speaker: "npc",
          message: "Hmm, I think I saw someone like that by the pool table.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|oh nice|sweet|perfect|awesome)[,. ]+ (thanks|thank you)",
            "(where|which way) is the pool table",
            "(thanks|thank you)[,. ]+ (i'?ll|let me) check (over there|the back)",
            "(where|how do i get) (to|over to) the pool table",
            "(thanks|appreciate it|you'?re a legend)",
            "(uhh|cool) (which|what) (direction|way) is that",
          ],
          hint_tr:
            "Teşekkür + soru: 'Thanks! Where's the pool table?'",
        },
        {
          speaker: "npc",
          message: "All the way in the back, past the bathrooms.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|cool|perfect|thanks|sweet)",
            "(thanks so much|appreciate it|you'?re the best)",
            "(thank you|thanks)[,. ]+ (i'?ll|let me) (go check|head over)",
            "(thanks)[,. ]+ (have a good one|cheers)",
            "(thanks)[,. ]+ (i owe you one|appreciate the help)",
            "(perfect|got it)[,. ]+ (thanks again|cheers)",
          ],
          hint_tr:
            "Kapanış: 'Thanks so much, you're the best!'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.10 — Joining a Group's Table — B1
// ============================================================
export const barApproachLesson_24_10: BundledLesson = {
  id: "bar.approach.24.10",
  skill_id: "bar.approach",
  index: 10,
  title: "Masaya Katılmak — Is This Seat Taken?",
  description:
    "Kalabalık bar, oturacak yer yok. Bir grup masada, bir koltuk boş. Kibar yaklaş + katıl.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.24.10.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "is this seat taken",
      tr_translation: "Bu yer dolu mu?",
      example: "Hey, is this seat taken?",
      example_tr: "Selam, bu yer dolu mu?",
    },
    {
      id: "ex.24.10.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "mind if I join",
      tr_translation: "Katılmamın sakıncası var mı?",
      example: "Mind if I join you guys for a sec?",
      example_tr: "Bir saniye katılmamın sakıncası var mı?",
    },
    {
      id: "ex.24.10.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bar tıka basa, bir grup 4 kişi masada ama 5 sandalye var. Soğukkanlı yaklaş.",
      npc_role: "Stranger at table",
      setting: "Packed bar, group of 4 with one empty chair",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|sorry to interrupt)[,. ]+ (is this seat taken|is anyone sitting here)",
            "(excuse me|sorry)[,. ]+ (is|are) (this seat|this chair|these seats) (free|taken|available)",
            "(uhh|hey)[,. ]+ (mind if i|do you mind if i) (grab|take) this (seat|chair)",
            "(hey)[,. ]+ (anybody|anyone) sitting (here|in this chair)",
            "(quick question|sorry)[,. ]+ (is this|that) (chair|seat) (taken|free)",
            "(hey|hi)[,. ]+ (mind if i join|can i join you guys)",
          ],
          hint_tr:
            "Aç: 'Hey, is this seat taken?' veya 'Mind if I join?'",
        },
        {
          speaker: "npc",
          message: "Oh, no, it's free. Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|cheers)",
            "(thanks)[,. ]+ (it'?s|its) (packed|crazy|insane) (in here|tonight)",
            "(thanks)[,. ]+ (i'?ve been|been) (standing|wandering) (forever|all night)",
            "(uhh|cool) (thanks|thank you)[,. ]+ (so packed|crazy crowd)",
            "(appreciate it|you'?re a lifesaver|legend)",
            "(thanks)[,. ]+ (mind if i join|hope i'?m not (intruding|interrupting))",
          ],
          hint_tr:
            "Teşekkür + smalltalk: 'Thanks, it's crazy in here tonight!'",
        },
        {
          speaker: "npc",
          message: "Yeah, total madness. Are you here alone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)[,. ]+ (my friends|i was supposed to meet) (canceled|bailed|are running late)",
            "(no|kind of|sort of)[,. ]+ (waiting for|meeting) (some friends|a friend)",
            "(yeah|just|yeah just) (me|tonight)",
            "(uhh|actually) (my friend|my buddy) is (running late|still on the way)",
            "(yeah|yes)[,. ]+ (kind of|sort of) (a solo|spontaneous) (night|trip)",
            "(no)[,. ]+ (waiting on|expecting) (a couple of|some) friends",
          ],
          hint_tr:
            "Cevap: 'Yeah, my friend's running late' veya 'Kind of solo tonight'.",
        },
        {
          speaker: "npc",
          message: "Cool. We're just hanging out before a concert. You into live music?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|definitely|big time)[,. ]+ (love|i love) (live music|concerts)",
            "(oh nice|cool)[,. ]+ (what concert|who'?s playing|which band)",
            "(uhh|yeah)[,. ]+ (sometimes|when i can|occasionally)",
            "(love it|i'?m into it|huge fan)[,. ]+ (who'?s playing|what'?s the show)",
            "(yeah|kind of|sort of)[,. ]+ (more of a|i prefer) (rock|indie|electronic) (shows|gigs)",
            "(not really|not my thing|i'?m more of a) (club|chill) (person|guy|girl)",
          ],
          hint_tr:
            "Devam: 'Yeah, love live music — who's playing?'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.11 — Wingman / Introducing a Friend — B2
// ============================================================
export const barApproachLesson_24_11: BundledLesson = {
  id: "bar.approach.24.11",
  skill_id: "bar.approach",
  index: 11,
  title: "Wingman — Arkadaşı Tanıştırmak",
  description:
    "Arkadaşın utangaç, sen onu yabancıya tanıştırıyorsun. Doğal wingman dili.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.24.11.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "this is my friend",
      tr_translation: "Bu arkadaşım (tanıştırma)",
      example: "Hey, this is my friend Burak — he's also here for Erasmus.",
      example_tr: "Bu arkadaşım Burak — o da Erasmus için burada.",
    },
    {
      id: "ex.24.11.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "you two should chat",
      tr_translation: "Siz ikiniz sohbet etmelisiniz",
      example: "You two should chat — both into hiking.",
      example_tr: "Siz ikiniz konuşmalısınız — ikiniz de hiking seviyorsunuz.",
    },
    {
      id: "ex.24.11.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadaşın Burak yanında, sen önceden bara konuştuğun kişiye onu tanıştırıyorsun.",
      npc_role: "Stranger (Sarah)",
      setting: "Bar, you're with a shy friend, Sarah is the stranger you met",
      turns: [
        {
          speaker: "npc",
          message: "Oh hey, you're back. Who's this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)[,. ]+ (this is|meet) my (friend|buddy|guy) (burak|ali|emre|mert)",
            "(yeah|so) (this is|meet) (burak|my friend)[,. ]+ (he'?s |hes )(also|here for) (erasmus|grad school)",
            "(uhh|so)[,. ]+ (this is my friend|let me introduce) (burak|my friend)",
            "(meet|this is) (burak|my buddy)[,. ]+ (he'?s the|the) (one|guy) i (was telling you about|mentioned)",
            "(hey sarah|sarah)[,. ]+ this is (burak|my friend)[,. ]+ (he'?s|hes) (cool|awesome|into the same stuff)",
            "(yeah)[,. ]+ (introducing|wanted to introduce) (you|him) to (sarah|my friend)",
          ],
          hint_tr:
            "Tanıştır: 'Hey, this is my friend Burak — he's also here for Erasmus'.",
        },
        {
          speaker: "npc",
          message: "Nice to meet you Burak! How's your Erasmus going?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|so)[,. ]+ (he'?s|hes) (super into|really into|obsessed with) (hiking|photography|music)",
            "(burak)[,. ]+ (tell her about|tell sarah about) (your|the) (trip|hike|project)",
            "(uhh|yeah)[,. ]+ (you two should|you guys should) chat[,. ]+ (both into|same interests)",
            "(he'?s|hes) been here (a few months|six weeks)[,. ]+ (loving it|having a blast)",
            "(so)[,. ]+ (you two|you both) (love|are into) (hiking|live music|photography) (right|i think)",
            "(actually|by the way)[,. ]+ (you should ask him about|tell her about) (the cappadocia trip|that show)",
          ],
          hint_tr:
            "Yardım et: 'He's super into hiking — you two should chat!'",
        },
        {
          speaker: "npc",
          message: "Oh nice, I love hiking too! Where've you been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(see|told you|knew it)[,. ]+ (same wavelength|right up your alley)",
            "(yeah|i told you|see)[,. ]+ (you guys|you two) (would click|would get along)",
            "(uhh|so)[,. ]+ (i'?ll let you guys|let me let you) (talk|chat|catch up)",
            "(i'?m gonna|let me|i'?ll) (grab a drink|head to the bar|give you space)",
            "(perfect|nice)[,. ]+ (i'?ll be right back|back in a sec)",
            "(yeah|see)[,. ]+ (you two|you guys) (have so much in common|hit it off)",
          ],
          hint_tr:
            "Geri çekil: 'I'll let you two chat — grabbing a drink!'",
        },
        {
          speaker: "npc",
          message: "Haha okay, thanks for the intro!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|of course|anytime|happy to)",
            "(have fun|enjoy|catch up)",
            "(uhh|yeah)[,. ]+ (i'?ll be|i'?m) (over there|at the bar) if you need (me|anything)",
            "(no problem|don'?t mention it|my pleasure)",
            "(later|see you guys later|catch you in a bit)",
            "(thank yourself|you got it|consider it done)",
          ],
          hint_tr:
            "Kapan: 'No worries — have fun!' veya 'I'll be at the bar'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.12 — Politely Declining (Beni Tavlayana Hayır) — B2
// ============================================================
export const barApproachLesson_24_12: BundledLesson = {
  id: "bar.approach.24.12",
  skill_id: "bar.approach",
  index: 12,
  title: "Politely Declining — Kibarca Reddetmek",
  description:
    "Bir yabancı seni tavlamaya çalışıyor — sen ilgili değilsin. Kibar ama net reddet.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.24.12.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm flattered",
      tr_translation: "Iltifat ettin / Gururum okşandı (ama hayır)",
      example: "I'm flattered, but I'm not really looking right now.",
      example_tr: "Iltifat ettin ama şu anda biriyle olmaya hazır değilim.",
    },
    {
      id: "ex.24.12.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "not really looking",
      tr_translation: "Şu an birini arayışta değilim",
      example: "Honestly, I'm not really looking — sorry.",
      example_tr: "Açıkçası, şu an birini aramıyorum — üzgünüm.",
    },
    {
      id: "ex.24.12.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Tanımadığın biri yanına geldi, açıkça flört ediyor. Sen ilgili değilsin. Sıcak + net.",
      npc_role: "Stranger flirting",
      setting: "Bar, stranger has approached, clearly interested",
      turns: [
        {
          speaker: "npc",
          message: "Hey, can I buy you a drink?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|that'?s sweet|appreciate it)[,. ]+ but (i'?m good|i'?m fine|no thanks)",
            "(thanks|appreciate it)[,. ]+ (i already have one|i'?m set|i'?ve got one)",
            "(uhh|thank you)[,. ]+ but (i'?m gonna pass|i'?ll pass)",
            "(that'?s|that is) (sweet|kind|nice)[,. ]+ but (i'?m good|i'?m all set)",
            "(thanks)[,. ]+ but (no thanks|i'?m okay|i'?m good for now)",
            "(appreciate the offer|sweet of you)[,. ]+ but (i'?m fine|i'?m good)",
          ],
          hint_tr:
            "Kibar red: 'Thanks, that's sweet, but I'm good'.",
        },
        {
          speaker: "npc",
          message: "Come on, just one drink. We can talk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(uhh|i mean) (i'?m|i am) (here with|with) (friends|my group)",
            "(thanks|i appreciate it)[,. ]+ (but|honestly) (i'?m not really looking|not interested) (right now|tonight)",
            "(i'?m flattered|that'?s flattering)[,. ]+ but (i'?m not|i'?m really not) (looking|interested)",
            "(honestly|to be honest)[,. ]+ (i'?m not in|not really in) (that headspace|the mood) (tonight|right now)",
            "(uhh|look) (i'?ll be|i'?m gonna be) honest[,. ]+ (i'?m not interested|not feeling it)",
            "(thanks|sweet of you)[,. ]+ but (i'?m here with my partner|with my friends|just here to hang)",
          ],
          hint_tr:
            "Net ol: 'I'm flattered but I'm not really looking — sorry'.",
        },
        {
          speaker: "npc",
          message: "Oh — okay, fair enough. Sorry for being pushy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|all good|don'?t worry about it|it'?s okay)",
            "(no worries|appreciate you understanding)[,. ]+ (have a good night|have a great night)",
            "(all good)[,. ]+ (you weren'?t|no big deal|don'?t sweat it)",
            "(uhh|hey) (no worries|all good)[,. ]+ (cheers|enjoy your night)",
            "(it'?s fine|really fine|honestly fine)[,. ]+ (you'?re cool|no harm done)",
            "(no problem|don'?t worry)[,. ]+ (have fun|good vibes)",
          ],
          hint_tr:
            "Yumuşat: 'No worries, have a great night!'",
        },
        {
          speaker: "npc",
          message: "Thanks. Take care.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|same|likewise)",
            "(thanks|cheers|take care)",
            "(uhh|yeah) (you too|same to you|same)",
            "(have a good (one|night))[,. ]+ (you too|same)",
            "(cheers|peace|enjoy)",
            "(thanks|appreciate it)[,. ]+ (be safe|take care)",
          ],
          hint_tr:
            "Veda: 'You too, take care!'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.13 — Exchange Numbers (No Pressure) — B1
// ============================================================
export const barApproachLesson_24_13: BundledLesson = {
  id: "bar.approach.24.13",
  skill_id: "bar.approach",
  index: 13,
  title: "Numara Almak — No Pressure",
  description:
    "Iyi sohbetlerden sonra numara isteyip baskı yapmadan ayrıl. Türk öğrenci abroad — saygılı yaklaşım.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.24.13.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "no pressure",
      tr_translation: "Baskı yok / Mecburiyet yok",
      example: "Wanna swap numbers? No pressure though.",
      example_tr: "Numara değişelim mi? Baskı yok ama.",
    },
    {
      id: "ex.24.13.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "grab a coffee sometime",
      tr_translation: "Bir ara kahve içelim",
      example: "We should grab a coffee sometime.",
      example_tr: "Bir ara kahve içmeliyiz.",
    },
    {
      id: "ex.24.13.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bara konuştun, 30 dakika geçti, iyi vibe. Sen ayrılıyorsun ama bağlantıyı koparmak istemiyorsun.",
      npc_role: "New friend",
      setting: "Bar, end of conversation, decent connection",
      turns: [
        {
          speaker: "npc",
          message: "Wow, time flies. I should probably get back to my friends.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|same|me too)[,. ]+ (this was|that was) (fun|great|cool)",
            "(yeah)[,. ]+ (so|but) (this was|that was) really (fun|nice|cool)",
            "(uhh|hey)[,. ]+ before you go[,. ]+ (wanna|want to) (swap|exchange) (numbers|instas)",
            "(yeah)[,. ]+ (totally|completely)[,. ]+ (but|hey) (wanna stay in touch|keep in touch)",
            "(sounds|that sounds) good[,. ]+ (hey|but) (mind if we|wanna) swap numbers",
            "(yeah|cool)[,. ]+ (this was|today was) (great|fun)[,. ]+ wanna (exchange|trade) (numbers|@s)",
          ],
          hint_tr:
            "Köprü: 'This was fun — wanna swap numbers?'",
        },
        {
          speaker: "npc",
          message: "Yeah, I'd like that. What's your number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|hold on|wait)[,. ]+ (i'?ll text you|i'?ll just text you)",
            "(here|let me) (give it to you|put it in|type it)",
            "(uhh|sure)[,. ]+ (it'?s|its) (\\d|five|six|seven)",
            "(could you|can you) (give me|hand me) (yours|your phone)",
            "(actually|wait)[,. ]+ (instagram|insta) (works|is easier|might be better)",
            "(i'?ll|let me) text you[,. ]+ (so you have my number|that way you have it)",
          ],
          hint_tr:
            "Paylaş: 'Let me text you — that way you have it'.",
        },
        {
          speaker: "npc",
          message: "Got it. Text me whenever, no pressure.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|same here|yeah no pressure)",
            "(for sure|definitely)[,. ]+ (no pressure either way|whenever works)",
            "(yeah|sounds good)[,. ]+ (maybe|we should) (grab a coffee|hang out) sometime",
            "(uhh|yeah)[,. ]+ (if you'?re ever free|whenever you'?re around)[,. ]+ (let'?s|we should) (hang|grab a drink)",
            "(no pressure on my end either|same vibe)",
            "(yeah)[,. ]+ (if you wanna|if you'?re ever around)[,. ]+ (grab a coffee|drinks|hang)",
          ],
          hint_tr:
            "Aynı tonu yansıt: 'Same here — maybe grab a coffee sometime'.",
        },
        {
          speaker: "npc",
          message: "Sounds great. Have a good night!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|same|same to you|likewise)",
            "(thanks|cheers)[,. ]+ (you too|have a great one)",
            "(you too|same here)[,. ]+ (catch you|talk soon|text you)",
            "(uhh|yeah) (you too|same)[,. ]+ (great meeting you|nice meeting you)",
            "(great meeting you|so good to meet you)[,. ]+ (you too|have fun)",
            "(have fun|enjoy|stay safe)",
          ],
          hint_tr:
            "Sıcak veda: 'You too — great meeting you!'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.14 — Joining a Bar Game (Pool/Darts/Trivia) — B1
// ============================================================
export const barApproachLesson_24_14: BundledLesson = {
  id: "bar.approach.24.14",
  skill_id: "bar.approach",
  index: 14,
  title: "Bar Oyununa Katılmak — Pool / Darts / Trivia",
  description:
    "Bir grup yabancı pool / darts / trivia oynuyor. Sen de katılmak istiyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.24.14.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "got room for one more",
      tr_translation: "Bir kişi daha yer var mı?",
      example: "Got room for one more on the team?",
      example_tr: "Takımda bir kişi daha yer var mı?",
    },
    {
      id: "ex.24.14.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm rusty",
      tr_translation: "Eski beceriyi kaybettim / Forma değilim",
      example: "I'll give it a shot, but I'm rusty.",
      example_tr: "Bir denerim ama formda değilim.",
    },
    {
      id: "ex.24.14.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir grup pool oynuyor, eksik oyuncuları var. Sen katılmak istiyorsun.",
      npc_role: "Pool player",
      setting: "Bar, group at the pool table, doubles game",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)[,. ]+ (you guys|y'?all) (need|short) (a|one more) (player|person)",
            "(sorry to interrupt|excuse me)[,. ]+ (got room for one more|need an extra)",
            "(hey)[,. ]+ (mind if i|can i) (jump in|join the next game)",
            "(uhh|hi) (looks fun|that looks fun)[,. ]+ (any room|can i join)",
            "(quick question|hey)[,. ]+ (are you guys|y'?all) playing doubles[?,]? (could i join|need a partner)",
            "(hey)[,. ]+ (i'?m next|i'?ll play winner|i'?ve got next)",
          ],
          hint_tr:
            "Aç: 'Hey, got room for one more?' veya 'Mind if I jump in?'",
        },
        {
          speaker: "npc",
          message: "Oh yeah, we need a fourth. You any good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(uhh|i mean)[,. ]+ (i'?m okay|i'?m alright|decent)",
            "(i'?m rusty|kind of rusty|haven'?t played in a while)",
            "(i'?ll give it a shot|let'?s find out|i'?ll do my best)",
            "(not really|not great|terrible)[,. ]+ but (down to play|wanna try|will try)",
            "(uhh|i mean)[,. ]+ (i used to play|i played a lot|in turkey|back home)",
            "(decent|okay|i can hold my own)[,. ]+ (no promises|no guarantees)",
            "(honestly|to be honest)[,. ]+ (i'?m not amazing|i'?ll be the weak link)",
          ],
          hint_tr:
            "Mütevazı: 'I'm rusty but down to play' veya 'I'll give it a shot'.",
        },
        {
          speaker: "npc",
          message: "Ha, all good. Come on, you're with me. What's your name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|my name'?s|name'?s|it'?s) (burak|ali|emre|mert|berk|deniz)",
            "(burak|ali|emre|mert)[,. ]+ (nice to meet you|good to meet you)",
            "(uhh|i'?m) (burak|ali|emre)[,. ]+ (what'?s yours|and you)",
            "(name'?s|i'?m) (burak|ali)[,. ]+ (from turkey|on erasmus|visiting)",
            "(burak|ali)[,. ]+ (thanks for letting me play|appreciate the invite)",
            "(hi|hey)[,. ]+ (i'?m|name'?s) (burak|ali)",
          ],
          hint_tr:
            "Tanış: 'I'm Burak, nice to meet you'.",
        },
        {
          speaker: "npc",
          message: "Cool, Burak. I'm Jake. Stripes or solids?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(uhh|i mean)[,. ]+ (whatever|either|you choose)",
            "(your call|dealer'?s choice|you pick)",
            "(stripes|solids)( works| sounds good| please)?",
            "(let'?s do|i'?ll take) (stripes|solids)",
            "(whatever you want|whatever'?s left|doesn'?t matter to me)",
            "(uhh) (you call it|you decide)[,. ]+ (i'?m flexible|i don'?t mind)",
          ],
          hint_tr:
            "Seç: 'Whatever, your call' veya 'Stripes works'.",
        },
        {
          speaker: "npc",
          message: "Stripes it is. Let's go, partner!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do this|let'?s go|here we go)",
            "(no pressure)[,. ]+ (right|just kidding)",
            "(uhh|alright) (let'?s|i'?ll) (try not to|do my best not to) (embarrass myself|let you down)",
            "(deal|game on|i'?m ready)",
            "(let'?s go|sounds good)[,. ]+ (cheers|good luck)",
            "(i'?ll do my best|i got you|i'?m on it)",
          ],
          hint_tr:
            "Enerjik: 'Let's go, partner!' veya 'I'll do my best!'",
        },
      ],
    },
  ],
};

// ============================================================
// Registry — export all 12 expanded bar lessons
// ============================================================
export const barExpandedLessons: ReadonlyArray<BundledLesson> = [
  barLesson_7_8,
  barLesson_7_9,
  barLesson_7_10,
  barLesson_7_11,
  barLesson_7_12,
  barLesson_7_13,
  barApproachLesson_24_9,
  barApproachLesson_24_10,
  barApproachLesson_24_11,
  barApproachLesson_24_12,
  barApproachLesson_24_13,
  barApproachLesson_24_14,
];
