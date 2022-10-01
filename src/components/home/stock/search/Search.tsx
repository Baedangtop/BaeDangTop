import React, { useCallback, useRef, useState } from "react";
import SearchStyle from "./search.style";

const Search = ({ searchList }: any) => {
  const [show, setShow] = useState(false);
  const changeShow = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  const ref = useRef<HTMLInputElement>();

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
        <form
          onSubmit={(e) => searchList(e, ref.current.value)}
          className="search__input"
        >
          <label htmlFor="a"></label>
          <input type="text" id="a" ref={ref} className="search__input--text" />
          <button>검색</button>
        </form>
      </div>
    </SearchStyle>
  );
};

export default Search;
