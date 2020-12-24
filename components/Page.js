import React from "react";
import Header from "../components/Header";

const Container = styled.div`
  color: ${(props) => props.theme.black};
  background-color: rgba(138, 3, 3, 0.4);
`;

export default function Page(props) {
  return (
    <Container>
      <Header />
      <main>{props.children}</main>
    </Container>
  );
}
