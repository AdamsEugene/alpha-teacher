import { PropsWithChildren } from "react";
import { styled } from "styled-components";

export default function Card(props: PropsWithChildren) {
  const { children } = props;

  return <CardWrapper>{children}</CardWrapper>;
}

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(17, 25, 40, 0.75);
  border-radius: 16px;
  /* border: 1px solid rgba(255, 255, 255, 0.125); */
  -webkit-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
`;
