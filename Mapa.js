import React, { Component } from 'react';
import MapView from 'react-native-maps';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import Card from './components/card';

export default class Mapa extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      focusRegion: {
        latitude: 4.68,
        longitude: -74.106,
        latitudeDelta: LAT_DELTA,
        longitudeDelta: LNG_DELTA,
      },
      selfPosition: {
        latitude: 4.68,
        longitude: -74.106,
      },
    };
    this.onRegionChangeComplete = this.onRegionChangeComplete.bind( this );
  }

  // method to set navigator options ( provided by react navigation )
  static navigationOptions = {
    title: 'Mapa de lavaderos',
  };

  // method called after component rendered
  async componentDidMount() {
    // requesting permission
    await requestLocationPermission()
    // function when geolocation success
    const success = ( position ) => {
      var currentPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
      this.setState({ selfPosition: currentPosition })
    }
    // function when geolocation has errors
    const error = ( error ) => {
      alert(JSON.stringify(error))
    }
    // geolocation options to get position
    const options = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 1000,
      distanceFilter: 2,
    }
    // calling function to read position on changed
    this.watchId = navigator.geolocation.watchPosition( success, error, options )
  }

  // method called before unmount
  componentWillUnmount() {
    // stop watching position
    navigator.geolocation.clearWatch( this.watchId )
  }

  // method to control region change
  onRegionChangeComplete ( region ) {
    this.setState({ focusRegion: region });
  }

  render () {
    return (
      <View style = { { flex: 1, backgroundColor: 'white' } }>
        <MapView
          style = { { flex: 1} }
          initialRegion = { this.state.focusRegion }
          onRegionChangeComplete = { this.onRegionChangeComplete }
        >
          <MapView.Marker
            coordinate = { this.state.selfPosition }
            title = { 'Yo' }
            description = { 'Estoy acá' }
          />
        </MapView>
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

const LAT_DELTA = 0.0922
const LNG_DELTA = 0.0421
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

// function to request location access
async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Bee App Location Permission',
        'message': 'Bee App needs access to your location ' +
                   'so you can find awesome places around you.'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
    } else {
      console.log("Location permission denied")
    }
  } catch (err) {
    alert(err)
  }
}
