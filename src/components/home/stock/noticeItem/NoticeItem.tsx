import React, { memo, useCallback, useEffect, useState } from "react";
import BoardApi from "../../../../core/apis/board/Board.api";
import NoticeDetail from "../noticeDetail/NoticeDetail";
import NoticeItemStyle from "./noticeItem.style";

const NoticeItem = memo(({ v }: any) => {
  const [toggle, setToggle] = useState(false);

  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const [image, setImage] = useState(null);

  const changeImage = async () => {
    const value = await BoardApi.getImage(v.attachment_urls[0]);
    setImage(value);
  };

  useEffect(() => {
    changeImage();
  }, []);

  return (
    <NoticeItemStyle>
      <div className="date">
        <div>{v.created_at}</div>
        <button className="toggle" onClick={changeToggle}>
          +
        </button>
      </div>
      <div className="notice--image">
        <img src={image} />
      </div>
      <div className="item__title">{v.title}</div>
      <div className="description">{v.content}</div>
      {toggle && <NoticeDetail changeToggle={changeToggle} v={v} />}
    </NoticeItemStyle>
  );
});

export default NoticeItem;
