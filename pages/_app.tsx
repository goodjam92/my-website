import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { Spacer } from "@/components/Spacer";
import { GlobalStyle } from "@/styles/globals-style";
import { media } from "@/styles/media";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <WebWrap>
        <Spacer width={5} />
        <ContentsWrap>
          <IntroContainer mode={darkMode}>
            <div>button</div>
          </IntroContainer>
          <NavContainer>
            <NavBar setDarkMode={setDarkMode} />
          </NavContainer>
          <ContentsContainer>
            <Component {...pageProps} />
          </ContentsContainer>
        </ContentsWrap>
        <Spacer width={5} />
      </WebWrap>
    </ThemeProvider>
  );
}

const WebWrap = styled.main`
  flex: auto;
  box-sizing: border-box;
  display: flex;
`;

const ContentsWrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #9fbdf9;
`;

interface IntroContainerProps {
  mode: boolean;
}

const IntroContainer = styled.div<IntroContainerProps>`
  height: 100%;
  background-color: ${({ mode }) => (mode ? "navy" : "white")};
  flex-basis: 33%;

  ${media.medium`
    display: none;
    transition-duration: 0.4s;
  `}
`;

const NavContainer = styled.div`
  align-self: center;
  width: 12rem;
  flex-basis: 4.5%;
  min-width: 5.6rem;
  max-width: 6.4rem;
  ${media.medium`
    flex-basis: 8%;
  `}
`;

const ContentsContainer = styled.div`
  height: 100%;
  flex-basis: 62.5%;
  margin-left: 1.2rem;
  ${media.medium`
    flex-basis: 92%;
  `}
`;
