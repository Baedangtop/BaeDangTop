import React from "react";
import DetailStyle from "./detail.style";

const Detail = () => {
  return (
    <DetailStyle>
      <div className="allocation">
        <div className="allocation__title">배당</div>
        <div className="allocation__info">
          <p className="allocation__info--payment">
            <div className="allocation__info--payment-title">배당 지급일</div>
            <div className="allocation__info--payment-date">2022.06.12</div>
            <div className="allocation__info--payment-date">2022.06.12</div>
            <div className="allocation__info--payment-date">2022.06.12</div>
          </p>
          <p className="allocation__info--dividend">
            <div className="allocation__info--dividend-title">배당금</div>
            <div className="allocation__info--dividend-date">2.12</div>
            <div className="allocation__info--dividend-date">2.12</div>
            <div className="allocation__info--dividend-date">2.12</div>
          </p>
        </div>
      </div>
      <div className="current">
        <div className="current__title">현재 보유 내역</div>
        <div className="current__info">
          <div className="currnet__info--detail">
            <div className="currnet__info--detail-logo"></div>
            <div className="currnet__info--detail-title">Microsoft</div>
            <div className="currnet__info--detail-number">149.24</div>
          </div>
          <div className="current__info--graph"></div>
        </div>
      </div>
    </DetailStyle>
  );
};

export default Detail;
