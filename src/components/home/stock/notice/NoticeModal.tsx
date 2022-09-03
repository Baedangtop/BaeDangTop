import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import BoardApi from "../../../../core/apis/board/Board.api";
import { ADD_NOTICE } from "../../../../reducers/notice/NoticeReducer";

const NoticeModal = memo(({ changeShow }: any) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState<string>();
  const titleRef = useRef<HTMLInputElement>();
  const desRef = useRef<HTMLTextAreaElement>();
  const dispatch = useDispatch();

  const changeImage = useCallback((e: any) => {
    let file = e.target.files[0];
    setImage(file);
    const currentImageUrl = URL.createObjectURL(file);
    setPreview(currentImageUrl);
  }, []);

  const addPostNotice = useCallback(() => {
    if (/[^\s]/.test(titleRef.current.value)) {
      const date = new Date();
      BoardApi.postBoards(
        preview,
        titleRef.current.value,
        desRef.current.value
      );

      dispatch({
        type: ADD_NOTICE,
        data: {
          date:
            date.getFullYear() +
            "." +
            (date.getMonth() + 1) +
            "." +
            date.getDate(),
          image: preview,
          title: titleRef.current.value,
          description: desRef.current.value,
          comment: [],
        },
      });
      changeShow();
    }
  }, [dispatch, preview]);

  useEffect(() => {
    const modal = document.getElementById("m");
    modal.style.top = `${window.scrollY}px`;
    console.log(window.scrollY);
  }, []);

  const modalRef = useRef<HTMLDivElement>();

  return (
    <div className="modal" ref={modalRef} id="m">
      <div className="picture">
        <div className="preview">
          <img src={preview} />
        </div>
        <div className="choose">
          <input type="file" onChange={changeImage} />
        </div>
      </div>
      <input
        className="title"
        placeholder="게시물 제목을 작성해 주세요"
        ref={titleRef}
        maxLength={20}
      ></input>
      <textarea
        className="description"
        placeholder="게시물 내용을 작성해 주세요"
        ref={desRef}
        maxLength={60}
      ></textarea>
      <div className="button__container">
        <button className="x" onClick={changeShow}>
          취소
        </button>
        <button className="o" onClick={addPostNotice}>
          확인
        </button>
      </div>
    </div>
  );
});

export default NoticeModal;
