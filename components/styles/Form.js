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
    margin-bottom: 1rem;
  }
  input {
    width: 80%;
    padding: 1rem;
    background-color: transparent;
    border: none;
    border-bottom: ${(props) => props.theme.border};
    :focus {
      outline: 0;
    }
  }
  input[type="file"] {
    border: none;
    padding: 0;
    width: auto;
  }
`;
export default Form;
