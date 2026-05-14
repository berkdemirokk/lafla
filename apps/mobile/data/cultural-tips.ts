// Cultural Intelligence — 50 cards covering the subtext of English-speaking cultures.
// Turkish learners are typically grammatically literate but culturally raw:
// they translate the words and miss the temperature, distance, and timing.
// Each tip is a single, focused contrast — one wrong move, one right move,
// and a sentence about why this specifically trips up Turks.
//
// Region tags reflect where the norm is strongest, not exclusivity.
// "all-english" = applies broadly across US/UK/AU/CA.

export type CulturalAxis =
  | "directness"
  | "register"
  | "regional"
  | "humor"
  | "tipping"
  | "body-language"
  | "small-talk"
  | "compliments"
  | "complaints"
  | "agreement"
  | "time"
  | "social-norms";

export interface CulturalTip {
  id: string;
  axis: CulturalAxis;
  region: "us" | "uk" | "au" | "ca" | "all-english";
  title_tr: string;
  scenario_tr: string;
  do_tr: string;
  dont_tr: string;
  example_en: string;
  pitfall_for_turks_tr: string;
  cefrRelevance: "all" | "B1+" | "B2+";
}

export const CULTURAL_TIPS: readonly CulturalTip[] = [
  // ── Small talk ─────────────────────────────────────────────
  {
    id: "ct.howareyou.us",
    axis: "small-talk",
    region: "us",
    title_tr: "Amerikalı 'How are you?' deyince ne bekliyor?",
    scenario_tr:
      "Bir mağazada kasiyer gözünün içine bakmadan 'Hi, how are you?' diyor. Türk refleksi: 'İyi ama dün uykusuzdum, bugün de...' diye anlatmaya başlamak.",
    do_tr: "Kısa, hafif, geri-soruyla bitir: 'Good, you?' veya 'Doing well, thanks.'",
    dont_tr:
      "Gerçek bir günlük raporu verme. Hastalık, iş stresi, trafik — yabancı bir kulağa fazla gelir.",
    example_en: "— How are you?\n— Good, thanks. You?",
    pitfall_for_turks_tr:
      "Türkçede 'Nasılsın?' samimi bir soru. İngilizcede 'How are you?' büyük oranda bir selamlama formülü.",
    cefrRelevance: "all",
  },
  {
    id: "ct.weather.opener",
    axis: "small-talk",
    region: "uk",
    title_tr: "Hava durumu — gerçek bir konu değil, kapı zili",
    scenario_tr:
      "Londra'da otobüs durağında yanına biri geçti, 'Bit chilly today, innit?' dedi. Hava raporu beklemiyor.",
    do_tr: "Aynı seviyede onayla: 'Yeah, freezing.' veya 'Could do with some sun.'",
    dont_tr:
      "Sıcaklığı Celsius'a çevirip 'Aslında 9 derece, normalden 2 derece düşük' deme. Konuyu öldürür.",
    example_en: "— Bit chilly today, innit?\n— Yeah, brutal. Roll on summer.",
    pitfall_for_turks_tr:
      "Türklerde sıkı dostlukta hava muhabbeti 'içeriksiz' sayılır. İngilizler için ısınma turu, kötü bir şey değil.",
    cefrRelevance: "all",
  },
  {
    id: "ct.weekend.smalltalk",
    axis: "small-talk",
    region: "all-english",
    title_tr: "'How was your weekend?' — gerçek cevap ne kadar uzun?",
    scenario_tr:
      "Pazartesi sabah ofis mutfağında biri 'How was your weekend?' diyor.",
    do_tr:
      "Bir tek başlık ver, sonra geri sor: 'Pretty quiet, just caught up on sleep. How about you?'",
    dont_tr:
      "İki gününü dakika dakika anlatma. Dinleyici 30 saniye sonra kahvesine bakar.",
    example_en: "— How was your weekend?\n— Not bad — went for a hike Saturday. You?",
    pitfall_for_turks_tr:
      "'Pazar günü ne yaptın?' Türkçede içtenlik testidir. İngilizcede önce kısa cevap, derinleşme sonra.",
    cefrRelevance: "all",
  },

  // ── Directness ─────────────────────────────────────────────
  {
    id: "ct.directness.us-vs-uk",
    axis: "directness",
    region: "all-english",
    title_tr: "Aynı yemek için Amerikalı 'I don't like this', İngiliz 'It's interesting...'",
    scenario_tr:
      "Şirket yemeğinde iki ekip arkadaşı yeni bir tabakla geliyor. Amerikalı 'Eh, not my thing' diyor. İngiliz 'Hmm, it's... unusual' diyor. İkisi de hoşlanmadı.",
    do_tr:
      "İngiliz bağlamında 'It's interesting' duyarsan = beğenmedi. Amerikan bağlamında 'I'm not crazy about it' = beğenmedi.",
    dont_tr:
      "İngiliz 'interesting'i yüz değerinden alma. Övgü olarak sanma.",
    example_en: "(UK) 'It's quite an interesting choice.' = 'I don't like it.'",
    pitfall_for_turks_tr:
      "Türkler ya çok övüp ya açıkça 'olmamış' der. İngiliz inceltme katmanını kaçırırız.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.no.politely.us",
    axis: "directness",
    region: "us",
    title_tr: "Kibarca 'hayır' demek — düz 'no' yerine ne?",
    scenario_tr:
      "Bir iş arkadaşı seni cuma akşamı içkiye çağırıyor. Gitmek istemiyorsun ama bağı bozmak da istemiyorsun.",
    do_tr:
      "'I'll have to pass this time, thanks for the invite' veya 'Sounds fun, but I can't make it.'",
    dont_tr:
      "Düz 'No, thanks' sert durur. 'No, I don't want' iyice itici.",
    example_en: "— Drinks Friday?\n— I'll have to pass this time — next round's on me though.",
    pitfall_for_turks_tr:
      "Türkçede 'yok, gelmem' arkadaşlar arasında normal. İngilizcede mesafe açar.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.opinion.softeners",
    axis: "directness",
    region: "all-english",
    title_tr: "Fikrini yumuşatıcılarla başlat",
    scenario_tr:
      "Bir toplantıda karşı görüşü söyleyeceksin.",
    do_tr:
      "'I see your point, but...', 'I might be wrong, but...', 'One thing to consider is...' ile başla.",
    dont_tr:
      "'No, you're wrong' veya 'That's incorrect' yumruk gibi düşer.",
    example_en: "I might be wrong, but I think the timeline's a bit tight.",
    pitfall_for_turks_tr:
      "Türk iş kültüründe sertçe karşı çıkmak güç gösterisi. İngilizcede 'kibarlık kalkanı' beklenir.",
    cefrRelevance: "B1+",
  },

  // ── Humor ──────────────────────────────────────────────────
  {
    id: "ct.uk.dry.sarcasm",
    axis: "humor",
    region: "uk",
    title_tr: "İngiliz mizahı genelde kuru — 'literally' alma",
    scenario_tr:
      "Yağmurda ıslanmış geldin, ofis arkadaşın 'Oh, lovely weather you brought in' diyor.",
    do_tr:
      "Aynı tonla geri ver: 'Yeah, thought I'd share it.' Gülümse, geç.",
    dont_tr:
      "'Actually it's raining' diye düzeltme. Şakayı tanımıyorsun gibi olur.",
    example_en: "— Lovely weather you brought in.\n— I aim to please.",
    pitfall_for_turks_tr:
      "Türk mizahı yüksek sesli, doğrudan. İngiliz mizahı düz yüz + ters anlam. Sırıtmazsa şaka değildir sanmayız.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.deadpan.aus",
    axis: "humor",
    region: "au",
    title_tr: "Avustralyalı 'takin' the piss' — hakaret değil, sevgi",
    scenario_tr:
      "Bir Avustralyalı arkadaş seninle dalga geçer gibi 'Mate, you couldn't find your own car in a car park' der.",
    do_tr:
      "Geri dalga geç. 'And yet I beat you here.' Onlar için bu yakınlığın işareti.",
    dont_tr:
      "Alınıp 'Why are you saying this?' deme. İlişkiyi soğutur.",
    example_en: "— You drive like my grandma.\n— Bold words from a man who hit a curb yesterday.",
    pitfall_for_turks_tr:
      "Türklerde dostlar arası yarı-ciddi sövmek tanıdık. Ton farklı: Avustralyalı tonu daha 'flat'.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.us.selfdeprecation",
    axis: "humor",
    region: "us",
    title_tr: "Amerikalılar kendileriyle dalga geçer — sen de geç",
    scenario_tr:
      "İş görüşmesinde 'I'm not great with spreadsheets, but I'm learning' demek zayıflık değil, güven göstergesi.",
    do_tr:
      "Eksiklerini hafifçe espriye dök, sonra çözümünü söyle. Olgun durur.",
    dont_tr:
      "Sürekli övünmek (Türk kültüründe normal sayılabilir) Amerikalı kulağa kibirli gelir.",
    example_en: "My cooking peaked at scrambled eggs. Thank god for delivery apps.",
    pitfall_for_turks_tr:
      "Türk kültürü zayıflığı saklamayı öğretir. ABD'de 'açık ol, ama düzelt' karışımı sevilir.",
    cefrRelevance: "B2+",
  },

  // ── Tipping ────────────────────────────────────────────────
  {
    id: "ct.tipping.us.restaurant",
    axis: "tipping",
    region: "us",
    title_tr: "ABD restoran — %18-20 bahşiş, opsiyonel değil",
    scenario_tr:
      "New York'ta akşam yemeği, hesap geldi. Servis kötü değildi.",
    do_tr:
      "Vergi öncesi tutarın %18-20'sini bahşiş bırak. Kartla ödüyorsan 'tip' satırına yaz.",
    dont_tr:
      "%5-10 düşük bırakmak hakaret sayılır. Tek başına 'service charge included' yazmıyorsa bahşiş şart.",
    example_en: "Bill: $50 → tip $9-10 → total around $59-60.",
    pitfall_for_turks_tr:
      "Türkiye'de servis ücreti çoğu zaman ekli. ABD garsonları minimum ücretten az kazanır; bahşiş maaşın çoğu.",
    cefrRelevance: "all",
  },
  {
    id: "ct.tipping.uk",
    axis: "tipping",
    region: "uk",
    title_tr: "İngiltere — %10-12.5 yeter, çoğu yerde otomatik ekli",
    scenario_tr:
      "Londra'da grup yemeği, hesap geldi. 'Service charge 12.5%' satırı görüyorsun.",
    do_tr:
      "Service charge eklenmişse üstüne ekleme yapmana gerek yok. Eklenmediyse %10 yeterli.",
    dont_tr:
      "ABD refleksiyle %20 bırakma — abartılı durur, hatta garip karşılanabilir.",
    example_en: "Bill: £40 + 12.5% service = £45 → just pay £45.",
    pitfall_for_turks_tr:
      "Türk turisti ya Türkiye refleksiyle bırakmaz ya da ABD refleksiyle aşırı bırakır. UK arası.",
    cefrRelevance: "all",
  },
  {
    id: "ct.tipping.au",
    axis: "tipping",
    region: "au",
    title_tr: "Avustralya — bahşiş kültürü neredeyse yok",
    scenario_tr:
      "Sydney'de kafe, hesap $18. Bahşiş bekleniyor mu?",
    do_tr:
      "Çok özel bir servis aldıysan küsüratı yuvarla — 'Keep the change' — ama zorunlu değil.",
    dont_tr:
      "ABD usulü %20 bırakırsan garson 'Mate, you alright?' diyebilir.",
    example_en: "Bill: $18.40 → leave a $20 note, say 'Keep it.' That's plenty.",
    pitfall_for_turks_tr:
      "Türk gezgini film/dizi etkisiyle her yerde tip beklendiğini sanır.",
    cefrRelevance: "all",
  },
  {
    id: "ct.tipping.taxi.us",
    axis: "tipping",
    region: "us",
    title_tr: "ABD taksi/Uber — sürücü için %15-20",
    scenario_tr:
      "Uber'da JFK'den şehre indin, $65 yazıyor.",
    do_tr:
      "Uygulamadan %15-20 ekle. Geleneksel sarı taksi cash isterse %18 hesapla.",
    dont_tr:
      "'App'te bittiği için bahşiş yok' diye düşünme — Uber sürücüleri bahşiş bekler.",
    example_en: "Trip $65 → $10-13 tip → total $75-78.",
    pitfall_for_turks_tr:
      "Türk taksicisine bahşiş normalde verilmez. ABD'de zorunluya yakın.",
    cefrRelevance: "all",
  },

  // ── Body language ──────────────────────────────────────────
  {
    id: "ct.eye-contact.balance",
    axis: "body-language",
    region: "all-english",
    title_tr: "Göz teması: %60-70 sweet spot",
    scenario_tr:
      "İş görüşmesinde göz temasını nasıl ayarlamalı?",
    do_tr:
      "Karşıdaki konuşurken yaklaşık %60-70 göz teması, sen konuşurken %50. Doğal kırılma normal.",
    dont_tr:
      "Çok kısa (yere bak) = saklayan/güvensiz. Çok uzun (kilitle) = saldırgan/agresif.",
    example_en: "Hold gaze 3-5 seconds → glance away briefly → back. Repeat.",
    pitfall_for_turks_tr:
      "Türklerde yaşça büyüğe çok uzun bakmak saygısızlık. ABD/UK'de 'flake' gibi durur.",
    cefrRelevance: "all",
  },
  {
    id: "ct.personal-space",
    axis: "body-language",
    region: "all-english",
    title_tr: "Kişisel alan: bir kolboyu mesafe",
    scenario_tr:
      "Bir Amerikalı/İngiliz iş arkadaşıyla ayakta konuşuyorsun.",
    do_tr:
      "Yaklaşık 70-90 cm mesafede dur. Kişi geri çekiliyorsa ona göre.",
    dont_tr:
      "Türk yakınlığında 30-40 cm rahatsız eder. Karşıdaki adım atar.",
    example_en: "(Notice if they step back — that's your cue to do the same.)",
    pitfall_for_turks_tr:
      "Türk konuşma mesafesi belirgin biçimde daha kısa. Anglo dünyada 'invading space' olarak okunur.",
    cefrRelevance: "all",
  },
  {
    id: "ct.handshake.us",
    axis: "body-language",
    region: "us",
    title_tr: "El sıkışma — sağlam, kısa, gözle",
    scenario_tr:
      "İş görüşmesinde, network etkinliğinde tanışma.",
    do_tr:
      "2-3 saniye, orta-sıkı, gözüne bak, 'Nice to meet you' de.",
    dont_tr:
      "Çok yumuşak ('dead fish') güvensiz; çok sıkı kavgacı. Çift elle tutmak fazla samimi.",
    example_en: "(Firm grip, 2 pumps, eye contact, smile, 'Great to meet you.')",
    pitfall_for_turks_tr:
      "Türkiye'de yaşça büyüğe çift elli/saygılı el sıkış. ABD'de garip durabilir.",
    cefrRelevance: "all",
  },
  {
    id: "ct.cheek-kiss.no",
    axis: "body-language",
    region: "all-english",
    title_tr: "Yanaktan öpme — Anglo iş ortamında YOK",
    scenario_tr:
      "Yeni tanıştığın bir kadın iş arkadaşıyla selamlaşma.",
    do_tr:
      "El sıkış veya kısa bir baş hareketi. Yakınsanız 'Hey, good to see you'.",
    dont_tr:
      "İki yanaktan öpme refleksi rahatsızlık yaratır. ABD #MeToo sonrası özellikle hassas.",
    example_en: "(Handshake, or just 'Hey — good to see you again.')",
    pitfall_for_turks_tr:
      "Türk kültüründe samimiyet işareti. Yanlış yerde temas tacize yakın okunabilir.",
    cefrRelevance: "all",
  },
  {
    id: "ct.pointing-feet",
    axis: "body-language",
    region: "all-english",
    title_tr: "Parmakla işaret etmek kaba — açık el kullan",
    scenario_tr:
      "Müzede bir tabloyu göstermek istiyorsun.",
    do_tr:
      "Avuç açık, dört parmakla yön göster. Veya başınla işaret et.",
    dont_tr:
      "Tek parmakla insanlara doğru göstermek özellikle kaba.",
    example_en: "(Open hand, palm up: 'It's over there.')",
    pitfall_for_turks_tr:
      "Türkiye'de parmakla işaret rahat. ABD/UK'de çocukken 'don't point' diye terbiye edilirler.",
    cefrRelevance: "all",
  },

  // ── Compliments ────────────────────────────────────────────
  {
    id: "ct.compliment.boss.appearance",
    axis: "compliments",
    region: "us",
    title_tr: "Patronuna görünüş için iltifat etme",
    scenario_tr:
      "Yöneticin yeni saç kestirdi. Türk refleksi: 'Saçınız çok güzel olmuş.'",
    do_tr:
      "İşle ilgili konularda iltifat et: 'Loved your presentation', 'Great call on the timeline.'",
    dont_tr:
      "'Looking sharp today!', 'You look great' — özellikle karşı cinse — risk.",
    example_en: "(Compliment the work product, not the person's body or face.)",
    pitfall_for_turks_tr:
      "Türk kültürü dış görünüş övgüsü = samimiyet. ABD ofis kültüründe taciz çağrışımı yapabilir.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.compliment.receive.us",
    axis: "compliments",
    region: "us",
    title_tr: "İltifat alınca — 'Yok canım, hiçbir şey değil' yerine 'Thanks!'",
    scenario_tr:
      "Biri 'I love your shoes!' dedi.",
    do_tr:
      "'Thanks! Got them last month.' Kabul et, hafif detay ver.",
    dont_tr:
      "'Oh, these old things?' veya 'No no, they're nothing' — Anglo kulakta tuhaf alçakgönüllülük.",
    example_en: "— I love your jacket.\n— Oh thanks! Found it on sale.",
    pitfall_for_turks_tr:
      "Türk kültürü iltifatı küçümseyerek alır ('estağfurullah'). Amerikan kültürü iltifatı kabul ederek alır.",
    cefrRelevance: "all",
  },
  {
    id: "ct.compliment.kids",
    axis: "compliments",
    region: "all-english",
    title_tr: "Yabancı çocuklara dokunma — 'cute' uzaktan",
    scenario_tr:
      "Markette tatlı bir bebek gördün.",
    do_tr:
      "Anneye/babaya bakarak 'She's adorable!' yeterli.",
    dont_tr:
      "Yanağını sıkma, başını okşama. Türkiye'de masum bir jest, burada 'stranger danger'.",
    example_en: "(Smile at the parent: 'He's so cute!' Don't touch.)",
    pitfall_for_turks_tr:
      "Türk kültüründe yabancı bile bebeği sevebilir. Anglo dünyada ebeveyn anında geri çeker.",
    cefrRelevance: "all",
  },

  // ── Complaints ─────────────────────────────────────────────
  {
    id: "ct.complaint.restaurant.us",
    axis: "complaints",
    region: "us",
    title_tr: "Restoranda şikâyet — sakin, somut, çözüm odaklı",
    scenario_tr:
      "Yemeğin soğuk geldi. Türk refleksi: yüksek ses veya hiç şikâyet etmemek.",
    do_tr:
      "Garsona göz teması: 'Sorry, this came out a bit cold — could I get it heated up?'",
    dont_tr:
      "Bağırmak, masa yumruğu, 'manager!' diye haykırmak — hizmeti kötüleştirir.",
    example_en: "— I'm sorry, the soup's gone cold. Any chance you could warm it up?",
    pitfall_for_turks_tr:
      "Türklerde 'rahatsız etmeyeyim' susmak veya tam tersi sert çıkış. Anglo orta yol.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.complaint.uk.email",
    axis: "complaints",
    region: "uk",
    title_tr: "İngiliz şikâyet maili — 'I am writing to express my disappointment...'",
    scenario_tr:
      "Bir İngiliz şirketinden bozuk ürün geldi.",
    do_tr:
      "Soğuk, resmi başla: 'I am writing to express my disappointment with...' Sertlik formaliteyle saklı.",
    dont_tr:
      "'You guys ripped me off' Amerikan rahatlığı UK customer service'te ciddiye alınmaz.",
    example_en:
      "I am writing to express my disappointment with the order I received on...",
    pitfall_for_turks_tr:
      "Türkler şikâyette duygusal yazar. İngiliz şikâyet kültürü = soğuk + uzun + resmi.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.complaint.about.weather",
    axis: "complaints",
    region: "uk",
    title_tr: "İngilizler için şikâyet bir bağ kurma türü",
    scenario_tr:
      "Otobüs gecikti, yanındaki kişi 'Typical, innit' diyor.",
    do_tr:
      "Aynı tonla katıl: 'Always when you're in a hurry.' Solidarite kurar.",
    dont_tr:
      "Aşırı pozitif 'Don't worry, it'll come' kuru.",
    example_en: "— Twenty minutes late, brilliant.\n— Honestly. Story of my life.",
    pitfall_for_turks_tr:
      "Türklerde şikâyetleşmek normaldir; İngilizlerde 'havadan moaning' bir sosyal yağ.",
    cefrRelevance: "B1+",
  },

  // ── Agreement ──────────────────────────────────────────────
  {
    id: "ct.agreement.uk.yes-meaning-no",
    axis: "agreement",
    region: "uk",
    title_tr: "İngiliz 'I'll bear that in mind' — büyük ihtimalle yapmayacak",
    scenario_tr:
      "İş arkadaşına bir öneri yaptın. 'Yes, I'll bear that in mind' dedi.",
    do_tr:
      "Çevirisi: 'Duydum ama düşünmeyeceğim.' Daha kesin onay için tekrar net sor.",
    dont_tr:
      "Tam onay sanma. Türk 'Tabii canım, hallederim' bu kadar belirsiz değildir.",
    example_en: "— Could we move the deadline?\n— I'll bear that in mind. = 'No.'",
    pitfall_for_turks_tr:
      "Türk evet = evet, İngiliz 'maybe yes' = polite no. Aksiyon adımı sormadan emin olma.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.agreement.us.yeah-no",
    axis: "agreement",
    region: "us",
    title_tr: "'Yeah, no' — kafa karıştırma, sonuncu kelime önemli",
    scenario_tr:
      "Bir Amerikalı 'Yeah, no, totally' dedi.",
    do_tr:
      "Genel kural: ikinci/son kelime gerçek anlamı. 'Yeah no' = no. 'No yeah' = yes.",
    dont_tr:
      "'Yeah' duyup kabul sanma. 'No, yeah, for sure' aslında onay.",
    example_en: "— Wanna join?\n— Yeah, no, I'm busy. = 'No.'",
    pitfall_for_turks_tr:
      "Türklerde 'evet hayır' anlaşılmaz. ABD argosunda yumuşatma katmanı.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.agreement.maybe.au",
    axis: "agreement",
    region: "au",
    title_tr: "Avustralyalı 'Yeah nah' — büyük olasılıkla hayır",
    scenario_tr:
      "Bir Avustralyalı arkadaş 'Yeah nah, prob not' dedi.",
    do_tr:
      "Hafif red. Israr etme. Başka gün öner.",
    dont_tr:
      "'Yeah' kısmına takılıp planı yapma.",
    example_en: "— Beach Saturday?\n— Yeah nah, got a thing.",
    pitfall_for_turks_tr:
      "Aussie tonu rahat görünür, içinde net mesaj var. Türk 'belki' den daha kesin.",
    cefrRelevance: "B2+",
  },

  // ── Register / formality ───────────────────────────────────
  {
    id: "ct.register.email.subject",
    axis: "register",
    region: "all-english",
    title_tr: "Mail konu satırı — 'Question' yerine 'Quick question about Q3 budget'",
    scenario_tr:
      "Patrona mail yazıyorsun.",
    do_tr:
      "Konuyu spesifik yaz: 'Re: Q3 budget — clarifying line 4'. Açanın 5 saniye anlamasını sağla.",
    dont_tr:
      "'Merhaba' veya 'Hi' tek başına konu yapma. 'Important' / 'Urgent' her şeyi öyle yapmaz.",
    example_en: "Subject: Quick question — Friday's launch checklist (5 mins)",
    pitfall_for_turks_tr:
      "Türk mailleri uzun selam + 'umarım iyisinizdir' başlar. İngilizce mail gövdesi: konu → istek → kapanış.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.register.salutation",
    axis: "register",
    region: "all-english",
    title_tr: "Mail açılışı — 'Dear Mr./Ms.' artık fazla, 'Hi [first name]' standart",
    scenario_tr:
      "İlk kez bir Amerikalı/İngiliz iş partnerine yazıyorsun.",
    do_tr:
      "'Hi Sarah' veya 'Hello David' — ilk isimle. Çok resmi durum varsa 'Dear Sarah'.",
    dont_tr:
      "'Dear Mr. Smith' ilk kontak için bile artık old-school durur. 'Respected sir' fazla.",
    example_en: "Hi Sarah,\n\nThanks for jumping on the call earlier...",
    pitfall_for_turks_tr:
      "Türk iş kültürü ünvana saygı (Bey, Hanım, Hocam). Anglo iş kültürü hızlı first-name basis.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.register.signoff",
    axis: "register",
    region: "all-english",
    title_tr: "Mail kapanışı — bağlama göre seç",
    scenario_tr:
      "Mail bitiyor. 'Best regards' / 'Thanks' / 'Cheers' / 'Sincerely' — hangisi?",
    do_tr:
      "Standart iş: 'Best,' veya 'Thanks,'. UK/AU rahat: 'Cheers,'. Çok resmi: 'Kind regards,'.",
    dont_tr:
      "'Sincerely yours' Türkçeden bire-bir çeviri, modern yazışmada nadir.",
    example_en: "Thanks,\nBerk",
    pitfall_for_turks_tr:
      "Türk mailleri sonunda uzun 'saygılarımla' formülleri. İngilizcede 1-2 kelime yeter.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.register.titles.first-name",
    axis: "register",
    region: "us",
    title_tr: "Patronuna ilk isimle hitap et — saygısızlık değil",
    scenario_tr:
      "Yeni ABD ofisinde CEO seninle kahve içiyor. 'Call me Mike' diyor.",
    do_tr:
      "'Mike' kullan. 'Mr. Roberts' diye direnirsen mesafe açar.",
    dont_tr:
      "'Sir' demek aşırı resmi. Hemen küçük gör hissi verir.",
    example_en: "— Call me Mike.\n— Thanks Mike, glad to be here.",
    pitfall_for_turks_tr:
      "Türk ofislerinde 'Ahmet Bey' standart. ABD hiyerarşi sözel olarak gizlenir.",
    cefrRelevance: "all",
  },

  // ── Time / punctuality ─────────────────────────────────────
  {
    id: "ct.punctuality.business.us",
    axis: "time",
    region: "us",
    title_tr: "ABD iş toplantısı — 5 dakika erken = zamanında",
    scenario_tr:
      "Saat 10:00 toplantısı için 10:00'da odaya girdin.",
    do_tr:
      "9:55'te orada ol. Zoom için 9:58'de bağlan.",
    dont_tr:
      "10:05 'sadece 5 dakika' düşünme. ABD'de geç sayılır.",
    example_en: "(Aim for 5 minutes before the start time, always.)",
    pitfall_for_turks_tr:
      "Türk 'Türk saati' kavramı. ABD iş ortamında her dakika sözleşmedir.",
    cefrRelevance: "all",
  },
  {
    id: "ct.punctuality.social.us",
    axis: "time",
    region: "us",
    title_tr: "ABD'de sosyal davet — yemek 15 dakika geç, parti 30-60",
    scenario_tr:
      "Birinin evine 7'ye davetlisin.",
    do_tr:
      "Akşam yemeği davetiyse 7:05-7:15 arası gel. Büyük partiyse 7:30-8:00 normal.",
    dont_tr:
      "Tam 7'de zil çalmak ev sahibini hazırlanırken yakalar. 8:30 'açık büfe geçti'.",
    example_en: "(Dinner invite at 7? Arrive 7:10. Party at 7? Arrive 7:30-8:00.)",
    pitfall_for_turks_tr:
      "Türk davetinde 1+ saat geç gelmek normal olabilir. ABD'de yemek başladıysa hostess strese girer.",
    cefrRelevance: "all",
  },
  {
    id: "ct.running-late.text",
    axis: "time",
    region: "all-english",
    title_tr: "'Running 10 minutes late' — söyle, gerekçeleme",
    scenario_tr:
      "Trafiktesin, randevuya geç kalacaksın.",
    do_tr:
      "Tek mesaj: 'Hey, running about 10 min late — sorry!' Konum/varış zamanı ekle.",
    dont_tr:
      "Uzun gerekçe (trafikti, otobüsler...). Karşı taraf zaten bekliyor; özür + ETA yeter.",
    example_en: "Hey — running ~10 min late, traffic's brutal. See you soon!",
    pitfall_for_turks_tr:
      "Türkçede gecikmenin kanıtı (hikâye) önemli. İngilizcede özür + somut süre yeter.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.deadline.eod",
    axis: "time",
    region: "all-english",
    title_tr: "'EOD' = gün sonu, ama hangi saat dilimi?",
    scenario_tr:
      "Patron 'Send by EOD' dedi. End of day saat kaç?",
    do_tr:
      "Standart: gönderenin saat diliminde 18:00. Karşı tarafsa onun zonu. Şüpheliysen sor.",
    dont_tr:
      "'Yarın sabaha kadar var' diye düşünme. EOD sabah = teslim edilmemiş sayılır.",
    example_en: "Got it — I'll have it in your inbox by 6 PM ET today.",
    pitfall_for_turks_tr:
      "Türk 'akşama kadar' esnek. ABD saat dilimi (PT/ET) kritik, mail saatleri katı.",
    cefrRelevance: "B2+",
  },

  // ── Social norms ───────────────────────────────────────────
  {
    id: "ct.salary.dont-ask",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Maaşı doğrudan sorma — 'comp band' diye sor",
    scenario_tr:
      "Network etkinliğinde biri 'I work in marketing at X' dedi. Ne kadar kazandığını merak ettin.",
    do_tr:
      "'What's the salary range like for that role?' veya 'How's the comp at your level?'",
    dont_tr:
      "'How much do you make?' — Türk konuşmasında olur, ABD'de saldırgan.",
    example_en: "Out of curiosity, what's the comp band for senior roles in your space?",
    pitfall_for_turks_tr:
      "Türklerde maaş konuşmak normal. ABD/UK gizlilik kültürü çok daha katı.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.age.dont-ask",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Yaş sormak — özellikle kadınlara — riskli",
    scenario_tr:
      "Bir iş arkadaşıyla yeni tanıştın.",
    do_tr:
      "Yaş yerine bağlamı sor: 'How long have you been in the industry?' 'When did you graduate?'",
    dont_tr:
      "'How old are you?' direkt soru özellikle iş bağlamında uygunsuz.",
    example_en: "How long have you been doing this kind of work?",
    pitfall_for_turks_tr:
      "Türkçede yaş hitap için gerekli (abi/teyze). İngilizcede yaş özel hayat.",
    cefrRelevance: "all",
  },
  {
    id: "ct.religion.politics",
    axis: "social-norms",
    region: "us",
    title_tr: "Din ve siyaset — iş ortamında tabu",
    scenario_tr:
      "Yeni iş arkadaşıyla kahve içiyorsun.",
    do_tr:
      "Hobiler, seyahat, diziler, spor güvenli. Politik şakalar bile uzakta kal.",
    dont_tr:
      "ABD'de 'Trump/Biden' Türkiye 'AKP/CHP' kadar bölücü. İlk yıl konuşma.",
    example_en: "(Stick to weekend plans, shows, sports, food, travel.)",
    pitfall_for_turks_tr:
      "Türkler siyasete erken giriyor (yemek masasında bile). ABD ofisinde ilişkiyi anında baltalar.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.gift.host.usa",
    axis: "social-norms",
    region: "us",
    title_tr: "ABD'de eve davet — küçük hediye yeterli",
    scenario_tr:
      "Bir Amerikalı arkadaş seni akşam yemeğine çağırdı.",
    do_tr:
      "Bir şişe şarap, çiçek veya tatlı. 15-25 dolar yeterli.",
    dont_tr:
      "Büyük pahalı hediye karşıdakini borçlu hissettirir. Eller boş gitmek de garip.",
    example_en: "(Bring a $15-20 bottle of wine or a small dessert.)",
    pitfall_for_turks_tr:
      "Türk misafirliği büyük tatlı + meyveye alışkın. ABD orta ölçek, şarap merkezde.",
    cefrRelevance: "all",
  },
  {
    id: "ct.shoes.indoors",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Eve girişte ayakkabı — sorman gerek",
    scenario_tr:
      "Bir Anglo ev sahibinin evine geldin.",
    do_tr:
      "Eşikte dur, 'Should I take my shoes off?' diye sor. Cevaba göre.",
    dont_tr:
      "Türk refleksiyle direkt çıkartıp atma; bazı evlerde gerek yok. Direkt girip de çamuru taşıma.",
    example_en: "Should I take my shoes off, or are you fine with them on?",
    pitfall_for_turks_tr:
      "Türkiye'de çıkartmak zorunlu. ABD/UK'de evden eve değişir. Sormak nazik.",
    cefrRelevance: "all",
  },
  {
    id: "ct.bathroom.us-vs-uk",
    axis: "regional",
    region: "all-english",
    title_tr: "'Toilet' (UK) vs 'restroom' (US) — kelime seçimi yer açar",
    scenario_tr:
      "Restoranda tuvaleti soracaksın.",
    do_tr:
      "ABD'de 'Where's the restroom?' veya 'bathroom'. UK'de 'Where's the loo?' veya 'toilet'.",
    dont_tr:
      "ABD'de 'toilet' demek (kelime düzgün ama) biraz fazla doğrudan; nadir 'WC' tabelası.",
    example_en: "(US) Excuse me, where's the restroom?  /  (UK) Where's the toilet?",
    pitfall_for_turks_tr:
      "Türkler okul İngilizcesinden 'WC' diye sorar. ABD'de hemen kimse anlamaz.",
    cefrRelevance: "all",
  },

  // ── Regional differences ───────────────────────────────────
  {
    id: "ct.regional.lift-elevator",
    axis: "regional",
    region: "all-english",
    title_tr: "Lift (UK) vs elevator (US), trolley vs shopping cart",
    scenario_tr:
      "AVM'de bir şey soracaksın.",
    do_tr:
      "UK: 'Where's the lift?' / 'trolley'. US: 'elevator' / 'cart'. Petrol = gas (US), petrol (UK).",
    dont_tr:
      "Markaları karıştırırsan anlaşılırsın ama 'native' havası kaçar.",
    example_en: "(UK) Take the lift to the third floor.  /  (US) Take the elevator.",
    pitfall_for_turks_tr:
      "Türk okul kitabı UK karışık US. Hangi ülkede olduğunu bilip seç.",
    cefrRelevance: "all",
  },
  {
    id: "ct.regional.first-floor",
    axis: "regional",
    region: "all-english",
    title_tr: "İngiltere'de 'first floor' = ikinci kat",
    scenario_tr:
      "Londra'da otelde 'Your room is on the first floor' dediler.",
    do_tr:
      "UK: ground floor → first floor (Türkçe: 1. kat sayılan ikinci seviye). ABD'de 1st floor = giriş katı.",
    dont_tr:
      "UK 'first'i ABD 'first' gibi düşünüp bir kat aşağıda arama.",
    example_en: "(UK) Ground → First → Second. (US) First → Second → Third.",
    pitfall_for_turks_tr:
      "Türk 'birinci kat' UK gibi ama beklenti ABD. Otelde kayboluruz.",
    cefrRelevance: "all",
  },
  {
    id: "ct.canada.sorry",
    axis: "regional",
    region: "ca",
    title_tr: "Kanada 'sorry' — özür değil, bir tampon",
    scenario_tr:
      "Toronto'da omzun birine değdi, sen 'sorry' demeden o 'sorry' dedi.",
    do_tr:
      "Sen de 'sorry' de. Suç kabulü değil, sosyal yağlayıcı. Türkçedeki 'pardon'a yakın.",
    dont_tr:
      "Hayretle 'Niye özür diliyorsun, sen mi değdin?' deme.",
    example_en: "— (bumps shoulder) Sorry!\n— No, sorry!",
    pitfall_for_turks_tr:
      "Türk 'pardon' suçu işaret eder. Kanada 'sorry' selamlamaya yakın.",
    cefrRelevance: "all",
  },

  // ── Mixed: extra coverage ──────────────────────────────────
  {
    id: "ct.phone.call.first",
    axis: "social-norms",
    region: "us",
    title_tr: "ABD'de arama yapmadan önce — text at",
    scenario_tr:
      "Bir iş arkadaşına bir şey soracaksın.",
    do_tr:
      "Önce mesaj: 'Hey, got a sec to chat?' Onay gelirse ara.",
    dont_tr:
      "Direkt arama — özellikle iş saatleri dışında — invazif algılanır.",
    example_en: "Hey — got a quick second? Want to ask about the deck.",
    pitfall_for_turks_tr:
      "Türkler arar, yazmaz. Anglo gençler özellikle 'phone calls without warning rude'.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.emoji.work",
    axis: "register",
    region: "all-english",
    title_tr: "İş Slack'inde emoji — evet, ama sınırlı",
    scenario_tr:
      "Patronun mesajına 'Got it' diye cevap veriyorsun.",
    do_tr:
      "Bir baş parmak veya tek emoji yeterli. 'thumbs up', 'checkmark', 'pray hands'.",
    dont_tr:
      "Beş satır WhatsApp tarzı emoji dizilimi olgun durmaz. Patrona kırmızı kalp tabu.",
    example_en: "Got it 👍",
    pitfall_for_turks_tr:
      "Türk WhatsApp emoji yağdırma. Anglo iş kanalı minimalizm.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.smalltalk.taboo.weight",
    axis: "small-talk",
    region: "all-english",
    title_tr: "Kilo yorumu — pozitif olsun olmasın TABU",
    scenario_tr:
      "Bir Amerikalı arkadaşın bayağı zayıflamış görünüyor.",
    do_tr:
      "'You look great!' yeter. Açıklama isteme.",
    dont_tr:
      "'Did you lose weight?' / 'You got skinny!' Türkiye'de iltifat, ABD'de sınır ihlali.",
    example_en: "You look great! Glad to see you.",
    pitfall_for_turks_tr:
      "Türk teyze kültürü vücudu yorumlar. ABD vücut yorumu = yıllarca sürebilecek yara.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.queue.line",
    axis: "social-norms",
    region: "uk",
    title_tr: "Sıraya girmek — UK'de kutsal kural",
    scenario_tr:
      "Londra'da otobüs durağında kalabalık var ama sırada görünmüyor.",
    do_tr:
      "Geldiğin sıraya göre arkaya geç. Süresizce bekle. Yan komşuyla 'after you' nezaketi.",
    dont_tr:
      "Türkiye refleksiyle önden sıkış. Hiçbir İngiliz tepki vermez ama dakika dakika öfke birikir.",
    example_en: "(See the queue, even if it's vague — go to the back.)",
    pitfall_for_turks_tr:
      "Türk sırası kalabalık + sokulma. İngiliz sırası bir milimetre dahi geri kalmaz.",
    cefrRelevance: "all",
  },
  {
    id: "ct.thank-you.frequency",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Teşekkür sıklığı — Anglo standart bizden 3 kat fazla",
    scenario_tr:
      "Birisi sana tuzluğu uzattı, kapıyı tuttu, ufak bir şey yaptı.",
    do_tr:
      "Her küçük jeste 'Thanks!' / 'Cheers!' / 'Appreciate it.' Reflex olmalı.",
    dont_tr:
      "Sessiz alma — Türkçede yakın aile arası normal — yabancıya karşı kaba.",
    example_en: "(Pass salt) Thanks!  (Holds door) Cheers!  (Gives change) Appreciate it!",
    pitfall_for_turks_tr:
      "Türk samimiyetin teşekkürü ima ettiğini varsayar. Anglo açık sözlü minnet kültürü.",
    cefrRelevance: "all",
  },
  {
    id: "ct.privacy.questions",
    axis: "social-norms",
    region: "all-english",
    title_tr: "İlk tanışmada — evlilik/çocuk/maaş sorma",
    scenario_tr:
      "Yeni biriyle tanıştın.",
    do_tr:
      "İş, yaşadığı şehir, hobi, hafta sonu planı. Genişleme zamanla.",
    dont_tr:
      "'Are you married?' / 'Do you have kids?' / 'How much rent?' direkt = sınır ihlali.",
    example_en: "What part of town are you in? What do you do for fun?",
    pitfall_for_turks_tr:
      "Türk teyze envanteri ilk 3 dakikada çıkar. Anglo dünyada bu yıllarda ortaya gelir.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.feedback.sandwich.us",
    axis: "directness",
    region: "us",
    title_tr: "Feedback sandwich — övgü + eleştiri + övgü",
    scenario_tr:
      "Bir takım arkadaşına yapıcı eleştiri vermen lazım.",
    do_tr:
      "'Your draft was strong overall. One thing I'd tighten is X. But honestly, the structure was clean.'",
    dont_tr:
      "Düz 'This isn't good' Amerikan ofisinde HR shock.",
    example_en: "Great work on the deck. The one bit I'd refine is slide 7's intro. Overall really solid.",
    pitfall_for_turks_tr:
      "Türk geri bildirimi düz. ABD ofis kültürü 'positive shell' bekliyor.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.feedback.uk.subtle",
    axis: "directness",
    region: "uk",
    title_tr: "İngiliz feedback — 'a few small points' büyük olabilir",
    scenario_tr:
      "Patronun 'Just a few small suggestions on the report' dedi.",
    do_tr:
      "Hazırlıklı ol — 'few small' = ciddi düzeltme listesi olabilir. Listeyi notla, sor.",
    dont_tr:
      "Yüz değeriyle alma. 'Few small points' rahatlık verir, gerçek iş yüklenir.",
    example_en: "— Just a few small thoughts on this.\n— Of course — could you walk me through them?",
    pitfall_for_turks_tr:
      "Türk patron 'baştan yaz' der. İngiliz patron aynı şeyi 'small tweaks' diye söyler.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.bill.split.us",
    axis: "social-norms",
    region: "us",
    title_tr: "ABD'de hesap — herkes kendi payı (split)",
    scenario_tr:
      "Grup yemeği. Hesap geldi.",
    do_tr:
      "'Could we split this evenly?' veya 'I'll Venmo you my part.' Tablet/POS'ta kart kart böler.",
    dont_tr:
      "Tek kişi ödeyip sonra ayarlama Türk usulü. ABD'de en kıdemli yoksa standart split.",
    example_en: "Let's split it — I'll send you my share on Venmo.",
    pitfall_for_turks_tr:
      "Türkiye'de yaşça büyük + kıdemli öder. ABD'de eşit pay = nezaket.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.bill.split.tr-host",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Sen davet edersen — sen ödersin",
    scenario_tr:
      "Bir Anglo arkadaşı yemeğe çağırdın.",
    do_tr:
      "Davet eden öder — Anglo kuralı da bu. 'I'm treating, my idea' deyip net ol.",
    dont_tr:
      "Hesap gelince 'Yarı yarıya' deme — davet etmişken kafa karıştırır.",
    example_en: "My treat — I invited you out, so I've got this one.",
    pitfall_for_turks_tr:
      "Türk 'davet ettim, ödüyorum' Anglo'da aynı. Türk farkı: dirsek bükmeden, naz yapmadan.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.sneeze.bless-you",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Hapşırınca 'Bless you' — söylemen lazım",
    scenario_tr:
      "Otobüste yanındaki hapşırdı.",
    do_tr:
      "'Bless you!' veya 'Gesundheit!' Görmezden gelme.",
    dont_tr:
      "Tepkisiz kalmak buz gibi durur. Türk 'çok yaşa' refleksin doğru yerde.",
    example_en: "(Stranger sneezes) — Bless you!",
    pitfall_for_turks_tr:
      "Türk 'çok yaşa' otomatiği var. İngilizcede 'bless you' tam karşılığı.",
    cefrRelevance: "all",
  },
  {
    id: "ct.directions.guess",
    axis: "directness",
    region: "all-english",
    title_tr: "Yol sorduğunda 'I don't know' demek normal",
    scenario_tr:
      "Bir yabancıya yol soruyorsun.",
    do_tr:
      "Bilmezse 'Sorry, I'm not from around here.' Net.",
    dont_tr:
      "Türkiye'de bilmeyen bile yön gösterir. ABD'de yanıltıcı bilgiyi kimse vermez, dürüst 'no' gelir.",
    example_en: "— Excuse me, where's the post office?\n— Sorry, I have no idea.",
    pitfall_for_turks_tr:
      "Türk 'bilmiyorum' demeyi ayıp sanır. Anglo 'bilmiyorum' = saygılı dürüstlük.",
    cefrRelevance: "all",
  },
  {
    id: "ct.smile.strangers",
    axis: "body-language",
    region: "us",
    title_tr: "ABD'de yabancıya gülümseme — flört değil, nezaket",
    scenario_tr:
      "Asansörde göz göze geldin.",
    do_tr:
      "Kısa gülümseme + hafif baş selamı. 'Hey' yeterli.",
    dont_tr:
      "Türk 'tanımıyorum, neden bakıyor?' refleksi kaba durur.",
    example_en: "(Brief smile + nod + 'Hey.')",
    pitfall_for_turks_tr:
      "Türk büyük şehir yüzü kapalı. Amerikan büyük şehir yüzü gülümser; cinsel okumayın.",
    cefrRelevance: "all",
  },
  {
    id: "ct.uk.understatement",
    axis: "humor",
    region: "uk",
    title_tr: "İngiliz 'not bad' = çok iyi; 'quite good' = orta",
    scenario_tr:
      "İngiliz arkadaş ürettiğin işe 'not bad' dedi.",
    do_tr:
      "Çevirisi: 'oldukça iyi'. 'Quite good' = 'fena değil'. Ters okuma şart.",
    dont_tr:
      "'Not bad' = sıradan diye düşünme. İngiliz 'amazing' yerine 'not bad' diyebilir.",
    example_en: "— What do you think of the film?\n— Not bad. = 'Actually quite good.'",
    pitfall_for_turks_tr:
      "Türk doğrudan över ya yermeye yakın. İngiliz tonu nötr-altı; pozitifi düşük perdeden söyler.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.us.superlatives",
    axis: "regional",
    region: "us",
    title_tr: "Amerikalı 'awesome' / 'amazing' enflasyonu",
    scenario_tr:
      "Bir Amerikalı kahveni 'awesome' diye nitelendirdi.",
    do_tr:
      "Türkçe 'fena değil'e denk gel. Süperlatif = sosyal yağ. Aynı tonla 'great, thanks' yeterli.",
    dont_tr:
      "'Awesome' duydun diye işini 'mükemmel' sanma. Standart kibarlık.",
    example_en: "— How's the coffee?\n— Awesome, thanks! = 'fine'.",
    pitfall_for_turks_tr:
      "Türk dilinde abartı pahalıdır. Amerikan İngilizcesi abartıya alışıktır, kalibrasyonu kaçırırsın.",
    cefrRelevance: "B1+",
  },
  {
    id: "ct.disagree.in-meeting",
    axis: "directness",
    region: "all-english",
    title_tr: "Toplantıda patronla aleni anlaşmazlık — özel konuş",
    scenario_tr:
      "Patronun ekibe yanlış sayı söyledi.",
    do_tr:
      "Toplantı sonrası özel: 'Hey, quick correction — slide 3's number is actually X. Wanted you to have it.'",
    dont_tr:
      "Önünde 'That's wrong' demek — Türkiye'de bile zor — Anglo'da kariyer riski.",
    example_en: "(After the meeting) Hey, I noticed slide 3 says 12% — should be 21%. Just FYI.",
    pitfall_for_turks_tr:
      "Türk hiyerarşisinde de zor; Anglo'da face-saving çok daha kalın.",
    cefrRelevance: "B2+",
  },
  {
    id: "ct.no-thanks.food",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Yiyecek-içecek teklifine 'no thanks' — bir kez yeter",
    scenario_tr:
      "Ev sahibi 'More coffee?' dedi.",
    do_tr:
      "'No, I'm good — thanks though!' bir kez deyince konu kapanır. Israr az.",
    dont_tr:
      "Türk 'yok hayır, sağ ol, ama...' uzatması Anglo'da kafa karıştırır.",
    example_en: "— More wine?\n— I'm all good, thanks!",
    pitfall_for_turks_tr:
      "Türk misafirliğinde 'hayır' ısrar bekler. Anglo evinde tek 'no' net cevap.",
    cefrRelevance: "all",
  },
  {
    id: "ct.host.serving",
    axis: "social-norms",
    region: "all-english",
    title_tr: "Buyrun-buyrun döngüsü Anglo evlerde yok",
    scenario_tr:
      "Bir Anglo arkadaşın evinde, sofraya geçtin.",
    do_tr:
      "Sahibi 'Help yourself' der. Sen al, tabağını doldur.",
    dont_tr:
      "Türk 'yok, önce siz' Anglo'da yemeği soğutur. Sahibi de 'No really, help yourself'.",
    example_en: "— Help yourself!\n— Thanks — this looks amazing.",
    pitfall_for_turks_tr:
      "Türk sofra adabı 'siz buyrun' karşılıklı. Anglo eve adapte ol: kendi tabağını doldur.",
    cefrRelevance: "all",
  },
  {
    id: "ct.lobby.elevator",
    axis: "small-talk",
    region: "us",
    title_tr: "Asansör küçük konuşması — hava, hafta sonu, kahve",
    scenario_tr:
      "Ofiste asansördesin, bir iş arkadaşıyla yalnız.",
    do_tr:
      "Hafif tek-cümle başlat: 'Quite a Monday.' / 'Long week already.' Bitmesi ok.",
    dont_tr:
      "Sessiz durup tavanı çalışmak — Türk metrosunda normal — ABD'de buz gibi.",
    example_en: "Long week already, huh?",
    pitfall_for_turks_tr:
      "Türk şehir metrosu sessizdir. ABD asansör beklentisi 1-2 cümle.",
    cefrRelevance: "B1+",
  },
] as const;

export function getCulturalTip(id: string): CulturalTip | undefined {
  return CULTURAL_TIPS.find((t) => t.id === id);
}

export function getTipsByAxis(axis: CulturalAxis): CulturalTip[] {
  return CULTURAL_TIPS.filter((t) => t.axis === axis);
}
