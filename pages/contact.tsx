import { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { FlexRowBox } from "@/components/common/commonStyle";
import ContactRightSection from "@/components/contact/ContactRightSection";
import ContactLeftSection from "@/components/contact/ContactLeftSection";
import { VisibleProps } from "@/model/VisibleProps";

export default function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
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
    if (contactRef.current) {
      observer.observe(contactRef.current);
      return;
    }
    return () => {
      if (contactRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(contactRef.current);
      }
    };
  }, [contactRef]);

  return (
    <ContactWrap ref={contactRef} visible={localVisible}>
      <ContactContentBox>
        <FlexRowBox>
          <ContactContent>
            <ContactLeftSection />
            <ContactRightSection />
          </ContactContent>
        </FlexRowBox>
      </ContactContentBox>
    </ContactWrap>
  );
}

const backgroundZoomOut = keyframes`
0% {
    background-size: 120% 120%;
}
  100% {
    background-size: 100% 100%;
  }
`;

const ContactWrap = styled.section<VisibleProps>`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/assets/image/contact-background.jpg") 50% 50%;
  background-size: 120% 120%;
  ${(props) =>
    props.visible &&
    css`
      animation: ${backgroundZoomOut} 1.5s linear forwards;
    `};
`;

const ContactContentBox = styled.div`
  max-width: 88rem;
  height: 100%;
  margin-left: 10rem;
  padding: 2rem;
  box-sizing: border-box;
`;

const ContactContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  backdrop-filter: blur(0.4rem);
`;
