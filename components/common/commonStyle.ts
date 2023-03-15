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
  min-width: 120rem;
  height: 100%;
  margin-left: 10rem;
  margin-right: 2rem;
  padding: 4rem;
  box-sizing: border-box;
  transition: all 0.5s;
  ${media.large`
  min-width: 104rem;
  margin: 0;
`}
  ${media.medium`
  min-width: 88rem;
  margin: 0;
`}
  ${media.small`
  min-width: fit-content;
  margin: 0;
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
