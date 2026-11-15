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

// The native SDK creates an internal cleanup interval at module import. It is
// not part of app behavior under test and otherwise leaves Jest workers alive.
jest.mock("@sentry/react-native", () => ({
  init: jest.fn(),
  captureException: jest.fn(),
  captureMessage: jest.fn(),
  setUser: jest.fn(),
  addBreadcrumb: jest.fn(),
}));
