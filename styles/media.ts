import { css, CSSObject, SimpleInterpolation } from "styled-components";

type DeviceType = "large" | "medium" | "small" | "xSmall";

const sizes: Record<DeviceType, number> = {
  large: 1300,
  medium: 1000,
  small: 680,
  xSmall: 480,
};

const media = Object.entries(sizes).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (
      first: CSSObject | TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ) => css`
      @media (max-width: ${value}px) {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {}) as Record<DeviceType, any>;

export { media };
