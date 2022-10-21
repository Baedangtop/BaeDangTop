import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileApi from "../../../core/apis/profile/Profile.api";
import p from "../../../assets/images/p.png";
import pay from "../../../assets/images/pay.png";

const Header = () => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const data = await ProfileApi.getProfile();
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="header">
      <div className="des">
        <div className="title">My Page</div>
        <div className="profile">
          <div className="relative">
            <img className="picture" src={p} />
            {user?.roles[1] === "PURCHASED" && (
              <img className="purchase" src={pay} />
            )}
          </div>
          <div className="name">
            <div className="name__write">{user?.name}</div>
            <div className="mail">{user?.email}</div>
          </div>
          <div className="button">
            <Link to="/payment">
              <button className="modify2">정기 결제하기</button>
            </Link>
            <div>
              <button className="out">탈퇴</button>
              <button className="modify">수정하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
