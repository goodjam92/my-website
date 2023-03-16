import { media } from "@/styles/media";
import { Fragment } from "react";
import Slider from "react-slick";
import styled from "styled-components";

export default function ImageSlickSlider(props: any) {
  const { children } = props;

  const setting = {
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 2500,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Fragment>
      <StyledSlider {...setting}>{children}</StyledSlider>
    </Fragment>
  );
}

const StyledSlider = styled(Slider)`
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .slick-prev,
  .slick-next {
    opacity: 0;
    display: none;
  }
  .slick-list {
    height: 100%;
    display: flex;
    align-items: center;
    ${media.medium`
    width: 280px;
  `}
    ${media.small`
    width: 400px;
  `}
  }
  .slick-track {
    display: flex;
    align-items: center;
    box-sizing: border-box;
  }
`;
