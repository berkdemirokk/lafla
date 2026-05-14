// Reading mode — CEFR-graded short articles with tap-to-translate vocab + comprehension questions.
// Inlined for mobile bundle. In production this will come from the backend API.

export interface ReadingHighlight {
  word_or_phrase: string; // appears verbatim in article text
  translation_tr: string;
  note_tr?: string; // brief context note
}

export interface ReadingQuestion {
  question_tr: string;
  options: string[]; // 4 options in English
  correct_index: number;
  type: "factual" | "inference" | "vocabulary" | "gist";
  tr_explanation: string;
}

export interface ReadingArticle {
  id: string; // e.g. "read.science.a2.1"
  title_en: string;
  title_tr: string;
  emoji: string;
  category:
    | "news"
    | "science"
    | "culture"
    | "tech"
    | "history"
    | "psychology"
    | "business";
  cefrLevel: "A1" | "A2" | "B1" | "B2" | "C1";
  word_count: number; // actual count
  estimated_minutes: number;
  body: string; // 150-500 words English text — actual article content
  highlights: ReadingHighlight[]; // 5-15 vocab items in the text
  questions: ReadingQuestion[]; // 4-6 Q's
}

// ============================================================
// A1 — 3 articles, 80-120 words each
// ============================================================

const article_a1_1: ReadingArticle = {
  id: "read.culture.a1.1",
  title_en: "A Day in Istanbul",
  title_tr: "İstanbul'da Bir Gün",
  emoji: "🌉",
  category: "culture",
  cefrLevel: "A1",
  word_count: 98,
  estimated_minutes: 2,
  body: "My name is Ali. I live in Istanbul. Every morning, I wake up at seven o'clock. I drink a glass of tea and eat some bread with cheese. Then I walk to the bus stop. The bus is often crowded. I work in an office near the sea. At lunch, I eat a simple sandwich. After work, I sometimes meet my friends at a small café. We talk and laugh for hours. In the evening, I go home. I read a book before sleep. Life in Istanbul is busy, but I love this city very much.",
  highlights: [
    { word_or_phrase: "wake up", translation_tr: "uyanmak" },
    { word_or_phrase: "bus stop", translation_tr: "otobüs durağı" },
    {
      word_or_phrase: "crowded",
      translation_tr: "kalabalık",
      note_tr: "İnsan dolu yer için kullanılır.",
    },
    { word_or_phrase: "office", translation_tr: "ofis, iş yeri" },
    { word_or_phrase: "near the sea", translation_tr: "denize yakın" },
    { word_or_phrase: "for hours", translation_tr: "saatlerce" },
    { word_or_phrase: "busy", translation_tr: "yoğun, meşgul" },
  ],
  questions: [
    {
      question_tr: "Ali sabah saat kaçta kalkıyor?",
      options: ["At six o'clock", "At seven o'clock", "At eight o'clock", "At nine o'clock"],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Metinde 'I wake up at seven o'clock' diyor.",
    },
    {
      question_tr: "Ali işe nasıl gidiyor?",
      options: ["By car", "By taxi", "By bus", "On foot"],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'I walk to the bus stop' — otobüse biner.",
    },
    {
      question_tr: "'Crowded' ne demek?",
      options: ["Sessiz", "Kalabalık", "Boş", "Temiz"],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "'Crowded' = kalabalık. Otobüsün durumu için kullanılmış.",
    },
    {
      question_tr: "Ali şehir hakkında ne hissediyor?",
      options: ["He hates it", "He loves it", "He doesn't care", "He wants to leave"],
      correct_index: 1,
      type: "inference",
      tr_explanation: "'I love this city very much' — açıkça seviyor.",
    },
  ],
};

const article_a1_2: ReadingArticle = {
  id: "read.culture.a1.2",
  title_en: "Cats Are the Best Pets",
  title_tr: "Kediler En İyi Evcil Hayvanlar",
  emoji: "🐈",
  category: "culture",
  cefrLevel: "A1",
  word_count: 102,
  estimated_minutes: 2,
  body: "Cats are wonderful pets. First, they are clean animals. They wash themselves every day. You don't need to give them a bath. Second, cats are quiet. They don't bark like dogs. Your neighbors will be happy. Third, cats are independent. You can leave them at home for a day. They are fine alone. They sleep a lot. Also, cats are funny. They play with simple things, like a box or a paper ball. They make us laugh. In Turkey, many people love cats. Istanbul has thousands of street cats. People feed them and take care of them. Cats really are the best pets.",
  highlights: [
    { word_or_phrase: "pets", translation_tr: "evcil hayvanlar" },
    { word_or_phrase: "wash themselves", translation_tr: "kendilerini yıkarlar" },
    { word_or_phrase: "bark", translation_tr: "havlamak", note_tr: "Köpeklerin sesi." },
    {
      word_or_phrase: "independent",
      translation_tr: "bağımsız",
      note_tr: "Yalnız başına yapabilir.",
    },
    { word_or_phrase: "feed", translation_tr: "yedirmek, beslemek" },
    { word_or_phrase: "take care of", translation_tr: "bakmak, ilgilenmek" },
    { word_or_phrase: "thousands of", translation_tr: "binlerce" },
  ],
  questions: [
    {
      question_tr: "Yazara göre kediler neden sessiz?",
      options: [
        "They sleep all day",
        "They don't bark like dogs",
        "They live alone",
        "They eat quietly",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'They don't bark like dogs' — havlamadıkları için sessizler.",
    },
    {
      question_tr: "'Independent' ne demek?",
      options: ["Bağımlı", "Zayıf", "Bağımsız", "Hasta"],
      correct_index: 2,
      type: "vocabulary",
      tr_explanation: "'Independent' = bağımsız. Kedi tek başına idare edebilir.",
    },
    {
      question_tr: "Metnin ana fikri nedir?",
      options: [
        "Cats are dangerous animals",
        "Cats and dogs are the same",
        "Cats are great pets",
        "Cats live only in Turkey",
      ],
      correct_index: 2,
      type: "gist",
      tr_explanation: "Tüm metin kedilerin neden iyi evcil hayvan olduğunu anlatıyor.",
    },
    {
      question_tr: "İstanbul'daki sokak kedileri için ne yapılıyor?",
      options: [
        "People ignore them",
        "People feed them",
        "People sell them",
        "People take them home",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'People feed them and take care of them' — besliyorlar.",
    },
  ],
};

const article_a1_3: ReadingArticle = {
  id: "read.culture.a1.3",
  title_en: "How to Make Turkish Coffee",
  title_tr: "Türk Kahvesi Nasıl Yapılır",
  emoji: "☕",
  category: "culture",
  cefrLevel: "A1",
  word_count: 108,
  estimated_minutes: 2,
  body: "Turkish coffee is famous around the world. It is easy to make at home. First, take a small pot. It is called a cezve. Add one cup of cold water. Then add two teaspoons of coffee. Add sugar if you want. Mix everything well. Put the pot on low heat. Do not stir again. Wait slowly. The coffee will start to foam on top. This foam is important. When you see the foam, take some and put it in your cup. Then put the pot back on the heat. Wait a little more. Finally, pour the coffee into the cup. Drink it slowly with a glass of water.",
  highlights: [
    {
      word_or_phrase: "pot",
      translation_tr: "küçük tencere",
      note_tr: "Burada 'cezve' anlamında.",
    },
    { word_or_phrase: "teaspoons", translation_tr: "çay kaşıkları" },
    { word_or_phrase: "stir", translation_tr: "karıştırmak" },
    { word_or_phrase: "low heat", translation_tr: "kısık ateş" },
    {
      word_or_phrase: "foam",
      translation_tr: "köpük",
      note_tr: "Türk kahvesinin önemli parçası.",
    },
    { word_or_phrase: "pour", translation_tr: "dökmek" },
  ],
  questions: [
    {
      question_tr: "Türk kahvesi yapımında ilk adım nedir?",
      options: [
        "Add sugar",
        "Take a small pot",
        "Stir the coffee",
        "Pour into a cup",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'First, take a small pot' — ilk adım cezveyi almak.",
    },
    {
      question_tr: "Pişirme sırasında ne yapmamak gerekir?",
      options: ["Wait", "Watch", "Stir again", "Add water"],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Do not stir again' — tekrar karıştırılmaz.",
    },
    {
      question_tr: "'Foam' ne demek?",
      options: ["Buz", "Köpük", "Şeker", "Süt"],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "'Foam' = köpük. Türk kahvesinin üstündeki katman.",
    },
    {
      question_tr: "Kahve neyle birlikte içilir?",
      options: [
        "With milk",
        "With sugar cubes",
        "With a glass of water",
        "With tea",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Drink it slowly with a glass of water' — yanında su olur.",
    },
  ],
};

// ============================================================
// A2 — 4 articles, 120-180 words each
// ============================================================

const article_a2_1: ReadingArticle = {
  id: "read.psychology.a2.1",
  title_en: "Why Reading Matters",
  title_tr: "Okumak Neden Önemli",
  emoji: "📚",
  category: "psychology",
  cefrLevel: "A2",
  word_count: 152,
  estimated_minutes: 3,
  body: "Many people today watch videos instead of reading books. Videos are quick and fun, but reading has special benefits. First, reading helps your brain grow. When you read, your mind creates pictures. You imagine the people, places, and feelings. This is good exercise for the brain. Second, reading improves your vocabulary. You learn new words in real context, not from boring lists. Over months, your language becomes richer. Third, reading helps you understand other people. A good book shows the world through different eyes. You feel what the character feels. This makes you more patient and kind in real life. Finally, reading reduces stress. Just six minutes of reading can calm your mind. It works better than music or a walk. You don't need to read difficult books. Start with something simple and short. Read for ten minutes every day. After one month, you will see the difference.",
  highlights: [
    { word_or_phrase: "instead of", translation_tr: "yerine" },
    { word_or_phrase: "benefits", translation_tr: "faydalar, yararlar" },
    {
      word_or_phrase: "vocabulary",
      translation_tr: "kelime hazinesi",
      note_tr: "Bildiğin kelimelerin toplamı.",
    },
    { word_or_phrase: "in real context", translation_tr: "gerçek bağlamda" },
    { word_or_phrase: "character", translation_tr: "karakter, kişi" },
    { word_or_phrase: "patient", translation_tr: "sabırlı" },
    { word_or_phrase: "reduces stress", translation_tr: "stresi azaltır" },
    { word_or_phrase: "calm", translation_tr: "sakin", note_tr: "Sakinleştirmek anlamında." },
  ],
  questions: [
    {
      question_tr: "Yazara göre okumanın ilk faydası nedir?",
      options: [
        "It saves money",
        "It helps the brain grow",
        "It makes you popular",
        "It improves your eyes",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'First, reading helps your brain grow' — açıkça yazıyor.",
    },
    {
      question_tr: "Okuma kelime hazinesini nasıl geliştirir?",
      options: [
        "Through boring lists",
        "Through translation apps",
        "In real context",
        "Through tests",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'You learn new words in real context, not from boring lists'.",
    },
    {
      question_tr: "'Patient' kelimesi bu metinde ne anlama gelir?",
      options: ["Hasta", "Sabırlı", "Yorgun", "Mutlu"],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "'More patient and kind' — burada sabırlı anlamında.",
    },
    {
      question_tr: "Metnin ana mesajı nedir?",
      options: [
        "Videos are better than books",
        "Reading has many benefits",
        "Books cost too much",
        "Only long books are good",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "Tüm metin okumanın faydalarını listeliyor.",
    },
    {
      question_tr: "Yazar günde ne kadar okumayı öneriyor?",
      options: ["One hour", "Thirty minutes", "Ten minutes", "Two hours"],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Read for ten minutes every day' — 10 dakika.",
    },
  ],
};

const article_a2_2: ReadingArticle = {
  id: "read.history.a2.1",
  title_en: "The Story of Pizza",
  title_tr: "Pizzanın Hikayesi",
  emoji: "🍕",
  category: "history",
  cefrLevel: "A2",
  word_count: 165,
  estimated_minutes: 3,
  body: "Pizza is one of the most popular foods in the world. But where did it come from? The story begins in Naples, a city in southern Italy. In the 1700s, Naples was a poor city. Many workers needed cheap, fast food. They wanted to eat with their hands while working. A simple flat bread with tomatoes, oil, and cheese was perfect. Tomatoes were new in Europe at that time. Many people thought tomatoes were dangerous. The poor people of Naples were brave enough to try them. They were delicious! In 1889, an Italian queen visited Naples. A famous pizza maker created a special pizza for her. It had tomato, white cheese, and green basil — the colors of the Italian flag. The queen loved it. This pizza is now called Margherita. After World War Two, Italian people moved to America. They brought pizza with them. Today, pizza is everywhere. But the best pizza is still from Naples.",
  highlights: [
    { word_or_phrase: "popular", translation_tr: "popüler, sevilen" },
    {
      word_or_phrase: "Naples",
      translation_tr: "Napoli",
      note_tr: "Güney İtalya'da şehir.",
    },
    { word_or_phrase: "cheap", translation_tr: "ucuz" },
    { word_or_phrase: "flat bread", translation_tr: "düz ekmek" },
    { word_or_phrase: "dangerous", translation_tr: "tehlikeli" },
    {
      word_or_phrase: "brave",
      translation_tr: "cesur",
      note_tr: "Korkmayan, riski göze alan.",
    },
    { word_or_phrase: "queen", translation_tr: "kraliçe" },
    { word_or_phrase: "basil", translation_tr: "fesleğen" },
    { word_or_phrase: "flag", translation_tr: "bayrak" },
  ],
  questions: [
    {
      question_tr: "Pizza ilk olarak nerede ortaya çıktı?",
      options: ["Rome", "Naples", "Milan", "Sicily"],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'The story begins in Naples' — Napoli'de doğdu.",
    },
    {
      question_tr: "1700'lerde insanlar domatesleri neden yemekten korkuyordu?",
      options: [
        "They were too expensive",
        "They thought tomatoes were dangerous",
        "They didn't like the color",
        "They didn't grow in Italy",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Many people thought tomatoes were dangerous'.",
    },
    {
      question_tr: "'Brave' ne anlama gelir?",
      options: ["Aç", "Cesur", "Yorgun", "Yaşlı"],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "'Brave enough to try them' — korkmadan denediler.",
    },
    {
      question_tr: "Margherita pizza neden bu adı taşıyor?",
      options: [
        "It was made for an Italian queen",
        "Margherita means cheese",
        "It was invented by Margherita",
        "Margherita is a city",
      ],
      correct_index: 0,
      type: "inference",
      tr_explanation: "Kraliçe için yapılmış, onun adıyla anılıyor.",
    },
    {
      question_tr: "Pizza Amerika'ya nasıl gitti?",
      options: [
        "Through trade ships",
        "Through Italian immigrants after WW2",
        "Through tourists",
        "Through American soldiers",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Italian people moved to America. They brought pizza with them.'",
    },
  ],
};

const article_a2_3: ReadingArticle = {
  id: "read.business.a2.1",
  title_en: "Working from Home: Pros and Cons",
  title_tr: "Evden Çalışmak: Artılar ve Eksiler",
  emoji: "💻",
  category: "business",
  cefrLevel: "A2",
  word_count: 170,
  estimated_minutes: 3,
  body: "Many people now work from home. This change started during the pandemic, but it continues today. Working from home has good sides and bad sides. The good sides are clear. You save time because there is no commute. You don't sit in traffic for two hours every day. You can wake up later. You can wear comfortable clothes. You save money on lunch and transport. You can also see your family more. For parents with small children, this is a big help. But there are also problems. Some people feel lonely at home. They miss their colleagues. The office has energy that the home does not. Also, some people cannot focus at home. The TV, the kitchen, and the bed are too close. It is easy to lose discipline. Another problem is that work and life mix together. You answer emails at ten at night. You never really stop working. The best answer for many people is a mix: some days at home, some days at the office.",
  highlights: [
    { word_or_phrase: "pandemic", translation_tr: "salgın hastalık" },
    {
      word_or_phrase: "commute",
      translation_tr: "iş-ev yolculuğu",
      note_tr: "Günlük gidiş geliş.",
    },
    { word_or_phrase: "comfortable", translation_tr: "rahat" },
    { word_or_phrase: "transport", translation_tr: "ulaşım" },
    {
      word_or_phrase: "lonely",
      translation_tr: "yalnız",
      note_tr: "Yalnız hissetmek.",
    },
    {
      word_or_phrase: "colleagues",
      translation_tr: "iş arkadaşları",
    },
    { word_or_phrase: "focus", translation_tr: "odaklanmak" },
    {
      word_or_phrase: "discipline",
      translation_tr: "disiplin",
      note_tr: "Düzenli çalışma alışkanlığı.",
    },
    { word_or_phrase: "mix together", translation_tr: "iç içe geçmek" },
  ],
  questions: [
    {
      question_tr: "Evden çalışmanın yazara göre en açık faydalardan biri nedir?",
      options: [
        "Better salary",
        "No commute",
        "More meetings",
        "Faster internet",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'You save time because there is no commute' — yol yok.",
    },
    {
      question_tr: "Bazı insanlar evden çalışırken neden zorlanır?",
      options: [
        "Computers are too slow",
        "They miss colleagues and cannot focus",
        "Their family doesn't like it",
        "They cannot wake up early",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Some people feel lonely... cannot focus at home'.",
    },
    {
      question_tr: "'Commute' ne demek?",
      options: ["Komşu", "İş-ev yolculuğu", "Maaş", "Toplantı"],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "'Commute' = günlük gidiş-geliş yolculuğu.",
    },
    {
      question_tr: "Yazar çoğu insan için en iyi çözüm olarak ne öneriyor?",
      options: [
        "Always work from home",
        "Always work at the office",
        "A mix of home and office",
        "Stop working completely",
      ],
      correct_index: 2,
      type: "gist",
      tr_explanation: "'The best answer... is a mix' — karma model.",
    },
    {
      question_tr: "İş-yaşam dengesi hakkında ne söyleniyor?",
      options: [
        "It is easier at home",
        "Work and life can mix together",
        "Companies fix this problem",
        "Only parents have this issue",
      ],
      correct_index: 1,
      type: "inference",
      tr_explanation: "'Work and life mix together' — sınır kayboluyor.",
    },
  ],
};

const article_a2_4: ReadingArticle = {
  id: "read.culture.a2.1",
  title_en: "Bosphorus: A Bridge Between Continents",
  title_tr: "Boğaz: İki Kıta Arasında Bir Köprü",
  emoji: "🌊",
  category: "culture",
  cefrLevel: "A2",
  word_count: 178,
  estimated_minutes: 3,
  body: "Istanbul is special for one big reason: the Bosphorus. The Bosphorus is a narrow sea between two continents, Europe and Asia. It is only about 700 meters wide in some places. This is why Istanbul is the only city in the world on two continents. People have lived around the Bosphorus for thousands of years. It was important for ancient ships. Today, hundreds of ships pass through every day. Some go to Russia, others to the Mediterranean. The water is busy day and night. The Bosphorus also has three big bridges. The first bridge opened in 1973. Before this, people crossed by ferry. Many people still prefer the ferry today. It is slower, but you can see the city from the water. You can drink tea and watch seagulls. Locals say that the Bosphorus has a special light in summer evenings. The sky turns pink and orange. Old wooden houses, called yalı, sit by the water. Tourists take many photos. For Istanbul, the Bosphorus is not just water. It is the heart of the city.",
  highlights: [
    {
      word_or_phrase: "narrow",
      translation_tr: "dar",
      note_tr: "İki kenar yakın olan.",
    },
    {
      word_or_phrase: "continents",
      translation_tr: "kıtalar",
    },
    { word_or_phrase: "ancient", translation_tr: "antik, çok eski" },
    { word_or_phrase: "pass through", translation_tr: "geçmek, geçip gitmek" },
    {
      word_or_phrase: "ferry",
      translation_tr: "vapur, feribot",
    },
    { word_or_phrase: "prefer", translation_tr: "tercih etmek" },
    {
      word_or_phrase: "seagulls",
      translation_tr: "martılar",
    },
    {
      word_or_phrase: "yalı",
      translation_tr: "yalı",
      note_tr: "Deniz kenarındaki eski ahşap ev.",
    },
    {
      word_or_phrase: "the heart of",
      translation_tr: "kalbi, merkezi",
      note_tr: "Mecaz: en önemli parça.",
    },
  ],
  questions: [
    {
      question_tr: "İstanbul'u dünyada özel yapan ne?",
      options: [
        "It is the biggest city",
        "It is on two continents",
        "It has many bridges",
        "It is the oldest city",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Istanbul is the only city in the world on two continents'.",
    },
    {
      question_tr: "İlk Boğaz köprüsü ne zaman açıldı?",
      options: ["1953", "1973", "1983", "1993"],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'The first bridge opened in 1973'.",
    },
    {
      question_tr: "Neden bazı insanlar hâlâ vapuru tercih ediyor?",
      options: [
        "It is cheaper than the bridge",
        "It is the fastest option",
        "You can see the city from the water",
        "There are no other options",
      ],
      correct_index: 2,
      type: "inference",
      tr_explanation: "'You can see the city from the water' — manzara için.",
    },
    {
      question_tr: "'The heart of the city' ifadesi ne anlama gelir?",
      options: [
        "It is in the middle",
        "It is the most important part",
        "It has many hospitals",
        "It is romantic",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Mecaz olarak en önemli, hayati merkez anlamında.",
    },
    {
      question_tr: "Metnin ana fikri nedir?",
      options: [
        "Bridges are better than ferries",
        "The Bosphorus is central to Istanbul's identity",
        "Tourists love Istanbul",
        "Old houses are disappearing",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "Tüm metin Boğaz'ın şehir için önemini anlatıyor.",
    },
  ],
};

// ============================================================
// B1 — 5 articles, 180-250 words each
// ============================================================

const article_b1_1: ReadingArticle = {
  id: "read.tech.b1.1",
  title_en: "AI is Changing the Workplace",
  title_tr: "Yapay Zeka İş Yerini Değiştiriyor",
  emoji: "🤖",
  category: "tech",
  cefrLevel: "B1",
  word_count: 218,
  estimated_minutes: 4,
  body: "Artificial intelligence, or AI, is no longer science fiction. It is already in our offices, changing how we work every day. Two years ago, AI mostly helped with simple tasks like spell-checking. Now, it can write reports, analyze data, design presentations, and even write code. For many workers, this is exciting. A task that used to take three hours might now take twenty minutes. People can focus on the parts of their job they actually enjoy — creative thinking, building relationships, solving difficult problems. However, there is also fear in the air. Some jobs will disappear, especially routine ones in customer service, data entry, and basic writing. Companies are already cutting positions, saying AI can do the same work faster and cheaper. Experts disagree about the future. Some say AI will create new jobs we cannot yet imagine, just like the internet did. Others worry that this time is different — that machines can now do thinking work, not just physical work. What is clear is that workers must adapt. The most valuable skill in the next decade will not be technical knowledge, which AI provides freely. It will be judgment: knowing when to trust AI, when to question it, and how to use it well. Workers who treat AI as a tool, not a threat, will thrive.",
  highlights: [
    {
      word_or_phrase: "artificial intelligence",
      translation_tr: "yapay zeka",
    },
    {
      word_or_phrase: "science fiction",
      translation_tr: "bilim kurgu",
    },
    {
      word_or_phrase: "analyze data",
      translation_tr: "veri analiz etmek",
    },
    {
      word_or_phrase: "routine",
      translation_tr: "rutin, sıradan",
      note_tr: "Sürekli aynı şekilde tekrar eden.",
    },
    {
      word_or_phrase: "data entry",
      translation_tr: "veri girişi",
    },
    {
      word_or_phrase: "cutting positions",
      translation_tr: "pozisyon kapatmak",
      note_tr: "İşten çıkarmak anlamında.",
    },
    {
      word_or_phrase: "adapt",
      translation_tr: "uyum sağlamak",
    },
    {
      word_or_phrase: "judgment",
      translation_tr: "muhakeme, karar verme yetisi",
    },
    {
      word_or_phrase: "thrive",
      translation_tr: "başarılı olmak, gelişmek",
    },
  ],
  questions: [
    {
      question_tr: "Yazara göre AI iki yıl öncesine göre nasıl değişti?",
      options: [
        "It became cheaper",
        "It only helps with spell-checking now",
        "It can now do complex tasks like writing reports and code",
        "It replaced all office workers",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Two years ago, AI mostly helped with simple tasks... Now, it can write reports, analyze data, design presentations, and even write code'.",
    },
    {
      question_tr: "Yazara göre önümüzdeki on yılın en değerli becerisi ne olacak?",
      options: [
        "Technical coding knowledge",
        "Speaking many languages",
        "Judgment — knowing when to trust AI",
        "Physical strength",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'The most valuable skill in the next decade... will be judgment'.",
    },
    {
      question_tr: "'Thrive' bu bağlamda ne anlama gelir?",
      options: ["Başarısız olmak", "Saklanmak", "Başarılı olmak", "Kaybolmak"],
      correct_index: 2,
      type: "vocabulary",
      tr_explanation: "'Thrive' = başarılı olmak, gelişmek.",
    },
    {
      question_tr: "Yazarın AI hakkındaki genel tutumu nedir?",
      options: [
        "Completely negative — AI is dangerous",
        "Balanced — both opportunities and challenges",
        "Pure excitement — no problems",
        "Indifferent — doesn't matter",
      ],
      correct_index: 1,
      type: "inference",
      tr_explanation: "Hem heyecan hem de korku tarafını anlatıyor — dengeli bakış.",
    },
    {
      question_tr: "Uzmanlar AI'ın geleceği konusunda anlaşıyorlar mı?",
      options: [
        "Yes, they all agree it will create new jobs",
        "Yes, they all agree it will destroy jobs",
        "No, they disagree about the future",
        "Experts haven't studied this",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Experts disagree about the future' — net olarak anlaşmazlar.",
    },
  ],
};

const article_b1_2: ReadingArticle = {
  id: "read.psychology.b1.1",
  title_en: "The Psychology of Habits",
  title_tr: "Alışkanlıkların Psikolojisi",
  emoji: "🧠",
  category: "psychology",
  cefrLevel: "B1",
  word_count: 232,
  estimated_minutes: 4,
  body: "Why is it so hard to start a new habit, and so easy to fall back into an old one? The answer lies in how our brains are built. Habits are simply the brain's way of saving energy. When you repeat an action many times, your brain stops thinking about it and runs it on automatic. This is useful: imagine if you had to consciously decide every step of brushing your teeth. The problem is that bad habits are saved the same way. Scientists describe habits using a three-part loop: a cue, a routine, and a reward. The cue is the trigger — maybe you feel tired, or it's three in the afternoon. The routine is the action — you reach for a chocolate bar. The reward is the good feeling that follows. Over time, your brain connects these three so tightly that the cue alone makes you crave the routine. The good news is that you can use this same loop to build better habits. Choose a clear cue, like a morning alarm. Pick a small, easy routine, like ten minutes of stretching. Give yourself a real reward afterward — a good coffee, music, or just a sense of pride. Repeat this for sixty days. Do not aim for perfection. Aim for consistency. Most habits become semi-automatic in about two months.",
  highlights: [
    {
      word_or_phrase: "lies in",
      translation_tr: "...da yatar, ...dan kaynaklanır",
    },
    {
      word_or_phrase: "saving energy",
      translation_tr: "enerji tasarrufu yapmak",
    },
    {
      word_or_phrase: "consciously",
      translation_tr: "bilinçli olarak",
    },
    {
      word_or_phrase: "loop",
      translation_tr: "döngü",
      note_tr: "Tekrar eden süreç.",
    },
    {
      word_or_phrase: "cue",
      translation_tr: "ipucu, tetikleyici",
    },
    {
      word_or_phrase: "trigger",
      translation_tr: "tetikleyici",
    },
    {
      word_or_phrase: "crave",
      translation_tr: "çok istemek, canı çekmek",
    },
    {
      word_or_phrase: "consistency",
      translation_tr: "tutarlılık, süreklilik",
    },
    {
      word_or_phrase: "semi-automatic",
      translation_tr: "yarı otomatik",
    },
  ],
  questions: [
    {
      question_tr: "Beyin neden alışkanlık oluşturur?",
      options: [
        "To make us happier",
        "To save energy",
        "To slow our thinking",
        "To impress others",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Habits are simply the brain's way of saving energy'.",
    },
    {
      question_tr: "Alışkanlık döngüsünün üç parçası nedir?",
      options: [
        "Plan, action, result",
        "Cue, routine, reward",
        "Want, try, fail",
        "Start, stop, repeat",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'A three-part loop: a cue, a routine, and a reward'.",
    },
    {
      question_tr: "'Crave' ne anlama gelir?",
      options: ["Reddetmek", "Çok istemek", "Görmezden gelmek", "Unutmak"],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "'Crave' = canı çekmek, şiddetle istemek.",
    },
    {
      question_tr: "Yazara göre yeni alışkanlık oluştururken neyi hedeflemeliyiz?",
      options: [
        "Perfection every day",
        "The fastest results possible",
        "Consistency over time",
        "Help from other people",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Do not aim for perfection. Aim for consistency'.",
    },
    {
      question_tr: "Bir alışkanlık genellikle ne kadar sürede yarı-otomatik olur?",
      options: ["About one week", "About thirty days", "About two months", "About one year"],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Most habits become semi-automatic in about two months'.",
    },
  ],
};

const article_b1_3: ReadingArticle = {
  id: "read.science.b1.1",
  title_en: "Climate Change in Turkey: What's Changing",
  title_tr: "Türkiye'de İklim Değişikliği: Ne Değişiyor",
  emoji: "🌡️",
  category: "science",
  cefrLevel: "B1",
  word_count: 241,
  estimated_minutes: 4,
  body: "Turkey is feeling the effects of climate change earlier and harder than many other countries. The average temperature has risen by about 1.5 degrees Celsius over the past fifty years. That number sounds small, but the consequences are not. Summers are longer and hotter. In some southern cities, temperatures now regularly pass 45 degrees in July and August. This is dangerous, especially for elderly people and outdoor workers. Heatwaves used to last a few days. Now they can last weeks. Water is becoming a serious problem. Lakes are shrinking, including Lake Tuz, which has lost a huge part of its surface area. Farmers in central Anatolia face droughts that destroy entire harvests. The cost of basic foods like wheat and tomatoes has risen partly because of this. Forest fires are another visible change. The summers of 2021 and 2023 brought some of the worst fires in Turkish history, burning hundreds of thousands of hectares in the Mediterranean region. Hotter, drier conditions make fires spread faster and burn longer. There are also winners and losers in agriculture. Some crops, like olives and certain grapes, may actually benefit from warmer weather in some regions. But traditional crops in many areas will become harder to grow. The government has started planning for these changes, but experts say action must speed up. Turkey's future climate depends partly on global decisions, but also on what the country does at home.",
  highlights: [
    {
      word_or_phrase: "consequences",
      translation_tr: "sonuçlar",
    },
    {
      word_or_phrase: "elderly",
      translation_tr: "yaşlı",
    },
    {
      word_or_phrase: "heatwaves",
      translation_tr: "sıcak dalgaları",
    },
    {
      word_or_phrase: "shrinking",
      translation_tr: "küçülmek, çekilmek",
    },
    {
      word_or_phrase: "droughts",
      translation_tr: "kuraklıklar",
    },
    {
      word_or_phrase: "harvests",
      translation_tr: "hasatlar",
    },
    {
      word_or_phrase: "hectares",
      translation_tr: "hektarlar",
      note_tr: "Bir hektar = 10.000 m².",
    },
    {
      word_or_phrase: "spread",
      translation_tr: "yayılmak",
    },
    {
      word_or_phrase: "speed up",
      translation_tr: "hızlanmak, hızlandırmak",
    },
  ],
  questions: [
    {
      question_tr: "Türkiye'de ortalama sıcaklık son 50 yılda ne kadar arttı?",
      options: [
        "About 0.5 degrees Celsius",
        "About 1.5 degrees Celsius",
        "About 3 degrees Celsius",
        "About 5 degrees Celsius",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'The average temperature has risen by about 1.5 degrees Celsius'.",
    },
    {
      question_tr: "Tuz Gölü hakkında ne öğreniyoruz?",
      options: [
        "It is growing rapidly",
        "It has lost a huge part of its surface",
        "It became salty for the first time",
        "It is the largest lake in Europe",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Lake Tuz, which has lost a huge part of its surface area'.",
    },
    {
      question_tr: "'Droughts' ne demek?",
      options: ["Seller", "Kuraklıklar", "Fırtınalar", "Hasatlar"],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "'Droughts' = kuraklıklar, su kıtlığı dönemleri.",
    },
    {
      question_tr: "İklim değişikliğinden bazı tarım ürünleri için ne tür bir etki yaratıyor?",
      options: [
        "All crops suffer equally",
        "Only animals are affected",
        "Some crops, like olives, may benefit",
        "Farming becomes impossible",
      ],
      correct_index: 2,
      type: "inference",
      tr_explanation: "'Some crops, like olives... may actually benefit'.",
    },
    {
      question_tr: "Yazarın ana mesajı nedir?",
      options: [
        "Climate change is exaggerated",
        "Turkey faces serious climate impacts requiring faster action",
        "The government is solving the problem",
        "Only the south of Turkey is affected",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "Etkiler ciddi ve yazar daha hızlı eylem çağrısında bulunuyor.",
    },
    {
      question_tr: "Temel gıda fiyatlarının artmasıyla iklim arasındaki bağlantı nedir?",
      options: [
        "There is no connection",
        "Droughts destroy crops, raising prices",
        "Hot weather makes people eat more",
        "Climate affects only imported food",
      ],
      correct_index: 1,
      type: "inference",
      tr_explanation: "'Droughts that destroy entire harvests. The cost of basic foods... has risen partly because of this'.",
    },
  ],
};

const article_b1_4: ReadingArticle = {
  id: "read.psychology.b1.2",
  title_en: "Why People Move to Big Cities",
  title_tr: "İnsanlar Neden Büyük Şehirlere Taşınıyor",
  emoji: "🏙️",
  category: "psychology",
  cefrLevel: "B1",
  word_count: 226,
  estimated_minutes: 4,
  body: "More than half of the world's population now lives in cities, and the share keeps growing. Every year, millions of people leave villages and small towns and move to places like Istanbul, Cairo, Mumbai, or São Paulo. Why? The reasons are practical and emotional. The most common reason is jobs. Big cities have more industries and more variety. A young person in a small town might have three career options; the same person in Istanbul might have thirty. Salaries are usually higher in cities, even if rent and food cost more. Education is another driver. Universities are concentrated in big cities. So are good hospitals, libraries, and cultural events. Parents often move so their children can have better schools. But there is also a quieter reason: anonymity. In a small town, everyone knows your business. People talk if you make different choices. Cities offer a kind of freedom — the freedom to be yourself without judgment. This is especially valuable for young people, women seeking independence, and minorities. Of course, cities have costs. They are expensive, crowded, and sometimes lonely. Many people who move feel both excited and homesick. Some go back. But most stay, because the opportunities outweigh the difficulties. Governments increasingly worry about this trend. When everyone moves to the city, villages empty out. Farmland is abandoned. The cultural balance of a country shifts in ways no one fully controls.",
  highlights: [
    {
      word_or_phrase: "the share",
      translation_tr: "oran, pay",
    },
    {
      word_or_phrase: "industries",
      translation_tr: "endüstriler, sektörler",
    },
    {
      word_or_phrase: "concentrated",
      translation_tr: "yoğunlaşmış, toplanmış",
    },
    {
      word_or_phrase: "anonymity",
      translation_tr: "anonimlik, tanınmama",
      note_tr: "Kalabalıkta kaybolma, kimsenin seni tanımaması.",
    },
    {
      word_or_phrase: "judgment",
      translation_tr: "yargı, yargılama",
    },
    {
      word_or_phrase: "minorities",
      translation_tr: "azınlıklar",
    },
    {
      word_or_phrase: "homesick",
      translation_tr: "memleket özlemi çeken",
    },
    {
      word_or_phrase: "outweigh",
      translation_tr: "ağır basmak, daha önemli olmak",
    },
    {
      word_or_phrase: "abandoned",
      translation_tr: "terk edilmiş",
    },
  ],
  questions: [
    {
      question_tr: "Yazara göre insanların büyük şehirlere taşınmasının en yaygın nedeni nedir?",
      options: [
        "Better weather",
        "Jobs and economic opportunities",
        "Family pressure",
        "Lower taxes",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'The most common reason is jobs'.",
    },
    {
      question_tr: "'Anonymity' bu metinde ne anlama gelir?",
      options: [
        "Being famous",
        "Being unknown in the crowd",
        "Being lonely",
        "Being part of a group",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Anonimlik — kalabalıkta tanınmadan yaşamak.",
    },
    {
      question_tr: "Yazara göre şehir yaşamı kim için özellikle değerlidir?",
      options: [
        "Only rich people",
        "Young people, women seeking independence, and minorities",
        "Farmers",
        "Government workers",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Especially valuable for young people, women seeking independence, and minorities'.",
    },
    {
      question_tr: "Yazar şehre taşınmaya karşı dengeli bir bakış sunuyor. Hangisi DOĞRU?",
      options: [
        "He says cities are perfect",
        "He says villages are always better",
        "He shows both benefits and costs",
        "He doesn't give any opinion",
      ],
      correct_index: 2,
      type: "inference",
      tr_explanation: "Hem fırsatları hem de yalnızlık/pahalılık gibi maliyetleri anlatıyor.",
    },
    {
      question_tr: "Hükümetler bu eğilimden neden endişeleniyor?",
      options: [
        "Cities pay less tax",
        "Villages empty out and farmland is abandoned",
        "Cities become too rich",
        "There are fewer schools in cities",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'When everyone moves to the city, villages empty out. Farmland is abandoned'.",
    },
  ],
};

const article_b1_5: ReadingArticle = {
  id: "read.business.b1.1",
  title_en: "The Rise of Remote Work",
  title_tr: "Uzaktan Çalışmanın Yükselişi",
  emoji: "🌐",
  category: "business",
  cefrLevel: "B1",
  word_count: 234,
  estimated_minutes: 4,
  body: "Remote work was a niche practice ten years ago. A handful of tech workers and freelancers did it, but most companies insisted on office attendance. The pandemic of 2020 changed everything almost overnight. Suddenly, millions of people who had never worked from home discovered they could be productive in their living rooms. Now, even though offices have reopened, remote work has not gone away. According to recent surveys, about 30 percent of workers in developed countries spend at least part of their week working from home. The numbers vary by industry: software, finance, and design lead, while manufacturing and healthcare lag behind for obvious reasons. The shift has had unexpected effects. Smaller cities and rural areas have gained population as people realize they can keep their city salary while living somewhere cheaper. Real estate markets in places like Antalya or Bodrum have boomed, partly because of remote workers who used to commute into Istanbul. At the same time, large city centers face a slow crisis. Office buildings sit half-empty. Restaurants and shops that depended on weekday foot traffic are struggling. Employers themselves are split. Some, like a few large banks, insist on full return to the office. Others embrace permanent flexibility. The middle ground — a hybrid model with two or three office days per week — is becoming the most common arrangement. The full impact will take years to understand.",
  highlights: [
    {
      word_or_phrase: "niche practice",
      translation_tr: "niş uygulama",
      note_tr: "Az kişinin yaptığı, özel bir uygulama.",
    },
    {
      word_or_phrase: "a handful of",
      translation_tr: "bir avuç, birkaç tane",
    },
    {
      word_or_phrase: "insisted on",
      translation_tr: "ısrar ettiler",
    },
    {
      word_or_phrase: "almost overnight",
      translation_tr: "neredeyse bir gecede",
    },
    {
      word_or_phrase: "productive",
      translation_tr: "verimli, üretken",
    },
    {
      word_or_phrase: "lag behind",
      translation_tr: "geride kalmak",
    },
    {
      word_or_phrase: "boomed",
      translation_tr: "patlama yaptı, hızla büyüdü",
    },
    {
      word_or_phrase: "foot traffic",
      translation_tr: "yaya trafiği",
      note_tr: "Mağaza/restorana gelen müşteri akışı.",
    },
    {
      word_or_phrase: "hybrid model",
      translation_tr: "hibrit model, karma model",
    },
  ],
  questions: [
    {
      question_tr: "Pandemiden önce uzaktan çalışma nasıl bir şeydi?",
      options: [
        "Very common",
        "A niche practice for a few workers",
        "Forbidden in most countries",
        "Only for executives",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Remote work was a niche practice ten years ago'.",
    },
    {
      question_tr: "Hangi sektörler uzaktan çalışmada öncüdür?",
      options: [
        "Manufacturing and healthcare",
        "Agriculture and mining",
        "Software, finance, and design",
        "Restaurants and hotels",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Software, finance, and design lead'.",
    },
    {
      question_tr: "'Foot traffic' ne anlama gelir?",
      options: [
        "Walking exercise",
        "Customers walking into a business",
        "Pedestrian accidents",
        "Sports activities",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Yaya trafiği — restoran/mağazaya gelen müşteri akışı.",
    },
    {
      question_tr: "Antalya veya Bodrum gibi şehirlerde emlak piyasasının büyümesinin sebebi nedir?",
      options: [
        "Lower taxes",
        "Remote workers moving from Istanbul",
        "New tourist regulations",
        "Government subsidies",
      ],
      correct_index: 1,
      type: "inference",
      tr_explanation: "Şehirden uzaklaşan uzaktan çalışanlar bu bölgelere yöneldi.",
    },
    {
      question_tr: "En yaygın yeni çalışma düzeni nedir?",
      options: [
        "Full remote",
        "Full office",
        "A hybrid model with two or three office days per week",
        "Working only weekends",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'A hybrid model... is becoming the most common arrangement'.",
    },
  ],
};

// ============================================================
// B2 — 5 articles, 250-350 words each
// ============================================================

const article_b2_1: ReadingArticle = {
  id: "read.business.b2.1",
  title_en: "Negotiating Salary in a Tight Market",
  title_tr: "Sıkışık Piyasada Maaş Pazarlığı",
  emoji: "💼",
  category: "business",
  cefrLevel: "B2",
  word_count: 308,
  estimated_minutes: 5,
  body: "Salary negotiation is uncomfortable for almost everyone, but it becomes particularly tricky during economic uncertainty. When companies are cutting budgets and hiring less, candidates worry that pushing for more money might cost them the offer entirely. This fear is usually overblown. In reality, a thoughtful negotiation rarely backfires — provided you do it right. The most common mistake is to focus only on base salary. In a tight market, employers are often constrained by internal salary bands they cannot easily exceed. But they have far more flexibility on other components: signing bonuses, equity, performance bonuses, additional vacation days, remote work allowances, and learning budgets. A candidate who only negotiates on base may leave thousands on the table by ignoring these levers. Preparation is critical. Before any conversation about money, you should know the market rate for your role in your location, ideally from multiple sources. You should also have a clear sense of what you bring that's hard to replace — specific skills, relationships, or domain knowledge. Companies pay premiums for what is scarce, not for general competence. Tone matters enormously. The goal is to come across as collaborative, not adversarial. Phrases like \"I'm excited about this role, and I'd like to discuss the compensation to make sure we can both feel good about it\" usually work better than rigid demands. Be specific about numbers, but remain open about how the total package is structured. Timing also plays a role. The strongest position you ever have is the moment between receiving a verbal offer and signing the paperwork. Before that point, the company hasn't fully committed; after, your leverage drops sharply. Use that window carefully. Most importantly, remember that the worst that usually happens in a negotiation is that you stay where you started. Asking is almost always worth it.",
  highlights: [
    {
      word_or_phrase: "tight market",
      translation_tr: "sıkışık piyasa",
      note_tr: "Ekonomik olarak zor dönem.",
    },
    {
      word_or_phrase: "overblown",
      translation_tr: "abartılmış",
    },
    {
      word_or_phrase: "backfires",
      translation_tr: "ters teper, geri teper",
    },
    {
      word_or_phrase: "constrained",
      translation_tr: "sınırlandırılmış, kısıtlanmış",
    },
    {
      word_or_phrase: "salary bands",
      translation_tr: "maaş bantları",
      note_tr: "Şirket içinde her rol için min-max aralığı.",
    },
    {
      word_or_phrase: "leave on the table",
      translation_tr: "masada bırakmak",
      note_tr: "Alabileceğin bir şeyi almamak.",
    },
    {
      word_or_phrase: "levers",
      translation_tr: "kollar, manivelalar",
      note_tr: "Burada 'pazarlık enstrümanları' anlamında.",
    },
    {
      word_or_phrase: "scarce",
      translation_tr: "az bulunan, kıt",
    },
    {
      word_or_phrase: "adversarial",
      translation_tr: "düşmanca, çatışmacı",
    },
    {
      word_or_phrase: "leverage",
      translation_tr: "kaldıraç, pazarlık gücü",
    },
  ],
  questions: [
    {
      question_tr: "Yazara göre maaş pazarlığında en yaygın hata nedir?",
      options: [
        "Asking too much money",
        "Focusing only on base salary",
        "Being too polite",
        "Negotiating too quickly",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'The most common mistake is to focus only on base salary'.",
    },
    {
      question_tr: "'Leave thousands on the table' ifadesi ne anlama gelir?",
      options: [
        "Forgetting your money on a desk",
        "Missing out on money you could have gotten",
        "Putting money down to negotiate",
        "Wasting the company's money",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Pazarlıkta alabileceğin ek değeri almadan bırakmak.",
    },
    {
      question_tr: "Şirketler ne tür becerilere prim öder?",
      options: [
        "General competence",
        "Skills that are scarce or hard to replace",
        "Years of experience",
        "Educational degrees only",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Companies pay premiums for what is scarce, not for general competence'.",
    },
    {
      question_tr: "Pazarlıkta tonun önemi nedir?",
      options: [
        "Be aggressive to win",
        "Stay silent throughout",
        "Be collaborative, not adversarial",
        "Use legal language",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'The goal is to come across as collaborative, not adversarial'.",
    },
    {
      question_tr: "Aday için en güçlü pazarlık zamanı ne zamandır?",
      options: [
        "After signing the contract",
        "Before the first interview",
        "Between a verbal offer and signing paperwork",
        "After starting the job",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'The strongest position... is the moment between receiving a verbal offer and signing'.",
    },
    {
      question_tr: "Yazarın genel mesajı nedir?",
      options: [
        "Don't negotiate during hard times",
        "Negotiation rarely backfires if done well — it's almost always worth trying",
        "Companies always pay maximum salary",
        "Only base salary matters",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "Yazar pazarlık yapmanın değerini ve nasıl yapılacağını anlatıyor.",
    },
  ],
};

const article_b2_2: ReadingArticle = {
  id: "read.psychology.b2.1",
  title_en: "Why We Believe Misinformation",
  title_tr: "Neden Yanlış Bilgiye İnanıyoruz",
  emoji: "📰",
  category: "psychology",
  cefrLevel: "B2",
  word_count: 322,
  estimated_minutes: 5,
  body: "It is tempting to believe that misinformation spreads because people are uninformed or unintelligent. The reality is more uncomfortable: smart, educated people fall for false stories all the time. Understanding why requires looking at how the human mind processes information, not at any individual's character flaw. Our brains are built for speed, not accuracy. When we encounter a claim — a headline, a social media post, a chart — our first response is usually emotional, not analytical. If the claim aligns with what we already believe, we accept it almost automatically. If it contradicts our worldview, we look for reasons to dismiss it. Psychologists call this confirmation bias, and it operates beneath conscious awareness in everyone, regardless of intelligence. Social media has supercharged this tendency. Algorithms learn what we engage with and feed us more of the same. The result is an information environment where each person sees a slightly different version of reality. Inside that filtered bubble, false claims that confirm our views feel obviously true, while challenges to those views feel like attacks. Over time, this hardens beliefs and erodes our willingness to consider alternatives. Another factor is repetition. Cognitive science has long demonstrated the so-called illusory truth effect: the more often we encounter a statement, the more true it feels, even if we know it's false the first time we hear it. In an environment where the same misleading claim can be shared millions of times across platforms, repetition becomes a powerful tool for shaping belief. There is no simple cure. Fact-checking helps but rarely changes minds that have already settled. The deeper antidote is intellectual humility: the willingness to say \"I might be wrong\" and to actually mean it. This is harder than it sounds. Most of us value being right more than being accurate. Until that changes, misinformation will continue to find ready audiences.",
  highlights: [
    {
      word_or_phrase: "tempting",
      translation_tr: "cazip, baştan çıkarıcı",
    },
    {
      word_or_phrase: "character flaw",
      translation_tr: "karakter kusuru",
    },
    {
      word_or_phrase: "aligns with",
      translation_tr: "ile uyumlu olmak",
    },
    {
      word_or_phrase: "contradicts",
      translation_tr: "çelişir, ters düşer",
    },
    {
      word_or_phrase: "confirmation bias",
      translation_tr: "doğrulama önyargısı",
      note_tr: "İnançlarımıza uyan bilgileri seçme eğilimi.",
    },
    {
      word_or_phrase: "supercharged",
      translation_tr: "aşırı güçlendirmiş",
    },
    {
      word_or_phrase: "filtered bubble",
      translation_tr: "filtre balonu",
      note_tr: "Algoritmaların yarattığı sınırlı bakış açısı.",
    },
    {
      word_or_phrase: "erodes",
      translation_tr: "aşındırır, azaltır",
    },
    {
      word_or_phrase: "illusory truth effect",
      translation_tr: "yanıltıcı gerçeklik etkisi",
    },
    {
      word_or_phrase: "antidote",
      translation_tr: "panzehir, çözüm",
    },
    {
      word_or_phrase: "intellectual humility",
      translation_tr: "entelektüel alçakgönüllülük",
    },
  ],
  questions: [
    {
      question_tr: "Yazara göre yanıltıcı bilgiye inanmanın asıl nedeni nedir?",
      options: [
        "People are unintelligent",
        "People are uninformed",
        "Human brains process information for speed, not accuracy",
        "People want to be wrong",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Our brains are built for speed, not accuracy'.",
    },
    {
      question_tr: "'Confirmation bias' nedir?",
      options: [
        "The tendency to verify everything",
        "The tendency to accept claims that match what we already believe",
        "Bias against facts",
        "Always doubting yourself",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "İnançlarımızla uyuşan bilgileri otomatik kabul etme eğilimi.",
    },
    {
      question_tr: "Sosyal medya bu eğilimi nasıl etkiler?",
      options: [
        "It reduces bias by showing diverse views",
        "Algorithms reinforce existing beliefs by feeding similar content",
        "It only shows facts",
        "It has no effect on misinformation",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Algoritmalar bizim etkileşime girdiğimiz içeriği öğrenip benzerini gösterir.",
    },
    {
      question_tr: "Yanıltıcı gerçeklik etkisi (illusory truth effect) nedir?",
      options: [
        "False statements are always obvious",
        "Repetition makes false statements feel more true",
        "Truth is an illusion",
        "Only true statements get repeated",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'The more often we encounter a statement, the more true it feels'.",
    },
    {
      question_tr: "Yazara göre yanıltıcı bilgiye karşı daha derin çözüm nedir?",
      options: [
        "More fact-checking organizations",
        "Banning social media",
        "Intellectual humility — being willing to be wrong",
        "Stricter government regulation",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'The deeper antidote is intellectual humility'.",
    },
    {
      question_tr: "Yazarın akıllı insanlara dair çıkarımı nedir?",
      options: [
        "Smart people never fall for misinformation",
        "Education prevents bias completely",
        "Intelligence doesn't protect against believing false information",
        "Only smart people share fake news",
      ],
      correct_index: 2,
      type: "inference",
      tr_explanation: "'Smart, educated people fall for false stories all the time'.",
    },
  ],
};

const article_b2_3: ReadingArticle = {
  id: "read.history.b2.1",
  title_en: "The Ottoman Empire: A Brief Overview",
  title_tr: "Osmanlı İmparatorluğu: Kısa Bir Bakış",
  emoji: "🏛️",
  category: "history",
  cefrLevel: "B2",
  word_count: 318,
  estimated_minutes: 5,
  body: "The Ottoman Empire lasted for over six centuries, from roughly 1299 to 1922, making it one of the longest-running political entities in human history. At its peak in the sixteenth century under Suleiman the Magnificent, its territory stretched from Hungary in the north to Yemen in the south, and from Algeria in the west to Iraq in the east. Constantinople, captured in 1453 and renamed Istanbul, served as its capital throughout. The empire's success was not merely military. It developed sophisticated administrative systems that allowed it to govern enormously diverse populations. Different religious communities — Muslims, Christians, Jews — lived under what was known as the millet system, which granted significant autonomy to each group in matters of personal law, education, and religious practice. While not equal in the modern sense, this arrangement was unusually tolerant by the standards of its time. Trade was another pillar of Ottoman power. The empire controlled the crossroads of three continents and dominated key routes between Europe and Asia for centuries. Istanbul, Aleppo, Cairo, and Baghdad were among the great commercial centers of the medieval world. Coffee, silk, spices, and ideas moved through Ottoman markets in volumes that shaped global economies. Yet by the eighteenth and nineteenth centuries, the empire had begun a long, gradual decline. European powers industrialized and grew wealthy through colonization while the Ottomans struggled to modernize their economy and military. A series of military defeats, internal reform attempts known as the Tanzimat, and rising nationalism among the empire's minorities all eroded its cohesion. World War One delivered the final blow. The empire fought on the losing side and was partitioned by victorious European powers. From its ashes, Mustafa Kemal Ataturk and his allies built the modern Republic of Turkey, founded in 1923. The Ottoman legacy, though, remains visible — in language, architecture, cuisine, and the cultural geography of three continents.",
  highlights: [
    {
      word_or_phrase: "political entities",
      translation_tr: "siyasi yapılar",
    },
    {
      word_or_phrase: "at its peak",
      translation_tr: "zirvesinde",
    },
    {
      word_or_phrase: "stretched from",
      translation_tr: "...dan ...e uzanıyordu",
    },
    {
      word_or_phrase: "sophisticated",
      translation_tr: "gelişmiş, karmaşık ve incelikli",
    },
    {
      word_or_phrase: "autonomy",
      translation_tr: "özerklik",
    },
    {
      word_or_phrase: "tolerant",
      translation_tr: "hoşgörülü",
    },
    {
      word_or_phrase: "pillar",
      translation_tr: "sütun, temel direk",
      note_tr: "Mecaz olarak 'temel öğe'.",
    },
    {
      word_or_phrase: "crossroads",
      translation_tr: "kavşak",
    },
    {
      word_or_phrase: "industrialized",
      translation_tr: "sanayileşti",
    },
    {
      word_or_phrase: "Tanzimat",
      translation_tr: "Tanzimat reformları",
      note_tr: "19. yüzyıl Osmanlı modernleşme reformları.",
    },
    {
      word_or_phrase: "cohesion",
      translation_tr: "birlik, tutarlılık",
    },
    {
      word_or_phrase: "partitioned",
      translation_tr: "bölündü, parçalandı",
    },
    {
      word_or_phrase: "legacy",
      translation_tr: "miras",
    },
  ],
  questions: [
    {
      question_tr: "Osmanlı İmparatorluğu kaç yıl sürdü?",
      options: ["About 300 years", "About 450 years", "Over 600 years", "Nearly 800 years"],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'From roughly 1299 to 1922' — yaklaşık 600 yıldan fazla.",
    },
    {
      question_tr: "Millet sistemi neydi?",
      options: [
        "A military structure",
        "A system giving religious communities autonomy",
        "A tax collection method",
        "A type of empire-wide language",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Farklı dini topluluklara kendi yasal ve dini özerklik tanıyan sistem.",
    },
    {
      question_tr: "'Pillar' bu metinde ne anlama gelir?",
      options: [
        "A physical column",
        "A foundational element or main support",
        "A type of building",
        "A military officer",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Mecaz: temel öğe. 'Trade was another pillar of Ottoman power'.",
    },
    {
      question_tr: "Osmanlı düşüşünün nedenlerinden biri NEDİR?",
      options: [
        "Sudden famine",
        "European industrialization while Ottomans struggled to modernize",
        "A natural disaster",
        "Loss of all coastline",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'European powers industrialized... while the Ottomans struggled to modernize'.",
    },
    {
      question_tr: "Yazar Osmanlı'nın hoşgörü düzeyini nasıl tanımlıyor?",
      options: [
        "Equal in the modern sense",
        "Completely intolerant",
        "Unusually tolerant for its time, though not modern equality",
        "Hostile to all minorities",
      ],
      correct_index: 2,
      type: "inference",
      tr_explanation: "'Not equal in the modern sense... unusually tolerant by the standards of its time'.",
    },
    {
      question_tr: "Metnin ana fikri nedir?",
      options: [
        "Ottoman Empire was militaristic above all",
        "Ottoman Empire was a long-lasting, complex multi-ethnic state whose legacy persists",
        "Ottoman Empire ended unexpectedly",
        "Ottoman Empire never had any influence",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "Metin imparatorluğun uzun ömrü, çeşitliliği, çöküşü ve kalan mirasını anlatıyor.",
    },
  ],
};

const article_b2_4: ReadingArticle = {
  id: "read.science.b2.1",
  title_en: "How Sleep Affects Decision-Making",
  title_tr: "Uyku Karar Vermeyi Nasıl Etkiler",
  emoji: "😴",
  category: "science",
  cefrLevel: "B2",
  word_count: 297,
  estimated_minutes: 5,
  body: "Most people accept that a poor night's sleep makes them tired and irritable. Fewer realize that it also fundamentally degrades their ability to make good decisions, often without their awareness. Decades of research show that even moderate sleep deprivation impairs the same cognitive functions affected by alcohol intoxication. Studies at Harvard Medical School have found that after seventeen to nineteen hours awake — a level many professionals reach regularly — performance on attention and reaction tests matches that of someone with a blood alcohol content of 0.05 percent, which is legally impaired in many countries. After twenty-four hours awake, the equivalent reaches 0.10 percent, well above the legal limit for driving almost everywhere. The problem isn't just slower reactions. Sleep deprivation specifically damages the prefrontal cortex, the part of the brain responsible for risk assessment, impulse control, and weighing long-term consequences. Tired people are more likely to pursue short-term rewards and discount future costs. In experimental studies, sleep-deprived participants make riskier financial bets, eat more sugar, are less patient with colleagues, and rate other people's faces as more threatening — all without realizing their judgment has shifted. Perhaps most troublingly, sleep-deprived people consistently overrate their own performance. Asked how well they're functioning, they report feeling roughly normal even when objective measures show severe impairment. This metacognitive blindness is dangerous: surgeons, pilots, executives, and parents routinely make consequential decisions while believing they are sharp when they are not. The practical implications are sobering. A culture that valorizes overwork and treats sleep as optional is one that systematically encourages worse decisions. Improving sleep is not soft self-care advice; it is one of the most cost-effective interventions available for raising the quality of nearly any kind of human judgment.",
  highlights: [
    {
      word_or_phrase: "irritable",
      translation_tr: "sinirli, çabuk öfkelenen",
    },
    {
      word_or_phrase: "degrades",
      translation_tr: "düşürür, bozar",
    },
    {
      word_or_phrase: "sleep deprivation",
      translation_tr: "uyku yoksunluğu",
    },
    {
      word_or_phrase: "intoxication",
      translation_tr: "sarhoşluk, zehirlenme",
    },
    {
      word_or_phrase: "blood alcohol content",
      translation_tr: "kandaki alkol oranı",
    },
    {
      word_or_phrase: "legally impaired",
      translation_tr: "yasal olarak yeterli yetiye sahip olmayan",
    },
    {
      word_or_phrase: "prefrontal cortex",
      translation_tr: "prefrontal korteks",
      note_tr: "Beynin önündeki karar verme bölgesi.",
    },
    {
      word_or_phrase: "impulse control",
      translation_tr: "dürtü kontrolü",
    },
    {
      word_or_phrase: "discount future costs",
      translation_tr: "gelecekteki maliyetleri küçümsemek",
    },
    {
      word_or_phrase: "metacognitive blindness",
      translation_tr: "üst-bilişsel körlük",
      note_tr: "Kendi düşünme süreçlerini fark edememek.",
    },
    {
      word_or_phrase: "valorizes",
      translation_tr: "yüceltir, değerli sayar",
    },
    {
      word_or_phrase: "sobering",
      translation_tr: "ayıltıcı, uyandırıcı",
    },
  ],
  questions: [
    {
      question_tr: "Yazara göre 17-19 saatlik uykusuzluk hangi seviyeye benzer?",
      options: [
        "Being mildly tired",
        "0.05% blood alcohol — legally impaired in many countries",
        "Being completely drunk",
        "Normal functioning",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Performance... matches that of someone with a blood alcohol content of 0.05 percent'.",
    },
    {
      question_tr: "Uyku yoksunluğu beynin hangi bölgesini özellikle etkiler?",
      options: [
        "The hippocampus",
        "The cerebellum",
        "The prefrontal cortex",
        "The brain stem",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Sleep deprivation specifically damages the prefrontal cortex'.",
    },
    {
      question_tr: "'Metacognitive blindness' ne anlama gelir?",
      options: [
        "Inability to see in the dark",
        "Inability to accurately assess one's own thinking",
        "Forgetting everything overnight",
        "Loss of vision while tired",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Kendi düşünce ve performansını doğru değerlendirememe.",
    },
    {
      question_tr: "Yorgun insanlar genellikle hangi tarz seçimler yapar?",
      options: [
        "Patient, long-term decisions",
        "Risky bets, short-term rewards, less patience",
        "More careful financial choices",
        "More empathetic responses",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Riskier financial bets, eat more sugar, are less patient...'",
    },
    {
      question_tr: "Yazarın aşırı çalışmaya dair ima ettiği nedir?",
      options: [
        "It improves productivity",
        "It is necessary for success",
        "It systematically leads to worse decisions",
        "It has no relation to sleep",
      ],
      correct_index: 2,
      type: "inference",
      tr_explanation: "'A culture that valorizes overwork... systematically encourages worse decisions'.",
    },
    {
      question_tr: "Metnin ana mesajı nedir?",
      options: [
        "Sleep is a luxury",
        "Sleep deprivation seriously degrades judgment and we underestimate this",
        "Coffee can replace sleep",
        "Only professionals need good sleep",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "Uyku yoksunluğunun karar verme üzerindeki ciddi etkisi ana fikir.",
    },
  ],
};

const article_b2_5: ReadingArticle = {
  id: "read.business.b2.2",
  title_en: "Startup Ecosystems: Istanbul vs. Berlin",
  title_tr: "Startup Ekosistemleri: İstanbul Berlin'e Karşı",
  emoji: "🚀",
  category: "business",
  cefrLevel: "B2",
  word_count: 335,
  estimated_minutes: 5,
  body: "Both Istanbul and Berlin position themselves as gateways between worlds — Istanbul between Europe and Asia, Berlin between Western and Eastern Europe. Both have produced billion-dollar startups in the last decade. But their startup ecosystems function quite differently, and understanding those differences reveals a lot about how regional context shapes entrepreneurship. Berlin's advantages are well documented. The city has an unusual concentration of international talent, drawn by relatively low living costs, a vibrant cultural scene, and a long-standing immigrant-friendly visa regime. Capital flows in mostly from European Union institutional investors, and exits — when startups sell or go public — typically happen on European or American markets. Founders benefit from a mature ecosystem with experienced lawyers, accelerators, and angel investors who have done dozens of deals. The downside is that the German market itself is conservative; local customers are slow to adopt new products, and regulation can be heavy. Istanbul plays a different game. The city sits at the center of a massive young population — Turkey has over 85 million people with a median age below thirty-five — and surrounding emerging markets that include the Balkans, the Middle East, and parts of Africa. Turkish startups in gaming, fintech, and e-commerce have shown they can build for and sell to this neighborhood with remarkable speed. Notable exits like Peak Games and Trendyol have shown that very large companies can be built from here. The challenges are different too. The lira's volatility complicates fundraising in dollar terms, and the local capital pool is shallower than Berlin's. Political and macroeconomic uncertainty pushes some founders to set up holding structures abroad early. International investors are interested but cautious. Yet for entrepreneurs who can navigate this, Istanbul offers something Berlin cannot: a base from which to address a region of well over half a billion consumers, many of whom have just acquired smartphones and are eager for digital products built with them in mind.",
  highlights: [
    {
      word_or_phrase: "gateways",
      translation_tr: "geçit, kapı",
      note_tr: "Mecaz olarak iki dünya arası köprü.",
    },
    {
      word_or_phrase: "ecosystems",
      translation_tr: "ekosistemler",
    },
    {
      word_or_phrase: "entrepreneurship",
      translation_tr: "girişimcilik",
    },
    {
      word_or_phrase: "vibrant",
      translation_tr: "canlı, dinamik",
    },
    {
      word_or_phrase: "institutional investors",
      translation_tr: "kurumsal yatırımcılar",
    },
    {
      word_or_phrase: "exits",
      translation_tr: "çıkışlar",
      note_tr: "Startup satılır veya halka açılır — yatırımcı çıkışı.",
    },
    {
      word_or_phrase: "accelerators",
      translation_tr: "hızlandırıcılar (programları)",
    },
    {
      word_or_phrase: "angel investors",
      translation_tr: "melek yatırımcılar",
    },
    {
      word_or_phrase: "conservative",
      translation_tr: "muhafazakar, tutucu",
    },
    {
      word_or_phrase: "emerging markets",
      translation_tr: "gelişmekte olan pazarlar",
    },
    {
      word_or_phrase: "fintech",
      translation_tr: "fintek, finansal teknoloji",
    },
    {
      word_or_phrase: "volatility",
      translation_tr: "oynaklık, dalgalanma",
    },
    {
      word_or_phrase: "shallower",
      translation_tr: "daha sığ, daha küçük",
    },
    {
      word_or_phrase: "holding structures",
      translation_tr: "holding yapıları",
    },
    {
      word_or_phrase: "navigate",
      translation_tr: "yönetmek, içinde yol almak",
    },
  ],
  questions: [
    {
      question_tr: "Berlin'in startup ekosisteminin temel bir avantajı nedir?",
      options: [
        "Largest local market in Europe",
        "Concentration of international talent and mature ecosystem",
        "Lowest taxes in Europe",
        "Easy access to Asian markets",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Unusual concentration of international talent... mature ecosystem'.",
    },
    {
      question_tr: "İstanbul'un farklı oyun planının özü nedir?",
      options: [
        "Selling only to Europeans",
        "Targeting old populations",
        "Serving a massive young population and surrounding emerging markets",
        "Producing only luxury products",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Massive young population... surrounding emerging markets'.",
    },
    {
      question_tr: "'Exit' bu finansal bağlamda ne anlama gelir?",
      options: [
        "An employee leaving the company",
        "When a startup is sold or goes public",
        "A door in the office",
        "Failure of a startup",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Yatırımcının kazançla çıkışı — satış veya halka arz.",
    },
    {
      question_tr: "İstanbul'daki kurucuları hangi makroekonomik zorluk etkiler?",
      options: [
        "Lira volatility and political uncertainty",
        "Excessive European regulation",
        "Lack of population",
        "Too much foreign investment",
      ],
      correct_index: 0,
      type: "factual",
      tr_explanation: "'The lira's volatility complicates fundraising... political and macroeconomic uncertainty'.",
    },
    {
      question_tr: "Berlin'in dezavantajı olarak ne belirtiliyor?",
      options: [
        "Lack of talent",
        "Conservative local market with slow adoption and heavy regulation",
        "No investors at all",
        "Bad weather discouraging founders",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'The German market itself is conservative; local customers are slow to adopt...'",
    },
    {
      question_tr: "Yazarın iki şehir karşılaştırmasından çıkardığı sonuç nedir?",
      options: [
        "Berlin is objectively superior",
        "Istanbul is objectively superior",
        "Each ecosystem has distinct strengths shaped by its regional context",
        "Both will collapse soon",
      ],
      correct_index: 2,
      type: "gist",
      tr_explanation: "Yazar her şehrin farklı oyun oynadığını ve bağlamın belirleyici olduğunu vurguluyor.",
    },
  ],
};

// ============================================================
// C1 — 3 articles, 350-500 words each
// ============================================================

const article_c1_1: ReadingArticle = {
  id: "read.tech.c1.1",
  title_en: "The Ethics of AI in Healthcare",
  title_tr: "Sağlıkta Yapay Zekanın Etiği",
  emoji: "⚕️",
  category: "tech",
  cefrLevel: "C1",
  word_count: 426,
  estimated_minutes: 7,
  body: "The integration of artificial intelligence into healthcare presents one of the most consequential ethical frontiers of our era. The technology's potential is undeniable: algorithms can already detect certain cancers earlier than human radiologists, predict patient deterioration hours before clinical signs appear, and personalize treatment plans by sifting through vast amounts of data no individual physician could plausibly digest. Yet the deployment of these systems raises questions that cannot be reduced to engineering problems. Chief among them is the issue of accountability. When a clinician overrides an AI recommendation and the patient suffers harm, the legal and moral lines are reasonably clear. But when a clinician follows the recommendation and the patient is harmed, the situation becomes murky. The clinician trusted a system whose reasoning may be opaque even to its designers; the institution deployed a tool it perhaps did not fully understand; the manufacturer offered a product trained on data whose limitations were not transparent. Existing malpractice frameworks were not designed for this distributed structure of decision-making, and regulators are still catching up. Bias in training data presents another layer of concern. Many medical AI systems have been trained primarily on data from Western populations, leaving them less reliable for patients of other ancestries. Dermatology algorithms famously struggle to detect cancers on darker skin tones; algorithms predicting which patients will benefit from intensive care have, in published cases, systematically under-allocated resources to Black patients. These are not theoretical risks but documented failures that have already affected real people. Then there is the question of consent and autonomy. A patient generally has the right to understand the basis of their treatment recommendations. But when those recommendations emerge from a neural network whose internal logic resists meaningful explanation, the doctrine of informed consent becomes harder to honor. Some ethicists argue that approximate or probabilistic explanations are sufficient; others insist that genuine accountability requires interpretability that current systems often cannot provide. There are also concerns about how AI may reshape the doctor-patient relationship itself. Medicine has long been understood as a deeply human practice — built on listening, trust, and judgment cultivated over years of training. Critics worry that increasing reliance on algorithmic outputs may erode physician skill over time, particularly among less experienced clinicians who may defer to the machine rather than develop their own clinical intuition. None of these concerns argues for abandoning the technology. They argue instead for thoughtful, slow, and humble deployment — with robust evaluation, transparent failure reporting, and a clear-eyed acknowledgment that the most important questions about medicine are never purely technical.",
  highlights: [
    {
      word_or_phrase: "consequential",
      translation_tr: "sonuçları büyük olan, önemli",
    },
    {
      word_or_phrase: "ethical frontiers",
      translation_tr: "etik sınırlar, etik öncüler",
    },
    {
      word_or_phrase: "sifting through",
      translation_tr: "elemek, ince ince taramak",
    },
    {
      word_or_phrase: "plausibly",
      translation_tr: "makul biçimde, gerçekçi olarak",
    },
    {
      word_or_phrase: "accountability",
      translation_tr: "hesap verebilirlik, sorumluluk",
    },
    {
      word_or_phrase: "murky",
      translation_tr: "bulanık, belirsiz",
    },
    {
      word_or_phrase: "opaque",
      translation_tr: "şeffaf olmayan, anlaşılmaz",
    },
    {
      word_or_phrase: "malpractice frameworks",
      translation_tr: "tıbbi hata çerçeveleri",
    },
    {
      word_or_phrase: "ancestries",
      translation_tr: "soylar, kökenler",
    },
    {
      word_or_phrase: "under-allocated",
      translation_tr: "yetersiz tahsis etmek",
    },
    {
      word_or_phrase: "informed consent",
      translation_tr: "aydınlatılmış onam (hasta rızası)",
    },
    {
      word_or_phrase: "interpretability",
      translation_tr: "yorumlanabilirlik",
    },
    {
      word_or_phrase: "defer to",
      translation_tr: "...e teslim olmak, ...e bağlı kalmak",
    },
    {
      word_or_phrase: "clinical intuition",
      translation_tr: "klinik sezgi",
    },
    {
      word_or_phrase: "humble deployment",
      translation_tr: "alçakgönüllü uygulama",
    },
  ],
  questions: [
    {
      question_tr: "Yazara göre sağlıkta YZ'nin en büyük etik zorluklarından biri nedir?",
      options: [
        "It is too expensive",
        "It is too slow to train",
        "Accountability is unclear when AI recommendations cause harm",
        "Doctors don't want to use it",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Chief among them is the issue of accountability'.",
    },
    {
      question_tr: "Eğitim verisindeki yanlılık hakkında ne anlatılıyor?",
      options: [
        "Bias has no real-world consequences",
        "All training data is now fully diverse",
        "Documented failures have affected Black patients and patients of non-Western ancestries",
        "Only future bias matters; current systems are fine",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "Çeşitli belgelenmiş başarısızlıklara değiniyor.",
    },
    {
      question_tr: "'Opaque' bu bağlamda ne anlama gelir?",
      options: [
        "Brightly illuminated",
        "Difficult to understand or see through",
        "Cheap to produce",
        "Heavy in weight",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Sistemin nasıl çalıştığını görmenin/anlamanın zor olması.",
    },
    {
      question_tr: "Aydınlatılmış onam (informed consent) ile ilgili sorun nedir?",
      options: [
        "Patients don't want explanations",
        "AI's internal reasoning often cannot be meaningfully explained, making true informed consent difficult",
        "Hospitals don't allow consent",
        "Consent is no longer required by law",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Sinir ağlarının iç mantığı anlamlı şekilde açıklanamayabilir.",
    },
    {
      question_tr: "Doktor-hasta ilişkisi konusunda yazar neyi vurguluyor?",
      options: [
        "AI completely replaces human doctors",
        "Over-reliance on algorithms may erode physician skill, especially in junior clinicians",
        "Patients prefer machines",
        "Algorithms have no effect on doctors",
      ],
      correct_index: 1,
      type: "inference",
      tr_explanation: "Yazar, deneyimsiz hekimlerin makineye fazla güvenip kendi sezgilerini geliştirememesinden endişe duyuyor.",
    },
    {
      question_tr: "Yazarın AI sağlık teknolojilerine genel tutumu nedir?",
      options: [
        "Reject all medical AI immediately",
        "Adopt aggressively without restriction",
        "Cautious, thoughtful deployment with strong evaluation and transparency",
        "Indifference — leave it to engineers",
      ],
      correct_index: 2,
      type: "gist",
      tr_explanation: "'Thoughtful, slow, and humble deployment' — temkinli ama destekleyici tutum.",
    },
  ],
};

const article_c1_2: ReadingArticle = {
  id: "read.news.c1.1",
  title_en: "Geopolitics of Energy in the Black Sea",
  title_tr: "Karadeniz'de Enerjinin Jeopolitiği",
  emoji: "⚓",
  category: "news",
  cefrLevel: "C1",
  word_count: 446,
  estimated_minutes: 7,
  body: "The Black Sea, long viewed as a regional waterway flanked by states of varying influence, has emerged in the past decade as a strategic arena where energy, security, and great-power competition intersect with unusual intensity. The reasons are not new in kind but have accelerated dramatically since 2014, and especially since 2022, when Russia's invasion of Ukraine recast the basin as the southern flank of a major European conflict. Energy infrastructure has been at the center of this transformation. The TurkStream pipeline, completed in 2020, carries Russian gas under the Black Sea to Turkey and onward into southeastern Europe, bypassing Ukraine. Romania and Bulgaria, meanwhile, have accelerated offshore exploration in their own exclusive economic zones; new discoveries in the Neptun Deep field could, by some estimates, make Romania a net gas exporter for the first time in modern history. Turkey itself has invested heavily in the Sakarya gas field, hoping to reduce its long-standing import dependence. Each of these projects has political consequences. Turkey's role is particularly delicate. The country is the only NATO member that maintains substantial energy ties to Russia while simultaneously hosting Western military assets and supplying significant arms to Ukraine. Its control of the Bosphorus and Dardanelles, regulated by the 1936 Montreux Convention, gives Ankara a unique gatekeeping function: it can lawfully restrict the passage of warships during wartime, which it has invoked since the 2022 invasion. This puts Turkey in a position no other regional power occupies — balancing leverage and obligations that often pull in opposite directions. The European Union, meanwhile, has accelerated efforts to diversify away from Russian energy in ways that elevate the Black Sea's importance. Liquefied natural gas terminals on the Aegean and proposed interconnectors between Romania, Bulgaria, Greece, and Italy aim to turn the broader region into an alternative supply corridor for southern and eastern Europe. Azerbaijan, though not a coastal state, plays an increasingly central role via the Southern Gas Corridor, which moves Caspian gas through Georgia and Turkey toward Europe. Yet the security environment remains volatile. Naval incidents, mining of commercial shipping routes, and persistent strikes on Ukrainian port infrastructure have introduced risks that energy companies must increasingly factor into their planning. Insurance rates for shipping in the basin have climbed; alternative land routes through the Balkans have gained renewed attention. What emerges is a picture of a region whose strategic centrality is no longer in doubt, but whose stability depends on geopolitical equilibria that no single actor — including Russia, NATO, or Turkey alone — appears capable of fully shaping. The Black Sea's twenty-first century will be defined, for better or worse, by this contested status.",
  highlights: [
    {
      word_or_phrase: "flanked by",
      translation_tr: "...ile çevrili",
    },
    {
      word_or_phrase: "strategic arena",
      translation_tr: "stratejik arena, stratejik alan",
    },
    {
      word_or_phrase: "great-power competition",
      translation_tr: "büyük güç rekabeti",
    },
    {
      word_or_phrase: "recast",
      translation_tr: "yeniden şekillendirdi",
    },
    {
      word_or_phrase: "flank",
      translation_tr: "kanat, yan",
    },
    {
      word_or_phrase: "bypassing",
      translation_tr: "atlamak, devre dışı bırakmak",
    },
    {
      word_or_phrase: "exclusive economic zones",
      translation_tr: "münhasır ekonomik bölgeler",
    },
    {
      word_or_phrase: "net exporter",
      translation_tr: "net ihracatçı",
    },
    {
      word_or_phrase: "import dependence",
      translation_tr: "ithalat bağımlılığı",
    },
    {
      word_or_phrase: "gatekeeping function",
      translation_tr: "kapı bekçisi işlevi",
    },
    {
      word_or_phrase: "invoked",
      translation_tr: "uygulamaya koydu, başvurdu",
    },
    {
      word_or_phrase: "diversify away from",
      translation_tr: "...dan uzaklaşarak çeşitlendirmek",
    },
    {
      word_or_phrase: "supply corridor",
      translation_tr: "tedarik koridoru",
    },
    {
      word_or_phrase: "volatile",
      translation_tr: "değişken, oynak",
    },
    {
      word_or_phrase: "equilibria",
      translation_tr: "dengeler",
    },
    {
      word_or_phrase: "contested status",
      translation_tr: "tartışmalı statü",
    },
  ],
  questions: [
    {
      question_tr: "Yazara göre Karadeniz'in son dönemde önemini artıran ana neden nedir?",
      options: [
        "Climate change",
        "Tourism growth",
        "Russia's invasion of Ukraine reshaping the basin",
        "New trade agreements with China",
      ],
      correct_index: 2,
      type: "factual",
      tr_explanation: "'Russia's invasion of Ukraine recast the basin as the southern flank...'",
    },
    {
      question_tr: "TurkStream boru hattının önemi nedir?",
      options: [
        "It connects Turkey to Egypt",
        "It carries Russian gas to Turkey and onward to southeastern Europe, bypassing Ukraine",
        "It is no longer operational",
        "It carries oil instead of gas",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Boru hattı Ukrayna'yı atlayarak Rus gazını Avrupa'ya iletir.",
    },
    {
      question_tr: "Türkiye'nin 1936 Montrö Sözleşmesi kapsamındaki rolünü nasıl tanımlayabiliriz?",
      options: [
        "It controls the price of gas exports",
        "It can legally restrict warship passage through the Bosphorus and Dardanelles in wartime",
        "It is allowed to invade Russia",
        "It must let all ships pass freely at all times",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Türkiye, savaş zamanı savaş gemilerinin geçişini yasal olarak kısıtlayabilir.",
    },
    {
      question_tr: "'Diversify away from' ifadesinin anlamı nedir?",
      options: [
        "Move closer to a single supplier",
        "Reduce dependence on one source by adding alternatives",
        "Stop all imports completely",
        "Increase exports of energy",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Tek kaynağa bağımlılığı azaltmak için alternatifler eklemek.",
    },
    {
      question_tr: "Yazar Türkiye'nin durumunu neden 'hassas' (delicate) olarak tanımlıyor?",
      options: [
        "It has no allies",
        "It balances energy ties with Russia, NATO membership, and arms supply to Ukraine",
        "It is too small to matter",
        "It refuses to make any decisions",
      ],
      correct_index: 1,
      type: "inference",
      tr_explanation: "Türkiye karşılıklı çekişen yükümlülükleri dengeliyor.",
    },
    {
      question_tr: "Metnin ana sonucu nedir?",
      options: [
        "Russia fully controls the Black Sea",
        "Black Sea stability depends on equilibria no single actor can fully shape",
        "NATO has resolved all issues",
        "The region has no strategic importance",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "'Stability depends on geopolitical equilibria that no single actor... appears capable of fully shaping'.",
    },
  ],
};

const article_c1_3: ReadingArticle = {
  id: "read.psychology.c1.1",
  title_en: "Behavioral Economics: Why We Make Bad Choices",
  title_tr: "Davranışsal Ekonomi: Neden Kötü Seçimler Yapıyoruz",
  emoji: "🎯",
  category: "psychology",
  cefrLevel: "C1",
  word_count: 462,
  estimated_minutes: 7,
  body: "Classical economics long rested on the assumption that human beings are rational agents who calmly weigh costs and benefits before acting in their own self-interest. The field's elegant models depended on this premise. Behavioral economics, which emerged from a fruitful collision between psychology and economics in the 1970s and 1980s, demolished it. The picture that has replaced it is messier but considerably more accurate: humans are predictably irrational, and the patterns of our irrationality are now well-documented enough to influence policy, marketing, and personal decisions in nontrivial ways. Consider loss aversion, perhaps the field's most famous finding. Originally identified by Daniel Kahneman and Amos Tversky, it describes the consistent tendency of people to feel the pain of a loss roughly twice as intensely as the pleasure of an equivalent gain. This single asymmetry helps explain a remarkable range of behaviors: why investors hold losing stocks too long while selling winners too early; why insurance is overpurchased relative to its actuarial value; why retirement saving is so difficult, since the costs feel immediate while the benefits are abstract and distant. Closely related is the endowment effect, the well-documented finding that we value things more highly simply because we own them. Experimenters who give subjects a mug and then offer to buy it back regularly find that owners demand roughly twice what they would have paid moments earlier. This effect distorts markets in ways economists once dismissed as marginal but now recognize as systematic. Then there is mental accounting, our tendency to treat money as if it lived in separate, non-fungible categories. People who would be horrified at withdrawing from a long-term savings account to fund a vacation will happily charge that same vacation to a credit card at significant interest, treating the two pools of money as if they were not, in the end, all just money. Marketing and policy take advantage of these tendencies. Default options drive enormous outcomes: countries that automatically enroll citizens in organ donation see participation rates several times higher than otherwise-similar countries that require opting in, despite presumably similar underlying preferences. Companies have long known that framing a price as \"only thirty-three cents a day\" rather than \"120 dollars a year\" yields more sales, even though the math is identical. Subscription services rely on the asymmetry between the friction of canceling and the ease of letting payments continue. The applications cut both ways. Better-designed retirement systems, clearer health communications, and policies that work with rather than against human psychology have improved real outcomes for millions. But the same insights, less ethically deployed, also power some of the more manipulative aspects of contemporary digital commerce. Understanding behavioral economics is increasingly essential, not just for analysts and policymakers, but for anyone trying to navigate a world designed to exploit the very predictable ways their mind goes wrong.",
  highlights: [
    {
      word_or_phrase: "rational agents",
      translation_tr: "rasyonel aktörler",
    },
    {
      word_or_phrase: "premise",
      translation_tr: "öncül, varsayım",
    },
    {
      word_or_phrase: "demolished",
      translation_tr: "yıktı, çürüttü",
    },
    {
      word_or_phrase: "predictably irrational",
      translation_tr: "öngörülebilir biçimde irrasyonel",
    },
    {
      word_or_phrase: "loss aversion",
      translation_tr: "kayıptan kaçınma",
    },
    {
      word_or_phrase: "asymmetry",
      translation_tr: "asimetri, dengesizlik",
    },
    {
      word_or_phrase: "actuarial value",
      translation_tr: "aktüeryal değer",
      note_tr: "İstatistiksel beklenen değer (sigortacılıkta).",
    },
    {
      word_or_phrase: "endowment effect",
      translation_tr: "sahiplenme etkisi",
    },
    {
      word_or_phrase: "distorts",
      translation_tr: "çarpıtır, bozar",
    },
    {
      word_or_phrase: "mental accounting",
      translation_tr: "zihinsel muhasebe",
    },
    {
      word_or_phrase: "non-fungible",
      translation_tr: "birbirinin yerine geçmeyen",
    },
    {
      word_or_phrase: "default options",
      translation_tr: "varsayılan seçenekler",
    },
    {
      word_or_phrase: "opting in",
      translation_tr: "aktif olarak katılmak, onay vermek",
    },
    {
      word_or_phrase: "framing",
      translation_tr: "çerçeveleme, sunuş biçimi",
    },
    {
      word_or_phrase: "friction",
      translation_tr: "sürtünme, engel",
      note_tr: "Burada 'işlemi zorlaştıran adımlar'.",
    },
    {
      word_or_phrase: "navigate",
      translation_tr: "yön bulmak, içinden geçmek",
    },
  ],
  questions: [
    {
      question_tr: "Klasik ekonominin yıkılan temel varsayımı neydi?",
      options: [
        "Markets are always efficient",
        "Humans are rational agents who weigh costs and benefits calmly",
        "Money is unlimited",
        "All countries trade equally",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "'Human beings are rational agents who calmly weigh costs and benefits'.",
    },
    {
      question_tr: "Kayıptan kaçınma (loss aversion) ne demektir?",
      options: [
        "People avoid losing physical items",
        "The pain of loss is felt roughly twice as intensely as the pleasure of an equivalent gain",
        "Investors enjoy losses",
        "Losses and gains feel equal",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Kayıp acısı, eşdeğer kazancın hazzından yaklaşık iki kat şiddetli hissedilir.",
    },
    {
      question_tr: "Sahiplenme etkisi (endowment effect) deneylerle nasıl gösterildi?",
      options: [
        "Owners refuse to sell any object",
        "Owners demand roughly twice what they would have paid moments earlier for the same item",
        "Buyers offer more than the item is worth",
        "Mugs always sell for one dollar",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Sahiplik anında ürünün değeri yaklaşık iki katına çıkar.",
    },
    {
      question_tr: "'Non-fungible' ne anlama gelir bu bağlamda?",
      options: [
        "Cannot be eaten",
        "Cannot be exchanged or replaced equivalently",
        "Always digital",
        "Always physical",
      ],
      correct_index: 1,
      type: "vocabulary",
      tr_explanation: "Birbirinin yerine geçemez, eşdeğer sayılmaz.",
    },
    {
      question_tr: "Varsayılan seçeneklerin gücüne dair hangi örnek verilmiştir?",
      options: [
        "Banks setting interest rates",
        "Organ donation programs with automatic enrollment seeing much higher participation",
        "Voting laws",
        "Sports team registration",
      ],
      correct_index: 1,
      type: "factual",
      tr_explanation: "Otomatik kayıt sistemleri katılım oranlarını dramatik biçimde artırır.",
    },
    {
      question_tr: "Yazara göre davranışsal ekonomi içgörüleri nasıl kullanılır?",
      options: [
        "Only for marketing purposes",
        "Only to help governments",
        "Both ethically (better systems and communications) and manipulatively (exploitative digital commerce)",
        "Mostly ignored by industries",
      ],
      correct_index: 2,
      type: "inference",
      tr_explanation: "'The applications cut both ways' — hem etik hem de istismarcı kullanımları var.",
    },
    {
      question_tr: "Metnin ana mesajı nedir?",
      options: [
        "Humans are perfectly rational",
        "Humans are predictably irrational, and understanding these patterns is increasingly essential",
        "Economics is no longer useful",
        "Marketing is unethical",
      ],
      correct_index: 1,
      type: "gist",
      tr_explanation: "Yazar irrasyonalitenin öngörülebilir desenlerini anlamanın önemini vurguluyor.",
    },
  ],
};

// ============================================================
// Article registry
// ============================================================

export const readingArticles: ReadonlyArray<ReadingArticle> = [
  // A1
  article_a1_1,
  article_a1_2,
  article_a1_3,
  // A2
  article_a2_1,
  article_a2_2,
  article_a2_3,
  article_a2_4,
  // B1
  article_b1_1,
  article_b1_2,
  article_b1_3,
  article_b1_4,
  article_b1_5,
  // B2
  article_b2_1,
  article_b2_2,
  article_b2_3,
  article_b2_4,
  article_b2_5,
  // C1
  article_c1_1,
  article_c1_2,
  article_c1_3,
];

export function getReadingArticle(id: string): ReadingArticle | undefined {
  return readingArticles.find((a) => a.id === id);
}

export function getReadingArticlesByLevel(
  level: ReadingArticle["cefrLevel"],
): ReadingArticle[] {
  return readingArticles.filter((a) => a.cefrLevel === level);
}

export function getReadingArticlesByCategory(
  category: ReadingArticle["category"],
): ReadingArticle[] {
  return readingArticles.filter((a) => a.category === category);
}
