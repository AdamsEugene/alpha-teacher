import { Avatar, FlexboxGrid } from "rsuite";
import { css, styled } from "styled-components";
import Card from "./Card";
import Typography from "../Typography";

interface Props {
  $width?: string;
  onClick?: () => void;
}

export default function CourseCard(props: Props) {
  const { $width, onClick } = props;
  return (
    <CourseCardWrapper $width={$width} onClick={onClick}>
      <Center>
        <RightPart $width={$width}>
          <Card
            children={
              <FlexboxGrid justify="center">
                <Content>
                  <ImageWrapper>
                    <SmallImage $first $width={$width}>
                      <Avatar
                        size="sm"
                        circle
                        src="https://avatars.githubusercontent.com/u/8225666"
                        alt="@SevenOutman"
                      />
                    </SmallImage>
                    <SmallImage $width={$width}>
                      <Avatar
                        size="sm"
                        circle
                        src="https://avatars.githubusercontent.com/u/12592949"
                        alt="@SevenOutman"
                      />
                    </SmallImage>
                    <Avatar
                      size="lg"
                      //   circle
                      src="https://avatars.githubusercontent.com/u/12592949"
                      alt="@SevenOutman"
                    />
                  </ImageWrapper>
                  <TextWrapper>
                    <Typography $variant="title">
                      Learn TypeScript In 5 Hours
                    </Typography>
                    <SmallImageBottom>
                      <Avatar
                        size="sm"
                        circle
                        src="https://avatars.githubusercontent.com/u/8225666"
                        alt="@SevenOutman"
                      />
                    </SmallImageBottom>
                  </TextWrapper>
                </Content>
              </FlexboxGrid>
            }
          />
        </RightPart>
      </Center>
    </CourseCardWrapper>
  );
}

const CourseCardWrapper = styled.div<{ $width?: string }>`
  gap: 8px;
  max-height: 400px;
  width: ${({ $width }) => ($width ? $width : "")};
  cursor: pointer;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;

  .rs-avatar-lg {
    height: 140px;
    line-height: 140px;
    width: 170px;
    transition: all 0.3s ease-in-out;
  }
  .rs-avatar-lg > .rs-avatar-image {
    height: 140px;
    line-height: 140px;
    width: 170px;
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
`;

const Icon = css`
  .rs-avatar-sm {
    height: 30px;
    line-height: 30px;
    width: 30px;
    transition: all 0.3s ease-in-out;
  }
  .rs-avatar-sm > .rs-avatar-image {
    height: 30px;
    line-height: 30px;
    width: 30px;
    transition: all 0.3s ease-in-out;
  }
`;

const IconHover = css`
  &.rs-avatar-sm {
    height: 65px;
    line-height: 65px;
    width: 65px;
    transition: all 0.3s ease-in-out;
  }
  &.rs-avatar-sm > .rs-avatar-image {
    height: 65px;
    line-height: 65px;
    width: 65px;
    transition: all 0.3s ease-in-out;
  }
  z-index: 2;
  transition: all 0.3s ease-in-out;
`;

const SmallImage = styled.div<{ $first?: boolean; $width?: string }>`
  position: absolute;
  top: ${({ $first }) => ($first ? "0px" : "50px")};
  right: ${({ $width }) => ($width ? "-37px" : "-40px")};
  z-index: 1;

  ${Icon}

  :hover {
    ${IconHover}
  }
  transition: all 0.3s ease-in-out;
`;

const SmallImageBottom = styled.div`
  position: relative;
  z-index: 1;
  bottom: 0;

  ${Icon}

  :hover {
    ${IconHover}
  }
  transition: all 0.3s ease-in-out;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: all 0.3s ease-in-out;
`;

const RightPart = styled.div<{ $width?: string }>`
  width: 95%;
  height: 390px;
  &:hover {
    width: 100%;
    height: 410px;
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.57);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.57);
    border-radius: 16px;
    overflow: hidden;
    ${SmallImageBottom} {
      bottom: -15px;
      transition: all 0.3s ease-in-out;
    }
    ${TextWrapper} {
      width: calc(100% - 15px);
      transition: all 0.3s ease-in-out;
    }
    ${SmallImage} {
      right: ${({ $width }) => ($width ? "-47px" : "-50px")};
      transition: all 0.3s ease-in-out;
    }
    ${ImageWrapper} {
      .rs-avatar-lg {
        height: 130px;
        line-height: 130px;
        width: 160px;
        transition: all 0.3s ease-in-out;
      }
      .rs-avatar-lg > .rs-avatar-image {
        height: 130px;
        line-height: 130px;
        width: 160px;
        transition: all 0.3s ease-in-out;
      }
      transition: all 0.3s ease-in-out;
    }
  }
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  text-align: center;
  backface-visibility: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
