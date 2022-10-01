import styled from "styled-components";

const DetailStyle = styled.div`
  margin: 0 auto;
  margin-top: 37px;
  margin-bottom: 18px;
  padding-bottom: 16px;

  width: 700px;
  height: 170px;

  display: flex;

  .allocation {
    width: 215px;
    height: 100%;
    margin-right: 100px;

    .allocation__title {
      margin-bottom: 24px;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;
      color: #000000;
    }
    .allocation__info {
      display: flex;

      .allocation__info--payment {
        width: 78px;
        margin-right: 95px;

        .allocation__info--payment-title {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.02em;
          color: #000000;
        }

        .allocation__info--payment-date {
          margin-top: 18px;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
        }
      }
      .allocation__info--dividend {
        width: 42px;

        .allocation__info--dividend-title {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: -0.02em;
          color: #000000;
        }
        .allocation__info--dividend-date {
          margin-top: 18px;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #000000;
        }
      }
    }
  }

  .current {
    width: 394px;

    .current__title {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;
      color: #000000;
      margin-bottom: 24px;
    }
    .current__info {
      .currnet__info--detail {
        display: flex;
        align-items: center;

        .currnet__info--detail-logo {
          width: 48px;
          height: 48px;
          border: 1px solid black;
          margin-right: 40px;
        }
        .currnet__info--detail-title {
          font-weight: 500;
          font-size: 18px;
          line-height: 21px;
          color: #000000;
        }
        .currnet__info--detail-number {
          margin-left: 149px;
          font-weight: 500;
          font-size: 24px;
          line-height: 28px;
          color: #000000;
        }
      }
    }
    .current__info--graph {
      margin-top: 24px;
      height: 48px;

      display: flex;
      gap: 55px;
    }
  }
`;

export default DetailStyle;
