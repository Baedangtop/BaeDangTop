import React, { memo, useCallback, useState } from "react";
import Detail from "../detail/Detail";
import ItemStyle from "./item.style";

const Item = memo(() => {
  const [toggle, setToggle] = useState(false);
  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);
  return (
    <ItemStyle>
      <div className="basic">
        <div className="logo"></div>
        <div className="name">Amazon</div>
        <div className="graph"></div>
        <div className="price">
          <div className="price__current">149.24</div>
          <div className="price__yield">+2.54%</div>
        </div>
        <button className="toggle" onClick={changeToggle}>
          +
        </button>
      </div>
      {toggle && <Detail />}
    </ItemStyle>
  );
});

export default Item;
