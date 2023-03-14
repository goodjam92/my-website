import { OTHER_CAREER_TEXT } from "@/hooks/TextConstant";
import styled from "styled-components";

export default function OtherCareerCard() {
  return (
    <OtherBackCard>
      <OtherBackInfo>
        <Company>{OTHER_CAREER_TEXT.SOLKO.COMPANY}</Company>
        <Period>({OTHER_CAREER_TEXT.SOLKO.PERIOD})</Period>
        {OTHER_CAREER_TEXT.SOLKO.WORK.map((item) => (
          <Work key={item}>{item}</Work>
        ))}
      </OtherBackInfo>
      <OtherBackInfo>
        <Company>{OTHER_CAREER_TEXT.YSTT.COMPANY}</Company>
        <Period>({OTHER_CAREER_TEXT.YSTT.PERIOD})</Period>
        {OTHER_CAREER_TEXT.YSTT.WORK.map((item) => (
          <Work key={item}>{item}</Work>
        ))}
      </OtherBackInfo>
    </OtherBackCard>
  );
}

const OtherBackCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 2rem 2rem 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const OtherBackInfo = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Company = styled.h2`
  font-size: 2.4rem;
`;

const Period = styled.h2`
  font-size: 2rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-weight: 300;
`;

const Work = styled.h2`
  font-size: 2rem;
  margin-top: 1rem;
  font-weight: 400;
`;
