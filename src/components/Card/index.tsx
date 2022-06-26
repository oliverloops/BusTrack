import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

function Card({title}: {item: string}) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 206,
    height: 212,
    borderRadius: 16,
    backgroundColor: '#fff',
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
});

export default Card;
