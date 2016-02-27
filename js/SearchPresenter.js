
'use strict';
import MovieComponent from "./MovieComponent.native"

export default class SearchPresenter {

  constructor(viewComponent, navigator, repo) {
    this.v = viewComponent;
    this.n = navigator;
    this.r = repo;
  }

  fetchData(query) {
    //this.r.get()
    //  .then(response => response.json())
    //  .then(response => {
    //    this.v.showMovies(response.movies);
    //  })
    //  .done();

    this.r.get(query, response => {
      this.v.showMovies(response.json().movies);
    });
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