import { media } from "@/styles/media";
import { Fragment } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function SlickSlider(props: any) {
  const { children } = props;

  const setting = {
    dots: false,
    speed: 800,
    draggable: false,
    infinite: false,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextButton>
        <ButtonIcon src="/assets/image/right-arrow.png" alt="nextButton" />
      </NextButton>
    ),
    prevArrow: (
      <PrevButton>
        <ButtonIcon src="/assets/image/left-arrow.png" alt="prevButton" />
      </PrevButton>
    ),
  };

  return (
    <Fragment>
      <StyledSlider {...setting}>{children}</StyledSlider>
    </Fragment>
  );
}

const StyledSlider = styled(Slider)`
  width: 98%;
  min-width: 110rem;
  overflow: hidden;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  ${media.large`
  min-width: 99.6rem;
`}
  ${media.medium`
  min-width: 80rem;
`}
  ${media.small`
  height: 800px;
`}
`;

const NextButton = styled.div`
  height: 4rem;
  width: 4rem;
  position: absolute;
  top: 45%;
  right: -0.4rem;
  z-index: 50;
  text-align: right;
  line-height: 30px;
  transition: all 0.5s;
  ${media.large`
  right: 4rem;
  `}
  ${media.medium`
  right: 5.2rem;
`}
  ${media.small`
  right: 12%;
`}
`;

const ButtonIcon = styled.img`
  height: 100%;
  width: 100%;
  margin: 0;
  color: white;
  filter: opacity(0.5) drop-shadow(0 0 0 #ffffff);
  cursor: pointer;
`;

const PrevButton = styled.div`
  height: 4rem;
  width: 4rem;
  position: absolute;
  left: -0.4rem;
  top: 45%;
  z-index: 50;
  text-align: left;
  line-height: 30px;
  transition: all 0.5s;
  ${media.large`
    left: 4rem;
  `}
  ${media.medium`
  left: 5.2rem;
`}
  ${media.small`
  left: 12%;
`}
`;
