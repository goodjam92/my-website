import styled from "styled-components";
import MySkillLogo from "./MySkillLogo";

const FRONT_END_LOGO = [
  "/assets/image/HTML5.svg",
  "/assets/image/CSS.svg",
  "/assets/image/Javascript.svg",
  "/assets/image/ES6.jpg",
  "/assets/image/React.svg",
  "/assets/image/Typescript.svg",
];

const CO_OP_VERSIONING = [];

interface DescriptionProps {
  selectedSkill: string;
}

export default function Description({ selectedSkill }: DescriptionProps) {
  function frontEndLogoRender() {
    const render = () => {
      const renderList = FRONT_END_LOGO.map((item, index) => (
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
