import styled from "styled-components";
import { fadeIn } from "../animation/animation";

interface MySkillLogoProps {
  logoFile: string;
  index: number;
}

export default function MySkillLogo({ logoFile, index }: MySkillLogoProps) {
  return <MySkillLogoItem src={logoFile} index={index} />;
}

interface MySkillLogoItme {
  src: string;
  index: number;
}

const MySkillLogoItem = styled.li<MySkillLogoItme>`
  opacity: 0;
  width: 10rem;
  height: 10rem;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fcfcfc21;
  border-radius: 1rem;
  box-shadow: 0.5rem 0.5rem 0.5rem #3e3d3e;
  position: relative;
  animation: ${fadeIn} 0.7s linear forwards;
  animation-delay: ${(props) => props.index * 0.5}s;
`;
