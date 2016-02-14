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
    backgroundColor: '#000000bb'
  },

  text: {
    height: 25,
    color: "#ffffff",
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

AppRegistry.registerComponent('LoadingView', () => LoadingView);