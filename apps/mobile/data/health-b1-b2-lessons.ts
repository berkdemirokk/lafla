// Health (Sağlık) — B1-B2 lessons (30).
// Audience: Turkish adults navigating English-speaking healthcare (US/UK).
// Voice: hedged, polite-assertive, clinical English for medical contexts.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// 1. health.specialist.derm.1 — Dermatologa lekem hakkında
// ============================================================
const lesson_derm_1: BundledLesson = {
  id: "health.specialist.derm.1",
  skill_id: "health.specialist",
  index: 1,
  title: "Dermatoloğa Ben Şikayeti",
  description:
    "ABD doktor ofisinde: sırtındaki yeni beni göster, biyopsi gerekip gerekmediğini kibarca sor.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.derm.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "biopsy",
      tr_translation: "Biyopsi (doku örneği alma)",
      example: "Should we do a biopsy to be safe?",
      example_tr: "Emin olmak için biyopsi yapalım mı?",
    },
    {
      id: "ex.derm.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD dermatoloji ofisindesin. Sırtındaki yeni beni göstereceksin, şekil değişikliğini tarif edeceksin, biyopsi sorgulayacaksın.",
      npc_role: "Dermatologist",
      setting: "US dermatology clinic",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, what brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) (got|noticed) a (new |strange )?(mole|spot|mark)",
            "there'?s a (new |strange )?(mole|spot|mark) on my (back|skin)",
            "(i'?m|im) (worried|concerned) about a (mole|spot)",
            "a (mole|spot) on my back has (changed|grown)",
            "(can|could) you (look at|check) (a |this )?(mole|spot)",
            "i (wanted|want) (you )?to (look at|check) (a )?(mole|spot)",
          ],
          hint_tr:
            "Sebebini söyle: 'I've noticed a new mole on my back' veya 'I'm worried about a mole'.",
        },
        {
          speaker: "npc",
          message: "Let me take a look. How long has it been there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) (been there |been )(for )?(a few|several|about|maybe) (weeks|months)",
            "(a few|several|about|maybe) (weeks|months)",
            "(i first |first )?noticed (it )?(a few|about|maybe) (weeks|months) ago",
            "(it'?s|its) (changed|grown|gotten bigger) recently",
            "(it'?s|its) changed shape (recently|lately)",
            "(it'?s|its) been (growing|changing) over (the )?(past|last) (few )?(weeks|months)",
          ],
          hint_tr:
            "Süre ve değişim: 'It's changed shape recently' veya 'About three months'.",
        },
        {
          speaker: "npc",
          message: "I see. It does have some irregular borders. We should monitor it closely.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "should we (do|consider) a biopsy",
            "(could|can) (we|you) (do|take) a biopsy",
            "(do|would) (you |we )?(need|recommend) a biopsy",
            "(is|would) a biopsy (necessary|needed|a good idea)",
            "(i'?d|i would) (feel|be) (better|more comfortable) with a biopsy",
            "what about a biopsy",
          ],
          hint_tr:
            "Biyopsi öner: 'Should we do a biopsy?' veya 'Would a biopsy be necessary?'",
        },
        {
          speaker: "npc",
          message: "That's reasonable. Given the changes, a biopsy is a sensible next step.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(when|how soon) (can|could) (we|i) (do|schedule) (it|that)",
            "how long (will|does) (it|the procedure) take",
            "(will|does) it (hurt|be painful)",
            "what (does|will) the procedure (involve|entail)",
            "(when|how soon) will i (get|have) (the )?results",
            "(thank you|thanks)(,)?.{0,30}(when|how)",
          ],
          hint_tr:
            "Süreci sor: 'When can we do it?' veya 'How long will the results take?'",
        },
        {
          speaker: "npc",
          message: "We can do it next week, and results take about 7 to 10 days.",
        },
      ],
    },
    {
      id: "ex.derm.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Emin olmak için biyopsi yapmamız gerekir mi?",
      target: "Should we do a biopsy just to be safe?",
      accepted_variants: [
        "Should we do a biopsy to be safe?",
        "Would a biopsy be necessary just to be sure?",
        "Do we need a biopsy to rule things out?",
        "Could we do a biopsy just to be safe?",
        "Should we consider a biopsy to be on the safe side?",
      ],
      tr_hint:
        "'Just to be safe' = emin olmak için. 'Should we...' nazik öneri.",
    },
    {
      id: "ex.derm.1.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Biyopsi' İngilizce karşılığı?",
          options: ["biology", "biopsy", "bioscan", "biograft"],
          correct_index: 1,
          tr_explanation: "'Biopsy' = doku örneği alıp incelemek.",
        },
        {
          question: "Bir lekede şekil değişikliği nasıl söylenir?",
          options: [
            "It changed his shape",
            "It's changed shape recently",
            "Shape became different",
            "The shape is changing always",
          ],
          correct_index: 1,
          tr_explanation:
            "Present perfect ('has changed') yakın geçmişte yaşanan değişimi anlatır.",
        },
        {
          question: "Doktora kibarca biyopsi önerisi?",
          options: [
            "Make biopsy now!",
            "I want biopsy.",
            "Should we do a biopsy?",
            "Biopsy is required.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Should we...' inclusive (biz dili), doktorla işbirliği tonu.",
        },
      ],
    },
  ],
};

// ============================================================
// 2. health.specialist.ent.1 — KBB tinnitus
// ============================================================
const lesson_ent_1: BundledLesson = {
  id: "health.specialist.ent.1",
  skill_id: "health.specialist",
  index: 2,
  title: "KBB'de Kulak Çınlaması",
  description:
    "ABD ENT ofisinde: sol kulaktaki çınlamayı tarif et — süre, sıklık, tetikleyici belirt.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.ent.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "tinnitus",
      tr_translation: "Kulak çınlaması (tıbbi terim)",
      example: "I've had tinnitus in my left ear for three weeks.",
      example_tr: "Üç haftadır sol kulağımda çınlama var.",
    },
    {
      id: "ex.ent.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD KBB ofisinde: kulak çınlamasını anlat. Süre, sıklık, tetikleyici netleştir.",
      npc_role: "Specialist",
      setting: "US ENT clinic",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. What seems to be the problem?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) (had|been having) a ringing (in|sound in) my (left|right) ear",
            "there'?s (been )?a ringing (in|sound in) my (left|right) ear",
            "(i'?ve|i have) (had|been experiencing) tinnitus",
            "my (left|right) ear has been ringing",
            "ringing in my (left|right) ear",
            "(i'?m|im) (getting|having) (a )?ringing (sound )?in my ear",
          ],
          hint_tr:
            "Şikayeti anlat: 'There's been a ringing in my left ear' veya 'I've had tinnitus'.",
        },
        {
          speaker: "npc",
          message: "How long has this been going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about |around |roughly )?(three|two|four) weeks( now)?",
            "for (about |around )?(three|two|four) weeks",
            "(it'?s|its) been (about |around )?(three|two|four) weeks",
            "(a few|several) weeks (now)?",
            "since (about |around )?(three|two|four) weeks ago",
          ],
          hint_tr: "Süreyi belirt: 'For about three weeks now'.",
        },
        {
          speaker: "npc",
          message: "Is it constant or does it come and go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it )?comes and goes",
            "(it'?s|its) (mostly )?(constant|continuous|all the time)",
            "(it'?s|its) (worse|louder) (at night|in quiet rooms|when it'?s quiet)",
            "(mostly )?(at night|in the evening|when (it'?s|its) quiet)",
            "(off and on|on and off)",
            "(it'?s|its) intermittent",
          ],
          hint_tr:
            "Sıklığı tarif: 'It comes and goes' veya 'It's worse at night'.",
        },
        {
          speaker: "npc",
          message: "Any recent loud noise exposure or ear infections?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not that i (know|recall|remember))",
            "(yes|yeah)(,)?.{0,30}(concert|loud|noise|music|infection)",
            "(i'?ve|i have) been (to|at) (a |some )?(concerts?|loud)",
            "(no |i don'?t think )(any|so)",
            "(i'?m|im) not sure",
            "not (really|that i recall)",
          ],
          hint_tr:
            "Tetikleyiciyi söyle: 'Not that I recall' veya 'I went to a concert recently'.",
        },
        {
          speaker: "npc",
          message: "Alright, let's do a hearing test and check your ear canals.",
        },
      ],
    },
    {
      id: "ex.ent.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Üç haftadır sol kulağımda bir çınlama var.",
      target: "There's been a ringing in my left ear for about three weeks.",
      accepted_variants: [
        "I've had a ringing in my left ear for three weeks.",
        "There's been a ringing in my left ear for three weeks now.",
        "My left ear has been ringing for about three weeks.",
        "I've had tinnitus in my left ear for three weeks.",
        "I've been hearing a ringing in my left ear for three weeks.",
      ],
      tr_hint:
        "'There's been' veya 'I've had' — present perfect süreklilik anlatır.",
    },
    {
      id: "ex.ent.1.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Kulak çınlaması' tıbbi terimi?",
          options: ["tinnitus", "vertigo", "otitis", "migraine"],
          correct_index: 0,
          tr_explanation: "'Tinnitus' = subjektif kulak çınlaması terimi.",
        },
        {
          question: "'Geliyor gidiyor' nasıl söylenir?",
          options: [
            "It coming going",
            "It comes and goes",
            "It is come and gone",
            "Coming and going it",
          ],
          correct_index: 1,
          tr_explanation:
            "'Comes and goes' = aralıklı, sabit deyim.",
        },
        {
          question: "Süre + present perfect doğru kullanımı?",
          options: [
            "I have it since three weeks",
            "I had it for three weeks",
            "It's been there for three weeks",
            "It is there three weeks",
          ],
          correct_index: 2,
          tr_explanation:
            "'It's been there for [duration]' = present perfect + 'for'.",
        },
      ],
    },
  ],
};

// ============================================================
// 3. health.specialist.gastro.1 — Gastro IBS
// ============================================================
const lesson_gastro_1: BundledLesson = {
  id: "health.specialist.gastro.1",
  skill_id: "health.specialist",
  index: 3,
  title: "Gastroenteroloğa Şişkinlik",
  description:
    "ABD GI ofisinde: yemek sonrası şişkinliği anlat, IBS ihtimalini sor, diyet günlüğü önerisine cevap ver.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.gastro.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "bloating",
      tr_translation: "Şişkinlik (karında)",
      example: "I get bloating after most meals.",
      example_tr: "Yemeklerden sonra çoğu zaman şişkinlik oluyor.",
    },
    {
      id: "ex.gastro.1.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD gastroenteroloji ofisinde: kronik şişkinliği anlat, IBS sorgula, sonraki adım iste.",
      npc_role: "Specialist",
      setting: "US gastroenterology clinic",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what's been bothering you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) been (getting|having|experiencing) (a lot of )?bloating",
            "i get (really )?bloated after (most )?meals",
            "(i'?m|im) bloated (a lot|often|after meals)",
            "(i'?ve|i have) (been )?(getting|having) (stomach|abdominal) (issues|problems)",
            "my (stomach|belly) gets bloated",
            "(i'?ve|i have) been having (stomach|gut|digestive) (issues|problems)",
          ],
          hint_tr:
            "Şikayeti anlat: 'I get bloated after most meals' veya 'I've been having a lot of bloating'.",
        },
        {
          speaker: "npc",
          message: "How long has this been going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?(several|a few|about) months( now)?",
            "(it'?s|its) been (going on )?for (several|a few|about) months",
            "(about|around) (six|three|four) months",
            "(over|more than) (a year|six months)",
            "(it'?s|its) been (gradual|getting worse)",
          ],
          hint_tr: "Süreyi belirt: 'For several months now'.",
        },
        {
          speaker: "npc",
          message: "Any specific trigger foods?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dairy|gluten|bread|onions|beans|carbs|fatty foods)",
            "(i'?ve|i have) noticed (it'?s|its) worse with (dairy|gluten|bread|onions)",
            "(not |nothing )(specific|in particular)",
            "(i'?m|im) not (sure|certain)",
            "(i haven'?t|i have not) (really |been able to )?(figured|worked) (it )?out",
            "(it )?seems (random|unpredictable)",
          ],
          hint_tr:
            "Tetikleyici: 'Dairy and onions seem to make it worse' veya 'I'm not sure'.",
        },
        {
          speaker: "npc",
          message: "We might want to look into food intolerances or IBS.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|do you think) it (could|might) be (i\\.?b\\.?s\\.?|ibs)",
            "(is|could) (this|it) be ibs",
            "(what|how) (would|can) (you|we) (rule out|test for) ibs",
            "(i'?ve|i have) been wondering about ibs",
            "(do you|would you) think (it'?s|its) ibs",
          ],
          hint_tr:
            "IBS ihtimalini sor: 'Could it be IBS?' veya 'Do you think it might be IBS?'",
        },
        {
          speaker: "npc",
          message:
            "Possibly. I'd like you to keep a food diary for two weeks, and we'll go from there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|okay|alright|that sounds (good|fine|reasonable))",
            "(should|how should) i (track|record|write down)",
            "(what|how detailed) should i (include|note|log)",
            "(thanks|thank you)(,)?.{0,30}(will do|i can do that)",
            "i can (do|start) that",
            "(any|do you have a) (form|template)",
          ],
          hint_tr:
            "Cevap: 'Sure, what should I track?' veya 'Of course, I can do that'.",
        },
        {
          speaker: "npc",
          message:
            "Just log meals, times, and any symptoms. Bring it to your follow-up in two weeks.",
        },
      ],
    },
    {
      id: "ex.gastro.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sizce IBS olabilir mi?",
      target: "Could it be IBS?",
      accepted_variants: [
        "Do you think it could be IBS?",
        "Could this be IBS?",
        "Do you think it might be IBS?",
        "Is there a chance it's IBS?",
        "Could it possibly be IBS?",
      ],
      tr_hint:
        "'Could it be...?' = ihtimal sorma, kibar tahmin.",
    },
    {
      id: "ex.gastro.1.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Şişkinlik' (karında) İngilizce?",
          options: ["swelling", "bloating", "puffing", "fluffing"],
          correct_index: 1,
          tr_explanation:
            "Karın şişkinliği için 'bloating' kullanılır. 'Swelling' genel şişlik.",
        },
        {
          question: "'IBS' açılımı?",
          options: [
            "Internal Bowel Syndrome",
            "Irritable Bowel Syndrome",
            "Inflamed Body System",
            "Intermittent Bowel Spasm",
          ],
          correct_index: 1,
          tr_explanation:
            "'Irritable Bowel Syndrome' = huzursuz bağırsak sendromu.",
        },
        {
          question: "'Yemeklerden sonra çoğu zaman' nasıl söylenir?",
          options: [
            "After most foods",
            "After most meals",
            "After all meal",
            "After much eating",
          ],
          correct_index: 1,
          tr_explanation:
            "'After most meals' = öğünlerin çoğundan sonra.",
        },
      ],
    },
  ],
};

// ============================================================
// 4. health.specialist.cardio.1 — Kardiyolog çarpıntı
// ============================================================
const lesson_cardio_1: BundledLesson = {
  id: "health.specialist.cardio.1",
  skill_id: "health.specialist",
  index: 4,
  title: "Kardiyologda Çarpıntı",
  description:
    "ABD kardiyoloji ofisinde: gece çarpıntılarını tarif et, stres faktörünü dışla, EKG ve Holter monitörü iste.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.cardio.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "palpitations",
      tr_translation: "Çarpıntı (kalp)",
      example: "I've been having palpitations at night.",
      example_tr: "Geceleri çarpıntılarım oluyor.",
    },
    {
      id: "ex.cardio.1.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD kardiyoloji ofisinde: gece çarpıntılarını anlat, tetikleyici/stres tartış, EKG iste.",
      npc_role: "Specialist",
      setting: "US cardiology clinic",
      turns: [
        {
          speaker: "npc",
          message: "What brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "my heart('?s| has| has been) (been )?racing",
            "(i'?ve|i have) been (having|getting|experiencing) palpitations",
            "(i'?ve|i have) been (feeling|having) (heart )?(palpitations|racing|pounding)",
            "my heart (pounds|races|beats fast) at night",
            "(i'?m|im) getting (heart )?palpitations",
            "(i feel|i'?ve been feeling) my heart (racing|pounding)",
          ],
          hint_tr:
            "Çarpıntıyı tarif et: 'My heart's been racing at night' veya 'I've been having palpitations'.",
        },
        {
          speaker: "npc",
          message: "How often does this happen?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a few|several|three|four) times a week",
            "(mostly )?at night",
            "(it )?happens (a few|several|three|four) times",
            "(almost )?every (night|day)",
            "(maybe|about|around) (twice|three times) a week",
            "(it'?s|its) (random|unpredictable|sporadic)",
          ],
          hint_tr:
            "Sıklığı belirt: 'A few times a week, mostly at night'.",
        },
        {
          speaker: "npc",
          message: "Any stress lately? Caffeine intake?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(work has been|i'?ve been) (stressful|stressed)",
            "(some|a bit of) stress at work",
            "(not really|nothing unusual)",
            "(i (drink|have) )?(one |two )?(cups? of )?coffee( a day)?",
            "(i'?ve|i have) (cut back|reduced) on caffeine",
            "(no |hardly any )(more than usual|caffeine)",
          ],
          hint_tr:
            "Stres/kafein tartış: 'Work has been stressful, but I've cut back on caffeine'.",
        },
        {
          speaker: "npc",
          message: "Have you had any chest pain or shortness of breath?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not really|no chest pain)",
            "(some|a bit of) shortness of breath",
            "(only|just) when (it'?s|its) happening",
            "(no |nothing) (serious|major)",
            "(slight |mild )?(chest tightness|breathlessness)",
            "(only|just) (during|at the time)",
          ],
          hint_tr:
            "Ek belirti: 'No chest pain, but some shortness of breath when it happens'.",
        },
        {
          speaker: "npc",
          message: "Let's do a baseline EKG today and discuss further testing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|would|can) (we|you) (also )?(do|consider) (a )?(holter|24.?hour) (monitor|monitoring)",
            "(what about|how about) (a )?holter (monitor|monitoring)",
            "(should|could) (we|i) (also )?(wear|use) a holter",
            "(would|could) a holter monitor be (useful|helpful)",
            "(thank you|thanks)(,)?.{0,40}(holter|monitor)",
          ],
          hint_tr:
            "Holter iste: 'Could we also consider a Holter monitor?'",
        },
        {
          speaker: "npc",
          message:
            "Good thinking. I'll order a 48-hour Holter to capture episodes.",
        },
      ],
    },
    {
      id: "ex.cardio.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Geceleri sebepsiz yere kalbim hızlı atıyor.",
      target: "My heart's been racing at night for no clear reason.",
      accepted_variants: [
        "My heart's been pounding at night with no clear cause.",
        "I've been getting palpitations at night for no reason.",
        "My heart races at night without any clear trigger.",
        "I've been having palpitations at night without any obvious cause.",
        "My heart has been racing at night for no apparent reason.",
      ],
      tr_hint:
        "'For no clear reason' = sebepsiz, anlaşılmaz şekilde.",
    },
    {
      id: "ex.cardio.1.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Çarpıntı' tıbbi terimi?",
          options: ["palpation", "palpitations", "pulsations", "perfusions"],
          correct_index: 1,
          tr_explanation:
            "'Palpitations' = hissedilen kalp çarpıntısı.",
        },
        {
          question: "'Holter monitor' ne işe yarar?",
          options: [
            "Tek seferlik kalp çekimi",
            "24-48 saat sürekli kalp ritmi kaydı",
            "Sadece tansiyon ölçer",
            "Kan testidir",
          ],
          correct_index: 1,
          tr_explanation:
            "Holter taşınabilir, uzun süreli EKG kaydı yapar.",
        },
        {
          question: "'Sebepsiz yere' kalıbı?",
          options: [
            "Without no reason",
            "For no clear reason",
            "Reason no for",
            "Because of nothing",
          ],
          correct_index: 1,
          tr_explanation:
            "'For no clear reason' = anlaşılmaz sebeple, doğal kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// 5. health.specialist.derm.2 — Dermatolog egzama
// ============================================================
const lesson_derm_2: BundledLesson = {
  id: "health.specialist.derm.2",
  skill_id: "health.specialist",
  index: 5,
  title: "Egzama ve Steroid Endişesi",
  description:
    "İngiltere'de dermatoloji randevusu: yüzdeki egzama için uzun vadeli steroid kullanımından endişeli — alternatif iste.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.derm.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "side effects",
      tr_translation: "Yan etkiler",
      example: "I'm worried about the long-term side effects of steroids.",
      example_tr: "Steroidlerin uzun vadeli yan etkilerinden endişeliyim.",
    },
    {
      id: "ex.derm.2.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İngiltere'de GP sonrası dermatoloji: yüz egzaması için steroid yazıldı — alternatif sor, non-steroidal seçenek araştır.",
      npc_role: "Dermatologist",
      setting: "UK dermatology clinic",
      turns: [
        {
          speaker: "npc",
          message: "How's the steroid cream been working for your eczema?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) (been )?(working|helping) but",
            "(it )?(helps|works) but (i'?m|im) (a bit |slightly )?(worried|concerned)",
            "(i'?m|im) (a bit |slightly )?(worried|concerned) about (using it )?(long.?term|for too long)",
            "(it'?s|its) helping (but|though) (i'?m|im) (worried|concerned)",
            "(i'?ve|i have) been (worried|concerned) about long.?term (steroid )?use",
          ],
          hint_tr:
            "Endişe belirt: 'It's working, but I'm worried about long-term use on my face'.",
        },
        {
          speaker: "npc",
          message: "That's a reasonable concern. What specifically worries you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(skin )?thinning (of the skin)?",
            "(i'?ve|i have) (heard|read) about (skin thinning|side effects)",
            "long.?term (side effects|use)",
            "(the )?(side effects|risks) of (long.?term|prolonged) (steroid )?use",
            "using (it|steroids) on my face",
            "(steroid )?dependency",
          ],
          hint_tr:
            "Spesifik endişe: 'I've heard about skin thinning' veya 'Long-term side effects'.",
        },
        {
          speaker: "npc",
          message:
            "Those are valid concerns. There are non-steroidal options we could try.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|which) (non.?steroidal )?(options|alternatives) (are|do) (we|i) have",
            "(could|can) (we|you) (try|consider) (a )?non.?steroidal",
            "(what'?s|what is) (the )?non.?steroidal (option|treatment)",
            "(could|can) you (tell|walk) me (through|about) (the alternatives)",
            "(would|could) (a )?non.?steroidal (treatment )?(work|be better)",
          ],
          hint_tr:
            "Alternatif iste: 'What non-steroidal options do we have?'",
        },
        {
          speaker: "npc",
          message:
            "Calcineurin inhibitors like tacrolimus are commonly used for facial eczema.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what are|any) (the )?side effects (of (that|tacrolimus))?",
            "(how|how long) (does|do) (it|they) take to work",
            "(is|are) it (safe|approved) for long.?term use",
            "(could|can) you tell me more about (that|tacrolimus)",
            "(how )?(does it|do they) compare to (the )?steroids",
            "(what'?s|what is) the (success rate|usual outcome)",
          ],
          hint_tr:
            "Detay sor: 'What are the side effects?' veya 'Is it safe long-term?'",
        },
        {
          speaker: "npc",
          message:
            "Mild burning at first, but generally well-tolerated. Safe for long-term use on the face.",
        },
      ],
    },
    {
      id: "ex.derm.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Yüzümde uzun vadeli steroid kullanımından biraz endişeliyim.",
      target:
        "I'm a bit worried about long-term steroid use on my face.",
      accepted_variants: [
        "I'm a little concerned about using steroids on my face long-term.",
        "I'm slightly worried about long-term steroid use on my face.",
        "I'm concerned about using steroid cream on my face for too long.",
        "I have some concerns about long-term steroid use on my face.",
        "I'm a bit worried about prolonged steroid use on my face.",
      ],
      tr_hint:
        "'A bit worried' = biraz endişeli (hedged). 'Long-term' = uzun vadeli.",
    },
    {
      id: "ex.derm.2.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Yan etkiler' İngilizce?",
          options: ["side problems", "side effects", "after effects", "edge effects"],
          correct_index: 1,
          tr_explanation:
            "'Side effects' = ilacın yan etkileri, sabit terim.",
        },
        {
          question: "'Non-steroidal' ne demek?",
          options: ["Steroid olmayan", "İki yönlü steroid", "Steroid kremi", "Steroid alerji"],
          correct_index: 0,
          tr_explanation:
            "'Non-' öneki = -sız/-siz. 'Non-steroidal' = steroid içermeyen.",
        },
        {
          question: "Endişeli hedged ton?",
          options: [
            "I am very worried!",
            "I'm a bit worried about...",
            "I refuse the steroid",
            "Steroids are bad",
          ],
          correct_index: 1,
          tr_explanation:
            "'A bit worried' = sezeryan ton — kibar ama net.",
        },
      ],
    },
  ],
};

// ============================================================
// 6. health.specialist.ent.2 — KBB kronik sinüzit
// ============================================================
const lesson_ent_2: BundledLesson = {
  id: "health.specialist.ent.2",
  skill_id: "health.specialist",
  index: 6,
  title: "Kronik Sinüzit ve Ameliyat",
  description:
    "ABD KBB ofisinde: spreyler işe yaramadı, cerrahi vs. konservatif tedavi seçeneklerini tartış.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.ent.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "chronic sinusitis",
      tr_translation: "Kronik sinüzit",
      example: "I've been dealing with chronic sinusitis for over a year.",
      example_tr: "Bir yıldan fazladır kronik sinüzitle uğraşıyorum.",
    },
    {
      id: "ex.ent.2.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD KBB ofisinde: nazal sprey başarısız oldu, cerrahi vs. medikal tedavi seçenekleri sor.",
      npc_role: "Specialist",
      setting: "US ENT clinic",
      turns: [
        {
          speaker: "npc",
          message: "How have the nasal sprays been working?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?sprays haven'?t really helped",
            "(they|the sprays) (haven'?t|aren'?t) (really )?(working|helping)",
            "(i'?ve|i have) tried (them|the sprays) but (no real|little) (improvement|effect)",
            "(honestly|to be honest)(,)? (they|the sprays) haven'?t helped",
            "(not much|hardly any) (change|improvement)",
            "(the |my )?(symptoms|congestion) (haven'?t|hasn'?t) improved",
          ],
          hint_tr:
            "Sonucu söyle: 'The sprays haven't really helped' veya 'No real improvement'.",
        },
        {
          speaker: "npc",
          message: "I see. What are your symptoms like now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(constant |chronic )?(congestion|stuffiness|pressure)",
            "(my )?(nose is|nose'?s) (always |constantly )?(blocked|stuffed up)",
            "(facial|sinus) pressure",
            "(i can'?t|cannot) (breathe|smell) (properly|well)",
            "(headaches|sinus headaches)",
            "(post.?nasal )?drip",
          ],
          hint_tr:
            "Belirtileri özetle: 'Constant congestion and sinus pressure'.",
        },
        {
          speaker: "npc",
          message: "What are my options at this point?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|so) are my options",
            "(could|can) you (walk|talk) me through (my )?(options|choices)",
            "(what|which) (are |would be )?(the )?(next steps|options)",
            "(what do you|where do we) recommend (next|going from here)",
            "(could|can) (we|you) (discuss|consider) (surgery|surgical options)",
            "(is|would) surgery (an option|necessary)",
          ],
          hint_tr:
            "Seçenekleri sor: 'What are my options?' veya 'Could we discuss surgery?'",
        },
        {
          speaker: "npc",
          message:
            "We could try a stronger course of oral steroids, or look at endoscopic sinus surgery.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s|what is) (the |a )?(success rate|recovery time)",
            "(how |how long )(is|does) (the )?recovery",
            "(what|how) (would|does) (the )?surgery (involve|entail)",
            "(could|can) you (tell|walk) me (more |through )?about (the )?surgery",
            "(what are|any) (the )?risks (of surgery)?",
            "(how soon|when) (could|would) (we|i) (schedule|do) (it|the surgery)",
          ],
          hint_tr:
            "Detay iste: 'What's the recovery time?' veya 'What are the risks?'",
        },
        {
          speaker: "npc",
          message:
            "Recovery is usually two weeks. Success rate is around 80% for cases like yours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like (some |a bit of )?time to (think|consider)",
            "(could|can) i (get|have) a second opinion",
            "(let me|i'?d like to) (think|consider) (about )?(it|this)",
            "(thank you|thanks)(,)?.{0,30}(think|consider)",
            "(i need|i'?ll need) to (think|weigh)",
            "(could|can) you (send|share) (me )?(some )?(information|literature)",
          ],
          hint_tr:
            "Düşünme zamanı iste: 'I'd like some time to think about it'.",
        },
        {
          speaker: "npc",
          message: "Of course — take your time. Call us when you're ready.",
        },
      ],
    },
    {
      id: "ex.ent.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Spreyler pek işe yaramadı. Seçeneklerim neler?",
      target: "The sprays haven't really helped. What are my options?",
      accepted_variants: [
        "The nasal sprays haven't really worked. What are my options?",
        "The sprays didn't really help. What can we do next?",
        "The sprays haven't done much. What are the next steps?",
        "The sprays aren't really working. What options do I have?",
        "The sprays haven't really helped, so what are my options?",
      ],
      tr_hint:
        "'Haven't really helped' = pek işe yaramadı (hedged negatif).",
    },
    {
      id: "ex.ent.2.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Kronik' İngilizce karşılığı?",
          options: ["acute", "chronic", "sudden", "passing"],
          correct_index: 1,
          tr_explanation: "'Chronic' = uzun süreli, sürekli. 'Acute' = akut.",
        },
        {
          question: "Cerrahi seçeneği kibarca sormak?",
          options: [
            "I want surgery now",
            "Could we discuss surgery?",
            "Surgery is required",
            "Will you do surgery?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could we discuss...?' = tartışmayı önerme, inclusive.",
        },
        {
          question: "Karar için düşünme zamanı iste?",
          options: [
            "I will think later",
            "I'd like some time to think about it",
            "Wait, I'm not sure",
            "Don't decide for me",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd like some time to think about it' = kibar düşünme talebi.",
        },
      ],
    },
  ],
};

// ============================================================
// 7. health.specialist.gastro.2 — Endoskopi öncesi
// ============================================================
const lesson_gastro_2: BundledLesson = {
  id: "health.specialist.gastro.2",
  skill_id: "health.specialist",
  index: 7,
  title: "Endoskopi Öncesi Sorular",
  description:
    "ABD GI ofisinde: endoskopi öncesi sedasyon, ev dönüşü, yeme yasağı gibi lojistik soruları sor.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.gastro.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sedation",
      tr_translation: "Sedasyon (yatıştırıcı uygulama)",
      example: "How long will I be under sedation?",
      example_tr: "Ne kadar süre sedasyon altında olacağım?",
    },
    {
      id: "ex.gastro.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Endoskopi öncesi sorular: sedasyon süresi, eve gidiş, NPO talimatları.",
      npc_role: "Specialist",
      setting: "US GI clinic, pre-procedure",
      turns: [
        {
          speaker: "npc",
          message: "Do you have any questions before the procedure?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "how long (will|am) i (be )?(sedated|under sedation)",
            "how long (does|will) (the )?(sedation|procedure) last",
            "how long will i be (under|asleep|out)",
            "(what|how) (about|long) (the )?sedation",
            "(could|can) you tell me about (the )?sedation",
            "(how much|what kind of) sedation (will|do) you use",
          ],
          hint_tr:
            "Sedasyon süresini sor: 'How long will I be sedated?'",
        },
        {
          speaker: "npc",
          message:
            "Sedation lasts about 30 minutes, but you'll feel groggy for a few hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|will) i (drive|drive home) (after|afterwards)",
            "(am|will i be) (able|allowed) to drive",
            "(do|will) i need (a ride|someone to drive me)",
            "(should|do) i (arrange|bring) a ride",
            "(can i|am i (able|allowed) to) (work|go (back to|home)) (after|right away)",
            "(any|are there) (driving|movement) restrictions",
          ],
          hint_tr:
            "Eve dönüş: 'Can I drive home after?' veya 'Do I need a ride?'",
        },
        {
          speaker: "npc",
          message:
            "No driving for 24 hours. You'll need someone to take you home.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(when|how long before) do i (stop|need to stop) (eating|food)",
            "(any|are there) (food|eating) restrictions",
            "(what'?s|what is) (the )?npo (rule|time|policy)",
            "(can|should) i (eat|drink) (anything )?(the night before|that morning)",
            "(when'?s|when is) (the )?(last meal|cutoff)",
            "(any|what about) water",
          ],
          hint_tr:
            "Yeme yasağını sor: 'When do I stop eating?' veya 'Any food restrictions?'",
        },
        {
          speaker: "npc",
          message:
            "No food or drink after midnight the night before. Sips of water are okay up to two hours prior.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|how) about my (medications|meds)",
            "(should|can) i (take|continue) my (regular )?(medications|meds)",
            "(any|are there) (medication|drug) (restrictions|adjustments)",
            "(do|should) i (skip|hold) my (medications|meds)",
            "(what'?s|what is) (the protocol|the rule) for (my )?(meds|medications)",
          ],
          hint_tr:
            "İlaç durumu: 'What about my medications?' veya 'Should I take my meds?'",
        },
        {
          speaker: "npc",
          message:
            "Take blood pressure meds with sips of water. Hold diabetes meds — we'll review the list.",
        },
      ],
    },
    {
      id: "ex.gastro.2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sonrasında arabayı kullanabilir miyim?",
      target: "Can I drive home after?",
      accepted_variants: [
        "Will I be able to drive home afterwards?",
        "Am I allowed to drive after the procedure?",
        "Can I drive myself home after?",
        "Will I be okay to drive after?",
        "Is it safe to drive home afterwards?",
      ],
      tr_hint:
        "'Drive home after?' = sonrasında eve araba ile dönüş.",
    },
    {
      id: "ex.gastro.2.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Sedasyon' İngilizce?",
          options: ["sedation", "sleeping", "anesthetic", "narcotic"],
          correct_index: 0,
          tr_explanation:
            "'Sedation' = bilinçli yatıştırma. 'Anesthesia' = tam anestezi (daha derin).",
        },
        {
          question: "'NPO' kuralı ne demek?",
          options: [
            "İlaç değişimi",
            "İşlem öncesi yememe-içmeme",
            "Tedaviyi reddetme",
            "Anestezi tipi",
          ],
          correct_index: 1,
          tr_explanation:
            "'NPO' = Latin 'nil per os' (ağızdan hiçbir şey alma).",
        },
        {
          question: "Eve dönüş için yardım iste?",
          options: [
            "Bring me home, please",
            "Will I need a ride home?",
            "Take me home now",
            "Drive me, doctor",
          ],
          correct_index: 1,
          tr_explanation:
            "'Will I need a ride home?' = eve gidiş için biri lazım mı.",
        },
      ],
    },
  ],
};

// ============================================================
// 8. health.insurance.coverage.1 — Sigorta kapsamı
// ============================================================
const lesson_insurance_coverage: BundledLesson = {
  id: "health.insurance.coverage.1",
  skill_id: "health.insurance",
  index: 8,
  title: "Sigorta Kapsamı Sorgu",
  description:
    "ABD'de sigorta hattını ara: prosedür kodu ver, 'in-network' mi sor, ceptenödeyeceğin tutarı öğren.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.ins.cov.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "in-network",
      tr_translation: "Sigorta ağı içinde (anlaşmalı)",
      example: "Is this provider in-network with my plan?",
      example_tr: "Bu sağlık sağlayıcı planımla anlaşmalı mı?",
    },
    {
      id: "ex.ins.cov.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD sigorta hattıyla telefonda: prosedür kodunu ver, in-network onaylat, cepten masraf tahmini iste.",
      npc_role: "Insurance representative",
      setting: "US insurance call center",
      turns: [
        {
          speaker: "npc",
          message:
            "Thank you for calling. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) calling to (check|verify|confirm) (coverage|if .{0,30}covered)",
            "(i'?d|i would) like to (check|verify|confirm) (coverage|whether)",
            "(could|can) you (tell|help) me (whether|if) (a procedure|something) is covered",
            "(i'?m|im) trying to (find out|figure out) (if|whether) (.{0,30}covered)",
            "i (have|need to ask about) a (procedure|service) coverage question",
          ],
          hint_tr:
            "Amacını söyle: 'I'm calling to check if a procedure is covered'.",
        },
        {
          speaker: "npc",
          message:
            "Sure, I can help. Do you have the CPT code for the procedure?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (the |it'?s )?(cpt )?code is \\d+",
            "(the )?code is \\d+",
            "(i have it|here it is)(,)? \\d+",
            "(it'?s|its) \\d+",
            "(my doctor|the office) gave me \\d+",
            "yes(,)? \\d+",
          ],
          hint_tr:
            "Kodu paylaş: 'Yes, the code is 45378'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. And the provider's name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dr\\.?|doctor) [a-z]+",
            "(it'?s|its) (dr\\.?|doctor) [a-z]+",
            "(the )?(provider|doctor) is (dr\\.?|doctor) [a-z]+",
            "(the )?(clinic|practice) (name )?is [a-z]+",
            "(it'?s|its) [a-z]+ (clinic|medical|practice)",
          ],
          hint_tr:
            "Sağlayıcı ismini ver: 'Dr. Patel at Riverside Clinic'.",
        },
        {
          speaker: "npc",
          message:
            "Let me check... yes, Dr. Patel is in-network with your plan.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s|what is) (my )?(out.?of.?pocket|estimated) (cost|expense)",
            "how much (would|will) (i|this) (pay|cost) out.?of.?pocket",
            "(any|what about) (a )?(co.?pay|deductible)",
            "(could|can) you (give|estimate) (me )?(an estimate|the cost)",
            "(what'?s|what is) (the )?(co.?pay|deductible) for this",
            "(how much|what amount) (will|do) i (owe|pay)",
          ],
          hint_tr:
            "Cepten masraf iste: 'What's my out-of-pocket cost?' veya 'Any co-pay?'",
        },
        {
          speaker: "npc",
          message:
            "Your co-pay is $40, and you've met 60% of your deductible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) (that|this) (in writing|on paper|via email)",
            "(could|can) you (send|email) me (a )?(written )?(confirmation|estimate)",
            "(thank you|thanks)(,)?.{0,40}(in writing|email|written)",
            "(would|could) you (send|provide) a reference number",
            "(could|can) i (get|have) a confirmation (number|reference)",
          ],
          hint_tr:
            "Yazılı doğrulama iste: 'Could I get a reference number?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Your reference number is 482-A. You'll get an email summary as well.",
        },
      ],
    },
    {
      id: "ex.ins.cov.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu doktor planımla anlaşmalı mı?",
      target: "Is this provider in-network with my plan?",
      accepted_variants: [
        "Is this doctor in-network with my plan?",
        "Does this provider take my insurance?",
        "Is the doctor in my plan's network?",
        "Is this provider covered by my plan?",
        "Is the doctor in-network for me?",
      ],
      tr_hint:
        "'In-network' = sigortanın anlaşmalı ağı. 'With my plan' = planımla.",
    },
    {
      id: "ex.ins.cov.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'In-network' ne demek?",
          options: [
            "Sigortanın anlaşmalı sağlayıcı ağı",
            "İnternet üzerinden hizmet",
            "Sadece bir hastanede",
            "Acil servis dışı",
          ],
          correct_index: 0,
          tr_explanation:
            "'In-network' provider = sigortanın anlaşma yaptığı doktor/klinik.",
        },
        {
          question: "'CPT kodu' ne için kullanılır?",
          options: [
            "Hasta dosya numarası",
            "Tıbbi prosedür kimlik kodu",
            "Sigorta şirketi numarası",
            "Adres kodu",
          ],
          correct_index: 1,
          tr_explanation:
            "'CPT' = Current Procedural Terminology, prosedür kodlama sistemi.",
        },
        {
          question: "'Out-of-pocket' ne demek?",
          options: [
            "Sigortanın ödediği",
            "Hastanın cepten ödeyeceği",
            "Sadece nakit",
            "İndirimli ücret",
          ],
          correct_index: 1,
          tr_explanation:
            "'Out-of-pocket' = sigorta ödemediği, hastanın cepten ödediği miktar.",
        },
      ],
    },
  ],
};

// ============================================================
// 9. health.insurance.priorauth.1 — Prior auth
// ============================================================
const lesson_priorauth: BundledLesson = {
  id: "health.insurance.priorauth.1",
  skill_id: "health.insurance",
  index: 9,
  title: "Prior Authorization Süreci",
  description:
    "ABD'de MRI için prior authorization gerek: doktor ofisi ile sigorta arasında süreci başlat, gecikmeleri kibarca takip et.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.pa.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "prior authorization",
      tr_translation: "Ön onay (sigortadan prosedür için)",
      example:
        "I was told I need prior authorization for the MRI.",
      example_tr: "MRI için ön onay gerektiği söylendi.",
    },
    {
      id: "ex.pa.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD'de doktor ofisini ara: MRI için prior auth talebini başlat, takip et, gecikme varsa kibarca push et.",
      npc_role: "Insurance representative",
      setting: "US insurance phone line",
      turns: [
        {
          speaker: "npc",
          message:
            "Insurance member services, how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) calling about (a |my )?(prior auth|prior authorization)",
            "(i was told|my doctor said) i need (a )?prior (auth|authorization)",
            "(i'?d|i would) like to (check|follow up) on (a |my )?prior (auth|authorization)",
            "(could|can) (you|we) (help|check) (on|with) (a )?prior auth",
            "(i'?m|im) following up on (a )?prior (auth|authorization)",
          ],
          hint_tr:
            "Konuyu aç: 'I'm calling about a prior authorization for an MRI'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Has your provider submitted the request?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,40}(submitted|sent it|sent in)",
            "(my (doctor'?s|doctors)|the office) (submitted|sent) (it )?(last week|on .{0,15}|a few days ago)",
            "(i believe so|i think so)",
            "(yes|yeah)(,)? (about|around) (a week|three days) ago",
            "(it'?s|its) been (a week|several days) since (they|the office) (sent|submitted)",
          ],
          hint_tr:
            "Doğrula: 'Yes, my doctor's office submitted it last week'.",
        },
        {
          speaker: "npc",
          message:
            "Let me look at the file... I see it's still pending review.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long|when) (does|will) (a )?review (take|be completed)",
            "(is there|do you have) (a |an )?(expected|estimated) (timeline|turnaround)",
            "(could|can) you (give|tell) me (a )?timeline",
            "(when|how soon) (can|will) (i|we) (expect|hear back)",
            "(i'?m|im) (a bit )?(concerned|worried) about (the )?delay",
          ],
          hint_tr:
            "Süreyi sor: 'How long does the review usually take?'",
        },
        {
          speaker: "npc",
          message:
            "Usually 5-7 business days. We're on day 6 now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(symptoms|condition) (are|is|have been) getting worse",
            "(is there|would there be) (any |a )?way to (expedite|fast.?track)",
            "(could|can) we (expedite|speed up) (the review|this)",
            "(could|can) you (flag|note) (this|the urgency)",
            "(would|could) (you|we) consider (an |a )?expedited review",
            "i'?d like to (request|ask for) (an )?expedited (review|approval)",
          ],
          hint_tr:
            "Hızlandırma iste: 'Could we expedite the review? My symptoms are worsening'.",
        },
        {
          speaker: "npc",
          message:
            "I can flag it as urgent. Let me also reach out to the medical review team.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,30}(appreciate|grateful)",
            "(thanks|thank you)(,)? (i really )?appreciate (it|that)",
            "(could|can) (i|you) (have|give me) a (reference|tracking) number",
            "(when|how) (will|should) i (hear back|follow up)",
            "(thank you|thanks)(,)?.{0,40}(reference|tracking|follow up)",
          ],
          hint_tr:
            "Teşekkür + takip planı: 'Thanks, when should I follow up?'",
        },
        {
          speaker: "npc",
          message:
            "We'll call you within 48 hours. Reference number is PA-9821.",
        },
      ],
    },
    {
      id: "ex.pa.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "MRI için ön onay gerektiği söylendi.",
      target: "I was told I need prior authorization for the MRI.",
      accepted_variants: [
        "I was told I need prior auth for the MRI.",
        "My doctor said I need prior authorization for the MRI.",
        "I need to get prior authorization for an MRI.",
        "Apparently I need prior auth before the MRI.",
        "I've been told the MRI requires prior authorization.",
      ],
      tr_hint:
        "'Prior authorization' = ön onay. 'I was told' = bana söylendi.",
    },
    {
      id: "ex.pa.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Prior authorization' ne demek?",
          options: [
            "Hastane öncesi imza",
            "Sigortanın prosedürü önceden onaylaması",
            "Doktor onayı",
            "Acil onay",
          ],
          correct_index: 1,
          tr_explanation:
            "'Prior auth' = sigortanın masrafı ödemeden önce prosedürü onaylaması.",
        },
        {
          question: "'Expedite' ne anlama gelir?",
          options: ["İptal etmek", "Hızlandırmak", "Yavaşlatmak", "Reddetmek"],
          correct_index: 1,
          tr_explanation:
            "'Expedite' = aciliyetle hızlandırmak.",
        },
        {
          question: "Kibarca hızlandırma talebi?",
          options: [
            "Speed this up!",
            "Could we expedite the review?",
            "Why is it slow?",
            "Hurry now please",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could we expedite...?' = inclusive, kibar hızlandırma talebi.",
        },
      ],
    },
  ],
};

// ============================================================
// 10. health.insurance.dispute.1 — Fatura itirazı
// ============================================================
const lesson_dispute: BundledLesson = {
  id: "health.insurance.dispute.1",
  skill_id: "health.insurance",
  index: 10,
  title: "Faturayı İtiraz Et",
  description:
    "ABD'de şaşırtıcı fatura: prosedürün kapsamda olması gerekiyordu. EOB iste, billing department ile itiraz aç.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.dispute.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "dispute the charge",
      tr_translation: "Ücrete itiraz etmek",
      example: "I'd like to dispute this charge.",
      example_tr: "Bu ücrete itiraz etmek istiyorum.",
    },
    {
      id: "ex.dispute.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD sigorta billing departmentı: beklenmedik fatura geldi, kapsamda olması gerekiyordu — EOB iste, itiraz aç.",
      npc_role: "Insurance representative",
      setting: "US insurance billing department",
      turns: [
        {
          speaker: "npc",
          message:
            "Billing department, how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like to dispute (a |this )?charge",
            "(i (got|received)|there'?s) (a |an )?(surprise |unexpected )?bill (i (don'?t|did not) expect|that)",
            "(i'?m|im) calling about (a |an )?(unexpected|surprise) (bill|charge)",
            "(this |a )?charge (was|should have been) (supposed to be )?covered",
            "(i (need|want) to|i'?d like to) (dispute|contest|appeal) (a |this )?(bill|charge)",
          ],
          hint_tr:
            "Açılış: 'I'd like to dispute this charge' veya 'This was supposed to be covered'.",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. Can you give me the claim number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (it'?s|its) \\d+",
            "(the )?claim (number )?is \\d+",
            "(it'?s|its) \\d+",
            "(here'?s|heres) the number(,)? \\d+",
            "(i have it|let me check)(,)? \\d+",
          ],
          hint_tr:
            "Claim number ver: 'Yes, it's 8237-A'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. I see the procedure was billed as out-of-network.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(but|that'?s odd|that doesn'?t sound right)",
            "(i was told|my doctor said) (the )?(provider|doctor) (was|is) in.?network",
            "(i specifically )?confirmed (this|coverage) before the visit",
            "(that'?s|that is) (not what|different from what) (i was told)",
            "(i (had|got)) (this )?(pre.?approved|verified) (in advance|beforehand)",
          ],
          hint_tr:
            "Karşı argüman: 'But I was told the provider was in-network'.",
        },
        {
          speaker: "npc",
          message:
            "Let me check the network status... I see the provider's status changed recently.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|you) (have|send) (the |an )?(eob|explanation of benefits)",
            "(could|can) you (send|email) me (the )?eob",
            "(could|can) i (get|have) (a )?(written )?explanation",
            "(i'?d|i would) like (a |an )?(written |formal )?(explanation|review)",
            "(could|can) you (send|provide) (the |an )?(itemized )?(bill|statement)",
          ],
          hint_tr:
            "EOB iste: 'Could you send me the Explanation of Benefits?'",
        },
        {
          speaker: "npc",
          message:
            "I'll email the EOB and start a formal dispute. You'll hear back in 30 days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,30}(reference|case|appeal)",
            "(could|can) i (get|have) (a |the )?(reference|case|dispute) number",
            "(thank you|thanks)(,)?.{0,40}(follow up|hear back)",
            "(how|when) (should|will) i (follow up|hear back)",
            "(thanks|thank you)(,)? (i really )?appreciate (your help|the help)",
          ],
          hint_tr:
            "Takip için referans iste: 'Could I get a dispute reference number?'",
        },
        {
          speaker: "npc",
          message:
            "Your dispute reference is DSP-4419. Call us if you don't hear back in 30 days.",
        },
      ],
    },
    {
      id: "ex.dispute.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu işlemin kapsamda olması gerekiyordu.",
      target: "This was supposed to be covered.",
      accepted_variants: [
        "This procedure was supposed to be covered.",
        "I thought this was covered.",
        "This should have been covered.",
        "This should be covered under my plan.",
        "I was told this would be covered.",
      ],
      tr_hint:
        "'Was supposed to' = gerekiyordu (beklenti vs. gerçek).",
    },
    {
      id: "ex.dispute.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'EOB' açılımı?",
          options: [
            "End of Bill",
            "Explanation of Benefits",
            "Estimate of Billing",
            "Evaluation of Balance",
          ],
          correct_index: 1,
          tr_explanation:
            "'EOB' = sigortanın ne ödediği, ne ödemediğini detaylandıran döküman.",
        },
        {
          question: "'Dispute' ne anlama gelir?",
          options: ["Ödemek", "İtiraz etmek", "Hızlandırmak", "İptal etmek"],
          correct_index: 1,
          tr_explanation:
            "'Dispute' = bir karara veya ücrete itiraz etmek.",
        },
        {
          question: "Beklentiyi vurgulama kalıbı?",
          options: [
            "This was supposed to be covered",
            "I want money back",
            "This is bad bill",
            "Pay it again",
          ],
          correct_index: 0,
          tr_explanation:
            "'Was supposed to' = olması gereken, beklentiyi açıklar.",
        },
      ],
    },
  ],
};

// ============================================================
// 11. health.insurance.claim.1 — Claim formu
// ============================================================
const lesson_claim: BundledLesson = {
  id: "health.insurance.claim.1",
  skill_id: "health.insurance",
  index: 11,
  title: "Reimbursement Claim Formu",
  description:
    "ABD'de out-of-network görüşme sonrası: faturayı geri ödeme için sigortaya iletmek istiyorsun, belgeleri listele.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.claim.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "reimbursement",
      tr_translation: "Geri ödeme (cepten ödenen masrafın iadesi)",
      example:
        "I'd like to submit a claim for reimbursement.",
      example_tr: "Geri ödeme için bir talep göndermek istiyorum.",
    },
    {
      id: "ex.claim.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD sigorta çağrı merkezi: out-of-network görüşme için geri ödeme talebi başlat, belgeleri sor.",
      npc_role: "Insurance representative",
      setting: "US insurance claims line",
      turns: [
        {
          speaker: "npc",
          message:
            "Claims department, how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like to (submit|file) a claim (for reimbursement)?",
            "(i'?m|im) calling to (submit|file) (a )?reimbursement",
            "(could|can) (i|you (help|walk) me) (file|submit) a claim",
            "(i (need|want) to)(file|submit|start) (a |an )?(out.?of.?network )?claim",
            "(i'?d|i would) like to (get|request) reimbursement",
          ],
          hint_tr:
            "Talep aç: 'I'd like to submit a claim for reimbursement'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Was this an out-of-network visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (it )?was",
            "(yes|yeah)(,)? out.?of.?network",
            "(the |a )?(provider|doctor) was out.?of.?network",
            "(yes|yeah)(,)? (i (paid|covered)|i had to pay) (upfront|out of pocket)",
            "yes(,)? i (paid|covered) (it )?out of pocket",
          ],
          hint_tr:
            "Doğrula: 'Yes, I paid out of pocket'.",
        },
        {
          speaker: "npc",
          message:
            "What documents do you have?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|i'?ve got) (the |a )?(receipt|itemized bill)",
            "(receipt|itemized bill|invoice|diagnosis|cpt code)(,)? (and|plus)",
            "(receipt|bill|invoice|cpt|diagnosis|provider'?s? (npi|tax id))",
            "i have (a |the )(receipt|itemized bill) and (the )?(diagnosis|cpt) codes",
            "(receipts|bills)(,)? (diagnosis|cpt) codes(,)? and provider info",
          ],
          hint_tr:
            "Belgeleri listele: 'I have the receipt, itemized bill, and CPT codes'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. You'll also need to fill out our member claim form.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(where|how) (can|do) i (find|access|download) (the )?form",
            "(could|can) you (send|email) me (the )?(form|link)",
            "(is|will) (the form|it) (online|on the website)",
            "(could|can) you (walk|guide) me through (the form|it)",
            "(where|how) do i (submit|return) (the )?form",
          ],
          hint_tr:
            "Form için sor: 'Where can I find the form?' veya 'Could you email it?'",
        },
        {
          speaker: "npc",
          message:
            "It's on our member portal. I'll email you the direct link.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long|when) (does|will) (a )?(claim|reimbursement) take",
            "(how long )(does|do) (claims|reimbursements) (usually )?take",
            "(when|how soon) (will|can) i (expect|receive) (the )?(payment|reimbursement)",
            "(any|is there a) (timeline|turnaround)",
            "(thank you|thanks)(,)?.{0,40}(timeline|turnaround|expect)",
          ],
          hint_tr:
            "Süreyi sor: 'How long does reimbursement usually take?'",
        },
        {
          speaker: "npc",
          message:
            "Typically 4-6 weeks once we receive complete documentation.",
        },
      ],
    },
    {
      id: "ex.claim.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Geri ödeme için bir talep göndermek istiyorum.",
      target: "I'd like to submit a claim for reimbursement.",
      accepted_variants: [
        "I'd like to file a claim for reimbursement.",
        "I want to submit a reimbursement claim.",
        "I'd like to request reimbursement.",
        "I'm calling to file a claim for reimbursement.",
        "Could I submit a claim for reimbursement?",
      ],
      tr_hint:
        "'Submit a claim' = talep göndermek. 'Reimbursement' = geri ödeme.",
    },
    {
      id: "ex.claim.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Reimbursement' ne demek?",
          options: ["Ek prim", "Cepten ödenenin iadesi", "İlk ödeme", "Faiz"],
          correct_index: 1,
          tr_explanation:
            "'Reimbursement' = önce sen ödersin, sigorta sonra sana iade eder.",
        },
        {
          question: "'Itemized bill' ne demek?",
          options: [
            "Tek satırlık fatura",
            "Her hizmet ayrı kalemli detaylı fatura",
            "Aylık özet",
            "Toplam ödeme",
          ],
          correct_index: 1,
          tr_explanation:
            "'Itemized' = kalem kalem ayrılmış, her hizmet ve fiyat ayrı.",
        },
        {
          question: "Claim için en sık gereken belgeler?",
          options: [
            "Sadece resim",
            "Receipt + itemized bill + CPT/diagnosis codes",
            "Sadece doktor adı",
            "Yıllık özet",
          ],
          correct_index: 1,
          tr_explanation:
            "Sigorta makbuz, detaylı fatura ve kodları ister.",
        },
      ],
    },
  ],
};

// ============================================================
// 12. health.insurance.code.1 — CPT kodu
// ============================================================
const lesson_code: BundledLesson = {
  id: "health.insurance.code.1",
  skill_id: "health.insurance",
  index: 12,
  title: "Billing Code (CPT) Sor",
  description:
    "ABD doktor ofisi resepsiyonu: ziyaret öncesi prosedür kodunu iste, sigortayla doğrula.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.code.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "billing code",
      tr_translation: "Faturalama kodu (CPT)",
      example: "Could you give me the billing code?",
      example_tr: "Faturalama kodunu verebilir misiniz?",
    },
    {
      id: "ex.code.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD doktor ofisi resepsiyonu: planlı prosedür için CPT kodunu iste, sigortayla önceden kontrol et.",
      npc_role: "Hospital admissions clerk",
      setting: "US clinic reception desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like to (confirm|check) (coverage|insurance) before (the |my )?(visit|appointment)",
            "(could|can) (i|you) (have|give me) (the )?(cpt |billing )?code",
            "(i'?m|im) trying to (verify|confirm) (coverage|the cost) before (the |my )?(visit|appointment)",
            "(could|can) you (give|share) (me )?the (cpt |billing )?code for (the |my )?(procedure|visit)",
            "i (need|want) (the )?(cpt |billing )?code to (check|verify) (with|coverage)",
          ],
          hint_tr:
            "Amaç: 'Could you give me the billing code? I'd like to confirm coverage before the visit'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Which procedure or visit are you asking about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the |my )?(visit|consultation|appointment) (with|for) (dr\\.? )?[a-z]+",
            "(the |my )?(upcoming|next) (visit|consultation|appointment)",
            "(the |my )?(specialist|follow.?up) (visit|appointment)",
            "(it'?s|its) (a |the )?(consultation|new patient visit) on .{0,15}",
            "(the )?(procedure|colonoscopy|mri|biopsy) (scheduled|on .{0,15})",
          ],
          hint_tr:
            "Ziyaret detayını ver: 'My consultation with Dr. Patel next Tuesday'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. It's a new patient consultation, CPT 99203.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|you) (also )?(have|give me) the (diagnosis|icd) code",
            "(is there|do you have) (a |an )?icd (diagnosis )?code (too|as well)",
            "(could|can) you (also )?(give|share) the (diagnosis|icd) code",
            "(what )?about (the )?(diagnosis|icd) code",
            "(do|will) i need (a )?(diagnosis|icd) code (too|as well)",
          ],
          hint_tr:
            "ICD kodu da iste: 'Could you also give me the diagnosis code?'",
        },
        {
          speaker: "npc",
          message:
            "Usually the diagnosis code is added after the visit, based on findings.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|got it|that makes sense)",
            "(thank you|thanks)(,)?.{0,30}(call|check) (my |the )?insurance",
            "(thank you|thanks)(,)?.{0,30}(verify|confirm)",
            "(perfect|great|okay)(,)? (i'?ll|i will) (call|check with) (my )?insurance",
            "(thanks|thank you)(,)? (that helps|i appreciate it)",
          ],
          hint_tr:
            "Anladım + plan: 'Got it, I'll call my insurance to verify'.",
        },
        {
          speaker: "npc",
          message: "Sounds good. See you Tuesday!",
        },
      ],
    },
    {
      id: "ex.code.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ziyaretten önce kapsamı doğrulamak istiyorum.",
      target: "I'd like to confirm coverage before the visit.",
      accepted_variants: [
        "I want to confirm coverage before the visit.",
        "I'd like to verify coverage prior to the appointment.",
        "I want to check coverage before coming in.",
        "I'd like to confirm coverage ahead of the visit.",
        "I'd like to check whether this is covered before the visit.",
      ],
      tr_hint:
        "'Confirm coverage' = kapsamı doğrulamak. 'Before the visit' = ziyaretten önce.",
    },
    {
      id: "ex.code.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'CPT kodu' ne içindir?",
          options: ["Sigorta ödeme", "Prosedür/hizmet kimliği", "Hastane no", "Doktor unvanı"],
          correct_index: 1,
          tr_explanation:
            "'CPT' = prosedürü tanımlayan kod. Sigorta bu kodla ödeme yapar.",
        },
        {
          question: "'ICD kodu' ne içindir?",
          options: [
            "Tanı (diagnosis) kodu",
            "Prosedür kodu",
            "Doktor kodu",
            "Hastane bölge kodu",
          ],
          correct_index: 0,
          tr_explanation:
            "'ICD' = International Classification of Diseases, tanı kodu.",
        },
        {
          question: "Ziyaret öncesi en mantıklı adım?",
          options: [
            "Hiçbir şey, sigorta hallediyor",
            "Kodu al, sigortayla doğrula",
            "İnternette araştır",
            "Doktoru ara",
          ],
          correct_index: 1,
          tr_explanation:
            "Kod + sigorta önceden doğrulama, sürpriz fatura riski azaltır.",
        },
      ],
    },
  ],
};

// ============================================================
// 13. health.chronic.diabetes.1 — Diyabet A1c
// ============================================================
const lesson_diabetes: BundledLesson = {
  id: "health.chronic.diabetes.1",
  skill_id: "health.chronic",
  index: 13,
  title: "Diyabet Kontrolü ve A1c",
  description:
    "ABD endokrinoloji ofisinde: 7.4 A1c sonucunu tartış — doz, diyet, egzersiz planı.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.diab.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "drug interaction",
      tr_translation: "İlaç etkileşimi",
      example:
        "Will there be any drug interactions with my current meds?",
      example_tr: "Mevcut ilaçlarımla bir etkileşim olur mu?",
    },
    {
      id: "ex.diab.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD endokrinoloji ofisinde: A1c 7.4 geldi, doktora ne anlama geldiğini sor, tedavi ayarı tartış.",
      npc_role: "Endocrinologist",
      setting: "US endocrinology clinic",
      turns: [
        {
          speaker: "npc",
          message:
            "Your A1c came back at 7.4. We need to talk about adjustments.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "what does (that|7\\.?4) mean (for me|for my treatment)",
            "(could|can) you (explain|walk me through) (what (that|7\\.?4) means)",
            "(is|how) (7\\.?4 |that )?(bad|concerning|high)",
            "what (changes|adjustments) (would|should) (you|we) (recommend|make)",
            "(how|what) does (that|7\\.?4) compare to (the )?target",
          ],
          hint_tr:
            "Anlam sor: 'What does that mean for my treatment?' veya 'Is that concerning?'",
        },
        {
          speaker: "npc",
          message:
            "Target is below 7. We may need to adjust your medication dose.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any|will there be) drug interactions (with my (current )?meds|with anything else)",
            "(any|what) side effects (should i (expect|know about))?",
            "(how |when )(would|should) (we|i) (increase|adjust) (the )?dose",
            "(could|can) we (try|consider) (diet|lifestyle) (changes )?first",
            "(would|could) (more )?exercise (help|make a difference)",
          ],
          hint_tr:
            "Yan etki/etkileşim sor: 'Any drug interactions with my current meds?'",
        },
        {
          speaker: "npc",
          message:
            "No major interactions. Some patients see GI side effects when we increase the dose.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we (focus|try) (on )?(diet|lifestyle|exercise) first",
            "(i'?d|i would) like to try (diet|lifestyle) changes first",
            "what (kind of|sort of) (diet|exercise) (changes|adjustments) (would|do) you recommend",
            "(any|do you have) (specific )?(dietary|exercise) recommendations",
            "(could|can) you (refer|connect) me (to|with) a (dietitian|nutritionist)",
          ],
          hint_tr:
            "Diyet/egzersiz dene: 'Could we focus on diet first?'",
        },
        {
          speaker: "npc",
          message:
            "Great mindset. Let's try lifestyle changes for three months and recheck.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (refer|connect) me (to|with) a (dietitian|nutritionist)",
            "(when|how soon) (should|do) we (recheck|follow up)",
            "(could|can) (i|you) (have|share) (a |an )?(target|plan)",
            "(should|will) i (need to)?(test|monitor) (at home|more often)",
            "(thank you|thanks)(,)?.{0,40}(referral|recheck|follow up)",
          ],
          hint_tr:
            "Sonraki adım: 'Could you refer me to a nutritionist?' veya 'When do we recheck?'",
        },
        {
          speaker: "npc",
          message:
            "I'll refer you to our dietitian, and we'll recheck A1c in three months.",
        },
      ],
    },
    {
      id: "ex.diab.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "A1c sonucum 7.4 — tedavim için ne anlama geliyor?",
      target: "My A1c came back at 7.4 — what does that mean for my treatment?",
      accepted_variants: [
        "My A1c was 7.4 — what does that mean for my treatment?",
        "My A1c came in at 7.4 — what does it mean for treatment?",
        "I got an A1c of 7.4 — how does that affect my treatment?",
        "My A1c is 7.4 — what does that mean for my care plan?",
        "A1c result was 7.4 — what does that mean for me?",
      ],
      tr_hint:
        "'Came back at' = sonuç olarak geldi. 'What does that mean for...' = ...için ne anlama gelir.",
    },
    {
      id: "ex.diab.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Drug interaction' ne demek?",
          options: [
            "İlaç dozu",
            "İlaçlar arası etkileşim",
            "İlaç fiyatı",
            "İlaç reçetesi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Drug interaction' = iki veya daha fazla ilacın birbiriyle istenmeyen etkileşmesi.",
        },
        {
          question: "'A1c' ne ölçer?",
          options: [
            "Anlık kan şekeri",
            "3 aylık ortalama kan şekeri",
            "Kolesterol",
            "Tansiyon",
          ],
          correct_index: 1,
          tr_explanation:
            "HbA1c = son 2-3 ayın ortalama kan şekeri göstergesi.",
        },
        {
          question: "Diyet odaklı tedavi önerisi?",
          options: [
            "Increase pills now",
            "Could we focus on diet first?",
            "I don't trust diet",
            "Skip the medication",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could we focus on diet first?' = inclusive, alternatif öneri.",
        },
      ],
    },
  ],
};

// ============================================================
// 14. health.chronic.bp.1 — Hipertansiyon
// ============================================================
const lesson_bp: BundledLesson = {
  id: "health.chronic.bp.1",
  skill_id: "health.chronic",
  index: 14,
  title: "Tansiyon Günlüğü Paylaş",
  description:
    "ABD aile hekimi ofisinde: evdeki tansiyon ölçümlerini paylaş — 145/95 sabahları ortalama.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.bp.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "blood pressure log",
      tr_translation: "Tansiyon günlüğü/kayıt defteri",
      example: "I've been keeping a blood pressure log.",
      example_tr: "Bir tansiyon günlüğü tutuyorum.",
    },
    {
      id: "ex.bp.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD aile hekimi ofisinde: evden aldığın tansiyon kayıtlarını paylaş, tedavi ayarı tartış.",
      npc_role: "Specialist",
      setting: "US primary care clinic",
      turns: [
        {
          speaker: "npc",
          message: "How have your home readings been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its|they'?ve) been running (around|about) \\d+ ?/ ?\\d+",
            "(my )?(numbers|readings) (have been|are) (around|about) \\d+ ?/ ?\\d+",
            "(mostly )?(in the mornings|morning)(,)?.{0,20}\\d+",
            "(i'?ve|i have) been (averaging|seeing) (around|about) \\d+",
            "(quite |a bit )?high(,)? (around|about) \\d+ ?/ ?\\d+",
          ],
          hint_tr:
            "Değerleri paylaş: 'It's been running around 145/95 in the mornings'.",
        },
        {
          speaker: "npc",
          message: "That's on the higher side. How long has this been the trend?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|around) (a |several |a few )?(weeks|months)",
            "(for about|around) (the past|last) (few )?(weeks|months)",
            "(it'?s|its) been (creeping|going) up (for|over) (the past|several) (weeks|months)",
            "(it'?s|its) been (consistent|stable at this level) for (weeks|months)",
            "(a few|several) months (now)?",
          ],
          hint_tr:
            "Süreyi belirt: 'For the past few months' veya 'About six weeks'.",
        },
        {
          speaker: "npc",
          message:
            "Any lifestyle changes? Stress? Salt intake?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(work has been|i'?ve been) (stressful|stressed)",
            "(i'?ve|i have) been (more |a bit )?stressed (at work|lately)",
            "(my )?(salt|sodium) intake (is|has been) (probably |a bit )?(high|higher)",
            "(not really|nothing major)",
            "(i'?ve|i have) been (less active|exercising less)",
            "(no |i don'?t think there'?ve been )(major )?changes",
          ],
          hint_tr:
            "Faktörleri açıkla: 'Work has been stressful and I've been less active'.",
        },
        {
          speaker: "npc",
          message:
            "We may need to adjust your medication or start a new one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we (try|focus on) lifestyle changes first",
            "(any|what) side effects (should i (know|expect))?",
            "(would|will there be) (any )?(drug )?interactions",
            "(could|can) you (walk|talk) me through (the )?options",
            "(what'?s|what is) the (typical|usual) (timeline|response time)",
            "(how |how often )(should|will) i (recheck|monitor) at home",
          ],
          hint_tr:
            "Detay/alternatif: 'Could we try lifestyle changes first?' veya 'Any side effects?'",
        },
        {
          speaker: "npc",
          message:
            "Let's try 4 weeks of diet and exercise. If still high, we'll add a low-dose medication.",
        },
      ],
    },
    {
      id: "ex.bp.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sabahları 145/95 civarında oluyor.",
      target: "It's been running around 145/95 in the mornings.",
      accepted_variants: [
        "It's been around 145 over 95 in the mornings.",
        "My morning readings have been around 145/95.",
        "In the mornings, it's been running about 145/95.",
        "Mornings have been around 145/95.",
        "I've been getting 145/95 in the mornings.",
      ],
      tr_hint:
        "'Running around' = ortalama olarak. 'In the mornings' = sabahları.",
    },
    {
      id: "ex.bp.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'145/95' nasıl okunur?",
          options: [
            "One forty-five ninety-five",
            "One forty-five over ninety-five",
            "Hundred forty-five ninety-five",
            "One four five nine five",
          ],
          correct_index: 1,
          tr_explanation:
            "Tansiyon değerleri 'over' ile okunur: 'one forty-five over ninety-five'.",
        },
        {
          question: "'Tansiyon ortalama' kalıbı?",
          options: [
            "Always 145 always",
            "It's running around 145/95",
            "145/95 every time",
            "Number is 145/95",
          ],
          correct_index: 1,
          tr_explanation:
            "'Running around' = ortalama olarak gidiyor (doğal kalıp).",
        },
        {
          question: "Aile hekimi randevusunda tansiyon kayıtları?",
          options: [
            "Söylemeye gerek yok",
            "Kayıtları paylaşmak çok yardımcı olur",
            "Sadece kötü değerleri söyle",
            "Doktor zaten görür",
          ],
          correct_index: 1,
          tr_explanation:
            "Ev kayıtları doğru tanı için kritik — günlük tut, paylaş.",
        },
      ],
    },
  ],
};

// ============================================================
// 15. health.chronic.allergy.1 — Allerji immunoterapi
// ============================================================
const lesson_allergy: BundledLesson = {
  id: "health.chronic.allergy.1",
  skill_id: "health.chronic",
  index: 15,
  title: "Allerji İmmünoterapi",
  description:
    "ABD allerji uzmanı: antihistaminikler işe yaramıyor — allergy shots seçeneğini tartış, süre + maliyet öğren.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.all.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "immunotherapy",
      tr_translation: "Bağışıklık tedavisi (allerji aşıları)",
      example:
        "Would I be a good candidate for immunotherapy?",
      example_tr: "İmmünoterapi için uygun bir aday olur muyum?",
    },
    {
      id: "ex.all.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD allerji uzmanı ofisinde: antihistamine cevap yok, allergy shots tartış, süre + masraf öğren.",
      npc_role: "Specialist",
      setting: "US allergy clinic",
      turns: [
        {
          speaker: "npc",
          message: "How have the antihistamines been working?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(they|the antihistamines) (aren'?t|are not|haven'?t been) (really )?(cutting it|working|enough)",
            "(they|the antihistamines) (aren'?t|are not) (cutting it|sufficient) anymore",
            "(not (very )?(well|much)|honestly not (much|well))",
            "(i'?ve|i have) been (taking|using) them but (no real|little) (help|effect)",
            "(my )?symptoms (are|have been) (still )?(bad|persistent|breaking through)",
          ],
          hint_tr:
            "Etkisizliği belirt: 'The antihistamines aren't cutting it anymore'.",
        },
        {
          speaker: "npc",
          message:
            "We might consider allergy shots — also called immunotherapy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how|what) does (immunotherapy|that) work",
            "(could|can) you (walk|talk) me through (how|the process)",
            "(would|am) i (be )?(a good candidate|eligible)",
            "(what'?s|what is) (the )?(typical|usual) (duration|timeline)",
            "(how long|how many) (does|do) (the )?(treatment|shots) take",
          ],
          hint_tr:
            "Bilgi iste: 'How does immunotherapy work?' veya 'Would I be a good candidate?'",
        },
        {
          speaker: "npc",
          message:
            "We start with weekly shots for 6 months, then monthly for 3-5 years.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how|what) (about|much) (does it|will it) cost",
            "(any|will there be) (out.?of.?pocket|copay) (expenses|costs)",
            "(is it|will it be) covered (by insurance)?",
            "(what'?s|what is) (the )?cost (typically|usually)",
            "(any|what are the) side effects",
            "(how|how effective) (does it|is it) (work|usually)",
          ],
          hint_tr:
            "Maliyet/etkililik: 'How much does it cost?' veya 'How effective is it?'",
        },
        {
          speaker: "npc",
          message:
            "Most plans cover it with a co-pay per visit. Effectiveness is 70-85% in patients who complete the course.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any|are there) (serious |major )?side effects",
            "(could|can) i (have|get) (a |some )?(written|printed) (information|literature)",
            "(i'?d|i would) like (some )?time to (think|consider)",
            "(could|can) (i|we) (schedule|set up) (a |the )?(allergy )?testing first",
            "(what'?s|what is) (the )?next step",
          ],
          hint_tr:
            "Sonraki adım: 'What's the next step?' veya 'I'd like some time to think'.",
        },
        {
          speaker: "npc",
          message:
            "Let's start with allergy testing to identify your specific triggers, then decide on immunotherapy.",
        },
      ],
    },
    {
      id: "ex.all.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Antihistaminikler artık yeterli değil.",
      target: "The antihistamines aren't cutting it anymore.",
      accepted_variants: [
        "The antihistamines aren't working anymore.",
        "The antihistamines aren't enough anymore.",
        "Antihistamines don't really work for me anymore.",
        "The antihistamines aren't doing the job anymore.",
        "The antihistamines have stopped working.",
      ],
      tr_hint:
        "'Cutting it' = idare etmek (deyim). 'Anymore' = artık.",
    },
    {
      id: "ex.all.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Immunotherapy' ne demek?",
          options: [
            "Antibiyotik kürü",
            "Bağışıklığı düzenleyen tedavi (allerji aşıları)",
            "Aşılama",
            "Kortizon tedavisi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Immunotherapy' = bağışıklığı tetikleyiciye karşı eğitir, uzun vadeli tedavi.",
        },
        {
          question: "'Cutting it' ne anlama gelir?",
          options: ["Kesmek", "İdare etmek/yetmek", "Bitirmek", "Kazanmak"],
          correct_index: 1,
          tr_explanation:
            "'Not cutting it' = yetmemek, idare etmemek (deyim).",
        },
        {
          question: "Uzun süreli tedavi tartışmada kibar talep?",
          options: [
            "Tell me everything now",
            "I'd like some time to think",
            "Decide for me",
            "Skip the details",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd like some time to think' = kararlı yaklaşım, doğru ton.",
        },
      ],
    },
  ],
};

// ============================================================
// 16. health.chronic.sideeffect.1 — İlaç değiştirme
// ============================================================
const lesson_sideeffect: BundledLesson = {
  id: "health.chronic.sideeffect.1",
  skill_id: "health.chronic",
  index: 16,
  title: "İlaç Yan Etkisi ve Değişim",
  description:
    "ABD endokrinoloji ofisinde: metformin mide rahatsızlığı veriyor — alternatif iste, tapering planı netleştir.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.se.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "side effects",
      tr_translation: "Yan etkiler",
      example:
        "The metformin's been giving me side effects.",
      example_tr: "Metformin bana yan etkiler veriyor.",
    },
    {
      id: "ex.se.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD endokrinoloji: mevcut ilaç (metformin) mide yan etkisi yapıyor, değişim iste, tapering planı sor.",
      npc_role: "Endocrinologist",
      setting: "US endocrinology clinic",
      turns: [
        {
          speaker: "npc",
          message: "How are you tolerating the metformin?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its been giving) me (stomach|gi|gut) (issues|problems|upset)",
            "(i'?ve|i have) been (getting|having|experiencing) (stomach|gi) (issues|problems)",
            "(i'?ve|i have) (been )?(struggling|dealing) with (stomach|gi) side effects",
            "the side effects (are|have been) (bad|rough|hard to handle)",
            "(my )?stomach (has been|is) (upset|off) since (i started|starting) (it|metformin)",
          ],
          hint_tr:
            "Yan etkiyi tarif: 'The metformin's been giving me stomach issues'.",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. How severe are the symptoms?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pretty|quite|fairly) (bad|severe)",
            "(it'?s|its) (affecting|disrupting) my (daily life|work|sleep)",
            "(mild |moderate )?(nausea|diarrhea|cramping) (every|most) (day|morning)",
            "(i'?d|i would) like to (switch|change) (medications|meds)",
            "(i'?ve|i have) been (skipping|missing) doses (because of it)?",
            "(bad enough|severe enough) that i (want|need) to (switch|change)",
          ],
          hint_tr:
            "Şiddetini söyle: 'Bad enough that I'd like to switch medications'.",
        },
        {
          speaker: "npc",
          message:
            "We can switch you to an alternative. There are a few options.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|which) (are |would be )?(the )?(alternatives|options)",
            "(could|can) you (walk|talk) me through (the )?options",
            "(any |what are the )?side effects (of (the )?alternatives)?",
            "(any |will there be) (drug )?interactions",
            "(how|how much) (does|do) (it|they) cost",
            "(is|are) (it|they) (in.?network|covered)",
          ],
          hint_tr:
            "Alternatifleri sor: 'What are the options?' veya 'Any drug interactions?'",
        },
        {
          speaker: "npc",
          message:
            "We could try a DPP-4 inhibitor — generally well-tolerated, fewer GI side effects.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how|do i) (taper|wean) off (the )?metformin",
            "(should|do) i stop (the )?metformin (cold|all at once)",
            "(could|can) you (walk|talk) me through (the )?(transition|tapering)",
            "(how|when) (do|will) we (transition|switch)",
            "(any|will there be) (drug )?interactions (between|during)",
            "(thank you|thanks)(,)?.{0,40}(taper|wean|transition)",
          ],
          hint_tr:
            "Geçiş planı: 'How do I taper off metformin?' veya 'Cold stop or gradual?'",
        },
        {
          speaker: "npc",
          message:
            "Reduce metformin to half-dose for a week, then stop. Start the new medication on day 8.",
        },
      ],
    },
    {
      id: "ex.se.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İlacı değiştirmek istiyorum.",
      target: "I'd like to switch medications.",
      accepted_variants: [
        "I'd like to change medications.",
        "Could we switch medications?",
        "I want to switch to a different medication.",
        "Could we try a different medication?",
        "I'd like to change to something else.",
      ],
      tr_hint:
        "'Switch medications' = ilaç değiştirmek. 'I'd like to' = nazik istek.",
    },
    {
      id: "ex.se.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Taper off' ne demek?",
          options: [
            "Birden bırakmak",
            "Aşamalı azaltarak bırakmak",
            "Dozu iki katına çıkarmak",
            "Aynı dozda devam",
          ],
          correct_index: 1,
          tr_explanation:
            "'Taper off' = ilacı kademeli olarak azaltmak.",
        },
        {
          question: "'GI side effects' ne anlama gelir?",
          options: [
            "Genel halsizlik",
            "Mide-bağırsak yan etkileri",
            "Baş ağrısı",
            "Cilt döküntüsü",
          ],
          correct_index: 1,
          tr_explanation:
            "'GI' = gastrointestinal, mide-bağırsak.",
        },
        {
          question: "Doktora kibar değişim talebi?",
          options: [
            "Change my drug now!",
            "I'd like to switch medications",
            "This drug is bad",
            "Give me something else",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd like to' + 'switch medications' = nazik, profesyonel.",
        },
      ],
    },
  ],
};

// ============================================================
// 17. health.chronic.annual.1 — Yıllık check-up
// ============================================================
const lesson_annual: BundledLesson = {
  id: "health.chronic.annual.1",
  skill_id: "health.chronic",
  index: 17,
  title: "Yıllık Check-up Listesi",
  description:
    "İngiltere'de GP yıllık muayene: lab work, göz, ayak, aşılar — listeyi sırayla doktora geç.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.ann.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "follow-up",
      tr_translation: "Takip randevusu/kontrol",
      example:
        "When should I schedule the follow-up?",
      example_tr: "Takip randevusunu ne zaman alayım?",
    },
    {
      id: "ex.ann.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İngiltere'de GP randevusu: yıllık check-up için liste — lab + göz + ayak + aşı.",
      npc_role: "Specialist",
      setting: "UK GP surgery",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. What would you like to cover today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like to (do|have|cover) (my )?(annual|yearly) (check.?up|review)",
            "(i'?m|im) here for (my )?(annual|yearly) (check.?up|review)",
            "(could|can) we (go through|cover) (my )?(annual|yearly) (check.?up|items)",
            "(i'?ve|i have) (got|made) a list of things (i'?d|i would) like to (cover|check)",
            "(it'?s|its) time for (my )?(annual|yearly) (review|check.?up)",
          ],
          hint_tr:
            "Amaç: 'I'd like to do my annual check-up' veya 'I've got a list of things'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Let's go through your list.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first|to start)(,)? (some |the )?(blood work|labs)",
            "(blood work|labs)(,)? (eye exam|eye check)(,)? (foot|feet) (check|exam)",
            "(i'?d|i would) like (to do |to schedule )?(blood work|labs|lab work)",
            "(my )?(blood work|labs)(,)? (eye exam|eye check)(,)? and (any |the )?vaccines",
            "(could|can) we (do|schedule|set up) (some )?(blood work|labs)",
          ],
          hint_tr:
            "Listeyi başlat: 'First, blood work. Then eye exam, foot check, and vaccines'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. We can order the labs today. When was your last eye exam?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|around|over) (a year|two years|18 months) ago",
            "(it'?s|its) been (about|around) (a year|two years)",
            "(maybe |i think )?(a year|two years) ago",
            "(i can'?t|cannot) (remember exactly|recall)",
            "(probably |i think )?(it'?s|its) overdue",
          ],
          hint_tr:
            "Süre: 'About a year ago' veya 'It's been over two years'.",
        },
        {
          speaker: "npc",
          message:
            "We should book that. Are your vaccines up to date?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) not (totally |entirely )?sure",
            "(i think|i believe) so(,)? (but )?(could|can) you (check|verify)",
            "(could|can) you (check|look at) (my )?(records|chart)",
            "(my )?(flu shot|tetanus) (is|might be) (overdue|due)",
            "(i'?d|i would) like to (check|verify) (which ones )?(i (need|am due for))",
          ],
          hint_tr:
            "Aşı durumu: 'I'm not sure, could you check my records?'",
        },
        {
          speaker: "npc",
          message:
            "Looks like your tetanus is due. We can do that today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(also|finally|and)(,)?.{0,30}(foot|feet) (check|exam)",
            "(could|can) we (do|schedule) (a )?(foot|feet) (check|exam)",
            "(what |when )(about|do you recommend) (a )?(foot|feet) (check|exam)",
            "(i'?ve|i have) been (having|getting) (some )?(numbness|tingling) in (my )?feet",
            "(should|do) i (also )?see (a )?podiatrist",
          ],
          hint_tr:
            "Ayak kontrolü: 'Could we schedule a foot check?' veya 'I've been having numbness'.",
        },
        {
          speaker: "npc",
          message:
            "Let's examine your feet now and refer you to a podiatrist if needed.",
        },
      ],
    },
    {
      id: "ex.ann.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Aşılarımın güncel olup olmadığını kontrol eder misiniz?",
      target: "Could you check whether my vaccines are up to date?",
      accepted_variants: [
        "Could you check if my vaccines are up to date?",
        "Can you check whether my vaccines are current?",
        "Could you verify my vaccinations are up to date?",
        "Can you look up whether my vaccines are current?",
        "Could you check my vaccine records?",
      ],
      tr_hint:
        "'Up to date' = güncel. 'Could you check whether...' = kontrol eder misiniz.",
    },
    {
      id: "ex.ann.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Follow-up' ne demek?",
          options: [
            "Yeni randevu",
            "Takip/kontrol randevusu",
            "Acil servis",
            "Telefonla görüşme",
          ],
          correct_index: 1,
          tr_explanation:
            "'Follow-up' = bir tedavi/ziyaret sonrası takip randevusu.",
        },
        {
          question: "'Up to date' ne anlama gelir?",
          options: ["Geç kalmış", "Güncel/aktüel", "Yeni", "Süresi dolmuş"],
          correct_index: 1,
          tr_explanation:
            "'Up to date' = en güncel duruma getirilmiş.",
        },
        {
          question: "Yıllık check-up'ta bir liste sunmak?",
          options: [
            "Sadece doktor sorduğunu söyle",
            "Önceden hazırlanmış liste profesyonel",
            "Bir şey söyleme",
            "Tek seferde her şeyi anlat",
          ],
          correct_index: 1,
          tr_explanation:
            "Hazırlık + öncelik sıralı liste, zamanı verimli kullanır.",
        },
      ],
    },
  ],
};

// ============================================================
// 18. health.mental.intake.1 — Terapist intake (clinical)
// ============================================================
const lesson_mental_intake: BundledLesson = {
  id: "health.mental.intake.1",
  skill_id: "health.mental",
  index: 18,
  title: "Terapist İlk Görüşme",
  description:
    "ABD terapist ofisinde ilk seans: bunaltıcı geçen birkaç ayı klinik dille tarif et — uyku, iştah, tetikleyici.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.mi.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "feeling overwhelmed",
      tr_translation: "Bunalmış hissetmek",
      example:
        "I've been feeling overwhelmed for the past few months.",
      example_tr: "Son birkaç aydır bunalmış hissediyorum.",
    },
    {
      id: "ex.mi.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD'de terapist ofisi, ilk intake seansı. Bunaltıcı hisleri klinik dille tarif et: uyku, iştah, tetikleyici.",
      npc_role: "Therapist",
      setting: "US therapist's office, intake session",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for coming in. What brought you here today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) been (feeling|getting) (overwhelmed|burnt out|drained)",
            "(i'?ve|i have) been (struggling|dealing) with (a lot|stress|anxiety)",
            "(i'?ve|i have) been (feeling overwhelmed|under a lot) for (the past |several )?(months|weeks)",
            "(i'?ve|i have) been (going through|having) a (rough|difficult) (patch|time)",
            "(things have been|life'?s been) (overwhelming|hard) (lately|recently)",
          ],
          hint_tr:
            "Klinik açılış: 'I've been feeling overwhelmed for the past few months'.",
        },
        {
          speaker: "npc",
          message:
            "I'm glad you reached out. Can you tell me more about that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(work|family|relationship) (has been|stress)",
            "(it'?s|its) (mostly )?(work|family|relationship)(,)?.{0,30}",
            "(i'?ve|i have) been (juggling|managing) (a lot)",
            "(i feel|i'?ve been feeling) like (i can'?t|cannot) (keep up|catch a break)",
            "(everything feels|things feel) (heavy|like too much)",
            "(i'?ve|i have) (lost|been losing) (interest|motivation)",
          ],
          hint_tr:
            "Detay: 'Mostly work stress' veya 'I feel like I can't keep up'.",
        },
        {
          speaker: "npc",
          message:
            "How has your sleep been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) been (having trouble|struggling) (with sleep|sleeping|falling asleep)",
            "(my )?sleep (has been|is) (poor|disrupted|off)",
            "(i wake up|i'?m waking up) (a lot|early|in the middle of the night)",
            "(falling asleep|getting to sleep) (is|has been) hard",
            "(i'?ve|i have) been (oversleeping|sleeping too much)",
            "(maybe|around) (four|five|six) hours a night",
          ],
          hint_tr:
            "Uykuyu tarif: 'I've been having trouble falling asleep' veya 'Waking up early'.",
        },
        {
          speaker: "npc",
          message:
            "And appetite? Any changes there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?appetite (has been|is) (low|off|reduced)",
            "(i'?ve|i have) (lost|been losing) (some |a bit of )?(weight|appetite)",
            "(i'?ve|i have) been (eating less|skipping meals)",
            "(no|not much) appetite (lately|recently)",
            "(i'?ve|i have) been (eating more|stress eating)",
            "(no real |not much )(change|difference)",
          ],
          hint_tr:
            "İştah: 'My appetite has been low' veya 'I've been skipping meals'.",
        },
        {
          speaker: "npc",
          message:
            "Have you had thoughts of hurting yourself or others?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing like that)",
            "(no|not) (really|specifically|at all)",
            "(some |occasional )?(passing|dark) thoughts (but )?(no )?(plans|intent)",
            "(no )?(thoughts of (harm|hurting myself))",
            "(no|nothing) (concrete|specific)",
            "(no|i haven'?t) (had |been having) (any )?(those )?thoughts",
          ],
          hint_tr:
            "Dürüst ama net: 'No, nothing like that' veya 'Some dark thoughts but no plans'.",
        },
        {
          speaker: "npc",
          message:
            "Thank you for sharing. We'll work on this together — let's set a plan.",
        },
      ],
    },
    {
      id: "ex.mi.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Son birkaç aydır bunalmış hissediyorum.",
      target: "I've been feeling overwhelmed for the past few months.",
      accepted_variants: [
        "I've felt overwhelmed for the past few months.",
        "I've been overwhelmed for a few months now.",
        "For the past few months, I've been feeling overwhelmed.",
        "I've been feeling overwhelmed lately, for a few months.",
        "I've been feeling really overwhelmed for the past few months.",
      ],
      tr_hint:
        "'Feeling overwhelmed' = bunalmış hissetmek (klinik dil). Present perfect süreklilik.",
    },
    {
      id: "ex.mi.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Overwhelmed' ne demek?",
          options: ["Mutlu", "Bunalmış/altında ezilmiş", "Yorgun", "Kızgın"],
          correct_index: 1,
          tr_explanation:
            "'Overwhelmed' = baş edebilemeyecek kadar yük altında hissetmek.",
        },
        {
          question: "Klinik dil + ruh hali açıklamak için?",
          options: [
            "I'm always sad and bad",
            "I've been feeling overwhelmed",
            "Everything is bad",
            "Life is too hard",
          ],
          correct_index: 1,
          tr_explanation:
            "Present perfect 'I've been feeling' süreklilik ve klinik ton verir.",
        },
        {
          question: "Terapistin kendine zarar sorusu — nasıl cevaplanır?",
          options: [
            "Görmezden gel",
            "Dürüst ve net ('No, nothing like that')",
            "Yalan söyle",
            "Sinirlen",
          ],
          correct_index: 1,
          tr_explanation:
            "Bu rutin tarama sorusu — dürüst, kısa cevap güveni inşa eder.",
        },
      ],
    },
  ],
};

// ============================================================
// 19. health.mental.anxiety.1 — Anksiyete
// ============================================================
const lesson_anxiety: BundledLesson = {
  id: "health.mental.anxiety.1",
  skill_id: "health.mental",
  index: 19,
  title: "Anksiyeteyi Tarif Et",
  description:
    "ABD terapist ofisinde: anksiyeteyi klinik dille anlat — fiziksel ve zihinsel belirtileri ayır. 'I've been struggling with anxiety.'",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.anx.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "struggling with anxiety",
      tr_translation: "Anksiyeteyle başa çıkmaya çalışmak",
      example: "I've been struggling with anxiety lately.",
      example_tr: "Son zamanlarda anksiyeteyle başa çıkmaya çalışıyorum.",
    },
    {
      id: "ex.anx.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD terapist ofisi: anksiyeteyi klinik dille tarif — fiziksel + zihinsel belirtiler.",
      npc_role: "Therapist",
      setting: "US therapist's office",
      turns: [
        {
          speaker: "npc",
          message:
            "Tell me what you've been experiencing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) been (struggling|dealing) with anxiety",
            "(i'?ve|i have) been (having|experiencing) (a lot of )?anxiety",
            "(my )?anxiety (has been|is) (bad|worse|more frequent)",
            "(i'?ve|i have) been (feeling )?(anxious|on edge) (a lot|lately|most days)",
            "(i'?ve|i have) been (getting|having) (panic|anxiety) attacks",
          ],
          hint_tr:
            "Klinik açılış: 'I've been struggling with anxiety lately'.",
        },
        {
          speaker: "npc",
          message:
            "How does it show up physically?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?heart (races|pounds|beats fast)",
            "(i can'?t|cannot) (focus|concentrate)",
            "(i (get|have) )?(shortness of breath|tight chest|sweating)",
            "(physical symptoms include )?(racing heart|tight chest|sweating|shaking)",
            "(my )?(stomach|chest) (tightens|gets tight)",
            "(i feel|i'?ve been feeling) (jittery|on edge|wired)",
          ],
          hint_tr:
            "Fiziksel belirtiler: 'My heart races and I can't focus' veya 'Tight chest, sweating'.",
        },
        {
          speaker: "npc",
          message:
            "And mentally — what does it feel like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(thoughts |mind )?(race|spiral)",
            "(i (worry|catastrophize) about )?(things going wrong|everything)",
            "(i can'?t|cannot) (turn off|quiet) my (thoughts|mind)",
            "(i feel|i'?ve been feeling) (on edge|tense|wired)",
            "(my )?mind (races|won'?t stop)",
            "(constant |intrusive )?(worry|catastrophizing|spiraling)",
          ],
          hint_tr:
            "Zihinsel belirtiler: 'My thoughts race and I can't turn them off'.",
        },
        {
          speaker: "npc",
          message:
            "Is it constant or does it come in waves — like panic attacks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mostly )?(constant|baseline|always there)",
            "(it'?s|its) (mostly )?in (waves|episodes)",
            "(i'?ve|i have) had (panic|anxiety) attacks (a few times)",
            "(both|some of each)",
            "(it'?s|its) (more like|generalized) (baseline|background) (anxiety|worry)",
            "(some days|sometimes) (it'?s|its) (a wave|an attack)",
          ],
          hint_tr:
            "Panik vs. genel: 'Mostly baseline, with occasional panic attacks'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. We'll work on grounding techniques and explore therapy options.",
        },
      ],
    },
    {
      id: "ex.anx.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Son zamanlarda anksiyeteyle başa çıkmaya çalışıyorum.",
      target: "I've been struggling with anxiety lately.",
      accepted_variants: [
        "I've been dealing with anxiety lately.",
        "I've been having a lot of anxiety lately.",
        "Lately, I've been struggling with anxiety.",
        "I've been having anxiety issues recently.",
        "I've been wrestling with anxiety lately.",
      ],
      tr_hint:
        "'Struggling with' = -le başa çıkmaya çalışmak. Klinik ton: present perfect.",
    },
    {
      id: "ex.anx.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Struggling with anxiety' klinik tonu?",
          options: [
            "Çok kişisel ve dramatik",
            "Profesyonel, dürüst, klinik",
            "Espri tonu",
            "Saldırgan",
          ],
          correct_index: 1,
          tr_explanation:
            "Bu kalıp tıbbi/terapötik ortamda standart, dürüst-ölçülü ton.",
        },
        {
          question: "Anksiyetenin fiziksel belirtilerine örnek?",
          options: [
            "Mutluluk hissi",
            "Çarpıntı, sıkışmış göğüs, terleme",
            "İştah artışı",
            "Hafif gülümseme",
          ],
          correct_index: 1,
          tr_explanation:
            "Anksiyete sempatik sinir sistemini tetikler: çarpıntı, terleme, kas gerginliği.",
        },
        {
          question: "'Mind races' ne demek?",
          options: [
            "Zihin yavaşlar",
            "Düşünceler hızla akar / durmaz",
            "Konsantrasyon artar",
            "Sakinleşir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Mind races' = düşünceler hızla, kontrolsüz akar — anksiyete belirtisi.",
        },
      ],
    },
  ],
};

// ============================================================
// 20. health.mental.depression.1 — Depresyon
// ============================================================
const lesson_depression: BundledLesson = {
  id: "health.mental.depression.1",
  skill_id: "health.mental",
  index: 20,
  title: "Düşük Mod ve Depresyon",
  description:
    "ABD psikiyatri: aylardır süren düşük modu klinik dille tarif et — enerji, ilgi kaybı, uyku, iştah. 'Low mood for months.'",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.dep.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "low mood",
      tr_translation: "Düşük ruh hali (depresif duygudurum)",
      example: "I've had a low mood for months.",
      example_tr: "Aylardır düşük bir ruh halim var.",
    },
    {
      id: "ex.dep.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD psikiyatri: aylardır süren düşük modu klinik tarif. Enerji, ilgi, uyku, iştah ayrı ayrı geç.",
      npc_role: "Therapist",
      setting: "US psychiatry clinic",
      turns: [
        {
          speaker: "npc",
          message:
            "What's been going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) been (feeling )?(flat|low|down) lately",
            "(i'?ve|i have) had (a |the )?low mood for (months|a while)",
            "(i'?ve|i have) been (in |having )?(a )?low mood",
            "(i'?ve|i have) been (feeling)? (depressed|hopeless|empty)",
            "(my )?mood has been (low|flat|down) for (months|a while)",
            "(i'?ve|i have) been (struggling|dealing) with (a low mood|depression)",
          ],
          hint_tr:
            "Klinik açılış: 'I've had a low mood for months' veya 'I've been feeling flat lately'.",
        },
        {
          speaker: "npc",
          message:
            "Do you still enjoy things you used to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t|cannot) (really |actually )?enjoy (things|activities) (i used to|like before)",
            "(things i used to (love|enjoy)) (just )?(don'?t (do it|interest me))",
            "(i'?ve|i have) (lost (interest|pleasure)) in (most |many )?things",
            "(not really|honestly not)(,)?.{0,30}(used to|before)",
            "(everything feels|things feel) (flat|joyless)",
            "(no|less) (joy|pleasure) in (anything|things)",
          ],
          hint_tr:
            "İlgi kaybı: 'I don't really enjoy things I used to'.",
        },
        {
          speaker: "npc",
          message:
            "How's your energy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(energy is|energy'?s) (low|down|drained)",
            "(i feel|i'?ve been feeling) (exhausted|tired all the time|drained)",
            "(everything feels|simple tasks feel) (like|exhausting)",
            "(getting out of bed|basic things) (is|are|feels) hard",
            "(i'?ve|i have) (no |very little )?energy",
          ],
          hint_tr:
            "Enerji: 'My energy is really low' veya 'Even basic tasks feel exhausting'.",
        },
        {
          speaker: "npc",
          message:
            "And sleep and appetite?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) been (sleeping (too much|a lot)|oversleeping)",
            "(i'?ve|i have) been (having trouble|struggling) (sleeping|with sleep)",
            "(my )?appetite (is|has been) (low|off|reduced)",
            "(i'?ve|i have) (lost|been losing) weight",
            "(both have been|both are) (off|disrupted)",
            "(i'?ve|i have) been (eating more|stress eating)",
          ],
          hint_tr:
            "Uyku + iştah: 'I've been oversleeping. My appetite is low'.",
        },
        {
          speaker: "npc",
          message:
            "Have you had thoughts of harming yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing like that)",
            "(no|not) (really|specifically|at all)",
            "(some |occasional )?(passing|dark) thoughts (but )?(no )?(plans|intent)",
            "(no )?(plans|specific thoughts)",
            "(no|nothing) (concrete|specific)",
            "(no)(,)? (i haven'?t)",
          ],
          hint_tr:
            "Dürüst tarama cevabı: 'No plans, but occasional dark thoughts'.",
        },
        {
          speaker: "npc",
          message:
            "Thank you for being open. Let's talk about treatment options.",
        },
      ],
    },
    {
      id: "ex.dep.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Eskiden sevdiğim şeylerden artık zevk almıyorum.",
      target: "I don't really enjoy things I used to.",
      accepted_variants: [
        "I don't enjoy the things I used to.",
        "Things I used to enjoy don't really do it anymore.",
        "I've lost interest in things I used to enjoy.",
        "I no longer enjoy what I used to.",
        "Stuff I used to love doesn't interest me anymore.",
      ],
      tr_hint:
        "'Things I used to' = eskiden yaptıklarım. 'Don't really enjoy' = pek zevk almıyorum.",
    },
    {
      id: "ex.dep.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Low mood' klinik karşılığı?",
          options: [
            "Geçici sinir",
            "Depresif duygudurum (klinik dil)",
            "Tek günlük üzüntü",
            "Mutlu kararsızlık",
          ],
          correct_index: 1,
          tr_explanation:
            "'Low mood' = sürekli, klinik ölçekte düşük ruh hali — depresyon dilinden.",
        },
        {
          question: "'Anhedonia' (zevk alamama) İngilizce nasıl ifade edilir?",
          options: [
            "I am happy always",
            "I don't really enjoy things I used to",
            "Things make me sleep",
            "Everything is fun",
          ],
          correct_index: 1,
          tr_explanation:
            "Eskiden sevilenden zevk alamama, depresyonun klasik DSM kriteri.",
        },
        {
          question: "Tarama sorularına dürüst cevap önemi?",
          options: [
            "Önemsiz",
            "Doktor doğru plan kurabilsin diye kritik",
            "Sadece nezaket",
            "Hiç cevap verme",
          ],
          correct_index: 1,
          tr_explanation:
            "Dürüst tarama → doğru tedavi. Yalan söylemek tedaviyi zorlaştırır.",
        },
      ],
    },
  ],
};

// ============================================================
// 21. health.mental.options.1 — Terapi vs ilaç
// ============================================================
const lesson_mental_options: BundledLesson = {
  id: "health.mental.options.1",
  skill_id: "health.mental",
  index: 21,
  title: "Terapi vs İlaç Tartışması",
  description:
    "ABD psikiyatri ofisinde: ilaca başlamadan önce terapi denemeyi tercih ettiğini kibarca bildir, dinle.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.mo.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "second opinion",
      tr_translation: "İkinci görüş (başka uzman değerlendirmesi)",
      example:
        "I'd like to get a second opinion before deciding.",
      example_tr: "Karar vermeden önce ikinci bir görüş almak istiyorum.",
    },
    {
      id: "ex.mo.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD psikiyatri ofisinde: ilaç önerildi, sen önce terapi denemek istiyorsun — tercihini bildir, sonra dinle.",
      npc_role: "Therapist",
      setting: "US psychiatry office",
      turns: [
        {
          speaker: "npc",
          message:
            "Based on what you've shared, an SSRI could be helpful.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like to try therapy first",
            "(i'?d|i would) prefer to (start|try) (with )?therapy",
            "(could|can) we (try|consider) therapy first",
            "(before going on medication|before meds)(,)? (could|i'?d like) to try therapy",
            "(i'?m|im) (hesitant|reluctant) about (starting )?medication",
            "(if|would) (that'?s reasonable|that be okay)",
          ],
          hint_tr:
            "Tercih bildir: 'I'd like to try therapy first before going on medication, if that's reasonable'.",
        },
        {
          speaker: "npc",
          message:
            "That's a reasonable approach. Let me explain what we know.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (walk|talk) me through (the )?evidence",
            "(what'?s|what is) (the )?(success rate|response rate) (for therapy alone)",
            "(how long|how many sessions) (does|do) it (usually )?take",
            "(when|how would) (we|i) (know|tell) (if|whether) (it'?s|its) working",
            "(what'?s|what is) (the )?(criteria|benchmark) (to consider|for) (adding )?medication",
          ],
          hint_tr:
            "Detay iste: 'What's the success rate?' veya 'How long before we know?'",
        },
        {
          speaker: "npc",
          message:
            "Therapy alone is effective for mild-to-moderate cases. We typically see change in 6-12 weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what (kind|type) of therapy|which approach) (do you|would you) recommend",
            "(cbt|cognitive behavioral|talk therapy)",
            "(could|can) you (refer|connect) me to (someone|a therapist)",
            "(any|do you have) (in.?network )?(therapist|provider) (referrals|recommendations)",
            "(how often|how frequently) (would|will) (we|i) (meet|have sessions)",
          ],
          hint_tr:
            "Terapi türü: 'What kind of therapy would you recommend?'",
        },
        {
          speaker: "npc",
          message:
            "CBT is well-supported for this. I'll refer you to an in-network therapist.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,40}(appreciate|grateful)",
            "(when|how soon) (will|should) (we|i) (follow up|reassess)",
            "(if|in case) (things|symptoms) (worsen|get worse|don'?t improve)",
            "(could|can) we (revisit|reconsider) (medication|meds) (later )?if needed",
            "(thank you|thanks)(,)?.{0,40}(plan|approach)",
          ],
          hint_tr:
            "Plan kapat: 'Thanks. Could we revisit medication if therapy isn't enough?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. Let's reassess in 8 weeks and consider medication if needed.",
        },
      ],
    },
    {
      id: "ex.mo.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İlaca başlamadan önce terapiyi denemek isterim, eğer mantıklıysa.",
      target: "I'd like to try therapy first before going on medication, if that's reasonable.",
      accepted_variants: [
        "I'd prefer to try therapy first before starting medication, if possible.",
        "Could we try therapy before going on medication, if that's an option?",
        "I'd like to start with therapy before medication, if that's reasonable.",
        "I'd rather try therapy first before going on meds, if that makes sense.",
        "Before going on medication, I'd like to try therapy, if that's reasonable.",
      ],
      tr_hint:
        "'If that's reasonable' = mantıklıysa (hedging). 'Try first' = önce dene.",
    },
    {
      id: "ex.mo.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Second opinion' ne demek?",
          options: [
            "İkinci ziyaret",
            "Başka bir uzmandan ek değerlendirme",
            "Aynı doktora yeniden gitmek",
            "Acil servis",
          ],
          correct_index: 1,
          tr_explanation:
            "'Second opinion' = bir teşhis veya plana ek görüş almak için başka uzmana gitmek.",
        },
        {
          question: "Tedavi tercihini bildiren hedged kalıp?",
          options: [
            "I refuse medication!",
            "I'd like to try therapy first, if that's reasonable",
            "No drugs ever",
            "Therapy now",
          ],
          correct_index: 1,
          tr_explanation:
            "'If that's reasonable' yumuşatma — kararı doktorla işbirliği içinde verir.",
        },
        {
          question: "'CBT' açılımı?",
          options: [
            "Clinical Brain Therapy",
            "Cognitive Behavioral Therapy",
            "Childhood Behavior Treatment",
            "Comprehensive Body Therapy",
          ],
          correct_index: 1,
          tr_explanation:
            "'Cognitive Behavioral Therapy' = bilişsel davranışçı terapi.",
        },
      ],
    },
  ],
};

// ============================================================
// 22. health.hospital.preop.1 — Pre-op brifing
// ============================================================
const lesson_preop: BundledLesson = {
  id: "health.hospital.preop.1",
  skill_id: "health.hospital",
  index: 22,
  title: "Pre-op Brifing ve Anestezi",
  description:
    "ABD'de ameliyat öncesi: anesteziye geçmiş reaksiyonunu söyle, NPO talimatlarını doğrula, refakatçi planını netleştir.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.po.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "anesthesia reaction",
      tr_translation: "Anestezi reaksiyonu",
      example:
        "I had a reaction to anesthesia once.",
      example_tr: "Bir keresinde anesteziye reaksiyon gösterdim.",
    },
    {
      id: "ex.po.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD hastanesi pre-op brifing: anestezi alerji geçmişi paylaş, NPO + refakatçi plan netleştir.",
      npc_role: "Hospital admissions clerk",
      setting: "US hospital pre-op holding area",
      turns: [
        {
          speaker: "npc",
          message:
            "Have you had anesthesia before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,30}(reaction|issue|problem) (once|in the past)",
            "(i had|i'?ve had) a reaction (to anesthesia )?(once|before|in the past)",
            "(i'?ve had|i had) (some |a bit of )?(nausea|issues) (with|after) anesthesia",
            "(yes|yeah)(,)?.{0,30}but (i had|there was) a (reaction|complication)",
            "(yes|yeah)(,)? (with )?(some|a) (reaction|complication)",
          ],
          hint_tr:
            "Geçmişi paylaş: 'Yes, I had a reaction to anesthesia once'.",
        },
        {
          speaker: "npc",
          message:
            "Can you describe what happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(severe |bad )?(nausea|vomiting) (afterwards|when waking up)",
            "(i woke up|i had) (with )?(a rash|hives|breathing issues)",
            "(i'?m not sure|i don'?t remember) (the |exactly the )?(specifics|details)",
            "(it was|it'?s) (in my (records|chart)|on file)",
            "(prolonged|lingering) (nausea|grogginess)",
            "(my )?(parent|family member) (told me|said)",
          ],
          hint_tr:
            "Olayı tarif et: 'Severe nausea and vomiting afterwards'.",
        },
        {
          speaker: "npc",
          message:
            "Thanks. I'll flag that for the anesthesiologist. Let me confirm NPO status.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no )?(food or drink|nothing) since (midnight|last night)",
            "(i (haven'?t|have not)) (eaten|drunk anything) since (midnight|last night)",
            "(just |only )?(sips of |a sip of )?water (this morning)?",
            "(nothing since|i stopped at) (midnight|11 pm)",
            "(yes|yeah)(,)? (i'?ve been|been) (fasting|npo)",
          ],
          hint_tr:
            "NPO doğrula: 'Nothing since midnight, just a sip of water this morning'.",
        },
        {
          speaker: "npc",
          message:
            "Good. Do you have someone to drive you home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,30}(spouse|partner|friend|family)",
            "(my (spouse|partner|friend|brother|sister)) is (here|coming|in the waiting room)",
            "(yes|yeah)(,)? (my )?(spouse|partner|friend) (will be|is) (here|driving)",
            "(yes|yeah)(,)? (someone|a family member) is here",
            "(yes|yeah)(,)? (it'?s|its) (already )?arranged",
          ],
          hint_tr:
            "Refakatçi: 'Yes, my spouse is in the waiting room'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Any last questions before we get started?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long|how long is) (the |my )?(procedure|surgery)",
            "(when|how soon) (will|should) i (be (out|awake))",
            "(what (should|will) i expect|how will i feel) (afterwards|after waking up)",
            "(when|how soon) (can|will) (i|my family) (see|visit) me",
            "(any|are there) (specific |particular )?(things to expect|warning signs)",
          ],
          hint_tr:
            "Son sorular: 'How long is the procedure?' veya 'When will I be awake?'",
        },
        {
          speaker: "npc",
          message:
            "Procedure is 90 minutes. You'll be in recovery for about 2 hours afterward.",
        },
      ],
    },
    {
      id: "ex.po.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir keresinde anesteziye reaksiyon göstermiştim.",
      target: "I had a reaction to anesthesia once.",
      accepted_variants: [
        "I once had a reaction to anesthesia.",
        "I had an anesthesia reaction in the past.",
        "I've had a reaction to anesthesia before.",
        "There was an issue with anesthesia in the past.",
        "I had a previous reaction to anesthesia.",
      ],
      tr_hint:
        "'Had a reaction to' = -e karşı reaksiyon göstermek.",
    },
    {
      id: "ex.po.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'NPO' kuralı pre-op için neden önemli?",
          options: [
            "Mide doluyken anestezi riskli",
            "Sindirim için iyi",
            "Sigorta isteği",
            "Geleneksel",
          ],
          correct_index: 0,
          tr_explanation:
            "Boş mide aspirasyon riskini azaltır — anestezi güvenliği için kritik.",
        },
        {
          question: "Anestezi reaksiyon geçmişini paylaşmak?",
          options: [
            "Önemsiz, söyleme",
            "Hayati önemli — mutlaka söyle",
            "Sadece sorulursa",
            "Sigortaya söyle yeter",
          ],
          correct_index: 1,
          tr_explanation:
            "Anesteziyolog plana göre ilaç seçer — geçmiş reaksiyon hayati bilgi.",
        },
        {
          question: "Refakatçi sorgusu pre-op'ta neden var?",
          options: [
            "Yasal zorunluluk",
            "Anestezi sonrası araba kullanamazsın",
            "Sosyal beklenti",
            "Geleneksel görgü",
          ],
          correct_index: 1,
          tr_explanation:
            "Sedasyon sonrası reflexler/judgment etkilenir — biri eve götürmeli.",
        },
      ],
    },
  ],
};

// ============================================================
// 23. health.hospital.postop.1 — Post-op ağrı
// ============================================================
const lesson_postop: BundledLesson = {
  id: "health.hospital.postop.1",
  skill_id: "health.hospital",
  index: 23,
  title: "Post-op Ağrı Yönetimi",
  description:
    "ABD hastanesi: ameliyat sonrası ağrı 7/10'a çıktı — hemşireye haber ver, ilaç zamanlamasını sor.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.postop.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "pain scale",
      tr_translation: "Ağrı ölçeği (0-10)",
      example:
        "The pain's about a seven out of ten.",
      example_tr: "Ağrı 10 üzerinden 7 civarında.",
    },
    {
      id: "ex.postop.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD hastanesinde post-op: ağrı arttı (7/10), hemşireye haber ver, ilaç zamanlamasını sor.",
      npc_role: "Specialist",
      setting: "US hospital post-op ward",
      turns: [
        {
          speaker: "npc",
          message: "How are you feeling?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?pain('?s| has) (gotten|been getting) (worse|stronger)",
            "(the )?pain('?s| is) (about |around )?(a )?seven (out of ten)?",
            "(my )?pain (level )?is (up|increasing|getting bad)",
            "(i'?m|im) (in |having )?(a lot of |more )?pain (now|than before)",
            "(it'?s|its) (worse|gotten worse) (since|over) (the last|past) (hour|few hours)",
          ],
          hint_tr:
            "Ağrıyı bildir: 'The pain's gotten worse — maybe a seven out of ten'.",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. When was your last dose?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|around) (three|four|two) hours ago",
            "(i'?m not sure|i don'?t remember exactly)",
            "(i think|i believe) (about|around) \\d+(:\\d+)? (am|pm)?",
            "(quite a |a )?while ago(,)? (maybe )?(three|four) hours",
            "(it'?s|its) been (a few|three|four) hours",
          ],
          hint_tr:
            "Doz zamanı: 'About three hours ago' veya 'I'm not sure'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. I'll check what's available — let me see the orders.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (also )?(tell|let) me (when|how often) i (can|should) (take|have) (it|the medication)",
            "(what'?s|what is) (the )?next (dose|scheduled) (time)?",
            "(any|are there) (concerns about|risks of) (dependency|side effects)",
            "(how (often|frequently)) (can|am i allowed to) (take|have) (it|pain meds)",
            "(is there|do i have) anything (else|stronger)",
          ],
          hint_tr:
            "Zamanlama sor: 'When can I take the next dose?'",
        },
        {
          speaker: "npc",
          message:
            "You can have your next dose now. I'll also check with the doctor about scheduled vs as-needed dosing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,30}(when|how) (will|can) (i|we) (start|begin) (moving|walking)",
            "(when|how soon) (can|should) i (start|begin) (walking|getting up)",
            "(any|are there) (concerns|risks) (about (walking|moving))",
            "(could|can) i (have|get) (some )?help (getting up|walking)",
            "(thank you|thanks)(,)?.{0,40}(mobilization|moving)",
          ],
          hint_tr:
            "Hareketlenme: 'When can I start walking?' veya 'Could I have help getting up?'",
        },
        {
          speaker: "npc",
          message:
            "We aim for gentle walking by tomorrow morning. I can help you sit up now.",
        },
      ],
    },
    {
      id: "ex.postop.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ağrı arttı, on üzerinden yedi gibi.",
      target: "The pain's gotten worse — maybe a seven out of ten.",
      accepted_variants: [
        "The pain has gotten worse — maybe seven out of ten.",
        "The pain is worse now, about a seven out of ten.",
        "Pain has gone up, around a seven out of ten.",
        "It's a seven out of ten now and getting worse.",
        "The pain has increased — maybe a seven out of ten.",
      ],
      tr_hint:
        "'Seven out of ten' = standart ağrı ölçeği. 'Gotten worse' = arttı.",
    },
    {
      id: "ex.postop.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Ağrı ölçeği nasıl ifade edilir?",
          options: [
            "Pain is bad",
            "Seven out of ten",
            "Pain seven number",
            "Hurting lots",
          ],
          correct_index: 1,
          tr_explanation:
            "'X out of ten' = standart ağrı ölçek ifadesi (0-10).",
        },
        {
          question: "Hemşireden hızlı ek doz iste?",
          options: [
            "Give me more drugs now!",
            "When can I have my next dose?",
            "Pills now please",
            "Pain too much help",
          ],
          correct_index: 1,
          tr_explanation:
            "'When can I have my next dose?' = profesyonel, somut talep.",
        },
        {
          question: "Post-op'ta erken mobilizasyon neden önemli?",
          options: [
            "Sigorta isteği",
            "Pıhtı/komplikasyon riskini azaltır",
            "Sosyal aktivite",
            "Hemşire pratiği",
          ],
          correct_index: 1,
          tr_explanation:
            "Erken hareket DVT, atelektazi gibi komplikasyonları önler.",
        },
      ],
    },
  ],
};

// ============================================================
// 24. health.hospital.navigate.1 — Hastanede yön bulma
// ============================================================
const lesson_navigate: BundledLesson = {
  id: "health.hospital.navigate.1",
  skill_id: "health.hospital",
  index: 24,
  title: "Hastane İçinde Yön Bulma",
  description:
    "İngiltere'de hastane: kardiyoloji servisini bul, kat + asansör + departman sor. Polite ısrar.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.nav.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "cardiology ward",
      tr_translation: "Kardiyoloji servisi",
      example:
        "Could you point me to the cardiology ward?",
      example_tr:
        "Bana kardiyoloji servisinin yönünü gösterebilir misiniz?",
    },
    {
      id: "ex.nav.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İngiltere hastanesinde danışma masası: kardiyoloji servisini bul, oda 4B'yi sor.",
      npc_role: "Hospital admissions clerk",
      setting: "UK hospital information desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Hello, can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (point|direct) me to (the )?cardiology (ward|department)",
            "(could|can) you (tell|show) me (where|how to get to) (the )?cardiology",
            "(i'?m|im) (looking|trying to find) (for )?(the )?cardiology (ward|department)",
            "(could|can) you (help|tell) me (where|how) to find (the )?cardiology",
            "(which way|where) is (the )?cardiology (ward|department)",
          ],
          hint_tr:
            "Yön sor: 'Could you point me to the cardiology ward?'",
        },
        {
          speaker: "npc",
          message:
            "Sure. Take the lift to the third floor and turn right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) visiting a patient in room \\d+[a-z]?",
            "(i'?m|im) (here )?(to visit|visiting) (a )?(patient |someone )?in room \\d+",
            "(could|can) you (also |as well )?(help|tell) me (how to find|where) room \\d+",
            "(once on the floor|when i get there)(,)? where (is|do i find) room \\d+",
            "(i need to find|i'?m looking for) room \\d+[a-z]?",
          ],
          hint_tr:
            "Spesifik oda: 'I'm visiting a patient in room 4B'.",
        },
        {
          speaker: "npc",
          message:
            "Room 4B is on the right side, near the nurses' station.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(are there|is there) (visiting|posted) hours",
            "(any|do i need) (a )?(visitor )?(pass|badge)",
            "(should|do) i (sign in|register) (somewhere|first)",
            "(could|can) you (write|draw) (it down|a map)",
            "(thank you|thanks)(,)?.{0,40}(visiting hours|pass)",
          ],
          hint_tr:
            "Ek bilgi: 'Are there visiting hours?' veya 'Do I need a visitor pass?'",
        },
        {
          speaker: "npc",
          message:
            "Visiting hours are until 8 PM. Sign in at the desk on the third floor.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,20}(much|so much|appreciate)",
            "(thanks|thank you)(,)? (that'?s|thats) (helpful|great)",
            "(thank you|thanks)(,)?.{0,30}(very|really) (helpful|kind)",
            "(perfect|great|brilliant)(,)? thank you",
            "(thanks|thank you)(,)? (have a |take a )?(nice|good) (day|one)",
          ],
          hint_tr:
            "Teşekkür kapanış: 'Thank you so much, that's very helpful'.",
        },
        {
          speaker: "npc",
          message: "You're welcome. Hope your visit goes well.",
        },
      ],
    },
    {
      id: "ex.nav.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bana kardiyoloji servisinin yönünü gösterebilir misiniz?",
      target: "Could you point me to the cardiology ward?",
      accepted_variants: [
        "Could you direct me to the cardiology ward?",
        "Can you show me where the cardiology ward is?",
        "Could you tell me how to get to cardiology?",
        "Where is the cardiology ward, please?",
        "Could you point me toward cardiology?",
      ],
      tr_hint:
        "'Point me to' = yönünü göstermek. 'Ward' = servis (UK), 'unit' (US).",
    },
    {
      id: "ex.nav.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Ward' İngilizce sağlıkta ne demek?",
          options: ["Bekleme odası", "Hastane servisi/bölümü", "Doktor odası", "Kafeterya"],
          correct_index: 1,
          tr_explanation:
            "'Ward' = hastane içinde özelleşmiş servis (UK kullanımı yaygın).",
        },
        {
          question: "İngiltere'de 'lift' ne demek?",
          options: ["Merdiven", "Asansör (UK)", "Yürüyen merdiven", "Koridor"],
          correct_index: 1,
          tr_explanation:
            "'Lift' (UK) = 'Elevator' (US) = asansör.",
        },
        {
          question: "Kibarca yön sormak?",
          options: [
            "Where cardiology?",
            "Tell me cardiology now",
            "Could you point me to the cardiology ward?",
            "Cardiology direction please",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could you point me to...?' = kibar, doğal kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// 25. health.hospital.discharge.1 — Taburcu
// ============================================================
const lesson_discharge: BundledLesson = {
  id: "health.hospital.discharge.1",
  skill_id: "health.hospital",
  index: 25,
  title: "Taburcu Kağıdı ve Follow-up",
  description:
    "ABD hastanesi taburcu: ilaçları tek tek geçirt, follow-up randevusunu doğrula, kafa karıştıran noktaları sor.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.dis.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "follow-up appointment",
      tr_translation: "Takip randevusu",
      example:
        "When is my follow-up appointment?",
      example_tr: "Takip randevum ne zaman?",
    },
    {
      id: "ex.dis.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD'de taburcu: hemşire ilaçları açıklıyor, sen tek tek doğrula, takip randevusunu netleştir.",
      npc_role: "Specialist",
      setting: "US hospital discharge desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your discharge paperwork. Any questions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (walk|talk) me through (the )?medications (one more time|again)",
            "(could|can) we (go|run) through (the |each )?medication",
            "(i'?d|i would) like to (go|run) through (the )?medications (one by one|in detail)",
            "(could|can) you (explain|review) (each |the )?(medication|drug)",
            "(any |what about) (drug )?interactions (between (the )?medications)?",
          ],
          hint_tr:
            "İlaçları tekrar geç: 'Could you walk me through the medications one more time?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. First, the antibiotic — twice a day for 10 days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(with|on an empty stomach)|(with food|after meals)?",
            "(any |what about )?side effects (i should (watch|know about))?",
            "(should|do) i (avoid|stay away from) anything (specific )?",
            "(any |are there) (drug )?interactions",
            "(what (if|happens if)) i (miss|forget) a dose",
            "(any |are there) (foods|alcohol) to avoid",
          ],
          hint_tr:
            "Antibiyotik detayı: 'With food or empty stomach?' veya 'Any side effects?'",
        },
        {
          speaker: "npc",
          message:
            "Take with food, avoid alcohol. Watch for rash or breathing issues.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and )?(the )?(pain (medication|med)|painkiller)",
            "(what about |how often) (the )?(pain (medication|med))",
            "(can|should) i (take|keep taking) (the )?pain (medication|meds)",
            "(how long )(should|do) i (take|continue) (the )?(pain (med|medication))",
            "(any concerns about|risk of) (dependency|tolerance) (with )?(pain meds)",
          ],
          hint_tr:
            "Ağrı kesici: 'And the pain medication?' veya 'How long should I take it?'",
        },
        {
          speaker: "npc",
          message:
            "Pain med is as-needed, every 6 hours max. Stop when pain is manageable without it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(when|how soon) (is|do i (have|need)) (my )?follow.?up",
            "(could|can) you (confirm|give me the date for) (the )?follow.?up",
            "(when|how soon) (should|do i need) to (see|come back to) (the )?(doctor|surgeon)",
            "(is|do you have) (the )?follow.?up (date|appointment) scheduled",
            "(what'?s|what is) (the )?next step",
          ],
          hint_tr:
            "Takip randevu: 'When is my follow-up appointment?'",
        },
        {
          speaker: "npc",
          message:
            "Follow-up is on the 24th at 10 AM with Dr. Lee.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(when|under what conditions) should i (call|come back) (urgently|before then)",
            "(any |what are the )?(red flags|warning signs)",
            "(should|do) i (avoid|limit) (any |certain )?(activities|exercise)",
            "(could|can) i (have|get) (this|the instructions) in writing",
            "(thank you|thanks)(,)?.{0,40}(very helpful|appreciate)",
          ],
          hint_tr:
            "Acil durum: 'When should I call the doctor urgently?'",
        },
        {
          speaker: "npc",
          message:
            "Call right away if you have fever, increased pain, or wound drainage.",
        },
      ],
    },
    {
      id: "ex.dis.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İlaçları bir kez daha geçer misiniz?",
      target: "Could you walk me through the medications one more time?",
      accepted_variants: [
        "Could you go through the medications again?",
        "Can you review the medications one more time?",
        "Could we go through the meds again?",
        "Could you walk me through the meds once more?",
        "Can you explain the medications one more time?",
      ],
      tr_hint:
        "'Walk me through' = adım adım açıklamak. 'One more time' = bir kez daha.",
    },
    {
      id: "ex.dis.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Follow-up appointment' ne demek?",
          options: [
            "Acil randevu",
            "Takip/kontrol randevusu",
            "Yeni hasta randevusu",
            "Telefon görüşmesi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Follow-up' = bir tedavi/prosedür sonrası ilerlemeyi izlemek için takip randevusu.",
        },
        {
          question: "'Walk me through' deyiminin anlamı?",
          options: [
            "Yürüt beni",
            "Adım adım açıkla",
            "Tek seferde özetle",
            "Yaz ve ver",
          ],
          correct_index: 1,
          tr_explanation:
            "'Walk through' = adım adım yönlendir/açıkla (deyim).",
        },
        {
          question: "Acil durum belirtilerini sormak?",
          options: [
            "Just tell me normal",
            "When should I call urgently?",
            "Don't worry me",
            "What's wrong?",
          ],
          correct_index: 1,
          tr_explanation:
            "'When should I call urgently?' = acil çağrı kriterlerini netleştirir.",
        },
      ],
    },
  ],
};

// ============================================================
// 26. health.hospital.wound.1 — Yara bakımı
// ============================================================
const lesson_wound: BundledLesson = {
  id: "health.hospital.wound.1",
  skill_id: "health.hospital",
  index: 26,
  title: "Yara Bakımı ve Ev Talimatı",
  description:
    "ABD hastanesinde hemşireden taburcu öncesi yara bakım talimatları al — pansuman sıklığı, kızarıklık/akıntı/ateş uyarı işaretleri.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.wound.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "change the dressing",
      tr_translation: "Pansumanı değiştirmek",
      example:
        "How often should I change the dressing?",
      example_tr: "Pansumanı ne sıklıkla değiştirmem gerek?",
    },
    {
      id: "ex.wound.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD'de hemşire yara bakım talimatları veriyor: pansuman sıklığı, uyarı işaretleri, doktora ne zaman ara.",
      npc_role: "Specialist",
      setting: "US hospital discharge — wound care",
      turns: [
        {
          speaker: "npc",
          message:
            "Let me show you how to care for the wound at home.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "how often should i change the dressing",
            "(how (many times|frequently)) (do|should) i (change|replace) (the )?(dressing|bandage)",
            "(how often|when) (do|should) i (clean|wash) (the |it|the wound)",
            "(could|can) you (walk|talk) me through (the )?(daily |routine )?care",
            "(what'?s|what is) (the )?(routine|protocol) for (changing|cleaning)",
          ],
          hint_tr:
            "Sıklık sor: 'How often should I change the dressing?'",
        },
        {
          speaker: "npc",
          message:
            "Once a day, more if it gets wet or dirty.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what )?(should|do) i (use|put) on (it|the wound)",
            "(should|do) i (use|apply) (any )?(ointment|cream|antiseptic)",
            "(can|should) i (shower|get it wet|bathe)",
            "(could|can) you (walk|show) me (how|the technique)",
            "(any|are there) (specific )?products to (use|avoid)",
          ],
          hint_tr:
            "Ürün/teknik: 'Should I use any ointment?' veya 'Can I shower?'",
        },
        {
          speaker: "npc",
          message:
            "Plain saline to clean, then a thin layer of antibiotic ointment. Showering is fine after 48 hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|when) (are|would be) (the )?(signs of infection|warning signs)",
            "(when|in what cases) should i (call|come back to) (the )?doctor",
            "(any|are there) (red flags|warning signs) (i should (watch|look) for)",
            "(what )?signs (would|should) i (look|watch) for",
            "(when|under what conditions) should i (call|seek) (help|attention)",
          ],
          hint_tr:
            "Uyarı işaretleri: 'When should I call the doctor?' veya 'What are the warning signs?'",
        },
        {
          speaker: "npc",
          message:
            "Call for redness spreading, drainage that's yellow or smells bad, or fever above 100.4.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,40}(in writing|on paper|handout)",
            "(could|can) i (have|get) (this|the instructions) (in writing|on paper)",
            "(could|can) you (give|provide) (a )?(printed )?(handout|summary)",
            "(thanks|thank you)(,)? (very helpful|i appreciate it)",
            "(could|can) you (write|note) (it|that) down",
          ],
          hint_tr:
            "Yazılı talimat: 'Could I get this in writing?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — here's a printed handout with everything we discussed.",
        },
      ],
    },
    {
      id: "ex.wound.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pansumanı ne sıklıkla değiştirmem gerek?",
      target: "How often should I change the dressing?",
      accepted_variants: [
        "How often should I change the bandage?",
        "How frequently should I change the dressing?",
        "How many times a day should I change the dressing?",
        "How often do I need to change the dressing?",
        "When should I change the dressing?",
      ],
      tr_hint:
        "'How often' = ne sıklıkla. 'Change the dressing' = pansumanı değiştir.",
    },
    {
      id: "ex.wound.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Dressing' yara bakımında ne demek?",
          options: ["Giyim", "Pansuman/sargı", "Salata sosu", "İlaç"],
          correct_index: 1,
          tr_explanation:
            "'Dressing' = yara üzerine konan pansuman/sargı.",
        },
        {
          question: "Enfeksiyon uyarı işaretleri?",
          options: [
            "İyileşme hızlanır",
            "Yayılan kızarıklık, kötü kokulu akıntı, ateş",
            "Hafif kaşıntı",
            "Renk değişmez",
          ],
          correct_index: 1,
          tr_explanation:
            "Yayılan kızarıklık + akıntı + ateş = enfeksiyon, doktor ara.",
        },
        {
          question: "Yazılı talimat istemek?",
          options: [
            "Write everything down for me!",
            "Could I get this in writing?",
            "Paper please",
            "I forget tell me again",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could I get this in writing?' = kibar yazılı talimat isteği.",
        },
      ],
    },
  ],
};

// ============================================================
// 27. health.specialist.secondop.1 — İkinci görüş
// ============================================================
const lesson_secondop: BundledLesson = {
  id: "health.specialist.secondop.1",
  skill_id: "health.specialist",
  index: 27,
  title: "İkinci Görüş İste",
  description:
    "ABD doktor ofisinde: tedavi kararı vermeden ikinci bir uzmanın görüşünü kibarca iste, records transferini ayarla.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.so.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "second opinion",
      tr_translation: "İkinci görüş",
      example:
        "I'd like a second opinion, please.",
      example_tr: "İkinci bir görüş almak istiyorum, lütfen.",
    },
    {
      id: "ex.so.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD doktoruna: önemli tedavi kararı öncesi ikinci görüş istediğini bildir, kayıt transferini ayarla.",
      npc_role: "Specialist",
      setting: "US specialist office",
      turns: [
        {
          speaker: "npc",
          message:
            "Have you decided on the treatment plan?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like (to get )?a second opinion",
            "(before deciding|before i decide)(,)? (i'?d|i would) like (a |to get a )?second opinion",
            "(could|can) i (get|have) a second opinion",
            "(i'?d|i would) like to (get|hear) another (perspective|opinion)",
            "(would|could) it be (alright|okay) (to|if i) (get|seek) (a )?second opinion",
          ],
          hint_tr:
            "İkinci görüş iste: 'I'd like a second opinion before deciding'.",
        },
        {
          speaker: "npc",
          message:
            "That's completely reasonable. Many patients do this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (recommend|suggest) (someone|another specialist)",
            "(any|do you have) (in.?network |colleagues )?(recommendations)",
            "(could|can) you (refer|send) me (to|toward) (someone|another specialist)",
            "(could|can) you (help|arrange) (the )?(records|chart) transfer",
            "(how|what'?s the process) do (i|we) (transfer|send) (my )?records",
          ],
          hint_tr:
            "Öneri + kayıt: 'Could you recommend someone?' veya 'Can you help with records transfer?'",
        },
        {
          speaker: "npc",
          message:
            "I can recommend Dr. Hayes. We can send your records over.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long|when) (will|does) (the )?(transfer|process) take",
            "(do |will) i (need to|have to) (sign|fill out) (a |any )?(forms|consent)",
            "(any|is there an) (out.?of.?pocket )?cost",
            "(would|could) (it|the records transfer) be (digital|electronic)",
            "(thank you|thanks)(,)?.{0,40}(records|process)",
          ],
          hint_tr:
            "Detay: 'How long will the transfer take?' veya 'Do I need to sign anything?'",
        },
        {
          speaker: "npc",
          message:
            "You'll sign a release form. Records typically transfer within 3-5 business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,40}(appreciate|grateful)",
            "(thanks|thank you) for (understanding|being supportive)",
            "(once|after) i (hear|have) (the )?(second opinion)(,)? (we'?ll|i'?ll) (revisit|come back)",
            "(i'?ll|i will) (be back|come back) (after|once) (i'?ve|i have) (heard|talked)",
            "(thanks|thank you)(,)? (this means a lot|i really appreciate it)",
          ],
          hint_tr:
            "Kapanış: 'Thanks for understanding — I'll come back after the second opinion'.",
        },
        {
          speaker: "npc",
          message:
            "Of course — take your time. Call us when you're ready to decide.",
        },
      ],
    },
    {
      id: "ex.so.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Karar vermeden önce başka bir görüş almak isterim.",
      target: "I'd like to get another perspective before deciding.",
      accepted_variants: [
        "I'd like a second opinion before deciding.",
        "Before deciding, I'd like to get a second opinion.",
        "I want another perspective before making a decision.",
        "Could I get a second opinion before deciding?",
        "I'd like another opinion before I decide.",
      ],
      tr_hint:
        "'Another perspective' = başka bir bakış açısı. 'Before deciding' = karar vermeden önce.",
    },
    {
      id: "ex.so.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Second opinion' istemenin doktoru üzeceği doğru mu?",
          options: [
            "Evet, doktor kırılır",
            "Hayır, profesyonel doktorlar rutin görür",
            "Sadece bazen",
            "Kanunen yasak",
          ],
          correct_index: 1,
          tr_explanation:
            "İkinci görüş hastanın hakkı. Profesyonel doktorlar normal karşılar, sıkça önerir.",
        },
        {
          question: "'Records transfer' ne demek?",
          options: [
            "Hastalık değişimi",
            "Tıbbi kayıtların başka doktora gönderilmesi",
            "Doktor değişimi",
            "Sigorta değişimi",
          ],
          correct_index: 1,
          tr_explanation:
            "Eski doktor → yeni doktora kayıt aktarımı; release formu imzalanır.",
        },
        {
          question: "İkinci görüş için kibar istek?",
          options: [
            "I don't trust you, I want another doctor",
            "I'd like to get another perspective before deciding",
            "Your opinion is wrong",
            "Tell me a better doctor",
          ],
          correct_index: 1,
          tr_explanation:
            "'Another perspective before deciding' = suçlamadan, profesyonel.",
        },
      ],
    },
  ],
};

// ============================================================
// 28. health.specialist.referral.1 — Referral
// ============================================================
const lesson_referral: BundledLesson = {
  id: "health.specialist.referral.1",
  skill_id: "health.specialist",
  index: 28,
  title: "Aile Hekiminden Sevk Al",
  description:
    "ABD'de aile hekiminden romatoloji uzmanına sevk iste — gerekçeni özetle, in-network listesi sor.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.ref.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "referral",
      tr_translation: "Sevk (uzmana yönlendirme)",
      example:
        "I'd like a referral to a rheumatologist.",
      example_tr: "Bir romatoloji uzmanına sevk istiyorum.",
    },
    {
      id: "ex.ref.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD aile hekimi ofisi: romatoloji uzmanına sevk iste, gerekçeni özetle, in-network listesi al.",
      npc_role: "Specialist",
      setting: "US primary care",
      turns: [
        {
          speaker: "npc",
          message:
            "What can I do for you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|i would) like (a |an )?referral to (a )?rheumatologist",
            "(could|can) you (refer|send) me to (a )?rheumatologist",
            "(i'?d|i would) like (to see|to get a referral to) (a )?(specialist|rheumatologist)",
            "(could|can) (i|you) (have|give me) (a )?referral to (a )?(rheumatologist|specialist)",
            "(i'?d|i would) like to (see|consult) a rheumatologist",
          ],
          hint_tr:
            "Sevk iste: 'I'd like a referral to a rheumatologist if possible'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. What symptoms have you been having?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(joint |morning )?(pain|stiffness) (in (my )?(hands|knees|joints))",
            "(i'?ve|i have) been (having|getting) (joint |morning )?(pain|stiffness)",
            "(swelling|tenderness) in (my )?(joints|hands|fingers)",
            "(it'?s|its) (worse|stiffer) in the morning",
            "(i'?m|im) (concerned|worried) about (arthritis|rheumatoid)",
            "(family history of (arthritis|rheumatoid))",
          ],
          hint_tr:
            "Gerekçe: 'I've been having joint pain and morning stiffness'.",
        },
        {
          speaker: "npc",
          message:
            "That sounds worth investigating. I'll write the referral.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|you) (have|give me) (a |an )?in.?network (list|provider)",
            "(any|do you have) (in.?network )?(specialists|rheumatologists)",
            "(could|can) you (recommend|suggest) someone in.?network",
            "(is|will) (the referral|it) (good|valid) for (a few|six) months",
            "(how long|when) (will|does) (the referral|it) (take|need)",
          ],
          hint_tr:
            "In-network iste: 'Could you give me an in-network list?'",
        },
        {
          speaker: "npc",
          message:
            "I'll print a list of in-network rheumatologists in your area.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?.{0,40}(appreciate|grateful)",
            "(how|in what way) (should|do) i (follow up|share results)",
            "(could|can) you (send|share) (my |the )?records (to|with) (them|the specialist)",
            "(thank you|thanks)(,)?.{0,30}(records|follow up)",
            "(should|do) i (let|update) you (know|after the visit)",
          ],
          hint_tr:
            "Takip: 'Could you send my records to them?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, I'll send your records ahead. Update me after the specialist visit.",
        },
      ],
    },
    {
      id: "ex.ref.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Mümkünse bir romatoloji uzmanına sevk istiyorum.",
      target: "I'd like a referral to a rheumatologist if possible.",
      accepted_variants: [
        "I'd like to be referred to a rheumatologist if possible.",
        "Could I get a referral to a rheumatologist if possible?",
        "I'd like a referral to a rheumatologist, please.",
        "Could you refer me to a rheumatologist if possible?",
        "Could I have a referral to a rheumatologist?",
      ],
      tr_hint:
        "'Referral to' = -e sevk. 'If possible' = mümkünse (hedge).",
    },
    {
      id: "ex.ref.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Referral' ne demek?",
          options: [
            "Yeni hasta randevusu",
            "Bir uzmana sevk",
            "İlaç reçetesi",
            "Test sonucu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Referral' = aile hekimi/birinci basamak hekim tarafından uzmana yönlendirme.",
        },
        {
          question: "Sevk için gerekçeyi özetlemek neden önemli?",
          options: [
            "Önemsiz",
            "Doktor uygunluğu değerlendirir + uzman hazırlanır",
            "Sosyal nezaket",
            "Yasal zorunluluk",
          ],
          correct_index: 1,
          tr_explanation:
            "Net gerekçe → doktor doğru uzmana yönlendirir, randevu daha verimli geçer.",
        },
        {
          question: "'In-network' isteme amacı?",
          options: [
            "Mağazada indirim",
            "Sigorta tarafından karşılanan uzman",
            "Daha hızlı randevu",
            "Acil servis",
          ],
          correct_index: 1,
          tr_explanation:
            "'In-network' uzman = sigortanın anlaşmalı, daha düşük cepten masraf.",
        },
      ],
    },
  ],
};

// ============================================================
// 29. health.specialist.options.1 — Tedavi seçenekleri
// ============================================================
const lesson_options: BundledLesson = {
  id: "health.specialist.options.1",
  skill_id: "health.specialist",
  index: 29,
  title: "Tedavi Seçenekleri Tart",
  description:
    "ABD uzman ofisinde: her seçeneğin artılarını ve eksilerini karşılaştırarak öğren — cerrahi vs. konservatif vs. izleme.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.opt.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "pros and cons",
      tr_translation: "Artılar ve eksiler",
      example:
        "Could you walk me through the pros and cons of each option?",
      example_tr:
        "Her seçeneğin artılarını ve eksilerini anlatabilir misiniz?",
    },
    {
      id: "ex.opt.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD uzman ofisi: üç tedavi seçeneği var (cerrahi, konservatif, izleme). Her birini karşılaştır.",
      npc_role: "Specialist",
      setting: "US specialist consultation",
      turns: [
        {
          speaker: "npc",
          message:
            "There are three approaches we could consider.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (walk|talk) me through (the )?(pros and cons|options)",
            "(could|can) you (compare|outline) (the )?options",
            "(i'?d|i would) like to (understand|hear) (the )?(pros and cons|advantages)",
            "(could|can) you (explain|describe) (each |the )?option",
            "(what'?s|what is) (the )?(difference|tradeoff) between (them|the options)",
          ],
          hint_tr:
            "Karşılaştırma iste: 'Could you walk me through the pros and cons of each option?'",
        },
        {
          speaker: "npc",
          message:
            "Surgery offers the fastest fix but has higher risk and recovery time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s|what is) (the )?(success rate|recovery time)",
            "(what )?(are|would be) (the )?risks (of surgery)?",
            "(how long|how many weeks) (is|does) (the )?recovery",
            "(any|are there) (long.?term )?(complications|side effects)",
            "(when|how soon) (could|would) (we|i) (schedule|do) it",
          ],
          hint_tr:
            "Cerrahi detay: 'What's the success rate?' veya 'How long is the recovery?'",
        },
        {
          speaker: "npc",
          message:
            "85% success, 6-week recovery. Risks include infection and nerve damage.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and )?(the )?(conservative|non.?surgical|second) (approach|option)",
            "(could|can) you (tell|walk) me (about|through) (the )?conservative (option|approach)",
            "(what )?(would|does) (the )?conservative (approach|option) involve",
            "(how )?effective (is|would) (the )?conservative (be|option)",
            "(how long|how many weeks) (would|does) (it|the conservative approach) take",
          ],
          hint_tr:
            "Konservatif: 'And the conservative approach?'",
        },
        {
          speaker: "npc",
          message:
            "Physical therapy and medication. Takes longer — 3-6 months — but no surgical risks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|and) about (just )?(watching|monitoring|waiting)",
            "(could|can) we (just |simply )?(watch and wait|monitor)",
            "(what'?s|what is) (the )?(watchful waiting|monitoring) (look like|involve)",
            "(would|could) (watching|waiting) be reasonable",
            "(in what cases|when) (would|do you recommend) (watching|monitoring)",
          ],
          hint_tr:
            "İzleme: 'And what about watching and waiting?'",
        },
        {
          speaker: "npc",
          message:
            "We monitor every 3 months. Useful if symptoms are mild and stable.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(which|what) (would|do) you recommend (for me|in my case)",
            "(given|based on) my (situation|case)(,)? (what )?(would|do) you recommend",
            "(i'?d|i would) like (some |a bit of )?time to (think|consider)",
            "(could|can) i (think|consider) (it|this) (overnight|for a few days)",
            "(thank you|thanks)(,)?.{0,30}(think|decide|consider)",
          ],
          hint_tr:
            "Öneri iste/zaman al: 'Which would you recommend in my case?' veya 'I'd like time to think'.",
        },
        {
          speaker: "npc",
          message:
            "Given your situation, I lean toward conservative first. Take time — we can revisit in a week.",
        },
      ],
    },
    {
      id: "ex.opt.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Her seçeneğin artı ve eksilerini anlatabilir misiniz?",
      target: "Could you walk me through the pros and cons of each option?",
      accepted_variants: [
        "Can you go through the pros and cons of each option?",
        "Could you explain the advantages and disadvantages of each option?",
        "Could you walk me through the trade-offs?",
        "Can you compare the pros and cons?",
        "Could you outline the pros and cons of each approach?",
      ],
      tr_hint:
        "'Pros and cons' = artı eksi. 'Walk through' = adım adım anlatmak.",
    },
    {
      id: "ex.opt.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Pros and cons' deyimi?",
          options: [
            "Yanlış ve doğru",
            "Artılar ve eksiler",
            "Eski ve yeni",
            "Soru ve cevap",
          ],
          correct_index: 1,
          tr_explanation:
            "'Pros' = artılar, 'cons' = eksiler — karar verirken karşılaştırma terimi.",
        },
        {
          question: "'Watchful waiting' ne demek?",
          options: [
            "Yatakta beklemek",
            "Aktif izleme, müdahale etmeden takip",
            "Acil müdahale",
            "İlaca başlamak",
          ],
          correct_index: 1,
          tr_explanation:
            "Periyodik kontrollerle takip — semptomlar artarsa müdahale.",
        },
        {
          question: "Doktor önerisi isterken kibar kalıp?",
          options: [
            "What should I do?",
            "Tell me what to choose",
            "Which would you recommend in my case?",
            "Decide for me!",
          ],
          correct_index: 2,
          tr_explanation:
            "'Which would you recommend in my case?' = uzman görüşü ister, ama karar sende kalır.",
        },
      ],
    },
  ],
};

// ============================================================
// 30. health.specialist.records.1 — Tıbbi kayıt isteme
// ============================================================
const lesson_records: BundledLesson = {
  id: "health.specialist.records.1",
  skill_id: "health.specialist",
  index: 30,
  title: "Tıbbi Kayıtları İste",
  description:
    "İngiltere'de klinik resepsiyonu: tıbbi görüntü ve lab sonuçlarını yeni uzmana göndertmek için release formunu doldur, süre sor.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.rec.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "medical records release",
      tr_translation: "Tıbbi kayıt paylaşım formu",
      example:
        "I'd like to fill out a medical records release.",
      example_tr:
        "Bir tıbbi kayıt paylaşım formu doldurmak istiyorum.",
    },
    {
      id: "ex.rec.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İngiltere klinik resepsiyonu: tıbbi görüntü + lab sonuçlarını yeni uzmana göndermek için form doldur.",
      npc_role: "Hospital admissions clerk",
      setting: "UK clinic reception",
      turns: [
        {
          speaker: "npc",
          message:
            "Good morning. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (send|share) my records to (dr\\.?|doctor) [a-z]+",
            "(i'?d|i would) like (my )?(records|imaging|lab results) sent to (dr\\.?|doctor) [a-z]+",
            "(i need|i would like) to (request|arrange) (a )?records transfer",
            "(could|can) you (transfer|forward) (my )?records to (dr\\.?|doctor) [a-z]+",
            "(i'?d|i would) like to (fill out|sign) (a )?(records release|release form)",
          ],
          hint_tr:
            "Talep aç: 'Could you send my records to Dr. X?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. You'll need to fill out a release form. Which records?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(imaging|scans|x.?rays|mri|ct)",
            "(imaging|lab results|test results) and (the )?(latest|recent) (consult notes|notes)",
            "(both )?(my )?(imaging and|imaging plus) (lab|test) results",
            "(i'?d|i would) like (my )?(imaging|scans) and (lab|test) results sent",
            "(everything from|all records from) (the past )?(year|six months)",
          ],
          hint_tr:
            "Hangi kayıtlar: 'My imaging and lab results from the past year'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Do you have the receiving doctor's address or fax?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,30}(here|it'?s)",
            "(i have it )(here|in my phone|written down)",
            "(could|can) you (send|email) (them|it) (electronically|via secure email)",
            "(i'?ll|i will) (give|share) (you )?(the (details|address|fax))",
            "(it'?s|its) (in|on) (my phone|this paper)",
          ],
          hint_tr:
            "Adres ver: 'Yes, I have it here'.",
        },
        {
          speaker: "npc",
          message:
            "Thanks. How would you like them sent — electronically or by post?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(electronically|via email|by email|by fax)",
            "(electronically|email)(,)? (please|if possible)",
            "(whichever is|whatever'?s) (faster|quicker)",
            "(could|can) (you|we) (do|use) (the |a )?(secure|electronic) (transfer|portal)",
            "(by post|in writing) (would be|is) (fine|okay)",
          ],
          hint_tr:
            "Yöntem: 'Electronically, please' veya 'Whichever is faster'.",
        },
        {
          speaker: "npc",
          message:
            "Electronic transfer is faster. We can usually send within 5 working days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long|when) (will|does) (the |it )?(transfer|process) take",
            "(could|can) you (confirm|let me know) (once|when) (it'?s|its) sent",
            "(any|is there a) (fee|cost)",
            "(thank you|thanks)(,)?.{0,40}(reference|confirmation)",
            "(thanks|thank you) (very much|so much)",
          ],
          hint_tr:
            "Onay/süre: 'Could you confirm once it's sent?' veya 'Any fee?'",
        },
        {
          speaker: "npc",
          message:
            "No fee. I'll email you confirmation once the records are sent.",
        },
      ],
    },
    {
      id: "ex.rec.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Görüntülemelerimi ve lab sonuçlarımı yeni uzmana gönderir misiniz?",
      target: "Could you send my imaging and lab results to the new specialist?",
      accepted_variants: [
        "Can you send my imaging and lab results to the new specialist?",
        "Could you transfer my imaging and lab results to the new doctor?",
        "Could you forward my scans and lab results to my new specialist?",
        "Could you share my imaging and lab results with the new specialist?",
        "I'd like my imaging and lab results sent to the new specialist.",
      ],
      tr_hint:
        "'Send my records to' = kayıtlarımı -e gönder. 'Imaging' = görüntülemeler.",
    },
    {
      id: "ex.rec.4",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Records release form' ne işe yarar?",
          options: [
            "Kaydı silmek için izin",
            "Kayıtların başka kuruma gönderilmesine izin",
            "Sigorta iptali",
            "Doktor değişikliği",
          ],
          correct_index: 1,
          tr_explanation:
            "Tıbbi kayıt gizlidir — başka kuruma gönderilmesi hastanın yazılı iznini gerektirir.",
        },
        {
          question: "'Imaging' tıbbi anlamı?",
          options: [
            "Fotoğraf çekme",
            "Tıbbi görüntüleme (MR, BT, röntgen)",
            "Marka imajı",
            "Çizim",
          ],
          correct_index: 1,
          tr_explanation:
            "'Imaging' = tıbbi görüntüleme — MRI, CT, X-ray, ultrason.",
        },
        {
          question: "Kayıt transferi için kibar talep?",
          options: [
            "Send my records now!",
            "Could you send my records to Dr. X?",
            "Give me my files",
            "Records, hurry up",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could you send my records to Dr. X?' = kibar, doğal sağlık talebi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry — 30 health B1-B2 lessons
// ============================================================
export const healthB1B2Lessons: ReadonlyArray<BundledLesson> = [
  lesson_derm_1,
  lesson_ent_1,
  lesson_gastro_1,
  lesson_cardio_1,
  lesson_derm_2,
  lesson_ent_2,
  lesson_gastro_2,
  lesson_insurance_coverage,
  lesson_priorauth,
  lesson_dispute,
  lesson_claim,
  lesson_code,
  lesson_diabetes,
  lesson_bp,
  lesson_allergy,
  lesson_sideeffect,
  lesson_annual,
  lesson_mental_intake,
  lesson_anxiety,
  lesson_depression,
  lesson_mental_options,
  lesson_preop,
  lesson_postop,
  lesson_navigate,
  lesson_discharge,
  lesson_wound,
  lesson_secondop,
  lesson_referral,
  lesson_options,
  lesson_records,
];

export function getHealthB1B2Lesson(id: string): BundledLesson | undefined {
  return healthB1B2Lessons.find((l) => l.id === id);
}
