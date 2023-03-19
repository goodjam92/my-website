import { media } from "@/styles/media";
import styled from "styled-components";

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
