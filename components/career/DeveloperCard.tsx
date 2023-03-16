import { CAREER_TEXT } from "@/hooks/TextConstant";
import { media } from "@/styles/media";
import styled from "styled-components";

export default function DeveloperCard() {
  return (
    <DeveloperBackCard>
      <Company>{CAREER_TEXT.COMPANY}</Company>
      <Period>({CAREER_TEXT.PERIOD})</Period>
      {CAREER_TEXT.WORK.map((item) => (
        <Work key={item}>{item}</Work>
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

const Work = styled.h2`
  font-size: 2rem;
  margin-top: 2rem;
  font-weight: 400;
  white-space: pre-line;
  ${media.medium`
  font-size: 1.8rem;
`}
  ${media.small`
  font-size: 1.6rem;
`}
`;
