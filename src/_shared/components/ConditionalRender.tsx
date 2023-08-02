/* eslint-disable @typescript-eslint/no-explicit-any */
interface RenderProps {
  renderIf: boolean;
  children?: React.ReactNode;
}

export default function ConditionalRender({ renderIf, children }: RenderProps) {
  if (!renderIf) return null;
  return <>{children}</>;
}
