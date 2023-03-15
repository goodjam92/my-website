import {
  CO_OP_VERSIONING,
  DEPLOY_BACKEND,
  FRONT_END_LOGO,
  LIBRARY_TOOL,
} from "@/hooks/SkillList";
import { media } from "@/styles/media";
import styled from "styled-components";
import MySkillLogo from "./MySkillLogo";

interface DescriptionProps {
  selectedSkill: string;
}

export default function Description({ selectedSkill }: DescriptionProps) {
  function logoRender(skillList: string[]) {
    const render = () => {
      const renderList = skillList.map((item, index) => (
        <MySkillLogo logoFile={item} key={item} index={index} />
      ));
      return renderList;
    };
    return <>{render()}</>;
  }

  return (
    <DescriptionWrap>
      <DescriptionContent>
        {selectedSkill === "Front-End" && logoRender(FRONT_END_LOGO)}
        {selectedSkill === "Co-op & Versioning" && logoRender(CO_OP_VERSIONING)}
        {selectedSkill === "Library & Tool" && logoRender(LIBRARY_TOOL)}
        {selectedSkill === "Deploy & BackEnd" && logoRender(DEPLOY_BACKEND)}
      </DescriptionContent>
    </DescriptionWrap>
  );
}

const DescriptionWrap = styled.div`
  width: 100%;
  min-height: 44rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DescriptionContent = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  gap: 8rem;
  ${media.medium`
  gap: 6rem;
`}
  ${media.small`
  gap: 4rem;
`}
`;
