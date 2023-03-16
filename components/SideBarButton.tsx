import { NavItemProps } from "@/model/NavProps";
import styled, { css } from "styled-components";

interface SideBarButtonProps {
  text: string;
  buttonIndex: string;
  slideIndex: () => number;
  onClick: () => void;
}

export default function SideBarButton({
  text,
  buttonIndex,
  slideIndex,
  onClick,
}: SideBarButtonProps) {
  return (
    <SideBarButtonBox onClick={onClick}>
      <SideBarText index={slideIndex()} name={buttonIndex}>
        {text}
      </SideBarText>
    </SideBarButtonBox>
  );
}

const SideBarButtonBox = styled.div`
  width: fit-content;
  height: 6rem;
  cursor: pointer;
`;

const SideBarText = styled.h2<NavItemProps>`
  font-size: 2.4rem;
  font-family: RussoOne-Regular;
  font-weight: 300;
  :hover {
    font-size: 2.6rem;
    color: tomato;
  }
  ${(props) =>
    props.index === parseInt(props.name)
      ? css`
          font-size: 2.6rem;
          color: tomato;
        `
      : null};
`;
