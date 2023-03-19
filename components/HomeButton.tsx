import { media } from "@/styles/media";
import styled from "styled-components";

interface HomeButtonProps {
  onClick: () => void;
  buttonText: string;
}

export default function HomeButton({ onClick, buttonText }: HomeButtonProps) {
  return (
    <NavItemContainer>
      <NavItem onClick={onClick}>{buttonText}</NavItem>
    </NavItemContainer>
  );
}

const NavItemContainer = styled.div`
  list-style: none;
  padding: 0.5rem;
  box-sizing: border-box;
`;

const NavItem = styled.button`
  display: block;
  height: 100%;
  width: 100%;
  letter-spacing: 0.05rem;
  font-size: 3.2rem;
  font-family: "Audiowide-Regular";
  color: white;
  ${media.xSmall`
  font-size: 2.8rem;
  `}
`;
