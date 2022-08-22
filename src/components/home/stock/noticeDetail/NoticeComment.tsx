import React from "react";

const NoticeComment = ({ v }) => {
  return (
    <div className="comment">
      <div className="picture"></div>
      <div className="write">{v.writing}</div>
    </div>
  );
};

export default NoticeComment;
