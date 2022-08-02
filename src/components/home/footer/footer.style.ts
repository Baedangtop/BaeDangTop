import styled from "styled-components";

const FooterStyle = styled.div`
  width: 100%;
  height: 200px;
  background: #121212;
  margin-top: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  .des {
    width: 609px;
    height: 72px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: white;

    img {
      width: 279px;
    }
    .producer {
      width: 270px;

      .people {
        display: flex;
        align-items: center;

        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.02em;
        color: #ffffff;

        .mail {
          margin-left: 18px;
        }
      }
      .people + .people {
        margin-top: 14px;
      }
    }
  }
`;

export default FooterStyle;
