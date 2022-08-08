import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      secundary: string;
      tertiary: string;

      text: string;
      input: string;
      border: string;
    };
  }
}
