import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      orange: string;
    };
    md: {
      large: number;
      medium: number;
      small: number;
    };
  }
}
