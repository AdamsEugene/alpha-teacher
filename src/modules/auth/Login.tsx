import React from "react";
import { styled } from "styled-components";
import Card from "../../_shared/components/card/Card";
import { FlexboxGrid, Panel, Form, ButtonToolbar, Button } from "rsuite";
import Animate from "../../_shared/components/Animate";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const LoginComponent = React.forwardRef((props, ref) => {
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
                  <Panel header={<h1>Login</h1>}>
                    <Form fluid>
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
                        <ButtonToolbar>
                          <Button
                            appearance="primary"
                            onClick={() => navigate("/learn")}
                          >
                            Sign in
                          </Button>
                          <Button
                            appearance="link"
                            onClick={() => navigate("/forgot_password")}
                          >
                            Forgot password?
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
      <Animate children={LoginComponent} />
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
