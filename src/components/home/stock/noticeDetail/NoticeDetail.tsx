import React, { useEffect } from "react";
import NoticeComment from "./NoticeComment";
import NoticeDetailStyle from "./noticeDetail.style";

const NoticeDetail = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <NoticeDetailStyle>
      <div className="c">
        <NoticeComment />
        <NoticeComment />
        <NoticeComment />
      </div>
      <textarea className="comment__input" placeholder="댓글을 작성해 주세요" />
      <div className="button__container">
        <button className="x">취소</button>
        <button className="o">확인</button>
      </div>
    </NoticeDetailStyle>
  );
};

export default NoticeDetail;
