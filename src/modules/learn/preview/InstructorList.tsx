/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Button, Panel, Stack } from "rsuite";
import { styled } from "styled-components";
import { Icon } from "@rsuite/icons";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiBookCover } from "react-icons/gi";
import Typography from "../../../_shared/components/Typography";

export default function InstructorList({ img }: { img: string }) {
  return (
    <InstructorListWrapper>
      <Panel
        shaded
        // bordered
        bodyFill
        style={{ display: "inline-block", width: 240 }}
      >
        <img src={img} height="240" />
        <Panel
          header={
            <Button appearance="link">
              <Stack spacing={8} direction="column" alignItems="flex-start">
                <Typography>Adams Eugene</Typography>
                <Typography $color="active">TOP INSTRUCTOR</Typography>
              </Stack>
            </Button>
          }
        >
          <Typography>Instructor</Typography>
          <Typography>
            Founder, DeepLearning.AI & Co-founder, Coursera
          </Typography>
          <Stack spacing={8}>
            <Icon as={BsFillPeopleFill} />
            <Typography>6,435,567</Typography>
            <Typography $color="grey">Learners</Typography>
          </Stack>
          <Stack spacing={8}>
            <Icon as={GiBookCover} />
            <Typography>300</Typography>
            <Typography $color="grey">Courses</Typography>
          </Stack>
        </Panel>
      </Panel>
    </InstructorListWrapper>
  );
}

const InstructorListWrapper = styled.div`
  background: ${({ theme }) => theme.colors.background.cards};
  .rs-avatar-lg,
  .rs-avatar-lg > .rs-avatar-image {
    height: 90px;
    width: 90px;
  }

  .rs-btn-link {
    padding-left: 0;
  }
`;
