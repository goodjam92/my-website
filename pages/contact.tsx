import styled from "styled-components";
import { ContentBox, FlexRowBox } from "@/components/common/commonStyle";
import ContactRightSection from "@/components/contact/ContactRightSection";
import ContactLeftSection from "@/components/contact/ContactLeftSection";
import { backgroundAnimate } from "@/components/animation/animation";

export default function Contact() {
  return (
    <ContactWrap>
      <ContentBox>
        <FlexRowBox>
          <ContactLeftContent>
            <ContactLeftSection />
          </ContactLeftContent>
          <ContactRightContent>
            <ContactRightSection />
          </ContactRightContent>
        </FlexRowBox>
      </ContentBox>
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

const ContactLeftContent = styled.div`
  width: 70%;
  height: 100%;
  background-color: red;
`;

const ContactRightContent = styled.div`
  margin-left: 4rem;
  min-width: 36rem;
  height: 100%;
`;
