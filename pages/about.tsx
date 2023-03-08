import { ContentBox } from "@/components/common/commonStyle";
import MySkils from "@/components/about/MySkils";
import styled from "styled-components";

export default function About() {
  return (
    <AboutWrap>
      <ContentBox>
        <RowContent>
          <LeftContent>
            <MySkils />
          </LeftContent>
          <RightContent>Description</RightContent>
        </RowContent>
      </ContentBox>
    </AboutWrap>
  );
}

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100%;
  background: url("/assets/image/about-bg.jpeg") 50% 50% no-repeat fixed;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RowContent = styled.div`
  display: flex;
  align-items: center;
`;

const LeftContent = styled.div`
  flex: 0.5;
`;

const RightContent = styled.div`
  flex: 1;
  margin-left: 4rem;
  height: 60rem;
  background-color: white;
`;
