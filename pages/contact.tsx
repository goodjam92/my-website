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
  background: linear-gradient(-45deg, #303030, #454545, #36363a, #343536);
  background-size: 400% 400%;
  animation: ${backgroundAnimate} 20s ease infinite;
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
