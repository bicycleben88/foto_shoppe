import styled from "styled-components";

const Loader = styled.div`
  width: 100%;
  height: 0.5rem;
  background-color: ${(props) => props.theme.bloodRed};
  animation: load 3s linear;
  position: relative;
  p {
    /* position: absolute;
    right: -34px;
    top: -7px;
    margin: 0; */
    text-align: right;
  }
  @keyframes load {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export default Loader;
