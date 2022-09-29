import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="des">
        <div className="title">My Page</div>
        <div className="profile">
          <div className="picture"></div>
          <div className="name">
            <div className="name__write">배당탑</div>
            <div className="mail">baedangtop@naver.com</div>
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
