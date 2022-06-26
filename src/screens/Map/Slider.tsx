import React from 'react';
import {View, Dimensions} from 'react-native';
import {interpolate, Extrapolate} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
//Styles
import {carousel} from './styles';
//UI comps.
import Card from '../../components/Card';

const screenWidth = Dimensions.get('window').width;

const sampleData: any[] = [
  {key: 0, route: 'Ruta 1'},
  {key: 1, route: 'Ruta 2'},
  {key: 2, route: 'Ruta 3'},
  {key: 3, route: 'Ruta 4'},
];

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
      [screenWidth * 0.58, 0, -screenWidth],
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
      <Carousel
        snapEnabled={true}
        width={screenWidth}
        height={215}
        pagingEnabled
        windowSize={3}
        customAnimation={animationStyle}
        data={sampleData}
        renderItem={({item}) => <Card key={item.key} title={item.route} />}
      />
    </View>
  );
}

export default Slider;
