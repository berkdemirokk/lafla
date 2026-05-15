// Academic B2 lessons — English for higher education contexts.
// Target: Turkish students / researchers applying abroad or studying in
// foreign universities. Tone: formal, considered, intellectually substantive.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson B2.1 — Üniversite Mülakat (PhD / Master's Admission)
// ============================================================
export const academicB2Lesson_1: BundledLesson = {
  id: "academic.b2.admissions-interview.1",
  skill_id: "academic.b2",
  index: 1,
  title: "Admissions Interview (PhD / MSc)",
  description:
    "PhD / Master's başvuru mülakatı: 'What are your research interests?', motivasyon, programa uyum.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ab2.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "research interests",
      tr_translation: "Araştırma ilgi alanları",
      example:
        "My research interests centre on causal inference in observational health data.",
      example_tr:
        "Araştırma ilgi alanlarım, gözlemsel sağlık verisinde nedensel çıkarım üzerine yoğunlaşıyor.",
    },
    {
      id: "ex.ab2.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "a good fit",
      tr_translation: "Uygun bir eşleşme / iyi bir uyum",
      example:
        "I see your group as a good fit because Prof. Hale's work on transfer learning overlaps with my thesis direction.",
      example_tr:
        "Grubunuzu uygun bir eşleşme olarak görüyorum çünkü Prof. Hale'in transfer öğrenmesi üzerine çalışması tez yönümle örtüşüyor.",
    },
    {
      id: "ex.ab2.1.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Araştırma ilgi alanlarım, gözlemsel verilerde nedensel çıkarım üzerine yoğunlaşıyor; özellikle ölçülmemiş karıştırıcılarla nasıl başa çıkılacağı sorusu beni en çok ilgilendiriyor.",
      target:
        "My research interests centre on causal inference in observational data, and I'm particularly drawn to the question of how to handle unmeasured confounders.",
      accepted_variants: [
        "My research focuses on causal inference in observational data, and I'm especially interested in how to address unmeasured confounding.",
        "I work on causal inference using observational data, with a particular focus on the problem of unmeasured confounders.",
        "Broadly, my interests sit in causal inference on observational data; the question that motivates me most is how to deal with unmeasured confounding.",
        "My research centers on causal inference in observational data, and I'm most interested in how to handle unmeasured confounders.",
      ],
      tr_hint:
        "'Centre on / focus on' + 'particularly drawn to' — akademik kalıp. 'Unmeasured confounder' = ölçülmemiş karıştırıcı.",
    },
    {
      id: "ex.ab2.1.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I see your group as a good ___ because our methodological approaches overlap substantially.",
      answer: "fit",
      distractors: ["match", "place", "team", "choice"],
      tr_hint:
        "'A good fit' = uygun bir eşleşme — akademik başvuruda standart kalıp.",
    },
    {
      id: "ex.ab2.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am interesting about your research and I want to make PhD in your laboratory.",
      correct_sentence:
        "I'm very interested in your research, and I'd like to pursue a PhD in your lab.",
      tr_explanation:
        "'Interesting' = ilgi çekici (sıfat, başkası için); 'interested in' = ilgili (özne için). 'Make a PhD' Türkçeden direkt çeviri — doğrusu 'pursue / do a PhD'.",
    },
    {
      id: "ex.ab2.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PhD admissions paneli. Üç akademisyen seninle online görüşüyor. İlgi alanın, motivasyonun ve programa uyumun soruluyor.",
      npc_role: "Admissions panel chair",
      setting: "PhD admissions interview (online)",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for joining us. Let's start broad — could you tell us a little about your research interests and what brought you to apply to this programme?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?research (interests |focus(es)? )?(centre|center|focus|sit)",
            "(particularly|especially) (interested|drawn) (in|to)",
            "(causal|machine learning|policy|ethics|systems|nlp|optimi[sz]ation|biology|chemistry|economics)",
            "what (brought|drew|attracted) me",
            "(reading|engaging with) (your|prof\\.?|the group)",
            "thank you for (having me|the opportunity)",
          ],
          hint_tr:
            "Geniş başla: 'My research interests centre on X; I'm particularly drawn to Y.' Sonra programa neden başvurduğunu bağla.",
        },
        {
          speaker: "npc",
          message:
            "Interesting. Can you walk us through a specific project where you actually engaged with that question?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in my (final|senior) year|during my master's|for my undergraduate thesis|in a recent project)",
            "(i investigated|i examined|we looked at|i analy[sz]ed|we studied)",
            "(the (main )?finding was|what we found was|we showed that|the contribution)",
            "(limitation|caveat|one thing I'd flag|in hindsight)",
            "(I learned|that taught me|that experience showed me)",
          ],
          hint_tr:
            "Somut bir proje seç: bağlam + ne yaptın + bulgu + sınırlılık. Akademik dürüstlük bekleniyor — eksikleri kabul et.",
        },
        {
          speaker: "npc",
          message:
            "Thanks. And why this group specifically? You've applied to several places — why ours?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(prof\\.?|dr\\.?|professor) [a-z]+",
            "(your|the group's) (recent|2024|2025) (paper|work|project)",
            "(overlap|complement|build on|extend)",
            "(a good fit|natural fit|the right fit|aligns with)",
            "(the combination of|what makes your group distinctive|what stands out)",
          ],
          hint_tr:
            "Kişiselleştir: belirli bir hoca, belirli bir paper, belirli bir yöntem. 'A good fit because...' kalıbı.",
        },
        {
          speaker: "npc",
          message:
            "One last question — where do you see yourself, intellectually, in five years?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in five years|by the end of (the )?PhD|long(-| )term)",
            "(I('d| would) like to|I hope to|my ambition is|my goal is)",
            "(contribute to|develop expertise in|establish myself|publish)",
            "(academia|industry research|policy|teaching|leading a group)",
            "(open to|still exploring|honest answer|the truthful answer)",
          ],
          hint_tr:
            "Beş yıllık vizyon: akademisyen mi, endüstri araştırmacısı mı? Net bir niyet + esneklik göster.",
        },
        {
          speaker: "npc",
          message:
            "Thank you. That was a substantive conversation — we'll be in touch within two weeks.",
        },
      ],
    },
    {
      id: "ex.ab2.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'I am interesting about your research' nesi yanlış?",
          options: [
            "'Your research' yerine 'the research' olmalı",
            "'Interesting' yerine 'interested in' olmalı",
            "'I am' yerine 'I will be' olmalı",
            "Hiçbir yanlış yok",
          ],
          correct_index: 1,
          tr_explanation:
            "'Interesting' = başkasının seni hissettirdiği şey. 'Interested in' = sen ilgilisin. 'I'm interested IN your research.'",
        },
        {
          question: "Akademik mülakatta 'a good fit' ne anlama gelir?",
          options: [
            "Sportif olarak fit olmak",
            "Programa uygun bir eşleşme olmak",
            "İyi bir takım elbise giymek",
            "Sınavdan iyi not almak",
          ],
          correct_index: 1,
          tr_explanation:
            "'A good fit' = adayın profilinin program/laboratuvarla örtüşmesi — admissions dilinde standart.",
        },
        {
          question: "'Pursue a PhD' yerine yanlış olan?",
          options: [
            "Do a PhD",
            "Start a PhD",
            "Make a PhD",
            "Undertake a PhD",
          ],
          correct_index: 2,
          tr_explanation:
            "'Make a PhD' Türkçeden çeviri hatası. Doğru fiiller: 'pursue / do / start / undertake' a PhD.",
        },
      ],
    },
    {
      id: "ex.ab2.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "My research interests centre on causal inference.",
      ipa: "maɪ rɪˈsɜːtʃ ˈɪntrəsts ˈsɛntər ɒn ˈkɔːzəl ˈɪnfərəns",
      tr_hint:
        "'Research' = 'ri-SÖRÇ', vurgu ikinci hecede. 'Centre on' = 'sentər-on' bağlı. 'Causal' = 'kozıl' kısa.",
    },
    {
      id: "ex.ab2.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I'd like to pursue a PhD because the methodology your group develops aligns closely with my thesis direction.",
      voice_hint: "female_uk",
      tr_hint:
        "Akademik ritim: 'I'd like to pursue' yumuşak başlangıç, 'aligns closely with' ortada vurgu. Native ile birlikte söyle.",
    },
    {
      id: "ex.ab2.1.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Could you say a little more about your methodological approach and how it would replicate to other settings?",
      transcription_target:
        "Could you say a little more about your methodological approach and how it would replicate to other settings?",
      tr_hint:
        "Akademik mülakat sorusu. 'Methodological' = 'metodolojikıl'. 'Replicate' = tekrar üretmek, jenerellenebilirlik.",
    },
    {
      id: "ex.ab2.1.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "methodology",
      tr_translation: "Metodoloji / yöntembilim",
      example:
        "The methodology section needs to address how we handle missing data and what robustness checks we plan.",
      example_tr:
        "Metodoloji bölümünün eksik verilerle nasıl başa çıkacağımızı ve hangi sağlamlık kontrollerini planladığımızı ele alması gerek.",
    },
    {
      id: "ex.ab2.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I want to do researches about causal inference and my supervisor will be very interesting.",
      correct_sentence:
        "I'd like to pursue research on causal inference, and I think my supervisor will be very interested.",
      tr_explanation:
        "'Researches' yanlış — 'research' uncountable, çoğul almaz. 'Make/do researches' Türkçeden direkt çeviri. 'Interesting' = ilgi çekici (nesne); 'interested' = ilgili (özne). Akademik bağlamda 'pursue research on' standart.",
    },
  ],
};

// ============================================================
// Lesson B2.2 — İlk Supervisor Görüşmesi
// ============================================================
export const academicB2Lesson_2: BundledLesson = {
  id: "academic.b2.first-supervisor-meeting.1",
  skill_id: "academic.b2",
  index: 2,
  title: "First Supervisor Meeting",
  description:
    "Tezini denetleyecek hocanla ilk görüşme: araştırma yönü, beklentiler, deliverable'lar.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ab2.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "scope",
      tr_translation: "Kapsam (problemin sınırları)",
      example:
        "I'd like to narrow the scope before we settle on a final research question.",
      example_tr:
        "Nihai bir araştırma sorusuna karar vermeden önce kapsamı daraltmak istiyorum.",
    },
    {
      id: "ex.ab2.2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "deliverable",
      tr_translation: "Teslim edilecek çıktı (rapor, kod, taslak)",
      example:
        "What deliverables would you expect from me by the end of the first term?",
      example_tr:
        "İlk dönem sonunda benden hangi teslim edilebilir çıktıları beklersiniz?",
    },
    {
      id: "ex.ab2.2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İlk dönem sonunda benden hangi çıktıları bekliyorsunuz ve hangi aralıkta görüşmemizin sizin için uygun olduğunu sorabilir miyim?",
      target:
        "What deliverables would you expect from me by the end of the first term, and could I ask what meeting cadence works for you?",
      accepted_variants: [
        "What outputs do you expect by the end of the first term, and how often would you like us to meet?",
        "Could you tell me what you'd expect me to deliver by the end of term one, and what meeting frequency suits you?",
        "What would you expect as deliverables for the first term, and what cadence of meetings would you prefer?",
        "By the end of the first term, what deliverables do you have in mind, and how regularly would you like us to meet?",
      ],
      tr_hint:
        "'Deliverables' + 'meeting cadence' iki ayrı akademik kalıp. 'Works for you / suits you' = sana uyar.",
    },
    {
      id: "ex.ab2.2.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I'd like to narrow the ___ before committing to a specific question.",
      answer: "scope",
      distractors: ["topic", "size", "field", "area"],
      tr_hint:
        "'Narrow the scope' = kapsamı daraltmak — araştırmanın sınırlarını belirleme aşaması.",
    },
    {
      id: "ex.ab2.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I will make researches in this domain and I will give the result for you next month.",
      correct_sentence:
        "I'll carry out research in this area and share my findings with you next month.",
      tr_explanation:
        "'Researches' uncountable hata — 'research' sayılamaz, çoğul olmaz. 'Make research' Türkçeden çeviri — doğrusu 'do / conduct / carry out research'. 'Give the result FOR you' yerine 'share with you'.",
    },
    {
      id: "ex.ab2.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PhD'ye yeni başladın. Süpervizörünle ilk birebir görüşme — beklentiler ve çalışma stili netleşecek.",
      npc_role: "Supervisor (Prof. Hale)",
      setting: "First one-on-one meeting, supervisor's office",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome! Take a seat. Before we get into specifics — how are you settling in, and what's been on your mind in the first few weeks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,? professor)?",
            "(settling in (well|fine|gradually)|the move has been|still adjusting)",
            "(reading|going through|working through) (the|your) (recent|key) (papers|literature)",
            "(question|thinking about|reflecting on) (the direction|the scope|where to start)",
          ],
          hint_tr:
            "Kibarca selamla, dürüstçe nerede olduğunu söyle: 'Settling in gradually — I've been reading the group's recent papers and thinking about scope.'",
        },
        {
          speaker: "npc",
          message:
            "Good. So — research direction. Have you started narrowing things down, or are you still in exploration mode?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(still|largely|mostly) (in )?exploration",
            "(narrowing|gravitating toward|drawn to)",
            "(two|three) directions (i('m| am)|that)",
            "(I('d| would) value your view|would appreciate your input|would like your perspective)",
            "(literature gap|open question|under-?explored)",
          ],
          hint_tr:
            "Dürüst ol: 'Still largely in exploration, but gravitating toward two directions. I'd value your view on which has a clearer literature gap.'",
        },
        {
          speaker: "npc",
          message:
            "Helpful. Let's talk expectations. What's your sense of how we should work together — meeting frequency, deliverables, that kind of thing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(weekly|biweekly|every (two|three) weeks|fortnightly)",
            "(short (written )?update|one-?pager|brief note before|agenda in advance)",
            "(what deliverables (would|do) you expect|what do you typically expect)",
            "(end of (term|semester|the year))",
            "(open to|happy to adapt|whatever works for you)",
          ],
          hint_tr:
            "Profesyonel ol: 'I'd like weekly meetings with a short written update beforehand. May I ask what deliverables you typically expect by end of term?'",
        },
        {
          speaker: "npc",
          message:
            "I prefer biweekly, with written notes from you the day before. What about feedback — direct, or do you prefer it softened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(direct|honest|candid|frank|blunt)",
            "(I('d| would) rather|I prefer|works better for me)",
            "(no need to soften|don't (need to|have to) soften|straight feedback)",
            "(specific|concrete|actionable)",
            "(I appreciate it when|that helps me)",
          ],
          hint_tr:
            "Doğrudan iste: 'Direct, please. Concrete and actionable feedback works much better for me than softened versions.'",
        },
        {
          speaker: "npc",
          message:
            "Good — we'll get on well, then. Send me a one-pager on the two directions you mentioned by Friday, and we'll meet again in two weeks.",
        },
      ],
    },
    {
      id: "ex.ab2.2.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Süpervizör 'What's your sense of how we should work together?' diye sordu. En profesyonel cevap?",
          options: [
            "Whatever you want is fine",
            "I'd like weekly meetings with a short written update beforehand",
            "I'll meet you when I have something",
            "It doesn't matter to me",
          ],
          correct_index: 1,
          tr_explanation:
            "Net ve profesyonel: aralık + format öner. Pasif olmak güvensizlik sinyali.",
        },
        {
          question: "'Researches' yazmak neden yanlış?",
          options: [
            "'Research' sayılamaz isim, çoğul yapılmaz",
            "'Researches' İngilizcede yok",
            "Akademik dilde kibar değil",
            "İki sebep var: kibar değil + zaman uyumsuz",
          ],
          correct_index: 0,
          tr_explanation:
            "'Research' uncountable noun — 'researches' yok. Çoğul demek istiyorsan: 'studies / projects / lines of inquiry'.",
        },
        {
          question: "'Deliverable' akademik bağlamda en doğru tanım?",
          options: [
            "Posta ile gelen paket",
            "Teslim edilmesi beklenen somut çıktı (rapor, kod, taslak)",
            "Ders programı",
            "Mezuniyet belgesi",
          ],
          correct_index: 1,
          tr_explanation:
            "Akademide 'deliverable' = supervisor'a / projeye teslim edilecek somut çıktı.",
        },
      ],
    },
    {
      id: "ex.ab2.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Could we narrow the scope before our next meeting?",
      ipa: "kʊd wi ˈnæroʊ ðə skoʊp bɪˈfɔːr aʊər nɛkst ˈmiːtɪŋ",
      tr_hint:
        "'Narrow the scope' = kapsamı daralt. 'Narrow' = 'NEH-roh', kısa. 'Scope' uzun 'oʊ'. Önerici, yumuşak ton.",
    },
    {
      id: "ex.ab2.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I'd like to flag a methodological limitation before we commit to that direction.",
      voice_hint: "male_uk",
      tr_hint:
        "Supervisor'a uyarı tonu — 'I'd like to flag' = nazikçe işaret etmek. 'Limitation' = sınır, kısıt. Ölçülü, profesyonel ritim.",
    },
    {
      id: "ex.ab2.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Let's narrow the scope and define a concrete deliverable for our next supervision meeting.",
      transcription_target:
        "Let's narrow the scope and define a concrete deliverable for our next supervision meeting.",
      tr_hint:
        "Supervisor cümlesi. 'Deliverable' = somut teslim. 'Supervision meeting' = danışman görüşmesi.",
    },
    {
      id: "ex.ab2.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "scope",
      tr_translation: "Kapsam",
      example:
        "I think the scope is too ambitious for one chapter; could we narrow it to two case studies?",
      example_tr:
        "Sanırım kapsam bir bölüm için fazla iddialı; iki vaka çalışmasına daraltabilir miyiz?",
    },
    {
      id: "ex.ab2.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I have a question about the limitation of my thesis, can you give me your comments?",
      correct_sentence:
        "I have a question about a limitation in my thesis — could I get your thoughts on it?",
      tr_explanation:
        "'The limitation' yanlış determiner; ilk kez bahsediliyorsa 'a limitation' doğru. 'Give me your comments' Türkçeden çeviri — 'could I get your thoughts' daha doğal akademik kalıp.",
    },
  ],
};

// ============================================================
// Lesson B2.3 — Conference Q&A
// ============================================================
export const academicB2Lesson_3: BundledLesson = {
  id: "academic.b2.conference-qa.1",
  skill_id: "academic.b2",
  index: 3,
  title: "Conference Q&A",
  description:
    "Konferansta sunumdan sonra soru-cevap: zorlu soruyu yumuşatmak, savunmak, ertelemek.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ab2.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "defer the question",
      tr_translation: "Soruyu sonraya bırakmak",
      example:
        "May I defer that question to the discussion afterwards? It deserves a longer answer than I can give in thirty seconds.",
      example_tr:
        "Bu soruyu sunum sonrası sohbete ertelememiz mümkün mü? Otuz saniyede verebileceğimden daha uzun bir cevabı hak ediyor.",
    },
    {
      id: "ex.ab2.3.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu sorunun cevabını şu an tam veremem; size sunumdan sonra dönmemi tercih eder misiniz?",
      target:
        "I can't give that question the answer it deserves right now — would you mind if I came back to you after the session?",
      accepted_variants: [
        "I don't want to do that question a disservice off the top of my head — could I follow up with you after the session?",
        "That's a good question and I don't want to answer it poorly on the spot — may I get back to you afterwards?",
        "I'd rather not give you a half-formed answer now — would it be all right if I followed up after the talk?",
        "I can't do that justice right now — could we pick it up after the session?",
      ],
      tr_hint:
        "Akademik ertelemenin kibar formları: 'come back to you / follow up / do justice to'. Direkt 'I don't know' demekten daha güçlü.",
    },
    {
      id: "ex.ab2.3.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "That's a fair point — let me ___ on the assumption you're questioning.",
      answer: "push back",
      distractors: ["agree", "give up", "step back", "fall back"],
      tr_hint:
        "'Push back on X' = X'e itiraz etmek, savunmacı tavır almak. Akademik Q&A standardı.",
    },
    {
      id: "ex.ab2.3.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Sorry, I don't know this. Maybe I'm not so much expert about it.",
      correct_sentence:
        "That's outside the scope of what I covered today — happy to follow up by email if it's useful.",
      tr_explanation:
        "'I don't know / I'm not so much expert' = panik sinyali, güvensizlik. Akademik dilde 'outside the scope' + 'happy to follow up' çok daha güçlü ve dürüst.",
    },
    {
      id: "ex.ab2.3.5",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "outside the scope",
      tr_translation: "Bu çalışmanın kapsamı dışında",
      example:
        "Generalising to clinical settings is outside the scope of this paper, but it's a natural next step.",
      example_tr:
        "Klinik ortamlara genelleştirme bu makalenin kapsamı dışında, ama doğal bir sonraki adım.",
    },
    {
      id: "ex.ab2.3.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Konferans sunumun bitti. Üç farklı soru geliyor — eleştirel, kapsam dışı, ve bir ego savaşı. Hepsini farklı yöntemle karşıla.",
      npc_role: "Discussant (audience members)",
      setting: "Q&A after a conference talk",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for the talk. My concern is with your identification strategy — you assume the instrument is exogenous, but Smith and Liu (2023) show that assumption fails in this exact setting. How do you square that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|that's a (fair|good|important) (point|question|challenge))",
            "(I('m| am) familiar with|I know|I've engaged with) (smith|liu|the|that) (and|paper|work)",
            "(in my (case|setting|sample)|the (key|relevant) difference is|where my work departs)",
            "(I('d| would) (push back|disagree|differ))",
            "(robustness check|placebo|sensitivity analysis|alternative specification)",
            "(but I take the point|you('re| are) right that|that('s| is) a genuine limitation)",
          ],
          hint_tr:
            "Önce kabul et, sonra savun: 'Fair point. I've engaged with Smith & Liu — the key difference in my setting is X. But I take the point that this is a real concern, and I address it with a sensitivity analysis in Section 4.'",
        },
        {
          speaker: "npc",
          message:
            "Different question — does your method generalise to clinical data, where outcomes are right-censored and we have informative dropout?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|frankly|to be candid)",
            "(outside the scope of (this|today's|the) (paper|talk|work))",
            "(an excellent|a natural|the obvious) next (step|direction|extension)",
            "(we (haven't|have not) (tested|extended|validated))",
            "(happy to (follow up|discuss) (by email|afterwards|offline))",
          ],
          hint_tr:
            "Kapsam dışı diye dürüstçe söyle: 'Honestly, that's outside the scope of this paper. It's a natural next step, but we haven't validated the method on right-censored data. Happy to follow up by email.'",
        },
        {
          speaker: "npc",
          message:
            "I just want to say — I've worked in this area for twenty years, and what you're describing is essentially what I published in 2008. Are you aware of that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for (raising|flagging|pointing) that)",
            "(I cite your 2008 paper|I('m| am) (familiar with|aware of)|I('ve| have) read)",
            "(where my work (builds on|extends|differs|departs from))",
            "(the contribution (here|of this paper) is|what('s| is) new (here|is))",
            "(but I('d| would) be happy to (discuss|chat|continue) (offline|afterwards))",
          ],
          hint_tr:
            "Ego savaşına girme — kabul + farkı net söyle: 'I cite your 2008 paper. Where my work extends it is by [X]. The novel contribution here is [Y]. Happy to discuss offline.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you — we'll have to wrap there for the next speaker. Great talk.",
        },
      ],
    },
    {
      id: "ex.ab2.3.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "'I don't know' demeden cevap veremediğin soruyu nasıl bitirirsin?",
          options: [
            "Sorry, I'm not expert",
            "I'll Google it later",
            "That's outside the scope of this paper — happy to follow up by email",
            "Pass, next question",
          ],
          correct_index: 2,
          tr_explanation:
            "'Outside the scope' + 'happy to follow up' = dürüst + profesyonel + kapı açık.",
        },
        {
          question: "Bir profesör 'kendi 2008 makalemde bu var' dedi. En akıllı taktik?",
          options: [
            "Ona katılmıyorum, hiç okumadım",
            "Eserini kabul et, farkını net söyle, offline tartışmaya davet et",
            "Sessiz kal",
            "Özür dile",
          ],
          correct_index: 1,
          tr_explanation:
            "Akademik ego savaşı: 'I cite your work — where this extends it is [X]. Happy to discuss offline.' Hem saygı, hem savunma.",
        },
        {
          question: "'Push back on' fiilinin akademik anlamı?",
          options: [
            "Bir kişiyi fiziksel olarak itmek",
            "Bir argümana itiraz etmek, eleştiri yapmak",
            "Yardım istemek",
            "Konudan kaçmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Push back on X' = X'e karşı çıkmak, fikir bazında itiraz — akademik Q&A'da standart.",
        },
      ],
    },
    {
      id: "ex.ab2.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd push back on that framing for two reasons.",
      ipa: "aɪd pʊʃ bæk ɒn ðæt ˈfreɪmɪŋ fər tuː ˈriːzənz",
      tr_hint:
        "Q&A klasik karşı çıkış kalıbı. 'Push back' = 'puşh-bek' bağlı. 'Framing' = 'FREY-ming'. Kararlı ama saygılı ton.",
    },
    {
      id: "ex.ab2.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "That's a fair point, but I'd gently push back on the assumption that the effect is homogeneous across subgroups.",
      voice_hint: "female_us",
      tr_hint:
        "Akademik karşı çıkışta tipik yumuşatma. 'That's a fair point' kabul, 'but I'd gently push back' itiraz. Ritmi ve tonlamayı yakala.",
    },
    {
      id: "ex.ab2.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Have you considered the possibility that your effect is driven by unobserved confounders rather than your treatment?",
      transcription_target:
        "Have you considered the possibility that your effect is driven by unobserved confounders rather than your treatment?",
      tr_hint:
        "Q&A'da klasik metodolojik itiraz. 'Confounders' = karıştırıcılar. 'Driven by' = sebebiyet veren.",
    },
    {
      id: "ex.ab2.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "peer-review",
      tr_translation: "Hakem değerlendirmesi",
      example:
        "The paper is currently under peer-review at a top-tier journal, so I can't share the latest revisions just yet.",
      example_tr:
        "Makale şu an üst düzey bir dergide hakem değerlendirmesinde, bu yüzden son revizyonları henüz paylaşamam.",
    },
    {
      id: "ex.ab2.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I don't agree with you, your methodology is wrong because you didn't think about confounders.",
      correct_sentence:
        "I'd push back on the framing here — I'm not sure the methodology fully accounts for potential confounders.",
      tr_explanation:
        "'I don't agree, you are wrong' akademide kaba ve şahsi. 'Push back on the framing' fikre itiraz; 'fully accounts for' yumuşatıcı. Akademik kültür: kişiye değil, argümana karşı çık.",
    },
  ],
};

// ============================================================
// Lesson B2.4 — Paper Discussion
// ============================================================
export const academicB2Lesson_4: BundledLesson = {
  id: "academic.b2.paper-discussion.1",
  skill_id: "academic.b2",
  index: 4,
  title: "Paper Discussion",
  description:
    "Methodology'ni açıklamak, ilgili çalışmalarla karşılaştırmak — okuma grubu veya seminer dili.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ab2.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "methodology",
      tr_translation: "Yöntem (metodoloji)",
      example:
        "Our methodology combines a difference-in-differences design with a placebo test on pre-treatment outcomes.",
      example_tr:
        "Yöntemimiz, fark-farkı tasarımını işlem öncesi sonuçlar üzerinde plasebo testiyle birleştiriyor.",
    },
    {
      id: "ex.ab2.4.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "literature gap",
      tr_translation: "Literatür boşluğu",
      example:
        "The literature gap we identify is the lack of long-horizon evidence in low-income settings.",
      example_tr:
        "Belirlediğimiz literatür boşluğu, düşük gelirli ortamlarda uzun vadeli kanıtın eksikliği.",
    },
    {
      id: "ex.ab2.4.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bizim yaklaşımımız Chen ve diğerleri'nin (2022) yöntemine benziyor; temel fark, biz bireysel düzeyde veri kullanmamız, oysa onlar toplu düzeyde çalışıyor.",
      target:
        "Our approach is broadly similar to Chen et al. (2022); the key difference is that we use individual-level data, whereas they work at the aggregate level.",
      accepted_variants: [
        "Our method follows Chen et al. (2022) in spirit; what sets us apart is that we work with individual-level data rather than aggregated data.",
        "Our approach builds on Chen et al. (2022), but a crucial difference is our use of individual-level data instead of aggregated data.",
        "Methodologically, we're close to Chen and colleagues (2022); however, we use micro-level data while they use aggregated data.",
        "Our approach parallels Chen et al. (2022); the main departure is that we use individual-level data, whereas they rely on aggregate-level data.",
      ],
      tr_hint:
        "İlgili çalışmaya bağlan + temel farkı net söyle. 'Builds on / follows / parallels' + 'departure / key difference'.",
    },
    {
      id: "ex.ab2.4.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "The main ___ of our paper is a new estimator that remains consistent under weaker assumptions.",
      answer: "contribution",
      distractors: ["topic", "subject", "title", "abstract"],
      tr_hint:
        "'Contribution' = bilim camiasına katkı — paper'ın 'what's new' bölümü.",
    },
    {
      id: "ex.ab2.4.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "In our methodology we are using same approach with Chen 2022 but with different data which is more better.",
      correct_sentence:
        "Our methodology follows Chen et al. (2022), but we use a finer-grained dataset, which we argue gives more credible identification.",
      tr_explanation:
        "'Same approach WITH Chen' yanlış preposition — 'similar to / follows Chen et al.'. 'More better' double comparative — sadece 'better' veya 'more credible'. 'Chen 2022' yerine 'Chen et al. (2022)' akademik standart.",
    },
    {
      id: "ex.ab2.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Reading group'ta paper'ını sunuyorsun. Eleştirel ama yapıcı sorular geliyor.",
      npc_role: "Senior PhD student (Maya)",
      setting: "Department reading group",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for walking us through this. Before we get into the weeds — what's the one-sentence contribution? Pretend you're at the elevator and someone asks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the main|the headline|the one-sentence) contribution",
            "(we (show|demonstrate|provide|develop|establish))",
            "(a (new|novel) (estimator|method|framework|dataset))",
            "(under (weaker|fewer|more general) assumptions)",
            "(in a setting where|in cases (where|when))",
          ],
          hint_tr:
            "Tek cümle: 'We provide [a new X] that [delivers Y] under [weaker assumption Z].' Mekanik formül.",
        },
        {
          speaker: "npc",
          message:
            "Good. How does this sit relative to Chen et al. (2022)? They claim something similar.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(chen|they|that paper) (et al)?",
            "(our (approach|method) (follows|builds on|parallels|extends))",
            "(the (key|main|crucial) (difference|departure|distinction))",
            "(we use|we work with|we rely on)",
            "(individual-?level|micro|finer-?grained|panel|longitudinal)",
            "(whereas|while|by contrast|in contrast)",
          ],
          hint_tr:
            "'Our method follows Chen et al. (2022); the key difference is we use [X], whereas they use [Y].'",
        },
        {
          speaker: "npc",
          message:
            "Okay. The thing I struggled with is your identifying assumption — it's strong. Walk me through why you find it credible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|challenge)|you('re| are) right (that|to))",
            "(the assumption (is|does) strong)",
            "(we defend it on (two|three) grounds|three pieces of evidence)",
            "(institutional (knowledge|context|details)|placebo (test|check)|robustness)",
            "(pre-?trends|parallel trends|conditional on)",
            "(I (wouldn't|won't) claim it('s| is) airtight)",
          ],
          hint_tr:
            "Önce kabul et: 'The assumption is strong, fair challenge.' Sonra savun: 'We defend it on three grounds: institutional context, placebo tests, and pre-trends.'",
        },
        {
          speaker: "npc",
          message:
            "Final question — what's the limitation you're most worried about? Be honest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|the (honest|truthful) answer|to be candid)",
            "(external validity|generalisability|sample is)",
            "(measurement|noise|attrition|selection)",
            "(one (other )?caveat|the limitation I('d| would) flag)",
            "(we discuss this in (section|the appendix))",
          ],
          hint_tr:
            "Dürüst ol: 'Honestly, the limitation I'd flag is external validity — our sample is specific. We address this in Section 5, but I wouldn't claim the result generalises naively.'",
        },
        {
          speaker: "npc",
          message:
            "That's a substantive answer. Thanks — strong piece of work.",
        },
      ],
    },
    {
      id: "ex.ab2.4.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Our methodology follows Chen et al., but with finer-grained data.",
      tr_hint:
        "'Chen et al.' = 'Chen et al' veya 'Chen and others'. 'Finer-grained' = daha hassas, detaylı.",
    },
    {
      id: "ex.ab2.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "The scope of this paper is deliberately narrow.",
      ipa: "ðə skoʊp əv ðɪs ˈpeɪpər ɪz dɪˈlɪbərətli ˈnæroʊ",
      tr_hint:
        "Reading group savunması. 'Deliberately' = 'di-LİBER-ıt-li' 4 hece, ortada vurgu. 'Narrow' = 'NEH-roh'.",
    },
    {
      id: "ex.ab2.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I think the contribution would be sharper if the authors replicated their results on a held-out sample.",
      voice_hint: "male_us",
      tr_hint:
        "Hakem yorumu tonu — 'would be sharper if' = daha keskin olurdu. 'Replicated... on a held-out sample' = bağımsız örnekte tekrarlamak.",
    },
    {
      id: "ex.ab2.4.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "What I find compelling is the methodology, but the limitation in external validity is significant.",
      transcription_target:
        "What I find compelling is the methodology, but the limitation in external validity is significant.",
      tr_hint:
        "Paper discussion ifadesi. 'Compelling' = çekici, ikna edici. 'External validity' = dış geçerlilik.",
    },
    {
      id: "ex.ab2.4.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "replicate",
      tr_translation: "Yeniden üretmek / kopyalamak",
      example:
        "Before we cite this finding, I'd want someone to replicate it on an independent sample.",
      example_tr:
        "Bu bulguya atıf yapmadan önce, birinin bağımsız bir örnek üzerinde tekrar üretmesini isterdim.",
    },
    {
      id: "ex.ab2.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "This paper has many limitations and the author didn't do a good job, I don't like it.",
      correct_sentence:
        "The paper has some clear limitations, particularly around external validity, though the methodological contribution is genuine.",
      tr_explanation:
        "'Didn't do a good job, I don't like it' akademide subjektif ve kişisel. Reading group dili: 'has some clear limitations' + 'though X is genuine' (denge). Argümana spesifik referans gerek ('external validity' gibi).",
    },
  ],
};

// ============================================================
// Lesson B2.5 — Scholarship Interview
// ============================================================
export const academicB2Lesson_5: BundledLesson = {
  id: "academic.b2.scholarship-interview.1",
  skill_id: "academic.b2",
  index: 5,
  title: "Scholarship Interview",
  description:
    "Burs mülakatı: akademik liyakat + maddi ihtiyaç hikayesi — iki anlatıyı dengeli kurmak.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ab2.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "academic merit",
      tr_translation: "Akademik liyakat",
      example:
        "I'd like to address my academic merit first, and then turn to the question of financial need.",
      example_tr:
        "Önce akademik liyakat üzerine konuşmak, ardından maddi ihtiyaç meselesine geçmek istiyorum.",
    },
    {
      id: "ex.ab2.5.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "financial need",
      tr_translation: "Maddi ihtiyaç",
      example:
        "Without this scholarship, financial need would force me to defer the programme.",
      example_tr:
        "Bu burs olmadan, maddi ihtiyaç beni programı ertelemeye mecbur bırakır.",
    },
    {
      id: "ex.ab2.5.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu bursun benim için anlamı sadece finansal değil; ailemin tarihinde üniversite eğitimine erişebilen ilk kuşaktanım ve bu fırsat o sorumluluğu da beraberinde getiriyor.",
      target:
        "This scholarship means more than the financial support; I'm the first in my family to access higher education, and that opportunity carries a responsibility I take seriously.",
      accepted_variants: [
        "The scholarship isn't only about the money — I'm the first generation in my family to attend university, and I feel the weight of that responsibility.",
        "It's not just financial for me; being the first in my family to go to university makes this opportunity carry real responsibility.",
        "The meaning of this scholarship goes beyond the financial side — as a first-generation university student, I'm aware of the responsibility that comes with it.",
        "This scholarship matters to me beyond the financial dimension; I'm a first-generation university student, and that brings a sense of responsibility I take seriously.",
      ],
      tr_hint:
        "'First-generation university student' = ailenin üniversiteye giden ilk üyesi. Anglo akademik kültürde güçlü bir anlatı çerçevesi.",
    },
    {
      id: "ex.ab2.5.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Without this support, I would be forced to ___ my place on the programme.",
      answer: "defer",
      distractors: ["cancel", "delay", "remove", "withdraw"],
      tr_hint:
        "'Defer one's place' = okul yerini ertelemek — akademik kayıt dilinde standart.",
    },
    {
      id: "ex.ab2.5.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am very poor and I really need this money, please give it to me because my family cannot pay.",
      correct_sentence:
        "Realistically, without this scholarship I'd have to defer my place — my family's income cannot stretch to international fees on top of living costs.",
      tr_explanation:
        "'I am very poor / please give' = dilencilik tonu, jüride iyi durmaz. Akademik dilde maddi ihtiyacı somut, profesyonel anlatır: 'income cannot stretch to', 'on top of living costs', 'defer my place'.",
    },
    {
      id: "ex.ab2.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Burs paneli — bir akademisyen, bir alumni, bir program direktörü. Akademik başarı, finansal ihtiyaç ve uzun vadeli niyet üzerine üç soru.",
      npc_role: "Scholarship panel",
      setting: "Scholarship interview panel",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome. We have your file, but we'd like to hear in your own words — what makes you a strong candidate academically, beyond the transcript?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|thanks for) (the opportunity|having me|the time)",
            "(beyond the transcript|beyond grades|what the transcript (doesn't|does not) capture)",
            "(research (project|experience|thesis)|publication|conference)",
            "(initiative|self-?taught|reading group|organi[sz]ed)",
            "(consistency|trajectory|steady improvement)",
          ],
          hint_tr:
            "Notların ötesini anlat: 'What the transcript doesn't capture is [X] — independent research project, organising a reading group, a publication in progress.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. Now — the harder part. Could you walk us through the financial picture honestly? We have your forms, but the narrative helps.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(realistically|honestly|to be candid)",
            "(without this (scholarship|support|funding))",
            "(defer (my place|the programme|the offer))",
            "(family('s| is) income|my parents|household)",
            "(cannot (stretch to|cover|sustain)|on top of (living costs|tuition))",
            "(I('ve| have) (worked|saved|contributed)|self-?financed|part-?time)",
          ],
          hint_tr:
            "Profesyonel açıklık: 'Realistically, without this scholarship I'd have to defer. My family's income cannot stretch to international fees on top of living costs, and I've already saved everything I could over the past two years.'",
        },
        {
          speaker: "npc",
          message:
            "Last question. Scholarships like this often hope candidates will give back. What do you imagine that looking like for you, in ten or fifteen years?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in (ten|fifteen) years|long(-| )term|by mid-?career)",
            "(give back|pay (it )?forward|contribute|mentor)",
            "(students from (similar|my) backgrounds|first-?generation)",
            "(in turkey|back home|in my (country|region))",
            "(I('m| am) not (yet )?sure (of )?the exact (form|shape)|the honest answer)",
            "(but the (commitment|principle|intent) is)",
          ],
          hint_tr:
            "Niyet net + samimi belirsizlik: 'In ten years — honestly, I'm not sure of the exact form. But the commitment is to mentor first-generation students, particularly back in Turkey.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. That was a thoughtful conversation — you'll hear from us within three weeks.",
        },
      ],
    },
    {
      id: "ex.ab2.5.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Burs mülakatında maddi ihtiyacı anlatmanın en profesyonel yolu?",
          options: [
            "I'm very poor, please help",
            "Realistically, without this scholarship I'd have to defer my place",
            "My family has no money",
            "I deserve it more than others",
          ],
          correct_index: 1,
          tr_explanation:
            "'Realistically' + 'defer my place' + somut detay = profesyonel + dürüst + onurlu.",
        },
        {
          question: "'First-generation university student' ne demek?",
          options: [
            "Birinci sınıf öğrencisi",
            "Ailesinde üniversiteye giden ilk kişi",
            "İlk başvuruda kazanan",
            "Tarihte ilk kez okuyan",
          ],
          correct_index: 1,
          tr_explanation:
            "Anglo akademik kültüründe güçlü bir anlatı: ailenden ilk üniversiteli olmak.",
        },
        {
          question: "Burs paneline 'I deserve this more than others' demek neden hatalı?",
          options: [
            "Doğru, hep böyle denir",
            "Diğer adayları küçümseyen ton — jüride kötü iz bırakır",
            "Çok kısa kalır",
            "Pasif çatı",
          ],
          correct_index: 1,
          tr_explanation:
            "Başkalarını rakip olarak küçültmek = karakter sorunu sinyali. Kendini, başkalarına atıfta bulunmadan anlat.",
        },
      ],
    },
    {
      id: "ex.ab2.5.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd like to take a moment to address that question carefully.",
      ipa: "aɪd laɪk tə teɪk ə ˈmoʊmənt tu əˈdrɛs ðæt ˈkwɛstʃən ˈkɛərfəli",
      tr_hint:
        "Burs paneli yumuşatıcı. 'Take a moment' = bir an alayım. 'Carefully' = 'KER-fıl-li'. Sakin, ölçülü tempo.",
    },
    {
      id: "ex.ab2.5.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Honestly, the scholarship would make the difference between pursuing this research and putting it on hold for a year.",
      voice_hint: "female_uk",
      tr_hint:
        "Burs mülakatı dürüstlük tonu. 'Make the difference between X and Y' = X ile Y arasındaki fark. 'On hold' = beklemede.",
    },
    {
      id: "ex.ab2.5.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "How does your proposed research replicate the methodology you used in your master's thesis?",
      transcription_target:
        "How does your proposed research replicate the methodology you used in your master's thesis?",
      tr_hint:
        "Burs paneli sorusu. 'Proposed research' = önerilen araştırma. 'Replicate the methodology' = metodolojiyi yeniden üretmek.",
    },
    {
      id: "ex.ab2.5.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "limitation",
      tr_translation: "Sınırlılık / kısıt",
      example:
        "The main limitation of my master's work was sample size, and this proposal addresses that directly.",
      example_tr:
        "Yüksek lisans çalışmamın temel sınırlılığı örneklem büyüklüğüydü ve bu öneri onu doğrudan ele alıyor.",
    },
    {
      id: "ex.ab2.5.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I really need this scholarship because I am poor and my family cannot pay my education.",
      correct_sentence:
        "The scholarship would enable me to focus on research full-time without the financial pressure of part-time work.",
      tr_explanation:
        "'I am poor, my family cannot pay' burs panelinde duygusal ve dezavantajlı kalır. Akademik dil: somut etki ('enable me to focus on research') + pratik gerekçe ('without financial pressure'). Acındırma değil, fonksiyon.",
    },
  ],
};

// ============================================================
// Lesson B2.6 — Research Proposal Pitch (5 min)
// ============================================================
export const academicB2Lesson_6: BundledLesson = {
  id: "academic.b2.proposal-pitch.1",
  skill_id: "academic.b2",
  index: 6,
  title: "Research Proposal Pitch",
  description:
    "5 dakikalık araştırma önerisi sunumu: problem, yaklaşım, katkı, fizibilite — sıkıştırılmış argüman.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ab2.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "feasibility",
      tr_translation: "Yapılabilirlik (fizibilite)",
      example:
        "Let me close with three points on feasibility: data access, methods, and timeline.",
      example_tr:
        "Üç fizibilite konusunda kapanış yapayım: veri erişimi, yöntem ve zaman çizelgesi.",
    },
    {
      id: "ex.ab2.6.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Problemi kısaca anlatayım: literatürde X üzerine geniş bir çalışma var ama Y bağlamında sistematik kanıt yok ve benim önerim bu boşluğu doldurmak.",
      target:
        "Let me state the problem briefly: there's a substantial literature on X, but no systematic evidence in the Y setting, and my proposal aims to fill that gap.",
      accepted_variants: [
        "The problem in a sentence: X has been studied extensively, but the Y context lacks systematic evidence — and that's the gap my proposal addresses.",
        "Briefly, the problem is this: while X is well-studied, there's a clear absence of systematic evidence in the Y setting; my proposal sets out to close that gap.",
        "To frame the problem: a large literature on X exists, yet we lack systematic evidence in the Y setting, and my proposed work aims at that gap.",
        "Let me set out the problem: although X is widely studied, the Y context still lacks systematic evidence — that's the gap my proposal targets.",
      ],
      tr_hint:
        "Pitch açılışı = 1 cümlede problem + boşluk + niyet. 'There's a substantial literature on X, but...'",
    },
    {
      id: "ex.ab2.6.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "The expected ___ is a generalisable framework that other researchers can apply.",
      answer: "contribution",
      distractors: ["amount", "topic", "outcome", "donation"],
      tr_hint:
        "'Expected contribution' = beklenen katkı, proposal'ın 'what's new' kısmı.",
    },
    {
      id: "ex.ab2.6.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "My research will be about many things and I want to investigate everything related to this topic.",
      correct_sentence:
        "My proposal addresses a specific question: how does X affect Y in the Z setting?",
      tr_explanation:
        "'Many things / everything' = scope problemi = pitch ölür. Akademik pitch'in birinci kuralı: tek soruya odaklan. 'A specific question: how does X affect Y in Z?'",
    },
    {
      id: "ex.ab2.6.5",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "novel contribution",
      tr_translation: "Yeni / özgün katkı",
      example:
        "The novel contribution is a method that remains identified even when the instrument is weak.",
      example_tr:
        "Yeni katkı, araç değişken zayıf olduğunda bile tanımlı kalan bir yöntem.",
    },
    {
      id: "ex.ab2.6.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "5 dakikalık proposal pitch yapacaksın. İnterview chair seni yönlendiriyor, 4 aşamada — problem, yaklaşım, katkı, fizibilite.",
      npc_role: "Interview chair",
      setting: "Research proposal pitch session",
      turns: [
        {
          speaker: "npc",
          message:
            "You've got five minutes. Start with the problem — and please, in a single sentence.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the problem (in (a|one) (sentence|line))|briefly)",
            "(there('s| is) (a |an )?(substantial|growing|active) literature)",
            "(but|yet|however) (no|little|limited) (systematic )?evidence",
            "(in the (y|this) (setting|context|case))",
            "(my (proposal|project|work) (aims|sets out|seeks) to (fill|close|address|target) (that|this) gap)",
          ],
          hint_tr:
            "Tek cümle: 'There's a substantial literature on X, but no systematic evidence in the Y context — that's the gap my proposal addresses.'",
        },
        {
          speaker: "npc",
          message:
            "Good. Approach — how, concretely, would you tackle it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I (propose|plan to|would|will) (use|combine|adopt|apply))",
            "(a (mixed|quantitative|qualitative|comparative) (design|approach|methods?))",
            "(stage one|first phase|step (one|1)|to begin)",
            "(then|in stage two|the second phase|building on)",
            "(triangulat|validat|cross-?check)",
          ],
          hint_tr:
            "İki-üç adımlık yöntem: 'In stage one, I'll [X]. Building on that, stage two combines [Y] and [Z], which lets me triangulate findings.'",
        },
        {
          speaker: "npc",
          message:
            "Contribution — what does the field gain from this that it doesn't already have?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (novel |key |main |expected )?contribution)",
            "(a (new|novel|generali[sz]able) (framework|method|estimator|dataset|evidence))",
            "(other researchers can (use|apply|build on|extend))",
            "(policy (implication|relevance|use))",
            "(it (changes|shifts|nuances) (the|our) understanding of)",
          ],
          hint_tr:
            "Net katkı: 'The novel contribution is [X] — a [framework/method/dataset] that other researchers can apply to similar questions.'",
        },
        {
          speaker: "npc",
          message:
            "Last minute. Feasibility — can you actually do this in three years?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three points|three (grounds|reasons) (on|for) feasibility|the feasibility case rests on)",
            "(data (access|is secured|is already)|I (have|already have) (access|approval|the data))",
            "(method|i('ve| have) already (piloted|prototyped|tested))",
            "(timeline|by month (six|twelve|18|24))",
            "(realistic|honest|i('m| am) confident|the risk is)",
          ],
          hint_tr:
            "Üç delil: 'Three points on feasibility: data — I have access through [X]. Method — I've already piloted it. Timeline — I've built in slack for [risk].'",
        },
        {
          speaker: "npc",
          message:
            "Time. Thank you — that was a tight, well-structured pitch.",
        },
      ],
    },
    {
      id: "ex.ab2.6.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "5 dakikalık pitch'in birinci kuralı?",
          options: [
            "Mümkün olduğunca çok konu kapsa",
            "Tek bir spesifik soruya odaklan",
            "Önce kendinden bahset",
            "Slide sayısı = pitch süresi x 5",
          ],
          correct_index: 1,
          tr_explanation:
            "Pitch'te scope = düşman. 'A specific question: how does X affect Y in Z?' — tek bir net soru.",
        },
        {
          question: "Akademide 'feasibility' nedir?",
          options: [
            "Konuşma akıcılığı",
            "Araştırmanın gerçekten yapılabilirliği (veri, zaman, yöntem)",
            "Sunum kalitesi",
            "Hocanın onayı",
          ],
          correct_index: 1,
          tr_explanation:
            "Fizibilite = veri erişimi + yöntem prototipi + zaman çizelgesi — pitch'in 'yapılabilir mi?' kısmı.",
        },
        {
          question: "Hangi pitch açılışı en güçlü?",
          options: [
            "I want to study many topics in this area",
            "There's a substantial literature on X, but no systematic evidence in Y — that's the gap I address",
            "Hello, I'm here today to talk about my research",
            "My research is very important",
          ],
          correct_index: 1,
          tr_explanation:
            "Net açılış formülü: 'Literature exists on X, but Y has a gap — I address that.' Bir cümle, üç ögeli.",
        },
      ],
    },
    {
      id: "ex.ab2.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "The scope is intentionally narrow but the contribution is generalisable.",
      ipa: "ðə skoʊp ɪz ɪnˈtɛnʃənəli ˈnæroʊ bʌt ðə ˌkɒntrɪˈbjuːʃən ɪz ˌdʒɛnərəˈlaɪzəbəl",
      tr_hint:
        "Proposal pitch kalıbı. 'Intentionally' = 'in-TEN-şın-li'. 'Generalisable' = 'cen-ır-ı-LAY-zı-bıl', 5 hece.",
    },
    {
      id: "ex.ab2.6.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "My methodology builds on existing work, but I'm extending it to a setting where the assumptions haven't been tested.",
      voice_hint: "male_uk",
      tr_hint:
        "Pitch ritmi. 'Builds on' birleşik, 'extending it to' akıcı, 'haven't been tested' net. Profesyonel akademik tempo.",
    },
    {
      id: "ex.ab2.6.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Could you spell out the gap in the literature your proposal aims to address?",
      transcription_target:
        "Could you spell out the gap in the literature your proposal aims to address?",
      tr_hint:
        "Panel sorusu. 'Spell out' = açıklamak, netleştirmek. 'Gap in the literature' = literatürdeki boşluk.",
    },
    {
      id: "ex.ab2.6.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "peer-review",
      tr_translation: "Hakem değerlendirmesi",
      example:
        "Two of the three chapters have been through peer-review; the third is currently under revision.",
      example_tr:
        "Üç bölümün ikisi hakem değerlendirmesinden geçti; üçüncüsü şu an revizyonda.",
    },
    {
      id: "ex.ab2.6.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "My proposal is unique because nobody made this research before in the world.",
      correct_sentence:
        "To my knowledge, this combination of methodology and setting hasn't been examined in the existing literature.",
      tr_explanation:
        "'Nobody made this research before' Türkçeden çeviri + iddialı. Akademik dil: 'to my knowledge' (mütevazı hedge), 'examined in the existing literature' (somut iddia). 'Made research' yanlış — 'conducted/examined' doğru.",
    },
  ],
};

// ============================================================
// Lesson B2.7 — Akademik Vize Mülakatı (Doktora / YL)
// ============================================================
export const academicB2Lesson_7: BundledLesson = {
  id: "academic.b2.student-visa.1",
  skill_id: "academic.b2",
  index: 7,
  title: "Student Visa Interview (PhD / MSc)",
  description:
    "Yurtdışı doktora / yüksek lisans vize mülakatı: finansman kaynağı, geri dönüş niyeti.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ab2.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "funding source",
      tr_translation: "Finansman kaynağı",
      example:
        "My funding source is a fully-funded PhD studentship from the department, covering both fees and a maintenance stipend.",
      example_tr:
        "Finansman kaynağım, hem ücreti hem geçim ödeneğini kapsayan tam burslu bir doktora pozisyonu.",
    },
    {
      id: "ex.ab2.7.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "intent to return",
      tr_translation: "Geri dönüş niyeti",
      example:
        "My intent to return is concrete: I have a family obligation in Istanbul and a pre-existing tenure-track conversation with my undergraduate institution.",
      example_tr:
        "Geri dönüş niyetim somut: İstanbul'da aile sorumluluğum ve lisans kurumumla başlamış bir kadrolu konuşma var.",
    },
    {
      id: "ex.ab2.7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Tüm masraflarım için tam burs alıyorum; bu burs hem öğrenim ücretini hem de aylık yaşam ödeneğini kapsıyor.",
      target:
        "I have a full scholarship covering all my expenses; it includes both tuition fees and a monthly maintenance stipend.",
      accepted_variants: [
        "I'm fully funded — the scholarship covers tuition and a monthly living stipend.",
        "All my costs are covered by a full scholarship that includes both fees and a monthly stipend for living expenses.",
        "I have a fully-funded place; the scholarship pays tuition and a monthly maintenance allowance.",
        "I receive a full scholarship that covers tuition fees and a monthly living stipend.",
      ],
      tr_hint:
        "Vize için kritik: 'tuition' (öğrenim ücreti) + 'maintenance stipend / living allowance' (geçim) iki ayrı kategori.",
    },
    {
      id: "ex.ab2.7.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I have a clear ___ to return to Turkey after completing my doctorate.",
      answer: "intent",
      distractors: ["wish", "plan", "thought", "hope"],
      tr_hint:
        "'Intent to return' = vize mülakatında resmi kalıp. Vize memuru bu spesifik ifadeye iyi tepki verir.",
    },
    {
      id: "ex.ab2.7.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I will go to UK for make my master and after I will see what to do, maybe stay there.",
      correct_sentence:
        "I'll be in the UK on a study route visa for my MSc, and I have a clear intent to return to Turkey afterwards — I have a position waiting at my undergraduate institution.",
      tr_explanation:
        "Vize mülakatında 'maybe stay there' = ölüm öpücüğü. 'Intent to return' net olmalı: somut bir bağ (iş, aile, pozisyon) söyle. 'Make my master' yerine 'pursue / do my master's'.",
    },
    {
      id: "ex.ab2.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Konsolosluk vize mülakatı. Memur cidden, profesyonel ve şüphecidir. Finansman, niyet ve programa uyum sorulur.",
      npc_role: "Consular officer",
      setting: "Embassy student visa interview",
      turns: [
        {
          speaker: "npc",
          message:
            "Good afternoon. State your full name and the programme you'll be attending.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good afternoon|good morning)",
            "(my name is|I am)",
            "(I('ll| will) be (attending|enrolling on|starting))",
            "(MSc|Master('s)?|PhD|DPhil|doctoral programme)",
            "(at|in) [a-z]+",
            "(starting|beginning) (this )?(autumn|fall|september|october)",
          ],
          hint_tr:
            "Resmi açılış: 'Good afternoon. My name is [X]. I'll be enrolling on the MSc in [field] at [university], starting this October.'",
        },
        {
          speaker: "npc",
          message:
            "How are you financing this? I need specifics.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I (have|hold|am the recipient of) a (full|fully-?funded) scholarship)",
            "(the scholarship covers|it covers|funding includes)",
            "(tuition (fees)?|fees)",
            "(maintenance (stipend|allowance)|living (costs|allowance)|monthly stipend)",
            "(I have (the )?(award letter|funding confirmation|documentation) with me)",
            "(in addition|on top of that|supplemented by)",
          ],
          hint_tr:
            "Spesifik ve dokümantasyona referans: 'I hold a fully-funded scholarship covering tuition and a monthly maintenance stipend of [X]. I have the award letter with me.'",
        },
        {
          speaker: "npc",
          message:
            "And after the programme — what are your plans?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (clear |firm )?intent (is )?to return|I (plan|intend) to return)",
            "(turkey|istanbul|ankara|izmir|home)",
            "(after (completing|finishing) (the )?(programme|MSc|PhD|doctorate))",
            "(I have (a position|a job|an offer|family obligations|a conversation))",
            "(my undergraduate (institution|university)|the research institute|the ministry)",
            "(documented|in writing|I can provide)",
          ],
          hint_tr:
            "'Clear intent to return' + somut bağ: 'My clear intent is to return to Turkey after completing the programme. I have a conversation with my undergraduate institution about a tenure-track position.'",
        },
        {
          speaker: "npc",
          message:
            "Why this specific university? Why not study in Turkey?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (specific|particular) (group|department|laboratory))",
            "(prof\\.?|professor) [a-z]+",
            "(world-?leading|the strongest|the only group|specifically)",
            "(this expertise is (not yet )?(available|established) in turkey)",
            "(once I('ve| have) returned|when I('m| am) back|on my return)",
            "(I('ll| will) bring (this )?(expertise|skills?|knowledge) back)",
          ],
          hint_tr:
            "Spesifik + dönüş bağlantısı: 'The group at [X] is world-leading in [Y]. This expertise isn't yet established in Turkey — once I return, I'll bring it back to [institution].'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. Please proceed to window seven for the next step.",
        },
      ],
    },
    {
      id: "ex.ab2.7.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Vize memuru 'After the programme?' diye sorduğunda en güçlü cevap?",
          options: [
            "Maybe I'll stay there if I find a job",
            "I don't know yet, depends on opportunities",
            "My clear intent is to return — I have a conversation with my undergraduate institution about a position",
            "Probably go back home",
          ],
          correct_index: 2,
          tr_explanation:
            "'Clear intent to return' + somut bağ (iş, aile, kurum) = vize mülakatı altın formülü.",
        },
        {
          question: "'Maintenance stipend' nedir?",
          options: [
            "Bakım ücreti (bina)",
            "Aylık geçim ödeneği (öğrenci için)",
            "Servis ücreti",
            "Sigorta primi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tuition' = öğrenim ücreti. 'Maintenance stipend / allowance' = aylık geçim ödeneği. İkisi ayrı kalemler.",
        },
        {
          question: "'Make my master' nesi yanlış?",
          options: [
            "Tense yanlış",
            "'Make' yanlış fiil — doğrusu 'pursue / do my master's'",
            "'My' fazla",
            "Hiçbir yanlış yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkçeden çeviri: 'Make a master/PhD' yanlış. Doğru: 'do / pursue / undertake my master's'.",
        },
      ],
    },
    {
      id: "ex.ab2.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I intend to return to Turkey after completing my research.",
      ipa: "aɪ ɪnˈtɛnd tə rɪˈtɜːn tə ˈtɜːki ˈæftər kəmˈpliːtɪŋ maɪ rɪˈsɜːtʃ",
      tr_hint:
        "Vize mülakatı kilit cümlesi. 'Intend' = 'in-TEND'. 'Return' = 'ri-TÖRN'. Net, kararlı, içten ton.",
    },
    {
      id: "ex.ab2.7.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "My funding is secured through a research assistantship, and my supervisor has confirmed it covers tuition and living costs.",
      voice_hint: "female_us",
      tr_hint:
        "Vize finansal kanıt cümlesi. 'Secured through' = ile güvence altına alınmış. 'Confirmed it covers' = karşıladığını teyit etti.",
    },
    {
      id: "ex.ab2.7.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "What is the scope of your research and how does it relate to your previous studies in Turkey?",
      transcription_target:
        "What is the scope of your research and how does it relate to your previous studies in Turkey?",
      tr_hint:
        "Konsolos sorusu. 'Scope of your research' = araştırmanın kapsamı. 'Relate to' = ile ilişkili olmak.",
    },
    {
      id: "ex.ab2.7.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "supervisor",
      tr_translation: "Danışman (akademik)",
      example:
        "My prospective supervisor is Professor Hale; we've corresponded since February and she has agreed to take me on.",
      example_tr:
        "Olası danışmanım Profesör Hale; Şubat'tan beri yazışıyoruz ve beni kabul etmeyi onayladı.",
    },
    {
      id: "ex.ab2.7.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I want make my master in UK because Turkey universities are not good for me.",
      correct_sentence:
        "I'd like to pursue my master's in the UK because the methodological training in my field is particularly strong there.",
      tr_explanation:
        "Vize mülakatında 'Turkey universities are not good' kötü sinyal verir (ülke kaçışı izlenimi). 'Make my master' yanlış — 'pursue my master's'. Pozitif gerekçe ('methodological training is strong') daha güvenli.",
    },
  ],
};

// ============================================================
// Lesson B2.8 — Asking Advisor for Help
// ============================================================
export const academicB2Lesson_8: BundledLesson = {
  id: "academic.b2.asking-for-extension.1",
  skill_id: "academic.b2",
  index: 8,
  title: "Asking Advisor for Help",
  description:
    "Süpervizörden uzatma istemek, sorunu net anlatmak, zaman / yardım talep etmek.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.ab2.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "extension",
      tr_translation: "Süre uzatması",
      example:
        "I'd like to request a two-week extension on the chapter draft because of an unforeseen data issue.",
      example_tr:
        "Bölüm taslağı için iki haftalık bir uzatma istemek istiyorum çünkü öngörülmemiş bir veri sorunu çıktı.",
    },
    {
      id: "ex.ab2.8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "stuck on",
      tr_translation: "Takılı kaldığım nokta",
      example:
        "I'm stuck on the identification step and would value your input before I commit to a direction.",
      example_tr:
        "Tanımlama adımında takıldım ve bir yöne karar vermeden önce görüşüne ihtiyacım var.",
    },
    {
      id: "ex.ab2.8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bir konuda takıldım ve bir karar vermeden önce sizin görüşünüze ihtiyacım var; bu hafta 20 dakikalık bir görüşme ayarlamamız mümkün mü?",
      target:
        "I'm stuck on something and would value your input before I commit to a direction; would it be possible to schedule a twenty-minute meeting this week?",
      accepted_variants: [
        "I've hit a wall on a methodological choice and would appreciate your perspective before deciding — could we find twenty minutes this week?",
        "I'm at a decision point and could use your input before committing; would you have twenty minutes for a quick meeting this week?",
        "There's a question I'm stuck on, and I'd rather get your view before going further — could we arrange a short meeting this week?",
        "I'd value your input on something I'm stuck on before I lock in a direction; could we find twenty minutes this week?",
      ],
      tr_hint:
        "Yardım istemek = küçük ricaymış gibi gel: 'would value your input' + somut zaman talebi ('twenty minutes').",
    },
    {
      id: "ex.ab2.8.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I'd like to request a one-week ___ on the chapter, given an unforeseen issue.",
      answer: "extension",
      distractors: ["postponing", "delay", "extra", "longer"],
      tr_hint:
        "'Request an extension' = süre uzatması talep etmek — akademik resmi kalıp.",
    },
    {
      id: "ex.ab2.8.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Hi prof, I cannot finish this work in time. I need more days, sorry for this.",
      correct_sentence:
        "Hi Prof. Hale — I wanted to flag a delay early. Due to an unforeseen data issue, I'd like to request a one-week extension on the chapter. I can have the revised version to you by [date].",
      tr_explanation:
        "'I cannot finish, sorry' = pasif + belirsiz. Akademik kalıp: erken haber + somut sebep + net yeni tarih + sorumluluk. 'Flag a delay early' süpervizör kültüründe önemli.",
    },
    {
      id: "ex.ab2.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Süpervizörünle Zoom görüşmesi. Bir bölüm taslağında takıldın ve hem uzatma hem de yöntemsel yardım isteyeceksin. Pasif olma — net + sorumlu ol.",
      npc_role: "Supervisor (Prof. Hale)",
      setting: "Online meeting with supervisor",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi — you said this was time-sensitive. What's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate (you|the))",
            "(making time|fitting me in|the quick turnaround)",
            "(two things|there are two things|I (wanted|wanted) to (flag|raise|discuss))",
            "(a delay|an extension|something I('m| am) stuck on)",
            "(an unforeseen|I didn't anticipate|something came up with)",
          ],
          hint_tr:
            "Açılış: 'Thanks for fitting me in. Two things — a delay I wanted to flag early, and something I'm stuck on methodologically.'",
        },
        {
          speaker: "npc",
          message:
            "Okay — let's take the delay first. What's the situation?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(due to|because of|on account of)",
            "(an unforeseen|an unanticipated|a data (issue|problem|delay))",
            "(I('d| would) like to request|may I request) (a |an )?(one-?week|two-?week|short)? extension",
            "(I can have|the revised|i('ll| will) have) (the (draft|chapter|version|file))",
            "(to you by|in your inbox by|with you by) (friday|monday|next|the [0-9]+)",
            "(I('ve| have) already|the (timeline|new schedule)|the rest of)",
          ],
          hint_tr:
            "Yapı: sebep + somut talep + net yeni tarih + telafi planı. 'Due to a data issue, I'd like to request a one-week extension. I can have the chapter to you by Friday the 24th.'",
        },
        {
          speaker: "npc",
          message:
            "Fine, a week is okay. Now — what are you stuck on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (identification|estimation|robustness|sample selection) step)",
            "(I('m| am) stuck on|the question I('m| am) (wrestling|grappling) with)",
            "(two options|I see (two|three) directions|the (trade-?off|tension) is)",
            "(option (one|two|a|b)|the (first|second) (option|approach|path))",
            "(I('d| would) lean toward|my (instinct|inclination) is)",
            "(I('d| would) value your view|before I (commit|lock in|decide))",
          ],
          hint_tr:
            "Sorunu yapılandır: 'I'm stuck on identification. Two options — A or B. The trade-off is X vs Y. I'd lean toward A, but I'd value your view before committing.'",
        },
        {
          speaker: "npc",
          message:
            "I'd go with option B, and here's why — that trade-off is bigger than you think.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) helpful|that makes sense|I (hadn't|had not) (weighted|considered|appreciated))",
            "(let me (think|sit with|re-?work)|I('ll| will) (go|run|try) with (option )?B)",
            "(any (paper|reference|source|reading) (you'?d|you would) (recommend|suggest|point me to))",
            "(thank you|appreciate that|that('s| is) really useful)",
          ],
          hint_tr:
            "Yardımı kabul + bir ekstra (kaynak) iste: 'That's really helpful — I hadn't weighted that trade-off properly. I'll go with B. Any reference you'd suggest before I start?'",
        },
        {
          speaker: "npc",
          message:
            "I'll forward you the Liu and Park paper — that'll set you up. See you next week.",
        },
      ],
    },
    {
      id: "ex.ab2.8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Süpervizörden uzatma isterken en kritik unsur?",
          options: [
            "Çok özür dilemek",
            "Erken haber + somut sebep + net yeni tarih + telafi planı",
            "Sadece 'I need more time' demek",
            "Mesajı pazartesi atmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Akademik supervisor kültürü: 'Flag a delay early' kuralı. 'Due to X, request one-week extension, new date is Y.' — yapı bu.",
        },
        {
          question: "'I'm stuck on something' demek neden iyi bir kalıp?",
          options: [
            "Pasif ve özürcü",
            "Profesyonel + dürüst — yardım isterken kuvvetli",
            "Çok resmi",
            "Yanlış preposition",
          ],
          correct_index: 1,
          tr_explanation:
            "'Stuck on X' = profesyonel açıklık. Sorunu sahiplenmek + yardım istemek için sağlam bir başlangıç.",
        },
        {
          question: "'Would you have twenty minutes?' niye somut bir sayı?",
          options: [
            "Süpervizör matematik sever",
            "Net bir zaman çerçevesi = kabul etmesi daha kolay; belirsiz 'a meeting' büyük taahhüt hissi verir",
            "Resmi olmak için",
            "Yanlış",
          ],
          correct_index: 1,
          tr_explanation:
            "Somut süre = küçük yük. 'A meeting' belirsiz ve büyük. 'Twenty minutes' = bağlanması kolay rica.",
        },
      ],
    },
    {
      id: "ex.ab2.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Would it be possible to request a short extension on the deadline?",
      ipa: "wʊd ɪt bi ˈpɒsəbəl tə rɪˈkwɛst ə ʃɔːrt ɪkˈstɛnʃən ɒn ðə ˈdɛdlaɪn",
      tr_hint:
        "Süre uzatma kalıbı. 'Would it be possible' = mümkün olur mu, en kibar açılış. 'Extension' = 'ik-STEN-şın'.",
    },
    {
      id: "ex.ab2.8.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I appreciate your patience — I'd like to flag a concern about the scope of the methodology section.",
      voice_hint: "male_uk",
      tr_hint:
        "Danışmana endişe iletme. 'Appreciate your patience' yumuşak başlangıç. 'I'd like to flag' = nazikçe işaret etmek.",
    },
    {
      id: "ex.ab2.8.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Could we narrow the scope of this chapter and revisit the broader argument in the next supervision?",
      transcription_target:
        "Could we narrow the scope of this chapter and revisit the broader argument in the next supervision?",
      tr_hint:
        "Danışman önerisi. 'Narrow the scope' = kapsamı daralt. 'Revisit' = yeniden ele al.",
    },
    {
      id: "ex.ab2.8.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "scope",
      tr_translation: "Kapsam / sınır",
      example:
        "I think the scope of the chapter has drifted; could we sit down and re-bound it?",
      example_tr:
        "Bölümün kapsamı dağıldı sanırım; oturup yeniden sınırlandırabilir miyiz?",
    },
    {
      id: "ex.ab2.8.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I cannot finish the deadline because I have many problems in my life, please give me more time.",
      correct_sentence:
        "I'd like to request a short extension — I've run into a methodological complication I'd rather address properly than rush.",
      tr_explanation:
        "Akademik kültürde kişisel sorunlar değil, akademik gerekçe gerek. 'Methodological complication' somut, 'rather address properly than rush' kalite gerekçesi. 'Cannot finish the deadline' yanlış — 'meet the deadline' doğru kalıp.",
    },
  ],
};

// ============================================================
// Lesson B2.9 — Conference Networking Dinner
// ============================================================
export const academicB2Lesson_9: BundledLesson = {
  id: "academic.b2.networking-dinner.1",
  skill_id: "academic.b2",
  index: 9,
  title: "Conference Networking Dinner",
  description:
    "Akademik network akşam yemeği: küçük muhabbet + araştırma sohbeti dengesi, takip kalıpları.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.ab2.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "What are you working on?",
      tr_translation: "Şu sıralar ne üzerine çalışıyorsun?",
      example:
        "Before we dig into the panel — what are you working on these days?",
      example_tr:
        "Panele girmeden — şu sıralar ne üzerine çalışıyorsun?",
    },
    {
      id: "ex.ab2.9.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Senin geçen yılki sunumun ilgimi çekmişti; sonrasında ne yöne döndüğünü merak ediyorum.",
      target:
        "Your talk last year really stuck with me — I'm curious where you've taken it since.",
      accepted_variants: [
        "Your presentation last year stayed with me; I'd love to hear where the work has gone since.",
        "I found your talk last year compelling — what direction has it taken since?",
        "Your paper from last year's session has been on my mind; where have you taken it since then?",
        "I keep thinking about your talk from last year — I'd be curious how it's developed.",
      ],
      tr_hint:
        "'Stuck with me / stayed with me' = aklımda kaldı — networking'de güçlü bir iltifat kalıbı çünkü somut bir çalışmaya atıfta bulunuyor.",
    },
    {
      id: "ex.ab2.9.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Would it make sense to ___ up by email after the conference?",
      answer: "follow",
      distractors: ["call", "speak", "write", "send"],
      tr_hint:
        "'Follow up by email' = sonrasında e-postayla takip etmek — networking sonrası standart kalıp.",
    },
    {
      id: "ex.ab2.9.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Hi, I am from Turkey, I do my master, can you give me your email for help?",
      correct_sentence:
        "Hi — I really enjoyed your talk this morning. I'm an MSc student working on something adjacent, and I'd love to follow up by email if that's all right.",
      tr_explanation:
        "'Give me your email for help' = transactional, kötü açılış. Doğru: önce iltifat / bağlantı (talkına atıf) + kim olduğunu + ricayı yumuşatarak.",
    },
    {
      id: "ex.ab2.9.5",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "adjacent work",
      tr_translation: "Komşu / yakın alandaki çalışma",
      example:
        "I'm doing adjacent work — same methods, slightly different domain.",
      example_tr:
        "Komşu bir çalışmadayım — aynı yöntem, biraz farklı alan.",
    },
    {
      id: "ex.ab2.9.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Konferans akşam yemeği. Senior bir akademisyen yanına oturdu. Hem küçük muhabbet hem araştırma sohbeti dengeli ilerlemeli.",
      npc_role: "Senior researcher (Dr. Park)",
      setting: "Conference dinner",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi — is this seat taken? I'm Sandra Park, NYU.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please|go ahead|not at all)",
            "(I('m| am)|my name is) [a-z]+",
            "(university|department|institution)",
            "(I gave|I presented|I('m| am) presenting) (in|on|at)",
            "(actually|funnily enough|nice to meet you|good to meet you)",
            "(I('ve| have) been (looking forward|hoping) to)",
          ],
          hint_tr:
            "Doğal açılış: 'Please — go ahead. I'm [Name], from [University]. Actually, I gave a talk this morning on [topic].'",
        },
        {
          speaker: "npc",
          message:
            "Oh, you did — I caught the tail end of yours. Sorry I missed the start. How was it received?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|don't worry about it|happens)",
            "(it (went|was) (well|fine|all right|mixed))",
            "(the (main|good|tough) question (was|that came up))",
            "(some(one)? (pushed back|challenged|raised))",
            "(in honest|to be fair|truthfully)",
            "(I('m| am) (still )?(processing|thinking through|sitting with))",
          ],
          hint_tr:
            "Dürüst + mütevazı: 'No worries. It went well, I think — the toughest question pushed back on [X]. I'm still sitting with the answer, honestly.'",
        },
        {
          speaker: "npc",
          message:
            "Ah, that's the right answer. Anyone who tells you their Q&A went perfectly is lying. What's your work on, in two sentences?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(broadly|in two sentences|the elevator version)",
            "(I work on|my (research|thesis|project) is on)",
            "(specifically|more (narrowly|specifically)|the (current )?project)",
            "(I('m| am) (interested|curious|trying to understand)|the (puzzle|question) is)",
            "(your work on|your paper on|the [a-z]+ work) (came up|caught my eye|stuck with me)",
          ],
          hint_tr:
            "İki cümle + onun çalışmasına köprü: 'Broadly, I work on [X]. Specifically, the puzzle is [Y]. Your paper on [Z] actually stuck with me.'",
        },
        {
          speaker: "npc",
          message:
            "That's adjacent to what one of my students is doing. You two should talk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that would be (great|wonderful|really helpful))",
            "(I('d| would) love to|happy to|gladly)",
            "(would (you|it) (be|make sense) (to|for me to) (follow up|email|reach out))",
            "(if you don't mind|if that('s| is) all right|if it('s| is) appropriate)",
            "(could I (have|get) (your|their) email|may I (have|get) (their|your) contact)",
            "(I('ll| will) (email|reach out|drop you a line) (next week|after the conference|once I('m| am) back))",
          ],
          hint_tr:
            "Net takip ricası: 'That would be really helpful. If you don't mind, could I follow up by email next week — and could you connect me to your student?'",
        },
        {
          speaker: "npc",
          message:
            "Sure — here's my card. Just mention this conversation in the email, and I'll loop her in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|really appreciate (this|that|it))",
            "(I('ll| will) (be in touch|follow up|email) (next week|after|within))",
            "(enjoy the rest of|hope you enjoy)",
            "(it was (great|good|a pleasure) to meet you|nice meeting you)",
          ],
          hint_tr:
            "Kapanış: 'Thank you, I really appreciate this. I'll follow up early next week. Enjoy the rest of the conference.'",
        },
      ],
    },
    {
      id: "ex.ab2.9.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Senior bir akademisyenle networking açılışı için en iyisi?",
          options: [
            "Hi, can I have your email?",
            "Hi, I'm [Name] — I really enjoyed your talk this morning",
            "Hi, do you want to be my mentor?",
            "Hi, I'm from Turkey",
          ],
          correct_index: 1,
          tr_explanation:
            "İltifat (spesifik konuşmaya atıf) + kendini tanıt = doğal akademik açılış. 'Can I have your email' = transactional, soğuk.",
        },
        {
          question: "'Your talk really stuck with me' ne anlama gelir?",
          options: [
            "Sunum yapışkanmış",
            "Sunumun aklımda kaldı, bende iz bıraktı",
            "Sunum sıkıcıydı",
            "Sunumun sırasında yapıştım",
          ],
          correct_index: 1,
          tr_explanation:
            "'Stuck with me / stayed with me' = aklımda yer etti — networking'de güçlü bir iltifat çünkü somut bir hatırada kalmış.",
        },
        {
          question: "Q&A'da 'How did it go?' diye sorulduğunda en doğal cevap?",
          options: [
            "Perfect, no issues",
            "Terrible, I failed",
            "It went well, but the toughest question pushed back on X — I'm still sitting with the answer",
            "I don't want to talk about it",
          ],
          correct_index: 2,
          tr_explanation:
            "Dürüst + mütevazı + spesifik = akademik network'te güven kazandırır. 'Perfect' kibirli kaçar.",
        },
      ],
    },
    {
      id: "ex.ab2.9.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Could I introduce myself? I'm a doctoral candidate at Boğaziçi.",
      ipa: "kʊd aɪ ˌɪntrəˈdjuːs maɪˈsɛlf aɪm ə ˈdɒktərəl ˈkændɪdət",
      tr_hint:
        "Networking açılışı. 'Doctoral candidate' = doktora adayı, formal. 'Introduce' = 'in-trı-DYUS', vurgu son hecede.",
    },
    {
      id: "ex.ab2.9.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Your keynote really resonated — particularly the methodological point about replicating findings across populations.",
      voice_hint: "female_us",
      tr_hint:
        "Konferans iltifatı + spesifik. 'Resonated' = 'REZ-ı-ney-tıd' = yankı buldu. 'Particularly' = özellikle.",
    },
    {
      id: "ex.ab2.9.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "What's the scope of your dissertation, and have you had a chance to present at a peer-reviewed venue yet?",
      transcription_target:
        "What's the scope of your dissertation, and have you had a chance to present at a peer-reviewed venue yet?",
      tr_hint:
        "Network ortamında akademik sondaj. 'Peer-reviewed venue' = hakemli yayın yeri (konferans/dergi).",
    },
    {
      id: "ex.ab2.9.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "methodology",
      tr_translation: "Metodoloji",
      example:
        "Your methodology is what caught my attention — it's the cleanest identification strategy I've seen on this question.",
      example_tr:
        "Dikkatimi çeken metodolojin oldu — bu konuda gördüğüm en temiz tanımlama stratejisi.",
    },
    {
      id: "ex.ab2.9.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Hello professor, I am big fan of your work and I want you to be my supervisor for PhD.",
      correct_sentence:
        "I really enjoyed your talk — your work on causal inference is something I've drawn on in my master's thesis. I'd be curious to hear if you take on PhD students in this area.",
      tr_explanation:
        "'Big fan' networking için fazla samimi. 'Want you to be my supervisor' baskı yaratır. Akademik kibarlık: spesifik referans ('I've drawn on'), açık uçlu soru ('I'd be curious to hear if'). İlişki kurma değer, talep değil.",
    },
  ],
};

// ============================================================
// Lesson B2.10 — Defending Dissertation Chapter
// ============================================================
export const academicB2Lesson_10: BundledLesson = {
  id: "academic.b2.dissertation-defense.1",
  skill_id: "academic.b2",
  index: 10,
  title: "Defending a Dissertation Chapter",
  description:
    "Komite önünde tez bölümünü savunma: limitasyonlar, alternatif yorumlar, akademik dürüstlük.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.ab2.10.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "limitation",
      tr_translation: "Sınırlılık (çalışmanın zayıf yönü)",
      example:
        "The main limitation, which I want to acknowledge upfront, is that the sample is drawn from a single country.",
      example_tr:
        "Başta belirtmek istediğim temel sınırlılık, örneklemin tek bir ülkeden alınmış olması.",
    },
    {
      id: "ex.ab2.10.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "alternative interpretation",
      tr_translation: "Alternatif yorum",
      example:
        "I want to take that alternative interpretation seriously — let me explain why I still believe the original reading is more supported.",
      example_tr:
        "Bu alternatif yorumu ciddiye almak istiyorum — neden orijinal yorumun hâlâ daha desteklenir olduğunu açıklayayım.",
    },
    {
      id: "ex.ab2.10.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Bunun bir sınırlılık olduğunu kabul ediyorum; başta belirtmem gerekirdi ve bir sonraki sürümde bunu açıkça ele almayı planlıyorum.",
      target:
        "I acknowledge that as a limitation; I should have flagged it upfront, and I plan to address it explicitly in the next revision.",
      accepted_variants: [
        "I take that on as a limitation — I should have raised it earlier, and the next draft will address it head-on.",
        "Fair — that's a real limitation. I should have surfaced it from the start, and I'll deal with it explicitly in the revision.",
        "I accept that as a genuine limitation, which I should have flagged earlier; the next version will address it head-on.",
        "I acknowledge that limitation; I ought to have flagged it from the outset, and the revised chapter will deal with it directly.",
      ],
      tr_hint:
        "Akademik dürüstlük kalıpları: 'I acknowledge' + 'should have flagged' + somut plan. Defansif olma — kabul + iyileştirme.",
    },
    {
      id: "ex.ab2.10.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Let me ___ that point seriously before I respond.",
      answer: "take",
      distractors: ["leave", "ignore", "reject", "fight"],
      tr_hint:
        "'Take a point seriously' = bir eleştiriyi ciddiye almak — komitede saygılı savunmanın çekirdek kalıbı.",
    },
    {
      id: "ex.ab2.10.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "I don't agree with this critique because my work is correct and I have proven it.",
      correct_sentence:
        "Let me take that critique seriously. I'd push back on parts of it, but I want to acknowledge where I think you're right before I do.",
      tr_explanation:
        "'I don't agree, my work is correct' = savunmacı + kibirli ton, komitede zayıflık. Doğru: önce eleştiriyi ciddiye al, kabul edilebilir kısımları kabul et, sonra geri kalanına ölçülü itiraz et.",
    },
    {
      id: "ex.ab2.10.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Doktora komitesi önündesin — bir bölümünü savunuyorsun. Üç komite üyesi farklı açılardan eleştiri yapacak: yöntem, yorum, ve katkı. Akademik dürüstlük + ölçülü savunma esastır.",
      npc_role: "Dissertation committee",
      setting: "Chapter defense, committee room",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for the chapter. Let me start with the identification strategy. The instrument seems exogenous in your sample, but I'm not convinced it generalises. How do you defend it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|that('s| is) a (fair|legitimate|important) (question|challenge|concern))",
            "(let me (take|address) (that|the (concern|critique)) (seriously|head-?on))",
            "(I (defend|justify|argue for) it on (two|three) grounds)",
            "(institutional (context|knowledge|details)|placebo|robustness|sensitivity)",
            "(but (I (do |would |should )?(acknowledge|grant|concede))|you('re| are) right that)",
            "(I would not claim|I('m| am) not claiming|the (limitation|caveat) is)",
          ],
          hint_tr:
            "Yapı: 1) Ciddiye al 2) Üç delille savun 3) Sınırlılığı kabul et. 'Fair question. I defend it on three grounds: institutional context, placebo tests, and robustness checks. But I do acknowledge the limitation that...'",
        },
        {
          speaker: "npc",
          message:
            "Okay. My concern is with interpretation. The pattern you describe is consistent with two stories — yours, and a confounding story I'd find equally plausible. Why your reading?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me take that alternative (interpretation|reading|story) seriously)",
            "(the (confounding|alternative) story|that reading)",
            "(my reading is (supported|favoured|preferred) by (three|several))",
            "(timing|dosage|heterogeneity|sub-?sample|placebo|pre-?trend)",
            "(but I (want to|should) (acknowledge|concede)|I (won't|wouldn't) claim it('s| is) settled)",
            "(more evidence (would|could) (help|clarify)|I see this as (an open|a partial))",
          ],
          hint_tr:
            "'Let me take that alternative seriously. My reading is favoured by [three pieces of evidence: timing, dosage, sub-sample]. But I wouldn't claim it's settled — more evidence would help.'",
        },
        {
          speaker: "npc",
          message:
            "Let me put this bluntly — even granting all that, what's the contribution? What does the field gain that it didn't have?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|direct|that('s| is) the (right|hardest|most important) question)",
            "(the (contribution|novel contribution|key insight))",
            "(builds on|extends|departs from|complements)",
            "(in (a |an )?(setting|context|case) (where|that))",
            "(generali[sz]able|portable|other researchers can (use|apply|build on))",
            "(I would not claim (it('s| is) (a |the )?(paradigm|major) shift|it (overturns|revolutioni[sz]es))|the contribution is (incremental|modest|targeted))",
          ],
          hint_tr:
            "Net + ölçülü: 'The contribution is [X] in a setting where [Y]. I'd build on [Z]. I won't claim it's a paradigm shift — it's a targeted contribution, but a generalisable one.'",
        },
        {
          speaker: "npc",
          message:
            "Final question. If you had to flag one thing you'd do differently — what would it be?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|the (honest|truthful) answer|if I('m| am) being honest)",
            "(if I were starting again|in hindsight|looking back)",
            "(I would|I'd) (collect|design|frame|specify|pre-?register)",
            "(the (chapter|paper) would be (stronger|tighter|cleaner) if)",
            "(I (didn't|did not) (anticipate|appreciate|realise)|I underestimated)",
            "(but I take that as (a |the )?(lesson|learning|cost of))",
          ],
          hint_tr:
            "Dürüst + büyüme zihni: 'Honestly, in hindsight I'd have pre-registered the analysis. The chapter would be tighter. I didn't appreciate how much that would matter — I take that as a lesson for the next paper.'",
        },
        {
          speaker: "npc",
          message:
            "That's a mature answer. We'll deliberate and send written comments within two weeks.",
        },
      ],
    },
    {
      id: "ex.ab2.10.7",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "Let me take that critique seriously before I push back on parts of it.",
      tr_hint:
        "Komitede ölçülü savunma kalıbı. Tonlama: 'take that critique seriously' yumuşak; 'push back on parts of it' kararlı.",
    },
    {
      id: "ex.ab2.10.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I accept the limitation, but the contribution remains generalisable.",
      ipa: "aɪ əkˈsɛpt ðə ˌlɪmɪˈteɪʃən bʌt ðə ˌkɒntrɪˈbjuːʃən rɪˈmeɪnz ˌdʒɛnərəˈlaɪzəbəl",
      tr_hint:
        "Tez savunması ölçülü kabul. 'Accept' = 'ık-SEPT'. 'Generalisable' = 5 hece, vurgu 4. hecede. Net + güvenli ton.",
    },
    {
      id: "ex.ab2.10.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Let me concede that point and then push back on a related framing my colleagues haven't addressed.",
      voice_hint: "male_uk",
      tr_hint:
        "Defans ritmi. 'Concede that point' kabul + 'push back on a related framing' itiraz. Akademik dengeyi yakala.",
    },
    {
      id: "ex.ab2.10.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "How would you respond to a peer-reviewer who said your methodology cannot be replicated outside this dataset?",
      transcription_target:
        "How would you respond to a peer-reviewer who said your methodology cannot be replicated outside this dataset?",
      tr_hint:
        "Sözlü savunma sorusu. 'Peer-reviewer' = hakem. 'Replicated outside this dataset' = bu veri setinin dışında tekrar edilebilir.",
    },
    {
      id: "ex.ab2.10.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "limitation",
      tr_translation: "Sınırlılık",
      example:
        "I want to flag a limitation up front — the external validity of these findings is bounded by the sample I drew from.",
      example_tr:
        "Bir sınırlılığı baştan belirtmek istiyorum — bu bulguların dış geçerliliği aldığım örnekle sınırlı.",
    },
    {
      id: "ex.ab2.10.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "The committee is wrong, my methodology is perfect and they didn't understand what I did.",
      correct_sentence:
        "I'd push back on that reading of my methodology — I think there's a misunderstanding I can clarify, but I'll also concede where the limitation is genuine.",
      tr_explanation:
        "'Committee is wrong, they didn't understand' karakter sinyali — defansif ve kibirli. Doktora savunmasında dil: 'push back on that reading' (fikre itiraz), 'misunderstanding I can clarify' (açıklama fırsatı), 'concede where the limitation is genuine' (mütevazı kabul). Denge gerek.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const academicB2Lessons: ReadonlyArray<BundledLesson> = [
  academicB2Lesson_1,
  academicB2Lesson_2,
  academicB2Lesson_3,
  academicB2Lesson_4,
  academicB2Lesson_5,
  academicB2Lesson_6,
  academicB2Lesson_7,
  academicB2Lesson_8,
  academicB2Lesson_9,
  academicB2Lesson_10,
];

export function getAcademicB2Lesson(id: string): BundledLesson | undefined {
  return academicB2Lessons.find((l) => l.id === id);
}
