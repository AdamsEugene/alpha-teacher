/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Button } from "rsuite";
import { styled } from "styled-components";

const FloatingButton = React.forwardRef((props: any, ref) => {
  const { title, onClick, ...others } = props;
  return (
    <FloatingButtonWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Button size="lg" appearance="primary" onClick={onClick}>
        {title}
      </Button>
    </FloatingButtonWrapper>
  );
});

const FloatingButtonWrapper = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 12rem;
`;

export default FloatingButton;
