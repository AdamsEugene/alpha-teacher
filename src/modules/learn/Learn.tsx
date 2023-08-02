import React from "react";
import { Button, FlexboxGrid } from "rsuite";
import { styled } from "styled-components";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import Typography from "../../_shared/components/Typography";
import GlassContainer from "../../_shared/components/card/GlassContainer";
import Animate from "../../_shared/components/Animate";
import { useNavigate } from "react-router-dom";
import Featured from "../../_shared/components/card/Featured";
import CourseCard from "../../_shared/components/card/CourseCard";

const LearnContainer = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <LearnWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Header>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={14}>
            <Typography $variant="title">Learn The Best Tools</Typography>
            <Typography $variant="title">
              From You'r Number 1 Platform
            </Typography>
            <Typography $variant="subtitle" color="grey">
              We focus on the best course for industrial and commercial use.
              Your job here is to just read, watch or listen and we promise you
              will be ready for that dream job
            </Typography>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={10}>
            <FlexboxGrid justify="end">
              <Button
                color="cyan"
                appearance="primary"
                startIcon={<AddOutlineIcon />}
                onClick={() => navigate("create")}
              >
                Create New Course
              </Button>
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Header>
      <Section>
        <GlassContainer children={<Featured position="left" />} />
        <GlassContainer children={<Featured position="right" />} />
      </Section>
      <Section $wrap>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="start">
              <CourseCard onClick={() => navigate("1/preview")} />
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="center">
              <CourseCard onClick={() => navigate("2/preview")} />
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="center">
              <CourseCard onClick={() => navigate("3/preview")} />
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="end">
              <CourseCard />
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid>
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="start">
              <CourseCard />
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="center">
              <CourseCard />
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="center">
              <CourseCard />
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="end">
              <CourseCard />
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Section>
    </LearnWrapper>
  );
});

export default function Learn() {
  return <Animate children={LearnContainer} />;
}

const LearnWrapper = styled.div`
  /* background-color: #07131d; */
  width: 100%;
  margin-bottom: 24px;
`;

const Header = styled.div``;

const Section = styled.section<{ $wrap?: boolean }>`
  display: flex;
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
  gap: 24px;
  margin-top: 32px;
`;
