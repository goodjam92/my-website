import styled from "styled-components";
import { WHICH_BEACH_SEARCH } from "@/hooks/ProjectImages";
import { WBS_PROJECT_TEXT } from "@/hooks/TextConstant";
import SlickSlider from "./SlickSlider";
import SlideRightContent from "./SlideRightContent";
import SlideLeftContent from "./SlideLeftContent";

interface SlideProps {
  visible: boolean;
}

export default function Slide({ visible }: SlideProps) {
  return (
    <SlideArea>
      <SlideContent>
        <SlickSlider>
          <SlideList>
            <SlideContentWrap>
              <SlideLeftContent
                projectInfo={WBS_PROJECT_TEXT}
                visible={visible}
              />
              <SlideRightContent
                projectImages={WHICH_BEACH_SEARCH}
                visible={visible}
              />
            </SlideContentWrap>
          </SlideList>
          <SlideList>
            <SlideContentWrap>
              <SlideLeftContent
                projectInfo={WBS_PROJECT_TEXT}
                visible={visible}
              />
              <SlideRightContent projectImages={[]} visible={visible} />
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
