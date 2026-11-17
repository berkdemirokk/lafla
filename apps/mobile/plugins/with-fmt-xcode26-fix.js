const fs = require("fs");
const path = require("path");
const { withDangerousMod } = require("expo/config-plugins");

const MARKER = "# @lafla/xcode26-fmt-consteval-fix";

function rubyBlockDelta(line) {
  const stripped = line.replace(/#.*$/, "");
  const opens = (stripped.match(/\b(do|if|unless|case|begin|class|module|def)\b/g) ?? []).length;
  const closes = (stripped.match(/\bend\b/g) ?? []).length;
  return opens - closes;
}

function insertIntoPostInstall(contents, snippet) {
  if (contents.includes(MARKER)) return contents;

  const lines = contents.split(/\r?\n/);
  const start = lines.findIndex((line) =>
    /^\s*post_install\s+do\s+\|installer\|/.test(line),
  );
  if (start === -1) return contents;

  let depth = 1;
  for (let index = start + 1; index < lines.length; index += 1) {
    const delta = rubyBlockDelta(lines[index]);
    if (delta < 0 && depth + delta <= 0) {
      lines.splice(index, 0, ...snippet);
      return lines.join("\n");
    }
    depth += delta;
  }

  return contents;
}

module.exports = function withFmtXcode26Fix(config) {
  return withDangerousMod(config, [
    "ios",
    async (config) => {
      const podfilePath = path.join(
        config.modRequest.platformProjectRoot,
        "Podfile",
      );
      if (!fs.existsSync(podfilePath)) return config;

      const snippet = [
        `  ${MARKER}`,
        "  installer.pods_project.targets.each do |target|",
        "    next unless target.name == 'fmt'",
        "    target.build_configurations.each do |config|",
        "      config.build_settings['CLANG_CXX_LANGUAGE_STANDARD'] = 'c++17'",
        "    end",
        "  end",
      ];

      const current = fs.readFileSync(podfilePath, "utf8");
      const next = insertIntoPostInstall(current, snippet);
      if (next !== current) {
        fs.writeFileSync(podfilePath, next);
      }
      return config;
    },
  ]);
};

module.exports.insertIntoPostInstall = insertIntoPostInstall;
