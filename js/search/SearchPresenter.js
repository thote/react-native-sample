'use strict';
import MovieComponent from "./../details/MovieComponent.native.js"

export default class SearchPresenter {

  constructor(viewComponent, navigator, repo) {
    this.v = viewComponent;
    this.n = navigator;
    this.r = repo;
  }

  fetchData(query) {
    this.r.get().
    then(this.v.showMovies);
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
    this.n.routeTo({name: "MovieComponent", props: {movie: movie }});
  }
}