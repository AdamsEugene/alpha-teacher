import React from "react";
import { styled } from "styled-components";
import Animate from "../../_shared/components/Animate";

const TeachContainer = React.forwardRef((props, ref) => {
  return (
    <TeachWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      Teach
    </TeachWrapper>
  );
});

export default function Teach() {
  return <Animate children={TeachContainer} />;
}

const TeachWrapper = styled.div``;
