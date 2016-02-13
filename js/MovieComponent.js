
'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  Text,
} from 'react-native';

export default class MoviesComponent extends Component {
  constructor(props) {
    super(props);
    this.movie = props.movie;
  }

  render() {
    return (
      <View>
        <Text>This is the text</Text>
      </View>
    );
  }
}