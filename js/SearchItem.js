"use strict";
import React from 'react';

export default class MovieSearchItem extends React.Component {

  constructor(props) {
    super(props);
    this.movie = props.movie;
    this.p = props.presenter;
  }

  render() {
    return (
      <div>
        This is SearchItem
        <div>
          <img src={this.movie.posters.thumbnail} height="200" width=""/>
          <div>
            <div>{this.movie.title}</div>
            <div>Release: {this.movie.year}</div>
            <div>Rating: {this.movie.ratings.audience_score}</div>
            <div>Duration: {this.movie.runtime} mins</div>
          </div>
        </div>
      </div>
    );
  }
}