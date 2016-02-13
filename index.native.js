
'use strict';
import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 50;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

export default class FirstProjectNative extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      searchText: "",
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

  onSearchTextChange(text) {
    this.setState({searchText: text});
  }

  buttonClicked() {
    alert('button clicked');
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Best movies to watch</Text>

        <View style={styles.searchContainer}>
          <TextInput onChangeText={this.onSearchTextChange.bind(this)}
                     value={this.state.searchText}
                     placeholder="Search a movie..."
                     style={styles.movieSearch}/>
          <TouchableElement onPress={this.buttonClicked.bind(this)}>
            <View>
              <Text style={styles.button}>Search</Text>
            </View>
          </TouchableElement>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie}
          style={styles.listView}
        />
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.loadingContainer}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  renderMovie(movie) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.posters.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>Release: {movie.year}</Text>
          <Text style={styles.year}>Rating: {movie.ratings.audience_score}</Text>
          <Text style={styles.year}>Duration: {movie.runtime} mins</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#21406F',
    marginTop: 0,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#21406F'
  },
  container: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    margin: 3,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 10,
    textAlign: 'left',
  },
  mainTitle: {
    fontSize: 26,
    marginBottom: 8,
    marginLeft: 10,
    textAlign: 'center',
    color: 'white'
  },
  year: {
    textAlign: 'left',
    marginLeft: 10,
  },
  thumbnail: {
    margin: 5,
    width: 80,
    height: 120,
  },
  listView: {
    paddingTop: 0,
    margin:5,
    backgroundColor: '#21406F',
  },
  movieSearch: {
    color: 'black',
  },
  buttonContainer: {
    flex: 1,
    height:20,
    width:40,
    backgroundColor: '#FFCCCC'
  },
  button: {
    height:20,
    width:80,
    textAlign: 'center',
    color: 'black',
    marginBottom: 7,
    backgroundColor: 'grey'
  },

  searchContainer: {
    flex: 1,
    backgroundColor: "#ffffff"
  }

});

