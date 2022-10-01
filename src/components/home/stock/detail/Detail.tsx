import React from "react";
import DetailStyle from "./detail.style";

const Detail = ({ item }: any) => {
  return (
    <DetailStyle>
      <div className="allocation">
        <div className="allocation__title">배당</div>
        <div className="allocation__info">
          <p className="allocation__info--payment">
            <div className="allocation__info--payment-title">배당 지급일</div>
            {item.dividendHistories.map((v) => (
              <div className="allocation__info--payment-date">{v.year}</div>
            ))}
          </p>
          <p className="allocation__info--dividend">
            <div className="allocation__info--dividend-title">배당금</div>
            {item.dividendHistories.map((v) => (
              <div className="allocation__info--dividend-date">{v.price}</div>
            ))}
          </p>
        </div>
      </div>
      <div className="current">
        <div className="current__title">현재 보유 내역</div>
        <div className="current__info">
          <div className="currnet__info--detail">
            <div className="currnet__info--detail-logo"></div>
            <div className="currnet__info--detail-title">{item.stockName}</div>
            <div className="currnet__info--detail-number">{item.dividend}</div>
          </div>
          <div className="current__info--graph">
            <div>
              <p>{item.stockType}</p>
              <p>{item.price}</p>
            </div>
            <div>
              <p>수익률</p>
              <p>{item.yield}%</p>
            </div>
            <div>
              <p>배당금</p>
              <p>{item.dividend}</p>
            </div>
          </div>
        </div>
      </div>
    </DetailStyle>
  );
};

export default Detail;
