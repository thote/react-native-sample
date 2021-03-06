
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
} from 'react-native';

import MovieSearchItem from "./SearchItem.native.js";
import LoadingView from "./../loading/LoadingView";
import ButtonView from "./../views/ButtonView";
import MoviesRepo from "./../repo/MoviesRepo";


export default class SearchComponent extends Component {

  constructor(props) {
    super(props);
    this.moviesRepo = new MoviesRepo();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      searchText: ""
    };
  }

  componentDidMount() {
   this.search();
  }

  showMovies(movies) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(movies),
      loaded: true
    });
    this.refs.moviesListView.scrollTo(0);
  }

  onSearchTextChange(text) {
    this.setState({searchText: text});
  }

  onSearchClicked() {
    this.showMovies([]);
    this.showLoadingScreen();
    this.search(this.state.searchText)
  }

  search(query) {
    this.moviesRepo.get(query)
      .then(this.showMovies.bind(this));
  }

  showLoadingScreen() {
    this.setState({loaded: false});
  }

  showAlert(msg) {
    alert(msg + this.state.searchText);
  }

  renderMovie(movie) {
    return (<MovieSearchItem navigator={this.props.navigator} movie={movie} />);
  }

  render() {
    if (!this.state.loaded) {
      return (<LoadingView what="Movies" />);
    }


    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Best movies to watch</Text>

        <View style={styles.searchContainer}>
          <TextInput onChangeText={this.onSearchTextChange.bind(this)}
                     value={this.state.searchText}
                     placeholder="Search a movie..."
                     style={styles.movieSearchInput}/>
          <ButtonView text="Search" onClick={this.onSearchClicked.bind(this)} />
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
}

var styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#21406F',
    marginTop: 0,
  },

  mainTitle: {
    fontSize: 26,
    marginBottom: 8,
    marginLeft: 10,
    textAlign: 'center',
    color: 'white'
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

  searchContainer: {
    backgroundColor: "#ffffff",
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 5,
    padding: 5,
  }
});

AppRegistry.registerComponent('SearchComponent', () => SearchComponent);

