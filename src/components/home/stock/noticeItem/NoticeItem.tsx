import React, { useCallback, useState } from "react";
import NoticeItemStyle from "./noticeItem.style";

const NoticeItem = () => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <NoticeItemStyle>
      <div className="date">2022.07.27</div>
      <div className="item__title">
        게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목 게시물 제목
      </div>
      <div className="description">
        게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용
        게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용
        게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용
        게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용 게시물 내용
        게시물 내용
      </div>
      <div className="toggle_container">
        <button className="toggle" onClick={changeToggle}>
          +
        </button>
      </div>
      {toggle && <div>loading...</div>}
    </NoticeItemStyle>
  );
};

export default NoticeItem;
