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
        clear: 'both',
        backgroundColor: 'white'
      },

      image: {
        width: '100px',
        float: 'left',
        clean: 'none',
        height: '150px',
        margin: '10px'
      },

      rightSection: {
        width: '75%',
        float: 'left',
        clean: 'none',
        color: 'black',
        height: '150px',
        paddingTop: '10px',
        paddingLeft: '20px',
      },

      title: {
        fontSize: '22px'
      }

    };

    return (
      <div style={styles.main}>
        <img src={this.movie.poster} style={styles.image}/>
        <div style={styles.rightSection}>
          <div style={styles.title}>{this.movie.title}</div>
          <div>Release: {this.movie.releasedOn}</div>
          <div>Rating: {this.movie.rating}</div>
          <div>Duration: {this.movie.duration} mins</div>
        </div>
      </div>
    );
  }


}

