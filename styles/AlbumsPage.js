import styled from "styled-components";

const AlbumsContainer = styled.div`
  display: flex;
  width: 95%;
  box-shadow: ${(props) => props.theme.shadow};
  .album {
    width: 300px;
    height: 500px;
    background-color: ${(props) => props.theme.white};
  }
`;

export default AlbumsContainer;
