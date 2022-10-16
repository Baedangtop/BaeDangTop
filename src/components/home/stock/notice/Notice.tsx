import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardApi from "../../../../core/apis/board/Board.api";
import { CHANGE_NOTICE } from "../../../../reducers/notice/NoticeReducer";
import NoticeItem from "../noticeItem/NoticeItem";
import NoticeStyle from "./notice.style";
import NoticeModal from "./NoticeModal";

const Notice = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const changeShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const [kategory, setKategory] = useState("NOTICE");

  const changeKategory = (str: string) => {
    setKategory(str);
  };

  const { item } = useSelector((state: any) => state.NoticeReducer);

  useEffect(() => {
    changeNotice();
  }, [kategory]);

  const changeNotice = async () => {
    const value = await BoardApi.getBoards(kategory);
    dispatch({
      type: CHANGE_NOTICE,
      data: value,
    });
  };

  return (
    <NoticeStyle>
      <p className="title">
        <div className="title__name">게시판</div>
        <div className="title__info">
          <div className="title__info--modify" onClick={changeShow}></div>
          <div
            className={
              kategory === "NOTICE"
                ? "title__info--free"
                : "title__info--notice"
            }
            onClick={() => changeKategory("NOTICE")}
          >
            공지
          </div>
          <div
            className={
              kategory === "FREE" ? "title__info--free" : "title__info--notice"
            }
            onClick={() => changeKategory("FREE")}
          >
            자유게시판
          </div>
          <div
            className={
              kategory === "EXPERT"
                ? "title__info--free"
                : "title__info--notice"
            }
            onClick={() => changeKategory("EXPERT")}
          >
            전문가 컬럼
          </div>
        </div>
      </p>
      <div className="notice--container">
        {item.map((v: any) => (
          <NoticeItem v={v} />
        ))}
      </div>
      {show && (
        <NoticeModal
          changeShow={changeShow}
          kategory={kategory}
          changeNotice={changeNotice}
        />
      )}
    </NoticeStyle>
  );
};

export default Notice;
