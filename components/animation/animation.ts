import { keyframes } from "styled-components";

export const fadeInFromLeft = keyframes`
  0%{
    transform: translateX(-30rem);
    opacity: 0;
    }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

export const slideIn = keyframes`
0%{
    transform: translateX(50rem) scale(.5);
}
100%{
    transform: translateX(0px) scale(1);
}
`;

export const slideUp = keyframes`
0%{
    transform: translateY(10rem);
    opacity: 0;
}
100%{
    transform: translateY(0px);
    opacity: 1;
}
`;

export const slideDown = keyframes`
0% {
    transform: translateY(-8rem);
    opacity: 0;
}
100%{
    transform: translateY(0rem);
    opacity: 1;
}
`