import { useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { media } from "@/styles/media";
import { INTRO_TEXT } from "@/hooks/TextConstant";
import { ContentBox, FlexBox } from "@/components/common/commonStyle";
import Symbol from "@/components/intro/Symbol";
import { fadeIn, fadeOut } from "@/components/animation/animation";
import { VisibleProps } from "@/model/VisibleProps";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const magicRef = useRef(null);
  const [localVisible, setLocalVisible] = useState<boolean>(false);
  const [landingText, setLandingText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);

  const completedText = useMemo(() => {
    return INTRO_TEXT;
  }, []);

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
        threshold: 0.9,
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

  useEffect(() => {
    if (!localVisible) {
      setTextIndex(0);
      setLandingText("");
      return;
    }
    const typingText = setInterval(() => {
      if (textIndex === INTRO_TEXT.length) {
        clearInterval(typingText);
        return;
      }

      setLandingText(landingText + completedText[textIndex]);
      setTextIndex(textIndex + 1);
    }, 150);

    return () => {
      clearInterval(typingText);
    };
  }, [completedText, landingText, localVisible, textIndex]);

  return (
    <>
      <IntroWrap ref={ref}>
        {localVisible === true ? <MagicScreen ref={magicRef} /> : null}
        <ContentBox>
          <FlexBox>
            <IntroLeftSection>
              <IntroText>{landingText}</IntroText>
            </IntroLeftSection>
            <IntroRightSection visible={localVisible}>
              {localVisible === true ? <Symbol /> : null}
            </IntroRightSection>
          </FlexBox>
        </ContentBox>
      </IntroWrap>
    </>
  );
}

const IntroWrap = styled.section`
  position: relative;
  height: 100%;
  background: #1d1f20;
  z-index: 0;
`;

const IntroText = styled.h1`
  position: relative;
  font-size: 5.6rem;
  text-transform: uppercase;
  white-space: pre-line;
  line-height: 16rem;
  color: #fff;
  z-index: 10;
  transition: all 0.5s;
  ${media.medium`
  font-size: 4.4rem;
  line-height: 12rem;
`}
  ${media.small`
    font-size: 3.6rem;
    line-height: 10rem;
    margin: 0;
    `}
  ${media.xSmall`
    font-size: 2.8rem;
    `}
`;

const IntroLeftSection = styled.section`
  height: 100%;
  width: 100%;
  transition: all 0.5s;
  ${media.large`
    transition: 0.5s;
    margin-left: 2.8rem;
    margin-right: 1.2rem;
  `}
  ${media.small`
  margin: 0;
    `}
`;

const IntroRightSection = styled.section<VisibleProps>`
  height: 100%;
  width: fit-content;
  margin-left: 8rem;
  z-index: 30;
  opacity: 0;
  ${(props) =>
    props.visible === true
      ? css`
          animation: ${fadeIn} 2s linear forwards;
        `
      : css`
          animation: ${fadeOut} 2s linear forwards;
        `}
  ${media.small`
  margin: 0;
    `}
`;

const MagicScreen = styled.div`
  z-index: 5;
  position: absolute;
  top: calc(50% - 10rem);
  left: calc(50% - 10rem);
  width: 24rem;
  height: 24rem;
  background: url("/assets/image/myphoto.jpeg") no-repeat center fixed;
  background-size: cover;
  border-radius: 50%;
`;
