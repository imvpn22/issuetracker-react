import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import App from './App';
import Header from './components/header';
import NewIssue from './components/newIssue';
import NotFound from './components/404';

const routing = (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/new-issue" component={NewIssue} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
