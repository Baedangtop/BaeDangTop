import React, { memo, useCallback, useState } from "react";
import { result } from "../../../model/result";

const CalMain = memo(({ toggle, cal }: any) => {
  const [value, setValue] = useState({
    v1: 0,
    v2: 0,
    v3: 0,
  });
  const [rr, setRR] = useState(0);

  const onChangeValue = useCallback(
    (e: any) => {
      setValue({
        ...value,
        [`v${e.target.name}`]: e.target.value,
      });
    },
    [value]
  );

  const CalResult = useCallback(() => {
    const number = result[toggle][cal].input.length;
    let r = result[toggle][cal].result;

    if (number >= 1) r = r.replace(/A/g, value[`v1`] + "");
    if (number >= 2) r = r.replace(/B/g, value[`v2`] + "");
    if (number >= 3) r = r.replace(/C/g, value[`v3`] + "");

    setRR(eval(r));
  }, [value, toggle, cal]);

  return (
    <div className="cal">
      {result[toggle][cal].input.map((v, i) => (
        <p key={v}>
          <label htmlFor={v}>{v}</label>
          <input
            id={v}
            type="number"
            name={`${i + 1}`}
            onChange={onChangeValue}
          />
        </p>
      ))}
      <button onClick={CalResult}>계산</button>
      <div className="result">
        <div className="name">결과</div>
        <span>{rr}</span>
      </div>
    </div>
  );
});

export default CalMain;
