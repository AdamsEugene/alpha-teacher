/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Review from "../../modules/learn/preview/Review";
import { styled } from "styled-components";

export default function CustomCarousel() {
  return (
    <Wrapper>
      <Carousel autoPlay className="custom-slider">
        {[1, 2, 3].map((i) => (
          <Review key={i} />
        ))}
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* position: relative; */
  height: 320px;
  width: 100%;
  border-radius: 6px;
  /* overflow: hidden; */
  .custom-slider {
    /* background: ${({ theme }) => theme.colors.background.cards}; */
    height: 320px;
    width: 100%;
    border-radius: 6px;
  }
`;
