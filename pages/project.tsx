import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "@/components/project/Slide";
import { ContentBox } from "@/components/common/commonStyle";
import { backgroundAnimate } from "@/components/animation/animation";
import { media } from "@/styles/media";

export default function Project() {
  const projectRef = useRef<HTMLDivElement>(null);
  const [localVisible, setLocalVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setLocalVisible(false);
          return;
        }
        setLocalVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.8,
      }
    );
    if (projectRef.current) {
      observer.observe(projectRef.current);
      return;
    }
    return () => {
      if (projectRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(projectRef.current);
      }
    };
  }, [projectRef]);

  return (
    <ProjectWrap ref={projectRef}>
      <ProjectContentBox>
        <ProjectContent>
          <Slide visible={localVisible} />
        </ProjectContent>
      </ProjectContentBox>
    </ProjectWrap>
  );
}

const ProjectWrap = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #000000, #1f1725, #2e2e2f, #1a232a);
  background-size: 400% 400%;
  animation: ${backgroundAnimate} 20s ease infinite;
`;

const ProjectContentBox = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10rem;
  margin-right: 2rem;
  padding: 4rem;
  box-sizing: border-box;
  transition: all 0.5s;
  ${media.large`
  margin: 0;
`}
  ${media.small`
  padding: 0;
    `}
`;

const ProjectContent = styled.div`
  height: 100%;
  width: 100%;
`;
