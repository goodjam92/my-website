import Header from "@/components/Header";
import NavButton from "@/components/NavButton";
import { GlobalStyle } from "@/styles/globals-style";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { FullPage } from "react-full-page";
import styled, { ThemeProvider } from "styled-components";

const WebWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
