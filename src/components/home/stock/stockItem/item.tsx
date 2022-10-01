import React, { memo, useCallback, useEffect, useState } from "react";
import Detail from "../detail/Detail";
import ItemStyle from "./item.style";

const Item = memo(({ graph }: any) => {
  const [toggle, setToggle] = useState(false);
  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    setMax(
      graph.dividendHistories.reduce(
        (max: number, v: any) => (max < v.price ? v.price : max),
        0
      )
    );
    setMin(
      graph.dividendHistories.reduce(
        (max: number, v: any) => (max > v.price ? v.price : max),
        10000000000000
      )
    );
  }, [graph]);

  return (
    <ItemStyle>
      <div className="basic">
        <div className="logo"></div>
        <div className="name">{graph.stockName}</div>
        <div className="graph">
          <svg>
            <polyline
              points={graph.dividendHistories
                .map((v: any, index: number, arr: any) => {
                  return `${((index * 100) / arr.length) * 2},${
                    30 - (14 / (max / v.price) - 14 / min)
                  } `;
                })
                .join(" ")}
            ></polyline>
          </svg>
        </div>
        <div className="price">
          <div className="price__current">{graph.price}</div>
          <div className="price__yield">+{graph.yield}%</div>
        </div>
        <button className="toggle" onClick={changeToggle}>
          +
        </button>
      </div>
      {toggle && <Detail item={graph} />}
    </ItemStyle>
  );
});

export default Item;
