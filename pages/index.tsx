import styled from "styled-components";
import { FullPage, Slide } from "react-full-page";
import NavButton from "@/components/NavButton";

export default function Home() {
  return (
    <FullPage controls={NavButton}>
      <Slide>
        <ContentsBox>hi</ContentsBox>
      </Slide>
      <Slide>
        <ContentsBox2>hi</ContentsBox2>
      </Slide>
      <Slide>
        <ContentsBox3>hi</ContentsBox3>
      </Slide>
    </FullPage>
  );
}

const ContentsBox = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: red;
`;

const ContentsBox2 = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: green;
`;

const ContentsBox3 = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: yellow;
`;
