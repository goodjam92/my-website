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
import { media } from "@/styles/media";
import DescriptionText from "./DescriptionText";

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
            <DescriptionText
              visible={visible}
              index={index}
              description={text}
              key={text}
            />
          ))}
          <SkillTextWrap visible={visible}>
            {projectInfo.USE_SKILL.map((skill) => (
              <ProjectSkillText skillText={skill} key={skill} />
            ))}
          </SkillTextWrap>
        </ProjectDescription>
        {projectInfo.GITHUB.url === "" &&
        projectInfo.FOOTER.url === "" ? null : (
          <ProjectFooter
            github={projectInfo.GITHUB}
            footer={projectInfo.FOOTER}
            visible={visible}
          />
        )}
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
  ${media.medium`
  padding: 0.4rem;
  width: 340px;
`}
  ${media.small`
  width: 56rem;
  height: 100%;
`}
  ${media.xSmall`
  max-width: 38rem;
  height: 100%;
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
  ${media.medium`
  padding: 2rem;
`}
  ${media.small`
  padding: 1.6rem;
  gap: 0.4rem;
`}
  ${media.xSmall`
  padding: 1.4rem;
  border-radius: 0.8rem;
`}
`;

const ProjectTitle = styled.h2<VisibleProps>`
  font-size: 2.8rem;
  font-family: RussoOne-Regular;
  font-weight: 400;
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
  ${media.medium`
        font-size: 2.4rem;
`}
  ${media.small`
  font-size: 2rem;
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
        `};
  ${media.medium`
    font-size: 1.6rem;
`}
  ${media.small`
  font-size: 1.4rem;
`}
`;

const ProjectDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  ${media.small`
  gap: 0.6rem;
`}
  ${media.xSmall`
  gap: 0.4rem;
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
          animation-delay: 4.5s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
`;
