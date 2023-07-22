/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { styled } from "styled-components";

export default function GlassContainer() {
  return <GlassContainerWrapper>GlassContainer</GlassContainerWrapper>;
}

const GlassContainerWrapper = styled.div`
  backdrop-filter: blur(16px) saturate(19%);
  -webkit-backdrop-filter: blur(16px) saturate(19%);
  background-color: rgba(52, 195, 255, 0.25);
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  filter: drop-shadow(0 0 0.75rem rgba(52, 195, 255, 0.25));
  min-height: 200px;
  width: 100%;
  border-radius: 12px;
  padding: 16px;
`;
