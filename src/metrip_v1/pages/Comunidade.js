import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { List } from 'react-native-paper';

import Container from '../components/Container';
import Body from '../components/Body';
import TituloPagina from '../components/TituloPagina';

import IconMeusRegistros from '../assets/icons/IconMeusRegistros';

const DATA = [
  {
    id: '1',
    cidade: 'Oia',
    estado: 'UF',
    pais: 'GRÉCIA',
    data: '14/08/2018',
    usuario:'Gustavo',
  },
    {
    id: '2',
    cidade: 'San Luis Obispo',
    estado: 'CA',
    pais: 'EUA',
    data: '08/10/2019',
    usuario:'Adriana',
  },
    {
    id: '3',
    cidade: 'Volcanois National Park',
    estado: 'HI',
    pais: 'EUA',
    data: '10/04/2021',
    usuario:'Rafael',
  },
    {
    id: '4',
    cidade: 'Placencia',
    estado: 'UF',
    pais: 'BELIZE',
    data: '25/03/2022',
    usuario:'Rodrigo',
  },
   {
    id: '5',
    cidade: 'Coconico',
    estado: 'AZ',
    pais: 'EUA',
    data: '22/06/2018',
    usuario:'Carlos',
  },
  {
    id: '6',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    pais: 'Brasil',
    data: '13/05/2020',
    usuario:'Ruver',
  },
  {
    id: '7',
    cidade: 'Sabará',
    estado: 'MG',
    pais: 'Brasil',
    data: '15/02/2021',
    usuario:'Will',
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const Comunidade = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <List.Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        title= {item.cidade +", "+ item.estado + " - "+ item.pais}
        description={item.data +", by @" + item.usuario}
        left={(props) => <List.Icon {...props} icon="airplane" />}
      />
    );
  };

  return (
    <Container>
    <TituloPagina iconeDaPagina={<IconMeusRegistros />} nomePagina={'COMUNIDADE'} />
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Comunidade;
