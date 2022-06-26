import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

function Card() {
  return (
    <View style={styles.container}>
      <Text>This is a card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 206,
    height: 212,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginHorizontal: 10,
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
});

export default Card;
