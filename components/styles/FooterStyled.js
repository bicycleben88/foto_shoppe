import styled from "styled-components";

const FooterStyled = styled.footer`
  border-top: 1px solid ${(props) => props.theme.white};
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  height: 2rem;
  div {
    float: right;
  }
  a {
    color: ${(props) => props.theme.white};
  }
  button {
    :hover::before {
      background-color: ${(props) => props.theme.white};
    }
  }
`;

export default FooterStyled;
