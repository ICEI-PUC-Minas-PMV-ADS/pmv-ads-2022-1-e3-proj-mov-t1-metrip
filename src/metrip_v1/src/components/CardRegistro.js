import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { List } from 'react-native-paper';

const CardRegistro = ({ imagem, local, data, usuarioResponsavel }, props) => {
  return (
    <View style={styles.view} {...props}>
      <View style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/belohorizonte.png')}
        />
      </View>
      <View style={styles.informacoesCard}>
        <Text style={styles.local}> {local}</Text>
        <Text style={styles.data}> {data}</Text>
        <Text style={styles.usuarioResponsavel}> {usuarioResponsavel}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'nowrap',
    margin: 10,
    marginTop: 5,
    paddingVertical: 10,
    paddingLeft: 12,
    borderRadius: 4,
    backgroundColor: '#FFF',
    shadowColor: '#444444',
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    cursor: 'pointer',
  },
  image: {
    display: 'flex',
  },
  tinyLogo: {
    width: 75,
    height: 75,
  },
  informacoesCard: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  local: {
    color: '#71DBD2',
    fontSize: 20,
    fontFamily: 'Rubik',
    fontWeight: 500,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  data: {
    color: '#828282',
    fontSize: 14,
    fontFamily: 'Montserrat',
    flexWrap: 'nowrap',
    marginBottom: 15,
  },
  usuarioResponsavel: {
    color: '#34BCDF',
    fontSize: 12,
    fontFamily: 'Montserrat',
    flexWrap: 'nowrap',
  },
});

export default CardRegistro;
