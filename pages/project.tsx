import styled, { keyframes } from "styled-components";
import { ContentBox } from "@/components/common/commonStyle";
import Slide from "@/components/project/Slide";

export default function Project() {
  return (
    <ProjectWrap>
      <ContentBox>
        <ProjectContent>
          <Slide />
        </ProjectContent>
      </ContentBox>
    </ProjectWrap>
  );
}

const backgroundAnimate = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

const ProjectWrap = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #000000, #34144b, #17195b, #154a7c);
  background-size: 400% 400%;
  animation: ${backgroundAnimate} 20s ease infinite;
`;

const ProjectContent = styled.div`
  height: 100%;
  width: 100%;
`;
