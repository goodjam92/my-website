import { media } from "@/styles/media";
import styled from "styled-components";

interface ProjectSkillTextProps {
  skillText: string;
}

export default function ProjectSkillText({ skillText }: ProjectSkillTextProps) {
  return <SkillTextBox>{skillText}</SkillTextBox>;
}

const SkillTextBox = styled.div`
  width: fit-content;
  height: fit-content;
  border: 0.1rem solid;
  border-color: wheat;
  background-color: wheat;
  text-align: center;
  color: tomato;
  border-radius: 0.8rem;
  font-size: 2rem;
  padding: 0.4rem;
  letter-spacing: 0.02rem;
  font-family: RussoOne-Regular;
  ${media.medium`
        font-size: 1.6rem;
        font-weight: 300;
`}
  ${media.xSmall`
        font-size: 1.2rem;
        font-weight: 300;
`}
`;
