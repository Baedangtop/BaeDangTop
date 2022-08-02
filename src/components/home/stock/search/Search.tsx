import React from "react";
import SearchStyle from "./search.style";

const Search = () => {
  return (
    <SearchStyle>
      <p className="p__title--search-name">주식 데이터 확인</p>
      <div className="search__input">
        <input type="text" className="search__input--text" />
        <span>검색</span>
      </div>
    </SearchStyle>
  );
};

export default Search;
