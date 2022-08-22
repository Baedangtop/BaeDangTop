import React, { useEffect } from "react";
import styled from "styled-components";
import Info from "./info/Info";
import Search from "./search/Search";
import StockApi from "../../../core/apis/stock/Stock.api";
import StockButton from "./button";
import { useSelector } from "react-redux";

const Stock = () => {
  const { page } = useSelector((state: any) => state.stockReducer);
  useEffect(() => {
    const info = StockApi.getStock(page);
    const code = StockApi.getStockByName("파인테크닉스");
    console.log(info);
    console.log(code);
  }, []);

  return (
    <StockStyle>
      <Search />
      <Info />
      <StockButton />
    </StockStyle>
  );
};

const StockStyle = styled.div`
  width: 792px;
  margin: 0 auto;
  margin-bottom: 100px;
`;

export default Stock;
