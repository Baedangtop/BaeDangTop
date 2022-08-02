import React from "react";
import Item from "../stockItem/Item";
import InfoStyle from "./info.style";

const Info = () => {
  return (
    <InfoStyle>
      <p className="title">
        Top 10 주식
        <span className="title__gray">배당률 높은 순</span>
      </p>
      <Item />
    </InfoStyle>
  );
};

export default Info;
