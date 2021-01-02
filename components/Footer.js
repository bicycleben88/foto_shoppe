import React from "react";
import FooterStyled from "../components/styles/FooterStyled";
import Button from "../components/styles/Button";

const Footer = (props) => {
  return (
    <FooterStyled>
      <div>
        <Button>
          <a href="https://github.com/bicycleben88/photo_album" target="#">
            Git
          </a>
        </Button>
        <Button>
          <a
            href="https://www.linkedin.com/in/benjamin-alt-higginbotham/"
            target="#"
          >
            /in
          </a>
        </Button>
      </div>
    </FooterStyled>
  );
};

export default Footer;
