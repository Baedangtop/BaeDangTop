import React, { useCallback, useState } from "react";
import NoticeDetail from "../noticeDetail/NoticeDetail";
import NoticeItemStyle from "./noticeItem.style";

const NoticeItem = ({ v }) => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return (
    <NoticeItemStyle>
      <div className="date">
        <div>{v.date}</div>
        <button className="toggle" onClick={changeToggle}>
          +
        </button>
      </div>
      <div className="notice--image">
        <img src={v.image} />
      </div>
      <div className="item__title">{v.title}</div>
      <div className="description">{v.description}</div>
      {toggle && <NoticeDetail changeToggle={changeToggle} />}
    </NoticeItemStyle>
  );
};

export default NoticeItem;
