import styled from "styled-components";

export default function Project() {
  return (
    <ProjectWrap>
      <ProjectContent>Project Page</ProjectContent>
    </ProjectWrap>
  );
}

const ProjectWrap = styled.section`
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #48c79e;
`;

const ProjectContent = styled.div`
  font-size: 10rem;
  color: white;
  text-align: center;
`;
