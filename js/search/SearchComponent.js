"use strict";
import React from 'react';
import SearchItem from './SearchItem';
import "./search.css"
import MoviesRepo from "../repo/MoviesRepo";

export default class SearchComponent extends React.Component {

  constructor() {
    super();
    this. moviesRep = new MoviesRepo();
    this.state = {
      movies: [],
      searchText: ""
    };
  }

  componentDidMount() {
    this.search()
  }

  onSearchResults(movies) {
    this.setState({
      movies: movies
    })
  }

  search(query) {
    this.setState({movies: []});
    this.moviesRep.get(query)
      .then(this.onSearchResults.bind(this));
  }

  onSearchClick() {
    this.search(this.state.searchText);
  }

  onSearchTextChange(event) {
    this.setState({searchText: event.target.value});
  }

  onMovieClick(movie, e) {
    console.log('movie clicked: ', movie);
  }

  renderItem(movie) {
    var boundClick = this.onMovieClick.bind(this, movie);
    return (
      <li onClick={boundClick}><SearchItem movie={movie} /></li>
    );
  }

  render() {
    var self = this;
    var items = this.state.movies.map(this.renderItem.bind(this));
    return (
      <div>
        <div className="search">
          <span className="header">Best Movies to Watch</span>
          <div className="searchContainer">
            <input
              onChange={this.onSearchTextChange.bind(this)}
              className="searchInput"
              type="text"
              name="query"
              value={this.state.searchText}
              placeholder="Search a movie..."/>
            <button
              className="searchButton"
              type="button"
              onClick={this.onSearchClick.bind(this)}>Search</button>
          </div>
          <ul className="moviesList">
            {items}
          </ul>
        </div>
      </div>
    );
  }
}