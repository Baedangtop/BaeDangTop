import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_NOTICE } from "../../../../reducers/notice/NoticeReducer";

const NoticeModal = ({ changeShow }) => {
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
    const date = new Date();
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
        description: titleRef.current.value,
        comment: [],
      },
    });
    changeShow();
  }, [dispatch, preview]);

  return (
    <div className="modal">
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
      ></input>
      <textarea
        className="description"
        placeholder="게시물 내용을 작성해 주세요"
        ref={desRef}
      ></textarea>
      <div className="button__container">
        <button className="x">취소</button>
        <button className="o" onClick={addPostNotice}>
          확인
        </button>
      </div>
    </div>
  );
};

export default NoticeModal;
