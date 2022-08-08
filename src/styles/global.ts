import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body, input, button, span {
    font-family: 'Roboto Condensed', sans-serif;

    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h4, h6, strong {
    font-weight: 700;
    font-family: 'Roboto Condensed', sans-serif;
  }

  a, button {
    font-family: 'Roboto Condensed', sans-serif;
  }
  
  button {
    cursor: pointer;
  }
`;
