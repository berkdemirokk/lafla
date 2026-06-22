// Flort - Awkward Recovery lessons
// Skill: flirt.recovery (3 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 8.1 — Misread Signal Recovery (Sinyal Hatasi Toparlama)
// ============================================================
export const flirtRecoveryLesson_8_1: BundledLesson = {
  id: "flirt.recovery.8.1",
  skill_id: "flirt.recovery",
  index: 1,
  title: "Yanlis Sinyal Toparlama",
  description:
    "Cok forward gittin ya da yanlis okumustun — utanmadan toparla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.frec8.1.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Misread that one",
      tr_translation: "Onu yanlış okumuşum",
      example: "Looks like I misread that one — my bad.",
      example_tr: "Onu yanlış okumuşum gibi — pardon.",
    },
    {
      id: "ex.frec8.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Galiba sinyali yanlis okudum — utanc duydum, ozur dilerim.",
      target: "I think I misread the vibe — feeling sheepish, sorry about that.",
      accepted_variants: [
        "I think I read that wrong — apologies if it was weird.",
        "Got the signals crossed there — my bad.",
        "Misread the room — sorry.",
        "Realized I got it wrong — apologies if uncomfortable.",
      ],
      tr_hint:
        "'Misread the vibe/room' = ortami / havayi yanlis okumak. Hafif ironi ile kabul.",
    },
    {
      id: "ex.frec8.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "My ___ on that one.",
      answer: "bad",
      distractors: ["fault", "mistake", "wrong"],
      tr_hint:
        "'My bad' = pardon / benim hatam. Casual + ozur kalibi.",
    },
    {
      id: "ex.frec8.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Can",
        "we",
        "rewind",
        "and",
        "start",
        "over",
      ],
      correct_sentence: "Can we rewind and start over",
      tr_translation: "Geri sarıp baştan başlayabilir miyiz?",
    },
    {
      id: "ex.frec8.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You shouldn't have led me on.",
      correct_sentence:
        "Looks like I read the vibe wrong — my bad, no awkwardness needed.",
      tr_explanation:
        "'You shouldn't have led me on' = suclama = isleri daha kotu yapar. Doğru: kendi hatani sahiplen, hafiflet.",
    },
    {
      id: "ex.frec8.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Iltifat / flortlesme attin, karsi tarafin tepkisi soguk geldi. Toparla.",
      npc_role: "Match",
      setting: "Recovering from misread signal",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so) (i (think|realize|may have))",
            "(misread|got that wrong|read the vibe wrong)",
            "(my bad|apologies|sorry about that)",
            "(no awkwardness|no weirdness) (needed|on my end)",
            "(can we|let'?s) (rewind|start over|reset)",
            "(forget|scratch) (that|what i said)",
          ],
          model_answers: ["I think I misread that — my bad, no weirdness."],
          hint_tr:
            "Sahiplen: 'I think I misread that — my bad, no weirdness.'",
        },
        {
          speaker: "npc",
          message:
            "No worries at all — totally chill. Was thinking of you more as a friend.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate) (you (being|so) cool|the honesty)",
            "(friend|friendship|hanging out) (works|sounds good|is great)",
            "(all good|no harm done|no worries)",
            "(let'?s |we can )(still hang out|still grab coffee)",
            "(thanks for|appreciate) (not making (it|me|things) (weird|awkward))",
          ],
          model_answers: ["Friend works — thanks for not making it weird."],
          hint_tr:
            "Toparla: 'Friend works — thanks for not making it weird.'",
        },
        {
          speaker: "npc",
          message:
            "Was it the joke I made on Wednesday? I should've been clearer earlier.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truly) no — (.+)",
            "(that was on me|that one'?s on me)",
            "(read into|put weight on) (it|the joke|the moment)",
            "(don'?t (blame|stress|worry)) yourself",
            "(your )?signals were (fine|chill|clear enough)",
            "(my own (read|wires|brain))",
          ],
          model_answers: ["Honestly, no — that was on me. I read into a moment that wasn't there. Your signals were fine."],
          hint_tr:
            "Karşı tarafı rahatlatma: 'Honestly, no — that was on me. I read into a moment that wasn't there. Your signals were fine.'",
        },
        {
          speaker: "npc",
          message:
            "Always. You're great — let's hang as friends.",
        },
      ],
    },
    {
      id: "ex.frec8.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yanlis sinyal sonrasi EN onemli adim?",
          options: [
            "Suclama",
            "Hatayi sahiplen + hafiflet + iliskiyi yasat",
            "Ghost yap",
            "Kavga",
          ],
          correct_index: 1,
          tr_explanation:
            "Sahiplenmek = olgunluk. Hafifletmek = ortami rahatlatma. Ikisi birden = guc.",
        },
        {
          question: "'My bad' kalibinin avantaji?",
          options: [
            "Casual + samimi + ozur niyetini hizla iletir",
            "Gereksiz",
            "Cok agir",
            "Yanlis ingilizce",
          ],
          correct_index: 0,
          tr_explanation:
            "Uzun ozurden daha rahatlatici. Drama'yi tetiklemeden ozru iletir.",
        },
        {
          question: "Misread sonrasi 'arkadas kalalim' teklifi NE zaman uygun?",
          options: [
            "Asla",
            "Karsi taraf rahatsa + senin de duygusal yatirimin azsa",
            "Her zaman",
            "Sosyal protokol",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi tarafa baskı hissettirmemek esas. Eger duygusal olarak agir yatirim yaptiysan, mesafe almak daha saglikli.",
        },
      ],
    },
    {
      id: "ex.frec8.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My bad — totally misread that.",
      ipa: "maɪ bæd ˈtəʊtəli ˌmɪsˈred ðæt",
      tr_hint:
        "'My bad' kısa + casual. 'Misread' = 'miss-red' (past tense). Hafif espri tonu — kendine gül.",
    },
    {
      id: "ex.frec8.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I think I read the vibe wrong — my bad, no awkwardness needed.",
      voice_hint: "male_us",
      tr_hint:
        "'Vibe wrong' kısa, sahiplenici. 'My bad' samimi. 'No awkwardness' = sakinleştirme — rahatla.",
    },
    {
      id: "ex.frec8.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No worries at all — was thinking of you more as a friend.",
      transcription_target: "No worries at all — was thinking of you more as a friend.",
      tr_hint:
        "Dinle, yaz. 'More as a friend' = arkadaşlık çerçevesi. Yumuşak ret.",
    },
    {
      id: "ex.frec8.1.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "reading the room",
      tr_translation: "Ortamı okumak / havayı sezmek",
      example: "Realized I wasn't reading the room — apologies for the awkward moment.",
      example_tr: "Ortamı okuyamadığımı fark ettim — garip an için özür dilerim.",
    },
    {
      id: "ex.frec8.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sorry I made big mistake. Forget all I said.",
      correct_sentence:
        "Misread the vibe there — my bad, let's just rewind.",
      tr_explanation:
        "'Sorry I made big mistake. Forget all I said.' = dramatik + ağır. Doğru: 'misread the vibe' (sahiplen) + 'my bad' (casual) + 'let's rewind' (hafif çıkış).",
    },
    {
      id: "ex.frec8.1.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "Looks like I ___ that one — ___, no ___ needed.",
      slots: [
        { accepted: ["misread", "got wrong", "read wrong"] },
        { accepted: ["my bad", "apologies", "sorry"] },
        { accepted: ["awkwardness", "weirdness", "drama"] },
      ],
      tr_hint:
        "Yanlış sinyal sonrası toparlama formülü: sahiplen + hafiflet + ortamı rahatlat. Türk öğrenci 'You shouldn't have...' diye suçlar — bu işleri kötüleştirir. Native: hatayı sahiplen + casual + drama yapma.",
      example_filled: "Looks like I misread that one — my bad, no awkwardness needed.",
    },
    {
      id: "ex.frec8.1.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "user", text: "I think I misread that — my bad, no weirdness intended." },
        { speaker: "npc", text: "No worries at all — totally chill. Was thinking of you more as a friend." },
        { speaker: "user" },
      ],
      missing_at: 2,
      accepted_patterns: [
        "(thanks|appreciate) (you (being|so) cool|the honesty|the heads up)",
        "(friend|friendship|hanging out) (works|sounds good|is great)",
        "(all good|no harm done|no worries)",
        "(let'?s |we can )(still hang out|still grab coffee)",
        "(thanks for|appreciate) (not making (it|me|things) (weird|awkward))",
      ],
      tr_hint:
        "NPC yumuşak ret verdi + 'friend' dedi. Kabul + olgunluk göster. 'Friend works, thanks for not making it weird' = olgun + kapı açık. Türk öğrenci 'I am hurt' deme — bu drama tetikler.",
      ideal_answer: "Friend works — thanks for being cool about it. No drama from me.",
    },
    {
      id: "ex.frec8.1.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Hey, that last message was a bit much for me — just trying to keep things casual right now.",
      accepted_patterns: [
        "(oh )?(totally|completely) (got it|understandable|fair)",
        "(my bad|sorry|apologies)(,)? (i )?(misread|read the vibe wrong)",
        "(no problem|no worries|all good)(,)? (let'?s )?(reset|rewind|keep it casual)",
        "(thanks for|appreciate) (telling me|the honesty|saying it)",
        "(i'?m good with|cool with) (casual|that|wherever we'?re at)",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC sınır koyu — 'too much, keep it casual'. 3 saniye düşün, sonra: SAHİPLEN + REZIL DURUMU NÖTRALIZE ET. 'Got it, my bad — let's keep it chill' = olgun. 'Why are you saying this?' DEME.",
      ideal_response: "Totally got it — my bad for reading it wrong. Let's keep it casual, no pressure from my end.",
    },
    {
      id: "ex.frec8.1.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Beni neden umuda düşürdün? Yanlış sinyal verdin.",
      wrong_en: "Why you gave me hope? You sent wrong signals.",
      right_en: "Hey — looks like I misread the vibe. My bad, no hard feelings.",
      why_tr:
        "Türk öğrencinin reactivity tuzağı. 'Why you gave me hope' = grammatik bozuk + suçlayıcı = işleri kötüleştirir, partner kaçar. 'Wrong signals' = karşı tarafı suçluyor = defansif olmasına neden olur. Modern dating'de: kendi yorumunu sahiplen + 'my bad' + hafiflet. Bu olgunluk = saygı kazandırır, kapıyı açık tutar.",
    },
    {
      id: "ex.frec8.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'My bad' deyimi ne anlama gelir?",
          options: [
            "Benim kötülüğüm",
            "Pardon / benim hatam (casual)",
            "Berbatım",
            "Hatalıyım",
          ],
          correct: 1,
          tr_explanation: "'My bad' = casual özür kalıbı. Uzun 'I'm so sorry'dan daha rahat, daha samimi.",
        },
        {
          q: "'Reading the room' nasıl çevirilir?",
          options: [
            "Oda okumak",
            "Ortamı okumak / havayı sezmek",
            "Oda dinlemek",
            "Çevreyi izlemek",
          ],
          correct: 1,
          tr_explanation: "'Read the room' = sosyal sezgi. 'Misread the room' = ortamı yanlış okumak.",
        },
        {
          q: "Yanlış sinyal sonrası EN önemli adım?",
          options: [
            "Karşı tarafı suçla",
            "Hatayı sahiplen + hafiflet + drama yapma",
            "Ghost yap",
            "Israr et",
          ],
          correct: 1,
          tr_explanation: "Sahiplenmek = olgunluk. Hafifletmek = ortamı rahatlat. İkisi birden = güç.",
        },
        {
          q: "'Misread the vibe' yerine kullanılabilen alternatif?",
          options: [
            "Read the vibe wrong",
            "Got the signals crossed",
            "Misread the room",
            "Hepsi geçerli",
          ],
          correct: 3,
          tr_explanation: "Üç deyim de aynı anlam. Recovery sırasında varyasyon = doğal.",
        },
        {
          q: "Türk hatası: 'Why you gave me hope?' yerine?",
          options: [
            "Why did you give me hope?",
            "My bad, looks like I misread it",
            "You sent wrong signals",
            "I'm hurt because of you",
          ],
          correct: 1,
          tr_explanation: "Suçlama = unmatch. Kendi yorumunu sahiplen + casual recovery = olgun.",
        },
      ],
    },
  ],
};

// (Note: Lesson 8.1 is the opening lesson; vocab tile expansions begin at Lesson 8.2)

// ============================================================
// Lesson 8.2 — Drunk Text Damage Control
// ============================================================
export const flirtRecoveryLesson_8_2: BundledLesson = {
  id: "flirt.recovery.8.2",
  skill_id: "flirt.recovery",
  index: 2,
  title: "Sarhos Mesaj Hasar Kontrolu",
  description:
    "Dun gece atilan sarhos mesaj — sabah ne yapacaksin? Espriyi pas + ozurle toparla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.frec8.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Drunk me has thoughts",
      tr_translation: "Sarhoş ben'in fikirleri var (espriyle savunma)",
      example: "Apparently drunk me has thoughts — sorry about the 2am texts.",
      example_tr: "Görünüşe göre sarhoş ben'in fikirleri var — gece 2 mesajları için pardon.",
    },
    {
      id: "ex.frec8.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dun gece mesajlar icin ozur dilerim — sarhostum + utancim var su an.",
      target: "Sorry about last night's texts — was drunk and cringing this morning.",
      accepted_variants: [
        "Apologies for the late night texts — too much wine.",
        "Cringing at last night's messages — sorry!",
        "Last night's texts were... not my finest. Sorry.",
        "Mortified by what I sent last night — too much to drink.",
      ],
      tr_hint:
        "'Cringe / Cringing' = utancima yer arama. Sarhos mesaj sonrasi standart his.",
    },
    {
      id: "ex.frec8.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Mortified at ___ I sent.",
      answer: "what",
      distractors: ["that", "which", "how"],
      tr_hint:
        "'Mortified' = utancimdan yerin dibine girmis. Bu cumlede: gonderdigim seyden utaniyorum.",
    },
    {
      id: "ex.frec8.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Please",
        "delete",
        "those",
        "messages",
        "from",
        "your",
        "memory",
      ],
      correct_sentence: "Please delete those messages from your memory",
      tr_translation: "Lütfen o mesajları hafızandan sil.",
    },
    {
      id: "ex.frec8.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I meant every word.",
      correct_sentence:
        "Cringing at last night's texts — sorry, that was a lot.",
      tr_explanation:
        "'I meant every word' = soft retreat yok = riskli. Doğru: utanci kabul + ozur + hafiflet.",
    },
    {
      id: "ex.frec8.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dun gece 2'de bir match'a 5 mesaj attin. Sabah hatirladin. Toparla.",
      npc_role: "Match",
      setting: "Morning after drunk texts",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|hey|so)",
            "(mortified|cringing|dying)( at|over) (last night|those texts|the texts)",
            "(too much (wine|tequila|drinking))",
            "(sorry|apologies|so so sorry) (about|for) (the texts|last night|the late night)",
            "(drunk me|that was drunk me|drunk version of me)",
            "(please (delete|forget)|wipe (it|that) from your)",
          ],
          model_answers: ["Okay, mortified — last night was too much wine. Sorry!"],
          hint_tr:
            "Espriyle ac: 'Okay, mortified — last night was too much wine. Sorry!'",
        },
        {
          speaker: "npc",
          message:
            "Haha honestly it was kind of cute. No need to apologize.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh thank god|whew|that'?s a relief)",
            "(thanks|thank you)( for) (being chill|the grace|laughing it off)",
            "(if (sober |regular )?me .* anything|on a related note)",
            "(let me|i should) (make it up|treat you)",
            "(coffee|drink|hangout) (on me|my treat)",
          ],
          model_answers: ["Thanks for being chill — let me make it up with coffee?"],
          hint_tr:
            "Pivot: 'Thanks for being chill — let me make it up with coffee?'",
        },
        {
          speaker: "npc",
          message:
            "Did you mean any of it, though? Just curious.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truthfully) (some of it|the (kind|nice) parts)",
            "(sober me|regular me) (means|stands by) (the (kind|positive)|that i)",
            "(skipping past|going to skip) the (drama|intensity|3am|big declarations)",
            "(if (the dust|things) settle|when (i'?m|i am) clear-headed)",
            "(let'?s (talk|see) in person|easier face to face)",
            "(let me earn it sober|sober me wants to)",
          ],
          model_answers: ["Honestly some of it — sober me stands by the kind parts, skipping the 3am drama. Let me earn it in person."],
          hint_tr:
            "Olgun açıklık: 'Honestly some of it — sober me stands by the kind parts, skipping the 3am drama. Let me earn it in person.' Sahte değil, ölçülü.",
        },
        {
          speaker: "npc",
          message:
            "Deal. Saturday afternoon?",
        },
      ],
    },
    {
      id: "ex.frec8.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sarhos mesaj sonrasi NE saat'te toparlama yapilmali?",
          options: [
            "Asla",
            "Sabah / oglen — gec olmadan, karsi taraf da yorumlamadan",
            "1 hafta sonra",
            "2 dakika sonra",
          ],
          correct_index: 1,
          tr_explanation:
            "Erken ozur = saygi. Gec ozur = kacma denemesi gibi gozukur.",
        },
        {
          question: "'Drunk me has thoughts' espriyi NE icin kullaniyoruz?",
          options: [
            "Hicbir sey",
            "Utanc anini hafifletmek + sosyal yetenek = cekici",
            "Suclamak",
            "Konuyu degistirmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Espri ile sahiplenmek + dramayi azaltmak = sosyal yetenek. Olgun ama eglenceli.",
        },
        {
          question: "Sarhos mesajda 'I meant every word' demek RISKI?",
          options: [
            "Romantik",
            "Karsi tarafa baski yapar + sober ben'i koruyamazsin",
            "Standart",
            "Riski yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Esnek olma alanini kapatir. 'Cringe' edip soft retreat yapmak daha guvenli.",
        },
      ],
    },
    {
      id: "ex.frec8.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Cringing at last night's texts.",
      ipa: "ˈkrɪndʒɪŋ æt lɑːst naɪts teksts",
      tr_hint:
        "'Cringing' tek nefes, 'cringe-ing'. 'Last night's' bağlı. Hafif gülümseme + utanç tonu — espriyle kabul.",
    },
    {
      id: "ex.frec8.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Okay, mortified — last night was too much wine. Sorry about that.",
      voice_hint: "female_us",
      tr_hint:
        "'Okay, mortified' = yumuşak espri açılış. 'Too much wine' = casual sebep. 'Sorry about that' samimi kapanış.",
    },
    {
      id: "ex.frec8.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Haha honestly it was kind of cute — no need to apologize.",
      transcription_target: "Haha honestly it was kind of cute — no need to apologize.",
      tr_hint:
        "Dinle, yaz. 'Kind of cute' = bayağı tatlı. 'No need to apologize' = özre gerek yok.",
    },
    {
      id: "ex.frec8.2.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "delulu",
      tr_translation: "Aşırı iyimser hayal (delusional kısaltması, espri tonu)",
      example: "Drunk me was a little delulu last night — apologies.",
      example_tr: "Sarhoş ben biraz hayalciydi dün gece — pardon.",
    },
    {
      id: "ex.frec8.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I drank too much. Please forget me.",
      correct_sentence:
        "Mortified at what drunk me sent — please wipe those texts from your memory.",
      tr_explanation:
        "'Please forget me' = dramatik + soğuk. Doğru: 'drunk me' (espri ile sahiplen) + 'wipe from memory' (komik abartı) = hafifletip ilişkiyi koru.",
    },
    {
      id: "ex.frec8.2.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Mortified at what ___ sent — please ___ from your ___.",
      slots: [
        { accepted: ["drunk me", "tipsy me", "midnight me", "exhausted me"] },
        { accepted: ["wipe those texts", "scrub the screenshots", "delete those messages", "erase that conversation"] },
        { accepted: ["memory", "phone", "mind", "feed"] },
      ],
      tr_hint:
        "Sarhoş text recovery kalıbı — self-aware + komik. Türk öğrenci 'I'm sorry I was drunk' der; bu yumuşatmaz; 'drunk me' (espri ile sahiplen) = self-aware mizah.",
      example_filled:
        "Mortified at what drunk me sent — please wipe those texts from your memory.",
    },
    {
      id: "ex.frec8.2.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "Lol I see the 11 messages from 2am — interesting." },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha honestly kind of cute. No need to apologize." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(mortified|cringing|dying) (at|over) (what drunk me|those texts)",
        "(drunk me|midnight me) (was|got) (.+)",
        "(please|can you) (wipe|delete|scrub|erase) (.+)",
        "(apologies|so sorry) for (.+)",
        "(coffee|drinks) on me (this week|to make up)",
      ],
      tr_hint:
        "Self-aware mizah + telafi. 'Mortified at drunk me — please wipe those from memory. Coffee on me this week?' tipi. Türk öğrenci ezikleşir; KENDİNLE DALGA GEÇ.",
      ideal_answer:
        "Mortified at what drunk me sent — please wipe those from memory. Coffee on me this week to apologize properly?",
    },
    {
      id: "ex.frec8.2.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "Okay so the drunk texts — what was THAT about?",
      accepted_patterns: [
        "(honestly|truthfully) (drunk me|midnight me) (.+)",
        "(no excuse|wouldn'?t blame you for) (.+)",
        "(let me make it up|coffee on me)",
        "(can you|will you) (wipe|scrub|delete) (.+)",
        "(genuinely cringing|mortified)",
      ],
      think_seconds: 3,
      tr_hint:
        "Mahcup ama mizahlı sahiplen. 'Honestly drunk me was a different person — let me make it up with coffee?' tipi. Defansif olma; KABUL ET + ESPRI.",
      ideal_response:
        "Honestly drunk me was a different person. Let me make it up — coffee this week?",
    },
    {
      id: "ex.frec8.2.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Çok içtim. Lütfen beni unut",
      wrong_en: "I drank too much. Please forget me.",
      right_en: "Mortified at what drunk me sent — please wipe those texts from your memory.",
      why_tr:
        "Türk öğrenci 'beni unut' kalıbını birebir çevirir = dramatik + sert + soğuk = ilişki biter. Modern dating: sarhoş text recovery = espri + sahiplen. 'Drunk me' (espri ile self-aware) + 'wipe from memory' (komik abartı) = hafifletip ilişkiyi koru.",
    },
    {
      id: "ex.frec8.2.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Sarhoş text recovery'de en sağlıklı yaklaşım?",
          options: [
            "Yok say, hiç bahsetme",
            "'Drunk me' espri ile sahiplen + telafi öner",
            "'Forget me' dramatik özür",
            "Suçlama",
          ],
          correct: 1,
          tr_explanation:
            "'Drunk me' = self-aware espri. Sahiplenmek + hafifletmek = ilişki korunur.",
        },
        {
          q: "'Wipe from memory' niye etkili?",
          options: [
            "Yapısal yanlış",
            "Komik abartı = ciddiyeti hafifletir",
            "Çok formal",
            "Anlamsız",
          ],
          correct: 1,
          tr_explanation:
            "Mizahlı abartı = ciddiyeti azaltır. Karşı taraf gülümser = drama olmaz.",
        },
        {
          q: "'Mortified' anlamı?",
          options: [
            "Ölümcül",
            "Aşırı utanmış / mahcup",
            "Kızgın",
            "Sıkıntılı",
          ],
          correct: 1,
          tr_explanation:
            "'Mortified' = utançtan yere bakacak halde. Mizahlı abartı kalıbı.",
        },
        {
          q: "'Drunk me' kalıbının fonksiyonu?",
          options: [
            "Sorumsuzluk",
            "Self-aware espri: kendiyle dalga + hafifletme",
            "Mazaret üretme",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Drunk me / future me / midnight me' = kendi içinde mizahlı dilimleme. Self-aware standardı.",
        },
        {
          q: "Sarhoş text sonrası telafi şart mı?",
          options: [
            "Hayır, sadece özür",
            "Evet — 'coffee on me' tarzı somut jest yardımcı",
            "Hediye",
            "Hiçbir şey",
          ],
          correct: 1,
          tr_explanation:
            "Telafi jest'i = ciddi olduğunu göster. 'Coffee on me this week' = somut + casual.",
        },
      ],
    },
    {
      id: "ex.frec8.2.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Cringing this morning",
      tr_translation: "Sabah utançtan kıvranıyorum",
      example: "Cringing this morning — sorry about last night's texts.",
      example_tr: "Sabah utançtan kıvranıyorum — dün geceki mesajlar için pardon.",
    },
    {
      id: "ex.frec8.2.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Sober me apologizes",
      tr_translation: "Ayık ben özür diler (self-aware)",
      example: "Sober me apologizes for drunk me's life updates at 2am.",
      example_tr: "Ayık ben, sarhoş ben'in gece 2'deki hayat güncellemeleri için özür diler.",
    },
    {
      id: "ex.frec8.2.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Wipe from memory",
      tr_translation: "Hafızandan sil (komik abartı)",
      example: "Please wipe last night from memory — coffee on me.",
      example_tr: "Lütfen dün geceyi hafızandan sil — kahve benden.",
    },
    {
      id: "ex.frec8.2.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Make it up with coffee",
      tr_translation: "Kahveyle telafi etmek",
      example: "Let me make it up with coffee — somewhere chill?",
      example_tr: "Sana kahveyle telafi edeyim — sakin bir yerde?",
    },
    {
      id: "ex.frec8.2.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Cringe out loud",
      tr_translation: "Sesli utanmak (espri)",
      example: "Just cringed out loud reading those messages back.",
      example_tr: "O mesajları yeniden okurken sesli utandım.",
    },
  ],
};

// ============================================================
// Lesson 8.3 — Long Silence Re-engagement (Uzun Sessizlik Sonrasi)
// ============================================================
export const flirtRecoveryLesson_8_3: BundledLesson = {
  id: "flirt.recovery.8.3",
  skill_id: "flirt.recovery",
  index: 3,
  title: "Uzun Sessizlik Sonrasi",
  description:
    "Birkac hafta cevap atmadin / atilmadi — yeniden ac, garipligi kabul et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.frec8.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Hey stranger",
      tr_translation: "Hey yabancı (uzun sessizlik sonrası)",
      example: "Hey stranger, it's been a while — how have you been?",
      example_tr: "Hey yabancı, uzun zaman olmuş — nasılsın?",
    },
    {
      id: "ex.frec8.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Olduugum yere donduk gibi — uzun zaman oldu, garip mi geliyorsun?",
      target: "Coming out of hibernation — long time no talk, awkward?",
      accepted_variants: [
        "Hey stranger — life got crazy on my end. How's yours?",
        "Falling off the planet for a sec — back now, hi!",
        "Long time no message — hope it's not weird.",
        "Hey, ghost no more — life got intense.",
      ],
      tr_hint:
        "'Out of hibernation' = kis uykusundan cikis. Uzun sessizlik sonrasi acilis kalibi.",
    },
    {
      id: "ex.frec8.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sorry for the ___ off the grid.",
      answer: "going",
      distractors: ["been", "having", "taking"],
      tr_hint:
        "'Going off the grid' = gozden kaybolmak / iletisimsiz olmak. Sessizlik kaliplari.",
    },
    {
      id: "ex.frec8.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Hope",
        "we",
        "can",
        "pick",
        "this",
        "back",
        "up",
      ],
      correct_sentence: "Hope we can pick this back up",
      tr_translation: "Bunu yeniden başlatabiliriz umarım.",
    },
    {
      id: "ex.frec8.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Where have you been all this time?",
      correct_sentence:
        "Hey stranger — life got crazy on my end, hope you've been well!",
      tr_explanation:
        "'Where have you been?' = suclayici. Doğru: kendi sessizligini sahiplen + sicak ac.",
    },
    {
      id: "ex.frec8.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "3 hafta cevap atmadin (is karisikligi). Yeniden ac, garipligi minimum tut.",
      npc_role: "Match",
      setting: "Reaching out after silence",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey stranger|hey|hi)",
            "(it'?s been|been) (a (while|minute)|a few weeks|forever)",
            "(life got|got) (crazy|hectic|messy|intense|swamped)",
            "(sorry for|apologies for) (the silence|going off the grid|the ghost)",
            "(hope you'?ve been|how have you been)( well|good)?",
            "(thinking of you|came across your profile|saw your story)",
          ],
          model_answers: ["Hey stranger — life got crazy. How are you?"],
          hint_tr:
            "Hafif ac: 'Hey stranger — life got crazy. How are you?'",
        },
        {
          speaker: "npc",
          message:
            "Hey! Was wondering where you disappeared. All good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|all good|getting there)",
            "(work was|family was|life was) (a lot|insane|chaos)",
            "(thanks for|appreciate) (asking|not (ghosting|holding it against))",
            "(would (be )?(good|great)|let'?s) (catch up|grab coffee|hang out)",
            "(pick this back up|pick up where we left|start fresh)",
            "(if you'?re|are you) (still up for|open to) (it|hanging)",
          ],
          model_answers: ["Thanks for asking — want to grab coffee + catch up?"],
          hint_tr:
            "Plan teklif et: 'Thanks for asking — want to grab coffee + catch up?'",
        },
        {
          speaker: "npc",
          message:
            "Just to be clear — are you actually around now, or going to vanish again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (question|to ask)|that'?s (a |) fair (one|question))",
            "(actually around|here for real|back for good)",
            "(the worst is (over|behind me)|things are settling)",
            "(want to (show up|do this right)|trying to (be |) consistent)",
            "(if life flares up again|if things shift)( i)? (will|promise to) (.+)",
            "(no more vanishing|no more going dark)",
          ],
          model_answers: ["Fair question — actually around now, the worst is over. If things shift again I'll tell you instead of going dark."],
          hint_tr:
            "Hesap verebilirlik + güven: 'Fair question — actually around now, the worst is over. If things shift again I'll tell you instead of going dark.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, let's do it. This weekend works.",
        },
      ],
    },
    {
      id: "ex.frec8.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uzun sessizlik sonrasi NE acilis daha guvenli?",
          options: [
            "Direkt sevisme teklifi",
            "'Hey stranger' + kendi sessizligini sahiplen + sicak ac",
            "Ozur'le baslayan uzun mesaj",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Hafiflik + sahiplenme = garipligi yikar. Cok agir ozur = kaciris hissi.",
        },
        {
          question: "Sessizligin sebebini ACIKLAMAK gerekli mi?",
          options: [
            "Cok detayli evet",
            "Kisaca evet — sahte bahane degil, gercek + kisa",
            "Hayir hic",
            "Sadece yalan",
          ],
          correct_index: 1,
          tr_explanation:
            "'Life got crazy' yeter. Detay = bahane gibi gozukur. Kisa + samimi.",
        },
        {
          question: "Karsi taraf CEVAP atmazsa?",
          options: [
            "Tekrar tekrar mesaj at",
            "Bir kere dene — cevap yoksa biraktigi yerde birak",
            "Bagir",
            "Suclama",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessizligi karsi tarafa hakaret olarak cevirmek = saygisizlik. Bir denedin, kapidasin.",
        },
      ],
    },
    {
      id: "ex.frec8.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey stranger — it's been a minute.",
      ipa: "heɪ ˈstreɪndʒə ɪts biːn ə ˈmɪnɪt",
      tr_hint:
        "'Hey stranger' = sıcak + samimi. 'Been a minute' = uzun zaman (deyim). Ekstra hafif, garipliği yık.",
    },
    {
      id: "ex.frec8.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Life got crazy on my end — hope you've been well.",
      voice_hint: "male_us",
      tr_hint:
        "'Life got crazy' yumuşak özür. 'On my end' = benim tarafımda. 'Hope you've been well' samimi merak.",
    },
    {
      id: "ex.frec8.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Was wondering where you disappeared — let's grab coffee and catch up.",
      transcription_target: "Was wondering where you disappeared — let's grab coffee and catch up.",
      tr_hint:
        "Dinle, yaz. 'Catch up' = hasret giderme, güncelle. Re-engagement standart kalıbı.",
    },
    {
      id: "ex.frec8.3.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "ghosting",
      tr_translation: "Sessizce ortadan kaybolma",
      example: "Sorry for the accidental ghosting — life got in the way.",
      example_tr: "İstemeden ortadan kaybolduğum için pardon — hayat araya girdi.",
    },
    {
      id: "ex.frec8.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Long time! Why you no write me?",
      correct_sentence:
        "Hey stranger — life got hectic on my end, sorry for the silence. How have you been?",
      tr_explanation:
        "'Why you no write me?' = suçlayıcı + bozuk yapı. Doğru: 'Hey stranger' (sıcak) + kendi sessizliğini sahiplen + samimi soru.",
    },
    {
      id: "ex.frec8.3.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Hey stranger — ___, sorry for the silence. ___?",
      slots: [
        { accepted: ["life got hectic on my end", "work has been brutal", "had a lot going on", "totally spaced out lately"] },
        { accepted: ["How have you been", "Catch up soon", "Coffee this week", "What's new"] },
      ],
      tr_hint:
        "Uzun sessizlik sonrası re-engagement: sıcak + sahiplen + spesifik soru. Türk öğrenci 'Why you didn't write?' der; bu suçlama; 'sorry for the silence' = sahiplenir.",
      example_filled:
        "Hey stranger — life got hectic on my end, sorry for the silence. How have you been?",
    },
    {
      id: "ex.frec8.3.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "Hey stranger — was wondering if you fell off the planet." },
        { speaker: "user" },
        { speaker: "npc", text: "Same — coffee Friday?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hahaha|lol)[,—-]? (almost did|kind of did)",
        "(life got|work has been) (hectic|crazy|brutal)",
        "(sorry|apologies) for (the silence|going dark|disappearing)",
        "(would love to|let'?s) (catch up|grab coffee)",
        "(missed you|been thinking about you)",
      ],
      tr_hint:
        "Sessizliği sahiplenip pozitife döndür. 'Hahaha almost did — life got hectic. Missed you, coffee soon?' tipi. Defansif olma; SAHIPLEN.",
      ideal_answer:
        "Hahaha almost did — life got hectic, sorry for going dark. Coffee soon? Missed you.",
    },
    {
      id: "ex.frec8.3.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "I thought you ghosted me — what's the story?",
      accepted_patterns: [
        "(accidental |unintentional )?ghosting",
        "(life|work) (got in the way|exploded)",
        "(never my intention|not on purpose)",
        "(coffee|drinks) on me (this week|to make it up)",
        "(missed you|been wanting to text)",
      ],
      think_seconds: 3,
      tr_hint:
        "Endişeyi gider + telafi öner. 'Accidental ghosting — life exploded, never on purpose. Coffee on me?' tipi. KABUL ET ama özür dilemekte boğulma.",
      ideal_response:
        "Accidental ghosting — life exploded, never on purpose. Coffee on me this week to make up?",
    },
    {
      id: "ex.frec8.3.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Uzun zamandır yazışmıyoruz, niye yazmıyorsun?",
      wrong_en: "Long time! Why you no write me?",
      right_en: "Hey stranger — life got hectic on my end, sorry for the silence. How have you been?",
      why_tr:
        "Türk öğrenci 'niye yazmıyorsun' kalıbını birebir çevirir = suçlama + 'why you no write' yapısal yanlış (do-support eksik: 'why don't you write'). Doğru: 'Hey stranger' = sıcak + kendi sessizliğini SAHIPLEN ('sorry for the silence') + samimi soru ('how have you been?'). Karşı tarafı suçlama.",
    },
    {
      id: "ex.frec8.3.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Uzun sessizlik sonrası re-engagement açılış?",
          options: [
            "'Why you no write me?' (suçlama)",
            "'Hey stranger' + kendi sessizliğini sahiplen",
            "Sessiz devam",
            "Suçla",
          ],
          correct: 1,
          tr_explanation:
            "'Hey stranger' = sıcak + casual. Kendi sessizliğini sahiplen = saygılı.",
        },
        {
          q: "'Catch up' anlamı?",
          options: [
            "Yetiş",
            "Hasret giderme / güncelle (sosyal)",
            "Yakala",
            "Kovala",
          ],
          correct: 1,
          tr_explanation:
            "'Catch up' = sosyal güncelleme. Re-engagement standart kalıbı.",
        },
        {
          q: "'Ghosting' niye negatif?",
          options: [
            "Hayalet inancı",
            "Sessizce kaybolma = saygısız + caring eksik sinyali",
            "Yapısal yanlış",
            "Eski terim",
          ],
          correct: 1,
          tr_explanation:
            "'Ghosting' = açıklamasız kaybolma. Modern dating'te en çok eleştirilen davranış.",
        },
        {
          q: "'Accidental ghosting' kalıbı:",
          options: [
            "İstemeden uzaklaşma — kasıtsız ifade",
            "Kasıtlı ghosting",
            "Yapısal yanlış",
            "Mizah",
          ],
          correct: 0,
          tr_explanation:
            "'Accidental ghosting' = niyetli değildim sinyali. Mazeret değil, dürüst kabul.",
        },
        {
          q: "Re-engagement'ta YAPILMAMASI gereken?",
          options: [
            "Sıcak açılış",
            "Suçlamak (sen yazmıyorsun)",
            "Telafi önermek",
            "Spesifik soru",
          ],
          correct: 1,
          tr_explanation:
            "Suçlama = savunmaya iter. Re-engagement = pozitif çerçeve + ileri görüş.",
        },
      ],
    },
    {
      id: "ex.frec8.3.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Hey stranger",
      tr_translation: "Hey yabancı (sıcak re-engagement)",
      example: "Hey stranger — life got hectic, sorry for going dark.",
      example_tr: "Hey yabancı — hayat yoğunlaştı, sessiz kaldığım için pardon.",
    },
    {
      id: "ex.frec8.3.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Life got crazy on my end",
      tr_translation: "Benim tarafta hayat çığırından çıktı",
      example: "Life got crazy on my end — hope you're well.",
      example_tr: "Benim tarafta hayat çığırından çıktı — umarım sen iyisindir.",
    },
    {
      id: "ex.frec8.3.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Pick this back up",
      tr_translation: "Bunu kaldığımız yerden devam edelim",
      example: "Hope we can pick this back up — coffee soon?",
      example_tr: "Umarım kaldığımız yerden devam edebiliriz — yakında kahve?",
    },
    {
      id: "ex.frec8.3.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Going dark",
      tr_translation: "Sessizliğe gömülmek",
      example: "Sorry for going dark — not on purpose.",
      example_tr: "Sessizliğe gömüldüğüm için pardon — kasıtlı değildi.",
    },
    {
      id: "ex.frec8.3.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Back for real this time",
      tr_translation: "Bu sefer gerçekten döndüm",
      example: "Back for real this time — promise no more vanishing.",
      example_tr: "Bu sefer gerçekten döndüm — söz veriyorum bir daha kaybolmak yok.",
    },
  ],
};

// ============================================================
// Lesson 8.5 — Drunk Text Morning After Apology
// ============================================================
export const flirtRecoveryLesson_8_5: BundledLesson = {
  id: "flirt.recovery.8.5",
  skill_id: "flirt.recovery",
  index: 5,
  title: "Sarhos Mesaj — Ertesi Sabah Ozur",
  description:
    "Dun gece kontrolden cikan mesajlar — ertesi sabah unutturma operasyonu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.frec8.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Mortified at last night",
      tr_translation: "Dun gece icin yerin dibine girmis durumdayim",
      example: "Mortified at last night — can we pretend that didn't happen?",
      example_tr: "Dun gece icin utancimdan oluyorum — hic olmamis gibi yapabilir miyiz?",
    },
    {
      id: "ex.frec8.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dun gece atilan mesajlar icin utanc duyuyorum — hic olmamis gibi davranabilir miyiz?",
      target: "Mortified at last night's messages — can we pretend that didn't happen?",
      accepted_variants: [
        "Mortified at last night — can we pretend that didn't happen?",
        "Cringing hard at last night — let's wipe the slate clean.",
        "Last night's texts haunt me — pretend you didn't see them?",
        "Dying over the texts I sent — fresh start please?",
        "Mortified about last night — please ignore everything I sent.",
      ],
      tr_hint:
        "'Mortified' = utanctan oluyorum. 'Pretend that didn't happen' = sosyal sil-bas yapma teklifi.",
    },
    {
      id: "ex.frec8.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can we ___ that didn't happen?",
      answer: "pretend",
      distractors: ["forget", "imagine", "assume"],
      tr_hint:
        "'Pretend X didn't happen' = X olmamis gibi davranmak. Sosyal sil-bas teklifi.",
    },
    {
      id: "ex.frec8.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Please",
        "ignore",
        "everything",
        "I",
        "sent",
        "last",
        "night",
      ],
      correct_sentence: "Please ignore everything I sent last night",
      tr_translation: "Lutfen dun gece gonderdigim her seyi gormezden gel.",
    },
    {
      id: "ex.frec8.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sorry I drink yesterday. Please not remember.",
      correct_sentence:
        "Mortified about last night — please ignore everything I sent.",
      tr_explanation:
        "'Sorry I drink yesterday' = bozuk dilbilgisi (past tense yok) + asiri vurgu. Dogru: 'Mortified about last night' (duygu) + 'please ignore' (kibarca sil) = native sounding hasar kontrolu.",
    },
    {
      id: "ex.frec8.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dun gece 3'te 8 mesaj attin (bir kismi cok forward). Sabah 9 — match aktif. Toparla.",
      npc_role: "Match",
      setting: "Morning after drunk text marathon",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|so|hey)",
            "(mortified|cringing|dying)( at| over| about)? (last night|those texts|the texts|what i sent)",
            "(can we|let'?s) (pretend|act like|agree) (that|those|none of that) (didn'?t happen|wasn'?t sent)",
            "(please|kindly) (ignore|forget|delete) (everything|what|those|all of them)",
            "(let me try (this|that) again|fresh start)",
          ],
          model_answers: ["Okay — mortified about last night. Can we pretend that didn't happen?"],
          hint_tr:
            "Ac: 'Okay — mortified about last night. Can we pretend that didn't happen?'",
        },
        {
          speaker: "npc",
          message: "Haha yeah those were... a lot. But honestly kind of flattering.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh god|whew|relief)",
            "(thanks for|appreciate) (being (so )?cool|the grace|not roasting me)",
            "(sober me|regular me|today me) (is much|has way) (calmer|chiller|less intense)",
            "(let me|i should) (make it up|redeem myself)",
            "(coffee|brunch|something) (sober|this time|on me)",
          ],
          model_answers: ["Thanks for being cool — sober me is much chiller. Coffee this weekend?"],
          hint_tr:
            "Pivot: 'Thanks for being cool — sober me is much chiller. Coffee this weekend?'",
        },
        {
          speaker: "npc",
          message: "Real question though — was the 'I miss you' part wine or actually you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer|honestly)[,—-]? (a bit of both|some truth, some volume)",
            "(sober me|day me) (would'?ve said it|likes you|misses you too) (.+)?(just (way )?quieter|with less drama)",
            "(wine (turned it|cranked it) up to (11|eleven))",
            "(would rather (show|prove)|let me show) it in person",
            "(no big declarations|skip the big speech)",
            "(.+)?(but yes|but truthfully)(.+)?",
          ],
          model_answers: ["Honest answer — some truth, some volume. Sober me would still say I like you, just way quieter. Let me show it in person."],
          hint_tr:
            "Olgun + ölçülü dürüstlük: 'Honest answer — some truth, some volume. Sober me would still say I like you, just way quieter. Let me show it in person.'",
        },
        {
          speaker: "npc",
          message: "Ha, deal. Sober coffee Saturday it is.",
        },
      ],
    },
    {
      id: "ex.frec8.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Drunk text sonrasi ertesi sabah NE acilis en guvenli?",
          options: [
            "Hicbir sey deme — gormezden gel",
            "'Mortified' + 'pretend that didn't happen' = sahiplen + hafif kac",
            "Tum mesajlari acikla + savun",
            "'I meant it all' = sahiplenip dogrula",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessizlik = garipligi buyutur. Sahiplenmek + hafif espriyle silmek = olgun + cazip.",
        },
        {
          question: "'Can we pretend that didn't happen?' formulu NICIN guclu?",
          options: [
            "Karsi tarafa sosyal cikis kapisi verir + utanci paylasir",
            "Saldirgan",
            "Yalanci",
            "Bozuk ingilizce",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsi taraf 'hayir hatirliyorum' demek zorunda kalmaz — gulup gecebilir. Kibar exit ramp.",
        },
        {
          question: "Drunk text sonrasi alcohol promotion'a girmemek icin NE yap?",
          options: [
            "'Was wasted' diye ovun",
            "'Too much last night' + sober me'ye pivot = sorumluluk dilinde kal",
            "Komik icme hikayeleri anlat",
            "Tekrar icmeyi teklif et",
          ],
          correct_index: 1,
          tr_explanation:
            "Sarhoslugu romantize etme — utancı kabul + 'sober me'ye pivot = olgun, App Store friendly.",
        },
      ],
    },
    {
      id: "ex.frec8.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mortified at last night — can we pretend that didn't happen?",
      ipa: "ˈmɔːtɪfaɪd æt lɑːst naɪt kæn wi prɪˈtend ðæt ˈdɪdənt ˈhæpən",
      tr_hint:
        "'Mortified' = MOR-ti-fayd, 3 hece, dramatik vurgu birinci hecede. 'Pretend' yumusak, 'didn't' kisaltma. Hafif gulumseyerek soyle — utanci espriyle tasi.",
    },
    {
      id: "ex.frec8.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Mortified at last night — ___ ___?",
      slots: [
        { accepted: ["can we", "could we", "can you", "want to"] },
        { accepted: ["pretend that didn't happen", "wipe last night from memory", "do a hard reset", "start fresh"] },
      ],
      tr_hint:
        "Sarhoş text ertesi sabah özür kalıbı — self-aware + reset isteme. Türk öğrenci 'Was wasted' diye övünür; bu olgunluk eksik; 'mortified' = utanır + 'sober me' tarafına pivot.",
      example_filled:
        "Mortified at last night — can we pretend that didn't happen?",
    },
    {
      id: "ex.frec8.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Hey morning — interesting messages last night lol." },
        { speaker: "user" },
        { speaker: "npc", text: "Sober you sounds way more chill — coffee?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(mortified|cringing|dying) (at|about) (last night|those texts)",
        "(can we|could we) (pretend|act like) (that didn'?t happen|nothing happened)",
        "(sober me|morning me) (is way|is so much) (more|chill|coherent)",
        "(let me make|can we) (a fresh|fresh) (start|reset)",
        "(coffee on me|drinks on me)[,—-]? (.+)",
      ],
      tr_hint:
        "Self-aware mahcup + sober me'ye pivot. 'Mortified at last night — sober me is way more chill, coffee?' tipi. ALKOL'ü romantize etme; sorumluluğu al.",
      ideal_answer:
        "Mortified at last night — sober me is way more chill. Can we hard reset over coffee?",
    },
    {
      id: "ex.frec8.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "So those 2am texts — wanna talk about that?",
      accepted_patterns: [
        "(honestly|truthfully) (cringing|dying) at (last night|those)",
        "(sober me|day me|morning me) (is|would never)",
        "(can we|let'?s) (pretend|act like|do a reset)",
        "(no excuse|wouldn'?t do that sober)",
        "(coffee|breakfast) (on me|to make up)",
      ],
      think_seconds: 3,
      tr_hint:
        "Self-aware + sober me pivot. 'Honestly cringing — sober me wouldn't have done that. Coffee to reset?' tipi. Esprileyici ama sorumluluk al.",
      ideal_response:
        "Honestly cringing — sober me wouldn't have spammed you. Coffee to reset?",
    },
    {
      id: "ex.frec8.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Dün gece çok kafam iyiydi, çok eğlenceliydi",
      wrong_en: "Last night I was so wasted, was very fun.",
      right_en: "Mortified at last night — can we pretend that didn't happen?",
      why_tr:
        "Türk öğrenci 'kafam iyiydi + eğlenceliydi' kalıbını birebir çevirir = alcohol romantization + olgunluk eksik = red flag. 'Was wasted' = övünç tonu. Doğru: 'mortified' (utanır) + sober me'ye pivot = sorumluluk dilinde, olgun.",
    },
    {
      id: "ex.frec8.5.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Sarhoş text ertesi sabah olgun yaklaşım?",
          options: [
            "'Was wasted lol' diye övün",
            "'Mortified' + sober me'ye pivot",
            "Yok say",
            "Bahane uydur",
          ],
          correct: 1,
          tr_explanation:
            "'Mortified' = utancı kabul. Sober me'ye pivot = sorumluluk dilinde olgun.",
        },
        {
          q: "'Hard reset' burada ne anlama gelir?",
          options: [
            "Bilgisayar sıfırlama",
            "Sıfırdan başlama / temiz sayfa açma",
            "Cihazı bozma",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Hard reset' = temiz başlangıç (sosyal mecaz). 'Let's hard reset over coffee' = bunu unutalım, sıfırdan.",
        },
        {
          q: "Sarhoş text sonrası YAPILMAMASI gereken?",
          options: [
            "Espri + sahiplen",
            "Alkolü romantize etmek + 'was wasted' diye övünme",
            "Telafi öner",
            "'Sober me' pivot",
          ],
          correct: 1,
          tr_explanation:
            "Alkol övünç = olgunluk eksik. Modern dating + Apple App Store: alcohol promotion'a girme.",
        },
        {
          q: "'Pretend that didn't happen' niye etkili?",
          options: [
            "Yalan",
            "Karşı tarafa exit ramp = 'hatırlıyorum' demek zorunda kalmaz",
            "Çok formal",
            "Anlamsız",
          ],
          correct: 1,
          tr_explanation:
            "Karşı taraf 'hayır hatırlıyorum' demek zorunda kalmaz. Kibar exit ramp.",
        },
        {
          q: "'Sober me' kalıbının fonksiyonu?",
          options: [
            "Bahane",
            "İki versiyonun farkı = self-aware + reset",
            "Yapısal",
            "Anlamsız",
          ],
          correct: 1,
          tr_explanation:
            "'Sober me / drunk me' = self-aware dilimleme. Bahane DEĞİL; sorumluluk paylaşımı.",
        },
      ],
    },
    {
      id: "ex.frec8.5.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Hard reset",
      tr_translation: "Sıfırdan başlatmak (sosyal)",
      example: "Can we hard reset over coffee? Sober version of me?",
      example_tr: "Kahve eşliğinde sıfırdan başlatabilir miyiz? Ayık halim?",
    },
    {
      id: "ex.frec8.5.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Sober me wouldn't have",
      tr_translation: "Ayık ben yapmazdı",
      example: "Sober me wouldn't have sent eleven texts at 2am.",
      example_tr: "Ayık ben gece 2'de on bir mesaj atmazdı.",
    },
    {
      id: "ex.frec8.5.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Some truth, some volume",
      tr_translation: "Biraz gerçek, biraz ses (sarhoş itiraf değerlendirmesi)",
      example: "Honest answer? Some truth, some volume — wine cranked it up.",
      example_tr: "Dürüst cevap? Biraz gerçek, biraz ses — şarap sesi açtı.",
    },
    {
      id: "ex.frec8.5.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Way more chill",
      tr_translation: "Çok daha sakin",
      example: "Sober me is way more chill — promise.",
      example_tr: "Ayık ben çok daha sakin — söz.",
    },
    {
      id: "ex.frec8.5.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Skip the big declarations",
      tr_translation: "Büyük açıklamaları atlayalım",
      example: "Let's skip the big declarations and start with coffee.",
      example_tr: "Büyük açıklamaları atlayıp kahveyle başlayalım.",
    },
  ],
};

// ============================================================
// Lesson 8.6 — Coming Back After Ghosting
// ============================================================
export const flirtRecoveryLesson_8_6: BundledLesson = {
  id: "flirt.recovery.8.6",
  skill_id: "flirt.recovery",
  index: 6,
  title: "Ghost Yaptin Geri Don — Sifirdan Acikla",
  description:
    "Haftalarca cevap atmadin, simdi geri donmek istiyorsun — borc ettigin acikamayi yap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.frec8.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I owe you an explanation",
      tr_translation: "Sana bir acikama borcluyum",
      example: "Hey, owe you an explanation — got pulled into a tough month.",
      example_tr: "Selam, sana bir acikama borcluyum — zor bir aya yakalandim.",
    },
    {
      id: "ex.frec8.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir acikama borclu hissediyorum — zor bir aydan geciyordum, kayboldugum icin pardon.",
      target: "Owe you an explanation — got pulled into a tough month, sorry for vanishing.",
      accepted_variants: [
        "Hey, owe you an explanation — got pulled into a tough month.",
        "I owe you an explanation — life pulled me under for a bit.",
        "You deserve an explanation — rough stretch took over.",
        "Owe you a real apology — got dragged through a hard few weeks.",
        "Owe you the truth — was going through it, sorry for the silence.",
      ],
      tr_hint:
        "'Owe you an explanation' = olgun sahiplenme. 'Pulled into a tough month' = bahane degil, sebep.",
    },
    {
      id: "ex.frec8.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Got ___ into a tough month.",
      answer: "pulled",
      distractors: ["dragged", "thrown", "stuck"],
      tr_hint:
        "'Pulled into' = istemden bagimsiz cekildim. Daha pasif/durumsal — bahaneden farkli.",
    },
    {
      id: "ex.frec8.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "No",
        "excuse",
        "but",
        "I",
        "owe",
        "you",
        "the",
        "truth",
      ],
      correct_sentence: "No excuse but I owe you the truth",
      tr_translation: "Mazeret degil ama sana gercegi borcluyum.",
    },
    {
      id: "ex.frec8.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sorry I disappear. I am back now okay?",
      correct_sentence:
        "Hey, owe you an explanation — got pulled into a tough month. No pressure to respond.",
      tr_explanation:
        "'Sorry I disappear' = past tense yok + 'okay?' baski yapiyor. Dogru: 'owe you an explanation' (sahiplenme) + sebep + 'no pressure' (alan birak).",
    },
    {
      id: "ex.frec8.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "5 hafta once konusuyordunuz, sen cevap vermedin. Simdi geri donmek istiyorsun. Bahane degil sebep ver.",
      npc_role: "Match",
      setting: "Re-engaging after ghosting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)( there)?",
            "(owe you|i owe you) (an explanation|the truth|an apology|a real (one|apology))",
            "(got pulled|got dragged|got swallowed) (into|by|under) (a tough|a hard|a rough)( month| stretch| few weeks)?",
            "(no excuse|not making excuses|no pressure to respond)",
            "(sorry for|apologies for) (vanishing|going dark|the silence|disappearing)",
          ],
          model_answers: ["Hey, owe you an explanation — got pulled into a tough month. No pressure to respond."],
          hint_tr:
            "Sahiplen: 'Hey, owe you an explanation — got pulled into a tough month. No pressure to respond.'",
        },
        {
          speaker: "npc",
          message: "Hey... appreciate you reaching out. Everything okay now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|getting there|on the other side)",
            "(thanks for|appreciate you) (asking|the grace|not writing me off)",
            "(if you'?re|are you) (open|down|up) (to|for) (starting over|a reset|trying again)",
            "(no expectations|totally understand if not|fully get if you'?re done)",
            "(coffee|grab a drink|hang) (low key|no pressure) (sometime|this week)",
          ],
          model_answers: ["Getting there — thanks for asking. Open to a reset over coffee, no pressure?"],
          hint_tr:
            "Onerme: 'Getting there — thanks for asking. Open to a reset over coffee, no pressure?'",
        },
        {
          speaker: "npc",
          message: "Honestly — how do I know you won't disappear again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (question|to ask)|completely fair)",
            "(can'?t (promise|guarantee))(.+)?(but|but i can)",
            "(if things get hard again|if i hit another wall)(.+)?(i'?ll (tell you|say something|reach out))",
            "(rather (say|tell you) i need space|will name it next time)",
            "(slow this|take this) (low key|step by step|gently)",
            "(want to earn|trying to earn|earning) (it|your trust)",
          ],
          model_answers: ["Fair to ask — can't guarantee perfect, but if things get hard again I'll tell you instead of going dark. Want to earn the trust back slowly."],
          hint_tr:
            "Hesap verebilirlik + somut söz: 'Fair to ask — can't guarantee perfect, but if things get hard again I'll tell you instead of going dark. Want to earn the trust back slowly.'",
        },
        {
          speaker: "npc",
          message: "Yeah. Low key coffee works — let me know when.",
        },
      ],
    },
    {
      id: "ex.frec8.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Ghost sonrasi geri donerken EN ONEMLI kural?",
          options: [
            "Hic ghost yapmamis gibi davran",
            "Sebep ver ama bahane uretme + karsi tarafa cikis alani birak",
            "Karsi tarafi suclu hissettir",
            "Ozur dileme, davet at",
          ],
          correct_index: 1,
          tr_explanation:
            "Sahiplenme + alan birakma = saygi. 'No pressure to respond' = ego'yu degil iliskiyi koru.",
        },
        {
          question: "'Got pulled into a tough month' NEDEN 'I was busy'tan daha iyi?",
          options: [
            "Cunku daha uzun",
            "Daha somut + duygusal + 'busy' kacis bahanesi gibi degil",
            "Daha kibar",
            "Daha karmasik gramatik",
          ],
          correct_index: 1,
          tr_explanation:
            "'Busy' = herkesin bahanesi. 'Pulled into a tough month' = gercek bir donem, sahiplenme hissi var.",
        },
        {
          question: "Karsi taraf 'forgive me?' isteyince NE deme?",
          options: [
            "'No pressure to respond / fully get if you'\\''re done'",
            "'You have to forgive me'",
            "'Forget it then'",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Affedilmeyi talep etme — sun. Karsi tarafa hayir deme alani vermek = olgunluk.",
        },
      ],
    },
    {
      id: "ex.frec8.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Owe you an explanation — got pulled into a tough month.",
      ipa: "əʊ ju ən ˌekspləˈneɪʃən ɡɒt pʊld ˈɪntə ə tʌf mʌnθ",
      tr_hint:
        "'Owe you' bagli okun (ow-yoo), gunluk konusmada I dustu. 'Explanation' = eks-pluh-NAY-shun, 4 hece vurgu 3.'de. Sessiz/samimi ton — ozur agirligi tasiyici.",
    },
    {
      id: "ex.frec8.6.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Owe you an explanation — ___. ___.",
      slots: [
        { accepted: ["got pulled into a tough month", "life took a hard turn", "had to focus on family stuff", "was processing a lot"] },
        { accepted: ["No pressure to respond", "Totally get if you're done", "Just wanted you to know", "Doing better now"] },
      ],
      tr_hint:
        "Ghost yaptıktan sonra geri dönüş kalıbı — sahiplen + sebep + baskısız. Türk öğrenci 'Sorry I was busy' der; bu generic; 'tough month' = somut + sahiplenir.",
      example_filled:
        "Owe you an explanation — got pulled into a tough month. No pressure to respond.",
    },
    {
      id: "ex.frec8.6.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "Wow, look who's alive." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the honesty — give me a sec." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(owe you|i owe you) (an explanation|the truth)",
        "(got pulled into|life took|had to deal with) (.+)",
        "(no pressure|totally get) (to respond|if you'?re done)",
        "(was wrong|that wasn'?t fair),? (.+)",
        "(forgive me|fully understand)",
      ],
      tr_hint:
        "Ghost sonrası geri dönüş — sahiplen + somut sebep + sınırı bırak. 'Owe you an explanation — tough month, no excuse. No pressure to respond' tipi.",
      ideal_answer:
        "Owe you an explanation — got pulled into a tough month, no excuse. No pressure to respond.",
    },
    {
      id: "ex.frec8.6.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "I needed an explanation back then. Why now?",
      accepted_patterns: [
        "(you'?re right|that'?s fair)[,—-]? (.+)",
        "(processing|figuring out|managing) (something|a lot|family stuff)",
        "(no excuse|wouldn'?t blame you)",
        "(can'?t take|i can'?t take) it back",
        "(just wanted you to know|wanted to set the record straight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hatayı kabul + saygılı sebep. 'You're right — was processing family stuff, no excuse. Wanted you to know' tipi. Karşı tarafa yargılama hakkı tanı.",
      ideal_response:
        "You're right — was processing family stuff, no excuse. Just wanted you to know.",
    },
    {
      id: "ex.frec8.6.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Üzgünüm meşguldüm, beni affet",
      wrong_en: "Sorry I was busy. Forgive me.",
      right_en: "Owe you an explanation — got pulled into a tough month. No pressure to respond.",
      why_tr:
        "Türk öğrenci 'meşguldüm + affet' kalıbını birebir çevirir = 'busy' generic bahane + 'forgive me' talep (affedilmeyi isteyemezsin, SUNARSIN). Doğru: 'owe you' (sahiplen) + somut sebep ('tough month') + 'no pressure' = saygı.",
    },
    {
      id: "ex.frec8.6.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Ghost'tan geri dönüşte ne yapılır?",
          options: [
            "Sus, devam et",
            "Sahiplen ('owe you an explanation') + somut sebep + baskısız",
            "Suçla",
            "Yalan söyle",
          ],
          correct: 1,
          tr_explanation:
            "'Owe you' = sahiplenme. Somut sebep = generic değil. 'No pressure' = saygı.",
        },
        {
          q: "'Busy' bahanesi niye zayıf?",
          options: [
            "Yapısal yanlış",
            "Herkesin bahanesi = inanılmaz",
            "Çok formal",
            "Yanlış kelime",
          ],
          correct: 1,
          tr_explanation:
            "'Busy' = generic. 'Pulled into a tough month' = somut + sahiplenir.",
        },
        {
          q: "'No pressure to respond' niye olgun?",
          options: [
            "Baskı yok = karşı tarafa hayır deme alanı = saygı",
            "Yapısal",
            "Çok kibar",
            "Anlamsız",
          ],
          correct: 0,
          tr_explanation:
            "Affedilmeyi talep etmek yerine sunarsın. Karşı tarafa hayır deme alanı = olgunluk.",
        },
        {
          q: "Karşı taraf 'forgive me?' isteyince ne deme?",
          options: [
            "'No pressure / fully get if you're done'",
            "'You have to forgive me'",
            "'Forget it'",
            "Hiçbir şey",
          ],
          correct: 0,
          tr_explanation:
            "Affedilmeyi sun, talep etme. 'Fully get if you're done' = olgun ret kabul.",
        },
        {
          q: "Ghost'tan geri dönmek için ideal süre?",
          options: [
            "1 hafta sonra",
            "Sebep çözüldüğünde, dürüst açıklama ile her zaman",
            "1 ay sonra",
            "Hiç",
          ],
          correct: 1,
          tr_explanation:
            "Süre kuralı yok. Sahiplen + somut açıklama + baskısız = her zaman uygun.",
        },
      ],
    },
    {
      id: "ex.frec8.6.vt2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Owe you an explanation",
      tr_translation: "Sana bir açıklama borçluyum",
      example: "Owe you an explanation — got pulled into a tough month.",
      example_tr: "Sana bir açıklama borçluyum — zor bir aya yakalandım.",
    },
    {
      id: "ex.frec8.6.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Got pulled under",
      tr_translation: "Altına çekildim (zor dönem)",
      example: "Got pulled under for a while — family stuff.",
      example_tr: "Bir süre altına çekildim — aile meselesi.",
    },
    {
      id: "ex.frec8.6.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Won't disappear again",
      tr_translation: "Bir daha kaybolmayacağım",
      example: "Won't disappear again — if life flares up I'll name it.",
      example_tr: "Bir daha kaybolmayacağım — hayat ters giderse söylerim.",
    },
    {
      id: "ex.frec8.6.vt5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Earn the trust back",
      tr_translation: "Güveni yeniden kazanmak",
      example: "Want to earn the trust back — slowly, no pressure.",
      example_tr: "Güveni yeniden kazanmak istiyorum — yavaş, baskısız.",
    },
    {
      id: "ex.frec8.6.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Fully get if you're done",
      tr_translation: "Bittiğin durumu anlarım",
      example: "Fully get if you're done — no expectations.",
      example_tr: "Bittiğin durumu anlarım — beklenti yok.",
    },
  ],
};

// ============================================================
// Lesson 8.7 — Wrong Person Text Recovery
// ============================================================
export const flirtRecoveryLesson_8_7: BundledLesson = {
  id: "flirt.recovery.8.7",
  skill_id: "flirt.recovery",
  index: 7,
  title: "Yanlis Kisi — Yanlis Sohbete Mesaj",
  description:
    "Ozel bir mesaji yanlis sohbete attin — hafif gul, hizla geri al.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.frec8.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "That wasn't meant for you",
      tr_translation: "Bu sana atilmayacakti",
      example: "That wasn't meant for you — pretend you didn't see that.",
      example_tr: "Bu sana atilmayacakti — gormemis gibi yap.",
    },
    {
      id: "ex.frec8.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu sana atilmayacakti — pardon, gormemis gibi yapabilir misin?",
      target: "That wasn't meant for you — sorry, pretend you didn't see that?",
      accepted_variants: [
        "That wasn't meant for you — pretend you didn't see that.",
        "Oh no, wrong chat — pretend that didn't happen!",
        "Definitely meant that for someone else — please ignore!",
        "Wrong thread — apologies, scrub that from your screen.",
        "That wasn't meant for you — let's both pretend it never happened.",
      ],
      tr_hint:
        "'Wasn't meant for you' = sana yonelik degildi. 'Pretend you didn't see' = sosyal sil-bas teklifi.",
    },
    {
      id: "ex.frec8.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Wrong ___ — pretend you didn't see that.",
      answer: "chat",
      distractors: ["text", "place", "side"],
      tr_hint:
        "'Wrong chat' / 'wrong thread' = yanlis sohbet. Dogal mobil dili.",
    },
    {
      id: "ex.frec8.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Pretend",
        "you",
        "didn't",
        "see",
        "that",
        "please",
      ],
      correct_sentence: "Pretend you didn't see that please",
      tr_translation: "Lutfen gormemis gibi yap.",
    },
    {
      id: "ex.frec8.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sorry wrong person. Delete delete delete!!!",
      correct_sentence:
        "That wasn't meant for you — pretend you didn't see that.",
      tr_explanation:
        "'Delete delete delete!!!' = panik + komik degil garip. Dogru: 'wasn't meant for you' (sahiplen) + 'pretend you didn't see' (hafif espri) = sakin damage control.",
    },
    {
      id: "ex.frec8.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasina match hakkinda yazdigin mesaji yanlislikla match'a attin. Hizla toparla.",
      npc_role: "Match",
      setting: "Wrong person text damage control",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|oh god|wait)",
            "(that wasn'?t meant for you|wrong (chat|thread|person)|definitely not for you)",
            "(pretend you didn'?t see (that|it)|scrub (that|it) (off|from)|ignore that)",
            "(landed weird|came out wrong|wires got crossed)",
            "(let me|can i) (try (this|that) again|start over)",
          ],
          model_answers: ["Oh no, wrong chat — that wasn't meant for you, pretend you didn't see that!"],
          hint_tr:
            "Hizla: 'Oh no, wrong chat — that wasn't meant for you, pretend you didn't see that!'",
        },
        {
          speaker: "npc",
          message: "Haha too late, I read it. Should I be worried? 😅",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|ha|okay)",
            "(busted|caught|so much for that)",
            "(in my defense|for the record|honestly)",
            "(was saying (good|nice) things|nothing (bad|terrible)|all (compliments|positive))",
            "(let me try (this|that) again|fresh start)",
            "(coffee|drinks|hang) (might (help|fix this)|sounds (better|safer))",
          ],
          model_answers: ["Busted — for the record it was good things. Let me try this again — coffee?"],
          hint_tr:
            "Esprili topla: 'Busted — for the record it was good things. Let me try this again — coffee?'",
        },
        {
          speaker: "npc",
          message: "Was it actually nice? Or are you covering?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually nice|genuinely nice|all good things)",
            "(not covering|swear (i'?m not|im not) covering)",
            "(saying you (looked|sounded) (great|cool|funny))",
            "(was the kind of thing|the kind of message)( you'?d screenshot|that flatters)",
            "(would rather (tell|show) you in person|easier face to face)",
            "(let it be|consider it) (a teaser|a preview)",
          ],
          model_answers: ["Actually nice, swear I'm not covering — was saying you looked great. Would rather tell you the rest in person."],
          hint_tr:
            "Dürüst + sevimli: 'Actually nice, swear I'm not covering — was saying you looked great. Would rather tell you the rest in person.'",
        },
        {
          speaker: "npc",
          message: "Lol redemption coffee — I'm in.",
        },
      ],
    },
    {
      id: "ex.frec8.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yanlis kisi mesajinda EN HIZLI ne yapilmali?",
          options: [
            "Hicbir sey — gormez umariz",
            "Hizla (saniyeler icinde) hafif ton + 'wasn'\\''t meant for you' + 'pretend' = damage control",
            "Hesabi sil",
            "Tum mesajlari sil ve gizle",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessizlik = merak buyutur. Hizli + hafif kabul = en az garip cikis.",
        },
        {
          question: "Karsi taraf 'should I be worried?' diye sorarsa NE deme?",
          options: [
            "Ciddi savunma",
            "Espri ile evrilt — 'for the record it was good things' = guvence + hafiflik",
            "Sus",
            "'Yes you should'",
          ],
          correct_index: 1,
          tr_explanation:
            "Endise tetigi kapatmak gerek — hafif espri + olumlu cerceve = soft landing.",
        },
        {
          question: "'Pretend you didn't see that' NEDEN guclu bir formul?",
          options: [
            "Karsi tarafa sosyal cikis kapisi verir = kimse zorlanmaz",
            "Saldirgan",
            "Bozuk ingilizce",
            "Resmiyetli",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsi taraf gulup gecebilir, sosyal sozlesme — kimse mecbur kalmaz.",
        },
      ],
    },
    {
      id: "ex.frec8.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "That wasn't meant for you — pretend you didn't see that.",
      ipa: "ðæt ˈwɒzənt ment fə ju prɪˈtend ju ˈdɪdənt siː ðæt",
      tr_hint:
        "'Wasn't' = WUH-zunt, hizli. 'Meant for you' bagli (men-fər-yoo). 'Pretend' yumusak pi-TREND. Komik panik tonu — gulumseyerek kac.",
    },
    {
      id: "ex.frec8.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "That wasn't ___ for you — ___ ___?",
      slots: [
        { accepted: ["meant", "intended", "supposed to be sent"] },
        { accepted: ["pretend you didn't see that", "can we please erase", "let's just delete"] },
        { accepted: ["please", "okay", "deal", "ahaha"] },
      ],
      tr_hint:
        "Yanlış kişiye text recovery kalıbı — komik panik + exit ramp. Türk öğrenci dramatik özür diler; bunun yerine espriyle hızla kaç.",
      example_filled:
        "That wasn't meant for you — pretend you didn't see that, please?",
    },
    {
      id: "ex.frec8.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Lol, 'sorry I'm so late for work tomorrow' — that for me?" },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha consider it forgotten. Have a good night." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(omg|oh no|lol)[,—-]? (that|those)",
        "(wasn'?t |not )meant for you",
        "(pretend|act like) you (didn'?t see|never saw)",
        "(can you|please)[,—-]? (delete|erase|wipe)",
        "(meant for |sent to wrong person)",
      ],
      tr_hint:
        "Yanlış kişiye text — komik panik + exit ramp. 'Omg that wasn't meant for you — pretend you didn't see that?' tipi. Dramatik özür yapma; gülümse.",
      ideal_answer:
        "Omg, that wasn't meant for you — pretend you didn't see that?",
    },
    {
      id: "ex.frec8.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Wait, I got a text about your boss being annoying — was that for me?",
      accepted_patterns: [
        "(haha|lol|omg)[,—-]? (no|absolutely not)",
        "(meant for|was for) (my friend|my mom|someone else)",
        "(pretend|act like) (you didn'?t see|nothing happened)",
        "(consider it deleted|deleted from my brain)",
        "(typing fast|moving fast),? (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hafif panik + exit ramp + espri. 'Haha no — meant for my friend! Pretend you didn't see that' tipi. Drama yok; gülümseyerek geç.",
      ideal_response:
        "Haha no — meant for my friend! Pretend you didn't see that?",
    },
    {
      id: "ex.frec8.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Aman tanrım yanlış kişiye gönderdim, çok özür dilerim",
      wrong_en: "Oh my god wrong person, I am very very sorry.",
      right_en: "That wasn't meant for you — pretend you didn't see that?",
      why_tr:
        "Türk öğrenci dramatik özür + 'very very sorry' diye çevirir = panik amplifiye eder + ciddiyet katar. Modern: espriyle hızla kapat. 'Pretend you didn't see' = sosyal sözleşme + exit ramp. Karşı taraf gülümser, drama olmaz.",
    },
    {
      id: "ex.frec8.7.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Yanlış kişiye text recovery'de en olgun yaklaşım?",
          options: [
            "Dramatik özür + 'very very sorry'",
            "Hafif espri + exit ramp ('pretend you didn't see')",
            "Sus + yok say",
            "Karşı tarafı suçla",
          ],
          correct: 1,
          tr_explanation:
            "Drama amplifiye. 'Pretend you didn't see' = sosyal sözleşme = kimse zorlanmaz.",
        },
        {
          q: "'Pretend you didn't see that' niye güçlü?",
          options: [
            "Karşı tarafa exit ramp = kimse zorlanmaz",
            "Saldırgan",
            "Yapısal",
            "Resmi",
          ],
          correct: 0,
          tr_explanation:
            "Karşı taraf gülümser veya sessiz devam edebilir — sosyal sözleşme.",
        },
        {
          q: "Drama yapmamak niye önemli?",
          options: [
            "Çok dikkat çeker, basit hatayı büyütür",
            "Yapısal",
            "Çok kibar",
            "Yanlış",
          ],
          correct: 0,
          tr_explanation:
            "Küçük hatayı büyütme. 'Lol wasn't for you' = küçük + komik.",
        },
        {
          q: "Türk hatası: 'very very sorry':",
          options: [
            "Resmi olduğu için iyi",
            "Abartı + ciddiyet ekler = drama büyütür",
            "Yapısal",
            "Doğru",
          ],
          correct: 1,
          tr_explanation:
            "'Very very' = drama amplifiye. 'Pretend you didn't see' = hafif + sosyal.",
        },
        {
          q: "Yanlış kişiye gönderildiği SUMMARYNDE en iyi davranış?",
          options: [
            "Sahiplen + espri + dikkati hızla başka şeye çevir",
            "Tekrar tekrar özür",
            "Yok say",
            "Sus",
          ],
          correct: 0,
          tr_explanation:
            "Sahiplen + espri + 'how was your day?' gibi konu değiştir = hızlı geçiş.",
        },
      ],
    },
    {
      id: "ex.frec8.7.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Wrong chat",
      tr_translation: "Yanlış sohbet",
      example: "Oh no — wrong chat! Pretend you didn't see that.",
      example_tr: "Olamaz — yanlış sohbet! Görmemiş gibi yap.",
    },
    {
      id: "ex.frec8.7.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "For the record",
      tr_translation: "Kayıt için (savunma + espri)",
      example: "For the record, it was nice things about you.",
      example_tr: "Kayıt için, hakkındaki güzel şeylerdi.",
    },
    {
      id: "ex.frec8.7.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Busted",
      tr_translation: "Yakalandım (espri)",
      example: "Okay busted — but it was a compliment, swear!",
      example_tr: "Tamam yakalandım — ama iltifattı, yemin!",
    },
    {
      id: "ex.frec8.7.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Crisis averted",
      tr_translation: "Kriz savuşturuldu",
      example: "Crisis averted — sticking to one chat from now on.",
      example_tr: "Kriz savuşturuldu — bundan sonra tek sohbete sadık.",
    },
    {
      id: "ex.frec8.7.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Redemption coffee",
      tr_translation: "Telafi kahvesi (espri)",
      example: "Let me earn it with redemption coffee?",
      example_tr: "Telafi kahvesiyle kazanayım?",
    },
  ],
};

// ============================================================
// Lesson 8.8 — Awkward Emoji Gaffe Recovery
// ============================================================
export const flirtRecoveryLesson_8_8: BundledLesson = {
  id: "flirt.recovery.8.8",
  skill_id: "flirt.recovery",
  index: 8,
  title: "Garip Emoji Hatasi — Geri Al",
  description:
    "Yanlis emoji yolladin (kuru, agresif, ya da uygunsuz) — hizla netlestir, espri ile yumusatici geri al.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.frec8.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "That emoji landed weird",
      tr_translation: "O emoji garip durdu / yanlis anlasildi",
      example: "Wow that emoji landed weird — let me try that again.",
      example_tr: "Vay o emoji garip durdu — bir daha deneyim.",
    },
    {
      id: "ex.frec8.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "O emoji garip durdu — yanlis anlam tasimissim, tekrar deneyeyim.",
      target: "That emoji landed weird — wrong vibe, let me try that again.",
      accepted_variants: [
        "Wow that emoji landed weird — let me try that again.",
        "That emoji came out wrong — total mis-send, do-over?",
        "Emoji misfire — that's not the energy I meant.",
        "Picked the wrong emoji there — let me reset that one.",
        "That emoji read way wrong — let me try again with words.",
      ],
      tr_hint:
        "'Landed weird' = garip dustu/anlasildi. 'Let me try that again' = sosyal reset talebi.",
    },
    {
      id: "ex.frec8.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let me ___ that again.",
      answer: "try",
      distractors: ["do", "send", "fix"],
      tr_hint:
        "'Let me try that again' = sosyal reset kalibi. Konusmaya devam icin guzel kopru.",
    },
    {
      id: "ex.frec8.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Not",
        "the",
        "energy",
        "I",
        "was",
        "going",
        "for",
      ],
      correct_sentence: "Not the energy I was going for",
      tr_translation: "Hedefledigim hava bu degildi.",
    },
    {
      id: "ex.frec8.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sorry wrong emoji. I am not weird person I promise.",
      correct_sentence:
        "Wow that emoji landed weird — not the energy I was going for, let me try that again.",
      tr_explanation:
        "'I am not weird person I promise' = savunmaci + 'a' artikeli eksik + abartili. Dogru: hafif farkindalik ('landed weird') + sahiplenme ('not the energy I meant') + reset talebi.",
    },
    {
      id: "ex.frec8.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Iltifat icin kalp atmak istedin, yanlislikla yilan emojisi gonderdin. Match cevap atti: '?? '. Toparla.",
      npc_role: "Match",
      setting: "Recovering from misfired emoji",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow|oh|okay)",
            "(that emoji|emoji) (landed weird|came out wrong|misfired|read way wrong)",
            "(not the energy|wrong vibe|not what i meant) (i was going for|i meant|i was sending)",
            "(let me|can i) (try (this|that) again|reset|start over)",
            "(meant|going for) (a heart|something (sweet|nice|warm))",
          ],
          model_answers: ["Wow that emoji landed weird — not the energy I meant. Let me try that again — meant the heart!"],
          hint_tr:
            "Ac: 'Wow that emoji landed weird — not the energy I meant. Let me try that again — meant the heart!'",
        },
        {
          speaker: "npc",
          message: "Lol I was wondering what the snake meant. Crisis averted.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thumbs (and )?fingers betrayed me|fat fingers|autocomplete chaos)",
            "(thanks for|appreciate) (laughing|the grace|not running)",
            "(let me|i'?ll) (use (real )?words from now on|stick to words)",
            "(actually wanted to say|what i meant was)",
            "(you (looked|sound) (great|amazing)|nice (pic|photo))",
          ],
          model_answers: ["Thumbs betrayed me — sticking to words. What I meant was, you looked great in that pic."],
          hint_tr:
            "Yumusat: 'Thumbs betrayed me — sticking to words. What I meant was, you looked great in that pic.'",
        },
        {
          speaker: "npc",
          message: "So if not a snake — what were you actually trying to say?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|real answer)[,—-]? (a heart|something (warm|sweet|nice))",
            "(meant something like|going for)[,—-]? (.+)",
            "(would rather (just )?say it|saying it in words)",
            "(your (pic|photo|message) (made me smile|was the highlight))",
            "(let'?s try this without emojis|words from here on)",
            "(easier face to face|easier in person)",
          ],
          model_answers: ["Honestly — was going for a heart. Your photo made me smile, easier said in words than emojis."],
          hint_tr:
            "Sözle netleştir + sıcak: 'Honestly — was going for a heart. Your photo made me smile, easier said in words than emojis.'",
        },
        {
          speaker: "npc",
          message: "Aww okay, words save the day. Thanks 😊",
        },
      ],
    },
    {
      id: "ex.frec8.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yanlis emoji sonrasi EN HIZLI ne yapmali?",
          options: [
            "Sessiz kal",
            "'Landed weird' + 'not the energy' + 'let me try again' = farkindalik + reset",
            "Karsi tarafi suclu hissettir",
            "Sadece silmek yeter",
          ],
          correct_index: 1,
          tr_explanation:
            "Bos birakirsan yanlis anlam yerlesir. Hizli sahiplenip cumlelerle netlestir.",
        },
        {
          question: "Emoji hatasini KOMIKLESTIRMENIN avantaji nedir?",
          options: [
            "Garipligi yikar + sosyal yetenek gosterir + cazip tutar",
            "Hicbir sey",
            "Garipligi buyutur",
            "Bozuk ingilizce",
          ],
          correct_index: 0,
          tr_explanation:
            "'Thumbs betrayed me' tarzi mizah = utanc anini cazibe firsatina cevirir.",
        },
        {
          question: "Reset sonrasi NE ile devam etmek en iyisi?",
          options: [
            "Daha cok emoji",
            "Aciklayici sozcuklerle gercek niyeti soyle = netlik + samimiyet",
            "Konuyu degistir",
            "Ozur dile yine",
          ],
          correct_index: 1,
          tr_explanation:
            "'What I meant was...' = niyeti soze cevir, belirsizligi kapat.",
        },
      ],
    },
    {
      id: "ex.frec8.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "That emoji landed weird — let me try that again.",
      ipa: "ðæt ɪˈməʊdʒi ˈlændɪd wɪəd let mi traɪ ðæt əˈɡen",
      tr_hint:
        "'Emoji' = i-MOH-jee, 3 hece, vurgu 2. hecede. 'Landed' kisa LAN-did. 'Weird' tek hece, uzun /iːə/. Hafif gulumseyerek soyle — garipligi sahiplenip espri kat.",
    },
    {
      id: "ex.frec8.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "That emoji ___ — let me ___.",
      slots: [
        { accepted: ["landed weird", "got auto-corrected", "wasn't what I meant", "betrayed me"] },
        { accepted: ["try that again", "say it in words", "explain what I meant", "redo that"] },
      ],
      tr_hint:
        "Emoji hata recovery kalıbı — sahiplen + niyeti sözle açıkla. Türk öğrenci 'Sorry wrong emoji' der; bu yetersiz; SPESIFIK niyet açıkla.",
      example_filled:
        "That emoji landed weird — let me try that again.",
    },
    {
      id: "ex.frec8.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Lol that eggplant emoji — what was that?" },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha okay redemption arc accepted." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(omg|lol|haha)[,—-]? (that|that one)",
        "(thumbs betrayed me|autocomplete betrayed me)",
        "(landed weird|wasn'?t what i meant|came out wrong)",
        "(what i meant was|i meant to say)",
        "(let me try|let me redo)",
      ],
      tr_hint:
        "Emoji gaffe — mizah + niyet açıklama. 'Lol my thumbs betrayed me — what I meant was: looking forward to coffee' tipi. Espri = utancı cazibeye çevirir.",
      ideal_answer:
        "Lol my thumbs betrayed me — what I meant was: I'm looking forward to coffee.",
    },
    {
      id: "ex.frec8.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "That smirk emoji — what should I read into that?",
      accepted_patterns: [
        "(omg|haha) (let me|i should)",
        "(say it in words|use words)",
        "(landed weird|wasn'?t what i meant|came out wrong)",
        "(what i meant)[,—-]? (.+)",
        "(i'?ll be clearer|let me be clearer)",
      ],
      think_seconds: 3,
      tr_hint:
        "Emoji yanlış anlaşıldı — sözle açıkla. 'Haha let me say it in words: I'm just excited to see you Friday' tipi. Belirsiz emoji yerine SPESIFIK kelime.",
      ideal_response:
        "Haha let me say it in words — I'm just excited to see you Friday. No mystery.",
    },
    {
      id: "ex.frec8.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Pardon yanlış emoji",
      wrong_en: "Sorry wrong emoji.",
      right_en: "That emoji landed weird — let me try that again.",
      why_tr:
        "Türk öğrenci 'pardon yanlış' kalıbını birebir çevirir = jenerik + niyet açıklamaz. Doğru: hata sahiplen + niyeti sözle aç. 'Landed weird' = self-aware mizah; 'let me try again' = düzeltme.",
    },
    {
      id: "ex.frec8.8.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Emoji gaffe recovery yaklaşımı?",
          options: [
            "'Sorry wrong emoji' (generic)",
            "Sahiplen + 'let me say it in words' (niyet açıkla)",
            "Sus",
            "Sürekli emoji at",
          ],
          correct: 1,
          tr_explanation:
            "Sözle açıklama = belirsizlik kapanır. Emoji'de yanlış anlama riski yüksek.",
        },
        {
          q: "'Thumbs betrayed me' kalıbı:",
          options: [
            "Yapısal yanlış",
            "Self-aware mizah — utancı cazibeye çevirir",
            "Tahkir",
            "Çok formal",
          ],
          correct: 1,
          tr_explanation:
            "'Thumbs betrayed me' = parmaklarım ihanet etti = mizah. Utancı hafifleştirir.",
        },
        {
          q: "Reset sonrası ne yapılır?",
          options: [
            "Daha çok emoji",
            "Sözle gerçek niyeti söyle = netlik + samimiyet",
            "Konu değiştir",
            "Yine özür",
          ],
          correct: 1,
          tr_explanation:
            "'What I meant was...' = niyeti söze çevir, belirsizliği kapat.",
        },
        {
          q: "Karşı taraf emoji'yi yanlış yorumlarsa?",
          options: [
            "Sus",
            "Komik mizahla düzelt + sözle açıkla",
            "Suçla",
            "Aynı emoji'yi tekrar at",
          ],
          correct: 1,
          tr_explanation:
            "Sözle açıkla. Emoji ile düzeltme = daha çok belirsizlik.",
        },
        {
          q: "'Landed weird' burada anlamı?",
          options: [
            "Yere indi",
            "Garip karşılandı, garip etki yaptı",
            "Düşmek",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'X landed weird' = X garip karşılandı/yorumlandı. Sosyal-aware ifade.",
        },
      ],
    },
    {
      id: "ex.frec8.8.vt2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Thumbs betrayed me",
      tr_translation: "Parmaklarım ihanet etti (espri)",
      example: "Thumbs betrayed me — sticking to words from now on.",
      example_tr: "Parmaklarım ihanet etti — bundan sonra sadece kelime.",
    },
    {
      id: "ex.frec8.8.vt3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Wrong vibe",
      tr_translation: "Yanlış hava",
      example: "Wrong vibe with that emoji — not what I meant.",
      example_tr: "O emoji yanlış hava — söylemek istediğim bu değildi.",
    },
    {
      id: "ex.frec8.8.vt4",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "What I meant was",
      tr_translation: "Söylemek istediğim şuydu",
      example: "What I meant was — your laugh made my day.",
      example_tr: "Söylemek istediğim şuydu — gülüşün günümü güzelleştirdi.",
    },
    {
      id: "ex.frec8.8.vt5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Words from here on",
      tr_translation: "Bundan sonra sadece kelime (emoji yok)",
      example: "Words from here on — emojis can't be trusted.",
      example_tr: "Bundan sonra sadece kelime — emojilere güven olmaz.",
    },
    {
      id: "ex.frec8.8.vt6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Going for warm",
      tr_translation: "Sıcaklığa yöneliyordum",
      example: "Was going for warm — emoji read otherwise, sorry.",
      example_tr: "Sıcaklığa yöneliyordum — emoji başka türlü okundu, pardon.",
    },
  ],
};

// ============================================================
// Flirt Recovery lessons registry
// ============================================================
export const flirtRecoveryLessons: ReadonlyArray<BundledLesson> = [
  flirtRecoveryLesson_8_1,
  flirtRecoveryLesson_8_2,
  flirtRecoveryLesson_8_3,
  flirtRecoveryLesson_8_5,
  flirtRecoveryLesson_8_6,
  flirtRecoveryLesson_8_7,
  flirtRecoveryLesson_8_8,
];
