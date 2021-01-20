import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ users, setPage }) => {
  const [startPage, setStartPage] = useState(1);
  let endPage = users.length / 50;
  let pages = [];
  const pageSize = 50;
  const startIndex = (startPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, users.length - 1);
   
  for (let i = 1; i <= endPage; i++) {
    pages[i] = i;
  }
  
  useEffect(() => {
    if (startPage) {
      return setPage(users.slice(startIndex, endIndex + 1));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[startPage]);

  const handlePage = (curpage) => {
    setStartPage(curpage);
  };

  return (
    <nav className="pagination">
      {(startPage === 1)
        ? <button disabled className="pagination__button pagination__button-l" type="button" onClick={() => setStartPage(startPage - 1)}></button>
        : <button className="pagination__button pagination__button-l" type="button" onClick={() => setStartPage(startPage - 1)}></button>
      }
      <ul className="pagination__list">
        {pages.map((curpage, index) => (
          <li key={index}className= {startPage !== curpage ? "pagination__item" : "pagination__item-active"} ><Link to="users" className={startPage !== curpage ? "pagination__link" : "pagination__link-active"} onClick={() => handlePage(curpage)}>{curpage}</Link></li>
        ))}
      </ul>
      {(startPage === endPage)
        ? <button disabled className="pagination__button pagination__button-r" type="button" onClick={() => setStartPage(startPage + 1)}></button>
        : <button className="pagination__button pagination__button-r" type="button" onClick={() => setStartPage(startPage + 1)}></button>
      }
    </nav>
  );
};

export default Pagination;