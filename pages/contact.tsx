import { useState } from "react";
import styled from "styled-components";
import { FlexRowBox } from "@/components/common/commonStyle";
import ContactRightSection from "@/components/contact/ContactRightSection";
import ContactLeftSection from "@/components/contact/ContactLeftSection";

export default function Contact() {
  const [ishoverInfo, setIsHoverInfo] = useState<string>("");

  return (
    <ContactWrap>
      <ContactContentBox>
        <FlexRowBox>
          <ContactContent>
            <ContactLeftSection setIsHoverInfo={setIsHoverInfo} />
            <ContactRightSection />
          </ContactContent>
        </FlexRowBox>
      </ContactContentBox>
    </ContactWrap>
  );
}

const ContactWrap = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/assets/image/contact-background.jpg") 50% 50% no-repeat;
  background-size: cover;
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
