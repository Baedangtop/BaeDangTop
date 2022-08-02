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
