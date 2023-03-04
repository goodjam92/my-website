import { useCallback, useEffect } from "react";
import { FullPageProps } from "react-full-page";
import styled from "styled-components";

interface NavButtonProps {
  getCurrentSlideIndex: () => number;
  scrollToSlide: (n: number) => void;
}

interface ControllerProps {
  index: number;
}

const Controller = styled.div<ControllerProps>`
  height: 50px;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  background-color: ${(props) => (props.index === 0 ? "transparent" : "white")};
`;

interface ButtonProps {
  index: number;
  name: string;
}

const Button = styled.button<ButtonProps>`
  height: 50px;
  width: 50px;
  background-color: ${(props) =>
    props.index === parseInt(props.name) ? "blue" : "white"};
`;

export default function NavButton({
  getCurrentSlideIndex,
  scrollToSlide,
}: NavButtonProps) {
  const slideIndex: number = getCurrentSlideIndex();

  useEffect(() => {
    console.log(slideIndex);
  }, [slideIndex]);

  return (
    <Controller index={slideIndex}>
      <Button
        onClick={() => {
          scrollToSlide(0);
        }}
        index={slideIndex}
        name="0"
      >
        one
      </Button>
      <Button
        onClick={() => {
          scrollToSlide(1);
        }}
        index={slideIndex}
        name="1"
      >
        two
      </Button>
      <Button
        onClick={() => {
          scrollToSlide(2);
        }}
        index={slideIndex}
        name="2"
      >
        three
      </Button>
    </Controller>
  );
}
