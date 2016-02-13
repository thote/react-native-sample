'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';


export default class ButtonView extends Component {

  constructor(props) {
    super(props);
    this.text = props.text;
    this.onClick = props.onClick;
    this.styles = props.styles || styles;
  }

  render() {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    }

    return (
      <TouchableElement onPress={this.onClick}>
        <View style={this.styles.container}>
          <Text style={this.styles.text}>{this.text}</Text>
        </View>
      </TouchableElement>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 50,
    justifyContent: 'center',
  },

  text: {
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

AppRegistry.registerComponent('ButtonView', () => ButtonView);