import React from 'react';
import { Link } from 'react-router-dom'
import users from '../api/users.json';
import users_statistics from '../api/users_statistic.json';
import { Line } from 'react-chartjs-2';


const UserStats = (props) => {
  let id = props.match.params.id;
  
  const lastName = users.filter(user => user.id === +id).map(person => person.id === +id
    ? person.last_name
    : ''
  );

  const firstName = users.filter(user => user.id === +id).map(person => person.id === +id
    ? person.first_name
    : ''
  );

  const views = users_statistics.filter(user => user.user_id === +id).map(person => person.user_id === +id
    ? person.clicks
    : ''
  );

  const clicks = users_statistics.filter(user => user.user_id === +id).map(person => person.user_id === +id
    ? person.page_views
    : ''
  );
  
  const date = users_statistics.filter(user => user.user_id === +id).map(person => person.user_id === +id
    ? person.date
    : ''
  );

  const pointRadius = (arr) => {
    const big = new Array(30).fill(0).concat(arr);
    const middle = big.reverse().slice(0, 30).reverse().slice(1, -1);
    const newArr = middle.map(el => el = 0);
    newArr.unshift(5);
    newArr.push(5);
    
    return newArr;
  }
  
  const points = (arr) => {
    const newArr = new Array(30).fill(0);
    const newData = newArr.concat(arr);

    return newData.slice(newData.length - 30)
  };

  const labels = (arr) => {
    const newArr = new Array(30).fill(0);
    const newData = newArr.concat(arr);
    const big = newData.slice(newData.length - 30)
    
    const res = big.map((el, index) => {
      if (el === 0) {
        let chislo = [];
        for (let i = 0; i <= 30; i++) {
          chislo[i] = i;
        };

        return el = `2019-10-`+chislo.slice(1).slice(index, index+1).toString();
      } else {
        // eslint-disable-next-line no-self-assign
        return el = el;
      };
    });
    
    return res;
  };
  
  const data1 = {
    labels: labels(date),
    datasets: [
      {
        label: 'Clicks',
        data: points(clicks),
        fill: false,
        backgroundColor: '#3A80BA',
        borderColor: '#3A80BA',
        pointRadius: pointRadius(clicks),
      },
    ],
  }

  const data2 = {
    labels: labels(date),
    datasets: [
      {
        label: 'Views',
        data: points(views),
        fill: false,
        backgroundColor: '#3A80BA',
        borderColor: '#3A80BA',
        pointRadius: pointRadius(views),
      },
    ],
  }
  
  const options2 = {
    elements : {
      point: {
        radius: 5,
      }
    },
    legend : {
      display: false,
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time : {
            unit: 'day'
          },
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false,
          },
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  const options1 = {
    elements : {
      point: {
        radius: 5,
      },
      arc : {
        backgroundColor: 'white'
      },
    },
    legend : {
      display: false,
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time : {
            unit: 'day'
          },
          ticks: {
            beginAtZero: true,

          },
          gridLines: {
            display: false,
          },
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  return(
    <div className="user">
      <div className="stats__top">
        <h1 className="stats__logo">AppCo</h1>
      </div>
      <div className="stats__tabs">
        <ul className="stats__list">
          <li className="stats__item"><Link to="/" className="stats__link">Home Page</Link></li>
          <li className="stats__item"><Link to="/users" className="stats__link">User satistics</Link></li>
          <li className="stats__item"><Link to={{ pathname: `/user/${id}`}} className="stats__link-active">{`${firstName} ${lastName}`}</Link></li>
        </ul>
      </div>
      <div className="user__name">
        {`${firstName} ${lastName}`}
      </div>
      <div className="user__container">
        <div className="user__diagram">
          <h2 className="user__subtitle">Clicks</h2>
          <Line data={data1}  options={options1} width={1140} height={525} />
        </div>
        <div className="user__diagram">
          <h2 className="user__subtitle">Views</h2>
          <Line data={data2}  options={options2} width={1140} height={525} />
        </div> 
      </div>
      <footer className="user__footer">
        <div className="footer__info">
          <h1 className="footer__logo">AppCo</h1>
          <span className="footer__rights">All rights reserved by ThemeTags</span>
          <span className="footer__rights">Copyrights © 2019. </span>
        </div>
      </footer>
    </div>
  );
};

export default UserStats;
