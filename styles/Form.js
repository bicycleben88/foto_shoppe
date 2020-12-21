import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  min-height: 300px;
  margin: 0.5rem auto;
  background-color: bisque;
  box-shadow: 0px 1px 5px 1px darkred;
  label {
    display: block;
  }
  input,
  textarea {
    width: 100%;
  }
  button {
    width: 100px;
  }
`;
export default Form;
