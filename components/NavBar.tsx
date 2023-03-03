/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  FcBusinessContact,
  FcTemplate,
  FcWikipedia,
  FcPhone,
  FcSportsMode,
} from "react-icons/fc";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

export interface NavBarProps {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function NavBar({ setDarkMode }: NavBarProps) {
  const router = useRouter();
  console.log(router);
  return (
    <Nav>
      <NavMenu>
        <NavList>
          <Link href="">
            <NavButton onClick={() => setDarkMode((prev) => !prev)}>
              <FcBusinessContact size="100%" name="about" />
            </NavButton>
          </Link>
        </NavList>
        <NavList>
          <NavButton>
            <FcTemplate size="100%" name="project" />
          </NavButton>
        </NavList>
        <NavList>
          <NavButton>
            <FcSportsMode size="100%" name="career" />
          </NavButton>
        </NavList>
        <NavList>
          <NavButton>
            <FcWikipedia size="100%" name="tmi" />
          </NavButton>
        </NavList>
        <NavList>
          <Link href="">
            <NavButton>
              <FcPhone size="100%" name="contact" />
            </NavButton>
          </Link>
        </NavList>
      </NavMenu>
    </Nav>
  );
}

const Nav = styled.nav`
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

const NavButton = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid none;
  border-radius: 0.6rem;
  transition-duration: 0.4s;
  &:hover {
    box-shadow: 0.4rem 0.4rem 0.8rem #bec5d0;
    transition-duration: 0.2s;
    width: 5.2rem;
    height: 5.2rem;
  }
  &:active {
    box-shadow: inset -0.3rem -0.2rem 1.4rem #fbfbfb,
      inset 0.4rem 0.8rem 0.8rem #bec5d0;
    width: 4.8rem;
    height: 4.8rem;
  }
`;
