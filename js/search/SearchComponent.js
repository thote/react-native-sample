"use strict";
import React from 'react';
import SearchItem from './SearchItem';
import "./search.css"
import MoviesRepo from "../repo/MoviesRepo";

export default class SearchComponent extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    console.log("SearchComponentDidMount");
    new MoviesRepo().get()
      .then(this.onSearchResults.bind(this));
  }

  onSearchResults(movies) {
    this.setState({
      movies: movies
    })
  }

  renderItem(movie) {
    return (
      <li><SearchItem movie={movie} /></li>
    );
  }

  render() {
    var self = this;
    var items = this.state.movies.map(this.renderItem);
    return (
      <div>
        <div className="search">
          <span className="header">Best Movies to Watch</span>
          <ul className="moviesList">
            {items}
          </ul>
        </div>
      </div>
    );
  }
}