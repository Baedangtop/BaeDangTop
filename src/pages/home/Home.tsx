import React from "react";
import Calculator from "../../components/home/calculator/Calculator";
import Footer from "../../components/home/footer/Footer";
import HomeHeader from "../../components/home/header/HomeHeader";
import Notice from "../../components/home/stock/notice/Notice";
import Stock from "../../components/home/stock/Stock";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Stock />
      <Notice />
      <Calculator />
      <Footer />
    </div>
  );
};

export default Home;
