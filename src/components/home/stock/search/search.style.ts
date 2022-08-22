import styled from "styled-components";

const SearchStyle = styled.div`
  display: flex;
  justify-content: space-between;

  height: 40px;
  margin-bottom: 40px;

  font-style: normal;
  line-height: 41px;
  letter-spacing: -0.02em;
  color: #000000;

  .flex {
    display: flex;
  }

  .select--container {
    width: 125px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #bcbcbc;
    border-radius: 15px;
    margin-right: 18px;
    position: relative;

    .current {
      width: 100%;
      height: 100%;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.02em;
      color: #bcbcbc;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select {
      position: absolute;
      width: 100%;
      border: 1px solid #bcbcbc;
      background-color: white;

      li {
        color: #bcbcbc;
        list-style: none;
        text-align: center;
      }
    }
  }

  .p__title--search-name {
    font-weight: 500;
    font-size: 28px;
  }

  .search__input {
    width: 341px;
    height: 40px;
    border: 1px solid #b4b4b4;
    border-radius: 15px;

    .search__input--text {
      border: none;
      outline: none;
      width: 293px;
    }

    span {
    }
  }
`;

export default SearchStyle;
