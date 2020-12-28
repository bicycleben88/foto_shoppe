import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Page = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
`;
const InnerPage = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 95%;
  padding-bottom: 2rem;
  .background-image {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    z-index: -1;
  }
`;

export default function Layout(props) {
  return (
    <Page>
      <Header />
      <InnerPage>
        <img
          src="https://i.imgur.com/Scwd8cd.jpg?1"
          alt="Picture Frame"
          className="background-image"
        />
        {props.children}
      </InnerPage>
      <Footer />
    </Page>
  );
}
