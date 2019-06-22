import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from '../../components/NavBar';

import * as ROUTES from '../../pages/routes';

import HomePage from '../Home';
import TopicPage from '../Topic';

const App: React.FC = () => {
  return (
    <div className="App">
      <hr/>
      <HashRouter>
        <NavBar/>
        Science in a Nutshell
        <hr/>
        <Switch>
          <Route exact={true} path={ROUTES.HOME} component={HomePage}/>
          <Route path={ROUTES.TOPIC} component={TopicPage}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;