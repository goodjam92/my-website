import { CO_OP_VERSIONING, FRONT_END_LOGO } from "@/hooks/SkillList";
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
        {selectedSkill === "FrontEnd" && frontEndLogoRender()}
      </DescriptionContent>
    </DescriptionWrap>
  );
}

const DescriptionWrap = styled.div`
  width: 100%;
  min-height: 48rem;
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
`;
