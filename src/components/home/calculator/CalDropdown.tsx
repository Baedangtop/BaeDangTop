import React, { memo } from "react";

const CalDropdown = memo(
  ({ title, toggle, setCal, number, info, cal }: any) => {
    return (
      <div className="drop__down">
        <div className="nomal">
          <div className="drop__name">{title}</div>
          <button className="drop__toggle">+</button>
        </div>
        {toggle === number && (
          <div className="detail">
            {info.map((v: string, i: number) => (
              <div
                key={v}
                className={`detail__write${i === cal ? "A" : "B"}`}
                onClick={() => setCal(i)}
              >
                {v}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default CalDropdown;
