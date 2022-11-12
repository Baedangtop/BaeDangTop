import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Info from "./info/Info";
import Search from "./search/Search";
import StockApi from "../../../core/apis/stock/Stock.api";
import StockButton from "./button";
import { useSelector } from "react-redux";

const Stock = () => {
  const { page } = useSelector((state: any) => state.stockReducer);
  const [list, setList] = useState<any>([]);
  useEffect(() => {
    getList();
  }, [page]);

  const getList = async () => {
    const info = await StockApi.getStock(page);
    setList(info);
  };

  const searchList = async (e: any, name: string) => {
    e.preventDefault();

    if (name == "") {
      alert("입력해주세요");
      return;
    }

    const item = await StockApi.getStockByName(name);
    if (!item) {
      return;
    }
    setList([item]);
  };

  return (
    <StockStyle>
      <Search searchList={searchList} />
      <Info list={list} />
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
