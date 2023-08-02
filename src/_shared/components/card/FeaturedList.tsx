/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { List } from "rsuite";
import { styled } from "styled-components";
import Typography from "../Typography";

export default function FeaturedList() {
  return (
    <ListWrapper>
      <List hover>
        <List.Item>
          <TitlePart>
            <h6>Course Title</h6>
            <h6>6:87</h6>
          </TitlePart>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
        </List.Item>
        <List.Item>
          <TitlePart>
            <h6>Course Title</h6>
            <h6>6:87</h6>
          </TitlePart>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
        </List.Item>
        <List.Item>
          <TitlePart>
            <h6>Course Title</h6>
            <h6>6:87</h6>
          </TitlePart>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
        </List.Item>
        <List.Item>
          <TitlePart>
            <h6>Course Title</h6>
            <h6>6:87</h6>
          </TitlePart>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
        </List.Item>
        <List.Item>
          <TitlePart>
            <h6>Course Title</h6>
            <h6>6:87</h6>
          </TitlePart>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
        </List.Item>
        <List.Item>
          <TitlePart>
            <h6>Course Title</h6>
            <h6>6:87</h6>
          </TitlePart>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
        </List.Item>
        <List.Item>
          <TitlePart>
            <h6>Course Title</h6>
            <h6>6:87</h6>
          </TitlePart>
          <Typography>Lorem ipsum dolor sit amet consectetur</Typography>
        </List.Item>
      </List>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  .rs-list-item,
  .rs-list {
    border-radius: 12px !important;
    padding: 16px;
  }
  .rs-list-hover .rs-list-item:hover {
    background: rgba(52, 194, 255, 0.371) !important;
  }
`;

const TitlePart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
