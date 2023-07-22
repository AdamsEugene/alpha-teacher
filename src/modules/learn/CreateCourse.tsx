/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import { styled } from "styled-components";
import PageNextIcon from "@rsuite/icons/PageNext";
import PagePreviousIcon from "@rsuite/icons/PagePrevious";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { Avatar, AvatarGroup, Button, FlexboxGrid, IconButton } from "rsuite";
import { useNavigate } from "react-router-dom";

import Animate from "../../_shared/components/Animate";
import CustomSteps from "../../_shared/components/CustomSteps";
import Typography from "../../_shared/components/Typography";
import PersonalInfo from "./form/PersonalInfo";
import FloatingButton from "../../_shared/components/FloatingButton";
import CourseInfoBasic from "./form/CourseInfoBasic";
import Instructors from "./form/Instructors";
import { InstructorData } from "./@types";
import { StyledDrawer } from "../../_shared/components/StyledDrawer";

const data = [
  { title: "Personal Info" },
  { title: "Instructors" },
  { title: "Course Info (Basic)" },
  { title: "Course Info" },
  { title: "Summary" },
];

const CreateCourseContainer = React.forwardRef((props: any, ref) => {
  const { current, setInstructors, ...others } = props;
  const _current = current as number;

  const RenderAddInstructorButton = React.forwardRef((props, ref) => {
    return (
      <ButtonWrapper
        {...props}
        ref={ref as React.RefObject<HTMLDivElement> | null | undefined}
      >
        <FlexboxGrid justify="end">
          <Button
            color="cyan"
            appearance="primary"
            startIcon={<AddOutlineIcon />}
            onClick={() => console.log("create")}
          >
            Add Another Instructor
          </Button>
        </FlexboxGrid>
      </ButtonWrapper>
    );
  });

  return (
    <CreateCourseWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={14}>
          <Typography $variant="title">Complete The Form Below</Typography>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={10}>
          <Animate children={RenderAddInstructorButton} inn={_current === 1} />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      <CustomSteps current={_current} data={data} />
      <Animate children={PersonalInfo} inn={_current === 0} />
      <Animate
        children={Instructors}
        inn={_current === 1}
        others={{ setInstructors }}
      />
      <Animate children={CourseInfoBasic} inn={_current === 2} />
      <Animate children={CourseInfoBasic} inn={_current === 3} />
      <Animate children={PersonalInfo} inn={_current === 4} />
      <Animate children={PersonalInfo} inn={_current === 5} />
    </CreateCourseWrapper>
  );
});

export default function CreateCourse() {
  const [current, setCurrent] = useState(0);
  const [instructors, setInstructors] = useState<Partial<InstructorData>[]>();
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  const onProceed = () => {
    navigate("section");
  };

  const move = (where: "left" | "right") => {
    if (where === "left") current > 0 && setCurrent((p) => p - 1);
    if (where === "right")
      current < data.length - 1 && setCurrent((p) => p + 1);
  };

  const RenderInstructors = React.forwardRef((props, ref) => {
    return (
      <ButtonWrapper
        {...props}
        ref={ref as React.RefObject<HTMLDivElement> | null | undefined}
      >
        <AvatarGroup spacing={6}>
          {instructors?.length &&
            instructors.map((instructor) => (
              <Avatar
                key={instructor.email}
                size="lg"
                circle
                src={instructor.profileImageUrl}
                alt="@SevenOutman"
                onClick={() => setOpenDrawer(true)}
                style={{ cursor: "pointer" }}
              />
            ))}
        </AvatarGroup>
      </ButtonWrapper>
    );
  });

  return (
    <>
      <Animate inn={current === 1} children={RenderInstructors} />
      <Animate
        others={{ current, setInstructors }}
        children={CreateCourseContainer}
      />
      <PageMoveButtons>
        <IconButton
          icon={<PagePreviousIcon style={{ fontSize: "4em" }} />}
          circle
          size="lg"
          onClick={() => move("left")}
          appearance="subtle"
        />
        <IconButton
          icon={<PageNextIcon style={{ fontSize: "4em" }} />}
          circle
          size="lg"
          onClick={() => move("right")}
          appearance="subtle"
        />
      </PageMoveButtons>
      <Animate
        children={FloatingButton}
        others={{ title: "Proceed", onClick: onProceed }}
      />
      <StyledDrawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        // children={<SocialMedia onChange={handleInputChange} />}
      />
    </>
  );
}

const CreateCourseWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  min-height: 82vh;
  z-index: 2;
`;

const PageMoveButtons = styled.div`
  position: fixed;
  /* left: -15%; */
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 80%;
  z-index: 0;
`;

const ButtonWrapper = styled.div``;
