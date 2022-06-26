import React from 'react';
import {View, Text, ScrollView} from 'react-native';
//Styles
import {carousel} from './styles';
//UI comps.
import Card from '../../components/Card';

function Carousel() {
  return (
    <ScrollView
      style={carousel.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <View style={carousel.layout}>
        <Card />
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
}

export default Carousel;
