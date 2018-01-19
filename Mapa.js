import React, { Component } from 'react';
import MapView from 'react-native-maps';

import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Card from './components/card';

export default class Mapa extends Component {
  static navigationOptions = {
    title: 'Mapa de lavaderos',
  };
  render () {
    return (
      <View style = { { flex: 1, backgroundColor: 'white' } }>
        <MapView
          style = { { flex: 1} }
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style = { styles.section2 } >
          <ScrollView
            horizontal = { true }
            showsHorizontalScrollIndicator = { false }
            style={ { paddingLeft: WINDOW.width * 0.1 / 2 }
          }>
            <Card
              image = { require('./images/headerCard2.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2, height: WINDOW.width * 0.6, } }
              title = 'MecaAliados'
            />
            <Card
              image = { require('./images/headerCard3.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2, height: WINDOW.width * 0.6, } }
              title = 'Accesorios'
            />
            <Card
              image = { require('./images/headerCard2.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2, height: WINDOW.width * 0.6, } }
              title = 'MecaAliados'
            />
            <Card
              image = { require('./images/headerCard3.jpg') }
              style = { { width: WINDOW.width * 0.9 / 2 , height: WINDOW.width * 0.6, } }
              title = 'Accesorios'
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const WINDOW = Dimensions.get('window');
const styles = StyleSheet.create({
  section2: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    width: WINDOW.width,
    height: WINDOW.width * 0.6,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});
