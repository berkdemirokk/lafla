module.exports = {
  preset: "jest-expo",
  // pnpm stores real package files under node_modules/.pnpm/.../node_modules.
  // The previous allow-list missed that path and Jest tried to execute React
  // Native Flow syntax untransformed.
  transformIgnorePatterns: [
    "node_modules/(?!\\.pnpm|((jest-)?react-native|@react-native(-community)?|expo(nent)?|expo-.*|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|@sentry/react-native|native-base|react-native-svg))",
    "node_modules/.pnpm/(?!(?:((jest-)?react-native|@react-native\\+.*|expo(nent)?|expo-.*|@expo(nent)?\\+.*|@expo-google-fonts\\+.*|react-navigation|@react-navigation\\+.*|@unimodules\\+.*|unimodules|sentry-expo|@sentry\\+react-native|native-base|react-native-svg)@))",
  ],
  setupFiles: ["./jest-setup.js"],
  setupFilesAfterEnv: [],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
