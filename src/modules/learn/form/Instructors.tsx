/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from "react";
import { styled } from "styled-components";
import Card from "../../../_shared/components/card/Card";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  IconButton,
  Input,
  InputPicker,
  Panel,
  PanelGroup,
  Tag,
  TagGroup,
} from "rsuite";
import AddOutlineIcon from "@rsuite/icons/AddOutline";

import AvatarUploader from "../../../_shared/components/AvatarUploader";
import { StyledDrawer } from "../../../_shared/components/StyledDrawer";
import SocialMedia from "./SocialMedia";
import {
  InstructorData,
  MEDIA_COLORS,
  SocialMediaFormData,
  socialUrls,
} from "../@types";

const data = ["Lloyd", "Alice", "Julia", "Albert"].map((item) => ({
  label: item,
  value: item,
}));

// const Textarea = React.forwardRef((props, ref) => (
//   <Input
//     {...props}
//     as="textarea"
//     ref={ref as React.RefObject<HTMLTextAreaElement> | null | undefined}
//   />
// ));

const Instructors = React.forwardRef((props: any, ref) => {
  const { setInstructors, ...others } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [mediaFormData, setMediaFormData] =
    useState<Partial<SocialMediaFormData>>();
  const [mediaData, setMediaData] = useState<Partial<InstructorData>>();
  const [instructor, setInstructor] = useState<Partial<InstructorData>>();

  const _setInstructors = setInstructors as React.Dispatch<
    React.SetStateAction<Partial<InstructorData>[] | undefined>
  >;

  // console.log(props);

  const getSocialMedialLinks = () => {
    setMediaData(mediaFormData);
  };

  const getInstructor = () => {
    if (instructor)
      _setInstructors((p) => (p ? [...p, instructor] : [instructor]));
    setInstructor(undefined);
    setMediaFormData(undefined);
    setMediaData(undefined);
  };

  const handleInputChange = (value: string, event: any) => {
    const key = event.target.name as keyof InstructorData;
    setInstructor((p) => (p ? { ...p, [key]: value } : { [key]: value }));
    if (socialUrls.includes(key))
      setMediaFormData((p) => (p ? { ...p, [key]: value } : { [key]: value }));
  };

  return (
    <InstructorsWrapper
      {...others}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Card
        children={
          <CardContent>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={24}>
                <Panel header={<h2>Personal Info</h2>}>
                  <Form fluid>
                    <Form.Group>
                      <FlexboxGrid justify="center">
                        <AvatarUploader />
                      </FlexboxGrid>
                    </Form.Group>
                    <Form.Group>
                      <FlexboxGrid justify="space-between">
                        <FlexboxGrid.Item colspan={6}>
                          <Form.Group>
                            <Form.ControlLabel>Title</Form.ControlLabel>
                            <InputPicker placement="rightStart" data={data} />
                          </Form.Group>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={18}>
                          <Form.Group>
                            <Form.ControlLabel>Full Name</Form.ControlLabel>
                            <Form.Control
                              name="name"
                              type="text"
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Phone Number</Form.ControlLabel>
                      <Form.Control
                        name="phoneNumber"
                        type="number"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <PanelGroupWrapper>
                        <PanelGroup accordion>
                          <Panel header="Biography" eventKey={1} id="panel1">
                            <Input
                              as="textarea"
                              rows={5}
                              placeholder="Textarea"
                              name="biography"
                              onChange={handleInputChange}
                            />
                          </Panel>
                          <Panel header="Achievements" eventKey={2} id="panel2">
                            <Input
                              as="textarea"
                              rows={5}
                              placeholder="Textarea"
                              name="achievements"
                              onChange={handleInputChange}
                            />
                          </Panel>
                          <Panel
                            header="Research Interests"
                            eventKey={3}
                            id="panel3"
                          >
                            <Input
                              as="textarea"
                              rows={5}
                              placeholder="Textarea"
                              name="researchInterests"
                              onChange={handleInputChange}
                            />
                          </Panel>
                        </PanelGroup>
                      </PanelGroupWrapper>
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>
                        Social Medial Handlers
                      </Form.ControlLabel>
                      <TagGroup>
                        {mediaData &&
                          Object.keys(mediaData || {}).map((link) => (
                            <TagWrapper
                              size="lg"
                              key={link}
                              closable
                              $bg={
                                MEDIA_COLORS[link as keyof SocialMediaFormData]
                              }
                            >
                              <a
                                target="_blank"
                                href={
                                  mediaData[link as keyof SocialMediaFormData]
                                }
                                rel="noreferrer"
                              >
                                {link} :{" "}
                                {mediaData[link as keyof SocialMediaFormData]}
                              </a>
                            </TagWrapper>
                          ))}
                        <AddButton>
                          <IconButton
                            size="sm"
                            icon={<AddOutlineIcon />}
                            onClick={() => setOpenDrawer(true)}
                            appearance="primary"
                          >
                            Add
                          </IconButton>
                        </AddButton>
                      </TagGroup>
                    </Form.Group>
                    <Form.Group></Form.Group>
                  </Form>
                </Panel>
                <FlexboxGrid justify="end">
                  <ButtonToolbar>
                    <Button appearance="default">Default</Button>
                    <Button appearance="primary">Primary</Button>
                    <Button appearance="link">Link</Button>
                    <Button appearance="subtle">Subtle</Button>
                    <Button appearance="ghost" onClick={getInstructor}>
                      Save
                    </Button>
                  </ButtonToolbar>
                </FlexboxGrid>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </CardContent>
        }
      />
      <StyledDrawer
        title="Fill Just What You Want"
        open={openDrawer}
        setOpen={setOpenDrawer}
        children={<SocialMedia onChange={handleInputChange} />}
        onConfirm={getSocialMedialLinks}
      />
    </InstructorsWrapper>
  );
});

export default Instructors;

const InstructorsWrapper = styled.div`
  position: absolute;
  top: 140px;
  width: 100%;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px 36px 16px;
  margin-bottom: 32px;
`;

const PanelGroupWrapper = styled.div`
  .rs-panel-body,
  .rs-panel-header {
    padding-left: 0;
    padding-right: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 14px;
    border: none;
    outline: none;
  }
`;

const AddButton = styled(Tag)`
  margin-left: 10px;
  .rs-tag-md {
    font-size: 12px;
  }
  padding: 0;
`;

const TagWrapper = styled(Tag)<{ $bg: string }>`
  background: ${({ $bg }) => $bg};

  a {
    color: #fff;
  }
`;
