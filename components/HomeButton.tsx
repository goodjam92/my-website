import styled from "styled-components";

interface HomeButtonProps {
  onClick: () => void;
  buttonText: string;
  slideIndex: () => number;
}

export default function HomeButton({
  onClick,
  buttonText,
  slideIndex,
}: HomeButtonProps) {
  return (
    <NavItemContainer>
      <NavItem onClick={onClick}>{buttonText}</NavItem>
    </NavItemContainer>
  );
}

const NavItemContainer = styled.div`
  width: 12rem;
  height: 100%;
  list-style: none;
`;

const NavItem = styled.button`
  height: 100%;
  width: 100%;
  letter-spacing: 0.05rem;
  font-size: 3.2rem;
  font-family: "Audiowide-Regular";
  color: white;
`;
