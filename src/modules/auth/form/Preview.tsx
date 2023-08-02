import React from "react";
import {
  Avatar,
  Button,
  ButtonToolbar,
  FlexboxGrid,
  List,
  Panel,
  Tag,
  TagGroup,
} from "rsuite";
import { styled } from "styled-components";
import Card from "../../../_shared/components/card/Card";
import { StyledDrawer } from "../../../_shared/components/StyledDrawer";
import { useNavigate } from "react-router-dom";

interface Props {
  setCurrent: (n: number) => void;
}

const Preview = React.forwardRef<unknown, Props>((props, ref) => {
  const { setCurrent, ...rest } = props;
  const [show, setShow] = React.useState(false);

  const navigate = useNavigate();

  const signup = () => {
    navigate("/learn");
  };

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
                <Panel header={<h2>Summary</h2>}>
                  <FlexboxGrid justify="center">
                    <Avatar
                      size="lg"
                      circle
                      src="https://avatars.githubusercontent.com/u/12592949"
                      alt="@SevenOutman"
                    />
                  </FlexboxGrid>
                  <List hover>
                    <List.Item>Roses are red</List.Item>
                    <List.Item>Violets are blue</List.Item>
                    <List.Item>Sugar is sweet</List.Item>
                    <List.Item>And so are you</List.Item>
                    <List.Item>Roses are red</List.Item>
                    <List.Item>Violets are blue</List.Item>
                    <List.Item>Sugar is sweet</List.Item>
                    <List.Item>And so are you</List.Item>
                    <List.Item>Roses are red</List.Item>
                    <List.Item>And so are you</List.Item>
                    <List.Item>
                      <TagGroup>
                        <Tag size="md">Medium</Tag>
                        <Tag size="md">Medium</Tag>
                        <Tag size="md">Medium</Tag>
                      </TagGroup>
                    </List.Item>
                    <List.Item>
                      <TagGroup>
                        <Tag size="md">Medium</Tag>
                        <Tag size="md">Medium</Tag>
                        <Tag size="md">Medium</Tag>
                      </TagGroup>
                    </List.Item>
                  </List>
                </Panel>
                <ButtonToolbar>
                  <Button appearance="primary" onClick={signup}>
                    Sign up
                  </Button>
                  <Button appearance="ghost" onClick={() => setCurrent(1)}>
                    Previous
                  </Button>
                </ButtonToolbar>
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

export default Preview;
