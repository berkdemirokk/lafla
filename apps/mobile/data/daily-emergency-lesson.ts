// Daily - Emergency lessons
// Skill: daily.emergency (2 lessons)

import type { BundledLesson } from "../lib/engine";

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
// Lesson 22.3 — 911 / 999 Araması (Net Konum Verme)
// ============================================================
export const dailyEmergencyLesson_22_3: BundledLesson = {
  id: "daily.emergency.22.3",
  skill_id: "daily.emergency",
  index: 3,
  title: "911/999 Net Konum",
  description:
    "Acil cagri: stres altinda net konum + sokak adi + landmark verme. ABD 911, UK 999.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.de22.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm at the corner of",
      tr_translation: "... köşesindeyim",
      example: "I'm at the corner of 5th Avenue and 42nd Street.",
      example_tr: "5. Cadde ile 42. Sokak köşesindeyim.",
    },
    {
      id: "ex.de22.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "999, acil durum — Oxford Street ve Regent Street kosesindeyim, Apple magazasinin onunde. Bir adam kalp krizi geciriyor.",
      target: "999, emergency — I'm at the corner of Oxford Street and Regent Street, in front of the Apple Store. A man is having a heart attack.",
      accepted_variants: [
        "999! Corner of Oxford and Regent — Apple Store. Man having a heart attack.",
        "Emergency on Oxford Street at Regent — outside Apple. Heart attack victim.",
        "Need an ambulance at Oxford and Regent — in front of Apple Store, heart attack.",
        "999 — Oxford / Regent corner, Apple shop. Man in cardiac arrest.",
      ],
      tr_hint:
        "Konum kalibi: 'corner of X and Y' + 'in front of LANDMARK'. Landmark = dispatcher'in haritada bulmasi kolay.",
    },
    {
      id: "ex.de22.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm right ___ the pharmacy on Main Street.",
      answer: "outside",
      distractors: ["inside", "across", "between"],
      tr_hint:
        "'Right outside' = tam disinda. Landmark + 'outside/across from' = en hizli konum tarifi.",
    },
    {
      id: "ex.de22.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "near",
        "the",
        "subway",
        "entrance",
        "on",
        "5th",
      ],
      correct_sentence: "near the subway entrance on 5th",
      tr_translation: "5. Cadde'deki metro girişinin yakınında.",
    },
    {
      id: "ex.de22.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Help me! Help me!",
      correct_sentence:
        "I need help — there's been an emergency. I'm at the corner of 5th and Main, in front of the Starbucks.",
      tr_explanation:
        "'Help me!' panik = dispatcher konum bulamaz. Doğru: 'I need help' + KONUM (köşe + landmark). Türk reflexi 'Help! Help!' yerine kalıp öğren: NEED + LOCATION.",
    },
    {
      id: "ex.de22.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sokakta birisi düştü, kafasından kanıyor. 911'i aradin. Konumu net soylemeli.",
      npc_role: "911 Dispatcher",
      setting: "Street emergency call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(911|emergency|need (an ambulance|help))",
            "(i'?m at|at the|corner of|on)",
            "(\\d+(st|nd|rd|th)?|main|park|oxford|broadway|\\w+ (street|st|avenue|ave|road|rd))",
            "(in front of|outside|next to|across from|near)",
            "(starbucks|cvs|store|pharmacy|station|hotel|bank)",
            "(person|man|woman|someone) (fell|collapsed|bleeding|hit|unconscious)",
          ],
          hint_tr:
            "Sıra: '911 + KÖSE + LANDMARK + DURUM.' Örn: '911, corner of 5th and Main, in front of CVS — man fell, head bleeding.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Which side of the street? North or south corner?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(north|south|east|west) (corner|side)",
            "(near the|by the|next to)",
            "(traffic light|crosswalk|bus stop|bench|tree)",
            "(can'?t tell|not sure|don'?t know which)",
            "(landmark|sign|store sign) (says|reads)",
          ],
          hint_tr:
            "Kose net degilse landmark ver: 'Near the bus stop, the sign says 14th Street.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Ambulance is two minutes out. Wave them down when you see them.",
        },
      ],
    },
    {
      id: "ex.de22.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de acil numara nedir? UK'de?",
          options: [
            "Ikisi de 112",
            "ABD: 911, UK: 999 (112 her ikisinde de calisir)",
            "Sadece 112",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Turkiye 112'ye alisik. ABD = 911, UK = 999. 112 her ikisinde yedek olarak calisir.",
        },
        {
          question: "Stres altinda konum vermenin EN iyi kalıbı?",
          options: [
            "Help! Help!",
            "Corner of X and Y + landmark (in front of / outside)",
            "Buradayim",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Kose + landmark = dispatcher haritada saniyede bulur. GPS yoksa hayat kurtaran detay.",
        },
        {
          question: "'Wave them down' ne demek?",
          options: [
            "Yararsiz",
            "Ambulansi el sallayarak isaret et — gozune gorun",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Sokakta paramedikler dogru adresi bulsa bile sen gorunmelisin. El salla = saniyeler kurtarir.",
        },
      ],
    },
    {
      id: "ex.de22.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm at the corner of 5th and Main.",
      ipa: "/aɪm ət ðə ˈkɔːrnər əv fɪfθ ənd meɪn/",
      tr_hint:
        "Stres altinda yavas + net. 'Corner' = 'KOR-nır'. '5th' = 'fifθ' (th = dil ısırma). Sayilari net soyle.",
    },
  ],
};

// ============================================================
// Lesson 22.4 — Hastane ER (Semptom Anlatma)
// ============================================================
export const dailyEmergencyLesson_22_4: BundledLesson = {
  id: "daily.emergency.22.4",
  skill_id: "daily.emergency",
  index: 4,
  title: "Hastane ER / Semptom",
  description:
    "Emergency room'a vardin. Triaj hemsiresine semptomu net anlat: ne, ne zaman, siddeti.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.de22.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sharp pain in my chest",
      tr_translation: "göğsümde keskin/saplanan ağrı",
      example: "I have a sharp pain in my chest — started about an hour ago.",
      example_tr: "Göğsümde keskin bir ağrı var — yaklaşık bir saat önce başladı.",
    },
    {
      id: "ex.de22.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yaklasik bir saat once basladi — gogsumde keskin agri, nefes darligi var. Alerji yok, ilac kullanmiyorum.",
      target: "It started about an hour ago — sharp chest pain and shortness of breath. No allergies, no medications.",
      accepted_variants: [
        "About an hour ago — sharp pain in my chest, hard to breathe. No allergies, no meds.",
        "Started an hour back. Chest pain, shortness of breath. No allergies or meds.",
        "Hour ago — chest pain, can't catch my breath. Nothing I'm allergic to, no medications.",
        "An hour ago. Sharp chest pain, trouble breathing. No allergies, not on any meds.",
      ],
      tr_hint:
        "Triaj kalibi: ZAMAN + SEMPTOM + SIDDET + ALLERGY/MEDS. Hemsire bu sırayla bekler.",
    },
    {
      id: "ex.de22.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "On a scale of 1 to 10, the pain is about a ___.",
      answer: "seven",
      distractors: ["lot", "big", "much"],
      tr_hint:
        "ER standart: '1 to 10 pain scale'. Sayi soyle ('seven' veya '7'). 'Big/much' = kabul edilmez.",
    },
    {
      id: "ex.de22.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "shortness",
        "of",
        "breath",
        "started",
        "suddenly",
      ],
      correct_sentence: "shortness of breath started suddenly",
      tr_translation: "Nefes darlığı aniden başladı.",
    },
    {
      id: "ex.de22.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My heart is paining since one hour.",
      correct_sentence:
        "I've had sharp chest pain for about an hour.",
      tr_explanation:
        "'Heart is paining' = direkt Türkçe çeviri, doğal değil. 'Since one hour' yanlış — present perfect + 'for an hour'. Doğru klinik: 'chest pain' (kalp deme — doktor karar verir) + 'for about an hour'.",
    },
    {
      id: "ex.de22.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hastane ER'a vardin. Triaj hemsiresi semptomlari soruyor. Net anlat.",
      npc_role: "Triage Nurse",
      setting: "Hospital emergency room reception",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|i need to (see|be seen)|i'?m here for)",
            "(chest pain|stomach pain|sharp pain|headache|trouble breathing|shortness of breath|broken|sprained)",
            "(in my|on my) (chest|stomach|arm|leg|head|back)",
            "(started|began) (about|around)? (\\w+ (minutes|hour|hours) ago|suddenly)",
            "(getting worse|same|comes and goes)",
          ],
          hint_tr:
            "Sıra: 'I'm here for' + SEMPTOM + LOKASYON + NE ZAMAN. Örn: 'Sharp chest pain, started about an hour ago.'",
        },
        {
          speaker: "npc",
          message:
            "On a scale of 1 to 10, how bad is the pain? Any allergies or medications?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|around|maybe) (a |an )?(seven|eight|six|five|four|nine|ten|3|4|5|6|7|8|9|10)",
            "(no allergies|none|not allergic)",
            "(no medications|not on anything|nothing regularly|just (\\w+))",
            "(allergic to|allergy to) (\\w+)",
            "(taking|on) (\\w+) (for (\\w+))?",
          ],
          hint_tr:
            "Sayi + alerji + ilac. 'About a seven. No allergies, no medications.' Net + kisa.",
        },
        {
          speaker: "npc",
          message:
            "Okay, I'm putting you down as priority. A nurse will check your vitals in a moment.",
        },
      ],
    },
    {
      id: "ex.de22.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ER'da semptom anlatirken 4 temel bilgi nedir?",
          options: [
            "Semptom + Lokasyon + Ne zaman + Siddet (1-10)",
            "Sadece agri",
            "Sadece zaman",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Triaj standart: WHAT + WHERE + WHEN + HOW BAD. Bu 4 = oncelik sirasini belirler.",
        },
        {
          question: "'Vitals' ne demek?",
          options: [
            "Yararsiz",
            "Hayati bulgular: tansiyon, nabiz, atese, oksijen — temel olcumler",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "BP (blood pressure), pulse, temp, O2 = vitals. ER'da ilk olcum bunlar.",
        },
        {
          question: "'On a scale of 1 to 10' — niye SAYI istenir?",
          options: [
            "Yararsiz",
            "Subjektif agri = sayi ile karşilaştirilabilir; tedavi onceligi belirlenir",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Cok agir' farkli kisilere farkli gelir. Sayi = standart. 7+ = acil tedavi.",
        },
      ],
    },
    {
      id: "ex.de22.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Sharp pain in my chest, started about an hour ago.",
      ipa: "/ʃɑːrp peɪn ɪn maɪ tʃɛst ˈstɑːrtɪd əˈbaʊt ən ˈaʊər əˈɡoʊ/",
      tr_hint:
        "'Sharp' = 'sharp' (kisa). 'Chest' = 'çest'. 'Hour' = 'a-uır' (h sessiz!). Net + sakin.",
    },
  ],
};

// ============================================================
// Lesson 22.5 — Pasaport Kayıp / Konsolosluk
// ============================================================
export const dailyEmergencyLesson_22_5: BundledLesson = {
  id: "daily.emergency.22.5",
  skill_id: "daily.emergency",
  index: 5,
  title: "Pasaport Kayıp / Konsolosluk",
  description:
    "Pasaportunu kaybettin. Turk konsoloslugunu ara — kimlik + durum + replacement süreci.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.de22.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I lost my passport",
      tr_translation: "Pasaportumu kaybettim",
      example: "Hi, I lost my passport — I'm a Turkish citizen visiting London.",
      example_tr: "Merhaba, pasaportumu kaybettim — Londra'yı ziyaret eden Türk vatandaşıyım.",
    },
    {
      id: "ex.de22.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Pasaportumu kaybettim — Londra'yi ziyaret eden Turk vatandasiyim. Acil seyahat belgesi nasil alirim?",
      target: "I lost my passport — I'm a Turkish citizen visiting London. How do I get an emergency travel document?",
      accepted_variants: [
        "Lost my passport in London — I'm a Turkish citizen. Need an emergency travel doc?",
        "I'm a Turkish citizen on a London visit — passport's gone. Emergency replacement process?",
        "Passport missing — Turkish citizen, visiting London. What's the emergency document procedure?",
        "I've lost my passport. Turkish national here on a visit. How can I get a temporary travel paper?",
      ],
      tr_hint:
        "Konsolosluk kalibi: KIMLIK ('Turkish citizen visiting X') + DURUM + 'emergency travel document'. Bu tam terim.",
    },
    {
      id: "ex.de22.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like to apply for a passport ___.",
      answer: "replacement",
      distractors: ["change", "renew", "exchange"],
      tr_hint:
        "'Replacement' = yenisini al (kayip durumunda). 'Renew' = suresi gecmis. Kayip icin 'replacement' dogru.",
    },
    {
      id: "ex.de22.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "filed",
        "a",
        "police",
        "report",
        "this",
        "morning",
      ],
      correct_sentence: "filed a police report this morning",
      tr_translation: "Bu sabah polis raporu verdim.",
    },
    {
      id: "ex.de22.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My passport is gone, I am Turkish, please help fastly.",
      correct_sentence:
        "I lost my passport — I'm a Turkish citizen visiting the UK. Could you walk me through the replacement process?",
      tr_explanation:
        "'Fastly' yanlış kelime (= quickly). Konsolosluk tonu kibar olmali: 'Could you walk me through' = sureci anlatir misiniz. 'I am Turkish' yerine 'Turkish citizen' resmi.",
    },
    {
      id: "ex.de22.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Turk Konsoloslugunu aradin (Londra). Pasaport kayip. Memur konusuyor.",
      npc_role: "Consulate Officer",
      setting: "Phone call to Turkish Consulate",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(i (lost|misplaced) my passport|my passport (is|was) (lost|stolen|missing))",
            "(i'?m a turkish (citizen|national)|i am turkish)",
            "(visiting|in|on a (trip|visit) to|tourist in) (london|the (uk|us|usa)|\\w+)",
            "(need (an? )?(replacement|emergency (travel )?document)|how do i (get|apply for))",
          ],
          hint_tr:
            "Sira: 'Hi, I lost my passport. I'm a Turkish citizen visiting London. How do I get an emergency travel document?'",
        },
        {
          speaker: "npc",
          message:
            "Sorry to hear. Did you file a police report? You'll need that and a photo ID.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i did|already|this morning) (filed|got|reported)",
            "(case number|reference)",
            "(have my )?(turkish id|driver'?s license|photo)",
            "(not yet|haven'?t|where can i)",
            "(what (do i|else|other) need|when can i come in)",
            "(how long does (it|the process) take)",
          ],
          hint_tr:
            "Detay + soru: 'Yes, filed this morning — case number CR-2026. Have my Turkish ID. When can I come in?'",
        },
        {
          speaker: "npc",
          message:
            "Great. Come in tomorrow at 10 with the report, ID, two photos. Emergency document — same day.",
        },
      ],
    },
    {
      id: "ex.de22.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Pasaport kayıp olunca İLK adım nedir?",
          options: [
            "Konsolosluga git",
            "Polis raporu olustur — replacement icin sart",
            "Eve don",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Konsolosluk replacement icin 'case number' ister. Polis raporu = ilk adim.",
        },
        {
          question: "'Emergency travel document' nedir?",
          options: [
            "Yararsiz",
            "Tek seferlik geri donus belgesi — yeni pasaport icin zaman yoksa",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Acil seyahat icin (ucak kalkmadan once) konsolosluk verir. Tek yon, sinirli kullanim.",
        },
        {
          question: "Konsoloslukta kibar kalip neden onemli?",
          options: [
            "Yararsiz",
            "Memur senin durumunu onceliklendirebilir — 'fastly' degil 'could you walk me through' kullan",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Konsoloslukta resmi ton beklenir. Kibar + net = islem hızlı.",
        },
      ],
    },
    {
      id: "ex.de22.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I lost my passport — I'm a Turkish citizen.",
      ipa: "/aɪ lɒst maɪ ˈpæspɔːrt aɪm ə ˈtɜːrkɪʃ ˈsɪtɪzən/",
      tr_hint:
        "'Passport' vurgu ilk hece: 'PAS-port'. 'Citizen' = 'SI-tı-zın'. 'Turkish' = 'TƏR-kiş' (R yumusak).",
    },
  ],
};

// ============================================================
// Lesson 22.6 — Çalıntı Çanta / Polis Raporu
// ============================================================
export const dailyEmergencyLesson_22_6: BundledLesson = {
  id: "daily.emergency.22.6",
  skill_id: "daily.emergency",
  index: 6,
  title: "Çalıntı Çanta / Polis Raporu",
  description:
    "Cantam calindi. Polis raporu detay: icinde ne vardi, ne zaman / nerede, sahit var mı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.de22.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "My bag was stolen",
      tr_translation: "Çantam çalındı",
      example: "My bag was stolen — could I file a report?",
      example_tr: "Çantam çalındı — bir rapor oluşturabilir miyim?",
    },
    {
      id: "ex.de22.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cantam metro istasyonunda calindi — yirmi dakika once. Icinde cuzdan, pasaport, telefon vardi. Bir rapor olusturabilir miyim?",
      target: "My bag was stolen at the subway station — twenty minutes ago. Inside were my wallet, passport, and phone. Could I file a report?",
      accepted_variants: [
        "Bag got stolen at the subway 20 min ago — wallet, passport, phone inside. Can I file a report?",
        "Was robbed at the subway twenty minutes back. Lost wallet, passport, phone. Need to file a report.",
        "Someone took my bag at the metro station — had my wallet, passport, phone. Filing a report?",
        "My bag's gone — stolen at subway, twenty minutes ago. Wallet, passport, phone inside. Could we file a report?",
      ],
      tr_hint:
        "Polis kalibi: NE + NEREDE + NE ZAMAN + ICERIK + 'file a report?' (4 bilgi + istek).",
    },
    {
      id: "ex.de22.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I ___ a report?",
      answer: "file",
      distractors: ["do", "make", "open"],
      tr_hint:
        "'File a report' sabit kalip = rapor olustur. 'Make a report' yanlis. Sadece 'file'.",
    },
    {
      id: "ex.de22.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "any",
        "witnesses",
        "to",
        "the",
        "incident",
      ],
      correct_sentence: "any witnesses to the incident",
      tr_translation: "Olaya tanık var mı?",
    },
    {
      id: "ex.de22.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Someone stole me my bag, I want make report.",
      correct_sentence:
        "Someone stole my bag — I'd like to file a report.",
      tr_explanation:
        "'Stole me my bag' fazla — 'stole my bag' yeter. 'Make report' yerine 'file a report' (sabit kalip). 'I want' yerine 'I'd like' kibar polis tonu.",
    },
    {
      id: "ex.de22.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Polis karakoluna geldin. Cantan calindi. Memur detay aliyor.",
      npc_role: "Police Officer",
      setting: "Police station — theft report",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(my bag|my backpack|my purse) (was|got) stolen",
            "(i'?d like to|could i|need to|want to) file (a (theft |police |crime )?report)",
            "(at the|on the|near the|in the) (\\w+ )?(station|metro|subway|cafe|street|park)",
            "(\\w+ (minutes|hour|hours) ago|this (morning|afternoon|evening))",
          ],
          hint_tr:
            "Açilis: 'Hi, my bag was stolen at the subway twenty minutes ago. Could I file a report?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. What was inside? Any witnesses?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wallet|passport|phone|laptop|keys|cash|credit cards?|id)",
            "(about|around|maybe) \\$?\\d+ (cash|in (cash|euros|pounds))",
            "(no witnesses|didn'?t see anyone|too crowded|no one saw)",
            "(a few people around|some people|one (man|woman) (saw|might have))",
            "(could (you|i) get a|case number for insurance)",
          ],
          hint_tr:
            "Icerik + sahit: 'Wallet, passport, phone, about 50 pounds cash. Too crowded — no clear witnesses.'",
        },
        {
          speaker: "npc",
          message:
            "Filing it now. Case number: LDN-2026-7745. I'll email you a copy for your insurance.",
        },
      ],
    },
    {
      id: "ex.de22.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Calinti raporunda EN onemli 4 bilgi nedir?",
          options: [
            "Ne + Nerede + Ne zaman + Icerik (+ sahit)",
            "Sadece ne",
            "Sadece zaman",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Polis bunlari standart sirayla yazar. Bu 4 + case number = insurance icin yeterli.",
        },
        {
          question: "'File a report' niye 'make a report' degil?",
          options: [
            "Yararsiz",
            "'File' = resmi olusturmak (sabit kalip). 'Make' yanlis collocation, ana dilde kullanilmaz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Ingilizce'de bazi fiiller sabit. 'File a report / claim / complaint' — hepsi 'file'.",
        },
        {
          question: "Pasaport da calindiysa raporda mutlaka belirt — NIYE?",
          options: [
            "Yararsiz",
            "Konsoloslukta replacement icin case number sart + pasaport suistimal riski",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Calintigi pasaport baska birinin eline gecerse kimlik suistimali. Polis raporu = konsolosluk + finansal koruma.",
        },
      ],
    },
    {
      id: "ex.de22.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I file a report? My bag was stolen.",
      ipa: "/kʊd aɪ faɪl ə rɪˈpɔːrt maɪ bæɡ wəz ˈstoʊlən/",
      tr_hint:
        "'File' = 'fayl'. 'Stolen' = 'STOU-lın' (vurgu ilk hece). Polis tonu sakin + net. Soruyu yukselt sonu.",
    },
  ],
};

// ============================================================
// Daily Emergency lessons registry
// ============================================================
export const dailyEmergencyLessons: ReadonlyArray<BundledLesson> = [
  dailyEmergencyLesson_22_1,
  dailyEmergencyLesson_22_2,
  dailyEmergencyLesson_22_3,
  dailyEmergencyLesson_22_4,
  dailyEmergencyLesson_22_5,
  dailyEmergencyLesson_22_6,
];
