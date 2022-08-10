import React from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import Modal from "react-modal";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";
Modal.setAppElement("#__next");

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
