// Lafla — In-app certificate preview.
//
// Mirrors the HTML/PDF design (generateCertificateHTML in lib/certificate.ts)
// in pure React Native primitives so users see what they'll get BEFORE they
// hit "PDF olarak indir". The component fits an A4-landscape proportioned
// card to whatever width the parent gives it (aspect 297/210 ≈ 1.414).
//
// Forwarded ref → the parent screen can pass this to view-shot to capture
// the preview as a PNG at A4 resolution for "Görsel olarak kaydet".

import { forwardRef } from "react";
import { View, Text, StyleSheet, type ViewStyle } from "react-native";
import { tokens } from "../theme";
import {
  formatAwardedDate,
  formatAwardedDateEN,
  LEVEL_LABELS_EN,
  LEVEL_LABELS_TR,
  type CertificateData,
} from "../lib/certificate";

interface Props {
  cert: CertificateData;
  /** Card width in px. Height auto-derived (A4 landscape ratio). */
  width: number;
  /** Optional override style — caller can add shadows/margin. */
  style?: ViewStyle;
}

// A4 landscape ratio = 297/210 ≈ 1.4143
const A4_RATIO = 297 / 210;

export const CertificatePreview = forwardRef<View, Props>(
  function CertificatePreview({ cert, width, style }, ref) {
    const height = width / A4_RATIO;
    // Scale interior typography by width so the preview holds up at any size.
    // Baseline: 297mm wide print ≈ 842pt. The PDF's 28pt title corresponds to
    // a width ratio of 28/842 ≈ 0.0333. We follow the same ratios here.
    const s = (pt: number) => Math.round((pt / 842) * width);

    return (
      <View
        ref={ref}
        collapsable={false}
        style={[
          styles.card,
          { width, height, padding: s(54), borderRadius: s(12) },
          style,
        ]}
      >
        {/* Decorative geometric corners */}
        <View
          style={[
            styles.corner,
            styles.cornerTL,
            { width: s(28), height: s(28) },
          ]}
        />
        <View
          style={[
            styles.corner,
            styles.cornerTR,
            { width: s(28), height: s(28) },
          ]}
        />
        <View
          style={[
            styles.corner,
            styles.cornerBL,
            { width: s(28), height: s(28) },
          ]}
        />
        <View
          style={[
            styles.corner,
            styles.cornerBR,
            { width: s(28), height: s(28) },
          ]}
        />

        {/* Inner frame */}
        <View style={[styles.frame, { borderRadius: s(6) }]}>
          <View style={[styles.frameInner, { borderRadius: s(4) }]} />
        </View>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.wordmarkRow}>
            <Text
              style={[
                styles.wordmark,
                { fontSize: s(44), lineHeight: s(46) },
              ]}
            >
              Lafla
            </Text>
            <View
              style={[
                styles.wordmarkDot,
                {
                  width: s(14),
                  height: s(14),
                  borderRadius: s(7),
                  marginLeft: s(4),
                  marginBottom: s(4),
                },
              ]}
            />
          </View>
          <View
            style={[
              styles.accentLine,
              { width: s(80), height: s(4), marginTop: s(10), borderRadius: s(2) },
            ]}
          />
        </View>

        {/* Titles */}
        <Text
          style={[styles.titleTr, { fontSize: s(28), marginTop: s(28) }]}
        >
          Yetkinlik Sertifikası
        </Text>
        <Text
          style={[styles.titleEn, { fontSize: s(12), marginTop: s(4), letterSpacing: s(3) }]}
        >
          CERTIFICATE OF PROFICIENCY
        </Text>

        {/* Preamble */}
        <Text style={[styles.preamble, { fontSize: s(13), marginTop: s(26) }]}>
          İşbu belge ile onaylanır ki
        </Text>
        <Text style={[styles.preambleEn, { fontSize: s(10), marginTop: s(2) }]}>
          This is to certify that
        </Text>

        {/* Recipient name */}
        <Text
          style={[
            styles.name,
            { fontSize: s(52), marginTop: s(18), lineHeight: s(56) },
          ]}
          numberOfLines={1}
        >
          {cert.recipientName}
        </Text>
        <View
          style={[
            styles.nameRule,
            { marginTop: s(10), width: width * 0.6, height: 1 },
          ]}
        />

        {/* Body */}
        <Text
          style={[
            styles.body,
            { fontSize: s(13), marginTop: s(18), lineHeight: s(20) },
          ]}
        >
          Lafla'nın yapılandırılmış müfredatı boyunca düzenli pratik göstererek{" "}
          <Text style={styles.bodyLevel}>{LEVEL_LABELS_TR[cert.level]}</Text>{" "}
          düzeyinde İngilizce konuşma yetkinliği sergilemiştir.
        </Text>
        <Text
          style={[
            styles.bodyEn,
            { fontSize: s(10), marginTop: s(8), lineHeight: s(15) },
          ]}
        >
          has demonstrated{" "}
          <Text style={styles.bodyEnLevel}>{LEVEL_LABELS_EN[cert.level]}</Text>{" "}
          level English speaking proficiency through Lafla's structured curriculum.
        </Text>

        {/* Stats row */}
        <View style={[styles.statsRow, { marginTop: s(22), gap: s(36) }]}>
          <Stat
            value={cert.practiceHours.toLocaleString("tr-TR")}
            labelTr="SAAT PRATİK"
            labelEn="practice hours"
            s={s}
          />
          <Stat
            value={cert.vocabCount.toLocaleString("tr-TR")}
            labelTr="AKTİF KELİME"
            labelEn="active vocabulary"
            s={s}
          />
          <Stat
            value={cert.coachSessions.toLocaleString("tr-TR")}
            labelTr="KOÇ SEANSI"
            labelEn="coach sessions"
            s={s}
          />
        </View>

        {/* Footer corners */}
        <View
          style={[
            styles.footer,
            { left: s(54), right: s(54), bottom: s(36) },
          ]}
        >
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <Text
              style={[
                styles.footerLabel,
                { fontSize: s(7.5), letterSpacing: s(1) },
              ]}
            >
              VERİLME TARİHİ · ISSUED
            </Text>
            <Text style={[styles.footerValue, { fontSize: s(10) }]}>
              {formatAwardedDate(cert.awardedAt)}
            </Text>
            <Text style={[styles.footerSub, { fontSize: s(8.5) }]}>
              {formatAwardedDateEN(cert.awardedAt)}
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text
              style={[
                styles.footerLabel,
                { fontSize: s(7.5), letterSpacing: s(1) },
              ]}
            >
              SERTİFİKA NO · SERIAL
            </Text>
            <Text style={[styles.footerValue, { fontSize: s(10) }]}>
              {cert.serialNumber}
            </Text>
            <Text style={[styles.footerSub, { fontSize: s(8.5) }]}>
              lafla.app/verify
            </Text>
          </View>
        </View>

        {/* Signature (centered above footer) */}
        <View
          style={[
            styles.signature,
            { bottom: s(54) },
          ]}
        >
          <Text
            style={[
              styles.sigName,
              { fontSize: s(24), lineHeight: s(26) },
            ]}
          >
            {cert.issuerName.split(",")[0] ?? "Maya"}
          </Text>
          <View
            style={[
              styles.sigUnderline,
              { width: s(160), height: 1.5, marginTop: s(6) },
            ]}
          />
          <Text
            style={[
              styles.sigTitle,
              { fontSize: s(9), marginTop: s(6), letterSpacing: s(1.5) },
            ]}
          >
            {cert.issuerName.toUpperCase()}
          </Text>
          <Text style={[styles.sigTitleEn, { fontSize: s(8) }]}>
            Issued by Lafla
          </Text>
        </View>
      </View>
    );
  },
);

interface StatProps {
  value: string;
  labelTr: string;
  labelEn: string;
  s: (pt: number) => number;
}

function Stat({ value, labelTr, labelEn, s }: StatProps) {
  return (
    <View style={{ alignItems: "center", minWidth: s(80) }}>
      <Text
        style={{
          fontSize: s(22),
          fontWeight: tokens.weight.extrabold,
          color: tokens.text.primary,
          lineHeight: s(24),
        }}
      >
        {value}
      </Text>
      <Text
        style={{
          fontSize: s(9),
          fontWeight: tokens.weight.semibold,
          color: tokens.text.primary,
          letterSpacing: s(1),
          marginTop: s(4),
        }}
      >
        {labelTr}
      </Text>
      <Text
        style={{
          fontSize: s(7.5),
          fontStyle: "italic",
          color: tokens.text.secondary,
          marginTop: s(1),
        }}
      >
        {labelEn}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.bg.surface,
    overflow: "hidden",
    alignItems: "center",
    // Subtle elevation so it looks like paper sitting on the screen.
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    position: "relative",
  },
  corner: {
    position: "absolute",
    backgroundColor: tokens.brand.primary,
    transform: [{ rotate: "45deg" }],
  },
  cornerTL: { top: "4%", left: "4%" },
  cornerTR: { top: "4%", right: "4%" },
  cornerBL: { bottom: "4%", left: "4%" },
  cornerBR: { bottom: "4%", right: "4%" },
  frame: {
    position: "absolute",
    top: "5.5%",
    left: "4%",
    right: "4%",
    bottom: "5.5%",
    borderWidth: 2,
    borderColor: tokens.brand.secondary,
  },
  frameInner: {
    position: "absolute",
    top: 6,
    left: 6,
    right: 6,
    bottom: 6,
    borderWidth: 1,
    borderColor: tokens.brand.secondary,
    opacity: 0.35,
  },
  header: {
    alignItems: "center",
    marginTop: 4,
  },
  wordmarkRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  wordmark: {
    fontWeight: tokens.weight.black,
    color: tokens.brand.secondary,
    letterSpacing: -1.5,
  },
  wordmarkDot: {
    backgroundColor: tokens.brand.primary,
  },
  accentLine: {
    backgroundColor: tokens.brand.primary,
  },
  titleTr: {
    fontWeight: tokens.weight.bold,
    color: tokens.brand.secondary,
    letterSpacing: 0.5,
  },
  titleEn: {
    fontWeight: tokens.weight.medium,
    color: tokens.text.secondary,
    textTransform: "uppercase",
  },
  preamble: {
    color: tokens.text.secondary,
  },
  preambleEn: {
    color: tokens.text.secondary,
    fontStyle: "italic",
  },
  name: {
    color: tokens.brand.secondary,
    fontWeight: tokens.weight.regular,
    // System cursive fallback — RN doesn't have a true script font built-in.
    // The PDF uses Brush Script MT; here we lean on style + italic for a
    // visually-similar "signature" feel.
    fontStyle: "italic",
    fontFamily: tokens.font.sans,
  },
  nameRule: {
    backgroundColor: tokens.brand.secondary,
    opacity: 0.25,
  },
  body: {
    color: tokens.brand.secondary,
    textAlign: "center",
    paddingHorizontal: 24,
  },
  bodyLevel: {
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.tertiary,
  },
  bodyEn: {
    color: tokens.text.secondary,
    fontStyle: "italic",
    textAlign: "center",
    paddingHorizontal: 32,
  },
  bodyEnLevel: {
    fontWeight: tokens.weight.bold,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
  },
  footer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  footerLabel: {
    fontWeight: tokens.weight.bold,
    textTransform: "uppercase",
    color: tokens.brand.secondary,
  },
  footerValue: {
    fontWeight: tokens.weight.semibold,
    color: tokens.brand.secondary,
    marginTop: 2,
  },
  footerSub: {
    color: tokens.text.secondary,
    marginTop: 1,
  },
  signature: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
  },
  sigName: {
    color: tokens.brand.secondary,
    fontStyle: "italic",
    fontWeight: tokens.weight.medium,
  },
  sigUnderline: {
    backgroundColor: tokens.brand.secondary,
  },
  sigTitle: {
    fontWeight: tokens.weight.bold,
    color: tokens.brand.secondary,
    textTransform: "uppercase",
  },
  sigTitleEn: {
    color: tokens.text.secondary,
    fontStyle: "italic",
    marginTop: 1,
  },
});
