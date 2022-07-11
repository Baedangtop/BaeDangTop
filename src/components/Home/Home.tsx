import React from "react";
import HomeStyle from "./home.style";
import logo from "../../assets/image/logo.png";

const Home = () => {
  return (
    <HomeStyle>
      <img src={logo} alt="" />
    </HomeStyle>
  );
};

export default Home;
