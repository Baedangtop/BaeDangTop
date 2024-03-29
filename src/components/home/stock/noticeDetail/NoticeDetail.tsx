import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import BoardApi from "../../../../core/apis/board/Board.api";
import { ADD_COMMENT } from "../../../../reducers/notice/NoticeReducer";
import NoticeComment from "./NoticeComment";
import NoticeDetailStyle from "./noticeDetail.style";

const NoticeDetail = memo(({ changeToggle, v }: any) => {
  const dispatch = useDispatch();
  const textRef = useRef<HTMLTextAreaElement>();
  const cRef = useRef<HTMLDivElement>();

  const [comment, setComment] = useState([]);

  useEffect(() => {
    getComment();

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const getComment = async () => {
    const comments = await BoardApi.getComment(v);
    setComment(comments);
  };

  const successWriting = useCallback(async () => {
    if (/[^\s]/.test(textRef.current.value)) {
      await BoardApi.postComment(v, textRef.current.value.replace(/^\s/, ""));

      textRef.current.value = "";
      textRef.current.focus();

      window.location.reload();

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
        {comment.map((value: any) => (
          <NoticeComment v={value} />
        ))}
      </div>
      <textarea
        className="comment__input"
        placeholder="댓글을 작성해 주세요"
        maxLength={50}
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
});

export default NoticeDetail;
