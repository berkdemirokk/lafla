// YDS / YÖKDİL / YKS-DİL — Türkiye'nin ulusal İngilizce sınavları için hazırlık.
// Skill: testprep.yds.* / testprep.yokdil.* / testprep.yksdil.*
// Tone: Türkçe-akademik sınav hazırlık. Sınav formatına uygun reading + grammar + vocab.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — YDS Cloze Test / Sosyal Bilim
// ============================================================
export const ydsYokdilLesson_1: BundledLesson = {
  id: "testprep.yds.cloze-social.1",
  skill_id: "testprep.yds.cloze",
  index: 1,
  title: "YDS Cloze · Sosyal Bilim",
  description:
    "YDS cloze test — sosyal bilim pasajı (200 kelime). 5 boşluk, çoktan seçmeli. Tek bir akademik metinden bağlam çıkar, doğru kelime/yapıyı seç.\n\nPASAJ:\nOver the past several decades, urbanisation has transformed the way human beings interact with one another. In many societies, traditional close-knit communities have gradually given way (1) ___ more anonymous urban networks. Sociologists argue that this shift is not merely a matter of geography; (2) ___, it reflects a fundamental change in social structure. Although city life offers greater economic opportunities and access to public services, it also tends to weaken informal ties between neighbours. As a result, many urban residents report feeling isolated, (3) ___ the fact that they are surrounded by millions of people. Recent studies have shown that loneliness rates in metropolitan areas can be significantly higher than in rural districts, which (4) ___ that physical proximity alone does not guarantee meaningful social connection. Policymakers, therefore, increasingly emphasise the importance of designing public spaces — parks, community centres, and pedestrian zones — that actively (5) ___ social interaction and a sense of belonging.\n\n(1) to / for / by / from / with\n(2) however / rather / similarly / consequently / namely\n(3) despite / because of / instead of / regardless / in spite\n(4) suggests / suggested / suggesting / has suggested / would suggest\n(5) encourage / discourage / replace / postpone / abandon",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.yds1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "give way to",
      tr_translation: "yerini bırakmak / yerini almak",
      example: "Traditional communities have given way to anonymous networks.",
      example_tr: "Geleneksel topluluklar yerini anonim ağlara bıraktı.",
    },
    {
      id: "ex.yds1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "sense of belonging",
      tr_translation: "aidiyet duygusu",
      example: "Public spaces foster a sense of belonging.",
      example_tr: "Kamusal alanlar aidiyet duygusunu besler.",
    },
    {
      id: "ex.yds1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Şehir hayatı daha büyük ekonomik fırsatlar sunsa da, komşular arasındaki gayri resmi bağları zayıflatma eğilimindedir.",
      target:
        "Although city life offers greater economic opportunities, it tends to weaken informal ties between neighbours.",
      accepted_variants: [
        "Even though city life offers greater economic opportunities, it tends to weaken informal ties between neighbours.",
        "While city life offers more economic opportunities, it has a tendency to weaken informal ties between neighbours.",
        "Although urban life provides greater economic opportunities, it tends to weaken informal bonds between neighbours.",
      ],
      tr_hint:
        "'Sunsa da' = 'Although / Even though'. 'Eğiliminde' = 'tends to' veya 'has a tendency to'. YDS'de bu bağlaçlar sık geçer.",
    },
    {
      id: "ex.yds1.4",
      type: "translate",
      difficulty: 4,
      direction: "en_to_tr",
      source:
        "Loneliness rates in metropolitan areas can be significantly higher than in rural districts.",
      target:
        "Metropollerdeki yalnızlık oranları, kırsal bölgelere göre belirgin biçimde daha yüksek olabilir.",
      accepted_variants: [
        "Büyük şehirlerdeki yalnızlık oranları, kırsal bölgelerden çok daha yüksek olabiliyor.",
        "Metropoliten alanlarda yalnızlık oranları, kırsal kesime kıyasla anlamlı ölçüde daha yüksek olabilir.",
      ],
      tr_hint:
        "'Significantly' = belirgin/anlamlı ölçüde. YDS'de karşılaştırma yapıları sınav konusudur.",
    },
    {
      id: "ex.yds1.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Traditional close-knit communities have gradually given way ___ more anonymous urban networks.",
      answer: "to",
      distractors: ["for", "by", "from", "with"],
      tr_hint:
        "'Give way to' sabit phrasal verb kalıbı: 'yerini bırakmak'. YDS cloze'da prepositional verb sorulur.",
    },
    {
      id: "ex.yds1.6",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "This shift is not merely a matter of geography; ___, it reflects a fundamental change in social structure.",
      answer: "rather",
      distractors: ["however", "similarly", "consequently", "namely"],
      tr_hint:
        "'Not X; rather Y' = 'X değil; aksine Y'. 'However' karşıtlık değil, 'rather' daha doğal.",
    },
    {
      id: "ex.yds1.7",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Many urban residents report feeling isolated, ___ the fact that they are surrounded by millions of people.",
      answer: "despite",
      distractors: ["because of", "instead of", "regardless", "in spite"],
      tr_hint:
        "'Despite the fact that' = 'rağmen'. 'In spite' yetersiz — 'in spite OF' olmalı. 'Despite' tek başına of/the fact alır.",
    },
    {
      id: "ex.yds1.8",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Despite of the rising population, the city remains peaceful.",
      correct_sentence:
        "Despite the rising population, the city remains peaceful.",
      tr_explanation:
        "YDS'de en sık tuzak: 'despite' kendisi 'rağmen' demek, 'of' GEREKMEZ. 'In spite OF' doğru ama 'despite OF' YANLIŞ. Karıştırılır.",
    },
    {
      id: "ex.yds1.9",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Pasaja göre, sosyologların kentleşmeye ilişkin ana iddiası nedir?",
          options: [
            "Kentleşme sadece coğrafi bir değişimdir.",
            "Kentleşme, sosyal yapının temel bir değişimini yansıtır.",
            "Kentleşme ekonomik fırsatları azaltmıştır.",
            "Kentleşme yalnızlık oranlarını düşürmüştür.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'it reflects a fundamental change in social structure'. 'Not merely... rather' yapısı temel iddiayı verir.",
        },
        {
          question:
            "Pasajdan çıkarılabilecek sonuç hangisidir? (Inference / Çıkarım)",
          options: [
            "Fiziksel yakınlık tek başına anlamlı sosyal bağ garantilemez.",
            "Kırsal alanlar metropollerden daha kalabalıktır.",
            "Şehirler ekonomik fırsat sağlayamamaktadır.",
            "Yalnızlık sadece yaşlılarda görülür.",
          ],
          correct_index: 0,
          tr_explanation:
            "Pasaj: 'physical proximity alone does not guarantee meaningful social connection'. Inference soruları YDS reading'de standart.",
        },
        {
          question:
            "Yazara göre, politika yapıcılar neyi vurgulamaktadır?",
          options: [
            "Kırsal yaşama dönüşü",
            "Sosyal etkileşimi destekleyen kamusal alanların tasarımını",
            "Şehir nüfusunu azaltmayı",
            "Yalnızlık oranlarının ölçülmesini",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'designing public spaces... that actively encourage social interaction'. Yazarın önerisi açık.",
        },
        {
          question: "'Anonymous' kelimesinin pasajdaki anlamı en yakın olarak?",
          options: ["İsimsiz", "Tanıdık", "Tehlikeli", "Geleneksel"],
          correct_index: 0,
          tr_explanation:
            "'Anonymous urban networks' = bireylerin birbirini tanımadığı, isimsiz şehir ağları.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — YDS Cloze Test / Fen Bilim
// ============================================================
export const ydsYokdilLesson_2: BundledLesson = {
  id: "testprep.yds.cloze-science.1",
  skill_id: "testprep.yds.cloze",
  index: 2,
  title: "YDS Cloze · Fen Bilim",
  description:
    "YDS cloze — fen bilim pasajı (220 kelime). Bilimsel metinde sık kullanılan bağlaçlar, fiil zamanları ve kollokasyonlar.\n\nPASAJ:\nCoral reefs are among the most biodiverse ecosystems on Earth, supporting approximately one quarter of all marine species. (1) ___ , these underwater habitats are remarkably fragile. Even a slight rise in ocean temperature can trigger a process known as coral bleaching, (2) ___ the corals expel the symbiotic algae living in their tissues. Without these algae, the corals lose both their vivid colouring and their main source of nutrition. If the stress is prolonged, the corals may eventually die. Marine biologists have been monitoring reefs for decades and (3) ___ that the frequency of bleaching events has increased dramatically since the 1980s. Climate change, ocean acidification, and overfishing are widely regarded as the principal factors (4) ___ to reef degradation. Although several international initiatives have been launched to protect these ecosystems, progress remains slow. Researchers therefore stress that, (5) ___ further action is taken, many of the world's reefs may collapse within the next half-century.\n\n(1) However / Therefore / Moreover / Hence / Similarly\n(2) which / in which / where / whose / whom\n(3) report / have reported / had reported / are reporting / would report\n(4) contributing / contributed / to contribute / contribute / having contributed\n(5) unless / if / when / as / provided",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.yds2.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "trigger a process",
      tr_translation: "bir süreci tetiklemek",
      example: "A rise in temperature can trigger a process known as bleaching.",
      example_tr: "Sıcaklıktaki artış, ağarma denilen süreci tetikleyebilir.",
    },
    {
      id: "ex.yds2.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "be regarded as",
      tr_translation: "olarak görülmek / sayılmak",
      example: "Climate change is regarded as the principal factor.",
      example_tr: "İklim değişikliği temel etken olarak görülmektedir.",
    },
    {
      id: "ex.yds2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Eğer daha fazla önlem alınmazsa, dünyanın mercanlarının çoğu önümüzdeki elli yıl içinde yok olabilir.",
      target:
        "Unless further action is taken, many of the world's reefs may collapse within the next half-century.",
      accepted_variants: [
        "If further action is not taken, many of the world's reefs may collapse within the next fifty years.",
        "Unless more action is taken, much of the world's coral may collapse within the next half-century.",
      ],
      tr_hint:
        "'-mazsa' = 'unless' (= if...not). YDS'de 'unless' + olumlu fiil kalıbı çok sorulur.",
    },
    {
      id: "ex.yds2.4",
      type: "translate",
      difficulty: 4,
      direction: "en_to_tr",
      source:
        "Marine biologists have been monitoring reefs for decades and report that bleaching events have increased dramatically.",
      target:
        "Deniz biyologları onlarca yıldır mercanları izlemektedir ve ağarma olaylarının çarpıcı biçimde arttığını bildirmektedir.",
      accepted_variants: [
        "Deniz biyologları yıllardır resifleri gözlemektedir ve ağarma olaylarının dramatik şekilde arttığını rapor etmektedir.",
      ],
      tr_hint:
        "'Have been monitoring' = present perfect continuous → '-mektedir, izlemektedir'. Türkçe geniş zaman ile karşılanır.",
    },
    {
      id: "ex.yds2.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Coral reefs support a quarter of all marine species. ___, these habitats are remarkably fragile.",
      answer: "However",
      distractors: ["Therefore", "Moreover", "Hence", "Similarly"],
      tr_hint:
        "İki cümle arası karşıtlık var: 'biodiverse' ↔ 'fragile'. Karşıtlık bağlacı = 'However'.",
    },
    {
      id: "ex.yds2.6",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Bleaching is a process ___ the corals expel the symbiotic algae living in their tissues.",
      answer: "in which",
      distractors: ["which", "where", "whose", "whom"],
      tr_hint:
        "'A process' soyut bir süreç; içinde bir şey 'olur' → 'in which'. 'Where' fiziksel yer için. YDS relative clause klasiği.",
    },
    {
      id: "ex.yds2.7",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Climate change and overfishing are regarded as the principal factors ___ to reef degradation.",
      answer: "contributing",
      distractors: ["contributed", "to contribute", "contribute", "having contributed"],
      tr_hint:
        "Reduced relative clause: 'factors WHICH ARE contributing' → 'factors contributing'. Present participle. YDS'de sık.",
    },
    {
      id: "ex.yds2.8",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "If the action is not taken soon, many reefs will be died.",
      correct_sentence:
        "Unless action is taken soon, many reefs will die.",
      tr_explanation:
        "İki hata: (1) 'die' geçişsiz fiil → passive 'be died' OLMAZ. 'Will die' aktiftir. (2) 'If...not' yerine 'Unless' daha temiz. YDS'de bu çift tuzak sık karşımıza çıkar.",
    },
    {
      id: "ex.yds2.9",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Pasaja göre mercan ağarması nasıl başlar?",
          options: [
            "Aşırı avlanma sonucu",
            "Okyanus sıcaklığındaki hafif artışla",
            "Mercanların yaşlanmasıyla",
            "Algler tarafından saldırı sonucu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Even a slight rise in ocean temperature can trigger... bleaching'. Sıcaklık → ağarma.",
        },
        {
          question: "Yazar bilim insanlarının tespitini hangi yapıyla sunar?",
          options: [
            "Present simple",
            "Past simple",
            "Present perfect continuous",
            "Future perfect",
          ],
          correct_index: 2,
          tr_explanation:
            "'Have been monitoring for decades' = geçmişte başladı, hâlâ sürüyor. YDS bu zamanı 'for/since' ile birlikte sorar.",
        },
        {
          question:
            "'Acidification' kelimesinin kökü ne anlamına gelir?",
          options: [
            "Tuzlanma",
            "Asitlenme",
            "Isınma",
            "Soğuma",
          ],
          correct_index: 1,
          tr_explanation:
            "'Acid' = asit. 'Acidification' = asitleşme süreci. YDS'de morfolojik analiz sık geçer.",
        },
        {
          question:
            "Pasajın ana fikri (main idea) hangisidir?",
          options: [
            "Mercan resifleri çok zengindir ve büyümektedir.",
            "Mercan resifleri biyoçeşitlilik açısından zengindir ama insan kaynaklı tehditlerle çöküş riski altındadır.",
            "İklim değişikliği abartılan bir tehlikedir.",
            "Algler mercanlara zarar verir.",
          ],
          correct_index: 1,
          tr_explanation:
            "Main idea soruları YDS reading'de standart. Cevap: çeşitlilik + tehdit + risk üçlüsü.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — YDS Reading / Tarih-Kültür
// ============================================================
export const ydsYokdilLesson_3: BundledLesson = {
  id: "testprep.yds.reading-history.1",
  skill_id: "testprep.yds.reading",
  index: 3,
  title: "YDS Reading · Tarih & Kültür",
  description:
    "YDS reading comprehension — tarih/kültür pasajı. Main idea, detail, inference, kelime soruları.\n\nPASAJ:\nThe Silk Road was never a single highway but rather a network of interconnected trade routes that linked the East and the West for more than fifteen centuries. Beginning around the second century BCE, caravans of merchants travelled across deserts, mountains, and steppes, exchanging not only silk but also spices, precious stones, paper, and gunpowder. What is often overlooked, however, is that the Silk Road served as far more than a commercial corridor. It also functioned as a conduit for the transmission of ideas, religions, technologies, and even diseases. Buddhism, for example, spread from India into China largely thanks to monks who travelled alongside trading caravans. Similarly, scientific knowledge — from Arab astronomical tables to Chinese mechanical inventions — moved across vast distances and shaped civilisations far from its origin. By the time European seafaring routes began to flourish in the sixteenth century, the overland Silk Road had already lost much of its commercial significance. Nevertheless, the cultural and intellectual legacy of these ancient routes continues to influence the modern world, reminding us that globalisation, in its essence, is far from a recent phenomenon.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.yds3.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "serve as a conduit for",
      tr_translation: "bir şey için kanal/aracı vazifesi görmek",
      example: "The Silk Road served as a conduit for the transmission of ideas.",
      example_tr: "İpek Yolu, fikirlerin aktarılması için bir kanal vazifesi gördü.",
    },
    {
      id: "ex.yds3.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "be far from",
      tr_translation: "asla / hiç de değil",
      example: "Globalisation is far from a recent phenomenon.",
      example_tr: "Küreselleşme yeni bir olgu olmaktan çok uzaktır.",
    },
    {
      id: "ex.yds3.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İpek Yolu tek bir yol değil, on beş yüzyıldan fazla bir süre Doğu ile Batı'yı birbirine bağlayan ticaret yolları ağıdır.",
      target:
        "The Silk Road was never a single highway but rather a network of trade routes that linked the East and the West for more than fifteen centuries.",
      accepted_variants: [
        "The Silk Road was not a single road but a network of trade routes that connected the East and West for over fifteen centuries.",
        "The Silk Road was not just one path but rather an interconnected network of trade routes linking East and West for more than 15 centuries.",
      ],
      tr_hint:
        "'Tek bir... değil, ... ağıdır' = 'not a single... but rather a network of...'. 'For more than' = '...dan fazla bir süre'.",
    },
    {
      id: "ex.yds3.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "By the sixteenth century, the overland Silk Road ___ much of its commercial significance.",
      answer: "had already lost",
      distractors: ["already lost", "has already lost", "was already losing", "loses"],
      tr_hint:
        "Past perfect: 16. yüzyıldan ÖNCE kaybetmişti. 'By the time' + past perfect kalıbı YDS klasiği.",
    },
    {
      id: "ex.yds3.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Buddhism spread from India into China largely ___ to monks who travelled alongside caravans.",
      answer: "thanks",
      distractors: ["due", "owing", "because", "given"],
      tr_hint:
        "'Thanks to + isim' = 'sayesinde'. 'Due to' / 'owing to' da olabilir ama 'thanks to' burada olumlu nedensellik.",
    },
    {
      id: "ex.yds3.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Despite the Silk Road has lost its commercial role, its cultural legacy continues.",
      correct_sentence:
        "Although the Silk Road has lost its commercial role, its cultural legacy continues.",
      tr_explanation:
        "'Despite' + isim/gerund; 'Although' + tam cümle (özne + fiil). Pasajda 'has lost' yan cümle olduğundan 'Although' doğru. YDS'nin en sevdiği tuzak.",
    },
    {
      id: "ex.yds3.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "Pasajın ana fikri (main idea) hangisidir?",
          options: [
            "İpek Yolu sadece bir ticaret yolu değil, fikirlerin ve kültürün de aktığı bir ağdı.",
            "İpek Yolu, 16. yüzyılda Avrupa deniz ticareti tarafından geliştirildi.",
            "Mercan ticareti İpek Yolu'nun temelini oluşturdu.",
            "Budizm İpek Yolu'nu kontrol altında tutardı.",
          ],
          correct_index: 0,
          tr_explanation:
            "Main idea: ticaret + kültür/fikir/teknoloji aktarımı. Yazarın çekirdek tezi.",
        },
        {
          question:
            "Pasaja göre 16. yüzyılda ne olmuştur? (Detail)",
          options: [
            "İpek Yolu yeniden canlanmıştır.",
            "İpek Yolu ticari önemini büyük ölçüde yitirmişti.",
            "İpek Yolu kapatılmıştır.",
            "İpek Yolu sadece Avrupa için açılmıştır.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'By the time European seafaring routes began to flourish in the sixteenth century, the overland Silk Road had already lost much of its commercial significance.'",
        },
        {
          question:
            "Yazarın son cümlesinden çıkarılabilecek sonuç (inference) hangisidir?",
          options: [
            "Küreselleşme 21. yüzyılın icadıdır.",
            "Küreselleşme yeni değildir; kökleri antik döneme uzanır.",
            "İpek Yolu artık tamamen unutulmuştur.",
            "Modern dünya geçmişin etkisinden bağımsızdır.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Globalisation, in its essence, is far from a recent phenomenon' = küreselleşme aslında yeni değil. YDS inference klasiği.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — YDS Reading / Bilim-Teknoloji
// ============================================================
export const ydsYokdilLesson_4: BundledLesson = {
  id: "testprep.yds.reading-tech.1",
  skill_id: "testprep.yds.reading",
  index: 4,
  title: "YDS Reading · Bilim & Teknoloji",
  description:
    "YDS reading — bilim/teknoloji metni. Yapay zekânın iş gücüne etkisi. 3 soru: main idea + detail + inference.\n\nPASAJ:\nThe rapid advance of artificial intelligence has prompted vigorous debate about its long-term impact on the global workforce. On the one hand, optimists argue that AI will free human beings from repetitive, mundane tasks, allowing them to focus on creative and interpersonal work. They point to the historical record: although every major technological transition — from the steam engine to the personal computer — has displaced certain occupations, the overall result has been more, not fewer, jobs. Pessimists, by contrast, warn that the present transition is qualitatively different. Unlike earlier innovations, which primarily replaced manual labour, modern AI systems are increasingly capable of performing cognitive tasks once considered the exclusive domain of educated professionals. Lawyers, accountants, radiologists, and even software engineers have begun to feel the pressure. A recent report by the World Economic Forum estimated that by 2030, up to twenty per cent of current job categories could undergo substantial transformation. The truth, as is often the case, may lie somewhere in between. While AI will undoubtedly eliminate some jobs, it is also likely to create new ones — many of which we cannot yet imagine. What matters most, experts suggest, is whether educational systems can adapt quickly enough to prepare workers for a labour market in constant flux.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.yds4.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "the exclusive domain of",
      tr_translation: "...nin tekelinde / sadece ...ye özel alan",
      example: "These tasks were once the exclusive domain of professionals.",
      example_tr: "Bu görevler bir zamanlar yalnızca profesyonellerin tekelindeydi.",
    },
    {
      id: "ex.yds4.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "in constant flux",
      tr_translation: "sürekli değişim halinde",
      example: "Workers must adapt to a labour market in constant flux.",
      example_tr: "Çalışanlar sürekli değişen bir iş piyasasına uyum sağlamalıdır.",
    },
    {
      id: "ex.yds4.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Yapay zekâ bazı işleri ortadan kaldıracak olsa da, hayal bile edemediğimiz yeni işler de yaratması muhtemeldir.",
      target:
        "While AI will eliminate some jobs, it is also likely to create new ones, many of which we cannot yet imagine.",
      accepted_variants: [
        "Although AI will get rid of some jobs, it is likely to create new ones that we cannot even imagine.",
        "Even though artificial intelligence will eliminate certain jobs, it will probably create new jobs we cannot yet imagine.",
      ],
      tr_hint:
        "'Olsa da' = 'while/although'. 'Muhtemeldir' = 'is likely to'. YDS'de 'be likely to + V' modal alternatif olarak sorulur.",
    },
    {
      id: "ex.yds4.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Modern AI systems are capable of performing tasks once ___ the domain of educated professionals.",
      answer: "considered",
      distractors: ["consider", "considering", "to consider", "considers"],
      tr_hint:
        "Reduced relative clause: 'tasks WHICH WERE considered' → 'tasks considered'. Past participle. YDS klasiği.",
    },
    {
      id: "ex.yds4.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Every technological transition has displaced certain occupations; ___, the overall result has been more jobs.",
      answer: "however",
      distractors: ["therefore", "moreover", "similarly", "namely"],
      tr_hint:
        "'Displaced jobs' ↔ 'more jobs' — karşıtlık. Cevap: 'however'.",
    },
    {
      id: "ex.yds4.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "AI will probably create new jobs which we cannot imagine them yet.",
      correct_sentence:
        "AI will probably create new jobs which we cannot yet imagine.",
      tr_explanation:
        "Relative clause sonrasında nesne tekrarı YOK. 'Jobs WHICH we cannot imagine' — 'them' artık zorunlu değil, hatta yanlış. Türk öğrencinin sık tuzağı.",
    },
    {
      id: "ex.yds4.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "Pasaja göre kötümserlerin (pessimists) ana endişesi nedir?",
          options: [
            "AI çok pahalıdır.",
            "Modern AI, eğitimli profesyonellerin işlerini de yapabilir hale gelmektedir.",
            "AI sadece fiziksel işleri etkiler.",
            "AI gelecekte tamamen yasaklanacaktır.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'modern AI systems are increasingly capable of performing cognitive tasks once considered the exclusive domain of educated professionals.'",
        },
        {
          question:
            "World Economic Forum raporuna göre 2030'a kadar ne olabilir? (Detail)",
          options: [
            "Tüm işler kaybolur.",
            "Mevcut iş kategorilerinin %20'sine kadarı önemli dönüşüm geçirebilir.",
            "AI tamamen başarısız olur.",
            "Çalışanların sayısı iki katına çıkar.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'up to twenty per cent of current job categories could undergo substantial transformation'.",
        },
        {
          question:
            "Pasajın son paragrafından çıkarılabilecek sonuç (inference) nedir?",
          options: [
            "Eğitim sistemlerinin uyumu, AI'nin etkisinin sonucu belirlemede kritik bir faktördür.",
            "Eğitim sistemlerinin AI ile hiçbir ilgisi yoktur.",
            "AI eğitim sistemini tamamen ortadan kaldıracaktır.",
            "Uzmanlar AI'yi yasaklamayı önermektedir.",
          ],
          correct_index: 0,
          tr_explanation:
            "'What matters most... is whether educational systems can adapt quickly enough.' Eğitim → adaptasyon → sonuç. Inference.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — YDS Diyalog Tamamlama
// ============================================================
export const ydsYokdilLesson_5: BundledLesson = {
  id: "testprep.yds.dialogue.1",
  skill_id: "testprep.yds.dialogue",
  index: 5,
  title: "YDS Diyalog Tamamlama",
  description:
    "YDS dialogue completion — 4 boşluk. Bağlamı oku, doğru cevabı seç. Yapay diyaloglarda doğru tonu yakala (formal academic register).",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.yds5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Have a point",
      tr_translation: "haklı olmak / iyi bir nokta yakalamak",
      example: "You have a point, but I'm not entirely convinced.",
      example_tr: "Haklı bir nokta yakaladın ama tamamen ikna olmadım.",
    },
    {
      id: "ex.yds5.2",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Mehmet: 'I'm thinking of switching from engineering to medicine.' Aylin: '___ I mean, that's a complete career change.'",
      answer: "Are you serious?",
      distractors: [
        "That's a relief.",
        "I couldn't agree more.",
        "What a coincidence!",
        "Take it easy.",
      ],
      tr_hint:
        "Aylin'in tepkisi şaşırma ifade etmeli, çünkü ardından 'tam kariyer değişikliği' diyor. Şüphe/şaşırma = 'Are you serious?'",
    },
    {
      id: "ex.yds5.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Researcher A: 'The data suggest that the experiment failed.' Researcher B: '___ We should run it again before drawing conclusions.'",
      answer: "I wouldn't go that far.",
      distractors: [
        "I couldn't agree more.",
        "What a disappointment!",
        "It's a piece of cake.",
        "Better late than never.",
      ],
      tr_hint:
        "Yarı katılma + uyarı: 'Tam öyle değil, tekrar yapalım'. 'I wouldn't go that far' = 'O kadar da değil' demek.",
    },
    {
      id: "ex.yds5.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Student: 'I'm worried about the YDS next month.' Tutor: '___ You've prepared thoroughly and the practice scores are excellent.'",
      answer: "There's really no need to worry.",
      distractors: [
        "You should be terrified.",
        "I told you so.",
        "It's out of my hands.",
        "What a shame.",
      ],
      tr_hint:
        "Tutor güven veriyor: hazırlandın, başaracaksın. 'There's really no need to worry' = 'Endişelenmene gerçekten gerek yok'.",
    },
    {
      id: "ex.yds5.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Colleague A: 'Should we postpone the presentation?' Colleague B: '___ The deadline is tomorrow and the manager is expecting it.'",
      answer: "I'm afraid that's not an option.",
      distractors: [
        "That sounds wonderful.",
        "Let's call it a day.",
        "I couldn't care less.",
        "Take your time.",
      ],
      tr_hint:
        "Reddetme + neden: 'Deadline yarın, mümkün değil'. 'I'm afraid that's not an option' = 'Maalesef bu bir seçenek değil'.",
    },
    {
      id: "ex.yds5.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "A: 'Thank you for your help.' B: 'You are welcome it was my pleasure.'",
      correct_sentence:
        "A: 'Thank you for your help.' B: 'You're welcome. It was my pleasure.'",
      tr_explanation:
        "İki ayrı cümle: 'You're welcome.' VE 'It was my pleasure.' Birleştirmek için 'and' ya da nokta gerekli. YDS dialogue'da noktalama doğru cevabı belirler.",
    },
    {
      id: "ex.yds5.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Birisi 'Are you serious?' dediğinde temel duygu hangisidir?",
          options: ["Onaylama", "Şaşırma / şüphe", "Üzüntü", "Övgü"],
          correct_index: 1,
          tr_explanation:
            "'Are you serious?' = 'Ciddi misin?' — şaşırma + şüphe ifadesidir. YDS dialogue'da ton belirleyicidir.",
        },
        {
          question:
            "'I wouldn't go that far' ifadesinin işlevi nedir?",
          options: [
            "Tam katılım",
            "Tam ret",
            "Yarı katılım / yumuşatma",
            "Konuyu değiştirme",
          ],
          correct_index: 2,
          tr_explanation:
            "Karşı tarafın iddiasını çok aşırı bulan ama kibarca düşürmeye çalışan ifade. Kibar muhalefet.",
        },
        {
          question:
            "Kibar reddetme için en uygun kalıp hangisidir?",
          options: [
            "No way.",
            "I'm afraid that's not an option.",
            "You're wrong.",
            "Get out of here.",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm afraid' kibarlık katar. YDS dialogue'da resmî/kibar dil tercih edilir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — YDS Cümle Tamamlama
// ============================================================
export const ydsYokdilLesson_6: BundledLesson = {
  id: "testprep.yds.sentence.1",
  skill_id: "testprep.yds.sentence",
  index: 6,
  title: "YDS Cümle Tamamlama",
  description:
    "YDS sentence completion — 5 cümle. Cümlenin bir kısmı boş, anlama uygun yan cümleyi/devamı seç. Bağlaç, mantık ve dilbilgisi birlikte test edilir.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.yds6.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "owing to the fact that",
      tr_translation: "nedeniyle / olduğu için",
      example: "The project was delayed owing to the fact that funding was cut.",
      example_tr: "Proje, fonlar kesildiği için ertelendi.",
    },
    {
      id: "ex.yds6.2",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Even though most experts had predicted economic recovery by 2025, ___",
      answer: "the recession turned out to be far deeper than anticipated.",
      distractors: [
        "the recession is going to be far deeper than anticipated.",
        "the recovery will arrive ahead of schedule.",
        "experts always make accurate predictions.",
        "the economy boomed exactly as forecast.",
      ],
      tr_hint:
        "'Even though' karşıtlık bağlacı. Beklenti = recovery; gerçek = derin resesyon. Past kullan ('predicted' ile uyumlu).",
    },
    {
      id: "ex.yds6.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "___, the company was forced to reduce its workforce by nearly thirty per cent.",
      answer: "Owing to the sharp decline in international demand",
      distractors: [
        "Despite the sharp decline in international demand",
        "In order to increase profits",
        "As if there were no other options",
        "Provided that demand recovered",
      ],
      tr_hint:
        "Sonuç: işten çıkarma. Neden gerekir. 'Owing to' (= nedeniyle) doğru. 'Despite' karşıtlık olur — yanlış.",
    },
    {
      id: "ex.yds6.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "The treaty would never have been signed ___",
      answer: "had it not been for the persistent efforts of the negotiators.",
      distractors: [
        "if it were not for the efforts of the negotiators.",
        "unless the negotiators try harder next time.",
        "in case the negotiators give up.",
        "as the negotiators fail repeatedly.",
      ],
      tr_hint:
        "Third conditional + inversion: 'Had it not been for' = 'Eğer olmasaydı'. 'Would never HAVE BEEN signed' (past perfect modal) ile uyum.",
    },
    {
      id: "ex.yds6.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "The new policy will only succeed ___",
      answer: "provided that all stakeholders are fully committed to it.",
      distractors: [
        "even if stakeholders ignore it.",
        "despite the fact that stakeholders oppose it.",
        "in case stakeholders disagree.",
        "as long as it remains unimplemented.",
      ],
      tr_hint:
        "Şart: başarı = paydaş bağlılığı. 'Provided that' = 'şartıyla'. YDS klasik conditional kalıbı.",
    },
    {
      id: "ex.yds6.6",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Researchers are now investigating whether artificial intelligence ___",
      answer: "can be used to diagnose rare diseases more accurately than human doctors.",
      distractors: [
        "have been used to diagnose rare diseases.",
        "should have not used in medicine.",
        "is going to taking over hospitals.",
        "must have been replacing doctors.",
      ],
      tr_hint:
        "'Whether' = '...olup olmadığı'. Tekil özne 'AI' → 'can be used'. Diğer şıklarda dilbilgisi hataları var.",
    },
    {
      id: "ex.yds6.7",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "If I would have known, I would have helped you.",
      correct_sentence:
        "If I had known, I would have helped you.",
      tr_explanation:
        "Third conditional: 'If + past perfect, would have + V3'. 'If I WOULD HAVE' YANLIŞ — 'If I HAD' doğru. Türk öğrencinin en sevdiği hata, YDS klasiği.",
    },
    {
      id: "ex.yds6.8",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "'Had it not been for X' ifadesinin anlamı?",
          options: [
            "X gerçekleşseydi",
            "X olmasaydı",
            "X olduğu için",
            "X olur olmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Had it not been for' = 'If it had not been for' = 'Eğer X olmasaydı'. Inverted conditional.",
        },
        {
          question:
            "Third conditional yapısı hangisidir?",
          options: [
            "If + present, will + V",
            "If + past, would + V",
            "If + past perfect, would have + V3",
            "If + present, would have + V3",
          ],
          correct_index: 2,
          tr_explanation:
            "Geçmişe ait gerçekleşmemiş şart: 'If + had + V3, would have + V3'. YDS'de cümle tamamlamada en sık.",
        },
        {
          question:
            "'Provided that' bağlacı hangi anlama gelir?",
          options: [
            "Rağmen",
            "Şartıyla / olması koşuluyla",
            "Çünkü",
            "Sanki",
          ],
          correct_index: 1,
          tr_explanation:
            "'Provided that' = 'Şartıyla'. 'As long as' ile eş anlamlı. Conditional clause başlatır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — YÖKDİL Sağlık Bilim
// ============================================================
export const ydsYokdilLesson_7: BundledLesson = {
  id: "testprep.yokdil.health.1",
  skill_id: "testprep.yokdil.health",
  index: 7,
  title: "YÖKDİL Sağlık · Antibiyotik Direnci",
  description:
    "YÖKDİL Sağlık alanı reading. Antibiyotik direnci üzerine akademik pasaj. Tıp terminolojisi + reading + grammar.\n\nPASAJ:\nAntibiotic resistance, in which bacteria evolve mechanisms to withstand the drugs designed to kill them, has emerged as one of the most pressing threats to modern medicine. The phenomenon is not new; in fact, Alexander Fleming himself warned of its possibility shortly after discovering penicillin in 1928. What has changed dramatically, however, is its scale. The widespread and often inappropriate use of antibiotics — both in human medicine and in animal agriculture — has accelerated the selection of resistant strains. Patients who fail to complete prescribed courses, physicians who prescribe antibiotics for viral infections, and farmers who routinely add antibiotics to animal feed all contribute, knowingly or otherwise, to the same problem. The consequences are increasingly visible in hospitals around the world: infections that were once routinely treatable now require longer hospital stays, costlier medications, and, in some cases, lead to fatalities. The World Health Organization estimates that, in the absence of urgent action, drug-resistant infections could claim ten million lives annually by 2050 — surpassing even cancer in terms of mortality. Combating this crisis will demand not only the development of new antibiotics but also a fundamental shift in how existing ones are used.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.yokdil7.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "withstand",
      tr_translation: "dayanmak / direnmek",
      example: "Bacteria evolve mechanisms to withstand antibiotic drugs.",
      example_tr: "Bakteriler antibiyotik ilaçlarına dayanma mekanizmaları geliştirir.",
    },
    {
      id: "ex.yokdil7.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "claim lives",
      tr_translation: "can almak / hayatları yutmak",
      example: "Drug-resistant infections could claim ten million lives annually.",
      example_tr: "İlaca dirençli enfeksiyonlar yılda on milyon can alabilir.",
    },
    {
      id: "ex.yokdil7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Antibiyotiklerin yaygın ve sıklıkla uygunsuz kullanımı, dirençli suşların seçilimini hızlandırmıştır.",
      target:
        "The widespread and often inappropriate use of antibiotics has accelerated the selection of resistant strains.",
      accepted_variants: [
        "The widespread and often improper use of antibiotics has sped up the selection of resistant strains.",
        "Widespread and frequently inappropriate antibiotic use has accelerated the selection of resistant strains.",
      ],
      tr_hint:
        "'Hızlandırmıştır' = present perfect → 'has accelerated'. 'Uygunsuz' = 'inappropriate / improper'. YÖKDİL Sağlık tipik kollokasyon.",
    },
    {
      id: "ex.yokdil7.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "In the absence of urgent action, drug-resistant infections ___ ten million lives annually by 2050.",
      answer: "could claim",
      distractors: ["claimed", "have claimed", "are claiming", "would have claimed"],
      tr_hint:
        "Gelecek + ihtimal: 'could claim'. 2050 gelecekteki bir tarih → past değil. 'Would have' geçmiş hipotetik için.",
    },
    {
      id: "ex.yokdil7.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Combating this crisis will demand a fundamental shift in ___ existing antibiotics are used.",
      answer: "how",
      distractors: ["which", "that", "what", "who"],
      tr_hint:
        "'Shift in HOW X is used' = 'X'in nasıl kullanıldığındaki değişim'. Embedded question. YÖKDİL klasiği.",
    },
    {
      id: "ex.yokdil7.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Patients who don't complete the antibiotic course are contributing to the resistance.",
      correct_sentence:
        "Patients who fail to complete the antibiotic course contribute to the resistance.",
      tr_explanation:
        "'Don't complete' kabul edilebilir ama akademik register 'fail to complete' tercih eder. Ayrıca 'are contributing' yerine general truth → 'contribute' (simple present). YÖKDİL'de akademik ton önemli.",
    },
    {
      id: "ex.yokdil7.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "Pasaja göre antibiyotik direnci yeni bir olgu mudur?",
          options: [
            "Evet, 2020'lerde keşfedildi.",
            "Hayır; Fleming 1928'de penisilin keşfinden hemen sonra uyarmıştı.",
            "Hayır; sadece hayvancılığa özgüdür.",
            "Evet, sadece son 5 yılda görüldü.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'Alexander Fleming himself warned of its possibility shortly after discovering penicillin in 1928'.",
        },
        {
          question:
            "DSÖ'nün (WHO) 2050 öngörüsü nedir? (Detail)",
          options: [
            "Direnç tamamen yok olacak.",
            "Yılda 10 milyon can ilaç dirençli enfeksiyonlarla kaybedilebilir.",
            "Antibiyotikler bedava olacak.",
            "Hiçbir hastane antibiyotik kullanmayacak.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: '...could claim ten million lives annually by 2050 — surpassing even cancer.'",
        },
        {
          question:
            "Yazara göre direnç krizini çözmek için iki şey gerekir. Bunlar nedir? (Inference + Detail)",
          options: [
            "Daha çok antibiyotik üretmek + ucuzlatmak",
            "Yeni antibiyotik geliştirmek + mevcutların kullanım biçimini değiştirmek",
            "Antibiyotikleri yasaklamak + sadece bitkilerle tedavi etmek",
            "Hastaları daha uzun yatırmak + maliyeti artırmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasajın son cümlesi: 'development of new antibiotics' + 'fundamental shift in how existing ones are used'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — YÖKDİL Sosyal Bilim
// ============================================================
export const ydsYokdilLesson_8: BundledLesson = {
  id: "testprep.yokdil.social.1",
  skill_id: "testprep.yokdil.social",
  index: 8,
  title: "YÖKDİL Sosyal · Toplum & Göç",
  description:
    "YÖKDİL Sosyal Bilimler — göç ve kültürel kimlik üzerine pasaj. Yüksek frekanslı akademik kelime + grammar.\n\nPASAJ:\nMigration has shaped human history more profoundly than is often acknowledged. From the very earliest movements of our species out of Africa to the contemporary flow of refugees and economic migrants across continents, the relocation of populations has consistently transformed both the societies that people leave behind and those they enter. Sociologists distinguish between voluntary migration — undertaken in pursuit of better economic prospects or higher education — and forced migration, which is driven by war, persecution, or natural disaster. In recent decades, however, the boundary between these categories has become increasingly blurred. A worker who leaves a region devastated by drought may technically be choosing to migrate, yet the choice can scarcely be called free. The cultural consequences of migration are equally complex. While migrants often retain strong ties to their countries of origin, they almost invariably contribute new perspectives, languages, and traditions to their host societies. Critics of immigration tend to emphasise short-term economic costs, whereas advocates point to the long-term cultural and demographic vitality that newcomers bring. As global instability and climate change continue to displace millions, this debate is unlikely to lose its urgency any time soon.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.yokdil8.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "blur the boundary",
      tr_translation: "sınırı bulanıklaştırmak",
      example: "The boundary between the two categories has become blurred.",
      example_tr: "İki kategori arasındaki sınır bulanıklaşmıştır.",
    },
    {
      id: "ex.yokdil8.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "in pursuit of",
      tr_translation: "...nin peşinde / arayışında",
      example: "Voluntary migration is undertaken in pursuit of better prospects.",
      example_tr: "Gönüllü göç, daha iyi olanaklar arayışında gerçekleştirilir.",
    },
    {
      id: "ex.yokdil8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Göçmenler genellikle anavatanlarıyla güçlü bağlarını korurken, ev sahibi topluma yeni bakış açıları kazandırır.",
      target:
        "While migrants often retain strong ties to their countries of origin, they contribute new perspectives to their host societies.",
      accepted_variants: [
        "Although migrants usually keep strong ties to their homeland, they bring new perspectives to their host society.",
        "Even though migrants often maintain strong bonds with their countries of origin, they contribute fresh perspectives to host societies.",
      ],
      tr_hint:
        "'-ken' = 'while/although'. 'Anavatan' = 'country of origin / homeland'. YÖKDİL Sosyal kollokasyon.",
    },
    {
      id: "ex.yokdil8.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Migration has shaped human history more profoundly ___ is often acknowledged.",
      answer: "than",
      distractors: ["as", "that", "what", "when"],
      tr_hint:
        "'More X than Y' karşılaştırma kalıbı. 'More profoundly THAN is acknowledged' = 'kabul edilenden daha derin'. YÖKDİL'de elliptical comparison.",
    },
    {
      id: "ex.yokdil8.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Critics emphasise short-term economic costs, ___ advocates point to long-term cultural vitality.",
      answer: "whereas",
      distractors: ["because", "as if", "in case", "as long as"],
      tr_hint:
        "İki zıt görüş karşılaştırılıyor. 'Whereas' = 'oysa / iken'. 'Critics... whereas advocates...' YÖKDİL Sosyal klasiği.",
    },
    {
      id: "ex.yokdil8.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "A worker who leaves a region devastated by drought may technically be choosing to migrate, yet the choice can hardly called free.",
      correct_sentence:
        "A worker who leaves a region devastated by drought may technically be choosing to migrate, yet the choice can scarcely be called free.",
      tr_explanation:
        "Passive: 'can scarcely BE called'. 'Can hardly called' YANLIŞ — modal sonrası BE gerekli. YÖKDİL'de passive modal sık tuzak.",
    },
    {
      id: "ex.yokdil8.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "Yazara göre 'gönüllü göç' ile 'zorunlu göç' arasındaki sınır son yıllarda nasıl değişmiştir?",
          options: [
            "Daha keskin hale gelmiştir.",
            "Bulanıklaşmıştır.",
            "Tamamen ortadan kalkmıştır.",
            "Sadece ekonomik göç kalmıştır.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'the boundary between these categories has become increasingly blurred'.",
        },
        {
          question:
            "Göç karşıtları (critics) ve göç savunucuları (advocates) arasındaki temel fark nedir?",
          options: [
            "Karşıtlar kısa vadeli ekonomik maliyetleri, savunucular uzun vadeli kültürel canlılığı vurgular.",
            "Karşıtlar göçü destekler, savunucular karşıdır.",
            "İkisi de aynı şeyi söyler.",
            "Karşıtlar göçün hiç olmaması gerektiğini söyler.",
          ],
          correct_index: 0,
          tr_explanation:
            "Pasaj: 'Critics... emphasise short-term economic costs, whereas advocates point to the long-term cultural and demographic vitality'.",
        },
        {
          question:
            "Yazarın tartışmanın geleceğine ilişkin tahmini nedir? (Inference)",
          options: [
            "Tartışma yakında sona erecektir.",
            "Tartışma yakın zamanda aciliyetini yitirmeyecektir.",
            "Tartışma sadece akademik bir konudur.",
            "Tartışma hiç var olmamıştır.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'this debate is unlikely to lose its urgency any time soon'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — YÖKDİL Fen Bilim
// ============================================================
export const ydsYokdilLesson_9: BundledLesson = {
  id: "testprep.yokdil.science.1",
  skill_id: "testprep.yokdil.science",
  index: 9,
  title: "YÖKDİL Fen · Kuantum Hesaplama",
  description:
    "YÖKDİL Fen Bilimleri — kuantum hesaplama. İleri düzey akademik fen metni.\n\nPASAJ:\nQuantum computing represents one of the most ambitious endeavours in contemporary science. Unlike classical computers, which encode information as bits — each restricted to a value of either zero or one — quantum machines rely on quantum bits, or qubits, that can exist in a superposition of both states simultaneously. This counter-intuitive property, together with another quantum phenomenon known as entanglement, theoretically allows quantum processors to perform certain calculations exponentially faster than even the most powerful classical supercomputers. Tasks that would take a conventional computer thousands of years — such as factoring large prime numbers or simulating complex molecular interactions — might be completed in mere hours on a sufficiently advanced quantum system. Nevertheless, the practical realisation of quantum computing has proven extraordinarily difficult. Qubits are notoriously fragile: even minor environmental disturbances, such as fluctuations in temperature or stray electromagnetic fields, can cause them to lose their quantum properties — a phenomenon called decoherence. Researchers have therefore been investing heavily in error-correction techniques and in developing more stable qubit architectures. Although a fully fault-tolerant quantum computer remains years away, recent advances suggest that the long-anticipated quantum revolution may finally be within reach.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.yokdil9.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "exponentially faster",
      tr_translation: "üstel biçimde daha hızlı",
      example: "Quantum processors can perform tasks exponentially faster.",
      example_tr: "Kuantum işlemciler görevleri üstel biçimde daha hızlı yapabilir.",
    },
    {
      id: "ex.yokdil9.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "within reach",
      tr_translation: "ulaşılabilir / erişilebilir",
      example: "The quantum revolution may finally be within reach.",
      example_tr: "Kuantum devrimi nihayet ulaşılabilir olabilir.",
    },
    {
      id: "ex.yokdil9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Kuantum bitleri o kadar kırılgandır ki, sıcaklıktaki küçük dalgalanmalar bile kuantum özelliklerini kaybetmelerine yol açabilir.",
      target:
        "Qubits are so fragile that even minor fluctuations in temperature can cause them to lose their quantum properties.",
      accepted_variants: [
        "Qubits are so delicate that even slight temperature fluctuations may cause them to lose their quantum properties.",
        "Quantum bits are so fragile that even small changes in temperature can make them lose their quantum properties.",
      ],
      tr_hint:
        "'O kadar... ki' = 'so... that'. 'Yol açabilir' = 'can cause'. YÖKDİL Fen 'so/such... that' kalıbı.",
    },
    {
      id: "ex.yokdil9.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Tasks ___ would take a classical computer thousands of years might be completed in mere hours on a quantum system.",
      answer: "that",
      distractors: ["what", "whose", "whom", "where"],
      tr_hint:
        "'Tasks' özne, 'would take' fiili → relative pronoun 'that' (veya 'which'). 'What' relative değil. YÖKDİL standart.",
    },
    {
      id: "ex.yokdil9.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Researchers have been investing heavily ___ error-correction techniques and more stable qubit architectures.",
      answer: "in",
      distractors: ["on", "at", "for", "to"],
      tr_hint:
        "'Invest IN something' sabit kalıp. YÖKDİL Fen prepositional verb klasiği.",
    },
    {
      id: "ex.yokdil9.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Qubits can exist in a superposition of both states simultaneously, that is a counter-intuitive property.",
      correct_sentence:
        "Qubits can exist in a superposition of both states simultaneously, which is a counter-intuitive property.",
      tr_explanation:
        "Comma sonrası non-defining relative clause → 'which', 'that' DEĞİL. 'That' virgülden sonra kullanılmaz. YÖKDİL'in en sevdiği tuzak.",
    },
    {
      id: "ex.yokdil9.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "Pasaja göre 'decoherence' nedir?",
          options: [
            "Kuantum hesaplamanın bir tür hızlanması",
            "Qubit'lerin kuantum özelliklerini kaybetmesi",
            "Yeni bir programlama dili",
            "Klasik bitlerin türü",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'lose their quantum properties — a phenomenon called decoherence'.",
        },
        {
          question:
            "Pasaja göre kuantum bilgisayarların klasik bilgisayarlardan temel farkı nedir?",
          options: [
            "Daha küçük olmaları",
            "Qubit'lerin aynı anda hem 0 hem 1 durumunda olabilmesi (superposition)",
            "Daha ucuz olmaları",
            "İnsan beyni gibi düşünmeleri",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasaj: 'quantum bits, or qubits, that can exist in a superposition of both states simultaneously'.",
        },
        {
          question:
            "Yazarın kuantum hesaplamanın geleceği hakkındaki tonu nasıldır? (Inference)",
          options: [
            "Karamsar ve umutsuz",
            "Tamamen şüpheci",
            "Temkinli iyimser — zorluklar büyük ama yakın",
            "Konuyla ilgisiz",
          ],
          correct_index: 2,
          tr_explanation:
            "Pasaj: 'remains years away' (uyarı) + 'may finally be within reach' (umut). Temkinli iyimser ton.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — YKS-DİL Restatement
// ============================================================
export const ydsYokdilLesson_10: BundledLesson = {
  id: "testprep.yksdil.restatement.1",
  skill_id: "testprep.yksdil.restatement",
  index: 10,
  title: "YKS-DİL Restatement",
  description:
    "YKS-DİL restatement — verilen cümleyi anlamca koruyarak farklı bir yapıyla yeniden ifade etme. 4 paraphrase sorusu.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.yksdil10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "as soon as",
      tr_translation: "...ır ırmaz / hemen ardından",
      example: "As soon as he arrived, the meeting began.",
      example_tr: "O gelir gelmez toplantı başladı.",
    },
    {
      id: "ex.yksdil10.2",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'Despite the heavy rain, the match continued.' Restate: '___ the rain was heavy, the match continued.'",
      answer: "Although",
      distractors: ["Because", "If", "Unless", "So that"],
      tr_hint:
        "'Despite + isim' = 'Although + cümle'. Eş anlam paraphrase. YKS-DİL temel restatement kalıbı.",
    },
    {
      id: "ex.yksdil10.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'He is too tired to work.' Restate: 'He is ___ tired that he cannot work.'",
      answer: "so",
      distractors: ["very", "too", "such", "as"],
      tr_hint:
        "'Too X to V' = 'So X that S cannot V'. YKS-DİL'in altın kalıbı.",
    },
    {
      id: "ex.yksdil10.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'If you don't hurry, you'll miss the bus.' Restate: '___ you hurry, you'll miss the bus.'",
      answer: "Unless",
      distractors: ["If", "Although", "Because", "Provided"],
      tr_hint:
        "'If...not' = 'Unless'. 'Unless you hurry' = 'Hurry etmezsen'. YKS-DİL conditional paraphrase.",
    },
    {
      id: "ex.yksdil10.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'The book was so interesting that I couldn't put it down.' Restate: 'It was ___ an interesting book that I couldn't put it down.'",
      answer: "such",
      distractors: ["so", "very", "much", "too"],
      tr_hint:
        "'So + adj + that' = 'Such + a/an + adj + noun + that'. YKS-DİL klasik so/such dönüşümü.",
    },
    {
      id: "ex.yksdil10.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "It was such interesting book that I couldn't put it down.",
      correct_sentence:
        "It was such an interesting book that I couldn't put it down.",
      tr_explanation:
        "'Such + a/an + adjective + singular noun'. 'Such interesting book' tekil sayılabilir isim önünde 'an' GEREKLİ. Türk öğrencinin sık tuzağı.",
    },
    {
      id: "ex.yksdil10.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "'Too X to V' ifadesinin restate karşılığı?",
          options: [
            "So X that S can V",
            "So X that S cannot V",
            "Very X to V",
            "Such X that S V",
          ],
          correct_index: 1,
          tr_explanation:
            "'Too tired to work' = 'So tired that he cannot work'. Olumsuz anlam zorunlu.",
        },
        {
          question:
            "'If you don't hurry' ifadesinin tek kelimelik karşılığı?",
          options: ["When", "Because", "Unless", "Although"],
          correct_index: 2,
          tr_explanation:
            "'Unless' = 'If...not'. Olumlu fiil ile birlikte olumsuz koşul.",
        },
        {
          question:
            "'Such' kullanımında doğru yapı hangisidir?",
          options: [
            "such interesting book",
            "such an interesting book",
            "such a interesting",
            "such of book",
          ],
          correct_index: 1,
          tr_explanation:
            "'Such + a/an + adj + noun'. Tekil sayılabilir isim önünde a/an zorunlu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — YKS-DİL Anlamca Yakın Cümle
// ============================================================
export const ydsYokdilLesson_11: BundledLesson = {
  id: "testprep.yksdil.closest-meaning.1",
  skill_id: "testprep.yksdil.closest",
  index: 11,
  title: "YKS-DİL Anlamca Yakın Cümle",
  description:
    "YKS-DİL closest meaning — verilen cümleye en yakın anlamı taşıyan şıkkı bul. Tuzak şıklar mantıken yakın ama yanlış.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.yksdil11.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "be likely to",
      tr_translation: "...muhtemeldir",
      example: "He is likely to win the race.",
      example_tr: "Yarışı kazanması muhtemeldir.",
    },
    {
      id: "ex.yksdil11.2",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'It is probable that the storm will hit tomorrow.' Closest: 'The storm ___ hit tomorrow.'",
      answer: "is likely to",
      distractors: ["must", "should not", "would never", "cannot"],
      tr_hint:
        "'It is probable that' = 'is likely to'. YKS-DİL paraphrase klasiği.",
    },
    {
      id: "ex.yksdil11.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'She insisted on going alone.' Closest: 'She refused to ___ accompanied.'",
      answer: "be",
      distractors: ["being", "have been", "to be", "been"],
      tr_hint:
        "'Refuse to + V' (mastar). 'Be accompanied' = passive 'eşlik edilmek'. 'Refuse to be accompanied' doğru.",
    },
    {
      id: "ex.yksdil11.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'I had no choice but to accept the offer.' Closest: 'I had ___ accept the offer.'",
      answer: "to",
      distractors: ["not to", "should", "would", "must"],
      tr_hint:
        "'Had no choice but to V' = 'Had to V' = '-mek zorunda kaldım'. Zorunluluk.",
    },
    {
      id: "ex.yksdil11.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Original: 'She has been studying English for five years.' Closest: 'She started ___ English five years ago.'",
      answer: "studying",
      distractors: ["to study", "studied", "to be studying", "studies"],
      tr_hint:
        "'Start + -ing' veya 'start + to V' ikisi de doğal ama '-ing' yaygın. 'Has been' devamlılık → 'started studying five years ago' eşdeğer.",
    },
    {
      id: "ex.yksdil11.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I had no choice but to accepting the offer.",
      correct_sentence:
        "I had no choice but to accept the offer.",
      tr_explanation:
        "'But' bu kalıpta mastar gerektirir: 'but TO ACCEPT' (mastar). 'But accepting' (gerund) YANLIŞ. YKS-DİL klasik tuzak.",
    },
    {
      id: "ex.yksdil11.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "'It is probable that X' ifadesinin tek kelimelik karşılığı?",
          options: [
            "X must happen",
            "X is likely to happen",
            "X cannot happen",
            "X will never happen",
          ],
          correct_index: 1,
          tr_explanation:
            "Olasılık ifadesi: 'be likely to'. 'Must' kesinlik, 'cannot' imkânsızlık ifade eder.",
        },
        {
          question:
            "'Had no choice but to V' yapısının anlamı?",
          options: [
            "Yapmaktan kaçındı",
            "Yapmak zorunda kaldı",
            "Yapmamayı tercih etti",
            "Yapamadı",
          ],
          correct_index: 1,
          tr_explanation:
            "Zorunluluk: 'Had to V' eşdeğeri. Başka seçenek yoktu.",
        },
        {
          question:
            "'But' kelimesi 'no choice but' kalıbında hangi yapıyı alır?",
          options: ["Gerund (-ing)", "Mastar (to V)", "Past participle (V3)", "Tam cümle"],
          correct_index: 1,
          tr_explanation:
            "'Had no choice but to V' — mastar. 'But to accept' doğru, 'but accepting' yanlış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — Akıcı Yüksek Frekans Vocab (Phrasal Verbs + Collocations)
// ============================================================
export const ydsYokdilLesson_12: BundledLesson = {
  id: "testprep.yds.vocab-frequency.1",
  skill_id: "testprep.yds.vocab",
  index: 12,
  title: "Yüksek Frekans Vocab · Phrasal Verbs",
  description:
    "YDS/YÖKDİL/YKS-DİL'de en sık çıkan phrasal verb'ler ve kollokasyonlar. Bring about, carry out, account for, come up with — sınav her yıl bu kelimelerle test eder.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.yds12.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "bring about",
      tr_translation: "neden olmak / yol açmak",
      example: "The reform brought about significant changes in education.",
      example_tr: "Reform, eğitimde önemli değişikliklere yol açtı.",
    },
    {
      id: "ex.yds12.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "account for",
      tr_translation: "açıklamak / oluşturmak (yüzdesi)",
      example: "This sector accounts for nearly 30% of GDP.",
      example_tr: "Bu sektör GSYİH'nin yaklaşık %30'unu oluşturur.",
    },
    {
      id: "ex.yds12.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Araştırmacılar, salgının ekonomik etkilerini açıklamak için yeni modeller geliştirmek zorunda kaldı.",
      target:
        "Researchers had to come up with new models to account for the economic effects of the pandemic.",
      accepted_variants: [
        "Researchers had to develop new models in order to account for the pandemic's economic effects.",
        "Researchers had no choice but to come up with new models to explain the economic impact of the pandemic.",
      ],
      tr_hint:
        "'Geliştirmek zorunda kaldı' = 'had to come up with'. 'Açıklamak' = 'account for'. İki phrasal verb birden!",
    },
    {
      id: "ex.yds12.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "The committee will ___ a thorough investigation into the matter.",
      answer: "carry out",
      distractors: ["carry on", "carry off", "carry away", "carry through"],
      tr_hint:
        "'Carry out an investigation' sabit kollokasyon. 'Yürütmek / gerçekleştirmek' anlamında. YDS klasiği.",
    },
    {
      id: "ex.yds12.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Despite the difficulties, she managed to ___ the project on time.",
      answer: "carry out",
      distractors: ["carry off", "carry through", "carry on", "carry over"],
      tr_hint:
        "'Carry through' = bitirmek/sonuçlandırmak. 'Carry out' = gerçekleştirmek. İkisi de mümkün; YDS bağlama bakar — 'on time' → 'carry out' doğal.",
    },
    {
      id: "ex.yds12.6",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Renewable energy ___ for an increasing share of total electricity production.",
      answer: "accounts",
      distractors: ["takes", "makes", "explains", "stands"],
      tr_hint:
        "'Account for X%' = '...nin X% oluşturmak'. YDS'de bu kollokasyon her yıl çıkar.",
    },
    {
      id: "ex.yds12.7",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "The team came up a brilliant solution to the problem.",
      correct_sentence:
        "The team came up with a brilliant solution to the problem.",
      tr_explanation:
        "'Come up WITH something' sabit kalıp — 'with' ZORUNLU. 'Came up' tek başına farklı anlam ('yaklaştı'). YDS phrasal verb tuzağı.",
    },
    {
      id: "ex.yds12.8",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "The minister was forced to look the matter into more carefully.",
      correct_sentence:
        "The minister was forced to look into the matter more carefully.",
      tr_explanation:
        "'Look into something' = 'incelemek'. 'Into' nesnenin ÖNÜNE gelmeli, ARASINA değil. 'Look the matter into' YANLIŞ. Inseparable phrasal verb.",
    },
    {
      id: "ex.yds12.9",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "'Bring about' phrasal verb'ünün anlamı?",
          options: [
            "Geri getirmek",
            "Neden olmak / yol açmak",
            "Yaklaşmak",
            "Götürmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bring about change' = değişime yol açmak. Sık YDS phrasal verb.",
        },
        {
          question:
            "'Account for' ifadesinin iki anlamı vardır. Bunlar nelerdir?",
          options: [
            "Bilgilendirmek / üretmek",
            "Açıklamak / (yüzdesini) oluşturmak",
            "Önermek / değiştirmek",
            "Toplamak / harcamak",
          ],
          correct_index: 1,
          tr_explanation:
            "1) 'Account for the difference' = farkı açıklamak. 2) 'Account for 30% of X' = X'in %30'unu oluşturmak.",
        },
        {
          question:
            "'Come up with' ifadesinin doğru kullanımı?",
          options: [
            "He came up the solution.",
            "He came up with the solution.",
            "He came up with for the solution.",
            "He came at the solution.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Come up with' = bulmak/üretmek (fikir, çözüm). 'With' zorunlu. YDS klasiği.",
        },
        {
          question:
            "'Look into' phrasal verb'ünün anlamı?",
          options: [
            "İçeriden bakmak (fiziksel)",
            "İncelemek / soruşturmak",
            "Görmezden gelmek",
            "Kaçırmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Look into the matter' = konuyu incelemek/soruşturmak. Inseparable — nesne ARASINA giremez.",
        },
        {
          question:
            "'Carry out an experiment' kollokasyonunun anlamı?",
          options: [
            "Deneyi taşımak",
            "Deneyi yapmak / gerçekleştirmek",
            "Deneyi durdurmak",
            "Deneyi unutmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Carry out + research/experiment/investigation' = yapmak/yürütmek. YDS'nin altın kollokasyonu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const testYdsYokdilLessons: BundledLesson[] = [
  ydsYokdilLesson_1,
  ydsYokdilLesson_2,
  ydsYokdilLesson_3,
  ydsYokdilLesson_4,
  ydsYokdilLesson_5,
  ydsYokdilLesson_6,
  ydsYokdilLesson_7,
  ydsYokdilLesson_8,
  ydsYokdilLesson_9,
  ydsYokdilLesson_10,
  ydsYokdilLesson_11,
  ydsYokdilLesson_12,
];
