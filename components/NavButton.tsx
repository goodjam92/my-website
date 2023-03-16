import styled, { css, keyframes } from "styled-components";
import { NavItemProps } from "@/model/NavProps";

interface NavButtonProps {
  slideIndex: () => number;
  onClick: () => void;
  buttonText: string;
  buttonIndex: string;
}

export default function NavButton({
  slideIndex,
  onClick,
  buttonText,
  buttonIndex,
}: NavButtonProps) {
  return (
    <NavItemContainer>
      <NavItem index={slideIndex()} name={buttonIndex} onClick={onClick}>
        {buttonText}
        <NavItemStyle index={slideIndex()} name={buttonIndex} />
      </NavItem>
    </NavItemContainer>
  );
}

const NavItemContainer = styled.li`
  width: 14.2rem;
  height: 4.8rem;
  list-style: none;
`;

const NavItem = styled.button<NavItemProps>`
  height: 100%;
  width: 100%;
  letter-spacing: 0.05rem;
  font-size: 2rem;
  font-family: "Audiowide-Regular";
  border-radius: 1rem;
  position: relative;
  color: white;
  &:hover {
    font-size: 2.1rem;
    text-decoration: underline;
    transition-duration: 0.4s;
  }
`;

const animationColor = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 10.8rem;
  }
`;

const NavItemStyle = styled.div<NavItemProps>`
  position: absolute;
  height: 1.6rem;
  top: 48%;
  left: 20%;
  z-index: -2;
  background-color: ${(props) =>
    props.index === parseInt(props.name) ? "tomato" : "transparent"};
  ${(props) =>
    props.index === parseInt(props.name)
      ? css`
          animation: ${animationColor} 0.3s linear forwards;
        `
      : "transparent"};
  &:hover {
    background-color: "tomato";
    width: 100%;
  }
`;
