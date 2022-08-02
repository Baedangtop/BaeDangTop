import React from "react";
import NoticeItem from "../noticeItem/NoticeItem";
import NoticeStyle from "./notice.style";

const Notice = () => {
  return (
    <NoticeStyle>
      <p className="title">
        <div className="title__name">게시판</div>
        <div className="title__info">
          <div className="title__info--modify"></div>
          <div className="title__info--notice">공지</div>
          <div className="title__info--free">자유게시판</div>
        </div>
      </p>
      <NoticeItem />
      <NoticeItem />
      <NoticeItem />
    </NoticeStyle>
  );
};

export default Notice;
