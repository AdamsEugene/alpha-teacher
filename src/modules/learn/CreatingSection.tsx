/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button, ButtonToolbar, FlexboxGrid, Form, Input, Panel } from "rsuite";

import Animate from "../../_shared/components/Animate";
import Typography from "../../_shared/components/Typography";
import FloatingButton from "../../_shared/components/FloatingButton";
import Card from "../../_shared/components/card/Card";

const CreatingSectionContainer = React.forwardRef((props, ref) => {
  const save = () => {
    console.log();
  };
  return (
    <CreatingSectionWrapper
      {...props}
      ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <Typography $variant="title">
        Chose Content Type For This Section
      </Typography>
      <Card
        children={
          <CardContent>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={24}>
                <Panel header={<h2>Basic Info</h2>}>
                  <Form fluid>
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
                        rows={15}
                        placeholder="Textarea"
                        name="researchInterests"
                        // onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group></Form.Group>
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
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </CardContent>
        }
      />
    </CreatingSectionWrapper>
  );
});

export default function CreatingSection() {
  const navigate = useNavigate();

  return (
    <>
      <Animate children={CreatingSectionContainer} />
      <Animate
        children={FloatingButton}
        others={{ title: "Proceed", onClick: () => navigate("type") }}
      />
    </>
  );
}

const CreatingSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  /* margin-top: 64px; */
  gap: 24px;
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px 16px 16px;
  margin-bottom: 32px;
`;
