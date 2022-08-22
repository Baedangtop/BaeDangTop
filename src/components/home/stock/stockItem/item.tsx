import React, { memo, useCallback, useEffect, useState } from "react";
import Detail from "../detail/Detail";
import ItemStyle from "./item.style";

const graph = [
  { x: 0, y: 20 },
  { x: 6, y: 40 },
  { x: 12, y: 30 },
  { x: 18, y: 400 },
  { x: 24, y: 60 },
  { x: 30, y: 40 },
  { x: 36, y: 40 },
  { x: 42, y: -840 },
  { x: 48, y: -80 },
  { x: 54, y: -40 },
  { x: 60, y: -20 },
];

const Item = memo(() => {
  const [toggle, setToggle] = useState(false);
  const changeToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    setMax(graph.reduce((max: number, v: any) => (max < v.y ? v.y : max), 0));
    setMin(graph.reduce((min: number, v: any) => (min > v.y ? v.y : min), 100));
  }, [graph]);

  return (
    <ItemStyle>
      <div className="basic">
        <div className="logo"></div>
        <div className="name">Amazon</div>
        <div className="graph">
          <svg>
            <polyline
              points={graph
                .map((v: { x: number; y: number }, index: number) => {
                  return `${index * 24},${14 - (14 / (max / v.y) - 14 / min)} `;
                })
                .join(" ")}
            ></polyline>
          </svg>
        </div>
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
