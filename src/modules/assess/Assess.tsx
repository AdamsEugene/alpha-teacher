import React from "react";
import { styled } from "styled-components";
import Animate from "../../_shared/components/Animate";

const AssessContainer = React.forwardRef((props, ref) => {
  return (
    <AssessWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      Assess
    </AssessWrapper>
  );
});

export default function Assess() {
  return <Animate children={AssessContainer} />;
}

const AssessWrapper = styled.div``;
