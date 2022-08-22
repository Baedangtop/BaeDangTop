import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT } from "../../../../reducers/notice/NoticeReducer";
import NoticeComment from "./NoticeComment";
import NoticeDetailStyle from "./noticeDetail.style";

const NoticeDetail = ({ changeToggle, v }) => {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLTextAreaElement>();
  const cRef = useRef<HTMLDivElement>();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const successWriting = useCallback(async () => {
    if (textRef.current.value !== "") {
      await dispatch({
        type: ADD_COMMENT,
        data: {
          id: v.id,
          image: null,
          writing: textRef.current.value,
        },
      });
      textRef.current.value = "";
      textRef.current.focus();

      cRef.current.scrollTo(0, cRef.current.clientHeight + 72);
    }
  }, []);

  useEffect(() => {
    const modal = document.getElementById("m");
    modal.style.top = `${window.scrollY + 212}px`;
  }, []);

  return (
    <NoticeDetailStyle id="m">
      <div className="c" ref={cRef}>
        {v.comment.map((value: any) => (
          <NoticeComment v={value} />
        ))}
      </div>
      <textarea
        className="comment__input"
        placeholder="댓글을 작성해 주세요"
        ref={textRef}
      />
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
