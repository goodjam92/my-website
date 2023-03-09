import styled from "styled-components";
import SlickSlider from "./SlickSlider";

export default function Slide() {
  return (
    <SlideArea>
      <SlideContent>
        <SlickSlider>
          <SlideList>
            <SlideContentWrap>
              <SlideLeftContent />
              <SlideRightContent />
            </SlideContentWrap>
          </SlideList>
          <SlideList>
            <SlideContentWrap>
              <SlideLeftContent />
              <SlideRightContent />
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
  z-index: 100;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SlideList = styled.ul`
  height: 60rem;
  list-style: none;
  padding: 0;
`;

const SlideContentWrap = styled.li`
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

const SlideRightContent = styled.div`
  width: 40%;
  height: 100%;
  background-color: white;
`;
