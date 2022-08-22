import React, { memo } from "react";

const NoticeComment = memo(({ v }: any) => {
  return (
    <div className="comment">
      <div className="picture"></div>
      <div className="write">{v.writing}</div>
    </div>
  );
});

export default NoticeComment;
