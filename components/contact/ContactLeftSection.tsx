import styled from "styled-components";
import { CONTACT_TEXT } from "@/hooks/TextConstant";
import ContactInfo from "./ContactInfo";

export default function ContactLeftSection() {
  return (
    <LeftSectionWrap>
      <LeftSectionHeader>Contact Me</LeftSectionHeader>
      <LeftSectionItem>
        <ContactInfo info="email" text={CONTACT_TEXT.email} />
        <ContactInfo info="tell" text={CONTACT_TEXT.hp} />
        <ContactInfo info="github" text={CONTACT_TEXT.github} />
        <ContactInfo info="blog" text={CONTACT_TEXT.blog} />
      </LeftSectionItem>
    </LeftSectionWrap>
  );
}

const LeftSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 44rem;
  min-width: 40rem;
  padding: 2.8rem;
  box-sizing: border-box;
  color: white;
  gap: 4rem;
`;

const LeftSectionHeader = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  font-family: "Audiowide-Regular";
`;

const LeftSectionItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
