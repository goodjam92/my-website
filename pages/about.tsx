import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { VisibleProps } from "@/model/VisibleProps";
import { ContentBox, FlexRowBox } from "@/components/common/commonStyle";
import MySkils from "@/components/about/MySkils";
import Description from "@/components/about/Description";
import { fadeIn, fadeOut } from "@/components/animation/animation";
import { Spacer } from "@/components/Spacer";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [localVisible, setLocalVisible] = useState<boolean>(false);
  const [selectedSkill, setselectedSkill] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setLocalVisible(false);
          setselectedSkill("");
          return;
        }
        setLocalVisible(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.8,
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
        <FlexRowBox>
          <LeftContent>
            <MySkils
              selectedSkill={selectedSkill}
              setselectedSkill={setselectedSkill}
            />
          </LeftContent>
          <Spacer width={2} />
          <RightContent visible={localVisible}>
            <Description selectedSkill={selectedSkill} />
          </RightContent>
        </FlexRowBox>
      </ContentBox>
    </AboutWrap>
  );
}

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100%;
  background-color: #06769b;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftContent = styled.div`
  width: fit-content;
`;

const RightContent = styled.div<VisibleProps>`
  flex: 1;
  margin-left: 4rem;
  padding: 4.8rem;
  border-radius: 1.6rem;
  box-sizing: border-box;
  background-color: rgba(255, 255, 192, 0.1);
  backdrop-filter: blur(2rem);
  box-shadow: 0.2rem 0.7rem 1.5rem 0.8rem rgba(0, 0, 0, 0.3);
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeIn} 0.5s linear forwards;
          animation-delay: 1s;
        `
      : css`
          animation: ${fadeOut} 0.1s linear forwards;
        `}
`;
