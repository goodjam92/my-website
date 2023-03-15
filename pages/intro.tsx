import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { INTRO_TEXT } from "@/hooks/TextConstant";
import {
  ContentBox,
  FlexBox,
  InnerContainer,
} from "@/components/common/commonStyle";
import Symbol from "@/components/intro/Symbol";

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
        <InnerContainer>
          <ContentBox>
            <FlexBox>
              <IntroLeftSection>
                <IntroText>{landingText}</IntroText>
              </IntroLeftSection>
              <IntroRightSection>
                <Symbol />
              </IntroRightSection>
            </FlexBox>
          </ContentBox>
        </InnerContainer>
      </IntroWrap>
    </>
  );
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

const IntroText = styled.h1`
  position: relative;
  font-size: 6rem;
  text-transform: uppercase;
  white-space: pre-line;
  line-height: 16rem;
  color: #fff;
  z-index: 10;
`;

const IntroLeftSection = styled.section`
  height: 100%;
  width: 100%;
`;

const IntroRightSection = styled.section`
  height: 100%;
  width: fit-content;
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
