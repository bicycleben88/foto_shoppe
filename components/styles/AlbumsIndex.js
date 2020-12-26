import styled from "styled-components";

const AlbumsContainer = styled.div`
  display: flex;
  flex-direction: column;
  .album {
    box-sizing: border-box;
    width: 100%;
    height: auto;
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
`;

export default AlbumsContainer;
