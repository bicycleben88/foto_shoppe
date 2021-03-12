import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Langar", cursive;
    src: url("https://fonts.googleapis.com/css2?family=Langar&display=swap");
  }
  @font-face {
    font-family: "Open Sans Condensed", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap");
  }
  * {
    box-sizing: border-box;
  }
  :root {
    --black: #190901;
    --bloodRed: #8a0303;
    --burntOrange: #de4905;
    --grey: #c7c5c2;
    --white: #fafafa;
    --border: 2px solid #de4905;
    --shadow: 1px 1px 1px 0 #190901;
  }
  html {
    font-size: 10px;
    background-color: var(--black);
    width: 95%;
    margin: 0 auto;
  }
  h1 {
    font-family: "Langar", cursive;
  }
  body {
    min-height: 100vh;
    color: var(--black);
    font-family: "Open Sans Condensed", sans-serif;
    font-size: 1.5rem;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
`;

const Page = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  position: relative;
`;
const InnerPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export default function Layout(props) {
  return (
    <Page>
      <GlobalStyles />
      <Header />
      <InnerPage>{props.children}</InnerPage>
    </Page>
  );
}
