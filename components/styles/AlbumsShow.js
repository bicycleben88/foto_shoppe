import styled from "styled-components";

const AlbumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 1rem auto;
  padding-bottom: 2rem;
  .picture {
    box-sizing: border-box;
    border-top: ${(props) => props.theme.border};
    padding: 2rem;
    margin: 0.5rem auto;
    background-color: ${(props) => props.theme.white};
    width: 50%;
    text-align: center;
    button {
      padding-top: 0.5rem;
    }
  }
`;

export default AlbumContainer;
