// Flort - Awkward Recovery lessons
// Skill: flirt.recovery (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
// Flirt Recovery lessons registry
// ============================================================
export const flirtRecoveryLessons: ReadonlyArray<BundledLesson> = [
  flirtRecoveryLesson_8_1,
  flirtRecoveryLesson_8_2,
  flirtRecoveryLesson_8_3,
];
