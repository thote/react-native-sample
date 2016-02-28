"use strict";
import React from 'react';
import SearchItem from './SearchItem';
import "./search.css"
import MoviesRepo from "./MoviesRepo";

export default class SearchComponent extends React.Component {

  constructor() {
    super();
    this.movie = {
      "id": "771315831",
      "title": "Kung Fu Panda 3",
      "year": 2016,
      "mpaa_rating": "PG",
      "runtime": 100,
      "critics_consensus": "",
      "release_dates": {
        "theater": "2016-01-29"
      },
      "ratings": {
        "critics_rating": "Certified Fresh",
        "critics_score": 82,
        "audience_rating": "Upright",
        "audience_score": 85
      },
      "synopsis": "In 2016, one of the most successful animated franchises in the world returns with its biggest comedy adventure yet, KUNG FU PANDA 3. When Po's long-lost panda father suddenly reappears, the reunited duo travels to a secret panda paradise to meet scores of hilarious new panda characters. But when the supernatural villain Kai begins to sweep across China defeating all the kung fu masters, Po must do the impossible-learn to train a village full of his fun-loving, clumsy brethren to become the ultimate band of Kung Fu Pandas! (C) Fox",
      "posters": {
        "thumbnail": "http://resizing.flixster.com/RFnZ-Tb8TrTVbZqlI9okuynozwk=/54x80/v1.bTsxMTQ4ODIzNztqOzE2OTAzOzIwNDg7MjAyNTszMDAw",
        "profile": "http://resizing.flixster.com/RFnZ-Tb8TrTVbZqlI9okuynozwk=/54x80/v1.bTsxMTQ4ODIzNztqOzE2OTAzOzIwNDg7MjAyNTszMDAw",
        "detailed": "http://resizing.flixster.com/RFnZ-Tb8TrTVbZqlI9okuynozwk=/54x80/v1.bTsxMTQ4ODIzNztqOzE2OTAzOzIwNDg7MjAyNTszMDAw",
        "original": "http://resizing.flixster.com/RFnZ-Tb8TrTVbZqlI9okuynozwk=/54x80/v1.bTsxMTQ4ODIzNztqOzE2OTAzOzIwNDg7MjAyNTszMDAw"
      }
    };
    this.state = {
      movies: ["Red","Green","Blue","Yellow","Black","White","Orange"]
    }
  }

  componentDidMount() {
    new MoviesRepo().get("panda", this.onSearchResults.bind(this));
  }

  onSearchResults(movies) {
    console.log("onSearchResulsts: ", movies);
    this.setState({
      movies: movies
    })
  }

  render() {
    var self = this;
    var movies = this.state.movies.map(function(item) {
      return <li><SearchItem movie={self.movie}/></li>
    });

    return (
      <div className="search">
        <span className="header">Best Movies to Watch</span>
        <ul>{movies}</ul>
        <SearchItem movie={this.movie} />
    </div>);
  }
}