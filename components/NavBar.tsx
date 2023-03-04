/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  FcBusinessContact,
  FcTemplate,
  FcPhone,
  FcSportsMode,
} from "react-icons/fc";
import { FaRegIdCard } from "react-icons/fa";

export interface NavBarProps {
  onClickHomeIcon: () => void;
  onClickProjectIcon: () => void;
  onClickCareerIcon: () => void;
  onClickTmiIcon: () => void;
  onClickContactIcon: () => void;
}

export default function NavBar({
  onClickHomeIcon,
  onClickProjectIcon,
  onClickCareerIcon,
  onClickTmiIcon,
  onClickContactIcon,
}: NavBarProps) {
  return (
    <Nav>
      <NavMenu>
        <NavList>
          <NavButton onClick={onClickHomeIcon}>
            <FcBusinessContact size="100%" name="home" />
          </NavButton>
        </NavList>
        <NavList>
          <NavButton onClick={onClickProjectIcon}>
            <FcTemplate size="100%" name="project" />
          </NavButton>
        </NavList>
        <NavList>
          <NavButton onClick={onClickCareerIcon}>
            <FcSportsMode size="100%" name="career" />
          </NavButton>
        </NavList>
        <NavList>
          <NavButton onClick={onClickTmiIcon}>
            <FaRegIdCard size="100%" name="tmi" />
          </NavButton>
        </NavList>
        <NavList>
          <NavButton onClick={onClickContactIcon}>
            <FcPhone size="100%" name="contact" />
          </NavButton>
        </NavList>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 6.2rem;
  display: flex;
  justify-content: center;
  border: 1px solid;
  border-color: rgb(255, 255, 255, 0.2);
  box-shadow: 0.6rem 0.2rem 0.8rem #9d9d9d;
  border-radius: 1.2rem;
  background-color: transparent;
`;

const NavMenu = styled.ul`
  padding: 0;
  font-size: 1.4rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
`;

const NavList = styled.li`
  box-sizing: border-box;
`;

const NavButton = styled.button`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid none;
  border-radius: 0.6rem;
  transition-duration: 0.4s;
  &:hover {
    box-shadow: 0.4rem 0.4rem 0.8rem #88898a;
    transition-duration: 0.2s;
    width: 5.2rem;
    height: 5.2rem;
  }
  &:active {
    box-shadow: inset -0.3rem -0.2rem 1.4rem #a9a2a2,
      inset 0.4rem 0.8rem 0.8rem #89898b;
    width: 4.8rem;
    height: 4.8rem;
  }
`;
