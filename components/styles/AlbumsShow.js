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
    background-color: rgba(0, 0, 0, 0.2);
    color: ${(props) => props.theme.white};
    .links {
      display: flex;
      button {
        background-color: transparent;
        color: ${(props) => props.theme.white};
        border: none;
        padding: 0.5rem;
        font-size: 2rem;
        position: relative;
        ::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0.1rem;
          bottom: 0;
          left: 0;
          background-color: ${(props) => props.theme.white};
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s ease-in-out 0s;
        }
        :hover::before {
          visibility: visible;
          transform: scaleX(1);
        }
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
