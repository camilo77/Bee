/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Mapa from './Mapa';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const SimpleApp = StackNavigator({
  Home: { screen: Home },
  Mapa: { screen: Mapa }
});

export default class App extends Component {
  render() {
    return (
      <SimpleApp/>
    );
  }
}
