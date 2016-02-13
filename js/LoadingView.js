'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class LoadingView extends Component {

  constructor(props) {
    super(props);
    this.what = props.what;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Loading {this.what}...
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#21406F'
  },

  text: {
    height: 25,
    color: "#ffffff",
    backgroundColor: 'grey',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 10,
    marginLeft: 10,
    padding: 5
  }
});

AppRegistry.registerComponent('LoadingView', () => LoadingView);