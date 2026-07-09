const fs = require("fs");
const path = require("path");
const { withDangerousMod } = require("expo/config-plugins");

const LOCALIZATIONS = {
  en: {
    NSMicrophoneUsageDescription:
      "Microphone access is required to evaluate your pronunciation and let you answer scenes by voice.",
    NSPhotoLibraryUsageDescription:
      "Photo library access is required so you can save your progress card.",
    NSSpeechRecognitionUsageDescription:
      "Speech recognition is used to understand the English sentences you speak.",
    NSUserTrackingUsageDescription:
      "Your anonymous advertising ID (IDFA) is used only to show more relevant ads in the free version. If you decline, you will see non-personalized ads.",
  },
  tr: {
    NSMicrophoneUsageDescription:
      "Telaffuzunu değerlendirmek ve sahnede sesle cevap verebilmek için mikrofon erişimi gerekli.",
    NSPhotoLibraryUsageDescription:
      "İlerleme kartını galerine kaydedebilmen için izin gerekli.",
    NSSpeechRecognitionUsageDescription:
      "Söylediğin İngilizce cümleleri anlamak için konuşma tanıma kullanılır.",
    NSUserTrackingUsageDescription:
      "Anonim reklam kimliğin (IDFA) yalnızca ücretsiz sürümde daha alakalı reklamlar göstermek için kullanılır. Reddedersen kişiselleştirilmemiş reklam görürsün.",
  },
};

function escapePlistString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function serializeInfoPlistStrings(strings) {
  return `${Object.entries(strings)
    .map(([key, value]) => `"${key}" = "${escapePlistString(value)}";`)
    .join("\n")}\n`;
}

module.exports = function withInfoPlistLocalizations(config) {
  return withDangerousMod(config, [
    "ios",
    async (config) => {
      const projectRoot = config.modRequest.platformProjectRoot;

      for (const [locale, strings] of Object.entries(LOCALIZATIONS)) {
        const dir = path.join(projectRoot, `${locale}.lproj`);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(
          path.join(dir, "InfoPlist.strings"),
          serializeInfoPlistStrings(strings),
          "utf8",
        );
      }

      return config;
    },
  ]);
};

module.exports.LOCALIZATIONS = LOCALIZATIONS;
module.exports.serializeInfoPlistStrings = serializeInfoPlistStrings;
