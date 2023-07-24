/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { styled } from "styled-components";
import FeaturedList from "./FeaturedList";
import { FlexboxGrid } from "rsuite";
import CourseCard from "./CourseCard";

interface Props {
  position: "left" | "right";
}

export default function Featured(props: Props) {
  const { position } = props;

  const Left =
    position === "left" ? (
      <LeftPart>
        <FeaturedList />
      </LeftPart>
    ) : (
      <CourseCard $width="100%" />
    );
  const Right =
    position === "left" ? (
      <CourseCard $width="100%" />
    ) : (
      <LeftPart>
        <FeaturedList />
      </LeftPart>
    );
  return (
    <FeaturedWrapper>
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={12}>{Left}</FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={12}>{Right}</FlexboxGrid.Item>
      </FlexboxGrid>
    </FeaturedWrapper>
  );
}

const FeaturedWrapper = styled.div`
  /* display: flex; */
  gap: 8px;
  max-height: 400px;
  width: 100%;
`;

const LeftPart = styled.div`
  /* width: 100%; */
  max-height: 350px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
