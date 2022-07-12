import styled from "styled-components";

const AssetsStyle = styled.div`
  width: 326px;
  height: 136px;
  margin: 0 auto;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 27px;

  .title {
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .main {
    .each {
      width: 326px;
      height: 50px;
      background: #ffffff;
      border-radius: 10px;
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
      margin-bottom: 8px;
    }
  }
`;

export default AssetsStyle;
