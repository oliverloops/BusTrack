import React, {useEffect, useContext, createContext} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MapboxGL from '@rnmapbox/maps';
//styles
import {styles, header, mapSection, favoriteSection} from './styles';
import avatarIcon from '../../../assets/images/avatar.png';
//UI comps.
import PlaceSM from '../../components/PlaceSM';
//Context API
const globalContext = createContext({});

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoib2xpdmVybG9vcHMiLCJhIjoiY2wzcmlrdGl3MWlhYzNicDc5bzNvZTZsZSJ9.SdSKd4MsZasXirgSyFCFrg',
);

function Home({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <globalContext.Provider value={navigation}>
        <View style={styles.layout}>
          <Header />
          <MapSection />
        </View>
        <FavoritePlaces />
      </globalContext.Provider>
    </SafeAreaView>
  );
}

function Header() {
  const onPressEvent = () => {
    console.log('Search Pressed!');
  };

  return (
    <>
      <Image style={header.avatar} source={avatarIcon} />
      <Text style={header.welcomeText}>Hola, Teresa</Text>
      <View style={header.subContent}>
        <Text style={header.title}>¿A dónde quieres ir?</Text>
        <Pressable style={header.search} onPress={onPressEvent}>
          <AntIcon name="search1" size={22} color="#929292" />
        </Pressable>
      </View>
    </>
  );
}

function MapSection() {
  const ctx = useContext(globalContext);

  return (
    <View style={mapSection.layout}>
      <View style={mapSection.textContent}>
        <Text style={mapSection.title}>Tu ubicación</Text>
        <TouchableOpacity onPress={() => ctx.navigate('Map')}>
          <Text style={mapSection.anchor}>Ver mapa completo</Text>
        </TouchableOpacity>
      </View>
      <View style={mapSection.mapWrapper}>
        <MapboxGL.MapView
          style={mapSection.mapContainer}
          zoomEnabled={true}
          compassEnabled={true}
          logoEnabled={false}
          onWillStartLoadingMap={() => console.log('on Rendering map')}>
          <MapboxGL.Camera
            zoomLevel={4}
            centerCoordinate={[-101.6826, 21.1212]}
          />
        </MapboxGL.MapView>
      </View>
      <View style={mapSection.location}>
        <View style={mapSection.pinBox}>
          <AntIcon name="enviroment" size={16} color="#fff" />
        </View>
        <Text style={{fontSize: 12, fontFamily: 'PPTelegraf-Regular'}}>
          Guanajuato, Centro
        </Text>
      </View>
    </View>
  );
}

function FavoritePlaces() {
  return (
    <View style={favoriteSection.layout}>
      <Text style={favoriteSection.title}>Lugares favoritos</Text>
      <View style={favoriteSection.cardContainer}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: '5%',
          }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <PlaceSM
              place={'Casa'}
              location={'El camino #14, Noria Alta'}
              category={1}
            />
            <PlaceSM
              place={'Universidad'}
              location={'Zona Centro #21'}
              category={2}
            />
            <PlaceSM
              place={'Casa de Alex'}
              location={'Barrio Alto #24, Carrizo'}
              category={1}
            />
            <PlaceSM
              place={'Casa de Erick'}
              location={'Positos #81, Centro'}
              category={1}
            />
            <PlaceSM
              place={'Centro de Idiomas'}
              location={'Zona Centro #32'}
              category={2}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;
