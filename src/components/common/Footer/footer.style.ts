import styled from "styled-components";

const FooterStyle = styled.div`
  width: 268px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  position: relative;
  .t {
    position: relative;

    .show {
      animation: alternate shows 0.4s forwards;
      position: absolute;
      top: -20%;
      left: -90%;

      width: 135px;
      height: 103px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.25);
      border-radius: 10px;

      h3 {
        animation: alternate shows2 2s forwards;
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 9px;
        text-align: center;

        margin-bottom: 13px;
      }
      p {
        animation: alternate shows2 4s forwards;
        font-style: normal;
        font-weight: 400;
        font-size: 7px;
        line-height: 8px;
        text-align: center;
      }
    }
  }
  div {
    height: 100%;
    text-align: center;

    .circle {
      width: 50px;
      height: 50px;
      background: #ffffff;
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      .box {
        width: 14px;
        height: 20px;
        border: 2px solid #989898;
        border-radius: 3px;
      }
    }
    p {
      font-size: 8px;
    }
  }
  div:nth-child(2) .circle {
    background: #bbbbbb;

    .box {
      border: 2px solid white;
    }
  }
  div:nth-child(3) .circle {
    background: #a37e7e;

    .box {
      border: 2px solid white;
    }
  }

  @keyframes shows {
    0% {
      top: 50%;
      left: 0%;
      width: 0;
      height: 0;
    }
    100% {
      top: -20%;
      left: -90%;
      width: 135px;
      height: 103px;
    }
  }

  @keyframes shows2 {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default FooterStyle;
