import styled, { css } from "styled-components";
import { ProjectProps } from "@/model/ProjectProps";
import { VisibleProps } from "@/model/VisibleProps";
import {
  cliptext,
  fadeIn,
  fadeInFromLeft,
  fadeOut,
  shotSlideDown,
} from "../animation/animation";
import ProjectSkillText from "./ProjectSkillText";
import ProjectFooter from "./ProjectFooter";

interface SlideLeftContentProps {
  projectInfo: ProjectProps;
  visible: boolean;
}

export default function SlideLeftContent({
  projectInfo,
  visible,
}: SlideLeftContentProps) {
  return (
    <LeftContentWrap visible={visible}>
      <RightSlideContent>
        <ProjectTitle visible={visible} delay={0.5}>
          {projectInfo.TITLE}
        </ProjectTitle>
        <ProjectText visible={visible} delay={0.75}>
          ({projectInfo.PERIOD})
        </ProjectText>
        <ProjectText visible={visible} delay={1}>
          {projectInfo.SIMPLE}
        </ProjectText>
        <ProjectDescription>
          {projectInfo.DETAIL.map((text, index) => (
            <DescriptionText visible={visible} delay={index + 1.5} key={text}>
              {text}
            </DescriptionText>
          ))}
          <SkillTextWrap visible={visible}>
            {projectInfo.USE_SKILL.map((skill) => (
              <ProjectSkillText skillText={skill} key={skill} />
            ))}
          </SkillTextWrap>
        </ProjectDescription>
        <ProjectFooter
          github={projectInfo.GITHUB}
          footer={projectInfo.FOOTER}
          visible={visible}
        />
      </RightSlideContent>
    </LeftContentWrap>
  );
}

const LeftContentWrap = styled.div<VisibleProps>`
  width: 50%;
  height: fit-content;
  padding: 3.2rem;
  box-sizing: border-box;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeInFromLeft} 1s linear forwards;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
`;

const RightSlideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3.2rem;
  box-sizing: border-box;
  border-radius: 2rem;
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(2rem);
  box-shadow: 0.4rem 0.4rem 0.8rem 0.4rem rgba(255, 255, 255, 0.3) inset;
  color: white;
  gap: 1.6rem;
`;

const ProjectTitle = styled.h2<VisibleProps>`
  font-size: 2.8rem;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${shotSlideDown} 0.8s linear forwards;
          animation-delay: ${props.delay}s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
`;

const ProjectText = styled.h3<VisibleProps>`
  font-size: 2rem;
  opacity: 0;
  font-weight: 500;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${shotSlideDown} 0.8s linear forwards;
          animation-delay: ${props.delay}s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
`;

const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  gap: 1.4rem;
`;

const DescriptionText = styled.h3<VisibleProps>`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.4;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${cliptext} 0.5s linear forwards;
          animation-delay: ${props.delay}s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
`;

const SkillTextWrap = styled.div<VisibleProps>`
  height: fit-content;
  width: fit-content;
  gap: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeIn} 1s linear forwards;
          animation-delay: 5s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
`;
