import styled from "styled-components";

const GitSyled = styled.div`
  color: ${(props) => props.theme.white};
  text-align: center;
  position: relative;
  margin: 0.5rem auto;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: ${(props) => props.theme.white};
    transform: scaleY(0);
    transform-origin: bottom left;
    transition: transform 0.2s;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 3px;
    height: 100%;
    background-color: ${(props) => props.theme.white};
    transform: scaleY(0);
    transform-origin: top right;
    transition: transform 0.2s 0.2s;
  }
  .inner {
    margin: 0;
    padding: 1rem;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: ${(props) => props.theme.white};
      transform: scaleX(0);
      transform-origin: top left;
      transition: transform 0.2s 0.3s;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 0.2rem;
      background-color: ${(props) => props.theme.white};
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.2s 0.1s;
    }
  }
  &:hover {
    cursor: pointer;
    &:before {
      transform: scaleY(1);
      transition: transform 0.2s 0.3s;
    }

    &:after {
      transform: scaleY(1);
      transition: transform 0.2s 0.1s;
    }
    .inner {
      &:before {
        transform: scaleX(1);
        transition: transform 0.2s;
      }

      &:after {
        transform: scaleX(1);
        transition: transform 0.2s 0.2s;
      }
    }
  }
`;

const Git = (props) => {
  return (
    <GitSyled onClick={props.clickFunction}>
      <h3 className="inner">{props.text}</h3>
    </GitSyled>
  );
};

export default Git;
