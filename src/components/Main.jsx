import React from 'react';
import Header from './Header';
import UsersList from './UsersList';
import UserStats from './UserStats';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
  return(
    <main className="main">
      <Switch>
        <Route exact path='/' component={Header} />
        <Route path='/users' component={UsersList} />
        <Route path='/user/:id' component={UserStats}/>
      </Switch>
    </main>
  );
};

export default Main;