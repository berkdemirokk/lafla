// Tiny render/query helpers on react-test-renderer (RNTL is not installed).
import type { ReactElement } from "react";
import { ThemeProvider } from "../theme/theme-provider";
import TestRenderer, { act, type ReactTestInstance } from "react-test-renderer";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

type Root = { root: ReactTestInstance };

export async function render(el: ReactElement) {
  let r!: ReturnType<typeof TestRenderer.create>;
  await act(async () => {
    r = TestRenderer.create(<ThemeProvider>{el}</ThemeProvider>);
  });
  return r;
}

export async function flush(times = 3) {
  for (let i = 0; i < times; i += 1) {
    await act(async () => {
      await Promise.resolve();
    });
  }
}

function textOf(node: ReactTestInstance | string): string {
  if (typeof node === "string") return node;
  return node.children.map(textOf).join("");
}

/** Pressable-level nodes (have onPress), matched by accessibilityLabel. */
export function byLabel(r: Root, label: string | RegExp) {
  return r.root.findAll(
    (n) =>
      typeof n.props.onPress === "function" &&
      (typeof label === "string"
        ? n.props.accessibilityLabel === label
        : typeof n.props.accessibilityLabel === "string" && label.test(n.props.accessibilityLabel)),
  );
}

export function hasLabel(r: Root, label: string | RegExp) {
  return byLabel(r, label).length > 0;
}

export function texts(r: Root): string[] {
  return r.root.findAll((n) => (n.type as unknown) === "Text").map((n) => textOf(n));
}

export function hasText(r: Root, text: string | RegExp) {
  return texts(r).some((s) => (typeof text === "string" ? s.includes(text) : text.test(s)));
}

export async function press(r: Root, label: string | RegExp) {
  const nodes = byLabel(r, label);
  if (nodes.length === 0) throw new Error(`no pressable with label ${String(label)}`);
  const node = nodes[0]!;
  if (node.props.disabled) return;
  await act(async () => {
    await node.props.onPress();
  });
}

export function isDisabled(r: Root, label: string) {
  const n = byLabel(r, label)[0];
  if (!n) throw new Error(`no pressable with label ${label}`);
  return Boolean(n.props.disabled);
}
