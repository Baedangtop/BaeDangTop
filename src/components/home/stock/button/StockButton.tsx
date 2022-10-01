import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CHANGE_END_PAGE,
  CHANGE_MAX_START_PAGE,
  CHANGE_START_PAGE,
  CHANGE_MAX_END_PAGE,
  CHANGE_PAGE,
} from "../../../../reducers/stock/stockReducers";
import ButtonItem from "./ButtonItem";
import StockButtonStyle from "./stockButton.style";

const StockButton = () => {
  const page = useSelector((state: any) => state.stockReducer.page);
  const dispatch = useDispatch();
  const changeMaxStartPage = useCallback(() => {
    dispatch({
      type: CHANGE_MAX_START_PAGE,
    });
  }, []);
  const changeStartPage = useCallback(() => {
    dispatch({
      type: CHANGE_START_PAGE,
    });
  }, []);
  const changeMaxEndPage = useCallback(() => {
    dispatch({
      type: CHANGE_MAX_END_PAGE,
    });
  }, []);
  const changeEndPage = useCallback(() => {
    dispatch({
      type: CHANGE_END_PAGE,
    });
  }, []);

  const changePage = (page: any) => {
    dispatch({
      type: CHANGE_PAGE,
      data: page,
    });
  };

  return (
    <StockButtonStyle>
      <ButtonItem des="<<" changePage={changeMaxStartPage} />
      <ButtonItem des="<" changePage={changeStartPage} />
      {[0, 1, 2, 3, 4].map((v, idx) => (
        <ButtonItem
          key={idx}
          des={page + v}
          idx={idx}
          changePage={() => changePage(page + v)}
        />
      ))}
      <ButtonItem des=">" changePage={changeEndPage} />
      <ButtonItem des=">>" changePage={changeMaxEndPage} />
    </StockButtonStyle>
  );
};

export default StockButton;
