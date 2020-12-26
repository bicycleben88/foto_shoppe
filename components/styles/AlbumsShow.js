import styled from "styled-components";

const AlbumContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 1rem auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    color: ${(props) => props.theme.white};
    .links {
      display: flex;
    }
    @media (max-width: 700px) {
      flex-direction: column;
      .links {
        flex-direction: column;
        text-align: center;
      }
    }
  }
  .picture {
    border-top: ${(props) => props.theme.border};
    padding: 2rem;
    margin: 0.5rem auto;
    background-color: bisque;
    width: 50%;
  }
`;

export default AlbumContainer;
