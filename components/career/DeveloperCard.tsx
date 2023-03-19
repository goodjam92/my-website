import { CAREER_TEXT } from "@/hooks/TextConstant";
import { media } from "@/styles/media";
import styled from "styled-components";
import { Hyphen, HyphenText, HyphenTextWrap } from "../common/commonStyle";

export default function DeveloperCard() {
  return (
    <DeveloperBackCard>
      <Company>{CAREER_TEXT.COMPANY}</Company>
      <Period>({CAREER_TEXT.PERIOD})</Period>
      {CAREER_TEXT.WORK.map((item) => (
        <DevelopTextWrap key={item}>
          <DevelopTextHyphen fontSize={2}>-</DevelopTextHyphen>{" "}
          <DevelopText fontSize={2}>{item}</DevelopText>
        </DevelopTextWrap>
      ))}
    </DeveloperBackCard>
  );
}

const DeveloperBackCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.medium`
  padding:2rem;
`}
`;

const Company = styled.h2`
  font-size: 2.8rem;
  ${media.medium`
  font-size: 2.4rem;
`}
`;

const Period = styled.h2`
  font-size: 2rem;
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  font-weight: 300;
  ${media.medium`
  font-size: 1.8rem;
`}
  ${media.small`
  font-size: 1.6rem;
`}
`;

const DevelopTextWrap = styled(HyphenTextWrap)`
  line-height: 2;
  gap: 1rem;
`;

const DevelopTextHyphen = styled(Hyphen)`
  font-weight: 400;
  ${media.medium`
  font-size: 1.8rem;
`}
  ${media.small`
  font-size: 1.6rem;
  line-height: 2;
`}
  ${media.xSmall`
  line-height: 1.6;
`}
`;

const DevelopText = styled(HyphenText)`
  font-weight: 400;
  ${media.medium`
  font-size: 1.8rem;
`}
  ${media.small`
  font-size: 1.6rem;
  line-height: 2;
`}
  ${media.xSmall`
  line-height: 1.6;
`}
`;
