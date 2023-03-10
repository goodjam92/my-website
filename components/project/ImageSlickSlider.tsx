import { Fragment } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function ImageSlickSlider(props: any) {
  const { children } = props;

  const setting = {
    dots: false,
    speed: 800,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextButton>
        <ButtonIcon src="/assets/image/right-arrow.png" />
      </NextButton>
    ),
    prevArrow: (
      <PrevButton>
        <ButtonIcon src="/assets/image/left-arrow.png" />
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
  max-width: 34rem;
  height: 60rem;
  overflow: hidden;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-list {
    height: 100%;
    object-fit: fill;
    display: flex;
    align-items: center;
  }
  .slick-track {
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
`;

const NextButton = styled.div`
  height: 4rem;
  width: 4rem;
  position: absolute;
  right: -1.2rem;
  top: 50%;
  z-index: 100;
  text-align: right;
  line-height: 2rem;
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
  left: -1.2rem;
  top: 50%;
  z-index: 50;
  text-align: left;
  line-height: 2rem;
`;
