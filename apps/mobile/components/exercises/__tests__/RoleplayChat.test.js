import React from "react";
import renderer, { act } from "react-test-renderer";
import { TextInput, Pressable, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RoleplayChat } from "../RoleplayChat";
import { startListening } from "../../../lib/speech-recognition";

jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));
jest.mock("../../../lib/speech-recognition", () => ({
  isAvailable: jest.fn(async () => true),
  startListening: jest.fn(async () => {}),
  stopListening: jest.fn(async () => {}),
}));
jest.mock("../../../lib/tts", () => ({ speak: jest.fn(), stop: jest.fn() }));
jest.mock("../../../lib/mistake-tracker", () => ({ recordUserText: jest.fn(async () => {}) }));

const props = {
  scenarioDescription: "İş görüşmesi",
  npcRole: "manager",
  setting: "work",
  turns: [{ speaker: "user", acceptable_patterns: ["hello"], hint_tr: "Say 'hello'" }],
  onComplete: jest.fn(),
  mode: "multi-choice",
};
let tree;
const press = async label => {
  const button = tree.root.findAllByType(Pressable).find(x => x.props.accessibilityLabel === label);
  expect(button).toBeDefined();
  await act(async () => button.props.onPress());
};
const notice = message => tree.root.findAllByType(Text).some(x => x.props.children === message);

beforeEach(async () => { jest.clearAllMocks(); await AsyncStorage.clear(); });
afterEach(async () => { if (tree) await act(async () => tree.unmount()); tree = null; });
async function render(extra = {}) { await act(async () => { tree = renderer.create(<RoleplayChat {...props} {...extra} />); }); }

test("speech error reveals written entry and explains the fallback", async () => {
  await render();
  await press("Konuşmaya başla");
  const callbacks = startListening.mock.calls[0][0];
  await act(async () => callbacks.onError(new Error("permission denied")));
  expect(tree.root.findAllByType(TextInput)).toHaveLength(1);
  expect(notice("Sesli giriş kullanılamadı. Yanıtını yazarak gönderebilirsin.")).toBe(true);
  await act(async () => callbacks.onResult("late transcript", true));
  expect(tree.root.findByType(TextInput).props.value).toBe("");
});

test("choosing written entry shows a text field even in multiple choice", async () => {
  await render();
  expect(tree.root.findAllByType(TextInput)).toHaveLength(0);
  await press("Yazarak gönder");
  expect(tree.root.findAllByType(TextInput)).toHaveLength(1);
});

test("short hard mode answer remains editable with an explanation", async () => {
  await render({ hardMode: true });
  await press("Yazarak gönder");
  await act(async () => tree.root.findByType(TextInput).props.onChangeText("Hi"));
  await press("Gönder");
  expect(tree.root.findByType(TextInput).props.value).toBe("Hi");
  expect(notice("Zor modda en az 8 karakterlik bir yanıt yaz veya söyle.")).toBe(true);
});
