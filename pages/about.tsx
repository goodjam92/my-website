import { useEffect, useRef, useState } from "react";
import { ContentBox } from "@/components/common/commonStyle";
import MySkils from "@/components/about/MySkils";
import styled from "styled-components";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
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
        threshold: 0.2,
      }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
      return;
    }
    return () => {
      if (aboutRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(aboutRef.current);
      }
    };
  }, [aboutRef]);

  return (
    <AboutWrap ref={aboutRef}>
      <ContentBox>
        <RowContent>
          <LeftContent>
            <MySkils />
          </LeftContent>
          <RightContent>Description</RightContent>
        </RowContent>
      </ContentBox>
    </AboutWrap>
  );
}

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100%;
  background: url("/assets/image/about-bg.jpeg") 50% 50% no-repeat fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RowContent = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContent = styled.div`
  flex: 0.5;
`;

const RightContent = styled.div`
  flex: 1;
  margin-left: 4rem;
  height: 60rem;
  background-color: white;
`;
