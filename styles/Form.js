import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  min-height: 300px;
  padding: 2rem;
  margin: 0.5rem auto;
  background-color: bisque;
  box-shadow: ${(props) => props.theme.shadow};
  label {
    display: flex;
    justify-content: space-between;
  }
  input {
    width: 80%;
    padding: 1rem;
    background-color: transparent;
    border: none;
    text-align: center;
    border-bottom: ${(props) => props.theme.border};
  }
`;
export default Form;
