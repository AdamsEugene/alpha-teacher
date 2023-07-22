import React from "react";
import {
  Button,
  ButtonToolbar,
  FlexboxGrid,
  Form,
  InputPicker,
  Panel,
  TagPicker,
} from "rsuite";
import { styled } from "styled-components";
import Card from "../../../_shared/components/card/Card";
import { StyledDrawer } from "../../../_shared/components/StyledDrawer";

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

const Selections = React.forwardRef<unknown, Props>((props, ref) => {
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
                <Panel header={<h2>Selection</h2>}>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>User Code</Form.ControlLabel>
                      <Form.Control name="userCode" type="number" />
                    </Form.Group>

                    <Form.Group>
                      <Form.ControlLabel>School</Form.ControlLabel>
                      <InputPicker placement="autoVertical" data={data} block />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Select Classes</Form.ControlLabel>
                      <TagPicker placement="autoVertical" data={data} block />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Select Courses</Form.ControlLabel>
                      <TagPicker placement="autoVertical" data={data} block />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button
                          appearance="primary"
                          onClick={() => setCurrent(2)}
                        >
                          Next
                        </Button>
                        <Button
                          appearance="ghost"
                          onClick={() => setCurrent(0)}
                        >
                          Previous
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
  width: 40rem;
  left: 0;
  max-height: calc(90vh);
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 16px 36px 16px;
`;

export default Selections;
