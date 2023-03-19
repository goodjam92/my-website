import styled from "styled-components";
import { CONTACT_TEXT } from "@/hooks/TextConstant";
import ContactInfo from "./ContactInfo";
import { media } from "@/styles/media";

export default function ContactContainer() {
  return (
    <ContainerWrap>
      <ContactHeader>Contact Me</ContactHeader>
      <ContactThanks>{CONTACT_TEXT.thanks}</ContactThanks>
      <ContactItem>
        <ContactInfo info="email" text={CONTACT_TEXT.email} />
        <ContactInfo info="github" text={CONTACT_TEXT.github} />
        <ContactInfo info="blog" text={CONTACT_TEXT.blog} />
      </ContactItem>
    </ContainerWrap>
  );
}

const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 44rem;
  min-width: 40rem;
  padding: 2.8rem;
  box-sizing: border-box;
  color: white;
  gap: 3.2rem;
  ${media.small`
  gap: 2rem;
  min-height: 36rem;
  min-width: 32rem;
  `}
`;

const ContactHeader = styled.h2`
  font-size: 3.2rem;
  text-align: center;
  font-family: "Audiowide-Regular";
  ${media.small`
  font-size: 2.8rem;
  `}
  ${media.xSmall`
  font-size: 2.4rem;
  `}
`;

const ContactThanks = styled.h2`
  font-size: 2.4rem;
  text-align: center;
  white-space: pre-line;
  font-weight: 400;
  line-height: 150%;
  ${media.small`
  font-size: 2rem;
  `}
  ${media.xSmall`
  font-size: 1.6rem;
  `}
`;

const ContactItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  ${media.small`
  gap: 1.6rem;
  `}
`;
