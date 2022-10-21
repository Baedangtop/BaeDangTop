import React from "react";
import HomeHeaderStyle from "./homeHeader.style";
import logo from "../../../assets/images/logo.png";
import Carousel from "../carousel/Carousel";
import { Link } from "react-router-dom";
import p from "../../../assets/images/p.png";

const HomeHeader = () => {
  return (
    <HomeHeaderStyle>
      <div className="flex">
        <img src={logo} alt="logo_image" />
        <div>
          <p>로그아웃</p>
          <Link to="/profile">
            <img src={p} alt="" />
          </Link>
        </div>
      </div>
      <Carousel />
    </HomeHeaderStyle>
  );
};

export default HomeHeader;
