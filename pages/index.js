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
        topText="pictures"
        middleText="make"
        bottomText="memories"
        image="https://i.imgur.com/XxKyfp9.jpg"
      />
      <Panel
        topText="take"
        middleText="a"
        bottomText="shot"
        image="https://i.imgur.com/ZaTr3kV.jpg"
      />
      <Panel
        topText="every"
        middleText="moment"
        bottomText="lasts"
        image="https://i.imgur.com/HGmUuxn.png"
      />
      <Panel
        topText="stand"
        middleText="in"
        bottomText="close"
        image="https://i.imgur.com/tpFErxl.jpg"
      />
      <Panel
        topText="this"
        middleText="time"
        bottomText="counts"
        image="https://i.imgur.com/hwWPnbz.jpg"
      />
    </PanelsStyles>
  );
}
