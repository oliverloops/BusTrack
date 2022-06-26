import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  layout: {
    marginHorizontal: '5%',
  },
});

const header = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48,
  },
  welcomeText: {
    fontSize: 14,
    paddingTop: 5,
    fontWeight: '400',
    fontFamily: 'PPTelegraf-Regular',
  },
  title: {
    fontSize: 21,
    fontWeight: '800',
    fontFamily: 'PPTelegraf-UltraBold',
  },
  search: {
    width: 38,
    height: 38,
    borderRadius: 50,
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const mapSection = StyleSheet.create({
  layout: {
    marginTop: 30,
  },
  textContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '800',
    fontFamily: 'PPTelegraf-UltraBold',
  },
  anchor: {
    color: '#0083FC',
    fontSize: 11,
    fontWeight: '400',
    fontFamily: 'PPTelegraf-Regular',
  },
  mapWrapper: {
    borderRadius: 18,
    overflow: 'hidden',
    marginVertical: 15,
  },
  mapContainer: {
    width: '100%',
    height: 250,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinBox: {
    width: 24,
    height: 24,
    backgroundColor: '#43AFFE',
    borderRadius: 50,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const favoriteSection = StyleSheet.create({
  layout: {
    marginTop: 30,
  },
  title: {
    fontSize: 21,
    fontWeight: '800',
    marginHorizontal: '5%',
    fontFamily: 'PPTelegraf-UltraBold',
  },
  cardContainer: {
    flexDirection: 'row',
  },
});

export {styles, header, mapSection, favoriteSection};
