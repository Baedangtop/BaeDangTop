import React, { useCallback, useEffect, useRef, useState } from "react";

const NoticeModal = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState<string>();

  const changeImage = (e: any) => {
    let file = e.target.files[0];
    setImage(file);
    const currentImageUrl = URL.createObjectURL(file);
    setPreview(currentImageUrl);
  };

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
      ></input>
      <textarea
        className="description"
        placeholder="게시물 내용을 작성해 주세요"
      ></textarea>
      <div className="button__container">
        <button className="x">취소</button>
        <button className="o">확인</button>
      </div>
    </div>
  );
};

export default NoticeModal;
