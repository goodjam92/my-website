import { fadeOut, fadeInFromLeft } from "@/components/animation/animation";
import {
  Container,
  ContentBox,
  InnerContainer,
} from "@/components/common/commonStyle";
import { INTRO_PAGE } from "@/hooks/TextConstant";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const magicRef = useRef(null);
  const [localVisible, setLocalVisible] = useState<boolean>(false);

  useEffect(() => {
    const magic: any = magicRef.current;
    if (!magic) {
      return;
    }
    const magicWHalf = magic.offsetWidth / 2;

    function handleMouseMove(e: any) {
      magic.style.left = e.pageX - magicWHalf + "px";
      magic.style.top = e.pageY - magicWHalf + "px";
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [localVisible]);

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
    if (ref.current) {
      observer.observe(ref.current);
      return;
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <>
      <IntroWrap ref={ref}>
        {localVisible === true ? <MagicScreen ref={magicRef} /> : null}
        <Container>
          <InnerContainer>
            <ContentBox>
              <IntroTextContainer>
                <IntroText visible={localVisible} delay={0.75}>
                  {INTRO_PAGE.LEFT_TOP_TEXT}
                </IntroText>
                <IntroText visible={localVisible} delay={1.75}>
                  {INTRO_PAGE.LEFT_MID_TEXT}
                </IntroText>
                <IntroText visible={localVisible} delay={2.5}>
                  {INTRO_PAGE.LEFT_BOTTOM_TEXT}
                </IntroText>
              </IntroTextContainer>
            </ContentBox>
          </InnerContainer>
        </Container>
      </IntroWrap>
    </>
  );
}

interface VisibleProps {
  visible: boolean;
  delay?: number;
}

const IntroWrap = styled.section`
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d1f20;
  z-index: -99;
`;

const IntroTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IntroText = styled.h1<VisibleProps>`
  position: relative;
  font-size: 6rem;
  text-transform: uppercase;
  color: #fff;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeInFromLeft} 0.5s linear forwards;
          animation-delay: ${props.delay}s;
        `
      : css`
          animation: ${fadeOut} 0.2s linear forwards;
        `}
  z-index: 10;
`;

const MagicScreen = styled.div`
  z-index: 5;
  position: absolute;
  top: calc(50% - 10rem);
  left: calc(50% - 10rem);
  width: 24rem;
  height: 24rem;
  background: url("/assets/image/myphoto.jpeg") 50% 50% no-repeat fixed;
  background-size: cover;
  border-radius: 50%;
`;
