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


export default class MovieSearchItem extends Component {

  constructor(props) {
    super(props);
    this.movie = props.movie;
    this.navigator = props.navigator;
  }

  showMovieDetails(movie) {
    this.navigator.routeTo({name: "MovieComponent", props: {movie: movie }});
  }

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <TouchableElement onPress={() => this.showMovieDetails(this.movie)}>
        <View style={styles.container}>
          <Image
            source={{uri: this.movie.poster}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{this.movie.title}</Text>
            <Text style={styles.otherText}>Release: {this.movie.releasedOn}</Text>
            <Text style={styles.otherText}>Rating: {this.movie.rating}</Text>
            <Text style={styles.otherText}>Duration: {this.movie.duration} mins</Text>
          </View>
        </View>
      </TouchableElement>
    );
  }
}

var styles = StyleSheet.create({
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
  otherText: {
    textAlign: 'left',
    marginLeft: 10,
  },
  thumbnail: {
    margin: 5,
    width: 80,
    height: 120,
  }
});

AppRegistry.registerComponent('SearchItem', () => MovieSearchItem);