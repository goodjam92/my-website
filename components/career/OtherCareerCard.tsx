import { OTHER_CAREER_TEXT } from "@/hooks/TextConstant";
import { media } from "@/styles/media";
import styled from "styled-components";
import CardHyphenText from "./CardHyphenText";

export default function OtherCareerCard() {
  return (
    <OtherBackCard>
      <OtherBackInfo>
        <Company>{OTHER_CAREER_TEXT.SOLKO.COMPANY}</Company>
        <Period>({OTHER_CAREER_TEXT.SOLKO.PERIOD})</Period>
        {OTHER_CAREER_TEXT.SOLKO.WORK.map((item) => (
          <CardHyphenText description={item} key={item} />
        ))}
      </OtherBackInfo>
      <OtherBackInfo>
        <Company>{OTHER_CAREER_TEXT.YSTT.COMPANY}</Company>
        <Period>({OTHER_CAREER_TEXT.YSTT.PERIOD})</Period>
        {OTHER_CAREER_TEXT.YSTT.WORK.map((item) => (
          <CardHyphenText description={item} key={item} />
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
  justify-content: space-between;
  ${media.medium`
  padding: 2rem;
  gap: 2rem;
`}
  ${media.small`
  padding: 2rem;
  gap: 0;
`}
  ${media.xSmall`
  padding: 1.6rem;
`}
`;

const OtherBackInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Company = styled.h2`
  font-size: 2.4rem;
  ${media.medium`
  font-size: 2rem;
`}
  ${media.small`
  font-size: 1.8rem;
`}
`;

const Period = styled.h2`
  font-size: 2rem;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-weight: 300;
  ${media.medium`
  font-size: 1.6rem;
  margin: 0;
  line-height: 1.8;
`}
  ${media.small`
  font-size: 1.6rem;
  line-height: 1.2;
`}
  ${media.xSmall`
  font-size: 1.4rem;
`}
`;
