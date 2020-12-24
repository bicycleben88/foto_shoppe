import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  height: 400px;
  background-image: url("https://i.imgur.com/o9V3d5W.jpg");
  background-size: cover;
  background-position: center;
  color: ${(props) => props.theme.white};
  padding: 0 1rem;
  h1 {
    font-size: 10rem;
    margin: 0;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h1>Ye Olde PhotoShoppe</h1>
    </HeaderStyles>
  );
}
