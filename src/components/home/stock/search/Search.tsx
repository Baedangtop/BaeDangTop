import React, { useCallback, useState } from "react";
import SearchStyle from "./search.style";

const Search = () => {
  const [show, setShow] = useState(false);
  const changeShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);
  return (
    <SearchStyle>
      <p className="p__title--search-name">주식 데이터 확인</p>
      <div className="flex">
        <div className="select--container" onClick={changeShow}>
          <div className="current">KOSPI</div>
          {show && (
            <ul className="select">
              <li>KOSPI</li>
              <li>KOSPI</li>
              <li>KOSPI</li>
              <li>KOSPI</li>
            </ul>
          )}
        </div>
        <div className="search__input">
          <label htmlFor="a"></label>
          <input type="text" id="a" className="search__input--text" />
          <span>검색</span>
        </div>
      </div>
    </SearchStyle>
  );
};

export default Search;
