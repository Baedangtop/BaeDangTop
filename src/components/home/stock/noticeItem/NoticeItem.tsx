import React, { useCallback, useState } from "react";
import NoticeDetail from "../noticeDetail/NoticeDetail";
import NoticeItemStyle from "./noticeItem.style";

const NoticeItem = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <NoticeItemStyle>
      <div className="date">
        <div>2022.07.27</div>
        <button className="toggle" onClick={changeToggle}>
          +
        </button>
      </div>
      <div className="notice--image"></div>
      <div className="item__title">게시물 제목 게시물 제목</div>
      <div className="description">
        게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용
      </div>
      {toggle && <NoticeDetail />}
    </NoticeItemStyle>
  );
};

export default NoticeItem;
