import "../styles/globals.css";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

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
    width: 95%;
    margin: 0 auto;
  }
  h1, h2, h3, h4, h5, h6{
    font-family: 'Langar', cursive;
  }
  body {
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

export default MyApp;
