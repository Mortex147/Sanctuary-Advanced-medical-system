/* eslint-disable @next/next/no-page-custom-font */
import { AppProps } from "next/app";
import "../styles/globals.scss";
import "../styles/navbar.scss";
import "../styles/index.module.scss";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "styled-components";
const theme = {
  colors: {
    primary: "#FFFFFF",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>  
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap"
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
