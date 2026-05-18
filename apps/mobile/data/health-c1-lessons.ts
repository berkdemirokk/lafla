// Health C1 lessons — sophisticated medical communication for educated adults.
// Informed-patient register, peer-to-peer feel with providers, analytical
// treatment trade-off conversations. The user is an adult navigating health
// systems in English-speaking countries with full agency, not deference.
//
// Tone notes:
// - Clinical-literate but not pretentious. The user reads UpToDate-adjacent.
// - End-of-life / palliative scenes handled with gravity, never flippancy.
// - Insurance language is precise, citation-driven, never combative.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — health.c1.secondop.1
// Informed second opinion with neurologist (research-backed questions)
// ============================================================
export const healthC1Lesson_secondop_1: BundledLesson = {
  id: "health.c1.secondop.1",
  skill_id: "health.c1.secondop",
  index: 1,
  title: "Nörolog'la ikinci görüş — research-backed sorular",
  description:
    "MS şüphesi. İlk nöroloğun teşhisini sorgulamak için literatür okudun. McDonald criteria, dissemination in time/space — kanıt-odaklı diyalog.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.health.c1.secondop.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "dissemination in time and space",
      tr_translation: "Zaman ve uzayda yayılım (MS tanı kriteri)",
      example:
        "Do the new lesions actually satisfy dissemination in time under the 2017 McDonald criteria?",
      example_tr:
        "Yeni lezyonlar 2017 McDonald kriterlerine göre gerçekten zaman içinde yayılımı karşılıyor mu?",
    },
    {
      id: "ex.health.c1.secondop.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Lezyonların McDonald kriterlerini gerçekten karşıladığından emin misiniz?",
      target:
        "Are you confident the lesions actually meet the McDonald criteria?",
      accepted_variants: [
        "Are you confident the lesions genuinely satisfy McDonald criteria?",
        "Do the lesions truly meet the McDonald criteria in your view?",
        "Are you certain the lesions fulfill the McDonald criteria?",
        "Can you confirm the lesions meet McDonald criteria?",
        "I want to make sure the lesions actually satisfy the McDonald criteria.",
      ],
      tr_hint:
        "'Meet criteria' veya 'satisfy criteria' — klinik standart kalıp. 'Are you confident' nazik ama analitik sorgulama.",
    },
    {
      id: "ex.health.c1.secondop.1.3",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I read internet that maybe is not MS. Other doctor is wrong probably.",
      correct_sentence:
        "Based on what I've read about the McDonald criteria, I'd like to discuss whether the imaging really supports an MS diagnosis at this stage.",
      tr_explanation:
        "C1 hasta tonu: kaynak belirt ('the McDonald criteria'), uzmanı suçlama, tartışmaya davet et ('I'd like to discuss'). 'Other doctor is wrong' diplomatic suicide.",
    },
    {
      id: "ex.health.c1.secondop.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İkinci görüş için yeni bir nöroloğa gittin. Önceki teşhisi (relapsing-remitting MS) sorgulamak istiyorsun — homework yapmışsın. Peer-to-peer ton.",
      npc_role: "Neurologist",
      setting: "Neurology consultation room, second opinion appointment",
      turns: [
        {
          speaker: "npc",
          message:
            "I've reviewed your file and the imaging. Walk me through why you wanted a second opinion.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have) been (reading|looking) (into|at)|after (reading|reviewing)).{0,80}(mcdonald|criteria|literature)",
            "(my main|the main|i('?d| would) like to) (concern|question|focus).{0,80}(dissemination|criteria|diagnosis)",
            "(i('?m| am) not (entirely |fully )?(convinced|sure)|i wanted to (revisit|re-examine|question)).{0,80}(diagnosis|criteria|lesions)",
            "(i('?ve| have) been (told|diagnosed)).{0,40}but.{0,80}(criteria|evidence|imaging)",
            "the.{0,15}(diagnosis|workup).{0,40}(felt|seemed) (rushed|premature|incomplete)",
            "(could we|i('?d| would) like to) (go through|walk through|revisit).{0,60}(criteria|imaging|diagnosis)",
          ],
          hint_tr:
            "Sebebi analitik açıkla: 'I've been reading into the McDonald criteria and I'm not fully convinced the imaging supports MS yet.' Saygılı ama net.",
        },
        {
          speaker: "npc",
          message:
            "Fair enough. The previous report cites three T2 hyperintensities. What specifically concerns you about the interpretation?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dissemination in time|the temporal criterion).{0,80}(satisfied|met|established)",
            "(only one|single).{0,30}(scan|mri|study).{0,80}(dissemination|temporal|time)",
            "(without|absent).{0,30}(prior|baseline).{0,80}(comparison|imaging)",
            "(t2 hyperintensities|those lesions).{0,80}(nonspecific|migraine|small vessel)",
            "(the lesions|those findings).{0,80}(could (also )?be|consistent with).{0,40}(migraine|small vessel|nonspecific)",
            "(no|without).{0,20}(csf|oligoclonal|lumbar puncture|lp).{0,60}(supporting|confirming)",
          ],
          hint_tr:
            "Spesifik kaygıyı dile getir: 'With only one MRI and no oligoclonal bands, I don't see how dissemination in time is established.'",
        },
        {
          speaker: "npc",
          message:
            "That's a legitimate point. The 2017 revision does allow CSF-positive cases to substitute for DIT. Did your prior workup include an LP?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|it wasn'?t|that was never).{0,40}(offered|performed|done|discussed)",
            "(i was never offered|nobody mentioned).{0,60}(lp|lumbar|csf)",
            "(an lp|lumbar puncture).{0,40}(was never|wasn'?t).{0,30}(part of|in|included)",
            "(that('?s| is) one of|exactly).{0,60}(my concerns|why i('?m| am) here)",
            "no(,)?.{0,30}(which is|that('?s| is)).{0,40}(part of|why)",
          ],
          hint_tr:
            "LP yapılmadığını net söyle: 'No, an LP was never part of the workup — which is exactly why I'm here.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. I'd like to order CSF studies and a contrast-enhanced repeat MRI before we commit to a DMT. Does that align with what you were hoping for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|that('?s| is)|absolutely).{0,40}(exactly|what i was hoping|the approach)",
            "that('?s| is).{0,40}(reasonable|sensible|the kind of)",
            "(thank you|i appreciate).{0,40}(taking|hearing|the rigor)",
            "(yes|that works).{0,40}(i('?d| would) rather|before committing)",
            "(perfect|good)(,)?.{0,40}(let('?s| us)|that('?s| is))",
          ],
          hint_tr:
            "Olumlu kapat: 'That's exactly the kind of stepwise workup I was hoping for. Thank you.'",
        },
      ],
    },
    {
      id: "ex.health.c1.secondop.1.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "İkinci görüş randevusunda ilk nöroloğunu eleştirmenin en C1-uygun yolu?",
          options: [
            "Honestly, my first neurologist rushed the diagnosis.",
            "Based on the McDonald criteria, I'd like to revisit whether the imaging really supports an MS diagnosis.",
            "The other doctor doesn't know what he's doing.",
            "Internet says this isn't MS.",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 informed-patient register: kaynak adlandır ('McDonald criteria'), uzmana saldırma, tartışma çerçevesi kur.",
        },
        {
          question: "'Dissemination in time' kabaca ne demek?",
          options: [
            "Hastalığın hızla yayılması",
            "MS tanısında lezyonların farklı zamanlarda ortaya çıktığını gösterme kriteri",
            "Tedavi süresi",
            "Hastanede kalış süresi",
          ],
          correct_index: 1,
          tr_explanation:
            "DIT = McDonald kriterlerinde lezyonların kronolojik yayılım kanıtı. CSF oligoclonal bantları yerini doldurabilir.",
        },
        {
          question:
            "Doktor sana 'walk me through your concerns' der — ne demek?",
          options: [
            "Yürüyerek anlat",
            "Kaygılarını adım adım açıkla",
            "Bana eşlik et",
            "Yavaş konuş",
          ],
          correct_index: 1,
          tr_explanation:
            "'Walk me through' = adım adım açıkla. Klinik tartışmada davet eden, samimi bir kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — health.c1.secondop.2
// MRI review with the new neurologist
// ============================================================
export const healthC1Lesson_secondop_2: BundledLesson = {
  id: "health.c1.secondop.2",
  skill_id: "health.c1.secondop",
  index: 2,
  title: "MR görüntülerini birlikte gözden geçirmek",
  description:
    "Kendi MR'ını getirdin. Radyolog raporundaki 'nonspecific white matter hyperintensities' ifadesini sorguluyorsun. Migraine mı, demyelination mı?",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.health.c1.secondop.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "nonspecific white matter hyperintensities",
      tr_translation: "Nonspesifik beyaz cevher hiperintensiteleri",
      example:
        "The radiologist called them nonspecific white matter hyperintensities — that wording is doing a lot of work.",
      example_tr:
        "Radyolog 'nonspesifik beyaz cevher hiperintensiteleri' demiş — bu ifade çok şey örtüyor.",
    },
    {
      id: "ex.health.c1.secondop.2.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu lezyonlar migrenle uyumlu olabilir mi, yoksa demiyelinizasyonu mu işaret ediyor?",
      target:
        "Could these lesions be consistent with migraine, or are they pointing toward demyelination?",
      accepted_variants: [
        "Are these lesions more consistent with migraine or with demyelination?",
        "Could these be migrainous, or do they suggest demyelination?",
        "Do these lesions look migrainous to you, or demyelinating?",
        "Is this pattern more in keeping with migraine or demyelination?",
        "Could the lesions reflect chronic migraine rather than demyelination?",
      ],
      tr_hint:
        "'Consistent with' veya 'in keeping with' = ile uyumlu. 'Point toward' = işaret etmek. C1 klinik kelime hazinesi.",
    },
    {
      id: "ex.health.c1.secondop.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "The distribution looks more periventricular than ___, which would argue against migraine.",
      answer: "subcortical",
      distractors: ["spinal", "cortical", "frontal", "occipital"],
      tr_hint:
        "Migrenle ilişkili lezyonlar tipik olarak subkortikal/punktiform. Periventriküler dağılım MS lehine yorumlanır.",
    },
    {
      id: "ex.health.c1.secondop.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "MR diskini getirdin. Nörolog ekrana açtı. Sen radyolog raporundaki belirsiz dili ve lezyon dağılımını birlikte yorumlamak istiyorsun.",
      npc_role: "Neurologist",
      setting: "Consultation room, MRI viewer open",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, I've pulled up the FLAIR sequences. What jumped out at you when you read the report?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the phrase|the wording).{0,40}nonspecific.{0,60}(felt|seemed|struck).{0,40}(vague|evasive|noncommittal)",
            "(the report|the radiologist).{0,80}(nonspecific|noncommittal).{0,40}(didn'?t|wasn'?t).{0,60}(differentiate|distinguish|commit)",
            "(i wanted|i was hoping).{0,40}(to understand|clarification).{0,80}(migraine|demyelination|differential)",
            "(my main question|the question for me).{0,80}(migraine|demyelinating|differential|periventricular)",
            "(nonspecific).{0,80}(could mean (almost )?anything|covers a lot)",
          ],
          hint_tr:
            "Belirsiz dile dikkat çek: 'The phrase nonspecific felt evasive — I wanted to understand whether this is migraine or demyelinating.'",
        },
        {
          speaker: "npc",
          message:
            "Reasonable concern. Look at these three lesions — what's your read on the distribution?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(they look|the distribution).{0,40}(more|primarily) periventricular",
            "(periventricular|along the ventricles).{0,40}(more than|rather than) subcortical",
            "(i('?d| would) expect|migraine usually).{0,40}(subcortical|punctate|smaller)",
            "(the (orientation|shape)|those lesions).{0,40}(perpendicular|dawson)",
            "(some|two).{0,40}(perpendicular|oriented).{0,40}(callosum|ventricles)",
          ],
          hint_tr:
            "Dağılımı yorumla: 'They look more periventricular than subcortical — and a couple are oriented perpendicular to the callosum.'",
        },
        {
          speaker: "npc",
          message:
            "You're reading them well. That perpendicular orientation — Dawson's fingers — does push us toward a demyelinating process. But I want to be careful not to overcall.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so what would|what would).{0,40}(strengthen|tip|move).{0,40}(toward|away from)",
            "(what additional|are there other).{0,40}(findings|sequences|studies).{0,40}(would help|could clarify)",
            "(would|should we).{0,40}(contrast|gadolinium|spinal cord)",
            "(does the absence of|how do we interpret).{0,40}(enhancement|cord lesions)",
            "(what would (you|we) (need|want)|where do we go).{0,40}(confident|certain|diagnosis)",
          ],
          hint_tr:
            "Tanıyı sağlamlaştıracak adımları sor: 'What additional findings would strengthen — or rule out — demyelination here?'",
        },
        {
          speaker: "npc",
          message:
            "Spinal cord MRI and CSF oligoclonal bands would be the next steps. If both are negative, we'd have to seriously reconsider.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('?s| is)|that sounds).{0,40}(the kind of|stepwise|measured)",
            "(let('?s| us)|i('?d| would) like to).{0,40}(order|schedule|move forward)",
            "(thank you|i appreciate).{0,40}(walking|going through).{0,40}(carefully|with me)",
            "(can we|let me).{0,40}(schedule|get those).{0,40}(soon|this week)",
            "(perfect|good)(,)?.{0,40}(that('?s| is)).{0,40}(measured|reasonable)",
          ],
          hint_tr:
            "Planı onayla: 'That's the kind of stepwise workup I was hoping for. Let's schedule the cord MRI and the LP.'",
        },
      ],
    },
    {
      id: "ex.health.c1.secondop.2.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I think report is wrong. Lesions are not specific so probably nothing.",
      correct_sentence:
        "The radiologist's choice of 'nonspecific' is noncommittal — I'd like to clarify whether the distribution actually favors migraine or demyelination.",
      tr_explanation:
        "'Report is wrong' suçlayıcı; klinik dilde 'noncommittal' veya 'doesn't differentiate' tercih edilir. 'Nothing' iddialı — C1 hasta tanı belirsizliğini netleştirmeye, çıkarım yapmaya değil davet eder.",
    },
  ],
};

// ============================================================
// Lesson 3 — health.c1.secondop.3
// DMT (disease-modifying therapy) choice debate
// ============================================================
export const healthC1Lesson_secondop_3: BundledLesson = {
  id: "health.c1.secondop.3",
  skill_id: "health.c1.secondop",
  index: 3,
  title: "Tedavi planını çatıştırmak — DMT seçimi",
  description:
    "İlk nörolog ocrelizumab önerdi, sen daha düşük riskli bir başlangıç tercih ediyorsun. Efficacy vs. safety trade-off'unu analitik tartış.",
  estimated_minutes: 15,
  exercises: [
    {
      id: "ex.health.c1.secondop.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "efficacy–safety trade-off",
      tr_translation: "Etkinlik–güvenlik dengesi",
      example:
        "I want to think about the efficacy–safety trade-off before committing to a high-efficacy DMT.",
      example_tr:
        "Yüksek etkinlikli bir DMT'ye geçmeden önce etkinlik–güvenlik dengesini düşünmek istiyorum.",
    },
    {
      id: "ex.health.c1.secondop.3.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Ocrelizumab agresif bir başlangıç — daha düşük riskli bir seçenekle başlamayı tercih ederim.",
      target:
        "Ocrelizumab feels like an aggressive starting point — I'd prefer to begin with something lower-risk.",
      accepted_variants: [
        "Ocrelizumab seems like an aggressive first-line — I'd rather start with a lower-risk agent.",
        "Starting with ocrelizumab feels aggressive; I'd prefer a milder initial option.",
        "I'd be more comfortable beginning with a lower-risk DMT than ocrelizumab.",
        "I'd like to start with something less aggressive than ocrelizumab.",
        "Going straight to ocrelizumab seems aggressive — can we start with a lower-risk option?",
      ],
      tr_hint:
        "'Aggressive first-line' = agresif birinci basamak. 'Lower-risk' = daha az riskli. Tedavi müzakeresinde standart kalıplar.",
    },
    {
      id: "ex.health.c1.secondop.3.3",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I don't want strong medicine. Give me weak one.",
      correct_sentence:
        "I'd rather not go straight to a high-efficacy DMT — could we discuss escalation from a moderate-efficacy option first?",
      tr_explanation:
        "'Strong/weak medicine' çocuksu çeviri. Klinik terminoloji: 'high-efficacy', 'moderate-efficacy', 'escalation strategy'. Müzakereyi 'could we discuss' ile aç.",
    },
    {
      id: "ex.health.c1.secondop.3.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "MS tanısı doğrulandı. Nörolog ocrelizumab öneriyor (yüksek etkinlik, B-hücre tüketimi, ciddi infeksiyon riski). Sen önce daha düşük riskli bir başlangıç istiyorsun.",
      npc_role: "Neurologist",
      setting: "DMT planning visit, MS clinic",
      turns: [
        {
          speaker: "npc",
          message:
            "Given the imaging and the LP, I'd recommend starting on ocrelizumab. High efficacy, twice-yearly infusions. How does that sit with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have) been thinking|i wanted to talk).{0,80}(efficacy.{0,5}safety|trade.?off|first-line)",
            "(ocrelizumab|that approach).{0,40}(feels|seems|strikes me as) (aggressive|a big step|high-intensity)",
            "(i('?d| would) (rather|prefer)|i('?m| am) more comfortable).{0,60}(lower.?risk|moderate.?efficacy|step.?wise)",
            "(could we (start|begin|consider)|i wanted to ask about).{0,80}(glatiramer|interferon|teriflunomide|moderate)",
            "(before (committing|going) to).{0,40}(b.?cell|high-efficacy|infusion)",
          ],
          hint_tr:
            "Müzakereyi aç: 'I've been thinking about the efficacy–safety trade-off. Ocrelizumab feels aggressive as a first-line — could we discuss starting with something moderate?'",
        },
        {
          speaker: "npc",
          message:
            "I hear you. The counterargument is that early high-efficacy treatment shows better long-term disability outcomes — the 'hit hard, hit early' data. Have you looked at that literature?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i('?ve| have) read).{0,40}(the observational|the swedish|the cohort)",
            "(i('?m| am) (aware|familiar)|i('?ve| have) seen).{0,40}(hit.?hard|early.?intensive|observational)",
            "(but the (data|evidence)|those studies).{0,80}(observational|not randomized|residual confounding)",
            "(i (understand|accept) the argument|the early.?intensive approach).{0,80}(but|however).{0,60}(serious infection|pml|hypogammaglobulinemia)",
            "(the absolute risk reduction|the number needed).{0,80}(modest|not huge|small)",
          ],
          hint_tr:
            "Kanıtı tart: 'I'm aware of the observational data, but most of it isn't randomized — and the serious infection risk and hypogammaglobulinemia worry me as a first move.'",
        },
        {
          speaker: "npc",
          message:
            "That's a fair read. What if we agreed on a clear escalation trigger — say, a relapse or significant new MRI activity within 12 months?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('?s| is)|that sounds).{0,40}(reasonable|the kind of|exactly)",
            "(yes|i('?d| would) be (comfortable|on board)).{0,60}(written|documented|clear)",
            "(can we (document|put in writing|spell out)|i('?d| would) want).{0,60}(triggers|criteria|threshold)",
            "(what would|how would we define).{0,40}(significant|meaningful).{0,40}(activity|relapse)",
            "(yes|perfect)(,)?.{0,40}(with (clear|defined)|as long as)",
          ],
          hint_tr:
            "Anlaşmayı yapısallaştır: 'That works — can we document the escalation triggers clearly so we're aligned if I have a relapse?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. I'll write up the plan: start moderate-efficacy DMT, repeat MRI in six months, escalate if there's clinical or radiological breakthrough.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|i appreciate).{0,40}(working through|partnering|meeting me)",
            "(this is|that('?s| is)).{0,40}(exactly|the kind of) (shared|collaborative)",
            "(perfect|that works).{0,40}(let('?s| us)|i('?ll| will))",
            "(i (appreciate|value)|thank you for) (the rigor|taking this seriously)",
            "(thanks|appreciate).{0,40}(the time|hearing me out)",
          ],
          hint_tr:
            "Saygıyla kapat: 'I really appreciate working through this together — that's the kind of shared decision-making I was hoping for.'",
        },
      ],
    },
    {
      id: "ex.health.c1.secondop.3.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'High-efficacy DMT' ne demek?",
          options: [
            "Düşük doz ilaç",
            "Yüksek etkinlikli hastalık modifiye edici tedavi",
            "Pahalı ilaç",
            "Reçetesiz ilaç",
          ],
          correct_index: 1,
          tr_explanation:
            "DMT = disease-modifying therapy. 'High-efficacy' grup ocrelizumab, natalizumab gibi B-hücre/lökosit tüketenleri kapsar.",
        },
        {
          question: "'Hit hard, hit early' yaklaşımına karşı en güçlü argüman?",
          options: [
            "İlaçlar pahalı",
            "Kanıtların çoğu randomize değil, ciddi enfeksiyon riski erken aşamada belirsiz",
            "Hekimler agresif tedaviyi sevmez",
            "Hastalar korkar",
          ],
          correct_index: 1,
          tr_explanation:
            "Erken-yüksek-etkinlik verisinin büyük kısmı gözlemsel (Swedish cohort vb.). Ciddi enfeksiyon, PML, hipogamaglobulinemi riskleri ölçeklendirilebilir.",
        },
        {
          question: "'Escalation trigger' belirlemenin amacı?",
          options: [
            "İlaç değişimini geciktirmek",
            "Tedavi değişimi için önceden tanımlı, ölçülebilir klinik/radyolojik kriterler koymak",
            "Sigorta için kâğıt",
            "Hekimi memnun etmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Escalation trigger = yazılı, ölçülebilir tetik (relaps, yeni T2/gd-enhancing lezyon). Müzakereyi belgelendirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — health.c1.appeal.1
// Insurance denial appeal — citing policy language
// ============================================================
export const healthC1Lesson_appeal_1: BundledLesson = {
  id: "health.c1.appeal.1",
  skill_id: "health.c1.appeal",
  index: 1,
  title: "Sigorta reddine itiraz — poliçe dili alıntılayarak",
  description:
    "MRI 'medically necessary değil' diye reddedildi. Poliçenin Section 4.2'sini, ACR appropriateness criteria'yı ve nöroloğun letter of medical necessity'sini birleştir.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.health.c1.appeal.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "letter of medical necessity",
      tr_translation: "Tıbbi zorunluluk yazısı (LMN)",
      example:
        "My neurologist has already submitted a letter of medical necessity citing the ACR appropriateness criteria.",
      example_tr:
        "Nöroloğum ACR uygunluk kriterlerine atıfla bir tıbbi zorunluluk yazısı sundu.",
    },
    {
      id: "ex.health.c1.appeal.1.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Poliçenin 4.2. Bölümü tıbbi zorunluluğun ne olduğunu açıkça tanımlıyor ve bu istek o tanımı karşılıyor.",
      target:
        "Section 4.2 of the policy clearly defines medical necessity, and this request meets that definition.",
      accepted_variants: [
        "Section 4.2 of the policy explicitly defines medical necessity, and this request satisfies that definition.",
        "Section 4.2 lays out the definition of medical necessity, and this MRI falls squarely within it.",
        "Per Section 4.2 of my policy, this request meets every prong of the medical necessity standard.",
        "Section 4.2 of my plan sets the medical necessity standard, and this scan meets it.",
        "Under Section 4.2 of the policy, this MRI clearly meets the medical necessity criteria.",
      ],
      tr_hint:
        "'Falls within' veya 'meets the standard' = standardı karşılamak. Poliçeye atıf: 'per Section X' veya 'under Section X'.",
    },
    {
      id: "ex.health.c1.appeal.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "The denial letter doesn't engage with the ACR appropriateness ___ at all.",
      answer: "criteria",
      distractors: ["letters", "scores", "tables", "papers"],
      tr_hint:
        "ACR Appropriateness Criteria = radyolojik görüntülemenin uygunluk standartları. İtirazın temel referansı.",
    },
    {
      id: "ex.health.c1.appeal.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sigorta itiraz hattını aradın. Reddi ters çevirmek için poliçe dilini, ACR kriterlerini ve LMN'yi entegre etmen gerek.",
      npc_role: "Insurance appeals specialist",
      setting: "Member services / appeals line, recorded call",
      turns: [
        {
          speaker: "npc",
          message:
            "I have your file open. The MRI was denied as not medically necessary. What would you like to discuss today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?d| would) like to (file|initiate)|i('?m| am) calling to (appeal|contest)).{0,60}(denial|determination)",
            "(i (believe|think) the denial|the determination).{0,80}(inconsistent|conflicts|at odds).{0,60}(section|policy|criteria)",
            "(i want to (walk|take you) through|let me lay out).{0,80}(why|the basis|the grounds).{0,60}(appeal|reverse)",
            "(this denial|the determination).{0,80}(doesn'?t (apply|reflect|engage)|seems to overlook).{0,40}(criteria|standard|definition)",
            "(my (provider|neurologist)|i('?ve| have)) (submitted|filed).{0,60}(letter|lmn|documentation)",
          ],
          hint_tr:
            "Çerçeveyi kur: 'I'm calling to formally contest the denial — the determination conflicts with Section 4.2 of my policy and the ACR appropriateness criteria.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. The reviewing physician concluded the imaging wasn't supported by clinical findings. What's your basis for contesting that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(section 4\\.2|the policy's definition).{0,60}(medical necessity|necessity).{0,80}(includes|covers|encompasses)",
            "(acr appropriateness|the acr criteria).{0,80}(rates|categorizes|classifies).{0,40}(usually appropriate|appropriate)",
            "(my neurologist'?s|the lmn).{0,80}(documents|cites|establishes).{0,60}(clinical (findings|indications))",
            "(three (specific )?(findings|indications)|the clinical picture).{0,80}(documented|recorded|established)",
            "(taken together|read together).{0,80}(section|criteria|lmn).{0,40}(plainly|clearly|squarely)",
          ],
          hint_tr:
            "Üçlü kanıtı entegre et: 'Section 4.2 defines necessity to include diagnostic clarity. The ACR rates this scenario as usually appropriate. My neurologist's LMN documents three specific clinical findings.'",
        },
        {
          speaker: "npc",
          message:
            "I see the LMN was submitted, but the reviewer noted it didn't address the imaging timeline. Can you speak to that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the lmn explicitly|on page two|in the third paragraph).{0,80}(timeline|sequence|interval)",
            "(if the reviewer (missed|overlooked)|that suggests the reviewer).{0,60}(reread|reconsider|look again)",
            "(i('?m| am) happy to (resubmit|highlight|flag)|let me point you to).{0,60}(section|paragraph|page)",
            "(the timeline is (laid out|addressed)).{0,80}(weeks|months|interval).{0,40}(symptom onset|presentation)",
            "(can we (have the file|request) reviewed|i('?d| would) like a peer.?to.?peer).{0,40}(neurologist|specialist)",
          ],
          hint_tr:
            "Reviewer hatasını gündeme getir: 'The LMN does address the timeline — on page two. Can we route this for a peer-to-peer with a neurologist?'",
        },
        {
          speaker: "npc",
          message:
            "Got it — I'll flag for peer-to-peer review with a board-certified neurologist within five business days. Is there anything else you'd like added to the file?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i('?d| would) like to (add|include|supplement)).{0,80}(literature|guidelines|references)",
            "(i('?ll| will) email|i('?ve| have)) (additional|supporting).{0,60}(citations|references|aan)",
            "(can we (document|confirm|verify)).{0,60}(reference number|tracking|timeline)",
            "(could you (send|provide) me).{0,40}(written confirmation|reference number)",
            "(please (note|document)|i want on the record).{0,80}(today'?s call|this conversation)",
          ],
          hint_tr:
            "Belgeyi sağlamlaştır: 'Yes — I'll email the AAN guideline citation and the original imaging request. Could you confirm a reference number for today's call?'",
        },
      ],
    },
    {
      id: "ex.health.c1.appeal.1.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "You denied my MRI and it's not fair. I want to talk to manager because I am sick.",
      correct_sentence:
        "The denial conflicts with Section 4.2 of my policy and the ACR appropriateness criteria — I'd like to formally appeal and request a peer-to-peer review.",
      tr_explanation:
        "C1 sigorta itirazı: 'not fair' duygusal, 'manager' temkinsiz. Yapı: dayanak alıntıla (Section 4.2, ACR), spesifik adımı iste (peer-to-peer). Tone sakin, prosedürel.",
    },
  ],
};

// ============================================================
// Lesson 5 — health.c1.appeal.2
// External review (IRO) — after internal appeal denial
// ============================================================
export const healthC1Lesson_appeal_2: BundledLesson = {
  id: "health.c1.appeal.2",
  skill_id: "health.c1.appeal",
  index: 2,
  title: "External review talebi — peer-to-peer sonrasında",
  description:
    "İç itiraz reddedildi. State insurance commissioner'a IRO talebi yazıyorsun. Klinik kanıt, emsal vakalar, network adequacy argümanı.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.health.c1.appeal.2.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "independent review organization (IRO)",
      tr_translation: "Bağımsız İnceleme Kuruluşu (dış inceleme)",
      example:
        "After the internal appeal was denied, I requested an independent review organization assessment through the state.",
      example_tr:
        "İç itiraz reddedildikten sonra eyalet üzerinden bağımsız bir inceleme kuruluşu değerlendirmesi talep ettim.",
    },
    {
      id: "ex.health.c1.appeal.2.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İç itiraz tüketildi; şimdi eyalet komisyonu üzerinden bağımsız bir dış inceleme talep ediyorum.",
      target:
        "I've exhausted the internal appeal, and I'm now requesting an external review through the state commissioner.",
      accepted_variants: [
        "Having exhausted the internal appeal, I'm requesting external review through the state.",
        "The internal appeal is exhausted; I'm filing for external IRO review with the state commissioner.",
        "I've completed the internal appeals process and am now seeking external review at the state level.",
        "Internal review is exhausted — I'm escalating to external review through the commissioner's office.",
        "With internal appeals exhausted, I'm requesting an IRO review through the state.",
      ],
      tr_hint:
        "'Exhausted internal appeals' = iç itiraz tüketildi (yasal eşik). 'External review' veya 'IRO' = bağımsız dış inceleme.",
    },
    {
      id: "ex.health.c1.appeal.2.3",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am very angry because peer-to-peer was useless. I will sue you.",
      correct_sentence:
        "The peer-to-peer didn't engage substantively with the clinical evidence, so I'm escalating to external review under the state IRO process.",
      tr_explanation:
        "C1 itiraz dilinde 'angry' ve 'sue' iletişimi geriletir. Sakin, prosedürel ton: 'didn't engage substantively', 'escalating to external review'. Hak iddianı süreçle kur.",
    },
    {
      id: "ex.health.c1.appeal.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Peer-to-peer reddedildi. State Insurance Commissioner'ın hattını aradın. IRO talebi açmak istiyorsun — klinik kanıt + emsal vakalar + network adequacy üçlüsünü çerçeveliyorsun.",
      npc_role: "Insurance appeals specialist",
      setting: "State insurance commissioner consumer assistance line",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for calling the commissioner's office. You're requesting external review — walk me through where you are in the process.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have) exhausted|having exhausted).{0,60}(internal appeal|peer-to-peer)",
            "(the internal appeal|the peer-to-peer).{0,40}(was (denied|upheld)|concluded).{0,40}(on|earlier)",
            "(i('?m| am) (filing|requesting)).{0,40}(external review|iro|independent)",
            "(my (carrier|plan)).{0,60}(denied|upheld|maintained).{0,40}(determination)",
            "(i('?ve| have)).{0,40}(documentation|the file|everything).{0,40}(ready|prepared)",
          ],
          hint_tr:
            "Durumu özetle: 'I've exhausted the internal appeal — peer-to-peer upheld the denial last week. I'm now formally requesting external review.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. The IRO will need the clinical case laid out clearly. What's the core of your medical argument?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the requested|this) (treatment|imaging|service).{0,80}(standard of care|first-line|guideline.?recommended)",
            "(aan guidelines|professional society).{0,80}(category|level).{0,40}(evidence|recommendation)",
            "(three peer-reviewed|recent literature|published cohort).{0,80}(support|establish|demonstrate)",
            "(without (this|the requested))(,)?.{0,80}(risk of|likelihood of|deterioration|irreversible)",
            "(my (clinician|neurologist|provider) has|the lmn) (laid out|documented|established).{0,60}(necessity|indication)",
          ],
          hint_tr:
            "Tıbbi argümanı çerçevele: 'The requested imaging is guideline-recommended by the AAN, supported by recent literature, and the LMN documents three specific indications.'",
        },
        {
          speaker: "npc",
          message:
            "Helpful. The IRO will also weigh whether comparable cases have been covered. Are you raising any network adequacy or precedent concerns?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i (am|will be) raising).{0,40}(network adequacy|precedent|comparable)",
            "(my plan|the carrier).{0,80}(in.?network neurologist|specialist).{0,40}(within|in my area|reasonable distance)",
            "(comparable (cases|members)|other patients).{0,80}(approved|covered).{0,60}(same indication|similar)",
            "(there('?s| is)|i('?ve| have)) (a) (precedent|pattern).{0,80}(similar (denials|cases)|inconsistent application)",
            "(this raises|i('?m| am) flagging).{0,40}(parity|consistency|adequacy)",
          ],
          hint_tr:
            "Sistemik argümanı ekle: 'Yes — comparable members have been approved for the same indication, and my plan lacks an adequate in-network MS specialist within a reasonable distance.'",
        },
        {
          speaker: "npc",
          message:
            "Strong package. Once I open the case, you'll have ten business days to submit documentation. Anything else for the record?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|can you (confirm|provide)).{0,40}(case number|tracking|reference)",
            "(could you (email|send) me).{0,40}(written confirmation|documentation list)",
            "(i'?d? like to (confirm|verify)).{0,80}(timeline|deadline|expedited)",
            "(is this eligible for|can we request).{0,40}(expedited review|urgent track)",
            "(thank you|i appreciate).{0,40}(walking|the clarity|the framework)",
          ],
          hint_tr:
            "Belgeyi netleştir: 'Could you confirm a case number, and is this eligible for expedited review given the clinical urgency?'",
        },
      ],
    },
    {
      id: "ex.health.c1.appeal.2.6",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "'Exhausted internal appeals' ne anlama gelir?",
          options: [
            "İç itiraz çok zorladı",
            "İç itiraz prosedürü tamamlandı; dış incelemeye geçme hakkı doğdu",
            "Hasta yorgun düştü",
            "Sigorta cevapsız kaldı",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD sigorta süreçlerinde dış inceleme (IRO) talebi için iç itirazın tüketilmesi yasal ön koşul.",
        },
        {
          question:
            "IRO talebini güçlendiren üçlü temel kanıt paketi hangisidir?",
          options: [
            "Şikayet, dilekçe, avukat",
            "Klinik kanıt, kılavuz/literatür, emsal/network argümanı",
            "Sosyal medya, kamuoyu, basın",
            "Hekim mektubu, fatura, kimlik",
          ],
          correct_index: 1,
          tr_explanation:
            "Etkili IRO talepleri: (1) hekim/LMN klinik kanıtı, (2) profesyonel kılavuz ve literatür, (3) emsal vakalar ve network adequacy.",
        },
        {
          question: "'Expedited review' ne demektir?",
          options: [
            "Otomatik onay",
            "Hızlandırılmış inceleme (acil tıbbi durumlarda)",
            "İndirimli inceleme",
            "Mahkemeye gitmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Klinik aciliyet varsa IRO incelemesi 72 saat içinde tamamlanabilir. C1 hasta bu hakkı bilir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — health.c1.mental.1
// Therapist intake — anhedonia and ego-dystonic thoughts
// ============================================================
export const healthC1Lesson_mental_1: BundledLesson = {
  id: "health.c1.mental.1",
  skill_id: "health.c1.mental",
  index: 1,
  title: "Terapist intake — anhedonia ve ego-dystonic düşünceler",
  description:
    "'Üzgünüm' demenin ötesinde. Altı aylık pervasive anhedonia, persistent self-critical rumination — sofistike öz-rapor.",
  estimated_minutes: 16,
  exercises: [
    {
      id: "ex.health.c1.mental.1.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "anhedonia",
      tr_translation: "Anhedonia — zevk alamama, motivasyon kaybı",
      example:
        "For the past six months, the dominant texture has been pervasive anhedonia rather than acute sadness.",
      example_tr:
        "Son altı aydır baskın duygu akut hüzün değil, yaygın anhedonia.",
    },
    {
      id: "ex.health.c1.mental.1.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Aktif intihar düşüncesi değil — daha çok aşındırıcı, sürekli öz-eleştirel bir döngü.",
      target:
        "It's not active ideation — more like a corrosive, persistent loop of self-criticism.",
      accepted_variants: [
        "Not active ideation — more a corrosive, persistent self-critical loop.",
        "Not active suicidal thinking — it's more like a relentless self-critical rumination.",
        "Not active ideation; it's persistent, corrosive self-criticism.",
        "It's not suicidal ideation per se — more like a chronic, eroding self-critical narrative.",
        "Not active ideation, but a low-grade, persistent self-critical loop.",
      ],
      tr_hint:
        "'Ideation' = düşünce/fikir (klinik). 'Corrosive' = aşındırıcı. 'Rumination' = ruminasyon, kendi üzerine dönen düşünce.",
    },
    {
      id: "ex.health.c1.mental.1.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "The intrusive thoughts feel ___-dystonic — they're not aligned with how I actually see myself.",
      answer: "ego",
      distractors: ["self", "mood", "thought", "ideo"],
      tr_hint:
        "'Ego-dystonic' = ben uyumsuz, kişinin değerleriyle çelişen düşünceler. OKB ve ileri depresyon profillerinde geçer.",
    },
    {
      id: "ex.health.c1.mental.1.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am very sad and also I am crazy maybe. I cry sometimes.",
      correct_sentence:
        "Over the past six months I've had pervasive anhedonia, persistent self-critical rumination, and intrusive ego-dystonic thoughts — not active ideation, but corrosive.",
      tr_explanation:
        "C1 terapi öz-raporu: 'crazy' patolojikleştirici ve net değil. Yapı: süre, dominant duygu (anhedonia), bilişsel desen (rumination), risk değerlendirmesi (ideation var/yok). Klinisyenin işini kolaylaştırır.",
    },
    {
      id: "ex.health.c1.mental.1.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yeni terapistinle ilk seans. İlk on dakika genelde 'why are you here?' ile geçer. Sofistike, klinik-okuryazar bir öz-rapor sunmak istiyorsun.",
      npc_role: "Therapist",
      setting: "Initial intake session, private practice",
      turns: [
        {
          speaker: "npc",
          message:
            "So, before we get into anything else — what's bringing you in today? Take your time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(over the past|for the (last|past)) (six|6).{0,40}(months|half a year).{0,80}(anhedonia|withdrawn|flat|deflated)",
            "(the dominant|the main).{0,40}(texture|quality|character).{0,80}(anhedonia|flatness|emptiness)",
            "(it'?s not (acute|active) sadness|less sad than).{0,60}(flat|hollow|deflated|anhedonic)",
            "(i('?ve| have) (been )?(experiencing|noticing)).{0,80}(pervasive|persistent|chronic).{0,60}(low mood|anhedonia)",
            "(things i used to|the things that).{0,60}(no longer|stopped).{0,40}(register|engage|reach)",
          ],
          hint_tr:
            "Yapılı aç: 'Over the past six months, the dominant quality has been pervasive anhedonia — flat rather than acutely sad.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for putting it that precisely. Can you tell me about the thinking that accompanies that — any specific patterns?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a (lot|great deal) of|persistent|relentless).{0,60}(self-critical|self-critical rumination|harsh)",
            "(my (mind|inner voice)).{0,60}(loops|cycles|returns).{0,60}(failure|inadequacy|shortcoming)",
            "(there('?s| is)).{0,40}(a (low-grade|chronic|persistent)).{0,40}(self-attack|self-criticism|rumination)",
            "(intrusive (thoughts|imagery)).{0,80}(ego-dystonic|don'?t fit|not aligned)",
            "(catastrophizing|black-and-white|all-or-nothing).{0,60}(pattern|tendency)",
          ],
          hint_tr:
            "Bilişsel deseni tarif et: 'A persistent self-critical rumination — and recently some intrusive thoughts that feel ego-dystonic.'",
        },
        {
          speaker: "npc",
          message:
            "I appreciate the specificity. I do need to ask directly — any active suicidal ideation, plans, or means?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no (active|current)|nothing active)(,)?.{0,40}(ideation|plan|intent|means)",
            "(no(,)?|not at all)(,)?.{0,40}(no plan|no means|no intent)",
            "(passive|fleeting).{0,40}(thoughts|moments).{0,40}(but (no|nothing)).{0,40}(plan|active)",
            "(i want to be (clear|honest)|to be transparent).{0,80}(no|not).{0,40}(active|plan|means)",
            "(no(,)? (and|but)).{0,60}(corrosive|eroding|wearing)",
          ],
          hint_tr:
            "Risk sorusuna net cevap ver: 'No active ideation, no plan, no means — but the corrosive quality is wearing me down.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you for being direct about that. What does your support system look like — and have you been in therapy before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have) (done|completed)).{0,40}(two rounds|previous|prior).{0,40}(cbt|therapy|psychotherapy)",
            "(my support|the people around me)(.|,).{0,60}(stable|present|reasonable)",
            "(my partner|my (closest )?friends|a (few|couple) (close )?friends).{0,60}(know|aware|in the loop)",
            "(prior therapy|previous work).{0,60}(symptom-level|surface).{0,80}(hasn'?t|didn'?t).{0,40}(root|underlying)",
            "(i('?m| am) (cautiously )?(returning|coming back)).{0,40}(after a break|to therapy)",
          ],
          hint_tr:
            "Bağlamı ver: 'I've done two prior rounds of CBT — symptom-level relief, but the underlying patterns haven't shifted. Support system is stable.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Last question for today — what would meaningful progress look like for you, three months out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(meaningful progress|what i('?d| would) want).{0,80}(rumination|self-critical).{0,40}(less|quieter|softer)",
            "(re-engaging|reconnecting).{0,40}(with (work|relationships|things i (used to|once)) (care about|enjoy))",
            "(more (capacity|access|space)) (for|to)).{0,80}(positive affect|pleasure|engagement)",
            "(not (just )?(symptom)|beyond symptom).{0,60}(root|underlying|deeper)",
            "(some (relief|softening)|a real shift).{0,40}(self-attack|inner critic|rumination)",
          ],
          hint_tr:
            "Hedefi somutlaştır: 'Less rumination, more capacity for re-engagement — and ideally some softening of the inner critic, not just symptom relief.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — health.c1.mental.2
// Modality negotiation — CBT vs IFS vs psychodynamic
// ============================================================
export const healthC1Lesson_mental_2: BundledLesson = {
  id: "health.c1.mental.2",
  skill_id: "health.c1.mental",
  index: 2,
  title: "Modalite tartışması — CBT mi, IFS mi, psikodinamik mi?",
  description:
    "Terapist CBT öneriyor, sen 'I've done two rounds of CBT — symptom-level relief, but root affect regulation hasn't shifted.' Modalite müzakeresi.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.health.c1.mental.2.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "affect regulation",
      tr_translation: "Duygulanım düzenlenmesi (affekt regülasyonu)",
      example:
        "CBT helped with symptoms, but my affect regulation under stress is the real bottleneck.",
      example_tr:
        "CBT semptomlarımı yumuşattı ama gerçek darboğaz stres altındaki affekt regülasyonum.",
    },
    {
      id: "ex.health.c1.mental.2.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İki tur CBT yaptım — yüzeyde rahatlama oldu ama kök düzeyde bir şey kıpırdamadı.",
      target:
        "I've completed two rounds of CBT — surface-level relief, but nothing has shifted at the root.",
      accepted_variants: [
        "Two prior rounds of CBT gave me symptom relief, but nothing moved at a deeper level.",
        "I've done CBT twice — helpful at the surface, but the underlying patterns haven't changed.",
        "Two rounds of CBT — symptom-level gains, but the root hasn't shifted.",
        "I've completed CBT twice; relief was real but stayed at the symptom level.",
        "After two rounds of CBT, the symptoms eased but the underlying structure hasn't budged.",
      ],
      tr_hint:
        "'Surface-level' vs 'root-level' = yüzey vs kök. CBT'nin sınırlarını dile getirmenin standart yolu.",
    },
    {
      id: "ex.health.c1.mental.2.3",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "CBT didn't work for me so it is bad therapy.",
      correct_sentence:
        "CBT gave me real symptom-level traction, but the underlying affect regulation hasn't shifted — that's why I'm curious about IFS or a psychodynamic approach.",
      tr_explanation:
        "C1 modalite müzakeresi: önceki tedaviyi suçlama ('bad therapy'), sınırını tanımla ('symptom-level traction, root hasn't shifted'). Alternatif teklif et — meraka davet et.",
    },
    {
      id: "ex.health.c1.mental.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üçüncü seans. Terapist 'plan olarak CBT öneriyorum' diyor. Sen daha derin bir modaliteye (IFS — Internal Family Systems — veya psikodinamik) açılmak istiyorsun.",
      npc_role: "Therapist",
      setting: "Treatment planning session",
      turns: [
        {
          speaker: "npc",
          message:
            "Based on what you've shared, I'd recommend structured CBT for the next twelve weeks — cognitive restructuring with some behavioral activation. How does that sound?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i appreciate|thanks for).{0,40}(framing|laying out|the recommendation).{0,40}(but|though|however)",
            "(i('?ve| have) (done|completed)|i have history with).{0,40}(two|2|prior|previous).{0,40}(rounds|courses).{0,40}(cbt)",
            "(cbt (gave|provided)|cbt was helpful at).{0,40}(symptom-level|surface).{0,80}(root|underlying|affect)",
            "(i('?m| am)) (curious|wondering|interested) (about|in).{0,40}(ifs|psychodynamic|deeper)",
            "(my (concern|hesitation)|the question for me).{0,80}(cognitive (restructuring|tools)).{0,40}(again|once more)",
          ],
          hint_tr:
            "CBT'ye dair önceki deneyimi belirt: 'I've done two rounds of CBT with surface-level traction — I'm curious whether IFS or psychodynamic work might reach the underlying patterns.'",
        },
        {
          speaker: "npc",
          message:
            "Fair point. IFS does different work — it's experiential and parts-based, not skills-focused. Why does that pull you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the self-critical|the inner critic|the rumination).{0,80}(feels (like|less like)).{0,40}(distortion|cognitive)",
            "(it feels more like|it functions like).{0,80}(parts|protector|exiled)",
            "(cognitive restructuring|labeling distortions).{0,60}(doesn'?t|hasn'?t).{0,40}(reach|touch|address)",
            "(i('?ve| have) been reading|i('?m| am) drawn to).{0,40}(parts work|ifs|schwartz)",
            "(the relationship with|the relationship to).{0,40}(the critic|the parts|those voices)",
          ],
          hint_tr:
            "Modaliteyi kişiselleştir: 'The inner critic feels less like a cognitive distortion and more like a part with its own logic — that's why parts work appeals.'",
        },
        {
          speaker: "npc",
          message:
            "That's a sophisticated read. I'm trained in CBT and have some IFS exposure — but if you want a primary IFS clinician, I'd want to be honest about that fit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (appreciate|value)|thank you for).{0,40}(transparency|honesty|the candor)",
            "(could we (consider|try)|would (an integration|a hybrid)).{0,40}(possible|work)",
            "(what would|how would) you (suggest|recommend).{0,40}(referral|fit|finding)",
            "(if i pursued|if i went) (with|toward) (an ifs|a dedicated).{0,40}(referral|practitioner)",
            "(i'?d? rather|i would prefer) (work with|continue with) you.{0,80}(integrate|blend|incorporate)",
          ],
          hint_tr:
            "İlişkiyi koru veya öner: 'I appreciate that — could we try integrating parts work where it fits, or would you recommend a dedicated IFS referral?'",
        },
        {
          speaker: "npc",
          message:
            "Let's do this — six weeks of IFS-informed work with me, then re-evaluate. If we're not moving, I'll personally help you find a primary IFS clinician. Deal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('?s| is)|that sounds).{0,40}(exactly|the kind of|fair)",
            "(yes|deal|that works)(,)?.{0,40}(let('?s| us)|i('?m| am) on board)",
            "(i appreciate|i value).{0,40}(the (collaborative|shared|partnership))",
            "(perfect|good).{0,40}(let('?s| us)|with (clear|defined)).{0,40}(check-in|criteria)",
            "(yes|absolutely).{0,40}(with the explicit|with that)",
          ],
          hint_tr:
            "Çerçeveyi onayla: 'That works — six weeks, then we re-evaluate against specific criteria. Thank you for staying flexible.'",
        },
      ],
    },
    {
      id: "ex.health.c1.mental.2.6",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "'My affect regulation hasn't shifted' demek istediğin nedir?",
          options: [
            "Duygularımı çok iyi yönetiyorum",
            "Duygu düzenleme becerim kök düzeyde değişmedi",
            "Duygularımdan kaçınıyorum",
            "Hiç duygum yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Affect regulation = duygulanım düzenleme. Semptom yumuşaması ile kök regülasyon değişimi arasındaki farkı vurgulayan klinik ayrım.",
        },
        {
          question: "IFS (Internal Family Systems) yaklaşımı temelde ne yapar?",
          options: [
            "Çocukluk anılarını yorumlar",
            "İçsel parçalarla (protector, exile, Self) ilişki kurar",
            "Düşünce çarpıtmalarını etiketler",
            "İlaç önerir",
          ],
          correct_index: 1,
          tr_explanation:
            "IFS = Richard Schwartz'ın geliştirdiği parts work modeli. Manager, firefighter, exile parçaları ve Self ile ilişkilenmeyi merkeze alır.",
        },
        {
          question:
            "Terapistin uzmanlık sınırını açıkça söylediği zaman, C1 hasta nasıl yanıt verir?",
          options: [
            "Onu zorlar ve ısrar eder",
            "Şeffaflığı takdir eder, entegrasyon veya referans olasılığını birlikte değerlendirir",
            "Seansı bırakır",
            "Başka terapist arar ama bunu söylemez",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 informed-patient: 'I appreciate the transparency — could we integrate, or would you recommend a referral?' İşbirliğini sürdürür.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — health.c1.mental.3
// Psychiatrist — SSRI vs SNRI / augmentation negotiation
// ============================================================
export const healthC1Lesson_mental_3: BundledLesson = {
  id: "health.c1.mental.3",
  skill_id: "health.c1.mental",
  index: 3,
  title: "Psikiyatristle ilaç müzakeresi — SSRI vs. SNRI",
  description:
    "Sertraline'da sexual side effects ve emotional blunting. Bupropion augmentation mı, switch mi? Half-life, withdrawal protokolü, off-label kullanımları tartış.",
  estimated_minutes: 15,
  exercises: [
    {
      id: "ex.health.c1.mental.3.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "emotional blunting",
      tr_translation: "Duygusal körelme (SSRI yan etkisi)",
      example:
        "The emotional blunting on sertraline is becoming as limiting as the depression was.",
      example_tr:
        "Sertraline'daki duygusal körelme, depresyonun kendisi kadar kısıtlayıcı hale geldi.",
    },
    {
      id: "ex.health.c1.mental.3.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sertraline'ın etkisi vardı ama duygusal körelme ve cinsel yan etkiler kabul edilemez seviyede.",
      target:
        "Sertraline had a real effect, but the emotional blunting and sexual side effects are at an unacceptable level.",
      accepted_variants: [
        "Sertraline worked to a degree, but the blunting and sexual side effects have become intolerable.",
        "Sertraline gave me some lift, but the emotional flattening and sexual side effects are unsustainable.",
        "There was a clear benefit from sertraline, but the blunting and sexual side effects aren't acceptable long-term.",
        "Sertraline helped, but the emotional blunting and sexual side effects are too significant.",
        "Sertraline did provide relief, but the side-effect profile — blunting, sexual — has become intolerable.",
      ],
      tr_hint:
        "'Intolerable' veya 'unsustainable' = sürdürülemez/kabul edilemez. SSRI yan etkilerinin standart raporlama dili.",
    },
    {
      id: "ex.health.c1.mental.3.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Given the side-effect profile, I'd like to discuss whether bupropion ___ makes more sense than a switch.",
      answer: "augmentation",
      distractors: ["addition", "extension", "supplement", "support"],
      tr_hint:
        "'Bupropion augmentation' = SSRI'nin yanına bupropion eklemek (yan etkiyi dengeler, antidepresan etkiyi artırır). 'Augmentation' kesin klinik terim.",
    },
    {
      id: "ex.health.c1.mental.3.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sertraline 100mg sekiz aydır. Etkili ama emotional blunting + libido kaybı yıkıcı. Augmentation (bupropion ekle) veya switch (SNRI'a geç) tartışacaksın. Psikiyatrist analitik, müzakereye açık.",
      npc_role: "Therapist",
      setting: "Medication management visit, psychiatric outpatient clinic",
      turns: [
        {
          speaker: "npc",
          message:
            "Last time we talked about adjusting the regimen. Where are you on sertraline now — what's working, what's not?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the core (effect|antidepressant)|sertraline at 100).{0,40}(real|meaningful|clear)",
            "(but the (side effect|trade.?off|cost)|the limitation).{0,80}(blunting|sexual|libido)",
            "(emotional (blunting|flattening)).{0,80}(creative|professional|relational)",
            "(sexual side effects|libido|anorgasmia).{0,80}(intolerable|unsustainable|unacceptable)",
            "(the trade.?off|cost-benefit).{0,40}(shifted|no longer favorable|not sustainable)",
          ],
          hint_tr:
            "Net özet sun: 'The antidepressant effect at 100mg is real, but the emotional blunting and sexual side effects have become unsustainable.'",
        },
        {
          speaker: "npc",
          message:
            "Two paths here — augment with bupropion to offset the sexual and motivational side effects, or switch to an SNRI like duloxetine. What's your instinct?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my instinct|i('?d| would) lean) (toward|to).{0,40}(augmentation|bupropion|adding)",
            "(i('?m| am) (drawn|hesitant) to) (switching|abandoning).{0,80}(antidepressant effect|baseline)",
            "(augmentation (preserves|keeps)|adding bupropion).{0,80}(working|baseline|response)",
            "(my (concern|worry) with|the risk with) (switching|the snri).{0,80}(loss of|losing|backsliding)",
            "(what'?s the (clinical )?evidence|how does the data) (for|on) (augmentation|adjunctive)",
          ],
          hint_tr:
            "Tercihini açıkla: 'I'd lean toward augmentation — it preserves what's working, and bupropion may directly offset the sexual and emotional blunting.'",
        },
        {
          speaker: "npc",
          message:
            "Reasonable framing. Bupropion has activating effects that often counter blunting, and there's decent data on the sexual side. Concerns?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (concern|main worry)) (is|with).{0,40}(seizure|anxiety|activation|sleep)",
            "(any (interaction|caution)) (with|around).{0,40}(anxiety|panic|seizure)",
            "(what about|how do we handle) (the (initial|early)) (activation|anxiety|sleep)",
            "(if (this doesn'?t|it doesn'?t)) (work|land|help).{0,40}(then (we|do we))",
            "(what'?s|what would be) (the (timeline|trial period|reassessment))",
          ],
          hint_tr:
            "Endişeleri ileri sür: 'My main concerns are activation and sleep — and I'd want a clear timeline before we'd consider switching.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. We'd start bupropion XL 150mg, reassess at four weeks, titrate to 300mg if tolerated. If no traction by week eight, we revisit the SNRI option.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('?s| is)|that sounds).{0,40}(measured|structured|reasonable)",
            "(yes|i('?m| am) on board)(,)?.{0,40}(with (the timeline|that framework))",
            "(can we (document|put on paper)|i('?d| would) like to (write down|document))",
            "(what should i watch|what side effects).{0,40}(flag|escalate|call about)",
            "(perfect|works for me).{0,40}(let('?s| us)|i('?ll| will))",
          ],
          hint_tr:
            "Çerçeveyi onayla: 'That's measured — let's document the timeline and what would trigger a switch.'",
        },
      ],
    },
    {
      id: "ex.health.c1.mental.3.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I want to stop sertraline now because of sex problems. Give me different medicine.",
      correct_sentence:
        "Given the persistent sexual side effects and emotional blunting on sertraline, I'd like to discuss bupropion augmentation versus switching to an SNRI — with a clear taper if we go the switch route.",
      tr_explanation:
        "C1 ilaç müzakeresi: 'stop now' tehlikeli (rebound, withdrawal). Klinik çerçeve: spesifik yan etkileri adlandır, iki seçeneği önerin, taper protokolünü gündeme getir. Hekimle müzakere ediyorsun, ondan emir bekliyor değilsin.",
    },
  ],
};

// ============================================================
// Lesson 9 — health.c1.chronic.1
// Endocrinologist — CGM data, Time-in-Range, basal/bolus optimization
// ============================================================
export const healthC1Lesson_chronic_1: BundledLesson = {
  id: "health.c1.chronic.1",
  skill_id: "health.c1.chronic",
  index: 1,
  title: "Endokrinolog'la CGM verisi okuma — Time-in-Range",
  description:
    "Tip 1 diyabet, pump kullanıcı. TIR %72, gece hipoları haftada iki. Basal düşür mü, extended bolus mu? Veri-temelli müzakere.",
  estimated_minutes: 15,
  exercises: [
    {
      id: "ex.health.c1.chronic.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Time-in-Range (TIR)",
      tr_translation: "Hedef aralıkta geçirilen süre (CGM metriği)",
      example:
        "My Time-in-Range is 72%, but it's masking twice-weekly nocturnal hypos.",
      example_tr:
        "TIR'im %72 ama haftada iki gece hipoglisemiyi gizliyor.",
    },
    {
      id: "ex.health.c1.chronic.1.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Saat 21:00 yükselişi için bazal ayarı düşürmek mi, yoksa uzatılmış bolus denemek mi daha mantıklı?",
      target:
        "For the 9 PM rise, does it make more sense to lower the basal or to try an extended bolus?",
      accepted_variants: [
        "Should I dial back the basal or try an extended bolus for the 9 PM rise?",
        "For that 9 PM excursion, do I lower basal or run an extended bolus?",
        "Is it smarter to reduce basal or use an extended bolus for the post-dinner rise?",
        "Would you lower the basal rate or try an extended bolus for the 9 PM spike?",
        "Lower the basal or use an extended/dual-wave bolus for the 9 PM rise?",
      ],
      tr_hint:
        "'Extended bolus' = uzatılmış bolus (yavaş emilim, yağ/protein ağırlıklı yemekler için). 'Dial back basal' = bazal düşürmek.",
    },
    {
      id: "ex.health.c1.chronic.1.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "The 3 AM ___ pattern suggests my overnight basal is too aggressive.",
      answer: "hypoglycemia",
      distractors: ["hyperglycemia", "ketosis", "glucagon", "spike"],
      tr_hint:
        "Gece hipoglisemisi = aşırı bazal işareti. 'Nocturnal hypos' veya '3 AM hypoglycemia' standart ifadeler.",
    },
    {
      id: "ex.health.c1.chronic.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Endokrinolog randevu. Pump + CGM raporlarını yükledin. TIR %72 görünüyor iyi, ama gece hipoları ve akşam 21:00 yükselişi var. Veri-temelli iyileştirme isteyeceksin.",
      npc_role: "Endocrinologist",
      setting: "Endocrinology follow-up, CGM dashboard on screen",
      turns: [
        {
          speaker: "npc",
          message:
            "Your two-week download is up. TIR 72%, A1C estimate around 6.9. Looking good on paper — what are you seeing day-to-day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (overall|headline) tir|72% (looks|sounds)).{0,40}(reassuring|good).{0,40}(but|though|underneath)",
            "(twice|two).{0,40}(a week|weekly).{0,40}(nocturnal|overnight|3 a\\.?m\\.?).{0,40}(hypos|lows)",
            "(my (concern|worry|focus)).{0,40}(below.range|low|hypo).{0,40}(time|fraction)",
            "(there'?s|i'?m seeing).{0,40}(a (consistent|persistent|reproducible)).{0,40}(rise|spike).{0,40}(9 p\\.?m\\.?|after dinner)",
            "(the (data|tir)) (masks|hides|smooths over).{0,40}(real|underlying)",
          ],
          hint_tr:
            "Veriyi yorumla: 'The TIR looks reassuring on the surface, but I'm seeing twice-weekly nocturnal hypos and a persistent 9 PM rise.'",
        },
        {
          speaker: "npc",
          message:
            "Good catch. The hypos worry me more than the rise. Where are they clustering — and have you noticed a pattern with dinners?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mostly|primarily).{0,40}(2|3) (a\\.?m\\.?|to 4 a\\.?m\\.?)",
            "(on (nights|days)).{0,40}(workout|exercise|gym|long walks)",
            "(when (dinner|the meal)).{0,40}(higher.protein|higher.fat|fattier)",
            "(no obvious|hard to pin to).{0,40}(consistent|specific).{0,40}(dinner|food)",
            "(the (pattern|signal)) (suggests|points to).{0,40}(overnight basal|night basal)",
          ],
          hint_tr:
            "Deseni adlandır: 'Mostly 2 to 4 AM, especially on days I've worked out. Suggests overnight basal is too aggressive.'",
        },
        {
          speaker: "npc",
          message:
            "I'd dial the overnight basal back 10%. For the 9 PM rise — what's your read? Basal or bolus issue?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think|my read is).{0,40}(meal|bolus|carb)",
            "(it correlates with|it tracks).{0,40}(dinners (with|that)).{0,40}(protein|fat|pasta|rice)",
            "(i('?m| am) (curious|wondering)) (about|whether).{0,40}(extended|dual.?wave|square)",
            "(an extended bolus|a dual.?wave).{0,40}(60.?40|split).{0,40}(over (two|3))",
            "(rather than|instead of) (raising|bumping) (the basal|basal)",
          ],
          hint_tr:
            "Çözümü öner: 'I think it's bolus-related — heavier dinners. I'd try a 60/40 extended bolus over two hours before raising basal.'",
        },
        {
          speaker: "npc",
          message:
            "Solid reasoning. Let's do this — overnight basal down 10%, try a 60/40 extended bolus for dinners over 60g carbs, and we'll review the two-week download.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|that sounds).{0,40}(measured|systematic|reasonable)",
            "(yes|let('?s| us))(,)?.{0,40}(i('?ll| will) (log|track|annotate))",
            "(i('?ll| will) (annotate|tag|note)).{0,40}(extended.bolus|exercise|the changes)",
            "(when should i|how soon).{0,40}(message|escalate|call).{0,40}(hypos|patterns)",
            "(thanks|appreciate).{0,40}(working through|the partnership)",
          ],
          hint_tr:
            "Planı onayla: 'That works. I'll annotate extended boluses and exercise days in the app, and message you if hypos persist.'",
        },
      ],
    },
    {
      id: "ex.health.c1.chronic.1.5",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "Time-in-Range (TIR) hangi metrik?",
          options: [
            "Hedef aralıkta (genellikle 70–180 mg/dL) geçirilen sürenin yüzdesi",
            "Egzersiz süresi",
            "İlaç alma sıklığı",
            "Uyku süresi",
          ],
          correct_index: 0,
          tr_explanation:
            "TIR = Time-in-Range, CGM çağının temel metriği. A1C'ye ek olarak günlük varyabiliteyi yansıtır.",
        },
        {
          question:
            "'Extended bolus' (uzatılmış bolus) hangi yemekte mantıklı?",
          options: [
            "Şekerli içecek",
            "Yağ/protein ağırlıklı, yavaş emilen yemek (pizza, pasta)",
            "Boş mide",
            "Sıvı kahvaltı",
          ],
          correct_index: 1,
          tr_explanation:
            "Yağ ve protein karbonhidrat emilimini geciktirir. Standart bolus erken hipo + geç hiperglisemi yapar; extended bolus dağılımı dengeler.",
        },
        {
          question:
            "Gece 3 sularında tekrarlayan hipoglisemi en sık neyi gösterir?",
          options: [
            "Çok az yemek yenmiş",
            "Bazal infüzyon hızının gereğinden yüksek olduğunu",
            "Yetersiz pompa şarjı",
            "Sensör hatası",
          ],
          correct_index: 1,
          tr_explanation:
            "Tekrarlayan 2–4 AM hipogliseimi tipik olarak aşırı bazal işareti. 10–20% düşüş + iki haftalık takip standart.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — health.c1.chronic.2
// A1C plateau — closed-loop pump upgrade argument
// ============================================================
export const healthC1Lesson_chronic_2: BundledLesson = {
  id: "health.c1.chronic.2",
  skill_id: "health.c1.chronic",
  index: 2,
  title: "A1C platosu — teknolojiye geçiş argümanı",
  description:
    "İki yıldır 7.4'te takılı. Closed-loop sisteme geçmek istiyorsun, sigorta engeli var. Endokrinoloğa rationale ver, prior auth letter'ı koordine et.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.health.c1.chronic.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "closed-loop system",
      tr_translation: "Kapalı döngü insülin pompası (hibrit yapay pankreas)",
      example:
        "I've plateaued at A1C 7.4 despite optimization — a closed-loop system is the logical next step.",
      example_tr:
        "Tüm optimizasyona rağmen A1C 7.4'te tıkandım — closed-loop mantıklı bir sonraki adım.",
    },
    {
      id: "ex.health.c1.chronic.2.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sigortanın prior authorization yazısı için klinik gerekçeyi birlikte hazırlayabilir miyiz?",
      target:
        "Could we work on the clinical rationale for the insurance prior authorization together?",
      accepted_variants: [
        "Can we draft the clinical rationale for the prior auth together?",
        "Could we put the prior authorization letter together — the clinical justification?",
        "I'd like to coordinate on the prior auth letter — the medical necessity language.",
        "Can we jointly prepare the medical necessity rationale for prior authorization?",
        "Could we collaborate on the prior auth justification?",
      ],
      tr_hint:
        "'Prior authorization' = sigortanın önceden onay süreci. 'Clinical rationale' = klinik gerekçe.",
    },
    {
      id: "ex.health.c1.chronic.2.3",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I want new pump because old one is boring and I see good ads.",
      correct_sentence:
        "I've plateaued at A1C 7.4 for two years despite optimized basal and exercise patterns — a closed-loop system would address the variability the current pump can't.",
      tr_explanation:
        "Sigortanın gerekçeli onayı için: plato (2 yıl 7.4), denenen optimizasyon, neden mevcut sistemin yetmediği. 'Boring' ve 'ads' iddia ciddiyetini sıfırlar.",
    },
    {
      id: "ex.health.c1.chronic.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Endokrinolog randevu. Sen closed-loop pompa (örn. tandem t:slim x2 control-iq) istiyorsun. Sigorta yüksek olasılıkla reddedecek — birlikte güçlü bir prior auth gerekçesi yazmalısınız.",
      npc_role: "Endocrinologist",
      setting: "Diabetes technology transition visit",
      turns: [
        {
          speaker: "npc",
          message:
            "You wanted to talk about transitioning to closed-loop. Walk me through your case — why now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have) been (stuck|plateaued)|my a1c has held).{0,40}(7\\.4|7\\.3|7\\.5).{0,40}(two years|24 months)",
            "(despite|even with) (optimized|aggressive|systematic).{0,40}(basal|carb (counting|ratios)|exercise)",
            "(my (cgm|tir) data) (shows|reveals).{0,40}(variability|excursions|hypos|swings)",
            "(manual (titration|adjustment)).{0,80}(can'?t|isn'?t able to) (handle|address|catch)",
            "(closed.?loop|hybrid (artificial|closed-loop)).{0,40}(would|could) (address|capture|handle)",
          ],
          hint_tr:
            "Klinik tarihi kur: 'I've been plateaued at 7.4 for two years despite optimized basal and carb ratios — the CGM shows variability manual titration can't catch.'",
        },
        {
          speaker: "npc",
          message:
            "That's a solid clinical argument. Insurance will push back, though. What's been their pattern with closed-loop requests?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have)) (looked at|reviewed).{0,40}(plan policy|the formulary|medical policy)",
            "(my plan typically|the carrier) (requires|needs).{0,80}(documented|failed|trial of)",
            "(their (criteria|requirements)) (include|involve).{0,80}(a1c|hypo (history|frequency)|hours of cgm)",
            "(i ()suspect|expect)) (they('?ll| will)).{0,40}(deny|push back|require additional)",
            "(i('?ve| have)) (prepared|gathered).{0,80}(documentation|cgm data|hypo logs)",
          ],
          hint_tr:
            "Sigorta zeminini hazırla: 'I've reviewed the medical policy — they typically require documented hypo frequency and CGM data, both of which I have.'",
        },
        {
          speaker: "npc",
          message:
            "Good preparation. I'd anchor the letter on three things: A1C plateau despite optimization, documented hypo burden, and the clinical literature on closed-loop. Sound right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|that('?s| is) exactly).{0,40}(the structure|the framing)",
            "(could we (cite|reference)).{0,40}(the (rct|trial|literature)|ade|control-iq)",
            "(i('?ve| have) (a|the) (citations|references)).{0,40}(ready|prepared)",
            "(should we|do you want to) (include|add).{0,40}(quality of life|psychosocial|burnout)",
            "(perfect|let('?s| us)).{0,40}(draft|write).{0,40}(this (week|today))",
          ],
          hint_tr:
            "Yapıyı birlikte sahiplen: 'Exactly — and I have the Control-IQ pivotal trial citations ready. Should we also include the diabetes burnout component?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, add it. I'll draft this week and share with you for review before submission. If denied, we'll request a peer-to-peer immediately.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|i appreciate).{0,40}(the (collaboration|partnership))",
            "(let'?s|i('?ll| will)) (also|in parallel) (prepare|draft) (an appeal|response)",
            "(when you (share|send) the draft|once i (have|get) the draft).{0,40}(i('?ll| will) (review|annotate))",
            "(if (it gets|they) deny|in case of denial).{0,40}(peer.?to.?peer|external review)",
            "(perfect|that works).{0,40}(let('?s| us)).{0,40}(stay coordinated)",
          ],
          hint_tr:
            "Sonraki adıma hazırlık: 'I appreciate the partnership. I'll review the draft and prep an appeal in parallel — if denied, we go straight to peer-to-peer.'",
        },
      ],
    },
    {
      id: "ex.health.c1.chronic.2.6",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "'A1C platosu' (plateau) ile teknoloji yükseltme talebi arasındaki ilişki?",
          options: [
            "A1C düşük olduğu için yeni cihaz hak edilir",
            "Optimize edilmiş davranışa rağmen A1C iyileşmiyorsa, sistem kısıtı argümanı doğar",
            "Plato sigortanın işine gelir",
            "A1C yüksekse otomatik onay vardır",
          ],
          correct_index: 1,
          tr_explanation:
            "Klinik gerekçe: davranışı optimize ettiğin halde A1C iyileşmiyorsa, mevcut sistemin yetersizliği belgelenir. Closed-loop bu boşluğu doldurur.",
        },
        {
          question: "'Prior authorization' nedir?",
          options: [
            "Sigortanın belirli tedavi/cihaz öncesi gerekli ön onay süreci",
            "Acil onay",
            "Mahkeme onayı",
            "Hastanın imzası",
          ],
          correct_index: 0,
          tr_explanation:
            "Prior auth = ABD sigorta sisteminde belirli pahalı/teknolojik ürünler için ön onay belgelendirmesi. Doktorun klinik gerekçesi şart.",
        },
        {
          question:
            "C1 hasta sigortaya hazırlanırken hangi üç temel veriyi entegre eder?",
          options: [
            "Telefon, fatura, sosyal medya",
            "A1C trendi/plato + dokümante hipo yükü + klinik literatür/RCT",
            "Aile fotoğrafları, mektuplar",
            "Sadece doktor mektubu",
          ],
          correct_index: 1,
          tr_explanation:
            "Sigorta kararını ters çevirmek için sayısal kanıt (A1C, hipo logları), kılavuz/literatür (Control-IQ RCT) ve klinisyen LMN'si birleştirilir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — health.c1.surgery.1
// Surgeon — elective discectomy risk-benefit
// ============================================================
export const healthC1Lesson_surgery_1: BundledLesson = {
  id: "health.c1.surgery.1",
  skill_id: "health.c1.surgery",
  index: 1,
  title: "Cerrah'la risk-fayda analizi — elektif ameliyat",
  description:
    "Discectomy önerildi. Absolute risk reduction, NNT, 5-yıllık outcome data, konservatif yol — analitik müzakere.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.health.c1.surgery.1.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "absolute risk reduction (ARR)",
      tr_translation: "Mutlak risk azalması (kanıt-temelli karar metriği)",
      example:
        "What's the absolute risk reduction with surgery versus continued physical therapy at five years?",
      example_tr:
        "Ameliyatın fizik tedaviye göre beş yıllık mutlak risk azalması ne kadar?",
    },
    {
      id: "ex.health.c1.surgery.1.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Beş yıllık takipte ameliyat ile konservatif tedavi arasındaki gerçek fark nedir?",
      target:
        "What's the actual difference between surgery and conservative treatment at five-year follow-up?",
      accepted_variants: [
        "What does the five-year outcome data show for surgery versus conservative management?",
        "How meaningful is the surgical advantage at the five-year mark compared with PT?",
        "At five years, what's the real outcome gap between surgery and conservative care?",
        "What's the five-year delta between surgical and non-surgical management?",
        "How does surgery compare with conservative management at five years out?",
      ],
      tr_hint:
        "'Outcome data' = sonuç verileri. 'Conservative management' = ameliyatsız tedavi. RCT verisi sorgulamak C1 hasta standardı.",
    },
    {
      id: "ex.health.c1.surgery.1.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "What's the ___ needed to treat to prevent one persistent disability at two years?",
      answer: "number",
      distractors: ["count", "rate", "score", "amount"],
      tr_hint:
        "'Number needed to treat (NNT)' = bir olumlu sonuç için tedavi edilmesi gereken hasta sayısı. C1 kanıt okuryazarlığının kalbinde.",
    },
    {
      id: "ex.health.c1.surgery.1.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Just tell me — is the surgery good or bad? I don't want statistics.",
      correct_sentence:
        "Before we commit, I'd like to understand the absolute risk reduction at five years, the NNT, and whether continued conservative care is still a defensible option.",
      tr_explanation:
        "C1 hasta: 'good or bad' ikili yargıyı reddeder. Kanıt-temelli kararı talep eder — ARR, NNT, konservatif yolun açıklığı. Bilimsel okuryazarlık + alçakgönüllü ton.",
    },
    {
      id: "ex.health.c1.surgery.1.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "L5-S1 disk herniasyonu. 8 hafta fizik tedavi yapıldı. Cerrah mikrodiskektomi öneriyor. Sen kanıt-temelli soru çerçeven kurmak istiyorsun.",
      npc_role: "Pre-op nurse",
      setting: "Surgical consultation, neurosurgery clinic",
      turns: [
        {
          speaker: "npc",
          message:
            "Based on the imaging and your eight weeks of PT, I'd recommend a microdiscectomy. Walk me through what you'd want to understand first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(before (committing|proceeding)|i'?d? like to (understand|work through)).{0,80}(risk-benefit|trade.?off|outcome data)",
            "(my (questions|focus) (are|center on)).{0,80}(absolute risk reduction|nnt|five.?year)",
            "(what (does|do) (the (rct|spore|sport) (data|trials)|spine outcomes)).{0,40}(show|tell us)",
            "(i('?ve| have)) (read|reviewed).{0,40}(the (sport|literature|trials|maine lumbar))",
            "(how meaningful|how durable).{0,40}(the (surgical|short-term) advantage)",
          ],
          hint_tr:
            "Çerçeveyi aç: 'I'd like to understand the absolute risk reduction at five years and the NNT — and what the SPORT trial actually showed long-term.'",
        },
        {
          speaker: "npc",
          message:
            "Good preparation. SPORT data at two years showed clear surgical advantage; at five years the gap narrows significantly. The case for surgery is strongest if you're in real functional decline. Where are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(functionally|day-to-day).{0,80}(stable|holding|managing)",
            "(the pain has|symptoms have).{0,40}(stabilized|leveled|plateaued)",
            "(i('?m| am)) (still able to|able to).{0,40}(work|exercise|function)",
            "(no (red flags|progressive))(,)?.{0,40}(weakness|bowel|bladder|foot drop)",
            "(my (real )?question|the issue is).{0,80}(quality (of life|long-term)|persistent)",
          ],
          hint_tr:
            "Durumu sun: 'Functionally stable, no red flags — symptoms have plateaued. The real question is durable quality of life.'",
        },
        {
          speaker: "npc",
          message:
            "Then conservative management remains defensible. The harder decision is six months out if you're still where you are. Do you want to set a re-evaluation milestone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|that('?s| is)).{0,40}(exactly what i was hoping)",
            "(let('?s| us)|i('?d| would) like to) (set|define).{0,40}(milestones|criteria|triggers)",
            "(what (would|should)) (trigger|move me toward).{0,40}(escalation|surgery|re-evaluate)",
            "(can we (document|put down)).{0,40}(specific (criteria|thresholds|red flags))",
            "(perfect|works for me).{0,40}(six.?month|three.?month).{0,40}(follow.?up|check.?in)",
          ],
          hint_tr:
            "Yapısallaştır: 'Yes — let's document specific re-evaluation triggers. What clinical changes would tip the balance?'",
        },
        {
          speaker: "npc",
          message:
            "We'll re-image and reassess at six months — any new neurological deficit, worsening function, or pain escalation triggers a surgical conversation. Sound right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('?s| is)|that sounds).{0,40}(the kind of|measured|structured)",
            "(yes|absolutely)(,)?.{0,40}(with (clear|defined))",
            "(thank you|i appreciate).{0,40}(rigorous|systematic|partnership)",
            "(perfect|let('?s| us)).{0,40}(plan to|reconvene)",
            "(can you (send|share) me).{0,40}(written|the (plan|criteria))",
          ],
          hint_tr:
            "Kapat: 'That works — could you send me a written summary of the re-evaluation criteria? I'd like to share with my PT.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — health.c1.surgery.2
// Anesthesiologist consultation — comorbidities + technique
// ============================================================
export const healthC1Lesson_surgery_2: BundledLesson = {
  id: "health.c1.surgery.2",
  skill_id: "health.c1.surgery",
  index: 2,
  title: "Anestezist konsültü — komorbidite ve teknik seçimi",
  description:
    "Sleep apnea + anksiyete + statin kullanımı. Genel vs. spinal anestezi trade-off'u. Premedication, intraop awareness riski, postop pain protocol planla.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.health.c1.surgery.2.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "intraoperative awareness",
      tr_translation: "Ameliyat sırasında uyanıklık (anestezi komplikasyonu)",
      example:
        "Given my anxiety history, I'm specifically concerned about intraoperative awareness with the lighter regimens.",
      example_tr:
        "Anksiyete geçmişim göz önüne alındığında, hafif anestezi protokollerinde intraop awareness konusunda özellikle endişeliyim.",
    },
    {
      id: "ex.health.c1.surgery.2.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Uyku apnem var, statin kullanıyorum ve anksiyete tanım mevcut — protokol nasıl ayarlanır?",
      target:
        "I have sleep apnea, I'm on a statin, and I have an anxiety diagnosis — how does the protocol adjust?",
      accepted_variants: [
        "With sleep apnea, statin use, and an anxiety diagnosis on file, how do you tailor the protocol?",
        "Sleep apnea, statins, and anxiety — what adjustments do those drive in your plan?",
        "Given OSA, a statin, and anxiety, how do you modify the anesthesia plan?",
        "How does my profile — OSA, statin, anxiety — shape your anesthesia choice?",
        "How does the protocol adjust for OSA, statins, and anxiety in combination?",
      ],
      tr_hint:
        "Komorbiditeleri net listele, kişisel tartışmaya davet et. 'Tailor the protocol' = protokolü kişiselleştir.",
    },
    {
      id: "ex.health.c1.surgery.2.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "For OSA patients, I'd want to minimize ___ and have CPAP available in PACU.",
      answer: "opioids",
      distractors: ["fluids", "antibiotics", "blankets", "monitors"],
      tr_hint:
        "OSA'da opioidler hava yolu kollapsı riskini artırır. Opioid-sparing protokol + PACU'da CPAP standart.",
    },
    {
      id: "ex.health.c1.surgery.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Ameliyat öncesi anestezi konsültü. Diskektomi planlı. Sen OSA + GAD + statin profilinle anestezi planını detaylı müzakere edeceksin.",
      npc_role: "Pre-op nurse",
      setting: "Pre-operative anesthesia consultation",
      turns: [
        {
          speaker: "npc",
          message:
            "I've got your chart. OSA, anxiety, on a statin — anything else on the medical history before we plan the anesthesia?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('?s| is)|those are).{0,40}(the main|the relevant)",
            "(my (osa|sleep apnea)).{0,40}(cpap|titrated|moderate|severe)",
            "(my (anxiety|gad)).{0,40}(treated|managed).{0,40}(ssri|therapy|stable)",
            "(the (statin|atorvastatin|rosuvastatin)).{0,40}(low.?dose|primary prevention)",
            "(no (other|additional)).{0,40}(cardiac|pulmonary|hepatic|renal)",
          ],
          hint_tr:
            "Profili netleştir: 'Those are the main ones — moderate OSA on CPAP, GAD well-managed on sertraline, low-dose statin for primary prevention.'",
        },
        {
          speaker: "npc",
          message:
            "Helpful. Two options for the discectomy — general with intubation, or spinal with sedation. Each has trade-offs given OSA. What's your preference?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(walk me through|talk me through).{0,40}(the (trade.?offs|differences))",
            "(my (concerns|hesitations) with general).{0,80}(opioids|airway|post-op|cognitive)",
            "(my (concerns|hesitations) with spinal).{0,80}(awareness|sedation depth|anxiety)",
            "(which (does|would)) (the literature|outcome data).{0,40}(favor|support).{0,40}(osa|my profile)",
            "(can we (do|plan) spinal|i('?d| would) lean toward spinal).{0,40}(opioid.?sparing|less airway)",
          ],
          hint_tr:
            "Trade-off'u müzakere et: 'I'd lean toward spinal with light sedation — minimizes airway risk and post-op opioids — but I'm concerned about awareness given my anxiety.'",
        },
        {
          speaker: "npc",
          message:
            "Reasonable instinct. We can do spinal with light propofol sedation and a small dose of midazolam for anxiety. That should give you no recall.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what about (premed|premedication)).{0,40}(anxiety|preop)",
            "(can we (plan|discuss)).{0,40}(post-?op|pain).{0,40}(multimodal|opioid.?sparing)",
            "(my (preference|approach) for post.?op).{0,40}(scheduled (acetaminophen|nsaid)|opioid.?sparing)",
            "(should we (continue|hold) the statin).{0,40}(morning|night before)",
            "(when (do|should) i (stop|hold)).{0,40}(the (statin|sertraline|food))",
          ],
          hint_tr:
            "Detayları kapsa: 'Can we plan a multimodal post-op approach — scheduled acetaminophen and gabapentin — to minimize opioid exposure?'",
        },
        {
          speaker: "npc",
          message:
            "Yes — multimodal post-op, continue statin and sertraline as normal, NPO from midnight. You'll meet me again pre-op. Other questions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can you (send|email) me).{0,40}(written|the (plan|summary))",
            "(when can i (resume|restart)) (cpap|driving|work)",
            "(what should i (flag|call about)) (post.?op|after discharge)",
            "(thank you|i appreciate).{0,40}(thoroughness|partnership)",
            "(perfect|that works).{0,40}(see you|meet you).{0,40}(pre-op)",
          ],
          hint_tr:
            "Belgeyi iste: 'Could you email me a written summary of the plan and the post-op pain protocol? Thanks for the thoroughness.'",
        },
      ],
    },
    {
      id: "ex.health.c1.surgery.2.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Just put me to sleep deep, no questions. I don't want to feel anything.",
      correct_sentence:
        "Given my OSA, I'd prefer spinal with light sedation if it's clinically reasonable — could you walk me through the awareness risk and post-op pain plan?",
      tr_explanation:
        "C1 anestezi konsültü: komorbidite-temelli tercih ifade et ('Given my OSA'), öğrenmeye davet et ('walk me through'), spesifik konuları (awareness, post-op pain) gündeme getir.",
    },
  ],
};

// ============================================================
// Lesson 13 — health.c1.eol.1
// Palliative care meeting — goals of care for a parent
// ============================================================
export const healthC1Lesson_eol_1: BundledLesson = {
  id: "health.c1.eol.1",
  skill_id: "health.c1.eol",
  index: 1,
  title: "Palyatif ekip toplantısı — goals of care",
  description:
    "Ailenin yerine konuşuyorsun. Annenin değerleri net: kalite, miktar değil. Agresif tedaviden konfor-odaklı bakıma geçişi yapısal olarak ifade et.",
  estimated_minutes: 16,
  exercises: [
    {
      id: "ex.health.c1.eol.1.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "goals of care",
      tr_translation: "Bakım hedefleri (palyatif/yaşam-sonu çerçeve)",
      example:
        "We're at the point where the goals of care need to shift from cure to comfort.",
      example_tr:
        "Bakım hedeflerinin tedaviden konfora kayması gereken noktadayız.",
    },
    {
      id: "ex.health.c1.eol.1.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Annem net konuştu: kalite, miktar değil. Agresif tedaviden konfor-odaklı bakıma geçelim.",
      target:
        "Mom has been clear: quality over quantity. Let's transition from aggressive treatment to comfort-focused care.",
      accepted_variants: [
        "My mother has been clear — quality over quantity. We'd like to shift from aggressive intervention to comfort care.",
        "Mom's stated preference is quality over quantity. We want to move toward comfort-focused care.",
        "Her values are clear — quality over quantity — and we'd like to transition the plan to comfort care.",
        "She has been explicit: quality, not quantity. Let's shift to comfort-focused care.",
        "Mom has made her wishes clear — quality of life, not extension at any cost. We're ready for comfort care.",
      ],
      tr_hint:
        "'Quality over quantity' = bu bağlamda kanonik kalıp. 'Comfort-focused care' veya 'comfort care' = palyatif modüne geçiş.",
    },
    {
      id: "ex.health.c1.eol.1.3",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "We don't want any more treatment because it's too expensive and tiring.",
      correct_sentence:
        "Her stated values have been clear — quality over quantity — and we'd like to align the care plan with that: shift toward comfort-focused care, with hospice eligibility on the table.",
      tr_explanation:
        "Yaşam-sonu konuşmalarda 'expensive/tiring' aile motivasyonu olarak yanlış mesaj. Doğru çerçeve: hastanın değerleri, hospice eligibility gibi yapısal seçenekler. Ağırbaşlı, hastayı merkeze alan ton.",
    },
    {
      id: "ex.health.c1.eol.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Annenin metastatik kanseri var, son altı haftada belirgin gerileme. Palyatif ekiple aile toplantısı. Annenin yerine konuşuyorsun, onun değerlerini taşıyorsun. Saygı, ağırlık, netlik.",
      npc_role: "Palliative care doctor",
      setting: "Family meeting room, palliative care service",
      turns: [
        {
          speaker: "npc",
          message:
            "Thank you for coming in. I know this is a hard meeting. Before I share where the medical team is, I'd like to hear from you — what's been happening at home, and what does Mom say she wants?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(over the (past|last) (few weeks|six weeks)|in the (last|past) month).{0,80}(decline|weaker|withdrawn|disengaged)",
            "(she'?s? been|mom has been).{0,40}(clear|explicit|consistent).{0,80}(quality|not (more )?treatment|no more (chemo|hospital))",
            "(at home she'?s?).{0,80}(sleeping|eating less|withdrawn|tired)",
            "(her stated (values|wishes|priorities) (are|have been)).{0,80}(quality|comfort|home|family)",
            "(she has said|she keeps telling us).{0,80}(no more|enough|she'?s done)",
          ],
          hint_tr:
            "Annenin sesini taşı: 'Over the past six weeks she's declined visibly. She's been explicit — quality over quantity. She keeps telling us she's done with hospital stays.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you for being so clear. Medically, we agree — further chemotherapy would buy weeks at most, with significant burden. What do you understand about hospice, and is the family aligned?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we'?ve? (been )?reading|i'?ve? been (reading|learning) about).{0,40}(hospice|eligibility)",
            "(my understanding|what i understand).{0,80}(focus shifts|comfort|symptom management|home-based)",
            "(the family|my siblings|all of us).{0,80}(aligned|on the same page|in agreement)",
            "(there'?s? consensus|we'?re? aligned).{0,40}(about|on).{0,40}(direction|hospice|comfort)",
            "(mom (signed|has) an advance directive).{0,40}(spells|lays out|states)",
          ],
          hint_tr:
            "Aile durumunu netleştir: 'My understanding is hospice shifts focus to symptom management and home-based care. The family is aligned — there's consensus.'",
        },
        {
          speaker: "npc",
          message:
            "Good. The POLST form and a DNR order are the next concrete steps. Are you and Mom prepared to discuss specific limits — intubation, artificial nutrition, CPR?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|we are)(,)?.{0,40}(mom has been (explicit|clear))",
            "(she has been (clear|explicit)).{0,80}(no (intubation|cpr|tube feeding|ventilator))",
            "(her advance directive|her wishes).{0,80}(spells|lays|sets out).{0,40}(specifically|in detail)",
            "(we want to (formalize|document)).{0,40}(polst|dnr|the limits)",
            "(let'?s? (walk|go) through (each|the)).{0,40}(intervention|line by line)",
          ],
          hint_tr:
            "Spesifik sınırları kabul et: 'Yes — she has been explicit. No intubation, no CPR, no artificial nutrition. We're ready to formalize the POLST.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. I'll put the POLST in front of her today and we'll initiate hospice referral this afternoon. Is there anything you or the family want to make sure I understand?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what (matters|she wants) (most|above all)).{0,80}(home|family|comfort|dignity)",
            "(she wants to (be|stay) home|her wish is to die at home)",
            "(her dignity|her comfort).{0,40}(non.?negotiable|the priority)",
            "(if anything (changes|shifts)|if she wavers).{0,80}(revisit|honor her|check in)",
            "(thank you|we (deeply )?appreciate).{0,80}(the (compassion|gentleness|partnership))",
          ],
          hint_tr:
            "Hastanın temel değerini ilet: 'What matters most to her is being home, with her dignity intact. Thank you for the compassion in how you're holding this.'",
        },
      ],
    },
    {
      id: "ex.health.c1.eol.1.6",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "'Goals of care' yaşam-sonu çerçevesinde ne tanımlar?",
          options: [
            "Hastanın günlük yapacakları",
            "Hastanın değerleri ve hedefleri ışığında bakım planının yönü (tedavi vs konfor)",
            "Hastane sistemindeki idari hedefler",
            "Doktorun kişisel görüşü",
          ],
          correct_index: 1,
          tr_explanation:
            "Goals of care = hastanın değerlerini bakım kararlarına çeviren çerçeve. 'Cure', 'life-extending', 'comfort-focused' eksenlerinde yön belirler.",
        },
        {
          question: "POLST formu neyi belgeler?",
          options: [
            "Hastanın sigorta kapsamı",
            "Spesifik yaşam-sürdürücü girişim tercihlerini (intubation, CPR, beslenme) tıbbi emir olarak",
            "Ailenin maddi durumu",
            "Hastanenin politikası",
          ],
          correct_index: 1,
          tr_explanation:
            "POLST = Physician Orders for Life-Sustaining Treatment. Hastanın belirli girişimler için tercihini doktor emri formunda kayıt altına alır.",
        },
        {
          question:
            "Aile üyesi olarak hastanın değerlerini taşırken en C1 yapı hangisi?",
          options: [
            "'Ben çok yorgunum.'",
            "'Mom has been clear — quality over quantity. Let's align the care plan with her stated values.'",
            "'Tedaviyi kesin.'",
            "'Onun adına karar veriyorum.'",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygılı yapı: hastayı sesli özne yap ('Mom has been clear'), değerini referans göster ('quality over quantity'), bakım planını hizalama olarak çerçevele.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14 — health.c1.eol.2
// Advance directive with PCP — DNR, proxy, scope of authority
// ============================================================
export const healthC1Lesson_eol_2: BundledLesson = {
  id: "health.c1.eol.2",
  skill_id: "health.c1.eol",
  index: 2,
  title: "Advance directive görüşmesi — DNR ve vekil tayini",
  description:
    "Kendi advance directive'ini düzenliyorsun. PCP ile: intubation, artificial nutrition, CPR limitleri. Health care proxy'nin authority sınırları.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.health.c1.eol.2.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "health care proxy",
      tr_translation: "Sağlık vekili (karar verme yetkisi devredilen kişi)",
      example:
        "I want to appoint my sister as health care proxy, with explicit limits on the scope of her authority.",
      example_tr:
        "Kız kardeşimi sağlık vekili olarak atamak istiyorum — yetki sınırlarını açıkça belirleyerek.",
    },
    {
      id: "ex.health.c1.eol.2.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bilincim olmadığında sağlık vekilimin nereye kadar karar verebileceğini net belirlemek istiyorum.",
      target:
        "I want to clearly define the boundaries of my health care proxy's decisions when I'm incapacitated.",
      accepted_variants: [
        "I want to clearly delineate the scope of my proxy's authority if I'm unable to decide.",
        "I'd like to set explicit limits on what my health care proxy can decide on my behalf.",
        "I want to define exactly what my proxy can and cannot consent to when I'm incapacitated.",
        "I'd like to set the boundaries of proxy authority for the times I can't make decisions.",
        "I want explicit limits on my proxy's decision-making scope in the directive.",
      ],
      tr_hint:
        "'Incapacitated' = karar verme yetersizliği (klinik terim). 'Scope of authority' = yetki kapsamı. Hukuki + klinik kesişim.",
    },
    {
      id: "ex.health.c1.eol.2.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I want a ___ in place — no chest compressions, no defibrillation if my heart stops.",
      answer: "DNR",
      distractors: ["DNS", "POA", "POLST", "DNI"],
      tr_hint:
        "DNR = Do Not Resuscitate. CPR ve defibrilasyondan vazgeçme tıbbi emri. DNI sadece intubation'a özgü.",
    },
    {
      id: "ex.health.c1.eol.2.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "If I die, don't do anything to bring me back.",
      correct_sentence:
        "I'd like a DNR documented — no chest compressions, no defibrillation — and I want my advance directive to spell out my position on intubation and artificial nutrition separately.",
      tr_explanation:
        "C1 advance directive dili: 'don't do anything' belirsiz, hukuken zayıf. Spesifik girişimleri ayrı ayrı adlandır (CPR, defibrillation, intubation, artificial nutrition). 'Spell out' = açıkça yaz.",
    },
    {
      id: "ex.health.c1.eol.2.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PCP randevu. Sen sağlıklısın ama advance directive'ini güncellemek istiyorsun. Spesifik girişim sınırlarını ve sağlık vekilinin yetki sınırlarını belirlemen lazım. Ölüm hakkında ağırbaşlı konuşma.",
      npc_role: "Palliative care doctor",
      setting: "Primary care visit, planned advance care planning conversation",
      turns: [
        {
          speaker: "npc",
          message:
            "Good for you for tackling this while you're well — most people put it off. Where would you like to start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?d| would) like to (work through|update|finalize)).{0,40}(advance directive|directive|polst)",
            "(my (priorities|values|focus)).{0,80}(specific (limits|interventions)|proxy|scope)",
            "(i want to (think|talk) through).{0,80}(intubation|cpr|artificial nutrition|each intervention)",
            "(my (goal|aim) is to (set|define|delineate)).{0,40}(scope|boundaries|limits)",
            "(this isn'?t|i('?m| am) not).{0,40}(reactive|panicked|hypothetical).{0,40}(thoughtful|deliberate)",
          ],
          hint_tr:
            "Çerçeveyi aç: 'I'd like to work through specific intervention limits — CPR, intubation, artificial nutrition — and define the scope of my proxy's authority.'",
        },
        {
          speaker: "npc",
          message:
            "Let's go intervention by intervention. CPR first — your position?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if my (heart stops|cardiac arrest)).{0,80}(no (cpr|chest compressions|defibrillation))",
            "(i want a dnr|i('?d| would) like to be dnr).{0,40}(documented|in place|on file)",
            "(my position on cpr|on cpr).{0,80}(decline|no|opt out)",
            "(no (chest compressions|cpr|defibrillation)).{0,40}(under any|in any scenario|across the board)",
            "(if (my heart|i)) (stops|arrest)(,)?.{0,40}(let me go|no intervention)",
          ],
          hint_tr:
            "Net pozisyon ver: 'If my heart stops, I want a documented DNR — no chest compressions, no defibrillation.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Intubation and ventilator — same blanket, or scenario-dependent?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(scenario.?dependent|context.?dependent|conditional)",
            "(short.?term|time-limited).{0,40}(intubation|trial).{0,80}(acceptable|reasonable).{0,40}(reversible|recoverable)",
            "(if there'?s? a (reasonable|realistic) chance|with a clear path back).{0,40}(intubation (is|would be) (acceptable|fine))",
            "(no (long.?term|chronic|permanent)).{0,40}(intubation|trach|ventilator)",
            "(i want a (time-limited|short))(,)?.{0,40}(trial|window).{0,40}(48|72|seven days)",
          ],
          hint_tr:
            "Nüansla: 'Scenario-dependent. A time-limited intubation trial — say, 72 hours — is acceptable if recovery is realistic. No long-term ventilation.'",
        },
        {
          speaker: "npc",
          message:
            "Smart. Artificial nutrition and hydration — comfort feeding only, or do you want a trial of feeding tube?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(comfort feeding only|no (feeding tube|peg|tube feeding))",
            "(if i can'?t? (eat|swallow))(,)?.{0,40}(that('?s| is)).{0,40}(my body telling)",
            "(no (artificial|tube)).{0,40}(nutrition|hydration)",
            "(i decline).{0,40}(tube feeding|peg|ng tube)",
            "(hydration for comfort|comfort hydration).{0,40}(yes|acceptable|fine)",
          ],
          hint_tr:
            "Net konum al: 'Comfort feeding only — no tube feeding. Hydration for comfort is fine.'",
        },
        {
          speaker: "npc",
          message:
            "Final piece — your proxy. Who is it, and what authority do you want them to have?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (sister|partner|brother|spouse|best friend)).{0,40}(designated|appointed|named)",
            "(she has (full|broad|defined)).{0,40}(authority|discretion).{0,40}(within|so long as)",
            "(her (authority|scope)).{0,80}(consistent with|within the limits of).{0,40}(this directive|my wishes)",
            "(i('?ve| have)) (spelled out|made clear).{0,40}(she (cannot|can'?t) override)",
            "(she can'?t? consent to).{0,40}(cpr|intubation|tube feeding).{0,40}(beyond|outside)",
          ],
          hint_tr:
            "Vekilin sınırını çiz: 'My sister is the proxy with broad authority — but she cannot consent to interventions outside the limits I've spelled out here.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 15 — health.c1.pharmacy.1
// Pharmacist — polypharmacy review and deprescribing
// ============================================================
export const healthC1Lesson_pharmacy_1: BundledLesson = {
  id: "health.c1.pharmacy.1",
  skill_id: "health.c1.pharmacy",
  index: 1,
  title: "Eczacıyla polifarmasi incelemesi — etkileşim ve sadeleştirme",
  description:
    "Yedi ilaç kullanıyorsun. Brown bag review, warfarin–amiodarone etkileşimi, PPI'nin hâlâ indikasyonu var mı? Deprescribing tartışması.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.health.c1.pharmacy.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "brown bag review",
      tr_translation: "Tüm ilaçların tek seferde gözden geçirildiği danışma",
      example:
        "I'd like to do a brown bag review — I've brought everything I'm actually taking, including OTC.",
      example_tr:
        "Brown bag review yapmak istiyorum — gerçekte aldığım her şeyi getirdim, reçetesizler dahil.",
    },
    {
      id: "ex.health.c1.pharmacy.1.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "PPI'nin hâlâ endikasyonu var mı, yoksa deprescribe için aday mı?",
      target:
        "Is the PPI still indicated, or is it a candidate for deprescribing?",
      accepted_variants: [
        "Is there still an active indication for the PPI, or should we deprescribe it?",
        "Does the PPI still have an indication, or is it a deprescribing candidate?",
        "Should we revisit the PPI — is it still indicated, or can we taper?",
        "Is the PPI still earning its place, or is it a candidate to come off?",
        "Can we reassess the PPI — is the indication still active?",
      ],
      tr_hint:
        "'Indicated' = endikasyonu var. 'Deprescribing' = ilacı kademeli olarak kesme süreci. C1 polifarmasi diyaloğunun anahtar kelimesi.",
    },
    {
      id: "ex.health.c1.pharmacy.1.3",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I take too many pills. Stop some of them please.",
      correct_sentence:
        "I'd like a brown bag review — I'm specifically worried about the warfarin–amiodarone interaction and whether the PPI is still indicated.",
      tr_explanation:
        "C1 eczacı görüşmesi: belirsiz 'stop some' yerine spesifik konuyu öne sür — adlandırılmış etkileşim (warfarin–amiodarone), spesifik ilaç (PPI), tanınmış çerçeve (brown bag review).",
    },
    {
      id: "ex.health.c1.pharmacy.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Eczacıyla brown bag review randevu. Yedi ilaç var. Sen spesifik kaygılarla gidiyorsun: warfarin–amiodarone etkileşimi, PPI'nin sürekli indikasyonu, anticholinergic burden.",
      npc_role: "Pharmacist",
      setting: "Medication therapy management consultation, pharmacy back room",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for coming in. You've brought everything — let me set this up. What prompted the request?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have) been (thinking|concerned)).{0,40}(seven|7).{0,40}(medications|drugs|pills)",
            "(my (specific|main) concerns are).{0,80}(warfarin.?amiodarone|interaction|the ppi)",
            "(i want to (look at|review)).{0,80}(deprescribing|simplification|the (whole )?regimen)",
            "(no one has (looked|reviewed)|nobody has done).{0,40}(the (whole|full) (regimen|picture))",
            "(my (clinicians|prescribers) (are|tend to be)) (siloed|separate)(,)?.{0,40}(nobody has)",
          ],
          hint_tr:
            "Çerçeveyi kur: 'My clinicians are siloed — no one has reviewed the full regimen. My specific concerns are the warfarin–amiodarone interaction and the PPI indication.'",
        },
        {
          speaker: "npc",
          message:
            "Good call. Warfarin–amiodarone — they interact significantly. Let me see your INR history. What's your current dose adjustment plan?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my inr|inr).{0,40}(target|range).{0,40}(2|2\\.0).{0,40}(3|3\\.0)",
            "(my (cardiology|warfarin clinic)).{0,40}(adjusted|reduced|brought down).{0,40}(30|33|by a third)",
            "(when amiodarone (was )?started|once amiodarone was added).{0,80}(reduced|adjusted|cut)",
            "(my (last few|recent)) inrs.{0,40}(stable|in range)",
            "(i('?ve| have) been (tracking|logging)).{0,40}(inr|trends|fluctuations)",
          ],
          hint_tr:
            "Veriyi sun: 'My warfarin clinic reduced the dose by a third when amiodarone was added. Recent INRs have been stable in range.'",
        },
        {
          speaker: "npc",
          message:
            "Smart adjustment. The PPI now — what was the original indication and how long have you been on it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it was started for|originally for).{0,40}(reflux|gerd|gastritis|stress ulcer prophylaxis)",
            "(i('?ve| have) been on it for).{0,40}(four|five|six|several) years",
            "(symptoms have (resolved|been quiet)|i('?ve| have) been (asymptomatic|fine)) (for|in).{0,40}(years|a while)",
            "(no one has reassessed|nobody has revisited).{0,40}(the (indication|need))",
            "(i('?m| am) (open to|interested in)).{0,40}(tapering|stepping down|h2 blocker)",
          ],
          hint_tr:
            "İndikasyonu sorgula: 'Started for GERD four years ago. Symptoms have been quiet for two years — I'm open to a taper or stepping down to an H2 blocker.'",
        },
        {
          speaker: "npc",
          message:
            "Reasonable candidate for deprescribing. Standard approach is taper over four to eight weeks with rebound monitoring. I'll draft a plan and send it to your PCP for sign-off.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('?s| is)|that sounds).{0,40}(measured|the right approach)",
            "(what should i (watch|monitor)).{0,40}(rebound|return|breakthrough)",
            "(can i (start|initiate)) (an h2|famotidine).{0,40}(transition|bridge)",
            "(could you (also (look|review)|check)).{0,40}(anticholinergic|burden|other interactions)",
            "(thank you|i appreciate).{0,40}(the (rigor|partnership|deep dive))",
          ],
          hint_tr:
            "Sürdür: 'That works — what should I watch for rebound, and could you also flag any anticholinergic burden in the remaining regimen?'",
        },
      ],
    },
    {
      id: "ex.health.c1.pharmacy.1.6",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "'Brown bag review' nedir?",
          options: [
            "Eczanede indirim",
            "Hastanın evdeki tüm ilaçları (reçeteli/reçetesiz/takviye) eczacıyla tek seferde gözden geçirmesi",
            "İlaç dağıtımı",
            "Acil reçete",
          ],
          correct_index: 1,
          tr_explanation:
            "Brown bag review = polifarmasiyi denetlemenin standart yolu. Hasta torbasını getirir, eczacı gerçek kullanımı haritalandırır.",
        },
        {
          question: "Warfarin–amiodarone etkileşiminde standart yaklaşım?",
          options: [
            "Hiçbir şey yapma",
            "Warfarin dozunu yaklaşık üçte bir azalt ve INR'yi yakın takip et",
            "Amiodarone'u kes",
            "İki katı warfarin ver",
          ],
          correct_index: 1,
          tr_explanation:
            "Amiodarone warfarin'in CYP metabolizmasını inhibe eder. Standart: warfarin dozunu ~30% azalt, INR'yi başlangıçta haftalık izle.",
        },
        {
          question: "'Deprescribing' süreci nasıl bir mantığa dayanır?",
          options: [
            "Hasta isteyince ilaçları aniden kesmek",
            "Endikasyonu kalmamış ya da risk/fayda dengesi bozulmuş ilaçları yapılandırılmış olarak kademeli kesmek",
            "Eczacının inisiyatifiyle kesmek",
            "Sigortayı memnun etmek için kesmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Deprescribing = klinik endikasyon, risk–fayda dengesi ve hasta tercihi temelinde, taper protokolüyle ilaç çıkartma süreci. Polifarmasiyi azaltmanın bilimsel yolu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const healthC1Lessons: ReadonlyArray<BundledLesson> = [
  healthC1Lesson_secondop_1,
  healthC1Lesson_secondop_2,
  healthC1Lesson_secondop_3,
  healthC1Lesson_appeal_1,
  healthC1Lesson_appeal_2,
  healthC1Lesson_mental_1,
  healthC1Lesson_mental_2,
  healthC1Lesson_mental_3,
  healthC1Lesson_chronic_1,
  healthC1Lesson_chronic_2,
  healthC1Lesson_surgery_1,
  healthC1Lesson_surgery_2,
  healthC1Lesson_eol_1,
  healthC1Lesson_eol_2,
  healthC1Lesson_pharmacy_1,
];

export function getHealthC1Lesson(id: string): BundledLesson | undefined {
  return healthC1Lessons.find((l) => l.id === id);
}
