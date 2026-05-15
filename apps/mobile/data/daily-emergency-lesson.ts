// Daily - Emergency lessons
// Skill: daily.emergency (2 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 22.1 — 911 / Ambulance (Acil Durum)
// ============================================================
export const dailyEmergencyLesson_22_1: BundledLesson = {
  id: "daily.emergency.22.1",
  skill_id: "daily.emergency",
  index: 1,
  title: "911 / Ambulans Arama",
  description:
    "Acil saglik durumu — 911 ara, location + durum + iletisim verisi soyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.de22.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I need an ambulance",
      tr_translation: "Ambulansa ihtiyacım var",
      example: "I need an ambulance — someone collapsed.",
      example_tr: "Ambulansa ihtiyacım var — biri bayıldı.",
    },
    {
      id: "ex.de22.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Acil! 245 Park Ave'deyim, arkadasim bayildi, nefes aliyor ama uyanmiyor.",
      target: "Emergency! I'm at 245 Park Ave — my friend collapsed, breathing but unconscious.",
      accepted_variants: [
        "911! 245 Park Ave — friend's down, breathing but won't wake.",
        "Need help at 245 Park Ave — friend unconscious, breathing.",
        "Send help to 245 Park Ave — friend collapsed, still breathing.",
        "Hi 911 — friend out cold at 245 Park, breathing OK.",
      ],
      tr_hint:
        "911 cagrisi: ADRES + DURUM + BREATHING durumu hayat kurtarir.",
    },
    {
      id: "ex.de22.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "He's not ___ to me.",
      answer: "responding",
      distractors: ["talking", "looking", "hearing"],
      tr_hint:
        "'Not responding' = cevap vermiyor, tepkisiz. Klinik standart.",
    },
    {
      id: "ex.de22.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "stay",
        "on",
        "the",
        "line",
      ],
      correct_sentence: "I stay on the line",
      tr_translation: "Hatta kalıyorum.",
    },
    {
      id: "ex.de22.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Help! Help!",
      correct_sentence:
        "Emergency at 245 Park Ave — friend collapsed, breathing but unconscious. Send an ambulance.",
      tr_explanation:
        "'Help!' = belirsiz, dispatcher zaman kaybeder. Doğru: ADRES + DURUM + SPESIFIK = hizla yardim.",
    },
    {
      id: "ex.de22.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "911'i aradin. Arkadasin bayildi. Dispatcher konusuyor.",
      npc_role: "911 Dispatcher",
      setting: "Emergency call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(911|emergency|need help)",
            "(at|i'?m at|address (is|are))",
            "(\\d+ \\w+ (ave|street|st|road|rd))",
            "(friend|someone|my (\\w+))",
            "(collapsed|fell|fainted|passed out|unconscious|having (a (heart attack|seizure))|bleeding)",
            "(breathing|not breathing|breathing but)",
          ],
          hint_tr:
            "Hizli: '911, emergency at 245 Park Ave — friend collapsed, breathing but unconscious.'",
        },
        {
          speaker: "npc",
          message:
            "Ambulance on the way. Is he breathing? Conscious?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|he is|she is) (breathing|conscious)",
            "(no|not (breathing|conscious|responding))",
            "(can'?t (find|feel) a pulse)",
            "(eyes (closed|open)|skin (cold|warm|pale))",
            "(should i|what (do i|should we) do)",
            "(stay (on the line|with him)|with him until they arrive)",
          ],
          hint_tr:
            "Detay + soru: 'Breathing but not responding. Should I move him?'",
        },
        {
          speaker: "npc",
          message:
            "Don't move him. Stay on the line — paramedics 4 minutes out.",
        },
      ],
    },
    {
      id: "ex.de22.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "911 cagrisi ILK 5 saniyede sirf NE soylenmeli?",
          options: [
            "Adress",
            "Adres en kritik — sinyal kaybinda paramedikler nereye gelecek",
            "Selam",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Cagri kesilebilir. Adres = en oncelikli. Dispatcher 'GPS gormüyor olabilir.",
        },
        {
          question: "'Stay on the line' niye onemli?",
          options: [
            "Yararsiz",
            "Dispatcher durumu live takip + sen ve hastayi yonlendir",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "CPR, ilkyardim, sakinlestirme talimatlari hatta calisir.",
        },
        {
          question: "'Don't move him' niye? (klasik talimat)",
          options: [
            "Boyun / omurga yaralanmalari = hareket buyuk hasari arttirir",
            "Yararsiz",
            "Hicbir sey",
            "Cok agir",
          ],
          correct_index: 0,
          tr_explanation:
            "Dusus, kaza = bilinmeyen ic hasar. Paramedik gelene kadar SABIT.",
        },
      ],
    },
    {
      id: "ex.de22.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I need an ambulance right now.",
      ipa: "/aɪ niːd ən ˈæmbjələns raɪt naʊ/",
      tr_hint:
        "Acil ton net + sakin. 'Ambulance' = 'EM-bı-lınz' (vurgu ilk hece). 'Right now' = 'rayt-nau'.",
    },
    {
      id: "ex.de22.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Emergency at 245 Park Avenue — my friend collapsed, breathing but unconscious.",
      voice_hint: "female_us",
      tr_hint:
        "911 kalıbı: yer + durum + nefes. 'Collapsed' = 'kı-LAPST'. Net ve hızlı.",
    },
    {
      id: "ex.de22.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Ambulance is on the way. Stay on the line and don't move him — paramedics four minutes out.",
      transcription_target:
        "Ambulance is on the way. Stay on the line and don't move him — paramedics four minutes out.",
      tr_hint:
        "Dispatcher tipik talimat. 'On the way' = yolda. 'Stay on the line' = hatta kal. 'Minutes out' = dakika içinde varır.",
    },
    {
      id: "ex.de22.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "is there any way",
      tr_translation: "Bir yolu var mı?",
      example: "Is there any way to speed up the ambulance?",
      example_tr: "Ambulansı hızlandırmanın bir yolu var mı?",
    },
    {
      id: "ex.de22.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My friend is sleep and don't wake up.",
      correct_sentence:
        "My friend is unconscious — breathing, but not responding.",
      tr_explanation:
        "'Is sleep' yanlış kelime + 'don't wake up' direkt çeviri. Klinik standart: 'unconscious' (= bilinçsiz) + 'not responding' (= tepkisiz). 911 dispatcher bu terimleri bekler.",
    },
  ],
};

// ============================================================
// Lesson 22.2 — Police / Theft Report
// ============================================================
export const dailyEmergencyLesson_22_2: BundledLesson = {
  id: "daily.emergency.22.2",
  skill_id: "daily.emergency",
  index: 2,
  title: "Polis / Hirsizlik Bildirimi",
  description:
    "Cuzdan / telefon calindi — polise hirsizlik raporu nasil verilir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.de22.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to report a theft",
      tr_translation: "Bir hırsızlık bildirmek istiyorum",
      example: "Hi, I'd like to report a theft — my phone was stolen.",
      example_tr: "Merhaba, bir hırsızlık bildirmek istiyorum — telefonum çalındı.",
    },
    {
      id: "ex.de22.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Telefonum metroda calindi — bir saat once. Polis raporu olusturabilir miyiz?",
      target: "Phone was stolen on the subway about an hour ago. Could we file a police report?",
      accepted_variants: [
        "My phone got stolen on the subway, an hour back. Need to file a report.",
        "Was robbed on the subway, hour ago — phone gone. Police report?",
        "Stolen phone on the subway. Want to file a report.",
        "About an hour ago — phone snatched on the metro. Filing a report.",
      ],
      tr_hint:
        "'File a police report' = polis raporu olustur. Insurance icin kanit, hirsizlik sonrasi sart.",
    },
    {
      id: "ex.de22.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Need a ___ number for insurance.",
      answer: "case",
      distractors: ["ticket", "claim", "id"],
      tr_hint:
        "'Case number' = dava numarasi. Polis raporu = insurance claim icin gerek.",
    },
    {
      id: "ex.de22.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Description",
        "of",
        "the",
        "suspect",
      ],
      correct_sentence: "Description of the suspect",
      tr_translation: "Şüphelinin tanımı.",
    },
    {
      id: "ex.de22.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Stolen sad.",
      correct_sentence:
        "I need to file a report — my phone was stolen on the subway, about an hour ago.",
      tr_explanation:
        "'Stolen sad' = belirsiz + grammatik degil. Doğru: 'file a report' + WHAT + WHERE + WHEN.",
    },
    {
      id: "ex.de22.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Polis karakoluna gittin. Cuzdan calindi raporu yazdırıyorsun.",
      npc_role: "Police Officer",
      setting: "Police station",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good evening)",
            "(i'?d like to|need to|want to) (file (a (theft|police|crime) (report))|report a)",
            "(wallet|phone|laptop|bag)",
            "(was stolen|got stolen|got taken)",
            "(at the|on the|near the) (\\w+)",
            "(about (an hour|two hours) ago)",
          ],
          hint_tr:
            "Net: 'Hi, I'd like to file a theft report. Phone stolen on subway, hour ago.'",
        },
        {
          speaker: "npc",
          message:
            "Sorry to hear. Did you see who took it? Description?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(didn'?t (see|catch|get a look))",
            "(too crowded|happened (fast|quickly))",
            "(possibly|maybe|seemed like) (male|female|young)",
            "(wearing|in a) (\\w+)",
            "(thanks|sorry not much (description|to go on))",
            "(case (number|reference)) (for insurance|to share)",
          ],
          hint_tr:
            "Detay + ihtiyac: 'Didn't catch them — too crowded. Need case number for insurance.'",
        },
        {
          speaker: "npc",
          message:
            "Filing now. Case #: NY-2026-4892. You'll get an email copy.",
        },
      ],
    },
    {
      id: "ex.de22.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hirsizlik raporu icin EN onemli iki bilgi?",
          options: [
            "What + Where + When + Description",
            "Sadece adin",
            "Sadece tarih",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Polis 'iz' arar. Tariff + zaman + yer ve description = soruşturmanin temeli.",
        },
        {
          question: "Niye 'case number' istenmeli?",
          options: [
            "Yararsiz",
            "Insurance claim icin gerek + takip kimligi",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "AppleCare, ev sigortasi, kredit karti = case number ister. Bu olmadan claim red.",
        },
        {
          question: "Description vermek niye onemli?",
          options: [
            "Yararsiz",
            "Polis benzer suclulari kategorize eder + yakalanmak ihtimali artar",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Cogu hirsiz birden cok kez yapar. Birikim halinde yakalama olasiligi.",
        },
      ],
    },
    {
      id: "ex.de22.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to file a theft report.",
      ipa: "/aɪd laɪk tu faɪl ə θɛft rɪˈpɔːrt/",
      tr_hint:
        "'File' fiil burada = 'fayl'. 'Theft' = 'θeft' (th = dilini ısır). 'Report' vurgu ikinci hece: 'ri-PORT'.",
    },
    {
      id: "ex.de22.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "My phone was stolen on the subway about an hour ago — I need to file a report.",
      voice_hint: "male_us",
      tr_hint:
        "Polis karakolu tonu: sakin + net. 'Was stolen' = 'wız-STOU-lın'. 'An hour ago' = 'ı-na-vır-ı-go'.",
    },
    {
      id: "ex.de22.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I'll file the report and give you a case number for your insurance claim.",
      transcription_target:
        "I'll file the report and give you a case number for your insurance claim.",
      tr_hint:
        "Polis memuru tipik kapanış. 'Case number' = dava numarası. 'Insurance claim' = sigorta talebi.",
    },
    {
      id: "ex.de22.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "would you mind",
      tr_translation: "... yapmanın bir sakıncası olur mu?",
      example: "Would you mind emailing me a copy of the report?",
      example_tr: "Raporun bir kopyasını mailime atmanızın bir sakıncası olur mu?",
    },
    {
      id: "ex.de22.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Someone stoled my wallet, I want to make complaint.",
      correct_sentence:
        "Someone stole my wallet — I'd like to file a complaint.",
      tr_explanation:
        "'Stoled' yanlış — 'steal'in geçmişi 'stole' (düzensiz fiil). 'Make complaint' Türkçe etkisi; doğru kalıp 'file a complaint' (= şikayette bulun).",
    },
  ],
};

// ============================================================
// Daily Emergency lessons registry
// ============================================================
export const dailyEmergencyLessons: ReadonlyArray<BundledLesson> = [
  dailyEmergencyLesson_22_1,
  dailyEmergencyLesson_22_2,
];
