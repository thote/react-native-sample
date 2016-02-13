
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

import SearchPresenter from "./SearchPresenter.js";


export default class SearchComponent extends Component {

  constructor(props) {
    super(props);
    this.p = new SearchPresenter(this, props.navigator);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      searchText: ""
    };
  }

  componentDidMount() {
    this.p.fetchData();
  }

  showMovies(movies) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(movies),
      loaded: true
    });
    this.refs.moviesListView.scrollTo(0);
  }

  showAlert(msg) {
    alert(msg + this.state.searchText);
  }

  getSearchQuery() {
    return this.state.searchText;
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
          <TextInput onChangeText={this.p.onSearchTextChange.bind(this.p)}
                     value={this.state.searchText}
                     placeholder="Search a movie..."
                     style={styles.movieSearchInput}/>
          <TouchableElement onPress={this.p.search.bind(this.p)}>
            <View style={styles.newContainer}>
              <Text style={styles.newText}>Search</Text>
            </View>
          </TouchableElement>
        </View>

        <ListView
          ref="moviesListView"
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie.bind(this)}
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
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <TouchableElement onPress={() => this.p.showMovieDetails(movie)}>
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
      </TouchableElement>
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

  movieSearchInput: {
    flex: 1,
    color: 'black',
    height: 50,
    width: 100,
  },

  buttonContainer: {
    flex: 1,
    height:20,
    width:40,
    backgroundColor: '#FFCCCC'
  },

  searchContainer: {
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    padding: 5,
  },

  newContainer: {
    flexDirection: 'column',
    height: 50,
    justifyContent: 'center',
  },

  newText: {
    height: 25,
    color: "#ffffff",
    backgroundColor: 'grey',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 10,
    marginLeft: 10,
    padding: 5,
  }
});

AppRegistry.registerComponent('SearchComponent', () => SearchComponent);

