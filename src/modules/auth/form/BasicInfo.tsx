import React from "react";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  InputPicker,
  Panel,
  Radio,
  RadioGroup,
} from "rsuite";
import { styled } from "styled-components";
import Card from "../../../_shared/components/card/Card";
import { StyledDrawer } from "../../../_shared/components/StyledDrawer";
import AvatarUploader from "../../../_shared/components/AvatarUploader";

const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

interface Props {
  setCurrent: (n: number) => void;
}

const BasicInfo = React.forwardRef<unknown, Props>((props, ref) => {
  const { setCurrent, ...rest } = props;
  const [show, setShow] = React.useState(false);

  return (
    <CardWrapper
      {...rest}
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
                        <AvatarUploader />
                      </FlexboxGrid>
                    </Form.Group>
                    <Form.Group>
                      <FlexboxGrid justify="space-between">
                        <FlexboxGrid.Item colspan={6}>
                          <Form.Group>
                            <Form.ControlLabel>Title</Form.ControlLabel>
                            <InputPicker placement="autoVertical" data={data} />
                          </Form.Group>
                        </FlexboxGrid.Item>
                        <FlexboxGrid.Item colspan={17}>
                          <Form.Group>
                            <Form.ControlLabel>Full Name</Form.ControlLabel>
                            <Form.Control name="name" />
                          </Form.Group>
                        </FlexboxGrid.Item>
                      </FlexboxGrid>
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>
                        Username or email address
                      </Form.ControlLabel>
                      <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Password</Form.ControlLabel>
                      <Form.Control
                        name="password"
                        type="password"
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Postal/Zip Code</Form.ControlLabel>
                      <Form.Control name="postal" type="text" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Gender</Form.ControlLabel>
                      <RadioGroup name="radioList" inline>
                        <Radio value="A">Item A</Radio>
                        <Radio value="B">Item B</Radio>
                        <Radio value="C">Item C</Radio>
                        <Radio value="D">Item D</Radio>
                      </RadioGroup>
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button
                          appearance="primary"
                          onClick={() => setCurrent(1)}
                        >
                          Next
                        </Button>
                      </ButtonToolbar>
                    </Form.Group>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
            <StyledDrawer open={show} setOpen={setShow} />
          </CardContent>
        }
      />
    </CardWrapper>
  );
});

const CardWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 40rem;
  max-height: calc(90vh);
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px 36px 16px;
`;

export default BasicInfo;
