import React, { memo } from "react";
import HomeStyle from "./home.style";
import logo from "../../assets/image/logo.png";
import Banner from "../common/Banner";
import Assets from "../common/AssetsTemplate";
import Nav from "../common/nav";
import Footer from "../common/Footer";

const Home = memo(() => {
  return (
    <HomeStyle>
      <Nav />
      <img src={logo} alt="" />
      <Banner />
      <Assets />
      <Assets />
      <Footer />
    </HomeStyle>
  );
});

export default Home;
