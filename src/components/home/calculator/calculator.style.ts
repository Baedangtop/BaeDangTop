import styled from "styled-components";

const CalculatorStyle = styled.div`
  padding-top: 100px;
  width: 792px;
  margin: 0 auto;

  .padding {
    padding-top: 20px;
  }

  .cal__title {
    font-weight: 500;
    font-size: 28px;
    line-height: 41px;
    letter-spacing: -0.02em;
    color: #000000;
    margin-bottom: 60px;
  }

  .drop__down {
    width: 752px;
    margin: 0 auto;
    min-height: 74px;
    border-bottom: 1px solid #dbdbdb;
    .nomal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .drop__name {
        font-weight: 400;
        font-size: 24px;
        line-height: 35px;
        letter-spacing: -0.02em;
        color: #000000;
      }
      .drop__toggle {
        width: 40px;
        height: 40px;
        border: none;
      }
    }
  }

  .detail {
    width: 735px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .detail__writeB {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;
      color: #b4b4b4;
      cursor: pointer;
    }
    .detail__writeA {
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;
      color: #000;
      cursor: pointer;
    }
    [class^="detail__write"] + [class^="detail__write"] {
      margin-left: 18px;
    }
  }
`;

export default CalculatorStyle;
