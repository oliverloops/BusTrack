import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

function Header({navigation}: {navigation: any}) {
  return (
    <View style={styles.layout}>
      <Pressable
        style={styles.arrowContainer}
        onPress={() => navigation.navigate('Home')}>
        <MIcon name="keyboard-arrow-left" size={30} color="#929292" />
      </Pressable>
      <Text style={styles.title}>Rutas Disponibles</Text>
      <Pressable style={styles.arrowContainer}>
        <AntIcon name="search1" size={20} color="#929292" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowContainer: {
    width: 38,
    height: 38,
    backgroundColor: '#ededed',
    borderRadius: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    fontFamily: 'PPTelegraf-UltraBold',
  },
});

export default Header;
