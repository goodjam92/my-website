import styled, { keyframes } from "styled-components";
import { ContentBox } from "@/components/common/commonStyle";
import Slide from "@/components/project/Slide";
import { useEffect, useRef, useState } from "react";
import { backgroundAnimate } from "@/components/animation/animation";

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
      <ContentBox>
        <ProjectContent>
          <Slide visible={localVisible} />
        </ProjectContent>
      </ContentBox>
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

const ProjectContent = styled.div`
  height: 100%;
  width: 100%;
`;
