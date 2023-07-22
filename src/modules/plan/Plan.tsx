import React from "react";
import { styled } from "styled-components";
import Animate from "../../_shared/components/Animate";

const PlanContainer = React.forwardRef((props, ref) => {
  return (
    <PlanWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      Plane
    </PlanWrapper>
  );
});

export default function Plan() {
  return <Animate children={PlanContainer} />;
}

const PlanWrapper = styled.div``;
