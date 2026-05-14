// Help screen — SSS, arama (visual), iletişim.

import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../theme";

type FaqItem = { q: string; a: string };

const FAQS: FaqItem[] = [
  {
    q: "Anonim mod nedir?",
    a: "Hiç kayıt olmadan kullanabilirsin. Tüm ilerlemen telefonunda yerelde tutulur. Telefon değişirse ya da uygulamayı silersen ilerleme gider.",
  },
  {
    q: "Cloud sync nasıl çalışır?",
    a: "Hesap açtığında ilerlemen Lafla bulutuna yedeklenir. Yeni bir cihaza girdiğinde aynı hesapla devam edersin — sahneler, streak, başarımlar hepsi senkron.",
  },
  {
    q: "Hesap silme nasıl yapılır?",
    a: "Profil > Ayarlar üzerinden çıkış yapabilirsin. Tüm verinin silinmesini istiyorsan hello@lafla.app adresine yaz, 7 gün içinde hesabını ve verini tamamen sileriz.",
  },
  {
    q: "Pro üyelik iptali nasıl?",
    a: "App Store > Ayarlar > Apple ID > Abonelikler > Lafla > İptal Et yolundan tek dokunuşla iptal edersin. Süre bitene kadar Pro özellikleri açık kalır.",
  },
  {
    q: "Telaffuz ölçümü doğru mu?",
    a: "Apple Speech framework kullanıyoruz, doğruluk yaklaşık %85. Gürültülü ortamda düşer. Modeli sürekli geliştiriyoruz, hatalı puanları bize bildirebilirsin.",
  },
  {
    q: "Aktif gün serisi nasıl korunur?",
    a: "Her gün en az 1 sahneyi tamamla, yeter. Bir gün kaçırırsan seri sıfırlanır. Pro üyelikte esneklik günü (ayda 2 kez bir gün koruma) yakında geliyor.",
  },
  {
    q: "Push bildirim çalışmıyor?",
    a: "Telefon Ayarları > Lafla > Bildirimler'i aç. Uygulama içi Ayarlar'dan günlük hatırlatıcının açık olduğunu kontrol et. Hâlâ gelmiyorsa telefonu bir kez yeniden başlat.",
  },
  {
    q: "İngilizce yazıyorum ama 0 puan alıyorum?",
    a: "Cevabın sahnenin acceptable_patterns listesine uymuyor olabilir. İpucundaki örneğe yakın, kısa ve doğal yaz. Anlam doğru olsa bile cümle yapısı tutmazsa puan düşer.",
  },
  {
    q: "Daha fazla içerik ne zaman geliyor?",
    a: "Her ay yeni skill ve sahneler ekliyoruz. Yeni özelliklerden önce haberdar olmak için Twitter'dan @lafla_app'i takip et.",
  },
  {
    q: "Veri güvenliği nasıl?",
    a: "Tüm verin Supabase üzerinde Row Level Security (RLS) ile korunur — kimse başkasının verisini göremez, biz dahil. Şifreler hashlenir, hassas alanlar şifrelenir.",
  },
];

export default function HelpScreen() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((cur) => (cur === i ? null : i));
  };

  const mailto = () => {
    Linking.openURL("mailto:hello@lafla.app?subject=Lafla yardım").catch(() =>
      Alert.alert("Hata", "Mail uygulaması açılamadı."),
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Yardım</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.searchBar} pointerEvents="none">
          <Text style={styles.searchPlaceholder}>Soru ara…</Text>
        </View>

        <Text style={styles.intro}>
          En sık sorulanlar burada. Aradığını bulamazsan en alttaki butondan bize
          yaz, 24 saat içinde dönüyoruz.
        </Text>

        <Text style={styles.sectionLabel}>SIKÇA SORULANLAR</Text>
        <View style={styles.faqList}>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Pressable
                key={i}
                style={[styles.faqItem, isOpen && styles.faqItemOpen]}
                onPress={() => toggle(i)}
              >
                <View style={styles.faqHead}>
                  <Text style={styles.faqQ}>{item.q}</Text>
                  <Text style={[styles.faqChevron, isOpen && styles.faqChevronOpen]}>
                    ›
                  </Text>
                </View>
                {isOpen && <Text style={styles.faqA}>{item.a}</Text>}
              </Pressable>
            );
          })}
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Sorum cevaplanmadı</Text>
          <Text style={styles.contactSub}>
            Bize yaz, gerçek bir insan dönüş yapacak.
          </Text>
          <Pressable style={styles.contactBtn} onPress={mailto}>
            <Text style={styles.contactBtnText}>hello@lafla.app</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 80,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.full,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 10,
    marginBottom: tokens.spacing.sm,
  },
  searchPlaceholder: {
    fontSize: 14,
    color: tokens.text.tertiary,
  },
  intro: {
    fontSize: 13,
    lineHeight: 19,
    color: tokens.text.secondary,
    marginBottom: tokens.spacing.md,
    paddingHorizontal: 4,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 8,
    paddingLeft: 12,
  },
  faqList: {
    gap: 8,
    marginBottom: tokens.spacing.md,
  },
  faqItem: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "transparent",
  },
  faqItemOpen: {
    borderColor: tokens.brand.tertiary,
    backgroundColor: tokens.brand.tertiarySoft,
  },
  faqHead: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  faqQ: {
    flex: 1,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
    lineHeight: 21,
  },
  faqChevron: {
    fontSize: 22,
    color: tokens.text.tertiary,
    transform: [{ rotate: "90deg" }],
  },
  faqChevronOpen: {
    color: tokens.brand.tertiary,
    transform: [{ rotate: "270deg" }],
  },
  faqA: {
    fontSize: 14,
    lineHeight: 21,
    color: tokens.text.onSurfaceVariant,
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
  },
  contactCard: {
    backgroundColor: tokens.bg.onBackground,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    alignItems: "center",
    marginTop: tokens.spacing.base,
  },
  contactTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.inverseOnSurface,
    marginBottom: 4,
  },
  contactSub: {
    fontSize: 13,
    color: tokens.text.secondaryFixedDim,
    textAlign: "center",
    marginBottom: tokens.spacing.sm,
  },
  contactBtn: {
    backgroundColor: tokens.brand.primary,
    borderRadius: tokens.radius.full,
    paddingVertical: 12,
    paddingHorizontal: 28,
  },
  contactBtnText: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.brand.onPrimary,
    letterSpacing: 0.3,
  },
});
