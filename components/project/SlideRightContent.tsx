/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import ImageSlickSlider from "./ImageSlickSlider";

interface SlideRightContentProps {
  projectImages: Array<string>;
}

export default function SlideRightContent({
  projectImages,
}: SlideRightContentProps) {
  return (
    <RightContentWrap>
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

const RightContentWrap = styled.div`
  width: 40%;
  height: 100%;
  .slick-slide {
    margin: 0 auto;
  }
`;

const RightSlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const ImageSlideContainer = styled.div`
  height: 100%;
  padding: 3.2rem;
  box-sizing: border-box;
  text-align: center;
`;

const ImageItem = styled.img`
  width: 100%;
  height: auto;
  margin: 0;
  border: 0.1rem solid;
  border-color: #797979;
  border-radius: 0.2rem;
  box-shadow: 8px 8px 4px #828282;
`;
