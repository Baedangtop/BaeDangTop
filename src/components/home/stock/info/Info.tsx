import React, { useEffect, useState } from "react";
import BoardApi from "../../../../core/apis/board/Board.api";
import Item from "../stockItem/item";
import InfoStyle from "./info.style";

const Info = ({ list }) => {
  // const [stock, setStock] = useState([]);
  // useEffect(() => {
  //   getStock();
  // }, []);
  // useEffect(() => {
  //   // console.log(stock);
  // }, [stock]);

  // const getStock = async () => {
  //   const value = await BoardApi.getBoards();
  //   setStock(value);
  // };

  return (
    <InfoStyle>
      <p className="title">
        Top 10 주식
        <span className="title__gray">수익률 높은 순</span>
      </p>
      {list.map((v) => (
        <Item graph={v} />
      ))}
    </InfoStyle>
  );
};

export default Info;
