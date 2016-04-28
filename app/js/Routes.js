'use strict';

import 'babel-polyfill';
import React                       from 'react';
import {Router, Route, IndexRoute, IndexRedirect} from 'react-router';
import CreateBrowserHistory        from 'history/lib/createBrowserHistory';

import App                         from './App';
import LandingPage                 from './pages/LandingPage';
import Project                     from './components/Project';

export default (
  <Router history={CreateBrowserHistory()}>
    <Route path="/" component={App}>
      <IndexRoute component={LandingPage} />
      <Route path="/project/:slug" component={Project}/>
    </Route>
  </Router>
);