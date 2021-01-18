import styled from "styled-components";

const AlbumContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 100%;
  }
  .picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: ${(props) => props.theme.border};
    padding: 1rem;
    margin: 0.5rem auto 0 auto;
    background-color: ${(props) => props.theme.white};
    width: 50%;
    text-align: center;
    @media (max-width: 800px) {
      width: 100%;
    }
    button {
      padding-top: 0.5rem;
    }
  }
`;

export default AlbumContainer;
