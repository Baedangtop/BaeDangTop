import React from "react";
import Item from "../stockItem/item";
import InfoStyle from "./info.style";

const Info = () => {
  return (
    <InfoStyle>
      <p className="title">
        Top 10 주식
        <span className="title__gray">수익률 높은 순</span>
      </p>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </InfoStyle>
  );
};

export default Info;
