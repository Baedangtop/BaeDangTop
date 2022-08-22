import React, { memo } from "react";

const ButtonItem = memo(({ des, changePage }: any) => {
  return (
    <div className="button--item" onClick={changePage}>
      {des}
    </div>
  );
});

export default ButtonItem;
