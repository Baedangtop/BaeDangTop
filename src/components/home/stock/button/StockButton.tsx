import React, { useCallback, useState } from "react";
import ButtonItem from "./ButtonItem";
import StockButtonStyle from "./stockButton.style";

const StockButton = () => {
  const [page, setPage] = useState(1);
  const changeMaxStartPage = useCallback(() => {
    setPage(1);
  }, []);
  const changeStartPage = useCallback(() => {
    setPage((prev) => (prev > 1 ? prev - 5 : prev));
  }, []);
  const changeMaxEndPage = useCallback(() => {
    setPage(116);
  }, []);
  const changeEndPage = useCallback(() => {
    setPage((prev) => (prev < 116 ? prev + 5 : prev));
  }, []);

  return (
    <StockButtonStyle>
      <ButtonItem des="<<" changePage={changeMaxStartPage} />
      <ButtonItem des="<" changePage={changeStartPage} />
      {[0, 1, 2, 3, 4].map((v, idx) => (
        <ButtonItem key={idx} des={page + v} changePage={changeStartPage} />
      ))}
      <ButtonItem des=">" changePage={changeEndPage} />
      <ButtonItem des=">>" changePage={changeMaxEndPage} />
    </StockButtonStyle>
  );
};

export default StockButton;
