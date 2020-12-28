import styled from "styled-components";

const Home = styled.div`
  color: ${(props) => props.theme.white};
  box-sizing: border-box;
  h2 {
    font-size: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    text-transform: uppercase;
    padding: 1rem;
    text-align: center;
  }
  h4 {
    animation: glow 5s infinite;
  }
  .photo-container {
    display: flex;
    justify-content: center;
    animation: fade-in 4s 0.5s linear forwards;
    transform-origin: bottom;
    opacity: 0;
    @media (max-width: 800px) {
      flex-direction: column;
      height: auto;
      align-items: center;
    }
  }
  .photo {
    display: inline-block;
    background-image: url("https://i.imgur.com/Nhnyxqx.jpg?1");
    background-size: contain;
    background-repeat: no-repeat;
    border: 20px solid ${(props) => props.theme.white};
    width: 200px;
    height: 200px;
  }
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    70% {
      opacity: 1;
    }
    to {
      opacity: 0.4;
    }
  }
  @keyframes glow {
    from {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0.4;
    }
  }
`;

export default Home;
