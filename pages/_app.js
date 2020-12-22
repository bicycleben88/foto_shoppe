import React from "react";
import "../styles/globals.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

export const GlobalContext = React.createContext(null);

const theme = {
  bloodRed: "#8a0303",
  burntOrange: "#de4905",
  black: "#190901",
  grey: "#c7c5c2",
  white: "#fafafa",
  border: "2px solid #de4905",
  shadow: "1px 1px 1px 0 #190901",
};

const Container = styled.div`
  color: ${(props) => props.theme.black};
  background-color: rgba(138, 3, 3, 0.4);
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  overflow: hidden;
`;

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
    position: relative;
    min-height: 100%;
    background-image: url('https://i.imgur.com/o9V3d5W.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Langar', cursive;
  }
  body {
    height: 100%;
    margin: 0 auto;
    color: ${theme.black};
    font-family: 'Open Sans Condensed', sans-serif;
    line-height: 1.5rem;
    font-size: 1.5rem;
  } a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

function MyApp({ Component, pageProps }) {
  const [globalState, setGlobalState] = React.useState({
    url: "http://localhost:3000/api",
  });
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
