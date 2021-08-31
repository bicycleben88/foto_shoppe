import styled from "styled-components";

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
  .album {
    border-top: var(--border);
    height: auto;
    margin: 0.5rem auto;
    width: 70%;
    padding: 2rem;
    text-align: center;
    background-color: var(--white);
    margin-bottom: 0.5rem;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  button {
    color: var(--black);
    :hover {
      background-color: transparent;
    }
    :hover::before {
      background-color: var(--black);
    }
  }
  .edit-form {
    background-color: var(--black);
    label,
    input,
    button {
      color: var(--white);
    }
    button {
      :hover::before {
        background-color: var(--white);
      }
    }
  }
  .edit-form,
  .edit-form > label {
    border-bottom: 1px solid var(--white);
  }
`;

export default AlbumsContainer;
