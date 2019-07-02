import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from '../../components/NavBar';

import * as ROUTES from '../../pages/routes';

import HomePage from '../Home';
import TopicPage from '../Topic';
import AdminPage from '../Admin';
import { withAuthentication } from '../../components/Session';

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <NavBar/>
        <Switch>
          <Route exact={true} path={ROUTES.HOME} component={HomePage}/>
          <Route path={ROUTES.TOPIC} component={TopicPage}/>
          <Route path={ROUTES.ADMIN} component={AdminPage}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default withAuthentication(App);