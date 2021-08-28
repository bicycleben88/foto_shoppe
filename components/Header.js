import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import LoginStyled from "./styles/LoginButtons";

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
  const [session] = useSession();

  return (
    <HeaderStyles>
      <Link href="/albums">
        <a>
          <h1>foto.</h1>
          <h1>SHOPPE.</h1>
        </a>
      </Link>
      {!session && (
        <LoginStyled onClick={() => signIn("github")}>
          <h3 className="inner">Connect with Git to Create Content</h3>
        </LoginStyled>
      )}
      {session && (
        <LoginStyled onClick={() => signOut()}>
          <div className="inner">
            <p>Heyo {session.user.name}! Click the banner to get started!</p>
            <h3>Log Out</h3>
          </div>
        </LoginStyled>
      )}
    </HeaderStyles>
  );
}
