// react-test-renderer ships no bundled types and @types/react-test-renderer is
// not installed; the render tests only need this minimal surface.
declare module "react-test-renderer" {
  export interface ReactTestInstance {
    type: unknown;
    props: Record<string, any>;
    children: Array<ReactTestInstance | string>;
    parent: ReactTestInstance | null;
    findAll(predicate: (node: ReactTestInstance) => boolean): ReactTestInstance[];
  }
  export interface ReactTestRenderer {
    root: ReactTestInstance;
    toJSON(): unknown;
    unmount(): void;
    update(el: unknown): void;
  }
  export function create(el: unknown): ReactTestRenderer;
  export function act(cb: () => void | Promise<void>): Promise<void>;
}
