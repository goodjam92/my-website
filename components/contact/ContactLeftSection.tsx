import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { CONTACT_TEXT } from "@/hooks/TextConstant";
import ContactInfo from "./ContactInfo";

interface ContactLeftSectionProps {
  setIsHoverInfo: Dispatch<SetStateAction<string>>;
}

export default function ContactLeftSection({
  setIsHoverInfo,
}: ContactLeftSectionProps) {
  return (
    <LeftSectionWrap>
      <LeftSectionHeader>Contact Me</LeftSectionHeader>
      <LeftSectionItem>
        <ContactInfo
          info="email"
          text={CONTACT_TEXT.email}
          setIsHoverInfo={setIsHoverInfo}
        />
        <ContactInfo
          info="tell"
          text={CONTACT_TEXT.hp}
          setIsHoverInfo={setIsHoverInfo}
        />
        <ContactInfo
          info="github"
          text={CONTACT_TEXT.github}
          setIsHoverInfo={setIsHoverInfo}
        />
        <ContactInfo
          info="blog"
          text={CONTACT_TEXT.blog}
          setIsHoverInfo={setIsHoverInfo}
        />
      </LeftSectionItem>
    </LeftSectionWrap>
  );
}

const LeftSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 44rem;
  min-width: 44rem;
  padding: 2.8rem;
  box-sizing: border-box;
  color: white;
  gap: 4rem;
`;

const LeftSectionHeader = styled.h2`
  font-size: 2rem;
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
