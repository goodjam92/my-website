import styled from "styled-components";
import SlickSlider from "./SlickSlider";
import SlideRightContent from "./SlideRightContent";
import { WHICH_BEACH_SEARCH } from "@/hooks/ProjectImages";

export default function Slide() {
  return (
    <SlideArea>
      <SlideContent>
        <SlickSlider>
          <SlideList>
            <SlideContentWrap>
              <SlideLeftContent />
              <SlideRightContent projectImages={WHICH_BEACH_SEARCH} />
            </SlideContentWrap>
          </SlideList>
          <SlideList>
            <SlideContentWrap>
              <SlideLeftContent />
              <SlideRightContent projectImages={[]} />
            </SlideContentWrap>
          </SlideList>
        </SlickSlider>
      </SlideContent>
    </SlideArea>
  );
}

const SlideArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  .slick-slide {
    display: inline-block;
    margin: 0 auto;
  }
`;

const SlideContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlideList = styled.div`
  height: 60rem;
  padding: 0;
`;

const SlideContentWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
  gap: 4rem;
`;

const SlideLeftContent = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
`;
