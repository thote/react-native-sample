"use strict";
import React from 'react';

export default class SearchItem extends React.Component {

  constructor(props) {
    super(props);
    this.movie = props.movie
  }

  render() {
    var styles = {
      main: {
        width: '100%',
        backgroundColor: 'grey'
      },

      image: {
        width: '25%',
        float: 'left',
        height: '150px',
        paddingTop: '10px'
      },

      rightSection: {
        width: '75%',
        float: 'left',
        height: '150px',
        paddingTop: '10px',
        paddingLeft: '20px',
        color: 'black',

      }
    };

    return (
      <div style={styles.main}>
        <img src={this.movie.posters.thumbnail} style={styles.image}/>
        <div style={styles.rightSection}>
          <div>{this.movie.title}</div>
          <div>Release: {this.movie.year}</div>
          <div>Rating: {this.movie.ratings.audience_score}</div>
          <div>Duration: {this.movie.runtime} mins</div>
        </div>
      </div>
    );
  }


}

