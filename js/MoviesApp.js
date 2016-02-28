"use strict";
import React from 'react';
import ReactDOM from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'
import SearchComponent from "./search/SearchComponent"
import MovieComponent from "./details/MovieComponent"
import './app.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={SearchComponent}/>
    <Route path="movie" component={MovieComponent}/>
    <Route path="*" component={SearchComponent}/>
  </Router>
  , document.getElementById('content')
);