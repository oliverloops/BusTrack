import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MapboxGL from '@rnmapbox/maps';
//Styles
import {styles} from './styles';
//Layout comps.
import Header from '../../layout/Header';
//UI comps.
import Card from '../../components/Card';
import Carousel from './Carousel';

function Map({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.layout}>
        <Header navigation={navigation} />
        <Content />
      </View>
    </SafeAreaView>
  );
}

function Content() {
  return (
    <View style={styles.mapWrapper}>
      <MapboxGL.MapView
        style={styles.mapContainer}
        zoomEnabled={true}
        compassEnabled={true}
        logoPosition={{top: 10, right: 10}}>
        <MapboxGL.Camera
          zoomLevel={4}
          centerCoordinate={[-101.6826, 21.1212]}
        />
        <Carousel />
      </MapboxGL.MapView>
    </View>
  );
}

export default Map;
