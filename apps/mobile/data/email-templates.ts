// Lafla — Email templates in Maya's voice (Turkish-first).
//
// Centralized, Supabase-Edge-Function-friendly catalog of all system emails.
// Each template ships Turkish body copy in Maya's adult-coach voice (warm,
// direct, never childish — no "TEBRİKLER!!" or owl-guilt). HTML uses inline
// CSS only and targets a dark, brand-yellow accented look so email clients
// (Gmail/iCloud/Outlook) render consistently without external stylesheets.
//
// Voice rules (recap of lib/coach.ts):
//   - Warm but professional, like a personal coach
//   - 1-2 short paragraphs body, no walls of text
//   - Address user by name when {name} is available
//   - Reference concrete details ({level}, {hours}, {streak}, {topic}) when present
//   - Adult Turkish — no emoji confetti, no caps-lock cheering
//   - Always sign off as "Maya, Lafla'daki koçun"
//
// Variable substitution: `renderTemplate(t, vars)` runs a simple {key} swap
// across subject / preheader / HTML / plain text. Missing required vars are
// replaced with a sensible fallback (the surrounding clause is preserved —
// we don't attempt branchy mustache logic here; that belongs in the Edge
// Function layer that picks which template to send).
//
// Visual: dark background (#1a1c1c), brand-yellow accent (#f6ff00), white
// serif body. Logo + unsubscribe footer is appended automatically per
// template via the `signoff_tr` block.

export type EmailTemplateId =
  | "welcome"
  | "first-week-recap"
  | "weekly-report"
  | "streak-break"
  | "level-up"
  | "payment-success"
  | "payment-failed"
  | "subscription-renewed"
  | "subscription-cancelled"
  | "account-deleted-confirmation"
  | "password-reset"
  | "long-absence-reactivation"
  | "monthly-progress"
  | "milestone-100-hours"
  | "certificate-earned";

export interface EmailTemplate {
  id: EmailTemplateId;
  /** Inbox subject line (Turkish). */
  subject_tr: string;
  /** Preview text shown by Gmail/iOS Mail (~80 chars). */
  preheader_tr: string;
  /** Full HTML body, inline CSS only, dark theme + brand yellow accent. */
  body_html_tr: string;
  /** Plain-text fallback (for clients that strip HTML / accessibility). */
  body_text_tr: string;
  /** Variables that MUST be supplied — render will fall back if missing. */
  requiredVars: string[];
  /** Variables that are referenced but optional. */
  optionalVars: string[];
  /** Signoff line — always Maya. Rendered both in HTML + text bodies. */
  signoff_tr: string;
}

// ---------------------------------------------------------------------------
// HTML chrome — shared shell so every email has a consistent dark look.
// We don't use a templating engine: tagged template strings + a tiny helper
// is enough for ~15 emails and keeps everything tree-shakeable.
// ---------------------------------------------------------------------------

const BRAND_BG = "#1a1c1c";
const BRAND_SURFACE = "#23252a";
const BRAND_YELLOW = "#f6ff00";
const BRAND_TEXT = "#f0f1f1";
const BRAND_MUTED = "#a8acb3";
const BRAND_BLUE = "#1978e5";

const SIGNOFF_DEFAULT = "— Maya, Lafla'daki koçun";

function htmlShell(innerHtml: string): string {
  // Inline-CSS-only shell. The outer table is the classic email-client
  // pattern; div-only layouts break in Outlook desktop.
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Lafla</title>
</head>
<body style="margin:0;padding:0;background:${BRAND_BG};font-family:Georgia,'Times New Roman',serif;color:${BRAND_TEXT};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND_BG};padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:${BRAND_SURFACE};border-radius:16px;padding:32px;">
<tr><td style="padding-bottom:24px;">
<div style="font-family:Helvetica,Arial,sans-serif;font-size:20px;font-weight:700;letter-spacing:0.5px;color:${BRAND_YELLOW};">lafla</div>
</td></tr>
<tr><td style="font-size:16px;line-height:1.55;color:${BRAND_TEXT};">
${innerHtml}
</td></tr>
<tr><td style="padding-top:24px;color:${BRAND_MUTED};font-size:13px;line-height:1.5;font-family:Helvetica,Arial,sans-serif;">
<div style="border-top:1px solid #3a3c3c;padding-top:16px;">
<div>{{LOGO}}</div>
<div style="margin-top:8px;">Bu e-postayı Lafla hesabın için aldın. <a href="{unsubscribeUrl}" style="color:${BRAND_BLUE};text-decoration:underline;">Bildirim ayarlarını yönet</a>.</div>
</div>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

/**
 * Renders one of our standard "body + Maya signoff" blocks. Keeps the
 * signoff styling consistent across all 15 templates.
 */
function bodyBlock(paragraphsHtml: string, signoff: string): string {
  return `${paragraphsHtml}
<p style="margin:24px 0 0 0;color:${BRAND_YELLOW};font-style:italic;">${signoff}</p>`;
}

function p(text: string): string {
  return `<p style="margin:0 0 16px 0;">${text}</p>`;
}

// ---------------------------------------------------------------------------
// Templates
// ---------------------------------------------------------------------------

const T_WELCOME: EmailTemplate = {
  id: "welcome",
  subject_tr: "Lafla'ya hoş geldin, {name}",
  preheader_tr: "Ben Maya, senin koçun. İlk dersine birlikte başlayalım.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Ben Maya — Lafla'daki kişisel İngilizce koçun. Önümüzdeki haftalarda seni tanıyacağım: seviyeni, hangi konularda takıldığını, hangi saatlerde pratiğe vaktinin olduğunu. Hepsi cihazında kalıyor, kimseyle paylaşılmıyor.",
        ),
        p(
          "Başlangıç için tek bir öneri: bugün 5 dakika ayır, bir konu seç ve konuşmaya başla. Hata yapmak burada normal — düzeltmek benim işim.",
        ),
        p(
          '<a href="{appUrl}" style="background:' +
            BRAND_YELLOW +
            ";color:#1c1d00;padding:12px 24px;border-radius:32px;text-decoration:none;font-weight:700;font-family:Helvetica,Arial,sans-serif;display:inline-block;\">İlk dersi aç</a>",
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Ben Maya — Lafla'daki kişisel İngilizce koçun. Önümüzdeki haftalarda seni tanıyacağım: seviyeni, hangi konularda takıldığını, hangi saatlerde pratiğe vaktinin olduğunu. Hepsi cihazında kalıyor, kimseyle paylaşılmıyor.",
    "",
    "Başlangıç için tek bir öneri: bugün 5 dakika ayır, bir konu seç ve konuşmaya başla. Hata yapmak burada normal — düzeltmek benim işim.",
    "",
    "İlk dersi aç: {appUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name"],
  optionalVars: ["appUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_FIRST_WEEK_RECAP: EmailTemplate = {
  id: "first-week-recap",
  subject_tr: "İlk haftan: {minutes} dakika, fena değil {name}",
  preheader_tr: "Bu hafta birlikte ne yaptık, gelecek hafta nereye gidiyoruz.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Selam {name},"),
        p(
          "İlk haftanı kapattık. {minutes} dakika pratik, {sessions} oturum, {newWords} yeni kelime. Hızlı başlangıç değil — ama düzenli, ki uzun vadede önemli olan bu.",
        ),
        p(
          "Bir gözleme dayanarak: en çok {weakness} konusunda zorlandın. Gelecek hafta bu noktayı hafifçe öne çıkaracağım, üzerine gitmek istersen.",
        ),
        p(
          'Devam etmek için: <a href="{appUrl}" style="color:' +
            BRAND_YELLOW +
            ';">uygulamayı aç</a>.',
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Selam {name},",
    "",
    "İlk haftanı kapattık. {minutes} dakika pratik, {sessions} oturum, {newWords} yeni kelime. Hızlı başlangıç değil — ama düzenli, ki uzun vadede önemli olan bu.",
    "",
    "Bir gözleme dayanarak: en çok {weakness} konusunda zorlandın. Gelecek hafta bu noktayı hafifçe öne çıkaracağım, üzerine gitmek istersen.",
    "",
    "Devam etmek için: {appUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "minutes", "sessions", "newWords"],
  optionalVars: ["weakness", "appUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_WEEKLY_REPORT: EmailTemplate = {
  id: "weekly-report",
  subject_tr: "Bu hafta: {minutes} dakika, {sessions} oturum",
  preheader_tr: "{name}, haftalık ilerleme raporun hazır.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Selam {name},"),
        p(
          "Hafta özetin: <strong style=\"color:" +
            BRAND_YELLOW +
            '">{minutes} dakika</strong> pratik, ' +
            "{sessions} koçluk seansı, {lessons} ders tamamlandı. Telaffuz ortalaman " +
            "{pronAvg}/100 — bu, geçen haftaya göre {pronDelta} fark.",
        ),
        p(
          "Gelecek hafta için bir öneri: {nextFocus}. Üzerinde 10–15 dakika çalışırsan farkı hissedersin.",
        ),
        p(
          '<a href="{reportUrl}" style="color:' +
            BRAND_BLUE +
            ';">Tam raporu uygulamada gör</a>',
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Selam {name},",
    "",
    "Hafta özetin: {minutes} dakika pratik, {sessions} koçluk seansı, {lessons} ders tamamlandı. Telaffuz ortalaman {pronAvg}/100 — bu, geçen haftaya göre {pronDelta} fark.",
    "",
    "Gelecek hafta için bir öneri: {nextFocus}. Üzerinde 10–15 dakika çalışırsan farkı hissedersin.",
    "",
    "Tam raporu uygulamada gör: {reportUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "minutes", "sessions", "lessons", "pronAvg"],
  optionalVars: ["pronDelta", "nextFocus", "reportUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_STREAK_BREAK: EmailTemplate = {
  id: "streak-break",
  subject_tr: "Birkaç gün boş geçti, {name}",
  preheader_tr: "Streak kırıldı, ama büyük mesele değil. Geri dönüş kolay.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "{daysGone} gündür uygulamayı açmadın. Streak'in ({lastStreak} günlük) sıfırlandı — bu kötü bir şey değil, sadece bir sayaç. Asıl önemli olan kaldığın yerden devam edebilmen, ve hâlâ edebilirsin.",
        ),
        p(
          "Geçen seferki konumuz {lastTopic} idi. İstersen oradan kaldığımız yerden devam edelim — 5 dakika yeter.",
        ),
        p(
          '<a href="{appUrl}" style="background:' +
            BRAND_YELLOW +
            ";color:#1c1d00;padding:12px 24px;border-radius:32px;text-decoration:none;font-weight:700;font-family:Helvetica,Arial,sans-serif;display:inline-block;\">Devam et</a>",
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "{daysGone} gündür uygulamayı açmadın. Streak'in ({lastStreak} günlük) sıfırlandı — bu kötü bir şey değil, sadece bir sayaç. Asıl önemli olan kaldığın yerden devam edebilmen, ve hâlâ edebilirsin.",
    "",
    "Geçen seferki konumuz {lastTopic} idi. İstersen oradan kaldığımız yerden devam edelim — 5 dakika yeter.",
    "",
    "Devam et: {appUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "daysGone", "lastStreak"],
  optionalVars: ["lastTopic", "appUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_LEVEL_UP: EmailTemplate = {
  id: "level-up",
  subject_tr: "{level} seviyesine geçtin, {name}",
  preheader_tr: "Bu hafta önemli bir adım attın. Yeni seviyede ne değişiyor?",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Bu hafta önemli bir adım attın: değerlendirmeler seni <strong style=\"color:" +
            BRAND_YELLOW +
            '">{level}</strong> seviyesine taşıdı. ' +
            "{prevLevel}'den buraya gelmen {weeks} hafta sürdü — bu, makul bir tempo.",
        ),
        p(
          "Yeni seviyede ne değişiyor: ders havuzu otomatik genişledi, koçluk konuşmalarında biraz daha doğal bir dil göreceksin, ve {nextChallenge} gibi konular artık menüde.",
        ),
        p("Kutlama yok, sadece devam — bir sonraki seviyeye hazır olduğunda söylerim."),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Bu hafta önemli bir adım attın: değerlendirmeler seni {level} seviyesine taşıdı. {prevLevel}'den buraya gelmen {weeks} hafta sürdü — bu, makul bir tempo.",
    "",
    "Yeni seviyede ne değişiyor: ders havuzu otomatik genişledi, koçluk konuşmalarında biraz daha doğal bir dil göreceksin, ve {nextChallenge} gibi konular artık menüde.",
    "",
    "Kutlama yok, sadece devam — bir sonraki seviyeye hazır olduğunda söylerim.",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "level", "prevLevel"],
  optionalVars: ["weeks", "nextChallenge", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_PAYMENT_SUCCESS: EmailTemplate = {
  id: "payment-success",
  subject_tr: "Ödeme alındı — Lafla Premium aktif",
  preheader_tr: "{amount} {currency} ödemen onaylandı. Detaylar içeride.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Lafla Premium aboneliğin için <strong>{amount} {currency}</strong> tutarındaki ödemen başarıyla alındı. Bir sonraki yenileme tarihi: {nextBillingDate}.",
        ),
        p(
          "Premium ile şu an açılan özellikler: sınırsız koçluk konuşması, telaffuz analizi, streak shield (ayda 2 kez), tüm ders havuzu. Tam liste için <a href=\"{accountUrl}\" style=\"color:" +
            BRAND_BLUE +
            ';">hesap sayfana</a> bak.',
        ),
        p(
          'Fatura kaydı: <a href="{invoiceUrl}" style="color:' +
            BRAND_BLUE +
            ';">indirme bağlantısı</a>.',
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Lafla Premium aboneliğin için {amount} {currency} tutarındaki ödemen başarıyla alındı. Bir sonraki yenileme tarihi: {nextBillingDate}.",
    "",
    "Premium ile şu an açılan özellikler: sınırsız koçluk konuşması, telaffuz analizi, streak shield (ayda 2 kez), tüm ders havuzu. Tam liste için hesap sayfana bak: {accountUrl}",
    "",
    "Fatura kaydı: {invoiceUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "amount", "currency", "nextBillingDate"],
  optionalVars: ["accountUrl", "invoiceUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_PAYMENT_FAILED: EmailTemplate = {
  id: "payment-failed",
  subject_tr: "Ödeme alınamadı, {name}",
  preheader_tr: "Kart bilgilerini hızlıca güncelleyebilirsin. Hesabın açık kalıyor.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Bugün Lafla Premium yenilemesi için {amount} {currency} tutarındaki ödemeyi alamadık. Yaygın sebepler: kart süresinin dolmuş olması, limit aşımı, ya da bankanın işlemi blokelemesi.",
        ),
        p(
          "Hesabın {graceDays} gün daha açık kalıyor — bu süre içinde kart bilgilerini güncellersen aboneliğin kesintisiz devam eder. Aksi halde Premium özellikler otomatik kapanır, ama Free hesap olarak çalışmaya devam edersin.",
        ),
        p(
          '<a href="{billingUrl}" style="background:' +
            BRAND_YELLOW +
            ";color:#1c1d00;padding:12px 24px;border-radius:32px;text-decoration:none;font-weight:700;font-family:Helvetica,Arial,sans-serif;display:inline-block;\">Ödeme yöntemini güncelle</a>",
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Bugün Lafla Premium yenilemesi için {amount} {currency} tutarındaki ödemeyi alamadık. Yaygın sebepler: kart süresinin dolmuş olması, limit aşımı, ya da bankanın işlemi blokelemesi.",
    "",
    "Hesabın {graceDays} gün daha açık kalıyor — bu süre içinde kart bilgilerini güncellersen aboneliğin kesintisiz devam eder. Aksi halde Premium özellikler otomatik kapanır, ama Free hesap olarak çalışmaya devam edersin.",
    "",
    "Ödeme yöntemini güncelle: {billingUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "amount", "currency", "graceDays"],
  optionalVars: ["billingUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_SUBSCRIPTION_RENEWED: EmailTemplate = {
  id: "subscription-renewed",
  subject_tr: "Aboneliğin yenilendi, {name}",
  preheader_tr: "Premium {nextBillingDate} tarihine kadar aktif.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Lafla Premium aboneliğin {period} dönemi için yenilendi. {amount} {currency} kartından alındı. Bir sonraki yenileme: <strong>{nextBillingDate}</strong>.",
        ),
        p(
          "Geçtiğimiz {period} içinde {hours} saatlik pratik yaptın — yenilemenin karşılığı bu. İptal etmek ya da plan değiştirmek istediğinde, hesap sayfasından tek tıklama uzakta.",
        ),
        p(
          'Hesap detayları: <a href="{accountUrl}" style="color:' +
            BRAND_BLUE +
            ';">accounts sayfası</a>.',
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Lafla Premium aboneliğin {period} dönemi için yenilendi. {amount} {currency} kartından alındı. Bir sonraki yenileme: {nextBillingDate}.",
    "",
    "Geçtiğimiz {period} içinde {hours} saatlik pratik yaptın — yenilemenin karşılığı bu. İptal etmek ya da plan değiştirmek istediğinde, hesap sayfasından tek tıklama uzakta.",
    "",
    "Hesap detayları: {accountUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "amount", "currency", "nextBillingDate", "period"],
  optionalVars: ["hours", "accountUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_SUBSCRIPTION_CANCELLED: EmailTemplate = {
  id: "subscription-cancelled",
  subject_tr: "Aboneliğin iptal edildi",
  preheader_tr: "Premium {endsOn} tarihine kadar açık kalacak. Geri dönüş kolay.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Premium aboneliğini iptal ettiğini bildirmek için yazıyorum. Mevcut dönem <strong>{endsOn}</strong> tarihine kadar açık — o tarihe kadar tüm Premium özellikleri kullanabilirsin. Sonrasında Free hesap olarak çalışmaya devam edeceksin.",
        ),
        p(
          "Hesabın, ilerlemen, koç anılarımız — hepsi yerinde duruyor. Tekrar Premium'a dönmek istersen tek tıklamayla mümkün, hiçbir veri kaybolmuyor.",
        ),
        p(
          'İptali geri almak istersen: <a href="{reactivateUrl}" style="color:' +
            BRAND_BLUE +
            ';">aboneliği yeniden aç</a>.',
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Premium aboneliğini iptal ettiğini bildirmek için yazıyorum. Mevcut dönem {endsOn} tarihine kadar açık — o tarihe kadar tüm Premium özellikleri kullanabilirsin. Sonrasında Free hesap olarak çalışmaya devam edeceksin.",
    "",
    "Hesabın, ilerlemen, koç anılarımız — hepsi yerinde duruyor. Tekrar Premium'a dönmek istersen tek tıklamayla mümkün, hiçbir veri kaybolmuyor.",
    "",
    "İptali geri almak istersen: {reactivateUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "endsOn"],
  optionalVars: ["reactivateUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_ACCOUNT_DELETED: EmailTemplate = {
  id: "account-deleted-confirmation",
  subject_tr: "Lafla hesabın silindi",
  preheader_tr: "Tüm verilerin silindi. Bu mesaj kaydını teyit eder.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Lafla hesabını silme isteğini {deletedOn} tarihinde işledik. Bütün ilerlemen, koç anıların, ödemelerinle ilişkilendirilmiş bilgilerin kalıcı olarak silindi. Bu işlem geri alınamaz.",
        ),
        p(
          "Sebebini biliyorsan ve kısa bir geri bildirim bırakmak istersen: <a href=\"{feedbackUrl}\" style=\"color:" +
            BRAND_BLUE +
            ';">3 sorudan ibaret form</a>. Zorunlu değil — ama okuyup not alıyorum, ürünü gerçekten iyileştiriyor.',
        ),
        p("Bir gün geri dönmek istersen, yeni bir hesapla baştan başlayabilirsin. Hoşçakal."),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Lafla hesabını silme isteğini {deletedOn} tarihinde işledik. Bütün ilerlemen, koç anıların, ödemelerinle ilişkilendirilmiş bilgilerin kalıcı olarak silindi. Bu işlem geri alınamaz.",
    "",
    "Sebebini biliyorsan ve kısa bir geri bildirim bırakmak istersen: {feedbackUrl} (3 sorudan ibaret form). Zorunlu değil — ama okuyup not alıyorum, ürünü gerçekten iyileştiriyor.",
    "",
    "Bir gün geri dönmek istersen, yeni bir hesapla baştan başlayabilirsin. Hoşçakal.",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "deletedOn"],
  optionalVars: ["feedbackUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_PASSWORD_RESET: EmailTemplate = {
  id: "password-reset",
  subject_tr: "Şifre sıfırlama bağlantın",
  preheader_tr: "Bu bağlantı {expiresMin} dakika içinde geçerliliğini kaybedecek.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Lafla şifreni sıfırlamak istediğini gördüm. Aşağıdaki bağlantıdan yeni bir şifre belirleyebilirsin. Bağlantı <strong>{expiresMin} dakika</strong> içinde geçerliliğini kaybedecek.",
        ),
        p(
          '<a href="{resetUrl}" style="background:' +
            BRAND_YELLOW +
            ";color:#1c1d00;padding:12px 24px;border-radius:32px;text-decoration:none;font-weight:700;font-family:Helvetica,Arial,sans-serif;display:inline-block;\">Şifreyi sıfırla</a>",
        ),
        p(
          "Eğer bu talebi sen göndermediysen bu e-postayı yok sayabilirsin — şifren değişmez ve hesabın güvende kalır.",
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Lafla şifreni sıfırlamak istediğini gördüm. Aşağıdaki bağlantıdan yeni bir şifre belirleyebilirsin. Bağlantı {expiresMin} dakika içinde geçerliliğini kaybedecek.",
    "",
    "Şifreyi sıfırla: {resetUrl}",
    "",
    "Eğer bu talebi sen göndermediysen bu e-postayı yok sayabilirsin — şifren değişmez ve hesabın güvende kalır.",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "resetUrl", "expiresMin"],
  optionalVars: ["unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_LONG_ABSENCE: EmailTemplate = {
  id: "long-absence-reactivation",
  subject_tr: "{daysGone} gün oldu — buradayız",
  preheader_tr: "Birlikte kaldığın yerden devam edebilirsin.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Lafla'yı son açtığından bu yana {daysGone} gün geçmiş. Yoğun bir dönem olabilir — yargılamadan soruyorum: hâlâ İngilizce öğrenmek istiyor musun? Eğer evet, geri dönüş düşündüğünden kolay.",
        ),
        p(
          "Son durumun: {level} seviyesindeydin, {hours} saatlik pratik birikimin var. Bunlar hâlâ kayıtlı — sıfırdan başlamak zorunda değilsin.",
        ),
        p(
          'Bugün 5 dakika ayır, hangi konudan kaldıysak oradan başlayalım: <a href="{appUrl}" style="color:' +
            BRAND_YELLOW +
            ';">uygulamayı aç</a>.',
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Lafla'yı son açtığından bu yana {daysGone} gün geçmiş. Yoğun bir dönem olabilir — yargılamadan soruyorum: hâlâ İngilizce öğrenmek istiyor musun? Eğer evet, geri dönüş düşündüğünden kolay.",
    "",
    "Son durumun: {level} seviyesindeydin, {hours} saatlik pratik birikimin var. Bunlar hâlâ kayıtlı — sıfırdan başlamak zorunda değilsin.",
    "",
    "Bugün 5 dakika ayır: {appUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "daysGone"],
  optionalVars: ["level", "hours", "appUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_MONTHLY_PROGRESS: EmailTemplate = {
  id: "monthly-progress",
  subject_tr: "{monthName} özeti, {name}",
  preheader_tr: "{hours} saat pratik, {newWords} yeni kelime, {pronAvg}/100 telaffuz.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "{monthName} özetin: <strong style=\"color:" +
            BRAND_YELLOW +
            '">{hours} saat</strong> pratik, ' +
            "{newWords} yeni kelime, telaffuz ortalaması <strong>{pronAvg}/100</strong>. " +
            "Geçen aya göre belirgin değişim: {monthlyDelta}.",
        ),
        p(
          "{insightLine}",
        ),
        p(
          'Aylık raporun tam halini uygulamada açabilirsin: <a href="{reportUrl}" style="color:' +
            BRAND_BLUE +
            ';">{reportUrl}</a>.',
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "{monthName} özetin: {hours} saat pratik, {newWords} yeni kelime, telaffuz ortalaması {pronAvg}/100. Geçen aya göre belirgin değişim: {monthlyDelta}.",
    "",
    "{insightLine}",
    "",
    "Aylık raporun tam halini uygulamada açabilirsin: {reportUrl}",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "monthName", "hours", "newWords", "pronAvg"],
  optionalVars: ["monthlyDelta", "insightLine", "reportUrl", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_MILESTONE_100H: EmailTemplate = {
  id: "milestone-100-hours",
  subject_tr: "100 saat doldu, {name}",
  preheader_tr: "Üç haneye geçtin. Bu kazara olmaz.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "Lafla'da toplam pratik saatin bugün <strong style=\"color:" +
            BRAND_YELLOW +
            '">100 saati</strong> geçti. ' +
            "Bu kazara olan bir şey değil — kararlı bir şekilde geri döndüğünü, kötü günlerde de devam ettiğini gördüm.",
        ),
        p(
          "Tipik bir B1 öğrencisi, B2'ye geçiş için yaklaşık 150–200 saat aktif pratik harcar. Sen şu an {level} seviyesindesin — kendi yolunda nerede olduğunu göstermek istedim.",
        ),
        p("Bir sonraki 100 saatte ne çalışmak istersin? Düşünmeye değer."),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "Lafla'da toplam pratik saatin bugün 100 saati geçti. Bu kazara olan bir şey değil — kararlı bir şekilde geri döndüğünü, kötü günlerde de devam ettiğini gördüm.",
    "",
    "Tipik bir B1 öğrencisi, B2'ye geçiş için yaklaşık 150–200 saat aktif pratik harcar. Sen şu an {level} seviyesindesin — kendi yolunda nerede olduğunu göstermek istedim.",
    "",
    "Bir sonraki 100 saatte ne çalışmak istersin? Düşünmeye değer.",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name"],
  optionalVars: ["level", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

const T_CERTIFICATE_EARNED: EmailTemplate = {
  id: "certificate-earned",
  subject_tr: "{level} sertifikan hazır",
  preheader_tr: "PDF olarak indirebilir ya da profilinden paylaşabilirsin.",
  body_html_tr: htmlShell(
    bodyBlock(
      [
        p("Merhaba {name},"),
        p(
          "{level} seviyesi için sertifikan hazır. Lafla bu sertifikayı, geçtiğimiz {weeks} hafta boyunca yaptığın {hours} saatlik aktif pratik ve {sessions} koçluk oturumuna dayanarak veriyor. Resmî bir CEFR belgesi değil — ama gerçek bir ilerlemenin kanıtı.",
        ),
        p(
          '<a href="{certificateUrl}" style="background:' +
            BRAND_YELLOW +
            ";color:#1c1d00;padding:12px 24px;border-radius:32px;text-decoration:none;font-weight:700;font-family:Helvetica,Arial,sans-serif;display:inline-block;\">Sertifikayı indir (PDF)</a>",
        ),
        p(
          "LinkedIn profiline ekleyebilir, ya da kendine sakla — ikisi de eşit derecede meşru bir kullanım.",
        ),
      ].join("\n"),
      SIGNOFF_DEFAULT,
    ),
  ),
  body_text_tr: [
    "Merhaba {name},",
    "",
    "{level} seviyesi için sertifikan hazır. Lafla bu sertifikayı, geçtiğimiz {weeks} hafta boyunca yaptığın {hours} saatlik aktif pratik ve {sessions} koçluk oturumuna dayanarak veriyor. Resmî bir CEFR belgesi değil — ama gerçek bir ilerlemenin kanıtı.",
    "",
    "Sertifikayı indir (PDF): {certificateUrl}",
    "",
    "LinkedIn profiline ekleyebilir, ya da kendine sakla — ikisi de eşit derecede meşru bir kullanım.",
    "",
    SIGNOFF_DEFAULT,
  ].join("\n"),
  requiredVars: ["name", "level", "certificateUrl"],
  optionalVars: ["hours", "sessions", "weeks", "unsubscribeUrl"],
  signoff_tr: SIGNOFF_DEFAULT,
};

// ---------------------------------------------------------------------------
// Registry + helpers
// ---------------------------------------------------------------------------

export const EMAIL_TEMPLATES: Readonly<Record<EmailTemplateId, EmailTemplate>> =
  Object.freeze({
    welcome: T_WELCOME,
    "first-week-recap": T_FIRST_WEEK_RECAP,
    "weekly-report": T_WEEKLY_REPORT,
    "streak-break": T_STREAK_BREAK,
    "level-up": T_LEVEL_UP,
    "payment-success": T_PAYMENT_SUCCESS,
    "payment-failed": T_PAYMENT_FAILED,
    "subscription-renewed": T_SUBSCRIPTION_RENEWED,
    "subscription-cancelled": T_SUBSCRIPTION_CANCELLED,
    "account-deleted-confirmation": T_ACCOUNT_DELETED,
    "password-reset": T_PASSWORD_RESET,
    "long-absence-reactivation": T_LONG_ABSENCE,
    "monthly-progress": T_MONTHLY_PROGRESS,
    "milestone-100-hours": T_MILESTONE_100H,
    "certificate-earned": T_CERTIFICATE_EARNED,
  });

export function getEmailTemplate(id: EmailTemplateId): EmailTemplate | undefined {
  return EMAIL_TEMPLATES[id];
}

// ---------------------------------------------------------------------------
// Variable substitution.
// We do a simple {key} → vars[key] sweep, with two extras:
//   - The literal `{{LOGO}}` placeholder in the HTML shell becomes a small
//     wordmark snippet so we don't ship an external image dependency.
//   - Unsubscribe URL has a sensible empty-string fallback so the link
//     simply degrades to a `#` anchor in dev (no broken-link errors).
// ---------------------------------------------------------------------------

const LOGO_HTML = `<span style="font-family:Helvetica,Arial,sans-serif;color:${BRAND_YELLOW};font-weight:700;letter-spacing:0.5px;">lafla</span> · İngilizce için kişisel koç`;

function substitute(
  source: string,
  vars: Record<string, string>,
): string {
  let out = source.replace("{{LOGO}}", LOGO_HTML);
  // Replace all {key} occurrences. We tolerate underscores/dashes/dots in
  // case downstream code uses scoped variable names.
  out = out.replace(/\{([a-zA-Z0-9_.-]+)\}/g, (match, key: string) => {
    if (Object.prototype.hasOwnProperty.call(vars, key)) {
      return vars[key];
    }
    // Sensible fallback for the most common optional var: degrade to "#".
    if (key === "unsubscribeUrl" || key === "appUrl" || key.endsWith("Url")) {
      return "#";
    }
    // Leave unresolved tokens visible in dev (helps catch bugs in QA).
    return match;
  });
  return out;
}

export function renderTemplate(
  template: EmailTemplate,
  vars: Record<string, string>,
): { subject: string; html: string; text: string } {
  return {
    subject: substitute(template.subject_tr, vars),
    html: substitute(template.body_html_tr, vars),
    text: substitute(template.body_text_tr, vars),
  };
}
