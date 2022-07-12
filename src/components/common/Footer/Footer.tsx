import React, { useState } from "react";
import FooterStyle from "./footer.style";

const Footer = () => {
  const [click, setClick] = useState(0);
  return (
    <FooterStyle>
      <div
        onClick={() => (click !== 1 ? setClick(1) : setClick(0))}
        className="t"
      >
        {click === 1 && (
          <div className="show">
            <h3>배당탑 소개</h3>
            <p>
              배당탑닷컴은 국내외 주식의
              <br /> 배당 수익율 TOP 100을 소개합니다.
              <br />
              <br />
              BaeDangTop.com introduces the top 100 dividend yields of domestic
              and foreign stocks.
            </p>
          </div>
        )}
        <div className="circle">
          <div className="box"></div>
        </div>
        <p>배당탑 소개</p>
      </div>
      <div
        onClick={() => (click !== 2 ? setClick(2) : setClick(0))}
        className="t"
      >
        {click === 2 && (
          <div className="show">
            <h3>배당탑 소개</h3>
            <p>
              배당탑닷컴은 국내외 주식의
              <br /> 배당 수익율 TOP 100을 소개합니다.
              <br />
              <br />
              BaeDangTop.com introduces the top 100 dividend yields of domestic
              and foreign stocks.
            </p>
          </div>
        )}
        <div className="circle">
          <div className="box"></div>
        </div>
        <p>진화하는 분석</p>
      </div>
      <div
        onClick={() => (click !== 3 ? setClick(3) : setClick(0))}
        className="t"
      >
        {click === 3 && (
          <div className="show">
            <h3>배당탑 소개</h3>
            <p>
              배당탑닷컴은 국내외 주식의
              <br /> 배당 수익율 TOP 100을 소개합니다.
              <br />
              <br />
              BaeDangTop.com introduces the top 100 dividend yields of domestic
              and foreign stocks.
            </p>
          </div>
        )}
        <div className="circle">
          <div className="box"></div>
        </div>
        <p>손쉬운 사용</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
