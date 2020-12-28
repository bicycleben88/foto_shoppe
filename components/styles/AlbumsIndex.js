import styled from "styled-components";

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
  .album {
    box-sizing: border-box;
    border-top: ${(props) => props.theme.border};
    width: 60%;
    height: auto;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    background-color: ${(props) => props.theme.white};
    margin-bottom: 0.5rem;
  }
  button {
    color: ${(props) => props.theme.black};
    :hover {
      background-color: transparent;
    }
    :hover::before {
      background-color: ${(props) => props.theme.black};
    }
  }
  .edit-form {
    background-color: ${(props) => props.theme.black};
    label,
    input,
    button {
      color: ${(props) => props.theme.white};
    }
    button {
      :hover::before {
        background-color: ${(props) => props.theme.white};
      }
    }
  }
  .edit-form,
  .edit-form > label {
    border-bottom: 1px solid ${(props) => props.theme.white};
  }
`;

export default AlbumsContainer;
