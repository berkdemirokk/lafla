// Lafla — Visa Interview Question Bank (Turkish market).
// Curated real interview questions reported by Turkish travelers and applicants
// at US/UK/Schengen/Canada/Australia consulates. Each entry includes:
//   - question_en: phrased exactly as a consular officer would ask
//   - intent_tr: what is *actually* being assessed
//   - good_answer_en: a natural-sounding B2 model answer (not coached-sounding)
//   - pitfalls_tr / redFlags_tr: Turkey-specific mistakes
//
// This is a Turkey-only moat — competitors like Lucida / Duolingo do not
// address visa interview English at this depth.

export type VisaCountry = "us" | "uk" | "schengen" | "canada" | "australia";

export type VisaType =
  | "b1-b2-tourism"
  | "b1-b2-business"
  | "f1-student"
  | "j1-exchange"
  | "h1b-work"
  | "schengen-short"
  | "uk-visit"
  | "uk-student"
  | "canada-study"
  | "canada-work"
  | "australia-tourism"
  | "australia-student";

export type VisaCategory =
  | "purpose"
  | "ties-to-home"
  | "finances"
  | "academic"
  | "previous-travel"
  | "post-trip"
  | "personal";

export type VisaDifficulty = "B1" | "B2" | "C1";

export interface VisaQuestion {
  id: string;
  country: VisaCountry;
  visaType: VisaType;
  /** Phrased EXACTLY as a consular officer would ask it. */
  question_en: string;
  /** Turkish meaning of the question. */
  question_tr: string;
  /** What the officer is really checking. */
  intent_tr: string;
  /** 30-90 word model answer at natural B2 — avoids coached / memorized tone. */
  good_answer_en: string;
  /** Turkish translation of the model answer. */
  good_answer_tr: string;
  /** 2-4 common mistakes Turkish applicants make. */
  pitfalls_tr: readonly string[];
  /** Statements that will instantly hurt the application. */
  redFlags_tr: readonly string[];
  followUpQuestions?: readonly string[];
  category: VisaCategory;
  difficulty: VisaDifficulty;
  /** Reported by the 2026 Turkish applicant community. */
  recentlyReported_2026?: boolean;
}

// ============================================================
// US — B1/B2 Tourism (12)
// ============================================================

const US_B1B2: readonly VisaQuestion[] = [
  {
    id: "us.b1b2.purpose",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "What is the purpose of your trip to the United States?",
    question_tr: "Amerika Birleşik Devletleri'ne seyahatinizin amacı nedir?",
    intent_tr:
      "Bu, en kritik açılış sorusu. Memur turist mi, gizli göçmen mi olduğunu anlamak için net, somut ve kısa bir cevap arıyor.",
    good_answer_en:
      "I'm planning a two-week vacation. I'd like to visit New York and California — places like Times Square, the Grand Canyon, and San Francisco. I've been saving for this trip for over a year, and my flights and hotels are already booked.",
    good_answer_tr:
      "İki haftalık bir tatil planlıyorum. New York ve California'yı görmek istiyorum — Times Square, Grand Canyon ve San Francisco gibi yerleri. Bu seyahat için bir yıldan fazladır biriktiriyorum ve uçuş ve otelim hazır.",
    pitfalls_tr: [
      "'Sadece görmek istiyorum' gibi belirsiz cevap vermek — somut şehir/aktivite söyle.",
      "Çok genel: 'Tatil' yerine 'iki haftalık tatil, X şehir' de.",
      "Memur'a ne dediğini düşünmeden konuşmak; süreyi net söyle.",
    ],
    redFlags_tr: [
      "'Belki uzun kalırım' — anında ret.",
      "'İş bakmak için' — turistik vize değil bu.",
      "'Akrabamı ziyaret edeceğim, sonra dönerim, ama bakarız' — ucu açık planlar.",
    ],
    followUpQuestions: [
      "How long will you stay?",
      "Have you booked your flights?",
      "Where exactly will you go?",
    ],
    category: "purpose",
    difficulty: "B1",
    recentlyReported_2026: true,
  },
  {
    id: "us.b1b2.duration",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "How long do you plan to stay?",
    question_tr: "Ne kadar süre kalmayı planlıyorsunuz?",
    intent_tr:
      "Memur, dönüş niyetinin somut olduğunu görmek istiyor. Belirsiz veya çok uzun süreler şüphe uyandırır.",
    good_answer_en:
      "Around fourteen days. I'll arrive on June 5th and fly back to Istanbul on June 19th. My return ticket is already issued, and I have to be back at work the following Monday.",
    good_answer_tr:
      "Yaklaşık on dört gün. 5 Haziran'da varacağım ve 19 Haziran'da İstanbul'a döneceğim. Dönüş biletim alındı ve takip eden pazartesi işe dönmem gerekiyor.",
    pitfalls_tr: [
      "'Bilmiyorum, göreceğim' — kesinlikle kötü.",
      "Çok uzun süre (3+ ay) söylemek — turistik vize için şüpheli.",
      "Dönüş bileti olmadan söylemek — alınmışsa söyle.",
    ],
    redFlags_tr: [
      "'Belki uzatırım' — dönüş niyetini sorgulatır.",
      "'Açık bilet aldım' — çoğunlukla kabul edilemez.",
      "İş/okul başlangıç tarihinden sonraya uzayan bir süre.",
    ],
    category: "purpose",
    difficulty: "B1",
  },
  {
    id: "us.b1b2.stay",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Where will you stay during your visit?",
    question_tr: "Ziyaretiniz boyunca nerede kalacaksınız?",
    intent_tr:
      "Plan somutluğunu sınıyor. Otel adı/şehri/Airbnb gibi net bir cevap güven verir.",
    good_answer_en:
      "I've booked a hotel near Times Square for the first five nights, and then an Airbnb in Brooklyn for three nights. After that, I'm flying to Los Angeles and staying at the Sheraton near the airport. I have all the reservations on my phone if you'd like to see them.",
    good_answer_tr:
      "İlk beş gece için Times Square yakınında bir otel ayırttım, sonrasında üç gece için Brooklyn'de bir Airbnb. Sonra Los Angeles'a uçacağım ve havaalanı yakınında Sheraton'da kalacağım. İsterseniz tüm rezervasyonlar telefonumda var.",
    pitfalls_tr: [
      "'Bir arkadaşımda kalacağım' diyip detay vermemek.",
      "Otel adını bilmemek — ezbere değil ama temel bilgi olsun.",
      "Memur sorduğunda telefondaki rezervasyonu gösterememek.",
    ],
    redFlags_tr: [
      "'Henüz karar vermedim' — plansız izlenimi verir.",
      "Akraba evinde aylarca kalma planı — niyet sorgulanır.",
    ],
    category: "purpose",
    difficulty: "B1",
  },
  {
    id: "us.b1b2.relatives",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Do you have any relatives or friends in the United States?",
    question_tr: "Amerika'da akrabanız veya arkadaşınız var mı?",
    intent_tr:
      "Yalan söylemek BUNU mahveder — sistem zaten görüyor. Dürüst ve kısa cevap ver, ama bu kişinin sana göçmenlik desteği vermeyeceğini netleştir.",
    good_answer_en:
      "Yes, my cousin lives in New Jersey — she's a US citizen and works as a software engineer. I may meet her for dinner once during my trip, but I'm not staying with her. I have my own hotel bookings.",
    good_answer_tr:
      "Evet, kuzenim New Jersey'de yaşıyor — ABD vatandaşı ve yazılım mühendisi olarak çalışıyor. Seyahatim sırasında bir kere akşam yemeği için buluşabilirim ama onda kalmıyorum. Kendi otel rezervasyonlarım var.",
    pitfalls_tr: [
      "Yalan söylemek — sistem bu bilgiyi zaten görüyor; yakalandığında ömürlük yasak.",
      "Akrabanın statüsünü saklamak.",
      "Memur sormadan akrabayı öne çıkarmak — sadece sorulduğunda söyle.",
    ],
    redFlags_tr: [
      "'Akrabam yok' deyip yalan söylemek — anında ret.",
      "'Kuzenim oradayken işe başlamamı söyledi' — anında ret.",
      "'Onun yanına yerleşmek istiyorum' — gizli göçmenlik niyeti.",
    ],
    category: "personal",
    difficulty: "B2",
    recentlyReported_2026: true,
  },
  {
    id: "us.b1b2.funding",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Who is paying for this trip?",
    question_tr: "Bu seyahatin parasını kim ödüyor?",
    intent_tr:
      "Mali yeterliliğini ve seyahatin kim tarafından kontrol edildiğini sınar. Kendin ödüyorsan net söyle; başkası ödüyorsa neden olduğunu açıkla.",
    good_answer_en:
      "I'm paying for everything myself. I've been working as a marketing manager for the past six years, and I've been setting aside money for this trip since last summer. My total budget is around six thousand dollars, and my savings account covers it comfortably.",
    good_answer_tr:
      "Her şeyi kendim ödüyorum. Altı yıldır pazarlama yöneticisi olarak çalışıyorum ve geçen yazdan beri bu seyahat için para biriktiriyorum. Toplam bütçem yaklaşık altı bin dolar ve birikim hesabım bunu rahatça karşılıyor.",
    pitfalls_tr: [
      "'Babam ödüyor' deyip gerekçe sunmamak (yaş, sebep).",
      "Tam bütçe rakamı bilmemek — yaklaşık bir rakamı hazır tut.",
      "Birikim hesabı belgesi olduğunu söylememek.",
    ],
    redFlags_tr: [
      "'Henüz para yok ama kuzenim orada ödeyecek' — kötü.",
      "'Kredi kartıyla halledeceğim' — net plan değil.",
    ],
    category: "finances",
    difficulty: "B2",
  },
  {
    id: "us.b1b2.job",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Tell me about your job.",
    question_tr: "İşinizi anlatın.",
    intent_tr:
      "Türkiye'deki bağlarını sınıyor. İstikrarlı bir iş = dönmek için sebep. Kısa, net, kanıtlanabilir tut.",
    good_answer_en:
      "I work as a project engineer at Arçelik in Istanbul. I've been there for four years, and I lead a team of five people on home appliance design. My official annual leave for this trip has already been approved, and I'm expected back in the office on June 22nd.",
    good_answer_tr:
      "İstanbul'da Arçelik'te proje mühendisi olarak çalışıyorum. Dört yıldır oradayım ve ev aletleri tasarımında beş kişilik bir ekibe liderlik ediyorum. Bu seyahat için resmi yıllık iznim onaylandı ve 22 Haziran'da ofiste olmam bekleniyor.",
    pitfalls_tr: [
      "Şirket adını söylememek — sektör + şirket + pozisyon de.",
      "'Freelancer'ım, evden çalışıyorum' demek (bağ zayıf görünür) — somut müşteriler/projeler ekle.",
      "Maaş söylememek — sorulursa söyle, ama önce iş tanımı.",
    ],
    redFlags_tr: [
      "'Yeni işsiz kaldım, yeni iş arıyorum' — turist vizesi zorlaşır.",
      "'İşten ayrıldım, sonra ABD'ye gidiyorum' — kalma niyeti şüphesi.",
    ],
    followUpQuestions: [
      "How long have you worked there?",
      "What is your monthly salary?",
      "Did your employer approve this leave?",
    ],
    category: "ties-to-home",
    difficulty: "B2",
    recentlyReported_2026: true,
  },
  {
    id: "us.b1b2.ties",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "What ties do you have to Turkey?",
    question_tr: "Türkiye ile bağlarınız neler?",
    intent_tr:
      "Tek odak: 'Bu kişi dönecek mi?' Aile, iş, mülk, sorumluluklar — somut ve sayılabilir tut.",
    good_answer_en:
      "My parents and younger sister all live in Ankara, and I see them every weekend. I also own an apartment in Kadıköy that I've been paying off for six years. My job, my dog, and my ongoing master's degree are all here — I have no reason or plan to leave Turkey.",
    good_answer_tr:
      "Annem, babam ve küçük kız kardeşim Ankara'da yaşıyor ve her hafta sonu onları görüyorum. Kadıköy'de altı yıldır taksitini ödediğim bir dairem de var. İşim, köpeğim ve devam eden yüksek lisansım hepsi burada — Türkiye'den ayrılmak için ne bir sebebim ne de planım var.",
    pitfalls_tr: [
      "Sadece 'Ailem var' deyip bitirmek — somut detay ver (şehir, yaşam durumu).",
      "Mülk/iş/eğitim — varsa söyle, yoksa abartma.",
      "Bağları tek tek saymak ezbere geliyor — doğal akışla söyle.",
    ],
    redFlags_tr: [
      "'Türkiye'de pek bir şey kalmadı' — anında ret.",
      "'Eski sevgilim hariç bir bağım yok' — şaka bile olsa söyleme.",
      "'İşten ayrıldım, kira yok' — bağ zayıflığı.",
    ],
    category: "ties-to-home",
    difficulty: "B2",
    recentlyReported_2026: true,
  },
  {
    id: "us.b1b2.return",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "When do you plan to return to Turkey?",
    question_tr: "Türkiye'ye ne zaman dönmeyi planlıyorsunuz?",
    intent_tr:
      "Süre + dönüş tarihi + dönüş sebebi üçlüsünü kontrol eder. Tarihi kesin, sebebi somut tut.",
    good_answer_en:
      "On June 19th. I have a return ticket on Turkish Airlines, flight TK 002 from JFK. My job expects me back the following Monday, and I have a project review scheduled for that week.",
    good_answer_tr:
      "19 Haziran'da. Türk Hava Yolları'nda dönüş biletim var, TK 002 sefer numarası, JFK'den. İşim takip eden pazartesi beni bekliyor ve o hafta için planlanmış bir proje toplantım var.",
    pitfalls_tr: [
      "Sefer numarası bilmemek — hatırlamana gerek yok ama tarihi kesin söyle.",
      "Belirsiz tarih: 'Haziran sonu' yerine '19 Haziran' de.",
      "Dönüş sebebini eklememek — niye dönüyorsun?",
    ],
    redFlags_tr: [
      "'Henüz dönüş bileti almadım' — turistlik vize için kötü.",
      "'Tarih esnek' — niyet belirsizliği.",
    ],
    category: "post-trip",
    difficulty: "B1",
  },
  {
    id: "us.b1b2.prevtravel",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Have you traveled abroad before?",
    question_tr: "Daha önce yurt dışına çıktınız mı?",
    intent_tr:
      "Seyahat geçmişi = vize gücüne işaret. Schengen, UK gibi 'iyi vize' geçmişi sana ciddi avantaj sağlar.",
    good_answer_en:
      "Yes, I've traveled to a few countries. I went to Germany twice on a Schengen visa for vacation, once in 2022 and again last year. I also visited the UK in 2023 with a standard visitor visa. I returned on time on every trip.",
    good_answer_tr:
      "Evet, birkaç ülkeye gittim. Schengen vizesiyle tatil için iki kez Almanya'ya gittim, 2022'de ve geçen sene. Ayrıca 2023'te standart ziyaretçi vizesiyle İngiltere'ye gittim. Her seyahatte zamanında döndüm.",
    pitfalls_tr: [
      "'Hayır, hiç gitmedim' demek — eğer ilk kez yurt dışına çıkacaksan dürüst söyle ama dönüş niyetini güçlendir.",
      "Vize geçmişini abartmak — yalan yakalanır.",
      "'Zamanında döndüm' demeyi unutmak — bu bilgi önemli.",
    ],
    redFlags_tr: [
      "Vize ihlali geçmişini saklamak.",
      "Bir ülkede izinsiz kalmış olmak ve bunu gizlemek.",
    ],
    category: "previous-travel",
    difficulty: "B1",
  },
  {
    id: "us.b1b2.beenus",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Have you been to the United States before?",
    question_tr: "Daha önce ABD'ye geldiniz mi?",
    intent_tr:
      "Geçmiş ABD seyahati varsa ne kadar kaldığını ve zamanında döndüğünü kontrol eder. İlk kezse 'Niye şimdi?' sorusu gelir.",
    good_answer_en:
      "No, this would be my first visit. I've been planning to see the United States for years, and now that I've saved enough and my work allows me a longer break, this felt like the right time.",
    good_answer_tr:
      "Hayır, bu ilk ziyaretim olur. Yıllardır Amerika'yı görmeyi planlıyordum ve hem yeterince biriktirdiğim hem de işim daha uzun bir mola izin verdiği için, doğru zaman gibi hissettirdi.",
    pitfalls_tr: [
      "İlk kezse savunmacı görünmek — gayet doğal, sadece sebebini açıkla.",
      "'Hiçbir yere gitmedim' deyip ardından 'aslında 5 yıl önce gitmişim' demek.",
    ],
    redFlags_tr: [
      "Önceki ziyareti gizlemek — sistem zaten görüyor.",
      "Önceki ziyarette uzun kaldığını söylememek.",
    ],
    category: "previous-travel",
    difficulty: "B1",
  },
  {
    id: "us.b1b2.deniedbefore",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Have you ever been denied a visa to any country?",
    question_tr: "Hiçbir ülke için vizeniz reddedildi mi?",
    intent_tr:
      "Dürüstlük testi. Sistem her şeyi görüyor — yalan söylemek anında reddir. Reddedildin diye otomatik kaybetmezsin.",
    good_answer_en:
      "Yes, I was refused a US visa in 2021. At that time I had just graduated and wasn't working, so my ties to Turkey were weaker. Since then I've started a full-time job, bought an apartment, and have a stable life here. That's why I felt confident reapplying now.",
    good_answer_tr:
      "Evet, 2021'de bir ABD vizem reddedilmişti. O zamanlar yeni mezun olmuştum ve çalışmıyordum, bu yüzden Türkiye ile bağlarım daha zayıftı. O zamandan beri tam zamanlı bir işe başladım, bir daire aldım ve burada düzenli bir hayatım var. Bu yüzden şimdi tekrar başvurmaya kendimi hazır hissettim.",
    pitfalls_tr: [
      "Önceki reddi gizlemek — anında ret + uzun süreli yasak.",
      "Suçu memura atmak ('Beni dinlemedi') — savunmacı görünme.",
      "O zamandan sonra ne değişti söylememek.",
    ],
    redFlags_tr: [
      "Yalan söylemek — sistem geçmişini görüyor.",
      "'Bana haksız davrandılar' — eleştirmek kötü görünür.",
    ],
    category: "previous-travel",
    difficulty: "B2",
    recentlyReported_2026: true,
  },
  {
    id: "us.b1b2.marital",
    country: "us",
    visaType: "b1-b2-tourism",
    question_en: "Are you married? Do you have children?",
    question_tr: "Evli misiniz? Çocuğunuz var mı?",
    intent_tr:
      "Aile bağları = dönüş için sebep. Evliysen eş Türkiye'de mi, çocuk varsa okulda mı — somut detaylar güven verir.",
    good_answer_en:
      "Yes, I'm married. My husband is a dentist with his own clinic in Bursa, and we have a six-year-old son who's in first grade there. They aren't coming with me on this trip — my husband has surgeries scheduled and our son has school. I'll just be away for ten days.",
    good_answer_tr:
      "Evet, evliyim. Eşim Bursa'da kendi muayenehanesi olan bir diş hekimi ve orada birinci sınıfa giden altı yaşında bir oğlumuz var. Bu seyahate benimle gelmiyorlar — eşimin planlanmış ameliyatları var ve oğlumun okulu var. Sadece on gün uzakta olacağım.",
    pitfalls_tr: [
      "Bekarsan savunmacı olmak — bekarlık reddir değildir, bağ yeterince güçlüyse.",
      "Eş/çocuğun ne yaptığını söylememek.",
      "Yalnız gitmenin sebebini açıklamamak — şüphe doğurur.",
    ],
    redFlags_tr: [
      "'Hepsi gelecek ve bir süre kalacağız' — niyet sorgusu.",
      "'Eşim ABD'de yaşıyor' diyip sonra detay vermemek.",
    ],
    category: "personal",
    difficulty: "B2",
  },
];

// ============================================================
// US — F-1 Student (8)
// ============================================================

const US_F1: readonly VisaQuestion[] = [
  {
    id: "us.f1.whyuni",
    country: "us",
    visaType: "f1-student",
    question_en: "Why did you choose this university?",
    question_tr: "Bu üniversiteyi neden seçtiniz?",
    intent_tr:
      "Memur araştırma yapıp yapmadığını test ediyor. Üniversiteyi farklı kılan SPESİFİK bir şey söyle.",
    good_answer_en:
      "I chose Purdue mainly for its Industrial Engineering program. It's ranked among the top five in the US for IE, and the lab work my advisor does on supply chain modeling is exactly the area I want to specialize in. I also looked at three other schools, but Purdue was the strongest fit academically and financially.",
    good_answer_tr:
      "Purdue'yu öncelikle Endüstri Mühendisliği programı için seçtim. Endüstri Mühendisliği'nde ABD'de ilk beşte sıralanıyor ve danışmanımın tedarik zinciri modellemesi üzerine yaptığı laboratuvar çalışması tam olarak uzmanlaşmak istediğim alan. Üç okula daha baktım ama Purdue akademik ve finansal olarak en uyumlu olanıydı.",
    pitfalls_tr: [
      "'En iyi üniversite' demek — somut olmayan ezber cevap.",
      "Profesör/program adı bilmemek — ödevini yap.",
      "Sadece 'ranking' söylemek — neden seni ilgilendirdiğini açıkla.",
    ],
    redFlags_tr: [
      "'Bilmiyorum, danışmanım önerdi' — kendi araştırman yokmuş gibi.",
      "'Sadece ABD'ye gitmek istiyordum' — okul önemli değil gibi.",
    ],
    category: "academic",
    difficulty: "B2",
    recentlyReported_2026: true,
  },
  {
    id: "us.f1.whynotturkey",
    country: "us",
    visaType: "f1-student",
    question_en: "Why this program and not one in Turkey?",
    question_tr: "Türkiye'deki bir program yerine neden bu program?",
    intent_tr:
      "Niyet sınaması: Bu programın Türkiye'de bulunmayan SPESİFİK ne sunduğunu açıkla. Türkiye'yi küçümseme.",
    good_answer_en:
      "Turkey has very good engineering programs — I actually completed my undergraduate at Boğaziçi. But this master's specializes in renewable energy systems, and the research center attached to the department doesn't have an equivalent in Turkey yet. After two years, I'll bring that expertise back to a sector that's growing fast at home.",
    good_answer_tr:
      "Türkiye'nin mühendislik programları çok iyi — aslında lisansımı Boğaziçi'nde tamamladım. Ama bu yüksek lisans yenilenebilir enerji sistemleri konusunda uzmanlaşmış ve bölüme bağlı araştırma merkezinin Türkiye'de henüz bir eşdeğeri yok. İki yıl sonra bu uzmanlığı evde hızla büyüyen bir sektöre getireceğim.",
    pitfalls_tr: [
      "'Türkiye'de iyi program yok' — yalan + saygısızlık.",
      "Türkiye'deki lisansını söylememek — bu güçlü bir bağ.",
      "Dönüş planını eklememek.",
    ],
    redFlags_tr: [
      "'ABD'de yaşamak istiyorum' — F-1 turist vizesi değil ama göçmen niyeti de değil.",
      "'Türkiye'deki üniversiteler kötü' — kaba ve yalan.",
    ],
    category: "academic",
    difficulty: "C1",
  },
  {
    id: "us.f1.funding",
    country: "us",
    visaType: "f1-student",
    question_en: "Who is paying for your education?",
    question_tr: "Eğitiminizin masraflarını kim ödüyor?",
    intent_tr:
      "Mali yeterlilik kanıtı. Sponsor varsa kim, ilişki ne, hangi kaynaklardan — net olmalı.",
    good_answer_en:
      "My father is sponsoring me. He owns a textile factory in Bursa with around fifty employees, and he's been saving for my education since I was in high school. We've also taken out an education loan through Akbank to cover the second year. All the financial documents — bank statements, tax returns, and the loan approval — are in my application.",
    good_answer_tr:
      "Babam sponsorum. Bursa'da yaklaşık elli çalışanı olan bir tekstil fabrikası işletiyor ve lise zamanımdan beri eğitimim için para biriktiriyor. İkinci yıl için Akbank üzerinden bir eğitim kredisi de aldık. Tüm finansal belgeler — banka ekstreleri, vergi beyannameleri ve kredi onayı — başvurumda var.",
    pitfalls_tr: [
      "Sponsor'un mesleğini ve gelir kaynağını söylememek.",
      "Hangi belgelerin ekli olduğunu bilmemek.",
      "Sponsor'un seninle ilişkisini netleştirmemek.",
    ],
    redFlags_tr: [
      "'Çalışıp öderim' — F-1'de off-campus iş yasak.",
      "'Bilmiyorum, babam ayarladı' — kendi başvurun değil gibi.",
    ],
    category: "finances",
    difficulty: "B2",
  },
  {
    id: "us.f1.plans",
    country: "us",
    visaType: "f1-student",
    question_en: "What are your plans after graduation?",
    question_tr: "Mezun olduktan sonra planınız nedir?",
    intent_tr:
      "Dönüş niyeti. OPT'yi söylemen sorun değil ama uzun vadeli planın Türkiye'de olmalı.",
    good_answer_en:
      "After graduation I plan to return to Turkey and join my uncle's renewable energy company in Izmir as a project engineer. He's already offered me a position. I might do a one-year OPT before that to gain field experience, but my long-term career is in Turkey — the solar market is growing fast and that's where my family is.",
    good_answer_tr:
      "Mezuniyetten sonra Türkiye'ye dönüp İzmir'deki amcamın yenilenebilir enerji şirketine proje mühendisi olarak katılmayı planlıyorum. Bana zaten bir pozisyon önerdi. Saha deneyimi kazanmak için ondan önce bir yıllık OPT yapabilirim ama uzun vadeli kariyerim Türkiye'de — güneş enerjisi pazarı hızla büyüyor ve ailem orada.",
    pitfalls_tr: [
      "'Belki ABD'de kalırım, görürüz' — F-1 niyet sorununu uyandırır.",
      "Dönüş planı için somut iş/şirket söylememek.",
      "OPT'yi tek hedef gibi sunmak.",
    ],
    redFlags_tr: [
      "'H1B'ye geçmek istiyorum' — F-1 başvurusunda erken sinyal.",
      "'Türkiye'de fırsat yok' — saygısızlık + reddir.",
      "'Yeşil kart almak istiyorum' — F-1'in tam zıttı niyet.",
    ],
    category: "post-trip",
    difficulty: "B2",
    recentlyReported_2026: true,
  },
  {
    id: "us.f1.toefl",
    country: "us",
    visaType: "f1-student",
    question_en: "What was your TOEFL or IELTS score?",
    question_tr: "TOEFL veya IELTS puanınız neydi?",
    intent_tr:
      "Konuştuğun İngilizce ile söylediğin puanın tutarlı olup olmadığını test eder. Yalan söyleme.",
    good_answer_en:
      "I took the TOEFL iBT and scored 102 — 27 in speaking, 28 in reading, 24 in listening, and 23 in writing. The university required a minimum of 90, so I was happy with that result.",
    good_answer_tr:
      "TOEFL iBT'ye girdim ve 102 aldım — konuşmada 27, okumada 28, dinlemede 24 ve yazmada 23. Üniversite minimum 90 istiyordu, bu yüzden sonuçtan memnundum.",
    pitfalls_tr: [
      "Puanı yanlış söylemek — kayıtta var.",
      "Sınava girmediysen 'TOEFL muafiyetim vardı' deyip nedenini açıklamamak.",
    ],
    redFlags_tr: [
      "Puanı söyleyip cevaplarken kötü İngilizce konuşmak — tutarsızlık.",
    ],
    category: "academic",
    difficulty: "B1",
  },
  {
    id: "us.f1.gpa",
    country: "us",
    visaType: "f1-student",
    question_en: "What was your undergraduate GPA?",
    question_tr: "Lisans not ortalamanız neydi?",
    intent_tr:
      "Akademik geçmişin başvuruya tutarlı mı? Düşükse niye olduğunu kısaca açıkla.",
    good_answer_en:
      "I graduated from METU with a 3.42 GPA on a 4.0 scale. I was in the top fifteen percent of my class. My grades were a bit lower in the first year because I worked part-time, but they improved consistently after I switched to a full course load.",
    good_answer_tr:
      "ODTÜ'den 4.0 üzerinden 3.42 ortalamayla mezun oldum. Sınıfımın ilk yüzde on beşindeydim. Birinci sınıfta yarı zamanlı çalıştığım için notlarım biraz daha düşüktü ama tam ders yüküne geçtikten sonra istikrarlı şekilde yükseldi.",
    pitfalls_tr: [
      "Tam ortalamayı bilmemek — kesin rakam söyle.",
      "Düşük notları savunmacı şekilde açıklamak — kısa ve dürüst tut.",
    ],
    redFlags_tr: [
      "Sahte ortalama söylemek — transkripte var.",
    ],
    category: "academic",
    difficulty: "B1",
  },
  {
    id: "us.f1.profs",
    country: "us",
    visaType: "f1-student",
    question_en: "Have you been in contact with any professors at the school?",
    question_tr: "Okuldaki herhangi bir profesörle iletişime geçtiniz mi?",
    intent_tr:
      "Programı gerçekten araştırdın mı? PhD/araştırma yüksek lisansı için kritik.",
    good_answer_en:
      "Yes, I've been emailing Professor Sarah Kim since last October. She runs the Computational Optimization Lab and her recent paper on logistics networks aligns closely with my research interests. She confirmed she'd be willing to supervise me if I'm admitted, and she's listed as my potential advisor in my application.",
    good_answer_tr:
      "Evet, geçen Ekim'den beri Profesör Sarah Kim ile e-postalaşıyorum. Hesaplamalı Optimizasyon Laboratuvarı'nı yönetiyor ve lojistik ağlar üzerine son makalesi araştırma ilgi alanlarımla yakından örtüşüyor. Kabul edilirsem bana danışmanlık yapmaya istekli olduğunu onayladı ve başvurumda potansiyel danışmanım olarak listelendi.",
    pitfalls_tr: [
      "Profesör adını yanlış söylemek.",
      "Görüşmediysen yalan söylemek — gerek yok, dürüst söyle.",
    ],
    redFlags_tr: [
      "'Tüm bölümle yazıştım' gibi abartılı iddia.",
    ],
    category: "academic",
    difficulty: "C1",
  },
  {
    id: "us.f1.altschools",
    country: "us",
    visaType: "f1-student",
    question_en: "Which other schools did you apply to?",
    question_tr: "Başka hangi okullara başvurdunuz?",
    intent_tr:
      "Birden fazla yere başvuru gerçekçi öğrenci profili gösterir. Ret oldukları söylemek sorun değil.",
    good_answer_en:
      "I applied to four programs: Purdue, Georgia Tech, Penn State, and Ohio State. I was accepted at Purdue and Ohio State, waitlisted at Georgia Tech, and rejected at Penn State. Purdue gave me the strongest funding package, so it was the natural choice.",
    good_answer_tr:
      "Dört programa başvurdum: Purdue, Georgia Tech, Penn State ve Ohio State. Purdue ve Ohio State'de kabul edildim, Georgia Tech'te bekleme listesindeyim ve Penn State'te reddedildim. Purdue bana en güçlü finansman paketini sundu, bu yüzden doğal seçim oldu.",
    pitfalls_tr: [
      "Sadece bir okula başvurduğunu söylemek — gerçekçilik düşük.",
      "Ret aldığın okulları gizlemek.",
    ],
    redFlags_tr: [
      "'Sadece bu okula girmek istiyordum' + zayıf araştırma.",
    ],
    category: "academic",
    difficulty: "B2",
  },
];

// ============================================================
// US — J-1 Exchange / Intern (5)
// ============================================================

const US_J1: readonly VisaQuestion[] = [
  {
    id: "us.j1.program",
    country: "us",
    visaType: "j1-exchange",
    question_en: "Tell me about your J-1 program.",
    question_tr: "J-1 programınızı anlatın.",
    intent_tr:
      "Programı gerçekten anladığını kontrol eder. Sponsor, süre, çalışacağın yer — net detay.",
    good_answer_en:
      "I'm joining a six-month internship program at a marketing agency in Chicago through CIEE as the sponsor. I'll work on social media campaigns for small business clients, which connects directly to my marketing degree from Bilkent. The program runs from July to December.",
    good_answer_tr:
      "CIEE sponsorluğunda Chicago'daki bir pazarlama ajansında altı aylık staj programına katılıyorum. Küçük işletme müşterileri için sosyal medya kampanyalarında çalışacağım, bu da Bilkent'teki pazarlama lisansımla doğrudan bağlantılı. Program Temmuz'dan Aralık'a kadar sürüyor.",
    pitfalls_tr: [
      "Sponsor adını bilmemek.",
      "İş tanımını ezbere okumak — kendi sözlerinle anlat.",
      "Programın akademik ilgi alanınla bağlantısını söylememek.",
    ],
    redFlags_tr: [
      "'Çalışmak için gidiyorum' — J-1 staj/değişim programı, iş değil.",
      "Sponsor şirketin ne yaptığını bilmemek.",
    ],
    category: "purpose",
    difficulty: "B2",
  },
  {
    id: "us.j1.host",
    country: "us",
    visaType: "j1-exchange",
    question_en: "Who is your host company and what will you do there?",
    question_tr: "Ev sahibi şirketiniz hangisi ve orada ne yapacaksınız?",
    intent_tr:
      "Pozisyon gerçek mi, sahte staj mı? Spesifik görev tanımı + denetim yapısı.",
    good_answer_en:
      "The host company is Wright & Co, a digital marketing agency in downtown Chicago. I'll report to a senior account manager named Lisa Chen, and my main task is supporting two B2B accounts — drafting weekly content calendars and analyzing campaign metrics. The training plan in my DS-7002 lists the specific weekly objectives.",
    good_answer_tr:
      "Ev sahibi şirket Chicago şehir merkezindeki dijital pazarlama ajansı Wright & Co. Lisa Chen adlı kıdemli bir müşteri yöneticisine bağlı çalışacağım ve ana görevim iki B2B hesabını desteklemek — haftalık içerik takvimleri hazırlamak ve kampanya metriklerini analiz etmek. DS-7002'mdeki eğitim planı haftalık spesifik hedefleri listeliyor.",
    pitfalls_tr: [
      "DS-7002 bilmemek — staj planı belgen, ezberle.",
      "Süpervizör adını söylememek.",
      "Çok genel görev tanımı.",
    ],
    redFlags_tr: [
      "Sahte/uydurmaca şirket — sistem doğrular.",
      "'Tam zamanlı işe gibi çalışacağım' — J-1 staj değil iş gibi sunmak.",
    ],
    category: "purpose",
    difficulty: "C1",
  },
  {
    id: "us.j1.stipend",
    country: "us",
    visaType: "j1-exchange",
    question_en: "How much will you earn during the program?",
    question_tr: "Program süresince ne kadar kazanacaksınız?",
    intent_tr:
      "Ücretin gerçekçi mi, asgariye yakın mı? Yaşam giderlerini karşılayabilir misin?",
    good_answer_en:
      "The stipend is $2,800 per month before tax. Chicago is expensive, so I've also saved around $5,000 in advance to cover rent and emergencies. The host company provided a budget breakdown in the offer letter — rent for shared housing is about $900, which fits comfortably.",
    good_answer_tr:
      "Maaş vergiden önce aylık 2,800 dolar. Chicago pahalı olduğu için kira ve acil durumlar için önceden yaklaşık 5,000 dolar da biriktirdim. Ev sahibi şirket teklif mektubunda bir bütçe dökümü sundu — paylaşımlı konut kirası yaklaşık 900 dolar, bu rahatça uyuyor.",
    pitfalls_tr: [
      "Net rakam bilmemek.",
      "Ekstra birikim kanıtı olmadığını söylemek.",
    ],
    redFlags_tr: [
      "'Bilmiyorum, oraya gidince anlaşacağız' — sahte staj sinyali.",
    ],
    category: "finances",
    difficulty: "B2",
  },
  {
    id: "us.j1.afterj1",
    country: "us",
    visaType: "j1-exchange",
    question_en: "What will you do after your J-1 ends?",
    question_tr: "J-1'iniz bittiğinde ne yapacaksınız?",
    intent_tr:
      "Dönüş niyeti. 'Two-year home residency requirement' (212(e)) varsa biliyor musun?",
    good_answer_en:
      "I'll fly back to Istanbul in early January and join the digital team at Garanti BBVA. They've offered me a junior marketing analyst role contingent on my J-1 completion, and I've signed a preliminary contract. I'm also subject to the two-year home residency requirement, so I plan to apply that experience in Turkey.",
    good_answer_tr:
      "Ocak başında İstanbul'a uçacağım ve Garanti BBVA'nın dijital ekibine katılacağım. Bana J-1'imi tamamlamama bağlı bir genç pazarlama analisti pozisyonu önerdiler ve ön sözleşme imzaladım. Ayrıca iki yıllık ülkeye dönüş zorunluluğuna tabiyim, bu yüzden bu deneyimi Türkiye'de uygulamayı planlıyorum.",
    pitfalls_tr: [
      "212(e) (iki yıl yurt zorunluluğu) duymamış olmak — biliyor olmalısın.",
      "Belirsiz dönüş planı.",
      "ABD'de iş arayacağını ima etmek.",
    ],
    redFlags_tr: [
      "'OPT'ye geçeceğim' — J-1'de OPT yok.",
      "'F-1'e geçmek istiyorum' — başka niyet sinyali.",
    ],
    category: "post-trip",
    difficulty: "C1",
  },
  {
    id: "us.j1.englishuse",
    country: "us",
    visaType: "j1-exchange",
    question_en: "How comfortable are you working in an English environment?",
    question_tr: "İngilizce bir ortamda çalışmak konusunda ne kadar rahatsınız?",
    intent_tr:
      "İngilizce seviyen iş için yeterli mi? Memur cevabınla seviyeni ölçüyor.",
    good_answer_en:
      "I'm comfortable. I studied at an English-medium university for four years, and most of my coursework was in English. I've also been part of an international research team for two years, where all our meetings and reports are in English. I don't expect any language difficulty at the host company.",
    good_answer_tr:
      "Rahatım. Dört yıl İngilizce eğitim veren bir üniversitede okudum ve derslerimin çoğu İngilizceydi. İki yıldır toplantılarımızın ve raporlarımızın tamamı İngilizce olan uluslararası bir araştırma ekibindeyim. Ev sahibi şirkette dil zorluğu beklemiyorum.",
    pitfalls_tr: [
      "İngilizceyi abartmak — cevap kalitesinle uyumsuz olur.",
      "Tek cümleyle 'iyiyim' deyip geçmek — kanıt sun.",
    ],
    redFlags_tr: [
      "Soruyu anlamamak — direkt başvuru için sorun.",
    ],
    category: "academic",
    difficulty: "B2",
  },
];

// ============================================================
// US — H-1B Work (3)
// ============================================================

const US_H1B: readonly VisaQuestion[] = [
  {
    id: "us.h1b.role",
    country: "us",
    visaType: "h1b-work",
    question_en: "What is your job role and salary in the US?",
    question_tr: "ABD'deki iş rolünüz ve maaşınız ne?",
    intent_tr:
      "LCA'da yazan maaşla söylediğin rakam aynı olmalı. Görev tanımı LCA bilgileriyle uyumlu olmalı.",
    good_answer_en:
      "I've been hired as a Senior Software Engineer at Microsoft in Redmond. My annual base salary is $172,000, which matches the wage on the Labor Condition Application. I'll be working on the Azure storage team — distributed systems, mainly in Go and C#.",
    good_answer_tr:
      "Microsoft'ta Redmond'da Kıdemli Yazılım Mühendisi olarak işe alındım. Yıllık temel maaşım 172,000 dolar, bu Labor Condition Application'daki ücretle eşleşiyor. Azure depolama ekibinde çalışacağım — dağıtık sistemler, ağırlıklı olarak Go ve C#.",
    pitfalls_tr: [
      "LCA'daki maaşla farklı rakam söylemek.",
      "Görev tanımını bilmemek.",
    ],
    redFlags_tr: [
      "Sahte iş teklifi — sistem dosyayı inceler.",
    ],
    category: "purpose",
    difficulty: "C1",
  },
  {
    id: "us.h1b.specialty",
    country: "us",
    visaType: "h1b-work",
    question_en: "Why does this position require a specialty occupation worker?",
    question_tr: "Bu pozisyon neden uzmanlık mesleği çalışanı gerektiriyor?",
    intent_tr:
      "H-1B'nin temeli: rol gerçekten lisans derecesi gerektiren özel uzmanlık mı?",
    good_answer_en:
      "The role requires a bachelor's or higher in Computer Science or a related field because the work involves designing scalable storage systems and optimizing distributed database performance — that requires formal training in algorithms, systems design, and networking. My degree from METU and seven years of senior-level work match those requirements directly.",
    good_answer_tr:
      "Rol, Bilgisayar Mühendisliği veya ilgili bir alanda lisans veya üstü gerektiriyor çünkü iş ölçeklenebilir depolama sistemleri tasarlamayı ve dağıtık veritabanı performansını optimize etmeyi içeriyor — bu, algoritmalar, sistem tasarımı ve ağ konularında resmi eğitim gerektiriyor. ODTÜ'deki diplomam ve yedi yıllık üst düzey iş deneyimim bu gereksinimlerle doğrudan eşleşiyor.",
    pitfalls_tr: [
      "'Bilmem' tipi cevap — pozisyonu anlamadığın belli olur.",
      "Görevi basit göstermek — uzmanlık argümanını zayıflatır.",
    ],
    redFlags_tr: [
      "'Aslında bu işi herkes yapabilir' — H-1B onayını riske atar.",
    ],
    category: "academic",
    difficulty: "C1",
  },
  {
    id: "us.h1b.family",
    country: "us",
    visaType: "h1b-work",
    question_en: "Will your family travel with you?",
    question_tr: "Aileniz sizinle birlikte seyahat edecek mi?",
    intent_tr:
      "H-4 başvuruları ayrı işlenir. Aile var/yok, gelecek/gelmeyecek, dürüst söyle.",
    good_answer_en:
      "My wife will follow me on an H-4 visa about a month later, once she finishes her notice period at her current job in Istanbul. We don't have children yet. She's applied for the H-4 separately, and her appointment is next month.",
    good_answer_tr:
      "Eşim, İstanbul'daki mevcut işindeki ihbar süresini bitirdikten sonra yaklaşık bir ay sonra bana H-4 vizesiyle katılacak. Henüz çocuğumuz yok. H-4 için ayrı başvurdu ve randevusu önümüzdeki ay.",
    pitfalls_tr: [
      "Aile geleceğini gizlemek.",
      "H-4 randevu durumunu bilmemek.",
    ],
    redFlags_tr: [
      "'Belki gelir, belki gelmez' — belirsizlik.",
    ],
    category: "personal",
    difficulty: "B2",
  },
];

// ============================================================
// UK — Visit (5)
// ============================================================

const UK_VISIT: readonly VisaQuestion[] = [
  {
    id: "uk.visit.purpose",
    country: "uk",
    visaType: "uk-visit",
    question_en: "What is the main purpose of your visit to the UK?",
    question_tr: "Birleşik Krallık'a ziyaretinizin ana amacı nedir?",
    intent_tr:
      "Net, kısa, spesifik. UK Standard Visitor için izin verilen aktiviteler dışında bir şey ima etme.",
    good_answer_en:
      "Tourism and visiting friends. I'll be in London for eight days — sightseeing, museums, a few West End shows. I'm also meeting two friends from my university days who now work in London, but I'm staying in a hotel near King's Cross, not with them.",
    good_answer_tr:
      "Turizm ve arkadaş ziyareti. Sekiz gün boyunca Londra'da olacağım — gezme, müzeler, birkaç West End oyunu. Şimdi Londra'da çalışan üniversite günlerimden iki arkadaşımla da buluşacağım ama onda değil, King's Cross yakınında bir otelde kalıyorum.",
    pitfalls_tr: [
      "İş ve turizmi karıştırmak — UK'de iş için ayrı vize gerekir.",
      "'Belki bir iş görüşmesi yapabilirim' — kategori değişikliği.",
    ],
    redFlags_tr: [
      "'İş bulup kalabilirim' — anında ret.",
    ],
    category: "purpose",
    difficulty: "B1",
  },
  {
    id: "uk.visit.cost",
    country: "uk",
    visaType: "uk-visit",
    question_en: "How are you funding your trip?",
    question_tr: "Seyahatinizi nasıl finanse ediyorsunuz?",
    intent_tr:
      "Banka ekstresi ve gelir kanıtı ile söylediğin tutarlı mı?",
    good_answer_en:
      "I'm covering everything from my own savings. I've been working in Istanbul for nine years, my salary is around 95,000 TL per month, and my Akbank account currently holds about 480,000 TL. My total trip budget is around 65,000 TL, including flights and hotel.",
    good_answer_tr:
      "Her şeyi kendi birikimlerimden karşılıyorum. Dokuz yıldır İstanbul'da çalışıyorum, maaşım aylık yaklaşık 95.000 TL ve Akbank hesabımda şu anda yaklaşık 480.000 TL var. Toplam seyahat bütçem uçuşlar ve otel dahil yaklaşık 65.000 TL.",
    pitfalls_tr: [
      "Hesap bakiyesini abartılı söylemek — belge ile eşleşmeli.",
      "TL/GBP karışıklığı.",
    ],
    redFlags_tr: [
      "'Akrabamın hesabı kullanılacak' belirsizliği.",
    ],
    category: "finances",
    difficulty: "B2",
  },
  {
    id: "uk.visit.itinerary",
    country: "uk",
    visaType: "uk-visit",
    question_en: "What is your itinerary?",
    question_tr: "Seyahat planınız nasıl?",
    intent_tr:
      "Planın somut mu, plansız mı görünüyorsun?",
    good_answer_en:
      "I land at Heathrow on Saturday morning and check into the Premier Inn in King's Cross. Sunday is the British Museum, Monday is a day trip to Oxford, Tuesday and Wednesday are Tate Modern, Borough Market, and a play. Thursday I take the train to Edinburgh for two nights, and I fly home from Edinburgh on Sunday.",
    good_answer_tr:
      "Cumartesi sabahı Heathrow'a iniyorum ve King's Cross'taki Premier Inn'e check-in yapıyorum. Pazar British Museum, Pazartesi Oxford'a günübirlik gezi, Salı ve Çarşamba Tate Modern, Borough Market ve bir oyun. Perşembe iki gece için Edinburgh'a tren yolculuğu yapıyorum ve Pazar günü Edinburgh'tan eve uçuyorum.",
    pitfalls_tr: [
      "Tüm gün planını söylemek zorunda değilsin — ana noktalar yeterli.",
      "Şehir adlarını yanlış söylemek.",
    ],
    redFlags_tr: [
      "'Henüz planlamadım' — UK için olumsuz.",
    ],
    category: "purpose",
    difficulty: "B2",
  },
  {
    id: "uk.visit.ties",
    country: "uk",
    visaType: "uk-visit",
    question_en: "Why should we believe you'll return to Turkey?",
    question_tr: "Türkiye'ye döneceğinize neden inanalım?",
    intent_tr:
      "UK için doğrudan sorulan agresif soru. Hazırlıklı ol, savunmacı olma.",
    good_answer_en:
      "Because everything important in my life is in Turkey. I have a permanent civil service position that I worked nine years to get, my parents are elderly and I'm their only child, and I own the apartment I live in. I also need to be back for my annual performance review in mid-July. I have nothing to gain and a lot to lose by overstaying.",
    good_answer_tr:
      "Çünkü hayatımdaki her önemli şey Türkiye'de. Almak için dokuz yıl uğraştığım kalıcı bir devlet memurluğu pozisyonum var, ailem yaşlı ve tek çocuklarıyım ve içinde yaşadığım daireyi sahibim. Ayrıca Temmuz ortasındaki yıllık performans değerlendirmem için geri dönmem gerekiyor. Aşan kalmamla kaybedecek çok şeyim var, kazanacak hiçbir şeyim yok.",
    pitfalls_tr: [
      "Defansive ton — sakin ve gerçekçi tut.",
      "Sadece 'Ailem var' deyip somut yapmamak.",
    ],
    redFlags_tr: [
      "'Aslında dönmek istemiyorum ama dönmek zorundayım' — kötü çerçeve.",
    ],
    category: "ties-to-home",
    difficulty: "C1",
    recentlyReported_2026: true,
  },
  {
    id: "uk.visit.refusal",
    country: "uk",
    visaType: "uk-visit",
    question_en: "Have you ever been refused a UK visa or any other visa?",
    question_tr: "UK vizeniz veya başka bir ülke vizeniz reddedildi mi?",
    intent_tr:
      "Reddi gizlemek otomatik ret. Dürüst söyle + ne değiştiğini açıkla.",
    good_answer_en:
      "I was refused a UK Standard Visitor visa in 2020. The refusal letter said the financial evidence wasn't sufficient at the time — I had just changed jobs. Since then I've been in the same position for over five years, my salary has roughly doubled, and I've travelled to Schengen countries three times without any issues.",
    good_answer_tr:
      "2020'de bir UK Standart Ziyaretçi vizem reddedildi. Ret mektubu o zamanki finansal kanıtın yetersiz olduğunu söylüyordu — yeni iş değiştirmiştim. O zamandan beri beş yıldan fazladır aynı pozisyondayım, maaşım yaklaşık iki katına çıktı ve üç kez Schengen ülkelerine sorunsuz seyahat ettim.",
    pitfalls_tr: [
      "Reddi gizlemek — sistem görüyor, oto ret.",
      "Suçu memura/sisteme atmak.",
    ],
    redFlags_tr: [
      "Sahte 'hayır, hiç reddedilmedim' beyanı.",
    ],
    category: "previous-travel",
    difficulty: "B2",
  },
];

// ============================================================
// UK — Student (4)
// ============================================================

const UK_STUDENT: readonly VisaQuestion[] = [
  {
    id: "uk.student.cas",
    country: "uk",
    visaType: "uk-student",
    question_en: "Tell me about your CAS and the course you'll study.",
    question_tr: "CAS'ınız ve okuyacağınız kurs hakkında bilgi verin.",
    intent_tr:
      "CAS numaranı bil, kursu özetle, niye seçtiğini söyle.",
    good_answer_en:
      "My CAS was issued by the University of Manchester on March 14th — the number ends in 4297. I'll be studying an MSc in Data Science, a one-year full-time programme starting in September. The course covers machine learning, statistics, and a six-month dissertation, which I plan to do on healthcare analytics.",
    good_answer_tr:
      "CAS'ım Manchester Üniversitesi tarafından 14 Mart'ta verildi — numara 4297 ile bitiyor. Eylül'de başlayan bir yıllık tam zamanlı bir program olan MSc Veri Bilimi okuyacağım. Kurs makine öğrenmesi, istatistik ve sağlık analitiği üzerine yapmayı planladığım altı aylık bir tez içeriyor.",
    pitfalls_tr: [
      "CAS numarasını bilmemek.",
      "Kurs içeriğini ezbere okumak.",
    ],
    redFlags_tr: [
      "Kursun adını yanlış söylemek.",
    ],
    category: "academic",
    difficulty: "B2",
  },
  {
    id: "uk.student.maintenance",
    country: "uk",
    visaType: "uk-student",
    question_en: "How will you support yourself financially while studying?",
    question_tr: "Eğitim sırasında kendinizi nasıl maddi olarak destekleyeceksiniz?",
    intent_tr:
      "Maintenance funds: belirli bir tutar 28 gün boyunca hesabında olmalı. Tutarı bilmelisin.",
    good_answer_en:
      "My father is sponsoring me. He's a pharmacist with his own pharmacy in Izmir. He's deposited the required maintenance funds — about £14,000 for living costs plus tuition — in my account, and the balance has been held for over the required 28 days. My TOEFL was 95, and the bank statements are in my application.",
    good_answer_tr:
      "Babam sponsorum. İzmir'de kendi eczanesi olan bir eczacı. Gerekli geçim fonlarını — geçim için yaklaşık 14.000 sterlin artı öğrenim ücreti — hesabıma yatırdı ve bakiye gerekli 28 günden fazla süredir tutuluyor. TOEFL'um 95 ve banka ekstreleri başvurumda.",
    pitfalls_tr: [
      "28 gün kuralını bilmemek.",
      "Tutarı yanlış söylemek.",
    ],
    redFlags_tr: [
      "'Yarı zamanlı çalışıp öderim' — Student Visa'da kısıtlı çalışma izni var.",
    ],
    category: "finances",
    difficulty: "C1",
  },
  {
    id: "uk.student.future",
    country: "uk",
    visaType: "uk-student",
    question_en: "What do you plan to do after your studies?",
    question_tr: "Eğitim sonrası ne yapmayı planlıyorsunuz?",
    intent_tr:
      "Graduate Route biliyor musun? Niyet net olmalı.",
    good_answer_en:
      "I plan to return to Turkey within twelve months of graduation. I might use the Graduate Route to get six to twelve months of UK industry experience first, especially in healthcare analytics, but my career goal is to join the data team at Acıbadem Hospital where I previously interned. They've kept in touch and confirmed they'd consider me when I return.",
    good_answer_tr:
      "Mezuniyetten sonraki on iki ay içinde Türkiye'ye dönmeyi planlıyorum. Önce altı ila on iki ay UK sanayi deneyimi kazanmak için Graduate Route'u kullanabilirim, özellikle sağlık analitiğinde, ancak kariyer hedefim daha önce staj yaptığım Acıbadem Hastanesi'nin veri ekibine katılmak. İletişimde kaldılar ve döndüğümde beni değerlendireceklerini onayladılar.",
    pitfalls_tr: [
      "Graduate Route'u tamamen ihmal etmek — biliyor olmalısın.",
      "UK'de kalıcı kalma niyetini ima etmek.",
    ],
    redFlags_tr: [
      "'Settled status almak istiyorum' — Student Visa için aşırı niyet.",
    ],
    category: "post-trip",
    difficulty: "C1",
  },
  {
    id: "uk.student.gap",
    country: "uk",
    visaType: "uk-student",
    question_en: "Why did you wait three years after your bachelor's to study again?",
    question_tr: "Lisanstan sonra tekrar okumak için neden üç yıl beklediniz?",
    intent_tr:
      "Eğitim arasındaki boşluğun mantıklı bir hikayesi olmalı.",
    good_answer_en:
      "After my bachelor's I worked as a data analyst at Türk Telekom for three years to gain real-world experience. During that time I worked on customer churn models and realised I wanted deeper expertise in machine learning, which my employer doesn't fully cover internally. That's exactly what the Manchester MSc offers, which is why I applied now.",
    good_answer_tr:
      "Lisans sonrası gerçek dünya deneyimi kazanmak için Türk Telekom'da üç yıl veri analisti olarak çalıştım. O sırada müşteri kayıp modelleri üzerine çalıştım ve makine öğrenmesinde daha derin uzmanlık istediğimi fark ettim, ki bu işverenim tarafından dahili olarak tam olarak sağlanmıyor. Bu da tam olarak Manchester MSc'nin sunduğu şey, bu yüzden şimdi başvurdum.",
    pitfalls_tr: [
      "Boşluğu açıklayamamak.",
      "Çelişkili tarihler vermek.",
    ],
    redFlags_tr: [
      "'Üç yıl işsizdim, bu yüzden okumak istedim' — net olmayan motivasyon.",
    ],
    category: "academic",
    difficulty: "C1",
  },
];

// ============================================================
// Schengen — Short Stay (6)
// ============================================================

const SCHENGEN_SHORT: readonly VisaQuestion[] = [
  {
    id: "schengen.short.purpose",
    country: "schengen",
    visaType: "schengen-short",
    question_en: "What is the purpose and main destination of your trip?",
    question_tr: "Seyahatinizin amacı ve ana hedef ülkeniz nedir?",
    intent_tr:
      "Schengen kuralı: en uzun kalacağın ülkenin konsolosluğuna başvur. Bunu bilmelisin.",
    good_answer_en:
      "Tourism. I'm flying into Paris, spending eight days in France — Paris, Lyon, and Marseille — and then four days in Italy. France is my main destination, which is why I'm applying through the French consulate. I fly back to Istanbul from Rome on October 1st.",
    good_answer_tr:
      "Turizm. Paris'e uçuyorum, Fransa'da sekiz gün geçiriyorum — Paris, Lyon ve Marseille — ardından İtalya'da dört gün. Ana hedefim Fransa, bu yüzden Fransa konsolosluğu üzerinden başvuruyorum. 1 Ekim'de Roma'dan İstanbul'a uçuyorum.",
    pitfalls_tr: [
      "'Sadece Schengen' demek — hangi ülke ana hedef?",
      "Birden çok ülkede neredeyse eşit gün geçirmek — şüpheli.",
    ],
    redFlags_tr: [
      "'Sonra başka bir Schengen ülkesinde kalabilirim' — niyet belirsizliği.",
    ],
    category: "purpose",
    difficulty: "B1",
  },
  {
    id: "schengen.short.insurance",
    country: "schengen",
    visaType: "schengen-short",
    question_en: "Do you have travel insurance?",
    question_tr: "Seyahat sigortanız var mı?",
    intent_tr:
      "Schengen zorunlu: minimum 30.000 EUR sağlık + tüm Schengen alanını kapsayan poliçe.",
    good_answer_en:
      "Yes. I have a Schengen-compliant policy from Allianz Sigorta with €50,000 of medical coverage, valid for the full duration of my trip and across all Schengen countries. The certificate is in my document folder.",
    good_answer_tr:
      "Evet. Allianz Sigorta'dan 50.000 EUR sağlık teminatı olan, seyahatimin tüm süresi ve tüm Schengen ülkelerinde geçerli, Schengen uyumlu bir poliçem var. Sertifika belge klasörümde.",
    pitfalls_tr: [
      "Minimum tutarı bilmemek.",
      "Belgesini başvuruya eklememek.",
    ],
    redFlags_tr: [
      "'Sigorta gerekli mi?' — hazırlıksızlık.",
    ],
    category: "purpose",
    difficulty: "B1",
  },
  {
    id: "schengen.short.salary",
    country: "schengen",
    visaType: "schengen-short",
    question_en: "What is your monthly net salary?",
    question_tr: "Aylık net maaşınız nedir?",
    intent_tr:
      "Banka ekstresi ve maaş bordrosu ile tutarlı olmalı. Net rakam söyle.",
    good_answer_en:
      "My net monthly salary is around 78,000 TL. I've been at the same company for six years and my last three months' payslips are in the application. I also have about 240,000 TL in my main account.",
    good_answer_tr:
      "Aylık net maaşım yaklaşık 78.000 TL. Altı yıldır aynı şirketteyim ve son üç ayın maaş bordrolarım başvuruda. Ayrıca ana hesabımda yaklaşık 240.000 TL var.",
    pitfalls_tr: [
      "Brüt-net karışıklığı.",
      "Belge dışı rakam söylemek.",
    ],
    redFlags_tr: [
      "Yetersiz birikim ve düşük maaşla pahalı bir tur planı.",
    ],
    category: "finances",
    difficulty: "B1",
  },
  {
    id: "schengen.short.return",
    country: "schengen",
    visaType: "schengen-short",
    question_en: "Why should we believe you'll leave the Schengen area on time?",
    question_tr: "Schengen bölgesini zamanında terk edeceğinize neden inanalım?",
    intent_tr:
      "Türkiye bağlarını sayısal ve somut sun. Defansive olma.",
    good_answer_en:
      "Because I've travelled to Schengen four times in the past five years — twice to Germany, once to Spain, once to the Netherlands — and I returned within the visa period every single time. My job, my mortgage, and my family are all in Istanbul. There's no incentive for me to overstay.",
    good_answer_tr:
      "Çünkü son beş yılda dört kez Schengen'e seyahat ettim — iki kez Almanya, bir kez İspanya, bir kez Hollanda — ve her seferinde vize süresi içinde döndüm. İşim, ipoteğim ve ailem hepsi İstanbul'da. Aşan kalmak için hiçbir teşvik yok.",
    pitfalls_tr: [
      "Belirsiz cevap.",
      "Sayı veren somut argüman yok.",
    ],
    redFlags_tr: [
      "Önceki vize ihlali.",
    ],
    category: "ties-to-home",
    difficulty: "B2",
  },
  {
    id: "schengen.short.hotel",
    country: "schengen",
    visaType: "schengen-short",
    question_en: "Where will you stay in each city?",
    question_tr: "Her şehirde nerede kalacaksınız?",
    intent_tr:
      "Rezervasyonlar var mı, gerçek mi, dosyada mı?",
    good_answer_en:
      "I have hotel reservations for every night. In Paris I'm at the Ibis Bastille for four nights, in Lyon at the Mercure Centre Beaux Arts for two nights, then a Booking.com apartment in Marseille for two nights, and in Rome I'm at Hotel Trastevere for four nights. All the confirmations are in my application.",
    good_answer_tr:
      "Her gece için otel rezervasyonum var. Paris'te dört gece Ibis Bastille'de, Lyon'da iki gece Mercure Centre Beaux Arts'ta, sonra Marseille'de iki gece bir Booking.com dairesinde ve Roma'da dört gece Hotel Trastevere'de kalıyorum. Tüm onaylar başvurumda.",
    pitfalls_tr: [
      "Sahte rezervasyon — ücretsiz iptal etmek ucuz numara, görülür.",
    ],
    redFlags_tr: [
      "Şehir-otel uyumsuzluğu (Roma'da kalıyorum ama Milano oteli).",
    ],
    category: "purpose",
    difficulty: "B1",
  },
  {
    id: "schengen.short.firsttime",
    country: "schengen",
    visaType: "schengen-short",
    question_en: "This is your first Schengen visa application — is that correct?",
    question_tr: "Bu ilk Schengen vize başvurunuz mu?",
    intent_tr:
      "İlk başvuru riski daha yüksek; bağlar ve plan daha güçlü olmalı.",
    good_answer_en:
      "Yes, this is my first Schengen application. I previously held UK and US visitor visas — I went to London for ten days in 2022 and to New York for two weeks in 2023, both within the visa period. I waited until I had a stable career and savings before applying to Schengen.",
    good_answer_tr:
      "Evet, bu ilk Schengen başvurum. Önceden UK ve ABD ziyaretçi vizelerim vardı — 2022'de on gün için Londra'ya ve 2023'te iki hafta için New York'a gittim, ikisi de vize süresi içinde. Schengen'e başvurmadan önce istikrarlı bir kariyere ve birikime kadar bekledim.",
    pitfalls_tr: [
      "Önceki diğer ülke vizelerinden bahsetmemek — bu güçlü kanıt.",
    ],
    redFlags_tr: [
      "Hiç başka vize geçmişi yok + zayıf bağ.",
    ],
    category: "previous-travel",
    difficulty: "B2",
  },
];

// ============================================================
// Canada — Study/Work (4)
// ============================================================

const CANADA: readonly VisaQuestion[] = [
  {
    id: "ca.study.dliprogram",
    country: "canada",
    visaType: "canada-study",
    question_en: "Which DLI are you attending and what is your program?",
    question_tr: "Hangi DLI'ya katılıyorsunuz ve programınız nedir?",
    intent_tr:
      "Designated Learning Institution = onaylı kurum. Adı, program adı, kabul mektubu (LOA) tarihiyle ortaya koy.",
    good_answer_en:
      "I'll be attending the University of Toronto — a DLI — for a Master of Science in Computer Science, full-time, starting this September. My acceptance letter is dated April 2nd. The program is two years, and I'm in the AI specialization track.",
    good_answer_tr:
      "Bir DLI olan Toronto Üniversitesi'nde, bu Eylül'de başlayan Bilgisayar Bilimi Yüksek Lisansı'na tam zamanlı katılacağım. Kabul mektubum 2 Nisan tarihli. Program iki yıllık ve YZ uzmanlık programındayım.",
    pitfalls_tr: [
      "DLI kavramını bilmemek.",
      "LOA tarihini bilmemek.",
    ],
    redFlags_tr: [
      "DLI olmayan kurum (geçersiz başvuru).",
    ],
    category: "academic",
    difficulty: "B2",
  },
  {
    id: "ca.study.gic",
    country: "canada",
    visaType: "canada-study",
    question_en: "Have you completed the GIC requirement?",
    question_tr: "GIC gereksinimini tamamladınız mı?",
    intent_tr:
      "Guaranteed Investment Certificate (SDS programı). Tutarı ve bankayı bil.",
    good_answer_en:
      "Yes. I deposited the required 20,635 Canadian dollars into a GIC at Scotiabank last month for the SDS application. The certificate is in my application. The tuition for the first year, which is 58,160 dollars, has also been paid in full.",
    good_answer_tr:
      "Evet. Geçen ay SDS başvurusu için Scotiabank'ta gerekli olan 20.635 Kanada doları GIC'e yatırdım. Sertifika başvurumda. Birinci yıl öğrenim ücreti olan 58.160 dolar da tam olarak ödendi.",
    pitfalls_tr: [
      "Tutarı bilmemek.",
      "SDS kavramını duymamış olmak.",
    ],
    redFlags_tr: [
      "GIC tutarsız beyan.",
    ],
    category: "finances",
    difficulty: "C1",
  },
  {
    id: "ca.work.lmiajob",
    country: "canada",
    visaType: "canada-work",
    question_en: "Tell me about your job offer and LMIA.",
    question_tr: "İş teklifiniz ve LMIA'nız hakkında bilgi verin.",
    intent_tr:
      "LMIA = Labour Market Impact Assessment. Pozitif LMIA olmadan çoğu work permit reddedilir.",
    good_answer_en:
      "I have a positive LMIA dated February 10th for a Senior Mechanical Engineer position at Bombardier in Montreal. The annual salary is 105,000 Canadian dollars, the contract is two years, and the LMIA case file number is in my application. I'd start in early August.",
    good_answer_tr:
      "10 Şubat tarihli pozitif bir LMIA'm var, Montreal'deki Bombardier'de Kıdemli Makine Mühendisi pozisyonu için. Yıllık maaş 105.000 Kanada doları, sözleşme iki yıllık ve LMIA dosya numarası başvurumda. Ağustos başında başlayacağım.",
    pitfalls_tr: [
      "LMIA olduğunu söylememek.",
      "Pozisyon, şirket, maaş arasında tutarsızlık.",
    ],
    redFlags_tr: [
      "LMIA tarihinden eski/süresi geçmiş başvuru.",
    ],
    category: "purpose",
    difficulty: "C1",
  },
  {
    id: "ca.study.afterpgwp",
    country: "canada",
    visaType: "canada-study",
    question_en: "What will you do after graduation?",
    question_tr: "Mezun olduktan sonra ne yapacaksınız?",
    intent_tr:
      "PGWP düşünüyorsan sorun değil ama uzun vadeli niyetin dürüst olmalı.",
    good_answer_en:
      "I plan to apply for a Post-Graduation Work Permit to get one or two years of Canadian industry experience, which makes me much more competitive when I return to Turkey. Long-term I want to lead a research team at TÜBİTAK in Ankara — my father is a senior researcher there and he's discussed bringing me in.",
    good_answer_tr:
      "Bir veya iki yıllık Kanada sanayi deneyimi kazanmak için Mezuniyet Sonrası Çalışma İzni'ne (PGWP) başvurmayı planlıyorum, bu Türkiye'ye döndüğümde beni çok daha rekabetçi yapıyor. Uzun vadede Ankara'daki TÜBİTAK'ta bir araştırma ekibine liderlik etmek istiyorum — babam orada kıdemli bir araştırmacı ve beni almayı konuştuk.",
    pitfalls_tr: [
      "PGWP'yi tek hedef gibi sunmak.",
      "Türkiye dönüş planına somut bağ sunmamak.",
    ],
    redFlags_tr: [
      "'PR (kalıcı oturum) almak istiyorum' — Study Permit aşamasında çok erken.",
    ],
    category: "post-trip",
    difficulty: "C1",
  },
];

// ============================================================
// Australia (3)
// ============================================================

const AUSTRALIA: readonly VisaQuestion[] = [
  {
    id: "au.tour.purpose",
    country: "australia",
    visaType: "australia-tourism",
    question_en: "What is the purpose of your trip to Australia?",
    question_tr: "Avustralya'ya seyahatinizin amacı nedir?",
    intent_tr:
      "Genuine visitor şartı. Net plan, makul süre, dönüş sebebi.",
    good_answer_en:
      "Tourism and visiting my brother. He's been working as a chef in Melbourne for four years on a skilled visa. I'll spend three weeks there — two in Melbourne and one in Sydney. I land on November 3rd and fly back to Istanbul on November 24th.",
    good_answer_tr:
      "Turizm ve kardeşimi ziyaret. Dört yıldır Melbourne'da nitelikli vizeyle şef olarak çalışıyor. Üç hafta orada geçireceğim — Melbourne'da iki ve Sidney'de bir. 3 Kasım'da iniyorum ve 24 Kasım'da İstanbul'a uçuyorum.",
    pitfalls_tr: [
      "Akraba ziyaretini saklamak.",
      "Süreyi belirsiz tutmak.",
    ],
    redFlags_tr: [
      "'Belki kardeşimin yanında çalışmaya bakarım' — ret.",
    ],
    category: "purpose",
    difficulty: "B1",
  },
  {
    id: "au.tour.cost",
    country: "australia",
    visaType: "australia-tourism",
    question_en: "How will you cover the cost of your trip?",
    question_tr: "Seyahatinizin masraflarını nasıl karşılayacaksınız?",
    intent_tr:
      "Avustralya pahalı. Birikim ve gelir gerçekçi olmalı.",
    good_answer_en:
      "I'll cover it from my own savings. My total budget is around 5,500 Australian dollars, mostly for flights, accommodation, and inter-city travel. I have about 320,000 TL in savings — well over what I need — and my monthly salary as a finance analyst is around 88,000 TL. The bank statements are attached.",
    good_answer_tr:
      "Kendi birikimimden karşılayacağım. Toplam bütçem yaklaşık 5.500 Avustralya doları, çoğunlukla uçuşlar, konaklama ve şehirler arası seyahat için. Yaklaşık 320.000 TL birikimim var — ihtiyacımdan çok daha fazla — ve finans analisti olarak aylık maaşım yaklaşık 88.000 TL. Banka ekstreleri ekli.",
    pitfalls_tr: [
      "Bütçeyi tahmin edememek.",
    ],
    redFlags_tr: [
      "Yetersiz birikim ve uzun bir tur planı.",
    ],
    category: "finances",
    difficulty: "B2",
  },
  {
    id: "au.student.cor",
    country: "australia",
    visaType: "australia-student",
    question_en: "Why did you choose this Australian university?",
    question_tr: "Bu Avustralya üniversitesini neden seçtiniz?",
    intent_tr:
      "Genuine Student kriteri (GS). Üniversiteyi neden farklı seçtiğini açıkla.",
    good_answer_en:
      "I chose the University of Melbourne mainly for its public health master's, which is consistently ranked in the world's top twenty in that field. The program also has a strong epidemiology track, which is exactly what I need to advance from clinician to public health researcher. I compared it to two UK programs and Melbourne offered the best research fit.",
    good_answer_tr:
      "Melbourne Üniversitesi'ni başlıca halk sağlığı yüksek lisansı için seçtim, bu o alanda sürekli dünyanın ilk yirmisinde sıralanıyor. Programın güçlü bir epidemiyoloji yolu da var, ki bu klinisyenden halk sağlığı araştırmacısına geçmek için tam olarak ihtiyacım olan şey. İki UK programıyla karşılaştırdım ve Melbourne en iyi araştırma uyumunu sundu.",
    pitfalls_tr: [
      "Spesifik program adı bilmemek.",
      "Karşılaştırma yapmamak.",
    ],
    redFlags_tr: [
      "'Avustralya'ya yerleşmek istiyordum' — GS reddi.",
    ],
    category: "academic",
    difficulty: "C1",
  },
];

// ============================================================
// Registry + lookup helpers
// ============================================================

export const VISA_QUESTIONS: readonly VisaQuestion[] = [
  ...US_B1B2,
  ...US_F1,
  ...US_J1,
  ...US_H1B,
  ...UK_VISIT,
  ...UK_STUDENT,
  ...SCHENGEN_SHORT,
  ...CANADA,
  ...AUSTRALIA,
];

export function getVisaQuestion(id: string): VisaQuestion | undefined {
  return VISA_QUESTIONS.find((q) => q.id === id);
}

export function getQuestionsByCountry(country: VisaCountry): VisaQuestion[] {
  return VISA_QUESTIONS.filter((q) => q.country === country);
}

export function getQuestionsByType(type: VisaType): VisaQuestion[] {
  return VISA_QUESTIONS.filter((q) => q.visaType === type);
}

export const VISA_COUNTRY_LABELS: Record<VisaCountry, string> = {
  us: "ABD",
  uk: "UK",
  schengen: "Schengen",
  canada: "Kanada",
  australia: "Avustralya",
};

export const VISA_TYPE_LABELS: Record<VisaType, string> = {
  "b1-b2-tourism": "B1/B2 Turist",
  "b1-b2-business": "B1/B2 İş",
  "f1-student": "F-1 Öğrenci",
  "j1-exchange": "J-1 Değişim",
  "h1b-work": "H-1B Çalışma",
  "schengen-short": "Schengen Kısa",
  "uk-visit": "UK Ziyaret",
  "uk-student": "UK Öğrenci",
  "canada-study": "Kanada Öğrenci",
  "canada-work": "Kanada Çalışma",
  "australia-tourism": "AU Turist",
  "australia-student": "AU Öğrenci",
};

export const VISA_CATEGORY_LABELS: Record<VisaCategory, string> = {
  purpose: "Amaç",
  "ties-to-home": "Türkiye Bağı",
  finances: "Mali Durum",
  academic: "Akademik",
  "previous-travel": "Önceki Seyahat",
  "post-trip": "Sonraki Plan",
  personal: "Kişisel",
};
