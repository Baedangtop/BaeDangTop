import React from "react";
import FooterStyle from "./footer.style";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <div className="circle">
          <div className="box"></div>
        </div>
        <p>배당탑 소개</p>
      </div>
      <div>
        <div className="circle">
          <div className="box"></div>
        </div>
        <p>진화하는 분석</p>
      </div>
      <div>
        <div className="circle">
          <div className="box"></div>
        </div>
        <p>손쉬운 사용</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
