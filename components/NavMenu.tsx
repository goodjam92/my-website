import { media } from "@/styles/media";
import { useState } from "react";
import styled, { css } from "styled-components";
import {
  fadeInFromLeft,
  fadeInFromRight,
  fadeOutFromRight,
} from "./animation/animation";
import HomeButton from "./HomeButton";
import NavButton from "./NavButton";
import SideBarButton from "./SideBarButton";
import { Spacer } from "./Spacer";

interface NavBarProps {
  getCurrentSlideIndex: () => number;
  scrollToSlide: (n: number) => void;
}

export default function NavBar({
  getCurrentSlideIndex,
  scrollToSlide,
}: NavBarProps) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <WebHeader>
      <Controller index={getCurrentSlideIndex()}>
        <HomeContainer>
          <HomeButton
            onClick={() => {
              scrollToSlide(0);
            }}
            buttonText="JAEMO"
          />
        </HomeContainer>
        <ContentContainer>
          <NavRowBarContainer>
            <NavButton
              onClick={() => {
                scrollToSlide(1);
              }}
              slideIndex={getCurrentSlideIndex}
              buttonIndex="1"
              buttonText="<About />"
            />
            <NavButton
              onClick={() => {
                scrollToSlide(2);
              }}
              slideIndex={getCurrentSlideIndex}
              buttonIndex="2"
              buttonText="<Project />"
            />
            <NavButton
              onClick={() => {
                scrollToSlide(3);
              }}
              slideIndex={getCurrentSlideIndex}
              buttonIndex="3"
              buttonText="<Career />"
            />
            <NavButton
              onClick={() => {
                scrollToSlide(4);
              }}
              slideIndex={getCurrentSlideIndex}
              buttonIndex="4"
              buttonText="<Contact />"
            />
          </NavRowBarContainer>
          <NavSideBarButton onClick={() => setShowSideBar((prev) => !prev)}>
            <NavSideBarIcon src="/assets/image/nav-icon.png" alt="navicon" />
          </NavSideBarButton>
        </ContentContainer>
        <NavSideBar showSideBar={showSideBar}>
          <NavCloseButton onClick={() => setShowSideBar((prev) => !prev)}>
            <SideBarCloseIcon src="/assets/image/close.png" alt="close" />
          </NavCloseButton>
          <Spacer height={6} />
          <SideBarButton
            text="<About />"
            buttonIndex="1"
            slideIndex={getCurrentSlideIndex}
            onClick={() => {
              scrollToSlide(1);
            }}
          />
          <SideBarButton
            text="<Project />"
            buttonIndex="2"
            slideIndex={getCurrentSlideIndex}
            onClick={() => {
              scrollToSlide(2);
            }}
          />
          <SideBarButton
            text="<Career />"
            buttonIndex="3"
            slideIndex={getCurrentSlideIndex}
            onClick={() => {
              scrollToSlide(3);
            }}
          />
          <SideBarButton
            text="<Contact />"
            buttonIndex="4"
            slideIndex={getCurrentSlideIndex}
            onClick={() => {
              scrollToSlide(4);
            }}
          />
        </NavSideBar>
      </Controller>
      <VerticalBar index={getCurrentSlideIndex()} />
    </WebHeader>
  );
}

interface VerticalBarProps {
  index: number;
}

const VerticalBar = styled.div<VerticalBarProps>`
  position: fixed;
  top: 40%;
  left: 8rem;
  height: 20rem;
  width: 0.2rem;
  border-radius: 0.1rem;
  transition-duration: 0.6s;
  opacity: 0;
  background-color: ${(props) => {
    switch (props.index) {
      case 0:
        return "white";
      case 1:
        return "black";
      case 2:
        return "white";
      case 3:
        return "black";
      default:
        return "transparent";
    }
  }};
  z-index: 100;
  animation: ${fadeInFromLeft} 0.5s linear forwards;
  ${media.large`
    animation: ${fadeOutFromRight} 0.5s linear forwards;
  `}
`;

const WebHeader = styled.nav`
  height: 11.2rem;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 2.4rem;
  box-sizing: border-box;
  z-index: 100;
`;

interface ControllerProps {
  index: number;
}

const Controller = styled.div<ControllerProps>`
  width: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  padding-right: 2rem;
  padding-left: 2rem;
  box-sizing: border-box;
`;

const HomeContainer = styled.div`
  height: 100%;
  width: fit-content;
`;

const NavRowBarContainer = styled.ul`
  display: flex;
  gap: 1.2rem;
  ${media.large`
  animation: ${fadeInFromRight} 0.5s linear forwards;
  `}
  ${media.medium`
  display:none;
  `}
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavSideBarButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  z-index: 1;
  display: none;
  ${media.medium`
  animation: ${fadeInFromRight} 0.5s linear forwards;
  display:flex;
  `}
  ${media.xSmall`
    width: 2.8rem;
    height: 2.8rem;
  `}
`;

const NavSideBarIcon = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
  filter: brightness(0) invert(1);
`;

interface NavSideBarProps {
  showSideBar: boolean;
}

const NavSideBar = styled.ul<NavSideBarProps>`
  height: 100%;
  width: 50%;
  position: fixed;
  right: 0;
  top: 0;
  background-color: white;
  display: none;
  padding: 3rem;
  ${(props) =>
    props.showSideBar &&
    css`
      animation: ${fadeInFromRight} 0.3s linear forwards;
      display: block;
      z-index: 3;
    `}
`;

const NavCloseButton = styled.button`
  width: 3.6rem;
  height: 3.6rem;
`;

const SideBarCloseIcon = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;
