import React from "react";
import ButtonItem from "./ButtonItem";
import StockButtonStyle from "./stockButton.style";

const StockButton = () => {
  return (
    <StockButtonStyle>
      <ButtonItem des="<<" />
      <ButtonItem des="<" />
      <ButtonItem des="1" />
      <ButtonItem des="2" />
      <ButtonItem des="3" />
      <ButtonItem des="4" />
      <ButtonItem des="5" />
      <ButtonItem des=">" />
      <ButtonItem des=">>" />
    </StockButtonStyle>
  );
};

export default StockButton;
