/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { styled } from "styled-components";
import Animate from "../../../_shared/components/Animate";
import { Avatar, Button, FlexboxGrid, Rate, Stack } from "rsuite";
import OffRoundIcon from "@rsuite/icons/OffRound";

import Typography from "../../../_shared/components/Typography";
import PreviewDetails from "./PreviewDetails";
import { EnrollButton } from "./@styles";

const PreviewContainer = React.forwardRef((props, ref) => {
  return (
    <PreviewWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <TopPart>
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={16}>
            <Stack spacing={16} direction="column" alignItems="flex-start">
              <Typography $variant="title">
                Learn TypeScript In 5 Hours
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                temporibus architecto eligendi numquam illo? Fugit, eum mollitia
                cum aut, possimus laborum ut nesciunt rem doloremque ullam ipsum
                veniam. Iusto, tempore.
              </Typography>
              <Stack spacing={6}>
                <Rate defaultValue={4.9} size="xs" allowHalf readOnly />
                <Typography>4.9 130,402 ratings</Typography>
              </Stack>
              <Stack spacing={6}>
                <Avatar
                  size="md"
                  circle
                  src={
                    (Math.random() * 10) % 2 === 0
                      ? "https://avatars.githubusercontent.com/u/12592949"
                      : "https://avatars.githubusercontent.com/u/8225666"
                  }
                  alt="@SevenOutman"
                />
                <Typography>Adams Eugene</Typography>
                <Typography $color="grey">Adams Eugene</Typography>
              </Stack>
              <Stack spacing={16}>
                <EnrollButton>
                  <Button appearance="primary" size="lg" color="red">
                    <Stack spacing={6} direction="column">
                      <Typography>Enroll for free</Typography>
                      <Typography>Start Jul 24</Typography>
                    </Stack>
                  </Button>
                </EnrollButton>
                <h4>
                  Try for Free: Enroll to start your 14-day full access free
                  trial
                </h4>
              </Stack>
              <Typography $color="grey">779,946 already enrolled</Typography>
            </Stack>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={7}>
            {/* <FlexboxGrid justify="center"> */}
            <Typography>Offered By</Typography>
            <Stack spacing={8}>
              <OffRoundIcon />
              <Typography $variant="title">DeepLearning.AI</Typography>
            </Stack>
            {/* </FlexboxGrid> */}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </TopPart>
      <BottomPart>
        <PreviewDetails />
      </BottomPart>
    </PreviewWrapper>
  );
});

export default function Preview() {
  return <Animate children={PreviewContainer} />;
}

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const TopPart = styled.div`
  min-height: 300px;
  width: 100%;
  backdrop-filter: blur(16px) saturate(19%);
  -webkit-backdrop-filter: blur(16px) saturate(19%);
  background-color: rgba(52, 195, 255, 0.25);
  background: ${({ theme }) => theme.colors.background.cards};
  border-radius: 12px;
  padding: 16px;
`;

const BottomPart = styled.div`
  margin-top: 8px;
`;
