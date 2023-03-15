import { keyframes } from "styled-components";

export const fadeInFromLeft = keyframes`
  0%{
    transform: translateX(-10rem);
    opacity: 0;
    }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const fadeInFromRight = keyframes`
  0%{
    transform: translateX(10rem);
    opacity: 0;
    }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const fadeOutFromRight = keyframes`
  0%{
    transform: translateX(0);
    opacity:1;
    }
  100% {
    transform: translateX(-10rem);
    opacity: 0;
    display:none;
  }
`;

export const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
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

export const shotSlideDown = keyframes`
0%{
    transform: translateY(-2rem);
    opacity: 0;
}
100%{
    transform: translateY(0px);
    opacity: 1;
}`;

export const slideDown = keyframes`
0% {
    transform: translateY(-8rem);
    opacity: 0;
}
100%{
    transform: translateY(0rem);
    opacity: 1;
}
`;

export const cliptext = keyframes`
  0%{
      clip-path:polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
      transform:translateY(100%);
      opacity: 1;
  }
  95%{
      transform:translateY(0%);
  }
  100%{
      clip-path:polygon(0% 00%, 100% 0%, 100% 100%, 0% 100%);
      opacity: 1;
  }`;

export const backgroundAnimate = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
