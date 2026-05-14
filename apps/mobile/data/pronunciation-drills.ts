// Lafla — Pronunciation drills targeting Turkish speakers' pain points.
//
// Each drill focuses on a sound (or sound pair) that Turkish phonology
// either lacks entirely (e.g. /θ/, /ð/, /w/, /ŋ/) or maps awkwardly
// onto a single Turkish phoneme (e.g. /ɪ/ vs /iː/ both collapsing to
// Turkish "i"). The articulation tips are framed against the default
// Turkish tongue/lip position so learners know WHAT to physically
// change, not just that they're wrong.
//
// Schema mirrors the cafe-lesson style — flat, JSON-shaped, ready to
// ship to the backend later. No runtime LLM; this is static drill data.

export interface MinimalPair {
  word_a: string;
  word_b: string;
  ipa_a: string;
  ipa_b: string;
  tr_meaning_a: string;
  tr_meaning_b: string;
}

export interface ExampleWord {
  word: string;
  ipa: string;
  tr_meaning: string;
}

export interface PracticeSentence {
  sentence: string;
  tr_meaning: string;
}

export interface PronunciationDrill {
  id: string;
  title_tr: string;
  description_tr: string;
  target_sound: string;
  contrast_sound?: string;
  tip_tr: string;
  example_words: ExampleWord[];
  minimal_pairs: MinimalPair[];
  practice_sentences: PracticeSentence[];
  cefrLevel: "A1" | "A2" | "B1" | "B2" | "C1";
}

// ============================================================
// Drill 1 — /θ/ vs /s/ (think vs sink)
// ============================================================
const drill_th_vs_s: PronunciationDrill = {
  id: "pron.th-vs-s",
  title_tr: "Th sesi (think) vs S sesi (sink)",
  description_tr:
    "Türkçe'de /θ/ sesi YOK. Türkler 'think' derken otomatik olarak 's' veya 't' diyor: 'sink' veya 'tink'. İkisi de farklı kelime — anlam değişir. Bu sesi öğrenmek = 100 kelimenin doğru söylenmesi demek.",
  target_sound: "/θ/",
  contrast_sound: "/s/",
  tip_tr:
    "Dilini ÖN dişlerinin ARASINA koy (dilinin ucu hafifçe görünür olmalı). Dilini orada tutarken hafifçe üfle — 'ssss' değil, 'ththth' havalı bir ses. Türkçe 's' söylerken dilin diş ardında kalır; 'th' için dili çıkar.",
  example_words: [
    { word: "think", ipa: "/θɪŋk/", tr_meaning: "düşünmek" },
    { word: "thank", ipa: "/θæŋk/", tr_meaning: "teşekkür etmek" },
    { word: "thing", ipa: "/θɪŋ/", tr_meaning: "şey" },
    { word: "three", ipa: "/θriː/", tr_meaning: "üç" },
    { word: "thirty", ipa: "/ˈθɜːrti/", tr_meaning: "otuz" },
    { word: "thousand", ipa: "/ˈθaʊzənd/", tr_meaning: "bin" },
    { word: "thirsty", ipa: "/ˈθɜːrsti/", tr_meaning: "susamış" },
    { word: "throw", ipa: "/θroʊ/", tr_meaning: "atmak" },
    { word: "thick", ipa: "/θɪk/", tr_meaning: "kalın" },
    { word: "thin", ipa: "/θɪn/", tr_meaning: "ince" },
    { word: "thunder", ipa: "/ˈθʌndər/", tr_meaning: "gök gürültüsü" },
    { word: "theater", ipa: "/ˈθiːətər/", tr_meaning: "tiyatro" },
    { word: "theme", ipa: "/θiːm/", tr_meaning: "tema" },
    { word: "thread", ipa: "/θred/", tr_meaning: "iplik" },
    { word: "thorough", ipa: "/ˈθɜːroʊ/", tr_meaning: "kapsamlı" },
    { word: "math", ipa: "/mæθ/", tr_meaning: "matematik" },
    { word: "bath", ipa: "/bæθ/", tr_meaning: "banyo" },
    { word: "mouth", ipa: "/maʊθ/", tr_meaning: "ağız" },
    { word: "tooth", ipa: "/tuːθ/", tr_meaning: "diş" },
    { word: "birthday", ipa: "/ˈbɜːrθdeɪ/", tr_meaning: "doğum günü" },
  ],
  minimal_pairs: [
    {
      word_a: "think",
      word_b: "sink",
      ipa_a: "/θɪŋk/",
      ipa_b: "/sɪŋk/",
      tr_meaning_a: "düşünmek",
      tr_meaning_b: "lavabo / batmak",
    },
    {
      word_a: "thick",
      word_b: "sick",
      ipa_a: "/θɪk/",
      ipa_b: "/sɪk/",
      tr_meaning_a: "kalın",
      tr_meaning_b: "hasta",
    },
    {
      word_a: "thumb",
      word_b: "sum",
      ipa_a: "/θʌm/",
      ipa_b: "/sʌm/",
      tr_meaning_a: "başparmak",
      tr_meaning_b: "toplam",
    },
    {
      word_a: "thigh",
      word_b: "sigh",
      ipa_a: "/θaɪ/",
      ipa_b: "/saɪ/",
      tr_meaning_a: "uyluk",
      tr_meaning_b: "iç çekiş",
    },
    {
      word_a: "path",
      word_b: "pass",
      ipa_a: "/pæθ/",
      ipa_b: "/pæs/",
      tr_meaning_a: "patika",
      tr_meaning_b: "geçmek",
    },
    {
      word_a: "mouth",
      word_b: "mouse",
      ipa_a: "/maʊθ/",
      ipa_b: "/maʊs/",
      tr_meaning_a: "ağız",
      tr_meaning_b: "fare",
    },
    {
      word_a: "thaw",
      word_b: "saw",
      ipa_a: "/θɔː/",
      ipa_b: "/sɔː/",
      tr_meaning_a: "erimek (buz)",
      tr_meaning_b: "gördü",
    },
    {
      word_a: "thigh",
      word_b: "sigh",
      ipa_a: "/θaɪ/",
      ipa_b: "/saɪ/",
      tr_meaning_a: "uyluk",
      tr_meaning_b: "iç çekiş",
    },
  ],
  practice_sentences: [
    {
      sentence: "I think I need to thank Thomas for the three things.",
      tr_meaning: "Sanırım üç şey için Thomas'a teşekkür etmem gerek.",
    },
    {
      sentence: "Thirty-three thirsty travelers passed through Thursday.",
      tr_meaning: "Otuz üç susamış yolcu perşembe günü geçti.",
    },
    {
      sentence: "My birthday is on the third of the month.",
      tr_meaning: "Doğum günüm ayın üçünde.",
    },
    {
      sentence: "The path through the thick forest was thrilling.",
      tr_meaning: "Sık ormandan geçen patika heyecan vericiydi.",
    },
    {
      sentence: "Both brothers thought the math test was tough.",
      tr_meaning: "İki kardeş de matematik sınavını zor buldu.",
    },
    {
      sentence: "I'd like a bath, a toothbrush, and a thin towel.",
      tr_meaning: "Banyo, diş fırçası ve ince havlu istiyorum.",
    },
    {
      sentence: "Thanks for the thoughtful birthday gift.",
      tr_meaning: "Düşünceli doğum günü hediyesi için teşekkürler.",
    },
  ],
  cefrLevel: "A2",
};

// ============================================================
// Drill 2 — /ð/ vs /z/ (this vs zoo)
// ============================================================
const drill_th_vs_z: PronunciationDrill = {
  id: "pron.th-voiced-vs-z",
  title_tr: "Sesli Th (this) vs Z sesi (zoo)",
  description_tr:
    "/ð/ — 'this, that, the, they' içinde bulunan TİTREŞİMLİ th. Türkler bunu 'd' veya 'z' yapar: 'dis' / 'zis'. İngilizce'nin en sık 10 kelimesinin yarısı bu sesi içerir, dolayısıyla yanlış söylersen her cümle anlaşılmaz olur.",
  target_sound: "/ð/",
  contrast_sound: "/z/",
  tip_tr:
    "/θ/ ile aynı dil pozisyonu (dil ön dişlerin arasında), AMA gırtlağın titriyor. Boğazına elini koy — 'th' titreşimli olmalı (zzzz gibi ama dil DIŞARIDA). 'd' diyorsan dilin damağa değiyor — onu indir, öne ittir.",
  example_words: [
    { word: "this", ipa: "/ðɪs/", tr_meaning: "bu" },
    { word: "that", ipa: "/ðæt/", tr_meaning: "şu / o" },
    { word: "the", ipa: "/ðə/", tr_meaning: "(belirli artikel)" },
    { word: "they", ipa: "/ðeɪ/", tr_meaning: "onlar" },
    { word: "there", ipa: "/ðer/", tr_meaning: "orada" },
    { word: "these", ipa: "/ðiːz/", tr_meaning: "bunlar" },
    { word: "those", ipa: "/ðoʊz/", tr_meaning: "onlar (uzak)" },
    { word: "than", ipa: "/ðæn/", tr_meaning: "-den (kıyas)" },
    { word: "then", ipa: "/ðen/", tr_meaning: "o zaman" },
    { word: "them", ipa: "/ðem/", tr_meaning: "onları" },
    { word: "though", ipa: "/ðoʊ/", tr_meaning: "rağmen" },
    { word: "father", ipa: "/ˈfɑːðər/", tr_meaning: "baba" },
    { word: "mother", ipa: "/ˈmʌðər/", tr_meaning: "anne" },
    { word: "brother", ipa: "/ˈbrʌðər/", tr_meaning: "erkek kardeş" },
    { word: "other", ipa: "/ˈʌðər/", tr_meaning: "diğer" },
    { word: "weather", ipa: "/ˈweðər/", tr_meaning: "hava" },
    { word: "together", ipa: "/təˈɡeðər/", tr_meaning: "birlikte" },
    { word: "rather", ipa: "/ˈræðər/", tr_meaning: "oldukça / daha çok" },
    { word: "breathe", ipa: "/briːð/", tr_meaning: "nefes almak" },
    { word: "smooth", ipa: "/smuːð/", tr_meaning: "pürüzsüz" },
  ],
  minimal_pairs: [
    {
      word_a: "they",
      word_b: "day",
      ipa_a: "/ðeɪ/",
      ipa_b: "/deɪ/",
      tr_meaning_a: "onlar",
      tr_meaning_b: "gün",
    },
    {
      word_a: "then",
      word_b: "den",
      ipa_a: "/ðen/",
      ipa_b: "/den/",
      tr_meaning_a: "o zaman",
      tr_meaning_b: "in (hayvan)",
    },
    {
      word_a: "though",
      word_b: "dough",
      ipa_a: "/ðoʊ/",
      ipa_b: "/doʊ/",
      tr_meaning_a: "rağmen",
      tr_meaning_b: "hamur",
    },
    {
      word_a: "breathe",
      word_b: "breeze",
      ipa_a: "/briːð/",
      ipa_b: "/briːz/",
      tr_meaning_a: "nefes almak",
      tr_meaning_b: "esinti",
    },
    {
      word_a: "clothe",
      word_b: "close",
      ipa_a: "/kloʊð/",
      ipa_b: "/kloʊz/",
      tr_meaning_a: "giydirmek",
      tr_meaning_b: "kapatmak",
    },
    {
      word_a: "writhe",
      word_b: "rise",
      ipa_a: "/raɪð/",
      ipa_b: "/raɪz/",
      tr_meaning_a: "kıvranmak",
      tr_meaning_b: "yükselmek",
    },
    {
      word_a: "lather",
      word_b: "ladder",
      ipa_a: "/ˈlæðər/",
      ipa_b: "/ˈlædər/",
      tr_meaning_a: "köpük",
      tr_meaning_b: "merdiven",
    },
  ],
  practice_sentences: [
    {
      sentence: "This is the other brother of their mother.",
      tr_meaning: "Bu onların annelerinin diğer erkek kardeşi.",
    },
    {
      sentence: "They live together with their father.",
      tr_meaning: "Babalarıyla birlikte yaşıyorlar.",
    },
    {
      sentence: "The weather is smoother than yesterday.",
      tr_meaning: "Hava dünden daha sakin.",
    },
    {
      sentence: "Breathe in, then breathe out, rather slowly.",
      tr_meaning: "Nefes al, sonra nefes ver, oldukça yavaşça.",
    },
    {
      sentence: "These are mine, those are theirs.",
      tr_meaning: "Bunlar benim, onlar onların.",
    },
    {
      sentence: "I'd rather be there with them than here.",
      tr_meaning: "Burada olmaktansa orada onlarla olmayı tercih ederim.",
    },
    {
      sentence: "Although the path was rough, they kept going.",
      tr_meaning: "Yol zor olmasına rağmen devam ettiler.",
    },
  ],
  cefrLevel: "A2",
};

// ============================================================
// Drill 3 — /ɪ/ vs /iː/ (ship vs sheep)
// ============================================================
const drill_ship_vs_sheep: PronunciationDrill = {
  id: "pron.ship-vs-sheep",
  title_tr: "Kısa i (ship) vs Uzun ee (sheep)",
  description_tr:
    "Türkçe'de tek bir 'i' var. İngilizce'de iki tane: kısa /ɪ/ (ship, fit, bin) ve uzun /iː/ (sheep, feet, bean). Türkler ikisini de Türkçe 'i' olarak söylüyor → 'ship' = 'sheep' çıkıyor. Süre VE dilin pozisyonu farklı.",
  target_sound: "/ɪ/",
  contrast_sound: "/iː/",
  tip_tr:
    "/ɪ/ (ship): Çene daha aşağıda, dil DAHA GEVŞEK, dudak rahat. Türkçe 'ı' ile 'i' arasında bir ses. 'I' düşün, ama çabuk ve gevşek. /iː/ (sheep): Dudak HAFİF GERİL (gülümseme), dil yukarıda, ses UZUN. Süre farkı net olsun: ship = kısa, sheep = uzun.",
  example_words: [
    { word: "ship", ipa: "/ʃɪp/", tr_meaning: "gemi" },
    { word: "sheep", ipa: "/ʃiːp/", tr_meaning: "koyun" },
    { word: "fit", ipa: "/fɪt/", tr_meaning: "uymak" },
    { word: "feet", ipa: "/fiːt/", tr_meaning: "ayaklar" },
    { word: "live", ipa: "/lɪv/", tr_meaning: "yaşamak" },
    { word: "leave", ipa: "/liːv/", tr_meaning: "ayrılmak" },
    { word: "bit", ipa: "/bɪt/", tr_meaning: "azıcık" },
    { word: "beat", ipa: "/biːt/", tr_meaning: "yenmek / vurmak" },
    { word: "sit", ipa: "/sɪt/", tr_meaning: "oturmak" },
    { word: "seat", ipa: "/siːt/", tr_meaning: "koltuk" },
    { word: "rich", ipa: "/rɪtʃ/", tr_meaning: "zengin" },
    { word: "reach", ipa: "/riːtʃ/", tr_meaning: "ulaşmak" },
    { word: "his", ipa: "/hɪz/", tr_meaning: "onun" },
    { word: "he's", ipa: "/hiːz/", tr_meaning: "o (-dır)" },
    { word: "fill", ipa: "/fɪl/", tr_meaning: "doldurmak" },
    { word: "feel", ipa: "/fiːl/", tr_meaning: "hissetmek" },
    { word: "still", ipa: "/stɪl/", tr_meaning: "hâlâ" },
    { word: "steel", ipa: "/stiːl/", tr_meaning: "çelik" },
    { word: "chip", ipa: "/tʃɪp/", tr_meaning: "cips / yonga" },
    { word: "cheap", ipa: "/tʃiːp/", tr_meaning: "ucuz" },
  ],
  minimal_pairs: [
    {
      word_a: "ship",
      word_b: "sheep",
      ipa_a: "/ʃɪp/",
      ipa_b: "/ʃiːp/",
      tr_meaning_a: "gemi",
      tr_meaning_b: "koyun",
    },
    {
      word_a: "fit",
      word_b: "feet",
      ipa_a: "/fɪt/",
      ipa_b: "/fiːt/",
      tr_meaning_a: "uymak",
      tr_meaning_b: "ayaklar",
    },
    {
      word_a: "live",
      word_b: "leave",
      ipa_a: "/lɪv/",
      ipa_b: "/liːv/",
      tr_meaning_a: "yaşamak",
      tr_meaning_b: "ayrılmak",
    },
    {
      word_a: "bit",
      word_b: "beat",
      ipa_a: "/bɪt/",
      ipa_b: "/biːt/",
      tr_meaning_a: "azıcık",
      tr_meaning_b: "vurmak",
    },
    {
      word_a: "sit",
      word_b: "seat",
      ipa_a: "/sɪt/",
      ipa_b: "/siːt/",
      tr_meaning_a: "oturmak",
      tr_meaning_b: "koltuk",
    },
    {
      word_a: "chip",
      word_b: "cheap",
      ipa_a: "/tʃɪp/",
      ipa_b: "/tʃiːp/",
      tr_meaning_a: "cips",
      tr_meaning_b: "ucuz",
    },
    {
      word_a: "fill",
      word_b: "feel",
      ipa_a: "/fɪl/",
      ipa_b: "/fiːl/",
      tr_meaning_a: "doldurmak",
      tr_meaning_b: "hissetmek",
    },
    {
      word_a: "rich",
      word_b: "reach",
      ipa_a: "/rɪtʃ/",
      ipa_b: "/riːtʃ/",
      tr_meaning_a: "zengin",
      tr_meaning_b: "ulaşmak",
    },
  ],
  practice_sentences: [
    {
      sentence: "The ship had three sheep on the deck.",
      tr_meaning: "Geminin güvertesinde üç koyun vardı.",
    },
    {
      sentence: "I live here, but I'll leave next week.",
      tr_meaning: "Burada yaşıyorum ama gelecek hafta ayrılacağım.",
    },
    {
      sentence: "Please sit in that seat, it fits your feet.",
      tr_meaning: "Lütfen şu koltuğa otur, ayaklarına uyar.",
    },
    {
      sentence: "He's still rich, and he can still reach the top shelf.",
      tr_meaning: "Hâlâ zengin ve hâlâ üst rafa ulaşabiliyor.",
    },
    {
      sentence: "These chips are cheap and crispy.",
      tr_meaning: "Bu cipsler ucuz ve çıtır.",
    },
    {
      sentence: "Fill the glass, then feel the difference.",
      tr_meaning: "Bardağı doldur, sonra farkı hisset.",
    },
    {
      sentence: "Did you eat? Yes, I just ate a little bit of meat.",
      tr_meaning: "Yedin mi? Evet, biraz et yedim.",
    },
  ],
  cefrLevel: "A1",
};

// ============================================================
// Drill 4 — /ʌ/ vs /æ/ (cut vs cat)
// ============================================================
const drill_cut_vs_cat: PronunciationDrill = {
  id: "pron.cut-vs-cat",
  title_tr: "A-benzeri sesler: cut (a) vs cat (e/a)",
  description_tr:
    "Türkler 'cut, but, fun' kelimelerinin /ʌ/ sesini Türkçe 'a' yapar. 'cat, bat, fan' kelimelerinin /æ/ sesini de Türkçe 'a' yapar. SONUÇ: 'cut' ile 'cat' ayırt edilmez. Aslında iki farklı ses; /ʌ/ = Türk 'a'ya yakın, /æ/ = 'a' ile 'e' arası.",
  target_sound: "/ʌ/",
  contrast_sound: "/æ/",
  tip_tr:
    "/ʌ/ (cut): Türkçe 'a' gibi ama AĞIZ daha az açık, dil ortada. 'kat' der gibi söyle ama daha gevşek. /æ/ (cat): Ağzı geniş aç, dilin ön kısmı aşağıda, dudak YANA doğru gerilir. 'kat' ile 'ket' arası — özellikle 'ke' ile 'ka' arası bir şey. Türkler için zor; bilinçli olarak gülümseyerek 'a' demeyi dene.",
  example_words: [
    { word: "cut", ipa: "/kʌt/", tr_meaning: "kesmek" },
    { word: "cat", ipa: "/kæt/", tr_meaning: "kedi" },
    { word: "but", ipa: "/bʌt/", tr_meaning: "ama" },
    { word: "bat", ipa: "/bæt/", tr_meaning: "yarasa / sopa" },
    { word: "fun", ipa: "/fʌn/", tr_meaning: "eğlence" },
    { word: "fan", ipa: "/fæn/", tr_meaning: "hayran / vantilatör" },
    { word: "luck", ipa: "/lʌk/", tr_meaning: "şans" },
    { word: "lack", ipa: "/læk/", tr_meaning: "eksiklik" },
    { word: "hut", ipa: "/hʌt/", tr_meaning: "kulübe" },
    { word: "hat", ipa: "/hæt/", tr_meaning: "şapka" },
    { word: "sum", ipa: "/sʌm/", tr_meaning: "toplam" },
    { word: "Sam", ipa: "/sæm/", tr_meaning: "Sam (isim)" },
    { word: "rub", ipa: "/rʌb/", tr_meaning: "ovmak" },
    { word: "rabbit", ipa: "/ˈræbɪt/", tr_meaning: "tavşan" },
    { word: "must", ipa: "/mʌst/", tr_meaning: "zorunda" },
    { word: "mast", ipa: "/mæst/", tr_meaning: "direk (gemi)" },
    { word: "uncle", ipa: "/ˈʌŋkəl/", tr_meaning: "amca / dayı" },
    { word: "ankle", ipa: "/ˈæŋkəl/", tr_meaning: "ayak bileği" },
    { word: "stuck", ipa: "/stʌk/", tr_meaning: "sıkışmış" },
    { word: "stack", ipa: "/stæk/", tr_meaning: "yığın" },
  ],
  minimal_pairs: [
    {
      word_a: "cut",
      word_b: "cat",
      ipa_a: "/kʌt/",
      ipa_b: "/kæt/",
      tr_meaning_a: "kesmek",
      tr_meaning_b: "kedi",
    },
    {
      word_a: "but",
      word_b: "bat",
      ipa_a: "/bʌt/",
      ipa_b: "/bæt/",
      tr_meaning_a: "ama",
      tr_meaning_b: "yarasa",
    },
    {
      word_a: "fun",
      word_b: "fan",
      ipa_a: "/fʌn/",
      ipa_b: "/fæn/",
      tr_meaning_a: "eğlence",
      tr_meaning_b: "hayran",
    },
    {
      word_a: "luck",
      word_b: "lack",
      ipa_a: "/lʌk/",
      ipa_b: "/læk/",
      tr_meaning_a: "şans",
      tr_meaning_b: "eksiklik",
    },
    {
      word_a: "hut",
      word_b: "hat",
      ipa_a: "/hʌt/",
      ipa_b: "/hæt/",
      tr_meaning_a: "kulübe",
      tr_meaning_b: "şapka",
    },
    {
      word_a: "uncle",
      word_b: "ankle",
      ipa_a: "/ˈʌŋkəl/",
      ipa_b: "/ˈæŋkəl/",
      tr_meaning_a: "amca",
      tr_meaning_b: "ayak bileği",
    },
    {
      word_a: "stuck",
      word_b: "stack",
      ipa_a: "/stʌk/",
      ipa_b: "/stæk/",
      tr_meaning_a: "sıkışmış",
      tr_meaning_b: "yığın",
    },
  ],
  practice_sentences: [
    {
      sentence: "The cat got stuck in the hut.",
      tr_meaning: "Kedi kulübede sıkıştı.",
    },
    {
      sentence: "My uncle hurt his ankle.",
      tr_meaning: "Amcam ayak bileğini incitti.",
    },
    {
      sentence: "It was fun, but the fan was loud.",
      tr_meaning: "Eğlenceliydi ama vantilatör sesliydi.",
    },
    {
      sentence: "Bad luck — there's a lack of cash.",
      tr_meaning: "Kötü şans — para eksikliği var.",
    },
    {
      sentence: "Sam cut the sum of money in half.",
      tr_meaning: "Sam para miktarını ikiye böldü.",
    },
    {
      sentence: "The rabbit ran under the rug.",
      tr_meaning: "Tavşan halının altına koştu.",
    },
    {
      sentence: "I must wear that black hat.",
      tr_meaning: "O siyah şapkayı takmalıyım.",
    },
  ],
  cefrLevel: "A2",
};

// ============================================================
// Drill 5 — /æ/ vs /e/ (cat vs bed)
// ============================================================
const drill_cat_vs_bed: PronunciationDrill = {
  id: "pron.cat-vs-bed",
  title_tr: "Cat sesi (æ) vs Bed sesi (e)",
  description_tr:
    "Türkçe 'e' sesi İngilizce'nin /e/ sesine yakındır AMA /æ/ farklı. Türkler 'cat' ile 'bed'i ayırt etmekte zorlanır — bazen 'cat' da 'e' gibi söylenir, sonra 'bed' ile karışır. /æ/ daha geniş ve daha açık.",
  target_sound: "/æ/",
  contrast_sound: "/e/",
  tip_tr:
    "/æ/ (cat): Ağzı OLABİLDİĞİNCE geniş aç, dudak yanlara gerilsin (gülümseme şekli). Sanki dişe doktor bakarken 'aa' der gibi. /e/ (bed): Türkçe 'e' ile aynı; çene az aşağıda, dudak rahat. /æ/ DAHA AÇIK, DAHA UZUN. Kuralı: 'cat'te ağzın dağılır, 'bed'de ağzın rahat.",
  example_words: [
    { word: "cat", ipa: "/kæt/", tr_meaning: "kedi" },
    { word: "bed", ipa: "/bed/", tr_meaning: "yatak" },
    { word: "bad", ipa: "/bæd/", tr_meaning: "kötü" },
    { word: "bed", ipa: "/bed/", tr_meaning: "yatak" },
    { word: "sat", ipa: "/sæt/", tr_meaning: "oturdu" },
    { word: "set", ipa: "/set/", tr_meaning: "kurmak / set" },
    { word: "man", ipa: "/mæn/", tr_meaning: "adam" },
    { word: "men", ipa: "/men/", tr_meaning: "adamlar" },
    { word: "pan", ipa: "/pæn/", tr_meaning: "tava" },
    { word: "pen", ipa: "/pen/", tr_meaning: "kalem" },
    { word: "and", ipa: "/ænd/", tr_meaning: "ve" },
    { word: "end", ipa: "/end/", tr_meaning: "son" },
    { word: "had", ipa: "/hæd/", tr_meaning: "vardı" },
    { word: "head", ipa: "/hed/", tr_meaning: "kafa" },
    { word: "axe", ipa: "/æks/", tr_meaning: "balta" },
    { word: "X", ipa: "/eks/", tr_meaning: "X harfi" },
    { word: "thank", ipa: "/θæŋk/", tr_meaning: "teşekkür" },
    { word: "ten", ipa: "/ten/", tr_meaning: "on" },
    { word: "happy", ipa: "/ˈhæpi/", tr_meaning: "mutlu" },
    { word: "heavy", ipa: "/ˈhevi/", tr_meaning: "ağır" },
  ],
  minimal_pairs: [
    {
      word_a: "bad",
      word_b: "bed",
      ipa_a: "/bæd/",
      ipa_b: "/bed/",
      tr_meaning_a: "kötü",
      tr_meaning_b: "yatak",
    },
    {
      word_a: "sat",
      word_b: "set",
      ipa_a: "/sæt/",
      ipa_b: "/set/",
      tr_meaning_a: "oturdu",
      tr_meaning_b: "kurmak",
    },
    {
      word_a: "man",
      word_b: "men",
      ipa_a: "/mæn/",
      ipa_b: "/men/",
      tr_meaning_a: "adam",
      tr_meaning_b: "adamlar",
    },
    {
      word_a: "pan",
      word_b: "pen",
      ipa_a: "/pæn/",
      ipa_b: "/pen/",
      tr_meaning_a: "tava",
      tr_meaning_b: "kalem",
    },
    {
      word_a: "and",
      word_b: "end",
      ipa_a: "/ænd/",
      ipa_b: "/end/",
      tr_meaning_a: "ve",
      tr_meaning_b: "son",
    },
    {
      word_a: "had",
      word_b: "head",
      ipa_a: "/hæd/",
      ipa_b: "/hed/",
      tr_meaning_a: "vardı",
      tr_meaning_b: "kafa",
    },
    {
      word_a: "axe",
      word_b: "X",
      ipa_a: "/æks/",
      ipa_b: "/eks/",
      tr_meaning_a: "balta",
      tr_meaning_b: "X harfi",
    },
    {
      word_a: "track",
      word_b: "trek",
      ipa_a: "/træk/",
      ipa_b: "/trek/",
      tr_meaning_a: "iz / parça",
      tr_meaning_b: "yürüyüş",
    },
  ],
  practice_sentences: [
    {
      sentence: "The man sat on the bed with his pen and pad.",
      tr_meaning: "Adam kalem ve defteriyle yatağa oturdu.",
    },
    {
      sentence: "Ten men had heavy bags.",
      tr_meaning: "On adamın ağır çantaları vardı.",
    },
    {
      sentence: "At the end, that was a bad day.",
      tr_meaning: "Sonunda, kötü bir gündü.",
    },
    {
      sentence: "I'm happy I had a healthy lunch.",
      tr_meaning: "Sağlıklı bir öğle yemeği yediğim için mutluyum.",
    },
    {
      sentence: "Pass the pan, please — not the pen.",
      tr_meaning: "Tavayı uzat, lütfen — kalemi değil.",
    },
    {
      sentence: "Set the cat on the mat next to the bed.",
      tr_meaning: "Kediyi yatağın yanındaki paspasa koy.",
    },
  ],
  cefrLevel: "A1",
};

// ============================================================
// Drill 6 — /ɒ/ vs /ɔː/ vs /əʊ/ (hot, caught, coat)
// ============================================================
const drill_o_sounds: PronunciationDrill = {
  id: "pron.o-sounds",
  title_tr: "Üç O sesi: hot, caught, coat",
  description_tr:
    "Türkçe'de tek bir 'o' var. İngilizce'de üç farklı 'o' tipi: /ɒ/ veya /ɑː/ (hot — kısa, açık), /ɔː/ (caught — daha uzun, yuvarlak), /əʊ/ veya /oʊ/ (coat — diphthong, 'o-u' karışımı). Bunları karıştırmak en sık hatadır.",
  target_sound: "/ɒ/ vs /ɔː/ vs /oʊ/",
  tip_tr:
    "Hot /ɒ/: Ağzı geniş aç, dudak az yuvarlak — Türkçe 'a' ile 'o' arası. Caught /ɔː/: Dudak DAHA YUVARLAK, ses UZUN, 'oo' der gibi ama saf 'u' değil. Coat /oʊ/: BAŞLA 'o' ile, BİTİR 'u' ile — tek hareket: 'oo-uu' kayışı. Türkçe 'o' aslında /oʊ/'a yakın ama Türkler hepsini Türkçe 'o' yapıyor.",
  example_words: [
    { word: "hot", ipa: "/hɒt/", tr_meaning: "sıcak" },
    { word: "stop", ipa: "/stɒp/", tr_meaning: "durmak" },
    { word: "lot", ipa: "/lɒt/", tr_meaning: "çok" },
    { word: "box", ipa: "/bɒks/", tr_meaning: "kutu" },
    { word: "clock", ipa: "/klɒk/", tr_meaning: "saat" },
    { word: "caught", ipa: "/kɔːt/", tr_meaning: "yakaladı" },
    { word: "bought", ipa: "/bɔːt/", tr_meaning: "satın aldı" },
    { word: "thought", ipa: "/θɔːt/", tr_meaning: "düşünce" },
    { word: "talk", ipa: "/tɔːk/", tr_meaning: "konuşmak" },
    { word: "wall", ipa: "/wɔːl/", tr_meaning: "duvar" },
    { word: "law", ipa: "/lɔː/", tr_meaning: "kanun" },
    { word: "ball", ipa: "/bɔːl/", tr_meaning: "top" },
    { word: "coat", ipa: "/koʊt/", tr_meaning: "palto" },
    { word: "boat", ipa: "/boʊt/", tr_meaning: "tekne" },
    { word: "phone", ipa: "/foʊn/", tr_meaning: "telefon" },
    { word: "road", ipa: "/roʊd/", tr_meaning: "yol" },
    { word: "go", ipa: "/ɡoʊ/", tr_meaning: "gitmek" },
    { word: "know", ipa: "/noʊ/", tr_meaning: "bilmek" },
    { word: "show", ipa: "/ʃoʊ/", tr_meaning: "göstermek" },
    { word: "home", ipa: "/hoʊm/", tr_meaning: "ev" },
  ],
  minimal_pairs: [
    {
      word_a: "hot",
      word_b: "hote (hoʊt)",
      ipa_a: "/hɒt/",
      ipa_b: "/hoʊt/",
      tr_meaning_a: "sıcak",
      tr_meaning_b: "(yazım yok, çene açıklığını test)",
    },
    {
      word_a: "cot",
      word_b: "caught",
      ipa_a: "/kɒt/",
      ipa_b: "/kɔːt/",
      tr_meaning_a: "karyola",
      tr_meaning_b: "yakaladı",
    },
    {
      word_a: "cot",
      word_b: "coat",
      ipa_a: "/kɒt/",
      ipa_b: "/koʊt/",
      tr_meaning_a: "karyola",
      tr_meaning_b: "palto",
    },
    {
      word_a: "caught",
      word_b: "coat",
      ipa_a: "/kɔːt/",
      ipa_b: "/koʊt/",
      tr_meaning_a: "yakaladı",
      tr_meaning_b: "palto",
    },
    {
      word_a: "bought",
      word_b: "boat",
      ipa_a: "/bɔːt/",
      ipa_b: "/boʊt/",
      tr_meaning_a: "satın aldı",
      tr_meaning_b: "tekne",
    },
    {
      word_a: "want",
      word_b: "won't",
      ipa_a: "/wɒnt/",
      ipa_b: "/woʊnt/",
      tr_meaning_a: "istemek",
      tr_meaning_b: "yapmayacak",
    },
    {
      word_a: "law",
      word_b: "low",
      ipa_a: "/lɔː/",
      ipa_b: "/loʊ/",
      tr_meaning_a: "kanun",
      tr_meaning_b: "alçak",
    },
  ],
  practice_sentences: [
    {
      sentence: "I bought a coat and a boat last fall.",
      tr_meaning: "Geçen sonbahar bir palto ve bir tekne aldım.",
    },
    {
      sentence: "Don't talk on the phone while driving on the road.",
      tr_meaning: "Yolda araba sürerken telefonda konuşma.",
    },
    {
      sentence: "I thought I caught a cold, but I just have a hot drink.",
      tr_meaning: "Soğuk algınlığına yakalandığımı düşündüm ama sadece sıcak içeceğim var.",
    },
    {
      sentence: "Stop the clock — show me the box.",
      tr_meaning: "Saati durdur — kutuyu göster.",
    },
    {
      sentence: "I won't go home if I don't know the road.",
      tr_meaning: "Yolu bilmiyorsam eve gitmeyeceğim.",
    },
    {
      sentence: "The ball is over the wall, by the long hall.",
      tr_meaning: "Top duvarın üzerinde, uzun koridorun yanında.",
    },
  ],
  cefrLevel: "B1",
};

// ============================================================
// Drill 7 — /v/ vs /w/ (very vs wary)
// ============================================================
const drill_v_vs_w: PronunciationDrill = {
  id: "pron.v-vs-w",
  title_tr: "V sesi (very) vs W sesi (wary) — Türklere ÇOK ZOR",
  description_tr:
    "Türkçe'de /w/ YOK. Türkçe'de 'v' var ama Türkçe 'v' aslında W'ye yakın (dudaksıl) — gerçek İngilizce /v/ daha sertçe dudak-diş. Türkler ya iki sesi de Türkçe 'v' yapar ('very' = 'wery' gibi) ya da hep yanlış tarafa kayar. 'We went very well' demek yerine 'Ve vent wery vell' diyorlar.",
  target_sound: "/v/",
  contrast_sound: "/w/",
  tip_tr:
    "/v/ (very): ÜST DİŞLER ALT DUDAĞA değer, hava aradan üflenir — titreşimli (fff'in titreşimli versiyonu). Türkçe 'v' yumuşak dudaksıl — onu UNUT, ÜST DİŞ kullan. /w/ (wary): DUDAKLAR YUVARLAK ve İLERİDE (öpüşür gibi), DİŞLER karışmaz. 'u' der gibi başla, sonra ünlüye geç. 'wary' = uu-eri.",
  example_words: [
    { word: "very", ipa: "/ˈveri/", tr_meaning: "çok" },
    { word: "wary", ipa: "/ˈweri/", tr_meaning: "temkinli" },
    { word: "vine", ipa: "/vaɪn/", tr_meaning: "asma" },
    { word: "wine", ipa: "/waɪn/", tr_meaning: "şarap" },
    { word: "vest", ipa: "/vest/", tr_meaning: "yelek" },
    { word: "west", ipa: "/west/", tr_meaning: "batı" },
    { word: "vet", ipa: "/vet/", tr_meaning: "veteriner" },
    { word: "wet", ipa: "/wet/", tr_meaning: "ıslak" },
    { word: "veil", ipa: "/veɪl/", tr_meaning: "peçe" },
    { word: "whale", ipa: "/weɪl/", tr_meaning: "balina" },
    { word: "vault", ipa: "/vɔːlt/", tr_meaning: "kasa" },
    { word: "want", ipa: "/wɒnt/", tr_meaning: "istemek" },
    { word: "victory", ipa: "/ˈvɪktəri/", tr_meaning: "zafer" },
    { word: "winter", ipa: "/ˈwɪntər/", tr_meaning: "kış" },
    { word: "village", ipa: "/ˈvɪlɪdʒ/", tr_meaning: "köy" },
    { word: "window", ipa: "/ˈwɪndoʊ/", tr_meaning: "pencere" },
    { word: "voice", ipa: "/vɔɪs/", tr_meaning: "ses" },
    { word: "water", ipa: "/ˈwɔːtər/", tr_meaning: "su" },
    { word: "value", ipa: "/ˈvæljuː/", tr_meaning: "değer" },
    { word: "weather", ipa: "/ˈweðər/", tr_meaning: "hava" },
  ],
  minimal_pairs: [
    {
      word_a: "very",
      word_b: "wary",
      ipa_a: "/ˈveri/",
      ipa_b: "/ˈweri/",
      tr_meaning_a: "çok",
      tr_meaning_b: "temkinli",
    },
    {
      word_a: "vine",
      word_b: "wine",
      ipa_a: "/vaɪn/",
      ipa_b: "/waɪn/",
      tr_meaning_a: "asma",
      tr_meaning_b: "şarap",
    },
    {
      word_a: "vest",
      word_b: "west",
      ipa_a: "/vest/",
      ipa_b: "/west/",
      tr_meaning_a: "yelek",
      tr_meaning_b: "batı",
    },
    {
      word_a: "vet",
      word_b: "wet",
      ipa_a: "/vet/",
      ipa_b: "/wet/",
      tr_meaning_a: "veteriner",
      tr_meaning_b: "ıslak",
    },
    {
      word_a: "veil",
      word_b: "whale",
      ipa_a: "/veɪl/",
      ipa_b: "/weɪl/",
      tr_meaning_a: "peçe",
      tr_meaning_b: "balina",
    },
    {
      word_a: "vail",
      word_b: "wail",
      ipa_a: "/veɪl/",
      ipa_b: "/weɪl/",
      tr_meaning_a: "düşmek (eski)",
      tr_meaning_b: "ağlamak",
    },
    {
      word_a: "verse",
      word_b: "worse",
      ipa_a: "/vɜːrs/",
      ipa_b: "/wɜːrs/",
      tr_meaning_a: "şiir kıtası",
      tr_meaning_b: "daha kötü",
    },
    {
      word_a: "vow",
      word_b: "wow",
      ipa_a: "/vaʊ/",
      ipa_b: "/waʊ/",
      tr_meaning_a: "yemin",
      tr_meaning_b: "vay be",
    },
  ],
  practice_sentences: [
    {
      sentence: "We were very wet in the village.",
      tr_meaning: "Köyde çok ıslaktık.",
    },
    {
      sentence: "The vet warned us about the wild winter weather.",
      tr_meaning: "Veteriner bizi vahşi kış havası hakkında uyardı.",
    },
    {
      sentence: "I want a glass of white wine, not vinegar.",
      tr_meaning: "Bir bardak beyaz şarap istiyorum, sirke değil.",
    },
    {
      sentence: "We watched the whale from the western window.",
      tr_meaning: "Balinayı batı penceresinden izledik.",
    },
    {
      sentence: "Vivian wears a velvet vest in winter.",
      tr_meaning: "Vivian kışın kadife yelek giyer.",
    },
    {
      sentence: "Be wary of the wet vault floor.",
      tr_meaning: "Islak kasa zemininden temkinli ol.",
    },
    {
      sentence: "His voice has a very warm value.",
      tr_meaning: "Sesi çok sıcak bir değere sahip.",
    },
  ],
  cefrLevel: "A2",
};

// ============================================================
// Drill 8 — Final /b/ vs /p/ (tab vs tap)
// ============================================================
const drill_final_b_vs_p: PronunciationDrill = {
  id: "pron.final-b-vs-p",
  title_tr: "Kelime sonunda B vs P (tab vs tap)",
  description_tr:
    "Türkçe'de kelime sonunda /b, d, g, z/ gibi titreşimli sesler genellikle sertleşir ('kitab' → 'kitap'). Bu yüzden Türkler 'tab' diye yazıp 'tap' diye söyler — 'job' = 'jop', 'club' = 'klap'. İngilizce'de bu fark anlam ayırır.",
  target_sound: "/b/ (final)",
  contrast_sound: "/p/ (final)",
  tip_tr:
    "Sonda /b/: GIRTLAK titremesi DEVAM eder, dudaklar kapanır ama hava az. Boğazına el koy — 'tab' derken titreşim hisset. Sonda /p/: DUDAK kapanır, sonra HAVA patlar (aspirasyon), gırtlak titremez. 'tab'da titreşim VAR, 'tap'ta YOK. Türkçe'deki ünsüz sertleşmesini BİLİNÇLİ OLARAK iptal et.",
  example_words: [
    { word: "tab", ipa: "/tæb/", tr_meaning: "sekme / hesap" },
    { word: "tap", ipa: "/tæp/", tr_meaning: "musluk / hafifçe vurmak" },
    { word: "job", ipa: "/dʒɒb/", tr_meaning: "iş" },
    { word: "rob", ipa: "/rɒb/", tr_meaning: "soymak" },
    { word: "club", ipa: "/klʌb/", tr_meaning: "kulüp" },
    { word: "cab", ipa: "/kæb/", tr_meaning: "taksi" },
    { word: "cap", ipa: "/kæp/", tr_meaning: "şapka" },
    { word: "lab", ipa: "/læb/", tr_meaning: "laboratuvar" },
    { word: "lap", ipa: "/læp/", tr_meaning: "kucak / tur" },
    { word: "mob", ipa: "/mɒb/", tr_meaning: "kalabalık" },
    { word: "mop", ipa: "/mɒp/", tr_meaning: "paspas" },
    { word: "pub", ipa: "/pʌb/", tr_meaning: "bar" },
    { word: "pup", ipa: "/pʌp/", tr_meaning: "yavru köpek" },
    { word: "rib", ipa: "/rɪb/", tr_meaning: "kaburga" },
    { word: "rip", ipa: "/rɪp/", tr_meaning: "yırtmak" },
    { word: "robe", ipa: "/roʊb/", tr_meaning: "bornoz" },
    { word: "rope", ipa: "/roʊp/", tr_meaning: "ip" },
    { word: "globe", ipa: "/ɡloʊb/", tr_meaning: "küre" },
    { word: "describe", ipa: "/dɪˈskraɪb/", tr_meaning: "betimlemek" },
    { word: "absorb", ipa: "/əbˈzɔːrb/", tr_meaning: "emmek" },
  ],
  minimal_pairs: [
    {
      word_a: "tab",
      word_b: "tap",
      ipa_a: "/tæb/",
      ipa_b: "/tæp/",
      tr_meaning_a: "sekme",
      tr_meaning_b: "musluk",
    },
    {
      word_a: "cab",
      word_b: "cap",
      ipa_a: "/kæb/",
      ipa_b: "/kæp/",
      tr_meaning_a: "taksi",
      tr_meaning_b: "şapka",
    },
    {
      word_a: "lab",
      word_b: "lap",
      ipa_a: "/læb/",
      ipa_b: "/læp/",
      tr_meaning_a: "laboratuvar",
      tr_meaning_b: "kucak",
    },
    {
      word_a: "mob",
      word_b: "mop",
      ipa_a: "/mɒb/",
      ipa_b: "/mɒp/",
      tr_meaning_a: "kalabalık",
      tr_meaning_b: "paspas",
    },
    {
      word_a: "pub",
      word_b: "pup",
      ipa_a: "/pʌb/",
      ipa_b: "/pʌp/",
      tr_meaning_a: "bar",
      tr_meaning_b: "yavru köpek",
    },
    {
      word_a: "rib",
      word_b: "rip",
      ipa_a: "/rɪb/",
      ipa_b: "/rɪp/",
      tr_meaning_a: "kaburga",
      tr_meaning_b: "yırtmak",
    },
    {
      word_a: "robe",
      word_b: "rope",
      ipa_a: "/roʊb/",
      ipa_b: "/roʊp/",
      tr_meaning_a: "bornoz",
      tr_meaning_b: "ip",
    },
    {
      word_a: "cub",
      word_b: "cup",
      ipa_a: "/kʌb/",
      ipa_b: "/kʌp/",
      tr_meaning_a: "yavru (hayvan)",
      tr_meaning_b: "fincan",
    },
  ],
  practice_sentences: [
    {
      sentence: "I'll grab a cab to the lab.",
      tr_meaning: "Laboratuvara bir taksi tutacağım.",
    },
    {
      sentence: "Put the cap on the tab, then pay the bill.",
      tr_meaning: "Şapkayı sekmeye koy, sonra hesabı öde.",
    },
    {
      sentence: "The pup is sleeping in the pub.",
      tr_meaning: "Yavru köpek barda uyuyor.",
    },
    {
      sentence: "Describe your job to the club members.",
      tr_meaning: "İşini kulüp üyelerine anlat.",
    },
    {
      sentence: "Don't rip the rib — it's still on the plate.",
      tr_meaning: "Kaburgayı yırtma — hâlâ tabakta.",
    },
    {
      sentence: "Grab the rope and pull, please.",
      tr_meaning: "İpi yakala ve çek, lütfen.",
    },
    {
      sentence: "She wore a white robe to the club.",
      tr_meaning: "Kulübe beyaz bornoz giyerek gitti.",
    },
  ],
  cefrLevel: "B1",
};

// ============================================================
// Drill 9 — American flapped /t/ ("water", "letter")
// ============================================================
const drill_flap_t: PronunciationDrill = {
  id: "pron.flap-t-american",
  title_tr: "Amerikan T'si: water = 'wadder', letter = 'ledder'",
  description_tr:
    "Amerikan İngilizcesinde iki ünlü arasındaki /t/ yumuşar — neredeyse 'd' veya hızlı bir 'r' gibi (flap). 'Water' = 'wader', 'butter' = 'budder'. Türkler net 'T' söyleyince Amerikan kulağa garip gelir. Britanya'da net /t/ kalır. İkisini de bil.",
  target_sound: "/t/ → [ɾ] (flap)",
  tip_tr:
    "Sadece İKİ ÜNLÜ ARASINDA olur (water, better, letter, city, party). Dilin ucuyla damağa BİR KEZ hızlıca dokun (Türkçe 'r' gibi — 'ara' der gibi). Önemli: kelime başındaki /t/ (tea, time) flap OLMAZ — net 't' kalır. Sadece ortada, vurgusuz hecede.",
  example_words: [
    { word: "water", ipa: "/ˈwɔːɾər/", tr_meaning: "su" },
    { word: "better", ipa: "/ˈbeɾər/", tr_meaning: "daha iyi" },
    { word: "letter", ipa: "/ˈleɾər/", tr_meaning: "mektup / harf" },
    { word: "butter", ipa: "/ˈbʌɾər/", tr_meaning: "tereyağı" },
    { word: "city", ipa: "/ˈsɪɾi/", tr_meaning: "şehir" },
    { word: "pretty", ipa: "/ˈprɪɾi/", tr_meaning: "güzel / oldukça" },
    { word: "party", ipa: "/ˈpɑːrɾi/", tr_meaning: "parti" },
    { word: "thirty", ipa: "/ˈθɜːrɾi/", tr_meaning: "otuz" },
    { word: "Italy", ipa: "/ˈɪɾəli/", tr_meaning: "İtalya" },
    { word: "matter", ipa: "/ˈmæɾər/", tr_meaning: "mesele" },
    { word: "data", ipa: "/ˈdæɾə/", tr_meaning: "veri" },
    { word: "later", ipa: "/ˈleɪɾər/", tr_meaning: "sonra" },
    { word: "writer", ipa: "/ˈraɪɾər/", tr_meaning: "yazar" },
    { word: "metal", ipa: "/ˈmeɾəl/", tr_meaning: "metal" },
    { word: "bottle", ipa: "/ˈbɒɾəl/", tr_meaning: "şişe" },
    { word: "little", ipa: "/ˈlɪɾəl/", tr_meaning: "küçük" },
    { word: "atom", ipa: "/ˈæɾəm/", tr_meaning: "atom" },
    { word: "photo", ipa: "/ˈfoʊɾoʊ/", tr_meaning: "fotoğraf" },
    { word: "auto", ipa: "/ˈɔːɾoʊ/", tr_meaning: "otomatik" },
    { word: "Saturday", ipa: "/ˈsæɾərdeɪ/", tr_meaning: "Cumartesi" },
  ],
  minimal_pairs: [
    {
      word_a: "writer",
      word_b: "rider",
      ipa_a: "/ˈraɪɾər/",
      ipa_b: "/ˈraɪdər/",
      tr_meaning_a: "yazar",
      tr_meaning_b: "binici",
    },
    {
      word_a: "latter",
      word_b: "ladder",
      ipa_a: "/ˈlæɾər/",
      ipa_b: "/ˈlædər/",
      tr_meaning_a: "ikincisi",
      tr_meaning_b: "merdiven",
    },
    {
      word_a: "metal",
      word_b: "medal",
      ipa_a: "/ˈmeɾəl/",
      ipa_b: "/ˈmedəl/",
      tr_meaning_a: "metal",
      tr_meaning_b: "madalya",
    },
    {
      word_a: "atom",
      word_b: "Adam",
      ipa_a: "/ˈæɾəm/",
      ipa_b: "/ˈædəm/",
      tr_meaning_a: "atom",
      tr_meaning_b: "Adam (isim)",
    },
  ],
  practice_sentences: [
    {
      sentence: "I'd like a bottle of water, a little later.",
      tr_meaning: "Biraz sonra bir şişe su istiyorum.",
    },
    {
      sentence: "Better get the butter at the city store.",
      tr_meaning: "Tereyağını şehirdeki dükkândan alsan iyi olur.",
    },
    {
      sentence: "The writer wrote a pretty letter on Saturday.",
      tr_meaning: "Yazar Cumartesi günü güzel bir mektup yazdı.",
    },
    {
      sentence: "It doesn't matter — the data is in Italy.",
      tr_meaning: "Önemi yok — veri İtalya'da.",
    },
    {
      sentence: "Thirty people are at the party in the city.",
      tr_meaning: "Şehirdeki partide otuz kişi var.",
    },
    {
      sentence: "Take a photo of the metal bottle later.",
      tr_meaning: "Daha sonra metal şişenin fotoğrafını çek.",
    },
  ],
  cefrLevel: "B1",
};

// ============================================================
// Drill 10 — Light /l/ vs Dark /ɫ/ (leaf vs feel)
// ============================================================
const drill_light_vs_dark_l: PronunciationDrill = {
  id: "pron.light-vs-dark-l",
  title_tr: "Açık L (leaf) vs Kalın L (feel)",
  description_tr:
    "İngilizce'de iki tip /l/ var: açık /l/ (kelime başında — leaf, like, love) ve kalın /ɫ/ (kelime sonunda — feel, all, cool). Türkçe'de de ince/kalın l var ('lale' vs 'oldu'), ama dağılımı farklı. Türkler 'milk' derken 'milık' veya 'milk' (Türkçe ince l) yapıyor — kulağa yabancı geliyor.",
  target_sound: "/l/ vs /ɫ/",
  tip_tr:
    "Açık /l/: Dilin ucu üst dişlerin ARKASINA değer, dil önde, ince ses. 'Lale' der gibi — Türkçe 'l' ile aynı. Kalın /ɫ/: Dil GERİYE çekilir, dil arkası YUKARI kalkar — ses adeta 'ulı/oo' tonu alır. 'Feel' = 'fiyul' gibi başla. 'Milk' = 'miyulk'. İngiliz hocalar buna 'velar l' der.",
  example_words: [
    { word: "leaf", ipa: "/liːf/", tr_meaning: "yaprak" },
    { word: "light", ipa: "/laɪt/", tr_meaning: "ışık / hafif" },
    { word: "love", ipa: "/lʌv/", tr_meaning: "sevgi" },
    { word: "lemon", ipa: "/ˈlemən/", tr_meaning: "limon" },
    { word: "like", ipa: "/laɪk/", tr_meaning: "beğenmek / gibi" },
    { word: "lucky", ipa: "/ˈlʌki/", tr_meaning: "şanslı" },
    { word: "lonely", ipa: "/ˈloʊnli/", tr_meaning: "yalnız" },
    { word: "feel", ipa: "/fiːɫ/", tr_meaning: "hissetmek" },
    { word: "fall", ipa: "/fɔːɫ/", tr_meaning: "düşmek" },
    { word: "all", ipa: "/ɔːɫ/", tr_meaning: "hepsi" },
    { word: "cool", ipa: "/kuːɫ/", tr_meaning: "serin / havalı" },
    { word: "school", ipa: "/skuːɫ/", tr_meaning: "okul" },
    { word: "milk", ipa: "/mɪɫk/", tr_meaning: "süt" },
    { word: "tall", ipa: "/tɔːɫ/", tr_meaning: "uzun (boy)" },
    { word: "well", ipa: "/weɫ/", tr_meaning: "iyi / kuyu" },
    { word: "people", ipa: "/ˈpiːpəɫ/", tr_meaning: "insanlar" },
    { word: "table", ipa: "/ˈteɪbəɫ/", tr_meaning: "masa" },
    { word: "apple", ipa: "/ˈæpəɫ/", tr_meaning: "elma" },
    { word: "global", ipa: "/ˈɡloʊbəɫ/", tr_meaning: "küresel" },
    { word: "little", ipa: "/ˈlɪɾəɫ/", tr_meaning: "küçük" },
  ],
  minimal_pairs: [
    {
      word_a: "leaf",
      word_b: "feel",
      ipa_a: "/liːf/",
      ipa_b: "/fiːɫ/",
      tr_meaning_a: "yaprak (açık l)",
      tr_meaning_b: "hissetmek (kalın l)",
    },
    {
      word_a: "lit",
      word_b: "till",
      ipa_a: "/lɪt/",
      ipa_b: "/tɪɫ/",
      tr_meaning_a: "yaktı",
      tr_meaning_b: "kadar",
    },
    {
      word_a: "lap",
      word_b: "pal",
      ipa_a: "/læp/",
      ipa_b: "/pæɫ/",
      tr_meaning_a: "kucak",
      tr_meaning_b: "arkadaş",
    },
    {
      word_a: "love",
      word_b: "full",
      ipa_a: "/lʌv/",
      ipa_b: "/fʊɫ/",
      tr_meaning_a: "sevgi",
      tr_meaning_b: "dolu",
    },
  ],
  practice_sentences: [
    {
      sentence: "I'll feel lucky if I find a lemon at school.",
      tr_meaning: "Okulda limon bulursam şanslı hissedeceğim.",
    },
    {
      sentence: "All the little kids love cold milk.",
      tr_meaning: "Bütün küçük çocuklar soğuk sütü sever.",
    },
    {
      sentence: "Tall people fall on the slippery floor.",
      tr_meaning: "Uzun insanlar kaygan zeminde düşer.",
    },
    {
      sentence: "The apple is on the table in the hall.",
      tr_meaning: "Elma koridordaki masanın üzerinde.",
    },
    {
      sentence: "I like the leaf, but I feel like leaving.",
      tr_meaning: "Yaprağı seviyorum ama ayrılmak istiyorum.",
    },
    {
      sentence: "Well, we'll call all our pals later.",
      tr_meaning: "Pekala, tüm arkadaşlarımızı sonra arayacağız.",
    },
  ],
  cefrLevel: "B1",
};

// ============================================================
// Drill 11 — /ŋ/ "sing"
// ============================================================
const drill_ng: PronunciationDrill = {
  id: "pron.ng-sing",
  title_tr: "Burundan ses: -ng (sing, running)",
  description_tr:
    "Türkçe'de /ŋ/ YOK. Türkler 'sing' derken 'sing' (net 'g') veya 'sin' (g düşür) der. Doğrusu: dilin arkası damağa değer, hava BURUNDAN çıkar, AMA 'g' sesi YOK. 'Running' = 'runnin̩' (g sesi yok, sadece nazal). Bu Amerikan/İngiliz konuşmasının her cümlesinde var.",
  target_sound: "/ŋ/",
  tip_tr:
    "Dilinin ARKASI yumuşak damağa yapışır (Türkçe 'k' der gibi), ama AĞZIN değil BURUNUN açık. 'm' burundan çıkar, 'n' burundan çıkar, /ŋ/ de burundan çıkar — sadece dil daha geride. ÖNEMLİ: -ng sonunda 'g' DUYULMAZ — 'sing' = 'siñ' (ñ İspanyolca tilde gibi düşün). Sadece -ng + ünlü ('finger' = 'fing-ger') olduğunda g duyulur.",
  example_words: [
    { word: "sing", ipa: "/sɪŋ/", tr_meaning: "şarkı söylemek" },
    { word: "king", ipa: "/kɪŋ/", tr_meaning: "kral" },
    { word: "ring", ipa: "/rɪŋ/", tr_meaning: "yüzük / zil" },
    { word: "thing", ipa: "/θɪŋ/", tr_meaning: "şey" },
    { word: "long", ipa: "/lɔːŋ/", tr_meaning: "uzun" },
    { word: "young", ipa: "/jʌŋ/", tr_meaning: "genç" },
    { word: "song", ipa: "/sɔːŋ/", tr_meaning: "şarkı" },
    { word: "wrong", ipa: "/rɔːŋ/", tr_meaning: "yanlış" },
    { word: "strong", ipa: "/strɔːŋ/", tr_meaning: "güçlü" },
    { word: "morning", ipa: "/ˈmɔːrnɪŋ/", tr_meaning: "sabah" },
    { word: "evening", ipa: "/ˈiːvnɪŋ/", tr_meaning: "akşam" },
    { word: "running", ipa: "/ˈrʌnɪŋ/", tr_meaning: "koşmak (-ing)" },
    { word: "going", ipa: "/ˈɡoʊɪŋ/", tr_meaning: "gitmek (-ing)" },
    { word: "swimming", ipa: "/ˈswɪmɪŋ/", tr_meaning: "yüzmek (-ing)" },
    { word: "amazing", ipa: "/əˈmeɪzɪŋ/", tr_meaning: "harika" },
    { word: "shopping", ipa: "/ˈʃɒpɪŋ/", tr_meaning: "alışveriş" },
    { word: "anything", ipa: "/ˈeniθɪŋ/", tr_meaning: "herhangi bir şey" },
    { word: "nothing", ipa: "/ˈnʌθɪŋ/", tr_meaning: "hiçbir şey" },
    { word: "everything", ipa: "/ˈevriθɪŋ/", tr_meaning: "her şey" },
    { word: "tongue", ipa: "/tʌŋ/", tr_meaning: "dil (organ)" },
  ],
  minimal_pairs: [
    {
      word_a: "sin",
      word_b: "sing",
      ipa_a: "/sɪn/",
      ipa_b: "/sɪŋ/",
      tr_meaning_a: "günah",
      tr_meaning_b: "şarkı söylemek",
    },
    {
      word_a: "thin",
      word_b: "thing",
      ipa_a: "/θɪn/",
      ipa_b: "/θɪŋ/",
      tr_meaning_a: "ince",
      tr_meaning_b: "şey",
    },
    {
      word_a: "ban",
      word_b: "bang",
      ipa_a: "/bæn/",
      ipa_b: "/bæŋ/",
      tr_meaning_a: "yasak",
      tr_meaning_b: "patlama",
    },
    {
      word_a: "ran",
      word_b: "rang",
      ipa_a: "/ræn/",
      ipa_b: "/ræŋ/",
      tr_meaning_a: "koştu",
      tr_meaning_b: "çaldı (zil)",
    },
    {
      word_a: "ton",
      word_b: "tongue",
      ipa_a: "/tʌn/",
      ipa_b: "/tʌŋ/",
      tr_meaning_a: "ton",
      tr_meaning_b: "dil (organ)",
    },
    {
      word_a: "win",
      word_b: "wing",
      ipa_a: "/wɪn/",
      ipa_b: "/wɪŋ/",
      tr_meaning_a: "kazanmak",
      tr_meaning_b: "kanat",
    },
  ],
  practice_sentences: [
    {
      sentence: "The young king is singing a long song.",
      tr_meaning: "Genç kral uzun bir şarkı söylüyor.",
    },
    {
      sentence: "I'm running in the morning and swimming in the evening.",
      tr_meaning: "Sabah koşuyorum, akşam yüzüyorum.",
    },
    {
      sentence: "Nothing's wrong — everything is amazing.",
      tr_meaning: "Hiçbir şey yanlış değil — her şey harika.",
    },
    {
      sentence: "She's bringing the ring this evening.",
      tr_meaning: "Yüzüğü bu akşam getiriyor.",
    },
    {
      sentence: "He's strong, young, and is going shopping.",
      tr_meaning: "Güçlü, genç ve alışverişe gidiyor.",
    },
    {
      sentence: "I'm thinking about anything except working.",
      tr_meaning: "Çalışmak dışında her şeyi düşünüyorum.",
    },
  ],
  cefrLevel: "A2",
};

// ============================================================
// Drill 12 — Word stress in 2-syllable noun/verb pairs
// ============================================================
const drill_word_stress: PronunciationDrill = {
  id: "pron.word-stress-noun-verb",
  title_tr: "Kelime vurgusu: REcord (isim) vs reCORD (fiil)",
  description_tr:
    "İngilizce'de aynı yazılışlı çoğu kelime, vurguya göre isim mi yoksa fiil mi olduğunu belirler. İsim: vurgu BAŞTA (REcord). Fiil: vurgu SONDA (reCORD). Türkler her heceyi eşit söylediği için cinsiyet karışıyor. Doğal İngilizce konuşmanın temel kuralı.",
  target_sound: "vurgu (stress)",
  tip_tr:
    "Vurgulu hece: DAHA UZUN, DAHA YÜKSEK, DAHA YÜKSEK SES. Vurgusuz hece: KISA, SÖNÜK (genelde 'schwa' /ə/ olur). Türkçe vurgu genelde sondadır (eşit ve hafif). İngilizce'de fark net — vurgulu heceyi sanki ALTINI ÇİZER gibi söyle. REcord = 'REK-ırd'. reCORD = 'rı-KORD'.",
  example_words: [
    { word: "record (n.)", ipa: "/ˈrekərd/", tr_meaning: "kayıt (isim)" },
    { word: "record (v.)", ipa: "/rɪˈkɔːrd/", tr_meaning: "kaydetmek (fiil)" },
    { word: "present (n.)", ipa: "/ˈprezənt/", tr_meaning: "hediye (isim)" },
    { word: "present (v.)", ipa: "/prɪˈzent/", tr_meaning: "sunmak (fiil)" },
    { word: "object (n.)", ipa: "/ˈɒbdʒɪkt/", tr_meaning: "nesne (isim)" },
    { word: "object (v.)", ipa: "/əbˈdʒekt/", tr_meaning: "itiraz etmek (fiil)" },
    { word: "permit (n.)", ipa: "/ˈpɜːrmɪt/", tr_meaning: "izin belgesi" },
    { word: "permit (v.)", ipa: "/pərˈmɪt/", tr_meaning: "izin vermek" },
    { word: "import (n.)", ipa: "/ˈɪmpɔːrt/", tr_meaning: "ithalat" },
    { word: "import (v.)", ipa: "/ɪmˈpɔːrt/", tr_meaning: "ithal etmek" },
    { word: "export (n.)", ipa: "/ˈekspɔːrt/", tr_meaning: "ihracat" },
    { word: "export (v.)", ipa: "/ɪkˈspɔːrt/", tr_meaning: "ihraç etmek" },
    { word: "conflict (n.)", ipa: "/ˈkɒnflɪkt/", tr_meaning: "çatışma" },
    { word: "conflict (v.)", ipa: "/kənˈflɪkt/", tr_meaning: "çatışmak" },
    { word: "contract (n.)", ipa: "/ˈkɒntrækt/", tr_meaning: "sözleşme" },
    { word: "contract (v.)", ipa: "/kənˈtrækt/", tr_meaning: "büzülmek" },
    { word: "increase (n.)", ipa: "/ˈɪnkriːs/", tr_meaning: "artış" },
    { word: "increase (v.)", ipa: "/ɪnˈkriːs/", tr_meaning: "artırmak" },
    { word: "produce (n.)", ipa: "/ˈproʊduːs/", tr_meaning: "ürün (tarım)" },
    { word: "produce (v.)", ipa: "/prəˈduːs/", tr_meaning: "üretmek" },
  ],
  minimal_pairs: [
    {
      word_a: "REcord (n.)",
      word_b: "reCORD (v.)",
      ipa_a: "/ˈrekərd/",
      ipa_b: "/rɪˈkɔːrd/",
      tr_meaning_a: "kayıt",
      tr_meaning_b: "kaydetmek",
    },
    {
      word_a: "PREsent (n.)",
      word_b: "preSENT (v.)",
      ipa_a: "/ˈprezənt/",
      ipa_b: "/prɪˈzent/",
      tr_meaning_a: "hediye",
      tr_meaning_b: "sunmak",
    },
    {
      word_a: "OBject (n.)",
      word_b: "obJECT (v.)",
      ipa_a: "/ˈɒbdʒɪkt/",
      ipa_b: "/əbˈdʒekt/",
      tr_meaning_a: "nesne",
      tr_meaning_b: "itiraz etmek",
    },
    {
      word_a: "INcrease (n.)",
      word_b: "inCREASE (v.)",
      ipa_a: "/ˈɪnkriːs/",
      ipa_b: "/ɪnˈkriːs/",
      tr_meaning_a: "artış",
      tr_meaning_b: "artırmak",
    },
    {
      word_a: "CONtract (n.)",
      word_b: "conTRACT (v.)",
      ipa_a: "/ˈkɒntrækt/",
      ipa_b: "/kənˈtrækt/",
      tr_meaning_a: "sözleşme",
      tr_meaning_b: "büzülmek",
    },
    {
      word_a: "IMport (n.)",
      word_b: "imPORT (v.)",
      ipa_a: "/ˈɪmpɔːrt/",
      ipa_b: "/ɪmˈpɔːrt/",
      tr_meaning_a: "ithalat",
      tr_meaning_b: "ithal etmek",
    },
  ],
  practice_sentences: [
    {
      sentence: "I want to reCORD a new REcord this year.",
      tr_meaning: "Bu yıl yeni bir kayıt kaydetmek istiyorum.",
    },
    {
      sentence: "She will preSENT a PREsent at the meeting.",
      tr_meaning: "Toplantıda bir hediye sunacak.",
    },
    {
      sentence: "I obJECT to that OBject on the table.",
      tr_meaning: "Masadaki o nesneye itiraz ediyorum.",
    },
    {
      sentence: "We need to inCREASE the INcrease.",
      tr_meaning: "Artışı artırmamız gerek.",
    },
    {
      sentence: "They imPORT cheap IMports from abroad.",
      tr_meaning: "Yurt dışından ucuz ithal mal ithal ediyorlar.",
    },
    {
      sentence: "Our CONtract says we can conTRACT the work.",
      tr_meaning: "Sözleşmemiz işi azaltabileceğimizi söylüyor.",
    },
  ],
  cefrLevel: "B2",
};

// ============================================================
// Drill 13 — Sentence stress (content vs function words)
// ============================================================
const drill_sentence_stress: PronunciationDrill = {
  id: "pron.sentence-stress",
  title_tr: "Cümle vurgusu: İçerik vs yardımcı kelimeler",
  description_tr:
    "İngilizce bir 'stress-timed' dil. Yani ÖNEMLİ kelimeler (isim, fiil, sıfat) UZUN ve YÜKSEK söylenir; yardımcı kelimeler (the, of, to, is, a, do) HIZLI VE SÖNÜK geçer. Türkçe 'syllable-timed'dir — her hece eşit. Bu yüzden Türkler İngilizce'yi 'robot gibi' konuşur.",
  target_sound: "ritim",
  tip_tr:
    "İçerik kelimeleri (NOUN, VERB, ADJECTIVE, ADVERB) — VURGULU, NET. Yardımcı kelimeler (a, the, of, to, do, is, are, can, will, am) — ZAYIF FORM, schwa /ə/ ile. Örnek: 'I CAN do it' — 'can' = /kən/. 'I WANT to GO' — 'to' = /tə/. Yardımcı kelimeleri yuvarla, yutmaya yakın söyle, içerik kelimelerini öne çıkar.",
  example_words: [
    { word: "can (weak)", ipa: "/kən/", tr_meaning: "yapabilir (yardımcı)" },
    { word: "and (weak)", ipa: "/ən/", tr_meaning: "ve (yardımcı)" },
    { word: "of (weak)", ipa: "/əv/", tr_meaning: "-in (yardımcı)" },
    { word: "to (weak)", ipa: "/tə/", tr_meaning: "-e (yardımcı)" },
    { word: "for (weak)", ipa: "/fər/", tr_meaning: "için (yardımcı)" },
    { word: "the (weak)", ipa: "/ðə/", tr_meaning: "(artikel, yardımcı)" },
    { word: "a (weak)", ipa: "/ə/", tr_meaning: "bir (yardımcı)" },
    { word: "are (weak)", ipa: "/ər/", tr_meaning: "-sin/-iz (yardımcı)" },
    { word: "was (weak)", ipa: "/wəz/", tr_meaning: "idi (yardımcı)" },
    { word: "have (weak)", ipa: "/həv/", tr_meaning: "sahip (yardımcı)" },
    { word: "MUST (content)", ipa: "/mʌst/", tr_meaning: "zorunda" },
    { word: "GO (content)", ipa: "/ɡoʊ/", tr_meaning: "gitmek" },
    { word: "BIG (content)", ipa: "/bɪɡ/", tr_meaning: "büyük" },
    { word: "HAPPY (content)", ipa: "/ˈhæpi/", tr_meaning: "mutlu" },
    { word: "QUICKLY (content)", ipa: "/ˈkwɪkli/", tr_meaning: "çabuk" },
  ],
  minimal_pairs: [
    {
      word_a: "can (yardımcı)",
      word_b: "CAN (vurgulu)",
      ipa_a: "/kən/",
      ipa_b: "/kæn/",
      tr_meaning_a: "yapabilirim (sönük)",
      tr_meaning_b: "Yapabilirim! (vurgulu)",
    },
    {
      word_a: "for (yardımcı)",
      word_b: "FOUR (vurgulu)",
      ipa_a: "/fər/",
      ipa_b: "/fɔːr/",
      tr_meaning_a: "için",
      tr_meaning_b: "dört",
    },
    {
      word_a: "to (yardımcı)",
      word_b: "TWO (vurgulu)",
      ipa_a: "/tə/",
      ipa_b: "/tuː/",
      tr_meaning_a: "-e",
      tr_meaning_b: "iki",
    },
    {
      word_a: "and (yardımcı)",
      word_b: "AND (vurgulu)",
      ipa_a: "/ən/",
      ipa_b: "/ænd/",
      tr_meaning_a: "ve (zayıf)",
      tr_meaning_b: "VE! (kontrast)",
    },
  ],
  practice_sentences: [
    {
      sentence: "I WANT to GO to the STORE for some BREAD.",
      tr_meaning: "BÜYÜK kelimeler: WANT, GO, STORE, BREAD vurgulu. Diğerleri sönük.",
    },
    {
      sentence: "She CAN'T COME beCAUSE she's TIRED.",
      tr_meaning: "CAN'T, COME, TIRED vurgulu. 'she' ve 'because' sönük.",
    },
    {
      sentence: "I'd LOVE a CUP of COFFEE with MILK.",
      tr_meaning: "LOVE, CUP, COFFEE, MILK vurgulu. 'a', 'of', 'with' sönük.",
    },
    {
      sentence: "We're GOING to BUY a NEW CAR neXT WEEK.",
      tr_meaning: "GOING, BUY, NEW, CAR, WEEK vurgulu. Schwa: 'to', 'a'.",
    },
    {
      sentence: "He SHOULD've TOLD me beFORE the MEETING.",
      tr_meaning: "SHOULD've, TOLD, BEFORE, MEETING vurgulu. 'should've' = 'shudv'.",
    },
    {
      sentence: "I CAN /kən/ help, but I CAN'T /kænt/ stay long.",
      tr_meaning: "Olumlu 'can' sönük, olumsuz 'can't' vurgulu — fark burada.",
    },
  ],
  cefrLevel: "B2",
};

// ============================================================
// Drill 14 — Linking & reductions ("wanna", "gonna", "didja")
// ============================================================
const drill_linking: PronunciationDrill = {
  id: "pron.linking-reductions",
  title_tr: "Bağlama ve indirgeme: 'wanna', 'gonna', 'didja'",
  description_tr:
    "Doğal İngilizce'de kelimeler birbirine yapışır. 'Want to' = 'wanna', 'going to' = 'gonna', 'did you' = 'didja', 'got to' = 'gotta'. Türkler her kelimeyi ayrı söyleyince 'kitap gibi' duyuluyor. Filmleri, dizileri anlamak için bu indirgemeleri tanımak şart.",
  target_sound: "linking / reduction",
  tip_tr:
    "Bunlar SADECE konuşmada — yazıda her zaman 'want to' yaz. Konuşmada DUDAKLARINI tembelleştir: 'want to' = ağız aynı pozisyondan 'want' ve 'to'yu birbirine yapıştır → 'wanna'. Sessiz harfle biten + sesli harfle başlayan: bağla. 'pick it up' = 'piggiddup'. Önce duy, sonra dene.",
  example_words: [
    { word: "wanna", ipa: "/ˈwɒnə/", tr_meaning: "want to" },
    { word: "gonna", ipa: "/ˈɡɒnə/", tr_meaning: "going to" },
    { word: "gotta", ipa: "/ˈɡɒɾə/", tr_meaning: "got to / have to" },
    { word: "didja", ipa: "/ˈdɪdʒə/", tr_meaning: "did you" },
    { word: "whaddya", ipa: "/ˈwʌɾəjə/", tr_meaning: "what do you" },
    { word: "lemme", ipa: "/ˈlemi/", tr_meaning: "let me" },
    { word: "gimme", ipa: "/ˈɡɪmi/", tr_meaning: "give me" },
    { word: "kinda", ipa: "/ˈkaɪndə/", tr_meaning: "kind of" },
    { word: "sorta", ipa: "/ˈsɔːrɾə/", tr_meaning: "sort of" },
    { word: "outta", ipa: "/ˈaʊɾə/", tr_meaning: "out of" },
    { word: "shoulda", ipa: "/ˈʃʊdə/", tr_meaning: "should have" },
    { word: "coulda", ipa: "/ˈkʊdə/", tr_meaning: "could have" },
    { word: "woulda", ipa: "/ˈwʊdə/", tr_meaning: "would have" },
    { word: "musta", ipa: "/ˈmʌstə/", tr_meaning: "must have" },
    { word: "ya", ipa: "/jə/", tr_meaning: "you (informal)" },
    { word: "'em", ipa: "/əm/", tr_meaning: "them" },
    { word: "cuz", ipa: "/kəz/", tr_meaning: "because" },
    { word: "dunno", ipa: "/dəˈnoʊ/", tr_meaning: "don't know" },
    { word: "betcha", ipa: "/ˈbetʃə/", tr_meaning: "bet you" },
    { word: "tellya", ipa: "/ˈteljə/", tr_meaning: "tell you" },
  ],
  minimal_pairs: [
    {
      word_a: "want to",
      word_b: "wanna",
      ipa_a: "/wɒnt tuː/",
      ipa_b: "/ˈwɒnə/",
      tr_meaning_a: "istemek (yazı)",
      tr_meaning_b: "istemek (konuşma)",
    },
    {
      word_a: "going to",
      word_b: "gonna",
      ipa_a: "/ˈɡoʊɪŋ tuː/",
      ipa_b: "/ˈɡɒnə/",
      tr_meaning_a: "yapacağım (yazı)",
      tr_meaning_b: "yapacağım (konuşma)",
    },
    {
      word_a: "let me",
      word_b: "lemme",
      ipa_a: "/let miː/",
      ipa_b: "/ˈlemi/",
      tr_meaning_a: "izin ver (yazı)",
      tr_meaning_b: "izin ver (konuşma)",
    },
    {
      word_a: "give me",
      word_b: "gimme",
      ipa_a: "/ɡɪv miː/",
      ipa_b: "/ˈɡɪmi/",
      tr_meaning_a: "ver (yazı)",
      tr_meaning_b: "ver (konuşma)",
    },
    {
      word_a: "did you",
      word_b: "didja",
      ipa_a: "/dɪd juː/",
      ipa_b: "/ˈdɪdʒə/",
      tr_meaning_a: "-di mi (yazı)",
      tr_meaning_b: "-di mi (konuşma)",
    },
  ],
  practice_sentences: [
    {
      sentence: "I wanna go home, but I gotta finish this first.",
      tr_meaning: "Eve gitmek istiyorum ama önce bunu bitirmem gerek.",
    },
    {
      sentence: "Whaddya gonna do about it?",
      tr_meaning: "Bu konuda ne yapacaksın?",
    },
    {
      sentence: "Lemme see — gimme a minute.",
      tr_meaning: "Bir bakayım — bir dakika ver.",
    },
    {
      sentence: "I dunno, I kinda like it, sorta.",
      tr_meaning: "Bilmiyorum, biraz seviyorum gibi.",
    },
    {
      sentence: "Didja see what he said? I coulda told ya.",
      tr_meaning: "Ne dediğini gördün mü? Söyleyebilirdim sana.",
    },
    {
      sentence: "We shoulda gone outta there sooner.",
      tr_meaning: "Oradan daha erken çıkmalıydık.",
    },
    {
      sentence: "Tell 'em I'll be there in a minute.",
      tr_meaning: "Onlara bir dakikaya geleceğimi söyle.",
    },
  ],
  cefrLevel: "B2",
};

// ============================================================
// Drill 15 — Intonation patterns (questions, statements, wh-)
// ============================================================
const drill_intonation: PronunciationDrill = {
  id: "pron.intonation-patterns",
  title_tr: "Tonlama: soru, cümle, wh-soru ezgileri",
  description_tr:
    "Cümlenin sonunda sesin yukarı mı, aşağı mı gittiği anlamı değiştirir. Yes/no soruları YUKARI çıkar ('Are you ready?↗'). Düz cümleler AŞAĞI iner ('I'm ready.↘'). Wh- soruları (what, where, when) AŞAĞI iner ('Where are you?↘'). Türkçe'de soru için ek var ('-mı'); İngilizce'de tonlama o görevi üstlenir.",
  target_sound: "intonation",
  tip_tr:
    "Yes/no soru → SON HECEDE yukarı: 'Are you HOME↗?' Wh- soru → genelde son hecede AŞAĞI: 'Where are you GOing↘?' Statement → sonda AŞAĞI: 'I'm GOing home↘.' Tag question (you're tired, AREN'T you?) → güven varsa aşağı, gerçekten sorarsan yukarı. Türk öğrenciler genelde HER cümleyi düz okur — sesini DİP-TEPE yap, dramatik abart.",
  example_words: [
    { word: "Really? ↗", ipa: "rising", tr_meaning: "Sahi mi? (şaşkın)" },
    { word: "Really. ↘", ipa: "falling", tr_meaning: "Sahi (onaylıyorum)" },
    { word: "Right? ↗", ipa: "rising", tr_meaning: "Değil mi? (soruyor)" },
    { word: "Right. ↘", ipa: "falling", tr_meaning: "Doğru. (kabul)" },
    { word: "Okay? ↗", ipa: "rising", tr_meaning: "Tamam mı? (onay isteme)" },
    { word: "Okay. ↘", ipa: "falling", tr_meaning: "Tamam. (kabul)" },
    { word: "Yeah? ↗", ipa: "rising", tr_meaning: "Öyle mi? (devam et)" },
    { word: "Yeah. ↘", ipa: "falling", tr_meaning: "Evet. (onay)" },
    { word: "No? ↗", ipa: "rising", tr_meaning: "Hayır mı? (soru)" },
    { word: "No. ↘", ipa: "falling", tr_meaning: "Hayır. (kesin)" },
    { word: "What? ↗", ipa: "rising", tr_meaning: "Ne? (anlamadım)" },
    { word: "What? ↘", ipa: "falling", tr_meaning: "Ne? (kızgın/şaşkın)" },
    { word: "How? ↘", ipa: "falling", tr_meaning: "Nasıl? (wh-soru)" },
    { word: "When? ↘", ipa: "falling", tr_meaning: "Ne zaman?" },
    { word: "Why? ↘", ipa: "falling", tr_meaning: "Neden?" },
  ],
  minimal_pairs: [
    {
      word_a: "You're going. ↘",
      word_b: "You're going? ↗",
      ipa_a: "statement",
      ipa_b: "yes/no question",
      tr_meaning_a: "Gidiyorsun. (cümle)",
      tr_meaning_b: "Gidiyor musun? (soru)",
    },
    {
      word_a: "It's cold. ↘",
      word_b: "It's cold? ↗",
      ipa_a: "statement",
      ipa_b: "yes/no question",
      tr_meaning_a: "Soğuk. (bilgi)",
      tr_meaning_b: "Soğuk mu? (soru)",
    },
    {
      word_a: "He's a doctor. ↘",
      word_b: "He's a doctor? ↗",
      ipa_a: "statement",
      ipa_b: "yes/no question",
      tr_meaning_a: "O bir doktor.",
      tr_meaning_b: "O bir doktor mu? (şaşkın)",
    },
    {
      word_a: "Where are you going? ↘",
      word_b: "Are you going? ↗",
      ipa_a: "wh-question (falling)",
      ipa_b: "yes/no (rising)",
      tr_meaning_a: "Nereye gidiyorsun?",
      tr_meaning_b: "Gidiyor musun?",
    },
    {
      word_a: "Right? ↗",
      word_b: "Right. ↘",
      ipa_a: "rising (asking)",
      ipa_b: "falling (agreeing)",
      tr_meaning_a: "Değil mi? (onay arıyor)",
      tr_meaning_b: "Doğru. (kabul)",
    },
  ],
  practice_sentences: [
    {
      sentence: "Are you ready? ↗ — Yes, I'm ready. ↘",
      tr_meaning: "Hazır mısın? — Evet, hazırım. (yes/no soru yukarı, cevap aşağı)",
    },
    {
      sentence: "Where do you live? ↘ — I live in Istanbul. ↘",
      tr_meaning: "Nerede yaşıyorsun? — İstanbul'da. (wh-soru aşağı, cevap aşağı)",
    },
    {
      sentence: "Did you finish? ↗ — Not yet. ↘",
      tr_meaning: "Bitirdin mi? — Henüz değil. (yes/no yukarı)",
    },
    {
      sentence: "It's a beautiful day, isn't it? ↗",
      tr_meaning: "Güzel bir gün, değil mi? (gerçek soru — yukarı)",
    },
    {
      sentence: "It's a beautiful day, isn't it? ↘",
      tr_meaning: "Güzel bir gün, değil mi? (sohbet açma — aşağı)",
    },
    {
      sentence: "What's your name? ↘ — My name is Berk. ↘",
      tr_meaning: "Adın ne? — Adım Berk. (wh-soru aşağı)",
    },
    {
      sentence: "You're coming, right? ↗ — Right. ↘",
      tr_meaning: "Geliyorsun, değil mi? — Evet. (soru yukarı, onay aşağı)",
    },
    {
      sentence: "Coffee or tea? ↘ (choice list ends down)",
      tr_meaning: "Kahve mi çay mı? (seçenek listesi sonda aşağı iner)",
    },
  ],
  cefrLevel: "B2",
};

// ============================================================
// Registry
// ============================================================
export const pronunciationDrills: ReadonlyArray<PronunciationDrill> = [
  drill_th_vs_s,
  drill_th_vs_z,
  drill_ship_vs_sheep,
  drill_cut_vs_cat,
  drill_cat_vs_bed,
  drill_o_sounds,
  drill_v_vs_w,
  drill_final_b_vs_p,
  drill_flap_t,
  drill_light_vs_dark_l,
  drill_ng,
  drill_word_stress,
  drill_sentence_stress,
  drill_linking,
  drill_intonation,
];

export function getPronunciationDrill(
  id: string,
): PronunciationDrill | undefined {
  return pronunciationDrills.find((d) => d.id === id);
}
