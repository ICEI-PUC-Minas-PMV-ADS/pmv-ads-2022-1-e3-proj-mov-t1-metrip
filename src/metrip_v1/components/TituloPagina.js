import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TituloPagina = ({ iconeDaPagina, nomePagina }) => {
  return (
    <View style={styles.tituloPagina}>
      <View style={styles.icon}>{iconeDaPagina}</View>
      <Text style={styles.nomePagina}>{nomePagina}</Text>{' '}
    </View>
  );
};

const styles = StyleSheet.create({
  tituloPagina: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 8,
    flexWrap: 'nowrap',
  },
  icon: {
    width: 27,
    height: 33,
    marginVertical: 8,
  },
  nomePagina: {
    color: '#4DDBE1',
    fontSize: 28,
    fontFamily: 'Rubik',
    fontWeight: 400,
  },
});

export default TituloPagina;
