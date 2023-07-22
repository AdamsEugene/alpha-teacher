/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { Button, ButtonToolbar, FlexboxGrid, Uploader } from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiFillAudio } from "react-icons/ai";
import { Icon } from "@rsuite/icons";

import Typography from "../../_shared/components/Typography";
import FloatingButton from "../../_shared/components/FloatingButton";
import Animate from "../../_shared/components/Animate";
import { SectionContentType } from "./@types";
import TextEditor from "../../_shared/components/TextEditor";

const SectionContentContainer = React.forwardRef((props: any, ref) => {
  const navigate = useNavigate();
  const params = useParams();
  const contentType = params.content_type as SectionContentType | undefined;

  const save = () => {
    console.log();
  };

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
            onClick={() => navigate("/learn/create/section")}
          >
            Add Another Section
          </Button>
        </FlexboxGrid>
      </ButtonWrapper>
    );
  });

  const Component =
    contentType === "video" ? (
      <Uploader
        action="//jsonplaceholder.typicode.com/posts/"
        draggable
        accept="audio"
        style={{ width: "100%" }}
      >
        <Wrapper>
          <Icon style={{ fontSize: "12rem" }} as={TfiVideoClapper} />
          <Typography $color="active">
            Click or Drag files to this area to upload
          </Typography>
        </Wrapper>
      </Uploader>
    ) : contentType === "audio" ? (
      <Uploader
        action="//jsonplaceholder.typicode.com/posts/"
        draggable
        accept="video"
        style={{ width: "100%" }}
      >
        <Wrapper>
          <Icon style={{ fontSize: "12rem" }} as={AiFillAudio} />
          <Typography $color="active">
            Click or Drag files to this area to upload
          </Typography>
        </Wrapper>
      </Uploader>
    ) : (
      <TextEditor big />
    );

  return (
    <SectionContentWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <FlexboxGrid>
        <FlexboxGrid.Item colspan={19}>
          <Typography $variant="title">
            Chose Content Type For This Section
          </Typography>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={5}>
          <Animate children={RenderAddInstructorButton} />
        </FlexboxGrid.Item>
      </FlexboxGrid>
      {Component}
      <FlexboxGrid justify="end">
        <ButtonToolbar>
          <Button appearance="default">Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="link">Link</Button>
          <Button appearance="subtle">Subtle</Button>
          <Button appearance="ghost" onClick={save}>
            Save
          </Button>
        </ButtonToolbar>
      </FlexboxGrid>
    </SectionContentWrapper>
  );
});

export default function SectionContent() {
  const navigate = useNavigate();

  return (
    <>
      <Animate children={SectionContentContainer} />
      <FloatingButton title="Done" onClick={() => navigate("")} />
    </>
  );
}

const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  /* margin-top: 64px; */
  gap: 24px;
`;

const ButtonWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
`;
