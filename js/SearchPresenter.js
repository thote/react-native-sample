
'use strict';
import MovieComponent from "./MovieComponent"

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/';
var IN_THEATRES = 'lists/movies/in_theaters.json';
var ALL_MOVIES = 'movies.json';
var PAGE_SIZE = 20;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;

export default class SearchPresenter {

  constructor(viewComponent, navigator) {
    this.v = viewComponent;
    this.n = navigator;
  }

  fetchData(query) {
    fetch(this._getUrl(query))
      .then(response => response.json())
      .then(response => {
        this.v.showMovies(response.movies);
      })
      .done();
  }

  onSearchTextChange(text) {
    this.v.setState({searchText: text});
  }

  search() {
    this.v.showMovies([]);
    this.v.showLoadingScreen();
    this.fetchData(this.v.getSearchQuery())
  }

  showMovieDetails(movie) {
    this.n.routeTo({name: "MovieComponent", movie: movie });
  }

  _getUrl(query) {
    if (query) {
      return API_URL + ALL_MOVIES + PARAMS + "&q=" + encodeURIComponent(query);
    }
    return API_URL + IN_THEATRES + PARAMS;
  }
}