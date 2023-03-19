import { media } from "@/styles/media";
import styled from "styled-components";

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 10rem;
  margin-right: 2rem;
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.5s;
  ${media.large`
  margin: 0;
`}
  ${media.small`
  padding: 0;
    `}
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.5s;

  ${media.medium`
  flex-direction: column;
`}
`;

export const HyphenTextWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
`;

interface HyphenTextProps {
  fontSize: number;
}

export const Hyphen = styled.div<HyphenTextProps>`
  font-size: ${(props) => props.fontSize}rem;
  align-self: flex-start;
`;

export const HyphenText = styled.h3<HyphenTextProps>`
  font-size: ${(props) => props.fontSize}rem;
  font-weight: 500;
`;
