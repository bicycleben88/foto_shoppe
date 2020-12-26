import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: auto;
  padding: 2rem;
  margin: 0.5rem auto;
  background-color: bisque;
  box-sizing: border-box;
  label {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    border-bottom: ${(props) => props.theme.border};
  }
  input {
    width: 80%;
    padding: 1rem;
    background-color: transparent;
    border: none;
    :focus {
      outline: 0;
    }
  }
  button {
    display: inline-block;
    margin: 0 auto;
  }
`;
export default Form;
