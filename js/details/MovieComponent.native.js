'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import ButtonView from "./../views/ButtonView";

export default class MoviesComponent extends Component {
  constructor(props) {
    super(props);
    this.n = props.navigator;
    this.movie = props.movie;
  }

  onGoBack() {
    this.n.goBack();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={{uri: this.movie.originalPoster}}
            style={styles.image}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{this.movie.title}</Text>
            <Text style={styles.normalText}>Year: {this.movie.year}</Text>
            <Text style={styles.normalText}>Runtime: {this.movie.releasedOn} mins</Text>
            <Text style={styles.normalText}>Audience Rating: {this.movie.rating}</Text>
            <Text style={styles.normalText}>Critics Rating: {this.movie.rating}</Text>
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.synopsisText}>Synopsis:</Text>
          <Text style={styles.normalText}>{this.movie.synopsis}</Text>
        </View>
        <ButtonView text="< Back" onClick={this.onGoBack.bind(this)}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({

  mainContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#21406F',
    padding:10
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: 'stretch',
    justifyContent:'space-around',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 80,
    height: 150
  },
  infoContainer: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'space-around',
    paddingLeft: 10,
    marginLeft: 10,
    paddingBottom:20
  },
  title: {
    fontSize: 20,
    paddingLeft: 10
  },
  normalText: {

  },
  detailsContainer: {
    marginTop: 10,
    backgroundColor: '#ffffff',
    padding: 10
  },
  synopsisText: {
    fontSize: 16
  }
});