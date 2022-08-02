import React from "react";
import Calculator from "../../components/home/calculator/Calculator";
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
    </div>
  );
};

export default Home;
