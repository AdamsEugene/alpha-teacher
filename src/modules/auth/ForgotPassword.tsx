import { styled } from "styled-components";
import Card from "../../_shared/components/card/Card";
import { FlexboxGrid, Panel, Form, ButtonToolbar, Button } from "rsuite";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <LoginWrapper>
      <CardWrapper>
        <Card
          children={
            <CardContent>
              <FlexboxGrid>
                <FlexboxGrid.Item colspan={24}>
                  <Panel header={<h1>Forgot Password</h1>}>
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
                            onClick={() => navigate("/")}
                          >
                            Sign in
                          </Button>
                          <Button appearance="link">Forgot password?</Button>
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
