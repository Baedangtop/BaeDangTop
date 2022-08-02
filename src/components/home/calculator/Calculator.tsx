import React, { useState } from "react";
import CalculatorStyle from "./calculator.style";
import CalDropdown from "./CalDropdown";
import { dividend, stock } from "../../../model/cal";
import CalMain from "./CalMain";

const Calculator = () => {
  const [toggle, setToggle] = useState(0);
  const [cal, setCal] = useState(0);
  return (
    <CalculatorStyle>
      <div className="cal__title">계산기</div>
      <div onClick={() => setToggle(0)}>
        <CalDropdown
          title="배당금"
          number={0}
          toggle={toggle}
          setCal={setCal}
          info={dividend}
          cal={cal}
        />
      </div>
      <div onClick={() => setToggle(1)} className="padding">
        <CalDropdown
          title="주식과 채권"
          number={1}
          toggle={toggle}
          setCal={setCal}
          info={stock}
          cal={cal}
        />
      </div>
      <CalMain toggle={toggle} cal={cal} />
    </CalculatorStyle>
  );
};

export default Calculator;
