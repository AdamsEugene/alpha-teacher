import React from "react";
import { styled } from "styled-components";
import { FlexboxGrid, Panel, Form, ButtonToolbar, Button } from "rsuite";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Card from "../../_shared/components/card/Card";
import Animate from "../../_shared/components/Animate";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [phone, setPhone] = React.useState<string>();
  const navigate = useNavigate();

  const sendOTP = () => {
    console.log();
  };

  const SignupComponent = React.forwardRef((props, ref) => {
    return (
      <CardWrapper
        {...props}
        ref={ref as React.LegacyRef<HTMLDivElement> | undefined}
      >
        <Card
          children={
            <CardContent>
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={24}>
                  <Panel header={<h1>Signup</h1>}>
                    <Form fluid>
                      <Form.Group>
                        <Form.ControlLabel>Phone Number</Form.ControlLabel>
                        <PhoneInput
                          country={"gh"}
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                          onKeyDown={(e) => e.key === "Enter" && sendOTP()}
                          placeholder="+233 24 480 5003"
                          autoFormat
                          inputProps={{
                            name: "phone",
                            required: true,
                            autoFocus: true,
                          }}
                          // disabled
                          enableSearch
                          //   onFocus={() => setErr(false)}
                          containerClass="containerClass"
                          inputClass="inputClass"
                          buttonClass="buttonClass"
                          dropdownClass="dropdownClass"
                        />
                      </Form.Group>
                      <Form.Group>
                        <ButtonToolbar>
                          <Button
                            appearance="primary"
                            onClick={() => navigate("otp")}
                          >
                            Sign in
                          </Button>
                        </ButtonToolbar>
                      </Form.Group>
                    </Form>
                  </Panel>
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </CardContent>
          }
        />
      </CardWrapper>
    );
  });

  return (
    <LoginWrapper>
      <Animate children={SignupComponent} />
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const CardWrapper = styled.div`
  width: 40rem;
  /* height: 25rem; */
`;

const CardContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 16px 36px 16px;
`;
