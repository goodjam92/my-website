import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      orange: string;
    };
    md: {
      desktop: number;
      tablet: number;
      phone: number;
    };
  }
}
