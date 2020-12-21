import styled from "styled-components";

const Button = styled.div`
  width: 100px;
  background-color: ${(props) => props.theme.bloodRed};
  padding: 0.5rem;
  border: ${(props) => props.theme.border};
`;

export default Button;
