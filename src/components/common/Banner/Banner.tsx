import React from "react";
import BannerStyle from "./banner.style";
import test from "../../../assets/image/test.jpeg";

const Banner = () => {
  return (
    <BannerStyle>
      <img src={test} alt="" />
    </BannerStyle>
  );
};

export default Banner;
