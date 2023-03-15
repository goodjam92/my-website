import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { VisibleProps } from "@/model/VisibleProps";
import { media } from "@/styles/media";
import { ContentBox, FlexBox } from "@/components/common/commonStyle";
import MySkils from "@/components/about/MySkils";
import Description from "@/components/about/Description";
import {
  backgroundAnimate,
  fadeIn,
  fadeOut,
} from "@/components/animation/animation";

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
        <AboutFlexBox>
          <LeftContent>
            <MySkils
              selectedSkill={selectedSkill}
              setselectedSkill={setselectedSkill}
            />
          </LeftContent>
          <RightContent visible={localVisible}>
            <Description selectedSkill={selectedSkill} />
          </RightContent>
        </AboutFlexBox>
      </ContentBox>
    </AboutWrap>
  );
}

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100%;
  background: linear-gradient(-45deg, #06769b, #068c9b, #0c638f, #06769b);
  background-size: 400% 400%;
  animation: ${backgroundAnimate} 20s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutFlexBox = styled(FlexBox)`
  gap: 2rem;
  ${media.large`
  gap: 0.8;`}
  ${media.medium`
  gap: 6rem;
`}
  ${media.small`
  gap: 4rem;
`}
`;

const LeftContent = styled.div`
  width: fit-content;
  transition: all 0.5s;
  ${media.medium`
  width: 60rem;
  margin: 0;
`}
  ${media.small`
  width: 48rem;
  margin: 0;
`}
`;

const RightContent = styled.div<VisibleProps>`
  flex: 1;
  margin-left: 4rem;
  padding: 4.8rem;
  border-radius: 1.2rem;
  box-sizing: border-box;
  background-color: rgba(233, 233, 233, 0.164);
  backdrop-filter: blur(0.4rem);
  box-shadow: 0.2rem 0.7rem 1.5rem 0.8rem rgba(0, 0, 0, 0.3);
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeIn} 0.5s linear forwards;
          animation-delay: 0.5s;
        `
      : css`
          animation: ${fadeOut} 0.1s linear forwards;
        `}
  transition: all 0.5s;
  ${media.large`
  margin-left: 2rem;
`}
  ${media.medium`
  min-width: 60rem;
  max-width: 68rem;
  margin: 0;
  padding: 2rem;
`}
  ${media.small`
  margin-top: 2rem;
  min-width: 52rem;
  max-width: 56rem;
  padding: 0.8rem;
`}
`;
