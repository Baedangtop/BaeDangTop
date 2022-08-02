import React from "react";
import FooterStyle from "./footer.style";
import logo from "../../../assets/images/logoWhite.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="des">
        <img src={logo} alt="footer" />
        <div className="producer">
          <div className="people">
            <div className="name">최유민</div>
            <div className="mail">choi.you.min@gmail.com</div>
          </div>
          <div className="people">
            <div className="name">김주형</div>
            <div className="mail">ak77_@naver.com</div>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;
