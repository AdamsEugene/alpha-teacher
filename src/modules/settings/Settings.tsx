import React from "react";
import { styled } from "styled-components";
import Animate from "../../_shared/components/Animate";

const SettingContainer = React.forwardRef((props, ref) => {
  return (
    <SettingWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      Setting
    </SettingWrapper>
  );
});

export default function Setting() {
  return <Animate children={SettingContainer} />;
}

const SettingWrapper = styled.div``;
