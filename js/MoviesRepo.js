"use strict"

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/';
var IN_THEATRES = 'lists/movies/in_theaters.json';
var ALL_MOVIES = 'movies.json';
var PAGE_SIZE = 20;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;

export default class MoviesRepo {

  get(query, callback) {
    $.ajax({
      url: this._getUrl(query),
      type: 'GET',
      success: function(result) {
        console.log("suceess ", result)
        callback(result);
      }
    });

  }

  _getUrl(query) {
    if (query) {
      return API_URL + ALL_MOVIES + PARAMS + "&q=" + encodeURIComponent(query);
    }
    return API_URL + IN_THEATRES + PARAMS;
  }
}