import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {interpolate, Extrapolate} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
//Styles
import {carousel} from './styles';
//UI comps.
import Card from '../../components/Card';

const screenWidth = Dimensions.get('window').width;

function Slider() {
  const parallaxScrollingScale = 0.82;
  const parallaxAdjacentItemScale = 0.82;

  //Custom carousel animation
  const animationStyle = React.useCallback(value => {
    'worklet';
    const zIndex = interpolate(
      value,
      [-1, 0, 1],
      [10, 20, 30],
      Extrapolate.CLAMP,
    );

    const translateX = interpolate(
      -value,
      [-1, 0, 1],
      [screenWidth * 0.85, 0, -screenWidth],
    );

    const scale = interpolate(
      value,
      [-1, 0, 1],
      [
        parallaxAdjacentItemScale,
        parallaxScrollingScale,
        parallaxAdjacentItemScale,
      ],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{translateX}],
      zIndex,
      scale,
    };
  }, []);

  return (
    <View style={carousel.container}>
      <View style={carousel.layout}>
        <Card />
        <Card />
        <Card />
      </View>
    </View>
  );
}

export default Slider;
