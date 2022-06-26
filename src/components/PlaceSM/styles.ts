import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 165,
    height: 123,
    borderRadius: 16,
    backgroundColor: '#fff',
    paddingVertical: 7,
    paddingHorizontal: 12,
    marginRight: 15,
    marginVertical: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: 63,
    height: 42,
    marginTop: 10,
    marginBottom: 12,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  pinBox: {
    width: 16,
    height: 16,
    backgroundColor: '#43AFFE',
    borderRadius: 50,
    marginRight: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
