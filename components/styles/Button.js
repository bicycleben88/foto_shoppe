import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.black};
  border: none;
  padding: 0.5rem;
  font-size: 2rem;
  position: relative;
  :hover {
    cursor: pointer;
  }
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.1rem;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.theme.black};
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }
  :hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
`;

export default Button;
