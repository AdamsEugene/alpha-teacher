/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { styled } from "styled-components";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  Input,
  Panel,
  RadioTile,
  RadioTileGroup,
  TagInput,
} from "rsuite";
import { Icon } from "@rsuite/icons";
import ImageIcon from "@rsuite/icons/Image";
import { GiDiamondHard } from "react-icons/gi";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";

import Card from "../../../_shared/components/card/Card";
import AvatarUploader from "../../../_shared/components/AvatarUploader";

const CourseInfoBasic = React.forwardRef((props, ref) => {
  const save = () => {
    console.log();
  };

  return (
    <CourseInfoBasicWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Card
        children={
          <CardContent>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={24}>
                <Panel header={<h2>Basic Info</h2>}>
                  <Form fluid>
                    <Form.Group>
                      <FlexboxGrid justify="center">
                        <AvatarUploader Icon={ImageIcon} />
                      </FlexboxGrid>
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Course Title</Form.ControlLabel>
                      <Form.Control
                        name="name"
                        type="text"
                        // onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Course Description</Form.ControlLabel>
                      <Input
                        as="textarea"
                        rows={5}
                        placeholder="Textarea"
                        name="researchInterests"
                        // onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Skill To Gain</Form.ControlLabel>
                      <TagInput
                        block
                        trigger={["Enter", "Comma"]}
                        placeholder="Enter,  Comma"
                        // style={{ width: 300 }}
                        menuStyle={{ width: 300 }}
                        onCreate={(value, item) => {
                          console.log(value, item);
                        }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Level Of Difficulty</Form.ControlLabel>
                      <RadioTileGroup
                        // defaultValue="beginner"
                        aria-label="Visibility Level"
                        inline
                      >
                        <RadioTile
                          icon={<Icon as={BiHappyAlt} />}
                          label="Beginner"
                          value="beginner"
                        >
                          just starting to learn a skill or take part in an
                          activity.
                        </RadioTile>
                        <RadioTile
                          icon={<Icon as={MdOutlineAirlineSeatReclineNormal} />}
                          label="Intermediate"
                          value="intermediate"
                        >
                          coming between two things in time, place, character,
                          etc.
                        </RadioTile>

                        <RadioTile
                          icon={<Icon as={GiDiamondHard} />}
                          label="Advance"
                          value="advance"
                        >
                          move forward in a purposeful way.
                        </RadioTile>
                      </RadioTileGroup>
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
                    <Button appearance="ghost" onClick={save}>
                      Save
                    </Button>
                  </ButtonToolbar>
                </FlexboxGrid>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </CardContent>
        }
      />
    </CourseInfoBasicWrapper>
  );
});

export default CourseInfoBasic;

const CourseInfoBasicWrapper = styled.div`
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
