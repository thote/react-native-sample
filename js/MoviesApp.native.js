'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  BackAndroid
} from 'react-native';

import SearchComponent from "./search/SearchComponent.native.js";
import MovieComponent from "./details/MovieComponent.native.js";

var _navigator = {};
var router = (route, navigator) => {
  _navigator = navigator;
  var routeTo = (nextRoute) => {
    var nextIndex = route.index + 1;
    navigator.push({name: nextRoute.name, props: nextRoute.props, index: nextIndex});
  };

  var goBack = () => {
    if (route.index > 0) {
      navigator.pop();
    }
  };

  var router = {routeTo: routeTo, goBack: goBack};
  var component = {};
  if (route.name == 'SearchComponent') {
    component = (<SearchComponent navigator={router}/>);
  } else if (route.name = "MovieComponent") {
    component = (<MovieComponent navigator={router} movie={route.props.movie}/>);
  }
  return component;
};

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

export default class MoviesApp extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{name: 'SearchComponent', index: 0}}
        renderScene={router}
      />
    );
  }
}

