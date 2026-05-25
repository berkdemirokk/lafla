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
          hint_tr:
            "Toparla: 'Friend works — thanks for not making it weird.'",
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
          hint_tr:
            "Pivot: 'Thanks for being chill — let me make it up with coffee?'",
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
          hint_tr:
            "Plan teklif et: 'Thanks for asking — want to grab coffee + catch up?'",
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
          hint_tr:
            "Pivot: 'Thanks for being cool — sober me is much chiller. Coffee this weekend?'",
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
          hint_tr:
            "Onerme: 'Getting there — thanks for asking. Open to a reset over coffee, no pressure?'",
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
          hint_tr:
            "Esprili topla: 'Busted — for the record it was good things. Let me try this again — coffee?'",
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
          hint_tr:
            "Yumusat: 'Thumbs betrayed me — sticking to words. What I meant was, you looked great in that pic.'",
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
