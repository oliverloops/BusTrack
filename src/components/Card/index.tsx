import React from 'react';
import {View, Text, Image, Pressable, StyleSheet, Platform} from 'react-native';
//Icons
import FAIcon from 'react-native-vector-icons/FontAwesome';
import OctIcon from 'react-native-vector-icons/Octicons';

function Card({title, transport}: {item: string; transport: string}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/images/sample.png')}
      />
      <Text style={styles.routeTitle}>{title}</Text>
      <View style={styles.infoLayout}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={[styles.infoContainer, {backgroundColor: '#43AFFE'}]}>
            <FAIcon name="clock-o" size={11} color="#fff" />
          </View>
          <Text style={styles.infoText}>8 Mins.</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <View style={[styles.infoContainer, {backgroundColor: '#B377FF'}]}>
            <FAIcon name="bus" size={9} color="#fff" />
          </View>
          <Text style={styles.infoText}>{transport}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Pasaje</Text>
          <Text style={styles.price}>$7.00</Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => console.log('Pressed!')}>
          <OctIcon name="bell-fill" size={22} color="rgb(142, 142, 142)" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 205,
    height: 213,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 10,
    marginLeft: '5%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  img: {
    width: 185,
    height: 75,
    borderRadius: 8,
  },
  routeTitle: {
    fontSize: 15,
    fontWeight: '800',
    fontFamily: 'PPTelegraf-UltraBold',
    marginVertical: 10,
  },
  infoLayout: {
    flexDirection: 'row',
  },
  infoContainer: {
    borderRadius: 50,
    width: 18,
    height: 18,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'PPTelegraf-UltraLight',
    marginHorizontal: 5,
  },
  priceContainer: {
    marginTop: 25,
  },
  priceLabel: {
    fontSize: 12,
    fontWeight: '200',
    fontFamily: 'PPTelegraf-UltraLight',
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'PPTelegraf-UltraBold',
    marginLeft: 10,
    marginTop: 5,
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 50,
    backgroundColor: '#ededed',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default Card;
