import { WBS_PROJECT_TEXT } from "@/hooks/TextConstant";
import styled from "styled-components";
import { fadeIn } from "../animation/animation";

export default function SlideLeftContent() {
  return (
    <LeftContentWrap>
      <RightSlideContent>
        <ProjectTitle>{WBS_PROJECT_TEXT.TITLE}</ProjectTitle>
      </RightSlideContent>
    </LeftContentWrap>
  );
}

const LeftContentWrap = styled.div`
  width: 50%;
  height: 100%;
  padding: 3.2rem 3.2rem 1.2rem 3.2rem;
  box-sizing: border-box;
`;

const RightSlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 2.8rem;
  box-sizing: border-box;
  border-radius: 2rem;
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(2rem);
  box-shadow: 0.4rem 0.4rem 0.8rem 0.4rem rgba(255, 255, 255, 0.3) inset;
  color: white;
`;

const ProjectTitle = styled.h2`
  font-size: 2.8rem;
  animation: ${fadeIn} 1s ease;
`;
