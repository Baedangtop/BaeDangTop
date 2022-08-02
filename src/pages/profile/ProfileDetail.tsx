import React from "react";
import Item from "../../components/home/stock/stockItem/item";

const ProfileDetail = () => {
  return (
    <div className="pf">
      <div className="title">
        <div className="one">
          <div className="name">내 자산</div>
          <div className="price">
            530.36 <span>(24.36%)</span>
          </div>
        </div>
        <div className="two">
          <div className="name">내 배당금</div>
          <div className="price">
            265.18 <span>(1년 기준)</span>
          </div>
        </div>
      </div>
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ProfileDetail;
