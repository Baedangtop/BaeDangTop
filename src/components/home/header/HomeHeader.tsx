import React from "react";
import HomeHeaderStyle from "./homeHeader.style";
import logo from "../../../assets/images/logo.png";
import Carousel from "../carousel/Carousel";

const HomeHeader = () => {
  return (
    <HomeHeaderStyle>
      <img src={logo} alt="logo_image" />
      <Carousel />
    </HomeHeaderStyle>
  );
};

export default HomeHeader;
