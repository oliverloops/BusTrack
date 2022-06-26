import React from 'react';
import {View, Text, Image} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
//styles
import styles from './styles';
//images
import home from '../../../assets/images/house.png';
import school from '../../../assets/images/school.png';

export default function PlaceSM({
  place,
  location,
  category,
}: {
  place: string;
  location: string;
  category: number;
}) {
  //return assets categorized
  const getImage = () => {
    switch (category) {
      case 1:
        return home;
        break;
      case 2:
        return school;
        break;
      default:
        return null;
    }
  };

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={getImage()} />
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          fontFamily: 'PPTelegraf-UltraBold',
        }}>
        {place}
      </Text>
      <View style={styles.location}>
        <View style={styles.pinBox}>
          <AntIcon name="enviroment" size={10} color="#fff" />
        </View>
        <Text
          style={{
            fontSize: 9,
            fontWeight: '400',
            fontFamily: 'PPTelegraf-Regular',
          }}>
          {location}
        </Text>
      </View>
    </View>
  );
}
