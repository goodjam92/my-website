import styled from "styled-components";
import { media } from "@/styles/media";
import { fadeIn } from "../animation/animation";
import { useState } from "react";

interface MySkillLogoProps {
  logoFile: string;
  index: number;
  text: string;
}

export default function MySkillLogo({
  logoFile,
  index,
  text,
}: MySkillLogoProps) {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  return (
    <MySkillLogoItem
      src={logoFile}
      index={index}
      onMouseOver={() => setShowToolTip(true)}
      onMouseOut={() => setShowToolTip(false)}
    >
      <MySkillLogoImage src={logoFile} index={index} />
      {showToolTip === true ? (
        <MySkillLogoTextBox>
          <SkillText>{text}</SkillText>
        </MySkillLogoTextBox>
      ) : null}
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
  transition: all 0.3s;
  :hover {
    width: 12rem;
    height: 12rem;
    ${media.small`
    width: 10.4rem;
    height: 10.4rem;
    `}
    ${media.xSmall`
    width: 8.8rem;
    height: 8.8rem;
    `}
  }
  ${media.small`
  width: 8.8rem;
  height: 8.8rem;
  padding: 0.8rem;
`}
  ${media.xSmall`
  width: 8rem;
  height: 8rem;
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

const MySkillLogoTextBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(250, 250, 250, 0.897);
  backdrop-filter: blur(0.5rem);
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SkillText = styled.span`
  display: block;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  white-space: pre-line;
  text-align: center;
  ${media.small`
  font-size: 1.8rem;
    `}
  ${media.xSmall`
  font-size: 1.6rem;
    `}
`;
