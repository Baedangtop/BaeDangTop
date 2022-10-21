import React, { useEffect, useState } from "react";
import Item from "../../components/home/stock/stockItem/item";
import ProfileApi from "../../core/apis/profile/Profile.api";

const ProfileDetail = () => {
  const [favorite, setFavorite] = useState(null);
  const getFavorite = async () => {
    const data = await ProfileApi.getFavorite();
    setFavorite(data);
  };
  useEffect(() => {
    getFavorite();
  }, []);
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
      {favorite?.list.map((v) => (
        <Item graph={v} />
      ))}
    </div>
  );
};

export default ProfileDetail;
