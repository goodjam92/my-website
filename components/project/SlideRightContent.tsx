/* eslint-disable @next/next/no-img-element */
import styled, { css } from "styled-components";
import { VisibleProps } from "@/model/VisibleProps";
import { fadeInFromRight, fadeOut } from "../animation/animation";
import ImageSlickSlider from "./ImageSlickSlider";
import { media } from "@/styles/media";

interface SlideRightContentProps {
  projectImages: Array<string>;
  visible: boolean;
}

export default function SlideRightContent({
  projectImages,
  visible,
}: SlideRightContentProps) {
  return (
    <RightContentWrap visible={visible}>
      <RightSlideContent>
        <ImageSlickSlider>
          {projectImages.map((item) => (
            <ImageSlideContainer key={item}>
              <ImageItem src={item} alt="image" />
            </ImageSlideContainer>
          ))}
        </ImageSlickSlider>
      </RightSlideContent>
    </RightContentWrap>
  );
}

const RightContentWrap = styled.div<VisibleProps>`
  width: 40%;
  height: 100%;
  text-align: center;
  .slick-slide {
    margin: 0 auto;
  }
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeInFromRight} 1s linear forwards;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
  ${media.medium`
  width: 290px;
  `}
  ${media.small`
  width: 100%;
  `}
`;

const RightSlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageSlideContainer = styled.div`
  padding: 2.4rem;
  box-sizing: border-box;
  ${media.medium`
    padding:0.4rem;
`}
  ${media.small`
  padding: 0;
`}
`;

const ImageItem = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0;
  border: 0.1rem solid;
  border-color: #797979;
  border-radius: 0.2rem;
  box-shadow: 0.4rem 0.4rem 0.4rem #828282;
  ${media.xSmall`
    height: 300px;
    width: 330px;
`}
`;
