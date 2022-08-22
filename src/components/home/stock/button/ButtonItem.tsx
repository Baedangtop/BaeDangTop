import React from "react";

const ButtonItem = ({ des, changePage }) => {
  return (
    <div className="button--item" onClick={changePage}>
      {des}
    </div>
  );
};

export default ButtonItem;
