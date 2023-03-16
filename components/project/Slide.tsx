import styled from "styled-components";
import { DENPIC, MY_WEB_SITE, WHICH_BEACH_SEARCH } from "@/hooks/ProjectImages";
import {
  DENPIC_PROJECT_TEXT,
  MY_WEB_PROJECT_TEXT,
  WBS_PROJECT_TEXT,
} from "@/hooks/TextConstant";
import SlickSlider from "./SlickSlider";
import SlideRightContent from "./SlideRightContent";
import SlideLeftContent from "./SlideLeftContent";
import { media } from "@/styles/media";

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
                projectInfo={DENPIC_PROJECT_TEXT}
                visible={visible}
              />
              <SlideRightContent projectImages={DENPIC} visible={visible} />
            </SlideContentWrap>
          </SlideList>
          <SlideList>
            <SlideContentWrap>
              <SlideLeftContent
                projectInfo={MY_WEB_PROJECT_TEXT}
                visible={visible}
              />
              <SlideRightContent
                projectImages={MY_WEB_SITE}
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
              <SlideRightContent
                projectImages={WHICH_BEACH_SEARCH}
                visible={visible}
              />
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
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  gap: 4rem;
  ${media.large`
  gap: 0;
`}
  ${media.small`
  flex-direction:column;
  justify-content: space-between;
  padding: 0;
`}
`;
