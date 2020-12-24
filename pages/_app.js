import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Page from "../components/Page";

const queryClient = new QueryClient();

const theme = {
  bloodRed: "#8a0303",
  burntOrange: "#de4905",
  black: "#190901",
  grey: "#c7c5c2",
  white: "#fafafa",
  border: "2px solid #de4905",
  shadow: "1px 1px 1px 0 #190901",
};

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Langar', cursive;
      src: url('https://fonts.googleapis.com/css2?family=Langar&display=swap');
    } 
    @font-face {
      font-family: 'Open Sans Condensed', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap');
    }
    html {
      box-sizing: border-box;
      font-size: 10px;
      background-color: ${theme.black}
    }
    h1, h2, h3, h4, h5, h6{
      font-family: 'Langar', cursive;
    }
    body {
      width: 95%;
      margin: 0 auto;
      color: ${theme.black};
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 1.5rem;
    } a {
      text-decoration: none;
      color: ${theme.black};
    }
  `;

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
