import styled from "styled-components";

const AlbumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 1rem auto;
  form {
    width: 300px;
    height: 500px;
    position: fixed;
    right: 2rem;
    h1 {
      font-size: 3rem;
    }
    img {
      width: 200px;
    }
  }
  .picture {
    padding: 2rem;
    margin: 0.5rem auto;
    background-color: bisque;
  }
`;

export default AlbumContainer;
