import React from "react";
import styled from "styled-components";

const PanelStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  transition: font-size 0.5s ease-in, flex 0.5s ease-in, background 0.2s;
  font-size: 20px;
  * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 auto;
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
  }
`;

export default function Panel({ topText, middleText, bottomText, image }) {
  const [clicked, setClicked] = React.useState(false);
  const css = {
    panel: {
      flex: clicked ? 5 : 1,
      fontSize: clicked ? "40px" : "20px",
      backgroundImage: `url('${image}')`,
    },
    topText: {
      transform: clicked ? "translateY(0)" : "translateY(-100%)",
    },
    bottomText: {
      transform: clicked ? "translateY(0)" : "translateY(100%)",
    },
  };

  return (
    <PanelStyles style={css.panel} onClick={() => setClicked(!clicked)}>
      <p style={css.topText}>{topText}</p>
      <p>{middleText}</p>
      <p style={css.bottomText}>{bottomText}</p>
    </PanelStyles>
  );
}
