// TOEFL Speaking — test prep lessons for Turkish students applying to
// US grad schools / scholarship programs.
//
// 10 lessons across the 4 official TOEFL Speaking task types:
//   Task 1 — Independent (personal opinion, 45 sec)  — 3 lessons
//   Task 2 — Campus situation (read + listen, 60 sec) — 3 lessons
//   Task 3 — Academic integration (passage + lecture) — 2 lessons
//   Task 4 — Lecture summary (listen only, 60 sec)    — 2 lessons
//
// Each lesson references the TOEFL Speaking rubric (delivery, language
// use, topic development) in tr_explanations so the learner sees not
// just "wrong vs right" but band-aware notes (good = 4, mid = 3, low = 2).
//
// Sourced from content/scenarios/testprep/toefl-speaking.lessons.json
// In production this will come from the backend API.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Task 1: Personal preference (work alone vs team)
// ============================================================
export const toeflSpeakingLesson_1: BundledLesson = {
  id: "testprep.toefl.task1.preference.1",
  skill_id: "testprep.toefl.task1",
  index: 1,
  title: "Task 1 — Yalnız mı, takımla mı?",
  description:
    "TOEFL Speaking Task 1: 'Do you prefer to work alone or in a team?' 45 saniyede net bir tercih + 2 sebep + örnek. Delivery (akıcılık), language use (gramer + kelime), topic development (gelişim) puanlanır.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.toefl.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "collaborate",
      tr_translation: "İşbirliği yapmak",
      example: "I prefer to collaborate with my classmates on projects.",
      example_tr:
        "Projelerde sınıf arkadaşlarımla işbirliği yapmayı tercih ederim.",
    },
    {
      id: "ex.toefl.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "in my opinion",
      tr_translation: "Benim görüşüme göre",
      example: "In my opinion, working in a team is more productive.",
      example_tr: "Bence takımla çalışmak daha verimli.",
    },
    {
      id: "ex.toefl.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bence takımla çalışmak yalnız çalışmaktan daha verimli.",
      target: "In my opinion, working in a team is more productive than working alone.",
      accepted_variants: [
        "I think working in a team is more productive than working alone.",
        "Personally, I believe working with a team is more productive than working alone.",
        "I prefer working in a team because it is more productive than working alone.",
        "From my perspective, teamwork is more productive than working alone.",
      ],
      tr_hint:
        "Tercih cümlesi: 'In my opinion' / 'I think' + tercih + 'than' karşılaştırma.",
    },
    {
      id: "ex.toefl.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ , I prefer working in a team because it boosts creativity.",
      answer: "Personally",
      distractors: ["Actually", "Honestly", "Frankly", "Basically"],
      tr_hint:
        "Task 1 açılış kalıbı: 'Personally,' kişisel görüşü net açar. Band 4 cevaplar net bir görüşle başlar.",
    },
    {
      id: "ex.toefl.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am preferring work in team because is more good.",
      correct_sentence:
        "I prefer working in a team because it is more productive.",
      tr_explanation:
        "Üç hata: (1) 'prefer' state verb — present continuous olmaz, 'I prefer' doğru. (2) 'in team' eksik artikel — 'in a team'. (3) 'more good' yanlış — 'better' veya 'more productive'. Language use puanını düşüren tipik hatalar.",
    },
    {
      id: "ex.toefl.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "TOEFL proctor (sınav görevlisi) prompt'u okuyacak. 15 sn hazırlık, 45 sn konuşma. Band 4 cevap: net görüş + 2 sebep + örnek + kapanış.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 1",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 1. Some people prefer to work alone, while others prefer to work as part of a team. Which do you prefer and why? Please include specific details and examples. You have 15 seconds to prepare and 45 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(personally|in my opinion|i (think|believe|prefer))",
            "(team|alone|on my own|by myself|together)",
            "(because|since|the (main )?reason|for (one|example))",
            "(productive|creative|efficient|focus|ideas|perspectives)",
            "for (example|instance)",
          ],
          hint_tr:
            "Band 4 yapı: 1) 'Personally, I prefer ___' (görüş) 2) 'There are two main reasons' 3) 'First, ___ For example, ___' 4) 'Second, ___' 5) 'That's why I prefer ___'.",
        },
        {
          speaker: "npc",
          message:
            "Good structure. Try to wrap up with a one-line conclusion next time — examiners reward clear closure in Topic Development.",
        },
      ],
    },
    {
      id: "ex.toefl.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Task 1 için kaç saniye konuşma süresi var?",
          options: ["30 sn", "45 sn", "60 sn", "90 sn"],
          correct_index: 1,
          tr_explanation: "Task 1 = 15 sn hazırlık + 45 sn konuşma.",
        },
        {
          question: "Band 4 (en yüksek) almak için Topic Development açısından ne gerekir?",
          options: [
            "Çok kelime kullanmak",
            "Net görüş + spesifik sebep/örnekler + kapanış",
            "Sadece akıcı konuşmak",
            "Aksanın mükemmel olması",
          ],
          correct_index: 1,
          tr_explanation:
            "Topic Development = fikrin gelişmesi: thesis + reasons + examples + closure.",
        },
        {
          question: "Hangisi en güçlü tercih ifadesi?",
          options: [
            "Maybe I like team.",
            "Team is okay I guess.",
            "Personally, I prefer working in a team because it boosts creativity.",
            "I work team always.",
          ],
          correct_index: 2,
          tr_explanation:
            "Net görüş + sebep + güçlü kelime ('boosts creativity') = band 4 dili.",
        },
      ],
    },
    {
      id: "ex.toefl.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "In my opinion, working with a team is far more productive.",
      tr_hint:
        "Task 1 açılışı için tipik geçiş kalıbı. 'In my opinion' = bence (TOEFL'da güvenli; 'I think' yerine band 4). 'Far more productive' karşılaştırmalı vurgu — 'FAR' güçlü, 'productive' yavaş ve net.",
    },
    {
      id: "ex.toefl.1.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd say teamwork is far more beneficial than working alone, mainly because it sparks creativity and improves problem-solving.",
      voice_hint: "female_us",
      tr_hint:
        "Task 1 model band 4 cevabı. 'I'd say' yumuşak öncül. 'Sparks creativity' güçlü collocation. 'Mainly because' = ana sebep işaretçisi. Ritmi yakala: 45 saniyeye sığacak hız.",
    },
    {
      id: "ex.toefl.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Some people prefer working alone, while others prefer working with a team. Which do you prefer and why?",
      transcription_target:
        "Some people prefer working alone, while others prefer working with a team. Which do you prefer and why?",
      tr_hint:
        "TOEFL Task 1 prompt'unun standart yapısı. 'While others' bağlacı yutulur. 'Which do you prefer and why' — son ek hızlı.",
    },
    {
      id: "ex.toefl.1.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to spark creativity",
      tr_translation: "yaratıcılığı tetiklemek",
      example:
        "Group brainstorming sessions tend to spark creativity in a way solo work cannot.",
      example_tr:
        "Grup beyin fırtınası, bireysel çalışmanın yapamadığı şekilde yaratıcılığı tetikler.",
    },
    {
      id: "ex.toefl.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am agree with working in team because is more better.",
      correct_sentence:
        "I agree with working on a team because it's much better.",
      tr_explanation:
        "Üç TOEFL Delivery/Language Use hatası: (1) 'I am agree' yanlış — 'agree' fiildir, 'I agree'. (2) 'In team' yerine 'on a team' (US) veya 'in a team' (UK); makale eksik. (3) 'More better' double comparative — sadece 'better' veya 'much better'. Net puan kaybı.",
    },
  ],
};

// ============================================================
// Lesson 2 — Task 1: Agree/Disagree (online vs in-person classes)
// ============================================================
export const toeflSpeakingLesson_2: BundledLesson = {
  id: "testprep.toefl.task1.agreedisagree.1",
  skill_id: "testprep.toefl.task1",
  index: 2,
  title: "Task 1 — Online dersler daha iyi mi?",
  description:
    "Task 1 (45 sn): 'Online classes are better than in-person classes.' Katılıyor musun? Net pozisyon + 2 sebep + spesifik örnek. Hedge'lerden ('maybe', 'kind of') kaçın — net duruş band 4.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.toefl.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "flexibility",
      tr_translation: "Esneklik",
      example: "Online classes offer more flexibility than in-person ones.",
      example_tr: "Online dersler yüz yüze derslerden daha fazla esneklik sunar.",
    },
    {
      id: "ex.toefl.2.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I strongly disagree",
      tr_translation: "Kesinlikle katılmıyorum",
      example: "I strongly disagree with the statement that online classes are better.",
      example_tr:
        "Online derslerin daha iyi olduğu görüşüne kesinlikle katılmıyorum.",
    },
    {
      id: "ex.toefl.2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Online derslerin yüz yüze derslerden daha iyi olduğuna katılıyorum çünkü daha fazla esneklik sağlıyorlar.",
      target:
        "I agree that online classes are better than in-person classes because they provide more flexibility.",
      accepted_variants: [
        "I agree that online classes are better than in-person ones because they offer more flexibility.",
        "I strongly agree that online classes are better than in-person classes because they provide more flexibility.",
        "I agree with the statement because online classes give students more flexibility than in-person classes.",
        "I believe online classes are better than in-person classes because of their flexibility.",
      ],
      tr_hint:
        "'I agree that' + claim + 'because' + sebep. Task 1'in iskeleti.",
    },
    {
      id: "ex.toefl.2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "I agree with this statement ___ several reasons.",
      answer: "for",
      distractors: ["because", "due", "since", "with"],
      tr_hint:
        "Signpost kalıbı: 'for several reasons' = 'birkaç sebepten ötürü'. Topic Development açar.",
    },
    {
      id: "ex.toefl.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am agree because online class is having more flexibility.",
      correct_sentence:
        "I agree because online classes have more flexibility.",
      tr_explanation:
        "(1) 'I am agree' yanlış — 'agree' verb, 'I agree' doğru. (2) 'is having' state verb continuous olmaz — 'has/have'. (3) 'class' tekil/çoğul tutarsız — 'classes have'. Language use puanını düşürür.",
    },
    {
      id: "ex.toefl.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Proctor agree/disagree promptunu okur. 15 sn hazırlık, 45 sn konuşma. Hedge dilinden ('maybe', 'kind of') kaçın — net duruş + spesifik sebep.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 1",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 1. Do you agree or disagree with the following statement? Online classes are better than in-person classes. Use specific reasons and examples to support your answer. You have 15 seconds to prepare and 45 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (strongly )?(agree|disagree)",
            "(online|in.person|face.to.face)",
            "(because|since|the (main )?reason)",
            "(flexibility|convenient|schedule|interaction|engagement)",
            "for (example|instance)",
          ],
          hint_tr:
            "Yapı: 'I strongly agree/disagree' → 'There are two main reasons' → 'First, ___ For instance, ___' → 'Second, ___' → 'For these reasons, ___'.",
        },
        {
          speaker: "npc",
          message:
            "Clear position and good signposting. Watch your pace at the end — examiners deduct from Delivery if you trail off in the last 5 seconds.",
        },
      ],
    },
    {
      id: "ex.toefl.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Agree/disagree soruda en zayıf açılış hangisi?",
          options: [
            "I strongly agree because...",
            "Maybe I agree, kind of...",
            "I disagree for two main reasons.",
            "Personally, I agree with this statement.",
          ],
          correct_index: 1,
          tr_explanation:
            "Hedge dil ('maybe', 'kind of') net duruşu yok eder — Topic Development puanı düşer.",
        },
        {
          question: "'For several reasons' ne işe yarar?",
          options: [
            "Konuyu değiştirir",
            "Cevabı uzatır",
            "Signpost: gelecek sebeplere yön verir",
            "Sadece dolgu kelimedir",
          ],
          correct_index: 2,
          tr_explanation:
            "Signposting Delivery + Topic Development puanını artırır.",
        },
        {
          question: "Task 1 en yüksek puanı (band 4) almak için kaç sebep idealdir?",
          options: ["0", "1 ama çok detaylı", "2 sebep + örnek", "5 yüzeysel sebep"],
          correct_index: 2,
          tr_explanation:
            "45 sn'ye 2 spesifik sebep + örnek sığar. 1 sebep yetersiz, 3+ yüzeysel olur.",
        },
      ],
    },
    {
      id: "ex.toefl.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "According to the reading, online classes offer significant flexibility.",
      tr_hint:
        "Task 3/4 referans kalıbı ama Task 1'de de geçiş için kullanışlı. 'According to' = '...e göre'; 'ac-COR-ding' ikinci hece vurgulu. 'Significant flexibility' band 4 collocation.",
    },
    {
      id: "ex.toefl.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Personally, I'd argue that in-person classes are more effective, primarily because they foster meaningful interaction.",
      voice_hint: "male_us",
      tr_hint:
        "Task 1 band 4 model. 'I'd argue that' güvenli academic register. 'Primarily because' ana sebep. 'Foster meaningful interaction' = yüksek-seviye collocation; 'foster' band 4 fiili.",
    },
    {
      id: "ex.toefl.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Do you agree or disagree with the statement that online classes are just as effective as in-person classes?",
      transcription_target:
        "Do you agree or disagree with the statement that online classes are just as effective as in-person classes?",
      tr_hint:
        "Task 1 Agree/Disagree prompt'u. 'Just as effective as' = aynı ölçüde etkili (eşitlik karşılaştırması). 'Statement that' clauselı yapı.",
    },
    {
      id: "ex.toefl.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to foster interaction",
      tr_translation: "etkileşimi teşvik etmek",
      example:
        "In-person classes foster interaction between students and instructors.",
      example_tr:
        "Yüz yüze dersler, öğrenciler ile eğitmenler arasındaki etkileşimi teşvik eder.",
    },
    {
      id: "ex.toefl.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Online classes is more better for the students because they can to learn in home.",
      correct_sentence:
        "Online classes are better for students because they can learn at home.",
      tr_explanation:
        "Dört hata: (1) 'Classes is' yerine 'classes are' (çoğul). (2) 'More better' yanlış — sadece 'better'. (3) 'Can to learn' yanlış — 'can' modal sonrası bare infinitive: 'can learn'. (4) 'In home' yerine 'at home' (sabit kalıp). Language Use cezası.",
    },
  ],
};

// ============================================================
// Lesson 3 — Task 1: Choice (high salary vs job satisfaction)
// ============================================================
export const toeflSpeakingLesson_3: BundledLesson = {
  id: "testprep.toefl.task1.choice.1",
  skill_id: "testprep.toefl.task1",
  index: 3,
  title: "Task 1 — Yüksek maaş mı, iş tatmini mi?",
  description:
    "Task 1 (45 sn): 'Which is more important: high salary or job satisfaction?' İkili seçim — net taraf + 2 spesifik sebep. Karşı tarafı kabul edip neden yetersiz olduğunu açıklamak (counterpoint) band 4 stratejisi.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.toefl.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "fulfillment",
      tr_translation: "Tatmin, doyum",
      example: "Job fulfillment matters more than money in the long run.",
      example_tr: "Uzun vadede iş tatmini paradan daha önemli.",
    },
    {
      id: "ex.toefl.3.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "in the long run",
      tr_translation: "Uzun vadede",
      example: "Job satisfaction matters more in the long run.",
      example_tr: "Uzun vadede iş tatmini daha önemli.",
    },
    {
      id: "ex.toefl.3.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Bana göre iş tatmini yüksek maaştan daha önemli çünkü uzun vadede mutluluk getirir.",
      target:
        "In my view, job satisfaction is more important than a high salary because it brings happiness in the long run.",
      accepted_variants: [
        "From my perspective, job satisfaction is more important than a high salary because it brings happiness in the long run.",
        "I believe job satisfaction is more important than a high salary because it leads to long-term happiness.",
        "Personally, I think job satisfaction matters more than a high salary because it brings happiness over time.",
        "To me, job satisfaction is more important than a high salary because it provides long-term fulfillment.",
      ],
      tr_hint:
        "Comparative + 'because' + uzun vadeli sebep. 'In my view' opener Topic Development açar.",
    },
    {
      id: "ex.toefl.3.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "While a high salary is appealing, ___ , job satisfaction is far more important.",
      answer: "in my opinion",
      distractors: [
        "for example",
        "on the other hand",
        "in conclusion",
        "by the way",
      ],
      tr_hint:
        "Counterpoint kalıbı: 'While X, in my opinion, Y' — band 4 strateji. Karşı görüşü kabul edip kendi tarafını savunmak.",
    },
    {
      id: "ex.toefl.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Salary is important more, but satisfaction is matter too.",
      correct_sentence:
        "A high salary is important, but job satisfaction matters more.",
      tr_explanation:
        "(1) 'Important more' yanlış sıra — 'more important' veya '___ matters more'. (2) 'Is matter' yanlış — 'matter' verb, 'matters' doğru. (3) Belirsiz artikel 'a high salary' net. Language use band 3 → band 4.",
    },
    {
      id: "ex.toefl.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Proctor seçim sorusu sorar. 15 sn hazırlık, 45 sn konuşma. Band 4: counterpoint ('While X is important, Y matters more') + 2 sebep + örnek.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 1",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 1. Some people believe that a high salary is the most important factor when choosing a job. Others believe that job satisfaction is more important. Which do you think is more important and why? You have 15 seconds to prepare and 45 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in my (view|opinion)|personally|i (believe|think|prefer))",
            "(salary|money|satisfaction|fulfillment|happiness)",
            "(more important|matters more|prioritize|value)",
            "(because|since|for (example|instance))",
            "(long.run|long.term|over time)",
          ],
          hint_tr:
            "Strateji: 1) 'While a high salary matters, in my opinion job satisfaction is more important' 2) 'First, ___' 3) 'For example, my uncle ___' 4) 'Second, ___' 5) 'For these reasons, ___'.",
        },
        {
          speaker: "npc",
          message:
            "Strong counterpoint structure. Make sure your example is specific — vague examples cost you Topic Development points.",
        },
      ],
    },
    {
      id: "ex.toefl.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Counterpoint stratejisi nedir?",
          options: [
            "Karşı tarafa katılmak",
            "Karşı tarafı kabul edip kendi tarafını savunmak ('While X, Y is more important')",
            "Sadece kendi tarafını söylemek",
            "İki tarafı eşit savunmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Counterpoint band 4'ün işaretidir — Topic Development'i derinleştirir.",
        },
        {
          question: "Task 1'de en güçlü örnek hangisidir?",
          options: [
            "People want money.",
            "Many studies show this.",
            "My uncle quit his $200k banking job to teach because he wasn't happy.",
            "Money is good but not all.",
          ],
          correct_index: 2,
          tr_explanation:
            "Spesifik, kişisel, ölçülebilir örnek = band 4 Topic Development.",
        },
        {
          question: "Hangisi en doğru karşılaştırma yapısı?",
          options: [
            "Satisfaction is important more than salary",
            "Salary is more important from satisfaction",
            "Job satisfaction is more important than a high salary",
            "Satisfaction more important salary",
          ],
          correct_index: 2,
          tr_explanation:
            "'more + adjective + than' = standart İngilizce karşılaştırma.",
        },
      ],
    },
    {
      id: "ex.toefl.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "From my perspective, job satisfaction outweighs a high salary in the long run.",
      tr_hint:
        "Task 1 görüş açılışı. 'From my perspective' = bana göre — formal. 'Outweighs' = ağır basar; 'OUT-weighs' ilk hece vurgulu. 'In the long run' = uzun vadede, sabit kalıp.",
    },
    {
      id: "ex.toefl.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd much rather pursue job satisfaction over a high salary, mainly because fulfillment drives long-term success.",
      voice_hint: "female_us",
      tr_hint:
        "Band 4 Task 1 cevabı. 'I'd much rather X over Y' = X'i Y'ye tercih ederim. 'Drives long-term success' güçlü collocation. Ritim: 'fulfillment' yavaş, 'success' kapanış vurgusu.",
    },
    {
      id: "ex.toefl.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Some people choose a job with a high salary, while others choose one that brings personal satisfaction. Which would you choose?",
      transcription_target:
        "Some people choose a job with a high salary, while others choose one that brings personal satisfaction. Which would you choose?",
      tr_hint:
        "Task 1 Choice prompt yapısı. 'One that brings personal satisfaction' ilgi cümleciği. 'Which would you choose' kapanış.",
    },
    {
      id: "ex.toefl.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to outweigh",
      tr_translation: "ağır basmak, daha önemli olmak",
      example: "The benefits of satisfaction outweigh the appeal of money.",
      example_tr: "Tatminin faydaları, paranın cazibesinden ağır basar.",
    },
    {
      id: "ex.toefl.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Satisfaction is more important from salary because make you happy.",
      correct_sentence:
        "Satisfaction is more important than salary because it makes you happy.",
      tr_explanation:
        "Üç TOEFL Language Use hatası: (1) 'More important from' yerine 'more important than' (karşılaştırma). (2) Özne eksik — 'because make' yerine 'because it makes'. Türk öğrenci subject drop. (3) 'Make' yerine 'makes' (3. tekil -s). Net puan kaybı.",
    },
  ],
};

// ============================================================
// Lesson 4 — Task 2: Campus situation (library policy)
// ============================================================
export const toeflSpeakingLesson_4: BundledLesson = {
  id: "testprep.toefl.task2.library.1",
  skill_id: "testprep.toefl.task2",
  index: 4,
  title: "Task 2 — Kütüphane saatleri politikası",
  description:
    "Task 2 (60 sn): Üniversite duyurusunu oku (45 sn) → öğrenci tepkisini dinle → öğrencinin görüşünü ve sebeplerini özetle.\n\nREADING (duyuru, 45 sn): The university library will close at 9 PM instead of midnight starting next semester. The administration explains that fewer students use the library after 9 PM and the change will reduce operating costs.\n\nLISTENING (öğrenci konuşması — Mark): \"I really disagree with this. First, plenty of grad students like me work late — the library is packed after 9 every night during finals. Second, if they need to save money, why not just reduce staff after 9 instead of closing entirely? We pay tuition for these facilities.\"\n\nGÖREV: Öğrencinin görüşünü ve sebeplerini özetle. Kendi görüşünü EKLEMEZSİN.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.toefl.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "according to the announcement",
      tr_translation: "Duyuruya göre",
      example:
        "According to the announcement, the library will close at 9 PM.",
      example_tr: "Duyuruya göre, kütüphane saat 9'da kapanacak.",
    },
    {
      id: "ex.toefl.4.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "operating costs",
      tr_translation: "İşletme maliyetleri",
      example: "The change will reduce operating costs.",
      example_tr: "Bu değişiklik işletme maliyetlerini azaltacak.",
    },
    {
      id: "ex.toefl.4.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Erkek öğrenci yeni politikaya katılmıyor çünkü yüksek lisans öğrencileri geç saatte çalışıyor.",
      target:
        "The male student disagrees with the new policy because graduate students work late.",
      accepted_variants: [
        "The man disagrees with the new policy because graduate students study late.",
        "The male student does not agree with the new policy because grad students work late at night.",
        "The man is against the new policy because graduate students often work late.",
        "The male student opposes the new policy because graduate students study late into the night.",
      ],
      tr_hint:
        "Task 2 raporlama dili: '[The man/woman] disagrees because ___'. Kendi görüşün YOK.",
    },
    {
      id: "ex.toefl.4.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "___ the announcement, the library will close earlier.",
      answer: "According to",
      distractors: ["Because of", "Despite of", "In spite", "Due"],
      tr_hint:
        "Task 2 signpost: 'According to the announcement/reading' — duyuruyu özetlerken kullan.",
    },
    {
      id: "ex.toefl.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The man is disagree because he think library is needed late.",
      correct_sentence:
        "The man disagrees because he thinks the library is needed late at night.",
      tr_explanation:
        "(1) 'Is disagree' yanlış — 'disagree' verb, 'disagrees' (3rd person s). (2) 'He think' eksik s — 'he thinks'. (3) Artikel eksik — 'the library'. Reporting bölümü Language use puanını belirler.",
    },
    {
      id: "ex.toefl.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Proctor Task 2 promptunu okur. 30 sn hazırlık, 60 sn konuşma. Sıralama: 1) duyuruyu kısaca özetle 2) öğrencinin görüşünü söyle 3) iki sebebini anlat.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 2. The university is changing its library hours. Briefly summarize the change, then state the man's opinion about the change and explain the reasons he gives for that opinion. You have 30 seconds to prepare and 60 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(according to|the (reading|announcement|university|administration))",
            "(library|hours|9 ?pm|midnight|close)",
            "(the (man|male student)|he) (disagrees|is against|opposes|does not agree)",
            "(first|second|moreover|in addition|furthermore)",
            "(grad(uate)? students?|late|finals|tuition|staff)",
          ],
          hint_tr:
            "Yapı: 1) 'According to the announcement, the library will close at 9 PM to reduce costs.' 2) 'However, the man disagrees with this change.' 3) 'First, he says ___' 4) 'Second, he argues ___'.",
        },
        {
          speaker: "npc",
          message:
            "Good reporting language. Remember Task 2 is NOT about your opinion — keep 'I think' out of your response. That alone can drop you from band 4 to band 3.",
        },
      ],
    },
    {
      id: "ex.toefl.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Task 2'de kendi görüşünü söylemeli misin?",
          options: [
            "Evet, mutlaka",
            "Hayır — sadece öğrencinin görüşünü özetlersin",
            "Sonunda kısaca",
            "Sadece katılıyorsan söyle",
          ],
          correct_index: 1,
          tr_explanation:
            "Task 2 = REPORTING. 'I think' kullanırsan Topic Development cezası alırsın.",
        },
        {
          question: "Task 2'de ne kadar hazırlık + konuşma süresi var?",
          options: [
            "15 sn + 45 sn",
            "20 sn + 60 sn",
            "30 sn + 60 sn",
            "30 sn + 90 sn",
          ],
          correct_index: 2,
          tr_explanation: "Task 2 = 30 sn hazırlık + 60 sn konuşma.",
        },
        {
          question: "'According to the announcement' ne işe yarar?",
          options: [
            "Kendi fikrini açıklar",
            "Kaynağı belirtir — Topic Development açar",
            "Cevabı uzatır",
            "Vakit kazandırır ama puana etkisi yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Kaynak gösteren signpost'lar Task 2'de zorunlu — Topic Development + Delivery'ye katkı.",
        },
      ],
    },
    {
      id: "ex.toefl.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "According to the reading, the library will extend its operating hours.",
      tr_hint:
        "Task 2 signpost — zorunlu. 'According to the reading' = okumaya göre; tüm Task 2-3-4'te kullanılır. 'Extend its operating hours' = saatleri uzatmak; 'OP-er-at-ing' dört hece.",
    },
    {
      id: "ex.toefl.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "The woman strongly supports the new policy, primarily because she believes extended hours will help students prepare for finals.",
      voice_hint: "female_us",
      tr_hint:
        "Task 2 band 4 model. 'The woman strongly supports' = açık görüş atıfı. 'Primarily because' ana sebep. 'Prepare for finals' collocation. 60 sn ritmi yakala.",
    },
    {
      id: "ex.toefl.4.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "The woman expresses her opinion about the university's new policy. State her opinion and explain the reasons she gives.",
      transcription_target:
        "The woman expresses her opinion about the university's new policy. State her opinion and explain the reasons she gives.",
      tr_hint:
        "Task 2 prompt'unun klasik yapısı. 'State her opinion and explain' — iki adımlı emir cümlesi. 'The reasons she gives' ilgi cümleciği.",
    },
    {
      id: "ex.toefl.4.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "according to the reading",
      tr_translation: "okumaya göre",
      example:
        "According to the reading, the new policy will benefit graduate students the most.",
      example_tr:
        "Okumaya göre, yeni politika en çok yüksek lisans öğrencilerine fayda sağlayacak.",
    },
    {
      id: "ex.toefl.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The woman is agree with the proposal because she think it help students.",
      correct_sentence:
        "The woman agrees with the proposal because she thinks it will help students.",
      tr_explanation:
        "Üç hata: (1) 'Is agree' yanlış — 'agree' fiildir: 'agrees' (3. tekil -s). (2) 'She think' yerine 'she thinks'. (3) 'It help' yerine 'it will help' (future tense — politika gelecekte). Language Use'da net puan kaybı.",
    },
  ],
};

// ============================================================
// Lesson 5 — Task 2: Campus situation (parking rule)
// ============================================================
export const toeflSpeakingLesson_5: BundledLesson = {
  id: "testprep.toefl.task2.parking.1",
  skill_id: "testprep.toefl.task2",
  index: 5,
  title: "Task 2 — Yeni park yeri kuralı",
  description:
    "Task 2 (60 sn): Park kuralı + öğrenci itirazı.\n\nREADING (duyuru): Starting in the fall semester, only seniors and graduate students will be permitted to park in Lot B, the lot closest to the main library. Freshmen, sophomores, and juniors must use Lot D, located 15 minutes from campus by foot. The university says this gives priority to students with the heaviest course loads.\n\nLISTENING (öğrenci — Linda, junior): \"This rule is unfair. First, juniors take just as many advanced classes as seniors — my junior chemistry labs require way more library time than most senior electives. Second, Lot D is too far. In winter, walking 15 minutes in snow with a 20-pound backpack is dangerous, not just inconvenient.\"\n\nGÖREV: Politikayı + öğrencinin görüşünü ve sebeplerini özetle.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.toefl.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "permitted",
      tr_translation: "İzinli, izin verilen",
      example: "Only seniors are permitted to park in Lot B.",
      example_tr: "Sadece son sınıflara Lot B'de park izni var.",
    },
    {
      id: "ex.toefl.5.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "give priority to",
      tr_translation: "Önceliği vermek",
      example: "The policy gives priority to graduate students.",
      example_tr: "Politika yüksek lisans öğrencilerine öncelik veriyor.",
    },
    {
      id: "ex.toefl.5.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Kadın öğrenci politikayla aynı fikirde değil çünkü Lot D çok uzak.",
      target:
        "The female student does not agree with the policy because Lot D is too far.",
      accepted_variants: [
        "The woman disagrees with the policy because Lot D is too far away.",
        "The female student opposes the policy because Lot D is too far from campus.",
        "Linda disagrees with the new rule because Lot D is too far.",
        "The woman is against the policy because Lot D is too far from the campus.",
      ],
      tr_hint:
        "Task 2 reporting: '[The woman/female student] disagrees because ___'.",
    },
    {
      id: "ex.toefl.5.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "The woman makes two main ___ against the new parking rule.",
      answer: "points",
      distractors: ["reasons", "questions", "complaints", "answers"],
      tr_hint:
        "Task 2 signpost: 'two main points' = öğrencinin iki argümanını sayar. Topic Development açar.",
    },
    {
      id: "ex.toefl.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The woman say that Lot D very far and not safe in winter.",
      correct_sentence:
        "The woman says that Lot D is very far and not safe in winter.",
      tr_explanation:
        "(1) 'The woman say' eksik s — 'says'. (2) 'Lot D very far' eksik 'is' — 'Lot D is very far'. Tek 'be' kelimesinin eksikliği Language use'i band 3'e indirir.",
    },
    {
      id: "ex.toefl.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Proctor Task 2 promptunu okur. 30 sn hazırlık, 60 sn konuşma. Önce kuralı özetle, sonra Linda'nın iki argümanını sıralı anlat.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 2. The university is changing its parking policy. Briefly describe the policy, then state the woman's opinion about the policy and the reasons she gives. You have 30 seconds to prepare and 60 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(according to|the (reading|announcement|university|administration))",
            "(parking|lot ?b|lot ?d|seniors|graduate)",
            "(the (woman|female student|girl)|linda|she) (disagrees|is against|opposes)",
            "(first|second|moreover|in addition|furthermore)",
            "(junior|chemistry|labs?|library|winter|snow|dangerous|far)",
          ],
          hint_tr:
            "Yapı: 1) 'The university is restricting Lot B to seniors and grad students.' 2) 'The woman disagrees with this rule.' 3) 'First, she argues that juniors ___' 4) 'Second, she points out that ___'.",
        },
        {
          speaker: "npc",
          message:
            "Solid structure. Try varying your verbs — 'she says' three times in a row hurts your Language Use score. Use 'she argues', 'she points out', 'she adds'.",
        },
      ],
    },
    {
      id: "ex.toefl.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Task 2'de reporting dilinde hangisi daha güçlü?",
          options: [
            "She says... she says... she says...",
            "She argues... she points out... she adds...",
            "She told... she told... she told...",
            "She thinks... she thinks... she thinks...",
          ],
          correct_index: 1,
          tr_explanation:
            "Çeşitli reporting verb'leri Language Use puanını yükseltir.",
        },
        {
          question: "Linda hangi rütbedeki öğrenci?",
          options: ["Senior", "Junior", "Freshman", "Graduate"],
          correct_index: 1,
          tr_explanation:
            "Linda 'junior' (üçüncü sınıf) — bu yüzden Lot B'den men edildi.",
        },
        {
          question: "'Give priority to' nasıl çevrilir?",
          options: [
            "Öncelikten kaldırmak",
            "Öncelik tanımak / önceliği vermek",
            "Önce gelmek",
            "Önceden bilmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Give priority to X' = X'e öncelik tanımak. TOEFL akademik kelime.",
        },
      ],
    },
    {
      id: "ex.toefl.5.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "The professor explains that priority parking will benefit commuters most.",
      tr_hint:
        "Task 2/3/4 atıf kalıbı. 'The professor explains that' = profesör açıklıyor. 'Priority parking' = öncelikli park; 'PRY-o-ri-ty' dört hece. 'Benefit commuters most' güçlü collocation.",
    },
    {
      id: "ex.toefl.5.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "The man disagrees with the new parking rule, mainly because he feels it discriminates against students who live off-campus.",
      voice_hint: "male_us",
      tr_hint:
        "Task 2 band 4 model. 'Discriminates against' = ayrımcılık yapar — akademik fiil. 'Off-campus' = kampüs dışı, sabit terim. 60 sn'lik ritmi yakala.",
    },
    {
      id: "ex.toefl.5.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Briefly summarize the proposed change, then state the man's opinion and explain the reasons he gives.",
      transcription_target:
        "Briefly summarize the proposed change, then state the man's opinion and explain the reasons he gives.",
      tr_hint:
        "Task 2 üç adımlı prompt. 'Briefly summarize' başlangıç. 'Then state... and explain' iki ek adım. Yavaş ve net ritim.",
    },
    {
      id: "ex.toefl.5.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to discriminate against",
      tr_translation: "...e karşı ayrımcılık yapmak",
      example:
        "The new rule discriminates against students without cars.",
      example_tr: "Yeni kural, arabası olmayan öğrencilere karşı ayrımcılık yapıyor.",
    },
    {
      id: "ex.toefl.5.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The man don't agree because is unfair for the students which live far.",
      correct_sentence:
        "The man doesn't agree because it's unfair to students who live far away.",
      tr_explanation:
        "Dört hata: (1) 'Don't' yerine 'doesn't' (3. tekil). (2) 'Is unfair' başında özne eksik — 'it's unfair'. (3) 'Unfair for' yerine 'unfair to' (insanlara karşı). (4) 'Which' yerine 'who' (kişi için). TOEFL Language Use cezası.",
    },
  ],
};

// ============================================================
// Lesson 6 — Task 2: Campus situation (cafeteria menu change)
// ============================================================
export const toeflSpeakingLesson_6: BundledLesson = {
  id: "testprep.toefl.task2.cafeteria.1",
  skill_id: "testprep.toefl.task2",
  index: 6,
  title: "Task 2 — Yemekhane menü değişikliği",
  description:
    "Task 2 (60 sn): Yemekhane menüsü + öğrenci tercihi.\n\nREADING (duyuru): Beginning next month, the campus cafeteria will eliminate beef and pork from its daily menu and offer a wider variety of plant-based dishes. The university says this change reflects student demand for sustainable food options and will reduce the cafeteria's environmental footprint.\n\nLISTENING (öğrenci — Tom): \"Honestly, I love this. I've been a vegetarian for two years, and the cafeteria options were limited — basically salad and pasta. More plant-based dishes means I'll actually eat on campus instead of cooking at home. And environmentally, livestock farming uses huge amounts of water — cutting beef makes a real difference for the planet.\"\n\nGÖREV: Değişikliği + Tom'un görüşünü ve sebeplerini özetle.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.toefl.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "eliminate",
      tr_translation: "Kaldırmak, çıkarmak",
      example: "The cafeteria will eliminate beef from the menu.",
      example_tr: "Yemekhane menüden et çıkaracak.",
    },
    {
      id: "ex.toefl.6.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "environmental footprint",
      tr_translation: "Çevresel ayak izi",
      example: "Plant-based food reduces environmental footprint.",
      example_tr: "Bitki bazlı yemek çevresel ayak izini azaltır.",
    },
    {
      id: "ex.toefl.6.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Erkek öğrenci değişikliği destekliyor çünkü kendisi vejetaryen ve seçenekler artacak.",
      target:
        "The male student supports the change because he is a vegetarian and the options will increase.",
      accepted_variants: [
        "The man supports the change because he is a vegetarian and there will be more options.",
        "Tom supports the new menu because he is a vegetarian and will have more options.",
        "The male student agrees with the change because he is a vegetarian and the options will expand.",
        "The man is in favor of the change because he is a vegetarian and there will be more options for him.",
      ],
      tr_hint:
        "Task 2 reporting: '[The man] supports/agrees because ___'.",
    },
    {
      id: "ex.toefl.6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "The man explains that ___ , livestock farming uses huge amounts of water.",
      answer: "in addition",
      distractors: ["however", "for example", "in conclusion", "by the way"],
      tr_hint:
        "Task 2 signpost: 'In addition' = ikinci argümanı bağlar. 'Moreover', 'Furthermore' eşdeğer.",
    },
    {
      id: "ex.toefl.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Tom likes the change because he eat no meat and is care about environment.",
      correct_sentence:
        "Tom likes the change because he doesn't eat meat and cares about the environment.",
      tr_explanation:
        "(1) 'He eat' eksik s — 'eats' veya negative 'doesn't eat'. (2) 'Is care' yanlış — 'care' verb, 'cares'. (3) 'About environment' eksik 'the'. Üç hata Language use'i band 3'e iter.",
    },
    {
      id: "ex.toefl.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Proctor Task 2 promptunu okur. 30 sn hazırlık, 60 sn konuşma. Tom'un görüşünü ve İKİ sebebini (kişisel + çevresel) raporla.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 2. The cafeteria is changing its menu. Briefly describe the change, then explain the man's opinion about it and the reasons he gives. You have 30 seconds to prepare and 60 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(according to|the (reading|announcement|cafeteria|university))",
            "(beef|pork|plant.based|vegetarian|menu|sustainable)",
            "(the (man|male student)|tom|he) (supports|agrees|likes|is (in favor|happy)|is glad)",
            "(first|second|moreover|in addition|furthermore)",
            "(vegetarian|options|water|environment|livestock|planet)",
          ],
          hint_tr:
            "Yapı: 1) 'The cafeteria is removing beef and pork and adding plant-based dishes.' 2) 'The man supports this change.' 3) 'First, he is a vegetarian and currently has limited options.' 4) 'Second, livestock farming wastes water, so the change helps the environment.'",
        },
        {
          speaker: "npc",
          message:
            "Good reporting. One tip — when you state his second reason, link it explicitly to the reading's mention of environmental footprint. That earns Topic Development points.",
        },
      ],
    },
    {
      id: "ex.toefl.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hangi cümle Tom'un birinci sebebini en iyi raporluyor?",
          options: [
            "Tom likes vegetables.",
            "He is a vegetarian and the current cafeteria options are limited for him.",
            "He thinks meat is bad.",
            "He doesn't like beef.",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik + reading'le bağlantılı = band 4 reporting.",
        },
        {
          question: "'In addition' yerine hangisi kullanılabilir?",
          options: [
            "However",
            "Moreover / Furthermore",
            "On the other hand",
            "Otherwise",
          ],
          correct_index: 1,
          tr_explanation:
            "'In addition', 'Moreover', 'Furthermore' = additive signpost; 'However' = contrast.",
        },
        {
          question: "Task 2'de iki sebebi de açıklamamak ne ceza getirir?",
          options: [
            "Sadece Delivery düşer",
            "Topic Development direkt band 2-3'e düşer",
            "Hiç ceza yok",
            "Sadece Language Use düşer",
          ],
          correct_index: 1,
          tr_explanation:
            "Eksik bilgi = Topic Development cezası. 60 sn'yi iki sebebe paylaştır.",
        },
      ],
    },
    {
      id: "ex.toefl.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "According to the announcement, the cafeteria will eliminate fried food entirely.",
      tr_hint:
        "Task 2 reading özetleme kalıbı. 'According to the announcement' = duyuruya göre. 'Eliminate entirely' = tamamen kaldırmak; 'EL-i-mi-nate' dört hece, 'en-TIRE-ly' ikinci hece vurgulu.",
    },
    {
      id: "ex.toefl.6.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "The woman opposes the menu change, primarily because she believes students should have the freedom to choose what they eat.",
      voice_hint: "female_us",
      tr_hint:
        "Task 2 band 4 model. 'Opposes the menu change' güçlü görüş fiili. 'Should have the freedom to choose' = seçme özgürlüğüne sahip olmalı. Akademik ama doğal ton.",
    },
    {
      id: "ex.toefl.6.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "The students discuss the cafeteria's new menu policy. State the woman's opinion and the reasons she provides.",
      transcription_target:
        "The students discuss the cafeteria's new menu policy. State the woman's opinion and the reasons she provides.",
      tr_hint:
        "Task 2 prompt yapısı. 'Discuss' = tartışıyor (devam eden eylem). 'The reasons she provides' ilgi cümleciği — Task 2 standart kapanışı.",
    },
    {
      id: "ex.toefl.6.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to have the freedom to",
      tr_translation: "...e özgürlüğü olmak",
      example:
        "Students should have the freedom to choose their own meals.",
      example_tr: "Öğrencilerin kendi yemeklerini seçme özgürlüğü olmalı.",
    },
    {
      id: "ex.toefl.6.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "She is not agree because cafeteria must to respect students choices.",
      correct_sentence:
        "She doesn't agree because the cafeteria must respect students' choices.",
      tr_explanation:
        "Dört hata: (1) 'Is not agree' yerine 'doesn't agree' ('agree' fiildir). (2) 'Cafeteria' yerine 'the cafeteria' (definite article). (3) 'Must to respect' yanlış — modal sonrası bare infinitive: 'must respect'. (4) 'Students choices' yerine 'students' choices' (apostrophe). Language Use cezası.",
    },
  ],
};

// ============================================================
// Lesson 7 — Task 3: Academic integration (psychology concept + example)
// ============================================================
export const toeflSpeakingLesson_7: BundledLesson = {
  id: "testprep.toefl.task3.concept.1",
  skill_id: "testprep.toefl.task3",
  index: 7,
  title: "Task 3 — Anchoring Bias (kavram + örnek)",
  description:
    "Task 3 (60 sn): Akademik pasajı oku + profesörün örneğini dinle → örneğin kavramı NASIL açıkladığını anlat.\n\nREADING (psikoloji pasajı, 45 sn): Anchoring Bias\nAnchoring bias is a cognitive tendency in which people rely too heavily on the first piece of information they receive — the 'anchor' — when making decisions. Even when the anchor is arbitrary or irrelevant, it disproportionately influences subsequent judgments. The anchor shapes how individuals evaluate later information and often leads to systematically skewed estimates.\n\nLISTENING (profesör): \"Let me give you an example. A famous experiment asked two groups of students to estimate the percentage of African countries in the UN. Before they answered, researchers spun a rigged wheel that landed on either 10 or 65. Students who saw 10 estimated about 25%. Students who saw 65 estimated about 45%. The wheel number had nothing to do with the question, but it anchored their guesses — exactly what the theory predicts.\"\n\nGÖREV: Pasajdaki kavramı kısaca açıkla, sonra örneğin onu nasıl gösterdiğini anlat.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.toefl.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "cognitive bias",
      tr_translation: "Bilişsel önyargı",
      example: "Anchoring is a well-known cognitive bias.",
      example_tr: "Sabitlemek (anchoring) bilinen bir bilişsel önyargıdır.",
    },
    {
      id: "ex.toefl.7.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "the professor illustrates",
      tr_translation: "Profesör örneklendiriyor / gösteriyor",
      example: "The professor illustrates this concept with an experiment.",
      example_tr: "Profesör bu kavramı bir deneyle örneklendiriyor.",
    },
    {
      id: "ex.toefl.7.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Profesör çark deneyiyle anchoring bias'in tahminleri nasıl etkilediğini gösteriyor.",
      target:
        "The professor uses the wheel experiment to show how anchoring bias influences estimates.",
      accepted_variants: [
        "The professor illustrates anchoring bias through a wheel experiment that shows how it influences estimates.",
        "Using the wheel experiment, the professor demonstrates how anchoring bias affects estimates.",
        "The professor shows how anchoring bias influences estimates by using a wheel experiment.",
        "The professor explains anchoring bias with the wheel experiment, showing how it influences students' estimates.",
      ],
      tr_hint:
        "Task 3 köprü cümlesi: 'The professor uses ___ to show how the concept ___'. Reading + listening'i bağlar.",
    },
    {
      id: "ex.toefl.7.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "___ , the wheel number had nothing to do with the question, yet it still anchored students' answers.",
      answer: "As the professor explains",
      distractors: [
        "On the other hand",
        "For example",
        "In conclusion",
        "Despite this",
      ],
      tr_hint:
        "Task 3 attribution signpost: 'As the professor explains' = lecture'a referans. Reading'i 'According to the reading' ile açar.",
    },
    {
      id: "ex.toefl.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The reading say that anchoring is when people use first information too much, and the professor give an example with wheel.",
      correct_sentence:
        "The reading says that anchoring is when people rely too heavily on the first piece of information, and the professor gives an example with a wheel.",
      tr_explanation:
        "(1) 'Reading say' eksik s — 'says'. (2) 'Use first information too much' günlük dil — TOEFL akademik için 'rely too heavily on'. (3) 'Professor give' → 'gives'. (4) 'With wheel' eksik artikel — 'with a wheel'. Akademik dil + verb tense Language Use band 4'ün anahtarı.",
    },
    {
      id: "ex.toefl.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Proctor Task 3 promptunu okur. 30 sn hazırlık, 60 sn konuşma. Yapı: 1) kavramı tanımla (reading) 2) örneği anlat (listening) 3) örnek kavramı nasıl gösterdi.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 3",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 3. Using the example from the lecture, explain the concept of anchoring bias. You have 30 seconds to prepare and 60 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(according to|the reading|the passage)",
            "(anchoring( bias)?|first piece of information|anchor|cognitive)",
            "(the professor (explains|illustrates|describes|uses|gives|provides))",
            "(experiment|wheel|spun|10|65|africa|un|countries|estimate)",
            "(this (shows|illustrates|demonstrates)|in other words|as a result)",
          ],
          hint_tr:
            "Yapı: 1) 'According to the reading, anchoring bias is when people rely on the first information they receive.' 2) 'The professor illustrates this with an experiment...' 3) 'Students who saw 10 guessed ~25%, those who saw 65 guessed ~45%.' 4) 'This shows the anchor — even though irrelevant — shaped their estimates, exactly as the concept predicts.'",
        },
        {
          speaker: "npc",
          message:
            "Strong integration. Just remember: Task 3 rewards SHOWING the link between reading and lecture. End with 'This illustrates the concept because ___' for guaranteed Topic Development credit.",
        },
      ],
    },
    {
      id: "ex.toefl.7.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Task 3'te ana hedef nedir?",
          options: [
            "Kendi görüşünü vermek",
            "Sadece reading'i özetlemek",
            "Reading'deki kavramı + lecture'daki örneği bağlamak",
            "Sadece lecture'ı özetlemek",
          ],
          correct_index: 2,
          tr_explanation:
            "Task 3 = INTEGRATION. Reading + listening'i tek paragrafta bağla.",
        },
        {
          question: "Reading'e nasıl referans verirsin?",
          options: [
            "I think that...",
            "According to the reading / The reading explains that...",
            "Maybe the book says...",
            "It is well known that...",
          ],
          correct_index: 1,
          tr_explanation:
            "'According to the reading' = standart Task 3 signpost.",
        },
        {
          question: "Anchoring bias örneğinde çark sayısı niye önemliydi?",
          options: [
            "Çünkü gerçek bir UN istatistiği",
            "Çünkü öğrencilerin matematik bilgisini test ediyordu",
            "Çünkü alakasız olmasına rağmen tahminleri etkiledi — kavramı kanıtladı",
            "Çünkü herkes 10'u tercih etti",
          ],
          correct_index: 2,
          tr_explanation:
            "Anchor alakasız olduğu halde tahmin değişti = kavramın tam kanıtı.",
        },
      ],
    },
    {
      id: "ex.toefl.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "The professor illustrates this concept with a concrete example from her own research.",
      tr_hint:
        "Task 3 kavram + örnek bağlama kalıbı. 'Illustrates this concept' = bu kavramı örneklendiriyor. 'Concrete example' band 4 collocation; 'CON-crete' ilk hece vurgulu. 'From her own research' yumuşak.",
    },
    {
      id: "ex.toefl.7.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "According to the reading, anchoring bias occurs when individuals rely too heavily on the first piece of information they receive.",
      voice_hint: "male_us",
      tr_hint:
        "Task 3 reading tanım kalıbı. 'Anchoring bias occurs when' = ankraj yanlılığı...durumunda meydana gelir. 'Rely too heavily on' = aşırı güvenmek. 'First piece of information' tipik akademik tanım.",
    },
    {
      id: "ex.toefl.7.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Using the example from the lecture, explain the concept of anchoring bias presented in the reading.",
      transcription_target:
        "Using the example from the lecture, explain the concept of anchoring bias presented in the reading.",
      tr_hint:
        "Task 3 prompt'unun klasik yapısı. 'Using the example' = ders örneğini kullanarak. 'Presented in the reading' passive — reading'e referans.",
    },
    {
      id: "ex.toefl.7.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to illustrate a concept",
      tr_translation: "bir kavramı örneklendirmek",
      example:
        "The professor uses a classroom experiment to illustrate the concept.",
      example_tr:
        "Profesör, kavramı örneklendirmek için bir sınıf deneyi kullanır.",
    },
    {
      id: "ex.toefl.7.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The professor say that this bias happen when people are influenced from first number.",
      correct_sentence:
        "The professor says that this bias happens when people are influenced by the first number.",
      tr_explanation:
        "Dört hata: (1) 'Say' yerine 'says' (3. tekil). (2) 'Happen' yerine 'happens' (3. tekil). (3) 'Influenced from' yanlış — 'influenced by' (passive partner). (4) 'First number' yerine 'the first number' (definite). Language Use'da TOEFL'ın en sık cezalandırdığı paket.",
    },
  ],
};

// ============================================================
// Lesson 8 — Task 3: Theory + experiment validates
// ============================================================
export const toeflSpeakingLesson_8: BundledLesson = {
  id: "testprep.toefl.task3.theory.1",
  skill_id: "testprep.toefl.task3",
  index: 8,
  title: "Task 3 — Reinforcement (teori + deney)",
  description:
    "Task 3 (60 sn): Davranışçı teoriyi oku + Skinner'ın deneyini dinle → deneyin teoriyi nasıl doğruladığını özetle.\n\nREADING (psikoloji pasajı, 45 sn): Operant Conditioning — Positive Reinforcement\nIn behavioral psychology, operant conditioning is a process by which the frequency of a behavior is modified by the consequences that follow it. Positive reinforcement specifically refers to the addition of a desirable stimulus immediately after a behavior occurs, which makes the behavior more likely to be repeated in the future. The key prediction is that consistent rewarding increases the rate of the targeted behavior over time.\n\nLISTENING (profesör): \"B.F. Skinner placed a hungry rat in a box with a small lever. At first, the rat moved around randomly. When it accidentally pressed the lever, a food pellet dropped. Within a few minutes, the rat was pressing the lever rapidly and deliberately. Skinner recorded the rate of pressing — it climbed sharply once the food appeared. This wasn't an accident; remove the food, and within hours the pressing stopped almost completely.\"\n\nGÖREV: Teoriyi açıkla, deneyin onu nasıl doğruladığını anlat.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.toefl.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "reinforcement",
      tr_translation: "Pekiştirme, güçlendirme",
      example: "Positive reinforcement increases a behavior's frequency.",
      example_tr: "Pozitif pekiştirme bir davranışın sıklığını artırır.",
    },
    {
      id: "ex.toefl.8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "validate the theory",
      tr_translation: "Teoriyi doğrulamak",
      example: "The experiment validates the theory of operant conditioning.",
      example_tr: "Deney operant koşullanma teorisini doğruluyor.",
    },
    {
      id: "ex.toefl.8.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Skinner'ın deneyi, ödülün davranışın sıklığını artırdığını göstererek teoriyi doğrulamaktadır.",
      target:
        "Skinner's experiment validates the theory by showing that rewards increase the frequency of a behavior.",
      accepted_variants: [
        "Skinner's experiment confirms the theory by demonstrating that rewards increase the frequency of behavior.",
        "The experiment by Skinner validates the theory because it shows that rewards increase how often a behavior occurs.",
        "Skinner's experiment supports the theory by showing that a reward increases the frequency of a behavior.",
        "By showing that rewards increase the frequency of a behavior, Skinner's experiment validates the theory.",
      ],
      tr_hint:
        "Task 3 yapısı: 'X validates the theory by showing that ___'.",
    },
    {
      id: "ex.toefl.8.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "The professor explains that, ___ a food pellet appeared, the rat pressed the lever far more frequently.",
      answer: "once",
      distractors: ["since", "while", "during", "until"],
      tr_hint:
        "'Once X happened, Y' = X olunca Y oldu. Sebep-sonuç bağlacı. Reading-listening bağlantısını netleştirir.",
    },
    {
      id: "ex.toefl.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "The rat press more lever because get food, this is prove the theory.",
      correct_sentence:
        "The rat pressed the lever more often because it got food, which proves the theory.",
      tr_explanation:
        "(1) 'Rat press' geçmiş zaman yok — 'pressed'. (2) 'More lever' yanlış sıra — 'the lever more often'. (3) 'Get food' eksik özne + tense — 'it got food'. (4) 'This is prove' yanlış — 'which proves'. Geçmiş zaman + relative clause akademik dilin temeli.",
    },
    {
      id: "ex.toefl.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Proctor Task 3 promptunu okur. 30 sn hazırlık, 60 sn konuşma. Yapı: 1) teoriyi tanımla 2) deneyi anlat 3) deney teoriyi nasıl doğruladı.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 3",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 3. Using the experiment from the lecture, explain how it validates the theory of positive reinforcement described in the reading. You have 30 seconds to prepare and 60 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(according to|the reading|the passage)",
            "(positive )?reinforcement|operant conditioning|rewarding|behavior",
            "(the professor (explains|describes|provides|presents))",
            "(skinner|rat|lever|food|pellet|box|press)",
            "(this (validates|confirms|proves|supports|illustrates|demonstrates))",
            "(in (other words|short|conclusion)|therefore|thus|as a result)",
          ],
          hint_tr:
            "Yapı: 1) 'According to the reading, positive reinforcement increases a behavior when a reward follows it.' 2) 'The professor describes Skinner's experiment with a rat in a box.' 3) 'When the rat pressed the lever, it got food, and pressing increased sharply.' 4) 'This validates the theory because the reward directly raised the behavior's frequency.'",
        },
        {
          speaker: "npc",
          message:
            "Excellent integration. Bonus tip: examiners love when you reference the prediction in the reading and the result in the experiment side-by-side — that demonstrates Topic Development at the band 4 level.",
        },
      ],
    },
    {
      id: "ex.toefl.8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Positive reinforcement ne yapar?",
          options: [
            "Davranışı durdurur",
            "Davranışın sıklığını artırır (ödül eklenir)",
            "Cezayla davranışı azaltır",
            "Hiçbir etkisi yoktur",
          ],
          correct_index: 1,
          tr_explanation:
            "Reading'in net tanımı: ödül eklemek davranışın tekrar edilme olasılığını artırır.",
        },
        {
          question: "Skinner deneyinde kaldıraca basma neden arttı?",
          options: [
            "Sıçan eğitildi",
            "Lever ışık verdi",
            "Basınca yemek geldi (pozitif pekiştireç)",
            "Sıçan rastgele bastı",
          ],
          correct_index: 2,
          tr_explanation:
            "Yemek = positive reinforcement → davranış (lever basma) sıklaştı.",
        },
        {
          question: "Task 3 band 4 için kritik cümle hangisi?",
          options: [
            "I think the experiment is interesting.",
            "This validates the theory because the reward directly raised the behavior's frequency.",
            "Rats like food.",
            "Skinner is famous.",
          ],
          correct_index: 1,
          tr_explanation:
            "Reading'i + listening'i AÇIKÇA bağlayan cümle band 4'ün işaretidir.",
        },
      ],
    },
    {
      id: "ex.toefl.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "The lecture supports the theory through Skinner's famous experiment with rats.",
      tr_hint:
        "Task 3 reading-listening bağlama kalıbı. 'Supports the theory through' = teoriyi...yoluyla destekler. 'Skinner's famous experiment' kalıbı; 'SKIN-ner's' kısalt. 'With rats' yumuşak son ek.",
    },
    {
      id: "ex.toefl.8.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "According to the reading, reinforcement is the process by which behaviors are strengthened through consistent rewards.",
      voice_hint: "female_us",
      tr_hint:
        "Task 3 tanım kalıbı. 'The process by which' = ...süreci. 'Behaviors are strengthened' passive. 'Consistent rewards' band 4 collocation. Yavaş, akademik ton.",
    },
    {
      id: "ex.toefl.8.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Explain how the example from the professor's lecture demonstrates the principle described in the reading.",
      transcription_target:
        "Explain how the example from the professor's lecture demonstrates the principle described in the reading.",
      tr_hint:
        "Task 3 prompt'u — teori + deney bağlama. 'Demonstrates the principle' = ilkeyi gösterir. 'Described in the reading' passive — referans.",
    },
    {
      id: "ex.toefl.8.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to demonstrate a principle",
      tr_translation: "bir ilkeyi göstermek",
      example:
        "Skinner's box demonstrates the principle of operant conditioning.",
      example_tr:
        "Skinner kutusu, edimsel koşullanma ilkesini gösterir.",
    },
    {
      id: "ex.toefl.8.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Skinner experiment prove the theory because rats learned to press lever for getting food.",
      correct_sentence:
        "Skinner's experiment proves the theory because the rats learned to press the lever to get food.",
      tr_explanation:
        "Dört hata: (1) 'Skinner experiment' yerine 'Skinner's experiment' (possessive). (2) 'Prove' yerine 'proves' (3. tekil). (3) Definite article eksik: 'the rats', 'the lever'. (4) 'For getting' yerine 'to get' (purpose infinitive). TOEFL akademik İngilizcede klasik hata.",
    },
  ],
};

// ============================================================
// Lesson 9 — Task 4: Biology lecture summary
// ============================================================
export const toeflSpeakingLesson_9: BundledLesson = {
  id: "testprep.toefl.task4.biology.1",
  skill_id: "testprep.toefl.task4",
  index: 9,
  title: "Task 4 — Biyoloji: Sembiyoz türleri",
  description:
    "Task 4 (60 sn): Sadece bir akademik konferans dinle, sonra ana noktaları + örnekleri özetle. Reading YOK.\n\nLISTENING (profesör — biyoloji): \"Today we'll talk about two main types of symbiosis — relationships between two species living closely together.\n\nThe first is MUTUALISM, where both species benefit. A classic example is the relationship between bees and flowering plants. Bees fly from flower to flower collecting nectar — that's their food source. While doing this, pollen sticks to their bodies and gets transferred to other flowers, allowing the plants to reproduce. So the bee gets food, and the plant gets to reproduce — both win.\n\nThe second is COMMENSALISM, where one species benefits and the other is unaffected. Consider remora fish and sharks. Remoras attach themselves to sharks and ride along, eating scraps of food the shark leaves behind. The remora gets a free meal and free transportation, but the shark — it doesn't really care. It's neither helped nor harmed.\"\n\nGÖREV: Konferansın ana konusu + iki tür + birer örnek.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.toefl.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "mutualism",
      tr_translation: "Karşılıklı yarar (mutualizm)",
      example: "Mutualism is when both species benefit from the relationship.",
      example_tr:
        "Mutualizm, iki türün de ilişkiden yarar sağladığı durumdur.",
    },
    {
      id: "ex.toefl.9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "the professor discusses",
      tr_translation: "Profesör ele alıyor / inceliyor",
      example: "The professor discusses two types of symbiosis.",
      example_tr: "Profesör iki sembiyoz türünü ele alıyor.",
    },
    {
      id: "ex.toefl.9.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Profesör arılar ve çiçekler örneğiyle mutualizmi açıklıyor.",
      target:
        "The professor explains mutualism with the example of bees and flowering plants.",
      accepted_variants: [
        "The professor uses bees and flowers as an example to explain mutualism.",
        "Using the example of bees and flowering plants, the professor explains mutualism.",
        "The professor illustrates mutualism by giving the example of bees and flowering plants.",
        "The professor describes mutualism using the example of bees and flowers.",
      ],
      tr_hint:
        "Task 4 raporlama dili: 'The professor explains X with the example of Y'.",
    },
    {
      id: "ex.toefl.9.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "The lecture is primarily ___ two types of symbiosis: mutualism and commensalism.",
      answer: "about",
      distractors: ["of", "for", "with", "from"],
      tr_hint:
        "Task 4 opener: 'The lecture is about ___ ' ana konuyu açar. Topic Development için zorunlu.",
    },
    {
      id: "ex.toefl.9.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "In mutualism both species are benefit, in commensalism one benefit and other not affect.",
      correct_sentence:
        "In mutualism, both species benefit; in commensalism, one species benefits and the other is unaffected.",
      tr_explanation:
        "(1) 'Are benefit' yanlış — 'benefit' verb, 'both species benefit'. (2) 'One benefit' eksik s — 'benefits'. (3) 'Other not affect' yanlış — passive 'the other is unaffected'. (4) Semicolon iki cümleyi temiz bağlar. Akademik dilde band 4 işareti.",
    },
    {
      id: "ex.toefl.9.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Proctor Task 4 promptunu okur. 20 sn hazırlık, 60 sn konuşma. Yapı: 1) ana konu 2) tür 1 + örnek 3) tür 2 + örnek.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 4",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 4. Using points and examples from the lecture, explain the two types of symbiosis the professor describes. You have 20 seconds to prepare and 60 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (lecture|professor) (is about|discusses|describes|talks about|explains))",
            "(symbiosis|two types|relationships?)",
            "(mutualism|both species benefit|both win)",
            "(bee|flower|nectar|pollen|reproduce)",
            "(commensalism|one (species )?benefits?|unaffected|neutral)",
            "(remora|shark|scraps|free (ride|meal))",
            "(for (example|instance)|such as)",
          ],
          hint_tr:
            "Yapı: 1) 'The lecture is about two types of symbiosis: mutualism and commensalism.' 2) 'First, mutualism is when both species benefit. For example, bees and flowers...' 3) 'Second, commensalism is when one benefits and the other is unaffected. For instance, remora fish and sharks...'",
        },
        {
          speaker: "npc",
          message:
            "Excellent structure. For Task 4, examiners want CONTRAST between the two concepts — explicitly say 'unlike mutualism, in commensalism...' to push Topic Development from band 3 to band 4.",
        },
      ],
    },
    {
      id: "ex.toefl.9.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Task 4'te reading var mı?",
          options: ["Evet, kısa", "Hayır — sadece lecture", "İsteğe bağlı", "Bazen var"],
          correct_index: 1,
          tr_explanation:
            "Task 4 = SADECE listening. 20 sn hazırlık + 60 sn konuşma.",
        },
        {
          question: "Mutualism ile commensalism farkı nedir?",
          options: [
            "Mutualism küçük türlerde, commensalism büyüklerde",
            "Mutualism: ikisi de fayda görür; commensalism: biri fayda görür, diğeri etkilenmez",
            "Aynı şeydir",
            "Commensalism mutualism'in zıttı, biri zarar görür",
          ],
          correct_index: 1,
          tr_explanation:
            "Net contrast = Topic Development band 4'ün anahtarı.",
        },
        {
          question: "Hangisi en güçlü Task 4 açılışıdır?",
          options: [
            "Professor talks about animals.",
            "There are many types in biology.",
            "The lecture discusses two types of symbiosis: mutualism and commensalism, each with a clear example.",
            "Bees and sharks are interesting.",
          ],
          correct_index: 2,
          tr_explanation:
            "Spesifik + numerated + ana konu = band 4 opener.",
        },
      ],
    },
    {
      id: "ex.toefl.9.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "The professor describes two distinct types of symbiotic relationships.",
      tr_hint:
        "Task 4 ders özetleme açılışı. 'Describes two distinct types' = iki farklı tür tanımlıyor — kategorize edici opener. 'Symbiotic' = 'sim-bi-OT-ic' üçüncü hece vurgulu. 'Relationships' = 're-LA-tion-ships'.",
    },
    {
      id: "ex.toefl.9.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "The professor explains that mutualism benefits both organisms, whereas commensalism benefits only one without harming the other.",
      voice_hint: "male_us",
      tr_hint:
        "Task 4 contrast model. 'Whereas' = oysa ki — akademik karşılaştırma. 'Benefits only one without harming the other' = sadece birine fayda, diğerine zarar vermeden. Net ve yavaş.",
    },
    {
      id: "ex.toefl.9.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Using points and examples from the lecture, explain the two types of symbiosis the professor discusses.",
      transcription_target:
        "Using points and examples from the lecture, explain the two types of symbiosis the professor discusses.",
      tr_hint:
        "Task 4 prompt klasik yapısı. 'Using points and examples' = noktalar ve örnekler kullanarak. 'The professor discusses' ilgi cümleciği son ek.",
    },
    {
      id: "ex.toefl.9.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "mutualism",
      tr_translation: "karşılıklı yarar (biyoloji)",
      example:
        "Mutualism is a key example of cooperation in nature.",
      example_tr:
        "Karşılıklı yarar, doğadaki iş birliğinin temel örneklerindendir.",
    },
    {
      id: "ex.toefl.9.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Professor talk about two type of relationship and give two examples about bees and shark.",
      correct_sentence:
        "The professor talks about two types of relationships and gives two examples involving bees and sharks.",
      tr_explanation:
        "Dört hata: (1) 'Professor' yerine 'The professor' (definite article). (2) 'Talk/give' yerine 'talks/gives' (3. tekil). (3) 'Two type' yerine 'two types' (plural). (4) 'About bees and shark' yerine 'involving bees and sharks' (collocation + plural). Topic Development cezası.",
    },
  ],
};

// ============================================================
// Lesson 10 — Task 4: Psychology lecture summary
// ============================================================
export const toeflSpeakingLesson_10: BundledLesson = {
  id: "testprep.toefl.task4.psychology.1",
  skill_id: "testprep.toefl.task4",
  index: 10,
  title: "Task 4 — Psikoloji: İki bellek türü",
  description:
    "Task 4 (60 sn): Bilişsel psikoloji konferansı.\n\nLISTENING (profesör): \"Today I want to talk about two distinct types of long-term memory — explicit and implicit.\n\nEXPLICIT memory is conscious. You can deliberately retrieve and describe it. Think of facts and personal events. For example, the capital of France is Paris — you consciously recall that information and can state it. Or remembering your first day at university — you can verbally describe what happened.\n\nIMPLICIT memory, on the other hand, is unconscious. You can't easily put it into words, but it shapes your behavior. The classic example is riding a bicycle. Once you've learned, you don't think about HOW to balance — you just do it. The skill is stored, but you can't really explain it step by step. Another example: typing on a keyboard. Skilled typists rarely look at their hands, and if asked to describe finger positions, most struggle.\"\n\nGÖREV: İki bellek türünü + birer örneği özetle.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.toefl.10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "explicit memory",
      tr_translation: "Açık bellek (bilinçli)",
      example: "Explicit memory includes facts and personal events.",
      example_tr: "Açık bellek olgular ve kişisel olayları içerir.",
    },
    {
      id: "ex.toefl.10.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "in contrast",
      tr_translation: "Buna karşılık",
      example: "Explicit memory is conscious; in contrast, implicit memory is unconscious.",
      example_tr:
        "Açık bellek bilinçli; buna karşılık örtük bellek bilinçsizdir.",
    },
    {
      id: "ex.toefl.10.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Profesör örtük belleği bisiklet sürme örneğiyle açıklıyor.",
      target:
        "The professor explains implicit memory with the example of riding a bicycle.",
      accepted_variants: [
        "The professor uses riding a bicycle as an example to explain implicit memory.",
        "The professor illustrates implicit memory by giving the example of riding a bicycle.",
        "Using the example of riding a bicycle, the professor explains implicit memory.",
        "The professor describes implicit memory using the example of riding a bicycle.",
      ],
      tr_hint:
        "Task 4 reporting: 'The professor explains X with the example of Y'.",
    },
    {
      id: "ex.toefl.10.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Explicit memory is conscious; ___ , implicit memory is unconscious.",
      answer: "in contrast",
      distractors: [
        "for example",
        "in addition",
        "in conclusion",
        "by the way",
      ],
      tr_hint:
        "Task 4 contrast signpost: 'in contrast' = iki kavramı net karşılaştırır. Band 4 yapı.",
    },
    {
      id: "ex.toefl.10.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Implicit memory is when you know something but cannot describe, like ride bike.",
      correct_sentence:
        "Implicit memory is when you know something but cannot describe it, like riding a bike.",
      tr_explanation:
        "(1) 'Cannot describe' eksik nesne — 'cannot describe it'. (2) 'Like ride bike' yanlış yapı — 'like + gerund', 'like riding a bike'. (3) Artikel — 'a bike'. Akademik dilde küçük detaylar Language Use'i band 3 → band 4'e çıkarır.",
    },
    {
      id: "ex.toefl.10.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Proctor Task 4 promptunu okur. 20 sn hazırlık, 60 sn konuşma. Yapı: 1) ana konu 2) açık bellek + örnek 3) örtük bellek + örnek + contrast.",
      npc_role: "TOEFL Proctor",
      setting: "TOEFL iBT Speaking Section — Task 4",
      turns: [
        {
          speaker: "npc",
          message:
            "Question 4. Using points and examples from the lecture, explain the two types of long-term memory described by the professor. You have 20 seconds to prepare and 60 seconds to speak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (lecture|professor) (is about|discusses|describes|talks about|explains))",
            "(two types|long.term )?memory",
            "(explicit|conscious|deliberate|facts)",
            "(paris|france|capital|university|first day)",
            "(implicit|unconscious|cannot (describe|explain)|automatic)",
            "(bicycle|bike|riding|typing|keyboard)",
            "(in contrast|on the other hand|whereas|while)",
            "(for (example|instance)|such as)",
          ],
          hint_tr:
            "Yapı: 1) 'The lecture is about two types of long-term memory: explicit and implicit.' 2) 'Explicit memory is conscious — for example, knowing Paris is the capital of France.' 3) 'In contrast, implicit memory is unconscious — for instance, riding a bike: you can do it but cannot easily explain how.'",
        },
        {
          speaker: "npc",
          message:
            "Strong contrast structure. Final tip — Delivery is graded on PACE. If you finish at 50 seconds, slow down on examples; if you run past 60, cut the second example to one sentence. Time control is the most underrated skill.",
        },
      ],
    },
    {
      id: "ex.toefl.10.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Explicit memory ve implicit memory arasındaki temel fark?",
          options: [
            "İkisi de aynı, sadece isim farklı",
            "Explicit bilinçli (söylenebilir); implicit bilinçsiz (söylenmesi zor, davranışa yansır)",
            "Explicit kısa süreli, implicit uzun süreli",
            "Explicit beyinde, implicit kaslarda",
          ],
          correct_index: 1,
          tr_explanation:
            "Net contrast Topic Development'i band 4 yapar.",
        },
        {
          question: "Bisiklet sürme hangi belleğin örneğidir?",
          options: ["Explicit", "Implicit", "Kısa süreli", "Çalışma belleği"],
          correct_index: 1,
          tr_explanation:
            "Bisiklet: bilirsin ama anlatamazsın → implicit memory.",
        },
        {
          question: "Task 4 konuşma süresi + hazırlık?",
          options: ["15 sn + 45 sn", "20 sn + 60 sn", "30 sn + 60 sn", "30 sn + 90 sn"],
          correct_index: 1,
          tr_explanation:
            "Task 4 = 20 sn hazırlık + 60 sn konuşma (reading yok).",
        },
      ],
    },
    {
      id: "ex.toefl.10.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "The professor distinguishes between short-term and long-term memory.",
      tr_hint:
        "Task 4 psikoloji opener. 'Distinguishes between' = arasında ayrım yapıyor. 'Short-term and long-term' kısa duraklarla. 'Memory' kapanış net.",
    },
    {
      id: "ex.toefl.10.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Short-term memory holds information for a brief period, whereas long-term memory stores it more permanently through repeated rehearsal.",
      voice_hint: "female_us",
      tr_hint:
        "Task 4 band 4 contrast model. 'Holds X for a brief period' kalıbı. 'Repeated rehearsal' = tekrarlı pratik — akademik. 'Whereas' karşılaştırma sinyali.",
    },
    {
      id: "ex.toefl.10.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Using the examples from the lecture, explain the two types of memory the professor describes.",
      transcription_target:
        "Using the examples from the lecture, explain the two types of memory the professor describes.",
      tr_hint:
        "Task 4 prompt yapısı. 'The two types of memory the professor describes' iki kademeli ilgi cümleciği.",
    },
    {
      id: "ex.toefl.10.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to distinguish between",
      tr_translation: "ayrım yapmak, ayırt etmek",
      example:
        "It is essential to distinguish between correlation and causation.",
      example_tr:
        "Korelasyon ile nedensellik arasında ayrım yapmak şarttır.",
    },
    {
      id: "ex.toefl.10.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Professor explain that memory have two type and each one work different.",
      correct_sentence:
        "The professor explains that memory has two types and each one works differently.",
      tr_explanation:
        "Dört hata: (1) 'Professor' yerine 'The professor'. (2) 'Explain/have/work' yerine 'explains/has/works' (3. tekil -s). (3) 'Two type' yerine 'two types' (plural). (4) 'Work different' yerine 'works differently' (adverb). Language Use'da TOEFL'ın net cezalandırdığı hata yığını.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const testToeflSpeakingLessons: BundledLesson[] = [
  toeflSpeakingLesson_1,
  toeflSpeakingLesson_2,
  toeflSpeakingLesson_3,
  toeflSpeakingLesson_4,
  toeflSpeakingLesson_5,
  toeflSpeakingLesson_6,
  toeflSpeakingLesson_7,
  toeflSpeakingLesson_8,
  toeflSpeakingLesson_9,
  toeflSpeakingLesson_10,
];

export function getToeflSpeakingLesson(id: string): BundledLesson | undefined {
  return testToeflSpeakingLessons.find((l) => l.id === id);
}
