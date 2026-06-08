import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

// Mock other native/Expo modules that might get executed during import
jest.mock("expo-linking", () => ({
  createURL: () => "lafla://",
}));

jest.mock("expo-constants", () => ({
  expoConfig: {
    extra: {
      sentryDsn: "",
      posthogKey: "",
    },
  },
}));
