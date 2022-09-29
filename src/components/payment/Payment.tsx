import React, { useState } from "react";
import styled from "styled-components";
import pay from "../../assets/images/pay.png";

const PaymentsStyle = styled.div`
  text-align: center;

  img {
    width: 90px;
    margin-top: 135px;
  }

  p {
    font-weight: 400;
    font-size: 28px;
    line-height: 41px;
    text-align: center;
    letter-spacing: -0.02em;

    color: #000000;

    margin-top: 50px;
  }

  .box {
    width: 255px;
    height: 56px;
    left: 593px;
    top: 572px;

    background: #000000;
    border-radius: 15px;

    margin: 0 auto;
    margin-top: 60px;

    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #ffffff;

    cursor: pointer;
    margin-bottom: 125px;
  }
`;

const PaymentsStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 170px;

  .p {
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    gap: 40px;

    color: #b4b4b4;
    font-weight: 400;

    label {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;

      margin-bottom: 8px;
    }
    .input1 {
      width: 430px;
      height: 68px;
      left: 505px;
      top: 299px;

      border: 1px solid #b4b4b4;
      border-radius: 20px;

      outline: none;
    }
    .flex {
      display: flex;
      flex-direction: column;

      .input2 {
        width: 195px;
        height: 68px;
        border: 1px solid #b4b4b4;
        border-radius: 20px;

        outline: none;
      }
    }
  }

  p {
    display: flex;
    flex-direction: column;
    color: #b4b4b4;
    font-weight: 400;
    margin-bottom: 24px;

    label {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;

      margin-bottom: 8px;
    }
    .input1 {
      width: 430px;
      height: 68px;
      left: 505px;
      top: 299px;

      border: 1px solid #b4b4b4;
      border-radius: 20px;

      outline: none;
    }
  }
`;

const Payments = () => {
  const [state, setState] = useState(false);
  const changeState = () => {
    setState((prev) => !prev);
  };
  return (
    <>
      {!state ? (
        <PaymentsStyle>
          <img src={pay} />
          <p>
            정기 결제는 매달
            <br /> 9,900원씩 결제됩니다
          </p>
          <button className="box" onClick={changeState}>
            카드 등록하기
          </button>
        </PaymentsStyle>
      ) : (
        <PaymentsStyle2>
          <p>
            <label htmlFor="number">카드번호</label>
            <input type="text" id="number" className="input1" />
          </p>
          <p>
            <label htmlFor="date">만료일(월/년)</label>
            <input type="text" id="date" className="input1" />
          </p>
          <p className="p">
            <div className="flex">
              <label htmlFor="date">만료일(월/년)</label>
              <input type="text" id="date" className="input2" />
            </div>
            <div className="flex">
              <label htmlFor="date">만료일(월/년)</label>
              <input type="text" id="date" className="input2" />
            </div>
          </p>
          <button></button>
        </PaymentsStyle2>
      )}
    </>
  );
};

export default Payments;
