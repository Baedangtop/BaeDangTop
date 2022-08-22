import React, { useCallback, useEffect } from "react";
import NoticeComment from "./NoticeComment";
import NoticeDetailStyle from "./noticeDetail.style";

const NoticeDetail = ({ changeToggle }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const successWriting = useCallback(() => {
    changeToggle();
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
        <button className="x" onClick={changeToggle}>
          취소
        </button>
        <button className="o" onClick={successWriting}>
          확인
        </button>
      </div>
    </NoticeDetailStyle>
  );
};

export default NoticeDetail;
