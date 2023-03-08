import styled from "styled-components";
import { slideDown } from "../animation/animation";

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
  padding: 1rem;
  box-sizing: border-box;
  background-image: ${(props) => `url(${props.src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 0.8rem;
  box-shadow: 0.5rem 0.5rem grey;
  cursor: pointer;
  position: relative;

  animation: ${slideDown} 0.7s linear forwards;
  animation-delay: ${(props) => props.index * 0.5}s;
`;
