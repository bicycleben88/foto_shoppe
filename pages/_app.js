import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
import "../components/styles/styles.css";

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

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
