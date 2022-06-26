import {StyleSheet, Dimensions} from 'react-native';

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    marginTop: 5,
  },
  mapWrapper: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
    marginVertical: 25,
  },
  mapContainer: {
    width: '100%',
    height: screenHeight - screenHeight * 0.1,
  },
});

const carousel = StyleSheet.create({
  container: {
    width: '100%',
    transform: [{translateY: screenHeight - screenHeight * 0.44}],
  },
  layout: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export {styles, carousel};
