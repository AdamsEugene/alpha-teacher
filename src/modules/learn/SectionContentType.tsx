/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { RadioTile, RadioTileGroup } from "rsuite";
import { Icon } from "@rsuite/icons";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiFillAudio, AiFillFileText } from "react-icons/ai";
import Typography from "../../_shared/components/Typography";
import FloatingButton from "../../_shared/components/FloatingButton";
import Animate from "../../_shared/components/Animate";
import { SectionContentType } from "./@types";

const SectionContentTypeContainer = React.forwardRef((props: any, ref) => {
  const { setContentType, contentType, ...others } = props;
  const _setContentType = setContentType as React.Dispatch<
    React.SetStateAction<SectionContentType | undefined>
  >;
  const _contentType = contentType as SectionContentType | undefined;
  const onChange = (value: string | number, _: unknown) => {
    _setContentType(value as SectionContentType);
  };

  console.log(contentType);

  return (
    <SectionContentTypeWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Typography $variant="title">
        Chose Content Type For This Section
      </Typography>
      <RadioTileGroup
        defaultValue={_contentType || "text"}
        aria-label="Visibility Level"
        inline
        onChange={onChange}
        defaultChecked
      >
        <RadioTile label="Video Content" value="video">
          <Icon style={{ fontSize: "12rem" }} as={TfiVideoClapper} />
        </RadioTile>
        <RadioTile label="Audio Content" value="audio">
          <Icon style={{ fontSize: "12rem" }} as={AiFillAudio} />
        </RadioTile>
        <RadioTile label="Text Content" value="text">
          <Icon style={{ fontSize: "12rem" }} as={AiFillFileText} />
        </RadioTile>
      </RadioTileGroup>

      {/* <ButtonToolbar>
        <Button appearance="default">Default</Button>
        <Button appearance="primary">Primary</Button>
        <Button appearance="link">Link</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="ghost" onClick={save}>
          Save
        </Button>
      </ButtonToolbar> */}
    </SectionContentTypeWrapper>
  );
});

export default function SectionContentType() {
  const [contentType, setContentType] = React.useState<SectionContentType>();
  const navigate = useNavigate();

  const location =
    contentType === "audio"
      ? "audio"
      : contentType === "video"
      ? "video"
      : "text";

  return (
    <>
      <Animate
        children={SectionContentTypeContainer}
        others={{ setContentType, contentType }}
      />
      <Animate
        children={FloatingButton}
        others={{ title: "Proceed", onClick: () => navigate(location) }}
      />
    </>
  );
}

const SectionContentTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 64px;
  gap: 24px;
`;
