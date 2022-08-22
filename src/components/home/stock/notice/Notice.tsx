import React, { useCallback, useState } from "react";
import NoticeItem from "../noticeItem/NoticeItem";
import NoticeStyle from "./notice.style";
import NoticeModal from "./NoticeModal";

const Notice = () => {
  const [show, setShow] = useState(false);
  const changeShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <NoticeStyle>
      <p className="title">
        <div className="title__name">게시판</div>
        <div className="title__info">
          <div className="title__info--modify" onClick={changeShow}></div>
          <div className="title__info--notice">공지</div>
          <div className="title__info--free">자유게시판</div>
        </div>
      </p>
      <div className="notice--container">
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
      </div>
      {show && <NoticeModal />}
    </NoticeStyle>
  );
};

export default Notice;
