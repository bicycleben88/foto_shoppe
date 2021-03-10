import React from "react";
import styled from "styled-components";
import Panel from "../components/Panel";

const PanelsStyles = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
`;
export default function Home() {
  return (
    <PanelsStyles>
      <Panel
        topText="top"
        middleText="middle"
        bottomText="bottom"
        image="https://i.imgur.com/ZaTr3kV.jpg"
      />
      <Panel
        topText="top"
        middleText="middle"
        bottomText="bottom"
        image="https://i.imgur.com/XxKyfp9.jpg"
      />
      <Panel
        topText="top"
        middleText="middle"
        bottomText="bottom"
        image="https://i.imgur.com/tpFErxl.jpg"
      />
      <Panel
        topText="top"
        middleText="middle"
        bottomText="bottom"
        image="https://i.imgur.com/HGmUuxn.png"
      />
      <Panel
        topText="top"
        middleText="middle"
        bottomText="bottom"
        image="https://i.imgur.com/hwWPnbz.jpg"
      />
    </PanelsStyles>
  );
}
