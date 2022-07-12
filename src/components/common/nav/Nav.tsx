import React from "react";
import NavStyle from "./nav.style";
import Chart from "../../../assets/image/Nav/Chart.png";
import Home from "../../../assets/image/Nav/Home.png";
import People from "../../../assets/image/Nav/People.png";
import { useLocation } from "react-router";

const Nav = () => {
  const location = useLocation();
  return (
    <NavStyle>
      <div className="bar">
        <div
          className="loc"
          style={
            location.pathname === "/"
              ? { left: "80px" }
              : location.pathname === "/chart"
              ? { left: "10px" }
              : location.pathname === "/profile"
              ? { left: "150px" }
              : { display: "none" }
          }
        ></div>
        <img src={Chart} alt="" />
        <img src={Home} alt="" />
        <img src={People} alt="" />
      </div>
    </NavStyle>
  );
};

export default Nav;
