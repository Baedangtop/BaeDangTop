import React from "react";
import styled from "styled-components";
import Info from "./info/Info";
import Search from "./search/Search";

const Stock = () => {
  return (
    <StockStyle>
      <Search />
      <Info />
    </StockStyle>
  );
};

const StockStyle = styled.div`
  width: 792px;
  margin: 0 auto;
`;

export default Stock;
