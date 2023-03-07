import { useEffect, useRef } from "react";
import styled from "styled-components";

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
      </NavItem>
    </NavItemContainer>
  );
}

const NavItemContainer = styled.li`
  width: 10.8rem;
  height: 4.8rem;
  font-size: 1.6rem;
  list-style: none;
`;

interface NavItemProps {
  index: number;
  name: string;
}

const NavItem = styled.button<NavItemProps>`
  height: 100%;
  width: 100%;
  letter-spacing: 0.05rem;
  font-size: 2rem;
  font-family: "Audiowide-Regular";
  border-radius: 1rem;
  color: ${(props) =>
    props.index === parseInt(props.name) ? "black" : "white"};
  background-color: ${(props) =>
    props.index === parseInt(props.name) ? "tomato" : "transparent"};
  &:hover {
    font-size: 2.2rem;
    transition-duration: 0.4s;
    text-decoration: underline;
  }
`;
