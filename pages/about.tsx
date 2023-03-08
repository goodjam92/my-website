import {
  Container,
  ContentBox,
  InnerContainer,
} from "@/components/common/commonStyle";
import styled from "styled-components";

export default function About() {
  return (
    <AboutWrap>
      <AboutContent>
        <RowContent>
          <Lang>Lang</Lang>
          <VersionCoop>Version & Co-op</VersionCoop>
          <WorkshopLib>Workshop Library</WorkshopLib>
        </RowContent>
      </AboutContent>
    </AboutWrap>
  );
}

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100%;
  background: url("/assets/image/about-bg.jpeg") 50% 50% no-repeat fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RowContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 50rem;
`;

const Lang = styled.div`
  background-color: white;
  width: 100%;
`;

const VersionCoop = styled.div`
  background-color: tomato;
  width: 100%;
`;

const WorkshopLib = styled.div`
  background-color: greenyellow;
  width: 100%;
`;
