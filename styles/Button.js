import styled from "styled-components";

const Button = styled.div`
  width: auto;
  align-self: center;
  font-size: 2rem;
  background-color: ${(props) => props.theme.bloodRed};
  padding: 0.5rem;
  border: ${(props) => props.theme.border};
  :hover {
    cursor: pointer;
  }
`;

export default Button;
