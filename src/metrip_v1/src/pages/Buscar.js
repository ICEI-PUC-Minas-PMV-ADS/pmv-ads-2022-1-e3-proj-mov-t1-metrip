import React, { Component } from 'react'
import MapView from 'react-native-maps'
import { Text, StyleSheet, View, Dimensions } from 'react-native'
import { Searchbar, Button } from 'react-native-paper'
import * as WebBrowser from 'expo-web-browser'

import Container from '../components/Container'
import TituloPagina from '../components/TituloPagina'

import IconBuscar from '../assets/icons/IconBuscar'

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      'https://www.google.com.br/maps/'
    );
  };

  return (
    <Container color={'#F2F2F2'}>
      <TituloPagina iconeDaPagina={<IconBuscar />} nomePagina={'BUSCAR'} />
      <View style={styles.container}>
        <Searchbar
          placeholder="Onde ir...."
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Button
          mode="contained"
          onPress={_handlePressButtonAsync}
          style={styles.button}>
          buscar
        </Button>
        <MapView style={styles.map} />
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    padding: 2,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
