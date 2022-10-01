import React, { memo } from "react";

const ButtonItem = memo(({ des, changePage, idx }: any) => {
  return (
    <div className={`button--item idx${idx}`} onClick={changePage}>
      {des}
    </div>
  );
});

export default ButtonItem;
