import React from "react";
import { styled } from "styled-components";
import Card from "../../../_shared/components/card/Card";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  InputPicker,
  Panel,
  SelectPicker,
} from "rsuite";
import AvatarUploader from "../../../_shared/components/AvatarUploader";

const data = ["Lloyd", "Alice", "Julia", "Albert"].map((item) => ({
  label: item,
  value: item,
}));

const PersonalInfo = React.forwardRef((props, ref) => {
  const save = () => {
    console.log();
  };

  return (
    <PersonalInfoWrapper
      {...props}
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
                            <Form.Control name="name" />
                          </Form.Group>
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Email address</Form.ControlLabel>
                      <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Country</Form.ControlLabel>
                      <SelectPicker
                        label="User"
                        data={data}
                        block
                        placement="auto"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>City</Form.ControlLabel>
                      <SelectPicker
                        label="User"
                        data={data}
                        block
                        placement="auto"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Street Address</Form.ControlLabel>
                      <Form.Control name="name" type="number" />
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
    </PersonalInfoWrapper>
  );
});

export default PersonalInfo;

const PersonalInfoWrapper = styled.div`
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
