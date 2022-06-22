import React from 'react';
import { StyleSheet, View, Text, TextInput, TextArea } from 'react-native';
import IconVoltar from '../assets/icons/IconVoltar';
import { useNavigation, useIsFocused } from '@react-navigation/native';

const TituloRegistro = ({ cidade, uf, pais, local, data }, props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <IconVoltar />
      <Text>
        <View style={styles.local}> {local}</View>
        <View style={styles.data}> {data}</View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 8,
    textAlign: 'center',
    flexWrap: 'nowrap',
    margin: 12,
    marginRight: 55,
  },
  local: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    color: '#71DBD2',
    fontSize: 22,
    fontFamily: 'Rubik',
    fontWeight: 500,
  },
  data: {
    color: '#828282',
    fontSize: 18,
    fontFamily: 'Montserrat',
    flexWrap: 'nowrap',
  },
});

export default TituloRegistro;
