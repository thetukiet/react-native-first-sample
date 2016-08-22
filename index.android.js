
import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

var styles = require('./styles.js');
var LogInView = require('./lib/loginView');
//var MainView = require('./lib/mainView');
import MainView from './lib/mainView';

var RCTUIManager = require('NativeModules').UIManager;
var PersonItemView = require('./lib/personItemView');

var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  snapVelocity: 8,
  edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  springTension: 100,
  springFriction: 1,
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});


var HelloSample = React.createClass({
  
  renderScenes(route, navigator) {
    if (route.id === 1) {
      return <LogInView navigator={navigator} />
    } else if (route.id === 2) {
      return <MainView navigator={navigator} />
    }
  },

  configureScenes(route) {
    return CustomSceneConfig;
  },

  render() {
    return (
      <Navigator
        initialRoute={{id:2 }}
        renderScene={this.renderScenes}
        configureScene={this.configureScenes} />
    );
  }
});

AppRegistry.registerComponent('HelloSample', () => HelloSample);
