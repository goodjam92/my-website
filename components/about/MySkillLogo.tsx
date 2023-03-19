import styled from "styled-components";
import { media } from "@/styles/media";
import { fadeIn } from "../animation/animation";

interface MySkillLogoProps {
  logoFile: string;
  index: number;
}

export default function MySkillLogo({ logoFile, index }: MySkillLogoProps) {
  return (
    <MySkillLogoItem src={logoFile} index={index}>
      <MySkillLogoImage src={logoFile} index={index} />
    </MySkillLogoItem>
  );
}

interface MySkillLogoItme {
  src: string;
  index: number;
}

const MySkillLogoItem = styled.li<MySkillLogoItme>`
  opacity: 0;
  width: 10.8rem;
  height: 10.8rem;
  padding: 1.2rem;
  background-color: #cecdcd67;
  border-radius: 0.8rem;
  box-sizing: border-box;
  box-shadow: 0.5rem 0.5rem 0.5rem #3e3d3e;
  position: relative;
  animation: ${fadeIn} 0.7s linear forwards;
  animation-delay: ${(props) => props.index * 0.5}s;
  transition: all 0.5s;
  ${media.small`
  width: 8rem;
  height: 8rem;
  padding: 0.8rem;
`}
  ${media.xSmall`
  width: 6.8rem;
  height: 6.8rem;
  padding: 0.8rem;
`}
`;

const MySkillLogoImage = styled.div<MySkillLogoItme>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.4rem;
`;
