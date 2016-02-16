"use strict";
import React from 'react';
import ReactDOM from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import SearchComponent from "./SearchComponent.web"
import MovieComponent from "./MovieComponent.web"

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={SearchComponent}>
        <Route path="movie" component={MovieComponent}/>
        <Route path="*" component={SearchComponent}/>
      </Route>
    </Router>
  , document.getElementById('content')
);