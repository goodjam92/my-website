import { media } from "@/styles/media";
import styled from "styled-components";
import { fadeInFromLeft, fadeOutFromRight } from "./animation/animation";
import HomeButton from "./HomeButton";
import NavButton from "./NavButton";

interface NavBarProps {
  getCurrentSlideIndex: () => number;
  scrollToSlide: (n: number) => void;
}

export default function NavBar({
  getCurrentSlideIndex,
  scrollToSlide,
}: NavBarProps) {
  return (
    <WebHeader>
      <Controller index={getCurrentSlideIndex()}>
        <HomeContainer>
          <HomeButton
            onClick={() => {
              scrollToSlide(0);
            }}
            slideIndex={getCurrentSlideIndex}
            buttonText="JAMO"
          />
        </HomeContainer>
        <ContentContainer>
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
        </ContentContainer>
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
        return "wheat";
      default:
        return "black";
    }
  }};
  z-index: 100;
  animation: ${fadeInFromLeft} 1s linear forwards;

  ${media.large`
    animation: ${fadeOutFromRight} 0.5s linear forwards;
  `}
`;

const WebHeader = styled.nav`
  height: 11.2rem;
  width: 100vw;
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
  width: 100%;
`;

const ContentContainer = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  gap: 1.2rem;
`;
