import NavBar from "@/components/NavBar";
import styled from "styled-components";
import About from "./about";

export default function Home() {
  return (
    <WebWrap>
      <IntroContainer>
        <NavBar />
      </IntroContainer>
      <NavContainer>
        <div>button</div>
      </NavContainer>
      <ContentsContainer>
        <section>
          <About />
        </section>
      </ContentsContainer>
    </WebWrap>
  );
}

const WebWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const IntroContainer = styled.div`
  flex-grow: 0.5;
`;

const NavContainer = styled.div`
  flex-grow: 0.5;
`;

const ContentsContainer = styled.div`
  flex-grow: 1.5;
`;
