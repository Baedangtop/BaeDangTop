import React from "react";
import Plus from "../../../assets/image/Home/Plus";
import AssetsStyle from "./assets.style";

const Assets = () => {
  return (
    <AssetsStyle>
      <div className="title">
        <h2>내 자산</h2>
        <div className="plus">
          <Plus />
        </div>
      </div>
      <div className="main">
        <div className="each"></div>
        <div className="each"></div>
      </div>
    </AssetsStyle>
  );
};

export default Assets;
