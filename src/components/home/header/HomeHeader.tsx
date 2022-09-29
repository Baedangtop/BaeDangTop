import React from "react";
import HomeHeaderStyle from "./homeHeader.style";
import logo from "../../../assets/images/logo.png";
import Carousel from "../carousel/Carousel";

const HomeHeader = () => {
  return (
    <HomeHeaderStyle>
      <div className="flex">
        <img src={logo} alt="logo_image" />
        <div>
          <p>로그아웃</p>
          <img src="" alt="" />
        </div>
      </div>
      <Carousel />
    </HomeHeaderStyle>
  );
};

export default HomeHeader;
