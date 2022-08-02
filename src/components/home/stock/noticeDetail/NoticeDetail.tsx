import React from "react";
import NoticeComment from "./NoticeComment";
import NoticeDetailStyle from "./noticeDetail.style";

const NoticeDetail = () => {
  return (
    <NoticeDetailStyle>
      <NoticeComment />
      <NoticeComment />
      <NoticeComment />
      <div className="comment__input">
        <input type="text" />
        <span></span>
      </div>
    </NoticeDetailStyle>
  );
};

export default NoticeDetail;
