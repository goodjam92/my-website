import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
    font-size: 62.5%;
    height: 100%;
    -webkit-text-size-adjust: none;
    font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
    font-display: fallback;
    media.tablet{font-size: 1rem;}
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -ms-overflow-style: none;
    
  }
  ::-webkit-scrollbar {
    display: none;
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
  button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    .pc-tablet-only {
        display: block;
        media.mobile {
            display: none;
        }
    }
    .tablet-mobile-only{
        display: none;
        media.tablet{
            display:block;
        }
    }
    .mobile-only {
        display: none;
        media.mobile {
            display: block;
        }
    }
`;
