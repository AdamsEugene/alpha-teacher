import { Avatar, FlexboxGrid, Rate } from "rsuite";
import { styled } from "styled-components";
import Typography from "../../../_shared/components/Typography";

export default function Review() {
  return (
    <ReviewWrapper>
      <FlexboxGrid align="middle">
        <FlexboxGrid.Item colspan={10}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/23637144"
            alt="@Sleaf"
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={14}>
          <TextArea>
            <Span1>&#8220;</Span1>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              dignissimos veritatis obcaecati aut ab velit reprehenderit alias
              culpa dolores laudantium, maiores placeat corporis veniam atque
              deserunt enim sapiente voluptatibus accusamus.
            </Typography>
            <Span2>&#8221;</Span2>
            <Rate defaultValue={2} size="sm" />
          </TextArea>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </ReviewWrapper>
  );
}

const ReviewWrapper = styled.div`
  width: 100%;
  margin: 0;
  height: 320px;
  top: 0;

  .rs-avatar,
  .rs-avatar > .rs-avatar-image {
    width: 100%;
    height: 320px;
  }
`;

const Span1 = styled.span`
  left: 10px;
  top: 0;
`;

const Span2 = styled.span`
  right: 10px;
  bottom: 0;
`;

const TextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
  padding: 16px 32px;
  height: calc(300px - 32px);
  width: 100%;

  span {
    position: absolute;
    font-size: 64px;
    margin: 0;
    padding: 0;
    line-height: 100px;
  }
`;
