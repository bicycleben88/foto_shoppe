import React from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderStyles = styled.header`
  height: auto;
  border-bottom: 1px solid var(--white);
  padding: 0 1rem;
  h1 {
    font-size: 10rem;
    margin: 0;
    @media (max-width: 700px) {
      font-size: 5rem;
      text-align: center;
    }
  }
  a {
    color: var(--white);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <Link href="/albums">
        <a>
          <h1>foto.</h1>
          <h1>SHOPPE.</h1>
        </a>
      </Link>
      <Link href="/albums">Click Here to Create a New Album</Link>
    </HeaderStyles>
  );
}
