"use strict";
import React from 'react';
import SearchItem from './SearchItem';
import "./search.css"
import MoviesRepo from "./MoviesRepo";

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
      .then(response => response.json())
      .then(response => response.movies)
      .then(this.onSearchResults.bind(this));
  }

  onSearchResults(movies) {
    this.setState({
      movies: movies
    })
  }

  renderItem(movie) {
    return (
      <SearchItem movie={movie} />
    );
  }

  render() {
    var self = this;
    var items = this.state.movies.map(this.renderItem);
    return (
      <div className="search">
        <span className="header">Best Movies to Watch</span>
        <ul>
          {items}
        </ul>
    </div>);
  }
}