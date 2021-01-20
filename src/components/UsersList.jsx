import React, { useState } from 'react';
import Pagination from "./Pagination";
import users from '../api/users.json';
import users_statistics from '../api/users_statistic.json';
import { Link, useHistory } from 'react-router-dom';

const UsersList = () => {
  const history = useHistory();
  const [page, setPage] = useState([]);
  
  const rowClick = (row) => {
    history.push(`/user/${row.id}`)
  }

  const totalPage = (id) => {
    let sum = [];
    
    users_statistics.filter(user => user.user_id === id).map(person => person.user_id === id
      ? sum.push(person.page_views)
      : ''
    );
    
    return sum.reduce((a, b) => a + b);
  };

  const totalClick = (id) => {
    let sum = [];
    users_statistics.filter(user => user.user_id === id).map(person => person.user_id === id
      ? sum.push(person.clicks)
      : ''
    );
    
    return sum.reduce((a, b) => a + b);
  };
  
  return(
    <div className="stats">
      <div className="stats__top">
        <h1 className="stats__logo">AppCo</h1>
      </div>
      <div className="stats__tabs">
        <ul className="stats__list">
          <li className="stats__item"><Link to="/" className="stats__link">Home Page</Link></li>
          <li className="stats__item"><Link to="/users" className="stats__link-active">User satistics</Link></li>
        </ul>
      </div>
      <h1 className="stats__title">Users statistics</h1>
      <div className="stats__table">
        <table className="table">
          <thead className="table__head-h">
            <tr className="table__head">
              <th className="h">Id</th>
              <th className="h">First name</th>
              <th className="h">Last name</th>
              <th className="h">Email</th>
              <th className="h">Gender</th>
              <th className="h">IP address</th>
              <th className="h">Total clicks</th>
              <th className="h">Total page views</th>
            </tr>
          </thead>
          <tbody>
            {page.map(user => (
              <tr key={user.id} onClick={() => rowClick(user)} className="table__body">
                <td className="td">{user.id}</td>
                <td className="td">{user.first_name}</td>
                <td className="td">{user.last_name}</td>
                <td className="td">{user.email}</td>
                <td className="td">{user.gender}</td>
                <td className="td">{user.ip_address}</td>
                <td className="td">{totalClick(user.id)}</td>
                <td className="td">{totalPage(user.id)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="stats__pagination">
          <Pagination users={users} setPage={setPage}  />
        </div>
      </div>
      <footer className="stats__footer">
        <div className="footer__info">
          <h1 className="footer__logo">AppCo</h1>
          <span className="footer__rights">All rights reserved by ThemeTags</span>
          <span className="footer__rights">Copyrights © 2019.</span>
        </div>
      </footer>
    </div>
  );
};

export default UsersList;
