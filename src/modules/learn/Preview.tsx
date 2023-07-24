/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { styled } from "styled-components";
import Animate from "../../_shared/components/Animate";

const PreviewContainer = React.forwardRef((props, ref) => {
  return (
    <PreviewWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <TopPart>Preview</TopPart>
    </PreviewWrapper>
  );
});

export default function Preview() {
  return <Animate children={PreviewContainer} />;
}

const PreviewWrapper = styled.div`
  width: 100%;
`;

const TopPart = styled.div`
  min-height: 300px;
  width: 100%;
  backdrop-filter: blur(16px) saturate(19%);
  -webkit-backdrop-filter: blur(16px) saturate(19%);
  background-color: rgba(52, 195, 255, 0.25);
  border-radius: 12px;
  padding: 16px;
`;
