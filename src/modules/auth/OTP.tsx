/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React from "react";
import { styled } from "styled-components";
import { FlexboxGrid, Panel, Form, ButtonToolbar, Button } from "rsuite";
import OtpInput from "react18-input-otp";
import Card from "../../_shared/components/card/Card";
import Animate from "../../_shared/components/Animate";
import { useNavigate } from "react-router-dom";

export default function OTP() {
  const [otp, setOtp] = React.useState("");
  const OTP_LENGTH = 6;
  const navigate = useNavigate();

  const handleChange = (enteredOtp: any) => {
    setOtp(enteredOtp);
  };

  const submitSignup = () => {
    console.log(otp);
  };

  const OtpComponent = React.forwardRef((props, ref) => {
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
                  <Panel header={<h1>Signup / OTP</h1>}>
                    <Form fluid>
                      <Form.Group>
                        <OTPInputWrapper>
                          <Form.ControlLabel>Password</Form.ControlLabel>
                          <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={OTP_LENGTH}
                            separator={<Separate>-</Separate>}
                            separateAfter={1}
                            autoComplete="one-time-code"
                            containerStyle="containerStyle"
                            inputStyle="inputStyle"
                            // isDisabled={!showOpt}
                            shouldAutoFocus
                            onSubmit={submitSignup}
                            isInputNum
                            // isInputSecure
                          />
                        </OTPInputWrapper>
                      </Form.Group>
                      <Form.Group>
                        <ButtonToolbar>
                          <Button
                            appearance="primary"
                            onClick={() => navigate("/signup/form")}
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
      <Animate children={OtpComponent} />
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

export const OTPInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.5s ease, opacity 0.3s ease, visibility 0.3s ease;

  .containerStyle {
    /* border: 1px ${({ theme }) => theme.colors.border.primary} solid; */
    width: 100%;

    .inputStyle {
      background-color: ${({ theme }) => theme.colors.background.sidebar};
      color: ${({ theme }) => theme.colors.text.primary};
      border: 1px ${({ theme }) => theme.colors.border.primary} solid;
      border-radius: 3px;
      height: 50px;
      width: 100% !important;
      outline-color: transparent;
      font-size: 20px;
      margin-right: 8px;

      :focus,
      :active,
      :focus-visible {
        border-color: ${({ theme }) => theme.colors.background.main};
        outline-color: ${({ theme }) => theme.colors.background.main};
        outline: transparent;
      }
    }
  }
`;

export const Separate = styled.span`
  font-size: 20px;
  font-weight: 900;
  padding: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-left: -8px;
`;
