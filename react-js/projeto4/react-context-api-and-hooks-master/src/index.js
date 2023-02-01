import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './contexts/CounterContext';
import './styles/global-styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './templates/Home';
import { Abc } from './templates/Abc';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/abc" component={Abc} />
        <Route path="/" component={App} exact />
        <Route path="*" component={Page404} />
        <CounterContextProvider>
          <Home />
        </CounterContextProvider>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
